// public/sw.js
import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";

// 30 days in seconds
const HEADSHOT_TTL_SECONDS = 30 * 24 * 60 * 60;

const AVATAR_CACHE = "rbgh-avatars";

const ALLOWED_HOSTS = new Set(["api.pxlgaming.be", "api.pxlgaming.dev"]);

const ENFORCE_HOSTS = false;
const PATH_PREFIXES = ["/assets/headshot", "/assets/avatars"];

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

function isAvatarRequest(req) {
  if (req.method !== "GET") return false;
  if (req.destination && req.destination !== "image") return false;
  try {
    const url = new URL(req.url);
    const pathOk = PATH_PREFIXES.some((p) => url.pathname.startsWith(p));
    const hostOk = ENFORCE_HOSTS ? ALLOWED_HOSTS.has(url.hostname) : true;
    return pathOk && hostOk;
  } catch {
    return false;
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (!isAvatarRequest(request)) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(AVATAR_CACHE);
      const cached = await cache.match(request, { ignoreVary: true });
      if (cached) {
        return cached;
      }

      const resp = await fetch(request);
      try {
        if (resp && (resp.ok || resp.type === "opaque")) {
          await cache.put(request, resp.clone());
        }
      } catch {}
      return resp;
    })()
  );
});

registerRoute(
  ({ url }) =>
    url.pathname.startsWith("/assets/headshot") ||
    url.pathname.startsWith("/assets/avatars"),
  new CacheFirst({
    cacheName: AVATAR_CACHE,
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({
        maxAgeSeconds: HEADSHOT_TTL_SECONDS,
        purgeOnQuotaError: true,
      }),
    ],
  })
);

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) =>
          name.startsWith("rbgh-avatars-")
            ? caches.delete(name)
            : Promise.resolve()
        )
      );
      const cache = await caches.open(AVATAR_CACHE);
      const requests = await cache.keys();

      const groups = new Map();

      for (const req of requests) {
        try {
          const u = new URL(req.url);
          const isImage =
            u.pathname.startsWith("/assets/headshot") ||
            u.pathname.startsWith("/assets/avatars");
          if (!isImage) continue;

          const params = new URLSearchParams(u.search);
          params.delete("v");
          const entries = Array.from(params.entries()).sort();
          const paramsString = entries.length
            ? "?" + entries.map(([k, v]) => `${k}=${v}`).join("&")
            : "";
          const key = u.pathname + paramsString;

          const vRaw = u.searchParams.get("v");
          const hasV = u.searchParams.has("v");
          // If v is present and a valid number use it; if present but empty treat as NaN marker (-Infinity)
          // If v is not present at all keep `null` so we treat unversioned items separately.
          const vNum =
            hasV && vRaw !== null
              ? vRaw !== "" && !isNaN(Number(vRaw))
                ? Number(vRaw)
                : -Infinity
              : null;

          if (!groups.has(key)) groups.set(key, []);
          groups.get(key).push({ req, v: vNum, url: u.href });
        } catch (err) {}
      }

      await Promise.all(
        Array.from(groups.values()).map(async (items) => {
          if (!items || items.length <= 1) return;
          // if any item is unversioned (v === null), skip deleting so we don't remove unversioned images unexpectedly
          if (items.some((it) => it.v === null)) return;
          let maxV = -Infinity;
          for (const it of items) {
            if (it.v > maxV) maxV = it.v;
          }
          await Promise.all(
            items.map((it) =>
              it.v < maxV
                ? (console.log("[SW] abc deleting older headshot cache", it.url),
                  cache.delete(it.req))
                : Promise.resolve()
            )
          );
        })
      );
      await self.clients.claim();
    })()
  );
});

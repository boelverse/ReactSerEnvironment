// firebase-messaging-sw.js

// Keep your basic lifecycle handlers
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

// Import Firebase compat SDKs
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js"
);

// Same config as in your app / sw.js
const firebaseConfig = {
  apiKey: "AIzaSyCTA3NZsYoSeGskrIL_2isF2aCqLpEsRYc",
  authDomain: "rbgh-app.firebaseapp.com",
  databaseURL:
    "https://rbgh-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rbgh-app",
  storageBucket: "rbgh-app.firebasestorage.app",
  messagingSenderId: "955092745966",
  appId: "1:955092745966:web:237adaa1a37752a93ebdff",
  measurementId: "G-004FZK6EXT",
};

const CHECKIN_TAG = "checkin-reminder";
const CHECKIN_TYPE = "LONG_CHECKIN_REMINDER";

self.addEventListener("notificationclose", (event) => {
  if (event.notification.tag === CHECKIN_TAG) {
    console.log("[FMSW] Reminder closed");
  }
});

function isCheckinReminder(payload) {
  return payload?.data?.type === CHECKIN_TYPE;
}

async function maybeShowCheckinReminder(payload) {
  const existing = await self.registration.getNotifications({
    tag: CHECKIN_TAG,
  });
  if (existing.length > 0) return;

  const title = payload?.notification?.title || payload?.data?.title;
  if (!title) return;

  const body = payload?.notification?.body || payload?.data?.body || "";

  self.registration.showNotification(title, {
    body,
    icon: payload?.data?.icon || "/pwa-192x192.png",
    data: payload?.data || {},
    tag: CHECKIN_TAG,
    renotify: false,
    requireInteraction: true,
  });
}

try {
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  console.log(
    "[FMSW] Firebase Messaging initialized in firebase-messaging-sw.js"
  );

  messaging.onBackgroundMessage(async (payload) => {
    if (isCheckinReminder(payload)) {
      await maybeShowCheckinReminder(payload);
      return;
    }

    const title =
      payload?.notification?.title || payload?.data?.title || "Notification";

    const options = {
      body: payload?.notification?.body || payload?.data?.body || "",
      icon: payload?.data?.icon || "/pwa-192x192.png",
      data: payload?.data || {},
    };

    self.registration.showNotification(title, options);
  });
} catch (err) {
  console.warn("[FMSW] Firebase messaging not initialized", err);
}

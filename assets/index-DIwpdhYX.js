(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=t(l);fetch(l.href,c)}})();function Sw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Jh={exports:{}},kl={},Zh={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function kw(){if(dg)return ke;dg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),E=Symbol.iterator;function S(j){return j===null||typeof j!="object"?null:(j=E&&j[E]||j["@@iterator"],typeof j=="function"?j:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,G={};function $(j,H,te){this.props=j,this.context=H,this.refs=G,this.updater=te||U}$.prototype.isReactComponent={},$.prototype.setState=function(j,H){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,H,"setState")},$.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function de(){}de.prototype=$.prototype;function q(j,H,te){this.props=j,this.context=H,this.refs=G,this.updater=te||U}var ce=q.prototype=new de;ce.constructor=q,B(ce,$.prototype),ce.isPureReactComponent=!0;var he=Array.isArray,we=Object.prototype.hasOwnProperty,W={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function C(j,H,te){var xe,Se={},be=null,Me=null;if(H!=null)for(xe in H.ref!==void 0&&(Me=H.ref),H.key!==void 0&&(be=""+H.key),H)we.call(H,xe)&&!b.hasOwnProperty(xe)&&(Se[xe]=H[xe]);var Fe=arguments.length-2;if(Fe===1)Se.children=te;else if(1<Fe){for(var $e=Array(Fe),mt=0;mt<Fe;mt++)$e[mt]=arguments[mt+2];Se.children=$e}if(j&&j.defaultProps)for(xe in Fe=j.defaultProps,Fe)Se[xe]===void 0&&(Se[xe]=Fe[xe]);return{$$typeof:r,type:j,key:be,ref:Me,props:Se,_owner:W.current}}function I(j,H){return{$$typeof:r,type:j.type,key:H,ref:j.ref,props:j.props,_owner:j._owner}}function P(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function A(j){var H={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(te){return H[te]})}var D=/\/+/g;function N(j,H){return typeof j=="object"&&j!==null&&j.key!=null?A(""+j.key):H.toString(36)}function We(j,H,te,xe,Se){var be=typeof j;(be==="undefined"||be==="boolean")&&(j=null);var Me=!1;if(j===null)Me=!0;else switch(be){case"string":case"number":Me=!0;break;case"object":switch(j.$$typeof){case r:case e:Me=!0}}if(Me)return Me=j,Se=Se(Me),j=xe===""?"."+N(Me,0):xe,he(Se)?(te="",j!=null&&(te=j.replace(D,"$&/")+"/"),We(Se,H,te,"",function(mt){return mt})):Se!=null&&(P(Se)&&(Se=I(Se,te+(!Se.key||Me&&Me.key===Se.key?"":(""+Se.key).replace(D,"$&/")+"/")+j)),H.push(Se)),1;if(Me=0,xe=xe===""?".":xe+":",he(j))for(var Fe=0;Fe<j.length;Fe++){be=j[Fe];var $e=xe+N(be,Fe);Me+=We(be,H,te,$e,Se)}else if($e=S(j),typeof $e=="function")for(j=$e.call(j),Fe=0;!(be=j.next()).done;)be=be.value,$e=xe+N(be,Fe++),Me+=We(be,H,te,$e,Se);else if(be==="object")throw H=String(j),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Me}function fe(j,H,te){if(j==null)return j;var xe=[],Se=0;return We(j,xe,"","",function(be){return H.call(te,be,Se++)}),xe}function Ee(j){if(j._status===-1){var H=j._result;H=H(),H.then(function(te){(j._status===0||j._status===-1)&&(j._status=1,j._result=te)},function(te){(j._status===0||j._status===-1)&&(j._status=2,j._result=te)}),j._status===-1&&(j._status=0,j._result=H)}if(j._status===1)return j._result.default;throw j._result}var ge={current:null},Q={transition:null},se={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Q,ReactCurrentOwner:W};function ne(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:fe,forEach:function(j,H,te){fe(j,function(){H.apply(this,arguments)},te)},count:function(j){var H=0;return fe(j,function(){H++}),H},toArray:function(j){return fe(j,function(H){return H})||[]},only:function(j){if(!P(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},ke.Component=$,ke.Fragment=t,ke.Profiler=l,ke.PureComponent=q,ke.StrictMode=s,ke.Suspense=v,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,ke.act=ne,ke.cloneElement=function(j,H,te){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var xe=B({},j.props),Se=j.key,be=j.ref,Me=j._owner;if(H!=null){if(H.ref!==void 0&&(be=H.ref,Me=W.current),H.key!==void 0&&(Se=""+H.key),j.type&&j.type.defaultProps)var Fe=j.type.defaultProps;for($e in H)we.call(H,$e)&&!b.hasOwnProperty($e)&&(xe[$e]=H[$e]===void 0&&Fe!==void 0?Fe[$e]:H[$e])}var $e=arguments.length-2;if($e===1)xe.children=te;else if(1<$e){Fe=Array($e);for(var mt=0;mt<$e;mt++)Fe[mt]=arguments[mt+2];xe.children=Fe}return{$$typeof:r,type:j.type,key:Se,ref:be,props:xe,_owner:Me}},ke.createContext=function(j){return j={$$typeof:h,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:c,_context:j},j.Consumer=j},ke.createElement=C,ke.createFactory=function(j){var H=C.bind(null,j);return H.type=j,H},ke.createRef=function(){return{current:null}},ke.forwardRef=function(j){return{$$typeof:m,render:j}},ke.isValidElement=P,ke.lazy=function(j){return{$$typeof:k,_payload:{_status:-1,_result:j},_init:Ee}},ke.memo=function(j,H){return{$$typeof:w,type:j,compare:H===void 0?null:H}},ke.startTransition=function(j){var H=Q.transition;Q.transition={};try{j()}finally{Q.transition=H}},ke.unstable_act=ne,ke.useCallback=function(j,H){return ge.current.useCallback(j,H)},ke.useContext=function(j){return ge.current.useContext(j)},ke.useDebugValue=function(){},ke.useDeferredValue=function(j){return ge.current.useDeferredValue(j)},ke.useEffect=function(j,H){return ge.current.useEffect(j,H)},ke.useId=function(){return ge.current.useId()},ke.useImperativeHandle=function(j,H,te){return ge.current.useImperativeHandle(j,H,te)},ke.useInsertionEffect=function(j,H){return ge.current.useInsertionEffect(j,H)},ke.useLayoutEffect=function(j,H){return ge.current.useLayoutEffect(j,H)},ke.useMemo=function(j,H){return ge.current.useMemo(j,H)},ke.useReducer=function(j,H,te){return ge.current.useReducer(j,H,te)},ke.useRef=function(j){return ge.current.useRef(j)},ke.useState=function(j){return ge.current.useState(j)},ke.useSyncExternalStore=function(j,H,te){return ge.current.useSyncExternalStore(j,H,te)},ke.useTransition=function(){return ge.current.useTransition()},ke.version="18.3.1",ke}var fg;function Gd(){return fg||(fg=1,Zh.exports=kw()),Zh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function Cw(){if(pg)return kl;pg=1;var r=Gd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(m,v,w){var k,E={},S=null,U=null;w!==void 0&&(S=""+w),v.key!==void 0&&(S=""+v.key),v.ref!==void 0&&(U=v.ref);for(k in v)s.call(v,k)&&!c.hasOwnProperty(k)&&(E[k]=v[k]);if(m&&m.defaultProps)for(k in v=m.defaultProps,v)E[k]===void 0&&(E[k]=v[k]);return{$$typeof:e,type:m,key:S,ref:U,props:E,_owner:l.current}}return kl.Fragment=t,kl.jsx=h,kl.jsxs=h,kl}var mg;function Tw(){return mg||(mg=1,Jh.exports=Cw()),Jh.exports}var g=Tw(),le=Gd();const gg=Sw(le);var ku={},ed={exports:{}},Yt={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function Iw(){return yg||(yg=1,function(r){function e(Q,se){var ne=Q.length;Q.push(se);e:for(;0<ne;){var j=ne-1>>>1,H=Q[j];if(0<l(H,se))Q[j]=se,Q[ne]=H,ne=j;else break e}}function t(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var se=Q[0],ne=Q.pop();if(ne!==se){Q[0]=ne;e:for(var j=0,H=Q.length,te=H>>>1;j<te;){var xe=2*(j+1)-1,Se=Q[xe],be=xe+1,Me=Q[be];if(0>l(Se,ne))be<H&&0>l(Me,Se)?(Q[j]=Me,Q[be]=ne,j=be):(Q[j]=Se,Q[xe]=ne,j=xe);else if(be<H&&0>l(Me,ne))Q[j]=Me,Q[be]=ne,j=be;else break e}}return se}function l(Q,se){var ne=Q.sortIndex-se.sortIndex;return ne!==0?ne:Q.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var v=[],w=[],k=1,E=null,S=3,U=!1,B=!1,G=!1,$=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ce(Q){for(var se=t(w);se!==null;){if(se.callback===null)s(w);else if(se.startTime<=Q)s(w),se.sortIndex=se.expirationTime,e(v,se);else break;se=t(w)}}function he(Q){if(G=!1,ce(Q),!B)if(t(v)!==null)B=!0,Ee(we);else{var se=t(w);se!==null&&ge(he,se.startTime-Q)}}function we(Q,se){B=!1,G&&(G=!1,de(C),C=-1),U=!0;var ne=S;try{for(ce(se),E=t(v);E!==null&&(!(E.expirationTime>se)||Q&&!A());){var j=E.callback;if(typeof j=="function"){E.callback=null,S=E.priorityLevel;var H=j(E.expirationTime<=se);se=r.unstable_now(),typeof H=="function"?E.callback=H:E===t(v)&&s(v),ce(se)}else s(v);E=t(v)}if(E!==null)var te=!0;else{var xe=t(w);xe!==null&&ge(he,xe.startTime-se),te=!1}return te}finally{E=null,S=ne,U=!1}}var W=!1,b=null,C=-1,I=5,P=-1;function A(){return!(r.unstable_now()-P<I)}function D(){if(b!==null){var Q=r.unstable_now();P=Q;var se=!0;try{se=b(!0,Q)}finally{se?N():(W=!1,b=null)}}else W=!1}var N;if(typeof q=="function")N=function(){q(D)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,fe=We.port2;We.port1.onmessage=D,N=function(){fe.postMessage(null)}}else N=function(){$(D,0)};function Ee(Q){b=Q,W||(W=!0,N())}function ge(Q,se){C=$(function(){Q(r.unstable_now())},se)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Q){Q.callback=null},r.unstable_continueExecution=function(){B||U||(B=!0,Ee(we))},r.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Q?Math.floor(1e3/Q):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return t(v)},r.unstable_next=function(Q){switch(S){case 1:case 2:case 3:var se=3;break;default:se=S}var ne=S;S=se;try{return Q()}finally{S=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Q,se){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ne=S;S=Q;try{return se()}finally{S=ne}},r.unstable_scheduleCallback=function(Q,se,ne){var j=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?j+ne:j):ne=j,Q){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ne+H,Q={id:k++,callback:se,priorityLevel:Q,startTime:ne,expirationTime:H,sortIndex:-1},ne>j?(Q.sortIndex=ne,e(w,Q),t(v)===null&&Q===t(w)&&(G?(de(C),C=-1):G=!0,ge(he,ne-j))):(Q.sortIndex=H,e(v,Q),B||U||(B=!0,Ee(we))),Q},r.unstable_shouldYield=A,r.unstable_wrapCallback=function(Q){var se=S;return function(){var ne=S;S=se;try{return Q.apply(this,arguments)}finally{S=ne}}}}(nd)),nd}var vg;function Nw(){return vg||(vg=1,td.exports=Iw()),td.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function bw(){if(_g)return Yt;_g=1;var r=Gd(),e=Nw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(l[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},E={};function S(n){return v.call(E,n)?!0:v.call(k,n)?!1:w.test(n)?E[n]=!0:(k[n]=!0,!1)}function U(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function B(n,i,o,u){if(i===null||typeof i>"u"||U(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function G(n,i,o,u,d,p,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=_}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new G(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];$[i]=new G(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new G(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new G(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new G(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new G(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new G(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new G(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new G(n,5,!1,n.toLowerCase(),null,!1,!1)});var de=/[\-:]([a-z])/g;function q(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(de,q);$[i]=new G(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(de,q);$[i]=new G(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(de,q);$[i]=new G(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new G(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new G(n,1,!1,n.toLowerCase(),null,!0,!0)});function ce(n,i,o,u){var d=$.hasOwnProperty(i)?$[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(B(i,o,d,u)&&(o=null),u||d===null?S(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var he=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),W=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),A=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),Q=Symbol.iterator;function se(n){return n===null||typeof n!="object"?null:(n=Q&&n[Q]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,j;function H(n){if(j===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);j=i&&i[1]||""}return`
`+j+n}var te=!1;function xe(n,i){if(!n||te)return"";te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(z){var u=z}Reflect.construct(n,[],i)}else{try{i.call()}catch(z){u=z}n.call(i.prototype)}else{try{throw Error()}catch(z){u=z}n()}}catch(z){if(z&&u&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),p=u.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{te=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?H(n):""}function Se(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=xe(n.type,!1),n;case 11:return n=xe(n.type.render,!1),n;case 1:return n=xe(n.type,!0),n;default:return""}}function be(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case b:return"Fragment";case W:return"Portal";case I:return"Profiler";case C:return"StrictMode";case N:return"Suspense";case We:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case A:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case D:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return i=n.displayName||null,i!==null?i:be(n.type)||"Memo";case Ee:i=n._payload,n=n._init;try{return be(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(i);case 8:return i===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function mt(n){var i=$e(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){u=""+_,p.call(this,_)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(_){u=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function rr(n){n._valueTracker||(n._valueTracker=mt(n))}function hs(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=$e(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Or(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vi(n,i){var o=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ds(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Fe(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function No(n,i){i=i.checked,i!=null&&ce(n,"checked",i,!1)}function bo(n,i){No(n,i);var o=Fe(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?fs(n,i.type,o):i.hasOwnProperty("defaultValue")&&fs(n,i.type,Fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ca(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function fs(n,i,o){(i!=="number"||Or(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var ir=Array.isArray;function sr(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Fe(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ro(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ps(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(ir(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Fe(o)}}function ms(n,i){var o=Fe(i.value),u=Fe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Ao(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ct(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ct(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var or,Po=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=or.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Dr(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wi=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(n){wi.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),_i[i]=_i[n]})});function Oo(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||_i.hasOwnProperty(n)&&_i[n]?(""+i).trim():i+"px"}function Do(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Oo(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var jo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lo(n,i){if(i){if(jo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Mo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xi=null;function gs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fo=null,on=null,Un=null;function ys(n){if(n=ul(n)){if(typeof Fo!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ua(i),Fo(n.stateNode,n.type,i))}}function lr(n){on?Un?Un.push(n):Un=[n]:on=n}function Uo(){if(on){var n=on,i=Un;if(Un=on=null,ys(n),i)for(n=0;n<i.length;n++)ys(i[n])}}function vs(n,i){return n(i)}function zo(){}var ar=!1;function Vo(n,i,o){if(ar)return n(i,o);ar=!0;try{return vs(n,i,o)}finally{ar=!1,(on!==null||Un!==null)&&(zo(),Uo())}}function ot(n,i){var o=n.stateNode;if(o===null)return null;var u=Ua(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var _s=!1;if(m)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){_s=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{_s=!1}function Ei(n,i,o,u,d,p,_,T,R){var z=Array.prototype.slice.call(arguments,3);try{i.apply(o,z)}catch(Y){this.onError(Y)}}var Si=!1,ws=null,yn=!1,Bo=null,Cc={onError:function(n){Si=!0,ws=n}};function Ho(n,i,o,u,d,p,_,T,R){Si=!1,ws=null,Ei.apply(Cc,arguments)}function Tc(n,i,o,u,d,p,_,T,R){if(Ho.apply(this,arguments),Si){if(Si){var z=ws;Si=!1,ws=null}else throw Error(t(198));yn||(yn=!0,Bo=z)}}function vn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ki(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function _n(n){if(vn(n)!==n)throw Error(t(188))}function ha(n){var i=n.alternate;if(!i){if(i=vn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return _n(d),n;if(p===u)return _n(d),i;p=p.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=p;else{for(var _=!1,T=d.child;T;){if(T===o){_=!0,o=d,u=p;break}if(T===u){_=!0,u=d,o=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===o){_=!0,o=p,u=d;break}if(T===u){_=!0,u=p,o=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Wo(n){return n=ha(n),n!==null?xs(n):null}function xs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=xs(n);if(i!==null)return i;n=n.sibling}return null}var Es=e.unstable_scheduleCallback,$o=e.unstable_cancelCallback,da=e.unstable_shouldYield,Ic=e.unstable_requestPaint,Ge=e.unstable_now,fa=e.unstable_getCurrentPriorityLevel,Ci=e.unstable_ImmediatePriority,jr=e.unstable_UserBlockingPriority,ln=e.unstable_NormalPriority,Go=e.unstable_LowPriority,pa=e.unstable_IdlePriority,Ti=null,Zt=null;function ma(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ti,n,void 0,(n.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:ya,qo=Math.log,ga=Math.LN2;function ya(n){return n>>>=0,n===0?32:31-(qo(n)/ga|0)|0}var Ss=64,ks=4194304;function Lr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ii(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,p=n.pingedLanes,_=o&268435455;if(_!==0){var T=_&~d;T!==0?u=Lr(T):(p&=_,p!==0&&(u=Lr(p)))}else _=o&~d,_!==0?u=Lr(_):p!==0&&(u=Lr(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Lt(i),d=1<<o,u|=n[o],i&=~d;return u}function Nc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ur(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Lt(p),T=1<<_,R=d[_];R===-1?((T&o)===0||(T&u)!==0)&&(d[_]=Nc(T,i)):R<=i&&(n.expiredLanes|=T),p&=~T}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ni(){var n=Ss;return Ss<<=1,(Ss&4194240)===0&&(Ss=64),n}function Mr(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Fr(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Lt(i),n[i]=o}function He(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Lt(o),p=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~p}}function Ur(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Lt(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Ne=0;function zr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var va,Cs,_a,wa,xa,Ko=!1,zn=[],kt=null,wn=null,xn=null,Vr=new Map,an=new Map,Vn=[],bc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ea(n,i){switch(n){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Vr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":an.delete(i.pointerId)}}function Vt(n,i,o,u,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=ul(i),i!==null&&Cs(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Rc(n,i,o,u,d){switch(i){case"focusin":return kt=Vt(kt,n,i,o,u,d),!0;case"dragenter":return wn=Vt(wn,n,i,o,u,d),!0;case"mouseover":return xn=Vt(xn,n,i,o,u,d),!0;case"pointerover":var p=d.pointerId;return Vr.set(p,Vt(Vr.get(p)||null,n,i,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,an.set(p,Vt(an.get(p)||null,n,i,o,u,d)),!0}return!1}function Sa(n){var i=Pi(n.target);if(i!==null){var o=vn(i);if(o!==null){if(i=o.tag,i===13){if(i=ki(o),i!==null){n.blockedOn=i,xa(n.priority,function(){_a(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function cr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Ts(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);xi=u,o.target.dispatchEvent(u),xi=null}else return i=ul(o),i!==null&&Cs(i),n.blockedOn=o,!1;i.shift()}return!0}function bi(n,i,o){cr(n)&&o.delete(i)}function ka(){Ko=!1,kt!==null&&cr(kt)&&(kt=null),wn!==null&&cr(wn)&&(wn=null),xn!==null&&cr(xn)&&(xn=null),Vr.forEach(bi),an.forEach(bi)}function En(n,i){n.blockedOn===i&&(n.blockedOn=null,Ko||(Ko=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ka)))}function Sn(n){function i(d){return En(d,n)}if(0<zn.length){En(zn[0],n);for(var o=1;o<zn.length;o++){var u=zn[o];u.blockedOn===n&&(u.blockedOn=null)}}for(kt!==null&&En(kt,n),wn!==null&&En(wn,n),xn!==null&&En(xn,n),Vr.forEach(i),an.forEach(i),o=0;o<Vn.length;o++)u=Vn[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Vn.length&&(o=Vn[0],o.blockedOn===null);)Sa(o),o.blockedOn===null&&Vn.shift()}var hr=he.ReactCurrentBatchConfig,Br=!0;function Ze(n,i,o,u){var d=Ne,p=hr.transition;hr.transition=null;try{Ne=1,Yo(n,i,o,u)}finally{Ne=d,hr.transition=p}}function Ac(n,i,o,u){var d=Ne,p=hr.transition;hr.transition=null;try{Ne=4,Yo(n,i,o,u)}finally{Ne=d,hr.transition=p}}function Yo(n,i,o,u){if(Br){var d=Ts(n,i,o,u);if(d===null)Bc(n,i,u,Ri,o),Ea(n,u);else if(Rc(d,n,i,o,u))u.stopPropagation();else if(Ea(n,u),i&4&&-1<bc.indexOf(n)){for(;d!==null;){var p=ul(d);if(p!==null&&va(p),p=Ts(n,i,o,u),p===null&&Bc(n,i,u,Ri,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else Bc(n,i,u,null,o)}}var Ri=null;function Ts(n,i,o,u){if(Ri=null,n=gs(u),n=Pi(n),n!==null)if(i=vn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ki(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ri=n,null}function Qo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fa()){case Ci:return 1;case jr:return 4;case ln:case Go:return 16;case pa:return 536870912;default:return 16}default:return 16}}var tn=null,Is=null,Bt=null;function Xo(){if(Bt)return Bt;var n,i=Is,o=i.length,u,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<o&&i[n]===d[n];n++);var _=o-n;for(u=1;u<=_&&i[o-u]===d[p-u];u++);return Bt=d.slice(n,1<u?1-u:void 0)}function Ns(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function Jo(){return!1}function Ct(n){function i(o,u,d,p,_){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Bn:Jo,this.isPropagationStopped=Jo,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),i}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=Ct(kn),Hn=ne({},kn,{view:0,detail:0}),Pc=Ct(Hn),Rs,dr,Hr,Ai=ne({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:a,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Hr&&(Hr&&n.type==="mousemove"?(Rs=n.screenX-Hr.screenX,dr=n.screenY-Hr.screenY):dr=Rs=0,Hr=n),Rs)},movementY:function(n){return"movementY"in n?n.movementY:dr}}),As=Ct(Ai),Zo=ne({},Ai,{dataTransfer:0}),Ca=Ct(Zo),Ps=ne({},Hn,{relatedTarget:0}),Os=Ct(Ps),Ta=ne({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),fr=Ct(Ta),Ia=ne({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Na=Ct(Ia),ba=ne({},kn,{data:0}),el=Ct(ba),Ht={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ra={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Aa={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wr(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Aa[n])?!!i[n]:!1}function a(){return Wr}var f=ne({},Hn,{key:function(n){if(n.key){var i=Ht[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ns(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ra[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:a,charCode:function(n){return n.type==="keypress"?Ns(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ns(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),y=Ct(f),x=ne({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),L=Ct(x),V=ne({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:a}),ee=Ct(V),Ve=ne({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),dt=Ct(Ve),Re=ne({},Ai,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gt=Ct(Re),yt=[9,13,27,32],Wn=m&&"CompositionEvent"in window,Tt=null;m&&"documentMode"in document&&(Tt=document.documentMode);var Ds=m&&"TextEvent"in window&&!Tt,js=m&&(!Wn||Tt&&8<Tt&&11>=Tt),sp=" ",op=!1;function lp(n,i){switch(n){case"keyup":return yt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function w0(n,i){switch(n){case"compositionend":return ap(i);case"keypress":return i.which!==32?null:(op=!0,sp);case"textInput":return n=i.data,n===sp&&op?null:n;default:return null}}function x0(n,i){if(Ls)return n==="compositionend"||!Wn&&lp(n,i)?(n=Xo(),Bt=Is=tn=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return js&&i.locale!=="ko"?null:i.data;default:return null}}var E0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!E0[n.type]:i==="textarea"}function cp(n,i,o,u){lr(u),i=La(i,"onChange"),0<i.length&&(o=new bs("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var tl=null,nl=null;function S0(n){Np(n,0)}function Pa(n){var i=Vs(n);if(hs(i))return n}function k0(n,i){if(n==="change")return i}var hp=!1;if(m){var Oc;if(m){var Dc="oninput"in document;if(!Dc){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),Dc=typeof dp.oninput=="function"}Oc=Dc}else Oc=!1;hp=Oc&&(!document.documentMode||9<document.documentMode)}function fp(){tl&&(tl.detachEvent("onpropertychange",pp),nl=tl=null)}function pp(n){if(n.propertyName==="value"&&Pa(nl)){var i=[];cp(i,nl,n,gs(n)),Vo(S0,i)}}function C0(n,i,o){n==="focusin"?(fp(),tl=i,nl=o,tl.attachEvent("onpropertychange",pp)):n==="focusout"&&fp()}function T0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pa(nl)}function I0(n,i){if(n==="click")return Pa(i)}function N0(n,i){if(n==="input"||n==="change")return Pa(i)}function b0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Cn=typeof Object.is=="function"?Object.is:b0;function rl(n,i){if(Cn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!v.call(i,d)||!Cn(n[d],i[d]))return!1}return!0}function mp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gp(n,i){var o=mp(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=mp(o)}}function yp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?yp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function vp(){for(var n=window,i=Or();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Or(n.document)}return i}function jc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function R0(n){var i=vp(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&yp(o.ownerDocument.documentElement,o)){if(u!==null&&jc(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!n.extend&&p>u&&(d=u,u=p,p=d),d=gp(o,p);var _=gp(o,u);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var A0=m&&"documentMode"in document&&11>=document.documentMode,Ms=null,Lc=null,il=null,Mc=!1;function _p(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Mc||Ms==null||Ms!==Or(u)||(u=Ms,"selectionStart"in u&&jc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),il&&rl(il,u)||(il=u,u=La(Lc,"onSelect"),0<u.length&&(i=new bs("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Ms)))}function Oa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Fs={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},Fc={},wp={};m&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Da(n){if(Fc[n])return Fc[n];if(!Fs[n])return n;var i=Fs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in wp)return Fc[n]=i[o];return n}var xp=Da("animationend"),Ep=Da("animationiteration"),Sp=Da("animationstart"),kp=Da("transitionend"),Cp=new Map,Tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(n,i){Cp.set(n,i),c(i,[n])}for(var Uc=0;Uc<Tp.length;Uc++){var zc=Tp[Uc],P0=zc.toLowerCase(),O0=zc[0].toUpperCase()+zc.slice(1);$r(P0,"on"+O0)}$r(xp,"onAnimationEnd"),$r(Ep,"onAnimationIteration"),$r(Sp,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(kp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D0=new Set("cancel close invalid load scroll toggle".split(" ").concat(sl));function Ip(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,Tc(u,i,void 0,n),n.currentTarget=null}function Np(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var _=u.length-1;0<=_;_--){var T=u[_],R=T.instance,z=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;Ip(d,T,z),p=R}else for(_=0;_<u.length;_++){if(T=u[_],R=T.instance,z=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;Ip(d,T,z),p=R}}}if(yn)throw n=Bo,yn=!1,Bo=null,n}function Qe(n,i){var o=i[Kc];o===void 0&&(o=i[Kc]=new Set);var u=n+"__bubble";o.has(u)||(bp(i,n,2,!1),o.add(u))}function Vc(n,i,o){var u=0;i&&(u|=4),bp(o,n,u,i)}var ja="_reactListening"+Math.random().toString(36).slice(2);function ol(n){if(!n[ja]){n[ja]=!0,s.forEach(function(o){o!=="selectionchange"&&(D0.has(o)||Vc(o,!1,n),Vc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ja]||(i[ja]=!0,Vc("selectionchange",!1,i))}}function bp(n,i,o,u){switch(Qo(i)){case 1:var d=Ze;break;case 4:d=Ac;break;default:d=Yo}o=d.bind(null,i,o,n),d=void 0,!_s||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Bc(n,i,o,u,d){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var _=u.tag;if(_===3||_===4){var T=u.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=u.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Pi(T),_===null)return;if(R=_.tag,R===5||R===6){u=p=_;continue e}T=T.parentNode}}u=u.return}Vo(function(){var z=p,Y=gs(o),X=[];e:{var K=Cp.get(n);if(K!==void 0){var re=bs,oe=n;switch(n){case"keypress":if(Ns(o)===0)break e;case"keydown":case"keyup":re=y;break;case"focusin":oe="focus",re=Os;break;case"focusout":oe="blur",re=Os;break;case"beforeblur":case"afterblur":re=Os;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=As;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Ca;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=ee;break;case xp:case Ep:case Sp:re=fr;break;case kp:re=dt;break;case"scroll":re=Pc;break;case"wheel":re=gt;break;case"copy":case"cut":case"paste":re=Na;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=L}var ae=(i&4)!==0,lt=!ae&&n==="scroll",M=ae?K!==null?K+"Capture":null:K;ae=[];for(var O=z,F;O!==null;){F=O;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,M!==null&&(J=ot(O,M),J!=null&&ae.push(ll(O,J,F)))),lt)break;O=O.return}0<ae.length&&(K=new re(K,oe,null,o,Y),X.push({event:K,listeners:ae}))}}if((i&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",K&&o!==xi&&(oe=o.relatedTarget||o.fromElement)&&(Pi(oe)||oe[pr]))break e;if((re||K)&&(K=Y.window===Y?Y:(K=Y.ownerDocument)?K.defaultView||K.parentWindow:window,re?(oe=o.relatedTarget||o.toElement,re=z,oe=oe?Pi(oe):null,oe!==null&&(lt=vn(oe),oe!==lt||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(re=null,oe=z),re!==oe)){if(ae=As,J="onMouseLeave",M="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(ae=L,J="onPointerLeave",M="onPointerEnter",O="pointer"),lt=re==null?K:Vs(re),F=oe==null?K:Vs(oe),K=new ae(J,O+"leave",re,o,Y),K.target=lt,K.relatedTarget=F,J=null,Pi(Y)===z&&(ae=new ae(M,O+"enter",oe,o,Y),ae.target=F,ae.relatedTarget=lt,J=ae),lt=J,re&&oe)t:{for(ae=re,M=oe,O=0,F=ae;F;F=Us(F))O++;for(F=0,J=M;J;J=Us(J))F++;for(;0<O-F;)ae=Us(ae),O--;for(;0<F-O;)M=Us(M),F--;for(;O--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=Us(ae),M=Us(M)}ae=null}else ae=null;re!==null&&Rp(X,K,re,ae,!1),oe!==null&&lt!==null&&Rp(X,lt,oe,ae,!0)}}e:{if(K=z?Vs(z):window,re=K.nodeName&&K.nodeName.toLowerCase(),re==="select"||re==="input"&&K.type==="file")var ue=k0;else if(up(K))if(hp)ue=N0;else{ue=T0;var pe=C0}else(re=K.nodeName)&&re.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ue=I0);if(ue&&(ue=ue(n,z))){cp(X,ue,o,Y);break e}pe&&pe(n,K,z),n==="focusout"&&(pe=K._wrapperState)&&pe.controlled&&K.type==="number"&&fs(K,"number",K.value)}switch(pe=z?Vs(z):window,n){case"focusin":(up(pe)||pe.contentEditable==="true")&&(Ms=pe,Lc=z,il=null);break;case"focusout":il=Lc=Ms=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,_p(X,o,Y);break;case"selectionchange":if(A0)break;case"keydown":case"keyup":_p(X,o,Y)}var me;if(Wn)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ls?lp(n,o)&&(ve="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ve="onCompositionStart");ve&&(js&&o.locale!=="ko"&&(Ls||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ls&&(me=Xo()):(tn=Y,Is="value"in tn?tn.value:tn.textContent,Ls=!0)),pe=La(z,ve),0<pe.length&&(ve=new el(ve,n,null,o,Y),X.push({event:ve,listeners:pe}),me?ve.data=me:(me=ap(o),me!==null&&(ve.data=me)))),(me=Ds?w0(n,o):x0(n,o))&&(z=La(z,"onBeforeInput"),0<z.length&&(Y=new el("onBeforeInput","beforeinput",null,o,Y),X.push({event:Y,listeners:z}),Y.data=me))}Np(X,i)})}function ll(n,i,o){return{instance:n,listener:i,currentTarget:o}}function La(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ot(n,o),p!=null&&u.unshift(ll(n,p,d)),p=ot(n,i),p!=null&&u.push(ll(n,p,d))),n=n.return}return u}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rp(n,i,o,u,d){for(var p=i._reactName,_=[];o!==null&&o!==u;){var T=o,R=T.alternate,z=T.stateNode;if(R!==null&&R===u)break;T.tag===5&&z!==null&&(T=z,d?(R=ot(o,p),R!=null&&_.unshift(ll(o,R,T))):d||(R=ot(o,p),R!=null&&_.push(ll(o,R,T)))),o=o.return}_.length!==0&&n.push({event:i,listeners:_})}var j0=/\r\n?/g,L0=/\u0000|\uFFFD/g;function Ap(n){return(typeof n=="string"?n:""+n).replace(j0,`
`).replace(L0,"")}function Ma(n,i,o){if(i=Ap(i),Ap(n)!==i&&o)throw Error(t(425))}function Fa(){}var Hc=null,Wc=null;function $c(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,M0=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,F0=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(n){return Pp.resolve(null).then(n).catch(U0)}:Gc;function U0(n){setTimeout(function(){throw n})}function qc(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),Sn(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);Sn(i)}function Gr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Op(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var zs=Math.random().toString(36).slice(2),$n="__reactFiber$"+zs,al="__reactProps$"+zs,pr="__reactContainer$"+zs,Kc="__reactEvents$"+zs,z0="__reactListeners$"+zs,V0="__reactHandles$"+zs;function Pi(n){var i=n[$n];if(i)return i;for(var o=n.parentNode;o;){if(i=o[pr]||o[$n]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Op(n);n!==null;){if(o=n[$n])return o;n=Op(n)}return i}n=o,o=n.parentNode}return null}function ul(n){return n=n[$n]||n[pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ua(n){return n[al]||null}var Yc=[],Bs=-1;function qr(n){return{current:n}}function Xe(n){0>Bs||(n.current=Yc[Bs],Yc[Bs]=null,Bs--)}function qe(n,i){Bs++,Yc[Bs]=n.current,n.current=i}var Kr={},Pt=qr(Kr),Wt=qr(!1),Oi=Kr;function Hs(n,i){var o=n.type.contextTypes;if(!o)return Kr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function $t(n){return n=n.childContextTypes,n!=null}function za(){Xe(Wt),Xe(Pt)}function Dp(n,i,o){if(Pt.current!==Kr)throw Error(t(168));qe(Pt,i),qe(Wt,o)}function jp(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Me(n)||"Unknown",d));return ne({},o,u)}function Va(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Kr,Oi=Pt.current,qe(Pt,n),qe(Wt,Wt.current),!0}function Lp(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=jp(n,i,Oi),u.__reactInternalMemoizedMergedChildContext=n,Xe(Wt),Xe(Pt),qe(Pt,n)):Xe(Wt),qe(Wt,o)}var mr=null,Ba=!1,Qc=!1;function Mp(n){mr===null?mr=[n]:mr.push(n)}function B0(n){Ba=!0,Mp(n)}function Yr(){if(!Qc&&mr!==null){Qc=!0;var n=0,i=Ne;try{var o=mr;for(Ne=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}mr=null,Ba=!1}catch(d){throw mr!==null&&(mr=mr.slice(n+1)),Es(Ci,Yr),d}finally{Ne=i,Qc=!1}}return null}var Ws=[],$s=0,Ha=null,Wa=0,un=[],cn=0,Di=null,gr=1,yr="";function ji(n,i){Ws[$s++]=Wa,Ws[$s++]=Ha,Ha=n,Wa=i}function Fp(n,i,o){un[cn++]=gr,un[cn++]=yr,un[cn++]=Di,Di=n;var u=gr;n=yr;var d=32-Lt(u)-1;u&=~(1<<d),o+=1;var p=32-Lt(i)+d;if(30<p){var _=d-d%5;p=(u&(1<<_)-1).toString(32),u>>=_,d-=_,gr=1<<32-Lt(i)+d|o<<d|u,yr=p+n}else gr=1<<p|o<<d|u,yr=n}function Xc(n){n.return!==null&&(ji(n,1),Fp(n,1,0))}function Jc(n){for(;n===Ha;)Ha=Ws[--$s],Ws[$s]=null,Wa=Ws[--$s],Ws[$s]=null;for(;n===Di;)Di=un[--cn],un[cn]=null,yr=un[--cn],un[cn]=null,gr=un[--cn],un[cn]=null}var nn=null,rn=null,Je=!1,Tn=null;function Up(n,i){var o=pn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function zp(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,nn=n,rn=Gr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,nn=n,rn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Di!==null?{id:gr,overflow:yr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=pn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,nn=n,rn=null,!0):!1;default:return!1}}function Zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function eh(n){if(Je){var i=rn;if(i){var o=i;if(!zp(n,i)){if(Zc(n))throw Error(t(418));i=Gr(o.nextSibling);var u=nn;i&&zp(n,i)?Up(u,o):(n.flags=n.flags&-4097|2,Je=!1,nn=n)}}else{if(Zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,nn=n}}}function Vp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function $a(n){if(n!==nn)return!1;if(!Je)return Vp(n),Je=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!$c(n.type,n.memoizedProps)),i&&(i=rn)){if(Zc(n))throw Bp(),Error(t(418));for(;i;)Up(n,i),i=Gr(i.nextSibling)}if(Vp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){rn=Gr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}rn=null}}else rn=nn?Gr(n.stateNode.nextSibling):null;return!0}function Bp(){for(var n=rn;n;)n=Gr(n.nextSibling)}function Gs(){rn=nn=null,Je=!1}function th(n){Tn===null?Tn=[n]:Tn.push(n)}var H0=he.ReactCurrentBatchConfig;function cl(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ga(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Hp(n){var i=n._init;return i(n._payload)}function Wp(n){function i(M,O){if(n){var F=M.deletions;F===null?(M.deletions=[O],M.flags|=16):F.push(O)}}function o(M,O){if(!n)return null;for(;O!==null;)i(M,O),O=O.sibling;return null}function u(M,O){for(M=new Map;O!==null;)O.key!==null?M.set(O.key,O):M.set(O.index,O),O=O.sibling;return M}function d(M,O){return M=ri(M,O),M.index=0,M.sibling=null,M}function p(M,O,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<O?(M.flags|=2,O):F):(M.flags|=2,O)):(M.flags|=1048576,O)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,O,F,J){return O===null||O.tag!==6?(O=Gh(F,M.mode,J),O.return=M,O):(O=d(O,F),O.return=M,O)}function R(M,O,F,J){var ue=F.type;return ue===b?Y(M,O,F.props.children,J,F.key):O!==null&&(O.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Ee&&Hp(ue)===O.type)?(J=d(O,F.props),J.ref=cl(M,O,F),J.return=M,J):(J=gu(F.type,F.key,F.props,null,M.mode,J),J.ref=cl(M,O,F),J.return=M,J)}function z(M,O,F,J){return O===null||O.tag!==4||O.stateNode.containerInfo!==F.containerInfo||O.stateNode.implementation!==F.implementation?(O=qh(F,M.mode,J),O.return=M,O):(O=d(O,F.children||[]),O.return=M,O)}function Y(M,O,F,J,ue){return O===null||O.tag!==7?(O=Hi(F,M.mode,J,ue),O.return=M,O):(O=d(O,F),O.return=M,O)}function X(M,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Gh(""+O,M.mode,F),O.return=M,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case we:return F=gu(O.type,O.key,O.props,null,M.mode,F),F.ref=cl(M,null,O),F.return=M,F;case W:return O=qh(O,M.mode,F),O.return=M,O;case Ee:var J=O._init;return X(M,J(O._payload),F)}if(ir(O)||se(O))return O=Hi(O,M.mode,F,null),O.return=M,O;Ga(M,O)}return null}function K(M,O,F,J){var ue=O!==null?O.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ue!==null?null:T(M,O,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case we:return F.key===ue?R(M,O,F,J):null;case W:return F.key===ue?z(M,O,F,J):null;case Ee:return ue=F._init,K(M,O,ue(F._payload),J)}if(ir(F)||se(F))return ue!==null?null:Y(M,O,F,J,null);Ga(M,F)}return null}function re(M,O,F,J,ue){if(typeof J=="string"&&J!==""||typeof J=="number")return M=M.get(F)||null,T(O,M,""+J,ue);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case we:return M=M.get(J.key===null?F:J.key)||null,R(O,M,J,ue);case W:return M=M.get(J.key===null?F:J.key)||null,z(O,M,J,ue);case Ee:var pe=J._init;return re(M,O,F,pe(J._payload),ue)}if(ir(J)||se(J))return M=M.get(F)||null,Y(O,M,J,ue,null);Ga(O,J)}return null}function oe(M,O,F,J){for(var ue=null,pe=null,me=O,ve=O=0,wt=null;me!==null&&ve<F.length;ve++){me.index>ve?(wt=me,me=null):wt=me.sibling;var Le=K(M,me,F[ve],J);if(Le===null){me===null&&(me=wt);break}n&&me&&Le.alternate===null&&i(M,me),O=p(Le,O,ve),pe===null?ue=Le:pe.sibling=Le,pe=Le,me=wt}if(ve===F.length)return o(M,me),Je&&ji(M,ve),ue;if(me===null){for(;ve<F.length;ve++)me=X(M,F[ve],J),me!==null&&(O=p(me,O,ve),pe===null?ue=me:pe.sibling=me,pe=me);return Je&&ji(M,ve),ue}for(me=u(M,me);ve<F.length;ve++)wt=re(me,M,ve,F[ve],J),wt!==null&&(n&&wt.alternate!==null&&me.delete(wt.key===null?ve:wt.key),O=p(wt,O,ve),pe===null?ue=wt:pe.sibling=wt,pe=wt);return n&&me.forEach(function(ii){return i(M,ii)}),Je&&ji(M,ve),ue}function ae(M,O,F,J){var ue=se(F);if(typeof ue!="function")throw Error(t(150));if(F=ue.call(F),F==null)throw Error(t(151));for(var pe=ue=null,me=O,ve=O=0,wt=null,Le=F.next();me!==null&&!Le.done;ve++,Le=F.next()){me.index>ve?(wt=me,me=null):wt=me.sibling;var ii=K(M,me,Le.value,J);if(ii===null){me===null&&(me=wt);break}n&&me&&ii.alternate===null&&i(M,me),O=p(ii,O,ve),pe===null?ue=ii:pe.sibling=ii,pe=ii,me=wt}if(Le.done)return o(M,me),Je&&ji(M,ve),ue;if(me===null){for(;!Le.done;ve++,Le=F.next())Le=X(M,Le.value,J),Le!==null&&(O=p(Le,O,ve),pe===null?ue=Le:pe.sibling=Le,pe=Le);return Je&&ji(M,ve),ue}for(me=u(M,me);!Le.done;ve++,Le=F.next())Le=re(me,M,ve,Le.value,J),Le!==null&&(n&&Le.alternate!==null&&me.delete(Le.key===null?ve:Le.key),O=p(Le,O,ve),pe===null?ue=Le:pe.sibling=Le,pe=Le);return n&&me.forEach(function(Ew){return i(M,Ew)}),Je&&ji(M,ve),ue}function lt(M,O,F,J){if(typeof F=="object"&&F!==null&&F.type===b&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case we:e:{for(var ue=F.key,pe=O;pe!==null;){if(pe.key===ue){if(ue=F.type,ue===b){if(pe.tag===7){o(M,pe.sibling),O=d(pe,F.props.children),O.return=M,M=O;break e}}else if(pe.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Ee&&Hp(ue)===pe.type){o(M,pe.sibling),O=d(pe,F.props),O.ref=cl(M,pe,F),O.return=M,M=O;break e}o(M,pe);break}else i(M,pe);pe=pe.sibling}F.type===b?(O=Hi(F.props.children,M.mode,J,F.key),O.return=M,M=O):(J=gu(F.type,F.key,F.props,null,M.mode,J),J.ref=cl(M,O,F),J.return=M,M=J)}return _(M);case W:e:{for(pe=F.key;O!==null;){if(O.key===pe)if(O.tag===4&&O.stateNode.containerInfo===F.containerInfo&&O.stateNode.implementation===F.implementation){o(M,O.sibling),O=d(O,F.children||[]),O.return=M,M=O;break e}else{o(M,O);break}else i(M,O);O=O.sibling}O=qh(F,M.mode,J),O.return=M,M=O}return _(M);case Ee:return pe=F._init,lt(M,O,pe(F._payload),J)}if(ir(F))return oe(M,O,F,J);if(se(F))return ae(M,O,F,J);Ga(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,O!==null&&O.tag===6?(o(M,O.sibling),O=d(O,F),O.return=M,M=O):(o(M,O),O=Gh(F,M.mode,J),O.return=M,M=O),_(M)):o(M,O)}return lt}var qs=Wp(!0),$p=Wp(!1),qa=qr(null),Ka=null,Ks=null,nh=null;function rh(){nh=Ks=Ka=null}function ih(n){var i=qa.current;Xe(qa),n._currentValue=i}function sh(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Ys(n,i){Ka=n,nh=Ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gt=!0),n.firstContext=null)}function hn(n){var i=n._currentValue;if(nh!==n)if(n={context:n,memoizedValue:i,next:null},Ks===null){if(Ka===null)throw Error(t(308));Ks=n,Ka.dependencies={lanes:0,firstContext:n}}else Ks=Ks.next=n;return i}var Li=null;function oh(n){Li===null?Li=[n]:Li.push(n)}function Gp(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,oh(i)):(o.next=d.next,d.next=o),i.interleaved=o,vr(n,u)}function vr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Qr=!1;function lh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _r(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Xr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(je&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,vr(n,o)}return d=u.interleaved,d===null?(i.next=i,oh(u)):(i.next=d.next,d.next=i),u.interleaved=i,vr(n,o)}function Ya(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Ur(n,o)}}function Kp(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var _={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=_:p=p.next=_,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Qa(n,i,o,u){var d=n.updateQueue;Qr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,z=R.next;R.next=null,_===null?p=z:_.next=z,_=R;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,T=Y.lastBaseUpdate,T!==_&&(T===null?Y.firstBaseUpdate=z:T.next=z,Y.lastBaseUpdate=R))}if(p!==null){var X=d.baseState;_=0,Y=z=R=null,T=p;do{var K=T.lane,re=T.eventTime;if((u&K)===K){Y!==null&&(Y=Y.next={eventTime:re,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var oe=n,ae=T;switch(K=i,re=o,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){X=oe.call(re,X,K);break e}X=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,K=typeof oe=="function"?oe.call(re,X,K):oe,K==null)break e;X=ne({},X,K);break e;case 2:Qr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[T]:K.push(T))}else re={eventTime:re,lane:K,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Y===null?(z=Y=re,R=X):Y=Y.next=re,_|=K;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;K=T,T=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Y===null&&(R=X),d.baseState=R,d.firstBaseUpdate=z,d.lastBaseUpdate=Y,i=d.shared.interleaved,i!==null){d=i;do _|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Ui|=_,n.lanes=_,n.memoizedState=X}}function Yp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var hl={},Gn=qr(hl),dl=qr(hl),fl=qr(hl);function Mi(n){if(n===hl)throw Error(t(174));return n}function ah(n,i){switch(qe(fl,i),qe(dl,n),qe(Gn,hl),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ht(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ht(i,n)}Xe(Gn),qe(Gn,i)}function Qs(){Xe(Gn),Xe(dl),Xe(fl)}function Qp(n){Mi(fl.current);var i=Mi(Gn.current),o=ht(i,n.type);i!==o&&(qe(dl,n),qe(Gn,o))}function uh(n){dl.current===n&&(Xe(Gn),Xe(dl))}var et=qr(0);function Xa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ch=[];function hh(){for(var n=0;n<ch.length;n++)ch[n]._workInProgressVersionPrimary=null;ch.length=0}var Ja=he.ReactCurrentDispatcher,dh=he.ReactCurrentBatchConfig,Fi=0,tt=null,ft=null,vt=null,Za=!1,pl=!1,ml=0,W0=0;function Ot(){throw Error(t(321))}function fh(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Cn(n[o],i[o]))return!1;return!0}function ph(n,i,o,u,d,p){if(Fi=p,tt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ja.current=n===null||n.memoizedState===null?K0:Y0,n=o(u,d),pl){p=0;do{if(pl=!1,ml=0,25<=p)throw Error(t(301));p+=1,vt=ft=null,i.updateQueue=null,Ja.current=Q0,n=o(u,d)}while(pl)}if(Ja.current=nu,i=ft!==null&&ft.next!==null,Fi=0,vt=ft=tt=null,Za=!1,i)throw Error(t(300));return n}function mh(){var n=ml!==0;return ml=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?tt.memoizedState=vt=n:vt=vt.next=n,vt}function dn(){if(ft===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var i=vt===null?tt.memoizedState:vt.next;if(i!==null)vt=i,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},vt===null?tt.memoizedState=vt=n:vt=vt.next=n}return vt}function gl(n,i){return typeof i=="function"?i(n):i}function gh(n){var i=dn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=ft,d=u.baseQueue,p=o.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}u.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,u=u.baseState;var T=_=null,R=null,z=p;do{var Y=z.lane;if((Fi&Y)===Y)R!==null&&(R=R.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),u=z.hasEagerState?z.eagerState:n(u,z.action);else{var X={lane:Y,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};R===null?(T=R=X,_=u):R=R.next=X,tt.lanes|=Y,Ui|=Y}z=z.next}while(z!==null&&z!==p);R===null?_=u:R.next=T,Cn(u,i.memoizedState)||(Gt=!0),i.memoizedState=u,i.baseState=_,i.baseQueue=R,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do p=d.lane,tt.lanes|=p,Ui|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function yh(n){var i=dn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Cn(p,i.memoizedState)||(Gt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function Xp(){}function Jp(n,i){var o=tt,u=dn(),d=i(),p=!Cn(u.memoizedState,d);if(p&&(u.memoizedState=d,Gt=!0),u=u.queue,vh(tm.bind(null,o,u,n),[n]),u.getSnapshot!==i||p||vt!==null&&vt.memoizedState.tag&1){if(o.flags|=2048,yl(9,em.bind(null,o,u,d,i),void 0,null),_t===null)throw Error(t(349));(Fi&30)!==0||Zp(o,i,d)}return d}function Zp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function em(n,i,o,u){i.value=o,i.getSnapshot=u,nm(i)&&rm(n)}function tm(n,i,o){return o(function(){nm(i)&&rm(n)})}function nm(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Cn(n,o)}catch{return!0}}function rm(n){var i=vr(n,1);i!==null&&Rn(i,n,1,-1)}function im(n){var i=qn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gl,lastRenderedState:n},i.queue=n,n=n.dispatch=q0.bind(null,tt,n),[i.memoizedState,n]}function yl(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function sm(){return dn().memoizedState}function eu(n,i,o,u){var d=qn();tt.flags|=n,d.memoizedState=yl(1|i,o,void 0,u===void 0?null:u)}function tu(n,i,o,u){var d=dn();u=u===void 0?null:u;var p=void 0;if(ft!==null){var _=ft.memoizedState;if(p=_.destroy,u!==null&&fh(u,_.deps)){d.memoizedState=yl(i,o,p,u);return}}tt.flags|=n,d.memoizedState=yl(1|i,o,p,u)}function om(n,i){return eu(8390656,8,n,i)}function vh(n,i){return tu(2048,8,n,i)}function lm(n,i){return tu(4,2,n,i)}function am(n,i){return tu(4,4,n,i)}function um(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function cm(n,i,o){return o=o!=null?o.concat([n]):null,tu(4,4,um.bind(null,i,n),o)}function _h(){}function hm(n,i){var o=dn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&fh(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function dm(n,i){var o=dn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&fh(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function fm(n,i,o){return(Fi&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=o):(Cn(o,i)||(o=Ni(),tt.lanes|=o,Ui|=o,n.baseState=!0),i)}function $0(n,i){var o=Ne;Ne=o!==0&&4>o?o:4,n(!0);var u=dh.transition;dh.transition={};try{n(!1),i()}finally{Ne=o,dh.transition=u}}function pm(){return dn().memoizedState}function G0(n,i,o){var u=ti(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},mm(n))gm(i,o);else if(o=Gp(n,i,o,u),o!==null){var d=Ft();Rn(o,n,u,d),ym(o,i,u)}}function q0(n,i,o){var u=ti(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(mm(n))gm(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var _=i.lastRenderedState,T=p(_,o);if(d.hasEagerState=!0,d.eagerState=T,Cn(T,_)){var R=i.interleaved;R===null?(d.next=d,oh(i)):(d.next=R.next,R.next=d),i.interleaved=d;return}}catch{}finally{}o=Gp(n,i,d,u),o!==null&&(d=Ft(),Rn(o,n,u,d),ym(o,i,u))}}function mm(n){var i=n.alternate;return n===tt||i!==null&&i===tt}function gm(n,i){pl=Za=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function ym(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Ur(n,o)}}var nu={readContext:hn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},K0={readContext:hn,useCallback:function(n,i){return qn().memoizedState=[n,i===void 0?null:i],n},useContext:hn,useEffect:om,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,eu(4194308,4,um.bind(null,i,n),o)},useLayoutEffect:function(n,i){return eu(4194308,4,n,i)},useInsertionEffect:function(n,i){return eu(4,2,n,i)},useMemo:function(n,i){var o=qn();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=qn();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=G0.bind(null,tt,n),[u.memoizedState,n]},useRef:function(n){var i=qn();return n={current:n},i.memoizedState=n},useState:im,useDebugValue:_h,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=im(!1),i=n[0];return n=$0.bind(null,n[1]),qn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=tt,d=qn();if(Je){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),_t===null)throw Error(t(349));(Fi&30)!==0||Zp(u,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,om(tm.bind(null,u,p,n),[n]),u.flags|=2048,yl(9,em.bind(null,u,p,o,i),void 0,null),o},useId:function(){var n=qn(),i=_t.identifierPrefix;if(Je){var o=yr,u=gr;o=(u&~(1<<32-Lt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=ml++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=W0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Y0={readContext:hn,useCallback:hm,useContext:hn,useEffect:vh,useImperativeHandle:cm,useInsertionEffect:lm,useLayoutEffect:am,useMemo:dm,useReducer:gh,useRef:sm,useState:function(){return gh(gl)},useDebugValue:_h,useDeferredValue:function(n){var i=dn();return fm(i,ft.memoizedState,n)},useTransition:function(){var n=gh(gl)[0],i=dn().memoizedState;return[n,i]},useMutableSource:Xp,useSyncExternalStore:Jp,useId:pm,unstable_isNewReconciler:!1},Q0={readContext:hn,useCallback:hm,useContext:hn,useEffect:vh,useImperativeHandle:cm,useInsertionEffect:lm,useLayoutEffect:am,useMemo:dm,useReducer:yh,useRef:sm,useState:function(){return yh(gl)},useDebugValue:_h,useDeferredValue:function(n){var i=dn();return ft===null?i.memoizedState=n:fm(i,ft.memoizedState,n)},useTransition:function(){var n=yh(gl)[0],i=dn().memoizedState;return[n,i]},useMutableSource:Xp,useSyncExternalStore:Jp,useId:pm,unstable_isNewReconciler:!1};function In(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function wh(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:ne({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ru={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Ft(),d=ti(n),p=_r(u,d);p.payload=i,o!=null&&(p.callback=o),i=Xr(n,p,d),i!==null&&(Rn(i,n,d,u),Ya(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Ft(),d=ti(n),p=_r(u,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Xr(n,p,d),i!==null&&(Rn(i,n,d,u),Ya(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Ft(),u=ti(n),d=_r(o,u);d.tag=2,i!=null&&(d.callback=i),i=Xr(n,d,u),i!==null&&(Rn(i,n,u,o),Ya(i,n,u))}};function vm(n,i,o,u,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,_):i.prototype&&i.prototype.isPureReactComponent?!rl(o,u)||!rl(d,p):!0}function _m(n,i,o){var u=!1,d=Kr,p=i.contextType;return typeof p=="object"&&p!==null?p=hn(p):(d=$t(i)?Oi:Pt.current,u=i.contextTypes,p=(u=u!=null)?Hs(n,d):Kr),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ru,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function wm(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&ru.enqueueReplaceState(i,i.state,null)}function xh(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},lh(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=hn(p):(p=$t(i)?Oi:Pt.current,d.context=Hs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(wh(n,i,p,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ru.enqueueReplaceState(d,d.state,null),Qa(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,i){try{var o="",u=i;do o+=Se(u),u=u.return;while(u);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Eh(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Sh(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var X0=typeof WeakMap=="function"?WeakMap:Map;function xm(n,i,o){o=_r(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){cu||(cu=!0,Fh=u),Sh(n,i)},o}function Em(n,i,o){o=_r(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Sh(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Sh(n,i),typeof u!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),o}function Sm(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new X0;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=hw.bind(null,n,i,o),i.then(n,n))}function km(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Cm(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=_r(-1,1),i.tag=2,Xr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var J0=he.ReactCurrentOwner,Gt=!1;function Mt(n,i,o,u){i.child=n===null?$p(i,null,o,u):qs(i,n.child,o,u)}function Tm(n,i,o,u,d){o=o.render;var p=i.ref;return Ys(i,d),u=ph(n,i,o,u,p,d),o=mh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,wr(n,i,d)):(Je&&o&&Xc(i),i.flags|=1,Mt(n,i,u,d),i.child)}function Im(n,i,o,u,d){if(n===null){var p=o.type;return typeof p=="function"&&!$h(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Nm(n,i,p,u,d)):(n=gu(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(o=o.compare,o=o!==null?o:rl,o(_,u)&&n.ref===i.ref)return wr(n,i,d)}return i.flags|=1,n=ri(p,u),n.ref=i.ref,n.return=i,i.child=n}function Nm(n,i,o,u,d){if(n!==null){var p=n.memoizedProps;if(rl(p,u)&&n.ref===i.ref)if(Gt=!1,i.pendingProps=u=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return i.lanes=n.lanes,wr(n,i,d)}return kh(n,i,o,u,d)}function bm(n,i,o){var u=i.pendingProps,d=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(Zs,sn),sn|=o;else{if((o&1073741824)===0)return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qe(Zs,sn),sn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,qe(Zs,sn),sn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,qe(Zs,sn),sn|=u;return Mt(n,i,d,o),i.child}function Rm(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function kh(n,i,o,u,d){var p=$t(o)?Oi:Pt.current;return p=Hs(i,p),Ys(i,d),o=ph(n,i,o,u,p,d),u=mh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,wr(n,i,d)):(Je&&u&&Xc(i),i.flags|=1,Mt(n,i,o,d),i.child)}function Am(n,i,o,u,d){if($t(o)){var p=!0;Va(i)}else p=!1;if(Ys(i,d),i.stateNode===null)su(n,i),_m(i,o,u),xh(i,o,u,d),u=!0;else if(n===null){var _=i.stateNode,T=i.memoizedProps;_.props=T;var R=_.context,z=o.contextType;typeof z=="object"&&z!==null?z=hn(z):(z=$t(o)?Oi:Pt.current,z=Hs(i,z));var Y=o.getDerivedStateFromProps,X=typeof Y=="function"||typeof _.getSnapshotBeforeUpdate=="function";X||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==u||R!==z)&&wm(i,_,u,z),Qr=!1;var K=i.memoizedState;_.state=K,Qa(i,u,_,d),R=i.memoizedState,T!==u||K!==R||Wt.current||Qr?(typeof Y=="function"&&(wh(i,o,Y,u),R=i.memoizedState),(T=Qr||vm(i,o,T,u,K,R,z))?(X||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=R),_.props=u,_.state=R,_.context=z,u=T):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{_=i.stateNode,qp(n,i),T=i.memoizedProps,z=i.type===i.elementType?T:In(i.type,T),_.props=z,X=i.pendingProps,K=_.context,R=o.contextType,typeof R=="object"&&R!==null?R=hn(R):(R=$t(o)?Oi:Pt.current,R=Hs(i,R));var re=o.getDerivedStateFromProps;(Y=typeof re=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==X||K!==R)&&wm(i,_,u,R),Qr=!1,K=i.memoizedState,_.state=K,Qa(i,u,_,d);var oe=i.memoizedState;T!==X||K!==oe||Wt.current||Qr?(typeof re=="function"&&(wh(i,o,re,u),oe=i.memoizedState),(z=Qr||vm(i,o,z,u,K,oe,R)||!1)?(Y||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,oe,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,oe,R)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=oe),_.props=u,_.state=oe,_.context=R,u=z):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),u=!1)}return Ch(n,i,o,u,p,d)}function Ch(n,i,o,u,d,p){Rm(n,i);var _=(i.flags&128)!==0;if(!u&&!_)return d&&Lp(i,o,!1),wr(n,i,p);u=i.stateNode,J0.current=i;var T=_&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&_?(i.child=qs(i,n.child,null,p),i.child=qs(i,null,T,p)):Mt(n,i,T,p),i.memoizedState=u.state,d&&Lp(i,o,!0),i.child}function Pm(n){var i=n.stateNode;i.pendingContext?Dp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Dp(n,i.context,!1),ah(n,i.containerInfo)}function Om(n,i,o,u,d){return Gs(),th(d),i.flags|=256,Mt(n,i,o,u),i.child}var Th={dehydrated:null,treeContext:null,retryLane:0};function Ih(n){return{baseLanes:n,cachePool:null,transitions:null}}function Dm(n,i,o){var u=i.pendingProps,d=et.current,p=!1,_=(i.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(et,d&1),n===null)return eh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=u.children,n=u.fallback,p?(u=i.mode,p=i.child,_={mode:"hidden",children:_},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=yu(_,u,0,null),n=Hi(n,u,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Ih(o),i.memoizedState=Th,n):Nh(i,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return Z0(n,i,_,u,T,d,o);if(p){p=u.fallback,_=i.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:u.children};return(_&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=R,i.deletions=null):(u=ri(d,R),u.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=ri(T,p):(p=Hi(p,_,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,_=n.child.memoizedState,_=_===null?Ih(o):{baseLanes:_.baseLanes|o,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~o,i.memoizedState=Th,u}return p=n.child,n=p.sibling,u=ri(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Nh(n,i){return i=yu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function iu(n,i,o,u){return u!==null&&th(u),qs(i,n.child,null,o),n=Nh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Z0(n,i,o,u,d,p,_){if(o)return i.flags&256?(i.flags&=-257,u=Eh(Error(t(422))),iu(n,i,_,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=yu({mode:"visible",children:u.children},d,0,null),p=Hi(p,d,_,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&qs(i,n.child,null,_),i.child.memoizedState=Ih(_),i.memoizedState=Th,p);if((i.mode&1)===0)return iu(n,i,_,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var T=u.dgst;return u=T,p=Error(t(419)),u=Eh(p,u,void 0),iu(n,i,_,u)}if(T=(_&n.childLanes)!==0,Gt||T){if(u=_t,u!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,vr(n,d),Rn(u,n,d,-1))}return Wh(),u=Eh(Error(t(421))),iu(n,i,_,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=dw.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,rn=Gr(d.nextSibling),nn=i,Je=!0,Tn=null,n!==null&&(un[cn++]=gr,un[cn++]=yr,un[cn++]=Di,gr=n.id,yr=n.overflow,Di=i),i=Nh(i,u.children),i.flags|=4096,i)}function jm(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),sh(n.return,i,o)}function bh(n,i,o,u,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function Lm(n,i,o){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(Mt(n,i,u.children,o),u=et.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jm(n,o,i);else if(n.tag===19)jm(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(qe(et,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Xa(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),bh(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Xa(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}bh(i,!0,o,null,p);break;case"together":bh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function su(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function wr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Ui|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=ri(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=ri(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function ew(n,i,o){switch(i.tag){case 3:Pm(i),Gs();break;case 5:Qp(i);break;case 1:$t(i.type)&&Va(i);break;case 4:ah(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;qe(qa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(qe(et,et.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Dm(n,i,o):(qe(et,et.current&1),n=wr(n,i,o),n!==null?n.sibling:null);qe(et,et.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Lm(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(et,et.current),u)break;return null;case 22:case 23:return i.lanes=0,bm(n,i,o)}return wr(n,i,o)}var Mm,Rh,Fm,Um;Mm=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Rh=function(){},Fm=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Mi(Gn.current);var p=null;switch(o){case"input":d=vi(n,d),u=vi(n,u),p=[];break;case"select":d=ne({},d,{value:void 0}),u=ne({},u,{value:void 0}),p=[];break;case"textarea":d=Ro(n,d),u=Ro(n,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Fa)}Lo(o,u);var _;o=null;for(z in d)if(!u.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var T=d[z];for(_ in T)T.hasOwnProperty(_)&&(o||(o={}),o[_]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(l.hasOwnProperty(z)?p||(p=[]):(p=p||[]).push(z,null));for(z in u){var R=u[z];if(T=d?.[z],u.hasOwnProperty(z)&&R!==T&&(R!=null||T!=null))if(z==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(o||(o={}),o[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(o||(o={}),o[_]=R[_])}else o||(p||(p=[]),p.push(z,o)),o=R;else z==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(z,R)):z==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(z,""+R):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(l.hasOwnProperty(z)?(R!=null&&z==="onScroll"&&Qe("scroll",n),p||T===R||(p=[])):(p=p||[]).push(z,R))}o&&(p=p||[]).push("style",o);var z=p;(i.updateQueue=z)&&(i.flags|=4)}},Um=function(n,i,o,u){o!==u&&(i.flags|=4)};function vl(n,i){if(!Je)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Dt(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function tw(n,i,o){var u=i.pendingProps;switch(Jc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(i),null;case 1:return $t(i.type)&&za(),Dt(i),null;case 3:return u=i.stateNode,Qs(),Xe(Wt),Xe(Pt),hh(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&($a(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Tn!==null&&(Vh(Tn),Tn=null))),Rh(n,i),Dt(i),null;case 5:uh(i);var d=Mi(fl.current);if(o=i.type,n!==null&&i.stateNode!=null)Fm(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Dt(i),null}if(n=Mi(Gn.current),$a(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[$n]=i,u[al]=p,n=(i.mode&1)!==0,o){case"dialog":Qe("cancel",u),Qe("close",u);break;case"iframe":case"object":case"embed":Qe("load",u);break;case"video":case"audio":for(d=0;d<sl.length;d++)Qe(sl[d],u);break;case"source":Qe("error",u);break;case"img":case"image":case"link":Qe("error",u),Qe("load",u);break;case"details":Qe("toggle",u);break;case"input":ds(u,p),Qe("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Qe("invalid",u);break;case"textarea":ps(u,p),Qe("invalid",u)}Lo(o,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?u.textContent!==T&&(p.suppressHydrationWarning!==!0&&Ma(u.textContent,T,n),d=["children",T]):typeof T=="number"&&u.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Ma(u.textContent,T,n),d=["children",""+T]):l.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&Qe("scroll",u)}switch(o){case"input":rr(u),ca(u,p,!0);break;case"textarea":rr(u),Ao(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Fa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ct(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=_.createElement(o,{is:u.is}):(n=_.createElement(o),o==="select"&&(_=n,u.multiple?_.multiple=!0:u.size&&(_.size=u.size))):n=_.createElementNS(n,o),n[$n]=i,n[al]=u,Mm(n,i,!1,!1),i.stateNode=n;e:{switch(_=Mo(o,u),o){case"dialog":Qe("cancel",n),Qe("close",n),d=u;break;case"iframe":case"object":case"embed":Qe("load",n),d=u;break;case"video":case"audio":for(d=0;d<sl.length;d++)Qe(sl[d],n);d=u;break;case"source":Qe("error",n),d=u;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=u;break;case"details":Qe("toggle",n),d=u;break;case"input":ds(n,u),d=vi(n,u),Qe("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=ne({},u,{value:void 0}),Qe("invalid",n);break;case"textarea":ps(n,u),d=Ro(n,u),Qe("invalid",n);break;default:d=u}Lo(o,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?Do(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Po(n,R)):p==="children"?typeof R=="string"?(o!=="textarea"||R!=="")&&Dr(n,R):typeof R=="number"&&Dr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?R!=null&&p==="onScroll"&&Qe("scroll",n):R!=null&&ce(n,p,R,_))}switch(o){case"input":rr(n),ca(n,u,!1);break;case"textarea":rr(n),Ao(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Fe(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?sr(n,!!u.multiple,p,!1):u.defaultValue!=null&&sr(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Fa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Dt(i),null;case 6:if(n&&i.stateNode!=null)Um(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Mi(fl.current),Mi(Gn.current),$a(i)){if(u=i.stateNode,o=i.memoizedProps,u[$n]=i,(p=u.nodeValue!==o)&&(n=nn,n!==null))switch(n.tag){case 3:Ma(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ma(u.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[$n]=i,i.stateNode=u}return Dt(i),null;case 13:if(Xe(et),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&rn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bp(),Gs(),i.flags|=98560,p=!1;else if(p=$a(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[$n]=i}else Gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Dt(i),p=!1}else Tn!==null&&(Vh(Tn),Tn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(et.current&1)!==0?pt===0&&(pt=3):Wh())),i.updateQueue!==null&&(i.flags|=4),Dt(i),null);case 4:return Qs(),Rh(n,i),n===null&&ol(i.stateNode.containerInfo),Dt(i),null;case 10:return ih(i.type._context),Dt(i),null;case 17:return $t(i.type)&&za(),Dt(i),null;case 19:if(Xe(et),p=i.memoizedState,p===null)return Dt(i),null;if(u=(i.flags&128)!==0,_=p.rendering,_===null)if(u)vl(p,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(_=Xa(n),_!==null){for(i.flags|=128,vl(p,!1),u=_.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,n=u,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return qe(et,et.current&1|2),i.child}n=n.sibling}p.tail!==null&&Ge()>eo&&(i.flags|=128,u=!0,vl(p,!1),i.lanes=4194304)}else{if(!u)if(n=Xa(_),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),vl(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Je)return Dt(i),null}else 2*Ge()-p.renderingStartTime>eo&&o!==1073741824&&(i.flags|=128,u=!0,vl(p,!1),i.lanes=4194304);p.isBackwards?(_.sibling=i.child,i.child=_):(o=p.last,o!==null?o.sibling=_:i.child=_,p.last=_)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ge(),i.sibling=null,o=et.current,qe(et,u?o&1|2:o&1),i):(Dt(i),null);case 22:case 23:return Hh(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(sn&1073741824)!==0&&(Dt(i),i.subtreeFlags&6&&(i.flags|=8192)):Dt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function nw(n,i){switch(Jc(i),i.tag){case 1:return $t(i.type)&&za(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Qs(),Xe(Wt),Xe(Pt),hh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return uh(i),null;case 13:if(Xe(et),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xe(et),null;case 4:return Qs(),null;case 10:return ih(i.type._context),null;case 22:case 23:return Hh(),null;case 24:return null;default:return null}}var ou=!1,jt=!1,rw=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Js(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){rt(n,i,u)}else o.current=null}function Ah(n,i,o){try{o()}catch(u){rt(n,i,u)}}var zm=!1;function iw(n,i){if(Hc=Br,n=vp(),jc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var _=0,T=-1,R=-1,z=0,Y=0,X=n,K=null;t:for(;;){for(var re;X!==o||d!==0&&X.nodeType!==3||(T=_+d),X!==p||u!==0&&X.nodeType!==3||(R=_+u),X.nodeType===3&&(_+=X.nodeValue.length),(re=X.firstChild)!==null;)K=X,X=re;for(;;){if(X===n)break t;if(K===o&&++z===d&&(T=_),K===p&&++Y===u&&(R=_),(re=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=re}o=T===-1||R===-1?null:{start:T,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(Wc={focusedElem:n,selectionRange:o},Br=!1,ie=i;ie!==null;)if(i=ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ie=n;else for(;ie!==null;){i=ie;try{var oe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,lt=oe.memoizedState,M=i.stateNode,O=M.getSnapshotBeforeUpdate(i.elementType===i.type?ae:In(i.type,ae),lt);M.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){rt(i,i.return,J)}if(n=i.sibling,n!==null){n.return=i.return,ie=n;break}ie=i.return}return oe=zm,zm=!1,oe}function _l(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Ah(i,o,p)}d=d.next}while(d!==u)}}function lu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Ph(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Vm(n){var i=n.alternate;i!==null&&(n.alternate=null,Vm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[$n],delete i[al],delete i[Kc],delete i[z0],delete i[V0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bm(n){return n.tag===5||n.tag===3||n.tag===4}function Hm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Oh(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Fa));else if(u!==4&&(n=n.child,n!==null))for(Oh(n,i,o),n=n.sibling;n!==null;)Oh(n,i,o),n=n.sibling}function Dh(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Dh(n,i,o),n=n.sibling;n!==null;)Dh(n,i,o),n=n.sibling}var It=null,Nn=!1;function Jr(n,i,o){for(o=o.child;o!==null;)Wm(n,i,o),o=o.sibling}function Wm(n,i,o){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ti,o)}catch{}switch(o.tag){case 5:jt||Js(o,i);case 6:var u=It,d=Nn;It=null,Jr(n,i,o),It=u,Nn=d,It!==null&&(Nn?(n=It,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):It.removeChild(o.stateNode));break;case 18:It!==null&&(Nn?(n=It,o=o.stateNode,n.nodeType===8?qc(n.parentNode,o):n.nodeType===1&&qc(n,o),Sn(n)):qc(It,o.stateNode));break;case 4:u=It,d=Nn,It=o.stateNode.containerInfo,Nn=!0,Jr(n,i,o),It=u,Nn=d;break;case 0:case 11:case 14:case 15:if(!jt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&Ah(o,i,_),d=d.next}while(d!==u)}Jr(n,i,o);break;case 1:if(!jt&&(Js(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(T){rt(o,i,T)}Jr(n,i,o);break;case 21:Jr(n,i,o);break;case 22:o.mode&1?(jt=(u=jt)||o.memoizedState!==null,Jr(n,i,o),jt=u):Jr(n,i,o);break;default:Jr(n,i,o)}}function $m(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new rw),i.forEach(function(u){var d=fw.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function bn(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var p=n,_=i,T=_;e:for(;T!==null;){switch(T.tag){case 5:It=T.stateNode,Nn=!1;break e;case 3:It=T.stateNode.containerInfo,Nn=!0;break e;case 4:It=T.stateNode.containerInfo,Nn=!0;break e}T=T.return}if(It===null)throw Error(t(160));Wm(p,_,d),It=null,Nn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(z){rt(d,i,z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gm(i,n),i=i.sibling}function Gm(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(bn(i,n),Kn(n),u&4){try{_l(3,n,n.return),lu(3,n)}catch(ae){rt(n,n.return,ae)}try{_l(5,n,n.return)}catch(ae){rt(n,n.return,ae)}}break;case 1:bn(i,n),Kn(n),u&512&&o!==null&&Js(o,o.return);break;case 5:if(bn(i,n),Kn(n),u&512&&o!==null&&Js(o,o.return),n.flags&32){var d=n.stateNode;try{Dr(d,"")}catch(ae){rt(n,n.return,ae)}}if(u&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=o!==null?o.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&No(d,p),Mo(T,_);var z=Mo(T,p);for(_=0;_<R.length;_+=2){var Y=R[_],X=R[_+1];Y==="style"?Do(d,X):Y==="dangerouslySetInnerHTML"?Po(d,X):Y==="children"?Dr(d,X):ce(d,Y,X,z)}switch(T){case"input":bo(d,p);break;case"textarea":ms(d,p);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var re=p.value;re!=null?sr(d,!!p.multiple,re,!1):K!==!!p.multiple&&(p.defaultValue!=null?sr(d,!!p.multiple,p.defaultValue,!0):sr(d,!!p.multiple,p.multiple?[]:"",!1))}d[al]=p}catch(ae){rt(n,n.return,ae)}}break;case 6:if(bn(i,n),Kn(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ae){rt(n,n.return,ae)}}break;case 3:if(bn(i,n),Kn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Sn(i.containerInfo)}catch(ae){rt(n,n.return,ae)}break;case 4:bn(i,n),Kn(n);break;case 13:bn(i,n),Kn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Mh=Ge())),u&4&&$m(n);break;case 22:if(Y=o!==null&&o.memoizedState!==null,n.mode&1?(jt=(z=jt)||Y,bn(i,n),jt=z):bn(i,n),Kn(n),u&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!Y&&(n.mode&1)!==0)for(ie=n,Y=n.child;Y!==null;){for(X=ie=Y;ie!==null;){switch(K=ie,re=K.child,K.tag){case 0:case 11:case 14:case 15:_l(4,K,K.return);break;case 1:Js(K,K.return);var oe=K.stateNode;if(typeof oe.componentWillUnmount=="function"){u=K,o=K.return;try{i=u,oe.props=i.memoizedProps,oe.state=i.memoizedState,oe.componentWillUnmount()}catch(ae){rt(u,o,ae)}}break;case 5:Js(K,K.return);break;case 22:if(K.memoizedState!==null){Ym(X);continue}}re!==null?(re.return=K,ie=re):Ym(X)}Y=Y.sibling}e:for(Y=null,X=n;;){if(X.tag===5){if(Y===null){Y=X;try{d=X.stateNode,z?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=X.stateNode,R=X.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=Oo("display",_))}catch(ae){rt(n,n.return,ae)}}}else if(X.tag===6){if(Y===null)try{X.stateNode.nodeValue=z?"":X.memoizedProps}catch(ae){rt(n,n.return,ae)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Y===X&&(Y=null),X=X.return}Y===X&&(Y=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:bn(i,n),Kn(n),u&4&&$m(n);break;case 21:break;default:bn(i,n),Kn(n)}}function Kn(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Bm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Dr(d,""),u.flags&=-33);var p=Hm(n);Dh(n,p,d);break;case 3:case 4:var _=u.stateNode.containerInfo,T=Hm(n);Oh(n,T,_);break;default:throw Error(t(161))}}catch(R){rt(n,n.return,R)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function sw(n,i,o){ie=n,qm(n)}function qm(n,i,o){for(var u=(n.mode&1)!==0;ie!==null;){var d=ie,p=d.child;if(d.tag===22&&u){var _=d.memoizedState!==null||ou;if(!_){var T=d.alternate,R=T!==null&&T.memoizedState!==null||jt;T=ou;var z=jt;if(ou=_,(jt=R)&&!z)for(ie=d;ie!==null;)_=ie,R=_.child,_.tag===22&&_.memoizedState!==null?Qm(d):R!==null?(R.return=_,ie=R):Qm(d);for(;p!==null;)ie=p,qm(p),p=p.sibling;ie=d,ou=T,jt=z}Km(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ie=p):Km(n)}}function Km(n){for(;ie!==null;){var i=ie;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:jt||lu(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!jt)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:In(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Yp(i,p,u);break;case 3:var _=i.updateQueue;if(_!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Yp(i,_,o)}break;case 5:var T=i.stateNode;if(o===null&&i.flags&4){o=T;var R=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&o.focus();break;case"img":R.src&&(o.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var z=i.alternate;if(z!==null){var Y=z.memoizedState;if(Y!==null){var X=Y.dehydrated;X!==null&&Sn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||i.flags&512&&Ph(i)}catch(K){rt(i,i.return,K)}}if(i===n){ie=null;break}if(o=i.sibling,o!==null){o.return=i.return,ie=o;break}ie=i.return}}function Ym(n){for(;ie!==null;){var i=ie;if(i===n){ie=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ie=o;break}ie=i.return}}function Qm(n){for(;ie!==null;){var i=ie;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{lu(4,i)}catch(R){rt(i,o,R)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(R){rt(i,d,R)}}var p=i.return;try{Ph(i)}catch(R){rt(i,p,R)}break;case 5:var _=i.return;try{Ph(i)}catch(R){rt(i,_,R)}}}catch(R){rt(i,i.return,R)}if(i===n){ie=null;break}var T=i.sibling;if(T!==null){T.return=i.return,ie=T;break}ie=i.return}}var ow=Math.ceil,au=he.ReactCurrentDispatcher,jh=he.ReactCurrentOwner,fn=he.ReactCurrentBatchConfig,je=0,_t=null,at=null,Nt=0,sn=0,Zs=qr(0),pt=0,wl=null,Ui=0,uu=0,Lh=0,xl=null,qt=null,Mh=0,eo=1/0,xr=null,cu=!1,Fh=null,Zr=null,hu=!1,ei=null,du=0,El=0,Uh=null,fu=-1,pu=0;function Ft(){return(je&6)!==0?Ge():fu!==-1?fu:fu=Ge()}function ti(n){return(n.mode&1)===0?1:(je&2)!==0&&Nt!==0?Nt&-Nt:H0.transition!==null?(pu===0&&(pu=Ni()),pu):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:Qo(n.type)),n)}function Rn(n,i,o,u){if(50<El)throw El=0,Uh=null,Error(t(185));Fr(n,o,u),((je&2)===0||n!==_t)&&(n===_t&&((je&2)===0&&(uu|=o),pt===4&&ni(n,Nt)),Kt(n,u),o===1&&je===0&&(i.mode&1)===0&&(eo=Ge()+500,Ba&&Yr()))}function Kt(n,i){var o=n.callbackNode;ur(n,i);var u=Ii(n,n===_t?Nt:0);if(u===0)o!==null&&$o(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&$o(o),i===1)n.tag===0?B0(Jm.bind(null,n)):Mp(Jm.bind(null,n)),F0(function(){(je&6)===0&&Yr()}),o=null;else{switch(zr(u)){case 1:o=Ci;break;case 4:o=jr;break;case 16:o=ln;break;case 536870912:o=pa;break;default:o=ln}o=og(o,Xm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Xm(n,i){if(fu=-1,pu=0,(je&6)!==0)throw Error(t(327));var o=n.callbackNode;if(to()&&n.callbackNode!==o)return null;var u=Ii(n,n===_t?Nt:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=mu(n,u);else{i=u;var d=je;je|=2;var p=eg();(_t!==n||Nt!==i)&&(xr=null,eo=Ge()+500,Vi(n,i));do try{uw();break}catch(T){Zm(n,T)}while(!0);rh(),au.current=p,je=d,at!==null?i=0:(_t=null,Nt=0,i=pt)}if(i!==0){if(i===2&&(d=en(n),d!==0&&(u=d,i=zh(n,d))),i===1)throw o=wl,Vi(n,0),ni(n,u),Kt(n,Ge()),o;if(i===6)ni(n,u);else{if(d=n.current.alternate,(u&30)===0&&!lw(d)&&(i=mu(n,u),i===2&&(p=en(n),p!==0&&(u=p,i=zh(n,p))),i===1))throw o=wl,Vi(n,0),ni(n,u),Kt(n,Ge()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Bi(n,qt,xr);break;case 3:if(ni(n,u),(u&130023424)===u&&(i=Mh+500-Ge(),10<i)){if(Ii(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Ft(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Gc(Bi.bind(null,n,qt,xr),i);break}Bi(n,qt,xr);break;case 4:if(ni(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var _=31-Lt(u);p=1<<_,_=i[_],_>d&&(d=_),u&=~p}if(u=d,u=Ge()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*ow(u/1960))-u,10<u){n.timeoutHandle=Gc(Bi.bind(null,n,qt,xr),u);break}Bi(n,qt,xr);break;case 5:Bi(n,qt,xr);break;default:throw Error(t(329))}}}return Kt(n,Ge()),n.callbackNode===o?Xm.bind(null,n):null}function zh(n,i){var o=xl;return n.current.memoizedState.isDehydrated&&(Vi(n,i).flags|=256),n=mu(n,i),n!==2&&(i=qt,qt=o,i!==null&&Vh(i)),n}function Vh(n){qt===null?qt=n:qt.push.apply(qt,n)}function lw(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!Cn(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ni(n,i){for(i&=~Lh,i&=~uu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Lt(i),u=1<<o;n[o]=-1,i&=~u}}function Jm(n){if((je&6)!==0)throw Error(t(327));to();var i=Ii(n,0);if((i&1)===0)return Kt(n,Ge()),null;var o=mu(n,i);if(n.tag!==0&&o===2){var u=en(n);u!==0&&(i=u,o=zh(n,u))}if(o===1)throw o=wl,Vi(n,0),ni(n,i),Kt(n,Ge()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Bi(n,qt,xr),Kt(n,Ge()),null}function Bh(n,i){var o=je;je|=1;try{return n(i)}finally{je=o,je===0&&(eo=Ge()+500,Ba&&Yr())}}function zi(n){ei!==null&&ei.tag===0&&(je&6)===0&&to();var i=je;je|=1;var o=fn.transition,u=Ne;try{if(fn.transition=null,Ne=1,n)return n()}finally{Ne=u,fn.transition=o,je=i,(je&6)===0&&Yr()}}function Hh(){sn=Zs.current,Xe(Zs)}function Vi(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,M0(o)),at!==null)for(o=at.return;o!==null;){var u=o;switch(Jc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&za();break;case 3:Qs(),Xe(Wt),Xe(Pt),hh();break;case 5:uh(u);break;case 4:Qs();break;case 13:Xe(et);break;case 19:Xe(et);break;case 10:ih(u.type._context);break;case 22:case 23:Hh()}o=o.return}if(_t=n,at=n=ri(n.current,null),Nt=sn=i,pt=0,wl=null,Lh=uu=Ui=0,qt=xl=null,Li!==null){for(i=0;i<Li.length;i++)if(o=Li[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,p=o.pending;if(p!==null){var _=p.next;p.next=d,u.next=_}o.pending=u}Li=null}return n}function Zm(n,i){do{var o=at;try{if(rh(),Ja.current=nu,Za){for(var u=tt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Za=!1}if(Fi=0,vt=ft=tt=null,pl=!1,ml=0,jh.current=null,o===null||o.return===null){pt=1,wl=i,at=null;break}e:{var p=n,_=o.return,T=o,R=i;if(i=Nt,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var z=R,Y=T,X=Y.tag;if((Y.mode&1)===0&&(X===0||X===11||X===15)){var K=Y.alternate;K?(Y.updateQueue=K.updateQueue,Y.memoizedState=K.memoizedState,Y.lanes=K.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var re=km(_);if(re!==null){re.flags&=-257,Cm(re,_,T,p,i),re.mode&1&&Sm(p,z,i),i=re,R=z;var oe=i.updateQueue;if(oe===null){var ae=new Set;ae.add(R),i.updateQueue=ae}else oe.add(R);break e}else{if((i&1)===0){Sm(p,z,i),Wh();break e}R=Error(t(426))}}else if(Je&&T.mode&1){var lt=km(_);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),Cm(lt,_,T,p,i),th(Xs(R,T));break e}}p=R=Xs(R,T),pt!==4&&(pt=2),xl===null?xl=[p]:xl.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var M=xm(p,R,i);Kp(p,M);break e;case 1:T=R;var O=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Zr===null||!Zr.has(F)))){p.flags|=65536,i&=-i,p.lanes|=i;var J=Em(p,T,i);Kp(p,J);break e}}p=p.return}while(p!==null)}ng(o)}catch(ue){i=ue,at===o&&o!==null&&(at=o=o.return);continue}break}while(!0)}function eg(){var n=au.current;return au.current=nu,n===null?nu:n}function Wh(){(pt===0||pt===3||pt===2)&&(pt=4),_t===null||(Ui&268435455)===0&&(uu&268435455)===0||ni(_t,Nt)}function mu(n,i){var o=je;je|=2;var u=eg();(_t!==n||Nt!==i)&&(xr=null,Vi(n,i));do try{aw();break}catch(d){Zm(n,d)}while(!0);if(rh(),je=o,au.current=u,at!==null)throw Error(t(261));return _t=null,Nt=0,pt}function aw(){for(;at!==null;)tg(at)}function uw(){for(;at!==null&&!da();)tg(at)}function tg(n){var i=sg(n.alternate,n,sn);n.memoizedProps=n.pendingProps,i===null?ng(n):at=i,jh.current=null}function ng(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=tw(o,i,sn),o!==null){at=o;return}}else{if(o=nw(o,i),o!==null){o.flags&=32767,at=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,at=null;return}}if(i=i.sibling,i!==null){at=i;return}at=i=n}while(i!==null);pt===0&&(pt=5)}function Bi(n,i,o){var u=Ne,d=fn.transition;try{fn.transition=null,Ne=1,cw(n,i,o,u)}finally{fn.transition=d,Ne=u}return null}function cw(n,i,o,u){do to();while(ei!==null);if((je&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(He(n,p),n===_t&&(at=_t=null,Nt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||hu||(hu=!0,og(ln,function(){return to(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=fn.transition,fn.transition=null;var _=Ne;Ne=1;var T=je;je|=4,jh.current=null,iw(n,o),Gm(o,n),R0(Wc),Br=!!Hc,Wc=Hc=null,n.current=o,sw(o),Ic(),je=T,Ne=_,fn.transition=p}else n.current=o;if(hu&&(hu=!1,ei=n,du=d),p=n.pendingLanes,p===0&&(Zr=null),ma(o.stateNode),Kt(n,Ge()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(cu)throw cu=!1,n=Fh,Fh=null,n;return(du&1)!==0&&n.tag!==0&&to(),p=n.pendingLanes,(p&1)!==0?n===Uh?El++:(El=0,Uh=n):El=0,Yr(),null}function to(){if(ei!==null){var n=zr(du),i=fn.transition,o=Ne;try{if(fn.transition=null,Ne=16>n?16:n,ei===null)var u=!1;else{if(n=ei,ei=null,du=0,(je&6)!==0)throw Error(t(331));var d=je;for(je|=4,ie=n.current;ie!==null;){var p=ie,_=p.child;if((ie.flags&16)!==0){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var z=T[R];for(ie=z;ie!==null;){var Y=ie;switch(Y.tag){case 0:case 11:case 15:_l(8,Y,p)}var X=Y.child;if(X!==null)X.return=Y,ie=X;else for(;ie!==null;){Y=ie;var K=Y.sibling,re=Y.return;if(Vm(Y),Y===z){ie=null;break}if(K!==null){K.return=re,ie=K;break}ie=re}}}var oe=p.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var lt=ae.sibling;ae.sibling=null,ae=lt}while(ae!==null)}}ie=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,ie=_;else e:for(;ie!==null;){if(p=ie,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:_l(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ie=M;break e}ie=p.return}}var O=n.current;for(ie=O;ie!==null;){_=ie;var F=_.child;if((_.subtreeFlags&2064)!==0&&F!==null)F.return=_,ie=F;else e:for(_=O;ie!==null;){if(T=ie,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:lu(9,T)}}catch(ue){rt(T,T.return,ue)}if(T===_){ie=null;break e}var J=T.sibling;if(J!==null){J.return=T.return,ie=J;break e}ie=T.return}}if(je=d,Yr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ti,n)}catch{}u=!0}return u}finally{Ne=o,fn.transition=i}}return!1}function rg(n,i,o){i=Xs(o,i),i=xm(n,i,1),n=Xr(n,i,1),i=Ft(),n!==null&&(Fr(n,1,i),Kt(n,i))}function rt(n,i,o){if(n.tag===3)rg(n,n,o);else for(;i!==null;){if(i.tag===3){rg(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Zr===null||!Zr.has(u))){n=Xs(o,n),n=Em(i,n,1),i=Xr(i,n,1),n=Ft(),i!==null&&(Fr(i,1,n),Kt(i,n));break}}i=i.return}}function hw(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Ft(),n.pingedLanes|=n.suspendedLanes&o,_t===n&&(Nt&o)===o&&(pt===4||pt===3&&(Nt&130023424)===Nt&&500>Ge()-Mh?Vi(n,0):Lh|=o),Kt(n,i)}function ig(n,i){i===0&&((n.mode&1)===0?i=1:(i=ks,ks<<=1,(ks&130023424)===0&&(ks=4194304)));var o=Ft();n=vr(n,i),n!==null&&(Fr(n,i,o),Kt(n,o))}function dw(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),ig(n,o)}function fw(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),ig(n,o)}var sg;sg=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Wt.current)Gt=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Gt=!1,ew(n,i,o);Gt=(n.flags&131072)!==0}else Gt=!1,Je&&(i.flags&1048576)!==0&&Fp(i,Wa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;su(n,i),n=i.pendingProps;var d=Hs(i,Pt.current);Ys(i,o),d=ph(null,i,u,n,d,o);var p=mh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,$t(u)?(p=!0,Va(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,lh(i),d.updater=ru,i.stateNode=d,d._reactInternals=i,xh(i,u,n,o),i=Ch(null,i,u,!0,p,o)):(i.tag=0,Je&&p&&Xc(i),Mt(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(su(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=mw(u),n=In(u,n),d){case 0:i=kh(null,i,u,n,o);break e;case 1:i=Am(null,i,u,n,o);break e;case 11:i=Tm(null,i,u,n,o);break e;case 14:i=Im(null,i,u,In(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:In(u,d),kh(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:In(u,d),Am(n,i,u,d,o);case 3:e:{if(Pm(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,d=p.element,qp(n,i),Qa(i,u,null,o);var _=i.memoizedState;if(u=_.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Xs(Error(t(423)),i),i=Om(n,i,u,o,d);break e}else if(u!==d){d=Xs(Error(t(424)),i),i=Om(n,i,u,o,d);break e}else for(rn=Gr(i.stateNode.containerInfo.firstChild),nn=i,Je=!0,Tn=null,o=$p(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Gs(),u===d){i=wr(n,i,o);break e}Mt(n,i,u,o)}i=i.child}return i;case 5:return Qp(i),n===null&&eh(i),u=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,$c(u,d)?_=null:p!==null&&$c(u,p)&&(i.flags|=32),Rm(n,i),Mt(n,i,_,o),i.child;case 6:return n===null&&eh(i),null;case 13:return Dm(n,i,o);case 4:return ah(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=qs(i,null,u,o):Mt(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:In(u,d),Tm(n,i,u,d,o);case 7:return Mt(n,i,i.pendingProps,o),i.child;case 8:return Mt(n,i,i.pendingProps.children,o),i.child;case 12:return Mt(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,_=d.value,qe(qa,u._currentValue),u._currentValue=_,p!==null)if(Cn(p.value,_)){if(p.children===d.children&&!Wt.current){i=wr(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var R=T.firstContext;R!==null;){if(R.context===u){if(p.tag===1){R=_r(-1,o&-o),R.tag=2;var z=p.updateQueue;if(z!==null){z=z.shared;var Y=z.pending;Y===null?R.next=R:(R.next=Y.next,Y.next=R),z.pending=R}}p.lanes|=o,R=p.alternate,R!==null&&(R.lanes|=o),sh(p.return,o,i),T.lanes|=o;break}R=R.next}}else if(p.tag===10)_=p.type===i.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=o,T=_.alternate,T!==null&&(T.lanes|=o),sh(_,o,i),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===i){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}Mt(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ys(i,o),d=hn(d),u=u(d),i.flags|=1,Mt(n,i,u,o),i.child;case 14:return u=i.type,d=In(u,i.pendingProps),d=In(u.type,d),Im(n,i,u,d,o);case 15:return Nm(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:In(u,d),su(n,i),i.tag=1,$t(u)?(n=!0,Va(i)):n=!1,Ys(i,o),_m(i,u,d),xh(i,u,d,o),Ch(null,i,u,!0,n,o);case 19:return Lm(n,i,o);case 22:return bm(n,i,o)}throw Error(t(156,i.tag))};function og(n,i){return Es(n,i)}function pw(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,i,o,u){return new pw(n,i,o,u)}function $h(n){return n=n.prototype,!(!n||!n.isReactComponent)}function mw(n){if(typeof n=="function")return $h(n)?1:0;if(n!=null){if(n=n.$$typeof,n===D)return 11;if(n===fe)return 14}return 2}function ri(n,i){var o=n.alternate;return o===null?(o=pn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function gu(n,i,o,u,d,p){var _=2;if(u=n,typeof n=="function")$h(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case b:return Hi(o.children,d,p,i);case C:_=8,d|=8;break;case I:return n=pn(12,o,i,d|2),n.elementType=I,n.lanes=p,n;case N:return n=pn(13,o,i,d),n.elementType=N,n.lanes=p,n;case We:return n=pn(19,o,i,d),n.elementType=We,n.lanes=p,n;case ge:return yu(o,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:_=10;break e;case A:_=9;break e;case D:_=11;break e;case fe:_=14;break e;case Ee:_=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=pn(_,o,i,d),i.elementType=n,i.type=u,i.lanes=p,i}function Hi(n,i,o,u){return n=pn(7,n,u,i),n.lanes=o,n}function yu(n,i,o,u){return n=pn(22,n,u,i),n.elementType=ge,n.lanes=o,n.stateNode={isHidden:!1},n}function Gh(n,i,o){return n=pn(6,n,null,i),n.lanes=o,n}function qh(n,i,o){return i=pn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function gw(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mr(0),this.expirationTimes=Mr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mr(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Kh(n,i,o,u,d,p,_,T,R){return n=new gw(n,i,o,T,R),i===1?(i=1,p===!0&&(i|=8)):i=0,p=pn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(p),n}function yw(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function lg(n){if(!n)return Kr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if($t(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if($t(o))return jp(n,o,i)}return i}function ag(n,i,o,u,d,p,_,T,R){return n=Kh(o,u,!0,n,d,p,_,T,R),n.context=lg(null),o=n.current,u=Ft(),d=ti(o),p=_r(u,d),p.callback=i??null,Xr(o,p,d),n.current.lanes=d,Fr(n,d,u),Kt(n,u),n}function vu(n,i,o,u){var d=i.current,p=Ft(),_=ti(d);return o=lg(o),i.context===null?i.context=o:i.pendingContext=o,i=_r(p,_),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Xr(d,i,_),n!==null&&(Rn(n,d,_,p),Ya(n,d,_)),_}function _u(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ug(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Yh(n,i){ug(n,i),(n=n.alternate)&&ug(n,i)}function vw(){return null}var cg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qh(n){this._internalRoot=n}wu.prototype.render=Qh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vu(n,i,null,null)},wu.prototype.unmount=Qh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zi(function(){vu(null,n,null,null)}),i[pr]=null}};function wu(n){this._internalRoot=n}wu.prototype.unstable_scheduleHydration=function(n){if(n){var i=wa();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Vn.length&&i!==0&&i<Vn[o].priority;o++);Vn.splice(o,0,n),o===0&&Sa(n)}};function Xh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function hg(){}function _w(n,i,o,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var z=_u(_);p.call(z)}}var _=ag(i,u,n,0,null,!1,!1,"",hg);return n._reactRootContainer=_,n[pr]=_.current,ol(n.nodeType===8?n.parentNode:n),zi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var T=u;u=function(){var z=_u(R);T.call(z)}}var R=Kh(n,0,!1,null,null,!1,!1,"",hg);return n._reactRootContainer=R,n[pr]=R.current,ol(n.nodeType===8?n.parentNode:n),zi(function(){vu(i,R,o,u)}),R}function Eu(n,i,o,u,d){var p=o._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var R=_u(_);T.call(R)}}vu(i,_,n,d)}else _=_w(o,i,n,d,u);return _u(_)}va=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Lr(i.pendingLanes);o!==0&&(Ur(i,o|1),Kt(i,Ge()),(je&6)===0&&(eo=Ge()+500,Yr()))}break;case 13:zi(function(){var u=vr(n,1);if(u!==null){var d=Ft();Rn(u,n,1,d)}}),Yh(n,1)}},Cs=function(n){if(n.tag===13){var i=vr(n,134217728);if(i!==null){var o=Ft();Rn(i,n,134217728,o)}Yh(n,134217728)}},_a=function(n){if(n.tag===13){var i=ti(n),o=vr(n,i);if(o!==null){var u=Ft();Rn(o,n,i,u)}Yh(n,i)}},wa=function(){return Ne},xa=function(n,i){var o=Ne;try{return Ne=n,i()}finally{Ne=o}},Fo=function(n,i,o){switch(i){case"input":if(bo(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Ua(u);if(!d)throw Error(t(90));hs(u),bo(u,d)}}}break;case"textarea":ms(n,o);break;case"select":i=o.value,i!=null&&sr(n,!!o.multiple,i,!1)}},vs=Bh,zo=zi;var ww={usingClientEntryPoint:!1,Events:[ul,Vs,Ua,lr,Uo,Bh]},Sl={findFiberByHostInstance:Pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xw={bundleType:Sl.bundleType,version:Sl.version,rendererPackageName:Sl.rendererPackageName,rendererConfig:Sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:he.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Wo(n),n===null?null:n.stateNode},findFiberByHostInstance:Sl.findFiberByHostInstance||vw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{Ti=Su.inject(xw),Zt=Su}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ww,Yt.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(i))throw Error(t(200));return yw(n,i,null,o)},Yt.createRoot=function(n,i){if(!Xh(n))throw Error(t(299));var o=!1,u="",d=cg;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Kh(n,1,!1,null,null,o,!1,u,d),n[pr]=i.current,ol(n.nodeType===8?n.parentNode:n),new Qh(i)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Wo(i),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return zi(n)},Yt.hydrate=function(n,i,o){if(!xu(i))throw Error(t(200));return Eu(null,n,i,!0,o)},Yt.hydrateRoot=function(n,i,o){if(!Xh(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,p="",_=cg;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),i=ag(i,null,n,1,o??null,d,!1,p,_),n[pr]=i.current,ol(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new wu(i)},Yt.render=function(n,i,o){if(!xu(i))throw Error(t(200));return Eu(null,n,i,!1,o)},Yt.unmountComponentAtNode=function(n){if(!xu(n))throw Error(t(40));return n._reactRootContainer?(zi(function(){Eu(null,null,n,!1,function(){n._reactRootContainer=null,n[pr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Bh,Yt.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!xu(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Eu(n,i,o,!1,u)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var wg;function Rw(){if(wg)return ed.exports;wg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ed.exports=bw(),ed.exports}var xg;function Aw(){if(xg)return ku;xg=1;var r=Rw();return ku.createRoot=r.createRoot,ku.hydrateRoot=r.hydrateRoot,ku}var Pw=Aw();const Eg=r=>{let e;const t=new Set,s=(w,k)=>{const E=typeof w=="function"?w(e):w;if(!Object.is(E,e)){const S=e;e=k??(typeof E!="object"||E===null)?E:Object.assign({},e,E),t.forEach(U=>U(e,S))}},l=()=>e,m={setState:s,getState:l,getInitialState:()=>v,subscribe:w=>(t.add(w),()=>t.delete(w))},v=e=r(s,l,m);return m},Ow=r=>r?Eg(r):Eg,Dw=r=>r;function jw(r,e=Dw){const t=gg.useSyncExternalStore(r.subscribe,()=>e(r.getState()),()=>e(r.getInitialState()));return gg.useDebugValue(t),t}const Sg=r=>{const e=Ow(r),t=s=>jw(e,s);return Object.assign(t,e),t},Lw=r=>r?Sg(r):Sg,kg="https://api.boelguard.me/",Mw="https://reactapi.boelguard.me/auth",Jl=Mw;async function Fw(r,e,t){const s=await fetch(`${Jl}/login`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:e,rememberMe:t})});if(!s.ok)throw new Error(await s.text()||"Login failed");return s.json()}async function Uw(){await fetch(`${Jl}/logout`,{method:"POST",credentials:"include"})}async function Cg(){const r=await fetch(`${Jl}/me`,{credentials:"include"});if(!r.ok)throw new Error("Unauthenticated");return r.json()}async function zw(){if(!(await fetch(`${Jl}/refresh`,{method:"POST",credentials:"include"})).ok)throw new Error("Refresh failed")}async function Vw(r){if(!(await fetch(`${Jl}/forgot-password`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r})})).ok)throw new Error("Password reset failed")}const Bw=Lw(r=>((async()=>{try{const e=await Cg(),t={id:e.uid,email:"",username:e.displayName??"",name:e.displayName??""};r({user:t,isAuthenticated:!0,ready:!0})}catch{try{await zw();const e=await Cg(),t={id:e.uid,email:"",username:e.displayName??"",name:e.displayName??""};r({user:t,isAuthenticated:!0,ready:!0})}catch{r({ready:!0})}}})(),{user:null,isLoading:!1,error:null,isAuthenticated:!1,ready:!1,login:async({emailOrUsername:e,password:t,rememberMe:s})=>{r({isLoading:!0,error:null});try{const l=await Fw(e,t,s),c={id:l.uid,email:e.includes("@")?e:"",username:l.displayName??"",name:l.displayName??""};s&&localStorage.setItem("user",JSON.stringify(c)),r({user:c,isAuthenticated:!0,isLoading:!1})}catch(l){r({error:l?.message||"Login failed",isLoading:!1})}},logout:async()=>{await Uw(),localStorage.clear(),r({user:null,isAuthenticated:!1,error:null})},forgotPassword:async e=>{r({isLoading:!0,error:null});try{await Vw(e),r({isLoading:!1})}catch(t){r({error:t?.message||"Failed to send reset e‑mail",isLoading:!1})}},clearError:()=>r({error:null})})),Zl=()=>{const{user:r,isLoading:e,error:t,isAuthenticated:s,ready:l,login:c,logout:h,forgotPassword:m,clearError:v}=Bw();return{user:r,isLoading:e,error:t,isAuthenticated:s,ready:l,login:c,logout:h,forgotPassword:m,clearError:v}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),De=(r,e)=>{const t=le.forwardRef(({color:s="currentColor",size:l=24,strokeWidth:c=2,absoluteStrokeWidth:h,className:m="",children:v,...w},k)=>le.createElement("svg",{ref:k,...Hw,width:l,height:l,stroke:s,strokeWidth:h?Number(c)*24/Number(l):c,className:["lucide",`lucide-${Ww(r)}`,m].join(" "),...w},[...e.map(([E,S])=>le.createElement(E,S)),...Array.isArray(v)?v:[v]]));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=De("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=De("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=De("ArrowLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=De("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=De("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=De("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=De("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=De("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=De("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=De("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=De("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=De("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=De("Gamepad",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=De("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=De("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=De("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=De("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=De("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=De("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=De("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=De("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=De("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=De("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=De("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=De("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=De("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=De("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=De("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=De("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=De("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=De("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=De("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=De("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=De("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),lv=({size:r="md",className:e=""})=>{const t={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8"};return g.jsx(t1,{className:`animate-spin ${t[r]} ${e}`})},nt=({variant:r="primary",size:e="md",loading:t=!1,children:s,className:l="",disabled:c,...h})=>{const m="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",v={primary:"bg-primary text-on-primary hover:bg-primary focus:ring-primary  shadow-md hover:shadow-lg",secondary:"bg-secondary text-on-secondary hover:bg-secondary focus:ring-secondary  shadow-md hover:shadow-lg",outline:"border border-default text-default hover:bg-subtle focus:ring-primary",ghost:"text-muted hover:text-default hover:bg-subtle focus:ring-default"},w={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"};return g.jsxs("button",{className:`${m} ${v[r]} ${w[e]} ${l}`,disabled:c||t,...h,children:[t&&g.jsx(lv,{size:"sm",className:"mr-2"}),s]})},zu=le.forwardRef(({label:r,error:e,icon:t,className:s="",...l},c)=>g.jsxs("div",{className:"space-y-1",children:[r&&g.jsx("label",{className:"block text-sm font-medium text-default text-subtle",children:r}),g.jsxs("div",{className:"relative",children:[t&&g.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:g.jsx("div",{className:"text-muted ",children:t})}),g.jsx("input",{ref:c,className:`
              block w-full rounded-lg border border-default bg-bg bg-subtle px-3 py-2 text-default  placeholder-gray-500 
              focus:border-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500  focus:ring-offset-1 
              disabled:bg-gray-50  disabled:text-subtle  transition-all duration-200
              ${t?"pl-10":""}
              ${e?"border-red-500  focus:border-red-500 focus:ring-red-500":""}
              ${s}
            `,...l})]}),e&&g.jsx("p",{className:"text-sm text-red-600  mt-1",children:e})]}));zu.displayName="Input";const Qd=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),c1=r=>r.length>=3&&/^[a-zA-Z0-9_]+$/.test(r),h1=r=>r.length>=6,Ng=r=>Qd(r)?"email":"username",d1=({onForgotPassword:r})=>{const[e,t]=le.useState({emailOrUsername:"",password:"",rememberMe:!1}),[s,l]=le.useState({}),[c,h]=le.useState(!1),[m,v]=le.useState({}),{login:w,isLoading:k,error:E,clearError:S}=Zl();le.useEffect(()=>{if(E){const q=setTimeout(()=>{S()},5e3);return()=>clearTimeout(q)}},[E,S]);const U=()=>{const q={};if(!e.emailOrUsername.trim())q.emailOrUsername="Email or username is required";else{const ce=Ng(e.emailOrUsername);ce==="email"&&!Qd(e.emailOrUsername)?q.emailOrUsername="Please enter a valid email address":ce==="username"&&!c1(e.emailOrUsername)&&(q.emailOrUsername="Username must be at least 3 characters and contain only letters, numbers, and underscores")}return e.password?h1(e.password)||(q.password="Password must be at least 6 characters"):q.password="Password is required",l(q),Object.keys(q).length===0},B=async q=>{q.preventDefault(),U()&&await w(e)},G=(q,ce)=>{t(he=>({...he,[q]:ce})),m[q]&&l(he=>({...he,[q]:""}))},$=q=>{v(ce=>({...ce,[q]:!0})),U()},de=Ng(e.emailOrUsername)==="email"?g.jsx(wd,{size:20}):g.jsx(a1,{size:20});return g.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center p-3 sm:p-4",children:g.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:g.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-default",children:g.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[g.jsxs("div",{className:"text-center mb-8",children:[g.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4",children:g.jsx(Tg,{className:"w-8 h-8 text-on-primary"})}),g.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-default mb-2",children:"Welcome Back"}),g.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Sign in to your account to continue"})]}),E&&g.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-gradient-theme border border-error rounded-lg flex items-center space-x-2 text-error",children:[g.jsx(sv,{size:20}),g.jsx("span",{className:"text-sm font-medium flex-1",children:E})]}),g.jsxs("form",{onSubmit:B,className:"space-y-5 sm:space-y-6",children:[g.jsx(zu,{label:"Email or Username",type:"text",placeholder:"Enter your email or username",value:e.emailOrUsername,onChange:q=>G("emailOrUsername",q.target.value),onBlur:()=>$("emailOrUsername"),error:s.emailOrUsername,icon:de,disabled:k}),g.jsxs("div",{className:"relative",children:[g.jsx(zu,{label:"Password",type:c?"text":"password",placeholder:"Enter your password",value:e.password,onChange:q=>G("password",q.target.value),onBlur:()=>$("password"),error:s.password,icon:g.jsx(Tg,{size:20}),disabled:k}),g.jsx("button",{type:"button",className:"absolute right-3 top-8 text-muted hover:text-subtle transition-colors",onClick:()=>h(!c),children:c?g.jsx(Xw,{size:20}):g.jsx(Kd,{size:20})})]}),g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"flex items-center space-x-2",children:[g.jsx("input",{type:"checkbox",checked:e.rememberMe,onChange:q=>G("rememberMe",q.target.checked.toString()),className:"w-4 h-4 text-primary border-default rounded focus:ring-primary"}),g.jsx("span",{className:"text-sm text-subtle",children:"Remember me"})]}),g.jsx("button",{type:"button",onClick:r,className:"text-sm text-subtle hover:text-default font-medium transition-colors",children:"Forgot password?"})]}),g.jsxs(nt,{type:"submit",loading:k,className:"w-full",size:"lg",children:["Sign In",!k&&g.jsx(qw,{className:"ml-2 w-5 h-5"})]})]})]})})})})},f1=({onBackToLogin:r})=>{const[e,t]=le.useState(""),[s,l]=le.useState(""),[c,h]=le.useState(!1),[m,v]=le.useState(!1),{forgotPassword:w,isLoading:k}=Zl(),E=()=>e.trim()?Qd(e)?(l(""),!0):(l("Please enter a valid email address"),!1):(l("Email is required"),!1),S=async G=>{G.preventDefault(),E()&&(await w(e),h(!0))},U=G=>{t(G),m&&l("")},B=()=>{v(!0),E()};return c?g.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center p-3 sm:p-4",children:g.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:g.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-default",children:g.jsxs("div",{className:"px-6 sm:px-8 py-8 sm:py-12 text-center",children:[g.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-2xl mb-6",children:g.jsx(Kw,{className:"w-8 h-8 text-success"})}),g.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default mb-4",children:"Check Your Email"}),g.jsxs("p",{className:"text-subtle mb-8 leading-relaxed text-sm sm:text-base",children:["We've sent a password reset link to"," ",g.jsx("span",{className:"font-medium text-default break-all",children:e}),". Please check your email and follow the instructions to reset your password."]}),g.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[g.jsxs(nt,{onClick:r,variant:"primary",className:"w-full",size:"lg",children:[g.jsx(_d,{className:"mr-2 w-5 h-5"}),"Back to Login"]}),g.jsx(nt,{onClick:()=>h(!1),variant:"ghost",className:"w-full",children:"Didn't receive the email?"})]})]})})})}):g.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center p-3 sm:p-4",children:g.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:g.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-default",children:g.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[g.jsxs("div",{className:"text-center mb-8",children:[g.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4",children:g.jsx(wd,{className:"w-8 h-8 text-on-primary"})}),g.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-default mb-2",children:"Reset Password"}),g.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Enter your email address and we'll send you a link to reset your password"})]}),s&&g.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-gradient-theme border border-error rounded-lg flex items-center space-x-2 text-error",children:[g.jsx(sv,{size:20}),g.jsx("span",{className:"text-sm font-medium flex-1",children:s})]}),g.jsxs("form",{onSubmit:S,className:"space-y-5 sm:space-y-6",children:[g.jsx(zu,{label:"Email Address",type:"email",placeholder:"Enter your email address",value:e,onChange:G=>U(G.target.value),onBlur:B,error:s,icon:g.jsx(wd,{size:20}),disabled:k}),g.jsx(nt,{type:"submit",loading:k,className:"w-full",size:"lg",children:"Send Reset Link"})]}),g.jsx("div",{className:"mt-5 sm:mt-6 text-center",children:g.jsxs("button",{type:"button",onClick:r,className:"inline-flex items-center text-sm text-subtle hover:text-default font-medium transition-colors",children:[g.jsx(_d,{className:"mr-2 w-4 h-4"}),"Back to Login"]})})]})})})})},p1=({isOpen:r,onClose:e})=>{const t="https://linktr.ee/esports_pxl",s=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(t)}`;return r?g.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:g.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200",children:[g.jsxs("div",{className:"flex items-center justify-between mb-6",children:[g.jsx("h2",{className:"text-xl font-bold text-default",children:"QR Code"}),g.jsx("button",{onClick:e,className:"text-subtle hover:text-default transition-colors","aria-label":"Close modal",children:g.jsx(hc,{className:"w-6 h-6"})})]}),g.jsxs("div",{className:"text-center space-y-4",children:[g.jsxs("div",{className:"bg-bg p-4 rounded-xl border border-default shadow-sm hover:shadow-md inline-block",children:[g.jsx("img",{src:s,alt:"QR Code for esports_pxl",className:"w-64 h-64 mx-auto",onError:l=>{const c=l.target;c.style.display="none",c.nextElementSibling?.classList.remove("hidden")}}),g.jsx("div",{className:"hidden w-64 h-64 bg-subtle rounded-lg flex items-center justify-center",children:g.jsxs("div",{className:"text-center",children:[g.jsx("div",{className:"text-4xl mb-2",children:"📱"}),g.jsx("p",{className:"text-sm text-subtle",children:"QR Code"})]})})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("p",{className:"text-sm text-subtle",children:"Scan to visit:"}),g.jsx("div",{className:"bg-gray-50 bg-subtle rounded-lg p-3",children:g.jsx("p",{className:"text-sm font-mono text-default  break-all",children:t})})]}),g.jsxs("div",{className:"flex space-x-3 pt-4",children:[g.jsx(nt,{onClick:e,variant:"outline",className:"flex-1",children:"Close"}),g.jsxs(nt,{onClick:()=>window.open(t,"_blank"),className:"flex-1",children:[g.jsx(Qw,{className:"w-4 h-4 mr-2"}),"Visit"]})]})]}),g.jsx("div",{className:"mt-6 pt-4 border-t border-default shadow-sm hover:shadow-md ",children:g.jsx("p",{className:"text-xs text-subtle  text-center",children:"Point your camera at the QR code to open the link"})})]})}):null},m1=({onAddStock:r,onShowLog:e,onTakeItem:t})=>{const[s,l]=le.useState(!1),[c,h]=le.useState(!1),[m,v]=le.useState({x:20,y:20}),[w,k]=le.useState({x:0,y:0}),E=le.useRef(null),S=$=>{const de="touches"in $?$.touches[0].clientX:$.clientX,q="touches"in $?$.touches[0].clientY:$.clientY;h(!0),k({x:de-m.x,y:q-m.y})},U=$=>{if(!c)return;const de="touches"in $?$.touches[0].clientX:$.clientX,q="touches"in $?$.touches[0].clientY:$.clientY,ce=de-w.x,he=q-w.y,we=window.innerWidth-64,W=window.innerHeight-64;v({x:Math.max(0,Math.min(ce,we)),y:Math.max(0,Math.min(he,W))})},B=()=>{h(!1)};le.useEffect(()=>{if(c)return document.addEventListener("mousemove",U),document.addEventListener("mouseup",B),document.addEventListener("touchmove",U),document.addEventListener("touchend",B),()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",B),document.removeEventListener("touchmove",U),document.removeEventListener("touchend",B)}},[c,w]),le.useEffect(()=>{const $=de=>{E.current&&!E.current.contains(de.target)&&l(!1)};return document.addEventListener("mousedown",$),()=>document.removeEventListener("mousedown",$)},[]);const G=()=>{c||l(!s)};return g.jsx("div",{ref:E,className:"fixed z-50 select-none",style:{right:`${m.x}px`,bottom:`${m.y}px`},children:g.jsxs("div",{className:"relative",children:[s&&g.jsxs("div",{className:"absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-200",children:[g.jsx(nt,{onClick:e,className:"w-12 h-12 rounded-full shadow-lg bg-purple-500 hover:bg-purple-600 text-on-primary p-0","aria-label":"Show log",children:g.jsx(Kd,{className:"w-6 h-6"})}),g.jsx(nt,{onClick:r,className:"w-12 h-12 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-on-primary p-0","aria-label":"Add stock",children:g.jsx(qi,{className:"w-6 h-6"})}),g.jsx(nt,{onClick:t,className:"w-12 h-12 rounded-full shadow-lg bg-primary hover:bg-blue-600 text-on-primary p-0","aria-label":"Take item",children:g.jsx(ro,{className:"w-6 h-6"})})]}),g.jsx("button",{onMouseDown:S,onTouchStart:S,onClick:G,className:`w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-on-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-orange-500/30 ${c?"cursor-grabbing scale-110":"cursor-grab hover:scale-105"}`,"aria-label":s?"Close fridge menu":"Open fridge menu",children:g.jsx("div",{className:`transition-transform duration-200 ${s?"rotate-45":""}`,children:g.jsx(qi,{className:"w-7 h-7"})})})]})})},g1=({onBack:r})=>{const[e,t]=le.useState([{id:"1",name:"RedBull Energy Drink",stock:24,lastUpdated:new Date}]),[s,l]=le.useState([{id:"1",action:"take",amount:2,user:"Alice Johnson",timestamp:new Date(Date.now()-30*60*1e3),itemName:"RedBull Energy Drink"},{id:"2",action:"add",amount:12,user:"Bob Smith",timestamp:new Date(Date.now()-2*60*60*1e3),itemName:"RedBull Energy Drink"},{id:"3",action:"take",amount:1,user:"Carol Davis",timestamp:new Date(Date.now()-4*60*60*1e3),itemName:"RedBull Energy Drink"}]),[c,h]=le.useState(!1),[m,v]=le.useState(!1),[w,k]=le.useState(!1),[E,S]=le.useState(1),[U,B]=le.useState(1),G=q=>{const he=Math.floor((new Date().getTime()-q.getTime())/(1e3*60));if(he<1)return"Just now";if(he<60)return`${he}m ago`;const we=Math.floor(he/60);return we<24?`${we}h ago`:`${Math.floor(we/24)}d ago`},$=()=>{const q=e[0].stock;if(E>q)return;const ce=q-E;t(we=>we.map(W=>W.id==="1"?{...W,stock:ce,lastUpdated:new Date}:W));const he={id:Date.now().toString(),action:"take",amount:E,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};l(we=>[he,...we]),h(!1),S(1)},de=()=>{const ce=e[0].stock+U;t(we=>we.map(W=>W.id==="1"?{...W,stock:ce,lastUpdated:new Date}:W));const he={id:Date.now().toString(),action:"add",amount:U,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};l(we=>[he,...we]),v(!1),B(1)};return g.jsxs("div",{className:"min-h-screen bg-subtle pb-20",children:[g.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:g.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:g.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:g.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[g.jsx(nt,{onClick:r,variant:"ghost",size:"sm",children:g.jsx(_d,{className:"w-5 h-5"})}),g.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center",children:g.jsx(ov,{className:"w-6 h-6 text-on-primary"})}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:"Fridge"}),g.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Stock management"})]})]})})})}),g.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[g.jsx("div",{className:"grid grid-cols-1 gap-4 mb-6",children:e.map(q=>g.jsx("div",{className:"bg-bg rounded-xl p-6 border border-default shadow-sm",children:g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center",children:g.jsx(Ig,{className:"w-8 h-8 text-on-primary"})}),g.jsxs("div",{className:"flex-1",children:[g.jsx("h3",{className:"text-lg font-semibold text-default  mb-1",children:q.name}),g.jsxs("div",{className:"flex items-center space-x-4 text-sm text-subtle",children:[g.jsxs("div",{className:"flex items-center space-x-1",children:[g.jsx(Ig,{className:"w-4 h-4"}),g.jsxs("span",{children:[q.stock," in stock"]})]}),g.jsxs("div",{className:"flex items-center space-x-1",children:[g.jsx(qd,{className:"w-4 h-4"}),g.jsxs("span",{children:["Updated ",G(q.lastUpdated)]})]})]})]}),g.jsxs("div",{className:"text-right",children:[g.jsx("div",{className:"text-2xl font-bold text-default ",children:q.stock}),g.jsx("div",{className:"text-sm text-subtle ",children:"units"})]})]})},q.id))}),g.jsxs("div",{className:"bg-bg rounded-xl border border-default",children:[g.jsx("div",{className:"p-4 border-b border-default",children:g.jsx("h2",{className:"text-lg font-semibold text-default ",children:"Recent Activity"})}),g.jsx("div",{className:"divide-y divide-gray-200 ",children:s.slice(0,5).map(q=>g.jsx("div",{className:"p-4",children:g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${q.action==="take"?"bg-red-100 ":"bg-green-100 "}`,children:q.action==="take"?g.jsx(ro,{className:`w-4 h-4 ${q.action==="take"?"text-red-600 ":"text-green-600 "}`}):g.jsx(qi,{className:"w-4 h-4 text-green-600 "})}),g.jsxs("div",{className:"flex-1",children:[g.jsxs("p",{className:"text-sm font-medium text-default ",children:[q.user," ",q.action==="take"?"took":"added"," ",q.amount," ",q.itemName]}),g.jsx("p",{className:"text-xs text-subtle ",children:G(q.timestamp)})]}),g.jsxs("div",{className:`text-sm font-medium ${q.action==="take"?"text-red-600 ":"text-green-600 "}`,children:[q.action==="take"?"-":"+",q.amount]})]})},q.id))})]})]}),g.jsx(m1,{onTakeItem:()=>h(!0),onAddStock:()=>v(!0),onShowLog:()=>k(!0)}),c&&g.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:g.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[g.jsx("h2",{className:"text-xl font-bold text-default  mb-4",children:"Take from Stock"}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-2",children:"Amount to take"}),g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx(nt,{onClick:()=>S(Math.max(1,E-1)),variant:"outline",size:"sm",children:g.jsx(ro,{className:"w-4 h-4"})}),g.jsx("span",{className:"text-lg font-semibold text-default  min-w-[3rem] text-center",children:E}),g.jsx(nt,{onClick:()=>S(Math.min(e[0].stock,E+1)),variant:"outline",size:"sm",children:g.jsx(qi,{className:"w-4 h-4"})})]}),g.jsxs("p",{className:"text-xs text-subtle  mt-1",children:["Available: ",e[0].stock," units"]})]}),g.jsxs("div",{className:"flex space-x-3",children:[g.jsx(nt,{onClick:()=>h(!1),variant:"outline",className:"flex-1",children:"Cancel"}),g.jsx(nt,{onClick:$,className:"flex-1",children:"Take"})]})]})]})}),m&&g.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:g.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[g.jsx("h2",{className:"text-xl font-bold text-default  mb-4",children:"Add to Stock"}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-2",children:"Amount to add"}),g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx(nt,{onClick:()=>B(Math.max(1,U-1)),variant:"outline",size:"sm",children:g.jsx(ro,{className:"w-4 h-4"})}),g.jsx("span",{className:"text-lg font-semibold text-default  min-w-[3rem] text-center",children:U}),g.jsx(nt,{onClick:()=>B(U+1),variant:"outline",size:"sm",children:g.jsx(qi,{className:"w-4 h-4"})})]})]}),g.jsxs("div",{className:"flex space-x-3",children:[g.jsx(nt,{onClick:()=>v(!1),variant:"outline",className:"flex-1",children:"Cancel"}),g.jsx(nt,{onClick:de,className:"flex-1",children:"Add"})]})]})]})}),w&&g.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:g.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-md shadow-2xl max-h-[80vh] overflow-hidden",children:[g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsx("h2",{className:"text-xl font-bold text-default ",children:"Activity Log"}),g.jsx(nt,{onClick:()=>k(!1),variant:"ghost",size:"sm",children:g.jsx(hc,{className:"w-5 h-5"})})]}),g.jsx("div",{className:"overflow-y-auto max-h-96 space-y-3",children:s.map(q=>g.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-50 bg-subtle rounded-lg",children:[g.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${q.action==="take"?"bg-red-100 ":"bg-green-100 "}`,children:q.action==="take"?g.jsx(ro,{className:"w-4 h-4 text-red-600 "}):g.jsx(qi,{className:"w-4 h-4 text-green-600 "})}),g.jsxs("div",{className:"flex-1",children:[g.jsx("p",{className:"text-sm font-medium text-default ",children:q.user}),g.jsxs("p",{className:"text-xs text-subtle",children:[q.action==="take"?"Took":"Added"," ",q.amount," units"]}),g.jsxs("p",{className:"text-xs text-subtle ",children:[q.timestamp.toLocaleDateString()," ",q.timestamp.toLocaleTimeString()]})]}),g.jsxs("div",{className:`text-sm font-medium ${q.action==="take"?"text-red-600 ":"text-green-600 "}`,children:[q.action==="take"?"-":"+",q.amount]})]},q.id))})]})})]})},y1=()=>{};var bg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=function(r,e){if(!r)throw Eo(e)},Eo=function(r){return new Error("Firebase Database ("+av.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[t++]=l:l<2048?(e[t++]=l>>6|192,e[t++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=l>>18|240,e[t++]=l>>12&63|128,e[t++]=l>>6&63|128,e[t++]=l&63|128):(e[t++]=l>>12|224,e[t++]=l>>6&63|128,e[t++]=l&63|128)}return e},v1=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const l=r[t++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[t++];e[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[t++],h=r[t++],m=r[t++],v=((l&7)<<18|(c&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(v>>10)),e[s++]=String.fromCharCode(56320+(v&1023))}else{const c=r[t++],h=r[t++];e[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|h&63)}}return e.join("")},Xd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],h=l+1<r.length,m=h?r[l+1]:0,v=l+2<r.length,w=v?r[l+2]:0,k=c>>2,E=(c&3)<<4|m>>4;let S=(m&15)<<2|w>>6,U=w&63;v||(U=64,h||(S=64)),s.push(t[k],t[E],t[S],t[U])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(uv(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):v1(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=t[r.charAt(l++)],m=l<r.length?t[r.charAt(l)]:0;++l;const w=l<r.length?t[r.charAt(l)]:64;++l;const E=l<r.length?t[r.charAt(l)]:64;if(++l,c==null||m==null||w==null||E==null)throw new _1;const S=c<<2|m>>4;if(s.push(S),w!==64){const U=m<<4&240|w>>2;if(s.push(U),E!==64){const B=w<<6&192|E;s.push(B)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class _1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cv=function(r){const e=uv(r);return Xd.encodeByteArray(e,!0)},Vu=function(r){return cv(r).replace(/\./g,"")},Bu=function(r){try{return Xd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(r){return hv(void 0,r)}function hv(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!x1(t)||(r[t]=hv(r[t],e[t]));return r}function x1(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=()=>E1().__FIREBASE_DEFAULTS__,k1=()=>{if(typeof process>"u"||typeof bg>"u")return;const r=bg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},C1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Bu(r[1]);return e&&JSON.parse(e)},Jd=()=>{try{return y1()||S1()||k1()||C1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},dv=r=>{var e,t;return(t=(e=Jd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},fv=r=>{const e=dv(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},pv=()=>{var r;return(r=Jd())===null||r===void 0?void 0:r.config},mv=r=>{var e;return(e=Jd())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zd(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Vu(JSON.stringify(t)),Vu(JSON.stringify(h)),""].join(".")}const Al={};function T1(){const r={prod:[],emulator:[]};for(const e of Object.keys(Al))Al[e]?r.emulator.push(e):r.prod.push(e);return r}function I1(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Rg=!1;function ef(r,e){if(typeof window>"u"||typeof document>"u"||!ls(window.location.host)||Al[r]===e||Al[r]||Rg)return;Al[r]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",c=T1().prod.length>0;function h(){const S=document.getElementById(s);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function v(S,U){S.setAttribute("width","24"),S.setAttribute("id",U),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function w(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Rg=!0,h()},S}function k(S,U){S.setAttribute("id",U),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=I1(s),U=t("text"),B=document.getElementById(U)||document.createElement("span"),G=t("learnmore"),$=document.getElementById(G)||document.createElement("a"),de=t("preprendIcon"),q=document.getElementById(de)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ce=S.element;m(ce),k($,G);const he=w();v(q,de),ce.append(q,B,$,he),document.body.appendChild(ce)}c?(B.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function N1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function b1(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function yv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function R1(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function A1(){return av.NODE_ADMIN===!0}function P1(){try{return typeof indexedDB=="object"}catch{return!1}}function O1(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{t=!1},l.onerror=()=>{var c;e(((c=l.error)===null||c===void 0?void 0:c.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1="FirebaseError";class Pr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=D1,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ea.prototype.create)}}class ea{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},l=`${this.service}/${e}`,c=this.errors[e],h=c?j1(c,s):"Error",m=`${this.serviceName}: ${h} (${l}).`;return new Pr(l,m,s)}}function j1(r,e){return r.replace(L1,(t,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const L1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(r){return JSON.parse(r)}function St(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=function(r){let e={},t={},s={},l="";try{const c=r.split(".");e=Vl(Bu(c[0])||""),t=Vl(Bu(c[1])||""),l=c[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:l}},M1=function(r){const e=vv(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},F1=function(r){const e=vv(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function mo(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function xd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Hu(r,e,t){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(t,r[l],l,r));return s}function fi(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const l of t){if(!s.includes(l))return!1;const c=r[l],h=e[l];if(Ag(c)&&Ag(h)){if(!fi(c,h))return!1}else if(c!==h)return!1}for(const l of s)if(!t.includes(l))return!1;return!0}function Ag(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)s[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)s[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const S=s[E-3]^s[E-8]^s[E-14]^s[E-16];s[E]=(S<<1|S>>>31)&4294967295}let l=this.chain_[0],c=this.chain_[1],h=this.chain_[2],m=this.chain_[3],v=this.chain_[4],w,k;for(let E=0;E<80;E++){E<40?E<20?(w=m^c&(h^m),k=1518500249):(w=c^h^m,k=1859775393):E<60?(w=c&h|m&(c|h),k=2400959708):(w=c^h^m,k=3395469782);const S=(l<<5|l>>>27)+w+v+k+s[E]&4294967295;v=m,m=h,h=(c<<30|c>>>2)&4294967295,c=l,l=S}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+m&4294967295,this.chain_[4]=this.chain_[4]+v&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let l=0;const c=this.buf_;let h=this.inbuf_;for(;l<t;){if(h===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<t;)if(c[h]=e.charCodeAt(l),++h,++l,h===this.blockSize){this.compress_(c),h=0;break}}else for(;l<t;)if(c[h]=e[l],++h,++l,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let c=24;c>=0;c-=8)e[s]=this.chain_[l]>>c&255,++s;return e}}function z1(r,e){const t=new V1(r,e);return t.subscribe.bind(t)}class V1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let l;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");B1(e,["next","error","complete"])?l=e:l={next:e,error:t,complete:s},l.next===void 0&&(l.next=rd),l.error===void 0&&(l.error=rd),l.complete===void 0&&(l.complete=rd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B1(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function rd(){}function nf(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const c=l-55296;s++,Z(s<r.length,"Surrogate pair missing trail surrogate.");const h=r.charCodeAt(s)-56320;l=65536+(c<<10)+h}l<128?e[t++]=l:l<2048?(e[t++]=l>>6|192,e[t++]=l&63|128):l<65536?(e[t++]=l>>12|224,e[t++]=l>>6&63|128,e[t++]=l&63|128):(e[t++]=l>>18|240,e[t++]=l>>12&63|128,e[t++]=l>>6&63|128,e[t++]=l&63|128)}return e},fc=function(r){let e=0;for(let t=0;t<r.length;t++){const s=r.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(r){return r&&r._delegate?r._delegate:r}class pi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new dc;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:t});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),l=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(l)return null;throw c}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(G1(e))try{this.getOrInitializeService({instanceIdentifier:Wi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(e=Wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wi){return this.instances.has(e)}getOptions(e=Wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[c,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&h.resolve(l)}return l}onInit(e,t){var s;const l=this.normalizeInstanceIdentifier(t),c=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(l,c);const h=this.instances.get(l);return h&&e(h,l),()=>{c.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const l of s)try{l(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$1(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wi){return this.component?this.component.multipleInstances?e:Wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $1(r){return r===Wi?void 0:r}function G1(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new W1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ue||(Ue={}));const K1={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},Y1=Ue.INFO,Q1={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},X1=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=Q1[e];if(l)console[l](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pc{constructor(e){this.name=e,this._logLevel=Y1,this._logHandler=X1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?K1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const J1=(r,e)=>e.some(t=>r instanceof t);let Pg,Og;function Z1(){return Pg||(Pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ex(){return Og||(Og=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _v=new WeakMap,Ed=new WeakMap,wv=new WeakMap,id=new WeakMap,rf=new WeakMap;function tx(r){const e=new Promise((t,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",h)},c=()=>{t(ci(r.result)),l()},h=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&_v.set(t,r)}).catch(()=>{}),rf.set(e,r),e}function nx(r){if(Ed.has(r))return;const e=new Promise((t,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",h),r.removeEventListener("abort",h)},c=()=>{t(),l()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",h),r.addEventListener("abort",h)});Ed.set(r,e)}let Sd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ed.get(r);if(e==="objectStoreNames")return r.objectStoreNames||wv.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ci(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function rx(r){Sd=r(Sd)}function ix(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(sd(this),e,...t);return wv.set(s,e.sort?e.sort():[e]),ci(s)}:ex().includes(r)?function(...e){return r.apply(sd(this),e),ci(_v.get(this))}:function(...e){return ci(r.apply(sd(this),e))}}function sx(r){return typeof r=="function"?ix(r):(r instanceof IDBTransaction&&nx(r),J1(r,Z1())?new Proxy(r,Sd):r)}function ci(r){if(r instanceof IDBRequest)return tx(r);if(id.has(r))return id.get(r);const e=sx(r);return e!==r&&(id.set(r,e),rf.set(e,r)),e}const sd=r=>rf.get(r);function ox(r,e,{blocked:t,upgrade:s,blocking:l,terminated:c}={}){const h=indexedDB.open(r,e),m=ci(h);return s&&h.addEventListener("upgradeneeded",v=>{s(ci(h.result),v.oldVersion,v.newVersion,ci(h.transaction),v)}),t&&h.addEventListener("blocked",v=>t(v.oldVersion,v.newVersion,v)),m.then(v=>{c&&v.addEventListener("close",()=>c()),l&&v.addEventListener("versionchange",w=>l(w.oldVersion,w.newVersion,w))}).catch(()=>{}),m}const lx=["get","getKey","getAll","getAllKeys","count"],ax=["put","add","delete","clear"],od=new Map;function Dg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(od.get(e))return od.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,l=ax.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(l||lx.includes(t)))return;const c=async function(h,...m){const v=this.transaction(h,l?"readwrite":"readonly");let w=v.store;return s&&(w=w.index(m.shift())),(await Promise.all([w[t](...m),l&&v.done]))[0]};return od.set(e,c),c}rx(r=>({...r,get:(e,t,s)=>Dg(e,t)||r.get(e,t,s),has:(e,t)=>!!Dg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cx(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function cx(r){const e=r.getComponent();return e?.type==="VERSION"}const kd="@firebase/app",jg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new pc("@firebase/app"),hx="@firebase/app-compat",dx="@firebase/analytics-compat",fx="@firebase/analytics",px="@firebase/app-check-compat",mx="@firebase/app-check",gx="@firebase/auth",yx="@firebase/auth-compat",vx="@firebase/database",_x="@firebase/data-connect",wx="@firebase/database-compat",xx="@firebase/functions",Ex="@firebase/functions-compat",Sx="@firebase/installations",kx="@firebase/installations-compat",Cx="@firebase/messaging",Tx="@firebase/messaging-compat",Ix="@firebase/performance",Nx="@firebase/performance-compat",bx="@firebase/remote-config",Rx="@firebase/remote-config-compat",Ax="@firebase/storage",Px="@firebase/storage-compat",Ox="@firebase/firestore",Dx="@firebase/ai",jx="@firebase/firestore-compat",Lx="firebase",Mx="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="[DEFAULT]",Fx={[kd]:"fire-core",[hx]:"fire-core-compat",[fx]:"fire-analytics",[dx]:"fire-analytics-compat",[mx]:"fire-app-check",[px]:"fire-app-check-compat",[gx]:"fire-auth",[yx]:"fire-auth-compat",[vx]:"fire-rtdb",[_x]:"fire-data-connect",[wx]:"fire-rtdb-compat",[xx]:"fire-fn",[Ex]:"fire-fn-compat",[Sx]:"fire-iid",[kx]:"fire-iid-compat",[Cx]:"fire-fcm",[Tx]:"fire-fcm-compat",[Ix]:"fire-perf",[Nx]:"fire-perf-compat",[bx]:"fire-rc",[Rx]:"fire-rc-compat",[Ax]:"fire-gcs",[Px]:"fire-gcs-compat",[Ox]:"fire-fst",[jx]:"fire-fst-compat",[Dx]:"fire-vertex","fire-js":"fire-js",[Lx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Map,Ux=new Map,Td=new Map;function Lg(r,e){try{r.container.addComponent(e)}catch(t){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function es(r){const e=r.name;if(Td.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;Td.set(e,r);for(const t of Wu.values())Lg(t,r);for(const t of Ux.values())Lg(t,r);return!0}function mc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Pn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hi=new ea("app","Firebase",zx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=Mx;function xv(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Cd,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw hi.create("bad-app-name",{appName:String(l)});if(t||(t=pv()),!t)throw hi.create("no-options");const c=Wu.get(l);if(c){if(fi(t,c.options)&&fi(s,c.config))return c;throw hi.create("duplicate-app",{appName:l})}const h=new q1(l);for(const v of Td.values())h.addComponent(v);const m=new Vx(t,s,h);return Wu.set(l,m),m}function sf(r=Cd){const e=Wu.get(r);if(!e&&r===Cd&&pv())return xv();if(!e)throw hi.create("no-app",{appName:r});return e}function Jn(r,e,t){var s;let l=(s=Fx[r])!==null&&s!==void 0?s:r;t&&(l+=`-${t}`);const c=l.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const m=[`Unable to register library "${l}" with version "${e}":`];c&&m.push(`library name "${l}" contains illegal characters (whitespace or "/")`),c&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(m.join(" "));return}es(new pi(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx="firebase-heartbeat-database",Hx=1,Bl="firebase-heartbeat-store";let ld=null;function Ev(){return ld||(ld=ox(Bx,Hx,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Bl)}catch(t){console.warn(t)}}}}).catch(r=>{throw hi.create("idb-open",{originalErrorMessage:r.message})})),ld}async function Wx(r){try{const t=(await Ev()).transaction(Bl),s=await t.objectStore(Bl).get(Sv(r));return await t.done,s}catch(e){if(e instanceof Pr)Ir.warn(e.message);else{const t=hi.create("idb-get",{originalErrorMessage:e?.message});Ir.warn(t.message)}}}async function Mg(r,e){try{const s=(await Ev()).transaction(Bl,"readwrite");await s.objectStore(Bl).put(e,Sv(r)),await s.done}catch(t){if(t instanceof Pr)Ir.warn(t.message);else{const s=hi.create("idb-set",{originalErrorMessage:t?.message});Ir.warn(s.message)}}}function Sv(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=1024,Gx=30;class qx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yx(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Fg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>Gx){const h=Qx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ir.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fg(),{heartbeatsToSend:s,unsentEntries:l}=Kx(this._heartbeatsCache.heartbeats),c=Vu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(t){return Ir.warn(t),""}}}function Fg(){return new Date().toISOString().substring(0,10)}function Kx(r,e=$x){const t=[];let s=r.slice();for(const l of r){const c=t.find(h=>h.agent===l.agent);if(c){if(c.dates.push(l.date),Ug(t)>e){c.dates.pop();break}}else if(t.push({agent:l.agent,dates:[l.date]}),Ug(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Yx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P1()?O1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Wx(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const l=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const l=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Ug(r){return Vu(JSON.stringify({version:2,heartbeats:r})).length}function Qx(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(r){es(new pi("platform-logger",e=>new ux(e),"PRIVATE")),es(new pi("heartbeat",e=>new qx(e),"PRIVATE")),Jn(kd,jg,r),Jn(kd,jg,"esm2017"),Jn("fire-js","")}Xx("");var zg={};const Vg="@firebase/database",Bg="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kv="";function Jx(r){kv=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),St(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Vl(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return tr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Zx(e)}}catch{}return new eE},Ki=Cv("localStorage"),tE=Cv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new pc("@firebase/database"),nE=function(){let r=1;return function(){return r++}}(),Tv=function(r){const e=H1(r),t=new U1;t.update(e);const s=t.digest();return Xd.encodeByteArray(s)},ta=function(...r){let e="";for(let t=0;t<r.length;t++){const s=r[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ta.apply(null,s):typeof s=="object"?e+=St(s):e+=s,e+=" "}return e};let Pl=null,Hg=!0;const rE=function(r,e){Z(!0,"Can't turn on custom loggers persistently."),lo.logLevel=Ue.VERBOSE,Pl=lo.log.bind(lo)},bt=function(...r){if(Hg===!0&&(Hg=!1,Pl===null&&tE.get("logging_enabled")===!0&&rE()),Pl){const e=ta.apply(null,r);Pl(e)}},na=function(r){return function(...e){bt(r,...e)}},Id=function(...r){const e="FIREBASE INTERNAL ERROR: "+ta(...r);lo.error(e)},Nr=function(...r){const e=`FIREBASE FATAL ERROR: ${ta(...r)}`;throw lo.error(e),new Error(e)},Jt=function(...r){const e="FIREBASE WARNING: "+ta(...r);lo.warn(e)},iE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},of=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},sE=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},go="[MIN_NAME]",ts="[MAX_NAME]",us=function(r,e){if(r===e)return 0;if(r===go||e===ts)return-1;if(e===go||r===ts)return 1;{const t=Wg(r),s=Wg(e);return t!==null?s!==null?t-s===0?r.length-e.length:t-s:-1:s!==null?1:r<e?-1:1}},oE=function(r,e){return r===e?0:r<e?-1:1},Tl=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+St(e))},lf=function(r){if(typeof r!="object"||r===null)return St(r);const e=[];for(const s in r)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=St(e[s]),t+=":",t+=lf(r[e[s]]);return t+="}",t},Iv=function(r,e){const t=r.length;if(t<=e)return[r];const s=[];for(let l=0;l<t;l+=e)l+e>t?s.push(r.substring(l,t)):s.push(r.substring(l,l+e));return s};function At(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const Nv=function(r){Z(!of(r),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let l,c,h,m,v;r===0?(c=0,h=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(m=Math.min(Math.floor(Math.log(r)/Math.LN2),s),c=m+s,h=Math.round(r*Math.pow(2,t-m)-Math.pow(2,t))):(c=0,h=Math.round(r/Math.pow(2,1-s-t))));const w=[];for(v=t;v;v-=1)w.push(h%2?1:0),h=Math.floor(h/2);for(v=e;v;v-=1)w.push(c%2?1:0),c=Math.floor(c/2);w.push(l?1:0),w.reverse();const k=w.join("");let E="";for(v=0;v<64;v+=8){let S=parseInt(k.substr(v,8),2).toString(16);S.length===1&&(S="0"+S),E=E+S}return E.toLowerCase()},lE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},aE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uE(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+t);return s.code=r.toUpperCase(),s}const cE=new RegExp("^-?(0*)\\d{1,10}$"),hE=-2147483648,dE=2147483647,Wg=function(r){if(cE.test(r)){const e=Number(r);if(e>=hE&&e<=dE)return e}return null},ko=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Jt("Exception was thrown by user callback.",t),e},Math.floor(0))}},fE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ol=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Pn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Jt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Jt(e)}}class Pu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="5",bv="v",Rv="s",Av="r",Pv="f",Ov=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dv="ls",jv="p",Nd="ac",Lv="websocket",Mv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,t,s,l,c=!1,h="",m=!1,v=!1,w=null){this.secure=t,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=m,this.isUsingEmulator=v,this.emulatorOptions=w,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ki.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ki.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function gE(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Uv(r,e,t){Z(typeof e=="string","typeof type must == string"),Z(typeof t=="object","typeof params must == object");let s;if(e===Lv)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===Mv)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gE(r)&&(t.ns=r.namespace);const l=[];return At(t,(c,h)=>{l.push(c+"="+h)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(){this.counters_={}}incrementCounter(e,t=1){tr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return w1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad={},ud={};function uf(r){const e=r.toString();return ad[e]||(ad[e]=new yE),ad[e]}function vE(r,e){const t=r.toString();return ud[t]||(ud[t]=e()),ud[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&ko(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="start",wE="close",xE="pLPCommand",EE="pRTLPCB",zv="id",Vv="pw",Bv="ser",SE="cb",kE="seg",CE="ts",TE="d",IE="dframe",Hv=1870,Wv=30,NE=Hv-Wv,bE=25e3,RE=3e4;class io{constructor(e,t,s,l,c,h,m){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.transportSessionId=h,this.lastSessionId=m,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=na(e),this.stats_=uf(t),this.urlFn=v=>(this.appCheckToken&&(v[Nd]=this.appCheckToken),Uv(t,Mv,v))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _E(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(RE)),sE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cf((...c)=>{const[h,m,v,w,k]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===$g)this.id=m,this.password=v;else if(h===wE)m?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(m,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,m]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,m)},()=>{this.onClosed_()},this.urlFn);const s={};s[$g]="t",s[Bv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[SE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[bv]=af,this.transportSessionId&&(s[Rv]=this.transportSessionId),this.lastSessionId&&(s[Dv]=this.lastSessionId),this.applicationId&&(s[jv]=this.applicationId),this.appCheckToken&&(s[Nd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ov.test(location.hostname)&&(s[Av]=Pv);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){io.forceAllow_=!0}static forceDisallow(){io.forceDisallow_=!0}static isAvailable(){return io.forceAllow_?!0:!io.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lE()&&!aE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=St(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=cv(t),l=Iv(s,NE);for(let c=0;c<l.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[c]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[IE]="t",s[zv]=e,s[Vv]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=St(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class cf{constructor(e,t,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nE(),window[xE+this.uniqueCallbackIdentifier]=e,window[EE+this.uniqueCallbackIdentifier]=t,this.myIFrame=cf.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(m){bt("frame writing exception"),m.stack&&bt(m.stack),bt(m)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||bt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zv]=this.myID,e[Vv]=this.myPW,e[Bv]=this.currentSerial;let t=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wv+s.length<=Hv;){const h=this.pendingSegs.shift();s=s+"&"+kE+l+"="+h.seg+"&"+CE+l+"="+h.ts+"&"+TE+l+"="+h.d,l++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},l=setTimeout(s,Math.floor(bE)),c=()=>{clearTimeout(l),s()};this.addTag(e,c)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=16384,PE=45e3;let $u=null;typeof MozWebSocket<"u"?$u=MozWebSocket:typeof WebSocket<"u"&&($u=WebSocket);class On{constructor(e,t,s,l,c,h,m){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=na(this.connId),this.stats_=uf(t),this.connURL=On.connectionURL_(t,h,m,l,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,l,c){const h={};return h[bv]=af,typeof location<"u"&&location.hostname&&Ov.test(location.hostname)&&(h[Av]=Pv),t&&(h[Rv]=t),s&&(h[Dv]=s),l&&(h[Nd]=l),c&&(h[jv]=c),Uv(e,Lv,h)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ki.set("previous_websocket_failure",!0);try{let s;A1(),this.mySock=new $u(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){On.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&$u!==null&&!On.forceDisallow_}static previouslyFailed(){return Ki.isInMemoryStorage||Ki.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ki.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Vl(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Z(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=St(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Iv(t,AE);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(PE))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}On.responsesRequiredToBeHealthy=2;On.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{static get ALL_TRANSPORTS(){return[io,On]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=On&&On.isAvailable();let s=t&&!On.previouslyFailed();if(e.webSocketOnly&&(t||Jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[On];else{const l=this.transports_=[];for(const c of Hl.ALL_TRANSPORTS)c&&c.isAvailable()&&l.push(c);Hl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=6e4,DE=5e3,jE=10*1024,LE=100*1024,cd="t",Gg="d",ME="s",qg="r",FE="e",Kg="o",Yg="a",Qg="n",Xg="p",UE="h";class zE{constructor(e,t,s,l,c,h,m,v,w,k){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=c,this.onMessage_=h,this.onReady_=m,this.onDisconnect_=v,this.onKill_=w,this.lastSessionId=k,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=na("c:"+this.id+":"),this.transportManager_=new Hl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Ol(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>LE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cd in e){const t=e[cd];t===Yg?this.upgradeIfSecondaryHealthy_():t===qg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Kg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Tl("t",e),s=Tl("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Tl("t",e),s=Tl("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Tl(cd,e);if(Gg in e){const s=e[Gg];if(t===UE){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(t===Qg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===ME?this.onConnectionShutdown_(s):t===qg?this.onReset_(s):t===FE?Id("Server Error: "+s):t===Kg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Id("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),af!==s&&Jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ol(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(OE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ol(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(DE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ki.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{put(e,t,s,l){}merge(e,t,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.allowedEvents_=e,this.listeners_={},Z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const l=this.getInitialEvent(e);l&&t.apply(s,l)}off(e,t,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let c=0;c<l.length;c++)if(l[c].callback===t&&(!s||s===l[c].context)){l.splice(c,1);return}}validateEventType_(e){Z(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends Gv{static getInstance(){return new Gu}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=32,Zg=768;class Be{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ze(){return new Be("")}function Te(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function mi(r){return r.pieces_.length-r.pieceNum_}function Ye(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Be(r.pieces_,e)}function hf(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function VE(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function Wl(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function qv(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new Be(e,0)}function it(r,e){const t=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)t.push(r.pieces_[s]);if(e instanceof Be)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&t.push(s[l])}return new Be(t,0)}function Ie(r){return r.pieceNum_>=r.pieces_.length}function Qt(r,e){const t=Te(r),s=Te(e);if(t===null)return e;if(t===s)return Qt(Ye(r),Ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function BE(r,e){const t=Wl(r,0),s=Wl(e,0);for(let l=0;l<t.length&&l<s.length;l++){const c=us(t[l],s[l]);if(c!==0)return c}return t.length===s.length?0:t.length<s.length?-1:1}function df(r,e){if(mi(r)!==mi(e))return!1;for(let t=r.pieceNum_,s=e.pieceNum_;t<=r.pieces_.length;t++,s++)if(r.pieces_[t]!==e.pieces_[s])return!1;return!0}function mn(r,e){let t=r.pieceNum_,s=e.pieceNum_;if(mi(r)>mi(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class HE{constructor(e,t){this.errorPrefix_=t,this.parts_=Wl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=fc(this.parts_[s]);Kv(this)}}function WE(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=fc(e),Kv(r)}function $E(r){const e=r.parts_.pop();r.byteLength_-=fc(e),r.parts_.length>0&&(r.byteLength_-=1)}function Kv(r){if(r.byteLength_>Zg)throw new Error(r.errorPrefix_+"has a key path longer than "+Zg+" bytes ("+r.byteLength_+").");if(r.parts_.length>Jg)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jg+") or object contains a cycle "+$i(r))}function $i(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff extends Gv{static getInstance(){return new ff}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return Z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=1e3,GE=60*5*1e3,ey=30*1e3,qE=1.3,KE=3e4,YE="server_kill",ty=3;class Tr extends $v{constructor(e,t,s,l,c,h,m,v){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=m,this.authOverride_=v,this.id=Tr.nextPersistentConnectionId_++,this.log_=na("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Il,this.maxReconnectDelay_=GE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,v)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ff.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Gu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const l=++this.requestNumber_,c={r:l,a:e,b:t};this.log_(St(c)),Z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const t=new dc,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const m=h.d;h.s==="ok"?t.resolve(m):t.reject(m)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),t.promise}listen(e,t,s,l){this.initConnection_();const c=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Z(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const m={onComplete:l,hashFn:t,query:e,tag:s};this.listens.get(h).set(c,m),this.connected_&&this.sendListen_(m)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),l=t._queryIdentifier;this.log_("Listen on "+s+" for "+l);const c={p:s},h="q";e.tag&&(c.q=t._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(h,c,m=>{const v=m.d,w=m.s;Tr.warnOnListenWarnings_(v,t),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",m),w!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(w,v))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&tr(e,"w")){const s=mo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+t._queryParams.getIndex().toString()+'"',c=t._path.toString();Jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||F1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ey)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=M1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,l=>{const c=l.s,h=l.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,t)}sendUnlisten_(e,t,s,l){this.log_("Unlisten on "+e+" for "+t);const c={p:e},h="n";l&&(c.q=s,c.t=l),this.sendRequest(h,c)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,l){const c={p:t,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,h=>{l&&setTimeout(()=>{l(h.s,h.d)},Math.floor(0))})}put(e,t,s,l){this.putInternal("p",e,t,s,l)}merge(e,t,s,l){this.putInternal("m",e,t,s,l)}putInternal(e,t,s,l,c){this.initConnection_();const h={p:t,d:s};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:e,request:h,onComplete:l}),this.outstandingPutCount_++;const m=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(m):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,c=>{this.log_(t+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(c.s,c.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+St(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Id("Unrecognized action received from server: "+St(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Il,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Il,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>KE&&(this.reconnectDelay_=Il),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Tr.nextConnectionId_++,c=this.lastSessionId;let h=!1,m=null;const v=function(){m?m.close():(h=!0,s())},w=function(E){Z(m,"sendRequest call when we're not connected not allowed."),m.sendRequest(E)};this.realtime_={close:v,sendRequest:w};const k=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,S]=await Promise.all([this.authTokenProvider_.getToken(k),this.appCheckTokenProvider_.getToken(k)]);h?bt("getToken() completed but was canceled"):(bt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=S&&S.token,m=new zE(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,U=>{Jt(U+" ("+this.repoInfo_.toString()+")"),this.interrupt(YE)},c))}catch(E){this.log_("Failed to get token: "+E),h||(this.repoInfo_.nodeAdmin&&Jt(E),v())}}}interrupt(e){bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xd(this.interruptReasons_)&&(this.reconnectDelay_=Il,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(c=>lf(c)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,t){const s=new Be(e).toString();let l;if(this.listens.has(s)){const c=this.listens.get(s);l=c.get(t),c.delete(t),c.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,t){bt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ty&&(this.reconnectDelay_=ey,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){bt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ty&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+kv.replace(/\./g,"-")]=1,tf()?e["framework.cordova"]=1:yv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gu.getInstance().currentlyOnline();return xd(this.interruptReasons_)&&e}}Tr.nextPersistentConnectionId_=0;Tr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ce(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ce(go,e),l=new Ce(go,t);return this.compare(s,l)!==0}minPost(){return Ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu;class Yv extends gc{static get __EMPTY_NODE(){return Cu}static set __EMPTY_NODE(e){Cu=e}compare(e,t){return us(e.name,t.name)}isDefinedOn(e){throw Eo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ce.MIN}maxPost(){return new Ce(ts,Cu)}makePost(e,t){return Z(typeof e=="string","KeyIndex indexValue must always be a string."),new Ce(e,Cu)}toString(){return".key"}}const ao=new Yv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,t,s,l,c=null){this.isReverse_=l,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=t?s(e.key,t):1,l&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Et{constructor(e,t,s,l,c){this.key=e,this.value=t,this.color=s??Et.RED,this.left=l??Xt.EMPTY_NODE,this.right=c??Xt.EMPTY_NODE}copy(e,t,s,l,c){return new Et(e??this.key,t??this.value,s??this.color,l??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let l=this;const c=s(e,l.key);return c<0?l=l.copy(null,null,null,l.left.insert(e,t,s),null):c===0?l=l.copy(null,t,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,t,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,l;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Xt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Et.RED=!0;Et.BLACK=!1;class QE{copy(e,t,s,l,c){return this}insert(e,t,s){return new Et(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xt{constructor(e,t=Xt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Xt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Et.BLACK,null,null))}remove(e){return new Xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Et.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,l=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Tu(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Tu(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Tu(this.root_,null,this.comparator_,!0,e)}}Xt.EMPTY_NODE=new QE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(r,e){return us(r.name,e.name)}function pf(r,e){return us(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bd;function JE(r){bd=r}const Qv=function(r){return typeof r=="number"?"number:"+Nv(r):"string:"+r},Xv=function(r){if(r.isLeafNode()){const e=r.val();Z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tr(e,".sv"),"Priority must be a string or number.")}else Z(r===bd||r.isEmpty(),"priority of unexpected type.");Z(r===bd||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ny;class xt{static set __childrenNodeConstructor(e){ny=e}static get __childrenNodeConstructor(){return ny}constructor(e,t=xt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ie(e)?this:Te(e)===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:xt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Te(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(Z(s!==".priority"||mi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,xt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ye(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Nv(this.value_):e+=this.value_,this.lazyHash_=Tv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xt.__childrenNodeConstructor?-1:(Z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,l=xt.VALUE_TYPE_ORDER.indexOf(t),c=xt.VALUE_TYPE_ORDER.indexOf(s);return Z(l>=0,"Unknown leaf type: "+t),Z(c>=0,"Unknown leaf type: "+s),l===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}xt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jv,Zv;function ZE(r){Jv=r}function eS(r){Zv=r}class tS extends gc{compare(e,t){const s=e.node.getPriority(),l=t.node.getPriority(),c=s.compareTo(l);return c===0?us(e.name,t.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ce.MIN}maxPost(){return new Ce(ts,new xt("[PRIORITY-POST]",Zv))}makePost(e,t){const s=Jv(e);return new Ce(t,new xt("[PRIORITY-POST]",s))}toString(){return".priority"}}const st=new tS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=Math.log(2);class rS{constructor(e){const t=c=>parseInt(Math.log(c)/nS,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qu=function(r,e,t,s){r.sort(e);const l=function(v,w){const k=w-v;let E,S;if(k===0)return null;if(k===1)return E=r[v],S=t?t(E):E,new Et(S,E.node,Et.BLACK,null,null);{const U=parseInt(k/2,10)+v,B=l(v,U),G=l(U+1,w);return E=r[U],S=t?t(E):E,new Et(S,E.node,Et.BLACK,B,G)}},c=function(v){let w=null,k=null,E=r.length;const S=function(B,G){const $=E-B,de=E;E-=B;const q=l($+1,de),ce=r[$],he=t?t(ce):ce;U(new Et(he,ce.node,G,null,q))},U=function(B){w?(w.left=B,w=B):(k=B,w=B)};for(let B=0;B<v.count;++B){const G=v.nextBitIsOne(),$=Math.pow(2,v.count-(B+1));G?S($,Et.BLACK):(S($,Et.BLACK),S($,Et.RED))}return k},h=new rS(r.length),m=c(h);return new Xt(s||e,m)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hd;const no={};class Sr{static get Default(){return Z(no&&st,"ChildrenNode.ts has not been loaded"),hd=hd||new Sr({".priority":no},{".priority":st}),hd}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=mo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Xt?t:null}hasIndex(e){return tr(this.indexSet_,e.toString())}addIndex(e,t){Z(e!==ao,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const c=t.getIterator(Ce.Wrap);let h=c.getNext();for(;h;)l=l||e.isDefinedOn(h.node),s.push(h),h=c.getNext();let m;l?m=qu(s,e.getCompare()):m=no;const v=e.toString(),w=Object.assign({},this.indexSet_);w[v]=e;const k=Object.assign({},this.indexes_);return k[v]=m,new Sr(k,w)}addToIndexes(e,t){const s=Hu(this.indexes_,(l,c)=>{const h=mo(this.indexSet_,c);if(Z(h,"Missing index implementation for "+c),l===no)if(h.isDefinedOn(e.node)){const m=[],v=t.getIterator(Ce.Wrap);let w=v.getNext();for(;w;)w.name!==e.name&&m.push(w),w=v.getNext();return m.push(e),qu(m,h.getCompare())}else return no;else{const m=t.get(e.name);let v=l;return m&&(v=v.remove(new Ce(e.name,m))),v.insert(e,e.node)}});return new Sr(s,this.indexSet_)}removeFromIndexes(e,t){const s=Hu(this.indexes_,l=>{if(l===no)return l;{const c=t.get(e.name);return c?l.remove(new Ce(e.name,c)):l}});return new Sr(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl;class ye{static get EMPTY_NODE(){return Nl||(Nl=new ye(new Xt(pf),null,Sr.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Xv(this.priorityNode_),this.children_.isEmpty()&&Z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Nl}updatePriority(e){return this.children_.isEmpty()?this:new ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Nl:t}}getChild(e){const t=Te(e);return t===null?this:this.getImmediateChild(t).getChild(Ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Z(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ce(e,t);let l,c;t.isEmpty()?(l=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,t),c=this.indexMap_.addToIndexes(s,this.children_));const h=l.isEmpty()?Nl:this.priorityNode_;return new ye(l,h,c)}}updateChild(e,t){const s=Te(e);if(s===null)return t;{Z(Te(e)!==".priority"||mi(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ye(e),t);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,l=0,c=!0;if(this.forEachChild(st,(h,m)=>{t[h]=m.val(e),s++,c&&ye.INTEGER_REGEXP_.test(h)?l=Math.max(l,Number(h)):c=!1}),!e&&c&&l<2*s){const h=[];for(const m in t)h[m]=t[m];return h}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qv(this.getPriority().val())+":"),this.forEachChild(st,(t,s)=>{const l=s.hash();l!==""&&(e+=":"+t+":"+l)}),this.lazyHash_=e===""?"":Tv(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const l=this.resolveIndex_(s);if(l){const c=l.getPredecessorKey(new Ce(e,t));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ce(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ce(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>t(l.name,l.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,Ce.Wrap);let c=l.peek();for(;c!=null&&t.compare(c,e)<0;)l.getNext(),c=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,Ce.Wrap);let c=l.peek();for(;c!=null&&t.compare(c,e)>0;)l.getNext(),c=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ra?-1:0}withIndex(e){if(e===ao||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ye(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ao||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(st),l=t.getIterator(st);let c=s.getNext(),h=l.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=s.getNext(),h=l.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===ao?null:this.indexMap_.get(e.toString())}}ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iS extends ye{constructor(){super(new Xt(pf),ye.EMPTY_NODE,Sr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ye.EMPTY_NODE}isEmpty(){return!1}}const ra=new iS;Object.defineProperties(Ce,{MIN:{value:new Ce(go,ye.EMPTY_NODE)},MAX:{value:new Ce(ts,ra)}});Yv.__EMPTY_NODE=ye.EMPTY_NODE;xt.__childrenNodeConstructor=ye;JE(ra);eS(ra);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=!0;function Rt(r,e=null){if(r===null)return ye.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),Z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new xt(t,Rt(e))}if(!(r instanceof Array)&&sS){const t=[];let s=!1;if(At(r,(h,m)=>{if(h.substring(0,1)!=="."){const v=Rt(m);v.isEmpty()||(s=s||!v.getPriority().isEmpty(),t.push(new Ce(h,v)))}}),t.length===0)return ye.EMPTY_NODE;const c=qu(t,XE,h=>h.name,pf);if(s){const h=qu(t,st.getCompare());return new ye(c,Rt(e),new Sr({".priority":h},{".priority":st}))}else return new ye(c,Rt(e),Sr.Default)}else{let t=ye.EMPTY_NODE;return At(r,(s,l)=>{if(tr(r,s)&&s.substring(0,1)!=="."){const c=Rt(l);(c.isLeafNode()||!c.isEmpty())&&(t=t.updateImmediateChild(s,c))}}),t.updatePriority(Rt(e))}}ZE(Rt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS extends gc{constructor(e){super(),this.indexPath_=e,Z(!Ie(e)&&Te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),l=this.extractChild(t.node),c=s.compareTo(l);return c===0?us(e.name,t.name):c}makePost(e,t){const s=Rt(e),l=ye.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ce(t,l)}maxPost(){const e=ye.EMPTY_NODE.updateChild(this.indexPath_,ra);return new Ce(ts,e)}toString(){return Wl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS extends gc{compare(e,t){const s=e.node.compareTo(t.node);return s===0?us(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ce.MIN}maxPost(){return Ce.MAX}makePost(e,t){const s=Rt(e);return new Ce(t,s)}toString(){return".value"}}const aS=new lS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(r){return{type:"value",snapshotNode:r}}function yo(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function $l(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Gl(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function uS(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.index_=e}updateChild(e,t,s,l,c,h){Z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const m=e.getImmediateChild(t);return m.getChild(l).equals(s.getChild(l))&&m.isEmpty()===s.isEmpty()||(h!=null&&(s.isEmpty()?e.hasChild(t)?h.trackChildChange($l(t,m)):Z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):m.isEmpty()?h.trackChildChange(yo(t,s)):h.trackChildChange(Gl(t,s,m))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(st,(l,c)=>{t.hasChild(l)||s.trackChildChange($l(l,c))}),t.isLeafNode()||t.forEachChild(st,(l,c)=>{if(e.hasChild(l)){const h=e.getImmediateChild(l);h.equals(c)||s.trackChildChange(Gl(l,c,h))}else s.trackChildChange(yo(l,c))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ye.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.indexedFilter_=new mf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ql.getStartPost_(e),this.endPost_=ql.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,l,c,h){return this.matches(new Ce(t,s))||(s=ye.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,l,c,h)}updateFullNode(e,t,s){t.isLeafNode()&&(t=ye.EMPTY_NODE);let l=t.withIndex(this.index_);l=l.updatePriority(ye.EMPTY_NODE);const c=this;return t.forEachChild(st,(h,m)=>{c.matches(new Ce(h,m))||(l=l.updateImmediateChild(h,ye.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ql(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,l,c,h){return this.rangedFilter_.matches(new Ce(t,s))||(s=ye.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,l,c,h):this.fullLimitUpdateChild_(e,t,s,c,h)}updateFullNode(e,t,s){let l;if(t.isLeafNode()||t.isEmpty())l=ye.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){l=ye.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const m=c.getNext();if(this.withinDirectionalStart(m))if(this.withinDirectionalEnd(m))l=l.updateImmediateChild(m.name,m.node),h++;else break;else continue}}else{l=t.withIndex(this.index_),l=l.updatePriority(ye.EMPTY_NODE);let c;this.reverse_?c=l.getReverseIterator(this.index_):c=l.getIterator(this.index_);let h=0;for(;c.hasNext();){const m=c.getNext();h<this.limit_&&this.withinDirectionalStart(m)&&this.withinDirectionalEnd(m)?h++:l=l.updateImmediateChild(m.name,ye.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,l,c){let h;if(this.reverse_){const E=this.index_.getCompare();h=(S,U)=>E(U,S)}else h=this.index_.getCompare();const m=e;Z(m.numChildren()===this.limit_,"");const v=new Ce(t,s),w=this.reverse_?m.getFirstChild(this.index_):m.getLastChild(this.index_),k=this.rangedFilter_.matches(v);if(m.hasChild(t)){const E=m.getImmediateChild(t);let S=l.getChildAfterChild(this.index_,w,this.reverse_);for(;S!=null&&(S.name===t||m.hasChild(S.name));)S=l.getChildAfterChild(this.index_,S,this.reverse_);const U=S==null?1:h(S,v);if(k&&!s.isEmpty()&&U>=0)return c?.trackChildChange(Gl(t,s,E)),m.updateImmediateChild(t,s);{c?.trackChildChange($l(t,E));const G=m.updateImmediateChild(t,ye.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(c?.trackChildChange(yo(S.name,S.node)),G.updateImmediateChild(S.name,S.node)):G}}else return s.isEmpty()?e:k&&h(w,v)>=0?(c!=null&&(c.trackChildChange($l(w.name,w.node)),c.trackChildChange(yo(t,s))),m.updateImmediateChild(t,s).updateImmediateChild(w.name,ye.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=st}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:go}hasEnd(){return this.endSet_}getIndexEndValue(){return Z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ts}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===st}copy(){const e=new gf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hS(r){return r.loadsAllData()?new mf(r.getIndex()):r.hasLimit()?new cS(r):new ql(r)}function ry(r){const e={};if(r.isDefault())return e;let t;if(r.index_===st?t="$priority":r.index_===aS?t="$value":r.index_===ao?t="$key":(Z(r.index_ instanceof oS,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=St(t),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=St(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+St(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=St(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+St(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function iy(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==st&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends $v{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=na("p:rest:"),this.listens_={}}listen(e,t,s,l){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const h=Ku.getListenId_(e,s),m={};this.listens_[h]=m;const v=ry(e._queryParams);this.restRequest_(c+".json",v,(w,k)=>{let E=k;if(w===404&&(E=null,w=null),w===null&&this.onDataUpdate_(c,E,!1,s),mo(this.listens_,h)===m){let S;w?w===401?S="permission_denied":S="rest_error:"+w:S="ok",l(S,null)}})}unlisten(e,t){const s=Ku.getListenId_(e,t);delete this.listens_[s]}get(e){const t=ry(e._queryParams),s=e._path.toString(),l=new dc;return this.restRequest_(s+".json",t,(c,h)=>{let m=h;c===404&&(m=null,c=null),c===null?(this.onDataUpdate_(s,m,!1,null),l.resolve(m)):l.reject(new Error(m))}),l.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,c])=>{l&&l.accessToken&&(t.auth=l.accessToken),c&&c.token&&(t.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+So(t);this.log_("Sending REST request for "+h);const m=new XMLHttpRequest;m.onreadystatechange=()=>{if(s&&m.readyState===4){this.log_("REST Response for "+h+" received. status:",m.status,"response:",m.responseText);let v=null;if(m.status>=200&&m.status<300){try{v=Vl(m.responseText)}catch{Jt("Failed to parse JSON response for "+h+": "+m.responseText)}s(null,v)}else m.status!==401&&m.status!==404&&Jt("Got unsuccessful REST response for "+h+" Status: "+m.status),s(m.status);s=null}},m.open("GET",h,!0),m.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(){this.rootNode_=ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(){return{value:null,children:new Map}}function t_(r,e,t){if(Ie(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const s=Te(e);r.children.has(s)||r.children.set(s,Yu());const l=r.children.get(s);e=Ye(e),t_(l,e,t)}}function Rd(r,e,t){r.value!==null?t(e,r.value):fS(r,(s,l)=>{const c=new Be(e.toString()+"/"+s);Rd(l,c,t)})}function fS(r,e){r.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&At(this.last_,(s,l)=>{t[s]=t[s]-l}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=10*1e3,mS=30*1e3,gS=5*60*1e3;class yS{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new pS(e);const s=sy+(mS-sy)*Math.random();Ol(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;At(e,(l,c)=>{c>0&&tr(this.statsToReport_,l)&&(t[l]=c,s=!0)}),s&&this.server_.reportStats(t),Ol(this.reportStats_.bind(this),Math.floor(Math.random()*2*gS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dn||(Dn={}));function yf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _f(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Dn.ACK_USER_WRITE,this.source=yf()}operationForChild(e){if(Ie(this.path)){if(this.affectedTree.value!=null)return Z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Be(e));return new Qu(ze(),t,this.revert)}}else return Z(Te(this.path)===e,"operationForChild called for unrelated child."),new Qu(Ye(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t){this.source=e,this.path=t,this.type=Dn.LISTEN_COMPLETE}operationForChild(e){return Ie(this.path)?new Kl(this.source,ze()):new Kl(this.source,Ye(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Dn.OVERWRITE}operationForChild(e){return Ie(this.path)?new ns(this.source,ze(),this.snap.getImmediateChild(e)):new ns(this.source,Ye(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Dn.MERGE}operationForChild(e){if(Ie(this.path)){const t=this.children.subtree(new Be(e));return t.isEmpty()?null:t.value?new ns(this.source,ze(),t.value):new vo(this.source,ze(),t)}else return Z(Te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vo(this.source,Ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ie(e))return this.isFullyInitialized()&&!this.filtered_;const t=Te(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _S(r,e,t,s){const l=[],c=[];return e.forEach(h=>{h.type==="child_changed"&&r.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(uS(h.childName,h.snapshotNode))}),bl(r,l,"child_removed",e,s,t),bl(r,l,"child_added",e,s,t),bl(r,l,"child_moved",c,s,t),bl(r,l,"child_changed",e,s,t),bl(r,l,"value",e,s,t),l}function bl(r,e,t,s,l,c){const h=s.filter(m=>m.type===t);h.sort((m,v)=>xS(r,m,v)),h.forEach(m=>{const v=wS(r,m,c);l.forEach(w=>{w.respondsTo(m.type)&&e.push(w.createEvent(v,r.query_))})})}function wS(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function xS(r,e,t){if(e.childName==null||t.childName==null)throw Eo("Should only compare child_ events.");const s=new Ce(e.childName,e.snapshotNode),l=new Ce(t.childName,t.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(r,e){return{eventCache:r,serverCache:e}}function Dl(r,e,t,s){return yc(new rs(e,t,s),r.serverCache)}function n_(r,e,t,s){return yc(r.eventCache,new rs(e,t,s))}function Ad(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function is(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dd;const ES=()=>(dd||(dd=new Xt(oE)),dd);class Ke{static fromObject(e){let t=new Ke(null);return At(e,(s,l)=>{t=t.set(new Be(s),l)}),t}constructor(e,t=ES()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ze(),value:this.value};if(Ie(e))return null;{const s=Te(e),l=this.children.get(s);if(l!==null){const c=l.findRootMostMatchingPathAndValue(Ye(e),t);return c!=null?{path:it(new Be(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ie(e))return this;{const t=Te(e),s=this.children.get(t);return s!==null?s.subtree(Ye(e)):new Ke(null)}}set(e,t){if(Ie(e))return new Ke(t,this.children);{const s=Te(e),c=(this.children.get(s)||new Ke(null)).set(Ye(e),t),h=this.children.insert(s,c);return new Ke(this.value,h)}}remove(e){if(Ie(e))return this.children.isEmpty()?new Ke(null):new Ke(null,this.children);{const t=Te(e),s=this.children.get(t);if(s){const l=s.remove(Ye(e));let c;return l.isEmpty()?c=this.children.remove(t):c=this.children.insert(t,l),this.value===null&&c.isEmpty()?new Ke(null):new Ke(this.value,c)}else return this}}get(e){if(Ie(e))return this.value;{const t=Te(e),s=this.children.get(t);return s?s.get(Ye(e)):null}}setTree(e,t){if(Ie(e))return t;{const s=Te(e),c=(this.children.get(s)||new Ke(null)).setTree(Ye(e),t);let h;return c.isEmpty()?h=this.children.remove(s):h=this.children.insert(s,c),new Ke(this.value,h)}}fold(e){return this.fold_(ze(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((l,c)=>{s[l]=c.fold_(it(e,l),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ze(),t)}findOnPath_(e,t,s){const l=this.value?s(t,this.value):!1;if(l)return l;if(Ie(e))return null;{const c=Te(e),h=this.children.get(c);return h?h.findOnPath_(Ye(e),it(t,c),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ze(),t)}foreachOnPath_(e,t,s){if(Ie(e))return this;{this.value&&s(t,this.value);const l=Te(e),c=this.children.get(l);return c?c.foreachOnPath_(Ye(e),it(t,l),s):new Ke(null)}}foreach(e){this.foreach_(ze(),e)}foreach_(e,t){this.children.inorderTraversal((s,l)=>{l.foreach_(it(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.writeTree_=e}static empty(){return new Mn(new Ke(null))}}function jl(r,e,t){if(Ie(e))return new Mn(new Ke(t));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let c=s.value;const h=Qt(l,e);return c=c.updateChild(h,t),new Mn(r.writeTree_.set(l,c))}else{const l=new Ke(t),c=r.writeTree_.setTree(e,l);return new Mn(c)}}}function Pd(r,e,t){let s=r;return At(t,(l,c)=>{s=jl(s,it(e,l),c)}),s}function oy(r,e){if(Ie(e))return Mn.empty();{const t=r.writeTree_.setTree(e,new Ke(null));return new Mn(t)}}function Od(r,e){return cs(r,e)!=null}function cs(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(Qt(t.path,e)):null}function ly(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(st,(s,l)=>{e.push(new Ce(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new Ce(s,l.value))}),e}function di(r,e){if(Ie(e))return r;{const t=cs(r,e);return t!=null?new Mn(new Ke(t)):new Mn(r.writeTree_.subtree(e))}}function Dd(r){return r.writeTree_.isEmpty()}function _o(r,e){return r_(ze(),r.writeTree_,e)}function r_(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,c)=>{l===".priority"?(Z(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):t=r_(it(r,l),c,t)}),!t.getChild(r).isEmpty()&&s!==null&&(t=t.updateChild(it(r,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(r,e){return l_(e,r)}function SS(r,e,t,s,l){Z(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:t,writeId:s,visible:l}),l&&(r.visibleWrites=jl(r.visibleWrites,e,t)),r.lastWriteId=s}function kS(r,e,t,s){Z(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:t,writeId:s,visible:!0}),r.visibleWrites=Pd(r.visibleWrites,e,t),r.lastWriteId=s}function CS(r,e){for(let t=0;t<r.allWrites.length;t++){const s=r.allWrites[t];if(s.writeId===e)return s}return null}function TS(r,e){const t=r.allWrites.findIndex(m=>m.writeId===e);Z(t>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[t];r.allWrites.splice(t,1);let l=s.visible,c=!1,h=r.allWrites.length-1;for(;l&&h>=0;){const m=r.allWrites[h];m.visible&&(h>=t&&IS(m,s.path)?l=!1:mn(s.path,m.path)&&(c=!0)),h--}if(l){if(c)return NS(r),!0;if(s.snap)r.visibleWrites=oy(r.visibleWrites,s.path);else{const m=s.children;At(m,v=>{r.visibleWrites=oy(r.visibleWrites,it(s.path,v))})}return!0}else return!1}function IS(r,e){if(r.snap)return mn(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&mn(it(r.path,t),e))return!0;return!1}function NS(r){r.visibleWrites=i_(r.allWrites,bS,ze()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function bS(r){return r.visible}function i_(r,e,t){let s=Mn.empty();for(let l=0;l<r.length;++l){const c=r[l];if(e(c)){const h=c.path;let m;if(c.snap)mn(t,h)?(m=Qt(t,h),s=jl(s,m,c.snap)):mn(h,t)&&(m=Qt(h,t),s=jl(s,ze(),c.snap.getChild(m)));else if(c.children){if(mn(t,h))m=Qt(t,h),s=Pd(s,m,c.children);else if(mn(h,t))if(m=Qt(h,t),Ie(m))s=Pd(s,ze(),c.children);else{const v=mo(c.children,Te(m));if(v){const w=v.getChild(Ye(m));s=jl(s,ze(),w)}}}else throw Eo("WriteRecord should have .snap or .children")}}return s}function s_(r,e,t,s,l){if(!s&&!l){const c=cs(r.visibleWrites,e);if(c!=null)return c;{const h=di(r.visibleWrites,e);if(Dd(h))return t;if(t==null&&!Od(h,ze()))return null;{const m=t||ye.EMPTY_NODE;return _o(h,m)}}}else{const c=di(r.visibleWrites,e);if(!l&&Dd(c))return t;if(!l&&t==null&&!Od(c,ze()))return null;{const h=function(w){return(w.visible||l)&&(!s||!~s.indexOf(w.writeId))&&(mn(w.path,e)||mn(e,w.path))},m=i_(r.allWrites,h,e),v=t||ye.EMPTY_NODE;return _o(m,v)}}}function RS(r,e,t){let s=ye.EMPTY_NODE;const l=cs(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(st,(c,h)=>{s=s.updateImmediateChild(c,h)}),s;if(t){const c=di(r.visibleWrites,e);return t.forEachChild(st,(h,m)=>{const v=_o(di(c,new Be(h)),m);s=s.updateImmediateChild(h,v)}),ly(c).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}else{const c=di(r.visibleWrites,e);return ly(c).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}}function AS(r,e,t,s,l){Z(s||l,"Either existingEventSnap or existingServerSnap must exist");const c=it(e,t);if(Od(r.visibleWrites,c))return null;{const h=di(r.visibleWrites,c);return Dd(h)?l.getChild(t):_o(h,l.getChild(t))}}function PS(r,e,t,s){const l=it(e,t),c=cs(r.visibleWrites,l);if(c!=null)return c;if(s.isCompleteForChild(t)){const h=di(r.visibleWrites,l);return _o(h,s.getNode().getImmediateChild(t))}else return null}function OS(r,e){return cs(r.visibleWrites,e)}function DS(r,e,t,s,l,c,h){let m;const v=di(r.visibleWrites,e),w=cs(v,ze());if(w!=null)m=w;else if(t!=null)m=_o(v,t);else return[];if(m=m.withIndex(h),!m.isEmpty()&&!m.isLeafNode()){const k=[],E=h.getCompare(),S=c?m.getReverseIteratorFrom(s,h):m.getIteratorFrom(s,h);let U=S.getNext();for(;U&&k.length<l;)E(U,s)!==0&&k.push(U),U=S.getNext();return k}else return[]}function jS(){return{visibleWrites:Mn.empty(),allWrites:[],lastWriteId:-1}}function Xu(r,e,t,s){return s_(r.writeTree,r.treePath,e,t,s)}function xf(r,e){return RS(r.writeTree,r.treePath,e)}function ay(r,e,t,s){return AS(r.writeTree,r.treePath,e,t,s)}function Ju(r,e){return OS(r.writeTree,it(r.treePath,e))}function LS(r,e,t,s,l,c){return DS(r.writeTree,r.treePath,e,t,s,l,c)}function Ef(r,e,t){return PS(r.writeTree,r.treePath,e,t)}function o_(r,e){return l_(it(r.treePath,e),r.writeTree)}function l_(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;Z(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Z(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const c=l.type;if(t==="child_added"&&c==="child_removed")this.changeMap.set(s,Gl(s,e.snapshotNode,l.snapshotNode));else if(t==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&c==="child_changed")this.changeMap.set(s,$l(s,l.oldSnap));else if(t==="child_changed"&&c==="child_added")this.changeMap.set(s,yo(s,e.snapshotNode));else if(t==="child_changed"&&c==="child_changed")this.changeMap.set(s,Gl(s,e.snapshotNode,l.oldSnap));else throw Eo("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const a_=new FS;class Sf{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new rs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ef(this.writes_,e,s)}}getChildAfterChild(e,t,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:is(this.viewCache_),c=LS(this.writes_,l,t,1,s,e);return c.length===0?null:c[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(r){return{filter:r}}function zS(r,e){Z(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),Z(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function VS(r,e,t,s,l){const c=new MS;let h,m;if(t.type===Dn.OVERWRITE){const w=t;w.source.fromUser?h=jd(r,e,w.path,w.snap,s,l,c):(Z(w.source.fromServer,"Unknown source."),m=w.source.tagged||e.serverCache.isFiltered()&&!Ie(w.path),h=Zu(r,e,w.path,w.snap,s,l,m,c))}else if(t.type===Dn.MERGE){const w=t;w.source.fromUser?h=HS(r,e,w.path,w.children,s,l,c):(Z(w.source.fromServer,"Unknown source."),m=w.source.tagged||e.serverCache.isFiltered(),h=Ld(r,e,w.path,w.children,s,l,m,c))}else if(t.type===Dn.ACK_USER_WRITE){const w=t;w.revert?h=GS(r,e,w.path,s,l,c):h=WS(r,e,w.path,w.affectedTree,s,l,c)}else if(t.type===Dn.LISTEN_COMPLETE)h=$S(r,e,t.path,s,c);else throw Eo("Unknown operation type: "+t.type);const v=c.getChanges();return BS(e,h,v),{viewCache:h,changes:v}}function BS(r,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=Ad(r);(t.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&t.push(e_(Ad(e)))}}function u_(r,e,t,s,l,c){const h=e.eventCache;if(Ju(s,t)!=null)return e;{let m,v;if(Ie(t))if(Z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const w=is(e),k=w instanceof ye?w:ye.EMPTY_NODE,E=xf(s,k);m=r.filter.updateFullNode(e.eventCache.getNode(),E,c)}else{const w=Xu(s,is(e));m=r.filter.updateFullNode(e.eventCache.getNode(),w,c)}else{const w=Te(t);if(w===".priority"){Z(mi(t)===1,"Can't have a priority with additional path components");const k=h.getNode();v=e.serverCache.getNode();const E=ay(s,t,k,v);E!=null?m=r.filter.updatePriority(k,E):m=h.getNode()}else{const k=Ye(t);let E;if(h.isCompleteForChild(w)){v=e.serverCache.getNode();const S=ay(s,t,h.getNode(),v);S!=null?E=h.getNode().getImmediateChild(w).updateChild(k,S):E=h.getNode().getImmediateChild(w)}else E=Ef(s,w,e.serverCache);E!=null?m=r.filter.updateChild(h.getNode(),w,E,k,l,c):m=h.getNode()}}return Dl(e,m,h.isFullyInitialized()||Ie(t),r.filter.filtersNodes())}}function Zu(r,e,t,s,l,c,h,m){const v=e.serverCache;let w;const k=h?r.filter:r.filter.getIndexedFilter();if(Ie(t))w=k.updateFullNode(v.getNode(),s,null);else if(k.filtersNodes()&&!v.isFiltered()){const U=v.getNode().updateChild(t,s);w=k.updateFullNode(v.getNode(),U,null)}else{const U=Te(t);if(!v.isCompleteForPath(t)&&mi(t)>1)return e;const B=Ye(t),$=v.getNode().getImmediateChild(U).updateChild(B,s);U===".priority"?w=k.updatePriority(v.getNode(),$):w=k.updateChild(v.getNode(),U,$,B,a_,null)}const E=n_(e,w,v.isFullyInitialized()||Ie(t),k.filtersNodes()),S=new Sf(l,E,c);return u_(r,E,t,l,S,m)}function jd(r,e,t,s,l,c,h){const m=e.eventCache;let v,w;const k=new Sf(l,e,c);if(Ie(t))w=r.filter.updateFullNode(e.eventCache.getNode(),s,h),v=Dl(e,w,!0,r.filter.filtersNodes());else{const E=Te(t);if(E===".priority")w=r.filter.updatePriority(e.eventCache.getNode(),s),v=Dl(e,w,m.isFullyInitialized(),m.isFiltered());else{const S=Ye(t),U=m.getNode().getImmediateChild(E);let B;if(Ie(S))B=s;else{const G=k.getCompleteChild(E);G!=null?hf(S)===".priority"&&G.getChild(qv(S)).isEmpty()?B=G:B=G.updateChild(S,s):B=ye.EMPTY_NODE}if(U.equals(B))v=e;else{const G=r.filter.updateChild(m.getNode(),E,B,S,k,h);v=Dl(e,G,m.isFullyInitialized(),r.filter.filtersNodes())}}}return v}function uy(r,e){return r.eventCache.isCompleteForChild(e)}function HS(r,e,t,s,l,c,h){let m=e;return s.foreach((v,w)=>{const k=it(t,v);uy(e,Te(k))&&(m=jd(r,m,k,w,l,c,h))}),s.foreach((v,w)=>{const k=it(t,v);uy(e,Te(k))||(m=jd(r,m,k,w,l,c,h))}),m}function cy(r,e,t){return t.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Ld(r,e,t,s,l,c,h,m){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let v=e,w;Ie(t)?w=s:w=new Ke(null).setTree(t,s);const k=e.serverCache.getNode();return w.children.inorderTraversal((E,S)=>{if(k.hasChild(E)){const U=e.serverCache.getNode().getImmediateChild(E),B=cy(r,U,S);v=Zu(r,v,new Be(E),B,l,c,h,m)}}),w.children.inorderTraversal((E,S)=>{const U=!e.serverCache.isCompleteForChild(E)&&S.value===null;if(!k.hasChild(E)&&!U){const B=e.serverCache.getNode().getImmediateChild(E),G=cy(r,B,S);v=Zu(r,v,new Be(E),G,l,c,h,m)}}),v}function WS(r,e,t,s,l,c,h){if(Ju(l,t)!=null)return e;const m=e.serverCache.isFiltered(),v=e.serverCache;if(s.value!=null){if(Ie(t)&&v.isFullyInitialized()||v.isCompleteForPath(t))return Zu(r,e,t,v.getNode().getChild(t),l,c,m,h);if(Ie(t)){let w=new Ke(null);return v.getNode().forEachChild(ao,(k,E)=>{w=w.set(new Be(k),E)}),Ld(r,e,t,w,l,c,m,h)}else return e}else{let w=new Ke(null);return s.foreach((k,E)=>{const S=it(t,k);v.isCompleteForPath(S)&&(w=w.set(k,v.getNode().getChild(S)))}),Ld(r,e,t,w,l,c,m,h)}}function $S(r,e,t,s,l){const c=e.serverCache,h=n_(e,c.getNode(),c.isFullyInitialized()||Ie(t),c.isFiltered());return u_(r,h,t,s,a_,l)}function GS(r,e,t,s,l,c){let h;if(Ju(s,t)!=null)return e;{const m=new Sf(s,e,l),v=e.eventCache.getNode();let w;if(Ie(t)||Te(t)===".priority"){let k;if(e.serverCache.isFullyInitialized())k=Xu(s,is(e));else{const E=e.serverCache.getNode();Z(E instanceof ye,"serverChildren would be complete if leaf node"),k=xf(s,E)}k=k,w=r.filter.updateFullNode(v,k,c)}else{const k=Te(t);let E=Ef(s,k,e.serverCache);E==null&&e.serverCache.isCompleteForChild(k)&&(E=v.getImmediateChild(k)),E!=null?w=r.filter.updateChild(v,k,E,Ye(t),m,c):e.eventCache.getNode().hasChild(k)?w=r.filter.updateChild(v,k,ye.EMPTY_NODE,Ye(t),m,c):w=v,w.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=Xu(s,is(e)),h.isLeafNode()&&(w=r.filter.updateFullNode(w,h,c)))}return h=e.serverCache.isFullyInitialized()||Ju(s,ze())!=null,Dl(e,w,h,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new mf(s.getIndex()),c=hS(s);this.processor_=US(c);const h=t.serverCache,m=t.eventCache,v=l.updateFullNode(ye.EMPTY_NODE,h.getNode(),null),w=c.updateFullNode(ye.EMPTY_NODE,m.getNode(),null),k=new rs(v,h.isFullyInitialized(),l.filtersNodes()),E=new rs(w,m.isFullyInitialized(),c.filtersNodes());this.viewCache_=yc(E,k),this.eventGenerator_=new vS(this.query_)}get query(){return this.query_}}function KS(r){return r.viewCache_.serverCache.getNode()}function YS(r,e){const t=is(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!Ie(e)&&!t.getImmediateChild(Te(e)).isEmpty())?t.getChild(e):null}function hy(r){return r.eventRegistrations_.length===0}function QS(r,e){r.eventRegistrations_.push(e)}function dy(r,e,t){const s=[];if(t){Z(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(t,l);h&&s.push(h)})}if(e){let l=[];for(let c=0;c<r.eventRegistrations_.length;++c){const h=r.eventRegistrations_[c];if(!h.matches(e))l.push(h);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(c+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function fy(r,e,t,s){e.type===Dn.MERGE&&e.source.queryId!==null&&(Z(is(r.viewCache_),"We should always have a full cache before handling merges"),Z(Ad(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,c=VS(r.processor_,l,e,t,s);return zS(r.processor_,c.viewCache),Z(c.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=c.viewCache,c_(r,c.changes,c.viewCache.eventCache.getNode(),null)}function XS(r,e){const t=r.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(st,(c,h)=>{s.push(yo(c,h))}),t.isFullyInitialized()&&s.push(e_(t.getNode())),c_(r,s,t.getNode(),e)}function c_(r,e,t,s){const l=s?[s]:r.eventRegistrations_;return _S(r.eventGenerator_,e,t,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec;class JS{constructor(){this.views=new Map}}function ZS(r){Z(!ec,"__referenceConstructor has already been defined"),ec=r}function ek(){return Z(ec,"Reference.ts has not been loaded"),ec}function tk(r){return r.views.size===0}function kf(r,e,t,s){const l=e.source.queryId;if(l!==null){const c=r.views.get(l);return Z(c!=null,"SyncTree gave us an op for an invalid query."),fy(c,e,t,s)}else{let c=[];for(const h of r.views.values())c=c.concat(fy(h,e,t,s));return c}}function nk(r,e,t,s,l){const c=e._queryIdentifier,h=r.views.get(c);if(!h){let m=Xu(t,l?s:null),v=!1;m?v=!0:s instanceof ye?(m=xf(t,s),v=!1):(m=ye.EMPTY_NODE,v=!1);const w=yc(new rs(m,v,!1),new rs(s,l,!1));return new qS(e,w)}return h}function rk(r,e,t,s,l,c){const h=nk(r,e,s,l,c);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,h),QS(h,t),XS(h,t)}function ik(r,e,t,s){const l=e._queryIdentifier,c=[];let h=[];const m=gi(r);if(l==="default")for(const[v,w]of r.views.entries())h=h.concat(dy(w,t,s)),hy(w)&&(r.views.delete(v),w.query._queryParams.loadsAllData()||c.push(w.query));else{const v=r.views.get(l);v&&(h=h.concat(dy(v,t,s)),hy(v)&&(r.views.delete(l),v.query._queryParams.loadsAllData()||c.push(v.query)))}return m&&!gi(r)&&c.push(new(ek())(e._repo,e._path)),{removed:c,events:h}}function h_(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function uo(r,e){let t=null;for(const s of r.views.values())t=t||YS(s,e);return t}function d_(r,e){if(e._queryParams.loadsAllData())return vc(r);{const s=e._queryIdentifier;return r.views.get(s)}}function f_(r,e){return d_(r,e)!=null}function gi(r){return vc(r)!=null}function vc(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc;function sk(r){Z(!tc,"__referenceConstructor has already been defined"),tc=r}function ok(){return Z(tc,"Reference.ts has not been loaded"),tc}let lk=1;class py{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ke(null),this.pendingWriteTree_=jS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ak(r,e,t,s,l){return SS(r.pendingWriteTree_,e,t,s,l),l?Co(r,new ns(yf(),e,t)):[]}function uk(r,e,t,s){kS(r.pendingWriteTree_,e,t,s);const l=Ke.fromObject(t);return Co(r,new vo(yf(),e,l))}function Yi(r,e,t=!1){const s=CS(r.pendingWriteTree_,e);if(TS(r.pendingWriteTree_,e)){let c=new Ke(null);return s.snap!=null?c=c.set(ze(),!0):At(s.children,h=>{c=c.set(new Be(h),!0)}),Co(r,new Qu(s.path,c,t))}else return[]}function _c(r,e,t){return Co(r,new ns(vf(),e,t))}function ck(r,e,t){const s=Ke.fromObject(t);return Co(r,new vo(vf(),e,s))}function hk(r,e){return Co(r,new Kl(vf(),e))}function dk(r,e,t){const s=Cf(r,t);if(s){const l=Tf(s),c=l.path,h=l.queryId,m=Qt(c,e),v=new Kl(_f(h),m);return If(r,c,v)}else return[]}function Md(r,e,t,s,l=!1){const c=e._path,h=r.syncPointTree_.get(c);let m=[];if(h&&(e._queryIdentifier==="default"||f_(h,e))){const v=ik(h,e,t,s);tk(h)&&(r.syncPointTree_=r.syncPointTree_.remove(c));const w=v.removed;if(m=v.events,!l){const k=w.findIndex(S=>S._queryParams.loadsAllData())!==-1,E=r.syncPointTree_.findOnPath(c,(S,U)=>gi(U));if(k&&!E){const S=r.syncPointTree_.subtree(c);if(!S.isEmpty()){const U=mk(S);for(let B=0;B<U.length;++B){const G=U[B],$=G.query,de=y_(r,G);r.listenProvider_.startListening(Ll($),nc(r,$),de.hashFn,de.onComplete)}}}!E&&w.length>0&&!s&&(k?r.listenProvider_.stopListening(Ll(e),null):w.forEach(S=>{const U=r.queryToTagMap.get(wc(S));r.listenProvider_.stopListening(Ll(S),U)}))}gk(r,w)}return m}function fk(r,e,t,s){const l=Cf(r,s);if(l!=null){const c=Tf(l),h=c.path,m=c.queryId,v=Qt(h,e),w=new ns(_f(m),v,t);return If(r,h,w)}else return[]}function pk(r,e,t,s){const l=Cf(r,s);if(l){const c=Tf(l),h=c.path,m=c.queryId,v=Qt(h,e),w=Ke.fromObject(t),k=new vo(_f(m),v,w);return If(r,h,k)}else return[]}function my(r,e,t,s=!1){const l=e._path;let c=null,h=!1;r.syncPointTree_.foreachOnPath(l,(S,U)=>{const B=Qt(S,l);c=c||uo(U,B),h=h||gi(U)});let m=r.syncPointTree_.get(l);m?(h=h||gi(m),c=c||uo(m,ze())):(m=new JS,r.syncPointTree_=r.syncPointTree_.set(l,m));let v;c!=null?v=!0:(v=!1,c=ye.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((U,B)=>{const G=uo(B,ze());G&&(c=c.updateImmediateChild(U,G))}));const w=f_(m,e);if(!w&&!e._queryParams.loadsAllData()){const S=wc(e);Z(!r.queryToTagMap.has(S),"View does not exist, but we have a tag");const U=yk();r.queryToTagMap.set(S,U),r.tagToQueryMap.set(U,S)}const k=wf(r.pendingWriteTree_,l);let E=rk(m,e,t,k,c,v);if(!w&&!h&&!s){const S=d_(m,e);E=E.concat(vk(r,e,S))}return E}function p_(r,e,t){const l=r.pendingWriteTree_,c=r.syncPointTree_.findOnPath(e,(h,m)=>{const v=Qt(h,e),w=uo(m,v);if(w)return w});return s_(l,e,c,t,!0)}function Co(r,e){return m_(e,r.syncPointTree_,null,wf(r.pendingWriteTree_,ze()))}function m_(r,e,t,s){if(Ie(r.path))return g_(r,e,t,s);{const l=e.get(ze());t==null&&l!=null&&(t=uo(l,ze()));let c=[];const h=Te(r.path),m=r.operationForChild(h),v=e.children.get(h);if(v&&m){const w=t?t.getImmediateChild(h):null,k=o_(s,h);c=c.concat(m_(m,v,w,k))}return l&&(c=c.concat(kf(l,r,s,t))),c}}function g_(r,e,t,s){const l=e.get(ze());t==null&&l!=null&&(t=uo(l,ze()));let c=[];return e.children.inorderTraversal((h,m)=>{const v=t?t.getImmediateChild(h):null,w=o_(s,h),k=r.operationForChild(h);k&&(c=c.concat(g_(k,m,v,w)))}),l&&(c=c.concat(kf(l,r,s,t))),c}function y_(r,e){const t=e.query,s=nc(r,t);return{hashFn:()=>(KS(e)||ye.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?dk(r,t._path,s):hk(r,t._path);{const c=uE(l,t);return Md(r,t,null,c)}}}}function nc(r,e){const t=wc(e);return r.queryToTagMap.get(t)}function wc(r){return r._path.toString()+"$"+r._queryIdentifier}function Cf(r,e){return r.tagToQueryMap.get(e)}function Tf(r){const e=r.indexOf("$");return Z(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Be(r.substr(0,e))}}function If(r,e,t){const s=r.syncPointTree_.get(e);Z(s,"Missing sync point for query tag that we're tracking");const l=wf(r.pendingWriteTree_,e);return kf(s,t,l,null)}function mk(r){return r.fold((e,t,s)=>{if(t&&gi(t))return[vc(t)];{let l=[];return t&&(l=h_(t)),At(s,(c,h)=>{l=l.concat(h)}),l}})}function Ll(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(ok())(r._repo,r._path):r}function gk(r,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const l=wc(s),c=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(c)}}}function yk(){return lk++}function vk(r,e,t){const s=e._path,l=nc(r,e),c=y_(r,t),h=r.listenProvider_.startListening(Ll(e),l,c.hashFn,c.onComplete),m=r.syncPointTree_.subtree(s);if(l)Z(!gi(m.value),"If we're adding a query, it shouldn't be shadowed");else{const v=m.fold((w,k,E)=>{if(!Ie(w)&&k&&gi(k))return[vc(k).query];{let S=[];return k&&(S=S.concat(h_(k).map(U=>U.query))),At(E,(U,B)=>{S=S.concat(B)}),S}});for(let w=0;w<v.length;++w){const k=v[w];r.listenProvider_.stopListening(Ll(k),nc(r,k))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Nf(t)}node(){return this.node_}}class bf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=it(this.path_,e);return new bf(this.syncTree_,t)}node(){return p_(this.syncTree_,this.path_)}}const _k=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},gy=function(r,e,t){if(!r||typeof r!="object")return r;if(Z(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return wk(r[".sv"],e,t);if(typeof r[".sv"]=="object")return xk(r[".sv"],e);Z(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},wk=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:Z(!1,"Unexpected server value: "+r)}},xk=function(r,e,t){r.hasOwnProperty("increment")||Z(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&Z(!1,"Unexpected increment value: "+s);const l=e.node();if(Z(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const h=l.getValue();return typeof h!="number"?s:h+s},v_=function(r,e,t,s){return Rf(e,new bf(t,r),s)},Ek=function(r,e,t){return Rf(r,new Nf(e),t)};function Rf(r,e,t){const s=r.getPriority().val(),l=gy(s,e.getImmediateChild(".priority"),t);let c;if(r.isLeafNode()){const h=r,m=gy(h.getValue(),e,t);return m!==h.getValue()||l!==h.getPriority().val()?new xt(m,Rt(l)):r}else{const h=r;return c=h,l!==h.getPriority().val()&&(c=c.updatePriority(new xt(l))),h.forEachChild(st,(m,v)=>{const w=Rf(v,e.getImmediateChild(m),t);w!==v&&(c=c.updateImmediateChild(m,w))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Pf(r,e){let t=e instanceof Be?e:new Be(e),s=r,l=Te(t);for(;l!==null;){const c=mo(s.node.children,l)||{children:{},childCount:0};s=new Af(l,s,c),t=Ye(t),l=Te(t)}return s}function To(r){return r.node.value}function __(r,e){r.node.value=e,Fd(r)}function w_(r){return r.node.childCount>0}function Sk(r){return To(r)===void 0&&!w_(r)}function xc(r,e){At(r.node.children,(t,s)=>{e(new Af(t,r,s))})}function x_(r,e,t,s){t&&e(r),xc(r,l=>{x_(l,e,!0)})}function kk(r,e,t){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ia(r){return new Be(r.parent===null?r.name:ia(r.parent)+"/"+r.name)}function Fd(r){r.parent!==null&&Ck(r.parent,r.name,r)}function Ck(r,e,t){const s=Sk(t),l=tr(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Fd(r)):!s&&!l&&(r.node.children[e]=t.node,r.node.childCount++,Fd(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=/[\[\].#$\/\u0000-\u001F\u007F]/,Ik=/[\[\].#$\u0000-\u001F\u007F]/,fd=10*1024*1024,Of=function(r){return typeof r=="string"&&r.length!==0&&!Tk.test(r)},E_=function(r){return typeof r=="string"&&r.length!==0&&!Ik.test(r)},Nk=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),E_(r)},bk=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!of(r)||r&&typeof r=="object"&&tr(r,".sv")},Df=function(r,e,t){const s=t instanceof Be?new HE(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+$i(s));if(typeof e=="function")throw new Error(r+"contains a function "+$i(s)+" with contents = "+e.toString());if(of(e))throw new Error(r+"contains "+e.toString()+" "+$i(s));if(typeof e=="string"&&e.length>fd/3&&fc(e)>fd)throw new Error(r+"contains a string greater than "+fd+" utf8 bytes "+$i(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,c=!1;if(At(e,(h,m)=>{if(h===".value")l=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!Of(h)))throw new Error(r+" contains an invalid key ("+h+") "+$i(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WE(s,h),Df(r,m,s),$E(s)}),l&&c)throw new Error(r+' contains ".value" child '+$i(s)+" in addition to actual children.")}},Rk=function(r,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const c=Wl(s);for(let h=0;h<c.length;h++)if(!(c[h]===".priority"&&h===c.length-1)){if(!Of(c[h]))throw new Error(r+"contains an invalid key ("+c[h]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(BE);let l=null;for(t=0;t<e.length;t++){if(s=e[t],l!==null&&mn(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},Ak=function(r,e,t,s){const l=nf(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const c=[];At(e,(h,m)=>{const v=new Be(h);if(Df(l,m,it(t,v)),hf(v)===".priority"&&!bk(m))throw new Error(l+"contains an invalid value for '"+v.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(v)}),Rk(l,c)},S_=function(r,e,t,s){if(!E_(t))throw new Error(nf(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Pk=function(r,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),S_(r,e,t)},Ok=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Of(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Nk(t))throw new Error(nf(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jf(r,e){let t=null;for(let s=0;s<e.length;s++){const l=e[s],c=l.getPath();t!==null&&!df(c,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:c}),t.events.push(l)}t&&r.eventLists_.push(t)}function k_(r,e,t){jf(r,t),C_(r,s=>df(s,e))}function br(r,e,t){jf(r,t),C_(r,s=>mn(s,e)||mn(e,s))}function C_(r,e){r.recursionDepth_++;let t=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const c=l.path;e(c)?(jk(r.eventLists_[s]),r.eventLists_[s]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function jk(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const s=t.getEventRunner();Pl&&bt("event: "+t.toString()),ko(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="repo_interrupt",Mk=25;class Fk{constructor(e,t,s,l){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Dk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yu(),this.transactionQueueTree_=new Af,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Uk(r,e,t){if(r.stats_=uf(r.repoInfo_),r.forceRestClient_||fE())r.server_=new Ku(r.repoInfo_,(s,l,c,h)=>{yy(r,s,l,c,h)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>vy(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{St(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new Tr(r.repoInfo_,e,(s,l,c,h)=>{yy(r,s,l,c,h)},s=>{vy(r,s)},s=>{Vk(r,s)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=vE(r.repoInfo_,()=>new yS(r.stats_,r.server_)),r.infoData_=new dS,r.infoSyncTree_=new py({startListening:(s,l,c,h)=>{let m=[];const v=r.infoData_.getNode(s._path);return v.isEmpty()||(m=_c(r.infoSyncTree_,s._path,v),setTimeout(()=>{h("ok")},0)),m},stopListening:()=>{}}),Mf(r,"connected",!1),r.serverSyncTree_=new py({startListening:(s,l,c,h)=>(r.server_.listen(s,c,l,(m,v)=>{const w=h(m,v);br(r.eventQueue_,s._path,w)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function zk(r){const t=r.infoData_.getNode(new Be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Lf(r){return _k({timestamp:zk(r)})}function yy(r,e,t,s,l){r.dataUpdateCount++;const c=new Be(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let h=[];if(l)if(s){const v=Hu(t,w=>Rt(w));h=pk(r.serverSyncTree_,c,v,l)}else{const v=Rt(t);h=fk(r.serverSyncTree_,c,v,l)}else if(s){const v=Hu(t,w=>Rt(w));h=ck(r.serverSyncTree_,c,v)}else{const v=Rt(t);h=_c(r.serverSyncTree_,c,v)}let m=c;h.length>0&&(m=Yl(r,c)),br(r.eventQueue_,m,h)}function vy(r,e){Mf(r,"connected",e),e===!1&&Hk(r)}function Vk(r,e){At(e,(t,s)=>{Mf(r,t,s)})}function Mf(r,e,t){const s=new Be("/.info/"+e),l=Rt(t);r.infoData_.updateSnapshot(s,l);const c=_c(r.infoSyncTree_,s,l);br(r.eventQueue_,s,c)}function T_(r){return r.nextWriteId_++}function Bk(r,e,t,s){Ff(r,"update",{path:e.toString(),value:t});let l=!0;const c=Lf(r),h={};if(At(t,(m,v)=>{l=!1,h[m]=v_(it(e,m),Rt(v),r.serverSyncTree_,c)}),l)bt("update() called with empty data.  Don't do anything."),_y(r,s,"ok",void 0);else{const m=T_(r),v=uk(r.serverSyncTree_,e,h,m);jf(r.eventQueue_,v),r.server_.merge(e.toString(),t,(w,k)=>{const E=w==="ok";E||Jt("update at "+e+" failed: "+w);const S=Yi(r.serverSyncTree_,m,!E),U=S.length>0?Yl(r,e):e;br(r.eventQueue_,U,S),_y(r,s,w,k)}),At(t,w=>{const k=A_(r,it(e,w));Yl(r,k)}),br(r.eventQueue_,e,[])}}function Hk(r){Ff(r,"onDisconnectEvents");const e=Lf(r),t=Yu();Rd(r.onDisconnect_,ze(),(l,c)=>{const h=v_(l,c,r.serverSyncTree_,e);t_(t,l,h)});let s=[];Rd(t,ze(),(l,c)=>{s=s.concat(_c(r.serverSyncTree_,l,c));const h=A_(r,l);Yl(r,h)}),r.onDisconnect_=Yu(),br(r.eventQueue_,ze(),s)}function Wk(r,e,t){let s;Te(e._path)===".info"?s=my(r.infoSyncTree_,e,t):s=my(r.serverSyncTree_,e,t),k_(r.eventQueue_,e._path,s)}function $k(r,e,t){let s;Te(e._path)===".info"?s=Md(r.infoSyncTree_,e,t):s=Md(r.serverSyncTree_,e,t),k_(r.eventQueue_,e._path,s)}function Gk(r){r.persistentConnection_&&r.persistentConnection_.interrupt(Lk)}function Ff(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),bt(t,...e)}function _y(r,e,t,s){e&&ko(()=>{if(t==="ok")e(null);else{const l=(t||"error").toUpperCase();let c=l;s&&(c+=": "+s);const h=new Error(c);h.code=l,e(h)}})}function I_(r,e,t){return p_(r.serverSyncTree_,e,t)||ye.EMPTY_NODE}function Uf(r,e=r.transactionQueueTree_){if(e||Ec(r,e),To(e)){const t=b_(r,e);Z(t.length>0,"Sending zero length transaction queue"),t.every(l=>l.status===0)&&qk(r,ia(e),t)}else w_(e)&&xc(e,t=>{Uf(r,t)})}function qk(r,e,t){const s=t.map(w=>w.currentWriteId),l=I_(r,e,s);let c=l;const h=l.hash();for(let w=0;w<t.length;w++){const k=t[w];Z(k.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),k.status=1,k.retryCount++;const E=Qt(e,k.path);c=c.updateChild(E,k.currentOutputSnapshotRaw)}const m=c.val(!0),v=e;r.server_.put(v.toString(),m,w=>{Ff(r,"transaction put response",{path:v.toString(),status:w});let k=[];if(w==="ok"){const E=[];for(let S=0;S<t.length;S++)t[S].status=2,k=k.concat(Yi(r.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&E.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();Ec(r,Pf(r.transactionQueueTree_,e)),Uf(r,r.transactionQueueTree_),br(r.eventQueue_,e,k);for(let S=0;S<E.length;S++)ko(E[S])}else{if(w==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Jt("transaction at "+v.toString()+" failed: "+w);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=w}Yl(r,e)}},h)}function Yl(r,e){const t=N_(r,e),s=ia(t),l=b_(r,t);return Kk(r,l,s),s}function Kk(r,e,t){if(e.length===0)return;const s=[];let l=[];const h=e.filter(m=>m.status===0).map(m=>m.currentWriteId);for(let m=0;m<e.length;m++){const v=e[m],w=Qt(t,v.path);let k=!1,E;if(Z(w!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),v.status===4)k=!0,E=v.abortReason,l=l.concat(Yi(r.serverSyncTree_,v.currentWriteId,!0));else if(v.status===0)if(v.retryCount>=Mk)k=!0,E="maxretry",l=l.concat(Yi(r.serverSyncTree_,v.currentWriteId,!0));else{const S=I_(r,v.path,h);v.currentInputSnapshot=S;const U=e[m].update(S.val());if(U!==void 0){Df("transaction failed: Data returned ",U,v.path);let B=Rt(U);typeof U=="object"&&U!=null&&tr(U,".priority")||(B=B.updatePriority(S.getPriority()));const $=v.currentWriteId,de=Lf(r),q=Ek(B,S,de);v.currentOutputSnapshotRaw=B,v.currentOutputSnapshotResolved=q,v.currentWriteId=T_(r),h.splice(h.indexOf($),1),l=l.concat(ak(r.serverSyncTree_,v.path,q,v.currentWriteId,v.applyLocally)),l=l.concat(Yi(r.serverSyncTree_,$,!0))}else k=!0,E="nodata",l=l.concat(Yi(r.serverSyncTree_,v.currentWriteId,!0))}br(r.eventQueue_,t,l),l=[],k&&(e[m].status=2,function(S){setTimeout(S,Math.floor(0))}(e[m].unwatcher),e[m].onComplete&&(E==="nodata"?s.push(()=>e[m].onComplete(null,!1,e[m].currentInputSnapshot)):s.push(()=>e[m].onComplete(new Error(E),!1,null))))}Ec(r,r.transactionQueueTree_);for(let m=0;m<s.length;m++)ko(s[m]);Uf(r,r.transactionQueueTree_)}function N_(r,e){let t,s=r.transactionQueueTree_;for(t=Te(e);t!==null&&To(s)===void 0;)s=Pf(s,t),e=Ye(e),t=Te(e);return s}function b_(r,e){const t=[];return R_(r,e,t),t.sort((s,l)=>s.order-l.order),t}function R_(r,e,t){const s=To(e);if(s)for(let l=0;l<s.length;l++)t.push(s[l]);xc(e,l=>{R_(r,l,t)})}function Ec(r,e){const t=To(e);if(t){let s=0;for(let l=0;l<t.length;l++)t[l].status!==2&&(t[s]=t[l],s++);t.length=s,__(e,t.length>0?t:void 0)}xc(e,s=>{Ec(r,s)})}function A_(r,e){const t=ia(N_(r,e)),s=Pf(r.transactionQueueTree_,e);return kk(s,l=>{pd(r,l)}),pd(r,s),x_(s,l=>{pd(r,l)}),t}function pd(r,e){const t=To(e);if(t){const s=[];let l=[],c=-1;for(let h=0;h<t.length;h++)t[h].status===3||(t[h].status===1?(Z(c===h-1,"All SENT items should be at beginning of queue."),c=h,t[h].status=3,t[h].abortReason="set"):(Z(t[h].status===0,"Unexpected transaction status in abort"),t[h].unwatcher(),l=l.concat(Yi(r.serverSyncTree_,t[h].currentWriteId,!0)),t[h].onComplete&&s.push(t[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?__(e,void 0):t.length=c+1,br(r.eventQueue_,ia(e),l);for(let h=0;h<s.length;h++)ko(s[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(r){let e="";const t=r.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let l=t[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function Qk(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Jt(`Invalid query segment '${t}' in query '${r}'`)}return e}const wy=function(r,e){const t=Xk(r),s=t.namespace;t.domain==="firebase.com"&&Nr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Nr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||iE();const l=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Fv(t.host,t.secure,s,l,e,"",s!==t.subdomain),path:new Be(t.pathString)}},Xk=function(r){let e="",t="",s="",l="",c="",h=!0,m="https",v=443;if(typeof r=="string"){let w=r.indexOf("//");w>=0&&(m=r.substring(0,w-1),r=r.substring(w+2));let k=r.indexOf("/");k===-1&&(k=r.length);let E=r.indexOf("?");E===-1&&(E=r.length),e=r.substring(0,Math.min(k,E)),k<E&&(l=Yk(r.substring(k,E)));const S=Qk(r.substring(Math.min(r.length,E)));w=e.indexOf(":"),w>=0?(h=m==="https"||m==="wss",v=parseInt(e.substring(w+1),10)):w=e.length;const U=e.slice(0,w);if(U.toLowerCase()==="localhost")t="localhost";else if(U.split(".").length<=2)t=U;else{const B=e.indexOf(".");s=e.substring(0,B).toLowerCase(),t=e.substring(B+1),c=s}"ns"in S&&(c=S.ns)}return{host:e,port:v,domain:t,subdomain:s,secure:h,scheme:m,pathString:l,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,t,s,l){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+St(this.snapshot.exportVal())}}class Zk{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t,s,l){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=l}get key(){return Ie(this._path)?null:hf(this._path)}get ref(){return new yi(this._repo,this._path)}get _queryIdentifier(){const e=iy(this._queryParams),t=lf(e);return t==="{}"?"default":t}get _queryObject(){return iy(this._queryParams)}isEqual(e){if(e=nr(e),!(e instanceof zf))return!1;const t=this._repo===e._repo,s=df(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return t&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+VE(this._path)}}class yi extends zf{constructor(e,t){super(e,t,new gf,!1)}get parent(){const e=qv(this._path);return e===null?null:new yi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class rc{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Be(e),s=Ud(this.ref,e);return new rc(this._node.getChild(t),s,st)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new rc(l,Ud(this.ref,s),st)))}hasChild(e){const t=new Be(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Iu(r,e){return r=nr(r),r._checkNotDeleted("ref"),e!==void 0?Ud(r._root,e):r._root}function Ud(r,e){return r=nr(r),Te(r._path)===null?Pk("child","path",e):S_("child","path",e),new yi(r._repo,it(r._path,e))}function md(r,e){Ak("update",e,r._path);const t=new dc;return Bk(r._repo,r._path,e,t.wrapCallback(()=>{})),t.promise}class Vf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Jk("value",this,new rc(e.snapshotNode,new yi(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Zk(this,e,t):null}matches(e){return e instanceof Vf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function tC(r,e,t,s,l){const c=new eC(t,void 0),h=new Vf(c);return Wk(r._repo,r,h),()=>$k(r._repo,r,h)}function nC(r,e,t,s){return tC(r,"value",e)}ZS(yi);sk(yi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="FIREBASE_DATABASE_EMULATOR_HOST",zd={};let iC=!1;function sC(r,e,t,s){const l=e.lastIndexOf(":"),c=e.substring(0,l),h=ls(c);r.repoInfo_=new Fv(e,h,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(r.authTokenProvider_=s)}function oC(r,e,t,s,l){let c=s||r.options.databaseURL;c===void 0&&(r.options.projectId||Nr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),bt("Using default host for project ",r.options.projectId),c=`${r.options.projectId}-default-rtdb.firebaseio.com`);let h=wy(c,l),m=h.repoInfo,v;typeof process<"u"&&zg&&(v=zg[rC]),v?(c=`http://${v}?ns=${m.namespace}`,h=wy(c,l),m=h.repoInfo):h.repoInfo.secure;const w=new mE(r.name,r.options,e);Ok("Invalid Firebase Database URL",h),Ie(h.path)||Nr("Database URL must point to the root of a Firebase Database (not including a child path).");const k=aC(m,r,w,new pE(r,t));return new uC(k,r)}function lC(r,e){const t=zd[e];(!t||t[r.key]!==r)&&Nr(`Database ${e}(${r.repoInfo_}) has already been deleted.`),Gk(r),delete t[r.key]}function aC(r,e,t,s){let l=zd[e.name];l||(l={},zd[e.name]=l);let c=l[r.toURLString()];return c&&Nr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new Fk(r,iC,t,s),l[r.toURLString()]=c,c}class uC{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Uk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yi(this._repo,ze())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nr("Cannot call "+e+" on a deleted database.")}}function cC(r=sf(),e){const t=mc(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=fv("database");s&&hC(t,...s)}return t}function hC(r,e,t,s={}){r=nr(r),r._checkNotDeleted("useEmulator");const l=`${e}:${t}`,c=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&fi(s,c.repoInfo_.emulatorOptions))return;Nr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)s.mockUserToken&&Nr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new Pu(Pu.OWNER);else if(s.mockUserToken){const m=typeof s.mockUserToken=="string"?s.mockUserToken:gv(s.mockUserToken,r.app.options.projectId);h=new Pu(m)}ls(e)&&(Zd(e),ef("Database",!0)),sC(c,l,s,h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(r){Jx(as),es(new pi("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return oC(s,l,c,t)},"PUBLIC").setMultipleInstances(!0)),Jn(Vg,Bg,r),Jn(Vg,Bg,"esm2017")}Tr.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Tr.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};dC();var fC="firebase",pC="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn(fC,pC,"app");function Bf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(t[s[l]]=r[s[l]]);return t}function P_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mC=P_,O_=new ea("auth","Firebase",P_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new pc("@firebase/auth");function gC(r,...e){ic.logLevel<=Ue.WARN&&ic.warn(`Auth (${as}): ${r}`,...e)}function Ou(r,...e){ic.logLevel<=Ue.ERROR&&ic.error(`Auth (${as}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(r,...e){throw Hf(r,...e)}function Zn(r,...e){return Hf(r,...e)}function D_(r,e,t){const s=Object.assign(Object.assign({},mC()),{[e]:t});return new ea("auth","Firebase",s).create(e,{appName:r.name})}function Xi(r){return D_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return O_.create(r,...e)}function _e(r,e,...t){if(!r)throw Hf(e,...t)}function kr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ou(e),new Error(e)}function Ar(r,e){r||kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function yC(){return xy()==="http:"||xy()==="https:"}function xy(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yC()||b1()||"connection"in navigator)?navigator.onLine:!0}function _C(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ar(t>e,"Short delay should be less than long delay!"),this.isMobile=tf()||yv()}get(){return vC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(r,e){Ar(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],EC=new sa(3e4,6e4);function $f(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Io(r,e,t,s,l={}){return L_(r,l,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const m=So(Object.assign({key:r.config.apiKey},h)).slice(1),v=await r._getAdditionalHeaders();v["Content-Type"]="application/json",r.languageCode&&(v["X-Firebase-Locale"]=r.languageCode);const w=Object.assign({method:e,headers:v},c);return N1()||(w.referrerPolicy="no-referrer"),r.emulatorConfig&&ls(r.emulatorConfig.host)&&(w.credentials="include"),j_.fetch()(await M_(r,r.config.apiHost,t,m),w)})}async function L_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},wC),e);try{const l=new kC(r),c=await Promise.race([t(),l.promise]);l.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Nu(r,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const m=c.ok?h.errorMessage:h.error.message,[v,w]=m.split(" : ");if(v==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nu(r,"credential-already-in-use",h);if(v==="EMAIL_EXISTS")throw Nu(r,"email-already-in-use",h);if(v==="USER_DISABLED")throw Nu(r,"user-disabled",h);const k=s[v]||v.toLowerCase().replace(/[_\s]+/g,"-");if(w)throw D_(r,k,w);Rr(r,k)}}catch(l){if(l instanceof Pr)throw l;Rr(r,"network-request-failed",{message:String(l)})}}async function SC(r,e,t,s,l={}){const c=await Io(r,e,t,s,l);return"mfaPendingCredential"in c&&Rr(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function M_(r,e,t,s){const l=`${e}${t}?${s}`,c=r,h=c.config.emulator?Wf(r.config,l):`${r.config.apiScheme}://${l}`;return xC.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}class kC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Zn(this.auth,"network-request-failed")),EC.get())})}}function Nu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const l=Zn(r,e,s);return l.customData._tokenResponse=t,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(r,e){return Io(r,"POST","/v1/accounts:delete",e)}async function sc(r,e){return Io(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TC(r,e=!1){const t=nr(r),s=await t.getIdToken(e),l=Gf(s);_e(l&&l.exp&&l.auth_time&&l.iat,t.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,h=c?.sign_in_provider;return{claims:l,token:s,authTime:Ml(gd(l.auth_time)),issuedAtTime:Ml(gd(l.iat)),expirationTime:Ml(gd(l.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function gd(r){return Number(r)*1e3}function Gf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Ou("JWT malformed, contained fewer than 3 sections"),null;try{const l=Bu(t);return l?JSON.parse(l):(Ou("Failed to decode base64 JWT payload"),null)}catch(l){return Ou("Caught error parsing JWT payload as JSON",l?.toString()),null}}function Ey(r){const e=Gf(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ql(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Pr&&IC(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function IC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ml(this.lastLoginAt),this.creationTime=Ml(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(r){var e;const t=r.auth,s=await r.getIdToken(),l=await Ql(r,sc(t,{idToken:s}));_e(l?.users.length,t,"internal-error");const c=l.users[0];r._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?F_(c.providerUserInfo):[],m=RC(r.providerData,h),v=r.isAnonymous,w=!(r.email&&c.passwordHash)&&!m?.length,k=v?w:!1,E={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:m,metadata:new Bd(c.createdAt,c.lastLoginAt),isAnonymous:k};Object.assign(r,E)}async function bC(r){const e=nr(r);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RC(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function F_(r){return r.map(e=>{var{providerId:t}=e,s=Bf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(r,e){const t=await L_(r,{},async()=>{const s=So({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,h=await M_(r,l,"/v1/token",`key=${c}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const v={method:"POST",headers:m,body:s};return r.emulatorConfig&&ls(r.emulatorConfig.host)&&(v.credentials="include"),j_.fetch()(h,v)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function PC(r,e){return Io(r,"POST","/v2/accounts:revokeToken",$f(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ey(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Ey(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:l,expiresIn:c}=await AC(e,t);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:l,expirationTime:c}=t,h=new co;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),l&&(_e(typeof l=="string","internal-error",{appName:e}),h.accessToken=l),c&&(_e(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:t,auth:s,stsTokenManager:l}=e,c=Bf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Bd(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const t=await Ql(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return TC(this,e)}reload(){return bC(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await oc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(Xi(this.auth));const e=await this.getIdToken();return await Ql(this,CC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,l,c,h,m,v,w,k;const E=(s=t.displayName)!==null&&s!==void 0?s:void 0,S=(l=t.email)!==null&&l!==void 0?l:void 0,U=(c=t.phoneNumber)!==null&&c!==void 0?c:void 0,B=(h=t.photoURL)!==null&&h!==void 0?h:void 0,G=(m=t.tenantId)!==null&&m!==void 0?m:void 0,$=(v=t._redirectEventId)!==null&&v!==void 0?v:void 0,de=(w=t.createdAt)!==null&&w!==void 0?w:void 0,q=(k=t.lastLoginAt)!==null&&k!==void 0?k:void 0,{uid:ce,emailVerified:he,isAnonymous:we,providerData:W,stsTokenManager:b}=t;_e(ce&&b,e,"internal-error");const C=co.fromJSON(this.name,b);_e(typeof ce=="string",e,"internal-error"),si(E,e.name),si(S,e.name),_e(typeof he=="boolean",e,"internal-error"),_e(typeof we=="boolean",e,"internal-error"),si(U,e.name),si(B,e.name),si(G,e.name),si($,e.name),si(de,e.name),si(q,e.name);const I=new jn({uid:ce,auth:e,email:S,emailVerified:he,displayName:E,isAnonymous:we,photoURL:B,phoneNumber:U,tenantId:G,stsTokenManager:C,createdAt:de,lastLoginAt:q});return W&&Array.isArray(W)&&(I.providerData=W.map(P=>Object.assign({},P))),$&&(I._redirectEventId=$),I}static async _fromIdTokenResponse(e,t,s=!1){const l=new co;l.updateFromServerResponse(t);const c=new jn({uid:t.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await oc(c),c}static async _fromGetAccountInfoResponse(e,t,s){const l=t.users[0];_e(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?F_(l.providerUserInfo):[],h=!(l.email&&l.passwordHash)&&!c?.length,m=new co;m.updateFromIdToken(s);const v=new jn({uid:l.localId,auth:e,stsTokenManager:m,isAnonymous:h}),w={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Bd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(v,w),v}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=new Map;function Cr(r){Ar(r instanceof Function,"Expected a class definition");let e=Sy.get(r);return e?(Ar(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Sy.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}U_.type="NONE";const ky=U_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(r,e,t){return`firebase:${r}:${e}:${t}`}class ho{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=Du(this.userKey,l.apiKey,c),this.fullPersistenceKey=Du("persistence",l.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await sc(this.auth,{idToken:e}).catch(()=>{});return t?jn._fromGetAccountInfoResponse(this.auth,t,e):null}return jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ho(Cr(ky),e,s);const l=(await Promise.all(t.map(async w=>{if(await w._isAvailable())return w}))).filter(w=>w);let c=l[0]||Cr(ky);const h=Du(s,e.config.apiKey,e.name);let m=null;for(const w of t)try{const k=await w._get(h);if(k){let E;if(typeof k=="string"){const S=await sc(e,{idToken:k}).catch(()=>{});if(!S)break;E=await jn._fromGetAccountInfoResponse(e,S,k)}else E=jn._fromJSON(e,k);w!==c&&(m=E),c=w;break}}catch{}const v=l.filter(w=>w._shouldAllowMigration);return!c._shouldAllowMigration||!v.length?new ho(c,e,s):(c=v[0],m&&await c._set(h,m.toJSON()),await Promise.all(t.map(async w=>{if(w!==c)try{await w._remove(h)}catch{}})),new ho(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($_(e))return"Blackberry";if(G_(e))return"Webos";if(V_(e))return"Safari";if((e.includes("chrome/")||B_(e))&&!e.includes("edge/"))return"Chrome";if(W_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if(s?.length===2)return s[1]}return"Other"}function z_(r=zt()){return/firefox\//i.test(r)}function V_(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function B_(r=zt()){return/crios\//i.test(r)}function H_(r=zt()){return/iemobile/i.test(r)}function W_(r=zt()){return/android/i.test(r)}function $_(r=zt()){return/blackberry/i.test(r)}function G_(r=zt()){return/webos/i.test(r)}function qf(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function OC(r=zt()){var e;return qf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DC(){return R1()&&document.documentMode===10}function q_(r=zt()){return qf(r)||W_(r)||G_(r)||$_(r)||/windows phone/i.test(r)||H_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(r,e=[]){let t;switch(r){case"Browser":t=Cy(zt());break;case"Worker":t=`${Cy(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${as}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=c=>new Promise((h,m)=>{try{const v=e(c);h(v)}catch(v){m(v)}});s.onAbort=t,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const l of t)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(r,e={}){return Io(r,"GET","/v2/passwordPolicy",$f(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=6;class FC{constructor(e){var t,s,l,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:MC,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,l,c,h,m;const v={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,v),this.validatePasswordCharacterOptions(e,v),v.isValid&&(v.isValid=(t=v.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),v.isValid&&(v.isValid=(s=v.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),v.isValid&&(v.isValid=(l=v.containsLowercaseLetter)!==null&&l!==void 0?l:!0),v.isValid&&(v.isValid=(c=v.containsUppercaseLetter)!==null&&c!==void 0?c:!0),v.isValid&&(v.isValid=(h=v.containsNumericCharacter)!==null&&h!==void 0?h:!0),v.isValid&&(v.isValid=(m=v.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),v}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),l&&(t.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,t,s,l){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ty(this),this.idTokenSubscription=new Ty(this),this.beforeStateQueue=new jC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=O_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var s,l,c;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sc(this,{idToken:e}),s=await jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Pn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=l?._redirectEventId,v=await this.tryRedirectSignIn(e);(!h||h===m)&&v?.user&&(l=v.user,c=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(l)}catch(h){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_C()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(Xi(this));const t=e?nr(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(Xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(Xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LC(this),t=new FC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ea("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await PC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,l){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const v=e.addObserver(t,s,l);return()=>{h=!0,v()}}else{const v=e.addObserver(t);return()=>{h=!0,v()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=K_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(t["X-Firebase-AppCheck"]=l),t}async _getAppCheckToken(){var e;if(Pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&gC(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Kf(r){return nr(r)}class Ty{constructor(e){this.auth=e,this.observer=null,this.addObserver=z1(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zC(r){Yf=r}function VC(r){return Yf.loadJS(r)}function BC(){return Yf.gapiScript}function HC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(r,e){const t=mc(r,"auth");if(t.isInitialized()){const l=t.getImmediate(),c=t.getOptions();if(fi(c,e??{}))return l;Rr(l,"already-initialized")}return t.initialize({options:e})}function $C(r,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Cr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function GC(r,e,t){const s=Kf(r);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,c=Y_(e),{host:h,port:m}=qC(e),v=m===null?"":`:${m}`,w={url:`${c}//${h}${v}/`},k=Object.freeze({host:h,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(fi(w,s.config.emulator)&&fi(k,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=w,s.emulatorConfig=k,s.settings.appVerificationDisabledForTesting=!0,ls(h)?(Zd(`${c}//${h}${v}`),ef("Auth",!0)):KC()}function Y_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function qC(r){const e=Y_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:Iy(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:Iy(h)}}}function Iy(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function KC(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,t){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(r,e){return SC(r,"POST","/v1/accounts:signInWithIdp",$f(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="http://localhost";class ss extends Q_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=t,c=Bf(t,["providerId","signInMethod"]);if(!s||!l)return null;const h=new ss(s,l);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return fo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,fo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fo(e,t)}buildRequest(){const e={requestUri:YC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=So(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends X_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends oa{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ss._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return li.credential(t,s)}catch{return null}}}li.GOOGLE_SIGN_IN_METHOD="google.com";li.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends oa{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.GITHUB_SIGN_IN_METHOD="github.com";ai.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends oa{constructor(){super("twitter.com")}static credential(e,t){return ss._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ui.credential(t,s)}catch{return null}}}ui.TWITTER_SIGN_IN_METHOD="twitter.com";ui.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,l=!1){const c=await jn._fromIdTokenResponse(e,s,l),h=Ny(s);return new wo({user:c,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const l=Ny(s);return new wo({user:e,providerId:l,_tokenResponse:s,operationType:t})}}function Ny(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends Pr{constructor(e,t,s,l){var c;super(t.code,t.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,lc.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,l){return new lc(e,t,s,l)}}function J_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?lc._fromErrorAndOperation(r,c,e,s):c})}async function QC(r,e,t=!1){const s=await Ql(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return wo._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(r,e,t=!1){const{auth:s}=r;if(Pn(s.app))return Promise.reject(Xi(s));const l="reauthenticate";try{const c=await Ql(r,J_(s,l,e,r),t);_e(c.idToken,s,"internal-error");const h=Gf(c.idToken);_e(h,s,"internal-error");const{sub:m}=h;return _e(r.uid===m,s,"user-mismatch"),wo._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&Rr(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(r,e,t=!1){if(Pn(r.app))return Promise.reject(Xi(r));const s="signIn",l=await J_(r,s,e),c=await wo._fromIdTokenResponse(r,s,l);return t||await r._updateCurrentUser(c.user),c}function ZC(r,e,t,s){return nr(r).onIdTokenChanged(e,t,s)}function e2(r,e,t){return nr(r).beforeAuthStateChanged(e,t)}const ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ac,"1"),this.storage.removeItem(ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2=1e3,n2=10;class e0 extends Z_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),l=this.localCache[t];s!==l&&e(t,l,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,v)=>{this.notifyListeners(h,v)});return}const s=e.key;t?this.detachListener():this.stopPolling();const l=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);DC()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,n2):l()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},t2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e0.type="LOCAL";const r2=e0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0 extends Z_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}t0.type="SESSION";const n0=t0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(l=>l.isListeningto(e));if(t)return t;const s=new Sc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:l,data:c}=t.data,h=this.handlersMap[l];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const m=Array.from(h).map(async w=>w(t.origin,c)),v=await i2(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:v})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,h;return new Promise((m,v)=>{const w=Qf("",20);l.port1.start();const k=setTimeout(()=>{v(new Error("unsupported_event"))},s);h={messageChannel:l,onMessage(E){const S=E;if(S.data.eventId===w)switch(S.data.status){case"ack":clearTimeout(k),c=setTimeout(()=>{v(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(S.data.response);break;default:clearTimeout(k),clearTimeout(c),v(new Error("invalid_response"));break}}},this.handlers.add(h),l.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:w,data:t},[l.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(){return window}function o2(r){er().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function l2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function a2(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function u2(){return r0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="firebaseLocalStorageDb",c2=1,uc="firebaseLocalStorage",s0="fbase_key";class la{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function kc(r,e){return r.transaction([uc],e?"readwrite":"readonly").objectStore(uc)}function h2(){const r=indexedDB.deleteDatabase(i0);return new la(r).toPromise()}function Hd(){const r=indexedDB.open(i0,c2);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(uc,{keyPath:s0})}catch(l){t(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(uc)?e(s):(s.close(),await h2(),e(await Hd()))})})}async function by(r,e,t){const s=kc(r,!0).put({[s0]:e,value:t});return new la(s).toPromise()}async function d2(r,e){const t=kc(r,!1).get(e),s=await new la(t).toPromise();return s===void 0?null:s.value}function Ry(r,e){const t=kc(r,!0).delete(e);return new la(t).toPromise()}const f2=800,p2=3;class o0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>p2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sc._getInstance(u2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await l2(),!this.activeServiceWorker)return;this.sender=new s2(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||a2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hd();return await by(e,ac,"1"),await Ry(e,ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>by(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>d2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ry(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=kc(l,!1).getAll();return new la(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),t.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),t.push(l));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),f2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o0.type="LOCAL";const m2=o0;new sa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(r,e){return e?Cr(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends Q_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function y2(r){return JC(r.auth,new Xf(r),r.bypassAuthState)}function v2(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),XC(t,new Xf(r),r.bypassAuthState)}async function _2(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),QC(t,new Xf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,t,s,l,c=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:l,tenantId:c,error:h,type:m}=e;if(h){this.reject(h);return}const v={auth:this.auth,requestUri:t,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(v))}catch(w){this.reject(w)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return y2;case"linkViaPopup":case"linkViaRedirect":return _2;case"reauthViaPopup":case"reauthViaRedirect":return v2;default:Rr(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=new sa(2e3,1e4);class so extends l0{constructor(e,t,s,l,c){super(e,t,l,c),this.provider=s,this.authWindow=null,this.pollId=null,so.currentPopupAction&&so.currentPopupAction.cancel(),so.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=Qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,so.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,w2.get())};e()}}so.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2="pendingRedirect",ju=new Map;class E2 extends l0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ju.get(this.auth._key());if(!e){try{const s=await S2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ju.set(this.auth._key(),e)}return this.bypassAuthState||ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S2(r,e){const t=T2(e),s=C2(r);if(!await s._isAvailable())return!1;const l=await s._get(t)==="true";return await s._remove(t),l}function k2(r,e){ju.set(r._key(),e)}function C2(r){return Cr(r._redirectPersistence)}function T2(r){return Du(x2,r.config.apiKey,r.name)}async function I2(r,e,t=!1){if(Pn(r.app))return Promise.reject(Xi(r));const s=Kf(r),l=g2(s,e),h=await new E2(s,l,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=10*60*1e3;class b2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!R2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!a0(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Zn(this.auth,l))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ay(e))}saveEventToCache(e){this.cachedEventUids.add(Ay(e)),this.lastProcessedEventTime=Date.now()}}function Ay(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function a0({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function R2(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(r,e={}){return Io(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,O2=/^https?/;async function D2(r){if(r.config.emulator)return;const{authorizedDomains:e}=await A2(r);for(const t of e)try{if(j2(t))return}catch{}Rr(r,"unauthorized-domain")}function j2(r){const e=Vd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!O2.test(t))return!1;if(P2.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=new sa(3e4,6e4);function Py(){const r=er().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function M2(r){return new Promise((e,t)=>{var s,l,c;function h(){Py(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Py(),t(Zn(r,"network-request-failed"))},timeout:L2.get()})}if(!((l=(s=er().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((c=er().gapi)===null||c===void 0)&&c.load)h();else{const m=HC("iframefcb");return er()[m]=()=>{gapi.load?h():t(Zn(r,"network-request-failed"))},VC(`${BC()}?onload=${m}`).catch(v=>t(v))}}).catch(e=>{throw Lu=null,e})}let Lu=null;function F2(r){return Lu=Lu||M2(r),Lu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=new sa(5e3,15e3),z2="__/auth/iframe",V2="emulator/auth/iframe",B2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},H2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function W2(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Wf(e,V2):`https://${r.config.authDomain}/${z2}`,s={apiKey:e.apiKey,appName:r.name,v:as},l=H2.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${t}?${So(s).slice(1)}`}async function $2(r){const e=await F2(r),t=er().gapi;return _e(t,r,"internal-error"),e.open({where:document.body,url:W2(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:B2,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const h=Zn(r,"network-request-failed"),m=er().setTimeout(()=>{c(h)},U2.get());function v(){er().clearTimeout(m),l(s)}s.ping(v).then(v,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q2=500,K2=600,Y2="_blank",Q2="http://localhost";class Oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X2(r,e,t,s=q2,l=K2){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const v=Object.assign(Object.assign({},G2),{width:s.toString(),height:l.toString(),top:c,left:h}),w=zt().toLowerCase();t&&(m=B_(w)?Y2:t),z_(w)&&(e=e||Q2,v.scrollbars="yes");const k=Object.entries(v).reduce((S,[U,B])=>`${S}${U}=${B},`,"");if(OC(w)&&m!=="_self")return J2(e||"",m),new Oy(null);const E=window.open(e||"",m,k);_e(E,r,"popup-blocked");try{E.focus()}catch{}return new Oy(E)}function J2(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="__/auth/handler",eT="emulator/auth/handler",tT=encodeURIComponent("fac");async function Dy(r,e,t,s,l,c){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:as,eventId:l};if(e instanceof X_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",xd(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[k,E]of Object.entries({}))h[k]=E}if(e instanceof oa){const k=e.getScopes().filter(E=>E!=="");k.length>0&&(h.scopes=k.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const k of Object.keys(m))m[k]===void 0&&delete m[k];const v=await r._getAppCheckToken(),w=v?`#${tT}=${encodeURIComponent(v)}`:"";return`${nT(r)}?${So(m).slice(1)}${w}`}function nT({config:r}){return r.emulator?Wf(r,eT):`https://${r.authDomain}/${Z2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="webStorageSupport";class rT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n0,this._completeRedirectFn=I2,this._overrideRedirectResult=k2}async _openPopup(e,t,s,l){var c;Ar((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await Dy(e,t,s,Vd(),l);return X2(e,h,Qf())}async _openRedirect(e,t,s,l){await this._originValidation(e);const c=await Dy(e,t,s,Vd(),l);return o2(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:l,promise:c}=this.eventManagers[t];return l?Promise.resolve(l):(Ar(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await $2(e),s=new b2(e);return t.register("authEvent",l=>(_e(l?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yd,{type:yd},l=>{var c;const h=(c=l?.[0])===null||c===void 0?void 0:c[yd];h!==void 0&&t(!!h),Rr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=D2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return q_()||V_()||qf()}}const iT=rT;var jy="@firebase/auth",Ly="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lT(r){es(new pi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const v={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:K_(r)},w=new UC(s,l,c,v);return $C(w,t),w},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),es(new pi("auth-internal",e=>{const t=Kf(e.getProvider("auth").getImmediate());return(s=>new sT(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(jy,Ly,oT(r)),Jn(jy,Ly,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=5*60,uT=mv("authIdTokenMaxAge")||aT;let My=null;const cT=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>uT)return;const l=t?.token;My!==l&&(My=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function hT(r=sf()){const e=mc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=WC(r,{popupRedirectResolver:iT,persistence:[m2,r2,n0]}),s=mv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=cT(c.toString());e2(t,h,()=>h(t.currentUser)),ZC(t,m=>h(m))}}const l=dv("auth");return l&&GC(t,`http://${l}`),t}function dT(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}zC({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const c=Zn("internal-error");c.customData=l,t(c)},s.type="text/javascript",s.charset="UTF-8",dT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lT("Browser");var Fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jf;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,C){function I(){}I.prototype=C.prototype,b.D=C.prototype,b.prototype=new I,b.prototype.constructor=b,b.C=function(P,A,D){for(var N=Array(arguments.length-2),We=2;We<arguments.length;We++)N[We-2]=arguments[We];return C.prototype[A].apply(P,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(b,C,I){I||(I=0);var P=Array(16);if(typeof C=="string")for(var A=0;16>A;++A)P[A]=C.charCodeAt(I++)|C.charCodeAt(I++)<<8|C.charCodeAt(I++)<<16|C.charCodeAt(I++)<<24;else for(A=0;16>A;++A)P[A]=C[I++]|C[I++]<<8|C[I++]<<16|C[I++]<<24;C=b.g[0],I=b.g[1],A=b.g[2];var D=b.g[3],N=C+(D^I&(A^D))+P[0]+3614090360&4294967295;C=I+(N<<7&4294967295|N>>>25),N=D+(A^C&(I^A))+P[1]+3905402710&4294967295,D=C+(N<<12&4294967295|N>>>20),N=A+(I^D&(C^I))+P[2]+606105819&4294967295,A=D+(N<<17&4294967295|N>>>15),N=I+(C^A&(D^C))+P[3]+3250441966&4294967295,I=A+(N<<22&4294967295|N>>>10),N=C+(D^I&(A^D))+P[4]+4118548399&4294967295,C=I+(N<<7&4294967295|N>>>25),N=D+(A^C&(I^A))+P[5]+1200080426&4294967295,D=C+(N<<12&4294967295|N>>>20),N=A+(I^D&(C^I))+P[6]+2821735955&4294967295,A=D+(N<<17&4294967295|N>>>15),N=I+(C^A&(D^C))+P[7]+4249261313&4294967295,I=A+(N<<22&4294967295|N>>>10),N=C+(D^I&(A^D))+P[8]+1770035416&4294967295,C=I+(N<<7&4294967295|N>>>25),N=D+(A^C&(I^A))+P[9]+2336552879&4294967295,D=C+(N<<12&4294967295|N>>>20),N=A+(I^D&(C^I))+P[10]+4294925233&4294967295,A=D+(N<<17&4294967295|N>>>15),N=I+(C^A&(D^C))+P[11]+2304563134&4294967295,I=A+(N<<22&4294967295|N>>>10),N=C+(D^I&(A^D))+P[12]+1804603682&4294967295,C=I+(N<<7&4294967295|N>>>25),N=D+(A^C&(I^A))+P[13]+4254626195&4294967295,D=C+(N<<12&4294967295|N>>>20),N=A+(I^D&(C^I))+P[14]+2792965006&4294967295,A=D+(N<<17&4294967295|N>>>15),N=I+(C^A&(D^C))+P[15]+1236535329&4294967295,I=A+(N<<22&4294967295|N>>>10),N=C+(A^D&(I^A))+P[1]+4129170786&4294967295,C=I+(N<<5&4294967295|N>>>27),N=D+(I^A&(C^I))+P[6]+3225465664&4294967295,D=C+(N<<9&4294967295|N>>>23),N=A+(C^I&(D^C))+P[11]+643717713&4294967295,A=D+(N<<14&4294967295|N>>>18),N=I+(D^C&(A^D))+P[0]+3921069994&4294967295,I=A+(N<<20&4294967295|N>>>12),N=C+(A^D&(I^A))+P[5]+3593408605&4294967295,C=I+(N<<5&4294967295|N>>>27),N=D+(I^A&(C^I))+P[10]+38016083&4294967295,D=C+(N<<9&4294967295|N>>>23),N=A+(C^I&(D^C))+P[15]+3634488961&4294967295,A=D+(N<<14&4294967295|N>>>18),N=I+(D^C&(A^D))+P[4]+3889429448&4294967295,I=A+(N<<20&4294967295|N>>>12),N=C+(A^D&(I^A))+P[9]+568446438&4294967295,C=I+(N<<5&4294967295|N>>>27),N=D+(I^A&(C^I))+P[14]+3275163606&4294967295,D=C+(N<<9&4294967295|N>>>23),N=A+(C^I&(D^C))+P[3]+4107603335&4294967295,A=D+(N<<14&4294967295|N>>>18),N=I+(D^C&(A^D))+P[8]+1163531501&4294967295,I=A+(N<<20&4294967295|N>>>12),N=C+(A^D&(I^A))+P[13]+2850285829&4294967295,C=I+(N<<5&4294967295|N>>>27),N=D+(I^A&(C^I))+P[2]+4243563512&4294967295,D=C+(N<<9&4294967295|N>>>23),N=A+(C^I&(D^C))+P[7]+1735328473&4294967295,A=D+(N<<14&4294967295|N>>>18),N=I+(D^C&(A^D))+P[12]+2368359562&4294967295,I=A+(N<<20&4294967295|N>>>12),N=C+(I^A^D)+P[5]+4294588738&4294967295,C=I+(N<<4&4294967295|N>>>28),N=D+(C^I^A)+P[8]+2272392833&4294967295,D=C+(N<<11&4294967295|N>>>21),N=A+(D^C^I)+P[11]+1839030562&4294967295,A=D+(N<<16&4294967295|N>>>16),N=I+(A^D^C)+P[14]+4259657740&4294967295,I=A+(N<<23&4294967295|N>>>9),N=C+(I^A^D)+P[1]+2763975236&4294967295,C=I+(N<<4&4294967295|N>>>28),N=D+(C^I^A)+P[4]+1272893353&4294967295,D=C+(N<<11&4294967295|N>>>21),N=A+(D^C^I)+P[7]+4139469664&4294967295,A=D+(N<<16&4294967295|N>>>16),N=I+(A^D^C)+P[10]+3200236656&4294967295,I=A+(N<<23&4294967295|N>>>9),N=C+(I^A^D)+P[13]+681279174&4294967295,C=I+(N<<4&4294967295|N>>>28),N=D+(C^I^A)+P[0]+3936430074&4294967295,D=C+(N<<11&4294967295|N>>>21),N=A+(D^C^I)+P[3]+3572445317&4294967295,A=D+(N<<16&4294967295|N>>>16),N=I+(A^D^C)+P[6]+76029189&4294967295,I=A+(N<<23&4294967295|N>>>9),N=C+(I^A^D)+P[9]+3654602809&4294967295,C=I+(N<<4&4294967295|N>>>28),N=D+(C^I^A)+P[12]+3873151461&4294967295,D=C+(N<<11&4294967295|N>>>21),N=A+(D^C^I)+P[15]+530742520&4294967295,A=D+(N<<16&4294967295|N>>>16),N=I+(A^D^C)+P[2]+3299628645&4294967295,I=A+(N<<23&4294967295|N>>>9),N=C+(A^(I|~D))+P[0]+4096336452&4294967295,C=I+(N<<6&4294967295|N>>>26),N=D+(I^(C|~A))+P[7]+1126891415&4294967295,D=C+(N<<10&4294967295|N>>>22),N=A+(C^(D|~I))+P[14]+2878612391&4294967295,A=D+(N<<15&4294967295|N>>>17),N=I+(D^(A|~C))+P[5]+4237533241&4294967295,I=A+(N<<21&4294967295|N>>>11),N=C+(A^(I|~D))+P[12]+1700485571&4294967295,C=I+(N<<6&4294967295|N>>>26),N=D+(I^(C|~A))+P[3]+2399980690&4294967295,D=C+(N<<10&4294967295|N>>>22),N=A+(C^(D|~I))+P[10]+4293915773&4294967295,A=D+(N<<15&4294967295|N>>>17),N=I+(D^(A|~C))+P[1]+2240044497&4294967295,I=A+(N<<21&4294967295|N>>>11),N=C+(A^(I|~D))+P[8]+1873313359&4294967295,C=I+(N<<6&4294967295|N>>>26),N=D+(I^(C|~A))+P[15]+4264355552&4294967295,D=C+(N<<10&4294967295|N>>>22),N=A+(C^(D|~I))+P[6]+2734768916&4294967295,A=D+(N<<15&4294967295|N>>>17),N=I+(D^(A|~C))+P[13]+1309151649&4294967295,I=A+(N<<21&4294967295|N>>>11),N=C+(A^(I|~D))+P[4]+4149444226&4294967295,C=I+(N<<6&4294967295|N>>>26),N=D+(I^(C|~A))+P[11]+3174756917&4294967295,D=C+(N<<10&4294967295|N>>>22),N=A+(C^(D|~I))+P[2]+718787259&4294967295,A=D+(N<<15&4294967295|N>>>17),N=I+(D^(A|~C))+P[9]+3951481745&4294967295,b.g[0]=b.g[0]+C&4294967295,b.g[1]=b.g[1]+(A+(N<<21&4294967295|N>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+D&4294967295}s.prototype.u=function(b,C){C===void 0&&(C=b.length);for(var I=C-this.blockSize,P=this.B,A=this.h,D=0;D<C;){if(A==0)for(;D<=I;)l(this,b,D),D+=this.blockSize;if(typeof b=="string"){for(;D<C;)if(P[A++]=b.charCodeAt(D++),A==this.blockSize){l(this,P),A=0;break}}else for(;D<C;)if(P[A++]=b[D++],A==this.blockSize){l(this,P),A=0;break}}this.h=A,this.o+=C},s.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var C=1;C<b.length-8;++C)b[C]=0;var I=8*this.o;for(C=b.length-8;C<b.length;++C)b[C]=I&255,I/=256;for(this.u(b),b=Array(16),C=I=0;4>C;++C)for(var P=0;32>P;P+=8)b[I++]=this.g[C]>>>P&255;return b};function c(b,C){var I=m;return Object.prototype.hasOwnProperty.call(I,b)?I[b]:I[b]=C(b)}function h(b,C){this.h=C;for(var I=[],P=!0,A=b.length-1;0<=A;A--){var D=b[A]|0;P&&D==C||(I[A]=D,P=!1)}this.g=I}var m={};function v(b){return-128<=b&&128>b?c(b,function(C){return new h([C|0],0>C?-1:0)}):new h([b|0],0>b?-1:0)}function w(b){if(isNaN(b)||!isFinite(b))return E;if(0>b)return $(w(-b));for(var C=[],I=1,P=0;b>=I;P++)C[P]=b/I|0,I*=4294967296;return new h(C,0)}function k(b,C){if(b.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(b.charAt(0)=="-")return $(k(b.substring(1),C));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=w(Math.pow(C,8)),P=E,A=0;A<b.length;A+=8){var D=Math.min(8,b.length-A),N=parseInt(b.substring(A,A+D),C);8>D?(D=w(Math.pow(C,D)),P=P.j(D).add(w(N))):(P=P.j(I),P=P.add(w(N)))}return P}var E=v(0),S=v(1),U=v(16777216);r=h.prototype,r.m=function(){if(G(this))return-$(this).m();for(var b=0,C=1,I=0;I<this.g.length;I++){var P=this.i(I);b+=(0<=P?P:4294967296+P)*C,C*=4294967296}return b},r.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(B(this))return"0";if(G(this))return"-"+$(this).toString(b);for(var C=w(Math.pow(b,6)),I=this,P="";;){var A=he(I,C).g;I=de(I,A.j(C));var D=((0<I.g.length?I.g[0]:I.h)>>>0).toString(b);if(I=A,B(I))return D+P;for(;6>D.length;)D="0"+D;P=D+P}},r.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function B(b){if(b.h!=0)return!1;for(var C=0;C<b.g.length;C++)if(b.g[C]!=0)return!1;return!0}function G(b){return b.h==-1}r.l=function(b){return b=de(this,b),G(b)?-1:B(b)?0:1};function $(b){for(var C=b.g.length,I=[],P=0;P<C;P++)I[P]=~b.g[P];return new h(I,~b.h).add(S)}r.abs=function(){return G(this)?$(this):this},r.add=function(b){for(var C=Math.max(this.g.length,b.g.length),I=[],P=0,A=0;A<=C;A++){var D=P+(this.i(A)&65535)+(b.i(A)&65535),N=(D>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);P=N>>>16,D&=65535,N&=65535,I[A]=N<<16|D}return new h(I,I[I.length-1]&-2147483648?-1:0)};function de(b,C){return b.add($(C))}r.j=function(b){if(B(this)||B(b))return E;if(G(this))return G(b)?$(this).j($(b)):$($(this).j(b));if(G(b))return $(this.j($(b)));if(0>this.l(U)&&0>b.l(U))return w(this.m()*b.m());for(var C=this.g.length+b.g.length,I=[],P=0;P<2*C;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(var A=0;A<b.g.length;A++){var D=this.i(P)>>>16,N=this.i(P)&65535,We=b.i(A)>>>16,fe=b.i(A)&65535;I[2*P+2*A]+=N*fe,q(I,2*P+2*A),I[2*P+2*A+1]+=D*fe,q(I,2*P+2*A+1),I[2*P+2*A+1]+=N*We,q(I,2*P+2*A+1),I[2*P+2*A+2]+=D*We,q(I,2*P+2*A+2)}for(P=0;P<C;P++)I[P]=I[2*P+1]<<16|I[2*P];for(P=C;P<2*C;P++)I[P]=0;return new h(I,0)};function q(b,C){for(;(b[C]&65535)!=b[C];)b[C+1]+=b[C]>>>16,b[C]&=65535,C++}function ce(b,C){this.g=b,this.h=C}function he(b,C){if(B(C))throw Error("division by zero");if(B(b))return new ce(E,E);if(G(b))return C=he($(b),C),new ce($(C.g),$(C.h));if(G(C))return C=he(b,$(C)),new ce($(C.g),C.h);if(30<b.g.length){if(G(b)||G(C))throw Error("slowDivide_ only works with positive integers.");for(var I=S,P=C;0>=P.l(b);)I=we(I),P=we(P);var A=W(I,1),D=W(P,1);for(P=W(P,2),I=W(I,2);!B(P);){var N=D.add(P);0>=N.l(b)&&(A=A.add(I),D=N),P=W(P,1),I=W(I,1)}return C=de(b,A.j(C)),new ce(A,C)}for(A=E;0<=b.l(C);){for(I=Math.max(1,Math.floor(b.m()/C.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),D=w(I),N=D.j(C);G(N)||0<N.l(b);)I-=P,D=w(I),N=D.j(C);B(D)&&(D=S),A=A.add(D),b=de(b,N)}return new ce(A,b)}r.A=function(b){return he(this,b).h},r.and=function(b){for(var C=Math.max(this.g.length,b.g.length),I=[],P=0;P<C;P++)I[P]=this.i(P)&b.i(P);return new h(I,this.h&b.h)},r.or=function(b){for(var C=Math.max(this.g.length,b.g.length),I=[],P=0;P<C;P++)I[P]=this.i(P)|b.i(P);return new h(I,this.h|b.h)},r.xor=function(b){for(var C=Math.max(this.g.length,b.g.length),I=[],P=0;P<C;P++)I[P]=this.i(P)^b.i(P);return new h(I,this.h^b.h)};function we(b){for(var C=b.g.length+1,I=[],P=0;P<C;P++)I[P]=b.i(P)<<1|b.i(P-1)>>>31;return new h(I,b.h)}function W(b,C){var I=C>>5;C%=32;for(var P=b.g.length-I,A=[],D=0;D<P;D++)A[D]=0<C?b.i(D+I)>>>C|b.i(D+I+1)<<32-C:b.i(D+I);return new h(A,b.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=w,h.fromString=k,Jf=h}).apply(typeof Fy<"u"?Fy:typeof self<"u"?self:typeof window<"u"?window:{});var bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,y){return a==Array.prototype||a==Object.prototype||(a[f]=y.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof bu=="object"&&bu];for(var f=0;f<a.length;++f){var y=a[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function l(a,f){if(f)e:{var y=s;a=a.split(".");for(var x=0;x<a.length-1;x++){var L=a[x];if(!(L in y))break e;y=y[L]}a=a[a.length-1],x=y[a],f=f(x),f!=x&&f!=null&&e(y,a,{configurable:!0,writable:!0,value:f})}}function c(a,f){a instanceof String&&(a+="");var y=0,x=!1,L={next:function(){if(!x&&y<a.length){var V=y++;return{value:f(V,a[V]),done:!1}}return x=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}l("Array.prototype.values",function(a){return a||function(){return c(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function v(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function w(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function k(a,f,y){return a.call.apply(a.bind,arguments)}function E(a,f,y){if(!a)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,x),a.apply(f,L)}}return function(){return a.apply(f,arguments)}}function S(a,f,y){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:E,S.apply(null,arguments)}function U(a,f){var y=Array.prototype.slice.call(arguments,1);return function(){var x=y.slice();return x.push.apply(x,arguments),a.apply(this,x)}}function B(a,f){function y(){}y.prototype=f.prototype,a.aa=f.prototype,a.prototype=new y,a.prototype.constructor=a,a.Qb=function(x,L,V){for(var ee=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)ee[Ve-2]=arguments[Ve];return f.prototype[L].apply(x,ee)}}function G(a){const f=a.length;if(0<f){const y=Array(f);for(let x=0;x<f;x++)y[x]=a[x];return y}return[]}function $(a,f){for(let y=1;y<arguments.length;y++){const x=arguments[y];if(v(x)){const L=a.length||0,V=x.length||0;a.length=L+V;for(let ee=0;ee<V;ee++)a[L+ee]=x[ee]}else a.push(x)}}class de{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function q(a){return/^[\s\xa0]*$/.test(a)}function ce(){var a=m.navigator;return a&&(a=a.userAgent)?a:""}function he(a){return he[" "](a),a}he[" "]=function(){};var we=ce().indexOf("Gecko")!=-1&&!(ce().toLowerCase().indexOf("webkit")!=-1&&ce().indexOf("Edge")==-1)&&!(ce().indexOf("Trident")!=-1||ce().indexOf("MSIE")!=-1)&&ce().indexOf("Edge")==-1;function W(a,f,y){for(const x in a)f.call(y,a[x],x,a)}function b(a,f){for(const y in a)f.call(void 0,a[y],y,a)}function C(a){const f={};for(const y in a)f[y]=a[y];return f}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(a,f){let y,x;for(let L=1;L<arguments.length;L++){x=arguments[L];for(y in x)a[y]=x[y];for(let V=0;V<I.length;V++)y=I[V],Object.prototype.hasOwnProperty.call(x,y)&&(a[y]=x[y])}}function A(a){var f=1;a=a.split(":");const y=[];for(;0<f&&a.length;)y.push(a.shift()),f--;return a.length&&y.push(a.join(":")),y}function D(a){m.setTimeout(()=>{throw a},0)}function N(){var a=se;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class We{constructor(){this.h=this.g=null}add(f,y){const x=fe.get();x.set(f,y),this.h?this.h.next=x:this.g=x,this.h=x}}var fe=new de(()=>new Ee,a=>a.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,Q=!1,se=new We,ne=()=>{const a=m.Promise.resolve(void 0);ge=()=>{a.then(j)}};var j=()=>{for(var a;a=N();){try{a.h.call(a.g)}catch(y){D(y)}var f=fe;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}Q=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var xe=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return a}();function Se(a,f){if(te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var y=this.type=a.type,x=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(we){e:{try{he(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=a.fromElement:y=="mouseout"&&(f=a.toElement);this.relatedTarget=f,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:be[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Se.aa.h.call(this)}}B(Se,te);var be={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(a,f,y,x,L){this.listener=a,this.proxy=null,this.src=f,this.type=y,this.capture=!!x,this.ha=L,this.key=++Fe,this.da=this.fa=!1}function mt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function rr(a){this.src=a,this.g={},this.h=0}rr.prototype.add=function(a,f,y,x,L){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var ee=Or(a,f,x,L);return-1<ee?(f=a[ee],y||(f.fa=!1)):(f=new $e(f,this.src,V,!!x,L),f.fa=y,a.push(f)),f};function hs(a,f){var y=f.type;if(y in a.g){var x=a.g[y],L=Array.prototype.indexOf.call(x,f,void 0),V;(V=0<=L)&&Array.prototype.splice.call(x,L,1),V&&(mt(f),a.g[y].length==0&&(delete a.g[y],a.h--))}}function Or(a,f,y,x){for(var L=0;L<a.length;++L){var V=a[L];if(!V.da&&V.listener==f&&V.capture==!!y&&V.ha==x)return L}return-1}var vi="closure_lm_"+(1e6*Math.random()|0),ds={};function No(a,f,y,x,L){if(Array.isArray(f)){for(var V=0;V<f.length;V++)No(a,f[V],y,x,L);return null}return y=Ao(y),a&&a[Me]?a.K(f,y,w(x)?!!x.capture:!1,L):bo(a,f,y,!1,x,L)}function bo(a,f,y,x,L,V){if(!f)throw Error("Invalid event type");var ee=w(L)?!!L.capture:!!L,Ve=ps(a);if(Ve||(a[vi]=Ve=new rr(a)),y=Ve.add(f,y,x,ee,V),y.proxy)return y;if(x=ca(),y.proxy=x,x.src=a,x.listener=y,a.addEventListener)xe||(L=ee),L===void 0&&(L=!1),a.addEventListener(f.toString(),x,L);else if(a.attachEvent)a.attachEvent(sr(f.toString()),x);else if(a.addListener&&a.removeListener)a.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ca(){function a(y){return f.call(a.src,a.listener,y)}const f=Ro;return a}function fs(a,f,y,x,L){if(Array.isArray(f))for(var V=0;V<f.length;V++)fs(a,f[V],y,x,L);else x=w(x)?!!x.capture:!!x,y=Ao(y),a&&a[Me]?(a=a.i,f=String(f).toString(),f in a.g&&(V=a.g[f],y=Or(V,y,x,L),-1<y&&(mt(V[y]),Array.prototype.splice.call(V,y,1),V.length==0&&(delete a.g[f],a.h--)))):a&&(a=ps(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Or(f,y,x,L)),(y=-1<a?f[a]:null)&&ir(y))}function ir(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[Me])hs(f.i,a);else{var y=a.type,x=a.proxy;f.removeEventListener?f.removeEventListener(y,x,a.capture):f.detachEvent?f.detachEvent(sr(y),x):f.addListener&&f.removeListener&&f.removeListener(x),(y=ps(f))?(hs(y,a),y.h==0&&(y.src=null,f[vi]=null)):mt(a)}}}function sr(a){return a in ds?ds[a]:ds[a]="on"+a}function Ro(a,f){if(a.da)a=!0;else{f=new Se(f,this);var y=a.listener,x=a.ha||a.src;a.fa&&ir(a),a=y.call(x,f)}return a}function ps(a){return a=a[vi],a instanceof rr?a:null}var ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ao(a){return typeof a=="function"?a:(a[ms]||(a[ms]=function(f){return a.handleEvent(f)}),a[ms])}function ct(){H.call(this),this.i=new rr(this),this.M=this,this.F=null}B(ct,H),ct.prototype[Me]=!0,ct.prototype.removeEventListener=function(a,f,y,x){fs(this,a,f,y,x)};function ht(a,f){var y,x=a.F;if(x)for(y=[];x;x=x.F)y.push(x);if(a=a.M,x=f.type||f,typeof f=="string")f=new te(f,a);else if(f instanceof te)f.target=f.target||a;else{var L=f;f=new te(x,a),P(f,L)}if(L=!0,y)for(var V=y.length-1;0<=V;V--){var ee=f.g=y[V];L=or(ee,x,!0,f)&&L}if(ee=f.g=a,L=or(ee,x,!0,f)&&L,L=or(ee,x,!1,f)&&L,y)for(V=0;V<y.length;V++)ee=f.g=y[V],L=or(ee,x,!1,f)&&L}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var y=a.g[f],x=0;x<y.length;x++)mt(y[x]);delete a.g[f],a.h--}}this.F=null},ct.prototype.K=function(a,f,y,x){return this.i.add(String(a),f,!1,y,x)},ct.prototype.L=function(a,f,y,x){return this.i.add(String(a),f,!0,y,x)};function or(a,f,y,x){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,V=0;V<f.length;++V){var ee=f[V];if(ee&&!ee.da&&ee.capture==y){var Ve=ee.listener,dt=ee.ha||ee.src;ee.fa&&hs(a.i,ee),L=Ve.call(dt,x)!==!1&&L}}return L&&!x.defaultPrevented}function Po(a,f,y){if(typeof a=="function")y&&(a=S(a,y));else if(a&&typeof a.handleEvent=="function")a=S(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(a,f||0)}function Dr(a){a.g=Po(()=>{a.g=null,a.i&&(a.i=!1,Dr(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class _i extends H{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Dr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wi(a){H.call(this),this.h=a,this.g={}}B(wi,H);var Oo=[];function Do(a){W(a.g,function(f,y){this.g.hasOwnProperty(y)&&ir(f)},a),a.g={}}wi.prototype.N=function(){wi.aa.N.call(this),Do(this)},wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jo=m.JSON.stringify,Lo=m.JSON.parse,Mo=class{stringify(a){return m.JSON.stringify(a,void 0)}parse(a){return m.JSON.parse(a,void 0)}};function xi(){}xi.prototype.h=null;function gs(a){return a.h||(a.h=a.i())}function Fo(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){te.call(this,"d")}B(Un,te);function ys(){te.call(this,"c")}B(ys,te);var lr={},Uo=null;function vs(){return Uo=Uo||new ct}lr.La="serverreachability";function zo(a){te.call(this,lr.La,a)}B(zo,te);function ar(a){const f=vs();ht(f,new zo(f))}lr.STAT_EVENT="statevent";function Vo(a,f){te.call(this,lr.STAT_EVENT,a),this.stat=f}B(Vo,te);function ot(a){const f=vs();ht(f,new Vo(f,a))}lr.Ma="timingevent";function _s(a,f){te.call(this,lr.Ma,a),this.size=f}B(_s,te);function gn(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},f)}function Ei(){this.g=!0}Ei.prototype.xa=function(){this.g=!1};function Si(a,f,y,x,L,V){a.info(function(){if(a.g)if(V)for(var ee="",Ve=V.split("&"),dt=0;dt<Ve.length;dt++){var Re=Ve[dt].split("=");if(1<Re.length){var gt=Re[0];Re=Re[1];var yt=gt.split("_");ee=2<=yt.length&&yt[1]=="type"?ee+(gt+"="+Re+"&"):ee+(gt+"=redacted&")}}else ee=null;else ee=V;return"XMLHTTP REQ ("+x+") [attempt "+L+"]: "+f+`
`+y+`
`+ee})}function ws(a,f,y,x,L,V,ee){a.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+L+"]: "+f+`
`+y+`
`+V+" "+ee})}function yn(a,f,y,x){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Cc(a,y)+(x?" "+x:"")})}function Bo(a,f){a.info(function(){return"TIMEOUT: "+f})}Ei.prototype.info=function(){};function Cc(a,f){if(!a.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(a=0;a<y.length;a++)if(Array.isArray(y[a])){var x=y[a];if(!(2>x.length)){var L=x[1];if(Array.isArray(L)&&!(1>L.length)){var V=L[0];if(V!="noop"&&V!="stop"&&V!="close")for(var ee=1;ee<L.length;ee++)L[ee]=""}}}}return jo(y)}catch{return f}}var Ho={NO_ERROR:0,TIMEOUT:8},Tc={},vn;function ki(){}B(ki,xi),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},vn=new ki;function _n(a,f,y,x){this.j=a,this.i=f,this.l=y,this.R=x||1,this.U=new wi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ha}function ha(){this.i=null,this.g="",this.h=!1}var Wo={},xs={};function Es(a,f,y){a.L=1,a.v=Ur(en(f)),a.m=y,a.P=!0,$o(a,null)}function $o(a,f){a.F=Date.now(),Ge(a),a.A=en(a.v);var y=a.A,x=a.R;Array.isArray(x)||(x=[String(x)]),Vr(y.i,"t",x),a.C=0,y=a.j.J,a.h=new ha,a.g=ba(a.j,y?f:null,!a.m),0<a.O&&(a.M=new _i(S(a.Y,a,a.g),a.O)),f=a.U,y=a.g,x=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(Oo[0]=L.toString()),L=Oo);for(var V=0;V<L.length;V++){var ee=No(y,L[V],x||f.handleEvent,!1,f.h||f);if(!ee)break;f.g[ee.key]=ee}f=a.H?C(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),ar(),Si(a.i,a.u,a.A,a.l,a.R,a.m)}_n.prototype.ca=function(a){a=a.target;const f=this.M;f&&Bt(a)==3?f.j():this.Y(a)},_n.prototype.Y=function(a){try{if(a==this.g)e:{const yt=Bt(this.g);var f=this.g.Ba();const Wn=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Xo(this.g)))){this.J||yt!=4||f==7||(f==8||0>=Wn?ar(3):ar(2)),Ci(this);var y=this.g.Z();this.X=y;t:if(da(this)){var x=Xo(this.g);a="";var L=x.length,V=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),jr(this);var ee="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,a+=this.h.i.decode(x[f],{stream:!(V&&f==L-1)});x.length=0,this.h.g+=a,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=y==200,ws(this.i,this.u,this.A,this.l,this.R,yt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,dt=this.g;if((Ve=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Ve)){var Re=Ve;break t}}Re=null}if(y=Re)yn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Go(this,y);else{this.o=!1,this.s=3,ot(12),ln(this),jr(this);break e}}if(this.P){y=!0;let Tt;for(;!this.J&&this.C<ee.length;)if(Tt=Ic(this,ee),Tt==xs){yt==4&&(this.s=4,ot(14),y=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==Wo){this.s=4,ot(15),yn(this.i,this.l,ee,"[Invalid Chunk]"),y=!1;break}else yn(this.i,this.l,Tt,null),Go(this,Tt);if(da(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||ee.length!=0||this.h.h||(this.s=1,ot(16),y=!1),this.o=this.o&&y,!y)yn(this.i,this.l,ee,"[Invalid Chunked Response]"),ln(this),jr(this);else if(0<ee.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),Zo(gt),gt.M=!0,ot(11))}}else yn(this.i,this.l,ee,null),Go(this,ee);yt==4&&ln(this),this.o&&!this.J&&(yt==4?Os(this.j,this):(this.o=!1,Ge(this)))}else Ns(this.g),y==400&&0<ee.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),ln(this),jr(this)}}}catch{}finally{}};function da(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ic(a,f){var y=a.C,x=f.indexOf(`
`,y);return x==-1?xs:(y=Number(f.substring(y,x)),isNaN(y)?Wo:(x+=1,x+y>f.length?xs:(f=f.slice(x,x+y),a.C=x+y,f)))}_n.prototype.cancel=function(){this.J=!0,ln(this)};function Ge(a){a.S=Date.now()+a.I,fa(a,a.I)}function fa(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=gn(S(a.ba,a),f)}function Ci(a){a.B&&(m.clearTimeout(a.B),a.B=null)}_n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Bo(this.i,this.A),this.L!=2&&(ar(),ot(17)),ln(this),this.s=2,jr(this)):fa(this,this.S-a)};function jr(a){a.j.G==0||a.J||Os(a.j,a)}function ln(a){Ci(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Do(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Go(a,f){try{var y=a.j;if(y.G!=0&&(y.g==a||Lt(y.h,a))){if(!a.K&&Lt(y.h,a)&&y.G==3){try{var x=y.Da.g.parse(f)}catch{x=null}if(Array.isArray(x)&&x.length==3){var L=x;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<a.F)Ps(y),kn(y);else break e;As(y),ot(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=gn(S(y.Za,y),6e3));if(1>=ma(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else fr(y,11)}else if((a.K||y.g==a)&&Ps(y),!q(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let Re=L[f];if(y.T=Re[0],Re=Re[1],y.G==2)if(Re[0]=="c"){y.K=Re[1],y.ia=Re[2];const gt=Re[3];gt!=null&&(y.la=gt,y.j.info("VER="+y.la));const yt=Re[4];yt!=null&&(y.Aa=yt,y.j.info("SVER="+y.Aa));const Wn=Re[5];Wn!=null&&typeof Wn=="number"&&0<Wn&&(x=1.5*Wn,y.L=x,y.j.info("backChannelRequestTimeoutMs_="+x)),x=y;const Tt=a.g;if(Tt){const Ds=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ds){var V=x.h;V.g||Ds.indexOf("spdy")==-1&&Ds.indexOf("quic")==-1&&Ds.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(qo(V,V.h),V.h=null))}if(x.D){const js=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;js&&(x.ya=js,He(x.I,x.D,js))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-a.F,y.j.info("Handshake RTT: "+y.R+"ms")),x=y;var ee=a;if(x.qa=Na(x,x.J?x.ia:null,x.W),ee.K){ga(x.h,ee);var Ve=ee,dt=x.L;dt&&(Ve.I=dt),Ve.B&&(Ci(Ve),Ge(Ve)),x.g=ee}else Ai(x);0<y.i.length&&Hn(y)}else Re[0]!="stop"&&Re[0]!="close"||fr(y,7);else y.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?fr(y,7):Ct(y):Re[0]!="noop"&&y.l&&y.l.ta(Re),y.v=0)}}ar(4)}catch{}}var pa=class{constructor(a,f){this.g=a,this.map=f}};function Ti(a){this.l=a||10,m.PerformanceNavigationTiming?(a=m.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ma(a){return a.h?1:a.g?a.g.size:0}function Lt(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function qo(a,f){a.g?a.g.add(f):a.h=f}function ga(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Ti.prototype.cancel=function(){if(this.i=ya(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ya(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const y of a.g.values())f=f.concat(y.D);return f}return G(a.i)}function Ss(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(v(a)){for(var f=[],y=a.length,x=0;x<y;x++)f.push(a[x]);return f}f=[],y=0;for(x in a)f[y++]=a[x];return f}function ks(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(v(a)||typeof a=="string"){var f=[];a=a.length;for(var y=0;y<a;y++)f.push(y);return f}f=[],y=0;for(const x in a)f[y++]=x;return f}}}function Lr(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(v(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var y=ks(a),x=Ss(a),L=x.length,V=0;V<L;V++)f.call(void 0,x[V],y&&y[V],a)}var Ii=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nc(a,f){if(a){a=a.split("&");for(var y=0;y<a.length;y++){var x=a[y].indexOf("="),L=null;if(0<=x){var V=a[y].substring(0,x);L=a[y].substring(x+1)}else V=a[y];f(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ur){this.h=a.h,Ni(this,a.j),this.o=a.o,this.g=a.g,Mr(this,a.s),this.l=a.l;var f=a.i,y=new zn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Fr(this,y),this.m=a.m}else a&&(f=String(a).match(Ii))?(this.h=!1,Ni(this,f[1]||"",!0),this.o=Ne(f[2]||""),this.g=Ne(f[3]||"",!0),Mr(this,f[4]),this.l=Ne(f[5]||"",!0),Fr(this,f[6]||"",!0),this.m=Ne(f[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}ur.prototype.toString=function(){var a=[],f=this.j;f&&a.push(zr(f,Cs,!0),":");var y=this.g;return(y||f=="file")&&(a.push("//"),(f=this.o)&&a.push(zr(f,Cs,!0),"@"),a.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&a.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&a.push("/"),a.push(zr(y,y.charAt(0)=="/"?wa:_a,!0))),(y=this.i.toString())&&a.push("?",y),(y=this.m)&&a.push("#",zr(y,Ko)),a.join("")};function en(a){return new ur(a)}function Ni(a,f,y){a.j=y?Ne(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Mr(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Fr(a,f,y){f instanceof zn?(a.i=f,Vn(a.i,a.h)):(y||(f=zr(f,xa)),a.i=new zn(f,a.h))}function He(a,f,y){a.i.set(f,y)}function Ur(a){return He(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ne(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zr(a,f,y){return typeof a=="string"?(a=encodeURI(a).replace(f,va),y&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function va(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cs=/[#\/\?@]/g,_a=/[#\?:]/g,wa=/[#\?]/g,xa=/[#\?@]/g,Ko=/#/g;function zn(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function kt(a){a.g||(a.g=new Map,a.h=0,a.i&&Nc(a.i,function(f,y){a.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=zn.prototype,r.add=function(a,f){kt(this),this.i=null,a=an(this,a);var y=this.g.get(a);return y||this.g.set(a,y=[]),y.push(f),this.h+=1,this};function wn(a,f){kt(a),f=an(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function xn(a,f){return kt(a),f=an(a,f),a.g.has(f)}r.forEach=function(a,f){kt(this),this.g.forEach(function(y,x){y.forEach(function(L){a.call(f,L,x,this)},this)},this)},r.na=function(){kt(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let x=0;x<f.length;x++){const L=a[x];for(let V=0;V<L.length;V++)y.push(f[x])}return y},r.V=function(a){kt(this);let f=[];if(typeof a=="string")xn(this,a)&&(f=f.concat(this.g.get(an(this,a))));else{a=Array.from(this.g.values());for(let y=0;y<a.length;y++)f=f.concat(a[y])}return f},r.set=function(a,f){return kt(this),this.i=null,a=an(this,a),xn(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},r.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Vr(a,f,y){wn(a,f),0<y.length&&(a.i=null,a.g.set(an(a,f),G(y)),a.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var x=f[y];const V=encodeURIComponent(String(x)),ee=this.V(x);for(x=0;x<ee.length;x++){var L=V;ee[x]!==""&&(L+="="+encodeURIComponent(String(ee[x]))),a.push(L)}}return this.i=a.join("&")};function an(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Vn(a,f){f&&!a.j&&(kt(a),a.i=null,a.g.forEach(function(y,x){var L=x.toLowerCase();x!=L&&(wn(this,x),Vr(this,L,y))},a)),a.j=f}function bc(a,f){const y=new Ei;if(m.Image){const x=new Image;x.onload=U(Vt,y,"TestLoadImage: loaded",!0,f,x),x.onerror=U(Vt,y,"TestLoadImage: error",!1,f,x),x.onabort=U(Vt,y,"TestLoadImage: abort",!1,f,x),x.ontimeout=U(Vt,y,"TestLoadImage: timeout",!1,f,x),m.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=a}else f(!1)}function Ea(a,f){const y=new Ei,x=new AbortController,L=setTimeout(()=>{x.abort(),Vt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:x.signal}).then(V=>{clearTimeout(L),V.ok?Vt(y,"TestPingServer: ok",!0,f):Vt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Vt(y,"TestPingServer: error",!1,f)})}function Vt(a,f,y,x,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),x(y)}catch{}}function Rc(){this.g=new Mo}function Sa(a,f,y){const x=y||"";try{Lr(a,function(L,V){let ee=L;w(L)&&(ee=jo(L)),f.push(x+V+"="+encodeURIComponent(ee))})}catch(L){throw f.push(x+"type="+encodeURIComponent("_badmap")),L}}function cr(a){this.l=a.Ub||null,this.j=a.eb||!1}B(cr,xi),cr.prototype.g=function(){return new bi(this.l,this.j)},cr.prototype.i=function(a){return function(){return a}}({});function bi(a,f){ct.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(bi,ct),r=bi.prototype,r.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Sn(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,En(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ka(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ka(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?En(this):Sn(this),this.readyState==3&&ka(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,En(this))},r.Qa=function(a){this.g&&(this.response=a,En(this))},r.ga=function(){this.g&&En(this)};function En(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Sn(a)}r.setRequestHeader=function(a,f){this.u.append(a,f)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,a.push(y[0]+": "+y[1]),y=f.next();return a.join(`\r
`)};function Sn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hr(a){let f="";return W(a,function(y,x){f+=x,f+=":",f+=y,f+=`\r
`}),f}function Br(a,f,y){e:{for(x in y){var x=!1;break e}x=!0}x||(y=hr(y),typeof a=="string"?y!=null&&encodeURIComponent(String(y)):He(a,f,y))}function Ze(a){ct.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Ze,ct);var Ac=/^https?$/i,Yo=["POST","PUT"];r=Ze.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,f,y,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vn.g(),this.v=this.o?gs(this.o):gs(vn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(V){Ri(this,V);return}if(a=y||"",y=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var L in x)y.set(L,x[L]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const V of x.keys())y.set(V,x.get(V));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(y.keys()).find(V=>V.toLowerCase()=="content-type"),L=m.FormData&&a instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Yo,f,void 0))||x||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,ee]of y)this.g.setRequestHeader(V,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Is(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Ri(this,V)}};function Ri(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,Ts(a),tn(a)}function Ts(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ht(this,"complete"),ht(this,"abort"),tn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Ze.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Qo(this):this.bb())},r.bb=function(){Qo(this)};function Qo(a){if(a.h&&typeof h<"u"&&(!a.v[1]||Bt(a)!=4||a.Z()!=2)){if(a.u&&Bt(a)==4)Po(a.Ea,0,a);else if(ht(a,"readystatechange"),Bt(a)==4){a.h=!1;try{const ee=a.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var x;if(x=ee===0){var L=String(a.D).match(Ii)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),x=!Ac.test(L?L.toLowerCase():"")}y=x}if(y)ht(a,"complete"),ht(a,"success");else{a.m=6;try{var V=2<Bt(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Ts(a)}}finally{tn(a)}}}}function tn(a,f){if(a.g){Is(a);const y=a.g,x=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||ht(a,"ready");try{y.onreadystatechange=x}catch{}}}function Is(a){a.I&&(m.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Bt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Lo(f)}};function Xo(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ns(a){const f={};a=(a.g&&2<=Bt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<a.length;x++){if(q(a[x]))continue;var y=A(a[x]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const V=f[L]||[];f[L]=V,V.push(y)}b(f,function(x){return x.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(a,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[a]||f}function Jo(a){this.Aa=0,this.i=[],this.j=new Ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,a),this.cb=Bn("retryDelaySeedMs",1e4,a),this.Wa=Bn("forwardChannelMaxRetries",2,a),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ti(a&&a.concurrentRequestLimit),this.Da=new Rc,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Jo.prototype,r.la=8,r.G=1,r.connect=function(a,f,y,x){ot(0),this.W=a,this.H=f||{},y&&x!==void 0&&(this.H.OSID=y,this.H.OAID=x),this.F=this.X,this.I=Na(this,null,this.W),Hn(this)};function Ct(a){if(bs(a),a.G==3){var f=a.U++,y=en(a.I);if(He(y,"SID",a.K),He(y,"RID",f),He(y,"TYPE","terminate"),dr(a,y),f=new _n(a,a.j,f),f.L=2,f.v=Ur(en(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=ba(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ge(f)}Ia(a)}function kn(a){a.g&&(Zo(a),a.g.cancel(),a.g=null)}function bs(a){kn(a),a.u&&(m.clearTimeout(a.u),a.u=null),Ps(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&m.clearTimeout(a.s),a.s=null)}function Hn(a){if(!Zt(a.h)&&!a.s){a.s=!0;var f=a.Ga;ge||ne(),Q||(ge(),Q=!0),se.add(f,a),a.B=0}}function Pc(a,f){return ma(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=gn(S(a.Ga,a,f),Ta(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new _n(this,this.j,a);let V=this.o;if(this.S&&(V?(V=C(V),P(V,this.S)):V=this.S),this.m!==null||this.O||(L.H=V,V=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var x=this.i[y];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(f+=x,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Hr(this,L,f),y=en(this.I),He(y,"RID",a),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),dr(this,y),V&&(this.O?f="headers="+encodeURIComponent(String(hr(V)))+"&"+f:this.m&&Br(y,this.m,V)),qo(this.h,L),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",f),He(y,"SID","null"),L.T=!0,Es(L,y,null)):Es(L,y,f),this.G=2}}else this.G==3&&(a?Rs(this,a):this.i.length==0||Zt(this.h)||Rs(this))};function Rs(a,f){var y;f?y=f.l:y=a.U++;const x=en(a.I);He(x,"SID",a.K),He(x,"RID",y),He(x,"AID",a.T),dr(a,x),a.m&&a.o&&Br(x,a.m,a.o),y=new _n(a,a.j,y,a.B+1),a.m===null&&(y.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Hr(a,y,1e3),y.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),qo(a.h,y),Es(y,x,f)}function dr(a,f){a.H&&W(a.H,function(y,x){He(f,x,y)}),a.l&&Lr({},function(y,x){He(f,x,y)})}function Hr(a,f,y){y=Math.min(a.i.length,y);var x=a.l?S(a.l.Na,a.l,a):null;e:{var L=a.i;let V=-1;for(;;){const ee=["count="+y];V==-1?0<y?(V=L[0].g,ee.push("ofs="+V)):V=0:ee.push("ofs="+V);let Ve=!0;for(let dt=0;dt<y;dt++){let Re=L[dt].g;const gt=L[dt].map;if(Re-=V,0>Re)V=Math.max(0,L[dt].g-100),Ve=!1;else try{Sa(gt,ee,"req"+Re+"_")}catch{x&&x(gt)}}if(Ve){x=ee.join("&");break e}}}return a=a.i.splice(0,y),f.D=a,x}function Ai(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;ge||ne(),Q||(ge(),Q=!0),se.add(f,a),a.v=0}}function As(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=gn(S(a.Fa,a),Ta(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Ca(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=gn(S(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),kn(this),Ca(this))};function Zo(a){a.A!=null&&(m.clearTimeout(a.A),a.A=null)}function Ca(a){a.g=new _n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=en(a.qa);He(f,"RID","rpc"),He(f,"SID",a.K),He(f,"AID",a.T),He(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&He(f,"TO",a.ja),He(f,"TYPE","xmlhttp"),dr(a,f),a.m&&a.o&&Br(f,a.m,a.o),a.L&&(a.g.I=a.L);var y=a.g;a=a.ia,y.L=1,y.v=Ur(en(f)),y.m=null,y.P=!0,$o(y,a)}r.Za=function(){this.C!=null&&(this.C=null,kn(this),As(this),ot(19))};function Ps(a){a.C!=null&&(m.clearTimeout(a.C),a.C=null)}function Os(a,f){var y=null;if(a.g==f){Ps(a),Zo(a),a.g=null;var x=2}else if(Lt(a.h,f))y=f.D,ga(a.h,f),x=1;else return;if(a.G!=0){if(f.o)if(x==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=a.B;x=vs(),ht(x,new _s(x,y)),Hn(a)}else Ai(a);else if(L=f.s,L==3||L==0&&0<f.X||!(x==1&&Pc(a,f)||x==2&&As(a)))switch(y&&0<y.length&&(f=a.h,f.i=f.i.concat(y)),L){case 1:fr(a,5);break;case 4:fr(a,10);break;case 3:fr(a,6);break;default:fr(a,2)}}}function Ta(a,f){let y=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(y*=2),y*f}function fr(a,f){if(a.j.info("Error code "+f),f==2){var y=S(a.fb,a),x=a.Xa;const L=!x;x=new ur(x||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ni(x,"https"),Ur(x),L?bc(x.toString(),y):Ea(x.toString(),y)}else ot(2);a.G=0,a.l&&a.l.sa(f),Ia(a),bs(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Ia(a){if(a.G=0,a.ka=[],a.l){const f=ya(a.h);(f.length!=0||a.i.length!=0)&&($(a.ka,f),$(a.ka,a.i),a.h.i.length=0,G(a.i),a.i.length=0),a.l.ra()}}function Na(a,f,y){var x=y instanceof ur?en(y):new ur(y);if(x.g!="")f&&(x.g=f+"."+x.g),Mr(x,x.s);else{var L=m.location;x=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var V=new ur(null);x&&Ni(V,x),f&&(V.g=f),L&&Mr(V,L),y&&(V.l=y),x=V}return y=a.D,f=a.ya,y&&f&&He(x,y,f),He(x,"VER",a.la),dr(a,x),x}function ba(a,f,y){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new Ze(new cr({eb:y})):new Ze(a.pa),f.Ha(a.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function el(){}r=el.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ht(a,f){ct.call(this),this.g=new Jo(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!q(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!q(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Wr(this)}B(Ht,ct),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Ct(this.g)},Ht.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var y={};y.__data__=a,a=y}else this.u&&(y={},y.__data__=jo(a),a=y);f.i.push(new pa(f.Ya++,a)),f.G==3&&Hn(f)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,Ht.aa.N.call(this)};function Ra(a){Un.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const y in f){a=y;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}B(Ra,Un);function Aa(){ys.call(this),this.status=1}B(Aa,ys);function Wr(a){this.g=a}B(Wr,el),Wr.prototype.ua=function(){ht(this.g,"a")},Wr.prototype.ta=function(a){ht(this.g,new Ra(a))},Wr.prototype.sa=function(a){ht(this.g,new Aa)},Wr.prototype.ra=function(){ht(this.g,"b")},Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Ho.NO_ERROR=0,Ho.TIMEOUT=8,Ho.HTTP_ERROR=6,Tc.COMPLETE="complete",Fo.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha}).apply(typeof bu<"u"?bu:typeof self<"u"?self:typeof window<"u"?window:{});const Uy="@firebase/firestore",zy="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new pc("@firebase/firestore");function Ln(r,...e){if(xo.logLevel<=Ue.DEBUG){const t=e.map(Zf);xo.debug(`Firestore (${aa}): ${r}`,...t)}}function u0(r,...e){if(xo.logLevel<=Ue.ERROR){const t=e.map(Zf);xo.error(`Firestore (${aa}): ${r}`,...t)}}function fT(r,...e){if(xo.logLevel<=Ue.WARN){const t=e.map(Zf);xo.warn(`Firestore (${aa}): ${r}`,...t)}}function Zf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,c0(r,s,t)}function c0(r,e,t){let s=`FIRESTORE (${aa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw u0(s),new Error(s)}function Fl(r,e,t,s){let l="Unexpected state";typeof t=="string"?l=t:s=t,r||c0(e,l,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Oe extends Pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ut.UNAUTHENTICATED))}shutdown(){}}class mT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gT{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fl(this.o===void 0,42304);let s=this.i;const l=v=>this.i!==s?(s=this.i,t(v)):Promise.resolve();let c=new Ul;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ul,e.enqueueRetryable(()=>l(this.currentUser))};const h=()=>{const v=c;e.enqueueRetryable(async()=>{await v.promise,await l(this.currentUser)})},m=v=>{Ln("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(v=>m(v)),setTimeout(()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?m(v):(Ln("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ul)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(Ln("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fl(typeof s.accessToken=="string",31837,{l:s}),new h0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fl(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class yT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class vT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new yT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _T{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fl(this.o===void 0,3512);const s=c=>{c.error!=null&&Ln("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,Ln("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>s(c))};const l=c=>{Ln("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):Ln("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Vy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fl(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Vy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=wT(40);for(let c=0;c<l.length;++c)s.length<20&&l[c]<t&&(s+=e.charAt(l[c]%62))}return s}}function Fn(r,e){return r<e?-1:r>e?1:0}function ST(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),l=e.codePointAt(t);if(s!==l){if(s<128&&l<128)return Fn(s,l);{const c=xT(),h=kT(c.encode(By(r,t)),c.encode(By(e,t)));return h!==0?h:Fn(s,l)}}t+=s>65535?2:1}return Fn(r.length,e.length)}function By(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function kT(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Fn(r[t],e[t]);return Fn(r.length,e.length)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="__name__";class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&Xl(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Xl(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let l=0;l<s;l++){const c=Yn.compareSegments(e.get(l),t.get(l));if(c!==0)return c}return Fn(e.length,t.length)}static compareSegments(e,t){const s=Yn.isNumericId(e),l=Yn.isNumericId(t);return s&&!l?-1:!s&&l?1:s&&l?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):ST(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jf.fromString(e.substring(4,e.length-2))}}class An extends Yn{construct(e,t,s){return new An(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Oe(Pe.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(l=>l.length>0))}return new An(t)}static emptyPath(){return new An([])}}const CT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gi extends Yn{construct(e,t,s){return new Gi(e,t,s)}static isValidIdentifier(e){return CT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gi.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hy}static keyField(){return new Gi([Hy])}static fromServerFormat(e){const t=[];let s="",l=0;const c=()=>{if(s.length===0)throw new Oe(Pe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;l<e.length;){const m=e[l];if(m==="\\"){if(l+1===e.length)throw new Oe(Pe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const v=e[l+1];if(v!=="\\"&&v!=="."&&v!=="`")throw new Oe(Pe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=v,l+=2}else m==="`"?(h=!h,l++):m!=="."||h?(s+=m,l++):(c(),l++)}if(c(),h)throw new Oe(Pe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gi(t)}static emptyPath(){return new Gi([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.path=e}static fromPath(e){return new Qi(An.fromString(e))}static fromName(e){return new Qi(An.fromString(e).popFirst(5))}static empty(){return new Qi(An.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&An.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return An.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Qi(new An(e.slice()))}}function TT(r,e,t,s){if(e===!0&&s===!0)throw new Oe(Pe.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function IT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function NT(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Xl(12329,{type:typeof r})}function bT(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new Oe(Pe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=NT(r);throw new Oe(Pe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(r,e){const t={typeString:r};return e&&(t.value=e),t}function ua(r,e){if(!IT(r))throw new Oe(Pe.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const l=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(l&&typeof h!==l){t=`JSON field '${s}' must be a ${l}.`;break}if(c!==void 0&&h!==c.value){t=`Expected '${s}' field to equal '${c.value}'`;break}}if(t)throw new Oe(Pe.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=-62135596800,$y=1e6;class Qn{static now(){return Qn.fromMillis(Date.now())}static fromDate(e){return Qn.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*$y);return new Qn(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Oe(Pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Oe(Pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Wy)throw new Oe(Pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Oe(Pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$y}_compareTo(e){return this.seconds===e.seconds?Fn(this.nanoseconds,e.nanoseconds):Fn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qn._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ua(e,Qn._jsonSchema))return new Qn(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Wy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qn._jsonSchemaVersion="firestore/timestamp/1.0",Qn._jsonSchema={type:ut("string",Qn._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};function RT(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new AT("Invalid base64 string: "+c):c}}(e);return new os(t)}static fromUint8Array(e){const t=function(l){let c="";for(let h=0;h<l.length;++h)c+=String.fromCharCode(l[h]);return c}(e);return new os(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let l=0;l<t.length;l++)s[l]=t.charCodeAt(l);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}os.EMPTY_BYTE_STRING=new os("");const Wd="(default)";class cc{constructor(e,t){this.projectId=e,this.database=t||Wd}static empty(){return new cc("","")}get isDefaultDatabase(){return this.database===Wd}isEqual(e){return e instanceof cc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,t=null,s=[],l=[],c=null,h="F",m=null,v=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=l,this.limit=c,this.limitType=h,this.startAt=m,this.endAt=v,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function OT(r){return new PT(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gy,Ae;(Ae=Gy||(Gy={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Jf([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=1048576;function vd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,t,s=1e3,l=1.5,c=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=l,this.A_=c,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),l=Math.max(0,t-s);l>0&&Ln("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,l,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t,s,l,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new Ul,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,l,c){const h=Date.now()+s,m=new ep(e,t,h,l,c);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Oe(Pe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var qy,Ky;(Ky=qy||(qy={})).Fa="default",Ky.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="firestore.googleapis.com",Qy=!0;class Xy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Oe(Pe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=d0,this.ssl=Qy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Qy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=DT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jT)throw new Oe(Pe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MT((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new Oe(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new Oe(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new Oe(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,l){return s.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class f0{constructor(e,t,s,l){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Oe(Pe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Oe(Pe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new pT;switch(s.type){case"firstParty":return new vT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Oe(Pe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Yy.get(t);s&&(Ln("ComponentProvider","Removing Datastore"),Yy.delete(t),s.terminate())}(this),Promise.resolve()}}function FT(r,e,t,s={}){var l;r=bT(r,f0);const c=ls(e),h=r._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),v=`${e}:${t}`;c&&(Zd(`https://${v}`),ef("Firestore",!0)),h.host!==d0&&h.host!==v&&fT("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const w=Object.assign(Object.assign({},h),{host:v,ssl:c,emulatorOptions:s});if(!fi(w,m)&&(r._setSettings(w),s.mockUserToken)){let k,E;if(typeof s.mockUserToken=="string")k=s.mockUserToken,E=Ut.MOCK_USER;else{k=gv(s.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new Oe(Pe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Ut(S)}r._authCredentials=new mT(new h0(k,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new tp(this.firestore,e,this._query)}}class Xn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new np(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xn(this.firestore,e,this._key)}toJSON(){return{type:Xn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ua(t,Xn._jsonSchema))return new Xn(e,s||null,new Qi(An.fromString(t.referencePath)))}}Xn._jsonSchemaVersion="firestore/documentReference/1.0",Xn._jsonSchema={type:ut("string",Xn._jsonSchemaVersion),referencePath:ut("string")};class np extends tp{constructor(e,t,s){super(e,t,OT(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xn(this.firestore,null,new Qi(e))}withConverter(e){return new np(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="AsyncQueue";class Zy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new LT(this,"async_queue_retry"),this.oc=()=>{const s=vd();s&&Ln(Jy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=vd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=vd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Ul;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!RT(e))throw e;Ln(Jy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,u0("INTERNAL UNHANDLED ERROR: ",ev(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const l=ep.createAndSchedule(this,e,t,s,c=>this.lc(c));return this.ec.push(l),l}ac(){this.tc&&Xl(47125,{hc:ev(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ev(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class UT extends f0{constructor(e,t,s,l){super(e,t,s,l),this.type="firestore",this._queue=new Zy,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zy(e),this._firestoreClient=void 0,await e}}}function zT(r,e){const t=typeof r=="object"?r:sf(),s=typeof r=="string"?r:Wd,l=mc(t,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=fv("firestore");c&&FT(l,...c)}return l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Er(os.fromBase64String(e))}catch(t){throw new Oe(Pe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Er(os.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Er._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ua(e,Er._jsonSchema))return Er.fromBase64String(e.bytes)}}Er._jsonSchemaVersion="firestore/bytes/1.0",Er._jsonSchema={type:ut("string",Er._jsonSchemaVersion),bytes:ut("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Oe(Pe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gi(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Oe(Pe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Oe(Pe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fn(this._lat,e._lat)||Fn(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ji._jsonSchemaVersion}}static fromJSON(e){if(ua(e,Ji._jsonSchema))return new Ji(e.latitude,e.longitude)}}Ji._jsonSchemaVersion="firestore/geoPoint/1.0",Ji._jsonSchema={type:ut("string",Ji._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,l){if(s.length!==l.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==l[c])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Zi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ua(e,Zi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Zi(e.vectorValues);throw new Oe(Pe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zi._jsonSchemaVersion="firestore/vectorValue/1.0",Zi._jsonSchema={type:ut("string",Zi._jsonSchemaVersion),vectorValues:ut("object")};const VT=new RegExp("[~\\*/\\[\\]]");function BT(r,e,t){if(e.search(VT)>=0)throw tv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new p0(...e.split("."))._internalPath}catch{throw tv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function tv(r,e,t,s,l){let c=`Function ${e}() called with invalid data`;c+=". ";let h="";return new Oe(Pe.INVALID_ARGUMENT,c+r+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,t,s,l,c){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(g0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class HT extends m0{data(){return super.data()}}function g0(r,e){return typeof e=="string"?BT(r,e):e instanceof p0?e._internalPath:e._delegate._internalPath}class Ru{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class po extends m0{constructor(e,t,s,l,c,h){super(e,t,s,l,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(g0("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Oe(Pe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=po._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}po._jsonSchemaVersion="firestore/documentSnapshot/1.0",po._jsonSchema={type:ut("string",po._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class Mu extends po{data(e={}){return super.data(e)}}class zl{constructor(e,t,s,l){this._firestore=e,this._userDataWriter=t,this._snapshot=l,this.metadata=new Ru(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Mu(this._firestore,this._userDataWriter,s.key,s,new Ru(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Oe(Pe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let h=0;return l._snapshot.docChanges.map(m=>{const v=new Mu(l._firestore,l._userDataWriter,m.doc.key,m.doc,new Ru(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);return m.doc,{type:"added",doc:v,oldIndex:-1,newIndex:h++}})}{let h=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(m=>c||m.type!==3).map(m=>{const v=new Mu(l._firestore,l._userDataWriter,m.doc.key,m.doc,new Ru(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);let w=-1,k=-1;return m.type!==0&&(w=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),k=h.indexOf(m.doc.key)),{type:WT(m.type),doc:v,oldIndex:w,newIndex:k}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Oe(Pe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ET.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],l=[];return this.docs.forEach(c=>{c._document!==null&&(t.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function WT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Xl(61501,{type:r})}}zl._jsonSchemaVersion="firestore/querySnapshot/1.0",zl._jsonSchema={type:ut("string",zl._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};(function(e,t=!0){(function(l){aa=l})(as),es(new pi("firestore",(s,{instanceIdentifier:l,options:c})=>{const h=s.getProvider("app").getImmediate(),m=new UT(new gT(s.getProvider("auth-internal")),new _T(h,s.getProvider("app-check-internal")),function(w,k){if(!Object.prototype.hasOwnProperty.apply(w.options,["projectId"]))throw new Oe(Pe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cc(w.options.projectId,k)}(h,l),h);return c=Object.assign({useFetchStreams:t},c),m._setSettings(c),m},"PUBLIC").setMultipleInstances(!0)),Jn(Uy,zy,e),Jn(Uy,zy,"esm2017")})();const $T={apiKey:"AIzaSyCTA3NZsYoSeGskrIL_2isF2aCqLpEsRYc",authDomain:"rbgh-app.firebaseapp.com",databaseURL:"https://rbgh-app-default-rtdb.europe-west1.firebasedatabase.app",projectId:"rbgh-app",storageBucket:"rbgh-app.firebasestorage.app",messagingSenderId:"955092745966",appId:"1:955092745966:web:237adaa1a37752a93ebdff",measurementId:"G-004FZK6EXT"},rp=xv($T);hT(rp);const Au=cC(rp);zT(rp);const GT=({user:r,onClose:e})=>{const t=le.useRef(null);return le.useEffect(()=>{const s=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[e]),g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4",children:g.jsxs("div",{ref:t,className:"bg-bg rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg p-6 relative border border-default",children:[g.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-subtle hover:text-default",children:g.jsx(hc,{className:"w-5 h-5"})}),g.jsx("div",{className:"flex justify-center -mt-16",children:g.jsx("img",{src:r.avatar,alt:`${r.name}'s avatar`,onError:s=>{s.currentTarget.onerror=null,s.currentTarget.style.display="none";const l=s.currentTarget.parentElement;if(l&&!l.querySelector(".fallback-avatar")){const c=document.createElement("span");c.className="fallback-avatar flex items-center justify-center w-32 h-32 rounded-full bg-subtle border-4 border-bg shadow-lg",c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146"/></svg>',l.appendChild(c)}},className:"w-32 h-32 rounded-full border-4 border-bg shadow-lg"})}),g.jsx("h2",{className:"text-xl font-bold text-default mt-4 text-center",children:r.name}),g.jsxs("div",{className:"space-y-2 mt-4",children:[g.jsxs("p",{className:"text-sm text-subtle",children:[g.jsx("strong",{children:"Username:"})," ",r.username]}),g.jsxs("p",{className:"text-sm text-subtle",children:[g.jsx("strong",{children:"Last Check-in:"})," ",r.location," at ",r.checkedInAt.toLocaleString()]}),g.jsxs("p",{className:"text-sm text-subtle",children:[g.jsx("strong",{children:"Email:"})," ",r.email||"N/A"]}),g.jsxs("p",{className:"text-sm text-subtle",children:[g.jsx("strong",{children:"Phone:"})," ",r.phoneNumber||"N/A"]}),g.jsxs("p",{className:"text-sm text-subtle",children:[g.jsx("strong",{children:"Discord:"})," ",r.discordUsername||"N/A"]}),g.jsxs("p",{className:"text-sm text-subtle",children:[g.jsx("strong",{children:"Friends:"})," ",r.friendCount||0]})]})]})})},qT="Left",KT="Right",YT="Up",QT="Down",oo={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},$d={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},nv="mousemove",rv="mouseup",XT="touchend",JT="touchmove",ZT="touchstart";function eI(r,e,t,s){return r>e?t>0?KT:qT:s>0?QT:YT}function iv(r,e){if(e===0)return r;const t=Math.PI/180*e,s=r[0]*Math.cos(t)+r[1]*Math.sin(t),l=r[1]*Math.cos(t)-r[0]*Math.sin(t);return[s,l]}function tI(r,e){const t=k=>{const E="touches"in k;E&&k.touches.length>1||r((S,U)=>{U.trackMouse&&!E&&(document.addEventListener(nv,s),document.addEventListener(rv,h));const{clientX:B,clientY:G}=E?k.touches[0]:k,$=iv([B,G],U.rotationAngle);return U.onTouchStartOrOnMouseDown&&U.onTouchStartOrOnMouseDown({event:k}),Object.assign(Object.assign(Object.assign({},S),$d),{initial:$.slice(),xy:$,start:k.timeStamp||0})})},s=k=>{r((E,S)=>{const U="touches"in k;if(U&&k.touches.length>1)return E;if(k.timeStamp-E.start>S.swipeDuration)return E.swiping?Object.assign(Object.assign({},E),{swiping:!1}):E;const{clientX:B,clientY:G}=U?k.touches[0]:k,[$,de]=iv([B,G],S.rotationAngle),q=$-E.xy[0],ce=de-E.xy[1],he=Math.abs(q),we=Math.abs(ce),W=(k.timeStamp||0)-E.start,b=Math.sqrt(he*he+we*we)/(W||1),C=[q/(W||1),ce/(W||1)],I=eI(he,we,q,ce),P=typeof S.delta=="number"?S.delta:S.delta[I.toLowerCase()]||oo.delta;if(he<P&&we<P&&!E.swiping)return E;const A={absX:he,absY:we,deltaX:q,deltaY:ce,dir:I,event:k,first:E.first,initial:E.initial,velocity:b,vxvy:C};A.first&&S.onSwipeStart&&S.onSwipeStart(A),S.onSwiping&&S.onSwiping(A);let D=!1;return(S.onSwiping||S.onSwiped||S[`onSwiped${I}`])&&(D=!0),D&&S.preventScrollOnSwipe&&S.trackTouch&&k.cancelable&&k.preventDefault(),Object.assign(Object.assign({},E),{first:!1,eventData:A,swiping:!0})})},l=k=>{r((E,S)=>{let U;if(E.swiping&&E.eventData){if(k.timeStamp-E.start<S.swipeDuration){U=Object.assign(Object.assign({},E.eventData),{event:k}),S.onSwiped&&S.onSwiped(U);const B=S[`onSwiped${U.dir}`];B&&B(U)}}else S.onTap&&S.onTap({event:k});return S.onTouchEndOrOnMouseUp&&S.onTouchEndOrOnMouseUp({event:k}),Object.assign(Object.assign(Object.assign({},E),$d),{eventData:U})})},c=()=>{document.removeEventListener(nv,s),document.removeEventListener(rv,h)},h=k=>{c(),l(k)},m=(k,E)=>{let S=()=>{};if(k&&k.addEventListener){const U=Object.assign(Object.assign({},oo.touchEventOptions),E.touchEventOptions),B=[[ZT,t,U],[JT,s,Object.assign(Object.assign({},U),E.preventScrollOnSwipe?{passive:!1}:{})],[XT,l,U]];B.forEach(([G,$,de])=>k.addEventListener(G,$,de)),S=()=>B.forEach(([G,$])=>k.removeEventListener(G,$))}return S},w={ref:k=>{k!==null&&r((E,S)=>{if(E.el===k)return E;const U={};return E.el&&E.el!==k&&E.cleanUpTouch&&(E.cleanUpTouch(),U.cleanUpTouch=void 0),S.trackTouch&&k&&(U.cleanUpTouch=m(k,S)),Object.assign(Object.assign(Object.assign({},E),{el:k}),U)})}};return e.trackMouse&&(w.onMouseDown=t),[w,m]}function nI(r,e,t,s){return!e.trackTouch||!r.el?(r.cleanUpTouch&&r.cleanUpTouch(),Object.assign(Object.assign({},r),{cleanUpTouch:void 0})):r.cleanUpTouch?e.preventScrollOnSwipe!==t.preventScrollOnSwipe||e.touchEventOptions.passive!==t.touchEventOptions.passive?(r.cleanUpTouch(),Object.assign(Object.assign({},r),{cleanUpTouch:s(r.el,e)})):r:Object.assign(Object.assign({},r),{cleanUpTouch:s(r.el,e)})}function ip(r){const{trackMouse:e}=r,t=le.useRef(Object.assign({},$d)),s=le.useRef(Object.assign({},oo)),l=le.useRef(Object.assign({},s.current));l.current=Object.assign({},s.current),s.current=Object.assign(Object.assign({},oo),r);let c;for(c in oo)s.current[c]===void 0&&(s.current[c]=oo[c]);const[h,m]=le.useMemo(()=>tI(v=>t.current=v(t.current,s.current),{trackMouse:e}),[e]);return t.current=nI(t.current,s.current,l.current,m),h}const rI=({onCheckIn:r,onCheckOut:e,isCheckedIn:t,isSidebarOpen:s,setIsSidebarOpen:l,onShowQR:c,onOpenFridge:h})=>{const[m,v]=le.useState("PXL"),[w,k]=le.useState(0),[E,S]=le.useState(!1),U=[{id:"RBGH",name:"RBGH",icon:g.jsx(Jw,{className:"w-4 h-4"})},{id:"PXL",name:"PXL",icon:g.jsx(Zw,{className:"w-4 h-4"})},{id:"STREAM",name:"Streaming Room",icon:g.jsx(u1,{className:"w-4 h-4"})}],B=()=>{const $=Array(w).fill("").map((de,q)=>`friend_${q+1}`);r(m,$),l(!1)},G=ip({onSwipedLeft:()=>{l(!1)},trackTouch:!0,trackMouse:!1});return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"fixed bottom-[5.5rem] right-4 z-50 w-full",children:g.jsxs("div",{className:"max-w-[80rem] mx-auto relative flex flex-col items-end",children:[g.jsxs("div",{className:`flex flex-col items-end space-y-3 absolute bottom-16 right-0 ${E?"opacity-100 translate-y-0":"opacity-0 pointer-events-none translate-y-2"} transition-all duration-300 ease-in-out pb-1`,children:[g.jsxs("div",{className:"flex flex-row-reverse items-center gap-2 mr-1",children:[g.jsx("button",{onClick:c,className:"w-12 h-11 flex items-center justify-center rounded-xl bg-primary text-on-primary shadow-md hover:scale-105 transition","aria-label":"QR Code",children:g.jsx(i1,{className:"w-5 h-5"})}),g.jsx("span",{className:"px-4 py-1.5 text-xs font-medium bg-primary text-on-primary rounded-lg whitespace-nowrap",children:"Show QR Code"})]}),g.jsxs("div",{className:"flex flex-row-reverse items-center gap-2 mr-1",children:[g.jsx("button",{onClick:h,className:"w-12 h-11 flex items-center justify-center rounded-xl bg-primary text-on-primary shadow-md hover:scale-105 transition","aria-label":"Fridge",children:g.jsx(ov,{className:"w-5 h-5"})}),g.jsx("span",{className:"px-4 py-1.5 text-xs font-medium bg-primary text-on-primary rounded-lg whitespace-nowrap",children:"Fridge"})]})]}),g.jsx("button",{onClick:()=>S(!E),className:"w-14 h-14 flex items-center justify-center rounded-2xl bg-primary text-on-primary shadow-lg hover:scale-105 transition-all duration-300 relative","aria-label":"Toggle actions",children:g.jsx("span",{className:`transition-transform duration-300 ease-in-out ${E?"rotate-90":"rotate-0"}`,children:E?g.jsx(hc,{className:"w-6 h-6"}):g.jsx($w,{className:"w-6 h-6"})})})]})}),s&&g.jsx("div",{onClick:()=>l(!1),className:"fixed inset-0 bg-black/50 z-40","aria-hidden":"true"}),g.jsx("div",{...G,className:`fixed inset-0 z-50 bg-bg transform transition-transform duration-300 flex flex-col md:max-w-md w-full shadow-lg ${s?"translate-x-0":"-translate-x-full"}`,children:g.jsxs("div",{className:"relative flex-1 flex flex-col p-6",children:[g.jsxs("div",{className:"flex items-center justify-between mb-8",children:[g.jsx("h2",{className:"text-xl font-bold text-default",children:t?"Edit Check-In":"New Check-In"}),g.jsxs("button",{onClick:()=>l(!1),className:"flex items-center space-x-2 text-subtle hover:text-default",children:[g.jsx(Gw,{className:"w-5 h-5"}),g.jsx("span",{className:"text-sm font-medium",children:"Close"})]})]}),g.jsxs("div",{className:"flex-1 overflow-y-auto w-full max-w-md mx-auto space-y-10 pb-16",children:[g.jsxs("div",{children:[g.jsxs("label",{className:"text-sm font-semibold text-subtle mb-2 block",children:[g.jsx(Yd,{className:"inline-block w-4 h-4 mr-2"}),"Location"]}),g.jsx("div",{className:"grid grid-cols-2 gap-4",children:U.map($=>{const de=m===$.id;return g.jsxs("button",{onClick:()=>v($.id),className:`w-full flex items-center justify-between px-4 py-4 rounded-xl border transition-all text-sm font-medium
                        ${de?"bg-gradient-theme border-default text-default shadow-md":"bg-subtle border-default text-subtle hover:bg-hover"}`,children:[g.jsxs("span",{className:"flex items-center space-x-2",children:[$.icon,g.jsx("span",{children:$.name})]}),de&&g.jsx("span",{className:"text-xs font-bold",children:"✓"})]},$.id)})})]}),g.jsxs("div",{className:"bg-subtle p-4 rounded-xl",children:[g.jsxs("label",{className:"text-sm font-semibold text-subtle mb-3 block text-center",children:[g.jsx(l1,{className:"inline-block w-4 h-4 mr-2"}),"Friends joining"]}),g.jsxs("div",{className:"flex justify-center items-center space-x-4",children:[g.jsx("button",{onClick:()=>k($=>Math.max($-1,0)),className:"w-10 h-10 flex items-center justify-center rounded-lg bg-muted text-subtle hover:text-default","aria-label":"Decrease",children:g.jsx(ro,{className:"w-5 h-5"})}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(Uu,{className:"w-5 h-5 text-subtle"}),g.jsx("span",{className:"text-lg font-semibold text-default",children:w})]}),g.jsx("button",{onClick:()=>k($=>Math.min($+1,10)),className:"w-10 h-10 flex items-center justify-center rounded-lg bg-muted text-subtle hover:text-default","aria-label":"Increase",children:g.jsx(qi,{className:"w-5 h-5"})})]})]}),g.jsxs("div",{className:"flex justify-between items-center space-x-3 pt-2",children:[g.jsxs(nt,{onClick:B,className:"flex-1 bg-primary hover:bg-secondary text-on-primary flex items-center justify-center space-x-2 py-2",children:[g.jsx(s1,{className:"w-5 h-5"}),g.jsx("span",{children:t?"Save":"Check In"})]}),t&&g.jsxs(nt,{onClick:()=>{e(),l(!1)},className:"flex-1 bg-error hover:bg-error/90 text-white flex items-center justify-center space-x-2 py-2",children:[g.jsx(Fu,{className:"w-5 h-5"}),g.jsx("span",{children:"Out"})]})]})]})]})})]})},iI=({type:r,message:e})=>g.jsxs("div",{className:`fixed left-1/2 top-0 z-50 w-full max-w-xs sm:max-w-sm -translate-x-1/2 mt-6
      flex flex-col items-center px-4 py-3 rounded-2xl shadow-xl border
      transition-transform duration-300
      bg-gradient-theme border-${r==="success"?"success":"error"}
      animate-slideDown
    `,style:{transform:"translate(-50%, 0)"},children:[g.jsxs("div",{className:"flex items-center gap-3 w-full",children:[g.jsx("span",{className:`flex items-center justify-center w-8 h-8 rounded-full
        ${r==="success"?"bg-success":"bg-error"}
        text-on-primary text-lg`,children:r==="success"?"✓":"!"}),g.jsx("span",{className:"flex-1 text-sm font-medium text-subtle",children:e}),g.jsx("span",{className:"ml-2 flex items-center justify-center",children:g.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",children:[g.jsx("circle",{cx:"14",cy:"14",r:"12",fill:"none",stroke:r==="success"?"var(--color-success)":"var(--color-error)",strokeWidth:"4",style:{opacity:.3}}),g.jsx("circle",{cx:"14",cy:"14",r:"12",fill:"none",stroke:r==="success"?"var(--color-success)":"var(--color-error)",strokeWidth:"4",strokeDasharray:2*Math.PI*12,strokeDashoffset:2*Math.PI*12,transform:"rotate(-90 14 14)",style:{transition:"stroke-dashoffset 2s linear",strokeDashoffset:2*Math.PI*12,animation:"circle-timer 2s linear forwards"}})]})})]}),g.jsx("style",{children:`
        @keyframes circle-timer {
          from { stroke-dashoffset: ${2*Math.PI*12}; }
          to { stroke-dashoffset: 0; }
        }
        .animate-slideDown {
          animation: slideDownNotif 0.3s cubic-bezier(.4,2,.3,1) forwards;
        }
        @keyframes slideDownNotif {
          from { transform: translate(-50%, -40px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `})]});function sI(r){return r.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")}const oI=()=>{const{user:r,logout:e}=Zl(),[t,s]=le.useState([]),[l,c]=le.useState("ALL"),[h,m]=le.useState(!1),[v,w]=le.useState(!1),[k,E]=le.useState(!1),[S,U]=le.useState(null),[B,G]=le.useState(null),[$,de]=le.useState(null),q=[{id:"RBGH",name:"Red Bull",color:"bg-location-rbgh"},{id:"PXL",name:"PXL",color:"bg-location-pxl"},{id:"STREAM",name:"Streaming room",color:"bg-location-stream"}],ce=()=>g.jsx("svg",{className:"w-6 h-6 text-default",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h10"})});le.useEffect(()=>{const fe=localStorage.getItem("checkedInUsers");if(fe)try{const Q=JSON.parse(fe);s(Q.map(se=>({...se,checkedInAt:new Date(se.checkedInAt)})))}catch{}const Ee=Iu(Au,"users"),ge=nC(Ee,Q=>{let se=Q.val()||{};const ne={mock_ash:{username:"ash",firstname:"Ash",lastname:"Ketchum",checkInStatus:!0,checkedInWhere:"RBGH",checkedInAt:Date.now()-5*60*1e3,friendCount:2,isResponsible:!0,discordUsername:"ash#1234",email:"ash@pokehub.com",phoneNumber:"555-001"},mock_misty:{username:"misty",firstname:"Misty",lastname:"Waterflower",checkInStatus:!0,checkedInWhere:"PXL",checkedInAt:Date.now()-35*60*1e3,friendCount:1,isResponsible:!1,discordUsername:"misty#5678",email:"misty@pokehub.com",phoneNumber:"555-002"},mock_brock:{username:"brock",firstname:"Brock",lastname:"Slate",checkInStatus:!0,checkedInWhere:"STREAM",checkedInAt:Date.now()-90*60*1e3,friendCount:0,isResponsible:!1,discordUsername:"brock#9999",email:"brock@pokehub.com",phoneNumber:"555-003"}};se={...se,...ne},se=Object.fromEntries(Object.entries(se).filter(([H,te])=>te.checkInStatus===!0));const j=Object.entries(se).filter(([H,te])=>te.checkInStatus===!0).map(([H,te])=>({id:H,username:te.username,name:sI(`${te.firstname} ${te.lastname}`),location:te.checkedInWhere||"Unknown",checkedInAt:new Date(te.checkedInAt??Date.now()),isResponsible:te.isResponsible||!1,friendCount:te.friendCount||0,activeAssignment:te.activeAssignment||!1,discordUsername:te.discordUsername||"",email:te.email||"",phoneNumber:te.phoneNumber||"",avatar:`${kg}assets/headshot?name=${te.username}.jpg`}));j.sort((H,te)=>H.id===r?.id?-1:te.id===r?.id?1:H.isResponsible&&!te.isResponsible?-1:!H.isResponsible&&te.isResponsible?1:H.username.localeCompare(te.username)),s(j),localStorage.setItem("checkedInUsers",JSON.stringify(j.map(H=>({...H,checkedInAt:H.checkedInAt.toISOString()})))),j.forEach(H=>{const te=new window.Image;te.src=H.avatar||`${kg}assets/headshot?name=${H.username}.jpg`})});return()=>ge()},[]);const he=async(fe,Ee=[])=>{if(!r)return;const ge=Iu(Au,`users/${r.id}`);try{await md(ge,{checkInStatus:!0,checkedInWhere:fe,checkedInAt:Date.now(),username:r.username,friendCount:Ee.length,activeAssignment:!1,isResponsible:!1}),G({type:"success",message:"Successfully checked in!"})}catch{G({type:"error",message:"Error checking in. Please try again."})}"Notification"in window&&(Notification.permission==="granted"?we():Notification.permission!=="denied"&&Notification.requestPermission().then(Q=>{Q==="granted"&&we()}))};function we(){const fe=new Date;function Ee(ge){const Q=xe=>xe.toString().padStart(2,"0"),se=Q(ge.getDate()),ne=Q(ge.getMonth()+1),j=ge.getFullYear(),H=Q(ge.getHours()),te=Q(ge.getMinutes());return`${se}/${ne}/${j} - ${H}:${te}`}new Notification("You are checked in",{body:`Checked in since: ${Ee(fe)}`,icon:"/rbgh_logo.png"})}const W=async()=>{if(!r)return;const fe=Iu(Au,`users/${r.id}`);try{await md(fe,{checkInStatus:!1}),G({type:"success",message:"Successfully checked out!"})}catch{G({type:"error",message:"Error checking out. Please try again."})}},b=async fe=>{const Ee=Iu(Au,`users/${fe}`);try{await md(Ee,{checkInStatus:!1}),G({type:"success",message:"User checked out!"})}catch{G({type:"error",message:"Error checking out user."})}},C=t.filter(fe=>l==="ALL"||fe.location===l),I=fe=>q.find(Ee=>Ee.id===fe),P=fe=>{const ge=Math.floor((new Date().getTime()-fe.getTime())/(1e3*60));if(ge<1)return"Just now";if(ge<60)return`${ge}m ago`;const Q=Math.floor(ge/60);return Q<24?`${Q}h ago`:`${Math.floor(Q/24)}d ago`},A=t.find(fe=>fe.id===r?.id),D=fe=>{U(fe)},N=()=>{U(null)};if(le.useEffect(()=>{if(B){const fe=setTimeout(()=>{G(null)},2e3);return()=>clearTimeout(fe)}},[B]),k)return g.jsx(g1,{onBack:()=>E(!1)});const We=ip({onSwipedRight:()=>{m(!0)},delta:50,trackTouch:!0,trackMouse:!1});return g.jsxs("div",{...We,className:"h-screen overflow-hidden bg-subtle flex-col",children:[B&&g.jsx(iI,{type:B.type,message:B.message}),g.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:g.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:g.jsxs("div",{className:"relative flex items-center justify-between py-3 sm:py-4",children:[g.jsx("button",{onClick:()=>m(!0),className:"flex items-center justify-center w-12 h-10 rounded-md hover:bg-subtle transition","aria-label":"Open menu",children:g.jsx(ce,{})}),g.jsxs("div",{className:"absolute left-1/2 transform -translate-x-1/2 text-center",children:[g.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:"Home"}),g.jsxs("p",{className:"text-subtle text-xs sm:text-sm",children:[C.length," active check-ins"]})]}),g.jsxs(nt,{onClick:e,variant:"outline",size:"sm",className:"hidden sm:flex",children:[g.jsx(Fu,{className:"w-4 h-4 mr-2"}),g.jsx("span",{children:"Logout"})]}),g.jsx(nt,{onClick:e,variant:"outline",size:"sm",className:"sm:hidden",children:g.jsx(Fu,{className:"w-4 h-4"})})]})})}),S&&g.jsx(GT,{user:S,onClose:N}),g.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[A&&g.jsx("div",{className:"mb-6 bg-gradient-theme rounded-xl p-4 border border-default",children:g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:`w-3 h-3 rounded-full ${I(A.location)?.color}`}),g.jsxs("div",{className:"flex-1",children:[g.jsxs("p",{className:"text-sm font-medium text-default ",children:["You're checked in at ",I(A.location)?.name]}),g.jsxs("p",{className:"text-xs text-subtle",children:[P(A.checkedInAt),(A.friendCount??0)>0&&g.jsxs("span",{className:"ml-2",children:["• With ",A.friendCount," friend",(A.friendCount??0)>1?"s":""]})]})]})]})}),g.jsx("div",{className:"mb-6 space-y-4",children:g.jsxs("div",{className:"flex space-x-2 overflow-x-auto pb-2",children:[g.jsxs("button",{onClick:()=>c("ALL"),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center ${l==="ALL"?"bg-primary text-on-primary":"bg-gradient-theme text-default hover:bg-subtle"}`,children:["All Locations",g.jsx("span",{className:"ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold bg-subtle text-default",children:t.length})]}),q.map(fe=>{const Ee=t.filter(Q=>Q.location===fe.id).length,ge=l===fe.id;return g.jsxs("button",{onClick:()=>c(fe.id),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center ${ge?"bg-primary text-on-primary":"bg-gradient-theme text-default hover:bg-subtle"}`,children:[fe.name,g.jsx("span",{className:"ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold bg-subtle text-default",children:Ee})]},fe.id)})]})}),g.jsx("div",{className:"space-y-3 custom-scrollbar overflow-y-auto",style:{touchAction:"pan-y",maxHeight:"calc(100vh - 23.9rem)",...window.innerWidth<640?{maxHeight:"calc(100vh - 21.5rem)"}:{}},children:C.length===0?g.jsxs("div",{className:"text-center py-12",children:[g.jsx(Yd,{className:"w-12 h-12 text-subtle mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No users found"}),g.jsx("p",{className:"text-subtle",children:"No users are currently checked in"})]}):C.map(fe=>{const Ee=I(fe.location);return g.jsx(lI,{checkedUser:fe,locationInfo:Ee,showCheckoutUserId:$,setShowCheckoutUserId:de,handleUserClick:D,handleCheckOutUser:b,user:r,formatTimeAgo:P},fe.id)})})]}),g.jsx(rI,{onCheckIn:he,onCheckOut:W,onShowQR:()=>w(!0),onOpenFridge:()=>E(!0),isCheckedIn:!!A,isSidebarOpen:h,setIsSidebarOpen:m}),g.jsx(p1,{isOpen:v,onClose:()=>w(!1)})]})},lI=({checkedUser:r,locationInfo:e,showCheckoutUserId:t,setShowCheckoutUserId:s,handleUserClick:l,handleCheckOutUser:c,user:h,formatTimeAgo:m})=>{const v=ip({onSwipedLeft:()=>{console.log("Swiped left!",r.id),s(r.id)},onSwipedRight:()=>{console.log("Swiped right!",r.id),s(null)},trackMouse:!0});return g.jsxs("div",{className:"relative",style:{touchAction:"pan-y"},children:[g.jsx("div",{className:`absolute inset-0 flex items-center justify-end pr-4 rounded-xl border border-default z-0 transition-colors duration-300 ${t===r.id?"bg-danger/10":"bg-bg"}`,style:{width:"100%",height:"100%",margin:0,pointerEvents:t===r.id?"auto":"none"},children:g.jsx("button",{onClick:w=>{w.stopPropagation(),c(r.id),s(null)},className:`flex items-center justify-center rounded-full shadow-lg transition-all duration-300 bg-bg ${t===r.id?"scale-105":"scale-95"}`,style:{width:"56px",height:"56px",opacity:t===r.id?1:.7,boxShadow:t===r.id?"0 4px 16px rgba(255,71,87,0.15)":"0 2px 8px rgba(0,0,0,0.06)"},"aria-label":"Check Out",children:g.jsx(Fu,{className:`w-8 h-8 transition-colors duration-300 ${t===r.id,"text-default"}`})})}),g.jsx("div",{...v,className:"bg-bg rounded-xl p-4 border border-default hover:shadow-md transition-transform duration-300 cursor-pointer z-10",style:{touchAction:"pan-y",userSelect:"none",position:"relative",transform:t===r.id?"translateX(-90px) scale(0.98)":"translateX(0) scale(1)",boxShadow:t===r.id?"0 4px 24px rgba(255,0,0,0.08)":void 0,transition:"transform 0.3s cubic-bezier(.4,2,.3,1), box-shadow 0.3s"},onClick:()=>l(r),children:g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsx("div",{className:"flex-shrink-0",children:g.jsx("img",{src:r.avatar,alt:`${r.name}'s avatar`,onError:w=>{w.currentTarget.onerror=null,w.currentTarget.style.display="none";const k=w.currentTarget.parentElement;if(k&&!k.querySelector(".fallback-avatar")){const E=document.createElement("span");E.className="fallback-avatar flex items-center justify-center w-12 h-12 rounded-full bg-subtle bg-subtle",E.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-muted " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',k.appendChild(E)}},className:"w-12 h-12 rounded-full"})}),g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[g.jsx("h3",{className:"font-semibold text-default truncate",children:r.name}),r.id===h?.id&&g.jsx("span",{className:"px-2 py-1 bg-primary text-on-primary text-xs rounded-full",children:"You"})]}),g.jsxs("p",{className:"text-sm text-subtle mb-2",children:["@",r.username]}),g.jsxs("div",{className:"flex items-center space-x-4 text-sm",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("div",{className:`w-2 h-2 rounded-full ${e?.color}`}),g.jsx("span",{className:"text-subtle",children:e?.name})]}),g.jsxs("div",{className:"flex items-center space-x-1 text-subtle",children:[g.jsx(qd,{className:"w-4 h-4"}),g.jsx("span",{children:m(r.checkedInAt)})]})]}),(r.friendCount??0)>0&&g.jsxs("div",{className:"flex items-center space-x-1 mt-2 text-sm text-subtle",children:[g.jsx(Uu,{className:"w-4 h-4"}),g.jsxs("span",{children:["With ",r.friendCount," friend",(r.friendCount??0)>1?"s":""]})]})]})]})})]})},aI=[{id:"1",title:"Network check",responsibles:["jane"],startTime:"12:00",endTime:"13:30",date:new Date("2025-07-24T00:00:00"),location:"RBGH",visitors:2,remarks:"Replace any broken cables.",completed:!0},{id:"2",title:"Set up sound system",responsibles:[],startTime:"15:45",endTime:"17:15",date:new Date("2025-07-19T00:00:00"),location:"PXL",visitors:2,remarks:"Replace any broken cables.",completed:!1},{id:"3",title:"Network check",responsibles:["john","jane"],startTime:"09:00",endTime:"10:00",date:new Date("2025-07-22T00:00:00"),location:"RBGH",visitors:35,remarks:"Test all mics.",completed:!0},{id:"4",title:"Opening Hub",responsibles:["john"],startTime:"09:00",endTime:"09:45",date:new Date("2025-07-20T00:00:00"),location:"RBGH",visitors:2,completed:!0},{id:"5",title:"Inspect Red Bull gear",responsibles:["jane"],startTime:"14:30",endTime:"15:15",date:new Date("2025-07-16T00:00:00"),location:"RBGH",remarks:"Replace any broken cables.",completed:!0},{id:"6",title:"Organize chairs",responsibles:["john","alice"],startTime:"12:00",endTime:"13:15",date:new Date("2025-07-18T00:00:00"),location:"RBGH",visitors:8,completed:!1},{id:"7",title:"Test HDMI switch",responsibles:[],startTime:"13:15",endTime:"14:15",date:new Date(Date.now()-864e5*2),location:"RBGH",visitors:8,remarks:"Be on time.",completed:!0},{id:"8",title:"Set up sound system",responsibles:["emma"],startTime:"10:30",endTime:"12:30",date:new Date(Date.now()-864e5*1),location:"RBGH",visitors:8,remarks:"Be on time.",completed:!0},{id:"9",title:"Briefing volunteers",responsibles:["jane","john"],startTime:"08:00",endTime:"09:00",date:new Date(Date.now()+864e5*0),location:"RBGH",visitors:8,remarks:"Test all mics.",completed:!1},{id:"10",title:"Network check",responsibles:["alice","john"],startTime:"12:45",endTime:"13:45",date:new Date(Date.now()+864e5*1),location:"RBGH",visitors:5,remarks:"Replace any broken cables.",completed:!1},{id:"11",title:"Opening Hub",responsibles:["jane","john"],startTime:"13:30",endTime:"15:30",date:new Date(Date.now()+864e5*2),location:"PXL",visitors:2,remarks:"Replace any broken cables.",completed:!1},{id:"12",title:"Inspect Red Bull gear",responsibles:[],startTime:"14:45",endTime:"15:45",date:new Date(Date.now()+864e5*3),location:"RBGH",visitors:2,remarks:"Test all mics.",completed:!1},{id:"13",title:"Organize chairs",responsibles:["jane","john"],startTime:"11:30",endTime:"13:30",date:new Date(Date.now()+864e5*4),location:"RBGH",remarks:"Be on time.",completed:!1},{id:"14",title:"Test HDMI switch",responsibles:["john"],startTime:"14:15",endTime:"15:15",date:new Date(Date.now()+864e5*5),location:"RBGH",completed:!1},{id:"15",title:"Set up sound system",responsibles:[],startTime:"10:00",endTime:"11:00",date:new Date(Date.now()+864e5*6),location:"RBGH",visitors:8,remarks:"Replace any broken cables.",completed:!1},{id:"16",title:"Briefing volunteers",responsibles:["emma","jane"],startTime:"08:30",endTime:"10:30",date:new Date(Date.now()+864e5*7),location:"PXL",visitors:2,completed:!1},{id:"17",title:"Network check",responsibles:[],startTime:"09:30",endTime:"11:30",date:new Date(Date.now()+864e5*8),location:"PXL",completed:!1},{id:"18",title:"Opening Hub",responsibles:["jane"],startTime:"08:30",endTime:"10:30",date:new Date(Date.now()+864e5*9),location:"RBGH",visitors:2,remarks:"Replace any broken cables.",completed:!1},{id:"19",title:"Inspect Red Bull gear",responsibles:["alice","jane"],startTime:"10:30",endTime:"12:30",date:new Date(Date.now()-864e5*5),location:"RBGH",visitors:2,completed:!0},{id:"20",title:"Organize chairs",responsibles:["john","emma"],startTime:"08:45",endTime:"10:45",date:new Date(Date.now()-864e5*4),location:"RBGH",visitors:8,remarks:"Test all mics.",completed:!0},{id:"21",title:"Test HDMI switch",responsibles:[],startTime:"14:00",endTime:"15:00",date:new Date(Date.now()-864e5*3),location:"RBGH",visitors:8,remarks:"Test all mics.",completed:!0},{id:"22",title:"Set up sound system",responsibles:[],startTime:"16:45",endTime:"17:45",date:new Date(Date.now()-864e5*2),location:"PXL",visitors:2,completed:!0},{id:"23",title:"Briefing volunteers",responsibles:["alice"],startTime:"08:00",endTime:"10:00",date:new Date(Date.now()-864e5*1),location:"RBGH",visitors:5,remarks:"Test all mics.",completed:!0},{id:"24",title:"Network check",responsibles:["john","emma"],startTime:"15:00",endTime:"16:00",date:new Date(Date.now()+864e5*0),location:"PXL",visitors:2,remarks:"Replace any broken cables.",completed:!1},{id:"25",title:"Opening Hub",responsibles:[],startTime:"15:30",endTime:"16:30",date:new Date(Date.now()+864e5*1),location:"RBGH",visitors:2,remarks:"Test all mics.",completed:!1}],uI=[{id:1,label:"Mon"},{id:2,label:"Tue"},{id:3,label:"Wed"},{id:4,label:"Thu"},{id:5,label:"Fri"},{id:6,label:"Sat"},{id:0,label:"Sun"}],cI=()=>{const[r,e]=le.useState("all"),[t,s]=le.useState(new Date),[l,c]=le.useState(null),[h,m]=le.useState([]),{user:v}=Zl(),w=aI,[k,E]=le.useState(null),S=W=>{E(b=>b===W?null:W)},U=le.useRef(null);le.useEffect(()=>{U.current&&U.current.scrollIntoView({behavior:"auto",block:"start"})},[]);const B={PXL:{name:"PXL",color:"bg-location-pxl"},RBGH:{name:"Red Bull",color:"bg-location-rbgh"},STREAM:{name:"STREAM",color:"bg-location-stream"}},G=w,$=w.filter(W=>!W.completed&&W.responsibles.some(b=>v&&(b===v.name||b===v.username))),de=w.filter(W=>W.completed&&W.responsibles.some(b=>v&&(b===v.name||b===v.username))),q=W=>{const b=new Date,C=new Date(b);b.setHours(0,0,0,0),C.setDate(b.getDate()+1),C.setHours(0,0,0,0);const I=new Date(W);return I.setHours(0,0,0,0),I.getTime()===b.getTime()?"Today":I.getTime()===C.getTime()?"Tomorrow":I.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})},ce=W=>{const b=new Date;b.setHours(0,0,0,0);const C=new Date(W);return C.setHours(0,0,0,0),C<b},he=({assignment:W,expanded:b,onToggle:C})=>{const I=B[W.location]||{name:W.location||"Unknown",color:"bg-subtle"},P=W.date>new Date,A=v&&W.responsibles.includes(v.name||v.username);return g.jsxs("div",{className:"bg-bg rounded-2xl p-4 sm:p-5 border border-default shadow-sm hover:shadow-lg hover:scale-[1.005] transition-all duration-200 cursor-pointer",onClick:C,children:[g.jsxs("div",{className:"flex justify-between items-start",children:[g.jsxs("div",{className:"flex flex-col space-y-1",children:[g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:`w-3.5 h-3.5 rounded-full ${I.color}`}),g.jsx("h3",{className:"font-semibold text-base text-default truncate",children:W.title})]}),!b&&g.jsxs("div",{className:"flex items-center text-sm text-subtle space-x-4 pl-5 pt-1",children:[g.jsxs("span",{className:"flex items-center space-x-1",children:[g.jsx(qd,{className:"w-4 h-4"}),g.jsx("span",{children:W.startTime})]}),g.jsxs("span",{className:"flex items-center space-x-1",children:[g.jsx(Uu,{className:"w-4 h-4"}),g.jsx("span",{children:W.responsibles.length===0?"No Responsible":W.responsibles.length===1?W.responsibles[0]:`${W.responsibles[0]} +${W.responsibles.length-1}`})]})]})]}),!W.completed&&ce(W.date)&&g.jsx("span",{className:"ml-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-gradient-to-r from-red-100 to-orange-100 text-error dark:from-red-900/20 dark:to-orange-900/20",children:"Overdue"})]}),b&&g.jsxs("div",{className:"mt-4 space-y-4 text-sm text-subtle",children:[g.jsxs("div",{className:"text-center",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-muted",children:W.date.toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"short",year:"numeric"})}),g.jsxs("p",{className:"text-sm text-subtle mt-0.5",children:["From ",g.jsx("span",{className:"font-medium text-default",children:W.startTime})," to"," ",g.jsx("span",{className:"font-medium text-default",children:W.endTime})]})]}),g.jsxs("div",{className:"grid grid-cols-1 gap-3 text-sm",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(Yd,{className:"w-4 h-4 text-muted"}),g.jsx("span",{className:"text-default font-medium",children:I.name})]}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(Uu,{className:"w-4 h-4 text-muted"}),g.jsx("span",{className:"text-default",children:W.responsibles.length===0?"No Responsible":W.responsibles.length===1?W.responsibles[0]:`${W.responsibles[0]} +${W.responsibles.length-1}`})]}),W.visitors!==void 0&&g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(Kd,{className:"w-4 h-4 text-muted"}),g.jsxs("span",{className:"text-default",children:[W.visitors," visitors"]})]}),W.remarks&&g.jsxs("div",{className:"flex items-start space-x-2",children:[g.jsx(n1,{className:"w-4 h-4 text-muted mt-0.5"}),g.jsx("p",{className:"text-default",children:W.remarks})]})]}),P&&!A&&g.jsx("div",{className:"pt-2",children:g.jsxs("button",{onClick:D=>{D.stopPropagation(),alert("Signed up (mock)")},className:"w-full px-4 py-2 bg-primary text-on-primary text-sm font-medium rounded-full shadow-md flex items-center justify-center space-x-2 transition hover:scale-[1.02] hover:shadow-xl",children:[g.jsx(Cl,{className:"w-4 h-4"}),g.jsx("span",{children:"Sign up"})]})})]})]})};l&&G.filter(W=>W.date.getFullYear()===l.getFullYear()&&W.date.getMonth()===l.getMonth()&&W.date.getDate()===l.getDate());const we=W=>{m(b=>b.includes(W)?b.filter(C=>C!==W):[...b,W])};return h.length===0||G.filter(W=>h.includes(W.date.getDay())),g.jsxs("div",{className:"min-h-screen bg-subtle pb-20",children:[g.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:g.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:g.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:g.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[g.jsx("div",{className:"w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center",children:g.jsx(Cl,{className:"w-6 h-6 text-on-primary"})}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:"Assignments"}),g.jsx("p",{className:"text-subtle text-sm sm:text-base",children:r==="todo"?`${$.length} pending`:`${de.length} completed`})]})]})})})}),g.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[g.jsx("div",{className:"flex space-x-1 mb-6 bg-gradient-theme rounded-lg p-1",children:["all","todo","finished"].map(W=>g.jsx("button",{onClick:()=>e(W),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${r===W?"bg-bg text-default shadow-sm":"text-subtle hover:text-default"}`,children:W==="all"?`All (${G.length})`:W==="todo"?`To Do (${$.length})`:`Finished (${de.length})`},W))}),g.jsx("div",{className:"flex space-x-2 overflow-x-auto pb-2 mb-4",children:uI.map(W=>g.jsx("button",{onClick:()=>we(W.id),className:`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center ${h.includes(W.id)?"bg-primary text-on-primary":"bg-gradient-theme text-default hover:bg-subtle"}`,children:W.label},W.id))}),g.jsx("div",{className:"space-y-4 custom-scrollbar overflow-y-auto",style:{maxHeight:"calc(100vh - 22.9rem)",...window.innerWidth<640?{maxHeight:"calc(100vh - 20.5rem)"}:{}},children:r==="all"&&G.length>0?(()=>{const W=G.reduce((A,D)=>{const N=D.date.toDateString();return A[N]||(A[N]=[]),A[N].push(D),A},{}),b=Object.entries(W).sort(([A],[D])=>new Date(A).getTime()-new Date(D).getTime()),C=new Date;C.setHours(0,0,0,0);const I=[],P=[];return b.forEach(([A,D])=>{const N=new Date(A),We=N<C,fe=g.jsxs("div",{ref:We?void 0:P.length===0?U:void 0,children:[g.jsx("h2",{className:"text-sm text-subtle font-medium uppercase mb-2 mt-6 pl-1",children:q(N)}),g.jsx("div",{className:"space-y-2",children:D.sort((Ee,ge)=>Ee.startTime.localeCompare(ge.startTime)).map(Ee=>g.jsx(he,{assignment:Ee,expanded:k===Ee.id,onToggle:()=>S(Ee.id)},Ee.id))})]},A);We?I.push(fe):P.push(fe)}),g.jsxs(g.Fragment,{children:[I,P]})})():r==="all"?g.jsxs("div",{className:"text-center py-12",children:[g.jsx(Cl,{className:"w-12 h-12 text-muted mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No assignments"}),g.jsx("p",{className:"text-subtle",children:"No assignments found."})]}):r==="todo"?$.length===0?g.jsxs("div",{className:"text-center py-12",children:[g.jsx(Cl,{className:"w-12 h-12 text-muted mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No pending assignments"}),g.jsx("p",{className:"text-subtle",children:"All assignments are completed. Great job!"})]}):$.sort((W,b)=>W.date.getTime()-b.date.getTime()).map(W=>g.jsx(he,{assignment:W,expanded:k===W.id,onToggle:()=>S(W.id)},W.id)):de.length===0?g.jsxs("div",{className:"text-center py-12",children:[g.jsx(Cl,{className:"w-12 h-12 text-muted mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No completed assignments"}),g.jsx("p",{className:"text-subtle",children:"Completed assignments will appear here."})]}):de.sort((W,b)=>b.date.getTime()-W.date.getTime()).map(W=>g.jsx(he,{assignment:W,expanded:k===W.id,onToggle:()=>S(W.id)},W.id))})]})]})};function y0(r){document.documentElement.setAttribute("data-theme",r),document.documentElement.classList.remove("light","dark","neon","dark-mint"),(r==="dark"||r==="dark-mint")&&document.documentElement.classList.add("dark"),localStorage.setItem("theme",r)}function v0(){const r=localStorage.getItem("theme");return r==="light"||r==="dark"||r==="neon"||r==="dark-mint"?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const Rl=["light","dark","neon","dark-mint"],hI={light:"Light",dark:"Dark",neon:"Neon","dark-mint":"Dark Mint"},_0=()=>{const[r,e]=le.useState(v0());return le.useEffect(()=>{y0(r)},[r]),g.jsxs("div",{className:"min-h-screen bg-bg text-text p-8",children:[g.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Theme Preferences"}),g.jsx("div",{className:"space-y-4",children:Rl.map(t=>g.jsxs("label",{className:"flex items-center space-x-3",children:[g.jsx("input",{type:"radio",name:"theme",value:t,checked:r===t,onChange:()=>e(t),className:"w-4 h-4 accent-[var(--color-text)]"}),g.jsx("span",{className:"text-text",children:hI[t]})]},t))})]})},dI=({activeView:r,onViewChange:e})=>{const t=[{id:"home",label:"Home",icon:e1},{id:"assignments",label:"Assignments",icon:Yw},{id:"preferences",label:"Preferences",icon:r1},{id:"settings",label:"Settings",icon:o1}];return g.jsx("nav",{className:"fixed bottom-4 left-0 right-0 z-50 px-4",children:g.jsx("div",{className:"max-w-[78rem] mx-auto nav-glass px-1 py-2 rounded-full",children:g.jsx("div",{className:"flex justify-between items-center w-full",children:t.map(s=>{const l=s.icon,c=r===s.id;return g.jsxs("button",{onClick:()=>e(s.id),className:`group flex items-center justify-center h-10 rounded-full transition-colors duration-200 mx-1 px-3 ${c?"nav-item-active shadow-md":"text-subtle hover:text-default hover:bg-subtle/40"}`,"aria-label":s.label,children:[g.jsx(l,{className:"w-5 h-5 text-inherit"}),g.jsx("span",{className:`ml-2 text-[13px] font-medium text-inherit overflow-hidden transition-[max-width,opacity] duration-300 ease-in-out ${c?"opacity-100 max-w-[100px]":"opacity-0 max-w-0"}`,children:s.label})]},s.id)})})})})},fI="1.0.0",pI=({onSignOut:r})=>{const[e,t]=le.useState("main"),s=()=>t("main");return g.jsxs("div",{className:"min-h-screen bg-bg text-default p-8",children:[e==="main"&&g.jsxs("div",{className:"max-w-md mx-auto space-y-6",children:[g.jsx("h1",{className:"text-2xl font-bold mb-6 text-default",children:"Settings"}),g.jsxs("div",{className:"space-y-3",children:[g.jsx("button",{className:"w-full text-left px-4 py-3 rounded bg-subtle hover:bg-primary hover:text-on-primary transition",onClick:()=>t("profile"),children:"Profile"}),g.jsx("button",{className:"w-full text-left px-4 py-3 rounded bg-subtle hover:bg-primary hover:text-on-primary transition",onClick:()=>t("preferences"),children:"Preferences"}),g.jsx("button",{className:"w-full text-left px-4 py-3 rounded bg-subtle hover:bg-primary hover:text-on-primary transition",onClick:()=>t("blacklist"),children:"Black list"}),g.jsx("button",{className:"w-full text-left px-4 py-3 rounded bg-subtle hover:bg-primary hover:text-on-primary transition",onClick:()=>t("userlist"),children:"User list"}),g.jsx("button",{className:"w-full text-left px-4 py-3 rounded bg-subtle hover:bg-primary hover:text-on-primary transition",onClick:()=>t("bugreport"),children:"Bug report"}),g.jsxs("div",{className:"w-full px-4 py-3 rounded bg-subtle flex justify-between items-center",children:[g.jsx("span",{children:"App version"}),g.jsx("span",{className:"font-mono text-sm",children:fI})]})]}),g.jsx("button",{className:"w-full mt-8 px-4 py-3 rounded bg-error text-on-primary font-bold hover:bg-primary transition",onClick:r,children:"Sign out"})]}),e==="preferences"&&g.jsxs("div",{children:[g.jsx("button",{className:"mb-4 text-primary underline",onClick:s,children:"← Back"}),g.jsx(_0,{})]}),e==="profile"&&g.jsxs("div",{children:[g.jsx("button",{className:"mb-4 text-primary underline",onClick:s,children:"← Back"}),g.jsx("h2",{className:"text-xl font-bold mb-4",children:"Profile"}),g.jsx("div",{className:"bg-subtle rounded p-4",children:"Profile component goes here."})]}),e==="blacklist"&&g.jsxs("div",{children:[g.jsx("button",{className:"mb-4 text-primary underline",onClick:s,children:"← Back"}),g.jsx("h2",{className:"text-xl font-bold mb-4",children:"Black list"}),g.jsx("div",{className:"bg-subtle rounded p-4",children:"Blacklist component goes here."})]}),e==="userlist"&&g.jsxs("div",{children:[g.jsx("button",{className:"mb-4 text-primary underline",onClick:s,children:"← Back"}),g.jsx("h2",{className:"text-xl font-bold mb-4",children:"User list"}),g.jsx("div",{className:"bg-subtle rounded p-4",children:"User list component goes here."})]}),e==="bugreport"&&g.jsxs("div",{children:[g.jsx("button",{className:"mb-4 text-primary underline",onClick:s,children:"← Back"}),g.jsx("h2",{className:"text-xl font-bold mb-4",children:"Bug report"}),g.jsx("div",{className:"bg-subtle rounded p-4",children:"Bug report component goes here."})]})]})};function mI(){const{isAuthenticated:r,ready:e}=Zl(),[t,s]=le.useState("login"),[l,c]=le.useState("home");if(!e)return g.jsx(lv,{});if(r)return g.jsxs(g.Fragment,{children:[l==="home"&&g.jsx(oI,{}),l==="assignments"&&g.jsx(cI,{}),l==="preferences"&&g.jsx(_0,{}),l==="settings"&&g.jsx(pI,{}),g.jsx(dI,{activeView:l,onViewChange:c})]});switch(t){case"forgot-password":return g.jsx(f1,{onBackToLogin:()=>s("login")});case"login":default:return g.jsx(d1,{onForgotPassword:()=>s("forgot-password")})}}const gI=le.createContext(void 0),yI=({children:r})=>{const[e,t]=le.useState(v0);le.useEffect(()=>{y0(e)},[e]);const s=()=>{const c=Rl.indexOf(e),h=Rl[(c+1)%Rl.length];t(h)},l=c=>t(c);return g.jsx(gI.Provider,{value:{theme:e,setTheme:l,toggleTheme:s,availableThemes:Rl},children:r})};Pw.createRoot(document.getElementById("root")).render(g.jsx(le.StrictMode,{children:g.jsx(yI,{children:g.jsx(mI,{})})}));

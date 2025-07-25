(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(l){if(l.ep)return;l.ep=!0;const c=t(l);fetch(l.href,c)}})();function Tw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Zh={exports:{}},kl={},ed={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function Iw(){if(fg)return ke;fg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),E=Symbol.iterator;function S(j){return j===null||typeof j!="object"?null:(j=E&&j[E]||j["@@iterator"],typeof j=="function"?j:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,$={};function W(j,H,te){this.props=j,this.context=H,this.refs=$,this.updater=te||U}W.prototype.isReactComponent={},W.prototype.setState=function(j,H){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,H,"setState")},W.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function fe(){}fe.prototype=W.prototype;function G(j,H,te){this.props=j,this.context=H,this.refs=$,this.updater=te||U}var he=G.prototype=new fe;he.constructor=G,B(he,W.prototype),he.isPureReactComponent=!0;var de=Array.isArray,J=Object.prototype.hasOwnProperty,ne={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function C(j,H,te){var xe,Se={},Re=null,Me=null;if(H!=null)for(xe in H.ref!==void 0&&(Me=H.ref),H.key!==void 0&&(Re=""+H.key),H)J.call(H,xe)&&!P.hasOwnProperty(xe)&&(Se[xe]=H[xe]);var Fe=arguments.length-2;if(Fe===1)Se.children=te;else if(1<Fe){for(var $e=Array(Fe),mt=0;mt<Fe;mt++)$e[mt]=arguments[mt+2];Se.children=$e}if(j&&j.defaultProps)for(xe in Fe=j.defaultProps,Fe)Se[xe]===void 0&&(Se[xe]=Fe[xe]);return{$$typeof:r,type:j,key:Re,ref:Me,props:Se,_owner:ne.current}}function N(j,H){return{$$typeof:r,type:j.type,key:H,ref:j.ref,props:j.props,_owner:j._owner}}function A(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function R(j){var H={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(te){return H[te]})}var O=/\/+/g;function I(j,H){return typeof j=="object"&&j!==null&&j.key!=null?R(""+j.key):H.toString(36)}function We(j,H,te,xe,Se){var Re=typeof j;(Re==="undefined"||Re==="boolean")&&(j=null);var Me=!1;if(j===null)Me=!0;else switch(Re){case"string":case"number":Me=!0;break;case"object":switch(j.$$typeof){case r:case e:Me=!0}}if(Me)return Me=j,Se=Se(Me),j=xe===""?"."+I(Me,0):xe,de(Se)?(te="",j!=null&&(te=j.replace(O,"$&/")+"/"),We(Se,H,te,"",function(mt){return mt})):Se!=null&&(A(Se)&&(Se=N(Se,te+(!Se.key||Me&&Me.key===Se.key?"":(""+Se.key).replace(O,"$&/")+"/")+j)),H.push(Se)),1;if(Me=0,xe=xe===""?".":xe+":",de(j))for(var Fe=0;Fe<j.length;Fe++){Re=j[Fe];var $e=xe+I(Re,Fe);Me+=We(Re,H,te,$e,Se)}else if($e=S(j),typeof $e=="function")for(j=$e.call(j),Fe=0;!(Re=j.next()).done;)Re=Re.value,$e=xe+I(Re,Fe++),Me+=We(Re,H,te,$e,Se);else if(Re==="object")throw H=String(j),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Me}function pe(j,H,te){if(j==null)return j;var xe=[],Se=0;return We(j,xe,"","",function(Re){return H.call(te,Re,Se++)}),xe}function Ee(j){if(j._status===-1){var H=j._result;H=H(),H.then(function(te){(j._status===0||j._status===-1)&&(j._status=1,j._result=te)},function(te){(j._status===0||j._status===-1)&&(j._status=2,j._result=te)}),j._status===-1&&(j._status=0,j._result=H)}if(j._status===1)return j._result.default;throw j._result}var ye={current:null},Y={transition:null},oe={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Y,ReactCurrentOwner:ne};function re(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:pe,forEach:function(j,H,te){pe(j,function(){H.apply(this,arguments)},te)},count:function(j){var H=0;return pe(j,function(){H++}),H},toArray:function(j){return pe(j,function(H){return H})||[]},only:function(j){if(!A(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},ke.Component=W,ke.Fragment=t,ke.Profiler=l,ke.PureComponent=G,ke.StrictMode=i,ke.Suspense=v,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,ke.act=re,ke.cloneElement=function(j,H,te){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var xe=B({},j.props),Se=j.key,Re=j.ref,Me=j._owner;if(H!=null){if(H.ref!==void 0&&(Re=H.ref,Me=ne.current),H.key!==void 0&&(Se=""+H.key),j.type&&j.type.defaultProps)var Fe=j.type.defaultProps;for($e in H)J.call(H,$e)&&!P.hasOwnProperty($e)&&(xe[$e]=H[$e]===void 0&&Fe!==void 0?Fe[$e]:H[$e])}var $e=arguments.length-2;if($e===1)xe.children=te;else if(1<$e){Fe=Array($e);for(var mt=0;mt<$e;mt++)Fe[mt]=arguments[mt+2];xe.children=Fe}return{$$typeof:r,type:j.type,key:Se,ref:Re,props:xe,_owner:Me}},ke.createContext=function(j){return j={$$typeof:h,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:c,_context:j},j.Consumer=j},ke.createElement=C,ke.createFactory=function(j){var H=C.bind(null,j);return H.type=j,H},ke.createRef=function(){return{current:null}},ke.forwardRef=function(j){return{$$typeof:m,render:j}},ke.isValidElement=A,ke.lazy=function(j){return{$$typeof:k,_payload:{_status:-1,_result:j},_init:Ee}},ke.memo=function(j,H){return{$$typeof:w,type:j,compare:H===void 0?null:H}},ke.startTransition=function(j){var H=Y.transition;Y.transition={};try{j()}finally{Y.transition=H}},ke.unstable_act=re,ke.useCallback=function(j,H){return ye.current.useCallback(j,H)},ke.useContext=function(j){return ye.current.useContext(j)},ke.useDebugValue=function(){},ke.useDeferredValue=function(j){return ye.current.useDeferredValue(j)},ke.useEffect=function(j,H){return ye.current.useEffect(j,H)},ke.useId=function(){return ye.current.useId()},ke.useImperativeHandle=function(j,H,te){return ye.current.useImperativeHandle(j,H,te)},ke.useInsertionEffect=function(j,H){return ye.current.useInsertionEffect(j,H)},ke.useLayoutEffect=function(j,H){return ye.current.useLayoutEffect(j,H)},ke.useMemo=function(j,H){return ye.current.useMemo(j,H)},ke.useReducer=function(j,H,te){return ye.current.useReducer(j,H,te)},ke.useRef=function(j){return ye.current.useRef(j)},ke.useState=function(j){return ye.current.useState(j)},ke.useSyncExternalStore=function(j,H,te){return ye.current.useSyncExternalStore(j,H,te)},ke.useTransition=function(){return ye.current.useTransition()},ke.version="18.3.1",ke}var pg;function qd(){return pg||(pg=1,ed.exports=Iw()),ed.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function Nw(){if(mg)return kl;mg=1;var r=qd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(m,v,w){var k,E={},S=null,U=null;w!==void 0&&(S=""+w),v.key!==void 0&&(S=""+v.key),v.ref!==void 0&&(U=v.ref);for(k in v)i.call(v,k)&&!c.hasOwnProperty(k)&&(E[k]=v[k]);if(m&&m.defaultProps)for(k in v=m.defaultProps,v)E[k]===void 0&&(E[k]=v[k]);return{$$typeof:e,type:m,key:S,ref:U,props:E,_owner:l.current}}return kl.Fragment=t,kl.jsx=h,kl.jsxs=h,kl}var gg;function bw(){return gg||(gg=1,Zh.exports=Nw()),Zh.exports}var g=bw(),ae=qd();const yg=Tw(ae);var Tu={},td={exports:{}},Yt={},nd={exports:{}},rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function Rw(){return vg||(vg=1,function(r){function e(Y,oe){var re=Y.length;Y.push(oe);e:for(;0<re;){var j=re-1>>>1,H=Y[j];if(0<l(H,oe))Y[j]=oe,Y[re]=H,re=j;else break e}}function t(Y){return Y.length===0?null:Y[0]}function i(Y){if(Y.length===0)return null;var oe=Y[0],re=Y.pop();if(re!==oe){Y[0]=re;e:for(var j=0,H=Y.length,te=H>>>1;j<te;){var xe=2*(j+1)-1,Se=Y[xe],Re=xe+1,Me=Y[Re];if(0>l(Se,re))Re<H&&0>l(Me,Se)?(Y[j]=Me,Y[Re]=re,j=Re):(Y[j]=Se,Y[xe]=re,j=xe);else if(Re<H&&0>l(Me,re))Y[j]=Me,Y[Re]=re,j=Re;else break e}}return oe}function l(Y,oe){var re=Y.sortIndex-oe.sortIndex;return re!==0?re:Y.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var v=[],w=[],k=1,E=null,S=3,U=!1,B=!1,$=!1,W=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function he(Y){for(var oe=t(w);oe!==null;){if(oe.callback===null)i(w);else if(oe.startTime<=Y)i(w),oe.sortIndex=oe.expirationTime,e(v,oe);else break;oe=t(w)}}function de(Y){if($=!1,he(Y),!B)if(t(v)!==null)B=!0,Ee(J);else{var oe=t(w);oe!==null&&ye(de,oe.startTime-Y)}}function J(Y,oe){B=!1,$&&($=!1,fe(C),C=-1),U=!0;var re=S;try{for(he(oe),E=t(v);E!==null&&(!(E.expirationTime>oe)||Y&&!R());){var j=E.callback;if(typeof j=="function"){E.callback=null,S=E.priorityLevel;var H=j(E.expirationTime<=oe);oe=r.unstable_now(),typeof H=="function"?E.callback=H:E===t(v)&&i(v),he(oe)}else i(v);E=t(v)}if(E!==null)var te=!0;else{var xe=t(w);xe!==null&&ye(de,xe.startTime-oe),te=!1}return te}finally{E=null,S=re,U=!1}}var ne=!1,P=null,C=-1,N=5,A=-1;function R(){return!(r.unstable_now()-A<N)}function O(){if(P!==null){var Y=r.unstable_now();A=Y;var oe=!0;try{oe=P(!0,Y)}finally{oe?I():(ne=!1,P=null)}}else ne=!1}var I;if(typeof G=="function")I=function(){G(O)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,pe=We.port2;We.port1.onmessage=O,I=function(){pe.postMessage(null)}}else I=function(){W(O,0)};function Ee(Y){P=Y,ne||(ne=!0,I())}function ye(Y,oe){C=W(function(){Y(r.unstable_now())},oe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_continueExecution=function(){B||U||(B=!0,Ee(J))},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return t(v)},r.unstable_next=function(Y){switch(S){case 1:case 2:case 3:var oe=3;break;default:oe=S}var re=S;S=oe;try{return Y()}finally{S=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Y,oe){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var re=S;S=Y;try{return oe()}finally{S=re}},r.unstable_scheduleCallback=function(Y,oe,re){var j=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?j+re:j):re=j,Y){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=re+H,Y={id:k++,callback:oe,priorityLevel:Y,startTime:re,expirationTime:H,sortIndex:-1},re>j?(Y.sortIndex=re,e(w,Y),t(v)===null&&Y===t(w)&&($?(fe(C),C=-1):$=!0,ye(de,re-j))):(Y.sortIndex=H,e(v,Y),B||U||(B=!0,Ee(J))),Y},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(Y){var oe=S;return function(){var re=S;S=oe;try{return Y.apply(this,arguments)}finally{S=re}}}}(rd)),rd}var _g;function Aw(){return _g||(_g=1,nd.exports=Rw()),nd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function Pw(){if(wg)return Yt;wg=1;var r=qd(),e=Aw();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function c(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(l[n]=s,n=0;n<s.length;n++)i.add(s[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},E={};function S(n){return v.call(E,n)?!0:v.call(k,n)?!1:w.test(n)?E[n]=!0:(k[n]=!0,!1)}function U(n,s,o,u){if(o!==null&&o.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function B(n,s,o,u){if(s===null||typeof s>"u"||U(n,s,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(n,s,o,u,d,p,_){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=s,this.sanitizeURL=p,this.removeEmptyString=_}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];W[s]=new $(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function G(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(fe,G);W[s]=new $(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(fe,G);W[s]=new $(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(fe,G);W[s]=new $(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function he(n,s,o,u){var d=W.hasOwnProperty(s)?W[s]:null;(d!==null?d.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(B(s,o,d,u)&&(o=null),u||d===null?S(s)&&(o===null?n.removeAttribute(s):n.setAttribute(s,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(s=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(s):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,s,o):n.setAttribute(s,o))))}var de=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),ne=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),R=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),Y=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,j;function H(n){if(j===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);j=s&&s[1]||""}return`
`+j+n}var te=!1;function xe(n,s){if(!n||te)return"";te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var u=z}Reflect.construct(n,[],s)}else{try{s.call()}catch(z){u=z}n.call(s.prototype)}else{try{throw Error()}catch(z){u=z}n()}}catch(z){if(z&&u&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),p=u.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var b=`
`+d[_].replace(" at new "," at ");return n.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",n.displayName)),b}while(1<=_&&0<=T);break}}}finally{te=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?H(n):""}function Se(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=xe(n.type,!1),n;case 11:return n=xe(n.type.render,!1),n;case 1:return n=xe(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case ne:return"Portal";case N:return"Profiler";case C:return"StrictMode";case I:return"Suspense";case We:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case R:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case O:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return s=n.displayName||null,s!==null?s:Re(n.type)||"Memo";case Ee:s=n._payload,n=n._init;try{return Re(n(s))}catch{}}return null}function Me(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(s);case 8:return s===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function mt(n){var s=$e(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(_){u=""+_,p.call(this,_)}}),Object.defineProperty(n,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(_){u=""+_},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function rr(n){n._valueTracker||(n._valueTracker=mt(n))}function hi(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=$e(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function Dr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vs(n,s){var o=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function di(n,s){var o=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;o=Fe(s.value!=null?s.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function No(n,s){s=s.checked,s!=null&&he(n,"checked",s,!1)}function bo(n,s){No(n,s);var o=Fe(s.value),u=s.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?fi(n,s.type,o):s.hasOwnProperty("defaultValue")&&fi(n,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function da(n,s,o){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,o||s===n.value||(n.value=s),n.defaultValue=s}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function fi(n,s,o){(s!=="number"||Dr(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var sr=Array.isArray;function ir(n,s,o,u){if(n=n.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=s.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Fe(o),s=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Ro(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function pi(n,s){var o=s.value;if(o==null){if(o=s.children,s=s.defaultValue,o!=null){if(s!=null)throw Error(t(92));if(sr(o)){if(1<o.length)throw Error(t(93));o=o[0]}s=o}s==null&&(s=""),o=s}n._wrapperState={initialValue:Fe(o)}}function mi(n,s){var o=Fe(s.value),u=Fe(s.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),s.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Ao(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function ct(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?ct(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var or,Po=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(s,o,u,d)})}:n}(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=or.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Or(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var _s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ws=["Webkit","ms","Moz","O"];Object.keys(_s).forEach(function(n){ws.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),_s[s]=_s[n]})});function Do(n,s,o){return s==null||typeof s=="boolean"||s===""?"":o||typeof s!="number"||s===0||_s.hasOwnProperty(n)&&_s[n]?(""+s).trim():s+"px"}function Oo(n,s){n=n.style;for(var o in s)if(s.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Do(o,s[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var jo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lo(n,s){if(s){if(jo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Mo(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xs=null;function gi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fo=null,on=null,Un=null;function yi(n){if(n=ul(n)){if(typeof Fo!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Va(s),Fo(n.stateNode,n.type,s))}}function lr(n){on?Un?Un.push(n):Un=[n]:on=n}function Uo(){if(on){var n=on,s=Un;if(Un=on=null,yi(n),s)for(n=0;n<s.length;n++)yi(s[n])}}function vi(n,s){return n(s)}function zo(){}var ar=!1;function Vo(n,s,o){if(ar)return n(s,o);ar=!0;try{return vi(n,s,o)}finally{ar=!1,(on!==null||Un!==null)&&(zo(),Uo())}}function ot(n,s){var o=n.stateNode;if(o===null)return null;var u=Va(o);if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,s,typeof o));return o}var _i=!1;if(m)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){_i=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{_i=!1}function Es(n,s,o,u,d,p,_,T,b){var z=Array.prototype.slice.call(arguments,3);try{s.apply(o,z)}catch(K){this.onError(K)}}var Ss=!1,wi=null,yn=!1,Bo=null,Tc={onError:function(n){Ss=!0,wi=n}};function Ho(n,s,o,u,d,p,_,T,b){Ss=!1,wi=null,Es.apply(Tc,arguments)}function Ic(n,s,o,u,d,p,_,T,b){if(Ho.apply(this,arguments),Ss){if(Ss){var z=wi;Ss=!1,wi=null}else throw Error(t(198));yn||(yn=!0,Bo=z)}}function vn(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function ks(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function _n(n){if(vn(n)!==n)throw Error(t(188))}function fa(n){var s=n.alternate;if(!s){if(s=vn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var o=n,u=s;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return _n(d),n;if(p===u)return _n(d),s;p=p.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=p;else{for(var _=!1,T=d.child;T;){if(T===o){_=!0,o=d,u=p;break}if(T===u){_=!0,u=d,o=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===o){_=!0,o=p,u=d;break}if(T===u){_=!0,u=p,o=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:s}function Wo(n){return n=fa(n),n!==null?xi(n):null}function xi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=xi(n);if(s!==null)return s;n=n.sibling}return null}var Ei=e.unstable_scheduleCallback,$o=e.unstable_cancelCallback,pa=e.unstable_shouldYield,Nc=e.unstable_requestPaint,Ge=e.unstable_now,ma=e.unstable_getCurrentPriorityLevel,Cs=e.unstable_ImmediatePriority,jr=e.unstable_UserBlockingPriority,ln=e.unstable_NormalPriority,Go=e.unstable_LowPriority,ga=e.unstable_IdlePriority,Ts=null,Zt=null;function ya(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ts,n,void 0,(n.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:_a,qo=Math.log,va=Math.LN2;function _a(n){return n>>>=0,n===0?32:31-(qo(n)/va|0)|0}var Si=64,ki=4194304;function Lr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Is(n,s){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,p=n.pingedLanes,_=o&268435455;if(_!==0){var T=_&~d;T!==0?u=Lr(T):(p&=_,p!==0&&(u=Lr(p)))}else _=o&~d,_!==0?u=Lr(_):p!==0&&(u=Lr(p));if(u===0)return 0;if(s!==0&&s!==u&&(s&d)===0&&(d=u&-u,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if((u&4)!==0&&(u|=o&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=u;0<s;)o=31-Lt(s),d=1<<o,u|=n[o],s&=~d;return u}function bc(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ur(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Lt(p),T=1<<_,b=d[_];b===-1?((T&o)===0||(T&u)!==0)&&(d[_]=bc(T,s)):b<=s&&(n.expiredLanes|=T),p&=~T}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ns(){var n=Si;return Si<<=1,(Si&4194240)===0&&(Si=64),n}function Mr(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function Fr(n,s,o){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Lt(s),n[s]=o}function He(n,s){var o=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Lt(o),p=1<<d;s[d]=0,u[d]=-1,n[d]=-1,o&=~p}}function Ur(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-Lt(o),d=1<<u;d&s|n[u]&s&&(n[u]|=s),o&=~d}}var be=0;function zr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var wa,Ci,xa,Ea,Sa,Ko=!1,zn=[],kt=null,wn=null,xn=null,Vr=new Map,an=new Map,Vn=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ka(n,s){switch(n){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Vr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":an.delete(s.pointerId)}}function Vt(n,s,o,u,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},s!==null&&(s=ul(s),s!==null&&Ci(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function Ac(n,s,o,u,d){switch(s){case"focusin":return kt=Vt(kt,n,s,o,u,d),!0;case"dragenter":return wn=Vt(wn,n,s,o,u,d),!0;case"mouseover":return xn=Vt(xn,n,s,o,u,d),!0;case"pointerover":var p=d.pointerId;return Vr.set(p,Vt(Vr.get(p)||null,n,s,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,an.set(p,Vt(an.get(p)||null,n,s,o,u,d)),!0}return!1}function Ca(n){var s=Ps(n.target);if(s!==null){var o=vn(s);if(o!==null){if(s=o.tag,s===13){if(s=ks(o),s!==null){n.blockedOn=s,Sa(n.priority,function(){xa(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function cr(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=Ti(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);xs=u,o.target.dispatchEvent(u),xs=null}else return s=ul(o),s!==null&&Ci(s),n.blockedOn=o,!1;s.shift()}return!0}function bs(n,s,o){cr(n)&&o.delete(s)}function Ta(){Ko=!1,kt!==null&&cr(kt)&&(kt=null),wn!==null&&cr(wn)&&(wn=null),xn!==null&&cr(xn)&&(xn=null),Vr.forEach(bs),an.forEach(bs)}function En(n,s){n.blockedOn===s&&(n.blockedOn=null,Ko||(Ko=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ta)))}function Sn(n){function s(d){return En(d,n)}if(0<zn.length){En(zn[0],n);for(var o=1;o<zn.length;o++){var u=zn[o];u.blockedOn===n&&(u.blockedOn=null)}}for(kt!==null&&En(kt,n),wn!==null&&En(wn,n),xn!==null&&En(xn,n),Vr.forEach(s),an.forEach(s),o=0;o<Vn.length;o++)u=Vn[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Vn.length&&(o=Vn[0],o.blockedOn===null);)Ca(o),o.blockedOn===null&&Vn.shift()}var hr=de.ReactCurrentBatchConfig,Br=!0;function Ze(n,s,o,u){var d=be,p=hr.transition;hr.transition=null;try{be=1,Yo(n,s,o,u)}finally{be=d,hr.transition=p}}function Pc(n,s,o,u){var d=be,p=hr.transition;hr.transition=null;try{be=4,Yo(n,s,o,u)}finally{be=d,hr.transition=p}}function Yo(n,s,o,u){if(Br){var d=Ti(n,s,o,u);if(d===null)Hc(n,s,u,Rs,o),ka(n,u);else if(Ac(d,n,s,o,u))u.stopPropagation();else if(ka(n,u),s&4&&-1<Rc.indexOf(n)){for(;d!==null;){var p=ul(d);if(p!==null&&wa(p),p=Ti(n,s,o,u),p===null&&Hc(n,s,u,Rs,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else Hc(n,s,u,null,o)}}var Rs=null;function Ti(n,s,o,u){if(Rs=null,n=gi(u),n=Ps(n),n!==null)if(s=vn(n),s===null)n=null;else if(o=s.tag,o===13){if(n=ks(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Rs=n,null}function Qo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ma()){case Cs:return 1;case jr:return 4;case ln:case Go:return 16;case ga:return 536870912;default:return 16}default:return 16}}var tn=null,Ii=null,Bt=null;function Xo(){if(Bt)return Bt;var n,s=Ii,o=s.length,u,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<o&&s[n]===d[n];n++);var _=o-n;for(u=1;u<=_&&s[o-u]===d[p-u];u++);return Bt=d.slice(n,1<u?1-u:void 0)}function Ni(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function Jo(){return!1}function Ct(n){function s(o,u,d,p,_){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Bn:Jo,this.isPropagationStopped=Jo,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),s}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=Ct(kn),Hn=re({},kn,{view:0,detail:0}),Dc=Ct(Hn),Ri,dr,Hr,As=re({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:a,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Hr&&(Hr&&n.type==="mousemove"?(Ri=n.screenX-Hr.screenX,dr=n.screenY-Hr.screenY):dr=Ri=0,Hr=n),Ri)},movementY:function(n){return"movementY"in n?n.movementY:dr}}),Ai=Ct(As),Zo=re({},As,{dataTransfer:0}),Ia=Ct(Zo),Pi=re({},Hn,{relatedTarget:0}),Di=Ct(Pi),Na=re({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),fr=Ct(Na),ba=re({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ra=Ct(ba),Aa=re({},kn,{data:0}),el=Ct(Aa),Ht={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pa={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Da={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wr(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=Da[n])?!!s[n]:!1}function a(){return Wr}var f=re({},Hn,{key:function(n){if(n.key){var s=Ht[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Ni(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Pa[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:a,charCode:function(n){return n.type==="keypress"?Ni(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ni(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),y=Ct(f),x=re({},As,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),L=Ct(x),V=re({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:a}),ee=Ct(V),Ve=re({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),dt=Ct(Ve),Ae=re({},As,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gt=Ct(Ae),yt=[9,13,27,32],Wn=m&&"CompositionEvent"in window,Tt=null;m&&"documentMode"in document&&(Tt=document.documentMode);var Oi=m&&"TextEvent"in window&&!Tt,ji=m&&(!Wn||Tt&&8<Tt&&11>=Tt),op=" ",lp=!1;function ap(n,s){switch(n){case"keyup":return yt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Li=!1;function S0(n,s){switch(n){case"compositionend":return up(s);case"keypress":return s.which!==32?null:(lp=!0,op);case"textInput":return n=s.data,n===op&&lp?null:n;default:return null}}function k0(n,s){if(Li)return n==="compositionend"||!Wn&&ap(n,s)?(n=Xo(),Bt=Ii=tn=null,Li=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ji&&s.locale!=="ko"?null:s.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!C0[n.type]:s==="textarea"}function hp(n,s,o,u){lr(u),s=Fa(s,"onChange"),0<s.length&&(o=new bi("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var tl=null,nl=null;function T0(n){bp(n,0)}function Oa(n){var s=Vi(n);if(hi(s))return n}function I0(n,s){if(n==="change")return s}var dp=!1;if(m){var Oc;if(m){var jc="oninput"in document;if(!jc){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),jc=typeof fp.oninput=="function"}Oc=jc}else Oc=!1;dp=Oc&&(!document.documentMode||9<document.documentMode)}function pp(){tl&&(tl.detachEvent("onpropertychange",mp),nl=tl=null)}function mp(n){if(n.propertyName==="value"&&Oa(nl)){var s=[];hp(s,nl,n,gi(n)),Vo(T0,s)}}function N0(n,s,o){n==="focusin"?(pp(),tl=s,nl=o,tl.attachEvent("onpropertychange",mp)):n==="focusout"&&pp()}function b0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oa(nl)}function R0(n,s){if(n==="click")return Oa(s)}function A0(n,s){if(n==="input"||n==="change")return Oa(s)}function P0(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Cn=typeof Object.is=="function"?Object.is:P0;function rl(n,s){if(Cn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!v.call(s,d)||!Cn(n[d],s[d]))return!1}return!0}function gp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yp(n,s){var o=gp(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=gp(o)}}function vp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?vp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function _p(){for(var n=window,s=Dr();s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=Dr(n.document)}return s}function Lc(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function D0(n){var s=_p(),o=n.focusedElem,u=n.selectionRange;if(s!==o&&o&&o.ownerDocument&&vp(o.ownerDocument.documentElement,o)){if(u!==null&&Lc(o)){if(s=u.start,n=u.end,n===void 0&&(n=s),"selectionStart"in o)o.selectionStart=s,o.selectionEnd=Math.min(n,o.value.length);else if(n=(s=o.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!n.extend&&p>u&&(d=u,u=p,p=d),d=yp(o,p);var _=yp(o,u);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),p>u?(n.addRange(s),n.extend(_.node,_.offset)):(s.setEnd(_.node,_.offset),n.addRange(s)))}}for(s=[],n=o;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<s.length;o++)n=s[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var O0=m&&"documentMode"in document&&11>=document.documentMode,Mi=null,Mc=null,sl=null,Fc=!1;function wp(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Fc||Mi==null||Mi!==Dr(u)||(u=Mi,"selectionStart"in u&&Lc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),sl&&rl(sl,u)||(sl=u,u=Fa(Mc,"onSelect"),0<u.length&&(s=new bi("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Mi)))}function ja(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var Fi={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},Uc={},xp={};m&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function La(n){if(Uc[n])return Uc[n];if(!Fi[n])return n;var s=Fi[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in xp)return Uc[n]=s[o];return n}var Ep=La("animationend"),Sp=La("animationiteration"),kp=La("animationstart"),Cp=La("transitionend"),Tp=new Map,Ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(n,s){Tp.set(n,s),c(s,[n])}for(var zc=0;zc<Ip.length;zc++){var Vc=Ip[zc],j0=Vc.toLowerCase(),L0=Vc[0].toUpperCase()+Vc.slice(1);$r(j0,"on"+L0)}$r(Ep,"onAnimationEnd"),$r(Sp,"onAnimationIteration"),$r(kp,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(Cp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M0=new Set("cancel close invalid load scroll toggle".split(" ").concat(il));function Np(n,s,o){var u=n.type||"unknown-event";n.currentTarget=o,Ic(u,s,void 0,n),n.currentTarget=null}function bp(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var p=void 0;if(s)for(var _=u.length-1;0<=_;_--){var T=u[_],b=T.instance,z=T.currentTarget;if(T=T.listener,b!==p&&d.isPropagationStopped())break e;Np(d,T,z),p=b}else for(_=0;_<u.length;_++){if(T=u[_],b=T.instance,z=T.currentTarget,T=T.listener,b!==p&&d.isPropagationStopped())break e;Np(d,T,z),p=b}}}if(yn)throw n=Bo,yn=!1,Bo=null,n}function Qe(n,s){var o=s[Yc];o===void 0&&(o=s[Yc]=new Set);var u=n+"__bubble";o.has(u)||(Rp(s,n,2,!1),o.add(u))}function Bc(n,s,o){var u=0;s&&(u|=4),Rp(o,n,u,s)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function ol(n){if(!n[Ma]){n[Ma]=!0,i.forEach(function(o){o!=="selectionchange"&&(M0.has(o)||Bc(o,!1,n),Bc(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Ma]||(s[Ma]=!0,Bc("selectionchange",!1,s))}}function Rp(n,s,o,u){switch(Qo(s)){case 1:var d=Ze;break;case 4:d=Pc;break;default:d=Yo}o=d.bind(null,s,o,n),d=void 0,!_i||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(s,o,{capture:!0,passive:d}):n.addEventListener(s,o,!0):d!==void 0?n.addEventListener(s,o,{passive:d}):n.addEventListener(s,o,!1)}function Hc(n,s,o,u,d){var p=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var _=u.tag;if(_===3||_===4){var T=u.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=u.return;_!==null;){var b=_.tag;if((b===3||b===4)&&(b=_.stateNode.containerInfo,b===d||b.nodeType===8&&b.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Ps(T),_===null)return;if(b=_.tag,b===5||b===6){u=p=_;continue e}T=T.parentNode}}u=u.return}Vo(function(){var z=p,K=gi(o),Q=[];e:{var q=Tp.get(n);if(q!==void 0){var se=bi,le=n;switch(n){case"keypress":if(Ni(o)===0)break e;case"keydown":case"keyup":se=y;break;case"focusin":le="focus",se=Di;break;case"focusout":le="blur",se=Di;break;case"beforeblur":case"afterblur":se=Di;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ai;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Ia;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=ee;break;case Ep:case Sp:case kp:se=fr;break;case Cp:se=dt;break;case"scroll":se=Dc;break;case"wheel":se=gt;break;case"copy":case"cut":case"paste":se=Ra;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=L}var ue=(s&4)!==0,lt=!ue&&n==="scroll",M=ue?q!==null?q+"Capture":null:q;ue=[];for(var D=z,F;D!==null;){F=D;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,M!==null&&(X=ot(D,M),X!=null&&ue.push(ll(D,X,F)))),lt)break;D=D.return}0<ue.length&&(q=new se(q,le,null,o,K),Q.push({event:q,listeners:ue}))}}if((s&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",q&&o!==xs&&(le=o.relatedTarget||o.fromElement)&&(Ps(le)||le[pr]))break e;if((se||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,se?(le=o.relatedTarget||o.toElement,se=z,le=le?Ps(le):null,le!==null&&(lt=vn(le),le!==lt||le.tag!==5&&le.tag!==6)&&(le=null)):(se=null,le=z),se!==le)){if(ue=Ai,X="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(ue=L,X="onPointerLeave",M="onPointerEnter",D="pointer"),lt=se==null?q:Vi(se),F=le==null?q:Vi(le),q=new ue(X,D+"leave",se,o,K),q.target=lt,q.relatedTarget=F,X=null,Ps(K)===z&&(ue=new ue(M,D+"enter",le,o,K),ue.target=F,ue.relatedTarget=lt,X=ue),lt=X,se&&le)t:{for(ue=se,M=le,D=0,F=ue;F;F=Ui(F))D++;for(F=0,X=M;X;X=Ui(X))F++;for(;0<D-F;)ue=Ui(ue),D--;for(;0<F-D;)M=Ui(M),F--;for(;D--;){if(ue===M||M!==null&&ue===M.alternate)break t;ue=Ui(ue),M=Ui(M)}ue=null}else ue=null;se!==null&&Ap(Q,q,se,ue,!1),le!==null&&lt!==null&&Ap(Q,lt,le,ue,!0)}}e:{if(q=z?Vi(z):window,se=q.nodeName&&q.nodeName.toLowerCase(),se==="select"||se==="input"&&q.type==="file")var ce=I0;else if(cp(q))if(dp)ce=A0;else{ce=b0;var me=N0}else(se=q.nodeName)&&se.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ce=R0);if(ce&&(ce=ce(n,z))){hp(Q,ce,o,K);break e}me&&me(n,q,z),n==="focusout"&&(me=q._wrapperState)&&me.controlled&&q.type==="number"&&fi(q,"number",q.value)}switch(me=z?Vi(z):window,n){case"focusin":(cp(me)||me.contentEditable==="true")&&(Mi=me,Mc=z,sl=null);break;case"focusout":sl=Mc=Mi=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,wp(Q,o,K);break;case"selectionchange":if(O0)break;case"keydown":case"keyup":wp(Q,o,K)}var ge;if(Wn)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Li?ap(n,o)&&(_e="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(_e="onCompositionStart");_e&&(ji&&o.locale!=="ko"&&(Li||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Li&&(ge=Xo()):(tn=K,Ii="value"in tn?tn.value:tn.textContent,Li=!0)),me=Fa(z,_e),0<me.length&&(_e=new el(_e,n,null,o,K),Q.push({event:_e,listeners:me}),ge?_e.data=ge:(ge=up(o),ge!==null&&(_e.data=ge)))),(ge=Oi?S0(n,o):k0(n,o))&&(z=Fa(z,"onBeforeInput"),0<z.length&&(K=new el("onBeforeInput","beforeinput",null,o,K),Q.push({event:K,listeners:z}),K.data=ge))}bp(Q,s)})}function ll(n,s,o){return{instance:n,listener:s,currentTarget:o}}function Fa(n,s){for(var o=s+"Capture",u=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ot(n,o),p!=null&&u.unshift(ll(n,p,d)),p=ot(n,s),p!=null&&u.push(ll(n,p,d))),n=n.return}return u}function Ui(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ap(n,s,o,u,d){for(var p=s._reactName,_=[];o!==null&&o!==u;){var T=o,b=T.alternate,z=T.stateNode;if(b!==null&&b===u)break;T.tag===5&&z!==null&&(T=z,d?(b=ot(o,p),b!=null&&_.unshift(ll(o,b,T))):d||(b=ot(o,p),b!=null&&_.push(ll(o,b,T)))),o=o.return}_.length!==0&&n.push({event:s,listeners:_})}var F0=/\r\n?/g,U0=/\u0000|\uFFFD/g;function Pp(n){return(typeof n=="string"?n:""+n).replace(F0,`
`).replace(U0,"")}function Ua(n,s,o){if(s=Pp(s),Pp(n)!==s&&o)throw Error(t(425))}function za(){}var Wc=null,$c=null;function Gc(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var qc=typeof setTimeout=="function"?setTimeout:void 0,z0=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(n){return Dp.resolve(null).then(n).catch(B0)}:qc;function B0(n){setTimeout(function(){throw n})}function Kc(n,s){var o=s,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),Sn(s);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);Sn(s)}function Gr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Op(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return n;s--}else o==="/$"&&s++}n=n.previousSibling}return null}var zi=Math.random().toString(36).slice(2),$n="__reactFiber$"+zi,al="__reactProps$"+zi,pr="__reactContainer$"+zi,Yc="__reactEvents$"+zi,H0="__reactListeners$"+zi,W0="__reactHandles$"+zi;function Ps(n){var s=n[$n];if(s)return s;for(var o=n.parentNode;o;){if(s=o[pr]||o[$n]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=Op(n);n!==null;){if(o=n[$n])return o;n=Op(n)}return s}n=o,o=n.parentNode}return null}function ul(n){return n=n[$n]||n[pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vi(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Va(n){return n[al]||null}var Qc=[],Bi=-1;function qr(n){return{current:n}}function Xe(n){0>Bi||(n.current=Qc[Bi],Qc[Bi]=null,Bi--)}function qe(n,s){Bi++,Qc[Bi]=n.current,n.current=s}var Kr={},Pt=qr(Kr),Wt=qr(!1),Ds=Kr;function Hi(n,s){var o=n.type.contextTypes;if(!o)return Kr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=s[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function $t(n){return n=n.childContextTypes,n!=null}function Ba(){Xe(Wt),Xe(Pt)}function jp(n,s,o){if(Pt.current!==Kr)throw Error(t(168));qe(Pt,s),qe(Wt,o)}function Lp(n,s,o){var u=n.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in s))throw Error(t(108,Me(n)||"Unknown",d));return re({},o,u)}function Ha(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Kr,Ds=Pt.current,qe(Pt,n),qe(Wt,Wt.current),!0}function Mp(n,s,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Lp(n,s,Ds),u.__reactInternalMemoizedMergedChildContext=n,Xe(Wt),Xe(Pt),qe(Pt,n)):Xe(Wt),qe(Wt,o)}var mr=null,Wa=!1,Xc=!1;function Fp(n){mr===null?mr=[n]:mr.push(n)}function $0(n){Wa=!0,Fp(n)}function Yr(){if(!Xc&&mr!==null){Xc=!0;var n=0,s=be;try{var o=mr;for(be=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}mr=null,Wa=!1}catch(d){throw mr!==null&&(mr=mr.slice(n+1)),Ei(Cs,Yr),d}finally{be=s,Xc=!1}}return null}var Wi=[],$i=0,$a=null,Ga=0,un=[],cn=0,Os=null,gr=1,yr="";function js(n,s){Wi[$i++]=Ga,Wi[$i++]=$a,$a=n,Ga=s}function Up(n,s,o){un[cn++]=gr,un[cn++]=yr,un[cn++]=Os,Os=n;var u=gr;n=yr;var d=32-Lt(u)-1;u&=~(1<<d),o+=1;var p=32-Lt(s)+d;if(30<p){var _=d-d%5;p=(u&(1<<_)-1).toString(32),u>>=_,d-=_,gr=1<<32-Lt(s)+d|o<<d|u,yr=p+n}else gr=1<<p|o<<d|u,yr=n}function Jc(n){n.return!==null&&(js(n,1),Up(n,1,0))}function Zc(n){for(;n===$a;)$a=Wi[--$i],Wi[$i]=null,Ga=Wi[--$i],Wi[$i]=null;for(;n===Os;)Os=un[--cn],un[cn]=null,yr=un[--cn],un[cn]=null,gr=un[--cn],un[cn]=null}var nn=null,rn=null,Je=!1,Tn=null;function zp(n,s){var o=pn(5,null,null,0);o.elementType="DELETED",o.stateNode=s,o.return=n,s=n.deletions,s===null?(n.deletions=[o],n.flags|=16):s.push(o)}function Vp(n,s){switch(n.tag){case 5:var o=n.type;return s=s.nodeType!==1||o.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,nn=n,rn=Gr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,nn=n,rn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(o=Os!==null?{id:gr,overflow:yr}:null,n.memoizedState={dehydrated:s,treeContext:o,retryLane:1073741824},o=pn(18,null,null,0),o.stateNode=s,o.return=n,n.child=o,nn=n,rn=null,!0):!1;default:return!1}}function eh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function th(n){if(Je){var s=rn;if(s){var o=s;if(!Vp(n,s)){if(eh(n))throw Error(t(418));s=Gr(o.nextSibling);var u=nn;s&&Vp(n,s)?zp(u,o):(n.flags=n.flags&-4097|2,Je=!1,nn=n)}}else{if(eh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,nn=n}}}function Bp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function qa(n){if(n!==nn)return!1;if(!Je)return Bp(n),Je=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Gc(n.type,n.memoizedProps)),s&&(s=rn)){if(eh(n))throw Hp(),Error(t(418));for(;s;)zp(n,s),s=Gr(s.nextSibling)}if(Bp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(s===0){rn=Gr(n.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++}n=n.nextSibling}rn=null}}else rn=nn?Gr(n.stateNode.nextSibling):null;return!0}function Hp(){for(var n=rn;n;)n=Gr(n.nextSibling)}function Gi(){rn=nn=null,Je=!1}function nh(n){Tn===null?Tn=[n]:Tn.push(n)}var G0=de.ReactCurrentBatchConfig;function cl(n,s,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,p=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},s._stringRef=p,s)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ka(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Wp(n){var s=n._init;return s(n._payload)}function $p(n){function s(M,D){if(n){var F=M.deletions;F===null?(M.deletions=[D],M.flags|=16):F.push(D)}}function o(M,D){if(!n)return null;for(;D!==null;)s(M,D),D=D.sibling;return null}function u(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function d(M,D){return M=rs(M,D),M.index=0,M.sibling=null,M}function p(M,D,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<D?(M.flags|=2,D):F):(M.flags|=2,D)):(M.flags|=1048576,D)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,D,F,X){return D===null||D.tag!==6?(D=qh(F,M.mode,X),D.return=M,D):(D=d(D,F),D.return=M,D)}function b(M,D,F,X){var ce=F.type;return ce===P?K(M,D,F.props.children,X,F.key):D!==null&&(D.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Ee&&Wp(ce)===D.type)?(X=d(D,F.props),X.ref=cl(M,D,F),X.return=M,X):(X=vu(F.type,F.key,F.props,null,M.mode,X),X.ref=cl(M,D,F),X.return=M,X)}function z(M,D,F,X){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=Kh(F,M.mode,X),D.return=M,D):(D=d(D,F.children||[]),D.return=M,D)}function K(M,D,F,X,ce){return D===null||D.tag!==7?(D=Hs(F,M.mode,X,ce),D.return=M,D):(D=d(D,F),D.return=M,D)}function Q(M,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=qh(""+D,M.mode,F),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case J:return F=vu(D.type,D.key,D.props,null,M.mode,F),F.ref=cl(M,null,D),F.return=M,F;case ne:return D=Kh(D,M.mode,F),D.return=M,D;case Ee:var X=D._init;return Q(M,X(D._payload),F)}if(sr(D)||oe(D))return D=Hs(D,M.mode,F,null),D.return=M,D;Ka(M,D)}return null}function q(M,D,F,X){var ce=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ce!==null?null:T(M,D,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case J:return F.key===ce?b(M,D,F,X):null;case ne:return F.key===ce?z(M,D,F,X):null;case Ee:return ce=F._init,q(M,D,ce(F._payload),X)}if(sr(F)||oe(F))return ce!==null?null:K(M,D,F,X,null);Ka(M,F)}return null}function se(M,D,F,X,ce){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(F)||null,T(D,M,""+X,ce);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case J:return M=M.get(X.key===null?F:X.key)||null,b(D,M,X,ce);case ne:return M=M.get(X.key===null?F:X.key)||null,z(D,M,X,ce);case Ee:var me=X._init;return se(M,D,F,me(X._payload),ce)}if(sr(X)||oe(X))return M=M.get(F)||null,K(D,M,X,ce,null);Ka(D,X)}return null}function le(M,D,F,X){for(var ce=null,me=null,ge=D,_e=D=0,wt=null;ge!==null&&_e<F.length;_e++){ge.index>_e?(wt=ge,ge=null):wt=ge.sibling;var Le=q(M,ge,F[_e],X);if(Le===null){ge===null&&(ge=wt);break}n&&ge&&Le.alternate===null&&s(M,ge),D=p(Le,D,_e),me===null?ce=Le:me.sibling=Le,me=Le,ge=wt}if(_e===F.length)return o(M,ge),Je&&js(M,_e),ce;if(ge===null){for(;_e<F.length;_e++)ge=Q(M,F[_e],X),ge!==null&&(D=p(ge,D,_e),me===null?ce=ge:me.sibling=ge,me=ge);return Je&&js(M,_e),ce}for(ge=u(M,ge);_e<F.length;_e++)wt=se(ge,M,_e,F[_e],X),wt!==null&&(n&&wt.alternate!==null&&ge.delete(wt.key===null?_e:wt.key),D=p(wt,D,_e),me===null?ce=wt:me.sibling=wt,me=wt);return n&&ge.forEach(function(ss){return s(M,ss)}),Je&&js(M,_e),ce}function ue(M,D,F,X){var ce=oe(F);if(typeof ce!="function")throw Error(t(150));if(F=ce.call(F),F==null)throw Error(t(151));for(var me=ce=null,ge=D,_e=D=0,wt=null,Le=F.next();ge!==null&&!Le.done;_e++,Le=F.next()){ge.index>_e?(wt=ge,ge=null):wt=ge.sibling;var ss=q(M,ge,Le.value,X);if(ss===null){ge===null&&(ge=wt);break}n&&ge&&ss.alternate===null&&s(M,ge),D=p(ss,D,_e),me===null?ce=ss:me.sibling=ss,me=ss,ge=wt}if(Le.done)return o(M,ge),Je&&js(M,_e),ce;if(ge===null){for(;!Le.done;_e++,Le=F.next())Le=Q(M,Le.value,X),Le!==null&&(D=p(Le,D,_e),me===null?ce=Le:me.sibling=Le,me=Le);return Je&&js(M,_e),ce}for(ge=u(M,ge);!Le.done;_e++,Le=F.next())Le=se(ge,M,_e,Le.value,X),Le!==null&&(n&&Le.alternate!==null&&ge.delete(Le.key===null?_e:Le.key),D=p(Le,D,_e),me===null?ce=Le:me.sibling=Le,me=Le);return n&&ge.forEach(function(Cw){return s(M,Cw)}),Je&&js(M,_e),ce}function lt(M,D,F,X){if(typeof F=="object"&&F!==null&&F.type===P&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case J:e:{for(var ce=F.key,me=D;me!==null;){if(me.key===ce){if(ce=F.type,ce===P){if(me.tag===7){o(M,me.sibling),D=d(me,F.props.children),D.return=M,M=D;break e}}else if(me.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Ee&&Wp(ce)===me.type){o(M,me.sibling),D=d(me,F.props),D.ref=cl(M,me,F),D.return=M,M=D;break e}o(M,me);break}else s(M,me);me=me.sibling}F.type===P?(D=Hs(F.props.children,M.mode,X,F.key),D.return=M,M=D):(X=vu(F.type,F.key,F.props,null,M.mode,X),X.ref=cl(M,D,F),X.return=M,M=X)}return _(M);case ne:e:{for(me=F.key;D!==null;){if(D.key===me)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){o(M,D.sibling),D=d(D,F.children||[]),D.return=M,M=D;break e}else{o(M,D);break}else s(M,D);D=D.sibling}D=Kh(F,M.mode,X),D.return=M,M=D}return _(M);case Ee:return me=F._init,lt(M,D,me(F._payload),X)}if(sr(F))return le(M,D,F,X);if(oe(F))return ue(M,D,F,X);Ka(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(o(M,D.sibling),D=d(D,F),D.return=M,M=D):(o(M,D),D=qh(F,M.mode,X),D.return=M,M=D),_(M)):o(M,D)}return lt}var qi=$p(!0),Gp=$p(!1),Ya=qr(null),Qa=null,Ki=null,rh=null;function sh(){rh=Ki=Qa=null}function ih(n){var s=Ya.current;Xe(Ya),n._currentValue=s}function oh(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function Yi(n,s){Qa=n,rh=Ki=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Gt=!0),n.firstContext=null)}function hn(n){var s=n._currentValue;if(rh!==n)if(n={context:n,memoizedValue:s,next:null},Ki===null){if(Qa===null)throw Error(t(308));Ki=n,Qa.dependencies={lanes:0,firstContext:n}}else Ki=Ki.next=n;return s}var Ls=null;function lh(n){Ls===null?Ls=[n]:Ls.push(n)}function qp(n,s,o,u){var d=s.interleaved;return d===null?(o.next=o,lh(s)):(o.next=d.next,d.next=o),s.interleaved=o,vr(n,u)}function vr(n,s){n.lanes|=s;var o=n.alternate;for(o!==null&&(o.lanes|=s),o=n,n=n.return;n!==null;)n.childLanes|=s,o=n.alternate,o!==null&&(o.childLanes|=s),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Qr=!1;function ah(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _r(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function Xr(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(je&2)!==0){var d=u.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s,vr(n,o)}return d=u.interleaved,d===null?(s.next=s,lh(u)):(s.next=d.next,d.next=s),u.interleaved=s,vr(n,o)}function Xa(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194240)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Ur(n,o)}}function Yp(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var _={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=_:p=p.next=_,o=o.next}while(o!==null);p===null?d=p=s:p=p.next=s}else d=p=s;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}function Ja(n,s,o,u){var d=n.updateQueue;Qr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var b=T,z=b.next;b.next=null,_===null?p=z:_.next=z,_=b;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==_&&(T===null?K.firstBaseUpdate=z:T.next=z,K.lastBaseUpdate=b))}if(p!==null){var Q=d.baseState;_=0,K=z=b=null,T=p;do{var q=T.lane,se=T.eventTime;if((u&q)===q){K!==null&&(K=K.next={eventTime:se,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var le=n,ue=T;switch(q=s,se=o,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){Q=le.call(se,Q,q);break e}Q=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,q=typeof le=="function"?le.call(se,Q,q):le,q==null)break e;Q=re({},Q,q);break e;case 2:Qr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else se={eventTime:se,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(z=K=se,b=Q):K=K.next=se,_|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(K===null&&(b=Q),d.baseState=b,d.firstBaseUpdate=z,d.lastBaseUpdate=K,s=d.shared.interleaved,s!==null){d=s;do _|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);Us|=_,n.lanes=_,n.memoizedState=Q}}function Qp(n,s,o){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var u=n[s],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var hl={},Gn=qr(hl),dl=qr(hl),fl=qr(hl);function Ms(n){if(n===hl)throw Error(t(174));return n}function uh(n,s){switch(qe(fl,s),qe(dl,n),qe(Gn,hl),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ht(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=ht(s,n)}Xe(Gn),qe(Gn,s)}function Qi(){Xe(Gn),Xe(dl),Xe(fl)}function Xp(n){Ms(fl.current);var s=Ms(Gn.current),o=ht(s,n.type);s!==o&&(qe(dl,n),qe(Gn,o))}function ch(n){dl.current===n&&(Xe(Gn),Xe(dl))}var et=qr(0);function Za(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var hh=[];function dh(){for(var n=0;n<hh.length;n++)hh[n]._workInProgressVersionPrimary=null;hh.length=0}var eu=de.ReactCurrentDispatcher,fh=de.ReactCurrentBatchConfig,Fs=0,tt=null,ft=null,vt=null,tu=!1,pl=!1,ml=0,q0=0;function Dt(){throw Error(t(321))}function ph(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!Cn(n[o],s[o]))return!1;return!0}function mh(n,s,o,u,d,p){if(Fs=p,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,eu.current=n===null||n.memoizedState===null?X0:J0,n=o(u,d),pl){p=0;do{if(pl=!1,ml=0,25<=p)throw Error(t(301));p+=1,vt=ft=null,s.updateQueue=null,eu.current=Z0,n=o(u,d)}while(pl)}if(eu.current=su,s=ft!==null&&ft.next!==null,Fs=0,vt=ft=tt=null,tu=!1,s)throw Error(t(300));return n}function gh(){var n=ml!==0;return ml=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?tt.memoizedState=vt=n:vt=vt.next=n,vt}function dn(){if(ft===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var s=vt===null?tt.memoizedState:vt.next;if(s!==null)vt=s,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},vt===null?tt.memoizedState=vt=n:vt=vt.next=n}return vt}function gl(n,s){return typeof s=="function"?s(n):s}function yh(n){var s=dn(),o=s.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=ft,d=u.baseQueue,p=o.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}u.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,u=u.baseState;var T=_=null,b=null,z=p;do{var K=z.lane;if((Fs&K)===K)b!==null&&(b=b.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),u=z.hasEagerState?z.eagerState:n(u,z.action);else{var Q={lane:K,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};b===null?(T=b=Q,_=u):b=b.next=Q,tt.lanes|=K,Us|=K}z=z.next}while(z!==null&&z!==p);b===null?_=u:b.next=T,Cn(u,s.memoizedState)||(Gt=!0),s.memoizedState=u,s.baseState=_,s.baseQueue=b,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do p=d.lane,tt.lanes|=p,Us|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[s.memoizedState,o.dispatch]}function vh(n){var s=dn(),o=s.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,p=s.memoizedState;if(d!==null){o.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Cn(p,s.memoizedState)||(Gt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),o.lastRenderedState=p}return[p,u]}function Jp(){}function Zp(n,s){var o=tt,u=dn(),d=s(),p=!Cn(u.memoizedState,d);if(p&&(u.memoizedState=d,Gt=!0),u=u.queue,_h(nm.bind(null,o,u,n),[n]),u.getSnapshot!==s||p||vt!==null&&vt.memoizedState.tag&1){if(o.flags|=2048,yl(9,tm.bind(null,o,u,d,s),void 0,null),_t===null)throw Error(t(349));(Fs&30)!==0||em(o,s,d)}return d}function em(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function tm(n,s,o,u){s.value=o,s.getSnapshot=u,rm(s)&&sm(n)}function nm(n,s,o){return o(function(){rm(s)&&sm(n)})}function rm(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!Cn(n,o)}catch{return!0}}function sm(n){var s=vr(n,1);s!==null&&Rn(s,n,1,-1)}function im(n){var s=qn();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gl,lastRenderedState:n},s.queue=n,n=n.dispatch=Q0.bind(null,tt,n),[s.memoizedState,n]}function yl(n,s,o,u){return n={tag:n,create:s,destroy:o,deps:u,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=n.next=n):(o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n)),n}function om(){return dn().memoizedState}function nu(n,s,o,u){var d=qn();tt.flags|=n,d.memoizedState=yl(1|s,o,void 0,u===void 0?null:u)}function ru(n,s,o,u){var d=dn();u=u===void 0?null:u;var p=void 0;if(ft!==null){var _=ft.memoizedState;if(p=_.destroy,u!==null&&ph(u,_.deps)){d.memoizedState=yl(s,o,p,u);return}}tt.flags|=n,d.memoizedState=yl(1|s,o,p,u)}function lm(n,s){return nu(8390656,8,n,s)}function _h(n,s){return ru(2048,8,n,s)}function am(n,s){return ru(4,2,n,s)}function um(n,s){return ru(4,4,n,s)}function cm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function hm(n,s,o){return o=o!=null?o.concat([n]):null,ru(4,4,cm.bind(null,s,n),o)}function wh(){}function dm(n,s){var o=dn();s=s===void 0?null:s;var u=o.memoizedState;return u!==null&&s!==null&&ph(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function fm(n,s){var o=dn();s=s===void 0?null:s;var u=o.memoizedState;return u!==null&&s!==null&&ph(s,u[1])?u[0]:(n=n(),o.memoizedState=[n,s],n)}function pm(n,s,o){return(Fs&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=o):(Cn(o,s)||(o=Ns(),tt.lanes|=o,Us|=o,n.baseState=!0),s)}function K0(n,s){var o=be;be=o!==0&&4>o?o:4,n(!0);var u=fh.transition;fh.transition={};try{n(!1),s()}finally{be=o,fh.transition=u}}function mm(){return dn().memoizedState}function Y0(n,s,o){var u=ts(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},gm(n))ym(s,o);else if(o=qp(n,s,o,u),o!==null){var d=Ft();Rn(o,n,u,d),vm(o,s,u)}}function Q0(n,s,o){var u=ts(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(gm(n))ym(s,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var _=s.lastRenderedState,T=p(_,o);if(d.hasEagerState=!0,d.eagerState=T,Cn(T,_)){var b=s.interleaved;b===null?(d.next=d,lh(s)):(d.next=b.next,b.next=d),s.interleaved=d;return}}catch{}finally{}o=qp(n,s,d,u),o!==null&&(d=Ft(),Rn(o,n,u,d),vm(o,s,u))}}function gm(n){var s=n.alternate;return n===tt||s!==null&&s===tt}function ym(n,s){pl=tu=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function vm(n,s,o){if((o&4194240)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Ur(n,o)}}var su={readContext:hn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},X0={readContext:hn,useCallback:function(n,s){return qn().memoizedState=[n,s===void 0?null:s],n},useContext:hn,useEffect:lm,useImperativeHandle:function(n,s,o){return o=o!=null?o.concat([n]):null,nu(4194308,4,cm.bind(null,s,n),o)},useLayoutEffect:function(n,s){return nu(4194308,4,n,s)},useInsertionEffect:function(n,s){return nu(4,2,n,s)},useMemo:function(n,s){var o=qn();return s=s===void 0?null:s,n=n(),o.memoizedState=[n,s],n},useReducer:function(n,s,o){var u=qn();return s=o!==void 0?o(s):s,u.memoizedState=u.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},u.queue=n,n=n.dispatch=Y0.bind(null,tt,n),[u.memoizedState,n]},useRef:function(n){var s=qn();return n={current:n},s.memoizedState=n},useState:im,useDebugValue:wh,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=im(!1),s=n[0];return n=K0.bind(null,n[1]),qn().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,o){var u=tt,d=qn();if(Je){if(o===void 0)throw Error(t(407));o=o()}else{if(o=s(),_t===null)throw Error(t(349));(Fs&30)!==0||em(u,s,o)}d.memoizedState=o;var p={value:o,getSnapshot:s};return d.queue=p,lm(nm.bind(null,u,p,n),[n]),u.flags|=2048,yl(9,tm.bind(null,u,p,o,s),void 0,null),o},useId:function(){var n=qn(),s=_t.identifierPrefix;if(Je){var o=yr,u=gr;o=(u&~(1<<32-Lt(u)-1)).toString(32)+o,s=":"+s+"R"+o,o=ml++,0<o&&(s+="H"+o.toString(32)),s+=":"}else o=q0++,s=":"+s+"r"+o.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},J0={readContext:hn,useCallback:dm,useContext:hn,useEffect:_h,useImperativeHandle:hm,useInsertionEffect:am,useLayoutEffect:um,useMemo:fm,useReducer:yh,useRef:om,useState:function(){return yh(gl)},useDebugValue:wh,useDeferredValue:function(n){var s=dn();return pm(s,ft.memoizedState,n)},useTransition:function(){var n=yh(gl)[0],s=dn().memoizedState;return[n,s]},useMutableSource:Jp,useSyncExternalStore:Zp,useId:mm,unstable_isNewReconciler:!1},Z0={readContext:hn,useCallback:dm,useContext:hn,useEffect:_h,useImperativeHandle:hm,useInsertionEffect:am,useLayoutEffect:um,useMemo:fm,useReducer:vh,useRef:om,useState:function(){return vh(gl)},useDebugValue:wh,useDeferredValue:function(n){var s=dn();return ft===null?s.memoizedState=n:pm(s,ft.memoizedState,n)},useTransition:function(){var n=vh(gl)[0],s=dn().memoizedState;return[n,s]},useMutableSource:Jp,useSyncExternalStore:Zp,useId:mm,unstable_isNewReconciler:!1};function In(n,s){if(n&&n.defaultProps){s=re({},s),n=n.defaultProps;for(var o in n)s[o]===void 0&&(s[o]=n[o]);return s}return s}function xh(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:re({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var iu={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,s,o){n=n._reactInternals;var u=Ft(),d=ts(n),p=_r(u,d);p.payload=s,o!=null&&(p.callback=o),s=Xr(n,p,d),s!==null&&(Rn(s,n,d,u),Xa(s,n,d))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=Ft(),d=ts(n),p=_r(u,d);p.tag=1,p.payload=s,o!=null&&(p.callback=o),s=Xr(n,p,d),s!==null&&(Rn(s,n,d,u),Xa(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=Ft(),u=ts(n),d=_r(o,u);d.tag=2,s!=null&&(d.callback=s),s=Xr(n,d,u),s!==null&&(Rn(s,n,u,o),Xa(s,n,u))}};function _m(n,s,o,u,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,_):s.prototype&&s.prototype.isPureReactComponent?!rl(o,u)||!rl(d,p):!0}function wm(n,s,o){var u=!1,d=Kr,p=s.contextType;return typeof p=="object"&&p!==null?p=hn(p):(d=$t(s)?Ds:Pt.current,u=s.contextTypes,p=(u=u!=null)?Hi(n,d):Kr),s=new s(o,p),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=iu,n.stateNode=s,s._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),s}function xm(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&iu.enqueueReplaceState(s,s.state,null)}function Eh(n,s,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},ah(n);var p=s.contextType;typeof p=="object"&&p!==null?d.context=hn(p):(p=$t(s)?Ds:Pt.current,d.context=Hi(n,p)),d.state=n.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(xh(n,s,p,o),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&iu.enqueueReplaceState(d,d.state,null),Ja(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Xi(n,s){try{var o="",u=s;do o+=Se(u),u=u.return;while(u);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:s,stack:d,digest:null}}function Sh(n,s,o){return{value:n,source:null,stack:o??null,digest:s??null}}function kh(n,s){try{console.error(s.value)}catch(o){setTimeout(function(){throw o})}}var ew=typeof WeakMap=="function"?WeakMap:Map;function Em(n,s,o){o=_r(-1,o),o.tag=3,o.payload={element:null};var u=s.value;return o.callback=function(){du||(du=!0,Uh=u),kh(n,s)},o}function Sm(n,s,o){o=_r(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=s.value;o.payload=function(){return u(d)},o.callback=function(){kh(n,s)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){kh(n,s),typeof u!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var _=s.stack;this.componentDidCatch(s.value,{componentStack:_!==null?_:""})}),o}function km(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new ew;var d=new Set;u.set(s,d)}else d=u.get(s),d===void 0&&(d=new Set,u.set(s,d));d.has(o)||(d.add(o),n=pw.bind(null,n,s,o),s.then(n,n))}function Cm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Tm(n,s,o,u,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(s=_r(-1,1),s.tag=2,Xr(o,s,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var tw=de.ReactCurrentOwner,Gt=!1;function Mt(n,s,o,u){s.child=n===null?Gp(s,null,o,u):qi(s,n.child,o,u)}function Im(n,s,o,u,d){o=o.render;var p=s.ref;return Yi(s,d),u=mh(n,s,o,u,p,d),o=gh(),n!==null&&!Gt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,wr(n,s,d)):(Je&&o&&Jc(s),s.flags|=1,Mt(n,s,u,d),s.child)}function Nm(n,s,o,u,d){if(n===null){var p=o.type;return typeof p=="function"&&!Gh(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(s.tag=15,s.type=p,bm(n,s,p,u,d)):(n=vu(o.type,null,u,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(o=o.compare,o=o!==null?o:rl,o(_,u)&&n.ref===s.ref)return wr(n,s,d)}return s.flags|=1,n=rs(p,u),n.ref=s.ref,n.return=s,s.child=n}function bm(n,s,o,u,d){if(n!==null){var p=n.memoizedProps;if(rl(p,u)&&n.ref===s.ref)if(Gt=!1,s.pendingProps=u=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return s.lanes=n.lanes,wr(n,s,d)}return Ch(n,s,o,u,d)}function Rm(n,s,o){var u=s.pendingProps,d=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(Zi,sn),sn|=o;else{if((o&1073741824)===0)return n=p!==null?p.baseLanes|o:o,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,qe(Zi,sn),sn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,qe(Zi,sn),sn|=u}else p!==null?(u=p.baseLanes|o,s.memoizedState=null):u=o,qe(Zi,sn),sn|=u;return Mt(n,s,d,o),s.child}function Am(n,s){var o=s.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(s.flags|=512,s.flags|=2097152)}function Ch(n,s,o,u,d){var p=$t(o)?Ds:Pt.current;return p=Hi(s,p),Yi(s,d),o=mh(n,s,o,u,p,d),u=gh(),n!==null&&!Gt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,wr(n,s,d)):(Je&&u&&Jc(s),s.flags|=1,Mt(n,s,o,d),s.child)}function Pm(n,s,o,u,d){if($t(o)){var p=!0;Ha(s)}else p=!1;if(Yi(s,d),s.stateNode===null)lu(n,s),wm(s,o,u),Eh(s,o,u,d),u=!0;else if(n===null){var _=s.stateNode,T=s.memoizedProps;_.props=T;var b=_.context,z=o.contextType;typeof z=="object"&&z!==null?z=hn(z):(z=$t(o)?Ds:Pt.current,z=Hi(s,z));var K=o.getDerivedStateFromProps,Q=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function";Q||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==u||b!==z)&&xm(s,_,u,z),Qr=!1;var q=s.memoizedState;_.state=q,Ja(s,u,_,d),b=s.memoizedState,T!==u||q!==b||Wt.current||Qr?(typeof K=="function"&&(xh(s,o,K,u),b=s.memoizedState),(T=Qr||_m(s,o,T,u,q,b,z))?(Q||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(s.flags|=4194308)):(typeof _.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=b),_.props=u,_.state=b,_.context=z,u=T):(typeof _.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{_=s.stateNode,Kp(n,s),T=s.memoizedProps,z=s.type===s.elementType?T:In(s.type,T),_.props=z,Q=s.pendingProps,q=_.context,b=o.contextType,typeof b=="object"&&b!==null?b=hn(b):(b=$t(o)?Ds:Pt.current,b=Hi(s,b));var se=o.getDerivedStateFromProps;(K=typeof se=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==Q||q!==b)&&xm(s,_,u,b),Qr=!1,q=s.memoizedState,_.state=q,Ja(s,u,_,d);var le=s.memoizedState;T!==Q||q!==le||Wt.current||Qr?(typeof se=="function"&&(xh(s,o,se,u),le=s.memoizedState),(z=Qr||_m(s,o,z,u,q,le,b)||!1)?(K||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,le,b),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,le,b)),typeof _.componentDidUpdate=="function"&&(s.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(s.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=le),_.props=u,_.state=le,_.context=b,u=z):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(s.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(s.flags|=1024),u=!1)}return Th(n,s,o,u,p,d)}function Th(n,s,o,u,d,p){Am(n,s);var _=(s.flags&128)!==0;if(!u&&!_)return d&&Mp(s,o,!1),wr(n,s,p);u=s.stateNode,tw.current=s;var T=_&&typeof o.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,n!==null&&_?(s.child=qi(s,n.child,null,p),s.child=qi(s,null,T,p)):Mt(n,s,T,p),s.memoizedState=u.state,d&&Mp(s,o,!0),s.child}function Dm(n){var s=n.stateNode;s.pendingContext?jp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&jp(n,s.context,!1),uh(n,s.containerInfo)}function Om(n,s,o,u,d){return Gi(),nh(d),s.flags|=256,Mt(n,s,o,u),s.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Nh(n){return{baseLanes:n,cachePool:null,transitions:null}}function jm(n,s,o){var u=s.pendingProps,d=et.current,p=!1,_=(s.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(et,d&1),n===null)return th(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(_=u.children,n=u.fallback,p?(u=s.mode,p=s.child,_={mode:"hidden",children:_},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=_u(_,u,0,null),n=Hs(n,u,o,null),p.return=s,n.return=s,p.sibling=n,s.child=p,s.child.memoizedState=Nh(o),s.memoizedState=Ih,n):bh(s,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return nw(n,s,_,u,T,d,o);if(p){p=u.fallback,_=s.mode,d=n.child,T=d.sibling;var b={mode:"hidden",children:u.children};return(_&1)===0&&s.child!==d?(u=s.child,u.childLanes=0,u.pendingProps=b,s.deletions=null):(u=rs(d,b),u.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=rs(T,p):(p=Hs(p,_,o,null),p.flags|=2),p.return=s,u.return=s,u.sibling=p,s.child=u,u=p,p=s.child,_=n.child.memoizedState,_=_===null?Nh(o):{baseLanes:_.baseLanes|o,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~o,s.memoizedState=Ih,u}return p=n.child,n=p.sibling,u=rs(p,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=o),u.return=s,u.sibling=null,n!==null&&(o=s.deletions,o===null?(s.deletions=[n],s.flags|=16):o.push(n)),s.child=u,s.memoizedState=null,u}function bh(n,s){return s=_u({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function ou(n,s,o,u){return u!==null&&nh(u),qi(s,n.child,null,o),n=bh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function nw(n,s,o,u,d,p,_){if(o)return s.flags&256?(s.flags&=-257,u=Sh(Error(t(422))),ou(n,s,_,u)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(p=u.fallback,d=s.mode,u=_u({mode:"visible",children:u.children},d,0,null),p=Hs(p,d,_,null),p.flags|=2,u.return=s,p.return=s,u.sibling=p,s.child=u,(s.mode&1)!==0&&qi(s,n.child,null,_),s.child.memoizedState=Nh(_),s.memoizedState=Ih,p);if((s.mode&1)===0)return ou(n,s,_,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var T=u.dgst;return u=T,p=Error(t(419)),u=Sh(p,u,void 0),ou(n,s,_,u)}if(T=(_&n.childLanes)!==0,Gt||T){if(u=_t,u!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,vr(n,d),Rn(u,n,d,-1))}return $h(),u=Sh(Error(t(421))),ou(n,s,_,u)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=mw.bind(null,n),d._reactRetry=s,null):(n=p.treeContext,rn=Gr(d.nextSibling),nn=s,Je=!0,Tn=null,n!==null&&(un[cn++]=gr,un[cn++]=yr,un[cn++]=Os,gr=n.id,yr=n.overflow,Os=s),s=bh(s,u.children),s.flags|=4096,s)}function Lm(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),oh(n.return,s,o)}function Rh(n,s,o,u,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function Mm(n,s,o){var u=s.pendingProps,d=u.revealOrder,p=u.tail;if(Mt(n,s,u.children,o),u=et.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Lm(n,o,s);else if(n.tag===19)Lm(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(qe(et,u),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(o=s.child,d=null;o!==null;)n=o.alternate,n!==null&&Za(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),Rh(s,!1,d,o,p);break;case"backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&Za(n)===null){s.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Rh(s,!0,o,null,p);break;case"together":Rh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function lu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function wr(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),Us|=s.lanes,(o&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,o=rs(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=rs(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function rw(n,s,o){switch(s.tag){case 3:Dm(s),Gi();break;case 5:Xp(s);break;case 1:$t(s.type)&&Ha(s);break;case 4:uh(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,d=s.memoizedProps.value;qe(Ya,u._currentValue),u._currentValue=d;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(qe(et,et.current&1),s.flags|=128,null):(o&s.child.childLanes)!==0?jm(n,s,o):(qe(et,et.current&1),n=wr(n,s,o),n!==null?n.sibling:null);qe(et,et.current&1);break;case 19:if(u=(o&s.childLanes)!==0,(n.flags&128)!==0){if(u)return Mm(n,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(et,et.current),u)break;return null;case 22:case 23:return s.lanes=0,Rm(n,s,o)}return wr(n,s,o)}var Fm,Ah,Um,zm;Fm=function(n,s){for(var o=s.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ah=function(){},Um=function(n,s,o,u){var d=n.memoizedProps;if(d!==u){n=s.stateNode,Ms(Gn.current);var p=null;switch(o){case"input":d=vs(n,d),u=vs(n,u),p=[];break;case"select":d=re({},d,{value:void 0}),u=re({},u,{value:void 0}),p=[];break;case"textarea":d=Ro(n,d),u=Ro(n,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=za)}Lo(o,u);var _;o=null;for(z in d)if(!u.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var T=d[z];for(_ in T)T.hasOwnProperty(_)&&(o||(o={}),o[_]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(l.hasOwnProperty(z)?p||(p=[]):(p=p||[]).push(z,null));for(z in u){var b=u[z];if(T=d?.[z],u.hasOwnProperty(z)&&b!==T&&(b!=null||T!=null))if(z==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||b&&b.hasOwnProperty(_)||(o||(o={}),o[_]="");for(_ in b)b.hasOwnProperty(_)&&T[_]!==b[_]&&(o||(o={}),o[_]=b[_])}else o||(p||(p=[]),p.push(z,o)),o=b;else z==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,T=T?T.__html:void 0,b!=null&&T!==b&&(p=p||[]).push(z,b)):z==="children"?typeof b!="string"&&typeof b!="number"||(p=p||[]).push(z,""+b):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(l.hasOwnProperty(z)?(b!=null&&z==="onScroll"&&Qe("scroll",n),p||T===b||(p=[])):(p=p||[]).push(z,b))}o&&(p=p||[]).push("style",o);var z=p;(s.updateQueue=z)&&(s.flags|=4)}},zm=function(n,s,o,u){o!==u&&(s.flags|=4)};function vl(n,s){if(!Je)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Ot(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function sw(n,s,o){var u=s.pendingProps;switch(Zc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(s),null;case 1:return $t(s.type)&&Ba(),Ot(s),null;case 3:return u=s.stateNode,Qi(),Xe(Wt),Xe(Pt),dh(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(qa(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Tn!==null&&(Bh(Tn),Tn=null))),Ah(n,s),Ot(s),null;case 5:ch(s);var d=Ms(fl.current);if(o=s.type,n!==null&&s.stateNode!=null)Um(n,s,o,u,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return Ot(s),null}if(n=Ms(Gn.current),qa(s)){u=s.stateNode,o=s.type;var p=s.memoizedProps;switch(u[$n]=s,u[al]=p,n=(s.mode&1)!==0,o){case"dialog":Qe("cancel",u),Qe("close",u);break;case"iframe":case"object":case"embed":Qe("load",u);break;case"video":case"audio":for(d=0;d<il.length;d++)Qe(il[d],u);break;case"source":Qe("error",u);break;case"img":case"image":case"link":Qe("error",u),Qe("load",u);break;case"details":Qe("toggle",u);break;case"input":di(u,p),Qe("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Qe("invalid",u);break;case"textarea":pi(u,p),Qe("invalid",u)}Lo(o,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?u.textContent!==T&&(p.suppressHydrationWarning!==!0&&Ua(u.textContent,T,n),d=["children",T]):typeof T=="number"&&u.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Ua(u.textContent,T,n),d=["children",""+T]):l.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&Qe("scroll",u)}switch(o){case"input":rr(u),da(u,p,!0);break;case"textarea":rr(u),Ao(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=za)}u=d,s.updateQueue=u,u!==null&&(s.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ct(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=_.createElement(o,{is:u.is}):(n=_.createElement(o),o==="select"&&(_=n,u.multiple?_.multiple=!0:u.size&&(_.size=u.size))):n=_.createElementNS(n,o),n[$n]=s,n[al]=u,Fm(n,s,!1,!1),s.stateNode=n;e:{switch(_=Mo(o,u),o){case"dialog":Qe("cancel",n),Qe("close",n),d=u;break;case"iframe":case"object":case"embed":Qe("load",n),d=u;break;case"video":case"audio":for(d=0;d<il.length;d++)Qe(il[d],n);d=u;break;case"source":Qe("error",n),d=u;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=u;break;case"details":Qe("toggle",n),d=u;break;case"input":di(n,u),d=vs(n,u),Qe("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=re({},u,{value:void 0}),Qe("invalid",n);break;case"textarea":pi(n,u),d=Ro(n,u),Qe("invalid",n);break;default:d=u}Lo(o,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var b=T[p];p==="style"?Oo(n,b):p==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&Po(n,b)):p==="children"?typeof b=="string"?(o!=="textarea"||b!=="")&&Or(n,b):typeof b=="number"&&Or(n,""+b):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?b!=null&&p==="onScroll"&&Qe("scroll",n):b!=null&&he(n,p,b,_))}switch(o){case"input":rr(n),da(n,u,!1);break;case"textarea":rr(n),Ao(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Fe(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?ir(n,!!u.multiple,p,!1):u.defaultValue!=null&&ir(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=za)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ot(s),null;case 6:if(n&&s.stateNode!=null)zm(n,s,n.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(o=Ms(fl.current),Ms(Gn.current),qa(s)){if(u=s.stateNode,o=s.memoizedProps,u[$n]=s,(p=u.nodeValue!==o)&&(n=nn,n!==null))switch(n.tag){case 3:Ua(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ua(u.nodeValue,o,(n.mode&1)!==0)}p&&(s.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[$n]=s,s.stateNode=u}return Ot(s),null;case 13:if(Xe(et),u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&rn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Hp(),Gi(),s.flags|=98560,p=!1;else if(p=qa(s),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[$n]=s}else Gi(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ot(s),p=!1}else Tn!==null&&(Bh(Tn),Tn=null),p=!0;if(!p)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=o,s):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(et.current&1)!==0?pt===0&&(pt=3):$h())),s.updateQueue!==null&&(s.flags|=4),Ot(s),null);case 4:return Qi(),Ah(n,s),n===null&&ol(s.stateNode.containerInfo),Ot(s),null;case 10:return ih(s.type._context),Ot(s),null;case 17:return $t(s.type)&&Ba(),Ot(s),null;case 19:if(Xe(et),p=s.memoizedState,p===null)return Ot(s),null;if(u=(s.flags&128)!==0,_=p.rendering,_===null)if(u)vl(p,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(_=Za(n),_!==null){for(s.flags|=128,vl(p,!1),u=_.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=o,o=s.child;o!==null;)p=o,n=u,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return qe(et,et.current&1|2),s.child}n=n.sibling}p.tail!==null&&Ge()>eo&&(s.flags|=128,u=!0,vl(p,!1),s.lanes=4194304)}else{if(!u)if(n=Za(_),n!==null){if(s.flags|=128,u=!0,o=n.updateQueue,o!==null&&(s.updateQueue=o,s.flags|=4),vl(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Je)return Ot(s),null}else 2*Ge()-p.renderingStartTime>eo&&o!==1073741824&&(s.flags|=128,u=!0,vl(p,!1),s.lanes=4194304);p.isBackwards?(_.sibling=s.child,s.child=_):(o=p.last,o!==null?o.sibling=_:s.child=_,p.last=_)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=Ge(),s.sibling=null,o=et.current,qe(et,u?o&1|2:o&1),s):(Ot(s),null);case 22:case 23:return Wh(),u=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(sn&1073741824)!==0&&(Ot(s),s.subtreeFlags&6&&(s.flags|=8192)):Ot(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function iw(n,s){switch(Zc(s),s.tag){case 1:return $t(s.type)&&Ba(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Qi(),Xe(Wt),Xe(Pt),dh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return ch(s),null;case 13:if(Xe(et),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Gi()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Xe(et),null;case 4:return Qi(),null;case 10:return ih(s.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var au=!1,jt=!1,ow=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Ji(n,s){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){rt(n,s,u)}else o.current=null}function Ph(n,s,o){try{o()}catch(u){rt(n,s,u)}}var Vm=!1;function lw(n,s){if(Wc=Br,n=_p(),Lc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var _=0,T=-1,b=-1,z=0,K=0,Q=n,q=null;t:for(;;){for(var se;Q!==o||d!==0&&Q.nodeType!==3||(T=_+d),Q!==p||u!==0&&Q.nodeType!==3||(b=_+u),Q.nodeType===3&&(_+=Q.nodeValue.length),(se=Q.firstChild)!==null;)q=Q,Q=se;for(;;){if(Q===n)break t;if(q===o&&++z===d&&(T=_),q===p&&++K===u&&(b=_),(se=Q.nextSibling)!==null)break;Q=q,q=Q.parentNode}Q=se}o=T===-1||b===-1?null:{start:T,end:b}}else o=null}o=o||{start:0,end:0}}else o=null;for($c={focusedElem:n,selectionRange:o},Br=!1,ie=s;ie!==null;)if(s=ie,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,ie=n;else for(;ie!==null;){s=ie;try{var le=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,lt=le.memoizedState,M=s.stateNode,D=M.getSnapshotBeforeUpdate(s.elementType===s.type?ue:In(s.type,ue),lt);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){rt(s,s.return,X)}if(n=s.sibling,n!==null){n.return=s.return,ie=n;break}ie=s.return}return le=Vm,Vm=!1,le}function _l(n,s,o){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Ph(s,o,p)}d=d.next}while(d!==u)}}function uu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var o=s=s.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==s)}}function Dh(n){var s=n.ref;if(s!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof s=="function"?s(n):s.current=n}}function Bm(n){var s=n.alternate;s!==null&&(n.alternate=null,Bm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[$n],delete s[al],delete s[Yc],delete s[H0],delete s[W0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Hm(n){return n.tag===5||n.tag===3||n.tag===4}function Wm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Hm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Oh(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.nodeType===8?o.parentNode.insertBefore(n,s):o.insertBefore(n,s):(o.nodeType===8?(s=o.parentNode,s.insertBefore(n,o)):(s=o,s.appendChild(n)),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=za));else if(u!==4&&(n=n.child,n!==null))for(Oh(n,s,o),n=n.sibling;n!==null;)Oh(n,s,o),n=n.sibling}function jh(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(jh(n,s,o),n=n.sibling;n!==null;)jh(n,s,o),n=n.sibling}var It=null,Nn=!1;function Jr(n,s,o){for(o=o.child;o!==null;)$m(n,s,o),o=o.sibling}function $m(n,s,o){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ts,o)}catch{}switch(o.tag){case 5:jt||Ji(o,s);case 6:var u=It,d=Nn;It=null,Jr(n,s,o),It=u,Nn=d,It!==null&&(Nn?(n=It,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):It.removeChild(o.stateNode));break;case 18:It!==null&&(Nn?(n=It,o=o.stateNode,n.nodeType===8?Kc(n.parentNode,o):n.nodeType===1&&Kc(n,o),Sn(n)):Kc(It,o.stateNode));break;case 4:u=It,d=Nn,It=o.stateNode.containerInfo,Nn=!0,Jr(n,s,o),It=u,Nn=d;break;case 0:case 11:case 14:case 15:if(!jt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&Ph(o,s,_),d=d.next}while(d!==u)}Jr(n,s,o);break;case 1:if(!jt&&(Ji(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(T){rt(o,s,T)}Jr(n,s,o);break;case 21:Jr(n,s,o);break;case 22:o.mode&1?(jt=(u=jt)||o.memoizedState!==null,Jr(n,s,o),jt=u):Jr(n,s,o);break;default:Jr(n,s,o)}}function Gm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new ow),s.forEach(function(u){var d=gw.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function bn(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var p=n,_=s,T=_;e:for(;T!==null;){switch(T.tag){case 5:It=T.stateNode,Nn=!1;break e;case 3:It=T.stateNode.containerInfo,Nn=!0;break e;case 4:It=T.stateNode.containerInfo,Nn=!0;break e}T=T.return}if(It===null)throw Error(t(160));$m(p,_,d),It=null,Nn=!1;var b=d.alternate;b!==null&&(b.return=null),d.return=null}catch(z){rt(d,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)qm(s,n),s=s.sibling}function qm(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(bn(s,n),Kn(n),u&4){try{_l(3,n,n.return),uu(3,n)}catch(ue){rt(n,n.return,ue)}try{_l(5,n,n.return)}catch(ue){rt(n,n.return,ue)}}break;case 1:bn(s,n),Kn(n),u&512&&o!==null&&Ji(o,o.return);break;case 5:if(bn(s,n),Kn(n),u&512&&o!==null&&Ji(o,o.return),n.flags&32){var d=n.stateNode;try{Or(d,"")}catch(ue){rt(n,n.return,ue)}}if(u&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=o!==null?o.memoizedProps:p,T=n.type,b=n.updateQueue;if(n.updateQueue=null,b!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&No(d,p),Mo(T,_);var z=Mo(T,p);for(_=0;_<b.length;_+=2){var K=b[_],Q=b[_+1];K==="style"?Oo(d,Q):K==="dangerouslySetInnerHTML"?Po(d,Q):K==="children"?Or(d,Q):he(d,K,Q,z)}switch(T){case"input":bo(d,p);break;case"textarea":mi(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var se=p.value;se!=null?ir(d,!!p.multiple,se,!1):q!==!!p.multiple&&(p.defaultValue!=null?ir(d,!!p.multiple,p.defaultValue,!0):ir(d,!!p.multiple,p.multiple?[]:"",!1))}d[al]=p}catch(ue){rt(n,n.return,ue)}}break;case 6:if(bn(s,n),Kn(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ue){rt(n,n.return,ue)}}break;case 3:if(bn(s,n),Kn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Sn(s.containerInfo)}catch(ue){rt(n,n.return,ue)}break;case 4:bn(s,n),Kn(n);break;case 13:bn(s,n),Kn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Fh=Ge())),u&4&&Gm(n);break;case 22:if(K=o!==null&&o.memoizedState!==null,n.mode&1?(jt=(z=jt)||K,bn(s,n),jt=z):bn(s,n),Kn(n),u&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!K&&(n.mode&1)!==0)for(ie=n,K=n.child;K!==null;){for(Q=ie=K;ie!==null;){switch(q=ie,se=q.child,q.tag){case 0:case 11:case 14:case 15:_l(4,q,q.return);break;case 1:Ji(q,q.return);var le=q.stateNode;if(typeof le.componentWillUnmount=="function"){u=q,o=q.return;try{s=u,le.props=s.memoizedProps,le.state=s.memoizedState,le.componentWillUnmount()}catch(ue){rt(u,o,ue)}}break;case 5:Ji(q,q.return);break;case 22:if(q.memoizedState!==null){Qm(Q);continue}}se!==null?(se.return=q,ie=se):Qm(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,z?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=Q.stateNode,b=Q.memoizedProps.style,_=b!=null&&b.hasOwnProperty("display")?b.display:null,T.style.display=Do("display",_))}catch(ue){rt(n,n.return,ue)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=z?"":Q.memoizedProps}catch(ue){rt(n,n.return,ue)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:bn(s,n),Kn(n),u&4&&Gm(n);break;case 21:break;default:bn(s,n),Kn(n)}}function Kn(n){var s=n.flags;if(s&2){try{e:{for(var o=n.return;o!==null;){if(Hm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Or(d,""),u.flags&=-33);var p=Wm(n);jh(n,p,d);break;case 3:case 4:var _=u.stateNode.containerInfo,T=Wm(n);Oh(n,T,_);break;default:throw Error(t(161))}}catch(b){rt(n,n.return,b)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function aw(n,s,o){ie=n,Km(n)}function Km(n,s,o){for(var u=(n.mode&1)!==0;ie!==null;){var d=ie,p=d.child;if(d.tag===22&&u){var _=d.memoizedState!==null||au;if(!_){var T=d.alternate,b=T!==null&&T.memoizedState!==null||jt;T=au;var z=jt;if(au=_,(jt=b)&&!z)for(ie=d;ie!==null;)_=ie,b=_.child,_.tag===22&&_.memoizedState!==null?Xm(d):b!==null?(b.return=_,ie=b):Xm(d);for(;p!==null;)ie=p,Km(p),p=p.sibling;ie=d,au=T,jt=z}Ym(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ie=p):Ym(n)}}function Ym(n){for(;ie!==null;){var s=ie;if((s.flags&8772)!==0){var o=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:jt||uu(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!jt)if(o===null)u.componentDidMount();else{var d=s.elementType===s.type?o.memoizedProps:In(s.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&Qp(s,p,u);break;case 3:var _=s.updateQueue;if(_!==null){if(o=null,s.child!==null)switch(s.child.tag){case 5:o=s.child.stateNode;break;case 1:o=s.child.stateNode}Qp(s,_,o)}break;case 5:var T=s.stateNode;if(o===null&&s.flags&4){o=T;var b=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&o.focus();break;case"img":b.src&&(o.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var K=z.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Sn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||s.flags&512&&Dh(s)}catch(q){rt(s,s.return,q)}}if(s===n){ie=null;break}if(o=s.sibling,o!==null){o.return=s.return,ie=o;break}ie=s.return}}function Qm(n){for(;ie!==null;){var s=ie;if(s===n){ie=null;break}var o=s.sibling;if(o!==null){o.return=s.return,ie=o;break}ie=s.return}}function Xm(n){for(;ie!==null;){var s=ie;try{switch(s.tag){case 0:case 11:case 15:var o=s.return;try{uu(4,s)}catch(b){rt(s,o,b)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var d=s.return;try{u.componentDidMount()}catch(b){rt(s,d,b)}}var p=s.return;try{Dh(s)}catch(b){rt(s,p,b)}break;case 5:var _=s.return;try{Dh(s)}catch(b){rt(s,_,b)}}}catch(b){rt(s,s.return,b)}if(s===n){ie=null;break}var T=s.sibling;if(T!==null){T.return=s.return,ie=T;break}ie=s.return}}var uw=Math.ceil,cu=de.ReactCurrentDispatcher,Lh=de.ReactCurrentOwner,fn=de.ReactCurrentBatchConfig,je=0,_t=null,at=null,Nt=0,sn=0,Zi=qr(0),pt=0,wl=null,Us=0,hu=0,Mh=0,xl=null,qt=null,Fh=0,eo=1/0,xr=null,du=!1,Uh=null,Zr=null,fu=!1,es=null,pu=0,El=0,zh=null,mu=-1,gu=0;function Ft(){return(je&6)!==0?Ge():mu!==-1?mu:mu=Ge()}function ts(n){return(n.mode&1)===0?1:(je&2)!==0&&Nt!==0?Nt&-Nt:G0.transition!==null?(gu===0&&(gu=Ns()),gu):(n=be,n!==0||(n=window.event,n=n===void 0?16:Qo(n.type)),n)}function Rn(n,s,o,u){if(50<El)throw El=0,zh=null,Error(t(185));Fr(n,o,u),((je&2)===0||n!==_t)&&(n===_t&&((je&2)===0&&(hu|=o),pt===4&&ns(n,Nt)),Kt(n,u),o===1&&je===0&&(s.mode&1)===0&&(eo=Ge()+500,Wa&&Yr()))}function Kt(n,s){var o=n.callbackNode;ur(n,s);var u=Is(n,n===_t?Nt:0);if(u===0)o!==null&&$o(o),n.callbackNode=null,n.callbackPriority=0;else if(s=u&-u,n.callbackPriority!==s){if(o!=null&&$o(o),s===1)n.tag===0?$0(Zm.bind(null,n)):Fp(Zm.bind(null,n)),V0(function(){(je&6)===0&&Yr()}),o=null;else{switch(zr(u)){case 1:o=Cs;break;case 4:o=jr;break;case 16:o=ln;break;case 536870912:o=ga;break;default:o=ln}o=lg(o,Jm.bind(null,n))}n.callbackPriority=s,n.callbackNode=o}}function Jm(n,s){if(mu=-1,gu=0,(je&6)!==0)throw Error(t(327));var o=n.callbackNode;if(to()&&n.callbackNode!==o)return null;var u=Is(n,n===_t?Nt:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||s)s=yu(n,u);else{s=u;var d=je;je|=2;var p=tg();(_t!==n||Nt!==s)&&(xr=null,eo=Ge()+500,Vs(n,s));do try{dw();break}catch(T){eg(n,T)}while(!0);sh(),cu.current=p,je=d,at!==null?s=0:(_t=null,Nt=0,s=pt)}if(s!==0){if(s===2&&(d=en(n),d!==0&&(u=d,s=Vh(n,d))),s===1)throw o=wl,Vs(n,0),ns(n,u),Kt(n,Ge()),o;if(s===6)ns(n,u);else{if(d=n.current.alternate,(u&30)===0&&!cw(d)&&(s=yu(n,u),s===2&&(p=en(n),p!==0&&(u=p,s=Vh(n,p))),s===1))throw o=wl,Vs(n,0),ns(n,u),Kt(n,Ge()),o;switch(n.finishedWork=d,n.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:Bs(n,qt,xr);break;case 3:if(ns(n,u),(u&130023424)===u&&(s=Fh+500-Ge(),10<s)){if(Is(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Ft(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=qc(Bs.bind(null,n,qt,xr),s);break}Bs(n,qt,xr);break;case 4:if(ns(n,u),(u&4194240)===u)break;for(s=n.eventTimes,d=-1;0<u;){var _=31-Lt(u);p=1<<_,_=s[_],_>d&&(d=_),u&=~p}if(u=d,u=Ge()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*uw(u/1960))-u,10<u){n.timeoutHandle=qc(Bs.bind(null,n,qt,xr),u);break}Bs(n,qt,xr);break;case 5:Bs(n,qt,xr);break;default:throw Error(t(329))}}}return Kt(n,Ge()),n.callbackNode===o?Jm.bind(null,n):null}function Vh(n,s){var o=xl;return n.current.memoizedState.isDehydrated&&(Vs(n,s).flags|=256),n=yu(n,s),n!==2&&(s=qt,qt=o,s!==null&&Bh(s)),n}function Bh(n){qt===null?qt=n:qt.push.apply(qt,n)}function cw(n){for(var s=n;;){if(s.flags&16384){var o=s.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!Cn(p(),d))return!1}catch{return!1}}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ns(n,s){for(s&=~Mh,s&=~hu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var o=31-Lt(s),u=1<<o;n[o]=-1,s&=~u}}function Zm(n){if((je&6)!==0)throw Error(t(327));to();var s=Is(n,0);if((s&1)===0)return Kt(n,Ge()),null;var o=yu(n,s);if(n.tag!==0&&o===2){var u=en(n);u!==0&&(s=u,o=Vh(n,u))}if(o===1)throw o=wl,Vs(n,0),ns(n,s),Kt(n,Ge()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,Bs(n,qt,xr),Kt(n,Ge()),null}function Hh(n,s){var o=je;je|=1;try{return n(s)}finally{je=o,je===0&&(eo=Ge()+500,Wa&&Yr())}}function zs(n){es!==null&&es.tag===0&&(je&6)===0&&to();var s=je;je|=1;var o=fn.transition,u=be;try{if(fn.transition=null,be=1,n)return n()}finally{be=u,fn.transition=o,je=s,(je&6)===0&&Yr()}}function Wh(){sn=Zi.current,Xe(Zi)}function Vs(n,s){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,z0(o)),at!==null)for(o=at.return;o!==null;){var u=o;switch(Zc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ba();break;case 3:Qi(),Xe(Wt),Xe(Pt),dh();break;case 5:ch(u);break;case 4:Qi();break;case 13:Xe(et);break;case 19:Xe(et);break;case 10:ih(u.type._context);break;case 22:case 23:Wh()}o=o.return}if(_t=n,at=n=rs(n.current,null),Nt=sn=s,pt=0,wl=null,Mh=hu=Us=0,qt=xl=null,Ls!==null){for(s=0;s<Ls.length;s++)if(o=Ls[s],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,p=o.pending;if(p!==null){var _=p.next;p.next=d,u.next=_}o.pending=u}Ls=null}return n}function eg(n,s){do{var o=at;try{if(sh(),eu.current=su,tu){for(var u=tt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}tu=!1}if(Fs=0,vt=ft=tt=null,pl=!1,ml=0,Lh.current=null,o===null||o.return===null){pt=1,wl=s,at=null;break}e:{var p=n,_=o.return,T=o,b=s;if(s=Nt,T.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var z=b,K=T,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var q=K.alternate;q?(K.updateQueue=q.updateQueue,K.memoizedState=q.memoizedState,K.lanes=q.lanes):(K.updateQueue=null,K.memoizedState=null)}var se=Cm(_);if(se!==null){se.flags&=-257,Tm(se,_,T,p,s),se.mode&1&&km(p,z,s),s=se,b=z;var le=s.updateQueue;if(le===null){var ue=new Set;ue.add(b),s.updateQueue=ue}else le.add(b);break e}else{if((s&1)===0){km(p,z,s),$h();break e}b=Error(t(426))}}else if(Je&&T.mode&1){var lt=Cm(_);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),Tm(lt,_,T,p,s),nh(Xi(b,T));break e}}p=b=Xi(b,T),pt!==4&&(pt=2),xl===null?xl=[p]:xl.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var M=Em(p,b,s);Yp(p,M);break e;case 1:T=b;var D=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Zr===null||!Zr.has(F)))){p.flags|=65536,s&=-s,p.lanes|=s;var X=Sm(p,T,s);Yp(p,X);break e}}p=p.return}while(p!==null)}rg(o)}catch(ce){s=ce,at===o&&o!==null&&(at=o=o.return);continue}break}while(!0)}function tg(){var n=cu.current;return cu.current=su,n===null?su:n}function $h(){(pt===0||pt===3||pt===2)&&(pt=4),_t===null||(Us&268435455)===0&&(hu&268435455)===0||ns(_t,Nt)}function yu(n,s){var o=je;je|=2;var u=tg();(_t!==n||Nt!==s)&&(xr=null,Vs(n,s));do try{hw();break}catch(d){eg(n,d)}while(!0);if(sh(),je=o,cu.current=u,at!==null)throw Error(t(261));return _t=null,Nt=0,pt}function hw(){for(;at!==null;)ng(at)}function dw(){for(;at!==null&&!pa();)ng(at)}function ng(n){var s=og(n.alternate,n,sn);n.memoizedProps=n.pendingProps,s===null?rg(n):at=s,Lh.current=null}function rg(n){var s=n;do{var o=s.alternate;if(n=s.return,(s.flags&32768)===0){if(o=sw(o,s,sn),o!==null){at=o;return}}else{if(o=iw(o,s),o!==null){o.flags&=32767,at=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,at=null;return}}if(s=s.sibling,s!==null){at=s;return}at=s=n}while(s!==null);pt===0&&(pt=5)}function Bs(n,s,o){var u=be,d=fn.transition;try{fn.transition=null,be=1,fw(n,s,o,u)}finally{fn.transition=d,be=u}return null}function fw(n,s,o,u){do to();while(es!==null);if((je&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(He(n,p),n===_t&&(at=_t=null,Nt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||fu||(fu=!0,lg(ln,function(){return to(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=fn.transition,fn.transition=null;var _=be;be=1;var T=je;je|=4,Lh.current=null,lw(n,o),qm(o,n),D0($c),Br=!!Wc,$c=Wc=null,n.current=o,aw(o),Nc(),je=T,be=_,fn.transition=p}else n.current=o;if(fu&&(fu=!1,es=n,pu=d),p=n.pendingLanes,p===0&&(Zr=null),ya(o.stateNode),Kt(n,Ge()),s!==null)for(u=n.onRecoverableError,o=0;o<s.length;o++)d=s[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(du)throw du=!1,n=Uh,Uh=null,n;return(pu&1)!==0&&n.tag!==0&&to(),p=n.pendingLanes,(p&1)!==0?n===zh?El++:(El=0,zh=n):El=0,Yr(),null}function to(){if(es!==null){var n=zr(pu),s=fn.transition,o=be;try{if(fn.transition=null,be=16>n?16:n,es===null)var u=!1;else{if(n=es,es=null,pu=0,(je&6)!==0)throw Error(t(331));var d=je;for(je|=4,ie=n.current;ie!==null;){var p=ie,_=p.child;if((ie.flags&16)!==0){var T=p.deletions;if(T!==null){for(var b=0;b<T.length;b++){var z=T[b];for(ie=z;ie!==null;){var K=ie;switch(K.tag){case 0:case 11:case 15:_l(8,K,p)}var Q=K.child;if(Q!==null)Q.return=K,ie=Q;else for(;ie!==null;){K=ie;var q=K.sibling,se=K.return;if(Bm(K),K===z){ie=null;break}if(q!==null){q.return=se,ie=q;break}ie=se}}}var le=p.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var lt=ue.sibling;ue.sibling=null,ue=lt}while(ue!==null)}}ie=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,ie=_;else e:for(;ie!==null;){if(p=ie,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:_l(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ie=M;break e}ie=p.return}}var D=n.current;for(ie=D;ie!==null;){_=ie;var F=_.child;if((_.subtreeFlags&2064)!==0&&F!==null)F.return=_,ie=F;else e:for(_=D;ie!==null;){if(T=ie,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:uu(9,T)}}catch(ce){rt(T,T.return,ce)}if(T===_){ie=null;break e}var X=T.sibling;if(X!==null){X.return=T.return,ie=X;break e}ie=T.return}}if(je=d,Yr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ts,n)}catch{}u=!0}return u}finally{be=o,fn.transition=s}}return!1}function sg(n,s,o){s=Xi(o,s),s=Em(n,s,1),n=Xr(n,s,1),s=Ft(),n!==null&&(Fr(n,1,s),Kt(n,s))}function rt(n,s,o){if(n.tag===3)sg(n,n,o);else for(;s!==null;){if(s.tag===3){sg(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Zr===null||!Zr.has(u))){n=Xi(o,n),n=Sm(s,n,1),s=Xr(s,n,1),n=Ft(),s!==null&&(Fr(s,1,n),Kt(s,n));break}}s=s.return}}function pw(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),s=Ft(),n.pingedLanes|=n.suspendedLanes&o,_t===n&&(Nt&o)===o&&(pt===4||pt===3&&(Nt&130023424)===Nt&&500>Ge()-Fh?Vs(n,0):Mh|=o),Kt(n,s)}function ig(n,s){s===0&&((n.mode&1)===0?s=1:(s=ki,ki<<=1,(ki&130023424)===0&&(ki=4194304)));var o=Ft();n=vr(n,s),n!==null&&(Fr(n,s,o),Kt(n,o))}function mw(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),ig(n,o)}function gw(n,s){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),ig(n,o)}var og;og=function(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps||Wt.current)Gt=!0;else{if((n.lanes&o)===0&&(s.flags&128)===0)return Gt=!1,rw(n,s,o);Gt=(n.flags&131072)!==0}else Gt=!1,Je&&(s.flags&1048576)!==0&&Up(s,Ga,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;lu(n,s),n=s.pendingProps;var d=Hi(s,Pt.current);Yi(s,o),d=mh(null,s,u,n,d,o);var p=gh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,$t(u)?(p=!0,Ha(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ah(s),d.updater=iu,s.stateNode=d,d._reactInternals=s,Eh(s,u,n,o),s=Th(null,s,u,!0,p,o)):(s.tag=0,Je&&p&&Jc(s),Mt(null,s,d,o),s=s.child),s;case 16:u=s.elementType;e:{switch(lu(n,s),n=s.pendingProps,d=u._init,u=d(u._payload),s.type=u,d=s.tag=vw(u),n=In(u,n),d){case 0:s=Ch(null,s,u,n,o);break e;case 1:s=Pm(null,s,u,n,o);break e;case 11:s=Im(null,s,u,n,o);break e;case 14:s=Nm(null,s,u,In(u.type,n),o);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,d=s.pendingProps,d=s.elementType===u?d:In(u,d),Ch(n,s,u,d,o);case 1:return u=s.type,d=s.pendingProps,d=s.elementType===u?d:In(u,d),Pm(n,s,u,d,o);case 3:e:{if(Dm(s),n===null)throw Error(t(387));u=s.pendingProps,p=s.memoizedState,d=p.element,Kp(n,s),Ja(s,u,null,o);var _=s.memoizedState;if(u=_.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=Xi(Error(t(423)),s),s=Om(n,s,u,o,d);break e}else if(u!==d){d=Xi(Error(t(424)),s),s=Om(n,s,u,o,d);break e}else for(rn=Gr(s.stateNode.containerInfo.firstChild),nn=s,Je=!0,Tn=null,o=Gp(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Gi(),u===d){s=wr(n,s,o);break e}Mt(n,s,u,o)}s=s.child}return s;case 5:return Xp(s),n===null&&th(s),u=s.type,d=s.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Gc(u,d)?_=null:p!==null&&Gc(u,p)&&(s.flags|=32),Am(n,s),Mt(n,s,_,o),s.child;case 6:return n===null&&th(s),null;case 13:return jm(n,s,o);case 4:return uh(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=qi(s,null,u,o):Mt(n,s,u,o),s.child;case 11:return u=s.type,d=s.pendingProps,d=s.elementType===u?d:In(u,d),Im(n,s,u,d,o);case 7:return Mt(n,s,s.pendingProps,o),s.child;case 8:return Mt(n,s,s.pendingProps.children,o),s.child;case 12:return Mt(n,s,s.pendingProps.children,o),s.child;case 10:e:{if(u=s.type._context,d=s.pendingProps,p=s.memoizedProps,_=d.value,qe(Ya,u._currentValue),u._currentValue=_,p!==null)if(Cn(p.value,_)){if(p.children===d.children&&!Wt.current){s=wr(n,s,o);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var b=T.firstContext;b!==null;){if(b.context===u){if(p.tag===1){b=_r(-1,o&-o),b.tag=2;var z=p.updateQueue;if(z!==null){z=z.shared;var K=z.pending;K===null?b.next=b:(b.next=K.next,K.next=b),z.pending=b}}p.lanes|=o,b=p.alternate,b!==null&&(b.lanes|=o),oh(p.return,o,s),T.lanes|=o;break}b=b.next}}else if(p.tag===10)_=p.type===s.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=o,T=_.alternate,T!==null&&(T.lanes|=o),oh(_,o,s),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===s){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}Mt(n,s,d.children,o),s=s.child}return s;case 9:return d=s.type,u=s.pendingProps.children,Yi(s,o),d=hn(d),u=u(d),s.flags|=1,Mt(n,s,u,o),s.child;case 14:return u=s.type,d=In(u,s.pendingProps),d=In(u.type,d),Nm(n,s,u,d,o);case 15:return bm(n,s,s.type,s.pendingProps,o);case 17:return u=s.type,d=s.pendingProps,d=s.elementType===u?d:In(u,d),lu(n,s),s.tag=1,$t(u)?(n=!0,Ha(s)):n=!1,Yi(s,o),wm(s,u,d),Eh(s,u,d,o),Th(null,s,u,!0,n,o);case 19:return Mm(n,s,o);case 22:return Rm(n,s,o)}throw Error(t(156,s.tag))};function lg(n,s){return Ei(n,s)}function yw(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,s,o,u){return new yw(n,s,o,u)}function Gh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vw(n){if(typeof n=="function")return Gh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===pe)return 14}return 2}function rs(n,s){var o=n.alternate;return o===null?(o=pn(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function vu(n,s,o,u,d,p){var _=2;if(u=n,typeof n=="function")Gh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case P:return Hs(o.children,d,p,s);case C:_=8,d|=8;break;case N:return n=pn(12,o,s,d|2),n.elementType=N,n.lanes=p,n;case I:return n=pn(13,o,s,d),n.elementType=I,n.lanes=p,n;case We:return n=pn(19,o,s,d),n.elementType=We,n.lanes=p,n;case ye:return _u(o,d,p,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:_=10;break e;case R:_=9;break e;case O:_=11;break e;case pe:_=14;break e;case Ee:_=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=pn(_,o,s,d),s.elementType=n,s.type=u,s.lanes=p,s}function Hs(n,s,o,u){return n=pn(7,n,u,s),n.lanes=o,n}function _u(n,s,o,u){return n=pn(22,n,u,s),n.elementType=ye,n.lanes=o,n.stateNode={isHidden:!1},n}function qh(n,s,o){return n=pn(6,n,null,s),n.lanes=o,n}function Kh(n,s,o){return s=pn(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function _w(n,s,o,u,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mr(0),this.expirationTimes=Mr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mr(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Yh(n,s,o,u,d,p,_,T,b){return n=new _w(n,s,o,T,b),s===1?(s=1,p===!0&&(s|=8)):s=0,p=pn(3,null,null,s),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},ah(p),n}function ww(n,s,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:u==null?null:""+u,children:n,containerInfo:s,implementation:o}}function ag(n){if(!n)return Kr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if($t(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if($t(o))return Lp(n,o,s)}return s}function ug(n,s,o,u,d,p,_,T,b){return n=Yh(o,u,!0,n,d,p,_,T,b),n.context=ag(null),o=n.current,u=Ft(),d=ts(o),p=_r(u,d),p.callback=s??null,Xr(o,p,d),n.current.lanes=d,Fr(n,d,u),Kt(n,u),n}function wu(n,s,o,u){var d=s.current,p=Ft(),_=ts(d);return o=ag(o),s.context===null?s.context=o:s.pendingContext=o,s=_r(p,_),s.payload={element:n},u=u===void 0?null:u,u!==null&&(s.callback=u),n=Xr(d,s,_),n!==null&&(Rn(n,d,_,p),Xa(n,d,_)),_}function xu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function cg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function Qh(n,s){cg(n,s),(n=n.alternate)&&cg(n,s)}function xw(){return null}var hg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Xh(n){this._internalRoot=n}Eu.prototype.render=Xh.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));wu(n,s,null,null)},Eu.prototype.unmount=Xh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;zs(function(){wu(null,n,null,null)}),s[pr]=null}};function Eu(n){this._internalRoot=n}Eu.prototype.unstable_scheduleHydration=function(n){if(n){var s=Ea();n={blockedOn:null,target:n,priority:s};for(var o=0;o<Vn.length&&s!==0&&s<Vn[o].priority;o++);Vn.splice(o,0,n),o===0&&Ca(n)}};function Jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Su(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function dg(){}function Ew(n,s,o,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var z=xu(_);p.call(z)}}var _=ug(s,u,n,0,null,!1,!1,"",dg);return n._reactRootContainer=_,n[pr]=_.current,ol(n.nodeType===8?n.parentNode:n),zs(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var T=u;u=function(){var z=xu(b);T.call(z)}}var b=Yh(n,0,!1,null,null,!1,!1,"",dg);return n._reactRootContainer=b,n[pr]=b.current,ol(n.nodeType===8?n.parentNode:n),zs(function(){wu(s,b,o,u)}),b}function ku(n,s,o,u,d){var p=o._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var b=xu(_);T.call(b)}}wu(s,_,n,d)}else _=Ew(o,s,n,d,u);return xu(_)}wa=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var o=Lr(s.pendingLanes);o!==0&&(Ur(s,o|1),Kt(s,Ge()),(je&6)===0&&(eo=Ge()+500,Yr()))}break;case 13:zs(function(){var u=vr(n,1);if(u!==null){var d=Ft();Rn(u,n,1,d)}}),Qh(n,1)}},Ci=function(n){if(n.tag===13){var s=vr(n,134217728);if(s!==null){var o=Ft();Rn(s,n,134217728,o)}Qh(n,134217728)}},xa=function(n){if(n.tag===13){var s=ts(n),o=vr(n,s);if(o!==null){var u=Ft();Rn(o,n,s,u)}Qh(n,s)}},Ea=function(){return be},Sa=function(n,s){var o=be;try{return be=n,s()}finally{be=o}},Fo=function(n,s,o){switch(s){case"input":if(bo(n,o),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var d=Va(u);if(!d)throw Error(t(90));hi(u),bo(u,d)}}}break;case"textarea":mi(n,o);break;case"select":s=o.value,s!=null&&ir(n,!!o.multiple,s,!1)}},vi=Hh,zo=zs;var Sw={usingClientEntryPoint:!1,Events:[ul,Vi,Va,lr,Uo,Hh]},Sl={findFiberByHostInstance:Ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kw={bundleType:Sl.bundleType,version:Sl.version,rendererPackageName:Sl.rendererPackageName,rendererConfig:Sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Wo(n),n===null?null:n.stateNode},findFiberByHostInstance:Sl.findFiberByHostInstance||xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{Ts=Cu.inject(kw),Zt=Cu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sw,Yt.createPortal=function(n,s){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(s))throw Error(t(200));return ww(n,s,null,o)},Yt.createRoot=function(n,s){if(!Jh(n))throw Error(t(299));var o=!1,u="",d=hg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Yh(n,1,!1,null,null,o,!1,u,d),n[pr]=s.current,ol(n.nodeType===8?n.parentNode:n),new Xh(s)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Wo(s),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return zs(n)},Yt.hydrate=function(n,s,o){if(!Su(s))throw Error(t(200));return ku(null,n,s,!0,o)},Yt.hydrateRoot=function(n,s,o){if(!Jh(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,p="",_=hg;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),s=ug(s,null,n,1,o??null,d,!1,p,_),n[pr]=s.current,ol(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[o,d]:s.mutableSourceEagerHydrationData.push(o,d);return new Eu(s)},Yt.render=function(n,s,o){if(!Su(s))throw Error(t(200));return ku(null,n,s,!1,o)},Yt.unmountComponentAtNode=function(n){if(!Su(n))throw Error(t(40));return n._reactRootContainer?(zs(function(){ku(null,null,n,!1,function(){n._reactRootContainer=null,n[pr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Hh,Yt.unstable_renderSubtreeIntoContainer=function(n,s,o,u){if(!Su(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ku(n,s,o,!1,u)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var xg;function Dw(){if(xg)return td.exports;xg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),td.exports=Pw(),td.exports}var Eg;function Ow(){if(Eg)return Tu;Eg=1;var r=Dw();return Tu.createRoot=r.createRoot,Tu.hydrateRoot=r.hydrateRoot,Tu}var jw=Ow();const Sg=r=>{let e;const t=new Set,i=(w,k)=>{const E=typeof w=="function"?w(e):w;if(!Object.is(E,e)){const S=e;e=k??(typeof E!="object"||E===null)?E:Object.assign({},e,E),t.forEach(U=>U(e,S))}},l=()=>e,m={setState:i,getState:l,getInitialState:()=>v,subscribe:w=>(t.add(w),()=>t.delete(w))},v=e=r(i,l,m);return m},Lw=r=>r?Sg(r):Sg,Mw=r=>r;function Fw(r,e=Mw){const t=yg.useSyncExternalStore(r.subscribe,()=>e(r.getState()),()=>e(r.getInitialState()));return yg.useDebugValue(t),t}const kg=r=>{const e=Lw(r),t=i=>Fw(e,i);return Object.assign(t,e),t},Uw=r=>r?kg(r):kg,Cg="https://api.boelguard.me/",zw="https://reactapi.boelguard.me/auth",ea=zw;async function Vw(r,e,t){const i=await fetch(`${ea}/login`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:e,rememberMe:t})});if(!i.ok)throw new Error(await i.text()||"Login failed");return i.json()}async function Bw(){await fetch(`${ea}/logout`,{method:"POST",credentials:"include"})}async function Tg(){const r=await fetch(`${ea}/me`,{credentials:"include"});if(!r.ok)throw new Error("Unauthenticated");return r.json()}async function Hw(){if(!(await fetch(`${ea}/refresh`,{method:"POST",credentials:"include"})).ok)throw new Error("Refresh failed")}async function Ww(r){if(!(await fetch(`${ea}/forgot-password`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r})})).ok)throw new Error("Password reset failed")}const $w=Uw(r=>((async()=>{try{const e=await Tg(),t={id:e.uid,email:"",username:e.displayName??"",name:e.displayName??""};r({user:t,isAuthenticated:!0,ready:!0})}catch{try{await Hw();const e=await Tg(),t={id:e.uid,email:"",username:e.displayName??"",name:e.displayName??""};r({user:t,isAuthenticated:!0,ready:!0})}catch{r({ready:!0})}}})(),{user:null,isLoading:!1,error:null,isAuthenticated:!1,ready:!1,login:async({emailOrUsername:e,password:t,rememberMe:i})=>{r({isLoading:!0,error:null});try{const l=await Vw(e,t,i),c={id:l.uid,email:e.includes("@")?e:"",username:l.displayName??"",name:l.displayName??""};i&&localStorage.setItem("user",JSON.stringify(c)),r({user:c,isAuthenticated:!0,isLoading:!1})}catch(l){r({error:l?.message||"Login failed",isLoading:!1})}},logout:async()=>{await Bw(),localStorage.clear(),r({user:null,isAuthenticated:!1,error:null})},forgotPassword:async e=>{r({isLoading:!0,error:null});try{await Ww(e),r({isLoading:!1})}catch(t){r({error:t?.message||"Failed to send reset e‑mail",isLoading:!1})}},clearError:()=>r({error:null})})),ta=()=>{const{user:r,isLoading:e,error:t,isAuthenticated:i,ready:l,login:c,logout:h,forgotPassword:m,clearError:v}=$w();return{user:r,isLoading:e,error:t,isAuthenticated:i,ready:l,login:c,logout:h,forgotPassword:m,clearError:v}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Te=(r,e)=>{const t=ae.forwardRef(({color:i="currentColor",size:l=24,strokeWidth:c=2,absoluteStrokeWidth:h,className:m="",children:v,...w},k)=>ae.createElement("svg",{ref:k,...Gw,width:l,height:l,stroke:i,strokeWidth:h?Number(c)*24/Number(l):c,className:["lucide",`lucide-${qw(r)}`,m].join(" "),...w},[...e.map(([E,S])=>ae.createElement(E,S)),...Array.isArray(v)?v:[v]]));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=Te("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=Te("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=Te("ArrowLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=Te("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=Te("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=Te("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=Te("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=Te("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=Te("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=Te("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=Te("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=Te("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=Te("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=Te("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=Te("Gamepad",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=Te("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=Te("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=Te("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=Te("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=Te("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=Te("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=Te("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=Te("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=Te("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=Te("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=Te("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=Te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=Te("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=Te("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=Te("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=Te("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=Te("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=Te("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=Te("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=Te("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=Te("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=Te("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=Te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),cv=({size:r="md",className:e=""})=>{const t={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8"};return g.jsx(o1,{className:`animate-spin ${t[r]} ${e}`})},nt=({variant:r="primary",size:e="md",loading:t=!1,children:i,className:l="",disabled:c,...h})=>{const m="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",v={primary:"bg-primary text-on-primary hover:bg-primary focus:ring-primary  shadow-md hover:shadow-lg",secondary:"bg-secondary text-on-secondary hover:bg-secondary focus:ring-secondary  shadow-md hover:shadow-lg",outline:"border border-default text-default hover:bg-subtle focus:ring-primary",ghost:"text-muted hover:text-default hover:bg-subtle focus:ring-default"},w={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"};return g.jsxs("button",{className:`${m} ${v[r]} ${w[e]} ${l}`,disabled:c||t,...h,children:[t&&g.jsx(cv,{size:"sm",className:"mr-2"}),i]})},Vu=ae.forwardRef(({label:r,error:e,icon:t,className:i="",...l},c)=>g.jsxs("div",{className:"space-y-1",children:[r&&g.jsx("label",{className:"block text-sm font-medium text-default text-subtle",children:r}),g.jsxs("div",{className:"relative",children:[t&&g.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:g.jsx("div",{className:"text-muted ",children:t})}),g.jsx("input",{ref:c,className:`
              block w-full rounded-lg border border-default bg-bg bg-subtle px-3 py-2 text-default  placeholder-gray-500 
              focus:border-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500  focus:ring-offset-1 
              disabled:bg-gray-50  disabled:text-subtle  transition-all duration-200
              ${t?"pl-10":""}
              ${e?"border-red-500  focus:border-red-500 focus:ring-red-500":""}
              ${i}
            `,...l})]}),e&&g.jsx("p",{className:"text-sm text-red-600  mt-1",children:e})]}));Vu.displayName="Input";const Xd=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),m1=r=>r.length>=3&&/^[a-zA-Z0-9_]+$/.test(r),g1=r=>r.length>=6,bg=r=>Xd(r)?"email":"username",y1=({onForgotPassword:r})=>{const[e,t]=ae.useState({emailOrUsername:"",password:"",rememberMe:!1}),[i,l]=ae.useState({}),[c,h]=ae.useState(!1),[m,v]=ae.useState({}),{login:w,isLoading:k,error:E,clearError:S}=ta();ae.useEffect(()=>{if(E){const G=setTimeout(()=>{S()},5e3);return()=>clearTimeout(G)}},[E,S]);const U=()=>{const G={};if(!e.emailOrUsername.trim())G.emailOrUsername="Email or username is required";else{const he=bg(e.emailOrUsername);he==="email"&&!Xd(e.emailOrUsername)?G.emailOrUsername="Please enter a valid email address":he==="username"&&!m1(e.emailOrUsername)&&(G.emailOrUsername="Username must be at least 3 characters and contain only letters, numbers, and underscores")}return e.password?g1(e.password)||(G.password="Password must be at least 6 characters"):G.password="Password is required",l(G),Object.keys(G).length===0},B=async G=>{G.preventDefault(),U()&&await w(e)},$=(G,he)=>{t(de=>({...de,[G]:he})),m[G]&&l(de=>({...de,[G]:""}))},W=G=>{v(he=>({...he,[G]:!0})),U()},fe=bg(e.emailOrUsername)==="email"?g.jsx(xd,{size:20}):g.jsx(uv,{size:20});return g.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center p-3 sm:p-4",children:g.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:g.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-default",children:g.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[g.jsxs("div",{className:"text-center mb-8",children:[g.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4",children:g.jsx(Ig,{className:"w-8 h-8 text-on-primary"})}),g.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-default mb-2",children:"Welcome Back"}),g.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Sign in to your account to continue"})]}),E&&g.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-gradient-theme border border-error rounded-lg flex items-center space-x-2 text-error",children:[g.jsx(ov,{size:20}),g.jsx("span",{className:"text-sm font-medium flex-1",children:E})]}),g.jsxs("form",{onSubmit:B,className:"space-y-5 sm:space-y-6",children:[g.jsx(Vu,{label:"Email or Username",type:"text",placeholder:"Enter your email or username",value:e.emailOrUsername,onChange:G=>$("emailOrUsername",G.target.value),onBlur:()=>W("emailOrUsername"),error:i.emailOrUsername,icon:fe,disabled:k}),g.jsxs("div",{className:"relative",children:[g.jsx(Vu,{label:"Password",type:c?"text":"password",placeholder:"Enter your password",value:e.password,onChange:G=>$("password",G.target.value),onBlur:()=>W("password"),error:i.password,icon:g.jsx(Ig,{size:20}),disabled:k}),g.jsx("button",{type:"button",className:"absolute right-3 top-8 text-muted hover:text-subtle transition-colors",onClick:()=>h(!c),children:c?g.jsx(n1,{size:20}):g.jsx(Yd,{size:20})})]}),g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"flex items-center space-x-2",children:[g.jsx("input",{type:"checkbox",checked:e.rememberMe,onChange:G=>$("rememberMe",G.target.checked.toString()),className:"w-4 h-4 text-primary border-default rounded focus:ring-primary"}),g.jsx("span",{className:"text-sm text-subtle",children:"Remember me"})]}),g.jsx("button",{type:"button",onClick:r,className:"text-sm text-subtle hover:text-default font-medium transition-colors",children:"Forgot password?"})]}),g.jsxs(nt,{type:"submit",loading:k,className:"w-full",size:"lg",children:["Sign In",!k&&g.jsx(Qw,{className:"ml-2 w-5 h-5"})]})]})]})})})})},v1=({onBackToLogin:r})=>{const[e,t]=ae.useState(""),[i,l]=ae.useState(""),[c,h]=ae.useState(!1),[m,v]=ae.useState(!1),{forgotPassword:w,isLoading:k}=ta(),E=()=>e.trim()?Xd(e)?(l(""),!0):(l("Please enter a valid email address"),!1):(l("Email is required"),!1),S=async $=>{$.preventDefault(),E()&&(await w(e),h(!0))},U=$=>{t($),m&&l("")},B=()=>{v(!0),E()};return c?g.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center p-3 sm:p-4",children:g.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:g.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-default",children:g.jsxs("div",{className:"px-6 sm:px-8 py-8 sm:py-12 text-center",children:[g.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-2xl mb-6",children:g.jsx(Jw,{className:"w-8 h-8 text-success"})}),g.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default mb-4",children:"Check Your Email"}),g.jsxs("p",{className:"text-subtle mb-8 leading-relaxed text-sm sm:text-base",children:["We've sent a password reset link to"," ",g.jsx("span",{className:"font-medium text-default break-all",children:e}),". Please check your email and follow the instructions to reset your password."]}),g.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[g.jsxs(nt,{onClick:r,variant:"primary",className:"w-full",size:"lg",children:[g.jsx(zu,{className:"mr-2 w-5 h-5"}),"Back to Login"]}),g.jsx(nt,{onClick:()=>h(!1),variant:"ghost",className:"w-full",children:"Didn't receive the email?"})]})]})})})}):g.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center p-3 sm:p-4",children:g.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:g.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-default",children:g.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[g.jsxs("div",{className:"text-center mb-8",children:[g.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4",children:g.jsx(xd,{className:"w-8 h-8 text-on-primary"})}),g.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-default mb-2",children:"Reset Password"}),g.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Enter your email address and we'll send you a link to reset your password"})]}),i&&g.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-gradient-theme border border-error rounded-lg flex items-center space-x-2 text-error",children:[g.jsx(ov,{size:20}),g.jsx("span",{className:"text-sm font-medium flex-1",children:i})]}),g.jsxs("form",{onSubmit:S,className:"space-y-5 sm:space-y-6",children:[g.jsx(Vu,{label:"Email Address",type:"email",placeholder:"Enter your email address",value:e,onChange:$=>U($.target.value),onBlur:B,error:i,icon:g.jsx(xd,{size:20}),disabled:k}),g.jsx(nt,{type:"submit",loading:k,className:"w-full",size:"lg",children:"Send Reset Link"})]}),g.jsx("div",{className:"mt-5 sm:mt-6 text-center",children:g.jsxs("button",{type:"button",onClick:r,className:"inline-flex items-center text-sm text-subtle hover:text-default font-medium transition-colors",children:[g.jsx(zu,{className:"mr-2 w-4 h-4"}),"Back to Login"]})})]})})})})},_1=({isOpen:r,onClose:e})=>{const t="https://linktr.ee/esports_pxl",i=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(t)}`;return r?g.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:g.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200",children:[g.jsxs("div",{className:"flex items-center justify-between mb-6",children:[g.jsx("h2",{className:"text-xl font-bold text-default",children:"QR Code"}),g.jsx("button",{onClick:e,className:"text-subtle hover:text-default transition-colors","aria-label":"Close modal",children:g.jsx(dc,{className:"w-6 h-6"})})]}),g.jsxs("div",{className:"text-center space-y-4",children:[g.jsxs("div",{className:"bg-bg p-4 rounded-xl border border-default shadow-sm hover:shadow-md inline-block",children:[g.jsx("img",{src:i,alt:"QR Code for esports_pxl",className:"w-64 h-64 mx-auto",onError:l=>{const c=l.target;c.style.display="none",c.nextElementSibling?.classList.remove("hidden")}}),g.jsx("div",{className:"hidden w-64 h-64 bg-subtle rounded-lg flex items-center justify-center",children:g.jsxs("div",{className:"text-center",children:[g.jsx("div",{className:"text-4xl mb-2",children:"📱"}),g.jsx("p",{className:"text-sm text-subtle",children:"QR Code"})]})})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("p",{className:"text-sm text-subtle",children:"Scan to visit:"}),g.jsx("div",{className:"bg-gray-50 bg-subtle rounded-lg p-3",children:g.jsx("p",{className:"text-sm font-mono text-default  break-all",children:t})})]}),g.jsxs("div",{className:"flex space-x-3 pt-4",children:[g.jsx(nt,{onClick:e,variant:"outline",className:"flex-1",children:"Close"}),g.jsxs(nt,{onClick:()=>window.open(t,"_blank"),className:"flex-1",children:[g.jsx(t1,{className:"w-4 h-4 mr-2"}),"Visit"]})]})]}),g.jsx("div",{className:"mt-6 pt-4 border-t border-default shadow-sm hover:shadow-md ",children:g.jsx("p",{className:"text-xs text-subtle  text-center",children:"Point your camera at the QR code to open the link"})})]})}):null},w1=({onAddStock:r,onShowLog:e,onTakeItem:t})=>{const[i,l]=ae.useState(!1),[c,h]=ae.useState(!1),[m,v]=ae.useState({x:20,y:20}),[w,k]=ae.useState({x:0,y:0}),E=ae.useRef(null),S=W=>{const fe="touches"in W?W.touches[0].clientX:W.clientX,G="touches"in W?W.touches[0].clientY:W.clientY;h(!0),k({x:fe-m.x,y:G-m.y})},U=W=>{if(!c)return;const fe="touches"in W?W.touches[0].clientX:W.clientX,G="touches"in W?W.touches[0].clientY:W.clientY,he=fe-w.x,de=G-w.y,J=window.innerWidth-64,ne=window.innerHeight-64;v({x:Math.max(0,Math.min(he,J)),y:Math.max(0,Math.min(de,ne))})},B=()=>{h(!1)};ae.useEffect(()=>{if(c)return document.addEventListener("mousemove",U),document.addEventListener("mouseup",B),document.addEventListener("touchmove",U),document.addEventListener("touchend",B),()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",B),document.removeEventListener("touchmove",U),document.removeEventListener("touchend",B)}},[c,w]),ae.useEffect(()=>{const W=fe=>{E.current&&!E.current.contains(fe.target)&&l(!1)};return document.addEventListener("mousedown",W),()=>document.removeEventListener("mousedown",W)},[]);const $=()=>{c||l(!i)};return g.jsx("div",{ref:E,className:"fixed z-50 select-none",style:{right:`${m.x}px`,bottom:`${m.y}px`},children:g.jsxs("div",{className:"relative",children:[i&&g.jsxs("div",{className:"absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-200",children:[g.jsx(nt,{onClick:e,className:"w-12 h-12 rounded-full shadow-lg bg-purple-500 hover:bg-purple-600 text-on-primary p-0","aria-label":"Show log",children:g.jsx(Yd,{className:"w-6 h-6"})}),g.jsx(nt,{onClick:r,className:"w-12 h-12 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-on-primary p-0","aria-label":"Add stock",children:g.jsx(qs,{className:"w-6 h-6"})}),g.jsx(nt,{onClick:t,className:"w-12 h-12 rounded-full shadow-lg bg-primary hover:bg-blue-600 text-on-primary p-0","aria-label":"Take item",children:g.jsx(ro,{className:"w-6 h-6"})})]}),g.jsx("button",{onMouseDown:S,onTouchStart:S,onClick:$,className:`w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-on-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-orange-500/30 ${c?"cursor-grabbing scale-110":"cursor-grab hover:scale-105"}`,"aria-label":i?"Close fridge menu":"Open fridge menu",children:g.jsx("div",{className:`transition-transform duration-200 ${i?"rotate-45":""}`,children:g.jsx(qs,{className:"w-7 h-7"})})})]})})},x1=({onBack:r})=>{const[e,t]=ae.useState([{id:"1",name:"RedBull Energy Drink",stock:24,lastUpdated:new Date}]),[i,l]=ae.useState([{id:"1",action:"take",amount:2,user:"Alice Johnson",timestamp:new Date(Date.now()-30*60*1e3),itemName:"RedBull Energy Drink"},{id:"2",action:"add",amount:12,user:"Bob Smith",timestamp:new Date(Date.now()-2*60*60*1e3),itemName:"RedBull Energy Drink"},{id:"3",action:"take",amount:1,user:"Carol Davis",timestamp:new Date(Date.now()-4*60*60*1e3),itemName:"RedBull Energy Drink"}]),[c,h]=ae.useState(!1),[m,v]=ae.useState(!1),[w,k]=ae.useState(!1),[E,S]=ae.useState(1),[U,B]=ae.useState(1),$=G=>{const de=Math.floor((new Date().getTime()-G.getTime())/(1e3*60));if(de<1)return"Just now";if(de<60)return`${de}m ago`;const J=Math.floor(de/60);return J<24?`${J}h ago`:`${Math.floor(J/24)}d ago`},W=()=>{const G=e[0].stock;if(E>G)return;const he=G-E;t(J=>J.map(ne=>ne.id==="1"?{...ne,stock:he,lastUpdated:new Date}:ne));const de={id:Date.now().toString(),action:"take",amount:E,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};l(J=>[de,...J]),h(!1),S(1)},fe=()=>{const he=e[0].stock+U;t(J=>J.map(ne=>ne.id==="1"?{...ne,stock:he,lastUpdated:new Date}:ne));const de={id:Date.now().toString(),action:"add",amount:U,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};l(J=>[de,...J]),v(!1),B(1)};return g.jsxs("div",{className:"min-h-screen bg-subtle pb-20",children:[g.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:g.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:g.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:g.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[g.jsx(nt,{onClick:r,variant:"ghost",size:"sm",children:g.jsx(zu,{className:"w-5 h-5"})}),g.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center",children:g.jsx(lv,{className:"w-6 h-6 text-on-primary"})}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:"Fridge"}),g.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Stock management"})]})]})})})}),g.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[g.jsx("div",{className:"grid grid-cols-1 gap-4 mb-6",children:e.map(G=>g.jsx("div",{className:"bg-bg rounded-xl p-6 border border-default shadow-sm",children:g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center",children:g.jsx(Ng,{className:"w-8 h-8 text-on-primary"})}),g.jsxs("div",{className:"flex-1",children:[g.jsx("h3",{className:"text-lg font-semibold text-default  mb-1",children:G.name}),g.jsxs("div",{className:"flex items-center space-x-4 text-sm text-subtle",children:[g.jsxs("div",{className:"flex items-center space-x-1",children:[g.jsx(Ng,{className:"w-4 h-4"}),g.jsxs("span",{children:[G.stock," in stock"]})]}),g.jsxs("div",{className:"flex items-center space-x-1",children:[g.jsx(Kd,{className:"w-4 h-4"}),g.jsxs("span",{children:["Updated ",$(G.lastUpdated)]})]})]})]}),g.jsxs("div",{className:"text-right",children:[g.jsx("div",{className:"text-2xl font-bold text-default ",children:G.stock}),g.jsx("div",{className:"text-sm text-subtle ",children:"units"})]})]})},G.id))}),g.jsxs("div",{className:"bg-bg rounded-xl border border-default",children:[g.jsx("div",{className:"p-4 border-b border-default",children:g.jsx("h2",{className:"text-lg font-semibold text-default ",children:"Recent Activity"})}),g.jsx("div",{className:"divide-y divide-gray-200 ",children:i.slice(0,5).map(G=>g.jsx("div",{className:"p-4",children:g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${G.action==="take"?"bg-red-100 ":"bg-green-100 "}`,children:G.action==="take"?g.jsx(ro,{className:`w-4 h-4 ${G.action==="take"?"text-red-600 ":"text-green-600 "}`}):g.jsx(qs,{className:"w-4 h-4 text-green-600 "})}),g.jsxs("div",{className:"flex-1",children:[g.jsxs("p",{className:"text-sm font-medium text-default ",children:[G.user," ",G.action==="take"?"took":"added"," ",G.amount," ",G.itemName]}),g.jsx("p",{className:"text-xs text-subtle ",children:$(G.timestamp)})]}),g.jsxs("div",{className:`text-sm font-medium ${G.action==="take"?"text-red-600 ":"text-green-600 "}`,children:[G.action==="take"?"-":"+",G.amount]})]})},G.id))})]})]}),g.jsx(w1,{onTakeItem:()=>h(!0),onAddStock:()=>v(!0),onShowLog:()=>k(!0)}),c&&g.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:g.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[g.jsx("h2",{className:"text-xl font-bold text-default  mb-4",children:"Take from Stock"}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-2",children:"Amount to take"}),g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx(nt,{onClick:()=>S(Math.max(1,E-1)),variant:"outline",size:"sm",children:g.jsx(ro,{className:"w-4 h-4"})}),g.jsx("span",{className:"text-lg font-semibold text-default  min-w-[3rem] text-center",children:E}),g.jsx(nt,{onClick:()=>S(Math.min(e[0].stock,E+1)),variant:"outline",size:"sm",children:g.jsx(qs,{className:"w-4 h-4"})})]}),g.jsxs("p",{className:"text-xs text-subtle  mt-1",children:["Available: ",e[0].stock," units"]})]}),g.jsxs("div",{className:"flex space-x-3",children:[g.jsx(nt,{onClick:()=>h(!1),variant:"outline",className:"flex-1",children:"Cancel"}),g.jsx(nt,{onClick:W,className:"flex-1",children:"Take"})]})]})]})}),m&&g.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:g.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[g.jsx("h2",{className:"text-xl font-bold text-default  mb-4",children:"Add to Stock"}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-2",children:"Amount to add"}),g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx(nt,{onClick:()=>B(Math.max(1,U-1)),variant:"outline",size:"sm",children:g.jsx(ro,{className:"w-4 h-4"})}),g.jsx("span",{className:"text-lg font-semibold text-default  min-w-[3rem] text-center",children:U}),g.jsx(nt,{onClick:()=>B(U+1),variant:"outline",size:"sm",children:g.jsx(qs,{className:"w-4 h-4"})})]})]}),g.jsxs("div",{className:"flex space-x-3",children:[g.jsx(nt,{onClick:()=>v(!1),variant:"outline",className:"flex-1",children:"Cancel"}),g.jsx(nt,{onClick:fe,className:"flex-1",children:"Add"})]})]})]})}),w&&g.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:g.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-md shadow-2xl max-h-[80vh] overflow-hidden",children:[g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsx("h2",{className:"text-xl font-bold text-default ",children:"Activity Log"}),g.jsx(nt,{onClick:()=>k(!1),variant:"ghost",size:"sm",children:g.jsx(dc,{className:"w-5 h-5"})})]}),g.jsx("div",{className:"overflow-y-auto max-h-96 space-y-3",children:i.map(G=>g.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-50 bg-subtle rounded-lg",children:[g.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${G.action==="take"?"bg-red-100 ":"bg-green-100 "}`,children:G.action==="take"?g.jsx(ro,{className:"w-4 h-4 text-red-600 "}):g.jsx(qs,{className:"w-4 h-4 text-green-600 "})}),g.jsxs("div",{className:"flex-1",children:[g.jsx("p",{className:"text-sm font-medium text-default ",children:G.user}),g.jsxs("p",{className:"text-xs text-subtle",children:[G.action==="take"?"Took":"Added"," ",G.amount," units"]}),g.jsxs("p",{className:"text-xs text-subtle ",children:[G.timestamp.toLocaleDateString()," ",G.timestamp.toLocaleTimeString()]})]}),g.jsxs("div",{className:`text-sm font-medium ${G.action==="take"?"text-red-600 ":"text-green-600 "}`,children:[G.action==="take"?"-":"+",G.amount]})]},G.id))})]})})]})},E1=()=>{};var Rg={};/**
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
 */const hv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Z=function(r,e){if(!r)throw Eo(e)},Eo=function(r){return new Error("Firebase Database ("+hv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const dv=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let l=r.charCodeAt(i);l<128?e[t++]=l:l<2048?(e[t++]=l>>6|192,e[t++]=l&63|128):(l&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=l>>18|240,e[t++]=l>>12&63|128,e[t++]=l>>6&63|128,e[t++]=l&63|128):(e[t++]=l>>12|224,e[t++]=l>>6&63|128,e[t++]=l&63|128)}return e},S1=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const l=r[t++];if(l<128)e[i++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[t++];e[i++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[t++],h=r[t++],m=r[t++],v=((l&7)<<18|(c&63)<<12|(h&63)<<6|m&63)-65536;e[i++]=String.fromCharCode(55296+(v>>10)),e[i++]=String.fromCharCode(56320+(v&1023))}else{const c=r[t++],h=r[t++];e[i++]=String.fromCharCode((l&15)<<12|(c&63)<<6|h&63)}}return e.join("")},Jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let l=0;l<r.length;l+=3){const c=r[l],h=l+1<r.length,m=h?r[l+1]:0,v=l+2<r.length,w=v?r[l+2]:0,k=c>>2,E=(c&3)<<4|m>>4;let S=(m&15)<<2|w>>6,U=w&63;v||(U=64,h||(S=64)),i.push(t[k],t[E],t[S],t[U])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(dv(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):S1(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let l=0;l<r.length;){const c=t[r.charAt(l++)],m=l<r.length?t[r.charAt(l)]:0;++l;const w=l<r.length?t[r.charAt(l)]:64;++l;const E=l<r.length?t[r.charAt(l)]:64;if(++l,c==null||m==null||w==null||E==null)throw new k1;const S=c<<2|m>>4;if(i.push(S),w!==64){const U=m<<4&240|w>>2;if(i.push(U),E!==64){const B=w<<6&192|E;i.push(B)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class k1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fv=function(r){const e=dv(r);return Jd.encodeByteArray(e,!0)},Bu=function(r){return fv(r).replace(/\./g,"")},Hu=function(r){try{return Jd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function C1(r){return pv(void 0,r)}function pv(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!T1(t)||(r[t]=pv(r[t],e[t]));return r}function T1(r){return r!=="__proto__"}/**
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
 */function I1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const N1=()=>I1().__FIREBASE_DEFAULTS__,b1=()=>{if(typeof process>"u"||typeof Rg>"u")return;const r=Rg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},R1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Hu(r[1]);return e&&JSON.parse(e)},Zd=()=>{try{return E1()||N1()||b1()||R1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},mv=r=>{var e,t;return(t=(e=Zd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},gv=r=>{const e=mv(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},yv=()=>{var r;return(r=Zd())===null||r===void 0?void 0:r.config},vv=r=>{var e;return(e=Zd())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class fc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function li(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ef(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function _v(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Bu(JSON.stringify(t)),Bu(JSON.stringify(h)),""].join(".")}const Al={};function A1(){const r={prod:[],emulator:[]};for(const e of Object.keys(Al))Al[e]?r.emulator.push(e):r.prod.push(e);return r}function P1(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Ag=!1;function tf(r,e){if(typeof window>"u"||typeof document>"u"||!li(window.location.host)||Al[r]===e||Al[r]||Ag)return;Al[r]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",c=A1().prod.length>0;function h(){const S=document.getElementById(i);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function v(S,U){S.setAttribute("width","24"),S.setAttribute("id",U),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function w(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Ag=!0,h()},S}function k(S,U){S.setAttribute("id",U),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=P1(i),U=t("text"),B=document.getElementById(U)||document.createElement("span"),$=t("learnmore"),W=document.getElementById($)||document.createElement("a"),fe=t("preprendIcon"),G=document.getElementById(fe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const he=S.element;m(he),k(W,$);const de=w();v(G,fe),he.append(G,B,W,de),document.body.appendChild(he)}c?(B.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function D1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function O1(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function wv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function j1(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function L1(){return hv.NODE_ADMIN===!0}function M1(){try{return typeof indexedDB=="object"}catch{return!1}}function F1(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(i);l.onsuccess=()=>{l.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},l.onupgradeneeded=()=>{t=!1},l.onerror=()=>{var c;e(((c=l.error)===null||c===void 0?void 0:c.message)||"")}}catch(t){e(t)}})}/**
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
 */const U1="FirebaseError";class Pr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=U1,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,na.prototype.create)}}class na{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},l=`${this.service}/${e}`,c=this.errors[e],h=c?z1(c,i):"Error",m=`${this.serviceName}: ${h} (${l}).`;return new Pr(l,m,i)}}function z1(r,e){return r.replace(V1,(t,i)=>{const l=e[i];return l!=null?String(l):`<${i}?>`})}const V1=/\{\$([^}]+)}/g;/**
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
 */function Hl(r){return JSON.parse(r)}function St(r){return JSON.stringify(r)}/**
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
 */const xv=function(r){let e={},t={},i={},l="";try{const c=r.split(".");e=Hl(Hu(c[0])||""),t=Hl(Hu(c[1])||""),l=c[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:l}},B1=function(r){const e=xv(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},H1=function(r){const e=xv(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function tr(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function mo(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Ed(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Wu(r,e,t){const i={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(i[l]=e.call(t,r[l],l,r));return i}function fs(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const l of t){if(!i.includes(l))return!1;const c=r[l],h=e[l];if(Pg(c)&&Pg(h)){if(!fs(c,h))return!1}else if(c!==h)return!1}for(const l of i)if(!t.includes(l))return!1;return!0}function Pg(r){return r!==null&&typeof r=="object"}/**
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
 */function So(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(l=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class W1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)i[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)i[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const S=i[E-3]^i[E-8]^i[E-14]^i[E-16];i[E]=(S<<1|S>>>31)&4294967295}let l=this.chain_[0],c=this.chain_[1],h=this.chain_[2],m=this.chain_[3],v=this.chain_[4],w,k;for(let E=0;E<80;E++){E<40?E<20?(w=m^c&(h^m),k=1518500249):(w=c^h^m,k=1859775393):E<60?(w=c&h|m&(c|h),k=2400959708):(w=c^h^m,k=3395469782);const S=(l<<5|l>>>27)+w+v+k+i[E]&4294967295;v=m,m=h,h=(c<<30|c>>>2)&4294967295,c=l,l=S}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+m&4294967295,this.chain_[4]=this.chain_[4]+v&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let l=0;const c=this.buf_;let h=this.inbuf_;for(;l<t;){if(h===0)for(;l<=i;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<t;)if(c[h]=e.charCodeAt(l),++h,++l,h===this.blockSize){this.compress_(c),h=0;break}}else for(;l<t;)if(c[h]=e[l],++h,++l,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let l=0;l<5;l++)for(let c=24;c>=0;c-=8)e[i]=this.chain_[l]>>c&255,++i;return e}}function $1(r,e){const t=new G1(r,e);return t.subscribe.bind(t)}class G1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let l;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");q1(e,["next","error","complete"])?l=e:l={next:e,error:t,complete:i},l.next===void 0&&(l.next=sd),l.error===void 0&&(l.error=sd),l.complete===void 0&&(l.complete=sd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q1(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function sd(){}function rf(r,e){return`${r} failed: ${e} argument `}/**
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
 */const K1=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let l=r.charCodeAt(i);if(l>=55296&&l<=56319){const c=l-55296;i++,Z(i<r.length,"Surrogate pair missing trail surrogate.");const h=r.charCodeAt(i)-56320;l=65536+(c<<10)+h}l<128?e[t++]=l:l<2048?(e[t++]=l>>6|192,e[t++]=l&63|128):l<65536?(e[t++]=l>>12|224,e[t++]=l>>6&63|128,e[t++]=l&63|128):(e[t++]=l>>18|240,e[t++]=l>>12&63|128,e[t++]=l>>6&63|128,e[t++]=l&63|128)}return e},pc=function(r){let e=0;for(let t=0;t<r.length;t++){const i=r.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function nr(r){return r&&r._delegate?r._delegate:r}class ps{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ws="[DEFAULT]";/**
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
 */class Y1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new fc;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:t});l&&i.resolve(l)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),l=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(c){if(l)return null;throw c}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(X1(e))try{this.getOrInitializeService({instanceIdentifier:Ws})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:l});i.resolve(c)}catch{}}}}clearInstance(e=Ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ws){return this.instances.has(e)}getOptions(e=Ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[c,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);i===m&&h.resolve(l)}return l}onInit(e,t){var i;const l=this.normalizeInstanceIdentifier(t),c=(i=this.onInitCallbacks.get(l))!==null&&i!==void 0?i:new Set;c.add(e),this.onInitCallbacks.set(l,c);const h=this.instances.get(l);return h&&e(h,l),()=>{c.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const l of i)try{l(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Q1(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ws){return this.component?this.component.multipleInstances?e:Ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Q1(r){return r===Ws?void 0:r}function X1(r){return r.instantiationMode==="EAGER"}/**
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
 */class J1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Y1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ue;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ue||(Ue={}));const Z1={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},ex=Ue.INFO,tx={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},nx=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),l=tx[e];if(l)console[l](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mc{constructor(e){this.name=e,this._logLevel=ex,this._logHandler=nx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Z1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const rx=(r,e)=>e.some(t=>r instanceof t);let Dg,Og;function sx(){return Dg||(Dg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ix(){return Og||(Og=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ev=new WeakMap,Sd=new WeakMap,Sv=new WeakMap,id=new WeakMap,sf=new WeakMap;function ox(r){const e=new Promise((t,i)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",h)},c=()=>{t(cs(r.result)),l()},h=()=>{i(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Ev.set(t,r)}).catch(()=>{}),sf.set(e,r),e}function lx(r){if(Sd.has(r))return;const e=new Promise((t,i)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",h),r.removeEventListener("abort",h)},c=()=>{t(),l()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",h),r.addEventListener("abort",h)});Sd.set(r,e)}let kd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Sd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Sv.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return cs(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ax(r){kd=r(kd)}function ux(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(od(this),e,...t);return Sv.set(i,e.sort?e.sort():[e]),cs(i)}:ix().includes(r)?function(...e){return r.apply(od(this),e),cs(Ev.get(this))}:function(...e){return cs(r.apply(od(this),e))}}function cx(r){return typeof r=="function"?ux(r):(r instanceof IDBTransaction&&lx(r),rx(r,sx())?new Proxy(r,kd):r)}function cs(r){if(r instanceof IDBRequest)return ox(r);if(id.has(r))return id.get(r);const e=cx(r);return e!==r&&(id.set(r,e),sf.set(e,r)),e}const od=r=>sf.get(r);function hx(r,e,{blocked:t,upgrade:i,blocking:l,terminated:c}={}){const h=indexedDB.open(r,e),m=cs(h);return i&&h.addEventListener("upgradeneeded",v=>{i(cs(h.result),v.oldVersion,v.newVersion,cs(h.transaction),v)}),t&&h.addEventListener("blocked",v=>t(v.oldVersion,v.newVersion,v)),m.then(v=>{c&&v.addEventListener("close",()=>c()),l&&v.addEventListener("versionchange",w=>l(w.oldVersion,w.newVersion,w))}).catch(()=>{}),m}const dx=["get","getKey","getAll","getAllKeys","count"],fx=["put","add","delete","clear"],ld=new Map;function jg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ld.get(e))return ld.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,l=fx.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(l||dx.includes(t)))return;const c=async function(h,...m){const v=this.transaction(h,l?"readwrite":"readonly");let w=v.store;return i&&(w=w.index(m.shift())),(await Promise.all([w[t](...m),l&&v.done]))[0]};return ld.set(e,c),c}ax(r=>({...r,get:(e,t,i)=>jg(e,t)||r.get(e,t,i),has:(e,t)=>!!jg(e,t)||r.has(e,t)}));/**
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
 */class px{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mx(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function mx(r){const e=r.getComponent();return e?.type==="VERSION"}const Cd="@firebase/app",Lg="0.13.2";/**
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
 */const Ir=new mc("@firebase/app"),gx="@firebase/app-compat",yx="@firebase/analytics-compat",vx="@firebase/analytics",_x="@firebase/app-check-compat",wx="@firebase/app-check",xx="@firebase/auth",Ex="@firebase/auth-compat",Sx="@firebase/database",kx="@firebase/data-connect",Cx="@firebase/database-compat",Tx="@firebase/functions",Ix="@firebase/functions-compat",Nx="@firebase/installations",bx="@firebase/installations-compat",Rx="@firebase/messaging",Ax="@firebase/messaging-compat",Px="@firebase/performance",Dx="@firebase/performance-compat",Ox="@firebase/remote-config",jx="@firebase/remote-config-compat",Lx="@firebase/storage",Mx="@firebase/storage-compat",Fx="@firebase/firestore",Ux="@firebase/ai",zx="@firebase/firestore-compat",Vx="firebase",Bx="11.10.0";/**
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
 */const Td="[DEFAULT]",Hx={[Cd]:"fire-core",[gx]:"fire-core-compat",[vx]:"fire-analytics",[yx]:"fire-analytics-compat",[wx]:"fire-app-check",[_x]:"fire-app-check-compat",[xx]:"fire-auth",[Ex]:"fire-auth-compat",[Sx]:"fire-rtdb",[kx]:"fire-data-connect",[Cx]:"fire-rtdb-compat",[Tx]:"fire-fn",[Ix]:"fire-fn-compat",[Nx]:"fire-iid",[bx]:"fire-iid-compat",[Rx]:"fire-fcm",[Ax]:"fire-fcm-compat",[Px]:"fire-perf",[Dx]:"fire-perf-compat",[Ox]:"fire-rc",[jx]:"fire-rc-compat",[Lx]:"fire-gcs",[Mx]:"fire-gcs-compat",[Fx]:"fire-fst",[zx]:"fire-fst-compat",[Ux]:"fire-vertex","fire-js":"fire-js",[Vx]:"fire-js-all"};/**
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
 */const $u=new Map,Wx=new Map,Id=new Map;function Mg(r,e){try{r.container.addComponent(e)}catch(t){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function ei(r){const e=r.name;if(Id.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;Id.set(e,r);for(const t of $u.values())Mg(t,r);for(const t of Wx.values())Mg(t,r);return!0}function gc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Pn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const $x={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hs=new na("app","Firebase",$x);/**
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
 */class Gx{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ps("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hs.create("app-deleted",{appName:this._name})}}/**
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
 */const ai=Bx;function kv(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Td,automaticDataCollectionEnabled:!0},e),l=i.name;if(typeof l!="string"||!l)throw hs.create("bad-app-name",{appName:String(l)});if(t||(t=yv()),!t)throw hs.create("no-options");const c=$u.get(l);if(c){if(fs(t,c.options)&&fs(i,c.config))return c;throw hs.create("duplicate-app",{appName:l})}const h=new J1(l);for(const v of Id.values())h.addComponent(v);const m=new Gx(t,i,h);return $u.set(l,m),m}function of(r=Td){const e=$u.get(r);if(!e&&r===Td&&yv())return kv();if(!e)throw hs.create("no-app",{appName:r});return e}function Jn(r,e,t){var i;let l=(i=Hx[r])!==null&&i!==void 0?i:r;t&&(l+=`-${t}`);const c=l.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const m=[`Unable to register library "${l}" with version "${e}":`];c&&m.push(`library name "${l}" contains illegal characters (whitespace or "/")`),c&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(m.join(" "));return}ei(new ps(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const qx="firebase-heartbeat-database",Kx=1,Wl="firebase-heartbeat-store";let ad=null;function Cv(){return ad||(ad=hx(qx,Kx,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Wl)}catch(t){console.warn(t)}}}}).catch(r=>{throw hs.create("idb-open",{originalErrorMessage:r.message})})),ad}async function Yx(r){try{const t=(await Cv()).transaction(Wl),i=await t.objectStore(Wl).get(Tv(r));return await t.done,i}catch(e){if(e instanceof Pr)Ir.warn(e.message);else{const t=hs.create("idb-get",{originalErrorMessage:e?.message});Ir.warn(t.message)}}}async function Fg(r,e){try{const i=(await Cv()).transaction(Wl,"readwrite");await i.objectStore(Wl).put(e,Tv(r)),await i.done}catch(t){if(t instanceof Pr)Ir.warn(t.message);else{const i=hs.create("idb-set",{originalErrorMessage:t?.message});Ir.warn(i.message)}}}function Tv(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Qx=1024,Xx=30;class Jx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new eE(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Ug();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>Xx){const h=tE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ir.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ug(),{heartbeatsToSend:i,unsentEntries:l}=Zx(this._heartbeatsCache.heartbeats),c=Bu(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(t){return Ir.warn(t),""}}}function Ug(){return new Date().toISOString().substring(0,10)}function Zx(r,e=Qx){const t=[];let i=r.slice();for(const l of r){const c=t.find(h=>h.agent===l.agent);if(c){if(c.dates.push(l.date),zg(t)>e){c.dates.pop();break}}else if(t.push({agent:l.agent,dates:[l.date]}),zg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class eE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return M1()?F1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Yx(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const l=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const l=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function zg(r){return Bu(JSON.stringify({version:2,heartbeats:r})).length}function tE(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function nE(r){ei(new ps("platform-logger",e=>new px(e),"PRIVATE")),ei(new ps("heartbeat",e=>new Jx(e),"PRIVATE")),Jn(Cd,Lg,r),Jn(Cd,Lg,"esm2017"),Jn("fire-js","")}nE("");var Vg={};const Bg="@firebase/database",Hg="1.0.20";/**
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
 */let Iv="";function rE(r){Iv=r}/**
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
 */class sE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),St(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Hl(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class iE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return tr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Nv=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sE(e)}}catch{}return new iE},Ks=Nv("localStorage"),oE=Nv("sessionStorage");/**
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
 */const lo=new mc("@firebase/database"),lE=function(){let r=1;return function(){return r++}}(),bv=function(r){const e=K1(r),t=new W1;t.update(e);const i=t.digest();return Jd.encodeByteArray(i)},ra=function(...r){let e="";for(let t=0;t<r.length;t++){const i=r[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ra.apply(null,i):typeof i=="object"?e+=St(i):e+=i,e+=" "}return e};let Pl=null,Wg=!0;const aE=function(r,e){Z(!0,"Can't turn on custom loggers persistently."),lo.logLevel=Ue.VERBOSE,Pl=lo.log.bind(lo)},bt=function(...r){if(Wg===!0&&(Wg=!1,Pl===null&&oE.get("logging_enabled")===!0&&aE()),Pl){const e=ra.apply(null,r);Pl(e)}},sa=function(r){return function(...e){bt(r,...e)}},Nd=function(...r){const e="FIREBASE INTERNAL ERROR: "+ra(...r);lo.error(e)},Nr=function(...r){const e=`FIREBASE FATAL ERROR: ${ra(...r)}`;throw lo.error(e),new Error(e)},Jt=function(...r){const e="FIREBASE WARNING: "+ra(...r);lo.warn(e)},uE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},lf=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},cE=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},go="[MIN_NAME]",ti="[MAX_NAME]",ui=function(r,e){if(r===e)return 0;if(r===go||e===ti)return-1;if(e===go||r===ti)return 1;{const t=$g(r),i=$g(e);return t!==null?i!==null?t-i===0?r.length-e.length:t-i:-1:i!==null?1:r<e?-1:1}},hE=function(r,e){return r===e?0:r<e?-1:1},Cl=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+St(e))},af=function(r){if(typeof r!="object"||r===null)return St(r);const e=[];for(const i in r)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=St(e[i]),t+=":",t+=af(r[e[i]]);return t+="}",t},Rv=function(r,e){const t=r.length;if(t<=e)return[r];const i=[];for(let l=0;l<t;l+=e)l+e>t?i.push(r.substring(l,t)):i.push(r.substring(l,l+e));return i};function At(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const Av=function(r){Z(!lf(r),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let l,c,h,m,v;r===0?(c=0,h=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-i)?(m=Math.min(Math.floor(Math.log(r)/Math.LN2),i),c=m+i,h=Math.round(r*Math.pow(2,t-m)-Math.pow(2,t))):(c=0,h=Math.round(r/Math.pow(2,1-i-t))));const w=[];for(v=t;v;v-=1)w.push(h%2?1:0),h=Math.floor(h/2);for(v=e;v;v-=1)w.push(c%2?1:0),c=Math.floor(c/2);w.push(l?1:0),w.reverse();const k=w.join("");let E="";for(v=0;v<64;v+=8){let S=parseInt(k.substr(v,8),2).toString(16);S.length===1&&(S="0"+S),E=E+S}return E.toLowerCase()},dE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function pE(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const i=new Error(r+" at "+e._path.toString()+": "+t);return i.code=r.toUpperCase(),i}const mE=new RegExp("^-?(0*)\\d{1,10}$"),gE=-2147483648,yE=2147483647,$g=function(r){if(mE.test(r)){const e=Number(r);if(e>=gE&&e<=yE)return e}return null},ko=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Jt("Exception was thrown by user callback.",t),e},Math.floor(0))}},vE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Dl=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class _E{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Pn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Jt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class wE{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Jt(e)}}class Ou{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ou.OWNER="owner";/**
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
 */const uf="5",Pv="v",Dv="s",Ov="r",jv="f",Lv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Mv="ls",Fv="p",bd="ac",Uv="websocket",zv="long_polling";/**
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
 */class Vv{constructor(e,t,i,l,c=!1,h="",m=!1,v=!1,w=null){this.secure=t,this.namespace=i,this.webSocketOnly=l,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=m,this.isUsingEmulator=v,this.emulatorOptions=w,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ks.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ks.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function xE(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Bv(r,e,t){Z(typeof e=="string","typeof type must == string"),Z(typeof t=="object","typeof params must == object");let i;if(e===Uv)i=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===zv)i=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xE(r)&&(t.ns=r.namespace);const l=[];return At(t,(c,h)=>{l.push(c+"="+h)}),i+l.join("&")}/**
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
 */class EE{constructor(){this.counters_={}}incrementCounter(e,t=1){tr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return C1(this.counters_)}}/**
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
 */const ud={},cd={};function cf(r){const e=r.toString();return ud[e]||(ud[e]=new EE),ud[e]}function SE(r,e){const t=r.toString();return cd[t]||(cd[t]=e()),cd[t]}/**
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
 */class kE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<i.length;++l)i[l]&&ko(()=>{this.onMessage_(i[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Gg="start",CE="close",TE="pLPCommand",IE="pRTLPCB",Hv="id",Wv="pw",$v="ser",NE="cb",bE="seg",RE="ts",AE="d",PE="dframe",Gv=1870,qv=30,DE=Gv-qv,OE=25e3,jE=3e4;class so{constructor(e,t,i,l,c,h,m){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=l,this.authToken=c,this.transportSessionId=h,this.lastSessionId=m,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sa(e),this.stats_=cf(t),this.urlFn=v=>(this.appCheckToken&&(v[bd]=this.appCheckToken),Bv(t,zv,v))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new kE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jE)),cE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hf((...c)=>{const[h,m,v,w,k]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===Gg)this.id=m,this.password=v;else if(h===CE)m?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(m,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,m]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,m)},()=>{this.onClosed_()},this.urlFn);const i={};i[Gg]="t",i[$v]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[NE]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Pv]=uf,this.transportSessionId&&(i[Dv]=this.transportSessionId),this.lastSessionId&&(i[Mv]=this.lastSessionId),this.applicationId&&(i[Fv]=this.applicationId),this.appCheckToken&&(i[bd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Lv.test(location.hostname)&&(i[Ov]=jv);const l=this.urlFn(i);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){so.forceAllow_=!0}static forceDisallow(){so.forceDisallow_=!0}static isAvailable(){return so.forceAllow_?!0:!so.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!dE()&&!fE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=St(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=fv(t),l=Rv(i,DE);for(let c=0;c<l.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[c]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[PE]="t",i[Hv]=e,i[Wv]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=St(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class hf{constructor(e,t,i,l){this.onDisconnect=i,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lE(),window[TE+this.uniqueCallbackIdentifier]=e,window[IE+this.uniqueCallbackIdentifier]=t,this.myIFrame=hf.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(m){bt("frame writing exception"),m.stack&&bt(m.stack),bt(m)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||bt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Hv]=this.myID,e[Wv]=this.myPW,e[$v]=this.currentSerial;let t=this.urlFn(e),i="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qv+i.length<=Gv;){const h=this.pendingSegs.shift();i=i+"&"+bE+l+"="+h.seg+"&"+RE+l+"="+h.ts+"&"+AE+l+"="+h.d,l++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},l=setTimeout(i,Math.floor(OE)),c=()=>{clearTimeout(l),i()};this.addTag(e,c)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const l=i.readyState;(!l||l==="loaded"||l==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const LE=16384,ME=45e3;let Gu=null;typeof MozWebSocket<"u"?Gu=MozWebSocket:typeof WebSocket<"u"&&(Gu=WebSocket);class Dn{constructor(e,t,i,l,c,h,m){this.connId=e,this.applicationId=i,this.appCheckToken=l,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sa(this.connId),this.stats_=cf(t),this.connURL=Dn.connectionURL_(t,h,m,l,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,l,c){const h={};return h[Pv]=uf,typeof location<"u"&&location.hostname&&Lv.test(location.hostname)&&(h[Ov]=jv),t&&(h[Dv]=t),i&&(h[Mv]=i),l&&(h[bd]=l),c&&(h[Fv]=c),Bv(e,Uv,h)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ks.set("previous_websocket_failure",!0);try{let i;L1(),this.mySock=new Gu(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const l=i.message||i.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const l=i.message||i.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Gu!==null&&!Dn.forceDisallow_}static previouslyFailed(){return Ks.isInMemoryStorage||Ks.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ks.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Hl(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Z(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=St(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Rv(t,LE);i.length>1&&this.sendString_(String(i.length));for(let l=0;l<i.length;l++)this.sendString_(i[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ME))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dn.responsesRequiredToBeHealthy=2;Dn.healthyTimeout=3e4;/**
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
 */class $l{static get ALL_TRANSPORTS(){return[so,Dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Dn&&Dn.isAvailable();let i=t&&!Dn.previouslyFailed();if(e.webSocketOnly&&(t||Jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Dn];else{const l=this.transports_=[];for(const c of $l.ALL_TRANSPORTS)c&&c.isAvailable()&&l.push(c);$l.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$l.globalTransportInitialized_=!1;/**
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
 */const FE=6e4,UE=5e3,zE=10*1024,VE=100*1024,hd="t",qg="d",BE="s",Kg="r",HE="e",Yg="o",Qg="a",Xg="n",Jg="p",WE="h";class $E{constructor(e,t,i,l,c,h,m,v,w,k){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=l,this.authToken_=c,this.onMessage_=h,this.onReady_=m,this.onDisconnect_=v,this.onKill_=w,this.lastSessionId=k,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sa("c:"+this.id+":"),this.transportManager_=new $l(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Dl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>VE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hd in e){const t=e[hd];t===Qg?this.upgradeIfSecondaryHealthy_():t===Kg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Yg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Cl("t",e),i=Cl("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Cl("t",e),i=Cl("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Cl(hd,e);if(qg in e){const i=e[qg];if(t===WE){const l=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(t===Xg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===BE?this.onConnectionShutdown_(i):t===Kg?this.onReset_(i):t===HE?Nd("Server Error: "+i):t===Yg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nd("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),uf!==i&&Jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Dl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(FE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Dl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(UE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ks.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Kv{put(e,t,i,l){}merge(e,t,i,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Yv{constructor(e){this.allowedEvents_=e,this.listeners_={},Z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let l=0;l<i.length;l++)i[l].callback.apply(i[l].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const l=this.getInitialEvent(e);l&&t.apply(i,l)}off(e,t,i){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let c=0;c<l.length;c++)if(l[c].callback===t&&(!i||i===l[c].context)){l.splice(c,1);return}}validateEventType_(e){Z(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class qu extends Yv{static getInstance(){return new qu}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!nf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Zg=32,ey=768;class Be{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[i]=this.pieces_[l],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ze(){return new Be("")}function Ie(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function ms(r){return r.pieces_.length-r.pieceNum_}function Ye(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Be(r.pieces_,e)}function df(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function GE(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function Gl(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function Qv(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new Be(e,0)}function st(r,e){const t=[];for(let i=r.pieceNum_;i<r.pieces_.length;i++)t.push(r.pieces_[i]);if(e instanceof Be)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let l=0;l<i.length;l++)i[l].length>0&&t.push(i[l])}return new Be(t,0)}function Ne(r){return r.pieceNum_>=r.pieces_.length}function Qt(r,e){const t=Ie(r),i=Ie(e);if(t===null)return e;if(t===i)return Qt(Ye(r),Ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function qE(r,e){const t=Gl(r,0),i=Gl(e,0);for(let l=0;l<t.length&&l<i.length;l++){const c=ui(t[l],i[l]);if(c!==0)return c}return t.length===i.length?0:t.length<i.length?-1:1}function ff(r,e){if(ms(r)!==ms(e))return!1;for(let t=r.pieceNum_,i=e.pieceNum_;t<=r.pieces_.length;t++,i++)if(r.pieces_[t]!==e.pieces_[i])return!1;return!0}function mn(r,e){let t=r.pieceNum_,i=e.pieceNum_;if(ms(r)>ms(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class KE{constructor(e,t){this.errorPrefix_=t,this.parts_=Gl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=pc(this.parts_[i]);Xv(this)}}function YE(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=pc(e),Xv(r)}function QE(r){const e=r.parts_.pop();r.byteLength_-=pc(e),r.parts_.length>0&&(r.byteLength_-=1)}function Xv(r){if(r.byteLength_>ey)throw new Error(r.errorPrefix_+"has a key path longer than "+ey+" bytes ("+r.byteLength_+").");if(r.parts_.length>Zg)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zg+") or object contains a cycle "+$s(r))}function $s(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class pf extends Yv{static getInstance(){return new pf}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return Z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Tl=1e3,XE=60*5*1e3,ty=30*1e3,JE=1.3,ZE=3e4,eS="server_kill",ny=3;class Tr extends Kv{constructor(e,t,i,l,c,h,m,v){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=l,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=m,this.authOverride_=v,this.id=Tr.nextPersistentConnectionId_++,this.log_=sa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Tl,this.maxReconnectDelay_=XE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,v)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const l=++this.requestNumber_,c={r:l,a:e,b:t};this.log_(St(c)),Z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),i&&(this.requestCBHash_[l]=i)}get(e){this.initConnection_();const t=new fc,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const m=h.d;h.s==="ok"?t.resolve(m):t.reject(m)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),t.promise}listen(e,t,i,l){this.initConnection_();const c=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Z(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const m={onComplete:l,hashFn:t,query:e,tag:i};this.listens.get(h).set(c,m),this.connected_&&this.sendListen_(m)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),l=t._queryIdentifier;this.log_("Listen on "+i+" for "+l);const c={p:i},h="q";e.tag&&(c.q=t._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(h,c,m=>{const v=m.d,w=m.s;Tr.warnOnListenWarnings_(v,t),(this.listens.get(i)&&this.listens.get(i).get(l))===e&&(this.log_("listen response",m),w!=="ok"&&this.removeListen_(i,l),e.onComplete&&e.onComplete(w,v))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&tr(e,"w")){const i=mo(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const l='".indexOn": "'+t._queryParams.getIndex().toString()+'"',c=t._path.toString();Jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||H1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ty)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=B1(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,l=>{const c=l.s,h=l.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+l),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,l)&&this.connected_&&this.sendUnlisten_(i,l,e._queryObject,t)}sendUnlisten_(e,t,i,l){this.log_("Unlisten on "+e+" for "+t);const c={p:e},h="n";l&&(c.q=i,c.t=l),this.sendRequest(h,c)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,l){const c={p:t,d:i};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,h=>{l&&setTimeout(()=>{l(h.s,h.d)},Math.floor(0))})}put(e,t,i,l){this.putInternal("p",e,t,i,l)}merge(e,t,i,l){this.putInternal("m",e,t,i,l)}putInternal(e,t,i,l,c){this.initConnection_();const h={p:t,d:i};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:e,request:h,onComplete:l}),this.outstandingPutCount_++;const m=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(m):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,c=>{this.log_(t+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(c.s,c.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const c=i.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+St(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Nd("Unrecognized action received from server: "+St(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Tl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Tl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ZE&&(this.reconnectDelay_=Tl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*JE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Tr.nextConnectionId_++,c=this.lastSessionId;let h=!1,m=null;const v=function(){m?m.close():(h=!0,i())},w=function(E){Z(m,"sendRequest call when we're not connected not allowed."),m.sendRequest(E)};this.realtime_={close:v,sendRequest:w};const k=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,S]=await Promise.all([this.authTokenProvider_.getToken(k),this.appCheckTokenProvider_.getToken(k)]);h?bt("getToken() completed but was canceled"):(bt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=S&&S.token,m=new $E(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,U=>{Jt(U+" ("+this.repoInfo_.toString()+")"),this.interrupt(eS)},c))}catch(E){this.log_("Failed to get token: "+E),h||(this.repoInfo_.nodeAdmin&&Jt(E),v())}}}interrupt(e){bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ed(this.interruptReasons_)&&(this.reconnectDelay_=Tl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(c=>af(c)).join("$"):i="default";const l=this.removeListen_(e,i);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,t){const i=new Be(e).toString();let l;if(this.listens.has(i)){const c=this.listens.get(i);l=c.get(t),c.delete(t),c.size===0&&this.listens.delete(i)}else l=void 0;return l}onAuthRevoked_(e,t){bt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ny&&(this.reconnectDelay_=ty,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){bt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ny&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Iv.replace(/\./g,"-")]=1,nf()?e["framework.cordova"]=1:wv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qu.getInstance().currentlyOnline();return Ed(this.interruptReasons_)&&e}}Tr.nextPersistentConnectionId_=0;Tr.nextConnectionId_=0;/**
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
 */class yc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Ce(go,e),l=new Ce(go,t);return this.compare(i,l)!==0}minPost(){return Ce.MIN}}/**
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
 */let Iu;class Jv extends yc{static get __EMPTY_NODE(){return Iu}static set __EMPTY_NODE(e){Iu=e}compare(e,t){return ui(e.name,t.name)}isDefinedOn(e){throw Eo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ce.MIN}maxPost(){return new Ce(ti,Iu)}makePost(e,t){return Z(typeof e=="string","KeyIndex indexValue must always be a string."),new Ce(e,Iu)}toString(){return".key"}}const ao=new Jv;/**
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
 */class Nu{constructor(e,t,i,l,c=null){this.isReverse_=l,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=t?i(e.key,t):1,l&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Et{constructor(e,t,i,l,c){this.key=e,this.value=t,this.color=i??Et.RED,this.left=l??Xt.EMPTY_NODE,this.right=c??Xt.EMPTY_NODE}copy(e,t,i,l,c){return new Et(e??this.key,t??this.value,i??this.color,l??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let l=this;const c=i(e,l.key);return c<0?l=l.copy(null,null,null,l.left.insert(e,t,i),null):c===0?l=l.copy(null,t,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,t,i)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,l;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Xt.EMPTY_NODE;l=i.right.min_(),i=i.copy(l.key,l.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Et.RED=!0;Et.BLACK=!1;class tS{copy(e,t,i,l,c){return this}insert(e,t,i){return new Et(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xt{constructor(e,t=Xt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Xt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Et.BLACK,null,null))}remove(e){return new Xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Et.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,l=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return l?l.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(l=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Nu(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Nu(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Nu(this.root_,null,this.comparator_,!0,e)}}Xt.EMPTY_NODE=new tS;/**
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
 */function nS(r,e){return ui(r.name,e.name)}function mf(r,e){return ui(r,e)}/**
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
 */let Rd;function rS(r){Rd=r}const Zv=function(r){return typeof r=="number"?"number:"+Av(r):"string:"+r},e_=function(r){if(r.isLeafNode()){const e=r.val();Z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tr(e,".sv"),"Priority must be a string or number.")}else Z(r===Rd||r.isEmpty(),"priority of unexpected type.");Z(r===Rd||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ry;class xt{static set __childrenNodeConstructor(e){ry=e}static get __childrenNodeConstructor(){return ry}constructor(e,t=xt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),e_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ne(e)?this:Ie(e)===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:xt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=Ie(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(Z(i!==".priority"||ms(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,xt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ye(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Av(this.value_):e+=this.value_,this.lazyHash_=bv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xt.__childrenNodeConstructor?-1:(Z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,l=xt.VALUE_TYPE_ORDER.indexOf(t),c=xt.VALUE_TYPE_ORDER.indexOf(i);return Z(l>=0,"Unknown leaf type: "+t),Z(c>=0,"Unknown leaf type: "+i),l===c?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}xt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let t_,n_;function sS(r){t_=r}function iS(r){n_=r}class oS extends yc{compare(e,t){const i=e.node.getPriority(),l=t.node.getPriority(),c=i.compareTo(l);return c===0?ui(e.name,t.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ce.MIN}maxPost(){return new Ce(ti,new xt("[PRIORITY-POST]",n_))}makePost(e,t){const i=t_(e);return new Ce(t,new xt("[PRIORITY-POST]",i))}toString(){return".priority"}}const it=new oS;/**
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
 */const lS=Math.log(2);class aS{constructor(e){const t=c=>parseInt(Math.log(c)/lS,10),i=c=>parseInt(Array(c+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const l=i(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ku=function(r,e,t,i){r.sort(e);const l=function(v,w){const k=w-v;let E,S;if(k===0)return null;if(k===1)return E=r[v],S=t?t(E):E,new Et(S,E.node,Et.BLACK,null,null);{const U=parseInt(k/2,10)+v,B=l(v,U),$=l(U+1,w);return E=r[U],S=t?t(E):E,new Et(S,E.node,Et.BLACK,B,$)}},c=function(v){let w=null,k=null,E=r.length;const S=function(B,$){const W=E-B,fe=E;E-=B;const G=l(W+1,fe),he=r[W],de=t?t(he):he;U(new Et(de,he.node,$,null,G))},U=function(B){w?(w.left=B,w=B):(k=B,w=B)};for(let B=0;B<v.count;++B){const $=v.nextBitIsOne(),W=Math.pow(2,v.count-(B+1));$?S(W,Et.BLACK):(S(W,Et.BLACK),S(W,Et.RED))}return k},h=new aS(r.length),m=c(h);return new Xt(i||e,m)};/**
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
 */let dd;const no={};class Sr{static get Default(){return Z(no&&it,"ChildrenNode.ts has not been loaded"),dd=dd||new Sr({".priority":no},{".priority":it}),dd}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=mo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Xt?t:null}hasIndex(e){return tr(this.indexSet_,e.toString())}addIndex(e,t){Z(e!==ao,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let l=!1;const c=t.getIterator(Ce.Wrap);let h=c.getNext();for(;h;)l=l||e.isDefinedOn(h.node),i.push(h),h=c.getNext();let m;l?m=Ku(i,e.getCompare()):m=no;const v=e.toString(),w=Object.assign({},this.indexSet_);w[v]=e;const k=Object.assign({},this.indexes_);return k[v]=m,new Sr(k,w)}addToIndexes(e,t){const i=Wu(this.indexes_,(l,c)=>{const h=mo(this.indexSet_,c);if(Z(h,"Missing index implementation for "+c),l===no)if(h.isDefinedOn(e.node)){const m=[],v=t.getIterator(Ce.Wrap);let w=v.getNext();for(;w;)w.name!==e.name&&m.push(w),w=v.getNext();return m.push(e),Ku(m,h.getCompare())}else return no;else{const m=t.get(e.name);let v=l;return m&&(v=v.remove(new Ce(e.name,m))),v.insert(e,e.node)}});return new Sr(i,this.indexSet_)}removeFromIndexes(e,t){const i=Wu(this.indexes_,l=>{if(l===no)return l;{const c=t.get(e.name);return c?l.remove(new Ce(e.name,c)):l}});return new Sr(i,this.indexSet_)}}/**
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
 */let Il;class ve{static get EMPTY_NODE(){return Il||(Il=new ve(new Xt(mf),null,Sr.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&e_(this.priorityNode_),this.children_.isEmpty()&&Z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Il}updatePriority(e){return this.children_.isEmpty()?this:new ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Il:t}}getChild(e){const t=Ie(e);return t===null?this:this.getImmediateChild(t).getChild(Ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Z(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Ce(e,t);let l,c;t.isEmpty()?(l=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(i,this.children_)):(l=this.children_.insert(e,t),c=this.indexMap_.addToIndexes(i,this.children_));const h=l.isEmpty()?Il:this.priorityNode_;return new ve(l,h,c)}}updateChild(e,t){const i=Ie(e);if(i===null)return t;{Z(Ie(e)!==".priority"||ms(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(i).updateChild(Ye(e),t);return this.updateImmediateChild(i,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,l=0,c=!0;if(this.forEachChild(it,(h,m)=>{t[h]=m.val(e),i++,c&&ve.INTEGER_REGEXP_.test(h)?l=Math.max(l,Number(h)):c=!1}),!e&&c&&l<2*i){const h=[];for(const m in t)h[m]=t[m];return h}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zv(this.getPriority().val())+":"),this.forEachChild(it,(t,i)=>{const l=i.hash();l!==""&&(e+=":"+t+":"+l)}),this.lazyHash_=e===""?"":bv(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const l=this.resolveIndex_(i);if(l){const c=l.getPredecessorKey(new Ce(e,t));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ce(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ce(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(l=>t(l.name,l.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,Ce.Wrap);let c=l.peek();for(;c!=null&&t.compare(c,e)<0;)l.getNext(),c=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,Ce.Wrap);let c=l.peek();for(;c!=null&&t.compare(c,e)>0;)l.getNext(),c=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ia?-1:0}withIndex(e){if(e===ao||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ve(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ao||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(it),l=t.getIterator(it);let c=i.getNext(),h=l.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=i.getNext(),h=l.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===ao?null:this.indexMap_.get(e.toString())}}ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uS extends ve{constructor(){super(new Xt(mf),ve.EMPTY_NODE,Sr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ve.EMPTY_NODE}isEmpty(){return!1}}const ia=new uS;Object.defineProperties(Ce,{MIN:{value:new Ce(go,ve.EMPTY_NODE)},MAX:{value:new Ce(ti,ia)}});Jv.__EMPTY_NODE=ve.EMPTY_NODE;xt.__childrenNodeConstructor=ve;rS(ia);iS(ia);/**
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
 */const cS=!0;function Rt(r,e=null){if(r===null)return ve.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),Z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new xt(t,Rt(e))}if(!(r instanceof Array)&&cS){const t=[];let i=!1;if(At(r,(h,m)=>{if(h.substring(0,1)!=="."){const v=Rt(m);v.isEmpty()||(i=i||!v.getPriority().isEmpty(),t.push(new Ce(h,v)))}}),t.length===0)return ve.EMPTY_NODE;const c=Ku(t,nS,h=>h.name,mf);if(i){const h=Ku(t,it.getCompare());return new ve(c,Rt(e),new Sr({".priority":h},{".priority":it}))}else return new ve(c,Rt(e),Sr.Default)}else{let t=ve.EMPTY_NODE;return At(r,(i,l)=>{if(tr(r,i)&&i.substring(0,1)!=="."){const c=Rt(l);(c.isLeafNode()||!c.isEmpty())&&(t=t.updateImmediateChild(i,c))}}),t.updatePriority(Rt(e))}}sS(Rt);/**
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
 */class hS extends yc{constructor(e){super(),this.indexPath_=e,Z(!Ne(e)&&Ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),l=this.extractChild(t.node),c=i.compareTo(l);return c===0?ui(e.name,t.name):c}makePost(e,t){const i=Rt(e),l=ve.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ce(t,l)}maxPost(){const e=ve.EMPTY_NODE.updateChild(this.indexPath_,ia);return new Ce(ti,e)}toString(){return Gl(this.indexPath_,0).join("/")}}/**
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
 */class dS extends yc{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ui(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ce.MIN}maxPost(){return Ce.MAX}makePost(e,t){const i=Rt(e);return new Ce(t,i)}toString(){return".value"}}const fS=new dS;/**
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
 */function r_(r){return{type:"value",snapshotNode:r}}function yo(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function ql(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Kl(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function pS(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class gf{constructor(e){this.index_=e}updateChild(e,t,i,l,c,h){Z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const m=e.getImmediateChild(t);return m.getChild(l).equals(i.getChild(l))&&m.isEmpty()===i.isEmpty()||(h!=null&&(i.isEmpty()?e.hasChild(t)?h.trackChildChange(ql(t,m)):Z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):m.isEmpty()?h.trackChildChange(yo(t,i)):h.trackChildChange(Kl(t,i,m))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(it,(l,c)=>{t.hasChild(l)||i.trackChildChange(ql(l,c))}),t.isLeafNode()||t.forEachChild(it,(l,c)=>{if(e.hasChild(l)){const h=e.getImmediateChild(l);h.equals(c)||i.trackChildChange(Kl(l,c,h))}else i.trackChildChange(yo(l,c))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ve.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Yl{constructor(e){this.indexedFilter_=new gf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Yl.getStartPost_(e),this.endPost_=Yl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,l,c,h){return this.matches(new Ce(t,i))||(i=ve.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,l,c,h)}updateFullNode(e,t,i){t.isLeafNode()&&(t=ve.EMPTY_NODE);let l=t.withIndex(this.index_);l=l.updatePriority(ve.EMPTY_NODE);const c=this;return t.forEachChild(it,(h,m)=>{c.matches(new Ce(h,m))||(l=l.updateImmediateChild(h,ve.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class mS{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Yl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,l,c,h){return this.rangedFilter_.matches(new Ce(t,i))||(i=ve.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,l,c,h):this.fullLimitUpdateChild_(e,t,i,c,h)}updateFullNode(e,t,i){let l;if(t.isLeafNode()||t.isEmpty())l=ve.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){l=ve.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const m=c.getNext();if(this.withinDirectionalStart(m))if(this.withinDirectionalEnd(m))l=l.updateImmediateChild(m.name,m.node),h++;else break;else continue}}else{l=t.withIndex(this.index_),l=l.updatePriority(ve.EMPTY_NODE);let c;this.reverse_?c=l.getReverseIterator(this.index_):c=l.getIterator(this.index_);let h=0;for(;c.hasNext();){const m=c.getNext();h<this.limit_&&this.withinDirectionalStart(m)&&this.withinDirectionalEnd(m)?h++:l=l.updateImmediateChild(m.name,ve.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,l,c){let h;if(this.reverse_){const E=this.index_.getCompare();h=(S,U)=>E(U,S)}else h=this.index_.getCompare();const m=e;Z(m.numChildren()===this.limit_,"");const v=new Ce(t,i),w=this.reverse_?m.getFirstChild(this.index_):m.getLastChild(this.index_),k=this.rangedFilter_.matches(v);if(m.hasChild(t)){const E=m.getImmediateChild(t);let S=l.getChildAfterChild(this.index_,w,this.reverse_);for(;S!=null&&(S.name===t||m.hasChild(S.name));)S=l.getChildAfterChild(this.index_,S,this.reverse_);const U=S==null?1:h(S,v);if(k&&!i.isEmpty()&&U>=0)return c?.trackChildChange(Kl(t,i,E)),m.updateImmediateChild(t,i);{c?.trackChildChange(ql(t,E));const $=m.updateImmediateChild(t,ve.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(c?.trackChildChange(yo(S.name,S.node)),$.updateImmediateChild(S.name,S.node)):$}}else return i.isEmpty()?e:k&&h(w,v)>=0?(c!=null&&(c.trackChildChange(ql(w.name,w.node)),c.trackChildChange(yo(t,i))),m.updateImmediateChild(t,i).updateImmediateChild(w.name,ve.EMPTY_NODE)):e}}/**
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
 */class yf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=it}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:go}hasEnd(){return this.endSet_}getIndexEndValue(){return Z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ti}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===it}copy(){const e=new yf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function gS(r){return r.loadsAllData()?new gf(r.getIndex()):r.hasLimit()?new mS(r):new Yl(r)}function sy(r){const e={};if(r.isDefault())return e;let t;if(r.index_===it?t="$priority":r.index_===fS?t="$value":r.index_===ao?t="$key":(Z(r.index_ instanceof hS,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=St(t),r.startSet_){const i=r.startAfterSet_?"startAfter":"startAt";e[i]=St(r.indexStartValue_),r.startNameSet_&&(e[i]+=","+St(r.indexStartName_))}if(r.endSet_){const i=r.endBeforeSet_?"endBefore":"endAt";e[i]=St(r.indexEndValue_),r.endNameSet_&&(e[i]+=","+St(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function iy(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==it&&(e.i=r.index_.toString()),e}/**
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
 */class Yu extends Kv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,l){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=l,this.log_=sa("p:rest:"),this.listens_={}}listen(e,t,i,l){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const h=Yu.getListenId_(e,i),m={};this.listens_[h]=m;const v=sy(e._queryParams);this.restRequest_(c+".json",v,(w,k)=>{let E=k;if(w===404&&(E=null,w=null),w===null&&this.onDataUpdate_(c,E,!1,i),mo(this.listens_,h)===m){let S;w?w===401?S="permission_denied":S="rest_error:"+w:S="ok",l(S,null)}})}unlisten(e,t){const i=Yu.getListenId_(e,t);delete this.listens_[i]}get(e){const t=sy(e._queryParams),i=e._path.toString(),l=new fc;return this.restRequest_(i+".json",t,(c,h)=>{let m=h;c===404&&(m=null,c=null),c===null?(this.onDataUpdate_(i,m,!1,null),l.resolve(m)):l.reject(new Error(m))}),l.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,c])=>{l&&l.accessToken&&(t.auth=l.accessToken),c&&c.token&&(t.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+So(t);this.log_("Sending REST request for "+h);const m=new XMLHttpRequest;m.onreadystatechange=()=>{if(i&&m.readyState===4){this.log_("REST Response for "+h+" received. status:",m.status,"response:",m.responseText);let v=null;if(m.status>=200&&m.status<300){try{v=Hl(m.responseText)}catch{Jt("Failed to parse JSON response for "+h+": "+m.responseText)}i(null,v)}else m.status!==401&&m.status!==404&&Jt("Got unsuccessful REST response for "+h+" Status: "+m.status),i(m.status);i=null}},m.open("GET",h,!0),m.send()})}}/**
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
 */class yS{constructor(){this.rootNode_=ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Qu(){return{value:null,children:new Map}}function s_(r,e,t){if(Ne(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const i=Ie(e);r.children.has(i)||r.children.set(i,Qu());const l=r.children.get(i);e=Ye(e),s_(l,e,t)}}function Ad(r,e,t){r.value!==null?t(e,r.value):vS(r,(i,l)=>{const c=new Be(e.toString()+"/"+i);Ad(l,c,t)})}function vS(r,e){r.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class _S{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&At(this.last_,(i,l)=>{t[i]=t[i]-l}),this.last_=e,t}}/**
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
 */const oy=10*1e3,wS=30*1e3,xS=5*60*1e3;class ES{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new _S(e);const i=oy+(wS-oy)*Math.random();Dl(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;At(e,(l,c)=>{c>0&&tr(this.statsToReport_,l)&&(t[l]=c,i=!0)}),i&&this.server_.reportStats(t),Dl(this.reportStats_.bind(this),Math.floor(Math.random()*2*xS))}}/**
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
 */var On;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(On||(On={}));function vf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _f(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wf(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class Xu{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=On.ACK_USER_WRITE,this.source=vf()}operationForChild(e){if(Ne(this.path)){if(this.affectedTree.value!=null)return Z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Be(e));return new Xu(ze(),t,this.revert)}}else return Z(Ie(this.path)===e,"operationForChild called for unrelated child."),new Xu(Ye(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ql{constructor(e,t){this.source=e,this.path=t,this.type=On.LISTEN_COMPLETE}operationForChild(e){return Ne(this.path)?new Ql(this.source,ze()):new Ql(this.source,Ye(this.path))}}/**
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
 */class ni{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=On.OVERWRITE}operationForChild(e){return Ne(this.path)?new ni(this.source,ze(),this.snap.getImmediateChild(e)):new ni(this.source,Ye(this.path),this.snap)}}/**
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
 */class vo{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=On.MERGE}operationForChild(e){if(Ne(this.path)){const t=this.children.subtree(new Be(e));return t.isEmpty()?null:t.value?new ni(this.source,ze(),t.value):new vo(this.source,ze(),t)}else return Z(Ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vo(this.source,Ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ri{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ne(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ie(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class SS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kS(r,e,t,i){const l=[],c=[];return e.forEach(h=>{h.type==="child_changed"&&r.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(pS(h.childName,h.snapshotNode))}),Nl(r,l,"child_removed",e,i,t),Nl(r,l,"child_added",e,i,t),Nl(r,l,"child_moved",c,i,t),Nl(r,l,"child_changed",e,i,t),Nl(r,l,"value",e,i,t),l}function Nl(r,e,t,i,l,c){const h=i.filter(m=>m.type===t);h.sort((m,v)=>TS(r,m,v)),h.forEach(m=>{const v=CS(r,m,c);l.forEach(w=>{w.respondsTo(m.type)&&e.push(w.createEvent(v,r.query_))})})}function CS(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function TS(r,e,t){if(e.childName==null||t.childName==null)throw Eo("Should only compare child_ events.");const i=new Ce(e.childName,e.snapshotNode),l=new Ce(t.childName,t.snapshotNode);return r.index_.compare(i,l)}/**
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
 */function vc(r,e){return{eventCache:r,serverCache:e}}function Ol(r,e,t,i){return vc(new ri(e,t,i),r.serverCache)}function i_(r,e,t,i){return vc(r.eventCache,new ri(e,t,i))}function Pd(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function si(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let fd;const IS=()=>(fd||(fd=new Xt(hE)),fd);class Ke{static fromObject(e){let t=new Ke(null);return At(e,(i,l)=>{t=t.set(new Be(i),l)}),t}constructor(e,t=IS()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ze(),value:this.value};if(Ne(e))return null;{const i=Ie(e),l=this.children.get(i);if(l!==null){const c=l.findRootMostMatchingPathAndValue(Ye(e),t);return c!=null?{path:st(new Be(i),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ne(e))return this;{const t=Ie(e),i=this.children.get(t);return i!==null?i.subtree(Ye(e)):new Ke(null)}}set(e,t){if(Ne(e))return new Ke(t,this.children);{const i=Ie(e),c=(this.children.get(i)||new Ke(null)).set(Ye(e),t),h=this.children.insert(i,c);return new Ke(this.value,h)}}remove(e){if(Ne(e))return this.children.isEmpty()?new Ke(null):new Ke(null,this.children);{const t=Ie(e),i=this.children.get(t);if(i){const l=i.remove(Ye(e));let c;return l.isEmpty()?c=this.children.remove(t):c=this.children.insert(t,l),this.value===null&&c.isEmpty()?new Ke(null):new Ke(this.value,c)}else return this}}get(e){if(Ne(e))return this.value;{const t=Ie(e),i=this.children.get(t);return i?i.get(Ye(e)):null}}setTree(e,t){if(Ne(e))return t;{const i=Ie(e),c=(this.children.get(i)||new Ke(null)).setTree(Ye(e),t);let h;return c.isEmpty()?h=this.children.remove(i):h=this.children.insert(i,c),new Ke(this.value,h)}}fold(e){return this.fold_(ze(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((l,c)=>{i[l]=c.fold_(st(e,l),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,ze(),t)}findOnPath_(e,t,i){const l=this.value?i(t,this.value):!1;if(l)return l;if(Ne(e))return null;{const c=Ie(e),h=this.children.get(c);return h?h.findOnPath_(Ye(e),st(t,c),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ze(),t)}foreachOnPath_(e,t,i){if(Ne(e))return this;{this.value&&i(t,this.value);const l=Ie(e),c=this.children.get(l);return c?c.foreachOnPath_(Ye(e),st(t,l),i):new Ke(null)}}foreach(e){this.foreach_(ze(),e)}foreach_(e,t){this.children.inorderTraversal((i,l)=>{l.foreach_(st(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Mn{constructor(e){this.writeTree_=e}static empty(){return new Mn(new Ke(null))}}function jl(r,e,t){if(Ne(e))return new Mn(new Ke(t));{const i=r.writeTree_.findRootMostValueAndPath(e);if(i!=null){const l=i.path;let c=i.value;const h=Qt(l,e);return c=c.updateChild(h,t),new Mn(r.writeTree_.set(l,c))}else{const l=new Ke(t),c=r.writeTree_.setTree(e,l);return new Mn(c)}}}function Dd(r,e,t){let i=r;return At(t,(l,c)=>{i=jl(i,st(e,l),c)}),i}function ly(r,e){if(Ne(e))return Mn.empty();{const t=r.writeTree_.setTree(e,new Ke(null));return new Mn(t)}}function Od(r,e){return ci(r,e)!=null}function ci(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(Qt(t.path,e)):null}function ay(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(it,(i,l)=>{e.push(new Ce(i,l))}):r.writeTree_.children.inorderTraversal((i,l)=>{l.value!=null&&e.push(new Ce(i,l.value))}),e}function ds(r,e){if(Ne(e))return r;{const t=ci(r,e);return t!=null?new Mn(new Ke(t)):new Mn(r.writeTree_.subtree(e))}}function jd(r){return r.writeTree_.isEmpty()}function _o(r,e){return o_(ze(),r.writeTree_,e)}function o_(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let i=null;return e.children.inorderTraversal((l,c)=>{l===".priority"?(Z(c.value!==null,"Priority writes must always be leaf nodes"),i=c.value):t=o_(st(r,l),c,t)}),!t.getChild(r).isEmpty()&&i!==null&&(t=t.updateChild(st(r,".priority"),i)),t}}/**
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
 */function xf(r,e){return c_(e,r)}function NS(r,e,t,i,l){Z(i>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:t,writeId:i,visible:l}),l&&(r.visibleWrites=jl(r.visibleWrites,e,t)),r.lastWriteId=i}function bS(r,e,t,i){Z(i>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:t,writeId:i,visible:!0}),r.visibleWrites=Dd(r.visibleWrites,e,t),r.lastWriteId=i}function RS(r,e){for(let t=0;t<r.allWrites.length;t++){const i=r.allWrites[t];if(i.writeId===e)return i}return null}function AS(r,e){const t=r.allWrites.findIndex(m=>m.writeId===e);Z(t>=0,"removeWrite called with nonexistent writeId.");const i=r.allWrites[t];r.allWrites.splice(t,1);let l=i.visible,c=!1,h=r.allWrites.length-1;for(;l&&h>=0;){const m=r.allWrites[h];m.visible&&(h>=t&&PS(m,i.path)?l=!1:mn(i.path,m.path)&&(c=!0)),h--}if(l){if(c)return DS(r),!0;if(i.snap)r.visibleWrites=ly(r.visibleWrites,i.path);else{const m=i.children;At(m,v=>{r.visibleWrites=ly(r.visibleWrites,st(i.path,v))})}return!0}else return!1}function PS(r,e){if(r.snap)return mn(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&mn(st(r.path,t),e))return!0;return!1}function DS(r){r.visibleWrites=l_(r.allWrites,OS,ze()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function OS(r){return r.visible}function l_(r,e,t){let i=Mn.empty();for(let l=0;l<r.length;++l){const c=r[l];if(e(c)){const h=c.path;let m;if(c.snap)mn(t,h)?(m=Qt(t,h),i=jl(i,m,c.snap)):mn(h,t)&&(m=Qt(h,t),i=jl(i,ze(),c.snap.getChild(m)));else if(c.children){if(mn(t,h))m=Qt(t,h),i=Dd(i,m,c.children);else if(mn(h,t))if(m=Qt(h,t),Ne(m))i=Dd(i,ze(),c.children);else{const v=mo(c.children,Ie(m));if(v){const w=v.getChild(Ye(m));i=jl(i,ze(),w)}}}else throw Eo("WriteRecord should have .snap or .children")}}return i}function a_(r,e,t,i,l){if(!i&&!l){const c=ci(r.visibleWrites,e);if(c!=null)return c;{const h=ds(r.visibleWrites,e);if(jd(h))return t;if(t==null&&!Od(h,ze()))return null;{const m=t||ve.EMPTY_NODE;return _o(h,m)}}}else{const c=ds(r.visibleWrites,e);if(!l&&jd(c))return t;if(!l&&t==null&&!Od(c,ze()))return null;{const h=function(w){return(w.visible||l)&&(!i||!~i.indexOf(w.writeId))&&(mn(w.path,e)||mn(e,w.path))},m=l_(r.allWrites,h,e),v=t||ve.EMPTY_NODE;return _o(m,v)}}}function jS(r,e,t){let i=ve.EMPTY_NODE;const l=ci(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(it,(c,h)=>{i=i.updateImmediateChild(c,h)}),i;if(t){const c=ds(r.visibleWrites,e);return t.forEachChild(it,(h,m)=>{const v=_o(ds(c,new Be(h)),m);i=i.updateImmediateChild(h,v)}),ay(c).forEach(h=>{i=i.updateImmediateChild(h.name,h.node)}),i}else{const c=ds(r.visibleWrites,e);return ay(c).forEach(h=>{i=i.updateImmediateChild(h.name,h.node)}),i}}function LS(r,e,t,i,l){Z(i||l,"Either existingEventSnap or existingServerSnap must exist");const c=st(e,t);if(Od(r.visibleWrites,c))return null;{const h=ds(r.visibleWrites,c);return jd(h)?l.getChild(t):_o(h,l.getChild(t))}}function MS(r,e,t,i){const l=st(e,t),c=ci(r.visibleWrites,l);if(c!=null)return c;if(i.isCompleteForChild(t)){const h=ds(r.visibleWrites,l);return _o(h,i.getNode().getImmediateChild(t))}else return null}function FS(r,e){return ci(r.visibleWrites,e)}function US(r,e,t,i,l,c,h){let m;const v=ds(r.visibleWrites,e),w=ci(v,ze());if(w!=null)m=w;else if(t!=null)m=_o(v,t);else return[];if(m=m.withIndex(h),!m.isEmpty()&&!m.isLeafNode()){const k=[],E=h.getCompare(),S=c?m.getReverseIteratorFrom(i,h):m.getIteratorFrom(i,h);let U=S.getNext();for(;U&&k.length<l;)E(U,i)!==0&&k.push(U),U=S.getNext();return k}else return[]}function zS(){return{visibleWrites:Mn.empty(),allWrites:[],lastWriteId:-1}}function Ju(r,e,t,i){return a_(r.writeTree,r.treePath,e,t,i)}function Ef(r,e){return jS(r.writeTree,r.treePath,e)}function uy(r,e,t,i){return LS(r.writeTree,r.treePath,e,t,i)}function Zu(r,e){return FS(r.writeTree,st(r.treePath,e))}function VS(r,e,t,i,l,c){return US(r.writeTree,r.treePath,e,t,i,l,c)}function Sf(r,e,t){return MS(r.writeTree,r.treePath,e,t)}function u_(r,e){return c_(st(r.treePath,e),r.writeTree)}function c_(r,e){return{treePath:r,writeTree:e}}/**
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
 */class BS{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;Z(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Z(i!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(i);if(l){const c=l.type;if(t==="child_added"&&c==="child_removed")this.changeMap.set(i,Kl(i,e.snapshotNode,l.snapshotNode));else if(t==="child_removed"&&c==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&c==="child_changed")this.changeMap.set(i,ql(i,l.oldSnap));else if(t==="child_changed"&&c==="child_added")this.changeMap.set(i,yo(i,e.snapshotNode));else if(t==="child_changed"&&c==="child_changed")this.changeMap.set(i,Kl(i,e.snapshotNode,l.oldSnap));else throw Eo("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class HS{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const h_=new HS;class kf{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ri(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sf(this.writes_,e,i)}}getChildAfterChild(e,t,i){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:si(this.viewCache_),c=VS(this.writes_,l,t,1,i,e);return c.length===0?null:c[0]}}/**
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
 */function WS(r){return{filter:r}}function $S(r,e){Z(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),Z(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function GS(r,e,t,i,l){const c=new BS;let h,m;if(t.type===On.OVERWRITE){const w=t;w.source.fromUser?h=Ld(r,e,w.path,w.snap,i,l,c):(Z(w.source.fromServer,"Unknown source."),m=w.source.tagged||e.serverCache.isFiltered()&&!Ne(w.path),h=ec(r,e,w.path,w.snap,i,l,m,c))}else if(t.type===On.MERGE){const w=t;w.source.fromUser?h=KS(r,e,w.path,w.children,i,l,c):(Z(w.source.fromServer,"Unknown source."),m=w.source.tagged||e.serverCache.isFiltered(),h=Md(r,e,w.path,w.children,i,l,m,c))}else if(t.type===On.ACK_USER_WRITE){const w=t;w.revert?h=XS(r,e,w.path,i,l,c):h=YS(r,e,w.path,w.affectedTree,i,l,c)}else if(t.type===On.LISTEN_COMPLETE)h=QS(r,e,t.path,i,c);else throw Eo("Unknown operation type: "+t.type);const v=c.getChanges();return qS(e,h,v),{viewCache:h,changes:v}}function qS(r,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const l=i.getNode().isLeafNode()||i.getNode().isEmpty(),c=Pd(r);(t.length>0||!r.eventCache.isFullyInitialized()||l&&!i.getNode().equals(c)||!i.getNode().getPriority().equals(c.getPriority()))&&t.push(r_(Pd(e)))}}function d_(r,e,t,i,l,c){const h=e.eventCache;if(Zu(i,t)!=null)return e;{let m,v;if(Ne(t))if(Z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const w=si(e),k=w instanceof ve?w:ve.EMPTY_NODE,E=Ef(i,k);m=r.filter.updateFullNode(e.eventCache.getNode(),E,c)}else{const w=Ju(i,si(e));m=r.filter.updateFullNode(e.eventCache.getNode(),w,c)}else{const w=Ie(t);if(w===".priority"){Z(ms(t)===1,"Can't have a priority with additional path components");const k=h.getNode();v=e.serverCache.getNode();const E=uy(i,t,k,v);E!=null?m=r.filter.updatePriority(k,E):m=h.getNode()}else{const k=Ye(t);let E;if(h.isCompleteForChild(w)){v=e.serverCache.getNode();const S=uy(i,t,h.getNode(),v);S!=null?E=h.getNode().getImmediateChild(w).updateChild(k,S):E=h.getNode().getImmediateChild(w)}else E=Sf(i,w,e.serverCache);E!=null?m=r.filter.updateChild(h.getNode(),w,E,k,l,c):m=h.getNode()}}return Ol(e,m,h.isFullyInitialized()||Ne(t),r.filter.filtersNodes())}}function ec(r,e,t,i,l,c,h,m){const v=e.serverCache;let w;const k=h?r.filter:r.filter.getIndexedFilter();if(Ne(t))w=k.updateFullNode(v.getNode(),i,null);else if(k.filtersNodes()&&!v.isFiltered()){const U=v.getNode().updateChild(t,i);w=k.updateFullNode(v.getNode(),U,null)}else{const U=Ie(t);if(!v.isCompleteForPath(t)&&ms(t)>1)return e;const B=Ye(t),W=v.getNode().getImmediateChild(U).updateChild(B,i);U===".priority"?w=k.updatePriority(v.getNode(),W):w=k.updateChild(v.getNode(),U,W,B,h_,null)}const E=i_(e,w,v.isFullyInitialized()||Ne(t),k.filtersNodes()),S=new kf(l,E,c);return d_(r,E,t,l,S,m)}function Ld(r,e,t,i,l,c,h){const m=e.eventCache;let v,w;const k=new kf(l,e,c);if(Ne(t))w=r.filter.updateFullNode(e.eventCache.getNode(),i,h),v=Ol(e,w,!0,r.filter.filtersNodes());else{const E=Ie(t);if(E===".priority")w=r.filter.updatePriority(e.eventCache.getNode(),i),v=Ol(e,w,m.isFullyInitialized(),m.isFiltered());else{const S=Ye(t),U=m.getNode().getImmediateChild(E);let B;if(Ne(S))B=i;else{const $=k.getCompleteChild(E);$!=null?df(S)===".priority"&&$.getChild(Qv(S)).isEmpty()?B=$:B=$.updateChild(S,i):B=ve.EMPTY_NODE}if(U.equals(B))v=e;else{const $=r.filter.updateChild(m.getNode(),E,B,S,k,h);v=Ol(e,$,m.isFullyInitialized(),r.filter.filtersNodes())}}}return v}function cy(r,e){return r.eventCache.isCompleteForChild(e)}function KS(r,e,t,i,l,c,h){let m=e;return i.foreach((v,w)=>{const k=st(t,v);cy(e,Ie(k))&&(m=Ld(r,m,k,w,l,c,h))}),i.foreach((v,w)=>{const k=st(t,v);cy(e,Ie(k))||(m=Ld(r,m,k,w,l,c,h))}),m}function hy(r,e,t){return t.foreach((i,l)=>{e=e.updateChild(i,l)}),e}function Md(r,e,t,i,l,c,h,m){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let v=e,w;Ne(t)?w=i:w=new Ke(null).setTree(t,i);const k=e.serverCache.getNode();return w.children.inorderTraversal((E,S)=>{if(k.hasChild(E)){const U=e.serverCache.getNode().getImmediateChild(E),B=hy(r,U,S);v=ec(r,v,new Be(E),B,l,c,h,m)}}),w.children.inorderTraversal((E,S)=>{const U=!e.serverCache.isCompleteForChild(E)&&S.value===null;if(!k.hasChild(E)&&!U){const B=e.serverCache.getNode().getImmediateChild(E),$=hy(r,B,S);v=ec(r,v,new Be(E),$,l,c,h,m)}}),v}function YS(r,e,t,i,l,c,h){if(Zu(l,t)!=null)return e;const m=e.serverCache.isFiltered(),v=e.serverCache;if(i.value!=null){if(Ne(t)&&v.isFullyInitialized()||v.isCompleteForPath(t))return ec(r,e,t,v.getNode().getChild(t),l,c,m,h);if(Ne(t)){let w=new Ke(null);return v.getNode().forEachChild(ao,(k,E)=>{w=w.set(new Be(k),E)}),Md(r,e,t,w,l,c,m,h)}else return e}else{let w=new Ke(null);return i.foreach((k,E)=>{const S=st(t,k);v.isCompleteForPath(S)&&(w=w.set(k,v.getNode().getChild(S)))}),Md(r,e,t,w,l,c,m,h)}}function QS(r,e,t,i,l){const c=e.serverCache,h=i_(e,c.getNode(),c.isFullyInitialized()||Ne(t),c.isFiltered());return d_(r,h,t,i,h_,l)}function XS(r,e,t,i,l,c){let h;if(Zu(i,t)!=null)return e;{const m=new kf(i,e,l),v=e.eventCache.getNode();let w;if(Ne(t)||Ie(t)===".priority"){let k;if(e.serverCache.isFullyInitialized())k=Ju(i,si(e));else{const E=e.serverCache.getNode();Z(E instanceof ve,"serverChildren would be complete if leaf node"),k=Ef(i,E)}k=k,w=r.filter.updateFullNode(v,k,c)}else{const k=Ie(t);let E=Sf(i,k,e.serverCache);E==null&&e.serverCache.isCompleteForChild(k)&&(E=v.getImmediateChild(k)),E!=null?w=r.filter.updateChild(v,k,E,Ye(t),m,c):e.eventCache.getNode().hasChild(k)?w=r.filter.updateChild(v,k,ve.EMPTY_NODE,Ye(t),m,c):w=v,w.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=Ju(i,si(e)),h.isLeafNode()&&(w=r.filter.updateFullNode(w,h,c)))}return h=e.serverCache.isFullyInitialized()||Zu(i,ze())!=null,Ol(e,w,h,r.filter.filtersNodes())}}/**
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
 */class JS{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,l=new gf(i.getIndex()),c=gS(i);this.processor_=WS(c);const h=t.serverCache,m=t.eventCache,v=l.updateFullNode(ve.EMPTY_NODE,h.getNode(),null),w=c.updateFullNode(ve.EMPTY_NODE,m.getNode(),null),k=new ri(v,h.isFullyInitialized(),l.filtersNodes()),E=new ri(w,m.isFullyInitialized(),c.filtersNodes());this.viewCache_=vc(E,k),this.eventGenerator_=new SS(this.query_)}get query(){return this.query_}}function ZS(r){return r.viewCache_.serverCache.getNode()}function ek(r,e){const t=si(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!Ne(e)&&!t.getImmediateChild(Ie(e)).isEmpty())?t.getChild(e):null}function dy(r){return r.eventRegistrations_.length===0}function tk(r,e){r.eventRegistrations_.push(e)}function fy(r,e,t){const i=[];if(t){Z(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(t,l);h&&i.push(h)})}if(e){let l=[];for(let c=0;c<r.eventRegistrations_.length;++c){const h=r.eventRegistrations_[c];if(!h.matches(e))l.push(h);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(c+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return i}function py(r,e,t,i){e.type===On.MERGE&&e.source.queryId!==null&&(Z(si(r.viewCache_),"We should always have a full cache before handling merges"),Z(Pd(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,c=GS(r.processor_,l,e,t,i);return $S(r.processor_,c.viewCache),Z(c.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=c.viewCache,f_(r,c.changes,c.viewCache.eventCache.getNode(),null)}function nk(r,e){const t=r.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(it,(c,h)=>{i.push(yo(c,h))}),t.isFullyInitialized()&&i.push(r_(t.getNode())),f_(r,i,t.getNode(),e)}function f_(r,e,t,i){const l=i?[i]:r.eventRegistrations_;return kS(r.eventGenerator_,e,t,l)}/**
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
 */let tc;class rk{constructor(){this.views=new Map}}function sk(r){Z(!tc,"__referenceConstructor has already been defined"),tc=r}function ik(){return Z(tc,"Reference.ts has not been loaded"),tc}function ok(r){return r.views.size===0}function Cf(r,e,t,i){const l=e.source.queryId;if(l!==null){const c=r.views.get(l);return Z(c!=null,"SyncTree gave us an op for an invalid query."),py(c,e,t,i)}else{let c=[];for(const h of r.views.values())c=c.concat(py(h,e,t,i));return c}}function lk(r,e,t,i,l){const c=e._queryIdentifier,h=r.views.get(c);if(!h){let m=Ju(t,l?i:null),v=!1;m?v=!0:i instanceof ve?(m=Ef(t,i),v=!1):(m=ve.EMPTY_NODE,v=!1);const w=vc(new ri(m,v,!1),new ri(i,l,!1));return new JS(e,w)}return h}function ak(r,e,t,i,l,c){const h=lk(r,e,i,l,c);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,h),tk(h,t),nk(h,t)}function uk(r,e,t,i){const l=e._queryIdentifier,c=[];let h=[];const m=gs(r);if(l==="default")for(const[v,w]of r.views.entries())h=h.concat(fy(w,t,i)),dy(w)&&(r.views.delete(v),w.query._queryParams.loadsAllData()||c.push(w.query));else{const v=r.views.get(l);v&&(h=h.concat(fy(v,t,i)),dy(v)&&(r.views.delete(l),v.query._queryParams.loadsAllData()||c.push(v.query)))}return m&&!gs(r)&&c.push(new(ik())(e._repo,e._path)),{removed:c,events:h}}function p_(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function uo(r,e){let t=null;for(const i of r.views.values())t=t||ek(i,e);return t}function m_(r,e){if(e._queryParams.loadsAllData())return _c(r);{const i=e._queryIdentifier;return r.views.get(i)}}function g_(r,e){return m_(r,e)!=null}function gs(r){return _c(r)!=null}function _c(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let nc;function ck(r){Z(!nc,"__referenceConstructor has already been defined"),nc=r}function hk(){return Z(nc,"Reference.ts has not been loaded"),nc}let dk=1;class my{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ke(null),this.pendingWriteTree_=zS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fk(r,e,t,i,l){return NS(r.pendingWriteTree_,e,t,i,l),l?Co(r,new ni(vf(),e,t)):[]}function pk(r,e,t,i){bS(r.pendingWriteTree_,e,t,i);const l=Ke.fromObject(t);return Co(r,new vo(vf(),e,l))}function Ys(r,e,t=!1){const i=RS(r.pendingWriteTree_,e);if(AS(r.pendingWriteTree_,e)){let c=new Ke(null);return i.snap!=null?c=c.set(ze(),!0):At(i.children,h=>{c=c.set(new Be(h),!0)}),Co(r,new Xu(i.path,c,t))}else return[]}function wc(r,e,t){return Co(r,new ni(_f(),e,t))}function mk(r,e,t){const i=Ke.fromObject(t);return Co(r,new vo(_f(),e,i))}function gk(r,e){return Co(r,new Ql(_f(),e))}function yk(r,e,t){const i=Tf(r,t);if(i){const l=If(i),c=l.path,h=l.queryId,m=Qt(c,e),v=new Ql(wf(h),m);return Nf(r,c,v)}else return[]}function Fd(r,e,t,i,l=!1){const c=e._path,h=r.syncPointTree_.get(c);let m=[];if(h&&(e._queryIdentifier==="default"||g_(h,e))){const v=uk(h,e,t,i);ok(h)&&(r.syncPointTree_=r.syncPointTree_.remove(c));const w=v.removed;if(m=v.events,!l){const k=w.findIndex(S=>S._queryParams.loadsAllData())!==-1,E=r.syncPointTree_.findOnPath(c,(S,U)=>gs(U));if(k&&!E){const S=r.syncPointTree_.subtree(c);if(!S.isEmpty()){const U=wk(S);for(let B=0;B<U.length;++B){const $=U[B],W=$.query,fe=w_(r,$);r.listenProvider_.startListening(Ll(W),rc(r,W),fe.hashFn,fe.onComplete)}}}!E&&w.length>0&&!i&&(k?r.listenProvider_.stopListening(Ll(e),null):w.forEach(S=>{const U=r.queryToTagMap.get(xc(S));r.listenProvider_.stopListening(Ll(S),U)}))}xk(r,w)}return m}function vk(r,e,t,i){const l=Tf(r,i);if(l!=null){const c=If(l),h=c.path,m=c.queryId,v=Qt(h,e),w=new ni(wf(m),v,t);return Nf(r,h,w)}else return[]}function _k(r,e,t,i){const l=Tf(r,i);if(l){const c=If(l),h=c.path,m=c.queryId,v=Qt(h,e),w=Ke.fromObject(t),k=new vo(wf(m),v,w);return Nf(r,h,k)}else return[]}function gy(r,e,t,i=!1){const l=e._path;let c=null,h=!1;r.syncPointTree_.foreachOnPath(l,(S,U)=>{const B=Qt(S,l);c=c||uo(U,B),h=h||gs(U)});let m=r.syncPointTree_.get(l);m?(h=h||gs(m),c=c||uo(m,ze())):(m=new rk,r.syncPointTree_=r.syncPointTree_.set(l,m));let v;c!=null?v=!0:(v=!1,c=ve.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((U,B)=>{const $=uo(B,ze());$&&(c=c.updateImmediateChild(U,$))}));const w=g_(m,e);if(!w&&!e._queryParams.loadsAllData()){const S=xc(e);Z(!r.queryToTagMap.has(S),"View does not exist, but we have a tag");const U=Ek();r.queryToTagMap.set(S,U),r.tagToQueryMap.set(U,S)}const k=xf(r.pendingWriteTree_,l);let E=ak(m,e,t,k,c,v);if(!w&&!h&&!i){const S=m_(m,e);E=E.concat(Sk(r,e,S))}return E}function y_(r,e,t){const l=r.pendingWriteTree_,c=r.syncPointTree_.findOnPath(e,(h,m)=>{const v=Qt(h,e),w=uo(m,v);if(w)return w});return a_(l,e,c,t,!0)}function Co(r,e){return v_(e,r.syncPointTree_,null,xf(r.pendingWriteTree_,ze()))}function v_(r,e,t,i){if(Ne(r.path))return __(r,e,t,i);{const l=e.get(ze());t==null&&l!=null&&(t=uo(l,ze()));let c=[];const h=Ie(r.path),m=r.operationForChild(h),v=e.children.get(h);if(v&&m){const w=t?t.getImmediateChild(h):null,k=u_(i,h);c=c.concat(v_(m,v,w,k))}return l&&(c=c.concat(Cf(l,r,i,t))),c}}function __(r,e,t,i){const l=e.get(ze());t==null&&l!=null&&(t=uo(l,ze()));let c=[];return e.children.inorderTraversal((h,m)=>{const v=t?t.getImmediateChild(h):null,w=u_(i,h),k=r.operationForChild(h);k&&(c=c.concat(__(k,m,v,w)))}),l&&(c=c.concat(Cf(l,r,i,t))),c}function w_(r,e){const t=e.query,i=rc(r,t);return{hashFn:()=>(ZS(e)||ve.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return i?yk(r,t._path,i):gk(r,t._path);{const c=pE(l,t);return Fd(r,t,null,c)}}}}function rc(r,e){const t=xc(e);return r.queryToTagMap.get(t)}function xc(r){return r._path.toString()+"$"+r._queryIdentifier}function Tf(r,e){return r.tagToQueryMap.get(e)}function If(r){const e=r.indexOf("$");return Z(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Be(r.substr(0,e))}}function Nf(r,e,t){const i=r.syncPointTree_.get(e);Z(i,"Missing sync point for query tag that we're tracking");const l=xf(r.pendingWriteTree_,e);return Cf(i,t,l,null)}function wk(r){return r.fold((e,t,i)=>{if(t&&gs(t))return[_c(t)];{let l=[];return t&&(l=p_(t)),At(i,(c,h)=>{l=l.concat(h)}),l}})}function Ll(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(hk())(r._repo,r._path):r}function xk(r,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const l=xc(i),c=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(c)}}}function Ek(){return dk++}function Sk(r,e,t){const i=e._path,l=rc(r,e),c=w_(r,t),h=r.listenProvider_.startListening(Ll(e),l,c.hashFn,c.onComplete),m=r.syncPointTree_.subtree(i);if(l)Z(!gs(m.value),"If we're adding a query, it shouldn't be shadowed");else{const v=m.fold((w,k,E)=>{if(!Ne(w)&&k&&gs(k))return[_c(k).query];{let S=[];return k&&(S=S.concat(p_(k).map(U=>U.query))),At(E,(U,B)=>{S=S.concat(B)}),S}});for(let w=0;w<v.length;++w){const k=v[w];r.listenProvider_.stopListening(Ll(k),rc(r,k))}}return h}/**
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
 */class bf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new bf(t)}node(){return this.node_}}class Rf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=st(this.path_,e);return new Rf(this.syncTree_,t)}node(){return y_(this.syncTree_,this.path_)}}const kk=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},yy=function(r,e,t){if(!r||typeof r!="object")return r;if(Z(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return Ck(r[".sv"],e,t);if(typeof r[".sv"]=="object")return Tk(r[".sv"],e);Z(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},Ck=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:Z(!1,"Unexpected server value: "+r)}},Tk=function(r,e,t){r.hasOwnProperty("increment")||Z(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const i=r.increment;typeof i!="number"&&Z(!1,"Unexpected increment value: "+i);const l=e.node();if(Z(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return i;const h=l.getValue();return typeof h!="number"?i:h+i},x_=function(r,e,t,i){return Af(e,new Rf(t,r),i)},Ik=function(r,e,t){return Af(r,new bf(e),t)};function Af(r,e,t){const i=r.getPriority().val(),l=yy(i,e.getImmediateChild(".priority"),t);let c;if(r.isLeafNode()){const h=r,m=yy(h.getValue(),e,t);return m!==h.getValue()||l!==h.getPriority().val()?new xt(m,Rt(l)):r}else{const h=r;return c=h,l!==h.getPriority().val()&&(c=c.updatePriority(new xt(l))),h.forEachChild(it,(m,v)=>{const w=Af(v,e.getImmediateChild(m),t);w!==v&&(c=c.updateImmediateChild(m,w))}),c}}/**
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
 */class Pf{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Df(r,e){let t=e instanceof Be?e:new Be(e),i=r,l=Ie(t);for(;l!==null;){const c=mo(i.node.children,l)||{children:{},childCount:0};i=new Pf(l,i,c),t=Ye(t),l=Ie(t)}return i}function To(r){return r.node.value}function E_(r,e){r.node.value=e,Ud(r)}function S_(r){return r.node.childCount>0}function Nk(r){return To(r)===void 0&&!S_(r)}function Ec(r,e){At(r.node.children,(t,i)=>{e(new Pf(t,r,i))})}function k_(r,e,t,i){t&&e(r),Ec(r,l=>{k_(l,e,!0)})}function bk(r,e,t){let i=r.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function oa(r){return new Be(r.parent===null?r.name:oa(r.parent)+"/"+r.name)}function Ud(r){r.parent!==null&&Rk(r.parent,r.name,r)}function Rk(r,e,t){const i=Nk(t),l=tr(r.node.children,e);i&&l?(delete r.node.children[e],r.node.childCount--,Ud(r)):!i&&!l&&(r.node.children[e]=t.node,r.node.childCount++,Ud(r))}/**
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
 */const Ak=/[\[\].#$\/\u0000-\u001F\u007F]/,Pk=/[\[\].#$\u0000-\u001F\u007F]/,pd=10*1024*1024,Of=function(r){return typeof r=="string"&&r.length!==0&&!Ak.test(r)},C_=function(r){return typeof r=="string"&&r.length!==0&&!Pk.test(r)},Dk=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),C_(r)},Ok=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!lf(r)||r&&typeof r=="object"&&tr(r,".sv")},jf=function(r,e,t){const i=t instanceof Be?new KE(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+$s(i));if(typeof e=="function")throw new Error(r+"contains a function "+$s(i)+" with contents = "+e.toString());if(lf(e))throw new Error(r+"contains "+e.toString()+" "+$s(i));if(typeof e=="string"&&e.length>pd/3&&pc(e)>pd)throw new Error(r+"contains a string greater than "+pd+" utf8 bytes "+$s(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,c=!1;if(At(e,(h,m)=>{if(h===".value")l=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!Of(h)))throw new Error(r+" contains an invalid key ("+h+") "+$s(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);YE(i,h),jf(r,m,i),QE(i)}),l&&c)throw new Error(r+' contains ".value" child '+$s(i)+" in addition to actual children.")}},jk=function(r,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const c=Gl(i);for(let h=0;h<c.length;h++)if(!(c[h]===".priority"&&h===c.length-1)){if(!Of(c[h]))throw new Error(r+"contains an invalid key ("+c[h]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(qE);let l=null;for(t=0;t<e.length;t++){if(i=e[t],l!==null&&mn(l,i))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+i.toString());l=i}},Lk=function(r,e,t,i){const l=rf(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const c=[];At(e,(h,m)=>{const v=new Be(h);if(jf(l,m,st(t,v)),df(v)===".priority"&&!Ok(m))throw new Error(l+"contains an invalid value for '"+v.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(v)}),jk(l,c)},T_=function(r,e,t,i){if(!C_(t))throw new Error(rf(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Mk=function(r,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),T_(r,e,t)},Fk=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Of(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Dk(t))throw new Error(rf(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Uk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Lf(r,e){let t=null;for(let i=0;i<e.length;i++){const l=e[i],c=l.getPath();t!==null&&!ff(c,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:c}),t.events.push(l)}t&&r.eventLists_.push(t)}function I_(r,e,t){Lf(r,t),N_(r,i=>ff(i,e))}function br(r,e,t){Lf(r,t),N_(r,i=>mn(i,e)||mn(e,i))}function N_(r,e){r.recursionDepth_++;let t=!0;for(let i=0;i<r.eventLists_.length;i++){const l=r.eventLists_[i];if(l){const c=l.path;e(c)?(zk(r.eventLists_[i]),r.eventLists_[i]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function zk(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const i=t.getEventRunner();Pl&&bt("event: "+t.toString()),ko(i)}}}/**
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
 */const Vk="repo_interrupt",Bk=25;class Hk{constructor(e,t,i,l){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Uk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qu(),this.transactionQueueTree_=new Pf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Wk(r,e,t){if(r.stats_=cf(r.repoInfo_),r.forceRestClient_||vE())r.server_=new Yu(r.repoInfo_,(i,l,c,h)=>{vy(r,i,l,c,h)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>_y(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{St(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}r.persistentConnection_=new Tr(r.repoInfo_,e,(i,l,c,h)=>{vy(r,i,l,c,h)},i=>{_y(r,i)},i=>{Gk(r,i)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(i=>{r.server_.refreshAuthToken(i)}),r.appCheckProvider_.addTokenChangeListener(i=>{r.server_.refreshAppCheckToken(i.token)}),r.statsReporter_=SE(r.repoInfo_,()=>new ES(r.stats_,r.server_)),r.infoData_=new yS,r.infoSyncTree_=new my({startListening:(i,l,c,h)=>{let m=[];const v=r.infoData_.getNode(i._path);return v.isEmpty()||(m=wc(r.infoSyncTree_,i._path,v),setTimeout(()=>{h("ok")},0)),m},stopListening:()=>{}}),Ff(r,"connected",!1),r.serverSyncTree_=new my({startListening:(i,l,c,h)=>(r.server_.listen(i,c,l,(m,v)=>{const w=h(m,v);br(r.eventQueue_,i._path,w)}),[]),stopListening:(i,l)=>{r.server_.unlisten(i,l)}})}function $k(r){const t=r.infoData_.getNode(new Be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Mf(r){return kk({timestamp:$k(r)})}function vy(r,e,t,i,l){r.dataUpdateCount++;const c=new Be(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let h=[];if(l)if(i){const v=Wu(t,w=>Rt(w));h=_k(r.serverSyncTree_,c,v,l)}else{const v=Rt(t);h=vk(r.serverSyncTree_,c,v,l)}else if(i){const v=Wu(t,w=>Rt(w));h=mk(r.serverSyncTree_,c,v)}else{const v=Rt(t);h=wc(r.serverSyncTree_,c,v)}let m=c;h.length>0&&(m=Xl(r,c)),br(r.eventQueue_,m,h)}function _y(r,e){Ff(r,"connected",e),e===!1&&Kk(r)}function Gk(r,e){At(e,(t,i)=>{Ff(r,t,i)})}function Ff(r,e,t){const i=new Be("/.info/"+e),l=Rt(t);r.infoData_.updateSnapshot(i,l);const c=wc(r.infoSyncTree_,i,l);br(r.eventQueue_,i,c)}function b_(r){return r.nextWriteId_++}function qk(r,e,t,i){Uf(r,"update",{path:e.toString(),value:t});let l=!0;const c=Mf(r),h={};if(At(t,(m,v)=>{l=!1,h[m]=x_(st(e,m),Rt(v),r.serverSyncTree_,c)}),l)bt("update() called with empty data.  Don't do anything."),wy(r,i,"ok",void 0);else{const m=b_(r),v=pk(r.serverSyncTree_,e,h,m);Lf(r.eventQueue_,v),r.server_.merge(e.toString(),t,(w,k)=>{const E=w==="ok";E||Jt("update at "+e+" failed: "+w);const S=Ys(r.serverSyncTree_,m,!E),U=S.length>0?Xl(r,e):e;br(r.eventQueue_,U,S),wy(r,i,w,k)}),At(t,w=>{const k=O_(r,st(e,w));Xl(r,k)}),br(r.eventQueue_,e,[])}}function Kk(r){Uf(r,"onDisconnectEvents");const e=Mf(r),t=Qu();Ad(r.onDisconnect_,ze(),(l,c)=>{const h=x_(l,c,r.serverSyncTree_,e);s_(t,l,h)});let i=[];Ad(t,ze(),(l,c)=>{i=i.concat(wc(r.serverSyncTree_,l,c));const h=O_(r,l);Xl(r,h)}),r.onDisconnect_=Qu(),br(r.eventQueue_,ze(),i)}function Yk(r,e,t){let i;Ie(e._path)===".info"?i=gy(r.infoSyncTree_,e,t):i=gy(r.serverSyncTree_,e,t),I_(r.eventQueue_,e._path,i)}function Qk(r,e,t){let i;Ie(e._path)===".info"?i=Fd(r.infoSyncTree_,e,t):i=Fd(r.serverSyncTree_,e,t),I_(r.eventQueue_,e._path,i)}function Xk(r){r.persistentConnection_&&r.persistentConnection_.interrupt(Vk)}function Uf(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),bt(t,...e)}function wy(r,e,t,i){e&&ko(()=>{if(t==="ok")e(null);else{const l=(t||"error").toUpperCase();let c=l;i&&(c+=": "+i);const h=new Error(c);h.code=l,e(h)}})}function R_(r,e,t){return y_(r.serverSyncTree_,e,t)||ve.EMPTY_NODE}function zf(r,e=r.transactionQueueTree_){if(e||Sc(r,e),To(e)){const t=P_(r,e);Z(t.length>0,"Sending zero length transaction queue"),t.every(l=>l.status===0)&&Jk(r,oa(e),t)}else S_(e)&&Ec(e,t=>{zf(r,t)})}function Jk(r,e,t){const i=t.map(w=>w.currentWriteId),l=R_(r,e,i);let c=l;const h=l.hash();for(let w=0;w<t.length;w++){const k=t[w];Z(k.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),k.status=1,k.retryCount++;const E=Qt(e,k.path);c=c.updateChild(E,k.currentOutputSnapshotRaw)}const m=c.val(!0),v=e;r.server_.put(v.toString(),m,w=>{Uf(r,"transaction put response",{path:v.toString(),status:w});let k=[];if(w==="ok"){const E=[];for(let S=0;S<t.length;S++)t[S].status=2,k=k.concat(Ys(r.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&E.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();Sc(r,Df(r.transactionQueueTree_,e)),zf(r,r.transactionQueueTree_),br(r.eventQueue_,e,k);for(let S=0;S<E.length;S++)ko(E[S])}else{if(w==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Jt("transaction at "+v.toString()+" failed: "+w);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=w}Xl(r,e)}},h)}function Xl(r,e){const t=A_(r,e),i=oa(t),l=P_(r,t);return Zk(r,l,i),i}function Zk(r,e,t){if(e.length===0)return;const i=[];let l=[];const h=e.filter(m=>m.status===0).map(m=>m.currentWriteId);for(let m=0;m<e.length;m++){const v=e[m],w=Qt(t,v.path);let k=!1,E;if(Z(w!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),v.status===4)k=!0,E=v.abortReason,l=l.concat(Ys(r.serverSyncTree_,v.currentWriteId,!0));else if(v.status===0)if(v.retryCount>=Bk)k=!0,E="maxretry",l=l.concat(Ys(r.serverSyncTree_,v.currentWriteId,!0));else{const S=R_(r,v.path,h);v.currentInputSnapshot=S;const U=e[m].update(S.val());if(U!==void 0){jf("transaction failed: Data returned ",U,v.path);let B=Rt(U);typeof U=="object"&&U!=null&&tr(U,".priority")||(B=B.updatePriority(S.getPriority()));const W=v.currentWriteId,fe=Mf(r),G=Ik(B,S,fe);v.currentOutputSnapshotRaw=B,v.currentOutputSnapshotResolved=G,v.currentWriteId=b_(r),h.splice(h.indexOf(W),1),l=l.concat(fk(r.serverSyncTree_,v.path,G,v.currentWriteId,v.applyLocally)),l=l.concat(Ys(r.serverSyncTree_,W,!0))}else k=!0,E="nodata",l=l.concat(Ys(r.serverSyncTree_,v.currentWriteId,!0))}br(r.eventQueue_,t,l),l=[],k&&(e[m].status=2,function(S){setTimeout(S,Math.floor(0))}(e[m].unwatcher),e[m].onComplete&&(E==="nodata"?i.push(()=>e[m].onComplete(null,!1,e[m].currentInputSnapshot)):i.push(()=>e[m].onComplete(new Error(E),!1,null))))}Sc(r,r.transactionQueueTree_);for(let m=0;m<i.length;m++)ko(i[m]);zf(r,r.transactionQueueTree_)}function A_(r,e){let t,i=r.transactionQueueTree_;for(t=Ie(e);t!==null&&To(i)===void 0;)i=Df(i,t),e=Ye(e),t=Ie(e);return i}function P_(r,e){const t=[];return D_(r,e,t),t.sort((i,l)=>i.order-l.order),t}function D_(r,e,t){const i=To(e);if(i)for(let l=0;l<i.length;l++)t.push(i[l]);Ec(e,l=>{D_(r,l,t)})}function Sc(r,e){const t=To(e);if(t){let i=0;for(let l=0;l<t.length;l++)t[l].status!==2&&(t[i]=t[l],i++);t.length=i,E_(e,t.length>0?t:void 0)}Ec(e,i=>{Sc(r,i)})}function O_(r,e){const t=oa(A_(r,e)),i=Df(r.transactionQueueTree_,e);return bk(i,l=>{md(r,l)}),md(r,i),k_(i,l=>{md(r,l)}),t}function md(r,e){const t=To(e);if(t){const i=[];let l=[],c=-1;for(let h=0;h<t.length;h++)t[h].status===3||(t[h].status===1?(Z(c===h-1,"All SENT items should be at beginning of queue."),c=h,t[h].status=3,t[h].abortReason="set"):(Z(t[h].status===0,"Unexpected transaction status in abort"),t[h].unwatcher(),l=l.concat(Ys(r.serverSyncTree_,t[h].currentWriteId,!0)),t[h].onComplete&&i.push(t[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?E_(e,void 0):t.length=c+1,br(r.eventQueue_,oa(e),l);for(let h=0;h<i.length;h++)ko(i[h])}}/**
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
 */function e2(r){let e="";const t=r.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let l=t[i];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function t2(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Jt(`Invalid query segment '${t}' in query '${r}'`)}return e}const xy=function(r,e){const t=n2(r),i=t.namespace;t.domain==="firebase.com"&&Nr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Nr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||uE();const l=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Vv(t.host,t.secure,i,l,e,"",i!==t.subdomain),path:new Be(t.pathString)}},n2=function(r){let e="",t="",i="",l="",c="",h=!0,m="https",v=443;if(typeof r=="string"){let w=r.indexOf("//");w>=0&&(m=r.substring(0,w-1),r=r.substring(w+2));let k=r.indexOf("/");k===-1&&(k=r.length);let E=r.indexOf("?");E===-1&&(E=r.length),e=r.substring(0,Math.min(k,E)),k<E&&(l=e2(r.substring(k,E)));const S=t2(r.substring(Math.min(r.length,E)));w=e.indexOf(":"),w>=0?(h=m==="https"||m==="wss",v=parseInt(e.substring(w+1),10)):w=e.length;const U=e.slice(0,w);if(U.toLowerCase()==="localhost")t="localhost";else if(U.split(".").length<=2)t=U;else{const B=e.indexOf(".");i=e.substring(0,B).toLowerCase(),t=e.substring(B+1),c=i}"ns"in S&&(c=S.ns)}return{host:e,port:v,domain:t,subdomain:i,secure:h,scheme:m,pathString:l,namespace:c}};/**
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
 */class r2{constructor(e,t,i,l){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+St(this.snapshot.exportVal())}}class s2{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class i2{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Vf{constructor(e,t,i,l){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=l}get key(){return Ne(this._path)?null:df(this._path)}get ref(){return new ys(this._repo,this._path)}get _queryIdentifier(){const e=iy(this._queryParams),t=af(e);return t==="{}"?"default":t}get _queryObject(){return iy(this._queryParams)}isEqual(e){if(e=nr(e),!(e instanceof Vf))return!1;const t=this._repo===e._repo,i=ff(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return t&&i&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+GE(this._path)}}class ys extends Vf{constructor(e,t){super(e,t,new yf,!1)}get parent(){const e=Qv(this._path);return e===null?null:new ys(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class sc{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Be(e),i=zd(this.ref,e);return new sc(this._node.getChild(t),i,it)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,l)=>e(new sc(l,zd(this.ref,i),it)))}hasChild(e){const t=new Be(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bu(r,e){return r=nr(r),r._checkNotDeleted("ref"),e!==void 0?zd(r._root,e):r._root}function zd(r,e){return r=nr(r),Ie(r._path)===null?Mk("child","path",e):T_("child","path",e),new ys(r._repo,st(r._path,e))}function gd(r,e){Lk("update",e,r._path);const t=new fc;return qk(r._repo,r._path,e,t.wrapCallback(()=>{})),t.promise}class Bf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new r2("value",this,new sc(e.snapshotNode,new ys(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new s2(this,e,t):null}matches(e){return e instanceof Bf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function o2(r,e,t,i,l){const c=new i2(t,void 0),h=new Bf(c);return Yk(r._repo,r,h),()=>Qk(r._repo,r,h)}function l2(r,e,t,i){return o2(r,"value",e)}sk(ys);ck(ys);/**
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
 */const a2="FIREBASE_DATABASE_EMULATOR_HOST",Vd={};let u2=!1;function c2(r,e,t,i){const l=e.lastIndexOf(":"),c=e.substring(0,l),h=li(c);r.repoInfo_=new Vv(e,h,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(r.authTokenProvider_=i)}function h2(r,e,t,i,l){let c=i||r.options.databaseURL;c===void 0&&(r.options.projectId||Nr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),bt("Using default host for project ",r.options.projectId),c=`${r.options.projectId}-default-rtdb.firebaseio.com`);let h=xy(c,l),m=h.repoInfo,v;typeof process<"u"&&Vg&&(v=Vg[a2]),v?(c=`http://${v}?ns=${m.namespace}`,h=xy(c,l),m=h.repoInfo):h.repoInfo.secure;const w=new wE(r.name,r.options,e);Fk("Invalid Firebase Database URL",h),Ne(h.path)||Nr("Database URL must point to the root of a Firebase Database (not including a child path).");const k=f2(m,r,w,new _E(r,t));return new p2(k,r)}function d2(r,e){const t=Vd[e];(!t||t[r.key]!==r)&&Nr(`Database ${e}(${r.repoInfo_}) has already been deleted.`),Xk(r),delete t[r.key]}function f2(r,e,t,i){let l=Vd[e.name];l||(l={},Vd[e.name]=l);let c=l[r.toURLString()];return c&&Nr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new Hk(r,u2,t,i),l[r.toURLString()]=c,c}class p2{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Wk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ys(this._repo,ze())),this._rootInternal}_delete(){return this._rootInternal!==null&&(d2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nr("Cannot call "+e+" on a deleted database.")}}function m2(r=of(),e){const t=gc(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=gv("database");i&&g2(t,...i)}return t}function g2(r,e,t,i={}){r=nr(r),r._checkNotDeleted("useEmulator");const l=`${e}:${t}`,c=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&fs(i,c.repoInfo_.emulatorOptions))return;Nr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)i.mockUserToken&&Nr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new Ou(Ou.OWNER);else if(i.mockUserToken){const m=typeof i.mockUserToken=="string"?i.mockUserToken:_v(i.mockUserToken,r.app.options.projectId);h=new Ou(m)}li(e)&&(ef(e),tf("Database",!0)),c2(c,l,i,h)}/**
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
 */function y2(r){rE(ai),ei(new ps("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return h2(i,l,c,t)},"PUBLIC").setMultipleInstances(!0)),Jn(Bg,Hg,r),Jn(Bg,Hg,"esm2017")}Tr.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Tr.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};y2();var v2="firebase",_2="11.10.0";/**
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
 */Jn(v2,_2,"app");function Hf(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,i=Object.getOwnPropertySymbols(r);l<i.length;l++)e.indexOf(i[l])<0&&Object.prototype.propertyIsEnumerable.call(r,i[l])&&(t[i[l]]=r[i[l]]);return t}function j_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const w2=j_,L_=new na("auth","Firebase",j_());/**
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
 */const ic=new mc("@firebase/auth");function x2(r,...e){ic.logLevel<=Ue.WARN&&ic.warn(`Auth (${ai}): ${r}`,...e)}function ju(r,...e){ic.logLevel<=Ue.ERROR&&ic.error(`Auth (${ai}): ${r}`,...e)}/**
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
 */function Rr(r,...e){throw Wf(r,...e)}function Zn(r,...e){return Wf(r,...e)}function M_(r,e,t){const i=Object.assign(Object.assign({},w2()),{[e]:t});return new na("auth","Firebase",i).create(e,{appName:r.name})}function Xs(r){return M_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wf(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return L_.create(r,...e)}function we(r,e,...t){if(!r)throw Wf(e,...t)}function kr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ju(e),new Error(e)}function Ar(r,e){r||kr(e)}/**
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
 */function Bd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function E2(){return Ey()==="http:"||Ey()==="https:"}function Ey(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function S2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E2()||O1()||"connection"in navigator)?navigator.onLine:!0}function k2(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class la{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ar(t>e,"Short delay should be less than long delay!"),this.isMobile=nf()||wv()}get(){return S2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $f(r,e){Ar(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class F_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const C2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const T2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],I2=new la(3e4,6e4);function Gf(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Io(r,e,t,i,l={}){return U_(r,l,async()=>{let c={},h={};i&&(e==="GET"?h=i:c={body:JSON.stringify(i)});const m=So(Object.assign({key:r.config.apiKey},h)).slice(1),v=await r._getAdditionalHeaders();v["Content-Type"]="application/json",r.languageCode&&(v["X-Firebase-Locale"]=r.languageCode);const w=Object.assign({method:e,headers:v},c);return D1()||(w.referrerPolicy="no-referrer"),r.emulatorConfig&&li(r.emulatorConfig.host)&&(w.credentials="include"),F_.fetch()(await z_(r,r.config.apiHost,t,m),w)})}async function U_(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},C2),e);try{const l=new b2(r),c=await Promise.race([t(),l.promise]);l.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Ru(r,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const m=c.ok?h.errorMessage:h.error.message,[v,w]=m.split(" : ");if(v==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(r,"credential-already-in-use",h);if(v==="EMAIL_EXISTS")throw Ru(r,"email-already-in-use",h);if(v==="USER_DISABLED")throw Ru(r,"user-disabled",h);const k=i[v]||v.toLowerCase().replace(/[_\s]+/g,"-");if(w)throw M_(r,k,w);Rr(r,k)}}catch(l){if(l instanceof Pr)throw l;Rr(r,"network-request-failed",{message:String(l)})}}async function N2(r,e,t,i,l={}){const c=await Io(r,e,t,i,l);return"mfaPendingCredential"in c&&Rr(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function z_(r,e,t,i){const l=`${e}${t}?${i}`,c=r,h=c.config.emulator?$f(r.config,l):`${r.config.apiScheme}://${l}`;return T2.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}class b2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Zn(this.auth,"network-request-failed")),I2.get())})}}function Ru(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const l=Zn(r,e,i);return l.customData._tokenResponse=t,l}/**
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
 */async function R2(r,e){return Io(r,"POST","/v1/accounts:delete",e)}async function oc(r,e){return Io(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ml(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function A2(r,e=!1){const t=nr(r),i=await t.getIdToken(e),l=qf(i);we(l&&l.exp&&l.auth_time&&l.iat,t.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,h=c?.sign_in_provider;return{claims:l,token:i,authTime:Ml(yd(l.auth_time)),issuedAtTime:Ml(yd(l.iat)),expirationTime:Ml(yd(l.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function yd(r){return Number(r)*1e3}function qf(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return ju("JWT malformed, contained fewer than 3 sections"),null;try{const l=Hu(t);return l?JSON.parse(l):(ju("Failed to decode base64 JWT payload"),null)}catch(l){return ju("Caught error parsing JWT payload as JSON",l?.toString()),null}}function Sy(r){const e=qf(r);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jl(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Pr&&P2(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function P2({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class D2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const l=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ml(this.lastLoginAt),this.creationTime=Ml(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lc(r){var e;const t=r.auth,i=await r.getIdToken(),l=await Jl(r,oc(t,{idToken:i}));we(l?.users.length,t,"internal-error");const c=l.users[0];r._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?V_(c.providerUserInfo):[],m=j2(r.providerData,h),v=r.isAnonymous,w=!(r.email&&c.passwordHash)&&!m?.length,k=v?w:!1,E={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:m,metadata:new Hd(c.createdAt,c.lastLoginAt),isAnonymous:k};Object.assign(r,E)}async function O2(r){const e=nr(r);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j2(r,e){return[...r.filter(i=>!e.some(l=>l.providerId===i.providerId)),...e]}function V_(r){return r.map(e=>{var{providerId:t}=e,i=Hf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function L2(r,e){const t=await U_(r,{},async()=>{const i=So({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,h=await z_(r,l,"/v1/token",`key=${c}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const v={method:"POST",headers:m,body:i};return r.emulatorConfig&&li(r.emulatorConfig.host)&&(v.credentials="include"),F_.fetch()(h,v)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function M2(r,e){return Io(r,"POST","/v2/accounts:revokeToken",Gf(r,e))}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=Sy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:l,expiresIn:c}=await L2(e,t);this.updateTokensAndExpiration(i,l,Number(c))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:l,expirationTime:c}=t,h=new co;return i&&(we(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),l&&(we(typeof l=="string","internal-error",{appName:e}),h.accessToken=l),c&&(we(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
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
 */function is(r,e){we(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:t,auth:i,stsTokenManager:l}=e,c=Hf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new D2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Hd(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const t=await Jl(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return A2(this,e)}reload(){return O2(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await lc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(Xs(this.auth));const e=await this.getIdToken();return await Jl(this,R2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,l,c,h,m,v,w,k;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(l=t.email)!==null&&l!==void 0?l:void 0,U=(c=t.phoneNumber)!==null&&c!==void 0?c:void 0,B=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(m=t.tenantId)!==null&&m!==void 0?m:void 0,W=(v=t._redirectEventId)!==null&&v!==void 0?v:void 0,fe=(w=t.createdAt)!==null&&w!==void 0?w:void 0,G=(k=t.lastLoginAt)!==null&&k!==void 0?k:void 0,{uid:he,emailVerified:de,isAnonymous:J,providerData:ne,stsTokenManager:P}=t;we(he&&P,e,"internal-error");const C=co.fromJSON(this.name,P);we(typeof he=="string",e,"internal-error"),is(E,e.name),is(S,e.name),we(typeof de=="boolean",e,"internal-error"),we(typeof J=="boolean",e,"internal-error"),is(U,e.name),is(B,e.name),is($,e.name),is(W,e.name),is(fe,e.name),is(G,e.name);const N=new jn({uid:he,auth:e,email:S,emailVerified:de,displayName:E,isAnonymous:J,photoURL:B,phoneNumber:U,tenantId:$,stsTokenManager:C,createdAt:fe,lastLoginAt:G});return ne&&Array.isArray(ne)&&(N.providerData=ne.map(A=>Object.assign({},A))),W&&(N._redirectEventId=W),N}static async _fromIdTokenResponse(e,t,i=!1){const l=new co;l.updateFromServerResponse(t);const c=new jn({uid:t.localId,auth:e,stsTokenManager:l,isAnonymous:i});return await lc(c),c}static async _fromGetAccountInfoResponse(e,t,i){const l=t.users[0];we(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?V_(l.providerUserInfo):[],h=!(l.email&&l.passwordHash)&&!c?.length,m=new co;m.updateFromIdToken(i);const v=new jn({uid:l.localId,auth:e,stsTokenManager:m,isAnonymous:h}),w={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Hd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(v,w),v}}/**
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
 */const ky=new Map;function Cr(r){Ar(r instanceof Function,"Expected a class definition");let e=ky.get(r);return e?(Ar(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ky.set(r,e),e)}/**
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
 */class B_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}B_.type="NONE";const Cy=B_;/**
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
 */function Lu(r,e,t){return`firebase:${r}:${e}:${t}`}class ho{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:l,name:c}=this.auth;this.fullUserKey=Lu(this.userKey,l.apiKey,c),this.fullPersistenceKey=Lu("persistence",l.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await oc(this.auth,{idToken:e}).catch(()=>{});return t?jn._fromGetAccountInfoResponse(this.auth,t,e):null}return jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ho(Cr(Cy),e,i);const l=(await Promise.all(t.map(async w=>{if(await w._isAvailable())return w}))).filter(w=>w);let c=l[0]||Cr(Cy);const h=Lu(i,e.config.apiKey,e.name);let m=null;for(const w of t)try{const k=await w._get(h);if(k){let E;if(typeof k=="string"){const S=await oc(e,{idToken:k}).catch(()=>{});if(!S)break;E=await jn._fromGetAccountInfoResponse(e,S,k)}else E=jn._fromJSON(e,k);w!==c&&(m=E),c=w;break}}catch{}const v=l.filter(w=>w._shouldAllowMigration);return!c._shouldAllowMigration||!v.length?new ho(c,e,i):(c=v[0],m&&await c._set(h,m.toJSON()),await Promise.all(t.map(async w=>{if(w!==c)try{await w._remove(h)}catch{}})),new ho(c,e,i))}}/**
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
 */function Ty(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K_(e))return"Blackberry";if(Y_(e))return"Webos";if(W_(e))return"Safari";if((e.includes("chrome/")||$_(e))&&!e.includes("edge/"))return"Chrome";if(q_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function H_(r=zt()){return/firefox\//i.test(r)}function W_(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $_(r=zt()){return/crios\//i.test(r)}function G_(r=zt()){return/iemobile/i.test(r)}function q_(r=zt()){return/android/i.test(r)}function K_(r=zt()){return/blackberry/i.test(r)}function Y_(r=zt()){return/webos/i.test(r)}function Kf(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function F2(r=zt()){var e;return Kf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U2(){return j1()&&document.documentMode===10}function Q_(r=zt()){return Kf(r)||q_(r)||Y_(r)||K_(r)||/windows phone/i.test(r)||G_(r)}/**
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
 */function X_(r,e=[]){let t;switch(r){case"Browser":t=Ty(zt());break;case"Worker":t=`${Ty(zt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ai}/${i}`}/**
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
 */class z2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=c=>new Promise((h,m)=>{try{const v=e(c);h(v)}catch(v){m(v)}});i.onAbort=t,this.queue.push(i);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const l of t)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function V2(r,e={}){return Io(r,"GET","/v2/passwordPolicy",Gf(r,e))}/**
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
 */const B2=6;class H2{constructor(e){var t,i,l,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:B2,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,l,c,h,m;const v={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,v),this.validatePasswordCharacterOptions(e,v),v.isValid&&(v.isValid=(t=v.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),v.isValid&&(v.isValid=(i=v.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),v.isValid&&(v.isValid=(l=v.containsLowercaseLetter)!==null&&l!==void 0?l:!0),v.isValid&&(v.isValid=(c=v.containsUppercaseLetter)!==null&&c!==void 0?c:!0),v.isValid&&(v.isValid=(h=v.containsNumericCharacter)!==null&&h!==void 0?h:!0),v.isValid&&(v.isValid=(m=v.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),v}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),l&&(t.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let l=0;l<e.length;l++)i=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class W2{constructor(e,t,i,l){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iy(this),this.idTokenSubscription=new Iy(this),this.beforeStateQueue=new z2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var i,l,c;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await oc(this,{idToken:e}),i=await jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Pn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let l=i,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=l?._redirectEventId,v=await this.tryRedirectSignIn(e);(!h||h===m)&&v?.user&&(l=v.user,c=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(l)}catch(h){l=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(Xs(this));const t=e?nr(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(Xs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(Xs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await V2(this),t=new H2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new na("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await M2(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,l){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(m,this,"internal-error"),m.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const v=e.addObserver(t,i,l);return()=>{h=!0,v()}}else{const v=e.addObserver(t);return()=>{h=!0,v()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const l=await this._getAppCheckToken();return l&&(t["X-Firebase-AppCheck"]=l),t}async _getAppCheckToken(){var e;if(Pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&x2(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Yf(r){return nr(r)}class Iy{constructor(e){this.auth=e,this.observer=null,this.addObserver=$1(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $2(r){Qf=r}function G2(r){return Qf.loadJS(r)}function q2(){return Qf.gapiScript}function K2(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Y2(r,e){const t=gc(r,"auth");if(t.isInitialized()){const l=t.getImmediate(),c=t.getOptions();if(fs(c,e??{}))return l;Rr(l,"already-initialized")}return t.initialize({options:e})}function Q2(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Cr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function X2(r,e,t){const i=Yf(r);we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const l=!1,c=J_(e),{host:h,port:m}=J2(e),v=m===null?"":`:${m}`,w={url:`${c}//${h}${v}/`},k=Object.freeze({host:h,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!i._canInitEmulator){we(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),we(fs(w,i.config.emulator)&&fs(k,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=w,i.emulatorConfig=k,i.settings.appVerificationDisabledForTesting=!0,li(h)?(ef(`${c}//${h}${v}`),tf("Auth",!0)):Z2()}function J_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function J2(r){const e=J_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(i);if(l){const c=l[1];return{host:c,port:Ny(i.substr(c.length+1))}}else{const[c,h]=i.split(":");return{host:c,port:Ny(h)}}}function Ny(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Z2(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Z_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,t){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}/**
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
 */async function fo(r,e){return N2(r,"POST","/v1/accounts:signInWithIdp",Gf(r,e))}/**
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
 */const eC="http://localhost";class ii extends Z_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:l}=t,c=Hf(t,["providerId","signInMethod"]);if(!i||!l)return null;const h=new ii(i,l);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return fo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,fo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fo(e,t)}buildRequest(){const e={requestUri:eC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=So(t)}return e}}/**
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
 */class e0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class aa extends e0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class os extends aa{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return os.credential(e.oauthAccessToken)}catch{return null}}}os.FACEBOOK_SIGN_IN_METHOD="facebook.com";os.PROVIDER_ID="facebook.com";/**
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
 */class ls extends aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ii._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ls.credential(t,i)}catch{return null}}}ls.GOOGLE_SIGN_IN_METHOD="google.com";ls.PROVIDER_ID="google.com";/**
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
 */class as extends aa{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.GITHUB_SIGN_IN_METHOD="github.com";as.PROVIDER_ID="github.com";/**
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
 */class us extends aa{constructor(){super("twitter.com")}static credential(e,t){return ii._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return us.credential(t,i)}catch{return null}}}us.TWITTER_SIGN_IN_METHOD="twitter.com";us.PROVIDER_ID="twitter.com";/**
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
 */class wo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,l=!1){const c=await jn._fromIdTokenResponse(e,i,l),h=by(i);return new wo({user:c,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const l=by(i);return new wo({user:e,providerId:l,_tokenResponse:i,operationType:t})}}function by(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ac extends Pr{constructor(e,t,i,l){var c;super(t.code,t.message),this.operationType=i,this.user=l,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,l){return new ac(e,t,i,l)}}function t0(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(r,c,e,i):c})}async function tC(r,e,t=!1){const i=await Jl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return wo._forOperation(r,"link",i)}/**
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
 */async function nC(r,e,t=!1){const{auth:i}=r;if(Pn(i.app))return Promise.reject(Xs(i));const l="reauthenticate";try{const c=await Jl(r,t0(i,l,e,r),t);we(c.idToken,i,"internal-error");const h=qf(c.idToken);we(h,i,"internal-error");const{sub:m}=h;return we(r.uid===m,i,"user-mismatch"),wo._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&Rr(i,"user-mismatch"),c}}/**
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
 */async function rC(r,e,t=!1){if(Pn(r.app))return Promise.reject(Xs(r));const i="signIn",l=await t0(r,i,e),c=await wo._fromIdTokenResponse(r,i,l);return t||await r._updateCurrentUser(c.user),c}function sC(r,e,t,i){return nr(r).onIdTokenChanged(e,t,i)}function iC(r,e,t){return nr(r).beforeAuthStateChanged(e,t)}const uc="__sak";/**
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
 */class n0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const oC=1e3,lC=10;class r0 extends n0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),l=this.localCache[t];i!==l&&e(t,l,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,v)=>{this.notifyListeners(h,v)});return}const i=e.key;t?this.detachListener():this.stopPolling();const l=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},c=this.storage.getItem(i);U2()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,lC):l()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const l of Array.from(i))l(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},oC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}r0.type="LOCAL";const aC=r0;/**
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
 */class s0 extends n0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}s0.type="SESSION";const i0=s0;/**
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
 */function uC(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(l=>l.isListeningto(e));if(t)return t;const i=new kc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:l,data:c}=t.data,h=this.handlersMap[l];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:l});const m=Array.from(h).map(async w=>w(t.origin,c)),v=await uC(m);t.ports[0].postMessage({status:"done",eventId:i,eventType:l,response:v})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
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
 */function Xf(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class cC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,h;return new Promise((m,v)=>{const w=Xf("",20);l.port1.start();const k=setTimeout(()=>{v(new Error("unsupported_event"))},i);h={messageChannel:l,onMessage(E){const S=E;if(S.data.eventId===w)switch(S.data.status){case"ack":clearTimeout(k),c=setTimeout(()=>{v(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(S.data.response);break;default:clearTimeout(k),clearTimeout(c),v(new Error("invalid_response"));break}}},this.handlers.add(h),l.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:w,data:t},[l.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function er(){return window}function hC(r){er().location.href=r}/**
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
 */function o0(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function dC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fC(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function pC(){return o0()?self:null}/**
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
 */const l0="firebaseLocalStorageDb",mC=1,cc="firebaseLocalStorage",a0="fbase_key";class ua{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Cc(r,e){return r.transaction([cc],e?"readwrite":"readonly").objectStore(cc)}function gC(){const r=indexedDB.deleteDatabase(l0);return new ua(r).toPromise()}function Wd(){const r=indexedDB.open(l0,mC);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(cc,{keyPath:a0})}catch(l){t(l)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(cc)?e(i):(i.close(),await gC(),e(await Wd()))})})}async function Ry(r,e,t){const i=Cc(r,!0).put({[a0]:e,value:t});return new ua(i).toPromise()}async function yC(r,e){const t=Cc(r,!1).get(e),i=await new ua(t).toPromise();return i===void 0?null:i.value}function Ay(r,e){const t=Cc(r,!0).delete(e);return new ua(t).toPromise()}const vC=800,_C=3;class u0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>_C)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(pC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dC(),!this.activeServiceWorker)return;this.sender=new cC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wd();return await Ry(e,uc,"1"),await Ay(e,uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ry(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>yC(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ay(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=Cc(l,!1).getAll();return new ua(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)i.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),t.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!i.has(l)&&(this.notifyListeners(l,null),t.push(l));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const l of Array.from(i))l(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u0.type="LOCAL";const wC=u0;new la(3e4,6e4);/**
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
 */function xC(r,e){return e?Cr(e):(we(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Jf extends Z_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function EC(r){return rC(r.auth,new Jf(r),r.bypassAuthState)}function SC(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),nC(t,new Jf(r),r.bypassAuthState)}async function kC(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),tC(t,new Jf(r),r.bypassAuthState)}/**
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
 */class c0{constructor(e,t,i,l,c=!1){this.auth=e,this.resolver=i,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:l,tenantId:c,error:h,type:m}=e;if(h){this.reject(h);return}const v={auth:this.auth,requestUri:t,sessionId:i,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(v))}catch(w){this.reject(w)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EC;case"linkViaPopup":case"linkViaRedirect":return kC;case"reauthViaPopup":case"reauthViaRedirect":return SC;default:Rr(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CC=new la(2e3,1e4);class io extends c0{constructor(e,t,i,l,c){super(e,t,l,c),this.provider=i,this.authWindow=null,this.pollId=null,io.currentPopupAction&&io.currentPopupAction.cancel(),io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=Xf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CC.get())};e()}}io.currentPopupAction=null;/**
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
 */const TC="pendingRedirect",Mu=new Map;class IC extends c0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Mu.get(this.auth._key());if(!e){try{const i=await NC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Mu.set(this.auth._key(),e)}return this.bypassAuthState||Mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NC(r,e){const t=AC(e),i=RC(r);if(!await i._isAvailable())return!1;const l=await i._get(t)==="true";return await i._remove(t),l}function bC(r,e){Mu.set(r._key(),e)}function RC(r){return Cr(r._redirectPersistence)}function AC(r){return Lu(TC,r.config.apiKey,r.name)}async function PC(r,e,t=!1){if(Pn(r.app))return Promise.reject(Xs(r));const i=Yf(r),l=xC(i,e),h=await new IC(i,l,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const DC=10*60*1e3;class OC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!h0(e)){const l=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Zn(this.auth,l))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Py(e))}saveEventToCache(e){this.cachedEventUids.add(Py(e)),this.lastProcessedEventTime=Date.now()}}function Py(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function h0({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function jC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return h0(r);default:return!1}}/**
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
 */async function LC(r,e={}){return Io(r,"GET","/v1/projects",e)}/**
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
 */const MC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FC=/^https?/;async function UC(r){if(r.config.emulator)return;const{authorizedDomains:e}=await LC(r);for(const t of e)try{if(zC(t))return}catch{}Rr(r,"unauthorized-domain")}function zC(r){const e=Bd(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!FC.test(t))return!1;if(MC.test(r))return i===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(i)}/**
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
 */const VC=new la(3e4,6e4);function Dy(){const r=er().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function BC(r){return new Promise((e,t)=>{var i,l,c;function h(){Dy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dy(),t(Zn(r,"network-request-failed"))},timeout:VC.get()})}if(!((l=(i=er().gapi)===null||i===void 0?void 0:i.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((c=er().gapi)===null||c===void 0)&&c.load)h();else{const m=K2("iframefcb");return er()[m]=()=>{gapi.load?h():t(Zn(r,"network-request-failed"))},G2(`${q2()}?onload=${m}`).catch(v=>t(v))}}).catch(e=>{throw Fu=null,e})}let Fu=null;function HC(r){return Fu=Fu||BC(r),Fu}/**
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
 */const WC=new la(5e3,15e3),$C="__/auth/iframe",GC="emulator/auth/iframe",qC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YC(r){const e=r.config;we(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?$f(e,GC):`https://${r.config.authDomain}/${$C}`,i={apiKey:e.apiKey,appName:r.name,v:ai},l=KC.get(r.config.apiHost);l&&(i.eid=l);const c=r._getFrameworks();return c.length&&(i.fw=c.join(",")),`${t}?${So(i).slice(1)}`}async function QC(r){const e=await HC(r),t=er().gapi;return we(t,r,"internal-error"),e.open({where:document.body,url:YC(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qC,dontclear:!0},i=>new Promise(async(l,c)=>{await i.restyle({setHideOnLeave:!1});const h=Zn(r,"network-request-failed"),m=er().setTimeout(()=>{c(h)},WC.get());function v(){er().clearTimeout(m),l(i)}i.ping(v).then(v,()=>{c(h)})}))}/**
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
 */const XC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JC=500,ZC=600,eT="_blank",tT="http://localhost";class Oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nT(r,e,t,i=JC,l=ZC){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let m="";const v=Object.assign(Object.assign({},XC),{width:i.toString(),height:l.toString(),top:c,left:h}),w=zt().toLowerCase();t&&(m=$_(w)?eT:t),H_(w)&&(e=e||tT,v.scrollbars="yes");const k=Object.entries(v).reduce((S,[U,B])=>`${S}${U}=${B},`,"");if(F2(w)&&m!=="_self")return rT(e||"",m),new Oy(null);const E=window.open(e||"",m,k);we(E,r,"popup-blocked");try{E.focus()}catch{}return new Oy(E)}function rT(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const sT="__/auth/handler",iT="emulator/auth/handler",oT=encodeURIComponent("fac");async function jy(r,e,t,i,l,c){we(r.config.authDomain,r,"auth-domain-config-required"),we(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:ai,eventId:l};if(e instanceof e0){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",Ed(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[k,E]of Object.entries({}))h[k]=E}if(e instanceof aa){const k=e.getScopes().filter(E=>E!=="");k.length>0&&(h.scopes=k.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const k of Object.keys(m))m[k]===void 0&&delete m[k];const v=await r._getAppCheckToken(),w=v?`#${oT}=${encodeURIComponent(v)}`:"";return`${lT(r)}?${So(m).slice(1)}${w}`}function lT({config:r}){return r.emulator?$f(r,iT):`https://${r.authDomain}/${sT}`}/**
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
 */const vd="webStorageSupport";class aT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=i0,this._completeRedirectFn=PC,this._overrideRedirectResult=bC}async _openPopup(e,t,i,l){var c;Ar((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await jy(e,t,i,Bd(),l);return nT(e,h,Xf())}async _openRedirect(e,t,i,l){await this._originValidation(e);const c=await jy(e,t,i,Bd(),l);return hC(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:l,promise:c}=this.eventManagers[t];return l?Promise.resolve(l):(Ar(c,"If manager is not set, promise should be"),c)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await QC(e),i=new OC(e);return t.register("authEvent",l=>(we(l?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vd,{type:vd},l=>{var c;const h=(c=l?.[0])===null||c===void 0?void 0:c[vd];h!==void 0&&t(!!h),Rr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=UC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Q_()||W_()||Kf()}}const uT=aT;var Ly="@firebase/auth",My="1.10.8";/**
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
 */class cT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dT(r){ei(new ps("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=i.options;we(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const v={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X_(r)},w=new W2(i,l,c,v);return Q2(w,t),w},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ei(new ps("auth-internal",e=>{const t=Yf(e.getProvider("auth").getImmediate());return(i=>new cT(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(Ly,My,hT(r)),Jn(Ly,My,"esm2017")}/**
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
 */const fT=5*60,pT=vv("authIdTokenMaxAge")||fT;let Fy=null;const mT=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>pT)return;const l=t?.token;Fy!==l&&(Fy=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function gT(r=of()){const e=gc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Y2(r,{popupRedirectResolver:uT,persistence:[wC,aC,i0]}),i=vv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(i,location.origin);if(location.origin===c.origin){const h=mT(c.toString());iC(t,h,()=>h(t.currentUser)),sC(t,m=>h(m))}}const l=mv("auth");return l&&X2(t,`http://${l}`),t}function yT(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}$2({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=l=>{const c=Zn("internal-error");c.customData=l,t(c)},i.type="text/javascript",i.charset="UTF-8",yT().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dT("Browser");var Uy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zf;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,C){function N(){}N.prototype=C.prototype,P.D=C.prototype,P.prototype=new N,P.prototype.constructor=P,P.C=function(A,R,O){for(var I=Array(arguments.length-2),We=2;We<arguments.length;We++)I[We-2]=arguments[We];return C.prototype[R].apply(A,I)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(P,C,N){N||(N=0);var A=Array(16);if(typeof C=="string")for(var R=0;16>R;++R)A[R]=C.charCodeAt(N++)|C.charCodeAt(N++)<<8|C.charCodeAt(N++)<<16|C.charCodeAt(N++)<<24;else for(R=0;16>R;++R)A[R]=C[N++]|C[N++]<<8|C[N++]<<16|C[N++]<<24;C=P.g[0],N=P.g[1],R=P.g[2];var O=P.g[3],I=C+(O^N&(R^O))+A[0]+3614090360&4294967295;C=N+(I<<7&4294967295|I>>>25),I=O+(R^C&(N^R))+A[1]+3905402710&4294967295,O=C+(I<<12&4294967295|I>>>20),I=R+(N^O&(C^N))+A[2]+606105819&4294967295,R=O+(I<<17&4294967295|I>>>15),I=N+(C^R&(O^C))+A[3]+3250441966&4294967295,N=R+(I<<22&4294967295|I>>>10),I=C+(O^N&(R^O))+A[4]+4118548399&4294967295,C=N+(I<<7&4294967295|I>>>25),I=O+(R^C&(N^R))+A[5]+1200080426&4294967295,O=C+(I<<12&4294967295|I>>>20),I=R+(N^O&(C^N))+A[6]+2821735955&4294967295,R=O+(I<<17&4294967295|I>>>15),I=N+(C^R&(O^C))+A[7]+4249261313&4294967295,N=R+(I<<22&4294967295|I>>>10),I=C+(O^N&(R^O))+A[8]+1770035416&4294967295,C=N+(I<<7&4294967295|I>>>25),I=O+(R^C&(N^R))+A[9]+2336552879&4294967295,O=C+(I<<12&4294967295|I>>>20),I=R+(N^O&(C^N))+A[10]+4294925233&4294967295,R=O+(I<<17&4294967295|I>>>15),I=N+(C^R&(O^C))+A[11]+2304563134&4294967295,N=R+(I<<22&4294967295|I>>>10),I=C+(O^N&(R^O))+A[12]+1804603682&4294967295,C=N+(I<<7&4294967295|I>>>25),I=O+(R^C&(N^R))+A[13]+4254626195&4294967295,O=C+(I<<12&4294967295|I>>>20),I=R+(N^O&(C^N))+A[14]+2792965006&4294967295,R=O+(I<<17&4294967295|I>>>15),I=N+(C^R&(O^C))+A[15]+1236535329&4294967295,N=R+(I<<22&4294967295|I>>>10),I=C+(R^O&(N^R))+A[1]+4129170786&4294967295,C=N+(I<<5&4294967295|I>>>27),I=O+(N^R&(C^N))+A[6]+3225465664&4294967295,O=C+(I<<9&4294967295|I>>>23),I=R+(C^N&(O^C))+A[11]+643717713&4294967295,R=O+(I<<14&4294967295|I>>>18),I=N+(O^C&(R^O))+A[0]+3921069994&4294967295,N=R+(I<<20&4294967295|I>>>12),I=C+(R^O&(N^R))+A[5]+3593408605&4294967295,C=N+(I<<5&4294967295|I>>>27),I=O+(N^R&(C^N))+A[10]+38016083&4294967295,O=C+(I<<9&4294967295|I>>>23),I=R+(C^N&(O^C))+A[15]+3634488961&4294967295,R=O+(I<<14&4294967295|I>>>18),I=N+(O^C&(R^O))+A[4]+3889429448&4294967295,N=R+(I<<20&4294967295|I>>>12),I=C+(R^O&(N^R))+A[9]+568446438&4294967295,C=N+(I<<5&4294967295|I>>>27),I=O+(N^R&(C^N))+A[14]+3275163606&4294967295,O=C+(I<<9&4294967295|I>>>23),I=R+(C^N&(O^C))+A[3]+4107603335&4294967295,R=O+(I<<14&4294967295|I>>>18),I=N+(O^C&(R^O))+A[8]+1163531501&4294967295,N=R+(I<<20&4294967295|I>>>12),I=C+(R^O&(N^R))+A[13]+2850285829&4294967295,C=N+(I<<5&4294967295|I>>>27),I=O+(N^R&(C^N))+A[2]+4243563512&4294967295,O=C+(I<<9&4294967295|I>>>23),I=R+(C^N&(O^C))+A[7]+1735328473&4294967295,R=O+(I<<14&4294967295|I>>>18),I=N+(O^C&(R^O))+A[12]+2368359562&4294967295,N=R+(I<<20&4294967295|I>>>12),I=C+(N^R^O)+A[5]+4294588738&4294967295,C=N+(I<<4&4294967295|I>>>28),I=O+(C^N^R)+A[8]+2272392833&4294967295,O=C+(I<<11&4294967295|I>>>21),I=R+(O^C^N)+A[11]+1839030562&4294967295,R=O+(I<<16&4294967295|I>>>16),I=N+(R^O^C)+A[14]+4259657740&4294967295,N=R+(I<<23&4294967295|I>>>9),I=C+(N^R^O)+A[1]+2763975236&4294967295,C=N+(I<<4&4294967295|I>>>28),I=O+(C^N^R)+A[4]+1272893353&4294967295,O=C+(I<<11&4294967295|I>>>21),I=R+(O^C^N)+A[7]+4139469664&4294967295,R=O+(I<<16&4294967295|I>>>16),I=N+(R^O^C)+A[10]+3200236656&4294967295,N=R+(I<<23&4294967295|I>>>9),I=C+(N^R^O)+A[13]+681279174&4294967295,C=N+(I<<4&4294967295|I>>>28),I=O+(C^N^R)+A[0]+3936430074&4294967295,O=C+(I<<11&4294967295|I>>>21),I=R+(O^C^N)+A[3]+3572445317&4294967295,R=O+(I<<16&4294967295|I>>>16),I=N+(R^O^C)+A[6]+76029189&4294967295,N=R+(I<<23&4294967295|I>>>9),I=C+(N^R^O)+A[9]+3654602809&4294967295,C=N+(I<<4&4294967295|I>>>28),I=O+(C^N^R)+A[12]+3873151461&4294967295,O=C+(I<<11&4294967295|I>>>21),I=R+(O^C^N)+A[15]+530742520&4294967295,R=O+(I<<16&4294967295|I>>>16),I=N+(R^O^C)+A[2]+3299628645&4294967295,N=R+(I<<23&4294967295|I>>>9),I=C+(R^(N|~O))+A[0]+4096336452&4294967295,C=N+(I<<6&4294967295|I>>>26),I=O+(N^(C|~R))+A[7]+1126891415&4294967295,O=C+(I<<10&4294967295|I>>>22),I=R+(C^(O|~N))+A[14]+2878612391&4294967295,R=O+(I<<15&4294967295|I>>>17),I=N+(O^(R|~C))+A[5]+4237533241&4294967295,N=R+(I<<21&4294967295|I>>>11),I=C+(R^(N|~O))+A[12]+1700485571&4294967295,C=N+(I<<6&4294967295|I>>>26),I=O+(N^(C|~R))+A[3]+2399980690&4294967295,O=C+(I<<10&4294967295|I>>>22),I=R+(C^(O|~N))+A[10]+4293915773&4294967295,R=O+(I<<15&4294967295|I>>>17),I=N+(O^(R|~C))+A[1]+2240044497&4294967295,N=R+(I<<21&4294967295|I>>>11),I=C+(R^(N|~O))+A[8]+1873313359&4294967295,C=N+(I<<6&4294967295|I>>>26),I=O+(N^(C|~R))+A[15]+4264355552&4294967295,O=C+(I<<10&4294967295|I>>>22),I=R+(C^(O|~N))+A[6]+2734768916&4294967295,R=O+(I<<15&4294967295|I>>>17),I=N+(O^(R|~C))+A[13]+1309151649&4294967295,N=R+(I<<21&4294967295|I>>>11),I=C+(R^(N|~O))+A[4]+4149444226&4294967295,C=N+(I<<6&4294967295|I>>>26),I=O+(N^(C|~R))+A[11]+3174756917&4294967295,O=C+(I<<10&4294967295|I>>>22),I=R+(C^(O|~N))+A[2]+718787259&4294967295,R=O+(I<<15&4294967295|I>>>17),I=N+(O^(R|~C))+A[9]+3951481745&4294967295,P.g[0]=P.g[0]+C&4294967295,P.g[1]=P.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,P.g[2]=P.g[2]+R&4294967295,P.g[3]=P.g[3]+O&4294967295}i.prototype.u=function(P,C){C===void 0&&(C=P.length);for(var N=C-this.blockSize,A=this.B,R=this.h,O=0;O<C;){if(R==0)for(;O<=N;)l(this,P,O),O+=this.blockSize;if(typeof P=="string"){for(;O<C;)if(A[R++]=P.charCodeAt(O++),R==this.blockSize){l(this,A),R=0;break}}else for(;O<C;)if(A[R++]=P[O++],R==this.blockSize){l(this,A),R=0;break}}this.h=R,this.o+=C},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var C=1;C<P.length-8;++C)P[C]=0;var N=8*this.o;for(C=P.length-8;C<P.length;++C)P[C]=N&255,N/=256;for(this.u(P),P=Array(16),C=N=0;4>C;++C)for(var A=0;32>A;A+=8)P[N++]=this.g[C]>>>A&255;return P};function c(P,C){var N=m;return Object.prototype.hasOwnProperty.call(N,P)?N[P]:N[P]=C(P)}function h(P,C){this.h=C;for(var N=[],A=!0,R=P.length-1;0<=R;R--){var O=P[R]|0;A&&O==C||(N[R]=O,A=!1)}this.g=N}var m={};function v(P){return-128<=P&&128>P?c(P,function(C){return new h([C|0],0>C?-1:0)}):new h([P|0],0>P?-1:0)}function w(P){if(isNaN(P)||!isFinite(P))return E;if(0>P)return W(w(-P));for(var C=[],N=1,A=0;P>=N;A++)C[A]=P/N|0,N*=4294967296;return new h(C,0)}function k(P,C){if(P.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(P.charAt(0)=="-")return W(k(P.substring(1),C));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=w(Math.pow(C,8)),A=E,R=0;R<P.length;R+=8){var O=Math.min(8,P.length-R),I=parseInt(P.substring(R,R+O),C);8>O?(O=w(Math.pow(C,O)),A=A.j(O).add(w(I))):(A=A.j(N),A=A.add(w(I)))}return A}var E=v(0),S=v(1),U=v(16777216);r=h.prototype,r.m=function(){if($(this))return-W(this).m();for(var P=0,C=1,N=0;N<this.g.length;N++){var A=this.i(N);P+=(0<=A?A:4294967296+A)*C,C*=4294967296}return P},r.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(B(this))return"0";if($(this))return"-"+W(this).toString(P);for(var C=w(Math.pow(P,6)),N=this,A="";;){var R=de(N,C).g;N=fe(N,R.j(C));var O=((0<N.g.length?N.g[0]:N.h)>>>0).toString(P);if(N=R,B(N))return O+A;for(;6>O.length;)O="0"+O;A=O+A}},r.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function B(P){if(P.h!=0)return!1;for(var C=0;C<P.g.length;C++)if(P.g[C]!=0)return!1;return!0}function $(P){return P.h==-1}r.l=function(P){return P=fe(this,P),$(P)?-1:B(P)?0:1};function W(P){for(var C=P.g.length,N=[],A=0;A<C;A++)N[A]=~P.g[A];return new h(N,~P.h).add(S)}r.abs=function(){return $(this)?W(this):this},r.add=function(P){for(var C=Math.max(this.g.length,P.g.length),N=[],A=0,R=0;R<=C;R++){var O=A+(this.i(R)&65535)+(P.i(R)&65535),I=(O>>>16)+(this.i(R)>>>16)+(P.i(R)>>>16);A=I>>>16,O&=65535,I&=65535,N[R]=I<<16|O}return new h(N,N[N.length-1]&-2147483648?-1:0)};function fe(P,C){return P.add(W(C))}r.j=function(P){if(B(this)||B(P))return E;if($(this))return $(P)?W(this).j(W(P)):W(W(this).j(P));if($(P))return W(this.j(W(P)));if(0>this.l(U)&&0>P.l(U))return w(this.m()*P.m());for(var C=this.g.length+P.g.length,N=[],A=0;A<2*C;A++)N[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<P.g.length;R++){var O=this.i(A)>>>16,I=this.i(A)&65535,We=P.i(R)>>>16,pe=P.i(R)&65535;N[2*A+2*R]+=I*pe,G(N,2*A+2*R),N[2*A+2*R+1]+=O*pe,G(N,2*A+2*R+1),N[2*A+2*R+1]+=I*We,G(N,2*A+2*R+1),N[2*A+2*R+2]+=O*We,G(N,2*A+2*R+2)}for(A=0;A<C;A++)N[A]=N[2*A+1]<<16|N[2*A];for(A=C;A<2*C;A++)N[A]=0;return new h(N,0)};function G(P,C){for(;(P[C]&65535)!=P[C];)P[C+1]+=P[C]>>>16,P[C]&=65535,C++}function he(P,C){this.g=P,this.h=C}function de(P,C){if(B(C))throw Error("division by zero");if(B(P))return new he(E,E);if($(P))return C=de(W(P),C),new he(W(C.g),W(C.h));if($(C))return C=de(P,W(C)),new he(W(C.g),C.h);if(30<P.g.length){if($(P)||$(C))throw Error("slowDivide_ only works with positive integers.");for(var N=S,A=C;0>=A.l(P);)N=J(N),A=J(A);var R=ne(N,1),O=ne(A,1);for(A=ne(A,2),N=ne(N,2);!B(A);){var I=O.add(A);0>=I.l(P)&&(R=R.add(N),O=I),A=ne(A,1),N=ne(N,1)}return C=fe(P,R.j(C)),new he(R,C)}for(R=E;0<=P.l(C);){for(N=Math.max(1,Math.floor(P.m()/C.m())),A=Math.ceil(Math.log(N)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),O=w(N),I=O.j(C);$(I)||0<I.l(P);)N-=A,O=w(N),I=O.j(C);B(O)&&(O=S),R=R.add(O),P=fe(P,I)}return new he(R,P)}r.A=function(P){return de(this,P).h},r.and=function(P){for(var C=Math.max(this.g.length,P.g.length),N=[],A=0;A<C;A++)N[A]=this.i(A)&P.i(A);return new h(N,this.h&P.h)},r.or=function(P){for(var C=Math.max(this.g.length,P.g.length),N=[],A=0;A<C;A++)N[A]=this.i(A)|P.i(A);return new h(N,this.h|P.h)},r.xor=function(P){for(var C=Math.max(this.g.length,P.g.length),N=[],A=0;A<C;A++)N[A]=this.i(A)^P.i(A);return new h(N,this.h^P.h)};function J(P){for(var C=P.g.length+1,N=[],A=0;A<C;A++)N[A]=P.i(A)<<1|P.i(A-1)>>>31;return new h(N,P.h)}function ne(P,C){var N=C>>5;C%=32;for(var A=P.g.length-N,R=[],O=0;O<A;O++)R[O]=0<C?P.i(O+N)>>>C|P.i(O+N+1)<<32-C:P.i(O+N);return new h(R,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=w,h.fromString=k,Zf=h}).apply(typeof Uy<"u"?Uy:typeof self<"u"?self:typeof window<"u"?window:{});var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,y){return a==Array.prototype||a==Object.prototype||(a[f]=y.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Au=="object"&&Au];for(var f=0;f<a.length;++f){var y=a[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function l(a,f){if(f)e:{var y=i;a=a.split(".");for(var x=0;x<a.length-1;x++){var L=a[x];if(!(L in y))break e;y=y[L]}a=a[a.length-1],x=y[a],f=f(x),f!=x&&f!=null&&e(y,a,{configurable:!0,writable:!0,value:f})}}function c(a,f){a instanceof String&&(a+="");var y=0,x=!1,L={next:function(){if(!x&&y<a.length){var V=y++;return{value:f(V,a[V]),done:!1}}return x=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}l("Array.prototype.values",function(a){return a||function(){return c(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function v(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function w(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function k(a,f,y){return a.call.apply(a.bind,arguments)}function E(a,f,y){if(!a)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,x),a.apply(f,L)}}return function(){return a.apply(f,arguments)}}function S(a,f,y){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:E,S.apply(null,arguments)}function U(a,f){var y=Array.prototype.slice.call(arguments,1);return function(){var x=y.slice();return x.push.apply(x,arguments),a.apply(this,x)}}function B(a,f){function y(){}y.prototype=f.prototype,a.aa=f.prototype,a.prototype=new y,a.prototype.constructor=a,a.Qb=function(x,L,V){for(var ee=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)ee[Ve-2]=arguments[Ve];return f.prototype[L].apply(x,ee)}}function $(a){const f=a.length;if(0<f){const y=Array(f);for(let x=0;x<f;x++)y[x]=a[x];return y}return[]}function W(a,f){for(let y=1;y<arguments.length;y++){const x=arguments[y];if(v(x)){const L=a.length||0,V=x.length||0;a.length=L+V;for(let ee=0;ee<V;ee++)a[L+ee]=x[ee]}else a.push(x)}}class fe{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function G(a){return/^[\s\xa0]*$/.test(a)}function he(){var a=m.navigator;return a&&(a=a.userAgent)?a:""}function de(a){return de[" "](a),a}de[" "]=function(){};var J=he().indexOf("Gecko")!=-1&&!(he().toLowerCase().indexOf("webkit")!=-1&&he().indexOf("Edge")==-1)&&!(he().indexOf("Trident")!=-1||he().indexOf("MSIE")!=-1)&&he().indexOf("Edge")==-1;function ne(a,f,y){for(const x in a)f.call(y,a[x],x,a)}function P(a,f){for(const y in a)f.call(void 0,a[y],y,a)}function C(a){const f={};for(const y in a)f[y]=a[y];return f}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,f){let y,x;for(let L=1;L<arguments.length;L++){x=arguments[L];for(y in x)a[y]=x[y];for(let V=0;V<N.length;V++)y=N[V],Object.prototype.hasOwnProperty.call(x,y)&&(a[y]=x[y])}}function R(a){var f=1;a=a.split(":");const y=[];for(;0<f&&a.length;)y.push(a.shift()),f--;return a.length&&y.push(a.join(":")),y}function O(a){m.setTimeout(()=>{throw a},0)}function I(){var a=oe;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class We{constructor(){this.h=this.g=null}add(f,y){const x=pe.get();x.set(f,y),this.h?this.h.next=x:this.g=x,this.h=x}}var pe=new fe(()=>new Ee,a=>a.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,Y=!1,oe=new We,re=()=>{const a=m.Promise.resolve(void 0);ye=()=>{a.then(j)}};var j=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(y){O(y)}var f=pe;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}Y=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var xe=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return a}();function Se(a,f){if(te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var y=this.type=a.type,x=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(J){e:{try{de(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=a.fromElement:y=="mouseout"&&(f=a.toElement);this.relatedTarget=f,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Re[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Se.aa.h.call(this)}}B(Se,te);var Re={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(a,f,y,x,L){this.listener=a,this.proxy=null,this.src=f,this.type=y,this.capture=!!x,this.ha=L,this.key=++Fe,this.da=this.fa=!1}function mt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function rr(a){this.src=a,this.g={},this.h=0}rr.prototype.add=function(a,f,y,x,L){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var ee=Dr(a,f,x,L);return-1<ee?(f=a[ee],y||(f.fa=!1)):(f=new $e(f,this.src,V,!!x,L),f.fa=y,a.push(f)),f};function hi(a,f){var y=f.type;if(y in a.g){var x=a.g[y],L=Array.prototype.indexOf.call(x,f,void 0),V;(V=0<=L)&&Array.prototype.splice.call(x,L,1),V&&(mt(f),a.g[y].length==0&&(delete a.g[y],a.h--))}}function Dr(a,f,y,x){for(var L=0;L<a.length;++L){var V=a[L];if(!V.da&&V.listener==f&&V.capture==!!y&&V.ha==x)return L}return-1}var vs="closure_lm_"+(1e6*Math.random()|0),di={};function No(a,f,y,x,L){if(Array.isArray(f)){for(var V=0;V<f.length;V++)No(a,f[V],y,x,L);return null}return y=Ao(y),a&&a[Me]?a.K(f,y,w(x)?!!x.capture:!1,L):bo(a,f,y,!1,x,L)}function bo(a,f,y,x,L,V){if(!f)throw Error("Invalid event type");var ee=w(L)?!!L.capture:!!L,Ve=pi(a);if(Ve||(a[vs]=Ve=new rr(a)),y=Ve.add(f,y,x,ee,V),y.proxy)return y;if(x=da(),y.proxy=x,x.src=a,x.listener=y,a.addEventListener)xe||(L=ee),L===void 0&&(L=!1),a.addEventListener(f.toString(),x,L);else if(a.attachEvent)a.attachEvent(ir(f.toString()),x);else if(a.addListener&&a.removeListener)a.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return y}function da(){function a(y){return f.call(a.src,a.listener,y)}const f=Ro;return a}function fi(a,f,y,x,L){if(Array.isArray(f))for(var V=0;V<f.length;V++)fi(a,f[V],y,x,L);else x=w(x)?!!x.capture:!!x,y=Ao(y),a&&a[Me]?(a=a.i,f=String(f).toString(),f in a.g&&(V=a.g[f],y=Dr(V,y,x,L),-1<y&&(mt(V[y]),Array.prototype.splice.call(V,y,1),V.length==0&&(delete a.g[f],a.h--)))):a&&(a=pi(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Dr(f,y,x,L)),(y=-1<a?f[a]:null)&&sr(y))}function sr(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[Me])hi(f.i,a);else{var y=a.type,x=a.proxy;f.removeEventListener?f.removeEventListener(y,x,a.capture):f.detachEvent?f.detachEvent(ir(y),x):f.addListener&&f.removeListener&&f.removeListener(x),(y=pi(f))?(hi(y,a),y.h==0&&(y.src=null,f[vs]=null)):mt(a)}}}function ir(a){return a in di?di[a]:di[a]="on"+a}function Ro(a,f){if(a.da)a=!0;else{f=new Se(f,this);var y=a.listener,x=a.ha||a.src;a.fa&&sr(a),a=y.call(x,f)}return a}function pi(a){return a=a[vs],a instanceof rr?a:null}var mi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ao(a){return typeof a=="function"?a:(a[mi]||(a[mi]=function(f){return a.handleEvent(f)}),a[mi])}function ct(){H.call(this),this.i=new rr(this),this.M=this,this.F=null}B(ct,H),ct.prototype[Me]=!0,ct.prototype.removeEventListener=function(a,f,y,x){fi(this,a,f,y,x)};function ht(a,f){var y,x=a.F;if(x)for(y=[];x;x=x.F)y.push(x);if(a=a.M,x=f.type||f,typeof f=="string")f=new te(f,a);else if(f instanceof te)f.target=f.target||a;else{var L=f;f=new te(x,a),A(f,L)}if(L=!0,y)for(var V=y.length-1;0<=V;V--){var ee=f.g=y[V];L=or(ee,x,!0,f)&&L}if(ee=f.g=a,L=or(ee,x,!0,f)&&L,L=or(ee,x,!1,f)&&L,y)for(V=0;V<y.length;V++)ee=f.g=y[V],L=or(ee,x,!1,f)&&L}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var y=a.g[f],x=0;x<y.length;x++)mt(y[x]);delete a.g[f],a.h--}}this.F=null},ct.prototype.K=function(a,f,y,x){return this.i.add(String(a),f,!1,y,x)},ct.prototype.L=function(a,f,y,x){return this.i.add(String(a),f,!0,y,x)};function or(a,f,y,x){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,V=0;V<f.length;++V){var ee=f[V];if(ee&&!ee.da&&ee.capture==y){var Ve=ee.listener,dt=ee.ha||ee.src;ee.fa&&hi(a.i,ee),L=Ve.call(dt,x)!==!1&&L}}return L&&!x.defaultPrevented}function Po(a,f,y){if(typeof a=="function")y&&(a=S(a,y));else if(a&&typeof a.handleEvent=="function")a=S(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(a,f||0)}function Or(a){a.g=Po(()=>{a.g=null,a.i&&(a.i=!1,Or(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class _s extends H{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Or(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ws(a){H.call(this),this.h=a,this.g={}}B(ws,H);var Do=[];function Oo(a){ne(a.g,function(f,y){this.g.hasOwnProperty(y)&&sr(f)},a),a.g={}}ws.prototype.N=function(){ws.aa.N.call(this),Oo(this)},ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jo=m.JSON.stringify,Lo=m.JSON.parse,Mo=class{stringify(a){return m.JSON.stringify(a,void 0)}parse(a){return m.JSON.parse(a,void 0)}};function xs(){}xs.prototype.h=null;function gi(a){return a.h||(a.h=a.i())}function Fo(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){te.call(this,"d")}B(Un,te);function yi(){te.call(this,"c")}B(yi,te);var lr={},Uo=null;function vi(){return Uo=Uo||new ct}lr.La="serverreachability";function zo(a){te.call(this,lr.La,a)}B(zo,te);function ar(a){const f=vi();ht(f,new zo(f))}lr.STAT_EVENT="statevent";function Vo(a,f){te.call(this,lr.STAT_EVENT,a),this.stat=f}B(Vo,te);function ot(a){const f=vi();ht(f,new Vo(f,a))}lr.Ma="timingevent";function _i(a,f){te.call(this,lr.Ma,a),this.size=f}B(_i,te);function gn(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},f)}function Es(){this.g=!0}Es.prototype.xa=function(){this.g=!1};function Ss(a,f,y,x,L,V){a.info(function(){if(a.g)if(V)for(var ee="",Ve=V.split("&"),dt=0;dt<Ve.length;dt++){var Ae=Ve[dt].split("=");if(1<Ae.length){var gt=Ae[0];Ae=Ae[1];var yt=gt.split("_");ee=2<=yt.length&&yt[1]=="type"?ee+(gt+"="+Ae+"&"):ee+(gt+"=redacted&")}}else ee=null;else ee=V;return"XMLHTTP REQ ("+x+") [attempt "+L+"]: "+f+`
`+y+`
`+ee})}function wi(a,f,y,x,L,V,ee){a.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+L+"]: "+f+`
`+y+`
`+V+" "+ee})}function yn(a,f,y,x){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Tc(a,y)+(x?" "+x:"")})}function Bo(a,f){a.info(function(){return"TIMEOUT: "+f})}Es.prototype.info=function(){};function Tc(a,f){if(!a.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(a=0;a<y.length;a++)if(Array.isArray(y[a])){var x=y[a];if(!(2>x.length)){var L=x[1];if(Array.isArray(L)&&!(1>L.length)){var V=L[0];if(V!="noop"&&V!="stop"&&V!="close")for(var ee=1;ee<L.length;ee++)L[ee]=""}}}}return jo(y)}catch{return f}}var Ho={NO_ERROR:0,TIMEOUT:8},Ic={},vn;function ks(){}B(ks,xs),ks.prototype.g=function(){return new XMLHttpRequest},ks.prototype.i=function(){return{}},vn=new ks;function _n(a,f,y,x){this.j=a,this.i=f,this.l=y,this.R=x||1,this.U=new ws(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fa}function fa(){this.i=null,this.g="",this.h=!1}var Wo={},xi={};function Ei(a,f,y){a.L=1,a.v=Ur(en(f)),a.m=y,a.P=!0,$o(a,null)}function $o(a,f){a.F=Date.now(),Ge(a),a.A=en(a.v);var y=a.A,x=a.R;Array.isArray(x)||(x=[String(x)]),Vr(y.i,"t",x),a.C=0,y=a.j.J,a.h=new fa,a.g=Aa(a.j,y?f:null,!a.m),0<a.O&&(a.M=new _s(S(a.Y,a,a.g),a.O)),f=a.U,y=a.g,x=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(Do[0]=L.toString()),L=Do);for(var V=0;V<L.length;V++){var ee=No(y,L[V],x||f.handleEvent,!1,f.h||f);if(!ee)break;f.g[ee.key]=ee}f=a.H?C(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),ar(),Ss(a.i,a.u,a.A,a.l,a.R,a.m)}_n.prototype.ca=function(a){a=a.target;const f=this.M;f&&Bt(a)==3?f.j():this.Y(a)},_n.prototype.Y=function(a){try{if(a==this.g)e:{const yt=Bt(this.g);var f=this.g.Ba();const Wn=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Xo(this.g)))){this.J||yt!=4||f==7||(f==8||0>=Wn?ar(3):ar(2)),Cs(this);var y=this.g.Z();this.X=y;t:if(pa(this)){var x=Xo(this.g);a="";var L=x.length,V=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),jr(this);var ee="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,a+=this.h.i.decode(x[f],{stream:!(V&&f==L-1)});x.length=0,this.h.g+=a,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=y==200,wi(this.i,this.u,this.A,this.l,this.R,yt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,dt=this.g;if((Ve=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Ve)){var Ae=Ve;break t}}Ae=null}if(y=Ae)yn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Go(this,y);else{this.o=!1,this.s=3,ot(12),ln(this),jr(this);break e}}if(this.P){y=!0;let Tt;for(;!this.J&&this.C<ee.length;)if(Tt=Nc(this,ee),Tt==xi){yt==4&&(this.s=4,ot(14),y=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==Wo){this.s=4,ot(15),yn(this.i,this.l,ee,"[Invalid Chunk]"),y=!1;break}else yn(this.i,this.l,Tt,null),Go(this,Tt);if(pa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||ee.length!=0||this.h.h||(this.s=1,ot(16),y=!1),this.o=this.o&&y,!y)yn(this.i,this.l,ee,"[Invalid Chunked Response]"),ln(this),jr(this);else if(0<ee.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),Zo(gt),gt.M=!0,ot(11))}}else yn(this.i,this.l,ee,null),Go(this,ee);yt==4&&ln(this),this.o&&!this.J&&(yt==4?Di(this.j,this):(this.o=!1,Ge(this)))}else Ni(this.g),y==400&&0<ee.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),ln(this),jr(this)}}}catch{}finally{}};function pa(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Nc(a,f){var y=a.C,x=f.indexOf(`
`,y);return x==-1?xi:(y=Number(f.substring(y,x)),isNaN(y)?Wo:(x+=1,x+y>f.length?xi:(f=f.slice(x,x+y),a.C=x+y,f)))}_n.prototype.cancel=function(){this.J=!0,ln(this)};function Ge(a){a.S=Date.now()+a.I,ma(a,a.I)}function ma(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=gn(S(a.ba,a),f)}function Cs(a){a.B&&(m.clearTimeout(a.B),a.B=null)}_n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Bo(this.i,this.A),this.L!=2&&(ar(),ot(17)),ln(this),this.s=2,jr(this)):ma(this,this.S-a)};function jr(a){a.j.G==0||a.J||Di(a.j,a)}function ln(a){Cs(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Oo(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Go(a,f){try{var y=a.j;if(y.G!=0&&(y.g==a||Lt(y.h,a))){if(!a.K&&Lt(y.h,a)&&y.G==3){try{var x=y.Da.g.parse(f)}catch{x=null}if(Array.isArray(x)&&x.length==3){var L=x;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<a.F)Pi(y),kn(y);else break e;Ai(y),ot(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=gn(S(y.Za,y),6e3));if(1>=ya(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else fr(y,11)}else if((a.K||y.g==a)&&Pi(y),!G(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let Ae=L[f];if(y.T=Ae[0],Ae=Ae[1],y.G==2)if(Ae[0]=="c"){y.K=Ae[1],y.ia=Ae[2];const gt=Ae[3];gt!=null&&(y.la=gt,y.j.info("VER="+y.la));const yt=Ae[4];yt!=null&&(y.Aa=yt,y.j.info("SVER="+y.Aa));const Wn=Ae[5];Wn!=null&&typeof Wn=="number"&&0<Wn&&(x=1.5*Wn,y.L=x,y.j.info("backChannelRequestTimeoutMs_="+x)),x=y;const Tt=a.g;if(Tt){const Oi=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oi){var V=x.h;V.g||Oi.indexOf("spdy")==-1&&Oi.indexOf("quic")==-1&&Oi.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(qo(V,V.h),V.h=null))}if(x.D){const ji=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;ji&&(x.ya=ji,He(x.I,x.D,ji))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-a.F,y.j.info("Handshake RTT: "+y.R+"ms")),x=y;var ee=a;if(x.qa=Ra(x,x.J?x.ia:null,x.W),ee.K){va(x.h,ee);var Ve=ee,dt=x.L;dt&&(Ve.I=dt),Ve.B&&(Cs(Ve),Ge(Ve)),x.g=ee}else As(x);0<y.i.length&&Hn(y)}else Ae[0]!="stop"&&Ae[0]!="close"||fr(y,7);else y.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?fr(y,7):Ct(y):Ae[0]!="noop"&&y.l&&y.l.ta(Ae),y.v=0)}}ar(4)}catch{}}var ga=class{constructor(a,f){this.g=a,this.map=f}};function Ts(a){this.l=a||10,m.PerformanceNavigationTiming?(a=m.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ya(a){return a.h?1:a.g?a.g.size:0}function Lt(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function qo(a,f){a.g?a.g.add(f):a.h=f}function va(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Ts.prototype.cancel=function(){if(this.i=_a(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function _a(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const y of a.g.values())f=f.concat(y.D);return f}return $(a.i)}function Si(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(v(a)){for(var f=[],y=a.length,x=0;x<y;x++)f.push(a[x]);return f}f=[],y=0;for(x in a)f[y++]=a[x];return f}function ki(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(v(a)||typeof a=="string"){var f=[];a=a.length;for(var y=0;y<a;y++)f.push(y);return f}f=[],y=0;for(const x in a)f[y++]=x;return f}}}function Lr(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(v(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var y=ki(a),x=Si(a),L=x.length,V=0;V<L;V++)f.call(void 0,x[V],y&&y[V],a)}var Is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(a,f){if(a){a=a.split("&");for(var y=0;y<a.length;y++){var x=a[y].indexOf("="),L=null;if(0<=x){var V=a[y].substring(0,x);L=a[y].substring(x+1)}else V=a[y];f(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ur){this.h=a.h,Ns(this,a.j),this.o=a.o,this.g=a.g,Mr(this,a.s),this.l=a.l;var f=a.i,y=new zn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Fr(this,y),this.m=a.m}else a&&(f=String(a).match(Is))?(this.h=!1,Ns(this,f[1]||"",!0),this.o=be(f[2]||""),this.g=be(f[3]||"",!0),Mr(this,f[4]),this.l=be(f[5]||"",!0),Fr(this,f[6]||"",!0),this.m=be(f[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}ur.prototype.toString=function(){var a=[],f=this.j;f&&a.push(zr(f,Ci,!0),":");var y=this.g;return(y||f=="file")&&(a.push("//"),(f=this.o)&&a.push(zr(f,Ci,!0),"@"),a.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&a.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&a.push("/"),a.push(zr(y,y.charAt(0)=="/"?Ea:xa,!0))),(y=this.i.toString())&&a.push("?",y),(y=this.m)&&a.push("#",zr(y,Ko)),a.join("")};function en(a){return new ur(a)}function Ns(a,f,y){a.j=y?be(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Mr(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Fr(a,f,y){f instanceof zn?(a.i=f,Vn(a.i,a.h)):(y||(f=zr(f,Sa)),a.i=new zn(f,a.h))}function He(a,f,y){a.i.set(f,y)}function Ur(a){return He(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function be(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zr(a,f,y){return typeof a=="string"?(a=encodeURI(a).replace(f,wa),y&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wa(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ci=/[#\/\?@]/g,xa=/[#\?:]/g,Ea=/[#\?]/g,Sa=/[#\?@]/g,Ko=/#/g;function zn(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function kt(a){a.g||(a.g=new Map,a.h=0,a.i&&bc(a.i,function(f,y){a.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=zn.prototype,r.add=function(a,f){kt(this),this.i=null,a=an(this,a);var y=this.g.get(a);return y||this.g.set(a,y=[]),y.push(f),this.h+=1,this};function wn(a,f){kt(a),f=an(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function xn(a,f){return kt(a),f=an(a,f),a.g.has(f)}r.forEach=function(a,f){kt(this),this.g.forEach(function(y,x){y.forEach(function(L){a.call(f,L,x,this)},this)},this)},r.na=function(){kt(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let x=0;x<f.length;x++){const L=a[x];for(let V=0;V<L.length;V++)y.push(f[x])}return y},r.V=function(a){kt(this);let f=[];if(typeof a=="string")xn(this,a)&&(f=f.concat(this.g.get(an(this,a))));else{a=Array.from(this.g.values());for(let y=0;y<a.length;y++)f=f.concat(a[y])}return f},r.set=function(a,f){return kt(this),this.i=null,a=an(this,a),xn(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},r.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Vr(a,f,y){wn(a,f),0<y.length&&(a.i=null,a.g.set(an(a,f),$(y)),a.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var x=f[y];const V=encodeURIComponent(String(x)),ee=this.V(x);for(x=0;x<ee.length;x++){var L=V;ee[x]!==""&&(L+="="+encodeURIComponent(String(ee[x]))),a.push(L)}}return this.i=a.join("&")};function an(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Vn(a,f){f&&!a.j&&(kt(a),a.i=null,a.g.forEach(function(y,x){var L=x.toLowerCase();x!=L&&(wn(this,x),Vr(this,L,y))},a)),a.j=f}function Rc(a,f){const y=new Es;if(m.Image){const x=new Image;x.onload=U(Vt,y,"TestLoadImage: loaded",!0,f,x),x.onerror=U(Vt,y,"TestLoadImage: error",!1,f,x),x.onabort=U(Vt,y,"TestLoadImage: abort",!1,f,x),x.ontimeout=U(Vt,y,"TestLoadImage: timeout",!1,f,x),m.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=a}else f(!1)}function ka(a,f){const y=new Es,x=new AbortController,L=setTimeout(()=>{x.abort(),Vt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:x.signal}).then(V=>{clearTimeout(L),V.ok?Vt(y,"TestPingServer: ok",!0,f):Vt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Vt(y,"TestPingServer: error",!1,f)})}function Vt(a,f,y,x,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),x(y)}catch{}}function Ac(){this.g=new Mo}function Ca(a,f,y){const x=y||"";try{Lr(a,function(L,V){let ee=L;w(L)&&(ee=jo(L)),f.push(x+V+"="+encodeURIComponent(ee))})}catch(L){throw f.push(x+"type="+encodeURIComponent("_badmap")),L}}function cr(a){this.l=a.Ub||null,this.j=a.eb||!1}B(cr,xs),cr.prototype.g=function(){return new bs(this.l,this.j)},cr.prototype.i=function(a){return function(){return a}}({});function bs(a,f){ct.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(bs,ct),r=bs.prototype,r.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Sn(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,En(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ta(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ta(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?En(this):Sn(this),this.readyState==3&&Ta(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,En(this))},r.Qa=function(a){this.g&&(this.response=a,En(this))},r.ga=function(){this.g&&En(this)};function En(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Sn(a)}r.setRequestHeader=function(a,f){this.u.append(a,f)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,a.push(y[0]+": "+y[1]),y=f.next();return a.join(`\r
`)};function Sn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(bs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hr(a){let f="";return ne(a,function(y,x){f+=x,f+=":",f+=y,f+=`\r
`}),f}function Br(a,f,y){e:{for(x in y){var x=!1;break e}x=!0}x||(y=hr(y),typeof a=="string"?y!=null&&encodeURIComponent(String(y)):He(a,f,y))}function Ze(a){ct.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Ze,ct);var Pc=/^https?$/i,Yo=["POST","PUT"];r=Ze.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,f,y,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vn.g(),this.v=this.o?gi(this.o):gi(vn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(V){Rs(this,V);return}if(a=y||"",y=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var L in x)y.set(L,x[L]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const V of x.keys())y.set(V,x.get(V));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(y.keys()).find(V=>V.toLowerCase()=="content-type"),L=m.FormData&&a instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Yo,f,void 0))||x||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,ee]of y)this.g.setRequestHeader(V,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ii(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Rs(this,V)}};function Rs(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,Ti(a),tn(a)}function Ti(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ht(this,"complete"),ht(this,"abort"),tn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Ze.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Qo(this):this.bb())},r.bb=function(){Qo(this)};function Qo(a){if(a.h&&typeof h<"u"&&(!a.v[1]||Bt(a)!=4||a.Z()!=2)){if(a.u&&Bt(a)==4)Po(a.Ea,0,a);else if(ht(a,"readystatechange"),Bt(a)==4){a.h=!1;try{const ee=a.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var x;if(x=ee===0){var L=String(a.D).match(Is)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),x=!Pc.test(L?L.toLowerCase():"")}y=x}if(y)ht(a,"complete"),ht(a,"success");else{a.m=6;try{var V=2<Bt(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Ti(a)}}finally{tn(a)}}}}function tn(a,f){if(a.g){Ii(a);const y=a.g,x=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||ht(a,"ready");try{y.onreadystatechange=x}catch{}}}function Ii(a){a.I&&(m.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Bt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Lo(f)}};function Xo(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ni(a){const f={};a=(a.g&&2<=Bt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<a.length;x++){if(G(a[x]))continue;var y=R(a[x]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const V=f[L]||[];f[L]=V,V.push(y)}P(f,function(x){return x.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(a,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[a]||f}function Jo(a){this.Aa=0,this.i=[],this.j=new Es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,a),this.cb=Bn("retryDelaySeedMs",1e4,a),this.Wa=Bn("forwardChannelMaxRetries",2,a),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ts(a&&a.concurrentRequestLimit),this.Da=new Ac,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Jo.prototype,r.la=8,r.G=1,r.connect=function(a,f,y,x){ot(0),this.W=a,this.H=f||{},y&&x!==void 0&&(this.H.OSID=y,this.H.OAID=x),this.F=this.X,this.I=Ra(this,null,this.W),Hn(this)};function Ct(a){if(bi(a),a.G==3){var f=a.U++,y=en(a.I);if(He(y,"SID",a.K),He(y,"RID",f),He(y,"TYPE","terminate"),dr(a,y),f=new _n(a,a.j,f),f.L=2,f.v=Ur(en(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=Aa(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ge(f)}ba(a)}function kn(a){a.g&&(Zo(a),a.g.cancel(),a.g=null)}function bi(a){kn(a),a.u&&(m.clearTimeout(a.u),a.u=null),Pi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&m.clearTimeout(a.s),a.s=null)}function Hn(a){if(!Zt(a.h)&&!a.s){a.s=!0;var f=a.Ga;ye||re(),Y||(ye(),Y=!0),oe.add(f,a),a.B=0}}function Dc(a,f){return ya(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=gn(S(a.Ga,a,f),Na(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new _n(this,this.j,a);let V=this.o;if(this.S&&(V?(V=C(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(L.H=V,V=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var x=this.i[y];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(f+=x,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Hr(this,L,f),y=en(this.I),He(y,"RID",a),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),dr(this,y),V&&(this.O?f="headers="+encodeURIComponent(String(hr(V)))+"&"+f:this.m&&Br(y,this.m,V)),qo(this.h,L),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",f),He(y,"SID","null"),L.T=!0,Ei(L,y,null)):Ei(L,y,f),this.G=2}}else this.G==3&&(a?Ri(this,a):this.i.length==0||Zt(this.h)||Ri(this))};function Ri(a,f){var y;f?y=f.l:y=a.U++;const x=en(a.I);He(x,"SID",a.K),He(x,"RID",y),He(x,"AID",a.T),dr(a,x),a.m&&a.o&&Br(x,a.m,a.o),y=new _n(a,a.j,y,a.B+1),a.m===null&&(y.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Hr(a,y,1e3),y.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),qo(a.h,y),Ei(y,x,f)}function dr(a,f){a.H&&ne(a.H,function(y,x){He(f,x,y)}),a.l&&Lr({},function(y,x){He(f,x,y)})}function Hr(a,f,y){y=Math.min(a.i.length,y);var x=a.l?S(a.l.Na,a.l,a):null;e:{var L=a.i;let V=-1;for(;;){const ee=["count="+y];V==-1?0<y?(V=L[0].g,ee.push("ofs="+V)):V=0:ee.push("ofs="+V);let Ve=!0;for(let dt=0;dt<y;dt++){let Ae=L[dt].g;const gt=L[dt].map;if(Ae-=V,0>Ae)V=Math.max(0,L[dt].g-100),Ve=!1;else try{Ca(gt,ee,"req"+Ae+"_")}catch{x&&x(gt)}}if(Ve){x=ee.join("&");break e}}}return a=a.i.splice(0,y),f.D=a,x}function As(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;ye||re(),Y||(ye(),Y=!0),oe.add(f,a),a.v=0}}function Ai(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=gn(S(a.Fa,a),Na(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Ia(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=gn(S(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),kn(this),Ia(this))};function Zo(a){a.A!=null&&(m.clearTimeout(a.A),a.A=null)}function Ia(a){a.g=new _n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=en(a.qa);He(f,"RID","rpc"),He(f,"SID",a.K),He(f,"AID",a.T),He(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&He(f,"TO",a.ja),He(f,"TYPE","xmlhttp"),dr(a,f),a.m&&a.o&&Br(f,a.m,a.o),a.L&&(a.g.I=a.L);var y=a.g;a=a.ia,y.L=1,y.v=Ur(en(f)),y.m=null,y.P=!0,$o(y,a)}r.Za=function(){this.C!=null&&(this.C=null,kn(this),Ai(this),ot(19))};function Pi(a){a.C!=null&&(m.clearTimeout(a.C),a.C=null)}function Di(a,f){var y=null;if(a.g==f){Pi(a),Zo(a),a.g=null;var x=2}else if(Lt(a.h,f))y=f.D,va(a.h,f),x=1;else return;if(a.G!=0){if(f.o)if(x==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=a.B;x=vi(),ht(x,new _i(x,y)),Hn(a)}else As(a);else if(L=f.s,L==3||L==0&&0<f.X||!(x==1&&Dc(a,f)||x==2&&Ai(a)))switch(y&&0<y.length&&(f=a.h,f.i=f.i.concat(y)),L){case 1:fr(a,5);break;case 4:fr(a,10);break;case 3:fr(a,6);break;default:fr(a,2)}}}function Na(a,f){let y=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(y*=2),y*f}function fr(a,f){if(a.j.info("Error code "+f),f==2){var y=S(a.fb,a),x=a.Xa;const L=!x;x=new ur(x||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ns(x,"https"),Ur(x),L?Rc(x.toString(),y):ka(x.toString(),y)}else ot(2);a.G=0,a.l&&a.l.sa(f),ba(a),bi(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function ba(a){if(a.G=0,a.ka=[],a.l){const f=_a(a.h);(f.length!=0||a.i.length!=0)&&(W(a.ka,f),W(a.ka,a.i),a.h.i.length=0,$(a.i),a.i.length=0),a.l.ra()}}function Ra(a,f,y){var x=y instanceof ur?en(y):new ur(y);if(x.g!="")f&&(x.g=f+"."+x.g),Mr(x,x.s);else{var L=m.location;x=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var V=new ur(null);x&&Ns(V,x),f&&(V.g=f),L&&Mr(V,L),y&&(V.l=y),x=V}return y=a.D,f=a.ya,y&&f&&He(x,y,f),He(x,"VER",a.la),dr(a,x),x}function Aa(a,f,y){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new Ze(new cr({eb:y})):new Ze(a.pa),f.Ha(a.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function el(){}r=el.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ht(a,f){ct.call(this),this.g=new Jo(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!G(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!G(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Wr(this)}B(Ht,ct),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Ct(this.g)},Ht.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var y={};y.__data__=a,a=y}else this.u&&(y={},y.__data__=jo(a),a=y);f.i.push(new ga(f.Ya++,a)),f.G==3&&Hn(f)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,Ht.aa.N.call(this)};function Pa(a){Un.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const y in f){a=y;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}B(Pa,Un);function Da(){yi.call(this),this.status=1}B(Da,yi);function Wr(a){this.g=a}B(Wr,el),Wr.prototype.ua=function(){ht(this.g,"a")},Wr.prototype.ta=function(a){ht(this.g,new Pa(a))},Wr.prototype.sa=function(a){ht(this.g,new Da)},Wr.prototype.ra=function(){ht(this.g,"b")},Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Ho.NO_ERROR=0,Ho.TIMEOUT=8,Ho.HTTP_ERROR=6,Ic.COMPLETE="complete",Fo.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha}).apply(typeof Au<"u"?Au:typeof self<"u"?self:typeof window<"u"?window:{});const zy="@firebase/firestore",Vy="4.8.0";/**
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
 */let ca="11.10.0";/**
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
 */const xo=new mc("@firebase/firestore");function Ln(r,...e){if(xo.logLevel<=Ue.DEBUG){const t=e.map(ep);xo.debug(`Firestore (${ca}): ${r}`,...t)}}function d0(r,...e){if(xo.logLevel<=Ue.ERROR){const t=e.map(ep);xo.error(`Firestore (${ca}): ${r}`,...t)}}function vT(r,...e){if(xo.logLevel<=Ue.WARN){const t=e.map(ep);xo.warn(`Firestore (${ca}): ${r}`,...t)}}function ep(r){if(typeof r=="string")return r;try{/**
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
 */function Zl(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,f0(r,i,t)}function f0(r,e,t){let i=`FIRESTORE (${ca}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw d0(i),new Error(i)}function Fl(r,e,t,i){let l="Unexpected state";typeof t=="string"?l=t:i=t,r||f0(e,l,i)}/**
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
 */const De={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Oe extends Pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class p0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ut.UNAUTHENTICATED))}shutdown(){}}class wT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xT{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fl(this.o===void 0,42304);let i=this.i;const l=v=>this.i!==i?(i=this.i,t(v)):Promise.resolve();let c=new Ul;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ul,e.enqueueRetryable(()=>l(this.currentUser))};const h=()=>{const v=c;e.enqueueRetryable(async()=>{await v.promise,await l(this.currentUser)})},m=v=>{Ln("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(v=>m(v)),setTimeout(()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?m(v):(Ln("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ul)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(Ln("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fl(typeof i.accessToken=="string",31837,{l:i}),new p0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fl(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class ET{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ST{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new ET(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class By{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fl(this.o===void 0,3512);const i=c=>{c.error!=null&&Ln("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,Ln("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>i(c))};const l=c=>{Ln("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):Ln("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new By(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fl(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new By(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function CT(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function TT(){return new TextEncoder}/**
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
 */class IT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const l=CT(40);for(let c=0;c<l.length;++c)i.length<20&&l[c]<t&&(i+=e.charAt(l[c]%62))}return i}}function Fn(r,e){return r<e?-1:r>e?1:0}function NT(r,e){let t=0;for(;t<r.length&&t<e.length;){const i=r.codePointAt(t),l=e.codePointAt(t);if(i!==l){if(i<128&&l<128)return Fn(i,l);{const c=TT(),h=bT(c.encode(Hy(r,t)),c.encode(Hy(e,t)));return h!==0?h:Fn(i,l)}}t+=i>65535?2:1}return Fn(r.length,e.length)}function Hy(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function bT(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Fn(r[t],e[t]);return Fn(r.length,e.length)}/**
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
 */const Wy="__name__";class Yn{constructor(e,t,i){t===void 0?t=0:t>e.length&&Zl(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Zl(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let l=0;l<i;l++){const c=Yn.compareSegments(e.get(l),t.get(l));if(c!==0)return c}return Fn(e.length,t.length)}static compareSegments(e,t){const i=Yn.isNumericId(e),l=Yn.isNumericId(t);return i&&!l?-1:!i&&l?1:i&&l?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):NT(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zf.fromString(e.substring(4,e.length-2))}}class An extends Yn{construct(e,t,i){return new An(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new Oe(De.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(l=>l.length>0))}return new An(t)}static emptyPath(){return new An([])}}const RT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gs extends Yn{construct(e,t,i){return new Gs(e,t,i)}static isValidIdentifier(e){return RT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gs.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wy}static keyField(){return new Gs([Wy])}static fromServerFormat(e){const t=[];let i="",l=0;const c=()=>{if(i.length===0)throw new Oe(De.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;l<e.length;){const m=e[l];if(m==="\\"){if(l+1===e.length)throw new Oe(De.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const v=e[l+1];if(v!=="\\"&&v!=="."&&v!=="`")throw new Oe(De.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=v,l+=2}else m==="`"?(h=!h,l++):m!=="."||h?(i+=m,l++):(c(),l++)}if(c(),h)throw new Oe(De.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gs(t)}static emptyPath(){return new Gs([])}}/**
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
 */class Qs{constructor(e){this.path=e}static fromPath(e){return new Qs(An.fromString(e))}static fromName(e){return new Qs(An.fromString(e).popFirst(5))}static empty(){return new Qs(An.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&An.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return An.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Qs(new An(e.slice()))}}function AT(r,e,t,i){if(e===!0&&i===!0)throw new Oe(De.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function PT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function DT(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Zl(12329,{type:typeof r})}function OT(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new Oe(De.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=DT(r);throw new Oe(De.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function ut(r,e){const t={typeString:r};return e&&(t.value=e),t}function ha(r,e){if(!PT(r))throw new Oe(De.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const l=e[i].typeString,c="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(l&&typeof h!==l){t=`JSON field '${i}' must be a ${l}.`;break}if(c!==void 0&&h!==c.value){t=`Expected '${i}' field to equal '${c.value}'`;break}}if(t)throw new Oe(De.INVALID_ARGUMENT,t);return!0}/**
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
 */const $y=-62135596800,Gy=1e6;class Qn{static now(){return Qn.fromMillis(Date.now())}static fromDate(e){return Qn.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Gy);return new Qn(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Oe(De.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Oe(De.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$y)throw new Oe(De.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Oe(De.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gy}_compareTo(e){return this.seconds===e.seconds?Fn(this.nanoseconds,e.nanoseconds):Fn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qn._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ha(e,Qn._jsonSchema))return new Qn(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$y;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qn._jsonSchemaVersion="firestore/timestamp/1.0",Qn._jsonSchema={type:ut("string",Qn._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};function jT(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class LT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class oi{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new LT("Invalid base64 string: "+c):c}}(e);return new oi(t)}static fromUint8Array(e){const t=function(l){let c="";for(let h=0;h<l.length;++h)c+=String.fromCharCode(l[h]);return c}(e);return new oi(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let l=0;l<t.length;l++)i[l]=t.charCodeAt(l);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}oi.EMPTY_BYTE_STRING=new oi("");const $d="(default)";class hc{constructor(e,t){this.projectId=e,this.database=t||$d}static empty(){return new hc("","")}get isDefaultDatabase(){return this.database===$d}isEqual(e){return e instanceof hc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class MT{constructor(e,t=null,i=[],l=[],c=null,h="F",m=null,v=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=l,this.limit=c,this.limitType=h,this.startAt=m,this.endAt=v,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function FT(r){return new MT(r)}/**
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
 */var qy,Pe;(Pe=qy||(qy={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Zf([4294967295,4294967295],0);/**
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
 */const UT=41943040;/**
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
 */const zT=1048576;function _d(){return typeof document<"u"?document:null}/**
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
 */class VT{constructor(e,t,i=1e3,l=1.5,c=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=l,this.A_=c,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),l=Math.max(0,t-i);l>0&&Ln("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,l,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */class tp{constructor(e,t,i,l,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=l,this.removalCallback=c,this.deferred=new Ul,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,l,c){const h=Date.now()+i,m=new tp(e,t,h,l,c);return m.start(i),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Oe(De.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ky,Yy;(Yy=Ky||(Ky={})).Fa="default",Yy.Cache="cache";/**
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
 */function BT(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Qy=new Map;/**
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
 */const m0="firestore.googleapis.com",Xy=!0;class Jy{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Oe(De.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=m0,this.ssl=Xy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Xy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=UT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zT)throw new Oe(De.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=BT((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new Oe(De.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new Oe(De.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new Oe(De.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,l){return i.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class g0{constructor(e,t,i,l){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Oe(De.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Oe(De.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new _T;switch(i.type){case"firstParty":return new ST(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Oe(De.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Qy.get(t);i&&(Ln("ComponentProvider","Removing Datastore"),Qy.delete(t),i.terminate())}(this),Promise.resolve()}}function HT(r,e,t,i={}){var l;r=OT(r,g0);const c=li(e),h=r._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),v=`${e}:${t}`;c&&(ef(`https://${v}`),tf("Firestore",!0)),h.host!==m0&&h.host!==v&&vT("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const w=Object.assign(Object.assign({},h),{host:v,ssl:c,emulatorOptions:i});if(!fs(w,m)&&(r._setSettings(w),i.mockUserToken)){let k,E;if(typeof i.mockUserToken=="string")k=i.mockUserToken,E=Ut.MOCK_USER;else{k=_v(i.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new Oe(De.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Ut(S)}r._authCredentials=new wT(new p0(k,E))}}/**
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
 */class np{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new np(this.firestore,e,this._query)}}class Xn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xn(this.firestore,e,this._key)}toJSON(){return{type:Xn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(ha(t,Xn._jsonSchema))return new Xn(e,i||null,new Qs(An.fromString(t.referencePath)))}}Xn._jsonSchemaVersion="firestore/documentReference/1.0",Xn._jsonSchema={type:ut("string",Xn._jsonSchemaVersion),referencePath:ut("string")};class rp extends np{constructor(e,t,i){super(e,t,FT(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xn(this.firestore,null,new Qs(e))}withConverter(e){return new rp(this.firestore,e,this._path)}}/**
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
 */const Zy="AsyncQueue";class ev{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new VT(this,"async_queue_retry"),this.oc=()=>{const i=_d();i&&Ln(Zy,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=_d();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=_d();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Ul;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!jT(e))throw e;Ln(Zy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(i=>{throw this.tc=i,this.nc=!1,d0("INTERNAL UNHANDLED ERROR: ",tv(i)),i}).then(i=>(this.nc=!1,i))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const l=tp.createAndSchedule(this,e,t,i,c=>this.lc(c));return this.ec.push(l),l}ac(){this.tc&&Zl(47125,{hc:tv(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function tv(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class WT extends g0{constructor(e,t,i,l){super(e,t,i,l),this.type="firestore",this._queue=new ev,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ev(e),this._firestoreClient=void 0,await e}}}function $T(r,e){const t=typeof r=="object"?r:of(),i=typeof r=="string"?r:$d,l=gc(t,"firestore").getImmediate({identifier:i});if(!l._initialized){const c=gv("firestore");c&&HT(l,...c)}return l}/**
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
 */class Er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Er(oi.fromBase64String(e))}catch(t){throw new Oe(De.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Er(oi.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Er._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ha(e,Er._jsonSchema))return Er.fromBase64String(e.bytes)}}Er._jsonSchemaVersion="firestore/bytes/1.0",Er._jsonSchema={type:ut("string",Er._jsonSchemaVersion),bytes:ut("string")};/**
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
 */class y0{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Oe(De.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gs(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Js{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Oe(De.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Oe(De.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fn(this._lat,e._lat)||Fn(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Js._jsonSchemaVersion}}static fromJSON(e){if(ha(e,Js._jsonSchema))return new Js(e.latitude,e.longitude)}}Js._jsonSchemaVersion="firestore/geoPoint/1.0",Js._jsonSchema={type:ut("string",Js._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
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
 */class Zs{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,l){if(i.length!==l.length)return!1;for(let c=0;c<i.length;++c)if(i[c]!==l[c])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Zs._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ha(e,Zs._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Zs(e.vectorValues);throw new Oe(De.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zs._jsonSchemaVersion="firestore/vectorValue/1.0",Zs._jsonSchema={type:ut("string",Zs._jsonSchemaVersion),vectorValues:ut("object")};const GT=new RegExp("[~\\*/\\[\\]]");function qT(r,e,t){if(e.search(GT)>=0)throw nv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new y0(...e.split("."))._internalPath}catch{throw nv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function nv(r,e,t,i,l){let c=`Function ${e}() called with invalid data`;c+=". ";let h="";return new Oe(De.INVALID_ARGUMENT,c+r+h)}/**
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
 */class v0{constructor(e,t,i,l,c){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(_0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class KT extends v0{data(){return super.data()}}function _0(r,e){return typeof e=="string"?qT(r,e):e instanceof y0?e._internalPath:e._delegate._internalPath}class Pu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class po extends v0{constructor(e,t,i,l,c,h){super(e,t,i,l,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Uu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(_0("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Oe(De.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=po._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}po._jsonSchemaVersion="firestore/documentSnapshot/1.0",po._jsonSchema={type:ut("string",po._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class Uu extends po{data(e={}){return super.data(e)}}class zl{constructor(e,t,i,l){this._firestore=e,this._userDataWriter=t,this._snapshot=l,this.metadata=new Pu(l.hasPendingWrites,l.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Uu(this._firestore,this._userDataWriter,i.key,i,new Pu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Oe(De.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let h=0;return l._snapshot.docChanges.map(m=>{const v=new Uu(l._firestore,l._userDataWriter,m.doc.key,m.doc,new Pu(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);return m.doc,{type:"added",doc:v,oldIndex:-1,newIndex:h++}})}{let h=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(m=>c||m.type!==3).map(m=>{const v=new Uu(l._firestore,l._userDataWriter,m.doc.key,m.doc,new Pu(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);let w=-1,k=-1;return m.type!==0&&(w=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),k=h.indexOf(m.doc.key)),{type:YT(m.type),doc:v,oldIndex:w,newIndex:k}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Oe(De.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=IT.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],l=[];return this.docs.forEach(c=>{c._document!==null&&(t.push(c._document),i.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function YT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Zl(61501,{type:r})}}zl._jsonSchemaVersion="firestore/querySnapshot/1.0",zl._jsonSchema={type:ut("string",zl._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};(function(e,t=!0){(function(l){ca=l})(ai),ei(new ps("firestore",(i,{instanceIdentifier:l,options:c})=>{const h=i.getProvider("app").getImmediate(),m=new WT(new xT(i.getProvider("auth-internal")),new kT(h,i.getProvider("app-check-internal")),function(w,k){if(!Object.prototype.hasOwnProperty.apply(w.options,["projectId"]))throw new Oe(De.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hc(w.options.projectId,k)}(h,l),h);return c=Object.assign({useFetchStreams:t},c),m._setSettings(c),m},"PUBLIC").setMultipleInstances(!0)),Jn(zy,Vy,e),Jn(zy,Vy,"esm2017")})();const QT={apiKey:"AIzaSyCTA3NZsYoSeGskrIL_2isF2aCqLpEsRYc",authDomain:"rbgh-app.firebaseapp.com",databaseURL:"https://rbgh-app-default-rtdb.europe-west1.firebasedatabase.app",projectId:"rbgh-app",storageBucket:"rbgh-app.firebasestorage.app",messagingSenderId:"955092745966",appId:"1:955092745966:web:237adaa1a37752a93ebdff",measurementId:"G-004FZK6EXT"},sp=kv(QT);gT(sp);const Du=m2(sp);$T(sp);const XT=({user:r,onClose:e})=>{const t=ae.useRef(null);return ae.useEffect(()=>{const i=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[e]),g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4",children:g.jsxs("div",{ref:t,className:"bg-bg rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg p-6 relative border border-default",children:[g.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-subtle hover:text-default",children:g.jsx(dc,{className:"w-5 h-5"})}),g.jsx("div",{className:"flex justify-center -mt-16",children:g.jsx("img",{src:r.avatar,alt:`${r.name}'s avatar`,onError:i=>{i.currentTarget.onerror=null,i.currentTarget.style.display="none";const l=i.currentTarget.parentElement;if(l&&!l.querySelector(".fallback-avatar")){const c=document.createElement("span");c.className="fallback-avatar flex items-center justify-center w-32 h-32 rounded-full bg-subtle border-4 border-bg shadow-lg",c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146"/></svg>',l.appendChild(c)}},className:"w-32 h-32 rounded-full border-4 border-bg shadow-lg"})}),g.jsx("h2",{className:"text-xl font-bold text-default mt-4 text-center",children:r.name}),g.jsxs("div",{className:"space-y-2 mt-4",children:[g.jsxs("p",{className:"text-sm text-subtle",children:[g.jsx("strong",{children:"Username:"})," ",r.username]}),g.jsxs("p",{className:"text-sm text-subtle",children:[g.jsx("strong",{children:"Last Check-in:"})," ",r.location," at ",r.checkedInAt.toLocaleString()]}),g.jsxs("p",{className:"text-sm text-subtle",children:[g.jsx("strong",{children:"Email:"})," ",r.email||"N/A"]}),g.jsxs("p",{className:"text-sm text-subtle",children:[g.jsx("strong",{children:"Phone:"})," ",r.phoneNumber||"N/A"]}),g.jsxs("p",{className:"text-sm text-subtle",children:[g.jsx("strong",{children:"Discord:"})," ",r.discordUsername||"N/A"]}),g.jsxs("p",{className:"text-sm text-subtle",children:[g.jsx("strong",{children:"Friends:"})," ",r.friendCount||0]})]})]})})},JT="Left",ZT="Right",eI="Up",tI="Down",oo={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},Gd={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},rv="mousemove",sv="mouseup",nI="touchend",rI="touchmove",sI="touchstart";function iI(r,e,t,i){return r>e?t>0?ZT:JT:i>0?tI:eI}function iv(r,e){if(e===0)return r;const t=Math.PI/180*e,i=r[0]*Math.cos(t)+r[1]*Math.sin(t),l=r[1]*Math.cos(t)-r[0]*Math.sin(t);return[i,l]}function oI(r,e){const t=k=>{const E="touches"in k;E&&k.touches.length>1||r((S,U)=>{U.trackMouse&&!E&&(document.addEventListener(rv,i),document.addEventListener(sv,h));const{clientX:B,clientY:$}=E?k.touches[0]:k,W=iv([B,$],U.rotationAngle);return U.onTouchStartOrOnMouseDown&&U.onTouchStartOrOnMouseDown({event:k}),Object.assign(Object.assign(Object.assign({},S),Gd),{initial:W.slice(),xy:W,start:k.timeStamp||0})})},i=k=>{r((E,S)=>{const U="touches"in k;if(U&&k.touches.length>1)return E;if(k.timeStamp-E.start>S.swipeDuration)return E.swiping?Object.assign(Object.assign({},E),{swiping:!1}):E;const{clientX:B,clientY:$}=U?k.touches[0]:k,[W,fe]=iv([B,$],S.rotationAngle),G=W-E.xy[0],he=fe-E.xy[1],de=Math.abs(G),J=Math.abs(he),ne=(k.timeStamp||0)-E.start,P=Math.sqrt(de*de+J*J)/(ne||1),C=[G/(ne||1),he/(ne||1)],N=iI(de,J,G,he),A=typeof S.delta=="number"?S.delta:S.delta[N.toLowerCase()]||oo.delta;if(de<A&&J<A&&!E.swiping)return E;const R={absX:de,absY:J,deltaX:G,deltaY:he,dir:N,event:k,first:E.first,initial:E.initial,velocity:P,vxvy:C};R.first&&S.onSwipeStart&&S.onSwipeStart(R),S.onSwiping&&S.onSwiping(R);let O=!1;return(S.onSwiping||S.onSwiped||S[`onSwiped${N}`])&&(O=!0),O&&S.preventScrollOnSwipe&&S.trackTouch&&k.cancelable&&k.preventDefault(),Object.assign(Object.assign({},E),{first:!1,eventData:R,swiping:!0})})},l=k=>{r((E,S)=>{let U;if(E.swiping&&E.eventData){if(k.timeStamp-E.start<S.swipeDuration){U=Object.assign(Object.assign({},E.eventData),{event:k}),S.onSwiped&&S.onSwiped(U);const B=S[`onSwiped${U.dir}`];B&&B(U)}}else S.onTap&&S.onTap({event:k});return S.onTouchEndOrOnMouseUp&&S.onTouchEndOrOnMouseUp({event:k}),Object.assign(Object.assign(Object.assign({},E),Gd),{eventData:U})})},c=()=>{document.removeEventListener(rv,i),document.removeEventListener(sv,h)},h=k=>{c(),l(k)},m=(k,E)=>{let S=()=>{};if(k&&k.addEventListener){const U=Object.assign(Object.assign({},oo.touchEventOptions),E.touchEventOptions),B=[[sI,t,U],[rI,i,Object.assign(Object.assign({},U),E.preventScrollOnSwipe?{passive:!1}:{})],[nI,l,U]];B.forEach(([$,W,fe])=>k.addEventListener($,W,fe)),S=()=>B.forEach(([$,W])=>k.removeEventListener($,W))}return S},w={ref:k=>{k!==null&&r((E,S)=>{if(E.el===k)return E;const U={};return E.el&&E.el!==k&&E.cleanUpTouch&&(E.cleanUpTouch(),U.cleanUpTouch=void 0),S.trackTouch&&k&&(U.cleanUpTouch=m(k,S)),Object.assign(Object.assign(Object.assign({},E),{el:k}),U)})}};return e.trackMouse&&(w.onMouseDown=t),[w,m]}function lI(r,e,t,i){return!e.trackTouch||!r.el?(r.cleanUpTouch&&r.cleanUpTouch(),Object.assign(Object.assign({},r),{cleanUpTouch:void 0})):r.cleanUpTouch?e.preventScrollOnSwipe!==t.preventScrollOnSwipe||e.touchEventOptions.passive!==t.touchEventOptions.passive?(r.cleanUpTouch(),Object.assign(Object.assign({},r),{cleanUpTouch:i(r.el,e)})):r:Object.assign(Object.assign({},r),{cleanUpTouch:i(r.el,e)})}function ip(r){const{trackMouse:e}=r,t=ae.useRef(Object.assign({},Gd)),i=ae.useRef(Object.assign({},oo)),l=ae.useRef(Object.assign({},i.current));l.current=Object.assign({},i.current),i.current=Object.assign(Object.assign({},oo),r);let c;for(c in oo)i.current[c]===void 0&&(i.current[c]=oo[c]);const[h,m]=ae.useMemo(()=>oI(v=>t.current=v(t.current,i.current),{trackMouse:e}),[e]);return t.current=lI(t.current,i.current,l.current,m),h}const aI=({onCheckIn:r,onCheckOut:e,isCheckedIn:t,isSidebarOpen:i,setIsSidebarOpen:l,onShowQR:c,onOpenFridge:h})=>{const[m,v]=ae.useState("PXL"),[w,k]=ae.useState(0),[E,S]=ae.useState(!1),U=[{id:"RBGH",name:"RBGH",icon:g.jsx(r1,{className:"w-4 h-4"})},{id:"PXL",name:"PXL",icon:g.jsx(s1,{className:"w-4 h-4"})},{id:"STREAM",name:"Streaming Room",icon:g.jsx(p1,{className:"w-4 h-4"})}],B=()=>{const W=Array(w).fill("").map((fe,G)=>`friend_${G+1}`);r(m,W),l(!1)},$=ip({onSwipedLeft:()=>{l(!1)},trackTouch:!0,trackMouse:!1});return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"fixed bottom-[5.5rem] right-4 z-50 w-full",children:g.jsxs("div",{className:"max-w-[80rem] mx-auto relative flex flex-col items-end",children:[g.jsxs("div",{className:`flex flex-col items-end space-y-3 absolute bottom-16 right-0 ${E?"opacity-100 translate-y-0":"opacity-0 pointer-events-none translate-y-2"} transition-all duration-300 ease-in-out pb-1`,children:[g.jsxs("div",{className:"flex flex-row-reverse items-center gap-2 mr-1",children:[g.jsx("button",{onClick:c,className:"w-12 h-11 flex items-center justify-center rounded-xl bg-primary text-on-primary shadow-md hover:scale-105 transition","aria-label":"QR Code",children:g.jsx(u1,{className:"w-5 h-5"})}),g.jsx("span",{className:"px-4 py-1.5 text-xs font-medium bg-primary text-on-primary rounded-lg whitespace-nowrap",children:"Show QR Code"})]}),g.jsxs("div",{className:"flex flex-row-reverse items-center gap-2 mr-1",children:[g.jsx("button",{onClick:h,className:"w-12 h-11 flex items-center justify-center rounded-xl bg-primary text-on-primary shadow-md hover:scale-105 transition","aria-label":"Fridge",children:g.jsx(lv,{className:"w-5 h-5"})}),g.jsx("span",{className:"px-4 py-1.5 text-xs font-medium bg-primary text-on-primary rounded-lg whitespace-nowrap",children:"Fridge"})]})]}),g.jsx("button",{onClick:()=>S(!E),className:"w-14 h-14 flex items-center justify-center rounded-2xl bg-primary text-on-primary shadow-lg hover:scale-105 transition-all duration-300 relative","aria-label":"Toggle actions",children:g.jsx("span",{className:`transition-transform duration-300 ease-in-out ${E?"rotate-90":"rotate-0"}`,children:E?g.jsx(dc,{className:"w-6 h-6"}):g.jsx(Kw,{className:"w-6 h-6"})})})]})}),i&&g.jsx("div",{onClick:()=>l(!1),className:"fixed inset-0 bg-black/50 z-40","aria-hidden":"true"}),g.jsx("div",{...$,className:`fixed inset-0 z-50 bg-bg transform transition-transform duration-300 flex flex-col md:max-w-md w-full shadow-lg ${i?"translate-x-0":"-translate-x-full"}`,children:g.jsxs("div",{className:"relative flex-1 flex flex-col p-6",children:[g.jsxs("div",{className:"flex items-center justify-between mb-8",children:[g.jsx("h2",{className:"text-xl font-bold text-default",children:t?"Edit Check-In":"New Check-In"}),g.jsxs("button",{onClick:()=>l(!1),className:"flex items-center space-x-2 text-subtle hover:text-default",children:[g.jsx(Yw,{className:"w-5 h-5"}),g.jsx("span",{className:"text-sm font-medium",children:"Close"})]})]}),g.jsxs("div",{className:"flex-1 overflow-y-auto w-full max-w-md mx-auto space-y-10 pb-16",children:[g.jsxs("div",{children:[g.jsxs("label",{className:"text-sm font-semibold text-subtle mb-2 block",children:[g.jsx(Qd,{className:"inline-block w-4 h-4 mr-2"}),"Location"]}),g.jsx("div",{className:"grid grid-cols-2 gap-4",children:U.map(W=>{const fe=m===W.id;return g.jsxs("button",{onClick:()=>v(W.id),className:`w-full flex items-center justify-between px-4 py-4 rounded-xl border transition-all text-sm font-medium
                        ${fe?"bg-gradient-theme border-default text-default shadow-md":"bg-subtle border-default text-subtle hover:bg-hover"}`,children:[g.jsxs("span",{className:"flex items-center space-x-2",children:[W.icon,g.jsx("span",{children:W.name})]}),fe&&g.jsx("span",{className:"text-xs font-bold",children:"✓"})]},W.id)})})]}),g.jsxs("div",{className:"bg-subtle p-4 rounded-xl",children:[g.jsxs("label",{className:"text-sm font-semibold text-subtle mb-3 block text-center",children:[g.jsx(f1,{className:"inline-block w-4 h-4 mr-2"}),"Friends joining"]}),g.jsxs("div",{className:"flex justify-center items-center space-x-4",children:[g.jsx("button",{onClick:()=>k(W=>Math.max(W-1,0)),className:"w-10 h-10 flex items-center justify-center rounded-lg bg-muted text-subtle hover:text-default","aria-label":"Decrease",children:g.jsx(ro,{className:"w-5 h-5"})}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(Bl,{className:"w-5 h-5 text-subtle"}),g.jsx("span",{className:"text-lg font-semibold text-default",children:w})]}),g.jsx("button",{onClick:()=>k(W=>Math.min(W+1,10)),className:"w-10 h-10 flex items-center justify-center rounded-lg bg-muted text-subtle hover:text-default","aria-label":"Increase",children:g.jsx(qs,{className:"w-5 h-5"})})]})]}),g.jsxs("div",{className:"flex justify-between items-center space-x-3 pt-2",children:[g.jsxs(nt,{onClick:B,className:"flex-1 bg-primary hover:bg-secondary text-on-primary flex items-center justify-center space-x-2 py-2",children:[g.jsx(c1,{className:"w-5 h-5"}),g.jsx("span",{children:t?"Save":"Check In"})]}),t&&g.jsxs(nt,{onClick:()=>{e(),l(!1)},className:"flex-1 bg-error hover:bg-error/90 text-white flex items-center justify-center space-x-2 py-2",children:[g.jsx(Vl,{className:"w-5 h-5"}),g.jsx("span",{children:"Out"})]})]})]})]})})]})},uI=({type:r,message:e})=>g.jsxs("div",{className:`fixed left-1/2 top-0 z-50 w-full max-w-xs sm:max-w-sm -translate-x-1/2 mt-6
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
      `})]});function cI(r){return r.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")}const hI=()=>{const{user:r,logout:e}=ta(),[t,i]=ae.useState([]),[l,c]=ae.useState("ALL"),[h,m]=ae.useState(!1),[v,w]=ae.useState(!1),[k,E]=ae.useState(!1),[S,U]=ae.useState(null),[B,$]=ae.useState(null),[W,fe]=ae.useState(null),G=[{id:"RBGH",name:"Red Bull",color:"bg-location-rbgh"},{id:"PXL",name:"PXL",color:"bg-location-pxl"},{id:"STREAM",name:"Streaming room",color:"bg-location-stream"}],he=()=>g.jsx("svg",{className:"w-6 h-6 text-default",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h10"})});ae.useEffect(()=>{const pe=localStorage.getItem("checkedInUsers");if(pe)try{const Y=JSON.parse(pe);i(Y.map(oe=>({...oe,checkedInAt:new Date(oe.checkedInAt)})))}catch{}const Ee=bu(Du,"users"),ye=l2(Ee,Y=>{let oe=Y.val()||{};const re={mock_ash:{username:"ash",firstname:"Ash",lastname:"Ketchum",checkInStatus:!0,checkedInWhere:"RBGH",checkedInAt:Date.now()-5*60*1e3,friendCount:2,isResponsible:!0,discordUsername:"ash#1234",email:"ash@pokehub.com",phoneNumber:"555-001"},mock_misty:{username:"misty",firstname:"Misty",lastname:"Waterflower",checkInStatus:!0,checkedInWhere:"PXL",checkedInAt:Date.now()-35*60*1e3,friendCount:1,isResponsible:!1,discordUsername:"misty#5678",email:"misty@pokehub.com",phoneNumber:"555-002"},mock_brock:{username:"brock",firstname:"Brock",lastname:"Slate",checkInStatus:!0,checkedInWhere:"STREAM",checkedInAt:Date.now()-90*60*1e3,friendCount:0,isResponsible:!1,discordUsername:"brock#9999",email:"brock@pokehub.com",phoneNumber:"555-003"}};oe={...oe,...re},oe=Object.fromEntries(Object.entries(oe).filter(([H,te])=>te.checkInStatus===!0));const j=Object.entries(oe).filter(([H,te])=>te.checkInStatus===!0).map(([H,te])=>({id:H,username:te.username,name:cI(`${te.firstname} ${te.lastname}`),location:te.checkedInWhere||"Unknown",checkedInAt:new Date(te.checkedInAt??Date.now()),isResponsible:te.isResponsible||!1,friendCount:te.friendCount||0,activeAssignment:te.activeAssignment||!1,discordUsername:te.discordUsername||"",email:te.email||"",phoneNumber:te.phoneNumber||"",avatar:`${Cg}assets/headshot?name=${te.username}.jpg`}));j.sort((H,te)=>H.id===r?.id?-1:te.id===r?.id?1:H.isResponsible&&!te.isResponsible?-1:!H.isResponsible&&te.isResponsible?1:H.username.localeCompare(te.username)),i(j),localStorage.setItem("checkedInUsers",JSON.stringify(j.map(H=>({...H,checkedInAt:H.checkedInAt.toISOString()})))),j.forEach(H=>{const te=new window.Image;te.src=H.avatar||`${Cg}assets/headshot?name=${H.username}.jpg`})});return()=>ye()},[]);const de=async(pe,Ee=[])=>{if(!r)return;const ye=bu(Du,`users/${r.id}`);try{await gd(ye,{checkInStatus:!0,checkedInWhere:pe,checkedInAt:Date.now(),username:r.username,friendCount:Ee.length,activeAssignment:!1,isResponsible:!1}),$({type:"success",message:"Successfully checked in!"})}catch{$({type:"error",message:"Error checking in. Please try again."})}"Notification"in window&&(Notification.permission==="granted"?J():Notification.permission!=="denied"&&Notification.requestPermission().then(Y=>{Y==="granted"&&J()}))};function J(){const pe=new Date;function Ee(ye){const Y=xe=>xe.toString().padStart(2,"0"),oe=Y(ye.getDate()),re=Y(ye.getMonth()+1),j=ye.getFullYear(),H=Y(ye.getHours()),te=Y(ye.getMinutes());return`${oe}/${re}/${j} - ${H}:${te}`}new Notification("You are checked in",{body:`Checked in since: ${Ee(pe)}`,icon:"/rbgh_logo.png"})}const ne=async()=>{if(!r)return;const pe=bu(Du,`users/${r.id}`);try{await gd(pe,{checkInStatus:!1}),$({type:"success",message:"Successfully checked out!"})}catch{$({type:"error",message:"Error checking out. Please try again."})}},P=async pe=>{const Ee=bu(Du,`users/${pe}`);try{await gd(Ee,{checkInStatus:!1}),$({type:"success",message:"User checked out!"})}catch{$({type:"error",message:"Error checking out user."})}},C=t.filter(pe=>l==="ALL"||pe.location===l),N=pe=>G.find(Ee=>Ee.id===pe),A=pe=>{const ye=Math.floor((new Date().getTime()-pe.getTime())/(1e3*60));if(ye<1)return"Just now";if(ye<60)return`${ye}m ago`;const Y=Math.floor(ye/60);return Y<24?`${Y}h ago`:`${Math.floor(Y/24)}d ago`},R=t.find(pe=>pe.id===r?.id),O=pe=>{U(pe)},I=()=>{U(null)};if(ae.useEffect(()=>{if(B){const pe=setTimeout(()=>{$(null)},2e3);return()=>clearTimeout(pe)}},[B]),k)return g.jsx(x1,{onBack:()=>E(!1)});const We=ip({onSwipedRight:()=>{m(!0)},delta:50,trackTouch:!0,trackMouse:!1});return g.jsxs("div",{...We,className:"h-screen overflow-hidden bg-subtle flex-col",children:[B&&g.jsx(uI,{type:B.type,message:B.message}),g.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:g.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:g.jsxs("div",{className:"relative flex items-center justify-between py-3 sm:py-4",children:[g.jsx("button",{onClick:()=>m(!0),className:"flex items-center justify-center w-12 h-10 rounded-md hover:bg-subtle transition","aria-label":"Open menu",children:g.jsx(he,{})}),g.jsxs("div",{className:"absolute left-1/2 transform -translate-x-1/2 text-center",children:[g.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:"Home"}),g.jsxs("p",{className:"text-subtle text-xs sm:text-sm",children:[C.length," active check-ins"]})]}),g.jsxs(nt,{onClick:e,variant:"outline",size:"sm",className:"hidden sm:flex",children:[g.jsx(Vl,{className:"w-4 h-4 mr-2"}),g.jsx("span",{children:"Logout"})]}),g.jsx(nt,{onClick:e,variant:"outline",size:"sm",className:"sm:hidden",children:g.jsx(Vl,{className:"w-4 h-4"})})]})})}),S&&g.jsx(XT,{user:S,onClose:I}),g.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[R&&g.jsx("div",{className:"mb-6 bg-gradient-theme rounded-xl p-4 border border-default",children:g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:`w-3 h-3 rounded-full ${N(R.location)?.color}`}),g.jsxs("div",{className:"flex-1",children:[g.jsxs("p",{className:"text-sm font-medium text-default ",children:["You're checked in at ",N(R.location)?.name]}),g.jsxs("p",{className:"text-xs text-subtle",children:[A(R.checkedInAt),(R.friendCount??0)>0&&g.jsxs("span",{className:"ml-2",children:["• With ",R.friendCount," friend",(R.friendCount??0)>1?"s":""]})]})]})]})}),g.jsx("div",{className:"mb-6 space-y-4",children:g.jsxs("div",{className:"flex space-x-2 overflow-x-auto pb-2",children:[g.jsxs("button",{onClick:()=>c("ALL"),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center ${l==="ALL"?"bg-primary text-on-primary":"bg-gradient-theme text-default hover:bg-subtle"}`,children:["All Locations",g.jsx("span",{className:"ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold bg-subtle text-default",children:t.length})]}),G.map(pe=>{const Ee=t.filter(Y=>Y.location===pe.id).length,ye=l===pe.id;return g.jsxs("button",{onClick:()=>c(pe.id),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center ${ye?"bg-primary text-on-primary":"bg-gradient-theme text-default hover:bg-subtle"}`,children:[pe.name,g.jsx("span",{className:"ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold bg-subtle text-default",children:Ee})]},pe.id)})]})}),g.jsx("div",{className:"space-y-3 custom-scrollbar overflow-y-auto",style:{touchAction:"pan-y",maxHeight:"calc(100vh - 23.9rem)",...window.innerWidth<640?{maxHeight:"calc(100vh - 21.5rem)"}:{}},children:C.length===0?g.jsxs("div",{className:"text-center py-12",children:[g.jsx(Qd,{className:"w-12 h-12 text-subtle mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No users found"}),g.jsx("p",{className:"text-subtle",children:"No users are currently checked in"})]}):C.map(pe=>{const Ee=N(pe.location);return g.jsx(dI,{checkedUser:pe,locationInfo:Ee,showCheckoutUserId:W,setShowCheckoutUserId:fe,handleUserClick:O,handleCheckOutUser:P,user:r,formatTimeAgo:A},pe.id)})})]}),g.jsx(aI,{onCheckIn:de,onCheckOut:ne,onShowQR:()=>w(!0),onOpenFridge:()=>E(!0),isCheckedIn:!!R,isSidebarOpen:h,setIsSidebarOpen:m}),g.jsx(_1,{isOpen:v,onClose:()=>w(!1)})]})},dI=({checkedUser:r,locationInfo:e,showCheckoutUserId:t,setShowCheckoutUserId:i,handleUserClick:l,handleCheckOutUser:c,user:h,formatTimeAgo:m})=>{const v=ip({onSwipedLeft:()=>{console.log("Swiped left!",r.id),i(r.id)},onSwipedRight:()=>{console.log("Swiped right!",r.id),i(null)},trackMouse:!0});return g.jsxs("div",{className:"relative",style:{touchAction:"pan-y"},children:[g.jsx("div",{className:`absolute inset-0 flex items-center justify-end pr-4 rounded-xl border border-default z-0 transition-colors duration-300 ${t===r.id?"bg-danger/10":"bg-bg"}`,style:{width:"100%",height:"100%",margin:0,pointerEvents:t===r.id?"auto":"none"},children:g.jsx("button",{onClick:w=>{w.stopPropagation(),c(r.id),i(null)},className:`flex items-center justify-center rounded-full shadow-lg transition-all duration-300 bg-bg ${t===r.id?"scale-105":"scale-95"}`,style:{width:"56px",height:"56px",opacity:t===r.id?1:.7,boxShadow:t===r.id?"0 4px 16px rgba(255,71,87,0.15)":"0 2px 8px rgba(0,0,0,0.06)"},"aria-label":"Check Out",children:g.jsx(Vl,{className:`w-8 h-8 transition-colors duration-300 ${t===r.id,"text-default"}`})})}),g.jsx("div",{...v,className:"bg-bg rounded-xl p-4 border border-default hover:shadow-md transition-transform duration-300 cursor-pointer z-10",style:{touchAction:"pan-y",userSelect:"none",position:"relative",transform:t===r.id?"translateX(-90px) scale(0.98)":"translateX(0) scale(1)",boxShadow:t===r.id?"0 4px 24px rgba(255,0,0,0.08)":void 0,transition:"transform 0.3s cubic-bezier(.4,2,.3,1), box-shadow 0.3s"},onClick:()=>l(r),children:g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsx("div",{className:"flex-shrink-0",children:g.jsx("img",{src:r.avatar,alt:`${r.name}'s avatar`,onError:w=>{w.currentTarget.onerror=null,w.currentTarget.style.display="none";const k=w.currentTarget.parentElement;if(k&&!k.querySelector(".fallback-avatar")){const E=document.createElement("span");E.className="fallback-avatar flex items-center justify-center w-12 h-12 rounded-full bg-subtle bg-subtle",E.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-muted " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',k.appendChild(E)}},className:"w-12 h-12 rounded-full"})}),g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[g.jsx("h3",{className:"font-semibold text-default truncate",children:r.name}),r.id===h?.id&&g.jsx("span",{className:"px-2 py-1 bg-primary text-on-primary text-xs rounded-full",children:"You"})]}),g.jsxs("p",{className:"text-sm text-subtle mb-2",children:["@",r.username]}),g.jsxs("div",{className:"flex items-center space-x-4 text-sm",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("div",{className:`w-2 h-2 rounded-full ${e?.color}`}),g.jsx("span",{className:"text-subtle",children:e?.name})]}),g.jsxs("div",{className:"flex items-center space-x-1 text-subtle",children:[g.jsx(Kd,{className:"w-4 h-4"}),g.jsx("span",{children:m(r.checkedInAt)})]})]}),(r.friendCount??0)>0&&g.jsxs("div",{className:"flex items-center space-x-1 mt-2 text-sm text-subtle",children:[g.jsx(Bl,{className:"w-4 h-4"}),g.jsxs("span",{children:["With ",r.friendCount," friend",(r.friendCount??0)>1?"s":""]})]})]})]})})]})},wd=({assignment:r,expanded:e,onToggle:t,user:i,isOverdue:l,locationColors:c})=>{const h=c[r.location]||{name:r.location||"Unknown",color:"bg-subtle"},m=r.date>new Date,v=i&&r.responsibles.includes(i.name||i.username);return g.jsxs("div",{className:"bg-bg rounded-2xl p-4 sm:p-5 border border-default shadow-sm hover:shadow-lg hover:scale-[1.005] transition-all duration-200 cursor-pointer",onClick:t,children:[g.jsxs("div",{className:"flex justify-between items-start",children:[g.jsxs("div",{className:"flex flex-col space-y-1",children:[g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:`w-3.5 h-3.5 rounded-full ${h.color}`}),g.jsx("h3",{className:"font-semibold text-base text-default truncate",children:r.title})]}),!e&&g.jsxs("div",{className:"flex items-center text-sm text-subtle space-x-4 pl-5 pt-1",children:[g.jsxs("span",{className:"flex items-center space-x-1",children:[g.jsx(Kd,{className:"w-4 h-4"}),g.jsx("span",{children:r.startTime})]}),g.jsxs("span",{className:"flex items-center space-x-1",children:[g.jsx(Bl,{className:"w-4 h-4"}),g.jsx("span",{children:r.responsibles.length===0?"No Responsible":r.responsibles.length===1?r.responsibles[0]:`${r.responsibles[0]} +${r.responsibles.length-1}`})]})]})]}),!r.completed&&l(r.date)&&g.jsx("span",{className:"ml-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-gradient-to-r from-red-100 to-orange-100 text-error dark:from-red-900/20 dark:to-orange-900/20",children:"Overdue"})]}),e&&g.jsxs("div",{className:"mt-4 space-y-4 text-sm text-subtle",children:[g.jsxs("div",{className:"text-center",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-muted",children:r.date.toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"short",year:"numeric"})}),g.jsxs("p",{className:"text-sm text-subtle mt-0.5",children:["From"," ",g.jsx("span",{className:"font-medium text-default",children:r.startTime})," ","to"," ",g.jsx("span",{className:"font-medium text-default",children:r.endTime})]})]}),g.jsxs("div",{className:"grid grid-cols-1 gap-3 text-sm",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(Qd,{className:"w-4 h-4 text-muted"}),g.jsx("span",{className:"text-default font-medium",children:h.name})]}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(Bl,{className:"w-4 h-4 text-muted"}),g.jsx("span",{className:"text-default",children:r.responsibles.length===0?"No Responsible":r.responsibles.length===1?r.responsibles[0]:`${r.responsibles[0]} +${r.responsibles.length-1}`})]}),r.visitors!==void 0&&g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(Yd,{className:"w-4 h-4 text-muted"}),g.jsxs("span",{className:"text-default",children:[r.visitors," visitors"]})]}),r.remarks&&g.jsxs("div",{className:"flex items-start space-x-2",children:[g.jsx(l1,{className:"w-4 h-4 text-muted mt-0.5"}),g.jsx("p",{className:"text-default",children:r.remarks})]})]}),m&&!v&&g.jsx("div",{className:"pt-2",children:g.jsxs("button",{onClick:w=>{w.stopPropagation(),alert("Signed up (mock)")},className:"w-full px-4 py-2 bg-primary text-on-primary text-sm font-medium rounded-full shadow-md flex items-center justify-center space-x-2 transition hover:scale-[1.02] hover:shadow-xl",children:[g.jsx(bl,{className:"w-4 h-4"}),g.jsx("span",{children:"Sign up"})]})})]})]})},fI=[{id:1,label:"Mon"},{id:2,label:"Tue"},{id:3,label:"Wed"},{id:4,label:"Thu"},{id:5,label:"Fri"},{id:6,label:"Sat"},{id:0,label:"Sun"}],pI=({selectedDays:r,onToggleDay:e})=>g.jsx("div",{className:"flex space-x-2 overflow-x-auto pb-2 mb-4",children:fI.map(t=>g.jsx("button",{onClick:()=>e(t.id),className:`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center ${r.includes(t.id)?"bg-primary text-on-primary":"bg-gradient-theme text-default hover:bg-subtle"}`,children:t.label},t.id))}),mI=[{id:"1",title:"Network check",responsibles:["jane"],startTime:"12:00",endTime:"13:30",date:new Date("2025-07-24T00:00:00"),location:"RBGH",visitors:2,remarks:"Replace any broken cables.",completed:!0},{id:"2",title:"Set up sound system",responsibles:[],startTime:"15:45",endTime:"17:15",date:new Date("2025-07-19T00:00:00"),location:"PXL",visitors:2,remarks:"Replace any broken cables.",completed:!1},{id:"3",title:"Network check",responsibles:["john","jane"],startTime:"09:00",endTime:"10:00",date:new Date("2025-07-22T00:00:00"),location:"RBGH",visitors:35,remarks:"Test all mics.",completed:!0},{id:"4",title:"Opening Hub",responsibles:["john"],startTime:"09:00",endTime:"09:45",date:new Date("2025-07-20T00:00:00"),location:"RBGH",visitors:2,completed:!0},{id:"5",title:"Inspect Red Bull gear",responsibles:["jane"],startTime:"14:30",endTime:"15:15",date:new Date("2025-07-16T00:00:00"),location:"RBGH",remarks:"Replace any broken cables.",completed:!0},{id:"6",title:"Organize chairs",responsibles:["john","alice"],startTime:"12:00",endTime:"13:15",date:new Date("2025-07-18T00:00:00"),location:"RBGH",visitors:8,completed:!1},{id:"7",title:"Test HDMI switch",responsibles:[],startTime:"13:15",endTime:"14:15",date:new Date(Date.now()-864e5*2),location:"RBGH",visitors:8,remarks:"Be on time.",completed:!0},{id:"8",title:"Set up sound system",responsibles:["emma"],startTime:"10:30",endTime:"12:30",date:new Date(Date.now()-864e5*1),location:"RBGH",visitors:8,remarks:"Be on time.",completed:!0},{id:"9",title:"Briefing volunteers",responsibles:["jane","john"],startTime:"08:00",endTime:"09:00",date:new Date(Date.now()+864e5*0),location:"RBGH",visitors:8,remarks:"Test all mics.",completed:!1},{id:"10",title:"Network check",responsibles:["alice","john"],startTime:"12:45",endTime:"13:45",date:new Date(Date.now()+864e5*1),location:"RBGH",visitors:5,remarks:"Replace any broken cables.",completed:!1},{id:"11",title:"Opening Hub",responsibles:["jane","john"],startTime:"13:30",endTime:"15:30",date:new Date(Date.now()+864e5*2),location:"PXL",visitors:2,remarks:"Replace any broken cables.",completed:!1},{id:"12",title:"Inspect Red Bull gear",responsibles:[],startTime:"14:45",endTime:"15:45",date:new Date(Date.now()+864e5*3),location:"RBGH",visitors:2,remarks:"Test all mics.",completed:!1},{id:"13",title:"Organize chairs",responsibles:["jane","john"],startTime:"11:30",endTime:"13:30",date:new Date(Date.now()+864e5*4),location:"RBGH",remarks:"Be on time.",completed:!1},{id:"14",title:"Test HDMI switch",responsibles:["john"],startTime:"14:15",endTime:"15:15",date:new Date(Date.now()+864e5*5),location:"RBGH",completed:!1},{id:"15",title:"Set up sound system",responsibles:[],startTime:"10:00",endTime:"11:00",date:new Date(Date.now()+864e5*6),location:"RBGH",visitors:8,remarks:"Replace any broken cables.",completed:!1},{id:"16",title:"Briefing volunteers",responsibles:["emma","jane"],startTime:"08:30",endTime:"10:30",date:new Date(Date.now()+864e5*7),location:"PXL",visitors:2,completed:!1},{id:"17",title:"Network check",responsibles:[],startTime:"09:30",endTime:"11:30",date:new Date(Date.now()+864e5*8),location:"PXL",completed:!1},{id:"18",title:"Opening Hub",responsibles:["jane"],startTime:"08:30",endTime:"10:30",date:new Date(Date.now()+864e5*9),location:"RBGH",visitors:2,remarks:"Replace any broken cables.",completed:!1},{id:"19",title:"Inspect Red Bull gear",responsibles:["alice","jane"],startTime:"10:30",endTime:"12:30",date:new Date(Date.now()-864e5*5),location:"RBGH",visitors:2,completed:!0},{id:"20",title:"Organize chairs",responsibles:["john","emma"],startTime:"08:45",endTime:"10:45",date:new Date(Date.now()-864e5*4),location:"RBGH",visitors:8,remarks:"Test all mics.",completed:!0},{id:"21",title:"Test HDMI switch",responsibles:[],startTime:"14:00",endTime:"15:00",date:new Date(Date.now()-864e5*3),location:"RBGH",visitors:8,remarks:"Test all mics.",completed:!0},{id:"22",title:"Set up sound system",responsibles:[],startTime:"16:45",endTime:"17:45",date:new Date(Date.now()-864e5*2),location:"PXL",visitors:2,completed:!0},{id:"23",title:"Briefing volunteers",responsibles:["alice"],startTime:"08:00",endTime:"10:00",date:new Date(Date.now()-864e5*1),location:"RBGH",visitors:5,remarks:"Test all mics.",completed:!0},{id:"24",title:"Network check",responsibles:["john","emma"],startTime:"15:00",endTime:"16:00",date:new Date(Date.now()+864e5*0),location:"PXL",visitors:2,remarks:"Replace any broken cables.",completed:!1},{id:"25",title:"Opening Hub",responsibles:[],startTime:"15:30",endTime:"16:30",date:new Date(Date.now()+864e5*1),location:"RBGH",visitors:2,remarks:"Test all mics.",completed:!1}],gI=()=>{const[r,e]=ae.useState("all"),[t,i]=ae.useState(new Date),[l,c]=ae.useState(null),[h,m]=ae.useState([]),{user:v}=ta(),w=mI,[k,E]=ae.useState(null),S=J=>{E(ne=>ne===J?null:J)},U=ae.useRef(null);ae.useEffect(()=>{U.current&&U.current.scrollIntoView({behavior:"auto",block:"start"})},[]);const B={PXL:{name:"PXL",color:"bg-location-pxl"},RBGH:{name:"Red Bull",color:"bg-location-rbgh"},STREAM:{name:"STREAM",color:"bg-location-stream"}},$=w,W=w.filter(J=>!J.completed&&J.responsibles.some(ne=>v&&(ne===v.name||ne===v.username))),fe=w.filter(J=>J.completed&&J.responsibles.some(ne=>v&&(ne===v.name||ne===v.username))),G=J=>{const ne=new Date,P=new Date(ne);ne.setHours(0,0,0,0),P.setDate(ne.getDate()+1),P.setHours(0,0,0,0);const C=new Date(J);return C.setHours(0,0,0,0),C.getTime()===ne.getTime()?"Today":C.getTime()===P.getTime()?"Tomorrow":C.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})};l&&$.filter(J=>J.date.getFullYear()===l.getFullYear()&&J.date.getMonth()===l.getMonth()&&J.date.getDate()===l.getDate());const he=J=>{m(ne=>ne.includes(J)?ne.filter(P=>P!==J):[...ne,J])};h.length===0||$.filter(J=>h.includes(J.date.getDay()));const de={formatDate:G,isOverdue:J=>{const ne=new Date;ne.setHours(0,0,0,0);const P=new Date(J);return P.setHours(0,0,0,0),P<ne},locationColors:B,user:v?.name&&v?.username?{name:v.name,username:v.username}:void 0};return g.jsxs("div",{className:"min-h-screen bg-subtle pb-20",children:[g.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:g.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:g.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:g.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[g.jsx("div",{className:"w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center",children:g.jsx(bl,{className:"w-6 h-6 text-on-primary"})}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:"Assignments"}),g.jsx("p",{className:"text-subtle text-sm sm:text-base",children:r==="todo"?`${W.length} pending`:`${fe.length} completed`})]})]})})})}),g.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[g.jsx("div",{className:"flex space-x-1 mb-6 bg-gradient-theme rounded-lg p-1",children:["all","todo","finished"].map(J=>g.jsx("button",{onClick:()=>e(J),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${r===J?"bg-bg text-default shadow-sm":"text-subtle hover:text-default"}`,children:J==="all"?`All (${$.length})`:J==="todo"?`To Do (${W.length})`:`Finished (${fe.length})`},J))}),g.jsx(pI,{selectedDays:h,onToggleDay:he}),g.jsx("div",{className:"space-y-4 custom-scrollbar overflow-y-auto",style:{maxHeight:"calc(100vh - 22.9rem)",...window.innerWidth<640?{maxHeight:"calc(100vh - 20.5rem)"}:{}},children:r==="all"&&$.length>0?(()=>{const ne=(h.length===0?$:$.filter(R=>h.includes(R.date.getDay()))).reduce((R,O)=>{const I=O.date.toDateString();return R[I]||(R[I]=[]),R[I].push(O),R},{}),P=Object.entries(ne).sort(([R],[O])=>new Date(R).getTime()-new Date(O).getTime()),C=new Date;C.setHours(0,0,0,0);const N=[],A=[];return P.forEach(([R,O])=>{const I=new Date(R),We=I<C,pe=g.jsxs("div",{ref:We?void 0:A.length===0?U:void 0,children:[g.jsx("h2",{className:"text-sm text-subtle font-medium uppercase mb-2 mt-6 pl-1",children:G(I)}),g.jsx("div",{className:"space-y-2 px-1 sm:px-2",children:O.sort((Ee,ye)=>Ee.startTime.localeCompare(ye.startTime)).map(Ee=>g.jsx(wd,{assignment:Ee,expanded:k===Ee.id,onToggle:()=>S(Ee.id),...de},Ee.id))})]},R);We?N.push(pe):A.push(pe)}),g.jsxs(g.Fragment,{children:[N,A]})})():r==="all"?g.jsxs("div",{className:"text-center py-12",children:[g.jsx(bl,{className:"w-12 h-12 text-muted mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No assignments"}),g.jsx("p",{className:"text-subtle",children:"No assignments found."})]}):r==="todo"?W.length===0?g.jsxs("div",{className:"text-center py-12",children:[g.jsx(bl,{className:"w-12 h-12 text-muted mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No pending assignments"}),g.jsx("p",{className:"text-subtle",children:"All assignments are completed. Great job!"})]}):W.sort((J,ne)=>J.date.getTime()-ne.date.getTime()).map(J=>g.jsx(wd,{assignment:J,expanded:k===J.id,onToggle:()=>S(J.id),...de},J.id)):fe.length===0?g.jsxs("div",{className:"text-center py-12",children:[g.jsx(bl,{className:"w-12 h-12 text-muted mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No completed assignments"}),g.jsx("p",{className:"text-subtle",children:"Completed assignments will appear here."})]}):fe.sort((J,ne)=>ne.date.getTime()-J.date.getTime()).map(J=>g.jsx(wd,{assignment:J,expanded:k===J.id,onToggle:()=>S(J.id),...de},J.id))})]})]})};function w0(r){document.documentElement.setAttribute("data-theme",r),document.documentElement.classList.remove("light","dark","neon","dark-mint"),(r==="dark"||r==="dark-mint")&&document.documentElement.classList.add("dark"),localStorage.setItem("theme",r)}function x0(){const r=localStorage.getItem("theme");return r==="light"||r==="dark"||r==="neon"||r==="dark-mint"?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const Rl=["light","dark","neon","dark-mint"],yI={light:"Light",dark:"Dark",neon:"Neon","dark-mint":"Dark Mint"},E0=()=>{const[r,e]=ae.useState(x0());return ae.useEffect(()=>{w0(r)},[r]),g.jsxs("div",{className:"min-h-screen bg-bg text-text p-8",children:[g.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Theme Preferences"}),g.jsx("div",{className:"space-y-4",children:Rl.map(t=>g.jsxs("label",{className:"flex items-center space-x-3",children:[g.jsx("input",{type:"radio",name:"theme",value:t,checked:r===t,onChange:()=>e(t),className:"w-4 h-4 accent-[var(--color-text)]"}),g.jsx("span",{className:"text-text",children:yI[t]})]},t))})]})},vI=({activeView:r,onViewChange:e})=>{const t=[{id:"home",label:"Home",icon:i1},{id:"assignments",label:"Assignments",icon:e1},{id:"preferences",label:"Preferences",icon:a1},{id:"settings",label:"Settings",icon:av}];return g.jsx("nav",{className:"fixed bottom-4 left-0 right-0 z-50 px-4",children:g.jsx("div",{className:"max-w-[78rem] mx-auto nav-glass px-1 py-2 rounded-full",children:g.jsx("div",{className:"flex justify-between items-center w-full",children:t.map(i=>{const l=i.icon,c=r===i.id;return g.jsxs("button",{onClick:()=>e(i.id),className:`group flex items-center justify-center h-10 rounded-full transition-colors duration-200 mx-1 px-3 ${c?"nav-item-active shadow-md":"text-subtle hover:text-default hover:bg-subtle/40"}`,"aria-label":i.label,children:[g.jsx(l,{className:"w-5 h-5 text-inherit"}),g.jsx("span",{className:`ml-2 text-[13px] font-medium text-inherit overflow-hidden transition-[max-width,opacity] duration-300 ease-in-out ${c?"opacity-100 max-w-[100px]":"opacity-0 max-w-0"}`,children:i.label})]},i.id)})})})})},_I="0.1.3",wI={version:_I},xI=wI.version,EI=[{id:"profile",title:"Profile",description:"Manage your personal information",icon:uv},{id:"preferences",title:"Preferences",description:"Customize your app experience",icon:av},{id:"blacklist",title:"Black list",description:"Manage blocked content",icon:h1},{id:"userlist",title:"User list",description:"View and manage users",icon:Bl},{id:"bugreport",title:"Bug report",description:"Report issues and feedback",icon:Xw}],SI=({onSignOut:r})=>{const[e,t]=ae.useState("main"),i=()=>t("main");return g.jsxs("div",{className:"min-h-screen bg-subtle pb-20",children:[e==="main"&&g.jsxs(g.Fragment,{children:[g.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:g.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:g.jsxs("div",{className:"flex items-center py-4 space-x-3",children:[g.jsx("div",{className:"w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center",children:g.jsx(d1,{className:"w-6 h-6 text-on-primary"})}),g.jsxs("div",{children:[g.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:"Settings"}),g.jsx("p",{className:"text-subtle text-sm",children:"Customize your experience"})]})]})})}),g.jsxs("main",{className:"max-w-2xl mx-auto px-4 py-6 space-y-4",children:[EI.map(l=>{const c=l.icon;return g.jsxs("button",{className:"w-full px-4 py-4 rounded-xl bg-bg hover:bg-subtle text-left border border-default transition-all flex items-center justify-between group",onClick:()=>t(l.id),children:[g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsx("div",{className:"w-10 h-10 rounded-lg bg-subtle flex items-center justify-center",children:g.jsx(c,{className:"w-5 h-5 text-default"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-default font-medium",children:l.title}),g.jsx("p",{className:"text-subtle text-sm",children:l.description})]})]}),g.jsx(Zw,{className:"w-4 h-4 text-subtle group-hover:translate-x-1 transition-transform"})]},l.id)}),g.jsxs("div",{className:"w-full px-4 py-4 rounded-xl bg-bg border border-default flex justify-between items-center",children:[g.jsxs("div",{children:[g.jsx("h4",{className:"text-default font-medium",children:"App Version"}),g.jsx("p",{className:"text-subtle text-sm",children:"Current version"})]}),g.jsxs("span",{className:"text-sm font-mono text-subtle",children:["v",xI]})]}),g.jsxs("button",{className:"w-full px-4 py-4 rounded-xl bg-error text-on-primary font-semibold flex items-center justify-center space-x-2 hover:bg-primary transition",onClick:r,children:[g.jsx(Vl,{className:"w-5 h-5"}),g.jsx("span",{children:"Sign out"})]})]})]}),e!=="main"&&g.jsxs("div",{className:"min-h-screen bg-subtle",children:[g.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 flex items-center justify-between",children:[g.jsxs("button",{onClick:i,className:"inline-flex items-center text-subtle hover:text-default transition-colors space-x-2",children:[g.jsx(zu,{className:"w-4 h-4"}),g.jsx("span",{className:"text-sm font-medium",children:"Back to Settings"})]}),g.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default capitalize",children:e}),g.jsx("div",{className:"w-8 h-8"})," "]})}),g.jsx("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6",children:g.jsxs("div",{className:"bg-bg rounded-xl border border-default p-6 shadow-sm",children:[e==="preferences"&&g.jsx(E0,{}),e==="profile"&&g.jsx("p",{className:"text-subtle",children:"Profile component will go here."}),e==="blacklist"&&g.jsx("p",{className:"text-subtle",children:"Blacklist component will go here."}),e==="userlist"&&g.jsx("p",{className:"text-subtle",children:"User list component will go here."}),e==="bugreport"&&g.jsx("p",{className:"text-subtle",children:"Bug report form will go here."})]})})]})]})};function kI(){const{isAuthenticated:r,ready:e}=ta(),[t,i]=ae.useState("login"),[l,c]=ae.useState("home");if(!e)return g.jsx(cv,{});if(r)return g.jsxs(g.Fragment,{children:[l==="home"&&g.jsx(hI,{}),l==="assignments"&&g.jsx(gI,{}),l==="preferences"&&g.jsx(E0,{}),l==="settings"&&g.jsx(SI,{}),g.jsx(vI,{activeView:l,onViewChange:c})]});switch(t){case"forgot-password":return g.jsx(v1,{onBackToLogin:()=>i("login")});case"login":default:return g.jsx(y1,{onForgotPassword:()=>i("forgot-password")})}}const CI=ae.createContext(void 0),TI=({children:r})=>{const[e,t]=ae.useState(x0);ae.useEffect(()=>{w0(e)},[e]);const i=()=>{const c=Rl.indexOf(e),h=Rl[(c+1)%Rl.length];t(h)},l=c=>t(c);return g.jsx(CI.Provider,{value:{theme:e,setTheme:l,toggleTheme:i,availableThemes:Rl},children:r})};jw.createRoot(document.getElementById("root")).render(g.jsx(ae.StrictMode,{children:g.jsx(TI,{children:g.jsx(kI,{})})}));

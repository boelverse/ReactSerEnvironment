(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=t(l);fetch(l.href,u)}})();function Ow(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var od={exports:{}},Tl={},ld={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function Dw(){if(yg)return Se;yg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),E=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=E&&L[E]||L["@@iterator"],typeof L=="function"?L:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,q={};function H(L,G,he){this.props=L,this.context=G,this.refs=q,this.updater=he||U}H.prototype.isReactComponent={},H.prototype.setState=function(L,G){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,G,"setState")},H.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function de(){}de.prototype=H.prototype;function $(L,G,he){this.props=L,this.context=G,this.refs=q,this.updater=he||U}var ae=$.prototype=new de;ae.constructor=$,B(ae,H.prototype),ae.isPureReactComponent=!0;var ce=Array.isArray,ye=Object.prototype.hasOwnProperty,W={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function k(L,G,he){var we,Ee={},Re=null,je=null;if(G!=null)for(we in G.ref!==void 0&&(je=G.ref),G.key!==void 0&&(Re=""+G.key),G)ye.call(G,we)&&!R.hasOwnProperty(we)&&(Ee[we]=G[we]);var Fe=arguments.length-2;if(Fe===1)Ee.children=he;else if(1<Fe){for(var $e=Array(Fe),mt=0;mt<Fe;mt++)$e[mt]=arguments[mt+2];Ee.children=$e}if(L&&L.defaultProps)for(we in Fe=L.defaultProps,Fe)Ee[we]===void 0&&(Ee[we]=Fe[we]);return{$$typeof:r,type:L,key:Re,ref:je,props:Ee,_owner:W.current}}function N(L,G){return{$$typeof:r,type:L.type,key:G,ref:L.ref,props:L.props,_owner:L._owner}}function P(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function O(L){var G={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(he){return G[he]})}var A=/\/+/g;function I(L,G){return typeof L=="object"&&L!==null&&L.key!=null?O(""+L.key):G.toString(36)}function ve(L,G,he,we,Ee){var Re=typeof L;(Re==="undefined"||Re==="boolean")&&(L=null);var je=!1;if(L===null)je=!0;else switch(Re){case"string":case"number":je=!0;break;case"object":switch(L.$$typeof){case r:case e:je=!0}}if(je)return je=L,Ee=Ee(je),L=we===""?"."+I(je,0):we,ce(Ee)?(he="",L!=null&&(he=L.replace(A,"$&/")+"/"),ve(Ee,G,he,"",function(mt){return mt})):Ee!=null&&(P(Ee)&&(Ee=N(Ee,he+(!Ee.key||je&&je.key===Ee.key?"":(""+Ee.key).replace(A,"$&/")+"/")+L)),G.push(Ee)),1;if(je=0,we=we===""?".":we+":",ce(L))for(var Fe=0;Fe<L.length;Fe++){Re=L[Fe];var $e=we+I(Re,Fe);je+=ve(Re,G,he,$e,Ee)}else if($e=S(L),typeof $e=="function")for(L=$e.call(L),Fe=0;!(Re=L.next()).done;)Re=Re.value,$e=we+I(Re,Fe++),je+=ve(Re,G,he,$e,Ee);else if(Re==="object")throw G=String(L),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return je}function xe(L,G,he){if(L==null)return L;var we=[],Ee=0;return ve(L,we,"","",function(Re){return G.call(he,Re,Ee++)}),we}function Le(L){if(L._status===-1){var G=L._result;G=G(),G.then(function(he){(L._status===0||L._status===-1)&&(L._status=1,L._result=he)},function(he){(L._status===0||L._status===-1)&&(L._status=2,L._result=he)}),L._status===-1&&(L._status=0,L._result=G)}if(L._status===1)return L._result.default;throw L._result}var ke={current:null},X={transition:null},te={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:X,ReactCurrentOwner:W};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:xe,forEach:function(L,G,he){xe(L,function(){G.apply(this,arguments)},he)},count:function(L){var G=0;return xe(L,function(){G++}),G},toArray:function(L){return xe(L,function(G){return G})||[]},only:function(L){if(!P(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Se.Component=H,Se.Fragment=t,Se.Profiler=l,Se.PureComponent=$,Se.StrictMode=s,Se.Suspense=_,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Se.act=ne,Se.cloneElement=function(L,G,he){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var we=B({},L.props),Ee=L.key,Re=L.ref,je=L._owner;if(G!=null){if(G.ref!==void 0&&(Re=G.ref,je=W.current),G.key!==void 0&&(Ee=""+G.key),L.type&&L.type.defaultProps)var Fe=L.type.defaultProps;for($e in G)ye.call(G,$e)&&!R.hasOwnProperty($e)&&(we[$e]=G[$e]===void 0&&Fe!==void 0?Fe[$e]:G[$e])}var $e=arguments.length-2;if($e===1)we.children=he;else if(1<$e){Fe=Array($e);for(var mt=0;mt<$e;mt++)Fe[mt]=arguments[mt+2];we.children=Fe}return{$$typeof:r,type:L.type,key:Ee,ref:Re,props:we,_owner:je}},Se.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:u,_context:L},L.Consumer=L},Se.createElement=k,Se.createFactory=function(L){var G=k.bind(null,L);return G.type=L,G},Se.createRef=function(){return{current:null}},Se.forwardRef=function(L){return{$$typeof:m,render:L}},Se.isValidElement=P,Se.lazy=function(L){return{$$typeof:C,_payload:{_status:-1,_result:L},_init:Le}},Se.memo=function(L,G){return{$$typeof:w,type:L,compare:G===void 0?null:G}},Se.startTransition=function(L){var G=X.transition;X.transition={};try{L()}finally{X.transition=G}},Se.unstable_act=ne,Se.useCallback=function(L,G){return ke.current.useCallback(L,G)},Se.useContext=function(L){return ke.current.useContext(L)},Se.useDebugValue=function(){},Se.useDeferredValue=function(L){return ke.current.useDeferredValue(L)},Se.useEffect=function(L,G){return ke.current.useEffect(L,G)},Se.useId=function(){return ke.current.useId()},Se.useImperativeHandle=function(L,G,he){return ke.current.useImperativeHandle(L,G,he)},Se.useInsertionEffect=function(L,G){return ke.current.useInsertionEffect(L,G)},Se.useLayoutEffect=function(L,G){return ke.current.useLayoutEffect(L,G)},Se.useMemo=function(L,G){return ke.current.useMemo(L,G)},Se.useReducer=function(L,G,he){return ke.current.useReducer(L,G,he)},Se.useRef=function(L){return ke.current.useRef(L)},Se.useState=function(L){return ke.current.useState(L)},Se.useSyncExternalStore=function(L,G,he){return ke.current.useSyncExternalStore(L,G,he)},Se.useTransition=function(){return ke.current.useTransition()},Se.version="18.3.1",Se}var vg;function nf(){return vg||(vg=1,ld.exports=Dw()),ld.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function Lw(){if(wg)return Tl;wg=1;var r=nf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,_,w){var C,E={},S=null,U=null;w!==void 0&&(S=""+w),_.key!==void 0&&(S=""+_.key),_.ref!==void 0&&(U=_.ref);for(C in _)s.call(_,C)&&!u.hasOwnProperty(C)&&(E[C]=_[C]);if(m&&m.defaultProps)for(C in _=m.defaultProps,_)E[C]===void 0&&(E[C]=_[C]);return{$$typeof:e,type:m,key:S,ref:U,props:E,_owner:l.current}}return Tl.Fragment=t,Tl.jsx=h,Tl.jsxs=h,Tl}var xg;function Mw(){return xg||(xg=1,od.exports=Lw()),od.exports}var y=Mw(),oe=nf();const Eg=Ow(oe);var Ru={},ad={exports:{}},Yt={},ud={exports:{}},cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function jw(){return Sg||(Sg=1,function(r){function e(X,te){var ne=X.length;X.push(te);e:for(;0<ne;){var L=ne-1>>>1,G=X[L];if(0<l(G,te))X[L]=te,X[ne]=G,ne=L;else break e}}function t(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var te=X[0],ne=X.pop();if(ne!==te){X[0]=ne;e:for(var L=0,G=X.length,he=G>>>1;L<he;){var we=2*(L+1)-1,Ee=X[we],Re=we+1,je=X[Re];if(0>l(Ee,ne))Re<G&&0>l(je,Ee)?(X[L]=je,X[Re]=ne,L=Re):(X[L]=Ee,X[we]=ne,L=we);else if(Re<G&&0>l(je,ne))X[L]=je,X[Re]=ne,L=Re;else break e}}return te}function l(X,te){var ne=X.sortIndex-te.sortIndex;return ne!==0?ne:X.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var _=[],w=[],C=1,E=null,S=3,U=!1,B=!1,q=!1,H=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(X){for(var te=t(w);te!==null;){if(te.callback===null)s(w);else if(te.startTime<=X)s(w),te.sortIndex=te.expirationTime,e(_,te);else break;te=t(w)}}function ce(X){if(q=!1,ae(X),!B)if(t(_)!==null)B=!0,Le(ye);else{var te=t(w);te!==null&&ke(ce,te.startTime-X)}}function ye(X,te){B=!1,q&&(q=!1,de(k),k=-1),U=!0;var ne=S;try{for(ae(te),E=t(_);E!==null&&(!(E.expirationTime>te)||X&&!O());){var L=E.callback;if(typeof L=="function"){E.callback=null,S=E.priorityLevel;var G=L(E.expirationTime<=te);te=r.unstable_now(),typeof G=="function"?E.callback=G:E===t(_)&&s(_),ae(te)}else s(_);E=t(_)}if(E!==null)var he=!0;else{var we=t(w);we!==null&&ke(ce,we.startTime-te),he=!1}return he}finally{E=null,S=ne,U=!1}}var W=!1,R=null,k=-1,N=5,P=-1;function O(){return!(r.unstable_now()-P<N)}function A(){if(R!==null){var X=r.unstable_now();P=X;var te=!0;try{te=R(!0,X)}finally{te?I():(W=!1,R=null)}}else W=!1}var I;if(typeof $=="function")I=function(){$(A)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,xe=ve.port2;ve.port1.onmessage=A,I=function(){xe.postMessage(null)}}else I=function(){H(A,0)};function Le(X){R=X,W||(W=!0,I())}function ke(X,te){k=H(function(){X(r.unstable_now())},te)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){B||U||(B=!0,Le(ye))},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return t(_)},r.unstable_next=function(X){switch(S){case 1:case 2:case 3:var te=3;break;default:te=S}var ne=S;S=te;try{return X()}finally{S=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,te){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ne=S;S=X;try{return te()}finally{S=ne}},r.unstable_scheduleCallback=function(X,te,ne){var L=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?L+ne:L):ne=L,X){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ne+G,X={id:C++,callback:te,priorityLevel:X,startTime:ne,expirationTime:G,sortIndex:-1},ne>L?(X.sortIndex=ne,e(w,X),t(_)===null&&X===t(w)&&(q?(de(k),k=-1):q=!0,ke(ce,ne-L))):(X.sortIndex=G,e(_,X),B||U||(B=!0,Le(ye))),X},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(X){var te=S;return function(){var ne=S;S=te;try{return X.apply(this,arguments)}finally{S=ne}}}}(cd)),cd}var Cg;function Fw(){return Cg||(Cg=1,ud.exports=jw()),ud.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function Uw(){if(kg)return Yt;kg=1;var r=nf(),e=Fw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(l[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},E={};function S(n){return _.call(E,n)?!0:_.call(C,n)?!1:w.test(n)?E[n]=!0:(C[n]=!0,!1)}function U(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function B(n,i,o,c){if(i===null||typeof i>"u"||U(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function q(n,i,o,c,d,p,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=v}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];H[i]=new q(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new q(n,5,!1,n.toLowerCase(),null,!1,!1)});var de=/[\-:]([a-z])/g;function $(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(de,$);H[i]=new q(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(de,$);H[i]=new q(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(de,$);H[i]=new q(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new q(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new q(n,1,!1,n.toLowerCase(),null,!0,!0)});function ae(n,i,o,c){var d=H.hasOwnProperty(i)?H[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(B(i,o,d,c)&&(o=null),c||d===null?S(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var ce=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ye=Symbol.for("react.element"),W=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),O=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),xe=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),X=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,L;function G(n){if(L===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var he=!1;function we(n,i){if(!n||he)return"";he=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(V){var c=V}Reflect.construct(n,[],i)}else{try{i.call()}catch(V){c=V}n.call(i.prototype)}else{try{throw Error()}catch(V){c=V}n()}}catch(V){if(V&&c&&typeof V.stack=="string"){for(var d=V.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,T=p.length-1;1<=v&&0<=T&&d[v]!==p[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==p[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==p[T]){var b=`
`+d[v].replace(" at new "," at ");return n.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",n.displayName)),b}while(1<=v&&0<=T);break}}}finally{he=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?G(n):""}function Ee(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case W:return"Portal";case N:return"Profiler";case k:return"StrictMode";case I:return"Suspense";case ve:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case A:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xe:return i=n.displayName||null,i!==null?i:Re(n.type)||"Memo";case Le:i=n._payload,n=n._init;try{return Re(n(i))}catch{}}return null}function je(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(i);case 8:return i===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function mt(n){var i=$e(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ir(n){n._valueTracker||(n._valueTracker=mt(n))}function ps(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Dr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xi(n,i){var o=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ms(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Fe(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function bo(n,i){i=i.checked,i!=null&&ae(n,"checked",i,!1)}function Po(n,i){bo(n,i);var o=Fe(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?gs(n,i.type,o):i.hasOwnProperty("defaultValue")&&gs(n,i.type,Fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ma(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function gs(n,i,o){(i!=="number"||Dr(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var sr=Array.isArray;function or(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Fe(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Oo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _s(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(sr(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Fe(o)}}function ys(n,i){var o=Fe(i.value),c=Fe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Do(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ct(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ct(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var lr,Lo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=lr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Lr(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Si=["Webkit","ms","Moz","O"];Object.keys(Ei).forEach(function(n){Si.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ei[i]=Ei[n]})});function Mo(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ei.hasOwnProperty(n)&&Ei[n]?(""+i).trim():i+"px"}function jo(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=Mo(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Fo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uo(n,i){if(i){if(Fo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Vo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function vs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var zo=null,on=null,zn=null;function ws(n){if(n=dl(n)){if(typeof zo!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Wa(i),zo(n.stateNode,n.type,i))}}function ar(n){on?zn?zn.push(n):zn=[n]:on=n}function Bo(){if(on){var n=on,i=zn;if(zn=on=null,ws(n),i)for(n=0;n<i.length;n++)ws(i[n])}}function xs(n,i){return n(i)}function Ho(){}var ur=!1;function Wo(n,i,o){if(ur)return n(i,o);ur=!0;try{return xs(n,i,o)}finally{ur=!1,(on!==null||zn!==null)&&(Ho(),Bo())}}function ot(n,i){var o=n.stateNode;if(o===null)return null;var c=Wa(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Es=!1;if(m)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Es=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Es=!1}function ki(n,i,o,c,d,p,v,T,b){var V=Array.prototype.slice.call(arguments,3);try{i.apply(o,V)}catch(Y){this.onError(Y)}}var Ii=!1,Ss=null,yn=!1,$o=null,Oc={onError:function(n){Ii=!0,Ss=n}};function Go(n,i,o,c,d,p,v,T,b){Ii=!1,Ss=null,ki.apply(Oc,arguments)}function Dc(n,i,o,c,d,p,v,T,b){if(Go.apply(this,arguments),Ii){if(Ii){var V=Ss;Ii=!1,Ss=null}else throw Error(t(198));yn||(yn=!0,$o=V)}}function vn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ti(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function wn(n){if(vn(n)!==n)throw Error(t(188))}function ga(n){var i=n.alternate;if(!i){if(i=vn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return wn(d),n;if(p===c)return wn(d),i;p=p.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=p;else{for(var v=!1,T=d.child;T;){if(T===o){v=!0,o=d,c=p;break}if(T===c){v=!0,c=d,o=p;break}T=T.sibling}if(!v){for(T=p.child;T;){if(T===o){v=!0,o=p,c=d;break}if(T===c){v=!0,c=p,o=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function qo(n){return n=ga(n),n!==null?Cs(n):null}function Cs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Cs(n);if(i!==null)return i;n=n.sibling}return null}var ks=e.unstable_scheduleCallback,Ko=e.unstable_cancelCallback,_a=e.unstable_shouldYield,Lc=e.unstable_requestPaint,Ge=e.unstable_now,ya=e.unstable_getCurrentPriorityLevel,Ni=e.unstable_ImmediatePriority,Mr=e.unstable_UserBlockingPriority,ln=e.unstable_NormalPriority,Yo=e.unstable_LowPriority,va=e.unstable_IdlePriority,Ri=null,Zt=null;function wa(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ri,n,void 0,(n.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Ea,Qo=Math.log,xa=Math.LN2;function Ea(n){return n>>>=0,n===0?32:31-(Qo(n)/xa|0)|0}var Is=64,Ts=4194304;function jr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ai(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=o&268435455;if(v!==0){var T=v&~d;T!==0?c=jr(T):(p&=v,p!==0&&(c=jr(p)))}else v=o&~d,v!==0?c=jr(v):p!==0&&(c=jr(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-Mt(i),d=1<<o,c|=n[o],i&=~d;return c}function Mc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cr(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Mt(p),T=1<<v,b=d[v];b===-1?((T&o)===0||(T&c)!==0)&&(d[v]=Mc(T,i)):b<=i&&(n.expiredLanes|=T),p&=~T}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bi(){var n=Is;return Is<<=1,(Is&4194240)===0&&(Is=64),n}function Fr(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Ur(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Mt(i),n[i]=o}function We(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Mt(o),p=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~p}}function Vr(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-Mt(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var Ne=0;function zr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Sa,Ns,Ca,ka,Ia,Xo=!1,Bn=[],Ct=null,xn=null,En=null,Br=new Map,an=new Map,Hn=[],jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ta(n,i){switch(n){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Br.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":an.delete(i.pointerId)}}function zt(n,i,o,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=dl(i),i!==null&&Ns(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Fc(n,i,o,c,d){switch(i){case"focusin":return Ct=zt(Ct,n,i,o,c,d),!0;case"dragenter":return xn=zt(xn,n,i,o,c,d),!0;case"mouseover":return En=zt(En,n,i,o,c,d),!0;case"pointerover":var p=d.pointerId;return Br.set(p,zt(Br.get(p)||null,n,i,o,c,d)),!0;case"gotpointercapture":return p=d.pointerId,an.set(p,zt(an.get(p)||null,n,i,o,c,d)),!0}return!1}function Na(n){var i=Li(n.target);if(i!==null){var o=vn(i);if(o!==null){if(i=o.tag,i===13){if(i=Ti(o),i!==null){n.blockedOn=i,Ia(n.priority,function(){Ca(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function hr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Rs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Ci=c,o.target.dispatchEvent(c),Ci=null}else return i=dl(o),i!==null&&Ns(i),n.blockedOn=o,!1;i.shift()}return!0}function Pi(n,i,o){hr(n)&&o.delete(i)}function Ra(){Xo=!1,Ct!==null&&hr(Ct)&&(Ct=null),xn!==null&&hr(xn)&&(xn=null),En!==null&&hr(En)&&(En=null),Br.forEach(Pi),an.forEach(Pi)}function Sn(n,i){n.blockedOn===i&&(n.blockedOn=null,Xo||(Xo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ra)))}function Cn(n){function i(d){return Sn(d,n)}if(0<Bn.length){Sn(Bn[0],n);for(var o=1;o<Bn.length;o++){var c=Bn[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Ct!==null&&Sn(Ct,n),xn!==null&&Sn(xn,n),En!==null&&Sn(En,n),Br.forEach(i),an.forEach(i),o=0;o<Hn.length;o++)c=Hn[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Hn.length&&(o=Hn[0],o.blockedOn===null);)Na(o),o.blockedOn===null&&Hn.shift()}var dr=ce.ReactCurrentBatchConfig,Hr=!0;function et(n,i,o,c){var d=Ne,p=dr.transition;dr.transition=null;try{Ne=1,Jo(n,i,o,c)}finally{Ne=d,dr.transition=p}}function Uc(n,i,o,c){var d=Ne,p=dr.transition;dr.transition=null;try{Ne=4,Jo(n,i,o,c)}finally{Ne=d,dr.transition=p}}function Jo(n,i,o,c){if(Hr){var d=Rs(n,i,o,c);if(d===null)Qc(n,i,c,Oi,o),Ta(n,c);else if(Fc(d,n,i,o,c))c.stopPropagation();else if(Ta(n,c),i&4&&-1<jc.indexOf(n)){for(;d!==null;){var p=dl(d);if(p!==null&&Sa(p),p=Rs(n,i,o,c),p===null&&Qc(n,i,c,Oi,o),p===d)break;d=p}d!==null&&c.stopPropagation()}else Qc(n,i,c,null,o)}}var Oi=null;function Rs(n,i,o,c){if(Oi=null,n=vs(c),n=Li(n),n!==null)if(i=vn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ti(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Oi=n,null}function Zo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ya()){case Ni:return 1;case Mr:return 4;case ln:case Yo:return 16;case va:return 536870912;default:return 16}default:return 16}}var tn=null,As=null,Bt=null;function el(){if(Bt)return Bt;var n,i=As,o=i.length,c,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<o&&i[n]===d[n];n++);var v=o-n;for(c=1;c<=v&&i[o-c]===d[p-c];c++);return Bt=d.slice(n,1<c?1-c:void 0)}function bs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function tl(){return!1}function kt(n){function i(o,c,d,p,v){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Wn:tl,this.isPropagationStopped=tl,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),i}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ps=kt(kn),$n=ne({},kn,{view:0,detail:0}),Vc=kt($n),Os,fr,Wr,Di=ne({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:a,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wr&&(Wr&&n.type==="mousemove"?(Os=n.screenX-Wr.screenX,fr=n.screenY-Wr.screenY):fr=Os=0,Wr=n),Os)},movementY:function(n){return"movementY"in n?n.movementY:fr}}),Ds=kt(Di),nl=ne({},Di,{dataTransfer:0}),Aa=kt(nl),Ls=ne({},$n,{relatedTarget:0}),Ms=kt(Ls),ba=ne({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),pr=kt(ba),Pa=ne({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Oa=kt(Pa),Da=ne({},kn,{data:0}),rl=kt(Da),Ht={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},La={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ma={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $r(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ma[n])?!!i[n]:!1}function a(){return $r}var f=ne({},$n,{key:function(n){if(n.key){var i=Ht[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=bs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?La[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:a,charCode:function(n){return n.type==="keypress"?bs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),g=kt(f),x=ne({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M=kt(x),z=ne({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:a}),ee=kt(z),Be=ne({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),dt=kt(Be),Ae=ne({},Di,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gt=kt(Ae),_t=[9,13,27,32],Gn=m&&"CompositionEvent"in window,It=null;m&&"documentMode"in document&&(It=document.documentMode);var js=m&&"TextEvent"in window&&!It,Fs=m&&(!Gn||It&&8<It&&11>=It),hp=" ",dp=!1;function fp(n,i){switch(n){case"keyup":return _t.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Us=!1;function A0(n,i){switch(n){case"compositionend":return pp(i);case"keypress":return i.which!==32?null:(dp=!0,hp);case"textInput":return n=i.data,n===hp&&dp?null:n;default:return null}}function b0(n,i){if(Us)return n==="compositionend"||!Gn&&fp(n,i)?(n=el(),Bt=As=tn=null,Us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Fs&&i.locale!=="ko"?null:i.data;default:return null}}var P0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!P0[n.type]:i==="textarea"}function gp(n,i,o,c){ar(c),i=za(i,"onChange"),0<i.length&&(o=new Ps("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var il=null,sl=null;function O0(n){Dp(n,0)}function ja(n){var i=Ws(n);if(ps(i))return n}function D0(n,i){if(n==="change")return i}var _p=!1;if(m){var zc;if(m){var Bc="oninput"in document;if(!Bc){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),Bc=typeof yp.oninput=="function"}zc=Bc}else zc=!1;_p=zc&&(!document.documentMode||9<document.documentMode)}function vp(){il&&(il.detachEvent("onpropertychange",wp),sl=il=null)}function wp(n){if(n.propertyName==="value"&&ja(sl)){var i=[];gp(i,sl,n,vs(n)),Wo(O0,i)}}function L0(n,i,o){n==="focusin"?(vp(),il=i,sl=o,il.attachEvent("onpropertychange",wp)):n==="focusout"&&vp()}function M0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ja(sl)}function j0(n,i){if(n==="click")return ja(i)}function F0(n,i){if(n==="input"||n==="change")return ja(i)}function U0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var In=typeof Object.is=="function"?Object.is:U0;function ol(n,i){if(In(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!_.call(i,d)||!In(n[d],i[d]))return!1}return!0}function xp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ep(n,i){var o=xp(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=xp(o)}}function Sp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Sp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Cp(){for(var n=window,i=Dr();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Dr(n.document)}return i}function Hc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function V0(n){var i=Cp(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Sp(o.ownerDocument.documentElement,o)){if(c!==null&&Hc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Ep(o,p);var v=Ep(o,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var z0=m&&"documentMode"in document&&11>=document.documentMode,Vs=null,Wc=null,ll=null,$c=!1;function kp(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$c||Vs==null||Vs!==Dr(c)||(c=Vs,"selectionStart"in c&&Hc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ll&&ol(ll,c)||(ll=c,c=za(Wc,"onSelect"),0<c.length&&(i=new Ps("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Vs)))}function Fa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var zs={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},Gc={},Ip={};m&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Ua(n){if(Gc[n])return Gc[n];if(!zs[n])return n;var i=zs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ip)return Gc[n]=i[o];return n}var Tp=Ua("animationend"),Np=Ua("animationiteration"),Rp=Ua("animationstart"),Ap=Ua("transitionend"),bp=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,i){bp.set(n,i),u(i,[n])}for(var qc=0;qc<Pp.length;qc++){var Kc=Pp[qc],B0=Kc.toLowerCase(),H0=Kc[0].toUpperCase()+Kc.slice(1);Gr(B0,"on"+H0)}Gr(Tp,"onAnimationEnd"),Gr(Np,"onAnimationIteration"),Gr(Rp,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(Ap,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W0=new Set("cancel close invalid load scroll toggle".split(" ").concat(al));function Op(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,Dc(c,i,void 0,n),n.currentTarget=null}function Dp(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var v=c.length-1;0<=v;v--){var T=c[v],b=T.instance,V=T.currentTarget;if(T=T.listener,b!==p&&d.isPropagationStopped())break e;Op(d,T,V),p=b}else for(v=0;v<c.length;v++){if(T=c[v],b=T.instance,V=T.currentTarget,T=T.listener,b!==p&&d.isPropagationStopped())break e;Op(d,T,V),p=b}}}if(yn)throw n=$o,yn=!1,$o=null,n}function Xe(n,i){var o=i[nh];o===void 0&&(o=i[nh]=new Set);var c=n+"__bubble";o.has(c)||(Lp(i,n,2,!1),o.add(c))}function Yc(n,i,o){var c=0;i&&(c|=4),Lp(o,n,c,i)}var Va="_reactListening"+Math.random().toString(36).slice(2);function ul(n){if(!n[Va]){n[Va]=!0,s.forEach(function(o){o!=="selectionchange"&&(W0.has(o)||Yc(o,!1,n),Yc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Va]||(i[Va]=!0,Yc("selectionchange",!1,i))}}function Lp(n,i,o,c){switch(Zo(i)){case 1:var d=et;break;case 4:d=Uc;break;default:d=Jo}o=d.bind(null,i,o,n),d=void 0,!Es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Qc(n,i,o,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var b=v.tag;if((b===3||b===4)&&(b=v.stateNode.containerInfo,b===d||b.nodeType===8&&b.parentNode===d))return;v=v.return}for(;T!==null;){if(v=Li(T),v===null)return;if(b=v.tag,b===5||b===6){c=p=v;continue e}T=T.parentNode}}c=c.return}Wo(function(){var V=p,Y=vs(o),Q=[];e:{var K=bp.get(n);if(K!==void 0){var re=Ps,se=n;switch(n){case"keypress":if(bs(o)===0)break e;case"keydown":case"keyup":re=g;break;case"focusin":se="focus",re=Ms;break;case"focusout":se="blur",re=Ms;break;case"beforeblur":case"afterblur":re=Ms;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Aa;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=ee;break;case Tp:case Np:case Rp:re=pr;break;case Ap:re=dt;break;case"scroll":re=Vc;break;case"wheel":re=gt;break;case"copy":case"cut":case"paste":re=Oa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=M}var le=(i&4)!==0,lt=!le&&n==="scroll",j=le?K!==null?K+"Capture":null:K;le=[];for(var D=V,F;D!==null;){F=D;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,j!==null&&(J=ot(D,j),J!=null&&le.push(cl(D,J,F)))),lt)break;D=D.return}0<le.length&&(K=new re(K,se,null,o,Y),Q.push({event:K,listeners:le}))}}if((i&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",K&&o!==Ci&&(se=o.relatedTarget||o.fromElement)&&(Li(se)||se[mr]))break e;if((re||K)&&(K=Y.window===Y?Y:(K=Y.ownerDocument)?K.defaultView||K.parentWindow:window,re?(se=o.relatedTarget||o.toElement,re=V,se=se?Li(se):null,se!==null&&(lt=vn(se),se!==lt||se.tag!==5&&se.tag!==6)&&(se=null)):(re=null,se=V),re!==se)){if(le=Ds,J="onMouseLeave",j="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(le=M,J="onPointerLeave",j="onPointerEnter",D="pointer"),lt=re==null?K:Ws(re),F=se==null?K:Ws(se),K=new le(J,D+"leave",re,o,Y),K.target=lt,K.relatedTarget=F,J=null,Li(Y)===V&&(le=new le(j,D+"enter",se,o,Y),le.target=F,le.relatedTarget=lt,J=le),lt=J,re&&se)t:{for(le=re,j=se,D=0,F=le;F;F=Bs(F))D++;for(F=0,J=j;J;J=Bs(J))F++;for(;0<D-F;)le=Bs(le),D--;for(;0<F-D;)j=Bs(j),F--;for(;D--;){if(le===j||j!==null&&le===j.alternate)break t;le=Bs(le),j=Bs(j)}le=null}else le=null;re!==null&&Mp(Q,K,re,le,!1),se!==null&&lt!==null&&Mp(Q,lt,se,le,!0)}}e:{if(K=V?Ws(V):window,re=K.nodeName&&K.nodeName.toLowerCase(),re==="select"||re==="input"&&K.type==="file")var ue=D0;else if(mp(K))if(_p)ue=F0;else{ue=M0;var fe=L0}else(re=K.nodeName)&&re.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ue=j0);if(ue&&(ue=ue(n,V))){gp(Q,ue,o,Y);break e}fe&&fe(n,K,V),n==="focusout"&&(fe=K._wrapperState)&&fe.controlled&&K.type==="number"&&gs(K,"number",K.value)}switch(fe=V?Ws(V):window,n){case"focusin":(mp(fe)||fe.contentEditable==="true")&&(Vs=fe,Wc=V,ll=null);break;case"focusout":ll=Wc=Vs=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,kp(Q,o,Y);break;case"selectionchange":if(z0)break;case"keydown":case"keyup":kp(Q,o,Y)}var pe;if(Gn)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Us?fp(n,o)&&(_e="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(_e="onCompositionStart");_e&&(Fs&&o.locale!=="ko"&&(Us||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Us&&(pe=el()):(tn=Y,As="value"in tn?tn.value:tn.textContent,Us=!0)),fe=za(V,_e),0<fe.length&&(_e=new rl(_e,n,null,o,Y),Q.push({event:_e,listeners:fe}),pe?_e.data=pe:(pe=pp(o),pe!==null&&(_e.data=pe)))),(pe=js?A0(n,o):b0(n,o))&&(V=za(V,"onBeforeInput"),0<V.length&&(Y=new rl("onBeforeInput","beforeinput",null,o,Y),Q.push({event:Y,listeners:V}),Y.data=pe))}Dp(Q,i)})}function cl(n,i,o){return{instance:n,listener:i,currentTarget:o}}function za(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ot(n,o),p!=null&&c.unshift(cl(n,p,d)),p=ot(n,i),p!=null&&c.push(cl(n,p,d))),n=n.return}return c}function Bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Mp(n,i,o,c,d){for(var p=i._reactName,v=[];o!==null&&o!==c;){var T=o,b=T.alternate,V=T.stateNode;if(b!==null&&b===c)break;T.tag===5&&V!==null&&(T=V,d?(b=ot(o,p),b!=null&&v.unshift(cl(o,b,T))):d||(b=ot(o,p),b!=null&&v.push(cl(o,b,T)))),o=o.return}v.length!==0&&n.push({event:i,listeners:v})}var $0=/\r\n?/g,G0=/\u0000|\uFFFD/g;function jp(n){return(typeof n=="string"?n:""+n).replace($0,`
`).replace(G0,"")}function Ba(n,i,o){if(i=jp(i),jp(n)!==i&&o)throw Error(t(425))}function Ha(){}var Xc=null,Jc=null;function Zc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var eh=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,Fp=typeof Promise=="function"?Promise:void 0,K0=typeof queueMicrotask=="function"?queueMicrotask:typeof Fp<"u"?function(n){return Fp.resolve(null).then(n).catch(Y0)}:eh;function Y0(n){setTimeout(function(){throw n})}function th(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),Cn(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);Cn(i)}function qr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Up(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),qn="__reactFiber$"+Hs,hl="__reactProps$"+Hs,mr="__reactContainer$"+Hs,nh="__reactEvents$"+Hs,Q0="__reactListeners$"+Hs,X0="__reactHandles$"+Hs;function Li(n){var i=n[qn];if(i)return i;for(var o=n.parentNode;o;){if(i=o[mr]||o[qn]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Up(n);n!==null;){if(o=n[qn])return o;n=Up(n)}return i}n=o,o=n.parentNode}return null}function dl(n){return n=n[qn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wa(n){return n[hl]||null}var rh=[],$s=-1;function Kr(n){return{current:n}}function Je(n){0>$s||(n.current=rh[$s],rh[$s]=null,$s--)}function qe(n,i){$s++,rh[$s]=n.current,n.current=i}var Yr={},Pt=Kr(Yr),Wt=Kr(!1),Mi=Yr;function Gs(n,i){var o=n.type.contextTypes;if(!o)return Yr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function $t(n){return n=n.childContextTypes,n!=null}function $a(){Je(Wt),Je(Pt)}function Vp(n,i,o){if(Pt.current!==Yr)throw Error(t(168));qe(Pt,i),qe(Wt,o)}function zp(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,je(n)||"Unknown",d));return ne({},o,c)}function Ga(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yr,Mi=Pt.current,qe(Pt,n),qe(Wt,Wt.current),!0}function Bp(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=zp(n,i,Mi),c.__reactInternalMemoizedMergedChildContext=n,Je(Wt),Je(Pt),qe(Pt,n)):Je(Wt),qe(Wt,o)}var gr=null,qa=!1,ih=!1;function Hp(n){gr===null?gr=[n]:gr.push(n)}function J0(n){qa=!0,Hp(n)}function Qr(){if(!ih&&gr!==null){ih=!0;var n=0,i=Ne;try{var o=gr;for(Ne=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}gr=null,qa=!1}catch(d){throw gr!==null&&(gr=gr.slice(n+1)),ks(Ni,Qr),d}finally{Ne=i,ih=!1}}return null}var qs=[],Ks=0,Ka=null,Ya=0,un=[],cn=0,ji=null,_r=1,yr="";function Fi(n,i){qs[Ks++]=Ya,qs[Ks++]=Ka,Ka=n,Ya=i}function Wp(n,i,o){un[cn++]=_r,un[cn++]=yr,un[cn++]=ji,ji=n;var c=_r;n=yr;var d=32-Mt(c)-1;c&=~(1<<d),o+=1;var p=32-Mt(i)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,_r=1<<32-Mt(i)+d|o<<d|c,yr=p+n}else _r=1<<p|o<<d|c,yr=n}function sh(n){n.return!==null&&(Fi(n,1),Wp(n,1,0))}function oh(n){for(;n===Ka;)Ka=qs[--Ks],qs[Ks]=null,Ya=qs[--Ks],qs[Ks]=null;for(;n===ji;)ji=un[--cn],un[cn]=null,yr=un[--cn],un[cn]=null,_r=un[--cn],un[cn]=null}var nn=null,rn=null,Ze=!1,Tn=null;function $p(n,i){var o=pn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Gp(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,nn=n,rn=qr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,nn=n,rn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ji!==null?{id:_r,overflow:yr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=pn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,nn=n,rn=null,!0):!1;default:return!1}}function lh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ah(n){if(Ze){var i=rn;if(i){var o=i;if(!Gp(n,i)){if(lh(n))throw Error(t(418));i=qr(o.nextSibling);var c=nn;i&&Gp(n,i)?$p(c,o):(n.flags=n.flags&-4097|2,Ze=!1,nn=n)}}else{if(lh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ze=!1,nn=n}}}function qp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function Qa(n){if(n!==nn)return!1;if(!Ze)return qp(n),Ze=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Zc(n.type,n.memoizedProps)),i&&(i=rn)){if(lh(n))throw Kp(),Error(t(418));for(;i;)$p(n,i),i=qr(i.nextSibling)}if(qp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){rn=qr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}rn=null}}else rn=nn?qr(n.stateNode.nextSibling):null;return!0}function Kp(){for(var n=rn;n;)n=qr(n.nextSibling)}function Ys(){rn=nn=null,Ze=!1}function uh(n){Tn===null?Tn=[n]:Tn.push(n)}var Z0=ce.ReactCurrentBatchConfig;function fl(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(v){var T=d.refs;v===null?delete T[p]:T[p]=v},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Xa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Yp(n){var i=n._init;return i(n._payload)}function Qp(n){function i(j,D){if(n){var F=j.deletions;F===null?(j.deletions=[D],j.flags|=16):F.push(D)}}function o(j,D){if(!n)return null;for(;D!==null;)i(j,D),D=D.sibling;return null}function c(j,D){for(j=new Map;D!==null;)D.key!==null?j.set(D.key,D):j.set(D.index,D),D=D.sibling;return j}function d(j,D){return j=ii(j,D),j.index=0,j.sibling=null,j}function p(j,D,F){return j.index=F,n?(F=j.alternate,F!==null?(F=F.index,F<D?(j.flags|=2,D):F):(j.flags|=2,D)):(j.flags|=1048576,D)}function v(j){return n&&j.alternate===null&&(j.flags|=2),j}function T(j,D,F,J){return D===null||D.tag!==6?(D=ed(F,j.mode,J),D.return=j,D):(D=d(D,F),D.return=j,D)}function b(j,D,F,J){var ue=F.type;return ue===R?Y(j,D,F.props.children,J,F.key):D!==null&&(D.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Le&&Yp(ue)===D.type)?(J=d(D,F.props),J.ref=fl(j,D,F),J.return=j,J):(J=xu(F.type,F.key,F.props,null,j.mode,J),J.ref=fl(j,D,F),J.return=j,J)}function V(j,D,F,J){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=td(F,j.mode,J),D.return=j,D):(D=d(D,F.children||[]),D.return=j,D)}function Y(j,D,F,J,ue){return D===null||D.tag!==7?(D=Gi(F,j.mode,J,ue),D.return=j,D):(D=d(D,F),D.return=j,D)}function Q(j,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=ed(""+D,j.mode,F),D.return=j,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ye:return F=xu(D.type,D.key,D.props,null,j.mode,F),F.ref=fl(j,null,D),F.return=j,F;case W:return D=td(D,j.mode,F),D.return=j,D;case Le:var J=D._init;return Q(j,J(D._payload),F)}if(sr(D)||te(D))return D=Gi(D,j.mode,F,null),D.return=j,D;Xa(j,D)}return null}function K(j,D,F,J){var ue=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ue!==null?null:T(j,D,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ye:return F.key===ue?b(j,D,F,J):null;case W:return F.key===ue?V(j,D,F,J):null;case Le:return ue=F._init,K(j,D,ue(F._payload),J)}if(sr(F)||te(F))return ue!==null?null:Y(j,D,F,J,null);Xa(j,F)}return null}function re(j,D,F,J,ue){if(typeof J=="string"&&J!==""||typeof J=="number")return j=j.get(F)||null,T(D,j,""+J,ue);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case ye:return j=j.get(J.key===null?F:J.key)||null,b(D,j,J,ue);case W:return j=j.get(J.key===null?F:J.key)||null,V(D,j,J,ue);case Le:var fe=J._init;return re(j,D,F,fe(J._payload),ue)}if(sr(J)||te(J))return j=j.get(F)||null,Y(D,j,J,ue,null);Xa(D,J)}return null}function se(j,D,F,J){for(var ue=null,fe=null,pe=D,_e=D=0,wt=null;pe!==null&&_e<F.length;_e++){pe.index>_e?(wt=pe,pe=null):wt=pe.sibling;var Me=K(j,pe,F[_e],J);if(Me===null){pe===null&&(pe=wt);break}n&&pe&&Me.alternate===null&&i(j,pe),D=p(Me,D,_e),fe===null?ue=Me:fe.sibling=Me,fe=Me,pe=wt}if(_e===F.length)return o(j,pe),Ze&&Fi(j,_e),ue;if(pe===null){for(;_e<F.length;_e++)pe=Q(j,F[_e],J),pe!==null&&(D=p(pe,D,_e),fe===null?ue=pe:fe.sibling=pe,fe=pe);return Ze&&Fi(j,_e),ue}for(pe=c(j,pe);_e<F.length;_e++)wt=re(pe,j,_e,F[_e],J),wt!==null&&(n&&wt.alternate!==null&&pe.delete(wt.key===null?_e:wt.key),D=p(wt,D,_e),fe===null?ue=wt:fe.sibling=wt,fe=wt);return n&&pe.forEach(function(si){return i(j,si)}),Ze&&Fi(j,_e),ue}function le(j,D,F,J){var ue=te(F);if(typeof ue!="function")throw Error(t(150));if(F=ue.call(F),F==null)throw Error(t(151));for(var fe=ue=null,pe=D,_e=D=0,wt=null,Me=F.next();pe!==null&&!Me.done;_e++,Me=F.next()){pe.index>_e?(wt=pe,pe=null):wt=pe.sibling;var si=K(j,pe,Me.value,J);if(si===null){pe===null&&(pe=wt);break}n&&pe&&si.alternate===null&&i(j,pe),D=p(si,D,_e),fe===null?ue=si:fe.sibling=si,fe=si,pe=wt}if(Me.done)return o(j,pe),Ze&&Fi(j,_e),ue;if(pe===null){for(;!Me.done;_e++,Me=F.next())Me=Q(j,Me.value,J),Me!==null&&(D=p(Me,D,_e),fe===null?ue=Me:fe.sibling=Me,fe=Me);return Ze&&Fi(j,_e),ue}for(pe=c(j,pe);!Me.done;_e++,Me=F.next())Me=re(pe,j,_e,Me.value,J),Me!==null&&(n&&Me.alternate!==null&&pe.delete(Me.key===null?_e:Me.key),D=p(Me,D,_e),fe===null?ue=Me:fe.sibling=Me,fe=Me);return n&&pe.forEach(function(Pw){return i(j,Pw)}),Ze&&Fi(j,_e),ue}function lt(j,D,F,J){if(typeof F=="object"&&F!==null&&F.type===R&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case ye:e:{for(var ue=F.key,fe=D;fe!==null;){if(fe.key===ue){if(ue=F.type,ue===R){if(fe.tag===7){o(j,fe.sibling),D=d(fe,F.props.children),D.return=j,j=D;break e}}else if(fe.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Le&&Yp(ue)===fe.type){o(j,fe.sibling),D=d(fe,F.props),D.ref=fl(j,fe,F),D.return=j,j=D;break e}o(j,fe);break}else i(j,fe);fe=fe.sibling}F.type===R?(D=Gi(F.props.children,j.mode,J,F.key),D.return=j,j=D):(J=xu(F.type,F.key,F.props,null,j.mode,J),J.ref=fl(j,D,F),J.return=j,j=J)}return v(j);case W:e:{for(fe=F.key;D!==null;){if(D.key===fe)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){o(j,D.sibling),D=d(D,F.children||[]),D.return=j,j=D;break e}else{o(j,D);break}else i(j,D);D=D.sibling}D=td(F,j.mode,J),D.return=j,j=D}return v(j);case Le:return fe=F._init,lt(j,D,fe(F._payload),J)}if(sr(F))return se(j,D,F,J);if(te(F))return le(j,D,F,J);Xa(j,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(o(j,D.sibling),D=d(D,F),D.return=j,j=D):(o(j,D),D=ed(F,j.mode,J),D.return=j,j=D),v(j)):o(j,D)}return lt}var Qs=Qp(!0),Xp=Qp(!1),Ja=Kr(null),Za=null,Xs=null,ch=null;function hh(){ch=Xs=Za=null}function dh(n){var i=Ja.current;Je(Ja),n._currentValue=i}function fh(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Js(n,i){Za=n,ch=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gt=!0),n.firstContext=null)}function hn(n){var i=n._currentValue;if(ch!==n)if(n={context:n,memoizedValue:i,next:null},Xs===null){if(Za===null)throw Error(t(308));Xs=n,Za.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return i}var Ui=null;function ph(n){Ui===null?Ui=[n]:Ui.push(n)}function Jp(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,ph(i)):(o.next=d.next,d.next=o),i.interleaved=o,vr(n,c)}function vr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Xr=!1;function mh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function wr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Jr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(De&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,vr(n,o)}return d=c.interleaved,d===null?(i.next=i,ph(c)):(i.next=d.next,d.next=i),c.interleaved=i,vr(n,o)}function eu(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Vr(n,o)}}function em(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function tu(n,i,o,c){var d=n.updateQueue;Xr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var b=T,V=b.next;b.next=null,v===null?p=V:v.next=V,v=b;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,T=Y.lastBaseUpdate,T!==v&&(T===null?Y.firstBaseUpdate=V:T.next=V,Y.lastBaseUpdate=b))}if(p!==null){var Q=d.baseState;v=0,Y=V=b=null,T=p;do{var K=T.lane,re=T.eventTime;if((c&K)===K){Y!==null&&(Y=Y.next={eventTime:re,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var se=n,le=T;switch(K=i,re=o,le.tag){case 1:if(se=le.payload,typeof se=="function"){Q=se.call(re,Q,K);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=le.payload,K=typeof se=="function"?se.call(re,Q,K):se,K==null)break e;Q=ne({},Q,K);break e;case 2:Xr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[T]:K.push(T))}else re={eventTime:re,lane:K,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Y===null?(V=Y=re,b=Q):Y=Y.next=re,v|=K;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;K=T,T=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Y===null&&(b=Q),d.baseState=b,d.firstBaseUpdate=V,d.lastBaseUpdate=Y,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Bi|=v,n.lanes=v,n.memoizedState=Q}}function tm(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var pl={},Kn=Kr(pl),ml=Kr(pl),gl=Kr(pl);function Vi(n){if(n===pl)throw Error(t(174));return n}function gh(n,i){switch(qe(gl,i),qe(ml,n),qe(Kn,pl),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ht(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ht(i,n)}Je(Kn),qe(Kn,i)}function Zs(){Je(Kn),Je(ml),Je(gl)}function nm(n){Vi(gl.current);var i=Vi(Kn.current),o=ht(i,n.type);i!==o&&(qe(ml,n),qe(Kn,o))}function _h(n){ml.current===n&&(Je(Kn),Je(ml))}var tt=Kr(0);function nu(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yh=[];function vh(){for(var n=0;n<yh.length;n++)yh[n]._workInProgressVersionPrimary=null;yh.length=0}var ru=ce.ReactCurrentDispatcher,wh=ce.ReactCurrentBatchConfig,zi=0,nt=null,ft=null,yt=null,iu=!1,_l=!1,yl=0,ew=0;function Ot(){throw Error(t(321))}function xh(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!In(n[o],i[o]))return!1;return!0}function Eh(n,i,o,c,d,p){if(zi=p,nt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ru.current=n===null||n.memoizedState===null?iw:sw,n=o(c,d),_l){p=0;do{if(_l=!1,yl=0,25<=p)throw Error(t(301));p+=1,yt=ft=null,i.updateQueue=null,ru.current=ow,n=o(c,d)}while(_l)}if(ru.current=lu,i=ft!==null&&ft.next!==null,zi=0,yt=ft=nt=null,iu=!1,i)throw Error(t(300));return n}function Sh(){var n=yl!==0;return yl=0,n}function Yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?nt.memoizedState=yt=n:yt=yt.next=n,yt}function dn(){if(ft===null){var n=nt.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var i=yt===null?nt.memoizedState:yt.next;if(i!==null)yt=i,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},yt===null?nt.memoizedState=yt=n:yt=yt.next=n}return yt}function vl(n,i){return typeof i=="function"?i(n):i}function Ch(n){var i=dn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=ft,d=c.baseQueue,p=o.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=v=null,b=null,V=p;do{var Y=V.lane;if((zi&Y)===Y)b!==null&&(b=b.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),c=V.hasEagerState?V.eagerState:n(c,V.action);else{var Q={lane:Y,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};b===null?(T=b=Q,v=c):b=b.next=Q,nt.lanes|=Y,Bi|=Y}V=V.next}while(V!==null&&V!==p);b===null?v=c:b.next=T,In(c,i.memoizedState)||(Gt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=b,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do p=d.lane,nt.lanes|=p,Bi|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function kh(n){var i=dn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);In(p,i.memoizedState)||(Gt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,c]}function rm(){}function im(n,i){var o=nt,c=dn(),d=i(),p=!In(c.memoizedState,d);if(p&&(c.memoizedState=d,Gt=!0),c=c.queue,Ih(lm.bind(null,o,c,n),[n]),c.getSnapshot!==i||p||yt!==null&&yt.memoizedState.tag&1){if(o.flags|=2048,wl(9,om.bind(null,o,c,d,i),void 0,null),vt===null)throw Error(t(349));(zi&30)!==0||sm(o,i,d)}return d}function sm(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=nt.updateQueue,i===null?(i={lastEffect:null,stores:null},nt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function om(n,i,o,c){i.value=o,i.getSnapshot=c,am(i)&&um(n)}function lm(n,i,o){return o(function(){am(i)&&um(n)})}function am(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!In(n,o)}catch{return!0}}function um(n){var i=vr(n,1);i!==null&&bn(i,n,1,-1)}function cm(n){var i=Yn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vl,lastRenderedState:n},i.queue=n,n=n.dispatch=rw.bind(null,nt,n),[i.memoizedState,n]}function wl(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=nt.updateQueue,i===null?(i={lastEffect:null,stores:null},nt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function hm(){return dn().memoizedState}function su(n,i,o,c){var d=Yn();nt.flags|=n,d.memoizedState=wl(1|i,o,void 0,c===void 0?null:c)}function ou(n,i,o,c){var d=dn();c=c===void 0?null:c;var p=void 0;if(ft!==null){var v=ft.memoizedState;if(p=v.destroy,c!==null&&xh(c,v.deps)){d.memoizedState=wl(i,o,p,c);return}}nt.flags|=n,d.memoizedState=wl(1|i,o,p,c)}function dm(n,i){return su(8390656,8,n,i)}function Ih(n,i){return ou(2048,8,n,i)}function fm(n,i){return ou(4,2,n,i)}function pm(n,i){return ou(4,4,n,i)}function mm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function gm(n,i,o){return o=o!=null?o.concat([n]):null,ou(4,4,mm.bind(null,i,n),o)}function Th(){}function _m(n,i){var o=dn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&xh(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function ym(n,i){var o=dn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&xh(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function vm(n,i,o){return(zi&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=o):(In(o,i)||(o=bi(),nt.lanes|=o,Bi|=o,n.baseState=!0),i)}function tw(n,i){var o=Ne;Ne=o!==0&&4>o?o:4,n(!0);var c=wh.transition;wh.transition={};try{n(!1),i()}finally{Ne=o,wh.transition=c}}function wm(){return dn().memoizedState}function nw(n,i,o){var c=ni(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},xm(n))Em(i,o);else if(o=Jp(n,i,o,c),o!==null){var d=Ft();bn(o,n,c,d),Sm(o,i,c)}}function rw(n,i,o){var c=ni(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(xm(n))Em(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var v=i.lastRenderedState,T=p(v,o);if(d.hasEagerState=!0,d.eagerState=T,In(T,v)){var b=i.interleaved;b===null?(d.next=d,ph(i)):(d.next=b.next,b.next=d),i.interleaved=d;return}}catch{}finally{}o=Jp(n,i,d,c),o!==null&&(d=Ft(),bn(o,n,c,d),Sm(o,i,c))}}function xm(n){var i=n.alternate;return n===nt||i!==null&&i===nt}function Em(n,i){_l=iu=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Sm(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Vr(n,o)}}var lu={readContext:hn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},iw={readContext:hn,useCallback:function(n,i){return Yn().memoizedState=[n,i===void 0?null:i],n},useContext:hn,useEffect:dm,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,su(4194308,4,mm.bind(null,i,n),o)},useLayoutEffect:function(n,i){return su(4194308,4,n,i)},useInsertionEffect:function(n,i){return su(4,2,n,i)},useMemo:function(n,i){var o=Yn();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Yn();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=nw.bind(null,nt,n),[c.memoizedState,n]},useRef:function(n){var i=Yn();return n={current:n},i.memoizedState=n},useState:cm,useDebugValue:Th,useDeferredValue:function(n){return Yn().memoizedState=n},useTransition:function(){var n=cm(!1),i=n[0];return n=tw.bind(null,n[1]),Yn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=nt,d=Yn();if(Ze){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),vt===null)throw Error(t(349));(zi&30)!==0||sm(c,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,dm(lm.bind(null,c,p,n),[n]),c.flags|=2048,wl(9,om.bind(null,c,p,o,i),void 0,null),o},useId:function(){var n=Yn(),i=vt.identifierPrefix;if(Ze){var o=yr,c=_r;o=(c&~(1<<32-Mt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=yl++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=ew++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},sw={readContext:hn,useCallback:_m,useContext:hn,useEffect:Ih,useImperativeHandle:gm,useInsertionEffect:fm,useLayoutEffect:pm,useMemo:ym,useReducer:Ch,useRef:hm,useState:function(){return Ch(vl)},useDebugValue:Th,useDeferredValue:function(n){var i=dn();return vm(i,ft.memoizedState,n)},useTransition:function(){var n=Ch(vl)[0],i=dn().memoizedState;return[n,i]},useMutableSource:rm,useSyncExternalStore:im,useId:wm,unstable_isNewReconciler:!1},ow={readContext:hn,useCallback:_m,useContext:hn,useEffect:Ih,useImperativeHandle:gm,useInsertionEffect:fm,useLayoutEffect:pm,useMemo:ym,useReducer:kh,useRef:hm,useState:function(){return kh(vl)},useDebugValue:Th,useDeferredValue:function(n){var i=dn();return ft===null?i.memoizedState=n:vm(i,ft.memoizedState,n)},useTransition:function(){var n=kh(vl)[0],i=dn().memoizedState;return[n,i]},useMutableSource:rm,useSyncExternalStore:im,useId:wm,unstable_isNewReconciler:!1};function Nn(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Nh(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:ne({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var au={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Ft(),d=ni(n),p=wr(c,d);p.payload=i,o!=null&&(p.callback=o),i=Jr(n,p,d),i!==null&&(bn(i,n,d,c),eu(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Ft(),d=ni(n),p=wr(c,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Jr(n,p,d),i!==null&&(bn(i,n,d,c),eu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Ft(),c=ni(n),d=wr(o,c);d.tag=2,i!=null&&(d.callback=i),i=Jr(n,d,c),i!==null&&(bn(i,n,c,o),eu(i,n,c))}};function Cm(n,i,o,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):i.prototype&&i.prototype.isPureReactComponent?!ol(o,c)||!ol(d,p):!0}function km(n,i,o){var c=!1,d=Yr,p=i.contextType;return typeof p=="object"&&p!==null?p=hn(p):(d=$t(i)?Mi:Pt.current,c=i.contextTypes,p=(c=c!=null)?Gs(n,d):Yr),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=au,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function Im(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&au.enqueueReplaceState(i,i.state,null)}function Rh(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},mh(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=hn(p):(p=$t(i)?Mi:Pt.current,d.context=Gs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Nh(n,i,p,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&au.enqueueReplaceState(d,d.state,null),tu(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function eo(n,i){try{var o="",c=i;do o+=Ee(c),c=c.return;while(c);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Ah(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function bh(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var lw=typeof WeakMap=="function"?WeakMap:Map;function Tm(n,i,o){o=wr(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){mu||(mu=!0,Gh=c),bh(n,i)},o}function Nm(n,i,o){o=wr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){bh(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){bh(n,i),typeof c!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),o}function Rm(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new lw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=xw.bind(null,n,i,o),i.then(n,n))}function Am(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function bm(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=wr(-1,1),i.tag=2,Jr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var aw=ce.ReactCurrentOwner,Gt=!1;function jt(n,i,o,c){i.child=n===null?Xp(i,null,o,c):Qs(i,n.child,o,c)}function Pm(n,i,o,c,d){o=o.render;var p=i.ref;return Js(i,d),c=Eh(n,i,o,c,p,d),o=Sh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,xr(n,i,d)):(Ze&&o&&sh(i),i.flags|=1,jt(n,i,c,d),i.child)}function Om(n,i,o,c,d){if(n===null){var p=o.type;return typeof p=="function"&&!Zh(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Dm(n,i,p,c,d)):(n=xu(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:ol,o(v,c)&&n.ref===i.ref)return xr(n,i,d)}return i.flags|=1,n=ii(p,c),n.ref=i.ref,n.return=i,i.child=n}function Dm(n,i,o,c,d){if(n!==null){var p=n.memoizedProps;if(ol(p,c)&&n.ref===i.ref)if(Gt=!1,i.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return i.lanes=n.lanes,xr(n,i,d)}return Ph(n,i,o,c,d)}function Lm(n,i,o){var c=i.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(no,sn),sn|=o;else{if((o&1073741824)===0)return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qe(no,sn),sn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,qe(no,sn),sn|=c}else p!==null?(c=p.baseLanes|o,i.memoizedState=null):c=o,qe(no,sn),sn|=c;return jt(n,i,d,o),i.child}function Mm(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Ph(n,i,o,c,d){var p=$t(o)?Mi:Pt.current;return p=Gs(i,p),Js(i,d),o=Eh(n,i,o,c,p,d),c=Sh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,xr(n,i,d)):(Ze&&c&&sh(i),i.flags|=1,jt(n,i,o,d),i.child)}function jm(n,i,o,c,d){if($t(o)){var p=!0;Ga(i)}else p=!1;if(Js(i,d),i.stateNode===null)cu(n,i),km(i,o,c),Rh(i,o,c,d),c=!0;else if(n===null){var v=i.stateNode,T=i.memoizedProps;v.props=T;var b=v.context,V=o.contextType;typeof V=="object"&&V!==null?V=hn(V):(V=$t(o)?Mi:Pt.current,V=Gs(i,V));var Y=o.getDerivedStateFromProps,Q=typeof Y=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||b!==V)&&Im(i,v,c,V),Xr=!1;var K=i.memoizedState;v.state=K,tu(i,c,v,d),b=i.memoizedState,T!==c||K!==b||Wt.current||Xr?(typeof Y=="function"&&(Nh(i,o,Y,c),b=i.memoizedState),(T=Xr||Cm(i,o,T,c,K,b,V))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=b),v.props=c,v.state=b,v.context=V,c=T):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Zp(n,i),T=i.memoizedProps,V=i.type===i.elementType?T:Nn(i.type,T),v.props=V,Q=i.pendingProps,K=v.context,b=o.contextType,typeof b=="object"&&b!==null?b=hn(b):(b=$t(o)?Mi:Pt.current,b=Gs(i,b));var re=o.getDerivedStateFromProps;(Y=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==Q||K!==b)&&Im(i,v,c,b),Xr=!1,K=i.memoizedState,v.state=K,tu(i,c,v,d);var se=i.memoizedState;T!==Q||K!==se||Wt.current||Xr?(typeof re=="function"&&(Nh(i,o,re,c),se=i.memoizedState),(V=Xr||Cm(i,o,V,c,K,se,b)||!1)?(Y||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,b),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,b)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=se),v.props=c,v.state=se,v.context=b,c=V):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),c=!1)}return Oh(n,i,o,c,p,d)}function Oh(n,i,o,c,d,p){Mm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Bp(i,o,!1),xr(n,i,p);c=i.stateNode,aw.current=i;var T=v&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Qs(i,n.child,null,p),i.child=Qs(i,null,T,p)):jt(n,i,T,p),i.memoizedState=c.state,d&&Bp(i,o,!0),i.child}function Fm(n){var i=n.stateNode;i.pendingContext?Vp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Vp(n,i.context,!1),gh(n,i.containerInfo)}function Um(n,i,o,c,d){return Ys(),uh(d),i.flags|=256,jt(n,i,o,c),i.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function Lh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Vm(n,i,o){var c=i.pendingProps,d=tt.current,p=!1,v=(i.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(tt,d&1),n===null)return ah(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=i.mode,p=i.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Eu(v,c,0,null),n=Gi(n,c,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Lh(o),i.memoizedState=Dh,n):Mh(i,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return uw(n,i,v,c,T,d,o);if(p){p=c.fallback,v=i.mode,d=n.child,T=d.sibling;var b={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=b,i.deletions=null):(c=ii(d,b),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=ii(T,p):(p=Gi(p,v,o,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,v=n.child.memoizedState,v=v===null?Lh(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~o,i.memoizedState=Dh,c}return p=n.child,n=p.sibling,c=ii(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Mh(n,i){return i=Eu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function uu(n,i,o,c){return c!==null&&uh(c),Qs(i,n.child,null,o),n=Mh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function uw(n,i,o,c,d,p,v){if(o)return i.flags&256?(i.flags&=-257,c=Ah(Error(t(422))),uu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=Eu({mode:"visible",children:c.children},d,0,null),p=Gi(p,d,v,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Qs(i,n.child,null,v),i.child.memoizedState=Lh(v),i.memoizedState=Dh,p);if((i.mode&1)===0)return uu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=Ah(p,c,void 0),uu(n,i,v,c)}if(T=(v&n.childLanes)!==0,Gt||T){if(c=vt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,vr(n,d),bn(c,n,d,-1))}return Jh(),c=Ah(Error(t(421))),uu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Ew.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,rn=qr(d.nextSibling),nn=i,Ze=!0,Tn=null,n!==null&&(un[cn++]=_r,un[cn++]=yr,un[cn++]=ji,_r=n.id,yr=n.overflow,ji=i),i=Mh(i,c.children),i.flags|=4096,i)}function zm(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),fh(n.return,i,o)}function jh(n,i,o,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=d)}function Bm(n,i,o){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(jt(n,i,c.children,o),c=tt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zm(n,o,i);else if(n.tag===19)zm(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(tt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&nu(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),jh(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&nu(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}jh(i,!0,o,null,p);break;case"together":jh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function cu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function xr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Bi|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=ii(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=ii(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function cw(n,i,o){switch(i.tag){case 3:Fm(i),Ys();break;case 5:nm(i);break;case 1:$t(i.type)&&Ga(i);break;case 4:gh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;qe(Ja,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qe(tt,tt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Vm(n,i,o):(qe(tt,tt.current&1),n=xr(n,i,o),n!==null?n.sibling:null);qe(tt,tt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Bm(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(tt,tt.current),c)break;return null;case 22:case 23:return i.lanes=0,Lm(n,i,o)}return xr(n,i,o)}var Hm,Fh,Wm,$m;Hm=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Fh=function(){},Wm=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Vi(Kn.current);var p=null;switch(o){case"input":d=xi(n,d),c=xi(n,c),p=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),p=[];break;case"textarea":d=Oo(n,d),c=Oo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ha)}Uo(o,c);var v;o=null;for(V in d)if(!c.hasOwnProperty(V)&&d.hasOwnProperty(V)&&d[V]!=null)if(V==="style"){var T=d[V];for(v in T)T.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(l.hasOwnProperty(V)?p||(p=[]):(p=p||[]).push(V,null));for(V in c){var b=c[V];if(T=d?.[V],c.hasOwnProperty(V)&&b!==T&&(b!=null||T!=null))if(V==="style")if(T){for(v in T)!T.hasOwnProperty(v)||b&&b.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in b)b.hasOwnProperty(v)&&T[v]!==b[v]&&(o||(o={}),o[v]=b[v])}else o||(p||(p=[]),p.push(V,o)),o=b;else V==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,T=T?T.__html:void 0,b!=null&&T!==b&&(p=p||[]).push(V,b)):V==="children"?typeof b!="string"&&typeof b!="number"||(p=p||[]).push(V,""+b):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(l.hasOwnProperty(V)?(b!=null&&V==="onScroll"&&Xe("scroll",n),p||T===b||(p=[])):(p=p||[]).push(V,b))}o&&(p=p||[]).push("style",o);var V=p;(i.updateQueue=V)&&(i.flags|=4)}},$m=function(n,i,o,c){o!==c&&(i.flags|=4)};function xl(n,i){if(!Ze)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dt(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function hw(n,i,o){var c=i.pendingProps;switch(oh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(i),null;case 1:return $t(i.type)&&$a(),Dt(i),null;case 3:return c=i.stateNode,Zs(),Je(Wt),Je(Pt),vh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Qa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Tn!==null&&(Yh(Tn),Tn=null))),Fh(n,i),Dt(i),null;case 5:_h(i);var d=Vi(gl.current);if(o=i.type,n!==null&&i.stateNode!=null)Wm(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Dt(i),null}if(n=Vi(Kn.current),Qa(i)){c=i.stateNode,o=i.type;var p=i.memoizedProps;switch(c[qn]=i,c[hl]=p,n=(i.mode&1)!==0,o){case"dialog":Xe("cancel",c),Xe("close",c);break;case"iframe":case"object":case"embed":Xe("load",c);break;case"video":case"audio":for(d=0;d<al.length;d++)Xe(al[d],c);break;case"source":Xe("error",c);break;case"img":case"image":case"link":Xe("error",c),Xe("load",c);break;case"details":Xe("toggle",c);break;case"input":ms(c,p),Xe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Xe("invalid",c);break;case"textarea":_s(c,p),Xe("invalid",c)}Uo(o,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var T=p[v];v==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&Ba(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Ba(c.textContent,T,n),d=["children",""+T]):l.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&Xe("scroll",c)}switch(o){case"input":ir(c),ma(c,p,!0);break;case"textarea":ir(c),Do(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ha)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ct(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(o,{is:c.is}):(n=v.createElement(o),o==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,o),n[qn]=i,n[hl]=c,Hm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Vo(o,c),o){case"dialog":Xe("cancel",n),Xe("close",n),d=c;break;case"iframe":case"object":case"embed":Xe("load",n),d=c;break;case"video":case"audio":for(d=0;d<al.length;d++)Xe(al[d],n);d=c;break;case"source":Xe("error",n),d=c;break;case"img":case"image":case"link":Xe("error",n),Xe("load",n),d=c;break;case"details":Xe("toggle",n),d=c;break;case"input":ms(n,c),d=xi(n,c),Xe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),Xe("invalid",n);break;case"textarea":_s(n,c),d=Oo(n,c),Xe("invalid",n);break;default:d=c}Uo(o,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var b=T[p];p==="style"?jo(n,b):p==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&Lo(n,b)):p==="children"?typeof b=="string"?(o!=="textarea"||b!=="")&&Lr(n,b):typeof b=="number"&&Lr(n,""+b):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?b!=null&&p==="onScroll"&&Xe("scroll",n):b!=null&&ae(n,p,b,v))}switch(o){case"input":ir(n),ma(n,c,!1);break;case"textarea":ir(n),Do(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?or(n,!!c.multiple,p,!1):c.defaultValue!=null&&or(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ha)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Dt(i),null;case 6:if(n&&i.stateNode!=null)$m(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Vi(gl.current),Vi(Kn.current),Qa(i)){if(c=i.stateNode,o=i.memoizedProps,c[qn]=i,(p=c.nodeValue!==o)&&(n=nn,n!==null))switch(n.tag){case 3:Ba(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ba(c.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[qn]=i,i.stateNode=c}return Dt(i),null;case 13:if(Je(tt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ze&&rn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Kp(),Ys(),i.flags|=98560,p=!1;else if(p=Qa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[qn]=i}else Ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Dt(i),p=!1}else Tn!==null&&(Yh(Tn),Tn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(tt.current&1)!==0?pt===0&&(pt=3):Jh())),i.updateQueue!==null&&(i.flags|=4),Dt(i),null);case 4:return Zs(),Fh(n,i),n===null&&ul(i.stateNode.containerInfo),Dt(i),null;case 10:return dh(i.type._context),Dt(i),null;case 17:return $t(i.type)&&$a(),Dt(i),null;case 19:if(Je(tt),p=i.memoizedState,p===null)return Dt(i),null;if(c=(i.flags&128)!==0,v=p.rendering,v===null)if(c)xl(p,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=nu(n),v!==null){for(i.flags|=128,xl(p,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)p=o,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return qe(tt,tt.current&1|2),i.child}n=n.sibling}p.tail!==null&&Ge()>ro&&(i.flags|=128,c=!0,xl(p,!1),i.lanes=4194304)}else{if(!c)if(n=nu(v),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),xl(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Ze)return Dt(i),null}else 2*Ge()-p.renderingStartTime>ro&&o!==1073741824&&(i.flags|=128,c=!0,xl(p,!1),i.lanes=4194304);p.isBackwards?(v.sibling=i.child,i.child=v):(o=p.last,o!==null?o.sibling=v:i.child=v,p.last=v)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ge(),i.sibling=null,o=tt.current,qe(tt,c?o&1|2:o&1),i):(Dt(i),null);case 22:case 23:return Xh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(sn&1073741824)!==0&&(Dt(i),i.subtreeFlags&6&&(i.flags|=8192)):Dt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function dw(n,i){switch(oh(i),i.tag){case 1:return $t(i.type)&&$a(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Zs(),Je(Wt),Je(Pt),vh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return _h(i),null;case 13:if(Je(tt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ys()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Je(tt),null;case 4:return Zs(),null;case 10:return dh(i.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var hu=!1,Lt=!1,fw=typeof WeakSet=="function"?WeakSet:Set,ie=null;function to(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){rt(n,i,c)}else o.current=null}function Uh(n,i,o){try{o()}catch(c){rt(n,i,c)}}var Gm=!1;function pw(n,i){if(Xc=Hr,n=Cp(),Hc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,T=-1,b=-1,V=0,Y=0,Q=n,K=null;t:for(;;){for(var re;Q!==o||d!==0&&Q.nodeType!==3||(T=v+d),Q!==p||c!==0&&Q.nodeType!==3||(b=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(re=Q.firstChild)!==null;)K=Q,Q=re;for(;;){if(Q===n)break t;if(K===o&&++V===d&&(T=v),K===p&&++Y===c&&(b=v),(re=Q.nextSibling)!==null)break;Q=K,K=Q.parentNode}Q=re}o=T===-1||b===-1?null:{start:T,end:b}}else o=null}o=o||{start:0,end:0}}else o=null;for(Jc={focusedElem:n,selectionRange:o},Hr=!1,ie=i;ie!==null;)if(i=ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ie=n;else for(;ie!==null;){i=ie;try{var se=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var le=se.memoizedProps,lt=se.memoizedState,j=i.stateNode,D=j.getSnapshotBeforeUpdate(i.elementType===i.type?le:Nn(i.type,le),lt);j.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){rt(i,i.return,J)}if(n=i.sibling,n!==null){n.return=i.return,ie=n;break}ie=i.return}return se=Gm,Gm=!1,se}function El(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Uh(i,o,p)}d=d.next}while(d!==c)}}function du(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Vh(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function qm(n){var i=n.alternate;i!==null&&(n.alternate=null,qm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[qn],delete i[hl],delete i[nh],delete i[Q0],delete i[X0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Km(n){return n.tag===5||n.tag===3||n.tag===4}function Ym(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Km(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zh(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ha));else if(c!==4&&(n=n.child,n!==null))for(zh(n,i,o),n=n.sibling;n!==null;)zh(n,i,o),n=n.sibling}function Bh(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Bh(n,i,o),n=n.sibling;n!==null;)Bh(n,i,o),n=n.sibling}var Tt=null,Rn=!1;function Zr(n,i,o){for(o=o.child;o!==null;)Qm(n,i,o),o=o.sibling}function Qm(n,i,o){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ri,o)}catch{}switch(o.tag){case 5:Lt||to(o,i);case 6:var c=Tt,d=Rn;Tt=null,Zr(n,i,o),Tt=c,Rn=d,Tt!==null&&(Rn?(n=Tt,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tt.removeChild(o.stateNode));break;case 18:Tt!==null&&(Rn?(n=Tt,o=o.stateNode,n.nodeType===8?th(n.parentNode,o):n.nodeType===1&&th(n,o),Cn(n)):th(Tt,o.stateNode));break;case 4:c=Tt,d=Rn,Tt=o.stateNode.containerInfo,Rn=!0,Zr(n,i,o),Tt=c,Rn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Uh(o,i,v),d=d.next}while(d!==c)}Zr(n,i,o);break;case 1:if(!Lt&&(to(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(T){rt(o,i,T)}Zr(n,i,o);break;case 21:Zr(n,i,o);break;case 22:o.mode&1?(Lt=(c=Lt)||o.memoizedState!==null,Zr(n,i,o),Lt=c):Zr(n,i,o);break;default:Zr(n,i,o)}}function Xm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new fw),i.forEach(function(c){var d=Sw.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function An(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var p=n,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 5:Tt=T.stateNode,Rn=!1;break e;case 3:Tt=T.stateNode.containerInfo,Rn=!0;break e;case 4:Tt=T.stateNode.containerInfo,Rn=!0;break e}T=T.return}if(Tt===null)throw Error(t(160));Qm(p,v,d),Tt=null,Rn=!1;var b=d.alternate;b!==null&&(b.return=null),d.return=null}catch(V){rt(d,i,V)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Jm(i,n),i=i.sibling}function Jm(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(An(i,n),Qn(n),c&4){try{El(3,n,n.return),du(3,n)}catch(le){rt(n,n.return,le)}try{El(5,n,n.return)}catch(le){rt(n,n.return,le)}}break;case 1:An(i,n),Qn(n),c&512&&o!==null&&to(o,o.return);break;case 5:if(An(i,n),Qn(n),c&512&&o!==null&&to(o,o.return),n.flags&32){var d=n.stateNode;try{Lr(d,"")}catch(le){rt(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=o!==null?o.memoizedProps:p,T=n.type,b=n.updateQueue;if(n.updateQueue=null,b!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&bo(d,p),Vo(T,v);var V=Vo(T,p);for(v=0;v<b.length;v+=2){var Y=b[v],Q=b[v+1];Y==="style"?jo(d,Q):Y==="dangerouslySetInnerHTML"?Lo(d,Q):Y==="children"?Lr(d,Q):ae(d,Y,Q,V)}switch(T){case"input":Po(d,p);break;case"textarea":ys(d,p);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var re=p.value;re!=null?or(d,!!p.multiple,re,!1):K!==!!p.multiple&&(p.defaultValue!=null?or(d,!!p.multiple,p.defaultValue,!0):or(d,!!p.multiple,p.multiple?[]:"",!1))}d[hl]=p}catch(le){rt(n,n.return,le)}}break;case 6:if(An(i,n),Qn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(le){rt(n,n.return,le)}}break;case 3:if(An(i,n),Qn(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Cn(i.containerInfo)}catch(le){rt(n,n.return,le)}break;case 4:An(i,n),Qn(n);break;case 13:An(i,n),Qn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||($h=Ge())),c&4&&Xm(n);break;case 22:if(Y=o!==null&&o.memoizedState!==null,n.mode&1?(Lt=(V=Lt)||Y,An(i,n),Lt=V):An(i,n),Qn(n),c&8192){if(V=n.memoizedState!==null,(n.stateNode.isHidden=V)&&!Y&&(n.mode&1)!==0)for(ie=n,Y=n.child;Y!==null;){for(Q=ie=Y;ie!==null;){switch(K=ie,re=K.child,K.tag){case 0:case 11:case 14:case 15:El(4,K,K.return);break;case 1:to(K,K.return);var se=K.stateNode;if(typeof se.componentWillUnmount=="function"){c=K,o=K.return;try{i=c,se.props=i.memoizedProps,se.state=i.memoizedState,se.componentWillUnmount()}catch(le){rt(c,o,le)}}break;case 5:to(K,K.return);break;case 22:if(K.memoizedState!==null){tg(Q);continue}}re!==null?(re.return=K,ie=re):tg(Q)}Y=Y.sibling}e:for(Y=null,Q=n;;){if(Q.tag===5){if(Y===null){Y=Q;try{d=Q.stateNode,V?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=Q.stateNode,b=Q.memoizedProps.style,v=b!=null&&b.hasOwnProperty("display")?b.display:null,T.style.display=Mo("display",v))}catch(le){rt(n,n.return,le)}}}else if(Q.tag===6){if(Y===null)try{Q.stateNode.nodeValue=V?"":Q.memoizedProps}catch(le){rt(n,n.return,le)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;Y===Q&&(Y=null),Q=Q.return}Y===Q&&(Y=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:An(i,n),Qn(n),c&4&&Xm(n);break;case 21:break;default:An(i,n),Qn(n)}}function Qn(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Km(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Lr(d,""),c.flags&=-33);var p=Ym(n);Bh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=Ym(n);zh(n,T,v);break;default:throw Error(t(161))}}catch(b){rt(n,n.return,b)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function mw(n,i,o){ie=n,Zm(n)}function Zm(n,i,o){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||hu;if(!v){var T=d.alternate,b=T!==null&&T.memoizedState!==null||Lt;T=hu;var V=Lt;if(hu=v,(Lt=b)&&!V)for(ie=d;ie!==null;)v=ie,b=v.child,v.tag===22&&v.memoizedState!==null?ng(d):b!==null?(b.return=v,ie=b):ng(d);for(;p!==null;)ie=p,Zm(p),p=p.sibling;ie=d,hu=T,Lt=V}eg(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ie=p):eg(n)}}function eg(n){for(;ie!==null;){var i=ie;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Lt||du(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Lt)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Nn(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&tm(i,p,c);break;case 3:var v=i.updateQueue;if(v!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}tm(i,v,o)}break;case 5:var T=i.stateNode;if(o===null&&i.flags&4){o=T;var b=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&o.focus();break;case"img":b.src&&(o.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var V=i.alternate;if(V!==null){var Y=V.memoizedState;if(Y!==null){var Q=Y.dehydrated;Q!==null&&Cn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||i.flags&512&&Vh(i)}catch(K){rt(i,i.return,K)}}if(i===n){ie=null;break}if(o=i.sibling,o!==null){o.return=i.return,ie=o;break}ie=i.return}}function tg(n){for(;ie!==null;){var i=ie;if(i===n){ie=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ie=o;break}ie=i.return}}function ng(n){for(;ie!==null;){var i=ie;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{du(4,i)}catch(b){rt(i,o,b)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(b){rt(i,d,b)}}var p=i.return;try{Vh(i)}catch(b){rt(i,p,b)}break;case 5:var v=i.return;try{Vh(i)}catch(b){rt(i,v,b)}}}catch(b){rt(i,i.return,b)}if(i===n){ie=null;break}var T=i.sibling;if(T!==null){T.return=i.return,ie=T;break}ie=i.return}}var gw=Math.ceil,fu=ce.ReactCurrentDispatcher,Hh=ce.ReactCurrentOwner,fn=ce.ReactCurrentBatchConfig,De=0,vt=null,at=null,Nt=0,sn=0,no=Kr(0),pt=0,Sl=null,Bi=0,pu=0,Wh=0,Cl=null,qt=null,$h=0,ro=1/0,Er=null,mu=!1,Gh=null,ei=null,gu=!1,ti=null,_u=0,kl=0,qh=null,yu=-1,vu=0;function Ft(){return(De&6)!==0?Ge():yu!==-1?yu:yu=Ge()}function ni(n){return(n.mode&1)===0?1:(De&2)!==0&&Nt!==0?Nt&-Nt:Z0.transition!==null?(vu===0&&(vu=bi()),vu):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:Zo(n.type)),n)}function bn(n,i,o,c){if(50<kl)throw kl=0,qh=null,Error(t(185));Ur(n,o,c),((De&2)===0||n!==vt)&&(n===vt&&((De&2)===0&&(pu|=o),pt===4&&ri(n,Nt)),Kt(n,c),o===1&&De===0&&(i.mode&1)===0&&(ro=Ge()+500,qa&&Qr()))}function Kt(n,i){var o=n.callbackNode;cr(n,i);var c=Ai(n,n===vt?Nt:0);if(c===0)o!==null&&Ko(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Ko(o),i===1)n.tag===0?J0(ig.bind(null,n)):Hp(ig.bind(null,n)),K0(function(){(De&6)===0&&Qr()}),o=null;else{switch(zr(c)){case 1:o=Ni;break;case 4:o=Mr;break;case 16:o=ln;break;case 536870912:o=va;break;default:o=ln}o=dg(o,rg.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function rg(n,i){if(yu=-1,vu=0,(De&6)!==0)throw Error(t(327));var o=n.callbackNode;if(io()&&n.callbackNode!==o)return null;var c=Ai(n,n===vt?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=wu(n,c);else{i=c;var d=De;De|=2;var p=og();(vt!==n||Nt!==i)&&(Er=null,ro=Ge()+500,Wi(n,i));do try{vw();break}catch(T){sg(n,T)}while(!0);hh(),fu.current=p,De=d,at!==null?i=0:(vt=null,Nt=0,i=pt)}if(i!==0){if(i===2&&(d=en(n),d!==0&&(c=d,i=Kh(n,d))),i===1)throw o=Sl,Wi(n,0),ri(n,c),Kt(n,Ge()),o;if(i===6)ri(n,c);else{if(d=n.current.alternate,(c&30)===0&&!_w(d)&&(i=wu(n,c),i===2&&(p=en(n),p!==0&&(c=p,i=Kh(n,p))),i===1))throw o=Sl,Wi(n,0),ri(n,c),Kt(n,Ge()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:$i(n,qt,Er);break;case 3:if(ri(n,c),(c&130023424)===c&&(i=$h+500-Ge(),10<i)){if(Ai(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ft(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=eh($i.bind(null,n,qt,Er),i);break}$i(n,qt,Er);break;case 4:if(ri(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Mt(c);p=1<<v,v=i[v],v>d&&(d=v),c&=~p}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*gw(c/1960))-c,10<c){n.timeoutHandle=eh($i.bind(null,n,qt,Er),c);break}$i(n,qt,Er);break;case 5:$i(n,qt,Er);break;default:throw Error(t(329))}}}return Kt(n,Ge()),n.callbackNode===o?rg.bind(null,n):null}function Kh(n,i){var o=Cl;return n.current.memoizedState.isDehydrated&&(Wi(n,i).flags|=256),n=wu(n,i),n!==2&&(i=qt,qt=o,i!==null&&Yh(i)),n}function Yh(n){qt===null?qt=n:qt.push.apply(qt,n)}function _w(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],p=d.getSnapshot;d=d.value;try{if(!In(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ri(n,i){for(i&=~Wh,i&=~pu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Mt(i),c=1<<o;n[o]=-1,i&=~c}}function ig(n){if((De&6)!==0)throw Error(t(327));io();var i=Ai(n,0);if((i&1)===0)return Kt(n,Ge()),null;var o=wu(n,i);if(n.tag!==0&&o===2){var c=en(n);c!==0&&(i=c,o=Kh(n,c))}if(o===1)throw o=Sl,Wi(n,0),ri(n,i),Kt(n,Ge()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,$i(n,qt,Er),Kt(n,Ge()),null}function Qh(n,i){var o=De;De|=1;try{return n(i)}finally{De=o,De===0&&(ro=Ge()+500,qa&&Qr())}}function Hi(n){ti!==null&&ti.tag===0&&(De&6)===0&&io();var i=De;De|=1;var o=fn.transition,c=Ne;try{if(fn.transition=null,Ne=1,n)return n()}finally{Ne=c,fn.transition=o,De=i,(De&6)===0&&Qr()}}function Xh(){sn=no.current,Je(no)}function Wi(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,q0(o)),at!==null)for(o=at.return;o!==null;){var c=o;switch(oh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&$a();break;case 3:Zs(),Je(Wt),Je(Pt),vh();break;case 5:_h(c);break;case 4:Zs();break;case 13:Je(tt);break;case 19:Je(tt);break;case 10:dh(c.type._context);break;case 22:case 23:Xh()}o=o.return}if(vt=n,at=n=ii(n.current,null),Nt=sn=i,pt=0,Sl=null,Wh=pu=Bi=0,qt=Cl=null,Ui!==null){for(i=0;i<Ui.length;i++)if(o=Ui[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,p=o.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}o.pending=c}Ui=null}return n}function sg(n,i){do{var o=at;try{if(hh(),ru.current=lu,iu){for(var c=nt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}iu=!1}if(zi=0,yt=ft=nt=null,_l=!1,yl=0,Hh.current=null,o===null||o.return===null){pt=1,Sl=i,at=null;break}e:{var p=n,v=o.return,T=o,b=i;if(i=Nt,T.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var V=b,Y=T,Q=Y.tag;if((Y.mode&1)===0&&(Q===0||Q===11||Q===15)){var K=Y.alternate;K?(Y.updateQueue=K.updateQueue,Y.memoizedState=K.memoizedState,Y.lanes=K.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var re=Am(v);if(re!==null){re.flags&=-257,bm(re,v,T,p,i),re.mode&1&&Rm(p,V,i),i=re,b=V;var se=i.updateQueue;if(se===null){var le=new Set;le.add(b),i.updateQueue=le}else se.add(b);break e}else{if((i&1)===0){Rm(p,V,i),Jh();break e}b=Error(t(426))}}else if(Ze&&T.mode&1){var lt=Am(v);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),bm(lt,v,T,p,i),uh(eo(b,T));break e}}p=b=eo(b,T),pt!==4&&(pt=2),Cl===null?Cl=[p]:Cl.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var j=Tm(p,b,i);em(p,j);break e;case 1:T=b;var D=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ei===null||!ei.has(F)))){p.flags|=65536,i&=-i,p.lanes|=i;var J=Nm(p,T,i);em(p,J);break e}}p=p.return}while(p!==null)}ag(o)}catch(ue){i=ue,at===o&&o!==null&&(at=o=o.return);continue}break}while(!0)}function og(){var n=fu.current;return fu.current=lu,n===null?lu:n}function Jh(){(pt===0||pt===3||pt===2)&&(pt=4),vt===null||(Bi&268435455)===0&&(pu&268435455)===0||ri(vt,Nt)}function wu(n,i){var o=De;De|=2;var c=og();(vt!==n||Nt!==i)&&(Er=null,Wi(n,i));do try{yw();break}catch(d){sg(n,d)}while(!0);if(hh(),De=o,fu.current=c,at!==null)throw Error(t(261));return vt=null,Nt=0,pt}function yw(){for(;at!==null;)lg(at)}function vw(){for(;at!==null&&!_a();)lg(at)}function lg(n){var i=hg(n.alternate,n,sn);n.memoizedProps=n.pendingProps,i===null?ag(n):at=i,Hh.current=null}function ag(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=hw(o,i,sn),o!==null){at=o;return}}else{if(o=dw(o,i),o!==null){o.flags&=32767,at=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,at=null;return}}if(i=i.sibling,i!==null){at=i;return}at=i=n}while(i!==null);pt===0&&(pt=5)}function $i(n,i,o){var c=Ne,d=fn.transition;try{fn.transition=null,Ne=1,ww(n,i,o,c)}finally{fn.transition=d,Ne=c}return null}function ww(n,i,o,c){do io();while(ti!==null);if((De&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(We(n,p),n===vt&&(at=vt=null,Nt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||gu||(gu=!0,dg(ln,function(){return io(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=fn.transition,fn.transition=null;var v=Ne;Ne=1;var T=De;De|=4,Hh.current=null,pw(n,o),Jm(o,n),V0(Jc),Hr=!!Xc,Jc=Xc=null,n.current=o,mw(o),Lc(),De=T,Ne=v,fn.transition=p}else n.current=o;if(gu&&(gu=!1,ti=n,_u=d),p=n.pendingLanes,p===0&&(ei=null),wa(o.stateNode),Kt(n,Ge()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(mu)throw mu=!1,n=Gh,Gh=null,n;return(_u&1)!==0&&n.tag!==0&&io(),p=n.pendingLanes,(p&1)!==0?n===qh?kl++:(kl=0,qh=n):kl=0,Qr(),null}function io(){if(ti!==null){var n=zr(_u),i=fn.transition,o=Ne;try{if(fn.transition=null,Ne=16>n?16:n,ti===null)var c=!1;else{if(n=ti,ti=null,_u=0,(De&6)!==0)throw Error(t(331));var d=De;for(De|=4,ie=n.current;ie!==null;){var p=ie,v=p.child;if((ie.flags&16)!==0){var T=p.deletions;if(T!==null){for(var b=0;b<T.length;b++){var V=T[b];for(ie=V;ie!==null;){var Y=ie;switch(Y.tag){case 0:case 11:case 15:El(8,Y,p)}var Q=Y.child;if(Q!==null)Q.return=Y,ie=Q;else for(;ie!==null;){Y=ie;var K=Y.sibling,re=Y.return;if(qm(Y),Y===V){ie=null;break}if(K!==null){K.return=re,ie=K;break}ie=re}}}var se=p.alternate;if(se!==null){var le=se.child;if(le!==null){se.child=null;do{var lt=le.sibling;le.sibling=null,le=lt}while(le!==null)}}ie=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,ie=v;else e:for(;ie!==null;){if(p=ie,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:El(9,p,p.return)}var j=p.sibling;if(j!==null){j.return=p.return,ie=j;break e}ie=p.return}}var D=n.current;for(ie=D;ie!==null;){v=ie;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,ie=F;else e:for(v=D;ie!==null;){if(T=ie,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:du(9,T)}}catch(ue){rt(T,T.return,ue)}if(T===v){ie=null;break e}var J=T.sibling;if(J!==null){J.return=T.return,ie=J;break e}ie=T.return}}if(De=d,Qr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ri,n)}catch{}c=!0}return c}finally{Ne=o,fn.transition=i}}return!1}function ug(n,i,o){i=eo(o,i),i=Tm(n,i,1),n=Jr(n,i,1),i=Ft(),n!==null&&(Ur(n,1,i),Kt(n,i))}function rt(n,i,o){if(n.tag===3)ug(n,n,o);else for(;i!==null;){if(i.tag===3){ug(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ei===null||!ei.has(c))){n=eo(o,n),n=Nm(i,n,1),i=Jr(i,n,1),n=Ft(),i!==null&&(Ur(i,1,n),Kt(i,n));break}}i=i.return}}function xw(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Ft(),n.pingedLanes|=n.suspendedLanes&o,vt===n&&(Nt&o)===o&&(pt===4||pt===3&&(Nt&130023424)===Nt&&500>Ge()-$h?Wi(n,0):Wh|=o),Kt(n,i)}function cg(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ts,Ts<<=1,(Ts&130023424)===0&&(Ts=4194304)));var o=Ft();n=vr(n,i),n!==null&&(Ur(n,i,o),Kt(n,o))}function Ew(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),cg(n,o)}function Sw(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),cg(n,o)}var hg;hg=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Wt.current)Gt=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Gt=!1,cw(n,i,o);Gt=(n.flags&131072)!==0}else Gt=!1,Ze&&(i.flags&1048576)!==0&&Wp(i,Ya,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;cu(n,i),n=i.pendingProps;var d=Gs(i,Pt.current);Js(i,o),d=Eh(null,i,c,n,d,o);var p=Sh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,$t(c)?(p=!0,Ga(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,mh(i),d.updater=au,i.stateNode=d,d._reactInternals=i,Rh(i,c,n,o),i=Oh(null,i,c,!0,p,o)):(i.tag=0,Ze&&p&&sh(i),jt(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(cu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=kw(c),n=Nn(c,n),d){case 0:i=Ph(null,i,c,n,o);break e;case 1:i=jm(null,i,c,n,o);break e;case 11:i=Pm(null,i,c,n,o);break e;case 14:i=Om(null,i,c,Nn(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nn(c,d),Ph(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nn(c,d),jm(n,i,c,d,o);case 3:e:{if(Fm(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,d=p.element,Zp(n,i),tu(i,c,null,o);var v=i.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=eo(Error(t(423)),i),i=Um(n,i,c,o,d);break e}else if(c!==d){d=eo(Error(t(424)),i),i=Um(n,i,c,o,d);break e}else for(rn=qr(i.stateNode.containerInfo.firstChild),nn=i,Ze=!0,Tn=null,o=Xp(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ys(),c===d){i=xr(n,i,o);break e}jt(n,i,c,o)}i=i.child}return i;case 5:return nm(i),n===null&&ah(i),c=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,Zc(c,d)?v=null:p!==null&&Zc(c,p)&&(i.flags|=32),Mm(n,i),jt(n,i,v,o),i.child;case 6:return n===null&&ah(i),null;case 13:return Vm(n,i,o);case 4:return gh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Qs(i,null,c,o):jt(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nn(c,d),Pm(n,i,c,d,o);case 7:return jt(n,i,i.pendingProps,o),i.child;case 8:return jt(n,i,i.pendingProps.children,o),i.child;case 12:return jt(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,v=d.value,qe(Ja,c._currentValue),c._currentValue=v,p!==null)if(In(p.value,v)){if(p.children===d.children&&!Wt.current){i=xr(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var T=p.dependencies;if(T!==null){v=p.child;for(var b=T.firstContext;b!==null;){if(b.context===c){if(p.tag===1){b=wr(-1,o&-o),b.tag=2;var V=p.updateQueue;if(V!==null){V=V.shared;var Y=V.pending;Y===null?b.next=b:(b.next=Y.next,Y.next=b),V.pending=b}}p.lanes|=o,b=p.alternate,b!==null&&(b.lanes|=o),fh(p.return,o,i),T.lanes|=o;break}b=b.next}}else if(p.tag===10)v=p.type===i.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=o,T=v.alternate,T!==null&&(T.lanes|=o),fh(v,o,i),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===i){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}jt(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Js(i,o),d=hn(d),c=c(d),i.flags|=1,jt(n,i,c,o),i.child;case 14:return c=i.type,d=Nn(c,i.pendingProps),d=Nn(c.type,d),Om(n,i,c,d,o);case 15:return Dm(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nn(c,d),cu(n,i),i.tag=1,$t(c)?(n=!0,Ga(i)):n=!1,Js(i,o),km(i,c,d),Rh(i,c,d,o),Oh(null,i,c,!0,n,o);case 19:return Bm(n,i,o);case 22:return Lm(n,i,o)}throw Error(t(156,i.tag))};function dg(n,i){return ks(n,i)}function Cw(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,i,o,c){return new Cw(n,i,o,c)}function Zh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function kw(n){if(typeof n=="function")return Zh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===A)return 11;if(n===xe)return 14}return 2}function ii(n,i){var o=n.alternate;return o===null?(o=pn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function xu(n,i,o,c,d,p){var v=2;if(c=n,typeof n=="function")Zh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case R:return Gi(o.children,d,p,i);case k:v=8,d|=8;break;case N:return n=pn(12,o,i,d|2),n.elementType=N,n.lanes=p,n;case I:return n=pn(13,o,i,d),n.elementType=I,n.lanes=p,n;case ve:return n=pn(19,o,i,d),n.elementType=ve,n.lanes=p,n;case ke:return Eu(o,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case O:v=9;break e;case A:v=11;break e;case xe:v=14;break e;case Le:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=pn(v,o,i,d),i.elementType=n,i.type=c,i.lanes=p,i}function Gi(n,i,o,c){return n=pn(7,n,c,i),n.lanes=o,n}function Eu(n,i,o,c){return n=pn(22,n,c,i),n.elementType=ke,n.lanes=o,n.stateNode={isHidden:!1},n}function ed(n,i,o){return n=pn(6,n,null,i),n.lanes=o,n}function td(n,i,o){return i=pn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Iw(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fr(0),this.expirationTimes=Fr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function nd(n,i,o,c,d,p,v,T,b){return n=new Iw(n,i,o,T,b),i===1?(i=1,p===!0&&(i|=8)):i=0,p=pn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(p),n}function Tw(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function fg(n){if(!n)return Yr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if($t(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if($t(o))return zp(n,o,i)}return i}function pg(n,i,o,c,d,p,v,T,b){return n=nd(o,c,!0,n,d,p,v,T,b),n.context=fg(null),o=n.current,c=Ft(),d=ni(o),p=wr(c,d),p.callback=i??null,Jr(o,p,d),n.current.lanes=d,Ur(n,d,c),Kt(n,c),n}function Su(n,i,o,c){var d=i.current,p=Ft(),v=ni(d);return o=fg(o),i.context===null?i.context=o:i.pendingContext=o,i=wr(p,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Jr(d,i,v),n!==null&&(bn(n,d,v,p),eu(n,d,v)),v}function Cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function rd(n,i){mg(n,i),(n=n.alternate)&&mg(n,i)}function Nw(){return null}var gg=typeof reportError=="function"?reportError:function(n){console.error(n)};function id(n){this._internalRoot=n}ku.prototype.render=id.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Su(n,i,null,null)},ku.prototype.unmount=id.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Hi(function(){Su(null,n,null,null)}),i[mr]=null}};function ku(n){this._internalRoot=n}ku.prototype.unstable_scheduleHydration=function(n){if(n){var i=ka();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Hn.length&&i!==0&&i<Hn[o].priority;o++);Hn.splice(o,0,n),o===0&&Na(n)}};function sd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Iu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function _g(){}function Rw(n,i,o,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var V=Cu(v);p.call(V)}}var v=pg(i,c,n,0,null,!1,!1,"",_g);return n._reactRootContainer=v,n[mr]=v.current,ul(n.nodeType===8?n.parentNode:n),Hi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var V=Cu(b);T.call(V)}}var b=nd(n,0,!1,null,null,!1,!1,"",_g);return n._reactRootContainer=b,n[mr]=b.current,ul(n.nodeType===8?n.parentNode:n),Hi(function(){Su(i,b,o,c)}),b}function Tu(n,i,o,c,d){var p=o._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var T=d;d=function(){var b=Cu(v);T.call(b)}}Su(i,v,n,d)}else v=Rw(o,i,n,d,c);return Cu(v)}Sa=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=jr(i.pendingLanes);o!==0&&(Vr(i,o|1),Kt(i,Ge()),(De&6)===0&&(ro=Ge()+500,Qr()))}break;case 13:Hi(function(){var c=vr(n,1);if(c!==null){var d=Ft();bn(c,n,1,d)}}),rd(n,1)}},Ns=function(n){if(n.tag===13){var i=vr(n,134217728);if(i!==null){var o=Ft();bn(i,n,134217728,o)}rd(n,134217728)}},Ca=function(n){if(n.tag===13){var i=ni(n),o=vr(n,i);if(o!==null){var c=Ft();bn(o,n,i,c)}rd(n,i)}},ka=function(){return Ne},Ia=function(n,i){var o=Ne;try{return Ne=n,i()}finally{Ne=o}},zo=function(n,i,o){switch(i){case"input":if(Po(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=Wa(c);if(!d)throw Error(t(90));ps(c),Po(c,d)}}}break;case"textarea":ys(n,o);break;case"select":i=o.value,i!=null&&or(n,!!o.multiple,i,!1)}},xs=Qh,Ho=Hi;var Aw={usingClientEntryPoint:!1,Events:[dl,Ws,Wa,ar,Bo,Qh]},Il={findFiberByHostInstance:Li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bw={bundleType:Il.bundleType,version:Il.version,rendererPackageName:Il.rendererPackageName,rendererConfig:Il.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=qo(n),n===null?null:n.stateNode},findFiberByHostInstance:Il.findFiberByHostInstance||Nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{Ri=Nu.inject(bw),Zt=Nu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Aw,Yt.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sd(i))throw Error(t(200));return Tw(n,i,null,o)},Yt.createRoot=function(n,i){if(!sd(n))throw Error(t(299));var o=!1,c="",d=gg;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=nd(n,1,!1,null,null,o,!1,c,d),n[mr]=i.current,ul(n.nodeType===8?n.parentNode:n),new id(i)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=qo(i),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Hi(n)},Yt.hydrate=function(n,i,o){if(!Iu(i))throw Error(t(200));return Tu(null,n,i,!0,o)},Yt.hydrateRoot=function(n,i,o){if(!sd(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,p="",v=gg;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),i=pg(i,null,n,1,o??null,d,!1,p,v),n[mr]=i.current,ul(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ku(i)},Yt.render=function(n,i,o){if(!Iu(i))throw Error(t(200));return Tu(null,n,i,!1,o)},Yt.unmountComponentAtNode=function(n){if(!Iu(n))throw Error(t(40));return n._reactRootContainer?(Hi(function(){Tu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Qh,Yt.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!Iu(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Tu(n,i,o,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Ig;function Vw(){if(Ig)return ad.exports;Ig=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ad.exports=Uw(),ad.exports}var Tg;function zw(){if(Tg)return Ru;Tg=1;var r=Vw();return Ru.createRoot=r.createRoot,Ru.hydrateRoot=r.hydrateRoot,Ru}var Bw=zw();const Ng=r=>{let e;const t=new Set,s=(w,C)=>{const E=typeof w=="function"?w(e):w;if(!Object.is(E,e)){const S=e;e=C??(typeof E!="object"||E===null)?E:Object.assign({},e,E),t.forEach(U=>U(e,S))}},l=()=>e,m={setState:s,getState:l,getInitialState:()=>_,subscribe:w=>(t.add(w),()=>t.delete(w))},_=e=r(s,l,m);return m},Hw=r=>r?Ng(r):Ng,Ww=r=>r;function $w(r,e=Ww){const t=Eg.useSyncExternalStore(r.subscribe,()=>e(r.getState()),()=>e(r.getInitialState()));return Eg.useDebugValue(t),t}const Rg=r=>{const e=Hw(r),t=s=>$w(e,s);return Object.assign(t,e),t},Gw=r=>r?Rg(r):Rg,qw=()=>{};var Ag={};/**
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
 */const dy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Z=function(r,e){if(!r)throw ko(e)},ko=function(r){return new Error("Firebase Database ("+dy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const fy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[t++]=l:l<2048?(e[t++]=l>>6|192,e[t++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=l>>18|240,e[t++]=l>>12&63|128,e[t++]=l>>6&63|128,e[t++]=l&63|128):(e[t++]=l>>12|224,e[t++]=l>>6&63|128,e[t++]=l&63|128)}return e},Kw=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const l=r[t++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[t++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[t++],h=r[t++],m=r[t++],_=((l&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(_>>10)),e[s++]=String.fromCharCode(56320+(_&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|h&63)}}return e.join("")},rf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],h=l+1<r.length,m=h?r[l+1]:0,_=l+2<r.length,w=_?r[l+2]:0,C=u>>2,E=(u&3)<<4|m>>4;let S=(m&15)<<2|w>>6,U=w&63;_||(U=64,h||(S=64)),s.push(t[C],t[E],t[S],t[U])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(fy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Kw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=t[r.charAt(l++)],m=l<r.length?t[r.charAt(l)]:0;++l;const w=l<r.length?t[r.charAt(l)]:64;++l;const E=l<r.length?t[r.charAt(l)]:64;if(++l,u==null||m==null||w==null||E==null)throw new Yw;const S=u<<2|m>>4;if(s.push(S),w!==64){const U=m<<4&240|w>>2;if(s.push(U),E!==64){const B=w<<6&192|E;s.push(B)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Yw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const py=function(r){const e=fy(r);return rf.encodeByteArray(e,!0)},Wu=function(r){return py(r).replace(/\./g,"")},$u=function(r){try{return rf.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qw(r){return my(void 0,r)}function my(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Xw(t)||(r[t]=my(r[t],e[t]));return r}function Xw(r){return r!=="__proto__"}/**
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
 */function Jw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zw=()=>Jw().__FIREBASE_DEFAULTS__,e1=()=>{if(typeof process>"u"||typeof Ag>"u")return;const r=Ag.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},t1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&$u(r[1]);return e&&JSON.parse(e)},sf=()=>{try{return qw()||Zw()||e1()||t1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},gy=r=>{var e,t;return(t=(e=sf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},_y=r=>{const e=gy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},yy=()=>{var r;return(r=sf())===null||r===void 0?void 0:r.config},vy=r=>{var e;return(e=sf())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class yc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function us(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function of(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function wy(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Wu(JSON.stringify(t)),Wu(JSON.stringify(h)),""].join(".")}const Ll={};function n1(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ll))Ll[e]?r.emulator.push(e):r.prod.push(e);return r}function r1(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let bg=!1;function lf(r,e){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||Ll[r]===e||Ll[r]||bg)return;Ll[r]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",u=n1().prod.length>0;function h(){const S=document.getElementById(s);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function _(S,U){S.setAttribute("width","24"),S.setAttribute("id",U),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function w(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{bg=!0,h()},S}function C(S,U){S.setAttribute("id",U),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=r1(s),U=t("text"),B=document.getElementById(U)||document.createElement("span"),q=t("learnmore"),H=document.getElementById(q)||document.createElement("a"),de=t("preprendIcon"),$=document.getElementById(de)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ae=S.element;m(ae),C(H,q);const ce=w();_($,de),ae.append($,B,H,ce),document.body.appendChild(ae)}u?(B.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function af(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function i1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function s1(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function xy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o1(){const r=Vt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function l1(){return dy.NODE_ADMIN===!0}function a1(){try{return typeof indexedDB=="object"}catch{return!1}}function u1(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{t=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const c1="FirebaseError";class Pr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=c1,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ia.prototype.create)}}class ia{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},l=`${this.service}/${e}`,u=this.errors[e],h=u?h1(u,s):"Error",m=`${this.serviceName}: ${h} (${l}).`;return new Pr(l,m,s)}}function h1(r,e){return r.replace(d1,(t,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const d1=/\{\$([^}]+)}/g;/**
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
 */function $l(r){return JSON.parse(r)}function St(r){return JSON.stringify(r)}/**
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
 */const Ey=function(r){let e={},t={},s={},l="";try{const u=r.split(".");e=$l($u(u[0])||""),t=$l($u(u[1])||""),l=u[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:l}},f1=function(r){const e=Ey(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},p1=function(r){const e=Ey(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function rr(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function yo(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Nd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Gu(r,e,t){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(t,r[l],l,r));return s}function mi(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const l of t){if(!s.includes(l))return!1;const u=r[l],h=e[l];if(Pg(u)&&Pg(h)){if(!mi(u,h))return!1}else if(u!==h)return!1}for(const l of s)if(!t.includes(l))return!1;return!0}function Pg(r){return r!==null&&typeof r=="object"}/**
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
 */function Io(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Pl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,u]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(u)}}),e}function Ol(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}/**
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
 */class m1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)s[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)s[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const S=s[E-3]^s[E-8]^s[E-14]^s[E-16];s[E]=(S<<1|S>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],h=this.chain_[2],m=this.chain_[3],_=this.chain_[4],w,C;for(let E=0;E<80;E++){E<40?E<20?(w=m^u&(h^m),C=1518500249):(w=u^h^m,C=1859775393):E<60?(w=u&h|m&(u|h),C=2400959708):(w=u^h^m,C=3395469782);const S=(l<<5|l>>>27)+w+_+C+s[E]&4294967295;_=m,m=h,h=(u<<30|u>>>2)&4294967295,u=l,l=S}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+m&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let l=0;const u=this.buf_;let h=this.inbuf_;for(;l<t;){if(h===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<t;)if(u[h]=e.charCodeAt(l),++h,++l,h===this.blockSize){this.compress_(u),h=0;break}}else for(;l<t;)if(u[h]=e[l],++h,++l,h===this.blockSize){this.compress_(u),h=0;break}}this.inbuf_=h,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function g1(r,e){const t=new _1(r,e);return t.subscribe.bind(t)}class _1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let l;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");y1(e,["next","error","complete"])?l=e:l={next:e,error:t,complete:s},l.next===void 0&&(l.next=hd),l.error===void 0&&(l.error=hd),l.complete===void 0&&(l.complete=hd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function y1(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function hd(){}function uf(r,e){return`${r} failed: ${e} argument `}/**
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
 */const v1=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,Z(s<r.length,"Surrogate pair missing trail surrogate.");const h=r.charCodeAt(s)-56320;l=65536+(u<<10)+h}l<128?e[t++]=l:l<2048?(e[t++]=l>>6|192,e[t++]=l&63|128):l<65536?(e[t++]=l>>12|224,e[t++]=l>>6&63|128,e[t++]=l&63|128):(e[t++]=l>>18|240,e[t++]=l>>12&63|128,e[t++]=l>>6&63|128,e[t++]=l&63|128)}return e},vc=function(r){let e=0;for(let t=0;t<r.length;t++){const s=r.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Vn(r){return r&&r._delegate?r._delegate:r}class gi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qi="[DEFAULT]";/**
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
 */class w1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new yc;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:t});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),l=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(E1(e))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qi){return this.instances.has(e)}getOptions(e=qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(l)}return l}onInit(e,t){var s;const l=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const h=this.instances.get(l);return h&&e(h,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const l of s)try{l(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:x1(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qi){return this.component?this.component.multipleInstances?e:qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function x1(r){return r===qi?void 0:r}function E1(r){return r.instantiationMode==="EAGER"}/**
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
 */class S1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new w1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ue;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ue||(Ue={}));const C1={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},k1=Ue.INFO,I1={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},T1=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=I1[e];if(l)console[l](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wc{constructor(e){this.name=e,this._logLevel=k1,this._logHandler=T1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?C1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const N1=(r,e)=>e.some(t=>r instanceof t);let Og,Dg;function R1(){return Og||(Og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A1(){return Dg||(Dg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sy=new WeakMap,Rd=new WeakMap,Cy=new WeakMap,dd=new WeakMap,cf=new WeakMap;function b1(r){const e=new Promise((t,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(hi(r.result)),l()},h=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Sy.set(t,r)}).catch(()=>{}),cf.set(e,r),e}function P1(r){if(Rd.has(r))return;const e=new Promise((t,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),l()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Rd.set(r,e)}let Ad={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Rd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Cy.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return hi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function O1(r){Ad=r(Ad)}function D1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(fd(this),e,...t);return Cy.set(s,e.sort?e.sort():[e]),hi(s)}:A1().includes(r)?function(...e){return r.apply(fd(this),e),hi(Sy.get(this))}:function(...e){return hi(r.apply(fd(this),e))}}function L1(r){return typeof r=="function"?D1(r):(r instanceof IDBTransaction&&P1(r),N1(r,R1())?new Proxy(r,Ad):r)}function hi(r){if(r instanceof IDBRequest)return b1(r);if(dd.has(r))return dd.get(r);const e=L1(r);return e!==r&&(dd.set(r,e),cf.set(e,r)),e}const fd=r=>cf.get(r);function M1(r,e,{blocked:t,upgrade:s,blocking:l,terminated:u}={}){const h=indexedDB.open(r,e),m=hi(h);return s&&h.addEventListener("upgradeneeded",_=>{s(hi(h.result),_.oldVersion,_.newVersion,hi(h.transaction),_)}),t&&h.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),m.then(_=>{u&&_.addEventListener("close",()=>u()),l&&_.addEventListener("versionchange",w=>l(w.oldVersion,w.newVersion,w))}).catch(()=>{}),m}const j1=["get","getKey","getAll","getAllKeys","count"],F1=["put","add","delete","clear"],pd=new Map;function Lg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(pd.get(e))return pd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,l=F1.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(l||j1.includes(t)))return;const u=async function(h,...m){const _=this.transaction(h,l?"readwrite":"readonly");let w=_.store;return s&&(w=w.index(m.shift())),(await Promise.all([w[t](...m),l&&_.done]))[0]};return pd.set(e,u),u}O1(r=>({...r,get:(e,t,s)=>Lg(e,t)||r.get(e,t,s),has:(e,t)=>!!Lg(e,t)||r.has(e,t)}));/**
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
 */class U1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(V1(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function V1(r){const e=r.getComponent();return e?.type==="VERSION"}const bd="@firebase/app",Mg="0.13.2";/**
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
 */const Nr=new wc("@firebase/app"),z1="@firebase/app-compat",B1="@firebase/analytics-compat",H1="@firebase/analytics",W1="@firebase/app-check-compat",$1="@firebase/app-check",G1="@firebase/auth",q1="@firebase/auth-compat",K1="@firebase/database",Y1="@firebase/data-connect",Q1="@firebase/database-compat",X1="@firebase/functions",J1="@firebase/functions-compat",Z1="@firebase/installations",ex="@firebase/installations-compat",tx="@firebase/messaging",nx="@firebase/messaging-compat",rx="@firebase/performance",ix="@firebase/performance-compat",sx="@firebase/remote-config",ox="@firebase/remote-config-compat",lx="@firebase/storage",ax="@firebase/storage-compat",ux="@firebase/firestore",cx="@firebase/ai",hx="@firebase/firestore-compat",dx="firebase",fx="11.10.0";/**
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
 */const Pd="[DEFAULT]",px={[bd]:"fire-core",[z1]:"fire-core-compat",[H1]:"fire-analytics",[B1]:"fire-analytics-compat",[$1]:"fire-app-check",[W1]:"fire-app-check-compat",[G1]:"fire-auth",[q1]:"fire-auth-compat",[K1]:"fire-rtdb",[Y1]:"fire-data-connect",[Q1]:"fire-rtdb-compat",[X1]:"fire-fn",[J1]:"fire-fn-compat",[Z1]:"fire-iid",[ex]:"fire-iid-compat",[tx]:"fire-fcm",[nx]:"fire-fcm-compat",[rx]:"fire-perf",[ix]:"fire-perf-compat",[sx]:"fire-rc",[ox]:"fire-rc-compat",[lx]:"fire-gcs",[ax]:"fire-gcs-compat",[ux]:"fire-fst",[hx]:"fire-fst-compat",[cx]:"fire-vertex","fire-js":"fire-js",[dx]:"fire-js-all"};/**
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
 */const qu=new Map,mx=new Map,Od=new Map;function jg(r,e){try{r.container.addComponent(e)}catch(t){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function ns(r){const e=r.name;if(Od.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;Od.set(e,r);for(const t of qu.values())jg(t,r);for(const t of mx.values())jg(t,r);return!0}function xc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function mn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const gx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},di=new ia("app","Firebase",gx);/**
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
 */class _x{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=fx;function ky(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Pd,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw di.create("bad-app-name",{appName:String(l)});if(t||(t=yy()),!t)throw di.create("no-options");const u=qu.get(l);if(u){if(mi(t,u.options)&&mi(s,u.config))return u;throw di.create("duplicate-app",{appName:l})}const h=new S1(l);for(const _ of Od.values())h.addComponent(_);const m=new _x(t,s,h);return qu.set(l,m),m}function hf(r=Pd){const e=qu.get(r);if(!e&&r===Pd&&yy())return ky();if(!e)throw di.create("no-app",{appName:r});return e}function er(r,e,t){var s;let l=(s=px[r])!==null&&s!==void 0?s:r;t&&(l+=`-${t}`);const u=l.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${l}" with version "${e}":`];u&&m.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(m.join(" "));return}ns(new gi(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const yx="firebase-heartbeat-database",vx=1,Gl="firebase-heartbeat-store";let md=null;function Iy(){return md||(md=M1(yx,vx,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Gl)}catch(t){console.warn(t)}}}}).catch(r=>{throw di.create("idb-open",{originalErrorMessage:r.message})})),md}async function wx(r){try{const t=(await Iy()).transaction(Gl),s=await t.objectStore(Gl).get(Ty(r));return await t.done,s}catch(e){if(e instanceof Pr)Nr.warn(e.message);else{const t=di.create("idb-get",{originalErrorMessage:e?.message});Nr.warn(t.message)}}}async function Fg(r,e){try{const s=(await Iy()).transaction(Gl,"readwrite");await s.objectStore(Gl).put(e,Ty(r)),await s.done}catch(t){if(t instanceof Pr)Nr.warn(t.message);else{const s=di.create("idb-set",{originalErrorMessage:t?.message});Nr.warn(s.message)}}}function Ty(r){return`${r.name}!${r.options.appId}`}/**
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
 */const xx=1024,Ex=30;class Sx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kx(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Ug();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>Ex){const h=Ix(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ug(),{heartbeatsToSend:s,unsentEntries:l}=Cx(this._heartbeatsCache.heartbeats),u=Wu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Nr.warn(t),""}}}function Ug(){return new Date().toISOString().substring(0,10)}function Cx(r,e=xx){const t=[];let s=r.slice();for(const l of r){const u=t.find(h=>h.agent===l.agent);if(u){if(u.dates.push(l.date),Vg(t)>e){u.dates.pop();break}}else if(t.push({agent:l.agent,dates:[l.date]}),Vg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class kx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return a1()?u1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await wx(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const l=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const l=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Vg(r){return Wu(JSON.stringify({version:2,heartbeats:r})).length}function Ix(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function Tx(r){ns(new gi("platform-logger",e=>new U1(e),"PRIVATE")),ns(new gi("heartbeat",e=>new Sx(e),"PRIVATE")),er(bd,Mg,r),er(bd,Mg,"esm2017"),er("fire-js","")}Tx("");function df(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(t[s[l]]=r[s[l]]);return t}function Ny(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nx=Ny,Ry=new ia("auth","Firebase",Ny());/**
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
 */const Ku=new wc("@firebase/auth");function Rx(r,...e){Ku.logLevel<=Ue.WARN&&Ku.warn(`Auth (${cs}): ${r}`,...e)}function Fu(r,...e){Ku.logLevel<=Ue.ERROR&&Ku.error(`Auth (${cs}): ${r}`,...e)}/**
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
 */function Un(r,...e){throw ff(r,...e)}function tr(r,...e){return ff(r,...e)}function Ay(r,e,t){const s=Object.assign(Object.assign({},Nx()),{[e]:t});return new ia("auth","Firebase",s).create(e,{appName:r.name})}function fi(r){return Ay(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ff(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Ry.create(r,...e)}function me(r,e,...t){if(!r)throw ff(e,...t)}function Cr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Fu(e),new Error(e)}function Rr(r,e){r||Cr(e)}/**
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
 */function Dd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Ax(){return zg()==="http:"||zg()==="https:"}function zg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function bx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ax()||s1()||"connection"in navigator)?navigator.onLine:!0}function Px(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class sa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rr(t>e,"Short delay should be less than long delay!"),this.isMobile=af()||xy()}get(){return bx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pf(r,e){Rr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class by{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ox={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Dx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Lx=new sa(3e4,6e4);function vi(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Or(r,e,t,s,l={}){return Py(r,l,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Io(Object.assign({key:r.config.apiKey},h)).slice(1),_=await r._getAdditionalHeaders();_["Content-Type"]="application/json",r.languageCode&&(_["X-Firebase-Locale"]=r.languageCode);const w=Object.assign({method:e,headers:_},u);return i1()||(w.referrerPolicy="no-referrer"),r.emulatorConfig&&us(r.emulatorConfig.host)&&(w.credentials="include"),by.fetch()(await Oy(r,r.config.apiHost,t,m),w)})}async function Py(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ox),e);try{const l=new jx(r),u=await Promise.race([t(),l.promise]);l.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Au(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[_,w]=m.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Au(r,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw Au(r,"email-already-in-use",h);if(_==="USER_DISABLED")throw Au(r,"user-disabled",h);const C=s[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(w)throw Ay(r,C,w);Un(r,C)}}catch(l){if(l instanceof Pr)throw l;Un(r,"network-request-failed",{message:String(l)})}}async function Ec(r,e,t,s,l={}){const u=await Or(r,e,t,s,l);return"mfaPendingCredential"in u&&Un(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function Oy(r,e,t,s){const l=`${e}${t}?${s}`,u=r,h=u.config.emulator?pf(r.config,l):`${r.config.apiScheme}://${l}`;return Dx.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function Mx(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(tr(this.auth,"network-request-failed")),Lx.get())})}}function Au(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const l=tr(r,e,s);return l.customData._tokenResponse=t,l}function Bg(r){return r!==void 0&&r.enterprise!==void 0}class Fx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Mx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ux(r,e){return Or(r,"GET","/v2/recaptchaConfig",vi(r,e))}/**
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
 */async function Vx(r,e){return Or(r,"POST","/v1/accounts:delete",e)}async function Yu(r,e){return Or(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ml(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zx(r,e=!1){const t=Vn(r),s=await t.getIdToken(e),l=mf(s);me(l&&l.exp&&l.auth_time&&l.iat,t.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,h=u?.sign_in_provider;return{claims:l,token:s,authTime:Ml(gd(l.auth_time)),issuedAtTime:Ml(gd(l.iat)),expirationTime:Ml(gd(l.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function gd(r){return Number(r)*1e3}function mf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Fu("JWT malformed, contained fewer than 3 sections"),null;try{const l=$u(t);return l?JSON.parse(l):(Fu("Failed to decode base64 JWT payload"),null)}catch(l){return Fu("Caught error parsing JWT payload as JSON",l?.toString()),null}}function Hg(r){const e=mf(r);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ql(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Pr&&Bx(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function Bx({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Hx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ld{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ml(this.lastLoginAt),this.creationTime=Ml(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qu(r){var e;const t=r.auth,s=await r.getIdToken(),l=await ql(r,Yu(t,{idToken:s}));me(l?.users.length,t,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Dy(u.providerUserInfo):[],m=$x(r.providerData,h),_=r.isAnonymous,w=!(r.email&&u.passwordHash)&&!m?.length,C=_?w:!1,E={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Ld(u.createdAt,u.lastLoginAt),isAnonymous:C};Object.assign(r,E)}async function Wx(r){const e=Vn(r);await Qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $x(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Dy(r){return r.map(e=>{var{providerId:t}=e,s=df(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Gx(r,e){const t=await Py(r,{},async()=>{const s=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,h=await Oy(r,l,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:m,body:s};return r.emulatorConfig&&us(r.emulatorConfig.host)&&(_.credentials="include"),by.fetch()(h,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qx(r,e){return Or(r,"POST","/v2/accounts:revokeToken",vi(r,e))}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){me(e.length!==0,"internal-error");const t=Hg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:l,expiresIn:u}=await Gx(e,t);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:l,expirationTime:u}=t,h=new co;return s&&(me(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),l&&(me(typeof l=="string","internal-error",{appName:e}),h.accessToken=l),u&&(me(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Cr("not implemented")}}/**
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
 */function oi(r,e){me(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:t,auth:s,stsTokenManager:l}=e,u=df(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Ld(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await ql(this,this.stsTokenManager.getToken(this.auth,e));return me(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zx(this,e)}reload(){return Wx(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Qu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(fi(this.auth));const e=await this.getIdToken();return await ql(this,Vx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,l,u,h,m,_,w,C;const E=(s=t.displayName)!==null&&s!==void 0?s:void 0,S=(l=t.email)!==null&&l!==void 0?l:void 0,U=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,B=(h=t.photoURL)!==null&&h!==void 0?h:void 0,q=(m=t.tenantId)!==null&&m!==void 0?m:void 0,H=(_=t._redirectEventId)!==null&&_!==void 0?_:void 0,de=(w=t.createdAt)!==null&&w!==void 0?w:void 0,$=(C=t.lastLoginAt)!==null&&C!==void 0?C:void 0,{uid:ae,emailVerified:ce,isAnonymous:ye,providerData:W,stsTokenManager:R}=t;me(ae&&R,e,"internal-error");const k=co.fromJSON(this.name,R);me(typeof ae=="string",e,"internal-error"),oi(E,e.name),oi(S,e.name),me(typeof ce=="boolean",e,"internal-error"),me(typeof ye=="boolean",e,"internal-error"),oi(U,e.name),oi(B,e.name),oi(q,e.name),oi(H,e.name),oi(de,e.name),oi($,e.name);const N=new Dn({uid:ae,auth:e,email:S,emailVerified:ce,displayName:E,isAnonymous:ye,photoURL:B,phoneNumber:U,tenantId:q,stsTokenManager:k,createdAt:de,lastLoginAt:$});return W&&Array.isArray(W)&&(N.providerData=W.map(P=>Object.assign({},P))),H&&(N._redirectEventId=H),N}static async _fromIdTokenResponse(e,t,s=!1){const l=new co;l.updateFromServerResponse(t);const u=new Dn({uid:t.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Qu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const l=t.users[0];me(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Dy(l.providerUserInfo):[],h=!(l.email&&l.passwordHash)&&!u?.length,m=new co;m.updateFromIdToken(s);const _=new Dn({uid:l.localId,auth:e,stsTokenManager:m,isAnonymous:h}),w={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Ld(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!u?.length};return Object.assign(_,w),_}}/**
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
 */const Wg=new Map;function kr(r){Rr(r instanceof Function,"Expected a class definition");let e=Wg.get(r);return e?(Rr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Wg.set(r,e),e)}/**
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
 */class Ly{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ly.type="NONE";const $g=Ly;/**
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
 */function Uu(r,e,t){return`firebase:${r}:${e}:${t}`}class ho{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=Uu(this.userKey,l.apiKey,u),this.fullPersistenceKey=Uu("persistence",l.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Yu(this.auth,{idToken:e}).catch(()=>{});return t?Dn._fromGetAccountInfoResponse(this.auth,t,e):null}return Dn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ho(kr($g),e,s);const l=(await Promise.all(t.map(async w=>{if(await w._isAvailable())return w}))).filter(w=>w);let u=l[0]||kr($g);const h=Uu(s,e.config.apiKey,e.name);let m=null;for(const w of t)try{const C=await w._get(h);if(C){let E;if(typeof C=="string"){const S=await Yu(e,{idToken:C}).catch(()=>{});if(!S)break;E=await Dn._fromGetAccountInfoResponse(e,S,C)}else E=Dn._fromJSON(e,C);w!==u&&(m=E),u=w;break}}catch{}const _=l.filter(w=>w._shouldAllowMigration);return!u._shouldAllowMigration||!_.length?new ho(u,e,s):(u=_[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async w=>{if(w!==u)try{await w._remove(h)}catch{}})),new ho(u,e,s))}}/**
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
 */function Gg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(My(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zy(e))return"Blackberry";if(By(e))return"Webos";if(jy(e))return"Safari";if((e.includes("chrome/")||Fy(e))&&!e.includes("edge/"))return"Chrome";if(Vy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if(s?.length===2)return s[1]}return"Other"}function My(r=Vt()){return/firefox\//i.test(r)}function jy(r=Vt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fy(r=Vt()){return/crios\//i.test(r)}function Uy(r=Vt()){return/iemobile/i.test(r)}function Vy(r=Vt()){return/android/i.test(r)}function zy(r=Vt()){return/blackberry/i.test(r)}function By(r=Vt()){return/webos/i.test(r)}function gf(r=Vt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Kx(r=Vt()){var e;return gf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yx(){return o1()&&document.documentMode===10}function Hy(r=Vt()){return gf(r)||Vy(r)||By(r)||zy(r)||/windows phone/i.test(r)||Uy(r)}/**
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
 */function Wy(r,e=[]){let t;switch(r){case"Browser":t=Gg(Vt());break;case"Worker":t=`${Gg(Vt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${cs}/${s}`}/**
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
 */class Qx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const _=e(u);h(_)}catch(_){m(_)}});s.onAbort=t,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const l of t)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function Xx(r,e={}){return Or(r,"GET","/v2/passwordPolicy",vi(r,e))}/**
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
 */const Jx=6;class Zx{constructor(e){var t,s,l,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:Jx,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,l,u,h,m;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(t=_.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),_.isValid&&(_.isValid=(s=_.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),_.isValid&&(_.isValid=(l=_.containsLowercaseLetter)!==null&&l!==void 0?l:!0),_.isValid&&(_.isValid=(u=_.containsUppercaseLetter)!==null&&u!==void 0?u:!0),_.isValid&&(_.isValid=(h=_.containsNumericCharacter)!==null&&h!==void 0?h:!0),_.isValid&&(_.isValid=(m=_.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),_}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),l&&(t.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class eE{constructor(e,t,s,l){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qg(this),this.idTokenSubscription=new qg(this),this.beforeStateQueue=new Qx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ry,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kr(t)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Yu(this,{idToken:e}),s=await Dn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(mn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=l?._redirectEventId,_=await this.tryRedirectSignIn(e);(!h||h===m)&&_?.user&&(l=_.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(h){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qu(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Px()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(fi(this));const t=e?Vn(e):null;return t&&me(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xx(this),t=new Zx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ia("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await qx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&kr(e)||this._popupRedirectResolver;me(t,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[kr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,l){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,s,l);return()=>{h=!0,_()}}else{const _=e.addObserver(t);return()=>{h=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(t["X-Firebase-AppCheck"]=l),t}async _getAppCheckToken(){var e;if(mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Rx(`Error while retrieving App Check token: ${t.error}`),t?.token}}function hs(r){return Vn(r)}class qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=g1(t=>this.observer=t)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tE(r){Sc=r}function $y(r){return Sc.loadJS(r)}function nE(){return Sc.recaptchaEnterpriseScript}function rE(){return Sc.gapiScript}function iE(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class sE{constructor(){this.enterprise=new oE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class oE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const lE="recaptcha-enterprise",Gy="NO_RECAPTCHA";class aE{constructor(e){this.type=lE,this.auth=hs(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{Ux(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const w=new Fx(_);return u.tenantId==null?u._agentRecaptchaConfig=w:u._tenantRecaptchaConfigs[u.tenantId]=w,h(w.siteKey)}}).catch(_=>{m(_)})})}function l(u,h,m){const _=window.grecaptcha;Bg(_)?_.enterprise.ready(()=>{_.enterprise.execute(u,{action:e}).then(w=>{h(w)}).catch(()=>{h(Gy)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sE().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Bg(window.grecaptcha))l(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let _=nE();_.length!==0&&(_+=m),$y(_).then(()=>{l(m,u,h)}).catch(w=>{h(w)})}}).catch(m=>{h(m)})})}}async function Kg(r,e,t,s=!1,l=!1){const u=new aE(r);let h;if(l)h=Gy;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const _=m.phoneEnrollmentInfo.phoneNumber,w=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:w,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const _=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Md(r,e,t,s,l){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Kg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Kg(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
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
 */function uE(r,e){const t=xc(r,"auth");if(t.isInitialized()){const l=t.getImmediate(),u=t.getOptions();if(mi(u,e??{}))return l;Un(l,"already-initialized")}return t.initialize({options:e})}function cE(r,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(kr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function hE(r,e,t){const s=hs(r);me(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=qy(e),{host:h,port:m}=dE(e),_=m===null?"":`:${m}`,w={url:`${u}//${h}${_}/`},C=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){me(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),me(mi(w,s.config.emulator)&&mi(C,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=w,s.emulatorConfig=C,s.settings.appVerificationDisabledForTesting=!0,us(h)?(of(`${u}//${h}${_}`),lf("Auth",!0)):fE()}function qy(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function dE(r){const e=qy(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Yg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Yg(h)}}}function Yg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function fE(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class _f{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cr("not implemented")}_getIdTokenResponse(e){return Cr("not implemented")}_linkToIdToken(e,t){return Cr("not implemented")}_getReauthenticationResolver(e){return Cr("not implemented")}}async function pE(r,e){return Or(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function mE(r,e){return Ec(r,"POST","/v1/accounts:signInWithPassword",vi(r,e))}async function gE(r,e){return Or(r,"POST","/v1/accounts:sendOobCode",vi(r,e))}async function _E(r,e){return gE(r,e)}/**
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
 */async function yE(r,e){return Ec(r,"POST","/v1/accounts:signInWithEmailLink",vi(r,e))}async function vE(r,e){return Ec(r,"POST","/v1/accounts:signInWithEmailLink",vi(r,e))}/**
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
 */class Kl extends _f{constructor(e,t,s,l=null){super("password",s),this._email=e,this._password=t,this._tenantId=l}static _fromEmailAndPassword(e,t){return new Kl(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Kl(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Md(e,t,"signInWithPassword",mE);case"emailLink":return yE(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Md(e,s,"signUpPassword",pE);case"emailLink":return vE(e,{idToken:t,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fo(r,e){return Ec(r,"POST","/v1/accounts:signInWithIdp",vi(r,e))}/**
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
 */const wE="http://localhost";class rs extends _f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=t,u=df(t,["providerId","signInMethod"]);if(!s||!l)return null;const h=new rs(s,l);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return fo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,fo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fo(e,t)}buildRequest(){const e={requestUri:wE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Io(t)}return e}}/**
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
 */function xE(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function EE(r){const e=Pl(Ol(r)).link,t=e?Pl(Ol(e)).deep_link_id:null,s=Pl(Ol(r)).deep_link_id;return(s?Pl(Ol(s)).link:null)||s||t||e||r}class yf{constructor(e){var t,s,l,u,h,m;const _=Pl(Ol(e)),w=(t=_.apiKey)!==null&&t!==void 0?t:null,C=(s=_.oobCode)!==null&&s!==void 0?s:null,E=xE((l=_.mode)!==null&&l!==void 0?l:null);me(w&&C&&E,"argument-error"),this.apiKey=w,this.operation=E,this.code=C,this.continueUrl=(u=_.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=_.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=_.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=EE(e);try{return new yf(t)}catch{return null}}}/**
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
 */class To{constructor(){this.providerId=To.PROVIDER_ID}static credential(e,t){return Kl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=yf.parseLink(t);return me(s,"argument-error"),Kl._fromEmailAndCode(e,s.code,s.tenantId)}}To.PROVIDER_ID="password";To.EMAIL_PASSWORD_SIGN_IN_METHOD="password";To.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ky{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oa extends Ky{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class li extends oa{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.FACEBOOK_SIGN_IN_METHOD="facebook.com";li.PROVIDER_ID="facebook.com";/**
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
 */class ai extends oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rs._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ai.credential(t,s)}catch{return null}}}ai.GOOGLE_SIGN_IN_METHOD="google.com";ai.PROVIDER_ID="google.com";/**
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
 */class ui extends oa{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.GITHUB_SIGN_IN_METHOD="github.com";ui.PROVIDER_ID="github.com";/**
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
 */class ci extends oa{constructor(){super("twitter.com")}static credential(e,t){return rs._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ci.credential(t,s)}catch{return null}}}ci.TWITTER_SIGN_IN_METHOD="twitter.com";ci.PROVIDER_ID="twitter.com";/**
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
 */class vo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,l=!1){const u=await Dn._fromIdTokenResponse(e,s,l),h=Qg(s);return new vo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const l=Qg(s);return new vo({user:e,providerId:l,_tokenResponse:s,operationType:t})}}function Qg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Xu extends Pr{constructor(e,t,s,l){var u;super(t.code,t.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Xu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,l){return new Xu(e,t,s,l)}}function Yy(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Xu._fromErrorAndOperation(r,u,e,s):u})}async function SE(r,e,t=!1){const s=await ql(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return vo._forOperation(r,"link",s)}/**
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
 */async function CE(r,e,t=!1){const{auth:s}=r;if(mn(s.app))return Promise.reject(fi(s));const l="reauthenticate";try{const u=await ql(r,Yy(s,l,e,r),t);me(u.idToken,s,"internal-error");const h=mf(u.idToken);me(h,s,"internal-error");const{sub:m}=h;return me(r.uid===m,s,"user-mismatch"),vo._forOperation(r,l,u)}catch(u){throw u?.code==="auth/user-not-found"&&Un(s,"user-mismatch"),u}}/**
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
 */async function Qy(r,e,t=!1){if(mn(r.app))return Promise.reject(fi(r));const s="signIn",l=await Yy(r,s,e),u=await vo._fromIdTokenResponse(r,s,l);return t||await r._updateCurrentUser(u.user),u}async function kE(r,e){return Qy(hs(r),e)}/**
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
 */async function IE(r){const e=hs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TE(r,e,t){const s=hs(r);await Md(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",_E)}function NE(r,e,t){return mn(r.app)?Promise.reject(fi(r)):kE(Vn(r),To.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&IE(r),s})}function RE(r,e,t,s){return Vn(r).onIdTokenChanged(e,t,s)}function AE(r,e,t){return Vn(r).beforeAuthStateChanged(e,t)}const Ju="__sak";/**
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
 */class Xy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ju,"1"),this.storage.removeItem(Ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const bE=1e3,PE=10;class Jy extends Xy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),l=this.localCache[t];s!==l&&e(t,l,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,_)=>{this.notifyListeners(h,_)});return}const s=e.key;t?this.detachListener():this.stopPolling();const l=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);Yx()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,PE):l()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},bE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jy.type="LOCAL";const OE=Jy;/**
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
 */class Zy extends Xy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zy.type="SESSION";const ev=Zy;/**
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
 */function DE(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(l=>l.isListeningto(e));if(t)return t;const s=new Cc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:l,data:u}=t.data,h=this.handlersMap[l];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const m=Array.from(h).map(async w=>w(t.origin,u)),_=await DE(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cc.receivers=[];/**
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
 */function vf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class LE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,h;return new Promise((m,_)=>{const w=vf("",20);l.port1.start();const C=setTimeout(()=>{_(new Error("unsupported_event"))},s);h={messageChannel:l,onMessage(E){const S=E;if(S.data.eventId===w)switch(S.data.status){case"ack":clearTimeout(C),u=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(S.data.response);break;default:clearTimeout(C),clearTimeout(u),_(new Error("invalid_response"));break}}},this.handlers.add(h),l.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:w,data:t},[l.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function nr(){return window}function ME(r){nr().location.href=r}/**
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
 */function tv(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function jE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FE(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function UE(){return tv()?self:null}/**
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
 */const nv="firebaseLocalStorageDb",VE=1,Zu="firebaseLocalStorage",rv="fbase_key";class la{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function kc(r,e){return r.transaction([Zu],e?"readwrite":"readonly").objectStore(Zu)}function zE(){const r=indexedDB.deleteDatabase(nv);return new la(r).toPromise()}function jd(){const r=indexedDB.open(nv,VE);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Zu,{keyPath:rv})}catch(l){t(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Zu)?e(s):(s.close(),await zE(),e(await jd()))})})}async function Xg(r,e,t){const s=kc(r,!0).put({[rv]:e,value:t});return new la(s).toPromise()}async function BE(r,e){const t=kc(r,!1).get(e),s=await new la(t).toPromise();return s===void 0?null:s.value}function Jg(r,e){const t=kc(r,!0).delete(e);return new la(t).toPromise()}const HE=800,WE=3;class iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>WE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cc._getInstance(UE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jE(),!this.activeServiceWorker)return;this.sender=new LE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jd();return await Xg(e,Ju,"1"),await Jg(e,Ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Xg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>BE(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=kc(l,!1).getAll();return new la(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),t.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),t.push(l));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iv.type="LOCAL";const $E=iv;new sa(3e4,6e4);/**
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
 */function GE(r,e){return e?kr(e):(me(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class wf extends _f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qE(r){return Qy(r.auth,new wf(r),r.bypassAuthState)}function KE(r){const{auth:e,user:t}=r;return me(t,e,"internal-error"),CE(t,new wf(r),r.bypassAuthState)}async function YE(r){const{auth:e,user:t}=r;return me(t,e,"internal-error"),SE(t,new wf(r),r.bypassAuthState)}/**
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
 */class sv{constructor(e,t,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:l,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(_))}catch(w){this.reject(w)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qE;case"linkViaPopup":case"linkViaRedirect":return YE;case"reauthViaPopup":case"reauthViaRedirect":return KE;default:Un(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const QE=new sa(2e3,1e4);class oo extends sv{constructor(e,t,s,l,u){super(e,t,l,u),this.provider=s,this.authWindow=null,this.pollId=null,oo.currentPopupAction&&oo.currentPopupAction.cancel(),oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=vf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QE.get())};e()}}oo.currentPopupAction=null;/**
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
 */const XE="pendingRedirect",Vu=new Map;class JE extends sv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Vu.get(this.auth._key());if(!e){try{const s=await ZE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Vu.set(this.auth._key(),e)}return this.bypassAuthState||Vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZE(r,e){const t=nS(e),s=tS(r);if(!await s._isAvailable())return!1;const l=await s._get(t)==="true";return await s._remove(t),l}function eS(r,e){Vu.set(r._key(),e)}function tS(r){return kr(r._redirectPersistence)}function nS(r){return Uu(XE,r.config.apiKey,r.name)}async function rS(r,e,t=!1){if(mn(r.app))return Promise.reject(fi(r));const s=hs(r),l=GE(s,e),h=await new JE(s,l,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const iS=10*60*1e3;class sS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!ov(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(tr(this.auth,l))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zg(e))}saveEventToCache(e){this.cachedEventUids.add(Zg(e)),this.lastProcessedEventTime=Date.now()}}function Zg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function ov({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function oS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ov(r);default:return!1}}/**
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
 */async function lS(r,e={}){return Or(r,"GET","/v1/projects",e)}/**
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
 */const aS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uS=/^https?/;async function cS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await lS(r);for(const t of e)try{if(hS(t))return}catch{}Un(r,"unauthorized-domain")}function hS(r){const e=Dd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!uS.test(t))return!1;if(aS.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const dS=new sa(3e4,6e4);function e_(){const r=nr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function fS(r){return new Promise((e,t)=>{var s,l,u;function h(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),t(tr(r,"network-request-failed"))},timeout:dS.get()})}if(!((l=(s=nr().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=nr().gapi)===null||u===void 0)&&u.load)h();else{const m=iE("iframefcb");return nr()[m]=()=>{gapi.load?h():t(tr(r,"network-request-failed"))},$y(`${rE()}?onload=${m}`).catch(_=>t(_))}}).catch(e=>{throw zu=null,e})}let zu=null;function pS(r){return zu=zu||fS(r),zu}/**
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
 */const mS=new sa(5e3,15e3),gS="__/auth/iframe",_S="emulator/auth/iframe",yS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wS(r){const e=r.config;me(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?pf(e,_S):`https://${r.config.authDomain}/${gS}`,s={apiKey:e.apiKey,appName:r.name,v:cs},l=vS.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Io(s).slice(1)}`}async function xS(r){const e=await pS(r),t=nr().gapi;return me(t,r,"internal-error"),e.open({where:document.body,url:wS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yS,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const h=tr(r,"network-request-failed"),m=nr().setTimeout(()=>{u(h)},mS.get());function _(){nr().clearTimeout(m),l(s)}s.ping(_).then(_,()=>{u(h)})}))}/**
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
 */const ES={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SS=500,CS=600,kS="_blank",IS="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TS(r,e,t,s=SS,l=CS){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const _=Object.assign(Object.assign({},ES),{width:s.toString(),height:l.toString(),top:u,left:h}),w=Vt().toLowerCase();t&&(m=Fy(w)?kS:t),My(w)&&(e=e||IS,_.scrollbars="yes");const C=Object.entries(_).reduce((S,[U,B])=>`${S}${U}=${B},`,"");if(Kx(w)&&m!=="_self")return NS(e||"",m),new t_(null);const E=window.open(e||"",m,C);me(E,r,"popup-blocked");try{E.focus()}catch{}return new t_(E)}function NS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const RS="__/auth/handler",AS="emulator/auth/handler",bS=encodeURIComponent("fac");async function n_(r,e,t,s,l,u){me(r.config.authDomain,r,"auth-domain-config-required"),me(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:cs,eventId:l};if(e instanceof Ky){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",Nd(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[C,E]of Object.entries({}))h[C]=E}if(e instanceof oa){const C=e.getScopes().filter(E=>E!=="");C.length>0&&(h.scopes=C.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const C of Object.keys(m))m[C]===void 0&&delete m[C];const _=await r._getAppCheckToken(),w=_?`#${bS}=${encodeURIComponent(_)}`:"";return`${PS(r)}?${Io(m).slice(1)}${w}`}function PS({config:r}){return r.emulator?pf(r,AS):`https://${r.authDomain}/${RS}`}/**
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
 */const _d="webStorageSupport";class OS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ev,this._completeRedirectFn=rS,this._overrideRedirectResult=eS}async _openPopup(e,t,s,l){var u;Rr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await n_(e,t,s,Dd(),l);return TS(e,h,vf())}async _openRedirect(e,t,s,l){await this._originValidation(e);const u=await n_(e,t,s,Dd(),l);return ME(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:l,promise:u}=this.eventManagers[t];return l?Promise.resolve(l):(Rr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await xS(e),s=new sS(e);return t.register("authEvent",l=>(me(l?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_d,{type:_d},l=>{var u;const h=(u=l?.[0])===null||u===void 0?void 0:u[_d];h!==void 0&&t(!!h),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hy()||jy()||gf()}}const DS=OS;var r_="@firebase/auth",i_="1.10.8";/**
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
 */class LS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function MS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jS(r){ns(new gi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;me(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const _={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wy(r)},w=new eE(s,l,u,_);return cE(w,t),w},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ns(new gi("auth-internal",e=>{const t=hs(e.getProvider("auth").getImmediate());return(s=>new LS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(r_,i_,MS(r)),er(r_,i_,"esm2017")}/**
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
 */const FS=5*60,US=vy("authIdTokenMaxAge")||FS;let s_=null;const VS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>US)return;const l=t?.token;s_!==l&&(s_=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function zS(r=hf()){const e=xc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=uE(r,{popupRedirectResolver:DS,persistence:[$E,OE,ev]}),s=vy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=VS(u.toString());AE(t,h,()=>h(t.currentUser)),RE(t,m=>h(m))}}const l=gy("auth");return l&&hE(t,`http://${l}`),t}function BS(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}tE({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=tr("internal-error");u.customData=l,t(u)},s.type="text/javascript",s.charset="UTF-8",BS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jS("Browser");var HS="firebase",WS="11.10.0";/**
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
 */er(HS,WS,"app");var o_={};const l_="@firebase/database",a_="1.0.20";/**
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
 */let lv="";function $S(r){lv=r}/**
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
 */class GS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),St(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:$l(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class qS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return rr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const av=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GS(e)}}catch{}return new qS},Qi=av("localStorage"),KS=av("sessionStorage");/**
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
 */const po=new wc("@firebase/database"),YS=function(){let r=1;return function(){return r++}}(),uv=function(r){const e=v1(r),t=new m1;t.update(e);const s=t.digest();return rf.encodeByteArray(s)},aa=function(...r){let e="";for(let t=0;t<r.length;t++){const s=r[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=aa.apply(null,s):typeof s=="object"?e+=St(s):e+=s,e+=" "}return e};let jl=null,u_=!0;const QS=function(r,e){Z(!0,"Can't turn on custom loggers persistently."),po.logLevel=Ue.VERBOSE,jl=po.log.bind(po)},Rt=function(...r){if(u_===!0&&(u_=!1,jl===null&&KS.get("logging_enabled")===!0&&QS()),jl){const e=aa.apply(null,r);jl(e)}},ua=function(r){return function(...e){Rt(r,...e)}},Fd=function(...r){const e="FIREBASE INTERNAL ERROR: "+aa(...r);po.error(e)},Ar=function(...r){const e=`FIREBASE FATAL ERROR: ${aa(...r)}`;throw po.error(e),new Error(e)},Jt=function(...r){const e="FIREBASE WARNING: "+aa(...r);po.warn(e)},XS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xf=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},JS=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},wo="[MIN_NAME]",is="[MAX_NAME]",ds=function(r,e){if(r===e)return 0;if(r===wo||e===is)return-1;if(e===wo||r===is)return 1;{const t=c_(r),s=c_(e);return t!==null?s!==null?t-s===0?r.length-e.length:t-s:-1:s!==null?1:r<e?-1:1}},ZS=function(r,e){return r===e?0:r<e?-1:1},Nl=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+St(e))},Ef=function(r){if(typeof r!="object"||r===null)return St(r);const e=[];for(const s in r)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=St(e[s]),t+=":",t+=Ef(r[e[s]]);return t+="}",t},cv=function(r,e){const t=r.length;if(t<=e)return[r];const s=[];for(let l=0;l<t;l+=e)l+e>t?s.push(r.substring(l,t)):s.push(r.substring(l,l+e));return s};function bt(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const hv=function(r){Z(!xf(r),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let l,u,h,m,_;r===0?(u=0,h=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(m=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=m+s,h=Math.round(r*Math.pow(2,t-m)-Math.pow(2,t))):(u=0,h=Math.round(r/Math.pow(2,1-s-t))));const w=[];for(_=t;_;_-=1)w.push(h%2?1:0),h=Math.floor(h/2);for(_=e;_;_-=1)w.push(u%2?1:0),u=Math.floor(u/2);w.push(l?1:0),w.reverse();const C=w.join("");let E="";for(_=0;_<64;_+=8){let S=parseInt(C.substr(_,8),2).toString(16);S.length===1&&(S="0"+S),E=E+S}return E.toLowerCase()},eC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nC(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+t);return s.code=r.toUpperCase(),s}const rC=new RegExp("^-?(0*)\\d{1,10}$"),iC=-2147483648,sC=2147483647,c_=function(r){if(rC.test(r)){const e=Number(r);if(e>=iC&&e<=sC)return e}return null},No=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Jt("Exception was thrown by user callback.",t),e},Math.floor(0))}},oC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fl=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class lC{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,mn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Jt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class aC{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Jt(e)}}class Bu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bu.OWNER="owner";/**
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
 */const Sf="5",dv="v",fv="s",pv="r",mv="f",gv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_v="ls",yv="p",Ud="ac",vv="websocket",wv="long_polling";/**
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
 */class xv{constructor(e,t,s,l,u=!1,h="",m=!1,_=!1,w=null){this.secure=t,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=h,this.includeNamespaceInQueryParams=m,this.isUsingEmulator=_,this.emulatorOptions=w,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function uC(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Ev(r,e,t){Z(typeof e=="string","typeof type must == string"),Z(typeof t=="object","typeof params must == object");let s;if(e===vv)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===wv)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uC(r)&&(t.ns=r.namespace);const l=[];return bt(t,(u,h)=>{l.push(u+"="+h)}),s+l.join("&")}/**
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
 */class cC{constructor(){this.counters_={}}incrementCounter(e,t=1){rr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Qw(this.counters_)}}/**
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
 */const yd={},vd={};function Cf(r){const e=r.toString();return yd[e]||(yd[e]=new cC),yd[e]}function hC(r,e){const t=r.toString();return vd[t]||(vd[t]=e()),vd[t]}/**
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
 */class dC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&No(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const h_="start",fC="close",pC="pLPCommand",mC="pRTLPCB",Sv="id",Cv="pw",kv="ser",gC="cb",_C="seg",yC="ts",vC="d",wC="dframe",Iv=1870,Tv=30,xC=Iv-Tv,EC=25e3,SC=3e4;class lo{constructor(e,t,s,l,u,h,m){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=h,this.lastSessionId=m,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ua(e),this.stats_=Cf(t),this.urlFn=_=>(this.appCheckToken&&(_[Ud]=this.appCheckToken),Ev(t,wv,_))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new dC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SC)),JS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kf((...u)=>{const[h,m,_,w,C]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===h_)this.id=m,this.password=_;else if(h===fC)m?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(m,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...u)=>{const[h,m]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(h,m)},()=>{this.onClosed_()},this.urlFn);const s={};s[h_]="t",s[kv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[gC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[dv]=Sf,this.transportSessionId&&(s[fv]=this.transportSessionId),this.lastSessionId&&(s[_v]=this.lastSessionId),this.applicationId&&(s[yv]=this.applicationId),this.appCheckToken&&(s[Ud]=this.appCheckToken),typeof location<"u"&&location.hostname&&gv.test(location.hostname)&&(s[pv]=mv);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){lo.forceAllow_=!0}static forceDisallow(){lo.forceDisallow_=!0}static isAvailable(){return lo.forceAllow_?!0:!lo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!eC()&&!tC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=St(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=py(t),l=cv(s,xC);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[wC]="t",s[Sv]=e,s[Cv]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=St(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class kf{constructor(e,t,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=YS(),window[pC+this.uniqueCallbackIdentifier]=e,window[mC+this.uniqueCallbackIdentifier]=t,this.myIFrame=kf.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(m){Rt("frame writing exception"),m.stack&&Rt(m.stack),Rt(m)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Rt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sv]=this.myID,e[Cv]=this.myPW,e[kv]=this.currentSerial;let t=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tv+s.length<=Iv;){const h=this.pendingSegs.shift();s=s+"&"+_C+l+"="+h.seg+"&"+yC+l+"="+h.ts+"&"+vC+l+"="+h.d,l++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},l=setTimeout(s,Math.floor(EC)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const CC=16384,kC=45e3;let ec=null;typeof MozWebSocket<"u"?ec=MozWebSocket:typeof WebSocket<"u"&&(ec=WebSocket);class On{constructor(e,t,s,l,u,h,m){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ua(this.connId),this.stats_=Cf(t),this.connURL=On.connectionURL_(t,h,m,l,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,l,u){const h={};return h[dv]=Sf,typeof location<"u"&&location.hostname&&gv.test(location.hostname)&&(h[pv]=mv),t&&(h[fv]=t),s&&(h[_v]=s),l&&(h[Ud]=l),u&&(h[yv]=u),Ev(e,vv,h)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qi.set("previous_websocket_failure",!0);try{let s;l1(),this.mySock=new ec(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){On.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ec!==null&&!On.forceDisallow_}static previouslyFailed(){return Qi.isInMemoryStorage||Qi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=$l(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Z(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=St(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=cv(t,CC);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kC))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}On.responsesRequiredToBeHealthy=2;On.healthyTimeout=3e4;/**
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
 */class Yl{static get ALL_TRANSPORTS(){return[lo,On]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=On&&On.isAvailable();let s=t&&!On.previouslyFailed();if(e.webSocketOnly&&(t||Jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[On];else{const l=this.transports_=[];for(const u of Yl.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Yl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yl.globalTransportInitialized_=!1;/**
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
 */const IC=6e4,TC=5e3,NC=10*1024,RC=100*1024,wd="t",d_="d",AC="s",f_="r",bC="e",p_="o",m_="a",g_="n",__="p",PC="h";class OC{constructor(e,t,s,l,u,h,m,_,w,C){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=h,this.onReady_=m,this.onDisconnect_=_,this.onKill_=w,this.lastSessionId=C,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ua("c:"+this.id+":"),this.transportManager_=new Yl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Fl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wd in e){const t=e[wd];t===m_?this.upgradeIfSecondaryHealthy_():t===f_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===p_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Nl("t",e),s=Nl("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:__,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:m_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:g_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Nl("t",e),s=Nl("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Nl(wd,e);if(d_ in e){const s=e[d_];if(t===PC){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(t===g_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===AC?this.onConnectionShutdown_(s):t===f_?this.onReset_(s):t===bC?Fd("Server Error: "+s):t===p_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fd("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Sf!==s&&Jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Fl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(IC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:__,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Nv{put(e,t,s,l){}merge(e,t,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Rv{constructor(e){this.allowedEvents_=e,this.listeners_={},Z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const l=this.getInitialEvent(e);l&&t.apply(s,l)}off(e,t,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===t&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){Z(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class tc extends Rv{static getInstance(){return new tc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!af()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const y_=32,v_=768;class He{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ve(){return new He("")}function Ie(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function _i(r){return r.pieces_.length-r.pieceNum_}function Qe(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new He(r.pieces_,e)}function If(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function DC(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function Ql(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function Av(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new He(e,0)}function it(r,e){const t=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)t.push(r.pieces_[s]);if(e instanceof He)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&t.push(s[l])}return new He(t,0)}function Te(r){return r.pieceNum_>=r.pieces_.length}function Qt(r,e){const t=Ie(r),s=Ie(e);if(t===null)return e;if(t===s)return Qt(Qe(r),Qe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function LC(r,e){const t=Ql(r,0),s=Ql(e,0);for(let l=0;l<t.length&&l<s.length;l++){const u=ds(t[l],s[l]);if(u!==0)return u}return t.length===s.length?0:t.length<s.length?-1:1}function Tf(r,e){if(_i(r)!==_i(e))return!1;for(let t=r.pieceNum_,s=e.pieceNum_;t<=r.pieces_.length;t++,s++)if(r.pieces_[t]!==e.pieces_[s])return!1;return!0}function gn(r,e){let t=r.pieceNum_,s=e.pieceNum_;if(_i(r)>_i(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class MC{constructor(e,t){this.errorPrefix_=t,this.parts_=Ql(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=vc(this.parts_[s]);bv(this)}}function jC(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=vc(e),bv(r)}function FC(r){const e=r.parts_.pop();r.byteLength_-=vc(e),r.parts_.length>0&&(r.byteLength_-=1)}function bv(r){if(r.byteLength_>v_)throw new Error(r.errorPrefix_+"has a key path longer than "+v_+" bytes ("+r.byteLength_+").");if(r.parts_.length>y_)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+y_+") or object contains a cycle "+Ki(r))}function Ki(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class Nf extends Rv{static getInstance(){return new Nf}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return Z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Rl=1e3,UC=60*5*1e3,w_=30*1e3,VC=1.3,zC=3e4,BC="server_kill",x_=3;class Tr extends Nv{constructor(e,t,s,l,u,h,m,_){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=h,this.appCheckTokenProvider_=m,this.authOverride_=_,this.id=Tr.nextPersistentConnectionId_++,this.log_=ua("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rl,this.maxReconnectDelay_=UC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&tc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const l=++this.requestNumber_,u={r:l,a:e,b:t};this.log_(St(u)),Z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const t=new yc,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const m=h.d;h.s==="ok"?t.resolve(m):t.reject(m)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),t.promise}listen(e,t,s,l){this.initConnection_();const u=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+u),this.listens.has(h)||this.listens.set(h,new Map),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Z(!this.listens.get(h).has(u),"listen() called twice for same path/queryId.");const m={onComplete:l,hashFn:t,query:e,tag:s};this.listens.get(h).set(u,m),this.connected_&&this.sendListen_(m)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),l=t._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},h="q";e.tag&&(u.q=t._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(h,u,m=>{const _=m.d,w=m.s;Tr.warnOnListenWarnings_(_,t),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",m),w!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(w,_))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&rr(e,"w")){const s=yo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+t._queryParams.getIndex().toString()+'"',u=t._path.toString();Jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||p1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=w_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=f1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,l=>{const u=l.s,h=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,t)}sendUnlisten_(e,t,s,l){this.log_("Unlisten on "+e+" for "+t);const u={p:e},h="n";l&&(u.q=s,u.t=l),this.sendRequest(h,u)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,l){const u={p:t,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,h=>{l&&setTimeout(()=>{l(h.s,h.d)},Math.floor(0))})}put(e,t,s,l){this.putInternal("p",e,t,s,l)}merge(e,t,s,l){this.putInternal("m",e,t,s,l)}putInternal(e,t,s,l,u){this.initConnection_();const h={p:t,d:s};u!==void 0&&(h.h=u),this.outstandingPuts_.push({action:e,request:h,onComplete:l}),this.outstandingPutCount_++;const m=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(m):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,u=>{this.log_(t+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+St(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Fd("Unrecognized action received from server: "+St(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zC&&(this.reconnectDelay_=Rl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Tr.nextConnectionId_++,u=this.lastSessionId;let h=!1,m=null;const _=function(){m?m.close():(h=!0,s())},w=function(E){Z(m,"sendRequest call when we're not connected not allowed."),m.sendRequest(E)};this.realtime_={close:_,sendRequest:w};const C=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,S]=await Promise.all([this.authTokenProvider_.getToken(C),this.appCheckTokenProvider_.getToken(C)]);h?Rt("getToken() completed but was canceled"):(Rt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=S&&S.token,m=new OC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,U=>{Jt(U+" ("+this.repoInfo_.toString()+")"),this.interrupt(BC)},u))}catch(E){this.log_("Failed to get token: "+E),h||(this.repoInfo_.nodeAdmin&&Jt(E),_())}}}interrupt(e){Rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nd(this.interruptReasons_)&&(this.reconnectDelay_=Rl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(u=>Ef(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,t){const s=new He(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(t),u.delete(t),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,t){Rt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=x_&&(this.reconnectDelay_=w_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Rt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=x_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+lv.replace(/\./g,"-")]=1,af()?e["framework.cordova"]=1:xy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tc.getInstance().currentlyOnline();return Nd(this.interruptReasons_)&&e}}Tr.nextPersistentConnectionId_=0;Tr.nextConnectionId_=0;/**
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
 */class Ic{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ce(wo,e),l=new Ce(wo,t);return this.compare(s,l)!==0}minPost(){return Ce.MIN}}/**
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
 */let bu;class Pv extends Ic{static get __EMPTY_NODE(){return bu}static set __EMPTY_NODE(e){bu=e}compare(e,t){return ds(e.name,t.name)}isDefinedOn(e){throw ko("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ce.MIN}maxPost(){return new Ce(is,bu)}makePost(e,t){return Z(typeof e=="string","KeyIndex indexValue must always be a string."),new Ce(e,bu)}toString(){return".key"}}const mo=new Pv;/**
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
 */class Pu{constructor(e,t,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=t?s(e.key,t):1,l&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Et{constructor(e,t,s,l,u){this.key=e,this.value=t,this.color=s??Et.RED,this.left=l??Xt.EMPTY_NODE,this.right=u??Xt.EMPTY_NODE}copy(e,t,s,l,u){return new Et(e??this.key,t??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,t,s),null):u===0?l=l.copy(null,t,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,t,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,l;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Xt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Et.RED=!0;Et.BLACK=!1;class HC{copy(e,t,s,l,u){return this}insert(e,t,s){return new Et(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xt{constructor(e,t=Xt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Xt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Et.BLACK,null,null))}remove(e){return new Xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Et.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,l=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Pu(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Pu(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Pu(this.root_,null,this.comparator_,!0,e)}}Xt.EMPTY_NODE=new HC;/**
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
 */function WC(r,e){return ds(r.name,e.name)}function Rf(r,e){return ds(r,e)}/**
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
 */let Vd;function $C(r){Vd=r}const Ov=function(r){return typeof r=="number"?"number:"+hv(r):"string:"+r},Dv=function(r){if(r.isLeafNode()){const e=r.val();Z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rr(e,".sv"),"Priority must be a string or number.")}else Z(r===Vd||r.isEmpty(),"priority of unexpected type.");Z(r===Vd||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let E_;class xt{static set __childrenNodeConstructor(e){E_=e}static get __childrenNodeConstructor(){return E_}constructor(e,t=xt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Dv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Te(e)?this:Ie(e)===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:xt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Ie(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(Z(s!==".priority"||_i(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,xt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Qe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ov(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=hv(this.value_):e+=this.value_,this.lazyHash_=uv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xt.__childrenNodeConstructor?-1:(Z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,l=xt.VALUE_TYPE_ORDER.indexOf(t),u=xt.VALUE_TYPE_ORDER.indexOf(s);return Z(l>=0,"Unknown leaf type: "+t),Z(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}xt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Lv,Mv;function GC(r){Lv=r}function qC(r){Mv=r}class KC extends Ic{compare(e,t){const s=e.node.getPriority(),l=t.node.getPriority(),u=s.compareTo(l);return u===0?ds(e.name,t.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ce.MIN}maxPost(){return new Ce(is,new xt("[PRIORITY-POST]",Mv))}makePost(e,t){const s=Lv(e);return new Ce(t,new xt("[PRIORITY-POST]",s))}toString(){return".priority"}}const st=new KC;/**
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
 */const YC=Math.log(2);class QC{constructor(e){const t=u=>parseInt(Math.log(u)/YC,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nc=function(r,e,t,s){r.sort(e);const l=function(_,w){const C=w-_;let E,S;if(C===0)return null;if(C===1)return E=r[_],S=t?t(E):E,new Et(S,E.node,Et.BLACK,null,null);{const U=parseInt(C/2,10)+_,B=l(_,U),q=l(U+1,w);return E=r[U],S=t?t(E):E,new Et(S,E.node,Et.BLACK,B,q)}},u=function(_){let w=null,C=null,E=r.length;const S=function(B,q){const H=E-B,de=E;E-=B;const $=l(H+1,de),ae=r[H],ce=t?t(ae):ae;U(new Et(ce,ae.node,q,null,$))},U=function(B){w?(w.left=B,w=B):(C=B,w=B)};for(let B=0;B<_.count;++B){const q=_.nextBitIsOne(),H=Math.pow(2,_.count-(B+1));q?S(H,Et.BLACK):(S(H,Et.BLACK),S(H,Et.RED))}return C},h=new QC(r.length),m=u(h);return new Xt(s||e,m)};/**
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
 */let xd;const so={};class Ir{static get Default(){return Z(so&&st,"ChildrenNode.ts has not been loaded"),xd=xd||new Ir({".priority":so},{".priority":st}),xd}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=yo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Xt?t:null}hasIndex(e){return rr(this.indexSet_,e.toString())}addIndex(e,t){Z(e!==mo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=t.getIterator(Ce.Wrap);let h=u.getNext();for(;h;)l=l||e.isDefinedOn(h.node),s.push(h),h=u.getNext();let m;l?m=nc(s,e.getCompare()):m=so;const _=e.toString(),w=Object.assign({},this.indexSet_);w[_]=e;const C=Object.assign({},this.indexes_);return C[_]=m,new Ir(C,w)}addToIndexes(e,t){const s=Gu(this.indexes_,(l,u)=>{const h=yo(this.indexSet_,u);if(Z(h,"Missing index implementation for "+u),l===so)if(h.isDefinedOn(e.node)){const m=[],_=t.getIterator(Ce.Wrap);let w=_.getNext();for(;w;)w.name!==e.name&&m.push(w),w=_.getNext();return m.push(e),nc(m,h.getCompare())}else return so;else{const m=t.get(e.name);let _=l;return m&&(_=_.remove(new Ce(e.name,m))),_.insert(e,e.node)}});return new Ir(s,this.indexSet_)}removeFromIndexes(e,t){const s=Gu(this.indexes_,l=>{if(l===so)return l;{const u=t.get(e.name);return u?l.remove(new Ce(e.name,u)):l}});return new Ir(s,this.indexSet_)}}/**
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
 */let Al;class ge{static get EMPTY_NODE(){return Al||(Al=new ge(new Xt(Rf),null,Ir.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Dv(this.priorityNode_),this.children_.isEmpty()&&Z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Al}updatePriority(e){return this.children_.isEmpty()?this:new ge(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Al:t}}getChild(e){const t=Ie(e);return t===null?this:this.getImmediateChild(t).getChild(Qe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Z(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ce(e,t);let l,u;t.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,t),u=this.indexMap_.addToIndexes(s,this.children_));const h=l.isEmpty()?Al:this.priorityNode_;return new ge(l,h,u)}}updateChild(e,t){const s=Ie(e);if(s===null)return t;{Z(Ie(e)!==".priority"||_i(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Qe(e),t);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,l=0,u=!0;if(this.forEachChild(st,(h,m)=>{t[h]=m.val(e),s++,u&&ge.INTEGER_REGEXP_.test(h)?l=Math.max(l,Number(h)):u=!1}),!e&&u&&l<2*s){const h=[];for(const m in t)h[m]=t[m];return h}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ov(this.getPriority().val())+":"),this.forEachChild(st,(t,s)=>{const l=s.hash();l!==""&&(e+=":"+t+":"+l)}),this.lazyHash_=e===""?"":uv(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new Ce(e,t));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ce(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ce(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>t(l.name,l.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,Ce.Wrap);let u=l.peek();for(;u!=null&&t.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,Ce.Wrap);let u=l.peek();for(;u!=null&&t.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ca?-1:0}withIndex(e){if(e===mo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ge(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===mo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(st),l=t.getIterator(st);let u=s.getNext(),h=l.getNext();for(;u&&h;){if(u.name!==h.name||!u.node.equals(h.node))return!1;u=s.getNext(),h=l.getNext()}return u===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===mo?null:this.indexMap_.get(e.toString())}}ge.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class XC extends ge{constructor(){super(new Xt(Rf),ge.EMPTY_NODE,Ir.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ge.EMPTY_NODE}isEmpty(){return!1}}const ca=new XC;Object.defineProperties(Ce,{MIN:{value:new Ce(wo,ge.EMPTY_NODE)},MAX:{value:new Ce(is,ca)}});Pv.__EMPTY_NODE=ge.EMPTY_NODE;xt.__childrenNodeConstructor=ge;$C(ca);qC(ca);/**
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
 */const JC=!0;function At(r,e=null){if(r===null)return ge.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),Z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new xt(t,At(e))}if(!(r instanceof Array)&&JC){const t=[];let s=!1;if(bt(r,(h,m)=>{if(h.substring(0,1)!=="."){const _=At(m);_.isEmpty()||(s=s||!_.getPriority().isEmpty(),t.push(new Ce(h,_)))}}),t.length===0)return ge.EMPTY_NODE;const u=nc(t,WC,h=>h.name,Rf);if(s){const h=nc(t,st.getCompare());return new ge(u,At(e),new Ir({".priority":h},{".priority":st}))}else return new ge(u,At(e),Ir.Default)}else{let t=ge.EMPTY_NODE;return bt(r,(s,l)=>{if(rr(r,s)&&s.substring(0,1)!=="."){const u=At(l);(u.isLeafNode()||!u.isEmpty())&&(t=t.updateImmediateChild(s,u))}}),t.updatePriority(At(e))}}GC(At);/**
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
 */class ZC extends Ic{constructor(e){super(),this.indexPath_=e,Z(!Te(e)&&Ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),l=this.extractChild(t.node),u=s.compareTo(l);return u===0?ds(e.name,t.name):u}makePost(e,t){const s=At(e),l=ge.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ce(t,l)}maxPost(){const e=ge.EMPTY_NODE.updateChild(this.indexPath_,ca);return new Ce(is,e)}toString(){return Ql(this.indexPath_,0).join("/")}}/**
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
 */class ek extends Ic{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ds(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ce.MIN}maxPost(){return Ce.MAX}makePost(e,t){const s=At(e);return new Ce(t,s)}toString(){return".value"}}const tk=new ek;/**
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
 */function jv(r){return{type:"value",snapshotNode:r}}function xo(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Xl(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Jl(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function nk(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class Af{constructor(e){this.index_=e}updateChild(e,t,s,l,u,h){Z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const m=e.getImmediateChild(t);return m.getChild(l).equals(s.getChild(l))&&m.isEmpty()===s.isEmpty()||(h!=null&&(s.isEmpty()?e.hasChild(t)?h.trackChildChange(Xl(t,m)):Z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):m.isEmpty()?h.trackChildChange(xo(t,s)):h.trackChildChange(Jl(t,s,m))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(st,(l,u)=>{t.hasChild(l)||s.trackChildChange(Xl(l,u))}),t.isLeafNode()||t.forEachChild(st,(l,u)=>{if(e.hasChild(l)){const h=e.getImmediateChild(l);h.equals(u)||s.trackChildChange(Jl(l,u,h))}else s.trackChildChange(xo(l,u))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ge.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Zl{constructor(e){this.indexedFilter_=new Af(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zl.getStartPost_(e),this.endPost_=Zl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,l,u,h){return this.matches(new Ce(t,s))||(s=ge.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,l,u,h)}updateFullNode(e,t,s){t.isLeafNode()&&(t=ge.EMPTY_NODE);let l=t.withIndex(this.index_);l=l.updatePriority(ge.EMPTY_NODE);const u=this;return t.forEachChild(st,(h,m)=>{u.matches(new Ce(h,m))||(l=l.updateImmediateChild(h,ge.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class rk{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Zl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,l,u,h){return this.rangedFilter_.matches(new Ce(t,s))||(s=ge.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,l,u,h):this.fullLimitUpdateChild_(e,t,s,u,h)}updateFullNode(e,t,s){let l;if(t.isLeafNode()||t.isEmpty())l=ge.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){l=ge.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;u.hasNext()&&h<this.limit_;){const m=u.getNext();if(this.withinDirectionalStart(m))if(this.withinDirectionalEnd(m))l=l.updateImmediateChild(m.name,m.node),h++;else break;else continue}}else{l=t.withIndex(this.index_),l=l.updatePriority(ge.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let h=0;for(;u.hasNext();){const m=u.getNext();h<this.limit_&&this.withinDirectionalStart(m)&&this.withinDirectionalEnd(m)?h++:l=l.updateImmediateChild(m.name,ge.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,l,u){let h;if(this.reverse_){const E=this.index_.getCompare();h=(S,U)=>E(U,S)}else h=this.index_.getCompare();const m=e;Z(m.numChildren()===this.limit_,"");const _=new Ce(t,s),w=this.reverse_?m.getFirstChild(this.index_):m.getLastChild(this.index_),C=this.rangedFilter_.matches(_);if(m.hasChild(t)){const E=m.getImmediateChild(t);let S=l.getChildAfterChild(this.index_,w,this.reverse_);for(;S!=null&&(S.name===t||m.hasChild(S.name));)S=l.getChildAfterChild(this.index_,S,this.reverse_);const U=S==null?1:h(S,_);if(C&&!s.isEmpty()&&U>=0)return u?.trackChildChange(Jl(t,s,E)),m.updateImmediateChild(t,s);{u?.trackChildChange(Xl(t,E));const q=m.updateImmediateChild(t,ge.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(u?.trackChildChange(xo(S.name,S.node)),q.updateImmediateChild(S.name,S.node)):q}}else return s.isEmpty()?e:C&&h(w,_)>=0?(u!=null&&(u.trackChildChange(Xl(w.name,w.node)),u.trackChildChange(xo(t,s))),m.updateImmediateChild(t,s).updateImmediateChild(w.name,ge.EMPTY_NODE)):e}}/**
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
 */class bf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=st}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wo}hasEnd(){return this.endSet_}getIndexEndValue(){return Z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:is}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===st}copy(){const e=new bf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ik(r){return r.loadsAllData()?new Af(r.getIndex()):r.hasLimit()?new rk(r):new Zl(r)}function S_(r){const e={};if(r.isDefault())return e;let t;if(r.index_===st?t="$priority":r.index_===tk?t="$value":r.index_===mo?t="$key":(Z(r.index_ instanceof ZC,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=St(t),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=St(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+St(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=St(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+St(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function C_(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==st&&(e.i=r.index_.toString()),e}/**
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
 */class rc extends Nv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=ua("p:rest:"),this.listens_={}}listen(e,t,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const h=rc.getListenId_(e,s),m={};this.listens_[h]=m;const _=S_(e._queryParams);this.restRequest_(u+".json",_,(w,C)=>{let E=C;if(w===404&&(E=null,w=null),w===null&&this.onDataUpdate_(u,E,!1,s),yo(this.listens_,h)===m){let S;w?w===401?S="permission_denied":S="rest_error:"+w:S="ok",l(S,null)}})}unlisten(e,t){const s=rc.getListenId_(e,t);delete this.listens_[s]}get(e){const t=S_(e._queryParams),s=e._path.toString(),l=new yc;return this.restRequest_(s+".json",t,(u,h)=>{let m=h;u===404&&(m=null,u=null),u===null?(this.onDataUpdate_(s,m,!1,null),l.resolve(m)):l.reject(new Error(m))}),l.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(t.auth=l.accessToken),u&&u.token&&(t.ac=u.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Io(t);this.log_("Sending REST request for "+h);const m=new XMLHttpRequest;m.onreadystatechange=()=>{if(s&&m.readyState===4){this.log_("REST Response for "+h+" received. status:",m.status,"response:",m.responseText);let _=null;if(m.status>=200&&m.status<300){try{_=$l(m.responseText)}catch{Jt("Failed to parse JSON response for "+h+": "+m.responseText)}s(null,_)}else m.status!==401&&m.status!==404&&Jt("Got unsuccessful REST response for "+h+" Status: "+m.status),s(m.status);s=null}},m.open("GET",h,!0),m.send()})}}/**
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
 */class sk{constructor(){this.rootNode_=ge.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ic(){return{value:null,children:new Map}}function Fv(r,e,t){if(Te(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const s=Ie(e);r.children.has(s)||r.children.set(s,ic());const l=r.children.get(s);e=Qe(e),Fv(l,e,t)}}function zd(r,e,t){r.value!==null?t(e,r.value):ok(r,(s,l)=>{const u=new He(e.toString()+"/"+s);zd(l,u,t)})}function ok(r,e){r.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class lk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&bt(this.last_,(s,l)=>{t[s]=t[s]-l}),this.last_=e,t}}/**
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
 */const k_=10*1e3,ak=30*1e3,uk=5*60*1e3;class ck{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new lk(e);const s=k_+(ak-k_)*Math.random();Fl(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;bt(e,(l,u)=>{u>0&&rr(this.statsToReport_,l)&&(t[l]=u,s=!0)}),s&&this.server_.reportStats(t),Fl(this.reportStats_.bind(this),Math.floor(Math.random()*2*uk))}}/**
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
 */var Ln;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ln||(Ln={}));function Pf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Of(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Df(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class sc{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ln.ACK_USER_WRITE,this.source=Pf()}operationForChild(e){if(Te(this.path)){if(this.affectedTree.value!=null)return Z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new He(e));return new sc(Ve(),t,this.revert)}}else return Z(Ie(this.path)===e,"operationForChild called for unrelated child."),new sc(Qe(this.path),this.affectedTree,this.revert)}}/**
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
 */class ea{constructor(e,t){this.source=e,this.path=t,this.type=Ln.LISTEN_COMPLETE}operationForChild(e){return Te(this.path)?new ea(this.source,Ve()):new ea(this.source,Qe(this.path))}}/**
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
 */class ss{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ln.OVERWRITE}operationForChild(e){return Te(this.path)?new ss(this.source,Ve(),this.snap.getImmediateChild(e)):new ss(this.source,Qe(this.path),this.snap)}}/**
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
 */class Eo{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ln.MERGE}operationForChild(e){if(Te(this.path)){const t=this.children.subtree(new He(e));return t.isEmpty()?null:t.value?new ss(this.source,Ve(),t.value):new Eo(this.source,Ve(),t)}else return Z(Ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Eo(this.source,Qe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class os{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Te(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ie(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class hk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function dk(r,e,t,s){const l=[],u=[];return e.forEach(h=>{h.type==="child_changed"&&r.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&u.push(nk(h.childName,h.snapshotNode))}),bl(r,l,"child_removed",e,s,t),bl(r,l,"child_added",e,s,t),bl(r,l,"child_moved",u,s,t),bl(r,l,"child_changed",e,s,t),bl(r,l,"value",e,s,t),l}function bl(r,e,t,s,l,u){const h=s.filter(m=>m.type===t);h.sort((m,_)=>pk(r,m,_)),h.forEach(m=>{const _=fk(r,m,u);l.forEach(w=>{w.respondsTo(m.type)&&e.push(w.createEvent(_,r.query_))})})}function fk(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function pk(r,e,t){if(e.childName==null||t.childName==null)throw ko("Should only compare child_ events.");const s=new Ce(e.childName,e.snapshotNode),l=new Ce(t.childName,t.snapshotNode);return r.index_.compare(s,l)}/**
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
 */function Tc(r,e){return{eventCache:r,serverCache:e}}function Ul(r,e,t,s){return Tc(new os(e,t,s),r.serverCache)}function Uv(r,e,t,s){return Tc(r.eventCache,new os(e,t,s))}function Bd(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function ls(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let Ed;const mk=()=>(Ed||(Ed=new Xt(ZS)),Ed);class Ke{static fromObject(e){let t=new Ke(null);return bt(e,(s,l)=>{t=t.set(new He(s),l)}),t}constructor(e,t=mk()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ve(),value:this.value};if(Te(e))return null;{const s=Ie(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Qe(e),t);return u!=null?{path:it(new He(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Te(e))return this;{const t=Ie(e),s=this.children.get(t);return s!==null?s.subtree(Qe(e)):new Ke(null)}}set(e,t){if(Te(e))return new Ke(t,this.children);{const s=Ie(e),u=(this.children.get(s)||new Ke(null)).set(Qe(e),t),h=this.children.insert(s,u);return new Ke(this.value,h)}}remove(e){if(Te(e))return this.children.isEmpty()?new Ke(null):new Ke(null,this.children);{const t=Ie(e),s=this.children.get(t);if(s){const l=s.remove(Qe(e));let u;return l.isEmpty()?u=this.children.remove(t):u=this.children.insert(t,l),this.value===null&&u.isEmpty()?new Ke(null):new Ke(this.value,u)}else return this}}get(e){if(Te(e))return this.value;{const t=Ie(e),s=this.children.get(t);return s?s.get(Qe(e)):null}}setTree(e,t){if(Te(e))return t;{const s=Ie(e),u=(this.children.get(s)||new Ke(null)).setTree(Qe(e),t);let h;return u.isEmpty()?h=this.children.remove(s):h=this.children.insert(s,u),new Ke(this.value,h)}}fold(e){return this.fold_(Ve(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(it(e,l),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ve(),t)}findOnPath_(e,t,s){const l=this.value?s(t,this.value):!1;if(l)return l;if(Te(e))return null;{const u=Ie(e),h=this.children.get(u);return h?h.findOnPath_(Qe(e),it(t,u),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ve(),t)}foreachOnPath_(e,t,s){if(Te(e))return this;{this.value&&s(t,this.value);const l=Ie(e),u=this.children.get(l);return u?u.foreachOnPath_(Qe(e),it(t,l),s):new Ke(null)}}foreach(e){this.foreach_(Ve(),e)}foreach_(e,t){this.children.inorderTraversal((s,l)=>{l.foreach_(it(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class jn{constructor(e){this.writeTree_=e}static empty(){return new jn(new Ke(null))}}function Vl(r,e,t){if(Te(e))return new jn(new Ke(t));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const h=Qt(l,e);return u=u.updateChild(h,t),new jn(r.writeTree_.set(l,u))}else{const l=new Ke(t),u=r.writeTree_.setTree(e,l);return new jn(u)}}}function Hd(r,e,t){let s=r;return bt(t,(l,u)=>{s=Vl(s,it(e,l),u)}),s}function I_(r,e){if(Te(e))return jn.empty();{const t=r.writeTree_.setTree(e,new Ke(null));return new jn(t)}}function Wd(r,e){return fs(r,e)!=null}function fs(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(Qt(t.path,e)):null}function T_(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(st,(s,l)=>{e.push(new Ce(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new Ce(s,l.value))}),e}function pi(r,e){if(Te(e))return r;{const t=fs(r,e);return t!=null?new jn(new Ke(t)):new jn(r.writeTree_.subtree(e))}}function $d(r){return r.writeTree_.isEmpty()}function So(r,e){return Vv(Ve(),r.writeTree_,e)}function Vv(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(Z(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):t=Vv(it(r,l),u,t)}),!t.getChild(r).isEmpty()&&s!==null&&(t=t.updateChild(it(r,".priority"),s)),t}}/**
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
 */function Lf(r,e){return Wv(e,r)}function gk(r,e,t,s,l){Z(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:t,writeId:s,visible:l}),l&&(r.visibleWrites=Vl(r.visibleWrites,e,t)),r.lastWriteId=s}function _k(r,e,t,s){Z(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:t,writeId:s,visible:!0}),r.visibleWrites=Hd(r.visibleWrites,e,t),r.lastWriteId=s}function yk(r,e){for(let t=0;t<r.allWrites.length;t++){const s=r.allWrites[t];if(s.writeId===e)return s}return null}function vk(r,e){const t=r.allWrites.findIndex(m=>m.writeId===e);Z(t>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[t];r.allWrites.splice(t,1);let l=s.visible,u=!1,h=r.allWrites.length-1;for(;l&&h>=0;){const m=r.allWrites[h];m.visible&&(h>=t&&wk(m,s.path)?l=!1:gn(s.path,m.path)&&(u=!0)),h--}if(l){if(u)return xk(r),!0;if(s.snap)r.visibleWrites=I_(r.visibleWrites,s.path);else{const m=s.children;bt(m,_=>{r.visibleWrites=I_(r.visibleWrites,it(s.path,_))})}return!0}else return!1}function wk(r,e){if(r.snap)return gn(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&gn(it(r.path,t),e))return!0;return!1}function xk(r){r.visibleWrites=zv(r.allWrites,Ek,Ve()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function Ek(r){return r.visible}function zv(r,e,t){let s=jn.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const h=u.path;let m;if(u.snap)gn(t,h)?(m=Qt(t,h),s=Vl(s,m,u.snap)):gn(h,t)&&(m=Qt(h,t),s=Vl(s,Ve(),u.snap.getChild(m)));else if(u.children){if(gn(t,h))m=Qt(t,h),s=Hd(s,m,u.children);else if(gn(h,t))if(m=Qt(h,t),Te(m))s=Hd(s,Ve(),u.children);else{const _=yo(u.children,Ie(m));if(_){const w=_.getChild(Qe(m));s=Vl(s,Ve(),w)}}}else throw ko("WriteRecord should have .snap or .children")}}return s}function Bv(r,e,t,s,l){if(!s&&!l){const u=fs(r.visibleWrites,e);if(u!=null)return u;{const h=pi(r.visibleWrites,e);if($d(h))return t;if(t==null&&!Wd(h,Ve()))return null;{const m=t||ge.EMPTY_NODE;return So(h,m)}}}else{const u=pi(r.visibleWrites,e);if(!l&&$d(u))return t;if(!l&&t==null&&!Wd(u,Ve()))return null;{const h=function(w){return(w.visible||l)&&(!s||!~s.indexOf(w.writeId))&&(gn(w.path,e)||gn(e,w.path))},m=zv(r.allWrites,h,e),_=t||ge.EMPTY_NODE;return So(m,_)}}}function Sk(r,e,t){let s=ge.EMPTY_NODE;const l=fs(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(st,(u,h)=>{s=s.updateImmediateChild(u,h)}),s;if(t){const u=pi(r.visibleWrites,e);return t.forEachChild(st,(h,m)=>{const _=So(pi(u,new He(h)),m);s=s.updateImmediateChild(h,_)}),T_(u).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}else{const u=pi(r.visibleWrites,e);return T_(u).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}}function Ck(r,e,t,s,l){Z(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=it(e,t);if(Wd(r.visibleWrites,u))return null;{const h=pi(r.visibleWrites,u);return $d(h)?l.getChild(t):So(h,l.getChild(t))}}function kk(r,e,t,s){const l=it(e,t),u=fs(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(t)){const h=pi(r.visibleWrites,l);return So(h,s.getNode().getImmediateChild(t))}else return null}function Ik(r,e){return fs(r.visibleWrites,e)}function Tk(r,e,t,s,l,u,h){let m;const _=pi(r.visibleWrites,e),w=fs(_,Ve());if(w!=null)m=w;else if(t!=null)m=So(_,t);else return[];if(m=m.withIndex(h),!m.isEmpty()&&!m.isLeafNode()){const C=[],E=h.getCompare(),S=u?m.getReverseIteratorFrom(s,h):m.getIteratorFrom(s,h);let U=S.getNext();for(;U&&C.length<l;)E(U,s)!==0&&C.push(U),U=S.getNext();return C}else return[]}function Nk(){return{visibleWrites:jn.empty(),allWrites:[],lastWriteId:-1}}function oc(r,e,t,s){return Bv(r.writeTree,r.treePath,e,t,s)}function Mf(r,e){return Sk(r.writeTree,r.treePath,e)}function N_(r,e,t,s){return Ck(r.writeTree,r.treePath,e,t,s)}function lc(r,e){return Ik(r.writeTree,it(r.treePath,e))}function Rk(r,e,t,s,l,u){return Tk(r.writeTree,r.treePath,e,t,s,l,u)}function jf(r,e,t){return kk(r.writeTree,r.treePath,e,t)}function Hv(r,e){return Wv(it(r.treePath,e),r.writeTree)}function Wv(r,e){return{treePath:r,writeTree:e}}/**
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
 */class Ak{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;Z(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Z(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(t==="child_added"&&u==="child_removed")this.changeMap.set(s,Jl(s,e.snapshotNode,l.snapshotNode));else if(t==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&u==="child_changed")this.changeMap.set(s,Xl(s,l.oldSnap));else if(t==="child_changed"&&u==="child_added")this.changeMap.set(s,xo(s,e.snapshotNode));else if(t==="child_changed"&&u==="child_changed")this.changeMap.set(s,Jl(s,e.snapshotNode,l.oldSnap));else throw ko("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class bk{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const $v=new bk;class Ff{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new os(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jf(this.writes_,e,s)}}getChildAfterChild(e,t,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ls(this.viewCache_),u=Rk(this.writes_,l,t,1,s,e);return u.length===0?null:u[0]}}/**
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
 */function Pk(r){return{filter:r}}function Ok(r,e){Z(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),Z(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function Dk(r,e,t,s,l){const u=new Ak;let h,m;if(t.type===Ln.OVERWRITE){const w=t;w.source.fromUser?h=Gd(r,e,w.path,w.snap,s,l,u):(Z(w.source.fromServer,"Unknown source."),m=w.source.tagged||e.serverCache.isFiltered()&&!Te(w.path),h=ac(r,e,w.path,w.snap,s,l,m,u))}else if(t.type===Ln.MERGE){const w=t;w.source.fromUser?h=Mk(r,e,w.path,w.children,s,l,u):(Z(w.source.fromServer,"Unknown source."),m=w.source.tagged||e.serverCache.isFiltered(),h=qd(r,e,w.path,w.children,s,l,m,u))}else if(t.type===Ln.ACK_USER_WRITE){const w=t;w.revert?h=Uk(r,e,w.path,s,l,u):h=jk(r,e,w.path,w.affectedTree,s,l,u)}else if(t.type===Ln.LISTEN_COMPLETE)h=Fk(r,e,t.path,s,u);else throw ko("Unknown operation type: "+t.type);const _=u.getChanges();return Lk(e,h,_),{viewCache:h,changes:_}}function Lk(r,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Bd(r);(t.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&t.push(jv(Bd(e)))}}function Gv(r,e,t,s,l,u){const h=e.eventCache;if(lc(s,t)!=null)return e;{let m,_;if(Te(t))if(Z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const w=ls(e),C=w instanceof ge?w:ge.EMPTY_NODE,E=Mf(s,C);m=r.filter.updateFullNode(e.eventCache.getNode(),E,u)}else{const w=oc(s,ls(e));m=r.filter.updateFullNode(e.eventCache.getNode(),w,u)}else{const w=Ie(t);if(w===".priority"){Z(_i(t)===1,"Can't have a priority with additional path components");const C=h.getNode();_=e.serverCache.getNode();const E=N_(s,t,C,_);E!=null?m=r.filter.updatePriority(C,E):m=h.getNode()}else{const C=Qe(t);let E;if(h.isCompleteForChild(w)){_=e.serverCache.getNode();const S=N_(s,t,h.getNode(),_);S!=null?E=h.getNode().getImmediateChild(w).updateChild(C,S):E=h.getNode().getImmediateChild(w)}else E=jf(s,w,e.serverCache);E!=null?m=r.filter.updateChild(h.getNode(),w,E,C,l,u):m=h.getNode()}}return Ul(e,m,h.isFullyInitialized()||Te(t),r.filter.filtersNodes())}}function ac(r,e,t,s,l,u,h,m){const _=e.serverCache;let w;const C=h?r.filter:r.filter.getIndexedFilter();if(Te(t))w=C.updateFullNode(_.getNode(),s,null);else if(C.filtersNodes()&&!_.isFiltered()){const U=_.getNode().updateChild(t,s);w=C.updateFullNode(_.getNode(),U,null)}else{const U=Ie(t);if(!_.isCompleteForPath(t)&&_i(t)>1)return e;const B=Qe(t),H=_.getNode().getImmediateChild(U).updateChild(B,s);U===".priority"?w=C.updatePriority(_.getNode(),H):w=C.updateChild(_.getNode(),U,H,B,$v,null)}const E=Uv(e,w,_.isFullyInitialized()||Te(t),C.filtersNodes()),S=new Ff(l,E,u);return Gv(r,E,t,l,S,m)}function Gd(r,e,t,s,l,u,h){const m=e.eventCache;let _,w;const C=new Ff(l,e,u);if(Te(t))w=r.filter.updateFullNode(e.eventCache.getNode(),s,h),_=Ul(e,w,!0,r.filter.filtersNodes());else{const E=Ie(t);if(E===".priority")w=r.filter.updatePriority(e.eventCache.getNode(),s),_=Ul(e,w,m.isFullyInitialized(),m.isFiltered());else{const S=Qe(t),U=m.getNode().getImmediateChild(E);let B;if(Te(S))B=s;else{const q=C.getCompleteChild(E);q!=null?If(S)===".priority"&&q.getChild(Av(S)).isEmpty()?B=q:B=q.updateChild(S,s):B=ge.EMPTY_NODE}if(U.equals(B))_=e;else{const q=r.filter.updateChild(m.getNode(),E,B,S,C,h);_=Ul(e,q,m.isFullyInitialized(),r.filter.filtersNodes())}}}return _}function R_(r,e){return r.eventCache.isCompleteForChild(e)}function Mk(r,e,t,s,l,u,h){let m=e;return s.foreach((_,w)=>{const C=it(t,_);R_(e,Ie(C))&&(m=Gd(r,m,C,w,l,u,h))}),s.foreach((_,w)=>{const C=it(t,_);R_(e,Ie(C))||(m=Gd(r,m,C,w,l,u,h))}),m}function A_(r,e,t){return t.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function qd(r,e,t,s,l,u,h,m){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let _=e,w;Te(t)?w=s:w=new Ke(null).setTree(t,s);const C=e.serverCache.getNode();return w.children.inorderTraversal((E,S)=>{if(C.hasChild(E)){const U=e.serverCache.getNode().getImmediateChild(E),B=A_(r,U,S);_=ac(r,_,new He(E),B,l,u,h,m)}}),w.children.inorderTraversal((E,S)=>{const U=!e.serverCache.isCompleteForChild(E)&&S.value===null;if(!C.hasChild(E)&&!U){const B=e.serverCache.getNode().getImmediateChild(E),q=A_(r,B,S);_=ac(r,_,new He(E),q,l,u,h,m)}}),_}function jk(r,e,t,s,l,u,h){if(lc(l,t)!=null)return e;const m=e.serverCache.isFiltered(),_=e.serverCache;if(s.value!=null){if(Te(t)&&_.isFullyInitialized()||_.isCompleteForPath(t))return ac(r,e,t,_.getNode().getChild(t),l,u,m,h);if(Te(t)){let w=new Ke(null);return _.getNode().forEachChild(mo,(C,E)=>{w=w.set(new He(C),E)}),qd(r,e,t,w,l,u,m,h)}else return e}else{let w=new Ke(null);return s.foreach((C,E)=>{const S=it(t,C);_.isCompleteForPath(S)&&(w=w.set(C,_.getNode().getChild(S)))}),qd(r,e,t,w,l,u,m,h)}}function Fk(r,e,t,s,l){const u=e.serverCache,h=Uv(e,u.getNode(),u.isFullyInitialized()||Te(t),u.isFiltered());return Gv(r,h,t,s,$v,l)}function Uk(r,e,t,s,l,u){let h;if(lc(s,t)!=null)return e;{const m=new Ff(s,e,l),_=e.eventCache.getNode();let w;if(Te(t)||Ie(t)===".priority"){let C;if(e.serverCache.isFullyInitialized())C=oc(s,ls(e));else{const E=e.serverCache.getNode();Z(E instanceof ge,"serverChildren would be complete if leaf node"),C=Mf(s,E)}C=C,w=r.filter.updateFullNode(_,C,u)}else{const C=Ie(t);let E=jf(s,C,e.serverCache);E==null&&e.serverCache.isCompleteForChild(C)&&(E=_.getImmediateChild(C)),E!=null?w=r.filter.updateChild(_,C,E,Qe(t),m,u):e.eventCache.getNode().hasChild(C)?w=r.filter.updateChild(_,C,ge.EMPTY_NODE,Qe(t),m,u):w=_,w.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=oc(s,ls(e)),h.isLeafNode()&&(w=r.filter.updateFullNode(w,h,u)))}return h=e.serverCache.isFullyInitialized()||lc(s,Ve())!=null,Ul(e,w,h,r.filter.filtersNodes())}}/**
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
 */class Vk{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Af(s.getIndex()),u=ik(s);this.processor_=Pk(u);const h=t.serverCache,m=t.eventCache,_=l.updateFullNode(ge.EMPTY_NODE,h.getNode(),null),w=u.updateFullNode(ge.EMPTY_NODE,m.getNode(),null),C=new os(_,h.isFullyInitialized(),l.filtersNodes()),E=new os(w,m.isFullyInitialized(),u.filtersNodes());this.viewCache_=Tc(E,C),this.eventGenerator_=new hk(this.query_)}get query(){return this.query_}}function zk(r){return r.viewCache_.serverCache.getNode()}function Bk(r,e){const t=ls(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!Te(e)&&!t.getImmediateChild(Ie(e)).isEmpty())?t.getChild(e):null}function b_(r){return r.eventRegistrations_.length===0}function Hk(r,e){r.eventRegistrations_.push(e)}function P_(r,e,t){const s=[];if(t){Z(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const h=u.createCancelEvent(t,l);h&&s.push(h)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const h=r.eventRegistrations_[u];if(!h.matches(e))l.push(h);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function O_(r,e,t,s){e.type===Ln.MERGE&&e.source.queryId!==null&&(Z(ls(r.viewCache_),"We should always have a full cache before handling merges"),Z(Bd(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=Dk(r.processor_,l,e,t,s);return Ok(r.processor_,u.viewCache),Z(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,qv(r,u.changes,u.viewCache.eventCache.getNode(),null)}function Wk(r,e){const t=r.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(st,(u,h)=>{s.push(xo(u,h))}),t.isFullyInitialized()&&s.push(jv(t.getNode())),qv(r,s,t.getNode(),e)}function qv(r,e,t,s){const l=s?[s]:r.eventRegistrations_;return dk(r.eventGenerator_,e,t,l)}/**
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
 */let uc;class $k{constructor(){this.views=new Map}}function Gk(r){Z(!uc,"__referenceConstructor has already been defined"),uc=r}function qk(){return Z(uc,"Reference.ts has not been loaded"),uc}function Kk(r){return r.views.size===0}function Uf(r,e,t,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return Z(u!=null,"SyncTree gave us an op for an invalid query."),O_(u,e,t,s)}else{let u=[];for(const h of r.views.values())u=u.concat(O_(h,e,t,s));return u}}function Yk(r,e,t,s,l){const u=e._queryIdentifier,h=r.views.get(u);if(!h){let m=oc(t,l?s:null),_=!1;m?_=!0:s instanceof ge?(m=Mf(t,s),_=!1):(m=ge.EMPTY_NODE,_=!1);const w=Tc(new os(m,_,!1),new os(s,l,!1));return new Vk(e,w)}return h}function Qk(r,e,t,s,l,u){const h=Yk(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,h),Hk(h,t),Wk(h,t)}function Xk(r,e,t,s){const l=e._queryIdentifier,u=[];let h=[];const m=yi(r);if(l==="default")for(const[_,w]of r.views.entries())h=h.concat(P_(w,t,s)),b_(w)&&(r.views.delete(_),w.query._queryParams.loadsAllData()||u.push(w.query));else{const _=r.views.get(l);_&&(h=h.concat(P_(_,t,s)),b_(_)&&(r.views.delete(l),_.query._queryParams.loadsAllData()||u.push(_.query)))}return m&&!yi(r)&&u.push(new(qk())(e._repo,e._path)),{removed:u,events:h}}function Kv(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function go(r,e){let t=null;for(const s of r.views.values())t=t||Bk(s,e);return t}function Yv(r,e){if(e._queryParams.loadsAllData())return Nc(r);{const s=e._queryIdentifier;return r.views.get(s)}}function Qv(r,e){return Yv(r,e)!=null}function yi(r){return Nc(r)!=null}function Nc(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let cc;function Jk(r){Z(!cc,"__referenceConstructor has already been defined"),cc=r}function Zk(){return Z(cc,"Reference.ts has not been loaded"),cc}let eI=1;class D_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ke(null),this.pendingWriteTree_=Nk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tI(r,e,t,s,l){return gk(r.pendingWriteTree_,e,t,s,l),l?Ro(r,new ss(Pf(),e,t)):[]}function nI(r,e,t,s){_k(r.pendingWriteTree_,e,t,s);const l=Ke.fromObject(t);return Ro(r,new Eo(Pf(),e,l))}function Xi(r,e,t=!1){const s=yk(r.pendingWriteTree_,e);if(vk(r.pendingWriteTree_,e)){let u=new Ke(null);return s.snap!=null?u=u.set(Ve(),!0):bt(s.children,h=>{u=u.set(new He(h),!0)}),Ro(r,new sc(s.path,u,t))}else return[]}function Rc(r,e,t){return Ro(r,new ss(Of(),e,t))}function rI(r,e,t){const s=Ke.fromObject(t);return Ro(r,new Eo(Of(),e,s))}function iI(r,e){return Ro(r,new ea(Of(),e))}function sI(r,e,t){const s=Vf(r,t);if(s){const l=zf(s),u=l.path,h=l.queryId,m=Qt(u,e),_=new ea(Df(h),m);return Bf(r,u,_)}else return[]}function Kd(r,e,t,s,l=!1){const u=e._path,h=r.syncPointTree_.get(u);let m=[];if(h&&(e._queryIdentifier==="default"||Qv(h,e))){const _=Xk(h,e,t,s);Kk(h)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const w=_.removed;if(m=_.events,!l){const C=w.findIndex(S=>S._queryParams.loadsAllData())!==-1,E=r.syncPointTree_.findOnPath(u,(S,U)=>yi(U));if(C&&!E){const S=r.syncPointTree_.subtree(u);if(!S.isEmpty()){const U=aI(S);for(let B=0;B<U.length;++B){const q=U[B],H=q.query,de=e0(r,q);r.listenProvider_.startListening(zl(H),hc(r,H),de.hashFn,de.onComplete)}}}!E&&w.length>0&&!s&&(C?r.listenProvider_.stopListening(zl(e),null):w.forEach(S=>{const U=r.queryToTagMap.get(Ac(S));r.listenProvider_.stopListening(zl(S),U)}))}uI(r,w)}return m}function oI(r,e,t,s){const l=Vf(r,s);if(l!=null){const u=zf(l),h=u.path,m=u.queryId,_=Qt(h,e),w=new ss(Df(m),_,t);return Bf(r,h,w)}else return[]}function lI(r,e,t,s){const l=Vf(r,s);if(l){const u=zf(l),h=u.path,m=u.queryId,_=Qt(h,e),w=Ke.fromObject(t),C=new Eo(Df(m),_,w);return Bf(r,h,C)}else return[]}function L_(r,e,t,s=!1){const l=e._path;let u=null,h=!1;r.syncPointTree_.foreachOnPath(l,(S,U)=>{const B=Qt(S,l);u=u||go(U,B),h=h||yi(U)});let m=r.syncPointTree_.get(l);m?(h=h||yi(m),u=u||go(m,Ve())):(m=new $k,r.syncPointTree_=r.syncPointTree_.set(l,m));let _;u!=null?_=!0:(_=!1,u=ge.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((U,B)=>{const q=go(B,Ve());q&&(u=u.updateImmediateChild(U,q))}));const w=Qv(m,e);if(!w&&!e._queryParams.loadsAllData()){const S=Ac(e);Z(!r.queryToTagMap.has(S),"View does not exist, but we have a tag");const U=cI();r.queryToTagMap.set(S,U),r.tagToQueryMap.set(U,S)}const C=Lf(r.pendingWriteTree_,l);let E=Qk(m,e,t,C,u,_);if(!w&&!h&&!s){const S=Yv(m,e);E=E.concat(hI(r,e,S))}return E}function Xv(r,e,t){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(h,m)=>{const _=Qt(h,e),w=go(m,_);if(w)return w});return Bv(l,e,u,t,!0)}function Ro(r,e){return Jv(e,r.syncPointTree_,null,Lf(r.pendingWriteTree_,Ve()))}function Jv(r,e,t,s){if(Te(r.path))return Zv(r,e,t,s);{const l=e.get(Ve());t==null&&l!=null&&(t=go(l,Ve()));let u=[];const h=Ie(r.path),m=r.operationForChild(h),_=e.children.get(h);if(_&&m){const w=t?t.getImmediateChild(h):null,C=Hv(s,h);u=u.concat(Jv(m,_,w,C))}return l&&(u=u.concat(Uf(l,r,s,t))),u}}function Zv(r,e,t,s){const l=e.get(Ve());t==null&&l!=null&&(t=go(l,Ve()));let u=[];return e.children.inorderTraversal((h,m)=>{const _=t?t.getImmediateChild(h):null,w=Hv(s,h),C=r.operationForChild(h);C&&(u=u.concat(Zv(C,m,_,w)))}),l&&(u=u.concat(Uf(l,r,s,t))),u}function e0(r,e){const t=e.query,s=hc(r,t);return{hashFn:()=>(zk(e)||ge.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?sI(r,t._path,s):iI(r,t._path);{const u=nC(l,t);return Kd(r,t,null,u)}}}}function hc(r,e){const t=Ac(e);return r.queryToTagMap.get(t)}function Ac(r){return r._path.toString()+"$"+r._queryIdentifier}function Vf(r,e){return r.tagToQueryMap.get(e)}function zf(r){const e=r.indexOf("$");return Z(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new He(r.substr(0,e))}}function Bf(r,e,t){const s=r.syncPointTree_.get(e);Z(s,"Missing sync point for query tag that we're tracking");const l=Lf(r.pendingWriteTree_,e);return Uf(s,t,l,null)}function aI(r){return r.fold((e,t,s)=>{if(t&&yi(t))return[Nc(t)];{let l=[];return t&&(l=Kv(t)),bt(s,(u,h)=>{l=l.concat(h)}),l}})}function zl(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(Zk())(r._repo,r._path):r}function uI(r,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const l=Ac(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function cI(){return eI++}function hI(r,e,t){const s=e._path,l=hc(r,e),u=e0(r,t),h=r.listenProvider_.startListening(zl(e),l,u.hashFn,u.onComplete),m=r.syncPointTree_.subtree(s);if(l)Z(!yi(m.value),"If we're adding a query, it shouldn't be shadowed");else{const _=m.fold((w,C,E)=>{if(!Te(w)&&C&&yi(C))return[Nc(C).query];{let S=[];return C&&(S=S.concat(Kv(C).map(U=>U.query))),bt(E,(U,B)=>{S=S.concat(B)}),S}});for(let w=0;w<_.length;++w){const C=_[w];r.listenProvider_.stopListening(zl(C),hc(r,C))}}return h}/**
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
 */class Hf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Hf(t)}node(){return this.node_}}class Wf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=it(this.path_,e);return new Wf(this.syncTree_,t)}node(){return Xv(this.syncTree_,this.path_)}}const dI=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},M_=function(r,e,t){if(!r||typeof r!="object")return r;if(Z(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return fI(r[".sv"],e,t);if(typeof r[".sv"]=="object")return pI(r[".sv"],e);Z(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},fI=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:Z(!1,"Unexpected server value: "+r)}},pI=function(r,e,t){r.hasOwnProperty("increment")||Z(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&Z(!1,"Unexpected increment value: "+s);const l=e.node();if(Z(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const h=l.getValue();return typeof h!="number"?s:h+s},t0=function(r,e,t,s){return $f(e,new Wf(t,r),s)},mI=function(r,e,t){return $f(r,new Hf(e),t)};function $f(r,e,t){const s=r.getPriority().val(),l=M_(s,e.getImmediateChild(".priority"),t);let u;if(r.isLeafNode()){const h=r,m=M_(h.getValue(),e,t);return m!==h.getValue()||l!==h.getPriority().val()?new xt(m,At(l)):r}else{const h=r;return u=h,l!==h.getPriority().val()&&(u=u.updatePriority(new xt(l))),h.forEachChild(st,(m,_)=>{const w=$f(_,e.getImmediateChild(m),t);w!==_&&(u=u.updateImmediateChild(m,w))}),u}}/**
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
 */class Gf{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function qf(r,e){let t=e instanceof He?e:new He(e),s=r,l=Ie(t);for(;l!==null;){const u=yo(s.node.children,l)||{children:{},childCount:0};s=new Gf(l,s,u),t=Qe(t),l=Ie(t)}return s}function Ao(r){return r.node.value}function n0(r,e){r.node.value=e,Yd(r)}function r0(r){return r.node.childCount>0}function gI(r){return Ao(r)===void 0&&!r0(r)}function bc(r,e){bt(r.node.children,(t,s)=>{e(new Gf(t,r,s))})}function i0(r,e,t,s){t&&e(r),bc(r,l=>{i0(l,e,!0)})}function _I(r,e,t){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ha(r){return new He(r.parent===null?r.name:ha(r.parent)+"/"+r.name)}function Yd(r){r.parent!==null&&yI(r.parent,r.name,r)}function yI(r,e,t){const s=gI(t),l=rr(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Yd(r)):!s&&!l&&(r.node.children[e]=t.node,r.node.childCount++,Yd(r))}/**
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
 */const vI=/[\[\].#$\/\u0000-\u001F\u007F]/,wI=/[\[\].#$\u0000-\u001F\u007F]/,Sd=10*1024*1024,Kf=function(r){return typeof r=="string"&&r.length!==0&&!vI.test(r)},s0=function(r){return typeof r=="string"&&r.length!==0&&!wI.test(r)},xI=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),s0(r)},EI=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!xf(r)||r&&typeof r=="object"&&rr(r,".sv")},Yf=function(r,e,t){const s=t instanceof He?new MC(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+Ki(s));if(typeof e=="function")throw new Error(r+"contains a function "+Ki(s)+" with contents = "+e.toString());if(xf(e))throw new Error(r+"contains "+e.toString()+" "+Ki(s));if(typeof e=="string"&&e.length>Sd/3&&vc(e)>Sd)throw new Error(r+"contains a string greater than "+Sd+" utf8 bytes "+Ki(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(bt(e,(h,m)=>{if(h===".value")l=!0;else if(h!==".priority"&&h!==".sv"&&(u=!0,!Kf(h)))throw new Error(r+" contains an invalid key ("+h+") "+Ki(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jC(s,h),Yf(r,m,s),FC(s)}),l&&u)throw new Error(r+' contains ".value" child '+Ki(s)+" in addition to actual children.")}},SI=function(r,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const u=Ql(s);for(let h=0;h<u.length;h++)if(!(u[h]===".priority"&&h===u.length-1)){if(!Kf(u[h]))throw new Error(r+"contains an invalid key ("+u[h]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(LC);let l=null;for(t=0;t<e.length;t++){if(s=e[t],l!==null&&gn(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},CI=function(r,e,t,s){const l=uf(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];bt(e,(h,m)=>{const _=new He(h);if(Yf(l,m,it(t,_)),If(_)===".priority"&&!EI(m))throw new Error(l+"contains an invalid value for '"+_.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(_)}),SI(l,u)},o0=function(r,e,t,s){if(!s0(t))throw new Error(uf(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},kI=function(r,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),o0(r,e,t)},II=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!xI(t))throw new Error(uf(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class TI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qf(r,e){let t=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();t!==null&&!Tf(u,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:u}),t.events.push(l)}t&&r.eventLists_.push(t)}function l0(r,e,t){Qf(r,t),a0(r,s=>Tf(s,e))}function br(r,e,t){Qf(r,t),a0(r,s=>gn(s,e)||gn(e,s))}function a0(r,e){r.recursionDepth_++;let t=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(NI(r.eventLists_[s]),r.eventLists_[s]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function NI(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const s=t.getEventRunner();jl&&Rt("event: "+t.toString()),No(s)}}}/**
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
 */const RI="repo_interrupt",AI=25;class bI{constructor(e,t,s,l){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ic(),this.transactionQueueTree_=new Gf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PI(r,e,t){if(r.stats_=Cf(r.repoInfo_),r.forceRestClient_||oC())r.server_=new rc(r.repoInfo_,(s,l,u,h)=>{j_(r,s,l,u,h)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>F_(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{St(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new Tr(r.repoInfo_,e,(s,l,u,h)=>{j_(r,s,l,u,h)},s=>{F_(r,s)},s=>{DI(r,s)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=hC(r.repoInfo_,()=>new ck(r.stats_,r.server_)),r.infoData_=new sk,r.infoSyncTree_=new D_({startListening:(s,l,u,h)=>{let m=[];const _=r.infoData_.getNode(s._path);return _.isEmpty()||(m=Rc(r.infoSyncTree_,s._path,_),setTimeout(()=>{h("ok")},0)),m},stopListening:()=>{}}),Jf(r,"connected",!1),r.serverSyncTree_=new D_({startListening:(s,l,u,h)=>(r.server_.listen(s,u,l,(m,_)=>{const w=h(m,_);br(r.eventQueue_,s._path,w)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function OI(r){const t=r.infoData_.getNode(new He(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Xf(r){return dI({timestamp:OI(r)})}function j_(r,e,t,s,l){r.dataUpdateCount++;const u=new He(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let h=[];if(l)if(s){const _=Gu(t,w=>At(w));h=lI(r.serverSyncTree_,u,_,l)}else{const _=At(t);h=oI(r.serverSyncTree_,u,_,l)}else if(s){const _=Gu(t,w=>At(w));h=rI(r.serverSyncTree_,u,_)}else{const _=At(t);h=Rc(r.serverSyncTree_,u,_)}let m=u;h.length>0&&(m=ta(r,u)),br(r.eventQueue_,m,h)}function F_(r,e){Jf(r,"connected",e),e===!1&&MI(r)}function DI(r,e){bt(e,(t,s)=>{Jf(r,t,s)})}function Jf(r,e,t){const s=new He("/.info/"+e),l=At(t);r.infoData_.updateSnapshot(s,l);const u=Rc(r.infoSyncTree_,s,l);br(r.eventQueue_,s,u)}function u0(r){return r.nextWriteId_++}function LI(r,e,t,s){Zf(r,"update",{path:e.toString(),value:t});let l=!0;const u=Xf(r),h={};if(bt(t,(m,_)=>{l=!1,h[m]=t0(it(e,m),At(_),r.serverSyncTree_,u)}),l)Rt("update() called with empty data.  Don't do anything."),U_(r,s,"ok",void 0);else{const m=u0(r),_=nI(r.serverSyncTree_,e,h,m);Qf(r.eventQueue_,_),r.server_.merge(e.toString(),t,(w,C)=>{const E=w==="ok";E||Jt("update at "+e+" failed: "+w);const S=Xi(r.serverSyncTree_,m,!E),U=S.length>0?ta(r,e):e;br(r.eventQueue_,U,S),U_(r,s,w,C)}),bt(t,w=>{const C=p0(r,it(e,w));ta(r,C)}),br(r.eventQueue_,e,[])}}function MI(r){Zf(r,"onDisconnectEvents");const e=Xf(r),t=ic();zd(r.onDisconnect_,Ve(),(l,u)=>{const h=t0(l,u,r.serverSyncTree_,e);Fv(t,l,h)});let s=[];zd(t,Ve(),(l,u)=>{s=s.concat(Rc(r.serverSyncTree_,l,u));const h=p0(r,l);ta(r,h)}),r.onDisconnect_=ic(),br(r.eventQueue_,Ve(),s)}function jI(r,e,t){let s;Ie(e._path)===".info"?s=L_(r.infoSyncTree_,e,t):s=L_(r.serverSyncTree_,e,t),l0(r.eventQueue_,e._path,s)}function FI(r,e,t){let s;Ie(e._path)===".info"?s=Kd(r.infoSyncTree_,e,t):s=Kd(r.serverSyncTree_,e,t),l0(r.eventQueue_,e._path,s)}function UI(r){r.persistentConnection_&&r.persistentConnection_.interrupt(RI)}function Zf(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),Rt(t,...e)}function U_(r,e,t,s){e&&No(()=>{if(t==="ok")e(null);else{const l=(t||"error").toUpperCase();let u=l;s&&(u+=": "+s);const h=new Error(u);h.code=l,e(h)}})}function c0(r,e,t){return Xv(r.serverSyncTree_,e,t)||ge.EMPTY_NODE}function ep(r,e=r.transactionQueueTree_){if(e||Pc(r,e),Ao(e)){const t=d0(r,e);Z(t.length>0,"Sending zero length transaction queue"),t.every(l=>l.status===0)&&VI(r,ha(e),t)}else r0(e)&&bc(e,t=>{ep(r,t)})}function VI(r,e,t){const s=t.map(w=>w.currentWriteId),l=c0(r,e,s);let u=l;const h=l.hash();for(let w=0;w<t.length;w++){const C=t[w];Z(C.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),C.status=1,C.retryCount++;const E=Qt(e,C.path);u=u.updateChild(E,C.currentOutputSnapshotRaw)}const m=u.val(!0),_=e;r.server_.put(_.toString(),m,w=>{Zf(r,"transaction put response",{path:_.toString(),status:w});let C=[];if(w==="ok"){const E=[];for(let S=0;S<t.length;S++)t[S].status=2,C=C.concat(Xi(r.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&E.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();Pc(r,qf(r.transactionQueueTree_,e)),ep(r,r.transactionQueueTree_),br(r.eventQueue_,e,C);for(let S=0;S<E.length;S++)No(E[S])}else{if(w==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Jt("transaction at "+_.toString()+" failed: "+w);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=w}ta(r,e)}},h)}function ta(r,e){const t=h0(r,e),s=ha(t),l=d0(r,t);return zI(r,l,s),s}function zI(r,e,t){if(e.length===0)return;const s=[];let l=[];const h=e.filter(m=>m.status===0).map(m=>m.currentWriteId);for(let m=0;m<e.length;m++){const _=e[m],w=Qt(t,_.path);let C=!1,E;if(Z(w!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)C=!0,E=_.abortReason,l=l.concat(Xi(r.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=AI)C=!0,E="maxretry",l=l.concat(Xi(r.serverSyncTree_,_.currentWriteId,!0));else{const S=c0(r,_.path,h);_.currentInputSnapshot=S;const U=e[m].update(S.val());if(U!==void 0){Yf("transaction failed: Data returned ",U,_.path);let B=At(U);typeof U=="object"&&U!=null&&rr(U,".priority")||(B=B.updatePriority(S.getPriority()));const H=_.currentWriteId,de=Xf(r),$=mI(B,S,de);_.currentOutputSnapshotRaw=B,_.currentOutputSnapshotResolved=$,_.currentWriteId=u0(r),h.splice(h.indexOf(H),1),l=l.concat(tI(r.serverSyncTree_,_.path,$,_.currentWriteId,_.applyLocally)),l=l.concat(Xi(r.serverSyncTree_,H,!0))}else C=!0,E="nodata",l=l.concat(Xi(r.serverSyncTree_,_.currentWriteId,!0))}br(r.eventQueue_,t,l),l=[],C&&(e[m].status=2,function(S){setTimeout(S,Math.floor(0))}(e[m].unwatcher),e[m].onComplete&&(E==="nodata"?s.push(()=>e[m].onComplete(null,!1,e[m].currentInputSnapshot)):s.push(()=>e[m].onComplete(new Error(E),!1,null))))}Pc(r,r.transactionQueueTree_);for(let m=0;m<s.length;m++)No(s[m]);ep(r,r.transactionQueueTree_)}function h0(r,e){let t,s=r.transactionQueueTree_;for(t=Ie(e);t!==null&&Ao(s)===void 0;)s=qf(s,t),e=Qe(e),t=Ie(e);return s}function d0(r,e){const t=[];return f0(r,e,t),t.sort((s,l)=>s.order-l.order),t}function f0(r,e,t){const s=Ao(e);if(s)for(let l=0;l<s.length;l++)t.push(s[l]);bc(e,l=>{f0(r,l,t)})}function Pc(r,e){const t=Ao(e);if(t){let s=0;for(let l=0;l<t.length;l++)t[l].status!==2&&(t[s]=t[l],s++);t.length=s,n0(e,t.length>0?t:void 0)}bc(e,s=>{Pc(r,s)})}function p0(r,e){const t=ha(h0(r,e)),s=qf(r.transactionQueueTree_,e);return _I(s,l=>{Cd(r,l)}),Cd(r,s),i0(s,l=>{Cd(r,l)}),t}function Cd(r,e){const t=Ao(e);if(t){const s=[];let l=[],u=-1;for(let h=0;h<t.length;h++)t[h].status===3||(t[h].status===1?(Z(u===h-1,"All SENT items should be at beginning of queue."),u=h,t[h].status=3,t[h].abortReason="set"):(Z(t[h].status===0,"Unexpected transaction status in abort"),t[h].unwatcher(),l=l.concat(Xi(r.serverSyncTree_,t[h].currentWriteId,!0)),t[h].onComplete&&s.push(t[h].onComplete.bind(null,new Error("set"),!1,null))));u===-1?n0(e,void 0):t.length=u+1,br(r.eventQueue_,ha(e),l);for(let h=0;h<s.length;h++)No(s[h])}}/**
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
 */function BI(r){let e="";const t=r.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let l=t[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function HI(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Jt(`Invalid query segment '${t}' in query '${r}'`)}return e}const V_=function(r,e){const t=WI(r),s=t.namespace;t.domain==="firebase.com"&&Ar(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ar("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||XS();const l=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new xv(t.host,t.secure,s,l,e,"",s!==t.subdomain),path:new He(t.pathString)}},WI=function(r){let e="",t="",s="",l="",u="",h=!0,m="https",_=443;if(typeof r=="string"){let w=r.indexOf("//");w>=0&&(m=r.substring(0,w-1),r=r.substring(w+2));let C=r.indexOf("/");C===-1&&(C=r.length);let E=r.indexOf("?");E===-1&&(E=r.length),e=r.substring(0,Math.min(C,E)),C<E&&(l=BI(r.substring(C,E)));const S=HI(r.substring(Math.min(r.length,E)));w=e.indexOf(":"),w>=0?(h=m==="https"||m==="wss",_=parseInt(e.substring(w+1),10)):w=e.length;const U=e.slice(0,w);if(U.toLowerCase()==="localhost")t="localhost";else if(U.split(".").length<=2)t=U;else{const B=e.indexOf(".");s=e.substring(0,B).toLowerCase(),t=e.substring(B+1),u=s}"ns"in S&&(u=S.ns)}return{host:e,port:_,domain:t,subdomain:s,secure:h,scheme:m,pathString:l,namespace:u}};/**
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
 */class $I{constructor(e,t,s,l){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+St(this.snapshot.exportVal())}}class GI{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class qI{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class tp{constructor(e,t,s,l){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=l}get key(){return Te(this._path)?null:If(this._path)}get ref(){return new wi(this._repo,this._path)}get _queryIdentifier(){const e=C_(this._queryParams),t=Ef(e);return t==="{}"?"default":t}get _queryObject(){return C_(this._queryParams)}isEqual(e){if(e=Vn(e),!(e instanceof tp))return!1;const t=this._repo===e._repo,s=Tf(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return t&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+DC(this._path)}}class wi extends tp{constructor(e,t){super(e,t,new bf,!1)}get parent(){const e=Av(this._path);return e===null?null:new wi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class dc{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new He(e),s=Qd(this.ref,e);return new dc(this._node.getChild(t),s,st)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new dc(l,Qd(this.ref,s),st)))}hasChild(e){const t=new He(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ou(r,e){return r=Vn(r),r._checkNotDeleted("ref"),e!==void 0?Qd(r._root,e):r._root}function Qd(r,e){return r=Vn(r),Ie(r._path)===null?kI("child","path",e):o0("child","path",e),new wi(r._repo,it(r._path,e))}function kd(r,e){CI("update",e,r._path);const t=new yc;return LI(r._repo,r._path,e,t.wrapCallback(()=>{})),t.promise}class np{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new $I("value",this,new dc(e.snapshotNode,new wi(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new GI(this,e,t):null}matches(e){return e instanceof np?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function KI(r,e,t,s,l){const u=new qI(t,void 0),h=new np(u);return jI(r._repo,r,h),()=>FI(r._repo,r,h)}function YI(r,e,t,s){return KI(r,"value",e)}Gk(wi);Jk(wi);/**
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
 */const QI="FIREBASE_DATABASE_EMULATOR_HOST",Xd={};let XI=!1;function JI(r,e,t,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),h=us(u);r.repoInfo_=new xv(e,h,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(r.authTokenProvider_=s)}function ZI(r,e,t,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||Ar("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Rt("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let h=V_(u,l),m=h.repoInfo,_;typeof process<"u"&&o_&&(_=o_[QI]),_?(u=`http://${_}?ns=${m.namespace}`,h=V_(u,l),m=h.repoInfo):h.repoInfo.secure;const w=new aC(r.name,r.options,e);II("Invalid Firebase Database URL",h),Te(h.path)||Ar("Database URL must point to the root of a Firebase Database (not including a child path).");const C=tT(m,r,w,new lC(r,t));return new nT(C,r)}function eT(r,e){const t=Xd[e];(!t||t[r.key]!==r)&&Ar(`Database ${e}(${r.repoInfo_}) has already been deleted.`),UI(r),delete t[r.key]}function tT(r,e,t,s){let l=Xd[e.name];l||(l={},Xd[e.name]=l);let u=l[r.toURLString()];return u&&Ar("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new bI(r,XI,t,s),l[r.toURLString()]=u,u}class nT{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wi(this._repo,Ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ar("Cannot call "+e+" on a deleted database.")}}function rT(r=hf(),e){const t=xc(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=_y("database");s&&iT(t,...s)}return t}function iT(r,e,t,s={}){r=Vn(r),r._checkNotDeleted("useEmulator");const l=`${e}:${t}`,u=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&mi(s,u.repoInfo_.emulatorOptions))return;Ar("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&Ar('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new Bu(Bu.OWNER);else if(s.mockUserToken){const m=typeof s.mockUserToken=="string"?s.mockUserToken:wy(s.mockUserToken,r.app.options.projectId);h=new Bu(m)}us(e)&&(of(e),lf("Database",!0)),JI(u,l,s,h)}/**
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
 */function sT(r){$S(cs),ns(new gi("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return ZI(s,l,u,t)},"PUBLIC").setMultipleInstances(!0)),er(l_,a_,r),er(l_,a_,"esm2017")}Tr.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Tr.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};sT();var z_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rp;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,k){function N(){}N.prototype=k.prototype,R.D=k.prototype,R.prototype=new N,R.prototype.constructor=R,R.C=function(P,O,A){for(var I=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)I[ve-2]=arguments[ve];return k.prototype[O].apply(P,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(R,k,N){N||(N=0);var P=Array(16);if(typeof k=="string")for(var O=0;16>O;++O)P[O]=k.charCodeAt(N++)|k.charCodeAt(N++)<<8|k.charCodeAt(N++)<<16|k.charCodeAt(N++)<<24;else for(O=0;16>O;++O)P[O]=k[N++]|k[N++]<<8|k[N++]<<16|k[N++]<<24;k=R.g[0],N=R.g[1],O=R.g[2];var A=R.g[3],I=k+(A^N&(O^A))+P[0]+3614090360&4294967295;k=N+(I<<7&4294967295|I>>>25),I=A+(O^k&(N^O))+P[1]+3905402710&4294967295,A=k+(I<<12&4294967295|I>>>20),I=O+(N^A&(k^N))+P[2]+606105819&4294967295,O=A+(I<<17&4294967295|I>>>15),I=N+(k^O&(A^k))+P[3]+3250441966&4294967295,N=O+(I<<22&4294967295|I>>>10),I=k+(A^N&(O^A))+P[4]+4118548399&4294967295,k=N+(I<<7&4294967295|I>>>25),I=A+(O^k&(N^O))+P[5]+1200080426&4294967295,A=k+(I<<12&4294967295|I>>>20),I=O+(N^A&(k^N))+P[6]+2821735955&4294967295,O=A+(I<<17&4294967295|I>>>15),I=N+(k^O&(A^k))+P[7]+4249261313&4294967295,N=O+(I<<22&4294967295|I>>>10),I=k+(A^N&(O^A))+P[8]+1770035416&4294967295,k=N+(I<<7&4294967295|I>>>25),I=A+(O^k&(N^O))+P[9]+2336552879&4294967295,A=k+(I<<12&4294967295|I>>>20),I=O+(N^A&(k^N))+P[10]+4294925233&4294967295,O=A+(I<<17&4294967295|I>>>15),I=N+(k^O&(A^k))+P[11]+2304563134&4294967295,N=O+(I<<22&4294967295|I>>>10),I=k+(A^N&(O^A))+P[12]+1804603682&4294967295,k=N+(I<<7&4294967295|I>>>25),I=A+(O^k&(N^O))+P[13]+4254626195&4294967295,A=k+(I<<12&4294967295|I>>>20),I=O+(N^A&(k^N))+P[14]+2792965006&4294967295,O=A+(I<<17&4294967295|I>>>15),I=N+(k^O&(A^k))+P[15]+1236535329&4294967295,N=O+(I<<22&4294967295|I>>>10),I=k+(O^A&(N^O))+P[1]+4129170786&4294967295,k=N+(I<<5&4294967295|I>>>27),I=A+(N^O&(k^N))+P[6]+3225465664&4294967295,A=k+(I<<9&4294967295|I>>>23),I=O+(k^N&(A^k))+P[11]+643717713&4294967295,O=A+(I<<14&4294967295|I>>>18),I=N+(A^k&(O^A))+P[0]+3921069994&4294967295,N=O+(I<<20&4294967295|I>>>12),I=k+(O^A&(N^O))+P[5]+3593408605&4294967295,k=N+(I<<5&4294967295|I>>>27),I=A+(N^O&(k^N))+P[10]+38016083&4294967295,A=k+(I<<9&4294967295|I>>>23),I=O+(k^N&(A^k))+P[15]+3634488961&4294967295,O=A+(I<<14&4294967295|I>>>18),I=N+(A^k&(O^A))+P[4]+3889429448&4294967295,N=O+(I<<20&4294967295|I>>>12),I=k+(O^A&(N^O))+P[9]+568446438&4294967295,k=N+(I<<5&4294967295|I>>>27),I=A+(N^O&(k^N))+P[14]+3275163606&4294967295,A=k+(I<<9&4294967295|I>>>23),I=O+(k^N&(A^k))+P[3]+4107603335&4294967295,O=A+(I<<14&4294967295|I>>>18),I=N+(A^k&(O^A))+P[8]+1163531501&4294967295,N=O+(I<<20&4294967295|I>>>12),I=k+(O^A&(N^O))+P[13]+2850285829&4294967295,k=N+(I<<5&4294967295|I>>>27),I=A+(N^O&(k^N))+P[2]+4243563512&4294967295,A=k+(I<<9&4294967295|I>>>23),I=O+(k^N&(A^k))+P[7]+1735328473&4294967295,O=A+(I<<14&4294967295|I>>>18),I=N+(A^k&(O^A))+P[12]+2368359562&4294967295,N=O+(I<<20&4294967295|I>>>12),I=k+(N^O^A)+P[5]+4294588738&4294967295,k=N+(I<<4&4294967295|I>>>28),I=A+(k^N^O)+P[8]+2272392833&4294967295,A=k+(I<<11&4294967295|I>>>21),I=O+(A^k^N)+P[11]+1839030562&4294967295,O=A+(I<<16&4294967295|I>>>16),I=N+(O^A^k)+P[14]+4259657740&4294967295,N=O+(I<<23&4294967295|I>>>9),I=k+(N^O^A)+P[1]+2763975236&4294967295,k=N+(I<<4&4294967295|I>>>28),I=A+(k^N^O)+P[4]+1272893353&4294967295,A=k+(I<<11&4294967295|I>>>21),I=O+(A^k^N)+P[7]+4139469664&4294967295,O=A+(I<<16&4294967295|I>>>16),I=N+(O^A^k)+P[10]+3200236656&4294967295,N=O+(I<<23&4294967295|I>>>9),I=k+(N^O^A)+P[13]+681279174&4294967295,k=N+(I<<4&4294967295|I>>>28),I=A+(k^N^O)+P[0]+3936430074&4294967295,A=k+(I<<11&4294967295|I>>>21),I=O+(A^k^N)+P[3]+3572445317&4294967295,O=A+(I<<16&4294967295|I>>>16),I=N+(O^A^k)+P[6]+76029189&4294967295,N=O+(I<<23&4294967295|I>>>9),I=k+(N^O^A)+P[9]+3654602809&4294967295,k=N+(I<<4&4294967295|I>>>28),I=A+(k^N^O)+P[12]+3873151461&4294967295,A=k+(I<<11&4294967295|I>>>21),I=O+(A^k^N)+P[15]+530742520&4294967295,O=A+(I<<16&4294967295|I>>>16),I=N+(O^A^k)+P[2]+3299628645&4294967295,N=O+(I<<23&4294967295|I>>>9),I=k+(O^(N|~A))+P[0]+4096336452&4294967295,k=N+(I<<6&4294967295|I>>>26),I=A+(N^(k|~O))+P[7]+1126891415&4294967295,A=k+(I<<10&4294967295|I>>>22),I=O+(k^(A|~N))+P[14]+2878612391&4294967295,O=A+(I<<15&4294967295|I>>>17),I=N+(A^(O|~k))+P[5]+4237533241&4294967295,N=O+(I<<21&4294967295|I>>>11),I=k+(O^(N|~A))+P[12]+1700485571&4294967295,k=N+(I<<6&4294967295|I>>>26),I=A+(N^(k|~O))+P[3]+2399980690&4294967295,A=k+(I<<10&4294967295|I>>>22),I=O+(k^(A|~N))+P[10]+4293915773&4294967295,O=A+(I<<15&4294967295|I>>>17),I=N+(A^(O|~k))+P[1]+2240044497&4294967295,N=O+(I<<21&4294967295|I>>>11),I=k+(O^(N|~A))+P[8]+1873313359&4294967295,k=N+(I<<6&4294967295|I>>>26),I=A+(N^(k|~O))+P[15]+4264355552&4294967295,A=k+(I<<10&4294967295|I>>>22),I=O+(k^(A|~N))+P[6]+2734768916&4294967295,O=A+(I<<15&4294967295|I>>>17),I=N+(A^(O|~k))+P[13]+1309151649&4294967295,N=O+(I<<21&4294967295|I>>>11),I=k+(O^(N|~A))+P[4]+4149444226&4294967295,k=N+(I<<6&4294967295|I>>>26),I=A+(N^(k|~O))+P[11]+3174756917&4294967295,A=k+(I<<10&4294967295|I>>>22),I=O+(k^(A|~N))+P[2]+718787259&4294967295,O=A+(I<<15&4294967295|I>>>17),I=N+(A^(O|~k))+P[9]+3951481745&4294967295,R.g[0]=R.g[0]+k&4294967295,R.g[1]=R.g[1]+(O+(I<<21&4294967295|I>>>11))&4294967295,R.g[2]=R.g[2]+O&4294967295,R.g[3]=R.g[3]+A&4294967295}s.prototype.u=function(R,k){k===void 0&&(k=R.length);for(var N=k-this.blockSize,P=this.B,O=this.h,A=0;A<k;){if(O==0)for(;A<=N;)l(this,R,A),A+=this.blockSize;if(typeof R=="string"){for(;A<k;)if(P[O++]=R.charCodeAt(A++),O==this.blockSize){l(this,P),O=0;break}}else for(;A<k;)if(P[O++]=R[A++],O==this.blockSize){l(this,P),O=0;break}}this.h=O,this.o+=k},s.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var k=1;k<R.length-8;++k)R[k]=0;var N=8*this.o;for(k=R.length-8;k<R.length;++k)R[k]=N&255,N/=256;for(this.u(R),R=Array(16),k=N=0;4>k;++k)for(var P=0;32>P;P+=8)R[N++]=this.g[k]>>>P&255;return R};function u(R,k){var N=m;return Object.prototype.hasOwnProperty.call(N,R)?N[R]:N[R]=k(R)}function h(R,k){this.h=k;for(var N=[],P=!0,O=R.length-1;0<=O;O--){var A=R[O]|0;P&&A==k||(N[O]=A,P=!1)}this.g=N}var m={};function _(R){return-128<=R&&128>R?u(R,function(k){return new h([k|0],0>k?-1:0)}):new h([R|0],0>R?-1:0)}function w(R){if(isNaN(R)||!isFinite(R))return E;if(0>R)return H(w(-R));for(var k=[],N=1,P=0;R>=N;P++)k[P]=R/N|0,N*=4294967296;return new h(k,0)}function C(R,k){if(R.length==0)throw Error("number format error: empty string");if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(R.charAt(0)=="-")return H(C(R.substring(1),k));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=w(Math.pow(k,8)),P=E,O=0;O<R.length;O+=8){var A=Math.min(8,R.length-O),I=parseInt(R.substring(O,O+A),k);8>A?(A=w(Math.pow(k,A)),P=P.j(A).add(w(I))):(P=P.j(N),P=P.add(w(I)))}return P}var E=_(0),S=_(1),U=_(16777216);r=h.prototype,r.m=function(){if(q(this))return-H(this).m();for(var R=0,k=1,N=0;N<this.g.length;N++){var P=this.i(N);R+=(0<=P?P:4294967296+P)*k,k*=4294967296}return R},r.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(B(this))return"0";if(q(this))return"-"+H(this).toString(R);for(var k=w(Math.pow(R,6)),N=this,P="";;){var O=ce(N,k).g;N=de(N,O.j(k));var A=((0<N.g.length?N.g[0]:N.h)>>>0).toString(R);if(N=O,B(N))return A+P;for(;6>A.length;)A="0"+A;P=A+P}},r.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function B(R){if(R.h!=0)return!1;for(var k=0;k<R.g.length;k++)if(R.g[k]!=0)return!1;return!0}function q(R){return R.h==-1}r.l=function(R){return R=de(this,R),q(R)?-1:B(R)?0:1};function H(R){for(var k=R.g.length,N=[],P=0;P<k;P++)N[P]=~R.g[P];return new h(N,~R.h).add(S)}r.abs=function(){return q(this)?H(this):this},r.add=function(R){for(var k=Math.max(this.g.length,R.g.length),N=[],P=0,O=0;O<=k;O++){var A=P+(this.i(O)&65535)+(R.i(O)&65535),I=(A>>>16)+(this.i(O)>>>16)+(R.i(O)>>>16);P=I>>>16,A&=65535,I&=65535,N[O]=I<<16|A}return new h(N,N[N.length-1]&-2147483648?-1:0)};function de(R,k){return R.add(H(k))}r.j=function(R){if(B(this)||B(R))return E;if(q(this))return q(R)?H(this).j(H(R)):H(H(this).j(R));if(q(R))return H(this.j(H(R)));if(0>this.l(U)&&0>R.l(U))return w(this.m()*R.m());for(var k=this.g.length+R.g.length,N=[],P=0;P<2*k;P++)N[P]=0;for(P=0;P<this.g.length;P++)for(var O=0;O<R.g.length;O++){var A=this.i(P)>>>16,I=this.i(P)&65535,ve=R.i(O)>>>16,xe=R.i(O)&65535;N[2*P+2*O]+=I*xe,$(N,2*P+2*O),N[2*P+2*O+1]+=A*xe,$(N,2*P+2*O+1),N[2*P+2*O+1]+=I*ve,$(N,2*P+2*O+1),N[2*P+2*O+2]+=A*ve,$(N,2*P+2*O+2)}for(P=0;P<k;P++)N[P]=N[2*P+1]<<16|N[2*P];for(P=k;P<2*k;P++)N[P]=0;return new h(N,0)};function $(R,k){for(;(R[k]&65535)!=R[k];)R[k+1]+=R[k]>>>16,R[k]&=65535,k++}function ae(R,k){this.g=R,this.h=k}function ce(R,k){if(B(k))throw Error("division by zero");if(B(R))return new ae(E,E);if(q(R))return k=ce(H(R),k),new ae(H(k.g),H(k.h));if(q(k))return k=ce(R,H(k)),new ae(H(k.g),k.h);if(30<R.g.length){if(q(R)||q(k))throw Error("slowDivide_ only works with positive integers.");for(var N=S,P=k;0>=P.l(R);)N=ye(N),P=ye(P);var O=W(N,1),A=W(P,1);for(P=W(P,2),N=W(N,2);!B(P);){var I=A.add(P);0>=I.l(R)&&(O=O.add(N),A=I),P=W(P,1),N=W(N,1)}return k=de(R,O.j(k)),new ae(O,k)}for(O=E;0<=R.l(k);){for(N=Math.max(1,Math.floor(R.m()/k.m())),P=Math.ceil(Math.log(N)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),A=w(N),I=A.j(k);q(I)||0<I.l(R);)N-=P,A=w(N),I=A.j(k);B(A)&&(A=S),O=O.add(A),R=de(R,I)}return new ae(O,R)}r.A=function(R){return ce(this,R).h},r.and=function(R){for(var k=Math.max(this.g.length,R.g.length),N=[],P=0;P<k;P++)N[P]=this.i(P)&R.i(P);return new h(N,this.h&R.h)},r.or=function(R){for(var k=Math.max(this.g.length,R.g.length),N=[],P=0;P<k;P++)N[P]=this.i(P)|R.i(P);return new h(N,this.h|R.h)},r.xor=function(R){for(var k=Math.max(this.g.length,R.g.length),N=[],P=0;P<k;P++)N[P]=this.i(P)^R.i(P);return new h(N,this.h^R.h)};function ye(R){for(var k=R.g.length+1,N=[],P=0;P<k;P++)N[P]=R.i(P)<<1|R.i(P-1)>>>31;return new h(N,R.h)}function W(R,k){var N=k>>5;k%=32;for(var P=R.g.length-N,O=[],A=0;A<P;A++)O[A]=0<k?R.i(A+N)>>>k|R.i(A+N+1)<<32-k:R.i(A+N);return new h(O,R.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=w,h.fromString=C,rp=h}).apply(typeof z_<"u"?z_:typeof self<"u"?self:typeof window<"u"?window:{});var Du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,g){return a==Array.prototype||a==Object.prototype||(a[f]=g.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Du=="object"&&Du];for(var f=0;f<a.length;++f){var g=a[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function l(a,f){if(f)e:{var g=s;a=a.split(".");for(var x=0;x<a.length-1;x++){var M=a[x];if(!(M in g))break e;g=g[M]}a=a[a.length-1],x=g[a],f=f(x),f!=x&&f!=null&&e(g,a,{configurable:!0,writable:!0,value:f})}}function u(a,f){a instanceof String&&(a+="");var g=0,x=!1,M={next:function(){if(!x&&g<a.length){var z=g++;return{value:f(z,a[z]),done:!1}}return x=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}l("Array.prototype.values",function(a){return a||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function _(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function w(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function C(a,f,g){return a.call.apply(a.bind,arguments)}function E(a,f,g){if(!a)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,x),a.apply(f,M)}}return function(){return a.apply(f,arguments)}}function S(a,f,g){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?C:E,S.apply(null,arguments)}function U(a,f){var g=Array.prototype.slice.call(arguments,1);return function(){var x=g.slice();return x.push.apply(x,arguments),a.apply(this,x)}}function B(a,f){function g(){}g.prototype=f.prototype,a.aa=f.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(x,M,z){for(var ee=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)ee[Be-2]=arguments[Be];return f.prototype[M].apply(x,ee)}}function q(a){const f=a.length;if(0<f){const g=Array(f);for(let x=0;x<f;x++)g[x]=a[x];return g}return[]}function H(a,f){for(let g=1;g<arguments.length;g++){const x=arguments[g];if(_(x)){const M=a.length||0,z=x.length||0;a.length=M+z;for(let ee=0;ee<z;ee++)a[M+ee]=x[ee]}else a.push(x)}}class de{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function $(a){return/^[\s\xa0]*$/.test(a)}function ae(){var a=m.navigator;return a&&(a=a.userAgent)?a:""}function ce(a){return ce[" "](a),a}ce[" "]=function(){};var ye=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function W(a,f,g){for(const x in a)f.call(g,a[x],x,a)}function R(a,f){for(const g in a)f.call(void 0,a[g],g,a)}function k(a){const f={};for(const g in a)f[g]=a[g];return f}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(a,f){let g,x;for(let M=1;M<arguments.length;M++){x=arguments[M];for(g in x)a[g]=x[g];for(let z=0;z<N.length;z++)g=N[z],Object.prototype.hasOwnProperty.call(x,g)&&(a[g]=x[g])}}function O(a){var f=1;a=a.split(":");const g=[];for(;0<f&&a.length;)g.push(a.shift()),f--;return a.length&&g.push(a.join(":")),g}function A(a){m.setTimeout(()=>{throw a},0)}function I(){var a=te;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class ve{constructor(){this.h=this.g=null}add(f,g){const x=xe.get();x.set(f,g),this.h?this.h.next=x:this.g=x,this.h=x}}var xe=new de(()=>new Le,a=>a.reset());class Le{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,X=!1,te=new ve,ne=()=>{const a=m.Promise.resolve(void 0);ke=()=>{a.then(L)}};var L=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(g){A(g)}var f=xe;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}X=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var we=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return a}();function Ee(a,f){if(he.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,x=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(ye){e:{try{ce(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else g=="mouseover"?f=a.fromElement:g=="mouseout"&&(f=a.toElement);this.relatedTarget=f,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Re[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ee.aa.h.call(this)}}B(Ee,he);var Re={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(a,f,g,x,M){this.listener=a,this.proxy=null,this.src=f,this.type=g,this.capture=!!x,this.ha=M,this.key=++Fe,this.da=this.fa=!1}function mt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ir(a){this.src=a,this.g={},this.h=0}ir.prototype.add=function(a,f,g,x,M){var z=a.toString();a=this.g[z],a||(a=this.g[z]=[],this.h++);var ee=Dr(a,f,x,M);return-1<ee?(f=a[ee],g||(f.fa=!1)):(f=new $e(f,this.src,z,!!x,M),f.fa=g,a.push(f)),f};function ps(a,f){var g=f.type;if(g in a.g){var x=a.g[g],M=Array.prototype.indexOf.call(x,f,void 0),z;(z=0<=M)&&Array.prototype.splice.call(x,M,1),z&&(mt(f),a.g[g].length==0&&(delete a.g[g],a.h--))}}function Dr(a,f,g,x){for(var M=0;M<a.length;++M){var z=a[M];if(!z.da&&z.listener==f&&z.capture==!!g&&z.ha==x)return M}return-1}var xi="closure_lm_"+(1e6*Math.random()|0),ms={};function bo(a,f,g,x,M){if(Array.isArray(f)){for(var z=0;z<f.length;z++)bo(a,f[z],g,x,M);return null}return g=Do(g),a&&a[je]?a.K(f,g,w(x)?!!x.capture:!1,M):Po(a,f,g,!1,x,M)}function Po(a,f,g,x,M,z){if(!f)throw Error("Invalid event type");var ee=w(M)?!!M.capture:!!M,Be=_s(a);if(Be||(a[xi]=Be=new ir(a)),g=Be.add(f,g,x,ee,z),g.proxy)return g;if(x=ma(),g.proxy=x,x.src=a,x.listener=g,a.addEventListener)we||(M=ee),M===void 0&&(M=!1),a.addEventListener(f.toString(),x,M);else if(a.attachEvent)a.attachEvent(or(f.toString()),x);else if(a.addListener&&a.removeListener)a.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ma(){function a(g){return f.call(a.src,a.listener,g)}const f=Oo;return a}function gs(a,f,g,x,M){if(Array.isArray(f))for(var z=0;z<f.length;z++)gs(a,f[z],g,x,M);else x=w(x)?!!x.capture:!!x,g=Do(g),a&&a[je]?(a=a.i,f=String(f).toString(),f in a.g&&(z=a.g[f],g=Dr(z,g,x,M),-1<g&&(mt(z[g]),Array.prototype.splice.call(z,g,1),z.length==0&&(delete a.g[f],a.h--)))):a&&(a=_s(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Dr(f,g,x,M)),(g=-1<a?f[a]:null)&&sr(g))}function sr(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[je])ps(f.i,a);else{var g=a.type,x=a.proxy;f.removeEventListener?f.removeEventListener(g,x,a.capture):f.detachEvent?f.detachEvent(or(g),x):f.addListener&&f.removeListener&&f.removeListener(x),(g=_s(f))?(ps(g,a),g.h==0&&(g.src=null,f[xi]=null)):mt(a)}}}function or(a){return a in ms?ms[a]:ms[a]="on"+a}function Oo(a,f){if(a.da)a=!0;else{f=new Ee(f,this);var g=a.listener,x=a.ha||a.src;a.fa&&sr(a),a=g.call(x,f)}return a}function _s(a){return a=a[xi],a instanceof ir?a:null}var ys="__closure_events_fn_"+(1e9*Math.random()>>>0);function Do(a){return typeof a=="function"?a:(a[ys]||(a[ys]=function(f){return a.handleEvent(f)}),a[ys])}function ct(){G.call(this),this.i=new ir(this),this.M=this,this.F=null}B(ct,G),ct.prototype[je]=!0,ct.prototype.removeEventListener=function(a,f,g,x){gs(this,a,f,g,x)};function ht(a,f){var g,x=a.F;if(x)for(g=[];x;x=x.F)g.push(x);if(a=a.M,x=f.type||f,typeof f=="string")f=new he(f,a);else if(f instanceof he)f.target=f.target||a;else{var M=f;f=new he(x,a),P(f,M)}if(M=!0,g)for(var z=g.length-1;0<=z;z--){var ee=f.g=g[z];M=lr(ee,x,!0,f)&&M}if(ee=f.g=a,M=lr(ee,x,!0,f)&&M,M=lr(ee,x,!1,f)&&M,g)for(z=0;z<g.length;z++)ee=f.g=g[z],M=lr(ee,x,!1,f)&&M}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var g=a.g[f],x=0;x<g.length;x++)mt(g[x]);delete a.g[f],a.h--}}this.F=null},ct.prototype.K=function(a,f,g,x){return this.i.add(String(a),f,!1,g,x)},ct.prototype.L=function(a,f,g,x){return this.i.add(String(a),f,!0,g,x)};function lr(a,f,g,x){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,z=0;z<f.length;++z){var ee=f[z];if(ee&&!ee.da&&ee.capture==g){var Be=ee.listener,dt=ee.ha||ee.src;ee.fa&&ps(a.i,ee),M=Be.call(dt,x)!==!1&&M}}return M&&!x.defaultPrevented}function Lo(a,f,g){if(typeof a=="function")g&&(a=S(a,g));else if(a&&typeof a.handleEvent=="function")a=S(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(a,f||0)}function Lr(a){a.g=Lo(()=>{a.g=null,a.i&&(a.i=!1,Lr(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Ei extends G{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Lr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(a){G.call(this),this.h=a,this.g={}}B(Si,G);var Mo=[];function jo(a){W(a.g,function(f,g){this.g.hasOwnProperty(g)&&sr(f)},a),a.g={}}Si.prototype.N=function(){Si.aa.N.call(this),jo(this)},Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fo=m.JSON.stringify,Uo=m.JSON.parse,Vo=class{stringify(a){return m.JSON.stringify(a,void 0)}parse(a){return m.JSON.parse(a,void 0)}};function Ci(){}Ci.prototype.h=null;function vs(a){return a.h||(a.h=a.i())}function zo(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zn(){he.call(this,"d")}B(zn,he);function ws(){he.call(this,"c")}B(ws,he);var ar={},Bo=null;function xs(){return Bo=Bo||new ct}ar.La="serverreachability";function Ho(a){he.call(this,ar.La,a)}B(Ho,he);function ur(a){const f=xs();ht(f,new Ho(f))}ar.STAT_EVENT="statevent";function Wo(a,f){he.call(this,ar.STAT_EVENT,a),this.stat=f}B(Wo,he);function ot(a){const f=xs();ht(f,new Wo(f,a))}ar.Ma="timingevent";function Es(a,f){he.call(this,ar.Ma,a),this.size=f}B(Es,he);function _n(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},f)}function ki(){this.g=!0}ki.prototype.xa=function(){this.g=!1};function Ii(a,f,g,x,M,z){a.info(function(){if(a.g)if(z)for(var ee="",Be=z.split("&"),dt=0;dt<Be.length;dt++){var Ae=Be[dt].split("=");if(1<Ae.length){var gt=Ae[0];Ae=Ae[1];var _t=gt.split("_");ee=2<=_t.length&&_t[1]=="type"?ee+(gt+"="+Ae+"&"):ee+(gt+"=redacted&")}}else ee=null;else ee=z;return"XMLHTTP REQ ("+x+") [attempt "+M+"]: "+f+`
`+g+`
`+ee})}function Ss(a,f,g,x,M,z,ee){a.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+M+"]: "+f+`
`+g+`
`+z+" "+ee})}function yn(a,f,g,x){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Oc(a,g)+(x?" "+x:"")})}function $o(a,f){a.info(function(){return"TIMEOUT: "+f})}ki.prototype.info=function(){};function Oc(a,f){if(!a.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var x=g[a];if(!(2>x.length)){var M=x[1];if(Array.isArray(M)&&!(1>M.length)){var z=M[0];if(z!="noop"&&z!="stop"&&z!="close")for(var ee=1;ee<M.length;ee++)M[ee]=""}}}}return Fo(g)}catch{return f}}var Go={NO_ERROR:0,TIMEOUT:8},Dc={},vn;function Ti(){}B(Ti,Ci),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},vn=new Ti;function wn(a,f,g,x){this.j=a,this.i=f,this.l=g,this.R=x||1,this.U=new Si(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ga}function ga(){this.i=null,this.g="",this.h=!1}var qo={},Cs={};function ks(a,f,g){a.L=1,a.v=Vr(en(f)),a.m=g,a.P=!0,Ko(a,null)}function Ko(a,f){a.F=Date.now(),Ge(a),a.A=en(a.v);var g=a.A,x=a.R;Array.isArray(x)||(x=[String(x)]),Br(g.i,"t",x),a.C=0,g=a.j.J,a.h=new ga,a.g=Da(a.j,g?f:null,!a.m),0<a.O&&(a.M=new Ei(S(a.Y,a,a.g),a.O)),f=a.U,g=a.g,x=a.ca;var M="readystatechange";Array.isArray(M)||(M&&(Mo[0]=M.toString()),M=Mo);for(var z=0;z<M.length;z++){var ee=bo(g,M[z],x||f.handleEvent,!1,f.h||f);if(!ee)break;f.g[ee.key]=ee}f=a.H?k(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),ur(),Ii(a.i,a.u,a.A,a.l,a.R,a.m)}wn.prototype.ca=function(a){a=a.target;const f=this.M;f&&Bt(a)==3?f.j():this.Y(a)},wn.prototype.Y=function(a){try{if(a==this.g)e:{const _t=Bt(this.g);var f=this.g.Ba();const Gn=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||el(this.g)))){this.J||_t!=4||f==7||(f==8||0>=Gn?ur(3):ur(2)),Ni(this);var g=this.g.Z();this.X=g;t:if(_a(this)){var x=el(this.g);a="";var M=x.length,z=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),Mr(this);var ee="";break t}this.h.i=new m.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,a+=this.h.i.decode(x[f],{stream:!(z&&f==M-1)});x.length=0,this.h.g+=a,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=g==200,Ss(this.i,this.u,this.A,this.l,this.R,_t,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,dt=this.g;if((Be=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Be)){var Ae=Be;break t}}Ae=null}if(g=Ae)yn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yo(this,g);else{this.o=!1,this.s=3,ot(12),ln(this),Mr(this);break e}}if(this.P){g=!0;let It;for(;!this.J&&this.C<ee.length;)if(It=Lc(this,ee),It==Cs){_t==4&&(this.s=4,ot(14),g=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(It==qo){this.s=4,ot(15),yn(this.i,this.l,ee,"[Invalid Chunk]"),g=!1;break}else yn(this.i,this.l,It,null),Yo(this,It);if(_a(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||ee.length!=0||this.h.h||(this.s=1,ot(16),g=!1),this.o=this.o&&g,!g)yn(this.i,this.l,ee,"[Invalid Chunked Response]"),ln(this),Mr(this);else if(0<ee.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),nl(gt),gt.M=!0,ot(11))}}else yn(this.i,this.l,ee,null),Yo(this,ee);_t==4&&ln(this),this.o&&!this.J&&(_t==4?Ms(this.j,this):(this.o=!1,Ge(this)))}else bs(this.g),g==400&&0<ee.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),ln(this),Mr(this)}}}catch{}finally{}};function _a(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Lc(a,f){var g=a.C,x=f.indexOf(`
`,g);return x==-1?Cs:(g=Number(f.substring(g,x)),isNaN(g)?qo:(x+=1,x+g>f.length?Cs:(f=f.slice(x,x+g),a.C=x+g,f)))}wn.prototype.cancel=function(){this.J=!0,ln(this)};function Ge(a){a.S=Date.now()+a.I,ya(a,a.I)}function ya(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_n(S(a.ba,a),f)}function Ni(a){a.B&&(m.clearTimeout(a.B),a.B=null)}wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?($o(this.i,this.A),this.L!=2&&(ur(),ot(17)),ln(this),this.s=2,Mr(this)):ya(this,this.S-a)};function Mr(a){a.j.G==0||a.J||Ms(a.j,a)}function ln(a){Ni(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,jo(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Yo(a,f){try{var g=a.j;if(g.G!=0&&(g.g==a||Mt(g.h,a))){if(!a.K&&Mt(g.h,a)&&g.G==3){try{var x=g.Da.g.parse(f)}catch{x=null}if(Array.isArray(x)&&x.length==3){var M=x;if(M[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)Ls(g),kn(g);else break e;Ds(g),ot(18)}}else g.za=M[1],0<g.za-g.T&&37500>M[2]&&g.F&&g.v==0&&!g.C&&(g.C=_n(S(g.Za,g),6e3));if(1>=wa(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else pr(g,11)}else if((a.K||g.g==a)&&Ls(g),!$(f))for(M=g.Da.g.parse(f),f=0;f<M.length;f++){let Ae=M[f];if(g.T=Ae[0],Ae=Ae[1],g.G==2)if(Ae[0]=="c"){g.K=Ae[1],g.ia=Ae[2];const gt=Ae[3];gt!=null&&(g.la=gt,g.j.info("VER="+g.la));const _t=Ae[4];_t!=null&&(g.Aa=_t,g.j.info("SVER="+g.Aa));const Gn=Ae[5];Gn!=null&&typeof Gn=="number"&&0<Gn&&(x=1.5*Gn,g.L=x,g.j.info("backChannelRequestTimeoutMs_="+x)),x=g;const It=a.g;if(It){const js=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(js){var z=x.h;z.g||js.indexOf("spdy")==-1&&js.indexOf("quic")==-1&&js.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Qo(z,z.h),z.h=null))}if(x.D){const Fs=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Fs&&(x.ya=Fs,We(x.I,x.D,Fs))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),x=g;var ee=a;if(x.qa=Oa(x,x.J?x.ia:null,x.W),ee.K){xa(x.h,ee);var Be=ee,dt=x.L;dt&&(Be.I=dt),Be.B&&(Ni(Be),Ge(Be)),x.g=ee}else Di(x);0<g.i.length&&$n(g)}else Ae[0]!="stop"&&Ae[0]!="close"||pr(g,7);else g.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?pr(g,7):kt(g):Ae[0]!="noop"&&g.l&&g.l.ta(Ae),g.v=0)}}ur(4)}catch{}}var va=class{constructor(a,f){this.g=a,this.map=f}};function Ri(a){this.l=a||10,m.PerformanceNavigationTiming?(a=m.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function wa(a){return a.h?1:a.g?a.g.size:0}function Mt(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Qo(a,f){a.g?a.g.add(f):a.h=f}function xa(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Ri.prototype.cancel=function(){if(this.i=Ea(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ea(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const g of a.g.values())f=f.concat(g.D);return f}return q(a.i)}function Is(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(_(a)){for(var f=[],g=a.length,x=0;x<g;x++)f.push(a[x]);return f}f=[],g=0;for(x in a)f[g++]=a[x];return f}function Ts(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(_(a)||typeof a=="string"){var f=[];a=a.length;for(var g=0;g<a;g++)f.push(g);return f}f=[],g=0;for(const x in a)f[g++]=x;return f}}}function jr(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(_(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var g=Ts(a),x=Is(a),M=x.length,z=0;z<M;z++)f.call(void 0,x[z],g&&g[z],a)}var Ai=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mc(a,f){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var x=a[g].indexOf("="),M=null;if(0<=x){var z=a[g].substring(0,x);M=a[g].substring(x+1)}else z=a[g];f(z,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function cr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof cr){this.h=a.h,bi(this,a.j),this.o=a.o,this.g=a.g,Fr(this,a.s),this.l=a.l;var f=a.i,g=new Bn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Ur(this,g),this.m=a.m}else a&&(f=String(a).match(Ai))?(this.h=!1,bi(this,f[1]||"",!0),this.o=Ne(f[2]||""),this.g=Ne(f[3]||"",!0),Fr(this,f[4]),this.l=Ne(f[5]||"",!0),Ur(this,f[6]||"",!0),this.m=Ne(f[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}cr.prototype.toString=function(){var a=[],f=this.j;f&&a.push(zr(f,Ns,!0),":");var g=this.g;return(g||f=="file")&&(a.push("//"),(f=this.o)&&a.push(zr(f,Ns,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(zr(g,g.charAt(0)=="/"?ka:Ca,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",zr(g,Xo)),a.join("")};function en(a){return new cr(a)}function bi(a,f,g){a.j=g?Ne(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Fr(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Ur(a,f,g){f instanceof Bn?(a.i=f,Hn(a.i,a.h)):(g||(f=zr(f,Ia)),a.i=new Bn(f,a.h))}function We(a,f,g){a.i.set(f,g)}function Vr(a){return We(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ne(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zr(a,f,g){return typeof a=="string"?(a=encodeURI(a).replace(f,Sa),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Sa(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ns=/[#\/\?@]/g,Ca=/[#\?:]/g,ka=/[#\?]/g,Ia=/[#\?@]/g,Xo=/#/g;function Bn(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Ct(a){a.g||(a.g=new Map,a.h=0,a.i&&Mc(a.i,function(f,g){a.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}r=Bn.prototype,r.add=function(a,f){Ct(this),this.i=null,a=an(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(f),this.h+=1,this};function xn(a,f){Ct(a),f=an(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function En(a,f){return Ct(a),f=an(a,f),a.g.has(f)}r.forEach=function(a,f){Ct(this),this.g.forEach(function(g,x){g.forEach(function(M){a.call(f,M,x,this)},this)},this)},r.na=function(){Ct(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let x=0;x<f.length;x++){const M=a[x];for(let z=0;z<M.length;z++)g.push(f[x])}return g},r.V=function(a){Ct(this);let f=[];if(typeof a=="string")En(this,a)&&(f=f.concat(this.g.get(an(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)f=f.concat(a[g])}return f},r.set=function(a,f){return Ct(this),this.i=null,a=an(this,a),En(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},r.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Br(a,f,g){xn(a,f),0<g.length&&(a.i=null,a.g.set(an(a,f),q(g)),a.h+=g.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var x=f[g];const z=encodeURIComponent(String(x)),ee=this.V(x);for(x=0;x<ee.length;x++){var M=z;ee[x]!==""&&(M+="="+encodeURIComponent(String(ee[x]))),a.push(M)}}return this.i=a.join("&")};function an(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Hn(a,f){f&&!a.j&&(Ct(a),a.i=null,a.g.forEach(function(g,x){var M=x.toLowerCase();x!=M&&(xn(this,x),Br(this,M,g))},a)),a.j=f}function jc(a,f){const g=new ki;if(m.Image){const x=new Image;x.onload=U(zt,g,"TestLoadImage: loaded",!0,f,x),x.onerror=U(zt,g,"TestLoadImage: error",!1,f,x),x.onabort=U(zt,g,"TestLoadImage: abort",!1,f,x),x.ontimeout=U(zt,g,"TestLoadImage: timeout",!1,f,x),m.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=a}else f(!1)}function Ta(a,f){const g=new ki,x=new AbortController,M=setTimeout(()=>{x.abort(),zt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:x.signal}).then(z=>{clearTimeout(M),z.ok?zt(g,"TestPingServer: ok",!0,f):zt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),zt(g,"TestPingServer: error",!1,f)})}function zt(a,f,g,x,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),x(g)}catch{}}function Fc(){this.g=new Vo}function Na(a,f,g){const x=g||"";try{jr(a,function(M,z){let ee=M;w(M)&&(ee=Fo(M)),f.push(x+z+"="+encodeURIComponent(ee))})}catch(M){throw f.push(x+"type="+encodeURIComponent("_badmap")),M}}function hr(a){this.l=a.Ub||null,this.j=a.eb||!1}B(hr,Ci),hr.prototype.g=function(){return new Pi(this.l,this.j)},hr.prototype.i=function(a){return function(){return a}}({});function Pi(a,f){ct.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(Pi,ct),r=Pi.prototype,r.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Cn(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ra(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ra(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Sn(this):Cn(this),this.readyState==3&&Ra(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Sn(this))},r.Qa=function(a){this.g&&(this.response=a,Sn(this))},r.ga=function(){this.g&&Sn(this)};function Sn(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Cn(a)}r.setRequestHeader=function(a,f){this.u.append(a,f)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=f.next();return a.join(`\r
`)};function Cn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dr(a){let f="";return W(a,function(g,x){f+=x,f+=":",f+=g,f+=`\r
`}),f}function Hr(a,f,g){e:{for(x in g){var x=!1;break e}x=!0}x||(g=dr(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):We(a,f,g))}function et(a){ct.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(et,ct);var Uc=/^https?$/i,Jo=["POST","PUT"];r=et.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,f,g,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vn.g(),this.v=this.o?vs(this.o):vs(vn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(z){Oi(this,z);return}if(a=g||"",g=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var M in x)g.set(M,x[M]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const z of x.keys())g.set(z,x.get(z));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(g.keys()).find(z=>z.toLowerCase()=="content-type"),M=m.FormData&&a instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Jo,f,void 0))||x||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,ee]of g)this.g.setRequestHeader(z,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{As(this),this.u=!0,this.g.send(a),this.u=!1}catch(z){Oi(this,z)}};function Oi(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,Rs(a),tn(a)}function Rs(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ht(this,"complete"),ht(this,"abort"),tn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),et.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Zo(this):this.bb())},r.bb=function(){Zo(this)};function Zo(a){if(a.h&&typeof h<"u"&&(!a.v[1]||Bt(a)!=4||a.Z()!=2)){if(a.u&&Bt(a)==4)Lo(a.Ea,0,a);else if(ht(a,"readystatechange"),Bt(a)==4){a.h=!1;try{const ee=a.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var x;if(x=ee===0){var M=String(a.D).match(Ai)[1]||null;!M&&m.self&&m.self.location&&(M=m.self.location.protocol.slice(0,-1)),x=!Uc.test(M?M.toLowerCase():"")}g=x}if(g)ht(a,"complete"),ht(a,"success");else{a.m=6;try{var z=2<Bt(a)?a.g.statusText:""}catch{z=""}a.l=z+" ["+a.Z()+"]",Rs(a)}}finally{tn(a)}}}}function tn(a,f){if(a.g){As(a);const g=a.g,x=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||ht(a,"ready");try{g.onreadystatechange=x}catch{}}}function As(a){a.I&&(m.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Bt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Uo(f)}};function el(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function bs(a){const f={};a=(a.g&&2<=Bt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<a.length;x++){if($(a[x]))continue;var g=O(a[x]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const z=f[M]||[];f[M]=z,z.push(g)}R(f,function(x){return x.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(a,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||f}function tl(a){this.Aa=0,this.i=[],this.j=new ki,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,a),this.cb=Wn("retryDelaySeedMs",1e4,a),this.Wa=Wn("forwardChannelMaxRetries",2,a),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ri(a&&a.concurrentRequestLimit),this.Da=new Fc,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=tl.prototype,r.la=8,r.G=1,r.connect=function(a,f,g,x){ot(0),this.W=a,this.H=f||{},g&&x!==void 0&&(this.H.OSID=g,this.H.OAID=x),this.F=this.X,this.I=Oa(this,null,this.W),$n(this)};function kt(a){if(Ps(a),a.G==3){var f=a.U++,g=en(a.I);if(We(g,"SID",a.K),We(g,"RID",f),We(g,"TYPE","terminate"),fr(a,g),f=new wn(a,a.j,f),f.L=2,f.v=Vr(en(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=Da(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ge(f)}Pa(a)}function kn(a){a.g&&(nl(a),a.g.cancel(),a.g=null)}function Ps(a){kn(a),a.u&&(m.clearTimeout(a.u),a.u=null),Ls(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&m.clearTimeout(a.s),a.s=null)}function $n(a){if(!Zt(a.h)&&!a.s){a.s=!0;var f=a.Ga;ke||ne(),X||(ke(),X=!0),te.add(f,a),a.B=0}}function Vc(a,f){return wa(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_n(S(a.Ga,a,f),ba(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const M=new wn(this,this.j,a);let z=this.o;if(this.S&&(z?(z=k(z),P(z,this.S)):z=this.S),this.m!==null||this.O||(M.H=z,z=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var x=this.i[g];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(f+=x,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Wr(this,M,f),g=en(this.I),We(g,"RID",a),We(g,"CVER",22),this.D&&We(g,"X-HTTP-Session-Id",this.D),fr(this,g),z&&(this.O?f="headers="+encodeURIComponent(String(dr(z)))+"&"+f:this.m&&Hr(g,this.m,z)),Qo(this.h,M),this.Ua&&We(g,"TYPE","init"),this.P?(We(g,"$req",f),We(g,"SID","null"),M.T=!0,ks(M,g,null)):ks(M,g,f),this.G=2}}else this.G==3&&(a?Os(this,a):this.i.length==0||Zt(this.h)||Os(this))};function Os(a,f){var g;f?g=f.l:g=a.U++;const x=en(a.I);We(x,"SID",a.K),We(x,"RID",g),We(x,"AID",a.T),fr(a,x),a.m&&a.o&&Hr(x,a.m,a.o),g=new wn(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Wr(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Qo(a.h,g),ks(g,x,f)}function fr(a,f){a.H&&W(a.H,function(g,x){We(f,x,g)}),a.l&&jr({},function(g,x){We(f,x,g)})}function Wr(a,f,g){g=Math.min(a.i.length,g);var x=a.l?S(a.l.Na,a.l,a):null;e:{var M=a.i;let z=-1;for(;;){const ee=["count="+g];z==-1?0<g?(z=M[0].g,ee.push("ofs="+z)):z=0:ee.push("ofs="+z);let Be=!0;for(let dt=0;dt<g;dt++){let Ae=M[dt].g;const gt=M[dt].map;if(Ae-=z,0>Ae)z=Math.max(0,M[dt].g-100),Be=!1;else try{Na(gt,ee,"req"+Ae+"_")}catch{x&&x(gt)}}if(Be){x=ee.join("&");break e}}}return a=a.i.splice(0,g),f.D=a,x}function Di(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;ke||ne(),X||(ke(),X=!0),te.add(f,a),a.v=0}}function Ds(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_n(S(a.Fa,a),ba(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Aa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_n(S(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),kn(this),Aa(this))};function nl(a){a.A!=null&&(m.clearTimeout(a.A),a.A=null)}function Aa(a){a.g=new wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=en(a.qa);We(f,"RID","rpc"),We(f,"SID",a.K),We(f,"AID",a.T),We(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&We(f,"TO",a.ja),We(f,"TYPE","xmlhttp"),fr(a,f),a.m&&a.o&&Hr(f,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=Vr(en(f)),g.m=null,g.P=!0,Ko(g,a)}r.Za=function(){this.C!=null&&(this.C=null,kn(this),Ds(this),ot(19))};function Ls(a){a.C!=null&&(m.clearTimeout(a.C),a.C=null)}function Ms(a,f){var g=null;if(a.g==f){Ls(a),nl(a),a.g=null;var x=2}else if(Mt(a.h,f))g=f.D,xa(a.h,f),x=1;else return;if(a.G!=0){if(f.o)if(x==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var M=a.B;x=xs(),ht(x,new Es(x,g)),$n(a)}else Di(a);else if(M=f.s,M==3||M==0&&0<f.X||!(x==1&&Vc(a,f)||x==2&&Ds(a)))switch(g&&0<g.length&&(f=a.h,f.i=f.i.concat(g)),M){case 1:pr(a,5);break;case 4:pr(a,10);break;case 3:pr(a,6);break;default:pr(a,2)}}}function ba(a,f){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*f}function pr(a,f){if(a.j.info("Error code "+f),f==2){var g=S(a.fb,a),x=a.Xa;const M=!x;x=new cr(x||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||bi(x,"https"),Vr(x),M?jc(x.toString(),g):Ta(x.toString(),g)}else ot(2);a.G=0,a.l&&a.l.sa(f),Pa(a),Ps(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Pa(a){if(a.G=0,a.ka=[],a.l){const f=Ea(a.h);(f.length!=0||a.i.length!=0)&&(H(a.ka,f),H(a.ka,a.i),a.h.i.length=0,q(a.i),a.i.length=0),a.l.ra()}}function Oa(a,f,g){var x=g instanceof cr?en(g):new cr(g);if(x.g!="")f&&(x.g=f+"."+x.g),Fr(x,x.s);else{var M=m.location;x=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var z=new cr(null);x&&bi(z,x),f&&(z.g=f),M&&Fr(z,M),g&&(z.l=g),x=z}return g=a.D,f=a.ya,g&&f&&We(x,g,f),We(x,"VER",a.la),fr(a,x),x}function Da(a,f,g){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new et(new hr({eb:g})):new et(a.pa),f.Ha(a.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function rl(){}r=rl.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ht(a,f){ct.call(this),this.g=new tl(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!$(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!$(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new $r(this)}B(Ht,ct),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){kt(this.g)},Ht.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=Fo(a),a=g);f.i.push(new va(f.Ya++,a)),f.G==3&&$n(f)},Ht.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,Ht.aa.N.call(this)};function La(a){zn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const g in f){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}B(La,zn);function Ma(){ws.call(this),this.status=1}B(Ma,ws);function $r(a){this.g=a}B($r,rl),$r.prototype.ua=function(){ht(this.g,"a")},$r.prototype.ta=function(a){ht(this.g,new La(a))},$r.prototype.sa=function(a){ht(this.g,new Ma)},$r.prototype.ra=function(){ht(this.g,"b")},Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Go.NO_ERROR=0,Go.TIMEOUT=8,Go.HTTP_ERROR=6,Dc.COMPLETE="complete",zo.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",ct.prototype.listen=ct.prototype.K,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha}).apply(typeof Du<"u"?Du:typeof self<"u"?self:typeof window<"u"?window:{});const B_="@firebase/firestore",H_="4.8.0";/**
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
 */let Ut=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let da="11.10.0";/**
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
 */const Co=new wc("@firebase/firestore");function Mn(r,...e){if(Co.logLevel<=Ue.DEBUG){const t=e.map(ip);Co.debug(`Firestore (${da}): ${r}`,...t)}}function m0(r,...e){if(Co.logLevel<=Ue.ERROR){const t=e.map(ip);Co.error(`Firestore (${da}): ${r}`,...t)}}function oT(r,...e){if(Co.logLevel<=Ue.WARN){const t=e.map(ip);Co.warn(`Firestore (${da}): ${r}`,...t)}}function ip(r){if(typeof r=="string")return r;try{/**
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
 */function na(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,g0(r,s,t)}function g0(r,e,t){let s=`FIRESTORE (${da}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw m0(s),new Error(s)}function Bl(r,e,t,s){let l="Unexpected state";typeof t=="string"?l=t:s=t,r||g0(e,l,s)}/**
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
 */class Hl{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class _0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ut.UNAUTHENTICATED))}shutdown(){}}class aT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class uT{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Bl(this.o===void 0,42304);let s=this.i;const l=_=>this.i!==s?(s=this.i,t(_)):Promise.resolve();let u=new Hl;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Hl,e.enqueueRetryable(()=>l(this.currentUser))};const h=()=>{const _=u;e.enqueueRetryable(async()=>{await _.promise,await l(this.currentUser)})},m=_=>{Mn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(_=>m(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?m(_):(Mn("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Hl)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(Mn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Bl(typeof s.accessToken=="string",31837,{l:s}),new _0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Bl(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class cT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class hT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new cT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class W_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Bl(this.o===void 0,3512);const s=u=>{u.error!=null&&Mn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,Mn("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const l=u=>{Mn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>l(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?l(u):Mn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new W_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Bl(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new W_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fT(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function pT(){return new TextEncoder}/**
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
 */class mT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=fT(40);for(let u=0;u<l.length;++u)s.length<20&&l[u]<t&&(s+=e.charAt(l[u]%62))}return s}}function Fn(r,e){return r<e?-1:r>e?1:0}function gT(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),l=e.codePointAt(t);if(s!==l){if(s<128&&l<128)return Fn(s,l);{const u=pT(),h=_T(u.encode($_(r,t)),u.encode($_(e,t)));return h!==0?h:Fn(s,l)}}t+=s>65535?2:1}return Fn(r.length,e.length)}function $_(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function _T(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Fn(r[t],e[t]);return Fn(r.length,e.length)}/**
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
 */const G_="__name__";class Xn{constructor(e,t,s){t===void 0?t=0:t>e.length&&na(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&na(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Xn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let l=0;l<s;l++){const u=Xn.compareSegments(e.get(l),t.get(l));if(u!==0)return u}return Fn(e.length,t.length)}static compareSegments(e,t){const s=Xn.isNumericId(e),l=Xn.isNumericId(t);return s&&!l?-1:!s&&l?1:s&&l?Xn.extractNumericId(e).compare(Xn.extractNumericId(t)):gT(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rp.fromString(e.substring(4,e.length-2))}}class Pn extends Xn{construct(e,t,s){return new Pn(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Oe(Pe.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(l=>l.length>0))}return new Pn(t)}static emptyPath(){return new Pn([])}}const yT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yi extends Xn{construct(e,t,s){return new Yi(e,t,s)}static isValidIdentifier(e){return yT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yi.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===G_}static keyField(){return new Yi([G_])}static fromServerFormat(e){const t=[];let s="",l=0;const u=()=>{if(s.length===0)throw new Oe(Pe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;l<e.length;){const m=e[l];if(m==="\\"){if(l+1===e.length)throw new Oe(Pe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[l+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new Oe(Pe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=_,l+=2}else m==="`"?(h=!h,l++):m!=="."||h?(s+=m,l++):(u(),l++)}if(u(),h)throw new Oe(Pe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Yi(t)}static emptyPath(){return new Yi([])}}/**
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
 */class Ji{constructor(e){this.path=e}static fromPath(e){return new Ji(Pn.fromString(e))}static fromName(e){return new Ji(Pn.fromString(e).popFirst(5))}static empty(){return new Ji(Pn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pn.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Pn.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ji(new Pn(e.slice()))}}function vT(r,e,t,s){if(e===!0&&s===!0)throw new Oe(Pe.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function wT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function xT(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":na(12329,{type:typeof r})}function ET(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new Oe(Pe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xT(r);throw new Oe(Pe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function ut(r,e){const t={typeString:r};return e&&(t.value=e),t}function fa(r,e){if(!wT(r))throw new Oe(Pe.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const l=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(l&&typeof h!==l){t=`JSON field '${s}' must be a ${l}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new Oe(Pe.INVALID_ARGUMENT,t);return!0}/**
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
 */const q_=-62135596800,K_=1e6;class Jn{static now(){return Jn.fromMillis(Date.now())}static fromDate(e){return Jn.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*K_);return new Jn(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Oe(Pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Oe(Pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<q_)throw new Oe(Pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Oe(Pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/K_}_compareTo(e){return this.seconds===e.seconds?Fn(this.nanoseconds,e.nanoseconds):Fn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Jn._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fa(e,Jn._jsonSchema))return new Jn(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-q_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Jn._jsonSchemaVersion="firestore/timestamp/1.0",Jn._jsonSchema={type:ut("string",Jn._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};function ST(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class CT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class as{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(l){try{return atob(l)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new CT("Invalid base64 string: "+u):u}}(e);return new as(t)}static fromUint8Array(e){const t=function(l){let u="";for(let h=0;h<l.length;++h)u+=String.fromCharCode(l[h]);return u}(e);return new as(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let l=0;l<t.length;l++)s[l]=t.charCodeAt(l);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}as.EMPTY_BYTE_STRING=new as("");const Jd="(default)";class fc{constructor(e,t){this.projectId=e,this.database=t||Jd}static empty(){return new fc("","")}get isDefaultDatabase(){return this.database===Jd}isEqual(e){return e instanceof fc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class kT{constructor(e,t=null,s=[],l=[],u=null,h="F",m=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=l,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=_,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function IT(r){return new kT(r)}/**
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
 */var Y_,be;(be=Y_||(Y_={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new rp([4294967295,4294967295],0);/**
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
 */const TT=41943040;/**
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
 */const NT=1048576;function Id(){return typeof document<"u"?document:null}/**
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
 */class RT{constructor(e,t,s=1e3,l=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=l,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),l=Math.max(0,t-s);l>0&&Mn("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,l,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */class sp{constructor(e,t,s,l,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=l,this.removalCallback=u,this.deferred=new Hl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,l,u){const h=Date.now()+s,m=new sp(e,t,h,l,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Oe(Pe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Q_,X_;(X_=Q_||(Q_={})).Fa="default",X_.Cache="cache";/**
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
 */function AT(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const J_=new Map;/**
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
 */const y0="firestore.googleapis.com",Z_=!0;class ey{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Oe(Pe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=y0,this.ssl=Z_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Z_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=TT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<NT)throw new Oe(Pe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=AT((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new Oe(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new Oe(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new Oe(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,l){return s.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class v0{constructor(e,t,s,l){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ey({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Oe(Pe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Oe(Pe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ey(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new lT;switch(s.type){case"firstParty":return new hT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Oe(Pe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=J_.get(t);s&&(Mn("ComponentProvider","Removing Datastore"),J_.delete(t),s.terminate())}(this),Promise.resolve()}}function bT(r,e,t,s={}){var l;r=ET(r,v0);const u=us(e),h=r._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),_=`${e}:${t}`;u&&(of(`https://${_}`),lf("Firestore",!0)),h.host!==y0&&h.host!==_&&oT("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const w=Object.assign(Object.assign({},h),{host:_,ssl:u,emulatorOptions:s});if(!mi(w,m)&&(r._setSettings(w),s.mockUserToken)){let C,E;if(typeof s.mockUserToken=="string")C=s.mockUserToken,E=Ut.MOCK_USER;else{C=wy(s.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new Oe(Pe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Ut(S)}r._authCredentials=new aT(new _0(C,E))}}/**
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
 */class op{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new op(this.firestore,e,this._query)}}class Zn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zn(this.firestore,e,this._key)}toJSON(){return{type:Zn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(fa(t,Zn._jsonSchema))return new Zn(e,s||null,new Ji(Pn.fromString(t.referencePath)))}}Zn._jsonSchemaVersion="firestore/documentReference/1.0",Zn._jsonSchema={type:ut("string",Zn._jsonSchemaVersion),referencePath:ut("string")};class lp extends op{constructor(e,t,s){super(e,t,IT(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zn(this.firestore,null,new Ji(e))}withConverter(e){return new lp(this.firestore,e,this._path)}}/**
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
 */const ty="AsyncQueue";class ny{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new RT(this,"async_queue_retry"),this.oc=()=>{const s=Id();s&&Mn(ty,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Id();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Id();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Hl;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ST(e))throw e;Mn(ty,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,m0("INTERNAL UNHANDLED ERROR: ",ry(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const l=sp.createAndSchedule(this,e,t,s,u=>this.lc(u));return this.ec.push(l),l}ac(){this.tc&&na(47125,{hc:ry(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ry(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class PT extends v0{constructor(e,t,s,l){super(e,t,s,l),this.type="firestore",this._queue=new ny,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ny(e),this._firestoreClient=void 0,await e}}}function OT(r,e){const t=typeof r=="object"?r:hf(),s=typeof r=="string"?r:Jd,l=xc(t,"firestore").getImmediate({identifier:s});if(!l._initialized){const u=_y("firestore");u&&bT(l,...u)}return l}/**
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
 */class Sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sr(as.fromBase64String(e))}catch(t){throw new Oe(Pe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sr(as.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fa(e,Sr._jsonSchema))return Sr.fromBase64String(e.bytes)}}Sr._jsonSchemaVersion="firestore/bytes/1.0",Sr._jsonSchema={type:ut("string",Sr._jsonSchemaVersion),bytes:ut("string")};/**
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
 */class w0{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Oe(Pe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yi(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class es{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Oe(Pe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Oe(Pe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fn(this._lat,e._lat)||Fn(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:es._jsonSchemaVersion}}static fromJSON(e){if(fa(e,es._jsonSchema))return new es(e.latitude,e.longitude)}}es._jsonSchemaVersion="firestore/geoPoint/1.0",es._jsonSchema={type:ut("string",es._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
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
 */class ts{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,l){if(s.length!==l.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==l[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ts._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fa(e,ts._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ts(e.vectorValues);throw new Oe(Pe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ts._jsonSchemaVersion="firestore/vectorValue/1.0",ts._jsonSchema={type:ut("string",ts._jsonSchemaVersion),vectorValues:ut("object")};const DT=new RegExp("[~\\*/\\[\\]]");function LT(r,e,t){if(e.search(DT)>=0)throw iy(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new w0(...e.split("."))._internalPath}catch{throw iy(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function iy(r,e,t,s,l){let u=`Function ${e}() called with invalid data`;u+=". ";let h="";return new Oe(Pe.INVALID_ARGUMENT,u+r+h)}/**
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
 */class x0{constructor(e,t,s,l,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=l,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Zn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(E0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class MT extends x0{data(){return super.data()}}function E0(r,e){return typeof e=="string"?LT(r,e):e instanceof w0?e._internalPath:e._delegate._internalPath}class Lu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _o extends x0{constructor(e,t,s,l,u,h){super(e,t,s,l,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Hu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(E0("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Oe(Pe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_o._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_o._jsonSchemaVersion="firestore/documentSnapshot/1.0",_o._jsonSchema={type:ut("string",_o._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class Hu extends _o{data(e={}){return super.data(e)}}class Wl{constructor(e,t,s,l){this._firestore=e,this._userDataWriter=t,this._snapshot=l,this.metadata=new Lu(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Hu(this._firestore,this._userDataWriter,s.key,s,new Lu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Oe(Pe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(l,u){if(l._snapshot.oldDocs.isEmpty()){let h=0;return l._snapshot.docChanges.map(m=>{const _=new Hu(l._firestore,l._userDataWriter,m.doc.key,m.doc,new Lu(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);return m.doc,{type:"added",doc:_,oldIndex:-1,newIndex:h++}})}{let h=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const _=new Hu(l._firestore,l._userDataWriter,m.doc.key,m.doc,new Lu(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);let w=-1,C=-1;return m.type!==0&&(w=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),C=h.indexOf(m.doc.key)),{type:jT(m.type),doc:_,oldIndex:w,newIndex:C}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Oe(Pe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mT.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],l=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),l.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return na(61501,{type:r})}}Wl._jsonSchemaVersion="firestore/querySnapshot/1.0",Wl._jsonSchema={type:ut("string",Wl._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};(function(e,t=!0){(function(l){da=l})(cs),ns(new gi("firestore",(s,{instanceIdentifier:l,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new PT(new uT(s.getProvider("auth-internal")),new dT(h,s.getProvider("app-check-internal")),function(w,C){if(!Object.prototype.hasOwnProperty.apply(w.options,["projectId"]))throw new Oe(Pe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fc(w.options.projectId,C)}(h,l),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),er(B_,H_,e),er(B_,H_,"esm2017")})();const FT={apiKey:"AIzaSyCTA3NZsYoSeGskrIL_2isF2aCqLpEsRYc",authDomain:"rbgh-app.firebaseapp.com",databaseURL:"https://rbgh-app-default-rtdb.europe-west1.firebasedatabase.app",projectId:"rbgh-app",storageBucket:"rbgh-app.firebasestorage.app",messagingSenderId:"955092745966",appId:"1:955092745966:web:237adaa1a37752a93ebdff",measurementId:"G-004FZK6EXT"},ap=ky(FT),Td=zS(ap),Mu=rT(ap);OT(ap);const UT=Gw(r=>{const e=localStorage.getItem("user"),t=e?JSON.parse(e):null;return{user:t,isLoading:!1,error:null,isAuthenticated:!!t,login:async({emailOrUsername:s,password:l,rememberMe:u})=>{r({isLoading:!0,error:null});try{const m=(await NE(Td,s,l)).user,_={id:m.uid,email:m.email||"",username:m.displayName||"",name:m.displayName||""};u&&localStorage.setItem("user",JSON.stringify(_)),r({user:_,isAuthenticated:!0,isLoading:!1})}catch(h){r({error:h.message||"Login failed",isLoading:!1})}},logout:async()=>{await Td.signOut(),localStorage.removeItem("user"),r({user:null,isAuthenticated:!1,error:null})},forgotPassword:async s=>{r({isLoading:!0,error:null});try{await TE(Td,s),r({isLoading:!1})}catch(l){r({error:l.message||"Failed to send reset email",isLoading:!1})}},clearError:()=>r({error:null})}}),pa=()=>{const{user:r,isLoading:e,error:t,isAuthenticated:s,login:l,logout:u,forgotPassword:h,clearError:m}=UT();return{user:r,isLoading:e,error:t,isAuthenticated:s,login:l,logout:u,forgotPassword:h,clearError:m}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var VT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ze=(r,e)=>{const t=oe.forwardRef(({color:s="currentColor",size:l=24,strokeWidth:u=2,absoluteStrokeWidth:h,className:m="",children:_,...w},C)=>oe.createElement("svg",{ref:C,...VT,width:l,height:l,stroke:s,strokeWidth:h?Number(u)*24/Number(l):u,className:["lucide",`lucide-${zT(r)}`,m].join(" "),...w},[...e.map(([E,S])=>oe.createElement(E,S)),...Array.isArray(_)?_:[_]]));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=ze("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=ze("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=ze("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=ze("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=ze("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=ze("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=ze("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=ze("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=ze("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=ze("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=ze("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=ze("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=ze("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=ze("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=ze("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=ze("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=ze("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=ze("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=ze("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=ze("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=ze("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=ze("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=ze("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=ze("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=ze("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=ze("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=ze("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=ze("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=ze("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),n2=({size:r="md",className:e=""})=>{const t={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8"};return y.jsx(XT,{className:`animate-spin ${t[r]} ${e}`})},Ye=({variant:r="primary",size:e="md",loading:t=!1,children:s,className:l="",disabled:u,...h})=>{const m="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",_={primary:"bg-primary text-on-primary hover:bg-primary focus:ring-primary  shadow-md hover:shadow-lg",secondary:"bg-secondary text-on-secondary hover:bg-secondary focus:ring-secondary  shadow-md hover:shadow-lg",outline:"border border-default text-default hover:bg-subtle focus:ring-primary",ghost:"text-muted hover:text-default hover:bg-subtle focus:ring-default"},w={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"};return y.jsxs("button",{className:`${m} ${_[r]} ${w[e]} ${l}`,disabled:u||t,...h,children:[t&&y.jsx(n2,{size:"sm",className:"mr-2"}),s]})},_c=oe.forwardRef(({label:r,error:e,icon:t,className:s="",...l},u)=>y.jsxs("div",{className:"space-y-1",children:[r&&y.jsx("label",{className:"block text-sm font-medium text-default text-subtle",children:r}),y.jsxs("div",{className:"relative",children:[t&&y.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:y.jsx("div",{className:"text-muted ",children:t})}),y.jsx("input",{ref:u,className:`
              block w-full rounded-lg border border-default bg-bg bg-subtle px-3 py-2 text-default  placeholder-gray-500 
              focus:border-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500  focus:ring-offset-1 
              disabled:bg-gray-50  disabled:text-gray-500  transition-all duration-200
              ${t?"pl-10":""}
              ${e?"border-red-500  focus:border-red-500 focus:ring-red-500":""}
              ${s}
            `,...l})]}),e&&y.jsx("p",{className:"text-sm text-red-600  mt-1",children:e})]}));_c.displayName="Input";const cp=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),r2=r=>r.length>=3&&/^[a-zA-Z0-9_]+$/.test(r),i2=r=>r.length>=6,ly=r=>cp(r)?"email":"username",s2=({onForgotPassword:r})=>{const[e,t]=oe.useState({emailOrUsername:"",password:"",rememberMe:!1}),[s,l]=oe.useState({}),[u,h]=oe.useState(!1),[m,_]=oe.useState({}),{login:w,isLoading:C,error:E,clearError:S}=pa();oe.useEffect(()=>{if(E){const $=setTimeout(()=>{S()},5e3);return()=>clearTimeout($)}},[E,S]);const U=()=>{const $={};if(!e.emailOrUsername.trim())$.emailOrUsername="Email or username is required";else{const ae=ly(e.emailOrUsername);ae==="email"&&!cp(e.emailOrUsername)?$.emailOrUsername="Please enter a valid email address":ae==="username"&&!r2(e.emailOrUsername)&&($.emailOrUsername="Username must be at least 3 characters and contain only letters, numbers, and underscores")}return e.password?i2(e.password)||($.password="Password must be at least 6 characters"):$.password="Password is required",l($),Object.keys($).length===0},B=async $=>{$.preventDefault(),U()&&await w(e)},q=($,ae)=>{t(ce=>({...ce,[$]:ae})),m[$]&&l(ce=>({...ce,[$]:""}))},H=$=>{_(ae=>({...ae,[$]:!0})),U()},de=ly(e.emailOrUsername)==="email"?y.jsx(ef,{size:20}):y.jsx(t2,{size:20});return y.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center p-3 sm:p-4",children:y.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:y.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-default",children:y.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[y.jsxs("div",{className:"text-center mb-8",children:[y.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4",children:y.jsx(sy,{className:"w-8 h-8 text-on-primary"})}),y.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-default mb-2",children:"Welcome Back"}),y.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Sign in to your account to continue"})]}),E&&y.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-gradient-theme border border-error rounded-lg flex items-center space-x-2 text-error",children:[y.jsx(S0,{size:20}),y.jsx("span",{className:"text-sm font-medium flex-1",children:E})]}),y.jsxs("form",{onSubmit:B,className:"space-y-5 sm:space-y-6",children:[y.jsx(_c,{label:"Email or Username",type:"text",placeholder:"Enter your email or username",value:e.emailOrUsername,onChange:$=>q("emailOrUsername",$.target.value),onBlur:()=>H("emailOrUsername"),error:s.emailOrUsername,icon:de,disabled:C}),y.jsxs("div",{className:"relative",children:[y.jsx(_c,{label:"Password",type:u?"text":"password",placeholder:"Enter your password",value:e.password,onChange:$=>q("password",$.target.value),onBlur:()=>H("password"),error:s.password,icon:y.jsx(sy,{size:20}),disabled:C}),y.jsx("button",{type:"button",className:"absolute right-3 top-8 text-muted hover:text-subtle transition-colors",onClick:()=>h(!u),children:u?y.jsx(KT,{size:20}):y.jsx(up,{size:20})})]}),y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("label",{className:"flex items-center space-x-2",children:[y.jsx("input",{type:"checkbox",checked:e.rememberMe,onChange:$=>q("rememberMe",$.target.checked.toString()),className:"w-4 h-4 text-primary border-default rounded focus:ring-primary"}),y.jsx("span",{className:"text-sm text-subtle",children:"Remember me"})]}),y.jsx("button",{type:"button",onClick:r,className:"text-sm text-subtle hover:text-default font-medium transition-colors",children:"Forgot password?"})]}),y.jsxs(Ye,{type:"submit",loading:C,className:"w-full",size:"lg",children:["Sign In",!C&&y.jsx(BT,{className:"ml-2 w-5 h-5"})]})]})]})})})})},o2=({onBackToLogin:r})=>{const[e,t]=oe.useState(""),[s,l]=oe.useState(""),[u,h]=oe.useState(!1),[m,_]=oe.useState(!1),{forgotPassword:w,isLoading:C}=pa(),E=()=>e.trim()?cp(e)?(l(""),!0):(l("Please enter a valid email address"),!1):(l("Email is required"),!1),S=async q=>{q.preventDefault(),E()&&(await w(e),h(!0))},U=q=>{t(q),m&&l("")},B=()=>{_(!0),E()};return u?y.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center p-3 sm:p-4",children:y.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:y.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-default",children:y.jsxs("div",{className:"px-6 sm:px-8 py-8 sm:py-12 text-center",children:[y.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-2xl mb-6",children:y.jsx($T,{className:"w-8 h-8 text-success"})}),y.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default mb-4",children:"Check Your Email"}),y.jsxs("p",{className:"text-subtle mb-8 leading-relaxed text-sm sm:text-base",children:["We've sent a password reset link to"," ",y.jsx("span",{className:"font-medium text-default break-all",children:e}),". Please check your email and follow the instructions to reset your password."]}),y.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[y.jsxs(Ye,{onClick:r,variant:"primary",className:"w-full",size:"lg",children:[y.jsx(Zd,{className:"mr-2 w-5 h-5"}),"Back to Login"]}),y.jsx(Ye,{onClick:()=>h(!1),variant:"ghost",className:"w-full",children:"Didn't receive the email?"})]})]})})})}):y.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center p-3 sm:p-4",children:y.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:y.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-default",children:y.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[y.jsxs("div",{className:"text-center mb-8",children:[y.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4",children:y.jsx(ef,{className:"w-8 h-8 text-on-primary"})}),y.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-default mb-2",children:"Reset Password"}),y.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Enter your email address and we'll send you a link to reset your password"})]}),s&&y.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-gradient-theme border border-error rounded-lg flex items-center space-x-2 text-error",children:[y.jsx(S0,{size:20}),y.jsx("span",{className:"text-sm font-medium flex-1",children:s})]}),y.jsxs("form",{onSubmit:S,className:"space-y-5 sm:space-y-6",children:[y.jsx(_c,{label:"Email Address",type:"email",placeholder:"Enter your email address",value:e,onChange:q=>U(q.target.value),onBlur:B,error:s,icon:y.jsx(ef,{size:20}),disabled:C}),y.jsx(Ye,{type:"submit",loading:C,className:"w-full",size:"lg",children:"Send Reset Link"})]}),y.jsx("div",{className:"mt-5 sm:mt-6 text-center",children:y.jsxs("button",{type:"button",onClick:r,className:"inline-flex items-center text-sm text-subtle hover:text-default font-medium transition-colors",children:[y.jsx(Zd,{className:"mr-2 w-4 h-4"}),"Back to Login"]})})]})})})})},l2=({isOpen:r,onClose:e})=>{const t="https://linktr.ee/esports_pxl",s=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(t)}`;return r?y.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:y.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200",children:[y.jsxs("div",{className:"flex items-center justify-between mb-6",children:[y.jsx("h2",{className:"text-xl font-bold text-default",children:"QR Code"}),y.jsx("button",{onClick:e,className:"text-subtle hover:text-default transition-colors","aria-label":"Close modal",children:y.jsx(ra,{className:"w-6 h-6"})})]}),y.jsxs("div",{className:"text-center space-y-4",children:[y.jsxs("div",{className:"bg-bg p-4 rounded-xl border border-default shadow-sm hover:shadow-md inline-block",children:[y.jsx("img",{src:s,alt:"QR Code for esports_pxl",className:"w-64 h-64 mx-auto",onError:l=>{const u=l.target;u.style.display="none",u.nextElementSibling?.classList.remove("hidden")}}),y.jsx("div",{className:"hidden w-64 h-64 bg-subtle rounded-lg flex items-center justify-center",children:y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"text-4xl mb-2",children:"📱"}),y.jsx("p",{className:"text-sm text-subtle",children:"QR Code"})]})})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("p",{className:"text-sm text-subtle",children:"Scan to visit:"}),y.jsx("div",{className:"bg-gray-50 bg-subtle rounded-lg p-3",children:y.jsx("p",{className:"text-sm font-mono text-default  break-all",children:t})})]}),y.jsxs("div",{className:"flex space-x-3 pt-4",children:[y.jsx(Ye,{onClick:e,variant:"outline",className:"flex-1",children:"Close"}),y.jsxs(Ye,{onClick:()=>window.open(t,"_blank"),className:"flex-1",children:[y.jsx(qT,{className:"w-4 h-4 mr-2"}),"Visit"]})]})]}),y.jsx("div",{className:"mt-6 pt-4 border-t border-default shadow-sm hover:shadow-md ",children:y.jsx("p",{className:"text-xs text-gray-500  text-center",children:"Point your camera at the QR code to open the link"})})]})}):null},a2=({onAddStock:r,onShowLog:e,onTakeItem:t})=>{const[s,l]=oe.useState(!1),[u,h]=oe.useState(!1),[m,_]=oe.useState({x:20,y:20}),[w,C]=oe.useState({x:0,y:0}),E=oe.useRef(null),S=H=>{const de="touches"in H?H.touches[0].clientX:H.clientX,$="touches"in H?H.touches[0].clientY:H.clientY;h(!0),C({x:de-m.x,y:$-m.y})},U=H=>{if(!u)return;const de="touches"in H?H.touches[0].clientX:H.clientX,$="touches"in H?H.touches[0].clientY:H.clientY,ae=de-w.x,ce=$-w.y,ye=window.innerWidth-64,W=window.innerHeight-64;_({x:Math.max(0,Math.min(ae,ye)),y:Math.max(0,Math.min(ce,W))})},B=()=>{h(!1)};oe.useEffect(()=>{if(u)return document.addEventListener("mousemove",U),document.addEventListener("mouseup",B),document.addEventListener("touchmove",U),document.addEventListener("touchend",B),()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",B),document.removeEventListener("touchmove",U),document.removeEventListener("touchend",B)}},[u,w]),oe.useEffect(()=>{const H=de=>{E.current&&!E.current.contains(de.target)&&l(!1)};return document.addEventListener("mousedown",H),()=>document.removeEventListener("mousedown",H)},[]);const q=()=>{u||l(!s)};return y.jsx("div",{ref:E,className:"fixed z-50 select-none",style:{right:`${m.x}px`,bottom:`${m.y}px`},children:y.jsxs("div",{className:"relative",children:[s&&y.jsxs("div",{className:"absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-200",children:[y.jsx(Ye,{onClick:e,className:"w-12 h-12 rounded-full shadow-lg bg-purple-500 hover:bg-purple-600 text-on-primary p-0","aria-label":"Show log",children:y.jsx(up,{className:"w-6 h-6"})}),y.jsx(Ye,{onClick:r,className:"w-12 h-12 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-on-primary p-0","aria-label":"Add stock",children:y.jsx(Zi,{className:"w-6 h-6"})}),y.jsx(Ye,{onClick:t,className:"w-12 h-12 rounded-full shadow-lg bg-primary hover:bg-blue-600 text-on-primary p-0","aria-label":"Take item",children:y.jsx(ao,{className:"w-6 h-6"})})]}),y.jsx("button",{onMouseDown:S,onTouchStart:S,onClick:q,className:`w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-on-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-orange-500/30 ${u?"cursor-grabbing scale-110":"cursor-grab hover:scale-105"}`,"aria-label":s?"Close fridge menu":"Open fridge menu",children:y.jsx("div",{className:`transition-transform duration-200 ${s?"rotate-45":""}`,children:y.jsx(Zi,{className:"w-7 h-7"})})})]})})},u2=({onBack:r})=>{const[e,t]=oe.useState([{id:"1",name:"RedBull Energy Drink",stock:24,lastUpdated:new Date}]),[s,l]=oe.useState([{id:"1",action:"take",amount:2,user:"Alice Johnson",timestamp:new Date(Date.now()-30*60*1e3),itemName:"RedBull Energy Drink"},{id:"2",action:"add",amount:12,user:"Bob Smith",timestamp:new Date(Date.now()-2*60*60*1e3),itemName:"RedBull Energy Drink"},{id:"3",action:"take",amount:1,user:"Carol Davis",timestamp:new Date(Date.now()-4*60*60*1e3),itemName:"RedBull Energy Drink"}]),[u,h]=oe.useState(!1),[m,_]=oe.useState(!1),[w,C]=oe.useState(!1),[E,S]=oe.useState(1),[U,B]=oe.useState(1),q=$=>{const ce=Math.floor((new Date().getTime()-$.getTime())/(1e3*60));if(ce<1)return"Just now";if(ce<60)return`${ce}m ago`;const ye=Math.floor(ce/60);return ye<24?`${ye}h ago`:`${Math.floor(ye/24)}d ago`},H=()=>{const $=e[0].stock;if(E>$)return;const ae=$-E;t(ye=>ye.map(W=>W.id==="1"?{...W,stock:ae,lastUpdated:new Date}:W));const ce={id:Date.now().toString(),action:"take",amount:E,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};l(ye=>[ce,...ye]),h(!1),S(1)},de=()=>{const ae=e[0].stock+U;t(ye=>ye.map(W=>W.id==="1"?{...W,stock:ae,lastUpdated:new Date}:W));const ce={id:Date.now().toString(),action:"add",amount:U,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};l(ye=>[ce,...ye]),_(!1),B(1)};return y.jsxs("div",{className:"min-h-screen bg-subtle pb-20",children:[y.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:y.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:y.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:y.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[y.jsx(Ye,{onClick:r,variant:"ghost",size:"sm",children:y.jsx(Zd,{className:"w-5 h-5"})}),y.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center",children:y.jsx(k0,{className:"w-6 h-6 text-on-primary"})}),y.jsxs("div",{className:"min-w-0 flex-1",children:[y.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:"Fridge"}),y.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Stock management"})]})]})})})}),y.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[y.jsx("div",{className:"grid grid-cols-1 gap-4 mb-6",children:e.map($=>y.jsx("div",{className:"bg-bg rounded-xl p-6 border border-default shadow-sm",children:y.jsxs("div",{className:"flex items-center space-x-4",children:[y.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center",children:y.jsx(oy,{className:"w-8 h-8 text-on-primary"})}),y.jsxs("div",{className:"flex-1",children:[y.jsx("h3",{className:"text-lg font-semibold text-default  mb-1",children:$.name}),y.jsxs("div",{className:"flex items-center space-x-4 text-sm text-subtle",children:[y.jsxs("div",{className:"flex items-center space-x-1",children:[y.jsx(oy,{className:"w-4 h-4"}),y.jsxs("span",{children:[$.stock," in stock"]})]}),y.jsxs("div",{className:"flex items-center space-x-1",children:[y.jsx(pc,{className:"w-4 h-4"}),y.jsxs("span",{children:["Updated ",q($.lastUpdated)]})]})]})]}),y.jsxs("div",{className:"text-right",children:[y.jsx("div",{className:"text-2xl font-bold text-default ",children:$.stock}),y.jsx("div",{className:"text-sm text-gray-500 ",children:"units"})]})]})},$.id))}),y.jsxs("div",{className:"bg-bg rounded-xl border border-default",children:[y.jsx("div",{className:"p-4 border-b border-default",children:y.jsx("h2",{className:"text-lg font-semibold text-default ",children:"Recent Activity"})}),y.jsx("div",{className:"divide-y divide-gray-200 ",children:s.slice(0,5).map($=>y.jsx("div",{className:"p-4",children:y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${$.action==="take"?"bg-red-100 ":"bg-green-100 "}`,children:$.action==="take"?y.jsx(ao,{className:`w-4 h-4 ${$.action==="take"?"text-red-600 ":"text-green-600 "}`}):y.jsx(Zi,{className:"w-4 h-4 text-green-600 "})}),y.jsxs("div",{className:"flex-1",children:[y.jsxs("p",{className:"text-sm font-medium text-default ",children:[$.user," ",$.action==="take"?"took":"added"," ",$.amount," ",$.itemName]}),y.jsx("p",{className:"text-xs text-gray-500 ",children:q($.timestamp)})]}),y.jsxs("div",{className:`text-sm font-medium ${$.action==="take"?"text-red-600 ":"text-green-600 "}`,children:[$.action==="take"?"-":"+",$.amount]})]})},$.id))})]})]}),y.jsx(a2,{onTakeItem:()=>h(!0),onAddStock:()=>_(!0),onShowLog:()=>C(!0)}),u&&y.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:y.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[y.jsx("h2",{className:"text-xl font-bold text-default  mb-4",children:"Take from Stock"}),y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-2",children:"Amount to take"}),y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx(Ye,{onClick:()=>S(Math.max(1,E-1)),variant:"outline",size:"sm",children:y.jsx(ao,{className:"w-4 h-4"})}),y.jsx("span",{className:"text-lg font-semibold text-default  min-w-[3rem] text-center",children:E}),y.jsx(Ye,{onClick:()=>S(Math.min(e[0].stock,E+1)),variant:"outline",size:"sm",children:y.jsx(Zi,{className:"w-4 h-4"})})]}),y.jsxs("p",{className:"text-xs text-gray-500  mt-1",children:["Available: ",e[0].stock," units"]})]}),y.jsxs("div",{className:"flex space-x-3",children:[y.jsx(Ye,{onClick:()=>h(!1),variant:"outline",className:"flex-1",children:"Cancel"}),y.jsx(Ye,{onClick:H,className:"flex-1",children:"Take"})]})]})]})}),m&&y.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:y.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[y.jsx("h2",{className:"text-xl font-bold text-default  mb-4",children:"Add to Stock"}),y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-2",children:"Amount to add"}),y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx(Ye,{onClick:()=>B(Math.max(1,U-1)),variant:"outline",size:"sm",children:y.jsx(ao,{className:"w-4 h-4"})}),y.jsx("span",{className:"text-lg font-semibold text-default  min-w-[3rem] text-center",children:U}),y.jsx(Ye,{onClick:()=>B(U+1),variant:"outline",size:"sm",children:y.jsx(Zi,{className:"w-4 h-4"})})]})]}),y.jsxs("div",{className:"flex space-x-3",children:[y.jsx(Ye,{onClick:()=>_(!1),variant:"outline",className:"flex-1",children:"Cancel"}),y.jsx(Ye,{onClick:de,className:"flex-1",children:"Add"})]})]})]})}),w&&y.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:y.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-md shadow-2xl max-h-[80vh] overflow-hidden",children:[y.jsxs("div",{className:"flex items-center justify-between mb-4",children:[y.jsx("h2",{className:"text-xl font-bold text-default ",children:"Activity Log"}),y.jsx(Ye,{onClick:()=>C(!1),variant:"ghost",size:"sm",children:y.jsx(ra,{className:"w-5 h-5"})})]}),y.jsx("div",{className:"overflow-y-auto max-h-96 space-y-3",children:s.map($=>y.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-50 bg-subtle rounded-lg",children:[y.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${$.action==="take"?"bg-red-100 ":"bg-green-100 "}`,children:$.action==="take"?y.jsx(ao,{className:"w-4 h-4 text-red-600 "}):y.jsx(Zi,{className:"w-4 h-4 text-green-600 "})}),y.jsxs("div",{className:"flex-1",children:[y.jsx("p",{className:"text-sm font-medium text-default ",children:$.user}),y.jsxs("p",{className:"text-xs text-subtle",children:[$.action==="take"?"Took":"Added"," ",$.amount," units"]}),y.jsxs("p",{className:"text-xs text-gray-500 ",children:[$.timestamp.toLocaleDateString()," ",$.timestamp.toLocaleTimeString()]})]}),y.jsxs("div",{className:`text-sm font-medium ${$.action==="take"?"text-red-600 ":"text-green-600 "}`,children:[$.action==="take"?"-":"+",$.amount]})]},$.id))})]})})]})},c2=({user:r,onClose:e})=>{const t=oe.useRef(null);return oe.useEffect(()=>{const s=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[e]),y.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4",children:y.jsxs("div",{ref:t,className:"bg-bg rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg p-6 relative border border-default",children:[y.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-subtle hover:text-default",children:y.jsx(ra,{className:"w-5 h-5"})}),y.jsx("div",{className:"flex justify-center -mt-16",children:y.jsx("img",{src:r.avatar,alt:`${r.name}'s avatar`,onError:s=>{s.currentTarget.onerror=null,s.currentTarget.style.display="none";const l=s.currentTarget.parentElement;if(l&&!l.querySelector(".fallback-avatar")){const u=document.createElement("span");u.className="fallback-avatar flex items-center justify-center w-32 h-32 rounded-full bg-subtle border-4 border-bg shadow-lg",u.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146"/></svg>',l.appendChild(u)}},className:"w-32 h-32 rounded-full border-4 border-bg shadow-lg"})}),y.jsx("h2",{className:"text-xl font-bold text-default mt-4 text-center",children:r.name}),y.jsxs("div",{className:"space-y-2 mt-4",children:[y.jsxs("p",{className:"text-sm text-subtle",children:[y.jsx("strong",{children:"Username:"})," ",r.username]}),y.jsxs("p",{className:"text-sm text-subtle",children:[y.jsx("strong",{children:"Last Check-in:"})," ",r.location," at ",r.checkedInAt.toLocaleString()]}),y.jsxs("p",{className:"text-sm text-subtle",children:[y.jsx("strong",{children:"Email:"})," ",r.email||"N/A"]}),y.jsxs("p",{className:"text-sm text-subtle",children:[y.jsx("strong",{children:"Phone:"})," ",r.phoneNumber||"N/A"]}),y.jsxs("p",{className:"text-sm text-subtle",children:[y.jsx("strong",{children:"Discord:"})," ",r.discordUsername||"N/A"]}),y.jsxs("p",{className:"text-sm text-subtle",children:[y.jsx("strong",{children:"Friends:"})," ",r.friendCount||0]})]})]})})},h2=({onShowQR:r,onOpenFridge:e,onCheckIn:t,onCheckOut:s,isCheckedIn:l})=>{const[u,h]=oe.useState(!1),[m,_]=oe.useState(!1),[w,C]=oe.useState("PXL"),[E,S]=oe.useState(0),U=[{id:"PXL",name:"PXL",color:"bg-location-pxl"},{id:"RBGH",name:"RBGH",color:"bg-location-rbgh"},{id:"STREAM",name:"Streaming room",color:"bg-location-stream"}],B=()=>{const H=Array(E).fill("").map((de,$)=>`friend_${$+1}`);t(w,H),_(!1)},q=()=>{const H=Array(E).fill("").map((de,$)=>`friend_${$+1}`);t(w,H),_(!1)};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"fixed bottom-[5.5rem] right-4 z-50",children:y.jsxs("div",{className:"relative flex flex-col items-center",children:[y.jsxs("div",{className:`flex flex-col items-center space-y-3 absolute bottom-16 ${u?"opacity-100 translate-y-0":"opacity-0 pointer-events-none translate-y-2"} transition-all duration-300 ease-in-out`,children:[y.jsx("button",{onClick:()=>_(!0),className:"w-12 h-12 rounded-full flex items-center justify-center bg-primary text-on-primary shadow-md hover:scale-105 transition","aria-label":"More options",children:y.jsx(QT,{className:"w-5 h-5"})}),y.jsx("button",{onClick:e,className:"w-12 h-12 rounded-full flex items-center justify-center bg-primary text-on-primary shadow-md hover:scale-105 transition","aria-label":"Fridge",children:y.jsx(k0,{className:"w-5 h-5"})}),y.jsx("button",{onClick:r,className:"w-12 h-12 rounded-full flex items-center justify-center bg-primary text-on-primary shadow-md hover:scale-105 transition","aria-label":"QR Code",children:y.jsx(e2,{className:"w-5 h-5"})})]}),y.jsx("button",{onClick:()=>h(!u),className:"w-14 h-14 rounded-full flex items-center justify-center bg-primary text-on-primary shadow-xl hover:scale-105 transition-all duration-300","aria-label":"Toggle actions",children:u?y.jsx(ra,{className:"w-6 h-6"}):y.jsx(JT,{className:"w-6 h-6"})})]})}),m&&y.jsx("div",{onClick:()=>_(!1),className:"fixed inset-0 bg-black/50 z-40","aria-hidden":"true"}),y.jsx("div",{className:`fixed inset-0 z-50 bg-bg transform transition-transform duration-300 ${m?"translate-x-0":"-translate-x-full"}`,children:y.jsxs("div",{className:"p-6 space-y-6 h-full overflow-y-auto relative",children:[y.jsx("button",{onClick:()=>_(!1),className:"absolute top-4 right-4 z-50 bg-primary text-on-primary p-2 rounded-full shadow focus:outline-none focus:ring-4 focus:ring-primary","aria-label":"Close sidebar",children:y.jsx(ra,{className:"w-6 h-6"})}),y.jsx("h3",{className:"text-lg font-semibold text-default mt-6",children:l?"Change Location":"Check In"}),y.jsxs("div",{className:"mt-4",children:[y.jsx("label",{className:"block text-sm font-medium text-subtle mb-3",children:l?"Select a new location to change":"Choose Location"}),y.jsx("div",{className:"space-y-2",children:U.map(H=>y.jsxs("button",{onClick:()=>C(H.id),className:`w-full p-3 rounded-lg border-2 transition-all text-left flex items-center space-x-3
                    ${w===H.id?"bg-subtle border-secondary text-default":"border-default bg-subtle text-default shadow-sm hover:shadow-md hover:border-secondary"}`,children:[y.jsx("div",{className:`w-4 h-4 rounded-full ${H.color}`}),y.jsx("span",{className:"font-medium",children:H.name})]},H.id))})]}),y.jsxs("div",{className:"mt-6",children:[y.jsx("label",{className:"block text-sm font-medium text-subtle mb-3",children:l?"Update friend count":"Check in with friends"}),y.jsxs("div",{className:"flex items-center space-x-4",children:[y.jsx("button",{onClick:()=>S(H=>Math.max(H-1,0)),className:"w-10 h-10 bg-subtle flex items-center justify-center","aria-label":"Decrease friend count",children:y.jsx(ao,{className:"w-5 h-5 text-subtle"})}),y.jsxs("div",{className:"flex items-center space-x-2 min-w-0 flex-1",children:[y.jsx(gc,{className:"w-5 h-5 text-subtle"}),y.jsx("span",{className:"text-lg font-semibold text-default",children:E}),y.jsxs("span",{className:"text-sm text-subtle",children:["friend",E!==1?"s":""]})]}),y.jsx("button",{onClick:()=>S(H=>Math.min(H+1,10)),className:"w-10 h-10 bg-subtle flex items-center justify-center","aria-label":"Increase friend count",children:y.jsx(Zi,{className:"w-5 h-5 text-subtle"})})]})]}),l?y.jsx(Ye,{onClick:q,className:"w-full bg-primary hover:bg-secondary text-on-primary p-3 rounded-lg mt-6",children:"Update"}):y.jsx(Ye,{onClick:B,className:"w-full bg-secondary hover:bg-secondary text-on-primary p-3 rounded-lg mt-6",children:"Check In"}),l&&y.jsxs(Ye,{onClick:()=>{s(),_(!1)},className:"w-full bg-primary hover:bg-secondary text-on-primary p-3 rounded-lg mt-6",children:[y.jsx(mc,{className:"w-5 h-5 mr-2"}),"Check Out"]})]})})]})},ay="https://api.boelguard.me/",d2=({type:r,message:e})=>y.jsxs("div",{className:`fixed left-1/2 top-0 z-50 w-full max-w-xs sm:max-w-sm -translate-x-1/2 mt-6
      flex flex-col items-center px-4 py-3 rounded-2xl shadow-xl border
      transition-transform duration-300
      bg-gradient-theme border-${r==="success"?"success":"error"}
      animate-slideDown
    `,style:{transform:"translate(-50%, 0)"},children:[y.jsxs("div",{className:"flex items-center gap-3 w-full",children:[y.jsx("span",{className:`flex items-center justify-center w-8 h-8 rounded-full
        ${r==="success"?"bg-success":"bg-error"}
        text-on-primary text-lg`,children:r==="success"?"✓":"!"}),y.jsx("span",{className:"flex-1 text-sm font-medium text-subtle",children:e}),y.jsx("span",{className:"ml-2 flex items-center justify-center",children:y.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",children:[y.jsx("circle",{cx:"14",cy:"14",r:"12",fill:"none",stroke:r==="success"?"var(--color-success)":"var(--color-error)",strokeWidth:"4",style:{opacity:.3}}),y.jsx("circle",{cx:"14",cy:"14",r:"12",fill:"none",stroke:r==="success"?"var(--color-success)":"var(--color-error)",strokeWidth:"4",strokeDasharray:2*Math.PI*12,strokeDashoffset:2*Math.PI*12,transform:"rotate(-90 14 14)",style:{transition:"stroke-dashoffset 2s linear",strokeDashoffset:2*Math.PI*12,animation:"circle-timer 2s linear forwards"}})]})})]}),y.jsx("style",{children:`
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
      `})]}),f2="Left",p2="Right",m2="Up",g2="Down",uo={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},tf={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},uy="mousemove",cy="mouseup",_2="touchend",y2="touchmove",v2="touchstart";function w2(r,e,t,s){return r>e?t>0?p2:f2:s>0?g2:m2}function hy(r,e){if(e===0)return r;const t=Math.PI/180*e,s=r[0]*Math.cos(t)+r[1]*Math.sin(t),l=r[1]*Math.cos(t)-r[0]*Math.sin(t);return[s,l]}function x2(r,e){const t=C=>{const E="touches"in C;E&&C.touches.length>1||r((S,U)=>{U.trackMouse&&!E&&(document.addEventListener(uy,s),document.addEventListener(cy,h));const{clientX:B,clientY:q}=E?C.touches[0]:C,H=hy([B,q],U.rotationAngle);return U.onTouchStartOrOnMouseDown&&U.onTouchStartOrOnMouseDown({event:C}),Object.assign(Object.assign(Object.assign({},S),tf),{initial:H.slice(),xy:H,start:C.timeStamp||0})})},s=C=>{r((E,S)=>{const U="touches"in C;if(U&&C.touches.length>1)return E;if(C.timeStamp-E.start>S.swipeDuration)return E.swiping?Object.assign(Object.assign({},E),{swiping:!1}):E;const{clientX:B,clientY:q}=U?C.touches[0]:C,[H,de]=hy([B,q],S.rotationAngle),$=H-E.xy[0],ae=de-E.xy[1],ce=Math.abs($),ye=Math.abs(ae),W=(C.timeStamp||0)-E.start,R=Math.sqrt(ce*ce+ye*ye)/(W||1),k=[$/(W||1),ae/(W||1)],N=w2(ce,ye,$,ae),P=typeof S.delta=="number"?S.delta:S.delta[N.toLowerCase()]||uo.delta;if(ce<P&&ye<P&&!E.swiping)return E;const O={absX:ce,absY:ye,deltaX:$,deltaY:ae,dir:N,event:C,first:E.first,initial:E.initial,velocity:R,vxvy:k};O.first&&S.onSwipeStart&&S.onSwipeStart(O),S.onSwiping&&S.onSwiping(O);let A=!1;return(S.onSwiping||S.onSwiped||S[`onSwiped${N}`])&&(A=!0),A&&S.preventScrollOnSwipe&&S.trackTouch&&C.cancelable&&C.preventDefault(),Object.assign(Object.assign({},E),{first:!1,eventData:O,swiping:!0})})},l=C=>{r((E,S)=>{let U;if(E.swiping&&E.eventData){if(C.timeStamp-E.start<S.swipeDuration){U=Object.assign(Object.assign({},E.eventData),{event:C}),S.onSwiped&&S.onSwiped(U);const B=S[`onSwiped${U.dir}`];B&&B(U)}}else S.onTap&&S.onTap({event:C});return S.onTouchEndOrOnMouseUp&&S.onTouchEndOrOnMouseUp({event:C}),Object.assign(Object.assign(Object.assign({},E),tf),{eventData:U})})},u=()=>{document.removeEventListener(uy,s),document.removeEventListener(cy,h)},h=C=>{u(),l(C)},m=(C,E)=>{let S=()=>{};if(C&&C.addEventListener){const U=Object.assign(Object.assign({},uo.touchEventOptions),E.touchEventOptions),B=[[v2,t,U],[y2,s,Object.assign(Object.assign({},U),E.preventScrollOnSwipe?{passive:!1}:{})],[_2,l,U]];B.forEach(([q,H,de])=>C.addEventListener(q,H,de)),S=()=>B.forEach(([q,H])=>C.removeEventListener(q,H))}return S},w={ref:C=>{C!==null&&r((E,S)=>{if(E.el===C)return E;const U={};return E.el&&E.el!==C&&E.cleanUpTouch&&(E.cleanUpTouch(),U.cleanUpTouch=void 0),S.trackTouch&&C&&(U.cleanUpTouch=m(C,S)),Object.assign(Object.assign(Object.assign({},E),{el:C}),U)})}};return e.trackMouse&&(w.onMouseDown=t),[w,m]}function E2(r,e,t,s){return!e.trackTouch||!r.el?(r.cleanUpTouch&&r.cleanUpTouch(),Object.assign(Object.assign({},r),{cleanUpTouch:void 0})):r.cleanUpTouch?e.preventScrollOnSwipe!==t.preventScrollOnSwipe||e.touchEventOptions.passive!==t.touchEventOptions.passive?(r.cleanUpTouch(),Object.assign(Object.assign({},r),{cleanUpTouch:s(r.el,e)})):r:Object.assign(Object.assign({},r),{cleanUpTouch:s(r.el,e)})}function S2(r){const{trackMouse:e}=r,t=oe.useRef(Object.assign({},tf)),s=oe.useRef(Object.assign({},uo)),l=oe.useRef(Object.assign({},s.current));l.current=Object.assign({},s.current),s.current=Object.assign(Object.assign({},uo),r);let u;for(u in uo)s.current[u]===void 0&&(s.current[u]=uo[u]);const[h,m]=oe.useMemo(()=>x2(_=>t.current=_(t.current,s.current),{trackMouse:e}),[e]);return t.current=E2(t.current,s.current,l.current,m),h}function C2(r){return r.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")}const k2=({setActiveView:r})=>{const{user:e,logout:t}=pa(),[s,l]=oe.useState([]),[u,h]=oe.useState("ALL"),[m,_]=oe.useState(!1),[w,C]=oe.useState(!1),[E,S]=oe.useState(null),[U,B]=oe.useState(null),[q,H]=oe.useState(null),de=[{id:"RBGH",name:"Red Bull",color:"bg-location-rbgh"},{id:"PXL",name:"PXL",color:"bg-location-pxl"},{id:"STREAM",name:"Streaming room",color:"bg-location-stream"}];oe.useEffect(()=>{const A=localStorage.getItem("checkedInUsers");if(A)try{const xe=JSON.parse(A);l(xe.map(Le=>({...Le,checkedInAt:new Date(Le.checkedInAt)})))}catch{}const I=Ou(Mu,"users"),ve=YI(I,xe=>{const Le=xe.val();if(!Le){l([]),localStorage.setItem("checkedInUsers",JSON.stringify([]));return}const ke=Object.entries(Le).filter(([X,te])=>te.checkInStatus===!0).map(([X,te])=>({id:X,username:te.username,name:C2(`${te.firstname} ${te.lastname}`),location:te.checkedInWhere||"Unknown",checkedInAt:new Date(te.checkedInAt??Date.now()),isResponsible:te.isResponsible||!1,friendCount:te.friendCount||0,activeAssignment:te.activeAssignment||!1,discordUsername:te.discordUsername||"",email:te.email||"",phoneNumber:te.phoneNumber||"",avatar:`${ay}assets/headshot?name=${te.username}.jpg`}));ke.sort((X,te)=>X.isResponsible&&!te.isResponsible?-1:!X.isResponsible&&te.isResponsible?1:X.username.localeCompare(te.username)),l(ke),localStorage.setItem("checkedInUsers",JSON.stringify(ke.map(X=>({...X,checkedInAt:X.checkedInAt.toISOString()})))),ke.forEach(X=>{const te=new window.Image;te.src=X.avatar||`${ay}assets/headshot?name=${X.username}.jpg`})});return()=>ve()},[]);const $=async(A,I=[])=>{if(!e)return;const ve=Ou(Mu,`users/${e.id}`);try{await kd(ve,{checkInStatus:!0,checkedInWhere:A,checkedInAt:Date.now(),username:e.username,friendCount:I.length,activeAssignment:!1,isResponsible:!1}),B({type:"success",message:"Successfully checked in!"})}catch{B({type:"error",message:"Error checking in. Please try again."})}"Notification"in window&&(Notification.permission==="granted"?ae():Notification.permission!=="denied"&&Notification.requestPermission().then(xe=>{xe==="granted"&&ae()}))};function ae(){const A=new Date;function I(ve){const xe=L=>L.toString().padStart(2,"0"),Le=xe(ve.getDate()),ke=xe(ve.getMonth()+1),X=ve.getFullYear(),te=xe(ve.getHours()),ne=xe(ve.getMinutes());return`${Le}/${ke}/${X} - ${te}:${ne}`}new Notification("You are checked in",{body:`Checked in since: ${I(A)}`,icon:"/rbgh_logo.png"})}const ce=async()=>{if(!e)return;const A=Ou(Mu,`users/${e.id}`);try{await kd(A,{checkInStatus:!1}),B({type:"success",message:"Successfully checked out!"})}catch{B({type:"error",message:"Error checking out. Please try again."})}},ye=async A=>{const I=Ou(Mu,`users/${A}`);try{await kd(I,{checkInStatus:!1}),B({type:"success",message:"User checked out!"})}catch{B({type:"error",message:"Error checking out user."})}},W=s.filter(A=>u==="ALL"||A.location===u),R=A=>de.find(I=>I.id===A),k=A=>{const ve=Math.floor((new Date().getTime()-A.getTime())/(1e3*60));if(ve<1)return"Just now";if(ve<60)return`${ve}m ago`;const xe=Math.floor(ve/60);return xe<24?`${xe}h ago`:`${Math.floor(xe/24)}d ago`},N=s.find(A=>A.id===e?.id),P=A=>{S(A)},O=()=>{S(null)};return oe.useEffect(()=>{if(U){const A=setTimeout(()=>{B(null)},2e3);return()=>clearTimeout(A)}},[U]),w?y.jsx(u2,{onBack:()=>C(!1)}):y.jsxs("div",{className:"h-screen overflow-hidden bg-subtle flex-col",children:[U&&y.jsx(d2,{type:U.type,message:U.message}),y.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:y.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:y.jsxs("div",{className:"flex justify-between items-center py-3 sm:py-4",children:[y.jsx("div",{className:"flex items-center space-x-3 sm:space-x-4",children:y.jsxs("div",{className:"min-w-0 flex-1",children:[y.jsxs("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:["Welcome ",e?.username]}),y.jsxs("p",{className:"text-subtle text-sm sm:text-base truncate",children:[W.length," users checked in"]})]})}),y.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[y.jsx(Ye,{variant:"ghost",size:"sm",className:"hidden sm:flex",children:y.jsx(HT,{className:"w-5 h-5"})}),y.jsx(Ye,{onClick:()=>r&&r("settings"),variant:"ghost",size:"sm",className:"hidden sm:flex",children:y.jsx(I0,{className:"w-5 h-5"})}),y.jsxs(Ye,{onClick:t,variant:"outline",size:"sm",className:"hidden sm:flex",children:[y.jsx(mc,{className:"w-4 h-4 mr-2"}),y.jsx("span",{children:"Logout"})]}),y.jsx(Ye,{onClick:t,variant:"outline",size:"sm",className:"sm:hidden",children:y.jsx(mc,{className:"w-4 h-4"})})]})]})})}),E&&y.jsx(c2,{user:E,onClose:O}),y.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[N&&y.jsx("div",{className:"mb-6 bg-gradient-theme rounded-xl p-4 border border-default",children:y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx("div",{className:`w-3 h-3 rounded-full ${R(N.location)?.color}`}),y.jsxs("div",{className:"flex-1",children:[y.jsxs("p",{className:"text-sm font-medium text-default ",children:["You're checked in at ",R(N.location)?.name]}),y.jsxs("p",{className:"text-xs text-subtle",children:[k(N.checkedInAt),(N.friendCount??0)>0&&y.jsxs("span",{className:"ml-2",children:["• With ",N.friendCount," friend",(N.friendCount??0)>1?"s":""]})]})]})]})}),y.jsx("div",{className:"mb-6 space-y-4",children:y.jsxs("div",{className:"flex space-x-2 overflow-x-auto pb-2",children:[y.jsxs("button",{onClick:()=>h("ALL"),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center ${u==="ALL"?"bg-primary text-on-primary":"bg-gradient-theme text-default hover:bg-subtle"}`,children:["All Locations",y.jsx("span",{className:"ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold bg-subtle text-default",children:s.length})]}),de.map(A=>{const I=s.filter(xe=>xe.location===A.id).length,ve=u===A.id;return y.jsxs("button",{onClick:()=>h(A.id),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center ${ve?"bg-primary text-on-primary":"bg-gradient-theme text-default hover:bg-subtle"}`,children:[A.name,y.jsx("span",{className:"ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold bg-subtle text-default",children:I})]},A.id)})]})}),y.jsx("div",{className:"space-y-3 custom-scrollbar overflow-y-auto",style:{touchAction:"pan-y",maxHeight:"calc(100vh - 23.9rem)",...window.innerWidth<640?{maxHeight:"calc(100vh - 21.5rem)"}:{}},children:W.length===0?y.jsxs("div",{className:"text-center py-12",children:[y.jsx(C0,{className:"w-12 h-12 text-subtle mx-auto mb-4"}),y.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No users found"}),y.jsx("p",{className:"text-subtle",children:"No users are currently checked in"})]}):W.map(A=>{const I=R(A.location);return y.jsx(I2,{checkedUser:A,locationInfo:I,showCheckoutUserId:q,setShowCheckoutUserId:H,handleUserClick:P,handleCheckOutUser:ye,user:e,formatTimeAgo:k},A.id)})})]}),y.jsx(h2,{onCheckIn:$,onCheckOut:ce,onShowQR:()=>_(!0),onOpenFridge:()=>C(!0),isCheckedIn:!!N}),y.jsx(l2,{isOpen:m,onClose:()=>_(!1)})]})},I2=({checkedUser:r,locationInfo:e,showCheckoutUserId:t,setShowCheckoutUserId:s,handleUserClick:l,handleCheckOutUser:u,user:h,formatTimeAgo:m})=>{const _=S2({onSwipedLeft:()=>{console.log("Swiped left!",r.id),s(r.id)},onSwipedRight:()=>{console.log("Swiped right!",r.id),s(null)},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return y.jsxs("div",{className:"relative",style:{touchAction:"pan-y"},children:[y.jsx("div",{className:`absolute inset-0 flex items-center justify-end pr-4 rounded-xl border border-default z-0 transition-colors duration-300 ${t===r.id?"bg-danger/10":"bg-bg"}`,style:{width:"100%",height:"100%",margin:0,pointerEvents:t===r.id?"auto":"none"},children:y.jsx("button",{onClick:w=>{w.stopPropagation(),u(r.id),s(null)},className:`flex items-center justify-center rounded-full shadow-lg transition-all duration-300 bg-bg ${t===r.id?"scale-105":"scale-95"}`,style:{width:"56px",height:"56px",opacity:t===r.id?1:.7,boxShadow:t===r.id?"0 4px 16px rgba(255,71,87,0.15)":"0 2px 8px rgba(0,0,0,0.06)"},"aria-label":"Check Out",children:y.jsx(mc,{className:`w-8 h-8 transition-colors duration-300 ${t===r.id,"text-default"}`})})}),y.jsx("div",{..._,className:"bg-bg rounded-xl p-4 border border-default hover:shadow-md transition-transform duration-300 cursor-pointer z-10",style:{touchAction:"pan-y",userSelect:"none",position:"relative",transform:t===r.id?"translateX(-90px) scale(0.98)":"translateX(0) scale(1)",boxShadow:t===r.id?"0 4px 24px rgba(255,0,0,0.08)":void 0,transition:"transform 0.3s cubic-bezier(.4,2,.3,1), box-shadow 0.3s"},onClick:()=>l(r),children:y.jsxs("div",{className:"flex items-center space-x-4",children:[y.jsx("div",{className:"flex-shrink-0",children:y.jsx("img",{src:r.avatar,alt:`${r.name}'s avatar`,onError:w=>{w.currentTarget.onerror=null,w.currentTarget.style.display="none";const C=w.currentTarget.parentElement;if(C&&!C.querySelector(".fallback-avatar")){const E=document.createElement("span");E.className="fallback-avatar flex items-center justify-center w-12 h-12 rounded-full bg-subtle bg-subtle",E.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-muted " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',C.appendChild(E)}},className:"w-12 h-12 rounded-full"})}),y.jsxs("div",{className:"flex-1 min-w-0",children:[y.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[y.jsx("h3",{className:"font-semibold text-default truncate",children:r.name}),r.id===h?.id&&y.jsx("span",{className:"px-2 py-1 bg-primary text-on-primary text-xs rounded-full",children:"You"})]}),y.jsxs("p",{className:"text-sm text-subtle mb-2",children:["@",r.username]}),y.jsxs("div",{className:"flex items-center space-x-4 text-sm",children:[y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx("div",{className:`w-2 h-2 rounded-full ${e?.color}`}),y.jsx("span",{className:"text-subtle",children:e?.name})]}),y.jsxs("div",{className:"flex items-center space-x-1 text-subtle",children:[y.jsx(pc,{className:"w-4 h-4"}),y.jsx("span",{children:m(r.checkedInAt)})]})]}),(r.friendCount??0)>0&&y.jsxs("div",{className:"flex items-center space-x-1 mt-2 text-sm text-gray-500",children:[y.jsx(gc,{className:"w-4 h-4"}),y.jsxs("span",{children:["With ",r.friendCount," friend",(r.friendCount??0)>1?"s":""]})]})]})]})})]})},T2=[{id:"1",title:"Clean up streaming room",responsibles:["john","jane"],time:"16:00",date:new Date,location:"STREAM",visitors:5,remarks:"Don't forget the cables!",completed:!1},{id:"2",title:"Opening Hub",responsibles:[],time:"11:00",date:new Date(Date.now()+864e5),location:"RBGH",completed:!0},{id:"3",title:"Check projector",responsibles:["jane"],time:"10:00",date:new Date(Date.now()-864e5*2),location:"PXL",completed:!1},{id:"4",title:"Opening Hub",responsibles:["john"],time:"09:00",date:new Date(Date.now()+864e5),location:"RBGH",visitors:2,completed:!0},{id:"5",title:"Inspect streaming gear",responsibles:["jane"],time:"14:30",date:new Date(Date.now()-864e5*3),location:"STREAM",remarks:"Replace any broken cables.",completed:!0},{id:"6",title:"Organize chairs",responsibles:["john","alice"],time:"12:00",date:new Date(Date.now()-864e5*1),location:"RBGH",visitors:8,completed:!1},{id:"7",title:"Test HDMI switch",responsibles:[],time:"15:15",date:new Date(Date.now()-864e5*5),location:"PXL",completed:!1},{id:"8",title:"Set up sound system",responsibles:["jane"],time:"10:00",date:new Date(Date.now()+864e5*2),location:"STREAM",remarks:"Test all mics.",completed:!1},{id:"9",title:"Briefing volunteers",responsibles:["john","emma"],time:"13:00",date:new Date(Date.now()+864e5*3),location:"RBGH",completed:!1},{id:"10",title:"Network check",responsibles:[],time:"17:00",date:new Date(Date.now()+864e5*5),location:"PXL",visitors:3,completed:!1},{id:"11",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()+864e5*1),location:"RBGH",completed:!1},{id:"12",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()+864e5*2),location:"RBGH",completed:!1},{id:"13",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()+864e5*3),location:"RBGH",completed:!1},{id:"14",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()+864e5*4),location:"RBGH",completed:!1},{id:"15",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()+864e5*5),location:"RBGH",completed:!1},{id:"16",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()-864e5*1),location:"RBGH",completed:!0},{id:"17",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()-864e5*2),location:"RBGH",completed:!0},{id:"18",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()-864e5*3),location:"RBGH",completed:!0},{id:"19",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()-864e5*4),location:"RBGH",completed:!0},{id:"20",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()-864e5*5),location:"RBGH",completed:!0},{id:"21",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()+864e5*6),location:"RBGH",completed:!1},{id:"22",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()+864e5*7),location:"RBGH",completed:!1},{id:"23",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()-864e5*6),location:"RBGH",completed:!0},{id:"24",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()-864e5*7),location:"RBGH",completed:!0},{id:"25",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()-864e5*8),location:"RBGH",completed:!0}],N2=[{id:1,label:"Mon"},{id:2,label:"Tue"},{id:3,label:"Wed"},{id:4,label:"Thu"},{id:5,label:"Fri"},{id:6,label:"Sat"},{id:0,label:"Sun"}],R2=()=>{const[r,e]=oe.useState("all"),[t,s]=oe.useState(new Date),[l,u]=oe.useState(null),[h,m]=oe.useState([]),{user:_}=pa(),w=T2,[C,E]=oe.useState(null),S=W=>{E(R=>R===W?null:W)},U=oe.useRef(null);oe.useEffect(()=>{U.current&&U.current.scrollIntoView({behavior:"auto",block:"start"})},[]);const B={PXL:{name:"PXL",color:"bg-location-pxl"},RBGH:{name:"Red Bull",color:"bg-location-rbgh"},STREAM:{name:"STREAM",color:"bg-location-stream"}},q=w,H=w.filter(W=>!W.completed&&W.responsibles.some(R=>_&&(R===_.name||R===_.username))),de=w.filter(W=>W.completed&&W.responsibles.some(R=>_&&(R===_.name||R===_.username))),$=W=>{const R=new Date,k=new Date(R);R.setHours(0,0,0,0),k.setDate(R.getDate()+1),k.setHours(0,0,0,0);const N=new Date(W);return N.setHours(0,0,0,0),N.getTime()===R.getTime()?"Today":N.getTime()===k.getTime()?"Tomorrow":N.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})},ae=W=>{const R=new Date;R.setHours(0,0,0,0);const k=new Date(W);return k.setHours(0,0,0,0),k<R},ce=({assignment:W,expanded:R,onToggle:k})=>{const N=B[W.location]||{name:W.location||"Unknown",color:"bg-gray-400"},P=W.date>new Date,O=_&&W.responsibles.includes(_.name||_.username);return y.jsxs("div",{className:"bg-bg rounded-lg p-3 sm:p-4 border border-default shadow-sm hover:shadow-md  hover:shadow transition-shadow cursor-pointer",onClick:k,children:[y.jsxs("div",{className:"flex justify-between items-start",children:[y.jsxs("div",{className:"flex flex-col space-y-1",children:[y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx("div",{className:`w-3.5 h-3.5 rounded-full ${N.color}`}),y.jsx("h3",{className:"font-medium text-sm sm:text-base text-default  truncate",children:W.title})]}),!R&&y.jsxs("div",{className:"flex items-center text-xs sm:text-sm text-gray-500  space-x-4 pl-5",children:[y.jsxs("span",{className:"flex items-center space-x-1",children:[y.jsx(pc,{className:"w-3.5 h-3.5"}),y.jsx("span",{children:W.time})]}),y.jsxs("span",{className:"flex items-center space-x-1",children:[y.jsx(gc,{className:"w-3.5 h-3.5"}),y.jsx("span",{children:W.responsibles.length===0?"No Responsible":W.responsibles.length===1?W.responsibles[0]:`${W.responsibles[0]} +${W.responsibles.length-1}`})]})]})]}),!W.completed&&ae(W.date)&&y.jsx("span",{className:"ml-2 px-2 py-0.5 border border-warning text-warning text-xs rounded-full bg-transparent",children:"Overdue"})]}),R&&y.jsxs("div",{className:"mt-3 space-y-2 text-sm text-subtle",children:[y.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx(WT,{className:"w-4 h-4"}),y.jsx("span",{children:$(W.date)})]}),y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx(pc,{className:"w-4 h-4"}),y.jsx("span",{children:W.time})]}),y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx(C0,{className:"w-4 h-4"}),y.jsx("span",{children:N.name})]}),y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx(gc,{className:"w-4 h-4"}),y.jsx("span",{children:W.responsibles.length===0?"No Responsible":W.responsibles.length===1?W.responsibles[0]:`${W.responsibles[0]} +${W.responsibles.length-1}`})]})]}),W.visitors!==void 0&&y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx(up,{className:"w-4 h-4 text-muted"}),y.jsxs("span",{children:[W.visitors," visitors"]})]}),W.remarks&&y.jsxs("div",{className:"flex items-start space-x-2",children:[y.jsx(ZT,{className:"w-4 h-4 text-muted mt-0.5"}),y.jsx("p",{className:"leading-relaxed",children:W.remarks})]}),P&&!O&&y.jsx("div",{className:"pt-2",children:y.jsx("button",{onClick:A=>{A.stopPropagation(),alert("Signed up (mock)")},className:"px-3 py-1 bg-primary text-on-primary rounded hover:bg-secondary text-sm",children:"Sign Up"})})]})]})};l&&q.filter(W=>W.date.getFullYear()===l.getFullYear()&&W.date.getMonth()===l.getMonth()&&W.date.getDate()===l.getDate());const ye=W=>{m(R=>R.includes(W)?R.filter(k=>k!==W):[...R,W])};return h.length===0||q.filter(W=>h.includes(W.date.getDay())),y.jsxs("div",{className:"min-h-screen bg-subtle pb-20",children:[y.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:y.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:y.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:y.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[y.jsx("div",{className:"w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center",children:y.jsx(ju,{className:"w-6 h-6 text-on-primary"})}),y.jsxs("div",{className:"min-w-0 flex-1",children:[y.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:"Assignments"}),y.jsx("p",{className:"text-subtle text-sm sm:text-base",children:r==="todo"?`${H.length} pending`:`${de.length} completed`})]})]})})})}),y.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[y.jsx("div",{className:"flex space-x-1 mb-6 bg-gradient-theme rounded-lg p-1",children:["all","todo","finished"].map(W=>y.jsx("button",{onClick:()=>e(W),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${r===W?"bg-bg text-default shadow-sm":"text-subtle hover:text-default"}`,children:W==="all"?`All (${q.length})`:W==="todo"?`To Do (${H.length})`:`Finished (${de.length})`},W))}),y.jsx("div",{className:"flex space-x-2 overflow-x-auto pb-2 mb-4",children:N2.map(W=>y.jsx("button",{onClick:()=>ye(W.id),className:`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center ${h.includes(W.id)?"bg-primary text-on-primary":"bg-gradient-theme text-default hover:bg-subtle"}`,children:W.label},W.id))}),y.jsx("div",{className:"space-y-4 custom-scrollbar overflow-y-auto",style:{maxHeight:"calc(100vh - 22.9rem)",...window.innerWidth<640?{maxHeight:"calc(100vh - 20.5rem)"}:{}},children:r==="all"&&q.length>0?(()=>{const W=q.reduce((O,A)=>{const I=A.date.toDateString();return O[I]||(O[I]=[]),O[I].push(A),O},{}),R=Object.entries(W).sort(([O],[A])=>new Date(O).getTime()-new Date(A).getTime()),k=new Date;k.setHours(0,0,0,0);const N=[],P=[];return R.forEach(([O,A])=>{const I=new Date(O),ve=I<k,xe=y.jsxs("div",{ref:ve?void 0:P.length===0?U:void 0,children:[y.jsx("h2",{className:"text-sm text-subtle font-medium uppercase mb-2 mt-6 pl-1",children:$(I)}),y.jsx("div",{className:"space-y-2",children:A.sort((Le,ke)=>Le.time.localeCompare(ke.time)).map(Le=>y.jsx(ce,{assignment:Le,expanded:C===Le.id,onToggle:()=>S(Le.id)},Le.id))})]},O);ve?N.push(xe):P.push(xe)}),y.jsxs(y.Fragment,{children:[N,P]})})():r==="all"?y.jsxs("div",{className:"text-center py-12",children:[y.jsx(ju,{className:"w-12 h-12 text-muted mx-auto mb-4"}),y.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No assignments"}),y.jsx("p",{className:"text-subtle",children:"No assignments found."})]}):r==="todo"?H.length===0?y.jsxs("div",{className:"text-center py-12",children:[y.jsx(ju,{className:"w-12 h-12 text-muted mx-auto mb-4"}),y.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No pending assignments"}),y.jsx("p",{className:"text-subtle",children:"All assignments are completed. Great job!"})]}):H.sort((W,R)=>W.date.getTime()-R.date.getTime()).map(W=>y.jsx(ce,{assignment:W,expanded:C===W.id,onToggle:()=>S(W.id)},W.id)):de.length===0?y.jsxs("div",{className:"text-center py-12",children:[y.jsx(ju,{className:"w-12 h-12 text-muted mx-auto mb-4"}),y.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No completed assignments"}),y.jsx("p",{className:"text-subtle",children:"Completed assignments will appear here."})]}):de.sort((W,R)=>R.date.getTime()-W.date.getTime()).map(W=>y.jsx(ce,{assignment:W,expanded:C===W.id,onToggle:()=>S(W.id)},W.id))})]})]})};function T0(r){document.documentElement.setAttribute("data-theme",r),document.documentElement.classList.remove("light","dark","neon","dark-mint"),r==="dark"&&document.documentElement.classList.add("dark"),localStorage.setItem("theme",r)}function N0(){const r=localStorage.getItem("theme");return r==="light"||r==="dark"||r==="neon"||r==="dark-mint"?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const Dl=["light","dark","neon","dark-mint"],A2={light:"Light",dark:"Dark",neon:"Neon","dark-mint":"Dark Mint"},R0=()=>{const[r,e]=oe.useState(N0());return oe.useEffect(()=>{T0(r)},[r]),y.jsxs("div",{className:"min-h-screen bg-bg text-text p-8",children:[y.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Theme Preferences"}),y.jsx("div",{className:"space-y-4",children:Dl.map(t=>y.jsxs("label",{className:"flex items-center space-x-3",children:[y.jsx("input",{type:"radio",name:"theme",value:t,checked:r===t,onChange:()=>e(t),className:"w-4 h-4 accent-[var(--color-text)]"}),y.jsx("span",{className:"text-text",children:A2[t]})]},t))})]})},b2="1.0.0",P2=({onSignOut:r})=>{const[e,t]=oe.useState("main"),s=()=>t("main");return y.jsxs("div",{className:"min-h-screen bg-bg text-default p-8",children:[e==="main"&&y.jsxs("div",{className:"max-w-md mx-auto space-y-6",children:[y.jsx("h1",{className:"text-2xl font-bold mb-6 text-default",children:"Settings"}),y.jsxs("div",{className:"space-y-3",children:[y.jsx("button",{className:"w-full text-left px-4 py-3 rounded bg-subtle hover:bg-primary hover:text-on-primary transition",onClick:()=>t("profile"),children:"Profile"}),y.jsx("button",{className:"w-full text-left px-4 py-3 rounded bg-subtle hover:bg-primary hover:text-on-primary transition",onClick:()=>t("preferences"),children:"Preferences"}),y.jsx("button",{className:"w-full text-left px-4 py-3 rounded bg-subtle hover:bg-primary hover:text-on-primary transition",onClick:()=>t("blacklist"),children:"Black list"}),y.jsx("button",{className:"w-full text-left px-4 py-3 rounded bg-subtle hover:bg-primary hover:text-on-primary transition",onClick:()=>t("userlist"),children:"User list"}),y.jsx("button",{className:"w-full text-left px-4 py-3 rounded bg-subtle hover:bg-primary hover:text-on-primary transition",onClick:()=>t("bugreport"),children:"Bug report"}),y.jsxs("div",{className:"w-full px-4 py-3 rounded bg-subtle flex justify-between items-center",children:[y.jsx("span",{children:"App version"}),y.jsx("span",{className:"font-mono text-sm",children:b2})]})]}),y.jsx("button",{className:"w-full mt-8 px-4 py-3 rounded bg-error text-on-primary font-bold hover:bg-primary transition",onClick:r,children:"Sign out"})]}),e==="preferences"&&y.jsxs("div",{children:[y.jsx("button",{className:"mb-4 text-primary underline",onClick:s,children:"← Back"}),y.jsx(R0,{})]}),e==="profile"&&y.jsxs("div",{children:[y.jsx("button",{className:"mb-4 text-primary underline",onClick:s,children:"← Back"}),y.jsx("h2",{className:"text-xl font-bold mb-4",children:"Profile"}),y.jsx("div",{className:"bg-subtle rounded p-4",children:"Profile component goes here."})]}),e==="blacklist"&&y.jsxs("div",{children:[y.jsx("button",{className:"mb-4 text-primary underline",onClick:s,children:"← Back"}),y.jsx("h2",{className:"text-xl font-bold mb-4",children:"Black list"}),y.jsx("div",{className:"bg-subtle rounded p-4",children:"Blacklist component goes here."})]}),e==="userlist"&&y.jsxs("div",{children:[y.jsx("button",{className:"mb-4 text-primary underline",onClick:s,children:"← Back"}),y.jsx("h2",{className:"text-xl font-bold mb-4",children:"User list"}),y.jsx("div",{className:"bg-subtle rounded p-4",children:"User list component goes here."})]}),e==="bugreport"&&y.jsxs("div",{children:[y.jsx("button",{className:"mb-4 text-primary underline",onClick:s,children:"← Back"}),y.jsx("h2",{className:"text-xl font-bold mb-4",children:"Bug report"}),y.jsx("div",{className:"bg-subtle rounded p-4",children:"Bug report component goes here."})]})]})},O2=({activeView:r,onViewChange:e})=>{const t=[{id:"home",label:"Home",icon:YT},{id:"assignments",label:"Assignments",icon:GT},{id:"preferences",label:"Settings",icon:I0}];return y.jsx("nav",{className:"fixed bottom-4 left-0 right-0 z-50 px-4",children:y.jsx("div",{className:"max-w-7xl mx-auto nav-glass px-1 py-2 rounded-full",children:y.jsx("div",{className:"flex justify-between items-center w-full",children:t.map(s=>{const l=s.icon,u=r===s.id;return y.jsxs("button",{onClick:()=>e(s.id),className:`group flex items-center justify-center h-10 rounded-full transition-colors duration-200 mx-1 px-3 ${u?"nav-item-active shadow-md":"text-subtle hover:text-default hover:bg-subtle/40"}`,"aria-label":s.label,children:[y.jsx(l,{className:"w-5 h-5 text-inherit"}),y.jsx("span",{className:`ml-2 text-[13px] font-medium text-inherit overflow-hidden transition-[max-width,opacity] duration-300 ease-in-out ${u?"opacity-100 max-w-[100px]":"opacity-0 max-w-0"}`,children:s.label})]},s.id)})})})})};function D2(){const{isAuthenticated:r}=pa(),[e,t]=oe.useState("login"),[s,l]=oe.useState("home");if(r)return y.jsxs(y.Fragment,{children:[s==="home"&&y.jsx(k2,{setActiveView:l}),s==="assignments"&&y.jsx(R2,{}),s==="preferences"&&y.jsx(R0,{}),s==="settings"&&y.jsx(P2,{}),y.jsx(O2,{activeView:s,onViewChange:l})]});switch(e){case"forgot-password":return y.jsx(o2,{onBackToLogin:()=>t("login")});case"login":default:return y.jsx(s2,{onForgotPassword:()=>t("forgot-password")})}}const L2=oe.createContext(void 0),M2=({children:r})=>{const[e,t]=oe.useState(N0);oe.useEffect(()=>{T0(e)},[e]);const s=()=>{const u=Dl.indexOf(e),h=Dl[(u+1)%Dl.length];t(h)},l=u=>t(u);return y.jsx(L2.Provider,{value:{theme:e,setTheme:l,toggleTheme:s,availableThemes:Dl},children:r})};Bw.createRoot(document.getElementById("root")).render(y.jsx(oe.StrictMode,{children:y.jsx(M2,{children:y.jsx(D2,{})})}));

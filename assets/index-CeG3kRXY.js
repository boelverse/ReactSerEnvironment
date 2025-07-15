(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function f0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Hc={exports:{}},ls={},Vc={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function p0(){if(Rp)return oe;Rp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function w(C){return C===null||typeof C!="object"?null:(C=v&&C[v]||C["@@iterator"],typeof C=="function"?C:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function O(C,A,se){this.props=C,this.context=A,this.refs=M,this.updater=se||T}O.prototype.isReactComponent={},O.prototype.setState=function(C,A){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,A,"setState")},O.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function te(){}te.prototype=O.prototype;function R(C,A,se){this.props=C,this.context=A,this.refs=M,this.updater=se||T}var G=R.prototype=new te;G.constructor=R,b(G,O.prototype),G.isPureReactComponent=!0;var K=Array.isArray,re=Object.prototype.hasOwnProperty,ie={current:null},Ce={key:!0,ref:!0,__self:!0,__source:!0};function he(C,A,se){var ce,fe={},pe=null,Se=null;if(A!=null)for(ce in A.ref!==void 0&&(Se=A.ref),A.key!==void 0&&(pe=""+A.key),A)re.call(A,ce)&&!Ce.hasOwnProperty(ce)&&(fe[ce]=A[ce]);var ve=arguments.length-2;if(ve===1)fe.children=se;else if(1<ve){for(var Pe=Array(ve),kt=0;kt<ve;kt++)Pe[kt]=arguments[kt+2];fe.children=Pe}if(C&&C.defaultProps)for(ce in ve=C.defaultProps,ve)fe[ce]===void 0&&(fe[ce]=ve[ce]);return{$$typeof:i,type:C,key:pe,ref:Se,props:fe,_owner:ie.current}}function at(C,A){return{$$typeof:i,type:C.type,key:A,ref:C.ref,props:C.props,_owner:C._owner}}function ne(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function xe(C){var A={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(se){return A[se]})}var De=/\/+/g;function Xe(C,A){return typeof C=="object"&&C!==null&&C.key!=null?xe(""+C.key):A.toString(36)}function lt(C,A,se,ce,fe){var pe=typeof C;(pe==="undefined"||pe==="boolean")&&(C=null);var Se=!1;if(C===null)Se=!0;else switch(pe){case"string":case"number":Se=!0;break;case"object":switch(C.$$typeof){case i:case e:Se=!0}}if(Se)return Se=C,fe=fe(Se),C=ce===""?"."+Xe(Se,0):ce,K(fe)?(se="",C!=null&&(se=C.replace(De,"$&/")+"/"),lt(fe,A,se,"",function(kt){return kt})):fe!=null&&(ne(fe)&&(fe=at(fe,se+(!fe.key||Se&&Se.key===fe.key?"":(""+fe.key).replace(De,"$&/")+"/")+C)),A.push(fe)),1;if(Se=0,ce=ce===""?".":ce+":",K(C))for(var ve=0;ve<C.length;ve++){pe=C[ve];var Pe=ce+Xe(pe,ve);Se+=lt(pe,A,se,Pe,fe)}else if(Pe=w(C),typeof Pe=="function")for(C=Pe.call(C),ve=0;!(pe=C.next()).done;)pe=pe.value,Pe=ce+Xe(pe,ve++),Se+=lt(pe,A,se,Pe,fe);else if(pe==="object")throw A=String(C),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return Se}function Nt(C,A,se){if(C==null)return C;var ce=[],fe=0;return lt(C,ce,"","",function(pe){return A.call(se,pe,fe++)}),ce}function tt(C){if(C._status===-1){var A=C._result;A=A(),A.then(function(se){(C._status===0||C._status===-1)&&(C._status=1,C._result=se)},function(se){(C._status===0||C._status===-1)&&(C._status=2,C._result=se)}),C._status===-1&&(C._status=0,C._result=A)}if(C._status===1)return C._result.default;throw C._result}var Me={current:null},U={transition:null},X={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:U,ReactCurrentOwner:ie};function B(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:Nt,forEach:function(C,A,se){Nt(C,function(){A.apply(this,arguments)},se)},count:function(C){var A=0;return Nt(C,function(){A++}),A},toArray:function(C){return Nt(C,function(A){return A})||[]},only:function(C){if(!ne(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},oe.Component=O,oe.Fragment=n,oe.Profiler=a,oe.PureComponent=R,oe.StrictMode=s,oe.Suspense=m,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,oe.act=B,oe.cloneElement=function(C,A,se){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var ce=b({},C.props),fe=C.key,pe=C.ref,Se=C._owner;if(A!=null){if(A.ref!==void 0&&(pe=A.ref,Se=ie.current),A.key!==void 0&&(fe=""+A.key),C.type&&C.type.defaultProps)var ve=C.type.defaultProps;for(Pe in A)re.call(A,Pe)&&!Ce.hasOwnProperty(Pe)&&(ce[Pe]=A[Pe]===void 0&&ve!==void 0?ve[Pe]:A[Pe])}var Pe=arguments.length-2;if(Pe===1)ce.children=se;else if(1<Pe){ve=Array(Pe);for(var kt=0;kt<Pe;kt++)ve[kt]=arguments[kt+2];ce.children=ve}return{$$typeof:i,type:C.type,key:fe,ref:pe,props:ce,_owner:Se}},oe.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:c,_context:C},C.Consumer=C},oe.createElement=he,oe.createFactory=function(C){var A=he.bind(null,C);return A.type=C,A},oe.createRef=function(){return{current:null}},oe.forwardRef=function(C){return{$$typeof:f,render:C}},oe.isValidElement=ne,oe.lazy=function(C){return{$$typeof:x,_payload:{_status:-1,_result:C},_init:tt}},oe.memo=function(C,A){return{$$typeof:_,type:C,compare:A===void 0?null:A}},oe.startTransition=function(C){var A=U.transition;U.transition={};try{C()}finally{U.transition=A}},oe.unstable_act=B,oe.useCallback=function(C,A){return Me.current.useCallback(C,A)},oe.useContext=function(C){return Me.current.useContext(C)},oe.useDebugValue=function(){},oe.useDeferredValue=function(C){return Me.current.useDeferredValue(C)},oe.useEffect=function(C,A){return Me.current.useEffect(C,A)},oe.useId=function(){return Me.current.useId()},oe.useImperativeHandle=function(C,A,se){return Me.current.useImperativeHandle(C,A,se)},oe.useInsertionEffect=function(C,A){return Me.current.useInsertionEffect(C,A)},oe.useLayoutEffect=function(C,A){return Me.current.useLayoutEffect(C,A)},oe.useMemo=function(C,A){return Me.current.useMemo(C,A)},oe.useReducer=function(C,A,se){return Me.current.useReducer(C,A,se)},oe.useRef=function(C){return Me.current.useRef(C)},oe.useState=function(C){return Me.current.useState(C)},oe.useSyncExternalStore=function(C,A,se){return Me.current.useSyncExternalStore(C,A,se)},oe.useTransition=function(){return Me.current.useTransition()},oe.version="18.3.1",oe}var bp;function Ou(){return bp||(bp=1,Vc.exports=p0()),Vc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function m0(){if(Pp)return ls;Pp=1;var i=Ou(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,_){var x,v={},w=null,T=null;_!==void 0&&(w=""+_),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&(T=m.ref);for(x in m)s.call(m,x)&&!c.hasOwnProperty(x)&&(v[x]=m[x]);if(f&&f.defaultProps)for(x in m=f.defaultProps,m)v[x]===void 0&&(v[x]=m[x]);return{$$typeof:e,type:f,key:w,ref:T,props:v,_owner:a.current}}return ls.Fragment=n,ls.jsx=d,ls.jsxs=d,ls}var Ap;function g0(){return Ap||(Ap=1,Hc.exports=m0()),Hc.exports}var p=g0(),q=Ou();const Dp=f0(q);var ea={},$c={exports:{}},_t={},Gc={exports:{}},qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function _0(){return Op||(Op=1,function(i){function e(U,X){var B=U.length;U.push(X);e:for(;0<B;){var C=B-1>>>1,A=U[C];if(0<a(A,X))U[C]=X,U[B]=A,B=C;else break e}}function n(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var X=U[0],B=U.pop();if(B!==X){U[0]=B;e:for(var C=0,A=U.length,se=A>>>1;C<se;){var ce=2*(C+1)-1,fe=U[ce],pe=ce+1,Se=U[pe];if(0>a(fe,B))pe<A&&0>a(Se,fe)?(U[C]=Se,U[pe]=B,C=pe):(U[C]=fe,U[ce]=B,C=ce);else if(pe<A&&0>a(Se,B))U[C]=Se,U[pe]=B,C=pe;else break e}}return X}function a(U,X){var B=U.sortIndex-X.sortIndex;return B!==0?B:U.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var m=[],_=[],x=1,v=null,w=3,T=!1,b=!1,M=!1,O=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(U){for(var X=n(_);X!==null;){if(X.callback===null)s(_);else if(X.startTime<=U)s(_),X.sortIndex=X.expirationTime,e(m,X);else break;X=n(_)}}function K(U){if(M=!1,G(U),!b)if(n(m)!==null)b=!0,tt(re);else{var X=n(_);X!==null&&Me(K,X.startTime-U)}}function re(U,X){b=!1,M&&(M=!1,te(he),he=-1),T=!0;var B=w;try{for(G(X),v=n(m);v!==null&&(!(v.expirationTime>X)||U&&!xe());){var C=v.callback;if(typeof C=="function"){v.callback=null,w=v.priorityLevel;var A=C(v.expirationTime<=X);X=i.unstable_now(),typeof A=="function"?v.callback=A:v===n(m)&&s(m),G(X)}else s(m);v=n(m)}if(v!==null)var se=!0;else{var ce=n(_);ce!==null&&Me(K,ce.startTime-X),se=!1}return se}finally{v=null,w=B,T=!1}}var ie=!1,Ce=null,he=-1,at=5,ne=-1;function xe(){return!(i.unstable_now()-ne<at)}function De(){if(Ce!==null){var U=i.unstable_now();ne=U;var X=!0;try{X=Ce(!0,U)}finally{X?Xe():(ie=!1,Ce=null)}}else ie=!1}var Xe;if(typeof R=="function")Xe=function(){R(De)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Nt=lt.port2;lt.port1.onmessage=De,Xe=function(){Nt.postMessage(null)}}else Xe=function(){O(De,0)};function tt(U){Ce=U,ie||(ie=!0,Xe())}function Me(U,X){he=O(function(){U(i.unstable_now())},X)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(U){U.callback=null},i.unstable_continueExecution=function(){b||T||(b=!0,tt(re))},i.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):at=0<U?Math.floor(1e3/U):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_getFirstCallbackNode=function(){return n(m)},i.unstable_next=function(U){switch(w){case 1:case 2:case 3:var X=3;break;default:X=w}var B=w;w=X;try{return U()}finally{w=B}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var B=w;w=U;try{return X()}finally{w=B}},i.unstable_scheduleCallback=function(U,X,B){var C=i.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?C+B:C):B=C,U){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=B+A,U={id:x++,callback:X,priorityLevel:U,startTime:B,expirationTime:A,sortIndex:-1},B>C?(U.sortIndex=B,e(_,U),n(m)===null&&U===n(_)&&(M?(te(he),he=-1):M=!0,Me(K,B-C))):(U.sortIndex=A,e(m,U),b||T||(b=!0,tt(re))),U},i.unstable_shouldYield=xe,i.unstable_wrapCallback=function(U){var X=w;return function(){var B=w;w=X;try{return U.apply(this,arguments)}finally{w=B}}}}(qc)),qc}var Lp;function y0(){return Lp||(Lp=1,Gc.exports=_0()),Gc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function v0(){if(Mp)return _t;Mp=1;var i=Ou(),e=y0();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(a[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function w(t){return m.call(v,t)?!0:m.call(x,t)?!1:_.test(t)?v[t]=!0:(x[t]=!0,!1)}function T(t,r,o,l){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,r,o,l){if(r===null||typeof r>"u"||T(t,r,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(t,r,o,l,u,h,g){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=g}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){O[t]=new M(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];O[r]=new M(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){O[t]=new M(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){O[t]=new M(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){O[t]=new M(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){O[t]=new M(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){O[t]=new M(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){O[t]=new M(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){O[t]=new M(t,5,!1,t.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function R(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(te,R);O[r]=new M(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(te,R);O[r]=new M(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(te,R);O[r]=new M(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){O[t]=new M(t,1,!1,t.toLowerCase(),null,!1,!1)}),O.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){O[t]=new M(t,1,!1,t.toLowerCase(),null,!0,!0)});function G(t,r,o,l){var u=O.hasOwnProperty(r)?O[r]:null;(u!==null?u.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(b(r,o,u,l)&&(o=null),l||u===null?w(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(r=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(r):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,r,o):t.setAttribute(r,o))))}var K=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),ie=Symbol.for("react.portal"),Ce=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),at=Symbol.for("react.profiler"),ne=Symbol.for("react.provider"),xe=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),Xe=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),Nt=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),U=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=U&&t[U]||t["@@iterator"],typeof t=="function"?t:null)}var B=Object.assign,C;function A(t){if(C===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);C=r&&r[1]||""}return`
`+C+t}var se=!1;function ce(t,r){if(!t||se)return"";se=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(N){var l=N}Reflect.construct(t,[],r)}else{try{r.call()}catch(N){l=N}t.call(r.prototype)}else{try{throw Error()}catch(N){l=N}t()}}catch(N){if(N&&l&&typeof N.stack=="string"){for(var u=N.stack.split(`
`),h=l.stack.split(`
`),g=u.length-1,y=h.length-1;1<=g&&0<=y&&u[g]!==h[y];)y--;for(;1<=g&&0<=y;g--,y--)if(u[g]!==h[y]){if(g!==1||y!==1)do if(g--,y--,0>y||u[g]!==h[y]){var k=`
`+u[g].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=g&&0<=y);break}}}finally{se=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?A(t):""}function fe(t){switch(t.tag){case 5:return A(t.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return t=ce(t.type,!1),t;case 11:return t=ce(t.type.render,!1),t;case 1:return t=ce(t.type,!0),t;default:return""}}function pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ce:return"Fragment";case ie:return"Portal";case at:return"Profiler";case he:return"StrictMode";case Xe:return"Suspense";case lt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xe:return(t.displayName||"Context")+".Consumer";case ne:return(t._context.displayName||"Context")+".Provider";case De:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nt:return r=t.displayName||null,r!==null?r:pe(t.type)||"Memo";case tt:r=t._payload,t=t._init;try{return pe(t(r))}catch{}}return null}function Se(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(r);case 8:return r===he?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ve(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pe(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function kt(t){var r=Pe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(g){l=""+g,h.call(this,g)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Hs(t){t._valueTracker||(t._valueTracker=kt(t))}function Od(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),l="";return t&&(l=Pe(t)?t.checked?"true":"false":t.value),t=l,t!==o?(r.setValue(t),!0):!1}function Vs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qa(t,r){var o=r.checked;return B({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Ld(t,r){var o=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;o=ve(r.value!=null?r.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Md(t,r){r=r.checked,r!=null&&G(t,"checked",r,!1)}function Xa(t,r){Md(t,r);var o=ve(r.value),l=r.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Ja(t,r.type,o):r.hasOwnProperty("defaultValue")&&Ja(t,r.type,ve(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function jd(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ja(t,r,o){(r!=="number"||Vs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ei=Array.isArray;function Tr(t,r,o,l){if(t=t.options,r){r={};for(var u=0;u<o.length;u++)r["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=r.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+ve(o),r=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function Za(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return B({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fd(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(Ei(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:ve(o)}}function Ud(t,r){var o=ve(r.value),l=ve(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function zd(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Wd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function el(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Wd(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $s,Bd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(r,o,l,u)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for($s=$s||document.createElement("div"),$s.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=$s.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Ci(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_y=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(t){_y.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Si[r]=Si[t]})});function Hd(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Si.hasOwnProperty(t)&&Si[t]?(""+r).trim():r+"px"}function Vd(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=Hd(o,r[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var yy=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(t,r){if(r){if(yy[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function nl(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rl=null;function il(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sl=null,Rr=null,br=null;function $d(t){if(t=qi(t)){if(typeof sl!="function")throw Error(n(280));var r=t.stateNode;r&&(r=mo(r),sl(t.stateNode,t.type,r))}}function Gd(t){Rr?br?br.push(t):br=[t]:Rr=t}function qd(){if(Rr){var t=Rr,r=br;if(br=Rr=null,$d(t),r)for(t=0;t<r.length;t++)$d(r[t])}}function Kd(t,r){return t(r)}function Yd(){}var ol=!1;function Qd(t,r,o){if(ol)return t(r,o);ol=!0;try{return Kd(t,r,o)}finally{ol=!1,(Rr!==null||br!==null)&&(Yd(),qd())}}function Ii(t,r){var o=t.stateNode;if(o===null)return null;var l=mo(o);if(l===null)return null;o=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var al=!1;if(f)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){al=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{al=!1}function vy(t,r,o,l,u,h,g,y,k){var N=Array.prototype.slice.call(arguments,3);try{r.apply(o,N)}catch(D){this.onError(D)}}var Ti=!1,Gs=null,qs=!1,ll=null,wy={onError:function(t){Ti=!0,Gs=t}};function xy(t,r,o,l,u,h,g,y,k){Ti=!1,Gs=null,vy.apply(wy,arguments)}function ky(t,r,o,l,u,h,g,y,k){if(xy.apply(this,arguments),Ti){if(Ti){var N=Gs;Ti=!1,Gs=null}else throw Error(n(198));qs||(qs=!0,ll=N)}}function nr(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Xd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Jd(t){if(nr(t)!==t)throw Error(n(188))}function Ey(t){var r=t.alternate;if(!r){if(r=nr(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,l=r;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return Jd(u),t;if(h===l)return Jd(u),r;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=u,l=h;else{for(var g=!1,y=u.child;y;){if(y===o){g=!0,o=u,l=h;break}if(y===l){g=!0,l=u,o=h;break}y=y.sibling}if(!g){for(y=h.child;y;){if(y===o){g=!0,o=h,l=u;break}if(y===l){g=!0,l=h,o=u;break}y=y.sibling}if(!g)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Zd(t){return t=Ey(t),t!==null?eh(t):null}function eh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=eh(t);if(r!==null)return r;t=t.sibling}return null}var th=e.unstable_scheduleCallback,nh=e.unstable_cancelCallback,Cy=e.unstable_shouldYield,Sy=e.unstable_requestPaint,Ue=e.unstable_now,Iy=e.unstable_getCurrentPriorityLevel,cl=e.unstable_ImmediatePriority,rh=e.unstable_UserBlockingPriority,Ks=e.unstable_NormalPriority,Ny=e.unstable_LowPriority,ih=e.unstable_IdlePriority,Ys=null,Yt=null;function Ty(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Ys,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:Py,Ry=Math.log,by=Math.LN2;function Py(t){return t>>>=0,t===0?32:31-(Ry(t)/by|0)|0}var Qs=64,Xs=4194304;function Ri(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Js(t,r){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,g=o&268435455;if(g!==0){var y=g&~u;y!==0?l=Ri(y):(h&=g,h!==0&&(l=Ri(h)))}else g=o&~u,g!==0?l=Ri(g):h!==0&&(l=Ri(h));if(l===0)return 0;if(r!==0&&r!==l&&(r&u)===0&&(u=l&-l,h=r&-r,u>=h||u===16&&(h&4194240)!==0))return r;if((l&4)!==0&&(l|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=l;0<r;)o=31-Lt(r),u=1<<o,l|=t[o],r&=~u;return l}function Ay(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dy(t,r){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var g=31-Lt(h),y=1<<g,k=u[g];k===-1?((y&o)===0||(y&l)!==0)&&(u[g]=Ay(y,r)):k<=r&&(t.expiredLanes|=y),h&=~y}}function ul(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sh(){var t=Qs;return Qs<<=1,(Qs&4194240)===0&&(Qs=64),t}function dl(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function bi(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Lt(r),t[r]=o}function Oy(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-Lt(o),h=1<<u;r[u]=0,l[u]=-1,t[u]=-1,o&=~h}}function hl(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var l=31-Lt(o),u=1<<l;u&r|t[l]&r&&(t[l]|=r),o&=~u}}var we=0;function oh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ah,fl,lh,ch,uh,pl=!1,Zs=[],xn=null,kn=null,En=null,Pi=new Map,Ai=new Map,Cn=[],Ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dh(t,r){switch(t){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Pi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(r.pointerId)}}function Di(t,r,o,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},r!==null&&(r=qi(r),r!==null&&fl(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function My(t,r,o,l,u){switch(r){case"focusin":return xn=Di(xn,t,r,o,l,u),!0;case"dragenter":return kn=Di(kn,t,r,o,l,u),!0;case"mouseover":return En=Di(En,t,r,o,l,u),!0;case"pointerover":var h=u.pointerId;return Pi.set(h,Di(Pi.get(h)||null,t,r,o,l,u)),!0;case"gotpointercapture":return h=u.pointerId,Ai.set(h,Di(Ai.get(h)||null,t,r,o,l,u)),!0}return!1}function hh(t){var r=rr(t.target);if(r!==null){var o=nr(r);if(o!==null){if(r=o.tag,r===13){if(r=Xd(o),r!==null){t.blockedOn=r,uh(t.priority,function(){lh(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eo(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=gl(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);rl=l,o.target.dispatchEvent(l),rl=null}else return r=qi(o),r!==null&&fl(r),t.blockedOn=o,!1;r.shift()}return!0}function fh(t,r,o){eo(t)&&o.delete(r)}function jy(){pl=!1,xn!==null&&eo(xn)&&(xn=null),kn!==null&&eo(kn)&&(kn=null),En!==null&&eo(En)&&(En=null),Pi.forEach(fh),Ai.forEach(fh)}function Oi(t,r){t.blockedOn===r&&(t.blockedOn=null,pl||(pl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,jy)))}function Li(t){function r(u){return Oi(u,t)}if(0<Zs.length){Oi(Zs[0],t);for(var o=1;o<Zs.length;o++){var l=Zs[o];l.blockedOn===t&&(l.blockedOn=null)}}for(xn!==null&&Oi(xn,t),kn!==null&&Oi(kn,t),En!==null&&Oi(En,t),Pi.forEach(r),Ai.forEach(r),o=0;o<Cn.length;o++)l=Cn[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Cn.length&&(o=Cn[0],o.blockedOn===null);)hh(o),o.blockedOn===null&&Cn.shift()}var Pr=K.ReactCurrentBatchConfig,to=!0;function Fy(t,r,o,l){var u=we,h=Pr.transition;Pr.transition=null;try{we=1,ml(t,r,o,l)}finally{we=u,Pr.transition=h}}function Uy(t,r,o,l){var u=we,h=Pr.transition;Pr.transition=null;try{we=4,ml(t,r,o,l)}finally{we=u,Pr.transition=h}}function ml(t,r,o,l){if(to){var u=gl(t,r,o,l);if(u===null)Dl(t,r,l,no,o),dh(t,l);else if(My(u,t,r,o,l))l.stopPropagation();else if(dh(t,l),r&4&&-1<Ly.indexOf(t)){for(;u!==null;){var h=qi(u);if(h!==null&&ah(h),h=gl(t,r,o,l),h===null&&Dl(t,r,l,no,o),h===u)break;u=h}u!==null&&l.stopPropagation()}else Dl(t,r,l,null,o)}}var no=null;function gl(t,r,o,l){if(no=null,t=il(l),t=rr(t),t!==null)if(r=nr(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Xd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return no=t,null}function ph(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iy()){case cl:return 1;case rh:return 4;case Ks:case Ny:return 16;case ih:return 536870912;default:return 16}default:return 16}}var Sn=null,_l=null,ro=null;function mh(){if(ro)return ro;var t,r=_l,o=r.length,l,u="value"in Sn?Sn.value:Sn.textContent,h=u.length;for(t=0;t<o&&r[t]===u[t];t++);var g=o-t;for(l=1;l<=g&&r[o-l]===u[h-l];l++);return ro=u.slice(t,1<l?1-l:void 0)}function io(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function gh(){return!1}function Et(t){function r(o,l,u,h,g){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(o=t[y],this[y]=o?o(h):h[y]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?so:gh,this.isPropagationStopped=gh,this}return B(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),r}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Et(Ar),Mi=B({},Ar,{view:0,detail:0}),zy=Et(Mi),vl,wl,ji,oo=B({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ji&&(ji&&t.type==="mousemove"?(vl=t.screenX-ji.screenX,wl=t.screenY-ji.screenY):wl=vl=0,ji=t),vl)},movementY:function(t){return"movementY"in t?t.movementY:wl}}),_h=Et(oo),Wy=B({},oo,{dataTransfer:0}),By=Et(Wy),Hy=B({},Mi,{relatedTarget:0}),xl=Et(Hy),Vy=B({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),$y=Et(Vy),Gy=B({},Ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qy=Et(Gy),Ky=B({},Ar,{data:0}),yh=Et(Ky),Yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jy(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Xy[t])?!!r[t]:!1}function kl(){return Jy}var Zy=B({},Mi,{key:function(t){if(t.key){var r=Yy[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(t){return t.type==="keypress"?io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ev=Et(Zy),tv=B({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=Et(tv),nv=B({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),rv=Et(nv),iv=B({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),sv=Et(iv),ov=B({},oo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),av=Et(ov),lv=[9,13,27,32],El=f&&"CompositionEvent"in window,Fi=null;f&&"documentMode"in document&&(Fi=document.documentMode);var cv=f&&"TextEvent"in window&&!Fi,wh=f&&(!El||Fi&&8<Fi&&11>=Fi),xh=" ",kh=!1;function Eh(t,r){switch(t){case"keyup":return lv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ch(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function uv(t,r){switch(t){case"compositionend":return Ch(r);case"keypress":return r.which!==32?null:(kh=!0,xh);case"textInput":return t=r.data,t===xh&&kh?null:t;default:return null}}function dv(t,r){if(Dr)return t==="compositionend"||!El&&Eh(t,r)?(t=mh(),ro=_l=Sn=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return wh&&r.locale!=="ko"?null:r.data;default:return null}}var hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!hv[t.type]:r==="textarea"}function Ih(t,r,o,l){Gd(l),r=ho(r,"onChange"),0<r.length&&(o=new yl("onChange","change",null,o,l),t.push({event:o,listeners:r}))}var Ui=null,zi=null;function fv(t){Vh(t,0)}function ao(t){var r=Fr(t);if(Od(r))return t}function pv(t,r){if(t==="change")return r}var Nh=!1;if(f){var Cl;if(f){var Sl="oninput"in document;if(!Sl){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Sl=typeof Th.oninput=="function"}Cl=Sl}else Cl=!1;Nh=Cl&&(!document.documentMode||9<document.documentMode)}function Rh(){Ui&&(Ui.detachEvent("onpropertychange",bh),zi=Ui=null)}function bh(t){if(t.propertyName==="value"&&ao(zi)){var r=[];Ih(r,zi,t,il(t)),Qd(fv,r)}}function mv(t,r,o){t==="focusin"?(Rh(),Ui=r,zi=o,Ui.attachEvent("onpropertychange",bh)):t==="focusout"&&Rh()}function gv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao(zi)}function _v(t,r){if(t==="click")return ao(r)}function yv(t,r){if(t==="input"||t==="change")return ao(r)}function vv(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Mt=typeof Object.is=="function"?Object.is:vv;function Wi(t,r){if(Mt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),l=Object.keys(r);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!m.call(r,u)||!Mt(t[u],r[u]))return!1}return!0}function Ph(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ah(t,r){var o=Ph(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=r&&l>=r)return{node:o,offset:r-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ph(o)}}function Dh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Dh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Oh(){for(var t=window,r=Vs();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Vs(t.document)}return r}function Il(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function wv(t){var r=Oh(),o=t.focusedElem,l=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Dh(o.ownerDocument.documentElement,o)){if(l!==null&&Il(o)){if(r=l.start,t=l.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=Ah(o,h);var g=Ah(o,l);u&&g&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(r),t.extend(g.node,g.offset)):(r.setEnd(g.node,g.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xv=f&&"documentMode"in document&&11>=document.documentMode,Or=null,Nl=null,Bi=null,Tl=!1;function Lh(t,r,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Tl||Or==null||Or!==Vs(l)||(l=Or,"selectionStart"in l&&Il(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Bi&&Wi(Bi,l)||(Bi=l,l=ho(Nl,"onSelect"),0<l.length&&(r=new yl("onSelect","select",null,r,o),t.push({event:r,listeners:l}),r.target=Or)))}function lo(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Lr={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Rl={},Mh={};f&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function co(t){if(Rl[t])return Rl[t];if(!Lr[t])return t;var r=Lr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Mh)return Rl[t]=r[o];return t}var jh=co("animationend"),Fh=co("animationiteration"),Uh=co("animationstart"),zh=co("transitionend"),Wh=new Map,Bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(t,r){Wh.set(t,r),c(r,[t])}for(var bl=0;bl<Bh.length;bl++){var Pl=Bh[bl],kv=Pl.toLowerCase(),Ev=Pl[0].toUpperCase()+Pl.slice(1);In(kv,"on"+Ev)}In(jh,"onAnimationEnd"),In(Fh,"onAnimationIteration"),In(Uh,"onAnimationStart"),In("dblclick","onDoubleClick"),In("focusin","onFocus"),In("focusout","onBlur"),In(zh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));function Hh(t,r,o){var l=t.type||"unknown-event";t.currentTarget=o,ky(l,r,void 0,t),t.currentTarget=null}function Vh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var h=void 0;if(r)for(var g=l.length-1;0<=g;g--){var y=l[g],k=y.instance,N=y.currentTarget;if(y=y.listener,k!==h&&u.isPropagationStopped())break e;Hh(u,y,N),h=k}else for(g=0;g<l.length;g++){if(y=l[g],k=y.instance,N=y.currentTarget,y=y.listener,k!==h&&u.isPropagationStopped())break e;Hh(u,y,N),h=k}}}if(qs)throw t=ll,qs=!1,ll=null,t}function Te(t,r){var o=r[Ul];o===void 0&&(o=r[Ul]=new Set);var l=t+"__bubble";o.has(l)||($h(r,t,2,!1),o.add(l))}function Al(t,r,o){var l=0;r&&(l|=4),$h(o,t,l,r)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Vi(t){if(!t[uo]){t[uo]=!0,s.forEach(function(o){o!=="selectionchange"&&(Cv.has(o)||Al(o,!1,t),Al(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[uo]||(r[uo]=!0,Al("selectionchange",!1,r))}}function $h(t,r,o,l){switch(ph(r)){case 1:var u=Fy;break;case 4:u=Uy;break;default:u=ml}o=u.bind(null,r,o,t),u=void 0,!al||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(r,o,{capture:!0,passive:u}):t.addEventListener(r,o,!0):u!==void 0?t.addEventListener(r,o,{passive:u}):t.addEventListener(r,o,!1)}function Dl(t,r,o,l,u){var h=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var y=l.stateNode.containerInfo;if(y===u||y.nodeType===8&&y.parentNode===u)break;if(g===4)for(g=l.return;g!==null;){var k=g.tag;if((k===3||k===4)&&(k=g.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;g=g.return}for(;y!==null;){if(g=rr(y),g===null)return;if(k=g.tag,k===5||k===6){l=h=g;continue e}y=y.parentNode}}l=l.return}Qd(function(){var N=h,D=il(o),L=[];e:{var P=Wh.get(t);if(P!==void 0){var z=yl,H=t;switch(t){case"keypress":if(io(o)===0)break e;case"keydown":case"keyup":z=ev;break;case"focusin":H="focus",z=xl;break;case"focusout":H="blur",z=xl;break;case"beforeblur":case"afterblur":z=xl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=_h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=By;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=rv;break;case jh:case Fh:case Uh:z=$y;break;case zh:z=sv;break;case"scroll":z=zy;break;case"wheel":z=av;break;case"copy":case"cut":case"paste":z=qy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=vh}var V=(r&4)!==0,ze=!V&&t==="scroll",S=V?P!==null?P+"Capture":null:P;V=[];for(var E=N,I;E!==null;){I=E;var j=I.stateNode;if(I.tag===5&&j!==null&&(I=j,S!==null&&(j=Ii(E,S),j!=null&&V.push($i(E,j,I)))),ze)break;E=E.return}0<V.length&&(P=new z(P,H,null,o,D),L.push({event:P,listeners:V}))}}if((r&7)===0){e:{if(P=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",P&&o!==rl&&(H=o.relatedTarget||o.fromElement)&&(rr(H)||H[nn]))break e;if((z||P)&&(P=D.window===D?D:(P=D.ownerDocument)?P.defaultView||P.parentWindow:window,z?(H=o.relatedTarget||o.toElement,z=N,H=H?rr(H):null,H!==null&&(ze=nr(H),H!==ze||H.tag!==5&&H.tag!==6)&&(H=null)):(z=null,H=N),z!==H)){if(V=_h,j="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(V=vh,j="onPointerLeave",S="onPointerEnter",E="pointer"),ze=z==null?P:Fr(z),I=H==null?P:Fr(H),P=new V(j,E+"leave",z,o,D),P.target=ze,P.relatedTarget=I,j=null,rr(D)===N&&(V=new V(S,E+"enter",H,o,D),V.target=I,V.relatedTarget=ze,j=V),ze=j,z&&H)t:{for(V=z,S=H,E=0,I=V;I;I=Mr(I))E++;for(I=0,j=S;j;j=Mr(j))I++;for(;0<E-I;)V=Mr(V),E--;for(;0<I-E;)S=Mr(S),I--;for(;E--;){if(V===S||S!==null&&V===S.alternate)break t;V=Mr(V),S=Mr(S)}V=null}else V=null;z!==null&&Gh(L,P,z,V,!1),H!==null&&ze!==null&&Gh(L,ze,H,V,!0)}}e:{if(P=N?Fr(N):window,z=P.nodeName&&P.nodeName.toLowerCase(),z==="select"||z==="input"&&P.type==="file")var $=pv;else if(Sh(P))if(Nh)$=yv;else{$=gv;var Y=mv}else(z=P.nodeName)&&z.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&($=_v);if($&&($=$(t,N))){Ih(L,$,o,D);break e}Y&&Y(t,P,N),t==="focusout"&&(Y=P._wrapperState)&&Y.controlled&&P.type==="number"&&Ja(P,"number",P.value)}switch(Y=N?Fr(N):window,t){case"focusin":(Sh(Y)||Y.contentEditable==="true")&&(Or=Y,Nl=N,Bi=null);break;case"focusout":Bi=Nl=Or=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,Lh(L,o,D);break;case"selectionchange":if(xv)break;case"keydown":case"keyup":Lh(L,o,D)}var Q;if(El)e:{switch(t){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Dr?Eh(t,o)&&(ee="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ee="onCompositionStart");ee&&(wh&&o.locale!=="ko"&&(Dr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Dr&&(Q=mh()):(Sn=D,_l="value"in Sn?Sn.value:Sn.textContent,Dr=!0)),Y=ho(N,ee),0<Y.length&&(ee=new yh(ee,t,null,o,D),L.push({event:ee,listeners:Y}),Q?ee.data=Q:(Q=Ch(o),Q!==null&&(ee.data=Q)))),(Q=cv?uv(t,o):dv(t,o))&&(N=ho(N,"onBeforeInput"),0<N.length&&(D=new yh("onBeforeInput","beforeinput",null,o,D),L.push({event:D,listeners:N}),D.data=Q))}Vh(L,r)})}function $i(t,r,o){return{instance:t,listener:r,currentTarget:o}}function ho(t,r){for(var o=r+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Ii(t,o),h!=null&&l.unshift($i(t,h,u)),h=Ii(t,r),h!=null&&l.push($i(t,h,u))),t=t.return}return l}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gh(t,r,o,l,u){for(var h=r._reactName,g=[];o!==null&&o!==l;){var y=o,k=y.alternate,N=y.stateNode;if(k!==null&&k===l)break;y.tag===5&&N!==null&&(y=N,u?(k=Ii(o,h),k!=null&&g.unshift($i(o,k,y))):u||(k=Ii(o,h),k!=null&&g.push($i(o,k,y)))),o=o.return}g.length!==0&&t.push({event:r,listeners:g})}var Sv=/\r\n?/g,Iv=/\u0000|\uFFFD/g;function qh(t){return(typeof t=="string"?t:""+t).replace(Sv,`
`).replace(Iv,"")}function fo(t,r,o){if(r=qh(r),qh(t)!==r&&o)throw Error(n(425))}function po(){}var Ol=null,Ll=null;function Ml(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,Nv=typeof clearTimeout=="function"?clearTimeout:void 0,Kh=typeof Promise=="function"?Promise:void 0,Tv=typeof queueMicrotask=="function"?queueMicrotask:typeof Kh<"u"?function(t){return Kh.resolve(null).then(t).catch(Rv)}:jl;function Rv(t){setTimeout(function(){throw t})}function Fl(t,r){var o=r,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),Li(r);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);Li(r)}function Nn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Yh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var jr=Math.random().toString(36).slice(2),Qt="__reactFiber$"+jr,Gi="__reactProps$"+jr,nn="__reactContainer$"+jr,Ul="__reactEvents$"+jr,bv="__reactListeners$"+jr,Pv="__reactHandles$"+jr;function rr(t){var r=t[Qt];if(r)return r;for(var o=t.parentNode;o;){if(r=o[nn]||o[Qt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Yh(t);t!==null;){if(o=t[Qt])return o;t=Yh(t)}return r}t=o,o=t.parentNode}return null}function qi(t){return t=t[Qt]||t[nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function mo(t){return t[Gi]||null}var zl=[],Ur=-1;function Tn(t){return{current:t}}function Re(t){0>Ur||(t.current=zl[Ur],zl[Ur]=null,Ur--)}function Ie(t,r){Ur++,zl[Ur]=t.current,t.current=r}var Rn={},nt=Tn(Rn),ht=Tn(!1),ir=Rn;function zr(t,r){var o=t.type.contextTypes;if(!o)return Rn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=r[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=u),u}function ft(t){return t=t.childContextTypes,t!=null}function go(){Re(ht),Re(nt)}function Qh(t,r,o){if(nt.current!==Rn)throw Error(n(168));Ie(nt,r),Ie(ht,o)}function Xh(t,r,o){var l=t.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in r))throw Error(n(108,Se(t)||"Unknown",u));return B({},o,l)}function _o(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rn,ir=nt.current,Ie(nt,t),Ie(ht,ht.current),!0}function Jh(t,r,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Xh(t,r,ir),l.__reactInternalMemoizedMergedChildContext=t,Re(ht),Re(nt),Ie(nt,t)):Re(ht),Ie(ht,o)}var rn=null,yo=!1,Wl=!1;function Zh(t){rn===null?rn=[t]:rn.push(t)}function Av(t){yo=!0,Zh(t)}function bn(){if(!Wl&&rn!==null){Wl=!0;var t=0,r=we;try{var o=rn;for(we=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}rn=null,yo=!1}catch(u){throw rn!==null&&(rn=rn.slice(t+1)),th(cl,bn),u}finally{we=r,Wl=!1}}return null}var Wr=[],Br=0,vo=null,wo=0,Tt=[],Rt=0,sr=null,sn=1,on="";function or(t,r){Wr[Br++]=wo,Wr[Br++]=vo,vo=t,wo=r}function ef(t,r,o){Tt[Rt++]=sn,Tt[Rt++]=on,Tt[Rt++]=sr,sr=t;var l=sn;t=on;var u=32-Lt(l)-1;l&=~(1<<u),o+=1;var h=32-Lt(r)+u;if(30<h){var g=u-u%5;h=(l&(1<<g)-1).toString(32),l>>=g,u-=g,sn=1<<32-Lt(r)+u|o<<u|l,on=h+t}else sn=1<<h|o<<u|l,on=t}function Bl(t){t.return!==null&&(or(t,1),ef(t,1,0))}function Hl(t){for(;t===vo;)vo=Wr[--Br],Wr[Br]=null,wo=Wr[--Br],Wr[Br]=null;for(;t===sr;)sr=Tt[--Rt],Tt[Rt]=null,on=Tt[--Rt],Tt[Rt]=null,sn=Tt[--Rt],Tt[Rt]=null}var Ct=null,St=null,Ae=!1,jt=null;function tf(t,r){var o=Dt(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function nf(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Ct=t,St=Nn(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Ct=t,St=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=sr!==null?{id:sn,overflow:on}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Dt(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,Ct=t,St=null,!0):!1;default:return!1}}function Vl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $l(t){if(Ae){var r=St;if(r){var o=r;if(!nf(t,r)){if(Vl(t))throw Error(n(418));r=Nn(o.nextSibling);var l=Ct;r&&nf(t,r)?tf(l,o):(t.flags=t.flags&-4097|2,Ae=!1,Ct=t)}}else{if(Vl(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ae=!1,Ct=t}}}function rf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function xo(t){if(t!==Ct)return!1;if(!Ae)return rf(t),Ae=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Ml(t.type,t.memoizedProps)),r&&(r=St)){if(Vl(t))throw sf(),Error(n(418));for(;r;)tf(t,r),r=Nn(r.nextSibling)}if(rf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){St=Nn(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}St=null}}else St=Ct?Nn(t.stateNode.nextSibling):null;return!0}function sf(){for(var t=St;t;)t=Nn(t.nextSibling)}function Hr(){St=Ct=null,Ae=!1}function Gl(t){jt===null?jt=[t]:jt.push(t)}var Dv=K.ReactCurrentBatchConfig;function Ki(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(g){var y=u.refs;g===null?delete y[h]:y[h]=g},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ko(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function of(t){var r=t._init;return r(t._payload)}function af(t){function r(S,E){if(t){var I=S.deletions;I===null?(S.deletions=[E],S.flags|=16):I.push(E)}}function o(S,E){if(!t)return null;for(;E!==null;)r(S,E),E=E.sibling;return null}function l(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function u(S,E){return S=Fn(S,E),S.index=0,S.sibling=null,S}function h(S,E,I){return S.index=I,t?(I=S.alternate,I!==null?(I=I.index,I<E?(S.flags|=2,E):I):(S.flags|=2,E)):(S.flags|=1048576,E)}function g(S){return t&&S.alternate===null&&(S.flags|=2),S}function y(S,E,I,j){return E===null||E.tag!==6?(E=jc(I,S.mode,j),E.return=S,E):(E=u(E,I),E.return=S,E)}function k(S,E,I,j){var $=I.type;return $===Ce?D(S,E,I.props.children,j,I.key):E!==null&&(E.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===tt&&of($)===E.type)?(j=u(E,I.props),j.ref=Ki(S,E,I),j.return=S,j):(j=Go(I.type,I.key,I.props,null,S.mode,j),j.ref=Ki(S,E,I),j.return=S,j)}function N(S,E,I,j){return E===null||E.tag!==4||E.stateNode.containerInfo!==I.containerInfo||E.stateNode.implementation!==I.implementation?(E=Fc(I,S.mode,j),E.return=S,E):(E=u(E,I.children||[]),E.return=S,E)}function D(S,E,I,j,$){return E===null||E.tag!==7?(E=pr(I,S.mode,j,$),E.return=S,E):(E=u(E,I),E.return=S,E)}function L(S,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return E=jc(""+E,S.mode,I),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case re:return I=Go(E.type,E.key,E.props,null,S.mode,I),I.ref=Ki(S,null,E),I.return=S,I;case ie:return E=Fc(E,S.mode,I),E.return=S,E;case tt:var j=E._init;return L(S,j(E._payload),I)}if(Ei(E)||X(E))return E=pr(E,S.mode,I,null),E.return=S,E;ko(S,E)}return null}function P(S,E,I,j){var $=E!==null?E.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return $!==null?null:y(S,E,""+I,j);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case re:return I.key===$?k(S,E,I,j):null;case ie:return I.key===$?N(S,E,I,j):null;case tt:return $=I._init,P(S,E,$(I._payload),j)}if(Ei(I)||X(I))return $!==null?null:D(S,E,I,j,null);ko(S,I)}return null}function z(S,E,I,j,$){if(typeof j=="string"&&j!==""||typeof j=="number")return S=S.get(I)||null,y(E,S,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case re:return S=S.get(j.key===null?I:j.key)||null,k(E,S,j,$);case ie:return S=S.get(j.key===null?I:j.key)||null,N(E,S,j,$);case tt:var Y=j._init;return z(S,E,I,Y(j._payload),$)}if(Ei(j)||X(j))return S=S.get(I)||null,D(E,S,j,$,null);ko(E,j)}return null}function H(S,E,I,j){for(var $=null,Y=null,Q=E,ee=E=0,qe=null;Q!==null&&ee<I.length;ee++){Q.index>ee?(qe=Q,Q=null):qe=Q.sibling;var me=P(S,Q,I[ee],j);if(me===null){Q===null&&(Q=qe);break}t&&Q&&me.alternate===null&&r(S,Q),E=h(me,E,ee),Y===null?$=me:Y.sibling=me,Y=me,Q=qe}if(ee===I.length)return o(S,Q),Ae&&or(S,ee),$;if(Q===null){for(;ee<I.length;ee++)Q=L(S,I[ee],j),Q!==null&&(E=h(Q,E,ee),Y===null?$=Q:Y.sibling=Q,Y=Q);return Ae&&or(S,ee),$}for(Q=l(S,Q);ee<I.length;ee++)qe=z(Q,S,ee,I[ee],j),qe!==null&&(t&&qe.alternate!==null&&Q.delete(qe.key===null?ee:qe.key),E=h(qe,E,ee),Y===null?$=qe:Y.sibling=qe,Y=qe);return t&&Q.forEach(function(Un){return r(S,Un)}),Ae&&or(S,ee),$}function V(S,E,I,j){var $=X(I);if(typeof $!="function")throw Error(n(150));if(I=$.call(I),I==null)throw Error(n(151));for(var Y=$=null,Q=E,ee=E=0,qe=null,me=I.next();Q!==null&&!me.done;ee++,me=I.next()){Q.index>ee?(qe=Q,Q=null):qe=Q.sibling;var Un=P(S,Q,me.value,j);if(Un===null){Q===null&&(Q=qe);break}t&&Q&&Un.alternate===null&&r(S,Q),E=h(Un,E,ee),Y===null?$=Un:Y.sibling=Un,Y=Un,Q=qe}if(me.done)return o(S,Q),Ae&&or(S,ee),$;if(Q===null){for(;!me.done;ee++,me=I.next())me=L(S,me.value,j),me!==null&&(E=h(me,E,ee),Y===null?$=me:Y.sibling=me,Y=me);return Ae&&or(S,ee),$}for(Q=l(S,Q);!me.done;ee++,me=I.next())me=z(Q,S,ee,me.value,j),me!==null&&(t&&me.alternate!==null&&Q.delete(me.key===null?ee:me.key),E=h(me,E,ee),Y===null?$=me:Y.sibling=me,Y=me);return t&&Q.forEach(function(h0){return r(S,h0)}),Ae&&or(S,ee),$}function ze(S,E,I,j){if(typeof I=="object"&&I!==null&&I.type===Ce&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case re:e:{for(var $=I.key,Y=E;Y!==null;){if(Y.key===$){if($=I.type,$===Ce){if(Y.tag===7){o(S,Y.sibling),E=u(Y,I.props.children),E.return=S,S=E;break e}}else if(Y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===tt&&of($)===Y.type){o(S,Y.sibling),E=u(Y,I.props),E.ref=Ki(S,Y,I),E.return=S,S=E;break e}o(S,Y);break}else r(S,Y);Y=Y.sibling}I.type===Ce?(E=pr(I.props.children,S.mode,j,I.key),E.return=S,S=E):(j=Go(I.type,I.key,I.props,null,S.mode,j),j.ref=Ki(S,E,I),j.return=S,S=j)}return g(S);case ie:e:{for(Y=I.key;E!==null;){if(E.key===Y)if(E.tag===4&&E.stateNode.containerInfo===I.containerInfo&&E.stateNode.implementation===I.implementation){o(S,E.sibling),E=u(E,I.children||[]),E.return=S,S=E;break e}else{o(S,E);break}else r(S,E);E=E.sibling}E=Fc(I,S.mode,j),E.return=S,S=E}return g(S);case tt:return Y=I._init,ze(S,E,Y(I._payload),j)}if(Ei(I))return H(S,E,I,j);if(X(I))return V(S,E,I,j);ko(S,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,E!==null&&E.tag===6?(o(S,E.sibling),E=u(E,I),E.return=S,S=E):(o(S,E),E=jc(I,S.mode,j),E.return=S,S=E),g(S)):o(S,E)}return ze}var Vr=af(!0),lf=af(!1),Eo=Tn(null),Co=null,$r=null,ql=null;function Kl(){ql=$r=Co=null}function Yl(t){var r=Eo.current;Re(Eo),t._currentValue=r}function Ql(t,r,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===o)break;t=t.return}}function Gr(t,r){Co=t,ql=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(pt=!0),t.firstContext=null)}function bt(t){var r=t._currentValue;if(ql!==t)if(t={context:t,memoizedValue:r,next:null},$r===null){if(Co===null)throw Error(n(308));$r=t,Co.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return r}var ar=null;function Xl(t){ar===null?ar=[t]:ar.push(t)}function cf(t,r,o,l){var u=r.interleaved;return u===null?(o.next=o,Xl(r)):(o.next=u.next,u.next=o),r.interleaved=o,an(t,l)}function an(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Pn=!1;function Jl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ln(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function An(t,r,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(de&2)!==0){var u=l.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),l.pending=r,an(t,o)}return u=l.interleaved,u===null?(r.next=r,Xl(l)):(r.next=u.next,u.next=r),l.interleaved=r,an(t,o)}function So(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var l=r.lanes;l&=t.pendingLanes,o|=l,r.lanes=o,hl(t,o)}}function df(t,r){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=g:h=h.next=g,o=o.next}while(o!==null);h===null?u=h=r:h=h.next=r}else u=h=r;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function Io(t,r,o,l){var u=t.updateQueue;Pn=!1;var h=u.firstBaseUpdate,g=u.lastBaseUpdate,y=u.shared.pending;if(y!==null){u.shared.pending=null;var k=y,N=k.next;k.next=null,g===null?h=N:g.next=N,g=k;var D=t.alternate;D!==null&&(D=D.updateQueue,y=D.lastBaseUpdate,y!==g&&(y===null?D.firstBaseUpdate=N:y.next=N,D.lastBaseUpdate=k))}if(h!==null){var L=u.baseState;g=0,D=N=k=null,y=h;do{var P=y.lane,z=y.eventTime;if((l&P)===P){D!==null&&(D=D.next={eventTime:z,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var H=t,V=y;switch(P=r,z=o,V.tag){case 1:if(H=V.payload,typeof H=="function"){L=H.call(z,L,P);break e}L=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=V.payload,P=typeof H=="function"?H.call(z,L,P):H,P==null)break e;L=B({},L,P);break e;case 2:Pn=!0}}y.callback!==null&&y.lane!==0&&(t.flags|=64,P=u.effects,P===null?u.effects=[y]:P.push(y))}else z={eventTime:z,lane:P,tag:y.tag,payload:y.payload,callback:y.callback,next:null},D===null?(N=D=z,k=L):D=D.next=z,g|=P;if(y=y.next,y===null){if(y=u.shared.pending,y===null)break;P=y,y=P.next,P.next=null,u.lastBaseUpdate=P,u.shared.pending=null}}while(!0);if(D===null&&(k=L),u.baseState=k,u.firstBaseUpdate=N,u.lastBaseUpdate=D,r=u.shared.interleaved,r!==null){u=r;do g|=u.lane,u=u.next;while(u!==r)}else h===null&&(u.shared.lanes=0);ur|=g,t.lanes=g,t.memoizedState=L}}function hf(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var l=t[r],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var Yi={},Xt=Tn(Yi),Qi=Tn(Yi),Xi=Tn(Yi);function lr(t){if(t===Yi)throw Error(n(174));return t}function Zl(t,r){switch(Ie(Xi,r),Ie(Qi,t),Ie(Xt,Yi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:el(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=el(r,t)}Re(Xt),Ie(Xt,r)}function qr(){Re(Xt),Re(Qi),Re(Xi)}function ff(t){lr(Xi.current);var r=lr(Xt.current),o=el(r,t.type);r!==o&&(Ie(Qi,t),Ie(Xt,o))}function ec(t){Qi.current===t&&(Re(Xt),Re(Qi))}var Oe=Tn(0);function No(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var tc=[];function nc(){for(var t=0;t<tc.length;t++)tc[t]._workInProgressVersionPrimary=null;tc.length=0}var To=K.ReactCurrentDispatcher,rc=K.ReactCurrentBatchConfig,cr=0,Le=null,Be=null,$e=null,Ro=!1,Ji=!1,Zi=0,Ov=0;function rt(){throw Error(n(321))}function ic(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Mt(t[o],r[o]))return!1;return!0}function sc(t,r,o,l,u,h){if(cr=h,Le=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,To.current=t===null||t.memoizedState===null?Fv:Uv,t=o(l,u),Ji){h=0;do{if(Ji=!1,Zi=0,25<=h)throw Error(n(301));h+=1,$e=Be=null,r.updateQueue=null,To.current=zv,t=o(l,u)}while(Ji)}if(To.current=Ao,r=Be!==null&&Be.next!==null,cr=0,$e=Be=Le=null,Ro=!1,r)throw Error(n(300));return t}function oc(){var t=Zi!==0;return Zi=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Le.memoizedState=$e=t:$e=$e.next=t,$e}function Pt(){if(Be===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var r=$e===null?Le.memoizedState:$e.next;if(r!==null)$e=r,Be=t;else{if(t===null)throw Error(n(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},$e===null?Le.memoizedState=$e=t:$e=$e.next=t}return $e}function es(t,r){return typeof r=="function"?r(t):r}function ac(t){var r=Pt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Be,u=l.baseQueue,h=o.pending;if(h!==null){if(u!==null){var g=u.next;u.next=h.next,h.next=g}l.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,l=l.baseState;var y=g=null,k=null,N=h;do{var D=N.lane;if((cr&D)===D)k!==null&&(k=k.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),l=N.hasEagerState?N.eagerState:t(l,N.action);else{var L={lane:D,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};k===null?(y=k=L,g=l):k=k.next=L,Le.lanes|=D,ur|=D}N=N.next}while(N!==null&&N!==h);k===null?g=l:k.next=y,Mt(l,r.memoizedState)||(pt=!0),r.memoizedState=l,r.baseState=g,r.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do h=u.lane,Le.lanes|=h,ur|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function lc(t){var r=Pt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,h=r.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do h=t(h,g.action),g=g.next;while(g!==u);Mt(h,r.memoizedState)||(pt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,l]}function pf(){}function mf(t,r){var o=Le,l=Pt(),u=r(),h=!Mt(l.memoizedState,u);if(h&&(l.memoizedState=u,pt=!0),l=l.queue,cc(yf.bind(null,o,l,t),[t]),l.getSnapshot!==r||h||$e!==null&&$e.memoizedState.tag&1){if(o.flags|=2048,ts(9,_f.bind(null,o,l,u,r),void 0,null),Ge===null)throw Error(n(349));(cr&30)!==0||gf(o,r,u)}return u}function gf(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Le.updateQueue,r===null?(r={lastEffect:null,stores:null},Le.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function _f(t,r,o,l){r.value=o,r.getSnapshot=l,vf(r)&&wf(t)}function yf(t,r,o){return o(function(){vf(r)&&wf(t)})}function vf(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Mt(t,o)}catch{return!0}}function wf(t){var r=an(t,1);r!==null&&Wt(r,t,1,-1)}function xf(t){var r=Jt();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},r.queue=t,t=t.dispatch=jv.bind(null,Le,t),[r.memoizedState,t]}function ts(t,r,o,l){return t={tag:t,create:r,destroy:o,deps:l,next:null},r=Le.updateQueue,r===null?(r={lastEffect:null,stores:null},Le.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,r.lastEffect=t)),t}function kf(){return Pt().memoizedState}function bo(t,r,o,l){var u=Jt();Le.flags|=t,u.memoizedState=ts(1|r,o,void 0,l===void 0?null:l)}function Po(t,r,o,l){var u=Pt();l=l===void 0?null:l;var h=void 0;if(Be!==null){var g=Be.memoizedState;if(h=g.destroy,l!==null&&ic(l,g.deps)){u.memoizedState=ts(r,o,h,l);return}}Le.flags|=t,u.memoizedState=ts(1|r,o,h,l)}function Ef(t,r){return bo(8390656,8,t,r)}function cc(t,r){return Po(2048,8,t,r)}function Cf(t,r){return Po(4,2,t,r)}function Sf(t,r){return Po(4,4,t,r)}function If(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Nf(t,r,o){return o=o!=null?o.concat([t]):null,Po(4,4,If.bind(null,r,t),o)}function uc(){}function Tf(t,r){var o=Pt();r=r===void 0?null:r;var l=o.memoizedState;return l!==null&&r!==null&&ic(r,l[1])?l[0]:(o.memoizedState=[t,r],t)}function Rf(t,r){var o=Pt();r=r===void 0?null:r;var l=o.memoizedState;return l!==null&&r!==null&&ic(r,l[1])?l[0]:(t=t(),o.memoizedState=[t,r],t)}function bf(t,r,o){return(cr&21)===0?(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=o):(Mt(o,r)||(o=sh(),Le.lanes|=o,ur|=o,t.baseState=!0),r)}function Lv(t,r){var o=we;we=o!==0&&4>o?o:4,t(!0);var l=rc.transition;rc.transition={};try{t(!1),r()}finally{we=o,rc.transition=l}}function Pf(){return Pt().memoizedState}function Mv(t,r,o){var l=Mn(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Af(t))Df(r,o);else if(o=cf(t,r,o,l),o!==null){var u=ut();Wt(o,t,l,u),Of(o,r,l)}}function jv(t,r,o){var l=Mn(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Af(t))Df(r,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var g=r.lastRenderedState,y=h(g,o);if(u.hasEagerState=!0,u.eagerState=y,Mt(y,g)){var k=r.interleaved;k===null?(u.next=u,Xl(r)):(u.next=k.next,k.next=u),r.interleaved=u;return}}catch{}finally{}o=cf(t,r,u,l),o!==null&&(u=ut(),Wt(o,t,l,u),Of(o,r,l))}}function Af(t){var r=t.alternate;return t===Le||r!==null&&r===Le}function Df(t,r){Ji=Ro=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Of(t,r,o){if((o&4194240)!==0){var l=r.lanes;l&=t.pendingLanes,o|=l,r.lanes=o,hl(t,o)}}var Ao={readContext:bt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},Fv={readContext:bt,useCallback:function(t,r){return Jt().memoizedState=[t,r===void 0?null:r],t},useContext:bt,useEffect:Ef,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,bo(4194308,4,If.bind(null,r,t),o)},useLayoutEffect:function(t,r){return bo(4194308,4,t,r)},useInsertionEffect:function(t,r){return bo(4,2,t,r)},useMemo:function(t,r){var o=Jt();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var l=Jt();return r=o!==void 0?o(r):r,l.memoizedState=l.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},l.queue=t,t=t.dispatch=Mv.bind(null,Le,t),[l.memoizedState,t]},useRef:function(t){var r=Jt();return t={current:t},r.memoizedState=t},useState:xf,useDebugValue:uc,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=xf(!1),r=t[0];return t=Lv.bind(null,t[1]),Jt().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var l=Le,u=Jt();if(Ae){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Ge===null)throw Error(n(349));(cr&30)!==0||gf(l,r,o)}u.memoizedState=o;var h={value:o,getSnapshot:r};return u.queue=h,Ef(yf.bind(null,l,h,t),[t]),l.flags|=2048,ts(9,_f.bind(null,l,h,o,r),void 0,null),o},useId:function(){var t=Jt(),r=Ge.identifierPrefix;if(Ae){var o=on,l=sn;o=(l&~(1<<32-Lt(l)-1)).toString(32)+o,r=":"+r+"R"+o,o=Zi++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Ov++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Uv={readContext:bt,useCallback:Tf,useContext:bt,useEffect:cc,useImperativeHandle:Nf,useInsertionEffect:Cf,useLayoutEffect:Sf,useMemo:Rf,useReducer:ac,useRef:kf,useState:function(){return ac(es)},useDebugValue:uc,useDeferredValue:function(t){var r=Pt();return bf(r,Be.memoizedState,t)},useTransition:function(){var t=ac(es)[0],r=Pt().memoizedState;return[t,r]},useMutableSource:pf,useSyncExternalStore:mf,useId:Pf,unstable_isNewReconciler:!1},zv={readContext:bt,useCallback:Tf,useContext:bt,useEffect:cc,useImperativeHandle:Nf,useInsertionEffect:Cf,useLayoutEffect:Sf,useMemo:Rf,useReducer:lc,useRef:kf,useState:function(){return lc(es)},useDebugValue:uc,useDeferredValue:function(t){var r=Pt();return Be===null?r.memoizedState=t:bf(r,Be.memoizedState,t)},useTransition:function(){var t=lc(es)[0],r=Pt().memoizedState;return[t,r]},useMutableSource:pf,useSyncExternalStore:mf,useId:Pf,unstable_isNewReconciler:!1};function Ft(t,r){if(t&&t.defaultProps){r=B({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function dc(t,r,o,l){r=t.memoizedState,o=o(l,r),o=o==null?r:B({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Do={isMounted:function(t){return(t=t._reactInternals)?nr(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var l=ut(),u=Mn(t),h=ln(l,u);h.payload=r,o!=null&&(h.callback=o),r=An(t,h,u),r!==null&&(Wt(r,t,u,l),So(r,t,u))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var l=ut(),u=Mn(t),h=ln(l,u);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=An(t,h,u),r!==null&&(Wt(r,t,u,l),So(r,t,u))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=ut(),l=Mn(t),u=ln(o,l);u.tag=2,r!=null&&(u.callback=r),r=An(t,u,l),r!==null&&(Wt(r,t,l,o),So(r,t,l))}};function Lf(t,r,o,l,u,h,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,g):r.prototype&&r.prototype.isPureReactComponent?!Wi(o,l)||!Wi(u,h):!0}function Mf(t,r,o){var l=!1,u=Rn,h=r.contextType;return typeof h=="object"&&h!==null?h=bt(h):(u=ft(r)?ir:nt.current,l=r.contextTypes,h=(l=l!=null)?zr(t,u):Rn),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Do,t.stateNode=r,r._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),r}function jf(t,r,o,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,l),r.state!==t&&Do.enqueueReplaceState(r,r.state,null)}function hc(t,r,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Jl(t);var h=r.contextType;typeof h=="object"&&h!==null?u.context=bt(h):(h=ft(r)?ir:nt.current,u.context=zr(t,h)),u.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(dc(t,r,h,o),u.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&Do.enqueueReplaceState(u,u.state,null),Io(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Kr(t,r){try{var o="",l=r;do o+=fe(l),l=l.return;while(l);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:u,digest:null}}function fc(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function pc(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Wv=typeof WeakMap=="function"?WeakMap:Map;function Ff(t,r,o){o=ln(-1,o),o.tag=3,o.payload={element:null};var l=r.value;return o.callback=function(){zo||(zo=!0,Rc=l),pc(t,r)},o}function Uf(t,r,o){o=ln(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;o.payload=function(){return l(u)},o.callback=function(){pc(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){pc(t,r),typeof l!="function"&&(On===null?On=new Set([this]):On.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})}),o}function zf(t,r,o){var l=t.pingCache;if(l===null){l=t.pingCache=new Wv;var u=new Set;l.set(r,u)}else u=l.get(r),u===void 0&&(u=new Set,l.set(r,u));u.has(o)||(u.add(o),t=t0.bind(null,t,r,o),r.then(t,t))}function Wf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Bf(t,r,o,l,u){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=ln(-1,1),r.tag=2,An(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var Bv=K.ReactCurrentOwner,pt=!1;function ct(t,r,o,l){r.child=t===null?lf(r,null,o,l):Vr(r,t.child,o,l)}function Hf(t,r,o,l,u){o=o.render;var h=r.ref;return Gr(r,u),l=sc(t,r,o,l,h,u),o=oc(),t!==null&&!pt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,cn(t,r,u)):(Ae&&o&&Bl(r),r.flags|=1,ct(t,r,l,u),r.child)}function Vf(t,r,o,l,u){if(t===null){var h=o.type;return typeof h=="function"&&!Mc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,$f(t,r,h,l,u)):(t=Go(o.type,null,l,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,(t.lanes&u)===0){var g=h.memoizedProps;if(o=o.compare,o=o!==null?o:Wi,o(g,l)&&t.ref===r.ref)return cn(t,r,u)}return r.flags|=1,t=Fn(h,l),t.ref=r.ref,t.return=r,r.child=t}function $f(t,r,o,l,u){if(t!==null){var h=t.memoizedProps;if(Wi(h,l)&&t.ref===r.ref)if(pt=!1,r.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(pt=!0);else return r.lanes=t.lanes,cn(t,r,u)}return mc(t,r,o,l,u)}function Gf(t,r,o){var l=r.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Qr,It),It|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Ie(Qr,It),It|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Ie(Qr,It),It|=l}else h!==null?(l=h.baseLanes|o,r.memoizedState=null):l=o,Ie(Qr,It),It|=l;return ct(t,r,u,o),r.child}function qf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function mc(t,r,o,l,u){var h=ft(o)?ir:nt.current;return h=zr(r,h),Gr(r,u),o=sc(t,r,o,l,h,u),l=oc(),t!==null&&!pt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,cn(t,r,u)):(Ae&&l&&Bl(r),r.flags|=1,ct(t,r,o,u),r.child)}function Kf(t,r,o,l,u){if(ft(o)){var h=!0;_o(r)}else h=!1;if(Gr(r,u),r.stateNode===null)Lo(t,r),Mf(r,o,l),hc(r,o,l,u),l=!0;else if(t===null){var g=r.stateNode,y=r.memoizedProps;g.props=y;var k=g.context,N=o.contextType;typeof N=="object"&&N!==null?N=bt(N):(N=ft(o)?ir:nt.current,N=zr(r,N));var D=o.getDerivedStateFromProps,L=typeof D=="function"||typeof g.getSnapshotBeforeUpdate=="function";L||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==l||k!==N)&&jf(r,g,l,N),Pn=!1;var P=r.memoizedState;g.state=P,Io(r,l,g,u),k=r.memoizedState,y!==l||P!==k||ht.current||Pn?(typeof D=="function"&&(dc(r,o,D,l),k=r.memoizedState),(y=Pn||Lf(r,o,y,l,P,k,N))?(L||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=k),g.props=l,g.state=k,g.context=N,l=y):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{g=r.stateNode,uf(t,r),y=r.memoizedProps,N=r.type===r.elementType?y:Ft(r.type,y),g.props=N,L=r.pendingProps,P=g.context,k=o.contextType,typeof k=="object"&&k!==null?k=bt(k):(k=ft(o)?ir:nt.current,k=zr(r,k));var z=o.getDerivedStateFromProps;(D=typeof z=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==L||P!==k)&&jf(r,g,l,k),Pn=!1,P=r.memoizedState,g.state=P,Io(r,l,g,u);var H=r.memoizedState;y!==L||P!==H||ht.current||Pn?(typeof z=="function"&&(dc(r,o,z,l),H=r.memoizedState),(N=Pn||Lf(r,o,N,l,P,H,k)||!1)?(D||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,H,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,H,k)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=H),g.props=l,g.state=H,g.context=k,l=N):(typeof g.componentDidUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(r.flags|=1024),l=!1)}return gc(t,r,o,l,h,u)}function gc(t,r,o,l,u,h){qf(t,r);var g=(r.flags&128)!==0;if(!l&&!g)return u&&Jh(r,o,!1),cn(t,r,h);l=r.stateNode,Bv.current=r;var y=g&&typeof o.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,t!==null&&g?(r.child=Vr(r,t.child,null,h),r.child=Vr(r,null,y,h)):ct(t,r,y,h),r.memoizedState=l.state,u&&Jh(r,o,!0),r.child}function Yf(t){var r=t.stateNode;r.pendingContext?Qh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Qh(t,r.context,!1),Zl(t,r.containerInfo)}function Qf(t,r,o,l,u){return Hr(),Gl(u),r.flags|=256,ct(t,r,o,l),r.child}var _c={dehydrated:null,treeContext:null,retryLane:0};function yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xf(t,r,o){var l=r.pendingProps,u=Oe.current,h=!1,g=(r.flags&128)!==0,y;if((y=g)||(y=t!==null&&t.memoizedState===null?!1:(u&2)!==0),y?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Ie(Oe,u&1),t===null)return $l(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(g=l.children,t=l.fallback,h?(l=r.mode,h=r.child,g={mode:"hidden",children:g},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=g):h=qo(g,l,0,null),t=pr(t,l,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=yc(o),r.memoizedState=_c,t):vc(r,g));if(u=t.memoizedState,u!==null&&(y=u.dehydrated,y!==null))return Hv(t,r,g,l,y,u,o);if(h){h=l.fallback,g=r.mode,u=t.child,y=u.sibling;var k={mode:"hidden",children:l.children};return(g&1)===0&&r.child!==u?(l=r.child,l.childLanes=0,l.pendingProps=k,r.deletions=null):(l=Fn(u,k),l.subtreeFlags=u.subtreeFlags&14680064),y!==null?h=Fn(y,h):(h=pr(h,g,o,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,g=t.child.memoizedState,g=g===null?yc(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},h.memoizedState=g,h.childLanes=t.childLanes&~o,r.memoizedState=_c,l}return h=t.child,t=h.sibling,l=Fn(h,{mode:"visible",children:l.children}),(r.mode&1)===0&&(l.lanes=o),l.return=r,l.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=l,r.memoizedState=null,l}function vc(t,r){return r=qo({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Oo(t,r,o,l){return l!==null&&Gl(l),Vr(r,t.child,null,o),t=vc(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Hv(t,r,o,l,u,h,g){if(o)return r.flags&256?(r.flags&=-257,l=fc(Error(n(422))),Oo(t,r,g,l)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=l.fallback,u=r.mode,l=qo({mode:"visible",children:l.children},u,0,null),h=pr(h,u,g,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,(r.mode&1)!==0&&Vr(r,t.child,null,g),r.child.memoizedState=yc(g),r.memoizedState=_c,h);if((r.mode&1)===0)return Oo(t,r,g,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var y=l.dgst;return l=y,h=Error(n(419)),l=fc(h,l,void 0),Oo(t,r,g,l)}if(y=(g&t.childLanes)!==0,pt||y){if(l=Ge,l!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|g))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,an(t,u),Wt(l,t,u,-1))}return Lc(),l=fc(Error(n(421))),Oo(t,r,g,l)}return u.data==="$?"?(r.flags|=128,r.child=t.child,r=n0.bind(null,t),u._reactRetry=r,null):(t=h.treeContext,St=Nn(u.nextSibling),Ct=r,Ae=!0,jt=null,t!==null&&(Tt[Rt++]=sn,Tt[Rt++]=on,Tt[Rt++]=sr,sn=t.id,on=t.overflow,sr=r),r=vc(r,l.children),r.flags|=4096,r)}function Jf(t,r,o){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),Ql(t.return,r,o)}function wc(t,r,o,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=u)}function Zf(t,r,o){var l=r.pendingProps,u=l.revealOrder,h=l.tail;if(ct(t,r,l.children,o),l=Oe.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jf(t,o,r);else if(t.tag===19)Jf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ie(Oe,l),(r.mode&1)===0)r.memoizedState=null;else switch(u){case"forwards":for(o=r.child,u=null;o!==null;)t=o.alternate,t!==null&&No(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=r.child,r.child=null):(u=o.sibling,o.sibling=null),wc(r,!1,u,o,h);break;case"backwards":for(o=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&No(t)===null){r.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}wc(r,!0,o,null,h);break;case"together":wc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Lo(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function cn(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),ur|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Fn(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Fn(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function Vv(t,r,o){switch(r.tag){case 3:Yf(r),Hr();break;case 5:ff(r);break;case 1:ft(r.type)&&_o(r);break;case 4:Zl(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,u=r.memoizedProps.value;Ie(Eo,l._currentValue),l._currentValue=u;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(Ie(Oe,Oe.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Xf(t,r,o):(Ie(Oe,Oe.current&1),t=cn(t,r,o),t!==null?t.sibling:null);Ie(Oe,Oe.current&1);break;case 19:if(l=(o&r.childLanes)!==0,(t.flags&128)!==0){if(l)return Zf(t,r,o);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ie(Oe,Oe.current),l)break;return null;case 22:case 23:return r.lanes=0,Gf(t,r,o)}return cn(t,r,o)}var ep,xc,tp,np;ep=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},xc=function(){},tp=function(t,r,o,l){var u=t.memoizedProps;if(u!==l){t=r.stateNode,lr(Xt.current);var h=null;switch(o){case"input":u=Qa(t,u),l=Qa(t,l),h=[];break;case"select":u=B({},u,{value:void 0}),l=B({},l,{value:void 0}),h=[];break;case"textarea":u=Za(t,u),l=Za(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=po)}tl(o,l);var g;o=null;for(N in u)if(!l.hasOwnProperty(N)&&u.hasOwnProperty(N)&&u[N]!=null)if(N==="style"){var y=u[N];for(g in y)y.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(a.hasOwnProperty(N)?h||(h=[]):(h=h||[]).push(N,null));for(N in l){var k=l[N];if(y=u?.[N],l.hasOwnProperty(N)&&k!==y&&(k!=null||y!=null))if(N==="style")if(y){for(g in y)!y.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in k)k.hasOwnProperty(g)&&y[g]!==k[g]&&(o||(o={}),o[g]=k[g])}else o||(h||(h=[]),h.push(N,o)),o=k;else N==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,y=y?y.__html:void 0,k!=null&&y!==k&&(h=h||[]).push(N,k)):N==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(N,""+k):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(a.hasOwnProperty(N)?(k!=null&&N==="onScroll"&&Te("scroll",t),h||y===k||(h=[])):(h=h||[]).push(N,k))}o&&(h=h||[]).push("style",o);var N=h;(r.updateQueue=N)&&(r.flags|=4)}},np=function(t,r,o,l){o!==l&&(r.flags|=4)};function ns(t,r){if(!Ae)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function it(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(r)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,r}function $v(t,r,o){var l=r.pendingProps;switch(Hl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(r),null;case 1:return ft(r.type)&&go(),it(r),null;case 3:return l=r.stateNode,qr(),Re(ht),Re(nt),nc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(xo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,jt!==null&&(Ac(jt),jt=null))),xc(t,r),it(r),null;case 5:ec(r);var u=lr(Xi.current);if(o=r.type,t!==null&&r.stateNode!=null)tp(t,r,o,l,u),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(n(166));return it(r),null}if(t=lr(Xt.current),xo(r)){l=r.stateNode,o=r.type;var h=r.memoizedProps;switch(l[Qt]=r,l[Gi]=h,t=(r.mode&1)!==0,o){case"dialog":Te("cancel",l),Te("close",l);break;case"iframe":case"object":case"embed":Te("load",l);break;case"video":case"audio":for(u=0;u<Hi.length;u++)Te(Hi[u],l);break;case"source":Te("error",l);break;case"img":case"image":case"link":Te("error",l),Te("load",l);break;case"details":Te("toggle",l);break;case"input":Ld(l,h),Te("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Te("invalid",l);break;case"textarea":Fd(l,h),Te("invalid",l)}tl(o,h),u=null;for(var g in h)if(h.hasOwnProperty(g)){var y=h[g];g==="children"?typeof y=="string"?l.textContent!==y&&(h.suppressHydrationWarning!==!0&&fo(l.textContent,y,t),u=["children",y]):typeof y=="number"&&l.textContent!==""+y&&(h.suppressHydrationWarning!==!0&&fo(l.textContent,y,t),u=["children",""+y]):a.hasOwnProperty(g)&&y!=null&&g==="onScroll"&&Te("scroll",l)}switch(o){case"input":Hs(l),jd(l,h,!0);break;case"textarea":Hs(l),zd(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=po)}l=u,r.updateQueue=l,l!==null&&(r.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=g.createElement(o,{is:l.is}):(t=g.createElement(o),o==="select"&&(g=t,l.multiple?g.multiple=!0:l.size&&(g.size=l.size))):t=g.createElementNS(t,o),t[Qt]=r,t[Gi]=l,ep(t,r,!1,!1),r.stateNode=t;e:{switch(g=nl(o,l),o){case"dialog":Te("cancel",t),Te("close",t),u=l;break;case"iframe":case"object":case"embed":Te("load",t),u=l;break;case"video":case"audio":for(u=0;u<Hi.length;u++)Te(Hi[u],t);u=l;break;case"source":Te("error",t),u=l;break;case"img":case"image":case"link":Te("error",t),Te("load",t),u=l;break;case"details":Te("toggle",t),u=l;break;case"input":Ld(t,l),u=Qa(t,l),Te("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=B({},l,{value:void 0}),Te("invalid",t);break;case"textarea":Fd(t,l),u=Za(t,l),Te("invalid",t);break;default:u=l}tl(o,u),y=u;for(h in y)if(y.hasOwnProperty(h)){var k=y[h];h==="style"?Vd(t,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Bd(t,k)):h==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&Ci(t,k):typeof k=="number"&&Ci(t,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?k!=null&&h==="onScroll"&&Te("scroll",t):k!=null&&G(t,h,k,g))}switch(o){case"input":Hs(t),jd(t,l,!1);break;case"textarea":Hs(t),zd(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ve(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Tr(t,!!l.multiple,h,!1):l.defaultValue!=null&&Tr(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=po)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return it(r),null;case 6:if(t&&r.stateNode!=null)np(t,r,t.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(n(166));if(o=lr(Xi.current),lr(Xt.current),xo(r)){if(l=r.stateNode,o=r.memoizedProps,l[Qt]=r,(h=l.nodeValue!==o)&&(t=Ct,t!==null))switch(t.tag){case 3:fo(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(l.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Qt]=r,r.stateNode=l}return it(r),null;case 13:if(Re(Oe),l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&St!==null&&(r.mode&1)!==0&&(r.flags&128)===0)sf(),Hr(),r.flags|=98560,h=!1;else if(h=xo(r),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Qt]=r}else Hr(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;it(r),h=!1}else jt!==null&&(Ac(jt),jt=null),h=!0;if(!h)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Oe.current&1)!==0?He===0&&(He=3):Lc())),r.updateQueue!==null&&(r.flags|=4),it(r),null);case 4:return qr(),xc(t,r),t===null&&Vi(r.stateNode.containerInfo),it(r),null;case 10:return Yl(r.type._context),it(r),null;case 17:return ft(r.type)&&go(),it(r),null;case 19:if(Re(Oe),h=r.memoizedState,h===null)return it(r),null;if(l=(r.flags&128)!==0,g=h.rendering,g===null)if(l)ns(h,!1);else{if(He!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(g=No(t),g!==null){for(r.flags|=128,ns(h,!1),l=g.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=o,o=r.child;o!==null;)h=o,t=l,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,t=g.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ie(Oe,Oe.current&1|2),r.child}t=t.sibling}h.tail!==null&&Ue()>Xr&&(r.flags|=128,l=!0,ns(h,!1),r.lanes=4194304)}else{if(!l)if(t=No(g),t!==null){if(r.flags|=128,l=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ns(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!Ae)return it(r),null}else 2*Ue()-h.renderingStartTime>Xr&&o!==1073741824&&(r.flags|=128,l=!0,ns(h,!1),r.lanes=4194304);h.isBackwards?(g.sibling=r.child,r.child=g):(o=h.last,o!==null?o.sibling=g:r.child=g,h.last=g)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Ue(),r.sibling=null,o=Oe.current,Ie(Oe,l?o&1|2:o&1),r):(it(r),null);case 22:case 23:return Oc(),l=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(r.flags|=8192),l&&(r.mode&1)!==0?(It&1073741824)!==0&&(it(r),r.subtreeFlags&6&&(r.flags|=8192)):it(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function Gv(t,r){switch(Hl(r),r.tag){case 1:return ft(r.type)&&go(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return qr(),Re(ht),Re(nt),nc(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return ec(r),null;case 13:if(Re(Oe),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Hr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Re(Oe),null;case 4:return qr(),null;case 10:return Yl(r.type._context),null;case 22:case 23:return Oc(),null;case 24:return null;default:return null}}var Mo=!1,st=!1,qv=typeof WeakSet=="function"?WeakSet:Set,W=null;function Yr(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){je(t,r,l)}else o.current=null}function kc(t,r,o){try{o()}catch(l){je(t,r,l)}}var rp=!1;function Kv(t,r){if(Ol=to,t=Oh(),Il(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var g=0,y=-1,k=-1,N=0,D=0,L=t,P=null;t:for(;;){for(var z;L!==o||u!==0&&L.nodeType!==3||(y=g+u),L!==h||l!==0&&L.nodeType!==3||(k=g+l),L.nodeType===3&&(g+=L.nodeValue.length),(z=L.firstChild)!==null;)P=L,L=z;for(;;){if(L===t)break t;if(P===o&&++N===u&&(y=g),P===h&&++D===l&&(k=g),(z=L.nextSibling)!==null)break;L=P,P=L.parentNode}L=z}o=y===-1||k===-1?null:{start:y,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ll={focusedElem:t,selectionRange:o},to=!1,W=r;W!==null;)if(r=W,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,W=t;else for(;W!==null;){r=W;try{var H=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var V=H.memoizedProps,ze=H.memoizedState,S=r.stateNode,E=S.getSnapshotBeforeUpdate(r.elementType===r.type?V:Ft(r.type,V),ze);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var I=r.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(j){je(r,r.return,j)}if(t=r.sibling,t!==null){t.return=r.return,W=t;break}W=r.return}return H=rp,rp=!1,H}function rs(t,r,o){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&kc(r,o,h)}u=u.next}while(u!==l)}}function jo(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==r)}}function Ec(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function ip(t){var r=t.alternate;r!==null&&(t.alternate=null,ip(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Qt],delete r[Gi],delete r[Ul],delete r[bv],delete r[Pv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sp(t){return t.tag===5||t.tag===3||t.tag===4}function op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cc(t,r,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=po));else if(l!==4&&(t=t.child,t!==null))for(Cc(t,r,o),t=t.sibling;t!==null;)Cc(t,r,o),t=t.sibling}function Sc(t,r,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Sc(t,r,o),t=t.sibling;t!==null;)Sc(t,r,o),t=t.sibling}var Je=null,Ut=!1;function Dn(t,r,o){for(o=o.child;o!==null;)ap(t,r,o),o=o.sibling}function ap(t,r,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Ys,o)}catch{}switch(o.tag){case 5:st||Yr(o,r);case 6:var l=Je,u=Ut;Je=null,Dn(t,r,o),Je=l,Ut=u,Je!==null&&(Ut?(t=Je,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Je.removeChild(o.stateNode));break;case 18:Je!==null&&(Ut?(t=Je,o=o.stateNode,t.nodeType===8?Fl(t.parentNode,o):t.nodeType===1&&Fl(t,o),Li(t)):Fl(Je,o.stateNode));break;case 4:l=Je,u=Ut,Je=o.stateNode.containerInfo,Ut=!0,Dn(t,r,o),Je=l,Ut=u;break;case 0:case 11:case 14:case 15:if(!st&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,g=h.destroy;h=h.tag,g!==void 0&&((h&2)!==0||(h&4)!==0)&&kc(o,r,g),u=u.next}while(u!==l)}Dn(t,r,o);break;case 1:if(!st&&(Yr(o,r),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(y){je(o,r,y)}Dn(t,r,o);break;case 21:Dn(t,r,o);break;case 22:o.mode&1?(st=(l=st)||o.memoizedState!==null,Dn(t,r,o),st=l):Dn(t,r,o);break;default:Dn(t,r,o)}}function lp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new qv),r.forEach(function(l){var u=r0.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function zt(t,r){var o=r.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var h=t,g=r,y=g;e:for(;y!==null;){switch(y.tag){case 5:Je=y.stateNode,Ut=!1;break e;case 3:Je=y.stateNode.containerInfo,Ut=!0;break e;case 4:Je=y.stateNode.containerInfo,Ut=!0;break e}y=y.return}if(Je===null)throw Error(n(160));ap(h,g,u),Je=null,Ut=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch(N){je(u,r,N)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)cp(r,t),r=r.sibling}function cp(t,r){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(r,t),Zt(t),l&4){try{rs(3,t,t.return),jo(3,t)}catch(V){je(t,t.return,V)}try{rs(5,t,t.return)}catch(V){je(t,t.return,V)}}break;case 1:zt(r,t),Zt(t),l&512&&o!==null&&Yr(o,o.return);break;case 5:if(zt(r,t),Zt(t),l&512&&o!==null&&Yr(o,o.return),t.flags&32){var u=t.stateNode;try{Ci(u,"")}catch(V){je(t,t.return,V)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,g=o!==null?o.memoizedProps:h,y=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{y==="input"&&h.type==="radio"&&h.name!=null&&Md(u,h),nl(y,g);var N=nl(y,h);for(g=0;g<k.length;g+=2){var D=k[g],L=k[g+1];D==="style"?Vd(u,L):D==="dangerouslySetInnerHTML"?Bd(u,L):D==="children"?Ci(u,L):G(u,D,L,N)}switch(y){case"input":Xa(u,h);break;case"textarea":Ud(u,h);break;case"select":var P=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var z=h.value;z!=null?Tr(u,!!h.multiple,z,!1):P!==!!h.multiple&&(h.defaultValue!=null?Tr(u,!!h.multiple,h.defaultValue,!0):Tr(u,!!h.multiple,h.multiple?[]:"",!1))}u[Gi]=h}catch(V){je(t,t.return,V)}}break;case 6:if(zt(r,t),Zt(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(V){je(t,t.return,V)}}break;case 3:if(zt(r,t),Zt(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Li(r.containerInfo)}catch(V){je(t,t.return,V)}break;case 4:zt(r,t),Zt(t);break;case 13:zt(r,t),Zt(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Tc=Ue())),l&4&&lp(t);break;case 22:if(D=o!==null&&o.memoizedState!==null,t.mode&1?(st=(N=st)||D,zt(r,t),st=N):zt(r,t),Zt(t),l&8192){if(N=t.memoizedState!==null,(t.stateNode.isHidden=N)&&!D&&(t.mode&1)!==0)for(W=t,D=t.child;D!==null;){for(L=W=D;W!==null;){switch(P=W,z=P.child,P.tag){case 0:case 11:case 14:case 15:rs(4,P,P.return);break;case 1:Yr(P,P.return);var H=P.stateNode;if(typeof H.componentWillUnmount=="function"){l=P,o=P.return;try{r=l,H.props=r.memoizedProps,H.state=r.memoizedState,H.componentWillUnmount()}catch(V){je(l,o,V)}}break;case 5:Yr(P,P.return);break;case 22:if(P.memoizedState!==null){hp(L);continue}}z!==null?(z.return=P,W=z):hp(L)}D=D.sibling}e:for(D=null,L=t;;){if(L.tag===5){if(D===null){D=L;try{u=L.stateNode,N?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(y=L.stateNode,k=L.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null,y.style.display=Hd("display",g))}catch(V){je(t,t.return,V)}}}else if(L.tag===6){if(D===null)try{L.stateNode.nodeValue=N?"":L.memoizedProps}catch(V){je(t,t.return,V)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===t)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===t)break e;for(;L.sibling===null;){if(L.return===null||L.return===t)break e;D===L&&(D=null),L=L.return}D===L&&(D=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:zt(r,t),Zt(t),l&4&&lp(t);break;case 21:break;default:zt(r,t),Zt(t)}}function Zt(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(sp(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Ci(u,""),l.flags&=-33);var h=op(t);Sc(t,h,u);break;case 3:case 4:var g=l.stateNode.containerInfo,y=op(t);Cc(t,y,g);break;default:throw Error(n(161))}}catch(k){je(t,t.return,k)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Yv(t,r,o){W=t,up(t)}function up(t,r,o){for(var l=(t.mode&1)!==0;W!==null;){var u=W,h=u.child;if(u.tag===22&&l){var g=u.memoizedState!==null||Mo;if(!g){var y=u.alternate,k=y!==null&&y.memoizedState!==null||st;y=Mo;var N=st;if(Mo=g,(st=k)&&!N)for(W=u;W!==null;)g=W,k=g.child,g.tag===22&&g.memoizedState!==null?fp(u):k!==null?(k.return=g,W=k):fp(u);for(;h!==null;)W=h,up(h),h=h.sibling;W=u,Mo=y,st=N}dp(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,W=h):dp(t)}}function dp(t){for(;W!==null;){var r=W;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:st||jo(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!st)if(o===null)l.componentDidMount();else{var u=r.elementType===r.type?o.memoizedProps:Ft(r.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&hf(r,h,l);break;case 3:var g=r.updateQueue;if(g!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}hf(r,g,o)}break;case 5:var y=r.stateNode;if(o===null&&r.flags&4){o=y;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var N=r.alternate;if(N!==null){var D=N.memoizedState;if(D!==null){var L=D.dehydrated;L!==null&&Li(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}st||r.flags&512&&Ec(r)}catch(P){je(r,r.return,P)}}if(r===t){W=null;break}if(o=r.sibling,o!==null){o.return=r.return,W=o;break}W=r.return}}function hp(t){for(;W!==null;){var r=W;if(r===t){W=null;break}var o=r.sibling;if(o!==null){o.return=r.return,W=o;break}W=r.return}}function fp(t){for(;W!==null;){var r=W;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{jo(4,r)}catch(k){je(r,o,k)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var u=r.return;try{l.componentDidMount()}catch(k){je(r,u,k)}}var h=r.return;try{Ec(r)}catch(k){je(r,h,k)}break;case 5:var g=r.return;try{Ec(r)}catch(k){je(r,g,k)}}}catch(k){je(r,r.return,k)}if(r===t){W=null;break}var y=r.sibling;if(y!==null){y.return=r.return,W=y;break}W=r.return}}var Qv=Math.ceil,Fo=K.ReactCurrentDispatcher,Ic=K.ReactCurrentOwner,At=K.ReactCurrentBatchConfig,de=0,Ge=null,We=null,Ze=0,It=0,Qr=Tn(0),He=0,is=null,ur=0,Uo=0,Nc=0,ss=null,mt=null,Tc=0,Xr=1/0,un=null,zo=!1,Rc=null,On=null,Wo=!1,Ln=null,Bo=0,os=0,bc=null,Ho=-1,Vo=0;function ut(){return(de&6)!==0?Ue():Ho!==-1?Ho:Ho=Ue()}function Mn(t){return(t.mode&1)===0?1:(de&2)!==0&&Ze!==0?Ze&-Ze:Dv.transition!==null?(Vo===0&&(Vo=sh()),Vo):(t=we,t!==0||(t=window.event,t=t===void 0?16:ph(t.type)),t)}function Wt(t,r,o,l){if(50<os)throw os=0,bc=null,Error(n(185));bi(t,o,l),((de&2)===0||t!==Ge)&&(t===Ge&&((de&2)===0&&(Uo|=o),He===4&&jn(t,Ze)),gt(t,l),o===1&&de===0&&(r.mode&1)===0&&(Xr=Ue()+500,yo&&bn()))}function gt(t,r){var o=t.callbackNode;Dy(t,r);var l=Js(t,t===Ge?Ze:0);if(l===0)o!==null&&nh(o),t.callbackNode=null,t.callbackPriority=0;else if(r=l&-l,t.callbackPriority!==r){if(o!=null&&nh(o),r===1)t.tag===0?Av(mp.bind(null,t)):Zh(mp.bind(null,t)),Tv(function(){(de&6)===0&&bn()}),o=null;else{switch(oh(l)){case 1:o=cl;break;case 4:o=rh;break;case 16:o=Ks;break;case 536870912:o=ih;break;default:o=Ks}o=Ep(o,pp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function pp(t,r){if(Ho=-1,Vo=0,(de&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Jr()&&t.callbackNode!==o)return null;var l=Js(t,t===Ge?Ze:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||r)r=$o(t,l);else{r=l;var u=de;de|=2;var h=_p();(Ge!==t||Ze!==r)&&(un=null,Xr=Ue()+500,hr(t,r));do try{Zv();break}catch(y){gp(t,y)}while(!0);Kl(),Fo.current=h,de=u,We!==null?r=0:(Ge=null,Ze=0,r=He)}if(r!==0){if(r===2&&(u=ul(t),u!==0&&(l=u,r=Pc(t,u))),r===1)throw o=is,hr(t,0),jn(t,l),gt(t,Ue()),o;if(r===6)jn(t,l);else{if(u=t.current.alternate,(l&30)===0&&!Xv(u)&&(r=$o(t,l),r===2&&(h=ul(t),h!==0&&(l=h,r=Pc(t,h))),r===1))throw o=is,hr(t,0),jn(t,l),gt(t,Ue()),o;switch(t.finishedWork=u,t.finishedLanes=l,r){case 0:case 1:throw Error(n(345));case 2:fr(t,mt,un);break;case 3:if(jn(t,l),(l&130023424)===l&&(r=Tc+500-Ue(),10<r)){if(Js(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){ut(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=jl(fr.bind(null,t,mt,un),r);break}fr(t,mt,un);break;case 4:if(jn(t,l),(l&4194240)===l)break;for(r=t.eventTimes,u=-1;0<l;){var g=31-Lt(l);h=1<<g,g=r[g],g>u&&(u=g),l&=~h}if(l=u,l=Ue()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Qv(l/1960))-l,10<l){t.timeoutHandle=jl(fr.bind(null,t,mt,un),l);break}fr(t,mt,un);break;case 5:fr(t,mt,un);break;default:throw Error(n(329))}}}return gt(t,Ue()),t.callbackNode===o?pp.bind(null,t):null}function Pc(t,r){var o=ss;return t.current.memoizedState.isDehydrated&&(hr(t,r).flags|=256),t=$o(t,r),t!==2&&(r=mt,mt=o,r!==null&&Ac(r)),t}function Ac(t){mt===null?mt=t:mt.push.apply(mt,t)}function Xv(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],h=u.getSnapshot;u=u.value;try{if(!Mt(h(),u))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function jn(t,r){for(r&=~Nc,r&=~Uo,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Lt(r),l=1<<o;t[o]=-1,r&=~l}}function mp(t){if((de&6)!==0)throw Error(n(327));Jr();var r=Js(t,0);if((r&1)===0)return gt(t,Ue()),null;var o=$o(t,r);if(t.tag!==0&&o===2){var l=ul(t);l!==0&&(r=l,o=Pc(t,l))}if(o===1)throw o=is,hr(t,0),jn(t,r),gt(t,Ue()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,fr(t,mt,un),gt(t,Ue()),null}function Dc(t,r){var o=de;de|=1;try{return t(r)}finally{de=o,de===0&&(Xr=Ue()+500,yo&&bn())}}function dr(t){Ln!==null&&Ln.tag===0&&(de&6)===0&&Jr();var r=de;de|=1;var o=At.transition,l=we;try{if(At.transition=null,we=1,t)return t()}finally{we=l,At.transition=o,de=r,(de&6)===0&&bn()}}function Oc(){It=Qr.current,Re(Qr)}function hr(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Nv(o)),We!==null)for(o=We.return;o!==null;){var l=o;switch(Hl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&go();break;case 3:qr(),Re(ht),Re(nt),nc();break;case 5:ec(l);break;case 4:qr();break;case 13:Re(Oe);break;case 19:Re(Oe);break;case 10:Yl(l.type._context);break;case 22:case 23:Oc()}o=o.return}if(Ge=t,We=t=Fn(t.current,null),Ze=It=r,He=0,is=null,Nc=Uo=ur=0,mt=ss=null,ar!==null){for(r=0;r<ar.length;r++)if(o=ar[r],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,h=o.pending;if(h!==null){var g=h.next;h.next=u,l.next=g}o.pending=l}ar=null}return t}function gp(t,r){do{var o=We;try{if(Kl(),To.current=Ao,Ro){for(var l=Le.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Ro=!1}if(cr=0,$e=Be=Le=null,Ji=!1,Zi=0,Ic.current=null,o===null||o.return===null){He=1,is=r,We=null;break}e:{var h=t,g=o.return,y=o,k=r;if(r=Ze,y.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var N=k,D=y,L=D.tag;if((D.mode&1)===0&&(L===0||L===11||L===15)){var P=D.alternate;P?(D.updateQueue=P.updateQueue,D.memoizedState=P.memoizedState,D.lanes=P.lanes):(D.updateQueue=null,D.memoizedState=null)}var z=Wf(g);if(z!==null){z.flags&=-257,Bf(z,g,y,h,r),z.mode&1&&zf(h,N,r),r=z,k=N;var H=r.updateQueue;if(H===null){var V=new Set;V.add(k),r.updateQueue=V}else H.add(k);break e}else{if((r&1)===0){zf(h,N,r),Lc();break e}k=Error(n(426))}}else if(Ae&&y.mode&1){var ze=Wf(g);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),Bf(ze,g,y,h,r),Gl(Kr(k,y));break e}}h=k=Kr(k,y),He!==4&&(He=2),ss===null?ss=[h]:ss.push(h),h=g;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var S=Ff(h,k,r);df(h,S);break e;case 1:y=k;var E=h.type,I=h.stateNode;if((h.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(On===null||!On.has(I)))){h.flags|=65536,r&=-r,h.lanes|=r;var j=Uf(h,y,r);df(h,j);break e}}h=h.return}while(h!==null)}vp(o)}catch($){r=$,We===o&&o!==null&&(We=o=o.return);continue}break}while(!0)}function _p(){var t=Fo.current;return Fo.current=Ao,t===null?Ao:t}function Lc(){(He===0||He===3||He===2)&&(He=4),Ge===null||(ur&268435455)===0&&(Uo&268435455)===0||jn(Ge,Ze)}function $o(t,r){var o=de;de|=2;var l=_p();(Ge!==t||Ze!==r)&&(un=null,hr(t,r));do try{Jv();break}catch(u){gp(t,u)}while(!0);if(Kl(),de=o,Fo.current=l,We!==null)throw Error(n(261));return Ge=null,Ze=0,He}function Jv(){for(;We!==null;)yp(We)}function Zv(){for(;We!==null&&!Cy();)yp(We)}function yp(t){var r=kp(t.alternate,t,It);t.memoizedProps=t.pendingProps,r===null?vp(t):We=r,Ic.current=null}function vp(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=$v(o,r,It),o!==null){We=o;return}}else{if(o=Gv(o,r),o!==null){o.flags&=32767,We=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,We=null;return}}if(r=r.sibling,r!==null){We=r;return}We=r=t}while(r!==null);He===0&&(He=5)}function fr(t,r,o){var l=we,u=At.transition;try{At.transition=null,we=1,e0(t,r,o,l)}finally{At.transition=u,we=l}return null}function e0(t,r,o,l){do Jr();while(Ln!==null);if((de&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Oy(t,h),t===Ge&&(We=Ge=null,Ze=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Wo||(Wo=!0,Ep(Ks,function(){return Jr(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=At.transition,At.transition=null;var g=we;we=1;var y=de;de|=4,Ic.current=null,Kv(t,o),cp(o,t),wv(Ll),to=!!Ol,Ll=Ol=null,t.current=o,Yv(o),Sy(),de=y,we=g,At.transition=h}else t.current=o;if(Wo&&(Wo=!1,Ln=t,Bo=u),h=t.pendingLanes,h===0&&(On=null),Ty(o.stateNode),gt(t,Ue()),r!==null)for(l=t.onRecoverableError,o=0;o<r.length;o++)u=r[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(zo)throw zo=!1,t=Rc,Rc=null,t;return(Bo&1)!==0&&t.tag!==0&&Jr(),h=t.pendingLanes,(h&1)!==0?t===bc?os++:(os=0,bc=t):os=0,bn(),null}function Jr(){if(Ln!==null){var t=oh(Bo),r=At.transition,o=we;try{if(At.transition=null,we=16>t?16:t,Ln===null)var l=!1;else{if(t=Ln,Ln=null,Bo=0,(de&6)!==0)throw Error(n(331));var u=de;for(de|=4,W=t.current;W!==null;){var h=W,g=h.child;if((W.flags&16)!==0){var y=h.deletions;if(y!==null){for(var k=0;k<y.length;k++){var N=y[k];for(W=N;W!==null;){var D=W;switch(D.tag){case 0:case 11:case 15:rs(8,D,h)}var L=D.child;if(L!==null)L.return=D,W=L;else for(;W!==null;){D=W;var P=D.sibling,z=D.return;if(ip(D),D===N){W=null;break}if(P!==null){P.return=z,W=P;break}W=z}}}var H=h.alternate;if(H!==null){var V=H.child;if(V!==null){H.child=null;do{var ze=V.sibling;V.sibling=null,V=ze}while(V!==null)}}W=h}}if((h.subtreeFlags&2064)!==0&&g!==null)g.return=h,W=g;else e:for(;W!==null;){if(h=W,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:rs(9,h,h.return)}var S=h.sibling;if(S!==null){S.return=h.return,W=S;break e}W=h.return}}var E=t.current;for(W=E;W!==null;){g=W;var I=g.child;if((g.subtreeFlags&2064)!==0&&I!==null)I.return=g,W=I;else e:for(g=E;W!==null;){if(y=W,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:jo(9,y)}}catch($){je(y,y.return,$)}if(y===g){W=null;break e}var j=y.sibling;if(j!==null){j.return=y.return,W=j;break e}W=y.return}}if(de=u,bn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Ys,t)}catch{}l=!0}return l}finally{we=o,At.transition=r}}return!1}function wp(t,r,o){r=Kr(o,r),r=Ff(t,r,1),t=An(t,r,1),r=ut(),t!==null&&(bi(t,1,r),gt(t,r))}function je(t,r,o){if(t.tag===3)wp(t,t,o);else for(;r!==null;){if(r.tag===3){wp(r,t,o);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(On===null||!On.has(l))){t=Kr(o,t),t=Uf(r,t,1),r=An(r,t,1),t=ut(),r!==null&&(bi(r,1,t),gt(r,t));break}}r=r.return}}function t0(t,r,o){var l=t.pingCache;l!==null&&l.delete(r),r=ut(),t.pingedLanes|=t.suspendedLanes&o,Ge===t&&(Ze&o)===o&&(He===4||He===3&&(Ze&130023424)===Ze&&500>Ue()-Tc?hr(t,0):Nc|=o),gt(t,r)}function xp(t,r){r===0&&((t.mode&1)===0?r=1:(r=Xs,Xs<<=1,(Xs&130023424)===0&&(Xs=4194304)));var o=ut();t=an(t,r),t!==null&&(bi(t,r,o),gt(t,o))}function n0(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),xp(t,o)}function r0(t,r){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(r),xp(t,o)}var kp;kp=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||ht.current)pt=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return pt=!1,Vv(t,r,o);pt=(t.flags&131072)!==0}else pt=!1,Ae&&(r.flags&1048576)!==0&&ef(r,wo,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;Lo(t,r),t=r.pendingProps;var u=zr(r,nt.current);Gr(r,o),u=sc(null,r,l,t,u,o);var h=oc();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ft(l)?(h=!0,_o(r)):h=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Jl(r),u.updater=Do,r.stateNode=u,u._reactInternals=r,hc(r,l,t,o),r=gc(null,r,l,!0,h,o)):(r.tag=0,Ae&&h&&Bl(r),ct(null,r,u,o),r=r.child),r;case 16:l=r.elementType;e:{switch(Lo(t,r),t=r.pendingProps,u=l._init,l=u(l._payload),r.type=l,u=r.tag=s0(l),t=Ft(l,t),u){case 0:r=mc(null,r,l,t,o);break e;case 1:r=Kf(null,r,l,t,o);break e;case 11:r=Hf(null,r,l,t,o);break e;case 14:r=Vf(null,r,l,Ft(l.type,t),o);break e}throw Error(n(306,l,""))}return r;case 0:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:Ft(l,u),mc(t,r,l,u,o);case 1:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:Ft(l,u),Kf(t,r,l,u,o);case 3:e:{if(Yf(r),t===null)throw Error(n(387));l=r.pendingProps,h=r.memoizedState,u=h.element,uf(t,r),Io(r,l,null,o);var g=r.memoizedState;if(l=g.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){u=Kr(Error(n(423)),r),r=Qf(t,r,l,o,u);break e}else if(l!==u){u=Kr(Error(n(424)),r),r=Qf(t,r,l,o,u);break e}else for(St=Nn(r.stateNode.containerInfo.firstChild),Ct=r,Ae=!0,jt=null,o=lf(r,null,l,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Hr(),l===u){r=cn(t,r,o);break e}ct(t,r,l,o)}r=r.child}return r;case 5:return ff(r),t===null&&$l(r),l=r.type,u=r.pendingProps,h=t!==null?t.memoizedProps:null,g=u.children,Ml(l,u)?g=null:h!==null&&Ml(l,h)&&(r.flags|=32),qf(t,r),ct(t,r,g,o),r.child;case 6:return t===null&&$l(r),null;case 13:return Xf(t,r,o);case 4:return Zl(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=Vr(r,null,l,o):ct(t,r,l,o),r.child;case 11:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:Ft(l,u),Hf(t,r,l,u,o);case 7:return ct(t,r,r.pendingProps,o),r.child;case 8:return ct(t,r,r.pendingProps.children,o),r.child;case 12:return ct(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(l=r.type._context,u=r.pendingProps,h=r.memoizedProps,g=u.value,Ie(Eo,l._currentValue),l._currentValue=g,h!==null)if(Mt(h.value,g)){if(h.children===u.children&&!ht.current){r=cn(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var y=h.dependencies;if(y!==null){g=h.child;for(var k=y.firstContext;k!==null;){if(k.context===l){if(h.tag===1){k=ln(-1,o&-o),k.tag=2;var N=h.updateQueue;if(N!==null){N=N.shared;var D=N.pending;D===null?k.next=k:(k.next=D.next,D.next=k),N.pending=k}}h.lanes|=o,k=h.alternate,k!==null&&(k.lanes|=o),Ql(h.return,o,r),y.lanes|=o;break}k=k.next}}else if(h.tag===10)g=h.type===r.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(n(341));g.lanes|=o,y=g.alternate,y!==null&&(y.lanes|=o),Ql(g,o,r),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===r){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}ct(t,r,u.children,o),r=r.child}return r;case 9:return u=r.type,l=r.pendingProps.children,Gr(r,o),u=bt(u),l=l(u),r.flags|=1,ct(t,r,l,o),r.child;case 14:return l=r.type,u=Ft(l,r.pendingProps),u=Ft(l.type,u),Vf(t,r,l,u,o);case 15:return $f(t,r,r.type,r.pendingProps,o);case 17:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:Ft(l,u),Lo(t,r),r.tag=1,ft(l)?(t=!0,_o(r)):t=!1,Gr(r,o),Mf(r,l,u),hc(r,l,u,o),gc(null,r,l,!0,t,o);case 19:return Zf(t,r,o);case 22:return Gf(t,r,o)}throw Error(n(156,r.tag))};function Ep(t,r){return th(t,r)}function i0(t,r,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,r,o,l){return new i0(t,r,o,l)}function Mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function s0(t){if(typeof t=="function")return Mc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===De)return 11;if(t===Nt)return 14}return 2}function Fn(t,r){var o=t.alternate;return o===null?(o=Dt(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Go(t,r,o,l,u,h){var g=2;if(l=t,typeof t=="function")Mc(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case Ce:return pr(o.children,u,h,r);case he:g=8,u|=8;break;case at:return t=Dt(12,o,r,u|2),t.elementType=at,t.lanes=h,t;case Xe:return t=Dt(13,o,r,u),t.elementType=Xe,t.lanes=h,t;case lt:return t=Dt(19,o,r,u),t.elementType=lt,t.lanes=h,t;case Me:return qo(o,u,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ne:g=10;break e;case xe:g=9;break e;case De:g=11;break e;case Nt:g=14;break e;case tt:g=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=Dt(g,o,r,u),r.elementType=t,r.type=l,r.lanes=h,r}function pr(t,r,o,l){return t=Dt(7,t,l,r),t.lanes=o,t}function qo(t,r,o,l){return t=Dt(22,t,l,r),t.elementType=Me,t.lanes=o,t.stateNode={isHidden:!1},t}function jc(t,r,o){return t=Dt(6,t,null,r),t.lanes=o,t}function Fc(t,r,o){return r=Dt(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function o0(t,r,o,l,u){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dl(0),this.expirationTimes=dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dl(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Uc(t,r,o,l,u,h,g,y,k){return t=new o0(t,r,o,y,k),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Dt(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(h),t}function a0(t,r,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:l==null?null:""+l,children:t,containerInfo:r,implementation:o}}function Cp(t){if(!t)return Rn;t=t._reactInternals;e:{if(nr(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ft(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ft(o))return Xh(t,o,r)}return r}function Sp(t,r,o,l,u,h,g,y,k){return t=Uc(o,l,!0,t,u,h,g,y,k),t.context=Cp(null),o=t.current,l=ut(),u=Mn(o),h=ln(l,u),h.callback=r??null,An(o,h,u),t.current.lanes=u,bi(t,u,l),gt(t,l),t}function Ko(t,r,o,l){var u=r.current,h=ut(),g=Mn(u);return o=Cp(o),r.context===null?r.context=o:r.pendingContext=o,r=ln(h,g),r.payload={element:t},l=l===void 0?null:l,l!==null&&(r.callback=l),t=An(u,r,g),t!==null&&(Wt(t,u,g,h),So(t,u,g)),g}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function zc(t,r){Ip(t,r),(t=t.alternate)&&Ip(t,r)}function l0(){return null}var Np=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wc(t){this._internalRoot=t}Qo.prototype.render=Wc.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Ko(t,r,null,null)},Qo.prototype.unmount=Wc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;dr(function(){Ko(null,t,null,null)}),r[nn]=null}};function Qo(t){this._internalRoot=t}Qo.prototype.unstable_scheduleHydration=function(t){if(t){var r=ch();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Cn.length&&r!==0&&r<Cn[o].priority;o++);Cn.splice(o,0,t),o===0&&hh(t)}};function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function c0(t,r,o,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var N=Yo(g);h.call(N)}}var g=Sp(r,l,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=g,t[nn]=g.current,Vi(t.nodeType===8?t.parentNode:t),dr(),g}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var y=l;l=function(){var N=Yo(k);y.call(N)}}var k=Uc(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=k,t[nn]=k.current,Vi(t.nodeType===8?t.parentNode:t),dr(function(){Ko(r,k,o,l)}),k}function Jo(t,r,o,l,u){var h=o._reactRootContainer;if(h){var g=h;if(typeof u=="function"){var y=u;u=function(){var k=Yo(g);y.call(k)}}Ko(r,g,t,u)}else g=c0(o,r,t,u,l);return Yo(g)}ah=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Ri(r.pendingLanes);o!==0&&(hl(r,o|1),gt(r,Ue()),(de&6)===0&&(Xr=Ue()+500,bn()))}break;case 13:dr(function(){var l=an(t,1);if(l!==null){var u=ut();Wt(l,t,1,u)}}),zc(t,1)}},fl=function(t){if(t.tag===13){var r=an(t,134217728);if(r!==null){var o=ut();Wt(r,t,134217728,o)}zc(t,134217728)}},lh=function(t){if(t.tag===13){var r=Mn(t),o=an(t,r);if(o!==null){var l=ut();Wt(o,t,r,l)}zc(t,r)}},ch=function(){return we},uh=function(t,r){var o=we;try{return we=t,r()}finally{we=o}},sl=function(t,r,o){switch(r){case"input":if(Xa(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var l=o[r];if(l!==t&&l.form===t.form){var u=mo(l);if(!u)throw Error(n(90));Od(l),Xa(l,u)}}}break;case"textarea":Ud(t,o);break;case"select":r=o.value,r!=null&&Tr(t,!!o.multiple,r,!1)}},Kd=Dc,Yd=dr;var u0={usingClientEntryPoint:!1,Events:[qi,Fr,mo,Gd,qd,Dc]},as={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d0={bundleType:as.bundleType,version:as.version,rendererPackageName:as.rendererPackageName,rendererConfig:as.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zd(t),t===null?null:t.stateNode},findFiberByHostInstance:as.findFiberByHostInstance||l0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Ys=Zo.inject(d0),Yt=Zo}catch{}}return _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u0,_t.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bc(r))throw Error(n(200));return a0(t,r,null,o)},_t.createRoot=function(t,r){if(!Bc(t))throw Error(n(299));var o=!1,l="",u=Np;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=Uc(t,1,!1,null,null,o,!1,l,u),t[nn]=r.current,Vi(t.nodeType===8?t.parentNode:t),new Wc(r)},_t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Zd(r),t=t===null?null:t.stateNode,t},_t.flushSync=function(t){return dr(t)},_t.hydrate=function(t,r,o){if(!Xo(r))throw Error(n(200));return Jo(null,t,r,!0,o)},_t.hydrateRoot=function(t,r,o){if(!Bc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,u=!1,h="",g=Np;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),r=Sp(r,null,t,1,o??null,u,!1,h,g),t[nn]=r.current,Vi(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,u]:r.mutableSourceEagerHydrationData.push(o,u);return new Qo(r)},_t.render=function(t,r,o){if(!Xo(r))throw Error(n(200));return Jo(null,t,r,!1,o)},_t.unmountComponentAtNode=function(t){if(!Xo(t))throw Error(n(40));return t._reactRootContainer?(dr(function(){Jo(null,null,t,!1,function(){t._reactRootContainer=null,t[nn]=null})}),!0):!1},_t.unstable_batchedUpdates=Dc,_t.unstable_renderSubtreeIntoContainer=function(t,r,o,l){if(!Xo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Jo(t,r,o,!1,l)},_t.version="18.3.1-next-f1338f8080-20240426",_t}var jp;function w0(){if(jp)return $c.exports;jp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),$c.exports=v0(),$c.exports}var Fp;function x0(){if(Fp)return ea;Fp=1;var i=w0();return ea.createRoot=i.createRoot,ea.hydrateRoot=i.hydrateRoot,ea}var k0=x0();const Up=i=>{let e;const n=new Set,s=(_,x)=>{const v=typeof _=="function"?_(e):_;if(!Object.is(v,e)){const w=e;e=x??(typeof v!="object"||v===null)?v:Object.assign({},e,v),n.forEach(T=>T(e,w))}},a=()=>e,f={setState:s,getState:a,getInitialState:()=>m,subscribe:_=>(n.add(_),()=>n.delete(_))},m=e=i(s,a,f);return f},E0=i=>i?Up(i):Up,C0=i=>i;function S0(i,e=C0){const n=Dp.useSyncExternalStore(i.subscribe,()=>e(i.getState()),()=>e(i.getInitialState()));return Dp.useDebugValue(n),n}const zp=i=>{const e=E0(i),n=s=>S0(e,s);return Object.assign(n,e),n},I0=i=>i?zp(i):zp,N0=()=>{};var Wp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(i,e){if(!i)throw mi(e)},mi=function(i){return new Error("Firebase Database ("+ig.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},T0=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],d=i[n++],f=i[n++],m=((a&7)<<18|(c&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const c=i[n++],d=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|d&63)}}return e.join("")},Lu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],d=a+1<i.length,f=d?i[a+1]:0,m=a+2<i.length,_=m?i[a+2]:0,x=c>>2,v=(c&3)<<4|f>>4;let w=(f&15)<<2|_>>6,T=_&63;m||(T=64,d||(w=64)),s.push(n[x],n[v],n[w],n[T])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(sg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):T0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],f=a<i.length?n[i.charAt(a)]:0;++a;const _=a<i.length?n[i.charAt(a)]:64;++a;const v=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||f==null||_==null||v==null)throw new R0;const w=c<<2|f>>4;if(s.push(w),_!==64){const T=f<<4&240|_>>2;if(s.push(T),v!==64){const b=_<<6&192|v;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class R0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const og=function(i){const e=sg(i);return Lu.encodeByteArray(e,!0)},ua=function(i){return og(i).replace(/\./g,"")},da=function(i){try{return Lu.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(i){return ag(void 0,i)}function ag(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!P0(n)||(i[n]=ag(i[n],e[n]));return i}function P0(i){return i!=="__proto__"}/**
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
 */function A0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const D0=()=>A0().__FIREBASE_DEFAULTS__,O0=()=>{if(typeof process>"u"||typeof Wp>"u")return;const i=Wp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},L0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&da(i[1]);return e&&JSON.parse(e)},Mu=()=>{try{return N0()||D0()||O0()||L0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},lg=i=>{var e,n;return(n=(e=Mu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},M0=i=>{const e=lg(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},cg=()=>{var i;return(i=Mu())===null||i===void 0?void 0:i.config},ug=i=>{var e;return(e=Mu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function gi(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dg(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function j0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[ua(JSON.stringify(n)),ua(JSON.stringify(d)),""].join(".")}const ms={};function F0(){const i={prod:[],emulator:[]};for(const e of Object.keys(ms))ms[e]?i.emulator.push(e):i.prod.push(e);return i}function U0(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let Bp=!1;function hg(i,e){if(typeof window>"u"||typeof document>"u"||!gi(window.location.host)||ms[i]===e||ms[i]||Bp)return;ms[i]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",c=F0().prod.length>0;function d(){const w=document.getElementById(s);w&&w.remove()}function f(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,T){w.setAttribute("width","24"),w.setAttribute("id",T),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function _(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Bp=!0,d()},w}function x(w,T){w.setAttribute("id",T),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function v(){const w=U0(s),T=n("text"),b=document.getElementById(T)||document.createElement("span"),M=n("learnmore"),O=document.getElementById(M)||document.createElement("a"),te=n("preprendIcon"),R=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const G=w.element;f(G),x(O,M);const K=_();m(R,te),G.append(R,b,O,K),document.body.appendChild(G)}c?(b.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ju(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function z0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function W0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function fg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function B0(){const i=dt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function H0(){return ig.NODE_ADMIN===!0}function V0(){try{return typeof indexedDB=="object"}catch{return!1}}function $0(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="FirebaseError";class Zn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=G0,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],d=c?q0(c,s):"Error",f=`${this.serviceName}: ${d} (${a}).`;return new Zn(a,f,s)}}function q0(i,e){return i.replace(K0,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const K0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(i){return JSON.parse(i)}function Qe(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=function(i){let e={},n={},s={},a="";try{const c=i.split(".");e=ks(da(c[0])||""),n=ks(da(c[1])||""),a=c[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:a}},Y0=function(i){const e=pg(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Q0=function(i){const e=pg(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function ci(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function cu(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ha(i,e,n){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(n,i[a],a,i));return s}function vr(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=i[a],d=e[a];if(Hp(c)&&Hp(d)){if(!vr(c,d))return!1}else if(c!==d)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function Hp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function fs(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,c]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(c)}}),e}function ps(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const w=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],c=this.chain_[1],d=this.chain_[2],f=this.chain_[3],m=this.chain_[4],_,x;for(let v=0;v<80;v++){v<40?v<20?(_=f^c&(d^f),x=1518500249):(_=c^d^f,x=1859775393):v<60?(_=c&d|f&(c|d),x=2400959708):(_=c^d^f,x=3395469782);const w=(a<<5|a>>>27)+_+m+x+s[v]&4294967295;m=f,f=d,d=(c<<30|c>>>2)&4294967295,c=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let a=0;const c=this.buf_;let d=this.inbuf_;for(;a<n;){if(d===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<n;)if(c[d]=e.charCodeAt(a),++d,++a,d===this.blockSize){this.compress_(c),d=0;break}}else for(;a<n;)if(c[d]=e[a],++d,++a,d===this.blockSize){this.compress_(c),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let c=24;c>=0;c-=8)e[s]=this.chain_[a]>>c&255,++s;return e}}function J0(i,e){const n=new Z0(i,e);return n.subscribe.bind(n)}class Z0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ew(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=Kc),a.error===void 0&&(a.error=Kc),a.complete===void 0&&(a.complete=Kc);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ew(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Kc(){}function Fu(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const c=a-55296;s++,F(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;a=65536+(c<<10)+d}a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):a<65536?(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},La=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ot(i){return i&&i._delegate?i._delegate:i}class wr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mr="[DEFAULT]";/**
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
 */class nw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Oa;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),a=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iw(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(c);s===f&&d.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(a,c);const d=this.instances.get(a);return d&&e(d,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rw(i){return i===mr?void 0:i}function iw(i){return i.instantiationMode==="EAGER"}/**
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
 */class sw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const ow={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},aw=ke.INFO,lw={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},cw=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=lw[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uu{constructor(e){this.name=e,this._logLevel=aw,this._logHandler=cw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ow[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const uw=(i,e)=>e.some(n=>i instanceof n);let Vp,$p;function dw(){return Vp||(Vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hw(){return $p||($p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mg=new WeakMap,uu=new WeakMap,gg=new WeakMap,Yc=new WeakMap,zu=new WeakMap;function fw(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",d)},c=()=>{n(Gn(i.result)),a()},d=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&mg.set(n,i)}).catch(()=>{}),zu.set(e,i),e}function pw(i){if(uu.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",d),i.removeEventListener("abort",d)},c=()=>{n(),a()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",d),i.addEventListener("abort",d)});uu.set(i,e)}let du={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return uu.get(i);if(e==="objectStoreNames")return i.objectStoreNames||gg.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function mw(i){du=i(du)}function gw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Qc(this),e,...n);return gg.set(s,e.sort?e.sort():[e]),Gn(s)}:hw().includes(i)?function(...e){return i.apply(Qc(this),e),Gn(mg.get(this))}:function(...e){return Gn(i.apply(Qc(this),e))}}function _w(i){return typeof i=="function"?gw(i):(i instanceof IDBTransaction&&pw(i),uw(i,dw())?new Proxy(i,du):i)}function Gn(i){if(i instanceof IDBRequest)return fw(i);if(Yc.has(i))return Yc.get(i);const e=_w(i);return e!==i&&(Yc.set(i,e),zu.set(e,i)),e}const Qc=i=>zu.get(i);function yw(i,e,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const d=indexedDB.open(i,e),f=Gn(d);return s&&d.addEventListener("upgradeneeded",m=>{s(Gn(d.result),m.oldVersion,m.newVersion,Gn(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),f.then(m=>{c&&m.addEventListener("close",()=>c()),a&&m.addEventListener("versionchange",_=>a(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const vw=["get","getKey","getAll","getAllKeys","count"],ww=["put","add","delete","clear"],Xc=new Map;function Gp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Xc.get(e))return Xc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=ww.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||vw.includes(n)))return;const c=async function(d,...f){const m=this.transaction(d,a?"readwrite":"readonly");let _=m.store;return s&&(_=_.index(f.shift())),(await Promise.all([_[n](...f),a&&m.done]))[0]};return Xc.set(e,c),c}mw(i=>({...i,get:(e,n,s)=>Gp(e,n)||i.get(e,n,s),has:(e,n)=>!!Gp(e,n)||i.has(e,n)}));/**
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
 */class xw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function kw(i){const e=i.getComponent();return e?.type==="VERSION"}const hu="@firebase/app",qp="0.13.2";/**
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
 */const mn=new Uu("@firebase/app"),Ew="@firebase/app-compat",Cw="@firebase/analytics-compat",Sw="@firebase/analytics",Iw="@firebase/app-check-compat",Nw="@firebase/app-check",Tw="@firebase/auth",Rw="@firebase/auth-compat",bw="@firebase/database",Pw="@firebase/data-connect",Aw="@firebase/database-compat",Dw="@firebase/functions",Ow="@firebase/functions-compat",Lw="@firebase/installations",Mw="@firebase/installations-compat",jw="@firebase/messaging",Fw="@firebase/messaging-compat",Uw="@firebase/performance",zw="@firebase/performance-compat",Ww="@firebase/remote-config",Bw="@firebase/remote-config-compat",Hw="@firebase/storage",Vw="@firebase/storage-compat",$w="@firebase/firestore",Gw="@firebase/ai",qw="@firebase/firestore-compat",Kw="firebase",Yw="11.10.0";/**
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
 */const fu="[DEFAULT]",Qw={[hu]:"fire-core",[Ew]:"fire-core-compat",[Sw]:"fire-analytics",[Cw]:"fire-analytics-compat",[Nw]:"fire-app-check",[Iw]:"fire-app-check-compat",[Tw]:"fire-auth",[Rw]:"fire-auth-compat",[bw]:"fire-rtdb",[Pw]:"fire-data-connect",[Aw]:"fire-rtdb-compat",[Dw]:"fire-fn",[Ow]:"fire-fn-compat",[Lw]:"fire-iid",[Mw]:"fire-iid-compat",[jw]:"fire-fcm",[Fw]:"fire-fcm-compat",[Uw]:"fire-perf",[zw]:"fire-perf-compat",[Ww]:"fire-rc",[Bw]:"fire-rc-compat",[Hw]:"fire-gcs",[Vw]:"fire-gcs-compat",[$w]:"fire-fst",[qw]:"fire-fst-compat",[Gw]:"fire-vertex","fire-js":"fire-js",[Kw]:"fire-js-all"};/**
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
 */const fa=new Map,Xw=new Map,pu=new Map;function Kp(i,e){try{i.container.addComponent(e)}catch(n){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function ui(i){const e=i.name;if(pu.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;pu.set(e,i);for(const n of fa.values())Kp(n,i);for(const n of Xw.values())Kp(n,i);return!0}function Wu(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Bt(i){return i==null?!1:i.settings!==void 0}/**
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
 */const Jw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new Os("app","Firebase",Jw);/**
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
 */class Zw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=Yw;function _g(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fu,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw qn.create("bad-app-name",{appName:String(a)});if(n||(n=cg()),!n)throw qn.create("no-options");const c=fa.get(a);if(c){if(vr(n,c.options)&&vr(s,c.config))return c;throw qn.create("duplicate-app",{appName:a})}const d=new sw(a);for(const m of pu.values())d.addComponent(m);const f=new Zw(n,s,d);return fa.set(a,f),f}function yg(i=fu){const e=fa.get(i);if(!e&&i===fu&&cg())return _g();if(!e)throw qn.create("no-app",{appName:i});return e}function Kn(i,e,n){var s;let a=(s=Qw[i])!==null&&s!==void 0?s:i;n&&(a+=`-${n}`);const c=a.match(/\s|\//),d=e.match(/\s|\//);if(c||d){const f=[`Unable to register library "${a}" with version "${e}":`];c&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(f.join(" "));return}ui(new wr(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const ex="firebase-heartbeat-database",tx=1,Es="firebase-heartbeat-store";let Jc=null;function vg(){return Jc||(Jc=yw(ex,tx,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Es)}catch(n){console.warn(n)}}}}).catch(i=>{throw qn.create("idb-open",{originalErrorMessage:i.message})})),Jc}async function nx(i){try{const n=(await vg()).transaction(Es),s=await n.objectStore(Es).get(wg(i));return await n.done,s}catch(e){if(e instanceof Zn)mn.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e?.message});mn.warn(n.message)}}}async function Yp(i,e){try{const s=(await vg()).transaction(Es,"readwrite");await s.objectStore(Es).put(e,wg(i)),await s.done}catch(n){if(n instanceof Zn)mn.warn(n.message);else{const s=qn.create("idb-set",{originalErrorMessage:n?.message});mn.warn(s.message)}}}function wg(i){return`${i.name}!${i.options.appId}`}/**
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
 */const rx=1024,ix=30;class sx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ax(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Qp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>ix){const d=lx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){mn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qp(),{heartbeatsToSend:s,unsentEntries:a}=ox(this._heartbeatsCache.heartbeats),c=ua(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return mn.warn(n),""}}}function Qp(){return new Date().toISOString().substring(0,10)}function ox(i,e=rx){const n=[];let s=i.slice();for(const a of i){const c=n.find(d=>d.agent===a.agent);if(c){if(c.dates.push(a.date),Xp(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Xp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ax{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return V0()?$0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nx(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Xp(i){return ua(JSON.stringify({version:2,heartbeats:i})).length}function lx(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function cx(i){ui(new wr("platform-logger",e=>new xw(e),"PRIVATE")),ui(new wr("heartbeat",e=>new sx(e),"PRIVATE")),Kn(hu,qp,i),Kn(hu,qp,"esm2017"),Kn("fire-js","")}cx("");function Bu(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(n[s[a]]=i[s[a]]);return n}function xg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ux=xg,kg=new Os("auth","Firebase",xg());/**
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
 */const pa=new Uu("@firebase/auth");function dx(i,...e){pa.logLevel<=ke.WARN&&pa.warn(`Auth (${yi}): ${i}`,...e)}function ia(i,...e){pa.logLevel<=ke.ERROR&&pa.error(`Auth (${yi}): ${i}`,...e)}/**
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
 */function Kt(i,...e){throw Hu(i,...e)}function en(i,...e){return Hu(i,...e)}function Eg(i,e,n){const s=Object.assign(Object.assign({},ux()),{[e]:n});return new Os("auth","Firebase",s).create(e,{appName:i.name})}function Yn(i){return Eg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hu(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return kg.create(i,...e)}function J(i,e,...n){if(!i)throw Hu(e,...n)}function dn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ia(e),new Error(e)}function gn(i,e){i||dn(e)}/**
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
 */function mu(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function hx(){return Jp()==="http:"||Jp()==="https:"}function Jp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function fx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hx()||W0()||"connection"in navigator)?navigator.onLine:!0}function px(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=ju()||fg()}get(){return fx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vu(i,e){gn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_x=new Ls(3e4,6e4);function er(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function wn(i,e,n,s,a={}){return Sg(i,a,async()=>{let c={},d={};s&&(e==="GET"?d=s:c={body:JSON.stringify(s)});const f=_i(Object.assign({key:i.config.apiKey},d)).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:m},c);return z0()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&gi(i.emulatorConfig.host)&&(_.credentials="include"),Cg.fetch()(await Ig(i,i.config.apiHost,n,f),_)})}async function Sg(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},mx),e);try{const a=new vx(i),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw ta(i,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const f=c.ok?d.errorMessage:d.error.message,[m,_]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(i,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw ta(i,"email-already-in-use",d);if(m==="USER_DISABLED")throw ta(i,"user-disabled",d);const x=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Eg(i,x,_);Kt(i,x)}}catch(a){if(a instanceof Zn)throw a;Kt(i,"network-request-failed",{message:String(a)})}}async function Ma(i,e,n,s,a={}){const c=await wn(i,e,n,s,a);return"mfaPendingCredential"in c&&Kt(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function Ig(i,e,n,s){const a=`${e}${n}?${s}`,c=i,d=c.config.emulator?Vu(i.config,a):`${i.config.apiScheme}://${a}`;return gx.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}function yx(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(en(this.auth,"network-request-failed")),_x.get())})}}function ta(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=en(i,e,s);return a.customData._tokenResponse=n,a}function Zp(i){return i!==void 0&&i.enterprise!==void 0}class wx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xx(i,e){return wn(i,"GET","/v2/recaptchaConfig",er(i,e))}/**
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
 */async function kx(i,e){return wn(i,"POST","/v1/accounts:delete",e)}async function ma(i,e){return wn(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function gs(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ex(i,e=!1){const n=Ot(i),s=await n.getIdToken(e),a=$u(s);J(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,d=c?.sign_in_provider;return{claims:a,token:s,authTime:gs(Zc(a.auth_time)),issuedAtTime:gs(Zc(a.iat)),expirationTime:gs(Zc(a.exp)),signInProvider:d||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Zc(i){return Number(i)*1e3}function $u(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return ia("JWT malformed, contained fewer than 3 sections"),null;try{const a=da(n);return a?JSON.parse(a):(ia("Failed to decode base64 JWT payload"),null)}catch(a){return ia("Caught error parsing JWT payload as JSON",a?.toString()),null}}function em(i){const e=$u(i);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Cs(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Zn&&Cx(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Cx({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Sx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gs(this.lastLoginAt),this.creationTime=gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ga(i){var e;const n=i.auth,s=await i.getIdToken(),a=await Cs(i,ma(n,{idToken:s}));J(a?.users.length,n,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const d=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Ng(c.providerUserInfo):[],f=Nx(i.providerData,d),m=i.isAnonymous,_=!(i.email&&c.passwordHash)&&!f?.length,x=m?_:!1,v={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:f,metadata:new gu(c.createdAt,c.lastLoginAt),isAnonymous:x};Object.assign(i,v)}async function Ix(i){const e=Ot(i);await ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nx(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Ng(i){return i.map(e=>{var{providerId:n}=e,s=Bu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Tx(i,e){const n=await Sg(i,{},async()=>{const s=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,d=await Ig(i,a,"/v1/token",`key=${c}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:s};return i.emulatorConfig&&gi(i.emulatorConfig.host)&&(m.credentials="include"),Cg.fetch()(d,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rx(i,e){return wn(i,"POST","/v2/accounts:revokeToken",er(i,e))}/**
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
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):em(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=em(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await Tx(e,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,d=new ri;return s&&(J(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),a&&(J(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),c&&(J(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function zn(i,e){J(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:n,auth:s,stsTokenManager:a}=e,c=Bu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new gu(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await Cs(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ex(this,e)}reload(){return Ix(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ga(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await Cs(this,kx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,a,c,d,f,m,_,x;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(a=n.email)!==null&&a!==void 0?a:void 0,T=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,b=(d=n.photoURL)!==null&&d!==void 0?d:void 0,M=(f=n.tenantId)!==null&&f!==void 0?f:void 0,O=(m=n._redirectEventId)!==null&&m!==void 0?m:void 0,te=(_=n.createdAt)!==null&&_!==void 0?_:void 0,R=(x=n.lastLoginAt)!==null&&x!==void 0?x:void 0,{uid:G,emailVerified:K,isAnonymous:re,providerData:ie,stsTokenManager:Ce}=n;J(G&&Ce,e,"internal-error");const he=ri.fromJSON(this.name,Ce);J(typeof G=="string",e,"internal-error"),zn(v,e.name),zn(w,e.name),J(typeof K=="boolean",e,"internal-error"),J(typeof re=="boolean",e,"internal-error"),zn(T,e.name),zn(b,e.name),zn(M,e.name),zn(O,e.name),zn(te,e.name),zn(R,e.name);const at=new Vt({uid:G,auth:e,email:w,emailVerified:K,displayName:v,isAnonymous:re,photoURL:b,phoneNumber:T,tenantId:M,stsTokenManager:he,createdAt:te,lastLoginAt:R});return ie&&Array.isArray(ie)&&(at.providerData=ie.map(ne=>Object.assign({},ne))),O&&(at._redirectEventId=O),at}static async _fromIdTokenResponse(e,n,s=!1){const a=new ri;a.updateFromServerResponse(n);const c=new Vt({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await ga(c),c}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];J(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?Ng(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!c?.length,f=new ri;f.updateFromIdToken(s);const m=new Vt({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:d}),_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new gu(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!c?.length};return Object.assign(m,_),m}}/**
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
 */const tm=new Map;function hn(i){gn(i instanceof Function,"Expected a class definition");let e=tm.get(i);return e?(gn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,tm.set(i,e),e)}/**
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
 */class Tg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tg.type="NONE";const nm=Tg;/**
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
 */function sa(i,e,n){return`firebase:${i}:${e}:${n}`}class ii{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=sa(this.userKey,a.apiKey,c),this.fullPersistenceKey=sa("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ma(this.auth,{idToken:e}).catch(()=>{});return n?Vt._fromGetAccountInfoResponse(this.auth,n,e):null}return Vt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ii(hn(nm),e,s);const a=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=a[0]||hn(nm);const d=sa(s,e.config.apiKey,e.name);let f=null;for(const _ of n)try{const x=await _._get(d);if(x){let v;if(typeof x=="string"){const w=await ma(e,{idToken:x}).catch(()=>{});if(!w)break;v=await Vt._fromGetAccountInfoResponse(e,w,x)}else v=Vt._fromJSON(e,x);_!==c&&(f=v),c=_;break}}catch{}const m=a.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new ii(c,e,s):(c=m[0],f&&await c._set(d,f.toJSON()),await Promise.all(n.map(async _=>{if(_!==c)try{await _._remove(d)}catch{}})),new ii(c,e,s))}}/**
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
 */function rm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ag(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Og(e))return"Blackberry";if(Lg(e))return"Webos";if(bg(e))return"Safari";if((e.includes("chrome/")||Pg(e))&&!e.includes("edge/"))return"Chrome";if(Dg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if(s?.length===2)return s[1]}return"Other"}function Rg(i=dt()){return/firefox\//i.test(i)}function bg(i=dt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pg(i=dt()){return/crios\//i.test(i)}function Ag(i=dt()){return/iemobile/i.test(i)}function Dg(i=dt()){return/android/i.test(i)}function Og(i=dt()){return/blackberry/i.test(i)}function Lg(i=dt()){return/webos/i.test(i)}function Gu(i=dt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function bx(i=dt()){var e;return Gu(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Px(){return B0()&&document.documentMode===10}function Mg(i=dt()){return Gu(i)||Dg(i)||Lg(i)||Og(i)||/windows phone/i.test(i)||Ag(i)}/**
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
 */function jg(i,e=[]){let n;switch(i){case"Browser":n=rm(dt());break;case"Worker":n=`${rm(dt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${s}`}/**
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
 */class Ax{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((d,f)=>{try{const m=e(c);d(m)}catch(m){f(m)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function Dx(i,e={}){return wn(i,"GET","/v2/passwordPolicy",er(i,e))}/**
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
 */const Ox=6;class Lx{constructor(e){var n,s,a,c;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:Ox,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,a,c,d,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(n=m.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(c=m.containsUppercaseLetter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(d=m.containsNumericCharacter)!==null&&d!==void 0?d:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Mx{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new im(this),this.idTokenSubscription=new im(this),this.beforeStateQueue=new Ax(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var s,a,c;if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ma(this,{idToken:e}),s=await Vt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=a?._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===f)&&m?.user&&(a=m.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ga(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=px()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(Yn(this));const n=e?Ot(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dx(this),n=new Lx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Rx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(f,this,"internal-error"),f.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,a);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var e;if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&dx(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Ir(i){return Ot(i)}class im{constructor(e){this.auth=e,this.observer=null,this.addObserver=J0(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jx(i){ja=i}function Fg(i){return ja.loadJS(i)}function Fx(){return ja.recaptchaEnterpriseScript}function Ux(){return ja.gapiScript}function zx(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Wx{constructor(){this.enterprise=new Bx}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Bx{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Hx="recaptcha-enterprise",Ug="NO_RECAPTCHA";class Vx{constructor(e){this.type=Hx,this.auth=Ir(e)}async verify(e="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(d,f)=>{xx(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new wx(m);return c.tenantId==null?c._agentRecaptchaConfig=_:c._tenantRecaptchaConfigs[c.tenantId]=_,d(_.siteKey)}}).catch(m=>{f(m)})})}function a(c,d,f){const m=window.grecaptcha;Zp(m)?m.enterprise.ready(()=>{m.enterprise.execute(c,{action:e}).then(_=>{d(_)}).catch(()=>{d(Ug)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Wx().execute("siteKey",{action:"verify"}):new Promise((c,d)=>{s(this.auth).then(f=>{if(!n&&Zp(window.grecaptcha))a(f,c,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let m=Fx();m.length!==0&&(m+=f),Fg(m).then(()=>{a(f,c,d)}).catch(_=>{d(_)})}}).catch(f=>{d(f)})})}}async function sm(i,e,n,s=!1,a=!1){const c=new Vx(i);let d;if(a)d=Ug;else try{d=await c.verify(n)}catch{d=await c.verify(n,!0)}const f=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:_,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:d}):Object.assign(f,{captchaResponse:d}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function _u(i,e,n,s,a){var c;if(!((c=i._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await sm(i,e,n,n==="getOobCode");return s(i,d)}else return s(i,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await sm(i,e,n,n==="getOobCode");return s(i,f)}else return Promise.reject(d)})}/**
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
 */function $x(i,e){const n=Wu(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(vr(c,e??{}))return a;Kt(a,"already-initialized")}return n.initialize({options:e})}function Gx(i,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(hn);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function qx(i,e,n){const s=Ir(i);J(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,c=zg(e),{host:d,port:f}=Kx(e),m=f===null?"":`:${f}`,_={url:`${c}//${d}${m}/`},x=Object.freeze({host:d,port:f,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){J(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),J(vr(_,s.config.emulator)&&vr(x,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=x,s.settings.appVerificationDisabledForTesting=!0,gi(d)?(dg(`${c}//${d}${m}`),hg("Auth",!0)):Yx()}function zg(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Kx(i){const e=zg(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:om(s.substr(c.length+1))}}else{const[c,d]=s.split(":");return{host:c,port:om(d)}}}function om(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Yx(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class qu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function Qx(i,e){return wn(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Xx(i,e){return Ma(i,"POST","/v1/accounts:signInWithPassword",er(i,e))}async function Jx(i,e){return wn(i,"POST","/v1/accounts:sendOobCode",er(i,e))}async function Zx(i,e){return Jx(i,e)}/**
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
 */async function e1(i,e){return Ma(i,"POST","/v1/accounts:signInWithEmailLink",er(i,e))}async function t1(i,e){return Ma(i,"POST","/v1/accounts:signInWithEmailLink",er(i,e))}/**
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
 */class Ss extends qu{constructor(e,n,s,a=null){super("password",s),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new Ss(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ss(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _u(e,n,"signInWithPassword",Xx);case"emailLink":return e1(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _u(e,s,"signUpPassword",Qx);case"emailLink":return t1(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function si(i,e){return Ma(i,"POST","/v1/accounts:signInWithIdp",er(i,e))}/**
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
 */const n1="http://localhost";class xr extends qu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=n,c=Bu(n,["providerId","signInMethod"]);if(!s||!a)return null;const d=new xr(s,a);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return si(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,si(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,si(e,n)}buildRequest(){const e={requestUri:n1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_i(n)}return e}}/**
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
 */function r1(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function i1(i){const e=fs(ps(i)).link,n=e?fs(ps(e)).deep_link_id:null,s=fs(ps(i)).deep_link_id;return(s?fs(ps(s)).link:null)||s||n||e||i}class Ku{constructor(e){var n,s,a,c,d,f;const m=fs(ps(e)),_=(n=m.apiKey)!==null&&n!==void 0?n:null,x=(s=m.oobCode)!==null&&s!==void 0?s:null,v=r1((a=m.mode)!==null&&a!==void 0?a:null);J(_&&x&&v,"argument-error"),this.apiKey=_,this.operation=v,this.code=x,this.continueUrl=(c=m.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(d=m.lang)!==null&&d!==void 0?d:null,this.tenantId=(f=m.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=i1(e);try{return new Ku(n)}catch{return null}}}/**
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
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return Ss._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ku.parseLink(n);return J(s,"argument-error"),Ss._fromEmailAndCode(e,s.code,s.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Wg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ms extends Wg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wn extends Ms{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Bn.credential(n,s)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class Hn extends Ms{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
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
 */class Vn extends Ms{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Vn.credential(n,s)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
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
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const c=await Vt._fromIdTokenResponse(e,s,a),d=am(s);return new di({user:c,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=am(s);return new di({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function am(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class _a extends Zn{constructor(e,n,s,a){var c;super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,_a.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new _a(e,n,s,a)}}function Bg(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?_a._fromErrorAndOperation(i,c,e,s):c})}async function s1(i,e,n=!1){const s=await Cs(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return di._forOperation(i,"link",s)}/**
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
 */async function o1(i,e,n=!1){const{auth:s}=i;if(Bt(s.app))return Promise.reject(Yn(s));const a="reauthenticate";try{const c=await Cs(i,Bg(s,a,e,i),n);J(c.idToken,s,"internal-error");const d=$u(c.idToken);J(d,s,"internal-error");const{sub:f}=d;return J(i.uid===f,s,"user-mismatch"),di._forOperation(i,a,c)}catch(c){throw c?.code==="auth/user-not-found"&&Kt(s,"user-mismatch"),c}}/**
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
 */async function Hg(i,e,n=!1){if(Bt(i.app))return Promise.reject(Yn(i));const s="signIn",a=await Bg(i,s,e),c=await di._fromIdTokenResponse(i,s,a);return n||await i._updateCurrentUser(c.user),c}async function a1(i,e){return Hg(Ir(i),e)}/**
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
 */async function l1(i){const e=Ir(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function c1(i,e,n){const s=Ir(i);await _u(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Zx)}function u1(i,e,n){return Bt(i.app)?Promise.reject(Yn(i)):a1(Ot(i),vi.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&l1(i),s})}function d1(i,e,n,s){return Ot(i).onIdTokenChanged(e,n,s)}function h1(i,e,n){return Ot(i).beforeAuthStateChanged(e,n)}const ya="__sak";/**
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
 */class Vg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ya,"1"),this.storage.removeItem(ya),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const f1=1e3,p1=10;class $g extends Vg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,m)=>{this.notifyListeners(d,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},c=this.storage.getItem(s);Px()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,p1):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},f1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$g.type="LOCAL";const m1=$g;/**
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
 */class Gg extends Vg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gg.type="SESSION";const qg=Gg;/**
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
 */function g1(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new Fa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:c}=n.data,d=this.handlersMap[a];if(!d?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const f=Array.from(d).map(async _=>_(n.origin,c)),m=await g1(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fa.receivers=[];/**
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
 */function Yu(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class _1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,d;return new Promise((f,m)=>{const _=Yu("",20);a.port1.start();const x=setTimeout(()=>{m(new Error("unsupported_event"))},s);d={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===_)switch(w.data.status){case"ack":clearTimeout(x),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),f(w.data.response);break;default:clearTimeout(x),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(d),a.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:_,data:n},[a.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function tn(){return window}function y1(i){tn().location.href=i}/**
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
 */function Kg(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function v1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function w1(){var i;return((i=navigator?.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function x1(){return Kg()?self:null}/**
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
 */const Yg="firebaseLocalStorageDb",k1=1,va="firebaseLocalStorage",Qg="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ua(i,e){return i.transaction([va],e?"readwrite":"readonly").objectStore(va)}function E1(){const i=indexedDB.deleteDatabase(Yg);return new js(i).toPromise()}function yu(){const i=indexedDB.open(Yg,k1);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(va,{keyPath:Qg})}catch(a){n(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(va)?e(s):(s.close(),await E1(),e(await yu()))})})}async function lm(i,e,n){const s=Ua(i,!0).put({[Qg]:e,value:n});return new js(s).toPromise()}async function C1(i,e){const n=Ua(i,!1).get(e),s=await new js(n).toPromise();return s===void 0?null:s.value}function cm(i,e){const n=Ua(i,!0).delete(e);return new js(n).toPromise()}const S1=800,I1=3;class Xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>I1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(x1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await v1(),!this.activeServiceWorker)return;this.sender=new _1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||w1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yu();return await lm(e,ya,"1"),await cm(e,ya),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>lm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>C1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=Ua(a,!1).getAll();return new js(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xg.type="LOCAL";const N1=Xg;new Ls(3e4,6e4);/**
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
 */function T1(i,e){return e?hn(e):(J(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Qu extends qu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function R1(i){return Hg(i.auth,new Qu(i),i.bypassAuthState)}function b1(i){const{auth:e,user:n}=i;return J(n,e,"internal-error"),o1(n,new Qu(i),i.bypassAuthState)}async function P1(i){const{auth:e,user:n}=i;return J(n,e,"internal-error"),s1(n,new Qu(i),i.bypassAuthState)}/**
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
 */class Jg{constructor(e,n,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:c,error:d,type:f}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R1;case"linkViaPopup":case"linkViaRedirect":return P1;case"reauthViaPopup":case"reauthViaRedirect":return b1;default:Kt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const A1=new Ls(2e3,1e4);class ei extends Jg{constructor(e,n,s,a,c){super(e,n,a,c),this.provider=s,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Yu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A1.get())};e()}}ei.currentPopupAction=null;/**
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
 */const D1="pendingRedirect",oa=new Map;class O1 extends Jg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=oa.get(this.auth._key());if(!e){try{const s=await L1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}oa.set(this.auth._key(),e)}return this.bypassAuthState||oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L1(i,e){const n=F1(e),s=j1(i);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}function M1(i,e){oa.set(i._key(),e)}function j1(i){return hn(i._redirectPersistence)}function F1(i){return sa(D1,i.config.apiKey,i.name)}async function U1(i,e,n=!1){if(Bt(i.app))return Promise.reject(Yn(i));const s=Ir(i),a=T1(s,e),d=await new O1(s,a,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const z1=10*60*1e3;class W1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!B1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Zg(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(en(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=z1&&this.cachedEventUids.clear(),this.cachedEventUids.has(um(e))}saveEventToCache(e){this.cachedEventUids.add(um(e)),this.lastProcessedEventTime=Date.now()}}function um(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Zg({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function B1(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zg(i);default:return!1}}/**
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
 */async function H1(i,e={}){return wn(i,"GET","/v1/projects",e)}/**
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
 */const V1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$1=/^https?/;async function G1(i){if(i.config.emulator)return;const{authorizedDomains:e}=await H1(i);for(const n of e)try{if(q1(n))return}catch{}Kt(i,"unauthorized-domain")}function q1(i){const e=mu(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!$1.test(n))return!1;if(V1.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const K1=new Ls(3e4,6e4);function dm(){const i=tn().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function Y1(i){return new Promise((e,n)=>{var s,a,c;function d(){dm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dm(),n(en(i,"network-request-failed"))},timeout:K1.get()})}if(!((a=(s=tn().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=tn().gapi)===null||c===void 0)&&c.load)d();else{const f=zx("iframefcb");return tn()[f]=()=>{gapi.load?d():n(en(i,"network-request-failed"))},Fg(`${Ux()}?onload=${f}`).catch(m=>n(m))}}).catch(e=>{throw aa=null,e})}let aa=null;function Q1(i){return aa=aa||Y1(i),aa}/**
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
 */const X1=new Ls(5e3,15e3),J1="__/auth/iframe",Z1="emulator/auth/iframe",ek={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nk(i){const e=i.config;J(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Vu(e,Z1):`https://${i.config.authDomain}/${J1}`,s={apiKey:e.apiKey,appName:i.name,v:yi},a=tk.get(i.config.apiHost);a&&(s.eid=a);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${_i(s).slice(1)}`}async function rk(i){const e=await Q1(i),n=tn().gapi;return J(n,i,"internal-error"),e.open({where:document.body,url:nk(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ek,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const d=en(i,"network-request-failed"),f=tn().setTimeout(()=>{c(d)},X1.get());function m(){tn().clearTimeout(f),a(s)}s.ping(m).then(m,()=>{c(d)})}))}/**
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
 */const ik={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sk=500,ok=600,ak="_blank",lk="http://localhost";class hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ck(i,e,n,s=sk,a=ok){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m=Object.assign(Object.assign({},ik),{width:s.toString(),height:a.toString(),top:c,left:d}),_=dt().toLowerCase();n&&(f=Pg(_)?ak:n),Rg(_)&&(e=e||lk,m.scrollbars="yes");const x=Object.entries(m).reduce((w,[T,b])=>`${w}${T}=${b},`,"");if(bx(_)&&f!=="_self")return uk(e||"",f),new hm(null);const v=window.open(e||"",f,x);J(v,i,"popup-blocked");try{v.focus()}catch{}return new hm(v)}function uk(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const dk="__/auth/handler",hk="emulator/auth/handler",fk=encodeURIComponent("fac");async function fm(i,e,n,s,a,c){J(i.config.authDomain,i,"auth-domain-config-required"),J(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:yi,eventId:a};if(e instanceof Wg){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",cu(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[x,v]of Object.entries({}))d[x]=v}if(e instanceof Ms){const x=e.getScopes().filter(v=>v!=="");x.length>0&&(d.scopes=x.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const x of Object.keys(f))f[x]===void 0&&delete f[x];const m=await i._getAppCheckToken(),_=m?`#${fk}=${encodeURIComponent(m)}`:"";return`${pk(i)}?${_i(f).slice(1)}${_}`}function pk({config:i}){return i.emulator?Vu(i,hk):`https://${i.authDomain}/${dk}`}/**
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
 */const eu="webStorageSupport";class mk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qg,this._completeRedirectFn=U1,this._overrideRedirectResult=M1}async _openPopup(e,n,s,a){var c;gn((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const d=await fm(e,n,s,mu(),a);return ck(e,d,Yu())}async _openRedirect(e,n,s,a){await this._originValidation(e);const c=await fm(e,n,s,mu(),a);return y1(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(gn(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await rk(e),s=new W1(e);return n.register("authEvent",a=>(J(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eu,{type:eu},a=>{var c;const d=(c=a?.[0])===null||c===void 0?void 0:c[eu];d!==void 0&&n(!!d),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=G1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mg()||bg()||Gu()}}const gk=mk;var pm="@firebase/auth",mm="1.10.8";/**
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
 */class _k{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yk(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vk(i){ui(new wr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;J(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(i)},_=new Mx(s,a,c,m);return Gx(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ui(new wr("auth-internal",e=>{const n=Ir(e.getProvider("auth").getImmediate());return(s=>new _k(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(pm,mm,yk(i)),Kn(pm,mm,"esm2017")}/**
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
 */const wk=5*60,xk=ug("authIdTokenMaxAge")||wk;let gm=null;const kk=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>xk)return;const a=n?.token;gm!==a&&(gm=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Ek(i=yg()){const e=Wu(i,"auth");if(e.isInitialized())return e.getImmediate();const n=$x(i,{popupRedirectResolver:gk,persistence:[N1,m1,qg]}),s=ug("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const d=kk(c.toString());h1(n,d,()=>d(n.currentUser)),d1(n,f=>d(f))}}const a=lg("auth");return a&&qx(n,`http://${a}`),n}function Ck(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}jx({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=en("internal-error");c.customData=a,n(c)},s.type="text/javascript",s.charset="UTF-8",Ck().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vk("Browser");var Sk="firebase",Ik="11.10.0";/**
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
 */Kn(Sk,Ik,"app");var _m={};const ym="@firebase/database",vm="1.0.20";/**
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
 */let e_="";function Nk(i){e_=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ks(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Tk(e)}}catch{}return new Rk},_r=t_("localStorage"),bk=t_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Uu("@firebase/database"),Pk=function(){let i=1;return function(){return i++}}(),n_=function(i){const e=tw(i),n=new X0;n.update(e);const s=n.digest();return Lu.encodeByteArray(s)},Fs=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fs.apply(null,s):typeof s=="object"?e+=Qe(s):e+=s,e+=" "}return e};let _s=null,wm=!0;const Ak=function(i,e){F(!0,"Can't turn on custom loggers persistently."),oi.logLevel=ke.VERBOSE,_s=oi.log.bind(oi)},ot=function(...i){if(wm===!0&&(wm=!1,_s===null&&bk.get("logging_enabled")===!0&&Ak()),_s){const e=Fs.apply(null,i);_s(e)}},Us=function(i){return function(...e){ot(i,...e)}},vu=function(...i){const e="FIREBASE INTERNAL ERROR: "+Fs(...i);oi.error(e)},_n=function(...i){const e=`FIREBASE FATAL ERROR: ${Fs(...i)}`;throw oi.error(e),new Error(e)},wt=function(...i){const e="FIREBASE WARNING: "+Fs(...i);oi.warn(e)},Dk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},r_=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},Ok=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hi="[MIN_NAME]",kr="[MAX_NAME]",wi=function(i,e){if(i===e)return 0;if(i===hi||e===kr)return-1;if(e===hi||i===kr)return 1;{const n=xm(i),s=xm(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},Lk=function(i,e){return i===e?0:i<e?-1:1},cs=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Qe(e))},Xu=function(i){if(typeof i!="object"||i===null)return Qe(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Qe(e[s]),n+=":",n+=Xu(i[e[s]]);return n+="}",n},i_=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let a=0;a<n;a+=e)a+e>n?s.push(i.substring(a,n)):s.push(i.substring(a,a+e));return s};function xt(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const s_=function(i){F(!r_(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let a,c,d,f,m;i===0?(c=0,d=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),c=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(c=0,d=Math.round(i/Math.pow(2,1-s-n))));const _=[];for(m=n;m;m-=1)_.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)_.push(c%2?1:0),c=Math.floor(c/2);_.push(a?1:0),_.reverse();const x=_.join("");let v="";for(m=0;m<64;m+=8){let w=parseInt(x.substr(m,8),2).toString(16);w.length===1&&(w="0"+w),v=v+w}return v.toLowerCase()},Mk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Fk(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const Uk=new RegExp("^-?(0*)\\d{1,10}$"),zk=-2147483648,Wk=2147483647,xm=function(i){if(Uk.test(i)){const e=Number(i);if(e>=zk&&e<=Wk)return e}return null},xi=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw wt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Bk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ys=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Hk{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Bt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){wt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wt(e)}}class la{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}la.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="5",o_="v",a_="s",l_="r",c_="f",u_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,d_="ls",h_="p",wu="ac",f_="websocket",p_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n,s,a,c=!1,d="",f=!1,m=!1,_=null){this.secure=n,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=c,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this.emulatorOptions=_,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $k(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function g_(i,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let s;if(e===f_)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===p_)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$k(i)&&(n.ns=i.namespace);const a=[];return xt(n,(c,d)=>{a.push(c+"="+d)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(){this.counters_={}}incrementCounter(e,n=1){vn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return b0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu={},nu={};function Zu(i){const e=i.toString();return tu[e]||(tu[e]=new Gk),tu[e]}function qk(i,e){const n=i.toString();return nu[n]||(nu[n]=e()),nu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&xi(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="start",Yk="close",Qk="pLPCommand",Xk="pRTLPCB",__="id",y_="pw",v_="ser",Jk="cb",Zk="seg",eE="ts",tE="d",nE="dframe",w_=1870,x_=30,rE=w_-x_,iE=25e3,sE=3e4;class ti{constructor(e,n,s,a,c,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=a,this.authToken=c,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(e),this.stats_=Zu(n),this.urlFn=m=>(this.appCheckToken&&(m[wu]=this.appCheckToken),g_(n,p_,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Kk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sE)),Ok(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ed((...c)=>{const[d,f,m,_,x]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===km)this.id=f,this.password=m;else if(d===Yk)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...c)=>{const[d,f]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[km]="t",s[v_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Jk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[o_]=Ju,this.transportSessionId&&(s[a_]=this.transportSessionId),this.lastSessionId&&(s[d_]=this.lastSessionId),this.applicationId&&(s[h_]=this.applicationId),this.appCheckToken&&(s[wu]=this.appCheckToken),typeof location<"u"&&location.hostname&&u_.test(location.hostname)&&(s[l_]=c_);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ti.forceAllow_=!0}static forceDisallow(){ti.forceDisallow_=!0}static isAvailable(){return ti.forceAllow_?!0:!ti.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Mk()&&!jk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=og(n),a=i_(s,rE);for(let c=0;c<a.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[nE]="t",s[__]=e,s[y_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ed{constructor(e,n,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Pk(),window[Qk+this.uniqueCallbackIdentifier]=e,window[Xk+this.uniqueCallbackIdentifier]=n,this.myIFrame=ed.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){ot("frame writing exception"),f.stack&&ot(f.stack),ot(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[__]=this.myID,e[y_]=this.myPW,e[v_]=this.currentSerial;let n=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+x_+s.length<=w_;){const d=this.pendingSegs.shift();s=s+"&"+Zk+a+"="+d.seg+"&"+eE+a+"="+d.ts+"&"+tE+a+"="+d.d,a++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},a=setTimeout(s,Math.floor(iE)),c=()=>{clearTimeout(a),s()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=16384,aE=45e3;let wa=null;typeof MozWebSocket<"u"?wa=MozWebSocket:typeof WebSocket<"u"&&(wa=WebSocket);class Ht{constructor(e,n,s,a,c,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=Zu(n),this.connURL=Ht.connectionURL_(n,d,f,a,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,a,c){const d={};return d[o_]=Ju,typeof location<"u"&&location.hostname&&u_.test(location.hostname)&&(d[l_]=c_),n&&(d[a_]=n),s&&(d[d_]=s),a&&(d[wu]=a),c&&(d[h_]=c),g_(e,f_,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_r.set("previous_websocket_failure",!0);try{let s;H0(),this.mySock=new wa(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&wa!==null&&!Ht.forceDisallow_}static previouslyFailed(){return _r.isInMemoryStorage||_r.get("previous_websocket_failure")===!0}markConnectionHealthy(){_r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ks(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=i_(n,oE);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(aE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ht.responsesRequiredToBeHealthy=2;Ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{static get ALL_TRANSPORTS(){return[ti,Ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ht&&Ht.isAvailable();let s=n&&!Ht.previouslyFailed();if(e.webSocketOnly&&(n||wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ht];else{const a=this.transports_=[];for(const c of Is.ALL_TRANSPORTS)c&&c.isAvailable()&&a.push(c);Is.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Is.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=6e4,cE=5e3,uE=10*1024,dE=100*1024,ru="t",Em="d",hE="s",Cm="r",fE="e",Sm="o",Im="a",Nm="n",Tm="p",pE="h";class mE{constructor(e,n,s,a,c,d,f,m,_,x){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=c,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=m,this.onKill_=_,this.lastSessionId=x,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new Is(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=ys(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ru in e){const n=e[ru];n===Im?this.upgradeIfSecondaryHealthy_():n===Cm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=cs("t",e),s=cs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Tm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Im,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=cs("t",e),s=cs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=cs(ru,e);if(Em in e){const s=e[Em];if(n===pE){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(n===Nm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hE?this.onConnectionShutdown_(s):n===Cm?this.onReset_(s):n===fE?vu("Server Error: "+s):n===Sm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ju!==s&&wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ys(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ys(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Tm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{put(e,n,s,a){}merge(e,n,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const a=this.getInitialEvent(e);a&&n.apply(s,a)}off(e,n,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let c=0;c<a.length;c++)if(a[c].callback===n&&(!s||s===a[c].context)){a.splice(c,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends E_{static getInstance(){return new xa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ju()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=32,bm=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new Ee("")}function ae(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Xn(i){return i.pieces_.length-i.pieceNum_}function Ne(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new Ee(i.pieces_,e)}function C_(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function gE(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function S_(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function I_(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new Ee(e,0)}function Ve(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof Ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&n.push(s[a])}return new Ee(n,0)}function ue(i){return i.pieceNum_>=i.pieces_.length}function yt(i,e){const n=ae(i),s=ae(e);if(n===null)return e;if(n===s)return yt(Ne(i),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function td(i,e){if(Xn(i)!==Xn(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function $t(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(Xn(i)>Xn(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class _E{constructor(e,n){this.errorPrefix_=n,this.parts_=S_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=La(this.parts_[s]);N_(this)}}function yE(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=La(e),N_(i)}function vE(i){const e=i.parts_.pop();i.byteLength_-=La(e),i.parts_.length>0&&(i.byteLength_-=1)}function N_(i){if(i.byteLength_>bm)throw new Error(i.errorPrefix_+"has a key path longer than "+bm+" bytes ("+i.byteLength_+").");if(i.parts_.length>Rm)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Rm+") or object contains a cycle "+gr(i))}function gr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends E_{static getInstance(){return new nd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=1e3,wE=60*5*1e3,Pm=30*1e3,xE=1.3,kE=3e4,EE="server_kill",Am=3;class pn extends k_{constructor(e,n,s,a,c,d,f,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=c,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=pn.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=us,this.maxReconnectDelay_=wE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");nd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const a=++this.requestNumber_,c={r:a,a:e,b:n};this.log_(Qe(c)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const n=new Oa,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,s,a){this.initConnection_();const c=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+c),this.listens.has(d)||this.listens.set(d,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(d).has(c),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:n,query:e,tag:s};this.listens.get(d).set(c,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+s+" for "+a);const c={p:s},d="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(d,c,f=>{const m=f.d,_=f.s;pn.warnOnListenWarnings_(m,n),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",f),_!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(_,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vn(e,"w")){const s=ci(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Q0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Y0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,a=>{const c=a.s,d=a.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,n)}sendUnlisten_(e,n,s,a){this.log_("Unlisten on "+e+" for "+n);const c={p:e},d="n";a&&(c.q=s,c.t=a),this.sendRequest(d,c)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,a){const c={p:n,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,d=>{a&&setTimeout(()=>{a(d.s,d.d)},Math.floor(0))})}put(e,n,s,a){this.putInternal("p",e,n,s,a)}merge(e,n,s,a){this.putInternal("m",e,n,s,a)}putInternal(e,n,s,a,c){this.initConnection_();const d={p:n,d:s};c!==void 0&&(d.h=c),this.outstandingPuts_.push({action:e,request:d,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vu("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kE&&(this.reconnectDelay_=us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+pn.nextConnectionId_++,c=this.lastSessionId;let d=!1,f=null;const m=function(){f?f.close():(d=!0,s())},_=function(v){F(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:m,sendRequest:_};const x=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,w]=await Promise.all([this.authTokenProvider_.getToken(x),this.appCheckTokenProvider_.getToken(x)]);d?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=w&&w.token,f=new mE(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,T=>{wt(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(EE)},c))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&wt(v),m())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cu(this.interruptReasons_)&&(this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(c=>Xu(c)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,n){const s=new Ee(e).toString();let a;if(this.listens.has(s)){const c=this.listens.get(s);a=c.get(n),c.delete(n),c.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Am&&(this.reconnectDelay_=Pm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Am&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+e_.replace(/\./g,"-")]=1,ju()?e["framework.cordova"]=1:fg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xa.getInstance().currentlyOnline();return cu(this.interruptReasons_)&&e}}pn.nextPersistentConnectionId_=0;pn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new le(hi,e),a=new le(hi,n);return this.compare(s,a)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na;class T_ extends za{static get __EMPTY_NODE(){return na}static set __EMPTY_NODE(e){na=e}compare(e,n){return wi(e.name,n.name)}isDefinedOn(e){throw mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(kr,na)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,na)}toString(){return".key"}}const ai=new T_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,s,a,c=null){this.isReverse_=a,this.resultGenerator_=c,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,a&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,a,c){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=a??vt.EMPTY_NODE,this.right=c??vt.EMPTY_NODE}copy(e,n,s,a,c){return new Ye(e??this.key,n??this.value,s??this.color,a??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const c=s(e,a.key);return c<0?a=a.copy(null,null,null,a.left.insert(e,n,s),null):c===0?a=a.copy(null,n,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return vt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,a;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return vt.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class CE{copy(e,n,s,a,c){return this}insert(e,n,s){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vt{constructor(e,n=vt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new vt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,a=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ra(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ra(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ra(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ra(this.root_,null,this.comparator_,!0,e)}}vt.EMPTY_NODE=new CE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(i,e){return wi(i.name,e.name)}function rd(i,e){return wi(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu;function IE(i){xu=i}const R_=function(i){return typeof i=="number"?"number:"+s_(i):"string:"+i},b_=function(i){if(i.isLeafNode()){const e=i.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vn(e,".sv"),"Priority must be a string or number.")}else F(i===xu||i.isEmpty(),"priority of unexpected type.");F(i===xu||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dm;class Ke{static set __childrenNodeConstructor(e){Dm=e}static get __childrenNodeConstructor(){return Dm}constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),b_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:ae(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ae(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(F(s!==".priority"||Xn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+R_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=s_(this.value_):e+=this.value_,this.lazyHash_=n_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,a=Ke.VALUE_TYPE_ORDER.indexOf(n),c=Ke.VALUE_TYPE_ORDER.indexOf(s);return F(a>=0,"Unknown leaf type: "+n),F(c>=0,"Unknown leaf type: "+s),a===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P_,A_;function NE(i){P_=i}function TE(i){A_=i}class RE extends za{compare(e,n){const s=e.node.getPriority(),a=n.node.getPriority(),c=s.compareTo(a);return c===0?wi(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(kr,new Ke("[PRIORITY-POST]",A_))}makePost(e,n){const s=P_(e);return new le(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const Fe=new RE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=Math.log(2);class PE{constructor(e){const n=c=>parseInt(Math.log(c)/bE,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ka=function(i,e,n,s){i.sort(e);const a=function(m,_){const x=_-m;let v,w;if(x===0)return null;if(x===1)return v=i[m],w=n?n(v):v,new Ye(w,v.node,Ye.BLACK,null,null);{const T=parseInt(x/2,10)+m,b=a(m,T),M=a(T+1,_);return v=i[T],w=n?n(v):v,new Ye(w,v.node,Ye.BLACK,b,M)}},c=function(m){let _=null,x=null,v=i.length;const w=function(b,M){const O=v-b,te=v;v-=b;const R=a(O+1,te),G=i[O],K=n?n(G):G;T(new Ye(K,G.node,M,null,R))},T=function(b){_?(_.left=b,_=b):(x=b,_=b)};for(let b=0;b<m.count;++b){const M=m.nextBitIsOne(),O=Math.pow(2,m.count-(b+1));M?w(O,Ye.BLACK):(w(O,Ye.BLACK),w(O,Ye.RED))}return x},d=new PE(i.length),f=c(d);return new vt(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu;const Zr={};class fn{static get Default(){return F(Zr&&Fe,"ChildrenNode.ts has not been loaded"),iu=iu||new fn({".priority":Zr},{".priority":Fe}),iu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ci(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof vt?n:null}hasIndex(e){return vn(this.indexSet_,e.toString())}addIndex(e,n){F(e!==ai,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const c=n.getIterator(le.Wrap);let d=c.getNext();for(;d;)a=a||e.isDefinedOn(d.node),s.push(d),d=c.getNext();let f;a?f=ka(s,e.getCompare()):f=Zr;const m=e.toString(),_=Object.assign({},this.indexSet_);_[m]=e;const x=Object.assign({},this.indexes_);return x[m]=f,new fn(x,_)}addToIndexes(e,n){const s=ha(this.indexes_,(a,c)=>{const d=ci(this.indexSet_,c);if(F(d,"Missing index implementation for "+c),a===Zr)if(d.isDefinedOn(e.node)){const f=[],m=n.getIterator(le.Wrap);let _=m.getNext();for(;_;)_.name!==e.name&&f.push(_),_=m.getNext();return f.push(e),ka(f,d.getCompare())}else return Zr;else{const f=n.get(e.name);let m=a;return f&&(m=m.remove(new le(e.name,f))),m.insert(e,e.node)}});return new fn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ha(this.indexes_,a=>{if(a===Zr)return a;{const c=n.get(e.name);return c?a.remove(new le(e.name,c)):a}});return new fn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds;class Z{static get EMPTY_NODE(){return ds||(ds=new Z(new vt(rd),null,fn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&b_(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ds}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ds:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new le(e,n);let a,c;n.isEmpty()?(a=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(s,this.children_));const d=a.isEmpty()?ds:this.priorityNode_;return new Z(a,d,c)}}updateChild(e,n){const s=ae(e);if(s===null)return n;{F(ae(e)!==".priority"||Xn(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(Ne(e),n);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,a=0,c=!0;if(this.forEachChild(Fe,(d,f)=>{n[d]=f.val(e),s++,c&&Z.INTEGER_REGEXP_.test(d)?a=Math.max(a,Number(d)):c=!1}),!e&&c&&a<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+R_(this.getPriority().val())+":"),this.forEachChild(Fe,(n,s)=>{const a=s.hash();a!==""&&(e+=":"+n+":"+a)}),this.lazyHash_=e===""?"":n_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const a=this.resolveIndex_(s);if(a){const c=a.getPredecessorKey(new le(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>n(a.name,a.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,le.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)<0;)a.getNext(),c=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)>0;)a.getNext(),c=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zs?-1:0}withIndex(e){if(e===ai||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ai||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Fe),a=n.getIterator(Fe);let c=s.getNext(),d=a.getNext();for(;c&&d;){if(c.name!==d.name||!c.node.equals(d.node))return!1;c=s.getNext(),d=a.getNext()}return c===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===ai?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class AE extends Z{constructor(){super(new vt(rd),Z.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const zs=new AE;Object.defineProperties(le,{MIN:{value:new le(hi,Z.EMPTY_NODE)},MAX:{value:new le(kr,zs)}});T_.__EMPTY_NODE=Z.EMPTY_NODE;Ke.__childrenNodeConstructor=Z;IE(zs);TE(zs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=!0;function et(i,e=null){if(i===null)return Z.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new Ke(n,et(e))}if(!(i instanceof Array)&&DE){const n=[];let s=!1;if(xt(i,(d,f)=>{if(d.substring(0,1)!=="."){const m=et(f);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new le(d,m)))}}),n.length===0)return Z.EMPTY_NODE;const c=ka(n,SE,d=>d.name,rd);if(s){const d=ka(n,Fe.getCompare());return new Z(c,et(e),new fn({".priority":d},{".priority":Fe}))}else return new Z(c,et(e),fn.Default)}else{let n=Z.EMPTY_NODE;return xt(i,(s,a)=>{if(vn(i,s)&&s.substring(0,1)!=="."){const c=et(a);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(s,c))}}),n.updatePriority(et(e))}}NE(et);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE extends za{constructor(e){super(),this.indexPath_=e,F(!ue(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),a=this.extractChild(n.node),c=s.compareTo(a);return c===0?wi(e.name,n.name):c}makePost(e,n){const s=et(e),a=Z.EMPTY_NODE.updateChild(this.indexPath_,s);return new le(n,a)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,zs);return new le(kr,e)}toString(){return S_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE extends za{compare(e,n){const s=e.node.compareTo(n.node);return s===0?wi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const s=et(e);return new le(n,s)}toString(){return".value"}}const ME=new LE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(i){return{type:"value",snapshotNode:i}}function fi(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function Ns(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function Ts(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function jE(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.index_=e}updateChild(e,n,s,a,c,d){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(a).equals(s.getChild(a))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Ns(n,f)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(fi(n,s)):d.trackChildChange(Ts(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Fe,(a,c)=>{n.hasChild(a)||s.trackChildChange(Ns(a,c))}),n.isLeafNode()||n.forEachChild(Fe,(a,c)=>{if(e.hasChild(a)){const d=e.getImmediateChild(a);d.equals(c)||s.trackChildChange(Ts(a,c,d))}else s.trackChildChange(fi(a,c))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.indexedFilter_=new id(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rs.getStartPost_(e),this.endPost_=Rs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,a,c,d){return this.matches(new le(n,s))||(s=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,a,c,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=Z.EMPTY_NODE);let a=n.withIndex(this.index_);a=a.updatePriority(Z.EMPTY_NODE);const c=this;return n.forEachChild(Fe,(d,f)=>{c.matches(new le(d,f))||(a=a.updateImmediateChild(d,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Rs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,a,c,d){return this.rangedFilter_.matches(new le(n,s))||(s=Z.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,a,c,d):this.fullLimitUpdateChild_(e,n,s,c,d)}updateFullNode(e,n,s){let a;if(n.isLeafNode()||n.isEmpty())a=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){a=Z.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;c.hasNext()&&d<this.limit_;){const f=c.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))a=a.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{a=n.withIndex(this.index_),a=a.updatePriority(Z.EMPTY_NODE);let c;this.reverse_?c=a.getReverseIterator(this.index_):c=a.getIterator(this.index_);let d=0;for(;c.hasNext();){const f=c.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:a=a.updateImmediateChild(f.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,a,c){let d;if(this.reverse_){const v=this.index_.getCompare();d=(w,T)=>v(T,w)}else d=this.index_.getCompare();const f=e;F(f.numChildren()===this.limit_,"");const m=new le(n,s),_=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),x=this.rangedFilter_.matches(m);if(f.hasChild(n)){const v=f.getImmediateChild(n);let w=a.getChildAfterChild(this.index_,_,this.reverse_);for(;w!=null&&(w.name===n||f.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const T=w==null?1:d(w,m);if(x&&!s.isEmpty()&&T>=0)return c?.trackChildChange(Ts(n,s,v)),f.updateImmediateChild(n,s);{c?.trackChildChange(Ns(n,v));const M=f.updateImmediateChild(n,Z.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(c?.trackChildChange(fi(w.name,w.node)),M.updateImmediateChild(w.name,w.node)):M}}else return s.isEmpty()?e:x&&d(_,m)>=0?(c!=null&&(c.trackChildChange(Ns(_.name,_.node)),c.trackChildChange(fi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(_.name,Z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hi}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new sd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function UE(i){return i.loadsAllData()?new id(i.getIndex()):i.hasLimit()?new FE(i):new Rs(i)}function Om(i){const e={};if(i.isDefault())return e;let n;if(i.index_===Fe?n="$priority":i.index_===ME?n="$value":i.index_===ai?n="$key":(F(i.index_ instanceof OE,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=Qe(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=Qe(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+Qe(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=Qe(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+Qe(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function Lm(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==Fe&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends k_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Us("p:rest:"),this.listens_={}}listen(e,n,s,a){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const d=Ea.getListenId_(e,s),f={};this.listens_[d]=f;const m=Om(e._queryParams);this.restRequest_(c+".json",m,(_,x)=>{let v=x;if(_===404&&(v=null,_=null),_===null&&this.onDataUpdate_(c,v,!1,s),ci(this.listens_,d)===f){let w;_?_===401?w="permission_denied":w="rest_error:"+_:w="ok",a(w,null)}})}unlisten(e,n){const s=Ea.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Om(e._queryParams),s=e._path.toString(),a=new Oa;return this.restRequest_(s+".json",n,(c,d)=>{let f=d;c===404&&(f=null,c=null),c===null?(this.onDataUpdate_(s,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,c])=>{a&&a.accessToken&&(n.auth=a.accessToken),c&&c.token&&(n.ac=c.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_i(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=ks(f.responseText)}catch{wt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,m)}else f.status!==401&&f.status!==404&&wt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(){return{value:null,children:new Map}}function O_(i,e,n){if(ue(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=ae(e);i.children.has(s)||i.children.set(s,Ca());const a=i.children.get(s);e=Ne(e),O_(a,e,n)}}function ku(i,e,n){i.value!==null?n(e,i.value):WE(i,(s,a)=>{const c=new Ee(e.toString()+"/"+s);ku(a,c,n)})}function WE(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&xt(this.last_,(s,a)=>{n[s]=n[s]-a}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=10*1e3,HE=30*1e3,VE=5*60*1e3;class $E{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new BE(e);const s=Mm+(HE-Mm)*Math.random();ys(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;xt(e,(a,c)=>{c>0&&vn(this.statsToReport_,a)&&(n[a]=c,s=!0)}),s&&this.server_.reportStats(n),ys(this.reportStats_.bind(this),Math.floor(Math.random()*2*VE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gt||(Gt={}));function L_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function od(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ad(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Gt.ACK_USER_WRITE,this.source=L_()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Sa(_e(),n,this.revert)}}else return F(ae(this.path)===e,"operationForChild called for unrelated child."),new Sa(Ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.source=e,this.path=n,this.type=Gt.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new bs(this.source,_e()):new bs(this.source,Ne(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Gt.OVERWRITE}operationForChild(e){return ue(this.path)?new Er(this.source,_e(),this.snap.getImmediateChild(e)):new Er(this.source,Ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Gt.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new Er(this.source,_e(),n.value):new Ps(this.source,_e(),n)}else return F(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ps(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qE(i,e,n,s){const a=[],c=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&c.push(jE(d.childName,d.snapshotNode))}),hs(i,a,"child_removed",e,s,n),hs(i,a,"child_added",e,s,n),hs(i,a,"child_moved",c,s,n),hs(i,a,"child_changed",e,s,n),hs(i,a,"value",e,s,n),a}function hs(i,e,n,s,a,c){const d=s.filter(f=>f.type===n);d.sort((f,m)=>YE(i,f,m)),d.forEach(f=>{const m=KE(i,f,c);a.forEach(_=>{_.respondsTo(f.type)&&e.push(_.createEvent(m,i.query_))})})}function KE(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function YE(i,e,n){if(e.childName==null||n.childName==null)throw mi("Should only compare child_ events.");const s=new le(e.childName,e.snapshotNode),a=new le(n.childName,n.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(i,e){return{eventCache:i,serverCache:e}}function vs(i,e,n,s){return Wa(new Cr(e,n,s),i.serverCache)}function M_(i,e,n,s){return Wa(i.eventCache,new Cr(e,n,s))}function Eu(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Sr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su;const QE=()=>(su||(su=new vt(Lk)),su);class be{static fromObject(e){let n=new be(null);return xt(e,(s,a)=>{n=n.set(new Ee(s),a)}),n}constructor(e,n=QE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(ue(e))return null;{const s=ae(e),a=this.children.get(s);if(a!==null){const c=a.findRootMostMatchingPathAndValue(Ne(e),n);return c!=null?{path:Ve(new Ee(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=ae(e),s=this.children.get(n);return s!==null?s.subtree(Ne(e)):new be(null)}}set(e,n){if(ue(e))return new be(n,this.children);{const s=ae(e),c=(this.children.get(s)||new be(null)).set(Ne(e),n),d=this.children.insert(s,c);return new be(this.value,d)}}remove(e){if(ue(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=ae(e),s=this.children.get(n);if(s){const a=s.remove(Ne(e));let c;return a.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,a),this.value===null&&c.isEmpty()?new be(null):new be(this.value,c)}else return this}}get(e){if(ue(e))return this.value;{const n=ae(e),s=this.children.get(n);return s?s.get(Ne(e)):null}}setTree(e,n){if(ue(e))return n;{const s=ae(e),c=(this.children.get(s)||new be(null)).setTree(Ne(e),n);let d;return c.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,c),new be(this.value,d)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((a,c)=>{s[a]=c.fold_(Ve(e,a),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,s){const a=this.value?s(n,this.value):!1;if(a)return a;if(ue(e))return null;{const c=ae(e),d=this.children.get(c);return d?d.findOnPath_(Ne(e),Ve(n,c),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,s){if(ue(e))return this;{this.value&&s(n,this.value);const a=ae(e),c=this.children.get(a);return c?c.foreachOnPath_(Ne(e),Ve(n,a),s):new be(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((s,a)=>{a.foreach_(Ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new be(null))}}function ws(i,e,n){if(ue(e))return new qt(new be(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let c=s.value;const d=yt(a,e);return c=c.updateChild(d,n),new qt(i.writeTree_.set(a,c))}else{const a=new be(n),c=i.writeTree_.setTree(e,a);return new qt(c)}}}function jm(i,e,n){let s=i;return xt(n,(a,c)=>{s=ws(s,Ve(e,a),c)}),s}function Fm(i,e){if(ue(e))return qt.empty();{const n=i.writeTree_.setTree(e,new be(null));return new qt(n)}}function Cu(i,e){return Nr(i,e)!=null}function Nr(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(yt(n.path,e)):null}function Um(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(s,a)=>{e.push(new le(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new le(s,a.value))}),e}function Qn(i,e){if(ue(e))return i;{const n=Nr(i,e);return n!=null?new qt(new be(n)):new qt(i.writeTree_.subtree(e))}}function Su(i){return i.writeTree_.isEmpty()}function pi(i,e){return j_(_e(),i.writeTree_,e)}function j_(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,c)=>{a===".priority"?(F(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):n=j_(Ve(i,a),c,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Ve(i,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(i,e){return W_(e,i)}function XE(i,e,n,s,a){F(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:a}),a&&(i.visibleWrites=ws(i.visibleWrites,e,n)),i.lastWriteId=s}function JE(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function ZE(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let a=s.visible,c=!1,d=i.allWrites.length-1;for(;a&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&eC(f,s.path)?a=!1:$t(s.path,f.path)&&(c=!0)),d--}if(a){if(c)return tC(i),!0;if(s.snap)i.visibleWrites=Fm(i.visibleWrites,s.path);else{const f=s.children;xt(f,m=>{i.visibleWrites=Fm(i.visibleWrites,Ve(s.path,m))})}return!0}else return!1}function eC(i,e){if(i.snap)return $t(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&$t(Ve(i.path,n),e))return!0;return!1}function tC(i){i.visibleWrites=F_(i.allWrites,nC,_e()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function nC(i){return i.visible}function F_(i,e,n){let s=qt.empty();for(let a=0;a<i.length;++a){const c=i[a];if(e(c)){const d=c.path;let f;if(c.snap)$t(n,d)?(f=yt(n,d),s=ws(s,f,c.snap)):$t(d,n)&&(f=yt(d,n),s=ws(s,_e(),c.snap.getChild(f)));else if(c.children){if($t(n,d))f=yt(n,d),s=jm(s,f,c.children);else if($t(d,n))if(f=yt(d,n),ue(f))s=jm(s,_e(),c.children);else{const m=ci(c.children,ae(f));if(m){const _=m.getChild(Ne(f));s=ws(s,_e(),_)}}}else throw mi("WriteRecord should have .snap or .children")}}return s}function U_(i,e,n,s,a){if(!s&&!a){const c=Nr(i.visibleWrites,e);if(c!=null)return c;{const d=Qn(i.visibleWrites,e);if(Su(d))return n;if(n==null&&!Cu(d,_e()))return null;{const f=n||Z.EMPTY_NODE;return pi(d,f)}}}else{const c=Qn(i.visibleWrites,e);if(!a&&Su(c))return n;if(!a&&n==null&&!Cu(c,_e()))return null;{const d=function(_){return(_.visible||a)&&(!s||!~s.indexOf(_.writeId))&&($t(_.path,e)||$t(e,_.path))},f=F_(i.allWrites,d,e),m=n||Z.EMPTY_NODE;return pi(f,m)}}}function rC(i,e,n){let s=Z.EMPTY_NODE;const a=Nr(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(Fe,(c,d)=>{s=s.updateImmediateChild(c,d)}),s;if(n){const c=Qn(i.visibleWrites,e);return n.forEachChild(Fe,(d,f)=>{const m=pi(Qn(c,new Ee(d)),f);s=s.updateImmediateChild(d,m)}),Um(c).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const c=Qn(i.visibleWrites,e);return Um(c).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function iC(i,e,n,s,a){F(s||a,"Either existingEventSnap or existingServerSnap must exist");const c=Ve(e,n);if(Cu(i.visibleWrites,c))return null;{const d=Qn(i.visibleWrites,c);return Su(d)?a.getChild(n):pi(d,a.getChild(n))}}function sC(i,e,n,s){const a=Ve(e,n),c=Nr(i.visibleWrites,a);if(c!=null)return c;if(s.isCompleteForChild(n)){const d=Qn(i.visibleWrites,a);return pi(d,s.getNode().getImmediateChild(n))}else return null}function oC(i,e){return Nr(i.visibleWrites,e)}function aC(i,e,n,s,a,c,d){let f;const m=Qn(i.visibleWrites,e),_=Nr(m,_e());if(_!=null)f=_;else if(n!=null)f=pi(m,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const x=[],v=d.getCompare(),w=c?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let T=w.getNext();for(;T&&x.length<a;)v(T,s)!==0&&x.push(T),T=w.getNext();return x}else return[]}function lC(){return{visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1}}function Ia(i,e,n,s){return U_(i.writeTree,i.treePath,e,n,s)}function cd(i,e){return rC(i.writeTree,i.treePath,e)}function zm(i,e,n,s){return iC(i.writeTree,i.treePath,e,n,s)}function Na(i,e){return oC(i.writeTree,Ve(i.treePath,e))}function cC(i,e,n,s,a,c){return aC(i.writeTree,i.treePath,e,n,s,a,c)}function ud(i,e,n){return sC(i.writeTree,i.treePath,e,n)}function z_(i,e){return W_(Ve(i.treePath,e),i.writeTree)}function W_(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const c=a.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(s,Ts(s,e.snapshotNode,a.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(s,Ns(s,a.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(s,fi(s,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(s,Ts(s,e.snapshotNode,a.oldSnap));else throw mi("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const B_=new dC;class dd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Cr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ud(this.writes_,e,s)}}getChildAfterChild(e,n,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Sr(this.viewCache_),c=cC(this.writes_,a,n,1,s,e);return c.length===0?null:c[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(i){return{filter:i}}function fC(i,e){F(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function pC(i,e,n,s,a){const c=new uC;let d,f;if(n.type===Gt.OVERWRITE){const _=n;_.source.fromUser?d=Iu(i,e,_.path,_.snap,s,a,c):(F(_.source.fromServer,"Unknown source."),f=_.source.tagged||e.serverCache.isFiltered()&&!ue(_.path),d=Ta(i,e,_.path,_.snap,s,a,f,c))}else if(n.type===Gt.MERGE){const _=n;_.source.fromUser?d=gC(i,e,_.path,_.children,s,a,c):(F(_.source.fromServer,"Unknown source."),f=_.source.tagged||e.serverCache.isFiltered(),d=Nu(i,e,_.path,_.children,s,a,f,c))}else if(n.type===Gt.ACK_USER_WRITE){const _=n;_.revert?d=vC(i,e,_.path,s,a,c):d=_C(i,e,_.path,_.affectedTree,s,a,c)}else if(n.type===Gt.LISTEN_COMPLETE)d=yC(i,e,n.path,s,c);else throw mi("Unknown operation type: "+n.type);const m=c.getChanges();return mC(e,d,m),{viewCache:d,changes:m}}function mC(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=Eu(i);(n.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&n.push(D_(Eu(e)))}}function H_(i,e,n,s,a,c){const d=e.eventCache;if(Na(s,n)!=null)return e;{let f,m;if(ue(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const _=Sr(e),x=_ instanceof Z?_:Z.EMPTY_NODE,v=cd(s,x);f=i.filter.updateFullNode(e.eventCache.getNode(),v,c)}else{const _=Ia(s,Sr(e));f=i.filter.updateFullNode(e.eventCache.getNode(),_,c)}else{const _=ae(n);if(_===".priority"){F(Xn(n)===1,"Can't have a priority with additional path components");const x=d.getNode();m=e.serverCache.getNode();const v=zm(s,n,x,m);v!=null?f=i.filter.updatePriority(x,v):f=d.getNode()}else{const x=Ne(n);let v;if(d.isCompleteForChild(_)){m=e.serverCache.getNode();const w=zm(s,n,d.getNode(),m);w!=null?v=d.getNode().getImmediateChild(_).updateChild(x,w):v=d.getNode().getImmediateChild(_)}else v=ud(s,_,e.serverCache);v!=null?f=i.filter.updateChild(d.getNode(),_,v,x,a,c):f=d.getNode()}}return vs(e,f,d.isFullyInitialized()||ue(n),i.filter.filtersNodes())}}function Ta(i,e,n,s,a,c,d,f){const m=e.serverCache;let _;const x=d?i.filter:i.filter.getIndexedFilter();if(ue(n))_=x.updateFullNode(m.getNode(),s,null);else if(x.filtersNodes()&&!m.isFiltered()){const T=m.getNode().updateChild(n,s);_=x.updateFullNode(m.getNode(),T,null)}else{const T=ae(n);if(!m.isCompleteForPath(n)&&Xn(n)>1)return e;const b=Ne(n),O=m.getNode().getImmediateChild(T).updateChild(b,s);T===".priority"?_=x.updatePriority(m.getNode(),O):_=x.updateChild(m.getNode(),T,O,b,B_,null)}const v=M_(e,_,m.isFullyInitialized()||ue(n),x.filtersNodes()),w=new dd(a,v,c);return H_(i,v,n,a,w,f)}function Iu(i,e,n,s,a,c,d){const f=e.eventCache;let m,_;const x=new dd(a,e,c);if(ue(n))_=i.filter.updateFullNode(e.eventCache.getNode(),s,d),m=vs(e,_,!0,i.filter.filtersNodes());else{const v=ae(n);if(v===".priority")_=i.filter.updatePriority(e.eventCache.getNode(),s),m=vs(e,_,f.isFullyInitialized(),f.isFiltered());else{const w=Ne(n),T=f.getNode().getImmediateChild(v);let b;if(ue(w))b=s;else{const M=x.getCompleteChild(v);M!=null?C_(w)===".priority"&&M.getChild(I_(w)).isEmpty()?b=M:b=M.updateChild(w,s):b=Z.EMPTY_NODE}if(T.equals(b))m=e;else{const M=i.filter.updateChild(f.getNode(),v,b,w,x,d);m=vs(e,M,f.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function Wm(i,e){return i.eventCache.isCompleteForChild(e)}function gC(i,e,n,s,a,c,d){let f=e;return s.foreach((m,_)=>{const x=Ve(n,m);Wm(e,ae(x))&&(f=Iu(i,f,x,_,a,c,d))}),s.foreach((m,_)=>{const x=Ve(n,m);Wm(e,ae(x))||(f=Iu(i,f,x,_,a,c,d))}),f}function Bm(i,e,n){return n.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Nu(i,e,n,s,a,c,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,_;ue(n)?_=s:_=new be(null).setTree(n,s);const x=e.serverCache.getNode();return _.children.inorderTraversal((v,w)=>{if(x.hasChild(v)){const T=e.serverCache.getNode().getImmediateChild(v),b=Bm(i,T,w);m=Ta(i,m,new Ee(v),b,a,c,d,f)}}),_.children.inorderTraversal((v,w)=>{const T=!e.serverCache.isCompleteForChild(v)&&w.value===null;if(!x.hasChild(v)&&!T){const b=e.serverCache.getNode().getImmediateChild(v),M=Bm(i,b,w);m=Ta(i,m,new Ee(v),M,a,c,d,f)}}),m}function _C(i,e,n,s,a,c,d){if(Na(a,n)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(ue(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return Ta(i,e,n,m.getNode().getChild(n),a,c,f,d);if(ue(n)){let _=new be(null);return m.getNode().forEachChild(ai,(x,v)=>{_=_.set(new Ee(x),v)}),Nu(i,e,n,_,a,c,f,d)}else return e}else{let _=new be(null);return s.foreach((x,v)=>{const w=Ve(n,x);m.isCompleteForPath(w)&&(_=_.set(x,m.getNode().getChild(w)))}),Nu(i,e,n,_,a,c,f,d)}}function yC(i,e,n,s,a){const c=e.serverCache,d=M_(e,c.getNode(),c.isFullyInitialized()||ue(n),c.isFiltered());return H_(i,d,n,s,B_,a)}function vC(i,e,n,s,a,c){let d;if(Na(s,n)!=null)return e;{const f=new dd(s,e,a),m=e.eventCache.getNode();let _;if(ue(n)||ae(n)===".priority"){let x;if(e.serverCache.isFullyInitialized())x=Ia(s,Sr(e));else{const v=e.serverCache.getNode();F(v instanceof Z,"serverChildren would be complete if leaf node"),x=cd(s,v)}x=x,_=i.filter.updateFullNode(m,x,c)}else{const x=ae(n);let v=ud(s,x,e.serverCache);v==null&&e.serverCache.isCompleteForChild(x)&&(v=m.getImmediateChild(x)),v!=null?_=i.filter.updateChild(m,x,v,Ne(n),f,c):e.eventCache.getNode().hasChild(x)?_=i.filter.updateChild(m,x,Z.EMPTY_NODE,Ne(n),f,c):_=m,_.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Ia(s,Sr(e)),d.isLeafNode()&&(_=i.filter.updateFullNode(_,d,c)))}return d=e.serverCache.isFullyInitialized()||Na(s,_e())!=null,vs(e,_,d,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new id(s.getIndex()),c=UE(s);this.processor_=hC(c);const d=n.serverCache,f=n.eventCache,m=a.updateFullNode(Z.EMPTY_NODE,d.getNode(),null),_=c.updateFullNode(Z.EMPTY_NODE,f.getNode(),null),x=new Cr(m,d.isFullyInitialized(),a.filtersNodes()),v=new Cr(_,f.isFullyInitialized(),c.filtersNodes());this.viewCache_=Wa(v,x),this.eventGenerator_=new GE(this.query_)}get query(){return this.query_}}function xC(i){return i.viewCache_.serverCache.getNode()}function kC(i,e){const n=Sr(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function Hm(i){return i.eventRegistrations_.length===0}function EC(i,e){i.eventRegistrations_.push(e)}function Vm(i,e,n){const s=[];if(n){F(e==null,"A cancel should cancel all event registrations.");const a=i.query._path;i.eventRegistrations_.forEach(c=>{const d=c.createCancelEvent(n,a);d&&s.push(d)})}if(e){let a=[];for(let c=0;c<i.eventRegistrations_.length;++c){const d=i.eventRegistrations_[c];if(!d.matches(e))a.push(d);else if(e.hasAnyCallback()){a=a.concat(i.eventRegistrations_.slice(c+1));break}}i.eventRegistrations_=a}else i.eventRegistrations_=[];return s}function $m(i,e,n,s){e.type===Gt.MERGE&&e.source.queryId!==null&&(F(Sr(i.viewCache_),"We should always have a full cache before handling merges"),F(Eu(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,c=pC(i.processor_,a,e,n,s);return fC(i.processor_,c.viewCache),F(c.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=c.viewCache,V_(i,c.changes,c.viewCache.eventCache.getNode(),null)}function CC(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(c,d)=>{s.push(fi(c,d))}),n.isFullyInitialized()&&s.push(D_(n.getNode())),V_(i,s,n.getNode(),e)}function V_(i,e,n,s){const a=s?[s]:i.eventRegistrations_;return qE(i.eventGenerator_,e,n,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra;class SC{constructor(){this.views=new Map}}function IC(i){F(!Ra,"__referenceConstructor has already been defined"),Ra=i}function NC(){return F(Ra,"Reference.ts has not been loaded"),Ra}function TC(i){return i.views.size===0}function hd(i,e,n,s){const a=e.source.queryId;if(a!==null){const c=i.views.get(a);return F(c!=null,"SyncTree gave us an op for an invalid query."),$m(c,e,n,s)}else{let c=[];for(const d of i.views.values())c=c.concat($m(d,e,n,s));return c}}function RC(i,e,n,s,a){const c=e._queryIdentifier,d=i.views.get(c);if(!d){let f=Ia(n,a?s:null),m=!1;f?m=!0:s instanceof Z?(f=cd(n,s),m=!1):(f=Z.EMPTY_NODE,m=!1);const _=Wa(new Cr(f,m,!1),new Cr(s,a,!1));return new wC(e,_)}return d}function bC(i,e,n,s,a,c){const d=RC(i,e,s,a,c);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),EC(d,n),CC(d,n)}function PC(i,e,n,s){const a=e._queryIdentifier,c=[];let d=[];const f=Jn(i);if(a==="default")for(const[m,_]of i.views.entries())d=d.concat(Vm(_,n,s)),Hm(_)&&(i.views.delete(m),_.query._queryParams.loadsAllData()||c.push(_.query));else{const m=i.views.get(a);m&&(d=d.concat(Vm(m,n,s)),Hm(m)&&(i.views.delete(a),m.query._queryParams.loadsAllData()||c.push(m.query)))}return f&&!Jn(i)&&c.push(new(NC())(e._repo,e._path)),{removed:c,events:d}}function $_(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function li(i,e){let n=null;for(const s of i.views.values())n=n||kC(s,e);return n}function G_(i,e){if(e._queryParams.loadsAllData())return Ba(i);{const s=e._queryIdentifier;return i.views.get(s)}}function q_(i,e){return G_(i,e)!=null}function Jn(i){return Ba(i)!=null}function Ba(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba;function AC(i){F(!ba,"__referenceConstructor has already been defined"),ba=i}function DC(){return F(ba,"Reference.ts has not been loaded"),ba}let OC=1;class Gm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=lC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function K_(i,e,n,s,a){return XE(i.pendingWriteTree_,e,n,s,a),a?Ws(i,new Er(L_(),e,n)):[]}function yr(i,e,n=!1){const s=JE(i.pendingWriteTree_,e);if(ZE(i.pendingWriteTree_,e)){let c=new be(null);return s.snap!=null?c=c.set(_e(),!0):xt(s.children,d=>{c=c.set(new Ee(d),!0)}),Ws(i,new Sa(s.path,c,n))}else return[]}function Ha(i,e,n){return Ws(i,new Er(od(),e,n))}function LC(i,e,n){const s=be.fromObject(n);return Ws(i,new Ps(od(),e,s))}function MC(i,e){return Ws(i,new bs(od(),e))}function jC(i,e,n){const s=pd(i,n);if(s){const a=md(s),c=a.path,d=a.queryId,f=yt(c,e),m=new bs(ad(d),f);return gd(i,c,m)}else return[]}function Tu(i,e,n,s,a=!1){const c=e._path,d=i.syncPointTree_.get(c);let f=[];if(d&&(e._queryIdentifier==="default"||q_(d,e))){const m=PC(d,e,n,s);TC(d)&&(i.syncPointTree_=i.syncPointTree_.remove(c));const _=m.removed;if(f=m.events,!a){const x=_.findIndex(w=>w._queryParams.loadsAllData())!==-1,v=i.syncPointTree_.findOnPath(c,(w,T)=>Jn(T));if(x&&!v){const w=i.syncPointTree_.subtree(c);if(!w.isEmpty()){const T=zC(w);for(let b=0;b<T.length;++b){const M=T[b],O=M.query,te=X_(i,M);i.listenProvider_.startListening(xs(O),Pa(i,O),te.hashFn,te.onComplete)}}}!v&&_.length>0&&!s&&(x?i.listenProvider_.stopListening(xs(e),null):_.forEach(w=>{const T=i.queryToTagMap.get(Va(w));i.listenProvider_.stopListening(xs(w),T)}))}WC(i,_)}return f}function FC(i,e,n,s){const a=pd(i,s);if(a!=null){const c=md(a),d=c.path,f=c.queryId,m=yt(d,e),_=new Er(ad(f),m,n);return gd(i,d,_)}else return[]}function UC(i,e,n,s){const a=pd(i,s);if(a){const c=md(a),d=c.path,f=c.queryId,m=yt(d,e),_=be.fromObject(n),x=new Ps(ad(f),m,_);return gd(i,d,x)}else return[]}function qm(i,e,n,s=!1){const a=e._path;let c=null,d=!1;i.syncPointTree_.foreachOnPath(a,(w,T)=>{const b=yt(w,a);c=c||li(T,b),d=d||Jn(T)});let f=i.syncPointTree_.get(a);f?(d=d||Jn(f),c=c||li(f,_e())):(f=new SC,i.syncPointTree_=i.syncPointTree_.set(a,f));let m;c!=null?m=!0:(m=!1,c=Z.EMPTY_NODE,i.syncPointTree_.subtree(a).foreachChild((T,b)=>{const M=li(b,_e());M&&(c=c.updateImmediateChild(T,M))}));const _=q_(f,e);if(!_&&!e._queryParams.loadsAllData()){const w=Va(e);F(!i.queryToTagMap.has(w),"View does not exist, but we have a tag");const T=BC();i.queryToTagMap.set(w,T),i.tagToQueryMap.set(T,w)}const x=ld(i.pendingWriteTree_,a);let v=bC(f,e,n,x,c,m);if(!_&&!d&&!s){const w=G_(f,e);v=v.concat(HC(i,e,w))}return v}function fd(i,e,n){const a=i.pendingWriteTree_,c=i.syncPointTree_.findOnPath(e,(d,f)=>{const m=yt(d,e),_=li(f,m);if(_)return _});return U_(a,e,c,n,!0)}function Ws(i,e){return Y_(e,i.syncPointTree_,null,ld(i.pendingWriteTree_,_e()))}function Y_(i,e,n,s){if(ue(i.path))return Q_(i,e,n,s);{const a=e.get(_e());n==null&&a!=null&&(n=li(a,_e()));let c=[];const d=ae(i.path),f=i.operationForChild(d),m=e.children.get(d);if(m&&f){const _=n?n.getImmediateChild(d):null,x=z_(s,d);c=c.concat(Y_(f,m,_,x))}return a&&(c=c.concat(hd(a,i,s,n))),c}}function Q_(i,e,n,s){const a=e.get(_e());n==null&&a!=null&&(n=li(a,_e()));let c=[];return e.children.inorderTraversal((d,f)=>{const m=n?n.getImmediateChild(d):null,_=z_(s,d),x=i.operationForChild(d);x&&(c=c.concat(Q_(x,f,m,_)))}),a&&(c=c.concat(hd(a,i,s,n))),c}function X_(i,e){const n=e.query,s=Pa(i,n);return{hashFn:()=>(xC(e)||Z.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?jC(i,n._path,s):MC(i,n._path);{const c=Fk(a,n);return Tu(i,n,null,c)}}}}function Pa(i,e){const n=Va(e);return i.queryToTagMap.get(n)}function Va(i){return i._path.toString()+"$"+i._queryIdentifier}function pd(i,e){return i.tagToQueryMap.get(e)}function md(i){const e=i.indexOf("$");return F(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new Ee(i.substr(0,e))}}function gd(i,e,n){const s=i.syncPointTree_.get(e);F(s,"Missing sync point for query tag that we're tracking");const a=ld(i.pendingWriteTree_,e);return hd(s,n,a,null)}function zC(i){return i.fold((e,n,s)=>{if(n&&Jn(n))return[Ba(n)];{let a=[];return n&&(a=$_(n)),xt(s,(c,d)=>{a=a.concat(d)}),a}})}function xs(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(DC())(i._repo,i._path):i}function WC(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const a=Va(s),c=i.queryToTagMap.get(a);i.queryToTagMap.delete(a),i.tagToQueryMap.delete(c)}}}function BC(){return OC++}function HC(i,e,n){const s=e._path,a=Pa(i,e),c=X_(i,n),d=i.listenProvider_.startListening(xs(e),a,c.hashFn,c.onComplete),f=i.syncPointTree_.subtree(s);if(a)F(!Jn(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((_,x,v)=>{if(!ue(_)&&x&&Jn(x))return[Ba(x).query];{let w=[];return x&&(w=w.concat($_(x).map(T=>T.query))),xt(v,(T,b)=>{w=w.concat(b)}),w}});for(let _=0;_<m.length;++_){const x=m[_];i.listenProvider_.stopListening(xs(x),Pa(i,x))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new _d(n)}node(){return this.node_}}class yd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new yd(this.syncTree_,n)}node(){return fd(this.syncTree_,this.path_)}}const VC=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Km=function(i,e,n){if(!i||typeof i!="object")return i;if(F(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return $C(i[".sv"],e,n);if(typeof i[".sv"]=="object")return GC(i[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},$C=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+i)}},GC=function(i,e,n){i.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&F(!1,"Unexpected increment value: "+s);const a=e.node();if(F(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const d=a.getValue();return typeof d!="number"?s:d+s},qC=function(i,e,n,s){return vd(e,new yd(n,i),s)},J_=function(i,e,n){return vd(i,new _d(e),n)};function vd(i,e,n){const s=i.getPriority().val(),a=Km(s,e.getImmediateChild(".priority"),n);let c;if(i.isLeafNode()){const d=i,f=Km(d.getValue(),e,n);return f!==d.getValue()||a!==d.getPriority().val()?new Ke(f,et(a)):i}else{const d=i;return c=d,a!==d.getPriority().val()&&(c=c.updatePriority(new Ke(a))),d.forEachChild(Fe,(f,m)=>{const _=vd(m,e.getImmediateChild(f),n);_!==m&&(c=c.updateImmediateChild(f,_))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function xd(i,e){let n=e instanceof Ee?e:new Ee(e),s=i,a=ae(n);for(;a!==null;){const c=ci(s.node.children,a)||{children:{},childCount:0};s=new wd(a,s,c),n=Ne(n),a=ae(n)}return s}function ki(i){return i.node.value}function Z_(i,e){i.node.value=e,Ru(i)}function ey(i){return i.node.childCount>0}function KC(i){return ki(i)===void 0&&!ey(i)}function $a(i,e){xt(i.node.children,(n,s)=>{e(new wd(n,i,s))})}function ty(i,e,n,s){n&&e(i),$a(i,a=>{ty(a,e,!0)})}function YC(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Bs(i){return new Ee(i.parent===null?i.name:Bs(i.parent)+"/"+i.name)}function Ru(i){i.parent!==null&&QC(i.parent,i.name,i)}function QC(i,e,n){const s=KC(n),a=vn(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,Ru(i)):!s&&!a&&(i.node.children[e]=n.node,i.node.childCount++,Ru(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=/[\[\].#$\/\u0000-\u001F\u007F]/,JC=/[\[\].#$\u0000-\u001F\u007F]/,ou=10*1024*1024,ny=function(i){return typeof i=="string"&&i.length!==0&&!XC.test(i)},ry=function(i){return typeof i=="string"&&i.length!==0&&!JC.test(i)},ZC=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),ry(i)},eS=function(i,e,n,s){kd(Fu(i,"value"),e,n)},kd=function(i,e,n){const s=n instanceof Ee?new _E(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+gr(s));if(typeof e=="function")throw new Error(i+"contains a function "+gr(s)+" with contents = "+e.toString());if(r_(e))throw new Error(i+"contains "+e.toString()+" "+gr(s));if(typeof e=="string"&&e.length>ou/3&&La(e)>ou)throw new Error(i+"contains a string greater than "+ou+" utf8 bytes "+gr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,c=!1;if(xt(e,(d,f)=>{if(d===".value")a=!0;else if(d!==".priority"&&d!==".sv"&&(c=!0,!ny(d)))throw new Error(i+" contains an invalid key ("+d+") "+gr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yE(s,d),kd(i,f,s),vE(s)}),a&&c)throw new Error(i+' contains ".value" child '+gr(s)+" in addition to actual children.")}},iy=function(i,e,n,s){if(!ry(n))throw new Error(Fu(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},tS=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),iy(i,e,n)},nS=function(i,e){if(ae(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},rS=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ny(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ZC(n))throw new Error(Fu(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ed(i,e){let n=null;for(let s=0;s<e.length;s++){const a=e[s],c=a.getPath();n!==null&&!td(c,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(a)}n&&i.eventLists_.push(n)}function sy(i,e,n){Ed(i,n),oy(i,s=>td(s,e))}function yn(i,e,n){Ed(i,n),oy(i,s=>$t(s,e)||$t(e,s))}function oy(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const c=a.path;e(c)?(sS(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function sS(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();_s&&ot("event: "+n.toString()),xi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="repo_interrupt",aS=25;class lS{constructor(e,n,s,a){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new iS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ca(),this.transactionQueueTree_=new wd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cS(i,e,n){if(i.stats_=Zu(i.repoInfo_),i.forceRestClient_||Bk())i.server_=new Ea(i.repoInfo_,(s,a,c,d)=>{Ym(i,s,a,c,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Qm(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new pn(i.repoInfo_,e,(s,a,c,d)=>{Ym(i,s,a,c,d)},s=>{Qm(i,s)},s=>{dS(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=qk(i.repoInfo_,()=>new $E(i.stats_,i.server_)),i.infoData_=new zE,i.infoSyncTree_=new Gm({startListening:(s,a,c,d)=>{let f=[];const m=i.infoData_.getNode(s._path);return m.isEmpty()||(f=Ha(i.infoSyncTree_,s._path,m),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Sd(i,"connected",!1),i.serverSyncTree_=new Gm({startListening:(s,a,c,d)=>(i.server_.listen(s,c,a,(f,m)=>{const _=d(f,m);yn(i.eventQueue_,s._path,_)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function uS(i){const n=i.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Cd(i){return VC({timestamp:uS(i)})}function Ym(i,e,n,s,a){i.dataUpdateCount++;const c=new Ee(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(a)if(s){const m=ha(n,_=>et(_));d=UC(i.serverSyncTree_,c,m,a)}else{const m=et(n);d=FC(i.serverSyncTree_,c,m,a)}else if(s){const m=ha(n,_=>et(_));d=LC(i.serverSyncTree_,c,m)}else{const m=et(n);d=Ha(i.serverSyncTree_,c,m)}let f=c;d.length>0&&(f=Ga(i,c)),yn(i.eventQueue_,f,d)}function Qm(i,e){Sd(i,"connected",e),e===!1&&fS(i)}function dS(i,e){xt(e,(n,s)=>{Sd(i,n,s)})}function Sd(i,e,n){const s=new Ee("/.info/"+e),a=et(n);i.infoData_.updateSnapshot(s,a);const c=Ha(i.infoSyncTree_,s,a);yn(i.eventQueue_,s,c)}function ay(i){return i.nextWriteId_++}function hS(i,e,n,s,a){Id(i,"set",{path:e.toString(),value:n,priority:s});const c=Cd(i),d=et(n,s),f=fd(i.serverSyncTree_,e),m=J_(d,f,c),_=ay(i),x=K_(i.serverSyncTree_,e,m,_,!0);Ed(i.eventQueue_,x),i.server_.put(e.toString(),d.val(!0),(w,T)=>{const b=w==="ok";b||wt("set at "+e+" failed: "+w);const M=yr(i.serverSyncTree_,_,!b);yn(i.eventQueue_,e,M),_S(i,a,w,T)});const v=hy(i,e);Ga(i,v),yn(i.eventQueue_,v,[])}function fS(i){Id(i,"onDisconnectEvents");const e=Cd(i),n=Ca();ku(i.onDisconnect_,_e(),(a,c)=>{const d=qC(a,c,i.serverSyncTree_,e);O_(n,a,d)});let s=[];ku(n,_e(),(a,c)=>{s=s.concat(Ha(i.serverSyncTree_,a,c));const d=hy(i,a);Ga(i,d)}),i.onDisconnect_=Ca(),yn(i.eventQueue_,_e(),s)}function pS(i,e,n){let s;ae(e._path)===".info"?s=qm(i.infoSyncTree_,e,n):s=qm(i.serverSyncTree_,e,n),sy(i.eventQueue_,e._path,s)}function mS(i,e,n){let s;ae(e._path)===".info"?s=Tu(i.infoSyncTree_,e,n):s=Tu(i.serverSyncTree_,e,n),sy(i.eventQueue_,e._path,s)}function gS(i){i.persistentConnection_&&i.persistentConnection_.interrupt(oS)}function Id(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),ot(n,...e)}function _S(i,e,n,s){e&&xi(()=>{if(n==="ok")e(null);else{const a=(n||"error").toUpperCase();let c=a;s&&(c+=": "+s);const d=new Error(c);d.code=a,e(d)}})}function ly(i,e,n){return fd(i.serverSyncTree_,e,n)||Z.EMPTY_NODE}function Nd(i,e=i.transactionQueueTree_){if(e||qa(i,e),ki(e)){const n=uy(i,e);F(n.length>0,"Sending zero length transaction queue"),n.every(a=>a.status===0)&&yS(i,Bs(e),n)}else ey(e)&&$a(e,n=>{Nd(i,n)})}function yS(i,e,n){const s=n.map(_=>_.currentWriteId),a=ly(i,e,s);let c=a;const d=a.hash();for(let _=0;_<n.length;_++){const x=n[_];F(x.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),x.status=1,x.retryCount++;const v=yt(e,x.path);c=c.updateChild(v,x.currentOutputSnapshotRaw)}const f=c.val(!0),m=e;i.server_.put(m.toString(),f,_=>{Id(i,"transaction put response",{path:m.toString(),status:_});let x=[];if(_==="ok"){const v=[];for(let w=0;w<n.length;w++)n[w].status=2,x=x.concat(yr(i.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&v.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();qa(i,xd(i.transactionQueueTree_,e)),Nd(i,i.transactionQueueTree_),yn(i.eventQueue_,e,x);for(let w=0;w<v.length;w++)xi(v[w])}else{if(_==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{wt("transaction at "+m.toString()+" failed: "+_);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=_}Ga(i,e)}},d)}function Ga(i,e){const n=cy(i,e),s=Bs(n),a=uy(i,n);return vS(i,a,s),s}function vS(i,e,n){if(e.length===0)return;const s=[];let a=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],_=yt(n,m.path);let x=!1,v;if(F(_!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)x=!0,v=m.abortReason,a=a.concat(yr(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=aS)x=!0,v="maxretry",a=a.concat(yr(i.serverSyncTree_,m.currentWriteId,!0));else{const w=ly(i,m.path,d);m.currentInputSnapshot=w;const T=e[f].update(w.val());if(T!==void 0){kd("transaction failed: Data returned ",T,m.path);let b=et(T);typeof T=="object"&&T!=null&&vn(T,".priority")||(b=b.updatePriority(w.getPriority()));const O=m.currentWriteId,te=Cd(i),R=J_(b,w,te);m.currentOutputSnapshotRaw=b,m.currentOutputSnapshotResolved=R,m.currentWriteId=ay(i),d.splice(d.indexOf(O),1),a=a.concat(K_(i.serverSyncTree_,m.path,R,m.currentWriteId,m.applyLocally)),a=a.concat(yr(i.serverSyncTree_,O,!0))}else x=!0,v="nodata",a=a.concat(yr(i.serverSyncTree_,m.currentWriteId,!0))}yn(i.eventQueue_,n,a),a=[],x&&(e[f].status=2,function(w){setTimeout(w,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}qa(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)xi(s[f]);Nd(i,i.transactionQueueTree_)}function cy(i,e){let n,s=i.transactionQueueTree_;for(n=ae(e);n!==null&&ki(s)===void 0;)s=xd(s,n),e=Ne(e),n=ae(e);return s}function uy(i,e){const n=[];return dy(i,e,n),n.sort((s,a)=>s.order-a.order),n}function dy(i,e,n){const s=ki(e);if(s)for(let a=0;a<s.length;a++)n.push(s[a]);$a(e,a=>{dy(i,a,n)})}function qa(i,e){const n=ki(e);if(n){let s=0;for(let a=0;a<n.length;a++)n[a].status!==2&&(n[s]=n[a],s++);n.length=s,Z_(e,n.length>0?n:void 0)}$a(e,s=>{qa(i,s)})}function hy(i,e){const n=Bs(cy(i,e)),s=xd(i.transactionQueueTree_,e);return YC(s,a=>{au(i,a)}),au(i,s),ty(s,a=>{au(i,a)}),n}function au(i,e){const n=ki(e);if(n){const s=[];let a=[],c=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(F(c===d-1,"All SENT items should be at beginning of queue."),c=d,n[d].status=3,n[d].abortReason="set"):(F(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),a=a.concat(yr(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));c===-1?Z_(e,void 0):n.length=c+1,yn(i.eventQueue_,Bs(e),a);for(let d=0;d<s.length;d++)xi(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let a=n[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function xS(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):wt(`Invalid query segment '${n}' in query '${i}'`)}return e}const Xm=function(i,e){const n=kS(i),s=n.namespace;n.domain==="firebase.com"&&_n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&_n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Dk();const a=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new m_(n.host,n.secure,s,a,e,"",s!==n.subdomain),path:new Ee(n.pathString)}},kS=function(i){let e="",n="",s="",a="",c="",d=!0,f="https",m=443;if(typeof i=="string"){let _=i.indexOf("//");_>=0&&(f=i.substring(0,_-1),i=i.substring(_+2));let x=i.indexOf("/");x===-1&&(x=i.length);let v=i.indexOf("?");v===-1&&(v=i.length),e=i.substring(0,Math.min(x,v)),x<v&&(a=wS(i.substring(x,v)));const w=xS(i.substring(Math.min(i.length,v)));_=e.indexOf(":"),_>=0?(d=f==="https"||f==="wss",m=parseInt(e.substring(_+1),10)):_=e.length;const T=e.slice(0,_);if(T.toLowerCase()==="localhost")n="localhost";else if(T.split(".").length<=2)n=T;else{const b=e.indexOf(".");s=e.substring(0,b).toLowerCase(),n=e.substring(b+1),c=s}"ns"in w&&(c=w.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:d,scheme:f,pathString:a,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n,s,a){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Qe(this.snapshot.exportVal())}}class CS{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Td{constructor(e,n,s,a){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=a}get key(){return ue(this._path)?null:C_(this._path)}get ref(){return new tr(this._repo,this._path)}get _queryIdentifier(){const e=Lm(this._queryParams),n=Xu(e);return n==="{}"?"default":n}get _queryObject(){return Lm(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof Td))return!1;const n=this._repo===e._repo,s=td(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return n&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+gE(this._path)}}class tr extends Td{constructor(e,n){super(e,n,new sd,!1)}get parent(){const e=I_(this._path);return e===null?null:new tr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Aa{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),s=bu(this.ref,e);return new Aa(this._node.getChild(n),s,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new Aa(a,bu(this.ref,s),Fe)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jm(i,e){return i=Ot(i),i._checkNotDeleted("ref"),e!==void 0?bu(i._root,e):i._root}function bu(i,e){return i=Ot(i),ae(i._path)===null?tS("child","path",e):iy("child","path",e),new tr(i._repo,Ve(i._path,e))}function IS(i,e){i=Ot(i),nS("set",i._path),eS("set",e,i._path);const n=new Oa;return hS(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}class Rd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new ES("value",this,new Aa(e.snapshotNode,new tr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new CS(this,e,n):null}matches(e){return e instanceof Rd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function NS(i,e,n,s,a){const c=new SS(n,void 0),d=new Rd(c);return pS(i._repo,i,d),()=>mS(i._repo,i,d)}function TS(i,e,n,s){return NS(i,"value",e)}IC(tr);AC(tr);/**
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
 */const RS="FIREBASE_DATABASE_EMULATOR_HOST",Pu={};let bS=!1;function PS(i,e,n,s){const a=e.lastIndexOf(":"),c=e.substring(0,a),d=gi(c);i.repoInfo_=new m_(e,d,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function AS(i,e,n,s,a){let c=s||i.options.databaseURL;c===void 0&&(i.options.projectId||_n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",i.options.projectId),c=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=Xm(c,a),f=d.repoInfo,m;typeof process<"u"&&_m&&(m=_m[RS]),m?(c=`http://${m}?ns=${f.namespace}`,d=Xm(c,a),f=d.repoInfo):d.repoInfo.secure;const _=new Vk(i.name,i.options,e);rS("Invalid Firebase Database URL",d),ue(d.path)||_n("Database URL must point to the root of a Firebase Database (not including a child path).");const x=OS(f,i,_,new Hk(i,n));return new LS(x,i)}function DS(i,e){const n=Pu[e];(!n||n[i.key]!==i)&&_n(`Database ${e}(${i.repoInfo_}) has already been deleted.`),gS(i),delete n[i.key]}function OS(i,e,n,s){let a=Pu[e.name];a||(a={},Pu[e.name]=a);let c=a[i.toURLString()];return c&&_n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new lS(i,bS,n,s),a[i.toURLString()]=c,c}class LS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tr(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_n("Cannot call "+e+" on a deleted database.")}}function MS(i=yg(),e){const n=Wu(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=M0("database");s&&jS(n,...s)}return n}function jS(i,e,n,s={}){i=Ot(i),i._checkNotDeleted("useEmulator");const a=`${e}:${n}`,c=i._repoInternal;if(i._instanceStarted){if(a===i._repoInternal.repoInfo_.host&&vr(s,c.repoInfo_.emulatorOptions))return;_n("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(c.repoInfo_.nodeAdmin)s.mockUserToken&&_n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new la(la.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:j0(s.mockUserToken,i.app.options.projectId);d=new la(f)}gi(e)&&(dg(e),hg("Database",!0)),PS(c,a,s,d)}/**
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
 */function FS(i){Nk(yi),ui(new wr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return AS(s,a,c,n)},"PUBLIC").setMultipleInstances(!0)),Kn(ym,vm,i),Kn(ym,vm,"esm2017")}pn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};pn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};FS();const US={apiKey:"AIzaSyCTA3NZsYoSeGskrIL_2isF2aCqLpEsRYc",authDomain:"rbgh-app.firebaseapp.com",databaseURL:"https://rbgh-app-default-rtdb.europe-west1.firebasedatabase.app",projectId:"rbgh-app",storageBucket:"rbgh-app.firebasestorage.app",messagingSenderId:"955092745966",appId:"1:955092745966:web:237adaa1a37752a93ebdff",measurementId:"G-004FZK6EXT"},fy=_g(US),lu=Ek(fy),Zm=MS(fy),zS=I0(i=>({user:null,isLoading:!1,error:null,isAuthenticated:!1,login:async({emailOrUsername:e,password:n})=>{i({isLoading:!0,error:null});try{const a=(await u1(lu,e,n)).user;i({user:{id:a.uid,email:a.email||"",username:a.displayName||"",name:a.displayName||""},isAuthenticated:!0,isLoading:!1})}catch(s){i({error:s.message||"Login failed",isLoading:!1})}},logout:async()=>{await lu.signOut(),i({user:null,isAuthenticated:!1,error:null})},forgotPassword:async e=>{i({isLoading:!0,error:null});try{await c1(lu,e),i({isLoading:!1})}catch(n){i({error:n.message||"Failed to send reset email",isLoading:!1})}},clearError:()=>i({error:null})})),Ka=()=>{const{user:i,isLoading:e,error:n,isAuthenticated:s,login:a,logout:c,forgotPassword:d,clearError:f}=zS();return{user:i,isLoading:e,error:n,isAuthenticated:s,login:a,logout:c,forgotPassword:d,clearError:f}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var WS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ye=(i,e)=>{const n=q.forwardRef(({color:s="currentColor",size:a=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:f="",children:m,..._},x)=>q.createElement("svg",{ref:x,...WS,width:a,height:a,stroke:s,strokeWidth:d?Number(c)*24/Number(a):c,className:["lucide",`lucide-${BS(i)}`,f].join(" "),..._},[...e.map(([v,w])=>q.createElement(v,w)),...Array.isArray(m)?m:[m]]));return n.displayName=`${i}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=ye("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=ye("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=ye("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=ye("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=ye("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=ye("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=ye("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=ye("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=ye("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=ye("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=ye("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=ye("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=ye("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=ye("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=ye("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=ye("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=ye("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=ye("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=ye("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=ye("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=ye("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=ye("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=ye("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=ye("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=ye("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=ye("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=ye("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=ye("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),nI=({size:i="md",className:e=""})=>{const n={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8"};return p.jsx(XS,{className:`animate-spin ${n[i]} ${e}`})},ge=({variant:i="primary",size:e="md",loading:n=!1,children:s,className:a="",disabled:c,...d})=>{const f="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",m={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700",secondary:"bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-md hover:shadow-lg dark:bg-gray-600 dark:hover:bg-gray-700",outline:"border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-blue-500 dark:focus:ring-blue-400",ghost:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400"},_={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"};return p.jsxs("button",{className:`${f} ${m[i]} ${_[e]} ${a}`,disabled:c||n,...d,children:[n&&p.jsx(nI,{size:"sm",className:"mr-2"}),s]})},Da=q.forwardRef(({label:i,error:e,icon:n,className:s="",...a},c)=>p.jsxs("div",{className:"space-y-1",children:[i&&p.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:i}),p.jsxs("div",{className:"relative",children:[n&&p.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:p.jsx("div",{className:"text-gray-400 dark:text-gray-500",children:n})}),p.jsx("input",{ref:c,className:`
              block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
              focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-1 dark:focus:ring-offset-gray-800
              disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-400 transition-all duration-200
              ${n?"pl-10":""}
              ${e?"border-red-500 dark:border-red-500 focus:border-red-500 focus:ring-red-500":""}
              ${s}
            `,...a})]}),e&&p.jsx("p",{className:"text-sm text-red-600 dark:text-red-400 mt-1",children:e})]}));Da.displayName="Input";const Dd=i=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i),rI=i=>i.length>=3&&/^[a-zA-Z0-9_]+$/.test(i),iI=i=>i.length>=6,rg=i=>Dd(i)?"email":"username",sI=({onForgotPassword:i})=>{const[e,n]=q.useState({emailOrUsername:"",password:""}),[s,a]=q.useState({}),[c,d]=q.useState(!1),[f,m]=q.useState({}),{login:_,isLoading:x,error:v,clearError:w}=Ka();q.useEffect(()=>{if(v){const R=setTimeout(()=>{w()},5e3);return()=>clearTimeout(R)}},[v,w]);const T=()=>{const R={};if(!e.emailOrUsername.trim())R.emailOrUsername="Email or username is required";else{const G=rg(e.emailOrUsername);G==="email"&&!Dd(e.emailOrUsername)?R.emailOrUsername="Please enter a valid email address":G==="username"&&!rI(e.emailOrUsername)&&(R.emailOrUsername="Username must be at least 3 characters and contain only letters, numbers, and underscores")}return e.password?iI(e.password)||(R.password="Password must be at least 6 characters"):R.password="Password is required",a(R),Object.keys(R).length===0},b=async R=>{R.preventDefault(),T()&&await _(e)},M=(R,G)=>{n(K=>({...K,[R]:G})),f[R]&&a(K=>({...K,[R]:""}))},O=R=>{m(G=>({...G,[R]:!0})),T()},te=rg(e.emailOrUsername)==="email"?p.jsx(Du,{size:20}):p.jsx(gy,{size:20});return p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-3 sm:p-4",children:p.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:p.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700",children:p.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4",children:p.jsx(eg,{className:"w-8 h-8 text-white"})}),p.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2",children:"Welcome Back"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm sm:text-base",children:"Sign in to your account to continue"})]}),v&&p.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-2 text-red-700 dark:text-red-400",children:[p.jsx(py,{size:20}),p.jsx("span",{className:"text-sm font-medium flex-1",children:v})]}),p.jsxs("form",{onSubmit:b,className:"space-y-5 sm:space-y-6",children:[p.jsx(Da,{label:"Email or Username",type:"text",placeholder:"Enter your email or username",value:e.emailOrUsername,onChange:R=>M("emailOrUsername",R.target.value),onBlur:()=>O("emailOrUsername"),error:s.emailOrUsername,icon:te,disabled:x}),p.jsxs("div",{className:"relative",children:[p.jsx(Da,{label:"Password",type:c?"text":"password",placeholder:"Enter your password",value:e.password,onChange:R=>M("password",R.target.value),onBlur:()=>O("password"),error:s.password,icon:p.jsx(eg,{size:20}),disabled:x}),p.jsx("button",{type:"button",className:"absolute right-3 top-8 text-gray-400 hover:text-gray-600 transition-colors",onClick:()=>d(!c),children:c?p.jsx(YS,{size:20}):p.jsx(Pd,{size:20})})]}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("label",{className:"flex items-center space-x-2",children:[p.jsx("input",{type:"checkbox",className:"w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded focus:ring-blue-500"}),p.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Remember me"})]}),p.jsx("button",{type:"button",onClick:i,className:"text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors",children:"Forgot password?"})]}),p.jsxs(ge,{type:"submit",loading:x,className:"w-full",size:"lg",children:["Sign In",!x&&p.jsx(HS,{className:"ml-2 w-5 h-5"})]})]})]})})})})},oI=({onBackToLogin:i})=>{const[e,n]=q.useState(""),[s,a]=q.useState(""),[c,d]=q.useState(!1),[f,m]=q.useState(!1),{forgotPassword:_,isLoading:x}=Ka(),v=()=>e.trim()?Dd(e)?(a(""),!0):(a("Please enter a valid email address"),!1):(a("Email is required"),!1),w=async M=>{M.preventDefault(),v()&&(await _(e),d(!0))},T=M=>{n(M),f&&a("")},b=()=>{m(!0),v()};return c?p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-3 sm:p-4",children:p.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:p.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700",children:p.jsxs("div",{className:"px-6 sm:px-8 py-8 sm:py-12 text-center",children:[p.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6",children:p.jsx($S,{className:"w-8 h-8 text-green-600"})}),p.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4",children:"Check Your Email"}),p.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-sm sm:text-base",children:["We've sent a password reset link to"," ",p.jsx("span",{className:"font-medium text-gray-900 dark:text-white break-all",children:e}),". Please check your email and follow the instructions to reset your password."]}),p.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[p.jsxs(ge,{onClick:i,variant:"primary",className:"w-full",size:"lg",children:[p.jsx(Au,{className:"mr-2 w-5 h-5"}),"Back to Login"]}),p.jsx(ge,{onClick:()=>d(!1),variant:"ghost",className:"w-full",children:"Didn't receive the email?"})]})]})})})}):p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-3 sm:p-4",children:p.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:p.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700",children:p.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-4",children:p.jsx(Du,{className:"w-8 h-8 text-white"})}),p.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2",children:"Reset Password"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm sm:text-base",children:"Enter your email address and we'll send you a link to reset your password"})]}),s&&p.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-2 text-red-700 dark:text-red-400",children:[p.jsx(py,{size:20}),p.jsx("span",{className:"text-sm font-medium flex-1",children:s})]}),p.jsxs("form",{onSubmit:w,className:"space-y-5 sm:space-y-6",children:[p.jsx(Da,{label:"Email Address",type:"email",placeholder:"Enter your email address",value:e,onChange:M=>T(M.target.value),onBlur:b,error:s,icon:p.jsx(Du,{size:20}),disabled:x}),p.jsx(ge,{type:"submit",loading:x,className:"w-full",size:"lg",children:"Send Reset Link"})]}),p.jsx("div",{className:"mt-5 sm:mt-6 text-center",children:p.jsxs("button",{type:"button",onClick:i,className:"inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors",children:[p.jsx(Au,{className:"mr-2 w-4 h-4"}),"Back to Login"]})})]})})})})},aI=({onCheckIn:i,onShowQR:e,onOpenFridge:n})=>{const[s,a]=q.useState(!1),[c,d]=q.useState(!1),[f,m]=q.useState({x:20,y:20}),[_,x]=q.useState({x:0,y:0}),[v,w]=q.useState(!1),[T,b]=q.useState("PXL"),[M,O]=q.useState(0),te=q.useRef(null),R=q.useRef(null),G=[{id:"PXL",name:"PXL Campus",color:"bg-blue-500 hover:bg-blue-600"},{id:"RBGH",name:"RBGH Center",color:"bg-green-500 hover:bg-green-600"},{id:"STREAM",name:"STREAM Hub",color:"bg-purple-500 hover:bg-purple-600"}],K=ne=>{if(v)return;const xe="touches"in ne?ne.touches[0].clientX:ne.clientX,De="touches"in ne?ne.touches[0].clientY:ne.clientY;d(!0),x({x:xe-f.x,y:De-f.y})},re=ne=>{if(!c)return;const xe="touches"in ne?ne.touches[0].clientX:ne.clientX,De="touches"in ne?ne.touches[0].clientY:ne.clientY,Xe=xe-_.x,lt=De-_.y,Nt=window.innerWidth-64,tt=window.innerHeight-64;m({x:Math.max(0,Math.min(Xe,Nt)),y:Math.max(0,Math.min(lt,tt))})},ie=()=>{d(!1)};q.useEffect(()=>{if(c)return document.addEventListener("mousemove",re),document.addEventListener("mouseup",ie),document.addEventListener("touchmove",re),document.addEventListener("touchend",ie),()=>{document.removeEventListener("mousemove",re),document.removeEventListener("mouseup",ie),document.removeEventListener("touchmove",re),document.removeEventListener("touchend",ie)}},[c,_]),q.useEffect(()=>{const ne=xe=>{if(xe.key==="Escape"&&(v?w(!1):s&&a(!1)),v){if(xe.key==="Enter"&&at(),xe.key==="ArrowUp"||xe.key==="ArrowDown"){xe.preventDefault();const De=G.findIndex(lt=>lt.id===T),Xe=xe.key==="ArrowUp"?(De-1+G.length)%G.length:(De+1)%G.length;b(G[Xe].id)}(xe.key==="+"||xe.key==="=")&&(xe.preventDefault(),O(De=>Math.min(De+1,10))),(xe.key==="-"||xe.key==="_")&&(xe.preventDefault(),O(De=>Math.max(De-1,0)))}};return document.addEventListener("keydown",ne),()=>document.removeEventListener("keydown",ne)},[s,v,T,M]),q.useEffect(()=>{const ne=xe=>{R.current&&!R.current.contains(xe.target)&&w(!1),te.current&&!te.current.contains(xe.target)&&!v&&a(!1)};return document.addEventListener("mousedown",ne),()=>document.removeEventListener("mousedown",ne)},[v]);const Ce=()=>{c||a(!s)},he=()=>{w(!0),a(!1)},at=()=>{const ne=Array(M).fill("").map((xe,De)=>`friend_${De+1}`);i(T,ne),w(!1),O(0)};return p.jsxs(p.Fragment,{children:[p.jsx("div",{ref:te,className:"fixed z-50 select-none",style:{right:`${f.x}px`,bottom:`${f.y}px`},children:p.jsxs("div",{className:"relative",children:[s&&p.jsxs("div",{className:"absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-200",children:[p.jsx(ge,{onClick:n,className:"w-12 h-12 rounded-full shadow-lg bg-orange-500 hover:bg-orange-600 text-white p-0","aria-label":"Open fridge",children:p.jsx(my,{className:"w-6 h-6"})}),p.jsx(ge,{onClick:e,className:"w-12 h-12 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white p-0","aria-label":"Show QR code",children:p.jsx(ZS,{className:"w-6 h-6"})}),p.jsx(ge,{onClick:he,className:"w-12 h-12 rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 text-white p-0","aria-label":"Check in",children:p.jsx(Ds,{className:"w-6 h-6"})})]}),p.jsx("button",{onMouseDown:K,onTouchStart:K,onClick:Ce,className:`w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-500/30 ${c?"cursor-grabbing scale-110":"cursor-grab hover:scale-105"}`,"aria-label":s?"Close menu":"Open check-in menu",children:p.jsx("div",{className:`transition-transform duration-200 ${s?"rotate-45":""}`,children:p.jsx($n,{className:"w-7 h-7"})})})]})}),v&&p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{ref:R,className:"bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200",children:[p.jsxs("div",{className:"flex items-center justify-between mb-6",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Check In"}),p.jsx("button",{onClick:()=>w(!1),className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors","aria-label":"Close modal",children:p.jsx(Ad,{className:"w-6 h-6"})})]}),p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:"Choose Location"}),p.jsx("div",{className:"space-y-2",children:G.map(ne=>p.jsx("button",{onClick:()=>b(ne.id),className:`w-full p-3 rounded-lg border-2 transition-all text-left ${T===ne.id?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"}`,children:p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:`w-4 h-4 rounded-full ${ne.color.split(" ")[0]}`}),p.jsx("span",{className:"font-medium text-gray-900 dark:text-white",children:ne.name})]})},ne.id))})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:"Check in with friends"}),p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsx("button",{onClick:()=>O(ne=>Math.max(ne-1,0)),className:"w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors","aria-label":"Decrease friend count",children:p.jsx(ni,{className:"w-5 h-5 text-gray-600 dark:text-gray-300"})}),p.jsxs("div",{className:"flex items-center space-x-2 min-w-0 flex-1",children:[p.jsx(Ya,{className:"w-5 h-5 text-gray-500"}),p.jsx("span",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:M}),p.jsxs("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:["friend",M!==1?"s":""]})]}),p.jsx("button",{onClick:()=>O(ne=>Math.min(ne+1,10)),className:"w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors","aria-label":"Increase friend count",children:p.jsx($n,{className:"w-5 h-5 text-gray-600 dark:text-gray-300"})})]})]}),p.jsxs("div",{className:"flex space-x-3 pt-4",children:[p.jsx(ge,{onClick:()=>w(!1),variant:"outline",className:"flex-1",children:"Cancel"}),p.jsx(ge,{onClick:at,className:"flex-1",children:"Check In"})]})]}),p.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200 dark:border-gray-600",children:p.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:"Use ↑↓ to select location, +/- for friends, Enter to check in, Esc to close"})})]})})]})},lI=({isOpen:i,onClose:e})=>{const n="https://linktr.ee/esports_pxl",s=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(n)}`;return i?p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200",children:[p.jsxs("div",{className:"flex items-center justify-between mb-6",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"QR Code"}),p.jsx("button",{onClick:e,className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors","aria-label":"Close modal",children:p.jsx(Ad,{className:"w-6 h-6"})})]}),p.jsxs("div",{className:"text-center space-y-4",children:[p.jsxs("div",{className:"bg-white p-4 rounded-xl border border-gray-200 dark:border-gray-600 inline-block",children:[p.jsx("img",{src:s,alt:"QR Code for esports_pxl",className:"w-64 h-64 mx-auto",onError:a=>{const c=a.target;c.style.display="none",c.nextElementSibling?.classList.remove("hidden")}}),p.jsx("div",{className:"hidden w-64 h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center",children:p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"text-4xl mb-2",children:"📱"}),p.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"QR Code"})]})})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Scan to visit:"}),p.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-lg p-3",children:p.jsx("p",{className:"text-sm font-mono text-gray-900 dark:text-white break-all",children:n})})]}),p.jsxs("div",{className:"flex space-x-3 pt-4",children:[p.jsx(ge,{onClick:e,variant:"outline",className:"flex-1",children:"Close"}),p.jsxs(ge,{onClick:()=>window.open(n,"_blank"),className:"flex-1",children:[p.jsx(KS,{className:"w-4 h-4 mr-2"}),"Visit"]})]})]}),p.jsx("div",{className:"mt-6 pt-4 border-t border-gray-200 dark:border-gray-600",children:p.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:"Point your camera at the QR code to open the link"})})]})}):null},cI=({onAddStock:i,onShowLog:e,onTakeItem:n})=>{const[s,a]=q.useState(!1),[c,d]=q.useState(!1),[f,m]=q.useState({x:20,y:20}),[_,x]=q.useState({x:0,y:0}),v=q.useRef(null),w=O=>{const te="touches"in O?O.touches[0].clientX:O.clientX,R="touches"in O?O.touches[0].clientY:O.clientY;d(!0),x({x:te-f.x,y:R-f.y})},T=O=>{if(!c)return;const te="touches"in O?O.touches[0].clientX:O.clientX,R="touches"in O?O.touches[0].clientY:O.clientY,G=te-_.x,K=R-_.y,re=window.innerWidth-64,ie=window.innerHeight-64;m({x:Math.max(0,Math.min(G,re)),y:Math.max(0,Math.min(K,ie))})},b=()=>{d(!1)};q.useEffect(()=>{if(c)return document.addEventListener("mousemove",T),document.addEventListener("mouseup",b),document.addEventListener("touchmove",T),document.addEventListener("touchend",b),()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",b)}},[c,_]),q.useEffect(()=>{const O=te=>{v.current&&!v.current.contains(te.target)&&a(!1)};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[]);const M=()=>{c||a(!s)};return p.jsx("div",{ref:v,className:"fixed z-50 select-none",style:{right:`${f.x}px`,bottom:`${f.y}px`},children:p.jsxs("div",{className:"relative",children:[s&&p.jsxs("div",{className:"absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-200",children:[p.jsx(ge,{onClick:e,className:"w-12 h-12 rounded-full shadow-lg bg-purple-500 hover:bg-purple-600 text-white p-0","aria-label":"Show log",children:p.jsx(Pd,{className:"w-6 h-6"})}),p.jsx(ge,{onClick:i,className:"w-12 h-12 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white p-0","aria-label":"Add stock",children:p.jsx($n,{className:"w-6 h-6"})}),p.jsx(ge,{onClick:n,className:"w-12 h-12 rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 text-white p-0","aria-label":"Take item",children:p.jsx(ni,{className:"w-6 h-6"})})]}),p.jsx("button",{onMouseDown:w,onTouchStart:w,onClick:M,className:`w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-orange-500/30 ${c?"cursor-grabbing scale-110":"cursor-grab hover:scale-105"}`,"aria-label":s?"Close fridge menu":"Open fridge menu",children:p.jsx("div",{className:`transition-transform duration-200 ${s?"rotate-45":""}`,children:p.jsx($n,{className:"w-7 h-7"})})})]})})},uI=({onBack:i})=>{const[e,n]=q.useState([{id:"1",name:"RedBull Energy Drink",stock:24,lastUpdated:new Date}]),[s,a]=q.useState([{id:"1",action:"take",amount:2,user:"Alice Johnson",timestamp:new Date(Date.now()-30*60*1e3),itemName:"RedBull Energy Drink"},{id:"2",action:"add",amount:12,user:"Bob Smith",timestamp:new Date(Date.now()-2*60*60*1e3),itemName:"RedBull Energy Drink"},{id:"3",action:"take",amount:1,user:"Carol Davis",timestamp:new Date(Date.now()-4*60*60*1e3),itemName:"RedBull Energy Drink"}]),[c,d]=q.useState(!1),[f,m]=q.useState(!1),[_,x]=q.useState(!1),[v,w]=q.useState(1),[T,b]=q.useState(1),M=R=>{const K=Math.floor((new Date().getTime()-R.getTime())/(1e3*60));if(K<1)return"Just now";if(K<60)return`${K}m ago`;const re=Math.floor(K/60);return re<24?`${re}h ago`:`${Math.floor(re/24)}d ago`},O=()=>{const R=e[0].stock;if(v>R)return;const G=R-v;n(re=>re.map(ie=>ie.id==="1"?{...ie,stock:G,lastUpdated:new Date}:ie));const K={id:Date.now().toString(),action:"take",amount:v,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};a(re=>[K,...re]),d(!1),w(1)},te=()=>{const G=e[0].stock+T;n(re=>re.map(ie=>ie.id==="1"?{...ie,stock:G,lastUpdated:new Date}:ie));const K={id:Date.now().toString(),action:"add",amount:T,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};a(re=>[K,...re]),m(!1),b(1)};return p.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 pb-20",children:[p.jsx("header",{className:"bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700",children:p.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:p.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:p.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[p.jsx(ge,{onClick:i,variant:"ghost",size:"sm",children:p.jsx(Au,{className:"w-5 h-5"})}),p.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center",children:p.jsx(my,{className:"w-6 h-6 text-white"})}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 dark:text-white",children:"Fridge"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm sm:text-base",children:"Stock management"})]})]})})})}),p.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[p.jsx("div",{className:"grid grid-cols-1 gap-4 mb-6",children:e.map(R=>p.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm",children:p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center",children:p.jsx(ng,{className:"w-8 h-8 text-white"})}),p.jsxs("div",{className:"flex-1",children:[p.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-1",children:R.name}),p.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300",children:[p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx(ng,{className:"w-4 h-4"}),p.jsxs("span",{children:[R.stock," in stock"]})]}),p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx(As,{className:"w-4 h-4"}),p.jsxs("span",{children:["Updated ",M(R.lastUpdated)]})]})]})]}),p.jsxs("div",{className:"text-right",children:[p.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:R.stock}),p.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"units"})]})]})},R.id))}),p.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700",children:[p.jsx("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700",children:p.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Recent Activity"})}),p.jsx("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:s.slice(0,5).map(R=>p.jsx("div",{className:"p-4",children:p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${R.action==="take"?"bg-red-100 dark:bg-red-900/30":"bg-green-100 dark:bg-green-900/30"}`,children:R.action==="take"?p.jsx(ni,{className:`w-4 h-4 ${R.action==="take"?"text-red-600 dark:text-red-400":"text-green-600 dark:text-green-400"}`}):p.jsx($n,{className:"w-4 h-4 text-green-600 dark:text-green-400"})}),p.jsxs("div",{className:"flex-1",children:[p.jsxs("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:[R.user," ",R.action==="take"?"took":"added"," ",R.amount," ",R.itemName]}),p.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:M(R.timestamp)})]}),p.jsxs("div",{className:`text-sm font-medium ${R.action==="take"?"text-red-600 dark:text-red-400":"text-green-600 dark:text-green-400"}`,children:[R.action==="take"?"-":"+",R.amount]})]})},R.id))})]})]}),p.jsx(cI,{onTakeItem:()=>d(!0),onAddStock:()=>m(!0),onShowLog:()=>x(!0)}),c&&p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-4",children:"Take from Stock"}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Amount to take"}),p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx(ge,{onClick:()=>w(Math.max(1,v-1)),variant:"outline",size:"sm",children:p.jsx(ni,{className:"w-4 h-4"})}),p.jsx("span",{className:"text-lg font-semibold text-gray-900 dark:text-white min-w-[3rem] text-center",children:v}),p.jsx(ge,{onClick:()=>w(Math.min(e[0].stock,v+1)),variant:"outline",size:"sm",children:p.jsx($n,{className:"w-4 h-4"})})]}),p.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:["Available: ",e[0].stock," units"]})]}),p.jsxs("div",{className:"flex space-x-3",children:[p.jsx(ge,{onClick:()=>d(!1),variant:"outline",className:"flex-1",children:"Cancel"}),p.jsx(ge,{onClick:O,className:"flex-1",children:"Take"})]})]})]})}),f&&p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-4",children:"Add to Stock"}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Amount to add"}),p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx(ge,{onClick:()=>b(Math.max(1,T-1)),variant:"outline",size:"sm",children:p.jsx(ni,{className:"w-4 h-4"})}),p.jsx("span",{className:"text-lg font-semibold text-gray-900 dark:text-white min-w-[3rem] text-center",children:T}),p.jsx(ge,{onClick:()=>b(T+1),variant:"outline",size:"sm",children:p.jsx($n,{className:"w-4 h-4"})})]})]}),p.jsxs("div",{className:"flex space-x-3",children:[p.jsx(ge,{onClick:()=>m(!1),variant:"outline",className:"flex-1",children:"Cancel"}),p.jsx(ge,{onClick:te,className:"flex-1",children:"Add"})]})]})]})}),_&&p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-2xl max-h-[80vh] overflow-hidden",children:[p.jsxs("div",{className:"flex items-center justify-between mb-4",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Activity Log"}),p.jsx(ge,{onClick:()=>x(!1),variant:"ghost",size:"sm",children:p.jsx(Ad,{className:"w-5 h-5"})})]}),p.jsx("div",{className:"overflow-y-auto max-h-96 space-y-3",children:s.map(R=>p.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",children:[p.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${R.action==="take"?"bg-red-100 dark:bg-red-900/30":"bg-green-100 dark:bg-green-900/30"}`,children:R.action==="take"?p.jsx(ni,{className:"w-4 h-4 text-red-600 dark:text-red-400"}):p.jsx($n,{className:"w-4 h-4 text-green-600 dark:text-green-400"})}),p.jsxs("div",{className:"flex-1",children:[p.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:R.user}),p.jsxs("p",{className:"text-xs text-gray-600 dark:text-gray-300",children:[R.action==="take"?"Took":"Added"," ",R.amount," units"]}),p.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[R.timestamp.toLocaleDateString()," ",R.timestamp.toLocaleTimeString()]})]}),p.jsxs("div",{className:`text-sm font-medium ${R.action==="take"?"text-red-600 dark:text-red-400":"text-green-600 dark:text-green-400"}`,children:[R.action==="take"?"-":"+",R.amount]})]},R.id))})]})})]})},dI=()=>{const{user:i,logout:e}=Ka(),[n,s]=q.useState([]),[a,c]=q.useState(""),[d,f]=q.useState("ALL"),[m,_]=q.useState(!1),[x,v]=q.useState(!1),w=[{id:"RBGH",name:"Red Bull",color:"bg-green-500"},{id:"PXL",name:"PXL",color:"bg-blue-500"},{id:"STREAM",name:"Streaming room",color:"bg-purple-500"}];q.useEffect(()=>{const R=Jm(Zm,"users"),G=TS(R,K=>{const re=K.val();if(!re){s([]);return}const ie=Object.entries(re).filter(([Ce,he])=>he.checkInStatus===!0).map(([Ce,he])=>({id:Ce,username:he.username,name:`${he.firstname} ${he.lastname}`,location:he.checkedInWhere||"Unknown",checkedInAt:new Date(he.checkedInAt??Date.now()),isResponsible:he.isResponsible||!1,friendCount:he.friendCount||0,activeAssignment:he.activeAssignment||!1,discordUsername:he.discordUsername||""}));ie.sort((Ce,he)=>Ce.isResponsible&&!he.isResponsible?-1:!Ce.isResponsible&&he.isResponsible?1:Ce.username.localeCompare(he.username)),s(ie)});return()=>G()},[]);const T=async(R,G=[])=>{if(!i)return;const K=Jm(Zm,`users/${i.id}`);await IS(K,{checkInStatus:!0,checkedInWhere:R,checkedInAt:Date.now(),username:i.username,firstname:i.name?.split(" ")[0]??"",lastname:i.name?.split(" ")[1]??"",friendCount:G.length,activeAssignment:!1,isResponsible:!1})},b=n.filter(R=>{const G=R.name.toLowerCase().includes(a.toLowerCase())||R.username.toLowerCase().includes(a.toLowerCase()),K=d==="ALL"||R.location===d;return G&&K}),M=R=>w.find(G=>G.id===R),O=R=>{const K=Math.floor((new Date().getTime()-R.getTime())/(1e3*60));if(K<1)return"Just now";if(K<60)return`${K}m ago`;const re=Math.floor(K/60);return re<24?`${re}h ago`:`${Math.floor(re/24)}d ago`},te=n.find(R=>R.id===i?.id);return x?p.jsx(uI,{onBack:()=>v(!1)}):p.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 pb-20",children:[p.jsx("header",{className:"bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700",children:p.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:p.jsxs("div",{className:"flex justify-between items-center py-3 sm:py-4",children:[p.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[p.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center",children:p.jsx(Ds,{className:"w-6 h-6 text-white"})}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 dark:text-white",children:"Check-ins"}),p.jsxs("p",{className:"text-gray-600 dark:text-gray-300 text-sm sm:text-base truncate",children:[b.length," users checked in"]})]})]}),p.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[p.jsx(ge,{variant:"ghost",size:"sm",className:"hidden sm:flex",children:p.jsx(VS,{className:"w-5 h-5"})}),p.jsx(ge,{variant:"ghost",size:"sm",className:"hidden sm:flex",children:p.jsx(tI,{className:"w-5 h-5"})}),p.jsxs(ge,{onClick:e,variant:"outline",size:"sm",className:"hidden sm:flex",children:[p.jsx(tg,{className:"w-4 h-4 mr-2"}),p.jsx("span",{children:"Logout"})]}),p.jsx(ge,{onClick:e,variant:"outline",size:"sm",className:"sm:hidden",children:p.jsx(tg,{className:"w-4 h-4"})})]})]})})}),p.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[te&&p.jsx("div",{className:"mb-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800",children:p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:`w-3 h-3 rounded-full ${M(te.location)?.color}`}),p.jsxs("div",{className:"flex-1",children:[p.jsxs("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:["You're checked in at ",M(te.location)?.name]}),p.jsxs("p",{className:"text-xs text-gray-600 dark:text-gray-300",children:[O(te.checkedInAt),(te.friendCount??0)>0&&p.jsxs("span",{className:"ml-2",children:["• With ",te.friendCount," friend",(te.friendCount??0)>1?"s":""]})]})]})]})}),p.jsxs("div",{className:"mb-6 space-y-4",children:[p.jsxs("div",{className:"relative",children:[p.jsx(eI,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),p.jsx("input",{type:"text",placeholder:"Search users...",value:a,onChange:R=>c(R.target.value),className:"w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"})]}),p.jsxs("div",{className:"flex space-x-2 overflow-x-auto pb-2",children:[p.jsx("button",{onClick:()=>f("ALL"),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${d==="ALL"?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`,children:"All Locations"}),w.map(R=>p.jsx("button",{onClick:()=>f(R.id),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${d===R.id?`${R.color} text-white`:"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`,children:R.name},R.id))]})]}),p.jsx("div",{className:"space-y-3",children:b.length===0?p.jsxs("div",{className:"text-center py-12",children:[p.jsx(Ds,{className:"w-12 h-12 text-gray-400 mx-auto mb-4"}),p.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"No users found"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:a?"Try adjusting your search terms":"No users are currently checked in"})]}):b.map(R=>{const G=M(R.location);return p.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center",children:p.jsx(gy,{className:"w-6 h-6 text-white"})}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[p.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white truncate",children:R.name}),R.id===i?.id&&p.jsx("span",{className:"px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full",children:"You"})]}),p.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-2",children:["@",R.username]}),p.jsxs("div",{className:"flex items-center space-x-4 text-sm",children:[p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx("div",{className:`w-2 h-2 rounded-full ${G?.color}`}),p.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:G?.name})]}),p.jsxs("div",{className:"flex items-center space-x-1 text-gray-500 dark:text-gray-400",children:[p.jsx(As,{className:"w-4 h-4"}),p.jsx("span",{children:O(R.checkedInAt)})]})]}),(R.friendCount??0)>0&&p.jsxs("div",{className:"flex items-center space-x-1 mt-2 text-sm text-gray-500 dark:text-gray-400",children:[p.jsx(Ya,{className:"w-4 h-4"}),p.jsxs("span",{children:["With ",R.friendCount," friend",(R.friendCount??0)>1?"s":""]})]})]})]})},`${R.id}-${R.checkedInAt.getTime()}`)})})]}),p.jsx(aI,{onCheckIn:T,onShowQR:()=>_(!0),onOpenFridge:()=>v(!0)}),p.jsx(lI,{isOpen:m,onClose:()=>_(!1)})]})},hI=()=>{const[i,e]=q.useState(new Date),n=[{id:"1",title:"Web Development Workshop",responsibles:["Alice Johnson","Bob Smith"],time:"09:00 - 12:00",location:"PXL",date:new Date(2025,0,13)},{id:"2",title:"Database Design Meeting",responsibles:["Carol Davis"],time:"14:00 - 16:00",location:"RBGH",date:new Date(2025,0,13)},{id:"3",title:"Mobile App Testing",responsibles:["David Wilson","Eva Brown"],time:"10:00 - 11:30",location:"STREAM",date:new Date(2025,0,15)},{id:"4",title:"Project Presentation",responsibles:["Alice Johnson","Carol Davis","Frank Miller"],time:"13:00 - 15:00",location:"PXL",date:new Date(2025,0,17)},{id:"5",title:"Code Review Session",responsibles:["Bob Smith"],time:"16:00 - 17:00",location:"RBGH",date:new Date(2025,0,20)}],s={PXL:{name:"PXL Campus",color:"bg-blue-500"},RBGH:{name:"RBGH Center",color:"bg-green-500"},STREAM:{name:"STREAM Hub",color:"bg-purple-500"}},c=(T=>{const b=[],M=new Date(T),O=M.getDay(),te=M.getDate()-O+(O===0?-6:1);M.setDate(te);for(let R=0;R<7;R++){const G=new Date(M);G.setDate(M.getDate()+R),b.push(G)}return b})(i),d=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],f=()=>{const T=new Date(i);T.setDate(i.getDate()-7),e(T)},m=()=>{const T=new Date(i);T.setDate(i.getDate()+7),e(T)},_=()=>{e(new Date)},x=T=>n.filter(b=>b.date.toDateString()===T.toDateString()),v=T=>{const b=new Date;return T.toDateString()===b.toDateString()},w=T=>T.toLocaleDateString("en-US",{month:"long",year:"numeric"});return p.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 pb-20",children:[p.jsx("header",{className:"bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700",children:p.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:p.jsxs("div",{className:"flex justify-between items-center py-3 sm:py-4",children:[p.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[p.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center",children:p.jsx(bd,{className:"w-6 h-6 text-white"})}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 dark:text-white",children:"Calendar"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm sm:text-base",children:w(i)})]})]}),p.jsx(ge,{onClick:_,variant:"outline",size:"sm",children:"Today"})]})})}),p.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[p.jsxs("div",{className:"flex items-center justify-between mb-6",children:[p.jsx(ge,{onClick:f,variant:"ghost",size:"sm",children:p.jsx(GS,{className:"w-5 h-5"})}),p.jsx("div",{className:"text-center",children:p.jsxs("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:[c[0].toLocaleDateString("en-US",{month:"short",day:"numeric"})," - ",c[6].toLocaleDateString("en-US",{month:"short",day:"numeric"})]})}),p.jsx(ge,{onClick:m,variant:"ghost",size:"sm",children:p.jsx(qS,{className:"w-5 h-5"})})]}),p.jsx("div",{className:"grid grid-cols-7 gap-1 sm:gap-2 mb-4",children:d.map((T,b)=>p.jsxs("div",{className:"text-center py-2",children:[p.jsx("div",{className:"text-sm font-medium text-gray-600 dark:text-gray-300 mb-1",children:T}),p.jsx("div",{className:`text-lg font-semibold rounded-lg py-2 ${v(c[b])?"bg-blue-500 text-white":"text-gray-900 dark:text-white"}`,children:c[b].getDate()})]},T))}),p.jsx("div",{className:"grid grid-cols-7 gap-1 sm:gap-4",children:c.map((T,b)=>{const M=x(T);return p.jsx("div",{className:"space-y-2",children:M.length===0?p.jsx("div",{className:"h-20"}):M.map(O=>p.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[p.jsxs("div",{className:"flex items-start space-x-2 mb-2",children:[p.jsx("div",{className:`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${s[O.location].color} mt-1 flex-shrink-0`}),p.jsx("div",{className:"min-w-0 flex-1",children:p.jsx("h3",{className:"text-xs sm:text-sm font-semibold text-gray-900 dark:text-white line-clamp-2",children:O.title})})]}),p.jsxs("div",{className:"space-y-1 text-xs text-gray-600 dark:text-gray-300 hidden sm:block",children:[p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx(As,{className:"w-3 h-3"}),p.jsx("span",{children:O.time})]}),p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx(Ds,{className:"w-3 h-3"}),p.jsx("span",{children:s[O.location].name})]}),p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx(Ya,{className:"w-3 h-3"}),p.jsx("span",{className:"truncate",children:O.responsibles.length===1?O.responsibles[0]:`${O.responsibles[0]} +${O.responsibles.length-1}`})]})]}),p.jsx("div",{className:"sm:hidden text-xs text-gray-600 dark:text-gray-300",children:p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx(As,{className:"w-3 h-3"}),p.jsx("span",{children:O.time.split(" - ")[0]})]})})]},O.id))},b)})})]})]})},fI=()=>{const[i,e]=q.useState("todo"),n=[{id:"1",title:"Web Development Workshop",responsibles:["Alice Johnson","Bob Smith"],time:"09:00 - 12:00",date:new Date(2025,0,13),location:"PXL",completed:!1},{id:"2",title:"Database Design Meeting",responsibles:["Carol Davis"],time:"14:00 - 16:00",date:new Date(2025,0,13),location:"RBGH",completed:!1},{id:"3",title:"Mobile App Testing",responsibles:["David Wilson","Eva Brown"],time:"10:00 - 11:30",date:new Date(2025,0,15),location:"STREAM",completed:!1},{id:"4",title:"React Components Workshop",responsibles:["Alice Johnson"],time:"13:00 - 16:00",date:new Date(2025,0,10),location:"PXL",completed:!0,visitors:24,remarks:"Great turnout! Students were very engaged with the hands-on exercises. Need to prepare more advanced examples for next time."},{id:"5",title:"Database Optimization Seminar",responsibles:["Bob Smith","Carol Davis"],time:"09:00 - 12:00",date:new Date(2025,0,8),location:"RBGH",completed:!0,visitors:18,remarks:"Technical session went well. Some students struggled with complex queries, consider adding a prerequisite course."},{id:"6",title:"UI/UX Design Principles",responsibles:["Eva Brown"],time:"14:00 - 17:00",date:new Date(2025,0,5),location:"STREAM",completed:!0,visitors:31,remarks:"Excellent feedback from participants. The design thinking exercises were particularly well received. Room was at capacity."}],s={PXL:{name:"PXL Campus",color:"bg-blue-500"},RBGH:{name:"RBGH Center",color:"bg-green-500"},STREAM:{name:"STREAM Hub",color:"bg-purple-500"}},a=n.filter(_=>!_.completed),c=n.filter(_=>_.completed),d=_=>{const x=new Date,v=new Date(x);return v.setDate(x.getDate()+1),_.toDateString()===x.toDateString()?"Today":_.toDateString()===v.toDateString()?"Tomorrow":_.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})},f=_=>{const x=new Date;x.setHours(0,0,0,0);const v=new Date(_);return v.setHours(0,0,0,0),v<x},m=({assignment:_,showVisitors:x=!1})=>p.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:p.jsxs("div",{className:"flex items-start space-x-3 mb-3",children:[p.jsx("div",{className:`w-4 h-4 rounded-full ${s[_.location].color} mt-1 flex-shrink-0`}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-start justify-between mb-2",children:[p.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white line-clamp-2 flex-1",children:_.title}),!_.completed&&f(_.date)&&p.jsx("span",{className:"ml-2 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs rounded-full whitespace-nowrap",children:"Overdue"})]}),p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300",children:[p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx(bd,{className:"w-4 h-4"}),p.jsx("span",{children:d(_.date)})]}),p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx(As,{className:"w-4 h-4"}),p.jsx("span",{children:_.time})]}),p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx(Ds,{className:"w-4 h-4"}),p.jsx("span",{children:s[_.location].name})]}),p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx(Ya,{className:"w-4 h-4"}),p.jsx("span",{className:"truncate",children:_.responsibles.length===1?_.responsibles[0]:`${_.responsibles[0]} +${_.responsibles.length-1}`})]})]}),x&&_.visitors!==void 0&&p.jsxs("div",{className:"mt-3 pt-3 border-t border-gray-200 dark:border-gray-600",children:[p.jsx("div",{className:"flex items-center space-x-4 text-sm",children:p.jsxs("div",{className:"flex items-center space-x-2 text-gray-600 dark:text-gray-300",children:[p.jsx(Pd,{className:"w-4 h-4"}),p.jsxs("span",{children:[_.visitors," visitors"]})]})}),_.remarks&&p.jsx("div",{className:"mt-2",children:p.jsxs("div",{className:"flex items-start space-x-2",children:[p.jsx(JS,{className:"w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0"}),p.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 leading-relaxed",children:_.remarks})]})})]})]})]})});return p.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 pb-20",children:[p.jsx("header",{className:"bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700",children:p.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:p.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:p.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[p.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center",children:p.jsx(ca,{className:"w-6 h-6 text-white"})}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 dark:text-white",children:"Assignments"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm sm:text-base",children:i==="todo"?`${a.length} pending`:`${c.length} completed`})]})]})})})}),p.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[p.jsxs("div",{className:"flex space-x-1 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-1",children:[p.jsxs("button",{onClick:()=>e("todo"),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${i==="todo"?"bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm":"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`,children:["To Do (",a.length,")"]}),p.jsxs("button",{onClick:()=>e("finished"),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${i==="finished"?"bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm":"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`,children:["Finished (",c.length,")"]})]}),p.jsx("div",{className:"space-y-4",children:i==="todo"?a.length===0?p.jsxs("div",{className:"text-center py-12",children:[p.jsx(ca,{className:"w-12 h-12 text-gray-400 mx-auto mb-4"}),p.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"No pending assignments"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"All assignments are completed. Great job!"})]}):a.sort((_,x)=>_.date.getTime()-x.date.getTime()).map(_=>p.jsx(m,{assignment:_},_.id)):c.length===0?p.jsxs("div",{className:"text-center py-12",children:[p.jsx(ca,{className:"w-12 h-12 text-gray-400 mx-auto mb-4"}),p.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"No completed assignments"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Completed assignments will appear here."})]}):c.sort((_,x)=>x.date.getTime()-_.date.getTime()).map(_=>p.jsx(m,{assignment:_,showVisitors:!0},_.id))})]})]})},pI=({activeView:i,onViewChange:e})=>{const n=[{id:"home",label:"Home",icon:QS},{id:"calendar",label:"Calendar",icon:bd},{id:"assignments",label:"Assignments",icon:ca}];return p.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-40",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4",children:p.jsx("div",{className:"flex justify-around",children:n.map(s=>{const a=s.icon,c=i===s.id;return p.jsxs("button",{onClick:()=>e(s.id),className:`flex flex-col items-center py-3 px-4 transition-colors ${c?"text-blue-600 dark:text-blue-400":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`,"aria-label":s.label,children:[p.jsx(a,{className:`w-6 h-6 mb-1 ${c?"text-blue-600 dark:text-blue-400":""}`}),p.jsx("span",{className:`text-xs font-medium ${c?"text-blue-600 dark:text-blue-400":""}`,children:s.label})]},s.id)})})})})};function mI(){const{isAuthenticated:i}=Ka(),[e,n]=q.useState("login"),[s,a]=q.useState("home");if(i)return p.jsxs(p.Fragment,{children:[s==="home"&&p.jsx(dI,{}),s==="calendar"&&p.jsx(hI,{}),s==="assignments"&&p.jsx(fI,{}),p.jsx(pI,{activeView:s,onViewChange:a})]});switch(e){case"forgot-password":return p.jsx(oI,{onBackToLogin:()=>n("login")});case"login":default:return p.jsx(sI,{onForgotPassword:()=>n("forgot-password")})}}const gI=q.createContext(void 0),_I=({children:i})=>{const[e,n]=q.useState(()=>{const c=localStorage.getItem("theme");return c||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});q.useEffect(()=>{const c=window.document.documentElement;e==="dark"?c.classList.add("dark"):c.classList.remove("dark"),localStorage.setItem("theme",e)},[e]);const s=()=>{n(c=>c==="light"?"dark":"light")},a=c=>{n(c)};return p.jsx(gI.Provider,{value:{theme:e,toggleTheme:s,setTheme:a},children:i})};k0.createRoot(document.getElementById("root")).render(p.jsx(q.StrictMode,{children:p.jsx(_I,{children:p.jsx(mI,{})})}));

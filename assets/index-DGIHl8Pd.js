(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function N1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Uf={exports:{}},El={},zf={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function P1(){if(Dy)return Ne;Dy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,M={};function z(V,q,pe){this.props=V,this.context=q,this.refs=M,this.updater=pe||b}z.prototype.isReactComponent={},z.prototype.setState=function(V,q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,q,"setState")},z.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ae(){}ae.prototype=z.prototype;function W(V,q,pe){this.props=V,this.context=q,this.refs=M,this.updater=pe||b}var ne=W.prototype=new ae;ne.constructor=W,j(ne,z.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,fe=Object.prototype.hasOwnProperty,de={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function C(V,q,pe){var ke,Ae={},Ve=null,$e=null;if(q!=null)for(ke in q.ref!==void 0&&($e=q.ref),q.key!==void 0&&(Ve=""+q.key),q)fe.call(q,ke)&&!D.hasOwnProperty(ke)&&(Ae[ke]=q[ke]);var We=arguments.length-2;if(We===1)Ae.children=pe;else if(1<We){for(var Je=Array(We),bt=0;bt<We;bt++)Je[bt]=arguments[bt+2];Ae.children=Je}if(V&&V.defaultProps)for(ke in We=V.defaultProps,We)Ae[ke]===void 0&&(Ae[ke]=We[ke]);return{$$typeof:n,type:V,key:Ve,ref:$e,props:Ae,_owner:de.current}}function k(V,q){return{$$typeof:n,type:V.type,key:q,ref:V.ref,props:V.props,_owner:V._owner}}function A(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function P(V){var q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(pe){return q[pe]})}var L=/\/+/g;function R(V,q){return typeof V=="object"&&V!==null&&V.key!=null?P(""+V.key):q.toString(36)}function Re(V,q,pe,ke,Ae){var Ve=typeof V;(Ve==="undefined"||Ve==="boolean")&&(V=null);var $e=!1;if(V===null)$e=!0;else switch(Ve){case"string":case"number":$e=!0;break;case"object":switch(V.$$typeof){case n:case e:$e=!0}}if($e)return $e=V,Ae=Ae($e),V=ke===""?"."+R($e,0):ke,re(Ae)?(pe="",V!=null&&(pe=V.replace(L,"$&/")+"/"),Re(Ae,q,pe,"",function(bt){return bt})):Ae!=null&&(A(Ae)&&(Ae=k(Ae,pe+(!Ae.key||$e&&$e.key===Ae.key?"":(""+Ae.key).replace(L,"$&/")+"/")+V)),q.push(Ae)),1;if($e=0,ke=ke===""?".":ke+":",re(V))for(var We=0;We<V.length;We++){Ve=V[We];var Je=ke+R(Ve,We);$e+=Re(Ve,q,pe,Je,Ae)}else if(Je=I(V),typeof Je=="function")for(V=Je.call(V),We=0;!(Ve=V.next()).done;)Ve=Ve.value,Je=ke+R(Ve,We++),$e+=Re(Ve,q,pe,Je,Ae);else if(Ve==="object")throw q=String(V),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return $e}function Se(V,q,pe){if(V==null)return V;var ke=[],Ae=0;return Re(V,ke,"","",function(Ve){return q.call(pe,Ve,Ae++)}),ke}function Pt(V){if(V._status===-1){var q=V._result;q=q(),q.then(function(pe){(V._status===0||V._status===-1)&&(V._status=1,V._result=pe)},function(pe){(V._status===0||V._status===-1)&&(V._status=2,V._result=pe)}),V._status===-1&&(V._status=0,V._result=q)}if(V._status===1)return V._result.default;throw V._result}var Ge={current:null},te={transition:null},ge={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:te,ReactCurrentOwner:de};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:Se,forEach:function(V,q,pe){Se(V,function(){q.apply(this,arguments)},pe)},count:function(V){var q=0;return Se(V,function(){q++}),q},toArray:function(V){return Se(V,function(q){return q})||[]},only:function(V){if(!A(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ne.Component=z,Ne.Fragment=t,Ne.Profiler=o,Ne.PureComponent=W,Ne.StrictMode=r,Ne.Suspense=p,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Ne.act=ie,Ne.cloneElement=function(V,q,pe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var ke=j({},V.props),Ae=V.key,Ve=V.ref,$e=V._owner;if(q!=null){if(q.ref!==void 0&&(Ve=q.ref,$e=de.current),q.key!==void 0&&(Ae=""+q.key),V.type&&V.type.defaultProps)var We=V.type.defaultProps;for(Je in q)fe.call(q,Je)&&!D.hasOwnProperty(Je)&&(ke[Je]=q[Je]===void 0&&We!==void 0?We[Je]:q[Je])}var Je=arguments.length-2;if(Je===1)ke.children=pe;else if(1<Je){We=Array(Je);for(var bt=0;bt<Je;bt++)We[bt]=arguments[bt+2];ke.children=We}return{$$typeof:n,type:V.type,key:Ae,ref:Ve,props:ke,_owner:$e}},Ne.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},Ne.createElement=C,Ne.createFactory=function(V){var q=C.bind(null,V);return q.type=V,q},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(V){return{$$typeof:d,render:V}},Ne.isValidElement=A,Ne.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Pt}},Ne.memo=function(V,q){return{$$typeof:_,type:V,compare:q===void 0?null:q}},Ne.startTransition=function(V){var q=te.transition;te.transition={};try{V()}finally{te.transition=q}},Ne.unstable_act=ie,Ne.useCallback=function(V,q){return Ge.current.useCallback(V,q)},Ne.useContext=function(V){return Ge.current.useContext(V)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(V){return Ge.current.useDeferredValue(V)},Ne.useEffect=function(V,q){return Ge.current.useEffect(V,q)},Ne.useId=function(){return Ge.current.useId()},Ne.useImperativeHandle=function(V,q,pe){return Ge.current.useImperativeHandle(V,q,pe)},Ne.useInsertionEffect=function(V,q){return Ge.current.useInsertionEffect(V,q)},Ne.useLayoutEffect=function(V,q){return Ge.current.useLayoutEffect(V,q)},Ne.useMemo=function(V,q){return Ge.current.useMemo(V,q)},Ne.useReducer=function(V,q,pe){return Ge.current.useReducer(V,q,pe)},Ne.useRef=function(V){return Ge.current.useRef(V)},Ne.useState=function(V){return Ge.current.useState(V)},Ne.useSyncExternalStore=function(V,q,pe){return Ge.current.useSyncExternalStore(V,q,pe)},Ne.useTransition=function(){return Ge.current.useTransition()},Ne.version="18.3.1",Ne}var Oy;function sm(){return Oy||(Oy=1,zf.exports=P1()),zf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ly;function b1(){if(Ly)return El;Ly=1;var n=sm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,_){var w,T={},I=null,b=null;_!==void 0&&(I=""+_),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(b=p.ref);for(w in p)r.call(p,w)&&!a.hasOwnProperty(w)&&(T[w]=p[w]);if(d&&d.defaultProps)for(w in p=d.defaultProps,p)T[w]===void 0&&(T[w]=p[w]);return{$$typeof:e,type:d,key:I,ref:b,props:T,_owner:o.current}}return El.Fragment=t,El.jsx=u,El.jsxs=u,El}var My;function D1(){return My||(My=1,Uf.exports=b1()),Uf.exports}var v=D1(),_e=sm();const Vy=N1(_e);var Vc={},Bf={exports:{}},gn={},Hf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy;function O1(){return Fy||(Fy=1,function(n){function e(te,ge){var ie=te.length;te.push(ge);e:for(;0<ie;){var V=ie-1>>>1,q=te[V];if(0<o(q,ge))te[V]=ge,te[ie]=q,ie=V;else break e}}function t(te){return te.length===0?null:te[0]}function r(te){if(te.length===0)return null;var ge=te[0],ie=te.pop();if(ie!==ge){te[0]=ie;e:for(var V=0,q=te.length,pe=q>>>1;V<pe;){var ke=2*(V+1)-1,Ae=te[ke],Ve=ke+1,$e=te[Ve];if(0>o(Ae,ie))Ve<q&&0>o($e,Ae)?(te[V]=$e,te[Ve]=ie,V=Ve):(te[V]=Ae,te[ke]=ie,V=ke);else if(Ve<q&&0>o($e,ie))te[V]=$e,te[Ve]=ie,V=Ve;else break e}}return ge}function o(te,ge){var ie=te.sortIndex-ge.sortIndex;return ie!==0?ie:te.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],_=[],w=1,T=null,I=3,b=!1,j=!1,M=!1,z=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(te){for(var ge=t(_);ge!==null;){if(ge.callback===null)r(_);else if(ge.startTime<=te)r(_),ge.sortIndex=ge.expirationTime,e(p,ge);else break;ge=t(_)}}function re(te){if(M=!1,ne(te),!j)if(t(p)!==null)j=!0,Pt(fe);else{var ge=t(_);ge!==null&&Ge(re,ge.startTime-te)}}function fe(te,ge){j=!1,M&&(M=!1,ae(C),C=-1),b=!0;var ie=I;try{for(ne(ge),T=t(p);T!==null&&(!(T.expirationTime>ge)||te&&!P());){var V=T.callback;if(typeof V=="function"){T.callback=null,I=T.priorityLevel;var q=V(T.expirationTime<=ge);ge=n.unstable_now(),typeof q=="function"?T.callback=q:T===t(p)&&r(p),ne(ge)}else r(p);T=t(p)}if(T!==null)var pe=!0;else{var ke=t(_);ke!==null&&Ge(re,ke.startTime-ge),pe=!1}return pe}finally{T=null,I=ie,b=!1}}var de=!1,D=null,C=-1,k=5,A=-1;function P(){return!(n.unstable_now()-A<k)}function L(){if(D!==null){var te=n.unstable_now();A=te;var ge=!0;try{ge=D(!0,te)}finally{ge?R():(de=!1,D=null)}}else de=!1}var R;if(typeof W=="function")R=function(){W(L)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Se=Re.port2;Re.port1.onmessage=L,R=function(){Se.postMessage(null)}}else R=function(){z(L,0)};function Pt(te){D=te,de||(de=!0,R())}function Ge(te,ge){C=z(function(){te(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(te){te.callback=null},n.unstable_continueExecution=function(){j||b||(j=!0,Pt(fe))},n.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<te?Math.floor(1e3/te):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(te){switch(I){case 1:case 2:case 3:var ge=3;break;default:ge=I}var ie=I;I=ge;try{return te()}finally{I=ie}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(te,ge){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var ie=I;I=te;try{return ge()}finally{I=ie}},n.unstable_scheduleCallback=function(te,ge,ie){var V=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?V+ie:V):ie=V,te){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ie+q,te={id:w++,callback:ge,priorityLevel:te,startTime:ie,expirationTime:q,sortIndex:-1},ie>V?(te.sortIndex=ie,e(_,te),t(p)===null&&te===t(_)&&(M?(ae(C),C=-1):M=!0,Ge(re,ie-V))):(te.sortIndex=q,e(p,te),j||b||(j=!0,Pt(fe))),te},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(te){var ge=I;return function(){var ie=I;I=ge;try{return te.apply(this,arguments)}finally{I=ie}}}}($f)),$f}var jy;function L1(){return jy||(jy=1,Hf.exports=O1()),Hf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy;function M1(){if(Uy)return gn;Uy=1;var n=sm(),e=L1();function t(s){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+s,l=1;l<arguments.length;l++)i+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+s+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(s,i){u(s,i),u(s+"Capture",i)}function u(s,i){for(o[s]=i,s=0;s<i.length;s++)r.add(i[s])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function I(s){return p.call(T,s)?!0:p.call(w,s)?!1:_.test(s)?T[s]=!0:(w[s]=!0,!1)}function b(s,i,l,h){if(l!==null&&l.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function j(s,i,l,h){if(i===null||typeof i>"u"||b(s,i,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(s,i,l,h,f,g,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=l,this.propertyName=s,this.type=i,this.sanitizeURL=g,this.removeEmptyString=E}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){z[s]=new M(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var i=s[0];z[i]=new M(i,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){z[s]=new M(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){z[s]=new M(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){z[s]=new M(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){z[s]=new M(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){z[s]=new M(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){z[s]=new M(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){z[s]=new M(s,5,!1,s.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function W(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var i=s.replace(ae,W);z[i]=new M(i,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var i=s.replace(ae,W);z[i]=new M(i,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var i=s.replace(ae,W);z[i]=new M(i,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){z[s]=new M(s,1,!1,s.toLowerCase(),null,!1,!1)}),z.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){z[s]=new M(s,1,!1,s.toLowerCase(),null,!0,!0)});function ne(s,i,l,h){var f=z.hasOwnProperty(i)?z[i]:null;(f!==null?f.type!==0:h||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(j(i,l,f,h)&&(l=null),h||f===null?I(i)&&(l===null?s.removeAttribute(i):s.setAttribute(i,""+l)):f.mustUseProperty?s[f.propertyName]=l===null?f.type===3?!1:"":l:(i=f.attributeName,h=f.attributeNamespace,l===null?s.removeAttribute(i):(f=f.type,l=f===3||f===4&&l===!0?"":""+l,h?s.setAttributeNS(h,i,l):s.setAttribute(i,l))))}var re=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fe=Symbol.for("react.element"),de=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),Se=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Ge=Symbol.for("react.offscreen"),te=Symbol.iterator;function ge(s){return s===null||typeof s!="object"?null:(s=te&&s[te]||s["@@iterator"],typeof s=="function"?s:null)}var ie=Object.assign,V;function q(s){if(V===void 0)try{throw Error()}catch(l){var i=l.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+s}var pe=!1;function ke(s,i){if(!s||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(H){var h=H}Reflect.construct(s,[],i)}else{try{i.call()}catch(H){h=H}s.call(i.prototype)}else{try{throw Error()}catch(H){h=H}s()}}catch(H){if(H&&h&&typeof H.stack=="string"){for(var f=H.stack.split(`
`),g=h.stack.split(`
`),E=f.length-1,x=g.length-1;1<=E&&0<=x&&f[E]!==g[x];)x--;for(;1<=E&&0<=x;E--,x--)if(f[E]!==g[x]){if(E!==1||x!==1)do if(E--,x--,0>x||f[E]!==g[x]){var N=`
`+f[E].replace(" at new "," at ");return s.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",s.displayName)),N}while(1<=E&&0<=x);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(s=s?s.displayName||s.name:"")?q(s):""}function Ae(s){switch(s.tag){case 5:return q(s.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return s=ke(s.type,!1),s;case 11:return s=ke(s.type.render,!1),s;case 1:return s=ke(s.type,!0),s;default:return""}}function Ve(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case D:return"Fragment";case de:return"Portal";case k:return"Profiler";case C:return"StrictMode";case R:return"Suspense";case Re:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case P:return(s.displayName||"Context")+".Consumer";case A:return(s._context.displayName||"Context")+".Provider";case L:var i=s.render;return s=s.displayName,s||(s=i.displayName||i.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case Se:return i=s.displayName||null,i!==null?i:Ve(s.type)||"Memo";case Pt:i=s._payload,s=s._init;try{return Ve(s(i))}catch{}}return null}function $e(s){var i=s.type;switch(s.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=i.render,s=s.displayName||s.name||"",i.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(i);case 8:return i===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function We(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Je(s){var i=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function bt(s){var i=Je(s)?"checked":"value",l=Object.getOwnPropertyDescriptor(s.constructor.prototype,i),h=""+s[i];if(!s.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(s,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){h=""+E,g.call(this,E)}}),Object.defineProperty(s,i,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){s._valueTracker=null,delete s[i]}}}}function Ar(s){s._valueTracker||(s._valueTracker=bt(s))}function Ji(s){if(!s)return!1;var i=s._valueTracker;if(!i)return!0;var l=i.getValue(),h="";return s&&(h=Je(s)?s.checked?"true":"false":s.value),s=h,s!==l?(i.setValue(s),!0):!1}function is(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function si(s,i){var l=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??s._wrapperState.initialChecked})}function Zi(s,i){var l=i.defaultValue==null?"":i.defaultValue,h=i.checked!=null?i.checked:i.defaultChecked;l=We(i.value!=null?i.value:l),s._wrapperState={initialChecked:h,initialValue:l,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ka(s,i){i=i.checked,i!=null&&ne(s,"checked",i,!1)}function Ra(s,i){ka(s,i);var l=We(i.value),h=i.type;if(l!=null)h==="number"?(l===0&&s.value===""||s.value!=l)&&(s.value=""+l):s.value!==""+l&&(s.value=""+l);else if(h==="submit"||h==="reset"){s.removeAttribute("value");return}i.hasOwnProperty("value")?eo(s,i.type,l):i.hasOwnProperty("defaultValue")&&eo(s,i.type,We(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(s.defaultChecked=!!i.defaultChecked)}function Tu(s,i,l){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var h=i.type;if(!(h!=="submit"&&h!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+s._wrapperState.initialValue,l||i===s.value||(s.value=i),s.defaultValue=i}l=s.name,l!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,l!==""&&(s.name=l)}function eo(s,i,l){(i!=="number"||is(s.ownerDocument)!==s)&&(l==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+l&&(s.defaultValue=""+l))}var Nr=Array.isArray;function Pr(s,i,l,h){if(s=s.options,i){i={};for(var f=0;f<l.length;f++)i["$"+l[f]]=!0;for(l=0;l<s.length;l++)f=i.hasOwnProperty("$"+s[l].value),s[l].selected!==f&&(s[l].selected=f),f&&h&&(s[l].defaultSelected=!0)}else{for(l=""+We(l),i=null,f=0;f<s.length;f++){if(s[f].value===l){s[f].selected=!0,h&&(s[f].defaultSelected=!0);return}i!==null||s[f].disabled||(i=s[f])}i!==null&&(i.selected=!0)}}function Aa(s,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function to(s,i){var l=i.value;if(l==null){if(l=i.children,i=i.defaultValue,l!=null){if(i!=null)throw Error(t(92));if(Nr(l)){if(1<l.length)throw Error(t(93));l=l[0]}i=l}i==null&&(i=""),l=i}s._wrapperState={initialValue:We(l)}}function no(s,i){var l=We(i.value),h=We(i.defaultValue);l!=null&&(l=""+l,l!==s.value&&(s.value=l),i.defaultValue==null&&s.defaultValue!==l&&(s.defaultValue=l)),h!=null&&(s.defaultValue=""+h)}function Na(s){var i=s.textContent;i===s._wrapperState.initialValue&&i!==""&&i!==null&&(s.value=i)}function It(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function St(s,i){return s==null||s==="http://www.w3.org/1999/xhtml"?It(i):s==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var br,Pa=function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,l,h,f){MSApp.execUnsafeLocalFunction(function(){return s(i,l,h,f)})}:s}(function(s,i){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=i;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=br.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;i.firstChild;)s.appendChild(i.firstChild)}});function os(s,i){if(i){var l=s.firstChild;if(l&&l===s.lastChild&&l.nodeType===3){l.nodeValue=i;return}}s.textContent=i}var ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oi=["Webkit","ms","Moz","O"];Object.keys(ii).forEach(function(s){oi.forEach(function(i){i=i+s.charAt(0).toUpperCase()+s.substring(1),ii[i]=ii[s]})});function ba(s,i,l){return i==null||typeof i=="boolean"||i===""?"":l||typeof i!="number"||i===0||ii.hasOwnProperty(s)&&ii[s]?(""+i).trim():i+"px"}function Da(s,i){s=s.style;for(var l in i)if(i.hasOwnProperty(l)){var h=l.indexOf("--")===0,f=ba(l,i[l],h);l==="float"&&(l="cssFloat"),h?s.setProperty(l,f):s[l]=f}}var Oa=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function La(s,i){if(i){if(Oa[s]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,s));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ma(s,i){if(s.indexOf("-")===-1)return typeof i.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function ro(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var so=null,Nn=null,lr=null;function io(s){if(s=ol(s)){if(typeof so!="function")throw Error(t(280));var i=s.stateNode;i&&(i=Ju(i),so(s.stateNode,s.type,i))}}function ur(s){Nn?lr?lr.push(s):lr=[s]:Nn=s}function Va(){if(Nn){var s=Nn,i=lr;if(lr=Nn=null,io(s),i)for(s=0;s<i.length;s++)io(i[s])}}function li(s,i){return s(i)}function Fa(){}var Dr=!1;function ja(s,i,l){if(Dr)return s(i,l);Dr=!0;try{return li(s,i,l)}finally{Dr=!1,(Nn!==null||lr!==null)&&(Fa(),Va())}}function pt(s,i){var l=s.stateNode;if(l===null)return null;var h=Ju(l);if(h===null)return null;l=h[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(s=s.type,h=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!h;break e;default:s=!1}if(s)return null;if(l&&typeof l!="function")throw Error(t(231,i,typeof l));return l}var oo=!1;if(d)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){oo=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{oo=!1}function ui(s,i,l,h,f,g,E,x,N){var H=Array.prototype.slice.call(arguments,3);try{i.apply(l,H)}catch(Q){this.onError(Q)}}var ci=!1,ao=null,Bn=!1,Ua=null,fd={onError:function(s){ci=!0,ao=s}};function lo(s,i,l,h,f,g,E,x,N){ci=!1,ao=null,ui.apply(fd,arguments)}function Iu(s,i,l,h,f,g,E,x,N){if(lo.apply(this,arguments),ci){if(ci){var H=ao;ci=!1,ao=null}else throw Error(t(198));Bn||(Bn=!0,Ua=H)}}function Hn(s){var i=s,l=s;if(s.alternate)for(;i.return;)i=i.return;else{s=i;do i=s,(i.flags&4098)!==0&&(l=i.return),s=i.return;while(s)}return i.tag===3?l:null}function hi(s){if(s.tag===13){var i=s.memoizedState;if(i===null&&(s=s.alternate,s!==null&&(i=s.memoizedState)),i!==null)return i.dehydrated}return null}function $n(s){if(Hn(s)!==s)throw Error(t(188))}function Su(s){var i=s.alternate;if(!i){if(i=Hn(s),i===null)throw Error(t(188));return i!==s?null:s}for(var l=s,h=i;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){l=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return $n(f),s;if(g===h)return $n(f),i;g=g.sibling}throw Error(t(188))}if(l.return!==h.return)l=f,h=g;else{for(var E=!1,x=f.child;x;){if(x===l){E=!0,l=f,h=g;break}if(x===h){E=!0,h=f,l=g;break}x=x.sibling}if(!E){for(x=g.child;x;){if(x===l){E=!0,l=g,h=f;break}if(x===h){E=!0,h=g,l=f;break}x=x.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?s:i}function za(s){return s=Su(s),s!==null?uo(s):null}function uo(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var i=uo(s);if(i!==null)return i;s=s.sibling}return null}var co=e.unstable_scheduleCallback,Ba=e.unstable_cancelCallback,Cu=e.unstable_shouldYield,pd=e.unstable_requestPaint,Ze=e.unstable_now,xu=e.unstable_getCurrentPriorityLevel,di=e.unstable_ImmediatePriority,as=e.unstable_UserBlockingPriority,Pn=e.unstable_NormalPriority,Ha=e.unstable_LowPriority,ku=e.unstable_IdlePriority,fi=null,En=null;function Ru(s){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(fi,s,void 0,(s.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:Nu,$a=Math.log,Au=Math.LN2;function Nu(s){return s>>>=0,s===0?32:31-($a(s)/Au|0)|0}var ho=64,fo=4194304;function ls(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function pi(s,i){var l=s.pendingLanes;if(l===0)return 0;var h=0,f=s.suspendedLanes,g=s.pingedLanes,E=l&268435455;if(E!==0){var x=E&~f;x!==0?h=ls(x):(g&=E,g!==0&&(h=ls(g)))}else E=l&~f,E!==0?h=ls(E):g!==0&&(h=ls(g));if(h===0)return 0;if(i!==0&&i!==h&&(i&f)===0&&(f=h&-h,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((h&4)!==0&&(h|=l&16),i=s.entangledLanes,i!==0)for(s=s.entanglements,i&=h;0<i;)l=31-nn(i),f=1<<l,h|=s[l],i&=~f;return h}function md(s,i){switch(s){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Or(s,i){for(var l=s.suspendedLanes,h=s.pingedLanes,f=s.expirationTimes,g=s.pendingLanes;0<g;){var E=31-nn(g),x=1<<E,N=f[E];N===-1?((x&l)===0||(x&h)!==0)&&(f[E]=md(x,i)):N<=i&&(s.expiredLanes|=x),g&=~x}}function Tn(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function mi(){var s=ho;return ho<<=1,(ho&4194240)===0&&(ho=64),s}function us(s){for(var i=[],l=0;31>l;l++)i.push(s);return i}function cs(s,i,l){s.pendingLanes|=i,i!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,i=31-nn(i),s[i]=l}function Ye(s,i){var l=s.pendingLanes&~i;s.pendingLanes=i,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=i,s.mutableReadLanes&=i,s.entangledLanes&=i,i=s.entanglements;var h=s.eventTimes;for(s=s.expirationTimes;0<l;){var f=31-nn(l),g=1<<f;i[f]=0,h[f]=-1,s[f]=-1,l&=~g}}function hs(s,i){var l=s.entangledLanes|=i;for(s=s.entanglements;l;){var h=31-nn(l),f=1<<h;f&i|s[h]&i&&(s[h]|=i),l&=~f}}var Me=0;function ds(s){return s&=-s,1<s?4<s?(s&268435455)!==0?16:536870912:4:1}var Pu,po,bu,Du,Ou,Wa=!1,cr=[],Ut=null,Wn=null,qn=null,fs=new Map,bn=new Map,hr=[],gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lu(s,i){switch(s){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":fs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(i.pointerId)}}function un(s,i,l,h,f,g){return s===null||s.nativeEvent!==g?(s={blockedOn:i,domEventName:l,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},i!==null&&(i=ol(i),i!==null&&po(i)),s):(s.eventSystemFlags|=h,i=s.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),s)}function _d(s,i,l,h,f){switch(i){case"focusin":return Ut=un(Ut,s,i,l,h,f),!0;case"dragenter":return Wn=un(Wn,s,i,l,h,f),!0;case"mouseover":return qn=un(qn,s,i,l,h,f),!0;case"pointerover":var g=f.pointerId;return fs.set(g,un(fs.get(g)||null,s,i,l,h,f)),!0;case"gotpointercapture":return g=f.pointerId,bn.set(g,un(bn.get(g)||null,s,i,l,h,f)),!0}return!1}function Mu(s){var i=wi(s.target);if(i!==null){var l=Hn(i);if(l!==null){if(i=l.tag,i===13){if(i=hi(l),i!==null){s.blockedOn=i,Ou(s.priority,function(){bu(l)});return}}else if(i===3&&l.stateNode.current.memoizedState.isDehydrated){s.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}s.blockedOn=null}function Lr(s){if(s.blockedOn!==null)return!1;for(var i=s.targetContainers;0<i.length;){var l=mo(s.domEventName,s.eventSystemFlags,i[0],s.nativeEvent);if(l===null){l=s.nativeEvent;var h=new l.constructor(l.type,l);ai=h,l.target.dispatchEvent(h),ai=null}else return i=ol(l),i!==null&&po(i),s.blockedOn=l,!1;i.shift()}return!0}function gi(s,i,l){Lr(s)&&l.delete(i)}function Vu(){Wa=!1,Ut!==null&&Lr(Ut)&&(Ut=null),Wn!==null&&Lr(Wn)&&(Wn=null),qn!==null&&Lr(qn)&&(qn=null),fs.forEach(gi),bn.forEach(gi)}function Gn(s,i){s.blockedOn===i&&(s.blockedOn=null,Wa||(Wa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vu)))}function Kn(s){function i(f){return Gn(f,s)}if(0<cr.length){Gn(cr[0],s);for(var l=1;l<cr.length;l++){var h=cr[l];h.blockedOn===s&&(h.blockedOn=null)}}for(Ut!==null&&Gn(Ut,s),Wn!==null&&Gn(Wn,s),qn!==null&&Gn(qn,s),fs.forEach(i),bn.forEach(i),l=0;l<hr.length;l++)h=hr[l],h.blockedOn===s&&(h.blockedOn=null);for(;0<hr.length&&(l=hr[0],l.blockedOn===null);)Mu(l),l.blockedOn===null&&hr.shift()}var Mr=re.ReactCurrentBatchConfig,ps=!0;function ot(s,i,l,h){var f=Me,g=Mr.transition;Mr.transition=null;try{Me=1,qa(s,i,l,h)}finally{Me=f,Mr.transition=g}}function yd(s,i,l,h){var f=Me,g=Mr.transition;Mr.transition=null;try{Me=4,qa(s,i,l,h)}finally{Me=f,Mr.transition=g}}function qa(s,i,l,h){if(ps){var f=mo(s,i,l,h);if(f===null)Ad(s,i,h,_i,l),Lu(s,h);else if(_d(f,s,i,l,h))h.stopPropagation();else if(Lu(s,h),i&4&&-1<gd.indexOf(s)){for(;f!==null;){var g=ol(f);if(g!==null&&Pu(g),g=mo(s,i,l,h),g===null&&Ad(s,i,h,_i,l),g===f)break;f=g}f!==null&&h.stopPropagation()}else Ad(s,i,h,null,l)}}var _i=null;function mo(s,i,l,h){if(_i=null,s=ro(h),s=wi(s),s!==null)if(i=Hn(s),i===null)s=null;else if(l=i.tag,l===13){if(s=hi(i),s!==null)return s;s=null}else if(l===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;s=null}else i!==s&&(s=null);return _i=s,null}function Ga(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xu()){case di:return 1;case as:return 4;case Pn:case Ha:return 16;case ku:return 536870912;default:return 16}default:return 16}}var In=null,go=null,cn=null;function Ka(){if(cn)return cn;var s,i=go,l=i.length,h,f="value"in In?In.value:In.textContent,g=f.length;for(s=0;s<l&&i[s]===f[s];s++);var E=l-s;for(h=1;h<=E&&i[l-h]===f[g-h];h++);return cn=f.slice(s,1<h?1-h:void 0)}function _o(s){var i=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&i===13&&(s=13)):s=i,s===10&&(s=13),32<=s||s===13?s:0}function dr(){return!0}function Qa(){return!1}function zt(s){function i(l,h,f,g,E){this._reactName=l,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var x in s)s.hasOwnProperty(x)&&(l=s[x],this[x]=l?l(g):g[x]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?dr:Qa,this.isPropagationStopped=Qa,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=dr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=dr)},persist:function(){},isPersistent:dr}),i}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yo=zt(Qn),fr=ie({},Qn,{view:0,detail:0}),vd=zt(fr),vo,Vr,ms,yi=ie({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pr,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==ms&&(ms&&s.type==="mousemove"?(vo=s.screenX-ms.screenX,Vr=s.screenY-ms.screenY):Vr=vo=0,ms=s),vo)},movementY:function(s){return"movementY"in s?s.movementY:Vr}}),wo=zt(yi),Ya=ie({},yi,{dataTransfer:0}),Fu=zt(Ya),Eo=ie({},fr,{relatedTarget:0}),To=zt(Eo),ju=ie({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fr=zt(ju),Uu=ie({},Qn,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),zu=zt(Uu),Bu=ie({},Qn,{data:0}),Xa=zt(Bu),Io={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $u(s){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(s):(s=Hu[s])?!!i[s]:!1}function pr(){return $u}var c=ie({},fr,{key:function(s){if(s.key){var i=Io[s.key]||s.key;if(i!=="Unidentified")return i}return s.type==="keypress"?(s=_o(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?rn[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pr,charCode:function(s){return s.type==="keypress"?_o(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?_o(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),m=zt(c),y=ie({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S=zt(y),F=ie({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pr}),$=zt(F),Z=ie({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ke=zt(Z),Ct=ie({},yi,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),Fe=zt(Ct),Dt=[9,13,27,32],yt=d&&"CompositionEvent"in window,Dn=null;d&&"documentMode"in document&&(Dn=document.documentMode);var Sn=d&&"TextEvent"in window&&!Dn,vi=d&&(!yt||Dn&&8<Dn&&11>=Dn),So=" ",kg=!1;function Rg(s,i){switch(s){case"keyup":return Dt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ag(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Co=!1;function kI(s,i){switch(s){case"compositionend":return Ag(i);case"keypress":return i.which!==32?null:(kg=!0,So);case"textInput":return s=i.data,s===So&&kg?null:s;default:return null}}function RI(s,i){if(Co)return s==="compositionend"||!yt&&Rg(s,i)?(s=Ka(),cn=go=In=null,Co=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return vi&&i.locale!=="ko"?null:i.data;default:return null}}var AI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ng(s){var i=s&&s.nodeName&&s.nodeName.toLowerCase();return i==="input"?!!AI[s.type]:i==="textarea"}function Pg(s,i,l,h){ur(h),i=Qu(i,"onChange"),0<i.length&&(l=new yo("onChange","change",null,l,h),s.push({event:l,listeners:i}))}var Ja=null,Za=null;function NI(s){Qg(s,0)}function Wu(s){var i=No(s);if(Ji(i))return s}function PI(s,i){if(s==="change")return i}var bg=!1;if(d){var wd;if(d){var Ed="oninput"in document;if(!Ed){var Dg=document.createElement("div");Dg.setAttribute("oninput","return;"),Ed=typeof Dg.oninput=="function"}wd=Ed}else wd=!1;bg=wd&&(!document.documentMode||9<document.documentMode)}function Og(){Ja&&(Ja.detachEvent("onpropertychange",Lg),Za=Ja=null)}function Lg(s){if(s.propertyName==="value"&&Wu(Za)){var i=[];Pg(i,Za,s,ro(s)),ja(NI,i)}}function bI(s,i,l){s==="focusin"?(Og(),Ja=i,Za=l,Ja.attachEvent("onpropertychange",Lg)):s==="focusout"&&Og()}function DI(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return Wu(Za)}function OI(s,i){if(s==="click")return Wu(i)}function LI(s,i){if(s==="input"||s==="change")return Wu(i)}function MI(s,i){return s===i&&(s!==0||1/s===1/i)||s!==s&&i!==i}var Yn=typeof Object.is=="function"?Object.is:MI;function el(s,i){if(Yn(s,i))return!0;if(typeof s!="object"||s===null||typeof i!="object"||i===null)return!1;var l=Object.keys(s),h=Object.keys(i);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var f=l[h];if(!p.call(i,f)||!Yn(s[f],i[f]))return!1}return!0}function Mg(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function Vg(s,i){var l=Mg(s);s=0;for(var h;l;){if(l.nodeType===3){if(h=s+l.textContent.length,s<=i&&h>=i)return{node:l,offset:i-s};s=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Mg(l)}}function Fg(s,i){return s&&i?s===i?!0:s&&s.nodeType===3?!1:i&&i.nodeType===3?Fg(s,i.parentNode):"contains"in s?s.contains(i):s.compareDocumentPosition?!!(s.compareDocumentPosition(i)&16):!1:!1}function jg(){for(var s=window,i=is();i instanceof s.HTMLIFrameElement;){try{var l=typeof i.contentWindow.location.href=="string"}catch{l=!1}if(l)s=i.contentWindow;else break;i=is(s.document)}return i}function Td(s){var i=s&&s.nodeName&&s.nodeName.toLowerCase();return i&&(i==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||i==="textarea"||s.contentEditable==="true")}function VI(s){var i=jg(),l=s.focusedElem,h=s.selectionRange;if(i!==l&&l&&l.ownerDocument&&Fg(l.ownerDocument.documentElement,l)){if(h!==null&&Td(l)){if(i=h.start,s=h.end,s===void 0&&(s=i),"selectionStart"in l)l.selectionStart=i,l.selectionEnd=Math.min(s,l.value.length);else if(s=(i=l.ownerDocument||document)&&i.defaultView||window,s.getSelection){s=s.getSelection();var f=l.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!s.extend&&g>h&&(f=h,h=g,g=f),f=Vg(l,g);var E=Vg(l,h);f&&E&&(s.rangeCount!==1||s.anchorNode!==f.node||s.anchorOffset!==f.offset||s.focusNode!==E.node||s.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),s.removeAllRanges(),g>h?(s.addRange(i),s.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),s.addRange(i)))}}for(i=[],s=l;s=s.parentNode;)s.nodeType===1&&i.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<i.length;l++)s=i[l],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var FI=d&&"documentMode"in document&&11>=document.documentMode,xo=null,Id=null,tl=null,Sd=!1;function Ug(s,i,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Sd||xo==null||xo!==is(h)||(h=xo,"selectionStart"in h&&Td(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),tl&&el(tl,h)||(tl=h,h=Qu(Id,"onSelect"),0<h.length&&(i=new yo("onSelect","select",null,i,l),s.push({event:i,listeners:h}),i.target=xo)))}function qu(s,i){var l={};return l[s.toLowerCase()]=i.toLowerCase(),l["Webkit"+s]="webkit"+i,l["Moz"+s]="moz"+i,l}var ko={animationend:qu("Animation","AnimationEnd"),animationiteration:qu("Animation","AnimationIteration"),animationstart:qu("Animation","AnimationStart"),transitionend:qu("Transition","TransitionEnd")},Cd={},zg={};d&&(zg=document.createElement("div").style,"AnimationEvent"in window||(delete ko.animationend.animation,delete ko.animationiteration.animation,delete ko.animationstart.animation),"TransitionEvent"in window||delete ko.transitionend.transition);function Gu(s){if(Cd[s])return Cd[s];if(!ko[s])return s;var i=ko[s],l;for(l in i)if(i.hasOwnProperty(l)&&l in zg)return Cd[s]=i[l];return s}var Bg=Gu("animationend"),Hg=Gu("animationiteration"),$g=Gu("animationstart"),Wg=Gu("transitionend"),qg=new Map,Gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gs(s,i){qg.set(s,i),a(i,[s])}for(var xd=0;xd<Gg.length;xd++){var kd=Gg[xd],jI=kd.toLowerCase(),UI=kd[0].toUpperCase()+kd.slice(1);gs(jI,"on"+UI)}gs(Bg,"onAnimationEnd"),gs(Hg,"onAnimationIteration"),gs($g,"onAnimationStart"),gs("dblclick","onDoubleClick"),gs("focusin","onFocus"),gs("focusout","onBlur"),gs(Wg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zI=new Set("cancel close invalid load scroll toggle".split(" ").concat(nl));function Kg(s,i,l){var h=s.type||"unknown-event";s.currentTarget=l,Iu(h,i,void 0,s),s.currentTarget=null}function Qg(s,i){i=(i&4)!==0;for(var l=0;l<s.length;l++){var h=s[l],f=h.event;h=h.listeners;e:{var g=void 0;if(i)for(var E=h.length-1;0<=E;E--){var x=h[E],N=x.instance,H=x.currentTarget;if(x=x.listener,N!==g&&f.isPropagationStopped())break e;Kg(f,x,H),g=N}else for(E=0;E<h.length;E++){if(x=h[E],N=x.instance,H=x.currentTarget,x=x.listener,N!==g&&f.isPropagationStopped())break e;Kg(f,x,H),g=N}}}if(Bn)throw s=Ua,Bn=!1,Ua=null,s}function rt(s,i){var l=i[Ld];l===void 0&&(l=i[Ld]=new Set);var h=s+"__bubble";l.has(h)||(Yg(i,s,2,!1),l.add(h))}function Rd(s,i,l){var h=0;i&&(h|=4),Yg(l,s,h,i)}var Ku="_reactListening"+Math.random().toString(36).slice(2);function rl(s){if(!s[Ku]){s[Ku]=!0,r.forEach(function(l){l!=="selectionchange"&&(zI.has(l)||Rd(l,!1,s),Rd(l,!0,s))});var i=s.nodeType===9?s:s.ownerDocument;i===null||i[Ku]||(i[Ku]=!0,Rd("selectionchange",!1,i))}}function Yg(s,i,l,h){switch(Ga(i)){case 1:var f=ot;break;case 4:f=yd;break;default:f=qa}l=f.bind(null,i,l,s),f=void 0,!oo||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),h?f!==void 0?s.addEventListener(i,l,{capture:!0,passive:f}):s.addEventListener(i,l,!0):f!==void 0?s.addEventListener(i,l,{passive:f}):s.addEventListener(i,l,!1)}function Ad(s,i,l,h,f){var g=h;if((i&1)===0&&(i&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var x=h.stateNode.containerInfo;if(x===f||x.nodeType===8&&x.parentNode===f)break;if(E===4)for(E=h.return;E!==null;){var N=E.tag;if((N===3||N===4)&&(N=E.stateNode.containerInfo,N===f||N.nodeType===8&&N.parentNode===f))return;E=E.return}for(;x!==null;){if(E=wi(x),E===null)return;if(N=E.tag,N===5||N===6){h=g=E;continue e}x=x.parentNode}}h=h.return}ja(function(){var H=g,Q=ro(l),Y=[];e:{var K=qg.get(s);if(K!==void 0){var se=yo,ue=s;switch(s){case"keypress":if(_o(l)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ue="focus",se=To;break;case"focusout":ue="blur",se=To;break;case"beforeblur":case"afterblur":se=To;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=wo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Fu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=$;break;case Bg:case Hg:case $g:se=Fr;break;case Wg:se=Ke;break;case"scroll":se=vd;break;case"wheel":se=Fe;break;case"copy":case"cut":case"paste":se=zu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=S}var ce=(i&4)!==0,mt=!ce&&s==="scroll",U=ce?K!==null?K+"Capture":null:K;ce=[];for(var O=H,B;O!==null;){B=O;var X=B.stateNode;if(B.tag===5&&X!==null&&(B=X,U!==null&&(X=pt(O,U),X!=null&&ce.push(sl(O,X,B)))),mt)break;O=O.return}0<ce.length&&(K=new se(K,ue,null,l,Q),Y.push({event:K,listeners:ce}))}}if((i&7)===0){e:{if(K=s==="mouseover"||s==="pointerover",se=s==="mouseout"||s==="pointerout",K&&l!==ai&&(ue=l.relatedTarget||l.fromElement)&&(wi(ue)||ue[jr]))break e;if((se||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,se?(ue=l.relatedTarget||l.toElement,se=H,ue=ue?wi(ue):null,ue!==null&&(mt=Hn(ue),ue!==mt||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=H),se!==ue)){if(ce=wo,X="onMouseLeave",U="onMouseEnter",O="mouse",(s==="pointerout"||s==="pointerover")&&(ce=S,X="onPointerLeave",U="onPointerEnter",O="pointer"),mt=se==null?K:No(se),B=ue==null?K:No(ue),K=new ce(X,O+"leave",se,l,Q),K.target=mt,K.relatedTarget=B,X=null,wi(Q)===H&&(ce=new ce(U,O+"enter",ue,l,Q),ce.target=B,ce.relatedTarget=mt,X=ce),mt=X,se&&ue)t:{for(ce=se,U=ue,O=0,B=ce;B;B=Ro(B))O++;for(B=0,X=U;X;X=Ro(X))B++;for(;0<O-B;)ce=Ro(ce),O--;for(;0<B-O;)U=Ro(U),B--;for(;O--;){if(ce===U||U!==null&&ce===U.alternate)break t;ce=Ro(ce),U=Ro(U)}ce=null}else ce=null;se!==null&&Xg(Y,K,se,ce,!1),ue!==null&&mt!==null&&Xg(Y,mt,ue,ce,!0)}}e:{if(K=H?No(H):window,se=K.nodeName&&K.nodeName.toLowerCase(),se==="select"||se==="input"&&K.type==="file")var he=PI;else if(Ng(K))if(bg)he=LI;else{he=DI;var ye=bI}else(se=K.nodeName)&&se.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(he=OI);if(he&&(he=he(s,H))){Pg(Y,he,l,Q);break e}ye&&ye(s,K,H),s==="focusout"&&(ye=K._wrapperState)&&ye.controlled&&K.type==="number"&&eo(K,"number",K.value)}switch(ye=H?No(H):window,s){case"focusin":(Ng(ye)||ye.contentEditable==="true")&&(xo=ye,Id=H,tl=null);break;case"focusout":tl=Id=xo=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,Ug(Y,l,Q);break;case"selectionchange":if(FI)break;case"keydown":case"keyup":Ug(Y,l,Q)}var ve;if(yt)e:{switch(s){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else Co?Rg(s,l)&&(Ie="onCompositionEnd"):s==="keydown"&&l.keyCode===229&&(Ie="onCompositionStart");Ie&&(vi&&l.locale!=="ko"&&(Co||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Co&&(ve=Ka()):(In=Q,go="value"in In?In.value:In.textContent,Co=!0)),ye=Qu(H,Ie),0<ye.length&&(Ie=new Xa(Ie,s,null,l,Q),Y.push({event:Ie,listeners:ye}),ve?Ie.data=ve:(ve=Ag(l),ve!==null&&(Ie.data=ve)))),(ve=Sn?kI(s,l):RI(s,l))&&(H=Qu(H,"onBeforeInput"),0<H.length&&(Q=new Xa("onBeforeInput","beforeinput",null,l,Q),Y.push({event:Q,listeners:H}),Q.data=ve))}Qg(Y,i)})}function sl(s,i,l){return{instance:s,listener:i,currentTarget:l}}function Qu(s,i){for(var l=i+"Capture",h=[];s!==null;){var f=s,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=pt(s,l),g!=null&&h.unshift(sl(s,g,f)),g=pt(s,i),g!=null&&h.push(sl(s,g,f))),s=s.return}return h}function Ro(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function Xg(s,i,l,h,f){for(var g=i._reactName,E=[];l!==null&&l!==h;){var x=l,N=x.alternate,H=x.stateNode;if(N!==null&&N===h)break;x.tag===5&&H!==null&&(x=H,f?(N=pt(l,g),N!=null&&E.unshift(sl(l,N,x))):f||(N=pt(l,g),N!=null&&E.push(sl(l,N,x)))),l=l.return}E.length!==0&&s.push({event:i,listeners:E})}var BI=/\r\n?/g,HI=/\u0000|\uFFFD/g;function Jg(s){return(typeof s=="string"?s:""+s).replace(BI,`
`).replace(HI,"")}function Yu(s,i,l){if(i=Jg(i),Jg(s)!==i&&l)throw Error(t(425))}function Xu(){}var Nd=null,Pd=null;function bd(s,i){return s==="textarea"||s==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dd=typeof setTimeout=="function"?setTimeout:void 0,$I=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,WI=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(s){return Zg.resolve(null).then(s).catch(qI)}:Dd;function qI(s){setTimeout(function(){throw s})}function Od(s,i){var l=i,h=0;do{var f=l.nextSibling;if(s.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(h===0){s.removeChild(f),Kn(i);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=f}while(l);Kn(i)}function _s(s){for(;s!=null;s=s.nextSibling){var i=s.nodeType;if(i===1||i===3)break;if(i===8){if(i=s.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return s}function e_(s){s=s.previousSibling;for(var i=0;s;){if(s.nodeType===8){var l=s.data;if(l==="$"||l==="$!"||l==="$?"){if(i===0)return s;i--}else l==="/$"&&i++}s=s.previousSibling}return null}var Ao=Math.random().toString(36).slice(2),mr="__reactFiber$"+Ao,il="__reactProps$"+Ao,jr="__reactContainer$"+Ao,Ld="__reactEvents$"+Ao,GI="__reactListeners$"+Ao,KI="__reactHandles$"+Ao;function wi(s){var i=s[mr];if(i)return i;for(var l=s.parentNode;l;){if(i=l[jr]||l[mr]){if(l=i.alternate,i.child!==null||l!==null&&l.child!==null)for(s=e_(s);s!==null;){if(l=s[mr])return l;s=e_(s)}return i}s=l,l=s.parentNode}return null}function ol(s){return s=s[mr]||s[jr],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function No(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(t(33))}function Ju(s){return s[il]||null}var Md=[],Po=-1;function ys(s){return{current:s}}function st(s){0>Po||(s.current=Md[Po],Md[Po]=null,Po--)}function et(s,i){Po++,Md[Po]=s.current,s.current=i}var vs={},Gt=ys(vs),hn=ys(!1),Ei=vs;function bo(s,i){var l=s.type.contextTypes;if(!l)return vs;var h=s.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===i)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in l)f[g]=i[g];return h&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=i,s.__reactInternalMemoizedMaskedChildContext=f),f}function dn(s){return s=s.childContextTypes,s!=null}function Zu(){st(hn),st(Gt)}function t_(s,i,l){if(Gt.current!==vs)throw Error(t(168));et(Gt,i),et(hn,l)}function n_(s,i,l){var h=s.stateNode;if(i=i.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var f in h)if(!(f in i))throw Error(t(108,$e(s)||"Unknown",f));return ie({},l,h)}function ec(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||vs,Ei=Gt.current,et(Gt,s),et(hn,hn.current),!0}function r_(s,i,l){var h=s.stateNode;if(!h)throw Error(t(169));l?(s=n_(s,i,Ei),h.__reactInternalMemoizedMergedChildContext=s,st(hn),st(Gt),et(Gt,s)):st(hn),et(hn,l)}var Ur=null,tc=!1,Vd=!1;function s_(s){Ur===null?Ur=[s]:Ur.push(s)}function QI(s){tc=!0,s_(s)}function ws(){if(!Vd&&Ur!==null){Vd=!0;var s=0,i=Me;try{var l=Ur;for(Me=1;s<l.length;s++){var h=l[s];do h=h(!0);while(h!==null)}Ur=null,tc=!1}catch(f){throw Ur!==null&&(Ur=Ur.slice(s+1)),co(di,ws),f}finally{Me=i,Vd=!1}}return null}var Do=[],Oo=0,nc=null,rc=0,On=[],Ln=0,Ti=null,zr=1,Br="";function Ii(s,i){Do[Oo++]=rc,Do[Oo++]=nc,nc=s,rc=i}function i_(s,i,l){On[Ln++]=zr,On[Ln++]=Br,On[Ln++]=Ti,Ti=s;var h=zr;s=Br;var f=32-nn(h)-1;h&=~(1<<f),l+=1;var g=32-nn(i)+f;if(30<g){var E=f-f%5;g=(h&(1<<E)-1).toString(32),h>>=E,f-=E,zr=1<<32-nn(i)+f|l<<f|h,Br=g+s}else zr=1<<g|l<<f|h,Br=s}function Fd(s){s.return!==null&&(Ii(s,1),i_(s,1,0))}function jd(s){for(;s===nc;)nc=Do[--Oo],Do[Oo]=null,rc=Do[--Oo],Do[Oo]=null;for(;s===Ti;)Ti=On[--Ln],On[Ln]=null,Br=On[--Ln],On[Ln]=null,zr=On[--Ln],On[Ln]=null}var Cn=null,xn=null,at=!1,Xn=null;function o_(s,i){var l=jn(5,null,null,0);l.elementType="DELETED",l.stateNode=i,l.return=s,i=s.deletions,i===null?(s.deletions=[l],s.flags|=16):i.push(l)}function a_(s,i){switch(s.tag){case 5:var l=s.type;return i=i.nodeType!==1||l.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(s.stateNode=i,Cn=s,xn=_s(i.firstChild),!0):!1;case 6:return i=s.pendingProps===""||i.nodeType!==3?null:i,i!==null?(s.stateNode=i,Cn=s,xn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(l=Ti!==null?{id:zr,overflow:Br}:null,s.memoizedState={dehydrated:i,treeContext:l,retryLane:1073741824},l=jn(18,null,null,0),l.stateNode=i,l.return=s,s.child=l,Cn=s,xn=null,!0):!1;default:return!1}}function Ud(s){return(s.mode&1)!==0&&(s.flags&128)===0}function zd(s){if(at){var i=xn;if(i){var l=i;if(!a_(s,i)){if(Ud(s))throw Error(t(418));i=_s(l.nextSibling);var h=Cn;i&&a_(s,i)?o_(h,l):(s.flags=s.flags&-4097|2,at=!1,Cn=s)}}else{if(Ud(s))throw Error(t(418));s.flags=s.flags&-4097|2,at=!1,Cn=s}}}function l_(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Cn=s}function sc(s){if(s!==Cn)return!1;if(!at)return l_(s),at=!0,!1;var i;if((i=s.tag!==3)&&!(i=s.tag!==5)&&(i=s.type,i=i!=="head"&&i!=="body"&&!bd(s.type,s.memoizedProps)),i&&(i=xn)){if(Ud(s))throw u_(),Error(t(418));for(;i;)o_(s,i),i=_s(i.nextSibling)}if(l_(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(t(317));e:{for(s=s.nextSibling,i=0;s;){if(s.nodeType===8){var l=s.data;if(l==="/$"){if(i===0){xn=_s(s.nextSibling);break e}i--}else l!=="$"&&l!=="$!"&&l!=="$?"||i++}s=s.nextSibling}xn=null}}else xn=Cn?_s(s.stateNode.nextSibling):null;return!0}function u_(){for(var s=xn;s;)s=_s(s.nextSibling)}function Lo(){xn=Cn=null,at=!1}function Bd(s){Xn===null?Xn=[s]:Xn.push(s)}var YI=re.ReactCurrentBatchConfig;function al(s,i,l){if(s=l.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,s));var f=h,g=""+s;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(E){var x=f.refs;E===null?delete x[g]:x[g]=E},i._stringRef=g,i)}if(typeof s!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,s))}return s}function ic(s,i){throw s=Object.prototype.toString.call(i),Error(t(31,s==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":s))}function c_(s){var i=s._init;return i(s._payload)}function h_(s){function i(U,O){if(s){var B=U.deletions;B===null?(U.deletions=[O],U.flags|=16):B.push(O)}}function l(U,O){if(!s)return null;for(;O!==null;)i(U,O),O=O.sibling;return null}function h(U,O){for(U=new Map;O!==null;)O.key!==null?U.set(O.key,O):U.set(O.index,O),O=O.sibling;return U}function f(U,O){return U=Rs(U,O),U.index=0,U.sibling=null,U}function g(U,O,B){return U.index=B,s?(B=U.alternate,B!==null?(B=B.index,B<O?(U.flags|=2,O):B):(U.flags|=2,O)):(U.flags|=1048576,O)}function E(U){return s&&U.alternate===null&&(U.flags|=2),U}function x(U,O,B,X){return O===null||O.tag!==6?(O=Of(B,U.mode,X),O.return=U,O):(O=f(O,B),O.return=U,O)}function N(U,O,B,X){var he=B.type;return he===D?Q(U,O,B.props.children,X,B.key):O!==null&&(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Pt&&c_(he)===O.type)?(X=f(O,B.props),X.ref=al(U,O,B),X.return=U,X):(X=Ac(B.type,B.key,B.props,null,U.mode,X),X.ref=al(U,O,B),X.return=U,X)}function H(U,O,B,X){return O===null||O.tag!==4||O.stateNode.containerInfo!==B.containerInfo||O.stateNode.implementation!==B.implementation?(O=Lf(B,U.mode,X),O.return=U,O):(O=f(O,B.children||[]),O.return=U,O)}function Q(U,O,B,X,he){return O===null||O.tag!==7?(O=Pi(B,U.mode,X,he),O.return=U,O):(O=f(O,B),O.return=U,O)}function Y(U,O,B){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Of(""+O,U.mode,B),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case fe:return B=Ac(O.type,O.key,O.props,null,U.mode,B),B.ref=al(U,null,O),B.return=U,B;case de:return O=Lf(O,U.mode,B),O.return=U,O;case Pt:var X=O._init;return Y(U,X(O._payload),B)}if(Nr(O)||ge(O))return O=Pi(O,U.mode,B,null),O.return=U,O;ic(U,O)}return null}function K(U,O,B,X){var he=O!==null?O.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return he!==null?null:x(U,O,""+B,X);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case fe:return B.key===he?N(U,O,B,X):null;case de:return B.key===he?H(U,O,B,X):null;case Pt:return he=B._init,K(U,O,he(B._payload),X)}if(Nr(B)||ge(B))return he!==null?null:Q(U,O,B,X,null);ic(U,B)}return null}function se(U,O,B,X,he){if(typeof X=="string"&&X!==""||typeof X=="number")return U=U.get(B)||null,x(O,U,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case fe:return U=U.get(X.key===null?B:X.key)||null,N(O,U,X,he);case de:return U=U.get(X.key===null?B:X.key)||null,H(O,U,X,he);case Pt:var ye=X._init;return se(U,O,B,ye(X._payload),he)}if(Nr(X)||ge(X))return U=U.get(B)||null,Q(O,U,X,he,null);ic(O,X)}return null}function ue(U,O,B,X){for(var he=null,ye=null,ve=O,Ie=O=0,Mt=null;ve!==null&&Ie<B.length;Ie++){ve.index>Ie?(Mt=ve,ve=null):Mt=ve.sibling;var He=K(U,ve,B[Ie],X);if(He===null){ve===null&&(ve=Mt);break}s&&ve&&He.alternate===null&&i(U,ve),O=g(He,O,Ie),ye===null?he=He:ye.sibling=He,ye=He,ve=Mt}if(Ie===B.length)return l(U,ve),at&&Ii(U,Ie),he;if(ve===null){for(;Ie<B.length;Ie++)ve=Y(U,B[Ie],X),ve!==null&&(O=g(ve,O,Ie),ye===null?he=ve:ye.sibling=ve,ye=ve);return at&&Ii(U,Ie),he}for(ve=h(U,ve);Ie<B.length;Ie++)Mt=se(ve,U,Ie,B[Ie],X),Mt!==null&&(s&&Mt.alternate!==null&&ve.delete(Mt.key===null?Ie:Mt.key),O=g(Mt,O,Ie),ye===null?he=Mt:ye.sibling=Mt,ye=Mt);return s&&ve.forEach(function(As){return i(U,As)}),at&&Ii(U,Ie),he}function ce(U,O,B,X){var he=ge(B);if(typeof he!="function")throw Error(t(150));if(B=he.call(B),B==null)throw Error(t(151));for(var ye=he=null,ve=O,Ie=O=0,Mt=null,He=B.next();ve!==null&&!He.done;Ie++,He=B.next()){ve.index>Ie?(Mt=ve,ve=null):Mt=ve.sibling;var As=K(U,ve,He.value,X);if(As===null){ve===null&&(ve=Mt);break}s&&ve&&As.alternate===null&&i(U,ve),O=g(As,O,Ie),ye===null?he=As:ye.sibling=As,ye=As,ve=Mt}if(He.done)return l(U,ve),at&&Ii(U,Ie),he;if(ve===null){for(;!He.done;Ie++,He=B.next())He=Y(U,He.value,X),He!==null&&(O=g(He,O,Ie),ye===null?he=He:ye.sibling=He,ye=He);return at&&Ii(U,Ie),he}for(ve=h(U,ve);!He.done;Ie++,He=B.next())He=se(ve,U,Ie,He.value,X),He!==null&&(s&&He.alternate!==null&&ve.delete(He.key===null?Ie:He.key),O=g(He,O,Ie),ye===null?he=He:ye.sibling=He,ye=He);return s&&ve.forEach(function(A1){return i(U,A1)}),at&&Ii(U,Ie),he}function mt(U,O,B,X){if(typeof B=="object"&&B!==null&&B.type===D&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case fe:e:{for(var he=B.key,ye=O;ye!==null;){if(ye.key===he){if(he=B.type,he===D){if(ye.tag===7){l(U,ye.sibling),O=f(ye,B.props.children),O.return=U,U=O;break e}}else if(ye.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Pt&&c_(he)===ye.type){l(U,ye.sibling),O=f(ye,B.props),O.ref=al(U,ye,B),O.return=U,U=O;break e}l(U,ye);break}else i(U,ye);ye=ye.sibling}B.type===D?(O=Pi(B.props.children,U.mode,X,B.key),O.return=U,U=O):(X=Ac(B.type,B.key,B.props,null,U.mode,X),X.ref=al(U,O,B),X.return=U,U=X)}return E(U);case de:e:{for(ye=B.key;O!==null;){if(O.key===ye)if(O.tag===4&&O.stateNode.containerInfo===B.containerInfo&&O.stateNode.implementation===B.implementation){l(U,O.sibling),O=f(O,B.children||[]),O.return=U,U=O;break e}else{l(U,O);break}else i(U,O);O=O.sibling}O=Lf(B,U.mode,X),O.return=U,U=O}return E(U);case Pt:return ye=B._init,mt(U,O,ye(B._payload),X)}if(Nr(B))return ue(U,O,B,X);if(ge(B))return ce(U,O,B,X);ic(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,O!==null&&O.tag===6?(l(U,O.sibling),O=f(O,B),O.return=U,U=O):(l(U,O),O=Of(B,U.mode,X),O.return=U,U=O),E(U)):l(U,O)}return mt}var Mo=h_(!0),d_=h_(!1),oc=ys(null),ac=null,Vo=null,Hd=null;function $d(){Hd=Vo=ac=null}function Wd(s){var i=oc.current;st(oc),s._currentValue=i}function qd(s,i,l){for(;s!==null;){var h=s.alternate;if((s.childLanes&i)!==i?(s.childLanes|=i,h!==null&&(h.childLanes|=i)):h!==null&&(h.childLanes&i)!==i&&(h.childLanes|=i),s===l)break;s=s.return}}function Fo(s,i){ac=s,Hd=Vo=null,s=s.dependencies,s!==null&&s.firstContext!==null&&((s.lanes&i)!==0&&(fn=!0),s.firstContext=null)}function Mn(s){var i=s._currentValue;if(Hd!==s)if(s={context:s,memoizedValue:i,next:null},Vo===null){if(ac===null)throw Error(t(308));Vo=s,ac.dependencies={lanes:0,firstContext:s}}else Vo=Vo.next=s;return i}var Si=null;function Gd(s){Si===null?Si=[s]:Si.push(s)}function f_(s,i,l,h){var f=i.interleaved;return f===null?(l.next=l,Gd(i)):(l.next=f.next,f.next=l),i.interleaved=l,Hr(s,h)}function Hr(s,i){s.lanes|=i;var l=s.alternate;for(l!==null&&(l.lanes|=i),l=s,s=s.return;s!==null;)s.childLanes|=i,l=s.alternate,l!==null&&(l.childLanes|=i),l=s,s=s.return;return l.tag===3?l.stateNode:null}var Es=!1;function Kd(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p_(s,i){s=s.updateQueue,i.updateQueue===s&&(i.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function $r(s,i){return{eventTime:s,lane:i,tag:0,payload:null,callback:null,next:null}}function Ts(s,i,l){var h=s.updateQueue;if(h===null)return null;if(h=h.shared,(ze&2)!==0){var f=h.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),h.pending=i,Hr(s,l)}return f=h.interleaved,f===null?(i.next=i,Gd(h)):(i.next=f.next,f.next=i),h.interleaved=i,Hr(s,l)}function lc(s,i,l){if(i=i.updateQueue,i!==null&&(i=i.shared,(l&4194240)!==0)){var h=i.lanes;h&=s.pendingLanes,l|=h,i.lanes=l,hs(s,l)}}function m_(s,i){var l=s.updateQueue,h=s.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?f=g=E:g=g.next=E,l=l.next}while(l!==null);g===null?f=g=i:g=g.next=i}else f=g=i;l={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},s.updateQueue=l;return}s=l.lastBaseUpdate,s===null?l.firstBaseUpdate=i:s.next=i,l.lastBaseUpdate=i}function uc(s,i,l,h){var f=s.updateQueue;Es=!1;var g=f.firstBaseUpdate,E=f.lastBaseUpdate,x=f.shared.pending;if(x!==null){f.shared.pending=null;var N=x,H=N.next;N.next=null,E===null?g=H:E.next=H,E=N;var Q=s.alternate;Q!==null&&(Q=Q.updateQueue,x=Q.lastBaseUpdate,x!==E&&(x===null?Q.firstBaseUpdate=H:x.next=H,Q.lastBaseUpdate=N))}if(g!==null){var Y=f.baseState;E=0,Q=H=N=null,x=g;do{var K=x.lane,se=x.eventTime;if((h&K)===K){Q!==null&&(Q=Q.next={eventTime:se,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var ue=s,ce=x;switch(K=i,se=l,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){Y=ue.call(se,Y,K);break e}Y=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,K=typeof ue=="function"?ue.call(se,Y,K):ue,K==null)break e;Y=ie({},Y,K);break e;case 2:Es=!0}}x.callback!==null&&x.lane!==0&&(s.flags|=64,K=f.effects,K===null?f.effects=[x]:K.push(x))}else se={eventTime:se,lane:K,tag:x.tag,payload:x.payload,callback:x.callback,next:null},Q===null?(H=Q=se,N=Y):Q=Q.next=se,E|=K;if(x=x.next,x===null){if(x=f.shared.pending,x===null)break;K=x,x=K.next,K.next=null,f.lastBaseUpdate=K,f.shared.pending=null}}while(!0);if(Q===null&&(N=Y),f.baseState=N,f.firstBaseUpdate=H,f.lastBaseUpdate=Q,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);ki|=E,s.lanes=E,s.memoizedState=Y}}function g_(s,i,l){if(s=i.effects,i.effects=null,s!==null)for(i=0;i<s.length;i++){var h=s[i],f=h.callback;if(f!==null){if(h.callback=null,h=l,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var ll={},gr=ys(ll),ul=ys(ll),cl=ys(ll);function Ci(s){if(s===ll)throw Error(t(174));return s}function Qd(s,i){switch(et(cl,i),et(ul,s),et(gr,ll),s=i.nodeType,s){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:St(null,"");break;default:s=s===8?i.parentNode:i,i=s.namespaceURI||null,s=s.tagName,i=St(i,s)}st(gr),et(gr,i)}function jo(){st(gr),st(ul),st(cl)}function __(s){Ci(cl.current);var i=Ci(gr.current),l=St(i,s.type);i!==l&&(et(ul,s),et(gr,l))}function Yd(s){ul.current===s&&(st(gr),st(ul))}var lt=ys(0);function cc(s){for(var i=s;i!==null;){if(i.tag===13){var l=i.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break;for(;i.sibling===null;){if(i.return===null||i.return===s)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Xd=[];function Jd(){for(var s=0;s<Xd.length;s++)Xd[s]._workInProgressVersionPrimary=null;Xd.length=0}var hc=re.ReactCurrentDispatcher,Zd=re.ReactCurrentBatchConfig,xi=0,ut=null,xt=null,Ot=null,dc=!1,hl=!1,dl=0,XI=0;function Kt(){throw Error(t(321))}function ef(s,i){if(i===null)return!1;for(var l=0;l<i.length&&l<s.length;l++)if(!Yn(s[l],i[l]))return!1;return!0}function tf(s,i,l,h,f,g){if(xi=g,ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,hc.current=s===null||s.memoizedState===null?t1:n1,s=l(h,f),hl){g=0;do{if(hl=!1,dl=0,25<=g)throw Error(t(301));g+=1,Ot=xt=null,i.updateQueue=null,hc.current=r1,s=l(h,f)}while(hl)}if(hc.current=mc,i=xt!==null&&xt.next!==null,xi=0,Ot=xt=ut=null,dc=!1,i)throw Error(t(300));return s}function nf(){var s=dl!==0;return dl=0,s}function _r(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?ut.memoizedState=Ot=s:Ot=Ot.next=s,Ot}function Vn(){if(xt===null){var s=ut.alternate;s=s!==null?s.memoizedState:null}else s=xt.next;var i=Ot===null?ut.memoizedState:Ot.next;if(i!==null)Ot=i,xt=s;else{if(s===null)throw Error(t(310));xt=s,s={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},Ot===null?ut.memoizedState=Ot=s:Ot=Ot.next=s}return Ot}function fl(s,i){return typeof i=="function"?i(s):i}function rf(s){var i=Vn(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=s;var h=xt,f=h.baseQueue,g=l.pending;if(g!==null){if(f!==null){var E=f.next;f.next=g.next,g.next=E}h.baseQueue=f=g,l.pending=null}if(f!==null){g=f.next,h=h.baseState;var x=E=null,N=null,H=g;do{var Q=H.lane;if((xi&Q)===Q)N!==null&&(N=N.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),h=H.hasEagerState?H.eagerState:s(h,H.action);else{var Y={lane:Q,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};N===null?(x=N=Y,E=h):N=N.next=Y,ut.lanes|=Q,ki|=Q}H=H.next}while(H!==null&&H!==g);N===null?E=h:N.next=x,Yn(h,i.memoizedState)||(fn=!0),i.memoizedState=h,i.baseState=E,i.baseQueue=N,l.lastRenderedState=h}if(s=l.interleaved,s!==null){f=s;do g=f.lane,ut.lanes|=g,ki|=g,f=f.next;while(f!==s)}else f===null&&(l.lanes=0);return[i.memoizedState,l.dispatch]}function sf(s){var i=Vn(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=s;var h=l.dispatch,f=l.pending,g=i.memoizedState;if(f!==null){l.pending=null;var E=f=f.next;do g=s(g,E.action),E=E.next;while(E!==f);Yn(g,i.memoizedState)||(fn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),l.lastRenderedState=g}return[g,h]}function y_(){}function v_(s,i){var l=ut,h=Vn(),f=i(),g=!Yn(h.memoizedState,f);if(g&&(h.memoizedState=f,fn=!0),h=h.queue,of(T_.bind(null,l,h,s),[s]),h.getSnapshot!==i||g||Ot!==null&&Ot.memoizedState.tag&1){if(l.flags|=2048,pl(9,E_.bind(null,l,h,f,i),void 0,null),Lt===null)throw Error(t(349));(xi&30)!==0||w_(l,i,f)}return f}function w_(s,i,l){s.flags|=16384,s={getSnapshot:i,value:l},i=ut.updateQueue,i===null?(i={lastEffect:null,stores:null},ut.updateQueue=i,i.stores=[s]):(l=i.stores,l===null?i.stores=[s]:l.push(s))}function E_(s,i,l,h){i.value=l,i.getSnapshot=h,I_(i)&&S_(s)}function T_(s,i,l){return l(function(){I_(i)&&S_(s)})}function I_(s){var i=s.getSnapshot;s=s.value;try{var l=i();return!Yn(s,l)}catch{return!0}}function S_(s){var i=Hr(s,1);i!==null&&tr(i,s,1,-1)}function C_(s){var i=_r();return typeof s=="function"&&(s=s()),i.memoizedState=i.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fl,lastRenderedState:s},i.queue=s,s=s.dispatch=e1.bind(null,ut,s),[i.memoizedState,s]}function pl(s,i,l,h){return s={tag:s,create:i,destroy:l,deps:h,next:null},i=ut.updateQueue,i===null?(i={lastEffect:null,stores:null},ut.updateQueue=i,i.lastEffect=s.next=s):(l=i.lastEffect,l===null?i.lastEffect=s.next=s:(h=l.next,l.next=s,s.next=h,i.lastEffect=s)),s}function x_(){return Vn().memoizedState}function fc(s,i,l,h){var f=_r();ut.flags|=s,f.memoizedState=pl(1|i,l,void 0,h===void 0?null:h)}function pc(s,i,l,h){var f=Vn();h=h===void 0?null:h;var g=void 0;if(xt!==null){var E=xt.memoizedState;if(g=E.destroy,h!==null&&ef(h,E.deps)){f.memoizedState=pl(i,l,g,h);return}}ut.flags|=s,f.memoizedState=pl(1|i,l,g,h)}function k_(s,i){return fc(8390656,8,s,i)}function of(s,i){return pc(2048,8,s,i)}function R_(s,i){return pc(4,2,s,i)}function A_(s,i){return pc(4,4,s,i)}function N_(s,i){if(typeof i=="function")return s=s(),i(s),function(){i(null)};if(i!=null)return s=s(),i.current=s,function(){i.current=null}}function P_(s,i,l){return l=l!=null?l.concat([s]):null,pc(4,4,N_.bind(null,i,s),l)}function af(){}function b_(s,i){var l=Vn();i=i===void 0?null:i;var h=l.memoizedState;return h!==null&&i!==null&&ef(i,h[1])?h[0]:(l.memoizedState=[s,i],s)}function D_(s,i){var l=Vn();i=i===void 0?null:i;var h=l.memoizedState;return h!==null&&i!==null&&ef(i,h[1])?h[0]:(s=s(),l.memoizedState=[s,i],s)}function O_(s,i,l){return(xi&21)===0?(s.baseState&&(s.baseState=!1,fn=!0),s.memoizedState=l):(Yn(l,i)||(l=mi(),ut.lanes|=l,ki|=l,s.baseState=!0),i)}function JI(s,i){var l=Me;Me=l!==0&&4>l?l:4,s(!0);var h=Zd.transition;Zd.transition={};try{s(!1),i()}finally{Me=l,Zd.transition=h}}function L_(){return Vn().memoizedState}function ZI(s,i,l){var h=xs(s);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},M_(s))V_(i,l);else if(l=f_(s,i,l,h),l!==null){var f=on();tr(l,s,h,f),F_(l,i,h)}}function e1(s,i,l){var h=xs(s),f={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(M_(s))V_(i,f);else{var g=s.alternate;if(s.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,x=g(E,l);if(f.hasEagerState=!0,f.eagerState=x,Yn(x,E)){var N=i.interleaved;N===null?(f.next=f,Gd(i)):(f.next=N.next,N.next=f),i.interleaved=f;return}}catch{}finally{}l=f_(s,i,f,h),l!==null&&(f=on(),tr(l,s,h,f),F_(l,i,h))}}function M_(s){var i=s.alternate;return s===ut||i!==null&&i===ut}function V_(s,i){hl=dc=!0;var l=s.pending;l===null?i.next=i:(i.next=l.next,l.next=i),s.pending=i}function F_(s,i,l){if((l&4194240)!==0){var h=i.lanes;h&=s.pendingLanes,l|=h,i.lanes=l,hs(s,l)}}var mc={readContext:Mn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},t1={readContext:Mn,useCallback:function(s,i){return _r().memoizedState=[s,i===void 0?null:i],s},useContext:Mn,useEffect:k_,useImperativeHandle:function(s,i,l){return l=l!=null?l.concat([s]):null,fc(4194308,4,N_.bind(null,i,s),l)},useLayoutEffect:function(s,i){return fc(4194308,4,s,i)},useInsertionEffect:function(s,i){return fc(4,2,s,i)},useMemo:function(s,i){var l=_r();return i=i===void 0?null:i,s=s(),l.memoizedState=[s,i],s},useReducer:function(s,i,l){var h=_r();return i=l!==void 0?l(i):i,h.memoizedState=h.baseState=i,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:i},h.queue=s,s=s.dispatch=ZI.bind(null,ut,s),[h.memoizedState,s]},useRef:function(s){var i=_r();return s={current:s},i.memoizedState=s},useState:C_,useDebugValue:af,useDeferredValue:function(s){return _r().memoizedState=s},useTransition:function(){var s=C_(!1),i=s[0];return s=JI.bind(null,s[1]),_r().memoizedState=s,[i,s]},useMutableSource:function(){},useSyncExternalStore:function(s,i,l){var h=ut,f=_r();if(at){if(l===void 0)throw Error(t(407));l=l()}else{if(l=i(),Lt===null)throw Error(t(349));(xi&30)!==0||w_(h,i,l)}f.memoizedState=l;var g={value:l,getSnapshot:i};return f.queue=g,k_(T_.bind(null,h,g,s),[s]),h.flags|=2048,pl(9,E_.bind(null,h,g,l,i),void 0,null),l},useId:function(){var s=_r(),i=Lt.identifierPrefix;if(at){var l=Br,h=zr;l=(h&~(1<<32-nn(h)-1)).toString(32)+l,i=":"+i+"R"+l,l=dl++,0<l&&(i+="H"+l.toString(32)),i+=":"}else l=XI++,i=":"+i+"r"+l.toString(32)+":";return s.memoizedState=i},unstable_isNewReconciler:!1},n1={readContext:Mn,useCallback:b_,useContext:Mn,useEffect:of,useImperativeHandle:P_,useInsertionEffect:R_,useLayoutEffect:A_,useMemo:D_,useReducer:rf,useRef:x_,useState:function(){return rf(fl)},useDebugValue:af,useDeferredValue:function(s){var i=Vn();return O_(i,xt.memoizedState,s)},useTransition:function(){var s=rf(fl)[0],i=Vn().memoizedState;return[s,i]},useMutableSource:y_,useSyncExternalStore:v_,useId:L_,unstable_isNewReconciler:!1},r1={readContext:Mn,useCallback:b_,useContext:Mn,useEffect:of,useImperativeHandle:P_,useInsertionEffect:R_,useLayoutEffect:A_,useMemo:D_,useReducer:sf,useRef:x_,useState:function(){return sf(fl)},useDebugValue:af,useDeferredValue:function(s){var i=Vn();return xt===null?i.memoizedState=s:O_(i,xt.memoizedState,s)},useTransition:function(){var s=sf(fl)[0],i=Vn().memoizedState;return[s,i]},useMutableSource:y_,useSyncExternalStore:v_,useId:L_,unstable_isNewReconciler:!1};function Jn(s,i){if(s&&s.defaultProps){i=ie({},i),s=s.defaultProps;for(var l in s)i[l]===void 0&&(i[l]=s[l]);return i}return i}function lf(s,i,l,h){i=s.memoizedState,l=l(h,i),l=l==null?i:ie({},i,l),s.memoizedState=l,s.lanes===0&&(s.updateQueue.baseState=l)}var gc={isMounted:function(s){return(s=s._reactInternals)?Hn(s)===s:!1},enqueueSetState:function(s,i,l){s=s._reactInternals;var h=on(),f=xs(s),g=$r(h,f);g.payload=i,l!=null&&(g.callback=l),i=Ts(s,g,f),i!==null&&(tr(i,s,f,h),lc(i,s,f))},enqueueReplaceState:function(s,i,l){s=s._reactInternals;var h=on(),f=xs(s),g=$r(h,f);g.tag=1,g.payload=i,l!=null&&(g.callback=l),i=Ts(s,g,f),i!==null&&(tr(i,s,f,h),lc(i,s,f))},enqueueForceUpdate:function(s,i){s=s._reactInternals;var l=on(),h=xs(s),f=$r(l,h);f.tag=2,i!=null&&(f.callback=i),i=Ts(s,f,h),i!==null&&(tr(i,s,h,l),lc(i,s,h))}};function j_(s,i,l,h,f,g,E){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(h,g,E):i.prototype&&i.prototype.isPureReactComponent?!el(l,h)||!el(f,g):!0}function U_(s,i,l){var h=!1,f=vs,g=i.contextType;return typeof g=="object"&&g!==null?g=Mn(g):(f=dn(i)?Ei:Gt.current,h=i.contextTypes,g=(h=h!=null)?bo(s,f):vs),i=new i(l,g),s.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=gc,s.stateNode=i,i._reactInternals=s,h&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=f,s.__reactInternalMemoizedMaskedChildContext=g),i}function z_(s,i,l,h){s=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(l,h),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(l,h),i.state!==s&&gc.enqueueReplaceState(i,i.state,null)}function uf(s,i,l,h){var f=s.stateNode;f.props=l,f.state=s.memoizedState,f.refs={},Kd(s);var g=i.contextType;typeof g=="object"&&g!==null?f.context=Mn(g):(g=dn(i)?Ei:Gt.current,f.context=bo(s,g)),f.state=s.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(lf(s,i,g,l),f.state=s.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&gc.enqueueReplaceState(f,f.state,null),uc(s,l,f,h),f.state=s.memoizedState),typeof f.componentDidMount=="function"&&(s.flags|=4194308)}function Uo(s,i){try{var l="",h=i;do l+=Ae(h),h=h.return;while(h);var f=l}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:s,source:i,stack:f,digest:null}}function cf(s,i,l){return{value:s,source:null,stack:l??null,digest:i??null}}function hf(s,i){try{console.error(i.value)}catch(l){setTimeout(function(){throw l})}}var s1=typeof WeakMap=="function"?WeakMap:Map;function B_(s,i,l){l=$r(-1,l),l.tag=3,l.payload={element:null};var h=i.value;return l.callback=function(){Ic||(Ic=!0,xf=h),hf(s,i)},l}function H_(s,i,l){l=$r(-1,l),l.tag=3;var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=i.value;l.payload=function(){return h(f)},l.callback=function(){hf(s,i)}}var g=s.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){hf(s,i),typeof h!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),l}function $_(s,i,l){var h=s.pingCache;if(h===null){h=s.pingCache=new s1;var f=new Set;h.set(i,f)}else f=h.get(i),f===void 0&&(f=new Set,h.set(i,f));f.has(l)||(f.add(l),s=y1.bind(null,s,i,l),i.then(s,s))}function W_(s){do{var i;if((i=s.tag===13)&&(i=s.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return s;s=s.return}while(s!==null);return null}function q_(s,i,l,h,f){return(s.mode&1)===0?(s===i?s.flags|=65536:(s.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(i=$r(-1,1),i.tag=2,Ts(l,i,1))),l.lanes|=1),s):(s.flags|=65536,s.lanes=f,s)}var i1=re.ReactCurrentOwner,fn=!1;function sn(s,i,l,h){i.child=s===null?d_(i,null,l,h):Mo(i,s.child,l,h)}function G_(s,i,l,h,f){l=l.render;var g=i.ref;return Fo(i,f),h=tf(s,i,l,h,g,f),l=nf(),s!==null&&!fn?(i.updateQueue=s.updateQueue,i.flags&=-2053,s.lanes&=~f,Wr(s,i,f)):(at&&l&&Fd(i),i.flags|=1,sn(s,i,h,f),i.child)}function K_(s,i,l,h,f){if(s===null){var g=l.type;return typeof g=="function"&&!Df(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(i.tag=15,i.type=g,Q_(s,i,g,h,f)):(s=Ac(l.type,null,h,i,i.mode,f),s.ref=i.ref,s.return=i,i.child=s)}if(g=s.child,(s.lanes&f)===0){var E=g.memoizedProps;if(l=l.compare,l=l!==null?l:el,l(E,h)&&s.ref===i.ref)return Wr(s,i,f)}return i.flags|=1,s=Rs(g,h),s.ref=i.ref,s.return=i,i.child=s}function Q_(s,i,l,h,f){if(s!==null){var g=s.memoizedProps;if(el(g,h)&&s.ref===i.ref)if(fn=!1,i.pendingProps=h=g,(s.lanes&f)!==0)(s.flags&131072)!==0&&(fn=!0);else return i.lanes=s.lanes,Wr(s,i,f)}return df(s,i,l,h,f)}function Y_(s,i,l){var h=i.pendingProps,f=h.children,g=s!==null?s.memoizedState:null;if(h.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Bo,kn),kn|=l;else{if((l&1073741824)===0)return s=g!==null?g.baseLanes|l:l,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:s,cachePool:null,transitions:null},i.updateQueue=null,et(Bo,kn),kn|=s,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:l,et(Bo,kn),kn|=h}else g!==null?(h=g.baseLanes|l,i.memoizedState=null):h=l,et(Bo,kn),kn|=h;return sn(s,i,f,l),i.child}function X_(s,i){var l=i.ref;(s===null&&l!==null||s!==null&&s.ref!==l)&&(i.flags|=512,i.flags|=2097152)}function df(s,i,l,h,f){var g=dn(l)?Ei:Gt.current;return g=bo(i,g),Fo(i,f),l=tf(s,i,l,h,g,f),h=nf(),s!==null&&!fn?(i.updateQueue=s.updateQueue,i.flags&=-2053,s.lanes&=~f,Wr(s,i,f)):(at&&h&&Fd(i),i.flags|=1,sn(s,i,l,f),i.child)}function J_(s,i,l,h,f){if(dn(l)){var g=!0;ec(i)}else g=!1;if(Fo(i,f),i.stateNode===null)yc(s,i),U_(i,l,h),uf(i,l,h,f),h=!0;else if(s===null){var E=i.stateNode,x=i.memoizedProps;E.props=x;var N=E.context,H=l.contextType;typeof H=="object"&&H!==null?H=Mn(H):(H=dn(l)?Ei:Gt.current,H=bo(i,H));var Q=l.getDerivedStateFromProps,Y=typeof Q=="function"||typeof E.getSnapshotBeforeUpdate=="function";Y||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(x!==h||N!==H)&&z_(i,E,h,H),Es=!1;var K=i.memoizedState;E.state=K,uc(i,h,E,f),N=i.memoizedState,x!==h||K!==N||hn.current||Es?(typeof Q=="function"&&(lf(i,l,Q,h),N=i.memoizedState),(x=Es||j_(i,l,x,h,K,N,H))?(Y||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=h,i.memoizedState=N),E.props=h,E.state=N,E.context=H,h=x):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),h=!1)}else{E=i.stateNode,p_(s,i),x=i.memoizedProps,H=i.type===i.elementType?x:Jn(i.type,x),E.props=H,Y=i.pendingProps,K=E.context,N=l.contextType,typeof N=="object"&&N!==null?N=Mn(N):(N=dn(l)?Ei:Gt.current,N=bo(i,N));var se=l.getDerivedStateFromProps;(Q=typeof se=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(x!==Y||K!==N)&&z_(i,E,h,N),Es=!1,K=i.memoizedState,E.state=K,uc(i,h,E,f);var ue=i.memoizedState;x!==Y||K!==ue||hn.current||Es?(typeof se=="function"&&(lf(i,l,se,h),ue=i.memoizedState),(H=Es||j_(i,l,H,h,K,ue,N)||!1)?(Q||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,ue,N),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,ue,N)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||x===s.memoizedProps&&K===s.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||x===s.memoizedProps&&K===s.memoizedState||(i.flags|=1024),i.memoizedProps=h,i.memoizedState=ue),E.props=h,E.state=ue,E.context=N,h=H):(typeof E.componentDidUpdate!="function"||x===s.memoizedProps&&K===s.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||x===s.memoizedProps&&K===s.memoizedState||(i.flags|=1024),h=!1)}return ff(s,i,l,h,g,f)}function ff(s,i,l,h,f,g){X_(s,i);var E=(i.flags&128)!==0;if(!h&&!E)return f&&r_(i,l,!1),Wr(s,i,g);h=i.stateNode,i1.current=i;var x=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return i.flags|=1,s!==null&&E?(i.child=Mo(i,s.child,null,g),i.child=Mo(i,null,x,g)):sn(s,i,x,g),i.memoizedState=h.state,f&&r_(i,l,!0),i.child}function Z_(s){var i=s.stateNode;i.pendingContext?t_(s,i.pendingContext,i.pendingContext!==i.context):i.context&&t_(s,i.context,!1),Qd(s,i.containerInfo)}function ey(s,i,l,h,f){return Lo(),Bd(f),i.flags|=256,sn(s,i,l,h),i.child}var pf={dehydrated:null,treeContext:null,retryLane:0};function mf(s){return{baseLanes:s,cachePool:null,transitions:null}}function ty(s,i,l){var h=i.pendingProps,f=lt.current,g=!1,E=(i.flags&128)!==0,x;if((x=E)||(x=s!==null&&s.memoizedState===null?!1:(f&2)!==0),x?(g=!0,i.flags&=-129):(s===null||s.memoizedState!==null)&&(f|=1),et(lt,f&1),s===null)return zd(i),s=i.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?((i.mode&1)===0?i.lanes=1:s.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=h.children,s=h.fallback,g?(h=i.mode,g=i.child,E={mode:"hidden",children:E},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Nc(E,h,0,null),s=Pi(s,h,l,null),g.return=i,s.return=i,g.sibling=s,i.child=g,i.child.memoizedState=mf(l),i.memoizedState=pf,s):gf(i,E));if(f=s.memoizedState,f!==null&&(x=f.dehydrated,x!==null))return o1(s,i,E,h,x,f,l);if(g){g=h.fallback,E=i.mode,f=s.child,x=f.sibling;var N={mode:"hidden",children:h.children};return(E&1)===0&&i.child!==f?(h=i.child,h.childLanes=0,h.pendingProps=N,i.deletions=null):(h=Rs(f,N),h.subtreeFlags=f.subtreeFlags&14680064),x!==null?g=Rs(x,g):(g=Pi(g,E,l,null),g.flags|=2),g.return=i,h.return=i,h.sibling=g,i.child=h,h=g,g=i.child,E=s.child.memoizedState,E=E===null?mf(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=s.childLanes&~l,i.memoizedState=pf,h}return g=s.child,s=g.sibling,h=Rs(g,{mode:"visible",children:h.children}),(i.mode&1)===0&&(h.lanes=l),h.return=i,h.sibling=null,s!==null&&(l=i.deletions,l===null?(i.deletions=[s],i.flags|=16):l.push(s)),i.child=h,i.memoizedState=null,h}function gf(s,i){return i=Nc({mode:"visible",children:i},s.mode,0,null),i.return=s,s.child=i}function _c(s,i,l,h){return h!==null&&Bd(h),Mo(i,s.child,null,l),s=gf(i,i.pendingProps.children),s.flags|=2,i.memoizedState=null,s}function o1(s,i,l,h,f,g,E){if(l)return i.flags&256?(i.flags&=-257,h=cf(Error(t(422))),_c(s,i,E,h)):i.memoizedState!==null?(i.child=s.child,i.flags|=128,null):(g=h.fallback,f=i.mode,h=Nc({mode:"visible",children:h.children},f,0,null),g=Pi(g,f,E,null),g.flags|=2,h.return=i,g.return=i,h.sibling=g,i.child=h,(i.mode&1)!==0&&Mo(i,s.child,null,E),i.child.memoizedState=mf(E),i.memoizedState=pf,g);if((i.mode&1)===0)return _c(s,i,E,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var x=h.dgst;return h=x,g=Error(t(419)),h=cf(g,h,void 0),_c(s,i,E,h)}if(x=(E&s.childLanes)!==0,fn||x){if(h=Lt,h!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|E))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Hr(s,f),tr(h,s,f,-1))}return bf(),h=cf(Error(t(421))),_c(s,i,E,h)}return f.data==="$?"?(i.flags|=128,i.child=s.child,i=v1.bind(null,s),f._reactRetry=i,null):(s=g.treeContext,xn=_s(f.nextSibling),Cn=i,at=!0,Xn=null,s!==null&&(On[Ln++]=zr,On[Ln++]=Br,On[Ln++]=Ti,zr=s.id,Br=s.overflow,Ti=i),i=gf(i,h.children),i.flags|=4096,i)}function ny(s,i,l){s.lanes|=i;var h=s.alternate;h!==null&&(h.lanes|=i),qd(s.return,i,l)}function _f(s,i,l,h,f){var g=s.memoizedState;g===null?s.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=l,g.tailMode=f)}function ry(s,i,l){var h=i.pendingProps,f=h.revealOrder,g=h.tail;if(sn(s,i,h.children,l),h=lt.current,(h&2)!==0)h=h&1|2,i.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=i.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&ny(s,l,i);else if(s.tag===19)ny(s,l,i);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}h&=1}if(et(lt,h),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(l=i.child,f=null;l!==null;)s=l.alternate,s!==null&&cc(s)===null&&(f=l),l=l.sibling;l=f,l===null?(f=i.child,i.child=null):(f=l.sibling,l.sibling=null),_f(i,!1,f,l,g);break;case"backwards":for(l=null,f=i.child,i.child=null;f!==null;){if(s=f.alternate,s!==null&&cc(s)===null){i.child=f;break}s=f.sibling,f.sibling=l,l=f,f=s}_f(i,!0,l,null,g);break;case"together":_f(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function yc(s,i){(i.mode&1)===0&&s!==null&&(s.alternate=null,i.alternate=null,i.flags|=2)}function Wr(s,i,l){if(s!==null&&(i.dependencies=s.dependencies),ki|=i.lanes,(l&i.childLanes)===0)return null;if(s!==null&&i.child!==s.child)throw Error(t(153));if(i.child!==null){for(s=i.child,l=Rs(s,s.pendingProps),i.child=l,l.return=i;s.sibling!==null;)s=s.sibling,l=l.sibling=Rs(s,s.pendingProps),l.return=i;l.sibling=null}return i.child}function a1(s,i,l){switch(i.tag){case 3:Z_(i),Lo();break;case 5:__(i);break;case 1:dn(i.type)&&ec(i);break;case 4:Qd(i,i.stateNode.containerInfo);break;case 10:var h=i.type._context,f=i.memoizedProps.value;et(oc,h._currentValue),h._currentValue=f;break;case 13:if(h=i.memoizedState,h!==null)return h.dehydrated!==null?(et(lt,lt.current&1),i.flags|=128,null):(l&i.child.childLanes)!==0?ty(s,i,l):(et(lt,lt.current&1),s=Wr(s,i,l),s!==null?s.sibling:null);et(lt,lt.current&1);break;case 19:if(h=(l&i.childLanes)!==0,(s.flags&128)!==0){if(h)return ry(s,i,l);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),et(lt,lt.current),h)break;return null;case 22:case 23:return i.lanes=0,Y_(s,i,l)}return Wr(s,i,l)}var sy,yf,iy,oy;sy=function(s,i){for(var l=i.child;l!==null;){if(l.tag===5||l.tag===6)s.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===i)break;for(;l.sibling===null;){if(l.return===null||l.return===i)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},yf=function(){},iy=function(s,i,l,h){var f=s.memoizedProps;if(f!==h){s=i.stateNode,Ci(gr.current);var g=null;switch(l){case"input":f=si(s,f),h=si(s,h),g=[];break;case"select":f=ie({},f,{value:void 0}),h=ie({},h,{value:void 0}),g=[];break;case"textarea":f=Aa(s,f),h=Aa(s,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(s.onclick=Xu)}La(l,h);var E;l=null;for(H in f)if(!h.hasOwnProperty(H)&&f.hasOwnProperty(H)&&f[H]!=null)if(H==="style"){var x=f[H];for(E in x)x.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(o.hasOwnProperty(H)?g||(g=[]):(g=g||[]).push(H,null));for(H in h){var N=h[H];if(x=f?.[H],h.hasOwnProperty(H)&&N!==x&&(N!=null||x!=null))if(H==="style")if(x){for(E in x)!x.hasOwnProperty(E)||N&&N.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in N)N.hasOwnProperty(E)&&x[E]!==N[E]&&(l||(l={}),l[E]=N[E])}else l||(g||(g=[]),g.push(H,l)),l=N;else H==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,x=x?x.__html:void 0,N!=null&&x!==N&&(g=g||[]).push(H,N)):H==="children"?typeof N!="string"&&typeof N!="number"||(g=g||[]).push(H,""+N):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(o.hasOwnProperty(H)?(N!=null&&H==="onScroll"&&rt("scroll",s),g||x===N||(g=[])):(g=g||[]).push(H,N))}l&&(g=g||[]).push("style",l);var H=g;(i.updateQueue=H)&&(i.flags|=4)}},oy=function(s,i,l,h){l!==h&&(i.flags|=4)};function ml(s,i){if(!at)switch(s.tailMode){case"hidden":i=s.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?s.tail=null:l.sibling=null;break;case"collapsed":l=s.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?i||s.tail===null?s.tail=null:s.tail.sibling=null:h.sibling=null}}function Qt(s){var i=s.alternate!==null&&s.alternate.child===s.child,l=0,h=0;if(i)for(var f=s.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=s,f=f.sibling;else for(f=s.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=s,f=f.sibling;return s.subtreeFlags|=h,s.childLanes=l,i}function l1(s,i,l){var h=i.pendingProps;switch(jd(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(i),null;case 1:return dn(i.type)&&Zu(),Qt(i),null;case 3:return h=i.stateNode,jo(),st(hn),st(Gt),Jd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(s===null||s.child===null)&&(sc(i)?i.flags|=4:s===null||s.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Xn!==null&&(Af(Xn),Xn=null))),yf(s,i),Qt(i),null;case 5:Yd(i);var f=Ci(cl.current);if(l=i.type,s!==null&&i.stateNode!=null)iy(s,i,l,h,f),s.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!h){if(i.stateNode===null)throw Error(t(166));return Qt(i),null}if(s=Ci(gr.current),sc(i)){h=i.stateNode,l=i.type;var g=i.memoizedProps;switch(h[mr]=i,h[il]=g,s=(i.mode&1)!==0,l){case"dialog":rt("cancel",h),rt("close",h);break;case"iframe":case"object":case"embed":rt("load",h);break;case"video":case"audio":for(f=0;f<nl.length;f++)rt(nl[f],h);break;case"source":rt("error",h);break;case"img":case"image":case"link":rt("error",h),rt("load",h);break;case"details":rt("toggle",h);break;case"input":Zi(h,g),rt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},rt("invalid",h);break;case"textarea":to(h,g),rt("invalid",h)}La(l,g),f=null;for(var E in g)if(g.hasOwnProperty(E)){var x=g[E];E==="children"?typeof x=="string"?h.textContent!==x&&(g.suppressHydrationWarning!==!0&&Yu(h.textContent,x,s),f=["children",x]):typeof x=="number"&&h.textContent!==""+x&&(g.suppressHydrationWarning!==!0&&Yu(h.textContent,x,s),f=["children",""+x]):o.hasOwnProperty(E)&&x!=null&&E==="onScroll"&&rt("scroll",h)}switch(l){case"input":Ar(h),Tu(h,g,!0);break;case"textarea":Ar(h),Na(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=Xu)}h=f,i.updateQueue=h,h!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=It(l)),s==="http://www.w3.org/1999/xhtml"?l==="script"?(s=E.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof h.is=="string"?s=E.createElement(l,{is:h.is}):(s=E.createElement(l),l==="select"&&(E=s,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):s=E.createElementNS(s,l),s[mr]=i,s[il]=h,sy(s,i,!1,!1),i.stateNode=s;e:{switch(E=Ma(l,h),l){case"dialog":rt("cancel",s),rt("close",s),f=h;break;case"iframe":case"object":case"embed":rt("load",s),f=h;break;case"video":case"audio":for(f=0;f<nl.length;f++)rt(nl[f],s);f=h;break;case"source":rt("error",s),f=h;break;case"img":case"image":case"link":rt("error",s),rt("load",s),f=h;break;case"details":rt("toggle",s),f=h;break;case"input":Zi(s,h),f=si(s,h),rt("invalid",s);break;case"option":f=h;break;case"select":s._wrapperState={wasMultiple:!!h.multiple},f=ie({},h,{value:void 0}),rt("invalid",s);break;case"textarea":to(s,h),f=Aa(s,h),rt("invalid",s);break;default:f=h}La(l,f),x=f;for(g in x)if(x.hasOwnProperty(g)){var N=x[g];g==="style"?Da(s,N):g==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Pa(s,N)):g==="children"?typeof N=="string"?(l!=="textarea"||N!=="")&&os(s,N):typeof N=="number"&&os(s,""+N):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?N!=null&&g==="onScroll"&&rt("scroll",s):N!=null&&ne(s,g,N,E))}switch(l){case"input":Ar(s),Tu(s,h,!1);break;case"textarea":Ar(s),Na(s);break;case"option":h.value!=null&&s.setAttribute("value",""+We(h.value));break;case"select":s.multiple=!!h.multiple,g=h.value,g!=null?Pr(s,!!h.multiple,g,!1):h.defaultValue!=null&&Pr(s,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(s.onclick=Xu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Qt(i),null;case 6:if(s&&i.stateNode!=null)oy(s,i,s.memoizedProps,h);else{if(typeof h!="string"&&i.stateNode===null)throw Error(t(166));if(l=Ci(cl.current),Ci(gr.current),sc(i)){if(h=i.stateNode,l=i.memoizedProps,h[mr]=i,(g=h.nodeValue!==l)&&(s=Cn,s!==null))switch(s.tag){case 3:Yu(h.nodeValue,l,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&Yu(h.nodeValue,l,(s.mode&1)!==0)}g&&(i.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[mr]=i,i.stateNode=h}return Qt(i),null;case 13:if(st(lt),h=i.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(at&&xn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)u_(),Lo(),i.flags|=98560,g=!1;else if(g=sc(i),h!==null&&h.dehydrated!==null){if(s===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[mr]=i}else Lo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qt(i),g=!1}else Xn!==null&&(Af(Xn),Xn=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=l,i):(h=h!==null,h!==(s!==null&&s.memoizedState!==null)&&h&&(i.child.flags|=8192,(i.mode&1)!==0&&(s===null||(lt.current&1)!==0?kt===0&&(kt=3):bf())),i.updateQueue!==null&&(i.flags|=4),Qt(i),null);case 4:return jo(),yf(s,i),s===null&&rl(i.stateNode.containerInfo),Qt(i),null;case 10:return Wd(i.type._context),Qt(i),null;case 17:return dn(i.type)&&Zu(),Qt(i),null;case 19:if(st(lt),g=i.memoizedState,g===null)return Qt(i),null;if(h=(i.flags&128)!==0,E=g.rendering,E===null)if(h)ml(g,!1);else{if(kt!==0||s!==null&&(s.flags&128)!==0)for(s=i.child;s!==null;){if(E=cc(s),E!==null){for(i.flags|=128,ml(g,!1),h=E.updateQueue,h!==null&&(i.updateQueue=h,i.flags|=4),i.subtreeFlags=0,h=l,l=i.child;l!==null;)g=l,s=h,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=s,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,s=E.dependencies,g.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),l=l.sibling;return et(lt,lt.current&1|2),i.child}s=s.sibling}g.tail!==null&&Ze()>Ho&&(i.flags|=128,h=!0,ml(g,!1),i.lanes=4194304)}else{if(!h)if(s=cc(E),s!==null){if(i.flags|=128,h=!0,l=s.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),ml(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!at)return Qt(i),null}else 2*Ze()-g.renderingStartTime>Ho&&l!==1073741824&&(i.flags|=128,h=!0,ml(g,!1),i.lanes=4194304);g.isBackwards?(E.sibling=i.child,i.child=E):(l=g.last,l!==null?l.sibling=E:i.child=E,g.last=E)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Ze(),i.sibling=null,l=lt.current,et(lt,h?l&1|2:l&1),i):(Qt(i),null);case 22:case 23:return Pf(),h=i.memoizedState!==null,s!==null&&s.memoizedState!==null!==h&&(i.flags|=8192),h&&(i.mode&1)!==0?(kn&1073741824)!==0&&(Qt(i),i.subtreeFlags&6&&(i.flags|=8192)):Qt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function u1(s,i){switch(jd(i),i.tag){case 1:return dn(i.type)&&Zu(),s=i.flags,s&65536?(i.flags=s&-65537|128,i):null;case 3:return jo(),st(hn),st(Gt),Jd(),s=i.flags,(s&65536)!==0&&(s&128)===0?(i.flags=s&-65537|128,i):null;case 5:return Yd(i),null;case 13:if(st(lt),s=i.memoizedState,s!==null&&s.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Lo()}return s=i.flags,s&65536?(i.flags=s&-65537|128,i):null;case 19:return st(lt),null;case 4:return jo(),null;case 10:return Wd(i.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var vc=!1,Yt=!1,c1=typeof WeakSet=="function"?WeakSet:Set,le=null;function zo(s,i){var l=s.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){dt(s,i,h)}else l.current=null}function vf(s,i,l){try{l()}catch(h){dt(s,i,h)}}var ay=!1;function h1(s,i){if(Nd=ps,s=jg(),Td(s)){if("selectionStart"in s)var l={start:s.selectionStart,end:s.selectionEnd};else e:{l=(l=s.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var E=0,x=-1,N=-1,H=0,Q=0,Y=s,K=null;t:for(;;){for(var se;Y!==l||f!==0&&Y.nodeType!==3||(x=E+f),Y!==g||h!==0&&Y.nodeType!==3||(N=E+h),Y.nodeType===3&&(E+=Y.nodeValue.length),(se=Y.firstChild)!==null;)K=Y,Y=se;for(;;){if(Y===s)break t;if(K===l&&++H===f&&(x=E),K===g&&++Q===h&&(N=E),(se=Y.nextSibling)!==null)break;Y=K,K=Y.parentNode}Y=se}l=x===-1||N===-1?null:{start:x,end:N}}else l=null}l=l||{start:0,end:0}}else l=null;for(Pd={focusedElem:s,selectionRange:l},ps=!1,le=i;le!==null;)if(i=le,s=i.child,(i.subtreeFlags&1028)!==0&&s!==null)s.return=i,le=s;else for(;le!==null;){i=le;try{var ue=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,mt=ue.memoizedState,U=i.stateNode,O=U.getSnapshotBeforeUpdate(i.elementType===i.type?ce:Jn(i.type,ce),mt);U.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var B=i.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){dt(i,i.return,X)}if(s=i.sibling,s!==null){s.return=i.return,le=s;break}le=i.return}return ue=ay,ay=!1,ue}function gl(s,i,l){var h=i.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&s)===s){var g=f.destroy;f.destroy=void 0,g!==void 0&&vf(i,l,g)}f=f.next}while(f!==h)}}function wc(s,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&s)===s){var h=l.create;l.destroy=h()}l=l.next}while(l!==i)}}function wf(s){var i=s.ref;if(i!==null){var l=s.stateNode;switch(s.tag){case 5:s=l;break;default:s=l}typeof i=="function"?i(s):i.current=s}}function ly(s){var i=s.alternate;i!==null&&(s.alternate=null,ly(i)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(i=s.stateNode,i!==null&&(delete i[mr],delete i[il],delete i[Ld],delete i[GI],delete i[KI])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function uy(s){return s.tag===5||s.tag===3||s.tag===4}function cy(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||uy(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Ef(s,i,l){var h=s.tag;if(h===5||h===6)s=s.stateNode,i?l.nodeType===8?l.parentNode.insertBefore(s,i):l.insertBefore(s,i):(l.nodeType===8?(i=l.parentNode,i.insertBefore(s,l)):(i=l,i.appendChild(s)),l=l._reactRootContainer,l!=null||i.onclick!==null||(i.onclick=Xu));else if(h!==4&&(s=s.child,s!==null))for(Ef(s,i,l),s=s.sibling;s!==null;)Ef(s,i,l),s=s.sibling}function Tf(s,i,l){var h=s.tag;if(h===5||h===6)s=s.stateNode,i?l.insertBefore(s,i):l.appendChild(s);else if(h!==4&&(s=s.child,s!==null))for(Tf(s,i,l),s=s.sibling;s!==null;)Tf(s,i,l),s=s.sibling}var Bt=null,Zn=!1;function Is(s,i,l){for(l=l.child;l!==null;)hy(s,i,l),l=l.sibling}function hy(s,i,l){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(fi,l)}catch{}switch(l.tag){case 5:Yt||zo(l,i);case 6:var h=Bt,f=Zn;Bt=null,Is(s,i,l),Bt=h,Zn=f,Bt!==null&&(Zn?(s=Bt,l=l.stateNode,s.nodeType===8?s.parentNode.removeChild(l):s.removeChild(l)):Bt.removeChild(l.stateNode));break;case 18:Bt!==null&&(Zn?(s=Bt,l=l.stateNode,s.nodeType===8?Od(s.parentNode,l):s.nodeType===1&&Od(s,l),Kn(s)):Od(Bt,l.stateNode));break;case 4:h=Bt,f=Zn,Bt=l.stateNode.containerInfo,Zn=!0,Is(s,i,l),Bt=h,Zn=f;break;case 0:case 11:case 14:case 15:if(!Yt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&vf(l,i,E),f=f.next}while(f!==h)}Is(s,i,l);break;case 1:if(!Yt&&(zo(l,i),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(x){dt(l,i,x)}Is(s,i,l);break;case 21:Is(s,i,l);break;case 22:l.mode&1?(Yt=(h=Yt)||l.memoizedState!==null,Is(s,i,l),Yt=h):Is(s,i,l);break;default:Is(s,i,l)}}function dy(s){var i=s.updateQueue;if(i!==null){s.updateQueue=null;var l=s.stateNode;l===null&&(l=s.stateNode=new c1),i.forEach(function(h){var f=w1.bind(null,s,h);l.has(h)||(l.add(h),h.then(f,f))})}}function er(s,i){var l=i.deletions;if(l!==null)for(var h=0;h<l.length;h++){var f=l[h];try{var g=s,E=i,x=E;e:for(;x!==null;){switch(x.tag){case 5:Bt=x.stateNode,Zn=!1;break e;case 3:Bt=x.stateNode.containerInfo,Zn=!0;break e;case 4:Bt=x.stateNode.containerInfo,Zn=!0;break e}x=x.return}if(Bt===null)throw Error(t(160));hy(g,E,f),Bt=null,Zn=!1;var N=f.alternate;N!==null&&(N.return=null),f.return=null}catch(H){dt(f,i,H)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)fy(i,s),i=i.sibling}function fy(s,i){var l=s.alternate,h=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(er(i,s),yr(s),h&4){try{gl(3,s,s.return),wc(3,s)}catch(ce){dt(s,s.return,ce)}try{gl(5,s,s.return)}catch(ce){dt(s,s.return,ce)}}break;case 1:er(i,s),yr(s),h&512&&l!==null&&zo(l,l.return);break;case 5:if(er(i,s),yr(s),h&512&&l!==null&&zo(l,l.return),s.flags&32){var f=s.stateNode;try{os(f,"")}catch(ce){dt(s,s.return,ce)}}if(h&4&&(f=s.stateNode,f!=null)){var g=s.memoizedProps,E=l!==null?l.memoizedProps:g,x=s.type,N=s.updateQueue;if(s.updateQueue=null,N!==null)try{x==="input"&&g.type==="radio"&&g.name!=null&&ka(f,g),Ma(x,E);var H=Ma(x,g);for(E=0;E<N.length;E+=2){var Q=N[E],Y=N[E+1];Q==="style"?Da(f,Y):Q==="dangerouslySetInnerHTML"?Pa(f,Y):Q==="children"?os(f,Y):ne(f,Q,Y,H)}switch(x){case"input":Ra(f,g);break;case"textarea":no(f,g);break;case"select":var K=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?Pr(f,!!g.multiple,se,!1):K!==!!g.multiple&&(g.defaultValue!=null?Pr(f,!!g.multiple,g.defaultValue,!0):Pr(f,!!g.multiple,g.multiple?[]:"",!1))}f[il]=g}catch(ce){dt(s,s.return,ce)}}break;case 6:if(er(i,s),yr(s),h&4){if(s.stateNode===null)throw Error(t(162));f=s.stateNode,g=s.memoizedProps;try{f.nodeValue=g}catch(ce){dt(s,s.return,ce)}}break;case 3:if(er(i,s),yr(s),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Kn(i.containerInfo)}catch(ce){dt(s,s.return,ce)}break;case 4:er(i,s),yr(s);break;case 13:er(i,s),yr(s),f=s.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Cf=Ze())),h&4&&dy(s);break;case 22:if(Q=l!==null&&l.memoizedState!==null,s.mode&1?(Yt=(H=Yt)||Q,er(i,s),Yt=H):er(i,s),yr(s),h&8192){if(H=s.memoizedState!==null,(s.stateNode.isHidden=H)&&!Q&&(s.mode&1)!==0)for(le=s,Q=s.child;Q!==null;){for(Y=le=Q;le!==null;){switch(K=le,se=K.child,K.tag){case 0:case 11:case 14:case 15:gl(4,K,K.return);break;case 1:zo(K,K.return);var ue=K.stateNode;if(typeof ue.componentWillUnmount=="function"){h=K,l=K.return;try{i=h,ue.props=i.memoizedProps,ue.state=i.memoizedState,ue.componentWillUnmount()}catch(ce){dt(h,l,ce)}}break;case 5:zo(K,K.return);break;case 22:if(K.memoizedState!==null){gy(Y);continue}}se!==null?(se.return=K,le=se):gy(Y)}Q=Q.sibling}e:for(Q=null,Y=s;;){if(Y.tag===5){if(Q===null){Q=Y;try{f=Y.stateNode,H?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(x=Y.stateNode,N=Y.memoizedProps.style,E=N!=null&&N.hasOwnProperty("display")?N.display:null,x.style.display=ba("display",E))}catch(ce){dt(s,s.return,ce)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=H?"":Y.memoizedProps}catch(ce){dt(s,s.return,ce)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===s)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===s)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===s)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:er(i,s),yr(s),h&4&&dy(s);break;case 21:break;default:er(i,s),yr(s)}}function yr(s){var i=s.flags;if(i&2){try{e:{for(var l=s.return;l!==null;){if(uy(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(os(f,""),h.flags&=-33);var g=cy(s);Tf(s,g,f);break;case 3:case 4:var E=h.stateNode.containerInfo,x=cy(s);Ef(s,x,E);break;default:throw Error(t(161))}}catch(N){dt(s,s.return,N)}s.flags&=-3}i&4096&&(s.flags&=-4097)}function d1(s,i,l){le=s,py(s)}function py(s,i,l){for(var h=(s.mode&1)!==0;le!==null;){var f=le,g=f.child;if(f.tag===22&&h){var E=f.memoizedState!==null||vc;if(!E){var x=f.alternate,N=x!==null&&x.memoizedState!==null||Yt;x=vc;var H=Yt;if(vc=E,(Yt=N)&&!H)for(le=f;le!==null;)E=le,N=E.child,E.tag===22&&E.memoizedState!==null?_y(f):N!==null?(N.return=E,le=N):_y(f);for(;g!==null;)le=g,py(g),g=g.sibling;le=f,vc=x,Yt=H}my(s)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,le=g):my(s)}}function my(s){for(;le!==null;){var i=le;if((i.flags&8772)!==0){var l=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Yt||wc(5,i);break;case 1:var h=i.stateNode;if(i.flags&4&&!Yt)if(l===null)h.componentDidMount();else{var f=i.elementType===i.type?l.memoizedProps:Jn(i.type,l.memoizedProps);h.componentDidUpdate(f,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&g_(i,g,h);break;case 3:var E=i.updateQueue;if(E!==null){if(l=null,i.child!==null)switch(i.child.tag){case 5:l=i.child.stateNode;break;case 1:l=i.child.stateNode}g_(i,E,l)}break;case 5:var x=i.stateNode;if(l===null&&i.flags&4){l=x;var N=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&l.focus();break;case"img":N.src&&(l.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var H=i.alternate;if(H!==null){var Q=H.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&Kn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Yt||i.flags&512&&wf(i)}catch(K){dt(i,i.return,K)}}if(i===s){le=null;break}if(l=i.sibling,l!==null){l.return=i.return,le=l;break}le=i.return}}function gy(s){for(;le!==null;){var i=le;if(i===s){le=null;break}var l=i.sibling;if(l!==null){l.return=i.return,le=l;break}le=i.return}}function _y(s){for(;le!==null;){var i=le;try{switch(i.tag){case 0:case 11:case 15:var l=i.return;try{wc(4,i)}catch(N){dt(i,l,N)}break;case 1:var h=i.stateNode;if(typeof h.componentDidMount=="function"){var f=i.return;try{h.componentDidMount()}catch(N){dt(i,f,N)}}var g=i.return;try{wf(i)}catch(N){dt(i,g,N)}break;case 5:var E=i.return;try{wf(i)}catch(N){dt(i,E,N)}}}catch(N){dt(i,i.return,N)}if(i===s){le=null;break}var x=i.sibling;if(x!==null){x.return=i.return,le=x;break}le=i.return}}var f1=Math.ceil,Ec=re.ReactCurrentDispatcher,If=re.ReactCurrentOwner,Fn=re.ReactCurrentBatchConfig,ze=0,Lt=null,vt=null,Ht=0,kn=0,Bo=ys(0),kt=0,_l=null,ki=0,Tc=0,Sf=0,yl=null,pn=null,Cf=0,Ho=1/0,qr=null,Ic=!1,xf=null,Ss=null,Sc=!1,Cs=null,Cc=0,vl=0,kf=null,xc=-1,kc=0;function on(){return(ze&6)!==0?Ze():xc!==-1?xc:xc=Ze()}function xs(s){return(s.mode&1)===0?1:(ze&2)!==0&&Ht!==0?Ht&-Ht:YI.transition!==null?(kc===0&&(kc=mi()),kc):(s=Me,s!==0||(s=window.event,s=s===void 0?16:Ga(s.type)),s)}function tr(s,i,l,h){if(50<vl)throw vl=0,kf=null,Error(t(185));cs(s,l,h),((ze&2)===0||s!==Lt)&&(s===Lt&&((ze&2)===0&&(Tc|=l),kt===4&&ks(s,Ht)),mn(s,h),l===1&&ze===0&&(i.mode&1)===0&&(Ho=Ze()+500,tc&&ws()))}function mn(s,i){var l=s.callbackNode;Or(s,i);var h=pi(s,s===Lt?Ht:0);if(h===0)l!==null&&Ba(l),s.callbackNode=null,s.callbackPriority=0;else if(i=h&-h,s.callbackPriority!==i){if(l!=null&&Ba(l),i===1)s.tag===0?QI(vy.bind(null,s)):s_(vy.bind(null,s)),WI(function(){(ze&6)===0&&ws()}),l=null;else{switch(ds(h)){case 1:l=di;break;case 4:l=as;break;case 16:l=Pn;break;case 536870912:l=ku;break;default:l=Pn}l=ky(l,yy.bind(null,s))}s.callbackPriority=i,s.callbackNode=l}}function yy(s,i){if(xc=-1,kc=0,(ze&6)!==0)throw Error(t(327));var l=s.callbackNode;if($o()&&s.callbackNode!==l)return null;var h=pi(s,s===Lt?Ht:0);if(h===0)return null;if((h&30)!==0||(h&s.expiredLanes)!==0||i)i=Rc(s,h);else{i=h;var f=ze;ze|=2;var g=Ey();(Lt!==s||Ht!==i)&&(qr=null,Ho=Ze()+500,Ai(s,i));do try{g1();break}catch(x){wy(s,x)}while(!0);$d(),Ec.current=g,ze=f,vt!==null?i=0:(Lt=null,Ht=0,i=kt)}if(i!==0){if(i===2&&(f=Tn(s),f!==0&&(h=f,i=Rf(s,f))),i===1)throw l=_l,Ai(s,0),ks(s,h),mn(s,Ze()),l;if(i===6)ks(s,h);else{if(f=s.current.alternate,(h&30)===0&&!p1(f)&&(i=Rc(s,h),i===2&&(g=Tn(s),g!==0&&(h=g,i=Rf(s,g))),i===1))throw l=_l,Ai(s,0),ks(s,h),mn(s,Ze()),l;switch(s.finishedWork=f,s.finishedLanes=h,i){case 0:case 1:throw Error(t(345));case 2:Ni(s,pn,qr);break;case 3:if(ks(s,h),(h&130023424)===h&&(i=Cf+500-Ze(),10<i)){if(pi(s,0)!==0)break;if(f=s.suspendedLanes,(f&h)!==h){on(),s.pingedLanes|=s.suspendedLanes&f;break}s.timeoutHandle=Dd(Ni.bind(null,s,pn,qr),i);break}Ni(s,pn,qr);break;case 4:if(ks(s,h),(h&4194240)===h)break;for(i=s.eventTimes,f=-1;0<h;){var E=31-nn(h);g=1<<E,E=i[E],E>f&&(f=E),h&=~g}if(h=f,h=Ze()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*f1(h/1960))-h,10<h){s.timeoutHandle=Dd(Ni.bind(null,s,pn,qr),h);break}Ni(s,pn,qr);break;case 5:Ni(s,pn,qr);break;default:throw Error(t(329))}}}return mn(s,Ze()),s.callbackNode===l?yy.bind(null,s):null}function Rf(s,i){var l=yl;return s.current.memoizedState.isDehydrated&&(Ai(s,i).flags|=256),s=Rc(s,i),s!==2&&(i=pn,pn=l,i!==null&&Af(i)),s}function Af(s){pn===null?pn=s:pn.push.apply(pn,s)}function p1(s){for(var i=s;;){if(i.flags&16384){var l=i.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var f=l[h],g=f.getSnapshot;f=f.value;try{if(!Yn(g(),f))return!1}catch{return!1}}}if(l=i.child,i.subtreeFlags&16384&&l!==null)l.return=i,i=l;else{if(i===s)break;for(;i.sibling===null;){if(i.return===null||i.return===s)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ks(s,i){for(i&=~Sf,i&=~Tc,s.suspendedLanes|=i,s.pingedLanes&=~i,s=s.expirationTimes;0<i;){var l=31-nn(i),h=1<<l;s[l]=-1,i&=~h}}function vy(s){if((ze&6)!==0)throw Error(t(327));$o();var i=pi(s,0);if((i&1)===0)return mn(s,Ze()),null;var l=Rc(s,i);if(s.tag!==0&&l===2){var h=Tn(s);h!==0&&(i=h,l=Rf(s,h))}if(l===1)throw l=_l,Ai(s,0),ks(s,i),mn(s,Ze()),l;if(l===6)throw Error(t(345));return s.finishedWork=s.current.alternate,s.finishedLanes=i,Ni(s,pn,qr),mn(s,Ze()),null}function Nf(s,i){var l=ze;ze|=1;try{return s(i)}finally{ze=l,ze===0&&(Ho=Ze()+500,tc&&ws())}}function Ri(s){Cs!==null&&Cs.tag===0&&(ze&6)===0&&$o();var i=ze;ze|=1;var l=Fn.transition,h=Me;try{if(Fn.transition=null,Me=1,s)return s()}finally{Me=h,Fn.transition=l,ze=i,(ze&6)===0&&ws()}}function Pf(){kn=Bo.current,st(Bo)}function Ai(s,i){s.finishedWork=null,s.finishedLanes=0;var l=s.timeoutHandle;if(l!==-1&&(s.timeoutHandle=-1,$I(l)),vt!==null)for(l=vt.return;l!==null;){var h=l;switch(jd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Zu();break;case 3:jo(),st(hn),st(Gt),Jd();break;case 5:Yd(h);break;case 4:jo();break;case 13:st(lt);break;case 19:st(lt);break;case 10:Wd(h.type._context);break;case 22:case 23:Pf()}l=l.return}if(Lt=s,vt=s=Rs(s.current,null),Ht=kn=i,kt=0,_l=null,Sf=Tc=ki=0,pn=yl=null,Si!==null){for(i=0;i<Si.length;i++)if(l=Si[i],h=l.interleaved,h!==null){l.interleaved=null;var f=h.next,g=l.pending;if(g!==null){var E=g.next;g.next=f,h.next=E}l.pending=h}Si=null}return s}function wy(s,i){do{var l=vt;try{if($d(),hc.current=mc,dc){for(var h=ut.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}dc=!1}if(xi=0,Ot=xt=ut=null,hl=!1,dl=0,If.current=null,l===null||l.return===null){kt=1,_l=i,vt=null;break}e:{var g=s,E=l.return,x=l,N=i;if(i=Ht,x.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var H=N,Q=x,Y=Q.tag;if((Q.mode&1)===0&&(Y===0||Y===11||Y===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var se=W_(E);if(se!==null){se.flags&=-257,q_(se,E,x,g,i),se.mode&1&&$_(g,H,i),i=se,N=H;var ue=i.updateQueue;if(ue===null){var ce=new Set;ce.add(N),i.updateQueue=ce}else ue.add(N);break e}else{if((i&1)===0){$_(g,H,i),bf();break e}N=Error(t(426))}}else if(at&&x.mode&1){var mt=W_(E);if(mt!==null){(mt.flags&65536)===0&&(mt.flags|=256),q_(mt,E,x,g,i),Bd(Uo(N,x));break e}}g=N=Uo(N,x),kt!==4&&(kt=2),yl===null?yl=[g]:yl.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var U=B_(g,N,i);m_(g,U);break e;case 1:x=N;var O=g.type,B=g.stateNode;if((g.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Ss===null||!Ss.has(B)))){g.flags|=65536,i&=-i,g.lanes|=i;var X=H_(g,x,i);m_(g,X);break e}}g=g.return}while(g!==null)}Iy(l)}catch(he){i=he,vt===l&&l!==null&&(vt=l=l.return);continue}break}while(!0)}function Ey(){var s=Ec.current;return Ec.current=mc,s===null?mc:s}function bf(){(kt===0||kt===3||kt===2)&&(kt=4),Lt===null||(ki&268435455)===0&&(Tc&268435455)===0||ks(Lt,Ht)}function Rc(s,i){var l=ze;ze|=2;var h=Ey();(Lt!==s||Ht!==i)&&(qr=null,Ai(s,i));do try{m1();break}catch(f){wy(s,f)}while(!0);if($d(),ze=l,Ec.current=h,vt!==null)throw Error(t(261));return Lt=null,Ht=0,kt}function m1(){for(;vt!==null;)Ty(vt)}function g1(){for(;vt!==null&&!Cu();)Ty(vt)}function Ty(s){var i=xy(s.alternate,s,kn);s.memoizedProps=s.pendingProps,i===null?Iy(s):vt=i,If.current=null}function Iy(s){var i=s;do{var l=i.alternate;if(s=i.return,(i.flags&32768)===0){if(l=l1(l,i,kn),l!==null){vt=l;return}}else{if(l=u1(l,i),l!==null){l.flags&=32767,vt=l;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{kt=6,vt=null;return}}if(i=i.sibling,i!==null){vt=i;return}vt=i=s}while(i!==null);kt===0&&(kt=5)}function Ni(s,i,l){var h=Me,f=Fn.transition;try{Fn.transition=null,Me=1,_1(s,i,l,h)}finally{Fn.transition=f,Me=h}return null}function _1(s,i,l,h){do $o();while(Cs!==null);if((ze&6)!==0)throw Error(t(327));l=s.finishedWork;var f=s.finishedLanes;if(l===null)return null;if(s.finishedWork=null,s.finishedLanes=0,l===s.current)throw Error(t(177));s.callbackNode=null,s.callbackPriority=0;var g=l.lanes|l.childLanes;if(Ye(s,g),s===Lt&&(vt=Lt=null,Ht=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Sc||(Sc=!0,ky(Pn,function(){return $o(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=Fn.transition,Fn.transition=null;var E=Me;Me=1;var x=ze;ze|=4,If.current=null,h1(s,l),fy(l,s),VI(Pd),ps=!!Nd,Pd=Nd=null,s.current=l,d1(l),pd(),ze=x,Me=E,Fn.transition=g}else s.current=l;if(Sc&&(Sc=!1,Cs=s,Cc=f),g=s.pendingLanes,g===0&&(Ss=null),Ru(l.stateNode),mn(s,Ze()),i!==null)for(h=s.onRecoverableError,l=0;l<i.length;l++)f=i[l],h(f.value,{componentStack:f.stack,digest:f.digest});if(Ic)throw Ic=!1,s=xf,xf=null,s;return(Cc&1)!==0&&s.tag!==0&&$o(),g=s.pendingLanes,(g&1)!==0?s===kf?vl++:(vl=0,kf=s):vl=0,ws(),null}function $o(){if(Cs!==null){var s=ds(Cc),i=Fn.transition,l=Me;try{if(Fn.transition=null,Me=16>s?16:s,Cs===null)var h=!1;else{if(s=Cs,Cs=null,Cc=0,(ze&6)!==0)throw Error(t(331));var f=ze;for(ze|=4,le=s.current;le!==null;){var g=le,E=g.child;if((le.flags&16)!==0){var x=g.deletions;if(x!==null){for(var N=0;N<x.length;N++){var H=x[N];for(le=H;le!==null;){var Q=le;switch(Q.tag){case 0:case 11:case 15:gl(8,Q,g)}var Y=Q.child;if(Y!==null)Y.return=Q,le=Y;else for(;le!==null;){Q=le;var K=Q.sibling,se=Q.return;if(ly(Q),Q===H){le=null;break}if(K!==null){K.return=se,le=K;break}le=se}}}var ue=g.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var mt=ce.sibling;ce.sibling=null,ce=mt}while(ce!==null)}}le=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,le=E;else e:for(;le!==null;){if(g=le,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:gl(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,le=U;break e}le=g.return}}var O=s.current;for(le=O;le!==null;){E=le;var B=E.child;if((E.subtreeFlags&2064)!==0&&B!==null)B.return=E,le=B;else e:for(E=O;le!==null;){if(x=le,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:wc(9,x)}}catch(he){dt(x,x.return,he)}if(x===E){le=null;break e}var X=x.sibling;if(X!==null){X.return=x.return,le=X;break e}le=x.return}}if(ze=f,ws(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(fi,s)}catch{}h=!0}return h}finally{Me=l,Fn.transition=i}}return!1}function Sy(s,i,l){i=Uo(l,i),i=B_(s,i,1),s=Ts(s,i,1),i=on(),s!==null&&(cs(s,1,i),mn(s,i))}function dt(s,i,l){if(s.tag===3)Sy(s,s,l);else for(;i!==null;){if(i.tag===3){Sy(i,s,l);break}else if(i.tag===1){var h=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ss===null||!Ss.has(h))){s=Uo(l,s),s=H_(i,s,1),i=Ts(i,s,1),s=on(),i!==null&&(cs(i,1,s),mn(i,s));break}}i=i.return}}function y1(s,i,l){var h=s.pingCache;h!==null&&h.delete(i),i=on(),s.pingedLanes|=s.suspendedLanes&l,Lt===s&&(Ht&l)===l&&(kt===4||kt===3&&(Ht&130023424)===Ht&&500>Ze()-Cf?Ai(s,0):Sf|=l),mn(s,i)}function Cy(s,i){i===0&&((s.mode&1)===0?i=1:(i=fo,fo<<=1,(fo&130023424)===0&&(fo=4194304)));var l=on();s=Hr(s,i),s!==null&&(cs(s,i,l),mn(s,l))}function v1(s){var i=s.memoizedState,l=0;i!==null&&(l=i.retryLane),Cy(s,l)}function w1(s,i){var l=0;switch(s.tag){case 13:var h=s.stateNode,f=s.memoizedState;f!==null&&(l=f.retryLane);break;case 19:h=s.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(i),Cy(s,l)}var xy;xy=function(s,i,l){if(s!==null)if(s.memoizedProps!==i.pendingProps||hn.current)fn=!0;else{if((s.lanes&l)===0&&(i.flags&128)===0)return fn=!1,a1(s,i,l);fn=(s.flags&131072)!==0}else fn=!1,at&&(i.flags&1048576)!==0&&i_(i,rc,i.index);switch(i.lanes=0,i.tag){case 2:var h=i.type;yc(s,i),s=i.pendingProps;var f=bo(i,Gt.current);Fo(i,l),f=tf(null,i,h,s,f,l);var g=nf();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,dn(h)?(g=!0,ec(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Kd(i),f.updater=gc,i.stateNode=f,f._reactInternals=i,uf(i,h,s,l),i=ff(null,i,h,!0,g,l)):(i.tag=0,at&&g&&Fd(i),sn(null,i,f,l),i=i.child),i;case 16:h=i.elementType;e:{switch(yc(s,i),s=i.pendingProps,f=h._init,h=f(h._payload),i.type=h,f=i.tag=T1(h),s=Jn(h,s),f){case 0:i=df(null,i,h,s,l);break e;case 1:i=J_(null,i,h,s,l);break e;case 11:i=G_(null,i,h,s,l);break e;case 14:i=K_(null,i,h,Jn(h.type,s),l);break e}throw Error(t(306,h,""))}return i;case 0:return h=i.type,f=i.pendingProps,f=i.elementType===h?f:Jn(h,f),df(s,i,h,f,l);case 1:return h=i.type,f=i.pendingProps,f=i.elementType===h?f:Jn(h,f),J_(s,i,h,f,l);case 3:e:{if(Z_(i),s===null)throw Error(t(387));h=i.pendingProps,g=i.memoizedState,f=g.element,p_(s,i),uc(i,h,null,l);var E=i.memoizedState;if(h=E.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=Uo(Error(t(423)),i),i=ey(s,i,h,l,f);break e}else if(h!==f){f=Uo(Error(t(424)),i),i=ey(s,i,h,l,f);break e}else for(xn=_s(i.stateNode.containerInfo.firstChild),Cn=i,at=!0,Xn=null,l=d_(i,null,h,l),i.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Lo(),h===f){i=Wr(s,i,l);break e}sn(s,i,h,l)}i=i.child}return i;case 5:return __(i),s===null&&zd(i),h=i.type,f=i.pendingProps,g=s!==null?s.memoizedProps:null,E=f.children,bd(h,f)?E=null:g!==null&&bd(h,g)&&(i.flags|=32),X_(s,i),sn(s,i,E,l),i.child;case 6:return s===null&&zd(i),null;case 13:return ty(s,i,l);case 4:return Qd(i,i.stateNode.containerInfo),h=i.pendingProps,s===null?i.child=Mo(i,null,h,l):sn(s,i,h,l),i.child;case 11:return h=i.type,f=i.pendingProps,f=i.elementType===h?f:Jn(h,f),G_(s,i,h,f,l);case 7:return sn(s,i,i.pendingProps,l),i.child;case 8:return sn(s,i,i.pendingProps.children,l),i.child;case 12:return sn(s,i,i.pendingProps.children,l),i.child;case 10:e:{if(h=i.type._context,f=i.pendingProps,g=i.memoizedProps,E=f.value,et(oc,h._currentValue),h._currentValue=E,g!==null)if(Yn(g.value,E)){if(g.children===f.children&&!hn.current){i=Wr(s,i,l);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var x=g.dependencies;if(x!==null){E=g.child;for(var N=x.firstContext;N!==null;){if(N.context===h){if(g.tag===1){N=$r(-1,l&-l),N.tag=2;var H=g.updateQueue;if(H!==null){H=H.shared;var Q=H.pending;Q===null?N.next=N:(N.next=Q.next,Q.next=N),H.pending=N}}g.lanes|=l,N=g.alternate,N!==null&&(N.lanes|=l),qd(g.return,l,i),x.lanes|=l;break}N=N.next}}else if(g.tag===10)E=g.type===i.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=l,x=E.alternate,x!==null&&(x.lanes|=l),qd(E,l,i),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===i){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}sn(s,i,f.children,l),i=i.child}return i;case 9:return f=i.type,h=i.pendingProps.children,Fo(i,l),f=Mn(f),h=h(f),i.flags|=1,sn(s,i,h,l),i.child;case 14:return h=i.type,f=Jn(h,i.pendingProps),f=Jn(h.type,f),K_(s,i,h,f,l);case 15:return Q_(s,i,i.type,i.pendingProps,l);case 17:return h=i.type,f=i.pendingProps,f=i.elementType===h?f:Jn(h,f),yc(s,i),i.tag=1,dn(h)?(s=!0,ec(i)):s=!1,Fo(i,l),U_(i,h,f),uf(i,h,f,l),ff(null,i,h,!0,s,l);case 19:return ry(s,i,l);case 22:return Y_(s,i,l)}throw Error(t(156,i.tag))};function ky(s,i){return co(s,i)}function E1(s,i,l,h){this.tag=s,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(s,i,l,h){return new E1(s,i,l,h)}function Df(s){return s=s.prototype,!(!s||!s.isReactComponent)}function T1(s){if(typeof s=="function")return Df(s)?1:0;if(s!=null){if(s=s.$$typeof,s===L)return 11;if(s===Se)return 14}return 2}function Rs(s,i){var l=s.alternate;return l===null?(l=jn(s.tag,i,s.key,s.mode),l.elementType=s.elementType,l.type=s.type,l.stateNode=s.stateNode,l.alternate=s,s.alternate=l):(l.pendingProps=i,l.type=s.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=s.flags&14680064,l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,i=s.dependencies,l.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},l.sibling=s.sibling,l.index=s.index,l.ref=s.ref,l}function Ac(s,i,l,h,f,g){var E=2;if(h=s,typeof s=="function")Df(s)&&(E=1);else if(typeof s=="string")E=5;else e:switch(s){case D:return Pi(l.children,f,g,i);case C:E=8,f|=8;break;case k:return s=jn(12,l,i,f|2),s.elementType=k,s.lanes=g,s;case R:return s=jn(13,l,i,f),s.elementType=R,s.lanes=g,s;case Re:return s=jn(19,l,i,f),s.elementType=Re,s.lanes=g,s;case Ge:return Nc(l,f,g,i);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case A:E=10;break e;case P:E=9;break e;case L:E=11;break e;case Se:E=14;break e;case Pt:E=16,h=null;break e}throw Error(t(130,s==null?s:typeof s,""))}return i=jn(E,l,i,f),i.elementType=s,i.type=h,i.lanes=g,i}function Pi(s,i,l,h){return s=jn(7,s,h,i),s.lanes=l,s}function Nc(s,i,l,h){return s=jn(22,s,h,i),s.elementType=Ge,s.lanes=l,s.stateNode={isHidden:!1},s}function Of(s,i,l){return s=jn(6,s,null,i),s.lanes=l,s}function Lf(s,i,l){return i=jn(4,s.children!==null?s.children:[],s.key,i),i.lanes=l,i.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},i}function I1(s,i,l,h,f){this.tag=i,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=us(0),this.expirationTimes=us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=us(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Mf(s,i,l,h,f,g,E,x,N){return s=new I1(s,i,l,x,N),i===1?(i=1,g===!0&&(i|=8)):i=0,g=jn(3,null,null,i),s.current=g,g.stateNode=s,g.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(g),s}function S1(s,i,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:h==null?null:""+h,children:s,containerInfo:i,implementation:l}}function Ry(s){if(!s)return vs;s=s._reactInternals;e:{if(Hn(s)!==s||s.tag!==1)throw Error(t(170));var i=s;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(dn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(s.tag===1){var l=s.type;if(dn(l))return n_(s,l,i)}return i}function Ay(s,i,l,h,f,g,E,x,N){return s=Mf(l,h,!0,s,f,g,E,x,N),s.context=Ry(null),l=s.current,h=on(),f=xs(l),g=$r(h,f),g.callback=i??null,Ts(l,g,f),s.current.lanes=f,cs(s,f,h),mn(s,h),s}function Pc(s,i,l,h){var f=i.current,g=on(),E=xs(f);return l=Ry(l),i.context===null?i.context=l:i.pendingContext=l,i=$r(g,E),i.payload={element:s},h=h===void 0?null:h,h!==null&&(i.callback=h),s=Ts(f,i,E),s!==null&&(tr(s,f,E,g),lc(s,f,E)),E}function bc(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function Ny(s,i){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var l=s.retryLane;s.retryLane=l!==0&&l<i?l:i}}function Vf(s,i){Ny(s,i),(s=s.alternate)&&Ny(s,i)}function C1(){return null}var Py=typeof reportError=="function"?reportError:function(s){console.error(s)};function Ff(s){this._internalRoot=s}Dc.prototype.render=Ff.prototype.render=function(s){var i=this._internalRoot;if(i===null)throw Error(t(409));Pc(s,i,null,null)},Dc.prototype.unmount=Ff.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var i=s.containerInfo;Ri(function(){Pc(null,s,null,null)}),i[jr]=null}};function Dc(s){this._internalRoot=s}Dc.prototype.unstable_scheduleHydration=function(s){if(s){var i=Du();s={blockedOn:null,target:s,priority:i};for(var l=0;l<hr.length&&i!==0&&i<hr[l].priority;l++);hr.splice(l,0,s),l===0&&Mu(s)}};function jf(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function Oc(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function by(){}function x1(s,i,l,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var H=bc(E);g.call(H)}}var E=Ay(i,h,s,0,null,!1,!1,"",by);return s._reactRootContainer=E,s[jr]=E.current,rl(s.nodeType===8?s.parentNode:s),Ri(),E}for(;f=s.lastChild;)s.removeChild(f);if(typeof h=="function"){var x=h;h=function(){var H=bc(N);x.call(H)}}var N=Mf(s,0,!1,null,null,!1,!1,"",by);return s._reactRootContainer=N,s[jr]=N.current,rl(s.nodeType===8?s.parentNode:s),Ri(function(){Pc(i,N,l,h)}),N}function Lc(s,i,l,h,f){var g=l._reactRootContainer;if(g){var E=g;if(typeof f=="function"){var x=f;f=function(){var N=bc(E);x.call(N)}}Pc(i,E,s,f)}else E=x1(l,i,s,f,h);return bc(E)}Pu=function(s){switch(s.tag){case 3:var i=s.stateNode;if(i.current.memoizedState.isDehydrated){var l=ls(i.pendingLanes);l!==0&&(hs(i,l|1),mn(i,Ze()),(ze&6)===0&&(Ho=Ze()+500,ws()))}break;case 13:Ri(function(){var h=Hr(s,1);if(h!==null){var f=on();tr(h,s,1,f)}}),Vf(s,1)}},po=function(s){if(s.tag===13){var i=Hr(s,134217728);if(i!==null){var l=on();tr(i,s,134217728,l)}Vf(s,134217728)}},bu=function(s){if(s.tag===13){var i=xs(s),l=Hr(s,i);if(l!==null){var h=on();tr(l,s,i,h)}Vf(s,i)}},Du=function(){return Me},Ou=function(s,i){var l=Me;try{return Me=s,i()}finally{Me=l}},so=function(s,i,l){switch(i){case"input":if(Ra(s,l),i=l.name,l.type==="radio"&&i!=null){for(l=s;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<l.length;i++){var h=l[i];if(h!==s&&h.form===s.form){var f=Ju(h);if(!f)throw Error(t(90));Ji(h),Ra(h,f)}}}break;case"textarea":no(s,l);break;case"select":i=l.value,i!=null&&Pr(s,!!l.multiple,i,!1)}},li=Nf,Fa=Ri;var k1={usingClientEntryPoint:!1,Events:[ol,No,Ju,ur,Va,Nf]},wl={findFiberByHostInstance:wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R1={bundleType:wl.bundleType,version:wl.version,rendererPackageName:wl.rendererPackageName,rendererConfig:wl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=za(s),s===null?null:s.stateNode},findFiberByHostInstance:wl.findFiberByHostInstance||C1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{fi=Mc.inject(R1),En=Mc}catch{}}return gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k1,gn.createPortal=function(s,i){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jf(i))throw Error(t(200));return S1(s,i,null,l)},gn.createRoot=function(s,i){if(!jf(s))throw Error(t(299));var l=!1,h="",f=Py;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Mf(s,1,!1,null,null,l,!1,h,f),s[jr]=i.current,rl(s.nodeType===8?s.parentNode:s),new Ff(i)},gn.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var i=s._reactInternals;if(i===void 0)throw typeof s.render=="function"?Error(t(188)):(s=Object.keys(s).join(","),Error(t(268,s)));return s=za(i),s=s===null?null:s.stateNode,s},gn.flushSync=function(s){return Ri(s)},gn.hydrate=function(s,i,l){if(!Oc(i))throw Error(t(200));return Lc(null,s,i,!0,l)},gn.hydrateRoot=function(s,i,l){if(!jf(s))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,f=!1,g="",E=Py;if(l!=null&&(l.unstable_strictMode===!0&&(f=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),i=Ay(i,null,s,1,l??null,f,!1,g,E),s[jr]=i.current,rl(s),h)for(s=0;s<h.length;s++)l=h[s],f=l._getVersion,f=f(l._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[l,f]:i.mutableSourceEagerHydrationData.push(l,f);return new Dc(i)},gn.render=function(s,i,l){if(!Oc(i))throw Error(t(200));return Lc(null,s,i,!1,l)},gn.unmountComponentAtNode=function(s){if(!Oc(s))throw Error(t(40));return s._reactRootContainer?(Ri(function(){Lc(null,null,s,!1,function(){s._reactRootContainer=null,s[jr]=null})}),!0):!1},gn.unstable_batchedUpdates=Nf,gn.unstable_renderSubtreeIntoContainer=function(s,i,l,h){if(!Oc(l))throw Error(t(200));if(s==null||s._reactInternals===void 0)throw Error(t(38));return Lc(s,i,l,!1,h)},gn.version="18.3.1-next-f1338f8080-20240426",gn}var zy;function V1(){if(zy)return Bf.exports;zy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Bf.exports=M1(),Bf.exports}var By;function F1(){if(By)return Vc;By=1;var n=V1();return Vc.createRoot=n.createRoot,Vc.hydrateRoot=n.hydrateRoot,Vc}var j1=F1();const Hy=n=>{let e;const t=new Set,r=(_,w)=>{const T=typeof _=="function"?_(e):_;if(!Object.is(T,e)){const I=e;e=w??(typeof T!="object"||T===null)?T:Object.assign({},e,T),t.forEach(b=>b(e,I))}},o=()=>e,d={setState:r,getState:o,getInitialState:()=>p,subscribe:_=>(t.add(_),()=>t.delete(_))},p=e=n(r,o,d);return d},U1=n=>n?Hy(n):Hy,z1=n=>n;function B1(n,e=z1){const t=Vy.useSyncExternalStore(n.subscribe,()=>e(n.getState()),()=>e(n.getInitialState()));return Vy.useDebugValue(t),t}const $y=n=>{const e=U1(n),t=r=>B1(e,r);return Object.assign(t,e),t},H1=n=>n?$y(n):$y,$1=()=>{};var Wy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=function(n,e){if(!n)throw ya(e)},ya=function(n){return new Error("Firebase Database ("+iw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},W1=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],u=n[t++],d=n[t++],p=((o&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},im={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const a=n[o],u=o+1<n.length,d=u?n[o+1]:0,p=o+2<n.length,_=p?n[o+2]:0,w=a>>2,T=(a&3)<<4|d>>4;let I=(d&15)<<2|_>>6,b=_&63;p||(b=64,u||(I=64)),r.push(t[w],t[T],t[I],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ow(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):W1(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const _=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||_==null||T==null)throw new q1;const I=a<<2|d>>4;if(r.push(I),_!==64){const b=d<<4&240|_>>2;if(r.push(b),T!==64){const j=_<<6&192|T;r.push(j)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class q1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aw=function(n){const e=ow(n);return im.encodeByteArray(e,!0)},ih=function(n){return aw(n).replace(/\./g,"")},oh=function(n){try{return im.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(n){return lw(void 0,n)}function lw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!K1(t)||(n[t]=lw(n[t],e[t]));return n}function K1(n){return n!=="__proto__"}/**
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
 */function Q1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Y1=()=>Q1().__FIREBASE_DEFAULTS__,X1=()=>{if(typeof process>"u"||typeof Wy>"u")return;const n=Wy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},J1=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&oh(n[1]);return e&&JSON.parse(e)},Fh=()=>{try{return $1()||Y1()||X1()||J1()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},uw=n=>{var e,t;return(t=(e=Fh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cw=n=>{const e=uw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},hw=()=>{var n;return(n=Fh())===null||n===void 0?void 0:n.config},dw=n=>{var e;return(e=Fh())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ti(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function om(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function fw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ih(JSON.stringify(t)),ih(JSON.stringify(u)),""].join(".")}const Ol={};function Z1(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ol))Ol[e]?n.emulator.push(e):n.prod.push(e);return n}function eS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let qy=!1;function am(n,e){if(typeof window>"u"||typeof document>"u"||!ti(window.location.host)||Ol[n]===e||Ol[n]||qy)return;Ol[n]=e;function t(I){return`__firebase__banner__${I}`}const r="__firebase__banner",a=Z1().prod.length>0;function u(){const I=document.getElementById(r);I&&I.remove()}function d(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function p(I,b){I.setAttribute("width","24"),I.setAttribute("id",b),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function _(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{qy=!0,u()},I}function w(I,b){I.setAttribute("id",b),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=eS(r),b=t("text"),j=document.getElementById(b)||document.createElement("span"),M=t("learnmore"),z=document.getElementById(M)||document.createElement("a"),ae=t("preprendIcon"),W=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ne=I.element;d(ne),w(z,M);const re=_();p(W,ae),ne.append(W,j,z,re),document.body.appendChild(ne)}a?(j.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,j.innerText="Preview backend running in this workspace."),j.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tn())}function tS(){var n;const e=(n=Fh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sS(){const n=tn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function iS(){return iw.NODE_ADMIN===!0}function oS(){return!tS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aS(){try{return typeof indexedDB=="object"}catch{return!1}}function lS(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="FirebaseError";class ns extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=uS,Object.setPrototypeOf(this,ns.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,au.prototype.create)}}class au{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?cS(a,r):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new ns(o,d,r)}}function cS(n,e){return n.replace(hS,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const hS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n){return JSON.parse(n)}function jt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=function(n){let e={},t={},r={},o="";try{const a=n.split(".");e=ql(oh(a[0])||""),t=ql(oh(a[1])||""),o=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:o}},dS=function(n){const e=mw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},fS=function(n){const e=mw(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function aa(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function fp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ah(n,e,t){const r={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=e.call(t,n[o],o,n));return r}function $s(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const a=n[o],u=e[o];if(Gy(a)&&Gy(u)){if(!$s(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function Gy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,a]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function kl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)r[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)r[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const I=r[T-3]^r[T-8]^r[T-14]^r[T-16];r[T]=(I<<1|I>>>31)&4294967295}let o=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],p=this.chain_[4],_,w;for(let T=0;T<80;T++){T<40?T<20?(_=d^a&(u^d),w=1518500249):(_=a^u^d,w=1859775393):T<60?(_=a&u|d&(a|u),w=2400959708):(_=a^u^d,w=3395469782);const I=(o<<5|o>>>27)+_+p+w+r[T]&4294967295;p=d,d=u,u=(a<<30|a>>>2)&4294967295,a=o,o=I}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let o=0;const a=this.buf_;let u=this.inbuf_;for(;o<t;){if(u===0)for(;o<=r;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(a[u]=e.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(a),u=0;break}}else for(;o<t;)if(a[u]=e[o],++u,++o,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[o]>>a&255,++r;return e}}function mS(n,e){const t=new gS(n,e);return t.subscribe.bind(t)}class gS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");_S(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=Wf),o.error===void 0&&(o.error=Wf),o.complete===void 0&&(o.complete=Wf);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _S(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Wf(){}function um(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);if(o>=55296&&o<=56319){const a=o-55296;r++,J(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;o=65536+(a<<10)+u}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Uh=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function An(n){return n&&n._delegate?n._delegate:n}class Ws{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bi="[DEFAULT]";/**
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
 */class vS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new jh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ES(e))try{this.getOrInitializeService({instanceIdentifier:bi})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bi){return this.instances.has(e)}getOptions(e=bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(o)}return o}onInit(e,t){var r;const o=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(o,a);const u=this.instances.get(o);return u&&e(u,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wS(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bi){return this.component?this.component.multipleInstances?e:bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wS(n){return n===bi?void 0:n}function ES(n){return n.instantiationMode==="EAGER"}/**
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
 */class TS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Oe||(Oe={}));const IS={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},SS=Oe.INFO,CS={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},xS=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=CS[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zh{constructor(e){this.name=e,this._logLevel=SS,this._logHandler=xS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const kS=(n,e)=>e.some(t=>n instanceof t);let Ky,Qy;function RS(){return Ky||(Ky=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AS(){return Qy||(Qy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gw=new WeakMap,pp=new WeakMap,_w=new WeakMap,qf=new WeakMap,cm=new WeakMap;function NS(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Vs(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&gw.set(t,n)}).catch(()=>{}),cm.set(e,n),e}function PS(n){if(pp.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});pp.set(n,e)}let mp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return pp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_w.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bS(n){mp=n(mp)}function DS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Gf(this),e,...t);return _w.set(r,e.sort?e.sort():[e]),Vs(r)}:AS().includes(n)?function(...e){return n.apply(Gf(this),e),Vs(gw.get(this))}:function(...e){return Vs(n.apply(Gf(this),e))}}function OS(n){return typeof n=="function"?DS(n):(n instanceof IDBTransaction&&PS(n),kS(n,RS())?new Proxy(n,mp):n)}function Vs(n){if(n instanceof IDBRequest)return NS(n);if(qf.has(n))return qf.get(n);const e=OS(n);return e!==n&&(qf.set(n,e),cm.set(e,n)),e}const Gf=n=>cm.get(n);function LS(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(n,e),d=Vs(u);return r&&u.addEventListener("upgradeneeded",p=>{r(Vs(u.result),p.oldVersion,p.newVersion,Vs(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),d}const MS=["get","getKey","getAll","getAllKeys","count"],VS=["put","add","delete","clear"],Kf=new Map;function Yy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Kf.get(e))return Kf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=VS.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||MS.includes(t)))return;const a=async function(u,...d){const p=this.transaction(u,o?"readwrite":"readonly");let _=p.store;return r&&(_=_.index(d.shift())),(await Promise.all([_[t](...d),o&&p.done]))[0]};return Kf.set(e,a),a}bS(n=>({...n,get:(e,t,r)=>Yy(e,t)||n.get(e,t,r),has:(e,t)=>!!Yy(e,t)||n.has(e,t)}));/**
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
 */class FS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jS(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function jS(n){const e=n.getComponent();return e?.type==="VERSION"}const gp="@firebase/app",Xy="0.13.2";/**
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
 */const Xr=new zh("@firebase/app"),US="@firebase/app-compat",zS="@firebase/analytics-compat",BS="@firebase/analytics",HS="@firebase/app-check-compat",$S="@firebase/app-check",WS="@firebase/auth",qS="@firebase/auth-compat",GS="@firebase/database",KS="@firebase/data-connect",QS="@firebase/database-compat",YS="@firebase/functions",XS="@firebase/functions-compat",JS="@firebase/installations",ZS="@firebase/installations-compat",eC="@firebase/messaging",tC="@firebase/messaging-compat",nC="@firebase/performance",rC="@firebase/performance-compat",sC="@firebase/remote-config",iC="@firebase/remote-config-compat",oC="@firebase/storage",aC="@firebase/storage-compat",lC="@firebase/firestore",uC="@firebase/ai",cC="@firebase/firestore-compat",hC="firebase",dC="11.10.0";/**
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
 */const _p="[DEFAULT]",fC={[gp]:"fire-core",[US]:"fire-core-compat",[BS]:"fire-analytics",[zS]:"fire-analytics-compat",[$S]:"fire-app-check",[HS]:"fire-app-check-compat",[WS]:"fire-auth",[qS]:"fire-auth-compat",[GS]:"fire-rtdb",[KS]:"fire-data-connect",[QS]:"fire-rtdb-compat",[YS]:"fire-fn",[XS]:"fire-fn-compat",[JS]:"fire-iid",[ZS]:"fire-iid-compat",[eC]:"fire-fcm",[tC]:"fire-fcm-compat",[nC]:"fire-perf",[rC]:"fire-perf-compat",[sC]:"fire-rc",[iC]:"fire-rc-compat",[oC]:"fire-gcs",[aC]:"fire-gcs-compat",[lC]:"fire-fst",[cC]:"fire-fst-compat",[uC]:"fire-vertex","fire-js":"fire-js",[hC]:"fire-js-all"};/**
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
 */const lh=new Map,pC=new Map,yp=new Map;function Jy(n,e){try{n.container.addComponent(e)}catch(t){Xr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zi(n){const e=n.name;if(yp.has(e))return Xr.debug(`There were multiple attempts to register component ${e}.`),!1;yp.set(e,n);for(const t of lh.values())Jy(t,n);for(const t of pC.values())Jy(t,n);return!0}function Bh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Un(n){return n==null?!1:n.settings!==void 0}/**
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
 */const mC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fs=new au("app","Firebase",mC);/**
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
 */class gC{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fs.create("app-deleted",{appName:this._name})}}/**
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
 */const Ki=dC;function yw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_p,automaticDataCollectionEnabled:!0},e),o=r.name;if(typeof o!="string"||!o)throw Fs.create("bad-app-name",{appName:String(o)});if(t||(t=hw()),!t)throw Fs.create("no-options");const a=lh.get(o);if(a){if($s(t,a.options)&&$s(r,a.config))return a;throw Fs.create("duplicate-app",{appName:o})}const u=new TS(o);for(const p of yp.values())u.addComponent(p);const d=new gC(t,r,u);return lh.set(o,d),d}function hm(n=_p){const e=lh.get(n);if(!e&&n===_p&&hw())return yw();if(!e)throw Fs.create("no-app",{appName:n});return e}function Ir(n,e,t){var r;let o=(r=fC[n])!==null&&r!==void 0?r:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xr.warn(d.join(" "));return}zi(new Ws(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const _C="firebase-heartbeat-database",yC=1,Gl="firebase-heartbeat-store";let Qf=null;function vw(){return Qf||(Qf=LS(_C,yC,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Gl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Fs.create("idb-open",{originalErrorMessage:n.message})})),Qf}async function vC(n){try{const t=(await vw()).transaction(Gl),r=await t.objectStore(Gl).get(ww(n));return await t.done,r}catch(e){if(e instanceof ns)Xr.warn(e.message);else{const t=Fs.create("idb-get",{originalErrorMessage:e?.message});Xr.warn(t.message)}}}async function Zy(n,e){try{const r=(await vw()).transaction(Gl,"readwrite");await r.objectStore(Gl).put(e,ww(n)),await r.done}catch(t){if(t instanceof ns)Xr.warn(t.message);else{const r=Fs.create("idb-set",{originalErrorMessage:t?.message});Xr.warn(r.message)}}}function ww(n){return`${n.name}!${n.options.appId}`}/**
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
 */const wC=1024,EC=30;class TC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new SC(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=ev();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>EC){const u=CC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Xr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ev(),{heartbeatsToSend:r,unsentEntries:o}=IC(this._heartbeatsCache.heartbeats),a=ih(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Xr.warn(t),""}}}function ev(){return new Date().toISOString().substring(0,10)}function IC(n,e=wC){const t=[];let r=n.slice();for(const o of n){const a=t.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),tv(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),tv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class SC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aS()?lS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vC(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Zy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Zy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function tv(n){return ih(JSON.stringify({version:2,heartbeats:n})).length}function CC(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function xC(n){zi(new Ws("platform-logger",e=>new FS(e),"PRIVATE")),zi(new Ws("heartbeat",e=>new TC(e),"PRIVATE")),Ir(gp,Xy,n),Ir(gp,Xy,"esm2017"),Ir("fire-js","")}xC("");function dm(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function Ew(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kC=Ew,Tw=new au("auth","Firebase",Ew());/**
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
 */const uh=new zh("@firebase/auth");function RC(n,...e){uh.logLevel<=Oe.WARN&&uh.warn(`Auth (${Ki}): ${n}`,...e)}function Kc(n,...e){uh.logLevel<=Oe.ERROR&&uh.error(`Auth (${Ki}): ${n}`,...e)}/**
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
 */function ar(n,...e){throw fm(n,...e)}function Sr(n,...e){return fm(n,...e)}function Iw(n,e,t){const r=Object.assign(Object.assign({},kC()),{[e]:t});return new au("auth","Firebase",r).create(e,{appName:n.name})}function js(n){return Iw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fm(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Tw.create(n,...e)}function Ee(n,e,...t){if(!n)throw fm(e,...t)}function Gr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Kc(e),new Error(e)}function Jr(n,e){n||Gr(e)}/**
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
 */function vp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function AC(){return nv()==="http:"||nv()==="https:"}function nv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function NC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AC()||rS()||"connection"in navigator)?navigator.onLine:!0}function PC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class lu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Jr(t>e,"Short delay should be less than long delay!"),this.isMobile=lm()||pw()}get(){return NC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pm(n,e){Jr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Sw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const DC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],OC=new lu(3e4,6e4);function ni(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ss(n,e,t,r,o={}){return Cw(n,o,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=va(Object.assign({key:n.config.apiKey},u)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const _=Object.assign({method:e,headers:p},a);return nS()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&ti(n.emulatorConfig.host)&&(_.credentials="include"),Sw.fetch()(await xw(n,n.config.apiHost,t,d),_)})}async function Cw(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},bC),e);try{const o=new MC(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Fc(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[p,_]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fc(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw Fc(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw Fc(n,"user-disabled",u);const w=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Iw(n,w,_);ar(n,w)}}catch(o){if(o instanceof ns)throw o;ar(n,"network-request-failed",{message:String(o)})}}async function Hh(n,e,t,r,o={}){const a=await ss(n,e,t,r,o);return"mfaPendingCredential"in a&&ar(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function xw(n,e,t,r){const o=`${e}${t}?${r}`,a=n,u=a.config.emulator?pm(n.config,o):`${n.config.apiScheme}://${o}`;return DC.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function LC(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Sr(this.auth,"network-request-failed")),OC.get())})}}function Fc(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=Sr(n,e,r);return o.customData._tokenResponse=t,o}function rv(n){return n!==void 0&&n.enterprise!==void 0}class VC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return LC(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function FC(n,e){return ss(n,"GET","/v2/recaptchaConfig",ni(n,e))}/**
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
 */async function jC(n,e){return ss(n,"POST","/v1/accounts:delete",e)}async function ch(n,e){return ss(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ll(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UC(n,e=!1){const t=An(n),r=await t.getIdToken(e),o=mm(r);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a?.sign_in_provider;return{claims:o,token:r,authTime:Ll(Yf(o.auth_time)),issuedAtTime:Ll(Yf(o.iat)),expirationTime:Ll(Yf(o.exp)),signInProvider:u||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Yf(n){return Number(n)*1e3}function mm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Kc("JWT malformed, contained fewer than 3 sections"),null;try{const o=oh(t);return o?JSON.parse(o):(Kc("Failed to decode base64 JWT payload"),null)}catch(o){return Kc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function sv(n){const e=mm(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kl(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ns&&zC(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function zC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class BC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ll(this.lastLoginAt),this.creationTime=Ll(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hh(n){var e;const t=n.auth,r=await n.getIdToken(),o=await Kl(n,ch(t,{idToken:r}));Ee(o?.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?kw(a.providerUserInfo):[],d=$C(n.providerData,u),p=n.isAnonymous,_=!(n.email&&a.passwordHash)&&!d?.length,w=p?_:!1,T={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new wp(a.createdAt,a.lastLoginAt),isAnonymous:w};Object.assign(n,T)}async function HC(n){const e=An(n);await hh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $C(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function kw(n){return n.map(e=>{var{providerId:t}=e,r=dm(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function WC(n,e){const t=await Cw(n,{},async()=>{const r=va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,u=await xw(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:r};return n.emulatorConfig&&ti(n.emulatorConfig.host)&&(p.credentials="include"),Sw.fetch()(u,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qC(n,e){return ss(n,"POST","/v2/accounts:revokeToken",ni(n,e))}/**
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
 */class Zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=sv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await WC(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,u=new Zo;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(Ee(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(Ee(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zo,this.toJSON())}_performRefresh(){return Gr("not implemented")}}/**
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
 */function Ns(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,a=dm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new wp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Kl(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return UC(this,e)}reload(){return HC(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await hh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(js(this.auth));const e=await this.getIdToken();return await Kl(this,jC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,a,u,d,p,_,w;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,b=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,j=(u=t.photoURL)!==null&&u!==void 0?u:void 0,M=(d=t.tenantId)!==null&&d!==void 0?d:void 0,z=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ae=(_=t.createdAt)!==null&&_!==void 0?_:void 0,W=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ne,emailVerified:re,isAnonymous:fe,providerData:de,stsTokenManager:D}=t;Ee(ne&&D,e,"internal-error");const C=Zo.fromJSON(this.name,D);Ee(typeof ne=="string",e,"internal-error"),Ns(T,e.name),Ns(I,e.name),Ee(typeof re=="boolean",e,"internal-error"),Ee(typeof fe=="boolean",e,"internal-error"),Ns(b,e.name),Ns(j,e.name),Ns(M,e.name),Ns(z,e.name),Ns(ae,e.name),Ns(W,e.name);const k=new rr({uid:ne,auth:e,email:I,emailVerified:re,displayName:T,isAnonymous:fe,photoURL:j,phoneNumber:b,tenantId:M,stsTokenManager:C,createdAt:ae,lastLoginAt:W});return de&&Array.isArray(de)&&(k.providerData=de.map(A=>Object.assign({},A))),z&&(k._redirectEventId=z),k}static async _fromIdTokenResponse(e,t,r=!1){const o=new Zo;o.updateFromServerResponse(t);const a=new rr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await hh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?kw(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!a?.length,d=new Zo;d.updateFromIdToken(r);const p=new rr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new wp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!a?.length};return Object.assign(p,_),p}}/**
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
 */const iv=new Map;function Kr(n){Jr(n instanceof Function,"Expected a class definition");let e=iv.get(n);return e?(Jr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,iv.set(n,e),e)}/**
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
 */class Rw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rw.type="NONE";const ov=Rw;/**
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
 */function Qc(n,e,t){return`firebase:${n}:${e}:${t}`}class ea{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=Qc(this.userKey,o.apiKey,a),this.fullPersistenceKey=Qc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ch(this.auth,{idToken:e}).catch(()=>{});return t?rr._fromGetAccountInfoResponse(this.auth,t,e):null}return rr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ea(Kr(ov),e,r);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let a=o[0]||Kr(ov);const u=Qc(r,e.config.apiKey,e.name);let d=null;for(const _ of t)try{const w=await _._get(u);if(w){let T;if(typeof w=="string"){const I=await ch(e,{idToken:w}).catch(()=>{});if(!I)break;T=await rr._fromGetAccountInfoResponse(e,I,w)}else T=rr._fromJSON(e,w);_!==a&&(d=T),a=_;break}}catch{}const p=o.filter(_=>_._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new ea(a,e,r):(a=p[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async _=>{if(_!==a)try{await _._remove(u)}catch{}})),new ea(a,e,r))}}/**
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
 */function av(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Aw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ow(e))return"Blackberry";if(Lw(e))return"Webos";if(Nw(e))return"Safari";if((e.includes("chrome/")||Pw(e))&&!e.includes("edge/"))return"Chrome";if(Dw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Aw(n=tn()){return/firefox\//i.test(n)}function Nw(n=tn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pw(n=tn()){return/crios\//i.test(n)}function bw(n=tn()){return/iemobile/i.test(n)}function Dw(n=tn()){return/android/i.test(n)}function Ow(n=tn()){return/blackberry/i.test(n)}function Lw(n=tn()){return/webos/i.test(n)}function gm(n=tn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function GC(n=tn()){var e;return gm(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KC(){return sS()&&document.documentMode===10}function Mw(n=tn()){return gm(n)||Dw(n)||Lw(n)||Ow(n)||/windows phone/i.test(n)||bw(n)}/**
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
 */function Vw(n,e=[]){let t;switch(n){case"Browser":t=av(tn());break;case"Worker":t=`${av(tn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ki}/${r}`}/**
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
 */class QC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const p=e(a);u(p)}catch(p){d(p)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function YC(n,e={}){return ss(n,"GET","/v2/passwordPolicy",ni(n,e))}/**
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
 */const XC=6;class JC{constructor(e){var t,r,o,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:XC,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,o,a,u,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class ZC{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lv(this),this.idTokenSubscription=new lv(this),this.beforeStateQueue=new QC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Kr(t)),this._initializationPromise=this.queue(async()=>{var r,o,a;if(!this._deleted&&(this.persistenceManager=await ea.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ch(this,{idToken:e}),r=await rr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Un(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o?._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&p?.user&&(o=p.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hh(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Un(this.app))return Promise.reject(js(this));const t=e?An(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(js(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Un(this.app)?Promise.reject(js(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YC(this),t=new JC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new au("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await qC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Kr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await ea.create(this,[Kr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,o);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&RC(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Qi(n){return An(n)}class lv{constructor(e){this.auth=e,this.observer=null,this.addObserver=mS(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $h={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ex(n){$h=n}function Fw(n){return $h.loadJS(n)}function tx(){return $h.recaptchaEnterpriseScript}function nx(){return $h.gapiScript}function rx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class sx{constructor(){this.enterprise=new ix}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ix{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ox="recaptcha-enterprise",jw="NO_RECAPTCHA";class ax{constructor(e){this.type=ox,this.auth=Qi(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{FC(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const _=new VC(p);return a.tenantId==null?a._agentRecaptchaConfig=_:a._tenantRecaptchaConfigs[a.tenantId]=_,u(_.siteKey)}}).catch(p=>{d(p)})})}function o(a,u,d){const p=window.grecaptcha;rv(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(_=>{u(_)}).catch(()=>{u(jw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sx().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&rv(window.grecaptcha))o(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=tx();p.length!==0&&(p+=d),Fw(p).then(()=>{o(d,a,u)}).catch(_=>{u(_)})}}).catch(d=>{u(d)})})}}async function uv(n,e,t,r=!1,o=!1){const a=new ax(n);let u;if(o)u=jw;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,_=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:_,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Ep(n,e,t,r,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await uv(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await uv(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
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
 */function lx(n,e){const t=Bh(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if($s(a,e??{}))return o;ar(o,"already-initialized")}return t.initialize({options:e})}function ux(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Kr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function cx(n,e,t){const r=Qi(n);Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,a=Uw(e),{host:u,port:d}=hx(e),p=d===null?"":`:${d}`,_={url:`${a}//${u}${p}/`},w=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ee($s(_,r.config.emulator)&&$s(w,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=_,r.emulatorConfig=w,r.settings.appVerificationDisabledForTesting=!0,ti(u)?(om(`${a}//${u}${p}`),am("Auth",!0)):dx()}function Uw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function hx(n){const e=Uw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:cv(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:cv(u)}}}function cv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function dx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class _m{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Gr("not implemented")}_getIdTokenResponse(e){return Gr("not implemented")}_linkToIdToken(e,t){return Gr("not implemented")}_getReauthenticationResolver(e){return Gr("not implemented")}}async function fx(n,e){return ss(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function px(n,e){return Hh(n,"POST","/v1/accounts:signInWithPassword",ni(n,e))}async function mx(n,e){return ss(n,"POST","/v1/accounts:sendOobCode",ni(n,e))}async function gx(n,e){return mx(n,e)}/**
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
 */async function _x(n,e){return Hh(n,"POST","/v1/accounts:signInWithEmailLink",ni(n,e))}async function yx(n,e){return Hh(n,"POST","/v1/accounts:signInWithEmailLink",ni(n,e))}/**
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
 */class Ql extends _m{constructor(e,t,r,o=null){super("password",r),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ql(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ql(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ep(e,t,"signInWithPassword",px);case"emailLink":return _x(e,{email:this._email,oobCode:this._password});default:ar(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ep(e,r,"signUpPassword",fx);case"emailLink":return yx(e,{idToken:t,email:this._email,oobCode:this._password});default:ar(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ta(n,e){return Hh(n,"POST","/v1/accounts:signInWithIdp",ni(n,e))}/**
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
 */const vx="http://localhost";class Bi extends _m{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ar("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,a=dm(t,["providerId","signInMethod"]);if(!r||!o)return null;const u=new Bi(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return ta(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ta(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ta(e,t)}buildRequest(){const e={requestUri:vx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=va(t)}return e}}/**
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
 */function wx(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ex(n){const e=xl(kl(n)).link,t=e?xl(kl(e)).deep_link_id:null,r=xl(kl(n)).deep_link_id;return(r?xl(kl(r)).link:null)||r||t||e||n}class ym{constructor(e){var t,r,o,a,u,d;const p=xl(kl(e)),_=(t=p.apiKey)!==null&&t!==void 0?t:null,w=(r=p.oobCode)!==null&&r!==void 0?r:null,T=wx((o=p.mode)!==null&&o!==void 0?o:null);Ee(_&&w&&T,"argument-error"),this.apiKey=_,this.operation=T,this.code=w,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=p.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=Ex(e);try{return new ym(t)}catch{return null}}}/**
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
 */class wa{constructor(){this.providerId=wa.PROVIDER_ID}static credential(e,t){return Ql._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ym.parseLink(t);return Ee(r,"argument-error"),Ql._fromEmailAndCode(e,r.code,r.tenantId)}}wa.PROVIDER_ID="password";wa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class uu extends zw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ps extends uu{constructor(){super("facebook.com")}static credential(e){return Bi._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ps.credential(e.oauthAccessToken)}catch{return null}}}Ps.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ps.PROVIDER_ID="facebook.com";/**
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
 */class bs extends uu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Bi._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return bs.credentialFromTaggedObject(e)}static credentialFromError(e){return bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return bs.credential(t,r)}catch{return null}}}bs.GOOGLE_SIGN_IN_METHOD="google.com";bs.PROVIDER_ID="google.com";/**
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
 */class Ds extends uu{constructor(){super("github.com")}static credential(e){return Bi._fromParams({providerId:Ds.PROVIDER_ID,signInMethod:Ds.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ds.credentialFromTaggedObject(e)}static credentialFromError(e){return Ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ds.credential(e.oauthAccessToken)}catch{return null}}}Ds.GITHUB_SIGN_IN_METHOD="github.com";Ds.PROVIDER_ID="github.com";/**
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
 */class Os extends uu{constructor(){super("twitter.com")}static credential(e,t){return Bi._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Os.credential(t,r)}catch{return null}}}Os.TWITTER_SIGN_IN_METHOD="twitter.com";Os.PROVIDER_ID="twitter.com";/**
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
 */class la{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await rr._fromIdTokenResponse(e,r,o),u=hv(r);return new la({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=hv(r);return new la({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function hv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class dh extends ns{constructor(e,t,r,o){var a;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,dh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new dh(e,t,r,o)}}function Bw(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?dh._fromErrorAndOperation(n,a,e,r):a})}async function Tx(n,e,t=!1){const r=await Kl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return la._forOperation(n,"link",r)}/**
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
 */async function Ix(n,e,t=!1){const{auth:r}=n;if(Un(r.app))return Promise.reject(js(r));const o="reauthenticate";try{const a=await Kl(n,Bw(r,o,e,n),t);Ee(a.idToken,r,"internal-error");const u=mm(a.idToken);Ee(u,r,"internal-error");const{sub:d}=u;return Ee(n.uid===d,r,"user-mismatch"),la._forOperation(n,o,a)}catch(a){throw a?.code==="auth/user-not-found"&&ar(r,"user-mismatch"),a}}/**
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
 */async function Hw(n,e,t=!1){if(Un(n.app))return Promise.reject(js(n));const r="signIn",o=await Bw(n,r,e),a=await la._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}async function Sx(n,e){return Hw(Qi(n),e)}/**
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
 */async function Cx(n){const e=Qi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xx(n,e,t){const r=Qi(n);await Ep(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",gx)}function kx(n,e,t){return Un(n.app)?Promise.reject(js(n)):Sx(An(n),wa.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cx(n),r})}function Rx(n,e,t,r){return An(n).onIdTokenChanged(e,t,r)}function Ax(n,e,t){return An(n).beforeAuthStateChanged(e,t)}const fh="__sak";/**
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
 */class $w{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fh,"1"),this.storage.removeItem(fh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Nx=1e3,Px=10;class Ww extends $w{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);KC()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Px):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Nx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ww.type="LOCAL";const bx=Ww;/**
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
 */class qw extends $w{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qw.type="SESSION";const Gw=qw;/**
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
 */function Dx(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Wh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new Wh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,u=this.handlersMap[o];if(!u?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(u).map(async _=>_(t.origin,a)),p=await Dx(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wh.receivers=[];/**
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
 */function vm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ox{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((d,p)=>{const _=vm("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===_)switch(I.data.status){case"ack":clearTimeout(w),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(I.data.response);break;default:clearTimeout(w),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Cr(){return window}function Lx(n){Cr().location.href=n}/**
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
 */function Kw(){return typeof Cr().WorkerGlobalScope<"u"&&typeof Cr().importScripts=="function"}async function Mx(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vx(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Fx(){return Kw()?self:null}/**
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
 */const Qw="firebaseLocalStorageDb",jx=1,ph="firebaseLocalStorage",Yw="fbase_key";class cu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qh(n,e){return n.transaction([ph],e?"readwrite":"readonly").objectStore(ph)}function Ux(){const n=indexedDB.deleteDatabase(Qw);return new cu(n).toPromise()}function Tp(){const n=indexedDB.open(Qw,jx);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ph,{keyPath:Yw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ph)?e(r):(r.close(),await Ux(),e(await Tp()))})})}async function dv(n,e,t){const r=qh(n,!0).put({[Yw]:e,value:t});return new cu(r).toPromise()}async function zx(n,e){const t=qh(n,!1).get(e),r=await new cu(t).toPromise();return r===void 0?null:r.value}function fv(n,e){const t=qh(n,!0).delete(e);return new cu(t).toPromise()}const Bx=800,Hx=3;class Xw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Hx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wh._getInstance(Fx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Mx(),!this.activeServiceWorker)return;this.sender=new Ox(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tp();return await dv(e,fh,"1"),await fv(e,fh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>dv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>zx(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=qh(o,!1).getAll();return new cu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xw.type="LOCAL";const $x=Xw;new lu(3e4,6e4);/**
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
 */function Wx(n,e){return e?Kr(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class wm extends _m{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ta(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ta(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ta(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qx(n){return Hw(n.auth,new wm(n),n.bypassAuthState)}function Gx(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),Ix(t,new wm(n),n.bypassAuthState)}async function Kx(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),Tx(t,new wm(n),n.bypassAuthState)}/**
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
 */class Jw{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qx;case"linkViaPopup":case"linkViaRedirect":return Kx;case"reauthViaPopup":case"reauthViaRedirect":return Gx;default:ar(this.auth,"internal-error")}}resolve(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qx=new lu(2e3,1e4);class Yo extends Jw{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,Yo.currentPopupAction&&Yo.currentPopupAction.cancel(),Yo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Jr(this.filter.length===1,"Popup operations only handle one event");const e=vm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qx.get())};e()}}Yo.currentPopupAction=null;/**
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
 */const Yx="pendingRedirect",Yc=new Map;class Xx extends Jw{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Yc.get(this.auth._key());if(!e){try{const r=await Jx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Yc.set(this.auth._key(),e)}return this.bypassAuthState||Yc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jx(n,e){const t=tk(e),r=ek(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function Zx(n,e){Yc.set(n._key(),e)}function ek(n){return Kr(n._redirectPersistence)}function tk(n){return Qc(Yx,n.config.apiKey,n.name)}async function nk(n,e,t=!1){if(Un(n.app))return Promise.reject(js(n));const r=Qi(n),o=Wx(r,e),u=await new Xx(r,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const rk=10*60*1e3;class sk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ik(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Zw(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Sr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rk&&this.cachedEventUids.clear(),this.cachedEventUids.has(pv(e))}saveEventToCache(e){this.cachedEventUids.add(pv(e)),this.lastProcessedEventTime=Date.now()}}function pv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Zw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function ik(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zw(n);default:return!1}}/**
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
 */async function ok(n,e={}){return ss(n,"GET","/v1/projects",e)}/**
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
 */const ak=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lk=/^https?/;async function uk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ok(n);for(const t of e)try{if(ck(t))return}catch{}ar(n,"unauthorized-domain")}function ck(n){const e=vp(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!lk.test(t))return!1;if(ak.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const hk=new lu(3e4,6e4);function mv(){const n=Cr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function dk(n){return new Promise((e,t)=>{var r,o,a;function u(){mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mv(),t(Sr(n,"network-request-failed"))},timeout:hk.get()})}if(!((o=(r=Cr().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=Cr().gapi)===null||a===void 0)&&a.load)u();else{const d=rx("iframefcb");return Cr()[d]=()=>{gapi.load?u():t(Sr(n,"network-request-failed"))},Fw(`${nx()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Xc=null,e})}let Xc=null;function fk(n){return Xc=Xc||dk(n),Xc}/**
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
 */const pk=new lu(5e3,15e3),mk="__/auth/iframe",gk="emulator/auth/iframe",_k={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vk(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?pm(e,gk):`https://${n.config.authDomain}/${mk}`,r={apiKey:e.apiKey,appName:n.name,v:Ki},o=yk.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${va(r).slice(1)}`}async function wk(n){const e=await fk(n),t=Cr().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:vk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_k,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=Sr(n,"network-request-failed"),d=Cr().setTimeout(()=>{a(u)},pk.get());function p(){Cr().clearTimeout(d),o(r)}r.ping(p).then(p,()=>{a(u)})}))}/**
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
 */const Ek={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tk=500,Ik=600,Sk="_blank",Ck="http://localhost";class gv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xk(n,e,t,r=Tk,o=Ik){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p=Object.assign(Object.assign({},Ek),{width:r.toString(),height:o.toString(),top:a,left:u}),_=tn().toLowerCase();t&&(d=Pw(_)?Sk:t),Aw(_)&&(e=e||Ck,p.scrollbars="yes");const w=Object.entries(p).reduce((I,[b,j])=>`${I}${b}=${j},`,"");if(GC(_)&&d!=="_self")return kk(e||"",d),new gv(null);const T=window.open(e||"",d,w);Ee(T,n,"popup-blocked");try{T.focus()}catch{}return new gv(T)}function kk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Rk="__/auth/handler",Ak="emulator/auth/handler",Nk=encodeURIComponent("fac");async function _v(n,e,t,r,o,a){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ki,eventId:o};if(e instanceof zw){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",fp(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))u[w]=T}if(e instanceof uu){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(u.scopes=w.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const w of Object.keys(d))d[w]===void 0&&delete d[w];const p=await n._getAppCheckToken(),_=p?`#${Nk}=${encodeURIComponent(p)}`:"";return`${Pk(n)}?${va(d).slice(1)}${_}`}function Pk({config:n}){return n.emulator?pm(n,Ak):`https://${n.authDomain}/${Rk}`}/**
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
 */const Xf="webStorageSupport";class bk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gw,this._completeRedirectFn=nk,this._overrideRedirectResult=Zx}async _openPopup(e,t,r,o){var a;Jr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await _v(e,t,r,vp(),o);return xk(e,u,vm())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await _v(e,t,r,vp(),o);return Lx(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Jr(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await wk(e),r=new sk(e);return t.register("authEvent",o=>(Ee(o?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xf,{type:Xf},o=>{var a;const u=(a=o?.[0])===null||a===void 0?void 0:a[Xf];u!==void 0&&t(!!u),ar(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Mw()||Nw()||gm()}}const Dk=bk;var yv="@firebase/auth",vv="1.10.8";/**
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
 */class Ok{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Mk(n){zi(new Ws("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ee(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vw(n)},_=new ZC(r,o,a,p);return ux(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),zi(new Ws("auth-internal",e=>{const t=Qi(e.getProvider("auth").getImmediate());return(r=>new Ok(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ir(yv,vv,Lk(n)),Ir(yv,vv,"esm2017")}/**
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
 */const Vk=5*60,Fk=dw("authIdTokenMaxAge")||Vk;let wv=null;const jk=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Fk)return;const o=t?.token;wv!==o&&(wv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Uk(n=hm()){const e=Bh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=lx(n,{popupRedirectResolver:Dk,persistence:[$x,bx,Gw]}),r=dw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=jk(a.toString());Ax(t,u,()=>u(t.currentUser)),Rx(t,d=>u(d))}}const o=uw("auth");return o&&cx(t,`http://${o}`),t}function zk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ex({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=Sr("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",zk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Mk("Browser");var Bk="firebase",Hk="11.10.0";/**
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
 */Ir(Bk,Hk,"app");var Ev={};const Tv="@firebase/database",Iv="1.0.20";/**
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
 */let eE="";function $k(n){eE=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),jt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ql(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return rs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Wk(e)}}catch{}return new qk},Oi=tE("localStorage"),Gk=tE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new zh("@firebase/database"),Kk=function(){let n=1;return function(){return n++}}(),nE=function(n){const e=yS(n),t=new pS;t.update(e);const r=t.digest();return im.encodeByteArray(r)},hu=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=hu.apply(null,r):typeof r=="object"?e+=jt(r):e+=r,e+=" "}return e};let Ml=null,Sv=!0;const Qk=function(n,e){J(!0,"Can't turn on custom loggers persistently."),na.logLevel=Oe.VERBOSE,Ml=na.log.bind(na)},Zt=function(...n){if(Sv===!0&&(Sv=!1,Ml===null&&Gk.get("logging_enabled")===!0&&Qk()),Ml){const e=hu.apply(null,n);Ml(e)}},du=function(n){return function(...e){Zt(n,...e)}},Ip=function(...n){const e="FIREBASE INTERNAL ERROR: "+hu(...n);na.error(e)},Zr=function(...n){const e=`FIREBASE FATAL ERROR: ${hu(...n)}`;throw na.error(e),new Error(e)},vn=function(...n){const e="FIREBASE WARNING: "+hu(...n);na.warn(e)},Yk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&vn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rE=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Xk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ua="[MIN_NAME]",Hi="[MAX_NAME]",Ea=function(n,e){if(n===e)return 0;if(n===ua||e===Hi)return-1;if(e===ua||n===Hi)return 1;{const t=Cv(n),r=Cv(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},Jk=function(n,e){return n===e?0:n<e?-1:1},Tl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+jt(e))},Em=function(n){if(typeof n!="object"||n===null)return jt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=jt(e[r]),t+=":",t+=Em(n[e[r]]);return t+="}",t},sE=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let o=0;o<t;o+=e)o+e>t?r.push(n.substring(o,t)):r.push(n.substring(o,o+e));return r};function wn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const iE=function(n){J(!rE(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let o,a,u,d,p;n===0?(a=0,u=0,o=1/n===-1/0?1:0):(o=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const _=[];for(p=t;p;p-=1)_.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)_.push(a%2?1:0),a=Math.floor(a/2);_.push(o?1:0),_.reverse();const w=_.join("");let T="";for(p=0;p<64;p+=8){let I=parseInt(w.substr(p,8),2).toString(16);I.length===1&&(I="0"+I),T=T+I}return T.toLowerCase()},Zk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tR(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const nR=new RegExp("^-?(0*)\\d{1,10}$"),rR=-2147483648,sR=2147483647,Cv=function(n){if(nR.test(n)){const e=Number(n);if(e>=rR&&e<=sR)return e}return null},Ta=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw vn("Exception was thrown by user callback.",t),e},Math.floor(0))}},iR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vl=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class oR{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Un(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){vn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Zt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',vn(e)}}class Jc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Jc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="5",oE="v",aE="s",lE="r",uE="f",cE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hE="ls",dE="p",Sp="ac",fE="websocket",pE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t,r,o,a=!1,u="",d=!1,p=!1,_=null){this.secure=t,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=_,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Oi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Oi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function lR(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function gE(n,e,t){J(typeof e=="string","typeof type must == string"),J(typeof t=="object","typeof params must == object");let r;if(e===fE)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===pE)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lR(n)&&(t.ns=n.namespace);const o=[];return wn(t,(a,u)=>{o.push(a+"="+u)}),r+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this.counters_={}}incrementCounter(e,t=1){rs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return G1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf={},Zf={};function Im(n){const e=n.toString();return Jf[e]||(Jf[e]=new uR),Jf[e]}function cR(n,e){const t=n.toString();return Zf[t]||(Zf[t]=e()),Zf[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&Ta(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="start",dR="close",fR="pLPCommand",pR="pRTLPCB",_E="id",yE="pw",vE="ser",mR="cb",gR="seg",_R="ts",yR="d",vR="dframe",wE=1870,EE=30,wR=wE-EE,ER=25e3,TR=3e4;class Xo{constructor(e,t,r,o,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=o,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=du(e),this.stats_=Im(t),this.urlFn=p=>(this.appCheckToken&&(p[Sp]=this.appCheckToken),gE(t,pE,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new hR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TR)),Xk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sm((...a)=>{const[u,d,p,_,w]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===xv)this.id=d,this.password=p;else if(u===dR)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[xv]="t",r[vE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[mR]=this.scriptTagHolder.uniqueCallbackIdentifier),r[oE]=Tm,this.transportSessionId&&(r[aE]=this.transportSessionId),this.lastSessionId&&(r[hE]=this.lastSessionId),this.applicationId&&(r[dE]=this.applicationId),this.appCheckToken&&(r[Sp]=this.appCheckToken),typeof location<"u"&&location.hostname&&cE.test(location.hostname)&&(r[lE]=uE);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xo.forceAllow_=!0}static forceDisallow(){Xo.forceDisallow_=!0}static isAvailable(){return Xo.forceAllow_?!0:!Xo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Zk()&&!eR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=aw(t),o=sE(r,wR);for(let a=0;a<o.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[vR]="t",r[_E]=e,r[yE]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=jt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Sm{constructor(e,t,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Kk(),window[fR+this.uniqueCallbackIdentifier]=e,window[pR+this.uniqueCallbackIdentifier]=t,this.myIFrame=Sm.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){Zt("frame writing exception"),d.stack&&Zt(d.stack),Zt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Zt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_E]=this.myID,e[yE]=this.myPW,e[vE]=this.currentSerial;let t=this.urlFn(e),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+EE+r.length<=wE;){const u=this.pendingSegs.shift();r=r+"&"+gR+o+"="+u.seg+"&"+_R+o+"="+u.ts+"&"+yR+o+"="+u.d,o++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(r,Math.floor(ER)),a=()=>{clearTimeout(o),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Zt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=16384,SR=45e3;let mh=null;typeof MozWebSocket<"u"?mh=MozWebSocket:typeof WebSocket<"u"&&(mh=WebSocket);class nr{constructor(e,t,r,o,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=du(this.connId),this.stats_=Im(t),this.connURL=nr.connectionURL_(t,u,d,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,o,a){const u={};return u[oE]=Tm,typeof location<"u"&&location.hostname&&cE.test(location.hostname)&&(u[lE]=uE),t&&(u[aE]=t),r&&(u[hE]=r),o&&(u[Sp]=o),a&&(u[dE]=a),gE(e,fE,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Oi.set("previous_websocket_failure",!0);try{let r;iS(),this.mySock=new mh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){nr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&mh!==null&&!nr.forceDisallow_}static previouslyFailed(){return Oi.isInMemoryStorage||Oi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Oi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=ql(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=sE(t,IR);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(SR))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nr.responsesRequiredToBeHealthy=2;nr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{static get ALL_TRANSPORTS(){return[Xo,nr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=nr&&nr.isAvailable();let r=t&&!nr.previouslyFailed();if(e.webSocketOnly&&(t||vn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[nr];else{const o=this.transports_=[];for(const a of Yl.ALL_TRANSPORTS)a&&a.isAvailable()&&o.push(a);Yl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=6e4,xR=5e3,kR=10*1024,RR=100*1024,ep="t",kv="d",AR="s",Rv="r",NR="e",Av="o",Nv="a",Pv="n",bv="p",PR="h";class bR{constructor(e,t,r,o,a,u,d,p,_,w){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=p,this.onKill_=_,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=du("c:"+this.id+":"),this.transportManager_=new Yl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Vl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ep in e){const t=e[ep];t===Nv?this.upgradeIfSecondaryHealthy_():t===Rv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Av&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Tl("t",e),r=Tl("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Tl("t",e),r=Tl("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Tl(ep,e);if(kv in e){const r=e[kv];if(t===PR){const o=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===Pv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===AR?this.onConnectionShutdown_(r):t===Rv?this.onReset_(r):t===NR?Ip("Server Error: "+r):t===Av?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ip("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Tm!==r&&vn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Vl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(CR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Oi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{put(e,t,r,o){}merge(e,t,r,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const o=this.getInitialEvent(e);o&&t.apply(r,o)}off(e,t,r){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let a=0;a<o.length;a++)if(o[a].callback===t&&(!r||r===o[a].context)){o.splice(a,1);return}}validateEventType_(e){J(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends IE{static getInstance(){return new gh}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!lm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=32,Ov=768;class Xe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function qe(){return new Xe("")}function Pe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function qs(n){return n.pieces_.length-n.pieceNum_}function nt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Xe(n.pieces_,e)}function SE(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function DR(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function CE(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function xE(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Xe(e,0)}function Rt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Xe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&t.push(r[o])}return new Xe(t,0)}function Le(n){return n.pieceNum_>=n.pieces_.length}function yn(n,e){const t=Pe(n),r=Pe(e);if(t===null)return e;if(t===r)return yn(nt(n),nt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Cm(n,e){if(qs(n)!==qs(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function sr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(qs(n)>qs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class OR{constructor(e,t){this.errorPrefix_=t,this.parts_=CE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Uh(this.parts_[r]);kE(this)}}function LR(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Uh(e),kE(n)}function MR(n){const e=n.parts_.pop();n.byteLength_-=Uh(e),n.parts_.length>0&&(n.byteLength_-=1)}function kE(n){if(n.byteLength_>Ov)throw new Error(n.errorPrefix_+"has a key path longer than "+Ov+" bytes ("+n.byteLength_+").");if(n.parts_.length>Dv)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dv+") or object contains a cycle "+Di(n))}function Di(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm extends IE{static getInstance(){return new xm}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=1e3,VR=60*5*1e3,Lv=30*1e3,FR=1.3,jR=3e4,UR="server_kill",Mv=3;class Yr extends TE{constructor(e,t,r,o,a,u,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Yr.nextPersistentConnectionId_++,this.log_=du("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Il,this.maxReconnectDelay_=VR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const o=++this.requestNumber_,a={r:o,a:e,b:t};this.log_(jt(a)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[o]=r)}get(e){this.initConnection_();const t=new jh,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,o){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:o,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+r+" for "+o);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const p=d.d,_=d.s;Yr.warnOnListenWarnings_(p,t),(this.listens.get(r)&&this.listens.get(r).get(o))===e&&(this.log_("listen response",d),_!=="ok"&&this.removeListen_(r,o),e.onComplete&&e.onComplete(_,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&rs(e,"w")){const r=aa(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();vn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Lv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=dS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,o=>{const a=o.s,u=o.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,e._queryObject,t)}sendUnlisten_(e,t,r,o){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";o&&(a.q=r,a.t=o),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,o){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(e,t,r,o){this.putInternal("p",e,t,r,o)}merge(e,t,r,o){this.putInternal("m",e,t,r,o)}putInternal(e,t,r,o,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:o}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+jt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ip("Unrecognized action received from server: "+jt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Il,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Il,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jR&&(this.reconnectDelay_=Il),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*FR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Yr.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const p=function(){d?d.close():(u=!0,r())},_=function(T){J(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:_};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,I]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);u?Zt("getToken() completed but was canceled"):(Zt("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=I&&I.token,d=new bR(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,b=>{vn(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(UR)},a))}catch(T){this.log_("Failed to get token: "+T),u||(this.repoInfo_.nodeAdmin&&vn(T),p())}}}interrupt(e){Zt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Zt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fp(this.interruptReasons_)&&(this.reconnectDelay_=Il,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>Em(a)).join("$"):r="default";const o=this.removeListen_(e,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const r=new Xe(e).toString();let o;if(this.listens.has(r)){const a=this.listens.get(r);o=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(e,t){Zt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mv&&(this.reconnectDelay_=Lv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Zt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+eE.replace(/\./g,"-")]=1,lm()?e["framework.cordova"]=1:pw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gh.getInstance().currentlyOnline();return fp(this.interruptReasons_)&&e}}Yr.nextPersistentConnectionId_=0;Yr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new De(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new De(ua,e),o=new De(ua,t);return this.compare(r,o)!==0}minPost(){return De.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jc;class RE extends Gh{static get __EMPTY_NODE(){return jc}static set __EMPTY_NODE(e){jc=e}compare(e,t){return Ea(e.name,t.name)}isDefinedOn(e){throw ya("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return De.MIN}maxPost(){return new De(Hi,jc)}makePost(e,t){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new De(e,jc)}toString(){return".key"}}const ra=new RE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc=class{constructor(e,t,r,o,a=null){this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,o&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Rn=class Rl{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??Rl.RED,this.left=o??Tr.EMPTY_NODE,this.right=a??Tr.EMPTY_NODE}copy(e,t,r,o,a){return new Rl(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return a<0?o=o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Tr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,o;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Tr.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Rl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Rl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Rn.RED=!0;Rn.BLACK=!1;class zR{copy(e,t,r,o,a){return this}insert(e,t,r){return new Rn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Tr=class Zc{constructor(e,t=Zc.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Zc(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Rn.BLACK,null,null))}remove(e){return new Zc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Rn.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,o=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Uc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Uc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Uc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Uc(this.root_,null,this.comparator_,!0,e)}};Tr.EMPTY_NODE=new zR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(n,e){return Ea(n.name,e.name)}function km(n,e){return Ea(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cp;function HR(n){Cp=n}const AE=function(n){return typeof n=="number"?"number:"+iE(n):"string:"+n},NE=function(n){if(n.isLeafNode()){const e=n.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rs(e,".sv"),"Priority must be a string or number.")}else J(n===Cp||n.isEmpty(),"priority of unexpected type.");J(n===Cp||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vv;class Vt{static set __childrenNodeConstructor(e){Vv=e}static get __childrenNodeConstructor(){return Vv}constructor(e,t=Vt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),NE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Vt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Vt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Le(e)?this:Pe(e)===".priority"?this.priorityNode_:Vt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Vt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Pe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(J(r!==".priority"||qs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Vt.__childrenNodeConstructor.EMPTY_NODE.updateChild(nt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+AE(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=iE(this.value_):e+=this.value_,this.lazyHash_=nE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Vt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Vt.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,o=Vt.VALUE_TYPE_ORDER.indexOf(t),a=Vt.VALUE_TYPE_ORDER.indexOf(r);return J(o>=0,"Unknown leaf type: "+t),J(a>=0,"Unknown leaf type: "+r),o===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Vt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PE,bE;function $R(n){PE=n}function WR(n){bE=n}class qR extends Gh{compare(e,t){const r=e.node.getPriority(),o=t.node.getPriority(),a=r.compareTo(o);return a===0?Ea(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return De.MIN}maxPost(){return new De(Hi,new Vt("[PRIORITY-POST]",bE))}makePost(e,t){const r=PE(e);return new De(t,new Vt("[PRIORITY-POST]",r))}toString(){return".priority"}}const ft=new qR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=Math.log(2);class KR{constructor(e){const t=a=>parseInt(Math.log(a)/GR,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=r(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _h=function(n,e,t,r){n.sort(e);const o=function(p,_){const w=_-p;let T,I;if(w===0)return null;if(w===1)return T=n[p],I=t?t(T):T,new Rn(I,T.node,Rn.BLACK,null,null);{const b=parseInt(w/2,10)+p,j=o(p,b),M=o(b+1,_);return T=n[b],I=t?t(T):T,new Rn(I,T.node,Rn.BLACK,j,M)}},a=function(p){let _=null,w=null,T=n.length;const I=function(j,M){const z=T-j,ae=T;T-=j;const W=o(z+1,ae),ne=n[z],re=t?t(ne):ne;b(new Rn(re,ne.node,M,null,W))},b=function(j){_?(_.left=j,_=j):(w=j,_=j)};for(let j=0;j<p.count;++j){const M=p.nextBitIsOne(),z=Math.pow(2,p.count-(j+1));M?I(z,Rn.BLACK):(I(z,Rn.BLACK),I(z,Rn.RED))}return w},u=new KR(n.length),d=a(u);return new Tr(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tp;const Wo={};class Qr{static get Default(){return J(Wo&&ft,"ChildrenNode.ts has not been loaded"),tp=tp||new Qr({".priority":Wo},{".priority":ft}),tp}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=aa(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Tr?t:null}hasIndex(e){return rs(this.indexSet_,e.toString())}addIndex(e,t){J(e!==ra,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const a=t.getIterator(De.Wrap);let u=a.getNext();for(;u;)o=o||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;o?d=_h(r,e.getCompare()):d=Wo;const p=e.toString(),_=Object.assign({},this.indexSet_);_[p]=e;const w=Object.assign({},this.indexes_);return w[p]=d,new Qr(w,_)}addToIndexes(e,t){const r=ah(this.indexes_,(o,a)=>{const u=aa(this.indexSet_,a);if(J(u,"Missing index implementation for "+a),o===Wo)if(u.isDefinedOn(e.node)){const d=[],p=t.getIterator(De.Wrap);let _=p.getNext();for(;_;)_.name!==e.name&&d.push(_),_=p.getNext();return d.push(e),_h(d,u.getCompare())}else return Wo;else{const d=t.get(e.name);let p=o;return d&&(p=p.remove(new De(e.name,d))),p.insert(e,e.node)}});return new Qr(r,this.indexSet_)}removeFromIndexes(e,t){const r=ah(this.indexes_,o=>{if(o===Wo)return o;{const a=t.get(e.name);return a?o.remove(new De(e.name,a)):o}});return new Qr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl;class Te{static get EMPTY_NODE(){return Sl||(Sl=new Te(new Tr(km),null,Qr.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&NE(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Sl}updatePriority(e){return this.children_.isEmpty()?this:new Te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Sl:t}}getChild(e){const t=Pe(e);return t===null?this:this.getImmediateChild(t).getChild(nt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(J(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new De(e,t);let o,a;t.isEmpty()?(o=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=o.isEmpty()?Sl:this.priorityNode_;return new Te(o,u,a)}}updateChild(e,t){const r=Pe(e);if(r===null)return t;{J(Pe(e)!==".priority"||qs(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(nt(e),t);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,o=0,a=!0;if(this.forEachChild(ft,(u,d)=>{t[u]=d.val(e),r++,a&&Te.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):a=!1}),!e&&a&&o<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+AE(this.getPriority().val())+":"),this.forEachChild(ft,(t,r)=>{const o=r.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":nE(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const o=this.resolveIndex_(r);if(o){const a=o.getPredecessorKey(new De(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new De(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new De(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,De.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)<0;)o.getNext(),a=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,De.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)>0;)o.getNext(),a=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fu?-1:0}withIndex(e){if(e===ra||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Te(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ra||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ft),o=t.getIterator(ft);let a=r.getNext(),u=o.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=o.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===ra?null:this.indexMap_.get(e.toString())}}Te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QR extends Te{constructor(){super(new Tr(km),Te.EMPTY_NODE,Qr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Te.EMPTY_NODE}isEmpty(){return!1}}const fu=new QR;Object.defineProperties(De,{MIN:{value:new De(ua,Te.EMPTY_NODE)},MAX:{value:new De(Hi,fu)}});RE.__EMPTY_NODE=Te.EMPTY_NODE;Vt.__childrenNodeConstructor=Te;HR(fu);WR(fu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=!0;function Wt(n,e=null){if(n===null)return Te.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Vt(t,Wt(e))}if(!(n instanceof Array)&&YR){const t=[];let r=!1;if(wn(n,(u,d)=>{if(u.substring(0,1)!=="."){const p=Wt(d);p.isEmpty()||(r=r||!p.getPriority().isEmpty(),t.push(new De(u,p)))}}),t.length===0)return Te.EMPTY_NODE;const a=_h(t,BR,u=>u.name,km);if(r){const u=_h(t,ft.getCompare());return new Te(a,Wt(e),new Qr({".priority":u},{".priority":ft}))}else return new Te(a,Wt(e),Qr.Default)}else{let t=Te.EMPTY_NODE;return wn(n,(r,o)=>{if(rs(n,r)&&r.substring(0,1)!=="."){const a=Wt(o);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Wt(e))}}$R(Wt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR extends Gh{constructor(e){super(),this.indexPath_=e,J(!Le(e)&&Pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),o=this.extractChild(t.node),a=r.compareTo(o);return a===0?Ea(e.name,t.name):a}makePost(e,t){const r=Wt(e),o=Te.EMPTY_NODE.updateChild(this.indexPath_,r);return new De(t,o)}maxPost(){const e=Te.EMPTY_NODE.updateChild(this.indexPath_,fu);return new De(Hi,e)}toString(){return CE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR extends Gh{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Ea(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return De.MIN}maxPost(){return De.MAX}makePost(e,t){const r=Wt(e);return new De(t,r)}toString(){return".value"}}const ZR=new JR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n){return{type:"value",snapshotNode:n}}function ca(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Xl(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Jl(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function eA(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.index_=e}updateChild(e,t,r,o,a,u){J(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(o).equals(r.getChild(o))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(Xl(t,d)):J(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(ca(t,r)):u.trackChildChange(Jl(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ft,(o,a)=>{t.hasChild(o)||r.trackChildChange(Xl(o,a))}),t.isLeafNode()||t.forEachChild(ft,(o,a)=>{if(e.hasChild(o)){const u=e.getImmediateChild(o);u.equals(a)||r.trackChildChange(Jl(o,a,u))}else r.trackChildChange(ca(o,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Te.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.indexedFilter_=new Rm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zl.getStartPost_(e),this.endPost_=Zl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,o,a,u){return this.matches(new De(t,r))||(r=Te.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,o,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Te.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(Te.EMPTY_NODE);const a=this;return t.forEachChild(ft,(u,d)=>{a.matches(new De(u,d))||(o=o.updateImmediateChild(u,Te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Zl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,o,a,u){return this.rangedFilter_.matches(new De(t,r))||(r=Te.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,o,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let o;if(t.isLeafNode()||t.isEmpty())o=Te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=Te.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))o=o.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(Te.EMPTY_NODE);let a;this.reverse_?a=o.getReverseIterator(this.index_):a=o.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:o=o.updateImmediateChild(d.name,Te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,o,a){let u;if(this.reverse_){const T=this.index_.getCompare();u=(I,b)=>T(b,I)}else u=this.index_.getCompare();const d=e;J(d.numChildren()===this.limit_,"");const p=new De(t,r),_=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),w=this.rangedFilter_.matches(p);if(d.hasChild(t)){const T=d.getImmediateChild(t);let I=o.getChildAfterChild(this.index_,_,this.reverse_);for(;I!=null&&(I.name===t||d.hasChild(I.name));)I=o.getChildAfterChild(this.index_,I,this.reverse_);const b=I==null?1:u(I,p);if(w&&!r.isEmpty()&&b>=0)return a?.trackChildChange(Jl(t,r,T)),d.updateImmediateChild(t,r);{a?.trackChildChange(Xl(t,T));const M=d.updateImmediateChild(t,Te.EMPTY_NODE);return I!=null&&this.rangedFilter_.matches(I)?(a?.trackChildChange(ca(I.name,I.node)),M.updateImmediateChild(I.name,I.node)):M}}else return r.isEmpty()?e:w&&u(_,p)>=0?(a!=null&&(a.trackChildChange(Xl(_.name,_.node)),a.trackChildChange(ca(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(_.name,Te.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ft}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ua}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ft}copy(){const e=new Am;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function nA(n){return n.loadsAllData()?new Rm(n.getIndex()):n.hasLimit()?new tA(n):new Zl(n)}function Fv(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ft?t="$priority":n.index_===ZR?t="$value":n.index_===ra?t="$key":(J(n.index_ instanceof XR,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=jt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=jt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+jt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=jt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+jt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function jv(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ft&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh extends TE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=du("p:rest:"),this.listens_={}}listen(e,t,r,o){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=yh.getListenId_(e,r),d={};this.listens_[u]=d;const p=Fv(e._queryParams);this.restRequest_(a+".json",p,(_,w)=>{let T=w;if(_===404&&(T=null,_=null),_===null&&this.onDataUpdate_(a,T,!1,r),aa(this.listens_,u)===d){let I;_?_===401?I="permission_denied":I="rest_error:"+_:I="ok",o(I,null)}})}unlisten(e,t){const r=yh.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Fv(e._queryParams),r=e._path.toString(),o=new jh;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),o.resolve(d)):o.reject(new Error(d))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,a])=>{o&&o.accessToken&&(t.auth=o.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+va(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=ql(d.responseText)}catch{vn("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,p)}else d.status!==401&&d.status!==404&&vn("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(){this.rootNode_=Te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(){return{value:null,children:new Map}}function OE(n,e,t){if(Le(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Pe(e);n.children.has(r)||n.children.set(r,vh());const o=n.children.get(r);e=nt(e),OE(o,e,t)}}function xp(n,e,t){n.value!==null?t(e,n.value):sA(n,(r,o)=>{const a=new Xe(e.toString()+"/"+r);xp(o,a,t)})}function sA(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&wn(this.last_,(r,o)=>{t[r]=t[r]-o}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=10*1e3,oA=30*1e3,aA=5*60*1e3;class lA{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new iA(e);const r=Uv+(oA-Uv)*Math.random();Vl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;wn(e,(o,a)=>{a>0&&rs(this.statsToReport_,o)&&(t[o]=a,r=!0)}),r&&this.server_.reportStats(t),Vl(this.reportStats_.bind(this),Math.floor(Math.random()*2*aA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ir;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ir||(ir={}));function LE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Nm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pm(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=ir.ACK_USER_WRITE,this.source=LE()}operationForChild(e){if(Le(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Xe(e));return new wh(qe(),t,this.revert)}}else return J(Pe(this.path)===e,"operationForChild called for unrelated child."),new wh(nt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){this.source=e,this.path=t,this.type=ir.LISTEN_COMPLETE}operationForChild(e){return Le(this.path)?new eu(this.source,qe()):new eu(this.source,nt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=ir.OVERWRITE}operationForChild(e){return Le(this.path)?new $i(this.source,qe(),this.snap.getImmediateChild(e)):new $i(this.source,nt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=ir.MERGE}operationForChild(e){if(Le(this.path)){const t=this.children.subtree(new Xe(e));return t.isEmpty()?null:t.value?new $i(this.source,qe(),t.value):new tu(this.source,qe(),t)}else return J(Pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tu(this.source,nt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Le(e))return this.isFullyInitialized()&&!this.filtered_;const t=Pe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cA(n,e,t,r){const o=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(eA(u.childName,u.snapshotNode))}),Cl(n,o,"child_removed",e,r,t),Cl(n,o,"child_added",e,r,t),Cl(n,o,"child_moved",a,r,t),Cl(n,o,"child_changed",e,r,t),Cl(n,o,"value",e,r,t),o}function Cl(n,e,t,r,o,a){const u=r.filter(d=>d.type===t);u.sort((d,p)=>dA(n,d,p)),u.forEach(d=>{const p=hA(n,d,a);o.forEach(_=>{_.respondsTo(d.type)&&e.push(_.createEvent(p,n.query_))})})}function hA(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function dA(n,e,t){if(e.childName==null||t.childName==null)throw ya("Should only compare child_ events.");const r=new De(e.childName,e.snapshotNode),o=new De(t.childName,t.snapshotNode);return n.index_.compare(r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n,e){return{eventCache:n,serverCache:e}}function Fl(n,e,t,r){return Kh(new Wi(e,t,r),n.serverCache)}function ME(n,e,t,r){return Kh(n.eventCache,new Wi(e,t,r))}function kp(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function qi(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let np;const fA=()=>(np||(np=new Tr(Jk)),np);class it{static fromObject(e){let t=new it(null);return wn(e,(r,o)=>{t=t.set(new Xe(r),o)}),t}constructor(e,t=fA()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:qe(),value:this.value};if(Le(e))return null;{const r=Pe(e),o=this.children.get(r);if(o!==null){const a=o.findRootMostMatchingPathAndValue(nt(e),t);return a!=null?{path:Rt(new Xe(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Le(e))return this;{const t=Pe(e),r=this.children.get(t);return r!==null?r.subtree(nt(e)):new it(null)}}set(e,t){if(Le(e))return new it(t,this.children);{const r=Pe(e),a=(this.children.get(r)||new it(null)).set(nt(e),t),u=this.children.insert(r,a);return new it(this.value,u)}}remove(e){if(Le(e))return this.children.isEmpty()?new it(null):new it(null,this.children);{const t=Pe(e),r=this.children.get(t);if(r){const o=r.remove(nt(e));let a;return o.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,o),this.value===null&&a.isEmpty()?new it(null):new it(this.value,a)}else return this}}get(e){if(Le(e))return this.value;{const t=Pe(e),r=this.children.get(t);return r?r.get(nt(e)):null}}setTree(e,t){if(Le(e))return t;{const r=Pe(e),a=(this.children.get(r)||new it(null)).setTree(nt(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new it(this.value,u)}}fold(e){return this.fold_(qe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((o,a)=>{r[o]=a.fold_(Rt(e,o),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,qe(),t)}findOnPath_(e,t,r){const o=this.value?r(t,this.value):!1;if(o)return o;if(Le(e))return null;{const a=Pe(e),u=this.children.get(a);return u?u.findOnPath_(nt(e),Rt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,qe(),t)}foreachOnPath_(e,t,r){if(Le(e))return this;{this.value&&r(t,this.value);const o=Pe(e),a=this.children.get(o);return a?a.foreachOnPath_(nt(e),Rt(t,o),r):new it(null)}}foreach(e){this.foreach_(qe(),e)}foreach_(e,t){this.children.inorderTraversal((r,o)=>{o.foreach_(Rt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.writeTree_=e}static empty(){return new or(new it(null))}}function jl(n,e,t){if(Le(e))return new or(new it(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const o=r.path;let a=r.value;const u=yn(o,e);return a=a.updateChild(u,t),new or(n.writeTree_.set(o,a))}else{const o=new it(t),a=n.writeTree_.setTree(e,o);return new or(a)}}}function zv(n,e,t){let r=n;return wn(t,(o,a)=>{r=jl(r,Rt(e,o),a)}),r}function Bv(n,e){if(Le(e))return or.empty();{const t=n.writeTree_.setTree(e,new it(null));return new or(t)}}function Rp(n,e){return Yi(n,e)!=null}function Yi(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(yn(t.path,e)):null}function Hv(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ft,(r,o)=>{e.push(new De(r,o))}):n.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&e.push(new De(r,o.value))}),e}function Us(n,e){if(Le(e))return n;{const t=Yi(n,e);return t!=null?new or(new it(t)):new or(n.writeTree_.subtree(e))}}function Ap(n){return n.writeTree_.isEmpty()}function ha(n,e){return VE(qe(),n.writeTree_,e)}function VE(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((o,a)=>{o===".priority"?(J(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=VE(Rt(n,o),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Rt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(n,e){return zE(e,n)}function pA(n,e,t,r,o){J(r>n.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:o}),o&&(n.visibleWrites=jl(n.visibleWrites,e,t)),n.lastWriteId=r}function mA(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function gA(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);J(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let o=r.visible,a=!1,u=n.allWrites.length-1;for(;o&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&_A(d,r.path)?o=!1:sr(r.path,d.path)&&(a=!0)),u--}if(o){if(a)return yA(n),!0;if(r.snap)n.visibleWrites=Bv(n.visibleWrites,r.path);else{const d=r.children;wn(d,p=>{n.visibleWrites=Bv(n.visibleWrites,Rt(r.path,p))})}return!0}else return!1}function _A(n,e){if(n.snap)return sr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&sr(Rt(n.path,t),e))return!0;return!1}function yA(n){n.visibleWrites=FE(n.allWrites,vA,qe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function vA(n){return n.visible}function FE(n,e,t){let r=or.empty();for(let o=0;o<n.length;++o){const a=n[o];if(e(a)){const u=a.path;let d;if(a.snap)sr(t,u)?(d=yn(t,u),r=jl(r,d,a.snap)):sr(u,t)&&(d=yn(u,t),r=jl(r,qe(),a.snap.getChild(d)));else if(a.children){if(sr(t,u))d=yn(t,u),r=zv(r,d,a.children);else if(sr(u,t))if(d=yn(u,t),Le(d))r=zv(r,qe(),a.children);else{const p=aa(a.children,Pe(d));if(p){const _=p.getChild(nt(d));r=jl(r,qe(),_)}}}else throw ya("WriteRecord should have .snap or .children")}}return r}function jE(n,e,t,r,o){if(!r&&!o){const a=Yi(n.visibleWrites,e);if(a!=null)return a;{const u=Us(n.visibleWrites,e);if(Ap(u))return t;if(t==null&&!Rp(u,qe()))return null;{const d=t||Te.EMPTY_NODE;return ha(u,d)}}}else{const a=Us(n.visibleWrites,e);if(!o&&Ap(a))return t;if(!o&&t==null&&!Rp(a,qe()))return null;{const u=function(_){return(_.visible||o)&&(!r||!~r.indexOf(_.writeId))&&(sr(_.path,e)||sr(e,_.path))},d=FE(n.allWrites,u,e),p=t||Te.EMPTY_NODE;return ha(d,p)}}}function wA(n,e,t){let r=Te.EMPTY_NODE;const o=Yi(n.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(ft,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Us(n.visibleWrites,e);return t.forEachChild(ft,(u,d)=>{const p=ha(Us(a,new Xe(u)),d);r=r.updateImmediateChild(u,p)}),Hv(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Us(n.visibleWrites,e);return Hv(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function EA(n,e,t,r,o){J(r||o,"Either existingEventSnap or existingServerSnap must exist");const a=Rt(e,t);if(Rp(n.visibleWrites,a))return null;{const u=Us(n.visibleWrites,a);return Ap(u)?o.getChild(t):ha(u,o.getChild(t))}}function TA(n,e,t,r){const o=Rt(e,t),a=Yi(n.visibleWrites,o);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Us(n.visibleWrites,o);return ha(u,r.getNode().getImmediateChild(t))}else return null}function IA(n,e){return Yi(n.visibleWrites,e)}function SA(n,e,t,r,o,a,u){let d;const p=Us(n.visibleWrites,e),_=Yi(p,qe());if(_!=null)d=_;else if(t!=null)d=ha(p,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const w=[],T=u.getCompare(),I=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let b=I.getNext();for(;b&&w.length<o;)T(b,r)!==0&&w.push(b),b=I.getNext();return w}else return[]}function CA(){return{visibleWrites:or.empty(),allWrites:[],lastWriteId:-1}}function Eh(n,e,t,r){return jE(n.writeTree,n.treePath,e,t,r)}function Dm(n,e){return wA(n.writeTree,n.treePath,e)}function $v(n,e,t,r){return EA(n.writeTree,n.treePath,e,t,r)}function Th(n,e){return IA(n.writeTree,Rt(n.treePath,e))}function xA(n,e,t,r,o,a){return SA(n.writeTree,n.treePath,e,t,r,o,a)}function Om(n,e,t){return TA(n.writeTree,n.treePath,e,t)}function UE(n,e){return zE(Rt(n.treePath,e),n.writeTree)}function zE(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;J(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),J(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const a=o.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Jl(r,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Xl(r,o.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,ca(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Jl(r,e.snapshotNode,o.oldSnap));else throw ya("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const BE=new RA;class Lm{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Wi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Om(this.writes_,e,r)}}getChildAfterChild(e,t,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qi(this.viewCache_),a=xA(this.writes_,o,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(n){return{filter:n}}function NA(n,e){J(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function PA(n,e,t,r,o){const a=new kA;let u,d;if(t.type===ir.OVERWRITE){const _=t;_.source.fromUser?u=Np(n,e,_.path,_.snap,r,o,a):(J(_.source.fromServer,"Unknown source."),d=_.source.tagged||e.serverCache.isFiltered()&&!Le(_.path),u=Ih(n,e,_.path,_.snap,r,o,d,a))}else if(t.type===ir.MERGE){const _=t;_.source.fromUser?u=DA(n,e,_.path,_.children,r,o,a):(J(_.source.fromServer,"Unknown source."),d=_.source.tagged||e.serverCache.isFiltered(),u=Pp(n,e,_.path,_.children,r,o,d,a))}else if(t.type===ir.ACK_USER_WRITE){const _=t;_.revert?u=MA(n,e,_.path,r,o,a):u=OA(n,e,_.path,_.affectedTree,r,o,a)}else if(t.type===ir.LISTEN_COMPLETE)u=LA(n,e,t.path,r,a);else throw ya("Unknown operation type: "+t.type);const p=a.getChanges();return bA(e,u,p),{viewCache:u,changes:p}}function bA(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=kp(n);(t.length>0||!n.eventCache.isFullyInitialized()||o&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(DE(kp(e)))}}function HE(n,e,t,r,o,a){const u=e.eventCache;if(Th(r,t)!=null)return e;{let d,p;if(Le(t))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const _=qi(e),w=_ instanceof Te?_:Te.EMPTY_NODE,T=Dm(r,w);d=n.filter.updateFullNode(e.eventCache.getNode(),T,a)}else{const _=Eh(r,qi(e));d=n.filter.updateFullNode(e.eventCache.getNode(),_,a)}else{const _=Pe(t);if(_===".priority"){J(qs(t)===1,"Can't have a priority with additional path components");const w=u.getNode();p=e.serverCache.getNode();const T=$v(r,t,w,p);T!=null?d=n.filter.updatePriority(w,T):d=u.getNode()}else{const w=nt(t);let T;if(u.isCompleteForChild(_)){p=e.serverCache.getNode();const I=$v(r,t,u.getNode(),p);I!=null?T=u.getNode().getImmediateChild(_).updateChild(w,I):T=u.getNode().getImmediateChild(_)}else T=Om(r,_,e.serverCache);T!=null?d=n.filter.updateChild(u.getNode(),_,T,w,o,a):d=u.getNode()}}return Fl(e,d,u.isFullyInitialized()||Le(t),n.filter.filtersNodes())}}function Ih(n,e,t,r,o,a,u,d){const p=e.serverCache;let _;const w=u?n.filter:n.filter.getIndexedFilter();if(Le(t))_=w.updateFullNode(p.getNode(),r,null);else if(w.filtersNodes()&&!p.isFiltered()){const b=p.getNode().updateChild(t,r);_=w.updateFullNode(p.getNode(),b,null)}else{const b=Pe(t);if(!p.isCompleteForPath(t)&&qs(t)>1)return e;const j=nt(t),z=p.getNode().getImmediateChild(b).updateChild(j,r);b===".priority"?_=w.updatePriority(p.getNode(),z):_=w.updateChild(p.getNode(),b,z,j,BE,null)}const T=ME(e,_,p.isFullyInitialized()||Le(t),w.filtersNodes()),I=new Lm(o,T,a);return HE(n,T,t,o,I,d)}function Np(n,e,t,r,o,a,u){const d=e.eventCache;let p,_;const w=new Lm(o,e,a);if(Le(t))_=n.filter.updateFullNode(e.eventCache.getNode(),r,u),p=Fl(e,_,!0,n.filter.filtersNodes());else{const T=Pe(t);if(T===".priority")_=n.filter.updatePriority(e.eventCache.getNode(),r),p=Fl(e,_,d.isFullyInitialized(),d.isFiltered());else{const I=nt(t),b=d.getNode().getImmediateChild(T);let j;if(Le(I))j=r;else{const M=w.getCompleteChild(T);M!=null?SE(I)===".priority"&&M.getChild(xE(I)).isEmpty()?j=M:j=M.updateChild(I,r):j=Te.EMPTY_NODE}if(b.equals(j))p=e;else{const M=n.filter.updateChild(d.getNode(),T,j,I,w,u);p=Fl(e,M,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function Wv(n,e){return n.eventCache.isCompleteForChild(e)}function DA(n,e,t,r,o,a,u){let d=e;return r.foreach((p,_)=>{const w=Rt(t,p);Wv(e,Pe(w))&&(d=Np(n,d,w,_,o,a,u))}),r.foreach((p,_)=>{const w=Rt(t,p);Wv(e,Pe(w))||(d=Np(n,d,w,_,o,a,u))}),d}function qv(n,e,t){return t.foreach((r,o)=>{e=e.updateChild(r,o)}),e}function Pp(n,e,t,r,o,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,_;Le(t)?_=r:_=new it(null).setTree(t,r);const w=e.serverCache.getNode();return _.children.inorderTraversal((T,I)=>{if(w.hasChild(T)){const b=e.serverCache.getNode().getImmediateChild(T),j=qv(n,b,I);p=Ih(n,p,new Xe(T),j,o,a,u,d)}}),_.children.inorderTraversal((T,I)=>{const b=!e.serverCache.isCompleteForChild(T)&&I.value===null;if(!w.hasChild(T)&&!b){const j=e.serverCache.getNode().getImmediateChild(T),M=qv(n,j,I);p=Ih(n,p,new Xe(T),M,o,a,u,d)}}),p}function OA(n,e,t,r,o,a,u){if(Th(o,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(r.value!=null){if(Le(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return Ih(n,e,t,p.getNode().getChild(t),o,a,d,u);if(Le(t)){let _=new it(null);return p.getNode().forEachChild(ra,(w,T)=>{_=_.set(new Xe(w),T)}),Pp(n,e,t,_,o,a,d,u)}else return e}else{let _=new it(null);return r.foreach((w,T)=>{const I=Rt(t,w);p.isCompleteForPath(I)&&(_=_.set(w,p.getNode().getChild(I)))}),Pp(n,e,t,_,o,a,d,u)}}function LA(n,e,t,r,o){const a=e.serverCache,u=ME(e,a.getNode(),a.isFullyInitialized()||Le(t),a.isFiltered());return HE(n,u,t,r,BE,o)}function MA(n,e,t,r,o,a){let u;if(Th(r,t)!=null)return e;{const d=new Lm(r,e,o),p=e.eventCache.getNode();let _;if(Le(t)||Pe(t)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=Eh(r,qi(e));else{const T=e.serverCache.getNode();J(T instanceof Te,"serverChildren would be complete if leaf node"),w=Dm(r,T)}w=w,_=n.filter.updateFullNode(p,w,a)}else{const w=Pe(t);let T=Om(r,w,e.serverCache);T==null&&e.serverCache.isCompleteForChild(w)&&(T=p.getImmediateChild(w)),T!=null?_=n.filter.updateChild(p,w,T,nt(t),d,a):e.eventCache.getNode().hasChild(w)?_=n.filter.updateChild(p,w,Te.EMPTY_NODE,nt(t),d,a):_=p,_.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Eh(r,qi(e)),u.isLeafNode()&&(_=n.filter.updateFullNode(_,u,a)))}return u=e.serverCache.isFullyInitialized()||Th(r,qe())!=null,Fl(e,_,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,o=new Rm(r.getIndex()),a=nA(r);this.processor_=AA(a);const u=t.serverCache,d=t.eventCache,p=o.updateFullNode(Te.EMPTY_NODE,u.getNode(),null),_=a.updateFullNode(Te.EMPTY_NODE,d.getNode(),null),w=new Wi(p,u.isFullyInitialized(),o.filtersNodes()),T=new Wi(_,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=Kh(T,w),this.eventGenerator_=new uA(this.query_)}get query(){return this.query_}}function FA(n){return n.viewCache_.serverCache.getNode()}function jA(n,e){const t=qi(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Le(e)&&!t.getImmediateChild(Pe(e)).isEmpty())?t.getChild(e):null}function Gv(n){return n.eventRegistrations_.length===0}function UA(n,e){n.eventRegistrations_.push(e)}function Kv(n,e,t){const r=[];if(t){J(e==null,"A cancel should cancel all event registrations.");const o=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,o);u&&r.push(u)})}if(e){let o=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))o.push(u);else if(e.hasAnyCallback()){o=o.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=o}else n.eventRegistrations_=[];return r}function Qv(n,e,t,r){e.type===ir.MERGE&&e.source.queryId!==null&&(J(qi(n.viewCache_),"We should always have a full cache before handling merges"),J(kp(n.viewCache_),"Missing event cache, even though we have a server cache"));const o=n.viewCache_,a=PA(n.processor_,o,e,t,r);return NA(n.processor_,a.viewCache),J(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,$E(n,a.changes,a.viewCache.eventCache.getNode(),null)}function zA(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ft,(a,u)=>{r.push(ca(a,u))}),t.isFullyInitialized()&&r.push(DE(t.getNode())),$E(n,r,t.getNode(),e)}function $E(n,e,t,r){const o=r?[r]:n.eventRegistrations_;return cA(n.eventGenerator_,e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sh;class BA{constructor(){this.views=new Map}}function HA(n){J(!Sh,"__referenceConstructor has already been defined"),Sh=n}function $A(){return J(Sh,"Reference.ts has not been loaded"),Sh}function WA(n){return n.views.size===0}function Mm(n,e,t,r){const o=e.source.queryId;if(o!==null){const a=n.views.get(o);return J(a!=null,"SyncTree gave us an op for an invalid query."),Qv(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(Qv(u,e,t,r));return a}}function qA(n,e,t,r,o){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=Eh(t,o?r:null),p=!1;d?p=!0:r instanceof Te?(d=Dm(t,r),p=!1):(d=Te.EMPTY_NODE,p=!1);const _=Kh(new Wi(d,p,!1),new Wi(r,o,!1));return new VA(e,_)}return u}function GA(n,e,t,r,o,a){const u=qA(n,e,r,o,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),UA(u,t),zA(u,t)}function KA(n,e,t,r){const o=e._queryIdentifier,a=[];let u=[];const d=Gs(n);if(o==="default")for(const[p,_]of n.views.entries())u=u.concat(Kv(_,t,r)),Gv(_)&&(n.views.delete(p),_.query._queryParams.loadsAllData()||a.push(_.query));else{const p=n.views.get(o);p&&(u=u.concat(Kv(p,t,r)),Gv(p)&&(n.views.delete(o),p.query._queryParams.loadsAllData()||a.push(p.query)))}return d&&!Gs(n)&&a.push(new($A())(e._repo,e._path)),{removed:a,events:u}}function WE(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function sa(n,e){let t=null;for(const r of n.views.values())t=t||jA(r,e);return t}function qE(n,e){if(e._queryParams.loadsAllData())return Qh(n);{const r=e._queryIdentifier;return n.views.get(r)}}function GE(n,e){return qE(n,e)!=null}function Gs(n){return Qh(n)!=null}function Qh(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ch;function QA(n){J(!Ch,"__referenceConstructor has already been defined"),Ch=n}function YA(){return J(Ch,"Reference.ts has not been loaded"),Ch}let XA=1;class Yv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new it(null),this.pendingWriteTree_=CA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function KE(n,e,t,r,o){return pA(n.pendingWriteTree_,e,t,r,o),o?pu(n,new $i(LE(),e,t)):[]}function Li(n,e,t=!1){const r=mA(n.pendingWriteTree_,e);if(gA(n.pendingWriteTree_,e)){let a=new it(null);return r.snap!=null?a=a.set(qe(),!0):wn(r.children,u=>{a=a.set(new Xe(u),!0)}),pu(n,new wh(r.path,a,t))}else return[]}function Yh(n,e,t){return pu(n,new $i(Nm(),e,t))}function JA(n,e,t){const r=it.fromObject(t);return pu(n,new tu(Nm(),e,r))}function ZA(n,e){return pu(n,new eu(Nm(),e))}function eN(n,e,t){const r=Fm(n,t);if(r){const o=jm(r),a=o.path,u=o.queryId,d=yn(a,e),p=new eu(Pm(u),d);return Um(n,a,p)}else return[]}function bp(n,e,t,r,o=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||GE(u,e))){const p=KA(u,e,t,r);WA(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const _=p.removed;if(d=p.events,!o){const w=_.findIndex(I=>I._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(a,(I,b)=>Gs(b));if(w&&!T){const I=n.syncPointTree_.subtree(a);if(!I.isEmpty()){const b=rN(I);for(let j=0;j<b.length;++j){const M=b[j],z=M.query,ae=XE(n,M);n.listenProvider_.startListening(Ul(z),xh(n,z),ae.hashFn,ae.onComplete)}}}!T&&_.length>0&&!r&&(w?n.listenProvider_.stopListening(Ul(e),null):_.forEach(I=>{const b=n.queryToTagMap.get(Xh(I));n.listenProvider_.stopListening(Ul(I),b)}))}sN(n,_)}return d}function tN(n,e,t,r){const o=Fm(n,r);if(o!=null){const a=jm(o),u=a.path,d=a.queryId,p=yn(u,e),_=new $i(Pm(d),p,t);return Um(n,u,_)}else return[]}function nN(n,e,t,r){const o=Fm(n,r);if(o){const a=jm(o),u=a.path,d=a.queryId,p=yn(u,e),_=it.fromObject(t),w=new tu(Pm(d),p,_);return Um(n,u,w)}else return[]}function Xv(n,e,t,r=!1){const o=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(o,(I,b)=>{const j=yn(I,o);a=a||sa(b,j),u=u||Gs(b)});let d=n.syncPointTree_.get(o);d?(u=u||Gs(d),a=a||sa(d,qe())):(d=new BA,n.syncPointTree_=n.syncPointTree_.set(o,d));let p;a!=null?p=!0:(p=!1,a=Te.EMPTY_NODE,n.syncPointTree_.subtree(o).foreachChild((b,j)=>{const M=sa(j,qe());M&&(a=a.updateImmediateChild(b,M))}));const _=GE(d,e);if(!_&&!e._queryParams.loadsAllData()){const I=Xh(e);J(!n.queryToTagMap.has(I),"View does not exist, but we have a tag");const b=iN();n.queryToTagMap.set(I,b),n.tagToQueryMap.set(b,I)}const w=bm(n.pendingWriteTree_,o);let T=GA(d,e,t,w,a,p);if(!_&&!u&&!r){const I=qE(d,e);T=T.concat(oN(n,e,I))}return T}function Vm(n,e,t){const o=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const p=yn(u,e),_=sa(d,p);if(_)return _});return jE(o,e,a,t,!0)}function pu(n,e){return QE(e,n.syncPointTree_,null,bm(n.pendingWriteTree_,qe()))}function QE(n,e,t,r){if(Le(n.path))return YE(n,e,t,r);{const o=e.get(qe());t==null&&o!=null&&(t=sa(o,qe()));let a=[];const u=Pe(n.path),d=n.operationForChild(u),p=e.children.get(u);if(p&&d){const _=t?t.getImmediateChild(u):null,w=UE(r,u);a=a.concat(QE(d,p,_,w))}return o&&(a=a.concat(Mm(o,n,r,t))),a}}function YE(n,e,t,r){const o=e.get(qe());t==null&&o!=null&&(t=sa(o,qe()));let a=[];return e.children.inorderTraversal((u,d)=>{const p=t?t.getImmediateChild(u):null,_=UE(r,u),w=n.operationForChild(u);w&&(a=a.concat(YE(w,d,p,_)))}),o&&(a=a.concat(Mm(o,n,r,t))),a}function XE(n,e){const t=e.query,r=xh(n,t);return{hashFn:()=>(FA(e)||Te.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return r?eN(n,t._path,r):ZA(n,t._path);{const a=tR(o,t);return bp(n,t,null,a)}}}}function xh(n,e){const t=Xh(e);return n.queryToTagMap.get(t)}function Xh(n){return n._path.toString()+"$"+n._queryIdentifier}function Fm(n,e){return n.tagToQueryMap.get(e)}function jm(n){const e=n.indexOf("$");return J(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Xe(n.substr(0,e))}}function Um(n,e,t){const r=n.syncPointTree_.get(e);J(r,"Missing sync point for query tag that we're tracking");const o=bm(n.pendingWriteTree_,e);return Mm(r,t,o,null)}function rN(n){return n.fold((e,t,r)=>{if(t&&Gs(t))return[Qh(t)];{let o=[];return t&&(o=WE(t)),wn(r,(a,u)=>{o=o.concat(u)}),o}})}function Ul(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(YA())(n._repo,n._path):n}function sN(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const o=Xh(r),a=n.queryToTagMap.get(o);n.queryToTagMap.delete(o),n.tagToQueryMap.delete(a)}}}function iN(){return XA++}function oN(n,e,t){const r=e._path,o=xh(n,e),a=XE(n,t),u=n.listenProvider_.startListening(Ul(e),o,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(o)J(!Gs(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((_,w,T)=>{if(!Le(_)&&w&&Gs(w))return[Qh(w).query];{let I=[];return w&&(I=I.concat(WE(w).map(b=>b.query))),wn(T,(b,j)=>{I=I.concat(j)}),I}});for(let _=0;_<p.length;++_){const w=p[_];n.listenProvider_.stopListening(Ul(w),xh(n,w))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new zm(t)}node(){return this.node_}}class Bm{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Rt(this.path_,e);return new Bm(this.syncTree_,t)}node(){return Vm(this.syncTree_,this.path_)}}const aN=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Jv=function(n,e,t){if(!n||typeof n!="object")return n;if(J(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return lN(n[".sv"],e,t);if(typeof n[".sv"]=="object")return uN(n[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},lN=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:J(!1,"Unexpected server value: "+n)}},uN=function(n,e,t){n.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&J(!1,"Unexpected increment value: "+r);const o=e.node();if(J(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const u=o.getValue();return typeof u!="number"?r:u+r},cN=function(n,e,t,r){return Hm(e,new Bm(t,n),r)},JE=function(n,e,t){return Hm(n,new zm(e),t)};function Hm(n,e,t){const r=n.getPriority().val(),o=Jv(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=Jv(u.getValue(),e,t);return d!==u.getValue()||o!==u.getPriority().val()?new Vt(d,Wt(o)):n}else{const u=n;return a=u,o!==u.getPriority().val()&&(a=a.updatePriority(new Vt(o))),u.forEachChild(ft,(d,p)=>{const _=Hm(p,e.getImmediateChild(d),t);_!==p&&(a=a.updateImmediateChild(d,_))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Wm(n,e){let t=e instanceof Xe?e:new Xe(e),r=n,o=Pe(t);for(;o!==null;){const a=aa(r.node.children,o)||{children:{},childCount:0};r=new $m(o,r,a),t=nt(t),o=Pe(t)}return r}function Ia(n){return n.node.value}function ZE(n,e){n.node.value=e,Dp(n)}function eT(n){return n.node.childCount>0}function hN(n){return Ia(n)===void 0&&!eT(n)}function Jh(n,e){wn(n.node.children,(t,r)=>{e(new $m(t,n,r))})}function tT(n,e,t,r){t&&e(n),Jh(n,o=>{tT(o,e,!0)})}function dN(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function mu(n){return new Xe(n.parent===null?n.name:mu(n.parent)+"/"+n.name)}function Dp(n){n.parent!==null&&fN(n.parent,n.name,n)}function fN(n,e,t){const r=hN(t),o=rs(n.node.children,e);r&&o?(delete n.node.children[e],n.node.childCount--,Dp(n)):!r&&!o&&(n.node.children[e]=t.node,n.node.childCount++,Dp(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=/[\[\].#$\/\u0000-\u001F\u007F]/,mN=/[\[\].#$\u0000-\u001F\u007F]/,rp=10*1024*1024,nT=function(n){return typeof n=="string"&&n.length!==0&&!pN.test(n)},rT=function(n){return typeof n=="string"&&n.length!==0&&!mN.test(n)},gN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rT(n)},_N=function(n,e,t,r){qm(um(n,"value"),e,t)},qm=function(n,e,t){const r=t instanceof Xe?new OR(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Di(r));if(typeof e=="function")throw new Error(n+"contains a function "+Di(r)+" with contents = "+e.toString());if(rE(e))throw new Error(n+"contains "+e.toString()+" "+Di(r));if(typeof e=="string"&&e.length>rp/3&&Uh(e)>rp)throw new Error(n+"contains a string greater than "+rp+" utf8 bytes "+Di(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,a=!1;if(wn(e,(u,d)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!nT(u)))throw new Error(n+" contains an invalid key ("+u+") "+Di(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LR(r,u),qm(n,d,r),MR(r)}),o&&a)throw new Error(n+' contains ".value" child '+Di(r)+" in addition to actual children.")}},sT=function(n,e,t,r){if(!rT(t))throw new Error(um(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yN=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sT(n,e,t)},vN=function(n,e){if(Pe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},wN=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!gN(t))throw new Error(um(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gm(n,e){let t=null;for(let r=0;r<e.length;r++){const o=e[r],a=o.getPath();t!==null&&!Cm(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(o)}t&&n.eventLists_.push(t)}function iT(n,e,t){Gm(n,t),oT(n,r=>Cm(r,e))}function es(n,e,t){Gm(n,t),oT(n,r=>sr(r,e)||sr(e,r))}function oT(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const o=n.eventLists_[r];if(o){const a=o.path;e(a)?(TN(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function TN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Ml&&Zt("event: "+t.toString()),Ta(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN="repo_interrupt",SN=25;class CN{constructor(e,t,r,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new EN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vh(),this.transactionQueueTree_=new $m,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xN(n,e,t){if(n.stats_=Im(n.repoInfo_),n.forceRestClient_||iR())n.server_=new yh(n.repoInfo_,(r,o,a,u)=>{Zv(n,r,o,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>e0(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{jt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Yr(n.repoInfo_,e,(r,o,a,u)=>{Zv(n,r,o,a,u)},r=>{e0(n,r)},r=>{RN(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=cR(n.repoInfo_,()=>new lA(n.stats_,n.server_)),n.infoData_=new rA,n.infoSyncTree_=new Yv({startListening:(r,o,a,u)=>{let d=[];const p=n.infoData_.getNode(r._path);return p.isEmpty()||(d=Yh(n.infoSyncTree_,r._path,p),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),Qm(n,"connected",!1),n.serverSyncTree_=new Yv({startListening:(r,o,a,u)=>(n.server_.listen(r,a,o,(d,p)=>{const _=u(d,p);es(n.eventQueue_,r._path,_)}),[]),stopListening:(r,o)=>{n.server_.unlisten(r,o)}})}function kN(n){const t=n.infoData_.getNode(new Xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Km(n){return aN({timestamp:kN(n)})}function Zv(n,e,t,r,o){n.dataUpdateCount++;const a=new Xe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(o)if(r){const p=ah(t,_=>Wt(_));u=nN(n.serverSyncTree_,a,p,o)}else{const p=Wt(t);u=tN(n.serverSyncTree_,a,p,o)}else if(r){const p=ah(t,_=>Wt(_));u=JA(n.serverSyncTree_,a,p)}else{const p=Wt(t);u=Yh(n.serverSyncTree_,a,p)}let d=a;u.length>0&&(d=Zh(n,a)),es(n.eventQueue_,d,u)}function e0(n,e){Qm(n,"connected",e),e===!1&&NN(n)}function RN(n,e){wn(e,(t,r)=>{Qm(n,t,r)})}function Qm(n,e,t){const r=new Xe("/.info/"+e),o=Wt(t);n.infoData_.updateSnapshot(r,o);const a=Yh(n.infoSyncTree_,r,o);es(n.eventQueue_,r,a)}function aT(n){return n.nextWriteId_++}function AN(n,e,t,r,o){Ym(n,"set",{path:e.toString(),value:t,priority:r});const a=Km(n),u=Wt(t,r),d=Vm(n.serverSyncTree_,e),p=JE(u,d,a),_=aT(n),w=KE(n.serverSyncTree_,e,p,_,!0);Gm(n.eventQueue_,w),n.server_.put(e.toString(),u.val(!0),(I,b)=>{const j=I==="ok";j||vn("set at "+e+" failed: "+I);const M=Li(n.serverSyncTree_,_,!j);es(n.eventQueue_,e,M),ON(n,o,I,b)});const T=dT(n,e);Zh(n,T),es(n.eventQueue_,T,[])}function NN(n){Ym(n,"onDisconnectEvents");const e=Km(n),t=vh();xp(n.onDisconnect_,qe(),(o,a)=>{const u=cN(o,a,n.serverSyncTree_,e);OE(t,o,u)});let r=[];xp(t,qe(),(o,a)=>{r=r.concat(Yh(n.serverSyncTree_,o,a));const u=dT(n,o);Zh(n,u)}),n.onDisconnect_=vh(),es(n.eventQueue_,qe(),r)}function PN(n,e,t){let r;Pe(e._path)===".info"?r=Xv(n.infoSyncTree_,e,t):r=Xv(n.serverSyncTree_,e,t),iT(n.eventQueue_,e._path,r)}function bN(n,e,t){let r;Pe(e._path)===".info"?r=bp(n.infoSyncTree_,e,t):r=bp(n.serverSyncTree_,e,t),iT(n.eventQueue_,e._path,r)}function DN(n){n.persistentConnection_&&n.persistentConnection_.interrupt(IN)}function Ym(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Zt(t,...e)}function ON(n,e,t,r){e&&Ta(()=>{if(t==="ok")e(null);else{const o=(t||"error").toUpperCase();let a=o;r&&(a+=": "+r);const u=new Error(a);u.code=o,e(u)}})}function lT(n,e,t){return Vm(n.serverSyncTree_,e,t)||Te.EMPTY_NODE}function Xm(n,e=n.transactionQueueTree_){if(e||ed(n,e),Ia(e)){const t=cT(n,e);J(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&LN(n,mu(e),t)}else eT(e)&&Jh(e,t=>{Xm(n,t)})}function LN(n,e,t){const r=t.map(_=>_.currentWriteId),o=lT(n,e,r);let a=o;const u=o.hash();for(let _=0;_<t.length;_++){const w=t[_];J(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const T=yn(e,w.path);a=a.updateChild(T,w.currentOutputSnapshotRaw)}const d=a.val(!0),p=e;n.server_.put(p.toString(),d,_=>{Ym(n,"transaction put response",{path:p.toString(),status:_});let w=[];if(_==="ok"){const T=[];for(let I=0;I<t.length;I++)t[I].status=2,w=w.concat(Li(n.serverSyncTree_,t[I].currentWriteId)),t[I].onComplete&&T.push(()=>t[I].onComplete(null,!0,t[I].currentOutputSnapshotResolved)),t[I].unwatcher();ed(n,Wm(n.transactionQueueTree_,e)),Xm(n,n.transactionQueueTree_),es(n.eventQueue_,e,w);for(let I=0;I<T.length;I++)Ta(T[I])}else{if(_==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{vn("transaction at "+p.toString()+" failed: "+_);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=_}Zh(n,e)}},u)}function Zh(n,e){const t=uT(n,e),r=mu(t),o=cT(n,t);return MN(n,o,r),r}function MN(n,e,t){if(e.length===0)return;const r=[];let o=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],_=yn(t,p.path);let w=!1,T;if(J(_!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)w=!0,T=p.abortReason,o=o.concat(Li(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=SN)w=!0,T="maxretry",o=o.concat(Li(n.serverSyncTree_,p.currentWriteId,!0));else{const I=lT(n,p.path,u);p.currentInputSnapshot=I;const b=e[d].update(I.val());if(b!==void 0){qm("transaction failed: Data returned ",b,p.path);let j=Wt(b);typeof b=="object"&&b!=null&&rs(b,".priority")||(j=j.updatePriority(I.getPriority()));const z=p.currentWriteId,ae=Km(n),W=JE(j,I,ae);p.currentOutputSnapshotRaw=j,p.currentOutputSnapshotResolved=W,p.currentWriteId=aT(n),u.splice(u.indexOf(z),1),o=o.concat(KE(n.serverSyncTree_,p.path,W,p.currentWriteId,p.applyLocally)),o=o.concat(Li(n.serverSyncTree_,z,!0))}else w=!0,T="nodata",o=o.concat(Li(n.serverSyncTree_,p.currentWriteId,!0))}es(n.eventQueue_,t,o),o=[],w&&(e[d].status=2,function(I){setTimeout(I,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(T),!1,null))))}ed(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)Ta(r[d]);Xm(n,n.transactionQueueTree_)}function uT(n,e){let t,r=n.transactionQueueTree_;for(t=Pe(e);t!==null&&Ia(r)===void 0;)r=Wm(r,t),e=nt(e),t=Pe(e);return r}function cT(n,e){const t=[];return hT(n,e,t),t.sort((r,o)=>r.order-o.order),t}function hT(n,e,t){const r=Ia(e);if(r)for(let o=0;o<r.length;o++)t.push(r[o]);Jh(e,o=>{hT(n,o,t)})}function ed(n,e){const t=Ia(e);if(t){let r=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[r]=t[o],r++);t.length=r,ZE(e,t.length>0?t:void 0)}Jh(e,r=>{ed(n,r)})}function dT(n,e){const t=mu(uT(n,e)),r=Wm(n.transactionQueueTree_,e);return dN(r,o=>{sp(n,o)}),sp(n,r),tT(r,o=>{sp(n,o)}),t}function sp(n,e){const t=Ia(e);if(t){const r=[];let o=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(J(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(J(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),o=o.concat(Li(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?ZE(e,void 0):t.length=a+1,es(n.eventQueue_,mu(e),o);for(let u=0;u<r.length;u++)Ta(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let o=t[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function FN(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):vn(`Invalid query segment '${t}' in query '${n}'`)}return e}const t0=function(n,e){const t=jN(n),r=t.namespace;t.domain==="firebase.com"&&Zr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Zr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Yk();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new mE(t.host,t.secure,r,o,e,"",r!==t.subdomain),path:new Xe(t.pathString)}},jN=function(n){let e="",t="",r="",o="",a="",u=!0,d="https",p=443;if(typeof n=="string"){let _=n.indexOf("//");_>=0&&(d=n.substring(0,_-1),n=n.substring(_+2));let w=n.indexOf("/");w===-1&&(w=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(w,T)),w<T&&(o=VN(n.substring(w,T)));const I=FN(n.substring(Math.min(n.length,T)));_=e.indexOf(":"),_>=0?(u=d==="https"||d==="wss",p=parseInt(e.substring(_+1),10)):_=e.length;const b=e.slice(0,_);if(b.toLowerCase()==="localhost")t="localhost";else if(b.split(".").length<=2)t=b;else{const j=e.indexOf(".");r=e.substring(0,j).toLowerCase(),t=e.substring(j+1),a=r}"ns"in I&&(a=I.ns)}return{host:e,port:p,domain:t,subdomain:r,secure:u,scheme:d,pathString:o,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,t,r,o){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+jt(this.snapshot.exportVal())}}class zN{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return J(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Jm{constructor(e,t,r,o){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=o}get key(){return Le(this._path)?null:SE(this._path)}get ref(){return new ri(this._repo,this._path)}get _queryIdentifier(){const e=jv(this._queryParams),t=Em(e);return t==="{}"?"default":t}get _queryObject(){return jv(this._queryParams)}isEqual(e){if(e=An(e),!(e instanceof Jm))return!1;const t=this._repo===e._repo,r=Cm(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+DR(this._path)}}class ri extends Jm{constructor(e,t){super(e,t,new Am,!1)}get parent(){const e=xE(this._path);return e===null?null:new ri(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class kh{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Xe(e),r=Op(this.ref,e);return new kh(this._node.getChild(t),r,ft)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,o)=>e(new kh(o,Op(this.ref,r),ft)))}hasChild(e){const t=new Xe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ip(n,e){return n=An(n),n._checkNotDeleted("ref"),e!==void 0?Op(n._root,e):n._root}function Op(n,e){return n=An(n),Pe(n._path)===null?yN("child","path",e):sT("child","path",e),new ri(n._repo,Rt(n._path,e))}function n0(n,e){n=An(n),vN("set",n._path),_N("set",e,n._path);const t=new jh;return AN(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Zm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new UN("value",this,new kh(e.snapshotNode,new ri(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new zN(this,e,t):null}matches(e){return e instanceof Zm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function HN(n,e,t,r,o){const a=new BN(t,void 0),u=new Zm(a);return PN(n._repo,n,u),()=>bN(n._repo,n,u)}function $N(n,e,t,r){return HN(n,"value",e)}HA(ri);QA(ri);/**
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
 */const WN="FIREBASE_DATABASE_EMULATOR_HOST",Lp={};let qN=!1;function GN(n,e,t,r){const o=e.lastIndexOf(":"),a=e.substring(0,o),u=ti(a);n.repoInfo_=new mE(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function KN(n,e,t,r,o){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Zr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Zt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=t0(a,o),d=u.repoInfo,p;typeof process<"u"&&Ev&&(p=Ev[WN]),p?(a=`http://${p}?ns=${d.namespace}`,u=t0(a,o),d=u.repoInfo):u.repoInfo.secure;const _=new aR(n.name,n.options,e);wN("Invalid Firebase Database URL",u),Le(u.path)||Zr("Database URL must point to the root of a Firebase Database (not including a child path).");const w=YN(d,n,_,new oR(n,t));return new XN(w,n)}function QN(n,e){const t=Lp[e];(!t||t[n.key]!==n)&&Zr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),DN(n),delete t[n.key]}function YN(n,e,t,r){let o=Lp[e.name];o||(o={},Lp[e.name]=o);let a=o[n.toURLString()];return a&&Zr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new CN(n,qN,t,r),o[n.toURLString()]=a,a}class XN{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ri(this._repo,qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(QN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Zr("Cannot call "+e+" on a deleted database.")}}function JN(n=hm(),e){const t=Bh(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=cw("database");r&&ZN(t,...r)}return t}function ZN(n,e,t,r={}){n=An(n),n._checkNotDeleted("useEmulator");const o=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(o===n._repoInternal.repoInfo_.host&&$s(r,a.repoInfo_.emulatorOptions))return;Zr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&Zr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Jc(Jc.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:fw(r.mockUserToken,n.app.options.projectId);u=new Jc(d)}ti(e)&&(om(e),am("Database",!0)),GN(a,o,r,u)}/**
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
 */function eP(n){$k(Ki),zi(new Ws("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return KN(r,o,a,t)},"PUBLIC").setMultipleInstances(!0)),Ir(Tv,Iv,n),Ir(Tv,Iv,"esm2017")}Yr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Yr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};eP();var r0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zs,fT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,C){function k(){}k.prototype=C.prototype,D.D=C.prototype,D.prototype=new k,D.prototype.constructor=D,D.C=function(A,P,L){for(var R=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)R[Re-2]=arguments[Re];return C.prototype[P].apply(A,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,C,k){k||(k=0);var A=Array(16);if(typeof C=="string")for(var P=0;16>P;++P)A[P]=C.charCodeAt(k++)|C.charCodeAt(k++)<<8|C.charCodeAt(k++)<<16|C.charCodeAt(k++)<<24;else for(P=0;16>P;++P)A[P]=C[k++]|C[k++]<<8|C[k++]<<16|C[k++]<<24;C=D.g[0],k=D.g[1],P=D.g[2];var L=D.g[3],R=C+(L^k&(P^L))+A[0]+3614090360&4294967295;C=k+(R<<7&4294967295|R>>>25),R=L+(P^C&(k^P))+A[1]+3905402710&4294967295,L=C+(R<<12&4294967295|R>>>20),R=P+(k^L&(C^k))+A[2]+606105819&4294967295,P=L+(R<<17&4294967295|R>>>15),R=k+(C^P&(L^C))+A[3]+3250441966&4294967295,k=P+(R<<22&4294967295|R>>>10),R=C+(L^k&(P^L))+A[4]+4118548399&4294967295,C=k+(R<<7&4294967295|R>>>25),R=L+(P^C&(k^P))+A[5]+1200080426&4294967295,L=C+(R<<12&4294967295|R>>>20),R=P+(k^L&(C^k))+A[6]+2821735955&4294967295,P=L+(R<<17&4294967295|R>>>15),R=k+(C^P&(L^C))+A[7]+4249261313&4294967295,k=P+(R<<22&4294967295|R>>>10),R=C+(L^k&(P^L))+A[8]+1770035416&4294967295,C=k+(R<<7&4294967295|R>>>25),R=L+(P^C&(k^P))+A[9]+2336552879&4294967295,L=C+(R<<12&4294967295|R>>>20),R=P+(k^L&(C^k))+A[10]+4294925233&4294967295,P=L+(R<<17&4294967295|R>>>15),R=k+(C^P&(L^C))+A[11]+2304563134&4294967295,k=P+(R<<22&4294967295|R>>>10),R=C+(L^k&(P^L))+A[12]+1804603682&4294967295,C=k+(R<<7&4294967295|R>>>25),R=L+(P^C&(k^P))+A[13]+4254626195&4294967295,L=C+(R<<12&4294967295|R>>>20),R=P+(k^L&(C^k))+A[14]+2792965006&4294967295,P=L+(R<<17&4294967295|R>>>15),R=k+(C^P&(L^C))+A[15]+1236535329&4294967295,k=P+(R<<22&4294967295|R>>>10),R=C+(P^L&(k^P))+A[1]+4129170786&4294967295,C=k+(R<<5&4294967295|R>>>27),R=L+(k^P&(C^k))+A[6]+3225465664&4294967295,L=C+(R<<9&4294967295|R>>>23),R=P+(C^k&(L^C))+A[11]+643717713&4294967295,P=L+(R<<14&4294967295|R>>>18),R=k+(L^C&(P^L))+A[0]+3921069994&4294967295,k=P+(R<<20&4294967295|R>>>12),R=C+(P^L&(k^P))+A[5]+3593408605&4294967295,C=k+(R<<5&4294967295|R>>>27),R=L+(k^P&(C^k))+A[10]+38016083&4294967295,L=C+(R<<9&4294967295|R>>>23),R=P+(C^k&(L^C))+A[15]+3634488961&4294967295,P=L+(R<<14&4294967295|R>>>18),R=k+(L^C&(P^L))+A[4]+3889429448&4294967295,k=P+(R<<20&4294967295|R>>>12),R=C+(P^L&(k^P))+A[9]+568446438&4294967295,C=k+(R<<5&4294967295|R>>>27),R=L+(k^P&(C^k))+A[14]+3275163606&4294967295,L=C+(R<<9&4294967295|R>>>23),R=P+(C^k&(L^C))+A[3]+4107603335&4294967295,P=L+(R<<14&4294967295|R>>>18),R=k+(L^C&(P^L))+A[8]+1163531501&4294967295,k=P+(R<<20&4294967295|R>>>12),R=C+(P^L&(k^P))+A[13]+2850285829&4294967295,C=k+(R<<5&4294967295|R>>>27),R=L+(k^P&(C^k))+A[2]+4243563512&4294967295,L=C+(R<<9&4294967295|R>>>23),R=P+(C^k&(L^C))+A[7]+1735328473&4294967295,P=L+(R<<14&4294967295|R>>>18),R=k+(L^C&(P^L))+A[12]+2368359562&4294967295,k=P+(R<<20&4294967295|R>>>12),R=C+(k^P^L)+A[5]+4294588738&4294967295,C=k+(R<<4&4294967295|R>>>28),R=L+(C^k^P)+A[8]+2272392833&4294967295,L=C+(R<<11&4294967295|R>>>21),R=P+(L^C^k)+A[11]+1839030562&4294967295,P=L+(R<<16&4294967295|R>>>16),R=k+(P^L^C)+A[14]+4259657740&4294967295,k=P+(R<<23&4294967295|R>>>9),R=C+(k^P^L)+A[1]+2763975236&4294967295,C=k+(R<<4&4294967295|R>>>28),R=L+(C^k^P)+A[4]+1272893353&4294967295,L=C+(R<<11&4294967295|R>>>21),R=P+(L^C^k)+A[7]+4139469664&4294967295,P=L+(R<<16&4294967295|R>>>16),R=k+(P^L^C)+A[10]+3200236656&4294967295,k=P+(R<<23&4294967295|R>>>9),R=C+(k^P^L)+A[13]+681279174&4294967295,C=k+(R<<4&4294967295|R>>>28),R=L+(C^k^P)+A[0]+3936430074&4294967295,L=C+(R<<11&4294967295|R>>>21),R=P+(L^C^k)+A[3]+3572445317&4294967295,P=L+(R<<16&4294967295|R>>>16),R=k+(P^L^C)+A[6]+76029189&4294967295,k=P+(R<<23&4294967295|R>>>9),R=C+(k^P^L)+A[9]+3654602809&4294967295,C=k+(R<<4&4294967295|R>>>28),R=L+(C^k^P)+A[12]+3873151461&4294967295,L=C+(R<<11&4294967295|R>>>21),R=P+(L^C^k)+A[15]+530742520&4294967295,P=L+(R<<16&4294967295|R>>>16),R=k+(P^L^C)+A[2]+3299628645&4294967295,k=P+(R<<23&4294967295|R>>>9),R=C+(P^(k|~L))+A[0]+4096336452&4294967295,C=k+(R<<6&4294967295|R>>>26),R=L+(k^(C|~P))+A[7]+1126891415&4294967295,L=C+(R<<10&4294967295|R>>>22),R=P+(C^(L|~k))+A[14]+2878612391&4294967295,P=L+(R<<15&4294967295|R>>>17),R=k+(L^(P|~C))+A[5]+4237533241&4294967295,k=P+(R<<21&4294967295|R>>>11),R=C+(P^(k|~L))+A[12]+1700485571&4294967295,C=k+(R<<6&4294967295|R>>>26),R=L+(k^(C|~P))+A[3]+2399980690&4294967295,L=C+(R<<10&4294967295|R>>>22),R=P+(C^(L|~k))+A[10]+4293915773&4294967295,P=L+(R<<15&4294967295|R>>>17),R=k+(L^(P|~C))+A[1]+2240044497&4294967295,k=P+(R<<21&4294967295|R>>>11),R=C+(P^(k|~L))+A[8]+1873313359&4294967295,C=k+(R<<6&4294967295|R>>>26),R=L+(k^(C|~P))+A[15]+4264355552&4294967295,L=C+(R<<10&4294967295|R>>>22),R=P+(C^(L|~k))+A[6]+2734768916&4294967295,P=L+(R<<15&4294967295|R>>>17),R=k+(L^(P|~C))+A[13]+1309151649&4294967295,k=P+(R<<21&4294967295|R>>>11),R=C+(P^(k|~L))+A[4]+4149444226&4294967295,C=k+(R<<6&4294967295|R>>>26),R=L+(k^(C|~P))+A[11]+3174756917&4294967295,L=C+(R<<10&4294967295|R>>>22),R=P+(C^(L|~k))+A[2]+718787259&4294967295,P=L+(R<<15&4294967295|R>>>17),R=k+(L^(P|~C))+A[9]+3951481745&4294967295,D.g[0]=D.g[0]+C&4294967295,D.g[1]=D.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,D.g[2]=D.g[2]+P&4294967295,D.g[3]=D.g[3]+L&4294967295}r.prototype.u=function(D,C){C===void 0&&(C=D.length);for(var k=C-this.blockSize,A=this.B,P=this.h,L=0;L<C;){if(P==0)for(;L<=k;)o(this,D,L),L+=this.blockSize;if(typeof D=="string"){for(;L<C;)if(A[P++]=D.charCodeAt(L++),P==this.blockSize){o(this,A),P=0;break}}else for(;L<C;)if(A[P++]=D[L++],P==this.blockSize){o(this,A),P=0;break}}this.h=P,this.o+=C},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var C=1;C<D.length-8;++C)D[C]=0;var k=8*this.o;for(C=D.length-8;C<D.length;++C)D[C]=k&255,k/=256;for(this.u(D),D=Array(16),C=k=0;4>C;++C)for(var A=0;32>A;A+=8)D[k++]=this.g[C]>>>A&255;return D};function a(D,C){var k=d;return Object.prototype.hasOwnProperty.call(k,D)?k[D]:k[D]=C(D)}function u(D,C){this.h=C;for(var k=[],A=!0,P=D.length-1;0<=P;P--){var L=D[P]|0;A&&L==C||(k[P]=L,A=!1)}this.g=k}var d={};function p(D){return-128<=D&&128>D?a(D,function(C){return new u([C|0],0>C?-1:0)}):new u([D|0],0>D?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return z(_(-D));for(var C=[],k=1,A=0;D>=k;A++)C[A]=D/k|0,k*=4294967296;return new u(C,0)}function w(D,C){if(D.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(D.charAt(0)=="-")return z(w(D.substring(1),C));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=_(Math.pow(C,8)),A=T,P=0;P<D.length;P+=8){var L=Math.min(8,D.length-P),R=parseInt(D.substring(P,P+L),C);8>L?(L=_(Math.pow(C,L)),A=A.j(L).add(_(R))):(A=A.j(k),A=A.add(_(R)))}return A}var T=p(0),I=p(1),b=p(16777216);n=u.prototype,n.m=function(){if(M(this))return-z(this).m();for(var D=0,C=1,k=0;k<this.g.length;k++){var A=this.i(k);D+=(0<=A?A:4294967296+A)*C,C*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(j(this))return"0";if(M(this))return"-"+z(this).toString(D);for(var C=_(Math.pow(D,6)),k=this,A="";;){var P=re(k,C).g;k=ae(k,P.j(C));var L=((0<k.g.length?k.g[0]:k.h)>>>0).toString(D);if(k=P,j(k))return L+A;for(;6>L.length;)L="0"+L;A=L+A}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function j(D){if(D.h!=0)return!1;for(var C=0;C<D.g.length;C++)if(D.g[C]!=0)return!1;return!0}function M(D){return D.h==-1}n.l=function(D){return D=ae(this,D),M(D)?-1:j(D)?0:1};function z(D){for(var C=D.g.length,k=[],A=0;A<C;A++)k[A]=~D.g[A];return new u(k,~D.h).add(I)}n.abs=function(){return M(this)?z(this):this},n.add=function(D){for(var C=Math.max(this.g.length,D.g.length),k=[],A=0,P=0;P<=C;P++){var L=A+(this.i(P)&65535)+(D.i(P)&65535),R=(L>>>16)+(this.i(P)>>>16)+(D.i(P)>>>16);A=R>>>16,L&=65535,R&=65535,k[P]=R<<16|L}return new u(k,k[k.length-1]&-2147483648?-1:0)};function ae(D,C){return D.add(z(C))}n.j=function(D){if(j(this)||j(D))return T;if(M(this))return M(D)?z(this).j(z(D)):z(z(this).j(D));if(M(D))return z(this.j(z(D)));if(0>this.l(b)&&0>D.l(b))return _(this.m()*D.m());for(var C=this.g.length+D.g.length,k=[],A=0;A<2*C;A++)k[A]=0;for(A=0;A<this.g.length;A++)for(var P=0;P<D.g.length;P++){var L=this.i(A)>>>16,R=this.i(A)&65535,Re=D.i(P)>>>16,Se=D.i(P)&65535;k[2*A+2*P]+=R*Se,W(k,2*A+2*P),k[2*A+2*P+1]+=L*Se,W(k,2*A+2*P+1),k[2*A+2*P+1]+=R*Re,W(k,2*A+2*P+1),k[2*A+2*P+2]+=L*Re,W(k,2*A+2*P+2)}for(A=0;A<C;A++)k[A]=k[2*A+1]<<16|k[2*A];for(A=C;A<2*C;A++)k[A]=0;return new u(k,0)};function W(D,C){for(;(D[C]&65535)!=D[C];)D[C+1]+=D[C]>>>16,D[C]&=65535,C++}function ne(D,C){this.g=D,this.h=C}function re(D,C){if(j(C))throw Error("division by zero");if(j(D))return new ne(T,T);if(M(D))return C=re(z(D),C),new ne(z(C.g),z(C.h));if(M(C))return C=re(D,z(C)),new ne(z(C.g),C.h);if(30<D.g.length){if(M(D)||M(C))throw Error("slowDivide_ only works with positive integers.");for(var k=I,A=C;0>=A.l(D);)k=fe(k),A=fe(A);var P=de(k,1),L=de(A,1);for(A=de(A,2),k=de(k,2);!j(A);){var R=L.add(A);0>=R.l(D)&&(P=P.add(k),L=R),A=de(A,1),k=de(k,1)}return C=ae(D,P.j(C)),new ne(P,C)}for(P=T;0<=D.l(C);){for(k=Math.max(1,Math.floor(D.m()/C.m())),A=Math.ceil(Math.log(k)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),L=_(k),R=L.j(C);M(R)||0<R.l(D);)k-=A,L=_(k),R=L.j(C);j(L)&&(L=I),P=P.add(L),D=ae(D,R)}return new ne(P,D)}n.A=function(D){return re(this,D).h},n.and=function(D){for(var C=Math.max(this.g.length,D.g.length),k=[],A=0;A<C;A++)k[A]=this.i(A)&D.i(A);return new u(k,this.h&D.h)},n.or=function(D){for(var C=Math.max(this.g.length,D.g.length),k=[],A=0;A<C;A++)k[A]=this.i(A)|D.i(A);return new u(k,this.h|D.h)},n.xor=function(D){for(var C=Math.max(this.g.length,D.g.length),k=[],A=0;A<C;A++)k[A]=this.i(A)^D.i(A);return new u(k,this.h^D.h)};function fe(D){for(var C=D.g.length+1,k=[],A=0;A<C;A++)k[A]=D.i(A)<<1|D.i(A-1)>>>31;return new u(k,D.h)}function de(D,C){var k=C>>5;C%=32;for(var A=D.g.length-k,P=[],L=0;L<A;L++)P[L]=0<C?D.i(L+k)>>>C|D.i(L+k+1)<<32-C:D.i(L+k);return new u(P,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fT=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=_,u.fromString=w,zs=u}).apply(typeof r0<"u"?r0:typeof self<"u"?self:typeof window<"u"?window:{});var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pT,Al,mT,eh,Mp,gT,_T,yT;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,y){return c==Array.prototype||c==Object.prototype||(c[m]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof zc=="object"&&zc];for(var m=0;m<c.length;++m){var y=c[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function o(c,m){if(m)e:{var y=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var F=c[S];if(!(F in y))break e;y=y[F]}c=c[c.length-1],S=y[c],m=m(S),m!=S&&m!=null&&e(y,c,{configurable:!0,writable:!0,value:m})}}function a(c,m){c instanceof String&&(c+="");var y=0,S=!1,F={next:function(){if(!S&&y<c.length){var $=y++;return{value:m($,c[$]),done:!1}}return S=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(c){return c||function(){return a(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function _(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function w(c,m,y){return c.call.apply(c.bind,arguments)}function T(c,m,y){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,S),c.apply(m,F)}}return function(){return c.apply(m,arguments)}}function I(c,m,y){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,I.apply(null,arguments)}function b(c,m){var y=Array.prototype.slice.call(arguments,1);return function(){var S=y.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function j(c,m){function y(){}y.prototype=m.prototype,c.aa=m.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(S,F,$){for(var Z=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)Z[Ke-2]=arguments[Ke];return m.prototype[F].apply(S,Z)}}function M(c){const m=c.length;if(0<m){const y=Array(m);for(let S=0;S<m;S++)y[S]=c[S];return y}return[]}function z(c,m){for(let y=1;y<arguments.length;y++){const S=arguments[y];if(p(S)){const F=c.length||0,$=S.length||0;c.length=F+$;for(let Z=0;Z<$;Z++)c[F+Z]=S[Z]}else c.push(S)}}class ae{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function W(c){return/^[\s\xa0]*$/.test(c)}function ne(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function re(c){return re[" "](c),c}re[" "]=function(){};var fe=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function de(c,m,y){for(const S in c)m.call(y,c[S],S,c)}function D(c,m){for(const y in c)m.call(void 0,c[y],y,c)}function C(c){const m={};for(const y in c)m[y]=c[y];return m}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(c,m){let y,S;for(let F=1;F<arguments.length;F++){S=arguments[F];for(y in S)c[y]=S[y];for(let $=0;$<k.length;$++)y=k[$],Object.prototype.hasOwnProperty.call(S,y)&&(c[y]=S[y])}}function P(c){var m=1;c=c.split(":");const y=[];for(;0<m&&c.length;)y.push(c.shift()),m--;return c.length&&y.push(c.join(":")),y}function L(c){d.setTimeout(()=>{throw c},0)}function R(){var c=ge;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class Re{constructor(){this.h=this.g=null}add(m,y){const S=Se.get();S.set(m,y),this.h?this.h.next=S:this.g=S,this.h=S}}var Se=new ae(()=>new Pt,c=>c.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,te=!1,ge=new Re,ie=()=>{const c=d.Promise.resolve(void 0);Ge=()=>{c.then(V)}};var V=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(y){L(y)}var m=Se;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}te=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var ke=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,m),d.removeEventListener("test",y,m)}catch{}return c}();function Ae(c,m){if(pe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(fe){e:{try{re(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else y=="mouseover"?m=c.fromElement:y=="mouseout"&&(m=c.toElement);this.relatedTarget=m,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ae.aa.h.call(this)}}j(Ae,pe);var Ve={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var $e="closure_listenable_"+(1e6*Math.random()|0),We=0;function Je(c,m,y,S,F){this.listener=c,this.proxy=null,this.src=m,this.type=y,this.capture=!!S,this.ha=F,this.key=++We,this.da=this.fa=!1}function bt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ar(c){this.src=c,this.g={},this.h=0}Ar.prototype.add=function(c,m,y,S,F){var $=c.toString();c=this.g[$],c||(c=this.g[$]=[],this.h++);var Z=is(c,m,S,F);return-1<Z?(m=c[Z],y||(m.fa=!1)):(m=new Je(m,this.src,$,!!S,F),m.fa=y,c.push(m)),m};function Ji(c,m){var y=m.type;if(y in c.g){var S=c.g[y],F=Array.prototype.indexOf.call(S,m,void 0),$;($=0<=F)&&Array.prototype.splice.call(S,F,1),$&&(bt(m),c.g[y].length==0&&(delete c.g[y],c.h--))}}function is(c,m,y,S){for(var F=0;F<c.length;++F){var $=c[F];if(!$.da&&$.listener==m&&$.capture==!!y&&$.ha==S)return F}return-1}var si="closure_lm_"+(1e6*Math.random()|0),Zi={};function ka(c,m,y,S,F){if(Array.isArray(m)){for(var $=0;$<m.length;$++)ka(c,m[$],y,S,F);return null}return y=Na(y),c&&c[$e]?c.K(m,y,_(S)?!!S.capture:!1,F):Ra(c,m,y,!1,S,F)}function Ra(c,m,y,S,F,$){if(!m)throw Error("Invalid event type");var Z=_(F)?!!F.capture:!!F,Ke=to(c);if(Ke||(c[si]=Ke=new Ar(c)),y=Ke.add(m,y,S,Z,$),y.proxy)return y;if(S=Tu(),y.proxy=S,S.src=c,S.listener=y,c.addEventListener)ke||(F=Z),F===void 0&&(F=!1),c.addEventListener(m.toString(),S,F);else if(c.attachEvent)c.attachEvent(Pr(m.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Tu(){function c(y){return m.call(c.src,c.listener,y)}const m=Aa;return c}function eo(c,m,y,S,F){if(Array.isArray(m))for(var $=0;$<m.length;$++)eo(c,m[$],y,S,F);else S=_(S)?!!S.capture:!!S,y=Na(y),c&&c[$e]?(c=c.i,m=String(m).toString(),m in c.g&&($=c.g[m],y=is($,y,S,F),-1<y&&(bt($[y]),Array.prototype.splice.call($,y,1),$.length==0&&(delete c.g[m],c.h--)))):c&&(c=to(c))&&(m=c.g[m.toString()],c=-1,m&&(c=is(m,y,S,F)),(y=-1<c?m[c]:null)&&Nr(y))}function Nr(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[$e])Ji(m.i,c);else{var y=c.type,S=c.proxy;m.removeEventListener?m.removeEventListener(y,S,c.capture):m.detachEvent?m.detachEvent(Pr(y),S):m.addListener&&m.removeListener&&m.removeListener(S),(y=to(m))?(Ji(y,c),y.h==0&&(y.src=null,m[si]=null)):bt(c)}}}function Pr(c){return c in Zi?Zi[c]:Zi[c]="on"+c}function Aa(c,m){if(c.da)c=!0;else{m=new Ae(m,this);var y=c.listener,S=c.ha||c.src;c.fa&&Nr(c),c=y.call(S,m)}return c}function to(c){return c=c[si],c instanceof Ar?c:null}var no="__closure_events_fn_"+(1e9*Math.random()>>>0);function Na(c){return typeof c=="function"?c:(c[no]||(c[no]=function(m){return c.handleEvent(m)}),c[no])}function It(){q.call(this),this.i=new Ar(this),this.M=this,this.F=null}j(It,q),It.prototype[$e]=!0,It.prototype.removeEventListener=function(c,m,y,S){eo(this,c,m,y,S)};function St(c,m){var y,S=c.F;if(S)for(y=[];S;S=S.F)y.push(S);if(c=c.M,S=m.type||m,typeof m=="string")m=new pe(m,c);else if(m instanceof pe)m.target=m.target||c;else{var F=m;m=new pe(S,c),A(m,F)}if(F=!0,y)for(var $=y.length-1;0<=$;$--){var Z=m.g=y[$];F=br(Z,S,!0,m)&&F}if(Z=m.g=c,F=br(Z,S,!0,m)&&F,F=br(Z,S,!1,m)&&F,y)for($=0;$<y.length;$++)Z=m.g=y[$],F=br(Z,S,!1,m)&&F}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var y=c.g[m],S=0;S<y.length;S++)bt(y[S]);delete c.g[m],c.h--}}this.F=null},It.prototype.K=function(c,m,y,S){return this.i.add(String(c),m,!1,y,S)},It.prototype.L=function(c,m,y,S){return this.i.add(String(c),m,!0,y,S)};function br(c,m,y,S){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,$=0;$<m.length;++$){var Z=m[$];if(Z&&!Z.da&&Z.capture==y){var Ke=Z.listener,Ct=Z.ha||Z.src;Z.fa&&Ji(c.i,Z),F=Ke.call(Ct,S)!==!1&&F}}return F&&!S.defaultPrevented}function Pa(c,m,y){if(typeof c=="function")y&&(c=I(c,y));else if(c&&typeof c.handleEvent=="function")c=I(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(c,m||0)}function os(c){c.g=Pa(()=>{c.g=null,c.i&&(c.i=!1,os(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class ii extends q{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:os(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(c){q.call(this),this.h=c,this.g={}}j(oi,q);var ba=[];function Da(c){de(c.g,function(m,y){this.g.hasOwnProperty(y)&&Nr(m)},c),c.g={}}oi.prototype.N=function(){oi.aa.N.call(this),Da(this)},oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oa=d.JSON.stringify,La=d.JSON.parse,Ma=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function ai(){}ai.prototype.h=null;function ro(c){return c.h||(c.h=c.i())}function so(){}var Nn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lr(){pe.call(this,"d")}j(lr,pe);function io(){pe.call(this,"c")}j(io,pe);var ur={},Va=null;function li(){return Va=Va||new It}ur.La="serverreachability";function Fa(c){pe.call(this,ur.La,c)}j(Fa,pe);function Dr(c){const m=li();St(m,new Fa(m))}ur.STAT_EVENT="statevent";function ja(c,m){pe.call(this,ur.STAT_EVENT,c),this.stat=m}j(ja,pe);function pt(c){const m=li();St(m,new ja(m,c))}ur.Ma="timingevent";function oo(c,m){pe.call(this,ur.Ma,c),this.size=m}j(oo,pe);function zn(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function ui(){this.g=!0}ui.prototype.xa=function(){this.g=!1};function ci(c,m,y,S,F,$){c.info(function(){if(c.g)if($)for(var Z="",Ke=$.split("&"),Ct=0;Ct<Ke.length;Ct++){var Fe=Ke[Ct].split("=");if(1<Fe.length){var Dt=Fe[0];Fe=Fe[1];var yt=Dt.split("_");Z=2<=yt.length&&yt[1]=="type"?Z+(Dt+"="+Fe+"&"):Z+(Dt+"=redacted&")}}else Z=null;else Z=$;return"XMLHTTP REQ ("+S+") [attempt "+F+"]: "+m+`
`+y+`
`+Z})}function ao(c,m,y,S,F,$,Z){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+F+"]: "+m+`
`+y+`
`+$+" "+Z})}function Bn(c,m,y,S){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+fd(c,y)+(S?" "+S:"")})}function Ua(c,m){c.info(function(){return"TIMEOUT: "+m})}ui.prototype.info=function(){};function fd(c,m){if(!c.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var S=y[c];if(!(2>S.length)){var F=S[1];if(Array.isArray(F)&&!(1>F.length)){var $=F[0];if($!="noop"&&$!="stop"&&$!="close")for(var Z=1;Z<F.length;Z++)F[Z]=""}}}}return Oa(y)}catch{return m}}var lo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Iu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hn;function hi(){}j(hi,ai),hi.prototype.g=function(){return new XMLHttpRequest},hi.prototype.i=function(){return{}},Hn=new hi;function $n(c,m,y,S){this.j=c,this.i=m,this.l=y,this.R=S||1,this.U=new oi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Su}function Su(){this.i=null,this.g="",this.h=!1}var za={},uo={};function co(c,m,y){c.L=1,c.v=hs(Tn(m)),c.m=y,c.P=!0,Ba(c,null)}function Ba(c,m){c.F=Date.now(),Ze(c),c.A=Tn(c.v);var y=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),fs(y.i,"t",S),c.C=0,y=c.j.J,c.h=new Su,c.g=Bu(c.j,y?m:null,!c.m),0<c.O&&(c.M=new ii(I(c.Y,c,c.g),c.O)),m=c.U,y=c.g,S=c.ca;var F="readystatechange";Array.isArray(F)||(F&&(ba[0]=F.toString()),F=ba);for(var $=0;$<F.length;$++){var Z=ka(y,F[$],S||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=c.H?C(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),Dr(),ci(c.i,c.u,c.A,c.l,c.R,c.m)}$n.prototype.ca=function(c){c=c.target;const m=this.M;m&&cn(c)==3?m.j():this.Y(c)},$n.prototype.Y=function(c){try{if(c==this.g)e:{const yt=cn(this.g);var m=this.g.Ba();const Dn=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Ka(this.g)))){this.J||yt!=4||m==7||(m==8||0>=Dn?Dr(3):Dr(2)),di(this);var y=this.g.Z();this.X=y;t:if(Cu(this)){var S=Ka(this.g);c="";var F=S.length,$=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pn(this),as(this);var Z="";break t}this.h.i=new d.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,c+=this.h.i.decode(S[m],{stream:!($&&m==F-1)});S.length=0,this.h.g+=c,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,ao(this.i,this.u,this.A,this.l,this.R,yt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,Ct=this.g;if((Ke=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Ke)){var Fe=Ke;break t}}Fe=null}if(y=Fe)Bn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ha(this,y);else{this.o=!1,this.s=3,pt(12),Pn(this),as(this);break e}}if(this.P){y=!0;let Sn;for(;!this.J&&this.C<Z.length;)if(Sn=pd(this,Z),Sn==uo){yt==4&&(this.s=4,pt(14),y=!1),Bn(this.i,this.l,null,"[Incomplete Response]");break}else if(Sn==za){this.s=4,pt(15),Bn(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else Bn(this.i,this.l,Sn,null),Ha(this,Sn);if(Cu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||Z.length!=0||this.h.h||(this.s=1,pt(16),y=!1),this.o=this.o&&y,!y)Bn(this.i,this.l,Z,"[Invalid Chunked Response]"),Pn(this),as(this);else if(0<Z.length&&!this.W){this.W=!0;var Dt=this.j;Dt.g==this&&Dt.ba&&!Dt.M&&(Dt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),Ya(Dt),Dt.M=!0,pt(11))}}else Bn(this.i,this.l,Z,null),Ha(this,Z);yt==4&&Pn(this),this.o&&!this.J&&(yt==4?To(this.j,this):(this.o=!1,Ze(this)))}else _o(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Pn(this),as(this)}}}catch{}finally{}};function Cu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function pd(c,m){var y=c.C,S=m.indexOf(`
`,y);return S==-1?uo:(y=Number(m.substring(y,S)),isNaN(y)?za:(S+=1,S+y>m.length?uo:(m=m.slice(S,S+y),c.C=S+y,m)))}$n.prototype.cancel=function(){this.J=!0,Pn(this)};function Ze(c){c.S=Date.now()+c.I,xu(c,c.I)}function xu(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=zn(I(c.ba,c),m)}function di(c){c.B&&(d.clearTimeout(c.B),c.B=null)}$n.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ua(this.i,this.A),this.L!=2&&(Dr(),pt(17)),Pn(this),this.s=2,as(this)):xu(this,this.S-c)};function as(c){c.j.G==0||c.J||To(c.j,c)}function Pn(c){di(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,Da(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function Ha(c,m){try{var y=c.j;if(y.G!=0&&(y.g==c||nn(y.h,c))){if(!c.K&&nn(y.h,c)&&y.G==3){try{var S=y.Da.g.parse(m)}catch{S=null}if(Array.isArray(S)&&S.length==3){var F=S;if(F[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)Eo(y),Qn(y);else break e;wo(y),pt(18)}}else y.za=F[1],0<y.za-y.T&&37500>F[2]&&y.F&&y.v==0&&!y.C&&(y.C=zn(I(y.Za,y),6e3));if(1>=Ru(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Fr(y,11)}else if((c.K||y.g==c)&&Eo(y),!W(m))for(F=y.Da.g.parse(m),m=0;m<F.length;m++){let Fe=F[m];if(y.T=Fe[0],Fe=Fe[1],y.G==2)if(Fe[0]=="c"){y.K=Fe[1],y.ia=Fe[2];const Dt=Fe[3];Dt!=null&&(y.la=Dt,y.j.info("VER="+y.la));const yt=Fe[4];yt!=null&&(y.Aa=yt,y.j.info("SVER="+y.Aa));const Dn=Fe[5];Dn!=null&&typeof Dn=="number"&&0<Dn&&(S=1.5*Dn,y.L=S,y.j.info("backChannelRequestTimeoutMs_="+S)),S=y;const Sn=c.g;if(Sn){const vi=Sn.g?Sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vi){var $=S.h;$.g||vi.indexOf("spdy")==-1&&vi.indexOf("quic")==-1&&vi.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&($a($,$.h),$.h=null))}if(S.D){const So=Sn.g?Sn.g.getResponseHeader("X-HTTP-Session-Id"):null;So&&(S.ya=So,Ye(S.I,S.D,So))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),S=y;var Z=c;if(S.qa=zu(S,S.J?S.ia:null,S.W),Z.K){Au(S.h,Z);var Ke=Z,Ct=S.L;Ct&&(Ke.I=Ct),Ke.B&&(di(Ke),Ze(Ke)),S.g=Z}else yi(S);0<y.i.length&&fr(y)}else Fe[0]!="stop"&&Fe[0]!="close"||Fr(y,7);else y.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Fr(y,7):zt(y):Fe[0]!="noop"&&y.l&&y.l.ta(Fe),y.v=0)}}Dr(4)}catch{}}var ku=class{constructor(c,m){this.g=c,this.map=m}};function fi(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function En(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ru(c){return c.h?1:c.g?c.g.size:0}function nn(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function $a(c,m){c.g?c.g.add(m):c.h=m}function Au(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}fi.prototype.cancel=function(){if(this.i=Nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Nu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const y of c.g.values())m=m.concat(y.D);return m}return M(c.i)}function ho(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var m=[],y=c.length,S=0;S<y;S++)m.push(c[S]);return m}m=[],y=0;for(S in c)m[y++]=c[S];return m}function fo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var m=[];c=c.length;for(var y=0;y<c;y++)m.push(y);return m}m=[],y=0;for(const S in c)m[y++]=S;return m}}}function ls(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var y=fo(c),S=ho(c),F=S.length,$=0;$<F;$++)m.call(void 0,S[$],y&&y[$],c)}var pi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function md(c,m){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var S=c[y].indexOf("="),F=null;if(0<=S){var $=c[y].substring(0,S);F=c[y].substring(S+1)}else $=c[y];m($,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Or(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Or){this.h=c.h,mi(this,c.j),this.o=c.o,this.g=c.g,us(this,c.s),this.l=c.l;var m=c.i,y=new cr;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),cs(this,y),this.m=c.m}else c&&(m=String(c).match(pi))?(this.h=!1,mi(this,m[1]||"",!0),this.o=Me(m[2]||""),this.g=Me(m[3]||"",!0),us(this,m[4]),this.l=Me(m[5]||"",!0),cs(this,m[6]||"",!0),this.m=Me(m[7]||"")):(this.h=!1,this.i=new cr(null,this.h))}Or.prototype.toString=function(){var c=[],m=this.j;m&&c.push(ds(m,po,!0),":");var y=this.g;return(y||m=="file")&&(c.push("//"),(m=this.o)&&c.push(ds(m,po,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(ds(y,y.charAt(0)=="/"?Du:bu,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",ds(y,Wa)),c.join("")};function Tn(c){return new Or(c)}function mi(c,m,y){c.j=y?Me(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function us(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function cs(c,m,y){m instanceof cr?(c.i=m,hr(c.i,c.h)):(y||(m=ds(m,Ou)),c.i=new cr(m,c.h))}function Ye(c,m,y){c.i.set(m,y)}function hs(c){return Ye(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Me(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ds(c,m,y){return typeof c=="string"?(c=encodeURI(c).replace(m,Pu),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Pu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var po=/[#\/\?@]/g,bu=/[#\?:]/g,Du=/[#\?]/g,Ou=/[#\?@]/g,Wa=/#/g;function cr(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function Ut(c){c.g||(c.g=new Map,c.h=0,c.i&&md(c.i,function(m,y){c.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}n=cr.prototype,n.add=function(c,m){Ut(this),this.i=null,c=bn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(m),this.h+=1,this};function Wn(c,m){Ut(c),m=bn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function qn(c,m){return Ut(c),m=bn(c,m),c.g.has(m)}n.forEach=function(c,m){Ut(this),this.g.forEach(function(y,S){y.forEach(function(F){c.call(m,F,S,this)},this)},this)},n.na=function(){Ut(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let S=0;S<m.length;S++){const F=c[S];for(let $=0;$<F.length;$++)y.push(m[S])}return y},n.V=function(c){Ut(this);let m=[];if(typeof c=="string")qn(this,c)&&(m=m.concat(this.g.get(bn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)m=m.concat(c[y])}return m},n.set=function(c,m){return Ut(this),this.i=null,c=bn(this,c),qn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},n.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function fs(c,m,y){Wn(c,m),0<y.length&&(c.i=null,c.g.set(bn(c,m),M(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var S=m[y];const $=encodeURIComponent(String(S)),Z=this.V(S);for(S=0;S<Z.length;S++){var F=$;Z[S]!==""&&(F+="="+encodeURIComponent(String(Z[S]))),c.push(F)}}return this.i=c.join("&")};function bn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function hr(c,m){m&&!c.j&&(Ut(c),c.i=null,c.g.forEach(function(y,S){var F=S.toLowerCase();S!=F&&(Wn(this,S),fs(this,F,y))},c)),c.j=m}function gd(c,m){const y=new ui;if(d.Image){const S=new Image;S.onload=b(un,y,"TestLoadImage: loaded",!0,m,S),S.onerror=b(un,y,"TestLoadImage: error",!1,m,S),S.onabort=b(un,y,"TestLoadImage: abort",!1,m,S),S.ontimeout=b(un,y,"TestLoadImage: timeout",!1,m,S),d.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else m(!1)}function Lu(c,m){const y=new ui,S=new AbortController,F=setTimeout(()=>{S.abort(),un(y,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:S.signal}).then($=>{clearTimeout(F),$.ok?un(y,"TestPingServer: ok",!0,m):un(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),un(y,"TestPingServer: error",!1,m)})}function un(c,m,y,S,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),S(y)}catch{}}function _d(){this.g=new Ma}function Mu(c,m,y){const S=y||"";try{ls(c,function(F,$){let Z=F;_(F)&&(Z=Oa(F)),m.push(S+$+"="+encodeURIComponent(Z))})}catch(F){throw m.push(S+"type="+encodeURIComponent("_badmap")),F}}function Lr(c){this.l=c.Ub||null,this.j=c.eb||!1}j(Lr,ai),Lr.prototype.g=function(){return new gi(this.l,this.j)},Lr.prototype.i=function(c){return function(){return c}}({});function gi(c,m){It.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(gi,It),n=gi.prototype,n.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,Kn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gn(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Kn(this)),this.g&&(this.readyState=3,Kn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vu(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vu(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Gn(this):Kn(this),this.readyState==3&&Vu(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Gn(this))},n.Qa=function(c){this.g&&(this.response=c,Gn(this))},n.ga=function(){this.g&&Gn(this)};function Gn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Kn(c)}n.setRequestHeader=function(c,m){this.u.append(c,m)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=m.next();return c.join(`\r
`)};function Kn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Mr(c){let m="";return de(c,function(y,S){m+=S,m+=":",m+=y,m+=`\r
`}),m}function ps(c,m,y){e:{for(S in y){var S=!1;break e}S=!0}S||(y=Mr(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Ye(c,m,y))}function ot(c){It.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(ot,It);var yd=/^https?$/i,qa=["POST","PUT"];n=ot.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,m,y,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hn.g(),this.v=this.o?ro(this.o):ro(Hn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch($){_i(this,$);return}if(c=y||"",y=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var F in S)y.set(F,S[F]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const $ of S.keys())y.set($,S.get($));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(y.keys()).find($=>$.toLowerCase()=="content-type"),F=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(qa,m,void 0))||S||F||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,Z]of y)this.g.setRequestHeader($,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{go(this),this.u=!0,this.g.send(c),this.u=!1}catch($){_i(this,$)}};function _i(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,mo(c),In(c)}function mo(c){c.A||(c.A=!0,St(c,"complete"),St(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,St(this,"complete"),St(this,"abort"),In(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),In(this,!0)),ot.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ga(this):this.bb())},n.bb=function(){Ga(this)};function Ga(c){if(c.h&&typeof u<"u"&&(!c.v[1]||cn(c)!=4||c.Z()!=2)){if(c.u&&cn(c)==4)Pa(c.Ea,0,c);else if(St(c,"readystatechange"),cn(c)==4){c.h=!1;try{const Z=c.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var S;if(S=Z===0){var F=String(c.D).match(pi)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),S=!yd.test(F?F.toLowerCase():"")}y=S}if(y)St(c,"complete"),St(c,"success");else{c.m=6;try{var $=2<cn(c)?c.g.statusText:""}catch{$=""}c.l=$+" ["+c.Z()+"]",mo(c)}}finally{In(c)}}}}function In(c,m){if(c.g){go(c);const y=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||St(c,"ready");try{y.onreadystatechange=S}catch{}}}function go(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function cn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),La(m)}};function Ka(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function _o(c){const m={};c=(c.g&&2<=cn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(W(c[S]))continue;var y=P(c[S]);const F=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const $=m[F]||[];m[F]=$,$.push(y)}D(m,function(S){return S.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function dr(c,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||m}function Qa(c){this.Aa=0,this.i=[],this.j=new ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=dr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=dr("baseRetryDelayMs",5e3,c),this.cb=dr("retryDelaySeedMs",1e4,c),this.Wa=dr("forwardChannelMaxRetries",2,c),this.wa=dr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new fi(c&&c.concurrentRequestLimit),this.Da=new _d,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qa.prototype,n.la=8,n.G=1,n.connect=function(c,m,y,S){pt(0),this.W=c,this.H=m||{},y&&S!==void 0&&(this.H.OSID=y,this.H.OAID=S),this.F=this.X,this.I=zu(this,null,this.W),fr(this)};function zt(c){if(yo(c),c.G==3){var m=c.U++,y=Tn(c.I);if(Ye(y,"SID",c.K),Ye(y,"RID",m),Ye(y,"TYPE","terminate"),Vr(c,y),m=new $n(c,c.j,m),m.L=2,m.v=hs(Tn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=m.v,y=!0),y||(m.g=Bu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ze(m)}Uu(c)}function Qn(c){c.g&&(Ya(c),c.g.cancel(),c.g=null)}function yo(c){Qn(c),c.u&&(d.clearTimeout(c.u),c.u=null),Eo(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function fr(c){if(!En(c.h)&&!c.s){c.s=!0;var m=c.Ga;Ge||ie(),te||(Ge(),te=!0),ge.add(m,c),c.B=0}}function vd(c,m){return Ru(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=zn(I(c.Ga,c,m),ju(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const F=new $n(this,this.j,c);let $=this.o;if(this.S&&($?($=C($),A($,this.S)):$=this.S),this.m!==null||this.O||(F.H=$,$=null),this.P)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var S=this.i[y];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(m+=S,4096<m){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=ms(this,F,m),y=Tn(this.I),Ye(y,"RID",c),Ye(y,"CVER",22),this.D&&Ye(y,"X-HTTP-Session-Id",this.D),Vr(this,y),$&&(this.O?m="headers="+encodeURIComponent(String(Mr($)))+"&"+m:this.m&&ps(y,this.m,$)),$a(this.h,F),this.Ua&&Ye(y,"TYPE","init"),this.P?(Ye(y,"$req",m),Ye(y,"SID","null"),F.T=!0,co(F,y,null)):co(F,y,m),this.G=2}}else this.G==3&&(c?vo(this,c):this.i.length==0||En(this.h)||vo(this))};function vo(c,m){var y;m?y=m.l:y=c.U++;const S=Tn(c.I);Ye(S,"SID",c.K),Ye(S,"RID",y),Ye(S,"AID",c.T),Vr(c,S),c.m&&c.o&&ps(S,c.m,c.o),y=new $n(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),m&&(c.i=m.D.concat(c.i)),m=ms(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),$a(c.h,y),co(y,S,m)}function Vr(c,m){c.H&&de(c.H,function(y,S){Ye(m,S,y)}),c.l&&ls({},function(y,S){Ye(m,S,y)})}function ms(c,m,y){y=Math.min(c.i.length,y);var S=c.l?I(c.l.Na,c.l,c):null;e:{var F=c.i;let $=-1;for(;;){const Z=["count="+y];$==-1?0<y?($=F[0].g,Z.push("ofs="+$)):$=0:Z.push("ofs="+$);let Ke=!0;for(let Ct=0;Ct<y;Ct++){let Fe=F[Ct].g;const Dt=F[Ct].map;if(Fe-=$,0>Fe)$=Math.max(0,F[Ct].g-100),Ke=!1;else try{Mu(Dt,Z,"req"+Fe+"_")}catch{S&&S(Dt)}}if(Ke){S=Z.join("&");break e}}}return c=c.i.splice(0,y),m.D=c,S}function yi(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;Ge||ie(),te||(Ge(),te=!0),ge.add(m,c),c.v=0}}function wo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=zn(I(c.Fa,c),ju(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Fu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=zn(I(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Qn(this),Fu(this))};function Ya(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Fu(c){c.g=new $n(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=Tn(c.qa);Ye(m,"RID","rpc"),Ye(m,"SID",c.K),Ye(m,"AID",c.T),Ye(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ye(m,"TO",c.ja),Ye(m,"TYPE","xmlhttp"),Vr(c,m),c.m&&c.o&&ps(m,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=hs(Tn(m)),y.m=null,y.P=!0,Ba(y,c)}n.Za=function(){this.C!=null&&(this.C=null,Qn(this),wo(this),pt(19))};function Eo(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function To(c,m){var y=null;if(c.g==m){Eo(c),Ya(c),c.g=null;var S=2}else if(nn(c.h,m))y=m.D,Au(c.h,m),S=1;else return;if(c.G!=0){if(m.o)if(S==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var F=c.B;S=li(),St(S,new oo(S,y)),fr(c)}else yi(c);else if(F=m.s,F==3||F==0&&0<m.X||!(S==1&&vd(c,m)||S==2&&wo(c)))switch(y&&0<y.length&&(m=c.h,m.i=m.i.concat(y)),F){case 1:Fr(c,5);break;case 4:Fr(c,10);break;case 3:Fr(c,6);break;default:Fr(c,2)}}}function ju(c,m){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*m}function Fr(c,m){if(c.j.info("Error code "+m),m==2){var y=I(c.fb,c),S=c.Xa;const F=!S;S=new Or(S||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||mi(S,"https"),hs(S),F?gd(S.toString(),y):Lu(S.toString(),y)}else pt(2);c.G=0,c.l&&c.l.sa(m),Uu(c),yo(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Uu(c){if(c.G=0,c.ka=[],c.l){const m=Nu(c.h);(m.length!=0||c.i.length!=0)&&(z(c.ka,m),z(c.ka,c.i),c.h.i.length=0,M(c.i),c.i.length=0),c.l.ra()}}function zu(c,m,y){var S=y instanceof Or?Tn(y):new Or(y);if(S.g!="")m&&(S.g=m+"."+S.g),us(S,S.s);else{var F=d.location;S=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var $=new Or(null);S&&mi($,S),m&&($.g=m),F&&us($,F),y&&($.l=y),S=$}return y=c.D,m=c.ya,y&&m&&Ye(S,y,m),Ye(S,"VER",c.la),Vr(c,S),S}function Bu(c,m,y){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new ot(new Lr({eb:y})):new ot(c.pa),m.Ha(c.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xa(){}n=Xa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Io(){}Io.prototype.g=function(c,m){return new rn(c,m)};function rn(c,m){It.call(this),this.g=new Qa(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!W(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!W(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new pr(this)}j(rn,It),rn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rn.prototype.close=function(){zt(this.g)},rn.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=Oa(c),c=y);m.i.push(new ku(m.Ya++,c)),m.G==3&&fr(m)},rn.prototype.N=function(){this.g.l=null,delete this.j,zt(this.g),delete this.g,rn.aa.N.call(this)};function Hu(c){lr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const y in m){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}j(Hu,lr);function $u(){io.call(this),this.status=1}j($u,io);function pr(c){this.g=c}j(pr,Xa),pr.prototype.ua=function(){St(this.g,"a")},pr.prototype.ta=function(c){St(this.g,new Hu(c))},pr.prototype.sa=function(c){St(this.g,new $u)},pr.prototype.ra=function(){St(this.g,"b")},Io.prototype.createWebChannel=Io.prototype.g,rn.prototype.send=rn.prototype.o,rn.prototype.open=rn.prototype.m,rn.prototype.close=rn.prototype.close,yT=function(){return new Io},_T=function(){return li()},gT=ur,Mp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lo.NO_ERROR=0,lo.TIMEOUT=8,lo.HTTP_ERROR=6,eh=lo,Iu.COMPLETE="complete",mT=Iu,so.EventType=Nn,Nn.OPEN="a",Nn.CLOSE="b",Nn.ERROR="c",Nn.MESSAGE="d",It.prototype.listen=It.prototype.K,Al=so,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,pT=ot}).apply(typeof zc<"u"?zc:typeof self<"u"?self:typeof window<"u"?window:{});const s0="@firebase/firestore",i0="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sa="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new zh("@firebase/firestore");function qo(){return Gi.logLevel}function oe(n,...e){if(Gi.logLevel<=Oe.DEBUG){const t=e.map(eg);Gi.debug(`Firestore (${Sa}): ${n}`,...t)}}function ts(n,...e){if(Gi.logLevel<=Oe.ERROR){const t=e.map(eg);Gi.error(`Firestore (${Sa}): ${n}`,...t)}}function Ks(n,...e){if(Gi.logLevel<=Oe.WARN){const t=e.map(eg);Gi.warn(`Firestore (${Sa}): ${n}`,...t)}}function eg(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,vT(n,r,t)}function vT(n,e,t){let r=`FIRESTORE (${Sa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ts(r),new Error(r)}function ht(n,e,t,r){let o="Unexpected state";typeof t=="string"?o=t:r=t,n||vT(e,o,r)}function Ue(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends ns{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Jt.UNAUTHENTICATED))}shutdown(){}}class nP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rP{constructor(e){this.t=e,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ht(this.o===void 0,42304);let r=this.i;const o=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let a=new Fi;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Fi,e.enqueueRetryable(()=>o(this.currentUser))};const u=()=>{const p=a;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Fi)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ht(typeof r.accessToken=="string",31837,{l:r}),new wT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ht(e===null||typeof e=="string",2055,{h:e}),new Jt(e)}}class sP{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class iP{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new sP(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class o0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oP{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ht(this.o===void 0,3512);const r=a=>{a.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,oe("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const o=a=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new o0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ht(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new o0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function aP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function ET(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=aP(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<t&&(r+=e.charAt(o[a]%62))}return r}}function be(n,e){return n<e?-1:n>e?1:0}function Vp(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),o=e.codePointAt(t);if(r!==o){if(r<128&&o<128)return be(r,o);{const a=ET(),u=lP(a.encode(a0(n,t)),a.encode(a0(e,t)));return u!==0?u:be(r,o)}}t+=r>65535?2:1}return be(n.length,e.length)}function a0(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function lP(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return be(n[t],e[t]);return be(n.length,e.length)}function da(n,e,t){return n.length===e.length&&n.every((r,o)=>t(r,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="__name__";class vr{constructor(e,t,r){t===void 0?t=0:t>e.length&&xe(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&xe(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return vr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const a=vr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return be(e.length,t.length)}static compareSegments(e,t){const r=vr.isNumericId(e),o=vr.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?vr.extractNumericId(e).compare(vr.extractNumericId(t)):Vp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zs.fromString(e.substring(4,e.length-2))}}class ct extends vr{construct(e,t,r){return new ct(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new me(ee.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(o=>o.length>0))}return new ct(t)}static emptyPath(){return new ct([])}}const uP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class an extends vr{construct(e,t,r){return new an(e,t,r)}static isValidIdentifier(e){return uP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),an.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===l0}static keyField(){return new an([l0])}static fromServerFormat(e){const t=[];let r="",o=0;const a=()=>{if(r.length===0)throw new me(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new me(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new me(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(r+=d,o++):(a(),o++)}if(a(),u)throw new me(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new an(t)}static emptyPath(){return new an([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(ct.fromString(e))}static fromName(e){return new we(ct.fromString(e).popFirst(5))}static empty(){return new we(ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ct.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ct.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new ct(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(n,e,t){if(!t)throw new me(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hP(n,e,t,r){if(e===!0&&r===!0)throw new me(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function u0(n){if(!we.isDocumentKey(n))throw new me(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function dP(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fP(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":xe(12329,{type:typeof n})}function Fp(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new me(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fP(n);throw new me(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Tt(n,e){const t={typeString:n};return e&&(t.value=e),t}function gu(n,e){if(!dP(n))throw new me(ee.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const o=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(o&&typeof u!==o){t=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new me(ee.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=-62135596800,h0=1e6;class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*h0);return new Et(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new me(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new me(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<c0)throw new me(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/h0}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gu(e,Et._jsonSchema))return new Et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-c0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Et._jsonSchemaVersion="firestore/timestamp/1.0",Et._jsonSchema={type:Tt("string",Et._jsonSchemaVersion),seconds:Tt("number"),nanoseconds:Tt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new Et(0,0))}static max(){return new Ce(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const nu=-1;function pP(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=Ce.fromTimestamp(r===1e9?new Et(t+1,0):new Et(t,r));return new Qs(o,we.empty(),e)}function mP(n){return new Qs(n.readTime,n.key,nu)}class Qs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Qs(Ce.min(),we.empty(),nu)}static max(){return new Qs(Ce.max(),we.empty(),nu)}}function gP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=we.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
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
 */const _P="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==_P)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&xe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,r)=>{t(e)})}static reject(e){return new G((t,r)=>{r(e)})}static waitFor(e){return new G((t,r)=>{let o=0,a=0,u=!1;e.forEach(d=>{++o,d.next(()=>{++a,u&&a===o&&t()},p=>r(p))}),u=!0,a===o&&t()})}static or(e){let t=G.resolve(!1);for(const r of e)t=t.next(o=>o?G.resolve(o):r());return t}static forEach(e,t){const r=[];return e.forEach((o,a)=>{r.push(t.call(this,o,a))}),this.waitFor(r)}static mapArray(e,t){return new G((r,o)=>{const a=e.length,u=new Array(a);let d=0;for(let p=0;p<a;p++){const _=p;t(e[_]).next(w=>{u[_]=w,++d,d===a&&r(u)},w=>o(w))}})}static doWhile(e,t){return new G((r,o)=>{const a=()=>{e()===!0?t().next(()=>{a()},o):r()};a()})}}function vP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ca(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class nd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}nd.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=-1;function rd(n){return n==null}function jp(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="";function EP(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=d0(e)),e=TP(n.get(t),e);return d0(e)}function TP(n,e){let t=e;const r=n.length;for(let o=0;o<r;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case TT:t+="";break;default:t+=a}}return t}function d0(n){return n+TT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _u(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function IP(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.comparator=e,this.root=t||$t.EMPTY}insert(e,t){return new _t(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$t.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$t.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bc(this.root,e,this.comparator,!0)}}class Bc{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $t{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??$t.RED,this.left=o??$t.EMPTY,this.right=a??$t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,a){return new $t(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return $t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return $t.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw xe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw xe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw xe(27949);return e+(this.isRed()?0:1)}}$t.EMPTY=null,$t.RED=!0,$t.BLACK=!1;$t.EMPTY=new class{constructor(){this.size=0}get key(){throw xe(57766)}get value(){throw xe(16141)}get color(){throw xe(16727)}get left(){throw xe(29726)}get right(){throw xe(36894)}copy(e,t,r,o,a){return this}insert(e,t,r){return new $t(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new p0(this.data.getIterator())}getIteratorFrom(e){return new p0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Nt(this.comparator);return t.data=e,t}}class p0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ls{constructor(e){this.fields=e,e.sort(an.comparator)}static empty(){return new Ls([])}unionWith(e){let t=new Nt(an.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ls(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return da(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class IT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new IT("Invalid base64 string: "+a):a}}(e);return new qt(t)}static fromUint8Array(e){const t=function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a}(e);return new qt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const SP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ys(n){if(ht(!!n,39018),typeof n=="string"){let e=0;const t=SP.exec(n);if(ht(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:gt(n.seconds),nanos:gt(n.nanos)}}function gt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xs(n){return typeof n=="string"?qt.fromBase64String(n):qt.fromUint8Array(n)}/**
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
 */const ST="server_timestamp",CT="__type__",xT="__previous_value__",kT="__local_write_time__";function ng(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[CT])===null||t===void 0?void 0:t.stringValue)===ST}function sd(n){const e=n.mapValue.fields[xT];return ng(e)?sd(e):e}function ru(n){const e=Ys(n.mapValue.fields[kT].timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,t,r,o,a,u,d,p,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=_,this.isUsingEmulator=w}}const Rh="(default)";class su{constructor(e,t){this.projectId=e,this.database=t||Rh}static empty(){return new su("","")}get isDefaultDatabase(){return this.database===Rh}isEqual(e){return e instanceof su&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const xP="__type__",kP="__max__",Hc={mapValue:{}},RP="__vector__",Up="value";function Js(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ng(n)?4:NP(n)?9007199254740991:AP(n)?10:11:xe(28295,{value:n})}function kr(n,e){if(n===e)return!0;const t=Js(n);if(t!==Js(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ru(n).isEqual(ru(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=Ys(o.timestampValue),d=Ys(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,a){return Xs(o.bytesValue).isEqual(Xs(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,a){return gt(o.geoPointValue.latitude)===gt(a.geoPointValue.latitude)&&gt(o.geoPointValue.longitude)===gt(a.geoPointValue.longitude)}(n,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return gt(o.integerValue)===gt(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=gt(o.doubleValue),d=gt(a.doubleValue);return u===d?jp(u)===jp(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return da(n.arrayValue.values||[],e.arrayValue.values||[],kr);case 10:case 11:return function(o,a){const u=o.mapValue.fields||{},d=a.mapValue.fields||{};if(f0(u)!==f0(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!kr(u[p],d[p])))return!1;return!0}(n,e);default:return xe(52216,{left:n})}}function iu(n,e){return(n.values||[]).find(t=>kr(t,e))!==void 0}function fa(n,e){if(n===e)return 0;const t=Js(n),r=Js(e);if(t!==r)return be(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return function(a,u){const d=gt(a.integerValue||a.doubleValue),p=gt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return m0(n.timestampValue,e.timestampValue);case 4:return m0(ru(n),ru(e));case 5:return Vp(n.stringValue,e.stringValue);case 6:return function(a,u){const d=Xs(a),p=Xs(u);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(a,u){const d=a.split("/"),p=u.split("/");for(let _=0;_<d.length&&_<p.length;_++){const w=be(d[_],p[_]);if(w!==0)return w}return be(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,u){const d=be(gt(a.latitude),gt(u.latitude));return d!==0?d:be(gt(a.longitude),gt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return g0(n.arrayValue,e.arrayValue);case 10:return function(a,u){var d,p,_,w;const T=a.fields||{},I=u.fields||{},b=(d=T[Up])===null||d===void 0?void 0:d.arrayValue,j=(p=I[Up])===null||p===void 0?void 0:p.arrayValue,M=be(((_=b?.values)===null||_===void 0?void 0:_.length)||0,((w=j?.values)===null||w===void 0?void 0:w.length)||0);return M!==0?M:g0(b,j)}(n.mapValue,e.mapValue);case 11:return function(a,u){if(a===Hc.mapValue&&u===Hc.mapValue)return 0;if(a===Hc.mapValue)return 1;if(u===Hc.mapValue)return-1;const d=a.fields||{},p=Object.keys(d),_=u.fields||{},w=Object.keys(_);p.sort(),w.sort();for(let T=0;T<p.length&&T<w.length;++T){const I=Vp(p[T],w[T]);if(I!==0)return I;const b=fa(d[p[T]],_[w[T]]);if(b!==0)return b}return be(p.length,w.length)}(n.mapValue,e.mapValue);default:throw xe(23264,{le:t})}}function m0(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=Ys(n),r=Ys(e),o=be(t.seconds,r.seconds);return o!==0?o:be(t.nanos,r.nanos)}function g0(n,e){const t=n.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const a=fa(t[o],r[o]);if(a)return a}return be(t.length,r.length)}function pa(n){return zp(n)}function zp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ys(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return we.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",o=!0;for(const a of t.values||[])o?o=!1:r+=",",r+=zp(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${zp(t.fields[u])}`;return o+"}"}(n.mapValue):xe(61005,{value:n})}function th(n){switch(Js(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sd(n);return e?16+th(e):16;case 5:return 2*n.stringValue.length;case 6:return Xs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((o,a)=>o+th(a),0)}(n.arrayValue);case 10:case 11:return function(r){let o=0;return _u(r.fields,(a,u)=>{o+=a.length+th(u)}),o}(n.mapValue);default:throw xe(13486,{value:n})}}function Bp(n){return!!n&&"integerValue"in n}function rg(n){return!!n&&"arrayValue"in n}function _0(n){return!!n&&"nullValue"in n}function y0(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function op(n){return!!n&&"mapValue"in n}function AP(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[xP])===null||t===void 0?void 0:t.stringValue)===RP}function zl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return _u(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=zl(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function NP(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===kP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.value=e}static empty(){return new wr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!op(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zl(t)}setAll(e){let t=an.emptyPath(),r={},o=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,r,o),r={},o=[],t=d.popLast()}u?r[d.lastSegment()]=zl(u):o.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,o)}delete(e){const t=this.field(e.popLast());op(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return kr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];op(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){_u(t,(o,a)=>e[o]=a);for(const o of r)delete e[o]}clone(){return new wr(zl(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,r,o,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new en(e,0,Ce.min(),Ce.min(),Ce.min(),wr.empty(),0)}static newFoundDocument(e,t,r,o){return new en(e,1,t,Ce.min(),r,o,0)}static newNoDocument(e,t){return new en(e,2,t,Ce.min(),Ce.min(),wr.empty(),0)}static newUnknownDocument(e,t){return new en(e,3,t,Ce.min(),Ce.min(),wr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ah{constructor(e,t){this.position=e,this.inclusive=t}}function v0(n,e,t){let r=0;for(let o=0;o<n.position.length;o++){const a=e[o],u=n.position[o];if(a.field.isKeyField()?r=we.comparator(we.fromName(u.referenceValue),t.key):r=fa(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function w0(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!kr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Nh{constructor(e,t="asc"){this.field=e,this.dir=t}}function PP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class RT{}class At extends RT{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new DP(e,t,r):t==="array-contains"?new MP(e,r):t==="in"?new VP(e,r):t==="not-in"?new FP(e,r):t==="array-contains-any"?new jP(e,r):new At(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new OP(e,r):new LP(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(fa(t,this.value)):t!==null&&Js(this.value)===Js(t)&&this.matchesComparison(fa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return xe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rr extends RT{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Rr(e,t)}matches(e){return AT(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function AT(n){return n.op==="and"}function NT(n){return bP(n)&&AT(n)}function bP(n){for(const e of n.filters)if(e instanceof Rr)return!1;return!0}function Hp(n){if(n instanceof At)return n.field.canonicalString()+n.op.toString()+pa(n.value);if(NT(n))return n.filters.map(e=>Hp(e)).join(",");{const e=n.filters.map(t=>Hp(t)).join(",");return`${n.op}(${e})`}}function PT(n,e){return n instanceof At?function(r,o){return o instanceof At&&r.op===o.op&&r.field.isEqual(o.field)&&kr(r.value,o.value)}(n,e):n instanceof Rr?function(r,o){return o instanceof Rr&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce((a,u,d)=>a&&PT(u,o.filters[d]),!0):!1}(n,e):void xe(19439)}function bT(n){return n instanceof At?function(t){return`${t.field.canonicalString()} ${t.op} ${pa(t.value)}`}(n):n instanceof Rr?function(t){return t.op.toString()+" {"+t.getFilters().map(bT).join(" ,")+"}"}(n):"Filter"}class DP extends At{constructor(e,t,r){super(e,t,r),this.key=we.fromName(r.referenceValue)}matches(e){const t=we.comparator(e.key,this.key);return this.matchesComparison(t)}}class OP extends At{constructor(e,t){super(e,"in",t),this.keys=DT("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class LP extends At{constructor(e,t){super(e,"not-in",t),this.keys=DT("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function DT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>we.fromName(r.referenceValue))}class MP extends At{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rg(t)&&iu(t.arrayValue,this.value)}}class VP extends At{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&iu(this.value.arrayValue,t)}}class FP extends At{constructor(e,t){super(e,"not-in",t)}matches(e){if(iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!iu(this.value.arrayValue,t)}}class jP extends At{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>iu(this.value.arrayValue,r))}}/**
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
 */class UP{constructor(e,t=null,r=[],o=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function E0(n,e=null,t=[],r=[],o=null,a=null,u=null){return new UP(n,e,t,r,o,a,u)}function sg(n){const e=Ue(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Hp(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),rd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>pa(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>pa(r)).join(",")),e.Pe=t}return e.Pe}function ig(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!PP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!PT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!w0(n.startAt,e.startAt)&&w0(n.endAt,e.endAt)}function $p(n){return we.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t=null,r=[],o=[],a=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function zP(n,e,t,r,o,a,u,d){return new id(n,e,t,r,o,a,u,d)}function og(n){return new id(n)}function T0(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function BP(n){return n.collectionGroup!==null}function Bl(n){const e=Ue(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Nt(an.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(_=>{_.isInequality()&&(d=d.add(_.field))})}),d})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Nh(a,r))}),t.has(an.keyField().canonicalString())||e.Te.push(new Nh(an.keyField(),r))}return e.Te}function xr(n){const e=Ue(n);return e.Ie||(e.Ie=HP(e,Bl(n))),e.Ie}function HP(n,e){if(n.limitType==="F")return E0(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new Nh(o.field,a)});const t=n.endAt?new Ah(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ah(n.startAt.position,n.startAt.inclusive):null;return E0(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Wp(n,e,t){return new id(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function od(n,e){return ig(xr(n),xr(e))&&n.limitType===e.limitType}function OT(n){return`${sg(xr(n))}|lt:${n.limitType}`}function Go(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(o=>bT(o)).join(", ")}]`),rd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(o=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(o)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(o=>pa(o)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(o=>pa(o)).join(",")),`Target(${r})`}(xr(n))}; limitType=${n.limitType})`}function ad(n,e){return e.isFoundDocument()&&function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):we.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,e)&&function(r,o){for(const a of Bl(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(n,e)&&function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0}(n,e)&&function(r,o){return!(r.startAt&&!function(u,d,p){const _=v0(u,d,p);return u.inclusive?_<=0:_<0}(r.startAt,Bl(r),o)||r.endAt&&!function(u,d,p){const _=v0(u,d,p);return u.inclusive?_>=0:_>0}(r.endAt,Bl(r),o))}(n,e)}function $P(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function LT(n){return(e,t)=>{let r=!1;for(const o of Bl(n)){const a=WP(o,e,t);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function WP(n,e,t){const r=n.field.isKeyField()?we.comparator(e.key,t.key):function(a,u,d){const p=u.data.field(a),_=d.data.field(a);return p!==null&&_!==null?fa(p,_):xe(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return xe(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){_u(this.inner,(t,r)=>{for(const[o,a]of r)e(o,a)})}isEmpty(){return IP(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=new _t(we.comparator);function Zs(){return qP}const MT=new _t(we.comparator);function Nl(...n){let e=MT;for(const t of n)e=e.insert(t.key,t);return e}function GP(n){let e=MT;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Mi(){return Hl()}function VT(){return Hl()}function Hl(){return new Xi(n=>n.toString(),(n,e)=>n.isEqual(e))}const KP=new Nt(we.comparator);function Be(...n){let e=KP;for(const t of n)e=e.add(t);return e}const QP=new Nt(be);function YP(){return QP}/**
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
 */function XP(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jp(e)?"-0":e}}function JP(n){return{integerValue:""+n}}/**
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
 */class ld{constructor(){this._=void 0}}function ZP(n,e,t){return n instanceof qp?function(o,a){const u={fields:{[CT]:{stringValue:ST},[kT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&ng(a)&&(a=sd(a)),a&&(u.fields[xT]=a),{mapValue:u}}(t,e):n instanceof Ph?FT(n,e):n instanceof bh?jT(n,e):function(o,a){const u=t2(o,a),d=I0(u)+I0(o.Ee);return Bp(u)&&Bp(o.Ee)?JP(d):XP(o.serializer,d)}(n,e)}function e2(n,e,t){return n instanceof Ph?FT(n,e):n instanceof bh?jT(n,e):t}function t2(n,e){return n instanceof Gp?function(r){return Bp(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class qp extends ld{}class Ph extends ld{constructor(e){super(),this.elements=e}}function FT(n,e){const t=UT(e);for(const r of n.elements)t.some(o=>kr(o,r))||t.push(r);return{arrayValue:{values:t}}}class bh extends ld{constructor(e){super(),this.elements=e}}function jT(n,e){let t=UT(e);for(const r of n.elements)t=t.filter(o=>!kr(o,r));return{arrayValue:{values:t}}}class Gp extends ld{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function I0(n){return gt(n.integerValue||n.doubleValue)}function UT(n){return rg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function n2(n,e){return n.field.isEqual(e.field)&&function(r,o){return r instanceof Ph&&o instanceof Ph||r instanceof bh&&o instanceof bh?da(r.elements,o.elements,kr):r instanceof Gp&&o instanceof Gp?kr(r.Ee,o.Ee):r instanceof qp&&o instanceof qp}(n.transform,e.transform)}class ji{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ji}static exists(e){return new ji(void 0,e)}static updateTime(e){return new ji(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ag{}function zT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new s2(n.key,ji.none()):new lg(n.key,n.data,ji.none());{const t=n.data,r=wr.empty();let o=new Nt(an.comparator);for(let a of e.fields)if(!o.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new ud(n.key,r,new Ls(o.toArray()),ji.none())}}function r2(n,e,t){n instanceof lg?function(o,a,u){const d=o.value.clone(),p=C0(o.fieldTransforms,a,u.transformResults);d.setAll(p),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof ud?function(o,a,u){if(!nh(o.precondition,a))return void a.convertToUnknownDocument(u.version);const d=C0(o.fieldTransforms,a,u.transformResults),p=a.data;p.setAll(BT(o)),p.setAll(d),a.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(n,e,t):function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function $l(n,e,t,r){return n instanceof lg?function(a,u,d,p){if(!nh(a.precondition,u))return d;const _=a.value.clone(),w=x0(a.fieldTransforms,p,u);return _.setAll(w),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),null}(n,e,t,r):n instanceof ud?function(a,u,d,p){if(!nh(a.precondition,u))return d;const _=x0(a.fieldTransforms,p,u),w=u.data;return w.setAll(BT(a)),w.setAll(_),u.convertToFoundDocument(u.version,w).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(a,u,d){return nh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function S0(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&da(r,o,(a,u)=>n2(a,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class lg extends ag{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ud extends ag{constructor(e,t,r,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function BT(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function C0(n,e,t){const r=new Map;ht(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const a=n[o],u=a.transform,d=e.data.field(a.field);r.set(a.field,e2(u,d,t[o]))}return r}function x0(n,e,t){const r=new Map;for(const o of n){const a=o.transform,u=t.data.field(o.field);r.set(o.field,ZP(a,u,e))}return r}class s2 extends ag{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&r2(a,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=$l(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=$l(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=VT();return this.mutations.forEach(o=>{const a=e.get(o.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(o.key)?null:d;const p=zT(u,d);p!==null&&r.set(o.key,p),u.isValidDocument()||u.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Be())}isEqual(e){return this.batchId===e.batchId&&da(this.mutations,e.mutations,(t,r)=>S0(t,r))&&da(this.baseMutations,e.baseMutations,(t,r)=>S0(t,r))}}/**
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
 */class o2{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,je;function HT(n){if(n===void 0)return ts("GRPC error has no .code"),ee.UNKNOWN;switch(n){case wt.OK:return ee.OK;case wt.CANCELLED:return ee.CANCELLED;case wt.UNKNOWN:return ee.UNKNOWN;case wt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case wt.INTERNAL:return ee.INTERNAL;case wt.UNAVAILABLE:return ee.UNAVAILABLE;case wt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case wt.NOT_FOUND:return ee.NOT_FOUND;case wt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case wt.ABORTED:return ee.ABORTED;case wt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case wt.DATA_LOSS:return ee.DATA_LOSS;default:return xe(39323,{code:n})}}(je=wt||(wt={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const l2=new zs([4294967295,4294967295],0);function k0(n){const e=ET().encode(n),t=new fT;return t.update(e),new Uint8Array(t.digest())}function R0(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new zs([t,r],0),new zs([o,a],0)]}class ug{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Pl(`Invalid padding: ${t}`);if(r<0)throw new Pl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Pl(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Pl(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=zs.fromNumber(this.fe)}pe(e,t,r){let o=e.add(t.multiply(zs.fromNumber(r)));return o.compare(l2)===1&&(o=new zs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=k0(e),[r,o]=R0(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new ug(a,o,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.fe===0)return;const t=k0(e),[r,o]=R0(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Pl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t,r,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,yu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new cd(Ce.min(),o,new _t(be),Zs(),Be())}}class yu{constructor(e,t,r,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new yu(r,t,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t,r,o){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=o}}class $T{constructor(e,t){this.targetId=e,this.De=t}}class WT{constructor(e,t,r=qt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class A0{constructor(){this.ve=0,this.Ce=N0(),this.Fe=qt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Be(),t=Be(),r=Be();return this.Ce.forEach((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:xe(38017,{changeType:a})}}),new yu(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=N0()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ht(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class u2{constructor(e){this.We=e,this.Ge=new Map,this.ze=Zs(),this.je=$c(),this.Je=$c(),this.He=new _t(be)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:xe(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,o)=>{this.nt(o)&&t(o)})}it(e){const t=e.targetId,r=e.De.count,o=this.st(t);if(o){const a=o.target;if($p(a))if(r===0){const u=new we(a.path);this.Xe(t,u,en.newNoDocument(u,Ce.min()))}else ht(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),p=d?this.ut(d,e,u):1;if(p!==0){this.rt(t);const _=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=t;let u,d;try{u=Xs(r).toUint8Array()}catch(p){if(p instanceof IT)return Ks("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new ug(u,o,a)}catch(p){return Ks(p instanceof Pl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let o=0;return r.forEach(a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),o++)}),o}Pt(e){const t=new Map;this.Ge.forEach((a,u)=>{const d=this.st(u);if(d){if(a.current&&$p(d.target)){const p=new we(d.target.path);this.Tt(p).has(u)||this.It(u,p)||this.Xe(u,p,en.newNoDocument(p,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}});let r=Be();this.Je.forEach((a,u)=>{let d=!0;u.forEachWhile(p=>{const _=this.st(p);return!_||_.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(a))}),this.ze.forEach((a,u)=>u.setReadTime(e));const o=new cd(e,t,this.He,this.ze,r);return this.ze=Zs(),this.je=$c(),this.Je=$c(),this.He=new _t(be),o}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new A0,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Nt(be),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Nt(be),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new A0),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function $c(){return new _t(we.comparator)}function N0(){return new _t(we.comparator)}const c2={asc:"ASCENDING",desc:"DESCENDING"},h2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},d2={and:"AND",or:"OR"};class f2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Kp(n,e){return n.useProto3Json||rd(e)?e:{value:e}}function p2(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function m2(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ia(n){return ht(!!n,49232),Ce.fromTimestamp(function(t){const r=Ys(t);return new Et(r.seconds,r.nanos)}(n))}function g2(n,e){return Qp(n,e).canonicalString()}function Qp(n,e){const t=function(o){return new ct(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function qT(n){const e=ct.fromString(n);return ht(XT(e),10190,{key:e.toString()}),e}function ap(n,e){const t=qT(e);if(t.get(1)!==n.databaseId.projectId)throw new me(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new me(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new we(KT(t))}function GT(n,e){return g2(n.databaseId,e)}function _2(n){const e=qT(n);return e.length===4?ct.emptyPath():KT(e)}function P0(n){return new ct(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function KT(n){return ht(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function y2(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:xe(39313,{state:_})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=function(_,w){return _.useProto3Json?(ht(w===void 0||typeof w=="string",58123),qt.fromBase64String(w||"")):(ht(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),qt.fromUint8Array(w||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(_){const w=_.code===void 0?ee.UNKNOWN:HT(_.code);return new me(w,_.message||"")}(u);t=new WT(r,o,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=ap(n,r.document.name),a=ia(r.document.updateTime),u=r.document.createTime?ia(r.document.createTime):Ce.min(),d=new wr({mapValue:{fields:r.document.fields}}),p=en.newFoundDocument(o,a,u,d),_=r.targetIds||[],w=r.removedTargetIds||[];t=new rh(_,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=ap(n,r.document),a=r.readTime?ia(r.readTime):Ce.min(),u=en.newNoDocument(o,a),d=r.removedTargetIds||[];t=new rh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=ap(n,r.document),a=r.removedTargetIds||[];t=new rh([],a,o,null)}else{if(!("filter"in e))return xe(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new a2(o,a),d=r.targetId;t=new $T(d,u)}}return t}function v2(n,e){return{documents:[GT(n,e.path)]}}function w2(n,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=GT(n,o);const a=function(_){if(_.length!==0)return YT(Rr.create(_,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const u=function(_){if(_.length!==0)return _.map(w=>function(I){return{field:Ko(I.field),direction:I2(I.dir)}}(w))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Kp(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{Vt:t,parent:o}}function E2(n){let e=_2(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){ht(r===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let a=[];t.where&&(a=function(T){const I=QT(T);return I instanceof Rr&&NT(I)?I.getFilters():[I]}(t.where));let u=[];t.orderBy&&(u=function(T){return T.map(I=>function(j){return new Nh(Qo(j.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(j.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(T){let I;return I=typeof T=="object"?T.value:T,rd(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(T){const I=!!T.before,b=T.values||[];return new Ah(b,I)}(t.startAt));let _=null;return t.endAt&&(_=function(T){const I=!T.before,b=T.values||[];return new Ah(b,I)}(t.endAt)),zP(e,o,u,a,d,"F",p,_)}function T2(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return xe(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function QT(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Qo(t.unaryFilter.field);return At.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=Qo(t.unaryFilter.field);return At.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Qo(t.unaryFilter.field);return At.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Qo(t.unaryFilter.field);return At.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return xe(61313);default:return xe(60726)}}(n):n.fieldFilter!==void 0?function(t){return At.create(Qo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return xe(58110);default:return xe(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Rr.create(t.compositeFilter.filters.map(r=>QT(r)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return xe(1026)}}(t.compositeFilter.op))}(n):xe(30097,{filter:n})}function I2(n){return c2[n]}function S2(n){return h2[n]}function C2(n){return d2[n]}function Ko(n){return{fieldPath:n.canonicalString()}}function Qo(n){return an.fromServerFormat(n.fieldPath)}function YT(n){return n instanceof At?function(t){if(t.op==="=="){if(y0(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NAN"}};if(_0(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(y0(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NOT_NAN"}};if(_0(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ko(t.field),op:S2(t.op),value:t.value}}}(n):n instanceof Rr?function(t){const r=t.getFilters().map(o=>YT(o));return r.length===1?r[0]:{compositeFilter:{op:C2(t.op),filters:r}}}(n):xe(54877,{filter:n})}function XT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t,r,o,a=Ce.min(),u=Ce.min(),d=qt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Ms(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ms(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ms(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ms(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e){this.gt=e}}function k2(n){const e=E2({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Wp(e,e.limit,"L"):e}/**
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
 */class R2{constructor(){this.Dn=new A2}addToCollectionParentIndex(e,t){return this.Dn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Qs.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Qs.min())}updateCollectionGroup(e,t,r){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class A2{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new Nt(ct.comparator),a=!o.has(r);return this.index[t]=o.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new Nt(ct.comparator)).toArray()}}/**
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
 */const b0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},JT=41943040;class _n{static withCacheSize(e){return new _n(e,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n.DEFAULT_COLLECTION_PERCENTILE=10,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_n.DEFAULT=new _n(JT,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_n.DISABLED=new _n(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ma(0)}static ur(){return new ma(-1)}}/**
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
 */const D0="LruGarbageCollector",N2=1048576;function O0([n,e],[t,r]){const o=be(n,t);return o===0?be(e,r):o}class P2{constructor(e){this.Tr=e,this.buffer=new Nt(O0),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();O0(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class b2{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){oe(D0,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ca(t)?oe(D0,"Ignoring IndexedDB error during garbage collection: ",t):await td(t)}await this.Rr(3e5)})}}class D2{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return G.resolve(nd.ue);const r=new P2(t);return this.Vr.forEachTarget(e,o=>r.Er(o.sequenceNumber)).next(()=>this.Vr.gr(e,o=>r.Er(o))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(b0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),b0):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,o,a,u,d,p,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,u=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(r=T,d=Date.now(),this.removeTargets(e,r,t))).next(T=>(a=T,p=Date.now(),this.removeOrphanedDocuments(e,r))).next(T=>(_=Date.now(),qo()<=Oe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-w}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${a} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(_-p)+`ms
Total Duration: ${_-w}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:T})))}}function O2(n,e){return new D2(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(){this.changes=new Xi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?G.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class M2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(r=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(r!==null&&$l(r.mutation,o,Ls.empty(),Et.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Be()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Be()){const o=Mi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,r).next(a=>{let u=Nl();return a.forEach((d,p)=>{u=u.insert(d,p.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=Mi();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Be()))}populateOverlays(e,t,r){const o=[];return r.forEach(a=>{t.has(a)||o.push(a)}),this.documentOverlayCache.getOverlays(e,o).next(a=>{a.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,o){let a=Zs();const u=Hl(),d=function(){return Hl()}();return t.forEach((p,_)=>{const w=r.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof ud)?a=a.insert(_.key,_):w!==void 0?(u.set(_.key,w.mutation.getFieldMask()),$l(w.mutation,_,w.mutation.getFieldMask(),Et.now())):u.set(_.key,Ls.empty())}),this.recalculateAndSaveOverlays(e,a).next(p=>(p.forEach((_,w)=>u.set(_,w)),t.forEach((_,w)=>{var T;return d.set(_,new M2(w,(T=u.get(_))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const r=Hl();let o=new _t((u,d)=>u-d),a=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(p=>{const _=t.get(p);if(_===null)return;let w=r.get(p)||Ls.empty();w=d.applyToLocalView(_,w),r.set(p,w);const T=(o.get(d.batchId)||Be()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),_=p.key,w=p.value,T=VT();w.forEach(I=>{if(!a.has(I)){const b=zT(t.get(I),r.get(I));b!==null&&T.set(I,b),a=a.add(I)}}),u.push(this.documentOverlayCache.saveOverlays(e,_,T))}return G.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,o){return function(u){return we.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):BP(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next(a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-a.size):G.resolve(Mi());let d=nu,p=a;return u.next(_=>G.forEach(_,(w,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),a.get(w)?G.resolve():this.remoteDocumentCache.getEntry(e,w).next(I=>{p=p.insert(w,I)}))).next(()=>this.populateOverlays(e,_,a)).next(()=>this.computeViews(e,p,_,Be())).next(w=>({batchId:d,changes:GP(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new we(t)).next(r=>{let o=Nl();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const a=t.collectionGroup;let u=Nl();return this.indexManager.getCollectionParents(e,a).next(d=>G.forEach(d,p=>{const _=function(T,I){return new id(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,_,r,o).next(w=>{w.forEach((T,I)=>{u=u.insert(T,I)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,o))).next(u=>{a.forEach((p,_)=>{const w=_.getKey();u.get(w)===null&&(u=u.insert(w,en.newInvalidDocument(w)))});let d=Nl();return u.forEach((p,_)=>{const w=a.get(p);w!==void 0&&$l(w.mutation,_,Ls.empty(),Et.now()),ad(t,_)&&(d=d.insert(p,_))}),d})}}/**
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
 */class F2{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return G.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ia(o.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(o){return{name:o.name,query:k2(o.bundledQuery),readTime:ia(o.readTime)}}(t)),G.resolve()}}/**
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
 */class j2{constructor(){this.overlays=new _t(we.comparator),this.kr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Mi();return G.forEach(t,o=>this.getOverlay(e,o).next(a=>{a!==null&&r.set(o,a)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((o,a)=>{this.wt(e,t,a)}),G.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.kr.get(r);return o!==void 0&&(o.forEach(a=>this.overlays=this.overlays.remove(a)),this.kr.delete(r)),G.resolve()}getOverlaysForCollection(e,t,r){const o=Mi(),a=t.length+1,u=new we(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,_=p.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===a&&p.largestBatchId>r&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let a=new _t((_,w)=>_-w);const u=this.overlays.getIterator();for(;u.hasNext();){const _=u.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>r){let w=a.get(_.largestBatchId);w===null&&(w=Mi(),a=a.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const d=Mi(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((_,w)=>d.set(_,w)),!(d.size()>=o)););return G.resolve(d)}wt(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.kr.get(o.largestBatchId).delete(r.key);this.kr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new o2(t,r));let a=this.kr.get(t);a===void 0&&(a=Be(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class U2{constructor(){this.sessionToken=qt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.qr=new Nt(Ft.Qr),this.$r=new Nt(Ft.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ft(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Ft(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new we(new ct([])),r=new Ft(t,e),o=new Ft(t,e+1),a=[];return this.$r.forEachInRange([r,o],u=>{this.Wr(u),a.push(u.key)}),a}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new we(new ct([])),r=new Ft(t,e),o=new Ft(t,e+1);let a=Be();return this.$r.forEachInRange([r,o],u=>{a=a.add(u.key)}),a}containsKey(e){const t=new Ft(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ft{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return we.comparator(e.key,t.key)||be(e.Hr,t.Hr)}static Ur(e,t){return be(e.Hr,t.Hr)||we.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Nt(Ft.Qr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new i2(a,t,r,o);this.mutationQueue.push(u);for(const d of o)this.Yr=this.Yr.add(new Ft(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return G.resolve(u)}lookupMutationBatch(e,t){return G.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.Xr(r),a=o<0?0:o;return G.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?wP:this.er-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ft(t,0),o=new Ft(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,o],u=>{const d=this.Zr(u.Hr);a.push(d)}),G.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Nt(be);return t.forEach(o=>{const a=new Ft(o,0),u=new Ft(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],d=>{r=r.add(d.Hr)})}),G.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let a=r;we.isDocumentKey(a)||(a=a.child(""));const u=new Ft(new we(a),0);let d=new Nt(be);return this.Yr.forEachWhile(p=>{const _=p.key.path;return!!r.isPrefixOf(_)&&(_.length===o&&(d=d.add(p.Hr)),!0)},u),G.resolve(this.ei(d))}ei(e){const t=[];return e.forEach(r=>{const o=this.Zr(r);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){ht(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return G.forEach(t.mutations,o=>{const a=new Ft(o.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new Ft(t,0),o=this.Yr.firstAfterOrEqual(r);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.ni=e,this.docs=function(){return new _t(we.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),a=o?o.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return G.resolve(r?r.document.mutableCopy():en.newInvalidDocument(t))}getEntries(e,t){let r=Zs();return t.forEach(o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():en.newInvalidDocument(o))}),G.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let a=Zs();const u=t.path,d=new we(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:_,value:{document:w}}=p.getNext();if(!u.isPrefixOf(_.path))break;_.path.length>u.length+1||gP(mP(w),r)<=0||(o.has(w.key)||ad(t,w))&&(a=a.insert(w.key,w.mutableCopy()))}return G.resolve(a)}getAllFromCollectionGroup(e,t,r,o){xe(9500)}ri(e,t){return G.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new H2(this)}getSize(e){return G.resolve(this.size)}}class H2 extends L2{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(r)}),G.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.persistence=e,this.ii=new Xi(t=>sg(t),ig),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.si=0,this.oi=new cg,this.targetCount=0,this._i=ma.ar()}forEachTarget(e,t){return this.ii.forEach((r,o)=>t(o)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),G.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new ma(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.hr(t),G.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,r){let o=0;const a=[];return this.ii.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),G.waitFor(a).next(()=>o)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return G.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),G.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach(u=>{a.push(o.markPotentiallyOrphaned(e,u))}),G.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return G.resolve(r)}containsKey(e,t){return G.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t){this.ai={},this.overlays={},this.ui=new nd(0),this.ci=!1,this.ci=!0,this.li=new U2,this.referenceDelegate=e(this),this.hi=new $2(this),this.indexManager=new R2,this.remoteDocumentCache=function(o){return new B2(o)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new x2(t),this.Ti=new F2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new j2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new z2(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){oe("MemoryPersistence","Starting transaction:",e);const o=new W2(this.ui.next());return this.referenceDelegate.Ii(),r(o).next(a=>this.referenceDelegate.di(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}Ei(e,t){return G.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class W2 extends yP{constructor(e){super(),this.currentSequenceNumber=e}}class hg{constructor(e){this.persistence=e,this.Ai=new cg,this.Ri=null}static Vi(e){return new hg(e)}get mi(){if(this.Ri)return this.Ri;throw xe(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),G.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(o=>this.mi.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(a=>this.mi.add(a.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.mi,r=>{const o=we.fromPath(r);return this.fi(e,o).next(a=>{a||t.removeEntry(o,Ce.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return G.or([()=>G.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Dh{constructor(e,t){this.persistence=e,this.gi=new Xi(r=>EP(r.path),(r,o)=>r.isEqual(o)),this.garbageCollector=O2(this,t)}static Vi(e,t){return new Dh(e,t)}Ii(){}di(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(o=>r+o))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return G.forEach(this.gi,(r,o)=>this.Sr(e,r,o).next(a=>a?G.resolve():t(o)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ri(e,u=>this.Sr(e,u,t).next(d=>{d||(r++,a.removeEntry(u,Ce.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),G.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=th(e.data.value)),t}Sr(e,t,r){return G.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return G.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=o}static Es(e,t){let r=Be(),o=Be();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new dg(e,t.fromCache,r,o)}}/**
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
 */class q2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class G2{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return oS()?8:vP(tn())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,o){const a={result:null};return this.ps(e,t).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.ys(e,t,o,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new q2;return this.ws(e,t,u).next(d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)})}).next(()=>a.result)}Ss(e,t,r,o){return r.documentReadCount<this.Vs?(qo()<=Oe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Go(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(qo()<=Oe.DEBUG&&oe("QueryEngine","Query:",Go(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.fs*o?(qo()<=Oe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Go(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xr(t))):G.resolve())}ps(e,t){if(T0(t))return G.resolve(null);let r=xr(t);return this.indexManager.getIndexType(e,r).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Wp(t,null,"F"),r=xr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const u=Be(...a);return this.gs.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(p=>{const _=this.bs(t,d);return this.Ds(t,_,u,p.readTime)?this.ps(e,Wp(t,null,"F")):this.vs(e,_,t,p)}))})))}ys(e,t,r,o){return T0(t)||o.isEqual(Ce.min())?G.resolve(null):this.gs.getDocuments(e,r).next(a=>{const u=this.bs(t,a);return this.Ds(t,u,r,o)?G.resolve(null):(qo()<=Oe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Go(t)),this.vs(e,u,t,pP(o,nu)).next(d=>d))})}bs(e,t){let r=new Nt(LT(e));return t.forEach((o,a)=>{ad(e,a)&&(r=r.add(a))}),r}Ds(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ws(e,t,r){return qo()<=Oe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Go(t)),this.gs.getDocumentsMatchingQuery(e,t,Qs.min(),r)}vs(e,t,r,o){return this.gs.getDocumentsMatchingQuery(e,r,o).next(a=>(t.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
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
 */const fg="LocalStore",K2=3e8;class Q2{constructor(e,t,r,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new _t(be),this.Ms=new Xi(a=>sg(a),ig),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new V2(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function Y2(n,e,t,r){return new Q2(n,e,t,r)}async function eI(n,e){const t=Ue(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next(a=>(o=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],d=[];let p=Be();for(const _ of o){u.push(_.batchId);for(const w of _.mutations)p=p.add(w.key)}for(const _ of a){d.push(_.batchId);for(const w of _.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(r,p).next(_=>({Bs:_,removedBatchIds:u,addedBatchIds:d}))})})}function tI(n){const e=Ue(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function X2(n,e){const t=Ue(n),r=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const d=[];e.targetChanges.forEach((w,T)=>{const I=o.get(T);if(!I)return;d.push(t.hi.removeMatchingKeys(a,w.removedDocuments,T).next(()=>t.hi.addMatchingKeys(a,w.addedDocuments,T)));let b=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(T)!==null?b=b.withResumeToken(qt.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):w.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(w.resumeToken,r)),o=o.insert(T,b),function(M,z,ae){return M.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=K2?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0}(I,b,w)&&d.push(t.hi.updateTargetData(a,b))});let p=Zs(),_=Be();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,w))}),d.push(J2(a,u,e.documentUpdates).next(w=>{p=w.Ls,_=w.ks})),!r.isEqual(Ce.min())){const w=t.hi.getLastRemoteSnapshotVersion(a).next(T=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r));d.push(w)}return G.waitFor(d).next(()=>u.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,p,_)).next(()=>p)}).then(a=>(t.Fs=o,a))}function J2(n,e,t){let r=Be(),o=Be();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let u=Zs();return t.forEach((d,p)=>{const _=a.get(d);p.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ce.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!_.isValidDocument()||p.version.compareTo(_.version)>0||p.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):oe(fg,"Ignoring outdated watch update for ",d,". Current version:",_.version," Watch version:",p.version)}),{Ls:u,ks:o}})}function Z2(n,e){const t=Ue(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let o;return t.hi.getTargetData(r,e).next(a=>a?(o=a,G.resolve(o)):t.hi.allocateTargetId(r).next(u=>(o=new Ms(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,o).next(()=>o))))}).then(r=>{const o=t.Fs.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function Yp(n,e,t){const r=Ue(n),o=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,o))}catch(u){if(!Ca(u))throw u;oe(fg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(o.target)}function L0(n,e,t){const r=Ue(n);let o=Ce.min(),a=Be();return r.persistence.runTransaction("Execute query","readwrite",u=>function(p,_,w){const T=Ue(p),I=T.Ms.get(w);return I!==void 0?G.resolve(T.Fs.get(I)):T.hi.getTargetData(_,w)}(r,u,xr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next(p=>{a=p})}).next(()=>r.Cs.getDocumentsMatchingQuery(u,e,t?o:Ce.min(),t?a:Be())).next(d=>(eb(r,$P(e),d),{documents:d,qs:a})))}function eb(n,e,t){let r=n.xs.get(e)||Ce.min();t.forEach((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.xs.set(e,r)}class M0{constructor(){this.activeTargetIds=YP()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tb{constructor(){this.Fo=new M0,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new M0,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nb{xo(e){}shutdown(){}}/**
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
 */const V0="ConnectivityMonitor";class F0{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){oe(V0,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){oe(V0,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wc=null;function Xp(){return Wc===null?Wc=function(){return 268435456+Math.round(2147483648*Math.random())}():Wc++,"0x"+Wc.toString(16)}/**
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
 */const lp="RestConnection",rb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${o}`,this.Ko=this.databaseId.database===Rh?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Wo(e,t,r,o,a){const u=Xp(),d=this.Go(e,t.toUriEncodedString());oe(lp,`Sending RPC '${e}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,a);const{host:_}=new URL(d),w=ti(_);return this.jo(e,d,p,r,w).then(T=>(oe(lp,`Received RPC '${e}' ${u}: `,T),T),T=>{throw Ks(lp,`RPC '${e}' ${u} failed with error: `,T,"url: ",d,"request:",r),T})}Jo(e,t,r,o,a,u){return this.Wo(e,t,r,o,a)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Sa}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,a)=>e[a]=o),r&&r.headers.forEach((o,a)=>e[a]=o)}Go(e,t){const r=rb[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection";class ob extends sb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,o,a){const u=Xp();return new Promise((d,p)=>{const _=new pT;_.setWithCredentials(!0),_.listenOnce(mT.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case eh.NO_ERROR:const T=_.getResponseJson();oe(Xt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(T)),d(T);break;case eh.TIMEOUT:oe(Xt,`RPC '${e}' ${u} timed out`),p(new me(ee.DEADLINE_EXCEEDED,"Request time out"));break;case eh.HTTP_ERROR:const I=_.getStatus();if(oe(Xt,`RPC '${e}' ${u} failed with status:`,I,"response text:",_.getResponseText()),I>0){let b=_.getResponseJson();Array.isArray(b)&&(b=b[0]);const j=b?.error;if(j&&j.status&&j.message){const M=function(ae){const W=ae.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(W)>=0?W:ee.UNKNOWN}(j.status);p(new me(M,j.message))}else p(new me(ee.UNKNOWN,"Server responded with status "+_.getStatus()))}else p(new me(ee.UNAVAILABLE,"Connection failed."));break;default:xe(9055,{c_:e,streamId:u,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{oe(Xt,`RPC '${e}' ${u} completed.`)}});const w=JSON.stringify(o);oe(Xt,`RPC '${e}' ${u} sending request:`,o),_.send(t,"POST",w,r,15)})}P_(e,t,r){const o=Xp(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=yT(),d=_T(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(p.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const w=a.join("");oe(Xt,`Creating RPC '${e}' stream ${o}: ${w}`,p);const T=u.createWebChannel(w,p);this.T_(T);let I=!1,b=!1;const j=new ib({Ho:z=>{b?oe(Xt,`Not sending because RPC '${e}' stream ${o} is closed:`,z):(I||(oe(Xt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),oe(Xt,`RPC '${e}' stream ${o} sending:`,z),T.send(z))},Yo:()=>T.close()}),M=(z,ae,W)=>{z.listen(ae,ne=>{try{W(ne)}catch(re){setTimeout(()=>{throw re},0)}})};return M(T,Al.EventType.OPEN,()=>{b||(oe(Xt,`RPC '${e}' stream ${o} transport opened.`),j.s_())}),M(T,Al.EventType.CLOSE,()=>{b||(b=!0,oe(Xt,`RPC '${e}' stream ${o} transport closed`),j.__(),this.I_(T))}),M(T,Al.EventType.ERROR,z=>{b||(b=!0,Ks(Xt,`RPC '${e}' stream ${o} transport errored. Name:`,z.name,"Message:",z.message),j.__(new me(ee.UNAVAILABLE,"The operation could not be completed")))}),M(T,Al.EventType.MESSAGE,z=>{var ae;if(!b){const W=z.data[0];ht(!!W,16349);const ne=W,re=ne?.error||((ae=ne[0])===null||ae===void 0?void 0:ae.error);if(re){oe(Xt,`RPC '${e}' stream ${o} received error:`,re);const fe=re.status;let de=function(k){const A=wt[k];if(A!==void 0)return HT(A)}(fe),D=re.message;de===void 0&&(de=ee.INTERNAL,D="Unknown error status: "+fe+" with message "+re.message),b=!0,j.__(new me(de,D)),T.close()}else oe(Xt,`RPC '${e}' stream ${o} received:`,W),j.a_(W)}}),M(d,gT.STAT_EVENT,z=>{z.stat===Mp.PROXY?oe(Xt,`RPC '${e}' stream ${o} detected buffering proxy`):z.stat===Mp.NOPROXY&&oe(Xt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{j.o_()},0),j}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function up(){return typeof document<"u"?document:null}/**
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
 */function nI(n){return new f2(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,t,r=1e3,o=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=o,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-r);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="PersistentStream";class ab{constructor(e,t,r,o,a,u,d,p){this.Fi=e,this.w_=r,this.S_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new rI(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(ts(t.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.b_===t&&this.W_(r,o)},r=>{e(()=>{const o=new me(ee.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(o)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{r(()=>this.G_(o))}),this.stream.onMessage(o=>{r(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return oe(j0,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(oe(j0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lb extends ab{constructor(e,t,r,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=y2(this.serializer,e),r=function(a){if(!("targetChange"in a))return Ce.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Ce.min():u.readTime?ia(u.readTime):Ce.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=P0(this.serializer),t.addTarget=function(a,u){let d;const p=u.target;if(d=$p(p)?{documents:v2(a,p)}:{query:w2(a,p).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=m2(a,u.resumeToken);const _=Kp(a,u.expectedCount);_!==null&&(d.expectedCount=_)}else if(u.snapshotVersion.compareTo(Ce.min())>0){d.readTime=p2(a,u.snapshotVersion.toTimestamp());const _=Kp(a,u.expectedCount);_!==null&&(d.expectedCount=_)}return d}(this.serializer,e);const r=T2(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=P0(this.serializer),t.removeTarget=e,this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{}class cb extends ub{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new me(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Wo(e,Qp(t,r),o,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new me(ee.UNKNOWN,a.toString())})}Jo(e,t,r,o,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Jo(e,Qp(t,r),o,u,d,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new me(ee.UNKNOWN,u.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class hb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ts(t),this._a=!1):oe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="RemoteStore";class db{constructor(e,t,r,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo(u=>{r.enqueueAndForget(async()=>{wu(this)&&(oe(ga,"Restarting streams for network reachability change."),await async function(p){const _=Ue(p);_.Ia.add(4),await vu(_),_.Aa.set("Unknown"),_.Ia.delete(4),await hd(_)}(this))})}),this.Aa=new hb(r,o)}}async function hd(n){if(wu(n))for(const e of n.da)await e(!0)}async function vu(n){for(const e of n.da)await e(!1)}function sI(n,e){const t=Ue(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),_g(t)?gg(t):xa(t).x_()&&mg(t,e))}function pg(n,e){const t=Ue(n),r=xa(t);t.Ta.delete(e),r.x_()&&iI(t,e),t.Ta.size===0&&(r.x_()?r.B_():wu(t)&&t.Aa.set("Unknown"))}function mg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xa(n).H_(e)}function iI(n,e){n.Ra.$e(e),xa(n).Y_(e)}function gg(n){n.Ra=new u2({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),xa(n).start(),n.Aa.aa()}function _g(n){return wu(n)&&!xa(n).M_()&&n.Ta.size>0}function wu(n){return Ue(n).Ia.size===0}function oI(n){n.Ra=void 0}async function fb(n){n.Aa.set("Online")}async function pb(n){n.Ta.forEach((e,t)=>{mg(n,e)})}async function mb(n,e){oI(n),_g(n)?(n.Aa.la(e),gg(n)):n.Aa.set("Unknown")}async function gb(n,e,t){if(n.Aa.set("Online"),e instanceof WT&&e.state===2&&e.cause)try{await async function(o,a){const u=a.cause;for(const d of a.targetIds)o.Ta.has(d)&&(await o.remoteSyncer.rejectListen(d,u),o.Ta.delete(d),o.Ra.removeTarget(d))}(n,e)}catch(r){oe(ga,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await U0(n,r)}else if(e instanceof rh?n.Ra.Ye(e):e instanceof $T?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ce.min()))try{const r=await tI(n.localStore);t.compareTo(r)>=0&&await function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach((p,_)=>{if(p.resumeToken.approximateByteSize()>0){const w=a.Ta.get(_);w&&a.Ta.set(_,w.withResumeToken(p.resumeToken,u))}}),d.targetMismatches.forEach((p,_)=>{const w=a.Ta.get(p);if(!w)return;a.Ta.set(p,w.withResumeToken(qt.EMPTY_BYTE_STRING,w.snapshotVersion)),iI(a,p);const T=new Ms(w.target,p,_,w.sequenceNumber);mg(a,T)}),a.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){oe(ga,"Failed to raise snapshot:",r),await U0(n,r)}}async function U0(n,e,t){if(!Ca(e))throw e;n.Ia.add(1),await vu(n),n.Aa.set("Offline"),t||(t=()=>tI(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{oe(ga,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await hd(n)})}async function z0(n,e){const t=Ue(n);t.asyncQueue.verifyOperationInProgress(),oe(ga,"RemoteStore received new credentials");const r=wu(t);t.Ia.add(3),await vu(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await hd(t)}async function _b(n,e){const t=Ue(n);e?(t.Ia.delete(2),await hd(t)):e||(t.Ia.add(2),await vu(t),t.Aa.set("Unknown"))}function xa(n){return n.Va||(n.Va=function(t,r,o){const a=Ue(t);return a.ia(),new lb(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{Zo:fb.bind(null,n),e_:pb.bind(null,n),n_:mb.bind(null,n),J_:gb.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),_g(n)?gg(n):n.Aa.set("Unknown")):(await n.Va.stop(),oI(n))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t,r,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new Fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,a){const u=Date.now()+r,d=new yg(e,t,u,o,a);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aI(n,e){if(ts("AsyncQueue",`${e}: ${n}`),Ca(n))return new me(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{static emptySet(e){return new oa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||we.comparator(t.key,r.key):(t,r)=>we.comparator(t.key,r.key),this.keyedMap=Nl(),this.sortedSet=new _t(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new oa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this.fa=new _t(we.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):xe(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class _a{constructor(e,t,r,o,a,u,d,p,_){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=_}static fromInitialDocuments(e,t,r,o,a){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new _a(e,t,oa.emptySet(t),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&od(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class vb{constructor(){this.queries=H0(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const o=Ue(t),a=o.queries;o.queries=H0(),a.forEach((u,d)=>{for(const p of d.wa)p.onError(r)})})(this,new me(ee.ABORTED,"Firestore shutting down"))}}function H0(){return new Xi(n=>OT(n),od)}async function wb(n,e){const t=Ue(n);let r=3;const o=e.query;let a=t.queries.get(o);a?!a.Sa()&&e.ba()&&(r=2):(a=new yb,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(o,!0);break;case 1:a.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const d=aI(u,`Initialization of query '${Go(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&vg(t)}async function Eb(n,e){const t=Ue(n),r=e.query;let o=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?o=e.ba()?0:1:!a.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Tb(n,e){const t=Ue(n);let r=!1;for(const o of e){const a=o.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(o)&&(r=!0);u.ya=o}}r&&vg(t)}function Ib(n,e,t){const r=Ue(n),o=r.queries.get(e);if(o)for(const a of o.wa)a.onError(t);r.queries.delete(e)}function vg(n){n.Da.forEach(e=>{e.next()})}var Jp,$0;($0=Jp||(Jp={})).Fa="default",$0.Cache="cache";class Sb{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new _a(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=_a.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Jp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.key=e}}class uI{constructor(e){this.key=e}}class Cb{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Be(),this.mutatedKeys=Be(),this.Xa=LT(e),this.eu=new oa(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new B0,o=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,T)=>{const I=o.get(w),b=ad(this.query,T)?T:null,j=!!I&&this.mutatedKeys.has(I.key),M=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let z=!1;I&&b?I.data.isEqual(b.data)?j!==M&&(r.track({type:3,doc:b}),z=!0):this.iu(I,b)||(r.track({type:2,doc:b}),z=!0,(p&&this.Xa(b,p)>0||_&&this.Xa(b,_)<0)&&(d=!0)):!I&&b?(r.track({type:0,doc:b}),z=!0):I&&!b&&(r.track({type:1,doc:I}),z=!0,(p||_)&&(d=!0)),z&&(b?(u=u.add(b),a=M?a.add(w):a.delete(w)):(u=u.delete(w),a=a.delete(w)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const w=this.query.limitType==="F"?u.last():u.first();u=u.delete(w.key),a=a.delete(w.key),r.track({type:1,doc:w})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort((w,T)=>function(b,j){const M=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xe(20277,{At:z})}};return M(b)-M(j)}(w.type,T.type)||this.Xa(w.doc,T.doc)),this.su(r),o=o!=null&&o;const d=t&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,_=p!==this.Ya;return this.Ya=p,u.length!==0||_?{snapshot:new _a(this.query,e.eu,a,u,e.mutatedKeys,p===0,_,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new B0,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Be(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new uI(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new lI(r))}),t}uu(e){this.Ha=e.qs,this.Za=Be();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return _a.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const wg="SyncEngine";class xb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class kb{constructor(e){this.key=e,this.lu=!1}}class Rb{constructor(e,t,r,o,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Xi(d=>OT(d),od),this.Tu=new Map,this.Iu=new Set,this.du=new _t(we.comparator),this.Eu=new Map,this.Au=new cg,this.Ru={},this.Vu=new Map,this.mu=ma.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Ab(n,e,t=!0){const r=pI(n);let o;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.cu()):o=await cI(r,e,t,!0),o}async function Nb(n,e){const t=pI(n);await cI(t,e,!0,!1)}async function cI(n,e,t,r){const o=await Z2(n.localStore,xr(e)),a=o.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await Pb(n,e,a,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&sI(n.remoteStore,o),d}async function Pb(n,e,t,r,o){n.gu=(T,I,b)=>async function(M,z,ae,W){let ne=z.view.nu(ae);ne.Ds&&(ne=await L0(M.localStore,z.query,!1).then(({documents:D})=>z.view.nu(D,ne)));const re=W&&W.targetChanges.get(z.targetId),fe=W&&W.targetMismatches.get(z.targetId)!=null,de=z.view.applyChanges(ne,M.isPrimaryClient,re,fe);return q0(M,z.targetId,de._u),de.snapshot}(n,T,I,b);const a=await L0(n.localStore,e,!0),u=new Cb(e,a.qs),d=u.nu(a.documents),p=yu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",o),_=u.applyChanges(d,n.isPrimaryClient,p);q0(n,t,_._u);const w=new xb(e,t,u);return n.Pu.set(e,w),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),_.snapshot}async function bb(n,e,t){const r=Ue(n),o=r.Pu.get(e),a=r.Tu.get(o.targetId);if(a.length>1)return r.Tu.set(o.targetId,a.filter(u=>!od(u,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Yp(r.localStore,o.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(o.targetId),t&&pg(r.remoteStore,o.targetId),Zp(r,o.targetId)}).catch(td)):(Zp(r,o.targetId),await Yp(r.localStore,o.targetId,!0))}async function Db(n,e){const t=Ue(n),r=t.Pu.get(e),o=t.Tu.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),pg(t.remoteStore,r.targetId))}async function hI(n,e){const t=Ue(n);try{const r=await X2(t.localStore,e);e.targetChanges.forEach((o,a)=>{const u=t.Eu.get(a);u&&(ht(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.lu=!0:o.modifiedDocuments.size>0?ht(u.lu,14607):o.removedDocuments.size>0&&(ht(u.lu,42227),u.lu=!1))}),await fI(t,r,e)}catch(r){await td(r)}}function W0(n,e,t){const r=Ue(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.Pu.forEach((a,u)=>{const d=u.view.va(e);d.snapshot&&o.push(d.snapshot)}),function(u,d){const p=Ue(u);p.onlineState=d;let _=!1;p.queries.forEach((w,T)=>{for(const I of T.wa)I.va(d)&&(_=!0)}),_&&vg(p)}(r.eventManager,e),o.length&&r.hu.J_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ob(n,e,t){const r=Ue(n);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.Eu.get(e),a=o&&o.key;if(a){let u=new _t(we.comparator);u=u.insert(a,en.newNoDocument(a,Ce.min()));const d=Be().add(a),p=new cd(Ce.min(),new Map,new _t(be),u,d);await hI(r,p),r.du=r.du.remove(a),r.Eu.delete(e),Eg(r)}else await Yp(r.localStore,e,!1).then(()=>Zp(r,e,t)).catch(td)}function Zp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||dI(n,r)})}function dI(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(pg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Eg(n))}function q0(n,e,t){for(const r of t)r instanceof lI?(n.Au.addReference(r.key,e),Lb(n,r)):r instanceof uI?(oe(wg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||dI(n,r.key)):xe(19791,{yu:r})}function Lb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(oe(wg,"New document in limbo: "+t),n.Iu.add(r),Eg(n))}function Eg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new we(ct.fromString(e)),r=n.mu.next();n.Eu.set(r,new kb(t)),n.du=n.du.insert(t,r),sI(n.remoteStore,new Ms(xr(og(t.path)),r,"TargetPurposeLimboResolution",nd.ue))}}async function fI(n,e,t){const r=Ue(n),o=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach((d,p)=>{u.push(r.gu(p,e,t).then(_=>{var w;if((_||t)&&r.isPrimaryClient){const T=_?!_.fromCache:(w=t?.targetChanges.get(p.targetId))===null||w===void 0?void 0:w.current;r.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(_){o.push(_);const T=dg.Es(p.targetId,_);a.push(T)}}))}),await Promise.all(u),r.hu.J_(o),await async function(p,_){const w=Ue(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>G.forEach(_,I=>G.forEach(I.Is,b=>w.persistence.referenceDelegate.addReference(T,I.targetId,b)).next(()=>G.forEach(I.ds,b=>w.persistence.referenceDelegate.removeReference(T,I.targetId,b)))))}catch(T){if(!Ca(T))throw T;oe(fg,"Failed to update sequence numbers: "+T)}for(const T of _){const I=T.targetId;if(!T.fromCache){const b=w.Fs.get(I),j=b.snapshotVersion,M=b.withLastLimboFreeSnapshotVersion(j);w.Fs=w.Fs.insert(I,M)}}}(r.localStore,a))}async function Mb(n,e){const t=Ue(n);if(!t.currentUser.isEqual(e)){oe(wg,"User change. New user:",e.toKey());const r=await eI(t.localStore,e);t.currentUser=e,function(a,u){a.Vu.forEach(d=>{d.forEach(p=>{p.reject(new me(ee.CANCELLED,u))})}),a.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fI(t,r.Bs)}}function Vb(n,e){const t=Ue(n),r=t.Eu.get(e);if(r&&r.lu)return Be().add(r.key);{let o=Be();const a=t.Tu.get(e);if(!a)return o;for(const u of a){const d=t.Pu.get(u);o=o.unionWith(d.view.tu)}return o}}function pI(n){const e=Ue(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=hI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ob.bind(null,e),e.hu.J_=Tb.bind(null,e.eventManager),e.hu.pu=Ib.bind(null,e.eventManager),e}class Oh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nI(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Y2(this.persistence,new G2,e.initialUser,this.serializer)}Du(e){return new ZT(hg.Vi,this.serializer)}bu(e){return new tb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oh.provider={build:()=>new Oh};class Fb extends Oh{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ht(this.persistence.referenceDelegate instanceof Dh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new b2(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new ZT(r=>Dh.Vi(r,t),this.serializer)}}class em{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>W0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mb.bind(null,this.syncEngine),await _b(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vb}()}createDatastore(e){const t=nI(e.databaseInfo.databaseId),r=function(a){return new ob(a)}(e.databaseInfo);return function(a,u,d,p){return new cb(a,u,d,p)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,o,a,u,d){return new db(r,o,a,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>W0(this.syncEngine,t,0),function(){return F0.C()?new F0:new nb}())}createSyncEngine(e,t){return function(o,a,u,d,p,_,w){const T=new Rb(o,a,u,d,p,_);return w&&(T.fu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const a=Ue(o);oe(ga,"RemoteStore shutting down."),a.Ia.add(5),await vu(a),a.Ea.shutdown(),a.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}em.provider={build:()=>new em};/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ts("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="FirestoreClient";class Ub{constructor(e,t,r,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=Jt.UNAUTHENTICATED,this.clientId=tg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{oe(ei,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(oe(ei,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=aI(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cp(n,e){n.asyncQueue.verifyOperationInProgress(),oe(ei,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async o=>{r.isEqual(o)||(await eI(e.localStore,o),r=o)}),e.persistence.setDatabaseDeletedListener(()=>{Ks("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{oe("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{Ks("Terminating Firestore due to IndexedDb database deletion failed",o)})}),n._offlineComponents=e}async function G0(n,e){n.asyncQueue.verifyOperationInProgress();const t=await zb(n);oe(ei,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>z0(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,o)=>z0(e.remoteStore,o)),n._onlineComponents=e}async function zb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe(ei,"Using user provided OfflineComponentProvider");try{await cp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Ks("Error using user provided cache. Falling back to memory cache: "+t),await cp(n,new Oh)}}else oe(ei,"Using default OfflineComponentProvider"),await cp(n,new Fb(void 0));return n._offlineComponents}async function Bb(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe(ei,"Using user provided OnlineComponentProvider"),await G0(n,n._uninitializedComponentsProvider._online)):(oe(ei,"Using default OnlineComponentProvider"),await G0(n,new em))),n._onlineComponents}async function Hb(n){const e=await Bb(n),t=e.eventManager;return t.onListen=Ab.bind(null,e.syncEngine),t.onUnlisten=bb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Nb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Db.bind(null,e.syncEngine),t}function $b(n,e,t={}){const r=new Fi;return n.asyncQueue.enqueueAndForget(async()=>function(a,u,d,p,_){const w=new jb({next:I=>{w.Ou(),u.enqueueAndForget(()=>Eb(a,T));const b=I.docs.has(d);!b&&I.fromCache?_.reject(new me(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&I.fromCache&&p&&p.source==="server"?_.reject(new me(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(I)},error:I=>_.reject(I)}),T=new Sb(og(d.path),w,{includeMetadataChanges:!0,ka:!0});return wb(a,T)}(await Hb(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function mI(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const K0=new Map;/**
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
 */const gI="firestore.googleapis.com",Q0=!0;class Y0{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new me(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gI,this.ssl=Q0}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Q0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=JT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<N2)throw new me(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new me(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new me(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new me(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tg{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Y0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Y0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tP;switch(r.type){case"firstParty":return new iP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new me(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=K0.get(t);r&&(oe("ComponentProvider","Removing Datastore"),K0.delete(t),r.terminate())}(this),Promise.resolve()}}function Wb(n,e,t,r={}){var o;n=Fp(n,Tg);const a=ti(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;a&&(om(`https://${p}`),am("Firestore",!0)),u.host!==gI&&u.host!==p&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},u),{host:p,ssl:a,emulatorOptions:r});if(!$s(_,d)&&(n._setSettings(_),r.mockUserToken)){let w,T;if(typeof r.mockUserToken=="string")w=r.mockUserToken,T=Jt.MOCK_USER;else{w=fw(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new me(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Jt(I)}n._authCredentials=new nP(new wT(w,T))}}/**
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
 */class Ig{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ig(this.firestore,e,this._query)}}class ln{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ou(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ln(this.firestore,e,this._key)}toJSON(){return{type:ln._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(gu(t,ln._jsonSchema))return new ln(e,r||null,new we(ct.fromString(t.referencePath)))}}ln._jsonSchemaVersion="firestore/documentReference/1.0",ln._jsonSchema={type:Tt("string",ln._jsonSchemaVersion),referencePath:Tt("string")};class ou extends Ig{constructor(e,t,r){super(e,t,og(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ln(this.firestore,null,new we(e))}withConverter(e){return new ou(this.firestore,e,this._path)}}function qb(n,e,...t){if(n=An(n),arguments.length===1&&(e=tg.newId()),cP("doc","path",e),n instanceof Tg){const r=ct.fromString(e,...t);return u0(r),new ln(n,null,new we(r))}{if(!(n instanceof ln||n instanceof ou))throw new me(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ct.fromString(e,...t));return u0(r),new ln(n.firestore,n instanceof ou?n.converter:null,new we(r))}}/**
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
 */const X0="AsyncQueue";class J0{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new rI(this,"async_queue_retry"),this.oc=()=>{const r=up();r&&oe(X0,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=up();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=up();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Fi;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ca(e))throw e;oe(X0,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,ts("INTERNAL UNHANDLED ERROR: ",Z0(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=yg.createAndSchedule(this,e,t,r,a=>this.lc(a));return this.ec.push(o),o}ac(){this.tc&&xe(47125,{hc:Z0(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Z0(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class _I extends Tg{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new J0,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new J0(e),this._firestoreClient=void 0,await e}}}function Gb(n,e){const t=typeof n=="object"?n:hm(),r=typeof n=="string"?n:Rh,o=Bh(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=cw("firestore");a&&Wb(o,...a)}return o}function Kb(n){if(n._terminated)throw new me(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Qb(n),n._firestoreClient}function Qb(n){var e,t,r;const o=n._freezeSettings(),a=function(d,p,_,w){return new CP(d,p,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,mI(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new Ub(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(d){const p=d?._online.build();return{_offline:d?._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class Er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Er(qt.fromBase64String(e))}catch(t){throw new me(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Er(qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Er._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gu(e,Er._jsonSchema))return Er.fromBase64String(e.bytes)}}Er._jsonSchemaVersion="firestore/bytes/1.0",Er._jsonSchema={type:Tt("string",Er._jsonSchemaVersion),bytes:Tt("string")};/**
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
 */class yI{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new me(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new an(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new me(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new me(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Bs._jsonSchemaVersion}}static fromJSON(e){if(gu(e,Bs._jsonSchema))return new Bs(e.latitude,e.longitude)}}Bs._jsonSchemaVersion="firestore/geoPoint/1.0",Bs._jsonSchema={type:Tt("string",Bs._jsonSchemaVersion),latitude:Tt("number"),longitude:Tt("number")};/**
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
 */class Hs{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Hs._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gu(e,Hs._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Hs(e.vectorValues);throw new me(ee.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Hs._jsonSchemaVersion="firestore/vectorValue/1.0",Hs._jsonSchema={type:Tt("string",Hs._jsonSchemaVersion),vectorValues:Tt("object")};const Yb=new RegExp("[~\\*/\\[\\]]");function Xb(n,e,t){if(e.search(Yb)>=0)throw ew(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new yI(...e.split("."))._internalPath}catch{throw ew(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function ew(n,e,t,r,o){let a=`Function ${e}() called with invalid data`;a+=". ";let u="";return new me(ee.INVALID_ARGUMENT,a+n+u)}/**
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
 */class vI{constructor(e,t,r,o,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Jb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wI("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Jb extends vI{data(){return super.data()}}function wI(n,e){return typeof e=="string"?Xb(n,e):e instanceof yI?e._internalPath:e._delegate._internalPath}class Zb{convertValue(e,t="none"){switch(Js(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw xe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _u(e,(o,a)=>{r[o]=this.convertValue(a,t)}),r}convertVectorValue(e){var t,r,o;const a=(o=(r=(t=e.fields)===null||t===void 0?void 0:t[Up].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map(u=>gt(u.doubleValue));return new Hs(a)}convertGeoPoint(e){return new Bs(gt(e.latitude),gt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=sd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ru(e));default:return null}}convertTimestamp(e){const t=Ys(e);return new Et(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ct.fromString(e);ht(XT(r),9688,{name:e});const o=new su(r.get(1),r.get(3)),a=new we(r.popFirst(5));return o.isEqual(t)||ts(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}class bl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ui extends vI{constructor(e,t,r,o,a,u){super(e,t,r,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(wI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new me(ee.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ui._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ui._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ui._jsonSchema={type:Tt("string",Ui._jsonSchemaVersion),bundleSource:Tt("string","DocumentSnapshot"),bundleName:Tt("string"),bundle:Tt("string")};class sh extends Ui{data(e={}){return super.data(e)}}class Wl{constructor(e,t,r,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new bl(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new sh(this._firestore,this._userDataWriter,r.key,r,new bl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new me(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map(d=>{const p=new sh(o._firestore,o._userDataWriter,d.doc.key,d.doc,new bl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const p=new sh(o._firestore,o._userDataWriter,d.doc.key,d.doc,new bl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return d.type!==0&&(_=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),w=u.indexOf(d.doc.key)),{type:eD(d.type),doc:p,oldIndex:_,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new me(ee.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],o=[];return this.docs.forEach(a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function eD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xe(61501,{type:n})}}/**
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
 */function tD(n){n=Fp(n,ln);const e=Fp(n.firestore,_I);return $b(Kb(e),n._key).then(t=>rD(e,n,t))}Wl._jsonSchemaVersion="firestore/querySnapshot/1.0",Wl._jsonSchema={type:Tt("string",Wl._jsonSchemaVersion),bundleSource:Tt("string","QuerySnapshot"),bundleName:Tt("string"),bundle:Tt("string")};class nD extends Zb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Er(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ln(this.firestore,null,t)}}function rD(n,e,t){const r=t.docs.get(e._key),o=new nD(n);return new Ui(n,o,e._key,r,new bl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Sa=o})(Ki),zi(new Ws("firestore",(r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new _I(new rP(r.getProvider("auth-internal")),new oP(u,r.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new me(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new su(_.options.projectId,w)}(u,o),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),Ir(s0,i0,e),Ir(s0,i0,"esm2017")})();const sD={apiKey:"AIzaSyCTA3NZsYoSeGskrIL_2isF2aCqLpEsRYc",authDomain:"rbgh-app.firebaseapp.com",databaseURL:"https://rbgh-app-default-rtdb.europe-west1.firebasedatabase.app",projectId:"rbgh-app",storageBucket:"rbgh-app.firebasestorage.app",messagingSenderId:"955092745966",appId:"1:955092745966:web:237adaa1a37752a93ebdff",measurementId:"G-004FZK6EXT"},Sg=yw(sD),hp=Uk(Sg),dp=JN(Sg),iD=Gb(Sg),oD=H1(n=>{const e=localStorage.getItem("user"),t=e?JSON.parse(e):null;return{user:t,isLoading:!1,error:null,isAuthenticated:!!t,login:async({emailOrUsername:r,password:o,rememberMe:a})=>{n({isLoading:!0,error:null});try{const d=(await kx(hp,r,o)).user,p={id:d.uid,email:d.email||"",username:d.displayName||"",name:d.displayName||""};a&&localStorage.setItem("user",JSON.stringify(p)),n({user:p,isAuthenticated:!0,isLoading:!1})}catch(u){n({error:u.message||"Login failed",isLoading:!1})}},logout:async()=>{await hp.signOut(),localStorage.removeItem("user"),n({user:null,isAuthenticated:!1,error:null})},forgotPassword:async r=>{n({isLoading:!0,error:null});try{await xx(hp,r),n({isLoading:!1})}catch(o){n({error:o.message||"Failed to send reset email",isLoading:!1})}},clearError:()=>n({error:null})}}),Eu=()=>{const{user:n,isLoading:e,error:t,isAuthenticated:r,login:o,logout:a,forgotPassword:u,clearError:d}=oD();return{user:n,isLoading:e,error:t,isAuthenticated:r,login:o,logout:a,forgotPassword:u,clearError:d}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var aD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lD=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Qe=(n,e)=>{const t=_e.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:u,className:d="",children:p,..._},w)=>_e.createElement("svg",{ref:w,...aD,width:o,height:o,stroke:r,strokeWidth:u?Number(a)*24/Number(o):a,className:["lucide",`lucide-${lD(n)}`,d].join(" "),..._},[...e.map(([T,I])=>_e.createElement(T,I)),...Array.isArray(p)?p:[p]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EI=Qe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=Qe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uD=Qe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cD=Qe("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hD=Qe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dD=Qe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=Qe("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fD=Qe("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=Qe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pD=Qe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mD=Qe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=Qe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gD=Qe("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=Qe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=Qe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=Qe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=Qe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TI=Qe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yD=Qe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vD=Qe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=Qe("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=Qe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=Qe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wD=Qe("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const II=Qe("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SI=Qe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=Qe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=Qe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=Qe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),TD=({size:n="md",className:e=""})=>{const t={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8"};return v.jsx(_D,{className:`animate-spin ${t[n]} ${e}`})},tt=({variant:n="primary",size:e="md",loading:t=!1,children:r,className:o="",disabled:a,...u})=>{const d="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",p={primary:"bg-primary text-on-primary hover:bg-primary focus:ring-primary  shadow-md hover:shadow-lg",secondary:"bg-secondary text-on-secondary hover:bg-secondary focus:ring-secondary  shadow-md hover:shadow-lg",outline:"border border-default text-default hover:bg-subtle focus:ring-primary",ghost:"text-muted hover:text-default hover:bg-subtle focus:ring-default"},_={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"};return v.jsxs("button",{className:`${d} ${p[n]} ${_[e]} ${o}`,disabled:a||t,...u,children:[t&&v.jsx(TD,{size:"sm",className:"mr-2"}),r]})},Vh=_e.forwardRef(({label:n,error:e,icon:t,className:r="",...o},a)=>v.jsxs("div",{className:"space-y-1",children:[n&&v.jsx("label",{className:"block text-sm font-medium text-default text-subtle",children:n}),v.jsxs("div",{className:"relative",children:[t&&v.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:v.jsx("div",{className:"text-muted ",children:t})}),v.jsx("input",{ref:a,className:`
              block w-full rounded-lg border border-default bg-bg bg-subtle px-3 py-2 text-default  placeholder-gray-500 
              focus:border-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500  focus:ring-offset-1 
              disabled:bg-gray-50  disabled:text-gray-500  transition-all duration-200
              ${t?"pl-10":""}
              ${e?"border-red-500  focus:border-red-500 focus:ring-red-500":""}
              ${r}
            `,...o})]}),e&&v.jsx("p",{className:"text-sm text-red-600  mt-1",children:e})]}));Vh.displayName="Input";const xg=n=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n),ID=n=>n.length>=3&&/^[a-zA-Z0-9_]+$/.test(n),SD=n=>n.length>=6,rw=n=>xg(n)?"email":"username",CD=({onForgotPassword:n})=>{const[e,t]=_e.useState({emailOrUsername:"",password:"",rememberMe:!1}),[r,o]=_e.useState({}),[a,u]=_e.useState(!1),[d,p]=_e.useState({}),{login:_,isLoading:w,error:T,clearError:I}=Eu();_e.useEffect(()=>{if(T){const W=setTimeout(()=>{I()},5e3);return()=>clearTimeout(W)}},[T,I]);const b=()=>{const W={};if(!e.emailOrUsername.trim())W.emailOrUsername="Email or username is required";else{const ne=rw(e.emailOrUsername);ne==="email"&&!xg(e.emailOrUsername)?W.emailOrUsername="Please enter a valid email address":ne==="username"&&!ID(e.emailOrUsername)&&(W.emailOrUsername="Username must be at least 3 characters and contain only letters, numbers, and underscores")}return e.password?SD(e.password)||(W.password="Password must be at least 6 characters"):W.password="Password is required",o(W),Object.keys(W).length===0},j=async W=>{W.preventDefault(),b()&&await _(e)},M=(W,ne)=>{t(re=>({...re,[W]:ne})),d[W]&&o(re=>({...re,[W]:""}))},z=W=>{p(ne=>({...ne,[W]:!0})),b()},ae=rw(e.emailOrUsername)==="email"?v.jsx(rm,{size:20}):v.jsx(ED,{size:20});return v.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50    flex items-center justify-center p-3 sm:p-4",children:v.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:v.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-gray-100 ",children:v.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[v.jsxs("div",{className:"text-center mb-8",children:[v.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4",children:v.jsx(tw,{className:"w-8 h-8 text-on-primary"})}),v.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-default  mb-2",children:"Welcome Back"}),v.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Sign in to your account to continue"})]}),T&&v.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-error/10 border-error rounded-lg flex items-center space-x-2 text-error0",children:[v.jsx(EI,{size:20}),v.jsx("span",{className:"text-sm font-medium flex-1",children:T})]}),v.jsxs("form",{onSubmit:j,className:"space-y-5 sm:space-y-6",children:[v.jsx(Vh,{label:"Email or Username",type:"text",placeholder:"Enter your email or username",value:e.emailOrUsername,onChange:W=>M("emailOrUsername",W.target.value),onBlur:()=>z("emailOrUsername"),error:r.emailOrUsername,icon:ae,disabled:w}),v.jsxs("div",{className:"relative",children:[v.jsx(Vh,{label:"Password",type:a?"text":"password",placeholder:"Enter your password",value:e.password,onChange:W=>M("password",W.target.value),onBlur:()=>z("password"),error:r.password,icon:v.jsx(tw,{size:20}),disabled:w}),v.jsx("button",{type:"button",className:"absolute right-3 top-8 text-muted hover:text-subtle transition-colors",onClick:()=>u(!a),children:a?v.jsx(mD,{size:20}):v.jsx(Cg,{size:20})})]}),v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("label",{className:"flex items-center space-x-2",children:[v.jsx("input",{type:"checkbox",checked:e.rememberMe,onChange:W=>M("rememberMe",W.target.checked.toString()),className:"w-4 h-4 text-blue-600 border-gray-300   rounded focus:ring-blue-500"}),v.jsx("span",{className:"text-sm text-subtle",children:"Remember me"})]}),v.jsx("button",{type:"button",onClick:n,className:"text-sm text-primary hover:text-blue-700  font-medium transition-colors",children:"Forgot password?"})]}),v.jsxs(tt,{type:"submit",loading:w,className:"w-full",size:"lg",children:["Sign In",!w&&v.jsx(uD,{className:"ml-2 w-5 h-5"})]})]})]})})})})},xD=({onBackToLogin:n})=>{const[e,t]=_e.useState(""),[r,o]=_e.useState(""),[a,u]=_e.useState(!1),[d,p]=_e.useState(!1),{forgotPassword:_,isLoading:w}=Eu(),T=()=>e.trim()?xg(e)?(o(""),!0):(o("Please enter a valid email address"),!1):(o("Email is required"),!1),I=async M=>{M.preventDefault(),T()&&(await _(e),u(!0))},b=M=>{t(M),d&&o("")},j=()=>{p(!0),T()};return a?v.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50    flex items-center justify-center p-3 sm:p-4",children:v.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:v.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-gray-100 ",children:v.jsxs("div",{className:"px-6 sm:px-8 py-8 sm:py-12 text-center",children:[v.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6",children:v.jsx(dD,{className:"w-8 h-8 text-green-600"})}),v.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default  mb-4",children:"Check Your Email"}),v.jsxs("p",{className:"text-subtle mb-8 leading-relaxed text-sm sm:text-base",children:["We've sent a password reset link to"," ",v.jsx("span",{className:"font-medium text-default  break-all",children:e}),". Please check your email and follow the instructions to reset your password."]}),v.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[v.jsxs(tt,{onClick:n,variant:"primary",className:"w-full",size:"lg",children:[v.jsx(tm,{className:"mr-2 w-5 h-5"}),"Back to Login"]}),v.jsx(tt,{onClick:()=>u(!1),variant:"ghost",className:"w-full",children:"Didn't receive the email?"})]})]})})})}):v.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50    flex items-center justify-center p-3 sm:p-4",children:v.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:v.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-gray-100 ",children:v.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[v.jsxs("div",{className:"text-center mb-8",children:[v.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-4",children:v.jsx(rm,{className:"w-8 h-8 text-on-primary"})}),v.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-default  mb-2",children:"Reset Password"}),v.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Enter your email address and we'll send you a link to reset your password"})]}),r&&v.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-error/10 border-error rounded-lg flex items-center space-x-2 text-error0",children:[v.jsx(EI,{size:20}),v.jsx("span",{className:"text-sm font-medium flex-1",children:r})]}),v.jsxs("form",{onSubmit:I,className:"space-y-5 sm:space-y-6",children:[v.jsx(Vh,{label:"Email Address",type:"email",placeholder:"Enter your email address",value:e,onChange:M=>b(M.target.value),onBlur:j,error:r,icon:v.jsx(rm,{size:20}),disabled:w}),v.jsx(tt,{type:"submit",loading:w,className:"w-full",size:"lg",children:"Send Reset Link"})]}),v.jsx("div",{className:"mt-5 sm:mt-6 text-center",children:v.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center text-sm text-subtle hover:text-default  font-medium transition-colors",children:[v.jsx(tm,{className:"mr-2 w-4 h-4"}),"Back to Login"]})})]})})})})},kD=({isOpen:n,onClose:e})=>{const t="https://linktr.ee/esports_pxl",r=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(t)}`;return n?v.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:v.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200",children:[v.jsxs("div",{className:"flex items-center justify-between mb-6",children:[v.jsx("h2",{className:"text-xl font-bold text-default ",children:"QR Code"}),v.jsx("button",{onClick:e,className:"text-muted hover:text-subtle  transition-colors","aria-label":"Close modal",children:v.jsx(dd,{className:"w-6 h-6"})})]}),v.jsxs("div",{className:"text-center space-y-4",children:[v.jsxs("div",{className:"bg-bg p-4 rounded-xl border border-default shadow-sm hover:shadow-md  inline-block",children:[v.jsx("img",{src:r,alt:"QR Code for esports_pxl",className:"w-64 h-64 mx-auto",onError:o=>{const a=o.target;a.style.display="none",a.nextElementSibling?.classList.remove("hidden")}}),v.jsx("div",{className:"hidden w-64 h-64 bg-gray-100 bg-subtle rounded-lg flex items-center justify-center",children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"text-4xl mb-2",children:"📱"}),v.jsx("p",{className:"text-sm text-subtle",children:"QR Code"})]})})]}),v.jsxs("div",{className:"space-y-2",children:[v.jsx("p",{className:"text-sm text-subtle",children:"Scan to visit:"}),v.jsx("div",{className:"bg-gray-50 bg-subtle rounded-lg p-3",children:v.jsx("p",{className:"text-sm font-mono text-default  break-all",children:t})})]}),v.jsxs("div",{className:"flex space-x-3 pt-4",children:[v.jsx(tt,{onClick:e,variant:"outline",className:"flex-1",children:"Close"}),v.jsxs(tt,{onClick:()=>window.open(t,"_blank"),className:"flex-1",children:[v.jsx(pD,{className:"w-4 h-4 mr-2"}),"Visit"]})]})]}),v.jsx("div",{className:"mt-6 pt-4 border-t border-default shadow-sm hover:shadow-md ",children:v.jsx("p",{className:"text-xs text-gray-500  text-center",children:"Point your camera at the QR code to open the link"})})]})}):null},RD=({onAddStock:n,onShowLog:e,onTakeItem:t})=>{const[r,o]=_e.useState(!1),[a,u]=_e.useState(!1),[d,p]=_e.useState({x:20,y:20}),[_,w]=_e.useState({x:0,y:0}),T=_e.useRef(null),I=z=>{const ae="touches"in z?z.touches[0].clientX:z.clientX,W="touches"in z?z.touches[0].clientY:z.clientY;u(!0),w({x:ae-d.x,y:W-d.y})},b=z=>{if(!a)return;const ae="touches"in z?z.touches[0].clientX:z.clientX,W="touches"in z?z.touches[0].clientY:z.clientY,ne=ae-_.x,re=W-_.y,fe=window.innerWidth-64,de=window.innerHeight-64;p({x:Math.max(0,Math.min(ne,fe)),y:Math.max(0,Math.min(re,de))})},j=()=>{u(!1)};_e.useEffect(()=>{if(a)return document.addEventListener("mousemove",b),document.addEventListener("mouseup",j),document.addEventListener("touchmove",b),document.addEventListener("touchend",j),()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",j),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",j)}},[a,_]),_e.useEffect(()=>{const z=ae=>{T.current&&!T.current.contains(ae.target)&&o(!1)};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[]);const M=()=>{a||o(!r)};return v.jsx("div",{ref:T,className:"fixed z-50 select-none",style:{right:`${d.x}px`,bottom:`${d.y}px`},children:v.jsxs("div",{className:"relative",children:[r&&v.jsxs("div",{className:"absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-200",children:[v.jsx(tt,{onClick:e,className:"w-12 h-12 rounded-full shadow-lg bg-purple-500 hover:bg-purple-600 text-on-primary p-0","aria-label":"Show log",children:v.jsx(Cg,{className:"w-6 h-6"})}),v.jsx(tt,{onClick:n,className:"w-12 h-12 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-on-primary p-0","aria-label":"Add stock",children:v.jsx(Vi,{className:"w-6 h-6"})}),v.jsx(tt,{onClick:t,className:"w-12 h-12 rounded-full shadow-lg bg-primary hover:bg-blue-600 text-on-primary p-0","aria-label":"Take item",children:v.jsx(Jo,{className:"w-6 h-6"})})]}),v.jsx("button",{onMouseDown:I,onTouchStart:I,onClick:M,className:`w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-on-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-orange-500/30 ${a?"cursor-grabbing scale-110":"cursor-grab hover:scale-105"}`,"aria-label":r?"Close fridge menu":"Open fridge menu",children:v.jsx("div",{className:`transition-transform duration-200 ${r?"rotate-45":""}`,children:v.jsx(Vi,{className:"w-7 h-7"})})})]})})},AD=({onBack:n})=>{const[e,t]=_e.useState([{id:"1",name:"RedBull Energy Drink",stock:24,lastUpdated:new Date}]),[r,o]=_e.useState([{id:"1",action:"take",amount:2,user:"Alice Johnson",timestamp:new Date(Date.now()-30*60*1e3),itemName:"RedBull Energy Drink"},{id:"2",action:"add",amount:12,user:"Bob Smith",timestamp:new Date(Date.now()-2*60*60*1e3),itemName:"RedBull Energy Drink"},{id:"3",action:"take",amount:1,user:"Carol Davis",timestamp:new Date(Date.now()-4*60*60*1e3),itemName:"RedBull Energy Drink"}]),[a,u]=_e.useState(!1),[d,p]=_e.useState(!1),[_,w]=_e.useState(!1),[T,I]=_e.useState(1),[b,j]=_e.useState(1),M=W=>{const re=Math.floor((new Date().getTime()-W.getTime())/(1e3*60));if(re<1)return"Just now";if(re<60)return`${re}m ago`;const fe=Math.floor(re/60);return fe<24?`${fe}h ago`:`${Math.floor(fe/24)}d ago`},z=()=>{const W=e[0].stock;if(T>W)return;const ne=W-T;t(fe=>fe.map(de=>de.id==="1"?{...de,stock:ne,lastUpdated:new Date}:de));const re={id:Date.now().toString(),action:"take",amount:T,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};o(fe=>[re,...fe]),u(!1),I(1)},ae=()=>{const ne=e[0].stock+b;t(fe=>fe.map(de=>de.id==="1"?{...de,stock:ne,lastUpdated:new Date}:de));const re={id:Date.now().toString(),action:"add",amount:b,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};o(fe=>[re,...fe]),p(!1),j(1)};return v.jsxs("div",{className:"min-h-screen bg-subtle pb-20",children:[v.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:v.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:v.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:v.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[v.jsx(tt,{onClick:n,variant:"ghost",size:"sm",children:v.jsx(tm,{className:"w-5 h-5"})}),v.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center",children:v.jsx(II,{className:"w-6 h-6 text-on-primary"})}),v.jsxs("div",{className:"min-w-0 flex-1",children:[v.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:"Fridge"}),v.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Stock management"})]})]})})})}),v.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[v.jsx("div",{className:"grid grid-cols-1 gap-4 mb-6",children:e.map(W=>v.jsx("div",{className:"bg-bg rounded-xl p-6 border border-default shadow-sm",children:v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center",children:v.jsx(nw,{className:"w-8 h-8 text-on-primary"})}),v.jsxs("div",{className:"flex-1",children:[v.jsx("h3",{className:"text-lg font-semibold text-default  mb-1",children:W.name}),v.jsxs("div",{className:"flex items-center space-x-4 text-sm text-subtle",children:[v.jsxs("div",{className:"flex items-center space-x-1",children:[v.jsx(nw,{className:"w-4 h-4"}),v.jsxs("span",{children:[W.stock," in stock"]})]}),v.jsxs("div",{className:"flex items-center space-x-1",children:[v.jsx(Lh,{className:"w-4 h-4"}),v.jsxs("span",{children:["Updated ",M(W.lastUpdated)]})]})]})]}),v.jsxs("div",{className:"text-right",children:[v.jsx("div",{className:"text-2xl font-bold text-default ",children:W.stock}),v.jsx("div",{className:"text-sm text-gray-500 ",children:"units"})]})]})},W.id))}),v.jsxs("div",{className:"bg-bg rounded-xl border border-default",children:[v.jsx("div",{className:"p-4 border-b border-default",children:v.jsx("h2",{className:"text-lg font-semibold text-default ",children:"Recent Activity"})}),v.jsx("div",{className:"divide-y divide-gray-200 ",children:r.slice(0,5).map(W=>v.jsx("div",{className:"p-4",children:v.jsxs("div",{className:"flex items-center space-x-3",children:[v.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${W.action==="take"?"bg-red-100 ":"bg-green-100 "}`,children:W.action==="take"?v.jsx(Jo,{className:`w-4 h-4 ${W.action==="take"?"text-red-600 ":"text-green-600 "}`}):v.jsx(Vi,{className:"w-4 h-4 text-green-600 "})}),v.jsxs("div",{className:"flex-1",children:[v.jsxs("p",{className:"text-sm font-medium text-default ",children:[W.user," ",W.action==="take"?"took":"added"," ",W.amount," ",W.itemName]}),v.jsx("p",{className:"text-xs text-gray-500 ",children:M(W.timestamp)})]}),v.jsxs("div",{className:`text-sm font-medium ${W.action==="take"?"text-red-600 ":"text-green-600 "}`,children:[W.action==="take"?"-":"+",W.amount]})]})},W.id))})]})]}),v.jsx(RD,{onTakeItem:()=>u(!0),onAddStock:()=>p(!0),onShowLog:()=>w(!0)}),a&&v.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:v.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[v.jsx("h2",{className:"text-xl font-bold text-default  mb-4",children:"Take from Stock"}),v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-2",children:"Amount to take"}),v.jsxs("div",{className:"flex items-center space-x-3",children:[v.jsx(tt,{onClick:()=>I(Math.max(1,T-1)),variant:"outline",size:"sm",children:v.jsx(Jo,{className:"w-4 h-4"})}),v.jsx("span",{className:"text-lg font-semibold text-default  min-w-[3rem] text-center",children:T}),v.jsx(tt,{onClick:()=>I(Math.min(e[0].stock,T+1)),variant:"outline",size:"sm",children:v.jsx(Vi,{className:"w-4 h-4"})})]}),v.jsxs("p",{className:"text-xs text-gray-500  mt-1",children:["Available: ",e[0].stock," units"]})]}),v.jsxs("div",{className:"flex space-x-3",children:[v.jsx(tt,{onClick:()=>u(!1),variant:"outline",className:"flex-1",children:"Cancel"}),v.jsx(tt,{onClick:z,className:"flex-1",children:"Take"})]})]})]})}),d&&v.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:v.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[v.jsx("h2",{className:"text-xl font-bold text-default  mb-4",children:"Add to Stock"}),v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-2",children:"Amount to add"}),v.jsxs("div",{className:"flex items-center space-x-3",children:[v.jsx(tt,{onClick:()=>j(Math.max(1,b-1)),variant:"outline",size:"sm",children:v.jsx(Jo,{className:"w-4 h-4"})}),v.jsx("span",{className:"text-lg font-semibold text-default  min-w-[3rem] text-center",children:b}),v.jsx(tt,{onClick:()=>j(b+1),variant:"outline",size:"sm",children:v.jsx(Vi,{className:"w-4 h-4"})})]})]}),v.jsxs("div",{className:"flex space-x-3",children:[v.jsx(tt,{onClick:()=>p(!1),variant:"outline",className:"flex-1",children:"Cancel"}),v.jsx(tt,{onClick:ae,className:"flex-1",children:"Add"})]})]})]})}),_&&v.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:v.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-md shadow-2xl max-h-[80vh] overflow-hidden",children:[v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsx("h2",{className:"text-xl font-bold text-default ",children:"Activity Log"}),v.jsx(tt,{onClick:()=>w(!1),variant:"ghost",size:"sm",children:v.jsx(dd,{className:"w-5 h-5"})})]}),v.jsx("div",{className:"overflow-y-auto max-h-96 space-y-3",children:r.map(W=>v.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-50 bg-subtle rounded-lg",children:[v.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${W.action==="take"?"bg-red-100 ":"bg-green-100 "}`,children:W.action==="take"?v.jsx(Jo,{className:"w-4 h-4 text-red-600 "}):v.jsx(Vi,{className:"w-4 h-4 text-green-600 "})}),v.jsxs("div",{className:"flex-1",children:[v.jsx("p",{className:"text-sm font-medium text-default ",children:W.user}),v.jsxs("p",{className:"text-xs text-subtle",children:[W.action==="take"?"Took":"Added"," ",W.amount," units"]}),v.jsxs("p",{className:"text-xs text-gray-500 ",children:[W.timestamp.toLocaleDateString()," ",W.timestamp.toLocaleTimeString()]})]}),v.jsxs("div",{className:`text-sm font-medium ${W.action==="take"?"text-red-600 ":"text-green-600 "}`,children:[W.action==="take"?"-":"+",W.amount]})]},W.id))})]})})]})},ND=({user:n,onClose:e})=>{const t=_e.useRef(null);return _e.useEffect(()=>{const r=o=>{t.current&&!t.current.contains(o.target)&&e()};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[e]),v.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4",children:v.jsxs("div",{ref:t,className:"bg-bg rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg p-6 relative",children:[v.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-gray-500 hover:text-default ",children:v.jsx(dd,{className:"w-5 h-5"})}),v.jsx("div",{className:"flex justify-center -mt-16",children:v.jsx("img",{src:n.avatar,alt:`${n.name}'s avatar`,onError:r=>{r.currentTarget.onerror=null,r.currentTarget.style.display="none";const o=r.currentTarget.parentElement;if(o&&!o.querySelector(".fallback-avatar")){const a=document.createElement("span");a.className="fallback-avatar flex items-center justify-center w-32 h-32 rounded-full bg-subtle bg-subtle border-4 border-white  shadow-lg",a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-muted " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146"/></svg>',o.appendChild(a)}},className:"w-32 h-32 rounded-full border-4 border-white  shadow-lg"})}),v.jsx("h2",{className:"text-xl font-bold text-default  mt-4 text-center",children:n.name}),v.jsxs("div",{className:"space-y-2 mt-4",children:[v.jsxs("p",{className:"text-sm text-subtle",children:[v.jsx("strong",{children:"Username:"})," ",n.username]}),v.jsxs("p",{className:"text-sm text-subtle",children:[v.jsx("strong",{children:"Last Check-in:"})," ",n.location," at ",n.checkedInAt.toLocaleString()]}),v.jsxs("p",{className:"text-sm text-subtle",children:[v.jsx("strong",{children:"Email:"})," ",n.email||"N/A"]}),v.jsxs("p",{className:"text-sm text-subtle",children:[v.jsx("strong",{children:"Phone:"})," ",n.phoneNumber||"N/A"]}),v.jsxs("p",{className:"text-sm text-subtle",children:[v.jsx("strong",{children:"Discord:"})," ",n.discordUsername||"N/A"]}),v.jsxs("p",{className:"text-sm text-subtle",children:[v.jsx("strong",{children:"Friends:"})," ",n.friendCount||0]})]})]})})},PD=({onCheckIn:n,onCheckOut:e,onShowQR:t,onOpenFridge:r,isCheckedIn:o})=>{const[a,u]=_e.useState(!1),[d,p]=_e.useState("PXL"),[_,w]=_e.useState(0),T=[{id:"PXL",name:"PXL",color:"bg-primary hover:bg-blue-600"},{id:"RBGH",name:"RBGH",color:"bg-green-500 hover:bg-green-600"},{id:"STREAM",name:"Streaming room",color:"bg-purple-500 hover:bg-purple-600"}],I=()=>{const j=Array(_).fill("").map((M,z)=>`friend_${z+1}`);n(d,j),u(!1)},b=()=>{const j=Array(_).fill("").map((M,z)=>`friend_${z+1}`);n(d,j)};return v.jsxs(v.Fragment,{children:[!a&&v.jsx("button",{onClick:()=>u(!0),className:"fixed left-4 bottom-20 z-50 bg-primary hover:bg-blue-600 text-on-primary p-3 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/30","aria-label":"Open sidebar",children:v.jsx(yD,{className:"w-6 h-6"})}),v.jsx("div",{className:`fixed top-16 bottom-0 left-0 z-40 bg-bg shadow-lg transform ${a?"translate-x-0":"-translate-x-full"} transition-transform duration-300 w-full md:w-64`,style:{maxHeight:"calc(100vh - 4rem)"},children:v.jsxs("div",{className:"p-6 space-y-6 h-full overflow-y-auto",children:[a&&v.jsx("button",{onClick:()=>u(!1),className:"absolute top-4 right-4 z-50 bg-primary hover:bg-blue-600 text-on-primary p-2 rounded-full shadow focus:outline-none focus:ring-4 focus:ring-blue-500/30","aria-label":"Close sidebar",children:v.jsx(dd,{className:"w-6 h-6"})}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-lg font-semibold text-default  mt-6",children:o?"Change Location":"Check In"}),v.jsxs("div",{className:"mt-4",children:[v.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-3",children:o?"Select a new location to change":"Choose Location"}),v.jsx("div",{className:"space-y-2",children:T.map(j=>v.jsx("button",{onClick:()=>p(j.id),className:`w-full p-3 rounded-lg border-2 transition-all text-left ${d===j.id?"border-blue-500 bg-blue-50 bg-primary/20":"border-default shadow-sm hover:shadow-md  hover:border-gray-300 "}`,children:v.jsxs("div",{className:"flex items-center space-x-3",children:[v.jsx("div",{className:`w-4 h-4 rounded-full ${j.color.split(" ")[0]}`}),v.jsx("span",{className:"font-medium text-default ",children:j.name})]})},j.id))})]}),v.jsxs("div",{className:"mt-6",children:[v.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-3",children:o?"Update friend count":"Check in with friends"}),v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx("button",{onClick:()=>w(j=>Math.max(j-1,0)),className:"w-10 h-10 bg-subtle bg-subtle hover:bg-subtle  flex items-center justify-center transition-colors","aria-label":"Decrease friend count",children:v.jsx(Jo,{className:"w-5 h-5 text-subtle"})}),v.jsxs("div",{className:"flex items-center space-x-2 min-w-0 flex-1",children:[v.jsx(Mh,{className:"w-5 h-5 text-gray-500"}),v.jsx("span",{className:"text-lg font-semibold text-default ",children:_}),v.jsxs("span",{className:"text-sm text-gray-500 ",children:["friend",_!==1?"s":""]})]}),v.jsx("button",{onClick:()=>w(j=>Math.min(j+1,10)),className:"w-10 h-10 bg-subtle bg-subtle hover:bg-subtle  flex items-center justify-center transition-colors","aria-label":"Increase friend count",children:v.jsx(Vi,{className:"w-5 h-5 text-subtle"})})]})]}),o&&v.jsx("div",{className:"mt-6",children:v.jsx(tt,{onClick:I,className:"w-full bg-primary hover:bg-blue-600 text-on-primary p-3 rounded-lg",children:"Update"})}),!o&&v.jsx("div",{className:"mt-6",children:v.jsx(tt,{onClick:b,className:"w-full bg-primary hover:bg-blue-600 text-on-primary p-3 rounded-lg",children:"Check In"})}),o&&v.jsx("div",{className:"mt-6",children:v.jsxs(tt,{onClick:()=>{e(),u(!1)},className:"w-full bg-red-500 hover:bg-red-600 text-on-primary p-3 rounded-lg",children:[v.jsx(nm,{className:"w-5 h-5 mr-2"}),"Check Out"]})}),v.jsxs("div",{className:"mt-8 flex flex-row space-x-3",children:[v.jsxs("button",{onClick:r,className:"flex-1 flex items-center justify-center p-3 rounded-lg bg-primary hover:bg-blue-600 text-on-primary transition-all","aria-label":"Open Fridge",children:[v.jsx(II,{className:"w-5 h-5 mr-2"}),"Fridge"]}),v.jsxs("button",{onClick:t,className:"flex-1 flex items-center justify-center p-3 rounded-lg bg-primary hover:bg-blue-600 text-on-primary transition-all","aria-label":"Show QR Code",children:[v.jsx(wD,{className:"w-5 h-5 mr-2"}),"QR"]})]})]})]})})]})},sw="https://api.boelguard.me/",bD=({type:n,message:e})=>v.jsxs("div",{className:`fixed left-1/2 top-0 z-50 w-full max-w-xs sm:max-w-sm -translate-x-1/2 mt-6
      flex flex-col items-center px-4 py-3 rounded-2xl shadow-xl border
      transition-transform duration-300
      ${n==="success"?"bg-green-700 border-green-800":"bg-red-700 border-red-800"}
      animate-slideDown
    `,style:{transform:"translate(-50%, 0)"},children:[v.jsxs("div",{className:"flex items-center gap-3 w-full",children:[v.jsx("span",{className:`flex items-center justify-center w-8 h-8 rounded-full
        ${n==="success"?"bg-green-500":"bg-red-500"}
        text-on-primary text-lg`,children:n==="success"?"✓":"!"}),v.jsx("span",{className:"flex-1 text-sm font-medium text-on-primary",children:e}),v.jsx("span",{className:"ml-2 flex items-center justify-center",children:v.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",children:[v.jsx("circle",{cx:"14",cy:"14",r:"12",fill:"none",stroke:n==="success"?"#bbf7d0":"#fecaca",strokeWidth:"4",style:{opacity:.7}}),v.jsx("circle",{cx:"14",cy:"14",r:"12",fill:"none",stroke:n==="success"?"#22c55e":"#ef4444",strokeWidth:"4",strokeDasharray:2*Math.PI*12,strokeDashoffset:2*Math.PI*12,transform:"rotate(-90 14 14)",style:{transition:"stroke-dashoffset 2s linear",strokeDashoffset:2*Math.PI*12,animation:"circle-timer 2s linear forwards"}})]})})]}),v.jsx("style",{children:`
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
      `})]});function Gc(n){return n?n.charAt(0).toUpperCase()+n.slice(1).toLowerCase():""}const DD=()=>{const{user:n,logout:e}=Eu(),[t,r]=_e.useState([]),[o,a]=_e.useState("ALL"),[u,d]=_e.useState(!1),[p,_]=_e.useState(!1),[w,T]=_e.useState(null),[I,b]=_e.useState(null),j=[{id:"RBGH",name:"Red Bull",color:"bg-green-500"},{id:"PXL",name:"PXL",color:"bg-primary"},{id:"STREAM",name:"Streaming room",color:"bg-purple-500"}];_e.useEffect(()=>{const C=localStorage.getItem("checkedInUsers");if(C)try{const P=JSON.parse(C);r(P.map(L=>({...L,checkedInAt:new Date(L.checkedInAt)})))}catch{}const k=ip(dp,"users"),A=$N(k,P=>{const L=P.val();if(!L){r([]),localStorage.setItem("checkedInUsers",JSON.stringify([]));return}const R=Object.entries(L).filter(([Re,Se])=>Se.checkInStatus===!0).map(([Re,Se])=>({id:Re,username:Se.username,name:`${Se.firstname} ${Se.lastname}`,location:Se.checkedInWhere||"Unknown",checkedInAt:new Date(Se.checkedInAt??Date.now()),isResponsible:Se.isResponsible||!1,friendCount:Se.friendCount||0,activeAssignment:Se.activeAssignment||!1,discordUsername:Se.discordUsername||"",email:Se.email||"",phoneNumber:Se.phoneNumber||"",avatar:`${sw}assets/headshot?name=${Se.username}.jpg`}));R.sort((Re,Se)=>Re.isResponsible&&!Se.isResponsible?-1:!Re.isResponsible&&Se.isResponsible?1:Re.username.localeCompare(Se.username)),r(R),localStorage.setItem("checkedInUsers",JSON.stringify(R.map(Re=>({...Re,checkedInAt:Re.checkedInAt.toISOString()})))),R.forEach(Re=>{const Se=new window.Image;Se.src=Re.avatar||`${sw}assets/headshot?name=${Re.username}.jpg`})});return()=>A()},[]);const M=async(C,k=[])=>{if(!n)return;const A=qb(iD,"users",n.id),P=await tD(A);let L="",R="";if(P.exists()){const Se=P.data();L=Gc(Se.firstname||""),R=Gc(Se.lastname||"")}else L=Gc(n.name?.split(" ")[0]??n.username??""),R=Gc(n.name?.split(" ")[1]??"");const Re=ip(dp,`users/${n.id}`);try{await n0(Re,{checkInStatus:!0,checkedInWhere:C,checkedInAt:Date.now(),username:n.username,firstname:L,lastname:R,friendCount:k.length,activeAssignment:!1,isResponsible:!1}),b({type:"success",message:"Successfully checked in!"})}catch{b({type:"error",message:"Error checking in. Please try again."})}"Notification"in window&&(Notification.permission==="granted"?z():Notification.permission!=="denied"&&Notification.requestPermission().then(Se=>{Se==="granted"&&z()}))};function z(){const C=new Date;function k(A){const P=Ge=>Ge.toString().padStart(2,"0"),L=P(A.getDate()),R=P(A.getMonth()+1),Re=A.getFullYear(),Se=P(A.getHours()),Pt=P(A.getMinutes());return`${L}/${R}/${Re} - ${Se}:${Pt}`}new Notification("You are checked in",{body:`Checked in since: ${k(C)}`,icon:"/rbgh_logo.png"})}const ae=async()=>{if(!n)return;const C=ip(dp,`users/${n.id}`);try{await n0(C,{checkInStatus:!1,checkedInWhere:null,checkedInAt:null,friendCount:0,activeAssignment:!1,isResponsible:!1}),b({type:"success",message:"Successfully checked out!"})}catch{b({type:"error",message:"Error checking out. Please try again."})}},W=t.filter(C=>o==="ALL"||C.location===o),ne=C=>j.find(k=>k.id===C),re=C=>{const A=Math.floor((new Date().getTime()-C.getTime())/(1e3*60));if(A<1)return"Just now";if(A<60)return`${A}m ago`;const P=Math.floor(A/60);return P<24?`${P}h ago`:`${Math.floor(P/24)}d ago`},fe=t.find(C=>C.id===n?.id),de=C=>{T(C)},D=()=>{T(null)};return _e.useEffect(()=>{if(I){const C=setTimeout(()=>{b(null)},2e3);return()=>clearTimeout(C)}},[I]),p?v.jsx(AD,{onBack:()=>_(!1)}):v.jsxs("div",{className:"min-h-screen bg-subtle pb-20",children:[I&&v.jsx(bD,{type:I.type,message:I.message}),v.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:v.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:v.jsxs("div",{className:"flex justify-between items-center py-3 sm:py-4",children:[v.jsx("div",{className:"flex items-center space-x-3 sm:space-x-4",children:v.jsxs("div",{className:"min-w-0 flex-1",children:[v.jsxs("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:["Welcome ",n?.username]}),v.jsxs("p",{className:"text-subtle text-sm sm:text-base truncate",children:[W.length," users checked in"]})]})}),v.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[v.jsx(tt,{variant:"ghost",size:"sm",className:"hidden sm:flex",children:v.jsx(cD,{className:"w-5 h-5"})}),v.jsx(tt,{variant:"ghost",size:"sm",className:"hidden sm:flex",children:v.jsx(SI,{className:"w-5 h-5"})}),v.jsxs(tt,{onClick:e,variant:"outline",size:"sm",className:"hidden sm:flex",children:[v.jsx(nm,{className:"w-4 h-4 mr-2"}),v.jsx("span",{children:"Logout"})]}),v.jsx(tt,{onClick:e,variant:"outline",size:"sm",className:"sm:hidden",children:v.jsx(nm,{className:"w-4 h-4"})})]})]})})}),w&&v.jsx(ND,{user:w,onClose:D}),v.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[fe&&v.jsx("div",{className:"mb-6 bg-gradient-theme rounded-xl p-4 border border-default",children:v.jsxs("div",{className:"flex items-center space-x-3",children:[v.jsx("div",{className:`w-3 h-3 rounded-full ${ne(fe.location)?.color}`}),v.jsxs("div",{className:"flex-1",children:[v.jsxs("p",{className:"text-sm font-medium text-default ",children:["You're checked in at ",ne(fe.location)?.name]}),v.jsxs("p",{className:"text-xs text-subtle",children:[re(fe.checkedInAt),(fe.friendCount??0)>0&&v.jsxs("span",{className:"ml-2",children:["• With ",fe.friendCount," friend",(fe.friendCount??0)>1?"s":""]})]})]})]})}),v.jsx("div",{className:"mb-6 space-y-4",children:v.jsxs("div",{className:"flex space-x-2 overflow-x-auto pb-2",children:[v.jsxs("button",{onClick:()=>a("ALL"),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center ${o==="ALL"?"bg-primary text-on-primary":"bg-subtle text-default hover:bg-subtle"}`,children:["All Locations",v.jsx("span",{className:"ml-2 inline-block bg-bg bg-opacity-30 text-xs font-semibold rounded-full px-2 py-0.5",children:t.length})]}),j.map(C=>{const k=t.filter(A=>A.location===C.id).length;return v.jsxs("button",{onClick:()=>a(C.id),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center ${o===C.id?"bg-primary text-on-primary":"bg-subtle bg-subtle text-default text-subtle hover:bg-subtle "}`,children:[C.name,v.jsx("span",{className:"ml-2 inline-block bg-bg bg-opacity-30 text-xs font-semibold rounded-full px-2 py-0.5",children:k})]},C.id)})]})}),v.jsx("div",{className:"space-y-3 custom-scrollbar overflow-y-auto",style:{maxHeight:"calc(100vh - 320px)"},children:W.length===0?v.jsxs("div",{className:"text-center py-12",children:[v.jsx(TI,{className:"w-12 h-12 text-subtle mx-auto mb-4"}),v.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No users found"}),v.jsx("p",{className:"text-subtle",children:"No users are currently checked in"})]}):W.map(C=>{const k=ne(C.location);return v.jsx("div",{className:"bg-bg rounded-xl p-4 border border-default hover:shadow-md transition-shadow cursor-pointer",onClick:()=>de(C),children:v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx("div",{className:"flex-shrink-0",children:v.jsx("img",{src:C.avatar,alt:`${C.name}'s avatar`,onError:A=>{A.currentTarget.onerror=null,A.currentTarget.style.display="none";const P=A.currentTarget.parentElement;if(P&&!P.querySelector(".fallback-avatar")){const L=document.createElement("span");L.className="fallback-avatar flex items-center justify-center w-12 h-12 rounded-full bg-subtle bg-subtle",L.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-muted " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',P.appendChild(L)}},className:"w-12 h-12 rounded-full"})}),v.jsxs("div",{className:"flex-1 min-w-0",children:[v.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[v.jsx("h3",{className:"font-semibold text-default  truncate",children:C.name}),C.id===n?.id&&v.jsx("span",{className:"px-2 py-1 bg-primary bg-primary text-on-primary  text-xs rounded-full",children:"You"})]}),v.jsxs("p",{className:"text-sm text-subtle mb-2",children:["@",C.username]}),v.jsxs("div",{className:"flex items-center space-x-4 text-sm",children:[v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("div",{className:`w-2 h-2 rounded-full ${k?.color}`}),v.jsx("span",{className:"text-subtle",children:k?.name})]}),v.jsxs("div",{className:"flex items-center space-x-1 text-subtle ",children:[v.jsx(Lh,{className:"w-4 h-4"}),v.jsx("span",{children:re(C.checkedInAt)})]})]}),(C.friendCount??0)>0&&v.jsxs("div",{className:"flex items-center space-x-1 mt-2 text-sm text-gray-500 ",children:[v.jsx(Mh,{className:"w-4 h-4"}),v.jsxs("span",{children:["With ",C.friendCount," friend",(C.friendCount??0)>1?"s":""]})]})]})]})},`${C.id}-${C.checkedInAt.getTime()}`)})})]}),v.jsx(PD,{onCheckIn:M,onCheckOut:ae,onShowQR:()=>d(!0),onOpenFridge:()=>_(!0),isCheckedIn:!!fe}),v.jsx(kD,{isOpen:u,onClose:()=>d(!1)})]})},OD=[{id:"1",title:"Clean up streaming room",responsibles:["john","jane"],time:"16:00",date:new Date,location:"STREAM",visitors:5,remarks:"Don't forget the cables!",completed:!1},{id:"2",title:"Opening Hub",responsibles:[],time:"11:00",date:new Date(Date.now()+864e5),location:"RBGH",completed:!0},{id:"3",title:"Check projector",responsibles:["jane"],time:"10:00",date:new Date(Date.now()-864e5*2),location:"PXL",completed:!1},{id:"4",title:"Opening Hub",responsibles:["john"],time:"09:00",date:new Date(Date.now()+864e5),location:"RBGH",visitors:2,completed:!0},{id:"5",title:"Inspect streaming gear",responsibles:["jane"],time:"14:30",date:new Date(Date.now()-864e5*3),location:"STREAM",remarks:"Replace any broken cables.",completed:!0},{id:"6",title:"Organize chairs",responsibles:["john","alice"],time:"12:00",date:new Date(Date.now()-864e5*1),location:"RBGH",visitors:8,completed:!1},{id:"7",title:"Test HDMI switch",responsibles:[],time:"15:15",date:new Date(Date.now()-864e5*5),location:"PXL",completed:!1},{id:"8",title:"Set up sound system",responsibles:["jane"],time:"10:00",date:new Date(Date.now()+864e5*2),location:"STREAM",remarks:"Test all mics.",completed:!1},{id:"9",title:"Briefing volunteers",responsibles:["john","emma"],time:"13:00",date:new Date(Date.now()+864e5*3),location:"RBGH",completed:!1},{id:"10",title:"Network check",responsibles:[],time:"17:00",date:new Date(Date.now()+864e5*5),location:"PXL",visitors:3,completed:!1},{id:"11",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()+864e5*1),location:"RBGH",completed:!1},{id:"12",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()+864e5*2),location:"RBGH",completed:!1},{id:"13",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()+864e5*3),location:"RBGH",completed:!1},{id:"14",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()+864e5*4),location:"RBGH",completed:!1},{id:"15",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()+864e5*5),location:"RBGH",completed:!1},{id:"16",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()-864e5*1),location:"RBGH",completed:!0},{id:"17",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()-864e5*2),location:"RBGH",completed:!0},{id:"18",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()-864e5*3),location:"RBGH",completed:!0},{id:"19",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()-864e5*4),location:"RBGH",completed:!0},{id:"20",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()-864e5*5),location:"RBGH",completed:!0},{id:"21",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()+864e5*6),location:"RBGH",completed:!1},{id:"22",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()+864e5*7),location:"RBGH",completed:!1},{id:"23",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()-864e5*6),location:"RBGH",completed:!0},{id:"24",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()-864e5*7),location:"RBGH",completed:!0},{id:"25",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()-864e5*8),location:"RBGH",completed:!0}],LD=()=>{const[n,e]=_e.useState("all"),{user:t}=Eu(),r=OD,[o,a]=_e.useState(null),u=M=>{a(z=>z===M?null:M)},d=_e.useRef(null);_e.useEffect(()=>{d.current&&d.current.scrollIntoView({behavior:"auto",block:"start"})},[]);const p={PXL:{name:"PXL",color:"bg-location-pxl"},RBGH:{name:"Red Bull",color:"bg-location-rbgh"},STREAM:{name:"STREAM",color:"bg-location-stream"}},_=r,w=r.filter(M=>!M.completed&&M.responsibles.some(z=>t&&(z===t.name||z===t.username))),T=r.filter(M=>M.completed&&M.responsibles.some(z=>t&&(z===t.name||z===t.username))),I=M=>{const z=new Date,ae=new Date(z);z.setHours(0,0,0,0),ae.setDate(z.getDate()+1),ae.setHours(0,0,0,0);const W=new Date(M);return W.setHours(0,0,0,0),W.getTime()===z.getTime()?"Today":W.getTime()===ae.getTime()?"Tomorrow":W.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})},b=M=>{const z=new Date;z.setHours(0,0,0,0);const ae=new Date(M);return ae.setHours(0,0,0,0),ae<z},j=({assignment:M,expanded:z,onToggle:ae})=>{const W=p[M.location]||{name:M.location||"Unknown",color:"bg-gray-400"},ne=M.date>new Date,re=t&&M.responsibles.includes(t.name||t.username);return v.jsxs("div",{className:"bg-bg rounded-lg p-3 sm:p-4 border border-default shadow-sm hover:shadow-md  hover:shadow transition-shadow cursor-pointer",onClick:ae,children:[v.jsxs("div",{className:"flex justify-between items-start",children:[v.jsxs("div",{className:"flex flex-col space-y-1",children:[v.jsxs("div",{className:"flex items-center space-x-3",children:[v.jsx("div",{className:`w-3.5 h-3.5 rounded-full ${W.color}`}),v.jsx("h3",{className:"font-medium text-sm sm:text-base text-default  truncate",children:M.title})]}),!z&&v.jsxs("div",{className:"flex items-center text-xs sm:text-sm text-gray-500  space-x-4 pl-5",children:[v.jsxs("span",{className:"flex items-center space-x-1",children:[v.jsx(Lh,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:M.time})]}),v.jsxs("span",{className:"flex items-center space-x-1",children:[v.jsx(Mh,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:M.responsibles.length===0?"No Responsible":M.responsibles.length===1?M.responsibles[0]:`${M.responsibles[0]} +${M.responsibles.length-1}`})]})]})]}),!M.completed&&b(M.date)&&v.jsx("span",{className:"ml-2 px-2 py-0.5 bg-warning text-warning text-xs rounded-full",children:"Overdue"})]}),z&&v.jsxs("div",{className:"mt-3 space-y-2 text-sm text-subtle",children:[v.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx(hD,{className:"w-4 h-4"}),v.jsx("span",{children:I(M.date)})]}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx(Lh,{className:"w-4 h-4"}),v.jsx("span",{children:M.time})]}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx(TI,{className:"w-4 h-4"}),v.jsx("span",{children:W.name})]}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx(Mh,{className:"w-4 h-4"}),v.jsx("span",{children:M.responsibles.length===0?"No Responsible":M.responsibles.length===1?M.responsibles[0]:`${M.responsibles[0]} +${M.responsibles.length-1}`})]})]}),M.visitors!==void 0&&v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx(Cg,{className:"w-4 h-4 text-muted"}),v.jsxs("span",{children:[M.visitors," visitors"]})]}),M.remarks&&v.jsxs("div",{className:"flex items-start space-x-2",children:[v.jsx(vD,{className:"w-4 h-4 text-muted mt-0.5"}),v.jsx("p",{className:"leading-relaxed",children:M.remarks})]}),ne&&!re&&v.jsx("div",{className:"pt-2",children:v.jsx("button",{onClick:fe=>{fe.stopPropagation(),alert("Signed up (mock)")},className:"px-3 py-1 bg-blue-600 text-on-primary rounded hover:bg-blue-700 text-sm",children:"Sign Up"})})]})]})};return v.jsxs("div",{className:"min-h-screen bg-subtle pb-20",children:[v.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:v.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:v.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:v.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[v.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center",children:v.jsx(qc,{className:"w-6 h-6 text-on-primary"})}),v.jsxs("div",{className:"min-w-0 flex-1",children:[v.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:"Assignments"}),v.jsx("p",{className:"text-subtle text-sm sm:text-base",children:n==="todo"?`${w.length} pending`:`${T.length} completed`})]})]})})})}),v.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[v.jsx("div",{className:"flex space-x-1 mb-6 bg-gray-100  rounded-lg p-1",children:["all","todo","finished"].map(M=>v.jsx("button",{onClick:()=>e(M),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${n===M?"bg-bg  text-default  shadow-sm":"text-subtle hover:text-default "}`,children:M==="all"?`All (${_.length})`:M==="todo"?`To Do (${w.length})`:`Finished (${T.length})`},M))}),v.jsx("div",{className:"space-y-4 custom-scrollbar overflow-y-auto",style:{maxHeight:"calc(100vh - 18.9rem)",...window.innerWidth<640?{maxHeight:"calc(100vh - 15.9rem)"}:{}},children:n==="all"&&_.length>0?(()=>{const M=_.reduce((re,fe)=>{const de=fe.date.toDateString();return re[de]||(re[de]=[]),re[de].push(fe),re},{}),z=Object.entries(M).sort(([re],[fe])=>new Date(re).getTime()-new Date(fe).getTime()),ae=new Date;ae.setHours(0,0,0,0);const W=[],ne=[];return z.forEach(([re,fe])=>{const de=new Date(re),D=de<ae,C=v.jsxs("div",{ref:D?void 0:ne.length===0?d:void 0,children:[v.jsx("h2",{className:"text-sm text-gray-500  font-medium uppercase mb-2 mt-6 pl-1",children:I(de)}),v.jsx("div",{className:"space-y-2",children:fe.sort((k,A)=>k.time.localeCompare(A.time)).map(k=>v.jsx(j,{assignment:k,expanded:o===k.id,onToggle:()=>u(k.id)},k.id))})]},re);D?W.push(C):ne.push(C)}),v.jsxs(v.Fragment,{children:[W,ne]})})():n==="all"?v.jsxs("div",{className:"text-center py-12",children:[v.jsx(qc,{className:"w-12 h-12 text-muted mx-auto mb-4"}),v.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No assignments"}),v.jsx("p",{className:"text-subtle",children:"No assignments found."})]}):n==="todo"?w.length===0?v.jsxs("div",{className:"text-center py-12",children:[v.jsx(qc,{className:"w-12 h-12 text-muted mx-auto mb-4"}),v.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No pending assignments"}),v.jsx("p",{className:"text-subtle",children:"All assignments are completed. Great job!"})]}):w.sort((M,z)=>M.date.getTime()-z.date.getTime()).map(M=>v.jsx(j,{assignment:M,expanded:o===M.id,onToggle:()=>u(M.id)},M.id)):T.length===0?v.jsxs("div",{className:"text-center py-12",children:[v.jsx(qc,{className:"w-12 h-12 text-muted mx-auto mb-4"}),v.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No completed assignments"}),v.jsx("p",{className:"text-subtle",children:"Completed assignments will appear here."})]}):T.sort((M,z)=>z.date.getTime()-M.date.getTime()).map(M=>v.jsx(j,{assignment:M,expanded:o===M.id,onToggle:()=>u(M.id)},M.id))})]})]})};function CI(n){document.documentElement.setAttribute("data-theme",n),document.documentElement.classList.remove("light","dark","cyberpunk"),n==="dark"&&document.documentElement.classList.add("dark"),localStorage.setItem("theme",n)}function xI(){const n=localStorage.getItem("theme");return n==="light"||n==="dark"||n==="cyberpunk"?n:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const Dl=["light","dark","cyberpunk"],MD=()=>{const[n,e]=_e.useState(xI());return _e.useEffect(()=>{CI(n)},[n]),v.jsxs("div",{className:"min-h-screen bg-bg text-text p-8",children:[v.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Theme Preferences"}),v.jsx("div",{className:"space-y-4",children:Dl.map(t=>v.jsxs("label",{className:"flex items-center space-x-3",children:[v.jsx("input",{type:"radio",name:"theme",value:t,checked:n===t,onChange:()=>e(t),className:"w-4 h-4 accent-[var(--color-text)]"}),v.jsx("span",{className:"capitalize text-text",children:t})]},t))})]})},VD=({activeView:n,onViewChange:e})=>{const t=[{id:"home",label:"Home",icon:gD},{id:"assignments",label:"Assignments",icon:fD},{id:"preferences",label:"Settings",icon:SI}];return v.jsx("nav",{className:"fixed bottom-4 left-4 right-4 z-50 nav-glass px-1 py-2 rounded-full",children:v.jsx("div",{className:"flex justify-between items-center w-full",children:t.map(r=>{const o=r.icon,a=n===r.id;return v.jsxs("button",{onClick:()=>e(r.id),className:`group flex items-center justify-center h-10 rounded-full transition-colors duration-200 mx-1 px-3 ${a?"nav-item-active shadow-md":"text-subtle hover:text-default hover:bg-subtle/40"}`,"aria-label":r.label,children:[v.jsx(o,{className:"w-5 h-5 text-inherit"}),v.jsx("span",{className:`ml-2 text-[13px] font-medium text-inherit overflow-hidden    transition-[max-width,opacity] duration-300 ease-in-out    ${a?"opacity-100 max-w-[100px]":"opacity-0 max-w-0"}  `,children:r.label})]},r.id)})})})};function FD(){const{isAuthenticated:n}=Eu(),[e,t]=_e.useState("login"),[r,o]=_e.useState("home");if(n)return v.jsxs(v.Fragment,{children:[r==="home"&&v.jsx(DD,{}),r==="assignments"&&v.jsx(LD,{}),r==="preferences"&&v.jsx(MD,{}),v.jsx(VD,{activeView:r,onViewChange:o})]});switch(e){case"forgot-password":return v.jsx(xD,{onBackToLogin:()=>t("login")});case"login":default:return v.jsx(CD,{onForgotPassword:()=>t("forgot-password")})}}const jD=_e.createContext(void 0),UD=({children:n})=>{const[e,t]=_e.useState(xI);_e.useEffect(()=>{CI(e)},[e]);const r=()=>{const a=Dl.indexOf(e),u=Dl[(a+1)%Dl.length];t(u)},o=a=>t(a);return v.jsx(jD.Provider,{value:{theme:e,setTheme:o,toggleTheme:r,availableThemes:Dl},children:n})};j1.createRoot(document.getElementById("root")).render(v.jsx(_e.StrictMode,{children:v.jsx(UD,{children:v.jsx(FD,{})})}));

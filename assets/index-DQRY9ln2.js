(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=t(l);fetch(l.href,u)}})();function Tw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var nd={exports:{}},kl={},rd={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function Nw(){if(mg)return Se;mg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),k=Symbol.iterator;function I(L){return L===null||typeof L!="object"?null:(L=k&&L[k]||L["@@iterator"],typeof L=="function"?L:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,Y={};function $(L,W,ae){this.props=L,this.context=W,this.refs=Y,this.updater=ae||H}$.prototype.isReactComponent={},$.prototype.setState=function(L,W){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,W,"setState")},$.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _e(){}_e.prototype=$.prototype;function G(L,W,ae){this.props=L,this.context=W,this.refs=Y,this.updater=ae||H}var le=G.prototype=new _e;le.constructor=G,z(le,$.prototype),le.isPureReactComponent=!0;var ce=Array.isArray,ye=Object.prototype.hasOwnProperty,B={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function x(L,W,ae){var Ee,xe={},Ne=null,Me=null;if(W!=null)for(Ee in W.ref!==void 0&&(Me=W.ref),W.key!==void 0&&(Ne=""+W.key),W)ye.call(W,Ee)&&!P.hasOwnProperty(Ee)&&(xe[Ee]=W[Ee]);var je=arguments.length-2;if(je===1)xe.children=ae;else if(1<je){for(var We=Array(je),mt=0;mt<je;mt++)We[mt]=arguments[mt+2];xe.children=We}if(L&&L.defaultProps)for(Ee in je=L.defaultProps,je)xe[Ee]===void 0&&(xe[Ee]=je[Ee]);return{$$typeof:r,type:L,key:Ne,ref:Me,props:xe,_owner:B.current}}function C(L,W){return{$$typeof:r,type:L.type,key:W,ref:L.ref,props:L.props,_owner:L._owner}}function R(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function A(L){var W={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ae){return W[ae]})}var O=/\/+/g;function T(L,W){return typeof L=="object"&&L!==null&&L.key!=null?A(""+L.key):W.toString(36)}function we(L,W,ae,Ee,xe){var Ne=typeof L;(Ne==="undefined"||Ne==="boolean")&&(L=null);var Me=!1;if(L===null)Me=!0;else switch(Ne){case"string":case"number":Me=!0;break;case"object":switch(L.$$typeof){case r:case e:Me=!0}}if(Me)return Me=L,xe=xe(Me),L=Ee===""?"."+T(Me,0):Ee,ce(xe)?(ae="",L!=null&&(ae=L.replace(O,"$&/")+"/"),we(xe,W,ae,"",function(mt){return mt})):xe!=null&&(R(xe)&&(xe=C(xe,ae+(!xe.key||Me&&Me.key===xe.key?"":(""+xe.key).replace(O,"$&/")+"/")+L)),W.push(xe)),1;if(Me=0,Ee=Ee===""?".":Ee+":",ce(L))for(var je=0;je<L.length;je++){Ne=L[je];var We=Ee+T(Ne,je);Me+=we(Ne,W,ae,We,xe)}else if(We=I(L),typeof We=="function")for(L=We.call(L),je=0;!(Ne=L.next()).done;)Ne=Ne.value,We=Ee+T(Ne,je++),Me+=we(Ne,W,ae,We,xe);else if(Ne==="object")throw W=String(L),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Me}function ve(L,W,ae){if(L==null)return L;var Ee=[],xe=0;return we(L,Ee,"","",function(Ne){return W.call(ae,Ne,xe++)}),Ee}function Qe(L){if(L._status===-1){var W=L._result;W=W(),W.then(function(ae){(L._status===0||L._status===-1)&&(L._status=1,L._result=ae)},function(ae){(L._status===0||L._status===-1)&&(L._status=2,L._result=ae)}),L._status===-1&&(L._status=0,L._result=W)}if(L._status===1)return L._result.default;throw L._result}var Oe={current:null},ee={transition:null},he={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:ee,ReactCurrentOwner:B};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:ve,forEach:function(L,W,ae){ve(L,function(){W.apply(this,arguments)},ae)},count:function(L){var W=0;return ve(L,function(){W++}),W},toArray:function(L){return ve(L,function(W){return W})||[]},only:function(L){if(!R(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Se.Component=$,Se.Fragment=t,Se.Profiler=l,Se.PureComponent=G,Se.StrictMode=s,Se.Suspense=_,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Se.act=ne,Se.cloneElement=function(L,W,ae){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Ee=z({},L.props),xe=L.key,Ne=L.ref,Me=L._owner;if(W!=null){if(W.ref!==void 0&&(Ne=W.ref,Me=B.current),W.key!==void 0&&(xe=""+W.key),L.type&&L.type.defaultProps)var je=L.type.defaultProps;for(We in W)ye.call(W,We)&&!P.hasOwnProperty(We)&&(Ee[We]=W[We]===void 0&&je!==void 0?je[We]:W[We])}var We=arguments.length-2;if(We===1)Ee.children=ae;else if(1<We){je=Array(We);for(var mt=0;mt<We;mt++)je[mt]=arguments[mt+2];Ee.children=je}return{$$typeof:r,type:L.type,key:xe,ref:Ne,props:Ee,_owner:Me}},Se.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:u,_context:L},L.Consumer=L},Se.createElement=x,Se.createFactory=function(L){var W=x.bind(null,L);return W.type=L,W},Se.createRef=function(){return{current:null}},Se.forwardRef=function(L){return{$$typeof:m,render:L}},Se.isValidElement=R,Se.lazy=function(L){return{$$typeof:N,_payload:{_status:-1,_result:L},_init:Qe}},Se.memo=function(L,W){return{$$typeof:w,type:L,compare:W===void 0?null:W}},Se.startTransition=function(L){var W=ee.transition;ee.transition={};try{L()}finally{ee.transition=W}},Se.unstable_act=ne,Se.useCallback=function(L,W){return Oe.current.useCallback(L,W)},Se.useContext=function(L){return Oe.current.useContext(L)},Se.useDebugValue=function(){},Se.useDeferredValue=function(L){return Oe.current.useDeferredValue(L)},Se.useEffect=function(L,W){return Oe.current.useEffect(L,W)},Se.useId=function(){return Oe.current.useId()},Se.useImperativeHandle=function(L,W,ae){return Oe.current.useImperativeHandle(L,W,ae)},Se.useInsertionEffect=function(L,W){return Oe.current.useInsertionEffect(L,W)},Se.useLayoutEffect=function(L,W){return Oe.current.useLayoutEffect(L,W)},Se.useMemo=function(L,W){return Oe.current.useMemo(L,W)},Se.useReducer=function(L,W,ae){return Oe.current.useReducer(L,W,ae)},Se.useRef=function(L){return Oe.current.useRef(L)},Se.useState=function(L){return Oe.current.useState(L)},Se.useSyncExternalStore=function(L,W,ae){return Oe.current.useSyncExternalStore(L,W,ae)},Se.useTransition=function(){return Oe.current.useTransition()},Se.version="18.3.1",Se}var gg;function Zd(){return gg||(gg=1,rd.exports=Nw()),rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function Rw(){if(_g)return kl;_g=1;var r=Zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,_,w){var N,k={},I=null,H=null;w!==void 0&&(I=""+w),_.key!==void 0&&(I=""+_.key),_.ref!==void 0&&(H=_.ref);for(N in _)s.call(_,N)&&!u.hasOwnProperty(N)&&(k[N]=_[N]);if(m&&m.defaultProps)for(N in _=m.defaultProps,_)k[N]===void 0&&(k[N]=_[N]);return{$$typeof:e,type:m,key:I,ref:H,props:k,_owner:l.current}}return kl.Fragment=t,kl.jsx=h,kl.jsxs=h,kl}var yg;function Aw(){return yg||(yg=1,nd.exports=Rw()),nd.exports}var y=Aw(),ue=Zd();const vg=Tw(ue);var Tu={},id={exports:{}},Yt={},sd={exports:{}},od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function Pw(){return wg||(wg=1,function(r){function e(ee,he){var ne=ee.length;ee.push(he);e:for(;0<ne;){var L=ne-1>>>1,W=ee[L];if(0<l(W,he))ee[L]=he,ee[ne]=W,ne=L;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var he=ee[0],ne=ee.pop();if(ne!==he){ee[0]=ne;e:for(var L=0,W=ee.length,ae=W>>>1;L<ae;){var Ee=2*(L+1)-1,xe=ee[Ee],Ne=Ee+1,Me=ee[Ne];if(0>l(xe,ne))Ne<W&&0>l(Me,xe)?(ee[L]=Me,ee[Ne]=ne,L=Ne):(ee[L]=xe,ee[Ee]=ne,L=Ee);else if(Ne<W&&0>l(Me,ne))ee[L]=Me,ee[Ne]=ne,L=Ne;else break e}}return he}function l(ee,he){var ne=ee.sortIndex-he.sortIndex;return ne!==0?ne:ee.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var _=[],w=[],N=1,k=null,I=3,H=!1,z=!1,Y=!1,$=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function le(ee){for(var he=t(w);he!==null;){if(he.callback===null)s(w);else if(he.startTime<=ee)s(w),he.sortIndex=he.expirationTime,e(_,he);else break;he=t(w)}}function ce(ee){if(Y=!1,le(ee),!z)if(t(_)!==null)z=!0,Qe(ye);else{var he=t(w);he!==null&&Oe(ce,he.startTime-ee)}}function ye(ee,he){z=!1,Y&&(Y=!1,_e(x),x=-1),H=!0;var ne=I;try{for(le(he),k=t(_);k!==null&&(!(k.expirationTime>he)||ee&&!A());){var L=k.callback;if(typeof L=="function"){k.callback=null,I=k.priorityLevel;var W=L(k.expirationTime<=he);he=r.unstable_now(),typeof W=="function"?k.callback=W:k===t(_)&&s(_),le(he)}else s(_);k=t(_)}if(k!==null)var ae=!0;else{var Ee=t(w);Ee!==null&&Oe(ce,Ee.startTime-he),ae=!1}return ae}finally{k=null,I=ne,H=!1}}var B=!1,P=null,x=-1,C=5,R=-1;function A(){return!(r.unstable_now()-R<C)}function O(){if(P!==null){var ee=r.unstable_now();R=ee;var he=!0;try{he=P(!0,ee)}finally{he?T():(B=!1,P=null)}}else B=!1}var T;if(typeof G=="function")T=function(){G(O)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,ve=we.port2;we.port1.onmessage=O,T=function(){ve.postMessage(null)}}else T=function(){$(O,0)};function Qe(ee){P=ee,B||(B=!0,T())}function Oe(ee,he){x=$(function(){ee(r.unstable_now())},he)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){z||H||(z=!0,Qe(ye))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return t(_)},r.unstable_next=function(ee){switch(I){case 1:case 2:case 3:var he=3;break;default:he=I}var ne=I;I=he;try{return ee()}finally{I=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,he){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ne=I;I=ee;try{return he()}finally{I=ne}},r.unstable_scheduleCallback=function(ee,he,ne){var L=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?L+ne:L):ne=L,ee){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ne+W,ee={id:N++,callback:he,priorityLevel:ee,startTime:ne,expirationTime:W,sortIndex:-1},ne>L?(ee.sortIndex=ne,e(w,ee),t(_)===null&&ee===t(w)&&(Y?(_e(x),x=-1):Y=!0,Oe(ce,ne-L))):(ee.sortIndex=W,e(_,ee),z||H||(z=!0,Qe(ye))),ee},r.unstable_shouldYield=A,r.unstable_wrapCallback=function(ee){var he=I;return function(){var ne=I;I=he;try{return ee.apply(this,arguments)}finally{I=ne}}}}(od)),od}var Eg;function bw(){return Eg||(Eg=1,sd.exports=Pw()),sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function Dw(){if(xg)return Yt;xg=1;var r=Zd(),e=bw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(l[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},k={};function I(n){return _.call(k,n)?!0:_.call(N,n)?!1:w.test(n)?k[n]=!0:(N[n]=!0,!1)}function H(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z(n,i,o,c){if(i===null||typeof i>"u"||H(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function Y(n,i,o,c,d,p,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=v}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];$[i]=new Y(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var _e=/[\-:]([a-z])/g;function G(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_e,G);$[i]=new Y(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_e,G);$[i]=new Y(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_e,G);$[i]=new Y(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function le(n,i,o,c){var d=$.hasOwnProperty(i)?$[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(z(i,o,d,c)&&(o=null),c||d===null?I(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var ce=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ye=Symbol.for("react.element"),B=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),A=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),ee=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,L;function W(n){if(L===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var ae=!1;function Ee(n,i){if(!n||ae)return"";ae=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var c=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){c=U}n.call(i.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,S=p.length-1;1<=v&&0<=S&&d[v]!==p[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==p[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==p[S]){var b=`
`+d[v].replace(" at new "," at ");return n.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",n.displayName)),b}while(1<=v&&0<=S);break}}}finally{ae=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?W(n):""}function xe(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case B:return"Portal";case C:return"Profiler";case x:return"StrictMode";case T:return"Suspense";case we:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case A:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ve:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case Qe:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===x?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function je(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function We(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function mt(n){var i=We(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ir(n){n._valueTracker||(n._valueTracker=mt(n))}function ps(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=We(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Or(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ei(n,i){var o=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ms(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=je(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ao(n,i){i=i.checked,i!=null&&le(n,"checked",i,!1)}function Po(n,i){Ao(n,i);var o=je(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?gs(n,i.type,o):i.hasOwnProperty("defaultValue")&&gs(n,i.type,je(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function fa(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function gs(n,i,o){(i!=="number"||Or(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var sr=Array.isArray;function or(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+je(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function bo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _s(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(sr(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:je(o)}}function ys(n,i){var o=je(i.value),c=je(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Do(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ct(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ct(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var lr,Oo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=lr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Lr(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Si=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(n){Si.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),xi[i]=xi[n]})});function Lo(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||xi.hasOwnProperty(n)&&xi[n]?(""+i).trim():i+"px"}function Mo(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=Lo(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var jo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(n,i){if(i){if(jo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Uo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function vs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Vo=null,on=null,zn=null;function ws(n){if(n=hl(n)){if(typeof Vo!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ha(i),Vo(n.stateNode,n.type,i))}}function ar(n){on?zn?zn.push(n):zn=[n]:on=n}function zo(){if(on){var n=on,i=zn;if(zn=on=null,ws(n),i)for(n=0;n<i.length;n++)ws(i[n])}}function Es(n,i){return n(i)}function Ho(){}var ur=!1;function Bo(n,i,o){if(ur)return n(i,o);ur=!0;try{return Es(n,i,o)}finally{ur=!1,(on!==null||zn!==null)&&(Ho(),zo())}}function ot(n,i){var o=n.stateNode;if(o===null)return null;var c=Ha(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var xs=!1;if(m)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){xs=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{xs=!1}function Ii(n,i,o,c,d,p,v,S,b){var U=Array.prototype.slice.call(arguments,3);try{i.apply(o,U)}catch(K){this.onError(K)}}var ki=!1,Ss=null,yn=!1,Wo=null,Rc={onError:function(n){ki=!0,Ss=n}};function $o(n,i,o,c,d,p,v,S,b){ki=!1,Ss=null,Ii.apply(Rc,arguments)}function Ac(n,i,o,c,d,p,v,S,b){if($o.apply(this,arguments),ki){if(ki){var U=Ss;ki=!1,Ss=null}else throw Error(t(198));yn||(yn=!0,Wo=U)}}function vn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ti(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function wn(n){if(vn(n)!==n)throw Error(t(188))}function pa(n){var i=n.alternate;if(!i){if(i=vn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return wn(d),n;if(p===c)return wn(d),i;p=p.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=p;else{for(var v=!1,S=d.child;S;){if(S===o){v=!0,o=d,c=p;break}if(S===c){v=!0,c=d,o=p;break}S=S.sibling}if(!v){for(S=p.child;S;){if(S===o){v=!0,o=p,c=d;break}if(S===c){v=!0,c=p,o=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Go(n){return n=pa(n),n!==null?Cs(n):null}function Cs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Cs(n);if(i!==null)return i;n=n.sibling}return null}var Is=e.unstable_scheduleCallback,qo=e.unstable_cancelCallback,ma=e.unstable_shouldYield,Pc=e.unstable_requestPaint,$e=e.unstable_now,ga=e.unstable_getCurrentPriorityLevel,Ni=e.unstable_ImmediatePriority,Mr=e.unstable_UserBlockingPriority,ln=e.unstable_NormalPriority,Ko=e.unstable_LowPriority,_a=e.unstable_IdlePriority,Ri=null,Zt=null;function ya(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ri,n,void 0,(n.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:wa,Yo=Math.log,va=Math.LN2;function wa(n){return n>>>=0,n===0?32:31-(Yo(n)/va|0)|0}var ks=64,Ts=4194304;function jr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ai(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=o&268435455;if(v!==0){var S=v&~d;S!==0?c=jr(S):(p&=v,p!==0&&(c=jr(p)))}else v=o&~d,v!==0?c=jr(v):p!==0&&(c=jr(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-Mt(i),d=1<<o,c|=n[o],i&=~d;return c}function bc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cr(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Mt(p),S=1<<v,b=d[v];b===-1?((S&o)===0||(S&c)!==0)&&(d[v]=bc(S,i)):b<=i&&(n.expiredLanes|=S),p&=~S}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pi(){var n=ks;return ks<<=1,(ks&4194240)===0&&(ks=64),n}function Fr(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Ur(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Mt(i),n[i]=o}function Be(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Mt(o),p=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~p}}function Vr(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-Mt(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var Te=0;function zr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ea,Ns,xa,Sa,Ca,Qo=!1,Hn=[],Ct=null,En=null,xn=null,Hr=new Map,an=new Map,Bn=[],Dc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ia(n,i){switch(n){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Hr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":an.delete(i.pointerId)}}function zt(n,i,o,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=hl(i),i!==null&&Ns(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Oc(n,i,o,c,d){switch(i){case"focusin":return Ct=zt(Ct,n,i,o,c,d),!0;case"dragenter":return En=zt(En,n,i,o,c,d),!0;case"mouseover":return xn=zt(xn,n,i,o,c,d),!0;case"pointerover":var p=d.pointerId;return Hr.set(p,zt(Hr.get(p)||null,n,i,o,c,d)),!0;case"gotpointercapture":return p=d.pointerId,an.set(p,zt(an.get(p)||null,n,i,o,c,d)),!0}return!1}function ka(n){var i=Li(n.target);if(i!==null){var o=vn(i);if(o!==null){if(i=o.tag,i===13){if(i=Ti(o),i!==null){n.blockedOn=i,Ca(n.priority,function(){xa(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function hr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Rs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Ci=c,o.target.dispatchEvent(c),Ci=null}else return i=hl(o),i!==null&&Ns(i),n.blockedOn=o,!1;i.shift()}return!0}function bi(n,i,o){hr(n)&&o.delete(i)}function Ta(){Qo=!1,Ct!==null&&hr(Ct)&&(Ct=null),En!==null&&hr(En)&&(En=null),xn!==null&&hr(xn)&&(xn=null),Hr.forEach(bi),an.forEach(bi)}function Sn(n,i){n.blockedOn===i&&(n.blockedOn=null,Qo||(Qo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ta)))}function Cn(n){function i(d){return Sn(d,n)}if(0<Hn.length){Sn(Hn[0],n);for(var o=1;o<Hn.length;o++){var c=Hn[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Ct!==null&&Sn(Ct,n),En!==null&&Sn(En,n),xn!==null&&Sn(xn,n),Hr.forEach(i),an.forEach(i),o=0;o<Bn.length;o++)c=Bn[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Bn.length&&(o=Bn[0],o.blockedOn===null);)ka(o),o.blockedOn===null&&Bn.shift()}var dr=ce.ReactCurrentBatchConfig,Br=!0;function et(n,i,o,c){var d=Te,p=dr.transition;dr.transition=null;try{Te=1,Xo(n,i,o,c)}finally{Te=d,dr.transition=p}}function Lc(n,i,o,c){var d=Te,p=dr.transition;dr.transition=null;try{Te=4,Xo(n,i,o,c)}finally{Te=d,dr.transition=p}}function Xo(n,i,o,c){if(Br){var d=Rs(n,i,o,c);if(d===null)Gc(n,i,c,Di,o),Ia(n,c);else if(Oc(d,n,i,o,c))c.stopPropagation();else if(Ia(n,c),i&4&&-1<Dc.indexOf(n)){for(;d!==null;){var p=hl(d);if(p!==null&&Ea(p),p=Rs(n,i,o,c),p===null&&Gc(n,i,c,Di,o),p===d)break;d=p}d!==null&&c.stopPropagation()}else Gc(n,i,c,null,o)}}var Di=null;function Rs(n,i,o,c){if(Di=null,n=vs(c),n=Li(n),n!==null)if(i=vn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ti(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Di=n,null}function Jo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ga()){case Ni:return 1;case Mr:return 4;case ln:case Ko:return 16;case _a:return 536870912;default:return 16}default:return 16}}var tn=null,As=null,Ht=null;function Zo(){if(Ht)return Ht;var n,i=As,o=i.length,c,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<o&&i[n]===d[n];n++);var v=o-n;for(c=1;c<=v&&i[o-c]===d[p-c];c++);return Ht=d.slice(n,1<c?1-c:void 0)}function Ps(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function el(){return!1}function It(n){function i(o,c,d,p,v){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(o=n[S],this[S]=o?o(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Wn:el,this.isPropagationStopped=el,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),i}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=It(In),$n=ne({},In,{view:0,detail:0}),Mc=It($n),Ds,fr,Wr,Oi=ne({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:a,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wr&&(Wr&&n.type==="mousemove"?(Ds=n.screenX-Wr.screenX,fr=n.screenY-Wr.screenY):fr=Ds=0,Wr=n),Ds)},movementY:function(n){return"movementY"in n?n.movementY:fr}}),Os=It(Oi),tl=ne({},Oi,{dataTransfer:0}),Na=It(tl),Ls=ne({},$n,{relatedTarget:0}),Ms=It(Ls),Ra=ne({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),pr=It(Ra),Aa=ne({},In,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Pa=It(Aa),ba=ne({},In,{data:0}),nl=It(ba),Bt={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Da={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oa={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $r(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Oa[n])?!!i[n]:!1}function a(){return $r}var f=ne({},$n,{key:function(n){if(n.key){var i=Bt[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ps(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Da[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:a,charCode:function(n){return n.type==="keypress"?Ps(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ps(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),g=It(f),E=ne({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M=It(E),V=ne({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:a}),Z=It(V),Ve=ne({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),dt=It(Ve),Re=ne({},Oi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gt=It(Re),_t=[9,13,27,32],Gn=m&&"CompositionEvent"in window,kt=null;m&&"documentMode"in document&&(kt=document.documentMode);var js=m&&"TextEvent"in window&&!kt,Fs=m&&(!Gn||kt&&8<kt&&11>=kt),ap=" ",up=!1;function cp(n,i){switch(n){case"keyup":return _t.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Us=!1;function C0(n,i){switch(n){case"compositionend":return hp(i);case"keypress":return i.which!==32?null:(up=!0,ap);case"textInput":return n=i.data,n===ap&&up?null:n;default:return null}}function I0(n,i){if(Us)return n==="compositionend"||!Gn&&cp(n,i)?(n=Zo(),Ht=As=tn=null,Us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Fs&&i.locale!=="ko"?null:i.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!k0[n.type]:i==="textarea"}function fp(n,i,o,c){ar(c),i=Ua(i,"onChange"),0<i.length&&(o=new bs("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var rl=null,il=null;function T0(n){Pp(n,0)}function La(n){var i=Ws(n);if(ps(i))return n}function N0(n,i){if(n==="change")return i}var pp=!1;if(m){var jc;if(m){var Fc="oninput"in document;if(!Fc){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),Fc=typeof mp.oninput=="function"}jc=Fc}else jc=!1;pp=jc&&(!document.documentMode||9<document.documentMode)}function gp(){rl&&(rl.detachEvent("onpropertychange",_p),il=rl=null)}function _p(n){if(n.propertyName==="value"&&La(il)){var i=[];fp(i,il,n,vs(n)),Bo(T0,i)}}function R0(n,i,o){n==="focusin"?(gp(),rl=i,il=o,rl.attachEvent("onpropertychange",_p)):n==="focusout"&&gp()}function A0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return La(il)}function P0(n,i){if(n==="click")return La(i)}function b0(n,i){if(n==="input"||n==="change")return La(i)}function D0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var kn=typeof Object.is=="function"?Object.is:D0;function sl(n,i){if(kn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!_.call(i,d)||!kn(n[d],i[d]))return!1}return!0}function yp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vp(n,i){var o=yp(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=yp(o)}}function wp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?wp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ep(){for(var n=window,i=Or();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Or(n.document)}return i}function Uc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function O0(n){var i=Ep(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&wp(o.ownerDocument.documentElement,o)){if(c!==null&&Uc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=vp(o,p);var v=vp(o,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var L0=m&&"documentMode"in document&&11>=document.documentMode,Vs=null,Vc=null,ol=null,zc=!1;function xp(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;zc||Vs==null||Vs!==Or(c)||(c=Vs,"selectionStart"in c&&Uc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ol&&sl(ol,c)||(ol=c,c=Ua(Vc,"onSelect"),0<c.length&&(i=new bs("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Vs)))}function Ma(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var zs={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Hc={},Sp={};m&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function ja(n){if(Hc[n])return Hc[n];if(!zs[n])return n;var i=zs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Sp)return Hc[n]=i[o];return n}var Cp=ja("animationend"),Ip=ja("animationiteration"),kp=ja("animationstart"),Tp=ja("transitionend"),Np=new Map,Rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,i){Np.set(n,i),u(i,[n])}for(var Bc=0;Bc<Rp.length;Bc++){var Wc=Rp[Bc],M0=Wc.toLowerCase(),j0=Wc[0].toUpperCase()+Wc.slice(1);Gr(M0,"on"+j0)}Gr(Cp,"onAnimationEnd"),Gr(Ip,"onAnimationIteration"),Gr(kp,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(Tp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ll));function Ap(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,Ac(c,i,void 0,n),n.currentTarget=null}function Pp(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],b=S.instance,U=S.currentTarget;if(S=S.listener,b!==p&&d.isPropagationStopped())break e;Ap(d,S,U),p=b}else for(v=0;v<c.length;v++){if(S=c[v],b=S.instance,U=S.currentTarget,S=S.listener,b!==p&&d.isPropagationStopped())break e;Ap(d,S,U),p=b}}}if(yn)throw n=Wo,yn=!1,Wo=null,n}function Xe(n,i){var o=i[Jc];o===void 0&&(o=i[Jc]=new Set);var c=n+"__bubble";o.has(c)||(bp(i,n,2,!1),o.add(c))}function $c(n,i,o){var c=0;i&&(c|=4),bp(o,n,c,i)}var Fa="_reactListening"+Math.random().toString(36).slice(2);function al(n){if(!n[Fa]){n[Fa]=!0,s.forEach(function(o){o!=="selectionchange"&&(F0.has(o)||$c(o,!1,n),$c(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Fa]||(i[Fa]=!0,$c("selectionchange",!1,i))}}function bp(n,i,o,c){switch(Jo(i)){case 1:var d=et;break;case 4:d=Lc;break;default:d=Xo}o=d.bind(null,i,o,n),d=void 0,!xs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Gc(n,i,o,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var b=v.tag;if((b===3||b===4)&&(b=v.stateNode.containerInfo,b===d||b.nodeType===8&&b.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Li(S),v===null)return;if(b=v.tag,b===5||b===6){c=p=v;continue e}S=S.parentNode}}c=c.return}Bo(function(){var U=p,K=vs(o),Q=[];e:{var q=Np.get(n);if(q!==void 0){var te=bs,ie=n;switch(n){case"keypress":if(Ps(o)===0)break e;case"keydown":case"keyup":te=g;break;case"focusin":ie="focus",te=Ms;break;case"focusout":ie="blur",te=Ms;break;case"beforeblur":case"afterblur":te=Ms;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Na;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=Z;break;case Cp:case Ip:case kp:te=pr;break;case Tp:te=dt;break;case"scroll":te=Mc;break;case"wheel":te=gt;break;case"copy":case"cut":case"paste":te=Pa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=M}var se=(i&4)!==0,lt=!se&&n==="scroll",j=se?q!==null?q+"Capture":null:q;se=[];for(var D=U,F;D!==null;){F=D;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,j!==null&&(X=ot(D,j),X!=null&&se.push(ul(D,X,F)))),lt)break;D=D.return}0<se.length&&(q=new te(q,ie,null,o,K),Q.push({event:q,listeners:se}))}}if((i&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",q&&o!==Ci&&(ie=o.relatedTarget||o.fromElement)&&(Li(ie)||ie[mr]))break e;if((te||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,te?(ie=o.relatedTarget||o.toElement,te=U,ie=ie?Li(ie):null,ie!==null&&(lt=vn(ie),ie!==lt||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(te=null,ie=U),te!==ie)){if(se=Os,X="onMouseLeave",j="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(se=M,X="onPointerLeave",j="onPointerEnter",D="pointer"),lt=te==null?q:Ws(te),F=ie==null?q:Ws(ie),q=new se(X,D+"leave",te,o,K),q.target=lt,q.relatedTarget=F,X=null,Li(K)===U&&(se=new se(j,D+"enter",ie,o,K),se.target=F,se.relatedTarget=lt,X=se),lt=X,te&&ie)t:{for(se=te,j=ie,D=0,F=se;F;F=Hs(F))D++;for(F=0,X=j;X;X=Hs(X))F++;for(;0<D-F;)se=Hs(se),D--;for(;0<F-D;)j=Hs(j),F--;for(;D--;){if(se===j||j!==null&&se===j.alternate)break t;se=Hs(se),j=Hs(j)}se=null}else se=null;te!==null&&Dp(Q,q,te,se,!1),ie!==null&&lt!==null&&Dp(Q,lt,ie,se,!0)}}e:{if(q=U?Ws(U):window,te=q.nodeName&&q.nodeName.toLowerCase(),te==="select"||te==="input"&&q.type==="file")var oe=N0;else if(dp(q))if(pp)oe=b0;else{oe=A0;var de=R0}else(te=q.nodeName)&&te.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(oe=P0);if(oe&&(oe=oe(n,U))){fp(Q,oe,o,K);break e}de&&de(n,q,U),n==="focusout"&&(de=q._wrapperState)&&de.controlled&&q.type==="number"&&gs(q,"number",q.value)}switch(de=U?Ws(U):window,n){case"focusin":(dp(de)||de.contentEditable==="true")&&(Vs=de,Vc=U,ol=null);break;case"focusout":ol=Vc=Vs=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,xp(Q,o,K);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":xp(Q,o,K)}var fe;if(Gn)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Us?cp(n,o)&&(ge="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ge="onCompositionStart");ge&&(Fs&&o.locale!=="ko"&&(Us||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Us&&(fe=Zo()):(tn=K,As="value"in tn?tn.value:tn.textContent,Us=!0)),de=Ua(U,ge),0<de.length&&(ge=new nl(ge,n,null,o,K),Q.push({event:ge,listeners:de}),fe?ge.data=fe:(fe=hp(o),fe!==null&&(ge.data=fe)))),(fe=js?C0(n,o):I0(n,o))&&(U=Ua(U,"onBeforeInput"),0<U.length&&(K=new nl("onBeforeInput","beforeinput",null,o,K),Q.push({event:K,listeners:U}),K.data=fe))}Pp(Q,i)})}function ul(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ua(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ot(n,o),p!=null&&c.unshift(ul(n,p,d)),p=ot(n,i),p!=null&&c.push(ul(n,p,d))),n=n.return}return c}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Dp(n,i,o,c,d){for(var p=i._reactName,v=[];o!==null&&o!==c;){var S=o,b=S.alternate,U=S.stateNode;if(b!==null&&b===c)break;S.tag===5&&U!==null&&(S=U,d?(b=ot(o,p),b!=null&&v.unshift(ul(o,b,S))):d||(b=ot(o,p),b!=null&&v.push(ul(o,b,S)))),o=o.return}v.length!==0&&n.push({event:i,listeners:v})}var U0=/\r\n?/g,V0=/\u0000|\uFFFD/g;function Op(n){return(typeof n=="string"?n:""+n).replace(U0,`
`).replace(V0,"")}function Va(n,i,o){if(i=Op(i),Op(n)!==i&&o)throw Error(t(425))}function za(){}var qc=null,Kc=null;function Yc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,z0=typeof clearTimeout=="function"?clearTimeout:void 0,Lp=typeof Promise=="function"?Promise:void 0,H0=typeof queueMicrotask=="function"?queueMicrotask:typeof Lp<"u"?function(n){return Lp.resolve(null).then(n).catch(B0)}:Qc;function B0(n){setTimeout(function(){throw n})}function Xc(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),Cn(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);Cn(i)}function qr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Mp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),qn="__reactFiber$"+Bs,cl="__reactProps$"+Bs,mr="__reactContainer$"+Bs,Jc="__reactEvents$"+Bs,W0="__reactListeners$"+Bs,$0="__reactHandles$"+Bs;function Li(n){var i=n[qn];if(i)return i;for(var o=n.parentNode;o;){if(i=o[mr]||o[qn]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Mp(n);n!==null;){if(o=n[qn])return o;n=Mp(n)}return i}n=o,o=n.parentNode}return null}function hl(n){return n=n[qn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ha(n){return n[cl]||null}var Zc=[],$s=-1;function Kr(n){return{current:n}}function Je(n){0>$s||(n.current=Zc[$s],Zc[$s]=null,$s--)}function Ge(n,i){$s++,Zc[$s]=n.current,n.current=i}var Yr={},bt=Kr(Yr),Wt=Kr(!1),Mi=Yr;function Gs(n,i){var o=n.type.contextTypes;if(!o)return Yr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function $t(n){return n=n.childContextTypes,n!=null}function Ba(){Je(Wt),Je(bt)}function jp(n,i,o){if(bt.current!==Yr)throw Error(t(168));Ge(bt,i),Ge(Wt,o)}function Fp(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Me(n)||"Unknown",d));return ne({},o,c)}function Wa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yr,Mi=bt.current,Ge(bt,n),Ge(Wt,Wt.current),!0}function Up(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Fp(n,i,Mi),c.__reactInternalMemoizedMergedChildContext=n,Je(Wt),Je(bt),Ge(bt,n)):Je(Wt),Ge(Wt,o)}var gr=null,$a=!1,eh=!1;function Vp(n){gr===null?gr=[n]:gr.push(n)}function G0(n){$a=!0,Vp(n)}function Qr(){if(!eh&&gr!==null){eh=!0;var n=0,i=Te;try{var o=gr;for(Te=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}gr=null,$a=!1}catch(d){throw gr!==null&&(gr=gr.slice(n+1)),Is(Ni,Qr),d}finally{Te=i,eh=!1}}return null}var qs=[],Ks=0,Ga=null,qa=0,un=[],cn=0,ji=null,_r=1,yr="";function Fi(n,i){qs[Ks++]=qa,qs[Ks++]=Ga,Ga=n,qa=i}function zp(n,i,o){un[cn++]=_r,un[cn++]=yr,un[cn++]=ji,ji=n;var c=_r;n=yr;var d=32-Mt(c)-1;c&=~(1<<d),o+=1;var p=32-Mt(i)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,_r=1<<32-Mt(i)+d|o<<d|c,yr=p+n}else _r=1<<p|o<<d|c,yr=n}function th(n){n.return!==null&&(Fi(n,1),zp(n,1,0))}function nh(n){for(;n===Ga;)Ga=qs[--Ks],qs[Ks]=null,qa=qs[--Ks],qs[Ks]=null;for(;n===ji;)ji=un[--cn],un[cn]=null,yr=un[--cn],un[cn]=null,_r=un[--cn],un[cn]=null}var nn=null,rn=null,Ze=!1,Tn=null;function Hp(n,i){var o=pn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Bp(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,nn=n,rn=qr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,nn=n,rn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ji!==null?{id:_r,overflow:yr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=pn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,nn=n,rn=null,!0):!1;default:return!1}}function rh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ih(n){if(Ze){var i=rn;if(i){var o=i;if(!Bp(n,i)){if(rh(n))throw Error(t(418));i=qr(o.nextSibling);var c=nn;i&&Bp(n,i)?Hp(c,o):(n.flags=n.flags&-4097|2,Ze=!1,nn=n)}}else{if(rh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ze=!1,nn=n}}}function Wp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function Ka(n){if(n!==nn)return!1;if(!Ze)return Wp(n),Ze=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Yc(n.type,n.memoizedProps)),i&&(i=rn)){if(rh(n))throw $p(),Error(t(418));for(;i;)Hp(n,i),i=qr(i.nextSibling)}if(Wp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){rn=qr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}rn=null}}else rn=nn?qr(n.stateNode.nextSibling):null;return!0}function $p(){for(var n=rn;n;)n=qr(n.nextSibling)}function Ys(){rn=nn=null,Ze=!1}function sh(n){Tn===null?Tn=[n]:Tn.push(n)}var q0=ce.ReactCurrentBatchConfig;function dl(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(v){var S=d.refs;v===null?delete S[p]:S[p]=v},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ya(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Gp(n){var i=n._init;return i(n._payload)}function qp(n){function i(j,D){if(n){var F=j.deletions;F===null?(j.deletions=[D],j.flags|=16):F.push(D)}}function o(j,D){if(!n)return null;for(;D!==null;)i(j,D),D=D.sibling;return null}function c(j,D){for(j=new Map;D!==null;)D.key!==null?j.set(D.key,D):j.set(D.index,D),D=D.sibling;return j}function d(j,D){return j=ii(j,D),j.index=0,j.sibling=null,j}function p(j,D,F){return j.index=F,n?(F=j.alternate,F!==null?(F=F.index,F<D?(j.flags|=2,D):F):(j.flags|=2,D)):(j.flags|=1048576,D)}function v(j){return n&&j.alternate===null&&(j.flags|=2),j}function S(j,D,F,X){return D===null||D.tag!==6?(D=Qh(F,j.mode,X),D.return=j,D):(D=d(D,F),D.return=j,D)}function b(j,D,F,X){var oe=F.type;return oe===P?K(j,D,F.props.children,X,F.key):D!==null&&(D.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Qe&&Gp(oe)===D.type)?(X=d(D,F.props),X.ref=dl(j,D,F),X.return=j,X):(X=vu(F.type,F.key,F.props,null,j.mode,X),X.ref=dl(j,D,F),X.return=j,X)}function U(j,D,F,X){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=Xh(F,j.mode,X),D.return=j,D):(D=d(D,F.children||[]),D.return=j,D)}function K(j,D,F,X,oe){return D===null||D.tag!==7?(D=Gi(F,j.mode,X,oe),D.return=j,D):(D=d(D,F),D.return=j,D)}function Q(j,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Qh(""+D,j.mode,F),D.return=j,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ye:return F=vu(D.type,D.key,D.props,null,j.mode,F),F.ref=dl(j,null,D),F.return=j,F;case B:return D=Xh(D,j.mode,F),D.return=j,D;case Qe:var X=D._init;return Q(j,X(D._payload),F)}if(sr(D)||he(D))return D=Gi(D,j.mode,F,null),D.return=j,D;Ya(j,D)}return null}function q(j,D,F,X){var oe=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return oe!==null?null:S(j,D,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ye:return F.key===oe?b(j,D,F,X):null;case B:return F.key===oe?U(j,D,F,X):null;case Qe:return oe=F._init,q(j,D,oe(F._payload),X)}if(sr(F)||he(F))return oe!==null?null:K(j,D,F,X,null);Ya(j,F)}return null}function te(j,D,F,X,oe){if(typeof X=="string"&&X!==""||typeof X=="number")return j=j.get(F)||null,S(D,j,""+X,oe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case ye:return j=j.get(X.key===null?F:X.key)||null,b(D,j,X,oe);case B:return j=j.get(X.key===null?F:X.key)||null,U(D,j,X,oe);case Qe:var de=X._init;return te(j,D,F,de(X._payload),oe)}if(sr(X)||he(X))return j=j.get(F)||null,K(D,j,X,oe,null);Ya(D,X)}return null}function ie(j,D,F,X){for(var oe=null,de=null,fe=D,ge=D=0,wt=null;fe!==null&&ge<F.length;ge++){fe.index>ge?(wt=fe,fe=null):wt=fe.sibling;var Le=q(j,fe,F[ge],X);if(Le===null){fe===null&&(fe=wt);break}n&&fe&&Le.alternate===null&&i(j,fe),D=p(Le,D,ge),de===null?oe=Le:de.sibling=Le,de=Le,fe=wt}if(ge===F.length)return o(j,fe),Ze&&Fi(j,ge),oe;if(fe===null){for(;ge<F.length;ge++)fe=Q(j,F[ge],X),fe!==null&&(D=p(fe,D,ge),de===null?oe=fe:de.sibling=fe,de=fe);return Ze&&Fi(j,ge),oe}for(fe=c(j,fe);ge<F.length;ge++)wt=te(fe,j,ge,F[ge],X),wt!==null&&(n&&wt.alternate!==null&&fe.delete(wt.key===null?ge:wt.key),D=p(wt,D,ge),de===null?oe=wt:de.sibling=wt,de=wt);return n&&fe.forEach(function(si){return i(j,si)}),Ze&&Fi(j,ge),oe}function se(j,D,F,X){var oe=he(F);if(typeof oe!="function")throw Error(t(150));if(F=oe.call(F),F==null)throw Error(t(151));for(var de=oe=null,fe=D,ge=D=0,wt=null,Le=F.next();fe!==null&&!Le.done;ge++,Le=F.next()){fe.index>ge?(wt=fe,fe=null):wt=fe.sibling;var si=q(j,fe,Le.value,X);if(si===null){fe===null&&(fe=wt);break}n&&fe&&si.alternate===null&&i(j,fe),D=p(si,D,ge),de===null?oe=si:de.sibling=si,de=si,fe=wt}if(Le.done)return o(j,fe),Ze&&Fi(j,ge),oe;if(fe===null){for(;!Le.done;ge++,Le=F.next())Le=Q(j,Le.value,X),Le!==null&&(D=p(Le,D,ge),de===null?oe=Le:de.sibling=Le,de=Le);return Ze&&Fi(j,ge),oe}for(fe=c(j,fe);!Le.done;ge++,Le=F.next())Le=te(fe,j,ge,Le.value,X),Le!==null&&(n&&Le.alternate!==null&&fe.delete(Le.key===null?ge:Le.key),D=p(Le,D,ge),de===null?oe=Le:de.sibling=Le,de=Le);return n&&fe.forEach(function(kw){return i(j,kw)}),Ze&&Fi(j,ge),oe}function lt(j,D,F,X){if(typeof F=="object"&&F!==null&&F.type===P&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case ye:e:{for(var oe=F.key,de=D;de!==null;){if(de.key===oe){if(oe=F.type,oe===P){if(de.tag===7){o(j,de.sibling),D=d(de,F.props.children),D.return=j,j=D;break e}}else if(de.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Qe&&Gp(oe)===de.type){o(j,de.sibling),D=d(de,F.props),D.ref=dl(j,de,F),D.return=j,j=D;break e}o(j,de);break}else i(j,de);de=de.sibling}F.type===P?(D=Gi(F.props.children,j.mode,X,F.key),D.return=j,j=D):(X=vu(F.type,F.key,F.props,null,j.mode,X),X.ref=dl(j,D,F),X.return=j,j=X)}return v(j);case B:e:{for(de=F.key;D!==null;){if(D.key===de)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){o(j,D.sibling),D=d(D,F.children||[]),D.return=j,j=D;break e}else{o(j,D);break}else i(j,D);D=D.sibling}D=Xh(F,j.mode,X),D.return=j,j=D}return v(j);case Qe:return de=F._init,lt(j,D,de(F._payload),X)}if(sr(F))return ie(j,D,F,X);if(he(F))return se(j,D,F,X);Ya(j,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(o(j,D.sibling),D=d(D,F),D.return=j,j=D):(o(j,D),D=Qh(F,j.mode,X),D.return=j,j=D),v(j)):o(j,D)}return lt}var Qs=qp(!0),Kp=qp(!1),Qa=Kr(null),Xa=null,Xs=null,oh=null;function lh(){oh=Xs=Xa=null}function ah(n){var i=Qa.current;Je(Qa),n._currentValue=i}function uh(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Js(n,i){Xa=n,oh=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gt=!0),n.firstContext=null)}function hn(n){var i=n._currentValue;if(oh!==n)if(n={context:n,memoizedValue:i,next:null},Xs===null){if(Xa===null)throw Error(t(308));Xs=n,Xa.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return i}var Ui=null;function ch(n){Ui===null?Ui=[n]:Ui.push(n)}function Yp(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,ch(i)):(o.next=d.next,d.next=o),i.interleaved=o,vr(n,c)}function vr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Xr=!1;function hh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function wr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Jr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(De&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,vr(n,o)}return d=c.interleaved,d===null?(i.next=i,ch(c)):(i.next=d.next,d.next=i),c.interleaved=i,vr(n,o)}function Ja(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Vr(n,o)}}function Xp(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Za(n,i,o,c){var d=n.updateQueue;Xr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var b=S,U=b.next;b.next=null,v===null?p=U:v.next=U,v=b;var K=n.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==v&&(S===null?K.firstBaseUpdate=U:S.next=U,K.lastBaseUpdate=b))}if(p!==null){var Q=d.baseState;v=0,K=U=b=null,S=p;do{var q=S.lane,te=S.eventTime;if((c&q)===q){K!==null&&(K=K.next={eventTime:te,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ie=n,se=S;switch(q=i,te=o,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){Q=ie.call(te,Q,q);break e}Q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,q=typeof ie=="function"?ie.call(te,Q,q):ie,q==null)break e;Q=ne({},Q,q);break e;case 2:Xr=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[S]:q.push(S))}else te={eventTime:te,lane:q,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(U=K=te,b=Q):K=K.next=te,v|=q;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;q=S,S=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(K===null&&(b=Q),d.baseState=b,d.firstBaseUpdate=U,d.lastBaseUpdate=K,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Hi|=v,n.lanes=v,n.memoizedState=Q}}function Jp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var fl={},Kn=Kr(fl),pl=Kr(fl),ml=Kr(fl);function Vi(n){if(n===fl)throw Error(t(174));return n}function dh(n,i){switch(Ge(ml,i),Ge(pl,n),Ge(Kn,fl),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ht(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ht(i,n)}Je(Kn),Ge(Kn,i)}function Zs(){Je(Kn),Je(pl),Je(ml)}function Zp(n){Vi(ml.current);var i=Vi(Kn.current),o=ht(i,n.type);i!==o&&(Ge(pl,n),Ge(Kn,o))}function fh(n){pl.current===n&&(Je(Kn),Je(pl))}var tt=Kr(0);function eu(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ph=[];function mh(){for(var n=0;n<ph.length;n++)ph[n]._workInProgressVersionPrimary=null;ph.length=0}var tu=ce.ReactCurrentDispatcher,gh=ce.ReactCurrentBatchConfig,zi=0,nt=null,ft=null,yt=null,nu=!1,gl=!1,_l=0,K0=0;function Dt(){throw Error(t(321))}function _h(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!kn(n[o],i[o]))return!1;return!0}function yh(n,i,o,c,d,p){if(zi=p,nt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,tu.current=n===null||n.memoizedState===null?J0:Z0,n=o(c,d),gl){p=0;do{if(gl=!1,_l=0,25<=p)throw Error(t(301));p+=1,yt=ft=null,i.updateQueue=null,tu.current=ew,n=o(c,d)}while(gl)}if(tu.current=su,i=ft!==null&&ft.next!==null,zi=0,yt=ft=nt=null,nu=!1,i)throw Error(t(300));return n}function vh(){var n=_l!==0;return _l=0,n}function Yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?nt.memoizedState=yt=n:yt=yt.next=n,yt}function dn(){if(ft===null){var n=nt.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var i=yt===null?nt.memoizedState:yt.next;if(i!==null)yt=i,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},yt===null?nt.memoizedState=yt=n:yt=yt.next=n}return yt}function yl(n,i){return typeof i=="function"?i(n):i}function wh(n){var i=dn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=ft,d=c.baseQueue,p=o.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,c=c.baseState;var S=v=null,b=null,U=p;do{var K=U.lane;if((zi&K)===K)b!==null&&(b=b.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Q={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};b===null?(S=b=Q,v=c):b=b.next=Q,nt.lanes|=K,Hi|=K}U=U.next}while(U!==null&&U!==p);b===null?v=c:b.next=S,kn(c,i.memoizedState)||(Gt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=b,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do p=d.lane,nt.lanes|=p,Hi|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Eh(n){var i=dn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);kn(p,i.memoizedState)||(Gt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,c]}function em(){}function tm(n,i){var o=nt,c=dn(),d=i(),p=!kn(c.memoizedState,d);if(p&&(c.memoizedState=d,Gt=!0),c=c.queue,xh(im.bind(null,o,c,n),[n]),c.getSnapshot!==i||p||yt!==null&&yt.memoizedState.tag&1){if(o.flags|=2048,vl(9,rm.bind(null,o,c,d,i),void 0,null),vt===null)throw Error(t(349));(zi&30)!==0||nm(o,i,d)}return d}function nm(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=nt.updateQueue,i===null?(i={lastEffect:null,stores:null},nt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function rm(n,i,o,c){i.value=o,i.getSnapshot=c,sm(i)&&om(n)}function im(n,i,o){return o(function(){sm(i)&&om(n)})}function sm(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!kn(n,o)}catch{return!0}}function om(n){var i=vr(n,1);i!==null&&Pn(i,n,1,-1)}function lm(n){var i=Yn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:n},i.queue=n,n=n.dispatch=X0.bind(null,nt,n),[i.memoizedState,n]}function vl(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=nt.updateQueue,i===null?(i={lastEffect:null,stores:null},nt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function am(){return dn().memoizedState}function ru(n,i,o,c){var d=Yn();nt.flags|=n,d.memoizedState=vl(1|i,o,void 0,c===void 0?null:c)}function iu(n,i,o,c){var d=dn();c=c===void 0?null:c;var p=void 0;if(ft!==null){var v=ft.memoizedState;if(p=v.destroy,c!==null&&_h(c,v.deps)){d.memoizedState=vl(i,o,p,c);return}}nt.flags|=n,d.memoizedState=vl(1|i,o,p,c)}function um(n,i){return ru(8390656,8,n,i)}function xh(n,i){return iu(2048,8,n,i)}function cm(n,i){return iu(4,2,n,i)}function hm(n,i){return iu(4,4,n,i)}function dm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function fm(n,i,o){return o=o!=null?o.concat([n]):null,iu(4,4,dm.bind(null,i,n),o)}function Sh(){}function pm(n,i){var o=dn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&_h(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function mm(n,i){var o=dn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&_h(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function gm(n,i,o){return(zi&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=o):(kn(o,i)||(o=Pi(),nt.lanes|=o,Hi|=o,n.baseState=!0),i)}function Y0(n,i){var o=Te;Te=o!==0&&4>o?o:4,n(!0);var c=gh.transition;gh.transition={};try{n(!1),i()}finally{Te=o,gh.transition=c}}function _m(){return dn().memoizedState}function Q0(n,i,o){var c=ni(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},ym(n))vm(i,o);else if(o=Yp(n,i,o,c),o!==null){var d=Ft();Pn(o,n,c,d),wm(o,i,c)}}function X0(n,i,o){var c=ni(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(ym(n))vm(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var v=i.lastRenderedState,S=p(v,o);if(d.hasEagerState=!0,d.eagerState=S,kn(S,v)){var b=i.interleaved;b===null?(d.next=d,ch(i)):(d.next=b.next,b.next=d),i.interleaved=d;return}}catch{}finally{}o=Yp(n,i,d,c),o!==null&&(d=Ft(),Pn(o,n,c,d),wm(o,i,c))}}function ym(n){var i=n.alternate;return n===nt||i!==null&&i===nt}function vm(n,i){gl=nu=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function wm(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Vr(n,o)}}var su={readContext:hn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},J0={readContext:hn,useCallback:function(n,i){return Yn().memoizedState=[n,i===void 0?null:i],n},useContext:hn,useEffect:um,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,ru(4194308,4,dm.bind(null,i,n),o)},useLayoutEffect:function(n,i){return ru(4194308,4,n,i)},useInsertionEffect:function(n,i){return ru(4,2,n,i)},useMemo:function(n,i){var o=Yn();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Yn();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Q0.bind(null,nt,n),[c.memoizedState,n]},useRef:function(n){var i=Yn();return n={current:n},i.memoizedState=n},useState:lm,useDebugValue:Sh,useDeferredValue:function(n){return Yn().memoizedState=n},useTransition:function(){var n=lm(!1),i=n[0];return n=Y0.bind(null,n[1]),Yn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=nt,d=Yn();if(Ze){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),vt===null)throw Error(t(349));(zi&30)!==0||nm(c,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,um(im.bind(null,c,p,n),[n]),c.flags|=2048,vl(9,rm.bind(null,c,p,o,i),void 0,null),o},useId:function(){var n=Yn(),i=vt.identifierPrefix;if(Ze){var o=yr,c=_r;o=(c&~(1<<32-Mt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=_l++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=K0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Z0={readContext:hn,useCallback:pm,useContext:hn,useEffect:xh,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:hm,useMemo:mm,useReducer:wh,useRef:am,useState:function(){return wh(yl)},useDebugValue:Sh,useDeferredValue:function(n){var i=dn();return gm(i,ft.memoizedState,n)},useTransition:function(){var n=wh(yl)[0],i=dn().memoizedState;return[n,i]},useMutableSource:em,useSyncExternalStore:tm,useId:_m,unstable_isNewReconciler:!1},ew={readContext:hn,useCallback:pm,useContext:hn,useEffect:xh,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:hm,useMemo:mm,useReducer:Eh,useRef:am,useState:function(){return Eh(yl)},useDebugValue:Sh,useDeferredValue:function(n){var i=dn();return ft===null?i.memoizedState=n:gm(i,ft.memoizedState,n)},useTransition:function(){var n=Eh(yl)[0],i=dn().memoizedState;return[n,i]},useMutableSource:em,useSyncExternalStore:tm,useId:_m,unstable_isNewReconciler:!1};function Nn(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Ch(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:ne({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ou={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Ft(),d=ni(n),p=wr(c,d);p.payload=i,o!=null&&(p.callback=o),i=Jr(n,p,d),i!==null&&(Pn(i,n,d,c),Ja(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Ft(),d=ni(n),p=wr(c,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Jr(n,p,d),i!==null&&(Pn(i,n,d,c),Ja(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Ft(),c=ni(n),d=wr(o,c);d.tag=2,i!=null&&(d.callback=i),i=Jr(n,d,c),i!==null&&(Pn(i,n,c,o),Ja(i,n,c))}};function Em(n,i,o,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):i.prototype&&i.prototype.isPureReactComponent?!sl(o,c)||!sl(d,p):!0}function xm(n,i,o){var c=!1,d=Yr,p=i.contextType;return typeof p=="object"&&p!==null?p=hn(p):(d=$t(i)?Mi:bt.current,c=i.contextTypes,p=(c=c!=null)?Gs(n,d):Yr),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ou,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function Sm(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&ou.enqueueReplaceState(i,i.state,null)}function Ih(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},hh(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=hn(p):(p=$t(i)?Mi:bt.current,d.context=Gs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Ch(n,i,p,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ou.enqueueReplaceState(d,d.state,null),Za(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function eo(n,i){try{var o="",c=i;do o+=xe(c),c=c.return;while(c);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function kh(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Th(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var tw=typeof WeakMap=="function"?WeakMap:Map;function Cm(n,i,o){o=wr(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){fu||(fu=!0,Hh=c),Th(n,i)},o}function Im(n,i,o){o=wr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){Th(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Th(n,i),typeof c!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),o}function km(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new tw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=mw.bind(null,n,i,o),i.then(n,n))}function Tm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Nm(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=wr(-1,1),i.tag=2,Jr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var nw=ce.ReactCurrentOwner,Gt=!1;function jt(n,i,o,c){i.child=n===null?Kp(i,null,o,c):Qs(i,n.child,o,c)}function Rm(n,i,o,c,d){o=o.render;var p=i.ref;return Js(i,d),c=yh(n,i,o,c,p,d),o=vh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Er(n,i,d)):(Ze&&o&&th(i),i.flags|=1,jt(n,i,c,d),i.child)}function Am(n,i,o,c,d){if(n===null){var p=o.type;return typeof p=="function"&&!Yh(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Pm(n,i,p,c,d)):(n=vu(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:sl,o(v,c)&&n.ref===i.ref)return Er(n,i,d)}return i.flags|=1,n=ii(p,c),n.ref=i.ref,n.return=i,i.child=n}function Pm(n,i,o,c,d){if(n!==null){var p=n.memoizedProps;if(sl(p,c)&&n.ref===i.ref)if(Gt=!1,i.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return i.lanes=n.lanes,Er(n,i,d)}return Nh(n,i,o,c,d)}function bm(n,i,o){var c=i.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(no,sn),sn|=o;else{if((o&1073741824)===0)return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ge(no,sn),sn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,Ge(no,sn),sn|=c}else p!==null?(c=p.baseLanes|o,i.memoizedState=null):c=o,Ge(no,sn),sn|=c;return jt(n,i,d,o),i.child}function Dm(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Nh(n,i,o,c,d){var p=$t(o)?Mi:bt.current;return p=Gs(i,p),Js(i,d),o=yh(n,i,o,c,p,d),c=vh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Er(n,i,d)):(Ze&&c&&th(i),i.flags|=1,jt(n,i,o,d),i.child)}function Om(n,i,o,c,d){if($t(o)){var p=!0;Wa(i)}else p=!1;if(Js(i,d),i.stateNode===null)au(n,i),xm(i,o,c),Ih(i,o,c,d),c=!0;else if(n===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var b=v.context,U=o.contextType;typeof U=="object"&&U!==null?U=hn(U):(U=$t(o)?Mi:bt.current,U=Gs(i,U));var K=o.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||b!==U)&&Sm(i,v,c,U),Xr=!1;var q=i.memoizedState;v.state=q,Za(i,c,v,d),b=i.memoizedState,S!==c||q!==b||Wt.current||Xr?(typeof K=="function"&&(Ch(i,o,K,c),b=i.memoizedState),(S=Xr||Em(i,o,S,c,q,b,U))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=b),v.props=c,v.state=b,v.context=U,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Qp(n,i),S=i.memoizedProps,U=i.type===i.elementType?S:Nn(i.type,S),v.props=U,Q=i.pendingProps,q=v.context,b=o.contextType,typeof b=="object"&&b!==null?b=hn(b):(b=$t(o)?Mi:bt.current,b=Gs(i,b));var te=o.getDerivedStateFromProps;(K=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Q||q!==b)&&Sm(i,v,c,b),Xr=!1,q=i.memoizedState,v.state=q,Za(i,c,v,d);var ie=i.memoizedState;S!==Q||q!==ie||Wt.current||Xr?(typeof te=="function"&&(Ch(i,o,te,c),ie=i.memoizedState),(U=Xr||Em(i,o,U,c,q,ie,b)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ie,b),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ie,b)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ie),v.props=c,v.state=ie,v.context=b,c=U):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),c=!1)}return Rh(n,i,o,c,p,d)}function Rh(n,i,o,c,d,p){Dm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Up(i,o,!1),Er(n,i,p);c=i.stateNode,nw.current=i;var S=v&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Qs(i,n.child,null,p),i.child=Qs(i,null,S,p)):jt(n,i,S,p),i.memoizedState=c.state,d&&Up(i,o,!0),i.child}function Lm(n){var i=n.stateNode;i.pendingContext?jp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&jp(n,i.context,!1),dh(n,i.containerInfo)}function Mm(n,i,o,c,d){return Ys(),sh(d),i.flags|=256,jt(n,i,o,c),i.child}var Ah={dehydrated:null,treeContext:null,retryLane:0};function Ph(n){return{baseLanes:n,cachePool:null,transitions:null}}function jm(n,i,o){var c=i.pendingProps,d=tt.current,p=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(tt,d&1),n===null)return ih(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=i.mode,p=i.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=wu(v,c,0,null),n=Gi(n,c,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Ph(o),i.memoizedState=Ah,n):bh(i,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return rw(n,i,v,c,S,d,o);if(p){p=c.fallback,v=i.mode,d=n.child,S=d.sibling;var b={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=b,i.deletions=null):(c=ii(d,b),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?p=ii(S,p):(p=Gi(p,v,o,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,v=n.child.memoizedState,v=v===null?Ph(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~o,i.memoizedState=Ah,c}return p=n.child,n=p.sibling,c=ii(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function bh(n,i){return i=wu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function lu(n,i,o,c){return c!==null&&sh(c),Qs(i,n.child,null,o),n=bh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function rw(n,i,o,c,d,p,v){if(o)return i.flags&256?(i.flags&=-257,c=kh(Error(t(422))),lu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=wu({mode:"visible",children:c.children},d,0,null),p=Gi(p,d,v,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Qs(i,n.child,null,v),i.child.memoizedState=Ph(v),i.memoizedState=Ah,p);if((i.mode&1)===0)return lu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,p=Error(t(419)),c=kh(p,c,void 0),lu(n,i,v,c)}if(S=(v&n.childLanes)!==0,Gt||S){if(c=vt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,vr(n,d),Pn(c,n,d,-1))}return Kh(),c=kh(Error(t(421))),lu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=gw.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,rn=qr(d.nextSibling),nn=i,Ze=!0,Tn=null,n!==null&&(un[cn++]=_r,un[cn++]=yr,un[cn++]=ji,_r=n.id,yr=n.overflow,ji=i),i=bh(i,c.children),i.flags|=4096,i)}function Fm(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),uh(n.return,i,o)}function Dh(n,i,o,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=d)}function Um(n,i,o){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(jt(n,i,c.children,o),c=tt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fm(n,o,i);else if(n.tag===19)Fm(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(tt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&eu(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Dh(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&eu(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Dh(i,!0,o,null,p);break;case"together":Dh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function au(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Er(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Hi|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=ii(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=ii(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function iw(n,i,o){switch(i.tag){case 3:Lm(i),Ys();break;case 5:Zp(i);break;case 1:$t(i.type)&&Wa(i);break;case 4:dh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ge(Qa,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ge(tt,tt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?jm(n,i,o):(Ge(tt,tt.current&1),n=Er(n,i,o),n!==null?n.sibling:null);Ge(tt,tt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Um(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(tt,tt.current),c)break;return null;case 22:case 23:return i.lanes=0,bm(n,i,o)}return Er(n,i,o)}var Vm,Oh,zm,Hm;Vm=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Oh=function(){},zm=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Vi(Kn.current);var p=null;switch(o){case"input":d=Ei(n,d),c=Ei(n,c),p=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),p=[];break;case"textarea":d=bo(n,d),c=bo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=za)}Fo(o,c);var v;o=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var S=d[U];for(v in S)S.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(l.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var b=c[U];if(S=d?.[U],c.hasOwnProperty(U)&&b!==S&&(b!=null||S!=null))if(U==="style")if(S){for(v in S)!S.hasOwnProperty(v)||b&&b.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in b)b.hasOwnProperty(v)&&S[v]!==b[v]&&(o||(o={}),o[v]=b[v])}else o||(p||(p=[]),p.push(U,o)),o=b;else U==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,S=S?S.__html:void 0,b!=null&&S!==b&&(p=p||[]).push(U,b)):U==="children"?typeof b!="string"&&typeof b!="number"||(p=p||[]).push(U,""+b):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(l.hasOwnProperty(U)?(b!=null&&U==="onScroll"&&Xe("scroll",n),p||S===b||(p=[])):(p=p||[]).push(U,b))}o&&(p=p||[]).push("style",o);var U=p;(i.updateQueue=U)&&(i.flags|=4)}},Hm=function(n,i,o,c){o!==c&&(i.flags|=4)};function wl(n,i){if(!Ze)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function sw(n,i,o){var c=i.pendingProps;switch(nh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(i),null;case 1:return $t(i.type)&&Ba(),Ot(i),null;case 3:return c=i.stateNode,Zs(),Je(Wt),Je(bt),mh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ka(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Tn!==null&&($h(Tn),Tn=null))),Oh(n,i),Ot(i),null;case 5:fh(i);var d=Vi(ml.current);if(o=i.type,n!==null&&i.stateNode!=null)zm(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ot(i),null}if(n=Vi(Kn.current),Ka(i)){c=i.stateNode,o=i.type;var p=i.memoizedProps;switch(c[qn]=i,c[cl]=p,n=(i.mode&1)!==0,o){case"dialog":Xe("cancel",c),Xe("close",c);break;case"iframe":case"object":case"embed":Xe("load",c);break;case"video":case"audio":for(d=0;d<ll.length;d++)Xe(ll[d],c);break;case"source":Xe("error",c);break;case"img":case"image":case"link":Xe("error",c),Xe("load",c);break;case"details":Xe("toggle",c);break;case"input":ms(c,p),Xe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Xe("invalid",c);break;case"textarea":_s(c,p),Xe("invalid",c)}Fo(o,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var S=p[v];v==="children"?typeof S=="string"?c.textContent!==S&&(p.suppressHydrationWarning!==!0&&Va(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(p.suppressHydrationWarning!==!0&&Va(c.textContent,S,n),d=["children",""+S]):l.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Xe("scroll",c)}switch(o){case"input":ir(c),fa(c,p,!0);break;case"textarea":ir(c),Do(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=za)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ct(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(o,{is:c.is}):(n=v.createElement(o),o==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,o),n[qn]=i,n[cl]=c,Vm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Uo(o,c),o){case"dialog":Xe("cancel",n),Xe("close",n),d=c;break;case"iframe":case"object":case"embed":Xe("load",n),d=c;break;case"video":case"audio":for(d=0;d<ll.length;d++)Xe(ll[d],n);d=c;break;case"source":Xe("error",n),d=c;break;case"img":case"image":case"link":Xe("error",n),Xe("load",n),d=c;break;case"details":Xe("toggle",n),d=c;break;case"input":ms(n,c),d=Ei(n,c),Xe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),Xe("invalid",n);break;case"textarea":_s(n,c),d=bo(n,c),Xe("invalid",n);break;default:d=c}Fo(o,d),S=d;for(p in S)if(S.hasOwnProperty(p)){var b=S[p];p==="style"?Mo(n,b):p==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&Oo(n,b)):p==="children"?typeof b=="string"?(o!=="textarea"||b!=="")&&Lr(n,b):typeof b=="number"&&Lr(n,""+b):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?b!=null&&p==="onScroll"&&Xe("scroll",n):b!=null&&le(n,p,b,v))}switch(o){case"input":ir(n),fa(n,c,!1);break;case"textarea":ir(n),Do(n);break;case"option":c.value!=null&&n.setAttribute("value",""+je(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?or(n,!!c.multiple,p,!1):c.defaultValue!=null&&or(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=za)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ot(i),null;case 6:if(n&&i.stateNode!=null)Hm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Vi(ml.current),Vi(Kn.current),Ka(i)){if(c=i.stateNode,o=i.memoizedProps,c[qn]=i,(p=c.nodeValue!==o)&&(n=nn,n!==null))switch(n.tag){case 3:Va(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Va(c.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[qn]=i,i.stateNode=c}return Ot(i),null;case 13:if(Je(tt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ze&&rn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)$p(),Ys(),i.flags|=98560,p=!1;else if(p=Ka(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[qn]=i}else Ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ot(i),p=!1}else Tn!==null&&($h(Tn),Tn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(tt.current&1)!==0?pt===0&&(pt=3):Kh())),i.updateQueue!==null&&(i.flags|=4),Ot(i),null);case 4:return Zs(),Oh(n,i),n===null&&al(i.stateNode.containerInfo),Ot(i),null;case 10:return ah(i.type._context),Ot(i),null;case 17:return $t(i.type)&&Ba(),Ot(i),null;case 19:if(Je(tt),p=i.memoizedState,p===null)return Ot(i),null;if(c=(i.flags&128)!==0,v=p.rendering,v===null)if(c)wl(p,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=eu(n),v!==null){for(i.flags|=128,wl(p,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)p=o,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ge(tt,tt.current&1|2),i.child}n=n.sibling}p.tail!==null&&$e()>ro&&(i.flags|=128,c=!0,wl(p,!1),i.lanes=4194304)}else{if(!c)if(n=eu(v),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),wl(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Ze)return Ot(i),null}else 2*$e()-p.renderingStartTime>ro&&o!==1073741824&&(i.flags|=128,c=!0,wl(p,!1),i.lanes=4194304);p.isBackwards?(v.sibling=i.child,i.child=v):(o=p.last,o!==null?o.sibling=v:i.child=v,p.last=v)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=$e(),i.sibling=null,o=tt.current,Ge(tt,c?o&1|2:o&1),i):(Ot(i),null);case 22:case 23:return qh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(sn&1073741824)!==0&&(Ot(i),i.subtreeFlags&6&&(i.flags|=8192)):Ot(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function ow(n,i){switch(nh(i),i.tag){case 1:return $t(i.type)&&Ba(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Zs(),Je(Wt),Je(bt),mh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return fh(i),null;case 13:if(Je(tt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ys()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Je(tt),null;case 4:return Zs(),null;case 10:return ah(i.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var uu=!1,Lt=!1,lw=typeof WeakSet=="function"?WeakSet:Set,re=null;function to(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){rt(n,i,c)}else o.current=null}function Lh(n,i,o){try{o()}catch(c){rt(n,i,c)}}var Bm=!1;function aw(n,i){if(qc=Br,n=Ep(),Uc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,S=-1,b=-1,U=0,K=0,Q=n,q=null;t:for(;;){for(var te;Q!==o||d!==0&&Q.nodeType!==3||(S=v+d),Q!==p||c!==0&&Q.nodeType!==3||(b=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(te=Q.firstChild)!==null;)q=Q,Q=te;for(;;){if(Q===n)break t;if(q===o&&++U===d&&(S=v),q===p&&++K===c&&(b=v),(te=Q.nextSibling)!==null)break;Q=q,q=Q.parentNode}Q=te}o=S===-1||b===-1?null:{start:S,end:b}}else o=null}o=o||{start:0,end:0}}else o=null;for(Kc={focusedElem:n,selectionRange:o},Br=!1,re=i;re!==null;)if(i=re,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,re=n;else for(;re!==null;){i=re;try{var ie=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,lt=ie.memoizedState,j=i.stateNode,D=j.getSnapshotBeforeUpdate(i.elementType===i.type?se:Nn(i.type,se),lt);j.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){rt(i,i.return,X)}if(n=i.sibling,n!==null){n.return=i.return,re=n;break}re=i.return}return ie=Bm,Bm=!1,ie}function El(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Lh(i,o,p)}d=d.next}while(d!==c)}}function cu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Mh(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Wm(n){var i=n.alternate;i!==null&&(n.alternate=null,Wm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[qn],delete i[cl],delete i[Jc],delete i[W0],delete i[$0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function $m(n){return n.tag===5||n.tag===3||n.tag===4}function Gm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$m(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function jh(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=za));else if(c!==4&&(n=n.child,n!==null))for(jh(n,i,o),n=n.sibling;n!==null;)jh(n,i,o),n=n.sibling}function Fh(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Fh(n,i,o),n=n.sibling;n!==null;)Fh(n,i,o),n=n.sibling}var Tt=null,Rn=!1;function Zr(n,i,o){for(o=o.child;o!==null;)qm(n,i,o),o=o.sibling}function qm(n,i,o){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ri,o)}catch{}switch(o.tag){case 5:Lt||to(o,i);case 6:var c=Tt,d=Rn;Tt=null,Zr(n,i,o),Tt=c,Rn=d,Tt!==null&&(Rn?(n=Tt,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tt.removeChild(o.stateNode));break;case 18:Tt!==null&&(Rn?(n=Tt,o=o.stateNode,n.nodeType===8?Xc(n.parentNode,o):n.nodeType===1&&Xc(n,o),Cn(n)):Xc(Tt,o.stateNode));break;case 4:c=Tt,d=Rn,Tt=o.stateNode.containerInfo,Rn=!0,Zr(n,i,o),Tt=c,Rn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Lh(o,i,v),d=d.next}while(d!==c)}Zr(n,i,o);break;case 1:if(!Lt&&(to(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(S){rt(o,i,S)}Zr(n,i,o);break;case 21:Zr(n,i,o);break;case 22:o.mode&1?(Lt=(c=Lt)||o.memoizedState!==null,Zr(n,i,o),Lt=c):Zr(n,i,o);break;default:Zr(n,i,o)}}function Km(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new lw),i.forEach(function(c){var d=_w.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function An(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var p=n,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:Tt=S.stateNode,Rn=!1;break e;case 3:Tt=S.stateNode.containerInfo,Rn=!0;break e;case 4:Tt=S.stateNode.containerInfo,Rn=!0;break e}S=S.return}if(Tt===null)throw Error(t(160));qm(p,v,d),Tt=null,Rn=!1;var b=d.alternate;b!==null&&(b.return=null),d.return=null}catch(U){rt(d,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ym(i,n),i=i.sibling}function Ym(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(An(i,n),Qn(n),c&4){try{El(3,n,n.return),cu(3,n)}catch(se){rt(n,n.return,se)}try{El(5,n,n.return)}catch(se){rt(n,n.return,se)}}break;case 1:An(i,n),Qn(n),c&512&&o!==null&&to(o,o.return);break;case 5:if(An(i,n),Qn(n),c&512&&o!==null&&to(o,o.return),n.flags&32){var d=n.stateNode;try{Lr(d,"")}catch(se){rt(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=o!==null?o.memoizedProps:p,S=n.type,b=n.updateQueue;if(n.updateQueue=null,b!==null)try{S==="input"&&p.type==="radio"&&p.name!=null&&Ao(d,p),Uo(S,v);var U=Uo(S,p);for(v=0;v<b.length;v+=2){var K=b[v],Q=b[v+1];K==="style"?Mo(d,Q):K==="dangerouslySetInnerHTML"?Oo(d,Q):K==="children"?Lr(d,Q):le(d,K,Q,U)}switch(S){case"input":Po(d,p);break;case"textarea":ys(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?or(d,!!p.multiple,te,!1):q!==!!p.multiple&&(p.defaultValue!=null?or(d,!!p.multiple,p.defaultValue,!0):or(d,!!p.multiple,p.multiple?[]:"",!1))}d[cl]=p}catch(se){rt(n,n.return,se)}}break;case 6:if(An(i,n),Qn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(se){rt(n,n.return,se)}}break;case 3:if(An(i,n),Qn(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Cn(i.containerInfo)}catch(se){rt(n,n.return,se)}break;case 4:An(i,n),Qn(n);break;case 13:An(i,n),Qn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(zh=$e())),c&4&&Km(n);break;case 22:if(K=o!==null&&o.memoizedState!==null,n.mode&1?(Lt=(U=Lt)||K,An(i,n),Lt=U):An(i,n),Qn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!K&&(n.mode&1)!==0)for(re=n,K=n.child;K!==null;){for(Q=re=K;re!==null;){switch(q=re,te=q.child,q.tag){case 0:case 11:case 14:case 15:El(4,q,q.return);break;case 1:to(q,q.return);var ie=q.stateNode;if(typeof ie.componentWillUnmount=="function"){c=q,o=q.return;try{i=c,ie.props=i.memoizedProps,ie.state=i.memoizedState,ie.componentWillUnmount()}catch(se){rt(c,o,se)}}break;case 5:to(q,q.return);break;case 22:if(q.memoizedState!==null){Jm(Q);continue}}te!==null?(te.return=q,re=te):Jm(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(S=Q.stateNode,b=Q.memoizedProps.style,v=b!=null&&b.hasOwnProperty("display")?b.display:null,S.style.display=Lo("display",v))}catch(se){rt(n,n.return,se)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=U?"":Q.memoizedProps}catch(se){rt(n,n.return,se)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:An(i,n),Qn(n),c&4&&Km(n);break;case 21:break;default:An(i,n),Qn(n)}}function Qn(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if($m(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Lr(d,""),c.flags&=-33);var p=Gm(n);Fh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Gm(n);jh(n,S,v);break;default:throw Error(t(161))}}catch(b){rt(n,n.return,b)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function uw(n,i,o){re=n,Qm(n)}function Qm(n,i,o){for(var c=(n.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||uu;if(!v){var S=d.alternate,b=S!==null&&S.memoizedState!==null||Lt;S=uu;var U=Lt;if(uu=v,(Lt=b)&&!U)for(re=d;re!==null;)v=re,b=v.child,v.tag===22&&v.memoizedState!==null?Zm(d):b!==null?(b.return=v,re=b):Zm(d);for(;p!==null;)re=p,Qm(p),p=p.sibling;re=d,uu=S,Lt=U}Xm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,re=p):Xm(n)}}function Xm(n){for(;re!==null;){var i=re;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Lt||cu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Lt)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Nn(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Jp(i,p,c);break;case 3:var v=i.updateQueue;if(v!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Jp(i,v,o)}break;case 5:var S=i.stateNode;if(o===null&&i.flags&4){o=S;var b=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&o.focus();break;case"img":b.src&&(o.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Cn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||i.flags&512&&Mh(i)}catch(q){rt(i,i.return,q)}}if(i===n){re=null;break}if(o=i.sibling,o!==null){o.return=i.return,re=o;break}re=i.return}}function Jm(n){for(;re!==null;){var i=re;if(i===n){re=null;break}var o=i.sibling;if(o!==null){o.return=i.return,re=o;break}re=i.return}}function Zm(n){for(;re!==null;){var i=re;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{cu(4,i)}catch(b){rt(i,o,b)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(b){rt(i,d,b)}}var p=i.return;try{Mh(i)}catch(b){rt(i,p,b)}break;case 5:var v=i.return;try{Mh(i)}catch(b){rt(i,v,b)}}}catch(b){rt(i,i.return,b)}if(i===n){re=null;break}var S=i.sibling;if(S!==null){S.return=i.return,re=S;break}re=i.return}}var cw=Math.ceil,hu=ce.ReactCurrentDispatcher,Uh=ce.ReactCurrentOwner,fn=ce.ReactCurrentBatchConfig,De=0,vt=null,at=null,Nt=0,sn=0,no=Kr(0),pt=0,xl=null,Hi=0,du=0,Vh=0,Sl=null,qt=null,zh=0,ro=1/0,xr=null,fu=!1,Hh=null,ei=null,pu=!1,ti=null,mu=0,Cl=0,Bh=null,gu=-1,_u=0;function Ft(){return(De&6)!==0?$e():gu!==-1?gu:gu=$e()}function ni(n){return(n.mode&1)===0?1:(De&2)!==0&&Nt!==0?Nt&-Nt:q0.transition!==null?(_u===0&&(_u=Pi()),_u):(n=Te,n!==0||(n=window.event,n=n===void 0?16:Jo(n.type)),n)}function Pn(n,i,o,c){if(50<Cl)throw Cl=0,Bh=null,Error(t(185));Ur(n,o,c),((De&2)===0||n!==vt)&&(n===vt&&((De&2)===0&&(du|=o),pt===4&&ri(n,Nt)),Kt(n,c),o===1&&De===0&&(i.mode&1)===0&&(ro=$e()+500,$a&&Qr()))}function Kt(n,i){var o=n.callbackNode;cr(n,i);var c=Ai(n,n===vt?Nt:0);if(c===0)o!==null&&qo(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&qo(o),i===1)n.tag===0?G0(tg.bind(null,n)):Vp(tg.bind(null,n)),H0(function(){(De&6)===0&&Qr()}),o=null;else{switch(zr(c)){case 1:o=Ni;break;case 4:o=Mr;break;case 16:o=ln;break;case 536870912:o=_a;break;default:o=ln}o=ug(o,eg.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function eg(n,i){if(gu=-1,_u=0,(De&6)!==0)throw Error(t(327));var o=n.callbackNode;if(io()&&n.callbackNode!==o)return null;var c=Ai(n,n===vt?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=yu(n,c);else{i=c;var d=De;De|=2;var p=rg();(vt!==n||Nt!==i)&&(xr=null,ro=$e()+500,Wi(n,i));do try{fw();break}catch(S){ng(n,S)}while(!0);lh(),hu.current=p,De=d,at!==null?i=0:(vt=null,Nt=0,i=pt)}if(i!==0){if(i===2&&(d=en(n),d!==0&&(c=d,i=Wh(n,d))),i===1)throw o=xl,Wi(n,0),ri(n,c),Kt(n,$e()),o;if(i===6)ri(n,c);else{if(d=n.current.alternate,(c&30)===0&&!hw(d)&&(i=yu(n,c),i===2&&(p=en(n),p!==0&&(c=p,i=Wh(n,p))),i===1))throw o=xl,Wi(n,0),ri(n,c),Kt(n,$e()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:$i(n,qt,xr);break;case 3:if(ri(n,c),(c&130023424)===c&&(i=zh+500-$e(),10<i)){if(Ai(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ft(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Qc($i.bind(null,n,qt,xr),i);break}$i(n,qt,xr);break;case 4:if(ri(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Mt(c);p=1<<v,v=i[v],v>d&&(d=v),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*cw(c/1960))-c,10<c){n.timeoutHandle=Qc($i.bind(null,n,qt,xr),c);break}$i(n,qt,xr);break;case 5:$i(n,qt,xr);break;default:throw Error(t(329))}}}return Kt(n,$e()),n.callbackNode===o?eg.bind(null,n):null}function Wh(n,i){var o=Sl;return n.current.memoizedState.isDehydrated&&(Wi(n,i).flags|=256),n=yu(n,i),n!==2&&(i=qt,qt=o,i!==null&&$h(i)),n}function $h(n){qt===null?qt=n:qt.push.apply(qt,n)}function hw(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],p=d.getSnapshot;d=d.value;try{if(!kn(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ri(n,i){for(i&=~Vh,i&=~du,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Mt(i),c=1<<o;n[o]=-1,i&=~c}}function tg(n){if((De&6)!==0)throw Error(t(327));io();var i=Ai(n,0);if((i&1)===0)return Kt(n,$e()),null;var o=yu(n,i);if(n.tag!==0&&o===2){var c=en(n);c!==0&&(i=c,o=Wh(n,c))}if(o===1)throw o=xl,Wi(n,0),ri(n,i),Kt(n,$e()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,$i(n,qt,xr),Kt(n,$e()),null}function Gh(n,i){var o=De;De|=1;try{return n(i)}finally{De=o,De===0&&(ro=$e()+500,$a&&Qr())}}function Bi(n){ti!==null&&ti.tag===0&&(De&6)===0&&io();var i=De;De|=1;var o=fn.transition,c=Te;try{if(fn.transition=null,Te=1,n)return n()}finally{Te=c,fn.transition=o,De=i,(De&6)===0&&Qr()}}function qh(){sn=no.current,Je(no)}function Wi(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,z0(o)),at!==null)for(o=at.return;o!==null;){var c=o;switch(nh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ba();break;case 3:Zs(),Je(Wt),Je(bt),mh();break;case 5:fh(c);break;case 4:Zs();break;case 13:Je(tt);break;case 19:Je(tt);break;case 10:ah(c.type._context);break;case 22:case 23:qh()}o=o.return}if(vt=n,at=n=ii(n.current,null),Nt=sn=i,pt=0,xl=null,Vh=du=Hi=0,qt=Sl=null,Ui!==null){for(i=0;i<Ui.length;i++)if(o=Ui[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,p=o.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}o.pending=c}Ui=null}return n}function ng(n,i){do{var o=at;try{if(lh(),tu.current=su,nu){for(var c=nt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}nu=!1}if(zi=0,yt=ft=nt=null,gl=!1,_l=0,Uh.current=null,o===null||o.return===null){pt=1,xl=i,at=null;break}e:{var p=n,v=o.return,S=o,b=i;if(i=Nt,S.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var U=b,K=S,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var q=K.alternate;q?(K.updateQueue=q.updateQueue,K.memoizedState=q.memoizedState,K.lanes=q.lanes):(K.updateQueue=null,K.memoizedState=null)}var te=Tm(v);if(te!==null){te.flags&=-257,Nm(te,v,S,p,i),te.mode&1&&km(p,U,i),i=te,b=U;var ie=i.updateQueue;if(ie===null){var se=new Set;se.add(b),i.updateQueue=se}else ie.add(b);break e}else{if((i&1)===0){km(p,U,i),Kh();break e}b=Error(t(426))}}else if(Ze&&S.mode&1){var lt=Tm(v);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),Nm(lt,v,S,p,i),sh(eo(b,S));break e}}p=b=eo(b,S),pt!==4&&(pt=2),Sl===null?Sl=[p]:Sl.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var j=Cm(p,b,i);Xp(p,j);break e;case 1:S=b;var D=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ei===null||!ei.has(F)))){p.flags|=65536,i&=-i,p.lanes|=i;var X=Im(p,S,i);Xp(p,X);break e}}p=p.return}while(p!==null)}sg(o)}catch(oe){i=oe,at===o&&o!==null&&(at=o=o.return);continue}break}while(!0)}function rg(){var n=hu.current;return hu.current=su,n===null?su:n}function Kh(){(pt===0||pt===3||pt===2)&&(pt=4),vt===null||(Hi&268435455)===0&&(du&268435455)===0||ri(vt,Nt)}function yu(n,i){var o=De;De|=2;var c=rg();(vt!==n||Nt!==i)&&(xr=null,Wi(n,i));do try{dw();break}catch(d){ng(n,d)}while(!0);if(lh(),De=o,hu.current=c,at!==null)throw Error(t(261));return vt=null,Nt=0,pt}function dw(){for(;at!==null;)ig(at)}function fw(){for(;at!==null&&!ma();)ig(at)}function ig(n){var i=ag(n.alternate,n,sn);n.memoizedProps=n.pendingProps,i===null?sg(n):at=i,Uh.current=null}function sg(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=sw(o,i,sn),o!==null){at=o;return}}else{if(o=ow(o,i),o!==null){o.flags&=32767,at=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,at=null;return}}if(i=i.sibling,i!==null){at=i;return}at=i=n}while(i!==null);pt===0&&(pt=5)}function $i(n,i,o){var c=Te,d=fn.transition;try{fn.transition=null,Te=1,pw(n,i,o,c)}finally{fn.transition=d,Te=c}return null}function pw(n,i,o,c){do io();while(ti!==null);if((De&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(Be(n,p),n===vt&&(at=vt=null,Nt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||pu||(pu=!0,ug(ln,function(){return io(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=fn.transition,fn.transition=null;var v=Te;Te=1;var S=De;De|=4,Uh.current=null,aw(n,o),Ym(o,n),O0(Kc),Br=!!qc,Kc=qc=null,n.current=o,uw(o),Pc(),De=S,Te=v,fn.transition=p}else n.current=o;if(pu&&(pu=!1,ti=n,mu=d),p=n.pendingLanes,p===0&&(ei=null),ya(o.stateNode),Kt(n,$e()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(fu)throw fu=!1,n=Hh,Hh=null,n;return(mu&1)!==0&&n.tag!==0&&io(),p=n.pendingLanes,(p&1)!==0?n===Bh?Cl++:(Cl=0,Bh=n):Cl=0,Qr(),null}function io(){if(ti!==null){var n=zr(mu),i=fn.transition,o=Te;try{if(fn.transition=null,Te=16>n?16:n,ti===null)var c=!1;else{if(n=ti,ti=null,mu=0,(De&6)!==0)throw Error(t(331));var d=De;for(De|=4,re=n.current;re!==null;){var p=re,v=p.child;if((re.flags&16)!==0){var S=p.deletions;if(S!==null){for(var b=0;b<S.length;b++){var U=S[b];for(re=U;re!==null;){var K=re;switch(K.tag){case 0:case 11:case 15:El(8,K,p)}var Q=K.child;if(Q!==null)Q.return=K,re=Q;else for(;re!==null;){K=re;var q=K.sibling,te=K.return;if(Wm(K),K===U){re=null;break}if(q!==null){q.return=te,re=q;break}re=te}}}var ie=p.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var lt=se.sibling;se.sibling=null,se=lt}while(se!==null)}}re=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,re=v;else e:for(;re!==null;){if(p=re,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:El(9,p,p.return)}var j=p.sibling;if(j!==null){j.return=p.return,re=j;break e}re=p.return}}var D=n.current;for(re=D;re!==null;){v=re;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,re=F;else e:for(v=D;re!==null;){if(S=re,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:cu(9,S)}}catch(oe){rt(S,S.return,oe)}if(S===v){re=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,re=X;break e}re=S.return}}if(De=d,Qr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ri,n)}catch{}c=!0}return c}finally{Te=o,fn.transition=i}}return!1}function og(n,i,o){i=eo(o,i),i=Cm(n,i,1),n=Jr(n,i,1),i=Ft(),n!==null&&(Ur(n,1,i),Kt(n,i))}function rt(n,i,o){if(n.tag===3)og(n,n,o);else for(;i!==null;){if(i.tag===3){og(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ei===null||!ei.has(c))){n=eo(o,n),n=Im(i,n,1),i=Jr(i,n,1),n=Ft(),i!==null&&(Ur(i,1,n),Kt(i,n));break}}i=i.return}}function mw(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Ft(),n.pingedLanes|=n.suspendedLanes&o,vt===n&&(Nt&o)===o&&(pt===4||pt===3&&(Nt&130023424)===Nt&&500>$e()-zh?Wi(n,0):Vh|=o),Kt(n,i)}function lg(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ts,Ts<<=1,(Ts&130023424)===0&&(Ts=4194304)));var o=Ft();n=vr(n,i),n!==null&&(Ur(n,i,o),Kt(n,o))}function gw(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),lg(n,o)}function _w(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),lg(n,o)}var ag;ag=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Wt.current)Gt=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Gt=!1,iw(n,i,o);Gt=(n.flags&131072)!==0}else Gt=!1,Ze&&(i.flags&1048576)!==0&&zp(i,qa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;au(n,i),n=i.pendingProps;var d=Gs(i,bt.current);Js(i,o),d=yh(null,i,c,n,d,o);var p=vh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,$t(c)?(p=!0,Wa(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,hh(i),d.updater=ou,i.stateNode=d,d._reactInternals=i,Ih(i,c,n,o),i=Rh(null,i,c,!0,p,o)):(i.tag=0,Ze&&p&&th(i),jt(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(au(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=vw(c),n=Nn(c,n),d){case 0:i=Nh(null,i,c,n,o);break e;case 1:i=Om(null,i,c,n,o);break e;case 11:i=Rm(null,i,c,n,o);break e;case 14:i=Am(null,i,c,Nn(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nn(c,d),Nh(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nn(c,d),Om(n,i,c,d,o);case 3:e:{if(Lm(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,d=p.element,Qp(n,i),Za(i,c,null,o);var v=i.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=eo(Error(t(423)),i),i=Mm(n,i,c,o,d);break e}else if(c!==d){d=eo(Error(t(424)),i),i=Mm(n,i,c,o,d);break e}else for(rn=qr(i.stateNode.containerInfo.firstChild),nn=i,Ze=!0,Tn=null,o=Kp(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ys(),c===d){i=Er(n,i,o);break e}jt(n,i,c,o)}i=i.child}return i;case 5:return Zp(i),n===null&&ih(i),c=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,Yc(c,d)?v=null:p!==null&&Yc(c,p)&&(i.flags|=32),Dm(n,i),jt(n,i,v,o),i.child;case 6:return n===null&&ih(i),null;case 13:return jm(n,i,o);case 4:return dh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Qs(i,null,c,o):jt(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nn(c,d),Rm(n,i,c,d,o);case 7:return jt(n,i,i.pendingProps,o),i.child;case 8:return jt(n,i,i.pendingProps.children,o),i.child;case 12:return jt(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,v=d.value,Ge(Qa,c._currentValue),c._currentValue=v,p!==null)if(kn(p.value,v)){if(p.children===d.children&&!Wt.current){i=Er(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var S=p.dependencies;if(S!==null){v=p.child;for(var b=S.firstContext;b!==null;){if(b.context===c){if(p.tag===1){b=wr(-1,o&-o),b.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?b.next=b:(b.next=K.next,K.next=b),U.pending=b}}p.lanes|=o,b=p.alternate,b!==null&&(b.lanes|=o),uh(p.return,o,i),S.lanes|=o;break}b=b.next}}else if(p.tag===10)v=p.type===i.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=o,S=v.alternate,S!==null&&(S.lanes|=o),uh(v,o,i),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===i){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}jt(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Js(i,o),d=hn(d),c=c(d),i.flags|=1,jt(n,i,c,o),i.child;case 14:return c=i.type,d=Nn(c,i.pendingProps),d=Nn(c.type,d),Am(n,i,c,d,o);case 15:return Pm(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nn(c,d),au(n,i),i.tag=1,$t(c)?(n=!0,Wa(i)):n=!1,Js(i,o),xm(i,c,d),Ih(i,c,d,o),Rh(null,i,c,!0,n,o);case 19:return Um(n,i,o);case 22:return bm(n,i,o)}throw Error(t(156,i.tag))};function ug(n,i){return Is(n,i)}function yw(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,i,o,c){return new yw(n,i,o,c)}function Yh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vw(n){if(typeof n=="function")return Yh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===ve)return 14}return 2}function ii(n,i){var o=n.alternate;return o===null?(o=pn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function vu(n,i,o,c,d,p){var v=2;if(c=n,typeof n=="function")Yh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case P:return Gi(o.children,d,p,i);case x:v=8,d|=8;break;case C:return n=pn(12,o,i,d|2),n.elementType=C,n.lanes=p,n;case T:return n=pn(13,o,i,d),n.elementType=T,n.lanes=p,n;case we:return n=pn(19,o,i,d),n.elementType=we,n.lanes=p,n;case Oe:return wu(o,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:v=10;break e;case A:v=9;break e;case O:v=11;break e;case ve:v=14;break e;case Qe:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=pn(v,o,i,d),i.elementType=n,i.type=c,i.lanes=p,i}function Gi(n,i,o,c){return n=pn(7,n,c,i),n.lanes=o,n}function wu(n,i,o,c){return n=pn(22,n,c,i),n.elementType=Oe,n.lanes=o,n.stateNode={isHidden:!1},n}function Qh(n,i,o){return n=pn(6,n,null,i),n.lanes=o,n}function Xh(n,i,o){return i=pn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function ww(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fr(0),this.expirationTimes=Fr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Jh(n,i,o,c,d,p,v,S,b){return n=new ww(n,i,o,S,b),i===1?(i=1,p===!0&&(i|=8)):i=0,p=pn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},hh(p),n}function Ew(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function cg(n){if(!n)return Yr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if($t(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if($t(o))return Fp(n,o,i)}return i}function hg(n,i,o,c,d,p,v,S,b){return n=Jh(o,c,!0,n,d,p,v,S,b),n.context=cg(null),o=n.current,c=Ft(),d=ni(o),p=wr(c,d),p.callback=i??null,Jr(o,p,d),n.current.lanes=d,Ur(n,d,c),Kt(n,c),n}function Eu(n,i,o,c){var d=i.current,p=Ft(),v=ni(d);return o=cg(o),i.context===null?i.context=o:i.pendingContext=o,i=wr(p,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Jr(d,i,v),n!==null&&(Pn(n,d,v,p),Ja(n,d,v)),v}function xu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function dg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Zh(n,i){dg(n,i),(n=n.alternate)&&dg(n,i)}function xw(){return null}var fg=typeof reportError=="function"?reportError:function(n){console.error(n)};function ed(n){this._internalRoot=n}Su.prototype.render=ed.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Eu(n,i,null,null)},Su.prototype.unmount=ed.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Bi(function(){Eu(null,n,null,null)}),i[mr]=null}};function Su(n){this._internalRoot=n}Su.prototype.unstable_scheduleHydration=function(n){if(n){var i=Sa();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Bn.length&&i!==0&&i<Bn[o].priority;o++);Bn.splice(o,0,n),o===0&&ka(n)}};function td(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function pg(){}function Sw(n,i,o,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=xu(v);p.call(U)}}var v=hg(i,c,n,0,null,!1,!1,"",pg);return n._reactRootContainer=v,n[mr]=v.current,al(n.nodeType===8?n.parentNode:n),Bi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var U=xu(b);S.call(U)}}var b=Jh(n,0,!1,null,null,!1,!1,"",pg);return n._reactRootContainer=b,n[mr]=b.current,al(n.nodeType===8?n.parentNode:n),Bi(function(){Eu(i,b,o,c)}),b}function Iu(n,i,o,c,d){var p=o._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var S=d;d=function(){var b=xu(v);S.call(b)}}Eu(i,v,n,d)}else v=Sw(o,i,n,d,c);return xu(v)}Ea=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=jr(i.pendingLanes);o!==0&&(Vr(i,o|1),Kt(i,$e()),(De&6)===0&&(ro=$e()+500,Qr()))}break;case 13:Bi(function(){var c=vr(n,1);if(c!==null){var d=Ft();Pn(c,n,1,d)}}),Zh(n,1)}},Ns=function(n){if(n.tag===13){var i=vr(n,134217728);if(i!==null){var o=Ft();Pn(i,n,134217728,o)}Zh(n,134217728)}},xa=function(n){if(n.tag===13){var i=ni(n),o=vr(n,i);if(o!==null){var c=Ft();Pn(o,n,i,c)}Zh(n,i)}},Sa=function(){return Te},Ca=function(n,i){var o=Te;try{return Te=n,i()}finally{Te=o}},Vo=function(n,i,o){switch(i){case"input":if(Po(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=Ha(c);if(!d)throw Error(t(90));ps(c),Po(c,d)}}}break;case"textarea":ys(n,o);break;case"select":i=o.value,i!=null&&or(n,!!o.multiple,i,!1)}},Es=Gh,Ho=Bi;var Cw={usingClientEntryPoint:!1,Events:[hl,Ws,Ha,ar,zo,Gh]},Il={findFiberByHostInstance:Li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iw={bundleType:Il.bundleType,version:Il.version,rendererPackageName:Il.rendererPackageName,rendererConfig:Il.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Go(n),n===null?null:n.stateNode},findFiberByHostInstance:Il.findFiberByHostInstance||xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{Ri=ku.inject(Iw),Zt=ku}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cw,Yt.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(i))throw Error(t(200));return Ew(n,i,null,o)},Yt.createRoot=function(n,i){if(!td(n))throw Error(t(299));var o=!1,c="",d=fg;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Jh(n,1,!1,null,null,o,!1,c,d),n[mr]=i.current,al(n.nodeType===8?n.parentNode:n),new ed(i)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Go(i),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Bi(n)},Yt.hydrate=function(n,i,o){if(!Cu(i))throw Error(t(200));return Iu(null,n,i,!0,o)},Yt.hydrateRoot=function(n,i,o){if(!td(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,p="",v=fg;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),i=hg(i,null,n,1,o??null,d,!1,p,v),n[mr]=i.current,al(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Su(i)},Yt.render=function(n,i,o){if(!Cu(i))throw Error(t(200));return Iu(null,n,i,!1,o)},Yt.unmountComponentAtNode=function(n){if(!Cu(n))throw Error(t(40));return n._reactRootContainer?(Bi(function(){Iu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Gh,Yt.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!Cu(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Iu(n,i,o,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Sg;function Ow(){if(Sg)return id.exports;Sg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),id.exports=Dw(),id.exports}var Cg;function Lw(){if(Cg)return Tu;Cg=1;var r=Ow();return Tu.createRoot=r.createRoot,Tu.hydrateRoot=r.hydrateRoot,Tu}var Mw=Lw();const Ig=r=>{let e;const t=new Set,s=(w,N)=>{const k=typeof w=="function"?w(e):w;if(!Object.is(k,e)){const I=e;e=N??(typeof k!="object"||k===null)?k:Object.assign({},e,k),t.forEach(H=>H(e,I))}},l=()=>e,m={setState:s,getState:l,getInitialState:()=>_,subscribe:w=>(t.add(w),()=>t.delete(w))},_=e=r(s,l,m);return m},jw=r=>r?Ig(r):Ig,Fw=r=>r;function Uw(r,e=Fw){const t=vg.useSyncExternalStore(r.subscribe,()=>e(r.getState()),()=>e(r.getInitialState()));return vg.useDebugValue(t),t}const kg=r=>{const e=jw(r),t=s=>Uw(e,s);return Object.assign(t,e),t},Vw=r=>r?kg(r):kg,zw=()=>{};var Tg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=function(r,e){if(!r)throw Co(e)},Co=function(r){return new Error("Firebase Database ("+ly.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[t++]=l:l<2048?(e[t++]=l>>6|192,e[t++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=l>>18|240,e[t++]=l>>12&63|128,e[t++]=l>>6&63|128,e[t++]=l&63|128):(e[t++]=l>>12|224,e[t++]=l>>6&63|128,e[t++]=l&63|128)}return e},Hw=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const l=r[t++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[t++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[t++],h=r[t++],m=r[t++],_=((l&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(_>>10)),e[s++]=String.fromCharCode(56320+(_&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|h&63)}}return e.join("")},ef={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],h=l+1<r.length,m=h?r[l+1]:0,_=l+2<r.length,w=_?r[l+2]:0,N=u>>2,k=(u&3)<<4|m>>4;let I=(m&15)<<2|w>>6,H=w&63;_||(H=64,h||(I=64)),s.push(t[N],t[k],t[I],t[H])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ay(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Hw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=t[r.charAt(l++)],m=l<r.length?t[r.charAt(l)]:0;++l;const w=l<r.length?t[r.charAt(l)]:64;++l;const k=l<r.length?t[r.charAt(l)]:64;if(++l,u==null||m==null||w==null||k==null)throw new Bw;const I=u<<2|m>>4;if(s.push(I),w!==64){const H=m<<4&240|w>>2;if(s.push(H),k!==64){const z=w<<6&192|k;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Bw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uy=function(r){const e=ay(r);return ef.encodeByteArray(e,!0)},Vu=function(r){return uy(r).replace(/\./g,"")},zu=function(r){try{return ef.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(r){return cy(void 0,r)}function cy(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!$w(t)||(r[t]=cy(r[t],e[t]));return r}function $w(r){return r!=="__proto__"}/**
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
 */function Gw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qw=()=>Gw().__FIREBASE_DEFAULTS__,Kw=()=>{if(typeof process>"u"||typeof Tg>"u")return;const r=Tg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Yw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&zu(r[1]);return e&&JSON.parse(e)},tf=()=>{try{return zw()||qw()||Kw()||Yw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},hy=r=>{var e,t;return(t=(e=tf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},dy=r=>{const e=hy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},fy=()=>{var r;return(r=tf())===null||r===void 0?void 0:r.config},py=r=>{var e;return(e=tf())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function us(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function nf(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function my(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Vu(JSON.stringify(t)),Vu(JSON.stringify(h)),""].join(".")}const Ol={};function Qw(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ol))Ol[e]?r.emulator.push(e):r.prod.push(e);return r}function Xw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Ng=!1;function rf(r,e){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||Ol[r]===e||Ol[r]||Ng)return;Ol[r]=e;function t(I){return`__firebase__banner__${I}`}const s="__firebase__banner",u=Qw().prod.length>0;function h(){const I=document.getElementById(s);I&&I.remove()}function m(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function _(I,H){I.setAttribute("width","24"),I.setAttribute("id",H),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function w(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Ng=!0,h()},I}function N(I,H){I.setAttribute("id",H),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function k(){const I=Xw(s),H=t("text"),z=document.getElementById(H)||document.createElement("span"),Y=t("learnmore"),$=document.getElementById(Y)||document.createElement("a"),_e=t("preprendIcon"),G=document.getElementById(_e)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const le=I.element;m(le),N($,Y);const ce=w();_(G,_e),le.append(G,z,$,ce),document.body.appendChild(le)}u?(z.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",H)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",k):k()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function Jw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function gy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e1(){const r=Vt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function t1(){return ly.NODE_ADMIN===!0}function n1(){try{return typeof indexedDB=="object"}catch{return!1}}function r1(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{t=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="FirebaseError";class br extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=i1,Object.setPrototypeOf(this,br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,na.prototype.create)}}class na{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},l=`${this.service}/${e}`,u=this.errors[e],h=u?s1(u,s):"Error",m=`${this.serviceName}: ${h} (${l}).`;return new br(l,m,s)}}function s1(r,e){return r.replace(o1,(t,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const o1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(r){return JSON.parse(r)}function St(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=function(r){let e={},t={},s={},l="";try{const u=r.split(".");e=Wl(zu(u[0])||""),t=Wl(zu(u[1])||""),l=u[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:l}},l1=function(r){const e=_y(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},a1=function(r){const e=_y(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function _o(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Id(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Hu(r,e,t){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(t,r[l],l,r));return s}function mi(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const l of t){if(!s.includes(l))return!1;const u=r[l],h=e[l];if(Rg(u)&&Rg(h)){if(!mi(u,h))return!1}else if(u!==h)return!1}for(const l of s)if(!t.includes(l))return!1;return!0}function Rg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Pl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,u]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(u)}}),e}function bl(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let k=0;k<16;k++)s[k]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let k=0;k<16;k++)s[k]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let k=16;k<80;k++){const I=s[k-3]^s[k-8]^s[k-14]^s[k-16];s[k]=(I<<1|I>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],h=this.chain_[2],m=this.chain_[3],_=this.chain_[4],w,N;for(let k=0;k<80;k++){k<40?k<20?(w=m^u&(h^m),N=1518500249):(w=u^h^m,N=1859775393):k<60?(w=u&h|m&(u|h),N=2400959708):(w=u^h^m,N=3395469782);const I=(l<<5|l>>>27)+w+_+N+s[k]&4294967295;_=m,m=h,h=(u<<30|u>>>2)&4294967295,u=l,l=I}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+m&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let l=0;const u=this.buf_;let h=this.inbuf_;for(;l<t;){if(h===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<t;)if(u[h]=e.charCodeAt(l),++h,++l,h===this.blockSize){this.compress_(u),h=0;break}}else for(;l<t;)if(u[h]=e[l],++h,++l,h===this.blockSize){this.compress_(u),h=0;break}}this.inbuf_=h,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function c1(r,e){const t=new h1(r,e);return t.subscribe.bind(t)}class h1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let l;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");d1(e,["next","error","complete"])?l=e:l={next:e,error:t,complete:s},l.next===void 0&&(l.next=ld),l.error===void 0&&(l.error=ld),l.complete===void 0&&(l.complete=ld);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d1(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ld(){}function of(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,J(s<r.length,"Surrogate pair missing trail surrogate.");const h=r.charCodeAt(s)-56320;l=65536+(u<<10)+h}l<128?e[t++]=l:l<2048?(e[t++]=l>>6|192,e[t++]=l&63|128):l<65536?(e[t++]=l>>12|224,e[t++]=l>>6&63|128,e[t++]=l&63|128):(e[t++]=l>>18|240,e[t++]=l>>12&63|128,e[t++]=l>>6&63|128,e[t++]=l&63|128)}return e},pc=function(r){let e=0;for(let t=0;t<r.length;t++){const s=r.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */class p1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new fc;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:t});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),l=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(g1(e))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qi){return this.instances.has(e)}getOptions(e=qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(l)}return l}onInit(e,t){var s;const l=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const h=this.instances.get(l);return h&&e(h,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const l of s)try{l(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:m1(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qi){return this.component?this.component.multipleInstances?e:qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function m1(r){return r===qi?void 0:r}function g1(r){return r.instantiationMode==="EAGER"}/**
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
 */class _1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new p1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Fe||(Fe={}));const y1={debug:Fe.DEBUG,verbose:Fe.VERBOSE,info:Fe.INFO,warn:Fe.WARN,error:Fe.ERROR,silent:Fe.SILENT},v1=Fe.INFO,w1={[Fe.DEBUG]:"log",[Fe.VERBOSE]:"log",[Fe.INFO]:"info",[Fe.WARN]:"warn",[Fe.ERROR]:"error"},E1=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=w1[e];if(l)console[l](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mc{constructor(e){this.name=e,this._logLevel=v1,this._logHandler=E1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Fe.DEBUG,...e),this._logHandler(this,Fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Fe.VERBOSE,...e),this._logHandler(this,Fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Fe.INFO,...e),this._logHandler(this,Fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Fe.WARN,...e),this._logHandler(this,Fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Fe.ERROR,...e),this._logHandler(this,Fe.ERROR,...e)}}const x1=(r,e)=>e.some(t=>r instanceof t);let Ag,Pg;function S1(){return Ag||(Ag=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C1(){return Pg||(Pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yy=new WeakMap,kd=new WeakMap,vy=new WeakMap,ad=new WeakMap,lf=new WeakMap;function I1(r){const e=new Promise((t,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(hi(r.result)),l()},h=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&yy.set(t,r)}).catch(()=>{}),lf.set(e,r),e}function k1(r){if(kd.has(r))return;const e=new Promise((t,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),l()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});kd.set(r,e)}let Td={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return kd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||vy.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return hi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function T1(r){Td=r(Td)}function N1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(ud(this),e,...t);return vy.set(s,e.sort?e.sort():[e]),hi(s)}:C1().includes(r)?function(...e){return r.apply(ud(this),e),hi(yy.get(this))}:function(...e){return hi(r.apply(ud(this),e))}}function R1(r){return typeof r=="function"?N1(r):(r instanceof IDBTransaction&&k1(r),x1(r,S1())?new Proxy(r,Td):r)}function hi(r){if(r instanceof IDBRequest)return I1(r);if(ad.has(r))return ad.get(r);const e=R1(r);return e!==r&&(ad.set(r,e),lf.set(e,r)),e}const ud=r=>lf.get(r);function A1(r,e,{blocked:t,upgrade:s,blocking:l,terminated:u}={}){const h=indexedDB.open(r,e),m=hi(h);return s&&h.addEventListener("upgradeneeded",_=>{s(hi(h.result),_.oldVersion,_.newVersion,hi(h.transaction),_)}),t&&h.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),m.then(_=>{u&&_.addEventListener("close",()=>u()),l&&_.addEventListener("versionchange",w=>l(w.oldVersion,w.newVersion,w))}).catch(()=>{}),m}const P1=["get","getKey","getAll","getAllKeys","count"],b1=["put","add","delete","clear"],cd=new Map;function bg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(cd.get(e))return cd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,l=b1.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(l||P1.includes(t)))return;const u=async function(h,...m){const _=this.transaction(h,l?"readwrite":"readonly");let w=_.store;return s&&(w=w.index(m.shift())),(await Promise.all([w[t](...m),l&&_.done]))[0]};return cd.set(e,u),u}T1(r=>({...r,get:(e,t,s)=>bg(e,t)||r.get(e,t,s),has:(e,t)=>!!bg(e,t)||r.has(e,t)}));/**
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
 */class D1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(O1(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function O1(r){const e=r.getComponent();return e?.type==="VERSION"}const Nd="@firebase/app",Dg="0.13.2";/**
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
 */const Nr=new mc("@firebase/app"),L1="@firebase/app-compat",M1="@firebase/analytics-compat",j1="@firebase/analytics",F1="@firebase/app-check-compat",U1="@firebase/app-check",V1="@firebase/auth",z1="@firebase/auth-compat",H1="@firebase/database",B1="@firebase/data-connect",W1="@firebase/database-compat",$1="@firebase/functions",G1="@firebase/functions-compat",q1="@firebase/installations",K1="@firebase/installations-compat",Y1="@firebase/messaging",Q1="@firebase/messaging-compat",X1="@firebase/performance",J1="@firebase/performance-compat",Z1="@firebase/remote-config",eE="@firebase/remote-config-compat",tE="@firebase/storage",nE="@firebase/storage-compat",rE="@firebase/firestore",iE="@firebase/ai",sE="@firebase/firestore-compat",oE="firebase",lE="11.10.0";/**
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
 */const Rd="[DEFAULT]",aE={[Nd]:"fire-core",[L1]:"fire-core-compat",[j1]:"fire-analytics",[M1]:"fire-analytics-compat",[U1]:"fire-app-check",[F1]:"fire-app-check-compat",[V1]:"fire-auth",[z1]:"fire-auth-compat",[H1]:"fire-rtdb",[B1]:"fire-data-connect",[W1]:"fire-rtdb-compat",[$1]:"fire-fn",[G1]:"fire-fn-compat",[q1]:"fire-iid",[K1]:"fire-iid-compat",[Y1]:"fire-fcm",[Q1]:"fire-fcm-compat",[X1]:"fire-perf",[J1]:"fire-perf-compat",[Z1]:"fire-rc",[eE]:"fire-rc-compat",[tE]:"fire-gcs",[nE]:"fire-gcs-compat",[rE]:"fire-fst",[sE]:"fire-fst-compat",[iE]:"fire-vertex","fire-js":"fire-js",[oE]:"fire-js-all"};/**
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
 */const Bu=new Map,uE=new Map,Ad=new Map;function Og(r,e){try{r.container.addComponent(e)}catch(t){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function ns(r){const e=r.name;if(Ad.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;Ad.set(e,r);for(const t of Bu.values())Og(t,r);for(const t of uE.values())Og(t,r);return!0}function gc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function mn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const cE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},di=new na("app","Firebase",cE);/**
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
 */class hE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=lE;function wy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Rd,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw di.create("bad-app-name",{appName:String(l)});if(t||(t=fy()),!t)throw di.create("no-options");const u=Bu.get(l);if(u){if(mi(t,u.options)&&mi(s,u.config))return u;throw di.create("duplicate-app",{appName:l})}const h=new _1(l);for(const _ of Ad.values())h.addComponent(_);const m=new hE(t,s,h);return Bu.set(l,m),m}function af(r=Rd){const e=Bu.get(r);if(!e&&r===Rd&&fy())return wy();if(!e)throw di.create("no-app",{appName:r});return e}function er(r,e,t){var s;let l=(s=aE[r])!==null&&s!==void 0?s:r;t&&(l+=`-${t}`);const u=l.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${l}" with version "${e}":`];u&&m.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(m.join(" "));return}ns(new gi(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const dE="firebase-heartbeat-database",fE=1,$l="firebase-heartbeat-store";let hd=null;function Ey(){return hd||(hd=A1(dE,fE,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore($l)}catch(t){console.warn(t)}}}}).catch(r=>{throw di.create("idb-open",{originalErrorMessage:r.message})})),hd}async function pE(r){try{const t=(await Ey()).transaction($l),s=await t.objectStore($l).get(xy(r));return await t.done,s}catch(e){if(e instanceof br)Nr.warn(e.message);else{const t=di.create("idb-get",{originalErrorMessage:e?.message});Nr.warn(t.message)}}}async function Lg(r,e){try{const s=(await Ey()).transaction($l,"readwrite");await s.objectStore($l).put(e,xy(r)),await s.done}catch(t){if(t instanceof br)Nr.warn(t.message);else{const s=di.create("idb-set",{originalErrorMessage:t?.message});Nr.warn(s.message)}}}function xy(r){return`${r.name}!${r.options.appId}`}/**
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
 */const mE=1024,gE=30;class _E{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Mg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>gE){const h=wE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mg(),{heartbeatsToSend:s,unsentEntries:l}=yE(this._heartbeatsCache.heartbeats),u=Vu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Nr.warn(t),""}}}function Mg(){return new Date().toISOString().substring(0,10)}function yE(r,e=mE){const t=[];let s=r.slice();for(const l of r){const u=t.find(h=>h.agent===l.agent);if(u){if(u.dates.push(l.date),jg(t)>e){u.dates.pop();break}}else if(t.push({agent:l.agent,dates:[l.date]}),jg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class vE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return n1()?r1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pE(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const l=await this.read();return Lg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const l=await this.read();return Lg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function jg(r){return Vu(JSON.stringify({version:2,heartbeats:r})).length}function wE(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function EE(r){ns(new gi("platform-logger",e=>new D1(e),"PRIVATE")),ns(new gi("heartbeat",e=>new _E(e),"PRIVATE")),er(Nd,Dg,r),er(Nd,Dg,"esm2017"),er("fire-js","")}EE("");function uf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(t[s[l]]=r[s[l]]);return t}function Sy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xE=Sy,Cy=new na("auth","Firebase",Sy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new mc("@firebase/auth");function SE(r,...e){Wu.logLevel<=Fe.WARN&&Wu.warn(`Auth (${cs}): ${r}`,...e)}function Ou(r,...e){Wu.logLevel<=Fe.ERROR&&Wu.error(`Auth (${cs}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(r,...e){throw cf(r,...e)}function tr(r,...e){return cf(r,...e)}function Iy(r,e,t){const s=Object.assign(Object.assign({},xE()),{[e]:t});return new na("auth","Firebase",s).create(e,{appName:r.name})}function fi(r){return Iy(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Cy.create(r,...e)}function pe(r,e,...t){if(!r)throw cf(e,...t)}function Cr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ou(e),new Error(e)}function Rr(r,e){r||Cr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function CE(){return Fg()==="http:"||Fg()==="https:"}function Fg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CE()||Zw()||"connection"in navigator)?navigator.onLine:!0}function kE(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rr(t>e,"Short delay should be less than long delay!"),this.isMobile=sf()||gy()}get(){return IE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(r,e){Rr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],RE=new ra(3e4,6e4);function vi(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Dr(r,e,t,s,l={}){return Ty(r,l,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Io(Object.assign({key:r.config.apiKey},h)).slice(1),_=await r._getAdditionalHeaders();_["Content-Type"]="application/json",r.languageCode&&(_["X-Firebase-Locale"]=r.languageCode);const w=Object.assign({method:e,headers:_},u);return Jw()||(w.referrerPolicy="no-referrer"),r.emulatorConfig&&us(r.emulatorConfig.host)&&(w.credentials="include"),ky.fetch()(await Ny(r,r.config.apiHost,t,m),w)})}async function Ty(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},TE),e);try{const l=new PE(r),u=await Promise.race([t(),l.promise]);l.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Nu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[_,w]=m.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nu(r,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw Nu(r,"email-already-in-use",h);if(_==="USER_DISABLED")throw Nu(r,"user-disabled",h);const N=s[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(w)throw Iy(r,N,w);Un(r,N)}}catch(l){if(l instanceof br)throw l;Un(r,"network-request-failed",{message:String(l)})}}async function _c(r,e,t,s,l={}){const u=await Dr(r,e,t,s,l);return"mfaPendingCredential"in u&&Un(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function Ny(r,e,t,s){const l=`${e}${t}?${s}`,u=r,h=u.config.emulator?hf(r.config,l):`${r.config.apiScheme}://${l}`;return NE.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function AE(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(tr(this.auth,"network-request-failed")),RE.get())})}}function Nu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const l=tr(r,e,s);return l.customData._tokenResponse=t,l}function Ug(r){return r!==void 0&&r.enterprise!==void 0}class bE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return AE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DE(r,e){return Dr(r,"GET","/v2/recaptchaConfig",vi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OE(r,e){return Dr(r,"POST","/v1/accounts:delete",e)}async function $u(r,e){return Dr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LE(r,e=!1){const t=Vn(r),s=await t.getIdToken(e),l=df(s);pe(l&&l.exp&&l.auth_time&&l.iat,t.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,h=u?.sign_in_provider;return{claims:l,token:s,authTime:Ll(dd(l.auth_time)),issuedAtTime:Ll(dd(l.iat)),expirationTime:Ll(dd(l.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function dd(r){return Number(r)*1e3}function df(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Ou("JWT malformed, contained fewer than 3 sections"),null;try{const l=zu(t);return l?JSON.parse(l):(Ou("Failed to decode base64 JWT payload"),null)}catch(l){return Ou("Caught error parsing JWT payload as JSON",l?.toString()),null}}function Vg(r){const e=df(r);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof br&&ME(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function ME({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ll(this.lastLoginAt),this.creationTime=Ll(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gu(r){var e;const t=r.auth,s=await r.getIdToken(),l=await Gl(r,$u(t,{idToken:s}));pe(l?.users.length,t,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Ry(u.providerUserInfo):[],m=UE(r.providerData,h),_=r.isAnonymous,w=!(r.email&&u.passwordHash)&&!m?.length,N=_?w:!1,k={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new bd(u.createdAt,u.lastLoginAt),isAnonymous:N};Object.assign(r,k)}async function FE(r){const e=Vn(r);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UE(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Ry(r){return r.map(e=>{var{providerId:t}=e,s=uf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(r,e){const t=await Ty(r,{},async()=>{const s=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,h=await Ny(r,l,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:m,body:s};return r.emulatorConfig&&us(r.emulatorConfig.host)&&(_.credentials="include"),ky.fetch()(h,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zE(r,e){return Dr(r,"POST","/v2/accounts:revokeToken",vi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=Vg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:l,expiresIn:u}=await VE(e,t);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:l,expirationTime:u}=t,h=new uo;return s&&(pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),l&&(pe(typeof l=="string","internal-error",{appName:e}),h.accessToken=l),u&&(pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Cr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(r,e){pe(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:t,auth:s,stsTokenManager:l}=e,u=uf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new bd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Gl(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return LE(this,e)}reload(){return FE(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Gu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(fi(this.auth));const e=await this.getIdToken();return await Gl(this,OE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,l,u,h,m,_,w,N;const k=(s=t.displayName)!==null&&s!==void 0?s:void 0,I=(l=t.email)!==null&&l!==void 0?l:void 0,H=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,z=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,$=(_=t._redirectEventId)!==null&&_!==void 0?_:void 0,_e=(w=t.createdAt)!==null&&w!==void 0?w:void 0,G=(N=t.lastLoginAt)!==null&&N!==void 0?N:void 0,{uid:le,emailVerified:ce,isAnonymous:ye,providerData:B,stsTokenManager:P}=t;pe(le&&P,e,"internal-error");const x=uo.fromJSON(this.name,P);pe(typeof le=="string",e,"internal-error"),oi(k,e.name),oi(I,e.name),pe(typeof ce=="boolean",e,"internal-error"),pe(typeof ye=="boolean",e,"internal-error"),oi(H,e.name),oi(z,e.name),oi(Y,e.name),oi($,e.name),oi(_e,e.name),oi(G,e.name);const C=new On({uid:le,auth:e,email:I,emailVerified:ce,displayName:k,isAnonymous:ye,photoURL:z,phoneNumber:H,tenantId:Y,stsTokenManager:x,createdAt:_e,lastLoginAt:G});return B&&Array.isArray(B)&&(C.providerData=B.map(R=>Object.assign({},R))),$&&(C._redirectEventId=$),C}static async _fromIdTokenResponse(e,t,s=!1){const l=new uo;l.updateFromServerResponse(t);const u=new On({uid:t.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Gu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const l=t.users[0];pe(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Ry(l.providerUserInfo):[],h=!(l.email&&l.passwordHash)&&!u?.length,m=new uo;m.updateFromIdToken(s);const _=new On({uid:l.localId,auth:e,stsTokenManager:m,isAnonymous:h}),w={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new bd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!u?.length};return Object.assign(_,w),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=new Map;function Ir(r){Rr(r instanceof Function,"Expected a class definition");let e=zg.get(r);return e?(Rr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,zg.set(r,e),e)}/**
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
 */class Ay{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ay.type="NONE";const Hg=Ay;/**
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
 */function Lu(r,e,t){return`firebase:${r}:${e}:${t}`}class co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=Lu(this.userKey,l.apiKey,u),this.fullPersistenceKey=Lu("persistence",l.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await $u(this.auth,{idToken:e}).catch(()=>{});return t?On._fromGetAccountInfoResponse(this.auth,t,e):null}return On._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new co(Ir(Hg),e,s);const l=(await Promise.all(t.map(async w=>{if(await w._isAvailable())return w}))).filter(w=>w);let u=l[0]||Ir(Hg);const h=Lu(s,e.config.apiKey,e.name);let m=null;for(const w of t)try{const N=await w._get(h);if(N){let k;if(typeof N=="string"){const I=await $u(e,{idToken:N}).catch(()=>{});if(!I)break;k=await On._fromGetAccountInfoResponse(e,I,N)}else k=On._fromJSON(e,N);w!==u&&(m=k),u=w;break}}catch{}const _=l.filter(w=>w._shouldAllowMigration);return!u._shouldAllowMigration||!_.length?new co(u,e,s):(u=_[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async w=>{if(w!==u)try{await w._remove(h)}catch{}})),new co(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Py(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(My(e))return"Blackberry";if(jy(e))return"Webos";if(by(e))return"Safari";if((e.includes("chrome/")||Dy(e))&&!e.includes("edge/"))return"Chrome";if(Ly(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if(s?.length===2)return s[1]}return"Other"}function Py(r=Vt()){return/firefox\//i.test(r)}function by(r=Vt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dy(r=Vt()){return/crios\//i.test(r)}function Oy(r=Vt()){return/iemobile/i.test(r)}function Ly(r=Vt()){return/android/i.test(r)}function My(r=Vt()){return/blackberry/i.test(r)}function jy(r=Vt()){return/webos/i.test(r)}function ff(r=Vt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function HE(r=Vt()){var e;return ff(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BE(){return e1()&&document.documentMode===10}function Fy(r=Vt()){return ff(r)||Ly(r)||jy(r)||My(r)||/windows phone/i.test(r)||Oy(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(r,e=[]){let t;switch(r){case"Browser":t=Bg(Vt());break;case"Worker":t=`${Bg(Vt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${cs}/${s}`}/**
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
 */class WE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const _=e(u);h(_)}catch(_){m(_)}});s.onAbort=t,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const l of t)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function $E(r,e={}){return Dr(r,"GET","/v2/passwordPolicy",vi(r,e))}/**
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
 */const GE=6;class qE{constructor(e){var t,s,l,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:GE,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,l,u,h,m;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(t=_.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),_.isValid&&(_.isValid=(s=_.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),_.isValid&&(_.isValid=(l=_.containsLowercaseLetter)!==null&&l!==void 0?l:!0),_.isValid&&(_.isValid=(u=_.containsUppercaseLetter)!==null&&u!==void 0?u:!0),_.isValid&&(_.isValid=(h=_.containsNumericCharacter)!==null&&h!==void 0?h:!0),_.isValid&&(_.isValid=(m=_.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),_}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),l&&(t.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,t,s,l){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wg(this),this.idTokenSubscription=new Wg(this),this.beforeStateQueue=new WE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ir(t)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await co.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $u(this,{idToken:e}),s=await On._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(mn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=l?._redirectEventId,_=await this.tryRedirectSignIn(e);(!h||h===m)&&_?.user&&(l=_.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(h){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(fi(this));const t=e?Vn(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $E(this),t=new qE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new na("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await zE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ir(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[Ir(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,l){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,s,l);return()=>{h=!0,_()}}else{const _=e.addObserver(t);return()=>{h=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(t["X-Firebase-AppCheck"]=l),t}async _getAppCheckToken(){var e;if(mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&SE(`Error while retrieving App Check token: ${t.error}`),t?.token}}function hs(r){return Vn(r)}class Wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=c1(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YE(r){yc=r}function Vy(r){return yc.loadJS(r)}function QE(){return yc.recaptchaEnterpriseScript}function XE(){return yc.gapiScript}function JE(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class ZE{constructor(){this.enterprise=new ex}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ex{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const tx="recaptcha-enterprise",zy="NO_RECAPTCHA";class nx{constructor(e){this.type=tx,this.auth=hs(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{DE(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const w=new bE(_);return u.tenantId==null?u._agentRecaptchaConfig=w:u._tenantRecaptchaConfigs[u.tenantId]=w,h(w.siteKey)}}).catch(_=>{m(_)})})}function l(u,h,m){const _=window.grecaptcha;Ug(_)?_.enterprise.ready(()=>{_.enterprise.execute(u,{action:e}).then(w=>{h(w)}).catch(()=>{h(zy)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ZE().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Ug(window.grecaptcha))l(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let _=QE();_.length!==0&&(_+=m),Vy(_).then(()=>{l(m,u,h)}).catch(w=>{h(w)})}}).catch(m=>{h(m)})})}}async function $g(r,e,t,s=!1,l=!1){const u=new nx(r);let h;if(l)h=zy;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const _=m.phoneEnrollmentInfo.phoneNumber,w=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:w,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const _=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Dd(r,e,t,s,l){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await $g(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await $g(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(r,e){const t=gc(r,"auth");if(t.isInitialized()){const l=t.getImmediate(),u=t.getOptions();if(mi(u,e??{}))return l;Un(l,"already-initialized")}return t.initialize({options:e})}function ix(r,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ir);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function sx(r,e,t){const s=hs(r);pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=Hy(e),{host:h,port:m}=ox(e),_=m===null?"":`:${m}`,w={url:`${u}//${h}${_}/`},N=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pe(mi(w,s.config.emulator)&&mi(N,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=w,s.emulatorConfig=N,s.settings.appVerificationDisabledForTesting=!0,us(h)?(nf(`${u}//${h}${_}`),rf("Auth",!0)):lx()}function Hy(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ox(r){const e=Hy(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Gg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Gg(h)}}}function Gg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function lx(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cr("not implemented")}_getIdTokenResponse(e){return Cr("not implemented")}_linkToIdToken(e,t){return Cr("not implemented")}_getReauthenticationResolver(e){return Cr("not implemented")}}async function ax(r,e){return Dr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ux(r,e){return _c(r,"POST","/v1/accounts:signInWithPassword",vi(r,e))}async function cx(r,e){return Dr(r,"POST","/v1/accounts:sendOobCode",vi(r,e))}async function hx(r,e){return cx(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dx(r,e){return _c(r,"POST","/v1/accounts:signInWithEmailLink",vi(r,e))}async function fx(r,e){return _c(r,"POST","/v1/accounts:signInWithEmailLink",vi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends pf{constructor(e,t,s,l=null){super("password",s),this._email=e,this._password=t,this._tenantId=l}static _fromEmailAndPassword(e,t){return new ql(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ql(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(e,t,"signInWithPassword",ux);case"emailLink":return dx(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(e,s,"signUpPassword",ax);case"emailLink":return fx(e,{idToken:t,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(r,e){return _c(r,"POST","/v1/accounts:signInWithIdp",vi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px="http://localhost";class rs extends pf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=t,u=uf(t,["providerId","signInMethod"]);if(!s||!l)return null;const h=new rs(s,l);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ho(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ho(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}buildRequest(){const e={requestUri:px,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Io(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gx(r){const e=Pl(bl(r)).link,t=e?Pl(bl(e)).deep_link_id:null,s=Pl(bl(r)).deep_link_id;return(s?Pl(bl(s)).link:null)||s||t||e||r}class mf{constructor(e){var t,s,l,u,h,m;const _=Pl(bl(e)),w=(t=_.apiKey)!==null&&t!==void 0?t:null,N=(s=_.oobCode)!==null&&s!==void 0?s:null,k=mx((l=_.mode)!==null&&l!==void 0?l:null);pe(w&&N&&k,"argument-error"),this.apiKey=w,this.operation=k,this.code=N,this.continueUrl=(u=_.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=_.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=_.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=gx(e);try{return new mf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.providerId=ko.PROVIDER_ID}static credential(e,t){return ql._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=mf.parseLink(t);return pe(s,"argument-error"),ql._fromEmailAndCode(e,s.code,s.tenantId)}}ko.PROVIDER_ID="password";ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ia extends By{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends ia{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.FACEBOOK_SIGN_IN_METHOD="facebook.com";li.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rs._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ai.credential(t,s)}catch{return null}}}ai.GOOGLE_SIGN_IN_METHOD="google.com";ai.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends ia{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.GITHUB_SIGN_IN_METHOD="github.com";ui.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends ia{constructor(){super("twitter.com")}static credential(e,t){return rs._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ci.credential(t,s)}catch{return null}}}ci.TWITTER_SIGN_IN_METHOD="twitter.com";ci.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,l=!1){const u=await On._fromIdTokenResponse(e,s,l),h=qg(s);return new yo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const l=qg(s);return new yo({user:e,providerId:l,_tokenResponse:s,operationType:t})}}function qg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends br{constructor(e,t,s,l){var u;super(t.code,t.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,qu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,l){return new qu(e,t,s,l)}}function Wy(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?qu._fromErrorAndOperation(r,u,e,s):u})}async function _x(r,e,t=!1){const s=await Gl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return yo._forOperation(r,"link",s)}/**
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
 */async function yx(r,e,t=!1){const{auth:s}=r;if(mn(s.app))return Promise.reject(fi(s));const l="reauthenticate";try{const u=await Gl(r,Wy(s,l,e,r),t);pe(u.idToken,s,"internal-error");const h=df(u.idToken);pe(h,s,"internal-error");const{sub:m}=h;return pe(r.uid===m,s,"user-mismatch"),yo._forOperation(r,l,u)}catch(u){throw u?.code==="auth/user-not-found"&&Un(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $y(r,e,t=!1){if(mn(r.app))return Promise.reject(fi(r));const s="signIn",l=await Wy(r,s,e),u=await yo._fromIdTokenResponse(r,s,l);return t||await r._updateCurrentUser(u.user),u}async function vx(r,e){return $y(hs(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(r){const e=hs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ex(r,e,t){const s=hs(r);await Dd(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",hx)}function xx(r,e,t){return mn(r.app)?Promise.reject(fi(r)):vx(Vn(r),ko.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&wx(r),s})}function Sx(r,e,t,s){return Vn(r).onIdTokenChanged(e,t,s)}function Cx(r,e,t){return Vn(r).beforeAuthStateChanged(e,t)}const Ku="__sak";/**
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
 */class Gy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ku,"1"),this.storage.removeItem(Ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=1e3,kx=10;class qy extends Gy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),l=this.localCache[t];s!==l&&e(t,l,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,_)=>{this.notifyListeners(h,_)});return}const s=e.key;t?this.detachListener():this.stopPolling();const l=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);BE()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,kx):l()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Ix)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qy.type="LOCAL";const Tx=qy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky extends Gy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ky.type="SESSION";const Yy=Ky;/**
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
 */function Nx(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(l=>l.isListeningto(e));if(t)return t;const s=new vc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:l,data:u}=t.data,h=this.handlersMap[l];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const m=Array.from(h).map(async w=>w(t.origin,u)),_=await Nx(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class Rx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,h;return new Promise((m,_)=>{const w=gf("",20);l.port1.start();const N=setTimeout(()=>{_(new Error("unsupported_event"))},s);h={messageChannel:l,onMessage(k){const I=k;if(I.data.eventId===w)switch(I.data.status){case"ack":clearTimeout(N),u=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(I.data.response);break;default:clearTimeout(N),clearTimeout(u),_(new Error("invalid_response"));break}}},this.handlers.add(h),l.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:w,data:t},[l.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}function Ax(r){nr().location.href=r}/**
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
 */function Qy(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function Px(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bx(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Dx(){return Qy()?self:null}/**
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
 */const Xy="firebaseLocalStorageDb",Ox=1,Yu="firebaseLocalStorage",Jy="fbase_key";class sa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wc(r,e){return r.transaction([Yu],e?"readwrite":"readonly").objectStore(Yu)}function Lx(){const r=indexedDB.deleteDatabase(Xy);return new sa(r).toPromise()}function Od(){const r=indexedDB.open(Xy,Ox);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Yu,{keyPath:Jy})}catch(l){t(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Yu)?e(s):(s.close(),await Lx(),e(await Od()))})})}async function Kg(r,e,t){const s=wc(r,!0).put({[Jy]:e,value:t});return new sa(s).toPromise()}async function Mx(r,e){const t=wc(r,!1).get(e),s=await new sa(t).toPromise();return s===void 0?null:s.value}function Yg(r,e){const t=wc(r,!0).delete(e);return new sa(t).toPromise()}const jx=800,Fx=3;class Zy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Od(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Fx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vc._getInstance(Dx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Px(),!this.activeServiceWorker)return;this.sender=new Rx(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Od();return await Kg(e,Ku,"1"),await Yg(e,Ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Mx(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=wc(l,!1).getAll();return new sa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),t.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),t.push(l));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zy.type="LOCAL";const Ux=Zy;new ra(3e4,6e4);/**
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
 */function Vx(r,e){return e?Ir(e):(pe(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class _f extends pf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zx(r){return $y(r.auth,new _f(r),r.bypassAuthState)}function Hx(r){const{auth:e,user:t}=r;return pe(t,e,"internal-error"),yx(t,new _f(r),r.bypassAuthState)}async function Bx(r){const{auth:e,user:t}=r;return pe(t,e,"internal-error"),_x(t,new _f(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:l,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(_))}catch(w){this.reject(w)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zx;case"linkViaPopup":case"linkViaRedirect":return Bx;case"reauthViaPopup":case"reauthViaRedirect":return Hx;default:Un(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=new ra(2e3,1e4);class oo extends ev{constructor(e,t,s,l,u){super(e,t,l,u),this.provider=s,this.authWindow=null,this.pollId=null,oo.currentPopupAction&&oo.currentPopupAction.cancel(),oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wx.get())};e()}}oo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="pendingRedirect",Mu=new Map;class Gx extends ev{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Mu.get(this.auth._key());if(!e){try{const s=await qx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Mu.set(this.auth._key(),e)}return this.bypassAuthState||Mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qx(r,e){const t=Qx(e),s=Yx(r);if(!await s._isAvailable())return!1;const l=await s._get(t)==="true";return await s._remove(t),l}function Kx(r,e){Mu.set(r._key(),e)}function Yx(r){return Ir(r._redirectPersistence)}function Qx(r){return Lu($x,r.config.apiKey,r.name)}async function Xx(r,e,t=!1){if(mn(r.app))return Promise.reject(fi(r));const s=hs(r),l=Vx(s,e),h=await new Gx(s,l,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=10*60*1e3;class Zx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!tv(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(tr(this.auth,l))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qg(e))}saveEventToCache(e){this.cachedEventUids.add(Qg(e)),this.lastProcessedEventTime=Date.now()}}function Qg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function tv({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function eS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(r,e={}){return Dr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rS=/^https?/;async function iS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await tS(r);for(const t of e)try{if(sS(t))return}catch{}Un(r,"unauthorized-domain")}function sS(r){const e=Pd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!rS.test(t))return!1;if(nS.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const oS=new ra(3e4,6e4);function Xg(){const r=nr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function lS(r){return new Promise((e,t)=>{var s,l,u;function h(){Xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xg(),t(tr(r,"network-request-failed"))},timeout:oS.get()})}if(!((l=(s=nr().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=nr().gapi)===null||u===void 0)&&u.load)h();else{const m=JE("iframefcb");return nr()[m]=()=>{gapi.load?h():t(tr(r,"network-request-failed"))},Vy(`${XE()}?onload=${m}`).catch(_=>t(_))}}).catch(e=>{throw ju=null,e})}let ju=null;function aS(r){return ju=ju||lS(r),ju}/**
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
 */const uS=new ra(5e3,15e3),cS="__/auth/iframe",hS="emulator/auth/iframe",dS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pS(r){const e=r.config;pe(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?hf(e,hS):`https://${r.config.authDomain}/${cS}`,s={apiKey:e.apiKey,appName:r.name,v:cs},l=fS.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Io(s).slice(1)}`}async function mS(r){const e=await aS(r),t=nr().gapi;return pe(t,r,"internal-error"),e.open({where:document.body,url:pS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dS,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const h=tr(r,"network-request-failed"),m=nr().setTimeout(()=>{u(h)},uS.get());function _(){nr().clearTimeout(m),l(s)}s.ping(_).then(_,()=>{u(h)})}))}/**
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
 */const gS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_S=500,yS=600,vS="_blank",wS="http://localhost";class Jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ES(r,e,t,s=_S,l=yS){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const _=Object.assign(Object.assign({},gS),{width:s.toString(),height:l.toString(),top:u,left:h}),w=Vt().toLowerCase();t&&(m=Dy(w)?vS:t),Py(w)&&(e=e||wS,_.scrollbars="yes");const N=Object.entries(_).reduce((I,[H,z])=>`${I}${H}=${z},`,"");if(HE(w)&&m!=="_self")return xS(e||"",m),new Jg(null);const k=window.open(e||"",m,N);pe(k,r,"popup-blocked");try{k.focus()}catch{}return new Jg(k)}function xS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const SS="__/auth/handler",CS="emulator/auth/handler",IS=encodeURIComponent("fac");async function Zg(r,e,t,s,l,u){pe(r.config.authDomain,r,"auth-domain-config-required"),pe(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:cs,eventId:l};if(e instanceof By){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",Id(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[N,k]of Object.entries({}))h[N]=k}if(e instanceof ia){const N=e.getScopes().filter(k=>k!=="");N.length>0&&(h.scopes=N.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const N of Object.keys(m))m[N]===void 0&&delete m[N];const _=await r._getAppCheckToken(),w=_?`#${IS}=${encodeURIComponent(_)}`:"";return`${kS(r)}?${Io(m).slice(1)}${w}`}function kS({config:r}){return r.emulator?hf(r,CS):`https://${r.authDomain}/${SS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="webStorageSupport";class TS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yy,this._completeRedirectFn=Xx,this._overrideRedirectResult=Kx}async _openPopup(e,t,s,l){var u;Rr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Zg(e,t,s,Pd(),l);return ES(e,h,gf())}async _openRedirect(e,t,s,l){await this._originValidation(e);const u=await Zg(e,t,s,Pd(),l);return Ax(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:l,promise:u}=this.eventManagers[t];return l?Promise.resolve(l):(Rr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await mS(e),s=new Zx(e);return t.register("authEvent",l=>(pe(l?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fd,{type:fd},l=>{var u;const h=(u=l?.[0])===null||u===void 0?void 0:u[fd];h!==void 0&&t(!!h),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fy()||by()||ff()}}const NS=TS;var e_="@firebase/auth",t_="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PS(r){ns(new gi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const _={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uy(r)},w=new KE(s,l,u,_);return ix(w,t),w},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ns(new gi("auth-internal",e=>{const t=hs(e.getProvider("auth").getImmediate());return(s=>new RS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(e_,t_,AS(r)),er(e_,t_,"esm2017")}/**
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
 */const bS=5*60,DS=py("authIdTokenMaxAge")||bS;let n_=null;const OS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>DS)return;const l=t?.token;n_!==l&&(n_=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function LS(r=af()){const e=gc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=rx(r,{popupRedirectResolver:NS,persistence:[Ux,Tx,Yy]}),s=py("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=OS(u.toString());Cx(t,h,()=>h(t.currentUser)),Sx(t,m=>h(m))}}const l=hy("auth");return l&&sx(t,`http://${l}`),t}function MS(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}YE({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=tr("internal-error");u.customData=l,t(u)},s.type="text/javascript",s.charset="UTF-8",MS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PS("Browser");var jS="firebase",FS="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er(jS,FS,"app");var r_={};const i_="@firebase/database",s_="1.0.20";/**
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
 */let nv="";function US(r){nv=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),St(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Wl(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return rr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new VS(e)}}catch{}return new zS},Qi=rv("localStorage"),HS=rv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new mc("@firebase/database"),BS=function(){let r=1;return function(){return r++}}(),iv=function(r){const e=f1(r),t=new u1;t.update(e);const s=t.digest();return ef.encodeByteArray(s)},oa=function(...r){let e="";for(let t=0;t<r.length;t++){const s=r[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=oa.apply(null,s):typeof s=="object"?e+=St(s):e+=s,e+=" "}return e};let Ml=null,o_=!0;const WS=function(r,e){J(!0,"Can't turn on custom loggers persistently."),fo.logLevel=Fe.VERBOSE,Ml=fo.log.bind(fo)},Rt=function(...r){if(o_===!0&&(o_=!1,Ml===null&&HS.get("logging_enabled")===!0&&WS()),Ml){const e=oa.apply(null,r);Ml(e)}},la=function(r){return function(...e){Rt(r,...e)}},Ld=function(...r){const e="FIREBASE INTERNAL ERROR: "+oa(...r);fo.error(e)},Ar=function(...r){const e=`FIREBASE FATAL ERROR: ${oa(...r)}`;throw fo.error(e),new Error(e)},Jt=function(...r){const e="FIREBASE WARNING: "+oa(...r);fo.warn(e)},$S=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yf=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},GS=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},vo="[MIN_NAME]",is="[MAX_NAME]",ds=function(r,e){if(r===e)return 0;if(r===vo||e===is)return-1;if(e===vo||r===is)return 1;{const t=l_(r),s=l_(e);return t!==null?s!==null?t-s===0?r.length-e.length:t-s:-1:s!==null?1:r<e?-1:1}},qS=function(r,e){return r===e?0:r<e?-1:1},Tl=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+St(e))},vf=function(r){if(typeof r!="object"||r===null)return St(r);const e=[];for(const s in r)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=St(e[s]),t+=":",t+=vf(r[e[s]]);return t+="}",t},sv=function(r,e){const t=r.length;if(t<=e)return[r];const s=[];for(let l=0;l<t;l+=e)l+e>t?s.push(r.substring(l,t)):s.push(r.substring(l,l+e));return s};function Pt(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const ov=function(r){J(!yf(r),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let l,u,h,m,_;r===0?(u=0,h=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(m=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=m+s,h=Math.round(r*Math.pow(2,t-m)-Math.pow(2,t))):(u=0,h=Math.round(r/Math.pow(2,1-s-t))));const w=[];for(_=t;_;_-=1)w.push(h%2?1:0),h=Math.floor(h/2);for(_=e;_;_-=1)w.push(u%2?1:0),u=Math.floor(u/2);w.push(l?1:0),w.reverse();const N=w.join("");let k="";for(_=0;_<64;_+=8){let I=parseInt(N.substr(_,8),2).toString(16);I.length===1&&(I="0"+I),k=k+I}return k.toLowerCase()},KS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},YS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function QS(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+t);return s.code=r.toUpperCase(),s}const XS=new RegExp("^-?(0*)\\d{1,10}$"),JS=-2147483648,ZS=2147483647,l_=function(r){if(XS.test(r)){const e=Number(r);if(e>=JS&&e<=ZS)return e}return null},To=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Jt("Exception was thrown by user callback.",t),e},Math.floor(0))}},eC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},jl=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class tC{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,mn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Jt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Jt(e)}}class Fu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="5",lv="v",av="s",uv="r",cv="f",hv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dv="ls",fv="p",Md="ac",pv="websocket",mv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t,s,l,u=!1,h="",m=!1,_=!1,w=null){this.secure=t,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=h,this.includeNamespaceInQueryParams=m,this.isUsingEmulator=_,this.emulatorOptions=w,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function rC(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function _v(r,e,t){J(typeof e=="string","typeof type must == string"),J(typeof t=="object","typeof params must == object");let s;if(e===pv)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===mv)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rC(r)&&(t.ns=r.namespace);const l=[];return Pt(t,(u,h)=>{l.push(u+"="+h)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.counters_={}}incrementCounter(e,t=1){rr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ww(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd={},md={};function Ef(r){const e=r.toString();return pd[e]||(pd[e]=new iC),pd[e]}function sC(r,e){const t=r.toString();return md[t]||(md[t]=e()),md[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&To(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="start",lC="close",aC="pLPCommand",uC="pRTLPCB",yv="id",vv="pw",wv="ser",cC="cb",hC="seg",dC="ts",fC="d",pC="dframe",Ev=1870,xv=30,mC=Ev-xv,gC=25e3,_C=3e4;class lo{constructor(e,t,s,l,u,h,m){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=h,this.lastSessionId=m,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=la(e),this.stats_=Ef(t),this.urlFn=_=>(this.appCheckToken&&(_[Md]=this.appCheckToken),_v(t,mv,_))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new oC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_C)),GS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xf((...u)=>{const[h,m,_,w,N]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===a_)this.id=m,this.password=_;else if(h===lC)m?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(m,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...u)=>{const[h,m]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(h,m)},()=>{this.onClosed_()},this.urlFn);const s={};s[a_]="t",s[wv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[cC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[lv]=wf,this.transportSessionId&&(s[av]=this.transportSessionId),this.lastSessionId&&(s[dv]=this.lastSessionId),this.applicationId&&(s[fv]=this.applicationId),this.appCheckToken&&(s[Md]=this.appCheckToken),typeof location<"u"&&location.hostname&&hv.test(location.hostname)&&(s[uv]=cv);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){lo.forceAllow_=!0}static forceDisallow(){lo.forceDisallow_=!0}static isAvailable(){return lo.forceAllow_?!0:!lo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!KS()&&!YS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=St(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=uy(t),l=sv(s,mC);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[pC]="t",s[yv]=e,s[vv]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=St(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class xf{constructor(e,t,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=BS(),window[aC+this.uniqueCallbackIdentifier]=e,window[uC+this.uniqueCallbackIdentifier]=t,this.myIFrame=xf.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(m){Rt("frame writing exception"),m.stack&&Rt(m.stack),Rt(m)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Rt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yv]=this.myID,e[vv]=this.myPW,e[wv]=this.currentSerial;let t=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xv+s.length<=Ev;){const h=this.pendingSegs.shift();s=s+"&"+hC+l+"="+h.seg+"&"+dC+l+"="+h.ts+"&"+fC+l+"="+h.d,l++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},l=setTimeout(s,Math.floor(gC)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=16384,vC=45e3;let Qu=null;typeof MozWebSocket<"u"?Qu=MozWebSocket:typeof WebSocket<"u"&&(Qu=WebSocket);class Dn{constructor(e,t,s,l,u,h,m){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=la(this.connId),this.stats_=Ef(t),this.connURL=Dn.connectionURL_(t,h,m,l,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,l,u){const h={};return h[lv]=wf,typeof location<"u"&&location.hostname&&hv.test(location.hostname)&&(h[uv]=cv),t&&(h[av]=t),s&&(h[dv]=s),l&&(h[Md]=l),u&&(h[fv]=u),_v(e,pv,h)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qi.set("previous_websocket_failure",!0);try{let s;t1(),this.mySock=new Qu(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Qu!==null&&!Dn.forceDisallow_}static previouslyFailed(){return Qi.isInMemoryStorage||Qi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Wl(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=St(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=sv(t,yC);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vC))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dn.responsesRequiredToBeHealthy=2;Dn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{static get ALL_TRANSPORTS(){return[lo,Dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Dn&&Dn.isAvailable();let s=t&&!Dn.previouslyFailed();if(e.webSocketOnly&&(t||Jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Dn];else{const l=this.transports_=[];for(const u of Kl.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Kl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Kl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=6e4,EC=5e3,xC=10*1024,SC=100*1024,gd="t",u_="d",CC="s",c_="r",IC="e",h_="o",d_="a",f_="n",p_="p",kC="h";class TC{constructor(e,t,s,l,u,h,m,_,w,N){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=h,this.onReady_=m,this.onDisconnect_=_,this.onKill_=w,this.lastSessionId=N,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=la("c:"+this.id+":"),this.transportManager_=new Kl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=jl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>SC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>xC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gd in e){const t=e[gd];t===d_?this.upgradeIfSecondaryHealthy_():t===c_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===h_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Tl("t",e),s=Tl("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:p_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:d_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:f_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Tl("t",e),s=Tl("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Tl(gd,e);if(u_ in e){const s=e[u_];if(t===kC){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(t===f_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===CC?this.onConnectionShutdown_(s):t===c_?this.onReset_(s):t===IC?Ld("Server Error: "+s):t===h_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ld("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),wf!==s&&Jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),jl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):jl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(EC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:p_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{put(e,t,s,l){}merge(e,t,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const l=this.getInitialEvent(e);l&&t.apply(s,l)}off(e,t,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===t&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){J(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends Cv{static getInstance(){return new Xu}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=32,g_=768;class He{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ue(){return new He("")}function Ie(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function _i(r){return r.pieces_.length-r.pieceNum_}function Ye(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new He(r.pieces_,e)}function Sf(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function NC(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function Yl(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function Iv(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new He(e,0)}function it(r,e){const t=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)t.push(r.pieces_[s]);if(e instanceof He)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&t.push(s[l])}return new He(t,0)}function ke(r){return r.pieceNum_>=r.pieces_.length}function Qt(r,e){const t=Ie(r),s=Ie(e);if(t===null)return e;if(t===s)return Qt(Ye(r),Ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function RC(r,e){const t=Yl(r,0),s=Yl(e,0);for(let l=0;l<t.length&&l<s.length;l++){const u=ds(t[l],s[l]);if(u!==0)return u}return t.length===s.length?0:t.length<s.length?-1:1}function Cf(r,e){if(_i(r)!==_i(e))return!1;for(let t=r.pieceNum_,s=e.pieceNum_;t<=r.pieces_.length;t++,s++)if(r.pieces_[t]!==e.pieces_[s])return!1;return!0}function gn(r,e){let t=r.pieceNum_,s=e.pieceNum_;if(_i(r)>_i(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class AC{constructor(e,t){this.errorPrefix_=t,this.parts_=Yl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=pc(this.parts_[s]);kv(this)}}function PC(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=pc(e),kv(r)}function bC(r){const e=r.parts_.pop();r.byteLength_-=pc(e),r.parts_.length>0&&(r.byteLength_-=1)}function kv(r){if(r.byteLength_>g_)throw new Error(r.errorPrefix_+"has a key path longer than "+g_+" bytes ("+r.byteLength_+").");if(r.parts_.length>m_)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+m_+") or object contains a cycle "+Ki(r))}function Ki(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends Cv{static getInstance(){return new If}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=1e3,DC=60*5*1e3,__=30*1e3,OC=1.3,LC=3e4,MC="server_kill",y_=3;class Tr extends Sv{constructor(e,t,s,l,u,h,m,_){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=h,this.appCheckTokenProvider_=m,this.authOverride_=_,this.id=Tr.nextPersistentConnectionId_++,this.log_=la("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nl,this.maxReconnectDelay_=DC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");If.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const l=++this.requestNumber_,u={r:l,a:e,b:t};this.log_(St(u)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const t=new fc,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const m=h.d;h.s==="ok"?t.resolve(m):t.reject(m)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),t.promise}listen(e,t,s,l){this.initConnection_();const u=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+u),this.listens.has(h)||this.listens.set(h,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(h).has(u),"listen() called twice for same path/queryId.");const m={onComplete:l,hashFn:t,query:e,tag:s};this.listens.get(h).set(u,m),this.connected_&&this.sendListen_(m)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),l=t._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},h="q";e.tag&&(u.q=t._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(h,u,m=>{const _=m.d,w=m.s;Tr.warnOnListenWarnings_(_,t),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",m),w!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(w,_))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&rr(e,"w")){const s=_o(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+t._queryParams.getIndex().toString()+'"',u=t._path.toString();Jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||a1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=__)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=l1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,l=>{const u=l.s,h=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,t)}sendUnlisten_(e,t,s,l){this.log_("Unlisten on "+e+" for "+t);const u={p:e},h="n";l&&(u.q=s,u.t=l),this.sendRequest(h,u)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,l){const u={p:t,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,h=>{l&&setTimeout(()=>{l(h.s,h.d)},Math.floor(0))})}put(e,t,s,l){this.putInternal("p",e,t,s,l)}merge(e,t,s,l){this.putInternal("m",e,t,s,l)}putInternal(e,t,s,l,u){this.initConnection_();const h={p:t,d:s};u!==void 0&&(h.h=u),this.outstandingPuts_.push({action:e,request:h,onComplete:l}),this.outstandingPutCount_++;const m=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(m):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,u=>{this.log_(t+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+St(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ld("Unrecognized action received from server: "+St(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>LC&&(this.reconnectDelay_=Nl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*OC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Tr.nextConnectionId_++,u=this.lastSessionId;let h=!1,m=null;const _=function(){m?m.close():(h=!0,s())},w=function(k){J(m,"sendRequest call when we're not connected not allowed."),m.sendRequest(k)};this.realtime_={close:_,sendRequest:w};const N=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[k,I]=await Promise.all([this.authTokenProvider_.getToken(N),this.appCheckTokenProvider_.getToken(N)]);h?Rt("getToken() completed but was canceled"):(Rt("getToken() completed. Creating connection."),this.authToken_=k&&k.accessToken,this.appCheckToken_=I&&I.token,m=new TC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,H=>{Jt(H+" ("+this.repoInfo_.toString()+")"),this.interrupt(MC)},u))}catch(k){this.log_("Failed to get token: "+k),h||(this.repoInfo_.nodeAdmin&&Jt(k),_())}}}interrupt(e){Rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Id(this.interruptReasons_)&&(this.reconnectDelay_=Nl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(u=>vf(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,t){const s=new He(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(t),u.delete(t),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,t){Rt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=y_&&(this.reconnectDelay_=__,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Rt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=y_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+nv.replace(/\./g,"-")]=1,sf()?e["framework.cordova"]=1:gy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xu.getInstance().currentlyOnline();return Id(this.interruptReasons_)&&e}}Tr.nextPersistentConnectionId_=0;Tr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ec{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ce(vo,e),l=new Ce(vo,t);return this.compare(s,l)!==0}minPost(){return Ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru;class Tv extends Ec{static get __EMPTY_NODE(){return Ru}static set __EMPTY_NODE(e){Ru=e}compare(e,t){return ds(e.name,t.name)}isDefinedOn(e){throw Co("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ce.MIN}maxPost(){return new Ce(is,Ru)}makePost(e,t){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new Ce(e,Ru)}toString(){return".key"}}const po=new Tv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,t,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=t?s(e.key,t):1,l&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xt{constructor(e,t,s,l,u){this.key=e,this.value=t,this.color=s??xt.RED,this.left=l??Xt.EMPTY_NODE,this.right=u??Xt.EMPTY_NODE}copy(e,t,s,l,u){return new xt(e??this.key,t??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,t,s),null):u===0?l=l.copy(null,t,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,t,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,l;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Xt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xt.RED=!0;xt.BLACK=!1;class jC{copy(e,t,s,l,u){return this}insert(e,t,s){return new xt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xt{constructor(e,t=Xt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Xt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,xt.BLACK,null,null))}remove(e){return new Xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,l=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Au(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Au(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Au(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Au(this.root_,null,this.comparator_,!0,e)}}Xt.EMPTY_NODE=new jC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(r,e){return ds(r.name,e.name)}function kf(r,e){return ds(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jd;function UC(r){jd=r}const Nv=function(r){return typeof r=="number"?"number:"+ov(r):"string:"+r},Rv=function(r){if(r.isLeafNode()){const e=r.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rr(e,".sv"),"Priority must be a string or number.")}else J(r===jd||r.isEmpty(),"priority of unexpected type.");J(r===jd||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v_;class Et{static set __childrenNodeConstructor(e){v_=e}static get __childrenNodeConstructor(){return v_}constructor(e,t=Et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ke(e)?this:Ie(e)===".priority"?this.priorityNode_:Et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Ie(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(J(s!==".priority"||_i(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ye(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Nv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ov(this.value_):e+=this.value_,this.lazyHash_=iv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Et.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,l=Et.VALUE_TYPE_ORDER.indexOf(t),u=Et.VALUE_TYPE_ORDER.indexOf(s);return J(l>=0,"Unknown leaf type: "+t),J(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Av,Pv;function VC(r){Av=r}function zC(r){Pv=r}class HC extends Ec{compare(e,t){const s=e.node.getPriority(),l=t.node.getPriority(),u=s.compareTo(l);return u===0?ds(e.name,t.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ce.MIN}maxPost(){return new Ce(is,new Et("[PRIORITY-POST]",Pv))}makePost(e,t){const s=Av(e);return new Ce(t,new Et("[PRIORITY-POST]",s))}toString(){return".priority"}}const st=new HC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=Math.log(2);class WC{constructor(e){const t=u=>parseInt(Math.log(u)/BC,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ju=function(r,e,t,s){r.sort(e);const l=function(_,w){const N=w-_;let k,I;if(N===0)return null;if(N===1)return k=r[_],I=t?t(k):k,new xt(I,k.node,xt.BLACK,null,null);{const H=parseInt(N/2,10)+_,z=l(_,H),Y=l(H+1,w);return k=r[H],I=t?t(k):k,new xt(I,k.node,xt.BLACK,z,Y)}},u=function(_){let w=null,N=null,k=r.length;const I=function(z,Y){const $=k-z,_e=k;k-=z;const G=l($+1,_e),le=r[$],ce=t?t(le):le;H(new xt(ce,le.node,Y,null,G))},H=function(z){w?(w.left=z,w=z):(N=z,w=z)};for(let z=0;z<_.count;++z){const Y=_.nextBitIsOne(),$=Math.pow(2,_.count-(z+1));Y?I($,xt.BLACK):(I($,xt.BLACK),I($,xt.RED))}return N},h=new WC(r.length),m=u(h);return new Xt(s||e,m)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _d;const so={};class kr{static get Default(){return J(so&&st,"ChildrenNode.ts has not been loaded"),_d=_d||new kr({".priority":so},{".priority":st}),_d}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=_o(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Xt?t:null}hasIndex(e){return rr(this.indexSet_,e.toString())}addIndex(e,t){J(e!==po,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=t.getIterator(Ce.Wrap);let h=u.getNext();for(;h;)l=l||e.isDefinedOn(h.node),s.push(h),h=u.getNext();let m;l?m=Ju(s,e.getCompare()):m=so;const _=e.toString(),w=Object.assign({},this.indexSet_);w[_]=e;const N=Object.assign({},this.indexes_);return N[_]=m,new kr(N,w)}addToIndexes(e,t){const s=Hu(this.indexes_,(l,u)=>{const h=_o(this.indexSet_,u);if(J(h,"Missing index implementation for "+u),l===so)if(h.isDefinedOn(e.node)){const m=[],_=t.getIterator(Ce.Wrap);let w=_.getNext();for(;w;)w.name!==e.name&&m.push(w),w=_.getNext();return m.push(e),Ju(m,h.getCompare())}else return so;else{const m=t.get(e.name);let _=l;return m&&(_=_.remove(new Ce(e.name,m))),_.insert(e,e.node)}});return new kr(s,this.indexSet_)}removeFromIndexes(e,t){const s=Hu(this.indexes_,l=>{if(l===so)return l;{const u=t.get(e.name);return u?l.remove(new Ce(e.name,u)):l}});return new kr(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl;class me{static get EMPTY_NODE(){return Rl||(Rl=new me(new Xt(kf),null,kr.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Rv(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Rl}updatePriority(e){return this.children_.isEmpty()?this:new me(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Rl:t}}getChild(e){const t=Ie(e);return t===null?this:this.getImmediateChild(t).getChild(Ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(J(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ce(e,t);let l,u;t.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,t),u=this.indexMap_.addToIndexes(s,this.children_));const h=l.isEmpty()?Rl:this.priorityNode_;return new me(l,h,u)}}updateChild(e,t){const s=Ie(e);if(s===null)return t;{J(Ie(e)!==".priority"||_i(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ye(e),t);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,l=0,u=!0;if(this.forEachChild(st,(h,m)=>{t[h]=m.val(e),s++,u&&me.INTEGER_REGEXP_.test(h)?l=Math.max(l,Number(h)):u=!1}),!e&&u&&l<2*s){const h=[];for(const m in t)h[m]=t[m];return h}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Nv(this.getPriority().val())+":"),this.forEachChild(st,(t,s)=>{const l=s.hash();l!==""&&(e+=":"+t+":"+l)}),this.lazyHash_=e===""?"":iv(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new Ce(e,t));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ce(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ce(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>t(l.name,l.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,Ce.Wrap);let u=l.peek();for(;u!=null&&t.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,Ce.Wrap);let u=l.peek();for(;u!=null&&t.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===aa?-1:0}withIndex(e){if(e===po||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new me(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===po||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(st),l=t.getIterator(st);let u=s.getNext(),h=l.getNext();for(;u&&h;){if(u.name!==h.name||!u.node.equals(h.node))return!1;u=s.getNext(),h=l.getNext()}return u===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===po?null:this.indexMap_.get(e.toString())}}me.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $C extends me{constructor(){super(new Xt(kf),me.EMPTY_NODE,kr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return me.EMPTY_NODE}isEmpty(){return!1}}const aa=new $C;Object.defineProperties(Ce,{MIN:{value:new Ce(vo,me.EMPTY_NODE)},MAX:{value:new Ce(is,aa)}});Tv.__EMPTY_NODE=me.EMPTY_NODE;Et.__childrenNodeConstructor=me;UC(aa);zC(aa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=!0;function At(r,e=null){if(r===null)return me.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new Et(t,At(e))}if(!(r instanceof Array)&&GC){const t=[];let s=!1;if(Pt(r,(h,m)=>{if(h.substring(0,1)!=="."){const _=At(m);_.isEmpty()||(s=s||!_.getPriority().isEmpty(),t.push(new Ce(h,_)))}}),t.length===0)return me.EMPTY_NODE;const u=Ju(t,FC,h=>h.name,kf);if(s){const h=Ju(t,st.getCompare());return new me(u,At(e),new kr({".priority":h},{".priority":st}))}else return new me(u,At(e),kr.Default)}else{let t=me.EMPTY_NODE;return Pt(r,(s,l)=>{if(rr(r,s)&&s.substring(0,1)!=="."){const u=At(l);(u.isLeafNode()||!u.isEmpty())&&(t=t.updateImmediateChild(s,u))}}),t.updatePriority(At(e))}}VC(At);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC extends Ec{constructor(e){super(),this.indexPath_=e,J(!ke(e)&&Ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),l=this.extractChild(t.node),u=s.compareTo(l);return u===0?ds(e.name,t.name):u}makePost(e,t){const s=At(e),l=me.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ce(t,l)}maxPost(){const e=me.EMPTY_NODE.updateChild(this.indexPath_,aa);return new Ce(is,e)}toString(){return Yl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC extends Ec{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ds(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ce.MIN}maxPost(){return Ce.MAX}makePost(e,t){const s=At(e);return new Ce(t,s)}toString(){return".value"}}const YC=new KC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(r){return{type:"value",snapshotNode:r}}function wo(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Ql(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Xl(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function QC(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e){this.index_=e}updateChild(e,t,s,l,u,h){J(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const m=e.getImmediateChild(t);return m.getChild(l).equals(s.getChild(l))&&m.isEmpty()===s.isEmpty()||(h!=null&&(s.isEmpty()?e.hasChild(t)?h.trackChildChange(Ql(t,m)):J(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):m.isEmpty()?h.trackChildChange(wo(t,s)):h.trackChildChange(Xl(t,s,m))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(st,(l,u)=>{t.hasChild(l)||s.trackChildChange(Ql(l,u))}),t.isLeafNode()||t.forEachChild(st,(l,u)=>{if(e.hasChild(l)){const h=e.getImmediateChild(l);h.equals(u)||s.trackChildChange(Xl(l,u,h))}else s.trackChildChange(wo(l,u))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?me.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this.indexedFilter_=new Tf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Jl.getStartPost_(e),this.endPost_=Jl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,l,u,h){return this.matches(new Ce(t,s))||(s=me.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,l,u,h)}updateFullNode(e,t,s){t.isLeafNode()&&(t=me.EMPTY_NODE);let l=t.withIndex(this.index_);l=l.updatePriority(me.EMPTY_NODE);const u=this;return t.forEachChild(st,(h,m)=>{u.matches(new Ce(h,m))||(l=l.updateImmediateChild(h,me.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Jl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,l,u,h){return this.rangedFilter_.matches(new Ce(t,s))||(s=me.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,l,u,h):this.fullLimitUpdateChild_(e,t,s,u,h)}updateFullNode(e,t,s){let l;if(t.isLeafNode()||t.isEmpty())l=me.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){l=me.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;u.hasNext()&&h<this.limit_;){const m=u.getNext();if(this.withinDirectionalStart(m))if(this.withinDirectionalEnd(m))l=l.updateImmediateChild(m.name,m.node),h++;else break;else continue}}else{l=t.withIndex(this.index_),l=l.updatePriority(me.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let h=0;for(;u.hasNext();){const m=u.getNext();h<this.limit_&&this.withinDirectionalStart(m)&&this.withinDirectionalEnd(m)?h++:l=l.updateImmediateChild(m.name,me.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,l,u){let h;if(this.reverse_){const k=this.index_.getCompare();h=(I,H)=>k(H,I)}else h=this.index_.getCompare();const m=e;J(m.numChildren()===this.limit_,"");const _=new Ce(t,s),w=this.reverse_?m.getFirstChild(this.index_):m.getLastChild(this.index_),N=this.rangedFilter_.matches(_);if(m.hasChild(t)){const k=m.getImmediateChild(t);let I=l.getChildAfterChild(this.index_,w,this.reverse_);for(;I!=null&&(I.name===t||m.hasChild(I.name));)I=l.getChildAfterChild(this.index_,I,this.reverse_);const H=I==null?1:h(I,_);if(N&&!s.isEmpty()&&H>=0)return u?.trackChildChange(Xl(t,s,k)),m.updateImmediateChild(t,s);{u?.trackChildChange(Ql(t,k));const Y=m.updateImmediateChild(t,me.EMPTY_NODE);return I!=null&&this.rangedFilter_.matches(I)?(u?.trackChildChange(wo(I.name,I.node)),Y.updateImmediateChild(I.name,I.node)):Y}}else return s.isEmpty()?e:N&&h(w,_)>=0?(u!=null&&(u.trackChildChange(Ql(w.name,w.node)),u.trackChildChange(wo(t,s))),m.updateImmediateChild(t,s).updateImmediateChild(w.name,me.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=st}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vo}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:is}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===st}copy(){const e=new Nf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function JC(r){return r.loadsAllData()?new Tf(r.getIndex()):r.hasLimit()?new XC(r):new Jl(r)}function w_(r){const e={};if(r.isDefault())return e;let t;if(r.index_===st?t="$priority":r.index_===YC?t="$value":r.index_===po?t="$key":(J(r.index_ instanceof qC,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=St(t),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=St(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+St(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=St(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+St(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function E_(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==st&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends Sv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=la("p:rest:"),this.listens_={}}listen(e,t,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const h=Zu.getListenId_(e,s),m={};this.listens_[h]=m;const _=w_(e._queryParams);this.restRequest_(u+".json",_,(w,N)=>{let k=N;if(w===404&&(k=null,w=null),w===null&&this.onDataUpdate_(u,k,!1,s),_o(this.listens_,h)===m){let I;w?w===401?I="permission_denied":I="rest_error:"+w:I="ok",l(I,null)}})}unlisten(e,t){const s=Zu.getListenId_(e,t);delete this.listens_[s]}get(e){const t=w_(e._queryParams),s=e._path.toString(),l=new fc;return this.restRequest_(s+".json",t,(u,h)=>{let m=h;u===404&&(m=null,u=null),u===null?(this.onDataUpdate_(s,m,!1,null),l.resolve(m)):l.reject(new Error(m))}),l.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(t.auth=l.accessToken),u&&u.token&&(t.ac=u.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Io(t);this.log_("Sending REST request for "+h);const m=new XMLHttpRequest;m.onreadystatechange=()=>{if(s&&m.readyState===4){this.log_("REST Response for "+h+" received. status:",m.status,"response:",m.responseText);let _=null;if(m.status>=200&&m.status<300){try{_=Wl(m.responseText)}catch{Jt("Failed to parse JSON response for "+h+": "+m.responseText)}s(null,_)}else m.status!==401&&m.status!==404&&Jt("Got unsuccessful REST response for "+h+" Status: "+m.status),s(m.status);s=null}},m.open("GET",h,!0),m.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.rootNode_=me.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(){return{value:null,children:new Map}}function Dv(r,e,t){if(ke(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const s=Ie(e);r.children.has(s)||r.children.set(s,ec());const l=r.children.get(s);e=Ye(e),Dv(l,e,t)}}function Fd(r,e,t){r.value!==null?t(e,r.value):eI(r,(s,l)=>{const u=new He(e.toString()+"/"+s);Fd(l,u,t)})}function eI(r,e){r.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Pt(this.last_,(s,l)=>{t[s]=t[s]-l}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=10*1e3,nI=30*1e3,rI=5*60*1e3;class iI{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new tI(e);const s=x_+(nI-x_)*Math.random();jl(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Pt(e,(l,u)=>{u>0&&rr(this.statsToReport_,l)&&(t[l]=u,s=!0)}),s&&this.server_.reportStats(t),jl(this.reportStats_.bind(this),Math.floor(Math.random()*2*rI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ln;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ln||(Ln={}));function Rf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Af(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pf(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ln.ACK_USER_WRITE,this.source=Rf()}operationForChild(e){if(ke(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new He(e));return new tc(Ue(),t,this.revert)}}else return J(Ie(this.path)===e,"operationForChild called for unrelated child."),new tc(Ye(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t){this.source=e,this.path=t,this.type=Ln.LISTEN_COMPLETE}operationForChild(e){return ke(this.path)?new Zl(this.source,Ue()):new Zl(this.source,Ye(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ln.OVERWRITE}operationForChild(e){return ke(this.path)?new ss(this.source,Ue(),this.snap.getImmediateChild(e)):new ss(this.source,Ye(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ln.MERGE}operationForChild(e){if(ke(this.path)){const t=this.children.subtree(new He(e));return t.isEmpty()?null:t.value?new ss(this.source,Ue(),t.value):new Eo(this.source,Ue(),t)}else return J(Ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Eo(this.source,Ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ke(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ie(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function oI(r,e,t,s){const l=[],u=[];return e.forEach(h=>{h.type==="child_changed"&&r.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&u.push(QC(h.childName,h.snapshotNode))}),Al(r,l,"child_removed",e,s,t),Al(r,l,"child_added",e,s,t),Al(r,l,"child_moved",u,s,t),Al(r,l,"child_changed",e,s,t),Al(r,l,"value",e,s,t),l}function Al(r,e,t,s,l,u){const h=s.filter(m=>m.type===t);h.sort((m,_)=>aI(r,m,_)),h.forEach(m=>{const _=lI(r,m,u);l.forEach(w=>{w.respondsTo(m.type)&&e.push(w.createEvent(_,r.query_))})})}function lI(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function aI(r,e,t){if(e.childName==null||t.childName==null)throw Co("Should only compare child_ events.");const s=new Ce(e.childName,e.snapshotNode),l=new Ce(t.childName,t.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(r,e){return{eventCache:r,serverCache:e}}function Fl(r,e,t,s){return xc(new os(e,t,s),r.serverCache)}function Ov(r,e,t,s){return xc(r.eventCache,new os(e,t,s))}function Ud(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function ls(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yd;const uI=()=>(yd||(yd=new Xt(qS)),yd);class qe{static fromObject(e){let t=new qe(null);return Pt(e,(s,l)=>{t=t.set(new He(s),l)}),t}constructor(e,t=uI()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ue(),value:this.value};if(ke(e))return null;{const s=Ie(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Ye(e),t);return u!=null?{path:it(new He(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ke(e))return this;{const t=Ie(e),s=this.children.get(t);return s!==null?s.subtree(Ye(e)):new qe(null)}}set(e,t){if(ke(e))return new qe(t,this.children);{const s=Ie(e),u=(this.children.get(s)||new qe(null)).set(Ye(e),t),h=this.children.insert(s,u);return new qe(this.value,h)}}remove(e){if(ke(e))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const t=Ie(e),s=this.children.get(t);if(s){const l=s.remove(Ye(e));let u;return l.isEmpty()?u=this.children.remove(t):u=this.children.insert(t,l),this.value===null&&u.isEmpty()?new qe(null):new qe(this.value,u)}else return this}}get(e){if(ke(e))return this.value;{const t=Ie(e),s=this.children.get(t);return s?s.get(Ye(e)):null}}setTree(e,t){if(ke(e))return t;{const s=Ie(e),u=(this.children.get(s)||new qe(null)).setTree(Ye(e),t);let h;return u.isEmpty()?h=this.children.remove(s):h=this.children.insert(s,u),new qe(this.value,h)}}fold(e){return this.fold_(Ue(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(it(e,l),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ue(),t)}findOnPath_(e,t,s){const l=this.value?s(t,this.value):!1;if(l)return l;if(ke(e))return null;{const u=Ie(e),h=this.children.get(u);return h?h.findOnPath_(Ye(e),it(t,u),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ue(),t)}foreachOnPath_(e,t,s){if(ke(e))return this;{this.value&&s(t,this.value);const l=Ie(e),u=this.children.get(l);return u?u.foreachOnPath_(Ye(e),it(t,l),s):new qe(null)}}foreach(e){this.foreach_(Ue(),e)}foreach_(e,t){this.children.inorderTraversal((s,l)=>{l.foreach_(it(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.writeTree_=e}static empty(){return new jn(new qe(null))}}function Ul(r,e,t){if(ke(e))return new jn(new qe(t));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const h=Qt(l,e);return u=u.updateChild(h,t),new jn(r.writeTree_.set(l,u))}else{const l=new qe(t),u=r.writeTree_.setTree(e,l);return new jn(u)}}}function Vd(r,e,t){let s=r;return Pt(t,(l,u)=>{s=Ul(s,it(e,l),u)}),s}function S_(r,e){if(ke(e))return jn.empty();{const t=r.writeTree_.setTree(e,new qe(null));return new jn(t)}}function zd(r,e){return fs(r,e)!=null}function fs(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(Qt(t.path,e)):null}function C_(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(st,(s,l)=>{e.push(new Ce(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new Ce(s,l.value))}),e}function pi(r,e){if(ke(e))return r;{const t=fs(r,e);return t!=null?new jn(new qe(t)):new jn(r.writeTree_.subtree(e))}}function Hd(r){return r.writeTree_.isEmpty()}function xo(r,e){return Lv(Ue(),r.writeTree_,e)}function Lv(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(J(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):t=Lv(it(r,l),u,t)}),!t.getChild(r).isEmpty()&&s!==null&&(t=t.updateChild(it(r,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(r,e){return Uv(e,r)}function cI(r,e,t,s,l){J(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:t,writeId:s,visible:l}),l&&(r.visibleWrites=Ul(r.visibleWrites,e,t)),r.lastWriteId=s}function hI(r,e,t,s){J(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:t,writeId:s,visible:!0}),r.visibleWrites=Vd(r.visibleWrites,e,t),r.lastWriteId=s}function dI(r,e){for(let t=0;t<r.allWrites.length;t++){const s=r.allWrites[t];if(s.writeId===e)return s}return null}function fI(r,e){const t=r.allWrites.findIndex(m=>m.writeId===e);J(t>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[t];r.allWrites.splice(t,1);let l=s.visible,u=!1,h=r.allWrites.length-1;for(;l&&h>=0;){const m=r.allWrites[h];m.visible&&(h>=t&&pI(m,s.path)?l=!1:gn(s.path,m.path)&&(u=!0)),h--}if(l){if(u)return mI(r),!0;if(s.snap)r.visibleWrites=S_(r.visibleWrites,s.path);else{const m=s.children;Pt(m,_=>{r.visibleWrites=S_(r.visibleWrites,it(s.path,_))})}return!0}else return!1}function pI(r,e){if(r.snap)return gn(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&gn(it(r.path,t),e))return!0;return!1}function mI(r){r.visibleWrites=Mv(r.allWrites,gI,Ue()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function gI(r){return r.visible}function Mv(r,e,t){let s=jn.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const h=u.path;let m;if(u.snap)gn(t,h)?(m=Qt(t,h),s=Ul(s,m,u.snap)):gn(h,t)&&(m=Qt(h,t),s=Ul(s,Ue(),u.snap.getChild(m)));else if(u.children){if(gn(t,h))m=Qt(t,h),s=Vd(s,m,u.children);else if(gn(h,t))if(m=Qt(h,t),ke(m))s=Vd(s,Ue(),u.children);else{const _=_o(u.children,Ie(m));if(_){const w=_.getChild(Ye(m));s=Ul(s,Ue(),w)}}}else throw Co("WriteRecord should have .snap or .children")}}return s}function jv(r,e,t,s,l){if(!s&&!l){const u=fs(r.visibleWrites,e);if(u!=null)return u;{const h=pi(r.visibleWrites,e);if(Hd(h))return t;if(t==null&&!zd(h,Ue()))return null;{const m=t||me.EMPTY_NODE;return xo(h,m)}}}else{const u=pi(r.visibleWrites,e);if(!l&&Hd(u))return t;if(!l&&t==null&&!zd(u,Ue()))return null;{const h=function(w){return(w.visible||l)&&(!s||!~s.indexOf(w.writeId))&&(gn(w.path,e)||gn(e,w.path))},m=Mv(r.allWrites,h,e),_=t||me.EMPTY_NODE;return xo(m,_)}}}function _I(r,e,t){let s=me.EMPTY_NODE;const l=fs(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(st,(u,h)=>{s=s.updateImmediateChild(u,h)}),s;if(t){const u=pi(r.visibleWrites,e);return t.forEachChild(st,(h,m)=>{const _=xo(pi(u,new He(h)),m);s=s.updateImmediateChild(h,_)}),C_(u).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}else{const u=pi(r.visibleWrites,e);return C_(u).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}}function yI(r,e,t,s,l){J(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=it(e,t);if(zd(r.visibleWrites,u))return null;{const h=pi(r.visibleWrites,u);return Hd(h)?l.getChild(t):xo(h,l.getChild(t))}}function vI(r,e,t,s){const l=it(e,t),u=fs(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(t)){const h=pi(r.visibleWrites,l);return xo(h,s.getNode().getImmediateChild(t))}else return null}function wI(r,e){return fs(r.visibleWrites,e)}function EI(r,e,t,s,l,u,h){let m;const _=pi(r.visibleWrites,e),w=fs(_,Ue());if(w!=null)m=w;else if(t!=null)m=xo(_,t);else return[];if(m=m.withIndex(h),!m.isEmpty()&&!m.isLeafNode()){const N=[],k=h.getCompare(),I=u?m.getReverseIteratorFrom(s,h):m.getIteratorFrom(s,h);let H=I.getNext();for(;H&&N.length<l;)k(H,s)!==0&&N.push(H),H=I.getNext();return N}else return[]}function xI(){return{visibleWrites:jn.empty(),allWrites:[],lastWriteId:-1}}function nc(r,e,t,s){return jv(r.writeTree,r.treePath,e,t,s)}function Df(r,e){return _I(r.writeTree,r.treePath,e)}function I_(r,e,t,s){return yI(r.writeTree,r.treePath,e,t,s)}function rc(r,e){return wI(r.writeTree,it(r.treePath,e))}function SI(r,e,t,s,l,u){return EI(r.writeTree,r.treePath,e,t,s,l,u)}function Of(r,e,t){return vI(r.writeTree,r.treePath,e,t)}function Fv(r,e){return Uv(it(r.treePath,e),r.writeTree)}function Uv(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;J(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),J(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(t==="child_added"&&u==="child_removed")this.changeMap.set(s,Xl(s,e.snapshotNode,l.snapshotNode));else if(t==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&u==="child_changed")this.changeMap.set(s,Ql(s,l.oldSnap));else if(t==="child_changed"&&u==="child_added")this.changeMap.set(s,wo(s,e.snapshotNode));else if(t==="child_changed"&&u==="child_changed")this.changeMap.set(s,Xl(s,e.snapshotNode,l.oldSnap));else throw Co("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Vv=new II;class Lf{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new os(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Of(this.writes_,e,s)}}getChildAfterChild(e,t,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ls(this.viewCache_),u=SI(this.writes_,l,t,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(r){return{filter:r}}function TI(r,e){J(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function NI(r,e,t,s,l){const u=new CI;let h,m;if(t.type===Ln.OVERWRITE){const w=t;w.source.fromUser?h=Bd(r,e,w.path,w.snap,s,l,u):(J(w.source.fromServer,"Unknown source."),m=w.source.tagged||e.serverCache.isFiltered()&&!ke(w.path),h=ic(r,e,w.path,w.snap,s,l,m,u))}else if(t.type===Ln.MERGE){const w=t;w.source.fromUser?h=AI(r,e,w.path,w.children,s,l,u):(J(w.source.fromServer,"Unknown source."),m=w.source.tagged||e.serverCache.isFiltered(),h=Wd(r,e,w.path,w.children,s,l,m,u))}else if(t.type===Ln.ACK_USER_WRITE){const w=t;w.revert?h=DI(r,e,w.path,s,l,u):h=PI(r,e,w.path,w.affectedTree,s,l,u)}else if(t.type===Ln.LISTEN_COMPLETE)h=bI(r,e,t.path,s,u);else throw Co("Unknown operation type: "+t.type);const _=u.getChanges();return RI(e,h,_),{viewCache:h,changes:_}}function RI(r,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Ud(r);(t.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&t.push(bv(Ud(e)))}}function zv(r,e,t,s,l,u){const h=e.eventCache;if(rc(s,t)!=null)return e;{let m,_;if(ke(t))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const w=ls(e),N=w instanceof me?w:me.EMPTY_NODE,k=Df(s,N);m=r.filter.updateFullNode(e.eventCache.getNode(),k,u)}else{const w=nc(s,ls(e));m=r.filter.updateFullNode(e.eventCache.getNode(),w,u)}else{const w=Ie(t);if(w===".priority"){J(_i(t)===1,"Can't have a priority with additional path components");const N=h.getNode();_=e.serverCache.getNode();const k=I_(s,t,N,_);k!=null?m=r.filter.updatePriority(N,k):m=h.getNode()}else{const N=Ye(t);let k;if(h.isCompleteForChild(w)){_=e.serverCache.getNode();const I=I_(s,t,h.getNode(),_);I!=null?k=h.getNode().getImmediateChild(w).updateChild(N,I):k=h.getNode().getImmediateChild(w)}else k=Of(s,w,e.serverCache);k!=null?m=r.filter.updateChild(h.getNode(),w,k,N,l,u):m=h.getNode()}}return Fl(e,m,h.isFullyInitialized()||ke(t),r.filter.filtersNodes())}}function ic(r,e,t,s,l,u,h,m){const _=e.serverCache;let w;const N=h?r.filter:r.filter.getIndexedFilter();if(ke(t))w=N.updateFullNode(_.getNode(),s,null);else if(N.filtersNodes()&&!_.isFiltered()){const H=_.getNode().updateChild(t,s);w=N.updateFullNode(_.getNode(),H,null)}else{const H=Ie(t);if(!_.isCompleteForPath(t)&&_i(t)>1)return e;const z=Ye(t),$=_.getNode().getImmediateChild(H).updateChild(z,s);H===".priority"?w=N.updatePriority(_.getNode(),$):w=N.updateChild(_.getNode(),H,$,z,Vv,null)}const k=Ov(e,w,_.isFullyInitialized()||ke(t),N.filtersNodes()),I=new Lf(l,k,u);return zv(r,k,t,l,I,m)}function Bd(r,e,t,s,l,u,h){const m=e.eventCache;let _,w;const N=new Lf(l,e,u);if(ke(t))w=r.filter.updateFullNode(e.eventCache.getNode(),s,h),_=Fl(e,w,!0,r.filter.filtersNodes());else{const k=Ie(t);if(k===".priority")w=r.filter.updatePriority(e.eventCache.getNode(),s),_=Fl(e,w,m.isFullyInitialized(),m.isFiltered());else{const I=Ye(t),H=m.getNode().getImmediateChild(k);let z;if(ke(I))z=s;else{const Y=N.getCompleteChild(k);Y!=null?Sf(I)===".priority"&&Y.getChild(Iv(I)).isEmpty()?z=Y:z=Y.updateChild(I,s):z=me.EMPTY_NODE}if(H.equals(z))_=e;else{const Y=r.filter.updateChild(m.getNode(),k,z,I,N,h);_=Fl(e,Y,m.isFullyInitialized(),r.filter.filtersNodes())}}}return _}function k_(r,e){return r.eventCache.isCompleteForChild(e)}function AI(r,e,t,s,l,u,h){let m=e;return s.foreach((_,w)=>{const N=it(t,_);k_(e,Ie(N))&&(m=Bd(r,m,N,w,l,u,h))}),s.foreach((_,w)=>{const N=it(t,_);k_(e,Ie(N))||(m=Bd(r,m,N,w,l,u,h))}),m}function T_(r,e,t){return t.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Wd(r,e,t,s,l,u,h,m){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let _=e,w;ke(t)?w=s:w=new qe(null).setTree(t,s);const N=e.serverCache.getNode();return w.children.inorderTraversal((k,I)=>{if(N.hasChild(k)){const H=e.serverCache.getNode().getImmediateChild(k),z=T_(r,H,I);_=ic(r,_,new He(k),z,l,u,h,m)}}),w.children.inorderTraversal((k,I)=>{const H=!e.serverCache.isCompleteForChild(k)&&I.value===null;if(!N.hasChild(k)&&!H){const z=e.serverCache.getNode().getImmediateChild(k),Y=T_(r,z,I);_=ic(r,_,new He(k),Y,l,u,h,m)}}),_}function PI(r,e,t,s,l,u,h){if(rc(l,t)!=null)return e;const m=e.serverCache.isFiltered(),_=e.serverCache;if(s.value!=null){if(ke(t)&&_.isFullyInitialized()||_.isCompleteForPath(t))return ic(r,e,t,_.getNode().getChild(t),l,u,m,h);if(ke(t)){let w=new qe(null);return _.getNode().forEachChild(po,(N,k)=>{w=w.set(new He(N),k)}),Wd(r,e,t,w,l,u,m,h)}else return e}else{let w=new qe(null);return s.foreach((N,k)=>{const I=it(t,N);_.isCompleteForPath(I)&&(w=w.set(N,_.getNode().getChild(I)))}),Wd(r,e,t,w,l,u,m,h)}}function bI(r,e,t,s,l){const u=e.serverCache,h=Ov(e,u.getNode(),u.isFullyInitialized()||ke(t),u.isFiltered());return zv(r,h,t,s,Vv,l)}function DI(r,e,t,s,l,u){let h;if(rc(s,t)!=null)return e;{const m=new Lf(s,e,l),_=e.eventCache.getNode();let w;if(ke(t)||Ie(t)===".priority"){let N;if(e.serverCache.isFullyInitialized())N=nc(s,ls(e));else{const k=e.serverCache.getNode();J(k instanceof me,"serverChildren would be complete if leaf node"),N=Df(s,k)}N=N,w=r.filter.updateFullNode(_,N,u)}else{const N=Ie(t);let k=Of(s,N,e.serverCache);k==null&&e.serverCache.isCompleteForChild(N)&&(k=_.getImmediateChild(N)),k!=null?w=r.filter.updateChild(_,N,k,Ye(t),m,u):e.eventCache.getNode().hasChild(N)?w=r.filter.updateChild(_,N,me.EMPTY_NODE,Ye(t),m,u):w=_,w.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=nc(s,ls(e)),h.isLeafNode()&&(w=r.filter.updateFullNode(w,h,u)))}return h=e.serverCache.isFullyInitialized()||rc(s,Ue())!=null,Fl(e,w,h,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Tf(s.getIndex()),u=JC(s);this.processor_=kI(u);const h=t.serverCache,m=t.eventCache,_=l.updateFullNode(me.EMPTY_NODE,h.getNode(),null),w=u.updateFullNode(me.EMPTY_NODE,m.getNode(),null),N=new os(_,h.isFullyInitialized(),l.filtersNodes()),k=new os(w,m.isFullyInitialized(),u.filtersNodes());this.viewCache_=xc(k,N),this.eventGenerator_=new sI(this.query_)}get query(){return this.query_}}function LI(r){return r.viewCache_.serverCache.getNode()}function MI(r,e){const t=ls(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!ke(e)&&!t.getImmediateChild(Ie(e)).isEmpty())?t.getChild(e):null}function N_(r){return r.eventRegistrations_.length===0}function jI(r,e){r.eventRegistrations_.push(e)}function R_(r,e,t){const s=[];if(t){J(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const h=u.createCancelEvent(t,l);h&&s.push(h)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const h=r.eventRegistrations_[u];if(!h.matches(e))l.push(h);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function A_(r,e,t,s){e.type===Ln.MERGE&&e.source.queryId!==null&&(J(ls(r.viewCache_),"We should always have a full cache before handling merges"),J(Ud(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=NI(r.processor_,l,e,t,s);return TI(r.processor_,u.viewCache),J(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,Hv(r,u.changes,u.viewCache.eventCache.getNode(),null)}function FI(r,e){const t=r.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(st,(u,h)=>{s.push(wo(u,h))}),t.isFullyInitialized()&&s.push(bv(t.getNode())),Hv(r,s,t.getNode(),e)}function Hv(r,e,t,s){const l=s?[s]:r.eventRegistrations_;return oI(r.eventGenerator_,e,t,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;class UI{constructor(){this.views=new Map}}function VI(r){J(!sc,"__referenceConstructor has already been defined"),sc=r}function zI(){return J(sc,"Reference.ts has not been loaded"),sc}function HI(r){return r.views.size===0}function Mf(r,e,t,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return J(u!=null,"SyncTree gave us an op for an invalid query."),A_(u,e,t,s)}else{let u=[];for(const h of r.views.values())u=u.concat(A_(h,e,t,s));return u}}function BI(r,e,t,s,l){const u=e._queryIdentifier,h=r.views.get(u);if(!h){let m=nc(t,l?s:null),_=!1;m?_=!0:s instanceof me?(m=Df(t,s),_=!1):(m=me.EMPTY_NODE,_=!1);const w=xc(new os(m,_,!1),new os(s,l,!1));return new OI(e,w)}return h}function WI(r,e,t,s,l,u){const h=BI(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,h),jI(h,t),FI(h,t)}function $I(r,e,t,s){const l=e._queryIdentifier,u=[];let h=[];const m=yi(r);if(l==="default")for(const[_,w]of r.views.entries())h=h.concat(R_(w,t,s)),N_(w)&&(r.views.delete(_),w.query._queryParams.loadsAllData()||u.push(w.query));else{const _=r.views.get(l);_&&(h=h.concat(R_(_,t,s)),N_(_)&&(r.views.delete(l),_.query._queryParams.loadsAllData()||u.push(_.query)))}return m&&!yi(r)&&u.push(new(zI())(e._repo,e._path)),{removed:u,events:h}}function Bv(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function mo(r,e){let t=null;for(const s of r.views.values())t=t||MI(s,e);return t}function Wv(r,e){if(e._queryParams.loadsAllData())return Sc(r);{const s=e._queryIdentifier;return r.views.get(s)}}function $v(r,e){return Wv(r,e)!=null}function yi(r){return Sc(r)!=null}function Sc(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc;function GI(r){J(!oc,"__referenceConstructor has already been defined"),oc=r}function qI(){return J(oc,"Reference.ts has not been loaded"),oc}let KI=1;class P_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qe(null),this.pendingWriteTree_=xI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function YI(r,e,t,s,l){return cI(r.pendingWriteTree_,e,t,s,l),l?No(r,new ss(Rf(),e,t)):[]}function QI(r,e,t,s){hI(r.pendingWriteTree_,e,t,s);const l=qe.fromObject(t);return No(r,new Eo(Rf(),e,l))}function Xi(r,e,t=!1){const s=dI(r.pendingWriteTree_,e);if(fI(r.pendingWriteTree_,e)){let u=new qe(null);return s.snap!=null?u=u.set(Ue(),!0):Pt(s.children,h=>{u=u.set(new He(h),!0)}),No(r,new tc(s.path,u,t))}else return[]}function Cc(r,e,t){return No(r,new ss(Af(),e,t))}function XI(r,e,t){const s=qe.fromObject(t);return No(r,new Eo(Af(),e,s))}function JI(r,e){return No(r,new Zl(Af(),e))}function ZI(r,e,t){const s=jf(r,t);if(s){const l=Ff(s),u=l.path,h=l.queryId,m=Qt(u,e),_=new Zl(Pf(h),m);return Uf(r,u,_)}else return[]}function $d(r,e,t,s,l=!1){const u=e._path,h=r.syncPointTree_.get(u);let m=[];if(h&&(e._queryIdentifier==="default"||$v(h,e))){const _=$I(h,e,t,s);HI(h)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const w=_.removed;if(m=_.events,!l){const N=w.findIndex(I=>I._queryParams.loadsAllData())!==-1,k=r.syncPointTree_.findOnPath(u,(I,H)=>yi(H));if(N&&!k){const I=r.syncPointTree_.subtree(u);if(!I.isEmpty()){const H=nk(I);for(let z=0;z<H.length;++z){const Y=H[z],$=Y.query,_e=Yv(r,Y);r.listenProvider_.startListening(Vl($),lc(r,$),_e.hashFn,_e.onComplete)}}}!k&&w.length>0&&!s&&(N?r.listenProvider_.stopListening(Vl(e),null):w.forEach(I=>{const H=r.queryToTagMap.get(Ic(I));r.listenProvider_.stopListening(Vl(I),H)}))}rk(r,w)}return m}function ek(r,e,t,s){const l=jf(r,s);if(l!=null){const u=Ff(l),h=u.path,m=u.queryId,_=Qt(h,e),w=new ss(Pf(m),_,t);return Uf(r,h,w)}else return[]}function tk(r,e,t,s){const l=jf(r,s);if(l){const u=Ff(l),h=u.path,m=u.queryId,_=Qt(h,e),w=qe.fromObject(t),N=new Eo(Pf(m),_,w);return Uf(r,h,N)}else return[]}function b_(r,e,t,s=!1){const l=e._path;let u=null,h=!1;r.syncPointTree_.foreachOnPath(l,(I,H)=>{const z=Qt(I,l);u=u||mo(H,z),h=h||yi(H)});let m=r.syncPointTree_.get(l);m?(h=h||yi(m),u=u||mo(m,Ue())):(m=new UI,r.syncPointTree_=r.syncPointTree_.set(l,m));let _;u!=null?_=!0:(_=!1,u=me.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((H,z)=>{const Y=mo(z,Ue());Y&&(u=u.updateImmediateChild(H,Y))}));const w=$v(m,e);if(!w&&!e._queryParams.loadsAllData()){const I=Ic(e);J(!r.queryToTagMap.has(I),"View does not exist, but we have a tag");const H=ik();r.queryToTagMap.set(I,H),r.tagToQueryMap.set(H,I)}const N=bf(r.pendingWriteTree_,l);let k=WI(m,e,t,N,u,_);if(!w&&!h&&!s){const I=Wv(m,e);k=k.concat(sk(r,e,I))}return k}function Gv(r,e,t){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(h,m)=>{const _=Qt(h,e),w=mo(m,_);if(w)return w});return jv(l,e,u,t,!0)}function No(r,e){return qv(e,r.syncPointTree_,null,bf(r.pendingWriteTree_,Ue()))}function qv(r,e,t,s){if(ke(r.path))return Kv(r,e,t,s);{const l=e.get(Ue());t==null&&l!=null&&(t=mo(l,Ue()));let u=[];const h=Ie(r.path),m=r.operationForChild(h),_=e.children.get(h);if(_&&m){const w=t?t.getImmediateChild(h):null,N=Fv(s,h);u=u.concat(qv(m,_,w,N))}return l&&(u=u.concat(Mf(l,r,s,t))),u}}function Kv(r,e,t,s){const l=e.get(Ue());t==null&&l!=null&&(t=mo(l,Ue()));let u=[];return e.children.inorderTraversal((h,m)=>{const _=t?t.getImmediateChild(h):null,w=Fv(s,h),N=r.operationForChild(h);N&&(u=u.concat(Kv(N,m,_,w)))}),l&&(u=u.concat(Mf(l,r,s,t))),u}function Yv(r,e){const t=e.query,s=lc(r,t);return{hashFn:()=>(LI(e)||me.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?ZI(r,t._path,s):JI(r,t._path);{const u=QS(l,t);return $d(r,t,null,u)}}}}function lc(r,e){const t=Ic(e);return r.queryToTagMap.get(t)}function Ic(r){return r._path.toString()+"$"+r._queryIdentifier}function jf(r,e){return r.tagToQueryMap.get(e)}function Ff(r){const e=r.indexOf("$");return J(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new He(r.substr(0,e))}}function Uf(r,e,t){const s=r.syncPointTree_.get(e);J(s,"Missing sync point for query tag that we're tracking");const l=bf(r.pendingWriteTree_,e);return Mf(s,t,l,null)}function nk(r){return r.fold((e,t,s)=>{if(t&&yi(t))return[Sc(t)];{let l=[];return t&&(l=Bv(t)),Pt(s,(u,h)=>{l=l.concat(h)}),l}})}function Vl(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(qI())(r._repo,r._path):r}function rk(r,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const l=Ic(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function ik(){return KI++}function sk(r,e,t){const s=e._path,l=lc(r,e),u=Yv(r,t),h=r.listenProvider_.startListening(Vl(e),l,u.hashFn,u.onComplete),m=r.syncPointTree_.subtree(s);if(l)J(!yi(m.value),"If we're adding a query, it shouldn't be shadowed");else{const _=m.fold((w,N,k)=>{if(!ke(w)&&N&&yi(N))return[Sc(N).query];{let I=[];return N&&(I=I.concat(Bv(N).map(H=>H.query))),Pt(k,(H,z)=>{I=I.concat(z)}),I}});for(let w=0;w<_.length;++w){const N=_[w];r.listenProvider_.stopListening(Vl(N),lc(r,N))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Vf(t)}node(){return this.node_}}class zf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=it(this.path_,e);return new zf(this.syncTree_,t)}node(){return Gv(this.syncTree_,this.path_)}}const ok=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},D_=function(r,e,t){if(!r||typeof r!="object")return r;if(J(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return lk(r[".sv"],e,t);if(typeof r[".sv"]=="object")return ak(r[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},lk=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:J(!1,"Unexpected server value: "+r)}},ak=function(r,e,t){r.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&J(!1,"Unexpected increment value: "+s);const l=e.node();if(J(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const h=l.getValue();return typeof h!="number"?s:h+s},Qv=function(r,e,t,s){return Hf(e,new zf(t,r),s)},uk=function(r,e,t){return Hf(r,new Vf(e),t)};function Hf(r,e,t){const s=r.getPriority().val(),l=D_(s,e.getImmediateChild(".priority"),t);let u;if(r.isLeafNode()){const h=r,m=D_(h.getValue(),e,t);return m!==h.getValue()||l!==h.getPriority().val()?new Et(m,At(l)):r}else{const h=r;return u=h,l!==h.getPriority().val()&&(u=u.updatePriority(new Et(l))),h.forEachChild(st,(m,_)=>{const w=Hf(_,e.getImmediateChild(m),t);w!==_&&(u=u.updateImmediateChild(m,w))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Wf(r,e){let t=e instanceof He?e:new He(e),s=r,l=Ie(t);for(;l!==null;){const u=_o(s.node.children,l)||{children:{},childCount:0};s=new Bf(l,s,u),t=Ye(t),l=Ie(t)}return s}function Ro(r){return r.node.value}function Xv(r,e){r.node.value=e,Gd(r)}function Jv(r){return r.node.childCount>0}function ck(r){return Ro(r)===void 0&&!Jv(r)}function kc(r,e){Pt(r.node.children,(t,s)=>{e(new Bf(t,r,s))})}function Zv(r,e,t,s){t&&e(r),kc(r,l=>{Zv(l,e,!0)})}function hk(r,e,t){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ua(r){return new He(r.parent===null?r.name:ua(r.parent)+"/"+r.name)}function Gd(r){r.parent!==null&&dk(r.parent,r.name,r)}function dk(r,e,t){const s=ck(t),l=rr(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Gd(r)):!s&&!l&&(r.node.children[e]=t.node,r.node.childCount++,Gd(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=/[\[\].#$\/\u0000-\u001F\u007F]/,pk=/[\[\].#$\u0000-\u001F\u007F]/,vd=10*1024*1024,$f=function(r){return typeof r=="string"&&r.length!==0&&!fk.test(r)},e0=function(r){return typeof r=="string"&&r.length!==0&&!pk.test(r)},mk=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),e0(r)},gk=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!yf(r)||r&&typeof r=="object"&&rr(r,".sv")},Gf=function(r,e,t){const s=t instanceof He?new AC(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+Ki(s));if(typeof e=="function")throw new Error(r+"contains a function "+Ki(s)+" with contents = "+e.toString());if(yf(e))throw new Error(r+"contains "+e.toString()+" "+Ki(s));if(typeof e=="string"&&e.length>vd/3&&pc(e)>vd)throw new Error(r+"contains a string greater than "+vd+" utf8 bytes "+Ki(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(Pt(e,(h,m)=>{if(h===".value")l=!0;else if(h!==".priority"&&h!==".sv"&&(u=!0,!$f(h)))throw new Error(r+" contains an invalid key ("+h+") "+Ki(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);PC(s,h),Gf(r,m,s),bC(s)}),l&&u)throw new Error(r+' contains ".value" child '+Ki(s)+" in addition to actual children.")}},_k=function(r,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const u=Yl(s);for(let h=0;h<u.length;h++)if(!(u[h]===".priority"&&h===u.length-1)){if(!$f(u[h]))throw new Error(r+"contains an invalid key ("+u[h]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(RC);let l=null;for(t=0;t<e.length;t++){if(s=e[t],l!==null&&gn(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},yk=function(r,e,t,s){const l=of(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];Pt(e,(h,m)=>{const _=new He(h);if(Gf(l,m,it(t,_)),Sf(_)===".priority"&&!gk(m))throw new Error(l+"contains an invalid value for '"+_.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(_)}),_k(l,u)},t0=function(r,e,t,s){if(!e0(t))throw new Error(of(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vk=function(r,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),t0(r,e,t)},wk=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$f(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!mk(t))throw new Error(of(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qf(r,e){let t=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();t!==null&&!Cf(u,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:u}),t.events.push(l)}t&&r.eventLists_.push(t)}function n0(r,e,t){qf(r,t),r0(r,s=>Cf(s,e))}function Pr(r,e,t){qf(r,t),r0(r,s=>gn(s,e)||gn(e,s))}function r0(r,e){r.recursionDepth_++;let t=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(xk(r.eventLists_[s]),r.eventLists_[s]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function xk(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const s=t.getEventRunner();Ml&&Rt("event: "+t.toString()),To(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk="repo_interrupt",Ck=25;class Ik{constructor(e,t,s,l){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ek,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ec(),this.transactionQueueTree_=new Bf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kk(r,e,t){if(r.stats_=Ef(r.repoInfo_),r.forceRestClient_||eC())r.server_=new Zu(r.repoInfo_,(s,l,u,h)=>{O_(r,s,l,u,h)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>L_(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{St(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new Tr(r.repoInfo_,e,(s,l,u,h)=>{O_(r,s,l,u,h)},s=>{L_(r,s)},s=>{Nk(r,s)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=sC(r.repoInfo_,()=>new iI(r.stats_,r.server_)),r.infoData_=new ZC,r.infoSyncTree_=new P_({startListening:(s,l,u,h)=>{let m=[];const _=r.infoData_.getNode(s._path);return _.isEmpty()||(m=Cc(r.infoSyncTree_,s._path,_),setTimeout(()=>{h("ok")},0)),m},stopListening:()=>{}}),Yf(r,"connected",!1),r.serverSyncTree_=new P_({startListening:(s,l,u,h)=>(r.server_.listen(s,u,l,(m,_)=>{const w=h(m,_);Pr(r.eventQueue_,s._path,w)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function Tk(r){const t=r.infoData_.getNode(new He(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Kf(r){return ok({timestamp:Tk(r)})}function O_(r,e,t,s,l){r.dataUpdateCount++;const u=new He(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let h=[];if(l)if(s){const _=Hu(t,w=>At(w));h=tk(r.serverSyncTree_,u,_,l)}else{const _=At(t);h=ek(r.serverSyncTree_,u,_,l)}else if(s){const _=Hu(t,w=>At(w));h=XI(r.serverSyncTree_,u,_)}else{const _=At(t);h=Cc(r.serverSyncTree_,u,_)}let m=u;h.length>0&&(m=ea(r,u)),Pr(r.eventQueue_,m,h)}function L_(r,e){Yf(r,"connected",e),e===!1&&Ak(r)}function Nk(r,e){Pt(e,(t,s)=>{Yf(r,t,s)})}function Yf(r,e,t){const s=new He("/.info/"+e),l=At(t);r.infoData_.updateSnapshot(s,l);const u=Cc(r.infoSyncTree_,s,l);Pr(r.eventQueue_,s,u)}function i0(r){return r.nextWriteId_++}function Rk(r,e,t,s){Qf(r,"update",{path:e.toString(),value:t});let l=!0;const u=Kf(r),h={};if(Pt(t,(m,_)=>{l=!1,h[m]=Qv(it(e,m),At(_),r.serverSyncTree_,u)}),l)Rt("update() called with empty data.  Don't do anything."),M_(r,s,"ok",void 0);else{const m=i0(r),_=QI(r.serverSyncTree_,e,h,m);qf(r.eventQueue_,_),r.server_.merge(e.toString(),t,(w,N)=>{const k=w==="ok";k||Jt("update at "+e+" failed: "+w);const I=Xi(r.serverSyncTree_,m,!k),H=I.length>0?ea(r,e):e;Pr(r.eventQueue_,H,I),M_(r,s,w,N)}),Pt(t,w=>{const N=u0(r,it(e,w));ea(r,N)}),Pr(r.eventQueue_,e,[])}}function Ak(r){Qf(r,"onDisconnectEvents");const e=Kf(r),t=ec();Fd(r.onDisconnect_,Ue(),(l,u)=>{const h=Qv(l,u,r.serverSyncTree_,e);Dv(t,l,h)});let s=[];Fd(t,Ue(),(l,u)=>{s=s.concat(Cc(r.serverSyncTree_,l,u));const h=u0(r,l);ea(r,h)}),r.onDisconnect_=ec(),Pr(r.eventQueue_,Ue(),s)}function Pk(r,e,t){let s;Ie(e._path)===".info"?s=b_(r.infoSyncTree_,e,t):s=b_(r.serverSyncTree_,e,t),n0(r.eventQueue_,e._path,s)}function bk(r,e,t){let s;Ie(e._path)===".info"?s=$d(r.infoSyncTree_,e,t):s=$d(r.serverSyncTree_,e,t),n0(r.eventQueue_,e._path,s)}function Dk(r){r.persistentConnection_&&r.persistentConnection_.interrupt(Sk)}function Qf(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),Rt(t,...e)}function M_(r,e,t,s){e&&To(()=>{if(t==="ok")e(null);else{const l=(t||"error").toUpperCase();let u=l;s&&(u+=": "+s);const h=new Error(u);h.code=l,e(h)}})}function s0(r,e,t){return Gv(r.serverSyncTree_,e,t)||me.EMPTY_NODE}function Xf(r,e=r.transactionQueueTree_){if(e||Tc(r,e),Ro(e)){const t=l0(r,e);J(t.length>0,"Sending zero length transaction queue"),t.every(l=>l.status===0)&&Ok(r,ua(e),t)}else Jv(e)&&kc(e,t=>{Xf(r,t)})}function Ok(r,e,t){const s=t.map(w=>w.currentWriteId),l=s0(r,e,s);let u=l;const h=l.hash();for(let w=0;w<t.length;w++){const N=t[w];J(N.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),N.status=1,N.retryCount++;const k=Qt(e,N.path);u=u.updateChild(k,N.currentOutputSnapshotRaw)}const m=u.val(!0),_=e;r.server_.put(_.toString(),m,w=>{Qf(r,"transaction put response",{path:_.toString(),status:w});let N=[];if(w==="ok"){const k=[];for(let I=0;I<t.length;I++)t[I].status=2,N=N.concat(Xi(r.serverSyncTree_,t[I].currentWriteId)),t[I].onComplete&&k.push(()=>t[I].onComplete(null,!0,t[I].currentOutputSnapshotResolved)),t[I].unwatcher();Tc(r,Wf(r.transactionQueueTree_,e)),Xf(r,r.transactionQueueTree_),Pr(r.eventQueue_,e,N);for(let I=0;I<k.length;I++)To(k[I])}else{if(w==="datastale")for(let k=0;k<t.length;k++)t[k].status===3?t[k].status=4:t[k].status=0;else{Jt("transaction at "+_.toString()+" failed: "+w);for(let k=0;k<t.length;k++)t[k].status=4,t[k].abortReason=w}ea(r,e)}},h)}function ea(r,e){const t=o0(r,e),s=ua(t),l=l0(r,t);return Lk(r,l,s),s}function Lk(r,e,t){if(e.length===0)return;const s=[];let l=[];const h=e.filter(m=>m.status===0).map(m=>m.currentWriteId);for(let m=0;m<e.length;m++){const _=e[m],w=Qt(t,_.path);let N=!1,k;if(J(w!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)N=!0,k=_.abortReason,l=l.concat(Xi(r.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=Ck)N=!0,k="maxretry",l=l.concat(Xi(r.serverSyncTree_,_.currentWriteId,!0));else{const I=s0(r,_.path,h);_.currentInputSnapshot=I;const H=e[m].update(I.val());if(H!==void 0){Gf("transaction failed: Data returned ",H,_.path);let z=At(H);typeof H=="object"&&H!=null&&rr(H,".priority")||(z=z.updatePriority(I.getPriority()));const $=_.currentWriteId,_e=Kf(r),G=uk(z,I,_e);_.currentOutputSnapshotRaw=z,_.currentOutputSnapshotResolved=G,_.currentWriteId=i0(r),h.splice(h.indexOf($),1),l=l.concat(YI(r.serverSyncTree_,_.path,G,_.currentWriteId,_.applyLocally)),l=l.concat(Xi(r.serverSyncTree_,$,!0))}else N=!0,k="nodata",l=l.concat(Xi(r.serverSyncTree_,_.currentWriteId,!0))}Pr(r.eventQueue_,t,l),l=[],N&&(e[m].status=2,function(I){setTimeout(I,Math.floor(0))}(e[m].unwatcher),e[m].onComplete&&(k==="nodata"?s.push(()=>e[m].onComplete(null,!1,e[m].currentInputSnapshot)):s.push(()=>e[m].onComplete(new Error(k),!1,null))))}Tc(r,r.transactionQueueTree_);for(let m=0;m<s.length;m++)To(s[m]);Xf(r,r.transactionQueueTree_)}function o0(r,e){let t,s=r.transactionQueueTree_;for(t=Ie(e);t!==null&&Ro(s)===void 0;)s=Wf(s,t),e=Ye(e),t=Ie(e);return s}function l0(r,e){const t=[];return a0(r,e,t),t.sort((s,l)=>s.order-l.order),t}function a0(r,e,t){const s=Ro(e);if(s)for(let l=0;l<s.length;l++)t.push(s[l]);kc(e,l=>{a0(r,l,t)})}function Tc(r,e){const t=Ro(e);if(t){let s=0;for(let l=0;l<t.length;l++)t[l].status!==2&&(t[s]=t[l],s++);t.length=s,Xv(e,t.length>0?t:void 0)}kc(e,s=>{Tc(r,s)})}function u0(r,e){const t=ua(o0(r,e)),s=Wf(r.transactionQueueTree_,e);return hk(s,l=>{wd(r,l)}),wd(r,s),Zv(s,l=>{wd(r,l)}),t}function wd(r,e){const t=Ro(e);if(t){const s=[];let l=[],u=-1;for(let h=0;h<t.length;h++)t[h].status===3||(t[h].status===1?(J(u===h-1,"All SENT items should be at beginning of queue."),u=h,t[h].status=3,t[h].abortReason="set"):(J(t[h].status===0,"Unexpected transaction status in abort"),t[h].unwatcher(),l=l.concat(Xi(r.serverSyncTree_,t[h].currentWriteId,!0)),t[h].onComplete&&s.push(t[h].onComplete.bind(null,new Error("set"),!1,null))));u===-1?Xv(e,void 0):t.length=u+1,Pr(r.eventQueue_,ua(e),l);for(let h=0;h<s.length;h++)To(s[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(r){let e="";const t=r.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let l=t[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function jk(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Jt(`Invalid query segment '${t}' in query '${r}'`)}return e}const j_=function(r,e){const t=Fk(r),s=t.namespace;t.domain==="firebase.com"&&Ar(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ar("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||$S();const l=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new gv(t.host,t.secure,s,l,e,"",s!==t.subdomain),path:new He(t.pathString)}},Fk=function(r){let e="",t="",s="",l="",u="",h=!0,m="https",_=443;if(typeof r=="string"){let w=r.indexOf("//");w>=0&&(m=r.substring(0,w-1),r=r.substring(w+2));let N=r.indexOf("/");N===-1&&(N=r.length);let k=r.indexOf("?");k===-1&&(k=r.length),e=r.substring(0,Math.min(N,k)),N<k&&(l=Mk(r.substring(N,k)));const I=jk(r.substring(Math.min(r.length,k)));w=e.indexOf(":"),w>=0?(h=m==="https"||m==="wss",_=parseInt(e.substring(w+1),10)):w=e.length;const H=e.slice(0,w);if(H.toLowerCase()==="localhost")t="localhost";else if(H.split(".").length<=2)t=H;else{const z=e.indexOf(".");s=e.substring(0,z).toLowerCase(),t=e.substring(z+1),u=s}"ns"in I&&(u=I.ns)}return{host:e,port:_,domain:t,subdomain:s,secure:h,scheme:m,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,t,s,l){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+St(this.snapshot.exportVal())}}class Vk{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return J(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,s,l){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=l}get key(){return ke(this._path)?null:Sf(this._path)}get ref(){return new wi(this._repo,this._path)}get _queryIdentifier(){const e=E_(this._queryParams),t=vf(e);return t==="{}"?"default":t}get _queryObject(){return E_(this._queryParams)}isEqual(e){if(e=Vn(e),!(e instanceof Jf))return!1;const t=this._repo===e._repo,s=Cf(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return t&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+NC(this._path)}}class wi extends Jf{constructor(e,t){super(e,t,new Nf,!1)}get parent(){const e=Iv(this._path);return e===null?null:new wi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ac{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new He(e),s=qd(this.ref,e);return new ac(this._node.getChild(t),s,st)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new ac(l,qd(this.ref,s),st)))}hasChild(e){const t=new He(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ed(r,e){return r=Vn(r),r._checkNotDeleted("ref"),e!==void 0?qd(r._root,e):r._root}function qd(r,e){return r=Vn(r),Ie(r._path)===null?vk("child","path",e):t0("child","path",e),new wi(r._repo,it(r._path,e))}function F_(r,e){yk("update",e,r._path);const t=new fc;return Rk(r._repo,r._path,e,t.wrapCallback(()=>{})),t.promise}class Zf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Uk("value",this,new ac(e.snapshotNode,new wi(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vk(this,e,t):null}matches(e){return e instanceof Zf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Hk(r,e,t,s,l){const u=new zk(t,void 0),h=new Zf(u);return Pk(r._repo,r,h),()=>bk(r._repo,r,h)}function Bk(r,e,t,s){return Hk(r,"value",e)}VI(wi);GI(wi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="FIREBASE_DATABASE_EMULATOR_HOST",Kd={};let $k=!1;function Gk(r,e,t,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),h=us(u);r.repoInfo_=new gv(e,h,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(r.authTokenProvider_=s)}function qk(r,e,t,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||Ar("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Rt("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let h=j_(u,l),m=h.repoInfo,_;typeof process<"u"&&r_&&(_=r_[Wk]),_?(u=`http://${_}?ns=${m.namespace}`,h=j_(u,l),m=h.repoInfo):h.repoInfo.secure;const w=new nC(r.name,r.options,e);wk("Invalid Firebase Database URL",h),ke(h.path)||Ar("Database URL must point to the root of a Firebase Database (not including a child path).");const N=Yk(m,r,w,new tC(r,t));return new Qk(N,r)}function Kk(r,e){const t=Kd[e];(!t||t[r.key]!==r)&&Ar(`Database ${e}(${r.repoInfo_}) has already been deleted.`),Dk(r),delete t[r.key]}function Yk(r,e,t,s){let l=Kd[e.name];l||(l={},Kd[e.name]=l);let u=l[r.toURLString()];return u&&Ar("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new Ik(r,$k,t,s),l[r.toURLString()]=u,u}class Qk{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wi(this._repo,Ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Kk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ar("Cannot call "+e+" on a deleted database.")}}function Xk(r=af(),e){const t=gc(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=dy("database");s&&Jk(t,...s)}return t}function Jk(r,e,t,s={}){r=Vn(r),r._checkNotDeleted("useEmulator");const l=`${e}:${t}`,u=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&mi(s,u.repoInfo_.emulatorOptions))return;Ar("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&Ar('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new Fu(Fu.OWNER);else if(s.mockUserToken){const m=typeof s.mockUserToken=="string"?s.mockUserToken:my(s.mockUserToken,r.app.options.projectId);h=new Fu(m)}us(e)&&(nf(e),rf("Database",!0)),Gk(u,l,s,h)}/**
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
 */function Zk(r){US(cs),ns(new gi("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return qk(s,l,u,t)},"PUBLIC").setMultipleInstances(!0)),er(i_,s_,r),er(i_,s_,"esm2017")}Tr.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Tr.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};Zk();var U_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ep;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,x){function C(){}C.prototype=x.prototype,P.D=x.prototype,P.prototype=new C,P.prototype.constructor=P,P.C=function(R,A,O){for(var T=Array(arguments.length-2),we=2;we<arguments.length;we++)T[we-2]=arguments[we];return x.prototype[A].apply(R,T)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(P,x,C){C||(C=0);var R=Array(16);if(typeof x=="string")for(var A=0;16>A;++A)R[A]=x.charCodeAt(C++)|x.charCodeAt(C++)<<8|x.charCodeAt(C++)<<16|x.charCodeAt(C++)<<24;else for(A=0;16>A;++A)R[A]=x[C++]|x[C++]<<8|x[C++]<<16|x[C++]<<24;x=P.g[0],C=P.g[1],A=P.g[2];var O=P.g[3],T=x+(O^C&(A^O))+R[0]+3614090360&4294967295;x=C+(T<<7&4294967295|T>>>25),T=O+(A^x&(C^A))+R[1]+3905402710&4294967295,O=x+(T<<12&4294967295|T>>>20),T=A+(C^O&(x^C))+R[2]+606105819&4294967295,A=O+(T<<17&4294967295|T>>>15),T=C+(x^A&(O^x))+R[3]+3250441966&4294967295,C=A+(T<<22&4294967295|T>>>10),T=x+(O^C&(A^O))+R[4]+4118548399&4294967295,x=C+(T<<7&4294967295|T>>>25),T=O+(A^x&(C^A))+R[5]+1200080426&4294967295,O=x+(T<<12&4294967295|T>>>20),T=A+(C^O&(x^C))+R[6]+2821735955&4294967295,A=O+(T<<17&4294967295|T>>>15),T=C+(x^A&(O^x))+R[7]+4249261313&4294967295,C=A+(T<<22&4294967295|T>>>10),T=x+(O^C&(A^O))+R[8]+1770035416&4294967295,x=C+(T<<7&4294967295|T>>>25),T=O+(A^x&(C^A))+R[9]+2336552879&4294967295,O=x+(T<<12&4294967295|T>>>20),T=A+(C^O&(x^C))+R[10]+4294925233&4294967295,A=O+(T<<17&4294967295|T>>>15),T=C+(x^A&(O^x))+R[11]+2304563134&4294967295,C=A+(T<<22&4294967295|T>>>10),T=x+(O^C&(A^O))+R[12]+1804603682&4294967295,x=C+(T<<7&4294967295|T>>>25),T=O+(A^x&(C^A))+R[13]+4254626195&4294967295,O=x+(T<<12&4294967295|T>>>20),T=A+(C^O&(x^C))+R[14]+2792965006&4294967295,A=O+(T<<17&4294967295|T>>>15),T=C+(x^A&(O^x))+R[15]+1236535329&4294967295,C=A+(T<<22&4294967295|T>>>10),T=x+(A^O&(C^A))+R[1]+4129170786&4294967295,x=C+(T<<5&4294967295|T>>>27),T=O+(C^A&(x^C))+R[6]+3225465664&4294967295,O=x+(T<<9&4294967295|T>>>23),T=A+(x^C&(O^x))+R[11]+643717713&4294967295,A=O+(T<<14&4294967295|T>>>18),T=C+(O^x&(A^O))+R[0]+3921069994&4294967295,C=A+(T<<20&4294967295|T>>>12),T=x+(A^O&(C^A))+R[5]+3593408605&4294967295,x=C+(T<<5&4294967295|T>>>27),T=O+(C^A&(x^C))+R[10]+38016083&4294967295,O=x+(T<<9&4294967295|T>>>23),T=A+(x^C&(O^x))+R[15]+3634488961&4294967295,A=O+(T<<14&4294967295|T>>>18),T=C+(O^x&(A^O))+R[4]+3889429448&4294967295,C=A+(T<<20&4294967295|T>>>12),T=x+(A^O&(C^A))+R[9]+568446438&4294967295,x=C+(T<<5&4294967295|T>>>27),T=O+(C^A&(x^C))+R[14]+3275163606&4294967295,O=x+(T<<9&4294967295|T>>>23),T=A+(x^C&(O^x))+R[3]+4107603335&4294967295,A=O+(T<<14&4294967295|T>>>18),T=C+(O^x&(A^O))+R[8]+1163531501&4294967295,C=A+(T<<20&4294967295|T>>>12),T=x+(A^O&(C^A))+R[13]+2850285829&4294967295,x=C+(T<<5&4294967295|T>>>27),T=O+(C^A&(x^C))+R[2]+4243563512&4294967295,O=x+(T<<9&4294967295|T>>>23),T=A+(x^C&(O^x))+R[7]+1735328473&4294967295,A=O+(T<<14&4294967295|T>>>18),T=C+(O^x&(A^O))+R[12]+2368359562&4294967295,C=A+(T<<20&4294967295|T>>>12),T=x+(C^A^O)+R[5]+4294588738&4294967295,x=C+(T<<4&4294967295|T>>>28),T=O+(x^C^A)+R[8]+2272392833&4294967295,O=x+(T<<11&4294967295|T>>>21),T=A+(O^x^C)+R[11]+1839030562&4294967295,A=O+(T<<16&4294967295|T>>>16),T=C+(A^O^x)+R[14]+4259657740&4294967295,C=A+(T<<23&4294967295|T>>>9),T=x+(C^A^O)+R[1]+2763975236&4294967295,x=C+(T<<4&4294967295|T>>>28),T=O+(x^C^A)+R[4]+1272893353&4294967295,O=x+(T<<11&4294967295|T>>>21),T=A+(O^x^C)+R[7]+4139469664&4294967295,A=O+(T<<16&4294967295|T>>>16),T=C+(A^O^x)+R[10]+3200236656&4294967295,C=A+(T<<23&4294967295|T>>>9),T=x+(C^A^O)+R[13]+681279174&4294967295,x=C+(T<<4&4294967295|T>>>28),T=O+(x^C^A)+R[0]+3936430074&4294967295,O=x+(T<<11&4294967295|T>>>21),T=A+(O^x^C)+R[3]+3572445317&4294967295,A=O+(T<<16&4294967295|T>>>16),T=C+(A^O^x)+R[6]+76029189&4294967295,C=A+(T<<23&4294967295|T>>>9),T=x+(C^A^O)+R[9]+3654602809&4294967295,x=C+(T<<4&4294967295|T>>>28),T=O+(x^C^A)+R[12]+3873151461&4294967295,O=x+(T<<11&4294967295|T>>>21),T=A+(O^x^C)+R[15]+530742520&4294967295,A=O+(T<<16&4294967295|T>>>16),T=C+(A^O^x)+R[2]+3299628645&4294967295,C=A+(T<<23&4294967295|T>>>9),T=x+(A^(C|~O))+R[0]+4096336452&4294967295,x=C+(T<<6&4294967295|T>>>26),T=O+(C^(x|~A))+R[7]+1126891415&4294967295,O=x+(T<<10&4294967295|T>>>22),T=A+(x^(O|~C))+R[14]+2878612391&4294967295,A=O+(T<<15&4294967295|T>>>17),T=C+(O^(A|~x))+R[5]+4237533241&4294967295,C=A+(T<<21&4294967295|T>>>11),T=x+(A^(C|~O))+R[12]+1700485571&4294967295,x=C+(T<<6&4294967295|T>>>26),T=O+(C^(x|~A))+R[3]+2399980690&4294967295,O=x+(T<<10&4294967295|T>>>22),T=A+(x^(O|~C))+R[10]+4293915773&4294967295,A=O+(T<<15&4294967295|T>>>17),T=C+(O^(A|~x))+R[1]+2240044497&4294967295,C=A+(T<<21&4294967295|T>>>11),T=x+(A^(C|~O))+R[8]+1873313359&4294967295,x=C+(T<<6&4294967295|T>>>26),T=O+(C^(x|~A))+R[15]+4264355552&4294967295,O=x+(T<<10&4294967295|T>>>22),T=A+(x^(O|~C))+R[6]+2734768916&4294967295,A=O+(T<<15&4294967295|T>>>17),T=C+(O^(A|~x))+R[13]+1309151649&4294967295,C=A+(T<<21&4294967295|T>>>11),T=x+(A^(C|~O))+R[4]+4149444226&4294967295,x=C+(T<<6&4294967295|T>>>26),T=O+(C^(x|~A))+R[11]+3174756917&4294967295,O=x+(T<<10&4294967295|T>>>22),T=A+(x^(O|~C))+R[2]+718787259&4294967295,A=O+(T<<15&4294967295|T>>>17),T=C+(O^(A|~x))+R[9]+3951481745&4294967295,P.g[0]=P.g[0]+x&4294967295,P.g[1]=P.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,P.g[2]=P.g[2]+A&4294967295,P.g[3]=P.g[3]+O&4294967295}s.prototype.u=function(P,x){x===void 0&&(x=P.length);for(var C=x-this.blockSize,R=this.B,A=this.h,O=0;O<x;){if(A==0)for(;O<=C;)l(this,P,O),O+=this.blockSize;if(typeof P=="string"){for(;O<x;)if(R[A++]=P.charCodeAt(O++),A==this.blockSize){l(this,R),A=0;break}}else for(;O<x;)if(R[A++]=P[O++],A==this.blockSize){l(this,R),A=0;break}}this.h=A,this.o+=x},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var x=1;x<P.length-8;++x)P[x]=0;var C=8*this.o;for(x=P.length-8;x<P.length;++x)P[x]=C&255,C/=256;for(this.u(P),P=Array(16),x=C=0;4>x;++x)for(var R=0;32>R;R+=8)P[C++]=this.g[x]>>>R&255;return P};function u(P,x){var C=m;return Object.prototype.hasOwnProperty.call(C,P)?C[P]:C[P]=x(P)}function h(P,x){this.h=x;for(var C=[],R=!0,A=P.length-1;0<=A;A--){var O=P[A]|0;R&&O==x||(C[A]=O,R=!1)}this.g=C}var m={};function _(P){return-128<=P&&128>P?u(P,function(x){return new h([x|0],0>x?-1:0)}):new h([P|0],0>P?-1:0)}function w(P){if(isNaN(P)||!isFinite(P))return k;if(0>P)return $(w(-P));for(var x=[],C=1,R=0;P>=C;R++)x[R]=P/C|0,C*=4294967296;return new h(x,0)}function N(P,x){if(P.length==0)throw Error("number format error: empty string");if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(P.charAt(0)=="-")return $(N(P.substring(1),x));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=w(Math.pow(x,8)),R=k,A=0;A<P.length;A+=8){var O=Math.min(8,P.length-A),T=parseInt(P.substring(A,A+O),x);8>O?(O=w(Math.pow(x,O)),R=R.j(O).add(w(T))):(R=R.j(C),R=R.add(w(T)))}return R}var k=_(0),I=_(1),H=_(16777216);r=h.prototype,r.m=function(){if(Y(this))return-$(this).m();for(var P=0,x=1,C=0;C<this.g.length;C++){var R=this.i(C);P+=(0<=R?R:4294967296+R)*x,x*=4294967296}return P},r.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(z(this))return"0";if(Y(this))return"-"+$(this).toString(P);for(var x=w(Math.pow(P,6)),C=this,R="";;){var A=ce(C,x).g;C=_e(C,A.j(x));var O=((0<C.g.length?C.g[0]:C.h)>>>0).toString(P);if(C=A,z(C))return O+R;for(;6>O.length;)O="0"+O;R=O+R}},r.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function z(P){if(P.h!=0)return!1;for(var x=0;x<P.g.length;x++)if(P.g[x]!=0)return!1;return!0}function Y(P){return P.h==-1}r.l=function(P){return P=_e(this,P),Y(P)?-1:z(P)?0:1};function $(P){for(var x=P.g.length,C=[],R=0;R<x;R++)C[R]=~P.g[R];return new h(C,~P.h).add(I)}r.abs=function(){return Y(this)?$(this):this},r.add=function(P){for(var x=Math.max(this.g.length,P.g.length),C=[],R=0,A=0;A<=x;A++){var O=R+(this.i(A)&65535)+(P.i(A)&65535),T=(O>>>16)+(this.i(A)>>>16)+(P.i(A)>>>16);R=T>>>16,O&=65535,T&=65535,C[A]=T<<16|O}return new h(C,C[C.length-1]&-2147483648?-1:0)};function _e(P,x){return P.add($(x))}r.j=function(P){if(z(this)||z(P))return k;if(Y(this))return Y(P)?$(this).j($(P)):$($(this).j(P));if(Y(P))return $(this.j($(P)));if(0>this.l(H)&&0>P.l(H))return w(this.m()*P.m());for(var x=this.g.length+P.g.length,C=[],R=0;R<2*x;R++)C[R]=0;for(R=0;R<this.g.length;R++)for(var A=0;A<P.g.length;A++){var O=this.i(R)>>>16,T=this.i(R)&65535,we=P.i(A)>>>16,ve=P.i(A)&65535;C[2*R+2*A]+=T*ve,G(C,2*R+2*A),C[2*R+2*A+1]+=O*ve,G(C,2*R+2*A+1),C[2*R+2*A+1]+=T*we,G(C,2*R+2*A+1),C[2*R+2*A+2]+=O*we,G(C,2*R+2*A+2)}for(R=0;R<x;R++)C[R]=C[2*R+1]<<16|C[2*R];for(R=x;R<2*x;R++)C[R]=0;return new h(C,0)};function G(P,x){for(;(P[x]&65535)!=P[x];)P[x+1]+=P[x]>>>16,P[x]&=65535,x++}function le(P,x){this.g=P,this.h=x}function ce(P,x){if(z(x))throw Error("division by zero");if(z(P))return new le(k,k);if(Y(P))return x=ce($(P),x),new le($(x.g),$(x.h));if(Y(x))return x=ce(P,$(x)),new le($(x.g),x.h);if(30<P.g.length){if(Y(P)||Y(x))throw Error("slowDivide_ only works with positive integers.");for(var C=I,R=x;0>=R.l(P);)C=ye(C),R=ye(R);var A=B(C,1),O=B(R,1);for(R=B(R,2),C=B(C,2);!z(R);){var T=O.add(R);0>=T.l(P)&&(A=A.add(C),O=T),R=B(R,1),C=B(C,1)}return x=_e(P,A.j(x)),new le(A,x)}for(A=k;0<=P.l(x);){for(C=Math.max(1,Math.floor(P.m()/x.m())),R=Math.ceil(Math.log(C)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),O=w(C),T=O.j(x);Y(T)||0<T.l(P);)C-=R,O=w(C),T=O.j(x);z(O)&&(O=I),A=A.add(O),P=_e(P,T)}return new le(A,P)}r.A=function(P){return ce(this,P).h},r.and=function(P){for(var x=Math.max(this.g.length,P.g.length),C=[],R=0;R<x;R++)C[R]=this.i(R)&P.i(R);return new h(C,this.h&P.h)},r.or=function(P){for(var x=Math.max(this.g.length,P.g.length),C=[],R=0;R<x;R++)C[R]=this.i(R)|P.i(R);return new h(C,this.h|P.h)},r.xor=function(P){for(var x=Math.max(this.g.length,P.g.length),C=[],R=0;R<x;R++)C[R]=this.i(R)^P.i(R);return new h(C,this.h^P.h)};function ye(P){for(var x=P.g.length+1,C=[],R=0;R<x;R++)C[R]=P.i(R)<<1|P.i(R-1)>>>31;return new h(C,P.h)}function B(P,x){var C=x>>5;x%=32;for(var R=P.g.length-C,A=[],O=0;O<R;O++)A[O]=0<x?P.i(O+C)>>>x|P.i(O+C+1)<<32-x:P.i(O+C);return new h(A,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=w,h.fromString=N,ep=h}).apply(typeof U_<"u"?U_:typeof self<"u"?self:typeof window<"u"?window:{});var Pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,g){return a==Array.prototype||a==Object.prototype||(a[f]=g.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pu=="object"&&Pu];for(var f=0;f<a.length;++f){var g=a[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function l(a,f){if(f)e:{var g=s;a=a.split(".");for(var E=0;E<a.length-1;E++){var M=a[E];if(!(M in g))break e;g=g[M]}a=a[a.length-1],E=g[a],f=f(E),f!=E&&f!=null&&e(g,a,{configurable:!0,writable:!0,value:f})}}function u(a,f){a instanceof String&&(a+="");var g=0,E=!1,M={next:function(){if(!E&&g<a.length){var V=g++;return{value:f(V,a[V]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}l("Array.prototype.values",function(a){return a||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function _(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function w(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function N(a,f,g){return a.call.apply(a.bind,arguments)}function k(a,f,g){if(!a)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),a.apply(f,M)}}return function(){return a.apply(f,arguments)}}function I(a,f,g){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?N:k,I.apply(null,arguments)}function H(a,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),a.apply(this,E)}}function z(a,f){function g(){}g.prototype=f.prototype,a.aa=f.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(E,M,V){for(var Z=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)Z[Ve-2]=arguments[Ve];return f.prototype[M].apply(E,Z)}}function Y(a){const f=a.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=a[E];return g}return[]}function $(a,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(_(E)){const M=a.length||0,V=E.length||0;a.length=M+V;for(let Z=0;Z<V;Z++)a[M+Z]=E[Z]}else a.push(E)}}class _e{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function G(a){return/^[\s\xa0]*$/.test(a)}function le(){var a=m.navigator;return a&&(a=a.userAgent)?a:""}function ce(a){return ce[" "](a),a}ce[" "]=function(){};var ye=le().indexOf("Gecko")!=-1&&!(le().toLowerCase().indexOf("webkit")!=-1&&le().indexOf("Edge")==-1)&&!(le().indexOf("Trident")!=-1||le().indexOf("MSIE")!=-1)&&le().indexOf("Edge")==-1;function B(a,f,g){for(const E in a)f.call(g,a[E],E,a)}function P(a,f){for(const g in a)f.call(void 0,a[g],g,a)}function x(a){const f={};for(const g in a)f[g]=a[g];return f}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,f){let g,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(g in E)a[g]=E[g];for(let V=0;V<C.length;V++)g=C[V],Object.prototype.hasOwnProperty.call(E,g)&&(a[g]=E[g])}}function A(a){var f=1;a=a.split(":");const g=[];for(;0<f&&a.length;)g.push(a.shift()),f--;return a.length&&g.push(a.join(":")),g}function O(a){m.setTimeout(()=>{throw a},0)}function T(){var a=he;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class we{constructor(){this.h=this.g=null}add(f,g){const E=ve.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var ve=new _e(()=>new Qe,a=>a.reset());class Qe{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Oe,ee=!1,he=new we,ne=()=>{const a=m.Promise.resolve(void 0);Oe=()=>{a.then(L)}};var L=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(g){O(g)}var f=ve;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}ee=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return a}();function xe(a,f){if(ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,E=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(ye){e:{try{ce(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else g=="mouseover"?f=a.fromElement:g=="mouseout"&&(f=a.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ne[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&xe.aa.h.call(this)}}z(xe,ae);var Ne={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),je=0;function We(a,f,g,E,M){this.listener=a,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=M,this.key=++je,this.da=this.fa=!1}function mt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ir(a){this.src=a,this.g={},this.h=0}ir.prototype.add=function(a,f,g,E,M){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var Z=Or(a,f,E,M);return-1<Z?(f=a[Z],g||(f.fa=!1)):(f=new We(f,this.src,V,!!E,M),f.fa=g,a.push(f)),f};function ps(a,f){var g=f.type;if(g in a.g){var E=a.g[g],M=Array.prototype.indexOf.call(E,f,void 0),V;(V=0<=M)&&Array.prototype.splice.call(E,M,1),V&&(mt(f),a.g[g].length==0&&(delete a.g[g],a.h--))}}function Or(a,f,g,E){for(var M=0;M<a.length;++M){var V=a[M];if(!V.da&&V.listener==f&&V.capture==!!g&&V.ha==E)return M}return-1}var Ei="closure_lm_"+(1e6*Math.random()|0),ms={};function Ao(a,f,g,E,M){if(Array.isArray(f)){for(var V=0;V<f.length;V++)Ao(a,f[V],g,E,M);return null}return g=Do(g),a&&a[Me]?a.K(f,g,w(E)?!!E.capture:!1,M):Po(a,f,g,!1,E,M)}function Po(a,f,g,E,M,V){if(!f)throw Error("Invalid event type");var Z=w(M)?!!M.capture:!!M,Ve=_s(a);if(Ve||(a[Ei]=Ve=new ir(a)),g=Ve.add(f,g,E,Z,V),g.proxy)return g;if(E=fa(),g.proxy=E,E.src=a,E.listener=g,a.addEventListener)Ee||(M=Z),M===void 0&&(M=!1),a.addEventListener(f.toString(),E,M);else if(a.attachEvent)a.attachEvent(or(f.toString()),E);else if(a.addListener&&a.removeListener)a.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function fa(){function a(g){return f.call(a.src,a.listener,g)}const f=bo;return a}function gs(a,f,g,E,M){if(Array.isArray(f))for(var V=0;V<f.length;V++)gs(a,f[V],g,E,M);else E=w(E)?!!E.capture:!!E,g=Do(g),a&&a[Me]?(a=a.i,f=String(f).toString(),f in a.g&&(V=a.g[f],g=Or(V,g,E,M),-1<g&&(mt(V[g]),Array.prototype.splice.call(V,g,1),V.length==0&&(delete a.g[f],a.h--)))):a&&(a=_s(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Or(f,g,E,M)),(g=-1<a?f[a]:null)&&sr(g))}function sr(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[Me])ps(f.i,a);else{var g=a.type,E=a.proxy;f.removeEventListener?f.removeEventListener(g,E,a.capture):f.detachEvent?f.detachEvent(or(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=_s(f))?(ps(g,a),g.h==0&&(g.src=null,f[Ei]=null)):mt(a)}}}function or(a){return a in ms?ms[a]:ms[a]="on"+a}function bo(a,f){if(a.da)a=!0;else{f=new xe(f,this);var g=a.listener,E=a.ha||a.src;a.fa&&sr(a),a=g.call(E,f)}return a}function _s(a){return a=a[Ei],a instanceof ir?a:null}var ys="__closure_events_fn_"+(1e9*Math.random()>>>0);function Do(a){return typeof a=="function"?a:(a[ys]||(a[ys]=function(f){return a.handleEvent(f)}),a[ys])}function ct(){W.call(this),this.i=new ir(this),this.M=this,this.F=null}z(ct,W),ct.prototype[Me]=!0,ct.prototype.removeEventListener=function(a,f,g,E){gs(this,a,f,g,E)};function ht(a,f){var g,E=a.F;if(E)for(g=[];E;E=E.F)g.push(E);if(a=a.M,E=f.type||f,typeof f=="string")f=new ae(f,a);else if(f instanceof ae)f.target=f.target||a;else{var M=f;f=new ae(E,a),R(f,M)}if(M=!0,g)for(var V=g.length-1;0<=V;V--){var Z=f.g=g[V];M=lr(Z,E,!0,f)&&M}if(Z=f.g=a,M=lr(Z,E,!0,f)&&M,M=lr(Z,E,!1,f)&&M,g)for(V=0;V<g.length;V++)Z=f.g=g[V],M=lr(Z,E,!1,f)&&M}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var g=a.g[f],E=0;E<g.length;E++)mt(g[E]);delete a.g[f],a.h--}}this.F=null},ct.prototype.K=function(a,f,g,E){return this.i.add(String(a),f,!1,g,E)},ct.prototype.L=function(a,f,g,E){return this.i.add(String(a),f,!0,g,E)};function lr(a,f,g,E){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,V=0;V<f.length;++V){var Z=f[V];if(Z&&!Z.da&&Z.capture==g){var Ve=Z.listener,dt=Z.ha||Z.src;Z.fa&&ps(a.i,Z),M=Ve.call(dt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Oo(a,f,g){if(typeof a=="function")g&&(a=I(a,g));else if(a&&typeof a.handleEvent=="function")a=I(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(a,f||0)}function Lr(a){a.g=Oo(()=>{a.g=null,a.i&&(a.i=!1,Lr(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class xi extends W{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Lr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(a){W.call(this),this.h=a,this.g={}}z(Si,W);var Lo=[];function Mo(a){B(a.g,function(f,g){this.g.hasOwnProperty(g)&&sr(f)},a),a.g={}}Si.prototype.N=function(){Si.aa.N.call(this),Mo(this)},Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jo=m.JSON.stringify,Fo=m.JSON.parse,Uo=class{stringify(a){return m.JSON.stringify(a,void 0)}parse(a){return m.JSON.parse(a,void 0)}};function Ci(){}Ci.prototype.h=null;function vs(a){return a.h||(a.h=a.i())}function Vo(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zn(){ae.call(this,"d")}z(zn,ae);function ws(){ae.call(this,"c")}z(ws,ae);var ar={},zo=null;function Es(){return zo=zo||new ct}ar.La="serverreachability";function Ho(a){ae.call(this,ar.La,a)}z(Ho,ae);function ur(a){const f=Es();ht(f,new Ho(f))}ar.STAT_EVENT="statevent";function Bo(a,f){ae.call(this,ar.STAT_EVENT,a),this.stat=f}z(Bo,ae);function ot(a){const f=Es();ht(f,new Bo(f,a))}ar.Ma="timingevent";function xs(a,f){ae.call(this,ar.Ma,a),this.size=f}z(xs,ae);function _n(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},f)}function Ii(){this.g=!0}Ii.prototype.xa=function(){this.g=!1};function ki(a,f,g,E,M,V){a.info(function(){if(a.g)if(V)for(var Z="",Ve=V.split("&"),dt=0;dt<Ve.length;dt++){var Re=Ve[dt].split("=");if(1<Re.length){var gt=Re[0];Re=Re[1];var _t=gt.split("_");Z=2<=_t.length&&_t[1]=="type"?Z+(gt+"="+Re+"&"):Z+(gt+"=redacted&")}}else Z=null;else Z=V;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+f+`
`+g+`
`+Z})}function Ss(a,f,g,E,M,V,Z){a.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+f+`
`+g+`
`+V+" "+Z})}function yn(a,f,g,E){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Rc(a,g)+(E?" "+E:"")})}function Wo(a,f){a.info(function(){return"TIMEOUT: "+f})}Ii.prototype.info=function(){};function Rc(a,f){if(!a.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var E=g[a];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var V=M[0];if(V!="noop"&&V!="stop"&&V!="close")for(var Z=1;Z<M.length;Z++)M[Z]=""}}}}return jo(g)}catch{return f}}var $o={NO_ERROR:0,TIMEOUT:8},Ac={},vn;function Ti(){}z(Ti,Ci),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},vn=new Ti;function wn(a,f,g,E){this.j=a,this.i=f,this.l=g,this.R=E||1,this.U=new Si(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pa}function pa(){this.i=null,this.g="",this.h=!1}var Go={},Cs={};function Is(a,f,g){a.L=1,a.v=Vr(en(f)),a.m=g,a.P=!0,qo(a,null)}function qo(a,f){a.F=Date.now(),$e(a),a.A=en(a.v);var g=a.A,E=a.R;Array.isArray(E)||(E=[String(E)]),Hr(g.i,"t",E),a.C=0,g=a.j.J,a.h=new pa,a.g=ba(a.j,g?f:null,!a.m),0<a.O&&(a.M=new xi(I(a.Y,a,a.g),a.O)),f=a.U,g=a.g,E=a.ca;var M="readystatechange";Array.isArray(M)||(M&&(Lo[0]=M.toString()),M=Lo);for(var V=0;V<M.length;V++){var Z=Ao(g,M[V],E||f.handleEvent,!1,f.h||f);if(!Z)break;f.g[Z.key]=Z}f=a.H?x(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),ur(),ki(a.i,a.u,a.A,a.l,a.R,a.m)}wn.prototype.ca=function(a){a=a.target;const f=this.M;f&&Ht(a)==3?f.j():this.Y(a)},wn.prototype.Y=function(a){try{if(a==this.g)e:{const _t=Ht(this.g);var f=this.g.Ba();const Gn=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Zo(this.g)))){this.J||_t!=4||f==7||(f==8||0>=Gn?ur(3):ur(2)),Ni(this);var g=this.g.Z();this.X=g;t:if(ma(this)){var E=Zo(this.g);a="";var M=E.length,V=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),Mr(this);var Z="";break t}this.h.i=new m.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,a+=this.h.i.decode(E[f],{stream:!(V&&f==M-1)});E.length=0,this.h.g+=a,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=g==200,Ss(this.i,this.u,this.A,this.l,this.R,_t,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,dt=this.g;if((Ve=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Ve)){var Re=Ve;break t}}Re=null}if(g=Re)yn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ko(this,g);else{this.o=!1,this.s=3,ot(12),ln(this),Mr(this);break e}}if(this.P){g=!0;let kt;for(;!this.J&&this.C<Z.length;)if(kt=Pc(this,Z),kt==Cs){_t==4&&(this.s=4,ot(14),g=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==Go){this.s=4,ot(15),yn(this.i,this.l,Z,"[Invalid Chunk]"),g=!1;break}else yn(this.i,this.l,kt,null),Ko(this,kt);if(ma(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||Z.length!=0||this.h.h||(this.s=1,ot(16),g=!1),this.o=this.o&&g,!g)yn(this.i,this.l,Z,"[Invalid Chunked Response]"),ln(this),Mr(this);else if(0<Z.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),tl(gt),gt.M=!0,ot(11))}}else yn(this.i,this.l,Z,null),Ko(this,Z);_t==4&&ln(this),this.o&&!this.J&&(_t==4?Ms(this.j,this):(this.o=!1,$e(this)))}else Ps(this.g),g==400&&0<Z.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),ln(this),Mr(this)}}}catch{}finally{}};function ma(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Pc(a,f){var g=a.C,E=f.indexOf(`
`,g);return E==-1?Cs:(g=Number(f.substring(g,E)),isNaN(g)?Go:(E+=1,E+g>f.length?Cs:(f=f.slice(E,E+g),a.C=E+g,f)))}wn.prototype.cancel=function(){this.J=!0,ln(this)};function $e(a){a.S=Date.now()+a.I,ga(a,a.I)}function ga(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_n(I(a.ba,a),f)}function Ni(a){a.B&&(m.clearTimeout(a.B),a.B=null)}wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Wo(this.i,this.A),this.L!=2&&(ur(),ot(17)),ln(this),this.s=2,Mr(this)):ga(this,this.S-a)};function Mr(a){a.j.G==0||a.J||Ms(a.j,a)}function ln(a){Ni(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Mo(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Ko(a,f){try{var g=a.j;if(g.G!=0&&(g.g==a||Mt(g.h,a))){if(!a.K&&Mt(g.h,a)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)Ls(g),In(g);else break e;Os(g),ot(18)}}else g.za=M[1],0<g.za-g.T&&37500>M[2]&&g.F&&g.v==0&&!g.C&&(g.C=_n(I(g.Za,g),6e3));if(1>=ya(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else pr(g,11)}else if((a.K||g.g==a)&&Ls(g),!G(f))for(M=g.Da.g.parse(f),f=0;f<M.length;f++){let Re=M[f];if(g.T=Re[0],Re=Re[1],g.G==2)if(Re[0]=="c"){g.K=Re[1],g.ia=Re[2];const gt=Re[3];gt!=null&&(g.la=gt,g.j.info("VER="+g.la));const _t=Re[4];_t!=null&&(g.Aa=_t,g.j.info("SVER="+g.Aa));const Gn=Re[5];Gn!=null&&typeof Gn=="number"&&0<Gn&&(E=1.5*Gn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const kt=a.g;if(kt){const js=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(js){var V=E.h;V.g||js.indexOf("spdy")==-1&&js.indexOf("quic")==-1&&js.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Yo(V,V.h),V.h=null))}if(E.D){const Fs=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Fs&&(E.ya=Fs,Be(E.I,E.D,Fs))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var Z=a;if(E.qa=Pa(E,E.J?E.ia:null,E.W),Z.K){va(E.h,Z);var Ve=Z,dt=E.L;dt&&(Ve.I=dt),Ve.B&&(Ni(Ve),$e(Ve)),E.g=Z}else Oi(E);0<g.i.length&&$n(g)}else Re[0]!="stop"&&Re[0]!="close"||pr(g,7);else g.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?pr(g,7):It(g):Re[0]!="noop"&&g.l&&g.l.ta(Re),g.v=0)}}ur(4)}catch{}}var _a=class{constructor(a,f){this.g=a,this.map=f}};function Ri(a){this.l=a||10,m.PerformanceNavigationTiming?(a=m.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ya(a){return a.h?1:a.g?a.g.size:0}function Mt(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Yo(a,f){a.g?a.g.add(f):a.h=f}function va(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Ri.prototype.cancel=function(){if(this.i=wa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wa(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const g of a.g.values())f=f.concat(g.D);return f}return Y(a.i)}function ks(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(_(a)){for(var f=[],g=a.length,E=0;E<g;E++)f.push(a[E]);return f}f=[],g=0;for(E in a)f[g++]=a[E];return f}function Ts(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(_(a)||typeof a=="string"){var f=[];a=a.length;for(var g=0;g<a;g++)f.push(g);return f}f=[],g=0;for(const E in a)f[g++]=E;return f}}}function jr(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(_(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var g=Ts(a),E=ks(a),M=E.length,V=0;V<M;V++)f.call(void 0,E[V],g&&g[V],a)}var Ai=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(a,f){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var E=a[g].indexOf("="),M=null;if(0<=E){var V=a[g].substring(0,E);M=a[g].substring(E+1)}else V=a[g];f(V,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function cr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof cr){this.h=a.h,Pi(this,a.j),this.o=a.o,this.g=a.g,Fr(this,a.s),this.l=a.l;var f=a.i,g=new Hn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Ur(this,g),this.m=a.m}else a&&(f=String(a).match(Ai))?(this.h=!1,Pi(this,f[1]||"",!0),this.o=Te(f[2]||""),this.g=Te(f[3]||"",!0),Fr(this,f[4]),this.l=Te(f[5]||"",!0),Ur(this,f[6]||"",!0),this.m=Te(f[7]||"")):(this.h=!1,this.i=new Hn(null,this.h))}cr.prototype.toString=function(){var a=[],f=this.j;f&&a.push(zr(f,Ns,!0),":");var g=this.g;return(g||f=="file")&&(a.push("//"),(f=this.o)&&a.push(zr(f,Ns,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(zr(g,g.charAt(0)=="/"?Sa:xa,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",zr(g,Qo)),a.join("")};function en(a){return new cr(a)}function Pi(a,f,g){a.j=g?Te(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Fr(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Ur(a,f,g){f instanceof Hn?(a.i=f,Bn(a.i,a.h)):(g||(f=zr(f,Ca)),a.i=new Hn(f,a.h))}function Be(a,f,g){a.i.set(f,g)}function Vr(a){return Be(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Te(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zr(a,f,g){return typeof a=="string"?(a=encodeURI(a).replace(f,Ea),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ea(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ns=/[#\/\?@]/g,xa=/[#\?:]/g,Sa=/[#\?]/g,Ca=/[#\?@]/g,Qo=/#/g;function Hn(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Ct(a){a.g||(a.g=new Map,a.h=0,a.i&&bc(a.i,function(f,g){a.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}r=Hn.prototype,r.add=function(a,f){Ct(this),this.i=null,a=an(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(f),this.h+=1,this};function En(a,f){Ct(a),f=an(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function xn(a,f){return Ct(a),f=an(a,f),a.g.has(f)}r.forEach=function(a,f){Ct(this),this.g.forEach(function(g,E){g.forEach(function(M){a.call(f,M,E,this)},this)},this)},r.na=function(){Ct(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const M=a[E];for(let V=0;V<M.length;V++)g.push(f[E])}return g},r.V=function(a){Ct(this);let f=[];if(typeof a=="string")xn(this,a)&&(f=f.concat(this.g.get(an(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)f=f.concat(a[g])}return f},r.set=function(a,f){return Ct(this),this.i=null,a=an(this,a),xn(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},r.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Hr(a,f,g){En(a,f),0<g.length&&(a.i=null,a.g.set(an(a,f),Y(g)),a.h+=g.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const V=encodeURIComponent(String(E)),Z=this.V(E);for(E=0;E<Z.length;E++){var M=V;Z[E]!==""&&(M+="="+encodeURIComponent(String(Z[E]))),a.push(M)}}return this.i=a.join("&")};function an(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Bn(a,f){f&&!a.j&&(Ct(a),a.i=null,a.g.forEach(function(g,E){var M=E.toLowerCase();E!=M&&(En(this,E),Hr(this,M,g))},a)),a.j=f}function Dc(a,f){const g=new Ii;if(m.Image){const E=new Image;E.onload=H(zt,g,"TestLoadImage: loaded",!0,f,E),E.onerror=H(zt,g,"TestLoadImage: error",!1,f,E),E.onabort=H(zt,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=H(zt,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=a}else f(!1)}function Ia(a,f){const g=new Ii,E=new AbortController,M=setTimeout(()=>{E.abort(),zt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:E.signal}).then(V=>{clearTimeout(M),V.ok?zt(g,"TestPingServer: ok",!0,f):zt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),zt(g,"TestPingServer: error",!1,f)})}function zt(a,f,g,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(g)}catch{}}function Oc(){this.g=new Uo}function ka(a,f,g){const E=g||"";try{jr(a,function(M,V){let Z=M;w(M)&&(Z=jo(M)),f.push(E+V+"="+encodeURIComponent(Z))})}catch(M){throw f.push(E+"type="+encodeURIComponent("_badmap")),M}}function hr(a){this.l=a.Ub||null,this.j=a.eb||!1}z(hr,Ci),hr.prototype.g=function(){return new bi(this.l,this.j)},hr.prototype.i=function(a){return function(){return a}}({});function bi(a,f){ct.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(bi,ct),r=bi.prototype,r.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Cn(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ta(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ta(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Sn(this):Cn(this),this.readyState==3&&Ta(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Sn(this))},r.Qa=function(a){this.g&&(this.response=a,Sn(this))},r.ga=function(){this.g&&Sn(this)};function Sn(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Cn(a)}r.setRequestHeader=function(a,f){this.u.append(a,f)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=f.next();return a.join(`\r
`)};function Cn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dr(a){let f="";return B(a,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Br(a,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=dr(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):Be(a,f,g))}function et(a){ct.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(et,ct);var Lc=/^https?$/i,Xo=["POST","PUT"];r=et.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vn.g(),this.v=this.o?vs(this.o):vs(vn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(V){Di(this,V);return}if(a=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)g.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const V of E.keys())g.set(V,E.get(V));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(V=>V.toLowerCase()=="content-type"),M=m.FormData&&a instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Xo,f,void 0))||E||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,Z]of g)this.g.setRequestHeader(V,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{As(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Di(this,V)}};function Di(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,Rs(a),tn(a)}function Rs(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ht(this,"complete"),ht(this,"abort"),tn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),et.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Jo(this):this.bb())},r.bb=function(){Jo(this)};function Jo(a){if(a.h&&typeof h<"u"&&(!a.v[1]||Ht(a)!=4||a.Z()!=2)){if(a.u&&Ht(a)==4)Oo(a.Ea,0,a);else if(ht(a,"readystatechange"),Ht(a)==4){a.h=!1;try{const Z=a.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=Z===0){var M=String(a.D).match(Ai)[1]||null;!M&&m.self&&m.self.location&&(M=m.self.location.protocol.slice(0,-1)),E=!Lc.test(M?M.toLowerCase():"")}g=E}if(g)ht(a,"complete"),ht(a,"success");else{a.m=6;try{var V=2<Ht(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Rs(a)}}finally{tn(a)}}}}function tn(a,f){if(a.g){As(a);const g=a.g,E=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||ht(a,"ready");try{g.onreadystatechange=E}catch{}}}function As(a){a.I&&(m.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Ht(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Fo(f)}};function Zo(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ps(a){const f={};a=(a.g&&2<=Ht(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<a.length;E++){if(G(a[E]))continue;var g=A(a[E]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const V=f[M]||[];f[M]=V,V.push(g)}P(f,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(a,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||f}function el(a){this.Aa=0,this.i=[],this.j=new Ii,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,a),this.cb=Wn("retryDelaySeedMs",1e4,a),this.Wa=Wn("forwardChannelMaxRetries",2,a),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ri(a&&a.concurrentRequestLimit),this.Da=new Oc,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=el.prototype,r.la=8,r.G=1,r.connect=function(a,f,g,E){ot(0),this.W=a,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=Pa(this,null,this.W),$n(this)};function It(a){if(bs(a),a.G==3){var f=a.U++,g=en(a.I);if(Be(g,"SID",a.K),Be(g,"RID",f),Be(g,"TYPE","terminate"),fr(a,g),f=new wn(a,a.j,f),f.L=2,f.v=Vr(en(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=ba(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}Aa(a)}function In(a){a.g&&(tl(a),a.g.cancel(),a.g=null)}function bs(a){In(a),a.u&&(m.clearTimeout(a.u),a.u=null),Ls(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&m.clearTimeout(a.s),a.s=null)}function $n(a){if(!Zt(a.h)&&!a.s){a.s=!0;var f=a.Ga;Oe||ne(),ee||(Oe(),ee=!0),he.add(f,a),a.B=0}}function Mc(a,f){return ya(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_n(I(a.Ga,a,f),Ra(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const M=new wn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=x(V),R(V,this.S)):V=this.S),this.m!==null||this.O||(M.H=V,V=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Wr(this,M,f),g=en(this.I),Be(g,"RID",a),Be(g,"CVER",22),this.D&&Be(g,"X-HTTP-Session-Id",this.D),fr(this,g),V&&(this.O?f="headers="+encodeURIComponent(String(dr(V)))+"&"+f:this.m&&Br(g,this.m,V)),Yo(this.h,M),this.Ua&&Be(g,"TYPE","init"),this.P?(Be(g,"$req",f),Be(g,"SID","null"),M.T=!0,Is(M,g,null)):Is(M,g,f),this.G=2}}else this.G==3&&(a?Ds(this,a):this.i.length==0||Zt(this.h)||Ds(this))};function Ds(a,f){var g;f?g=f.l:g=a.U++;const E=en(a.I);Be(E,"SID",a.K),Be(E,"RID",g),Be(E,"AID",a.T),fr(a,E),a.m&&a.o&&Br(E,a.m,a.o),g=new wn(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Wr(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Yo(a.h,g),Is(g,E,f)}function fr(a,f){a.H&&B(a.H,function(g,E){Be(f,E,g)}),a.l&&jr({},function(g,E){Be(f,E,g)})}function Wr(a,f,g){g=Math.min(a.i.length,g);var E=a.l?I(a.l.Na,a.l,a):null;e:{var M=a.i;let V=-1;for(;;){const Z=["count="+g];V==-1?0<g?(V=M[0].g,Z.push("ofs="+V)):V=0:Z.push("ofs="+V);let Ve=!0;for(let dt=0;dt<g;dt++){let Re=M[dt].g;const gt=M[dt].map;if(Re-=V,0>Re)V=Math.max(0,M[dt].g-100),Ve=!1;else try{ka(gt,Z,"req"+Re+"_")}catch{E&&E(gt)}}if(Ve){E=Z.join("&");break e}}}return a=a.i.splice(0,g),f.D=a,E}function Oi(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;Oe||ne(),ee||(Oe(),ee=!0),he.add(f,a),a.v=0}}function Os(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_n(I(a.Fa,a),Ra(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Na(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_n(I(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),In(this),Na(this))};function tl(a){a.A!=null&&(m.clearTimeout(a.A),a.A=null)}function Na(a){a.g=new wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=en(a.qa);Be(f,"RID","rpc"),Be(f,"SID",a.K),Be(f,"AID",a.T),Be(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Be(f,"TO",a.ja),Be(f,"TYPE","xmlhttp"),fr(a,f),a.m&&a.o&&Br(f,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=Vr(en(f)),g.m=null,g.P=!0,qo(g,a)}r.Za=function(){this.C!=null&&(this.C=null,In(this),Os(this),ot(19))};function Ls(a){a.C!=null&&(m.clearTimeout(a.C),a.C=null)}function Ms(a,f){var g=null;if(a.g==f){Ls(a),tl(a),a.g=null;var E=2}else if(Mt(a.h,f))g=f.D,va(a.h,f),E=1;else return;if(a.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var M=a.B;E=Es(),ht(E,new xs(E,g)),$n(a)}else Oi(a);else if(M=f.s,M==3||M==0&&0<f.X||!(E==1&&Mc(a,f)||E==2&&Os(a)))switch(g&&0<g.length&&(f=a.h,f.i=f.i.concat(g)),M){case 1:pr(a,5);break;case 4:pr(a,10);break;case 3:pr(a,6);break;default:pr(a,2)}}}function Ra(a,f){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*f}function pr(a,f){if(a.j.info("Error code "+f),f==2){var g=I(a.fb,a),E=a.Xa;const M=!E;E=new cr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Pi(E,"https"),Vr(E),M?Dc(E.toString(),g):Ia(E.toString(),g)}else ot(2);a.G=0,a.l&&a.l.sa(f),Aa(a),bs(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Aa(a){if(a.G=0,a.ka=[],a.l){const f=wa(a.h);(f.length!=0||a.i.length!=0)&&($(a.ka,f),$(a.ka,a.i),a.h.i.length=0,Y(a.i),a.i.length=0),a.l.ra()}}function Pa(a,f,g){var E=g instanceof cr?en(g):new cr(g);if(E.g!="")f&&(E.g=f+"."+E.g),Fr(E,E.s);else{var M=m.location;E=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var V=new cr(null);E&&Pi(V,E),f&&(V.g=f),M&&Fr(V,M),g&&(V.l=g),E=V}return g=a.D,f=a.ya,g&&f&&Be(E,g,f),Be(E,"VER",a.la),fr(a,E),E}function ba(a,f,g){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new et(new hr({eb:g})):new et(a.pa),f.Ha(a.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function nl(){}r=nl.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Bt(a,f){ct.call(this),this.g=new el(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!G(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!G(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new $r(this)}z(Bt,ct),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){It(this.g)},Bt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=jo(a),a=g);f.i.push(new _a(f.Ya++,a)),f.G==3&&$n(f)},Bt.prototype.N=function(){this.g.l=null,delete this.j,It(this.g),delete this.g,Bt.aa.N.call(this)};function Da(a){zn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const g in f){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}z(Da,zn);function Oa(){ws.call(this),this.status=1}z(Oa,ws);function $r(a){this.g=a}z($r,nl),$r.prototype.ua=function(){ht(this.g,"a")},$r.prototype.ta=function(a){ht(this.g,new Da(a))},$r.prototype.sa=function(a){ht(this.g,new Oa)},$r.prototype.ra=function(){ht(this.g,"b")},Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,$o.NO_ERROR=0,$o.TIMEOUT=8,$o.HTTP_ERROR=6,Ac.COMPLETE="complete",Vo.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",ct.prototype.listen=ct.prototype.K,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha}).apply(typeof Pu<"u"?Pu:typeof self<"u"?self:typeof window<"u"?window:{});const V_="@firebase/firestore",z_="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const So=new mc("@firebase/firestore");function Mn(r,...e){if(So.logLevel<=Fe.DEBUG){const t=e.map(tp);So.debug(`Firestore (${ca}): ${r}`,...t)}}function c0(r,...e){if(So.logLevel<=Fe.ERROR){const t=e.map(tp);So.error(`Firestore (${ca}): ${r}`,...t)}}function eT(r,...e){if(So.logLevel<=Fe.WARN){const t=e.map(tp);So.warn(`Firestore (${ca}): ${r}`,...t)}}function tp(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ta(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,h0(r,s,t)}function h0(r,e,t){let s=`FIRESTORE (${ca}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw c0(s),new Error(s)}function zl(r,e,t,s){let l="Unexpected state";typeof t=="string"?l=t:s=t,r||h0(e,l,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class be extends br{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class d0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ut.UNAUTHENTICATED))}shutdown(){}}class nT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rT{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){zl(this.o===void 0,42304);let s=this.i;const l=_=>this.i!==s?(s=this.i,t(_)):Promise.resolve();let u=new Hl;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Hl,e.enqueueRetryable(()=>l(this.currentUser))};const h=()=>{const _=u;e.enqueueRetryable(async()=>{await _.promise,await l(this.currentUser)})},m=_=>{Mn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(_=>m(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?m(_):(Mn("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Hl)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(Mn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(zl(typeof s.accessToken=="string",31837,{l:s}),new d0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return zl(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class iT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class sT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new iT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class H_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){zl(this.o===void 0,3512);const s=u=>{u.error!=null&&Mn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,Mn("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const l=u=>{Mn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>l(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?l(u):Mn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new H_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(zl(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new H_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function aT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=lT(40);for(let u=0;u<l.length;++u)s.length<20&&l[u]<t&&(s+=e.charAt(l[u]%62))}return s}}function Fn(r,e){return r<e?-1:r>e?1:0}function cT(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),l=e.codePointAt(t);if(s!==l){if(s<128&&l<128)return Fn(s,l);{const u=aT(),h=hT(u.encode(B_(r,t)),u.encode(B_(e,t)));return h!==0?h:Fn(s,l)}}t+=s>65535?2:1}return Fn(r.length,e.length)}function B_(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function hT(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Fn(r[t],e[t]);return Fn(r.length,e.length)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="__name__";class Xn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ta(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ta(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Xn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let l=0;l<s;l++){const u=Xn.compareSegments(e.get(l),t.get(l));if(u!==0)return u}return Fn(e.length,t.length)}static compareSegments(e,t){const s=Xn.isNumericId(e),l=Xn.isNumericId(t);return s&&!l?-1:!s&&l?1:s&&l?Xn.extractNumericId(e).compare(Xn.extractNumericId(t)):cT(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ep.fromString(e.substring(4,e.length-2))}}class bn extends Xn{construct(e,t,s){return new bn(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new be(Pe.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(l=>l.length>0))}return new bn(t)}static emptyPath(){return new bn([])}}const dT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yi extends Xn{construct(e,t,s){return new Yi(e,t,s)}static isValidIdentifier(e){return dT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yi.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===W_}static keyField(){return new Yi([W_])}static fromServerFormat(e){const t=[];let s="",l=0;const u=()=>{if(s.length===0)throw new be(Pe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;l<e.length;){const m=e[l];if(m==="\\"){if(l+1===e.length)throw new be(Pe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[l+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new be(Pe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=_,l+=2}else m==="`"?(h=!h,l++):m!=="."||h?(s+=m,l++):(u(),l++)}if(u(),h)throw new be(Pe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Yi(t)}static emptyPath(){return new Yi([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.path=e}static fromPath(e){return new Ji(bn.fromString(e))}static fromName(e){return new Ji(bn.fromString(e).popFirst(5))}static empty(){return new Ji(bn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&bn.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return bn.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ji(new bn(e.slice()))}}function fT(r,e,t,s){if(e===!0&&s===!0)throw new be(Pe.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function pT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function mT(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ta(12329,{type:typeof r})}function gT(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new be(Pe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mT(r);throw new be(Pe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function ut(r,e){const t={typeString:r};return e&&(t.value=e),t}function ha(r,e){if(!pT(r))throw new be(Pe.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const l=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(l&&typeof h!==l){t=`JSON field '${s}' must be a ${l}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new be(Pe.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=-62135596800,G_=1e6;class Jn{static now(){return Jn.fromMillis(Date.now())}static fromDate(e){return Jn.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*G_);return new Jn(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new be(Pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new be(Pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$_)throw new be(Pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new be(Pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/G_}_compareTo(e){return this.seconds===e.seconds?Fn(this.nanoseconds,e.nanoseconds):Fn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Jn._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ha(e,Jn._jsonSchema))return new Jn(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Jn._jsonSchemaVersion="firestore/timestamp/1.0",Jn._jsonSchema={type:ut("string",Jn._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};function _T(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class yT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(l){try{return atob(l)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new yT("Invalid base64 string: "+u):u}}(e);return new as(t)}static fromUint8Array(e){const t=function(l){let u="";for(let h=0;h<l.length;++h)u+=String.fromCharCode(l[h]);return u}(e);return new as(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let l=0;l<t.length;l++)s[l]=t.charCodeAt(l);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}as.EMPTY_BYTE_STRING=new as("");const Yd="(default)";class uc{constructor(e,t){this.projectId=e,this.database=t||Yd}static empty(){return new uc("","")}get isDefaultDatabase(){return this.database===Yd}isEqual(e){return e instanceof uc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,t=null,s=[],l=[],u=null,h="F",m=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=l,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=_,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function wT(r){return new vT(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q_,Ae;(Ae=q_||(q_={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ep([4294967295,4294967295],0);/**
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
 */const ET=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=1048576;function xd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t,s=1e3,l=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=l,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),l=Math.max(0,t-s);l>0&&Mn("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,l,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t,s,l,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=l,this.removalCallback=u,this.deferred=new Hl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,l,u){const h=Date.now()+s,m=new np(e,t,h,l,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new be(Pe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var K_,Y_;(Y_=K_||(K_={})).Fa="default",Y_.Cache="cache";/**
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
 */function CT(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="firestore.googleapis.com",X_=!0;class J_{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new be(Pe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=f0,this.ssl=X_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:X_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ET;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xT)throw new be(Pe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CT((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new be(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new be(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new be(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,l){return s.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class p0{constructor(e,t,s,l){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new J_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new be(Pe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new be(Pe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new J_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new tT;switch(s.type){case"firstParty":return new sT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new be(Pe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Q_.get(t);s&&(Mn("ComponentProvider","Removing Datastore"),Q_.delete(t),s.terminate())}(this),Promise.resolve()}}function IT(r,e,t,s={}){var l;r=gT(r,p0);const u=us(e),h=r._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),_=`${e}:${t}`;u&&(nf(`https://${_}`),rf("Firestore",!0)),h.host!==f0&&h.host!==_&&eT("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const w=Object.assign(Object.assign({},h),{host:_,ssl:u,emulatorOptions:s});if(!mi(w,m)&&(r._setSettings(w),s.mockUserToken)){let N,k;if(typeof s.mockUserToken=="string")N=s.mockUserToken,k=Ut.MOCK_USER;else{N=my(s.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new be(Pe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");k=new Ut(I)}r._authCredentials=new nT(new d0(N,k))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new rp(this.firestore,e,this._query)}}class Zn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ip(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zn(this.firestore,e,this._key)}toJSON(){return{type:Zn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ha(t,Zn._jsonSchema))return new Zn(e,s||null,new Ji(bn.fromString(t.referencePath)))}}Zn._jsonSchemaVersion="firestore/documentReference/1.0",Zn._jsonSchema={type:ut("string",Zn._jsonSchemaVersion),referencePath:ut("string")};class ip extends rp{constructor(e,t,s){super(e,t,wT(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zn(this.firestore,null,new Ji(e))}withConverter(e){return new ip(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="AsyncQueue";class ey{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ST(this,"async_queue_retry"),this.oc=()=>{const s=xd();s&&Mn(Z_,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=xd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=xd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Hl;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!_T(e))throw e;Mn(Z_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,c0("INTERNAL UNHANDLED ERROR: ",ty(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const l=np.createAndSchedule(this,e,t,s,u=>this.lc(u));return this.ec.push(l),l}ac(){this.tc&&ta(47125,{hc:ty(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ty(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class kT extends p0{constructor(e,t,s,l){super(e,t,s,l),this.type="firestore",this._queue=new ey,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ey(e),this._firestoreClient=void 0,await e}}}function TT(r,e){const t=typeof r=="object"?r:af(),s=typeof r=="string"?r:Yd,l=gc(t,"firestore").getImmediate({identifier:s});if(!l._initialized){const u=dy("firestore");u&&IT(l,...u)}return l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sr(as.fromBase64String(e))}catch(t){throw new be(Pe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sr(as.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ha(e,Sr._jsonSchema))return Sr.fromBase64String(e.bytes)}}Sr._jsonSchemaVersion="firestore/bytes/1.0",Sr._jsonSchema={type:ut("string",Sr._jsonSchemaVersion),bytes:ut("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new be(Pe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yi(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new be(Pe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new be(Pe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fn(this._lat,e._lat)||Fn(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:es._jsonSchemaVersion}}static fromJSON(e){if(ha(e,es._jsonSchema))return new es(e.latitude,e.longitude)}}es._jsonSchemaVersion="firestore/geoPoint/1.0",es._jsonSchema={type:ut("string",es._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
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
 */class ts{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,l){if(s.length!==l.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==l[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ts._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ha(e,ts._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ts(e.vectorValues);throw new be(Pe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ts._jsonSchemaVersion="firestore/vectorValue/1.0",ts._jsonSchema={type:ut("string",ts._jsonSchemaVersion),vectorValues:ut("object")};const NT=new RegExp("[~\\*/\\[\\]]");function RT(r,e,t){if(e.search(NT)>=0)throw ny(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new m0(...e.split("."))._internalPath}catch{throw ny(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function ny(r,e,t,s,l){let u=`Function ${e}() called with invalid data`;u+=". ";let h="";return new be(Pe.INVALID_ARGUMENT,u+r+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,t,s,l,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=l,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Zn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(_0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class AT extends g0{data(){return super.data()}}function _0(r,e){return typeof e=="string"?RT(r,e):e instanceof m0?e._internalPath:e._delegate._internalPath}class bu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class go extends g0{constructor(e,t,s,l,u,h){super(e,t,s,l,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Uu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(_0("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new be(Pe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=go._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}go._jsonSchemaVersion="firestore/documentSnapshot/1.0",go._jsonSchema={type:ut("string",go._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class Uu extends go{data(e={}){return super.data(e)}}class Bl{constructor(e,t,s,l){this._firestore=e,this._userDataWriter=t,this._snapshot=l,this.metadata=new bu(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Uu(this._firestore,this._userDataWriter,s.key,s,new bu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new be(Pe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(l,u){if(l._snapshot.oldDocs.isEmpty()){let h=0;return l._snapshot.docChanges.map(m=>{const _=new Uu(l._firestore,l._userDataWriter,m.doc.key,m.doc,new bu(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);return m.doc,{type:"added",doc:_,oldIndex:-1,newIndex:h++}})}{let h=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const _=new Uu(l._firestore,l._userDataWriter,m.doc.key,m.doc,new bu(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);let w=-1,N=-1;return m.type!==0&&(w=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),N=h.indexOf(m.doc.key)),{type:PT(m.type),doc:_,oldIndex:w,newIndex:N}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new be(Pe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Bl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=uT.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],l=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),l.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function PT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ta(61501,{type:r})}}Bl._jsonSchemaVersion="firestore/querySnapshot/1.0",Bl._jsonSchema={type:ut("string",Bl._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};(function(e,t=!0){(function(l){ca=l})(cs),ns(new gi("firestore",(s,{instanceIdentifier:l,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new kT(new rT(s.getProvider("auth-internal")),new oT(h,s.getProvider("app-check-internal")),function(w,N){if(!Object.prototype.hasOwnProperty.apply(w.options,["projectId"]))throw new be(Pe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uc(w.options.projectId,N)}(h,l),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),er(V_,z_,e),er(V_,z_,"esm2017")})();const bT={apiKey:"AIzaSyCTA3NZsYoSeGskrIL_2isF2aCqLpEsRYc",authDomain:"rbgh-app.firebaseapp.com",databaseURL:"https://rbgh-app-default-rtdb.europe-west1.firebasedatabase.app",projectId:"rbgh-app",storageBucket:"rbgh-app.firebasestorage.app",messagingSenderId:"955092745966",appId:"1:955092745966:web:237adaa1a37752a93ebdff",measurementId:"G-004FZK6EXT"},sp=wy(bT),Sd=LS(sp),Cd=Xk(sp);TT(sp);const DT=Vw(r=>{const e=localStorage.getItem("user"),t=e?JSON.parse(e):null;return{user:t,isLoading:!1,error:null,isAuthenticated:!!t,login:async({emailOrUsername:s,password:l,rememberMe:u})=>{r({isLoading:!0,error:null});try{const m=(await xx(Sd,s,l)).user,_={id:m.uid,email:m.email||"",username:m.displayName||"",name:m.displayName||""};u&&localStorage.setItem("user",JSON.stringify(_)),r({user:_,isAuthenticated:!0,isLoading:!1})}catch(h){r({error:h.message||"Login failed",isLoading:!1})}},logout:async()=>{await Sd.signOut(),localStorage.removeItem("user"),r({user:null,isAuthenticated:!1,error:null})},forgotPassword:async s=>{r({isLoading:!0,error:null});try{await Ex(Sd,s),r({isLoading:!1})}catch(l){r({error:l.message||"Failed to send reset email",isLoading:!1})}},clearError:()=>r({error:null})}}),da=()=>{const{user:r,isLoading:e,error:t,isAuthenticated:s,login:l,logout:u,forgotPassword:h,clearError:m}=DT();return{user:r,isLoading:e,error:t,isAuthenticated:s,login:l,logout:u,forgotPassword:h,clearError:m}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ze=(r,e)=>{const t=ue.forwardRef(({color:s="currentColor",size:l=24,strokeWidth:u=2,absoluteStrokeWidth:h,className:m="",children:_,...w},N)=>ue.createElement("svg",{ref:N,...OT,width:l,height:l,stroke:s,strokeWidth:h?Number(u)*24/Number(l):u,className:["lucide",`lucide-${LT(r)}`,m].join(" "),...w},[...e.map(([k,I])=>ue.createElement(k,I)),...Array.isArray(_)?_:[_]]));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=ze("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=ze("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=ze("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=ze("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=ze("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=ze("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=ze("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=ze("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=ze("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=ze("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=ze("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=ze("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=ze("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=ze("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=ze("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=ze("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=ze("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=ze("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=ze("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=ze("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=ze("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=ze("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=ze("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=ze("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=ze("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=ze("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=ze("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=ze("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),YT=({size:r="md",className:e=""})=>{const t={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8"};return y.jsx(WT,{className:`animate-spin ${t[r]} ${e}`})},Ke=({variant:r="primary",size:e="md",loading:t=!1,children:s,className:l="",disabled:u,...h})=>{const m="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",_={primary:"bg-primary text-on-primary hover:bg-primary focus:ring-primary  shadow-md hover:shadow-lg",secondary:"bg-secondary text-on-secondary hover:bg-secondary focus:ring-secondary  shadow-md hover:shadow-lg",outline:"border border-default text-default hover:bg-subtle focus:ring-primary",ghost:"text-muted hover:text-default hover:bg-subtle focus:ring-default"},w={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"};return y.jsxs("button",{className:`${m} ${_[r]} ${w[e]} ${l}`,disabled:u||t,...h,children:[t&&y.jsx(YT,{size:"sm",className:"mr-2"}),s]})},dc=ue.forwardRef(({label:r,error:e,icon:t,className:s="",...l},u)=>y.jsxs("div",{className:"space-y-1",children:[r&&y.jsx("label",{className:"block text-sm font-medium text-default text-subtle",children:r}),y.jsxs("div",{className:"relative",children:[t&&y.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:y.jsx("div",{className:"text-muted ",children:t})}),y.jsx("input",{ref:u,className:`
              block w-full rounded-lg border border-default bg-bg bg-subtle px-3 py-2 text-default  placeholder-gray-500 
              focus:border-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500  focus:ring-offset-1 
              disabled:bg-gray-50  disabled:text-gray-500  transition-all duration-200
              ${t?"pl-10":""}
              ${e?"border-red-500  focus:border-red-500 focus:ring-red-500":""}
              ${s}
            `,...l})]}),e&&y.jsx("p",{className:"text-sm text-red-600  mt-1",children:e})]}));dc.displayName="Input";const lp=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),QT=r=>r.length>=3&&/^[a-zA-Z0-9_]+$/.test(r),XT=r=>r.length>=6,sy=r=>lp(r)?"email":"username",JT=({onForgotPassword:r})=>{const[e,t]=ue.useState({emailOrUsername:"",password:"",rememberMe:!1}),[s,l]=ue.useState({}),[u,h]=ue.useState(!1),[m,_]=ue.useState({}),{login:w,isLoading:N,error:k,clearError:I}=da();ue.useEffect(()=>{if(k){const G=setTimeout(()=>{I()},5e3);return()=>clearTimeout(G)}},[k,I]);const H=()=>{const G={};if(!e.emailOrUsername.trim())G.emailOrUsername="Email or username is required";else{const le=sy(e.emailOrUsername);le==="email"&&!lp(e.emailOrUsername)?G.emailOrUsername="Please enter a valid email address":le==="username"&&!QT(e.emailOrUsername)&&(G.emailOrUsername="Username must be at least 3 characters and contain only letters, numbers, and underscores")}return e.password?XT(e.password)||(G.password="Password must be at least 6 characters"):G.password="Password is required",l(G),Object.keys(G).length===0},z=async G=>{G.preventDefault(),H()&&await w(e)},Y=(G,le)=>{t(ce=>({...ce,[G]:le})),m[G]&&l(ce=>({...ce,[G]:""}))},$=G=>{_(le=>({...le,[G]:!0})),H()},_e=sy(e.emailOrUsername)==="email"?y.jsx(Jd,{size:20}):y.jsx(KT,{size:20});return y.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center p-3 sm:p-4",children:y.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:y.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-default",children:y.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[y.jsxs("div",{className:"text-center mb-8",children:[y.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4",children:y.jsx(ry,{className:"w-8 h-8 text-on-primary"})}),y.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-default mb-2",children:"Welcome Back"}),y.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Sign in to your account to continue"})]}),k&&y.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-gradient-theme border border-error rounded-lg flex items-center space-x-2 text-error",children:[y.jsx(y0,{size:20}),y.jsx("span",{className:"text-sm font-medium flex-1",children:k})]}),y.jsxs("form",{onSubmit:z,className:"space-y-5 sm:space-y-6",children:[y.jsx(dc,{label:"Email or Username",type:"text",placeholder:"Enter your email or username",value:e.emailOrUsername,onChange:G=>Y("emailOrUsername",G.target.value),onBlur:()=>$("emailOrUsername"),error:s.emailOrUsername,icon:_e,disabled:N}),y.jsxs("div",{className:"relative",children:[y.jsx(dc,{label:"Password",type:u?"text":"password",placeholder:"Enter your password",value:e.password,onChange:G=>Y("password",G.target.value),onBlur:()=>$("password"),error:s.password,icon:y.jsx(ry,{size:20}),disabled:N}),y.jsx("button",{type:"button",className:"absolute right-3 top-8 text-muted hover:text-subtle transition-colors",onClick:()=>h(!u),children:u?y.jsx(HT,{size:20}):y.jsx(op,{size:20})})]}),y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("label",{className:"flex items-center space-x-2",children:[y.jsx("input",{type:"checkbox",checked:e.rememberMe,onChange:G=>Y("rememberMe",G.target.checked.toString()),className:"w-4 h-4 text-primary border-default rounded focus:ring-primary"}),y.jsx("span",{className:"text-sm text-subtle",children:"Remember me"})]}),y.jsx("button",{type:"button",onClick:r,className:"text-sm text-subtle hover:text-default font-medium transition-colors",children:"Forgot password?"})]}),y.jsxs(Ke,{type:"submit",loading:N,className:"w-full",size:"lg",children:["Sign In",!N&&y.jsx(MT,{className:"ml-2 w-5 h-5"})]})]})]})})})})},ZT=({onBackToLogin:r})=>{const[e,t]=ue.useState(""),[s,l]=ue.useState(""),[u,h]=ue.useState(!1),[m,_]=ue.useState(!1),{forgotPassword:w,isLoading:N}=da(),k=()=>e.trim()?lp(e)?(l(""),!0):(l("Please enter a valid email address"),!1):(l("Email is required"),!1),I=async Y=>{Y.preventDefault(),k()&&(await w(e),h(!0))},H=Y=>{t(Y),m&&l("")},z=()=>{_(!0),k()};return u?y.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center p-3 sm:p-4",children:y.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:y.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-default",children:y.jsxs("div",{className:"px-6 sm:px-8 py-8 sm:py-12 text-center",children:[y.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-2xl mb-6",children:y.jsx(UT,{className:"w-8 h-8 text-success"})}),y.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default mb-4",children:"Check Your Email"}),y.jsxs("p",{className:"text-subtle mb-8 leading-relaxed text-sm sm:text-base",children:["We've sent a password reset link to"," ",y.jsx("span",{className:"font-medium text-default break-all",children:e}),". Please check your email and follow the instructions to reset your password."]}),y.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[y.jsxs(Ke,{onClick:r,variant:"primary",className:"w-full",size:"lg",children:[y.jsx(Qd,{className:"mr-2 w-5 h-5"}),"Back to Login"]}),y.jsx(Ke,{onClick:()=>h(!1),variant:"ghost",className:"w-full",children:"Didn't receive the email?"})]})]})})})}):y.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center p-3 sm:p-4",children:y.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:y.jsx("div",{className:"bg-bg rounded-2xl shadow-xl overflow-hidden border border-default",children:y.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[y.jsxs("div",{className:"text-center mb-8",children:[y.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4",children:y.jsx(Jd,{className:"w-8 h-8 text-on-primary"})}),y.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-default mb-2",children:"Reset Password"}),y.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Enter your email address and we'll send you a link to reset your password"})]}),s&&y.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-gradient-theme border border-error rounded-lg flex items-center space-x-2 text-error",children:[y.jsx(y0,{size:20}),y.jsx("span",{className:"text-sm font-medium flex-1",children:s})]}),y.jsxs("form",{onSubmit:I,className:"space-y-5 sm:space-y-6",children:[y.jsx(dc,{label:"Email Address",type:"email",placeholder:"Enter your email address",value:e,onChange:Y=>H(Y.target.value),onBlur:z,error:s,icon:y.jsx(Jd,{size:20}),disabled:N}),y.jsx(Ke,{type:"submit",loading:N,className:"w-full",size:"lg",children:"Send Reset Link"})]}),y.jsx("div",{className:"mt-5 sm:mt-6 text-center",children:y.jsxs("button",{type:"button",onClick:r,className:"inline-flex items-center text-sm text-subtle hover:text-default font-medium transition-colors",children:[y.jsx(Qd,{className:"mr-2 w-4 h-4"}),"Back to Login"]})})]})})})})},e2=({isOpen:r,onClose:e})=>{const t="https://linktr.ee/esports_pxl",s=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(t)}`;return r?y.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:y.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200",children:[y.jsxs("div",{className:"flex items-center justify-between mb-6",children:[y.jsx("h2",{className:"text-xl font-bold text-default",children:"QR Code"}),y.jsx("button",{onClick:e,className:"text-subtle hover:text-default transition-colors","aria-label":"Close modal",children:y.jsx(Nc,{className:"w-6 h-6"})})]}),y.jsxs("div",{className:"text-center space-y-4",children:[y.jsxs("div",{className:"bg-bg p-4 rounded-xl border border-default shadow-sm hover:shadow-md inline-block",children:[y.jsx("img",{src:s,alt:"QR Code for esports_pxl",className:"w-64 h-64 mx-auto",onError:l=>{const u=l.target;u.style.display="none",u.nextElementSibling?.classList.remove("hidden")}}),y.jsx("div",{className:"hidden w-64 h-64 bg-subtle rounded-lg flex items-center justify-center",children:y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"text-4xl mb-2",children:"📱"}),y.jsx("p",{className:"text-sm text-subtle",children:"QR Code"})]})})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("p",{className:"text-sm text-subtle",children:"Scan to visit:"}),y.jsx("div",{className:"bg-gray-50 bg-subtle rounded-lg p-3",children:y.jsx("p",{className:"text-sm font-mono text-default  break-all",children:t})})]}),y.jsxs("div",{className:"flex space-x-3 pt-4",children:[y.jsx(Ke,{onClick:e,variant:"outline",className:"flex-1",children:"Close"}),y.jsxs(Ke,{onClick:()=>window.open(t,"_blank"),className:"flex-1",children:[y.jsx(zT,{className:"w-4 h-4 mr-2"}),"Visit"]})]})]}),y.jsx("div",{className:"mt-6 pt-4 border-t border-default shadow-sm hover:shadow-md ",children:y.jsx("p",{className:"text-xs text-gray-500  text-center",children:"Point your camera at the QR code to open the link"})})]})}):null},t2=({onAddStock:r,onShowLog:e,onTakeItem:t})=>{const[s,l]=ue.useState(!1),[u,h]=ue.useState(!1),[m,_]=ue.useState({x:20,y:20}),[w,N]=ue.useState({x:0,y:0}),k=ue.useRef(null),I=$=>{const _e="touches"in $?$.touches[0].clientX:$.clientX,G="touches"in $?$.touches[0].clientY:$.clientY;h(!0),N({x:_e-m.x,y:G-m.y})},H=$=>{if(!u)return;const _e="touches"in $?$.touches[0].clientX:$.clientX,G="touches"in $?$.touches[0].clientY:$.clientY,le=_e-w.x,ce=G-w.y,ye=window.innerWidth-64,B=window.innerHeight-64;_({x:Math.max(0,Math.min(le,ye)),y:Math.max(0,Math.min(ce,B))})},z=()=>{h(!1)};ue.useEffect(()=>{if(u)return document.addEventListener("mousemove",H),document.addEventListener("mouseup",z),document.addEventListener("touchmove",H),document.addEventListener("touchend",z),()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",z),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",z)}},[u,w]),ue.useEffect(()=>{const $=_e=>{k.current&&!k.current.contains(_e.target)&&l(!1)};return document.addEventListener("mousedown",$),()=>document.removeEventListener("mousedown",$)},[]);const Y=()=>{u||l(!s)};return y.jsx("div",{ref:k,className:"fixed z-50 select-none",style:{right:`${m.x}px`,bottom:`${m.y}px`},children:y.jsxs("div",{className:"relative",children:[s&&y.jsxs("div",{className:"absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-200",children:[y.jsx(Ke,{onClick:e,className:"w-12 h-12 rounded-full shadow-lg bg-purple-500 hover:bg-purple-600 text-on-primary p-0","aria-label":"Show log",children:y.jsx(op,{className:"w-6 h-6"})}),y.jsx(Ke,{onClick:r,className:"w-12 h-12 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-on-primary p-0","aria-label":"Add stock",children:y.jsx(Zi,{className:"w-6 h-6"})}),y.jsx(Ke,{onClick:t,className:"w-12 h-12 rounded-full shadow-lg bg-primary hover:bg-blue-600 text-on-primary p-0","aria-label":"Take item",children:y.jsx(ao,{className:"w-6 h-6"})})]}),y.jsx("button",{onMouseDown:I,onTouchStart:I,onClick:Y,className:`w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-on-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-orange-500/30 ${u?"cursor-grabbing scale-110":"cursor-grab hover:scale-105"}`,"aria-label":s?"Close fridge menu":"Open fridge menu",children:y.jsx("div",{className:`transition-transform duration-200 ${s?"rotate-45":""}`,children:y.jsx(Zi,{className:"w-7 h-7"})})})]})})},n2=({onBack:r})=>{const[e,t]=ue.useState([{id:"1",name:"RedBull Energy Drink",stock:24,lastUpdated:new Date}]),[s,l]=ue.useState([{id:"1",action:"take",amount:2,user:"Alice Johnson",timestamp:new Date(Date.now()-30*60*1e3),itemName:"RedBull Energy Drink"},{id:"2",action:"add",amount:12,user:"Bob Smith",timestamp:new Date(Date.now()-2*60*60*1e3),itemName:"RedBull Energy Drink"},{id:"3",action:"take",amount:1,user:"Carol Davis",timestamp:new Date(Date.now()-4*60*60*1e3),itemName:"RedBull Energy Drink"}]),[u,h]=ue.useState(!1),[m,_]=ue.useState(!1),[w,N]=ue.useState(!1),[k,I]=ue.useState(1),[H,z]=ue.useState(1),Y=G=>{const ce=Math.floor((new Date().getTime()-G.getTime())/(1e3*60));if(ce<1)return"Just now";if(ce<60)return`${ce}m ago`;const ye=Math.floor(ce/60);return ye<24?`${ye}h ago`:`${Math.floor(ye/24)}d ago`},$=()=>{const G=e[0].stock;if(k>G)return;const le=G-k;t(ye=>ye.map(B=>B.id==="1"?{...B,stock:le,lastUpdated:new Date}:B));const ce={id:Date.now().toString(),action:"take",amount:k,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};l(ye=>[ce,...ye]),h(!1),I(1)},_e=()=>{const le=e[0].stock+H;t(ye=>ye.map(B=>B.id==="1"?{...B,stock:le,lastUpdated:new Date}:B));const ce={id:Date.now().toString(),action:"add",amount:H,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};l(ye=>[ce,...ye]),_(!1),z(1)};return y.jsxs("div",{className:"min-h-screen bg-subtle pb-20",children:[y.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:y.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:y.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:y.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[y.jsx(Ke,{onClick:r,variant:"ghost",size:"sm",children:y.jsx(Qd,{className:"w-5 h-5"})}),y.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center",children:y.jsx(w0,{className:"w-6 h-6 text-on-primary"})}),y.jsxs("div",{className:"min-w-0 flex-1",children:[y.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:"Fridge"}),y.jsx("p",{className:"text-subtle text-sm sm:text-base",children:"Stock management"})]})]})})})}),y.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[y.jsx("div",{className:"grid grid-cols-1 gap-4 mb-6",children:e.map(G=>y.jsx("div",{className:"bg-bg rounded-xl p-6 border border-default shadow-sm",children:y.jsxs("div",{className:"flex items-center space-x-4",children:[y.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center",children:y.jsx(iy,{className:"w-8 h-8 text-on-primary"})}),y.jsxs("div",{className:"flex-1",children:[y.jsx("h3",{className:"text-lg font-semibold text-default  mb-1",children:G.name}),y.jsxs("div",{className:"flex items-center space-x-4 text-sm text-subtle",children:[y.jsxs("div",{className:"flex items-center space-x-1",children:[y.jsx(iy,{className:"w-4 h-4"}),y.jsxs("span",{children:[G.stock," in stock"]})]}),y.jsxs("div",{className:"flex items-center space-x-1",children:[y.jsx(cc,{className:"w-4 h-4"}),y.jsxs("span",{children:["Updated ",Y(G.lastUpdated)]})]})]})]}),y.jsxs("div",{className:"text-right",children:[y.jsx("div",{className:"text-2xl font-bold text-default ",children:G.stock}),y.jsx("div",{className:"text-sm text-gray-500 ",children:"units"})]})]})},G.id))}),y.jsxs("div",{className:"bg-bg rounded-xl border border-default",children:[y.jsx("div",{className:"p-4 border-b border-default",children:y.jsx("h2",{className:"text-lg font-semibold text-default ",children:"Recent Activity"})}),y.jsx("div",{className:"divide-y divide-gray-200 ",children:s.slice(0,5).map(G=>y.jsx("div",{className:"p-4",children:y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${G.action==="take"?"bg-red-100 ":"bg-green-100 "}`,children:G.action==="take"?y.jsx(ao,{className:`w-4 h-4 ${G.action==="take"?"text-red-600 ":"text-green-600 "}`}):y.jsx(Zi,{className:"w-4 h-4 text-green-600 "})}),y.jsxs("div",{className:"flex-1",children:[y.jsxs("p",{className:"text-sm font-medium text-default ",children:[G.user," ",G.action==="take"?"took":"added"," ",G.amount," ",G.itemName]}),y.jsx("p",{className:"text-xs text-gray-500 ",children:Y(G.timestamp)})]}),y.jsxs("div",{className:`text-sm font-medium ${G.action==="take"?"text-red-600 ":"text-green-600 "}`,children:[G.action==="take"?"-":"+",G.amount]})]})},G.id))})]})]}),y.jsx(t2,{onTakeItem:()=>h(!0),onAddStock:()=>_(!0),onShowLog:()=>N(!0)}),u&&y.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:y.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[y.jsx("h2",{className:"text-xl font-bold text-default  mb-4",children:"Take from Stock"}),y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-2",children:"Amount to take"}),y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx(Ke,{onClick:()=>I(Math.max(1,k-1)),variant:"outline",size:"sm",children:y.jsx(ao,{className:"w-4 h-4"})}),y.jsx("span",{className:"text-lg font-semibold text-default  min-w-[3rem] text-center",children:k}),y.jsx(Ke,{onClick:()=>I(Math.min(e[0].stock,k+1)),variant:"outline",size:"sm",children:y.jsx(Zi,{className:"w-4 h-4"})})]}),y.jsxs("p",{className:"text-xs text-gray-500  mt-1",children:["Available: ",e[0].stock," units"]})]}),y.jsxs("div",{className:"flex space-x-3",children:[y.jsx(Ke,{onClick:()=>h(!1),variant:"outline",className:"flex-1",children:"Cancel"}),y.jsx(Ke,{onClick:$,className:"flex-1",children:"Take"})]})]})]})}),m&&y.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:y.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[y.jsx("h2",{className:"text-xl font-bold text-default  mb-4",children:"Add to Stock"}),y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-2",children:"Amount to add"}),y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx(Ke,{onClick:()=>z(Math.max(1,H-1)),variant:"outline",size:"sm",children:y.jsx(ao,{className:"w-4 h-4"})}),y.jsx("span",{className:"text-lg font-semibold text-default  min-w-[3rem] text-center",children:H}),y.jsx(Ke,{onClick:()=>z(H+1),variant:"outline",size:"sm",children:y.jsx(Zi,{className:"w-4 h-4"})})]})]}),y.jsxs("div",{className:"flex space-x-3",children:[y.jsx(Ke,{onClick:()=>_(!1),variant:"outline",className:"flex-1",children:"Cancel"}),y.jsx(Ke,{onClick:_e,className:"flex-1",children:"Add"})]})]})]})}),w&&y.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:y.jsxs("div",{className:"bg-bg rounded-2xl p-6 w-full max-w-md shadow-2xl max-h-[80vh] overflow-hidden",children:[y.jsxs("div",{className:"flex items-center justify-between mb-4",children:[y.jsx("h2",{className:"text-xl font-bold text-default ",children:"Activity Log"}),y.jsx(Ke,{onClick:()=>N(!1),variant:"ghost",size:"sm",children:y.jsx(Nc,{className:"w-5 h-5"})})]}),y.jsx("div",{className:"overflow-y-auto max-h-96 space-y-3",children:s.map(G=>y.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-50 bg-subtle rounded-lg",children:[y.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${G.action==="take"?"bg-red-100 ":"bg-green-100 "}`,children:G.action==="take"?y.jsx(ao,{className:"w-4 h-4 text-red-600 "}):y.jsx(Zi,{className:"w-4 h-4 text-green-600 "})}),y.jsxs("div",{className:"flex-1",children:[y.jsx("p",{className:"text-sm font-medium text-default ",children:G.user}),y.jsxs("p",{className:"text-xs text-subtle",children:[G.action==="take"?"Took":"Added"," ",G.amount," units"]}),y.jsxs("p",{className:"text-xs text-gray-500 ",children:[G.timestamp.toLocaleDateString()," ",G.timestamp.toLocaleTimeString()]})]}),y.jsxs("div",{className:`text-sm font-medium ${G.action==="take"?"text-red-600 ":"text-green-600 "}`,children:[G.action==="take"?"-":"+",G.amount]})]},G.id))})]})})]})},r2=({user:r,onClose:e})=>{const t=ue.useRef(null);return ue.useEffect(()=>{const s=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[e]),y.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4",children:y.jsxs("div",{ref:t,className:"bg-bg rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg p-6 relative border border-default",children:[y.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-subtle hover:text-default",children:y.jsx(Nc,{className:"w-5 h-5"})}),y.jsx("div",{className:"flex justify-center -mt-16",children:y.jsx("img",{src:r.avatar,alt:`${r.name}'s avatar`,onError:s=>{s.currentTarget.onerror=null,s.currentTarget.style.display="none";const l=s.currentTarget.parentElement;if(l&&!l.querySelector(".fallback-avatar")){const u=document.createElement("span");u.className="fallback-avatar flex items-center justify-center w-32 h-32 rounded-full bg-subtle border-4 border-bg shadow-lg",u.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146"/></svg>',l.appendChild(u)}},className:"w-32 h-32 rounded-full border-4 border-bg shadow-lg"})}),y.jsx("h2",{className:"text-xl font-bold text-default mt-4 text-center",children:r.name}),y.jsxs("div",{className:"space-y-2 mt-4",children:[y.jsxs("p",{className:"text-sm text-subtle",children:[y.jsx("strong",{children:"Username:"})," ",r.username]}),y.jsxs("p",{className:"text-sm text-subtle",children:[y.jsx("strong",{children:"Last Check-in:"})," ",r.location," at ",r.checkedInAt.toLocaleString()]}),y.jsxs("p",{className:"text-sm text-subtle",children:[y.jsx("strong",{children:"Email:"})," ",r.email||"N/A"]}),y.jsxs("p",{className:"text-sm text-subtle",children:[y.jsx("strong",{children:"Phone:"})," ",r.phoneNumber||"N/A"]}),y.jsxs("p",{className:"text-sm text-subtle",children:[y.jsx("strong",{children:"Discord:"})," ",r.discordUsername||"N/A"]}),y.jsxs("p",{className:"text-sm text-subtle",children:[y.jsx("strong",{children:"Friends:"})," ",r.friendCount||0]})]})]})})},i2=({onCheckIn:r,onCheckOut:e,onShowQR:t,onOpenFridge:s,isCheckedIn:l})=>{const[u,h]=ue.useState(!1),[m,_]=ue.useState("PXL"),[w,N]=ue.useState(0),k=[{id:"PXL",name:"PXL",color:"bg-location-pxl"},{id:"RBGH",name:"RBGH",color:"bg-location-rbgh"},{id:"STREAM",name:"Streaming room",color:"bg-location-stream"}],I=()=>{const z=Array(w).fill("").map((Y,$)=>`friend_${$+1}`);r(m,z),h(!1)},H=()=>{const z=Array(w).fill("").map((Y,$)=>`friend_${$+1}`);r(m,z)};return y.jsxs(y.Fragment,{children:[!u&&y.jsx("button",{onClick:()=>h(!0),className:"fixed left-4 bottom-20 z-50 bg-primary hover:bg-primary text-on-primary p-3 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-primary","aria-label":"Open sidebar",children:y.jsx($T,{className:"w-6 h-6"})}),y.jsx("div",{className:`fixed top-16 bottom-0 left-0 z-40 bg-bg shadow-lg transform ${u?"translate-x-0":"-translate-x-full"} transition-transform duration-300 w-full md:w-64`,style:{maxHeight:"calc(100vh - 4rem)"},children:y.jsxs("div",{className:"p-6 space-y-6 h-full overflow-y-auto",children:[u&&y.jsx("button",{onClick:()=>h(!1),className:"absolute top-4 right-4 z-50 bg-primary hover:bg-primary text-on-primary p-2 rounded-full shadow focus:outline-none focus:ring-4 focus:ring-primary","aria-label":"Close sidebar",children:y.jsx(Nc,{className:"w-6 h-6"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-semibold text-default  mt-6",children:l?"Change Location":"Check In"}),y.jsxs("div",{className:"mt-4",children:[y.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-3",children:l?"Select a new location to change":"Choose Location"}),y.jsx("div",{className:"space-y-2",children:k.map(z=>y.jsxs("button",{onClick:()=>_(z.id),className:`w-full p-3 rounded-lg border-2 transition-all text-left flex items-center space-x-3
                      ${m===z.id?"bg-subtle border-secondary text-default":"border-default bg-subtle text-default shadow-sm hover:shadow-md hover:border-secondary"}`,children:[y.jsx("div",{className:`w-4 h-4 rounded-full ${z.color}`}),y.jsx("span",{className:"font-medium",children:z.name})]},z.id))})]}),y.jsxs("div",{className:"mt-6",children:[y.jsx("label",{className:"block text-sm font-medium text-default text-subtle mb-3",children:l?"Update friend count":"Check in with friends"}),y.jsxs("div",{className:"flex items-center space-x-4",children:[y.jsx("button",{onClick:()=>N(z=>Math.max(z-1,0)),className:"w-10 h-10 bg-subtle bg-subtle hover:bg-subtle  flex items-center justify-center transition-colors","aria-label":"Decrease friend count",children:y.jsx(ao,{className:"w-5 h-5 text-subtle"})}),y.jsxs("div",{className:"flex items-center space-x-2 min-w-0 flex-1",children:[y.jsx(hc,{className:"w-5 h-5 text-subtle"}),y.jsx("span",{className:"text-lg font-semibold text-default",children:w}),y.jsxs("span",{className:"text-sm text-subtle",children:["friend",w!==1?"s":""]})]}),y.jsx("button",{onClick:()=>N(z=>Math.min(z+1,10)),className:"w-10 h-10 bg-subtle bg-subtle hover:bg-subtle  flex items-center justify-center transition-colors","aria-label":"Increase friend count",children:y.jsx(Zi,{className:"w-5 h-5 text-subtle"})})]})]}),l&&y.jsx("div",{className:"mt-6",children:y.jsx(Ke,{onClick:I,className:"w-full bg-primary hover:bg-secondary text-on-primary p-3 rounded-lg",children:"Update"})}),!l&&y.jsx("div",{className:"mt-6",children:y.jsx(Ke,{onClick:H,className:"w-full bg-secondary hover:bg-secondary text-on-primary p-3 rounded-lg",children:"Check In"})}),l&&y.jsx("div",{className:"mt-6",children:y.jsxs(Ke,{onClick:()=>{e(),h(!1)},className:"w-full bg-primary hover:bg-secondary text-on-primary p-3 rounded-lg",children:[y.jsx(Xd,{className:"w-5 h-5 mr-2"}),"Check Out"]})}),y.jsxs("div",{className:"mt-8 flex flex-row space-x-3",children:[y.jsxs("button",{onClick:s,className:"flex-1 flex items-center justify-center p-3 rounded-lg bg-primary hover:bg-secondary text-on-primary transition-all","aria-label":"Open Fridge",children:[y.jsx(w0,{className:"w-5 h-5 mr-2"}),"Fridge"]}),y.jsxs("button",{onClick:t,className:"flex-1 flex items-center justify-center p-3 rounded-lg bg-primary hover:bg-secondary text-on-primary transition-all","aria-label":"Show QR Code",children:[y.jsx(qT,{className:"w-5 h-5 mr-2"}),"QR"]})]})]})]})})]})},oy="https://api.boelguard.me/",s2=({type:r,message:e})=>y.jsxs("div",{className:`fixed left-1/2 top-0 z-50 w-full max-w-xs sm:max-w-sm -translate-x-1/2 mt-6
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
      `})]});function o2(r){return r.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")}const l2=()=>{const{user:r,logout:e}=da(),[t,s]=ue.useState([]),[l,u]=ue.useState("ALL"),[h,m]=ue.useState(!1),[_,w]=ue.useState(!1),[N,k]=ue.useState(null),[I,H]=ue.useState(null),z=[{id:"RBGH",name:"Red Bull",color:"bg-location-rbgh"},{id:"PXL",name:"PXL",color:"bg-location-pxl"},{id:"STREAM",name:"Streaming room",color:"bg-location-stream"}];ue.useEffect(()=>{const x=localStorage.getItem("checkedInUsers");if(x)try{const A=JSON.parse(x);s(A.map(O=>({...O,checkedInAt:new Date(O.checkedInAt)})))}catch{}const C=Ed(Cd,"users"),R=Bk(C,A=>{const O=A.val();if(!O){s([]),localStorage.setItem("checkedInUsers",JSON.stringify([]));return}const T=Object.entries(O).filter(([we,ve])=>ve.checkInStatus===!0).map(([we,ve])=>({id:we,username:ve.username,name:o2(`${ve.firstname} ${ve.lastname}`),location:ve.checkedInWhere||"Unknown",checkedInAt:new Date(ve.checkedInAt??Date.now()),isResponsible:ve.isResponsible||!1,friendCount:ve.friendCount||0,activeAssignment:ve.activeAssignment||!1,discordUsername:ve.discordUsername||"",email:ve.email||"",phoneNumber:ve.phoneNumber||"",avatar:`${oy}assets/headshot?name=${ve.username}.jpg`}));T.sort((we,ve)=>we.isResponsible&&!ve.isResponsible?-1:!we.isResponsible&&ve.isResponsible?1:we.username.localeCompare(ve.username)),s(T),localStorage.setItem("checkedInUsers",JSON.stringify(T.map(we=>({...we,checkedInAt:we.checkedInAt.toISOString()})))),T.forEach(we=>{const ve=new window.Image;ve.src=we.avatar||`${oy}assets/headshot?name=${we.username}.jpg`})});return()=>R()},[]);const Y=async(x,C=[])=>{if(!r)return;const R=Ed(Cd,`users/${r.id}`);try{await F_(R,{checkInStatus:!0,checkedInWhere:x,checkedInAt:Date.now(),username:r.username,friendCount:C.length,activeAssignment:!1,isResponsible:!1}),H({type:"success",message:"Successfully checked in!"})}catch{H({type:"error",message:"Error checking in. Please try again."})}"Notification"in window&&(Notification.permission==="granted"?$():Notification.permission!=="denied"&&Notification.requestPermission().then(A=>{A==="granted"&&$()}))};function $(){const x=new Date;function C(R){const A=Oe=>Oe.toString().padStart(2,"0"),O=A(R.getDate()),T=A(R.getMonth()+1),we=R.getFullYear(),ve=A(R.getHours()),Qe=A(R.getMinutes());return`${O}/${T}/${we} - ${ve}:${Qe}`}new Notification("You are checked in",{body:`Checked in since: ${C(x)}`,icon:"/rbgh_logo.png"})}const _e=async()=>{if(!r)return;const x=Ed(Cd,`users/${r.id}`);try{await F_(x,{checkInStatus:!1}),H({type:"success",message:"Successfully checked out!"})}catch{H({type:"error",message:"Error checking out. Please try again."})}},G=t.filter(x=>l==="ALL"||x.location===l),le=x=>z.find(C=>C.id===x),ce=x=>{const R=Math.floor((new Date().getTime()-x.getTime())/(1e3*60));if(R<1)return"Just now";if(R<60)return`${R}m ago`;const A=Math.floor(R/60);return A<24?`${A}h ago`:`${Math.floor(A/24)}d ago`},ye=t.find(x=>x.id===r?.id),B=x=>{k(x)},P=()=>{k(null)};return ue.useEffect(()=>{if(I){const x=setTimeout(()=>{H(null)},2e3);return()=>clearTimeout(x)}},[I]),_?y.jsx(n2,{onBack:()=>w(!1)}):y.jsxs("div",{className:"h-screen overflow-hidden bg-subtle flex-col",children:[I&&y.jsx(s2,{type:I.type,message:I.message}),y.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:y.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:y.jsxs("div",{className:"flex justify-between items-center py-3 sm:py-4",children:[y.jsx("div",{className:"flex items-center space-x-3 sm:space-x-4",children:y.jsxs("div",{className:"min-w-0 flex-1",children:[y.jsxs("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:["Welcome ",r?.username]}),y.jsxs("p",{className:"text-subtle text-sm sm:text-base truncate",children:[G.length," users checked in"]})]})}),y.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[y.jsx(Ke,{variant:"ghost",size:"sm",className:"hidden sm:flex",children:y.jsx(jT,{className:"w-5 h-5"})}),y.jsx(Ke,{variant:"ghost",size:"sm",className:"hidden sm:flex",children:y.jsx(E0,{className:"w-5 h-5"})}),y.jsxs(Ke,{onClick:e,variant:"outline",size:"sm",className:"hidden sm:flex",children:[y.jsx(Xd,{className:"w-4 h-4 mr-2"}),y.jsx("span",{children:"Logout"})]}),y.jsx(Ke,{onClick:e,variant:"outline",size:"sm",className:"sm:hidden",children:y.jsx(Xd,{className:"w-4 h-4"})})]})]})})}),N&&y.jsx(r2,{user:N,onClose:P}),y.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[ye&&y.jsx("div",{className:"mb-6 bg-gradient-theme rounded-xl p-4 border border-default",children:y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx("div",{className:`w-3 h-3 rounded-full ${le(ye.location)?.color}`}),y.jsxs("div",{className:"flex-1",children:[y.jsxs("p",{className:"text-sm font-medium text-default ",children:["You're checked in at ",le(ye.location)?.name]}),y.jsxs("p",{className:"text-xs text-subtle",children:[ce(ye.checkedInAt),(ye.friendCount??0)>0&&y.jsxs("span",{className:"ml-2",children:["• With ",ye.friendCount," friend",(ye.friendCount??0)>1?"s":""]})]})]})]})}),y.jsx("div",{className:"mb-6 space-y-4",children:y.jsxs("div",{className:"flex space-x-2 overflow-x-auto pb-2",children:[y.jsxs("button",{onClick:()=>u("ALL"),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center ${l==="ALL"?"bg-primary text-on-primary":"bg-gradient-theme text-default hover:bg-subtle"}`,children:["All Locations",y.jsx("span",{className:"ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold bg-subtle text-default",children:t.length})]}),z.map(x=>{const C=t.filter(A=>A.location===x.id).length,R=l===x.id;return y.jsxs("button",{onClick:()=>u(x.id),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center ${R?"bg-primary text-on-primary":"bg-gradient-theme text-default hover:bg-subtle"}`,children:[x.name,y.jsx("span",{className:"ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold bg-subtle text-default",children:C})]},x.id)})]})}),y.jsx("div",{className:"space-y-3 custom-scrollbar overflow-y-auto",style:{maxHeight:"calc(100vh - 23.9rem)",...window.innerWidth<640?{maxHeight:"calc(100vh - 21.5rem)"}:{}},children:G.length===0?y.jsxs("div",{className:"text-center py-12",children:[y.jsx(v0,{className:"w-12 h-12 text-subtle mx-auto mb-4"}),y.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No users found"}),y.jsx("p",{className:"text-subtle",children:"No users are currently checked in"})]}):G.map(x=>{const C=le(x.location);return y.jsx("div",{className:"bg-bg rounded-xl p-4 border border-default hover:shadow-md transition-shadow cursor-pointer",onClick:()=>B(x),children:y.jsxs("div",{className:"flex items-center space-x-4",children:[y.jsx("div",{className:"flex-shrink-0",children:y.jsx("img",{src:x.avatar,alt:`${x.name}'s avatar`,onError:R=>{R.currentTarget.onerror=null,R.currentTarget.style.display="none";const A=R.currentTarget.parentElement;if(A&&!A.querySelector(".fallback-avatar")){const O=document.createElement("span");O.className="fallback-avatar flex items-center justify-center w-12 h-12 rounded-full bg-subtle bg-subtle",O.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-muted " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',A.appendChild(O)}},className:"w-12 h-12 rounded-full"})}),y.jsxs("div",{className:"flex-1 min-w-0",children:[y.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[y.jsx("h3",{className:"font-semibold text-default  truncate",children:x.name}),x.id===r?.id&&y.jsx("span",{className:"px-2 py-1 bg-primary bg-primary text-on-primary  text-xs rounded-full",children:"You"})]}),y.jsxs("p",{className:"text-sm text-subtle mb-2",children:["@",x.username]}),y.jsxs("div",{className:"flex items-center space-x-4 text-sm",children:[y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx("div",{className:`w-2 h-2 rounded-full ${C?.color}`}),y.jsx("span",{className:"text-subtle",children:C?.name})]}),y.jsxs("div",{className:"flex items-center space-x-1 text-subtle ",children:[y.jsx(cc,{className:"w-4 h-4"}),y.jsx("span",{children:ce(x.checkedInAt)})]})]}),(x.friendCount??0)>0&&y.jsxs("div",{className:"flex items-center space-x-1 mt-2 text-sm text-gray-500 ",children:[y.jsx(hc,{className:"w-4 h-4"}),y.jsxs("span",{children:["With ",x.friendCount," friend",(x.friendCount??0)>1?"s":""]})]})]})]})},`${x.id}-${x.checkedInAt.getTime()}`)})})]}),y.jsx(i2,{onCheckIn:Y,onCheckOut:_e,onShowQR:()=>m(!0),onOpenFridge:()=>w(!0),isCheckedIn:!!ye}),y.jsx(e2,{isOpen:h,onClose:()=>m(!1)})]})},a2=[{id:"1",title:"Clean up streaming room",responsibles:["john","jane"],time:"16:00",date:new Date,location:"STREAM",visitors:5,remarks:"Don't forget the cables!",completed:!1},{id:"2",title:"Opening Hub",responsibles:[],time:"11:00",date:new Date(Date.now()+864e5),location:"RBGH",completed:!0},{id:"3",title:"Check projector",responsibles:["jane"],time:"10:00",date:new Date(Date.now()-864e5*2),location:"PXL",completed:!1},{id:"4",title:"Opening Hub",responsibles:["john"],time:"09:00",date:new Date(Date.now()+864e5),location:"RBGH",visitors:2,completed:!0},{id:"5",title:"Inspect streaming gear",responsibles:["jane"],time:"14:30",date:new Date(Date.now()-864e5*3),location:"STREAM",remarks:"Replace any broken cables.",completed:!0},{id:"6",title:"Organize chairs",responsibles:["john","alice"],time:"12:00",date:new Date(Date.now()-864e5*1),location:"RBGH",visitors:8,completed:!1},{id:"7",title:"Test HDMI switch",responsibles:[],time:"15:15",date:new Date(Date.now()-864e5*5),location:"PXL",completed:!1},{id:"8",title:"Set up sound system",responsibles:["jane"],time:"10:00",date:new Date(Date.now()+864e5*2),location:"STREAM",remarks:"Test all mics.",completed:!1},{id:"9",title:"Briefing volunteers",responsibles:["john","emma"],time:"13:00",date:new Date(Date.now()+864e5*3),location:"RBGH",completed:!1},{id:"10",title:"Network check",responsibles:[],time:"17:00",date:new Date(Date.now()+864e5*5),location:"PXL",visitors:3,completed:!1},{id:"11",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()+864e5*1),location:"RBGH",completed:!1},{id:"12",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()+864e5*2),location:"RBGH",completed:!1},{id:"13",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()+864e5*3),location:"RBGH",completed:!1},{id:"14",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()+864e5*4),location:"RBGH",completed:!1},{id:"15",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()+864e5*5),location:"RBGH",completed:!1},{id:"16",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()-864e5*1),location:"RBGH",completed:!0},{id:"17",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()-864e5*2),location:"RBGH",completed:!0},{id:"18",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()-864e5*3),location:"RBGH",completed:!0},{id:"19",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()-864e5*4),location:"RBGH",completed:!0},{id:"20",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()-864e5*5),location:"RBGH",completed:!0},{id:"21",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()+864e5*6),location:"RBGH",completed:!1},{id:"22",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()+864e5*7),location:"RBGH",completed:!1},{id:"23",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()-864e5*6),location:"RBGH",completed:!0},{id:"24",title:"Opening Hub",responsibles:[],time:"13:00",date:new Date(Date.now()-864e5*7),location:"RBGH",completed:!0},{id:"25",title:"Opening Hub",responsibles:[],time:"10:00",date:new Date(Date.now()-864e5*8),location:"RBGH",completed:!0}],u2=[{id:1,label:"Mon"},{id:2,label:"Tue"},{id:3,label:"Wed"},{id:4,label:"Thu"},{id:5,label:"Fri"},{id:6,label:"Sat"},{id:0,label:"Sun"}],c2=()=>{const[r,e]=ue.useState("all"),[t,s]=ue.useState(new Date),[l,u]=ue.useState(null),[h,m]=ue.useState([]),{user:_}=da(),w=a2,[N,k]=ue.useState(null),I=B=>{k(P=>P===B?null:B)},H=ue.useRef(null);ue.useEffect(()=>{H.current&&H.current.scrollIntoView({behavior:"auto",block:"start"})},[]);const z={PXL:{name:"PXL",color:"bg-location-pxl"},RBGH:{name:"Red Bull",color:"bg-location-rbgh"},STREAM:{name:"STREAM",color:"bg-location-stream"}},Y=w,$=w.filter(B=>!B.completed&&B.responsibles.some(P=>_&&(P===_.name||P===_.username))),_e=w.filter(B=>B.completed&&B.responsibles.some(P=>_&&(P===_.name||P===_.username))),G=B=>{const P=new Date,x=new Date(P);P.setHours(0,0,0,0),x.setDate(P.getDate()+1),x.setHours(0,0,0,0);const C=new Date(B);return C.setHours(0,0,0,0),C.getTime()===P.getTime()?"Today":C.getTime()===x.getTime()?"Tomorrow":C.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})},le=B=>{const P=new Date;P.setHours(0,0,0,0);const x=new Date(B);return x.setHours(0,0,0,0),x<P},ce=({assignment:B,expanded:P,onToggle:x})=>{const C=z[B.location]||{name:B.location||"Unknown",color:"bg-gray-400"},R=B.date>new Date,A=_&&B.responsibles.includes(_.name||_.username);return y.jsxs("div",{className:"bg-bg rounded-lg p-3 sm:p-4 border border-default shadow-sm hover:shadow-md  hover:shadow transition-shadow cursor-pointer",onClick:x,children:[y.jsxs("div",{className:"flex justify-between items-start",children:[y.jsxs("div",{className:"flex flex-col space-y-1",children:[y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx("div",{className:`w-3.5 h-3.5 rounded-full ${C.color}`}),y.jsx("h3",{className:"font-medium text-sm sm:text-base text-default  truncate",children:B.title})]}),!P&&y.jsxs("div",{className:"flex items-center text-xs sm:text-sm text-gray-500  space-x-4 pl-5",children:[y.jsxs("span",{className:"flex items-center space-x-1",children:[y.jsx(cc,{className:"w-3.5 h-3.5"}),y.jsx("span",{children:B.time})]}),y.jsxs("span",{className:"flex items-center space-x-1",children:[y.jsx(hc,{className:"w-3.5 h-3.5"}),y.jsx("span",{children:B.responsibles.length===0?"No Responsible":B.responsibles.length===1?B.responsibles[0]:`${B.responsibles[0]} +${B.responsibles.length-1}`})]})]})]}),!B.completed&&le(B.date)&&y.jsx("span",{className:"ml-2 px-2 py-0.5 border border-warning text-warning text-xs rounded-full bg-transparent",children:"Overdue"})]}),P&&y.jsxs("div",{className:"mt-3 space-y-2 text-sm text-subtle",children:[y.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx(FT,{className:"w-4 h-4"}),y.jsx("span",{children:G(B.date)})]}),y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx(cc,{className:"w-4 h-4"}),y.jsx("span",{children:B.time})]}),y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx(v0,{className:"w-4 h-4"}),y.jsx("span",{children:C.name})]}),y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx(hc,{className:"w-4 h-4"}),y.jsx("span",{children:B.responsibles.length===0?"No Responsible":B.responsibles.length===1?B.responsibles[0]:`${B.responsibles[0]} +${B.responsibles.length-1}`})]})]}),B.visitors!==void 0&&y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx(op,{className:"w-4 h-4 text-muted"}),y.jsxs("span",{children:[B.visitors," visitors"]})]}),B.remarks&&y.jsxs("div",{className:"flex items-start space-x-2",children:[y.jsx(GT,{className:"w-4 h-4 text-muted mt-0.5"}),y.jsx("p",{className:"leading-relaxed",children:B.remarks})]}),R&&!A&&y.jsx("div",{className:"pt-2",children:y.jsx("button",{onClick:O=>{O.stopPropagation(),alert("Signed up (mock)")},className:"px-3 py-1 bg-primary text-on-primary rounded hover:bg-secondary text-sm",children:"Sign Up"})})]})]})};l&&Y.filter(B=>B.date.getFullYear()===l.getFullYear()&&B.date.getMonth()===l.getMonth()&&B.date.getDate()===l.getDate());const ye=B=>{m(P=>P.includes(B)?P.filter(x=>x!==B):[...P,B])};return h.length===0||Y.filter(B=>h.includes(B.date.getDay())),y.jsxs("div",{className:"min-h-screen bg-subtle pb-20",children:[y.jsx("header",{className:"bg-bg shadow-sm border-b border-default",children:y.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:y.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:y.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[y.jsx("div",{className:"w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center",children:y.jsx(Du,{className:"w-6 h-6 text-on-primary"})}),y.jsxs("div",{className:"min-w-0 flex-1",children:[y.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-default",children:"Assignments"}),y.jsx("p",{className:"text-subtle text-sm sm:text-base",children:r==="todo"?`${$.length} pending`:`${_e.length} completed`})]})]})})})}),y.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[y.jsx("div",{className:"flex space-x-1 mb-6 bg-gradient-theme rounded-lg p-1",children:["all","todo","finished"].map(B=>y.jsx("button",{onClick:()=>e(B),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${r===B?"bg-bg text-default shadow-sm":"text-subtle hover:text-default"}`,children:B==="all"?`All (${Y.length})`:B==="todo"?`To Do (${$.length})`:`Finished (${_e.length})`},B))}),y.jsx("div",{className:"flex space-x-2 overflow-x-auto pb-2 mb-4",children:u2.map(B=>y.jsx("button",{onClick:()=>ye(B.id),className:`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center ${h.includes(B.id)?"bg-primary text-on-primary":"bg-gradient-theme text-default hover:bg-subtle"}`,children:B.label},B.id))}),y.jsx("div",{className:"space-y-4 custom-scrollbar overflow-y-auto",style:{maxHeight:"calc(100vh - 22.9rem)",...window.innerWidth<640?{maxHeight:"calc(100vh - 20.5rem)"}:{}},children:r==="all"&&Y.length>0?(()=>{const B=Y.reduce((A,O)=>{const T=O.date.toDateString();return A[T]||(A[T]=[]),A[T].push(O),A},{}),P=Object.entries(B).sort(([A],[O])=>new Date(A).getTime()-new Date(O).getTime()),x=new Date;x.setHours(0,0,0,0);const C=[],R=[];return P.forEach(([A,O])=>{const T=new Date(A),we=T<x,ve=y.jsxs("div",{ref:we?void 0:R.length===0?H:void 0,children:[y.jsx("h2",{className:"text-sm text-subtle font-medium uppercase mb-2 mt-6 pl-1",children:G(T)}),y.jsx("div",{className:"space-y-2",children:O.sort((Qe,Oe)=>Qe.time.localeCompare(Oe.time)).map(Qe=>y.jsx(ce,{assignment:Qe,expanded:N===Qe.id,onToggle:()=>I(Qe.id)},Qe.id))})]},A);we?C.push(ve):R.push(ve)}),y.jsxs(y.Fragment,{children:[C,R]})})():r==="all"?y.jsxs("div",{className:"text-center py-12",children:[y.jsx(Du,{className:"w-12 h-12 text-muted mx-auto mb-4"}),y.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No assignments"}),y.jsx("p",{className:"text-subtle",children:"No assignments found."})]}):r==="todo"?$.length===0?y.jsxs("div",{className:"text-center py-12",children:[y.jsx(Du,{className:"w-12 h-12 text-muted mx-auto mb-4"}),y.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No pending assignments"}),y.jsx("p",{className:"text-subtle",children:"All assignments are completed. Great job!"})]}):$.sort((B,P)=>B.date.getTime()-P.date.getTime()).map(B=>y.jsx(ce,{assignment:B,expanded:N===B.id,onToggle:()=>I(B.id)},B.id)):_e.length===0?y.jsxs("div",{className:"text-center py-12",children:[y.jsx(Du,{className:"w-12 h-12 text-muted mx-auto mb-4"}),y.jsx("h3",{className:"text-lg font-medium text-default  mb-2",children:"No completed assignments"}),y.jsx("p",{className:"text-subtle",children:"Completed assignments will appear here."})]}):_e.sort((B,P)=>P.date.getTime()-B.date.getTime()).map(B=>y.jsx(ce,{assignment:B,expanded:N===B.id,onToggle:()=>I(B.id)},B.id))})]})]})};function x0(r){document.documentElement.setAttribute("data-theme",r),document.documentElement.classList.remove("light","dark","neon"),r==="dark"&&document.documentElement.classList.add("dark"),localStorage.setItem("theme",r)}function S0(){const r=localStorage.getItem("theme");return r==="light"||r==="dark"||r==="neon"?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const Dl=["light","dark","neon"],h2=()=>{const[r,e]=ue.useState(S0());return ue.useEffect(()=>{x0(r)},[r]),y.jsxs("div",{className:"min-h-screen bg-bg text-text p-8",children:[y.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Theme Preferences"}),y.jsx("div",{className:"space-y-4",children:Dl.map(t=>y.jsxs("label",{className:"flex items-center space-x-3",children:[y.jsx("input",{type:"radio",name:"theme",value:t,checked:r===t,onChange:()=>e(t),className:"w-4 h-4 accent-[var(--color-text)]"}),y.jsx("span",{className:"capitalize text-text",children:t})]},t))})]})},d2=({activeView:r,onViewChange:e})=>{const t=[{id:"home",label:"Home",icon:BT},{id:"assignments",label:"Assignments",icon:VT},{id:"preferences",label:"Settings",icon:E0}];return y.jsx("nav",{className:"fixed bottom-4 left-0 right-0 z-50 px-4",children:y.jsx("div",{className:"max-w-7xl mx-auto nav-glass px-1 py-2 rounded-full",children:y.jsx("div",{className:"flex justify-between items-center w-full",children:t.map(s=>{const l=s.icon,u=r===s.id;return y.jsxs("button",{onClick:()=>e(s.id),className:`group flex items-center justify-center h-10 rounded-full transition-colors duration-200 mx-1 px-3 ${u?"nav-item-active shadow-md":"text-subtle hover:text-default hover:bg-subtle/40"}`,"aria-label":s.label,children:[y.jsx(l,{className:"w-5 h-5 text-inherit"}),y.jsx("span",{className:`ml-2 text-[13px] font-medium text-inherit overflow-hidden transition-[max-width,opacity] duration-300 ease-in-out ${u?"opacity-100 max-w-[100px]":"opacity-0 max-w-0"}`,children:s.label})]},s.id)})})})})};function f2(){const{isAuthenticated:r}=da(),[e,t]=ue.useState("login"),[s,l]=ue.useState("home");if(r)return y.jsxs(y.Fragment,{children:[s==="home"&&y.jsx(l2,{}),s==="assignments"&&y.jsx(c2,{}),s==="preferences"&&y.jsx(h2,{}),y.jsx(d2,{activeView:s,onViewChange:l})]});switch(e){case"forgot-password":return y.jsx(ZT,{onBackToLogin:()=>t("login")});case"login":default:return y.jsx(JT,{onForgotPassword:()=>t("forgot-password")})}}const p2=ue.createContext(void 0),m2=({children:r})=>{const[e,t]=ue.useState(S0);ue.useEffect(()=>{x0(e)},[e]);const s=()=>{const u=Dl.indexOf(e),h=Dl[(u+1)%Dl.length];t(h)},l=u=>t(u);return y.jsx(p2.Provider,{value:{theme:e,setTheme:l,toggleTheme:s,availableThemes:Dl},children:r})};Mw.createRoot(document.getElementById("root")).render(y.jsx(ue.StrictMode,{children:y.jsx(m2,{children:y.jsx(f2,{})})}));

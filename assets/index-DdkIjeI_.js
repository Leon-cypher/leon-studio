(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function Ty(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var fp={exports:{}},cu={},dp={exports:{}},Dt={};var Dv;function _1(){if(Dv)return Dt;Dv=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function x(O,J,Ce){this.props=O,this.context=J,this.refs=E,this.updater=Ce||_}x.prototype.isReactComponent={},x.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=x.prototype;function A(O,J,Ce){this.props=O,this.context=J,this.refs=E,this.updater=Ce||_}var b=A.prototype=new S;b.constructor=A,M(b,x.prototype),b.isPureReactComponent=!0;var C=Array.isArray,L=Object.prototype.hasOwnProperty,I={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(O,J,Ce){var be,ke={},ne=null,me=null;if(J!=null)for(be in J.ref!==void 0&&(me=J.ref),J.key!==void 0&&(ne=""+J.key),J)L.call(J,be)&&!N.hasOwnProperty(be)&&(ke[be]=J[be]);var ge=arguments.length-2;if(ge===1)ke.children=Ce;else if(1<ge){for(var Le=Array(ge),Ge=0;Ge<ge;Ge++)Le[Ge]=arguments[Ge+2];ke.children=Le}if(O&&O.defaultProps)for(be in ge=O.defaultProps,ge)ke[be]===void 0&&(ke[be]=ge[be]);return{$$typeof:o,type:O,key:ne,ref:me,props:ke,_owner:I.current}}function D(O,J){return{$$typeof:o,type:O.type,key:J,ref:O.ref,props:O.props,_owner:O._owner}}function W(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function k(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ce){return J[Ce]})}var H=/\/+/g;function K(O,J){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):J.toString(36)}function ee(O,J,Ce,be,ke){var ne=typeof O;(ne==="undefined"||ne==="boolean")&&(O=null);var me=!1;if(O===null)me=!0;else switch(ne){case"string":case"number":me=!0;break;case"object":switch(O.$$typeof){case o:case e:me=!0}}if(me)return me=O,ke=ke(me),O=be===""?"."+K(me,0):be,C(ke)?(Ce="",O!=null&&(Ce=O.replace(H,"$&/")+"/"),ee(ke,J,Ce,"",function(Ge){return Ge})):ke!=null&&(W(ke)&&(ke=D(ke,Ce+(!ke.key||me&&me.key===ke.key?"":(""+ke.key).replace(H,"$&/")+"/")+O)),J.push(ke)),1;if(me=0,be=be===""?".":be+":",C(O))for(var ge=0;ge<O.length;ge++){ne=O[ge];var Le=be+K(ne,ge);me+=ee(ne,J,Ce,Le,ke)}else if(Le=g(O),typeof Le=="function")for(O=Le.call(O),ge=0;!(ne=O.next()).done;)ne=ne.value,Le=be+K(ne,ge++),me+=ee(ne,J,Ce,Le,ke);else if(ne==="object")throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return me}function Z(O,J,Ce){if(O==null)return O;var be=[],ke=0;return ee(O,be,"","",function(ne){return J.call(Ce,ne,ke++)}),be}function Q(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(Ce){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ce)},function(Ce){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ce)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var V={current:null},q={transition:null},te={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:q,ReactCurrentOwner:I};function U(){throw Error("act(...) is not supported in production builds of React.")}return Dt.Children={map:Z,forEach:function(O,J,Ce){Z(O,function(){J.apply(this,arguments)},Ce)},count:function(O){var J=0;return Z(O,function(){J++}),J},toArray:function(O){return Z(O,function(J){return J})||[]},only:function(O){if(!W(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Dt.Component=x,Dt.Fragment=t,Dt.Profiler=r,Dt.PureComponent=A,Dt.StrictMode=n,Dt.Suspense=d,Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Dt.act=U,Dt.cloneElement=function(O,J,Ce){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var be=M({},O.props),ke=O.key,ne=O.ref,me=O._owner;if(J!=null){if(J.ref!==void 0&&(ne=J.ref,me=I.current),J.key!==void 0&&(ke=""+J.key),O.type&&O.type.defaultProps)var ge=O.type.defaultProps;for(Le in J)L.call(J,Le)&&!N.hasOwnProperty(Le)&&(be[Le]=J[Le]===void 0&&ge!==void 0?ge[Le]:J[Le])}var Le=arguments.length-2;if(Le===1)be.children=Ce;else if(1<Le){ge=Array(Le);for(var Ge=0;Ge<Le;Ge++)ge[Ge]=arguments[Ge+2];be.children=ge}return{$$typeof:o,type:O.type,key:ke,ref:ne,props:be,_owner:me}},Dt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},Dt.createElement=T,Dt.createFactory=function(O){var J=T.bind(null,O);return J.type=O,J},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(O){return{$$typeof:c,render:O}},Dt.isValidElement=W,Dt.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:Q}},Dt.memo=function(O,J){return{$$typeof:h,type:O,compare:J===void 0?null:J}},Dt.startTransition=function(O){var J=q.transition;q.transition={};try{O()}finally{q.transition=J}},Dt.unstable_act=U,Dt.useCallback=function(O,J){return V.current.useCallback(O,J)},Dt.useContext=function(O){return V.current.useContext(O)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(O){return V.current.useDeferredValue(O)},Dt.useEffect=function(O,J){return V.current.useEffect(O,J)},Dt.useId=function(){return V.current.useId()},Dt.useImperativeHandle=function(O,J,Ce){return V.current.useImperativeHandle(O,J,Ce)},Dt.useInsertionEffect=function(O,J){return V.current.useInsertionEffect(O,J)},Dt.useLayoutEffect=function(O,J){return V.current.useLayoutEffect(O,J)},Dt.useMemo=function(O,J){return V.current.useMemo(O,J)},Dt.useReducer=function(O,J,Ce){return V.current.useReducer(O,J,Ce)},Dt.useRef=function(O){return V.current.useRef(O)},Dt.useState=function(O){return V.current.useState(O)},Dt.useSyncExternalStore=function(O,J,Ce){return V.current.useSyncExternalStore(O,J,Ce)},Dt.useTransition=function(){return V.current.useTransition()},Dt.version="18.3.1",Dt}var Lv;function Rg(){return Lv||(Lv=1,dp.exports=_1()),dp.exports}var Nv;function v1(){if(Nv)return cu;Nv=1;var o=Rg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,v={},g=null,_=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(_=d.ref);for(p in d)n.call(d,p)&&!a.hasOwnProperty(p)&&(v[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:c,key:g,ref:_,props:v,_owner:r.current}}return cu.Fragment=t,cu.jsx=u,cu.jsxs=u,cu}var Iv;function x1(){return Iv||(Iv=1,fp.exports=v1()),fp.exports}var _e=x1(),Jt=Rg();const y1=Ty(Jt);var uf={},hp={exports:{}},Fi={},pp={exports:{}},mp={};var Uv;function S1(){return Uv||(Uv=1,(function(o){function e(q,te){var U=q.length;q.push(te);e:for(;0<U;){var O=U-1>>>1,J=q[O];if(0<r(J,te))q[O]=te,q[U]=J,U=O;else break e}}function t(q){return q.length===0?null:q[0]}function n(q){if(q.length===0)return null;var te=q[0],U=q.pop();if(U!==te){q[0]=U;e:for(var O=0,J=q.length,Ce=J>>>1;O<Ce;){var be=2*(O+1)-1,ke=q[be],ne=be+1,me=q[ne];if(0>r(ke,U))ne<J&&0>r(me,ke)?(q[O]=me,q[ne]=U,O=ne):(q[O]=ke,q[be]=U,O=be);else if(ne<J&&0>r(me,U))q[O]=me,q[ne]=U,O=ne;else break e}}return te}function r(q,te){var U=q.sortIndex-te.sortIndex;return U!==0?U:q.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,v=null,g=3,_=!1,M=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(q){for(var te=t(h);te!==null;){if(te.callback===null)n(h);else if(te.startTime<=q)n(h),te.sortIndex=te.expirationTime,e(d,te);else break;te=t(h)}}function C(q){if(E=!1,b(q),!M)if(t(d)!==null)M=!0,Q(L);else{var te=t(h);te!==null&&V(C,te.startTime-q)}}function L(q,te){M=!1,E&&(E=!1,S(T),T=-1),_=!0;var U=g;try{for(b(te),v=t(d);v!==null&&(!(v.expirationTime>te)||q&&!k());){var O=v.callback;if(typeof O=="function"){v.callback=null,g=v.priorityLevel;var J=O(v.expirationTime<=te);te=o.unstable_now(),typeof J=="function"?v.callback=J:v===t(d)&&n(d),b(te)}else n(d);v=t(d)}if(v!==null)var Ce=!0;else{var be=t(h);be!==null&&V(C,be.startTime-te),Ce=!1}return Ce}finally{v=null,g=U,_=!1}}var I=!1,N=null,T=-1,D=5,W=-1;function k(){return!(o.unstable_now()-W<D)}function H(){if(N!==null){var q=o.unstable_now();W=q;var te=!0;try{te=N(!0,q)}finally{te?K():(I=!1,N=null)}}else I=!1}var K;if(typeof A=="function")K=function(){A(H)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,Z=ee.port2;ee.port1.onmessage=H,K=function(){Z.postMessage(null)}}else K=function(){x(H,0)};function Q(q){N=q,I||(I=!0,K())}function V(q,te){T=x(function(){q(o.unstable_now())},te)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_continueExecution=function(){M||_||(M=!0,Q(L))},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(q){switch(g){case 1:case 2:case 3:var te=3;break;default:te=g}var U=g;g=te;try{return q()}finally{g=U}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(q,te){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var U=g;g=q;try{return te()}finally{g=U}},o.unstable_scheduleCallback=function(q,te,U){var O=o.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?O+U:O):U=O,q){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=U+J,q={id:p++,callback:te,priorityLevel:q,startTime:U,expirationTime:J,sortIndex:-1},U>O?(q.sortIndex=U,e(h,q),t(d)===null&&q===t(h)&&(E?(S(T),T=-1):E=!0,V(C,U-O))):(q.sortIndex=J,e(d,q),M||_||(M=!0,Q(L))),q},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(q){var te=g;return function(){var U=g;g=te;try{return q.apply(this,arguments)}finally{g=U}}}})(mp)),mp}var Fv;function M1(){return Fv||(Fv=1,pp.exports=S1()),pp.exports}var Ov;function E1(){if(Ov)return Fi;Ov=1;var o=Rg(),e=M1();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,r={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(r[i]=s,i=0;i<s.length;i++)n.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(i){return d.call(v,i)?!0:d.call(p,i)?!1:h.test(i)?v[i]=!0:(p[i]=!0,!1)}function _(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,f){if(s===null||typeof s>"u"||_(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(i,s,l,f,m,y,R){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=y,this.removeEmptyString=R}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new E(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function A(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(S,A);x[s]=new E(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(S,A);x[s]=new E(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(S,A);x[s]=new E(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,l,f){var m=x.hasOwnProperty(s)?x[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,m,f)&&(l=null),f||m===null?g(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,f=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),I=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),k=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),q=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=q&&i[q]||i["@@iterator"],typeof i=="function"?i:null)}var U=Object.assign,O;function J(i){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var Ce=!1;function be(i,s){if(!i||Ce)return"";Ce=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ce){var f=ce}Reflect.construct(i,[],s)}else{try{s.call()}catch(ce){f=ce}i.call(s.prototype)}else{try{throw Error()}catch(ce){f=ce}i()}}catch(ce){if(ce&&f&&typeof ce.stack=="string"){for(var m=ce.stack.split(`
`),y=f.stack.split(`
`),R=m.length-1,B=y.length-1;1<=R&&0<=B&&m[R]!==y[B];)B--;for(;1<=R&&0<=B;R--,B--)if(m[R]!==y[B]){if(R!==1||B!==1)do if(R--,B--,0>B||m[R]!==y[B]){var X=`
`+m[R].replace(" at new "," at ");return i.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",i.displayName)),X}while(1<=R&&0<=B);break}}}finally{Ce=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?J(i):""}function ke(i){switch(i.tag){case 5:return J(i.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return i=be(i.type,!1),i;case 11:return i=be(i.type.render,!1),i;case 1:return i=be(i.type,!0),i;default:return""}}function ne(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case I:return"Portal";case D:return"Profiler";case T:return"StrictMode";case K:return"Suspense";case ee:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case W:return(i._context.displayName||"Context")+".Provider";case H:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Z:return s=i.displayName||null,s!==null?s:ne(i.type)||"Memo";case Q:s=i._payload,i=i._init;try{return ne(i(s))}catch{}}return null}function me(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ge(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Le(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ge(i){var s=Le(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,y=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(R){f=""+R,y.call(this,R)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(R){f=""+R},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ze(i){i._valueTracker||(i._valueTracker=Ge(i))}function It(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=Le(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function We(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ft(i,s){var l=s.checked;return U({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Et(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=ge(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function lt(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function se(i,s){lt(i,s);var l=ge(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Bt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Bt(i,s.type,ge(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function G(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Bt(i,s,l){(s!=="number"||We(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Tt=Array.isArray;function ut(i,s,l,f){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&f&&(i[l].defaultSelected=!0)}else{for(l=""+ge(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function He(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return U({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function F(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Tt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:ge(l)}}function w(i,s){var l=ge(s.value),f=ge(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function Y(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?he(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var fe,Oe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=fe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Te(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(Qe).forEach(function(i){Xe.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Qe[s]=Qe[i]})});function Me(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Qe.hasOwnProperty(i)&&Qe[i]?(""+s).trim():s+"px"}function Ee(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=Me(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,m):i[l]=m}}var qe=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(i,s){if(s){if(qe[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ne(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _t=null;function z(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ae=null,xe=null,Pe=null;function ve(i){if(i=$l(i)){if(typeof Ae!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Ec(s),Ae(i.stateNode,i.type,s))}}function de(i){xe?Pe?Pe.push(i):Pe=[i]:xe=i}function je(){if(xe){var i=xe,s=Pe;if(Pe=xe=null,ve(i),s)for(i=0;i<s.length;i++)ve(s[i])}}function at(i,s){return i(s)}function Ft(){}var Be=!1;function nt(i,s,l){if(Be)return i(s,l);Be=!0;try{return at(i,s,l)}finally{Be=!1,(xe!==null||Pe!==null)&&(Ft(),je())}}function xt(i,s){var l=i.stateNode;if(l===null)return null;var f=Ec(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ue=!1;if(c)try{var ht={};Object.defineProperty(ht,"passive",{get:function(){Ue=!0}}),window.addEventListener("test",ht,ht),window.removeEventListener("test",ht,ht)}catch{Ue=!1}function ct(i,s,l,f,m,y,R,B,X){var ce=Array.prototype.slice.call(arguments,3);try{s.apply(l,ce)}catch(Se){this.onError(Se)}}var pt=!1,on=null,vt=!1,Kt=null,Tn={onError:function(i){pt=!0,on=i}};function tn(i,s,l,f,m,y,R,B,X){pt=!1,on=null,ct.apply(Tn,arguments)}function Xt(i,s,l,f,m,y,R,B,X){if(tn.apply(this,arguments),pt){if(pt){var ce=on;pt=!1,on=null}else throw Error(t(198));vt||(vt=!0,Kt=ce)}}function Pt(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Fn(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Zt(i){if(Pt(i)!==i)throw Error(t(188))}function Gn(i){var s=i.alternate;if(!s){if(s=Pt(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var m=l.return;if(m===null)break;var y=m.alternate;if(y===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===y.child){for(y=m.child;y;){if(y===l)return Zt(m),i;if(y===f)return Zt(m),s;y=y.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=y;else{for(var R=!1,B=m.child;B;){if(B===l){R=!0,l=m,f=y;break}if(B===f){R=!0,f=m,l=y;break}B=B.sibling}if(!R){for(B=y.child;B;){if(B===l){R=!0,l=y,f=m;break}if(B===f){R=!0,f=y,l=m;break}B=B.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function mi(i){return i=Gn(i),i!==null?xn(i):null}function xn(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=xn(i);if(s!==null)return s;i=i.sibling}return null}var yn=e.unstable_scheduleCallback,wn=e.unstable_cancelCallback,br=e.unstable_shouldYield,Bs=e.unstable_requestPaint,P=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,le=e.unstable_ImmediatePriority,oe=e.unstable_UserBlockingPriority,re=e.unstable_NormalPriority,Ie=e.unstable_LowPriority,Fe=e.unstable_IdlePriority,De=null,ze=null;function Ke(i){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(De,i,void 0,(i.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:jt,wt=Math.log,ot=Math.LN2;function jt(i){return i>>>=0,i===0?32:31-(wt(i)/ot|0)|0}var an=64,nn=4194304;function zt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function An(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,m=i.suspendedLanes,y=i.pingedLanes,R=l&268435455;if(R!==0){var B=R&~m;B!==0?f=zt(B):(y&=R,y!==0&&(f=zt(y)))}else R=l&~m,R!==0?f=zt(R):y!==0&&(f=zt(y));if(f===0)return 0;if(s!==0&&s!==f&&(s&m)===0&&(m=f&-f,y=s&-s,m>=y||m===16&&(y&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-dt(s),m=1<<l,f|=i[l],s&=~m;return f}function rt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gi(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,y=i.pendingLanes;0<y;){var R=31-dt(y),B=1<<R,X=m[R];X===-1?((B&l)===0||(B&f)!==0)&&(m[R]=rt(B,s)):X<=s&&(i.expiredLanes|=B),y&=~B}}function Ut(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function bi(){var i=an;return an<<=1,(an&4194240)===0&&(an=64),i}function Pi(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Yi(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-dt(s),i[s]=l}function zs(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-dt(l),y=1<<m;s[m]=0,f[m]=-1,i[m]=-1,l&=~y}}function Yt(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-dt(l),m=1<<f;m&s|i[f]&s&&(i[f]|=s),l&=~m}}var yt=0;function Pr(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Cn,fr,cs,Ll,h_,Fd=!1,lc=[],Vs=null,Hs=null,Gs=null,Nl=new Map,Il=new Map,Ws=[],BM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function p_(i,s){switch(i){case"focusin":case"focusout":Vs=null;break;case"dragenter":case"dragleave":Hs=null;break;case"mouseover":case"mouseout":Gs=null;break;case"pointerover":case"pointerout":Nl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(s.pointerId)}}function Ul(i,s,l,f,m,y){return i===null||i.nativeEvent!==y?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:y,targetContainers:[m]},s!==null&&(s=$l(s),s!==null&&fr(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function zM(i,s,l,f,m){switch(s){case"focusin":return Vs=Ul(Vs,i,s,l,f,m),!0;case"dragenter":return Hs=Ul(Hs,i,s,l,f,m),!0;case"mouseover":return Gs=Ul(Gs,i,s,l,f,m),!0;case"pointerover":var y=m.pointerId;return Nl.set(y,Ul(Nl.get(y)||null,i,s,l,f,m)),!0;case"gotpointercapture":return y=m.pointerId,Il.set(y,Ul(Il.get(y)||null,i,s,l,f,m)),!0}return!1}function m_(i){var s=Po(i.target);if(s!==null){var l=Pt(s);if(l!==null){if(s=l.tag,s===13){if(s=Fn(l),s!==null){i.blockedOn=s,h_(i.priority,function(){cs(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function uc(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=kd(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);_t=f,l.target.dispatchEvent(f),_t=null}else return s=$l(l),s!==null&&fr(s),i.blockedOn=l,!1;s.shift()}return!0}function g_(i,s,l){uc(i)&&l.delete(s)}function VM(){Fd=!1,Vs!==null&&uc(Vs)&&(Vs=null),Hs!==null&&uc(Hs)&&(Hs=null),Gs!==null&&uc(Gs)&&(Gs=null),Nl.forEach(g_),Il.forEach(g_)}function Fl(i,s){i.blockedOn===s&&(i.blockedOn=null,Fd||(Fd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,VM)))}function Ol(i){function s(m){return Fl(m,i)}if(0<lc.length){Fl(lc[0],i);for(var l=1;l<lc.length;l++){var f=lc[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Vs!==null&&Fl(Vs,i),Hs!==null&&Fl(Hs,i),Gs!==null&&Fl(Gs,i),Nl.forEach(s),Il.forEach(s),l=0;l<Ws.length;l++)f=Ws[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<Ws.length&&(l=Ws[0],l.blockedOn===null);)m_(l),l.blockedOn===null&&Ws.shift()}var va=C.ReactCurrentBatchConfig,cc=!0;function HM(i,s,l,f){var m=yt,y=va.transition;va.transition=null;try{yt=1,Od(i,s,l,f)}finally{yt=m,va.transition=y}}function GM(i,s,l,f){var m=yt,y=va.transition;va.transition=null;try{yt=4,Od(i,s,l,f)}finally{yt=m,va.transition=y}}function Od(i,s,l,f){if(cc){var m=kd(i,s,l,f);if(m===null)th(i,s,f,fc,l),p_(i,f);else if(zM(m,i,s,l,f))f.stopPropagation();else if(p_(i,f),s&4&&-1<BM.indexOf(i)){for(;m!==null;){var y=$l(m);if(y!==null&&Cn(y),y=kd(i,s,l,f),y===null&&th(i,s,f,fc,l),y===m)break;m=y}m!==null&&f.stopPropagation()}else th(i,s,f,null,l)}}var fc=null;function kd(i,s,l,f){if(fc=null,i=z(f),i=Po(i),i!==null)if(s=Pt(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Fn(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return fc=i,null}function __(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case le:return 1;case oe:return 4;case re:case Ie:return 16;case Fe:return 536870912;default:return 16}default:return 16}}var Xs=null,Bd=null,dc=null;function v_(){if(dc)return dc;var i,s=Bd,l=s.length,f,m="value"in Xs?Xs.value:Xs.textContent,y=m.length;for(i=0;i<l&&s[i]===m[i];i++);var R=l-i;for(f=1;f<=R&&s[l-f]===m[y-f];f++);return dc=m.slice(i,1<f?1-f:void 0)}function hc(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function pc(){return!0}function x_(){return!1}function ji(i){function s(l,f,m,y,R){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=y,this.target=R,this.currentTarget=null;for(var B in i)i.hasOwnProperty(B)&&(l=i[B],this[B]=l?l(y):y[B]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?pc:x_,this.isPropagationStopped=x_,this}return U(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=pc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=pc)},persist:function(){},isPersistent:pc}),s}var xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zd=ji(xa),kl=U({},xa,{view:0,detail:0}),WM=ji(kl),Vd,Hd,Bl,mc=U({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Bl&&(Bl&&i.type==="mousemove"?(Vd=i.screenX-Bl.screenX,Hd=i.screenY-Bl.screenY):Hd=Vd=0,Bl=i),Vd)},movementY:function(i){return"movementY"in i?i.movementY:Hd}}),y_=ji(mc),XM=U({},mc,{dataTransfer:0}),YM=ji(XM),jM=U({},kl,{relatedTarget:0}),Gd=ji(jM),qM=U({},xa,{animationName:0,elapsedTime:0,pseudoElement:0}),$M=ji(qM),KM=U({},xa,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ZM=ji(KM),QM=U({},xa,{data:0}),S_=ji(QM),JM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nE(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=tE[i])?!!s[i]:!1}function Wd(){return nE}var iE=U({},kl,{key:function(i){if(i.key){var s=JM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=hc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?eE[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(i){return i.type==="keypress"?hc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?hc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),rE=ji(iE),sE=U({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M_=ji(sE),oE=U({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),aE=ji(oE),lE=U({},xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),uE=ji(lE),cE=U({},mc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),fE=ji(cE),dE=[9,13,27,32],Xd=c&&"CompositionEvent"in window,zl=null;c&&"documentMode"in document&&(zl=document.documentMode);var hE=c&&"TextEvent"in window&&!zl,E_=c&&(!Xd||zl&&8<zl&&11>=zl),T_=" ",w_=!1;function A_(i,s){switch(i){case"keyup":return dE.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ya=!1;function pE(i,s){switch(i){case"compositionend":return C_(s);case"keypress":return s.which!==32?null:(w_=!0,T_);case"textInput":return i=s.data,i===T_&&w_?null:i;default:return null}}function mE(i,s){if(ya)return i==="compositionend"||!Xd&&A_(i,s)?(i=v_(),dc=Bd=Xs=null,ya=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E_&&s.locale!=="ko"?null:s.data;default:return null}}var gE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function R_(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!gE[i.type]:s==="textarea"}function b_(i,s,l,f){de(f),s=yc(s,"onChange"),0<s.length&&(l=new zd("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var Vl=null,Hl=null;function _E(i){j_(i,0)}function gc(i){var s=wa(i);if(It(s))return i}function vE(i,s){if(i==="change")return s}var P_=!1;if(c){var Yd;if(c){var jd="oninput"in document;if(!jd){var D_=document.createElement("div");D_.setAttribute("oninput","return;"),jd=typeof D_.oninput=="function"}Yd=jd}else Yd=!1;P_=Yd&&(!document.documentMode||9<document.documentMode)}function L_(){Vl&&(Vl.detachEvent("onpropertychange",N_),Hl=Vl=null)}function N_(i){if(i.propertyName==="value"&&gc(Hl)){var s=[];b_(s,Hl,i,z(i)),nt(_E,s)}}function xE(i,s,l){i==="focusin"?(L_(),Vl=s,Hl=l,Vl.attachEvent("onpropertychange",N_)):i==="focusout"&&L_()}function yE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return gc(Hl)}function SE(i,s){if(i==="click")return gc(s)}function ME(i,s){if(i==="input"||i==="change")return gc(s)}function EE(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Dr=typeof Object.is=="function"?Object.is:EE;function Gl(i,s){if(Dr(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(s,m)||!Dr(i[m],s[m]))return!1}return!0}function I_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function U_(i,s){var l=I_(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=I_(l)}}function F_(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?F_(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function O_(){for(var i=window,s=We();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=We(i.document)}return s}function qd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function TE(i){var s=O_(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&F_(l.ownerDocument.documentElement,l)){if(f!==null&&qd(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,y=Math.min(f.start,m);f=f.end===void 0?y:Math.min(f.end,m),!i.extend&&y>f&&(m=f,f=y,y=m),m=U_(l,y);var R=U_(l,f);m&&R&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==R.node||i.focusOffset!==R.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),y>f?(i.addRange(s),i.extend(R.node,R.offset)):(s.setEnd(R.node,R.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var wE=c&&"documentMode"in document&&11>=document.documentMode,Sa=null,$d=null,Wl=null,Kd=!1;function k_(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Kd||Sa==null||Sa!==We(f)||(f=Sa,"selectionStart"in f&&qd(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Wl&&Gl(Wl,f)||(Wl=f,f=yc($d,"onSelect"),0<f.length&&(s=new zd("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=Sa)))}function _c(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Ma={animationend:_c("Animation","AnimationEnd"),animationiteration:_c("Animation","AnimationIteration"),animationstart:_c("Animation","AnimationStart"),transitionend:_c("Transition","TransitionEnd")},Zd={},B_={};c&&(B_=document.createElement("div").style,"AnimationEvent"in window||(delete Ma.animationend.animation,delete Ma.animationiteration.animation,delete Ma.animationstart.animation),"TransitionEvent"in window||delete Ma.transitionend.transition);function vc(i){if(Zd[i])return Zd[i];if(!Ma[i])return i;var s=Ma[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in B_)return Zd[i]=s[l];return i}var z_=vc("animationend"),V_=vc("animationiteration"),H_=vc("animationstart"),G_=vc("transitionend"),W_=new Map,X_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ys(i,s){W_.set(i,s),a(s,[i])}for(var Qd=0;Qd<X_.length;Qd++){var Jd=X_[Qd],AE=Jd.toLowerCase(),CE=Jd[0].toUpperCase()+Jd.slice(1);Ys(AE,"on"+CE)}Ys(z_,"onAnimationEnd"),Ys(V_,"onAnimationIteration"),Ys(H_,"onAnimationStart"),Ys("dblclick","onDoubleClick"),Ys("focusin","onFocus"),Ys("focusout","onBlur"),Ys(G_,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xl));function Y_(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,Xt(f,s,void 0,i),i.currentTarget=null}function j_(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],m=f.event;f=f.listeners;e:{var y=void 0;if(s)for(var R=f.length-1;0<=R;R--){var B=f[R],X=B.instance,ce=B.currentTarget;if(B=B.listener,X!==y&&m.isPropagationStopped())break e;Y_(m,B,ce),y=X}else for(R=0;R<f.length;R++){if(B=f[R],X=B.instance,ce=B.currentTarget,B=B.listener,X!==y&&m.isPropagationStopped())break e;Y_(m,B,ce),y=X}}}if(vt)throw i=Kt,vt=!1,Kt=null,i}function cn(i,s){var l=s[ah];l===void 0&&(l=s[ah]=new Set);var f=i+"__bubble";l.has(f)||(q_(s,i,2,!1),l.add(f))}function eh(i,s,l){var f=0;s&&(f|=4),q_(l,i,f,s)}var xc="_reactListening"+Math.random().toString(36).slice(2);function Yl(i){if(!i[xc]){i[xc]=!0,n.forEach(function(l){l!=="selectionchange"&&(RE.has(l)||eh(l,!1,i),eh(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[xc]||(s[xc]=!0,eh("selectionchange",!1,s))}}function q_(i,s,l,f){switch(__(s)){case 1:var m=HM;break;case 4:m=GM;break;default:m=Od}l=m.bind(null,s,l,i),m=void 0,!Ue||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function th(i,s,l,f,m){var y=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var R=f.tag;if(R===3||R===4){var B=f.stateNode.containerInfo;if(B===m||B.nodeType===8&&B.parentNode===m)break;if(R===4)for(R=f.return;R!==null;){var X=R.tag;if((X===3||X===4)&&(X=R.stateNode.containerInfo,X===m||X.nodeType===8&&X.parentNode===m))return;R=R.return}for(;B!==null;){if(R=Po(B),R===null)return;if(X=R.tag,X===5||X===6){f=y=R;continue e}B=B.parentNode}}f=f.return}nt(function(){var ce=y,Se=z(l),we=[];e:{var ye=W_.get(i);if(ye!==void 0){var $e=zd,tt=i;switch(i){case"keypress":if(hc(l)===0)break e;case"keydown":case"keyup":$e=rE;break;case"focusin":tt="focus",$e=Gd;break;case"focusout":tt="blur",$e=Gd;break;case"beforeblur":case"afterblur":$e=Gd;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=y_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=YM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=aE;break;case z_:case V_:case H_:$e=$M;break;case G_:$e=uE;break;case"scroll":$e=WM;break;case"wheel":$e=fE;break;case"copy":case"cut":case"paste":$e=ZM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=M_}var it=(s&4)!==0,Rn=!it&&i==="scroll",ie=it?ye!==null?ye+"Capture":null:ye;it=[];for(var $=ce,ae;$!==null;){ae=$;var Re=ae.stateNode;if(ae.tag===5&&Re!==null&&(ae=Re,ie!==null&&(Re=xt($,ie),Re!=null&&it.push(jl($,Re,ae)))),Rn)break;$=$.return}0<it.length&&(ye=new $e(ye,tt,null,l,Se),we.push({event:ye,listeners:it}))}}if((s&7)===0){e:{if(ye=i==="mouseover"||i==="pointerover",$e=i==="mouseout"||i==="pointerout",ye&&l!==_t&&(tt=l.relatedTarget||l.fromElement)&&(Po(tt)||tt[fs]))break e;if(($e||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,$e?(tt=l.relatedTarget||l.toElement,$e=ce,tt=tt?Po(tt):null,tt!==null&&(Rn=Pt(tt),tt!==Rn||tt.tag!==5&&tt.tag!==6)&&(tt=null)):($e=null,tt=ce),$e!==tt)){if(it=y_,Re="onMouseLeave",ie="onMouseEnter",$="mouse",(i==="pointerout"||i==="pointerover")&&(it=M_,Re="onPointerLeave",ie="onPointerEnter",$="pointer"),Rn=$e==null?ye:wa($e),ae=tt==null?ye:wa(tt),ye=new it(Re,$+"leave",$e,l,Se),ye.target=Rn,ye.relatedTarget=ae,Re=null,Po(Se)===ce&&(it=new it(ie,$+"enter",tt,l,Se),it.target=ae,it.relatedTarget=Rn,Re=it),Rn=Re,$e&&tt)t:{for(it=$e,ie=tt,$=0,ae=it;ae;ae=Ea(ae))$++;for(ae=0,Re=ie;Re;Re=Ea(Re))ae++;for(;0<$-ae;)it=Ea(it),$--;for(;0<ae-$;)ie=Ea(ie),ae--;for(;$--;){if(it===ie||ie!==null&&it===ie.alternate)break t;it=Ea(it),ie=Ea(ie)}it=null}else it=null;$e!==null&&$_(we,ye,$e,it,!1),tt!==null&&Rn!==null&&$_(we,Rn,tt,it,!0)}}e:{if(ye=ce?wa(ce):window,$e=ye.nodeName&&ye.nodeName.toLowerCase(),$e==="select"||$e==="input"&&ye.type==="file")var st=vE;else if(R_(ye))if(P_)st=ME;else{st=yE;var mt=xE}else($e=ye.nodeName)&&$e.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(st=SE);if(st&&(st=st(i,ce))){b_(we,st,l,Se);break e}mt&&mt(i,ye,ce),i==="focusout"&&(mt=ye._wrapperState)&&mt.controlled&&ye.type==="number"&&Bt(ye,"number",ye.value)}switch(mt=ce?wa(ce):window,i){case"focusin":(R_(mt)||mt.contentEditable==="true")&&(Sa=mt,$d=ce,Wl=null);break;case"focusout":Wl=$d=Sa=null;break;case"mousedown":Kd=!0;break;case"contextmenu":case"mouseup":case"dragend":Kd=!1,k_(we,l,Se);break;case"selectionchange":if(wE)break;case"keydown":case"keyup":k_(we,l,Se)}var gt;if(Xd)e:{switch(i){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else ya?A_(i,l)&&(St="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(St="onCompositionStart");St&&(E_&&l.locale!=="ko"&&(ya||St!=="onCompositionStart"?St==="onCompositionEnd"&&ya&&(gt=v_()):(Xs=Se,Bd="value"in Xs?Xs.value:Xs.textContent,ya=!0)),mt=yc(ce,St),0<mt.length&&(St=new S_(St,i,null,l,Se),we.push({event:St,listeners:mt}),gt?St.data=gt:(gt=C_(l),gt!==null&&(St.data=gt)))),(gt=hE?pE(i,l):mE(i,l))&&(ce=yc(ce,"onBeforeInput"),0<ce.length&&(Se=new S_("onBeforeInput","beforeinput",null,l,Se),we.push({event:Se,listeners:ce}),Se.data=gt))}j_(we,s)})}function jl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function yc(i,s){for(var l=s+"Capture",f=[];i!==null;){var m=i,y=m.stateNode;m.tag===5&&y!==null&&(m=y,y=xt(i,l),y!=null&&f.unshift(jl(i,y,m)),y=xt(i,s),y!=null&&f.push(jl(i,y,m))),i=i.return}return f}function Ea(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function $_(i,s,l,f,m){for(var y=s._reactName,R=[];l!==null&&l!==f;){var B=l,X=B.alternate,ce=B.stateNode;if(X!==null&&X===f)break;B.tag===5&&ce!==null&&(B=ce,m?(X=xt(l,y),X!=null&&R.unshift(jl(l,X,B))):m||(X=xt(l,y),X!=null&&R.push(jl(l,X,B)))),l=l.return}R.length!==0&&i.push({event:s,listeners:R})}var bE=/\r\n?/g,PE=/\u0000|\uFFFD/g;function K_(i){return(typeof i=="string"?i:""+i).replace(bE,`
`).replace(PE,"")}function Sc(i,s,l){if(s=K_(s),K_(i)!==s&&l)throw Error(t(425))}function Mc(){}var nh=null,ih=null;function rh(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var sh=typeof setTimeout=="function"?setTimeout:void 0,DE=typeof clearTimeout=="function"?clearTimeout:void 0,Z_=typeof Promise=="function"?Promise:void 0,LE=typeof queueMicrotask=="function"?queueMicrotask:typeof Z_<"u"?function(i){return Z_.resolve(null).then(i).catch(NE)}:sh;function NE(i){setTimeout(function(){throw i})}function oh(i,s){var l=s,f=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){i.removeChild(m),Ol(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Ol(s)}function js(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Q_(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Ta=Math.random().toString(36).slice(2),Wr="__reactFiber$"+Ta,ql="__reactProps$"+Ta,fs="__reactContainer$"+Ta,ah="__reactEvents$"+Ta,IE="__reactListeners$"+Ta,UE="__reactHandles$"+Ta;function Po(i){var s=i[Wr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[fs]||l[Wr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Q_(i);i!==null;){if(l=i[Wr])return l;i=Q_(i)}return s}i=l,l=i.parentNode}return null}function $l(i){return i=i[Wr]||i[fs],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function wa(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Ec(i){return i[ql]||null}var lh=[],Aa=-1;function qs(i){return{current:i}}function fn(i){0>Aa||(i.current=lh[Aa],lh[Aa]=null,Aa--)}function ln(i,s){Aa++,lh[Aa]=i.current,i.current=s}var $s={},ii=qs($s),Di=qs(!1),Do=$s;function Ca(i,s){var l=i.type.contextTypes;if(!l)return $s;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},y;for(y in l)m[y]=s[y];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Li(i){return i=i.childContextTypes,i!=null}function Tc(){fn(Di),fn(ii)}function J_(i,s,l){if(ii.current!==$s)throw Error(t(168));ln(ii,s),ln(Di,l)}function e0(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,me(i)||"Unknown",m));return U({},l,f)}function wc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||$s,Do=ii.current,ln(ii,i),ln(Di,Di.current),!0}function t0(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=e0(i,s,Do),f.__reactInternalMemoizedMergedChildContext=i,fn(Di),fn(ii),ln(ii,i)):fn(Di),ln(Di,l)}var ds=null,Ac=!1,uh=!1;function n0(i){ds===null?ds=[i]:ds.push(i)}function FE(i){Ac=!0,n0(i)}function Ks(){if(!uh&&ds!==null){uh=!0;var i=0,s=yt;try{var l=ds;for(yt=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}ds=null,Ac=!1}catch(m){throw ds!==null&&(ds=ds.slice(i+1)),yn(le,Ks),m}finally{yt=s,uh=!1}}return null}var Ra=[],ba=0,Cc=null,Rc=0,dr=[],hr=0,Lo=null,hs=1,ps="";function No(i,s){Ra[ba++]=Rc,Ra[ba++]=Cc,Cc=i,Rc=s}function i0(i,s,l){dr[hr++]=hs,dr[hr++]=ps,dr[hr++]=Lo,Lo=i;var f=hs;i=ps;var m=32-dt(f)-1;f&=~(1<<m),l+=1;var y=32-dt(s)+m;if(30<y){var R=m-m%5;y=(f&(1<<R)-1).toString(32),f>>=R,m-=R,hs=1<<32-dt(s)+m|l<<m|f,ps=y+i}else hs=1<<y|l<<m|f,ps=i}function ch(i){i.return!==null&&(No(i,1),i0(i,1,0))}function fh(i){for(;i===Cc;)Cc=Ra[--ba],Ra[ba]=null,Rc=Ra[--ba],Ra[ba]=null;for(;i===Lo;)Lo=dr[--hr],dr[hr]=null,ps=dr[--hr],dr[hr]=null,hs=dr[--hr],dr[hr]=null}var qi=null,$i=null,dn=!1,Lr=null;function r0(i,s){var l=_r(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function s0(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,qi=i,$i=js(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,qi=i,$i=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Lo!==null?{id:hs,overflow:ps}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=_r(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,qi=i,$i=null,!0):!1;default:return!1}}function dh(i){return(i.mode&1)!==0&&(i.flags&128)===0}function hh(i){if(dn){var s=$i;if(s){var l=s;if(!s0(i,s)){if(dh(i))throw Error(t(418));s=js(l.nextSibling);var f=qi;s&&s0(i,s)?r0(f,l):(i.flags=i.flags&-4097|2,dn=!1,qi=i)}}else{if(dh(i))throw Error(t(418));i.flags=i.flags&-4097|2,dn=!1,qi=i}}}function o0(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;qi=i}function bc(i){if(i!==qi)return!1;if(!dn)return o0(i),dn=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!rh(i.type,i.memoizedProps)),s&&(s=$i)){if(dh(i))throw a0(),Error(t(418));for(;s;)r0(i,s),s=js(s.nextSibling)}if(o0(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){$i=js(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}$i=null}}else $i=qi?js(i.stateNode.nextSibling):null;return!0}function a0(){for(var i=$i;i;)i=js(i.nextSibling)}function Pa(){$i=qi=null,dn=!1}function ph(i){Lr===null?Lr=[i]:Lr.push(i)}var OE=C.ReactCurrentBatchConfig;function Kl(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var m=f,y=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===y?s.ref:(s=function(R){var B=m.refs;R===null?delete B[y]:B[y]=R},s._stringRef=y,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Pc(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function l0(i){var s=i._init;return s(i._payload)}function u0(i){function s(ie,$){if(i){var ae=ie.deletions;ae===null?(ie.deletions=[$],ie.flags|=16):ae.push($)}}function l(ie,$){if(!i)return null;for(;$!==null;)s(ie,$),$=$.sibling;return null}function f(ie,$){for(ie=new Map;$!==null;)$.key!==null?ie.set($.key,$):ie.set($.index,$),$=$.sibling;return ie}function m(ie,$){return ie=ro(ie,$),ie.index=0,ie.sibling=null,ie}function y(ie,$,ae){return ie.index=ae,i?(ae=ie.alternate,ae!==null?(ae=ae.index,ae<$?(ie.flags|=2,$):ae):(ie.flags|=2,$)):(ie.flags|=1048576,$)}function R(ie){return i&&ie.alternate===null&&(ie.flags|=2),ie}function B(ie,$,ae,Re){return $===null||$.tag!==6?($=sp(ae,ie.mode,Re),$.return=ie,$):($=m($,ae),$.return=ie,$)}function X(ie,$,ae,Re){var st=ae.type;return st===N?Se(ie,$,ae.props.children,Re,ae.key):$!==null&&($.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===Q&&l0(st)===$.type)?(Re=m($,ae.props),Re.ref=Kl(ie,$,ae),Re.return=ie,Re):(Re=ef(ae.type,ae.key,ae.props,null,ie.mode,Re),Re.ref=Kl(ie,$,ae),Re.return=ie,Re)}function ce(ie,$,ae,Re){return $===null||$.tag!==4||$.stateNode.containerInfo!==ae.containerInfo||$.stateNode.implementation!==ae.implementation?($=op(ae,ie.mode,Re),$.return=ie,$):($=m($,ae.children||[]),$.return=ie,$)}function Se(ie,$,ae,Re,st){return $===null||$.tag!==7?($=Vo(ae,ie.mode,Re,st),$.return=ie,$):($=m($,ae),$.return=ie,$)}function we(ie,$,ae){if(typeof $=="string"&&$!==""||typeof $=="number")return $=sp(""+$,ie.mode,ae),$.return=ie,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case L:return ae=ef($.type,$.key,$.props,null,ie.mode,ae),ae.ref=Kl(ie,null,$),ae.return=ie,ae;case I:return $=op($,ie.mode,ae),$.return=ie,$;case Q:var Re=$._init;return we(ie,Re($._payload),ae)}if(Tt($)||te($))return $=Vo($,ie.mode,ae,null),$.return=ie,$;Pc(ie,$)}return null}function ye(ie,$,ae,Re){var st=$!==null?$.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return st!==null?null:B(ie,$,""+ae,Re);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case L:return ae.key===st?X(ie,$,ae,Re):null;case I:return ae.key===st?ce(ie,$,ae,Re):null;case Q:return st=ae._init,ye(ie,$,st(ae._payload),Re)}if(Tt(ae)||te(ae))return st!==null?null:Se(ie,$,ae,Re,null);Pc(ie,ae)}return null}function $e(ie,$,ae,Re,st){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return ie=ie.get(ae)||null,B($,ie,""+Re,st);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case L:return ie=ie.get(Re.key===null?ae:Re.key)||null,X($,ie,Re,st);case I:return ie=ie.get(Re.key===null?ae:Re.key)||null,ce($,ie,Re,st);case Q:var mt=Re._init;return $e(ie,$,ae,mt(Re._payload),st)}if(Tt(Re)||te(Re))return ie=ie.get(ae)||null,Se($,ie,Re,st,null);Pc($,Re)}return null}function tt(ie,$,ae,Re){for(var st=null,mt=null,gt=$,St=$=0,Yn=null;gt!==null&&St<ae.length;St++){gt.index>St?(Yn=gt,gt=null):Yn=gt.sibling;var Gt=ye(ie,gt,ae[St],Re);if(Gt===null){gt===null&&(gt=Yn);break}i&&gt&&Gt.alternate===null&&s(ie,gt),$=y(Gt,$,St),mt===null?st=Gt:mt.sibling=Gt,mt=Gt,gt=Yn}if(St===ae.length)return l(ie,gt),dn&&No(ie,St),st;if(gt===null){for(;St<ae.length;St++)gt=we(ie,ae[St],Re),gt!==null&&($=y(gt,$,St),mt===null?st=gt:mt.sibling=gt,mt=gt);return dn&&No(ie,St),st}for(gt=f(ie,gt);St<ae.length;St++)Yn=$e(gt,ie,St,ae[St],Re),Yn!==null&&(i&&Yn.alternate!==null&&gt.delete(Yn.key===null?St:Yn.key),$=y(Yn,$,St),mt===null?st=Yn:mt.sibling=Yn,mt=Yn);return i&&gt.forEach(function(so){return s(ie,so)}),dn&&No(ie,St),st}function it(ie,$,ae,Re){var st=te(ae);if(typeof st!="function")throw Error(t(150));if(ae=st.call(ae),ae==null)throw Error(t(151));for(var mt=st=null,gt=$,St=$=0,Yn=null,Gt=ae.next();gt!==null&&!Gt.done;St++,Gt=ae.next()){gt.index>St?(Yn=gt,gt=null):Yn=gt.sibling;var so=ye(ie,gt,Gt.value,Re);if(so===null){gt===null&&(gt=Yn);break}i&&gt&&so.alternate===null&&s(ie,gt),$=y(so,$,St),mt===null?st=so:mt.sibling=so,mt=so,gt=Yn}if(Gt.done)return l(ie,gt),dn&&No(ie,St),st;if(gt===null){for(;!Gt.done;St++,Gt=ae.next())Gt=we(ie,Gt.value,Re),Gt!==null&&($=y(Gt,$,St),mt===null?st=Gt:mt.sibling=Gt,mt=Gt);return dn&&No(ie,St),st}for(gt=f(ie,gt);!Gt.done;St++,Gt=ae.next())Gt=$e(gt,ie,St,Gt.value,Re),Gt!==null&&(i&&Gt.alternate!==null&&gt.delete(Gt.key===null?St:Gt.key),$=y(Gt,$,St),mt===null?st=Gt:mt.sibling=Gt,mt=Gt);return i&&gt.forEach(function(g1){return s(ie,g1)}),dn&&No(ie,St),st}function Rn(ie,$,ae,Re){if(typeof ae=="object"&&ae!==null&&ae.type===N&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case L:e:{for(var st=ae.key,mt=$;mt!==null;){if(mt.key===st){if(st=ae.type,st===N){if(mt.tag===7){l(ie,mt.sibling),$=m(mt,ae.props.children),$.return=ie,ie=$;break e}}else if(mt.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===Q&&l0(st)===mt.type){l(ie,mt.sibling),$=m(mt,ae.props),$.ref=Kl(ie,mt,ae),$.return=ie,ie=$;break e}l(ie,mt);break}else s(ie,mt);mt=mt.sibling}ae.type===N?($=Vo(ae.props.children,ie.mode,Re,ae.key),$.return=ie,ie=$):(Re=ef(ae.type,ae.key,ae.props,null,ie.mode,Re),Re.ref=Kl(ie,$,ae),Re.return=ie,ie=Re)}return R(ie);case I:e:{for(mt=ae.key;$!==null;){if($.key===mt)if($.tag===4&&$.stateNode.containerInfo===ae.containerInfo&&$.stateNode.implementation===ae.implementation){l(ie,$.sibling),$=m($,ae.children||[]),$.return=ie,ie=$;break e}else{l(ie,$);break}else s(ie,$);$=$.sibling}$=op(ae,ie.mode,Re),$.return=ie,ie=$}return R(ie);case Q:return mt=ae._init,Rn(ie,$,mt(ae._payload),Re)}if(Tt(ae))return tt(ie,$,ae,Re);if(te(ae))return it(ie,$,ae,Re);Pc(ie,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,$!==null&&$.tag===6?(l(ie,$.sibling),$=m($,ae),$.return=ie,ie=$):(l(ie,$),$=sp(ae,ie.mode,Re),$.return=ie,ie=$),R(ie)):l(ie,$)}return Rn}var Da=u0(!0),c0=u0(!1),Dc=qs(null),Lc=null,La=null,mh=null;function gh(){mh=La=Lc=null}function _h(i){var s=Dc.current;fn(Dc),i._currentValue=s}function vh(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function Na(i,s){Lc=i,mh=La=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Ni=!0),i.firstContext=null)}function pr(i){var s=i._currentValue;if(mh!==i)if(i={context:i,memoizedValue:s,next:null},La===null){if(Lc===null)throw Error(t(308));La=i,Lc.dependencies={lanes:0,firstContext:i}}else La=La.next=i;return s}var Io=null;function xh(i){Io===null?Io=[i]:Io.push(i)}function f0(i,s,l,f){var m=s.interleaved;return m===null?(l.next=l,xh(s)):(l.next=m.next,m.next=l),s.interleaved=l,ms(i,f)}function ms(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Zs=!1;function yh(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d0(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function gs(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Qs(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(Vt&2)!==0){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,ms(i,l)}return m=f.interleaved,m===null?(s.next=s,xh(f)):(s.next=m.next,m.next=s),f.interleaved=s,ms(i,l)}function Nc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Yt(i,l)}}function h0(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?m=y=R:y=y.next=R,l=l.next}while(l!==null);y===null?m=y=s:y=y.next=s}else m=y=s;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:y,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Ic(i,s,l,f){var m=i.updateQueue;Zs=!1;var y=m.firstBaseUpdate,R=m.lastBaseUpdate,B=m.shared.pending;if(B!==null){m.shared.pending=null;var X=B,ce=X.next;X.next=null,R===null?y=ce:R.next=ce,R=X;var Se=i.alternate;Se!==null&&(Se=Se.updateQueue,B=Se.lastBaseUpdate,B!==R&&(B===null?Se.firstBaseUpdate=ce:B.next=ce,Se.lastBaseUpdate=X))}if(y!==null){var we=m.baseState;R=0,Se=ce=X=null,B=y;do{var ye=B.lane,$e=B.eventTime;if((f&ye)===ye){Se!==null&&(Se=Se.next={eventTime:$e,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var tt=i,it=B;switch(ye=s,$e=l,it.tag){case 1:if(tt=it.payload,typeof tt=="function"){we=tt.call($e,we,ye);break e}we=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=it.payload,ye=typeof tt=="function"?tt.call($e,we,ye):tt,ye==null)break e;we=U({},we,ye);break e;case 2:Zs=!0}}B.callback!==null&&B.lane!==0&&(i.flags|=64,ye=m.effects,ye===null?m.effects=[B]:ye.push(B))}else $e={eventTime:$e,lane:ye,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Se===null?(ce=Se=$e,X=we):Se=Se.next=$e,R|=ye;if(B=B.next,B===null){if(B=m.shared.pending,B===null)break;ye=B,B=ye.next,ye.next=null,m.lastBaseUpdate=ye,m.shared.pending=null}}while(!0);if(Se===null&&(X=we),m.baseState=X,m.firstBaseUpdate=ce,m.lastBaseUpdate=Se,s=m.shared.interleaved,s!==null){m=s;do R|=m.lane,m=m.next;while(m!==s)}else y===null&&(m.shared.lanes=0);Oo|=R,i.lanes=R,i.memoizedState=we}}function p0(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Zl={},Xr=qs(Zl),Ql=qs(Zl),Jl=qs(Zl);function Uo(i){if(i===Zl)throw Error(t(174));return i}function Sh(i,s){switch(ln(Jl,s),ln(Ql,i),ln(Xr,Zl),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pe(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=pe(s,i)}fn(Xr),ln(Xr,s)}function Ia(){fn(Xr),fn(Ql),fn(Jl)}function m0(i){Uo(Jl.current);var s=Uo(Xr.current),l=pe(s,i.type);s!==l&&(ln(Ql,i),ln(Xr,l))}function Mh(i){Ql.current===i&&(fn(Xr),fn(Ql))}var pn=qs(0);function Uc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Eh=[];function Th(){for(var i=0;i<Eh.length;i++)Eh[i]._workInProgressVersionPrimary=null;Eh.length=0}var Fc=C.ReactCurrentDispatcher,wh=C.ReactCurrentBatchConfig,Fo=0,mn=null,On=null,Wn=null,Oc=!1,eu=!1,tu=0,kE=0;function ri(){throw Error(t(321))}function Ah(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Dr(i[l],s[l]))return!1;return!0}function Ch(i,s,l,f,m,y){if(Fo=y,mn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Fc.current=i===null||i.memoizedState===null?HE:GE,i=l(f,m),eu){y=0;do{if(eu=!1,tu=0,25<=y)throw Error(t(301));y+=1,Wn=On=null,s.updateQueue=null,Fc.current=WE,i=l(f,m)}while(eu)}if(Fc.current=zc,s=On!==null&&On.next!==null,Fo=0,Wn=On=mn=null,Oc=!1,s)throw Error(t(300));return i}function Rh(){var i=tu!==0;return tu=0,i}function Yr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wn===null?mn.memoizedState=Wn=i:Wn=Wn.next=i,Wn}function mr(){if(On===null){var i=mn.alternate;i=i!==null?i.memoizedState:null}else i=On.next;var s=Wn===null?mn.memoizedState:Wn.next;if(s!==null)Wn=s,On=i;else{if(i===null)throw Error(t(310));On=i,i={memoizedState:On.memoizedState,baseState:On.baseState,baseQueue:On.baseQueue,queue:On.queue,next:null},Wn===null?mn.memoizedState=Wn=i:Wn=Wn.next=i}return Wn}function nu(i,s){return typeof s=="function"?s(i):s}function bh(i){var s=mr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=On,m=f.baseQueue,y=l.pending;if(y!==null){if(m!==null){var R=m.next;m.next=y.next,y.next=R}f.baseQueue=m=y,l.pending=null}if(m!==null){y=m.next,f=f.baseState;var B=R=null,X=null,ce=y;do{var Se=ce.lane;if((Fo&Se)===Se)X!==null&&(X=X.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),f=ce.hasEagerState?ce.eagerState:i(f,ce.action);else{var we={lane:Se,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};X===null?(B=X=we,R=f):X=X.next=we,mn.lanes|=Se,Oo|=Se}ce=ce.next}while(ce!==null&&ce!==y);X===null?R=f:X.next=B,Dr(f,s.memoizedState)||(Ni=!0),s.memoizedState=f,s.baseState=R,s.baseQueue=X,l.lastRenderedState=f}if(i=l.interleaved,i!==null){m=i;do y=m.lane,mn.lanes|=y,Oo|=y,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Ph(i){var s=mr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,m=l.pending,y=s.memoizedState;if(m!==null){l.pending=null;var R=m=m.next;do y=i(y,R.action),R=R.next;while(R!==m);Dr(y,s.memoizedState)||(Ni=!0),s.memoizedState=y,s.baseQueue===null&&(s.baseState=y),l.lastRenderedState=y}return[y,f]}function g0(){}function _0(i,s){var l=mn,f=mr(),m=s(),y=!Dr(f.memoizedState,m);if(y&&(f.memoizedState=m,Ni=!0),f=f.queue,Dh(y0.bind(null,l,f,i),[i]),f.getSnapshot!==s||y||Wn!==null&&Wn.memoizedState.tag&1){if(l.flags|=2048,iu(9,x0.bind(null,l,f,m,s),void 0,null),Xn===null)throw Error(t(349));(Fo&30)!==0||v0(l,s,m)}return m}function v0(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=mn.updateQueue,s===null?(s={lastEffect:null,stores:null},mn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function x0(i,s,l,f){s.value=l,s.getSnapshot=f,S0(s)&&M0(i)}function y0(i,s,l){return l(function(){S0(s)&&M0(i)})}function S0(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Dr(i,l)}catch{return!0}}function M0(i){var s=ms(i,1);s!==null&&Fr(s,i,1,-1)}function E0(i){var s=Yr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nu,lastRenderedState:i},s.queue=i,i=i.dispatch=VE.bind(null,mn,i),[s.memoizedState,i]}function iu(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=mn.updateQueue,s===null?(s={lastEffect:null,stores:null},mn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function T0(){return mr().memoizedState}function kc(i,s,l,f){var m=Yr();mn.flags|=i,m.memoizedState=iu(1|s,l,void 0,f===void 0?null:f)}function Bc(i,s,l,f){var m=mr();f=f===void 0?null:f;var y=void 0;if(On!==null){var R=On.memoizedState;if(y=R.destroy,f!==null&&Ah(f,R.deps)){m.memoizedState=iu(s,l,y,f);return}}mn.flags|=i,m.memoizedState=iu(1|s,l,y,f)}function w0(i,s){return kc(8390656,8,i,s)}function Dh(i,s){return Bc(2048,8,i,s)}function A0(i,s){return Bc(4,2,i,s)}function C0(i,s){return Bc(4,4,i,s)}function R0(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function b0(i,s,l){return l=l!=null?l.concat([i]):null,Bc(4,4,R0.bind(null,s,i),l)}function Lh(){}function P0(i,s){var l=mr();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Ah(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function D0(i,s){var l=mr();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Ah(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function L0(i,s,l){return(Fo&21)===0?(i.baseState&&(i.baseState=!1,Ni=!0),i.memoizedState=l):(Dr(l,s)||(l=bi(),mn.lanes|=l,Oo|=l,i.baseState=!0),s)}function BE(i,s){var l=yt;yt=l!==0&&4>l?l:4,i(!0);var f=wh.transition;wh.transition={};try{i(!1),s()}finally{yt=l,wh.transition=f}}function N0(){return mr().memoizedState}function zE(i,s,l){var f=no(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},I0(i))U0(s,l);else if(l=f0(i,s,l,f),l!==null){var m=vi();Fr(l,i,f,m),F0(l,s,f)}}function VE(i,s,l){var f=no(i),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(I0(i))U0(s,m);else{var y=i.alternate;if(i.lanes===0&&(y===null||y.lanes===0)&&(y=s.lastRenderedReducer,y!==null))try{var R=s.lastRenderedState,B=y(R,l);if(m.hasEagerState=!0,m.eagerState=B,Dr(B,R)){var X=s.interleaved;X===null?(m.next=m,xh(s)):(m.next=X.next,X.next=m),s.interleaved=m;return}}catch{}l=f0(i,s,m,f),l!==null&&(m=vi(),Fr(l,i,f,m),F0(l,s,f))}}function I0(i){var s=i.alternate;return i===mn||s!==null&&s===mn}function U0(i,s){eu=Oc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function F0(i,s,l){if((l&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Yt(i,l)}}var zc={readContext:pr,useCallback:ri,useContext:ri,useEffect:ri,useImperativeHandle:ri,useInsertionEffect:ri,useLayoutEffect:ri,useMemo:ri,useReducer:ri,useRef:ri,useState:ri,useDebugValue:ri,useDeferredValue:ri,useTransition:ri,useMutableSource:ri,useSyncExternalStore:ri,useId:ri,unstable_isNewReconciler:!1},HE={readContext:pr,useCallback:function(i,s){return Yr().memoizedState=[i,s===void 0?null:s],i},useContext:pr,useEffect:w0,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,kc(4194308,4,R0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return kc(4194308,4,i,s)},useInsertionEffect:function(i,s){return kc(4,2,i,s)},useMemo:function(i,s){var l=Yr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=Yr();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=zE.bind(null,mn,i),[f.memoizedState,i]},useRef:function(i){var s=Yr();return i={current:i},s.memoizedState=i},useState:E0,useDebugValue:Lh,useDeferredValue:function(i){return Yr().memoizedState=i},useTransition:function(){var i=E0(!1),s=i[0];return i=BE.bind(null,i[1]),Yr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=mn,m=Yr();if(dn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Xn===null)throw Error(t(349));(Fo&30)!==0||v0(f,s,l)}m.memoizedState=l;var y={value:l,getSnapshot:s};return m.queue=y,w0(y0.bind(null,f,y,i),[i]),f.flags|=2048,iu(9,x0.bind(null,f,y,l,s),void 0,null),l},useId:function(){var i=Yr(),s=Xn.identifierPrefix;if(dn){var l=ps,f=hs;l=(f&~(1<<32-dt(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=tu++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=kE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},GE={readContext:pr,useCallback:P0,useContext:pr,useEffect:Dh,useImperativeHandle:b0,useInsertionEffect:A0,useLayoutEffect:C0,useMemo:D0,useReducer:bh,useRef:T0,useState:function(){return bh(nu)},useDebugValue:Lh,useDeferredValue:function(i){var s=mr();return L0(s,On.memoizedState,i)},useTransition:function(){var i=bh(nu)[0],s=mr().memoizedState;return[i,s]},useMutableSource:g0,useSyncExternalStore:_0,useId:N0,unstable_isNewReconciler:!1},WE={readContext:pr,useCallback:P0,useContext:pr,useEffect:Dh,useImperativeHandle:b0,useInsertionEffect:A0,useLayoutEffect:C0,useMemo:D0,useReducer:Ph,useRef:T0,useState:function(){return Ph(nu)},useDebugValue:Lh,useDeferredValue:function(i){var s=mr();return On===null?s.memoizedState=i:L0(s,On.memoizedState,i)},useTransition:function(){var i=Ph(nu)[0],s=mr().memoizedState;return[i,s]},useMutableSource:g0,useSyncExternalStore:_0,useId:N0,unstable_isNewReconciler:!1};function Nr(i,s){if(i&&i.defaultProps){s=U({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Nh(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:U({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Vc={isMounted:function(i){return(i=i._reactInternals)?Pt(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=vi(),m=no(i),y=gs(f,m);y.payload=s,l!=null&&(y.callback=l),s=Qs(i,y,m),s!==null&&(Fr(s,i,m,f),Nc(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=vi(),m=no(i),y=gs(f,m);y.tag=1,y.payload=s,l!=null&&(y.callback=l),s=Qs(i,y,m),s!==null&&(Fr(s,i,m,f),Nc(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=vi(),f=no(i),m=gs(l,f);m.tag=2,s!=null&&(m.callback=s),s=Qs(i,m,f),s!==null&&(Fr(s,i,f,l),Nc(s,i,f))}};function O0(i,s,l,f,m,y,R){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,y,R):s.prototype&&s.prototype.isPureReactComponent?!Gl(l,f)||!Gl(m,y):!0}function k0(i,s,l){var f=!1,m=$s,y=s.contextType;return typeof y=="object"&&y!==null?y=pr(y):(m=Li(s)?Do:ii.current,f=s.contextTypes,y=(f=f!=null)?Ca(i,m):$s),s=new s(l,y),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Vc,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=y),s}function B0(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&Vc.enqueueReplaceState(s,s.state,null)}function Ih(i,s,l,f){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},yh(i);var y=s.contextType;typeof y=="object"&&y!==null?m.context=pr(y):(y=Li(s)?Do:ii.current,m.context=Ca(i,y)),m.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Nh(i,s,y,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Vc.enqueueReplaceState(m,m.state,null),Ic(i,l,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function Ua(i,s){try{var l="",f=s;do l+=ke(f),f=f.return;while(f);var m=l}catch(y){m=`
Error generating stack: `+y.message+`
`+y.stack}return{value:i,source:s,stack:m,digest:null}}function Uh(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Fh(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var XE=typeof WeakMap=="function"?WeakMap:Map;function z0(i,s,l){l=gs(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){qc||(qc=!0,Zh=f),Fh(i,s)},l}function V0(i,s,l){l=gs(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;l.payload=function(){return f(m)},l.callback=function(){Fh(i,s)}}var y=i.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){Fh(i,s),typeof f!="function"&&(eo===null?eo=new Set([this]):eo.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})}),l}function H0(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new XE;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(l)||(m.add(l),i=s1.bind(null,i,s,l),s.then(i,i))}function G0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function W0(i,s,l,f,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=gs(-1,1),s.tag=2,Qs(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var YE=C.ReactCurrentOwner,Ni=!1;function _i(i,s,l,f){s.child=i===null?c0(s,null,l,f):Da(s,i.child,l,f)}function X0(i,s,l,f,m){l=l.render;var y=s.ref;return Na(s,m),f=Ch(i,s,l,f,y,m),l=Rh(),i!==null&&!Ni?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,_s(i,s,m)):(dn&&l&&ch(s),s.flags|=1,_i(i,s,f,m),s.child)}function Y0(i,s,l,f,m){if(i===null){var y=l.type;return typeof y=="function"&&!rp(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=y,j0(i,s,y,f,m)):(i=ef(l.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(y=i.child,(i.lanes&m)===0){var R=y.memoizedProps;if(l=l.compare,l=l!==null?l:Gl,l(R,f)&&i.ref===s.ref)return _s(i,s,m)}return s.flags|=1,i=ro(y,f),i.ref=s.ref,i.return=s,s.child=i}function j0(i,s,l,f,m){if(i!==null){var y=i.memoizedProps;if(Gl(y,f)&&i.ref===s.ref)if(Ni=!1,s.pendingProps=f=y,(i.lanes&m)!==0)(i.flags&131072)!==0&&(Ni=!0);else return s.lanes=i.lanes,_s(i,s,m)}return Oh(i,s,l,f,m)}function q0(i,s,l){var f=s.pendingProps,m=f.children,y=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},ln(Oa,Ki),Ki|=l;else{if((l&1073741824)===0)return i=y!==null?y.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,ln(Oa,Ki),Ki|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=y!==null?y.baseLanes:l,ln(Oa,Ki),Ki|=f}else y!==null?(f=y.baseLanes|l,s.memoizedState=null):f=l,ln(Oa,Ki),Ki|=f;return _i(i,s,m,l),s.child}function $0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Oh(i,s,l,f,m){var y=Li(l)?Do:ii.current;return y=Ca(s,y),Na(s,m),l=Ch(i,s,l,f,y,m),f=Rh(),i!==null&&!Ni?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,_s(i,s,m)):(dn&&f&&ch(s),s.flags|=1,_i(i,s,l,m),s.child)}function K0(i,s,l,f,m){if(Li(l)){var y=!0;wc(s)}else y=!1;if(Na(s,m),s.stateNode===null)Gc(i,s),k0(s,l,f),Ih(s,l,f,m),f=!0;else if(i===null){var R=s.stateNode,B=s.memoizedProps;R.props=B;var X=R.context,ce=l.contextType;typeof ce=="object"&&ce!==null?ce=pr(ce):(ce=Li(l)?Do:ii.current,ce=Ca(s,ce));var Se=l.getDerivedStateFromProps,we=typeof Se=="function"||typeof R.getSnapshotBeforeUpdate=="function";we||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(B!==f||X!==ce)&&B0(s,R,f,ce),Zs=!1;var ye=s.memoizedState;R.state=ye,Ic(s,f,R,m),X=s.memoizedState,B!==f||ye!==X||Di.current||Zs?(typeof Se=="function"&&(Nh(s,l,Se,f),X=s.memoizedState),(B=Zs||O0(s,l,B,f,ye,X,ce))?(we||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(s.flags|=4194308)):(typeof R.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=X),R.props=f,R.state=X,R.context=ce,f=B):(typeof R.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{R=s.stateNode,d0(i,s),B=s.memoizedProps,ce=s.type===s.elementType?B:Nr(s.type,B),R.props=ce,we=s.pendingProps,ye=R.context,X=l.contextType,typeof X=="object"&&X!==null?X=pr(X):(X=Li(l)?Do:ii.current,X=Ca(s,X));var $e=l.getDerivedStateFromProps;(Se=typeof $e=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(B!==we||ye!==X)&&B0(s,R,f,X),Zs=!1,ye=s.memoizedState,R.state=ye,Ic(s,f,R,m);var tt=s.memoizedState;B!==we||ye!==tt||Di.current||Zs?(typeof $e=="function"&&(Nh(s,l,$e,f),tt=s.memoizedState),(ce=Zs||O0(s,l,ce,f,ye,tt,X)||!1)?(Se||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(f,tt,X),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(f,tt,X)),typeof R.componentDidUpdate=="function"&&(s.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof R.componentDidUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=tt),R.props=f,R.state=tt,R.context=X,f=ce):(typeof R.componentDidUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),f=!1)}return kh(i,s,l,f,y,m)}function kh(i,s,l,f,m,y){$0(i,s);var R=(s.flags&128)!==0;if(!f&&!R)return m&&t0(s,l,!1),_s(i,s,y);f=s.stateNode,YE.current=s;var B=R&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&R?(s.child=Da(s,i.child,null,y),s.child=Da(s,null,B,y)):_i(i,s,B,y),s.memoizedState=f.state,m&&t0(s,l,!0),s.child}function Z0(i){var s=i.stateNode;s.pendingContext?J_(i,s.pendingContext,s.pendingContext!==s.context):s.context&&J_(i,s.context,!1),Sh(i,s.containerInfo)}function Q0(i,s,l,f,m){return Pa(),ph(m),s.flags|=256,_i(i,s,l,f),s.child}var Bh={dehydrated:null,treeContext:null,retryLane:0};function zh(i){return{baseLanes:i,cachePool:null,transitions:null}}function J0(i,s,l){var f=s.pendingProps,m=pn.current,y=!1,R=(s.flags&128)!==0,B;if((B=R)||(B=i!==null&&i.memoizedState===null?!1:(m&2)!==0),B?(y=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),ln(pn,m&1),i===null)return hh(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(R=f.children,i=f.fallback,y?(f=s.mode,y=s.child,R={mode:"hidden",children:R},(f&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=R):y=tf(R,f,0,null),i=Vo(i,f,l,null),y.return=s,i.return=s,y.sibling=i,s.child=y,s.child.memoizedState=zh(l),s.memoizedState=Bh,i):Vh(s,R));if(m=i.memoizedState,m!==null&&(B=m.dehydrated,B!==null))return jE(i,s,R,f,B,m,l);if(y){y=f.fallback,R=s.mode,m=i.child,B=m.sibling;var X={mode:"hidden",children:f.children};return(R&1)===0&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=X,s.deletions=null):(f=ro(m,X),f.subtreeFlags=m.subtreeFlags&14680064),B!==null?y=ro(B,y):(y=Vo(y,R,l,null),y.flags|=2),y.return=s,f.return=s,f.sibling=y,s.child=f,f=y,y=s.child,R=i.child.memoizedState,R=R===null?zh(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},y.memoizedState=R,y.childLanes=i.childLanes&~l,s.memoizedState=Bh,f}return y=i.child,i=y.sibling,f=ro(y,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function Vh(i,s){return s=tf({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Hc(i,s,l,f){return f!==null&&ph(f),Da(s,i.child,null,l),i=Vh(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function jE(i,s,l,f,m,y,R){if(l)return s.flags&256?(s.flags&=-257,f=Uh(Error(t(422))),Hc(i,s,R,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(y=f.fallback,m=s.mode,f=tf({mode:"visible",children:f.children},m,0,null),y=Vo(y,m,R,null),y.flags|=2,f.return=s,y.return=s,f.sibling=y,s.child=f,(s.mode&1)!==0&&Da(s,i.child,null,R),s.child.memoizedState=zh(R),s.memoizedState=Bh,y);if((s.mode&1)===0)return Hc(i,s,R,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var B=f.dgst;return f=B,y=Error(t(419)),f=Uh(y,f,void 0),Hc(i,s,R,f)}if(B=(R&i.childLanes)!==0,Ni||B){if(f=Xn,f!==null){switch(R&-R){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|R))!==0?0:m,m!==0&&m!==y.retryLane&&(y.retryLane=m,ms(i,m),Fr(f,i,m,-1))}return ip(),f=Uh(Error(t(421))),Hc(i,s,R,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=o1.bind(null,i),m._reactRetry=s,null):(i=y.treeContext,$i=js(m.nextSibling),qi=s,dn=!0,Lr=null,i!==null&&(dr[hr++]=hs,dr[hr++]=ps,dr[hr++]=Lo,hs=i.id,ps=i.overflow,Lo=s),s=Vh(s,f.children),s.flags|=4096,s)}function ev(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),vh(i.return,s,l)}function Hh(i,s,l,f,m){var y=i.memoizedState;y===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=f,y.tail=l,y.tailMode=m)}function tv(i,s,l){var f=s.pendingProps,m=f.revealOrder,y=f.tail;if(_i(i,s,f.children,l),f=pn.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&ev(i,l,s);else if(i.tag===19)ev(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(ln(pn,f),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&Uc(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Hh(s,!1,m,l,y);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&Uc(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Hh(s,!0,l,null,y);break;case"together":Hh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Gc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function _s(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Oo|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=ro(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=ro(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function qE(i,s,l){switch(s.tag){case 3:Z0(s),Pa();break;case 5:m0(s);break;case 1:Li(s.type)&&wc(s);break;case 4:Sh(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;ln(Dc,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(ln(pn,pn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?J0(i,s,l):(ln(pn,pn.current&1),i=_s(i,s,l),i!==null?i.sibling:null);ln(pn,pn.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(i.flags&128)!==0){if(f)return tv(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),ln(pn,pn.current),f)break;return null;case 22:case 23:return s.lanes=0,q0(i,s,l)}return _s(i,s,l)}var nv,Gh,iv,rv;nv=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Gh=function(){},iv=function(i,s,l,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,Uo(Xr.current);var y=null;switch(l){case"input":m=ft(i,m),f=ft(i,f),y=[];break;case"select":m=U({},m,{value:void 0}),f=U({},f,{value:void 0}),y=[];break;case"textarea":m=He(i,m),f=He(i,f),y=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Mc)}Ye(l,f);var R;l=null;for(ce in m)if(!f.hasOwnProperty(ce)&&m.hasOwnProperty(ce)&&m[ce]!=null)if(ce==="style"){var B=m[ce];for(R in B)B.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(r.hasOwnProperty(ce)?y||(y=[]):(y=y||[]).push(ce,null));for(ce in f){var X=f[ce];if(B=m?.[ce],f.hasOwnProperty(ce)&&X!==B&&(X!=null||B!=null))if(ce==="style")if(B){for(R in B)!B.hasOwnProperty(R)||X&&X.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in X)X.hasOwnProperty(R)&&B[R]!==X[R]&&(l||(l={}),l[R]=X[R])}else l||(y||(y=[]),y.push(ce,l)),l=X;else ce==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,B=B?B.__html:void 0,X!=null&&B!==X&&(y=y||[]).push(ce,X)):ce==="children"?typeof X!="string"&&typeof X!="number"||(y=y||[]).push(ce,""+X):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(r.hasOwnProperty(ce)?(X!=null&&ce==="onScroll"&&cn("scroll",i),y||B===X||(y=[])):(y=y||[]).push(ce,X))}l&&(y=y||[]).push("style",l);var ce=y;(s.updateQueue=ce)&&(s.flags|=4)}},rv=function(i,s,l,f){l!==f&&(s.flags|=4)};function ru(i,s){if(!dn)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function si(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function $E(i,s,l){var f=s.pendingProps;switch(fh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return si(s),null;case 1:return Li(s.type)&&Tc(),si(s),null;case 3:return f=s.stateNode,Ia(),fn(Di),fn(ii),Th(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(bc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Lr!==null&&(ep(Lr),Lr=null))),Gh(i,s),si(s),null;case 5:Mh(s);var m=Uo(Jl.current);if(l=s.type,i!==null&&s.stateNode!=null)iv(i,s,l,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return si(s),null}if(i=Uo(Xr.current),bc(s)){f=s.stateNode,l=s.type;var y=s.memoizedProps;switch(f[Wr]=s,f[ql]=y,i=(s.mode&1)!==0,l){case"dialog":cn("cancel",f),cn("close",f);break;case"iframe":case"object":case"embed":cn("load",f);break;case"video":case"audio":for(m=0;m<Xl.length;m++)cn(Xl[m],f);break;case"source":cn("error",f);break;case"img":case"image":case"link":cn("error",f),cn("load",f);break;case"details":cn("toggle",f);break;case"input":Et(f,y),cn("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!y.multiple},cn("invalid",f);break;case"textarea":F(f,y),cn("invalid",f)}Ye(l,y),m=null;for(var R in y)if(y.hasOwnProperty(R)){var B=y[R];R==="children"?typeof B=="string"?f.textContent!==B&&(y.suppressHydrationWarning!==!0&&Sc(f.textContent,B,i),m=["children",B]):typeof B=="number"&&f.textContent!==""+B&&(y.suppressHydrationWarning!==!0&&Sc(f.textContent,B,i),m=["children",""+B]):r.hasOwnProperty(R)&&B!=null&&R==="onScroll"&&cn("scroll",f)}switch(l){case"input":Ze(f),G(f,y,!0);break;case"textarea":Ze(f),Y(f);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(f.onclick=Mc)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{R=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=R.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=R.createElement(l,{is:f.is}):(i=R.createElement(l),l==="select"&&(R=i,f.multiple?R.multiple=!0:f.size&&(R.size=f.size))):i=R.createElementNS(i,l),i[Wr]=s,i[ql]=f,nv(i,s,!1,!1),s.stateNode=i;e:{switch(R=Ne(l,f),l){case"dialog":cn("cancel",i),cn("close",i),m=f;break;case"iframe":case"object":case"embed":cn("load",i),m=f;break;case"video":case"audio":for(m=0;m<Xl.length;m++)cn(Xl[m],i);m=f;break;case"source":cn("error",i),m=f;break;case"img":case"image":case"link":cn("error",i),cn("load",i),m=f;break;case"details":cn("toggle",i),m=f;break;case"input":Et(i,f),m=ft(i,f),cn("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=U({},f,{value:void 0}),cn("invalid",i);break;case"textarea":F(i,f),m=He(i,f),cn("invalid",i);break;default:m=f}Ye(l,m),B=m;for(y in B)if(B.hasOwnProperty(y)){var X=B[y];y==="style"?Ee(i,X):y==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&Oe(i,X)):y==="children"?typeof X=="string"?(l!=="textarea"||X!=="")&&Te(i,X):typeof X=="number"&&Te(i,""+X):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(r.hasOwnProperty(y)?X!=null&&y==="onScroll"&&cn("scroll",i):X!=null&&b(i,y,X,R))}switch(l){case"input":Ze(i),G(i,f,!1);break;case"textarea":Ze(i),Y(i);break;case"option":f.value!=null&&i.setAttribute("value",""+ge(f.value));break;case"select":i.multiple=!!f.multiple,y=f.value,y!=null?ut(i,!!f.multiple,y,!1):f.defaultValue!=null&&ut(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=Mc)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return si(s),null;case 6:if(i&&s.stateNode!=null)rv(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=Uo(Jl.current),Uo(Xr.current),bc(s)){if(f=s.stateNode,l=s.memoizedProps,f[Wr]=s,(y=f.nodeValue!==l)&&(i=qi,i!==null))switch(i.tag){case 3:Sc(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Sc(f.nodeValue,l,(i.mode&1)!==0)}y&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Wr]=s,s.stateNode=f}return si(s),null;case 13:if(fn(pn),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(dn&&$i!==null&&(s.mode&1)!==0&&(s.flags&128)===0)a0(),Pa(),s.flags|=98560,y=!1;else if(y=bc(s),f!==null&&f.dehydrated!==null){if(i===null){if(!y)throw Error(t(318));if(y=s.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Wr]=s}else Pa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;si(s),y=!1}else Lr!==null&&(ep(Lr),Lr=null),y=!0;if(!y)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(pn.current&1)!==0?kn===0&&(kn=3):ip())),s.updateQueue!==null&&(s.flags|=4),si(s),null);case 4:return Ia(),Gh(i,s),i===null&&Yl(s.stateNode.containerInfo),si(s),null;case 10:return _h(s.type._context),si(s),null;case 17:return Li(s.type)&&Tc(),si(s),null;case 19:if(fn(pn),y=s.memoizedState,y===null)return si(s),null;if(f=(s.flags&128)!==0,R=y.rendering,R===null)if(f)ru(y,!1);else{if(kn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(R=Uc(i),R!==null){for(s.flags|=128,ru(y,!1),f=R.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)y=l,i=f,y.flags&=14680066,R=y.alternate,R===null?(y.childLanes=0,y.lanes=i,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=R.childLanes,y.lanes=R.lanes,y.child=R.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=R.memoizedProps,y.memoizedState=R.memoizedState,y.updateQueue=R.updateQueue,y.type=R.type,i=R.dependencies,y.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return ln(pn,pn.current&1|2),s.child}i=i.sibling}y.tail!==null&&P()>ka&&(s.flags|=128,f=!0,ru(y,!1),s.lanes=4194304)}else{if(!f)if(i=Uc(R),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),ru(y,!0),y.tail===null&&y.tailMode==="hidden"&&!R.alternate&&!dn)return si(s),null}else 2*P()-y.renderingStartTime>ka&&l!==1073741824&&(s.flags|=128,f=!0,ru(y,!1),s.lanes=4194304);y.isBackwards?(R.sibling=s.child,s.child=R):(l=y.last,l!==null?l.sibling=R:s.child=R,y.last=R)}return y.tail!==null?(s=y.tail,y.rendering=s,y.tail=s.sibling,y.renderingStartTime=P(),s.sibling=null,l=pn.current,ln(pn,f?l&1|2:l&1),s):(si(s),null);case 22:case 23:return np(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Ki&1073741824)!==0&&(si(s),s.subtreeFlags&6&&(s.flags|=8192)):si(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function KE(i,s){switch(fh(s),s.tag){case 1:return Li(s.type)&&Tc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Ia(),fn(Di),fn(ii),Th(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Mh(s),null;case 13:if(fn(pn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Pa()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return fn(pn),null;case 4:return Ia(),null;case 10:return _h(s.type._context),null;case 22:case 23:return np(),null;case 24:return null;default:return null}}var Wc=!1,oi=!1,ZE=typeof WeakSet=="function"?WeakSet:Set,Je=null;function Fa(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Sn(i,s,f)}else l.current=null}function Wh(i,s,l){try{l()}catch(f){Sn(i,s,f)}}var sv=!1;function QE(i,s){if(nh=cc,i=O_(),qd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,y=f.focusNode;f=f.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var R=0,B=-1,X=-1,ce=0,Se=0,we=i,ye=null;t:for(;;){for(var $e;we!==l||m!==0&&we.nodeType!==3||(B=R+m),we!==y||f!==0&&we.nodeType!==3||(X=R+f),we.nodeType===3&&(R+=we.nodeValue.length),($e=we.firstChild)!==null;)ye=we,we=$e;for(;;){if(we===i)break t;if(ye===l&&++ce===m&&(B=R),ye===y&&++Se===f&&(X=R),($e=we.nextSibling)!==null)break;we=ye,ye=we.parentNode}we=$e}l=B===-1||X===-1?null:{start:B,end:X}}else l=null}l=l||{start:0,end:0}}else l=null;for(ih={focusedElem:i,selectionRange:l},cc=!1,Je=s;Je!==null;)if(s=Je,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Je=i;else for(;Je!==null;){s=Je;try{var tt=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(tt!==null){var it=tt.memoizedProps,Rn=tt.memoizedState,ie=s.stateNode,$=ie.getSnapshotBeforeUpdate(s.elementType===s.type?it:Nr(s.type,it),Rn);ie.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var ae=s.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Sn(s,s.return,Re)}if(i=s.sibling,i!==null){i.return=s.return,Je=i;break}Je=s.return}return tt=sv,sv=!1,tt}function su(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var y=m.destroy;m.destroy=void 0,y!==void 0&&Wh(s,l,y)}m=m.next}while(m!==f)}}function Xc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function Xh(i){var s=i.ref;if(s!==null){var l=i.stateNode;i.tag,i=l,typeof s=="function"?s(i):s.current=i}}function ov(i){var s=i.alternate;s!==null&&(i.alternate=null,ov(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Wr],delete s[ql],delete s[ah],delete s[IE],delete s[UE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function av(i){return i.tag===5||i.tag===3||i.tag===4}function lv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||av(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Yh(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Mc));else if(f!==4&&(i=i.child,i!==null))for(Yh(i,s,l),i=i.sibling;i!==null;)Yh(i,s,l),i=i.sibling}function jh(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(jh(i,s,l),i=i.sibling;i!==null;)jh(i,s,l),i=i.sibling}var Zn=null,Ir=!1;function Js(i,s,l){for(l=l.child;l!==null;)uv(i,s,l),l=l.sibling}function uv(i,s,l){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(De,l)}catch{}switch(l.tag){case 5:oi||Fa(l,s);case 6:var f=Zn,m=Ir;Zn=null,Js(i,s,l),Zn=f,Ir=m,Zn!==null&&(Ir?(i=Zn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Zn.removeChild(l.stateNode));break;case 18:Zn!==null&&(Ir?(i=Zn,l=l.stateNode,i.nodeType===8?oh(i.parentNode,l):i.nodeType===1&&oh(i,l),Ol(i)):oh(Zn,l.stateNode));break;case 4:f=Zn,m=Ir,Zn=l.stateNode.containerInfo,Ir=!0,Js(i,s,l),Zn=f,Ir=m;break;case 0:case 11:case 14:case 15:if(!oi&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var y=m,R=y.destroy;y=y.tag,R!==void 0&&((y&2)!==0||(y&4)!==0)&&Wh(l,s,R),m=m.next}while(m!==f)}Js(i,s,l);break;case 1:if(!oi&&(Fa(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(B){Sn(l,s,B)}Js(i,s,l);break;case 21:Js(i,s,l);break;case 22:l.mode&1?(oi=(f=oi)||l.memoizedState!==null,Js(i,s,l),oi=f):Js(i,s,l);break;default:Js(i,s,l)}}function cv(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new ZE),s.forEach(function(f){var m=a1.bind(null,i,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Ur(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var y=i,R=s,B=R;e:for(;B!==null;){switch(B.tag){case 5:Zn=B.stateNode,Ir=!1;break e;case 3:Zn=B.stateNode.containerInfo,Ir=!0;break e;case 4:Zn=B.stateNode.containerInfo,Ir=!0;break e}B=B.return}if(Zn===null)throw Error(t(160));uv(y,R,m),Zn=null,Ir=!1;var X=m.alternate;X!==null&&(X.return=null),m.return=null}catch(ce){Sn(m,s,ce)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)fv(s,i),s=s.sibling}function fv(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ur(s,i),jr(i),f&4){try{su(3,i,i.return),Xc(3,i)}catch(it){Sn(i,i.return,it)}try{su(5,i,i.return)}catch(it){Sn(i,i.return,it)}}break;case 1:Ur(s,i),jr(i),f&512&&l!==null&&Fa(l,l.return);break;case 5:if(Ur(s,i),jr(i),f&512&&l!==null&&Fa(l,l.return),i.flags&32){var m=i.stateNode;try{Te(m,"")}catch(it){Sn(i,i.return,it)}}if(f&4&&(m=i.stateNode,m!=null)){var y=i.memoizedProps,R=l!==null?l.memoizedProps:y,B=i.type,X=i.updateQueue;if(i.updateQueue=null,X!==null)try{B==="input"&&y.type==="radio"&&y.name!=null&&lt(m,y),Ne(B,R);var ce=Ne(B,y);for(R=0;R<X.length;R+=2){var Se=X[R],we=X[R+1];Se==="style"?Ee(m,we):Se==="dangerouslySetInnerHTML"?Oe(m,we):Se==="children"?Te(m,we):b(m,Se,we,ce)}switch(B){case"input":se(m,y);break;case"textarea":w(m,y);break;case"select":var ye=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!y.multiple;var $e=y.value;$e!=null?ut(m,!!y.multiple,$e,!1):ye!==!!y.multiple&&(y.defaultValue!=null?ut(m,!!y.multiple,y.defaultValue,!0):ut(m,!!y.multiple,y.multiple?[]:"",!1))}m[ql]=y}catch(it){Sn(i,i.return,it)}}break;case 6:if(Ur(s,i),jr(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,y=i.memoizedProps;try{m.nodeValue=y}catch(it){Sn(i,i.return,it)}}break;case 3:if(Ur(s,i),jr(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Ol(s.containerInfo)}catch(it){Sn(i,i.return,it)}break;case 4:Ur(s,i),jr(i);break;case 13:Ur(s,i),jr(i),m=i.child,m.flags&8192&&(y=m.memoizedState!==null,m.stateNode.isHidden=y,!y||m.alternate!==null&&m.alternate.memoizedState!==null||(Kh=P())),f&4&&cv(i);break;case 22:if(Se=l!==null&&l.memoizedState!==null,i.mode&1?(oi=(ce=oi)||Se,Ur(s,i),oi=ce):Ur(s,i),jr(i),f&8192){if(ce=i.memoizedState!==null,(i.stateNode.isHidden=ce)&&!Se&&(i.mode&1)!==0)for(Je=i,Se=i.child;Se!==null;){for(we=Je=Se;Je!==null;){switch(ye=Je,$e=ye.child,ye.tag){case 0:case 11:case 14:case 15:su(4,ye,ye.return);break;case 1:Fa(ye,ye.return);var tt=ye.stateNode;if(typeof tt.componentWillUnmount=="function"){f=ye,l=ye.return;try{s=f,tt.props=s.memoizedProps,tt.state=s.memoizedState,tt.componentWillUnmount()}catch(it){Sn(f,l,it)}}break;case 5:Fa(ye,ye.return);break;case 22:if(ye.memoizedState!==null){pv(we);continue}}$e!==null?($e.return=ye,Je=$e):pv(we)}Se=Se.sibling}e:for(Se=null,we=i;;){if(we.tag===5){if(Se===null){Se=we;try{m=we.stateNode,ce?(y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(B=we.stateNode,X=we.memoizedProps.style,R=X!=null&&X.hasOwnProperty("display")?X.display:null,B.style.display=Me("display",R))}catch(it){Sn(i,i.return,it)}}}else if(we.tag===6){if(Se===null)try{we.stateNode.nodeValue=ce?"":we.memoizedProps}catch(it){Sn(i,i.return,it)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===i)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===i)break e;for(;we.sibling===null;){if(we.return===null||we.return===i)break e;Se===we&&(Se=null),we=we.return}Se===we&&(Se=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:Ur(s,i),jr(i),f&4&&cv(i);break;case 21:break;default:Ur(s,i),jr(i)}}function jr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(av(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(Te(m,""),f.flags&=-33);var y=lv(i);jh(i,y,m);break;case 3:case 4:var R=f.stateNode.containerInfo,B=lv(i);Yh(i,B,R);break;default:throw Error(t(161))}}catch(X){Sn(i,i.return,X)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function JE(i,s,l){Je=i,dv(i)}function dv(i,s,l){for(var f=(i.mode&1)!==0;Je!==null;){var m=Je,y=m.child;if(m.tag===22&&f){var R=m.memoizedState!==null||Wc;if(!R){var B=m.alternate,X=B!==null&&B.memoizedState!==null||oi;B=Wc;var ce=oi;if(Wc=R,(oi=X)&&!ce)for(Je=m;Je!==null;)R=Je,X=R.child,R.tag===22&&R.memoizedState!==null?mv(m):X!==null?(X.return=R,Je=X):mv(m);for(;y!==null;)Je=y,dv(y),y=y.sibling;Je=m,Wc=B,oi=ce}hv(i)}else(m.subtreeFlags&8772)!==0&&y!==null?(y.return=m,Je=y):hv(i)}}function hv(i){for(;Je!==null;){var s=Je;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:oi||Xc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!oi)if(l===null)f.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:Nr(s.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var y=s.updateQueue;y!==null&&p0(s,y,f);break;case 3:var R=s.updateQueue;if(R!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}p0(s,R,l)}break;case 5:var B=s.stateNode;if(l===null&&s.flags&4){l=B;var X=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&l.focus();break;case"img":X.src&&(l.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ce=s.alternate;if(ce!==null){var Se=ce.memoizedState;if(Se!==null){var we=Se.dehydrated;we!==null&&Ol(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}oi||s.flags&512&&Xh(s)}catch(ye){Sn(s,s.return,ye)}}if(s===i){Je=null;break}if(l=s.sibling,l!==null){l.return=s.return,Je=l;break}Je=s.return}}function pv(i){for(;Je!==null;){var s=Je;if(s===i){Je=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Je=l;break}Je=s.return}}function mv(i){for(;Je!==null;){var s=Je;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Xc(4,s)}catch(X){Sn(s,l,X)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(X){Sn(s,m,X)}}var y=s.return;try{Xh(s)}catch(X){Sn(s,y,X)}break;case 5:var R=s.return;try{Xh(s)}catch(X){Sn(s,R,X)}}}catch(X){Sn(s,s.return,X)}if(s===i){Je=null;break}var B=s.sibling;if(B!==null){B.return=s.return,Je=B;break}Je=s.return}}var e1=Math.ceil,Yc=C.ReactCurrentDispatcher,qh=C.ReactCurrentOwner,gr=C.ReactCurrentBatchConfig,Vt=0,Xn=null,Ln=null,Qn=0,Ki=0,Oa=qs(0),kn=0,ou=null,Oo=0,jc=0,$h=0,au=null,Ii=null,Kh=0,ka=1/0,vs=null,qc=!1,Zh=null,eo=null,$c=!1,to=null,Kc=0,lu=0,Qh=null,Zc=-1,Qc=0;function vi(){return(Vt&6)!==0?P():Zc!==-1?Zc:Zc=P()}function no(i){return(i.mode&1)===0?1:(Vt&2)!==0&&Qn!==0?Qn&-Qn:OE.transition!==null?(Qc===0&&(Qc=bi()),Qc):(i=yt,i!==0||(i=window.event,i=i===void 0?16:__(i.type)),i)}function Fr(i,s,l,f){if(50<lu)throw lu=0,Qh=null,Error(t(185));Yi(i,l,f),((Vt&2)===0||i!==Xn)&&(i===Xn&&((Vt&2)===0&&(jc|=l),kn===4&&io(i,Qn)),Ui(i,f),l===1&&Vt===0&&(s.mode&1)===0&&(ka=P()+500,Ac&&Ks()))}function Ui(i,s){var l=i.callbackNode;gi(i,s);var f=An(i,i===Xn?Qn:0);if(f===0)l!==null&&wn(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&wn(l),s===1)i.tag===0?FE(_v.bind(null,i)):n0(_v.bind(null,i)),LE(function(){(Vt&6)===0&&Ks()}),l=null;else{switch(Pr(f)){case 1:l=le;break;case 4:l=oe;break;case 16:l=re;break;case 536870912:l=Fe;break;default:l=re}l=wv(l,gv.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function gv(i,s){if(Zc=-1,Qc=0,(Vt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Ba()&&i.callbackNode!==l)return null;var f=An(i,i===Xn?Qn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=Jc(i,f);else{s=f;var m=Vt;Vt|=2;var y=xv();(Xn!==i||Qn!==s)&&(vs=null,ka=P()+500,Bo(i,s));do try{i1();break}catch(B){vv(i,B)}while(!0);gh(),Yc.current=y,Vt=m,Ln!==null?s=0:(Xn=null,Qn=0,s=kn)}if(s!==0){if(s===2&&(m=Ut(i),m!==0&&(f=m,s=Jh(i,m))),s===1)throw l=ou,Bo(i,0),io(i,f),Ui(i,P()),l;if(s===6)io(i,f);else{if(m=i.current.alternate,(f&30)===0&&!t1(m)&&(s=Jc(i,f),s===2&&(y=Ut(i),y!==0&&(f=y,s=Jh(i,y))),s===1))throw l=ou,Bo(i,0),io(i,f),Ui(i,P()),l;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:zo(i,Ii,vs);break;case 3:if(io(i,f),(f&130023424)===f&&(s=Kh+500-P(),10<s)){if(An(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){vi(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=sh(zo.bind(null,i,Ii,vs),s);break}zo(i,Ii,vs);break;case 4:if(io(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var R=31-dt(f);y=1<<R,R=s[R],R>m&&(m=R),f&=~y}if(f=m,f=P()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*e1(f/1960))-f,10<f){i.timeoutHandle=sh(zo.bind(null,i,Ii,vs),f);break}zo(i,Ii,vs);break;case 5:zo(i,Ii,vs);break;default:throw Error(t(329))}}}return Ui(i,P()),i.callbackNode===l?gv.bind(null,i):null}function Jh(i,s){var l=au;return i.current.memoizedState.isDehydrated&&(Bo(i,s).flags|=256),i=Jc(i,s),i!==2&&(s=Ii,Ii=l,s!==null&&ep(s)),i}function ep(i){Ii===null?Ii=i:Ii.push.apply(Ii,i)}function t1(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],y=m.getSnapshot;m=m.value;try{if(!Dr(y(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function io(i,s){for(s&=~$h,s&=~jc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-dt(s),f=1<<l;i[l]=-1,s&=~f}}function _v(i){if((Vt&6)!==0)throw Error(t(327));Ba();var s=An(i,0);if((s&1)===0)return Ui(i,P()),null;var l=Jc(i,s);if(i.tag!==0&&l===2){var f=Ut(i);f!==0&&(s=f,l=Jh(i,f))}if(l===1)throw l=ou,Bo(i,0),io(i,s),Ui(i,P()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,zo(i,Ii,vs),Ui(i,P()),null}function tp(i,s){var l=Vt;Vt|=1;try{return i(s)}finally{Vt=l,Vt===0&&(ka=P()+500,Ac&&Ks())}}function ko(i){to!==null&&to.tag===0&&(Vt&6)===0&&Ba();var s=Vt;Vt|=1;var l=gr.transition,f=yt;try{if(gr.transition=null,yt=1,i)return i()}finally{yt=f,gr.transition=l,Vt=s,(Vt&6)===0&&Ks()}}function np(){Ki=Oa.current,fn(Oa)}function Bo(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,DE(l)),Ln!==null)for(l=Ln.return;l!==null;){var f=l;switch(fh(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Tc();break;case 3:Ia(),fn(Di),fn(ii),Th();break;case 5:Mh(f);break;case 4:Ia();break;case 13:fn(pn);break;case 19:fn(pn);break;case 10:_h(f.type._context);break;case 22:case 23:np()}l=l.return}if(Xn=i,Ln=i=ro(i.current,null),Qn=Ki=s,kn=0,ou=null,$h=jc=Oo=0,Ii=au=null,Io!==null){for(s=0;s<Io.length;s++)if(l=Io[s],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,y=l.pending;if(y!==null){var R=y.next;y.next=m,f.next=R}l.pending=f}Io=null}return i}function vv(i,s){do{var l=Ln;try{if(gh(),Fc.current=zc,Oc){for(var f=mn.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Oc=!1}if(Fo=0,Wn=On=mn=null,eu=!1,tu=0,qh.current=null,l===null||l.return===null){kn=1,ou=s,Ln=null;break}e:{var y=i,R=l.return,B=l,X=s;if(s=Qn,B.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var ce=X,Se=B,we=Se.tag;if((Se.mode&1)===0&&(we===0||we===11||we===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var $e=G0(R);if($e!==null){$e.flags&=-257,W0($e,R,B,y,s),$e.mode&1&&H0(y,ce,s),s=$e,X=ce;var tt=s.updateQueue;if(tt===null){var it=new Set;it.add(X),s.updateQueue=it}else tt.add(X);break e}else{if((s&1)===0){H0(y,ce,s),ip();break e}X=Error(t(426))}}else if(dn&&B.mode&1){var Rn=G0(R);if(Rn!==null){(Rn.flags&65536)===0&&(Rn.flags|=256),W0(Rn,R,B,y,s),ph(Ua(X,B));break e}}y=X=Ua(X,B),kn!==4&&(kn=2),au===null?au=[y]:au.push(y),y=R;do{switch(y.tag){case 3:y.flags|=65536,s&=-s,y.lanes|=s;var ie=z0(y,X,s);h0(y,ie);break e;case 1:B=X;var $=y.type,ae=y.stateNode;if((y.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(eo===null||!eo.has(ae)))){y.flags|=65536,s&=-s,y.lanes|=s;var Re=V0(y,B,s);h0(y,Re);break e}}y=y.return}while(y!==null)}Sv(l)}catch(st){s=st,Ln===l&&l!==null&&(Ln=l=l.return);continue}break}while(!0)}function xv(){var i=Yc.current;return Yc.current=zc,i===null?zc:i}function ip(){(kn===0||kn===3||kn===2)&&(kn=4),Xn===null||(Oo&268435455)===0&&(jc&268435455)===0||io(Xn,Qn)}function Jc(i,s){var l=Vt;Vt|=2;var f=xv();(Xn!==i||Qn!==s)&&(vs=null,Bo(i,s));do try{n1();break}catch(m){vv(i,m)}while(!0);if(gh(),Vt=l,Yc.current=f,Ln!==null)throw Error(t(261));return Xn=null,Qn=0,kn}function n1(){for(;Ln!==null;)yv(Ln)}function i1(){for(;Ln!==null&&!br();)yv(Ln)}function yv(i){var s=Tv(i.alternate,i,Ki);i.memoizedProps=i.pendingProps,s===null?Sv(i):Ln=s,qh.current=null}function Sv(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=$E(l,s,Ki),l!==null){Ln=l;return}}else{if(l=KE(l,s),l!==null){l.flags&=32767,Ln=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{kn=6,Ln=null;return}}if(s=s.sibling,s!==null){Ln=s;return}Ln=s=i}while(s!==null);kn===0&&(kn=5)}function zo(i,s,l){var f=yt,m=gr.transition;try{gr.transition=null,yt=1,r1(i,s,l,f)}finally{gr.transition=m,yt=f}return null}function r1(i,s,l,f){do Ba();while(to!==null);if((Vt&6)!==0)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var y=l.lanes|l.childLanes;if(zs(i,y),i===Xn&&(Ln=Xn=null,Qn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||$c||($c=!0,wv(re,function(){return Ba(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=gr.transition,gr.transition=null;var R=yt;yt=1;var B=Vt;Vt|=4,qh.current=null,QE(i,l),fv(l,i),TE(ih),cc=!!nh,ih=nh=null,i.current=l,JE(l),Bs(),Vt=B,yt=R,gr.transition=y}else i.current=l;if($c&&($c=!1,to=i,Kc=m),y=i.pendingLanes,y===0&&(eo=null),Ke(l.stateNode),Ui(i,P()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(qc)throw qc=!1,i=Zh,Zh=null,i;return(Kc&1)!==0&&i.tag!==0&&Ba(),y=i.pendingLanes,(y&1)!==0?i===Qh?lu++:(lu=0,Qh=i):lu=0,Ks(),null}function Ba(){if(to!==null){var i=Pr(Kc),s=gr.transition,l=yt;try{if(gr.transition=null,yt=16>i?16:i,to===null)var f=!1;else{if(i=to,to=null,Kc=0,(Vt&6)!==0)throw Error(t(331));var m=Vt;for(Vt|=4,Je=i.current;Je!==null;){var y=Je,R=y.child;if((Je.flags&16)!==0){var B=y.deletions;if(B!==null){for(var X=0;X<B.length;X++){var ce=B[X];for(Je=ce;Je!==null;){var Se=Je;switch(Se.tag){case 0:case 11:case 15:su(8,Se,y)}var we=Se.child;if(we!==null)we.return=Se,Je=we;else for(;Je!==null;){Se=Je;var ye=Se.sibling,$e=Se.return;if(ov(Se),Se===ce){Je=null;break}if(ye!==null){ye.return=$e,Je=ye;break}Je=$e}}}var tt=y.alternate;if(tt!==null){var it=tt.child;if(it!==null){tt.child=null;do{var Rn=it.sibling;it.sibling=null,it=Rn}while(it!==null)}}Je=y}}if((y.subtreeFlags&2064)!==0&&R!==null)R.return=y,Je=R;else e:for(;Je!==null;){if(y=Je,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:su(9,y,y.return)}var ie=y.sibling;if(ie!==null){ie.return=y.return,Je=ie;break e}Je=y.return}}var $=i.current;for(Je=$;Je!==null;){R=Je;var ae=R.child;if((R.subtreeFlags&2064)!==0&&ae!==null)ae.return=R,Je=ae;else e:for(R=$;Je!==null;){if(B=Je,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Xc(9,B)}}catch(st){Sn(B,B.return,st)}if(B===R){Je=null;break e}var Re=B.sibling;if(Re!==null){Re.return=B.return,Je=Re;break e}Je=B.return}}if(Vt=m,Ks(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(De,i)}catch{}f=!0}return f}finally{yt=l,gr.transition=s}}return!1}function Mv(i,s,l){s=Ua(l,s),s=z0(i,s,1),i=Qs(i,s,1),s=vi(),i!==null&&(Yi(i,1,s),Ui(i,s))}function Sn(i,s,l){if(i.tag===3)Mv(i,i,l);else for(;s!==null;){if(s.tag===3){Mv(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(eo===null||!eo.has(f))){i=Ua(l,i),i=V0(s,i,1),s=Qs(s,i,1),i=vi(),s!==null&&(Yi(s,1,i),Ui(s,i));break}}s=s.return}}function s1(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=vi(),i.pingedLanes|=i.suspendedLanes&l,Xn===i&&(Qn&l)===l&&(kn===4||kn===3&&(Qn&130023424)===Qn&&500>P()-Kh?Bo(i,0):$h|=l),Ui(i,s)}function Ev(i,s){s===0&&((i.mode&1)===0?s=1:(s=nn,nn<<=1,(nn&130023424)===0&&(nn=4194304)));var l=vi();i=ms(i,s),i!==null&&(Yi(i,s,l),Ui(i,l))}function o1(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Ev(i,l)}function a1(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Ev(i,l)}var Tv;Tv=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Di.current)Ni=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Ni=!1,qE(i,s,l);Ni=(i.flags&131072)!==0}else Ni=!1,dn&&(s.flags&1048576)!==0&&i0(s,Rc,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Gc(i,s),i=s.pendingProps;var m=Ca(s,ii.current);Na(s,l),m=Ch(null,s,f,i,m,l);var y=Rh();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Li(f)?(y=!0,wc(s)):y=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,yh(s),m.updater=Vc,s.stateNode=m,m._reactInternals=s,Ih(s,f,i,l),s=kh(null,s,f,!0,y,l)):(s.tag=0,dn&&y&&ch(s),_i(null,s,m,l),s=s.child),s;case 16:f=s.elementType;e:{switch(Gc(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=u1(f),i=Nr(f,i),m){case 0:s=Oh(null,s,f,i,l);break e;case 1:s=K0(null,s,f,i,l);break e;case 11:s=X0(null,s,f,i,l);break e;case 14:s=Y0(null,s,f,Nr(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Nr(f,m),Oh(i,s,f,m,l);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Nr(f,m),K0(i,s,f,m,l);case 3:e:{if(Z0(s),i===null)throw Error(t(387));f=s.pendingProps,y=s.memoizedState,m=y.element,d0(i,s),Ic(s,f,null,l);var R=s.memoizedState;if(f=R.element,y.isDehydrated)if(y={element:f,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},s.updateQueue.baseState=y,s.memoizedState=y,s.flags&256){m=Ua(Error(t(423)),s),s=Q0(i,s,f,l,m);break e}else if(f!==m){m=Ua(Error(t(424)),s),s=Q0(i,s,f,l,m);break e}else for($i=js(s.stateNode.containerInfo.firstChild),qi=s,dn=!0,Lr=null,l=c0(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Pa(),f===m){s=_s(i,s,l);break e}_i(i,s,f,l)}s=s.child}return s;case 5:return m0(s),i===null&&hh(s),f=s.type,m=s.pendingProps,y=i!==null?i.memoizedProps:null,R=m.children,rh(f,m)?R=null:y!==null&&rh(f,y)&&(s.flags|=32),$0(i,s),_i(i,s,R,l),s.child;case 6:return i===null&&hh(s),null;case 13:return J0(i,s,l);case 4:return Sh(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Da(s,null,f,l):_i(i,s,f,l),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Nr(f,m),X0(i,s,f,m,l);case 7:return _i(i,s,s.pendingProps,l),s.child;case 8:return _i(i,s,s.pendingProps.children,l),s.child;case 12:return _i(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,y=s.memoizedProps,R=m.value,ln(Dc,f._currentValue),f._currentValue=R,y!==null)if(Dr(y.value,R)){if(y.children===m.children&&!Di.current){s=_s(i,s,l);break e}}else for(y=s.child,y!==null&&(y.return=s);y!==null;){var B=y.dependencies;if(B!==null){R=y.child;for(var X=B.firstContext;X!==null;){if(X.context===f){if(y.tag===1){X=gs(-1,l&-l),X.tag=2;var ce=y.updateQueue;if(ce!==null){ce=ce.shared;var Se=ce.pending;Se===null?X.next=X:(X.next=Se.next,Se.next=X),ce.pending=X}}y.lanes|=l,X=y.alternate,X!==null&&(X.lanes|=l),vh(y.return,l,s),B.lanes|=l;break}X=X.next}}else if(y.tag===10)R=y.type===s.type?null:y.child;else if(y.tag===18){if(R=y.return,R===null)throw Error(t(341));R.lanes|=l,B=R.alternate,B!==null&&(B.lanes|=l),vh(R,l,s),R=y.sibling}else R=y.child;if(R!==null)R.return=y;else for(R=y;R!==null;){if(R===s){R=null;break}if(y=R.sibling,y!==null){y.return=R.return,R=y;break}R=R.return}y=R}_i(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,Na(s,l),m=pr(m),f=f(m),s.flags|=1,_i(i,s,f,l),s.child;case 14:return f=s.type,m=Nr(f,s.pendingProps),m=Nr(f.type,m),Y0(i,s,f,m,l);case 15:return j0(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Nr(f,m),Gc(i,s),s.tag=1,Li(f)?(i=!0,wc(s)):i=!1,Na(s,l),k0(s,f,m),Ih(s,f,m,l),kh(null,s,f,!0,i,l);case 19:return tv(i,s,l);case 22:return q0(i,s,l)}throw Error(t(156,s.tag))};function wv(i,s){return yn(i,s)}function l1(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _r(i,s,l,f){return new l1(i,s,l,f)}function rp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function u1(i){if(typeof i=="function")return rp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===H)return 11;if(i===Z)return 14}return 2}function ro(i,s){var l=i.alternate;return l===null?(l=_r(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function ef(i,s,l,f,m,y){var R=2;if(f=i,typeof i=="function")rp(i)&&(R=1);else if(typeof i=="string")R=5;else e:switch(i){case N:return Vo(l.children,m,y,s);case T:R=8,m|=8;break;case D:return i=_r(12,l,s,m|2),i.elementType=D,i.lanes=y,i;case K:return i=_r(13,l,s,m),i.elementType=K,i.lanes=y,i;case ee:return i=_r(19,l,s,m),i.elementType=ee,i.lanes=y,i;case V:return tf(l,m,y,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case W:R=10;break e;case k:R=9;break e;case H:R=11;break e;case Z:R=14;break e;case Q:R=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=_r(R,l,s,m),s.elementType=i,s.type=f,s.lanes=y,s}function Vo(i,s,l,f){return i=_r(7,i,f,s),i.lanes=l,i}function tf(i,s,l,f){return i=_r(22,i,f,s),i.elementType=V,i.lanes=l,i.stateNode={isHidden:!1},i}function sp(i,s,l){return i=_r(6,i,null,s),i.lanes=l,i}function op(i,s,l){return s=_r(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function c1(i,s,l,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function ap(i,s,l,f,m,y,R,B,X){return i=new c1(i,s,l,B,X),s===1?(s=1,y===!0&&(s|=8)):s=0,y=_r(3,null,null,s),i.current=y,y.stateNode=i,y.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},yh(y),i}function f1(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function Av(i){if(!i)return $s;i=i._reactInternals;e:{if(Pt(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Li(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Li(l))return e0(i,l,s)}return s}function Cv(i,s,l,f,m,y,R,B,X){return i=ap(l,f,!0,i,m,y,R,B,X),i.context=Av(null),l=i.current,f=vi(),m=no(l),y=gs(f,m),y.callback=s??null,Qs(l,y,m),i.current.lanes=m,Yi(i,m,f),Ui(i,f),i}function nf(i,s,l,f){var m=s.current,y=vi(),R=no(m);return l=Av(l),s.context===null?s.context=l:s.pendingContext=l,s=gs(y,R),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Qs(m,s,R),i!==null&&(Fr(i,m,R,y),Nc(i,m,R)),R}function rf(i){return i=i.current,i.child?(i.child.tag===5,i.child.stateNode):null}function Rv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function lp(i,s){Rv(i,s),(i=i.alternate)&&Rv(i,s)}function d1(){return null}var bv=typeof reportError=="function"?reportError:function(i){console.error(i)};function up(i){this._internalRoot=i}sf.prototype.render=up.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));nf(i,s,null,null)},sf.prototype.unmount=up.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ko(function(){nf(null,i,null,null)}),s[fs]=null}};function sf(i){this._internalRoot=i}sf.prototype.unstable_scheduleHydration=function(i){if(i){var s=Ll();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Ws.length&&s!==0&&s<Ws[l].priority;l++);Ws.splice(l,0,i),l===0&&m_(i)}};function cp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function of(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Pv(){}function h1(i,s,l,f,m){if(m){if(typeof f=="function"){var y=f;f=function(){var ce=rf(R);y.call(ce)}}var R=Cv(s,f,i,0,null,!1,!1,"",Pv);return i._reactRootContainer=R,i[fs]=R.current,Yl(i.nodeType===8?i.parentNode:i),ko(),R}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var B=f;f=function(){var ce=rf(X);B.call(ce)}}var X=ap(i,0,!1,null,null,!1,!1,"",Pv);return i._reactRootContainer=X,i[fs]=X.current,Yl(i.nodeType===8?i.parentNode:i),ko(function(){nf(s,X,l,f)}),X}function af(i,s,l,f,m){var y=l._reactRootContainer;if(y){var R=y;if(typeof m=="function"){var B=m;m=function(){var X=rf(R);B.call(X)}}nf(s,R,i,m)}else R=h1(l,s,i,m,f);return rf(R)}Cn=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=zt(s.pendingLanes);l!==0&&(Yt(s,l|1),Ui(s,P()),(Vt&6)===0&&(ka=P()+500,Ks()))}break;case 13:ko(function(){var f=ms(i,1);if(f!==null){var m=vi();Fr(f,i,1,m)}}),lp(i,1)}},fr=function(i){if(i.tag===13){var s=ms(i,134217728);if(s!==null){var l=vi();Fr(s,i,134217728,l)}lp(i,134217728)}},cs=function(i){if(i.tag===13){var s=no(i),l=ms(i,s);if(l!==null){var f=vi();Fr(l,i,s,f)}lp(i,s)}},Ll=function(){return yt},h_=function(i,s){var l=yt;try{return yt=i,s()}finally{yt=l}},Ae=function(i,s,l){switch(s){case"input":if(se(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var m=Ec(f);if(!m)throw Error(t(90));It(f),se(f,m)}}}break;case"textarea":w(i,l);break;case"select":s=l.value,s!=null&&ut(i,!!l.multiple,s,!1)}},at=tp,Ft=ko;var p1={usingClientEntryPoint:!1,Events:[$l,wa,Ec,de,je,tp]},uu={findFiberByHostInstance:Po,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m1={bundleType:uu.bundleType,version:uu.version,rendererPackageName:uu.rendererPackageName,rendererConfig:uu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=mi(i),i===null?null:i.stateNode},findFiberByHostInstance:uu.findFiberByHostInstance||d1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lf.isDisabled&&lf.supportsFiber)try{De=lf.inject(m1),ze=lf}catch{}}return Fi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p1,Fi.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cp(s))throw Error(t(200));return f1(i,s,null,l)},Fi.createRoot=function(i,s){if(!cp(i))throw Error(t(299));var l=!1,f="",m=bv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=ap(i,1,!1,null,null,l,!1,f,m),i[fs]=s.current,Yl(i.nodeType===8?i.parentNode:i),new up(s)},Fi.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=mi(s),i=i===null?null:i.stateNode,i},Fi.flushSync=function(i){return ko(i)},Fi.hydrate=function(i,s,l){if(!of(s))throw Error(t(200));return af(null,i,s,!0,l)},Fi.hydrateRoot=function(i,s,l){if(!cp(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,y="",R=bv;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),s=Cv(s,null,i,1,l??null,m,!1,y,R),i[fs]=s.current,Yl(i),f)for(i=0;i<f.length;i++)l=f[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new sf(s)},Fi.render=function(i,s,l){if(!of(s))throw Error(t(200));return af(null,i,s,!1,l)},Fi.unmountComponentAtNode=function(i){if(!of(i))throw Error(t(40));return i._reactRootContainer?(ko(function(){af(null,null,i,!1,function(){i._reactRootContainer=null,i[fs]=null})}),!0):!1},Fi.unstable_batchedUpdates=tp,Fi.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!of(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return af(i,s,l,!1,f)},Fi.version="18.3.1-next-f1338f8080-20240426",Fi}var kv;function T1(){if(kv)return hp.exports;kv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hp.exports=E1(),hp.exports}var Bv;function w1(){if(Bv)return uf;Bv=1;var o=T1();return uf.createRoot=o.createRoot,uf.hydrateRoot=o.hydrateRoot,uf}var A1=w1();const C1=Ty(A1),R1=()=>{const[o,e]=Jt.useState(!1),[t,n]=Jt.useState(!1);Jt.useEffect(()=>{const u=()=>n(window.scrollY>50);return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);const r=u=>{document.getElementById(u)?.scrollIntoView({behavior:"smooth"}),e(!1)},a=[{label:"首頁",id:"home"},{label:"關於我",id:"about"},{label:"作品集",id:"portfolio"},{label:"聯繫我",id:"contact"}];return _e.jsx("nav",{className:`navbar ${t?"navbar-scrolled":""}`,children:_e.jsxs("div",{className:"nav-container",children:[_e.jsx("div",{className:"nav-logo",children:_e.jsxs("h2",{children:["Leon",_e.jsx("span",{className:"gold-dot",children:"."})]})}),_e.jsx("ul",{className:`nav-menu ${o?"active":""}`,children:a.map(({label:u,id:c})=>_e.jsx("li",{className:"nav-item",children:_e.jsx("button",{onClick:()=>r(c),className:"nav-link",children:u})},c))}),_e.jsxs("div",{className:`hamburger ${o?"active":""}`,onClick:()=>e(!o),children:[_e.jsx("span",{className:"bar"}),_e.jsx("span",{className:"bar"}),_e.jsx("span",{className:"bar"})]})]})})};function Ts(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function wy(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}var ar={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gl={duration:.5,overwrite:!1,delay:0},bg,ni,hn,wr=1e8,sn=1/wr,fm=Math.PI*2,b1=fm/4,P1=0,Ay=Math.sqrt,D1=Math.cos,L1=Math.sin,Kn=function(e){return typeof e=="string"},Mn=function(e){return typeof e=="function"},Ns=function(e){return typeof e=="number"},Pg=function(e){return typeof e>"u"},as=function(e){return typeof e=="object"},zi=function(e){return e!==!1},Dg=function(){return typeof window<"u"},cf=function(e){return Mn(e)||Kn(e)},Cy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pi=Array.isArray,N1=/random\([^)]+\)/g,I1=/,\s*/g,zv=/(?:-?\.?\d|\.)+/gi,Ry=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,sl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,by=/[+-]=-?[.\d]+/,U1=/[^,'"\[\]\s]+/gi,F1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_n,Kr,dm,Lg,lr={},fd={},Py,Dy=function(e){return(fd=_l(e,lr))&&Xi},Ng=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wu=function(e,t){return!t&&console.warn(e)},Ly=function(e,t){return e&&(lr[e]=t)&&fd&&(fd[e]=t)||lr},Xu=function(){return 0},O1={suppressEvents:!0,isStart:!0,kill:!1},Kf={suppressEvents:!0,kill:!1},k1={suppressEvents:!0},Ig={},So=[],hm={},Ny,tr={},_p={},Vv=30,Zf=[],Ug="",Fg=function(e){var t=e[0],n,r;if(as(t)||Mn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Zf.length;r--&&!Zf[r].targetTest(t););n=Zf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new iS(e[r],n)))||e.splice(r,1);return e},oa=function(e){return e._gsap||Fg(Ar(e))[0]._gsap},Iy=function(e,t,n){return(n=e[t])&&Mn(n)?e[t]():Pg(n)&&e.getAttribute&&e.getAttribute(t)||n},Vi=function(e,t){return(e=e.split(",")).forEach(t)||e},bn=function(e){return Math.round(e*1e5)/1e5||0},gn=function(e){return Math.round(e*1e7)/1e7||0},ll=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},B1=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},dd=function(){var e=So.length,t=So.slice(0),n,r;for(hm={},So.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Og=function(e){return!!(e._initted||e._startAt||e.add)},Uy=function(e,t,n,r){So.length&&!ni&&dd(),e.render(t,n,!!(ni&&t<0&&Og(e))),So.length&&!ni&&dd()},Fy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(U1).length<2?t:Kn(e)?e.trim():e},Oy=function(e){return e},ur=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},z1=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},_l=function(e,t){for(var n in t)e[n]=t[n];return e},Hv=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=as(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},hd=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Du=function(e){var t=e.parent||_n,n=e.keyframes?z1(pi(e.keyframes)):ur;if(zi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},V1=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},ky=function(e,t,n,r,a){var u=e[r],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=u,t.parent=t._dp=e,t},Rd=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,u=t._next;a?a._next=u:e[n]===t&&(e[n]=u),u?u._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},To=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},aa=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},H1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},pm=function(e,t,n,r){return e._startAt&&(ni?e._startAt.revert(Kf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},G1=function o(e){return!e||e._ts&&o(e.parent)},Gv=function(e){return e._repeat?vl(e._tTime,e=e.duration()+e._rDelay)*e:0},vl=function(e,t){var n=Math.floor(e=gn(e/t));return e&&n===e?n-1:n},pd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},bd=function(e){return e._end=gn(e._start+(e._tDur/Math.abs(e._ts||e._rts||sn)||0))},Pd=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=gn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),bd(e),n._dirty||aa(n,e)),e},By=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=pd(e.rawTime(),t),(!t._dur||nc(0,t.totalDuration(),n)-t._tTime>sn)&&t.render(n,!0)),aa(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-sn}},Jr=function(e,t,n,r){return t.parent&&To(t),t._start=gn((Ns(n)?n:n||e!==_n?xr(e,n,t):e._time)+t._delay),t._end=gn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ky(e,t,"_first","_last",e._sort?"_start":0),mm(t)||(e._recent=t),r||By(e,t),e._ts<0&&Pd(e,e._tTime),e},zy=function(e,t){return(lr.ScrollTrigger||Ng("scrollTrigger",t))&&lr.ScrollTrigger.create(t,e)},Vy=function(e,t,n,r,a){if(Bg(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!ni&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ny!==ir.frame)return So.push(e),e._lazy=[a,r],1},W1=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},mm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},X1=function(e,t,n,r){var a=e.ratio,u=t<0||!t&&(!e._start&&W1(e)&&!(!e._initted&&mm(e))||(e._ts<0||e._dp._ts<0)&&!mm(e))?0:1,c=e._rDelay,d=0,h,p,v;if(c&&e._repeat&&(d=nc(0,e._tDur,t),p=vl(d,c),e._yoyo&&p&1&&(u=1-u),p!==vl(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||ni||r||e._zTime===sn||!t&&e._zTime){if(!e._initted&&Vy(e,t,r,n,d))return;for(v=e._zTime,e._zTime=t||(n?sn:0),n||(n=t&&!v),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&pm(e,t,n,!0),e._onUpdate&&!n&&sr(e,"onUpdate"),d&&e._repeat&&!n&&e.parent&&sr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&To(e,1),!n&&!ni&&(sr(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Y1=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},xl=function(e,t,n,r){var a=e._repeat,u=gn(t)||0,c=e._tTime/e._tDur;return c&&!r&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:gn(u*(a+1)+e._rDelay*a):u,c>0&&!r&&Pd(e,e._tTime=e._tDur*c),e.parent&&bd(e),n||aa(e.parent,e),e},Wv=function(e){return e instanceof wi?aa(e):xl(e,e._dur)},j1={_start:0,endTime:Xu,totalDuration:Xu},xr=function o(e,t,n){var r=e.labels,a=e._recent||j1,u=e.duration()>=wr?a.endTime(!1):e._dur,c,d,h;return Kn(t)&&(isNaN(t)||t in r)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:n).totalDuration()/100:1)):c<0?(t in r||(r[t]=u),r[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&n&&(d=d/100*(pi(n)?n[0]:n).totalDuration()),c>1?o(e,t.substr(0,c-1),n)+d:u+d)):t==null?u:+t},Lu=function(e,t,n){var r=Ns(t[1]),a=(r?2:1)+(e<2?0:1),u=t[a],c,d;if(r&&(u.duration=t[1]),u.parent=n,e){for(c=u,d=n;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=zi(d.vars.inherit)&&d.parent;u.immediateRender=zi(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new Un(t[0],u,t[a+1])},bo=function(e,t){return e||e===0?t(e):t},nc=function(e,t,n){return n<e?e:n>t?t:n},fi=function(e,t){return!Kn(e)||!(t=F1.exec(e))?"":t[1]},q1=function(e,t,n){return bo(n,function(r){return nc(e,t,r)})},gm=[].slice,Hy=function(e,t){return e&&as(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&as(e[0]))&&!e.nodeType&&e!==Kr},$1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return Kn(r)&&!t||Hy(r,1)?(a=n).push.apply(a,Ar(r)):n.push(r)})||n},Ar=function(e,t,n){return hn&&!t&&hn.selector?hn.selector(e):Kn(e)&&!n&&(dm||!yl())?gm.call((t||Lg).querySelectorAll(e),0):pi(e)?$1(e,n):Hy(e)?gm.call(e,0):e?[e]:[]},_m=function(e){return e=Ar(e)[0]||Wu("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ar(t,n.querySelectorAll?n:n===e?Wu("Invalid scope")||Lg.createElement("div"):e)}},Gy=function(e){return e.sort(function(){return .5-Math.random()})},Wy=function(e){if(Mn(e))return e;var t=as(e)?e:{each:e},n=la(t.ease),r=t.from||0,a=parseFloat(t.base)||0,u={},c=r>0&&r<1,d=isNaN(r)||c,h=t.axis,p=r,v=r;return Kn(r)?p=v={center:.5,edges:.5,end:1}[r]||0:!c&&d&&(p=r[0],v=r[1]),function(g,_,M){var E=(M||t).length,x=u[E],S,A,b,C,L,I,N,T,D;if(!x){if(D=t.grid==="auto"?0:(t.grid||[1,wr])[1],!D){for(N=-wr;N<(N=M[D++].getBoundingClientRect().left)&&D<E;);D<E&&D--}for(x=u[E]=[],S=d?Math.min(D,E)*p-.5:r%D,A=D===wr?0:d?E*v/D-.5:r/D|0,N=0,T=wr,I=0;I<E;I++)b=I%D-S,C=A-(I/D|0),x[I]=L=h?Math.abs(h==="y"?C:b):Ay(b*b+C*C),L>N&&(N=L),L<T&&(T=L);r==="random"&&Gy(x),x.max=N-T,x.min=T,x.v=E=(parseFloat(t.amount)||parseFloat(t.each)*(D>E?E-1:h?h==="y"?E/D:D:Math.max(D,E/D))||0)*(r==="edges"?-1:1),x.b=E<0?a-E:a,x.u=fi(t.amount||t.each)||0,n=n&&E<0?eS(n):n}return E=(x[g]-x.min)/x.max||0,gn(x.b+(n?n(E):E)*x.v)+x.u}},vm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=gn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ns(n)?0:fi(n))}},Xy=function(e,t){var n=pi(e),r,a;return!n&&as(e)&&(r=n=e.radius||wr,e.values?(e=Ar(e.values),(a=!Ns(e[0]))&&(r*=r)):e=vm(e.increment)),bo(t,n?Mn(e)?function(u){return a=e(u),Math.abs(a-u)<=r?a:u}:function(u){for(var c=parseFloat(a?u.x:u),d=parseFloat(a?u.y:0),h=wr,p=0,v=e.length,g,_;v--;)a?(g=e[v].x-c,_=e[v].y-d,g=g*g+_*_):g=Math.abs(e[v]-c),g<h&&(h=g,p=v);return p=!r||h<=r?e[p]:u,a||p===u||Ns(u)?p:p+fi(u)}:vm(e))},Yy=function(e,t,n,r){return bo(pi(e)?!t:n===!0?!!(n=0):!r,function(){return pi(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},K1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,u){return u(a)},r)}},Z1=function(e,t){return function(n){return e(parseFloat(n))+(t||fi(n))}},Q1=function(e,t,n){return qy(e,t,0,1,n)},jy=function(e,t,n){return bo(n,function(r){return e[~~t(r)]})},J1=function o(e,t,n){var r=t-e;return pi(e)?jy(e,o(0,e.length),t):bo(n,function(a){return(r+(a-e)%r)%r+e})},eT=function o(e,t,n){var r=t-e,a=r*2;return pi(e)?jy(e,o(0,e.length-1),t):bo(n,function(u){return u=(a+(u-e)%a)%a||0,e+(u>r?a-u:u)})},Yu=function(e){return e.replace(N1,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(I1);return Yy(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},qy=function(e,t,n,r,a){var u=t-e,c=r-n;return bo(a,function(d){return n+((d-e)/u*c||0)})},tT=function o(e,t,n,r){var a=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!a){var u=Kn(e),c={},d,h,p,v,g;if(n===!0&&(r=1)&&(n=null),u)e={p:e},t={p:t};else if(pi(e)&&!pi(t)){for(p=[],v=e.length,g=v-2,h=1;h<v;h++)p.push(o(e[h-1],e[h]));v--,a=function(M){M*=v;var E=Math.min(g,~~M);return p[E](M-E)},n=t}else r||(e=_l(pi(e)?[]:{},e));if(!p){for(d in t)kg.call(c,e,d,"get",t[d]);a=function(M){return Hg(M,c)||(u?e.p:e)}}}return bo(n,a)},Xv=function(e,t,n){var r=e.labels,a=wr,u,c,d;for(u in r)c=r[u]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(d=u,a=c);return d},sr=function(e,t,n){var r=e.vars,a=r[t],u=hn,c=e._ctx,d,h,p;if(a)return d=r[t+"Params"],h=r.callbackScope||e,n&&So.length&&dd(),c&&(hn=c),p=d?a.apply(h,d):a.call(h),hn=u,p},Mu=function(e){return To(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ni),e.progress()<1&&sr(e,"onInterrupt"),e},ol,$y=[],Ky=function(e){if(e)if(e=!e.name&&e.default||e,Dg()||e.headless){var t=e.name,n=Mn(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:Xu,render:Hg,add:kg,kill:_T,modifier:gT,rawVars:0},u={targetTest:0,get:0,getSetter:Vg,aliases:{},register:0};if(yl(),e!==r){if(tr[t])return;ur(r,ur(hd(e,a),u)),_l(r.prototype,_l(a,hd(e,u))),tr[r.prop=t]=r,e.targetTest&&(Zf.push(r),Ig[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ly(t,r),e.register&&e.register(Xi,r,Hi)}else $y.push(e)},rn=255,Eu={aqua:[0,rn,rn],lime:[0,rn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rn],navy:[0,0,128],white:[rn,rn,rn],olive:[128,128,0],yellow:[rn,rn,0],orange:[rn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rn,0,0],pink:[rn,192,203],cyan:[0,rn,rn],transparent:[rn,rn,rn,0]},vp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*rn+.5|0},Zy=function(e,t,n){var r=e?Ns(e)?[e>>16,e>>8&rn,e&rn]:0:Eu.black,a,u,c,d,h,p,v,g,_,M;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Eu[e])r=Eu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&rn,r&rn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&rn,e&rn]}else if(e.substr(0,3)==="hsl"){if(r=M=e.match(zv),!t)d=+r[0]%360/360,h=+r[1]/100,p=+r[2]/100,u=p<=.5?p*(h+1):p+h-p*h,a=p*2-u,r.length>3&&(r[3]*=1),r[0]=vp(d+1/3,a,u),r[1]=vp(d,a,u),r[2]=vp(d-1/3,a,u);else if(~e.indexOf("="))return r=e.match(Ry),n&&r.length<4&&(r[3]=1),r}else r=e.match(zv)||Eu.transparent;r=r.map(Number)}return t&&!M&&(a=r[0]/rn,u=r[1]/rn,c=r[2]/rn,v=Math.max(a,u,c),g=Math.min(a,u,c),p=(v+g)/2,v===g?d=h=0:(_=v-g,h=p>.5?_/(2-v-g):_/(v+g),d=v===a?(u-c)/_+(u<c?6:0):v===u?(c-a)/_+2:(a-u)/_+4,d*=60),r[0]=~~(d+.5),r[1]=~~(h*100+.5),r[2]=~~(p*100+.5)),n&&r.length<4&&(r[3]=1),r},Qy=function(e){var t=[],n=[],r=-1;return e.split(Mo).forEach(function(a){var u=a.match(sl)||[];t.push.apply(t,u),n.push(r+=u.length+1)}),t.c=n,t},Yv=function(e,t,n){var r="",a=(e+r).match(Mo),u=t?"hsla(":"rgba(",c=0,d,h,p,v;if(!a)return e;if(a=a.map(function(g){return(g=Zy(g,t,1))&&u+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(p=Qy(e),d=n.c,d.join(r)!==p.c.join(r)))for(h=e.replace(Mo,"1").split(sl),v=h.length-1;c<v;c++)r+=h[c]+(~d.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!h)for(h=e.split(Mo),v=h.length-1;c<v;c++)r+=h[c]+a[c];return r+h[v]},Mo=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Eu)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),nT=/hsl[a]?\(/,Jy=function(e){var t=e.join(" "),n;if(Mo.lastIndex=0,Mo.test(t))return n=nT.test(t),e[1]=Yv(e[1],n),e[0]=Yv(e[0],n,Qy(e[1])),!0},ju,ir=(function(){var o=Date.now,e=500,t=33,n=o(),r=n,a=1e3/240,u=a,c=[],d,h,p,v,g,_,M=function E(x){var S=o()-r,A=x===!0,b,C,L,I;if((S>e||S<0)&&(n+=S-t),r+=S,L=r-n,b=L-u,(b>0||A)&&(I=++v.frame,g=L-v.time*1e3,v.time=L=L/1e3,u+=b+(b>=a?4:a-b),C=1),A||(d=h(E)),C)for(_=0;_<c.length;_++)c[_](L,g,I,x)};return v={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(x){return g/(1e3/(x||60))},wake:function(){Py&&(!dm&&Dg()&&(Kr=dm=window,Lg=Kr.document||{},lr.gsap=Xi,(Kr.gsapVersions||(Kr.gsapVersions=[])).push(Xi.version),Dy(fd||Kr.GreenSockGlobals||!Kr.gsap&&Kr||{}),$y.forEach(Ky)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&v.sleep(),h=p||function(x){return setTimeout(x,u-v.time*1e3+1|0)},ju=1,M(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),ju=0,h=Xu},lagSmoothing:function(x,S){e=x||1/0,t=Math.min(S||33,e)},fps:function(x){a=1e3/(x||240),u=v.time*1e3+a},add:function(x,S,A){var b=S?function(C,L,I,N){x(C,L,I,N),v.remove(b)}:x;return v.remove(x),c[A?"unshift":"push"](b),yl(),b},remove:function(x,S){~(S=c.indexOf(x))&&c.splice(S,1)&&_>=S&&_--},_listeners:c},v})(),yl=function(){return!ju&&ir.wake()},kt={},iT=/^[\d.\-M][\d.\-,\s]/,rT=/["']/g,sT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,u=n.length,c,d,h;a<u;a++)d=n[a],c=a!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[r]=isNaN(h)?h.replace(rT,"").trim():+h,r=d.substr(c+1).trim();return t},oT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},aT=function(e){var t=(e+"").split("("),n=kt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[sT(t[1])]:oT(e).split(",").map(Fy)):kt._CE&&iT.test(e)?kt._CE("",e):n},eS=function(e){return function(t){return 1-e(1-t)}},tS=function o(e,t){for(var n=e._first,r;n;)n instanceof wi?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},la=function(e,t){return e&&(Mn(e)?e:kt[e]||aT(e))||t},_a=function(e,t,n,r){n===void 0&&(n=function(d){return 1-t(1-d)}),r===void 0&&(r=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},u;return Vi(e,function(c){kt[c]=lr[c]=a,kt[u=c.toLowerCase()]=n;for(var d in a)kt[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=kt[c+"."+d]=a[d]}),a},nS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xp=function o(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),u=a/fm*(Math.asin(1/r)||0),c=function(p){return p===1?1:r*Math.pow(2,-10*p)*L1((p-u)*a)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:nS(c);return a=fm/a,d.config=function(h,p){return o(e,h,p)},d},yp=function o(e,t){t===void 0&&(t=1.70158);var n=function(u){return u?--u*u*((t+1)*u+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:nS(n);return r.config=function(a){return o(e,a)},r};Vi("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;_a(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});kt.Linear.easeNone=kt.none=kt.Linear.easeIn;_a("Elastic",xp("in"),xp("out"),xp());(function(o,e){var t=1/e,n=2*t,r=2.5*t,a=function(c){return c<t?o*c*c:c<n?o*Math.pow(c-1.5/e,2)+.75:c<r?o*(c-=2.25/e)*c+.9375:o*Math.pow(c-2.625/e,2)+.984375};_a("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);_a("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});_a("Circ",function(o){return-(Ay(1-o*o)-1)});_a("Sine",function(o){return o===1?1:-D1(o*b1)+1});_a("Back",yp("in"),yp("out"),yp());kt.SteppedEase=kt.steps=lr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,u=1-sn;return function(c){return((r*nc(0,u,c)|0)+a)*n}}};gl.ease=kt["quad.out"];Vi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Ug+=o+","+o+"Params,"});var iS=function(e,t){this.id=P1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Iy,this.set=t?t.getSetter:Vg},qu=(function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,xl(this,+t.duration,1,1),this.data=t.data,hn&&(this._ctx=hn,hn.data.push(this)),ju||ir.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,xl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(yl(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Pd(this,n),!a._dp||a.parent||By(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Jr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===sn||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Uy(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gv(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?vl(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-sn?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?pd(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-sn?0:this._rts,this.totalTime(nc(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),bd(this),H1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(yl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==sn&&(this._tTime-=sn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=gn(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Jr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(zi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pd(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=k1);var r=ni;return ni=n,Og(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ni=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Wv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(xr(this,n),zi(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,zi(r)),this._dur||(this._zTime=-sn),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-sn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-sn,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-sn)},e.eventCallback=function(n,r,a){var u=this.vars;return arguments.length>1?(r?(u[n]=r,a&&(u[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete u[n],this):u[n]},e.then=function(n){var r=this,a=r._prom;return new Promise(function(u){var c=Mn(n)?n:Oy,d=function(){var p=r.then;r.then=null,a&&a(),Mn(c)&&(c=c(r))&&(c.then||c===r)&&(r.then=p),u(c),r.then=p};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?d():r._prom=d})},e.kill=function(){Mu(this)},o})();ur(qu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-sn,_prom:0,_ps:!1,_rts:1});var wi=(function(o){wy(e,o);function e(n,r){var a;return n===void 0&&(n={}),a=o.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=zi(n.sortChildren),_n&&Jr(n.parent||_n,Ts(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&zy(Ts(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,u){return Lu(0,arguments,this),this},t.from=function(r,a,u){return Lu(1,arguments,this),this},t.fromTo=function(r,a,u,c){return Lu(2,arguments,this),this},t.set=function(r,a,u){return a.duration=0,a.parent=this,Du(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Un(r,a,xr(this,u),1),this},t.call=function(r,a,u){return Jr(this,Un.delayedCall(0,r,a),u)},t.staggerTo=function(r,a,u,c,d,h,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new Un(r,u,xr(this,d)),this},t.staggerFrom=function(r,a,u,c,d,h,p){return u.runBackwards=1,Du(u).immediateRender=zi(u.immediateRender),this.staggerTo(r,a,u,c,d,h,p)},t.staggerFromTo=function(r,a,u,c,d,h,p,v){return c.startAt=u,Du(c).immediateRender=zi(c.immediateRender),this.staggerTo(r,a,c,d,h,p,v)},t.render=function(r,a,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=r<=0?0:gn(r),v=this._zTime<0!=r<0&&(this._initted||!h),g,_,M,E,x,S,A,b,C,L,I,N;if(this!==_n&&p>d&&r>=0&&(p=d),p!==this._tTime||u||v){if(c!==this._time&&h&&(p+=this._time-c,r+=this._time-c),g=p,C=this._start,b=this._ts,S=!b,v&&(h||(c=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(I=this._yoyo,x=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(x*100+r,a,u);if(g=gn(p%x),p===d?(E=this._repeat,g=h):(L=gn(p/x),E=~~L,E&&E===L&&(g=h,E--),g>h&&(g=h)),L=vl(this._tTime,x),!c&&this._tTime&&L!==E&&this._tTime-L*x-this._dur<=0&&(L=E),I&&E&1&&(g=h-g,N=1),E!==L&&!this._lock){var T=I&&L&1,D=T===(I&&E&1);if(E<L&&(T=!T),c=T?0:p%h?h:p,this._lock=1,this.render(c||(N?0:gn(E*x)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&sr(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1,L=E),c&&c!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,D&&(this._lock=2,c=T?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!S)return this;tS(this,N)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=Y1(this,gn(c),gn(g)),A&&(p-=g-(g=A._start))),this._tTime=p,this._time=g,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&p&&h&&!a&&!L&&(sr(this,"onStart"),this._tTime!==p))return this;if(g>=c&&r>=0)for(_=this._first;_;){if(M=_._next,(_._act||g>=_._start)&&_._ts&&A!==_){if(_.parent!==this)return this.render(r,a,u);if(_.render(_._ts>0?(g-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(g-_._start)*_._ts,a,u),g!==this._time||!this._ts&&!S){A=0,M&&(p+=this._zTime=-sn);break}}_=M}else{_=this._last;for(var W=r<0?r:g;_;){if(M=_._prev,(_._act||W<=_._end)&&_._ts&&A!==_){if(_.parent!==this)return this.render(r,a,u);if(_.render(_._ts>0?(W-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(W-_._start)*_._ts,a,u||ni&&Og(_)),g!==this._time||!this._ts&&!S){A=0,M&&(p+=this._zTime=W?-sn:sn);break}}_=M}}if(A&&!a&&(this.pause(),A.render(g>=c?0:-sn)._zTime=g>=c?1:-1,this._ts))return this._start=C,bd(this),this.render(r,a,u);this._onUpdate&&!a&&sr(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(C===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&To(this,1),!a&&!(r<0&&!c)&&(p||c||!d)&&(sr(this,p===d&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var u=this;if(Ns(a)||(a=xr(this,a,r)),!(r instanceof qu)){if(pi(r))return r.forEach(function(c){return u.add(c,a)}),this;if(Kn(r))return this.addLabel(r,a);if(Mn(r))r=Un.delayedCall(0,r);else return this}return this!==r?Jr(this,r,a):this},t.getChildren=function(r,a,u,c){r===void 0&&(r=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-wr);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof Un?a&&d.push(h):(u&&d.push(h),r&&d.push.apply(d,h.getChildren(!0,a,u)))),h=h._next;return d},t.getById=function(r){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===r)return a[u]},t.remove=function(r){return Kn(r)?this.removeLabel(r):Mn(r)?this.killTweensOf(r):(r.parent===this&&Rd(this,r),r===this._recent&&(this._recent=this._last),aa(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=gn(ir.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=xr(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,u){var c=Un.delayedCall(0,a||Xu,u);return c.data="isPause",this._hasPause=1,Jr(this,c,xr(this,r))},t.removePause=function(r){var a=this._first;for(r=xr(this,r);a;)a._start===r&&a.data==="isPause"&&To(a),a=a._next},t.killTweensOf=function(r,a,u){for(var c=this.getTweensOf(r,u),d=c.length;d--;)mo!==c[d]&&c[d].kill(r,a);return this},t.getTweensOf=function(r,a){for(var u=[],c=Ar(r),d=this._first,h=Ns(a),p;d;)d instanceof Un?B1(d._targets,c)&&(h?(!mo||d._initted&&d._ts)&&d.globalTime(0)<=a&&d.globalTime(d.totalDuration())>a:!a||d.isActive())&&u.push(d):(p=d.getTweensOf(c,a)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(r,a){a=a||{};var u=this,c=xr(u,r),d=a,h=d.startAt,p=d.onStart,v=d.onStartParams,g=d.immediateRender,_,M=Un.to(u,ur({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||sn,onStart:function(){if(u.pause(),!_){var x=a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());M._dur!==x&&xl(M,x,0,1).render(M._time,!0,!0),_=1}p&&p.apply(M,v||[])}},a));return g?M.render(0):M},t.tweenFromTo=function(r,a,u){return this.tweenTo(a,ur({startAt:{time:xr(this,r)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Xv(this,xr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Xv(this,xr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+sn)},t.shiftChildren=function(r,a,u){u===void 0&&(u=0);var c=this._first,d=this.labels,h;for(r=gn(r);c;)c._start>=u&&(c._start+=r,c._end+=r),c=c._next;if(a)for(h in d)d[h]>=u&&(d[h]+=r);return aa(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return o.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),aa(this)},t.totalDuration=function(r){var a=0,u=this,c=u._last,d=wr,h,p,v;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-r:r));if(u._dirty){for(v=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,Jr(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(a-=p,(!v&&!u._dp||v&&v.smoothChildTiming)&&(u._start+=gn(p/u._ts),u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>a&&c._ts&&(a=c._end),c=h;xl(u,u===_n&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(r){if(_n._ts&&(Uy(_n,pd(r,_n)),Ny=ir.frame),ir.frame>=Vv){Vv+=ar.autoSleep||120;var a=_n._first;if((!a||!a._ts)&&ar.autoSleep&&ir._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||ir.sleep()}}},e})(qu);ur(wi.prototype,{_lock:0,_hasPause:0,_forcing:0});var lT=function(e,t,n,r,a,u,c){var d=new Hi(this._pt,e,t,0,1,uS,null,a),h=0,p=0,v,g,_,M,E,x,S,A;for(d.b=n,d.e=r,n+="",r+="",(S=~r.indexOf("random("))&&(r=Yu(r)),u&&(A=[n,r],u(A,e,t),n=A[0],r=A[1]),g=n.match(gp)||[];v=gp.exec(r);)M=v[0],E=r.substring(h,v.index),_?_=(_+1)%5:E.substr(-5)==="rgba("&&(_=1),M!==g[p++]&&(x=parseFloat(g[p-1])||0,d._pt={_next:d._pt,p:E||p===1?E:",",s:x,c:M.charAt(1)==="="?ll(x,M)-x:parseFloat(M)-x,m:_&&_<4?Math.round:0},h=gp.lastIndex);return d.c=h<r.length?r.substring(h,r.length):"",d.fp=c,(by.test(r)||S)&&(d.e=0),this._pt=d,d},kg=function(e,t,n,r,a,u,c,d,h,p){Mn(r)&&(r=r(a||0,e,u));var v=e[t],g=n!=="get"?n:Mn(v)?h?e[t.indexOf("set")||!Mn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():v,_=Mn(v)?h?hT:aS:zg,M;if(Kn(r)&&(~r.indexOf("random(")&&(r=Yu(r)),r.charAt(1)==="="&&(M=ll(g,r)+(fi(g)||0),(M||M===0)&&(r=M))),!p||g!==r||xm)return!isNaN(g*r)&&r!==""?(M=new Hi(this._pt,e,t,+g||0,r-(g||0),typeof v=="boolean"?mT:lS,0,_),h&&(M.fp=h),c&&M.modifier(c,this,e),this._pt=M):(!v&&!(t in e)&&Ng(t,r),lT.call(this,e,t,g,r,_,d||ar.stringFilter,h))},uT=function(e,t,n,r,a){if(Mn(e)&&(e=Nu(e,a,t,n,r)),!as(e)||e.style&&e.nodeType||pi(e)||Cy(e))return Kn(e)?Nu(e,a,t,n,r):e;var u={},c;for(c in e)u[c]=Nu(e[c],a,t,n,r);return u},rS=function(e,t,n,r,a,u){var c,d,h,p;if(tr[e]&&(c=new tr[e]).init(a,c.rawVars?t[e]:uT(t[e],r,a,u,n),n,r,u)!==!1&&(n._pt=d=new Hi(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==ol))for(h=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)h[c._props[p]]=d;return c},mo,xm,Bg=function o(e,t,n){var r=e.vars,a=r.ease,u=r.startAt,c=r.immediateRender,d=r.lazy,h=r.onUpdate,p=r.runBackwards,v=r.yoyoEase,g=r.keyframes,_=r.autoRevert,M=e._dur,E=e._startAt,x=e._targets,S=e.parent,A=S&&S.data==="nested"?S.vars.targets:x,b=e._overwrite==="auto"&&!bg,C=e.timeline,L,I,N,T,D,W,k,H,K,ee,Z,Q,V;if(C&&(!g||!a)&&(a="none"),e._ease=la(a,gl.ease),e._yEase=v?eS(la(v===!0?a:v,gl.ease)):0,v&&e._yoyo&&!e._repeat&&(v=e._yEase,e._yEase=e._ease,e._ease=v),e._from=!C&&!!r.runBackwards,!C||g&&!r.stagger){if(H=x[0]?oa(x[0]).harness:0,Q=H&&r[H.prop],L=hd(r,Ig),E&&(E._zTime<0&&E.progress(1),t<0&&p&&c&&!_?E.render(-1,!0):E.revert(p&&M?Kf:O1),E._lazy=0),u){if(To(e._startAt=Un.set(x,ur({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!E&&zi(d),startAt:null,delay:0,onUpdate:h&&function(){return sr(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ni||!c&&!_)&&e._startAt.revert(Kf),c&&M&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&M&&!E){if(t&&(c=!1),N=ur({overwrite:!1,data:"isFromStart",lazy:c&&!E&&zi(d),immediateRender:c,stagger:0,parent:S},L),Q&&(N[H.prop]=Q),To(e._startAt=Un.set(x,N)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ni?e._startAt.revert(Kf):e._startAt.render(-1,!0)),e._zTime=t,!c)o(e._startAt,sn,sn);else if(!t)return}for(e._pt=e._ptCache=0,d=M&&zi(d)||d&&!M,I=0;I<x.length;I++){if(D=x[I],k=D._gsap||Fg(x)[I]._gsap,e._ptLookup[I]=ee={},hm[k.id]&&So.length&&dd(),Z=A===x?I:A.indexOf(D),H&&(K=new H).init(D,Q||L,e,Z,A)!==!1&&(e._pt=T=new Hi(e._pt,D,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(q){ee[q]=T}),K.priority&&(W=1)),!H||Q)for(N in L)tr[N]&&(K=rS(N,L,e,Z,D,A))?K.priority&&(W=1):ee[N]=T=kg.call(e,D,N,"get",L[N],Z,A,0,r.stringFilter);e._op&&e._op[I]&&e.kill(D,e._op[I]),b&&e._pt&&(mo=e,_n.killTweensOf(D,ee,e.globalTime(t)),V=!e.parent,mo=0),e._pt&&d&&(hm[k.id]=1)}W&&cS(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!V,g&&t<=0&&C.render(wr,!0,!0)},cT=function(e,t,n,r,a,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,v,g,_;if(!h)for(h=e._ptCache[t]=[],g=e._ptLookup,_=e._targets.length;_--;){if(p=g[_][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return xm=1,e.vars[t]="+=0",Bg(e,c),xm=0,d?Wu(t+" not eligible for reset"):1;h.push(p)}for(_=h.length;_--;)v=h[_],p=v._pt||v,p.s=(r||r===0)&&!a?r:p.s+(r||0)+u*p.c,p.c=n-p.s,v.e&&(v.e=bn(n)+fi(v.e)),v.b&&(v.b=p.s+fi(v.b))},fT=function(e,t){var n=e[0]?oa(e[0]).harness:0,r=n&&n.aliases,a,u,c,d;if(!r)return t;a=_l({},t);for(u in r)if(u in a)for(d=r[u].split(","),c=d.length;c--;)a[d[c]]=a[u];return a},dT=function(e,t,n,r){var a=t.ease||r||"power1.inOut",u,c;if(pi(t))c=n[e]||(n[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:a})});else for(u in t)c=n[u]||(n[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},Nu=function(e,t,n,r,a){return Mn(e)?e.call(t,n,r,a):Kn(e)&&~e.indexOf("random(")?Yu(e):e},sS=Ug+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",oS={};Vi(sS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return oS[o]=1});var Un=(function(o){wy(e,o);function e(n,r,a,u){var c;typeof r=="number"&&(a.duration=r,r=a,a=null),c=o.call(this,u?r:Du(r))||this;var d=c.vars,h=d.duration,p=d.delay,v=d.immediateRender,g=d.stagger,_=d.overwrite,M=d.keyframes,E=d.defaults,x=d.scrollTrigger,S=d.yoyoEase,A=r.parent||_n,b=(pi(n)||Cy(n)?Ns(n[0]):"length"in r)?[n]:Ar(n),C,L,I,N,T,D,W,k;if(c._targets=b.length?Fg(b):Wu("GSAP target "+n+" not found. https://gsap.com",!ar.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=_,M||g||cf(h)||cf(p)){if(r=c.vars,C=c.timeline=new wi({data:"nested",defaults:E||{},targets:A&&A.data==="nested"?A.vars.targets:b}),C.kill(),C.parent=C._dp=Ts(c),C._start=0,g||cf(h)||cf(p)){if(N=b.length,W=g&&Wy(g),as(g))for(T in g)~sS.indexOf(T)&&(k||(k={}),k[T]=g[T]);for(L=0;L<N;L++)I=hd(r,oS),I.stagger=0,S&&(I.yoyoEase=S),k&&_l(I,k),D=b[L],I.duration=+Nu(h,Ts(c),L,D,b),I.delay=(+Nu(p,Ts(c),L,D,b)||0)-c._delay,!g&&N===1&&I.delay&&(c._delay=p=I.delay,c._start+=p,I.delay=0),C.to(D,I,W?W(L,D,b):0),C._ease=kt.none;C.duration()?h=p=0:c.timeline=0}else if(M){Du(ur(C.vars.defaults,{ease:"none"})),C._ease=la(M.ease||r.ease||"none");var H=0,K,ee,Z;if(pi(M))M.forEach(function(Q){return C.to(b,Q,">")}),C.duration();else{I={};for(T in M)T==="ease"||T==="easeEach"||dT(T,M[T],I,M.easeEach);for(T in I)for(K=I[T].sort(function(Q,V){return Q.t-V.t}),H=0,L=0;L<K.length;L++)ee=K[L],Z={ease:ee.e,duration:(ee.t-(L?K[L-1].t:0))/100*h},Z[T]=ee.v,C.to(b,Z,H),H+=Z.duration;C.duration()<h&&C.to({},{duration:h-C.duration()})}}h||c.duration(h=C.duration())}else c.timeline=0;return _===!0&&!bg&&(mo=Ts(c),_n.killTweensOf(b),mo=0),Jr(A,Ts(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(v||!h&&!M&&c._start===gn(A._time)&&zi(v)&&G1(Ts(c))&&A.data!=="nested")&&(c._tTime=-sn,c.render(Math.max(0,-p)||0)),x&&zy(Ts(c),x),c}var t=e.prototype;return t.render=function(r,a,u){var c=this._time,d=this._tDur,h=this._dur,p=r<0,v=r>d-sn&&!p?d:r<sn?0:r,g,_,M,E,x,S,A,b,C;if(!h)X1(this,r,a,u);else if(v!==this._tTime||!r||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(g=v,b=this.timeline,this._repeat){if(E=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(E*100+r,a,u);if(g=gn(v%E),v===d?(M=this._repeat,g=h):(x=gn(v/E),M=~~x,M&&M===x?(g=h,M--):g>h&&(g=h)),S=this._yoyo&&M&1,S&&(C=this._yEase,g=h-g),x=vl(this._tTime,E),g===c&&!u&&this._initted&&M===x)return this._tTime=v,this;M!==x&&(b&&this._yEase&&tS(b,S),this.vars.repeatRefresh&&!S&&!this._lock&&g!==E&&this._initted&&(this._lock=u=1,this.render(gn(E*M),!0).invalidate()._lock=0))}if(!this._initted){if(Vy(this,p?r:g,u,a,v))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&M!==x))return this;if(h!==this._dur)return this.render(r,a,u)}if(this._tTime=v,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(C||this._ease)(g/h),this._from&&(this.ratio=A=1-A),!c&&v&&!a&&!x&&(sr(this,"onStart"),this._tTime!==v))return this;for(_=this._pt;_;)_.r(A,_.d),_=_._next;b&&b.render(r<0?r:b._dur*b._ease(g/this._dur),a,u)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(p&&pm(this,r,a,u),sr(this,"onUpdate")),this._repeat&&M!==x&&this.vars.onRepeat&&!a&&this.parent&&sr(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(p&&!this._onUpdate&&pm(this,r,!0,!0),(r||!h)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&To(this,1),!a&&!(p&&!c)&&(v||c||S)&&(sr(this,v===d?"onComplete":"onReverseComplete",!0),this._prom&&!(v<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,u,c,d){ju||ir.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Bg(this,h),p=this._ease(h/this._dur),cT(this,r,a,u,c,p,h,d)?this.resetTo(r,a,u,c,1):(Pd(this,0),this.parent||ky(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Mu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ni),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,mo&&mo.vars.overwrite!==!0)._first||Mu(this),this.parent&&u!==this.timeline.totalDuration()&&xl(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=r?Ar(r):c,h=this._ptLookup,p=this._pt,v,g,_,M,E,x,S;if((!a||a==="all")&&V1(c,d))return a==="all"&&(this._pt=0),Mu(this);for(v=this._op=this._op||[],a!=="all"&&(Kn(a)&&(E={},Vi(a,function(A){return E[A]=1}),a=E),a=fT(c,a)),S=c.length;S--;)if(~d.indexOf(c[S])){g=h[S],a==="all"?(v[S]=a,M=g,_={}):(_=v[S]=v[S]||{},M=a);for(E in M)x=g&&g[E],x&&((!("kill"in x.d)||x.d.kill(E)===!0)&&Rd(this,x,"_pt"),delete g[E]),_!=="all"&&(_[E]=1)}return this._initted&&!this._pt&&p&&Mu(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return Lu(1,arguments)},e.delayedCall=function(r,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(r,a,u){return Lu(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,u){return _n.killTweensOf(r,a,u)},e})(qu);ur(Un.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vi("staggerTo,staggerFrom,staggerFromTo",function(o){Un[o]=function(){var e=new wi,t=gm.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var zg=function(e,t,n){return e[t]=n},aS=function(e,t,n){return e[t](n)},hT=function(e,t,n,r){return e[t](r.fp,n)},pT=function(e,t,n){return e.setAttribute(t,n)},Vg=function(e,t){return Mn(e[t])?aS:Pg(e[t])&&e.setAttribute?pT:zg},lS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},mT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},uS=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Hg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},gT=function(e,t,n,r){for(var a=this._pt,u;a;)u=a._next,a.p===r&&a.modifier(e,t,n),a=u},_T=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Rd(this,t,"_pt"):t.dep||(n=1),t=r;return!n},vT=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},cS=function(e){for(var t=e._pt,n,r,a,u;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:u)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:u=t,t=n}e._pt=a},Hi=(function(){function o(t,n,r,a,u,c,d,h,p){this.t=n,this.s=a,this.c=u,this.p=r,this.r=c||lS,this.d=d||this,this.set=h||zg,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=vT,this.m=n,this.mt=a,this.tween=r},o})();Vi(Ug+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Ig[o]=1});lr.TweenMax=lr.TweenLite=Un;lr.TimelineLite=lr.TimelineMax=wi;_n=new wi({sortChildren:!1,defaults:gl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ar.stringFilter=Jy;var ua=[],Qf={},xT=[],jv=0,yT=0,Sp=function(e){return(Qf[e]||xT).map(function(t){return t()})},ym=function(){var e=Date.now(),t=[];e-jv>2&&(Sp("matchMediaInit"),ua.forEach(function(n){var r=n.queries,a=n.conditions,u,c,d,h;for(c in r)u=Kr.matchMedia(r[c]).matches,u&&(d=1),u!==a[c]&&(a[c]=u,h=1);h&&(n.revert(),d&&t.push(n))}),Sp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),jv=e,Sp("matchMedia"))},fS=(function(){function o(t,n){this.selector=n&&_m(n),this.data=[],this._r=[],this.isReverted=!1,this.id=yT++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,r,a){Mn(n)&&(a=r,r=n,n=Mn);var u=this,c=function(){var h=hn,p=u.selector,v;return h&&h!==u&&h.data.push(u),a&&(u.selector=_m(a)),hn=u,v=r.apply(u,arguments),Mn(v)&&u._r.push(v),hn=h,u.selector=p,u.isReverted=!1,v};return u.last=c,n===Mn?c(u,function(d){return u.add(null,d)}):n?u[n]=c:c},e.ignore=function(n){var r=hn;hn=null,n(this),hn=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof o?n.push.apply(n,r.getTweens()):r instanceof Un&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?(function(){for(var c=a.getTweens(),d=a.data.length,h;d--;)h=a.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,v){return v.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),d=a.data.length;d--;)h=a.data[d],h instanceof wi?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Un)&&h.revert&&h.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),r)for(var u=ua.length;u--;)ua[u].id===this.id&&ua.splice(u,1)},e.revert=function(n){this.kill(n||{})},o})(),ST=(function(){function o(t){this.contexts=[],this.scope=t,hn&&hn.data.push(this)}var e=o.prototype;return e.add=function(n,r,a){as(n)||(n={matches:n});var u=new fS(0,a||this.scope),c=u.conditions={},d,h,p;hn&&!u.selector&&(u.selector=hn.selector),this.contexts.push(u),r=u.add("onMatch",r),u.queries=n;for(h in n)h==="all"?p=1:(d=Kr.matchMedia(n[h]),d&&(ua.indexOf(u)<0&&ua.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener(ym):d.addEventListener("change",ym)));return p&&r(u,function(v){return u.add(null,v)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},o})(),md={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Ky(r)})},timeline:function(e){return new wi(e)},getTweensOf:function(e,t){return _n.getTweensOf(e,t)},getProperty:function(e,t,n,r){Kn(e)&&(e=Ar(e)[0]);var a=oa(e||{}).get,u=n?Oy:Fy;return n==="native"&&(n=""),e&&(t?u((tr[t]&&tr[t].get||a)(e,t,n,r)):function(c,d,h){return u((tr[c]&&tr[c].get||a)(e,c,d,h))})},quickSetter:function(e,t,n){if(e=Ar(e),e.length>1){var r=e.map(function(p){return Xi.quickSetter(p,t,n)}),a=r.length;return function(p){for(var v=a;v--;)r[v](p)}}e=e[0]||{};var u=tr[t],c=oa(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var v=new u;ol._pt=0,v.init(e,n?p+n:p,ol,0,[e]),v.render(1,v),ol._pt&&Hg(1,ol)}:c.set(e,d);return u?h:function(p){return h(e,d,n?p+n:p,c,1)}},quickTo:function(e,t,n){var r,a=Xi.to(e,ur((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),u=function(d,h,p){return a.resetTo(t,d,h,p)};return u.tween=a,u},isTweening:function(e){return _n.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=la(e.ease,gl.ease)),Hv(gl,e||{})},config:function(e){return Hv(ar,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,u=e.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!tr[c]&&!lr[c]&&Wu(t+" effect requires "+c+" plugin.")}),_p[t]=function(c,d,h){return n(Ar(c),ur(d||{},a),h)},u&&(wi.prototype[t]=function(c,d,h){return this.add(_p[t](c,as(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){kt[e]=la(t)},parseEase:function(e,t){return arguments.length?la(e,t):kt},getById:function(e){return _n.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wi(e),r,a;for(n.smoothChildTiming=zi(e.smoothChildTiming),_n.remove(n),n._dp=0,n._time=n._tTime=_n._time,r=_n._first;r;)a=r._next,(t||!(!r._dur&&r instanceof Un&&r.vars.onComplete===r._targets[0]))&&Jr(n,r,r._start-r._delay),r=a;return Jr(_n,n,0),n},context:function(e,t){return e?new fS(e,t):hn},matchMedia:function(e){return new ST(e)},matchMediaRefresh:function(){return ua.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||ym()},addEventListener:function(e,t){var n=Qf[e]||(Qf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Qf[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:J1,wrapYoyo:eT,distribute:Wy,random:Yy,snap:Xy,normalize:Q1,getUnit:fi,clamp:q1,splitColor:Zy,toArray:Ar,selector:_m,mapRange:qy,pipe:K1,unitize:Z1,interpolate:tT,shuffle:Gy},install:Dy,effects:_p,ticker:ir,updateRoot:wi.updateRoot,plugins:tr,globalTimeline:_n,core:{PropTween:Hi,globals:Ly,Tween:Un,Timeline:wi,Animation:qu,getCache:oa,_removeLinkedListItem:Rd,reverting:function(){return ni},context:function(e){return e&&hn&&(hn.data.push(e),e._ctx=hn),hn},suppressOverwrites:function(e){return bg=e}}};Vi("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return md[o]=Un[o]});ir.add(wi.updateRoot);ol=md.to({},{duration:0});var MT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ET=function(e,t){var n=e._targets,r,a,u;for(r in t)for(a=n.length;a--;)u=e._ptLookup[a][r],u&&(u=u.d)&&(u._pt&&(u=MT(u,r)),u&&u.modifier&&u.modifier(t[r],e,n[a],r))},Mp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,u){u._onInit=function(c){var d,h;if(Kn(a)&&(d={},Vi(a,function(p){return d[p]=1}),a=d),t){d={};for(h in a)d[h]=t(a[h]);a=d}ET(c,a)}}}},Xi=md.registerPlugin({name:"attr",init:function(e,t,n,r,a){var u,c,d;this.tween=n;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],r,a,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var n=t._pt;n;)ni?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Mp("roundProps",vm),Mp("modifiers"),Mp("snap",Xy))||md;Un.version=wi.version=Xi.version="3.14.2";Py=1;Dg()&&yl();kt.Power0;kt.Power1;kt.Power2;kt.Power3;kt.Power4;kt.Linear;kt.Quad;kt.Cubic;kt.Quart;kt.Quint;kt.Strong;kt.Elastic;kt.Back;kt.SteppedEase;kt.Bounce;kt.Sine;kt.Expo;kt.Circ;var qv,go,ul,Gg,na,$v,Wg,TT=function(){return typeof window<"u"},Is={},Ko=180/Math.PI,cl=Math.PI/180,za=Math.atan2,Kv=1e8,Xg=/([A-Z])/g,wT=/(left|right|width|margin|padding|x)/i,AT=/[\s,\(]\S/,es={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},CT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},RT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},PT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},dS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},hS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},DT=function(e,t,n){return e.style[t]=n},LT=function(e,t,n){return e.style.setProperty(t,n)},NT=function(e,t,n){return e._gsap[t]=n},IT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},UT=function(e,t,n,r,a){var u=e._gsap;u.scaleX=u.scaleY=n,u.renderTransform(a,u)},FT=function(e,t,n,r,a){var u=e._gsap;u[t]=n,u.renderTransform(a,u)},vn="transform",Gi=vn+"Origin",OT=function o(e,t){var n=this,r=this.target,a=r.style,u=r._gsap;if(e in Is&&a){if(this.tfm=this.tfm||{},e!=="transform")e=es[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=ws(r,c)}):this.tfm[e]=u.x?u[e]:ws(r,e),e===Gi&&(this.tfm.zOrigin=u.zOrigin);else return es.transform.split(",").forEach(function(c){return o.call(n,c,t)});if(this.props.indexOf(vn)>=0)return;u.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Gi,t,"")),e=vn}(a||t)&&this.props.push(e,t,a[e])},pS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},kT=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Xg,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)r[u]=this.tfm[u];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Wg(),(!a||!a.isStart)&&!n[vn]&&(pS(n),r.zOrigin&&n[Gi]&&(n[Gi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},mS=function(e,t){var n={target:e,props:[],revert:kT,save:OT};return e._gsap||Xi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},gS,Mm=function(e,t){var n=go.createElementNS?go.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):go.createElement(e);return n&&n.style?n:go.createElement(e)},or=function o(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Xg,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&o(e,Sl(t)||t,1)||""},Zv="O,Moz,ms,Ms,Webkit".split(","),Sl=function(e,t,n){var r=t||na,a=r.style,u=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(Zv[u]+e in a););return u<0?null:(u===3?"ms":u>=0?Zv[u]:"")+e},Em=function(){TT()&&window.document&&(qv=window,go=qv.document,ul=go.documentElement,na=Mm("div")||{style:{}},Mm("div"),vn=Sl(vn),Gi=vn+"Origin",na.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gS=!!Sl("perspective"),Wg=Xi.core.reverting,Gg=1)},Qv=function(e){var t=e.ownerSVGElement,n=Mm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",n.appendChild(r),ul.appendChild(n);try{a=r.getBBox()}catch{}return n.removeChild(r),ul.removeChild(n),a},Jv=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},_S=function(e){var t,n;try{t=e.getBBox()}catch{t=Qv(e),n=1}return t&&(t.width||t.height)||n||(t=Qv(e)),t&&!t.width&&!t.x&&!t.y?{x:+Jv(e,["x","cx","x1"])||0,y:+Jv(e,["y","cy","y1"])||0,width:0,height:0}:t},vS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_S(e))},wo=function(e,t){if(t){var n=e.style,r;t in Is&&t!==Gi&&(t=vn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Xg,"-$1").toLowerCase())):n.removeAttribute(t)}},_o=function(e,t,n,r,a,u){var c=new Hi(e._pt,t,n,0,1,u?hS:dS);return e._pt=c,c.b=r,c.e=a,e._props.push(n),c},ex={deg:1,rad:1,turn:1},BT={grid:1,flex:1},Ao=function o(e,t,n,r){var a=parseFloat(n)||0,u=(n+"").trim().substr((a+"").length)||"px",c=na.style,d=wT.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),v=100,g=r==="px",_=r==="%",M,E,x,S;if(r===u||!a||ex[r]||ex[u])return a;if(u!=="px"&&!g&&(a=o(e,t,n,"px")),S=e.getCTM&&vS(e),(_||u==="%")&&(Is[t]||~t.indexOf("adius")))return M=S?e.getBBox()[d?"width":"height"]:e[p],bn(_?a/M*v:a/100*M);if(c[d?"width":"height"]=v+(g?u:r),E=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!h?e:e.parentNode,S&&(E=(e.ownerSVGElement||{}).parentNode),(!E||E===go||!E.appendChild)&&(E=go.body),x=E._gsap,x&&_&&x.width&&d&&x.time===ir.time&&!x.uncache)return bn(a/x.width*v);if(_&&(t==="height"||t==="width")){var A=e.style[t];e.style[t]=v+r,M=e[p],A?e.style[t]=A:wo(e,t)}else(_||u==="%")&&!BT[or(E,"display")]&&(c.position=or(e,"position")),E===e&&(c.position="static"),E.appendChild(na),M=na[p],E.removeChild(na),c.position="absolute";return d&&_&&(x=oa(E),x.time=ir.time,x.width=E[p]),bn(g?M*a/v:M&&a?v/M*a:0)},ws=function(e,t,n,r){var a;return Gg||Em(),t in es&&t!=="transform"&&(t=es[t],~t.indexOf(",")&&(t=t.split(",")[0])),Is[t]&&t!=="transform"?(a=Ku(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:_d(or(e,Gi))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=gd[t]&&gd[t](e,t,n)||or(e,t)||Iy(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Ao(e,t,a,n)+n:a},zT=function(e,t,n,r){if(!n||n==="none"){var a=Sl(t,e,1),u=a&&or(e,a,1);u&&u!==n?(t=a,n=u):t==="borderColor"&&(n=or(e,"borderTopColor"))}var c=new Hi(this._pt,e.style,t,0,1,uS),d=0,h=0,p,v,g,_,M,E,x,S,A,b,C,L;if(c.b=n,c.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=or(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(E=e.style[t],e.style[t]=r,r=or(e,t)||r,E?e.style[t]=E:wo(e,t)),p=[n,r],Jy(p),n=p[0],r=p[1],g=n.match(sl)||[],L=r.match(sl)||[],L.length){for(;v=sl.exec(r);)x=v[0],A=r.substring(d,v.index),M?M=(M+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(M=1),x!==(E=g[h++]||"")&&(_=parseFloat(E)||0,C=E.substr((_+"").length),x.charAt(1)==="="&&(x=ll(_,x)+C),S=parseFloat(x),b=x.substr((S+"").length),d=sl.lastIndex-b.length,b||(b=b||ar.units[t]||C,d===r.length&&(r+=b,c.e+=b)),C!==b&&(_=Ao(e,t,E,b)||0),c._pt={_next:c._pt,p:A||h===1?A:",",s:_,c:S-_,m:M&&M<4||t==="zIndex"?Math.round:0});c.c=d<r.length?r.substring(d,r.length):""}else c.r=t==="display"&&r==="none"?hS:dS;return by.test(r)&&(c.e=0),this._pt=c,c},tx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},VT=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=tx[n]||n,t[1]=tx[r]||r,t.join(" ")},HT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,u=n._gsap,c,d,h;if(a==="all"||a===!0)r.cssText="",d=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],Is[c]&&(d=1,c=c==="transformOrigin"?Gi:vn),wo(n,c);d&&(wo(n,vn),u&&(u.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ku(n,1),u.uncache=1,pS(r)))}},gd={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var u=e._pt=new Hi(e._pt,t,n,0,0,HT);return u.u=r,u.pr=-10,u.tween=a,e._props.push(n),1}}},$u=[1,0,0,1,0,0],xS={},yS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nx=function(e){var t=or(e,vn);return yS(t)?$u:t.substr(7).match(Ry).map(bn)},Yg=function(e,t){var n=e._gsap||oa(e),r=e.style,a=nx(e),u,c,d,h;return n.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,a=[d.a,d.b,d.c,d.d,d.e,d.f],a.join(",")==="1,0,0,1,0,0"?$u:a):(a===$u&&!e.offsetParent&&e!==ul&&!n.svg&&(d=r.display,r.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,ul.appendChild(e)),a=nx(e),d?r.display=d:wo(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):ul.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Tm=function(e,t,n,r,a,u){var c=e._gsap,d=a||Yg(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,v=c.xOffset||0,g=c.yOffset||0,_=d[0],M=d[1],E=d[2],x=d[3],S=d[4],A=d[5],b=t.split(" "),C=parseFloat(b[0])||0,L=parseFloat(b[1])||0,I,N,T,D;n?d!==$u&&(N=_*x-M*E)&&(T=C*(x/N)+L*(-E/N)+(E*A-x*S)/N,D=C*(-M/N)+L*(_/N)-(_*A-M*S)/N,C=T,L=D):(I=_S(e),C=I.x+(~b[0].indexOf("%")?C/100*I.width:C),L=I.y+(~(b[1]||b[0]).indexOf("%")?L/100*I.height:L)),r||r!==!1&&c.smooth?(S=C-h,A=L-p,c.xOffset=v+(S*_+A*E)-S,c.yOffset=g+(S*M+A*x)-A):c.xOffset=c.yOffset=0,c.xOrigin=C,c.yOrigin=L,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[Gi]="0px 0px",u&&(_o(u,c,"xOrigin",h,C),_o(u,c,"yOrigin",p,L),_o(u,c,"xOffset",v,c.xOffset),_o(u,c,"yOffset",g,c.yOffset)),e.setAttribute("data-svg-origin",C+" "+L)},Ku=function(e,t){var n=e._gsap||new iS(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=or(e,Gi)||"0",p,v,g,_,M,E,x,S,A,b,C,L,I,N,T,D,W,k,H,K,ee,Z,Q,V,q,te,U,O,J,Ce,be,ke;return p=v=g=E=x=S=A=b=C=0,_=M=1,n.svg=!!(e.getCTM&&vS(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(r[vn]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[vn]!=="none"?d[vn]:"")),r.scale=r.rotate=r.translate="none"),N=Yg(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),h=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),Tm(e,V||h,!!V||n.originIsAbsolute,n.smooth!==!1,N)),L=n.xOrigin||0,I=n.yOrigin||0,N!==$u&&(k=N[0],H=N[1],K=N[2],ee=N[3],p=Z=N[4],v=Q=N[5],N.length===6?(_=Math.sqrt(k*k+H*H),M=Math.sqrt(ee*ee+K*K),E=k||H?za(H,k)*Ko:0,A=K||ee?za(K,ee)*Ko+E:0,A&&(M*=Math.abs(Math.cos(A*cl))),n.svg&&(p-=L-(L*k+I*K),v-=I-(L*H+I*ee))):(ke=N[6],Ce=N[7],U=N[8],O=N[9],J=N[10],be=N[11],p=N[12],v=N[13],g=N[14],T=za(ke,J),x=T*Ko,T&&(D=Math.cos(-T),W=Math.sin(-T),V=Z*D+U*W,q=Q*D+O*W,te=ke*D+J*W,U=Z*-W+U*D,O=Q*-W+O*D,J=ke*-W+J*D,be=Ce*-W+be*D,Z=V,Q=q,ke=te),T=za(-K,J),S=T*Ko,T&&(D=Math.cos(-T),W=Math.sin(-T),V=k*D-U*W,q=H*D-O*W,te=K*D-J*W,be=ee*W+be*D,k=V,H=q,K=te),T=za(H,k),E=T*Ko,T&&(D=Math.cos(T),W=Math.sin(T),V=k*D+H*W,q=Z*D+Q*W,H=H*D-k*W,Q=Q*D-Z*W,k=V,Z=q),x&&Math.abs(x)+Math.abs(E)>359.9&&(x=E=0,S=180-S),_=bn(Math.sqrt(k*k+H*H+K*K)),M=bn(Math.sqrt(Q*Q+ke*ke)),T=za(Z,Q),A=Math.abs(T)>2e-4?T*Ko:0,C=be?1/(be<0?-be:be):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!yS(or(e,vn)),V&&e.setAttribute("transform",V))),Math.abs(A)>90&&Math.abs(A)<270&&(a?(_*=-1,A+=E<=0?180:-180,E+=E<=0?180:-180):(M*=-1,A+=A<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+u,n.y=v-((n.yPercent=v&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-v)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+u,n.z=g+u,n.scaleX=bn(_),n.scaleY=bn(M),n.rotation=bn(E)+c,n.rotationX=bn(x)+c,n.rotationY=bn(S)+c,n.skewX=A+c,n.skewY=b+c,n.transformPerspective=C+u,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Gi]=_d(h)),n.xOffset=n.yOffset=0,n.force3D=ar.force3D,n.renderTransform=n.svg?WT:gS?SS:GT,n.uncache=0,n},_d=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ep=function(e,t,n){var r=fi(t);return bn(parseFloat(t)+parseFloat(Ao(e,"x",n+"px",r)))+r},GT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,SS(e,t)},Ho="0deg",fu="0px",Go=") ",SS=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,d=n.z,h=n.rotation,p=n.rotationY,v=n.rotationX,g=n.skewX,_=n.skewY,M=n.scaleX,E=n.scaleY,x=n.transformPerspective,S=n.force3D,A=n.target,b=n.zOrigin,C="",L=S==="auto"&&e&&e!==1||S===!0;if(b&&(v!==Ho||p!==Ho)){var I=parseFloat(p)*cl,N=Math.sin(I),T=Math.cos(I),D;I=parseFloat(v)*cl,D=Math.cos(I),u=Ep(A,u,N*D*-b),c=Ep(A,c,-Math.sin(I)*-b),d=Ep(A,d,T*D*-b+b)}x!==fu&&(C+="perspective("+x+Go),(r||a)&&(C+="translate("+r+"%, "+a+"%) "),(L||u!==fu||c!==fu||d!==fu)&&(C+=d!==fu||L?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+Go),h!==Ho&&(C+="rotate("+h+Go),p!==Ho&&(C+="rotateY("+p+Go),v!==Ho&&(C+="rotateX("+v+Go),(g!==Ho||_!==Ho)&&(C+="skew("+g+", "+_+Go),(M!==1||E!==1)&&(C+="scale("+M+", "+E+Go),A.style[vn]=C||"translate(0, 0)"},WT=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,d=n.rotation,h=n.skewX,p=n.skewY,v=n.scaleX,g=n.scaleY,_=n.target,M=n.xOrigin,E=n.yOrigin,x=n.xOffset,S=n.yOffset,A=n.forceCSS,b=parseFloat(u),C=parseFloat(c),L,I,N,T,D;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=cl,h*=cl,L=Math.cos(d)*v,I=Math.sin(d)*v,N=Math.sin(d-h)*-g,T=Math.cos(d-h)*g,h&&(p*=cl,D=Math.tan(h-p),D=Math.sqrt(1+D*D),N*=D,T*=D,p&&(D=Math.tan(p),D=Math.sqrt(1+D*D),L*=D,I*=D)),L=bn(L),I=bn(I),N=bn(N),T=bn(T)):(L=v,T=g,I=N=0),(b&&!~(u+"").indexOf("px")||C&&!~(c+"").indexOf("px"))&&(b=Ao(_,"x",u,"px"),C=Ao(_,"y",c,"px")),(M||E||x||S)&&(b=bn(b+M-(M*L+E*N)+x),C=bn(C+E-(M*I+E*T)+S)),(r||a)&&(D=_.getBBox(),b=bn(b+r/100*D.width),C=bn(C+a/100*D.height)),D="matrix("+L+","+I+","+N+","+T+","+b+","+C+")",_.setAttribute("transform",D),A&&(_.style[vn]=D)},XT=function(e,t,n,r,a){var u=360,c=Kn(a),d=parseFloat(a)*(c&&~a.indexOf("rad")?Ko:1),h=d-r,p=r+h+"deg",v,g;return c&&(v=a.split("_")[1],v==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),v==="cw"&&h<0?h=(h+u*Kv)%u-~~(h/u)*u:v==="ccw"&&h>0&&(h=(h-u*Kv)%u-~~(h/u)*u)),e._pt=g=new Hi(e._pt,t,n,r,h,CT),g.e=p,g.u="deg",e._props.push(n),g},ix=function(e,t){for(var n in t)e[n]=t[n];return e},YT=function(e,t,n){var r=ix({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=n.style,c,d,h,p,v,g,_,M;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),u[vn]=t,c=Ku(n,1),wo(n,vn),n.setAttribute("transform",h)):(h=getComputedStyle(n)[vn],u[vn]=t,c=Ku(n,1),u[vn]=h);for(d in Is)h=r[d],p=c[d],h!==p&&a.indexOf(d)<0&&(_=fi(h),M=fi(p),v=_!==M?Ao(n,d,h,M):parseFloat(h),g=parseFloat(p),e._pt=new Hi(e._pt,c,d,v,g-v,Sm),e._pt.u=M||0,e._props.push(d));ix(c,r)};Vi("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",r="Bottom",a="Left",u=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(c){return e<2?o+c:"border"+c+o});gd[e>1?"border"+o:o]=function(c,d,h,p,v){var g,_;if(arguments.length<4)return g=u.map(function(M){return ws(c,M,h)}),_=g.join(" "),_.split(g[0]).length===5?g[0]:_;g=(p+"").split(" "),_={},u.forEach(function(M,E){return _[M]=g[E]=g[E]||g[(E-1)/2|0]}),c.init(d,_,v)}});var MS={name:"css",register:Em,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var u=this._props,c=e.style,d=n.vars.startAt,h,p,v,g,_,M,E,x,S,A,b,C,L,I,N,T,D;Gg||Em(),this.styles=this.styles||mS(e),T=this.styles.props,this.tween=n;for(E in t)if(E!=="autoRound"&&(p=t[E],!(tr[E]&&rS(E,t,n,r,e,a)))){if(_=typeof p,M=gd[E],_==="function"&&(p=p.call(n,r,e,a),_=typeof p),_==="string"&&~p.indexOf("random(")&&(p=Yu(p)),M)M(this,e,E,p,n)&&(N=1);else if(E.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(E)+"").trim(),p+="",Mo.lastIndex=0,Mo.test(h)||(x=fi(h),S=fi(p),S?x!==S&&(h=Ao(e,E,h,S)+S):x&&(p+=x)),this.add(c,"setProperty",h,p,r,a,0,0,E),u.push(E),T.push(E,0,c[E]);else if(_!=="undefined"){if(d&&E in d?(h=typeof d[E]=="function"?d[E].call(n,r,e,a):d[E],Kn(h)&&~h.indexOf("random(")&&(h=Yu(h)),fi(h+"")||h==="auto"||(h+=ar.units[E]||fi(ws(e,E))||""),(h+"").charAt(1)==="="&&(h=ws(e,E))):h=ws(e,E),g=parseFloat(h),A=_==="string"&&p.charAt(1)==="="&&p.substr(0,2),A&&(p=p.substr(2)),v=parseFloat(p),E in es&&(E==="autoAlpha"&&(g===1&&ws(e,"visibility")==="hidden"&&v&&(g=0),T.push("visibility",0,c.visibility),_o(this,c,"visibility",g?"inherit":"hidden",v?"inherit":"hidden",!v)),E!=="scale"&&E!=="transform"&&(E=es[E],~E.indexOf(",")&&(E=E.split(",")[0]))),b=E in Is,b){if(this.styles.save(E),D=p,_==="string"&&p.substring(0,6)==="var(--"){if(p=or(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var W=e.style.perspective;e.style.perspective=p,p=or(e,"perspective"),W?e.style.perspective=W:wo(e,"perspective")}v=parseFloat(p)}if(C||(L=e._gsap,L.renderTransform&&!t.parseTransform||Ku(e,t.parseTransform),I=t.smoothOrigin!==!1&&L.smooth,C=this._pt=new Hi(this._pt,c,vn,0,1,L.renderTransform,L,0,-1),C.dep=1),E==="scale")this._pt=new Hi(this._pt,L,"scaleY",L.scaleY,(A?ll(L.scaleY,A+v):v)-L.scaleY||0,Sm),this._pt.u=0,u.push("scaleY",E),E+="X";else if(E==="transformOrigin"){T.push(Gi,0,c[Gi]),p=VT(p),L.svg?Tm(e,p,0,I,0,this):(S=parseFloat(p.split(" ")[2])||0,S!==L.zOrigin&&_o(this,L,"zOrigin",L.zOrigin,S),_o(this,c,E,_d(h),_d(p)));continue}else if(E==="svgOrigin"){Tm(e,p,1,I,0,this);continue}else if(E in xS){XT(this,L,E,g,A?ll(g,A+p):p);continue}else if(E==="smoothOrigin"){_o(this,L,"smooth",L.smooth,p);continue}else if(E==="force3D"){L[E]=p;continue}else if(E==="transform"){YT(this,p,e);continue}}else E in c||(E=Sl(E)||E);if(b||(v||v===0)&&(g||g===0)&&!AT.test(p)&&E in c)x=(h+"").substr((g+"").length),v||(v=0),S=fi(p)||(E in ar.units?ar.units[E]:x),x!==S&&(g=Ao(e,E,h,S)),this._pt=new Hi(this._pt,b?L:c,E,g,(A?ll(g,A+v):v)-g,!b&&(S==="px"||E==="zIndex")&&t.autoRound!==!1?PT:Sm),this._pt.u=S||0,b&&D!==p?(this._pt.b=h,this._pt.e=D,this._pt.r=bT):x!==S&&S!=="%"&&(this._pt.b=h,this._pt.r=RT);else if(E in c)zT.call(this,e,E,h,A?A+p:p);else if(E in e)this.add(e,E,h||e[E],A?A+p:p,r,a);else if(E!=="parseTransform"){Ng(E,p);continue}b||(E in c?T.push(E,0,c[E]):typeof e[E]=="function"?T.push(E,2,e[E]()):T.push(E,1,h||e[E])),u.push(E)}}N&&cS(this)},render:function(e,t){if(t.tween._time||!Wg())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ws,aliases:es,getSetter:function(e,t,n){var r=es[t];return r&&r.indexOf(",")<0&&(t=r),t in Is&&t!==Gi&&(e._gsap.x||ws(e,"x"))?n&&$v===n?t==="scale"?IT:NT:($v=n||{})&&(t==="scale"?UT:FT):e.style&&!Pg(e.style[t])?DT:~t.indexOf("-")?LT:Vg(e,t)},core:{_removeProperty:wo,_getMatrix:Yg}};Xi.utils.checkPrefix=Sl;Xi.core.getStyleSaver=mS;(function(o,e,t,n){var r=Vi(o+","+e+","+t,function(a){Is[a]=1});Vi(e,function(a){ar.units[a]="deg",xS[a]=1}),es[r[13]]=o+","+e,Vi(n,function(a){var u=a.split(":");es[u[1]]=r[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ar.units[o]="px"});Xi.registerPlugin(MS);var Bi=Xi.registerPlugin(MS)||Xi;Bi.core.Tween;const jg="183",jT=0,rx=1,qT=2,Jf=1,$T=2,Tu=3,Co=0,Wi=1,As=2,Ps=0,fl=1,sx=2,ox=3,ax=4,KT=5,ea=100,ZT=101,QT=102,JT=103,ew=104,tw=200,nw=201,iw=202,rw=203,wm=204,Am=205,sw=206,ow=207,aw=208,lw=209,uw=210,cw=211,fw=212,dw=213,hw=214,Cm=0,Rm=1,bm=2,Ml=3,Pm=4,Dm=5,Lm=6,Nm=7,ES=0,pw=1,mw=2,rs=0,TS=1,wS=2,AS=3,CS=4,RS=5,bS=6,PS=7,DS=300,ha=301,El=302,Tp=303,wp=304,Dd=306,Im=1e3,Rs=1001,Um=1002,ei=1003,gw=1004,ff=1005,hi=1006,Ap=1007,ia=1008,Tr=1009,LS=1010,NS=1011,Zu=1012,qg=1013,ls=1014,ts=1015,Us=1016,$g=1017,Kg=1018,Qu=1020,IS=35902,US=35899,FS=1021,OS=1022,Hr=1023,Fs=1026,ra=1027,kS=1028,Zg=1029,Tl=1030,Qg=1031,Jg=1033,ed=33776,td=33777,nd=33778,id=33779,Fm=35840,Om=35841,km=35842,Bm=35843,zm=36196,Vm=37492,Hm=37496,Gm=37488,Wm=37489,Xm=37490,Ym=37491,jm=37808,qm=37809,$m=37810,Km=37811,Zm=37812,Qm=37813,Jm=37814,eg=37815,tg=37816,ng=37817,ig=37818,rg=37819,sg=37820,og=37821,ag=36492,lg=36494,ug=36495,cg=36283,fg=36284,dg=36285,hg=36286,_w=3200,vw=0,xw=1,po="",yr="srgb",wl="srgb-linear",vd="linear",Qt="srgb",Va=7680,lx=519,yw=512,Sw=513,Mw=514,e_=515,Ew=516,Tw=517,t_=518,ww=519,ux=35044,cx="300 es",ns=2e3,xd=2001;function Aw(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function yd(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Cw(){const o=yd("canvas");return o.style.display="block",o}const fx={};function dx(...o){const e="THREE."+o.shift();console.log(e,...o)}function BS(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=o[1];t&&t.isStackTrace?o[0]+=" "+t.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function Mt(...o){o=BS(o);const e="THREE."+o.shift();{const t=o[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...o)}}function Wt(...o){o=BS(o);const e="THREE."+o.shift();{const t=o[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...o)}}function Sd(...o){const e=o.join(" ");e in fx||(fx[e]=!0,Mt(...o))}function Rw(o,e,t){return new Promise(function(n,r){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const bw={[Cm]:Rm,[bm]:Lm,[Pm]:Nm,[Ml]:Dm,[Rm]:Cm,[Lm]:bm,[Nm]:Pm,[Dm]:Ml};class Rl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,u=r.length;a<u;a++)r[a].call(this,e);e.target=null}}}const ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cp=Math.PI/180,pg=180/Math.PI;function ic(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ai[o&255]+ai[o>>8&255]+ai[o>>16&255]+ai[o>>24&255]+"-"+ai[e&255]+ai[e>>8&255]+"-"+ai[e>>16&15|64]+ai[e>>24&255]+"-"+ai[t&63|128]+ai[t>>8&255]+"-"+ai[t>>16&255]+ai[t>>24&255]+ai[n&255]+ai[n>>8&255]+ai[n>>16&255]+ai[n>>24&255]).toLowerCase()}function Ot(o,e,t){return Math.max(e,Math.min(t,o))}function Pw(o,e){return(o%e+e)%e}function Rp(o,e,t){return(1-t)*o+t*e}function du(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Oi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class en{constructor(e=0,t=0){en.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ot(this.x,e.x,t.x),this.y=Ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ot(this.x,e,t),this.y=Ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*r+e.x,this.y=a*r+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bl{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,u,c){let d=n[r+0],h=n[r+1],p=n[r+2],v=n[r+3],g=a[u+0],_=a[u+1],M=a[u+2],E=a[u+3];if(v!==E||d!==g||h!==_||p!==M){let x=d*g+h*_+p*M+v*E;x<0&&(g=-g,_=-_,M=-M,E=-E,x=-x);let S=1-c;if(x<.9995){const A=Math.acos(x),b=Math.sin(A);S=Math.sin(S*A)/b,c=Math.sin(c*A)/b,d=d*S+g*c,h=h*S+_*c,p=p*S+M*c,v=v*S+E*c}else{d=d*S+g*c,h=h*S+_*c,p=p*S+M*c,v=v*S+E*c;const A=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=A,h*=A,p*=A,v*=A}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,r,a,u){const c=n[r],d=n[r+1],h=n[r+2],p=n[r+3],v=a[u],g=a[u+1],_=a[u+2],M=a[u+3];return e[t]=c*M+p*v+d*_-h*g,e[t+1]=d*M+p*g+h*v-c*_,e[t+2]=h*M+p*_+c*g-d*v,e[t+3]=p*M-c*v-d*g-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(n/2),p=c(r/2),v=c(a/2),g=d(n/2),_=d(r/2),M=d(a/2);switch(u){case"XYZ":this._x=g*p*v+h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v-g*_*M;break;case"YXZ":this._x=g*p*v+h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v+g*_*M;break;case"ZXY":this._x=g*p*v-h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v-g*_*M;break;case"ZYX":this._x=g*p*v-h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v+g*_*M;break;case"YZX":this._x=g*p*v+h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v-g*_*M;break;case"XZY":this._x=g*p*v-h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v+g*_*M;break;default:Mt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],v=t[10],g=n+c+v;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(p-d)*_,this._y=(a-h)*_,this._z=(u-r)*_}else if(n>c&&n>v){const _=2*Math.sqrt(1+n-c-v);this._w=(p-d)/_,this._x=.25*_,this._y=(r+u)/_,this._z=(a+h)/_}else if(c>v){const _=2*Math.sqrt(1+c-n-v);this._w=(a-h)/_,this._x=(r+u)/_,this._y=.25*_,this._z=(d+p)/_}else{const _=2*Math.sqrt(1+v-n-c);this._w=(u-r)/_,this._x=(a+h)/_,this._y=(d+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=n*p+u*c+r*h-a*d,this._y=r*p+u*d+a*c-n*h,this._z=a*p+u*h+n*d-r*c,this._w=u*p-n*c-r*d-a*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,u=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,a=-a,u=-u,c=-c);let d=1-t;if(c<.9995){const h=Math.acos(c),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,t=0,n=0){ue.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*r-c*n),p=2*(c*t-a*r),v=2*(a*n-u*t);return this.x=t+d*h+u*v-c*p,this.y=n+d*p+c*h-a*v,this.z=r+d*v+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ot(this.x,e.x,t.x),this.y=Ot(this.y,e.y,t.y),this.z=Ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ot(this.x,e,t),this.y=Ot(this.y,e,t),this.z=Ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=r*d-a*c,this.y=a*u-n*d,this.z=n*c-r*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bp.copy(this).projectOnVector(e),this.sub(bp)}reflect(e){return this.sub(bp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bp=new ue,hx=new bl;class At{constructor(e,t,n,r,a,u,c,d,h){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,d,h)}set(e,t,n,r,a,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=n,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[3],d=n[6],h=n[1],p=n[4],v=n[7],g=n[2],_=n[5],M=n[8],E=r[0],x=r[3],S=r[6],A=r[1],b=r[4],C=r[7],L=r[2],I=r[5],N=r[8];return a[0]=u*E+c*A+d*L,a[3]=u*x+c*b+d*I,a[6]=u*S+c*C+d*N,a[1]=h*E+p*A+v*L,a[4]=h*x+p*b+v*I,a[7]=h*S+p*C+v*N,a[2]=g*E+_*A+M*L,a[5]=g*x+_*b+M*I,a[8]=g*S+_*C+M*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-n*a*p+n*c*d+r*a*h-r*u*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],v=p*u-c*h,g=c*d-p*a,_=h*a-u*d,M=t*v+n*g+r*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=v*E,e[1]=(r*h-p*n)*E,e[2]=(c*n-r*u)*E,e[3]=g*E,e[4]=(p*t-r*d)*E,e[5]=(r*a-c*t)*E,e[6]=_*E,e[7]=(n*d-h*t)*E,e[8]=(u*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(n*d,n*h,-n*(d*u+h*c)+u+e,-r*h,r*d,-r*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Pp.makeScale(e,t)),this}rotate(e){return this.premultiply(Pp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pp=new At,px=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mx=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dw(){const o={enabled:!0,workingColorSpace:wl,spaces:{},convert:function(r,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===Qt&&(r.r=Ds(r.r),r.g=Ds(r.g),r.b=Ds(r.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Qt&&(r.r=dl(r.r),r.g=dl(r.g),r.b=dl(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===po?vd:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,u){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Sd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Sd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return o.define({[wl]:{primaries:e,whitePoint:n,transfer:vd,toXYZ:px,fromXYZ:mx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yr},outputColorSpaceConfig:{drawingBufferColorSpace:yr}},[yr]:{primaries:e,whitePoint:n,transfer:Qt,toXYZ:px,fromXYZ:mx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yr}}}),o}const Ht=Dw();function Ds(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function dl(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ha;class Lw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ha===void 0&&(Ha=yd("canvas")),Ha.width=e.width,Ha.height=e.height;const r=Ha.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ha}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yd("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let u=0;u<a.length;u++)a[u]=Ds(a[u]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ds(t[n]/255)*255):t[n]=Ds(t[n]);return{data:t,width:e.width,height:e.height}}else return Mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nw=0;class n_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=ic(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let u=0,c=r.length;u<c;u++)r[u].isDataTexture?a.push(Dp(r[u].image)):a.push(Dp(r[u]))}else a=Dp(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Dp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Lw.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Mt("Texture: Unable to serialize Texture."),{})}let Iw=0;const Lp=new ue;class Ci extends Rl{constructor(e=Ci.DEFAULT_IMAGE,t=Ci.DEFAULT_MAPPING,n=Rs,r=Rs,a=hi,u=ia,c=Hr,d=Tr,h=Ci.DEFAULT_ANISOTROPY,p=po){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=ic(),this.name="",this.source=new n_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new en(0,0),this.repeat=new en(1,1),this.center=new en(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lp).x}get height(){return this.source.getSize(Lp).y}get depth(){return this.source.getSize(Lp).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Mt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==DS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Im:e.x=e.x-Math.floor(e.x);break;case Rs:e.x=e.x<0?0:1;break;case Um:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Im:e.y=e.y-Math.floor(e.y);break;case Rs:e.y=e.y<0?0:1;break;case Um:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ci.DEFAULT_IMAGE=null;Ci.DEFAULT_MAPPING=DS;Ci.DEFAULT_ANISOTROPY=1;class Pn{constructor(e=0,t=0,n=0,r=1){Pn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*r+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*r+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*r+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*r+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,h=d[0],p=d[4],v=d[8],g=d[1],_=d[5],M=d[9],E=d[2],x=d[6],S=d[10];if(Math.abs(p-g)<.01&&Math.abs(v-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(v+E)<.1&&Math.abs(M+x)<.1&&Math.abs(h+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,C=(_+1)/2,L=(S+1)/2,I=(p+g)/4,N=(v+E)/4,T=(M+x)/4;return b>C&&b>L?b<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(b),r=I/n,a=N/n):C>L?C<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(C),n=I/r,a=T/r):L<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(L),n=N/a,r=T/a),this.set(n,r,a,t),this}let A=Math.sqrt((x-M)*(x-M)+(v-E)*(v-E)+(g-p)*(g-p));return Math.abs(A)<.001&&(A=1),this.x=(x-M)/A,this.y=(v-E)/A,this.z=(g-p)/A,this.w=Math.acos((h+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ot(this.x,e.x,t.x),this.y=Ot(this.y,e.y,t.y),this.z=Ot(this.z,e.z,t.z),this.w=Ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ot(this.x,e,t),this.y=Ot(this.y,e,t),this.z=Ot(this.z,e,t),this.w=Ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uw extends Rl{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pn(0,0,e,t),this.scissorTest=!1,this.viewport=new Pn(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new Ci(r),u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new n_(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends Uw{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zS extends Ci{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fw extends Ci{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(e,t,n,r,a,u,c,d,h,p,v,g,_,M,E,x){En.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,d,h,p,v,g,_,M,E,x)}set(e,t,n,r,a,u,c,d,h,p,v,g,_,M,E,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=n,S[12]=r,S[1]=a,S[5]=u,S[9]=c,S[13]=d,S[2]=h,S[6]=p,S[10]=v,S[14]=g,S[3]=_,S[7]=M,S[11]=E,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new En().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ga.setFromMatrixColumn(e,0).length(),a=1/Ga.setFromMatrixColumn(e,1).length(),u=1/Ga.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),d=Math.cos(r),h=Math.sin(r),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const g=u*p,_=u*v,M=c*p,E=c*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=_+M*h,t[5]=g-E*h,t[9]=-c*d,t[2]=E-g*h,t[6]=M+_*h,t[10]=u*d}else if(e.order==="YXZ"){const g=d*p,_=d*v,M=h*p,E=h*v;t[0]=g+E*c,t[4]=M*c-_,t[8]=u*h,t[1]=u*v,t[5]=u*p,t[9]=-c,t[2]=_*c-M,t[6]=E+g*c,t[10]=u*d}else if(e.order==="ZXY"){const g=d*p,_=d*v,M=h*p,E=h*v;t[0]=g-E*c,t[4]=-u*v,t[8]=M+_*c,t[1]=_+M*c,t[5]=u*p,t[9]=E-g*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const g=u*p,_=u*v,M=c*p,E=c*v;t[0]=d*p,t[4]=M*h-_,t[8]=g*h+E,t[1]=d*v,t[5]=E*h+g,t[9]=_*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,_=u*h,M=c*d,E=c*h;t[0]=d*p,t[4]=E-g*v,t[8]=M*v+_,t[1]=v,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=_*v+M,t[10]=g-E*v}else if(e.order==="XZY"){const g=u*d,_=u*h,M=c*d,E=c*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=g*v+E,t[5]=u*p,t[9]=_*v-M,t[2]=M*v-_,t[6]=c*p,t[10]=E*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ow,e,kw)}lookAt(e,t,n){const r=this.elements;return Zi.subVectors(e,t),Zi.lengthSq()===0&&(Zi.z=1),Zi.normalize(),oo.crossVectors(n,Zi),oo.lengthSq()===0&&(Math.abs(n.z)===1?Zi.x+=1e-4:Zi.z+=1e-4,Zi.normalize(),oo.crossVectors(n,Zi)),oo.normalize(),df.crossVectors(Zi,oo),r[0]=oo.x,r[4]=df.x,r[8]=Zi.x,r[1]=oo.y,r[5]=df.y,r[9]=Zi.y,r[2]=oo.z,r[6]=df.z,r[10]=Zi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[4],d=n[8],h=n[12],p=n[1],v=n[5],g=n[9],_=n[13],M=n[2],E=n[6],x=n[10],S=n[14],A=n[3],b=n[7],C=n[11],L=n[15],I=r[0],N=r[4],T=r[8],D=r[12],W=r[1],k=r[5],H=r[9],K=r[13],ee=r[2],Z=r[6],Q=r[10],V=r[14],q=r[3],te=r[7],U=r[11],O=r[15];return a[0]=u*I+c*W+d*ee+h*q,a[4]=u*N+c*k+d*Z+h*te,a[8]=u*T+c*H+d*Q+h*U,a[12]=u*D+c*K+d*V+h*O,a[1]=p*I+v*W+g*ee+_*q,a[5]=p*N+v*k+g*Z+_*te,a[9]=p*T+v*H+g*Q+_*U,a[13]=p*D+v*K+g*V+_*O,a[2]=M*I+E*W+x*ee+S*q,a[6]=M*N+E*k+x*Z+S*te,a[10]=M*T+E*H+x*Q+S*U,a[14]=M*D+E*K+x*V+S*O,a[3]=A*I+b*W+C*ee+L*q,a[7]=A*N+b*k+C*Z+L*te,a[11]=A*T+b*H+C*Q+L*U,a[15]=A*D+b*K+C*V+L*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],v=e[6],g=e[10],_=e[14],M=e[3],E=e[7],x=e[11],S=e[15],A=d*_-h*g,b=c*_-h*v,C=c*g-d*v,L=u*_-h*p,I=u*g-d*p,N=u*v-c*p;return t*(E*A-x*b+S*C)-n*(M*A-x*L+S*I)+r*(M*b-E*L+S*N)-a*(M*C-E*I+x*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],v=e[9],g=e[10],_=e[11],M=e[12],E=e[13],x=e[14],S=e[15],A=t*c-n*u,b=t*d-r*u,C=t*h-a*u,L=n*d-r*c,I=n*h-a*c,N=r*h-a*d,T=p*E-v*M,D=p*x-g*M,W=p*S-_*M,k=v*x-g*E,H=v*S-_*E,K=g*S-_*x,ee=A*K-b*H+C*k+L*W-I*D+N*T;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/ee;return e[0]=(c*K-d*H+h*k)*Z,e[1]=(r*H-n*K-a*k)*Z,e[2]=(E*N-x*I+S*L)*Z,e[3]=(g*I-v*N-_*L)*Z,e[4]=(d*W-u*K-h*D)*Z,e[5]=(t*K-r*W+a*D)*Z,e[6]=(x*C-M*N-S*b)*Z,e[7]=(p*N-g*C+_*b)*Z,e[8]=(u*H-c*W+h*T)*Z,e[9]=(n*W-t*H-a*T)*Z,e[10]=(M*I-E*C+S*A)*Z,e[11]=(v*C-p*I-_*A)*Z,e[12]=(c*D-u*k-d*T)*Z,e[13]=(t*k-n*D+r*T)*Z,e[14]=(E*b-M*L-x*A)*Z,e[15]=(p*L-v*b+g*A)*Z,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,u=e.x,c=e.y,d=e.z,h=a*u,p=a*c;return this.set(h*u+n,h*c-r*d,h*d+r*c,0,h*c+r*d,p*c+n,p*d-r*u,0,h*d-r*c,p*d+r*u,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,u){return this.set(1,n,a,0,e,1,u,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,p=u+u,v=c+c,g=a*h,_=a*p,M=a*v,E=u*p,x=u*v,S=c*v,A=d*h,b=d*p,C=d*v,L=n.x,I=n.y,N=n.z;return r[0]=(1-(E+S))*L,r[1]=(_+C)*L,r[2]=(M-b)*L,r[3]=0,r[4]=(_-C)*I,r[5]=(1-(g+S))*I,r[6]=(x+A)*I,r[7]=0,r[8]=(M+b)*N,r[9]=(x-A)*N,r[10]=(1-(g+E))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinant();if(a===0)return n.set(1,1,1),t.identity(),this;let u=Ga.set(r[0],r[1],r[2]).length();const c=Ga.set(r[4],r[5],r[6]).length(),d=Ga.set(r[8],r[9],r[10]).length();a<0&&(u=-u),Or.copy(this);const h=1/u,p=1/c,v=1/d;return Or.elements[0]*=h,Or.elements[1]*=h,Or.elements[2]*=h,Or.elements[4]*=p,Or.elements[5]*=p,Or.elements[6]*=p,Or.elements[8]*=v,Or.elements[9]*=v,Or.elements[10]*=v,t.setFromRotationMatrix(Or),n.x=u,n.y=c,n.z=d,this}makePerspective(e,t,n,r,a,u,c=ns,d=!1){const h=this.elements,p=2*a/(t-e),v=2*a/(n-r),g=(t+e)/(t-e),_=(n+r)/(n-r);let M,E;if(d)M=a/(u-a),E=u*a/(u-a);else if(c===ns)M=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===xd)M=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,u,c=ns,d=!1){const h=this.elements,p=2/(t-e),v=2/(n-r),g=-(t+e)/(t-e),_=-(n+r)/(n-r);let M,E;if(d)M=1/(u-a),E=u/(u-a);else if(c===ns)M=-2/(u-a),E=-(u+a)/(u-a);else if(c===xd)M=-1/(u-a),E=-a/(u-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ga=new ue,Or=new En,Ow=new ue(0,0,0),kw=new ue(1,1,1),oo=new ue,df=new ue,Zi=new ue,gx=new En,_x=new bl;class Os{constructor(e=0,t=0,n=0,r=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],u=r[4],c=r[8],d=r[1],h=r[5],p=r[9],v=r[2],g=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Ot(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:Mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _x.setFromEuler(this),this.setFromQuaternion(_x,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class VS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bw=0;const vx=new ue,Wa=new bl,xs=new En,hf=new ue,hu=new ue,zw=new ue,Vw=new bl,xx=new ue(1,0,0),yx=new ue(0,1,0),Sx=new ue(0,0,1),Mx={type:"added"},Hw={type:"removed"},Xa={type:"childadded",child:null},Np={type:"childremoved",child:null};class Ri extends Rl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bw++}),this.uuid=ic(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ri.DEFAULT_UP.clone();const e=new ue,t=new Os,n=new bl,r=new ue(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new En},normalMatrix:{value:new At}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=Ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new VS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.multiply(Wa),this}rotateOnWorldAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.premultiply(Wa),this}rotateX(e){return this.rotateOnAxis(xx,e)}rotateY(e){return this.rotateOnAxis(yx,e)}rotateZ(e){return this.rotateOnAxis(Sx,e)}translateOnAxis(e,t){return vx.copy(e).applyQuaternion(this.quaternion),this.position.add(vx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xx,e)}translateY(e){return this.translateOnAxis(yx,e)}translateZ(e){return this.translateOnAxis(Sx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hf.copy(e):hf.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),hu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xs.lookAt(hu,hf,this.up):xs.lookAt(hf,hu,this.up),this.quaternion.setFromRotationMatrix(xs),r&&(xs.extractRotation(r.matrixWorld),Wa.setFromRotationMatrix(xs),this.quaternion.premultiply(Wa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mx),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hw),Np.child=e,this.dispatchEvent(Np),Np.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xs.multiply(e.parent.matrixWorld)),e.applyMatrix4(xs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mx),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hu,e,zw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hu,Vw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];r.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),v=u(e.shapes),g=u(e.skeletons),_=u(e.animations),M=u(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),v.length>0&&(n.shapes=v),g.length>0&&(n.skeletons=g),_.length>0&&(n.animations=_),M.length>0&&(n.nodes=M)}return n.object=r,n;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ri.DEFAULT_UP=new ue(0,1,0);Ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pf extends Ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gw={type:"move"};class Ip{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,n),S=this._getHandJoint(h,E);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=p.position.distanceTo(v.position),_=.02,M=.005;h.inputState.pinching&&g>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Gw)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pf;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const HS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ao={h:0,s:0,l:0},mf={h:0,s:0,l:0};function Up(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class $t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ht.workingColorSpace){if(e=Pw(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Up(u,a,e+1/3),this.g=Up(u,a,e),this.b=Up(u,a,e-1/3)}return Ht.colorSpaceToWorking(this,r),this}setStyle(e,t=yr){function n(a){a!==void 0&&parseFloat(a)<1&&Mt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=r[1],c=r[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Mt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);Mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yr){const n=HS[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=dl(e.r),this.g=dl(e.g),this.b=dl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yr){return Ht.workingToColorSpace(li.copy(this),e),Math.round(Ot(li.r*255,0,255))*65536+Math.round(Ot(li.g*255,0,255))*256+Math.round(Ot(li.b*255,0,255))}getHexString(e=yr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.workingToColorSpace(li.copy(this),t);const n=li.r,r=li.g,a=li.b,u=Math.max(n,r,a),c=Math.min(n,r,a);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const v=u-c;switch(h=p<=.5?v/(u+c):v/(2-u-c),u){case n:d=(r-a)/v+(r<a?6:0);break;case r:d=(a-n)/v+2;break;case a:d=(n-r)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Ht.workingColorSpace){return Ht.workingToColorSpace(li.copy(this),t),e.r=li.r,e.g=li.g,e.b=li.b,e}getStyle(e=yr){Ht.workingToColorSpace(li.copy(this),e);const t=li.r,n=li.g,r=li.b;return e!==yr?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ao),this.setHSL(ao.h+e,ao.s+t,ao.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ao),e.getHSL(mf);const n=Rp(ao.h,mf.h,t),r=Rp(ao.s,mf.s,t),a=Rp(ao.l,mf.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const li=new $t;$t.NAMES=HS;class Ww extends Ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Os,this.environmentIntensity=1,this.environmentRotation=new Os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const kr=new ue,ys=new ue,Fp=new ue,Ss=new ue,Ya=new ue,ja=new ue,Ex=new ue,Op=new ue,kp=new ue,Bp=new ue,zp=new Pn,Vp=new Pn,Hp=new Pn;class Vr{constructor(e=new ue,t=new ue,n=new ue){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kr.subVectors(e,t),r.cross(kr);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){kr.subVectors(r,t),ys.subVectors(n,t),Fp.subVectors(e,t);const u=kr.dot(kr),c=kr.dot(ys),d=kr.dot(Fp),h=ys.dot(ys),p=ys.dot(Fp),v=u*h-c*c;if(v===0)return a.set(0,0,0),null;const g=1/v,_=(h*d-c*p)*g,M=(u*p-c*d)*g;return a.set(1-_-M,M,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ss)===null?!1:Ss.x>=0&&Ss.y>=0&&Ss.x+Ss.y<=1}static getInterpolation(e,t,n,r,a,u,c,d){return this.getBarycoord(e,t,n,r,Ss)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Ss.x),d.addScaledVector(u,Ss.y),d.addScaledVector(c,Ss.z),d)}static getInterpolatedAttribute(e,t,n,r,a,u){return zp.setScalar(0),Vp.setScalar(0),Hp.setScalar(0),zp.fromBufferAttribute(e,t),Vp.fromBufferAttribute(e,n),Hp.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(zp,a.x),u.addScaledVector(Vp,a.y),u.addScaledVector(Hp,a.z),u}static isFrontFacing(e,t,n,r){return kr.subVectors(n,t),ys.subVectors(e,t),kr.cross(ys).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kr.subVectors(this.c,this.b),ys.subVectors(this.a,this.b),kr.cross(ys).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Vr.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Vr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let u,c;Ya.subVectors(r,n),ja.subVectors(a,n),Op.subVectors(e,n);const d=Ya.dot(Op),h=ja.dot(Op);if(d<=0&&h<=0)return t.copy(n);kp.subVectors(e,r);const p=Ya.dot(kp),v=ja.dot(kp);if(p>=0&&v<=p)return t.copy(r);const g=d*v-p*h;if(g<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(n).addScaledVector(Ya,u);Bp.subVectors(e,a);const _=Ya.dot(Bp),M=ja.dot(Bp);if(M>=0&&_<=M)return t.copy(a);const E=_*h-d*M;if(E<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(n).addScaledVector(ja,c);const x=p*M-_*v;if(x<=0&&v-p>=0&&_-M>=0)return Ex.subVectors(a,r),c=(v-p)/(v-p+(_-M)),t.copy(r).addScaledVector(Ex,c);const S=1/(x+E+g);return u=E*S,c=g*S,t.copy(n).addScaledVector(Ya,u).addScaledVector(ja,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rc{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Br.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Br.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Br.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Br):Br.fromBufferAttribute(a,u),Br.applyMatrix4(e.matrixWorld),this.expandByPoint(Br);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gf.copy(n.boundingBox)),gf.applyMatrix4(e.matrixWorld),this.union(gf)}const r=e.children;for(let a=0,u=r.length;a<u;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Br),Br.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pu),_f.subVectors(this.max,pu),qa.subVectors(e.a,pu),$a.subVectors(e.b,pu),Ka.subVectors(e.c,pu),lo.subVectors($a,qa),uo.subVectors(Ka,$a),Wo.subVectors(qa,Ka);let t=[0,-lo.z,lo.y,0,-uo.z,uo.y,0,-Wo.z,Wo.y,lo.z,0,-lo.x,uo.z,0,-uo.x,Wo.z,0,-Wo.x,-lo.y,lo.x,0,-uo.y,uo.x,0,-Wo.y,Wo.x,0];return!Gp(t,qa,$a,Ka,_f)||(t=[1,0,0,0,1,0,0,0,1],!Gp(t,qa,$a,Ka,_f))?!1:(vf.crossVectors(lo,uo),t=[vf.x,vf.y,vf.z],Gp(t,qa,$a,Ka,_f))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Br).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Br).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ms),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ms=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Br=new ue,gf=new rc,qa=new ue,$a=new ue,Ka=new ue,lo=new ue,uo=new ue,Wo=new ue,pu=new ue,_f=new ue,vf=new ue,Xo=new ue;function Gp(o,e,t,n,r){for(let a=0,u=o.length-3;a<=u;a+=3){Xo.fromArray(o,a);const c=r.x*Math.abs(Xo.x)+r.y*Math.abs(Xo.y)+r.z*Math.abs(Xo.z),d=e.dot(Xo),h=t.dot(Xo),p=n.dot(Xo);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const Nn=new ue,xf=new en;let Xw=0;class Cr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ux,this.updateRanges=[],this.gpuType=ts,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xf.fromBufferAttribute(this,t),xf.applyMatrix3(e),this.setXY(t,xf.x,xf.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix3(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=du(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Oi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=du(t,this.array)),t}setX(e,t){return this.normalized&&(t=Oi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=du(t,this.array)),t}setY(e,t){return this.normalized&&(t=Oi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=du(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Oi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=du(t,this.array)),t}setW(e,t){return this.normalized&&(t=Oi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Oi(t,this.array),n=Oi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Oi(t,this.array),n=Oi(n,this.array),r=Oi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Oi(t,this.array),n=Oi(n,this.array),r=Oi(r,this.array),a=Oi(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ux&&(e.usage=this.usage),e}}class GS extends Cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class WS extends Cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gr extends Cr{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Yw=new rc,mu=new ue,Wp=new ue;class sc{constructor(e=new ue,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yw.setFromPoints(e).getCenter(n);let r=0;for(let a=0,u=e.length;a<u;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mu.subVectors(e,this.center);const t=mu.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(mu,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mu.copy(e.center).add(Wp)),this.expandByPoint(mu.copy(e.center).sub(Wp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jw=0;const vr=new En,Xp=new Ri,Za=new ue,Qi=new rc,gu=new rc,jn=new ue;class cr extends Rl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jw++}),this.uuid=ic(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Aw(e)?WS:GS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new At().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vr.makeRotationFromQuaternion(e),this.applyMatrix4(vr),this}rotateX(e){return vr.makeRotationX(e),this.applyMatrix4(vr),this}rotateY(e){return vr.makeRotationY(e),this.applyMatrix4(vr),this}rotateZ(e){return vr.makeRotationZ(e),this.applyMatrix4(vr),this}translate(e,t,n){return vr.makeTranslation(e,t,n),this.applyMatrix4(vr),this}scale(e,t,n){return vr.makeScale(e,t,n),this.applyMatrix4(vr),this}lookAt(e){return Xp.lookAt(e),Xp.updateMatrix(),this.applyMatrix4(Xp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Za).negate(),this.translate(Za.x,Za.y,Za.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Gr(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(jn.addVectors(this.boundingBox.min,Qi.min),this.boundingBox.expandByPoint(jn),jn.addVectors(this.boundingBox.max,Qi.max),this.boundingBox.expandByPoint(jn)):(this.boundingBox.expandByPoint(Qi.min),this.boundingBox.expandByPoint(Qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const n=this.boundingSphere.center;if(Qi.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];gu.setFromBufferAttribute(c),this.morphTargetsRelative?(jn.addVectors(Qi.min,gu.min),Qi.expandByPoint(jn),jn.addVectors(Qi.max,gu.max),Qi.expandByPoint(jn)):(Qi.expandByPoint(gu.min),Qi.expandByPoint(gu.max))}Qi.getCenter(n);let r=0;for(let a=0,u=e.count;a<u;a++)jn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(jn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)jn.fromBufferAttribute(c,h),d&&(Za.fromBufferAttribute(e,h),jn.add(Za)),r=Math.max(r,n.distanceToSquared(jn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cr(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let T=0;T<n.count;T++)c[T]=new ue,d[T]=new ue;const h=new ue,p=new ue,v=new ue,g=new en,_=new en,M=new en,E=new ue,x=new ue;function S(T,D,W){h.fromBufferAttribute(n,T),p.fromBufferAttribute(n,D),v.fromBufferAttribute(n,W),g.fromBufferAttribute(a,T),_.fromBufferAttribute(a,D),M.fromBufferAttribute(a,W),p.sub(h),v.sub(h),_.sub(g),M.sub(g);const k=1/(_.x*M.y-M.x*_.y);isFinite(k)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(v,-_.y).multiplyScalar(k),x.copy(v).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(k),c[T].add(E),c[D].add(E),c[W].add(E),d[T].add(x),d[D].add(x),d[W].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let T=0,D=A.length;T<D;++T){const W=A[T],k=W.start,H=W.count;for(let K=k,ee=k+H;K<ee;K+=3)S(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const b=new ue,C=new ue,L=new ue,I=new ue;function N(T){L.fromBufferAttribute(r,T),I.copy(L);const D=c[T];b.copy(D),b.sub(L.multiplyScalar(L.dot(D))).normalize(),C.crossVectors(I,D);const k=C.dot(d[T])<0?-1:1;u.setXYZW(T,b.x,b.y,b.z,k)}for(let T=0,D=A.length;T<D;++T){const W=A[T],k=W.start,H=W.count;for(let K=k,ee=k+H;K<ee;K+=3)N(e.getX(K+0)),N(e.getX(K+1)),N(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,_=n.count;g<_;g++)n.setXYZ(g,0,0,0);const r=new ue,a=new ue,u=new ue,c=new ue,d=new ue,h=new ue,p=new ue,v=new ue;if(e)for(let g=0,_=e.count;g<_;g+=3){const M=e.getX(g+0),E=e.getX(g+1),x=e.getX(g+2);r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),u.fromBufferAttribute(t,x),p.subVectors(u,a),v.subVectors(r,a),p.cross(v),c.fromBufferAttribute(n,M),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,x),c.add(p),d.add(p),h.add(p),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(E,d.x,d.y,d.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,_=t.count;g<_;g+=3)r.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,a),v.subVectors(r,a),p.cross(v),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jn.fromBufferAttribute(e,t),jn.normalize(),e.setXYZ(t,jn.x,jn.y,jn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,v=c.normalized,g=new h.constructor(d.length*p);let _=0,M=0;for(let E=0,x=d.length;E<x;E++){c.isInterleavedBufferAttribute?_=d[E]*c.data.stride+c.offset:_=d[E]*p;for(let S=0;S<p;S++)g[M++]=h[_++]}return new Cr(g,p,v)}if(this.index===null)return Mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cr,n=this.index.array,r=this.attributes;for(const c in r){const d=r[c],h=e(d,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,v=h.length;p<v;p++){const g=h[p],_=e(g,n);d.push(_)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,g=h.length;v<g;v++){const _=h[v];p.push(_.toJSON(e.data))}p.length>0&&(r[d]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],v=a[h];for(let g=0,_=v.length;g<_;g++)p.push(v[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let qw=0;class Pl extends Rl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=ic(),this.name="",this.type="Material",this.blending=fl,this.side=Co,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wm,this.blendDst=Am,this.blendEquation=ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Mt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fl&&(n.blending=this.blending),this.side!==Co&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wm&&(n.blendSrc=this.blendSrc),this.blendDst!==Am&&(n.blendDst=this.blendDst),this.blendEquation!==ea&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ml&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lx&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Va&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Va&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Va&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=r(e.textures),u=r(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Es=new ue,Yp=new ue,yf=new ue,co=new ue,jp=new ue,Sf=new ue,qp=new ue;class i_{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Es.copy(this.origin).addScaledVector(this.direction,t),Es.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yp.copy(e).add(t).multiplyScalar(.5),yf.copy(t).sub(e).normalize(),co.copy(this.origin).sub(Yp);const a=e.distanceTo(t)*.5,u=-this.direction.dot(yf),c=co.dot(this.direction),d=-co.dot(yf),h=co.lengthSq(),p=Math.abs(1-u*u);let v,g,_,M;if(p>0)if(v=u*d-c,g=u*c-d,M=a*p,v>=0)if(g>=-M)if(g<=M){const E=1/p;v*=E,g*=E,_=v*(v+u*g+2*c)+g*(u*v+g+2*d)+h}else g=a,v=Math.max(0,-(u*g+c)),_=-v*v+g*(g+2*d)+h;else g=-a,v=Math.max(0,-(u*g+c)),_=-v*v+g*(g+2*d)+h;else g<=-M?(v=Math.max(0,-(-u*a+c)),g=v>0?-a:Math.min(Math.max(-a,-d),a),_=-v*v+g*(g+2*d)+h):g<=M?(v=0,g=Math.min(Math.max(-a,-d),a),_=g*(g+2*d)+h):(v=Math.max(0,-(u*a+c)),g=v>0?a:Math.min(Math.max(-a,-d),a),_=-v*v+g*(g+2*d)+h);else g=u>0?-a:a,v=Math.max(0,-(u*g+c)),_=-v*v+g*(g+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(Yp).addScaledVector(yf,g),_}intersectSphere(e,t){Es.subVectors(e.center,this.origin);const n=Es.dot(this.direction),r=Es.dot(Es)-n*n,a=e.radius*e.radius;if(r>a)return null;const u=Math.sqrt(a-r),c=n-u,d=n+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,r=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,r=(e.min.x-g.x)*h),p>=0?(a=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),n>u||a>r||((a>n||isNaN(n))&&(n=a),(u<r||isNaN(r))&&(r=u),v>=0?(c=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(c=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),n>d||c>r)||((c>n||n!==n)&&(n=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Es)!==null}intersectTriangle(e,t,n,r,a){jp.subVectors(t,e),Sf.subVectors(n,e),qp.crossVectors(jp,Sf);let u=this.direction.dot(qp),c;if(u>0){if(r)return null;c=1}else if(u<0)c=-1,u=-u;else return null;co.subVectors(this.origin,e);const d=c*this.direction.dot(Sf.crossVectors(co,Sf));if(d<0)return null;const h=c*this.direction.dot(jp.cross(co));if(h<0||d+h>u)return null;const p=-c*co.dot(qp);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class XS extends Pl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Os,this.combine=ES,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tx=new En,Yo=new i_,Mf=new sc,wx=new ue,Ef=new ue,Tf=new ue,wf=new ue,$p=new ue,Af=new ue,Ax=new ue,Cf=new ue;class ks extends Ri{constructor(e=new cr,t=new XS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Af.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],v=a[d];p!==0&&($p.fromBufferAttribute(v,e),u?Af.addScaledVector($p,p):Af.addScaledVector($p.sub(t),p))}t.add(Af)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mf.copy(n.boundingSphere),Mf.applyMatrix4(a),Yo.copy(e.ray).recast(e.near),!(Mf.containsPoint(Yo.origin)===!1&&(Yo.intersectSphere(Mf,wx)===null||Yo.origin.distanceToSquared(wx)>(e.far-e.near)**2))&&(Tx.copy(a).invert(),Yo.copy(e.ray).applyMatrix4(Tx),!(n.boundingBox!==null&&Yo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yo)))}_computeIntersections(e,t,n){let r;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,g=a.groups,_=a.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,E=g.length;M<E;M++){const x=g[M],S=u[x.materialIndex],A=Math.max(x.start,_.start),b=Math.min(c.count,Math.min(x.start+x.count,_.start+_.count));for(let C=A,L=b;C<L;C+=3){const I=c.getX(C),N=c.getX(C+1),T=c.getX(C+2);r=Rf(this,S,e,n,h,p,v,I,N,T),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const M=Math.max(0,_.start),E=Math.min(c.count,_.start+_.count);for(let x=M,S=E;x<S;x+=3){const A=c.getX(x),b=c.getX(x+1),C=c.getX(x+2);r=Rf(this,u,e,n,h,p,v,A,b,C),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=g.length;M<E;M++){const x=g[M],S=u[x.materialIndex],A=Math.max(x.start,_.start),b=Math.min(d.count,Math.min(x.start+x.count,_.start+_.count));for(let C=A,L=b;C<L;C+=3){const I=C,N=C+1,T=C+2;r=Rf(this,S,e,n,h,p,v,I,N,T),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const M=Math.max(0,_.start),E=Math.min(d.count,_.start+_.count);for(let x=M,S=E;x<S;x+=3){const A=x,b=x+1,C=x+2;r=Rf(this,u,e,n,h,p,v,A,b,C),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function $w(o,e,t,n,r,a,u,c){let d;if(e.side===Wi?d=n.intersectTriangle(u,a,r,!0,c):d=n.intersectTriangle(r,a,u,e.side===Co,c),d===null)return null;Cf.copy(c),Cf.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Cf);return h<t.near||h>t.far?null:{distance:h,point:Cf.clone(),object:o}}function Rf(o,e,t,n,r,a,u,c,d,h){o.getVertexPosition(c,Ef),o.getVertexPosition(d,Tf),o.getVertexPosition(h,wf);const p=$w(o,e,t,n,Ef,Tf,wf,Ax);if(p){const v=new ue;Vr.getBarycoord(Ax,Ef,Tf,wf,v),r&&(p.uv=Vr.getInterpolatedAttribute(r,c,d,h,v,new en)),a&&(p.uv1=Vr.getInterpolatedAttribute(a,c,d,h,v,new en)),u&&(p.normal=Vr.getInterpolatedAttribute(u,c,d,h,v,new ue),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new ue,materialIndex:0};Vr.getNormal(Ef,Tf,wf,g.normal),p.face=g,p.barycoord=v}return p}class Kw extends Ci{constructor(e=null,t=1,n=1,r,a,u,c,d,h=ei,p=ei,v,g){super(null,u,c,d,h,p,r,a,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kp=new ue,Zw=new ue,Qw=new At;class Zo{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Kp.subVectors(n,t).cross(Zw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Kp),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qw.getNormalMatrix(e),r=this.coplanarPoint(Kp).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jo=new sc,Jw=new en(.5,.5),bf=new ue;class YS{constructor(e=new Zo,t=new Zo,n=new Zo,r=new Zo,a=new Zo,u=new Zo){this.planes=[e,t,n,r,a,u]}set(e,t,n,r,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ns,n=!1){const r=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],h=a[3],p=a[4],v=a[5],g=a[6],_=a[7],M=a[8],E=a[9],x=a[10],S=a[11],A=a[12],b=a[13],C=a[14],L=a[15];if(r[0].setComponents(h-u,_-p,S-M,L-A).normalize(),r[1].setComponents(h+u,_+p,S+M,L+A).normalize(),r[2].setComponents(h+c,_+v,S+E,L+b).normalize(),r[3].setComponents(h-c,_-v,S-E,L-b).normalize(),n)r[4].setComponents(d,g,x,C).normalize(),r[5].setComponents(h-d,_-g,S-x,L-C).normalize();else if(r[4].setComponents(h-d,_-g,S-x,L-C).normalize(),t===ns)r[5].setComponents(h+d,_+g,S+x,L+C).normalize();else if(t===xd)r[5].setComponents(d,g,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jo)}intersectsSprite(e){jo.center.set(0,0,0);const t=Jw.distanceTo(e.center);return jo.radius=.7071067811865476+t,jo.applyMatrix4(e.matrixWorld),this.intersectsSphere(jo)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(bf.x=r.normal.x>0?e.max.x:e.min.x,bf.y=r.normal.y>0?e.max.y:e.min.y,bf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jS extends Pl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Md=new ue,Ed=new ue,Cx=new En,_u=new i_,Pf=new sc,Zp=new ue,Rx=new ue;class eA extends Ri{constructor(e=new cr,t=new jS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Md.fromBufferAttribute(t,r-1),Ed.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Md.distanceTo(Ed);e.setAttribute("lineDistance",new Gr(n,1))}else Mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pf.copy(n.boundingSphere),Pf.applyMatrix4(r),Pf.radius+=a,e.ray.intersectsSphere(Pf)===!1)return;Cx.copy(r).invert(),_u.copy(e.ray).applyMatrix4(Cx);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const _=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let E=_,x=M-1;E<x;E+=h){const S=p.getX(E),A=p.getX(E+1),b=Df(this,e,_u,d,S,A,E);b&&t.push(b)}if(this.isLineLoop){const E=p.getX(M-1),x=p.getX(_),S=Df(this,e,_u,d,E,x,M-1);S&&t.push(S)}}else{const _=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let E=_,x=M-1;E<x;E+=h){const S=Df(this,e,_u,d,E,E+1,E);S&&t.push(S)}if(this.isLineLoop){const E=Df(this,e,_u,d,M-1,_,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Df(o,e,t,n,r,a,u){const c=o.geometry.attributes.position;if(Md.fromBufferAttribute(c,r),Ed.fromBufferAttribute(c,a),t.distanceSqToSegment(Md,Ed,Zp,Rx)>n)return;Zp.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(Zp);if(!(h<e.near||h>e.far))return{distance:h,point:Rx.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const bx=new ue,Px=new ue;class tA extends eA{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)bx.fromBufferAttribute(t,r),Px.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+bx.distanceTo(Px);e.setAttribute("lineDistance",new Gr(n,1))}else Mt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qS extends Pl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dx=new En,mg=new i_,Lf=new sc,Nf=new ue;class nA extends Ri{constructor(e=new cr,t=new qS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lf.copy(n.boundingSphere),Lf.applyMatrix4(r),Lf.radius+=a,e.ray.intersectsSphere(Lf)===!1)return;Dx.copy(r).invert(),mg.copy(e.ray).applyMatrix4(Dx);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=n.index,v=n.attributes.position;if(h!==null){const g=Math.max(0,u.start),_=Math.min(h.count,u.start+u.count);for(let M=g,E=_;M<E;M++){const x=h.getX(M);Nf.fromBufferAttribute(v,x),Lx(Nf,x,d,r,e,t,this)}}else{const g=Math.max(0,u.start),_=Math.min(v.count,u.start+u.count);for(let M=g,E=_;M<E;M++)Nf.fromBufferAttribute(v,M),Lx(Nf,M,d,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Lx(o,e,t,n,r,a,u){const c=mg.distanceSqToPoint(o);if(c<t){const d=new ue;mg.closestPointToPoint(o,d),d.applyMatrix4(n);const h=r.ray.origin.distanceTo(d);if(h<r.near||h>r.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class $S extends Ci{constructor(e=[],t=ha,n,r,a,u,c,d,h,p){super(e,t,n,r,a,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ju extends Ci{constructor(e,t,n=ls,r,a,u,c=ei,d=ei,h,p=Fs,v=1){if(p!==Fs&&p!==ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,r,a,u,c,d,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new n_(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class iA extends Ju{constructor(e,t=ls,n=ha,r,a,u=ei,c=ei,d,h=Fs){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,n,r,a,u,c,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class KS extends Ci{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oc extends cr{constructor(e=1,t=1,n=1,r=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:u};const c=this;r=Math.floor(r),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],p=[],v=[];let g=0,_=0;M("z","y","x",-1,-1,n,t,e,u,a,0),M("z","y","x",1,-1,n,t,-e,u,a,1),M("x","z","y",1,1,e,n,t,r,u,2),M("x","z","y",1,-1,e,n,-t,r,u,3),M("x","y","z",1,-1,e,t,n,r,a,4),M("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new Gr(h,3)),this.setAttribute("normal",new Gr(p,3)),this.setAttribute("uv",new Gr(v,2));function M(E,x,S,A,b,C,L,I,N,T,D){const W=C/N,k=L/T,H=C/2,K=L/2,ee=I/2,Z=N+1,Q=T+1;let V=0,q=0;const te=new ue;for(let U=0;U<Q;U++){const O=U*k-K;for(let J=0;J<Z;J++){const Ce=J*W-H;te[E]=Ce*A,te[x]=O*b,te[S]=ee,h.push(te.x,te.y,te.z),te[E]=0,te[x]=0,te[S]=I>0?1:-1,p.push(te.x,te.y,te.z),v.push(J/N),v.push(1-U/T),V+=1}}for(let U=0;U<T;U++)for(let O=0;O<N;O++){const J=g+O+Z*U,Ce=g+O+Z*(U+1),be=g+(O+1)+Z*(U+1),ke=g+(O+1)+Z*U;d.push(J,Ce,ke),d.push(Ce,be,ke),q+=6}c.addGroup(_,q,D),_+=q,g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ld extends cr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,u=t/2,c=Math.floor(n),d=Math.floor(r),h=c+1,p=d+1,v=e/c,g=t/d,_=[],M=[],E=[],x=[];for(let S=0;S<p;S++){const A=S*g-u;for(let b=0;b<h;b++){const C=b*v-a;M.push(C,-A,0),E.push(0,0,1),x.push(b/c),x.push(1-S/d)}}for(let S=0;S<d;S++)for(let A=0;A<c;A++){const b=A+h*S,C=A+h*(S+1),L=A+1+h*(S+1),I=A+1+h*S;_.push(b,C,I),_.push(C,L,I)}this.setIndex(_),this.setAttribute("position",new Gr(M,3)),this.setAttribute("normal",new Gr(E,3)),this.setAttribute("uv",new Gr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ld(e.width,e.height,e.widthSegments,e.heightSegments)}}function Al(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const r=o[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Si(o){const e={};for(let t=0;t<o.length;t++){const n=Al(o[t]);for(const r in n)e[r]=n[r]}return e}function rA(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function ZS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const sA={clone:Al,merge:Si};var oA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class us extends Pl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oA,this.fragmentShader=aA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Al(e.uniforms),this.uniformsGroups=rA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?t.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[r]={type:"m4",value:u.toArray()}:t.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lA extends us{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uA extends Pl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_w,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cA extends Pl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const If=new ue,Uf=new bl,qr=new ue;class QS extends Ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=ns,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(If,Uf,qr),qr.x===1&&qr.y===1&&qr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(If,Uf,qr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(If,Uf,qr),qr.x===1&&qr.y===1&&qr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(If,Uf,qr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fo=new ue,Nx=new en,Ix=new en;class Sr extends QS{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pg*2*Math.atan(Math.tan(Cp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fo.x,fo.y).multiplyScalar(-e/fo.z),fo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fo.x,fo.y).multiplyScalar(-e/fo.z)}getViewSize(e,t){return this.getViewBounds(e,Nx,Ix),t.subVectors(Ix,Nx)}setViewOffset(e,t,n,r,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cp*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*r/d,t-=u.offsetY*n/h,r*=u.width/d,n*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class JS extends QS{constructor(e=-1,t=1,n=1,r=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qa=-90,Ja=1;class fA extends Ri{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sr(Qa,Ja,e,t);r.layers=this.layers,this.add(r);const a=new Sr(Qa,Ja,e,t);a.layers=this.layers,this.add(a);const u=new Sr(Qa,Ja,e,t);u.layers=this.layers,this.add(u);const c=new Sr(Qa,Ja,e,t);c.layers=this.layers,this.add(c);const d=new Sr(Qa,Ja,e,t);d.layers=this.layers,this.add(d);const h=new Sr(Qa,Ja,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===ns)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===xd)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,g,_),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class dA extends Sr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ux(o,e,t,n){const r=hA(n);switch(t){case FS:return o*e;case kS:return o*e/r.components*r.byteLength;case Zg:return o*e/r.components*r.byteLength;case Tl:return o*e*2/r.components*r.byteLength;case Qg:return o*e*2/r.components*r.byteLength;case OS:return o*e*3/r.components*r.byteLength;case Hr:return o*e*4/r.components*r.byteLength;case Jg:return o*e*4/r.components*r.byteLength;case ed:case td:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case nd:case id:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Om:case Bm:return Math.max(o,16)*Math.max(e,8)/4;case Fm:case km:return Math.max(o,8)*Math.max(e,8)/2;case zm:case Vm:case Gm:case Wm:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Hm:case Xm:case Ym:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jm:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qm:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case $m:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Km:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Zm:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Qm:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Jm:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case eg:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case tg:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case ng:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ig:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case rg:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case sg:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case og:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case ag:case lg:case ug:return Math.ceil(o/4)*Math.ceil(e/4)*16;case cg:case fg:return Math.ceil(o/4)*Math.ceil(e/4)*8;case dg:case hg:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hA(o){switch(o){case Tr:case LS:return{byteLength:1,components:1};case Zu:case NS:case Us:return{byteLength:2,components:1};case $g:case Kg:return{byteLength:2,components:4};case ls:case qg:case ts:return{byteLength:4,components:1};case IS:case US:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jg}}));typeof window<"u"&&(window.__THREE__?Mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jg);function eM(){let o=null,e=!1,t=null,n=null;function r(a,u){t(a,u),n=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function pA(o){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,v=h.byteLength,g=o.createBuffer();o.bindBuffer(d,g),o.bufferData(d,h,p),c.onUploadCallback();let _;if(h instanceof Float32Array)_=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=o.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?_=o.HALF_FLOAT:_=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=o.SHORT;else if(h instanceof Uint32Array)_=o.UNSIGNED_INT;else if(h instanceof Int32Array)_=o.INT;else if(h instanceof Int8Array)_=o.BYTE;else if(h instanceof Uint8Array)_=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:v}}function n(c,d,h){const p=d.array,v=d.updateRanges;if(o.bindBuffer(h,c),v.length===0)o.bufferSubData(h,0,p);else{v.sort((_,M)=>_.start-M.start);let g=0;for(let _=1;_<v.length;_++){const M=v[g],E=v[_];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,v[g]=E)}v.length=g+1;for(let _=0,M=v.length;_<M;_++){const E=v[_];o.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(o.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,d),h.version=c.version}}return{get:r,remove:a,update:u}}var mA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_A=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,TA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,RA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,UA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,FA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XA="gl_FragColor = linearToOutputTexel( gl_FragColor );",YA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$A=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_C=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,TC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,DC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,WC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$C=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ZC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,QC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,JC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_R=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,SR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ER=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,TR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ct={alphahash_fragment:mA,alphahash_pars_fragment:gA,alphamap_fragment:_A,alphamap_pars_fragment:vA,alphatest_fragment:xA,alphatest_pars_fragment:yA,aomap_fragment:SA,aomap_pars_fragment:MA,batching_pars_vertex:EA,batching_vertex:TA,begin_vertex:wA,beginnormal_vertex:AA,bsdfs:CA,iridescence_fragment:RA,bumpmap_pars_fragment:bA,clipping_planes_fragment:PA,clipping_planes_pars_fragment:DA,clipping_planes_pars_vertex:LA,clipping_planes_vertex:NA,color_fragment:IA,color_pars_fragment:UA,color_pars_vertex:FA,color_vertex:OA,common:kA,cube_uv_reflection_fragment:BA,defaultnormal_vertex:zA,displacementmap_pars_vertex:VA,displacementmap_vertex:HA,emissivemap_fragment:GA,emissivemap_pars_fragment:WA,colorspace_fragment:XA,colorspace_pars_fragment:YA,envmap_fragment:jA,envmap_common_pars_fragment:qA,envmap_pars_fragment:$A,envmap_pars_vertex:KA,envmap_physical_pars_fragment:aC,envmap_vertex:ZA,fog_vertex:QA,fog_pars_vertex:JA,fog_fragment:eC,fog_pars_fragment:tC,gradientmap_pars_fragment:nC,lightmap_pars_fragment:iC,lights_lambert_fragment:rC,lights_lambert_pars_fragment:sC,lights_pars_begin:oC,lights_toon_fragment:lC,lights_toon_pars_fragment:uC,lights_phong_fragment:cC,lights_phong_pars_fragment:fC,lights_physical_fragment:dC,lights_physical_pars_fragment:hC,lights_fragment_begin:pC,lights_fragment_maps:mC,lights_fragment_end:gC,logdepthbuf_fragment:_C,logdepthbuf_pars_fragment:vC,logdepthbuf_pars_vertex:xC,logdepthbuf_vertex:yC,map_fragment:SC,map_pars_fragment:MC,map_particle_fragment:EC,map_particle_pars_fragment:TC,metalnessmap_fragment:wC,metalnessmap_pars_fragment:AC,morphinstance_vertex:CC,morphcolor_vertex:RC,morphnormal_vertex:bC,morphtarget_pars_vertex:PC,morphtarget_vertex:DC,normal_fragment_begin:LC,normal_fragment_maps:NC,normal_pars_fragment:IC,normal_pars_vertex:UC,normal_vertex:FC,normalmap_pars_fragment:OC,clearcoat_normal_fragment_begin:kC,clearcoat_normal_fragment_maps:BC,clearcoat_pars_fragment:zC,iridescence_pars_fragment:VC,opaque_fragment:HC,packing:GC,premultiplied_alpha_fragment:WC,project_vertex:XC,dithering_fragment:YC,dithering_pars_fragment:jC,roughnessmap_fragment:qC,roughnessmap_pars_fragment:$C,shadowmap_pars_fragment:KC,shadowmap_pars_vertex:ZC,shadowmap_vertex:QC,shadowmask_pars_fragment:JC,skinbase_vertex:eR,skinning_pars_vertex:tR,skinning_vertex:nR,skinnormal_vertex:iR,specularmap_fragment:rR,specularmap_pars_fragment:sR,tonemapping_fragment:oR,tonemapping_pars_fragment:aR,transmission_fragment:lR,transmission_pars_fragment:uR,uv_pars_fragment:cR,uv_pars_vertex:fR,uv_vertex:dR,worldpos_vertex:hR,background_vert:pR,background_frag:mR,backgroundCube_vert:gR,backgroundCube_frag:_R,cube_vert:vR,cube_frag:xR,depth_vert:yR,depth_frag:SR,distance_vert:MR,distance_frag:ER,equirect_vert:TR,equirect_frag:wR,linedashed_vert:AR,linedashed_frag:CR,meshbasic_vert:RR,meshbasic_frag:bR,meshlambert_vert:PR,meshlambert_frag:DR,meshmatcap_vert:LR,meshmatcap_frag:NR,meshnormal_vert:IR,meshnormal_frag:UR,meshphong_vert:FR,meshphong_frag:OR,meshphysical_vert:kR,meshphysical_frag:BR,meshtoon_vert:zR,meshtoon_frag:VR,points_vert:HR,points_frag:GR,shadow_vert:WR,shadow_frag:XR,sprite_vert:YR,sprite_frag:jR},Ve={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new en(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new en(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Qr={basic:{uniforms:Si([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Si([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Si([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Si([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Si([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Si([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Si([Ve.points,Ve.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Si([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Si([Ve.common,Ve.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Si([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Si([Ve.sprite,Ve.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:Si([Ve.common,Ve.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:Si([Ve.lights,Ve.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Qr.physical={uniforms:Si([Qr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new en(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new en},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new en},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Ff={r:0,b:0,g:0},qo=new Os,qR=new En;function $R(o,e,t,n,r,a){const u=new $t(0);let c=r===!0?0:1,d,h,p=null,v=0,g=null;function _(A){let b=A.isScene===!0?A.background:null;if(b&&b.isTexture){const C=A.backgroundBlurriness>0;b=e.get(b,C)}return b}function M(A){let b=!1;const C=_(A);C===null?x(u,c):C&&C.isColor&&(x(C,1),b=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(o.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function E(A,b){const C=_(b);C&&(C.isCubeTexture||C.mapping===Dd)?(h===void 0&&(h=new ks(new oc(1,1,1),new us({name:"BackgroundCubeMaterial",uniforms:Al(Qr.backgroundCube.uniforms),vertexShader:Qr.backgroundCube.vertexShader,fragmentShader:Qr.backgroundCube.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),qo.copy(b.backgroundRotation),qo.x*=-1,qo.y*=-1,qo.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(qo.y*=-1,qo.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qR.makeRotationFromEuler(qo)),h.material.toneMapped=Ht.getTransfer(C.colorSpace)!==Qt,(p!==C||v!==C.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,p=C,v=C.version,g=o.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new ks(new Ld(2,2),new us({name:"BackgroundMaterial",uniforms:Al(Qr.background.uniforms),vertexShader:Qr.background.vertexShader,fragmentShader:Qr.background.fragmentShader,side:Co,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=Ht.getTransfer(C.colorSpace)!==Qt,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(p!==C||v!==C.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,p=C,v=C.version,g=o.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null))}function x(A,b){A.getRGB(Ff,ZS(o)),t.buffers.color.setClear(Ff.r,Ff.g,Ff.b,b,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(A,b=1){u.set(A),c=b,x(u,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,x(u,c)},render:M,addToRenderList:E,dispose:S}}function KR(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},r=g(null);let a=r,u=!1;function c(k,H,K,ee,Z){let Q=!1;const V=v(k,ee,K,H);a!==V&&(a=V,h(a.object)),Q=_(k,ee,K,Z),Q&&M(k,ee,K,Z),Z!==null&&e.update(Z,o.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,C(k,H,K,ee),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function d(){return o.createVertexArray()}function h(k){return o.bindVertexArray(k)}function p(k){return o.deleteVertexArray(k)}function v(k,H,K,ee){const Z=ee.wireframe===!0;let Q=n[H.id];Q===void 0&&(Q={},n[H.id]=Q);const V=k.isInstancedMesh===!0?k.id:0;let q=Q[V];q===void 0&&(q={},Q[V]=q);let te=q[K.id];te===void 0&&(te={},q[K.id]=te);let U=te[Z];return U===void 0&&(U=g(d()),te[Z]=U),U}function g(k){const H=[],K=[],ee=[];for(let Z=0;Z<t;Z++)H[Z]=0,K[Z]=0,ee[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:ee,object:k,attributes:{},index:null}}function _(k,H,K,ee){const Z=a.attributes,Q=H.attributes;let V=0;const q=K.getAttributes();for(const te in q)if(q[te].location>=0){const O=Z[te];let J=Q[te];if(J===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(J=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(J=k.instanceColor)),O===void 0||O.attribute!==J||J&&O.data!==J.data)return!0;V++}return a.attributesNum!==V||a.index!==ee}function M(k,H,K,ee){const Z={},Q=H.attributes;let V=0;const q=K.getAttributes();for(const te in q)if(q[te].location>=0){let O=Q[te];O===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(O=k.instanceColor));const J={};J.attribute=O,O&&O.data&&(J.data=O.data),Z[te]=J,V++}a.attributes=Z,a.attributesNum=V,a.index=ee}function E(){const k=a.newAttributes;for(let H=0,K=k.length;H<K;H++)k[H]=0}function x(k){S(k,0)}function S(k,H){const K=a.newAttributes,ee=a.enabledAttributes,Z=a.attributeDivisors;K[k]=1,ee[k]===0&&(o.enableVertexAttribArray(k),ee[k]=1),Z[k]!==H&&(o.vertexAttribDivisor(k,H),Z[k]=H)}function A(){const k=a.newAttributes,H=a.enabledAttributes;for(let K=0,ee=H.length;K<ee;K++)H[K]!==k[K]&&(o.disableVertexAttribArray(K),H[K]=0)}function b(k,H,K,ee,Z,Q,V){V===!0?o.vertexAttribIPointer(k,H,K,Z,Q):o.vertexAttribPointer(k,H,K,ee,Z,Q)}function C(k,H,K,ee){E();const Z=ee.attributes,Q=K.getAttributes(),V=H.defaultAttributeValues;for(const q in Q){const te=Q[q];if(te.location>=0){let U=Z[q];if(U===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(U=k.instanceColor)),U!==void 0){const O=U.normalized,J=U.itemSize,Ce=e.get(U);if(Ce===void 0)continue;const be=Ce.buffer,ke=Ce.type,ne=Ce.bytesPerElement,me=ke===o.INT||ke===o.UNSIGNED_INT||U.gpuType===qg;if(U.isInterleavedBufferAttribute){const ge=U.data,Le=ge.stride,Ge=U.offset;if(ge.isInstancedInterleavedBuffer){for(let Ze=0;Ze<te.locationSize;Ze++)S(te.location+Ze,ge.meshPerAttribute);k.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ze=0;Ze<te.locationSize;Ze++)x(te.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,be);for(let Ze=0;Ze<te.locationSize;Ze++)b(te.location+Ze,J/te.locationSize,ke,O,Le*ne,(Ge+J/te.locationSize*Ze)*ne,me)}else{if(U.isInstancedBufferAttribute){for(let ge=0;ge<te.locationSize;ge++)S(te.location+ge,U.meshPerAttribute);k.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ge=0;ge<te.locationSize;ge++)x(te.location+ge);o.bindBuffer(o.ARRAY_BUFFER,be);for(let ge=0;ge<te.locationSize;ge++)b(te.location+ge,J/te.locationSize,ke,O,J*ne,J/te.locationSize*ge*ne,me)}}else if(V!==void 0){const O=V[q];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(te.location,O);break;case 3:o.vertexAttrib3fv(te.location,O);break;case 4:o.vertexAttrib4fv(te.location,O);break;default:o.vertexAttrib1fv(te.location,O)}}}}A()}function L(){D();for(const k in n){const H=n[k];for(const K in H){const ee=H[K];for(const Z in ee){const Q=ee[Z];for(const V in Q)p(Q[V].object),delete Q[V];delete ee[Z]}}delete n[k]}}function I(k){if(n[k.id]===void 0)return;const H=n[k.id];for(const K in H){const ee=H[K];for(const Z in ee){const Q=ee[Z];for(const V in Q)p(Q[V].object),delete Q[V];delete ee[Z]}}delete n[k.id]}function N(k){for(const H in n){const K=n[H];for(const ee in K){const Z=K[ee];if(Z[k.id]===void 0)continue;const Q=Z[k.id];for(const V in Q)p(Q[V].object),delete Q[V];delete Z[k.id]}}}function T(k){for(const H in n){const K=n[H],ee=k.isInstancedMesh===!0?k.id:0,Z=K[ee];if(Z!==void 0){for(const Q in Z){const V=Z[Q];for(const q in V)p(V[q].object),delete V[q];delete Z[Q]}delete K[ee],Object.keys(K).length===0&&delete n[H]}}}function D(){W(),u=!0,a!==r&&(a=r,h(a.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:D,resetDefaultState:W,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:x,disableUnusedAttributes:A}}function ZR(o,e,t){let n;function r(h){n=h}function a(h,p){o.drawArrays(n,h,p),t.update(p,n,1)}function u(h,p,v){v!==0&&(o.drawArraysInstanced(n,h,p,v),t.update(p,n,v))}function c(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,v);let _=0;for(let M=0;M<v;M++)_+=p[M];t.update(_,n,1)}function d(h,p,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<h.length;M++)u(h[M],p[M],g[M]);else{_.multiDrawArraysInstancedWEBGL(n,h,0,p,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=p[E]*g[E];t.update(M,n,1)}}this.setMode=r,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function QR(o,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(N){return!(N!==Hr&&n.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const T=N===Us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Tr&&n.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ts&&!T)}function d(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(Mt("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),b=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:C,maxSamples:L,samples:I}}function JR(o){const e=this;let t=null,n=0,r=!1,a=!1;const u=new Zo,c=new At,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const _=v.length!==0||g||n!==0||r;return r=g,n=v.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,_){const M=v.clippingPlanes,E=v.clipIntersection,x=v.clipShadows,S=o.get(v);if(!r||M===null||M.length===0||a&&!x)a?p(null):h();else{const A=a?0:n,b=A*4;let C=S.clippingState||null;d.value=C,C=p(M,g,b,_);for(let L=0;L!==b;++L)C[L]=t[L];S.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(v,g,_,M){const E=v!==null?v.length:0;let x=null;if(E!==0){if(x=d.value,M!==!0||x===null){const S=_+E*4,A=g.matrixWorldInverse;c.getNormalMatrix(A),(x===null||x.length<S)&&(x=new Float32Array(S));for(let b=0,C=_;b!==E;++b,C+=4)u.copy(v[b]).applyMatrix4(A,c),u.normal.toArray(x,C),x[C+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}const vo=4,Fx=[.125,.215,.35,.446,.526,.582],ta=20,eb=256,vu=new JS,Ox=new $t;let Qp=null,Jp=0,em=0,tm=!1;const tb=new ue;class kx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:u=256,position:c=tb}=a;Qp=this._renderer.getRenderTarget(),Jp=this._renderer.getActiveCubeFace(),em=this._renderer.getActiveMipmapLevel(),tm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,r,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qp,Jp,em),this._renderer.xr.enabled=tm,e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ha||e.mapping===El?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qp=this._renderer.getRenderTarget(),Jp=this._renderer.getActiveCubeFace(),em=this._renderer.getActiveMipmapLevel(),tm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Us,format:Hr,colorSpace:wl,depthBuffer:!1},r=Bx(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bx(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nb(a)),this._blurMaterial=rb(a,e,t),this._ggxMaterial=ib(a,e,t)}return r}_compileMaterial(e){const t=new ks(new cr,e);this._renderer.compile(t,vu)}_sceneToCubeUV(e,t,n,r,a){const d=new Sr(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,_=v.toneMapping;v.getClearColor(Ox),v.toneMapping=rs,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(r),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ks(new oc,new XS({name:"PMREM.Background",side:Wi,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let S=!1;const A=e.background;A?A.isColor&&(x.color.copy(A),e.background=null,S=!0):(x.color.copy(Ox),S=!0);for(let b=0;b<6;b++){const C=b%3;C===0?(d.up.set(0,h[b],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[b],a.y,a.z)):C===1?(d.up.set(0,0,h[b]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[b],a.z)):(d.up.set(0,h[b],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[b]));const L=this._cubeSize;el(r,C*L,b>2?L:0,L,L),v.setRenderTarget(r),S&&v.render(E,d),v.render(e,d)}v.toneMapping=_,v.autoClear=g,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ha||e.mapping===El;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zx());const a=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=a;const c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;el(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(u,vu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[n];c.material=u;const d=u.uniforms,h=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),g=0+h*1.25,_=v*g,{_lodMax:M}=this,E=this._sizeLods[n],x=3*E*(n>M-vo?n-M+vo:0),S=4*(this._cubeSize-E);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=M-t,el(a,x,S,3*E,2*E),r.setRenderTarget(a),r.render(c,vu),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-n,el(e,x,S,3*E,2*E),r.setRenderTarget(e),r.render(c,vu)}_blur(e,t,n,r,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,r,"latitudinal",a),this._halfBlur(u,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");const p=3,v=this._lodMeshes[r];v.material=h;const g=h.uniforms,_=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*ta-1),E=a/M,x=isFinite(a)?1+Math.floor(p*E):ta;x>ta&&Mt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ta}`);const S=[];let A=0;for(let N=0;N<ta;++N){const T=N/E,D=Math.exp(-T*T/2);S.push(D),N===0?A+=D:N<x&&(A+=2*D)}for(let N=0;N<S.length;N++)S[N]=S[N]/A;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=S,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:b}=this;g.dTheta.value=M,g.mipInt.value=b-n;const C=this._sizeLods[r],L=3*C*(r>b-vo?r-b+vo:0),I=4*(this._cubeSize-C);el(t,L,I,3*C,2*C),d.setRenderTarget(t),d.render(v,vu)}}function nb(o){const e=[],t=[],n=[];let r=o;const a=o-vo+1+Fx.length;for(let u=0;u<a;u++){const c=Math.pow(2,r);e.push(c);let d=1/c;u>o-vo?d=Fx[u-o+vo-1]:u===0&&(d=0),t.push(d);const h=1/(c-2),p=-h,v=1+h,g=[p,p,v,p,v,v,p,p,v,v,p,v],_=6,M=6,E=3,x=2,S=1,A=new Float32Array(E*M*_),b=new Float32Array(x*M*_),C=new Float32Array(S*M*_);for(let I=0;I<_;I++){const N=I%3*2/3-1,T=I>2?0:-1,D=[N,T,0,N+2/3,T,0,N+2/3,T+1,0,N,T,0,N+2/3,T+1,0,N,T+1,0];A.set(D,E*M*I),b.set(g,x*M*I);const W=[I,I,I,I,I,I];C.set(W,S*M*I)}const L=new cr;L.setAttribute("position",new Cr(A,E)),L.setAttribute("uv",new Cr(b,x)),L.setAttribute("faceIndex",new Cr(C,S)),n.push(new ks(L,null)),r>vo&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Bx(o,e,t){const n=new ss(o,e,t);return n.texture.mapping=Dd,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function el(o,e,t,n,r){o.viewport.set(e,t,n,r),o.scissor.set(e,t,n,r)}function ib(o,e,t){return new us({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function rb(o,e,t){const n=new Float32Array(ta),r=new ue(0,1,0);return new us({name:"SphericalGaussianBlur",defines:{n:ta,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function zx(){return new us({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Vx(){return new us({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Nd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class tM extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new $S(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oc(5,5,5),a=new us({name:"CubemapFromEquirect",uniforms:Al(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wi,blending:Ps});a.uniforms.tEquirect.value=t;const u=new ks(r,a),c=t.minFilter;return t.minFilter===ia&&(t.minFilter=hi),new fA(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,r);e.setRenderTarget(a)}}function sb(o){let e=new WeakMap,t=new WeakMap,n=null;function r(g,_=!1){return g==null?null:_?u(g):a(g)}function a(g){if(g&&g.isTexture){const _=g.mapping;if(_===Tp||_===wp)if(e.has(g)){const M=e.get(g).texture;return c(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const E=new tM(M.height);return E.fromEquirectangularTexture(o,g),e.set(g,E),g.addEventListener("dispose",h),c(E.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const _=g.mapping,M=_===Tp||_===wp,E=_===ha||_===El;if(M||E){let x=t.get(g);const S=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return n===null&&(n=new kx(o)),x=M?n.fromEquirectangular(g,x):n.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const A=g.image;return M&&A&&A.height>0||E&&A&&d(A)?(n===null&&(n=new kx(o)),x=M?n.fromEquirectangular(g):n.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",p),x.texture):null}}}return g}function c(g,_){return _===Tp?g.mapping=ha:_===wp&&(g.mapping=El),g}function d(g){let _=0;const M=6;for(let E=0;E<M;E++)g[E]!==void 0&&_++;return _===M}function h(g){const _=g.target;_.removeEventListener("dispose",h);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(g){const _=g.target;_.removeEventListener("dispose",p);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:v}}function ob(o){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=o.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Sd("WebGLRenderer: "+n+" extension not supported."),r}}}function ab(o,e,t,n){const r={},a=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete r[g.id];const _=a.get(g);_&&(e.remove(_),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(v,g){return r[g.id]===!0||(g.addEventListener("dispose",u),r[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const _ in g)e.update(g[_],o.ARRAY_BUFFER)}function h(v){const g=[],_=v.index,M=v.attributes.position;let E=0;if(M===void 0)return;if(_!==null){const A=_.array;E=_.version;for(let b=0,C=A.length;b<C;b+=3){const L=A[b+0],I=A[b+1],N=A[b+2];g.push(L,I,I,N,N,L)}}else{const A=M.array;E=M.version;for(let b=0,C=A.length/3-1;b<C;b+=3){const L=b+0,I=b+1,N=b+2;g.push(L,I,I,N,N,L)}}const x=new(M.count>=65535?WS:GS)(g,1);x.version=E;const S=a.get(v);S&&e.remove(S),a.set(v,x)}function p(v){const g=a.get(v);if(g){const _=v.index;_!==null&&g.version<_.version&&h(v)}else h(v);return a.get(v)}return{get:c,update:d,getWireframeAttribute:p}}function lb(o,e,t){let n;function r(g){n=g}let a,u;function c(g){a=g.type,u=g.bytesPerElement}function d(g,_){o.drawElements(n,_,a,g*u),t.update(_,n,1)}function h(g,_,M){M!==0&&(o.drawElementsInstanced(n,_,a,g*u,M),t.update(_,n,M))}function p(g,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,a,g,0,M);let x=0;for(let S=0;S<M;S++)x+=_[S];t.update(x,n,1)}function v(g,_,M,E){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<g.length;S++)h(g[S]/u,_[S],E[S]);else{x.multiDrawElementsInstancedWEBGL(n,_,0,a,g,0,E,0,M);let S=0;for(let A=0;A<M;A++)S+=_[A]*E[A];t.update(S,n,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=v}function ub(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:Wt("WebGLInfo: Unknown draw mode:",u);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function cb(o,e,t){const n=new WeakMap,r=new Pn;function a(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=p!==void 0?p.length:0;let g=n.get(c);if(g===void 0||g.count!==v){let W=function(){T.dispose(),n.delete(c),c.removeEventListener("dispose",W)};var _=W;g!==void 0&&g.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let C=0;M===!0&&(C=1),E===!0&&(C=2),x===!0&&(C=3);let L=c.attributes.position.count*C,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const N=new Float32Array(L*I*4*v),T=new zS(N,L,I,v);T.type=ts,T.needsUpdate=!0;const D=C*4;for(let k=0;k<v;k++){const H=S[k],K=A[k],ee=b[k],Z=L*I*4*k;for(let Q=0;Q<H.count;Q++){const V=Q*D;M===!0&&(r.fromBufferAttribute(H,Q),N[Z+V+0]=r.x,N[Z+V+1]=r.y,N[Z+V+2]=r.z,N[Z+V+3]=0),E===!0&&(r.fromBufferAttribute(K,Q),N[Z+V+4]=r.x,N[Z+V+5]=r.y,N[Z+V+6]=r.z,N[Z+V+7]=0),x===!0&&(r.fromBufferAttribute(ee,Q),N[Z+V+8]=r.x,N[Z+V+9]=r.y,N[Z+V+10]=r.z,N[Z+V+11]=ee.itemSize===4?r.w:1)}}g={count:v,texture:T,size:new en(L,I)},n.set(c,g),c.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const E=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:a}}function fb(o,e,t,n,r){let a=new WeakMap;function u(h){const p=r.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,o.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return g}function c(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:u,dispose:c}}const db={[TS]:"LINEAR_TONE_MAPPING",[wS]:"REINHARD_TONE_MAPPING",[AS]:"CINEON_TONE_MAPPING",[CS]:"ACES_FILMIC_TONE_MAPPING",[bS]:"AGX_TONE_MAPPING",[PS]:"NEUTRAL_TONE_MAPPING",[RS]:"CUSTOM_TONE_MAPPING"};function hb(o,e,t,n,r){const a=new ss(e,t,{type:o,depthBuffer:n,stencilBuffer:r}),u=new ss(e,t,{type:Us,depthBuffer:!1,stencilBuffer:!1}),c=new cr;c.setAttribute("position",new Gr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Gr([0,2,0,0,2,0],2));const d=new lA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ks(c,d),p=new JS(-1,1,1,-1,0,1);let v=null,g=null,_=!1,M,E=null,x=[],S=!1;this.setSize=function(A,b){a.setSize(A,b),u.setSize(A,b);for(let C=0;C<x.length;C++){const L=x[C];L.setSize&&L.setSize(A,b)}},this.setEffects=function(A){x=A,S=x.length>0&&x[0].isRenderPass===!0;const b=a.width,C=a.height;for(let L=0;L<x.length;L++){const I=x[L];I.setSize&&I.setSize(b,C)}},this.begin=function(A,b){if(_||A.toneMapping===rs&&x.length===0)return!1;if(E=b,b!==null){const C=b.width,L=b.height;(a.width!==C||a.height!==L)&&this.setSize(C,L)}return S===!1&&A.setRenderTarget(a),M=A.toneMapping,A.toneMapping=rs,!0},this.hasRenderPass=function(){return S},this.end=function(A,b){A.toneMapping=M,_=!0;let C=a,L=u;for(let I=0;I<x.length;I++){const N=x[I];if(N.enabled!==!1&&(N.render(A,L,C,b),N.needsSwap!==!1)){const T=C;C=L,L=T}}if(v!==A.outputColorSpace||g!==A.toneMapping){v=A.outputColorSpace,g=A.toneMapping,d.defines={},Ht.getTransfer(v)===Qt&&(d.defines.SRGB_TRANSFER="");const I=db[g];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=C.texture,A.setRenderTarget(E),A.render(h,p),E=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),u.dispose(),c.dispose(),d.dispose()}}const nM=new Ci,gg=new Ju(1,1),iM=new zS,rM=new Fw,sM=new $S,Hx=[],Gx=[],Wx=new Float32Array(16),Xx=new Float32Array(9),Yx=new Float32Array(4);function Dl(o,e,t){const n=o[0];if(n<=0||n>0)return o;const r=e*t;let a=Hx[r];if(a===void 0&&(a=new Float32Array(r),Hx[r]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function Vn(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Hn(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Id(o,e){let t=Gx[e];t===void 0&&(t=new Int32Array(e),Gx[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function pb(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function mb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vn(t,e))return;o.uniform2fv(this.addr,e),Hn(t,e)}}function gb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vn(t,e))return;o.uniform3fv(this.addr,e),Hn(t,e)}}function _b(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vn(t,e))return;o.uniform4fv(this.addr,e),Hn(t,e)}}function vb(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Hn(t,e)}else{if(Vn(t,n))return;Yx.set(n),o.uniformMatrix2fv(this.addr,!1,Yx),Hn(t,n)}}function xb(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Hn(t,e)}else{if(Vn(t,n))return;Xx.set(n),o.uniformMatrix3fv(this.addr,!1,Xx),Hn(t,n)}}function yb(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Hn(t,e)}else{if(Vn(t,n))return;Wx.set(n),o.uniformMatrix4fv(this.addr,!1,Wx),Hn(t,n)}}function Sb(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Mb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vn(t,e))return;o.uniform2iv(this.addr,e),Hn(t,e)}}function Eb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vn(t,e))return;o.uniform3iv(this.addr,e),Hn(t,e)}}function Tb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vn(t,e))return;o.uniform4iv(this.addr,e),Hn(t,e)}}function wb(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Ab(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vn(t,e))return;o.uniform2uiv(this.addr,e),Hn(t,e)}}function Cb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vn(t,e))return;o.uniform3uiv(this.addr,e),Hn(t,e)}}function Rb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vn(t,e))return;o.uniform4uiv(this.addr,e),Hn(t,e)}}function bb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r);let a;this.type===o.SAMPLER_2D_SHADOW?(gg.compareFunction=t.isReversedDepthBuffer()?t_:e_,a=gg):a=nM,t.setTexture2D(e||a,r)}function Pb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||rM,r)}function Db(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||sM,r)}function Lb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||iM,r)}function Nb(o){switch(o){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return _b;case 35674:return vb;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return Sb;case 35667:case 35671:return Mb;case 35668:case 35672:return Eb;case 35669:case 35673:return Tb;case 5125:return wb;case 36294:return Ab;case 36295:return Cb;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Lb}}function Ib(o,e){o.uniform1fv(this.addr,e)}function Ub(o,e){const t=Dl(e,this.size,2);o.uniform2fv(this.addr,t)}function Fb(o,e){const t=Dl(e,this.size,3);o.uniform3fv(this.addr,t)}function Ob(o,e){const t=Dl(e,this.size,4);o.uniform4fv(this.addr,t)}function kb(o,e){const t=Dl(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Bb(o,e){const t=Dl(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function zb(o,e){const t=Dl(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Vb(o,e){o.uniform1iv(this.addr,e)}function Hb(o,e){o.uniform2iv(this.addr,e)}function Gb(o,e){o.uniform3iv(this.addr,e)}function Wb(o,e){o.uniform4iv(this.addr,e)}function Xb(o,e){o.uniform1uiv(this.addr,e)}function Yb(o,e){o.uniform2uiv(this.addr,e)}function jb(o,e){o.uniform3uiv(this.addr,e)}function qb(o,e){o.uniform4uiv(this.addr,e)}function $b(o,e,t){const n=this.cache,r=e.length,a=Id(t,r);Vn(n,a)||(o.uniform1iv(this.addr,a),Hn(n,a));let u;this.type===o.SAMPLER_2D_SHADOW?u=gg:u=nM;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||u,a[c])}function Kb(o,e,t){const n=this.cache,r=e.length,a=Id(t,r);Vn(n,a)||(o.uniform1iv(this.addr,a),Hn(n,a));for(let u=0;u!==r;++u)t.setTexture3D(e[u]||rM,a[u])}function Zb(o,e,t){const n=this.cache,r=e.length,a=Id(t,r);Vn(n,a)||(o.uniform1iv(this.addr,a),Hn(n,a));for(let u=0;u!==r;++u)t.setTextureCube(e[u]||sM,a[u])}function Qb(o,e,t){const n=this.cache,r=e.length,a=Id(t,r);Vn(n,a)||(o.uniform1iv(this.addr,a),Hn(n,a));for(let u=0;u!==r;++u)t.setTexture2DArray(e[u]||iM,a[u])}function Jb(o){switch(o){case 5126:return Ib;case 35664:return Ub;case 35665:return Fb;case 35666:return Ob;case 35674:return kb;case 35675:return Bb;case 35676:return zb;case 5124:case 35670:return Vb;case 35667:case 35671:return Hb;case 35668:case 35672:return Gb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return Yb;case 36295:return jb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Qb}}class eP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nb(t.type)}}class tP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jb(t.type)}}class nP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,u=r.length;a!==u;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const nm=/(\w+)(\])?(\[|\.)?/g;function jx(o,e){o.seq.push(e),o.map[e.id]=e}function iP(o,e,t){const n=o.name,r=n.length;for(nm.lastIndex=0;;){const a=nm.exec(n),u=nm.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===r){jx(t,h===void 0?new eP(c,o,e):new tP(c,o,e));break}else{let v=t.map[c];v===void 0&&(v=new nP(c),jx(t,v)),t=v}}}class rd{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<n;++u){const c=e.getActiveUniform(t,u),d=e.getUniformLocation(t,c.name);iP(c,d,this)}const r=[],a=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(u):a.push(u);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const u=e[r];u.id in t&&n.push(u)}return n}}function qx(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const rP=37297;let sP=0;function oP(o,e){const t=o.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=r;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const $x=new At;function aP(o){Ht._getMatrix($x,Ht.workingColorSpace,o);const e=`mat3( ${$x.elements.map(t=>t.toFixed(4))} )`;switch(Ht.getTransfer(o)){case vd:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return Mt("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Kx(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),a=(o.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+oP(o.getShaderSource(e),c)}else return a}function lP(o,e){const t=aP(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const uP={[TS]:"Linear",[wS]:"Reinhard",[AS]:"Cineon",[CS]:"ACESFilmic",[bS]:"AgX",[PS]:"Neutral",[RS]:"Custom"};function cP(o,e){const t=uP[e];return t===void 0?(Mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Of=new ue;function fP(){Ht.getLuminanceCoefficients(Of);const o=Of.x.toFixed(4),e=Of.y.toFixed(4),t=Of.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dP(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wu).join(`
`)}function hP(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pP(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=o.getActiveAttrib(e,r),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function wu(o){return o!==""}function Zx(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mP=/^[ \t]*#include +<([\w\d./]+)>/gm;function _g(o){return o.replace(mP,_P)}const gP=new Map;function _P(o,e){let t=Ct[e];if(t===void 0){const n=gP.get(e);if(n!==void 0)t=Ct[n],Mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _g(t)}const vP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jx(o){return o.replace(vP,xP)}function xP(o,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ey(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const yP={[Jf]:"SHADOWMAP_TYPE_PCF",[Tu]:"SHADOWMAP_TYPE_VSM"};function SP(o){return yP[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MP={[ha]:"ENVMAP_TYPE_CUBE",[El]:"ENVMAP_TYPE_CUBE",[Dd]:"ENVMAP_TYPE_CUBE_UV"};function EP(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":MP[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const TP={[El]:"ENVMAP_MODE_REFRACTION"};function wP(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":TP[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const AP={[ES]:"ENVMAP_BLENDING_MULTIPLY",[pw]:"ENVMAP_BLENDING_MIX",[mw]:"ENVMAP_BLENDING_ADD"};function CP(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":AP[o.combine]||"ENVMAP_BLENDING_NONE"}function RP(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bP(o,e,t,n){const r=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=SP(t),h=EP(t),p=wP(t),v=CP(t),g=RP(t),_=dP(t),M=hP(a),E=r.createProgram();let x,S,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(wu).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(wu).join(`
`),S.length>0&&(S+=`
`)):(x=[ey(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wu).join(`
`),S=[ey(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?Ct.tonemapping_pars_fragment:"",t.toneMapping!==rs?cP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,lP("linearToOutputTexel",t.outputColorSpace),fP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wu).join(`
`)),u=_g(u),u=Zx(u,t),u=Qx(u,t),c=_g(c),c=Zx(c,t),c=Qx(c,t),u=Jx(u),c=Jx(c),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===cx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const b=A+x+u,C=A+S+c,L=qx(r,r.VERTEX_SHADER,b),I=qx(r,r.FRAGMENT_SHADER,C);r.attachShader(E,L),r.attachShader(E,I),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function N(k){if(o.debug.checkShaderErrors){const H=r.getProgramInfoLog(E)||"",K=r.getShaderInfoLog(L)||"",ee=r.getShaderInfoLog(I)||"",Z=H.trim(),Q=K.trim(),V=ee.trim();let q=!0,te=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,E,L,I);else{const U=Kx(r,L,"vertex"),O=Kx(r,I,"fragment");Wt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Z+`
`+U+`
`+O)}else Z!==""?Mt("WebGLProgram: Program Info Log:",Z):(Q===""||V==="")&&(te=!1);te&&(k.diagnostics={runnable:q,programLog:Z,vertexShader:{log:Q,prefix:x},fragmentShader:{log:V,prefix:S}})}r.deleteShader(L),r.deleteShader(I),T=new rd(r,E),D=pP(r,E)}let T;this.getUniforms=function(){return T===void 0&&N(this),T};let D;this.getAttributes=function(){return D===void 0&&N(this),D};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(E,rP)),W},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sP++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=I,this}let PP=0;class DP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new LP(e),t.set(e,n)),n}}class LP{constructor(e){this.id=PP++,this.code=e,this.usedTimes=0}}function NP(o,e,t,n,r,a){const u=new VS,c=new DP,d=new Set,h=[],p=new Map,v=n.logarithmicDepthBuffer;let g=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return d.add(T),T===0?"uv":`uv${T}`}function E(T,D,W,k,H){const K=k.fog,ee=H.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,V=e.get(T.envMap||Z,Q),q=V&&V.mapping===Dd?V.image.height:null,te=_[T.type];T.precision!==null&&(g=n.getMaxPrecision(T.precision),g!==T.precision&&Mt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,O=U!==void 0?U.length:0;let J=0;ee.morphAttributes.position!==void 0&&(J=1),ee.morphAttributes.normal!==void 0&&(J=2),ee.morphAttributes.color!==void 0&&(J=3);let Ce,be,ke,ne;if(te){const Be=Qr[te];Ce=Be.vertexShader,be=Be.fragmentShader}else Ce=T.vertexShader,be=T.fragmentShader,c.update(T),ke=c.getVertexShaderID(T),ne=c.getFragmentShaderID(T);const me=o.getRenderTarget(),ge=o.state.buffers.depth.getReversed(),Le=H.isInstancedMesh===!0,Ge=H.isBatchedMesh===!0,Ze=!!T.map,It=!!T.matcap,We=!!V,ft=!!T.aoMap,Et=!!T.lightMap,lt=!!T.bumpMap,se=!!T.normalMap,G=!!T.displacementMap,Bt=!!T.emissiveMap,Tt=!!T.metalnessMap,ut=!!T.roughnessMap,He=T.anisotropy>0,F=T.clearcoat>0,w=T.dispersion>0,Y=T.iridescence>0,he=T.sheen>0,pe=T.transmission>0,fe=He&&!!T.anisotropyMap,Oe=F&&!!T.clearcoatMap,Te=F&&!!T.clearcoatNormalMap,Qe=F&&!!T.clearcoatRoughnessMap,Xe=Y&&!!T.iridescenceMap,Me=Y&&!!T.iridescenceThicknessMap,Ee=he&&!!T.sheenColorMap,qe=he&&!!T.sheenRoughnessMap,Ye=!!T.specularMap,Ne=!!T.specularColorMap,_t=!!T.specularIntensityMap,z=pe&&!!T.transmissionMap,Ae=pe&&!!T.thicknessMap,xe=!!T.gradientMap,Pe=!!T.alphaMap,ve=T.alphaTest>0,de=!!T.alphaHash,je=!!T.extensions;let at=rs;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(at=o.toneMapping);const Ft={shaderID:te,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:be,defines:T.defines,customVertexShaderID:ke,customFragmentShaderID:ne,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&H._colorsTexture!==null,instancing:Le,instancingColor:Le&&H.instanceColor!==null,instancingMorph:Le&&H.morphTexture!==null,outputColorSpace:me===null?o.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:wl,alphaToCoverage:!!T.alphaToCoverage,map:Ze,matcap:It,envMap:We,envMapMode:We&&V.mapping,envMapCubeUVHeight:q,aoMap:ft,lightMap:Et,bumpMap:lt,normalMap:se,displacementMap:G,emissiveMap:Bt,normalMapObjectSpace:se&&T.normalMapType===xw,normalMapTangentSpace:se&&T.normalMapType===vw,metalnessMap:Tt,roughnessMap:ut,anisotropy:He,anisotropyMap:fe,clearcoat:F,clearcoatMap:Oe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Qe,dispersion:w,iridescence:Y,iridescenceMap:Xe,iridescenceThicknessMap:Me,sheen:he,sheenColorMap:Ee,sheenRoughnessMap:qe,specularMap:Ye,specularColorMap:Ne,specularIntensityMap:_t,transmission:pe,transmissionMap:z,thicknessMap:Ae,gradientMap:xe,opaque:T.transparent===!1&&T.blending===fl&&T.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ve,alphaHash:de,combine:T.combine,mapUv:Ze&&M(T.map.channel),aoMapUv:ft&&M(T.aoMap.channel),lightMapUv:Et&&M(T.lightMap.channel),bumpMapUv:lt&&M(T.bumpMap.channel),normalMapUv:se&&M(T.normalMap.channel),displacementMapUv:G&&M(T.displacementMap.channel),emissiveMapUv:Bt&&M(T.emissiveMap.channel),metalnessMapUv:Tt&&M(T.metalnessMap.channel),roughnessMapUv:ut&&M(T.roughnessMap.channel),anisotropyMapUv:fe&&M(T.anisotropyMap.channel),clearcoatMapUv:Oe&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:qe&&M(T.sheenRoughnessMap.channel),specularMapUv:Ye&&M(T.specularMap.channel),specularColorMapUv:Ne&&M(T.specularColorMap.channel),specularIntensityMapUv:_t&&M(T.specularIntensityMap.channel),transmissionMapUv:z&&M(T.transmissionMap.channel),thicknessMapUv:Ae&&M(T.thicknessMap.channel),alphaMapUv:Pe&&M(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(se||He),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ee.attributes.uv&&(Ze||Pe),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ee.attributes.normal===void 0&&se===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ge,skinning:H.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&W.length>0,shadowMapType:o.shadowMap.type,toneMapping:at,decodeVideoTexture:Ze&&T.map.isVideoTexture===!0&&Ht.getTransfer(T.map.colorSpace)===Qt,decodeVideoTextureEmissive:Bt&&T.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(T.emissiveMap.colorSpace)===Qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===As,flipSided:T.side===Wi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:je&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&T.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ft.vertexUv1s=d.has(1),Ft.vertexUv2s=d.has(2),Ft.vertexUv3s=d.has(3),d.clear(),Ft}function x(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const W in T.defines)D.push(W),D.push(T.defines[W]);return T.isRawShaderMaterial===!1&&(S(D,T),A(D,T),D.push(o.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function S(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function A(T,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),T.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),T.push(u.mask)}function b(T){const D=_[T.type];let W;if(D){const k=Qr[D];W=sA.clone(k.uniforms)}else W=T.uniforms;return W}function C(T,D){let W=p.get(D);return W!==void 0?++W.usedTimes:(W=new bP(o,D,T,r),h.push(W),p.set(D,W)),W}function L(T){if(--T.usedTimes===0){const D=h.indexOf(T);h[D]=h[h.length-1],h.pop(),p.delete(T.cacheKey),T.destroy()}}function I(T){c.remove(T)}function N(){c.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:b,acquireProgram:C,releaseProgram:L,releaseShaderCache:I,programs:h,dispose:N}}function IP(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function n(u){o.delete(u)}function r(u,c,d){o.get(u)[c]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function UP(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function ty(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function ny(){const o=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function u(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function c(g,_,M,E,x,S){let A=o[e];return A===void 0?(A={id:g.id,object:g,geometry:_,material:M,materialVariant:u(g),groupOrder:E,renderOrder:g.renderOrder,z:x,group:S},o[e]=A):(A.id=g.id,A.object=g,A.geometry=_,A.material=M,A.materialVariant=u(g),A.groupOrder=E,A.renderOrder=g.renderOrder,A.z=x,A.group=S),e++,A}function d(g,_,M,E,x,S){const A=c(g,_,M,E,x,S);M.transmission>0?n.push(A):M.transparent===!0?r.push(A):t.push(A)}function h(g,_,M,E,x,S){const A=c(g,_,M,E,x,S);M.transmission>0?n.unshift(A):M.transparent===!0?r.unshift(A):t.unshift(A)}function p(g,_){t.length>1&&t.sort(g||UP),n.length>1&&n.sort(_||ty),r.length>1&&r.sort(_||ty)}function v(){for(let g=e,_=o.length;g<_;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:d,unshift:h,finish:v,sort:p}}function FP(){let o=new WeakMap;function e(n,r){const a=o.get(n);let u;return a===void 0?(u=new ny,o.set(n,[u])):r>=a.length?(u=new ny,a.push(u)):u=a[r],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function OP(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ue,color:new $t};break;case"SpotLight":t={position:new ue,direction:new ue,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new $t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":t={color:new $t,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return o[e.id]=t,t}}}function kP(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new en};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new en};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new en,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let BP=0;function zP(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function VP(o){const e=new OP,t=kP(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ue);const r=new ue,a=new En,u=new En;function c(h){let p=0,v=0,g=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let _=0,M=0,E=0,x=0,S=0,A=0,b=0,C=0,L=0,I=0,N=0;h.sort(zP);for(let D=0,W=h.length;D<W;D++){const k=h[D],H=k.color,K=k.intensity,ee=k.distance;let Z=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Tl?Z=k.shadow.map.texture:Z=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)p+=H.r*K,v+=H.g*K,g+=H.b*K;else if(k.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(k.sh.coefficients[Q],K);N++}else if(k.isDirectionalLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const V=k.shadow,q=t.get(k);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,n.directionalShadow[_]=q,n.directionalShadowMap[_]=Z,n.directionalShadowMatrix[_]=k.shadow.matrix,A++}n.directional[_]=Q,_++}else if(k.isSpotLight){const Q=e.get(k);Q.position.setFromMatrixPosition(k.matrixWorld),Q.color.copy(H).multiplyScalar(K),Q.distance=ee,Q.coneCos=Math.cos(k.angle),Q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Q.decay=k.decay,n.spot[E]=Q;const V=k.shadow;if(k.map&&(n.spotLightMap[L]=k.map,L++,V.updateMatrices(k),k.castShadow&&I++),n.spotLightMatrix[E]=V.matrix,k.castShadow){const q=t.get(k);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,n.spotShadow[E]=q,n.spotShadowMap[E]=Z,C++}E++}else if(k.isRectAreaLight){const Q=e.get(k);Q.color.copy(H).multiplyScalar(K),Q.halfWidth.set(k.width*.5,0,0),Q.halfHeight.set(0,k.height*.5,0),n.rectArea[x]=Q,x++}else if(k.isPointLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),Q.distance=k.distance,Q.decay=k.decay,k.castShadow){const V=k.shadow,q=t.get(k);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,n.pointShadow[M]=q,n.pointShadowMap[M]=Z,n.pointShadowMatrix[M]=k.shadow.matrix,b++}n.point[M]=Q,M++}else if(k.isHemisphereLight){const Q=e.get(k);Q.skyColor.copy(k.color).multiplyScalar(K),Q.groundColor.copy(k.groundColor).multiplyScalar(K),n.hemi[S]=Q,S++}}x>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=v,n.ambient[2]=g;const T=n.hash;(T.directionalLength!==_||T.pointLength!==M||T.spotLength!==E||T.rectAreaLength!==x||T.hemiLength!==S||T.numDirectionalShadows!==A||T.numPointShadows!==b||T.numSpotShadows!==C||T.numSpotMaps!==L||T.numLightProbes!==N)&&(n.directional.length=_,n.spot.length=E,n.rectArea.length=x,n.point.length=M,n.hemi.length=S,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=C+L-I,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=N,T.directionalLength=_,T.pointLength=M,T.spotLength=E,T.rectAreaLength=x,T.hemiLength=S,T.numDirectionalShadows=A,T.numPointShadows=b,T.numSpotShadows=C,T.numSpotMaps=L,T.numLightProbes=N,n.version=BP++)}function d(h,p){let v=0,g=0,_=0,M=0,E=0;const x=p.matrixWorldInverse;for(let S=0,A=h.length;S<A;S++){const b=h[S];if(b.isDirectionalLight){const C=n.directional[v];C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(x),v++}else if(b.isSpotLight){const C=n.spot[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(x),_++}else if(b.isRectAreaLight){const C=n.rectArea[M];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(x),u.identity(),a.copy(b.matrixWorld),a.premultiply(x),u.extractRotation(a),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const C=n.point[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(x),g++}else if(b.isHemisphereLight){const C=n.hemi[E];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(x),E++}}}return{setup:c,setupView:d,state:n}}function iy(o){const e=new VP(o),t=[],n=[];function r(p){h.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function u(p){n.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function HP(o){let e=new WeakMap;function t(r,a=0){const u=e.get(r);let c;return u===void 0?(c=new iy(o),e.set(r,[c])):a>=u.length?(c=new iy(o),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const GP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,XP=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],YP=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],ry=new En,xu=new ue,im=new ue;function jP(o,e,t){let n=new YS;const r=new en,a=new en,u=new Pn,c=new uA,d=new cA,h={},p=t.maxTextureSize,v={[Co]:Wi,[Wi]:Co,[As]:As},g=new us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new en},radius:{value:4}},vertexShader:GP,fragmentShader:WP}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const M=new cr;M.setAttribute("position",new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ks(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jf;let S=this.type;this.render=function(I,N,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;this.type===$T&&(Mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jf);const D=o.getRenderTarget(),W=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),H=o.state;H.setBlending(Ps),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const K=S!==this.type;K&&N.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(Z=>Z.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,Z=I.length;ee<Z;ee++){const Q=I[ee],V=Q.shadow;if(V===void 0){Mt("WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const q=V.getFrameExtents();r.multiply(q),a.copy(V.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/q.x),r.x=a.x*q.x,V.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/q.y),r.y=a.y*q.y,V.mapSize.y=a.y));const te=o.state.buffers.depth.getReversed();if(V.camera._reversedDepth=te,V.map===null||K===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Tu){if(Q.isPointLight){Mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ss(r.x,r.y,{format:Tl,type:Us,minFilter:hi,magFilter:hi,generateMipmaps:!1}),V.map.texture.name=Q.name+".shadowMap",V.map.depthTexture=new Ju(r.x,r.y,ts),V.map.depthTexture.name=Q.name+".shadowMapDepth",V.map.depthTexture.format=Fs,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ei,V.map.depthTexture.magFilter=ei}else Q.isPointLight?(V.map=new tM(r.x),V.map.depthTexture=new iA(r.x,ls)):(V.map=new ss(r.x,r.y),V.map.depthTexture=new Ju(r.x,r.y,ls)),V.map.depthTexture.name=Q.name+".shadowMap",V.map.depthTexture.format=Fs,this.type===Jf?(V.map.depthTexture.compareFunction=te?t_:e_,V.map.depthTexture.minFilter=hi,V.map.depthTexture.magFilter=hi):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ei,V.map.depthTexture.magFilter=ei);V.camera.updateProjectionMatrix()}const U=V.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<U;O++){if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,O),o.clear();else{O===0&&(o.setRenderTarget(V.map),o.clear());const J=V.getViewport(O);u.set(a.x*J.x,a.y*J.y,a.x*J.z,a.y*J.w),H.viewport(u)}if(Q.isPointLight){const J=V.camera,Ce=V.matrix,be=Q.distance||J.far;be!==J.far&&(J.far=be,J.updateProjectionMatrix()),xu.setFromMatrixPosition(Q.matrixWorld),J.position.copy(xu),im.copy(J.position),im.add(XP[O]),J.up.copy(YP[O]),J.lookAt(im),J.updateMatrixWorld(),Ce.makeTranslation(-xu.x,-xu.y,-xu.z),ry.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ry,J.coordinateSystem,J.reversedDepth)}else V.updateMatrices(Q);n=V.getFrustum(),C(N,T,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===Tu&&A(V,T),V.needsUpdate=!1}S=this.type,x.needsUpdate=!1,o.setRenderTarget(D,W,k)};function A(I,N){const T=e.update(E);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ss(r.x,r.y,{format:Tl,type:Us})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(N,null,T,g,E,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(N,null,T,_,E,null)}function b(I,N,T,D){let W=null;const k=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)W=k;else if(W=T.isPointLight===!0?d:c,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const H=W.uuid,K=N.uuid;let ee=h[H];ee===void 0&&(ee={},h[H]=ee);let Z=ee[K];Z===void 0&&(Z=W.clone(),ee[K]=Z,N.addEventListener("dispose",L)),W=Z}if(W.visible=N.visible,W.wireframe=N.wireframe,D===Tu?W.side=N.shadowSide!==null?N.shadowSide:N.side:W.side=N.shadowSide!==null?N.shadowSide:v[N.side],W.alphaMap=N.alphaMap,W.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,W.map=N.map,W.clipShadows=N.clipShadows,W.clippingPlanes=N.clippingPlanes,W.clipIntersection=N.clipIntersection,W.displacementMap=N.displacementMap,W.displacementScale=N.displacementScale,W.displacementBias=N.displacementBias,W.wireframeLinewidth=N.wireframeLinewidth,W.linewidth=N.linewidth,T.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const H=o.properties.get(W);H.light=T}return W}function C(I,N,T,D,W){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&W===Tu)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const K=e.update(I),ee=I.material;if(Array.isArray(ee)){const Z=K.groups;for(let Q=0,V=Z.length;Q<V;Q++){const q=Z[Q],te=ee[q.materialIndex];if(te&&te.visible){const U=b(I,te,D,W);I.onBeforeShadow(o,I,N,T,K,U,q),o.renderBufferDirect(T,null,K,U,I,q),I.onAfterShadow(o,I,N,T,K,U,q)}}}else if(ee.visible){const Z=b(I,ee,D,W);I.onBeforeShadow(o,I,N,T,K,Z,null),o.renderBufferDirect(T,null,K,Z,I,null),I.onAfterShadow(o,I,N,T,K,Z,null)}}const H=I.children;for(let K=0,ee=H.length;K<ee;K++)C(H[K],N,T,D,W)}function L(I){I.target.removeEventListener("dispose",L);for(const T in h){const D=h[T],W=I.target.uuid;W in D&&(D[W].dispose(),delete D[W])}}}function qP(o,e){function t(){let z=!1;const Ae=new Pn;let xe=null;const Pe=new Pn(0,0,0,0);return{setMask:function(ve){xe!==ve&&!z&&(o.colorMask(ve,ve,ve,ve),xe=ve)},setLocked:function(ve){z=ve},setClear:function(ve,de,je,at,Ft){Ft===!0&&(ve*=at,de*=at,je*=at),Ae.set(ve,de,je,at),Pe.equals(Ae)===!1&&(o.clearColor(ve,de,je,at),Pe.copy(Ae))},reset:function(){z=!1,xe=null,Pe.set(-1,0,0,0)}}}function n(){let z=!1,Ae=!1,xe=null,Pe=null,ve=null;return{setReversed:function(de){if(Ae!==de){const je=e.get("EXT_clip_control");de?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ae=de;const at=ve;ve=null,this.setClear(at)}},getReversed:function(){return Ae},setTest:function(de){de?me(o.DEPTH_TEST):ge(o.DEPTH_TEST)},setMask:function(de){xe!==de&&!z&&(o.depthMask(de),xe=de)},setFunc:function(de){if(Ae&&(de=bw[de]),Pe!==de){switch(de){case Cm:o.depthFunc(o.NEVER);break;case Rm:o.depthFunc(o.ALWAYS);break;case bm:o.depthFunc(o.LESS);break;case Ml:o.depthFunc(o.LEQUAL);break;case Pm:o.depthFunc(o.EQUAL);break;case Dm:o.depthFunc(o.GEQUAL);break;case Lm:o.depthFunc(o.GREATER);break;case Nm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pe=de}},setLocked:function(de){z=de},setClear:function(de){ve!==de&&(ve=de,Ae&&(de=1-de),o.clearDepth(de))},reset:function(){z=!1,xe=null,Pe=null,ve=null,Ae=!1}}}function r(){let z=!1,Ae=null,xe=null,Pe=null,ve=null,de=null,je=null,at=null,Ft=null;return{setTest:function(Be){z||(Be?me(o.STENCIL_TEST):ge(o.STENCIL_TEST))},setMask:function(Be){Ae!==Be&&!z&&(o.stencilMask(Be),Ae=Be)},setFunc:function(Be,nt,xt){(xe!==Be||Pe!==nt||ve!==xt)&&(o.stencilFunc(Be,nt,xt),xe=Be,Pe=nt,ve=xt)},setOp:function(Be,nt,xt){(de!==Be||je!==nt||at!==xt)&&(o.stencilOp(Be,nt,xt),de=Be,je=nt,at=xt)},setLocked:function(Be){z=Be},setClear:function(Be){Ft!==Be&&(o.clearStencil(Be),Ft=Be)},reset:function(){z=!1,Ae=null,xe=null,Pe=null,ve=null,de=null,je=null,at=null,Ft=null}}}const a=new t,u=new n,c=new r,d=new WeakMap,h=new WeakMap;let p={},v={},g=new WeakMap,_=[],M=null,E=!1,x=null,S=null,A=null,b=null,C=null,L=null,I=null,N=new $t(0,0,0),T=0,D=!1,W=null,k=null,H=null,K=null,ee=null;const Z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,V=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=V>=2);let te=null,U={};const O=o.getParameter(o.SCISSOR_BOX),J=o.getParameter(o.VIEWPORT),Ce=new Pn().fromArray(O),be=new Pn().fromArray(J);function ke(z,Ae,xe,Pe){const ve=new Uint8Array(4),de=o.createTexture();o.bindTexture(z,de),o.texParameteri(z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let je=0;je<xe;je++)z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,Pe,0,o.RGBA,o.UNSIGNED_BYTE,ve):o.texImage2D(Ae+je,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ve);return de}const ne={};ne[o.TEXTURE_2D]=ke(o.TEXTURE_2D,o.TEXTURE_2D,1),ne[o.TEXTURE_CUBE_MAP]=ke(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[o.TEXTURE_2D_ARRAY]=ke(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ne[o.TEXTURE_3D]=ke(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),me(o.DEPTH_TEST),u.setFunc(Ml),lt(!1),se(rx),me(o.CULL_FACE),ft(Ps);function me(z){p[z]!==!0&&(o.enable(z),p[z]=!0)}function ge(z){p[z]!==!1&&(o.disable(z),p[z]=!1)}function Le(z,Ae){return v[z]!==Ae?(o.bindFramebuffer(z,Ae),v[z]=Ae,z===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ae),z===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ge(z,Ae){let xe=_,Pe=!1;if(z){xe=g.get(Ae),xe===void 0&&(xe=[],g.set(Ae,xe));const ve=z.textures;if(xe.length!==ve.length||xe[0]!==o.COLOR_ATTACHMENT0){for(let de=0,je=ve.length;de<je;de++)xe[de]=o.COLOR_ATTACHMENT0+de;xe.length=ve.length,Pe=!0}}else xe[0]!==o.BACK&&(xe[0]=o.BACK,Pe=!0);Pe&&o.drawBuffers(xe)}function Ze(z){return M!==z?(o.useProgram(z),M=z,!0):!1}const It={[ea]:o.FUNC_ADD,[ZT]:o.FUNC_SUBTRACT,[QT]:o.FUNC_REVERSE_SUBTRACT};It[JT]=o.MIN,It[ew]=o.MAX;const We={[tw]:o.ZERO,[nw]:o.ONE,[iw]:o.SRC_COLOR,[wm]:o.SRC_ALPHA,[uw]:o.SRC_ALPHA_SATURATE,[aw]:o.DST_COLOR,[sw]:o.DST_ALPHA,[rw]:o.ONE_MINUS_SRC_COLOR,[Am]:o.ONE_MINUS_SRC_ALPHA,[lw]:o.ONE_MINUS_DST_COLOR,[ow]:o.ONE_MINUS_DST_ALPHA,[cw]:o.CONSTANT_COLOR,[fw]:o.ONE_MINUS_CONSTANT_COLOR,[dw]:o.CONSTANT_ALPHA,[hw]:o.ONE_MINUS_CONSTANT_ALPHA};function ft(z,Ae,xe,Pe,ve,de,je,at,Ft,Be){if(z===Ps){E===!0&&(ge(o.BLEND),E=!1);return}if(E===!1&&(me(o.BLEND),E=!0),z!==KT){if(z!==x||Be!==D){if((S!==ea||C!==ea)&&(o.blendEquation(o.FUNC_ADD),S=ea,C=ea),Be)switch(z){case fl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case sx:o.blendFunc(o.ONE,o.ONE);break;case ox:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ax:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Wt("WebGLState: Invalid blending: ",z);break}else switch(z){case fl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case sx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case ox:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ax:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",z);break}A=null,b=null,L=null,I=null,N.set(0,0,0),T=0,x=z,D=Be}return}ve=ve||Ae,de=de||xe,je=je||Pe,(Ae!==S||ve!==C)&&(o.blendEquationSeparate(It[Ae],It[ve]),S=Ae,C=ve),(xe!==A||Pe!==b||de!==L||je!==I)&&(o.blendFuncSeparate(We[xe],We[Pe],We[de],We[je]),A=xe,b=Pe,L=de,I=je),(at.equals(N)===!1||Ft!==T)&&(o.blendColor(at.r,at.g,at.b,Ft),N.copy(at),T=Ft),x=z,D=!1}function Et(z,Ae){z.side===As?ge(o.CULL_FACE):me(o.CULL_FACE);let xe=z.side===Wi;Ae&&(xe=!xe),lt(xe),z.blending===fl&&z.transparent===!1?ft(Ps):ft(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),a.setMask(z.colorWrite);const Pe=z.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Bt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?me(o.SAMPLE_ALPHA_TO_COVERAGE):ge(o.SAMPLE_ALPHA_TO_COVERAGE)}function lt(z){W!==z&&(z?o.frontFace(o.CW):o.frontFace(o.CCW),W=z)}function se(z){z!==jT?(me(o.CULL_FACE),z!==k&&(z===rx?o.cullFace(o.BACK):z===qT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ge(o.CULL_FACE),k=z}function G(z){z!==H&&(Q&&o.lineWidth(z),H=z)}function Bt(z,Ae,xe){z?(me(o.POLYGON_OFFSET_FILL),(K!==Ae||ee!==xe)&&(K=Ae,ee=xe,u.getReversed()&&(Ae=-Ae),o.polygonOffset(Ae,xe))):ge(o.POLYGON_OFFSET_FILL)}function Tt(z){z?me(o.SCISSOR_TEST):ge(o.SCISSOR_TEST)}function ut(z){z===void 0&&(z=o.TEXTURE0+Z-1),te!==z&&(o.activeTexture(z),te=z)}function He(z,Ae,xe){xe===void 0&&(te===null?xe=o.TEXTURE0+Z-1:xe=te);let Pe=U[xe];Pe===void 0&&(Pe={type:void 0,texture:void 0},U[xe]=Pe),(Pe.type!==z||Pe.texture!==Ae)&&(te!==xe&&(o.activeTexture(xe),te=xe),o.bindTexture(z,Ae||ne[z]),Pe.type=z,Pe.texture=Ae)}function F(){const z=U[te];z!==void 0&&z.type!==void 0&&(o.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function w(){try{o.compressedTexImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function he(){try{o.texSubImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function pe(){try{o.texSubImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function fe(){try{o.compressedTexSubImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function Oe(){try{o.compressedTexSubImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function Te(){try{o.texStorage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function Qe(){try{o.texStorage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function Xe(){try{o.texImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function Me(){try{o.texImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function Ee(z){Ce.equals(z)===!1&&(o.scissor(z.x,z.y,z.z,z.w),Ce.copy(z))}function qe(z){be.equals(z)===!1&&(o.viewport(z.x,z.y,z.z,z.w),be.copy(z))}function Ye(z,Ae){let xe=h.get(Ae);xe===void 0&&(xe=new WeakMap,h.set(Ae,xe));let Pe=xe.get(z);Pe===void 0&&(Pe=o.getUniformBlockIndex(Ae,z.name),xe.set(z,Pe))}function Ne(z,Ae){const Pe=h.get(Ae).get(z);d.get(Ae)!==Pe&&(o.uniformBlockBinding(Ae,Pe,z.__bindingPointIndex),d.set(Ae,Pe))}function _t(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},te=null,U={},v={},g=new WeakMap,_=[],M=null,E=!1,x=null,S=null,A=null,b=null,C=null,L=null,I=null,N=new $t(0,0,0),T=0,D=!1,W=null,k=null,H=null,K=null,ee=null,Ce.set(0,0,o.canvas.width,o.canvas.height),be.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:me,disable:ge,bindFramebuffer:Le,drawBuffers:Ge,useProgram:Ze,setBlending:ft,setMaterial:Et,setFlipSided:lt,setCullFace:se,setLineWidth:G,setPolygonOffset:Bt,setScissorTest:Tt,activeTexture:ut,bindTexture:He,unbindTexture:F,compressedTexImage2D:w,compressedTexImage3D:Y,texImage2D:Xe,texImage3D:Me,updateUBOMapping:Ye,uniformBlockBinding:Ne,texStorage2D:Te,texStorage3D:Qe,texSubImage2D:he,texSubImage3D:pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:Oe,scissor:Ee,viewport:qe,reset:_t}}function $P(o,e,t,n,r,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new en,p=new WeakMap;let v;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,w){return _?new OffscreenCanvas(F,w):yd("canvas")}function E(F,w,Y){let he=1;const pe=He(F);if((pe.width>Y||pe.height>Y)&&(he=Y/Math.max(pe.width,pe.height)),he<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const fe=Math.floor(he*pe.width),Oe=Math.floor(he*pe.height);v===void 0&&(v=M(fe,Oe));const Te=w?M(fe,Oe):v;return Te.width=fe,Te.height=Oe,Te.getContext("2d").drawImage(F,0,0,fe,Oe),Mt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+fe+"x"+Oe+")."),Te}else return"data"in F&&Mt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),F;return F}function x(F){return F.generateMipmaps}function S(F){o.generateMipmap(F)}function A(F){return F.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?o.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function b(F,w,Y,he,pe=!1){if(F!==null){if(o[F]!==void 0)return o[F];Mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let fe=w;if(w===o.RED&&(Y===o.FLOAT&&(fe=o.R32F),Y===o.HALF_FLOAT&&(fe=o.R16F),Y===o.UNSIGNED_BYTE&&(fe=o.R8)),w===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(fe=o.R8UI),Y===o.UNSIGNED_SHORT&&(fe=o.R16UI),Y===o.UNSIGNED_INT&&(fe=o.R32UI),Y===o.BYTE&&(fe=o.R8I),Y===o.SHORT&&(fe=o.R16I),Y===o.INT&&(fe=o.R32I)),w===o.RG&&(Y===o.FLOAT&&(fe=o.RG32F),Y===o.HALF_FLOAT&&(fe=o.RG16F),Y===o.UNSIGNED_BYTE&&(fe=o.RG8)),w===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(fe=o.RG8UI),Y===o.UNSIGNED_SHORT&&(fe=o.RG16UI),Y===o.UNSIGNED_INT&&(fe=o.RG32UI),Y===o.BYTE&&(fe=o.RG8I),Y===o.SHORT&&(fe=o.RG16I),Y===o.INT&&(fe=o.RG32I)),w===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),Y===o.UNSIGNED_INT&&(fe=o.RGB32UI),Y===o.BYTE&&(fe=o.RGB8I),Y===o.SHORT&&(fe=o.RGB16I),Y===o.INT&&(fe=o.RGB32I)),w===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),Y===o.UNSIGNED_INT&&(fe=o.RGBA32UI),Y===o.BYTE&&(fe=o.RGBA8I),Y===o.SHORT&&(fe=o.RGBA16I),Y===o.INT&&(fe=o.RGBA32I)),w===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(fe=o.R11F_G11F_B10F)),w===o.RGBA){const Oe=pe?vd:Ht.getTransfer(he);Y===o.FLOAT&&(fe=o.RGBA32F),Y===o.HALF_FLOAT&&(fe=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(fe=Oe===Qt?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function C(F,w){let Y;return F?w===null||w===ls||w===Qu?Y=o.DEPTH24_STENCIL8:w===ts?Y=o.DEPTH32F_STENCIL8:w===Zu&&(Y=o.DEPTH24_STENCIL8,Mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ls||w===Qu?Y=o.DEPTH_COMPONENT24:w===ts?Y=o.DEPTH_COMPONENT32F:w===Zu&&(Y=o.DEPTH_COMPONENT16),Y}function L(F,w){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==ei&&F.minFilter!==hi?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function I(F){const w=F.target;w.removeEventListener("dispose",I),T(w),w.isVideoTexture&&p.delete(w)}function N(F){const w=F.target;w.removeEventListener("dispose",N),W(w)}function T(F){const w=n.get(F);if(w.__webglInit===void 0)return;const Y=F.source,he=g.get(Y);if(he){const pe=he[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&D(F),Object.keys(he).length===0&&g.delete(Y)}n.remove(F)}function D(F){const w=n.get(F);o.deleteTexture(w.__webglTexture);const Y=F.source,he=g.get(Y);delete he[w.__cacheKey],u.memory.textures--}function W(F){const w=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let pe=0;pe<w.__webglFramebuffer[he].length;pe++)o.deleteFramebuffer(w.__webglFramebuffer[he][pe]);else o.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)o.deleteFramebuffer(w.__webglFramebuffer[he]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=F.textures;for(let he=0,pe=Y.length;he<pe;he++){const fe=n.get(Y[he]);fe.__webglTexture&&(o.deleteTexture(fe.__webglTexture),u.memory.textures--),n.remove(Y[he])}n.remove(F)}let k=0;function H(){k=0}function K(){const F=k;return F>=r.maxTextures&&Mt("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),k+=1,F}function ee(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function Z(F,w){const Y=n.get(F);if(F.isVideoTexture&&Tt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Y.__version!==F.version){const he=F.image;if(he===null)Mt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)Mt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Y,F,w);return}}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+w)}function Q(F,w){const Y=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){ne(Y,F,w);return}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+w)}function V(F,w){const Y=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){ne(Y,F,w);return}t.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+w)}function q(F,w){const Y=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Y.__version!==F.version){me(Y,F,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+w)}const te={[Im]:o.REPEAT,[Rs]:o.CLAMP_TO_EDGE,[Um]:o.MIRRORED_REPEAT},U={[ei]:o.NEAREST,[gw]:o.NEAREST_MIPMAP_NEAREST,[ff]:o.NEAREST_MIPMAP_LINEAR,[hi]:o.LINEAR,[Ap]:o.LINEAR_MIPMAP_NEAREST,[ia]:o.LINEAR_MIPMAP_LINEAR},O={[yw]:o.NEVER,[ww]:o.ALWAYS,[Sw]:o.LESS,[e_]:o.LEQUAL,[Mw]:o.EQUAL,[t_]:o.GEQUAL,[Ew]:o.GREATER,[Tw]:o.NOTEQUAL};function J(F,w){if(w.type===ts&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===hi||w.magFilter===Ap||w.magFilter===ff||w.magFilter===ia||w.minFilter===hi||w.minFilter===Ap||w.minFilter===ff||w.minFilter===ia)&&Mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(F,o.TEXTURE_WRAP_S,te[w.wrapS]),o.texParameteri(F,o.TEXTURE_WRAP_T,te[w.wrapT]),(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)&&o.texParameteri(F,o.TEXTURE_WRAP_R,te[w.wrapR]),o.texParameteri(F,o.TEXTURE_MAG_FILTER,U[w.magFilter]),o.texParameteri(F,o.TEXTURE_MIN_FILTER,U[w.minFilter]),w.compareFunction&&(o.texParameteri(F,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(F,o.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ei||w.minFilter!==ff&&w.minFilter!==ia||w.type===ts&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");o.texParameterf(F,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ce(F,w){let Y=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",I));const he=w.source;let pe=g.get(he);pe===void 0&&(pe={},g.set(he,pe));const fe=ee(w);if(fe!==F.__cacheKey){pe[fe]===void 0&&(pe[fe]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Y=!0),pe[fe].usedTimes++;const Oe=pe[F.__cacheKey];Oe!==void 0&&(pe[F.__cacheKey].usedTimes--,Oe.usedTimes===0&&D(w)),F.__cacheKey=fe,F.__webglTexture=pe[fe].texture}return Y}function be(F,w,Y){return Math.floor(Math.floor(F/Y)/w)}function ke(F,w,Y,he){const fe=F.updateRanges;if(fe.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,w.width,w.height,Y,he,w.data);else{fe.sort((Me,Ee)=>Me.start-Ee.start);let Oe=0;for(let Me=1;Me<fe.length;Me++){const Ee=fe[Oe],qe=fe[Me],Ye=Ee.start+Ee.count,Ne=be(qe.start,w.width,4),_t=be(Ee.start,w.width,4);qe.start<=Ye+1&&Ne===_t&&be(qe.start+qe.count-1,w.width,4)===Ne?Ee.count=Math.max(Ee.count,qe.start+qe.count-Ee.start):(++Oe,fe[Oe]=qe)}fe.length=Oe+1;const Te=o.getParameter(o.UNPACK_ROW_LENGTH),Qe=o.getParameter(o.UNPACK_SKIP_PIXELS),Xe=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,w.width);for(let Me=0,Ee=fe.length;Me<Ee;Me++){const qe=fe[Me],Ye=Math.floor(qe.start/4),Ne=Math.ceil(qe.count/4),_t=Ye%w.width,z=Math.floor(Ye/w.width),Ae=Ne,xe=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,_t),o.pixelStorei(o.UNPACK_SKIP_ROWS,z),t.texSubImage2D(o.TEXTURE_2D,0,_t,z,Ae,xe,Y,he,w.data)}F.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Te),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qe),o.pixelStorei(o.UNPACK_SKIP_ROWS,Xe)}}function ne(F,w,Y){let he=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=o.TEXTURE_3D);const pe=Ce(F,w),fe=w.source;t.bindTexture(he,F.__webglTexture,o.TEXTURE0+Y);const Oe=n.get(fe);if(fe.version!==Oe.__version||pe===!0){t.activeTexture(o.TEXTURE0+Y);const Te=Ht.getPrimaries(Ht.workingColorSpace),Qe=w.colorSpace===po?null:Ht.getPrimaries(w.colorSpace),Xe=w.colorSpace===po||Te===Qe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Me=E(w.image,!1,r.maxTextureSize);Me=ut(w,Me);const Ee=a.convert(w.format,w.colorSpace),qe=a.convert(w.type);let Ye=b(w.internalFormat,Ee,qe,w.colorSpace,w.isVideoTexture);J(he,w);let Ne;const _t=w.mipmaps,z=w.isVideoTexture!==!0,Ae=Oe.__version===void 0||pe===!0,xe=fe.dataReady,Pe=L(w,Me);if(w.isDepthTexture)Ye=C(w.format===ra,w.type),Ae&&(z?t.texStorage2D(o.TEXTURE_2D,1,Ye,Me.width,Me.height):t.texImage2D(o.TEXTURE_2D,0,Ye,Me.width,Me.height,0,Ee,qe,null));else if(w.isDataTexture)if(_t.length>0){z&&Ae&&t.texStorage2D(o.TEXTURE_2D,Pe,Ye,_t[0].width,_t[0].height);for(let ve=0,de=_t.length;ve<de;ve++)Ne=_t[ve],z?xe&&t.texSubImage2D(o.TEXTURE_2D,ve,0,0,Ne.width,Ne.height,Ee,qe,Ne.data):t.texImage2D(o.TEXTURE_2D,ve,Ye,Ne.width,Ne.height,0,Ee,qe,Ne.data);w.generateMipmaps=!1}else z?(Ae&&t.texStorage2D(o.TEXTURE_2D,Pe,Ye,Me.width,Me.height),xe&&ke(w,Me,Ee,qe)):t.texImage2D(o.TEXTURE_2D,0,Ye,Me.width,Me.height,0,Ee,qe,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){z&&Ae&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,Ye,_t[0].width,_t[0].height,Me.depth);for(let ve=0,de=_t.length;ve<de;ve++)if(Ne=_t[ve],w.format!==Hr)if(Ee!==null)if(z){if(xe)if(w.layerUpdates.size>0){const je=Ux(Ne.width,Ne.height,w.format,w.type);for(const at of w.layerUpdates){const Ft=Ne.data.subarray(at*je/Ne.data.BYTES_PER_ELEMENT,(at+1)*je/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,at,Ne.width,Ne.height,1,Ee,Ft)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,0,Ne.width,Ne.height,Me.depth,Ee,Ne.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ve,Ye,Ne.width,Ne.height,Me.depth,0,Ne.data,0,0);else Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?xe&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,0,Ne.width,Ne.height,Me.depth,Ee,qe,Ne.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ve,Ye,Ne.width,Ne.height,Me.depth,0,Ee,qe,Ne.data)}else{z&&Ae&&t.texStorage2D(o.TEXTURE_2D,Pe,Ye,_t[0].width,_t[0].height);for(let ve=0,de=_t.length;ve<de;ve++)Ne=_t[ve],w.format!==Hr?Ee!==null?z?xe&&t.compressedTexSubImage2D(o.TEXTURE_2D,ve,0,0,Ne.width,Ne.height,Ee,Ne.data):t.compressedTexImage2D(o.TEXTURE_2D,ve,Ye,Ne.width,Ne.height,0,Ne.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?xe&&t.texSubImage2D(o.TEXTURE_2D,ve,0,0,Ne.width,Ne.height,Ee,qe,Ne.data):t.texImage2D(o.TEXTURE_2D,ve,Ye,Ne.width,Ne.height,0,Ee,qe,Ne.data)}else if(w.isDataArrayTexture)if(z){if(Ae&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,Ye,Me.width,Me.height,Me.depth),xe)if(w.layerUpdates.size>0){const ve=Ux(Me.width,Me.height,w.format,w.type);for(const de of w.layerUpdates){const je=Me.data.subarray(de*ve/Me.data.BYTES_PER_ELEMENT,(de+1)*ve/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,Me.width,Me.height,1,Ee,qe,je)}w.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ee,qe,Me.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Ye,Me.width,Me.height,Me.depth,0,Ee,qe,Me.data);else if(w.isData3DTexture)z?(Ae&&t.texStorage3D(o.TEXTURE_3D,Pe,Ye,Me.width,Me.height,Me.depth),xe&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ee,qe,Me.data)):t.texImage3D(o.TEXTURE_3D,0,Ye,Me.width,Me.height,Me.depth,0,Ee,qe,Me.data);else if(w.isFramebufferTexture){if(Ae)if(z)t.texStorage2D(o.TEXTURE_2D,Pe,Ye,Me.width,Me.height);else{let ve=Me.width,de=Me.height;for(let je=0;je<Pe;je++)t.texImage2D(o.TEXTURE_2D,je,Ye,ve,de,0,Ee,qe,null),ve>>=1,de>>=1}}else if(_t.length>0){if(z&&Ae){const ve=He(_t[0]);t.texStorage2D(o.TEXTURE_2D,Pe,Ye,ve.width,ve.height)}for(let ve=0,de=_t.length;ve<de;ve++)Ne=_t[ve],z?xe&&t.texSubImage2D(o.TEXTURE_2D,ve,0,0,Ee,qe,Ne):t.texImage2D(o.TEXTURE_2D,ve,Ye,Ee,qe,Ne);w.generateMipmaps=!1}else if(z){if(Ae){const ve=He(Me);t.texStorage2D(o.TEXTURE_2D,Pe,Ye,ve.width,ve.height)}xe&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,qe,Me)}else t.texImage2D(o.TEXTURE_2D,0,Ye,Ee,qe,Me);x(w)&&S(he),Oe.__version=fe.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function me(F,w,Y){if(w.image.length!==6)return;const he=Ce(F,w),pe=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,F.__webglTexture,o.TEXTURE0+Y);const fe=n.get(pe);if(pe.version!==fe.__version||he===!0){t.activeTexture(o.TEXTURE0+Y);const Oe=Ht.getPrimaries(Ht.workingColorSpace),Te=w.colorSpace===po?null:Ht.getPrimaries(w.colorSpace),Qe=w.colorSpace===po||Oe===Te?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const Xe=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Ee=[];for(let de=0;de<6;de++)!Xe&&!Me?Ee[de]=E(w.image[de],!0,r.maxCubemapSize):Ee[de]=Me?w.image[de].image:w.image[de],Ee[de]=ut(w,Ee[de]);const qe=Ee[0],Ye=a.convert(w.format,w.colorSpace),Ne=a.convert(w.type),_t=b(w.internalFormat,Ye,Ne,w.colorSpace),z=w.isVideoTexture!==!0,Ae=fe.__version===void 0||he===!0,xe=pe.dataReady;let Pe=L(w,qe);J(o.TEXTURE_CUBE_MAP,w);let ve;if(Xe){z&&Ae&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,_t,qe.width,qe.height);for(let de=0;de<6;de++){ve=Ee[de].mipmaps;for(let je=0;je<ve.length;je++){const at=ve[je];w.format!==Hr?Ye!==null?z?xe&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,je,0,0,at.width,at.height,Ye,at.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,je,_t,at.width,at.height,0,at.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?xe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,je,0,0,at.width,at.height,Ye,Ne,at.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,je,_t,at.width,at.height,0,Ye,Ne,at.data)}}}else{if(ve=w.mipmaps,z&&Ae){ve.length>0&&Pe++;const de=He(Ee[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,_t,de.width,de.height)}for(let de=0;de<6;de++)if(Me){z?xe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ee[de].width,Ee[de].height,Ye,Ne,Ee[de].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,_t,Ee[de].width,Ee[de].height,0,Ye,Ne,Ee[de].data);for(let je=0;je<ve.length;je++){const Ft=ve[je].image[de].image;z?xe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,je+1,0,0,Ft.width,Ft.height,Ye,Ne,Ft.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,je+1,_t,Ft.width,Ft.height,0,Ye,Ne,Ft.data)}}else{z?xe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ye,Ne,Ee[de]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,_t,Ye,Ne,Ee[de]);for(let je=0;je<ve.length;je++){const at=ve[je];z?xe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,je+1,0,0,Ye,Ne,at.image[de]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,je+1,_t,Ye,Ne,at.image[de])}}}x(w)&&S(o.TEXTURE_CUBE_MAP),fe.__version=pe.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function ge(F,w,Y,he,pe,fe){const Oe=a.convert(Y.format,Y.colorSpace),Te=a.convert(Y.type),Qe=b(Y.internalFormat,Oe,Te,Y.colorSpace),Xe=n.get(w),Me=n.get(Y);if(Me.__renderTarget=w,!Xe.__hasExternalTextures){const Ee=Math.max(1,w.width>>fe),qe=Math.max(1,w.height>>fe);pe===o.TEXTURE_3D||pe===o.TEXTURE_2D_ARRAY?t.texImage3D(pe,fe,Qe,Ee,qe,w.depth,0,Oe,Te,null):t.texImage2D(pe,fe,Qe,Ee,qe,0,Oe,Te,null)}t.bindFramebuffer(o.FRAMEBUFFER,F),Bt(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,pe,Me.__webglTexture,0,G(w)):(pe===o.TEXTURE_2D||pe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,pe,Me.__webglTexture,fe),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(F,w,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,F),w.depthBuffer){const he=w.depthTexture,pe=he&&he.isDepthTexture?he.type:null,fe=C(w.stencilBuffer,pe),Oe=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Bt(w)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(w),fe,w.width,w.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(w),fe,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,fe,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Oe,o.RENDERBUFFER,F)}else{const he=w.textures;for(let pe=0;pe<he.length;pe++){const fe=he[pe],Oe=a.convert(fe.format,fe.colorSpace),Te=a.convert(fe.type),Qe=b(fe.internalFormat,Oe,Te,fe.colorSpace);Bt(w)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(w),Qe,w.width,w.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(w),Qe,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Qe,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ge(F,w,Y){const he=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(o.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=n.get(w.depthTexture);if(pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,w.depthTexture.addEventListener("dispose",I)),pe.__webglTexture===void 0){pe.__webglTexture=o.createTexture(),t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),J(o.TEXTURE_CUBE_MAP,w.depthTexture);const Xe=a.convert(w.depthTexture.format),Me=a.convert(w.depthTexture.type);let Ee;w.depthTexture.format===Fs?Ee=o.DEPTH_COMPONENT24:w.depthTexture.format===ra&&(Ee=o.DEPTH24_STENCIL8);for(let qe=0;qe<6;qe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Ee,w.width,w.height,0,Xe,Me,null)}}else Z(w.depthTexture,0);const fe=pe.__webglTexture,Oe=G(w),Te=he?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,Qe=w.depthTexture.format===ra?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(w.depthTexture.format===Fs)Bt(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Qe,Te,fe,0,Oe):o.framebufferTexture2D(o.FRAMEBUFFER,Qe,Te,fe,0);else if(w.depthTexture.format===ra)Bt(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Qe,Te,fe,0,Oe):o.framebufferTexture2D(o.FRAMEBUFFER,Qe,Te,fe,0);else throw new Error("Unknown depthTexture format")}function Ze(F){const w=n.get(F),Y=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const he=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",pe)};he.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=he}if(F.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let he=0;he<6;he++)Ge(w.__webglFramebuffer[he],F,he);else{const he=F.texture.mipmaps;he&&he.length>0?Ge(w.__webglFramebuffer[0],F,0):Ge(w.__webglFramebuffer,F,0)}else if(Y){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=o.createRenderbuffer(),Le(w.__webglDepthbuffer[he],F,!1);else{const pe=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,fe)}}else{const he=F.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),Le(w.__webglDepthbuffer,F,!1);else{const pe=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,fe)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function It(F,w,Y){const he=n.get(F);w!==void 0&&ge(he.__webglFramebuffer,F,F.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&Ze(F)}function We(F){const w=F.texture,Y=n.get(F),he=n.get(w);F.addEventListener("dispose",N);const pe=F.textures,fe=F.isWebGLCubeRenderTarget===!0,Oe=pe.length>1;if(Oe||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=w.version,u.memory.textures++),fe){Y.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[Te]=[];for(let Qe=0;Qe<w.mipmaps.length;Qe++)Y.__webglFramebuffer[Te][Qe]=o.createFramebuffer()}else Y.__webglFramebuffer[Te]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Te=0;Te<w.mipmaps.length;Te++)Y.__webglFramebuffer[Te]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(Oe)for(let Te=0,Qe=pe.length;Te<Qe;Te++){const Xe=n.get(pe[Te]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=o.createTexture(),u.memory.textures++)}if(F.samples>0&&Bt(F)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Te=0;Te<pe.length;Te++){const Qe=pe[Te];Y.__webglColorRenderbuffer[Te]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[Te]);const Xe=a.convert(Qe.format,Qe.colorSpace),Me=a.convert(Qe.type),Ee=b(Qe.internalFormat,Xe,Me,Qe.colorSpace,F.isXRRenderTarget===!0),qe=G(F);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Ee,F.width,F.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.RENDERBUFFER,Y.__webglColorRenderbuffer[Te])}o.bindRenderbuffer(o.RENDERBUFFER,null),F.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Le(Y.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(fe){t.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),J(o.TEXTURE_CUBE_MAP,w);for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0)for(let Qe=0;Qe<w.mipmaps.length;Qe++)ge(Y.__webglFramebuffer[Te][Qe],F,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe);else ge(Y.__webglFramebuffer[Te],F,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);x(w)&&S(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Te=0,Qe=pe.length;Te<Qe;Te++){const Xe=pe[Te],Me=n.get(Xe);let Ee=o.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ee=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ee,Me.__webglTexture),J(Ee,Xe),ge(Y.__webglFramebuffer,F,Xe,o.COLOR_ATTACHMENT0+Te,Ee,0),x(Xe)&&S(Ee)}t.unbindTexture()}else{let Te=o.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Te=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Te,he.__webglTexture),J(Te,w),w.mipmaps&&w.mipmaps.length>0)for(let Qe=0;Qe<w.mipmaps.length;Qe++)ge(Y.__webglFramebuffer[Qe],F,w,o.COLOR_ATTACHMENT0,Te,Qe);else ge(Y.__webglFramebuffer,F,w,o.COLOR_ATTACHMENT0,Te,0);x(w)&&S(Te),t.unbindTexture()}F.depthBuffer&&Ze(F)}function ft(F){const w=F.textures;for(let Y=0,he=w.length;Y<he;Y++){const pe=w[Y];if(x(pe)){const fe=A(F),Oe=n.get(pe).__webglTexture;t.bindTexture(fe,Oe),S(fe),t.unbindTexture()}}}const Et=[],lt=[];function se(F){if(F.samples>0){if(Bt(F)===!1){const w=F.textures,Y=F.width,he=F.height;let pe=o.COLOR_BUFFER_BIT;const fe=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Oe=n.get(F),Te=w.length>1;if(Te)for(let Xe=0;Xe<w.length;Xe++)t.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Qe=F.texture.mipmaps;Qe&&Qe.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Xe=0;Xe<w.length;Xe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(pe|=o.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(pe|=o.STENCIL_BUFFER_BIT)),Te){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[Xe]);const Me=n.get(w[Xe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Me,0)}o.blitFramebuffer(0,0,Y,he,0,0,Y,he,pe,o.NEAREST),d===!0&&(Et.length=0,lt.length=0,Et.push(o.COLOR_ATTACHMENT0+Xe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Et.push(fe),lt.push(fe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,lt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Te)for(let Xe=0;Xe<w.length;Xe++){t.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[Xe]);const Me=n.get(w[Xe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,Me,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&d){const w=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function G(F){return Math.min(r.maxSamples,F.samples)}function Bt(F){const w=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(F){const w=u.render.frame;p.get(F)!==w&&(p.set(F,w),F.update())}function ut(F,w){const Y=F.colorSpace,he=F.format,pe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Y!==wl&&Y!==po&&(Ht.getTransfer(Y)===Qt?(he!==Hr||pe!==Tr)&&Mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",Y)),w}function He(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=V,this.setTextureCube=q,this.rebindTextures=It,this.setupRenderTarget=We,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function KP(o,e){function t(n,r=po){let a;const u=Ht.getTransfer(r);if(n===Tr)return o.UNSIGNED_BYTE;if(n===$g)return o.UNSIGNED_SHORT_4_4_4_4;if(n===Kg)return o.UNSIGNED_SHORT_5_5_5_1;if(n===IS)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===US)return o.UNSIGNED_INT_10F_11F_11F_REV;if(n===LS)return o.BYTE;if(n===NS)return o.SHORT;if(n===Zu)return o.UNSIGNED_SHORT;if(n===qg)return o.INT;if(n===ls)return o.UNSIGNED_INT;if(n===ts)return o.FLOAT;if(n===Us)return o.HALF_FLOAT;if(n===FS)return o.ALPHA;if(n===OS)return o.RGB;if(n===Hr)return o.RGBA;if(n===Fs)return o.DEPTH_COMPONENT;if(n===ra)return o.DEPTH_STENCIL;if(n===kS)return o.RED;if(n===Zg)return o.RED_INTEGER;if(n===Tl)return o.RG;if(n===Qg)return o.RG_INTEGER;if(n===Jg)return o.RGBA_INTEGER;if(n===ed||n===td||n===nd||n===id)if(u===Qt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ed)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===td)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===id)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ed)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===td)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===id)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fm||n===Om||n===km||n===Bm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Fm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Om)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===km)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zm||n===Vm||n===Hm||n===Gm||n===Wm||n===Xm||n===Ym)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===zm||n===Vm)return u===Qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Hm)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gm)return a.COMPRESSED_R11_EAC;if(n===Wm)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Xm)return a.COMPRESSED_RG11_EAC;if(n===Ym)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jm||n===qm||n===$m||n===Km||n===Zm||n===Qm||n===Jm||n===eg||n===tg||n===ng||n===ig||n===rg||n===sg||n===og)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===jm)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qm)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$m)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Km)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zm)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qm)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jm)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ng)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ig)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===og)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ag||n===lg||n===ug)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ag)return u===Qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ug)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cg||n===fg||n===dg||n===hg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===cg)return a.COMPRESSED_RED_RGTC1_EXT;if(n===fg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qu?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}const ZP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new KS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new us({vertexShader:ZP,fragmentShader:QP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ks(new Ld(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e3 extends Rl{constructor(e,t){super();const n=this;let r=null,a=1,u=null,c="local-floor",d=1,h=null,p=null,v=null,g=null,_=null,M=null;const E=typeof XRWebGLBinding<"u",x=new JP,S={},A=t.getContextAttributes();let b=null,C=null;const L=[],I=[],N=new en;let T=null;const D=new Sr;D.viewport=new Pn;const W=new Sr;W.viewport=new Pn;const k=[D,W],H=new dA;let K=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=L[ne];return me===void 0&&(me=new Ip,L[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=L[ne];return me===void 0&&(me=new Ip,L[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=L[ne];return me===void 0&&(me=new Ip,L[ne]=me),me.getHandSpace()};function Z(ne){const me=I.indexOf(ne.inputSource);if(me===-1)return;const ge=L[me];ge!==void 0&&(ge.update(ne.inputSource,ne.frame,h||u),ge.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Q(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",V);for(let ne=0;ne<L.length;ne++){const me=I[ne];me!==null&&(I[ne]=null,L[ne].disconnect(me))}K=null,ee=null,x.reset();for(const ne in S)delete S[ne];e.setRenderTarget(b),_=null,g=null,v=null,r=null,C=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){a=ne,n.isPresenting===!0&&Mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){c=ne,n.isPresenting===!0&&Mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(r,t)),v},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",V),A.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(N),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Le=null,Ge=null;A.depth&&(Ge=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=A.stencil?ra:Fs,Le=A.stencil?Qu:ls);const Ze={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:a};v=this.getBinding(),g=v.createProjectionLayer(Ze),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new ss(g.textureWidth,g.textureHeight,{format:Hr,type:Tr,depthTexture:new Ju(g.textureWidth,g.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ge={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),C=new ss(_.framebufferWidth,_.framebufferHeight,{format:Hr,type:Tr,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await r.requestReferenceSpace(c),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(ne){for(let me=0;me<ne.removed.length;me++){const ge=ne.removed[me],Le=I.indexOf(ge);Le>=0&&(I[Le]=null,L[Le].disconnect(ge))}for(let me=0;me<ne.added.length;me++){const ge=ne.added[me];let Le=I.indexOf(ge);if(Le===-1){for(let Ze=0;Ze<L.length;Ze++)if(Ze>=I.length){I.push(ge),Le=Ze;break}else if(I[Ze]===null){I[Ze]=ge,Le=Ze;break}if(Le===-1)break}const Ge=L[Le];Ge&&Ge.connect(ge)}}const q=new ue,te=new ue;function U(ne,me,ge){q.setFromMatrixPosition(me.matrixWorld),te.setFromMatrixPosition(ge.matrixWorld);const Le=q.distanceTo(te),Ge=me.projectionMatrix.elements,Ze=ge.projectionMatrix.elements,It=Ge[14]/(Ge[10]-1),We=Ge[14]/(Ge[10]+1),ft=(Ge[9]+1)/Ge[5],Et=(Ge[9]-1)/Ge[5],lt=(Ge[8]-1)/Ge[0],se=(Ze[8]+1)/Ze[0],G=It*lt,Bt=It*se,Tt=Le/(-lt+se),ut=Tt*-lt;if(me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ut),ne.translateZ(Tt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ge[10]===-1)ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const He=It+Tt,F=We+Tt,w=G-ut,Y=Bt+(Le-ut),he=ft*We/F*He,pe=Et*We/F*He;ne.projectionMatrix.makePerspective(w,Y,he,pe,He,F),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function O(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let me=ne.near,ge=ne.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(ge=x.depthFar)),H.near=W.near=D.near=me,H.far=W.far=D.far=ge,(K!==H.near||ee!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),K=H.near,ee=H.far),H.layers.mask=ne.layers.mask|6,D.layers.mask=H.layers.mask&-5,W.layers.mask=H.layers.mask&-3;const Le=ne.parent,Ge=H.cameras;O(H,Le);for(let Ze=0;Ze<Ge.length;Ze++)O(Ge[Ze],Le);Ge.length===2?U(H,D,W):H.projectionMatrix.copy(D.projectionMatrix),J(ne,H,Le)};function J(ne,me,ge){ge===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(ge.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=pg*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(g===null&&_===null))return d},this.setFoveation=function(ne){d=ne,g!==null&&(g.fixedFoveation=ne),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(H)},this.getCameraTexture=function(ne){return S[ne]};let Ce=null;function be(ne,me){if(p=me.getViewerPose(h||u),M=me,p!==null){const ge=p.views;_!==null&&(e.setRenderTargetFramebuffer(C,_.framebuffer),e.setRenderTarget(C));let Le=!1;ge.length!==H.cameras.length&&(H.cameras.length=0,Le=!0);for(let We=0;We<ge.length;We++){const ft=ge[We];let Et=null;if(_!==null)Et=_.getViewport(ft);else{const se=v.getViewSubImage(g,ft);Et=se.viewport,We===0&&(e.setRenderTargetTextures(C,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(C))}let lt=k[We];lt===void 0&&(lt=new Sr,lt.layers.enable(We),lt.viewport=new Pn,k[We]=lt),lt.matrix.fromArray(ft.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(ft.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Et.x,Et.y,Et.width,Et.height),We===0&&(H.matrix.copy(lt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Le===!0&&H.cameras.push(lt)}const Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){v=n.getBinding();const We=v.getDepthInformation(ge[0]);We&&We.isValid&&We.texture&&x.init(We,r.renderState)}if(Ge&&Ge.includes("camera-access")&&E){e.state.unbindTexture(),v=n.getBinding();for(let We=0;We<ge.length;We++){const ft=ge[We].camera;if(ft){let Et=S[ft];Et||(Et=new KS,S[ft]=Et);const lt=v.getCameraImage(ft);Et.sourceTexture=lt}}}}for(let ge=0;ge<L.length;ge++){const Le=I[ge],Ge=L[ge];Le!==null&&Ge!==void 0&&Ge.update(Le,me,h||u)}Ce&&Ce(ne,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),M=null}const ke=new eM;ke.setAnimationLoop(be),this.setAnimationLoop=function(ne){Ce=ne},this.dispose=function(){}}}const $o=new Os,t3=new En;function n3(o,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function n(x,S){S.color.getRGB(x.fogColor.value,ZS(o)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function r(x,S,A,b,C){S.isMeshBasicMaterial?a(x,S):S.isMeshLambertMaterial?(a(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(x,S),v(x,S)):S.isMeshPhongMaterial?(a(x,S),p(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(x,S),g(x,S),S.isMeshPhysicalMaterial&&_(x,S,C)):S.isMeshMatcapMaterial?(a(x,S),M(x,S)):S.isMeshDepthMaterial?a(x,S):S.isMeshDistanceMaterial?(a(x,S),E(x,S)):S.isMeshNormalMaterial?a(x,S):S.isLineBasicMaterial?(u(x,S),S.isLineDashedMaterial&&c(x,S)):S.isPointsMaterial?d(x,S,A,b):S.isSpriteMaterial?h(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Wi&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Wi&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const A=e.get(S),b=A.envMap,C=A.envMapRotation;b&&(x.envMap.value=b,$o.copy(C),$o.x*=-1,$o.y*=-1,$o.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&($o.y*=-1,$o.z*=-1),x.envMapRotation.value.setFromMatrix4(t3.makeRotationFromEuler($o)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function u(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function c(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function d(x,S,A,b){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*A,x.scale.value=b*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function h(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function v(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function g(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function _(x,S,A){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Wi&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,S){S.matcap&&(x.matcap.value=S.matcap)}function E(x,S){const A=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function i3(o,e,t,n){let r={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,b){const C=b.program;n.uniformBlockBinding(A,C)}function h(A,b){let C=r[A.id];C===void 0&&(M(A),C=p(A),r[A.id]=C,A.addEventListener("dispose",x));const L=b.program;n.updateUBOMapping(A,L);const I=e.render.frame;a[A.id]!==I&&(g(A),a[A.id]=I)}function p(A){const b=v();A.__bindingPointIndex=b;const C=o.createBuffer(),L=A.__size,I=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,L,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,b,C),C}function v(){for(let A=0;A<c;A++)if(u.indexOf(A)===-1)return u.push(A),A;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const b=r[A.id],C=A.uniforms,L=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,b);for(let I=0,N=C.length;I<N;I++){const T=Array.isArray(C[I])?C[I]:[C[I]];for(let D=0,W=T.length;D<W;D++){const k=T[D];if(_(k,I,D,L)===!0){const H=k.__offset,K=Array.isArray(k.value)?k.value:[k.value];let ee=0;for(let Z=0;Z<K.length;Z++){const Q=K[Z],V=E(Q);typeof Q=="number"||typeof Q=="boolean"?(k.__data[0]=Q,o.bufferSubData(o.UNIFORM_BUFFER,H+ee,k.__data)):Q.isMatrix3?(k.__data[0]=Q.elements[0],k.__data[1]=Q.elements[1],k.__data[2]=Q.elements[2],k.__data[3]=0,k.__data[4]=Q.elements[3],k.__data[5]=Q.elements[4],k.__data[6]=Q.elements[5],k.__data[7]=0,k.__data[8]=Q.elements[6],k.__data[9]=Q.elements[7],k.__data[10]=Q.elements[8],k.__data[11]=0):(Q.toArray(k.__data,ee),ee+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,H,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function _(A,b,C,L){const I=A.value,N=b+"_"+C;if(L[N]===void 0)return typeof I=="number"||typeof I=="boolean"?L[N]=I:L[N]=I.clone(),!0;{const T=L[N];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return L[N]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function M(A){const b=A.uniforms;let C=0;const L=16;for(let N=0,T=b.length;N<T;N++){const D=Array.isArray(b[N])?b[N]:[b[N]];for(let W=0,k=D.length;W<k;W++){const H=D[W],K=Array.isArray(H.value)?H.value:[H.value];for(let ee=0,Z=K.length;ee<Z;ee++){const Q=K[ee],V=E(Q),q=C%L,te=q%V.boundary,U=q+te;C+=te,U!==0&&L-U<V.storage&&(C+=L-U),H.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=C,C+=V.storage}}}const I=C%L;return I>0&&(C+=L-I),A.__size=C,A.__cache={},this}function E(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?Mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Mt("WebGLRenderer: Unsupported uniform value type.",A),b}function x(A){const b=A.target;b.removeEventListener("dispose",x);const C=u.indexOf(b.__bindingPointIndex);u.splice(C,1),o.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function S(){for(const A in r)o.deleteBuffer(r[A]);u=[],r={},a={}}return{bind:d,update:h,dispose:S}}const r3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $r=null;function s3(){return $r===null&&($r=new Kw(r3,16,16,Tl,Us),$r.name="DFG_LUT",$r.minFilter=hi,$r.magFilter=hi,$r.wrapS=Rs,$r.wrapT=Rs,$r.generateMipmaps=!1,$r.needsUpdate=!0),$r}class o3{constructor(e={}){const{canvas:t=Cw(),context:n=null,depth:r=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:_=Tr}=e;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=u;const E=_,x=new Set([Jg,Qg,Zg]),S=new Set([Tr,ls,Zu,Qu,$g,Kg]),A=new Uint32Array(4),b=new Int32Array(4);let C=null,L=null;const I=[],N=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let W=!1;this._outputColorSpace=yr;let k=0,H=0,K=null,ee=-1,Z=null;const Q=new Pn,V=new Pn;let q=null;const te=new $t(0);let U=0,O=t.width,J=t.height,Ce=1,be=null,ke=null;const ne=new Pn(0,0,O,J),me=new Pn(0,0,O,J);let ge=!1;const Le=new YS;let Ge=!1,Ze=!1;const It=new En,We=new ue,ft=new Pn,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function se(){return K===null?Ce:1}let G=n;function Bt(P,j){return t.getContext(P,j)}try{const P={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jg}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Ft,!1),G===null){const j="webgl2";if(G=Bt(j,P),G===null)throw Bt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw Wt("WebGLRenderer: "+P.message),P}let Tt,ut,He,F,w,Y,he,pe,fe,Oe,Te,Qe,Xe,Me,Ee,qe,Ye,Ne,_t,z,Ae,xe,Pe;function ve(){Tt=new ob(G),Tt.init(),Ae=new KP(G,Tt),ut=new QR(G,Tt,e,Ae),He=new qP(G,Tt),ut.reversedDepthBuffer&&g&&He.buffers.depth.setReversed(!0),F=new ub(G),w=new IP,Y=new $P(G,Tt,He,w,ut,Ae,F),he=new sb(D),pe=new pA(G),xe=new KR(G,pe),fe=new ab(G,pe,F,xe),Oe=new fb(G,fe,pe,xe,F),Ne=new cb(G,ut,Y),Ee=new JR(w),Te=new NP(D,he,Tt,ut,xe,Ee),Qe=new n3(D,w),Xe=new FP,Me=new HP(Tt),Ye=new $R(D,he,He,Oe,M,d),qe=new jP(D,Oe,ut),Pe=new i3(G,F,ut,He),_t=new ZR(G,Tt,F),z=new lb(G,Tt,F),F.programs=Te.programs,D.capabilities=ut,D.extensions=Tt,D.properties=w,D.renderLists=Xe,D.shadowMap=qe,D.state=He,D.info=F}ve(),E!==Tr&&(T=new hb(E,t.width,t.height,r,a));const de=new e3(D,G);this.xr=de,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const P=Tt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Tt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(P){P!==void 0&&(Ce=P,this.setSize(O,J,!1))},this.getSize=function(P){return P.set(O,J)},this.setSize=function(P,j,le=!0){if(de.isPresenting){Mt("WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,J=j,t.width=Math.floor(P*Ce),t.height=Math.floor(j*Ce),le===!0&&(t.style.width=P+"px",t.style.height=j+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(O*Ce,J*Ce).floor()},this.setDrawingBufferSize=function(P,j,le){O=P,J=j,Ce=le,t.width=Math.floor(P*le),t.height=Math.floor(j*le),this.setViewport(0,0,P,j)},this.setEffects=function(P){if(E===Tr){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let j=0;j<P.length;j++)if(P[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(Q)},this.getViewport=function(P){return P.copy(ne)},this.setViewport=function(P,j,le,oe){P.isVector4?ne.set(P.x,P.y,P.z,P.w):ne.set(P,j,le,oe),He.viewport(Q.copy(ne).multiplyScalar(Ce).round())},this.getScissor=function(P){return P.copy(me)},this.setScissor=function(P,j,le,oe){P.isVector4?me.set(P.x,P.y,P.z,P.w):me.set(P,j,le,oe),He.scissor(V.copy(me).multiplyScalar(Ce).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(P){He.setScissorTest(ge=P)},this.setOpaqueSort=function(P){be=P},this.setTransparentSort=function(P){ke=P},this.getClearColor=function(P){return P.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(P=!0,j=!0,le=!0){let oe=0;if(P){let re=!1;if(K!==null){const Ie=K.texture.format;re=x.has(Ie)}if(re){const Ie=K.texture.type,Fe=S.has(Ie),De=Ye.getClearColor(),ze=Ye.getClearAlpha(),Ke=De.r,dt=De.g,wt=De.b;Fe?(A[0]=Ke,A[1]=dt,A[2]=wt,A[3]=ze,G.clearBufferuiv(G.COLOR,0,A)):(b[0]=Ke,b[1]=dt,b[2]=wt,b[3]=ze,G.clearBufferiv(G.COLOR,0,b))}else oe|=G.COLOR_BUFFER_BIT}j&&(oe|=G.DEPTH_BUFFER_BIT),le&&(oe|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&G.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Ft,!1),Ye.dispose(),Xe.dispose(),Me.dispose(),w.dispose(),he.dispose(),Oe.dispose(),xe.dispose(),Pe.dispose(),Te.dispose(),de.dispose(),de.removeEventListener("sessionstart",pt),de.removeEventListener("sessionend",on),vt.stop()};function je(P){P.preventDefault(),dx("WebGLRenderer: Context Lost."),W=!0}function at(){dx("WebGLRenderer: Context Restored."),W=!1;const P=F.autoReset,j=qe.enabled,le=qe.autoUpdate,oe=qe.needsUpdate,re=qe.type;ve(),F.autoReset=P,qe.enabled=j,qe.autoUpdate=le,qe.needsUpdate=oe,qe.type=re}function Ft(P){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Be(P){const j=P.target;j.removeEventListener("dispose",Be),nt(j)}function nt(P){xt(P),w.remove(P)}function xt(P){const j=w.get(P).programs;j!==void 0&&(j.forEach(function(le){Te.releaseProgram(le)}),P.isShaderMaterial&&Te.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,le,oe,re,Ie){j===null&&(j=Et);const Fe=re.isMesh&&re.matrixWorld.determinant()<0,De=mi(P,j,le,oe,re);He.setMaterial(oe,Fe);let ze=le.index,Ke=1;if(oe.wireframe===!0){if(ze=fe.getWireframeAttribute(le),ze===void 0)return;Ke=2}const dt=le.drawRange,wt=le.attributes.position;let ot=dt.start*Ke,jt=(dt.start+dt.count)*Ke;Ie!==null&&(ot=Math.max(ot,Ie.start*Ke),jt=Math.min(jt,(Ie.start+Ie.count)*Ke)),ze!==null?(ot=Math.max(ot,0),jt=Math.min(jt,ze.count)):wt!=null&&(ot=Math.max(ot,0),jt=Math.min(jt,wt.count));const an=jt-ot;if(an<0||an===1/0)return;xe.setup(re,oe,De,le,ze);let nn,zt=_t;if(ze!==null&&(nn=pe.get(ze),zt=z,zt.setIndex(nn)),re.isMesh)oe.wireframe===!0?(He.setLineWidth(oe.wireframeLinewidth*se()),zt.setMode(G.LINES)):zt.setMode(G.TRIANGLES);else if(re.isLine){let An=oe.linewidth;An===void 0&&(An=1),He.setLineWidth(An*se()),re.isLineSegments?zt.setMode(G.LINES):re.isLineLoop?zt.setMode(G.LINE_LOOP):zt.setMode(G.LINE_STRIP)}else re.isPoints?zt.setMode(G.POINTS):re.isSprite&&zt.setMode(G.TRIANGLES);if(re.isBatchedMesh)if(re._multiDrawInstances!==null)Sd("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount,re._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))zt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const An=re._multiDrawStarts,rt=re._multiDrawCounts,gi=re._multiDrawCount,Ut=ze?pe.get(ze).bytesPerElement:1,bi=w.get(oe).currentProgram.getUniforms();for(let Pi=0;Pi<gi;Pi++)bi.setValue(G,"_gl_DrawID",Pi),zt.render(An[Pi]/Ut,rt[Pi])}else if(re.isInstancedMesh)zt.renderInstances(ot,an,re.count);else if(le.isInstancedBufferGeometry){const An=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,rt=Math.min(le.instanceCount,An);zt.renderInstances(ot,an,rt)}else zt.render(ot,an)};function Ue(P,j,le){P.transparent===!0&&P.side===As&&P.forceSinglePass===!1?(P.side=Wi,P.needsUpdate=!0,Fn(P,j,le),P.side=Co,P.needsUpdate=!0,Fn(P,j,le),P.side=As):Fn(P,j,le)}this.compile=function(P,j,le=null){le===null&&(le=P),L=Me.get(le),L.init(j),N.push(L),le.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),P!==le&&P.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),L.setupLights();const oe=new Set;return P.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ie=re.material;if(Ie)if(Array.isArray(Ie))for(let Fe=0;Fe<Ie.length;Fe++){const De=Ie[Fe];Ue(De,le,re),oe.add(De)}else Ue(Ie,le,re),oe.add(Ie)}),L=N.pop(),oe},this.compileAsync=function(P,j,le=null){const oe=this.compile(P,j,le);return new Promise(re=>{function Ie(){if(oe.forEach(function(Fe){w.get(Fe).currentProgram.isReady()&&oe.delete(Fe)}),oe.size===0){re(P);return}setTimeout(Ie,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let ht=null;function ct(P){ht&&ht(P)}function pt(){vt.stop()}function on(){vt.start()}const vt=new eM;vt.setAnimationLoop(ct),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(P){ht=P,de.setAnimationLoop(P),P===null?vt.stop():vt.start()},de.addEventListener("sessionstart",pt),de.addEventListener("sessionend",on),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;const le=de.enabled===!0&&de.isPresenting===!0,oe=T!==null&&(K===null||le)&&T.begin(D,K);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(j),j=de.getCamera()),P.isScene===!0&&P.onBeforeRender(D,P,j,K),L=Me.get(P,N.length),L.init(j),N.push(L),It.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Le.setFromProjectionMatrix(It,ns,j.reversedDepth),Ze=this.localClippingEnabled,Ge=Ee.init(this.clippingPlanes,Ze),C=Xe.get(P,I.length),C.init(),I.push(C),de.enabled===!0&&de.isPresenting===!0){const Fe=D.xr.getDepthSensingMesh();Fe!==null&&Kt(Fe,j,-1/0,D.sortObjects)}Kt(P,j,0,D.sortObjects),C.finish(),D.sortObjects===!0&&C.sort(be,ke),lt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,lt&&Ye.addToRenderList(C,P),this.info.render.frame++,Ge===!0&&Ee.beginShadows();const re=L.state.shadowsArray;if(qe.render(re,P,j),Ge===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&T.hasRenderPass())===!1){const Fe=C.opaque,De=C.transmissive;if(L.setupLights(),j.isArrayCamera){const ze=j.cameras;if(De.length>0)for(let Ke=0,dt=ze.length;Ke<dt;Ke++){const wt=ze[Ke];tn(Fe,De,P,wt)}lt&&Ye.render(P);for(let Ke=0,dt=ze.length;Ke<dt;Ke++){const wt=ze[Ke];Tn(C,P,wt,wt.viewport)}}else De.length>0&&tn(Fe,De,P,j),lt&&Ye.render(P),Tn(C,P,j)}K!==null&&H===0&&(Y.updateMultisampleRenderTarget(K),Y.updateRenderTargetMipmap(K)),oe&&T.end(D),P.isScene===!0&&P.onAfterRender(D,P,j),xe.resetDefaultState(),ee=-1,Z=null,N.pop(),N.length>0?(L=N[N.length-1],Ge===!0&&Ee.setGlobalState(D.clippingPlanes,L.state.camera)):L=null,I.pop(),I.length>0?C=I[I.length-1]:C=null};function Kt(P,j,le,oe){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)L.pushLight(P),P.castShadow&&L.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Le.intersectsSprite(P)){oe&&ft.setFromMatrixPosition(P.matrixWorld).applyMatrix4(It);const Fe=Oe.update(P),De=P.material;De.visible&&C.push(P,Fe,De,le,ft.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Le.intersectsObject(P))){const Fe=Oe.update(P),De=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ft.copy(P.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),ft.copy(Fe.boundingSphere.center)),ft.applyMatrix4(P.matrixWorld).applyMatrix4(It)),Array.isArray(De)){const ze=Fe.groups;for(let Ke=0,dt=ze.length;Ke<dt;Ke++){const wt=ze[Ke],ot=De[wt.materialIndex];ot&&ot.visible&&C.push(P,Fe,ot,le,ft.z,wt)}}else De.visible&&C.push(P,Fe,De,le,ft.z,null)}}const Ie=P.children;for(let Fe=0,De=Ie.length;Fe<De;Fe++)Kt(Ie[Fe],j,le,oe)}function Tn(P,j,le,oe){const{opaque:re,transmissive:Ie,transparent:Fe}=P;L.setupLightsView(le),Ge===!0&&Ee.setGlobalState(D.clippingPlanes,le),oe&&He.viewport(Q.copy(oe)),re.length>0&&Xt(re,j,le),Ie.length>0&&Xt(Ie,j,le),Fe.length>0&&Xt(Fe,j,le),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function tn(P,j,le,oe){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[oe.id]===void 0){const ot=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[oe.id]=new ss(1,1,{generateMipmaps:!0,type:ot?Us:Tr,minFilter:ia,samples:Math.max(4,ut.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}const Ie=L.state.transmissionRenderTarget[oe.id],Fe=oe.viewport||Q;Ie.setSize(Fe.z*D.transmissionResolutionScale,Fe.w*D.transmissionResolutionScale);const De=D.getRenderTarget(),ze=D.getActiveCubeFace(),Ke=D.getActiveMipmapLevel();D.setRenderTarget(Ie),D.getClearColor(te),U=D.getClearAlpha(),U<1&&D.setClearColor(16777215,.5),D.clear(),lt&&Ye.render(le);const dt=D.toneMapping;D.toneMapping=rs;const wt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),L.setupLightsView(oe),Ge===!0&&Ee.setGlobalState(D.clippingPlanes,oe),Xt(P,le,oe),Y.updateMultisampleRenderTarget(Ie),Y.updateRenderTargetMipmap(Ie),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let jt=0,an=j.length;jt<an;jt++){const nn=j[jt],{object:zt,geometry:An,material:rt,group:gi}=nn;if(rt.side===As&&zt.layers.test(oe.layers)){const Ut=rt.side;rt.side=Wi,rt.needsUpdate=!0,Pt(zt,le,oe,An,rt,gi),rt.side=Ut,rt.needsUpdate=!0,ot=!0}}ot===!0&&(Y.updateMultisampleRenderTarget(Ie),Y.updateRenderTargetMipmap(Ie))}D.setRenderTarget(De,ze,Ke),D.setClearColor(te,U),wt!==void 0&&(oe.viewport=wt),D.toneMapping=dt}function Xt(P,j,le){const oe=j.isScene===!0?j.overrideMaterial:null;for(let re=0,Ie=P.length;re<Ie;re++){const Fe=P[re],{object:De,geometry:ze,group:Ke}=Fe;let dt=Fe.material;dt.allowOverride===!0&&oe!==null&&(dt=oe),De.layers.test(le.layers)&&Pt(De,j,le,ze,dt,Ke)}}function Pt(P,j,le,oe,re,Ie){P.onBeforeRender(D,j,le,oe,re,Ie),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),re.onBeforeRender(D,j,le,oe,P,Ie),re.transparent===!0&&re.side===As&&re.forceSinglePass===!1?(re.side=Wi,re.needsUpdate=!0,D.renderBufferDirect(le,j,oe,re,P,Ie),re.side=Co,re.needsUpdate=!0,D.renderBufferDirect(le,j,oe,re,P,Ie),re.side=As):D.renderBufferDirect(le,j,oe,re,P,Ie),P.onAfterRender(D,j,le,oe,re,Ie)}function Fn(P,j,le){j.isScene!==!0&&(j=Et);const oe=w.get(P),re=L.state.lights,Ie=L.state.shadowsArray,Fe=re.state.version,De=Te.getParameters(P,re.state,Ie,j,le),ze=Te.getProgramCacheKey(De);let Ke=oe.programs;oe.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?j.environment:null,oe.fog=j.fog;const dt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;oe.envMap=he.get(P.envMap||oe.environment,dt),oe.envMapRotation=oe.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,Ke===void 0&&(P.addEventListener("dispose",Be),Ke=new Map,oe.programs=Ke);let wt=Ke.get(ze);if(wt!==void 0){if(oe.currentProgram===wt&&oe.lightsStateVersion===Fe)return Gn(P,De),wt}else De.uniforms=Te.getUniforms(P),P.onBeforeCompile(De,D),wt=Te.acquireProgram(De,ze),Ke.set(ze,wt),oe.uniforms=De.uniforms;const ot=oe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ot.clippingPlanes=Ee.uniform),Gn(P,De),oe.needsLights=yn(P),oe.lightsStateVersion=Fe,oe.needsLights&&(ot.ambientLightColor.value=re.state.ambient,ot.lightProbe.value=re.state.probe,ot.directionalLights.value=re.state.directional,ot.directionalLightShadows.value=re.state.directionalShadow,ot.spotLights.value=re.state.spot,ot.spotLightShadows.value=re.state.spotShadow,ot.rectAreaLights.value=re.state.rectArea,ot.ltc_1.value=re.state.rectAreaLTC1,ot.ltc_2.value=re.state.rectAreaLTC2,ot.pointLights.value=re.state.point,ot.pointLightShadows.value=re.state.pointShadow,ot.hemisphereLights.value=re.state.hemi,ot.directionalShadowMatrix.value=re.state.directionalShadowMatrix,ot.spotLightMatrix.value=re.state.spotLightMatrix,ot.spotLightMap.value=re.state.spotLightMap,ot.pointShadowMatrix.value=re.state.pointShadowMatrix),oe.currentProgram=wt,oe.uniformsList=null,wt}function Zt(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=rd.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function Gn(P,j){const le=w.get(P);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function mi(P,j,le,oe,re){j.isScene!==!0&&(j=Et),Y.resetTextureUnits();const Ie=j.fog,Fe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?j.environment:null,De=K===null?D.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:wl,ze=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,Ke=he.get(oe.envMap||Fe,ze),dt=oe.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,wt=!!le.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),ot=!!le.morphAttributes.position,jt=!!le.morphAttributes.normal,an=!!le.morphAttributes.color;let nn=rs;oe.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(nn=D.toneMapping);const zt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,An=zt!==void 0?zt.length:0,rt=w.get(oe),gi=L.state.lights;if(Ge===!0&&(Ze===!0||P!==Z)){const Cn=P===Z&&oe.id===ee;Ee.setState(oe,P,Cn)}let Ut=!1;oe.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==gi.state.version||rt.outputColorSpace!==De||re.isBatchedMesh&&rt.batching===!1||!re.isBatchedMesh&&rt.batching===!0||re.isBatchedMesh&&rt.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&rt.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&rt.instancing===!1||!re.isInstancedMesh&&rt.instancing===!0||re.isSkinnedMesh&&rt.skinning===!1||!re.isSkinnedMesh&&rt.skinning===!0||re.isInstancedMesh&&rt.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&rt.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&rt.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&rt.instancingMorph===!1&&re.morphTexture!==null||rt.envMap!==Ke||oe.fog===!0&&rt.fog!==Ie||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ee.numPlanes||rt.numIntersection!==Ee.numIntersection)||rt.vertexAlphas!==dt||rt.vertexTangents!==wt||rt.morphTargets!==ot||rt.morphNormals!==jt||rt.morphColors!==an||rt.toneMapping!==nn||rt.morphTargetsCount!==An)&&(Ut=!0):(Ut=!0,rt.__version=oe.version);let bi=rt.currentProgram;Ut===!0&&(bi=Fn(oe,j,re));let Pi=!1,Yi=!1,zs=!1;const Yt=bi.getUniforms(),yt=rt.uniforms;if(He.useProgram(bi.program)&&(Pi=!0,Yi=!0,zs=!0),oe.id!==ee&&(ee=oe.id,Yi=!0),Pi||Z!==P){He.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Yt.setValue(G,"projectionMatrix",P.projectionMatrix),Yt.setValue(G,"viewMatrix",P.matrixWorldInverse);const fr=Yt.map.cameraPosition;fr!==void 0&&fr.setValue(G,We.setFromMatrixPosition(P.matrixWorld)),ut.logarithmicDepthBuffer&&Yt.setValue(G,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Yt.setValue(G,"isOrthographic",P.isOrthographicCamera===!0),Z!==P&&(Z=P,Yi=!0,zs=!0)}if(rt.needsLights&&(gi.state.directionalShadowMap.length>0&&Yt.setValue(G,"directionalShadowMap",gi.state.directionalShadowMap,Y),gi.state.spotShadowMap.length>0&&Yt.setValue(G,"spotShadowMap",gi.state.spotShadowMap,Y),gi.state.pointShadowMap.length>0&&Yt.setValue(G,"pointShadowMap",gi.state.pointShadowMap,Y)),re.isSkinnedMesh){Yt.setOptional(G,re,"bindMatrix"),Yt.setOptional(G,re,"bindMatrixInverse");const Cn=re.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Yt.setValue(G,"boneTexture",Cn.boneTexture,Y))}re.isBatchedMesh&&(Yt.setOptional(G,re,"batchingTexture"),Yt.setValue(G,"batchingTexture",re._matricesTexture,Y),Yt.setOptional(G,re,"batchingIdTexture"),Yt.setValue(G,"batchingIdTexture",re._indirectTexture,Y),Yt.setOptional(G,re,"batchingColorTexture"),re._colorsTexture!==null&&Yt.setValue(G,"batchingColorTexture",re._colorsTexture,Y));const Pr=le.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0)&&Ne.update(re,le,bi),(Yi||rt.receiveShadow!==re.receiveShadow)&&(rt.receiveShadow=re.receiveShadow,Yt.setValue(G,"receiveShadow",re.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&j.environment!==null&&(yt.envMapIntensity.value=j.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=s3()),Yi&&(Yt.setValue(G,"toneMappingExposure",D.toneMappingExposure),rt.needsLights&&xn(yt,zs),Ie&&oe.fog===!0&&Qe.refreshFogUniforms(yt,Ie),Qe.refreshMaterialUniforms(yt,oe,Ce,J,L.state.transmissionRenderTarget[P.id]),rd.upload(G,Zt(rt),yt,Y)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(rd.upload(G,Zt(rt),yt,Y),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Yt.setValue(G,"center",re.center),Yt.setValue(G,"modelViewMatrix",re.modelViewMatrix),Yt.setValue(G,"normalMatrix",re.normalMatrix),Yt.setValue(G,"modelMatrix",re.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Cn=oe.uniformsGroups;for(let fr=0,cs=Cn.length;fr<cs;fr++){const Ll=Cn[fr];Pe.update(Ll,bi),Pe.bind(Ll,bi)}}return bi}function xn(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function yn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(P,j,le){const oe=w.get(P);oe.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),w.get(P.texture).__webglTexture=j,w.get(P.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:le,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,j){const le=w.get(P);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0};const wn=G.createFramebuffer();this.setRenderTarget=function(P,j=0,le=0){K=P,k=j,H=le;let oe=null,re=!1,Ie=!1;if(P){const De=w.get(P);if(De.__useDefaultFramebuffer!==void 0){He.bindFramebuffer(G.FRAMEBUFFER,De.__webglFramebuffer),Q.copy(P.viewport),V.copy(P.scissor),q=P.scissorTest,He.viewport(Q),He.scissor(V),He.setScissorTest(q),ee=-1;return}else if(De.__webglFramebuffer===void 0)Y.setupRenderTarget(P);else if(De.__hasExternalTextures)Y.rebindTextures(P,w.get(P.texture).__webglTexture,w.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const dt=P.depthTexture;if(De.__boundDepthTexture!==dt){if(dt!==null&&w.has(dt)&&(P.width!==dt.image.width||P.height!==dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(P)}}const ze=P.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ie=!0);const Ke=w.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ke[j])?oe=Ke[j][le]:oe=Ke[j],re=!0):P.samples>0&&Y.useMultisampledRTT(P)===!1?oe=w.get(P).__webglMultisampledFramebuffer:Array.isArray(Ke)?oe=Ke[le]:oe=Ke,Q.copy(P.viewport),V.copy(P.scissor),q=P.scissorTest}else Q.copy(ne).multiplyScalar(Ce).floor(),V.copy(me).multiplyScalar(Ce).floor(),q=ge;if(le!==0&&(oe=wn),He.bindFramebuffer(G.FRAMEBUFFER,oe)&&He.drawBuffers(P,oe),He.viewport(Q),He.scissor(V),He.setScissorTest(q),re){const De=w.get(P.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,De.__webglTexture,le)}else if(Ie){const De=j;for(let ze=0;ze<P.textures.length;ze++){const Ke=w.get(P.textures[ze]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ze,Ke.__webglTexture,le,De)}}else if(P!==null&&le!==0){const De=w.get(P.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,De.__webglTexture,le)}ee=-1},this.readRenderTargetPixels=function(P,j,le,oe,re,Ie,Fe,De=0){if(!(P&&P.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=w.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){He.bindFramebuffer(G.FRAMEBUFFER,ze);try{const Ke=P.textures[De],dt=Ke.format,wt=Ke.type;if(P.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+De),!ut.textureFormatReadable(dt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(wt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-oe&&le>=0&&le<=P.height-re&&G.readPixels(j,le,oe,re,Ae.convert(dt),Ae.convert(wt),Ie)}finally{const Ke=K!==null?w.get(K).__webglFramebuffer:null;He.bindFramebuffer(G.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(P,j,le,oe,re,Ie,Fe,De=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=w.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze)if(j>=0&&j<=P.width-oe&&le>=0&&le<=P.height-re){He.bindFramebuffer(G.FRAMEBUFFER,ze);const Ke=P.textures[De],dt=Ke.format,wt=Ke.type;if(P.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+De),!ut.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ot),G.bufferData(G.PIXEL_PACK_BUFFER,Ie.byteLength,G.STREAM_READ),G.readPixels(j,le,oe,re,Ae.convert(dt),Ae.convert(wt),0);const jt=K!==null?w.get(K).__webglFramebuffer:null;He.bindFramebuffer(G.FRAMEBUFFER,jt);const an=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Rw(G,an,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ot),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ie),G.deleteBuffer(ot),G.deleteSync(an),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,j=null,le=0){const oe=Math.pow(2,-le),re=Math.floor(P.image.width*oe),Ie=Math.floor(P.image.height*oe),Fe=j!==null?j.x:0,De=j!==null?j.y:0;Y.setTexture2D(P,0),G.copyTexSubImage2D(G.TEXTURE_2D,le,0,0,Fe,De,re,Ie),He.unbindTexture()};const br=G.createFramebuffer(),Bs=G.createFramebuffer();this.copyTextureToTexture=function(P,j,le=null,oe=null,re=0,Ie=0){let Fe,De,ze,Ke,dt,wt,ot,jt,an;const nn=P.isCompressedTexture?P.mipmaps[Ie]:P.image;if(le!==null)Fe=le.max.x-le.min.x,De=le.max.y-le.min.y,ze=le.isBox3?le.max.z-le.min.z:1,Ke=le.min.x,dt=le.min.y,wt=le.isBox3?le.min.z:0;else{const yt=Math.pow(2,-re);Fe=Math.floor(nn.width*yt),De=Math.floor(nn.height*yt),P.isDataArrayTexture?ze=nn.depth:P.isData3DTexture?ze=Math.floor(nn.depth*yt):ze=1,Ke=0,dt=0,wt=0}oe!==null?(ot=oe.x,jt=oe.y,an=oe.z):(ot=0,jt=0,an=0);const zt=Ae.convert(j.format),An=Ae.convert(j.type);let rt;j.isData3DTexture?(Y.setTexture3D(j,0),rt=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Y.setTexture2DArray(j,0),rt=G.TEXTURE_2D_ARRAY):(Y.setTexture2D(j,0),rt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const gi=G.getParameter(G.UNPACK_ROW_LENGTH),Ut=G.getParameter(G.UNPACK_IMAGE_HEIGHT),bi=G.getParameter(G.UNPACK_SKIP_PIXELS),Pi=G.getParameter(G.UNPACK_SKIP_ROWS),Yi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,nn.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,nn.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ke),G.pixelStorei(G.UNPACK_SKIP_ROWS,dt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,wt);const zs=P.isDataArrayTexture||P.isData3DTexture,Yt=j.isDataArrayTexture||j.isData3DTexture;if(P.isDepthTexture){const yt=w.get(P),Pr=w.get(j),Cn=w.get(yt.__renderTarget),fr=w.get(Pr.__renderTarget);He.bindFramebuffer(G.READ_FRAMEBUFFER,Cn.__webglFramebuffer),He.bindFramebuffer(G.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let cs=0;cs<ze;cs++)zs&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,w.get(P).__webglTexture,re,wt+cs),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,w.get(j).__webglTexture,Ie,an+cs)),G.blitFramebuffer(Ke,dt,Fe,De,ot,jt,Fe,De,G.DEPTH_BUFFER_BIT,G.NEAREST);He.bindFramebuffer(G.READ_FRAMEBUFFER,null),He.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(re!==0||P.isRenderTargetTexture||w.has(P)){const yt=w.get(P),Pr=w.get(j);He.bindFramebuffer(G.READ_FRAMEBUFFER,br),He.bindFramebuffer(G.DRAW_FRAMEBUFFER,Bs);for(let Cn=0;Cn<ze;Cn++)zs?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,yt.__webglTexture,re,wt+Cn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,yt.__webglTexture,re),Yt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pr.__webglTexture,Ie,an+Cn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pr.__webglTexture,Ie),re!==0?G.blitFramebuffer(Ke,dt,Fe,De,ot,jt,Fe,De,G.COLOR_BUFFER_BIT,G.NEAREST):Yt?G.copyTexSubImage3D(rt,Ie,ot,jt,an+Cn,Ke,dt,Fe,De):G.copyTexSubImage2D(rt,Ie,ot,jt,Ke,dt,Fe,De);He.bindFramebuffer(G.READ_FRAMEBUFFER,null),He.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Yt?P.isDataTexture||P.isData3DTexture?G.texSubImage3D(rt,Ie,ot,jt,an,Fe,De,ze,zt,An,nn.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(rt,Ie,ot,jt,an,Fe,De,ze,zt,nn.data):G.texSubImage3D(rt,Ie,ot,jt,an,Fe,De,ze,zt,An,nn):P.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ie,ot,jt,Fe,De,zt,An,nn.data):P.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ie,ot,jt,nn.width,nn.height,zt,nn.data):G.texSubImage2D(G.TEXTURE_2D,Ie,ot,jt,Fe,De,zt,An,nn);G.pixelStorei(G.UNPACK_ROW_LENGTH,gi),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ut),G.pixelStorei(G.UNPACK_SKIP_PIXELS,bi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Pi),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Yi),Ie===0&&j.generateMipmaps&&G.generateMipmap(rt),He.unbindTexture()},this.initRenderTarget=function(P){w.get(P).__webglFramebuffer===void 0&&Y.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Y.setTextureCube(P,0):P.isData3DTexture?Y.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Y.setTexture2DArray(P,0):Y.setTexture2D(P,0),He.unbindTexture()},this.resetState=function(){k=0,H=0,K=null,He.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ht._getUnpackColorSpace()}}const a3=()=>{const o=Jt.useRef(null);return Jt.useEffect(()=>{const e=o.current;if(!e)return;const t=window.innerWidth<768,n=t?60:140,r=3.5,a=new Ww,u=new Sr(60,window.innerWidth/window.innerHeight,.1,1e3);u.position.z=8;const c=new o3({antialias:!t,alpha:!0});c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,t?1:2)),c.setClearColor(0,0),e.appendChild(c.domElement);const d=new Float32Array(n*3),h=[];for(let b=0;b<n;b++)d[b*3]=(Math.random()-.5)*20,d[b*3+1]=(Math.random()-.5)*14,d[b*3+2]=(Math.random()-.5)*4,h.push((Math.random()-.5)*.004,(Math.random()-.5)*.003,0);const p=new cr;p.setAttribute("position",new Cr(d,3));const v=new qS({color:16098851,size:t?.07:.055,transparent:!0,opacity:.85}),g=new nA(p,v);a.add(g);let _=null,M=null;if(!t){const b=n*n,C=new Float32Array(b*6);_=new cr,_.setAttribute("position",new Cr(C,3));const L=new jS({color:16098851,transparent:!0,opacity:.12});M=new tA(_,L),a.add(M)}let E;const x=p.attributes.position.array,S=()=>{E=requestAnimationFrame(S);for(let b=0;b<n;b++)x[b*3]+=h[b*3],x[b*3+1]+=h[b*3+1],x[b*3]>10&&(x[b*3]=-10),x[b*3]<-10&&(x[b*3]=10),x[b*3+1]>7&&(x[b*3+1]=-7),x[b*3+1]<-7&&(x[b*3+1]=7);if(p.attributes.position.needsUpdate=!0,_){const b=_.attributes.position.array;let C=0;for(let L=0;L<n;L++)for(let I=L+1;I<n;I++){const N=x[L*3]-x[I*3],T=x[L*3+1]-x[I*3+1];Math.sqrt(N*N+T*T)<r&&(b[C++]=x[L*3],b[C++]=x[L*3+1],b[C++]=x[L*3+2],b[C++]=x[I*3],b[C++]=x[I*3+1],b[C++]=x[I*3+2])}_.setDrawRange(0,C/3),_.attributes.position.needsUpdate=!0}c.render(a,u)};S();const A=()=>{u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",A),()=>{cancelAnimationFrame(E),window.removeEventListener("resize",A),e.contains(c.domElement)&&e.removeChild(c.domElement),c.dispose(),p.dispose(),v.dispose(),_&&_.dispose()}},[]),_e.jsx("div",{ref:o,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"}})},l3=["React 開發","Firebase 開發","一頁式網站","Vue.js","TypeScript","RWD","快速交付"],u3=()=>{const o=Jt.useRef(null),e=Jt.useRef(null),t=Jt.useRef(null),n=Jt.useRef(null),r=Jt.useRef(null);Jt.useEffect(()=>{Bi.timeline({delay:.4}).fromTo(o.current,{opacity:0,y:50},{opacity:1,y:0,duration:.9,ease:"power3.out"}).fromTo(e.current,{opacity:0,y:20},{opacity:1,y:0,duration:.7,ease:"power2.out"},"-=0.5").fromTo(t.current,{opacity:0,y:20},{opacity:1,y:0,duration:.7,ease:"power2.out"},"-=0.4").fromTo(n.current?Array.from(n.current.children):[],{opacity:0,y:16,scale:.88},{opacity:1,y:0,scale:1,duration:.45,stagger:.07,ease:"back.out(1.7)"},"-=0.3").fromTo(r.current?Array.from(r.current.children):[],{opacity:0,y:20},{opacity:1,y:0,duration:.5,stagger:.12,ease:"power2.out"},"-=0.2")},[]);const a=u=>{document.getElementById(u)?.scrollIntoView({behavior:"smooth"})};return _e.jsxs("section",{id:"home",className:"hero",children:[_e.jsx(a3,{}),_e.jsxs("div",{className:"hero-content",children:[_e.jsxs("h1",{ref:o,className:"hero-title",style:{opacity:0},children:["Hi，我是 ",_e.jsx("span",{className:"gold-text",children:"Leon"})]}),_e.jsx("p",{ref:e,className:"hero-subtitle",style:{opacity:0},children:"台中網頁設計 · React 開發 · Firebase 整合 · 快速交付"}),_e.jsx("p",{ref:t,className:"hero-description",style:{opacity:0},children:"台中接案工程師，專注於 React 開發、Firebase 全端整合與一頁式網站設計。 有真實產業專案經驗，從活動查詢系統到即時排名平台，均獨立完成開發與部署。 透過 AI 輔助開發流程，讓您用更合理的預算，獲得高品質的交付成果。"}),_e.jsx("div",{ref:n,className:"hero-tags",children:l3.map((u,c)=>_e.jsx("span",{className:"hero-tag",children:u},c))}),_e.jsxs("div",{ref:r,className:"hero-buttons",children:[_e.jsx("button",{onClick:()=>a("portfolio"),className:"btn btn-gold",style:{opacity:0},children:"查看作品集"}),_e.jsx("button",{onClick:()=>a("contact"),className:"btn btn-outline",style:{opacity:0},children:"聯繫我"})]})]})]})};function c3(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function f3(o,e,t){return e&&c3(o.prototype,e),o}var ti,sd,rr,xo,yo,hl,oM,Qo,Iu,aM,bs,zr,lM,uM=function(){return ti||typeof window<"u"&&(ti=window.gsap)&&ti.registerPlugin&&ti},cM=1,al=[],Nt=[],os=[],Uu=Date.now,vg=function(e,t){return t},d3=function(){var e=Iu.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Nt),r.push.apply(r,os),Nt=n,os=r,vg=function(u,c){return t[u](c)}},Eo=function(e,t){return~os.indexOf(e)&&os[os.indexOf(e)+1][t]},Fu=function(e){return!!~aM.indexOf(e)},yi=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:r!==!1,capture:!!a})},xi=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},kf="scrollLeft",Bf="scrollTop",xg=function(){return bs&&bs.isPressed||Nt.cache++},Td=function(e,t){var n=function r(a){if(a||a===0){cM&&(rr.history.scrollRestoration="manual");var u=bs&&bs.isPressed;a=r.v=Math.round(a)||(bs&&bs.iOS?1:0),e(a),r.cacheID=Nt.cache,u&&vg("ss",a)}else(t||Nt.cache!==r.cacheID||vg("ref"))&&(r.cacheID=Nt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Ai={s:kf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Td(function(o){return arguments.length?rr.scrollTo(o,zn.sc()):rr.pageXOffset||xo[kf]||yo[kf]||hl[kf]||0})},zn={s:Bf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ai,sc:Td(function(o){return arguments.length?rr.scrollTo(Ai.sc(),o):rr.pageYOffset||xo[Bf]||yo[Bf]||hl[Bf]||0})},ki=function(e,t){return(t&&t._ctx&&t._ctx.selector||ti.utils.toArray)(e)[0]||(typeof e=="string"&&ti.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},h3=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ro=function(e,t){var n=t.s,r=t.sc;Fu(e)&&(e=xo.scrollingElement||yo);var a=Nt.indexOf(e),u=r===zn.sc?1:2;!~a&&(a=Nt.push(e)-1),Nt[a+u]||yi(e,"scroll",xg);var c=Nt[a+u],d=c||(Nt[a+u]=Td(Eo(e,n),!0)||(Fu(e)?r:Td(function(h){return arguments.length?e[n]=h:e[n]})));return d.target=e,c||(d.smooth=ti.getProperty(e,"scrollBehavior")==="smooth"),d},yg=function(e,t,n){var r=e,a=e,u=Uu(),c=u,d=t||50,h=Math.max(500,d*3),p=function(M,E){var x=Uu();E||x-u>d?(a=r,r=M,c=u,u=x):n?r+=M:r=a+(M-a)/(x-c)*(u-c)},v=function(){a=r=n?0:r,c=u=0},g=function(M){var E=c,x=a,S=Uu();return(M||M===0)&&M!==r&&p(M),u===c||S-c>h?0:(r+(n?x:-x))/((n?S:u)-E)*1e3};return{update:p,reset:v,getVelocity:g}},yu=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},sy=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},fM=function(){Iu=ti.core.globals().ScrollTrigger,Iu&&Iu.core&&d3()},dM=function(e){return ti=e||uM(),!sd&&ti&&typeof document<"u"&&document.body&&(rr=window,xo=document,yo=xo.documentElement,hl=xo.body,aM=[rr,xo,yo,hl],ti.utils.clamp,lM=ti.core.context||function(){},Qo="onpointerenter"in hl?"pointer":"mouse",oM=Dn.isTouch=rr.matchMedia&&rr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in rr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,zr=Dn.eventTypes=("ontouchstart"in yo?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in yo?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return cM=0},500),fM(),sd=1),sd};Ai.op=zn;Nt.cache=0;var Dn=(function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){sd||dM(ti)||console.warn("Please gsap.registerPlugin(Observer)"),Iu||fM();var r=n.tolerance,a=n.dragMinimum,u=n.type,c=n.target,d=n.lineHeight,h=n.debounce,p=n.preventDefault,v=n.onStop,g=n.onStopDelay,_=n.ignore,M=n.wheelSpeed,E=n.event,x=n.onDragStart,S=n.onDragEnd,A=n.onDrag,b=n.onPress,C=n.onRelease,L=n.onRight,I=n.onLeft,N=n.onUp,T=n.onDown,D=n.onChangeX,W=n.onChangeY,k=n.onChange,H=n.onToggleX,K=n.onToggleY,ee=n.onHover,Z=n.onHoverEnd,Q=n.onMove,V=n.ignoreCheck,q=n.isNormalizer,te=n.onGestureStart,U=n.onGestureEnd,O=n.onWheel,J=n.onEnable,Ce=n.onDisable,be=n.onClick,ke=n.scrollSpeed,ne=n.capture,me=n.allowClicks,ge=n.lockAxis,Le=n.onLockAxis;this.target=c=ki(c)||yo,this.vars=n,_&&(_=ti.utils.toArray(_)),r=r||1e-9,a=a||0,M=M||1,ke=ke||1,u=u||"wheel,touch,pointer",h=h!==!1,d||(d=parseFloat(rr.getComputedStyle(hl).lineHeight)||22);var Ge,Ze,It,We,ft,Et,lt,se=this,G=0,Bt=0,Tt=n.passive||!p&&n.passive!==!1,ut=Ro(c,Ai),He=Ro(c,zn),F=ut(),w=He(),Y=~u.indexOf("touch")&&!~u.indexOf("pointer")&&zr[0]==="pointerdown",he=Fu(c),pe=c.ownerDocument||xo,fe=[0,0,0],Oe=[0,0,0],Te=0,Qe=function(){return Te=Uu()},Xe=function(nt,xt){return(se.event=nt)&&_&&h3(nt.target,_)||xt&&Y&&nt.pointerType!=="touch"||V&&V(nt,xt)},Me=function(){se._vx.reset(),se._vy.reset(),Ze.pause(),v&&v(se)},Ee=function(){var nt=se.deltaX=sy(fe),xt=se.deltaY=sy(Oe),Ue=Math.abs(nt)>=r,ht=Math.abs(xt)>=r;k&&(Ue||ht)&&k(se,nt,xt,fe,Oe),Ue&&(L&&se.deltaX>0&&L(se),I&&se.deltaX<0&&I(se),D&&D(se),H&&se.deltaX<0!=G<0&&H(se),G=se.deltaX,fe[0]=fe[1]=fe[2]=0),ht&&(T&&se.deltaY>0&&T(se),N&&se.deltaY<0&&N(se),W&&W(se),K&&se.deltaY<0!=Bt<0&&K(se),Bt=se.deltaY,Oe[0]=Oe[1]=Oe[2]=0),(We||It)&&(Q&&Q(se),It&&(x&&It===1&&x(se),A&&A(se),It=0),We=!1),Et&&!(Et=!1)&&Le&&Le(se),ft&&(O(se),ft=!1),Ge=0},qe=function(nt,xt,Ue){fe[Ue]+=nt,Oe[Ue]+=xt,se._vx.update(nt),se._vy.update(xt),h?Ge||(Ge=requestAnimationFrame(Ee)):Ee()},Ye=function(nt,xt){ge&&!lt&&(se.axis=lt=Math.abs(nt)>Math.abs(xt)?"x":"y",Et=!0),lt!=="y"&&(fe[2]+=nt,se._vx.update(nt,!0)),lt!=="x"&&(Oe[2]+=xt,se._vy.update(xt,!0)),h?Ge||(Ge=requestAnimationFrame(Ee)):Ee()},Ne=function(nt){if(!Xe(nt,1)){nt=yu(nt,p);var xt=nt.clientX,Ue=nt.clientY,ht=xt-se.x,ct=Ue-se.y,pt=se.isDragging;se.x=xt,se.y=Ue,(pt||(ht||ct)&&(Math.abs(se.startX-xt)>=a||Math.abs(se.startY-Ue)>=a))&&(It||(It=pt?2:1),pt||(se.isDragging=!0),Ye(ht,ct))}},_t=se.onPress=function(Be){Xe(Be,1)||Be&&Be.button||(se.axis=lt=null,Ze.pause(),se.isPressed=!0,Be=yu(Be),G=Bt=0,se.startX=se.x=Be.clientX,se.startY=se.y=Be.clientY,se._vx.reset(),se._vy.reset(),yi(q?c:pe,zr[1],Ne,Tt,!0),se.deltaX=se.deltaY=0,b&&b(se))},z=se.onRelease=function(Be){if(!Xe(Be,1)){xi(q?c:pe,zr[1],Ne,!0);var nt=!isNaN(se.y-se.startY),xt=se.isDragging,Ue=xt&&(Math.abs(se.x-se.startX)>3||Math.abs(se.y-se.startY)>3),ht=yu(Be);!Ue&&nt&&(se._vx.reset(),se._vy.reset(),p&&me&&ti.delayedCall(.08,function(){if(Uu()-Te>300&&!Be.defaultPrevented){if(Be.target.click)Be.target.click();else if(pe.createEvent){var ct=pe.createEvent("MouseEvents");ct.initMouseEvent("click",!0,!0,rr,1,ht.screenX,ht.screenY,ht.clientX,ht.clientY,!1,!1,!1,!1,0,null),Be.target.dispatchEvent(ct)}}})),se.isDragging=se.isGesturing=se.isPressed=!1,v&&xt&&!q&&Ze.restart(!0),It&&Ee(),S&&xt&&S(se),C&&C(se,Ue)}},Ae=function(nt){return nt.touches&&nt.touches.length>1&&(se.isGesturing=!0)&&te(nt,se.isDragging)},xe=function(){return(se.isGesturing=!1)||U(se)},Pe=function(nt){if(!Xe(nt)){var xt=ut(),Ue=He();qe((xt-F)*ke,(Ue-w)*ke,1),F=xt,w=Ue,v&&Ze.restart(!0)}},ve=function(nt){if(!Xe(nt)){nt=yu(nt,p),O&&(ft=!0);var xt=(nt.deltaMode===1?d:nt.deltaMode===2?rr.innerHeight:1)*M;qe(nt.deltaX*xt,nt.deltaY*xt,0),v&&!q&&Ze.restart(!0)}},de=function(nt){if(!Xe(nt)){var xt=nt.clientX,Ue=nt.clientY,ht=xt-se.x,ct=Ue-se.y;se.x=xt,se.y=Ue,We=!0,v&&Ze.restart(!0),(ht||ct)&&Ye(ht,ct)}},je=function(nt){se.event=nt,ee(se)},at=function(nt){se.event=nt,Z(se)},Ft=function(nt){return Xe(nt)||yu(nt,p)&&be(se)};Ze=se._dc=ti.delayedCall(g||.25,Me).pause(),se.deltaX=se.deltaY=0,se._vx=yg(0,50,!0),se._vy=yg(0,50,!0),se.scrollX=ut,se.scrollY=He,se.isDragging=se.isGesturing=se.isPressed=!1,lM(this),se.enable=function(Be){return se.isEnabled||(yi(he?pe:c,"scroll",xg),u.indexOf("scroll")>=0&&yi(he?pe:c,"scroll",Pe,Tt,ne),u.indexOf("wheel")>=0&&yi(c,"wheel",ve,Tt,ne),(u.indexOf("touch")>=0&&oM||u.indexOf("pointer")>=0)&&(yi(c,zr[0],_t,Tt,ne),yi(pe,zr[2],z),yi(pe,zr[3],z),me&&yi(c,"click",Qe,!0,!0),be&&yi(c,"click",Ft),te&&yi(pe,"gesturestart",Ae),U&&yi(pe,"gestureend",xe),ee&&yi(c,Qo+"enter",je),Z&&yi(c,Qo+"leave",at),Q&&yi(c,Qo+"move",de)),se.isEnabled=!0,se.isDragging=se.isGesturing=se.isPressed=We=It=!1,se._vx.reset(),se._vy.reset(),F=ut(),w=He(),Be&&Be.type&&_t(Be),J&&J(se)),se},se.disable=function(){se.isEnabled&&(al.filter(function(Be){return Be!==se&&Fu(Be.target)}).length||xi(he?pe:c,"scroll",xg),se.isPressed&&(se._vx.reset(),se._vy.reset(),xi(q?c:pe,zr[1],Ne,!0)),xi(he?pe:c,"scroll",Pe,ne),xi(c,"wheel",ve,ne),xi(c,zr[0],_t,ne),xi(pe,zr[2],z),xi(pe,zr[3],z),xi(c,"click",Qe,!0),xi(c,"click",Ft),xi(pe,"gesturestart",Ae),xi(pe,"gestureend",xe),xi(c,Qo+"enter",je),xi(c,Qo+"leave",at),xi(c,Qo+"move",de),se.isEnabled=se.isPressed=se.isDragging=!1,Ce&&Ce(se))},se.kill=se.revert=function(){se.disable();var Be=al.indexOf(se);Be>=0&&al.splice(Be,1),bs===se&&(bs=0)},al.push(se),q&&Fu(c)&&(bs=se),se.enable(E)},f3(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o})();Dn.version="3.14.2";Dn.create=function(o){return new Dn(o)};Dn.register=dM;Dn.getAll=function(){return al.slice()};Dn.getById=function(o){return al.filter(function(e){return e.vars.id===o})[0]};uM()&&ti.registerPlugin(Dn);var et,il,Lt,un,nr,qt,r_,wd,ec,Ou,Au,zf,ui,Ud,Sg,Ei,oy,ay,rl,hM,rm,pM,Mi,Mg,mM,gM,ho,Eg,s_,pl,o_,ku,Tg,sm,Vf=1,ci=Date.now,om=ci(),Rr=0,Cu=0,ly=function(e,t,n){var r=er(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},uy=function(e,t){return t&&(!er(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},p3=function o(){return Cu&&requestAnimationFrame(o)},cy=function(){return Ud=1},fy=function(){return Ud=0},Zr=function(e){return e},Ru=function(e){return Math.round(e*1e5)/1e5||0},_M=function(){return typeof window<"u"},vM=function(){return et||_M()&&(et=window.gsap)&&et.registerPlugin&&et},pa=function(e){return!!~r_.indexOf(e)},xM=function(e){return(e==="Height"?o_:Lt["inner"+e])||nr["client"+e]||qt["client"+e]},yM=function(e){return Eo(e,"getBoundingClientRect")||(pa(e)?function(){return cd.width=Lt.innerWidth,cd.height=o_,cd}:function(){return Cs(e)})},m3=function(e,t,n){var r=n.d,a=n.d2,u=n.a;return(u=Eo(e,"getBoundingClientRect"))?function(){return u()[r]}:function(){return(t?xM(a):e["client"+a])||0}},g3=function(e,t){return!t||~os.indexOf(e)?yM(e):function(){return cd}},is=function(e,t){var n=t.s,r=t.d2,a=t.d,u=t.a;return Math.max(0,(n="scroll"+r)&&(u=Eo(e,n))?u()-yM(e)()[a]:pa(e)?(nr[n]||qt[n])-xM(r):e[n]-e["offset"+r])},Hf=function(e,t){for(var n=0;n<rl.length;n+=3)(!t||~t.indexOf(rl[n+1]))&&e(rl[n],rl[n+1],rl[n+2])},er=function(e){return typeof e=="string"},di=function(e){return typeof e=="function"},bu=function(e){return typeof e=="number"},Jo=function(e){return typeof e=="object"},Su=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},am=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},tl=Math.abs,SM="left",MM="top",a_="right",l_="bottom",ca="width",fa="height",Bu="Right",zu="Left",Vu="Top",Hu="Bottom",In="padding",Mr="margin",Cl="Width",u_="Height",Bn="px",Er=function(e){return Lt.getComputedStyle(e)},_3=function(e){var t=Er(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},dy=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Cs=function(e,t){var n=t&&Er(e)[Sg]!=="matrix(1, 0, 0, 1, 0, 0)"&&et.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Ad=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},EM=function(e){var t=[],n=e.labels,r=e.duration(),a;for(a in n)t.push(n[a]/r);return t},v3=function(e){return function(t){return et.utils.snap(EM(e),t)}},c_=function(e){var t=et.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,a){return r-a});return n?function(r,a,u){u===void 0&&(u=.001);var c;if(!a)return t(r);if(a>0){for(r-=u,c=0;c<n.length;c++)if(n[c]>=r)return n[c];return n[c-1]}else for(c=n.length,r+=u;c--;)if(n[c]<=r)return n[c];return n[0]}:function(r,a,u){u===void 0&&(u=.001);var c=t(r);return!a||Math.abs(c-r)<u||c-r<0==a<0?c:t(a<0?r-e:r+e)}},x3=function(e){return function(t,n){return c_(EM(e))(t,n.direction)}},Gf=function(e,t,n,r){return n.split(",").forEach(function(a){return e(t,a,r)})},$n=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:!r,capture:!!a})},qn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Wf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},hy={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xf={toggleActions:"play",anticipatePin:0},Cd={top:0,left:0,center:.5,bottom:1,right:1},od=function(e,t){if(er(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Cd?Cd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Yf=function(e,t,n,r,a,u,c,d){var h=a.startColor,p=a.endColor,v=a.fontSize,g=a.indent,_=a.fontWeight,M=un.createElement("div"),E=pa(n)||Eo(n,"pinType")==="fixed",x=e.indexOf("scroller")!==-1,S=E?qt:n,A=e.indexOf("start")!==-1,b=A?h:p,C="border-color:"+b+";font-size:"+v+";color:"+b+";font-weight:"+_+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return C+="position:"+((x||d)&&E?"fixed;":"absolute;"),(x||d||!E)&&(C+=(r===zn?a_:l_)+":"+(u+parseFloat(g))+"px;"),c&&(C+="box-sizing:border-box;text-align:left;width:"+c.offsetWidth+"px;"),M._isStart=A,M.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),M.style.cssText=C,M.innerText=t||t===0?e+"-"+t:e,S.children[0]?S.insertBefore(M,S.children[0]):S.appendChild(M),M._offset=M["offset"+r.op.d2],ad(M,0,r,A),M},ad=function(e,t,n,r){var a={display:"block"},u=n[r?"os2":"p2"],c=n[r?"p2":"os2"];e._isFlipped=r,a[n.a+"Percent"]=r?-100:0,a[n.a]=r?"1px":0,a["border"+u+Cl]=1,a["border"+c+Cl]=0,a[n.p]=t+"px",et.set(e,a)},Rt=[],wg={},tc,py=function(){return ci()-Rr>34&&(tc||(tc=requestAnimationFrame(Ls)))},nl=function(){(!Mi||!Mi.isPressed||Mi.startX>qt.clientWidth)&&(Nt.cache++,Mi?tc||(tc=requestAnimationFrame(Ls)):Ls(),Rr||ga("scrollStart"),Rr=ci())},lm=function(){gM=Lt.innerWidth,mM=Lt.innerHeight},Pu=function(e){Nt.cache++,(e===!0||!ui&&!pM&&!un.fullscreenElement&&!un.webkitFullscreenElement&&(!Mg||gM!==Lt.innerWidth||Math.abs(Lt.innerHeight-mM)>Lt.innerHeight*.25))&&wd.restart(!0)},ma={},y3=[],TM=function o(){return qn(bt,"scrollEnd",o)||sa(!0)},ga=function(e){return ma[e]&&ma[e].map(function(t){return t()})||y3},Ji=[],wM=function(e){for(var t=0;t<Ji.length;t+=5)(!e||Ji[t+4]&&Ji[t+4].query===e)&&(Ji[t].style.cssText=Ji[t+1],Ji[t].getBBox&&Ji[t].setAttribute("transform",Ji[t+2]||""),Ji[t+3].uncache=1)},AM=function(){return Nt.forEach(function(e){return di(e)&&++e.cacheID&&(e.rec=e())})},f_=function(e,t){var n;for(Ei=0;Ei<Rt.length;Ei++)n=Rt[Ei],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ku=!0,t&&wM(t),t||ga("revert")},CM=function(e,t){Nt.cache++,(t||!Ti)&&Nt.forEach(function(n){return di(n)&&n.cacheID++&&(n.rec=0)}),er(e)&&(Lt.history.scrollRestoration=s_=e)},Ti,da=0,my,S3=function(){if(my!==da){var e=my=da;requestAnimationFrame(function(){return e===da&&sa(!0)})}},RM=function(){qt.appendChild(pl),o_=!Mi&&pl.offsetHeight||Lt.innerHeight,qt.removeChild(pl)},gy=function(e){return ec(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},sa=function(e,t){if(nr=un.documentElement,qt=un.body,r_=[Lt,un,nr,qt],Rr&&!e&&!ku){$n(bt,"scrollEnd",TM);return}RM(),Ti=bt.isRefreshing=!0,ku||AM();var n=ga("refreshInit");hM&&bt.sort(),t||f_(),Nt.forEach(function(r){di(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Rt.slice(0).forEach(function(r){return r.refresh()}),ku=!1,Rt.forEach(function(r){if(r._subPinOffset&&r.pin){var a=r.vars.horizontal?"offsetWidth":"offsetHeight",u=r.pin[a];r.revert(!0,1),r.adjustPinSpacing(r.pin[a]-u),r.refresh()}}),Tg=1,gy(!0),Rt.forEach(function(r){var a=is(r.scroller,r._dir),u=r.vars.end==="max"||r._endClamp&&r.end>a,c=r._startClamp&&r.start>=a;(u||c)&&r.setPositions(c?a-1:r.start,u?Math.max(c?a:r.start+1,a):r.end,!0)}),gy(!1),Tg=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Nt.forEach(function(r){di(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),CM(s_,1),wd.pause(),da++,Ti=2,Ls(2),Rt.forEach(function(r){return di(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Ti=bt.isRefreshing=!1,ga("refresh")},Ag=0,ld=1,Gu,Ls=function(e){if(e===2||!Ti&&!ku){bt.isUpdating=!0,Gu&&Gu.update(0);var t=Rt.length,n=ci(),r=n-om>=50,a=t&&Rt[0].scroll();if(ld=Ag>a?-1:1,Ti||(Ag=a),r&&(Rr&&!Ud&&n-Rr>200&&(Rr=0,ga("scrollEnd")),Au=om,om=n),ld<0){for(Ei=t;Ei-- >0;)Rt[Ei]&&Rt[Ei].update(0,r);ld=1}else for(Ei=0;Ei<t;Ei++)Rt[Ei]&&Rt[Ei].update(0,r);bt.isUpdating=!1}tc=0},Cg=[SM,MM,l_,a_,Mr+Hu,Mr+Bu,Mr+Vu,Mr+zu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ud=Cg.concat([ca,fa,"boxSizing","max"+Cl,"max"+u_,"position",Mr,In,In+Vu,In+Bu,In+Hu,In+zu]),M3=function(e,t,n){ml(n);var r=e._gsap;if(r.spacerIsNative)ml(r.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},um=function(e,t,n,r){if(!e._gsap.swappedIn){for(var a=Cg.length,u=t.style,c=e.style,d;a--;)d=Cg[a],u[d]=n[d];u.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(u.display="inline-block"),c[l_]=c[a_]="auto",u.flexBasis=n.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[ca]=Ad(e,Ai)+Bn,u[fa]=Ad(e,zn)+Bn,u[In]=c[Mr]=c[MM]=c[SM]="0",ml(r),c[ca]=c["max"+Cl]=n[ca],c[fa]=c["max"+u_]=n[fa],c[In]=n[In],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},E3=/([A-Z])/g,ml=function(e){if(e){var t=e.t.style,n=e.length,r=0,a,u;for((e.t._gsap||et.core.getCache(e.t)).uncache=1;r<n;r+=2)u=e[r+1],a=e[r],u?t[a]=u:t[a]&&t.removeProperty(a.replace(E3,"-$1").toLowerCase())}},jf=function(e){for(var t=ud.length,n=e.style,r=[],a=0;a<t;a++)r.push(ud[a],n[ud[a]]);return r.t=e,r},T3=function(e,t,n){for(var r=[],a=e.length,u=n?8:0,c;u<a;u+=2)c=e[u],r.push(c,c in t?t[c]:e[u+1]);return r.t=e.t,r},cd={left:0,top:0},_y=function(e,t,n,r,a,u,c,d,h,p,v,g,_,M){di(e)&&(e=e(d)),er(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?od("0"+e.substr(3),n):0));var E=_?_.time():0,x,S,A;if(_&&_.seek(0),isNaN(e)||(e=+e),bu(e))_&&(e=et.utils.mapRange(_.scrollTrigger.start,_.scrollTrigger.end,0,g,e)),c&&ad(c,n,r,!0);else{di(t)&&(t=t(d));var b=(e||"0").split(" "),C,L,I,N;A=ki(t,d)||qt,C=Cs(A)||{},(!C||!C.left&&!C.top)&&Er(A).display==="none"&&(N=A.style.display,A.style.display="block",C=Cs(A),N?A.style.display=N:A.style.removeProperty("display")),L=od(b[0],C[r.d]),I=od(b[1]||"0",n),e=C[r.p]-h[r.p]-p+L+a-I,c&&ad(c,I,r,n-I<20||c._isStart&&I>20),n-=n-I}if(M&&(d[M]=e||-.001,e<0&&(e=0)),u){var T=e+n,D=u._isStart;x="scroll"+r.d2,ad(u,T,r,D&&T>20||!D&&(v?Math.max(qt[x],nr[x]):u.parentNode[x])<=T+1),v&&(h=Cs(c),v&&(u.style[r.op.p]=h[r.op.p]-r.op.m-u._offset+Bn))}return _&&A&&(x=Cs(A),_.seek(g),S=Cs(A),_._caScrollDist=x[r.p]-S[r.p],e=e/_._caScrollDist*g),_&&_.seek(E),_?e:Math.round(e)},w3=/(webkit|moz|length|cssText|inset)/i,vy=function(e,t,n,r){if(e.parentNode!==t){var a=e.style,u,c;if(t===qt){e._stOrig=a.cssText,c=Er(e);for(u in c)!+u&&!w3.test(u)&&c[u]&&typeof a[u]=="string"&&u!=="0"&&(a[u]=c[u]);a.top=n,a.left=r}else a.cssText=e._stOrig;et.core.getCache(e).uncache=1,t.appendChild(e)}},bM=function(e,t,n){var r=t,a=r;return function(u){var c=Math.round(e());return c!==r&&c!==a&&Math.abs(c-r)>3&&Math.abs(c-a)>3&&(u=c,n&&n()),a=r,r=Math.round(u),r}},qf=function(e,t,n){var r={};r[t.p]="+="+n,et.set(e,r)},xy=function(e,t){var n=Ro(e,t),r="_scroll"+t.p2,a=function u(c,d,h,p,v){var g=u.tween,_=d.onComplete,M={};h=h||n();var E=bM(n,h,function(){g.kill(),u.tween=0});return v=p&&v||0,p=p||c-h,g&&g.kill(),d[r]=c,d.inherit=!1,d.modifiers=M,M[r]=function(){return E(h+p*g.ratio+v*g.ratio*g.ratio)},d.onUpdate=function(){Nt.cache++,u.tween&&Ls()},d.onComplete=function(){u.tween=0,_&&_.call(g)},g=u.tween=et.to(e,d),g};return e[r]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},$n(e,"wheel",n.wheelHandler),bt.isTouch&&$n(e,"touchmove",n.wheelHandler),a},bt=(function(){function o(t,n){il||o.register(et)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Eg(this),this.init(t,n)}var e=o.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Cu){this.update=this.refresh=this.kill=Zr;return}n=dy(er(n)||bu(n)||n.nodeType?{trigger:n}:n,Xf);var a=n,u=a.onUpdate,c=a.toggleClass,d=a.id,h=a.onToggle,p=a.onRefresh,v=a.scrub,g=a.trigger,_=a.pin,M=a.pinSpacing,E=a.invalidateOnRefresh,x=a.anticipatePin,S=a.onScrubComplete,A=a.onSnapComplete,b=a.once,C=a.snap,L=a.pinReparent,I=a.pinSpacer,N=a.containerAnimation,T=a.fastScrollEnd,D=a.preventOverlaps,W=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ai:zn,k=!v&&v!==0,H=ki(n.scroller||Lt),K=et.core.getCache(H),ee=pa(H),Z=("pinType"in n?n.pinType:Eo(H,"pinType")||ee&&"fixed")==="fixed",Q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=k&&n.toggleActions.split(" "),q="markers"in n?n.markers:Xf.markers,te=ee?0:parseFloat(Er(H)["border"+W.p2+Cl])||0,U=this,O=n.onRefreshInit&&function(){return n.onRefreshInit(U)},J=m3(H,ee,W),Ce=g3(H,ee),be=0,ke=0,ne=0,me=Ro(H,W),ge,Le,Ge,Ze,It,We,ft,Et,lt,se,G,Bt,Tt,ut,He,F,w,Y,he,pe,fe,Oe,Te,Qe,Xe,Me,Ee,qe,Ye,Ne,_t,z,Ae,xe,Pe,ve,de,je,at;if(U._startClamp=U._endClamp=!1,U._dir=W,x*=45,U.scroller=H,U.scroll=N?N.time.bind(N):me,Ze=me(),U.vars=n,r=r||n.animation,"refreshPriority"in n&&(hM=1,n.refreshPriority===-9999&&(Gu=U)),K.tweenScroll=K.tweenScroll||{top:xy(H,zn),left:xy(H,Ai)},U.tweenTo=ge=K.tweenScroll[W.p],U.scrubDuration=function(Ue){Ae=bu(Ue)&&Ue,Ae?z?z.duration(Ue):z=et.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ae,paused:!0,onComplete:function(){return S&&S(U)}}):(z&&z.progress(1).kill(),z=0)},r&&(r.vars.lazy=!1,r._initted&&!U.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),U.animation=r.pause(),r.scrollTrigger=U,U.scrubDuration(v),Ne=0,d||(d=r.vars.id)),C&&((!Jo(C)||C.push)&&(C={snapTo:C}),"scrollBehavior"in qt.style&&et.set(ee?[qt,nr]:H,{scrollBehavior:"auto"}),Nt.forEach(function(Ue){return di(Ue)&&Ue.target===(ee?un.scrollingElement||nr:H)&&(Ue.smooth=!1)}),Ge=di(C.snapTo)?C.snapTo:C.snapTo==="labels"?v3(r):C.snapTo==="labelsDirectional"?x3(r):C.directional!==!1?function(Ue,ht){return c_(C.snapTo)(Ue,ci()-ke<500?0:ht.direction)}:et.utils.snap(C.snapTo),xe=C.duration||{min:.1,max:2},xe=Jo(xe)?Ou(xe.min,xe.max):Ou(xe,xe),Pe=et.delayedCall(C.delay||Ae/2||.1,function(){var Ue=me(),ht=ci()-ke<500,ct=ge.tween;if((ht||Math.abs(U.getVelocity())<10)&&!ct&&!Ud&&be!==Ue){var pt=(Ue-We)/ut,on=r&&!k?r.totalProgress():pt,vt=ht?0:(on-_t)/(ci()-Au)*1e3||0,Kt=et.utils.clamp(-pt,1-pt,tl(vt/2)*vt/.185),Tn=pt+(C.inertia===!1?0:Kt),tn,Xt,Pt=C,Fn=Pt.onStart,Zt=Pt.onInterrupt,Gn=Pt.onComplete;if(tn=Ge(Tn,U),bu(tn)||(tn=Tn),Xt=Math.max(0,Math.round(We+tn*ut)),Ue<=ft&&Ue>=We&&Xt!==Ue){if(ct&&!ct._initted&&ct.data<=tl(Xt-Ue))return;C.inertia===!1&&(Kt=tn-pt),ge(Xt,{duration:xe(tl(Math.max(tl(Tn-on),tl(tn-on))*.185/vt/.05||0)),ease:C.ease||"power3",data:tl(Xt-Ue),onInterrupt:function(){return Pe.restart(!0)&&Zt&&Zt(U)},onComplete:function(){U.update(),be=me(),r&&!k&&(z?z.resetTo("totalProgress",tn,r._tTime/r._tDur):r.progress(tn)),Ne=_t=r&&!k?r.totalProgress():U.progress,A&&A(U),Gn&&Gn(U)}},Ue,Kt*ut,Xt-Ue-Kt*ut),Fn&&Fn(U,ge.tween)}}else U.isActive&&be!==Ue&&Pe.restart(!0)}).pause()),d&&(wg[d]=U),g=U.trigger=ki(g||_!==!0&&_),at=g&&g._gsap&&g._gsap.stRevert,at&&(at=at(U)),_=_===!0?g:ki(_),er(c)&&(c={targets:g,className:c}),_&&(M===!1||M===Mr||(M=!M&&_.parentNode&&_.parentNode.style&&Er(_.parentNode).display==="flex"?!1:In),U.pin=_,Le=et.core.getCache(_),Le.spacer?He=Le.pinState:(I&&(I=ki(I),I&&!I.nodeType&&(I=I.current||I.nativeElement),Le.spacerIsNative=!!I,I&&(Le.spacerState=jf(I))),Le.spacer=Y=I||un.createElement("div"),Y.classList.add("pin-spacer"),d&&Y.classList.add("pin-spacer-"+d),Le.pinState=He=jf(_)),n.force3D!==!1&&et.set(_,{force3D:!0}),U.spacer=Y=Le.spacer,Ye=Er(_),Qe=Ye[M+W.os2],pe=et.getProperty(_),fe=et.quickSetter(_,W.a,Bn),um(_,Y,Ye),w=jf(_)),q){Bt=Jo(q)?dy(q,hy):hy,se=Yf("scroller-start",d,H,W,Bt,0),G=Yf("scroller-end",d,H,W,Bt,0,se),he=se["offset"+W.op.d2];var Ft=ki(Eo(H,"content")||H);Et=this.markerStart=Yf("start",d,Ft,W,Bt,he,0,N),lt=this.markerEnd=Yf("end",d,Ft,W,Bt,he,0,N),N&&(je=et.quickSetter([Et,lt],W.a,Bn)),!Z&&!(os.length&&Eo(H,"fixedMarkers")===!0)&&(_3(ee?qt:H),et.set([se,G],{force3D:!0}),Me=et.quickSetter(se,W.a,Bn),qe=et.quickSetter(G,W.a,Bn))}if(N){var Be=N.vars.onUpdate,nt=N.vars.onUpdateParams;N.eventCallback("onUpdate",function(){U.update(0,0,1),Be&&Be.apply(N,nt||[])})}if(U.previous=function(){return Rt[Rt.indexOf(U)-1]},U.next=function(){return Rt[Rt.indexOf(U)+1]},U.revert=function(Ue,ht){if(!ht)return U.kill(!0);var ct=Ue!==!1||!U.enabled,pt=ui;ct!==U.isReverted&&(ct&&(ve=Math.max(me(),U.scroll.rec||0),ne=U.progress,de=r&&r.progress()),Et&&[Et,lt,se,G].forEach(function(on){return on.style.display=ct?"none":"block"}),ct&&(ui=U,U.update(ct)),_&&(!L||!U.isActive)&&(ct?M3(_,Y,He):um(_,Y,Er(_),Xe)),ct||U.update(ct),ui=pt,U.isReverted=ct)},U.refresh=function(Ue,ht,ct,pt){if(!((ui||!U.enabled)&&!ht)){if(_&&Ue&&Rr){$n(o,"scrollEnd",TM);return}!Ti&&O&&O(U),ui=U,ge.tween&&!ct&&(ge.tween.kill(),ge.tween=0),z&&z.pause(),E&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ke){return Ke.vars.immediateRender&&Ke.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var on=J(),vt=Ce(),Kt=N?N.duration():is(H,W),Tn=ut<=.01||!ut,tn=0,Xt=pt||0,Pt=Jo(ct)?ct.end:n.end,Fn=n.endTrigger||g,Zt=Jo(ct)?ct.start:n.start||(n.start===0||!g?0:_?"0 0":"0 100%"),Gn=U.pinnedContainer=n.pinnedContainer&&ki(n.pinnedContainer,U),mi=g&&Math.max(0,Rt.indexOf(U))||0,xn=mi,yn,wn,br,Bs,P,j,le,oe,re,Ie,Fe,De,ze;for(q&&Jo(ct)&&(De=et.getProperty(se,W.p),ze=et.getProperty(G,W.p));xn-- >0;)j=Rt[xn],j.end||j.refresh(0,1)||(ui=U),le=j.pin,le&&(le===g||le===_||le===Gn)&&!j.isReverted&&(Ie||(Ie=[]),Ie.unshift(j),j.revert(!0,!0)),j!==Rt[xn]&&(mi--,xn--);for(di(Zt)&&(Zt=Zt(U)),Zt=ly(Zt,"start",U),We=_y(Zt,g,on,W,me(),Et,se,U,vt,te,Z,Kt,N,U._startClamp&&"_startClamp")||(_?-.001:0),di(Pt)&&(Pt=Pt(U)),er(Pt)&&!Pt.indexOf("+=")&&(~Pt.indexOf(" ")?Pt=(er(Zt)?Zt.split(" ")[0]:"")+Pt:(tn=od(Pt.substr(2),on),Pt=er(Zt)?Zt:(N?et.utils.mapRange(0,N.duration(),N.scrollTrigger.start,N.scrollTrigger.end,We):We)+tn,Fn=g)),Pt=ly(Pt,"end",U),ft=Math.max(We,_y(Pt||(Fn?"100% 0":Kt),Fn,on,W,me()+tn,lt,G,U,vt,te,Z,Kt,N,U._endClamp&&"_endClamp"))||-.001,tn=0,xn=mi;xn--;)j=Rt[xn]||{},le=j.pin,le&&j.start-j._pinPush<=We&&!N&&j.end>0&&(yn=j.end-(U._startClamp?Math.max(0,j.start):j.start),(le===g&&j.start-j._pinPush<We||le===Gn)&&isNaN(Zt)&&(tn+=yn*(1-j.progress)),le===_&&(Xt+=yn));if(We+=tn,ft+=tn,U._startClamp&&(U._startClamp+=tn),U._endClamp&&!Ti&&(U._endClamp=ft||-.001,ft=Math.min(ft,is(H,W))),ut=ft-We||(We-=.01)&&.001,Tn&&(ne=et.utils.clamp(0,1,et.utils.normalize(We,ft,ve))),U._pinPush=Xt,Et&&tn&&(yn={},yn[W.a]="+="+tn,Gn&&(yn[W.p]="-="+me()),et.set([Et,lt],yn)),_&&!(Tg&&U.end>=is(H,W)))yn=Er(_),Bs=W===zn,br=me(),Oe=parseFloat(pe(W.a))+Xt,!Kt&&ft>1&&(Fe=(ee?un.scrollingElement||nr:H).style,Fe={style:Fe,value:Fe["overflow"+W.a.toUpperCase()]},ee&&Er(qt)["overflow"+W.a.toUpperCase()]!=="scroll"&&(Fe.style["overflow"+W.a.toUpperCase()]="scroll")),um(_,Y,yn),w=jf(_),wn=Cs(_,!0),oe=Z&&Ro(H,Bs?Ai:zn)(),M?(Xe=[M+W.os2,ut+Xt+Bn],Xe.t=Y,xn=M===In?Ad(_,W)+ut+Xt:0,xn&&(Xe.push(W.d,xn+Bn),Y.style.flexBasis!=="auto"&&(Y.style.flexBasis=xn+Bn)),ml(Xe),Gn&&Rt.forEach(function(Ke){Ke.pin===Gn&&Ke.vars.pinSpacing!==!1&&(Ke._subPinOffset=!0)}),Z&&me(ve)):(xn=Ad(_,W),xn&&Y.style.flexBasis!=="auto"&&(Y.style.flexBasis=xn+Bn)),Z&&(P={top:wn.top+(Bs?br-We:oe)+Bn,left:wn.left+(Bs?oe:br-We)+Bn,boxSizing:"border-box",position:"fixed"},P[ca]=P["max"+Cl]=Math.ceil(wn.width)+Bn,P[fa]=P["max"+u_]=Math.ceil(wn.height)+Bn,P[Mr]=P[Mr+Vu]=P[Mr+Bu]=P[Mr+Hu]=P[Mr+zu]="0",P[In]=yn[In],P[In+Vu]=yn[In+Vu],P[In+Bu]=yn[In+Bu],P[In+Hu]=yn[In+Hu],P[In+zu]=yn[In+zu],F=T3(He,P,L),Ti&&me(0)),r?(re=r._initted,rm(1),r.render(r.duration(),!0,!0),Te=pe(W.a)-Oe+ut+Xt,Ee=Math.abs(ut-Te)>1,Z&&Ee&&F.splice(F.length-2,2),r.render(0,!0,!0),re||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),rm(0)):Te=ut,Fe&&(Fe.value?Fe.style["overflow"+W.a.toUpperCase()]=Fe.value:Fe.style.removeProperty("overflow-"+W.a));else if(g&&me()&&!N)for(wn=g.parentNode;wn&&wn!==qt;)wn._pinOffset&&(We-=wn._pinOffset,ft-=wn._pinOffset),wn=wn.parentNode;Ie&&Ie.forEach(function(Ke){return Ke.revert(!1,!0)}),U.start=We,U.end=ft,Ze=It=Ti?ve:me(),!N&&!Ti&&(Ze<ve&&me(ve),U.scroll.rec=0),U.revert(!1,!0),ke=ci(),Pe&&(be=-1,Pe.restart(!0)),ui=0,r&&k&&(r._initted||de)&&r.progress()!==de&&r.progress(de||0,!0).render(r.time(),!0,!0),(Tn||ne!==U.progress||N||E||r&&!r._initted)&&(r&&!k&&(r._initted||ne||r.vars.immediateRender!==!1)&&r.totalProgress(N&&We<-.001&&!ne?et.utils.normalize(We,ft,0):ne,!0),U.progress=Tn||(Ze-We)/ut===ne?0:ne),_&&M&&(Y._pinOffset=Math.round(U.progress*Te)),z&&z.invalidate(),isNaN(De)||(De-=et.getProperty(se,W.p),ze-=et.getProperty(G,W.p),qf(se,W,De),qf(Et,W,De-(pt||0)),qf(G,W,ze),qf(lt,W,ze-(pt||0))),Tn&&!Ti&&U.update(),p&&!Ti&&!Tt&&(Tt=!0,p(U),Tt=!1)}},U.getVelocity=function(){return(me()-It)/(ci()-Au)*1e3||0},U.endAnimation=function(){Su(U.callbackAnimation),r&&(z?z.progress(1):r.paused()?k||Su(r,U.direction<0,1):Su(r,r.reversed()))},U.labelToScroll=function(Ue){return r&&r.labels&&(We||U.refresh()||We)+r.labels[Ue]/r.duration()*ut||0},U.getTrailing=function(Ue){var ht=Rt.indexOf(U),ct=U.direction>0?Rt.slice(0,ht).reverse():Rt.slice(ht+1);return(er(Ue)?ct.filter(function(pt){return pt.vars.preventOverlaps===Ue}):ct).filter(function(pt){return U.direction>0?pt.end<=We:pt.start>=ft})},U.update=function(Ue,ht,ct){if(!(N&&!ct&&!Ue)){var pt=Ti===!0?ve:U.scroll(),on=Ue?0:(pt-We)/ut,vt=on<0?0:on>1?1:on||0,Kt=U.progress,Tn,tn,Xt,Pt,Fn,Zt,Gn,mi;if(ht&&(It=Ze,Ze=N?me():pt,C&&(_t=Ne,Ne=r&&!k?r.totalProgress():vt)),x&&_&&!ui&&!Vf&&Rr&&(!vt&&We<pt+(pt-It)/(ci()-Au)*x?vt=1e-4:vt===1&&ft>pt+(pt-It)/(ci()-Au)*x&&(vt=.9999)),vt!==Kt&&U.enabled){if(Tn=U.isActive=!!vt&&vt<1,tn=!!Kt&&Kt<1,Zt=Tn!==tn,Fn=Zt||!!vt!=!!Kt,U.direction=vt>Kt?1:-1,U.progress=vt,Fn&&!ui&&(Xt=vt&&!Kt?0:vt===1?1:Kt===1?2:3,k&&(Pt=!Zt&&V[Xt+1]!=="none"&&V[Xt+1]||V[Xt],mi=r&&(Pt==="complete"||Pt==="reset"||Pt in r))),D&&(Zt||mi)&&(mi||v||!r)&&(di(D)?D(U):U.getTrailing(D).forEach(function(br){return br.endAnimation()})),k||(z&&!ui&&!Vf?(z._dp._time-z._start!==z._time&&z.render(z._dp._time-z._start),z.resetTo?z.resetTo("totalProgress",vt,r._tTime/r._tDur):(z.vars.totalProgress=vt,z.invalidate().restart())):r&&r.totalProgress(vt,!!(ui&&(ke||Ue)))),_){if(Ue&&M&&(Y.style[M+W.os2]=Qe),!Z)fe(Ru(Oe+Te*vt));else if(Fn){if(Gn=!Ue&&vt>Kt&&ft+1>pt&&pt+1>=is(H,W),L)if(!Ue&&(Tn||Gn)){var xn=Cs(_,!0),yn=pt-We;vy(_,qt,xn.top+(W===zn?yn:0)+Bn,xn.left+(W===zn?0:yn)+Bn)}else vy(_,Y);ml(Tn||Gn?F:w),Ee&&vt<1&&Tn||fe(Oe+(vt===1&&!Gn?Te:0))}}C&&!ge.tween&&!ui&&!Vf&&Pe.restart(!0),c&&(Zt||b&&vt&&(vt<1||!sm))&&ec(c.targets).forEach(function(br){return br.classList[Tn||b?"add":"remove"](c.className)}),u&&!k&&!Ue&&u(U),Fn&&!ui?(k&&(mi&&(Pt==="complete"?r.pause().totalProgress(1):Pt==="reset"?r.restart(!0).pause():Pt==="restart"?r.restart(!0):r[Pt]()),u&&u(U)),(Zt||!sm)&&(h&&Zt&&am(U,h),Q[Xt]&&am(U,Q[Xt]),b&&(vt===1?U.kill(!1,1):Q[Xt]=0),Zt||(Xt=vt===1?1:3,Q[Xt]&&am(U,Q[Xt]))),T&&!Tn&&Math.abs(U.getVelocity())>(bu(T)?T:2500)&&(Su(U.callbackAnimation),z?z.progress(1):Su(r,Pt==="reverse"?1:!vt,1))):k&&u&&!ui&&u(U)}if(qe){var wn=N?pt/N.duration()*(N._caScrollDist||0):pt;Me(wn+(se._isFlipped?1:0)),qe(wn)}je&&je(-pt/N.duration()*(N._caScrollDist||0))}},U.enable=function(Ue,ht){U.enabled||(U.enabled=!0,$n(H,"resize",Pu),ee||$n(H,"scroll",nl),O&&$n(o,"refreshInit",O),Ue!==!1&&(U.progress=ne=0,Ze=It=be=me()),ht!==!1&&U.refresh())},U.getTween=function(Ue){return Ue&&ge?ge.tween:z},U.setPositions=function(Ue,ht,ct,pt){if(N){var on=N.scrollTrigger,vt=N.duration(),Kt=on.end-on.start;Ue=on.start+Kt*Ue/vt,ht=on.start+Kt*ht/vt}U.refresh(!1,!1,{start:uy(Ue,ct&&!!U._startClamp),end:uy(ht,ct&&!!U._endClamp)},pt),U.update()},U.adjustPinSpacing=function(Ue){if(Xe&&Ue){var ht=Xe.indexOf(W.d)+1;Xe[ht]=parseFloat(Xe[ht])+Ue+Bn,Xe[1]=parseFloat(Xe[1])+Ue+Bn,ml(Xe)}},U.disable=function(Ue,ht){if(Ue!==!1&&U.revert(!0,!0),U.enabled&&(U.enabled=U.isActive=!1,ht||z&&z.pause(),ve=0,Le&&(Le.uncache=1),O&&qn(o,"refreshInit",O),Pe&&(Pe.pause(),ge.tween&&ge.tween.kill()&&(ge.tween=0)),!ee)){for(var ct=Rt.length;ct--;)if(Rt[ct].scroller===H&&Rt[ct]!==U)return;qn(H,"resize",Pu),ee||qn(H,"scroll",nl)}},U.kill=function(Ue,ht){U.disable(Ue,ht),z&&!ht&&z.kill(),d&&delete wg[d];var ct=Rt.indexOf(U);ct>=0&&Rt.splice(ct,1),ct===Ei&&ld>0&&Ei--,ct=0,Rt.forEach(function(pt){return pt.scroller===U.scroller&&(ct=1)}),ct||Ti||(U.scroll.rec=0),r&&(r.scrollTrigger=null,Ue&&r.revert({kill:!1}),ht||r.kill()),Et&&[Et,lt,se,G].forEach(function(pt){return pt.parentNode&&pt.parentNode.removeChild(pt)}),Gu===U&&(Gu=0),_&&(Le&&(Le.uncache=1),ct=0,Rt.forEach(function(pt){return pt.pin===_&&ct++}),ct||(Le.spacer=0)),n.onKill&&n.onKill(U)},Rt.push(U),U.enable(!1,!1),at&&at(U),r&&r.add&&!ut){var xt=U.update;U.update=function(){U.update=xt,Nt.cache++,We||ft||U.refresh()},et.delayedCall(.01,U.update),ut=.01,We=ft=0}else U.refresh();_&&S3()},o.register=function(n){return il||(et=n||vM(),_M()&&window.document&&o.enable(),il=Cu),il},o.defaults=function(n){if(n)for(var r in n)Xf[r]=n[r];return Xf},o.disable=function(n,r){Cu=0,Rt.forEach(function(u){return u[r?"kill":"disable"](n)}),qn(Lt,"wheel",nl),qn(un,"scroll",nl),clearInterval(zf),qn(un,"touchcancel",Zr),qn(qt,"touchstart",Zr),Gf(qn,un,"pointerdown,touchstart,mousedown",cy),Gf(qn,un,"pointerup,touchend,mouseup",fy),wd.kill(),Hf(qn);for(var a=0;a<Nt.length;a+=3)Wf(qn,Nt[a],Nt[a+1]),Wf(qn,Nt[a],Nt[a+2])},o.enable=function(){if(Lt=window,un=document,nr=un.documentElement,qt=un.body,et&&(ec=et.utils.toArray,Ou=et.utils.clamp,Eg=et.core.context||Zr,rm=et.core.suppressOverwrites||Zr,s_=Lt.history.scrollRestoration||"auto",Ag=Lt.pageYOffset||0,et.core.globals("ScrollTrigger",o),qt)){Cu=1,pl=document.createElement("div"),pl.style.height="100vh",pl.style.position="absolute",RM(),p3(),Dn.register(et),o.isTouch=Dn.isTouch,ho=Dn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Mg=Dn.isTouch===1,$n(Lt,"wheel",nl),r_=[Lt,un,nr,qt],et.matchMedia?(o.matchMedia=function(h){var p=et.matchMedia(),v;for(v in h)p.add(v,h[v]);return p},et.addEventListener("matchMediaInit",function(){AM(),f_()}),et.addEventListener("matchMediaRevert",function(){return wM()}),et.addEventListener("matchMedia",function(){sa(0,1),ga("matchMedia")}),et.matchMedia().add("(orientation: portrait)",function(){return lm(),lm})):console.warn("Requires GSAP 3.11.0 or later"),lm(),$n(un,"scroll",nl);var n=qt.hasAttribute("style"),r=qt.style,a=r.borderTopStyle,u=et.core.Animation.prototype,c,d;for(u.revert||Object.defineProperty(u,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",c=Cs(qt),zn.m=Math.round(c.top+zn.sc())||0,Ai.m=Math.round(c.left+Ai.sc())||0,a?r.borderTopStyle=a:r.removeProperty("border-top-style"),n||(qt.setAttribute("style",""),qt.removeAttribute("style")),zf=setInterval(py,250),et.delayedCall(.5,function(){return Vf=0}),$n(un,"touchcancel",Zr),$n(qt,"touchstart",Zr),Gf($n,un,"pointerdown,touchstart,mousedown",cy),Gf($n,un,"pointerup,touchend,mouseup",fy),Sg=et.utils.checkPrefix("transform"),ud.push(Sg),il=ci(),wd=et.delayedCall(.2,sa).pause(),rl=[un,"visibilitychange",function(){var h=Lt.innerWidth,p=Lt.innerHeight;un.hidden?(oy=h,ay=p):(oy!==h||ay!==p)&&Pu()},un,"DOMContentLoaded",sa,Lt,"load",sa,Lt,"resize",Pu],Hf($n),Rt.forEach(function(h){return h.enable(0,1)}),d=0;d<Nt.length;d+=3)Wf(qn,Nt[d],Nt[d+1]),Wf(qn,Nt[d],Nt[d+2])}},o.config=function(n){"limitCallbacks"in n&&(sm=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(zf)||(zf=r)&&setInterval(py,r),"ignoreMobileResize"in n&&(Mg=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Hf(qn)||Hf($n,n.autoRefreshEvents||"none"),pM=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,r){var a=ki(n),u=Nt.indexOf(a),c=pa(a);~u&&Nt.splice(u,c?6:2),r&&(c?os.unshift(Lt,r,qt,r,nr,r):os.unshift(a,r))},o.clearMatchMedia=function(n){Rt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},o.isInViewport=function(n,r,a){var u=(er(n)?ki(n):n).getBoundingClientRect(),c=u[a?ca:fa]*r||0;return a?u.right-c>0&&u.left+c<Lt.innerWidth:u.bottom-c>0&&u.top+c<Lt.innerHeight},o.positionInViewport=function(n,r,a){er(n)&&(n=ki(n));var u=n.getBoundingClientRect(),c=u[a?ca:fa],d=r==null?c/2:r in Cd?Cd[r]*c:~r.indexOf("%")?parseFloat(r)*c/100:parseFloat(r)||0;return a?(u.left+d)/Lt.innerWidth:(u.top+d)/Lt.innerHeight},o.killAll=function(n){if(Rt.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var r=ma.killAll||[];ma={},r.forEach(function(a){return a()})}},o})();bt.version="3.14.2";bt.saveStyles=function(o){return o?ec(o).forEach(function(e){if(e&&e.style){var t=Ji.indexOf(e);t>=0&&Ji.splice(t,5),Ji.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),et.core.getCache(e),Eg())}}):Ji};bt.revert=function(o,e){return f_(!o,e)};bt.create=function(o,e){return new bt(o,e)};bt.refresh=function(o){return o?Pu(!0):(il||bt.register())&&sa(!0)};bt.update=function(o){return++Nt.cache&&Ls(o===!0?2:0)};bt.clearScrollMemory=CM;bt.maxScroll=function(o,e){return is(o,e?Ai:zn)};bt.getScrollFunc=function(o,e){return Ro(ki(o),e?Ai:zn)};bt.getById=function(o){return wg[o]};bt.getAll=function(){return Rt.filter(function(o){return o.vars.id!=="ScrollSmoother"})};bt.isScrolling=function(){return!!Rr};bt.snapDirectional=c_;bt.addEventListener=function(o,e){var t=ma[o]||(ma[o]=[]);~t.indexOf(e)||t.push(e)};bt.removeEventListener=function(o,e){var t=ma[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};bt.batch=function(o,e){var t=[],n={},r=e.interval||.016,a=e.batchMax||1e9,u=function(h,p){var v=[],g=[],_=et.delayedCall(r,function(){p(v,g),v=[],g=[]}).pause();return function(M){v.length||_.restart(!0),v.push(M.trigger),g.push(M),a<=v.length&&_.progress(1)}},c;for(c in e)n[c]=c.substr(0,2)==="on"&&di(e[c])&&c!=="onRefreshInit"?u(c,e[c]):e[c];return di(a)&&(a=a(),$n(bt,"refresh",function(){return a=e.batchMax()})),ec(o).forEach(function(d){var h={};for(c in n)h[c]=n[c];h.trigger=d,t.push(bt.create(h))}),t};var yy=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},cm=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Dn.isTouch?" pinch-zoom":""):"none",e===nr&&o(qt,t)},$f={auto:1,scroll:1},A3=function(e){var t=e.event,n=e.target,r=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,u=a._gsap||et.core.getCache(a),c=ci(),d;if(!u._isScrollT||c-u._isScrollT>2e3){for(;a&&a!==qt&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!($f[(d=Er(a)).overflowY]||$f[d.overflowX]));)a=a.parentNode;u._isScroll=a&&a!==n&&!pa(a)&&($f[(d=Er(a)).overflowY]||$f[d.overflowX]),u._isScrollT=c}(u._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},PM=function(e,t,n,r){return Dn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&A3,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&$n(un,Dn.eventTypes[0],My,!1,!0)},onDisable:function(){return qn(un,Dn.eventTypes[0],My,!0)}})},C3=/(input|label|select|textarea)/i,Sy,My=function(e){var t=C3.test(e.target.tagName);(t||Sy)&&(e._gsapAllow=!0,Sy=t)},R3=function(e){Jo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,a=t.allowNestedScroll,u=t.onRelease,c,d,h=ki(e.target)||nr,p=et.core.globals().ScrollSmoother,v=p&&p.get(),g=ho&&(e.content&&ki(e.content)||v&&e.content!==!1&&!v.smooth()&&v.content()),_=Ro(h,zn),M=Ro(h,Ai),E=1,x=(Dn.isTouch&&Lt.visualViewport?Lt.visualViewport.scale*Lt.visualViewport.width:Lt.outerWidth)/Lt.innerWidth,S=0,A=di(r)?function(){return r(c)}:function(){return r||2.8},b,C,L=PM(h,e.type,!0,a),I=function(){return C=!1},N=Zr,T=Zr,D=function(){d=is(h,zn),T=Ou(ho?1:0,d),n&&(N=Ou(0,is(h,Ai))),b=da},W=function(){g._gsap.y=Ru(parseFloat(g._gsap.y)+_.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",_.offset=_.cacheID=0},k=function(){if(C){requestAnimationFrame(I);var q=Ru(c.deltaY/2),te=T(_.v-q);if(g&&te!==_.v+_.offset){_.offset=te-_.v;var U=Ru((parseFloat(g&&g._gsap.y)||0)-_.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",g._gsap.y=U+"px",_.cacheID=Nt.cache,Ls()}return!0}_.offset&&W(),C=!0},H,K,ee,Z,Q=function(){D(),H.isActive()&&H.vars.scrollY>d&&(_()>d?H.progress(1)&&_(d):H.resetTo("scrollY",d))};return g&&et.set(g,{y:"+=0"}),e.ignoreCheck=function(V){return ho&&V.type==="touchmove"&&k()||E>1.05&&V.type!=="touchstart"||c.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){C=!1;var V=E;E=Ru((Lt.visualViewport&&Lt.visualViewport.scale||1)/x),H.pause(),V!==E&&cm(h,E>1.01?!0:n?!1:"x"),K=M(),ee=_(),D(),b=da},e.onRelease=e.onGestureStart=function(V,q){if(_.offset&&W(),!q)Z.restart(!0);else{Nt.cache++;var te=A(),U,O;n&&(U=M(),O=U+te*.05*-V.velocityX/.227,te*=yy(M,U,O,is(h,Ai)),H.vars.scrollX=N(O)),U=_(),O=U+te*.05*-V.velocityY/.227,te*=yy(_,U,O,is(h,zn)),H.vars.scrollY=T(O),H.invalidate().duration(te).play(.01),(ho&&H.vars.scrollY>=d||U>=d-1)&&et.to({},{onUpdate:Q,duration:te})}u&&u(V)},e.onWheel=function(){H._ts&&H.pause(),ci()-S>1e3&&(b=0,S=ci())},e.onChange=function(V,q,te,U,O){if(da!==b&&D(),q&&n&&M(N(U[2]===q?K+(V.startX-V.x):M()+q-U[1])),te){_.offset&&W();var J=O[2]===te,Ce=J?ee+V.startY-V.y:_()+te-O[1],be=T(Ce);J&&Ce!==be&&(ee+=be-Ce),_(be)}(te||q)&&Ls()},e.onEnable=function(){cm(h,n?!1:"x"),bt.addEventListener("refresh",Q),$n(Lt,"resize",Q),_.smooth&&(_.target.style.scrollBehavior="auto",_.smooth=M.smooth=!1),L.enable()},e.onDisable=function(){cm(h,!0),qn(Lt,"resize",Q),bt.removeEventListener("refresh",Q),L.kill()},e.lockAxis=e.lockAxis!==!1,c=new Dn(e),c.iOS=ho,ho&&!_()&&_(1),ho&&et.ticker.add(Zr),Z=c._dc,H=et.to(c,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:bM(_,_(),function(){return H.pause()})},onUpdate:Ls,onComplete:Z.vars.onComplete}),c};bt.sort=function(o){if(di(o))return Rt.sort(o);var e=Lt.pageYOffset||0;return bt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Lt.innerHeight}),Rt.sort(o||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};bt.observe=function(o){return new Dn(o)};bt.normalizeScroll=function(o){if(typeof o>"u")return Mi;if(o===!0&&Mi)return Mi.enable();if(o===!1){Mi&&Mi.kill(),Mi=o;return}var e=o instanceof Dn?o:R3(o);return Mi&&Mi.target===e.target&&Mi.kill(),pa(e.target)&&(Mi=e),e};bt.core={_getVelocityProp:yg,_inputObserver:PM,_scrollers:Nt,_proxies:os,bridge:{ss:function(){Rr||ga("scrollStart"),Rr=ci()},ref:function(){return ui}}};vM()&&et.registerPlugin(bt);Bi.registerPlugin(bt);const b3=["React","Vue.js","TypeScript","Firebase","Firestore","Node.js","Python","RWD","SEO","Vite","Git","Monte Carlo"],P3=()=>{const o=Jt.useRef(null),e=Jt.useRef(null),t=Jt.useRef(null),n=Jt.useRef(null);return Jt.useEffect(()=>{const r=Bi.context(()=>{Bi.fromTo(e.current,{opacity:0,y:30},{opacity:1,y:0,duration:.8,scrollTrigger:{trigger:e.current,start:"top 82%",once:!0}}),Bi.fromTo(t.current,{opacity:0,x:-30},{opacity:1,x:0,duration:.85,delay:.15,scrollTrigger:{trigger:t.current,start:"top 82%",once:!0}}),n.current&&Bi.fromTo(Array.from(n.current.children),{opacity:0,y:22,scale:.85},{opacity:1,y:0,scale:1,duration:.4,stagger:.06,scrollTrigger:{trigger:n.current,start:"top 82%",once:!0}})},o);return()=>r.revert()},[]),_e.jsx("section",{id:"about",className:"about",ref:o,children:_e.jsxs("div",{className:"container",children:[_e.jsx("h2",{ref:e,className:"section-title",style:{opacity:0},children:"關於我"}),_e.jsxs("div",{className:"about-content",children:[_e.jsxs("div",{className:"about-left",ref:t,style:{opacity:0},children:[_e.jsx("p",{className:"about-intro",children:"我是 Leon，一名專注於 Firebase 全端整合與快速交付的網頁開發者。 擅長將業務需求轉化為高品質的數位產品，有真實產業專案經驗， 從活動查詢系統到即時排名平台，均獨立完成開發與部署。"}),_e.jsx("p",{className:"about-intro",children:"曾深入服務於娛樂產業，理解業主對「準時交付＋超乎預期」的要求。 透過 AI 輔助開發流程，讓每一分預算都能發揮最大價值。"})]}),_e.jsxs("div",{className:"about-right",children:[_e.jsx("h3",{className:"skills-title",children:"技術標籤"}),_e.jsx("div",{ref:n,className:"skills-cloud",children:b3.map((r,a)=>_e.jsx("span",{className:"skill-tag",children:r},a))})]})]})]})})},D3=[{id:1,title:"三日英雄榜系統",description:"為娛樂產業設計的即時排名平台，整合 Firebase 生態系實現自動化 POS 資料處理、雙店數據同步，及完整後台管理系統。",image:"projects/HERO.PNG",tech:["Vue.js","TypeScript","Firebase","Node.js"],links:{demo:"https://hero-9c232.web.app",github:"https://github.com/Leon-cypher/Hero"}},{id:2,title:"奧瑪哈高低牌計算器",description:"支援 2–9 位玩家的專業勝率分析工具，採用蒙特卡羅模擬算法，提供精確高低分池勝率統計與視覺化選牌介面。",image:"projects/omaha.PNG",lightBg:!0,tech:["Vue.js 3","Python","Monte Carlo","Responsive Design"],links:{demo:"https://leon-cypher.github.io/omaha_hilo_calculator/",github:"https://github.com/Leon-cypher/omaha_hilo_calculator"}},{id:3,title:"撲克活動查詢頁",description:"玩家即時積分查詢系統，連接 Firebase Firestore 實現即時數據更新，讓玩家隨時掌握最新積分排名與活動狀態。",image:"projects/活動查詢.PNG",tech:["React","Firebase Firestore","RWD"],links:{demo:"https://countpoint-march-2026-v2.web.app/",github:"https://github.com/Leon-cypher"}}];Bi.registerPlugin(bt);const L3=()=>{const o=Jt.useRef(null),e=Jt.useRef(null),t=Jt.useRef(null);return Jt.useEffect(()=>{const n=Bi.context(()=>{Bi.fromTo(e.current,{opacity:0,y:30},{opacity:1,y:0,duration:.8,scrollTrigger:{trigger:e.current,start:"top 82%",once:!0}}),t.current&&Bi.fromTo(Array.from(t.current.children),{opacity:0,y:60},{opacity:1,y:0,duration:.75,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:t.current,start:"top 82%",once:!0}})},o);return()=>n.revert()},[]),_e.jsx("section",{id:"portfolio",className:"portfolio",ref:o,children:_e.jsxs("div",{className:"container",children:[_e.jsx("h2",{ref:e,className:"section-title",style:{opacity:0},children:"精選作品"}),_e.jsx("p",{className:"section-subtitle",children:"近期完成的開發專案"}),_e.jsx("div",{ref:t,className:"portfolio-grid",children:D3.map(n=>_e.jsxs("div",{className:`portfolio-card${n.lightBg?" light-bg":""}`,children:[_e.jsxs("div",{className:"card-image",children:[_e.jsx("img",{src:n.image,alt:n.title,loading:"lazy"}),_e.jsxs("div",{className:"card-overlay",children:[_e.jsx("a",{href:n.links.demo,className:"overlay-btn",target:"_blank",rel:"noopener noreferrer",children:"Live Demo"}),_e.jsx("a",{href:n.links.github,className:"overlay-btn outline",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]}),_e.jsx("div",{className:"card-gloss"})]}),_e.jsxs("div",{className:"card-body",children:[_e.jsx("h3",{className:"card-title",children:n.title}),_e.jsx("p",{className:"card-desc",children:n.description}),_e.jsx("div",{className:"card-tech",children:n.tech.map((r,a)=>_e.jsx("span",{className:"tech-tag",children:r},a))})]})]},n.id))})]})})};class ac{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const N3=()=>{if(!(typeof localStorage>"u"))return{get:o=>Promise.resolve(localStorage.getItem(o)),set:(o,e)=>Promise.resolve(localStorage.setItem(o,e)),remove:o=>Promise.resolve(localStorage.removeItem(o))}},Jn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:N3()},d_=o=>o?typeof o=="string"?{publicKey:o}:o.toString()==="[object Object]"?o:{}:{},I3=(o,e="https://api.emailjs.com")=>{if(!o)return;const t=d_(o);Jn.publicKey=t.publicKey,Jn.blockHeadless=t.blockHeadless,Jn.storageProvider=t.storageProvider,Jn.blockList=t.blockList,Jn.limitRate=t.limitRate,Jn.origin=t.origin||e},DM=async(o,e,t={})=>{const n=await fetch(Jn.origin+o,{method:"POST",headers:t,body:e}),r=await n.text(),a=new ac(n.status,r);if(n.ok)return a;throw a},LM=(o,e,t)=>{if(!o||typeof o!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},U3=o=>{if(o&&o.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},NM=o=>o.webdriver||!o.languages||o.languages.length===0,IM=()=>new ac(451,"Unavailable For Headless Browser"),F3=(o,e)=>{if(!Array.isArray(o))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},O3=o=>!o.list?.length||!o.watchVariable,k3=(o,e)=>o instanceof FormData?o.get(e):o[e],UM=(o,e)=>{if(O3(o))return!1;F3(o.list,o.watchVariable);const t=k3(e,o.watchVariable);return typeof t!="string"?!1:o.list.includes(t)},FM=()=>new ac(403,"Forbidden"),B3=(o,e)=>{if(typeof o!="number"||o<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},z3=async(o,e,t)=>{const n=Number(await t.get(o)||0);return e-Date.now()+n},OM=async(o,e,t)=>{if(!e.throttle||!t)return!1;B3(e.throttle,e.id);const n=e.id||o;return await z3(n,e.throttle,t)>0?!0:(await t.set(n,Date.now().toString()),!1)},kM=()=>new ac(429,"Too Many Requests"),V3=async(o,e,t,n)=>{const r=d_(n),a=r.publicKey||Jn.publicKey,u=r.blockHeadless||Jn.blockHeadless,c=r.storageProvider||Jn.storageProvider,d={...Jn.blockList,...r.blockList},h={...Jn.limitRate,...r.limitRate};return u&&NM(navigator)?Promise.reject(IM()):(LM(a,o,e),U3(t),t&&UM(d,t)?Promise.reject(FM()):await OM(location.pathname,h,c)?Promise.reject(kM()):DM("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:a,service_id:o,template_id:e,template_params:t}),{"Content-type":"application/json"}))},H3=o=>{if(!o||o.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},G3=o=>typeof o=="string"?document.querySelector(o):o,W3=async(o,e,t,n)=>{const r=d_(n),a=r.publicKey||Jn.publicKey,u=r.blockHeadless||Jn.blockHeadless,c=Jn.storageProvider||r.storageProvider,d={...Jn.blockList,...r.blockList},h={...Jn.limitRate,...r.limitRate};if(u&&NM(navigator))return Promise.reject(IM());const p=G3(t);LM(a,o,e),H3(p);const v=new FormData(p);return UM(d,v)?Promise.reject(FM()):await OM(location.pathname,h,c)?Promise.reject(kM()):(v.append("lib_version","4.4.1"),v.append("service_id",o),v.append("template_id",e),v.append("user_id",a),DM("/api/v1.0/email/send-form",v))},X3={init:I3,send:V3,sendForm:W3,EmailJSResponseStatus:ac};Bi.registerPlugin(bt);const Y3="service_kjhfp9g",j3="template_bij3dn6",q3="xQLFe7dPeY6b1DER6",Ey={name:"",email:"",phone:"",requirement:""},$3=()=>{const o=Jt.useRef(null),e=Jt.useRef(null),t=Jt.useRef(null),[n,r]=Jt.useState(Ey),[a,u]=Jt.useState(!1),[c,d]=Jt.useState(!1),[h,p]=Jt.useState("");Jt.useEffect(()=>{const _=Bi.context(()=>{Bi.fromTo([e.current,t.current],{opacity:0,y:40},{opacity:1,y:0,duration:.8,stagger:.15,scrollTrigger:{trigger:o.current,start:"top 80%",once:!0}})},o);return()=>_.revert()},[]);const v=_=>{r({...n,[_.target.name]:_.target.value}),p("")},g=async _=>{_.preventDefault(),u(!0),p("");const M={from_name:n.name,from_email:n.email,from_phone:n.phone,requirement:n.requirement};try{await X3.send(Y3,j3,M,q3),d(!0),r(Ey)}catch(E){console.error("EmailJS error:",E),p("發送失敗，請直接寄信至 ssps60152@gmail.com")}finally{u(!1)}};return _e.jsx("section",{id:"contact",className:"contact",ref:o,children:_e.jsx("div",{className:"container",children:_e.jsxs("div",{className:"contact-layout",children:[_e.jsxs("div",{className:"contact-left",ref:e,style:{opacity:0},children:[_e.jsxs("h2",{className:"contact-title",children:["準備好",_e.jsx("br",{}),"開始了嗎？"]}),_e.jsx("p",{className:"contact-subtitle",children:"無論是全新開發、功能新增，還是 Firebase 整合， 填寫右側表單後我會在 24 小時內回覆。"}),_e.jsxs("a",{href:"mailto:ssps60152@gmail.com",className:"contact-email",children:[_e.jsx("i",{className:"fas fa-envelope"}),"ssps60152@gmail.com"]})]}),_e.jsx("div",{className:"contact-form-wrap",ref:t,style:{opacity:0},children:c?_e.jsxs("div",{className:"form-success",children:[_e.jsx("div",{className:"form-success-icon",children:_e.jsx("i",{className:"fas fa-check-circle"})}),_e.jsx("h3",{children:"訊息已成功送出！"}),_e.jsx("p",{children:"感謝您的聯繫，我會盡快回覆您。"})]}):_e.jsxs("form",{className:"contact-form",onSubmit:g,children:[_e.jsxs("div",{className:"form-row",children:[_e.jsxs("div",{className:"form-group",children:[_e.jsx("label",{htmlFor:"name",children:"聯絡人 *"}),_e.jsx("input",{id:"name",name:"name",type:"text",placeholder:"您的姓名",value:n.name,onChange:v,required:!0})]}),_e.jsxs("div",{className:"form-group",children:[_e.jsx("label",{htmlFor:"phone",children:"手機號碼"}),_e.jsx("input",{id:"phone",name:"phone",type:"tel",placeholder:"09xx-xxx-xxx",value:n.phone,onChange:v})]})]}),_e.jsxs("div",{className:"form-group",children:[_e.jsx("label",{htmlFor:"email",children:"聯絡信箱 *"}),_e.jsx("input",{id:"email",name:"email",type:"email",placeholder:"your@email.com",value:n.email,onChange:v,required:!0})]}),_e.jsxs("div",{className:"form-group",children:[_e.jsx("label",{htmlFor:"requirement",children:"需求說明 *"}),_e.jsx("textarea",{id:"requirement",name:"requirement",placeholder:"請描述您的專案需求、時程、或任何想法...",value:n.requirement,onChange:v,required:!0})]}),h&&_e.jsx("p",{style:{color:"#f87171",fontSize:"0.85rem"},children:h}),_e.jsxs("div",{className:"form-submit",children:[_e.jsx("p",{className:"form-note",children:"標示 * 為必填欄位"}),_e.jsx("button",{type:"submit",className:`btn btn-gold ${a?"btn-sending":""}`,children:a?_e.jsxs(_e.Fragment,{children:[_e.jsx("i",{className:"fas fa-spinner fa-spin"})," 發送中…"]}):_e.jsxs(_e.Fragment,{children:[_e.jsx("i",{className:"fas fa-paper-plane"})," 送出訊息"]})})]})]})})]})})})},K3=()=>{const o=new Date().getFullYear();return _e.jsx("footer",{className:"footer",children:_e.jsxs("div",{className:"container",children:[_e.jsxs("div",{className:"footer-content",children:[_e.jsxs("div",{className:"footer-brand",children:[_e.jsxs("h3",{children:["Leon",_e.jsx("span",{style:{color:"var(--gold)"},children:"."})]}),_e.jsx("p",{children:"網頁開發 · Firebase · 快速交付"})]}),_e.jsxs("div",{className:"footer-social",children:[_e.jsx("a",{href:"https://github.com/Leon-cypher",className:"social-link",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:_e.jsx("i",{className:"fab fa-github"})}),_e.jsx("a",{href:"mailto:ssps60152@gmail.com",className:"social-link","aria-label":"Email",children:_e.jsx("i",{className:"fas fa-envelope"})})]})]}),_e.jsx("div",{className:"footer-bottom",children:_e.jsxs("p",{children:["© ",o," Leon. All rights reserved."]})})]})})};function Z3(){return _e.jsxs("div",{className:"App",children:[_e.jsx(R1,{}),_e.jsx(u3,{}),_e.jsx(P3,{}),_e.jsx(L3,{}),_e.jsx($3,{}),_e.jsx(K3,{})]})}C1.createRoot(document.getElementById("root")).render(_e.jsx(y1.StrictMode,{children:_e.jsx(Z3,{})}));

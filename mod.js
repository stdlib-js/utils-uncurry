// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function E(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),r.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var S=String.fromCharCode,O=isNaN,x=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,c,f,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(l(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),c+=n.arg||"",f+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function P(r){var e,t,n;if(!F(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=V(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var N,B=Object.prototype,C=B.toString,$=B.__defineGetter__,R=B.__defineSetter__,Y=B.__lookupGetter__,G=B.__lookupSetter__;N=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Y.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=B,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var L=N;function Z(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(r){return"boolean"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,J="function"==typeof q?q.toStringTag:"";var D=W()?function(r){var e,t,n,i,o;if(null==r)return X.call(r);t=r[J],o=J,e=null!=(i=r)&&z.call(i,o);try{r[J]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[J]=t:delete r[J],n}:function(r){return X.call(r)},H=Boolean,K=Boolean.prototype.toString;var Q=W();function rr(r){return"object"==typeof r&&(r instanceof H||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function er(r){return M(r)||rr(r)}function tr(){return new Function("return this;")()}Z(er,"isPrimitive",M),Z(er,"isObject",rr);var nr="object"==typeof self?self:null,ir="object"==typeof window?window:null,or="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ar="object"==typeof or?or:null,cr="object"==typeof globalThis?globalThis:null;var ur=function(r){if(arguments.length){if(!M(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return tr()}if(cr)return cr;if(nr)return nr;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=ur.document&&ur.document.childNodes,fr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;Z(sr,"REGEXP",pr);var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function dr(r){return null!==r&&"object"==typeof r}function hr(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return dr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var br="function"==typeof r||"object"==typeof fr||"function"==typeof lr?function(r){return hr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?hr(r).toLowerCase():e};function yr(r){return"function"===br(r)}function wr(r){return"number"==typeof r}var vr=Number,mr=vr.prototype.toString;var Er=W();function jr(r){return"object"==typeof r&&(r instanceof vr||(Er?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function _r(r){return wr(r)||jr(r)}Z(_r,"isPrimitive",wr),Z(_r,"isObject",jr);var Sr=Number.POSITIVE_INFINITY,Or=vr.NEGATIVE_INFINITY,xr=Math.floor;function Tr(r){return r<Sr&&r>Or&&xr(e=r)===e;var e}function kr(r){return wr(r)&&Tr(r)}function Ir(r){return jr(r)&&Tr(r.valueOf())}function Ar(r){return kr(r)||Ir(r)}function Vr(r){return kr(r)&&r>0}function Fr(r){return Ir(r)&&r.valueOf()>0}function Pr(r){return Vr(r)||Fr(r)}function Nr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Br(r,e,t){var n,i;if(!yr(r))throw new TypeError(Nr("1Y73c,J9",r));if(arguments.length<2)i=null;else if(arguments.length>2){if(n=t,!Vr(i=e))throw new TypeError(Nr("1Y7Az,On",i))}else Vr(e)?i=e:(i=null,n=e);return o;function o(){var e,t;if(e=r,i){if(i>arguments.length)throw new Error(Nr("1Y7Bs,Oo",i,arguments.length));for(t=0;t<i;t++){if(!yr(e))throw new Error(Nr("1Y7Bv,Op",i,t));e=e.call(n,arguments[t])}return e}for(t=0;t<arguments.length;t++){if(!yr(e))throw new Error(Nr("1Y7Bu,Oq",arguments.length,t));e=e.call(n,arguments[t])}return e}}Z(Ar,"isPrimitive",kr),Z(Ar,"isObject",Ir),Z(Pr,"isPrimitive",Vr),Z(Pr,"isObject",Fr);export{Br as default};
//# sourceMappingURL=mod.js.map

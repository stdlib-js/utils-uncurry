"use strict";var f=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var g=f(function(p,c){
var o=require('@stdlib/assert-is-function/dist'),l=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,u=require('@stdlib/error-tools-fmtprodmsg/dist');function v(i,r,a){var s,e;if(!o(i))throw new TypeError(u('1Y73c',i));if(arguments.length<2)e=null;else if(arguments.length>2){if(e=r,s=a,!l(e))throw new TypeError(u('1Y7Az',e))}else l(r)?e=r:(e=null,s=r);return m;function m(){var t,n;if(t=i,e){if(e>arguments.length)throw new Error(u('1Y7Bs',e,arguments.length));for(n=0;n<e;n++)if(o(t))t=t.call(s,arguments[n]);else throw new Error(u('1Y7Bv',e,n));return t}for(n=0;n<arguments.length;n++)if(o(t))t=t.call(s,arguments[n]);else throw new Error(u('1Y7Bu',arguments.length,n));return t}}c.exports=v
});var d=g();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

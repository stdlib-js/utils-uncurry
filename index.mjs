// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function n(n,s,i){var o,l;if(!r(n))throw new TypeError(t("1Y73c,J9",n));if(arguments.length<2)l=null;else if(arguments.length>2){if(o=i,!e(l=s))throw new TypeError(t("1Y7Az,On",l))}else e(s)?l=s:(l=null,o=s);return f;function f(){var e,s;if(e=n,l){if(l>arguments.length)throw new Error(t("1Y7Bs,Oo",l,arguments.length));for(s=0;s<l;s++){if(!r(e))throw new Error(t("1Y7Bv,Op",l,s));e=e.call(o,arguments[s])}return e}for(s=0;s<arguments.length;s++){if(!r(e))throw new Error(t("1Y7Bu,Oq",arguments.length,s));e=e.call(o,arguments[s])}return e}}export{n as default};
//# sourceMappingURL=index.mjs.map

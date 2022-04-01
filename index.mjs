// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var i=e,n=t.isPrimitive,s=r;var o=function(e,t,r){var o,u;if(!i(e))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",e));if(arguments.length<2)u=null;else if(arguments.length>2){if(o=r,!n(u=t))throw new TypeError(s("invalid argument. Arity argument must be a positive integer. Value: `%s`.",u))}else n(t)?u=t:(u=null,o=t);return a;function a(){var t,r;if(t=e,u){if(u>arguments.length)throw new Error(s("insufficient input arguments. Expected %u argument(s) and only received %u argument(s).",u,arguments.length));for(r=0;r<u;r++){if(!i(t))throw new Error(s("invalid invocation. The configured arity exceeds the number of possible curried function invocations. Expected: %u. Actual: %u.",u,r));t=t.call(o,arguments[r])}return t}for(r=0;r<arguments.length;r++){if(!i(t))throw new Error(s("invalid invocation. Number of arguments exceeds the number of possible curried function invocations. Expected: %u. Actual: %u.",arguments.length,r));t=t.call(o,arguments[r])}return t}};export{o as default};
//# sourceMappingURL=index.mjs.map

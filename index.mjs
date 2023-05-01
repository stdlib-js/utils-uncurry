// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function n(n,i,o){var s,l;if(!e(n))throw new TypeError(t("0lu3p",n));if(arguments.length<2)l=null;else if(arguments.length>2){if(s=o,!r(l=i))throw new TypeError(t("0luBi",l))}else r(i)?l=i:(l=null,s=i);return u;function u(){var r,i;if(r=n,l){if(l>arguments.length)throw new Error(t("insufficient arguments. Expected %u argument(s) and only received %u argument(s).",l,arguments.length));for(i=0;i<l;i++){if(!e(r))throw new Error(t("invalid invocation. The configured arity exceeds the number of possible curried function invocations. Expected: `%u`. Actual: `%u`.",l,i));r=r.call(s,arguments[i])}return r}for(i=0;i<arguments.length;i++){if(!e(r))throw new Error(t("invalid invocation. Number of arguments exceeds the number of possible curried function invocations. Expected: `%u`. Actual: `%u`.",arguments.length,i));r=r.call(s,arguments[i])}return r}}export{n as default};
//# sourceMappingURL=index.mjs.map

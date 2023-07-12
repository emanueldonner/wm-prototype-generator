/* @copyright Stadt Wien - Wiener Melange v2 */
import{x as e,b as t}from"./lit-element-a22611a3.js";import{e as r,i,t as n}from"./directive-19e462f3.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={},s=r(class extends i{constructor(e){if(super(e),e.type!==n.PROPERTY&&e.type!==n.ATTRIBUTE&&e.type!==n.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(void 0!==e.strings)throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(r,[i]){if(i===e||i===t)return i;const s=r.element,T=r.name;if(r.type===n.PROPERTY){if(i===s[T])return e}else if(r.type===n.BOOLEAN_ATTRIBUTE){if(!!i===s.hasAttribute(T))return e}else if(r.type===n.ATTRIBUTE&&s.getAttribute(T)===i+"")return e;return((e,t=o)=>{e._$AH=t;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(r),i}});export{s as l};

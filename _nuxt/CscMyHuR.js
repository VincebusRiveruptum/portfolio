import{Q as a}from"./CB10eN_N.js";/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,o)=>o?o.toUpperCase():r.toLowerCase()),p=e=>{const t=d(e);return t.charAt(0).toUpperCase()+t.slice(1)},w=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=({size:e,strokeWidth:t=2,absoluteStrokeWidth:r,color:o,iconNode:l,name:c,class:b,...h},{slots:i})=>a("svg",{...s,width:e||s.width,height:e||s.height,stroke:o||s.stroke,"stroke-width":r?Number(t)*24/Number(e):t,class:w("lucide",...c?[`lucide-${n(p(c))}-icon`,`lucide-${n(c)}`]:["lucide-icon"]),...h},[...l.map(u=>a(...u)),...i.default?[i.default()]:[]]);/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(e,t)=>(r,{slots:o})=>a(g,{...r,iconNode:t,name:e},o);/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=C("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);export{m as L,C as c};

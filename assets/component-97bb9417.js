/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.9.0
 */function a(n){return n==="l"?"m":"s"}async function t(n){await(o(n)?n.componentOnReady():new Promise(e=>requestAnimationFrame(()=>e())))}function o(n){return typeof n.componentOnReady=="function"}async function c(n){return await t(n),new Promise(e=>requestAnimationFrame(()=>e()))}export{c as a,t as c,a as g};

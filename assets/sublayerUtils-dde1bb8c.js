import{gz as l}from"./vendor-97e3022f.js";function s(o,r,n){return r.flatten(({sublayers:i})=>i).length!==o.length?!0:!!o.some(i=>i.originIdOf("minScale")>n||i.originIdOf("maxScale")>n||i.originIdOf("renderer")>n||i.originIdOf("labelingInfo")>n||i.originIdOf("opacity")>n||i.originIdOf("labelsVisible")>n||i.originIdOf("source")>n)||!f(o,r)}function c(o,r,n){return!!o.some(e=>{const i=e.source,t=!i||i.type==="map-layer"&&i.mapLayerId===e.id&&(i.gdbVersion==null||i.gdbVersion===n);return e.commitProperty("renderer"),e.commitProperty("labelingInfo"),e.commitProperty("opacity"),e.commitProperty("labelsVisible"),!t||e.originIdOf("renderer")>l.SERVICE||e.originIdOf("labelingInfo")>l.SERVICE||e.originIdOf("opacity")>l.SERVICE||e.originIdOf("labelsVisible")>l.SERVICE})||!f(o,r)}function f(o,r){if(!(o!=null&&o.length)||r==null)return!0;const n=r.slice().reverse().flatten(({sublayers:t})=>t&&t.toArray().reverse()).map(t=>t.id).toArray();if(o.length>n.length)return!1;let e=0;const i=n.length;for(const{id:t}of o){for(;e<i&&n[e]!==t;)e++;if(e>=i)return!1}return!0}function g(o){return!!o&&o.some(r=>{var n;return r.minScale!=null||((n=r.layerDefinition)==null?void 0:n.minScale)!=null})}export{s as e,c as n,g as o};

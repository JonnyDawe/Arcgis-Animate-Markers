import{b_ as r,lH as m,q as s}from"./vendor-8b656dfb.js";import{p as c}from"./queryTopFeatures-7c8b2052.js";async function u(o,a,e){const n=r(o),t=await c(n,m.from(a),{...e});return{count:t.data.count,extent:s.fromJSON(t.data.extent)}}export{u as executeForTopExtents};

import{bZ as r,lI as m,w as c}from"./vendor-f7a5d1aa.js";import{p as f}from"./queryTopFeatures-7504471a.js";async function u(o,a,e){const n=r(o),t=await f(n,m.from(a),{...e});return{count:t.data.count,extent:c.fromJSON(t.data.extent)}}export{u as executeForTopExtents};
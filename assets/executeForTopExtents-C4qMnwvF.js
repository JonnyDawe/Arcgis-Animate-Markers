import{a1 as r,ei as e,b4 as s}from"./vendor-CBH3cTFe.js";import{d as x}from"./queryTopFeatures-C8KXolLc.js";import"./query-CNwuH4_z.js";import"./pbfQueryUtils-MOWbcI85.js";import"./pbf-DvnNnWHk.js";import"./OptimizedFeature-DUj7o6ET.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";async function l(o,i,n){const m=r(o),a=await x(m,e.from(i),{...n}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:s.fromJSON(t)}}export{l as executeForTopExtents};

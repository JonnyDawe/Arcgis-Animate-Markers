import{$ as c,j as f}from"./utils-whiXjUWX.js";import{o as y}from"./jsonContext-C5lXzYSZ.js";import{l as d,a as v,f as x}from"./vendor-CBH3cTFe.js";import{p as o}from"./resourceUtils-Je-D9gvE.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveAPIKeyUtils-DB88lUns.js";import"./saveUtils-BwkARvdP.js";import"./resourceUtils-Cmco3_WT.js";const s="Media Layer",E="media-layer-save",I="media-layer-save-as",i=["media-layer:unsupported-source"];function n(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function m(e){return y(e,"portal-item",!0)}function p(e){return e.layerJSON}async function u(e,t){t.extent=e.fullExtent?await d(e.fullExtent):null}async function N(e,t){t.title||(t.title=e.title),await u(e,t),v(t,x.METADATA)}async function M(e,t){return c({layer:e,itemType:s,validateLayer:n,createJSONContext:r=>m(r),createItemData:p,errorNamePrefix:E,supplementalUnsupportedErrors:i,setItemProperties:u,saveResources:(r,a)=>o(e.resourceReferences,a)},t)}async function O(e,t,r){return f({layer:e,itemType:s,validateLayer:n,createJSONContext:a=>m(a),createItemData:p,errorNamePrefix:I,supplementalUnsupportedErrors:i,newItem:t,setItemProperties:N,saveResources:(a,l)=>o(e.resourceReferences,l)},r)}export{M as save,O as saveAs};

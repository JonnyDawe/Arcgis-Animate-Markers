import{e,f as o,C as p}from"./vendor-11df6bed.js";import m from"./FeatureLayerView2D-010b37ab.js";import"./Container-de38d099.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-2f24cda9.js";import"./LayerView-961803d3.js";import"./schemaUtils-e883a2a2.js";import"./color-d8d2550b.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./utils-6f2426a8.js";import"./MaterialKey-c121b999.js";import"./visualVariablesUtils-c63c72d7.js";import"./ExpandedCIM-1cbb5011.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-0e6c7a03.js";import"./floatRGBA-f4174ddc.js";import"./util-5a4e1580.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-dda5d029.js";import"./RefreshableLayerView-7b048ed6.js";const s=t=>{let r=class extends t{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return e([o()],r.prototype,"layer",void 0),e([o({readOnly:!0})],r.prototype,"availableFields",null),r=e([p("esri.views.layers.OGCFeatureLayerView")],r),r};let i=class extends s(m){supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}};i=e([p("esri.views.2d.layers.OGCFeatureLayerView2D")],i);const j=i;export{j as default};

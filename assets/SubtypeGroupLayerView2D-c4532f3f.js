import{e as d,B as u,ao as y,ap as m,g as h,r as b,y as c}from"./vendor-1f6204b4.js";import g from"./FeatureLayerView2D-d5d9c438.js";import"./Container-82912e2d.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-a8006180.js";import"./LayerView-076d2be0.js";import"./schemaUtils-c53a747d.js";import"./color-2c4c2f8a.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./utils-5beea512.js";import"./MaterialKey-3bd85617.js";import"./visualVariablesUtils-b0001943.js";import"./ExpandedCIM-d2393fc3.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-e08a9841.js";import"./floatRGBA-3b7d9503.js";import"./util-c2e58759.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-c9745f86.js";import"./RefreshableLayerView-18d6880c.js";function f(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let a=class extends g{initialize(){this.addHandles([y(()=>this.view.scale,()=>this._update(),m)],"constructor")}isUpdating(){var o;const i=this.layer.sublayers.some(p=>p.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,n=this.tileRenderer==null||((o=this.tileRenderer)==null?void 0:o.updating),l=i&&(e||s||t||r||n);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${l}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${n}
`),l}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(n=>f(n,s)).map(n=>n.subtypeCode);if(!t.length)return e;e=b(e)?e:new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};a=d([u("esri.views.2d.layers.SubtypeGroupLayerView2D")],a);const G=a;export{G as default};

import{ao as l,ap as h,bA as g,j as w,bB as f,bC as u,bD as n,e as d,B as b}from"./vendor-1f6204b4.js";import{f as S,u as V}from"./LayerView-076d2be0.js";import{i as _}from"./GraphicContainer-d87a6819.js";import{a as T}from"./GraphicsView2D-ca7e717d.js";import"./Container-82912e2d.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-a8006180.js";import"./color-2c4c2f8a.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-cf1cceb2.js";import"./FeatureContainer-707bec59.js";import"./AttributeStoreView-6badde6a.js";import"./TiledDisplayObject-3fd7433c.js";import"./visualVariablesUtils-46bda0d8.js";import"./visualVariablesUtils-b0001943.js";import"./VertexArrayObject-a151d07b.js";import"./TileContainer-7419cb2a.js";import"./WGLContainer-645ecc34.js";import"./ProgramTemplate-9f1d4f43.js";import"./MaterialKey-3bd85617.js";import"./utils-5beea512.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-d2393fc3.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-e08a9841.js";import"./floatRGBA-3b7d9503.js";import"./normalizeUtilsSync-db28ee8b.js";import"./projectionSupport-880029b5.js";import"./json-48e3ea08.js";import"./Matcher-60a6a33b.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-613e587f.js";import"./schemaUtils-c53a747d.js";import"./util-c2e58759.js";import"./ComputedAttributeStorage-832b44fe.js";import"./arcadeTimeUtils-55afe16a.js";import"./executionError-fb3f283a.js";import"./centroid-84e12433.js";let y=class extends S(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(t=>{const i=this._popupTemplates.get(t),s=t.hitTest(e);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=i;return s}).flat().map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),s=new w(i.features),p=t.drawingInfo,c=r?f.fromJSON(r):null,a=u(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=d([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const fe=y;export{fe as default};
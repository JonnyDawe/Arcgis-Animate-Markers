import{lH as a,e as m,B as l,eQ as p}from"./vendor-1f6204b4.js";import{n as h}from"./BitmapTileContainer-2e19af2a.js";import{o as d}from"./BaseTileRenderer-7f5621c1.js";import"./Bitmap-fa0355d0.js";import"./Container-82912e2d.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-a8006180.js";import"./TiledDisplayObject-3fd7433c.js";import"./WGLContainer-645ecc34.js";import"./VertexArrayObject-a151d07b.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-2c4c2f8a.js";import"./enums-55085e26.js";import"./ProgramTemplate-9f1d4f43.js";import"./MaterialKey-3bd85617.js";import"./utils-5beea512.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./TileContainer-7419cb2a.js";class c{constructor(){this.gradient=null,this.height=512,this.intensities=null,this.width=512}render(i){a(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let o=class extends d{constructor(t){super(t),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new h(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minDensity:i,maxDensity:s,colorStops:n}=t;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=s,this._gradient=p(n),this.tiles.forEach(r=>{const e=r.bitmap.source;e&&(e.minDensity=i,e.maxDensity=s,e.gradient=this._gradient,r.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const s=t.intensityInfo,{minDensity:n,maxDensity:r}=this._intensityInfo,e=i.bitmap.source||new c;e.intensities=s&&s.matrix||null,e.minDensity=n,e.maxDensity=r,e.gradient=this._gradient,i.bitmap.source=e,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};o=m([l("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const H=o;export{H as default};
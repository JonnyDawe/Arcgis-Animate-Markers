import{bl as k,bd as U,U as z,bu as I,j as F,ao as W,an as Y,am as v,n as L,r as D,i as H,bW as K,v as $,bX as J,aV as j,bY as X,aC as Q,e as V,d as S,B as Z}from"./vendor-1f6204b4.js";import{b as M,g as tt,d as et}from"./kmlUtils-aae66756.js";import{T as it,S as at,R as st}from"./Bitmap-fa0355d0.js";import{a as rt}from"./BitmapContainer-ef6fcd31.js";import{f as ot,u as nt}from"./LayerView-076d2be0.js";import{i as P}from"./GraphicContainer-d87a6819.js";import{a as R}from"./GraphicsView2D-ca7e717d.js";import{C as lt,$ as ht}from"./rasterProjectionHelper-44155a39.js";import{n as pt}from"./WGLContainer-645ecc34.js";import{I as mt,o as ct}from"./RenderingContext-0de240db.js";import{P as T,G as E,D as q,L as G,Y as dt,V as gt,f as N}from"./enums-64ab819c.js";import{x as ut}from"./VertexArrayObject-a151d07b.js";import{l as _t}from"./rasterUtils-3b39facc.js";import{E as B}from"./Texture-a8006180.js";import"./Container-82912e2d.js";import"./definitions-19bfb61c.js";import"./color-2c4c2f8a.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-cf1cceb2.js";import"./FeatureContainer-707bec59.js";import"./AttributeStoreView-6badde6a.js";import"./TiledDisplayObject-3fd7433c.js";import"./visualVariablesUtils-46bda0d8.js";import"./visualVariablesUtils-b0001943.js";import"./TileContainer-7419cb2a.js";import"./utils-5beea512.js";import"./MaterialKey-3bd85617.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-d2393fc3.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-e08a9841.js";import"./floatRGBA-3b7d9503.js";import"./normalizeUtilsSync-db28ee8b.js";import"./projectionSupport-880029b5.js";import"./json-48e3ea08.js";import"./Matcher-60a6a33b.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-613e587f.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./schemaUtils-c53a747d.js";import"./util-c2e58759.js";import"./ComputedAttributeStorage-832b44fe.js";import"./arcadeTimeUtils-55afe16a.js";import"./executionError-fb3f283a.js";import"./centroid-84e12433.js";import"./ProgramTemplate-9f1d4f43.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./programUtils-677ef762.js";import"./NestedMap-1b5db22e.js";import"./OrderIndependentTransparency-e1b3a745.js";import"./basicInterfaces-b7051eb1.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./webgl-debug-b1f7a2c5.js";class p{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(p._instance)return p._instanceRefCount++,p._instance;p._instanceRefCount=1,p._instance=this,this._ownsRctx=!0;const i=document.createElement("canvas").getContext("webgl");i.getExtension("OES_texture_float"),this._rctx=new mt(i,{})}const s={applyProjection:!0,bilinear:!1,bicubic:!1},r=ct("raster/reproject","raster/reproject",new Map([["a_position",0]]),s);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new pt(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,s,r=!1){const i=k(t.extent,s),a=new U({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:o,y:l}=lt(a,s,t.extent);let h=(o+l)/2;const n=Math.round((i.xmax-i.xmin)/h),d=Math.round((i.ymax-i.ymin)/h);h=(i.width/n+i.height/d)/2;const C=new U({x:h,y:h,spatialReference:i.spatialReference}),w=ht({projectedExtent:i,srcBufferExtent:t.extent,pixelSize:C,hasWrapAround:!0,spacing:[16,16]}),x=_t(this._rctx,w),u=new B(this._rctx,{width:n,height:d,pixelFormat:T.RGBA,dataType:E.UNSIGNED_BYTE,wrapMode:q.CLAMP_TO_EDGE,samplingMode:G.LINEAR,hasMipmap:!1}),m=new ut(this._rctx,{colorTarget:dt.TEXTURE,depthStencilTarget:gt.NONE,width:n,height:d},u);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,n,d),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(x,1),this._quad.bind();const{width:y=0,height:f=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",y,f),this._program.setUniform2fv("u_transformSpacing",w.spacing),this._program.setUniform2fv("u_transformGridSize",w.size),this._program.setUniform2f("u_targetImageSize",n,d),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),x.dispose(),r){const{width:_=0,height:c=0}=m.descriptor,b=new ImageData(_,c);return m.readPixels(0,0,_,c,T.RGBA,E.UNSIGNED_BYTE,b.data),m.detachColorTexture(N.COLOR_ATTACHMENT0),m.dispose(),{texture:u,extent:i,imageData:b}}return m.detachColorTexture(N.COLOR_ATTACHMENT0),m.dispose(),{texture:u,extent:i}}reprojectBitmapData(t,s){const r=it(t.bitmapData)?at(t.bitmapData):t.bitmapData,i=new B(this._rctx,{width:t.bitmapData.width,height:t.bitmapData.height,pixelFormat:T.RGBA,dataType:E.UNSIGNED_BYTE,wrapMode:q.CLAMP_TO_EDGE,samplingMode:G.LINEAR,hasMipmap:!1},r),a=this.reprojectTexture({texture:i,extent:t.extent},s,!0);a.texture.dispose();const o=document.createElement("canvas"),l=a.imageData;return o.width=l.width,o.height=l.height,o.getContext("2d").putImageData(l,0,0),{bitmapData:o,extent:a.extent}}async loadAndReprojectBitmapData(t,s,r){const i=(await z(t,{responseType:"image"})).data,a=document.createElement("canvas");a.width=i.width,a.height=i.height;const o=a.getContext("2d");o.drawImage(i,0,0);const l=o.getImageData(0,0,a.width,a.height);if(s.spatialReference.equals(r))return{bitmapData:l,extent:s};const h=this.reprojectBitmapData({bitmapData:l,extent:s},r);return{bitmapData:h.bitmapData,extent:h.extent}}destroy(){this._ownsRctx?(p._instanceRefCount--,p._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),p._instance=null)):(this._quad.dispose(),this._program.dispose())}}p._instanceRefCount=0;class O{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let g=class extends ot(nt){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new rt,this._kmlVisualData=new O,this._fetchController=null,this.allVisiblePoints=new I,this.allVisiblePolylines=new I,this.allVisiblePolygons=new I,this.allVisibleMapImages=new F}async hitTest(e,t){var r,i,a;const s=this.layer;return[(r=this._pointsView)==null?void 0:r.hitTest(e),(i=this._polylinesView)==null?void 0:i.hitTest(e),(a=this._polygonsView)==null?void 0:a.hitTest(e)].flat().filter(Boolean).map(o=>(o.layer=s,o.sourceLayer=s,{type:"graphic",graphic:o,layer:s,mapPoint:e}))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new P(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new P(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new P(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",e=>{e.added.forEach(t=>this._addMapImage(t)),e.removed.forEach(t=>this._removeMapImage(t))}),W(()=>this.layer.visibleSublayers,e=>{for(const[t,s]of this._kmlVisualData.allSublayers)s.visibility=0;for(const t of e){const s=this._kmlVisualData.allSublayers.get(t.id);s&&(s.visibility=1)}this._refreshCollections()})]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new p}detach(){this._fetchController=Y(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=v(this._polygonsView),this._polylinesView=v(this._polylinesView),this._pointsView=v(this._pointsView),this._imageReprojector=v(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){var t,s;((t=this.view.spatialReference)!=null&&t.isWGS84||(s=this.view.spatialReference)!=null&&s.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,L.fromJSON(e.extent),this.view.spatialReference).then(r=>{const i=new st(r.bitmapData,{immutable:!1,requestRenderOnSourceChangedEnabled:!0});i.x=r.extent.xmin,i.y=r.extent.ymax,i.resolution=r.extent.width/r.bitmapData.width,i.rotation=e.rotation,this._mapImageContainer.addChild(i),this._bitmapIndex.set(e,i)})}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:r,httpQuery:i}=e;if(D(s)){if(H(t))throw new Error("Loading this network link requires a view state.");let a;if(await K(),D(r)&&r!==1){const c=new L(t.extent);c.expand(r),a=c}else a=t.extent;a=k(a,$.WGS84);const o=k(a,$.WebMercator),l=a.xmin,h=a.xmax,n=a.ymin,d=a.ymax,C=t.size[0]*t.pixelRatio,w=t.size[1]*t.pixelRatio,x=Math.max(o.width,o.height),u={"[bboxWest]":l.toString(),"[bboxEast]":h.toString(),"[bboxSouth]":n.toString(),"[bboxNorth]":d.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":x.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":x.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":C.toString(),"[vertPixels]":w.toString(),"[terrainEnabled]":"0","[clientVersion]":J,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=c=>{for(const b in c)for(const A in u)c[b]=c[b].replace(A,u[A])},y=j(s);m(y);let f={};D(i)&&(f=j(i),m(f));const _=X(e.href);return _.query={..._.query,...y,...f},`${_.path}?${Q(y)}`}return e.href}async _fetchService(e){const t=new O;await this._loadVisualData(this.layer.url,t,e),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!!(t!=null&&t.visibility)&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t,s){return this._fetchParsedKML(e,s).then(async r=>{for(const i of r.sublayers){t.allSublayers.set(i.id,i);const a=i.points?await M(i.points):[],o=i.polylines?await M(i.polylines):[],l=i.polygons?await M(i.polygons):[],h=i.mapImages||[];if(t.allPoints.push(...a.map(n=>({item:n,sublayerId:i.id}))),t.allPolylines.push(...o.map(n=>({item:n,sublayerId:i.id}))),t.allPolygons.push(...l.map(n=>({item:n,sublayerId:i.id}))),t.allMapImages.push(...h.map(n=>({item:n,sublayerId:i.id}))),i.networkLink){const n=await this._getViewDependentUrl(i.networkLink,this.view.state);await this._loadVisualData(n,t,s)}}})}_fetchParsedKML(e,t){return tt(e,this.layer.spatialReference,this.layer.refreshInterval,t).then(s=>et(s.data))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};V([S()],g.prototype,"_pointsView",void 0),V([S()],g.prototype,"_polylinesView",void 0),V([S()],g.prototype,"_polygonsView",void 0),V([S()],g.prototype,"updating",void 0),g=V([Z("esri.views.2d.layers.KMLLayerView2D")],g);const be=g;export{be as default};

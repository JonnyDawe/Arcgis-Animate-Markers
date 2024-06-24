import{fb as j,e_ as J,f0 as X,P as x,f1 as k,e$ as B,bo as _,b1 as K,fc as $,R,aJ as Q,e9 as Z,H as w,dv as ee,ds as U,du as q,F,z as V,w as b,y as M,x as te}from"./vendor-CBH3cTFe.js";import{i as W}from"./TelemetryDisplay-DmABwzxf.js";import{f as ie}from"./OverlayContainer-D-AXpKa8.js";import{s as re}from"./Container-CtywSp33.js";import{a as se,f as oe,y as ne}from"./LayerView-DDZCYqTl.js";import{c as H}from"./Program-COT786Iy.js";import{D as le,F as z,E as ae}from"./enums-BlUEVwJR.js";import{e as he,c as me}from"./Texture-Bbr5YH18.js";import{o as pe}from"./ProgramTemplate-CrqJOsZn.js";import{t as ye}from"./GraphicContainer-8F9Dvxrx.js";import{V as ce}from"./GraphicsView2D-CzPbcy4Y.js";import"./vec3f32-nZdmKIgz.js";import"./WGLContainer-BvqGa9Zx.js";import"./definitions-Y_v3njP4.js";import"./LabelMetric-Cd0estFg.js";import"./enums-BRXbslMp.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-BYKiGsgQ.js";import"./featureConversionUtils-B23WLr_p.js";import"./OptimizedFeature-DUj7o6ET.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./highlightReasons-BU9kV6Jg.js";import"./layerViewUtils-DaObYqcz.js";import"./AGraphicContainer-BbDYwlgq.js";import"./TechniqueInstance-TRPSawqx.js";import"./UpdateTracking2D-CeG-dARv.js";import"./BidiEngine-BwB1Df7c.js";import"./GeometryUtils-Cfwe_Y_T.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-BX8Bq4e-.js";import"./TileContainer-B9nbh6WQ.js";import"./FeatureCommandQueue-BJdLKwua.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-BBCbSRCf.js";import"./TimeOnly-C5VKQw-w.js";import"./timeSupport-ByEMa2a6.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-CtFhEbZb.js";const C=2;class de extends re{constructor(e){super(),this.element=e,this._handles=new j,this.isWrapAround=!1,this.perspectiveTransform=J(),this.wrapAroundShift=0,this.clipGeometry=null,this._handles.add(X(()=>this.element,()=>{const t=this.element;this.ready(),t&&this._handles.add(k(t,"play",()=>this.requestRender()))},x))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=B(this.texture),this._vao&&(this._vao.dispose(),this._vao=null),this._vbo&&(this._vbo.dispose(),this._vbo=null),this.texture&&(this.texture.dispose(),this.texture=null)}get textureSize(){if(!this.texture)return[1,1];const e=this.texture.descriptor;return[e.width,e.height]}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const t=this.element;if(t==null)return;const{context:r}=e,{videoWidth:i,videoHeight:o}=t;if(i!==0&&o!==0){if(this.texture)t.paused||this.texture.setData(t);else{const n=new he;n.wrapMode=le.CLAMP_TO_EDGE,n.preMultiplyAlpha=!0,n.width=i,n.height=o,this.texture=new me(r,n,t)}t.paused||(this.texture.generateMipmap(),this.requestRender()),super.beforeRender(e)}}_createTransforms(){return null}updateDrawCoords(e,t,r,i){const o=this.element,n=this._getFrameInfo();if(!o||!n)return;this._initializeData(e,n,r);const{controlPoints:a,horizon:h}=n,m=Math.sqrt(a.length),c=m,{x:l,y:p}=e,u=this._vertices,T=a[0],G=a[m-1],N=a[(c-1)*m],Y=a[(c-1)*m+m-1],O=_(h?h[0].mapPoint:T.mapPoint,r),P=_(h?h[1].mapPoint:G.mapPoint,r),f=_(N.mapPoint,r),D=_(Y.mapPoint,r);this.clipGeometry=h?new se({geometry:K.fromJSON({rings:[[[f.x,f.y],[D.x,D.y],[P.x,P.y],[O.x,O.y],[f.x,f.y]]],spatialReference:r})}):null;for(let y=0;y<a.length;y++){const L=a[y],{sourcePoint:S,mapPoint:A}=L;if(S==null||A==null)continue;const v=_(A,r);u[y*C+0]=v.x-l,u[y*C+1]=v.y-p}let E=t;if(i){const y=Math.min(O.x,P.x,f.x,D.x),L=Math.max(O.x,P.x,f.x,D.x),{worldWidth:S,xBounds:A}=i,[v,I]=A;y<v&&L>v?E=S:L>I&&y<I&&(E=-S)}this.wrapAroundShift=E,this.isWrapAround=E!==0}getVAO(e,t,r){if(this._vertices==null)return null;const i=this._vertices;if(this._vao)this._vbo.setData(i);else{this._vbo=H.createVertex(e,z.DYNAMIC_DRAW,i);const o=H.createVertex(e,z.STATIC_DRAW,this._texCoords);this._ibo=H.createIndex(e,z.DYNAMIC_DRAW,this._indices),this._vao=new pe(e,r,t,{geometry:this._vbo,tex:o},this._ibo)}return this._vao}draw(e){e.drawElements(ae.TRIANGLE_STRIP,this._indices.length,e.gl.UNSIGNED_SHORT,0)}_initializeData(e,t,r){if(this._vertices!=null&&this._indices!=null)return;const{controlPoints:i}=t,o=Math.sqrt(i.length),n=o,a=new Float32Array(C*i.length),h=new Uint16Array(2*i.length);for(let l=0;l<i.length;l++){const p=i[l],{sourcePoint:u,mapPoint:T}=p;if(u==null||T==null)continue;const G=_(T,r);a[l*C+0]=G.x-e.x,a[l*C+1]=G.y-e.y,h[2*l+0]=u.x,h[2*l+1]=u.y}const m=new Uint16Array(n*o+(n-2)*(o+2));let c=0;for(let l=0;l<n;l++){for(let p=0;p<o;p++)m[c++]=l*o+p,m[c++]=(l+1)*o+p;l<n-2&&(m[c++]=(l+1)*o+(o-1),m[c++]=(l+1)*o)}this._vertices=a,this._texCoords=h,this._indices=m}_getFrameInfo(){if(!this.groundControlPoints)return null;const e=this._getFrameControlPoints(),t=this.frameHorizonPoints;let r=null;if(t){const i=t.startX,o=t.startY,n=t.endX,a=t.endY;r=[{sourcePoint:$(i,o),mapPoint:new R(t.startLongitude,t.startLatitude)},{sourcePoint:$(n,a),mapPoint:new R(t.endLongitude,t.endLatitude)}]}return{controlPoints:e,horizon:r}}_getFrameControlPoints(){const e=this.groundControlPoints,t=e==null?void 0:e.length;if(!t)return[];const r=new Array(t);for(let i=0;i<t;i++){const{x:o,y:n,lat:a,lon:h}=e[i];r[i]={sourcePoint:$(o,-n),mapPoint:new R(h,a)}}return r}}const g=new Q([255,127,0]);let d=class extends oe(ne){constructor(){super(...arguments),this._graphicsLayer=new Z,this._frameOutlineGraphic=new w({symbol:new ee({outline:{type:"simple-line",color:g}})}),this._sensorTrailGraphic=new w({symbol:new U({color:g})}),this._lineOfSightGraphic=new w({symbol:new U({color:g})}),this._sensorLocationGraphic=new w({symbol:new q({color:g})}),this._frameCenterGraphic=new w({symbol:new q({color:g})}),this._overlayContainer=null,this.layer=null,this.symbolColor=g,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=F(this._graphicsLayer)}initialize(){var s,e,t,r,i;this.addHandles(V(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},x)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new W({frameCenter:((s=this.layer.telemetryDisplay)==null?void 0:s.frameCenter)??!0,frameOutline:((e=this.layer.telemetryDisplay)==null?void 0:e.frameOutline)??!0,lineOfSight:((t=this.layer.telemetryDisplay)==null?void 0:t.lineOfSight)??!0,sensorLocation:((r=this.layer.telemetryDisplay)==null?void 0:r.sensorLocation)??!0,sensorTrail:((i=this.layer.telemetryDisplay)==null?void 0:i.sensorTrail)??!0})}attach(){this._overlayContainer=new ie,this.container.addChild(this._overlayContainer),this._addOverlayMultipoint(),this.graphicsView=new ce({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new ye(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([V(()=>{var s,e,t,r,i;return[(s=this.layer.telemetryDisplay)==null?void 0:s.frameCenter,(e=this.layer.telemetryDisplay)==null?void 0:e.frameOutline,(t=this.layer.telemetryDisplay)==null?void 0:t.sensorLocation,(r=this.layer.telemetryDisplay)==null?void 0:r.sensorTrail,(i=this.layer.telemetryDisplay)==null?void 0:i.lineOfSight]},()=>this._updateVisibleTelemetryElements(),x),V(()=>{var s,e,t,r,i;return[this.layer.telemetry,(s=this.visibleTelemetryElements)==null?void 0:s.frameCenter,(e=this.visibleTelemetryElements)==null?void 0:e.frameOutline,(t=this.visibleTelemetryElements)==null?void 0:t.sensorLocation,(r=this.visibleTelemetryElements)==null?void 0:r.sensorTrail,(i=this.visibleTelemetryElements)==null?void 0:i.lineOfSight]},()=>this._updateGraphicGeometries(),x)])}detach(){this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this.graphicsView=F(this.graphicsView)}supportsSpatialReference(s){return!0}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(s){this.graphicsView.processUpdate(s)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:s}=this.layer,{visibleTelemetryElements:e}=this;s&&e&&(e.frameOutline&&s.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,e.sensorTrail&&s.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,e.lineOfSight&&s.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,e.sensorLocation&&s.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,e.frameCenter&&s.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}async _addOverlayMultipoint(){if(!this.layer.videoElement)return;const s=new de(this.layer.videoElement);this.addAttachHandles([V(()=>[this.layer.frameHorizonPoints,this.layer.groundControlPoints],()=>{s.frameHorizonPoints=this.layer.frameHorizonPoints,s.groundControlPoints=this.layer.groundControlPoints},x)]),this._overlayContainer.addChild(s),this.view.stage.requestRender()}};b([M()],d.prototype,"graphicsView",void 0),b([M()],d.prototype,"layer",void 0),b([M()],d.prototype,"symbolColor",void 0),b([M({type:W})],d.prototype,"visibleTelemetryElements",void 0),d=b([te("esri.views.2d.layers.VideoLayerView2D")],d);const it=d;export{it as default};

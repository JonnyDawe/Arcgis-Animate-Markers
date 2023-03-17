import{cS as Z,aq as H,ar as D,cM as ee,r as T,ai as te,G as F,u as re,a0 as se,a2 as W,ct as M,l as _,cB as ie,cI as ae,a5 as oe,d8 as ne,bN as le,bQ as he,aa as ce,bO as me,a8 as de,a9 as pe,cY as ue,bS as fe,j as ye,a as z,by as _e,bz as ve,fH as ge,$ as we,w as Re,c9 as Ee,e as x,f as P,C as be,bh as Me,fI as xe}from"./vendor-4e4308ee.js";import{j as Te,u as B}from"./perspectiveUtils-1b42463e.js";import"./MagnifierPrograms-4a2361ed.js";import{r as Se}from"./Container-76b2d798.js";import"./BufferPool-9b3fa2f3.js";import{T as Ce}from"./color-d50c1a02.js";import{b as $e,w as Ve}from"./WGLContainer-7ee43415.js";import{P as Ge,G as Ae,L as qe,D as De,F as Q}from"./enums-64ab819c.js";import{E as Pe}from"./Texture-08f97dfe.js";import"./ProgramTemplate-ea2c15d0.js";import"./MaterialKey-7c21cb6f.js";import"./utils-5adfb61a.js";import{E as N,f as Ie}from"./VertexArrayObject-7f991a00.js";import"./StyleDefinition-fbc907c2.js";import"./enums-fb086c25.js";import"./OrderIndependentTransparency-e1b3a745.js";import"./floatRGBA-9a8a4a83.js";import"./webgl-debug-b1f7a2c5.js";import"./GraphicsView2D-824ac570.js";import"./AttributeStoreView-99b9366c.js";import"./earcut-61f7b102.js";import{r as Oe}from"./vec3f32-ad1dc57f.js";import{e as Ue}from"./mat3f64-221ce671.js";import{f as je,u as Le}from"./LayerView-6b7c03a0.js";import"./normalizeUtilsSync-da31a077.js";import"./ExpandedCIM-321e33ca.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./definitions-19bfb61c.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-5261fe3b.js";import"./rasterizingUtils-9641e5ba.js";import"./GeometryUtils-dd03fc25.js";import"./imageutils-e1dda93d.js";import"./Matcher-619f84ed.js";import"./visualVariablesUtils-b2b48ff7.js";import"./visualVariablesUtils-19bc7bbf.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-f84e54ff.js";import"./CircularArray-046c86a1.js";import"./ComputedAttributeStorage-8f2de4eb.js";import"./arcadeTimeUtils-86d32072.js";import"./executionError-fb3f283a.js";import"./centroid-f89d70aa.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./basicInterfaces-b7051eb1.js";import"./projectionSupport-b7a4f2b5.js";import"./json-48e3ea08.js";import"./schemaUtils-3952bb27.js";import"./util-e3a30cf5.js";import"./TiledDisplayObject-7c80bed8.js";const v=Ue();class He extends Se{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=Z(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(H(()=>this.elementView.element.opacity,t=>this.opacity=t,D),H(()=>[this.elementView.coords],()=>{this.requestRender()},D),ee(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&T(t.content)&&this._handles.push(te(t.content,"play",()=>this.requestRender()))},D)),e.element.load().catch(t=>{F.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new re("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){this._handles.forEach(e=>e.remove()),this.texture=se(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,s=this.elementView.element.content;if(T(s)){const i=s instanceof HTMLImageElement,a=s instanceof HTMLVideoElement,n=i?s.naturalWidth:a?s.videoWidth:s.width,o=i?s.naturalHeight:a?s.videoHeight:s.height;this._updatePerspectiveTransform(n,o),this.texture?a&&!s.paused&&(this.texture.setData(s),this.requestRender(),(t.type===W.WEBGL2||M(n)&&M(o))&&this.texture.generateMipmap()):(this.texture=new Pe(t,{pixelFormat:Ge.RGBA,dataType:Ae.UNSIGNED_BYTE,samplingMode:qe.LINEAR,wrapMode:De.CLAMP_TO_EDGE,width:n,height:o,preMultiplyAlpha:!0},s),(t.type===W.WEBGL2||M(n)&&M(o))&&this.texture.generateMipmap(),a&&!s.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const s=this.elementView.coords;if(_(s))return;const[i,a,n,o]=s.rings[0],d=this._vertices,{x:l,y:h}=e,p=t!==0;p?d.set([a[0]-l,a[1]-h,i[0]-l,i[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h,o[0]-l,o[1]-h,a[0]+t-l,a[1]-h,a[0]+t-l,a[1]-h,i[0]+t-l,i[1]-h,n[0]+t-l,n[1]-h,o[0]+t-l,o[1]-h]):d.set([a[0]-l,a[1]-h,i[0]-l,i[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h]),this.isWrapAround=p}getVAO(e,t,s){if(_(this.elementView.coords))return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=N.createVertex(e,Q.DYNAMIC_DRAW,i);const a=N.createVertex(e,Q.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Ie(e,s,t,{geometry:this._geometryVbo,tex:a})}return this._vao}_updatePerspectiveTransform(e,t){const s=this._vertices;Te(v,[0,0,e,0,0,t,e,t],[s[0],s[1],s[4],s[5],s[2],s[3],s[6],s[7]]),ie(this.perspectiveTransform,v[6]/v[8]*e,v[7]/v[8]*t)}}class We extends $e{constructor(){super(...arguments),this._localOrigin=ae(0,0),this._viewStateId=-1,this._dvsMat3=oe(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Ve.overlay],target:()=>this.children,drawPhase:Ce.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:s,size:i,pixelRatio:a,resolution:n,rotation:o,viewpoint:d,displayMat3:l}=t;if(this._viewStateId===s)return;const h=Math.PI/180*o,p=a*i[0],f=a*i[1],{x:S,y:w}=d.targetGeometry,C=ne(S,t.spatialReference);this._localOrigin.x=C,this._localOrigin.y=w;const $=n*p,R=n*f,c=le(this._dvsMat3);he(c,c,l),ce(c,c,me(p/2,f/2)),de(c,c,Oe(p/$,-f/R,1)),pe(c,c,-h),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:i,spatialReference:a,worldScreenWidth:n,size:o,viewpoint:d}=s,l=this._localOrigin;let h=0;const p=ue(a);if(p&&a.isWrappable){const f=o[0],S=o[1],w=180/Math.PI*i,C=Math.abs(Math.cos(w)),$=Math.abs(Math.sin(w)),R=Math.round(f*C+S*$),[c,V]=p.valid,u=fe(a),{x:I,y:Y}=d.targetGeometry,J=[I,Y],G=[0,0];s.toScreen(G,J);const E=[0,0];let A;A=R>n?.5*n:.5*R;const O=Math.floor((I+.5*u)/u),K=c+O*u,X=V+O*u,q=[G[0]+A,0];s.toMap(E,q),E[0]>X&&(h=u),q[0]=G[0]-A,s.toMap(E,q),E[0]<K&&(h=-u);for(const b of t){const U=b.elementView.bounds;if(_(U))continue;const[j,,L]=U;j<c&&L>c?b.updateDrawCoords(l,u):L>V&&j<V?b.updateDrawCoords(l,-u):b.updateDrawCoords(l,h)}}else for(const f of t)f.updateDrawCoords(l,h)}}let y=class extends je(Le){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ye}attach(){this.addAttachHandles([z(()=>this.layer.effectiveSource,"refresh",()=>{for(const r of this._tileStrategy.tiles)this._updateTile(r);this.requestUpdate()}),z(()=>this.layer.effectiveSource,"change",({element:r})=>this._elementUpdateHandler(r))]),this._overlayContainer=new We,this.container.addChild(this._overlayContainer),this._fetchQueue=new _e({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(r,e)=>this._queryElements(r,e)}),this._tileStrategy=new ve({cachePolicy:"purge",resampling:!0,acquireTile:r=>this._acquireTile(r),releaseTile:r=>this._releaseTile(r),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var r;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(r=this._debugGraphicsView)==null||r.destroy()}supportsSpatialReference(r){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(r){var e;this._tileStrategy.update(r),(e=this._debugGraphicsView)==null||e.update(r)}async hitTest(r,e){const t=[],s=r.normalize(),i=[s.x,s.y];for(const{projectedElement:{normalizedCoords:a,element:n}}of this._elementReferences.values())T(a)&&ge(a.rings,i)&&t.push({type:"media",element:n,layer:this.layer,mapPoint:r});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(r=>this._updateTile(r))}_acquireTile(r){const e=new ze(r.clone());return this._updateTile(e),e}_updateTile(r){this.updatingHandles.addPromise(this._fetchQueue.push(r.key).then(e=>{const[t,s]=r.setElements(e);this._referenceElements(r,t),this._dereferenceElements(r,s),this.requestUpdate()},e=>{we(e)||F.getLogger(this.declaredClass).error(e)}))}_releaseTile(r){this._fetchQueue.abort(r.key.id),r.elements&&this._dereferenceElements(r,r.elements),this.requestUpdate()}async _queryElements(r,e){const t=this.layer.effectiveSource;if(_(t))return[];this.view.featuresTilingScheme.getTileBounds(m,r,!0);const s=new Re({xmin:m[0],ymin:m[1],xmax:m[2],ymax:m[3],spatialReference:this.view.spatialReference});return t.queryElements(s,e)}_referenceElements(r,e){const t=this.layer.source;if(!_(t))for(const s of e)this._referenceElement(r,s)}_referenceElement(r,e){Ee(this._elementReferences,e.uid,()=>{const t=new B({element:e,spatialReference:this.view.spatialReference}),s=new He(t);return this._overlayContainer.addChild(s),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:s,debugGraphic:null}}).tiles.add(r)}_dereferenceElements(r,e){for(const t of e)this._dereferenceElement(r,t)}_dereferenceElement(r,e){var s;const t=this._elementReferences.get(e.uid);t.tiles.delete(r),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(s=this._debugGraphicsView)==null||s.graphics.remove(t.debugGraphic))}_elementUpdateHandler(r){var s;let e=this._elementReferences.get(r.uid);if(e){const i=e.projectedElement.normalizedCoords;if(_(i))return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(r.uid),this.elements.remove(r),void((s=this._debugGraphicsView)==null?void 0:s.graphics.remove(e.debugGraphic));const a=[],n=[];for(const o of this._tileStrategy.tiles){const d=k(this.view.featuresTilingScheme,o,i);e.tiles.has(o)?d||n.push(o):d&&a.push(o)}for(const o of a)this._referenceElement(o,r);for(const o of n)this._dereferenceElement(o,r);return e=this._elementReferences.get(r.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new B({element:r,spatialReference:this.view.spatialReference}).normalizedCoords;if(T(t))for(const i of this._tileStrategy.tiles)k(this.view.featuresTilingScheme,i,t)&&this._referenceElement(i,r)}};x([P()],y.prototype,"_fetchQueue",void 0),x([P()],y.prototype,"layer",void 0),x([P({readOnly:!0})],y.prototype,"elements",void 0),y=x([be("esri.views.2d.layers.MediaLayerView2D")],y);const m=Me(),g={xmin:0,ymin:0,xmax:0,ymax:0};function k(r,e,t){return r.getTileBounds(m,e.key,!0),g.xmin=m[0],g.ymin=m[1],g.xmax=m[2],g.ymax=m[3],xe(g,t)}class ze{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],s=new Set(this.elements);this.elements=e;for(const i of e)s.has(i)?s.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(s)]}destroy(){}}const zt=y;export{zt as default};

import{f as t,g as a,c_ as S,c6 as T,D as f,aP as O,ft as b,j5 as x,k8 as L,b8 as N,jl as I,j as R,aS as j,U as A,f2 as w,ay as M,az as D,aA as J,iY as U,aB as P,j8 as V,an as K,b as E,bH as z,es as k,aD as F,r as G,l as q,v as d,aF as B,jb as C,aI as H}from"./vendor-e7703df7.js";import{g as m}from"./persistable-84ea2ac6.js";import{E as Y,L as v}from"./SceneService-9fb71152.js";import{s as Q,l as W,u as X,m as Z}from"./I3SLayerDefinitions-0b433efe.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-2504a33e.js";import"./originUtils-1469eeaf.js";import"./resourceUtils-563b33a0.js";var h;let n=h=class extends O{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,i,r,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!b(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new x("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const l=new S;L(e,l,o.layer.spatialReference),i[r]=l.toJSON(o)}else i[r]=e.toJSON(o);delete i[r].spatialReference}clone(){return new h({geometry:N(this.geometry),type:this.type})}};t([a({type:S}),m()],n.prototype,"geometry",void 0),t([T(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),t([a({type:["clip","mask","replace"],nonNullable:!0}),m()],n.prototype,"type",void 0),n=h=t([f("esri.layers.support.SceneModification")],n);const c=n;var p;let y=p=class extends I(R.ofType(c)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(i=>i.toJSON(e)).filter(i=>!!i.geometry)}static fromJSON(e,i){const r=new p;for(const o of e)r.add(c.fromJSON(o,i));return r}static async fromUrl(e,i,r){const o={url:j(e),origin:"service"},l=await A(e,{responseType:"json",signal:w(r,"signal")}),$=i.toJSON(),u=[];for(const g of l.data)u.push(c.fromJSON({...g,geometry:{...g.geometry,spatialReference:$}},o));return new p({url:e,items:u})}};t([a({type:String})],y.prototype,"url",void 0),y=p=t([f("esri.layers.support.SceneModifications")],y);const _=y;let s=class extends Y(M(D(J(U(P(V(H))))))){constructor(...e){super(...e),this._handles=new K,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add(E(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,z))}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}readModifications(e,i,r){this._modificationsSource={url:k(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const i=w(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){F(r)}if(await this._fetchService(i),G(this._modificationsSource)){const r=await _.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,i)}beforeSave(){if(!q(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,i){return this._debouncedSaveOperations(v.SAVE_AS,{...i,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(v.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new d("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};t([a({type:String,readOnly:!0})],s.prototype,"geometryType",void 0),t([a({type:["show","hide"]})],s.prototype,"listMode",void 0),t([a({type:["IntegratedMeshLayer"]})],s.prototype,"operationalLayerType",void 0),t([a({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([a({type:Q,readOnly:!0})],s.prototype,"nodePages",void 0),t([a({type:[W],readOnly:!0})],s.prototype,"materialDefinitions",void 0),t([a({type:[X],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),t([a({type:[Z],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),t([a({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),t([a({type:_}),m({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],s.prototype,"modifications",void 0),t([B(["web-scene","portal-item"],"modifications")],s.prototype,"readModifications",null),t([a(C)],s.prototype,"elevationInfo",void 0),t([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),s=t([f("esri.layers.IntegratedMeshLayer")],s);const pe=s;export{pe as default};

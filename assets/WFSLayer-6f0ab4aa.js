import{aK as t,aL as i,aN as R,dh as E,cq as U,cO as J,cT as T,s as W,jt as f,ca as Y,b8 as X,a0 as D,U as H,gj as L,k9 as Q,jK as G,kl as V,j_ as z,jy as A,ka as Z,jA as B,jz as K,bc as M,bd as ee,be as te,d4 as C,j$ as S,km as re,hm as P,ds as ie,aV as se,jE as oe,cc as c,kn as ae,jP as ne,gp as le,k3 as pe,k1 as de,k2 as ue,jO as ye,gl as h,mv as ce,jG as me,cP as he,k6 as fe,jF as ge,ko as we,bj as ve,jH as Fe,bk as be}from"./vendor-97e3022f.js";import{l as xe,o as Oe}from"./clientSideDefaults-8736bda2.js";import{v as je,W as Se,z as Ie,Y as Re,S as Te}from"./wfsUtils-df57bff1.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./geojson-de061372.js";import"./date-294ce3fb.js";import"./OptimizedFeature-059c854c.js";import"./xmlUtils-444cb4c0.js";let d=class extends E{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=xe(!1,!1),this.type="wfs",this.refresh=U(async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:r}=await this._workerHandler.refresh(e);return r&&(this.sourceJSON.extent=r),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,r={}){const o=await this.queryFeaturesJSON(e,r);return J.fromJSON(o)}async queryFeaturesJSON(e,r={}){return await this.load(r),this._workerHandler.queryFeatures(e?e.toJSON():void 0,r)}async queryFeatureCount(e,r={}){return await this.load(r),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,r)}async queryObjectIds(e,r={}){return await this.load(r),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,r)}async queryExtent(e,r={}){await this.load(r);const o=await this._workerHandler.queryExtent(e?e.toJSON():void 0,r);return{count:o.count,extent:T.fromJSON(o.extent)}}async querySnapping(e,r={}){return await this.load(r),this._workerHandler.querySnapping(e,r)}async _createLoadOptions(e){var O,j;const{url:r,customParameters:o,name:n,namespaceUri:l,fields:a,geometryType:u,maxRecordCount:y,maxPageCount:g,maxTotalRecordCount:w,swapXY:v}=this.layer,m=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!r)throw new W("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await je(r,{customParameters:o,...e}));const $=["fields","geometryType","name","namespaceUri","swapXY"].some(F=>this.layer[F]==null),p=$?await Se(this.wfsCapabilities,n,l,{spatialReference:m,customParameters:o,signal:e==null?void 0:e.signal}):{...Ie(a??[]),geometryType:u,name:n,namespaceUri:l,spatialReference:m,swapXY:v},q=Re(this.wfsCapabilities.readFeatureTypes(),p.name,p.namespaceUri),k=f.toJSON(p.geometryType),{operations:x}=this.wfsCapabilities,N=x.GetFeature.url,_=x.GetFeature.outputFormat;return{customParameters:o,featureType:q,fields:((O=p.fields)==null?void 0:O.map(F=>F.toJSON()))??[],geometryField:p.geometryField,geometryType:k,getFeatureUrl:N,getFeatureOutputFormat:_,maxRecordCount:y,maxPageCount:g,maxTotalRecordCount:w,objectIdField:p.objectIdField,spatialReference:(j=p.spatialReference)==null?void 0:j.toJSON(),swapXY:!!p.swapXY}}async _startWorker(e){const[r,o]=await Y([this._createLoadOptions(e),X("WFSSourceWorker",{...e,strategy:D("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=r.error||o.error||null,l=o.value||null;if(n)throw l&&l.close(),n;const a=r.value;this._connection=o.value,this._workerHandler=this._connection.createInvokeProxy();const u=await this._workerHandler.load(a,e);for(const y of u.warnings)H.getLogger(this.layer).warn("#load()",`${y.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:y});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:L},extent:u.extent,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:Oe(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:a.maxRecordCount,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};t([i()],d.prototype,"capabilities",void 0),t([i({constructOnly:!0})],d.prototype,"layer",void 0),t([i()],d.prototype,"sourceJSON",void 0),t([i()],d.prototype,"type",void 0),t([i()],d.prototype,"wfsCapabilities",void 0),d=t([R("esri.layers.graphics.sources.WFSSource")],d);var b;const I=Fe();let s=b=class extends Q(G(V(z(A(Z(B(K(M(ee(te(be))))))))))){static fromWFSLayerInfo(e){const{customParameters:r,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:y,spatialReference:g,swapXY:w,url:v,wfsCapabilities:m}=e;return new b({customParameters:r,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:y,spatialReference:g,swapXY:w,url:v,wfsCapabilities:m})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=C.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),S(this.renderer,this.fieldsIndex),re(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){var e;return(e=this.source)==null?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,o){const n=e.filter(l=>l.name!==Te);this.geometryField&&n.unshift(new P({name:this.geometryField,alias:this.geometryField,type:"geometry"})),ie(o,n.map(l=>l.toJSON()),r)}get parsedUrl(){return se(this.url)}set renderer(e){S(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return(e=this.source)==null?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return oe(this,e)}createQuery(){const e=new c({returnGeometry:!0,outFields:["*"],where:this.definitionExpression||"1=1"}),{timeOffset:r,timeExtent:o}=this;return e.timeExtent=r!=null&&o!=null?o.offset(-r.value,r.unit):o||null,e}getFieldDomain(e,r){var o;return(o=this.getField(e))==null?void 0:o.domain}getField(e){var r;return(r=this.fieldsIndex)==null?void 0:r.get(e)}queryFeatures(e,r){return this.load().then(()=>this.source.queryFeatures(c.from(e)||this.createQuery(),r)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,r){return this.load().then(()=>this.source.queryObjectIds(c.from(e)||this.createQuery(),r))}queryFeatureCount(e,r){return this.load().then(()=>this.source.queryFeatureCount(c.from(e)||this.createQuery(),r))}queryExtent(e,r){return this.load().then(()=>this.source.queryExtent(c.from(e)||this.createQuery(),r))}async hasDataChanged(){try{const{dataChanged:e,updates:r}=await this.source.refresh();return r!=null&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};t([i({readOnly:!0})],s.prototype,"capabilities",null),t([i({type:String})],s.prototype,"copyright",void 0),t([i({readOnly:!0})],s.prototype,"createQueryVersion",null),t([i({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],s.prototype,"customParameters",void 0),t([i(ae("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),t([i({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),t([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),t([i({type:String})],s.prototype,"displayField",void 0),t([i(ne)],s.prototype,"elevationInfo",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"featureUrl",void 0),t([i({type:[P],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),t([le("fields")],s.prototype,"writeFields",null),t([i(I.fieldsIndex)],s.prototype,"fieldsIndex",void 0),t([i({type:T,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),t([i()],s.prototype,"geometryField",void 0),t([i({type:String,json:{read:{source:"layerDefinition.geometryType",reader:f.read},write:{target:"layerDefinition.geometryType",writer:f.write,ignoreOrigin:!0},origins:{service:{read:f.read}}}})],s.prototype,"geometryType",void 0),t([i({type:String})],s.prototype,"id",void 0),t([i(pe)],s.prototype,"labelsVisible",void 0),t([i({type:[de],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ue},write:!0}})],s.prototype,"labelingInfo",void 0),t([i(ye)],s.prototype,"legendEnabled",void 0),t([i({type:["show","hide"]})],s.prototype,"listMode",void 0),t([i({type:String})],s.prototype,"objectIdField",void 0),t([i({type:["WFS"]})],s.prototype,"operationalLayerType",void 0),t([i({type:h,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"maxRecordCount",void 0),t([i({type:h})],s.prototype,"maxPageCount",void 0),t([i({type:h})],s.prototype,"maxTotalRecordCount",void 0),t([i({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],s.prototype,"mode",void 0),t([i({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"name",void 0),t([i({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"namespaceUri",void 0),t([i(ce)],s.prototype,"opacity",void 0),t([i(I.outFields)],s.prototype,"outFields",void 0),t([i({readOnly:!0})],s.prototype,"parsedUrl",null),t([i(me)],s.prototype,"popupEnabled",void 0),t([i({type:he,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),t([i({types:fe,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ge,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],s.prototype,"renderer",null),t([i(we)],s.prototype,"screenSizePerspectiveEnabled",void 0),t([i({readOnly:!0})],s.prototype,"source",void 0),t([i({type:C,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],s.prototype,"spatialReference",void 0),t([i({readOnly:!0,type:[h],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"spatialReferences",void 0),t([i({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"swapXY",void 0),t([i({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],s.prototype,"title",void 0),t([i({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([i(ve)],s.prototype,"url",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"version",void 0),t([i()],s.prototype,"wfsCapabilities",null),s=b=t([R("esri.layers.WFSLayer")],s);const Ue=s;export{Ue as default};

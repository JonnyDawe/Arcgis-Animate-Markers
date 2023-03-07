import{e as r,d as o,B as y,aN as q,h_ as S,fP as m,b6 as u,aw as B,ax as _,ay as E,iX as N,az as L,j7 as V,fY as w,q as A,r as O,aB as k,j0 as D,kG as C,p as l,V as G,U as K,F as T,j2 as M,bB as U,aD as z,ja as X,jz as Y,c4 as H,j3 as J,aG as Q}from"./vendor-1f6204b4.js";import{E as W,L as F}from"./SceneService-5c110438.js";import{c as j,d as Z,b as ee,a as te}from"./PointCloudUniqueValueRenderer-2297a7a2.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-7d144062.js";let f=class extends q{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"field",void 0),r([o({readOnly:!0,nonNullable:!0,json:{read:!1}})],f.prototype,"type",void 0),f=r([y("esri.layers.pointCloudFilters.PointCloudFilter")],f);const g=f;var b;let d=b=class extends g{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new b({field:this.field,requiredClearBits:u(this.requiredClearBits),requiredSetBits:u(this.requiredSetBits)})}};r([o({type:[S],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],d.prototype,"requiredClearBits",void 0),r([o({type:[S],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],d.prototype,"requiredSetBits",void 0),r([m({pointCloudBitfieldFilter:"bitfield"})],d.prototype,"type",void 0),d=b=r([y("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],d);const re=d;var I;let h=I=class extends g{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new I({field:this.field,includedReturns:u(this.includedReturns)})}};r([o({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"includedReturns",void 0),r([m({pointCloudReturnFilter:"return"})],h.prototype,"type",void 0),h=I=r([y("esri.layers.pointCloudFilters.PointCloudReturnFilter")],h);const oe=h;var $;let p=$=class extends g{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new $({field:this.field,mode:this.mode,values:u(this.values)})}};r([o({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"mode",void 0),r([m({pointCloudValueFilter:"value"})],p.prototype,"type",void 0),r([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"values",void 0),p=$=r([y("esri.layers.pointCloudFilters.PointCloudValueFilter")],p);const ie=p,se={key:"type",base:g,typeMap:{value:ie,bitfield:re,return:oe}};var x;let v=x=class extends j{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new x({...this.cloneProperties(),field:u(this.field)})}};r([m({pointCloudRGBRenderer:"point-cloud-rgb"})],v.prototype,"type",void 0),r([o({type:String,json:{write:!0}})],v.prototype,"field",void 0),v=x=r([y("esri.renderers.PointCloudRGBRenderer")],v);const ne=v,P={key:"type",base:j,typeMap:{"point-cloud-class-breaks":Z,"point-cloud-rgb":ne,"point-cloud-stretch":ee,"point-cloud-unique-value":te},errorContext:"renderer"},R=J();let i=class extends W(B(_(E(N(L(V(Q))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const a=new w;return s.type==="FieldTypeInteger"&&((s=u(s)).type="esriFieldTypeInteger"),a.read(s,n),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new w({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,n,s){A("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=O(e)?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(k).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=D(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){var a;const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(c=>c.fieldName===t.name);if(!n)return;const s=new C({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){var a;const t=this.fieldsIndex.get("RGB");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(c=>c.fieldName===t.name);if(!n)return;const s=new C({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new l("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new l("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.attributeStorageInfo)if(s.name===n.name){const a=G(this.parsedUrl.path,`./statistics/${s.key}`);return K(a,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(c=>c.data)}throw new l("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(F.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(F.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new l("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&T.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&T.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};r([o({type:["PointCloudLayer"]})],i.prototype,"operationalLayerType",void 0),r([o(M)],i.prototype,"popupEnabled",void 0),r([o({type:U,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),r([o({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],i.prototype,"opacity",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({types:[se],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],i.prototype,"filters",void 0),r([o({type:[w]})],i.prototype,"fields",void 0),r([o(R.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([z("service","fields",["fields","attributeStorageInfo"])],i.prototype,"readServiceFields",null),r([o(R.outFields)],i.prototype,"outFields",void 0),r([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),r([o(X)],i.prototype,"elevationInfo",null),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),r([o(Y)],i.prototype,"legendEnabled",void 0),r([o({types:P,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:P},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],i.prototype,"renderer",void 0),r([H("renderer")],i.prototype,"writeRenderer",null),r([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),i=r([y("esri.layers.PointCloudLayer")],i);const ce=i;export{ce as default};

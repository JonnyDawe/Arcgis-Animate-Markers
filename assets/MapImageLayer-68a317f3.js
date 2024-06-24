import{jy as T,ka as $,jz as O,bb as j,bc as L,bd as P,be as E,jA as M,jL as F,jK as R,bg as N,kZ as v,gz as g,cV as _,ab as b,cT as k,dp as J,jM as U,ke as q,s as x,ag as A,aK as a,aL as o,kn as S,bh as V,gp as z,bj as K,aN as Z,bk as B,gl as C}from"./vendor-97e3022f.js";import{i as D}from"./scaleUtils-7c3a149f.js";import{m as G,f as H,t as W}from"./SublayersOwner-7d31784b.js";import{y as Q}from"./ExportImageParameters-a9c0aae8.js";import{t as X}from"./imageBitmapUtils-2afb41b6.js";import{e as I}from"./sublayerUtils-dde1bb8c.js";import"./QueryTask-31db7517.js";import"./infoFor3D-24efd44a.js";import"./executeForIds-221f78d8.js";import"./query-75e76fea.js";import"./pbfQueryUtils-e101e269.js";import"./pbf-8c41e084.js";import"./OptimizedFeature-059c854c.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./executeQueryJSON-677c9cfb.js";import"./executeQueryPBF-57dbb7a5.js";import"./featureConversionUtils-eadb343e.js";import"./floorFilterUtils-080a7cd2.js";let i=class extends T($(O(G(H(j(L(P(E(M(F(R(B)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new Q({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(N).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const l=r.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,l,t){var m,u,f;if(!this.loaded||!e)return;const s=e.slice().reverse().flatten(({sublayers:p})=>p&&p.toArray().reverse()).toArray();let n=!1;const h=v(t.origin);if((m=this.capabilities)!=null&&m.operations.supportsExportMap&&((f=(u=this.capabilities)==null?void 0:u.exportMap)!=null&&f.supportsDynamicLayers)){if(h===g.PORTAL_ITEM){const p=this.createSublayersForOrigin("service").sublayers;n=I(s,p,g.SERVICE)}else if(h>g.PORTAL_ITEM){const p=this.createSublayersForOrigin("portal-item");n=I(s,p.sublayers,v(p.origin))}}const c=[],d={writeSublayerStructure:n,...t};let y=n||this.hasVisibleLayersForOrigin(h);s.forEach(p=>{const w=p.write({},d);c.push(w),y=y||p.originOf("visible")==="user"}),c.some(p=>Object.keys(p).length>1)&&(r.layers=c),y&&(r.visibleLayers=s.filter(p=>p.visible).map(p=>p.id))}createExportImageParameters(e,r,l,t){const s=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=(t==null?void 0:t.floors)??null,this._exportImageParameters.scale=D({extent:e,width:r})*s;const n=this._exportImageParameters.toJSON(),h=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},c=e==null?void 0:e.spatialReference,d=_(c);n.dpi*=s;const y={};if(t!=null&&t.timeExtent){const{start:m,end:u}=t.timeExtent.toJSON();y.time=m&&u&&m===u?""+m:`${m??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:d,imageSR:d,size:r+","+l,...n,...h,...y}}async fetchImage(e,r,l,t){const{data:s}=await this._fetchImage("image",e,r,l,t);return s}async fetchImageBitmap(e,r,l,t){const{data:s,url:n}=await this._fetchImage("blob",e,r,l,t);return X(s,n,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await b(this.url,r),{extent:t,fullExtent:s,timeExtent:n}=l,h=t||s;return{fullExtent:h&&k.fromJSON(h),timeExtent:n&&J.fromJSON({start:n[0],end:n[1]})}}loadAll(){return U(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return q(this,e)}async _fetchImage(e,r,l,t,s){var c,d,y;const n={responseType:e,signal:(s==null?void 0:s.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,l,t,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},h=this.parsedUrl.path+"/export";if(((c=n.query)==null?void 0:c.dynamicLayers)!=null&&!((y=(d=this.capabilities)==null?void 0:d.exportMap)!=null&&y.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:m}=await b(h,n);return{data:m,url:h}}catch(m){throw A(m)?m:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${h}`,{error:m})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:l}=await b(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){var r;return!(e==null||!((r=this.sublayersSourceJSON[e])!=null&&r.visibleLayers))}};a([o(S("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),a([o({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),a([o()],i.prototype,"dpi",void 0),a([o()],i.prototype,"gdbVersion",void 0),a([o()],i.prototype,"imageFormat",void 0),a([V("imageFormat",["supportedImageFormatTypes"])],i.prototype,"readImageFormat",null),a([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],i.prototype,"imageMaxHeight",void 0),a([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],i.prototype,"imageMaxWidth",void 0),a([o()],i.prototype,"imageTransparency",void 0),a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),a([o({json:{read:!1,write:!1}})],i.prototype,"labelsVisible",void 0),a([o({type:["ArcGISMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),a([o({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),a([o(S("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),a([o()],i.prototype,"sourceJSON",void 0),a([o({json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),a([z("sublayers",{layers:{type:[W]},visibleLayers:{type:[C]}})],i.prototype,"writeSublayers",null),a([o({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),a([o({json:{read:!1},readOnly:!0,value:"map-image"})],i.prototype,"type",void 0),a([o(K)],i.prototype,"url",void 0),i=a([Z("esri.layers.MapImageLayer")],i);const be=i;export{be as default};

import{iY as w,jv as $,iZ as I,ay as T,az as O,aA as E,aB as j,i_ as R,j9 as M,js as F,cF as L,r as P,aD as N,ke as v,fa as g,U as f,w as U,T as J,ja as k,jX as _,v as b,$ as q,f as i,g as n,kp as x,aF as A,c5 as z,aH as D,D as V,aI as B,i0 as H}from"./vendor-ebee38f7.js";import{i as C}from"./scaleUtils-2a71e0c0.js";import{E as G,y as K,Z as W}from"./SublayersOwner-63ae0c4e.js";import{c as Z}from"./ExportImageParameters-9b709dd9.js";import{e as X}from"./imageBitmapUtils-a6b6ca03.js";import{n as S}from"./sublayerUtils-847827cc.js";import"./Version-bc730d46.js";import"./QueryTask-ef6b2edb.js";import"./executeForIds-d3616e30.js";import"./floorFilterUtils-080a7cd2.js";let s=class extends w($(I(G(K(T(O(E(j(R(M(F(L(B))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,a){return typeof e=="string"?{url:e,...a}:e}load(e){const a=P(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(N).then(()=>this._fetchService(a))),Promise.resolve(this)}readImageFormat(e,a){const l=a.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,a,l,r){var h;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:t})=>t&&t.toArray().reverse()).toArray();let p=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((h=this.capabilities.exportMap)!=null&&h.supportsDynamicLayers)){const t=v(r.origin);if(t===g.PORTAL_ITEM){const m=this.createSublayersForOrigin("service").sublayers;p=S(o,m,g.SERVICE)}else if(t>g.PORTAL_ITEM){const m=this.createSublayersForOrigin("portal-item");p=S(o,m.sublayers,v(m.origin))}}const c=[],d={writeSublayerStructure:p,...r};let y=p;o.forEach(t=>{const m=t.write({},d);c.push(m),y=y||t.originOf("visible")==="user"}),c.some(t=>Object.keys(t).length>1)&&(a.layers=c),y&&(a.visibleLayers=o.filter(t=>t.visible).map(t=>t.id))}createExportImageParameters(e,a,l,r){const o=r&&r.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const p=new Z({layer:this,floors:r==null?void 0:r.floors,scale:C({extent:e,width:a})*o}),c=p.toJSON();p.destroy();const d=!r||!r.rotation||this.version<10.3?{}:{rotation:-r.rotation},y=e&&e.spatialReference,h=y.wkid||JSON.stringify(y.toJSON());c.dpi*=o;const t={};if(r!=null&&r.timeExtent){const{start:m,end:u}=r.timeExtent.toJSON();t.time=m&&u&&m===u?""+m:`${m??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(t.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:h,imageSR:h,size:a+","+l,...c,...d,...t}}async fetchImage(e,a,l,r){const{data:o}=await this._fetchImage("image",e,a,l,r);return o}async fetchImageBitmap(e,a,l,r){const{data:o,url:p}=await this._fetchImage("blob",e,a,l,r);return X(o,p)}async fetchRecomputedExtents(e={}){const a={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await f(this.url,a),{extent:r,fullExtent:o,timeExtent:p}=l,c=r||o;return{fullExtent:c&&U.fromJSON(c),timeExtent:p&&J.fromJSON({start:p[0],end:p[1]})}}loadAll(){return k(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return _(this,e)}async _fetchImage(e,a,l,r,o){var d,y,h;const p={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(a,l,r,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},c=this.parsedUrl.path+"/export";if(((d=p.query)==null?void 0:d.dynamicLayers)!=null&&!((h=(y=this.capabilities)==null?void 0:y.exportMap)!=null&&h.supportsDynamicLayers))throw new b("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query});try{const{data:t}=await f(c,p);return{data:t,url:c}}catch(t){throw q(t)?t:new b("mapimagelayer:image-fetch-error",`Unable to load image: ${c}`,{error:t})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:a,ssl:l}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=a,this.read(a,{origin:"service",url:this.parsedUrl})}};i([n({type:x})],s.prototype,"dateFieldsTimeReference",void 0),i([n({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),i([n()],s.prototype,"dpi",void 0),i([n()],s.prototype,"gdbVersion",void 0),i([n()],s.prototype,"imageFormat",void 0),i([A("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),i([n({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),i([n({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),i([n()],s.prototype,"imageTransparency",void 0),i([n({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),i([n({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),i([n({type:x})],s.prototype,"preferredTimeReference",void 0),i([n()],s.prototype,"sourceJSON",void 0),i([n({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),i([z("sublayers",{layers:{type:[W]},visibleLayers:{type:[H]}})],s.prototype,"writeSublayers",null),i([n({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),i([n({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),i([n(D)],s.prototype,"url",void 0),s=i([V("esri.layers.MapImageLayer")],s);const pe=s;export{pe as default};
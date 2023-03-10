import{iX as w,ju as $,iY as I,ay as T,az as O,aA as E,aB as j,iZ as R,j8 as M,jr as F,cG as L,r as P,aD as N,kd as v,fb as g,U as f,p as U,T as J,j9 as k,jW as q,v as b,$ as A,f as i,g as n,ko as x,aF as _,c6 as z,aH as D,D as V,aI as B,h$ as G}from"./vendor-e7703df7.js";import{i as H}from"./scaleUtils-86d64b5d.js";import{E as W,y as C,Z as K}from"./SublayersOwner-ba7250dd.js";import{c as Z}from"./ExportImageParameters-a730d557.js";import{e as X}from"./imageBitmapUtils-2181c5f2.js";import{n as S}from"./sublayerUtils-9c6b8e20.js";import"./Version-dffac8dc.js";import"./QueryTask-ecf1836c.js";import"./executeForIds-62fb8425.js";import"./floorFilterUtils-080a7cd2.js";let s=class extends w($(I(W(C(T(O(E(j(R(M(F(L(B))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,a){return typeof e=="string"?{url:e,...a}:e}load(e){const a=P(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(N).then(()=>this._fetchService(a))),Promise.resolve(this)}readImageFormat(e,a){const l=a.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,a,l,r){var h;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:t})=>t&&t.toArray().reverse()).toArray();let p=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((h=this.capabilities.exportMap)!=null&&h.supportsDynamicLayers)){const t=v(r.origin);if(t===g.PORTAL_ITEM){const m=this.createSublayersForOrigin("service").sublayers;p=S(o,m,g.SERVICE)}else if(t>g.PORTAL_ITEM){const m=this.createSublayersForOrigin("portal-item");p=S(o,m.sublayers,v(m.origin))}}const c=[],d={writeSublayerStructure:p,...r};let y=p;o.forEach(t=>{const m=t.write({},d);c.push(m),y=y||t.originOf("visible")==="user"}),c.some(t=>Object.keys(t).length>1)&&(a.layers=c),y&&(a.visibleLayers=o.filter(t=>t.visible).map(t=>t.id))}createExportImageParameters(e,a,l,r){const o=r&&r.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const p=new Z({layer:this,floors:r==null?void 0:r.floors,scale:H({extent:e,width:a})*o}),c=p.toJSON();p.destroy();const d=!r||!r.rotation||this.version<10.3?{}:{rotation:-r.rotation},y=e&&e.spatialReference,h=y.wkid||JSON.stringify(y.toJSON());c.dpi*=o;const t={};if(r!=null&&r.timeExtent){const{start:m,end:u}=r.timeExtent.toJSON();t.time=m&&u&&m===u?""+m:`${m??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(t.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:h,imageSR:h,size:a+","+l,...c,...d,...t}}async fetchImage(e,a,l,r){const{data:o}=await this._fetchImage("image",e,a,l,r);return o}async fetchImageBitmap(e,a,l,r){const{data:o,url:p}=await this._fetchImage("blob",e,a,l,r);return X(o,p)}async fetchRecomputedExtents(e={}){const a={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await f(this.url,a),{extent:r,fullExtent:o,timeExtent:p}=l,c=r||o;return{fullExtent:c&&U.fromJSON(c),timeExtent:p&&J.fromJSON({start:p[0],end:p[1]})}}loadAll(){return k(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return q(this,e)}async _fetchImage(e,a,l,r,o){var d,y,h;const p={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(a,l,r,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},c=this.parsedUrl.path+"/export";if(((d=p.query)==null?void 0:d.dynamicLayers)!=null&&!((h=(y=this.capabilities)==null?void 0:y.exportMap)!=null&&h.supportsDynamicLayers))throw new b("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query});try{const{data:t}=await f(c,p);return{data:t,url:c}}catch(t){throw A(t)?t:new b("mapimagelayer:image-fetch-error",`Unable to load image: ${c}`,{error:t})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:a,ssl:l}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=a,this.read(a,{origin:"service",url:this.parsedUrl})}};i([n({type:x})],s.prototype,"dateFieldsTimeReference",void 0),i([n({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),i([n()],s.prototype,"dpi",void 0),i([n()],s.prototype,"gdbVersion",void 0),i([n()],s.prototype,"imageFormat",void 0),i([_("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),i([n({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),i([n({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),i([n()],s.prototype,"imageTransparency",void 0),i([n({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),i([n({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),i([n({type:x})],s.prototype,"preferredTimeReference",void 0),i([n()],s.prototype,"sourceJSON",void 0),i([n({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),i([z("sublayers",{layers:{type:[K]},visibleLayers:{type:[G]}})],s.prototype,"writeSublayers",null),i([n({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),i([n({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),i([n(D)],s.prototype,"url",void 0),s=i([V("esri.layers.MapImageLayer")],s);const pe=s;export{pe as default};

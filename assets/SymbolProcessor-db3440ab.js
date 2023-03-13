import{a0 as F,f as $,F as K,eB as E,fU as x,Z as b,B as P,c0 as I,l as v,r as S,cm as L,o as A}from"./vendor-8b656dfb.js";import{c as U}from"./ExpandedCIM-54ee0e53.js";import{p as O}from"./visualVariablesUtils-09e92d1a.js";import{S as B}from"./color-db159b54.js";import{x as z,o as k,n as j,E as Z,b as H}from"./Matcher-34483062.js";import{p as J}from"./BaseProcessor-e09c5e14.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./MaterialKey-4ec9db74.js";import"./definitions-19bfb61c.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-9f5cf777.js";import"./floatRGBA-502addcd.js";import"./visualVariablesUtils-95571f2f.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-509ec91f.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";class N{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){}async fetchResource(e,r){const s=this._resourceMap,i=s.get(e);if(i)return i;let a=this._inFlightResourceMap.get(e);if(a)return a;try{a=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},{...r}),this._inFlightResourceMap.set(e,a),a.then(o=>(this._inFlightResourceMap.delete(e),s.set(e,o),o))}catch(o){return F(o)?null:{width:0,height:0}}return a}getResource(e){return this._resourceMap.get(e)??null}}function D(t,e){return(!t.minScale||t.minScale>=e)&&(!t.maxScale||t.maxScale<=e)}function C(t){const e=t.message,r={message:{data:{},tileKey:e.tileKey,tileKeyOrigin:e.tileKeyOrigin,version:e.version},transferList:new Array};for(const s in e.data){const i=e.data[s];if(r.message.data[s]=null,S(i)){const a=i.stride,o=i.indices.slice(0),n=i.vertices.slice(0),c=i.records.slice(0),d={stride:a,indices:o,vertices:n,records:c,metrics:I(i.metrics,h=>h.slice(0))};r.transferList.push(o,n,c),r.message.data[s]=d}}return r}let w=class extends J{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new N(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(t){this._bufferIds.forEach(e=>{e.forEach(t)})}async update(t,e){var i;const r=e.schema.processors[0];if(r.type!=="symbol")return;const s=E(this._schema,r);(x(s,"mesh")||x(s,"target"))&&(t.mesh=!0,(i=t.why)==null||i.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}onTileMessage(t,e,r,s){return b(s),this._onTileData(t,e,r,s)}onTileClear(t){const e={clear:!0};return this._bufferData.delete(t.key.id),this._bufferIds.delete(t.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:e})}onTileError(t,e,r){const s=r.signal,i={tileKey:t.id,error:e};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:s})}onTileUpdate(t){for(const e of t.removed)this._bufferData.has(e.key.id)&&this._bufferData.delete(e.key.id),this._bufferIds.has(e.key.id)&&this._bufferIds.delete(e.key.id);for(const e of t.added)this._bufferData.forEach(r=>{for(const s of r)s.message.tileKey===e.id&&this._updateTileMesh("append",e,C(s),[],!1,!1,null)})}_addBufferData(t,e){var r;this._bufferData.has(t)||this._bufferData.set(t,[]),(r=this._bufferData.get(t))==null||r.push(C(e))}_createFactory(t){const{geometryType:e,objectIdField:r,fields:s}=this.service,i=(d,h)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",d,h),a={geometryType:e,fields:s,spatialReference:P.fromJSON(this.spatialReference)},o=new z(i,this.tileStore.tileScheme.tileInfo),{matcher:n,aggregateMatcher:c}=t.mesh;return this._store=o,this._matchers.feature=k(n,o,a,this._resourceManagerProxy),this._matchers.aggregate=I(c,d=>k(d,o,a,this._resourceManagerProxy)),new j(e,r,o)}async _onTileData(t,e,r,s){var m;b(s);const{type:i,addOrUpdate:a,remove:o,clear:n,end:c}=e,d=!!this._schema.mesh.sortKey;if(!a){const u={type:i,addOrUpdate:null,remove:o,clear:n,end:c,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:u},s)}const h=this._processFeatures(t,a,r,s,(m=e.status)==null?void 0:m.version);try{const u=await h;if(v(u)){const l={type:i,addOrUpdate:null,remove:o,clear:n,end:c,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:l},s)}const f=[];for(const l of u){let g=!1;const p=l.message.bufferIds,y=t.key.id,M=l.message.tileKey;if(y!==M&&S(p)){if(!this.tileStore.get(M)){this._addBufferData(y,l),f.push(l);continue}let _=this._bufferIds.get(M);_||(_=new Set,this._bufferIds.set(M,_));const R=Array.from(p);for(const T of R){if(_.has(T)){g=!0;break}_.add(T)}}g||(this._addBufferData(y,l),f.push(l))}await Promise.all(f.map(l=>{const g=t.key.id===l.message.tileKey,p=g?e.remove:[],y=g&&e.end;return this._updateTileMesh(i,t,l,p,y,!!e.clear,s.signal)}))}catch(u){this._handleError(t,u,s)}}async _updateTileMesh(t,e,r,s,i,a,o){const n=t,c=r.message.tileKey,d=!!this._schema.mesh.sortKey;c!==e.key.id&&(i=!1);const h=I(r,l=>l.message),m=I(r,l=>l.transferList)||[],u={type:n,addOrUpdate:h,remove:s,clear:a,end:i,sort:d},f={transferList:A(m)||[],signal:o};return b(f),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:c,data:u},f)}async _processFeatures(t,e,r,s,i){if(v(e)||!e.hasFeatures)return null;const a={transform:t.transform,hasZ:!1,hasM:!1},o=this._factory,n={viewingMode:"",scale:t.scale},c=await this._matchers.feature,d=await this._matchers.aggregate;b(s);const h=this._getLabelInfos(t,e);return await o.analyze(e.getCursor(),this._resourceManagerProxy,c,d,a,n),b(s),this._writeFeatureSet(t,e,a,h,o,r,i)}_writeFeatureSet(t,e,r,s,i,a,o){const n=e.getSize(),c=this._schema.mesh.matcher.symbologyType,d=new Z(t.key.id,{features:n,records:n,metrics:0},c,a,c!==B.HEATMAP,o),h={viewingMode:"",scale:t.scale},m=e.getCursor();for(;m.next();)try{const f=m.getDisplayId(),l=S(s)?s.get(f):null;i.writeCursor(d,m,r,h,t.level,l,this._resourceManagerProxy)}catch{}const u=t.tileInfoView.tileInfo.isWrappable;return d.serialize(u)}_handleError(t,e,r){if(!F(e)){const s={tileKey:t.id,error:e.message};return this.remoteClient.invoke("tileRenderer.onTileError",s,{signal:r.signal})}return Promise.resolve()}_getLabelingSchemaForScale(t){const e=this._schema.mesh.labels;if(v(e))return null;if(e.type==="subtype"){const s={type:"subtype",classes:{}};let i=!1;for(const a in e.classes){const o=e.classes[a].filter(n=>D(n,t.scale));i=i||!!o.length,s.classes[a]=o}return i?s:null}const r=e.classes.filter(s=>D(s,t.scale));return r.length?{type:"simple",classes:r}:null}_getLabels(t,e){if(e.type==="subtype"){const r=this.service.subtypeField,s=L(r,"Expected to find subtype Field"),i=t.readAttribute(s);return i==null?[]:e.classes[i]??[]}return e.classes}_getLabelInfos(t,e){const r=this._getLabelingSchemaForScale(t);if(v(r))return null;const s=new Map,i=e.getCursor();for(;i.next();){const a=i.getDisplayId(),o=[],n=O(a),c=n&&i.readAttribute("cluster_count")!==1?"aggregate":"feature",d=this._getLabels(i,r);for(const h of d){if(h.target!==c)continue;const m=i.getStorage(),u=n&&c==="feature"?m.getComputedStringAtIndex(i.readAttribute("referenceId"),h.fieldIndex):m.getComputedStringAtIndex(a,h.fieldIndex);if(!u)continue;const f=U(u.toString()),l=f[0],g=f[1];this._store.getMosaicItem(h.symbol,H(l)).then(p=>{o[h.index]={glyphs:p.glyphMosaicItems??[],rtl:g,index:h.index}})}s.set(a,o)}return s}};w=$([K("esri.views.2d.layers.features.processors.SymbolProcessor")],w);const me=w;export{me as default};

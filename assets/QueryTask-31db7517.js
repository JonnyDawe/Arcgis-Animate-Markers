import{d6 as _,cc as S,cT as w,aK as n,aL as l,dL as D,aN as A,bX as N,aV as Q,a0 as j,cO as L,bD as p,aA as u,s as f,cL as P}from"./vendor-97e3022f.js";import{u as h,i as y}from"./infoFor3D-24efd44a.js";import{s as q,a as $}from"./executeForIds-221f78d8.js";import{x as J}from"./query-75e76fea.js";import{a as z}from"./executeQueryJSON-677c9cfb.js";import{n as C}from"./executeQueryPBF-57dbb7a5.js";async function U(e,t,r){const o=_(e),i=await J(o,S.from(t),{...r}),s=i.data.extent;return!s||isNaN(s.xmin)||isNaN(s.ymin)||isNaN(s.xmax)||isNaN(s.ymax)?{count:i.data.count,extent:null}:{count:i.data.count,extent:w.fromJSON(s)}}let a=class extends N{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var c;const r=this._normalizeQuery(e),o=((c=e.outStatistics)==null?void 0:c[0])!=null,i=j("featurelayer-pbf-statistics"),s=!o||i;let d;if(this.pbfSupported&&s)try{d=await C(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&s||(d=await z(this.url,r,t)),this._normalizeFields(d.fields),d}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return L.fromJSON(t);const{meshFeatureSetFromJSON:o}=await p(u(()=>import("./meshFeatureSet-2b8660df.js"),["assets/meshFeatureSet-2b8660df.js","assets/vendor-97e3022f.js","assets/Mesh-c7226058.js","assets/MeshTransform-59c4d71c.js","assets/infoFor3D-24efd44a.js","assets/mat4f64-9a8384aa.js","assets/quat-868b706a.js","assets/mat3f64-e19cdcb8.js","assets/quatf64-81e039e4.js","assets/MeshVertexAttributes-e952fd4c.js","assets/MeshLocalVertexSpace-42092399.js","assets/meshVertexSpaceUtils-8cc745bc.js","assets/earcut-de5fa6d9.js","assets/DoubleArray-0a89b142.js","assets/Indices-07f78454.js","assets/plane-5137aec6.js","assets/deduplicate-6a863634.js","assets/projection-1eaee7cb.js","assets/spatialReferenceEllipsoidUtils-e15aaa16.js","assets/computeTranslationToOriginAndRotation-5383511e.js","assets/BufferView-f35119c1.js","assets/vec3-48d5311f.js","assets/vec4-006d03d4.js","assets/vertexSpaceConversion-071044e1.js"]),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return q(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return U(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return $(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await p(Promise.all([u(()=>import("./vendor-97e3022f.js").then(i=>i.n6),[]),u(()=>import("./executeRelationshipQuery-c5f7c81e.js"),["assets/executeRelationshipQuery-c5f7c81e.js","assets/vendor-97e3022f.js","assets/query-75e76fea.js","assets/pbfQueryUtils-e101e269.js","assets/pbf-8c41e084.js","assets/OptimizedFeature-059c854c.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await p(Promise.all([u(()=>import("./vendor-97e3022f.js").then(i=>i.n6),[]),u(()=>import("./executeRelationshipQuery-c5f7c81e.js"),["assets/executeRelationshipQuery-c5f7c81e.js","assets/vendor-97e3022f.js","assets/query-75e76fea.js","assets/pbfQueryUtils-e101e269.js","assets/pbf-8c41e084.js","assets/OptimizedFeature-059c854c.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:i}=await p(u(()=>import("./queryAttachments-d1fe7c6a.js"),["assets/queryAttachments-d1fe7c6a.js","assets/vendor-97e3022f.js","assets/query-75e76fea.js","assets/pbfQueryUtils-e101e269.js","assets/pbf-8c41e084.js","assets/OptimizedFeature-059c854c.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/AttachmentInfo-644e2f32.js"]),t),s=_(this.url);return i(s,await(this.queryAttachmentsSupported?r(s,e,t):o(s,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await p(u(()=>import("./executeTopFeaturesQuery-4ee2e281.js"),["assets/executeTopFeaturesQuery-4ee2e281.js","assets/vendor-97e3022f.js","assets/queryTopFeatures-763dccd5.js","assets/query-75e76fea.js","assets/pbfQueryUtils-e101e269.js","assets/pbf-8c41e084.js","assets/OptimizedFeature-059c854c.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await p(u(()=>import("./executeForTopIds-adae1846.js"),["assets/executeForTopIds-adae1846.js","assets/vendor-97e3022f.js","assets/queryTopFeatures-763dccd5.js","assets/query-75e76fea.js","assets/pbfQueryUtils-e101e269.js","assets/pbf-8c41e084.js","assets/OptimizedFeature-059c854c.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await p(u(()=>import("./executeForTopExtents-1d3ec622.js"),["assets/executeForTopExtents-1d3ec622.js","assets/vendor-97e3022f.js","assets/queryTopFeatures-763dccd5.js","assets/query-75e76fea.js","assets/pbfQueryUtils-e101e269.js","assets/pbf-8c41e084.js","assets/OptimizedFeature-059c854c.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await p(u(()=>import("./executeForTopCount-74b666bc.js"),["assets/executeForTopCount-74b666bc.js","assets/vendor-97e3022f.js","assets/queryTopFeatures-763dccd5.js","assets/query-75e76fea.js","assets/pbfQueryUtils-e101e269.js","assets/pbf-8c41e084.js","assets/OptimizedFeature-059c854c.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=S.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:i}=r,s=h("model/gltf-binary",o)??y("glb",o),d=h("model/gltf+json",o)??y("gltf",o);for(const c of i){if(c===s){t.formatOf3DObjects=c;break}c!==d||t.formatOf3DObjects||(t.formatOf3DObjects=c)}if(!t.formatOf3DObjects)throw new f("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!P(t.outSpatialReference,this.sourceSpatialReference))throw new f("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:c,originY:m,originZ:x,translationX:b,translationY:F,translationZ:O,scaleX:g,scaleY:R,scaleZ:V,rotationX:E,rotationY:I,rotationZ:v,rotationDeg:T}=r.transformFieldRoles;t.outFields.push(c,m,x,b,F,O,g,R,V,E,I,v,T)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};n([l({type:D})],a.prototype,"dynamicDataSource",void 0),n([l()],a.prototype,"fieldsIndex",void 0),n([l()],a.prototype,"gdbVersion",void 0),n([l()],a.prototype,"infoFor3D",void 0),n([l({readOnly:!0})],a.prototype,"parsedUrl",null),n([l()],a.prototype,"pbfSupported",void 0),n([l()],a.prototype,"queryAttachmentsSupported",void 0),n([l()],a.prototype,"sourceSpatialReference",void 0),n([l({type:String})],a.prototype,"url",void 0),a=n([A("esri.layers.graphics.sources.support.QueryTask")],a);const B=a;export{B as x};

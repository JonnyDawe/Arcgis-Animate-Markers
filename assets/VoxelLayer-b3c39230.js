import{gC as $e,gI as ve,h$ as ze,lo as ge,ac as fe,a4 as Ee,b_ as Y,fP as D,jo as z,jp as I,e,f as o,f0 as ee,C as d,aP as v,jk as Oe,i0 as $,e0 as E,j as c,bH as te,as as Z,lp as K,b8 as X,G as Ie,z as Re,bA as Ce,gH as ke,lq as Ue,bf as ne,lr as Je,ls as We,gJ as He,ay as Ge,az as Xe,aA as Ye,iZ as Ze,aB as Ke,j9 as Qe,k8 as et,r as F,aD as tt,u as le,w as Ne,f_ as O,j2 as it,l as ot,jB as st,aH as rt,aF as be,j4 as nt,aI as lt}from"./vendor-4e4308ee.js";import{E as at}from"./SceneService-74137fe0.js";import{g as pt}from"./persistable-f2b744b7.js";import{v as ae,y as ut}from"./quat-b25052d4.js";import{e as se}from"./quatf64-3363c48e.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-a127a5b1.js";import"./resourceExtension-6379acf8.js";import"./mat3f64-221ce671.js";const f=Ee(),Se=se(),xe=se(),we=se(),Te=Y(0,0,1),ct=Y(0,1,0),yt=Y(1,0,0);function C(t){$e(f,t),ve(f,f);const i=Math.atan2(f[1],f[0]),s=ae(se(),Te,-i);ze(f,f,s);const r=-1*Math.atan2(f[2],f[0]);return[ge(i)+270,ge(r)+90]}function ie(t,i){return ae(xe,Te,fe(t-270)),ae(we,ct,fe(i-90)),ut(Se,xe,we),$e(f,yt),ze(f,f,Se),ve(f,f),[f[0],f[1],f[2]]}let R=class extends D(v){constructor(i){super(i),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,s]=C(this.normal);return z.normalize(I(i),0,!0)}set orientation(i){const s=ie(i,this.tilt);this._set("normal",s),this._set("orientation",i)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,s]=C(this.normal);return z.normalize(I(s),0,!0)}set tilt(i){const s=ie(this.orientation,i);this._set("normal",s),this._set("tilt",i)}};e([o({type:Boolean,json:{write:!0}})],R.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],R.prototype,"label",void 0),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(t=>z.normalize(I(t),0,!0))],R.prototype,"orientation",null),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(t=>z.normalize(I(t),0,!0))],R.prototype,"tilt",null),e([o({type:[Number],json:{write:!0}})],R.prototype,"normal",void 0),e([o({type:[Number],json:{write:!0}})],R.prototype,"point",void 0),R=e([d("esri.layers.voxel.VoxelSlice")],R);const oe=R;let S=class extends D(v){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,s]=C(this.normal);return z.normalize(I(i),0,!0)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,s]=C(this.normal);return z.normalize(I(s),0,!0)}};e([o({type:Boolean,json:{default:!0,write:!0}})],S.prototype,"enabled",void 0),e([o({type:String,json:{origins:{service:{read:Oe}},write:{enabled:!0,isRequired:!0}}}),pt({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],S.prototype,"href",void 0),e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"id",void 0),e([o({type:String,json:{write:!0}})],S.prototype,"label",void 0),e([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],S.prototype,"orientation",null),e([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],S.prototype,"tilt",null),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"normal",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"point",void 0),e([o({type:[$],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"sizeInPixel",void 0),e([o({type:[oe],json:{write:!0}})],S.prototype,"slices",void 0),e([o({type:$,json:{default:0,write:!0}})],S.prototype,"timeId",void 0),e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"variableId",void 0),S=e([d("esri.layers.voxel.VoxelSection")],S);const pe=S;let U=class extends v{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};e([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],U.prototype,"diffuseFactor",void 0),e([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],U.prototype,"specularFactor",void 0),U=e([d("esri.layers.voxel.VoxelSimpleShading")],U);const qe=U;let N=class extends v{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};e([o({type:["discrete","continuous"],json:{write:!0}})],N.prototype,"continuity",void 0),e([o({type:Boolean,json:{write:!0}})],N.prototype,"hasNoData",void 0),e([o({type:Number,json:{write:!0}})],N.prototype,"noData",void 0),e([o({type:Number,json:{write:!0}})],N.prototype,"offset",void 0),e([o({type:Number,json:{write:!0}})],N.prototype,"scale",void 0),e([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],N.prototype,"type",void 0),N=e([d("esri.layers.voxel.VoxelFormat")],N);const Ve=N;let j=class extends v{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"id",void 0),e([o({type:String,json:{write:!0}})],j.prototype,"description",void 0),e([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"name",void 0),e([o({type:Ve,json:{write:!0}})],j.prototype,"originalFormat",void 0),e([o({type:Ve,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"renderingFormat",void 0),e([o({type:String,json:{write:!0}})],j.prototype,"unit",void 0),e([o({type:Number,json:{write:!0}})],j.prototype,"volumeId",void 0),e([o({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],j.prototype,"type",void 0),j=e([d("esri.layers.voxel.VoxelVariable")],j);const dt=j;let L=class extends D(v){constructor(){super(...arguments),this.color=E.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};e([o({type:E,json:{type:[$],write:{enabled:!0,isRequired:!0}}})],L.prototype,"color",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],L.prototype,"value",void 0),e([o({type:Boolean,json:{default:!0,write:!0}})],L.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],L.prototype,"label",void 0),e([o({type:Boolean,json:{default:!1,write:!0}})],L.prototype,"colorLocked",void 0),L=e([d("esri.layers.voxel.VoxelIsosurface")],L);const Ae=L;let J=class extends D(v){constructor(){super(...arguments),this.color=null,this.position=0}};e([o({type:E,json:{type:[$],write:{enabled:!0,isRequired:!0}}})],J.prototype,"color",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],J.prototype,"position",void 0),J=e([d("esri.layers.voxel.VoxelColorStop")],J);const ue=J;let W=class extends D(v){constructor(){super(...arguments),this.opacity=1,this.position=0}};e([o({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],W.prototype,"opacity",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"position",void 0),W=e([d("esri.layers.voxel.VoxelOpacityStop")],W);const ce=W;let H=class extends D(v){constructor(){super(...arguments),this.enabled=!1,this.range=null}};e([o({type:Boolean,json:{default:!1,write:!0}})],H.prototype,"enabled",void 0),e([o({type:[Number],json:{write:!0}})],H.prototype,"range",void 0),H=e([d("esri.layers.voxel.VoxelRangeFilter")],H);const ht=H;var V;(function(t){t[t.Color=1]="Color",t[t.Alpha=2]="Alpha",t[t.Both=3]="Both"})(V||(V={}));let T=class extends D(v){constructor(i){super(i),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(c.ofType(ue)),this.opacityStops=new(c.ofType(ce))}set colorStops(i){this._set("colorStops",te(i,this._get("colorStops"),c.ofType(ue)))}set opacityStops(i){this._set("opacityStops",te(i,this._get("opacityStops"),c.ofType(ce)))}getPreviousNext(i,s,r){let n=i;for(;--n>0&&s[n].type!==r&&s[n].type!==V.Both;);let l=i;const y=s.length;for(;++l<y&&s[l].type!==r&&s[l].type!==V.Both;);return[n,l]}get rasterizedTransferFunction(){const i=[];if(this.colorStops.length<2)return i;const s=[],r=[],n=1e-5;for(const p of this.colorStops){if(!p.color)return i;r.push({color:{r:p.color.r,g:p.color.g,b:p.color.b,a:Math.round(255*(1-p.color.a))},position:p.position,type:V.Color})}if(this.opacityStops.length===0)for(const p of r)s.push({color:p.color,position:p.position});else{for(const u of this.opacityStops){const h=Z(u.position,0,1),m=Math.round(255*Z(1-u.opacity,0,1));let b=!1;for(const g of r)if(g.type===V.Color&&Math.abs(g.position-h)<n){g.color.a=m,g.type=V.Both,b=!0;break}b||r.push({color:{r:0,g:0,b:0,a:m},position:u.position,type:V.Alpha})}r.sort((u,h)=>u.position<h.position?-1:1);const p=r.length;for(let u=0;u<p;++u){const h=r[u];if(h.type!==V.Both)if(h.type===V.Color){const[m,b]=this.getPreviousNext(u,r,V.Alpha);if(m!==-1&&b!==p){const g=(h.position-r[m].position)/(r[b].position-r[m].position);h.color.a=Math.round(K(r[m].color.a,r[b].color.a,g))}else h.color.a=m!==-1?r[m].color.a:r[b].color.a}else{const[m,b]=this.getPreviousNext(u,r,V.Color);if(m!==-1&&b!==p){const g=(h.position-r[m].position)/(r[b].position-r[m].position),k=r[m].color,Be=r[b].color;["r","g","b"].forEach(re=>{h.color[re]=Math.round(K(k[re],Be[re],g))})}else["r","g","b"].forEach(m!==-1?g=>{h.color[g]=r[m][g]}:g=>{h.color[g]=r[b][g]})}}for(const u of r)s.push({color:u.color,position:u.position})}s[0].position=0,s[s.length-1].position=1;let l=0,y=1;for(let p=0;p<this._colorMapSize;++p){const u=p/this._colorMapSize;for(;u>s[y].position;)l=y++;const h=(u-s[l].position)/(s[y].position-s[l].position),m=s[l].color,b=s[y].color,g=new E;["r","g","b"].forEach(k=>{g[k]=Math.round(K(m[k],b[k],h))}),g.a=Z(1-K(m.a,b.a,h)/255,0,1),i.push(g)}return i}getColorForContinuousDataValue(i,s){const r=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||r.length<256)return null;let n=this.stretchRange[0],l=this.stretchRange[1];if(n>l){const p=n;n=l,l=p}i=Z(i,n,l);const y=r[Math.round((i-n)/(l-n)*(this._colorMapSize-1))].clone();return s||(y.a=1),y}};e([o({type:["linear","nearest"],json:{write:!0}})],T.prototype,"interpolation",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],T.prototype,"stretchRange",void 0),e([o({type:c.ofType(ue),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],T.prototype,"colorStops",null),e([o({type:c.ofType(ce),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],T.prototype,"opacityStops",null),e([o({type:ht,json:{write:!0}})],T.prototype,"rangeFilter",void 0),e([o({type:[E],clonable:!1,json:{read:!1}})],T.prototype,"rasterizedTransferFunction",null),T=e([d("esri.layers.voxel.VoxelTransferFunctionStyle")],T);const mt=T;let M=class extends D(v){constructor(){super(...arguments),this.color=E.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};e([o({type:E,json:{type:[$],write:{enabled:!0,isRequired:!0}}})],M.prototype,"color",void 0),e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"value",void 0),e([o({type:Boolean,json:{default:!0,write:!0}})],M.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],M.prototype,"label",void 0),M=e([d("esri.layers.voxel.VoxelUniqueValue")],M);const De=M;var ye;let P=ye=class extends v{constructor(t){super(t),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(c.ofType(De)),this.isosurfaces=new(c.ofType(Ae))}clone(){return new ye({variableId:this.variableId,label:this.label,transferFunction:X(this.transferFunction),uniqueValues:X(this.uniqueValues),isosurfaces:X(this.isosurfaces)})}};e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"variableId",void 0),e([o({type:String,json:{write:!0}})],P.prototype,"label",void 0),e([o({type:mt,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],P.prototype,"transferFunction",void 0),e([o({type:c.ofType(De),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],P.prototype,"uniqueValues",void 0),e([o({type:c.ofType(Ae),json:{write:{enabled:!0,overridePolicy(){const t=!this.uniqueValues||this.uniqueValues.length<1,i=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:t&&i}}}}})],P.prototype,"isosurfaces",void 0),P=ye=e([d("esri.layers.voxel.VoxelVariableStyle")],P);const Fe=P;let Q=class extends v{constructor(){super(...arguments),this.values=null}};e([o({type:[Number],json:{write:!0}})],Q.prototype,"values",void 0),Q=e([d("esri.layers.voxel.VoxelIrregularSpacing")],Q);const vt=Q;let G=class extends v{constructor(){super(...arguments),this.scale=1,this.offset=0}};e([o({type:Number,json:{write:!0}})],G.prototype,"scale",void 0),e([o({type:Number,json:{write:!0}})],G.prototype,"offset",void 0),G=e([d("esri.layers.voxel.VoxelRegularSpacing")],G);const gt=G;let x=class extends v{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(this.irregularSpacing==null||this.irregularSpacing===void 0)&&this.regularSpacing!==null}getRange(){var i;return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray((i=this.irregularSpacing)==null?void 0:i.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};e([o({type:vt,json:{write:!0}})],x.prototype,"irregularSpacing",void 0),e([o({type:Boolean,json:{write:!0}})],x.prototype,"isPositiveUp",void 0),e([o({type:Boolean,json:{write:!0}})],x.prototype,"isWrappedDateLine",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"label",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"name",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"quantity",void 0),e([o({type:gt,json:{write:!0}})],x.prototype,"regularSpacing",void 0),e([o({type:Number,json:{write:!0}})],x.prototype,"size",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"unit",void 0),e([o({type:Boolean,json:{read:!1}})],x.prototype,"isRegular",null),x=e([d("esri.layers.voxel.VoxelDimension")],x);const ft=x,Le="esri.layers.voxel.VoxelVolume",je=Ie.getLogger(Le);let w=class extends v{constructor(t){super(t),this.id=0,this.dimensions=null,this.spatialReference=Re.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let t=2;t<4;++t)if(this.dimensions[t].size>0)return t;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(this.zDimension===-1||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const t=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size];return[t[0],i[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const t=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size],n=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let l=0;l<3;++l)n[l]<2?n[l]=1:n[l]-=1;return s.isRegular&&!s.isPositiveUp&&(n[2]*=-1),[(t[1]-t[0])/n[0],(i[1]-i[0])/n[1],(r[1]-r[0])/n[2]]}get volumeType(){if(this.isValid){const t=this.dimensions[2].size>0,i=this.dimensions[3].size>0;if(!t&&i)return"xyt";if(t&&i)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const t=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[t].size]}computeVoxelSpaceLocation(t){var r;if(!this.isValid)return[0,0,0];if(this.volumeType==="xyt")return je.error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!Ce(this.spatialReference,t.spatialReference))return je.error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=Y(t.x,t.y,t.z??0);ke(i,i,this.originInLayerSpace3D),Ue(i,i,this.voxelSizeInLayerSpaceSigned);const s=this.dimensions[this.zDimension];if(!s.isRegular&&Array.isArray((r=s.irregularSpacing)==null?void 0:r.values)&&s.irregularSpacing.values.length>1){const n=t.z??0,l=s.irregularSpacing.values,y=s.isPositiveUp?1:-1,p=l.reduce((u,h)=>Math.abs(y*h-n)<Math.abs(y*u-n)?h:u);for(let u=0;u<l.length;++u)if(l[u]===p){i[2]=u;break}}return[i[0],i[1],i[2]]}computeLayerSpaceLocation(t){var r;if(!this.isValid)return new ne({x:0,y:0,spatialReference:this.spatialReference});const i=Je(t);if(We(i,i,this.voxelSizeInLayerSpaceSigned),He(i,i,this.originInLayerSpace3D),this.volumeType==="xyt")return new ne({x:i[0],y:i[1],spatialReference:this.spatialReference});const s=this.dimensions[this.zDimension];return s.isRegular||Array.isArray((r=s.irregularSpacing)==null?void 0:r.values)&&(t[2]<0?i[2]=s.irregularSpacing.values[0]:t[2]<s.irregularSpacing.values.length?i[2]=s.irregularSpacing.values[t[2]]:i[2]=s.irregularSpacing.values[s.irregularSpacing.values.length-1],s.isPositiveUp||(i[2]*=-1)),new ne({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"id",void 0),e([o({type:[ft],json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"dimensions",void 0),e([o({type:Re,json:{read:{enabled:!1}}})],w.prototype,"spatialReference",void 0),e([o({type:Number,json:{read:!1}})],w.prototype,"zDimension",null),e([o({type:[Boolean],json:{read:!1}})],w.prototype,"isValid",null),e([o({type:[Number],json:{read:!1}})],w.prototype,"originInLayerSpace3D",null),e([o({type:[Number],json:{read:!1}})],w.prototype,"voxelSizeInLayerSpaceSigned",null),e([o({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],w.prototype,"volumeType",null),e([o({type:[Number],json:{read:!1}})],w.prototype,"sizeInVoxels",null),w=e([d(Le)],w);const Pe=w;var de;let B=de=class extends v{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const t=new de;return t.apronWidth===this.apronWidth&&t.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"apronWidth",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"brickSize",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"maxLodLevel",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"nodeSize",void 0),B=de=e([d("esri.layers.voxel.VoxelVolumeIndex")],B);const bt=B;let q=class extends D(v){constructor(i){super(i),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,s]=C(this.normal);return z.normalize(I(i),0,!0)}set orientation(i){const s=ie(i,this.tilt);this._set("normal",s),this._set("orientation",i)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,s]=C(this.normal);return z.normalize(I(s),0,!0)}set tilt(i){const s=ie(this.orientation,i);this._set("normal",s),this._set("tilt",i)}};e([o({type:Boolean,json:{default:!0,write:!0}})],q.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],q.prototype,"label",void 0),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(t=>z.normalize(I(t),0,!0))],q.prototype,"orientation",null),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(t=>z.normalize(I(t),0,!0))],q.prototype,"tilt",null),e([o({type:[Number],json:{write:!0}})],q.prototype,"normal",void 0),e([o({type:[Number],json:{write:!0}})],q.prototype,"point",void 0),q=e([d("esri.layers.voxel.VoxelDynamicSection")],q);const he=q;var me;let A=me=class extends v{constructor(t){super(t),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(c.ofType(oe)),this.dynamicSections=new(c.ofType(he))}set slices(t){this._set("slices",te(t,this._get("slices"),c.ofType(oe)))}set dynamicSections(t){this._set("dynamicSections",te(t,this._get("dynamicSections"),c.ofType(he)))}clone(){return new me({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:X(this.slices),dynamicSections:X(this.dynamicSections)})}};e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],A.prototype,"volumeId",void 0),e([o({type:Number,json:{default:1,write:!0}})],A.prototype,"verticalExaggeration",void 0),e([o({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],A.prototype,"exaggerationMode",void 0),e([o({type:Number,json:{default:0,write:!0}})],A.prototype,"verticalOffset",void 0),e([o({type:c.ofType(oe),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],A.prototype,"slices",null),e([o({type:c.ofType(he),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],A.prototype,"dynamicSections",null),A=me=e([d("esri.layers.voxel.VoxelVolumeStyle")],A);const _e=A,Me="esri.layers.VoxelLayer",_=Ie.getLogger(Me);let a=class extends at(Ge(Xe(Ye(Ze(Ke(Qe(lt))))))){constructor(t){super(t),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new qe,this.opacity=1,this.variables=new c,this.volumes=new c,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!0,this.popupTemplate=null,this.test=null,this.volumeStyles=new(c.ofType(_e)),this.variableStyles=new(c.ofType(Fe)),this.sections=new(c.ofType(pe)),t!=null&&t.constantUpscaling&&(this.test={constantUpscaling:!0})}set url(t){this._set("url",et(t,_))}load(t){const i=F(t)?t.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},t).catch(tt).then(()=>this._fetchService(i)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(s),Promise.resolve(this)}read(t,i){super.read(t,i);for(const s of this.volumes)s.spatialReference=this.spatialReference}readVersion(t,i){return super.parseVersionString(t)}validateLayer(t){if(t.layerType&&t.layerType!==this.operationalLayerType)throw new le("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:t.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new le("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new le("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(t,i,s){if(t!=null&&typeof t=="object"){const r=Ne.fromJSON(t,s);if(r.zmin===0&&r.zmax===0&&Array.isArray(i.volumes)){const n=Pe.fromJSON(i.volumes[0]);if(n.isValid&&n.volumeType!=="xyt"){const l=n.dimensions[2];if(l.isRegular){let y=l.regularSpacing.offset,p=l.regularSpacing.offset+l.regularSpacing.scale*(l.size-1);if(y>p){const u=y;y=p,p=u}r.zmin=y,r.zmax=p}}}return r}return null}get voxelFields(){const t=[new O({name:"Voxel.ServiceValue",alias:"Value",domain:null,editable:!1,length:128,type:"string"}),new O({name:"Voxel.ServiceVariableLabel",alias:"Variable",domain:null,editable:!1,length:128,type:"string"}),new O({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"})],i=this.getVolume(null);if(F(i)){if(i.volumeType==="xyzt"||i.volumeType==="xyt"){const s=new O({name:"Voxel.ServiceLocalTime",alias:"Local Time",domain:null,editable:!1,length:128,type:"string"});t.push(s);const r=new O({name:"Voxel.ServiceNativeTime",alias:"Native Time",domain:null,editable:!1,length:128,type:"string"});t.push(r)}if(i.volumeType!=="xyt"){const s=new O({name:"Voxel.ServiceDepth",alias:"Depth",domain:null,editable:!1,length:128,type:"string"});t.push(s)}}return t}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(t){const i=this.voxelFields,s=this.title;return it({fields:i,title:s},t)}getConfiguration(){var i,s;const t={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:(i=this.index)==null?void 0:i.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return t.index&&((s=this.index)!=null&&s.isValid())?JSON.stringify(t):""}getVariableStyle(t){let i=-1;if(i=F(t)?t:this.currentVariableId,!this.variableStyles||i===-1)return null;const s=this.variableStyles.findIndex(r=>r.variableId===i);return s<0?null:this.variableStyles.getItemAt(s)}getVariable(t){let i=-1;if(i=F(t)?t:this.currentVariableId,!this.variables||i===-1)return null;const s=this.variables.findIndex(r=>r.id===i);return s<0?null:this.variables.getItemAt(s)}getVolume(t){const i=this.getVariable(t);return F(i)?this.volumes.find(({id:s})=>s===i.volumeId):null}getVolumeStyle(t){const i=this.getVariable(t);return F(i)?this.volumeStyles.find(({volumeId:s})=>s===i.volumeId):null}getColorForContinuousDataValue(t,i,s){var y;const r=this.getVariable(t);if(ot(r)||((y=r.renderingFormat)==null?void 0:y.continuity)!=="continuous"||!this.variableStyles)return null;const n=this.variableStyles.findIndex(p=>p.variableId===t);if(n<0)return null;const l=this.variableStyles.getItemAt(n);return l.transferFunction?l.transferFunction.getColorForContinuousDataValue(i,s):null}getSections(){const t=[];for(const i of this.sections)t.push(new pe({enabled:i.enabled,href:i.href,id:i.id,label:i.label,normal:i.normal,point:i.point,sizeInPixel:i.sizeInPixel,slices:i.slices,timeId:i.timeId,variableId:i.variableId}));return t}getVariableStyles(){const t=[];for(const i of this.variableStyles){const s=this._getVariable(i);if(F(s)){const r=i.clone();r.isosurfaces.length>4&&(r.isosurfaces=r.isosurfaces.slice(0,3),_.error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const n of r.isosurfaces)if(!n.colorLocked){const l=this.getColorForContinuousDataValue(r.variableId,n.value,!1);l===null||l.equals(n.color)||(n.color=l)}if(s.renderingFormat.continuity==="continuous")(r.transferFunction===null||r.transferFunction.colorStops.length<2)&&_.error(`VoxelVariableStyle for variable ${s.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),r.transferFunction!==null&&(Array.isArray(r.transferFunction.stretchRange)&&r.transferFunction.stretchRange.length===2||(_.error(`VoxelVariableStyle for variable ${s.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),r.transferFunction.stretchRange=[0,1],r.transferFunction.colorStops.removeAll()));else if(s.renderingFormat.continuity==="discrete")if(i.uniqueValues.length===0)_.error(`VoxelVariableStyle for variable ${s.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const n of i.uniqueValues)n.label!==null&&n.label!==void 0||n.value===null||n.value===void 0||(n.label=n.value.toString());t.push(r)}else _.error(`VoxelVariable ID=${i.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return t}getVolumeStyles(){const t=[];for(const i of this.volumeStyles){const s=this._getVolumeFromVolumeId(i.volumeId);if(F(s)){const r=i.clone();for(const n of r.slices)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");for(const n of r.dynamicSections)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");t.push(r)}else _.error(`VoxelVolume ID=${i.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return t}_getVariable(t){const i=t.variableId;for(const s of this.variables)if(s.id===i)return s;return null}_getVolumeFromVolumeId(t){for(const i of this.volumes)if(i.id===t)return i;return null}_isPlaneValid(t,i,s){if(!t.point||!Array.isArray(t.point)||t.point.length!==3||!t.normal||!Array.isArray(t.normal)||t.normal.length!==3)return!1;for(let l=0;l<3;++l){const y=t.point[l];if(y<0||y>=s[i[l]].size)return!1}const r=Y(t.normal[0],t.normal[1],t.normal[2]);ve(r,r);const n=1e-6;return!(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<n)&&(t.normal[0]=r[0],t.normal[1]=r[1],t.normal[2]=r[2],!0)}};e([o({type:["Voxel"]})],a.prototype,"operationalLayerType",void 0),e([o(st)],a.prototype,"legendEnabled",void 0),e([o({json:{write:!0}})],a.prototype,"title",void 0),e([o(rt)],a.prototype,"url",null),e([o({type:c.ofType(pe),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],a.prototype,"sections",void 0),e([o({type:$,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],a.prototype,"currentVariableId",void 0),e([o({type:c.ofType(_e),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],a.prototype,"volumeStyles",void 0),e([o({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],a.prototype,"renderMode",void 0),e([o({type:c.ofType(Fe),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],a.prototype,"variableStyles",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],a.prototype,"enableSlices",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],a.prototype,"enableSections",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],a.prototype,"enableDynamicSections",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],a.prototype,"enableIsosurfaces",void 0),e([o({type:qe,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],a.prototype,"shading",void 0),e([o({type:["show","hide"]})],a.prototype,"listMode",void 0),e([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),e([o({type:c.ofType(dt)})],a.prototype,"variables",void 0),e([o({type:c.ofType(Pe)})],a.prototype,"volumes",void 0),e([o({type:bt})],a.prototype,"index",void 0),e([o({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],a.prototype,"minScale",void 0),e([o({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],a.prototype,"maxScale",void 0),e([o({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),e([o({readOnly:!0,json:{name:"serviceVersion"}})],a.prototype,"version",void 0),e([be("service","version")],a.prototype,"readVersion",null),e([o({type:Ne})],a.prototype,"fullExtent",void 0),e([be("service","fullExtent",["fullExtent"])],a.prototype,"readFullExtent",null),e([o({readOnly:!0,clonable:!1,json:{read:!1}})],a.prototype,"voxelFields",null),e([o(nt)],a.prototype,"popupEnabled",void 0),e([o({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),a=e([d(Me)],a);const Ut=a;export{Ut as default};

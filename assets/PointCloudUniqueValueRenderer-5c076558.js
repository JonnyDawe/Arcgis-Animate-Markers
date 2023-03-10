import{f as e,g as t,D as r,aP as f,s as R,fQ as m,fN as O,b8 as o,e1 as N,h$ as D,i0 as z,i1 as K}from"./vendor-e7703df7.js";var w;let c=w=class extends f{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new w({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};e([t({type:String,json:{write:!0}})],c.prototype,"field",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"minValue",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"maxValue",void 0),c=w=e([r("esri.renderers.support.pointCloud.ColorModulation")],c);const k=c,v=new R({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let b=class extends f{};e([t({type:v.apiValues,readOnly:!0,nonNullable:!0,json:{type:v.jsonValues,read:!1,write:v.write}})],b.prototype,"type",void 0),b=e([r("esri.renderers.support.pointCloud.PointSizeAlgorithm")],b);const P=b;var g;let y=g=class extends P{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new g({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};e([m({pointCloudFixedSizeAlgorithm:"fixed-size"})],y.prototype,"type",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"size",void 0),e([t({type:Boolean,json:{write:!0}})],y.prototype,"useRealWorldSymbolSizes",void 0),y=g=e([r("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],y);const B=y;var V;let h=V=class extends P{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new V({scaleFactor:this.scaleFactor})}};e([m({pointCloudSplatAlgorithm:"splat"})],h.prototype,"type",void 0),e([t({type:Number,value:1,nonNullable:!0,json:{write:!0}})],h.prototype,"scaleFactor",void 0),h=V=e([r("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],h);const q=h,A={key:"type",base:P,typeMap:{"fixed-size":B,splat:q}},T=O()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let l=class extends f{constructor(I){super(I),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:o(this.pointSizeAlgorithm),colorModulation:o(this.colorModulation),pointsPerInch:o(this.pointsPerInch)}}};e([t({type:T.apiValues,readOnly:!0,nonNullable:!0,json:{type:T.jsonValues,read:!1,write:T.write}})],l.prototype,"type",void 0),e([t({types:A,json:{write:!0}})],l.prototype,"pointSizeAlgorithm",void 0),e([t({type:k,json:{write:!0}})],l.prototype,"colorModulation",void 0),e([t({json:{write:!0},nonNullable:!0,type:Number})],l.prototype,"pointsPerInch",void 0),l=e([r("esri.renderers.PointCloudRenderer")],l),function(s){s.fieldTransformTypeKebabDict=new R({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(l||(l={}));const i=l;var j;let n=j=class extends f{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new j({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:o(this.color)})}};e([t({type:String,json:{write:!0}})],n.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],n.prototype,"label",void 0),e([t({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],n.prototype,"minValue",void 0),e([t({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],n.prototype,"maxValue",void 0),e([t({type:N,json:{type:[D],write:!0}})],n.prototype,"color",void 0),n=j=e([r("esri.renderers.support.pointCloud.ColorClassBreakInfo")],n);const M=n;var C;let p=C=class extends i{constructor(s){super(s),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new C({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:o(this.colorClassBreakInfos),legendOptions:o(this.legendOptions)})}};e([m({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],p.prototype,"type",void 0),e([t({json:{write:!0},type:String})],p.prototype,"field",void 0),e([t({type:z,json:{write:!0}})],p.prototype,"legendOptions",void 0),e([t({type:i.fieldTransformTypeKebabDict.apiValues,json:{type:i.fieldTransformTypeKebabDict.jsonValues,read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write}})],p.prototype,"fieldTransformType",void 0),e([t({type:[M],json:{write:!0}})],p.prototype,"colorClassBreakInfos",void 0),p=C=e([r("esri.renderers.PointCloudClassBreaksRenderer")],p);const Q=p;var S;let a=S=class extends i{constructor(s){super(s),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new S({...this.cloneProperties(),field:o(this.field),fieldTransformType:o(this.fieldTransformType),stops:o(this.stops),legendOptions:o(this.legendOptions)})}};e([m({pointCloudStretchRenderer:"point-cloud-stretch"})],a.prototype,"type",void 0),e([t({json:{write:!0},type:String})],a.prototype,"field",void 0),e([t({type:z,json:{write:!0}})],a.prototype,"legendOptions",void 0),e([t({type:i.fieldTransformTypeKebabDict.apiValues,json:{type:i.fieldTransformTypeKebabDict.jsonValues,read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write}})],a.prototype,"fieldTransformType",void 0),e([t({type:[K],json:{write:!0}})],a.prototype,"stops",void 0),a=S=e([r("esri.renderers.PointCloudStretchRenderer")],a);const E=a;var $;let u=$=class extends f{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new $({description:this.description,label:this.label,values:o(this.values),color:o(this.color)})}};e([t({type:String,json:{write:!0}})],u.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],u.prototype,"label",void 0),e([t({type:[String],json:{write:!0}})],u.prototype,"values",void 0),e([t({type:N,json:{type:[D],write:!0}})],u.prototype,"color",void 0),u=$=e([r("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],u);const F=u;var x;let d=x=class extends i{constructor(s){super(s),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new x({...this.cloneProperties(),field:o(this.field),fieldTransformType:o(this.fieldTransformType),colorUniqueValueInfos:o(this.colorUniqueValueInfos),legendOptions:o(this.legendOptions)})}};e([m({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],d.prototype,"type",void 0),e([t({json:{write:!0},type:String})],d.prototype,"field",void 0),e([t({type:i.fieldTransformTypeKebabDict.apiValues,json:{type:i.fieldTransformTypeKebabDict.jsonValues,read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),e([t({type:[F],json:{write:!0}})],d.prototype,"colorUniqueValueInfos",void 0),e([t({type:z,json:{write:!0}})],d.prototype,"legendOptions",void 0),d=x=e([r("esri.renderers.PointCloudUniqueValueRenderer")],d);const H=d;export{H as a,E as b,i as c,Q as d};

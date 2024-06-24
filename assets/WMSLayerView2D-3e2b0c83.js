import{aK as a,aL as h,aN as E,aD as F,s as f,af as M,ag as S,U as C,aF as R,cT as U}from"./vendor-97e3022f.js";import{a as $}from"./BitmapContainer-49e4f414.js";import{f as q,y as L}from"./LayerView-811b7984.js";import{_ as V}from"./ExportStrategy-2368e5d5.js";import{i as W}from"./RefreshableLayerView-9ed839ae.js";import{a as A}from"./ExportWMSImageParameters-e861737a.js";import{i as H}from"./timeSupport-6a15f502.js";import"./WGLContainer-a2b9a91c.js";import"./definitions-73d759bb.js";import"./LabelMetric-8eef19e5.js";import"./enums-583c1c7d.js";import"./Texture-6f40bbbc.js";import"./enums-2e633670.js";import"./Program-cd0404af.js";import"./VertexElementDescriptor-2925c6af.js";import"./ProgramTemplate-5c66dd31.js";import"./vec3f32-ad1dc57f.js";import"./Container-32f42feb.js";import"./highlightReasons-ca04dea3.js";import"./StyleDefinition-79f309f8.js";import"./config-1337d16e.js";import"./earcut-de5fa6d9.js";import"./featureConversionUtils-eadb343e.js";import"./OptimizedFeature-059c854c.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./layerViewUtils-ca52829e.js";import"./Bitmap-96a616ab.js";const N=r=>{let t=class extends r{initialize(){this.exportImageParameters=new A({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return H(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,o){const{layer:s}=this;if(!e)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:d}=s;if(!d)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:p,width:n,height:m,x:c,y}=i;if(!(p&&n&&m))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:n,height:m});const g=await s.fetchFeatureInfo(p,n,m,c,y);return M(o),g}};return a([h()],t.prototype,"exportImageParameters",void 0),a([h({readOnly:!0})],t.prototype,"exportImageVersion",null),a([h()],t.prototype,"layer",void 0),a([h({readOnly:!0})],t.prototype,"timeExtent",null),t=a([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends N(W(q(L))){constructor(){super(...arguments),this.bitmapContainer=new $}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(t=>{S(t)||C.getLogger(this).error(t)})}attach(){const{layer:r}=this,{imageMaxHeight:t,imageMaxWidth:e}=r;this.bitmapContainer=new $,this.container.addChild(this.bitmapContainer),this.strategy=new V({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:e,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:t,bitmapContainer:e}=this,{x:o,y:s}=r,{spatialReference:d}=t;let i,p=0,n=0;if(e.children.some(g=>{const{width:w,height:v,resolution:I,x:l,y:x}=g,P=l+I*w,b=x-I*v;return o>=l&&o<=P&&s<=x&&s>=b&&(i=new U({xmin:l,ymin:b,xmax:P,ymax:x,spatialReference:d}),p=w,n=v,!0)}),!i)return null;const m=i.width/p,c=Math.round((o-i.xmin)/m),y=Math.round((i.ymax-s)/m);return{extent:i,width:p,height:n,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,t,e,o){return this.layer.fetchImageBitmap(r,t,e,{timeExtent:this.timeExtent,...o})}};a([h()],u.prototype,"strategy",void 0),a([h()],u.prototype,"updating",void 0),u=a([E("esri.views.2d.layers.WMSLayerView2D")],u);const dt=u;export{dt as default};

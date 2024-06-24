import{w as a,y as h,x as E,F,s as w,d1 as M,p as S,v as C,z as R,b4 as q}from"./vendor-CBH3cTFe.js";import{a as $}from"./BitmapContainer-DbelNTXG.js";import{f as U,y as V}from"./LayerView-DDZCYqTl.js";import{_ as L}from"./ExportStrategy-Ceqqi8ZN.js";import{i as W}from"./RefreshableLayerView-DdYvWRZm.js";import{a as z}from"./ExportWMSImageParameters-GYuz9xp0.js";import{i as A}from"./timeSupport-DiQV2eT5.js";import"./WGLContainer-BvqGa9Zx.js";import"./definitions-Y_v3njP4.js";import"./LabelMetric-Cd0estFg.js";import"./enums-BRXbslMp.js";import"./Texture-Bbr5YH18.js";import"./enums-BlUEVwJR.js";import"./Program-COT786Iy.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-CrqJOsZn.js";import"./vec3f32-nZdmKIgz.js";import"./Container-CtywSp33.js";import"./highlightReasons-BU9kV6Jg.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-BYKiGsgQ.js";import"./featureConversionUtils-B23WLr_p.js";import"./OptimizedFeature-DUj7o6ET.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./layerViewUtils-DaObYqcz.js";import"./Bitmap-Bsk8ENnc.js";const H=r=>{let t=class extends r{initialize(){this.exportImageParameters=new z({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return A(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,o){const{layer:s}=this;if(!e)throw new w("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:d}=s;if(!d)throw new w("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:p,width:n,height:m,x:c,y}=i;if(!(p&&n&&m))throw new w("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:n,height:m});const g=await s.fetchFeatureInfo(p,n,m,c,y);return M(o),g}};return a([h()],t.prototype,"exportImageParameters",void 0),a([h({readOnly:!0})],t.prototype,"exportImageVersion",null),a([h()],t.prototype,"layer",void 0),a([h({readOnly:!0})],t.prototype,"timeExtent",null),t=a([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends H(W(U(V))){constructor(){super(...arguments),this.bitmapContainer=new $}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(t=>{S(t)||C.getLogger(this).error(t)})}attach(){const{layer:r}=this,{imageMaxHeight:t,imageMaxWidth:e}=r;this.bitmapContainer=new $,this.container.addChild(this.bitmapContainer),this.strategy=new L({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:e,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:t,bitmapContainer:e}=this,{x:o,y:s}=r,{spatialReference:d}=t;let i,p=0,n=0;if(e.children.some(g=>{const{width:f,height:v,resolution:b,x:l,y:x}=g,I=l+b*f,P=x-b*v;return o>=l&&o<=I&&s<=x&&s>=P&&(i=new q({xmin:l,ymin:P,xmax:I,ymax:x,spatialReference:d}),p=f,n=v,!0)}),!i)return null;const m=i.width/p,c=Math.round((o-i.xmin)/m),y=Math.round((i.ymax-s)/m);return{extent:i,width:p,height:n,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,t,e,o){return this.layer.fetchImageBitmap(r,t,e,{timeExtent:this.timeExtent,...o})}};a([h()],u.prototype,"strategy",void 0),a([h()],u.prototype,"updating",void 0),u=a([E("esri.views.2d.layers.WMSLayerView2D")],u);const dt=u;export{dt as default};

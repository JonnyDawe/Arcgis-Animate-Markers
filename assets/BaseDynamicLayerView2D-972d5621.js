import{a0 as o,J as p,f as r,g as a,F as m}from"./vendor-8b656dfb.js";import{a as h}from"./BitmapContainer-57e23382.js";import{f as n,u as d}from"./LayerView-4a258f13.js";import{v as c}from"./ExportStrategy-5b7b1b39.js";import{i as g}from"./RefreshableLayerView-662c7353.js";import"./WGLContainer-6a73e97e.js";import"./definitions-19bfb61c.js";import"./VertexArrayObject-f79a5fbe.js";import"./Texture-e9905dc7.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-db159b54.js";import"./enums-55085e26.js";import"./ProgramTemplate-e2bb132a.js";import"./MaterialKey-4ec9db74.js";import"./utils-bde841cc.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-0e61bd17.js";import"./earcut-61f7b102.js";import"./Bitmap-1d7aaf0d.js";let t=class extends g(n(d)){update(e){this._strategy.update(e).catch(i=>{o(i)||p.getLogger(this.declaredClass).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,s){return this.layer.fetchImageBitmap(e,i,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const I=t;export{I as default};

import{E as t,R as h,a as s}from"./Container-32f42feb.js";import{i}from"./AGraphicContainer-3a0ec851.js";class l extends i{renderChildren(e){for(const r of this.children)r.setTransform(e.state);if(super.renderChildren(e),this.attributeView.update(),this.children.some(r=>r.hasData)){switch(e.drawPhase){case t.MAP:this._renderChildren(e,h.All);break;case t.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){s(e,!1,r=>{this._renderChildren(r,h.Highlight)})}}export{l as t};

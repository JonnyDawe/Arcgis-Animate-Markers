import{cn as s,aK as e,du as a,aL as i,aN as n,aT as p,ak as l}from"./vendor-97e3022f.js";let o=class extends s(p){constructor(t){super(t),this.type="georeferenced",this.origin=null}};e([a({georeferenced:"georeferenced"},{readOnly:!0})],o.prototype,"type",void 0),e([i({type:[Number],nonNullable:!1,json:{write:!0}})],o.prototype,"origin",void 0),o=e([n("esri.geometry.support.MeshGeoreferencedVertexSpace")],o);const y=o;let r=class extends s(p){constructor(t){super(t),this.type="local",this.origin=l()}};e([a({local:"local"},{readOnly:!0})],r.prototype,"type",void 0),e([i({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"origin",void 0),r=e([n("esri.geometry.support.MeshLocalVertexSpace")],r);const d=r;export{d as a,y as i};

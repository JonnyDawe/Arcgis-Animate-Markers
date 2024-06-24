import{aK as e,aL as u,bV as p,aN as f,aT as v,U as l,D as a}from"./vendor-97e3022f.js";var y;let r=y=class extends v{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return c(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},l.getLogger(this))}castPosition(t){return t&&t instanceof Float32Array&&l.getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),c(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},l.getLogger(this))}castUv(t){return c(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},l.getLogger(this))}castNormal(t){return c(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},l.getLogger(this))}castTangent(t){return c(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},l.getLogger(this))}clone(){const t={position:a(this.position),uv:a(this.uv),normal:a(this.normal),tangent:a(this.tangent),color:a(this.color)};return new y(t)}clonePositional(){const t={position:a(this.position),normal:a(this.normal),tangent:a(this.tangent),uv:this.uv,color:this.color};return new y(t)}get memoryUsage(){let t=0;return t+=this.position.byteLength,this.uv!=null&&(t+=this.uv.byteLength),this.normal!=null&&(t+=this.normal.byteLength),this.tangent!=null&&(t+=this.tangent.byteLength),this.color!=null&&(t+=this.color.byteLength),t}};function m(t,o,n,g){const{loggerTag:i,stride:s}=o;return t.length%s!=0?(g.error(i,`Invalid array length, expected a multiple of ${s}`),new n([])):t}function c(t,o,n,g,i){if(!t)return t;if(t instanceof o)return m(t,g,o,i);for(const s of n)if(t instanceof s)return m(new o(t),g,o,i);if(Array.isArray(t))return m(new o(t),g,o,i);{const s=n.map(d=>`'${d.name}'`);return i.error(`Failed to set property, expected one of ${s}, but got ${t.constructor.name}`),new o([])}}function h(t,o,n){o[n]=A(t)}function A(t){const o=new Array(t.length);for(let n=0;n<t.length;n++)o[n]=t[n];return o}e([u({json:{write:h}})],r.prototype,"color",void 0),e([p("color")],r.prototype,"castColor",null),e([u({nonNullable:!0,json:{write:h}})],r.prototype,"position",void 0),e([p("position")],r.prototype,"castPosition",null),e([u({json:{write:h}})],r.prototype,"uv",void 0),e([p("uv")],r.prototype,"castUv",null),e([u({json:{write:h}})],r.prototype,"normal",void 0),e([p("normal")],r.prototype,"castNormal",null),e([u({json:{write:h}})],r.prototype,"tangent",void 0),e([p("tangent")],r.prototype,"castTangent",null),r=y=e([f("esri.geometry.support.MeshVertexAttributes")],r);export{c,r as l};

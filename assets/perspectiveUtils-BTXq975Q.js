import{w as t,y as l,x as R,bE as V,f5 as d,e5 as $,b1 as M,f6 as m,cx as x,f7 as g,f2 as c,bJ as h,f8 as z,f9 as i,av as N}from"./vendor-CBH3cTFe.js";import{p as O}from"./normalizeUtilsSync-CtFhEbZb.js";import{e as p}from"./mat3f64-q3fE-ZOt.js";let s=class extends V{constructor(o){super(o)}get bounds(){const o=this.coords;return(o==null?void 0:o.extent)==null?null:d(o.extent)}get coords(){var e;const o=(e=this.element.georeference)==null?void 0:e.coords;return $(o,this.spatialReference).geometry}get normalizedCoords(){return M.fromJSON(O(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?d(o):null}};t([l()],s.prototype,"spatialReference",void 0),t([l()],s.prototype,"element",void 0),t([l()],s.prototype,"bounds",null),t([l()],s.prototype,"coords",null),t([l()],s.prototype,"normalizedCoords",null),t([l()],s.prototype,"normalizedBounds",null),s=t([R("esri.layers.support.MediaElementView")],s);const r=N(),a=p(),u=p(),f=p();function D(o,e,n){return m(r,e[0],e[1],1),x(r,r,g(a,n)),r[2]===0?c(o,r[0],r[1]):c(o,r[0]/r[2],r[1]/r[2])}function F(o,e,n){return y(u,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),y(f,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),h(o,z(u,u),f),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function y(o,e,n,b,v,C,S,j,w){i(o,e,b,C,n,v,S,1,1,1),m(r,j,w,1),z(a,o);const[B,E,J]=x(r,r,g(a,a));return i(a,B,0,0,0,E,0,0,0,J),h(o,a,o)}export{F as j,s as m,D as p};

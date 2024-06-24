import{e8 as k,es as a,hU as C,iQ as W,dE as q,ak as l,dx as B,hW as h,hX as M,et as g,i$ as E,e7 as L,dZ as S,ji as Z,dY as D,hT as v,e9 as y,jj as F,i6 as G,jh as H,jk as _,eb as I,jl as A,am as R,jg as J,jf as K,j5 as tt}from"./vendor-97e3022f.js";import{c as f,f as nt}from"./plane-5137aec6.js";function et(t,e){const n=k(t,e)/(a(t)*a(e));return-C(n)}class it{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&W(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*O);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,O));e++)this._items.push(this._allocator())}}const O=1024;function z(t){return t?T(q(t.origin),q(t.direction)):T(l(),l())}function T(t,e){return{origin:t,direction:e}}function Ot(t,e){const n=ot.get();return n.origin=t,n.direction=e,n}function st(t,e,n=z()){return B(n.origin,t),h(n.direction,e,t),n}function rt(t,e,n){const i=k(t.direction,h(n,e,t.origin));return M(n,t.origin,g(n,t.direction,i)),n}const ot=new it(()=>z()),ct=b();function b(){return E()}const ut=L,at=L;function X(t,e){return S(e,t)}function ft(t,e){return Z(t[0],t[1],t[2],e)}function ht(t){return t}function lt(t){t[0]=t[1]=t[2]=t[3]=0}function gt(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function $(t){return t[3]}function mt(t){return t}function _t(t,e,n,i){return Z(t,e,n,i)}function dt(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n}function Mt(t,e,n){return t!==n&&X(t,n),n}function p(t,e,n){if(e==null||!Y(t,e,d))return!1;let{t0:i,t1:s}=d;if((i<0||s<i&&s>0)&&(i=s),i<0)return!1;if(n){const{origin:r,direction:o}=e;n[0]=r[0]+o[0]*i,n[1]=r[1]+o[1]*i,n[2]=r[2]+o[2]*i}return!0}function $t(t,e,n){const i=st(e,n);if(!Y(t,i,d))return[];const{origin:s,direction:r}=i,{t0:o,t1:c}=d,u=m=>{const j=l();return tt(j,s,r,m),w(t,j,j)};return Math.abs(o-c)<D()?[u(o)]:[u(o),u(c)]}const d={t0:0,t1:0};function Y(t,e,n){const{origin:i,direction:s}=e,r=pt;r[0]=i[0]-t[0],r[1]=i[1]-t[1],r[2]=i[2]-t[2];const o=s[0]*s[0]+s[1]*s[1]+s[2]*s[2];if(o===0)return!1;const c=2*(s[0]*r[0]+s[1]*r[1]+s[2]*r[2]),u=c*c-4*o*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(u<0)return!1;const m=Math.sqrt(u);return n.t0=(-c-m)/(2*o),n.t1=(-c+m)/(2*o),!0}const pt=l();function jt(t,e){return p(t,e,null)}function Pt(t,e,n){if(p(t,e,n))return n;const i=N(t,e,f.get());return M(n,e.origin,g(f.get(),e.direction,v(e.origin,i)/a(e.direction))),n}function N(t,e,n){const i=f.get(),s=nt.get();y(i,e.origin,e.direction);const r=$(t);y(n,i,e.origin),g(n,n,1/a(n)*r);const o=Q(t,e.origin),c=et(e.origin,n);return F(s,c+o,i),G(n,n,s),n}function St(t,e,n){return p(t,e,n)?n:(rt(e,t,n),w(t,n,n))}function w(t,e,n){const i=h(f.get(),e,t),s=g(f.get(),i,t[3]/a(i));return M(n,s,t)}function xt(t,e){const n=h(f.get(),e,t),i=H(n),s=t[3]*t[3];return Math.sqrt(Math.abs(i-s))}function Q(t,e){const n=h(f.get(),e,t),i=a(n),s=$(t),r=s+Math.abs(s-i);return C(s/r)}const P=l();function U(t,e,n,i){const s=h(P,e,t);switch(n){case _.X:{const r=A(s,P)[2];return R(i,-Math.sin(r),Math.cos(r),0)}case _.Y:{const r=A(s,P),o=r[1],c=r[2],u=Math.sin(o);return R(i,-u*Math.cos(c),-u*Math.sin(c),Math.cos(o))}case _.Z:return I(i,s);default:return}}function V(t,e){const n=h(x,e,t);return a(n)-t[3]}function bt(t,e,n,i){const s=V(t,e),r=U(t,e,_.Z,x),o=g(x,r,n-s);return M(i,e,o)}function wt(t,e){const n=J(t,e),i=$(t);return n<=i*i}function qt(t,e,n=E()){const i=v(t,e),s=t[3],r=e[3];return i+r<s?(S(n,t),n):i+s<r?(S(n,e),n):(K(n,t,e,(i+r-s)/(2*i)),n[3]=(i+s+r)/2,n)}const x=l(),yt=b();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:ct,altitudeAt:V,angleToSilhouette:Q,axisAt:U,clear:lt,closestPoint:St,closestPointOnSilhouette:N,containsPoint:wt,copy:X,create:b,distanceToSilhouette:xt,elevate:dt,equals:at,exactEquals:ut,fromCenterAndRadius:ft,fromRadius:gt,fromValues:_t,getCenter:mt,getRadius:$,intersectLine:$t,intersectRay:p,intersectRayClosestSilhouette:Pt,intersectsRay:jt,projectPoint:w,setAltitudeAt:bt,setExtent:Mt,tmpSphere:yt,union:qt,wrap:ht},Symbol.toStringTag,{value:"Module"}));export{jt as H,$ as N,X as T,mt as V,b as _,wt as a,Ot as l,z as m,it as s};

import{et,hX as lt,ak as d,eB as kt,d7 as Mt,iq as Lt,am as D,iT as y,iU as mt,iV as At,iW as Ut,iX as It,ao as ta,e$ as aa,iY as sa,iZ as Ct,h_ as xt,i_ as Ot,i$ as ia,j0 as Bt,j1 as ea,j2 as na,j3 as oa,j4 as ra,es as Ft,j5 as gt,j6 as ha,j7 as ca,dA as Tt}from"./vendor-97e3022f.js";import{t as ua,e as da}from"./mat3f64-e19cdcb8.js";import{e as fa}from"./mat4f64-9a8384aa.js";import{X as la,O as U,x as ma}from"./quat-868b706a.js";import{o as Rt,e as St}from"./quatf64-81e039e4.js";import{a as _t}from"./spatialReferenceEllipsoidUtils-e15aaa16.js";import{u as _a}from"./computeTranslationToOriginAndRotation-5383511e.js";import{c as vt,o as ga,F as pt}from"./plane-5137aec6.js";class Nt{constructor(t,a,s=a){this.data=t,this.size=a,this.stride=s}}class Da extends Nt{constructor(t,a,s,n=!1,o=s){super(t,s,o),this.indices=a,this.exclusive=n}}const nt=1e-6,ot=d(),bt=d();function ba(i,t){const{data:a,size:s}=i,n=a.length/s;if(n<=0)return;const o=new qa(i);wt(ot,o.minProj,o.maxProj),dt(ot,ot,.5),N(bt,o.maxProj,o.minProj);const r=qt(bt),c=new wa;c.quality=r,n<14&&(i=new Nt(new Float64Array(o.buffer,112,42),3));const e=d(),h=d(),b=d(),m=d(),z=d(),A=d(),j=d();switch(ja(o,i,j,e,h,b,m,z,A,c)){case 1:return void Xt(ot,bt,t);case 2:return void pa(i,m,t)}$a(i,j,e,h,b,m,z,A,c),Wt(i,c.b0,c.b1,c.b2,at,st);const E=d();N(E,st,at),c.quality=qt(E),c.quality<r?Zt(c.b0,c.b1,c.b2,at,st,E,t):Xt(ot,bt,t)}function ja(i,t,a,s,n,o,r,c,e,h){return Ma(i,s,n),yt(s,n)<nt?1:(N(r,s,n),g(r,r),Pa(t,s,r,o)<nt?2:(N(c,n,o),g(c,c),N(e,o,s),g(e,e),V(a,c,r),g(a,a),Z(t,a,r,c,e,h),0))}const rt=d(),ht=d(),p=d(),I=d(),q=d(),H=d(),O=d(),B=d();function $a(i,t,a,s,n,o,r,c,e){xa(i,t,a,rt,ht),rt[0]!==void 0&&(N(p,rt,a),g(p,p),N(I,rt,s),g(I,I),N(q,rt,n),g(q,q),V(H,I,o),g(H,H),V(O,q,r),g(O,O),V(B,p,c),g(B,B),Z(i,H,o,I,p,e),Z(i,O,r,q,I,e),Z(i,B,c,p,q,e)),ht[0]!==void 0&&(N(p,ht,a),g(p,p),N(I,ht,s),g(I,I),N(q,ht,n),g(q,q),V(H,I,o),g(H,H),V(O,q,r),g(O,O),V(B,p,c),g(B,B),Z(i,H,o,I,p,e),Z(i,O,r,q,I,e),Z(i,B,c,p,q,e))}function Ma(i,t,a){let s=yt(i.maxVert[0],i.minVert[0]),n=0;for(let o=1;o<7;++o){const r=yt(i.maxVert[o],i.minVert[o]);r>s&&(s=r,n=o)}S(t,i.minVert[n]),S(a,i.maxVert[n])}const w=[0,0,0];function Pa(i,t,a,s){const{data:n,size:o}=i;let r=Number.NEGATIVE_INFINITY,c=0;for(let e=0;e<n.length;e+=o){w[0]=n[e]-t[0],w[1]=n[e+1]-t[1],w[2]=n[e+2]-t[2];const h=a[0]*w[0]+a[1]*w[1]+a[2]*w[2],b=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],m=w[0]*w[0]+w[1]*w[1]+w[2]*w[2]-h*h/b;m>r&&(r=m,c=e)}return S(s,n,c),r}const _=kt();function xa(i,t,a,s,n){za(i,t,_,n,s);const o=Jt(a,t);_[1]-nt<=o&&(s[0]=void 0),_[0]+nt>=o&&(n[0]=void 0)}const Qt=d(),Et=d(),Yt=d(),J=d(),K=d(),jt=d();function Z(i,t,a,s,n,o){if(Dt(t)<nt)return;V(Qt,a,t),V(Et,s,t),V(Yt,n,t),tt(i,t,_),K[1]=_[0],J[1]=_[1],jt[1]=J[1]-K[1];const r=[a,s,n],c=[Qt,Et,Yt];for(let e=0;e<3;++e){tt(i,r[e],_),K[0]=_[0],J[0]=_[1],tt(i,c[e],_),K[2]=_[0],J[2]=_[1],jt[0]=J[0]-K[0],jt[2]=J[2]-K[2];const h=qt(jt);h<o.quality&&(S(o.b0,r[e]),S(o.b1,t),S(o.b2,c[e]),o.quality=h)}}const Sa=d();function tt(i,t,a){const{data:s,size:n}=i;a[0]=Number.POSITIVE_INFINITY,a[1]=Number.NEGATIVE_INFINITY;for(let o=0;o<s.length;o+=n){const r=s[o]*t[0]+s[o+1]*t[1]+s[o+2]*t[2];a[0]=Math.min(a[0],r),a[1]=Math.max(a[1],r)}}function za(i,t,a,s,n){const{data:o,size:r}=i;S(s,o),S(n,s),a[0]=Jt(Sa,t),a[1]=a[0];for(let c=r;c<o.length;c+=r){const e=o[c]*t[0]+o[c+1]*t[1]+o[c+2]*t[2];e<a[0]&&(a[0]=e,S(s,o,c)),e>a[1]&&(a[1]=e,S(n,o,c))}}function Xt(i,t,a){a.center=i,a.halfSize=et(t,t,.5),a.quaternion=Rt}const Y=d(),k=d(),ct=d(),at=d(),st=d(),Gt=d();function pa(i,t,a){S(Y,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?Y[0]=0:Math.abs(t[1])>Math.abs(t[2])?Y[1]=0:Y[2]=0,Dt(Y)<nt&&(Y[0]=Y[1]=Y[2]=1),V(k,t,Y),g(k,k),V(ct,t,k),g(ct,ct),Wt(i,t,k,ct,at,st),N(Gt,st,at),Zt(t,k,ct,at,st,Gt,a)}function Wt(i,t,a,s,n,o){tt(i,t,_),n[0]=_[0],o[0]=_[1],tt(i,a,_),n[1]=_[0],o[1]=_[1],tt(i,s,_),n[2]=_[0],o[2]=_[1]}const R=d(),ut=d(),$t=d(),v=ua(1,0,0,0,1,0,0,0,1),Ia=St();function Zt(i,t,a,s,n,o,r){v[0]=i[0],v[1]=i[1],v[2]=i[2],v[3]=t[0],v[4]=t[1],v[5]=t[2],v[6]=a[0],v[7]=a[1],v[8]=a[2],r.quaternion=ya(Ia,v),wt(R,s,n),dt(R,R,.5),dt(ut,i,R[0]),dt($t,t,R[1]),wt(ut,ut,$t),dt($t,a,R[2]),r.center=lt(ut,ut,$t),r.halfSize=et(R,o,.5)}const M=7;let qa=class{constructor(t){this.minVert=new Array(M),this.maxVert=new Array(M);const a=64*M;this.buffer=new ArrayBuffer(a);let s=0;this.minProj=new Float64Array(this.buffer,s,M),s+=8*M,this.maxProj=new Float64Array(this.buffer,s,M),s+=8*M;for(let e=0;e<M;++e)this.minVert[e]=new Float64Array(this.buffer,s,3),s+=24;for(let e=0;e<M;++e)this.maxVert[e]=new Float64Array(this.buffer,s,3),s+=24;for(let e=0;e<M;++e)this.minProj[e]=Number.POSITIVE_INFINITY,this.maxProj[e]=Number.NEGATIVE_INFINITY;const n=new Array(M),o=new Array(M),{data:r,size:c}=t;for(let e=0;e<r.length;e+=c){let h=r[e];h<this.minProj[0]&&(this.minProj[0]=h,n[0]=e),h>this.maxProj[0]&&(this.maxProj[0]=h,o[0]=e),h=r[e+1],h<this.minProj[1]&&(this.minProj[1]=h,n[1]=e),h>this.maxProj[1]&&(this.maxProj[1]=h,o[1]=e),h=r[e+2],h<this.minProj[2]&&(this.minProj[2]=h,n[2]=e),h>this.maxProj[2]&&(this.maxProj[2]=h,o[2]=e),h=r[e]+r[e+1]+r[e+2],h<this.minProj[3]&&(this.minProj[3]=h,n[3]=e),h>this.maxProj[3]&&(this.maxProj[3]=h,o[3]=e),h=r[e]+r[e+1]-r[e+2],h<this.minProj[4]&&(this.minProj[4]=h,n[4]=e),h>this.maxProj[4]&&(this.maxProj[4]=h,o[4]=e),h=r[e]-r[e+1]+r[e+2],h<this.minProj[5]&&(this.minProj[5]=h,n[5]=e),h>this.maxProj[5]&&(this.maxProj[5]=h,o[5]=e),h=r[e]-r[e+1]-r[e+2],h<this.minProj[6]&&(this.minProj[6]=h,n[6]=e),h>this.maxProj[6]&&(this.maxProj[6]=h,o[6]=e)}for(let e=0;e<M;++e){let h=n[e];S(this.minVert[e],r,h),h=o[e],S(this.maxVert[e],r,h)}}},wa=class{constructor(){this.b0=Mt(1,0,0),this.b1=Mt(0,1,0),this.b2=Mt(0,0,1),this.quality=0}};function qt(i){return i[0]*i[1]+i[0]*i[2]+i[1]*i[2]}function wt(i,t,a){i[0]=t[0]+a[0],i[1]=t[1]+a[1],i[2]=t[2]+a[2]}function N(i,t,a){i[0]=t[0]-a[0],i[1]=t[1]-a[1],i[2]=t[2]-a[2]}function dt(i,t,a){i[0]=t[0]*a,i[1]=t[1]*a,i[2]=t[2]*a}function S(i,t,a=0){i[0]=t[a],i[1]=t[a+1],i[2]=t[a+2]}function V(i,t,a){const s=t[0],n=t[1],o=t[2],r=a[0],c=a[1],e=a[2];i[0]=n*e-o*c,i[1]=o*r-s*e,i[2]=s*c-n*r}function g(i,t){const a=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(a>0){const s=1/Math.sqrt(a);i[0]=t[0]*s,i[1]=t[1]*s,i[2]=t[2]*s}}function Dt(i){return i[0]*i[0]+i[1]*i[1]+i[2]*i[2]}function yt(i,t){const a=t[0]-i[0],s=t[1]-i[1],n=t[2]-i[2];return a*a+s*s+n*n}function Jt(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function ya(i,t){const a=t[0]+t[4]+t[8];if(a>0){let s=Math.sqrt(a+1);i[3]=.5*s,s=.5/s,i[0]=(t[5]-t[7])*s,i[1]=(t[6]-t[2])*s,i[2]=(t[1]-t[3])*s}else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[3*s+s]&&(s=2);const n=(s+1)%3,o=(s+2)%3;let r=Math.sqrt(t[3*s+s]-t[3*n+n]-t[3*o+o]+1);i[s]=.5*r,r=.5/r,i[3]=(t[3*n+o]-t[3*o+n])*r,i[n]=(t[3*n+s]+t[3*s+n])*r,i[o]=(t[3*o+s]+t[3*s+o])*r}return i}class ft{constructor(t=Lt,a=Ya,s=Rt){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],s[0],s[1],s[2],s[3]]}clone(){const t=new ft;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new ft;return a._data=t.slice(),a}static fromJSON(t){return new ft(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return D(vt.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,s){this._data[0]=t,this._data[1]=a,this._data[2]=s}get halfSize(){return D(vt.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return la(ga.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=l,s=this._data;a[0]=s[6],a[1]=s[7],a[2]=s[8],a[3]=s[9];for(let n=0;n<8;++n){const o=t[n];o[0]=(1&n?-1:1)*s[3],o[1]=(2&n?-1:1)*s[4],o[2]=(4&n?-1:1)*s[5],y(o,o,a),o[0]+=s[0],o[1]+=s[1],o[2]+=s[2]}}doesIntersectFrustumConservativeApproximation(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],s=this._data[5];return Math.sqrt(t*t+a*a+s*s)}intersectSphere(t){u[0]=this._data[0]-t[0],u[1]=this._data[1]-t[1],u[2]=this._data[2]-t[2];const a=this.getQuaternion(G);return U(l,a),y(u,u,l),mt(u,u),X[0]=Math.min(u[0],this._data[3]),X[1]=Math.min(u[1],this._data[4]),X[2]=Math.min(u[2],this._data[5]),At(X,u)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const s=this._data;u[0]=s[0]-t[0],u[1]=s[1]-t[1],u[2]=s[2]-t[2];const n=t[3],o=n+a;return!(Ut(u)>o*o)&&(l[0]=-s[6],l[1]=-s[7],l[2]=-s[8],l[3]=s[9],y(u,u,l),mt(u,u),X[0]=Math.min(u[0],s[3]),X[1]=Math.min(u[1],s[4]),X[2]=Math.min(u[2],s[5]),At(X,u)<n*n)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],s=this.projectedRadius(pt(t));return a>s?1:a<-s?-1:0}intersectRay(t,a,s=0){const n=this._data,o=l;o[0]=-n[6],o[1]=-n[7],o[2]=-n[8],o[3]=n[9],u[0]=t[0]-n[0],u[1]=t[1]-n[1],u[2]=t[2]-n[2];const r=y(u,u,l),c=y(X,a,l);let e=-1/0,h=1/0;const b=this.getHalfSize(it);for(let m=0;m<3;m++){const z=r[m],A=c[m],j=b[m]+s;if(Math.abs(A)>1e-6){const E=(j-z)/A,$=(-j-z)/A;e=Math.max(e,Math.min(E,$)),h=Math.min(h,Math.max(E,$))}else if(z>j||z<-j)return!1}return e<=h}projectedArea(t,a,s,n){const o=this.getQuaternion(G);U(l,o),u[0]=t[0]-this._data[0],u[1]=t[1]-this._data[1],u[2]=t[2]-this._data[2],y(u,u,l);const r=this.getHalfSize(it),c=u[0]<-r[0]?-1:u[0]>r[0]?1:0,e=u[1]<-r[1]?-1:u[1]>r[1]?1:0,h=u[2]<-r[2]?-1:u[2]>r[2]?1:0,b=Math.abs(c)+Math.abs(e)+Math.abs(h);if(b===0)return 1/0;const m=b===1?4:6,z=6*(c+3*e+9*h+13);It(L,o),ta(L,L,r);const A=this.getCenter(T);for(let $=0;$<m;$++){const zt=Aa[z+$];D(u,((1&zt)<<1)-1,(2&zt)-1,((4&zt)>>1)-1),aa(u,u,L),lt(W,A,u),W[3]=1,sa(W,W,a);const Vt=1/Math.max(1e-6,W[3]);C[2*$]=W[0]*Vt,C[2*$+1]=W[1]*Vt}const j=2*m-2;let E=C[0]*(C[3]-C[j+1])+C[j]*(C[1]-C[j-1]);for(let $=2;$<j;$+=2)E+=C[$]*(C[$+3]-C[$-1]);return Math.abs(E)*s*n*.125}projectedRadius(t){const a=this.getQuaternion(G);return U(l,a),y(u,t,l),Math.abs(u[0]*this._data[3])+Math.abs(u[1]*this._data[4])+Math.abs(u[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(pt(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(pt(t))}toAaBoundingBox(t){const a=this.getQuaternion(G),s=It(L,a),n=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),o=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),r=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);t[0]=this._data[0]-n,t[1]=this._data[1]-o,t[2]=this._data[2]-r,t[3]=this._data[0]+n,t[4]=this._data[1]+o,t[5]=this._data[2]+r}transform(t,a,s,n=0,o=_t(s),r=_t(a),c=Ot(a,r)){if(s===o)a.isGeographic?va(this,t,a,n,r):Ta(this,t,a,n,r,c);else if(a.isWGS84&&(s.isWebMercator||Ct(s)))Ca(a,this,s,t,n);else if(a.isWebMercator&&Ct(s))Fa(a,this,s,t,n);else{const e=this.getCenter(T);e[2]+=n,xt(e,a,0,e,s,0,1),t.center=e,this!==t&&(t.quaternion=this.getQuaternion(G),t.halfSize=this.getHalfSize(it))}}}const l=St(),G=St(),Na=St(),u=d(),X=d(),W=ia();function Va(i,t=new ft){return ba(i,t),t}const C=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Aa=(()=>{const i=new Int8Array(162);let t=0;const a=s=>{for(let n=0;n<s.length;n++)i[t+n]=s[n];t+=6};return a([6,2,3,1,5,4]),a([0,2,3,1,5,4]),a([0,2,3,7,5,4]),a([0,1,3,2,6,4]),a([0,1,3,2,0,0]),a([0,1,5,7,3,2]),a([0,1,3,7,6,4]),a([0,1,3,7,6,2]),a([0,1,5,7,6,2]),a([0,1,5,4,6,2]),a([0,1,5,4,0,0]),a([0,1,3,7,5,4]),a([0,2,6,4,0,0]),a([0,0,0,0,0,0]),a([1,3,7,5,0,0]),a([2,3,7,6,4,0]),a([2,3,7,6,0,0]),a([2,3,1,5,7,6]),a([0,1,5,7,6,2]),a([0,1,5,7,6,4]),a([0,1,3,7,6,4]),a([4,5,7,6,2,0]),a([4,5,7,6,0,0]),a([4,5,1,3,7,6]),a([0,2,3,7,5,4]),a([6,2,3,7,5,4]),a([6,2,3,1,5,4]),i})();function ka(i,t,a,s,n){const o=i.getQuaternion(G);n.quaternion=o,U(l,o);const r=i.getCenter(T),c=i.getHalfSize(it);if(s===oa.Global){y(f,r,l),mt(F,f),ra(x,F,c),Bt(x,F,x);const e=Ft(x);lt(x,F,c);const h=Ft(x);if(e<a)n.center=r,D(f,a,a,a),n.halfSize=lt(f,c,f);else{const b=h>0?1+t/h:1,m=e>0?1+a/e:1,z=(m+b)/2,A=(m-b)/2;et(x,F,A),n.halfSize=gt(x,x,c,z),et(x,F,z),gt(x,x,c,A),ha(f,f),ca(f,x,f);const j=i.getQuaternion(Na);n.center=y(f,f,j)}}else{n.center=gt(f,r,Tt,(a+t)/2);const e=y(f,Tt,l);mt(e,e),n.halfSize=gt(F,c,e,(a-t)/2)}return n}function Ca(i,t,a,s,n){t.getCenter(T),T[2]+=n;const o=_t(a);xt(T,i,0,T,o,0,1),Kt(o,t,T,a,s)}function Fa(i,t,a,s,n){t.getCenter(T),T[2]+=n,Kt(i,t,T,a,s)}function Kt(i,t,a,s,n){const o=t.getQuaternion(G),r=It(L,o),c=t.getHalfSize(it);for(let e=0;e<8;++e){for(let h=0;h<3;++h)Q[h]=c[h]*(e&1<<h?-1:1);for(let h=0;h<3;++h){let b=a[h];for(let m=0;m<3;++m)b+=Q[m]*r[3*m+h];Pt[3*e+h]=b}}xt(Pt,i,0,Pt,s,0,8),Va(Qa,n)}function Ta(i,t,a,s,n=_t(a),o=Ot(a,n)){i.getCorners(Ht),i.getCenter(Q),Q[2]+=s,_a(a,Q,P,n),t.setCenter(P[12],P[13],P[14]);const r=2*Math.sqrt(1+P[0]+P[5]+P[10]);l[0]=(P[6]-P[9])/r,l[1]=(P[8]-P[2])/r,l[2]=(P[1]-P[4])/r,l[3]=.25*r;const c=i.getQuaternion(G);t.quaternion=ma(l,l,c),U(l,l),D(F,0,0,0);const e=t.getCenter(Ea);for(const h of Ht)h[2]+=s,o(h,0,h,0),Bt(f,h,e),y(f,f,l),mt(f,f),ea(F,F,f);t.halfSize=F}function va(i,t,a,s,n=_t(a)){const o=na(a),r=1+Math.max(0,s)/(o.radius+i.centerZ);i.getCenter(Q),Q[2]+=s,xt(Q,a,0,Q,n,0,1),t.center=Q;const c=i.getQuaternion(G);t.quaternion=c,U(l,c),D(f,0,0,1),y(f,f,l);const e=i.getHalfSize(it);D(f,e[0]*Math.abs(f[0]),e[1]*Math.abs(f[1]),e[2]*Math.abs(f[2])),et(f,f,o.inverseFlattening),lt(f,e,f),t.halfSize=et(f,f,r)}const Pt=new Array(24),Qa=new Nt(Pt,3),Q=d(),T=d(),Ea=d(),it=d(),L=da(),P=fa(),Ht=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],f=d(),F=d(),x=d(),Ya=Mt(-1,-1,-1);export{ft as I,ka as L,Da as t};

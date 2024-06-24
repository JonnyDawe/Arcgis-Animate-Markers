const __vite__fileDeps=["assets/libtess-asm-CWBslh4w.js","assets/vendor-CBH3cTFe.js","assets/libtess-B0hIk4IW.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{$ as bt,_ as wt,eU as Rt}from"./vendor-CBH3cTFe.js";import{e as $,n as D}from"./enums-BRXbslMp.js";import{R as pt}from"./definitions-Y_v3njP4.js";const Ut=128e3;let dt=null,mt=null;async function Ot(){return dt||(dt=Mt()),dt}async function Mt(){mt=await(bt("esri-csp-restrictions")?await wt(()=>import("./libtess-asm-CWBslh4w.js"),__vite__mapDeps([0,1])).then(i=>i.l):await wt(()=>import("./libtess-B0hIk4IW.js"),__vite__mapDeps([2,1])).then(i=>i.l)).default({locateFile:i=>Rt(`esri/core/libs/libtess/${i}`)})}function Pt(r,i){const x=Math.max(r.length,Ut);return mt.triangulate(r,i,x)}function Vt(r,i){return r.x===i.x&&r.y===i.y}function kt(r){if(!r)return;const i=r.length;if(i<=1)return;let x=0;for(let v=1;v<i;v++)Vt(r[v],r[x])||++x===v||(r[x]=r[v]);r.length=x+1}function k(r,i){return r.x=i.y,r.y=-i.x,r}function R(r,i){return r.x=-i.y,r.y=i.x,r}function Tt(r,i){return r.x=i.x,r.y=i.y,r}function vt(r,i){return r.x=-i.x,r.y=-i.y,r}function ft(r){return Math.sqrt(r.x*r.x+r.y*r.y)}function Bt(r,i){return r.x*i.y-r.y*i.x}function gt(r,i){return r.x*i.x+r.y*i.y}function et(r,i,x,v){return r.x=i.x*x+i.y*v,r.y=i.x*v-i.y*x,r}class St{constructor(i,x,v){this._writeVertex=i,this._writeTriangle=x,this._canUseThinTessellation=v,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(i,x,v=this._canUseThinTessellation){kt(i),v&&x.halfWidth<pt&&!x.offset?this._tessellateThin(i,x):this._tessellate(i,x)}_tessellateThin(i,x){if(i.length<2)return;const v=x.wrapDistance||65535;let N=x.initialDistance||0,I=!1,C=i[0].x,F=i[0].y;const B=i.length;for(let j=1;j<B;++j){I&&(I=!1,N=0);let W=i[j].x,X=i[j].y,b=W-C,f=X-F,T=Math.sqrt(b*b+f*f);if(b/=T,f/=T,N+T>v){I=!0;const t=(v-N)/T;T=v-N,W=(1-t)*C+t*W,X=(1-t)*F+t*X,--j}const o=this._writeVertex(C,F,0,0,b,f,f,-b,0,-1,N),y=this._writeVertex(C,F,0,0,b,f,-f,b,0,1,N);N+=T;const G=this._writeVertex(W,X,0,0,b,f,f,-b,0,-1,N),e=this._writeVertex(W,X,0,0,b,f,-f,b,0,1,N);this._writeTriangle(o,y,G),this._writeTriangle(y,G,e),C=W,F=X}}_tessellate(i,x){const v=i[0],N=i[i.length-1],I=Vt(v,N),C=I?3:2;if(i.length<C)return;const F=x.pixelCoordRatio,B=x.capType!=null?x.capType:$.BUTT,j=x.joinType!=null?x.joinType:D.MITER,W=x.miterLimit!=null?Math.min(x.miterLimit,4):2,X=x.roundLimit!=null?Math.min(x.roundLimit,1.05):1.05,b=x.halfWidth!=null?x.halfWidth:2,f=!!x.textured;let T,o,y,G=null;const e=this._prevNormal,t=this._nextNormal;let K=-1,Q=-1;const s=this._joinNormal;let _,c;const xt=this._textureNormalLeft,nt=this._textureNormalRight,w=this._textureNormal;let u=-1,h=-1;const _t=x.wrapDistance||65535;let l=x.initialDistance||0;const Et=this._writeVertex,Nt=this._writeTriangle,d=(p,st,H,m,L,A)=>{const O=Et(o,y,_,c,H,m,p,st,L,A,l);return u>=0&&h>=0&&O>=0&&Nt(u,h,O),u=h,h=O,O};I&&(T=i[i.length-2],t.x=N.x-T.x,t.y=N.y-T.y,Q=ft(t),t.x/=Q,t.y/=Q);let Y=!1;for(let p=0;p<i.length;++p){if(Y&&(Y=!1,l=0),T&&(e.x=-t.x,e.y=-t.y,K=Q,l+K>_t&&(Y=!0)),Y){const n=(_t-l)/K;K=_t-l,T={x:(1-n)*T.x+n*i[p].x,y:(1-n)*T.y+n*i[p].y},--p}else T=i[p];o=T.x,y=T.y;const st=p<=0&&!Y,H=p===i.length-1;if(st||(l+=K),G=H?I?i[1]:null:i[p+1],G?(t.x=G.x-o,t.y=G.y-y,Q=ft(t),t.x/=Q,t.y/=Q):(t.x=void 0,t.y=void 0),!I){if(st){R(s,t),_=s.x,c=s.y,B===$.SQUARE&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,0,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,0,1)),B===$.ROUND&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,-1,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,-1,1)),B!==$.ROUND&&B!==$.BUTT||(d(-t.y,t.x,t.x,t.y,0,-1),d(t.y,-t.x,t.x,t.y,0,1));continue}if(H){k(s,e),_=s.x,c=s.y,B!==$.ROUND&&B!==$.BUTT||(d(e.y,-e.x,-e.x,-e.y,0,-1),d(-e.y,e.x,-e.x,-e.y,0,1)),B===$.SQUARE&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,0,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,0,1)),B===$.ROUND&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,1,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,1,1));continue}}let m,L,A=-Bt(e,t);if(Math.abs(A)<.01)gt(e,t)>0?(s.x=e.x,s.y=e.y,A=1,m=Number.MAX_VALUE,L=!0):(R(s,t),A=1,m=1,L=!1);else{s.x=(e.x+t.x)/A,s.y=(e.y+t.y)/A,m=ft(s);const n=(m-1)*b*F;L=m>4||n>K&&n>Q}_=s.x,c=s.y;let O=j;switch(j){case D.BEVEL:m<1.05&&(O=D.MITER);break;case D.ROUND:m<X&&(O=D.MITER);break;case D.MITER:m>W&&(O=D.BEVEL)}switch(O){case D.MITER:if(d(s.x,s.y,-e.x,-e.y,0,-1),d(-s.x,-s.y,-e.x,-e.y,0,1),H)break;if(f){const n=Y?0:l;u=this._writeVertex(o,y,_,c,t.x,t.y,s.x,s.y,0,-1,n),h=this._writeVertex(o,y,_,c,t.x,t.y,-s.x,-s.y,0,1,n)}break;case D.BEVEL:{const n=A<0;let g,V,q,U;if(n){const a=u;u=h,h=a,g=xt,V=nt}else g=nt,V=xt;if(L)q=n?R(this._innerPrev,e):k(this._innerPrev,e),U=n?k(this._innerNext,t):R(this._innerNext,t);else{const a=n?vt(this._inner,s):Tt(this._inner,s);q=a,U=a}const M=n?k(this._bevelStart,e):R(this._bevelStart,e);d(q.x,q.y,-e.x,-e.y,g.x,g.y);const yt=d(M.x,M.y,-e.x,-e.y,V.x,V.y);if(H)break;const P=n?R(this._bevelEnd,t):k(this._bevelEnd,t);if(L){const a=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,l);u=this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,g.x,g.y,l),h=this._writeVertex(o,y,_,c,t.x,t.y,P.x,P.y,V.x,V.y,l),this._writeTriangle(yt,a,h)}else{if(f){const a=this._bevelMiddle;a.x=(M.x+P.x)/2,a.y=(M.y+P.y)/2,et(w,a,-e.x,-e.y),d(a.x,a.y,-e.x,-e.y,w.x,w.y),et(w,a,t.x,t.y),u=this._writeVertex(o,y,_,c,t.x,t.y,a.x,a.y,w.x,w.y,l),h=this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,g.x,g.y,l)}else{const a=u;u=h,h=a}d(P.x,P.y,t.x,t.y,V.x,V.y)}if(n){const a=u;u=h,h=a}break}case D.ROUND:{const n=A<0;let g,V;if(n){const E=u;u=h,h=E,g=xt,V=nt}else g=nt,V=xt;const q=n?vt(this._inner,s):Tt(this._inner,s);let U,M;L?(U=n?R(this._innerPrev,e):k(this._innerPrev,e),M=n?k(this._innerNext,t):R(this._innerNext,t)):(U=q,M=q);const yt=n?k(this._roundStart,e):R(this._roundStart,e),P=n?R(this._roundEnd,t):k(this._roundEnd,t),a=d(U.x,U.y,-e.x,-e.y,g.x,g.y),ot=d(yt.x,yt.y,-e.x,-e.y,V.x,V.y);if(H)break;const z=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,l);L||this._writeTriangle(u,h,z);const S=vt(this._outer,q),J=this._writeVertex(o,y,_,c,t.x,t.y,P.x,P.y,V.x,V.y,l);let Z,tt;const ht=m>2;if(ht){let E;m!==Number.MAX_VALUE?(S.x/=m,S.y/=m,E=gt(e,S),E=(m*(E*E-1)+1)/E):E=-1,Z=n?k(this._startBreak,e):R(this._startBreak,e),Z.x+=e.x*E,Z.y+=e.y*E,tt=n?R(this._endBreak,t):k(this._endBreak,t),tt.x+=t.x*E,tt.y+=t.y*E}et(w,S,-e.x,-e.y);const lt=this._writeVertex(o,y,_,c,-e.x,-e.y,S.x,S.y,w.x,w.y,l);et(w,S,t.x,t.y);const ct=f?this._writeVertex(o,y,_,c,t.x,t.y,S.x,S.y,w.x,w.y,l):lt,ut=z,at=f?this._writeVertex(o,y,_,c,t.x,t.y,0,0,0,0,l):z;let it=-1,rt=-1;if(ht&&(et(w,Z,-e.x,-e.y),it=this._writeVertex(o,y,_,c,-e.x,-e.y,Z.x,Z.y,w.x,w.y,l),et(w,tt,t.x,t.y),rt=this._writeVertex(o,y,_,c,t.x,t.y,tt.x,tt.y,w.x,w.y,l)),f?ht?(this._writeTriangle(ut,ot,it),this._writeTriangle(ut,it,lt),this._writeTriangle(at,ct,rt),this._writeTriangle(at,rt,J)):(this._writeTriangle(ut,ot,lt),this._writeTriangle(at,ct,J)):ht?(this._writeTriangle(z,ot,it),this._writeTriangle(z,it,rt),this._writeTriangle(z,rt,J)):(this._writeTriangle(z,ot,lt),this._writeTriangle(z,ct,J)),L?(u=this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,g.x,g.y,l),h=J):(u=f?this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,g.x,g.y,l):a,this._writeTriangle(u,at,J),h=J),n){const E=u;u=h,h=E}break}}}}}export{Pt as a,St as c,Ot as i};

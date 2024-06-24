import{bm as Z,bn as Sn,b4 as A,bo as $,bg as I,O as Pn,b1 as hn,R as G,aN as Gn,bp as Nn,s as kn,bq as v,br as T,bs as on,bt as En,bu as Tn,aY as vn,bv as sn}from"./vendor-CBH3cTFe.js";var V;function pn(n,t,e){return!Nn(n,t,e)}function L(n,t,e){const s=pn(n,t,e);if(s&&!Z())throw new kn("rasterprojectionhelper-project","projection engine is not loaded");return s}(function(n){n[n.None=0]="None",n[n.North=1]="North",n[n.South=2]="South",n[n.Both=3]="Both"})(V||(V={}));const an=(n,t,e,s=0)=>{if(e[0]===1)return[0,0];let a=1,i=-1,o=1,f=-1;for(let c=0;c<n.length;c+=2)isNaN(n[c])||(a=a>n[c]?n[c]:a,i=i>n[c]?i:n[c],o=o>n[c+1]?n[c+1]:o,f=f>n[c+1]?f:n[c+1]);const{cols:u,rows:r}=t,l=(i-a)/u/e[0],d=(f-o)/r/e[1],p=2*s;let x=0,m=!1,g=[0,0];for(let c=0;c<u-3;c++){for(let R=0;R<r-3;R++){const y=c*r*2+2*R,h=(n[y]+n[y+4]+n[y+4*r]+n[y+4*r+4])/4,M=(n[y+1]+n[y+5]+n[y+4*r+1]+n[y+4*r+5])/4,w=Math.abs((h-n[y+2*r+2])/l),b=Math.abs((M-n[y+2*r+3])/d);if(w+b>x&&(x=w+b,g=[w,b]),p&&x>p){m=!0;break}}if(m)break}return g},Cn={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},B=32,F=4,D=F,U=new Map,H=new Map,Y=500;async function Fn(){Z()||await Sn()}function _n(n,t,e){return L(n.spatialReference,t),e?sn(t,n.spatialReference,n):sn(n.spatialReference,t,n)}function rn(n,t,e,s=null){const a=n.spatialReference;if(a.equals(t))return n;L(a,t,s);const i=e.center,o=new A({xmin:i.x-n.x/2,xmax:i.x+n.x/2,ymin:i.y-n.y/2,ymax:i.y+n.y/2,spatialReference:a}),f=$(o,t,s),u=C(t);let r;if(f==null||u!=null&&f.width>=u){const l=I(a)/I(t);r={x:n.x*l,y:n.y*l}}else r={x:f.width,y:f.height};return r}function N(n,t=.01){return I(n)?t/I(n):0}function ln(n,t,e=null,s=!0){const a=n.spatialReference;if(a.equals(t))return n;L(a,t,e);const i=$(n,t,e);return s&&i&&gn([n],[i],a,t),i}function gn(n,t,e,s){const a=q(e,!0),i=q(s,!0),o=N(e,Y),f=N(s,Y);if(o&&a!=null&&i!=null)for(let u=0;u<n.length;u++){const r=t[u];if(!r)continue;const{x:l}=n[u],{x:d}=r;d>=i[1]-f&&Math.abs(l-a[0])<o?r.x-=i[1]-i[0]:d<=i[0]+f&&Math.abs(l-a[1])<o&&(r.x+=i[1]-i[0])}}function zn(n){const{inSR:t,outSR:e,datumTransformation:s,preferPE:a}=n;if(t.equals(e)){const{points:i}=nn(n,null);return i}return t.isWebMercator&&e.isWGS84||t.isWGS84&&e.isWebMercator?On(n):L(t,e,s)&&a&&(t.isGeographic||O(t)!=null)?cn(n):Wn(n)}function Wn(n){const{points:t}=nn(n,null),{inSR:e,outSR:s,datumTransformation:a}=n,i=t.map(f=>new G(f[0],f[1],e)),o=$(i,s,a);return a&&gn(i,o,e,s),o.map(f=>f?[f.x,f.y]:[NaN,NaN])}function cn(n){const{inSR:t,outSR:e,datumTransformation:s}=n,a=O(t),{points:i,mask:o}=nn(n,a);if(!t.isGeographic){const u=t.wkid?v.coordsys(t.wkid):v.fromString(t.isGeographic?T.PE_TYPE_GEOGCS:T.PE_TYPE_PROJCS,t.wkt2||t.wkt);on.projToGeog(u,i.length,i)}if(s!=null&&s.steps.length){let u;if(e.isGeographic&&(u=i.map(([l])=>l>179.9955?1:l<-179.9955?-1:0)),s.steps.forEach(l=>{const d=l.wkid?v.geogtran(l.wkid):v.fromString(T.PE_TYPE_GEOGTRAN,l.wkt);En.geogToGeog(d,i.length,i,null,l.isInverse?T.PE_TRANSFORM_2_TO_1:T.PE_TRANSFORM_1_TO_2)}),u)for(let l=0;l<i.length;l++){const d=u[l],p=i[l][0],x=p>179.9955?1:p<-179.9955?-1:0;d&&x&&d!==x&&(i[l][0]=d>0?p+360:p-360)}}if(!e.isGeographic){const u=O(e,!0),r=u!=null&&u.isEnvelope?[u.bbox[1],u.bbox[3]]:[-90,90];$n(i,r);const l=e.wkid?v.coordsys(e.wkid):v.fromString(e.isGeographic?T.PE_TYPE_GEOGCS:T.PE_TYPE_PROJCS,e.wkt2||e.wkt);on.geogToProj(l,i.length,i)}let f=i;if(o&&i.length!==o.length){f=[];for(let u=0,r=0;u<o.length;u++)o[u]?f.push(i[r++]):f.push([NaN,NaN])}return f}function On(n){const{cols:t,rows:e,xres:s,yres:a,usePixelCenter:i,inSR:o,outSR:f}=n;let{xmin:u,ymax:r}=n;i&&(u+=s/2,r-=a/2);const l=[],d=[],p=Math.max(t,e);for(let m=0;m<p;m++){const g=u+s*Math.min(t,m),c=r-a*Math.min(e,m),R=$(new G({x:g,y:c,spatialReference:o}),f);m<=t&&l.push(R.x),m<=e&&d.push(R.y)}const x=[];for(let m=0;m<t;m++)for(let g=0;g<e;g++)x.push([l[m],d[g]]);return x}function O(n,t=!1){let e=n.wkid||n.wkt2||n.wkt;if(!e||n.isGeographic)return null;if(e=String(e),U.has(e)){const o=U.get(e);return t?o==null?void 0:o.gcs:o==null?void 0:o.pcs}const s=n.wkid?v.coordsys(n.wkid):v.fromString(n.isGeographic?T.PE_TYPE_GEOGCS:T.PE_TYPE_PROJCS,n.wkt2||n.wkt),a=fn(s,N(n,1e-4)),i=fn(s,0,!0);return U.set(e,{pcs:a,gcs:i}),t?i:a}function fn(n,t=0,e=!1){const s=Tn.generate(n),a=e?n.horizonGcsGenerate():n.horizonPcsGenerate();if(!s||!(a!=null&&a.length))return null;let i=!1,o=a.find(c=>c.getInclusive()===1&&c.getKind()===1);if(!o){if(o=a.find(c=>c.getInclusive()===1&&c.getKind()===0),!o)return null;i=!0}const f=e?0:(s.getNorthPoleLocation()===2?1:0)|(s.getSouthPoleLocation()===2?2:0),u=s.isPannableRectangle(),r=o.getCoord();if(i)return{isEnvelope:i,isPannable:u,vertices:r,coef:null,bbox:[r[0][0]-t,r[0][1]-t,r[1][0]+t,r[1][1]+t],poleLocation:f};let l=0;const d=[];let[p,x]=r[0],[m,g]=r[0];for(let c=0,R=r.length;c<R;c++){l++,l===R&&(l=0);const[y,h]=r[c],[M,w]=r[l];if(w===h)d.push([y,M,h,w,2]);else{const b=(M-y)/(w-h||1e-4),k=y-b*h;h<w?d.push([b,k,h,w,0]):d.push([b,k,w,h,1])}p=p<y?p:y,x=x<h?x:h,m=m>y?m:y,g=g>h?g:h}return{isEnvelope:!1,isPannable:u,vertices:r,coef:d,bbox:[p,x,m,g],poleLocation:f}}function nn(n,t){const e=[],{cols:s,rows:a,xres:i,yres:o,usePixelCenter:f}=n;let{xmin:u,ymax:r}=n;if(f&&(u+=i/2,r-=o/2),t==null){for(let x=0;x<s;x++)for(let m=0;m<a;m++)e.push([u+i*x,r-o*m]);return{points:e}}const l=new Uint8Array(s*a);if(t.isEnvelope){const{bbox:[x,m,g,c]}=t;for(let R=0,y=0;R<s;R++){const h=u+i*R,M=t.isPannable||h>=x&&h<=g;for(let w=0;w<a;w++,y++){const b=r-o*w;M&&b>=m&&b<=c&&(e.push([h,b]),l[y]=1)}}return{points:e,mask:l}}const d=t.coef,p=[];for(let x=0;x<a;x++){const m=r-o*x,g=[],c=[];for(let y=0;y<d.length;y++){const[h,M,w,b,k]=d[y];if(m===w&&w===b)g.push(h),g.push(M),c.push(2),c.push(2);else if(m>=w&&m<=b){const W=h*m+M;g.push(W),c.push(k)}}let R=g;if(g.length>2){let y=c[0]===2?0:c[0],h=g[0];R=[];for(let M=1;M<c.length;M++)c[M]===2&&M!==c.length-1||(c[M]!==y&&(R.push(y===0?Math.min(h,g[M-1]):Math.max(h,g[M-1])),y=c[M],h=g[M]),M===c.length-1&&R.push(c[M]===0?Math.min(h,g[M]):Math.max(h,g[M])));R.sort((M,w)=>M-w)}else g[0]>g[1]&&(R=[g[1],g[0]]);p.push(R)}for(let x=0,m=0;x<s;x++){const g=u+i*x;for(let c=0;c<a;c++,m++){const R=r-o*c,y=p[c];if(y.length===2)g>=y[0]&&g<=y[1]&&(e.push([g,R]),l[m]=1);else if(y.length>2){let h=!1;for(let M=0;M<y.length;M+=2)if(g>=y[M]&&g<=y[M+1]){h=!0;break}h&&(e.push([g,R]),l[m]=1)}}}return{points:e,mask:l}}function $n(n,t){const[e,s]=t;for(let a=0;a<n.length;a++){const i=n[a][1];(i<e||i>s)&&(n[a]=[NaN,NaN])}}function yn(n,t){const e=C(n[0].spatialReference);if(n.length<2||e==null||(t=t??N(n[0].spatialReference),(n=n.filter(f=>f.width>t)).length===1))return n[0];let{xmin:s,xmax:a,ymin:i,ymax:o}=n[0];for(let f=1;f<n.length;f++){const u=n[f];a=u.xmax+e*f,i=Math.min(i,u.ymin),o=Math.max(o,u.ymax)}return new A({xmin:s,xmax:a,ymin:i,ymax:o,spatialReference:n[0].spatialReference})}function dn(n,t,e=null,s=!0){const a=n.spatialReference;if(a.equals(t))return n;const i=Mn(n),o=C(a,!0),f=C(t);if(i===0||o==null||f==null){const r=un(n,t,e,s);if(o==null&&f!=null&&Math.abs(r.width-f)<N(t)&&Z()){const l=O(a);if(l!=null&&l.poleLocation===V.None&&n.width<(l.bbox[2]-l.bbox[0])/2)return Ln(n,t)||r}return r}const u=n.clone().normalize();if(u.length===1&&n.xmax<o&&n.xmax-o/2>N(a)){const{xmin:r,xmax:l}=n;for(let d=0;d<=i;d++){const p=d===0?r:-o/2,x=d===i?l-o*d:o/2;u[d]=new A({xmin:p,xmax:x,ymin:n.ymin,ymax:n.ymax,spatialReference:a})}}return yn(u.map(r=>un(r,t,e,s)).filter(Pn))}function Yn(n,t,e){if(n.type==="extent"){const{xmin:s,ymin:a,xmax:i,ymax:o,spatialReference:f}=n;n=new hn({rings:[[[s,o],[i,o],[i,a],[s,a],[s,o]]],spatialReference:f})}return n.spatialReference.equals(t)?n:(L(n.spatialReference,t,e),$(n,t,e))}function Ln(n,t){const e=C(t);if(e==null)return null;let{xmin:s,ymin:a,xmax:i,ymax:o}=n;const f=n.spatialReference,u=new hn({spatialReference:f,rings:[[[s,a],[i,a],[i,o],[s,o],[s,a]]]}),r=$(u,t);if(r.rings.length!==2||!r.rings[0].length||!r.rings[1].length)return null;const{rings:l}=r,d=N(f),p=new A({spatialReference:t});for(let x=0;x<2;x++){s=i=l[x][0][0],a=o=l[x][0][1];for(let m=0;m<l[x].length;m++)s=s>l[x][m][0]?l[x][m][0]:s,i=i<l[x][m][0]?l[x][m][0]:i,a=a>l[x][m][1]?l[x][m][1]:a,o=o<l[x][m][1]?l[x][m][1]:o;if(x===0)p.ymin=a,p.ymax=o,p.xmin=s,p.xmax=i;else if(p.ymin=Math.min(p.ymin,a),p.ymax=Math.max(p.ymax,o),Math.abs(i-e/2)<d)p.xmin=s,p.xmax=p.xmax+e;else{if(!(Math.abs(s+e/2)<d))return null;p.xmax=i+e}}return p}function un(n,t,e=null,s=!0,a=!0){const i=n.spatialReference;if(i.equals(t)||!t)return n;L(i,t,e);const o=$(n,t,e);if(a&&t.isWebMercator&&o&&(o.ymax=Math.min(20037508342787e-6,o.ymax),o.ymin=Math.max(-20037508342787e-6,o.ymin),o.ymin>=o.ymax))return null;if(!s||!o)return o;const f=q(i,!0),u=q(t,!0);if(f==null||u==null)return o;const r=N(i,.001),l=N(i,Y),d=N(t,.001);if(Math.abs(o.xmin-u[0])<d&&Math.abs(o.xmax-u[1])<d){const p=Math.abs(n.xmin-f[0]),x=Math.abs(f[1]-n.xmax);if(p<r&&x>l){o.xmin=u[0];const m=[];m.push(new G(n.xmax,n.ymin,i)),m.push(new G(n.xmax,(n.ymin+n.ymax)/2,i)),m.push(new G(n.xmax,n.ymax,i));const g=m.map(c=>ln(c,t,e)).filter(c=>!isNaN(c==null?void 0:c.x)).map(c=>c.x);o.xmax=Math.max.apply(null,g)}if(x<r&&p>l){o.xmax=u[1];const m=[];m.push(new G(n.xmin,n.ymin,i)),m.push(new G(n.xmin,(n.ymin+n.ymax)/2,i)),m.push(new G(n.xmin,n.ymax,i));const g=m.map(c=>ln(c,t,e)).filter(c=>!isNaN(c==null?void 0:c.x)).map(c=>c.x);o.xmin=Math.min.apply(null,g)}}else{const p=N(t,.001);Math.abs(o.xmin-u[0])<p&&(o.xmin=u[0]),Math.abs(o.xmax-u[1])<p&&(o.xmax=u[1])}return o}function C(n,t=!1){if(!n)return null;const e=t?20037508342787e-6:20037508342788905e-9;return n.isWebMercator?2*e:n.wkid&&n.isGeographic?360:2*Cn[n.wkid]||null}function q(n,t=!1){if(n.isGeographic)return[-180,180];const e=C(n,t);return e!=null?[-e/2,e/2]:null}function xn(n,t,e,s){let a=(n-t)/e;return a-Math.floor(a)!=0?a=Math.floor(a):s&&(a-=1),a}function Mn(n,t=!1){const e=C(n.spatialReference);if(e==null)return 0;const s=t?0:-(e/2),a=N(n.spatialReference),i=!t&&Math.abs(n.xmax-e/2)<a?e/2:n.xmax,o=!t&&Math.abs(n.xmin+e/2)<a?-e/2:n.xmin;return xn(i,s,e,!0)-xn(o,s,e,!1)}function qn(n){const t=n.storageInfo.origin.x,e=C(n.spatialReference,!0);if(e==null)return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const s=e/2,{nativePixelSize:a,storageInfo:i,extent:o}=n,{maximumPyramidLevel:f,blockWidth:u,pyramidScalingFactor:r}=i;let l=a.x;const d=[],p=n.transform!=null&&n.transform.type==="gcs-shift",x=t+(p?0:s),m=p?e-t:s-t;for(let g=0;g<=f;g++){const c=(o.xmax-t)/l/u,R=c-Math.floor(c)==0?c:Math.ceil(c),y=m/l/u,h=y-Math.floor(y)==0?y:Math.ceil(y),M=Math.floor(x/l/u),w=Math.round(x/l)%u,b=(u-Math.round(m/l)%u)%u;d.push({resolutionX:l,blockWidth:u,datasetColumnCount:R,worldColumnCountFromOrigin:h,leftMargin:w,rightPadding:b,originColumnOffset:M}),l*=r}return{originX:t,halfWorldWidth:s,pyramidsInfo:d,hasGCSSShiftTransform:p}}function In(n){if(!n||n.isGeographic)return n;const t=String(n.wkid||n.wkt2||n.wkt);let e;return H.has(t)?e=H.get(t):(e=(n.wkid?v.coordsys(n.wkid):v.fromString(T.PE_TYPE_PROJCS,n.wkt2||n.wkt)).getGeogcs().getCode(),H.set(t,e)),new vn({wkid:e})}function Jn(n){const t=n.isAdaptive&&n.spacing==null;let e=n.spacing||[B,B],s=Q(n),a={cols:s.size[0]+1,rows:s.size[1]+1};const i=s.outofBoundPointCount>0&&s.outofBoundPointCount<s.offsets.length/2;let o=s.outofBoundPointCount===s.offsets.length/2||t&&i?[0,0]:an(s.offsets,a,e,D);const f=(o[0]+o[1])/2,u=n.projectedExtent.spatialReference,r=n.srcBufferExtent.spatialReference;if(t&&(i||f>D)&&(pn(u,r,n.datumTransformation)&&(u.isGeographic||O(u)),e=[F,F],s=Q({...n,spacing:e}),a={cols:s.size[0]+1,rows:s.size[1]+1},o=an(s.offsets,a,e,D)),s.error=o,e[0]>1&&(s.coefficients=mn(s.offsets,a,i)),n.includeGCSGrid&&!u.isGeographic&&!u.isWebMercator)if(r.isGeographic)s.gcsGrid={offsets:s.offsets,coefficients:s.coefficients,spacing:e};else{const l=O(u);if(l!=null&&!l.isEnvelope){const d=In(u),p=dn(n.projectedExtent,d),{offsets:x}=Q({...n,srcBufferExtent:p,spacing:e}),m=mn(x,a,i);s.gcsGrid={offsets:x,coefficients:m,spacing:e}}}return s}function Q(n){const{projectedExtent:t,srcBufferExtent:e,pixelSize:s,datumTransformation:a,rasterTransform:i}=n,o=t.spatialReference,f=e.spatialReference,u=L(o,f),{xmin:r,ymin:l,xmax:d,ymax:p}=t,x=C(f),m=x!=null&&(n.hasWrapAround||(i==null?void 0:i.type)==="gcs-shift"),g=n.spacing||[B,B],c=g[0]*s.x,R=g[1]*s.y,y=g[0]===1,h=Math.ceil((d-r)/c-.1/g[0])+(y?0:1),M=Math.ceil((p-l)/R-.1/g[1])+(y?0:1),w=zn({cols:h,rows:M,xmin:r,ymax:p,xres:c,yres:R,inSR:o,outSR:f,datumTransformation:a,preferPE:g[0]<=F,usePixelCenter:y}),b=[];let k,W=0;const P=y?-1:NaN,{xmin:E,xmax:_,ymax:J,width:K,height:wn}=e,Rn=N(f,Y),bn=x!=null&&E>0&&_>x/2;let tn=!1;if(u){const z=O(o);tn=z!=null&&z.poleLocation>0}for(let z=0;z<h;z++){const X=[];for(let j=0;j<M;j++){let S=w[z*M+j];if(m&&S[0]>_&&S[0]>x/2-Rn?S[0]-=x:m&&z===0&&S[0]<0&&bn&&!i&&(S[0]+=x),!S||isNaN(S[0])||isNaN(S[1]))b.push(P),b.push(P),X.push(null),W++;else{if(i){const en=i.inverseTransform(new G({x:S[0],y:S[1],spatialReference:f}));S=[en.x,en.y]}X.push(S),z>0&&m&&k[j]&&S[0]<k[j][0]&&(S[0]+=x,tn&&S[0]>_&&S[0]>x&&(S[0]-=x)),b.push((S[0]-E)/K),b.push((J-S[1])/wn)}}k=X}return{offsets:b,error:null,coefficients:null,outofBoundPointCount:W,spacing:g,size:y?[h,M]:[h-1,M-1]}}function mn(n,t,e){const{cols:s,rows:a}=t,i=new Float32Array((s-1)*(a-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),f=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let u=0;u<s-1;u++){for(let r=0;r<a-1;r++){let l=u*a*2+2*r;const d=n[l],p=n[l+1],x=n[l+2],m=n[l+3];l+=2*a;const g=n[l],c=n[l+1],R=n[l+2],y=n[l+3];let h=0,M=12*(r*(s-1)+u);for(let w=0;w<3;w++)i[M++]=o[h++]*d+o[h++]*x+o[h++]*R;h=0;for(let w=0;w<3;w++)i[M++]=o[h++]*p+o[h++]*m+o[h++]*y;h=0;for(let w=0;w<3;w++)i[M++]=f[h++]*d+f[h++]*g+f[h++]*R;h=0;for(let w=0;w<3;w++)i[M++]=f[h++]*p+f[h++]*c+f[h++]*y}if(e)for(let r=0;r<i.length;r++)isNaN(i[r])&&(i[r]=-1)}return i}function jn(n,t){const e=n.clone().normalize();return e.length===1?e[0]:yn(e,t)}function Kn(n){const{spatialReference:t}=n,e=Gn(t);if(!e)return n;const[s,a]=e.valid,i=a-s;let o=0;if(n.xmin<s){const f=s-n.xmin;o=Math.ceil(f/i)}else if(n.xmin>a){const f=n.xmin-a;o=-Math.ceil(f/i)}return new A({spatialReference:n.spatialReference,xmin:n.xmin+o*i,ymin:n.ymin,xmax:n.xmax+o*i,ymax:n.ymax})}function Xn(n,t,e){var m;const{storageInfo:s,pixelSize:a}=t;let i=0,o=!1;const{pyramidResolutions:f}=s,u=((m=s.tileInfo.format)==null?void 0:m.toLowerCase())==="mixed"?Math.max(1,Math.min(3,s.tileInfo.dpi/96)):1,r=(n.x+n.y)/2/u;if(f!=null&&f.length){const g=f[f.length-1],c=(g.x+g.y)/2,R=(a.x+a.y)/2;if(r<=R)i=0;else if(r>=c)i=f.length,o=r/c>8;else{let h,M=R;for(let w=1;w<=f.length;w++){if(h=(f[w-1].x+f[w-1].y)/2,r<=h){r===h?i=w:e==="down"?(i=w-1,o=r/M>8):i=e==="up"||r-M>h-r||r/M>2?w:w-1;break}M=h}}const y=i===0?a:f[i-1];return o&&Math.min(y.x,y.y)*I(t.spatialReference)>19567&&(o=!1),{pyramidLevel:i,pyramidResolution:new G({x:y.x,y:y.y,spatialReference:t.spatialReference}),excessiveReading:o}}const l=Math.log(n.x/a.x)/Math.LN2,d=Math.log(n.y/a.y)/Math.LN2,p=t.storageInfo.maximumPyramidLevel||0;i=e==="down"?Math.floor(Math.min(l,d)):e==="up"?Math.ceil(Math.max(l,d)):Math.round((l+d)/2),i<0?i=0:i>p&&(o=i>p+3,i=p);const x=2**i;return{pyramidLevel:i,pyramidResolution:new G({x:x*t.nativePixelSize.x,y:x*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:o}}function An(n,t){const{pixelSize:e,extent:s}=n,a=_n(s,t,!1);return dn(jn(s,(e.x+e.y)/16),t,a)}function Dn(n,t,e){var W;const s=(e==null?void 0:e.tileSize)??512,a=(e==null?void 0:e.alignGlobalDatasetWithAGOL)??!0,{extent:i,spatialReference:o,pixelSize:f}=n,u=rn(new G({x:f.x,y:f.y,spatialReference:o}),t,i);if(u==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const r=(u.x+u.y)/2,l=I(t),d=r*l*96*39.37,p=t.isGeographic?256/s*2958287637958547e-7:256/s*591657527591555e-6;let x=n.dataType==="vector-magdir"||n.dataType==="vector-uv";const m=An(n,t),g=Math.min(Math.ceil(Math.log(Math.min(n.width,n.height)/32)/Math.LN2),Math.ceil(Math.log(p/2/d)/Math.LN2));if(!x&&a&&(t.isGeographic||t.isWebMercator)){const P=C(t);if(x=Mn(m)>0||P!=null&&m.width>P/4,!x&&P!=null){let E=-1;if(g<3)E=2**g*r*s;else if(n.storageInfo){const{maximumPyramidLevel:J=0,pyramidScalingFactor:K=2}=n.storageInfo;E=K**J*r*s}const _=Math.ceil(P/E);x=_===1||_===2&&P/2-m.xmax<E}}let c,R=d;const y=1.001,h=Math.min(2,Math.max(1.414,((W=n.storageInfo)==null?void 0:W.pyramidScalingFactor)||2));if(x){R=p;const P=t.isGeographic?1341104507446289e-21:.29858214164761665,E=P*(96*l*39.37),_=t.isGeographic?4326:3857;c=rn(new G({x:P,y:P,spatialReference:{wkid:_}}),o,m),c.x*=R/E,c.y*=R/E}else{c={x:f.x,y:f.y};let P=0;for(;R<p*(y/2)&&P<g;)P++,R*=h,c.x*=h,c.y*=h;Math.max(R,p)/Math.min(R,p)<=y&&(R=p)}const M=[R],w=[{x:c.x,y:c.y}],b=70.5310735,k=Math.min(b,d)/y;for(;R>=k;)R/=h,c.x/=h,c.y/=h,M.push(R),w.push({x:c.x,y:c.y});return{projectedPixelSize:u,scales:M,srcResolutions:w,isCustomTilingScheme:!x}}export{rn as C,C as D,dn as J,pn as M,Fn as T,Yn as U,Mn as V,qn as Z,Dn as a,Jn as e,ln as j,Kn as o,Xn as r,An as s,_n as v};

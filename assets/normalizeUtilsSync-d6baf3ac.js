import{bv as X,eO as j,g0 as J,dU as K,g1 as T,ee as N,eh as R,eK as U,ef as $,eg as b,eP as q,g2 as z,g3 as B,g4 as p}from"./vendor-97e3022f.js";function Q(i){return k(i,!0)}function V(i){return k(i,!1)}function k(i,s){if(i==null)return null;const e=i.spatialReference,n=j(e),t=J(i)?i.toJSON():i;if(!n)return t;const h=K(e)?102100:4326,u=T[h].maxX,_=T[h].minX;if(N(t))return S(t,u,_);if(R(t))return t.points=t.points.map(o=>S(o,u,_)),t;if(U(t))return D(t,n);if($(t)||b(t)){const o=q(F,t),r={xmin:o[0],ymin:o[1],xmax:o[2],ymax:o[3]},x=p(r.xmin,_)*(2*u),m=x===0?t:z(t,x);return r.xmin+=x,r.xmax+=x,r.xmax>u?L(m,u,s):r.xmin<_?L(m,_,s):m}return t}function D(i,s){if(!s)return i;const e=E(i,s).map(n=>n.extent);return e.length<2?e[0]||i:e.length>2?(i.xmin=s.valid[0],i.xmax=s.valid[1],i):{rings:e.map(n=>[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]])}}function S(i,s,e){if(Array.isArray(i)){const n=i[0];if(n>s){const t=p(n,s);i[0]=n+t*(-2*s)}else if(n<e){const t=p(n,e);i[0]=n+t*(-2*e)}}else{const n=i.x;if(n>s){const t=p(n,s);i.x+=t*(-2*s)}else if(n<e){const t=p(n,e);i.x+=t*(-2*e)}}return i}function E(i,s){const e=[],{ymin:n,ymax:t,xmin:h,xmax:u}=i,_=i.xmax-i.xmin,[o,r]=s.valid,{x,frameId:m}=w(i.xmin,s),{x:a,frameId:c}=w(i.xmax,s),A=x===a&&_>0;if(_>2*r){const I={xmin:h<u?x:a,ymin:n,xmax:r,ymax:t},O={xmin:o,ymin:n,xmax:h<u?a:x,ymax:t},P={xmin:0,ymin:n,xmax:r,ymax:t},C={xmin:o,ymin:n,xmax:0,ymax:t},f=[],y=[];d(I,P)&&f.push(m),d(I,C)&&y.push(m),d(O,P)&&f.push(c),d(O,C)&&y.push(c);for(let g=m+1;g<c;g++)f.push(g),y.push(g);e.push(new l(I,[m]),new l(O,[c]),new l(P,f),new l(C,y))}else x>a||A?e.push(new l({xmin:x,ymin:n,xmax:r,ymax:t},[m]),new l({xmin:o,ymin:n,xmax:a,ymax:t},[c])):e.push(new l({xmin:x,ymin:n,xmax:a,ymax:t},[m]));return e}function w(i,s){const[e,n]=s.valid,t=2*n;let h,u=0;return i>n?(h=Math.ceil(Math.abs(i-n)/t),i-=h*t,u=h):i<e&&(h=Math.ceil(Math.abs(i-e)/t),i+=h*t,u=-h),{x:i,frameId:u}}function d(i,s){const{xmin:e,ymin:n,xmax:t,ymax:h}=s;return v(i,e,n)&&v(i,e,h)&&v(i,t,h)&&v(i,t,n)}function v(i,s,e){return s>=i.xmin&&s<=i.xmax&&e>=i.ymin&&e<=i.ymax}function L(i,s,e=!0){const n=!b(i);if(n&&B(i),e)return new G().cut(i,s);const t=n?i.rings:i.paths,h=n?4:2,u=t.length,_=-2*s;for(let o=0;o<u;o++){const r=t[o];if(r&&r.length>=h){const x=[];for(const m of r)x.push([m[0]+_,m[1]]);t.push(x)}}return n?i.rings=t:i.paths=t,i}class l{constructor(s,e){this.extent=s,this.frameIds=e}}const F=X();class G{constructor(){this._linesIn=[],this._linesOut=[]}cut(s,e){let n;if(this._xCut=e,s.rings)this._closed=!0,n=s.rings,this._minPts=4;else{if(!s.paths)return null;this._closed=!1,n=s.paths,this._minPts=2}for(const h of n){if(!h||h.length<this._minPts)continue;let u=!0;for(const _ of h)u?(this.moveTo(_),u=!1):this.lineTo(_);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),n=[];for(const h of this._linesIn)h&&h.length>=this._minPts&&n.push(h);const t=-2*this._xCut;for(const h of this._linesOut)if(h&&h.length>=this._minPts){for(const u of h)u[0]+=t;n.push(h)}return this._closed?s.rings=n:s.paths=n,s}moveTo(s){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(s[0]),this._moveTo(s[0],s[1],this._prevSide),this._prevPt=s,this._firstPt=s}lineTo(s){const e=this._side(s[0]);if(e*this._prevSide==-1){const n=this._intersect(this._prevPt,s);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(s[0],s[1],e)}else this._lineTo(s[0],s[1],e);this._prevSide=e,this._prevPt=s}close(){const s=this._firstPt,e=this._prevPt;s[0]===e[0]&&s[1]===e[1]||this.lineTo(s),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(s,e,n){this._closed?(this._lineIn.push([n<=0?s:this._xCut,e]),this._lineOut.push([n>=0?s:this._xCut,e])):(n<=0&&this._lineIn.push([s,e]),n>=0&&this._lineOut.push([s,e]))}_lineTo(s,e,n){this._closed?(M(this._lineIn,n<=0?s:this._xCut,e),M(this._lineOut,n>=0?s:this._xCut,e)):n<0?(this._prevSide===0&&this._pushLineOut(),this._lineIn.push([s,e])):n>0?(this._prevSide===0&&this._pushLineIn(),this._lineOut.push([s,e])):this._prevSide<0?(this._lineIn.push([s,e]),this._lineOut.push([s,e])):this._prevSide>0&&(this._lineOut.push([s,e]),this._lineIn.push([s,e]))}_checkClosingPt(s){const e=s.length;e>3&&s[0][0]===this._xCut&&s[e-2][0]===this._xCut&&s[1][0]===this._xCut&&(s[0][1]=s[e-2][1],s.pop())}_side(s){return s<this._xCut?-1:s>this._xCut?1:0}_intersect(s,e){const n=(this._xCut-s[0])/(e[0]-s[0]);return s[1]+n*(e[1]-s[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}function M(i,s,e){const n=i.length;n>1&&i[n-1][0]===s&&i[n-2][0]===s?i[n-1][1]=e:i.push([s,e])}export{V as a,Q as p};

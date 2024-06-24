const __vite__fileDeps=["assets/knowledgeGraphService-NRDmA1aP.js","assets/vendor-CBH3cTFe.js","assets/GraphQueryStreaming-TavltO_3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{C as x,_ as k,N as C,bm as J,bn as K,bo as V,aY as I,S as M,eq as P,es as Q,et as j}from"./vendor-CBH3cTFe.js";import{a as T,b as u,r as c,I as L,m as W,G as y,ab as O,P as U,N as D,U as _,A as H,E as q,X as E,w as X,v as Y,ac as z,ad as A,ae as B}from"./arcadeUtils-DpzjXdty.js";import{l as Z}from"./portalUtils-CX5-VPDu.js";import{p as $,n as tt}from"./project-D4twOnYi.js";import{s as nt,m as et,t as rt,p as at,c as it}from"./GraphQueryStreaming-TavltO_3.js";import"./TimeOnly-C5VKQw-w.js";import"./ImmutableArray-BPVd6ESQ.js";import"./number-B5Cm0mPf.js";import"./featureConversionUtils-B23WLr_p.js";import"./OptimizedFeature-DUj7o6ET.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";let f=null;async function ot(t){const n=C.geometryServiceUrl??"";if(!n){J()||await K();for(const e of t)e.container[e.indexer]=V(e.container[e.indexer],I.WGS84);return}const r=t.map(e=>e.container[e.indexer]),i=new $({geometries:r,outSpatialReference:I.WGS84}),s=await tt(n,i);for(let e=0;e<s.length;e++){const a=t[e];a.container[a.indexer]=s[e]}}async function G(t,n){const r=new M({portal:t,id:n});return await r.load(),f===null&&(f=await k(()=>import("./knowledgeGraphService-NRDmA1aP.js").then(i=>i.k),__vite__mapDeps([0,1,2]))),await f.fetchKnowledgeGraph(r.url)}function R(t,n,r,i,s){if(t===null)return null;if(y(t)||q(t))return t;if(E(t)||E(t))return t.toJSDate();if(X(t))return t.toStorageFormat();if(Y(t))return t.toStorageString();if(z(t)){const e={};for(const a of t.keys())e[a]=R(t.field(a),n,r,i,s),e[a]instanceof P&&s.push({container:e,indexer:a});return e}if(_(t)){const e=t.map(a=>R(a,n,r,i,s));for(let a=0;a<e.length;a++)e[a]instanceof P&&s.push({container:e,indexer:a});return e}return A(t)?t.spatialReference.isWGS84?t:t.spatialReference.isWebMercator&&n?Q(t):t:void 0}function st(t,n){if(!t)return t;if(t.spatialReference.isWGS84&&n.spatialReference.isWebMercator)return j(t);if(t.spatialReference.equals(n.spatialReference))return t;throw new u(n,c.WrongSpatialReference,null)}function v(t,n){if(!t)return null;const r={};for(const i in t)r[i]=g(t[i],n);return r}function g(t,n){return t===null?null:_(t)?t.map(r=>g(r,n)):t instanceof et?{graphTypeName:t.typeName,id:t.id,graphType:"entity",properties:v(t.properties,n)}:t instanceof rt?{graphType:"object",properties:v(t.properties,n)}:t instanceof at?{graphTypeName:t.typeName,id:t.id,graphType:"relationship",originId:t.originId??null,destinationId:t.destinationId??null,properties:v(t.properties,n)}:t instanceof it?{graphType:"path",path:t.path?t.path.map(r=>g(r,n)):null}:A(t)?st(t,n):y(t)||q(t)||B(t)?t:null}function St(t){t.mode==="async"&&(t.functions.knowledgegraphbyportalitem=function(n,r){return t.standardFunctionAsync(n,r,(i,s,e)=>{var m,d;if(T(e,2,2,n,r),e[0]===null)throw new u(n,c.PortalRequired,r);if(e[0]instanceof L){const p=W(e[1]);let h;return h=(m=n.services)!=null&&m.portal?n.services.portal:x.getDefault(),G(Z(e[0],h),p)}if(y(e[0])===!1)throw new u(n,c.InvalidParameter,r);const a=W(e[0]);return G(((d=n.services)==null?void 0:d.portal)??x.getDefault(),a)})},t.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),t.functions.querygraph=function(n,r){return t.standardFunctionAsync(n,r,async(i,s,e)=>{var b;T(e,2,4,n,r);const a=e[0];if(!O(a))throw new u(n,c.InvalidParameter,r);const m=e[1];if(!y(m))throw new u(n,c.InvalidParameter,r);f===null&&(f=await k(()=>import("./knowledgeGraphService-NRDmA1aP.js").then(o=>o.k),__vite__mapDeps([0,1,2])));let d=null;const p=U(e[2],null);if(!(p instanceof D||p===null))throw new u(n,c.InvalidParameter,r);if(p){let o=[];d=R(p,!0,!1,n,o),o=o.filter(l=>!l.container[l.indexer].spatialReference.isWGS84),o.length>0&&await ot(o)}const h=new nt({openCypherQuery:m,bindParameters:d});(((b=a==null?void 0:a.serviceDefinition)==null?void 0:b.currentVersion)??11.3)>11.2&&(h.outputSpatialReference=n.spatialReference);const N=(await f.executeQueryStreaming(a,h)).resultRowsStream.getReader(),S=[];try{for(;;){const{done:o,value:l}=await N.read();if(o)break;if(_(l))for(const w of l)S.push(g(w,n));else{const w=[];for(const F of l)w.push(g(l[F],n));S.push(w)}}}catch(o){throw o}return D.convertJsonToArcade(S,H(n),!1,!0)})},t.signatures.push({name:"querygraph",min:2,max:4}))}export{St as registerFunctions};

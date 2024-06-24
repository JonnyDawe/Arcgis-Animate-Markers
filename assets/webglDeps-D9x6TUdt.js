import{r as c}from"./Program-COT786Iy.js";import{c as _,E as g,s as y}from"./Program-COT786Iy.js";import{ez as F}from"./vendor-CBH3cTFe.js";import{t as p}from"./NestedMap-DgiGbX8E.js";import{a as C,o as E,e as O}from"./ProgramTemplate-CrqJOsZn.js";import{c as w}from"./Texture-Bbr5YH18.js";import"./enums-BlUEVwJR.js";class d{constructor(e){this._rctx=e,this._store=new p}dispose(){this._store.forEach(e=>e.forEach(t=>t.dispose())),this._store.clear()}acquire(e,t,o,n){const r=this._store.get(e,t);if(r!=null)return r.ref(),r;const s=new c(this._rctx,e,t,o,n);return s.ref(),this._store.set(e,t,s),s}get test(){}}function u(i){const{options:e,value:t}=i;return typeof e[t]=="number"}function x(i){let e="";for(const t in i){const o=i[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(u(o)){const{value:n,options:r,namespace:s}=o,f=s?`${s}_`:"";for(const a in r)e+=`#define ${f}${a} ${r[a].toFixed()}
`;e+=`#define ${t} ${f}${n}
`}else{const n=o.options;let r=0;for(const s in n)e+=`#define ${n[s]} ${(r++).toFixed()}
`;e+=`#define ${t} ${n[o.value]}
`}}return e}export{_ as BufferObject,g as FramebufferObject,c as Program,d as ProgramCache,y as Renderbuffer,C as ShaderCompiler,w as Texture,E as VertexArrayObject,F as createContext,O as createProgram,x as glslifyDefineMap};

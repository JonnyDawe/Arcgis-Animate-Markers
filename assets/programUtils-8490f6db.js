import"./vendor-97e3022f.js";import{t as p}from"./NestedMap-1b5db22e.js";import{r as u}from"./Program-cd0404af.js";class h{constructor(e){this._rctx=e,this._store=new p}dispose(){this._store.forEach(e=>e.forEach(t=>t.dispose())),this._store.clear()}acquire(e,t,o,s){const n=this._store.get(e,t);if(n!=null)return n.ref(),n;const i=new u(this._rctx,e,t,o,s);return i.ref(),this._store.set(e,t,i),i}get test(){}}function $(r){const{options:e,value:t}=r;return typeof e[t]=="number"}function m(r){let e="";for(const t in r){const o=r[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if($(o)){const{value:s,options:n,namespace:i}=o,f=i?`${i}_`:"";for(const c in n)e+=`#define ${f}${c} ${n[c].toFixed()}
`;e+=`#define ${t} ${f}${s}
`}else{const s=o.options;let n=0;for(const i in s)e+=`#define ${s[i]} ${(n++).toFixed()}
`;e+=`#define ${t} ${s[o.value]}
`}}return e}export{m as n,h as s};

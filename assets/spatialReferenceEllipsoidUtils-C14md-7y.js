import{aY as a,cn as k,co as u,cp as m,cq as C,cr as f,cs as i}from"./vendor-CBH3cTFe.js";const U=new a(k),n=new a(u),e=new a(m),q=new a(C);function x(t){const p=l.get(t);if(p)return p;let s=U;if(t)if(t===n)s=n;else if(t===e)s=e;else{const c=t.wkid,o=t.latestWkid;if(c!=null||o!=null)f(c)||f(o)?s=n:(i(c)||i(o))&&(s=e);else{const r=t.wkt2??t.wkt;if(r){const w=r.toUpperCase();w===d?s=n:w===$&&(s=e)}}}return l.set(t,s),s}const l=new Map,d=n.wkt.toUpperCase(),$=e.wkt.toUpperCase();export{x as a,q as w};

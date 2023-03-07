import{ls as p,lD as d,lE as f,lB as i,U as h}from"./vendor-1f6204b4.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function j(n,t){const e={};for(const s of t){const{parentObjectId:a,parentGlobalId:o,attachmentInfos:r}=s;for(const c of r){const{id:m}=c,l=p(d(`${n.path}/${a}/attachments/${m}`)),u=f.fromJSON(c);u.set({url:l,parentObjectId:a,parentGlobalId:o}),e[a]?e[a].push(u):e[a]=[u]}}return e}function b(n,t,e){let s={query:i({...n.query,f:"json",...y(t)})};return e&&(s={...e,...s,query:{...e.query,...s.query}}),h(n.path+"/queryAttachments",s).then(a=>a.data.attachmentGroups)}async function q(n,t,e){const{objectIds:s}=t,a=[];for(const o of s)a.push(h(n.path+"/"+o+"/attachments",e));return Promise.all(a).then(o=>s.map((r,c)=>({parentObjectId:r,attachmentInfos:o[c].data.attachmentInfos})))}export{b as executeAttachmentQuery,q as fetchAttachments,j as processAttachmentQueryResult};

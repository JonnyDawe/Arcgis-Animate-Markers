/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.9.0
 */const l="calcite-list",a="calcite-list-item-group",n="calcite-list-item";function u(s){return Array.from(s.assignedElements({flatten:!0}).filter(e=>e.matches(l)))}function m(s){const e=s.assignedElements({flatten:!0}),i=e.filter(t=>t==null?void 0:t.matches(a)).map(t=>Array.from(t.querySelectorAll(n))).reduce((t,r)=>[...t,...r],[]),c=e.filter(t=>t==null?void 0:t.matches(n));return[...e.filter(t=>t==null?void 0:t.matches(l)).map(t=>Array.from(t.querySelectorAll(n))).reduce((t,r)=>[...t,...r],[]),...i,...c]}function f(s){s.forEach(e=>{e.setPosition=s.indexOf(e)+1,e.setSize=s.length})}function h(s,e=!1){const i=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(i,s,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{h as a,u as b,m as g,f as u};

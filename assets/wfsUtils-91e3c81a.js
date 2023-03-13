import{U as T,il as U,z as l,im as I,aW as E,io as N,ip as x,B as k,l as C,q as M,bB as O,g9 as w,bn as L,bo as j,E as V,f_ as y,iq as W,r as $}from"./vendor-8b656dfb.js";import{s as X}from"./geojson-3bf350b0.js";import{o as h,n as b}from"./xmlUtils-444cb4c0.js";function q(n){return _(n)??z(n)}function z(n){const t=new Date(n).getTime();return Number.isNaN(t)?null:t}function _(n){const t=Y.exec(n);if(!(t!=null&&t.groups))return null;const e=t.groups,a=+e.year,s=+e.month-1,r=+e.day,o=+(e.hours??"0"),i=+(e.minutes??"0"),p=+(e.seconds??"0");if(o>23||i>59||p>59)return null;const u=e.ms??"0",c=u?+u.padEnd(3,"0").substring(0,3):0;let m;if(e.isUTC)m=Date.UTC(a,s,r,o,i,p,c);else if(e.offsetSign){const f=+e.offsetHours,F=+e.offsetMinutes;m=6e4*(e.offsetSign==="+"?-1:1)*(60*f+F)+Date.UTC(a,s,r,o,i,p,c)}else m=new Date(a,s,r,o,i,p,c).getTime();return Number.isNaN(m)?null:m}const Y=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,S="xlink:href",d="2.0.0",P="__esri_wfs_id__",H="wfs-layer:getWFSLayerTypeInfo-error",B="wfs-layer:empty-service",A="wfs-layer:feature-type-not-found",J="wfs-layer:geojson-not-supported",Q="wfs-layer:kvp-encoding-not-supported",K="wfs-layer:malformed-json",G="wfs-layer:unknown-geometry-type",Z="wfs-layer:unknown-field-type",ee="wfs-layer:unsupported-spatial-reference",te="wfs-layer:unsupported-wfs-version";async function Se(n,t){const e=ne((await T(n,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:d,...t==null?void 0:t.customParameters},signal:t==null?void 0:t.signal})).data);return se(n,e),e}function ne(n){const t=v(n);be(t),D(t);const e=t.firstElementChild,a=U(oe(e));return{operations:re(e),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const ae=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function re(n){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(h(n,{OperationsMetadata:{Operation:a=>{switch(a.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:s=>{e.GetCapabilities.url=s.getAttribute(S)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:s=>{e.DescribeFeatureType.url=s.getAttribute(S)}}}};case"GetFeature":return{DCP:{HTTP:{Get:s=>{e.GetFeature.url=s.getAttribute(S)}}},Parameter:s=>{if(s.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:r=>{const o=r.textContent;o&&ae.has(o.toLowerCase())&&(e.GetFeature.outputFormat=o)}}}}}}},Constraint:a=>{switch(a.getAttribute("name")){case"KVPEncoding":return{DefaultValue:s=>{t=s.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:s=>{e.GetFeature.supportsPagination=s.textContent.toLowerCase()==="true"}}}}}}),!t)throw new l(Q,"WFS service doesn't support key/value pair (KVP) encoding");if(C(e.GetFeature.outputFormat))throw new l(J,"WFS service doesn't support GeoJSON output format");return e}function se(n,t){I(n)&&(E(n,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=N(t.operations.DescribeFeatureType.url)),E(n,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=N(t.operations.GetFeature.url)))}function oe(n){return b(n,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},a=new Set([4326]),s=r=>{var i,p,u;const o=parseInt(((u=(p=(i=r.textContent)==null?void 0:i.match(/(?<wkid>\d+$)/i))==null?void 0:p.groups)==null?void 0:u.wkid)??"",10);Number.isNaN(o)||a.add(o)};return h(t,{Name:r=>{const{name:o,prefix:i}=g(r.textContent);e.typeName=`${i}:${o}`,e.name=o,e.namespacePrefix=i,e.namespaceUri=r.lookupNamespaceURI(i)},Abstract:r=>{e.description=r.textContent},Title:r=>{e.title=r.textContent},WGS84BoundingBox:r=>{e.extent=ie(r)},DefaultSRS:s,DefaultCRS:s,OtherSRS:s,OtherCRS:s}),e.title||(e.title=e.name),e.supportedSpatialReferences.push(...a),e}}})}function ie(n){let t,e,a,s;for(const r of n.children)switch(r.localName){case"LowerCorner":[t,e]=r.textContent.split(" ").map(o=>Number.parseFloat(o));break;case"UpperCorner":[a,s]=r.textContent.split(" ").map(o=>Number.parseFloat(o))}return{xmin:t,ymin:e,xmax:a,ymax:s,spatialReference:w}}function ue(n,t,e){return x(n,a=>e?a.name===t&&a.namespaceUri===e:a.typeName===t||a.name===t)}async function xe(n,t,e,a={}){const{featureType:s,extent:r}=await pe(n,t,e,a),{fields:o,geometryType:i,swapXY:p,objectIdField:u,geometryField:c}=await ce(n,s.typeName,a);return{url:n.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:o,geometryField:c,geometryType:i,objectIdField:u,spatialReference:a.spatialReference??k.WGS84,extent:r,swapXY:p,wfsCapabilities:n,customParameters:a.customParameters}}async function pe(n,t,e,a={}){const{spatialReference:s=k.WGS84}=a,r=n.readFeatureTypes(),o=t?ue(r,t,e):r.next().value;if(C(o))throw t?new l(A,`The type '${t}' could not be found in the service`):new l(B,"The service is empty");let i=new M({...o.extent,spatialReference:s});if(!O(s,w))try{await L(w,s,void 0,a),i=j(i,w)}catch{throw new l(ee,"Projection not supported")}return{extent:i,spatialReference:s,featureType:o}}async function ce(n,t,e={}){var u,c,m;const[a,s]=await V([ye(n.operations.DescribeFeatureType.url,t,e),me(n,t,e)]);if(a.error||s.error)throw new l(H,`An error occurred while getting info about the feature type '${t}'`,{error:a.error||s.error});const{fields:r,errors:o}=a.value??{},i=((u=a.value)==null?void 0:u.geometryType)||((c=s.value)==null?void 0:c.geometryType),p=((m=s.value)==null?void 0:m.swapXY)??!1;if(C(i))throw new l(G,`The geometry type could not be determined for type '${t}`,{typeName:t,geometryType:i,fields:r,errors:o});return{...le(r??[]),geometryType:i,swapXY:p}}function le(n){const t=n.find(a=>a.type==="geometry");let e=n.find(a=>a.type==="oid");return n=n.filter(a=>a.type!=="geometry"),e||(e=new y({name:P,type:"oid",alias:P}),n.unshift(e)),{geometryField:(t==null?void 0:t.name)??null,objectIdField:e.name,fields:n}}async function me(n,t,e={}){var p;let a,s=!1;const[r,o]=await Promise.all([we(n.operations.GetFeature.url,t,n.operations.GetFeature.outputFormat,{...e,count:1}),T(n.operations.GetFeature.url,{responseType:"text",query:R(t,void 0,{...e,count:1}),signal:e==null?void 0:e.signal})]),i=r.type==="FeatureCollection"&&((p=r.features[0])==null?void 0:p.geometry);if(i){let u;switch(a=W.fromJSON(X(i.type)),i.type){case"Point":u=i.coordinates;break;case"LineString":case"MultiPoint":u=i.coordinates[0];break;case"MultiLineString":case"Polygon":u=i.coordinates[0][0];break;case"MultiPolygon":u=i.coordinates[0][0][0]}const c=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(o.data);if(c){const m=u[0].toFixed(3),f=u[1].toFixed(3),F=parseFloat(c[1]).toFixed(3);m===parseFloat(c[2]).toFixed(3)&&f===F&&(s=!0)}}return{geometryType:a,swapXY:s}}async function ye(n,t,e){return fe(t,(await T(n,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:d,TYPENAME:t,...e==null?void 0:e.customParameters},signal:e==null?void 0:e.signal})).data)}function fe(n,t){const{name:e}=g(n),a=v(t);D(a);const s=x(b(a.firstElementChild,{element:r=>({name:r.getAttribute("name"),typeName:g(r.getAttribute("type")).name})}),({name:r})=>r===e);if($(s)){const r=x(b(a.firstElementChild,{complexType:o=>o}),o=>o.getAttribute("name")===s.typeName);if($(r))return ge(r)}throw new l(A,`Type '${n}' not found in document`,{document:new XMLSerializer().serializeToString(a)})}const de=new Set(["objectid","fid"]);function ge(n){const t=[],e=[];let a;const s=b(n,{complexContent:{extension:{sequence:{element:r=>r}}}});for(const r of s){const o=r.getAttribute("name");if(!o)continue;let i,p;if(r.hasAttribute("type")?i=g(r.getAttribute("type")).name:h(r,{simpleType:{restriction:m=>(i=g(m.getAttribute("base")).name,{maxLength:f=>{p=+f.getAttribute("value")}})}}),!i)continue;const u=r.getAttribute("nillable")==="true";let c=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new y({name:o,alias:o,type:"integer",nullable:u}));break;case"float":case"double":case"decimal":e.push(new y({name:o,alias:o,type:"double",nullable:u}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new y({name:o,alias:o,type:"string",nullable:u,length:p??255}));break;case"datetime":case"date":e.push(new y({name:o,alias:o,type:"date",nullable:u,length:p??36}));break;case"pointpropertytype":a="point",c=!0;break;case"multipointpropertytype":a="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,t.push(new l(G,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(n)}));break;default:t.push(new l(Z,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(n)}))}c&&e.push(new y({name:o,alias:o,type:"geometry",nullable:u}))}for(const r of e)if(r.type==="integer"&&!r.nullable&&de.has(r.name.toLowerCase())){r.type="oid";break}return{geometryType:a,fields:e,errors:t}}async function we(n,t,e,a){var r;let{data:s}=await T(n,{responseType:"text",query:R(t,e,a),signal:a==null?void 0:a.signal});s=s.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if((r=a==null?void 0:a.dateFields)!=null&&r.length){const o=new Set(a.dateFields);return JSON.parse(s,(i,p)=>o.has(i)?q(p):p)}return JSON.parse(s)}catch(o){throw new l(K,"Error while parsing the response",{response:s,error:o})}}function R(n,t,e){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:d,TYPENAMES:n,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:e==null?void 0:e.startIndex,COUNT:e==null?void 0:e.count,...e==null?void 0:e.customParameters}}function v(n){return new DOMParser().parseFromString(n.trim(),"text/xml")}function g(n){const[t,e]=n.split(":");return{prefix:e?t:"",name:e??t}}function be(n){var e;const t=(e=n.firstElementChild)==null?void 0:e.getAttribute("version");if(t&&t!==d)throw new l(te,`Unsupported WFS version ${t}. Supported version: ${d}`)}function D(n){let t="",e="";if(h(n.firstElementChild,{Exception:a=>(t=a.getAttribute("exceptionCode"),{ExceptionText:s=>{e=s.textContent}})}),t)throw new l(`wfs-layer:${t}`,e)}export{P as C,Se as D,we as K,ue as W,xe as X,le as z};

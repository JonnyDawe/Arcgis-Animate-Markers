import{a as o,H as m,az as T,m as y,B as c,aA as w,b as d,r as u,aB as b,N as v,W as p,aC as A,aD as g,aE as x,aF as F,P as V,aG as D,aH as I,aI as f}from"./arcadeUtils-e2d55d0a.js";import"./vendor-97e3022f.js";import"./TimeOnly-e23204e1.js";import"./ImmutableArray-d5cad66d.js";import"./number-6381e157.js";import"./featureConversionUtils-eadb343e.js";import"./OptimizedFeature-059c854c.js";import"./OptimizedFeatureSet-1d1ac4b9.js";function l(t,e){return t&&t.domain?t.domain.type==="coded-value"||t.domain.type==="codedValue"?v.convertObjectToArcadeDictionary({type:"codedValue",name:t.domain.name,dataType:f[t.field.type],codedValues:t.domain.codedValues.map(a=>({name:a.name,code:a.code}))},p(e)):v.convertObjectToArcadeDictionary({type:"range",name:t.domain.name,dataType:f[t.field.type],min:t.domain.minValue,max:t.domain.maxValue},p(e)):null}function H(t){t.mode==="async"&&(t.functions.domain=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,2,3,e,a),m(n[0]))return l(T(n[0],y(n[1]),n[2]===void 0?void 0:n[2]),e);if(c(n[0]))return await n[0]._ensureLoaded(),l(w(y(n[1]),n[0],null,n[2]===void 0?void 0:n[2]),e);throw new d(e,u.InvalidParameter,a)})},t.functions.subtypes=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,1,1,e,a),m(n[0])){const r=b(n[0]);return r?v.convertObjectToArcadeDictionary(r,p(e)):null}if(c(n[0])){await n[0]._ensureLoaded();const r=n[0].subtypeMetaData();return r?v.convertObjectToArcadeDictionary(r,p(e)):null}throw new d(e,u.InvalidParameter,a)})},t.functions.domainname=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,2,4,e,a),m(n[0]))return A(n[0],y(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=w(y(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return g(r,n[2])}throw new d(e,u.InvalidParameter,a)})},t.signatures.push({name:"domainname",min:2,max:4}),t.functions.domaincode=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,2,4,e,a),m(n[0]))return x(n[0],y(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=w(y(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return F(r,n[2])}throw new d(e,u.InvalidParameter,a)})},t.signatures.push({name:"domaincode",min:2,max:4}),t.functions.text=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,1,2,e,a),c(n[0])){const r=V(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal);throw new d(e,u.InvalidParameter,a)}return D(n[0],n[1])})},t.functions.gdbversion=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,1,1,e,a),m(n[0]))return n[0].gdbVersion();if(c(n[0]))return(await n[0].load()).gdbVersion;throw new d(e,u.InvalidParameter,a)})},t.functions.schema=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,1,1,e,a),c(n[0]))return await n[0].load(),v.convertObjectToArcadeDictionary(n[0].schema(),p(e));if(m(n[0])){const r=I(n[0]);return r?v.convertObjectToArcadeDictionary(r,p(e)):null}throw new d(e,u.InvalidParameter,a)})})}export{H as registerFunctions};

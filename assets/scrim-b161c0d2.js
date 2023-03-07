import{iq as r,ir as l,is as t}from"./vendor-1f6204b4.js";import{u as m,c as d,a as f,s as u,d as g,b as p}from"./t9n-bc26973c.js";import{d as h}from"./loader-3e5848a5.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const i={scrim:"scrim",content:"content"},y="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:absolute;inset:0px;z-index:700;display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}",v=r(class extends l{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}effectiveLocaleChange(){m(this,this.effectiveLocale)}connectedCallback(){d(this),f(this)}async componentWillLoad(){await u(this)}disconnectedCallback(){g(this),p(this)}render(){const{el:a,loading:e,messages:n}=this,c=a.innerHTML.trim().length>0,s=e?t("calcite-loader",{label:n.loading}):null,o=c?t("div",{class:i.content},t("slot",null)):null;return t("div",{class:i.scrim},s,o)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return y}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],defaultMessages:[32],effectiveLocale:[32]}]);function b(){if(typeof customElements>"u")return;["calcite-scrim","calcite-loader"].forEach(e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,v);break;case"calcite-loader":customElements.get(e)||h();break}})}b();export{b as d};

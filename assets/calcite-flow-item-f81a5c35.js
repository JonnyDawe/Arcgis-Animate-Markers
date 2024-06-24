import{hq as x,hr as w,mG as p,ht as t,hv as E}from"./vendor-97e3022f.js";import{e as h,u as X,f as Y,t as y,g as Z}from"./dom-b6c8c279.js";import{c as A,u as B,d as H,I as F}from"./interactive-b2dc72c4.js";import{s as z,a as L,c as P}from"./loadable-32ceb992.js";import{c as T,a as I,s as M,d as O,b as D,u as $}from"./t9n-6bf6ec37.js";import{c as N}from"./observers-9d0c98ef.js";import{d as R,a as _,S as ee,H as te}from"./action-menu-f2fa8855.js";import{d as W}from"./action-d75015d1.js";import{d as K}from"./icon-c14eb6b9.js";import{d as j}from"./loader-509f3fd2.js";import{d as G}from"./scrim-7c427d89.js";import"./guid-e5087e53.js";import"./component-97bb9417.js";import"./debounce-bc0880f2.js";import"./focusTrapComponent-8c1e3861.js";import"./openCloseComponent-c88b189b.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.9.0
 */const s={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",contentBottom:"content-bottom",contentTop:"content-top",header:"header",headerContainer:"header-container",headerContainerBorderEnd:"header-container--border-end",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",fabContainer:"fab-container",footer:"footer"},v={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right",expand:"chevron-down",collapse:"chevron-up"},a={actionBar:"action-bar",contentBottom:"content-bottom",contentTop:"content-top",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},oe=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}:host([scale=s]) .content-top,.content-bottom{padding:var(--calcite-spacing-sm)}:host([scale=m]) .content-top,.content-bottom{padding:var(--calcite-spacing-md)}:host([scale=l]) .content-top,.content-bottom{padding:var(--calcite-spacing-xl)}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;padding:var(--calcite-spacing-md);border-block-start:1px solid var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-color-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}",ne=oe,ae=x(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=p(this,"calcitePanelClose",6),this.calcitePanelToggle=p(this,"calcitePanelToggle",6),this.calcitePanelScroll=p(this,"calcitePanelScroll",6),this.resizeObserver=N("resize",()=>this.resizeHandler()),this.resizeHandler=()=>{const{panelScrollEl:e}=this;!e||typeof e.scrollHeight!="number"||typeof e.offsetHeight!="number"||(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&e.key==="Escape"&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=h(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=h(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=h(e)},this.handleActionBarSlotChange=e=>{const o=X(e).filter(n=>n==null?void 0:n.matches("calcite-action-bar"));o.forEach(n=>n.layout="horizontal"),this.hasActionBar=!!o.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=h(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=h(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=h(e)},this.handleFabSlotChange=e=>{this.hasFab=h(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=h(e)},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=h(e)},this.setPanelScrollEl=e=>{var o,n;this.panelScrollEl=e,(o=this.resizeObserver)==null||o.disconnect(),e&&((n=this.resizeObserver)==null||n.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasContentBottom=!1,this.hasContentTop=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}onMessagesChange(){}connectedCallback(){A(this),T(this),I(this)}async componentWillLoad(){z(this),await M(this)}componentDidLoad(){L(this)}componentDidRender(){B(this)}disconnectedCallback(){var e;H(this),O(this),D(this),(e=this.resizeObserver)==null||e.disconnect()}effectiveLocaleChange(){$(this,this.effectiveLocale)}async setFocus(){await P(this),Y(this.containerEl)}async scrollContentTo(e){var o;(o=this.panelScrollEl)==null||o.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:o,description:n,hasHeaderContent:c}=this,l=e?t(te,{class:s.heading,level:o},e):null,i=n?t("span",{class:s.description},n):null;return!c&&(l||i)?t("div",{class:s.headerContent,key:"header-content"},l,i):null}renderActionBar(){return t("div",{class:s.actionBarContainer,hidden:!this.hasActionBar},t("slot",{name:a.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return t("div",{class:s.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},t("slot",{name:a.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return t("div",{class:{[s.headerActionsStart]:!0,[s.headerActions]:!0},hidden:!e,key:"header-actions-start"},t("slot",{name:a.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:o,closable:n,collapsed:c,collapseDirection:l,collapsible:i,hasMenuItems:d}=this,{collapse:f,expand:b,close:m}=o,g=[v.expand,v.collapse];l==="up"&&g.reverse();const u=i?t("calcite-action",{"aria-expanded":y(!c),"aria-label":f,"data-test":"collapse",icon:c?g[0]:g[1],onClick:this.collapse,text:f,title:c?b:f}):null,C=n?t("calcite-action",{"aria-label":m,"data-test":"close",icon:v.close,onClick:this.close,text:m,title:m}):null,Q=t("slot",{name:a.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),V=e||u||C||d;return t("div",{class:{[s.headerActionsEnd]:!0,[s.headerActions]:!0},hidden:!V,key:"header-actions-end"},Q,this.renderMenu(),u,C)}renderMenu(){const{hasMenuItems:e,messages:o,menuOpen:n}=this;return t("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:o.options,open:n,overlayPositioning:this.overlayPositioning,placement:"bottom-end"},t("calcite-action",{icon:v.menu,slot:ee.trigger,text:o.options}),t("slot",{name:a.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:o,hasEndActions:n,closable:c,collapsible:l,hasMenuItems:i,hasActionBar:d}=this,f=this.renderHeaderContent(),b=e||!!f||o||n||l||c||i;return this.showHeaderContent=b,t("header",{class:s.header,hidden:!(b||d)},t("div",{class:{[s.headerContainer]:!0,[s.headerContainerBorderEnd]:d},hidden:!b},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),f,this.renderHeaderActionsEnd()),this.renderActionBar(),this.renderContentTop())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:o}=this,n=e||o;return t("footer",{class:s.footer,hidden:!n},t("slot",{key:"footer-slot",name:a.footer,onSlotchange:this.handleFooterSlotChange}),t("slot",{key:"footer-actions-slot",name:a.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){return t("div",{class:s.contentWrapper,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},t("slot",null),this.renderFab())}renderContentBottom(){return t("div",{class:s.contentBottom,hidden:!this.hasContentBottom},t("slot",{name:a.contentBottom,onSlotchange:this.contentBottomSlotChangeHandler}))}renderContentTop(){return t("div",{class:s.contentTop,hidden:!this.hasContentTop},t("slot",{name:a.contentTop,onSlotchange:this.contentTopSlotChangeHandler}))}renderFab(){return t("div",{class:s.fabContainer,hidden:!this.hasFab},t("slot",{name:a.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:o,panelKeyDownHandler:n,closed:c,closable:l}=this,i=t("article",{key:"ef6d443da0ee8f1632ccc2d42212fbcb8aae9c7b","aria-busy":y(o),class:s.container,hidden:c,ref:this.setContainerRef,tabIndex:l?0:-1},this.renderHeaderNode(),this.renderContent(),this.renderContentBottom(),this.renderFooterNode());return t(E,{key:"19de467ff4b2b1a93b66e35f39b8bddea879cfcb",onKeyDown:n},t(F,{key:"b7a1c9cec41545805c36a541d6ae8a0218a66a0a",disabled:e},o?t("calcite-scrim",{loading:o}):null,i))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ne}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasContentBottom:[32],hasContentTop:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function U(){if(typeof customElements>"u")return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,ae);break;case"calcite-action":customElements.get(e)||W();break;case"calcite-action-menu":customElements.get(e)||_();break;case"calcite-icon":customElements.get(e)||K();break;case"calcite-loader":customElements.get(e)||j();break;case"calcite-popover":customElements.get(e)||R();break;case"calcite-scrim":customElements.get(e)||G();break}})}U();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.9.0
 */const se={backButton:"back-button"},S={backLeft:"chevron-left",backRight:"chevron-right"},r={actionBar:"action-bar",contentTop:"content-top",contentBottom:"content-bottom",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},ie=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}",ce=ie,q=x(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=p(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=p(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=p(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=p(this,"calciteFlowItemToggle",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=e=>{e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){A(this),T(this),I(this)}async componentWillLoad(){await M(this),z(this)}componentDidRender(){B(this)}disconnectedCallback(){H(this),O(this),D(this)}componentDidLoad(){L(this)}effectiveLocaleChange(){$(this,this.effectiveLocale)}async setFocus(){await P(this);const{backButtonEl:e,containerEl:o}=this;if(e)return e.setFocus();if(o)return o.setFocus()}async scrollContentTo(e){var o;await((o=this.containerEl)==null?void 0:o.scrollContentTo(e))}renderBackButton(){const{el:e}=this,o=Z(e)==="rtl",{showBackButton:n,backButtonClick:c,messages:l}=this,i=l.back,d=o?S.backRight:S.backLeft;return n?t("calcite-action",{"aria-label":i,class:se.backButton,icon:d,key:"flow-back-button",onClick:c,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:i,title:i}):null}render(){const{collapsed:e,collapseDirection:o,collapsible:n,closable:c,closed:l,description:i,disabled:d,heading:f,headingLevel:b,loading:m,menuOpen:g,messages:u,overlayPositioning:C}=this;return t(E,{key:"ccb470196c73156160ca37504bfa80465afcbaca"},t(F,{key:"de7635e66d3a633e0887a255382e6be7f4756885",disabled:d},t("calcite-panel",{key:"6a2274d35eb972055c96f90166da763ed62bd1b3",closable:c,closed:l,collapseDirection:o,collapsed:e,collapsible:n,description:i,disabled:d,heading:f,headingLevel:b,loading:m,menuOpen:g,messageOverrides:u,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,overlayPositioning:C,ref:this.setContainerRef},this.renderBackButton(),t("slot",{key:"8b49efe6068d9f95229057d8c70105e6406aca3f",name:r.actionBar,slot:a.actionBar}),t("slot",{key:"1e1e9b50868fcf1ef21fc5559b7f947ed03e7ecd",name:r.headerActionsStart,slot:a.headerActionsStart}),t("slot",{key:"2baa09cf14039ab4e6f5c1611c721c000424c8ea",name:r.headerActionsEnd,slot:a.headerActionsEnd}),t("slot",{key:"d42339bd5033bc3e603ee8f2308901b1e1348378",name:r.headerContent,slot:a.headerContent}),t("slot",{key:"0f27efdced2b4b6ad47c984d169f0ec152a0d04e",name:r.headerMenuActions,slot:a.headerMenuActions}),t("slot",{key:"41e208260ceb203ea045e6264137235be2fa21da",name:r.fab,slot:a.fab}),t("slot",{key:"5454482b484598a76ba74109a36d1a330fe8d2e7",name:r.contentTop,slot:a.contentTop}),t("slot",{key:"3204234c0cbff2ebee7f1848e3b07160ae2bd14c",name:r.contentBottom,slot:a.contentBottom}),t("slot",{key:"87d1f991a3d12ec7b5b8d829334d68f68bc82f19",name:r.footerActions,slot:a.footerActions}),t("slot",{key:"672fca101390f2f414e614b8a4c86c932bbfa901",name:r.footer,slot:a.footer}),t("slot",{key:"a1589a501927413a4f9cf4044f55b214bf2aa583"}))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ce}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function J(){if(typeof customElements>"u")return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,q);break;case"calcite-action":customElements.get(e)||W();break;case"calcite-action-menu":customElements.get(e)||_();break;case"calcite-icon":customElements.get(e)||K();break;case"calcite-loader":customElements.get(e)||j();break;case"calcite-panel":customElements.get(e)||U();break;case"calcite-popover":customElements.get(e)||R();break;case"calcite-scrim":customElements.get(e)||G();break}})}J();const Ae=q,Be=J;export{Ae as CalciteFlowItem,Be as defineCustomElement};

var T=Object.defineProperty;var V=(n,e,t)=>e in n?T(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var s=(n,e,t)=>(V(n,typeof e!="symbol"?e+"":e,t),t);import{h as p,a as g,R as f,c as k,d as b,y as G,L as C,x as E,_ as x,H as I,O as P,p as R,m as Y}from"./vendor-4e4308ee.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const N="/Arcgis-Animate-Markers/assets/bugle-f4909af2.wav",J="/Arcgis-Animate-Markers/assets/cat-427afe9d.wav",U="/Arcgis-Animate-Markers/assets/drums-a00e44f7.mp3",B="/Arcgis-Animate-Markers/assets/guitar-559adb71.wav",L="/Arcgis-Animate-Markers/assets/trumpet-c3f50bf2.wav";function w(n,e){let t,o,a;const i=async()=>{o&&(a=n(...o),o=void 0),t=void 0};return async(...r)=>(o=r,t||(a=n(...r),t=window.setTimeout(i,e)),a)}class S{constructor({symbolAnimationManager:e,mapView:t,layerView:o,to:a,easingConfig:i}){s(this,"mapView");s(this,"layerView");s(this,"to");s(this,"easingConfig");s(this,"symbolAnimationManager");s(this,"clickHandler");s(this,"hoverHandler");s(this,"sounds",{meowSound:new p.Howl({src:J}),trumpetSound:new p.Howl({src:L}),hornSound:new p.Howl({src:N}),guitarSound:new p.Howl({src:B}),drumSounds:new p.Howl({src:U,sprite:{kick:[0,350],hihat:[374,160],snare:[666,290],cowbell:[968,200]}})});s(this,"hoverHitTest",w(async(e,t)=>{const{results:o}=await this.mapView.hitTest(e,t);o.filter(i=>i.type="graphic").length?this.mapView.container.style.cursor="pointer":this.mapView.container.style.cursor="default"},70));s(this,"clickHitTest",async(e,t)=>{const{results:o}=await this.mapView.hitTest(e,t),a=o.filter(i=>i.type="graphic");if(a.length){const i=a[0].graphic;i.symbol=await f(i);const r=this.symbolAnimationManager.makeAnimatableSymbol({graphic:i,easingConfig:this.easingConfig});this.animatePointPopEffect(r)}});this.mapView=t,this.layerView=o,this.to=a,this.easingConfig=i,this.symbolAnimationManager=e,this.clickHandler=g(()=>this.mapView,"click",r=>{const c={include:[this.layerView.layer]};this.clickHitTest(r,c)}),this.hoverHandler=g(()=>this.mapView,"pointer-move",r=>{const c={include:[this.layerView.layer]};this.hoverHitTest(r,c)})}animatePointPopEffect(e){e.symbolAnimation.start({to:this.to,onStart:()=>{const t=()=>this.cancelAnimation(e);switch(e.attributes.soundType){case"cat":{this.playSound(this.sounds.meowSound,t);break}case"trumpet":{this.playSound(this.sounds.trumpetSound,t);break}case"horn":{this.playSound(this.sounds.hornSound,t);break}case"guitar":{this.playSound(this.sounds.guitarSound,t);break}case"drum":{Math.random()>.5?this.playSound(this.sounds.drumSounds,t,"snare"):this.playSound(this.sounds.drumSounds,t,"hihat");break}default:t()}}})}cancelAnimation(e){e.symbolAnimation.start({to:{scale:1,rotate:0},onFinish:()=>{this.symbolAnimationManager.removeAnimatedGraphic({graphic:e})}})}playSound(e,t,o){e.off();const a=e.play(o);e.on("end",()=>{e.playing(a)===!1&&t()},a)}destroy(){this.clickHandler.remove(),this.hoverHandler.remove()}}const O="/Arcgis-Animate-Markers/assets/bomb_1f4a3-dec8605d.png",z="data:image/png;base64,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";class F{constructor({symbolAnimationManager:e,mapView:t,layerView:o,easingConfig:a={type:"easing",options:{easingFunction:"linear",duration:3e3}}}){s(this,"mapView");s(this,"layerView");s(this,"easingConfig");s(this,"symbolAnimationManager");s(this,"clickHandler");s(this,"hoverHandler");s(this,"confetti");s(this,"hoverHitTest",w(async(e,t)=>{const{results:o}=await this.mapView.hitTest(e,t);o.filter(i=>i.type="graphic").length?this.mapView.container.style.cursor="pointer":this.mapView.container.style.cursor="default"},70));s(this,"clickHitTest",async(e,t)=>{const{results:o}=await this.mapView.hitTest(e,t),a=o.filter(i=>i.type="graphic");if(a.length){const i=a[0].graphic;i.symbol=await f(i);const r=this.symbolAnimationManager.makeAnimatableSymbol({graphic:i,easingConfig:this.easingConfig});this.animatePointPopEffect(r)}});s(this,"onAnimationStep",(e,t,o)=>v(e));this.mapView=t,this.layerView=o,this.easingConfig=a,this.symbolAnimationManager=e;const i=document.createElement("canvas");i.classList.add("confetti-canvas"),t.ui.add(i,"manual"),this.confetti=k.create(i,{resize:!0,useWorker:!0}),this.clickHandler=g(()=>this.mapView,"click",r=>{const c={include:[this.layerView.layer]};this.clickHitTest(r,c)}),this.hoverHandler=g(()=>this.mapView,"pointer-move",r=>{const c={include:[this.layerView.layer]};this.hoverHitTest(r,c)})}animatePointPopEffect(e){e.symbolAnimation.start({onStep:this.onAnimationStep,onFinish:()=>{const t=this.mapView.toScreen(e.geometry);this.confetti({particleCount:140,spread:360,scalar:1.4,gravity:.8,startVelocity:20,origin:{x:t.x/this.mapView.width,y:t.y/this.mapView.height}}),e.symbol=new b({data:{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMPictureMarker",enable:!0,anchorPoint:{x:0,y:0},size:40,scaleX:1,tintColor:[255,255,255,255],url:z}]}}})}})}destroy(){this.clickHandler.remove(),this.hoverHandler.remove()}}function D(n){return[{type:"CIMVectorMarker",enable:!0,offsetX:17.5*(n-1),size:35,anchorPoint:{x:0,y:0},frame:{xmin:-100,ymin:0,xmax:100,ymax:100},markerGraphics:[{type:"CIMMarkerGraphic",primitiveName:"",textString:"",geometry:{rings:[[[-50*n,-20],[-50*n,-5],[50*n,-5],[50*n,-20]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:[113,200,55,255]}]}}]},{type:"CIMVectorMarker",enable:!0,offsetX:17.5*n,size:35,anchorPoint:{x:0,y:0},frame:{xmin:-100,ymin:0,xmax:100,ymax:100},markerGraphics:[{type:"CIMMarkerGraphic",primitiveName:"",textString:"",geometry:{rings:[[[-50*(1-n),-20],[-50*(1-n),-5],[50*(1-n),-5],[50*(1-n),-20]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:[255,0,0,255]}]}}]}]}function v(n){return new b({data:{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",symbolLayers:[...n>0?D(n):[],{type:"CIMPictureMarker",enable:!0,anchorPoint:{x:0,y:0},offsetX:3,offsetY:3,size:40,scaleX:1,tintColor:[255,255,255,255],url:O}]}}})}class Q{constructor({symbolAnimationManager:e,mapView:t,layerView:o,to:a,easingConfig:i}){s(this,"mapView");s(this,"layerView");s(this,"to");s(this,"easingConfig");s(this,"symbolAnimationManager");s(this,"hoverHandler");s(this,"hitTest",w(async(e,t)=>{const{results:o}=await this.mapView.hitTest(e,t),a=o.filter(i=>i.type="graphic");if(a.length){const i=a[0].graphic;this.mapView.container.style.cursor="pointer",i.symbol=await f(i),this.activeGraphic=i}else this.mapView.container.style.cursor="default",this.activeGraphic=null},70));s(this,"_activeGraphic",null);this.mapView=t,this.layerView=o,this.to=a,this.easingConfig=i,this.symbolAnimationManager=e,this.hoverHandler=g(()=>this.mapView,"pointer-move",r=>{const c={include:[this.layerView.layer]};this.hitTest(r,c)})}set activeGraphic(e){if(e&&this.symbolAnimationManager.hasAnimatedGraphic({graphic:e}))return;if(this._activeGraphic===null){if(e===null)return}else{const o=this.symbolAnimationManager.getAnimatedGraphic({graphic:this._activeGraphic});o&&this.cancelAnimation(o)}if(this._activeGraphic=e,this._activeGraphic===null)return;const t=this.symbolAnimationManager.makeAnimatableSymbol({graphic:this._activeGraphic,easingConfig:this.easingConfig});this.animatePointPopEffect(t)}animatePointPopEffect(e){e.symbolAnimation.start({to:this.to})}cancelAnimation(e){e.symbolAnimation.start({to:{scale:1,rotate:0},onFinish:()=>{this.symbolAnimationManager.removeAnimatedGraphic({graphic:e})}})}destroy(){this.hoverHandler.remove()}}class X{constructor({symbolAnimationManager:e,graphics:t}){s(this,"symbolAnimationManager");s(this,"intervalId");this.symbolAnimationManager=e,this.intervalId=this.animateRandomItem(t)}animateRandomItem(e){return window.setInterval(()=>{const t=Math.floor(Math.random()*e.length),a=e[t].clone();a.symbol=new G({color:[255,255,255,0],size:30,outline:{color:[255,0,0,.8],style:"solid",width:4}});const i=Date.now().toString(),r=this.symbolAnimationManager.makeAnimatableSymbol({animationId:i,graphic:a,easingConfig:{type:"easing",options:{easingFunction:"easeInOutCubic",duration:1500}},isOverlay:!0});r.symbolAnimation.start({to:{scale:1.7},onFinish:()=>{this.symbolAnimationManager.removeAnimatedGraphic({graphic:r})}})},2e3)}destroy(){window.clearInterval(this.intervalId)}}const M=new C({basemap:new E({portalItem:{id:"a8c045aa74d643cc9e2fa2702cc4cb45"}})}),l=new x({container:"viewDiv",map:M,constraints:{minZoom:10},center:[-2.362,51.383],zoom:15}),Z=document.getElementById("titleDiv");l.ui.add(Z,"top-right");const A=document.getElementById("modeSelect");A==null||A.addEventListener("change",n=>{K(n)});const m=new I({portalItem:{id:"ae3681977a0749e98867e42728196b3a"},popupEnabled:!1,outFields:["*"]});M.add(m);let h,y,d,u,H;l.whenLayerView(m).then(async n=>{H=await m.queryFeatures({where:"1=1",returnGeometry:!0}),d=n,y=new P({mapView:l,layerView:n}),u=m.renderer.clone(),h=new S({symbolAnimationManager:y,mapView:l,layerView:d,to:{scale:1.5,rotate:20},easingConfig:{type:"spring",options:{tension:280,friction:40,mass:10}}})});function K(n){if(n.target){const e=n.target,t=e.options[e.selectedIndex].value;switch(h.destroy(),t){case"radar-ping":{h=new X({symbolAnimationManager:y,graphics:H.features});break}case"hover-pop-effect":{m.renderer=u,h=new Q({symbolAnimationManager:y,mapView:l,layerView:d,to:{scale:1.5,rotate:10},easingConfig:{type:"spring",options:Y.molasses}});break}case"click-pop-effect":{m.renderer=u,h=new S({symbolAnimationManager:y,mapView:l,layerView:d,to:{scale:1.5,rotate:20},easingConfig:{type:"spring",options:{tension:280,friction:40,mass:10}}});break}case"custom-animation":{m.renderer=new R({symbol:v(0)}),h=new F({symbolAnimationManager:y,mapView:l,layerView:d});break}}}}

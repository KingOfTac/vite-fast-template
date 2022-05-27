const Ol=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}};Ol();const ie=function(){if(typeof globalThis!="undefined")return globalThis;if(typeof global!="undefined")return global;if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;try{return new Function("return this")()}catch{return{}}}();ie.trustedTypes===void 0&&(ie.trustedTypes={createPolicy:(i,t)=>t});const Er={configurable:!1,enumerable:!1,writable:!1};ie.FAST===void 0&&Reflect.defineProperty(ie,"FAST",Object.assign({value:Object.create(null)},Er));const $i=ie.FAST;if($i.getById===void 0){const i=Object.create(null);Reflect.defineProperty($i,"getById",Object.assign({value(t,e){let o=i[t];return o===void 0&&(o=e?i[t]=e():null),o}},Er))}const De=Object.freeze([]),is=ie.FAST.getById(1,()=>{const i=[],t=[];function e(){if(t.length)throw t.shift()}function o(r){try{r.call()}catch(l){t.push(l),setTimeout(e,0)}}function s(){let l=0;for(;l<i.length;)if(o(i[l]),l++,l>1024){for(let c=0,u=i.length-l;c<u;c++)i[c]=i[c+l];i.length-=l,l=0}i.length=0}function n(r){i.length<1&&ie.requestAnimationFrame(s),i.push(r)}return Object.freeze({enqueue:n,process:s})}),Ar=ie.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let os=Ar;const vi=`fast-${Math.random().toString(36).substring(2,8)}`,Or=`${vi}{`,Ms=`}${vi}`,R=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if(os!==Ar)throw new Error("The HTML policy can only be set once.");os=i},createHTML(i){return os.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith(vi)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${vi}:`,""))},createInterpolationPlaceholder(i){return`${Or}${i}${Ms}`},createCustomAttributePlaceholder(i,t){return`${i}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(i){return`<!--${vi}:${i}-->`},queueUpdate:is.enqueue,processUpdates:is.process,nextUpdate(){return new Promise(is.enqueue)},setAttribute(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)},setBooleanAttribute(i,t,e){e?i.setAttribute(t,""):i.removeAttribute(t)},removeChildNodes(i){for(let t=i.firstChild;t!==null;t=i.firstChild)i.removeChild(t)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});class ro{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.spillover===void 0?this.sub1===t||this.sub2===t:this.spillover.indexOf(t)!==-1}subscribe(t){const e=this.spillover;if(e===void 0){if(this.has(t))return;if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else e.indexOf(t)===-1&&e.push(t)}unsubscribe(t){const e=this.spillover;if(e===void 0)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const o=e.indexOf(t);o!==-1&&e.splice(o,1)}}notify(t){const e=this.spillover,o=this.source;if(e===void 0){const s=this.sub1,n=this.sub2;s!==void 0&&s.handleChange(o,t),n!==void 0&&n.handleChange(o,t)}else for(let s=0,n=e.length;s<n;++s)e[s].handleChange(o,t)}}class Vr{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const o=this.subscribers[t];o!==void 0&&o.notify(t),(e=this.sourceSubscribers)===null||e===void 0||e.notify(t)}subscribe(t,e){var o;if(e){let s=this.subscribers[e];s===void 0&&(this.subscribers[e]=s=new ro(this.source)),s.subscribe(t)}else this.sourceSubscribers=(o=this.sourceSubscribers)!==null&&o!==void 0?o:new ro(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var o;if(e){const s=this.subscribers[e];s!==void 0&&s.unsubscribe(t)}else(o=this.sourceSubscribers)===null||o===void 0||o.unsubscribe(t)}}const D=$i.getById(2,()=>{const i=/(:|&&|\|\||if)/,t=new WeakMap,e=new WeakMap,o=R.queueUpdate;let s,n=f=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(f){let p=f.$fastController||t.get(f);return p===void 0&&(Array.isArray(f)?p=n(f):t.set(f,p=new Vr(f))),p}function l(f){let p=e.get(f);if(p===void 0){let g=Reflect.getPrototypeOf(f);for(;p===void 0&&g!==null;)p=e.get(g),g=Reflect.getPrototypeOf(g);p===void 0?p=[]:p=p.slice(0),e.set(f,p)}return p}class c{constructor(p){this.name=p,this.field=`_${p}`,this.callback=`${p}Changed`}getValue(p){return s!==void 0&&s.watch(p,this.name),p[this.field]}setValue(p,g){const F=this.field,S=p[F];if(S!==g){p[F]=g;const H=p[this.callback];typeof H=="function"&&H.call(p,S,g),r(p).notify(this.name)}}}class u extends ro{constructor(p,g,F=!1){super(p,g),this.binding=p,this.isVolatileBinding=F,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(p,g){this.needsRefresh&&this.last!==null&&this.disconnect();const F=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const S=this.binding(p,g);return s=F,S}disconnect(){if(this.last!==null){let p=this.first;for(;p!==void 0;)p.notifier.unsubscribe(this,p.propertyName),p=p.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(p,g){const F=this.last,S=r(p),H=F===null?this.first:{};if(H.propertySource=p,H.propertyName=g,H.notifier=S,S.subscribe(this,g),F!==null){if(!this.needsRefresh){let Q;s=void 0,Q=F.propertySource[F.propertyName],s=this,p===Q&&(this.needsRefresh=!0)}F.next=H}this.last=H}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let p=this.first;return{next:()=>{const g=p;return g===void 0?{value:void 0,done:!0}:(p=p.next,{value:g,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(f){n=f},getNotifier:r,track(f,p){s!==void 0&&s.watch(f,p)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(f,p){r(f).notify(p)},defineProperty(f,p){typeof p=="string"&&(p=new c(p)),l(f).push(p),Reflect.defineProperty(f,p.name,{enumerable:!0,get:function(){return p.getValue(this)},set:function(g){p.setValue(this,g)}})},getAccessors:l,binding(f,p,g=this.isVolatileBinding(f)){return new u(f,p,g)},isVolatileBinding(f){return i.test(f.toString())}})});function v(i,t){D.defineProperty(i,t)}function Vl(i,t,e){return Object.assign({},e,{get:function(){return D.trackVolatile(),e.get.apply(this)}})}const An=$i.getById(3,()=>{let i=null;return{get(){return i},set(t){i=t}}});class ki{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return An.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){An.set(t)}}D.defineProperty(ki.prototype,"index");D.defineProperty(ki.prototype,"length");const Ye=Object.seal(new ki);class Ei{constructor(){this.targetIndex=0}}class Lr extends Ei{constructor(){super(...arguments),this.createPlaceholder=R.createInterpolationPlaceholder}}class Bs extends Ei{constructor(t,e,o){super(),this.name=t,this.behavior=e,this.options=o}createPlaceholder(t){return R.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function Ll(i,t){this.source=i,this.context=t,this.bindingObserver===null&&(this.bindingObserver=D.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,t))}function Pl(i,t){this.source=i,this.context=t,this.target.addEventListener(this.targetName,this)}function Hl(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function zl(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function Ml(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Bl(i){R.setAttribute(this.target,this.targetName,i)}function Nl(i){R.setBooleanAttribute(this.target,this.targetName,i)}function jl(i){if(i==null&&(i=""),i.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=i.create():this.target.$fastTemplate!==i&&(t.isComposed&&(t.remove(),t.unbind()),t=i.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=i)}else{const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=i}}function _l(i){this.target[this.targetName]=i}function ql(i){const t=this.classVersions||Object.create(null),e=this.target;let o=this.version||0;if(i!=null&&i.length){const s=i.split(/\s+/);for(let n=0,r=s.length;n<r;++n){const l=s[n];l!==""&&(t[l]=o,e.classList.add(l))}}if(this.classVersions=t,this.version=o+1,o!==0){o-=1;for(const s in t)t[s]===o&&e.classList.remove(s)}}class Ns extends Lr{constructor(t){super(),this.binding=t,this.bind=Ll,this.unbind=Hl,this.updateTarget=Bl,this.isBindingVolatile=D.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=_l,this.cleanedTargetName==="innerHTML"){const e=this.binding;this.binding=(o,s)=>R.createHTML(e(o,s))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=Nl;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=Pl,this.unbind=Ml;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=ql);break}}targetAtContent(){this.updateTarget=jl,this.unbind=zl}createBehavior(t){return new Ul(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Ul{constructor(t,e,o,s,n,r,l){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=o,this.bind=s,this.unbind=n,this.updateTarget=r,this.targetName=l}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){ki.setEvent(t);const e=this.binding(this.source,this.context);ki.setEvent(null),e!==!0&&t.preventDefault()}}let ss=null;class js{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){ss=this}static borrow(t){const e=ss||new js;return e.directives=t,e.reset(),ss=null,e}}function Gl(i){if(i.length===1)return i[0];let t;const e=i.length,o=i.map(r=>typeof r=="string"?()=>r:(t=r.targetName||t,r.binding)),s=(r,l)=>{let c="";for(let u=0;u<e;++u)c+=o[u](r,l);return c},n=new Ns(s);return n.targetName=t,n}const Wl=Ms.length;function Pr(i,t){const e=t.split(Or);if(e.length===1)return null;const o=[];for(let s=0,n=e.length;s<n;++s){const r=e[s],l=r.indexOf(Ms);let c;if(l===-1)c=r;else{const u=parseInt(r.substring(0,l));o.push(i.directives[u]),c=r.substring(l+Wl)}c!==""&&o.push(c)}return o}function On(i,t,e=!1){const o=t.attributes;for(let s=0,n=o.length;s<n;++s){const r=o[s],l=r.value,c=Pr(i,l);let u=null;c===null?e&&(u=new Ns(()=>l),u.targetName=r.name):u=Gl(c),u!==null&&(t.removeAttributeNode(r),s--,n--,i.addFactory(u))}}function Yl(i,t,e){const o=Pr(i,t.textContent);if(o!==null){let s=t;for(let n=0,r=o.length;n<r;++n){const l=o[n],c=n===0?t:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);typeof l=="string"?c.textContent=l:(c.textContent=" ",i.captureContentBinding(l)),s=c,i.targetIndex++,c!==t&&e.nextNode()}i.targetIndex--}}function Xl(i,t){const e=i.content;document.adoptNode(e);const o=js.borrow(t);On(o,i,!0);const s=o.behaviorFactories;o.reset();const n=R.createTemplateWalker(e);let r;for(;r=n.nextNode();)switch(o.targetIndex++,r.nodeType){case 1:On(o,r);break;case 3:Yl(o,r,n);break;case 8:R.isMarker(r)&&o.addFactory(t[R.extractDirectiveIndexFromMarker(r)])}let l=0;(R.isMarker(e.firstChild)||e.childNodes.length===1&&t.length)&&(e.insertBefore(document.createComment(""),e.firstChild),l=-1);const c=o.behaviorFactories;return o.release(),{fragment:e,viewBehaviorFactories:c,hostBehaviorFactories:s,targetOffset:l}}const ns=document.createRange();class _s{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=t.parentNode,o=this.lastChild;let s=this.firstChild,n;for(;s!==o;)n=s.nextSibling,e.insertBefore(s,t),s=n;e.insertBefore(o,t)}}remove(){const t=this.fragment,e=this.lastChild;let o=this.firstChild,s;for(;o!==e;)s=o.nextSibling,t.appendChild(o),o=s;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let o=this.firstChild,s;for(;o!==e;)s=o.nextSibling,t.removeChild(o),o=s;t.removeChild(e);const n=this.behaviors,r=this.source;for(let l=0,c=n.length;l<c;++l)n[l].unbind(r)}bind(t,e){const o=this.behaviors;if(this.source!==t)if(this.source!==null){const s=this.source;this.source=t,this.context=e;for(let n=0,r=o.length;n<r;++n){const l=o[n];l.unbind(s),l.bind(t,e)}}else{this.source=t,this.context=e;for(let s=0,n=o.length;s<n;++s)o[s].bind(t,e)}}unbind(){if(this.source===null)return;const t=this.behaviors,e=this.source;for(let o=0,s=t.length;o<s;++o)t[o].unbind(e);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){ns.setStartBefore(t[0].firstChild),ns.setEndAfter(t[t.length-1].lastChild),ns.deleteContents();for(let e=0,o=t.length;e<o;++e){const s=t[e],n=s.behaviors,r=s.source;for(let l=0,c=n.length;l<c;++l)n[l].unbind(r)}}}}class ws{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(this.fragment===null){let u;const f=this.html;if(typeof f=="string"){u=document.createElement("template"),u.innerHTML=R.createHTML(f);const g=u.content.firstElementChild;g!==null&&g.tagName==="TEMPLATE"&&(u=g)}else u=f;const p=Xl(u,this.directives);this.fragment=p.fragment,this.viewBehaviorFactories=p.viewBehaviorFactories,this.hostBehaviorFactories=p.hostBehaviorFactories,this.targetOffset=p.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,s=new Array(this.behaviorCount),n=R.createTemplateWalker(e);let r=0,l=this.targetOffset,c=n.nextNode();for(let u=o.length;r<u;++r){const f=o[r],p=f.targetIndex;for(;c!==null;)if(l===p){s[r]=f.createBehavior(c);break}else c=n.nextNode(),l++}if(this.hasHostBehaviors){const u=this.hostBehaviorFactories;for(let f=0,p=u.length;f<p;++f,++r)s[r]=u[f].createBehavior(t)}return new _s(e,s)}render(t,e,o){typeof e=="string"&&(e=document.getElementById(e)),o===void 0&&(o=e);const s=this.create(o);return s.bind(t,Ye),s.appendTo(e),s}}const Ql=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function y(i,...t){const e=[];let o="";for(let s=0,n=i.length-1;s<n;++s){const r=i[s];let l=t[s];if(o+=r,l instanceof ws){const c=l;l=()=>c}if(typeof l=="function"&&(l=new Ns(l)),l instanceof Lr){const c=Ql.exec(r);c!==null&&(l.targetName=c[2])}l instanceof Ei?(o+=l.createPlaceholder(e.length),e.push(l)):o+=l}return o+=i[i.length-1],new ws(o,e)}class ct{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}}ct.create=(()=>{if(R.supportsAdoptedStyleSheets){const i=new Map;return t=>new Zl(t,i)}return i=>new tc(i)})();function qs(i){return i.map(t=>t instanceof ct?qs(t.styles):[t]).reduce((t,e)=>t.concat(e),[])}function Hr(i){return i.map(t=>t instanceof ct?t.behaviors:null).reduce((t,e)=>e===null?t:(t===null&&(t=[]),t.concat(e)),null)}class Zl extends ct{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=Hr(t)}get styleSheets(){if(this._styleSheets===void 0){const t=this.styles,e=this.styleSheetCache;this._styleSheets=qs(t).map(o=>{if(o instanceof CSSStyleSheet)return o;let s=e.get(o);return s===void 0&&(s=new CSSStyleSheet,s.replaceSync(o),e.set(o,s)),s})}return this._styleSheets}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const e=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter(o=>e.indexOf(o)===-1),super.removeStylesFrom(t)}}let Jl=0;function Kl(){return`fast-style-class-${++Jl}`}class tc extends ct{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=Hr(t),this.styleSheets=qs(t),this.styleClass=Kl()}addStylesTo(t){const e=this.styleSheets,o=this.styleClass;t=this.normalizeTarget(t);for(let s=0;s<e.length;s++){const n=document.createElement("style");n.innerHTML=e[s],n.className=o,t.append(n)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);const e=t.querySelectorAll(`.${this.styleClass}`);for(let o=0,s=e.length;o<s;++o)t.removeChild(e[o]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const Ai={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},$={toView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t.toString()},fromView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t}};class ao{constructor(t,e,o=e.toLowerCase(),s="reflect",n){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=o,this.mode=s,this.converter=n,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,s==="boolean"&&n===void 0&&(this.converter=Ai)}setValue(t,e){const o=t[this.fieldName],s=this.converter;s!==void 0&&(e=s.fromView(e)),o!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](o,e),t.$fastController.notify(this.name))}getValue(t){return D.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,o=this.guards;o.has(t)||e==="fromView"||R.queueUpdate(()=>{o.add(t);const s=t[this.fieldName];switch(e){case"reflect":const n=this.converter;R.setAttribute(t,this.attribute,n!==void 0?n.toView(s):s);break;case"boolean":R.setBooleanAttribute(t,this.attribute,s);break}o.delete(t)})}static collect(t,...e){const o=[];e.push(t.attributes);for(let s=0,n=e.length;s<n;++s){const r=e[s];if(r!==void 0)for(let l=0,c=r.length;l<c;++l){const u=r[l];typeof u=="string"?o.push(new ao(t,u)):o.push(new ao(t,u.property,u.attribute,u.mode,u.converter))}}return o}}function h(i,t){let e;function o(s,n){arguments.length>1&&(e.property=n),(s.constructor.attributes||(s.constructor.attributes=[])).push(e)}if(arguments.length>1){e={},o(i,t);return}return e=i===void 0?{}:i,o}const Vn={mode:"open"},Ln={},$s=$i.getById(4,()=>{const i=new Map;return Object.freeze({register(t){return i.has(t.type)?!1:(i.set(t.type,t),!0)},getByType(t){return i.get(t)}})});class Re{constructor(t,e=t.definition){typeof e=="string"&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const o=ao.collect(t,e.attributes),s=new Array(o.length),n={},r={};for(let l=0,c=o.length;l<c;++l){const u=o[l];s[l]=u.attribute,n[u.name]=u,r[u.attribute]=u}this.attributes=o,this.observedAttributes=s,this.propertyLookup=n,this.attributeLookup=r,this.shadowOptions=e.shadowOptions===void 0?Vn:e.shadowOptions===null?void 0:Object.assign(Object.assign({},Vn),e.shadowOptions),this.elementOptions=e.elementOptions===void 0?Ln:Object.assign(Object.assign({},Ln),e.elementOptions),this.styles=e.styles===void 0?void 0:Array.isArray(e.styles)?ct.create(e.styles):e.styles instanceof ct?e.styles:ct.create([e.styles])}get isDefined(){return!!$s.getByType(this.type)}define(t=customElements){const e=this.type;if($s.register(this)){const o=this.attributes,s=e.prototype;for(let n=0,r=o.length;n<r;++n)D.defineProperty(s,o[n]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}}Re.forType=$s.getByType;const zr=new WeakMap,ec={bubbles:!0,composed:!0,cancelable:!0};function rs(i){return i.shadowRoot||zr.get(i)||null}class Us extends Vr{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const o=e.shadowOptions;if(o!==void 0){const n=t.attachShadow(o);o.mode==="closed"&&zr.set(t,n)}const s=D.getAccessors(t);if(s.length>0){const n=this.boundObservables=Object.create(null);for(let r=0,l=s.length;r<l;++r){const c=s[r].name,u=t[c];u!==void 0&&(delete t[c],n[c]=u)}}}get isConnected(){return D.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,D.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){const e=rs(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const o=t.behaviors;t.addStylesTo(e),o!==null&&this.addBehaviors(o)}}removeStyles(t){const e=rs(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const o=t.behaviors;t.removeStylesFrom(e),o!==null&&this.removeBehaviors(o)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),o=t.length,s=[];for(let n=0;n<o;++n){const r=t[n];e.has(r)?e.set(r,e.get(r)+1):(e.set(r,1),s.push(r))}if(this._isConnected){const n=this.element;for(let r=0;r<s.length;++r)s[r].bind(n,Ye)}}removeBehaviors(t,e=!1){const o=this.behaviors;if(o===null)return;const s=t.length,n=[];for(let r=0;r<s;++r){const l=t[r];if(o.has(l)){const c=o.get(l)-1;c===0||e?o.delete(l)&&n.push(l):o.set(l,c)}}if(this._isConnected){const r=this.element;for(let l=0;l<n.length;++l)n[l].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,Ye);const e=this.behaviors;if(e!==null)for(const[o]of e)o.bind(t,Ye);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;t!==null&&t.unbind();const e=this.behaviors;if(e!==null){const o=this.element;for(const[s]of e)s.unbind(o)}}onAttributeChangedCallback(t,e,o){const s=this.definition.attributeLookup[t];s!==void 0&&s.onAttributeChangedCallback(this.element,o)}emit(t,e,o){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},ec),o))):!1}finishInitialization(){const t=this.element,e=this.boundObservables;if(e!==null){const s=Object.keys(e);for(let n=0,r=s.length;n<r;++n){const l=s[n];t[l]=e[l]}this.boundObservables=null}const o=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,o=rs(e)||e;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||R.removeChildNodes(o),t&&(this.view=t.render(e,o,e))}static forCustomElement(t){const e=t.$fastController;if(e!==void 0)return e;const o=Re.forType(t.constructor);if(o===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new Us(t,o)}}function Pn(i){return class extends i{constructor(){super(),Us.forCustomElement(this)}$emit(t,e,o){return this.$fastController.emit(t,e,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,o){this.$fastController.onAttributeChangedCallback(t,e,o)}}}const xe=Object.assign(Pn(HTMLElement),{from(i){return Pn(i)},define(i,t){return new Re(i,t).define().type}});function Gs(i){return function(t){new Re(t,i).define()}}class Ws{createCSS(){return""}createBehavior(){}}function Mr(i,t){const e=[];let o="";const s=[];for(let n=0,r=i.length-1;n<r;++n){o+=i[n];let l=t[n];if(l instanceof Ws){const c=l.createBehavior();l=l.createCSS(),c&&s.push(c)}l instanceof ct||l instanceof CSSStyleSheet?(o.trim()!==""&&(e.push(o),o=""),e.push(l)):o+=l}return o+=i[i.length-1],o.trim()!==""&&e.push(o),{styles:e,behaviors:s}}function b(i,...t){const{styles:e,behaviors:o}=Mr(i,t),s=ct.create(e);return o.length&&s.withBehaviors(...o),s}class ic extends Ws{constructor(t,e){super(),this.behaviors=e,this.css="";const o=t.reduce((s,n)=>(typeof n=="string"?this.css+=n:s.push(n),s),[]);o.length&&(this.styles=ct.create(o))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function Gt(i,...t){const{styles:e,behaviors:o}=Mr(i,t);return new ic(e,o)}function jt(i,t,e){return{index:i,removed:t,addedCount:e}}const Br=0,Nr=1,ks=2,Cs=3;function oc(i,t,e,o,s,n){const r=n-s+1,l=e-t+1,c=new Array(r);let u,f;for(let p=0;p<r;++p)c[p]=new Array(l),c[p][0]=p;for(let p=0;p<l;++p)c[0][p]=p;for(let p=1;p<r;++p)for(let g=1;g<l;++g)i[t+g-1]===o[s+p-1]?c[p][g]=c[p-1][g-1]:(u=c[p-1][g]+1,f=c[p][g-1]+1,c[p][g]=u<f?u:f);return c}function sc(i){let t=i.length-1,e=i[0].length-1,o=i[t][e];const s=[];for(;t>0||e>0;){if(t===0){s.push(ks),e--;continue}if(e===0){s.push(Cs),t--;continue}const n=i[t-1][e-1],r=i[t-1][e],l=i[t][e-1];let c;r<l?c=r<n?r:n:c=l<n?l:n,c===n?(n===o?s.push(Br):(s.push(Nr),o=n),t--,e--):c===r?(s.push(Cs),t--,o=r):(s.push(ks),e--,o=l)}return s.reverse(),s}function nc(i,t,e){for(let o=0;o<e;++o)if(i[o]!==t[o])return o;return e}function rc(i,t,e){let o=i.length,s=t.length,n=0;for(;n<e&&i[--o]===t[--s];)n++;return n}function ac(i,t,e,o){return t<e||o<i?-1:t===e||o===i?0:i<e?t<o?t-e:o-e:o<t?o-i:t-i}function jr(i,t,e,o,s,n){let r=0,l=0;const c=Math.min(e-t,n-s);if(t===0&&s===0&&(r=nc(i,o,c)),e===i.length&&n===o.length&&(l=rc(i,o,c-r)),t+=r,s+=r,e-=l,n-=l,e-t===0&&n-s===0)return De;if(t===e){const S=jt(t,[],0);for(;s<n;)S.removed.push(o[s++]);return[S]}else if(s===n)return[jt(t,[],e-t)];const u=sc(oc(i,t,e,o,s,n)),f=[];let p,g=t,F=s;for(let S=0;S<u.length;++S)switch(u[S]){case Br:p!==void 0&&(f.push(p),p=void 0),g++,F++;break;case Nr:p===void 0&&(p=jt(g,[],0)),p.addedCount++,g++,p.removed.push(o[F]),F++;break;case ks:p===void 0&&(p=jt(g,[],0)),p.addedCount++,g++;break;case Cs:p===void 0&&(p=jt(g,[],0)),p.removed.push(o[F]),F++;break}return p!==void 0&&f.push(p),f}const Hn=Array.prototype.push;function lc(i,t,e,o){const s=jt(t,e,o);let n=!1,r=0;for(let l=0;l<i.length;l++){const c=i[l];if(c.index+=r,n)continue;const u=ac(s.index,s.index+s.removed.length,c.index,c.index+c.addedCount);if(u>=0){i.splice(l,1),l--,r-=c.addedCount-c.removed.length,s.addedCount+=c.addedCount-u;const f=s.removed.length+c.removed.length-u;if(!s.addedCount&&!f)n=!0;else{let p=c.removed;if(s.index<c.index){const g=s.removed.slice(0,c.index-s.index);Hn.apply(g,p),p=g}if(s.index+s.removed.length>c.index+c.addedCount){const g=s.removed.slice(c.index+c.addedCount-s.index);Hn.apply(p,g)}s.removed=p,c.index<s.index&&(s.index=c.index)}}else if(s.index<c.index){n=!0,i.splice(l,0,s),l++;const f=s.addedCount-s.removed.length;c.index+=f,r+=f}}n||i.push(s)}function cc(i){const t=[];for(let e=0,o=i.length;e<o;e++){const s=i[e];lc(t,s.index,s.removed,s.addedCount)}return t}function hc(i,t){let e=[];const o=cc(t);for(let s=0,n=o.length;s<n;++s){const r=o[s];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==i[r.index]&&e.push(r);continue}e=e.concat(jr(i,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return e}let zn=!1;function as(i,t){let e=i.index;const o=t.length;return e>o?e=o-i.addedCount:e<0&&(e=o+i.removed.length+e-i.addedCount),e<0&&(e=0),i.index=e,i}class dc extends ro{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(t,"$fastController",{value:this,enumerable:!1})}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){this.splices===void 0?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,R.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,R.queueUpdate(this))}flush(){const t=this.splices,e=this.oldCollection;if(t===void 0&&e===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const o=e===void 0?hc(this.source,t):jr(this.source,0,this.source.length,e,0,e.length);this.notify(o)}}function uc(){if(zn)return;zn=!0,D.setArrayObserverFactory(c=>new dc(c));const i=Array.prototype;if(i.$fastPatch)return;Reflect.defineProperty(i,"$fastPatch",{value:1,enumerable:!1});const t=i.pop,e=i.push,o=i.reverse,s=i.shift,n=i.sort,r=i.splice,l=i.unshift;i.pop=function(){const c=this.length>0,u=t.apply(this,arguments),f=this.$fastController;return f!==void 0&&c&&f.addSplice(jt(this.length,[u],0)),u},i.push=function(){const c=e.apply(this,arguments),u=this.$fastController;return u!==void 0&&u.addSplice(as(jt(this.length-arguments.length,[],arguments.length),this)),c},i.reverse=function(){let c;const u=this.$fastController;u!==void 0&&(u.flush(),c=this.slice());const f=o.apply(this,arguments);return u!==void 0&&u.reset(c),f},i.shift=function(){const c=this.length>0,u=s.apply(this,arguments),f=this.$fastController;return f!==void 0&&c&&f.addSplice(jt(0,[u],0)),u},i.sort=function(){let c;const u=this.$fastController;u!==void 0&&(u.flush(),c=this.slice());const f=n.apply(this,arguments);return u!==void 0&&u.reset(c),f},i.splice=function(){const c=r.apply(this,arguments),u=this.$fastController;return u!==void 0&&u.addSplice(as(jt(+arguments[0],c,arguments.length>2?arguments.length-2:0),this)),c},i.unshift=function(){const c=l.apply(this,arguments),u=this.$fastController;return u!==void 0&&u.addSplice(as(jt(0,[],arguments.length),this)),c}}class pc{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function z(i){return new Bs("fast-ref",pc,i)}function W(i,t){const e=typeof t=="function"?t:()=>t;return(o,s)=>i(o,s)?e(o,s):null}const fc=Object.freeze({positioning:!1,recycle:!0});function gc(i,t,e,o){i.bind(t[e],o)}function mc(i,t,e,o){const s=Object.create(o);s.index=e,s.length=t.length,i.bind(t[e],s)}class bc{constructor(t,e,o,s,n,r){this.location=t,this.itemsBinding=e,this.templateBinding=s,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=gc,this.itemsBindingObserver=D.binding(e,this,o),this.templateBindingObserver=D.binding(s,this,n),r.positioning&&(this.bindView=mc)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items){this.items=De;return}const e=this.itemsObserver,o=this.itemsObserver=D.getNotifier(this.items),s=e!==o;s&&e!==null&&e.unsubscribe(this),(s||t)&&o.subscribe(this)}updateViews(t){const e=this.childContext,o=this.views,s=[],n=this.bindView;let r=0;for(let u=0,f=t.length;u<f;++u){const p=t[u],g=p.removed;s.push(...o.splice(p.index+r,g.length)),r-=p.addedCount}const l=this.items,c=this.template;for(let u=0,f=t.length;u<f;++u){const p=t[u];let g=p.index;const F=g+p.addedCount;for(;g<F;++g){const S=o[g],H=S?S.firstChild:this.location,Q=this.options.recycle&&s.length>0?s.shift():c.create();o.splice(g,0,Q),n(Q,l,g,e),Q.insertBefore(H)}}for(let u=0,f=s.length;u<f;++u)s[u].dispose();if(this.options.positioning)for(let u=0,f=o.length;u<f;++u){const p=o[u].context;p.length=f,p.index=u}}refreshAllViews(t=!1){const e=this.items,o=this.childContext,s=this.template,n=this.location,r=this.bindView;let l=e.length,c=this.views,u=c.length;if((l===0||t)&&(_s.disposeContiguousBatch(c),u=0),u===0){this.views=c=new Array(l);for(let f=0;f<l;++f){const p=s.create();r(p,e,f,o),c[f]=p,p.insertBefore(n)}}else{let f=0;for(;f<l;++f)if(f<u){const g=c[f];r(g,e,f,o)}else{const g=s.create();r(g,e,f,o),c.push(g),g.insertBefore(n)}const p=c.splice(f,u-f);for(f=0,l=p.length;f<l;++f)p[f].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,o=t.length;e<o;++e)t[e].unbind()}}class Ys extends Ei{constructor(t,e,o){super(),this.itemsBinding=t,this.templateBinding=e,this.options=o,this.createPlaceholder=R.createBlockPlaceholder,uc(),this.isItemsBindingVolatile=D.isVolatileBinding(t),this.isTemplateBindingVolatile=D.isVolatileBinding(e)}createBehavior(t){return new bc(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function Xe(i,t,e=fc){const o=typeof t=="function"?t:()=>t;return new Ys(i,o,e)}function oe(i){return i?function(t,e,o){return t.nodeType===1&&t.matches(i)}:function(t,e,o){return t.nodeType===1}}class _r{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=D.getAccessors(t).some(o=>o.name===e),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(De),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class vc extends _r{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Z(i){return typeof i=="string"&&(i={property:i}),new Bs("fast-slotted",vc,i)}class yc extends _r{constructor(t,e){super(t,e),this.observer=null,e.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function vo(i){return typeof i=="string"&&(i={property:i}),new Bs("fast-children",yc,i)}class kt{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const vt=(i,t)=>y`
    <span
        part="end"
        ${z("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${z("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,yt=(i,t)=>y`
    <span
        part="start"
        ${z("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${z("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`,xc=y`
    <span part="end" ${z("endContainer")}>
        <slot
            name="end"
            ${z("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`,wc=y`
    <span part="start" ${z("startContainer")}>
        <slot
            name="start"
            ${z("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        ></slot>
    </span>
`,$c=(i,t)=>y`
    <template class="${e=>e.expanded?"expanded":""}">
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${e=>e.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${z("expandbutton")}
                aria-expanded="${e=>e.expanded}"
                aria-controls="${e=>e.id}-panel"
                id="${e=>e.id}"
                @click="${(e,o)=>e.clickHandler(o.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${yt(i,t)}
            ${vt(i,t)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${t.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${t.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${e=>e.id}-panel"
            role="region"
            aria-labelledby="${e=>e.id}"
        >
            <slot></slot>
        </div>
    </template>
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function a(i,t,e,o){var s=arguments.length,n=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,o);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n}const ls=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,t){return function(e){Reflect.defineMetadata(i,t,e)}},Reflect.defineMetadata=function(i,t,e){let o=ls.get(e);o===void 0&&ls.set(e,o=new Map),o.set(i,t)},Reflect.getOwnMetadata=function(i,t){const e=ls.get(t);if(e!==void 0)return e.get(i)});class kc{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,Gr(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:o,key:s}=this;return this.container=this.key=void 0,o.registerResolver(s,new Lt(s,t,e))}}function di(i){const t=i.slice(),e=Object.keys(i),o=e.length;let s;for(let n=0;n<o;++n)s=e[n],Wr(s)||(t[s]=i[s]);return t}const Cc=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new Lt(i,1,i)},transient(i){return new Lt(i,2,i)}}),cs=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Cc.singleton})}),Mn=new Map;function Bn(i){return t=>Reflect.getOwnMetadata(i,t)}let Nn=null;const K=Object.freeze({createContainer(i){return new yi(null,Object.assign({},cs.default,i))},findResponsibleContainer(i){const t=i.$$container$$;return t&&t.responsibleForOwnerRequests?t:K.findParentContainer(i)},findParentContainer(i){const t=new CustomEvent(Ur,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(t),t.detail.container||K.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,t){return i?i.$$container$$||new yi(i,Object.assign({},cs.default,t,{parentLocator:K.findParentContainer})):Nn||(Nn=new yi(null,Object.assign({},cs.default,t,{parentLocator:()=>null})))},getDesignParamtypes:Bn("design:paramtypes"),getAnnotationParamtypes:Bn("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let t=this.getAnnotationParamtypes(i);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],i),t},getDependencies(i){let t=Mn.get(i);if(t===void 0){const e=i.inject;if(e===void 0){const o=K.getDesignParamtypes(i),s=K.getAnnotationParamtypes(i);if(o===void 0)if(s===void 0){const n=Object.getPrototypeOf(i);typeof n=="function"&&n!==Function.prototype?t=di(K.getDependencies(n)):t=[]}else t=di(s);else if(s===void 0)t=di(o);else{t=di(o);let n=s.length,r;for(let u=0;u<n;++u)r=s[u],r!==void 0&&(t[u]=r);const l=Object.keys(s);n=l.length;let c;for(let u=0;u<n;++u)c=l[u],Wr(c)||(t[c]=s[c])}}else t=di(e);Mn.set(i,t)}return t},defineProperty(i,t,e,o=!1){const s=`$di_${t}`;Reflect.defineProperty(i,t,{get:function(){let n=this[s];if(n===void 0&&(n=(this instanceof HTMLElement?K.findResponsibleContainer(this):K.getOrCreateDOMContainer()).get(e),this[s]=n,o&&this instanceof xe)){const l=this.$fastController,c=()=>{const f=K.findResponsibleContainer(this).get(e),p=this[s];f!==p&&(this[s]=n,l.notify(t))};l.subscribe({handleChange:c},"isConnected")}return n}})},createInterface(i,t){const e=typeof i=="function"?i:t,o=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||Un,s=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,n=function(r,l,c){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(l)K.defineProperty(r,l,n,s);else{const u=K.getOrCreateAnnotationParamTypes(r);u[c]=n}};return n.$isInterface=!0,n.friendlyName=o==null?"(anonymous)":o,e!=null&&(n.register=function(r,l){return e(new kc(r,l!=null?l:n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...i){return function(t,e,o){if(typeof o=="number"){const s=K.getOrCreateAnnotationParamTypes(t),n=i[0];n!==void 0&&(s[o]=n)}else if(e)K.defineProperty(t,e,i[0]);else{const s=o?K.getOrCreateAnnotationParamTypes(o.value):K.getOrCreateAnnotationParamTypes(t);let n;for(let r=0;r<i.length;++r)n=i[r],n!==void 0&&(s[r]=n)}}},transient(i){return i.register=function(e){return Ke.transient(i,i).register(e)},i.registerInRequestor=!1,i},singleton(i,t=Ic){return i.register=function(o){return Ke.singleton(i,i).register(o)},i.registerInRequestor=t.scoped,i}}),qr=K.createInterface("Container"),Fc=K.inject,Ic={scoped:!1};class Lt{constructor(t,e,o){this.key=t,this.strategy=e,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state}case 2:{const o=t.getFactory(this.state);if(o===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,o,s;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(s=(o=(e=t.getResolver(this.state))===null||e===void 0?void 0:e.getFactory)===null||o===void 0?void 0:o.call(e,t))!==null&&s!==void 0?s:null;default:return null}}}function jn(i){return this.get(i)}function Tc(i,t){return t(i)}class Sc{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let o;return e===void 0?o=new this.Type(...this.dependencies.map(jn,t)):o=new this.Type(...this.dependencies.map(jn,t),...e),this.transformers==null?o:this.transformers.reduce(Tc,o)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const Dc={$isResolver:!0,resolve(i,t){return t}};function oo(i){return typeof i.register=="function"}function Rc(i){return oo(i)&&typeof i.registerInRequestor=="boolean"}function _n(i){return Rc(i)&&i.registerInRequestor}function Ec(i){return i.prototype!==void 0}const Ac=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Ur="__DI_LOCATE_PARENT__",hs=new Map;class yi{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(qr,Dc),t instanceof Node&&t.addEventListener(Ur,o=>{o.composedPath()[0]!==this.owner&&(o.detail.container=this,o.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let e,o,s,n,r;const l=this.context;for(let c=0,u=t.length;c<u;++c)if(e=t[c],!!Gn(e))if(oo(e))e.register(this,l);else if(Ec(e))Ke.singleton(e,e).register(this);else for(o=Object.keys(e),n=0,r=o.length;n<r;++n)s=e[o[n]],Gn(s)&&(oo(s)?s.register(this,l):this.register(s));return--this.registerDepth,this}registerResolver(t,e){qi(t);const o=this.resolvers,s=o.get(t);return s==null?o.set(t,e):s instanceof Lt&&s.strategy===4?s.state.push(e):o.set(t,new Lt(t,4,[s,e])),e}registerTransformer(t,e){const o=this.getResolver(t);if(o==null)return!1;if(o.getFactory){const s=o.getFactory(this);return s==null?!1:(s.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(qi(t),t.resolve!==void 0)return t;let o=this,s;for(;o!=null;)if(s=o.resolvers.get(t),s==null){if(o.parent==null){const n=_n(t)?this:o;return e?this.jitRegister(t,n):null}o=o.parent}else return s;return null}has(t,e=!1){return this.resolvers.has(t)?!0:e&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(qi(t),t.$isResolver)return t.resolve(this,this);let e=this,o;for(;e!=null;)if(o=e.resolvers.get(t),o==null){if(e.parent==null){const s=_n(t)?this:e;return o=this.jitRegister(t,s),o.resolve(e,this)}e=e.parent}else return o.resolve(e,this);throw new Error(`Unable to resolve key: ${t}`)}getAll(t,e=!1){qi(t);const o=this;let s=o,n;if(e){let r=De;for(;s!=null;)n=s.resolvers.get(t),n!=null&&(r=r.concat(qn(n,s,o))),s=s.parent;return r}else for(;s!=null;)if(n=s.resolvers.get(t),n==null){if(s=s.parent,s==null)return De}else return qn(n,s,o);return De}getFactory(t){let e=hs.get(t);if(e===void 0){if(Oc(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);hs.set(t,e=new Sc(t,K.getDependencies(t)))}return e}registerFactory(t,e){hs.set(t,e)}createChild(t){return new yi(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(Ac.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(oo(t)){const o=t.register(e);if(!(o instanceof Object)||o.resolve==null){const s=e.resolvers.get(t);if(s!=null)return s;throw new Error("A valid resolver was not returned from the static register method")}return o}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const o=this.config.defaultResolver(t,e);return e.resolvers.set(t,o),o}}}}const ds=new WeakMap;function Gr(i){return function(t,e,o){if(ds.has(o))return ds.get(o);const s=i(t,e,o);return ds.set(o,s),s}}const Ke=Object.freeze({instance(i,t){return new Lt(i,0,t)},singleton(i,t){return new Lt(i,1,t)},transient(i,t){return new Lt(i,2,t)},callback(i,t){return new Lt(i,3,t)},cachedCallback(i,t){return new Lt(i,3,Gr(t))},aliasTo(i,t){return new Lt(t,5,i)}});function qi(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function qn(i,t,e){if(i instanceof Lt&&i.strategy===4){const o=i.state;let s=o.length;const n=new Array(s);for(;s--;)n[s]=o[s].resolve(t,e);return n}return[i.resolve(t,e)]}const Un="(anonymous)";function Gn(i){return typeof i=="object"&&i!==null||typeof i=="function"}const Oc=function(){const i=new WeakMap;let t=!1,e="",o=0;return function(s){return t=i.get(s),t===void 0&&(e=s.toString(),o=e.length,t=o>=29&&o<=100&&e.charCodeAt(o-1)===125&&e.charCodeAt(o-2)<=32&&e.charCodeAt(o-3)===93&&e.charCodeAt(o-4)===101&&e.charCodeAt(o-5)===100&&e.charCodeAt(o-6)===111&&e.charCodeAt(o-7)===99&&e.charCodeAt(o-8)===32&&e.charCodeAt(o-9)===101&&e.charCodeAt(o-10)===118&&e.charCodeAt(o-11)===105&&e.charCodeAt(o-12)===116&&e.charCodeAt(o-13)===97&&e.charCodeAt(o-14)===110&&e.charCodeAt(o-15)===88,i.set(s,t)),t}}(),Ui={};function Wr(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const t=Ui[i];if(t!==void 0)return t;const e=i.length;if(e===0)return Ui[i]=!1;let o=0;for(let s=0;s<e;++s)if(o=i.charCodeAt(s),s===0&&o===48&&e>1||o<48||o>57)return Ui[i]=!1;return Ui[i]=!0}default:return!1}}function Wn(i){return`${i.toLowerCase()}:presentation`}const Gi=new Map,Yr=Object.freeze({define(i,t,e){const o=Wn(i);Gi.get(o)===void 0?Gi.set(o,t):Gi.set(o,!1),e.register(Ke.instance(o,t))},forTag(i,t){const e=Wn(i),o=Gi.get(e);return o===!1?K.findResponsibleContainer(t).get(e):o||null}});class Vc{constructor(t,e){this.template=t||null,this.styles=e===void 0?null:Array.isArray(e)?ct.create(e):e instanceof ct?e:ct.create([e])}applyTo(t){const e=t.$fastController;e.template===null&&(e.template=this.template),e.styles===null&&(e.styles=this.styles)}}class E extends xe{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Yr.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new Lc(this===E?class extends E{}:this,t,e)}}a([v],E.prototype,"template",void 0);a([v],E.prototype,"styles",void 0);function ui(i,t,e){return typeof i=="function"?i(t,e):i}class Lc{constructor(t,e,o){this.type=t,this.elementDefinition=e,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const o=this.definition,s=this.overrideDefinition,r=`${o.prefix||e.elementPrefix}-${o.baseName}`;e.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:l=>{const c=new Vc(ui(o.template,l,o),ui(o.styles,l,o));l.definePresentation(c);let u=ui(o.shadowOptions,l,o);l.shadowRootMode&&(u?s.shadowOptions||(u.mode=l.shadowRootMode):u!==null&&(u={mode:l.shadowRootMode})),l.defineElement({elementOptions:ui(o.elementOptions,l,o),shadowOptions:u,attributes:ui(o.attributes,l,o)})}})}}function J(i,...t){t.forEach(e=>{if(Object.getOwnPropertyNames(e.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(i.prototype,o,Object.getOwnPropertyDescriptor(e.prototype,o))}),e.attributes){const o=i.attributes||[];i.attributes=o.concat(e.attributes)}})}class Ee extends E{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}a([h({attribute:"heading-level",mode:"fromView",converter:$})],Ee.prototype,"headinglevel",void 0);a([h({mode:"boolean"})],Ee.prototype,"expanded",void 0);a([h],Ee.prototype,"id",void 0);J(Ee,kt);const Pc=(i,t)=>y`
    <template>
        <slot ${Z({property:"accordionItems",filter:oe()})}></slot>
        <slot name="item" part="item" ${Z("accordionItems")}></slot>
    </template>
`,et={horizontal:"horizontal",vertical:"vertical"};function Hc(i,t){let e=i.length;for(;e--;)if(t(i[e],e,i))return e;return-1}function zc(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}function ti(...i){return i.every(t=>t instanceof HTMLElement)}function Mc(i,t){return!i||!t||!ti(i)?void 0:Array.from(i.querySelectorAll(t)).filter(o=>o.offsetParent!==null)}function Bc(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let Ie;function Nc(){if(typeof Ie=="boolean")return Ie;if(!zc())return Ie=!1,Ie;const i=document.createElement("style"),t=Bc();t!==null&&i.setAttribute("nonce",t),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),Ie=!0}catch{Ie=!1}finally{document.head.removeChild(i)}return Ie}const Yn="focus",Xn="focusin",ei="focusout",ii="keydown",Qn="resize",Zn="scroll";var Jn;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Jn||(Jn={}));const Ht="ArrowDown",me="ArrowLeft",be="ArrowRight",zt="ArrowUp",se="Enter",ni="Escape",Xt="Home",Qt="End",jc="F2",_c="PageDown",qc="PageUp",ze=" ",yo="Tab",Ge={ArrowDown:Ht,ArrowLeft:me,ArrowRight:be,ArrowUp:zt};var G;(function(i){i.ltr="ltr",i.rtl="rtl"})(G||(G={}));function Xr(i,t,e){return e<i?t:e>t?i:e}function Xs(i,t,e){return Math.min(Math.max(e,i),t)}function Wi(i,t,e=0){return[t,e]=[t,e].sort((o,s)=>o-s),t<=i&&i<e}let Uc=0;function Ci(i=""){return`${i}${Uc++}`}var d;(function(i){i.Canvas="Canvas",i.CanvasText="CanvasText",i.LinkText="LinkText",i.VisitedText="VisitedText",i.ActiveText="ActiveText",i.ButtonFace="ButtonFace",i.ButtonText="ButtonText",i.Field="Field",i.FieldText="FieldText",i.Highlight="Highlight",i.HighlightText="HighlightText",i.GrayText="GrayText"})(d||(d={}));const Kn={single:"single",multi:"multi"};class Qs extends E{constructor(){super(...arguments),this.expandmode=Kn.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change")},this.setItems=()=>{var t;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((e,o)=>{e instanceof Ee&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==o?e.expanded=!1:e.expanded=!0));const s=this.accordionIds[o];e.setAttribute("id",typeof s!="string"?`accordion-${o+1}`:s),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((t=this.findExpandedItem())!==null&&t!==void 0?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((e,o)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{const e=t.target;this.activeid=e.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),e.expanded=!0,e.setAttribute("aria-disabled","true"),this.accordionItems.forEach(o=>{!o.hasAttribute("disabled")&&o.id!==this.activeid&&o.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(e),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case zt:t.preventDefault(),this.adjust(-1);break;case Ht:t.preventDefault(),this.adjust(1);break;case Xt:this.activeItemIndex=0,this.focusItem();break;case Qt:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const e=t.target,o=this.activeItemIndex=Array.from(this.accordionItems).indexOf(e);this.activeItemIndex!==o&&o!==-1&&(this.activeItemIndex=o,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,e){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if(this.accordionItems[t].getAttribute("expanded")==="true")return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,e)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===Kn.single}adjust(t){this.activeItemIndex=Xr(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof Ee&&t.expandbutton.focus()}}a([h({attribute:"expand-mode"})],Qs.prototype,"expandmode",void 0);a([v],Qs.prototype,"accordionItems",void 0);const Qr=(i,t)=>y`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${z("control")}
    >
        ${yt(i,t)}
        <span class="content" part="content">
            <slot ${Z("defaultSlottedContent")}></slot>
        </span>
        ${vt(i,t)}
    </a>
`;class Y{}a([h({attribute:"aria-atomic"})],Y.prototype,"ariaAtomic",void 0);a([h({attribute:"aria-busy"})],Y.prototype,"ariaBusy",void 0);a([h({attribute:"aria-controls"})],Y.prototype,"ariaControls",void 0);a([h({attribute:"aria-current"})],Y.prototype,"ariaCurrent",void 0);a([h({attribute:"aria-describedby"})],Y.prototype,"ariaDescribedby",void 0);a([h({attribute:"aria-details"})],Y.prototype,"ariaDetails",void 0);a([h({attribute:"aria-disabled"})],Y.prototype,"ariaDisabled",void 0);a([h({attribute:"aria-errormessage"})],Y.prototype,"ariaErrormessage",void 0);a([h({attribute:"aria-flowto"})],Y.prototype,"ariaFlowto",void 0);a([h({attribute:"aria-haspopup"})],Y.prototype,"ariaHaspopup",void 0);a([h({attribute:"aria-hidden"})],Y.prototype,"ariaHidden",void 0);a([h({attribute:"aria-invalid"})],Y.prototype,"ariaInvalid",void 0);a([h({attribute:"aria-keyshortcuts"})],Y.prototype,"ariaKeyshortcuts",void 0);a([h({attribute:"aria-label"})],Y.prototype,"ariaLabel",void 0);a([h({attribute:"aria-labelledby"})],Y.prototype,"ariaLabelledby",void 0);a([h({attribute:"aria-live"})],Y.prototype,"ariaLive",void 0);a([h({attribute:"aria-owns"})],Y.prototype,"ariaOwns",void 0);a([h({attribute:"aria-relevant"})],Y.prototype,"ariaRelevant",void 0);a([h({attribute:"aria-roledescription"})],Y.prototype,"ariaRoledescription",void 0);class St extends E{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&((t=this.$fastController.definition.shadowOptions)===null||t===void 0?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}a([h],St.prototype,"download",void 0);a([h],St.prototype,"href",void 0);a([h],St.prototype,"hreflang",void 0);a([h],St.prototype,"ping",void 0);a([h],St.prototype,"referrerpolicy",void 0);a([h],St.prototype,"rel",void 0);a([h],St.prototype,"target",void 0);a([h],St.prototype,"type",void 0);a([v],St.prototype,"defaultSlottedContent",void 0);class xo{}a([h({attribute:"aria-expanded"})],xo.prototype,"ariaExpanded",void 0);J(xo,Y);J(St,kt,xo);const Gc=(i,t)=>y`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${W(e=>e.initialLayoutComplete,y`
                <slot></slot>
            `)}
    </template>
`,Ae=i=>{const t=i.closest("[dir]");return t!==null&&t.dir==="rtl"?G.rtl:G.ltr};class Wc{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var o;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(o=this.observedElements.get(t))===null||o===void 0||o.push(e);return}this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,e)=>{const o=this.observedElements.get(t);if(o!==void 0){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}},this.initializeIntersectionDetector=()=>{!ie.IntersectionObserver||(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;const e=[],o=[];t.forEach(s=>{var n;(n=this.intersectionDetector)===null||n===void 0||n.unobserve(s.target);const r=this.observedElements.get(s.target);r!==void 0&&(r.forEach(l=>{let c=e.indexOf(l);c===-1&&(c=e.length,e.push(l),o.push([])),o[c].push(s)}),this.observedElements.delete(s.target))}),e.forEach((s,n)=>{s(o[n])})},this.initializeIntersectionDetector()}}class M extends E{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=G.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(M.intersectionService.requestPosition(this,this.handleIntersection),M.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&M.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,M.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&M.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&M.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{!this.pendingPositioningUpdate||(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find(n=>n.target===this),o=t.find(n=>n.target===this.anchorElement),s=t.find(n=>n.target===this.viewportElement);return e===void 0||s===void 0||o===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,o.boundingClientRect)||this.isRectDifferent(this.viewportRect,s.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect)?(this.regionRect=e.boundingClientRect,this.anchorRect=o.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(s.boundingClientRect.x+document.documentElement.scrollLeft,s.boundingClientRect.y+document.documentElement.scrollTop,s.boundingClientRect.width,s.boundingClientRect.height):this.viewportRect=s.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{!this.pendingReset||(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=Ae(this),this.startObservers())},this.updateLayout=()=>{let t,e;if(this.horizontalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")e="center";else if(this.horizontalDefaultPosition!=="unset"){let g=this.horizontalDefaultPosition;if(g==="start"||g==="end"){const F=Ae(this);if(F!==this.currentDirection){this.currentDirection=F,this.initialize();return}this.currentDirection===G.ltr?g=g==="start"?"left":"right":g=g==="start"?"right":"left"}switch(g){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end";break}}const r=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,l=this.anchorRect!==void 0?this.anchorRect.left:0,c=this.anchorRect!==void 0?this.anchorRect.right:0,u=this.anchorRect!==void 0?this.anchorRect.width:0,f=this.viewportRect!==void 0?this.viewportRect.left:0,p=this.viewportRect!==void 0?this.viewportRect.right:0;(e===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,l,c,u,f,p)<r)&&(e=this.getAvailableSpace(n[0],l,c,u,f,p)>this.getAvailableSpace(n[1],l,c,u,f,p)?n[0]:n[1])}if(this.verticalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}const r=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,l=this.anchorRect!==void 0?this.anchorRect.top:0,c=this.anchorRect!==void 0?this.anchorRect.bottom:0,u=this.anchorRect!==void 0?this.anchorRect.height:0,f=this.viewportRect!==void 0?this.viewportRect.top:0,p=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,l,c,u,f,p)<r)&&(t=this.getAvailableSpace(n[0],l,c,u,f,p)>this.getAvailableSpace(n[1],l,c,u,f,p)?n[0]:n[1])}const o=this.getNextRegionDimension(e,t),s=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,o),this.setVerticalPosition(t,o),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),s&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let o=0;switch(this.horizontalScaling){case"anchor":case"fill":o=this.horizontalViewportLock?this.viewportRect.width:e.width,this.regionWidth=`${o}px`;break;case"content":o=this.regionRect.width,this.regionWidth="unset";break}let s=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-o,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-o+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(s=(this.anchorRect.width-o)/2,this.translateX=this.baseHorizontalOffset+s,this.horizontalViewportLock){const n=this.anchorRect.left+s,r=this.anchorRect.right-s;n<this.viewportRect.left&&!(r>this.viewportRect.right)?this.translateX=this.translateX-(n-this.viewportRect.left):r>this.viewportRect.right&&!(n<this.viewportRect.left)&&(this.translateX=this.translateX-(r-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let o=0;switch(this.verticalScaling){case"anchor":case"fill":o=this.verticalViewportLock?this.viewportRect.height:e.height,this.regionHeight=`${o}px`;break;case"content":o=this.regionRect.height,this.regionHeight="unset";break}let s=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-o,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-o+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(s=(this.anchorRect.height-o)/2,this.translateY=this.baseVerticalOffset+s,this.verticalViewportLock){const n=this.anchorRect.top+s,r=this.anchorRect.bottom-s;n<this.viewportRect.top&&!(r>this.viewportRect.bottom)?this.translateY=this.translateY-(n-this.viewportRect.top):r>this.viewportRect.bottom&&!(n<this.viewportRect.top)&&(this.translateY=this.translateY-(r-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,o,s,n,r)=>{const l=e-n,c=r-(e+s);switch(t){case"start":return l;case"insetStart":return l+s;case"insetEnd":return c+s;case"end":return c;case"center":return Math.min(l,c)*2+s}},this.getNextRegionDimension=(t,e)=>{const o={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?o.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(o.width=this.anchorRect!==void 0?this.anchorRect.width:0),e!==void 0&&this.verticalScaling==="fill"?o.height=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(o.height=this.anchorRect!==void 0?this.anchorRect.height:0),o},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Qn,this.update,{passive:!0}),window.addEventListener(Zn,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Qn,this.update),window.removeEventListener(Zn,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),e==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),R.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}M.intersectionService=new Wc;a([h],M.prototype,"anchor",void 0);a([h],M.prototype,"viewport",void 0);a([h({attribute:"horizontal-positioning-mode"})],M.prototype,"horizontalPositioningMode",void 0);a([h({attribute:"horizontal-default-position"})],M.prototype,"horizontalDefaultPosition",void 0);a([h({attribute:"horizontal-viewport-lock",mode:"boolean"})],M.prototype,"horizontalViewportLock",void 0);a([h({attribute:"horizontal-inset",mode:"boolean"})],M.prototype,"horizontalInset",void 0);a([h({attribute:"horizontal-threshold"})],M.prototype,"horizontalThreshold",void 0);a([h({attribute:"horizontal-scaling"})],M.prototype,"horizontalScaling",void 0);a([h({attribute:"vertical-positioning-mode"})],M.prototype,"verticalPositioningMode",void 0);a([h({attribute:"vertical-default-position"})],M.prototype,"verticalDefaultPosition",void 0);a([h({attribute:"vertical-viewport-lock",mode:"boolean"})],M.prototype,"verticalViewportLock",void 0);a([h({attribute:"vertical-inset",mode:"boolean"})],M.prototype,"verticalInset",void 0);a([h({attribute:"vertical-threshold"})],M.prototype,"verticalThreshold",void 0);a([h({attribute:"vertical-scaling"})],M.prototype,"verticalScaling",void 0);a([h({attribute:"fixed-placement",mode:"boolean"})],M.prototype,"fixedPlacement",void 0);a([h({attribute:"auto-update-mode"})],M.prototype,"autoUpdateMode",void 0);a([v],M.prototype,"anchorElement",void 0);a([v],M.prototype,"viewportElement",void 0);a([v],M.prototype,"initialLayoutComplete",void 0);const Yc=(i,t)=>y`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;class Oi extends E{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,e=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?e:`${e} ${t}`}}}a([h({attribute:"fill"})],Oi.prototype,"fill",void 0);a([h({attribute:"color"})],Oi.prototype,"color",void 0);a([h({mode:"boolean"})],Oi.prototype,"circular",void 0);const Xc=(i,t)=>y`
    <div role="listitem" class="listitem" part="listitem">
        ${W(e=>e.href&&e.href.length>0,y`
                ${Qr(i,t)}
            `)}
        ${W(e=>!e.href,y`
                ${yt(i,t)}
                <slot></slot>
                ${vt(i,t)}
            `)}
        ${W(e=>e.separator,y`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${t.separator||""}</slot>
                </span>
            `)}
    </div>
`;class Fi extends St{constructor(){super(...arguments),this.separator=!0}}a([v],Fi.prototype,"separator",void 0);J(Fi,kt,xo);const Qc=(i,t)=>y`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${Z({property:"slottedBreadcrumbItems",filter:oe()})}
            ></slot>
        </div>
    </template>
`;class Zr extends E{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(e=>{const o=e===t;this.setItemSeparator(e,o),this.setAriaCurrent(e,o)})}}setItemSeparator(t,e){t instanceof Fi&&(t.separator=!e)}findChildWithHref(t){var e,o;return t.childElementCount>0?t.querySelector("a[href]"):!((e=t.shadowRoot)===null||e===void 0)&&e.childElementCount?(o=t.shadowRoot)===null||o===void 0?void 0:o.querySelector("a[href]"):null}setAriaCurrent(t,e){const o=this.findChildWithHref(t);o===null&&t.hasAttribute("href")&&t instanceof Fi?e?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"):o!==null&&(e?o.setAttribute("aria-current","page"):o.removeAttribute("aria-current"))}}a([v],Zr.prototype,"slottedBreadcrumbItems",void 0);const Zc=(i,t)=>y`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${z("control")}
    >
        ${yt(i,t)}
        <span class="content" part="content">
            <slot ${Z("defaultSlottedContent")}></slot>
        </span>
        ${vt(i,t)}
    </button>
`,tr="form-associated-proxy",er="ElementInternals",ir=er in window&&"setFormValue"in window[er].prototype,or=new WeakMap;function ne(i){const t=class extends i{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return ir}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,o=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=e?o.concat(Array.from(e)):o;return Object.freeze(s)}else return De}valueChanged(e,o){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,o){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),R.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,o){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,o){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),R.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!ir)return null;let e=or.get(this);return e||(e=this.attachInternals(),or.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,o,s){this.elementInternals?this.elementInternals.setValidity(e,o,s):typeof o=="string"&&this.proxy.setCustomValidity(o)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(o=>this.proxy.addEventListener(o,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",tr),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",tr)),(e=this.shadowRoot)===null||e===void 0||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),(e=this.shadowRoot)===null||e===void 0||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,o){this.elementInternals&&this.elementInternals.setFormValue(e,o||e)}_keypressHandler(e){switch(e.key){case se:if(this.form instanceof HTMLFormElement){const o=this.form.querySelector("[type=submit]");o==null||o.click()}break}}stopPropagation(e){e.stopPropagation()}};return h({mode:"boolean"})(t.prototype,"disabled"),h({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),h({attribute:"current-value"})(t.prototype,"currentValue"),h(t.prototype,"name"),h({mode:"boolean"})(t.prototype,"required"),v(t.prototype,"value"),t}function Zs(i){class t extends ne(i){}class e extends t{constructor(...s){super(s),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(s,n){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),s!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(s,n){this.checked=this.currentChecked}updateForm(){const s=this.checked?this.value:null;this.setFormValue(s,s)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return h({attribute:"checked",mode:"boolean"})(e.prototype,"checkedAttribute"),h({attribute:"current-checked",converter:Ai})(e.prototype,"currentChecked"),v(e.prototype,"defaultChecked"),v(e.prototype,"checked"),e}class Jc extends E{}class Kc extends ne(Jc){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Dt extends Kc{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&((e=this.defaultSlottedContent)===null||e===void 0?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&((t=this.$fastController.definition.shadowOptions)===null||t===void 0?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),e==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),e==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(o=>{o.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(o=>{o.removeEventListener("click",this.handleClick)})}}a([h({mode:"boolean"})],Dt.prototype,"autofocus",void 0);a([h({attribute:"form"})],Dt.prototype,"formId",void 0);a([h],Dt.prototype,"formaction",void 0);a([h],Dt.prototype,"formenctype",void 0);a([h],Dt.prototype,"formmethod",void 0);a([h({mode:"boolean"})],Dt.prototype,"formnovalidate",void 0);a([h],Dt.prototype,"formtarget",void 0);a([h],Dt.prototype,"type",void 0);a([v],Dt.prototype,"defaultSlottedContent",void 0);class wo{}a([h({attribute:"aria-expanded"})],wo.prototype,"ariaExpanded",void 0);a([h({attribute:"aria-pressed"})],wo.prototype,"ariaPressed",void 0);J(wo,Y);J(Dt,kt,wo);class th{constructor(t){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,t)for(const e in t){const o=t[e];e==="date"?this.date=this.getDateObject(o):this[e]=o}}getDateObject(t){if(typeof t=="string"){const e=t.split(/[/-]/);return e.length<3?new Date:new Date(parseInt(e[2],10),parseInt(e[0],10)-1,parseInt(e[1],10))}else if("day"in t&&"month"in t&&"year"in t){const{day:e,month:o,year:s}=t;return new Date(s,o-1,e)}return t}getDate(t=this.date,e={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},o=this.locale){const s=this.getDateObject(t),n=Object.assign({timeZone:"utc"},e);return new Intl.DateTimeFormat(o,n).format(s)}getDay(t=this.date.getDate(),e=this.dayFormat,o=this.locale){return this.getDate({month:1,day:t,year:2020},{day:e},o)}getMonth(t=this.date.getMonth()+1,e=this.monthFormat,o=this.locale){return this.getDate({month:t,day:2,year:2020},{month:e},o)}getYear(t=this.date.getFullYear(),e=this.yearFormat,o=this.locale){return this.getDate({month:2,day:2,year:t},{year:e},o)}getWeekday(t=0,e=this.weekdayFormat,o=this.locale){const s=`1-${t+1}-2017`;return this.getDate(s,{weekday:e},o)}getWeekdays(t=this.weekdayFormat,e=this.locale){return Array(7).fill(null).map((o,s)=>this.getWeekday(s,t,e))}}class Mt extends E{constructor(){super(...arguments),this.dateFormatter=new th,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,e=this.year){const o=c=>new Date(c.getFullYear(),c.getMonth(),1).getDay(),s=c=>{const u=new Date(c.getFullYear(),c.getMonth()+1,1);return new Date(u.getTime()-this.oneDayInMs).getDate()},n=new Date(e,t-1),r=new Date(e,t),l=new Date(e,t-2);return{length:s(n),month:t,start:o(n),year:e,previous:{length:s(l),month:l.getMonth()+1,start:o(l),year:l.getFullYear()},next:{length:s(r),month:r.getMonth()+1,start:o(r),year:r.getFullYear()}}}getDays(t=this.getMonthInfo(),e=this.minWeeks){e=e>10?10:e;const{start:o,length:s,previous:n,next:r}=t,l=[];let c=1-o;for(;c<s+1||l.length<e||l[l.length-1].length%7!==0;){const{month:u,year:f}=c<1?n:c>s?r:t,p=c<1?n.length+c:c>s?c-s:c,g=`${u}-${p}-${f}`,F=this.dateInString(g,this.disabledDates),S=this.dateInString(g,this.selectedDates),H={day:p,month:u,year:f,disabled:F,selected:S},Q=l[l.length-1];l.length===0||Q.length%7===0?l.push([H]):Q.push(H),c++}return l}dateInString(t,e){const o=e.split(",").map(s=>s.trim());return t=typeof t=="string"?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,o.some(s=>s===t)}getDayClassNames(t,e){const{day:o,month:s,year:n,disabled:r,selected:l}=t,c=e===`${s}-${o}-${n}`,u=this.month!==s;return["day",c&&"today",u&&"inactive",r&&"disabled",l&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const t=this.dateFormatter.getWeekdays().map(e=>({text:e}));if(this.weekdayFormat!=="long"){const e=this.dateFormatter.getWeekdays("long");t.forEach((o,s)=>{o.abbr=e[s]})}return t}handleDateSelect(t,e){t.preventDefault,this.$emit("dateselected",e)}handleKeydown(t,e){return t.key===se&&this.handleDateSelect(t,e),!0}}a([h({mode:"boolean"})],Mt.prototype,"readonly",void 0);a([h],Mt.prototype,"locale",void 0);a([h({converter:$})],Mt.prototype,"month",void 0);a([h({converter:$})],Mt.prototype,"year",void 0);a([h({attribute:"day-format",mode:"fromView"})],Mt.prototype,"dayFormat",void 0);a([h({attribute:"weekday-format",mode:"fromView"})],Mt.prototype,"weekdayFormat",void 0);a([h({attribute:"month-format",mode:"fromView"})],Mt.prototype,"monthFormat",void 0);a([h({attribute:"year-format",mode:"fromView"})],Mt.prototype,"yearFormat",void 0);a([h({attribute:"min-weeks",converter:$})],Mt.prototype,"minWeeks",void 0);a([h({attribute:"disabled-dates"})],Mt.prototype,"disabledDates",void 0);a([h({attribute:"selected-dates"})],Mt.prototype,"selectedDates",void 0);const Yi={none:"none",default:"default",sticky:"sticky"},pe={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},xi={default:"default",header:"header",stickyHeader:"sticky-header"};class dt extends E{constructor(){super(...arguments),this.rowType=xi.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Ys(t=>t.columnDefinitions,t=>t.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(ei,this.handleFocusout),this.addEventListener(ii,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(ei,this.handleFocusout),this.removeEventListener(ii,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let e=0;switch(t.key){case me:e=Math.max(0,this.focusColumnIndex-1),this.cellElements[e].focus(),t.preventDefault();break;case be:e=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[e].focus(),t.preventDefault();break;case Xt:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case Qt:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===xi.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===xi.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}a([h({attribute:"grid-template-columns"})],dt.prototype,"gridTemplateColumns",void 0);a([h({attribute:"row-type"})],dt.prototype,"rowType",void 0);a([v],dt.prototype,"rowData",void 0);a([v],dt.prototype,"columnDefinitions",void 0);a([v],dt.prototype,"cellItemTemplate",void 0);a([v],dt.prototype,"headerCellItemTemplate",void 0);a([v],dt.prototype,"rowIndex",void 0);a([v],dt.prototype,"isActiveRow",void 0);a([v],dt.prototype,"activeCellItemTemplate",void 0);a([v],dt.prototype,"defaultCellItemTemplate",void 0);a([v],dt.prototype,"defaultHeaderCellItemTemplate",void 0);a([v],dt.prototype,"cellElements",void 0);function eh(i){const t=i.tagFor(dt);return y`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,o)=>o.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,o)=>o.parent.headerCellItemTemplate}"
    ></${t}>
`}const ih=(i,t)=>{const e=eh(i),o=i.tagFor(dt);return y`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>o}"
            :defaultRowItemTemplate="${e}"
            ${vo({property:"rowElements",filter:oe("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class rt extends E{constructor(){super(),this.noTabbing=!1,this.generateHeader=Yi.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,e,o)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const s=Math.max(0,Math.min(this.rowElements.length-1,t)),r=this.rowElements[s].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),l=Math.max(0,Math.min(r.length-1,e)),c=r[l];o&&this.scrollHeight!==this.clientHeight&&(s<this.focusRowIndex&&this.scrollTop>0||s>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&c.scrollIntoView({block:"center",inline:"center"}),c.focus()},this.onChildListChange=(t,e)=>{t&&t.length&&(t.forEach(o=>{o.addedNodes.forEach(s=>{s.nodeType===1&&s.getAttribute("role")==="row"&&(s.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,R.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let t=this.gridTemplateColumns;if(t===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}t=this.generatedGridTemplateColumns}this.rowElements.forEach((e,o)=>{const s=e;s.rowIndex=o,s.gridTemplateColumns=t,this.columnDefinitionsStale&&(s.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let e="";return t.forEach(o=>{e=`${e}${e===""?"":" "}1fr`}),e}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=rt.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=rt.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Ys(t=>t.rowsData,t=>t.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Yn,this.handleFocus),this.addEventListener(ii,this.handleKeydown),this.addEventListener(ei,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),R.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Yn,this.handleFocus),this.removeEventListener(ii,this.handleKeydown),this.removeEventListener(ei,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;const e=t.target;this.focusRowIndex=this.rowElements.indexOf(e),this.focusColumnIndex=e.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(t){if(t.defaultPrevented)return;let e;const o=this.rowElements.length-1,s=this.offsetHeight+this.scrollTop,n=this.rowElements[o];switch(t.key){case zt:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Ht:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case qc:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex-1,e;e>=0;e--){const r=this.rowElements[e];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case _c:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=o||n.offsetTop+n.offsetHeight<=s){this.focusOnCell(o,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex+1,e;e<=o;e++){const r=this.rowElements[e];if(r.offsetTop+r.offsetHeight>s){let l=0;this.generateHeader===Yi.sticky&&this.generatedHeader!==null&&(l=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-l;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case Xt:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case Qt:t.ctrlKey&&this.columnDefinitions!==null&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,R.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Yi.none&&this.rowsData.length>0){const t=document.createElement(this.rowElementTag);this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Yi.sticky?xi.stickyHeader:xi.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(t,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}rt.generateColumns=i=>Object.getOwnPropertyNames(i).map((t,e)=>({columnDataKey:t,gridColumn:`${e}`}));a([h({attribute:"no-tabbing",mode:"boolean"})],rt.prototype,"noTabbing",void 0);a([h({attribute:"generate-header"})],rt.prototype,"generateHeader",void 0);a([h({attribute:"grid-template-columns"})],rt.prototype,"gridTemplateColumns",void 0);a([v],rt.prototype,"rowsData",void 0);a([v],rt.prototype,"columnDefinitions",void 0);a([v],rt.prototype,"rowItemTemplate",void 0);a([v],rt.prototype,"cellItemTemplate",void 0);a([v],rt.prototype,"headerCellItemTemplate",void 0);a([v],rt.prototype,"focusRowIndex",void 0);a([v],rt.prototype,"focusColumnIndex",void 0);a([v],rt.prototype,"defaultRowItemTemplate",void 0);a([v],rt.prototype,"rowElementTag",void 0);a([v],rt.prototype,"rowElements",void 0);const oh=y`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,sh=y`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;class re extends E{constructor(){super(...arguments),this.cellType=pe.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,e){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(Xn,this.handleFocusin),this.addEventListener(ei,this.handleFocusout),this.addEventListener(ii,this.handleKeydown),this.style.gridColumn=`${((t=this.columnDefinition)===null||t===void 0?void 0:t.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Xn,this.handleFocusin),this.removeEventListener(ei,this.handleFocusout),this.removeEventListener(ii,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case pe.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(t){if(!(t.defaultPrevented||this.columnDefinition===null||this.cellType===pe.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===pe.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(t.key){case se:case jc:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case pe.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break}break;case ni:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),t.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case pe.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=sh.render(this,this);break;case void 0:case pe.rowHeader:case pe.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=oh.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}a([h({attribute:"cell-type"})],re.prototype,"cellType",void 0);a([h({attribute:"grid-column"})],re.prototype,"gridColumn",void 0);a([v],re.prototype,"rowData",void 0);a([v],re.prototype,"columnDefinition",void 0);function nh(i){const t=i.tagFor(re);return y`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,o)=>o.index+1}"
        :rowData="${(e,o)=>o.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}function rh(i){const t=i.tagFor(re);return y`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,o)=>o.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}const ah=(i,t)=>{const e=nh(i),o=rh(i);return y`
        <template
            role="row"
            class="${s=>s.rowType!=="default"?s.rowType:""}"
            :defaultCellItemTemplate="${e}"
            :defaultHeaderCellItemTemplate="${o}"
            ${vo({property:"cellElements",filter:oe('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Z("slottedCellElements")}></slot>
        </template>
    `},lh=(i,t)=>y`
        <template
            tabindex="-1"
            role="${e=>!e.cellType||e.cellType==="default"?"gridcell":e.cellType}"
            class="
            ${e=>e.cellType==="columnheader"?"column-header":e.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,ch=y`
    <div
        class="title"
        part="title"
        aria-label="${i=>i.dateFormatter.getDate(`${i.month}-2-${i.year}`,{month:"long",year:"numeric"})}"
    >
        <span part="month">
            ${i=>i.dateFormatter.getMonth(i.month)}
        </span>
        <span part="year">${i=>i.dateFormatter.getYear(i.year)}</span>
    </div>
`,hh=i=>{const t=i.tagFor(re);return y`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(e,o)=>o.index+1}"
            abbr="${e=>e.abbr}"
        >
            ${e=>e.text}
        </${t}>
    `},dh=(i,t)=>{const e=i.tagFor(re);return y`
        <${e}
            class="${(o,s)=>s.parentContext.parent.getDayClassNames(o,t)}"
            part="day"
            tabindex="-1"
            role="gridcell"
            grid-column="${(o,s)=>s.index+1}"
            @click="${(o,s)=>s.parentContext.parent.handleDateSelect(s.event,o)}"
            @keydown="${(o,s)=>s.parentContext.parent.handleKeydown(s.event,o)}"
            aria-label="${(o,s)=>s.parentContext.parent.dateFormatter.getDate(`${o.month}-${o.day}-${o.year}`,{month:"long",day:"numeric"})}"
        >
            <div
                class="date"
                part="${o=>t===`${o.month}-${o.day}-${o.year}`?"today":"date"}"
            >
                ${(o,s)=>s.parentContext.parent.dateFormatter.getDay(o.day)}
            </div>
            <slot name="${o=>o.month}-${o=>o.day}-${o=>o.year}"></slot>
        </${e}>
    `},uh=(i,t)=>{const e=i.tagFor(dt);return y`
        <${e}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${Xe(o=>o,dh(i,t),{positioning:!0})}
        </${e}>
    `},ph=(i,t)=>{const e=i.tagFor(rt),o=i.tagFor(dt);return y`
    <${e} class="days interact" part="days" generate-header="none">
        <${o}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${Xe(s=>s.getWeekdayText(),hh(i),{positioning:!0})}
        </${o}>
        ${Xe(s=>s.getDays(),uh(i,t))}
    </${e}>
`},fh=i=>y`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${Xe(t=>t.getWeekdayText(),y`
                        <div class="week-day" part="week-day" abbr="${t=>t.abbr}">
                            ${t=>t.text}
                        </div>
                    `)}
            </div>
            ${Xe(t=>t.getDays(),y`
                    <div class="week">
                        ${Xe(t=>t,y`
                                <div
                                    class="${(t,e)=>e.parentContext.parent.getDayClassNames(t,i)}"
                                    part="day"
                                    aria-label="${(t,e)=>e.parentContext.parent.dateFormatter.getDate(`${t.month}-${t.day}-${t.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${t=>i===`${t.month}-${t.day}-${t.year}`?"today":"date"}"
                                    >
                                        ${(t,e)=>e.parentContext.parent.dateFormatter.getDay(t.day)}
                                    </div>
                                    <slot
                                        name="${t=>t.month}-${t=>t.day}-${t=>t.year}"
                                    ></slot>
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `,gh=(i,t)=>{var e;const o=new Date,s=`${o.getMonth()+1}-${o.getDate()}-${o.getFullYear()}`;return y`
        <template>
            ${wc}
            ${t.title instanceof Function?t.title(i,t):(e=t.title)!==null&&e!==void 0?e:""}
            <slot></slot>
            ${W(n=>n.readonly===!1,ph(i,s))}
            ${W(n=>n.readonly===!0,fh(s))}
            ${xc}
        </template>
    `},mh=(i,t)=>y`
    <slot></slot>
`;class Jr extends E{}const bh=(i,t)=>y`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,o)=>e.keypressHandler(o.event)}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Z("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class vh extends E{}class yh extends Zs(vh){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class $o extends yh{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{switch(t.key){case ze:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}a([h({attribute:"readonly",mode:"boolean"})],$o.prototype,"readOnly",void 0);a([v],$o.prototype,"defaultSlottedNodes",void 0);a([v],$o.prototype,"indeterminate",void 0);function Kr(i){return ti(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class Zt extends E{constructor(t,e,o,s){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),e&&(this.initialValue=e),o&&(this.defaultSelected=o),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,e){if(typeof e=="boolean"){this.ariaChecked=e?"true":"false";return}this.ariaChecked=null}contentChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return(t=this.value)!==null&&t!==void 0?t:this.text}get text(){var t,e;return(e=(t=this.textContent)===null||t===void 0?void 0:t.replace(/\s+/g," ").trim())!==null&&e!==void 0?e:""}set value(t){const e=`${t!=null?t:""}`;this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=e),D.notify(this,"value")}get value(){var t;return D.track(this,"value"),(t=this._value)!==null&&t!==void 0?t:this.text}get form(){return this.proxy?this.proxy.form:null}}a([v],Zt.prototype,"checked",void 0);a([v],Zt.prototype,"content",void 0);a([v],Zt.prototype,"defaultSelected",void 0);a([h({mode:"boolean"})],Zt.prototype,"disabled",void 0);a([h({attribute:"selected",mode:"boolean"})],Zt.prototype,"selectedAttribute",void 0);a([v],Zt.prototype,"selected",void 0);a([h({attribute:"value",mode:"fromView"})],Zt.prototype,"initialValue",void 0);class ri{}a([v],ri.prototype,"ariaChecked",void 0);a([v],ri.prototype,"ariaPosInSet",void 0);a([v],ri.prototype,"ariaSelected",void 0);a([v],ri.prototype,"ariaSetSize",void 0);J(ri,Y);J(Zt,kt,ri);class ht extends E{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return(t=this.selectedOptions[0])!==null&&t!==void 0?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){var t,e;return(e=(t=this.options)===null||t===void 0?void 0:t.length)!==null&&e!==void 0?e:0}get options(){return D.track(this,"options"),this._options}set options(t){this._options=t,D.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&t!==null&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e=new RegExp(`^${t}`,"gi");return this.options.filter(o=>o.text.trim().match(e))}getSelectableIndex(t=this.selectedIndex,e){const o=t>e?-1:t<e?1:0,s=t+o;let n=null;switch(o){case-1:{n=this.options.reduceRight((r,l,c)=>!r&&!l.disabled&&c<s?l:r,n);break}case 1:{n=this.options.reduce((r,l,c)=>!r&&!l.disabled&&c>s?l:r,n);break}}return this.options.indexOf(n)}handleChange(t,e){switch(e){case"selected":{ht.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions();break}}}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,ht.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case Xt:{t.shiftKey||(t.preventDefault(),this.selectFirstOption());break}case Ht:{t.shiftKey||(t.preventDefault(),this.selectNextOption());break}case zt:{t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break}case Qt:{t.preventDefault(),this.selectLastOption();break}case yo:return this.focusAndScrollOptionIntoView(),!0;case se:case ni:return!0;case ze:if(this.typeaheadExpired)return!0;default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null}selectedIndexChanged(t,e){var o;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(((o=this.options[this.selectedIndex])===null||o===void 0?void 0:o.disabled)&&typeof t=="number"){const s=this.getSelectableIndex(t,e),n=s>-1?s:t;this.selectedIndex=n,e===n&&this.selectedIndexChanged(e,n);return}this.setSelectedOptions()}selectedOptionsChanged(t,e){var o;const s=e.filter(ht.slottedOptionFilter);(o=this.options)===null||o===void 0||o.forEach(n=>{const r=D.getNotifier(n);r.unsubscribe(this,"selected"),n.selected=s.includes(n),r.subscribe(this,"selected")})}selectFirstOption(){var t,e;this.disabled||(this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(o=>!o.disabled))!==null&&e!==void 0?e:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Hc(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,e;this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(o=>o.defaultSelected))!==null&&e!==void 0?e:-1}setSelectedOptions(){var t,e,o;!((t=this.options)===null||t===void 0)&&t.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(o=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,e){this.options=e.reduce((s,n)=>(Kr(n)&&s.push(n),s),[]);const o=`${this.options.length}`;this.options.forEach((s,n)=>{s.id||(s.id=Ci("option-")),s.ariaPosInSet=`${n+1}`,s.ariaSetSize=o}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const o=this.getTypeaheadMatches();if(o.length){const s=this.options.indexOf(o[0]);s>-1&&(this.selectedIndex=s)}this.typeaheadExpired=!1}}}ht.slottedOptionFilter=i=>Kr(i)&&!i.hidden;ht.TYPE_AHEAD_TIMEOUT_MS=1e3;a([h({mode:"boolean"})],ht.prototype,"disabled",void 0);a([v],ht.prototype,"selectedIndex",void 0);a([v],ht.prototype,"selectedOptions",void 0);a([v],ht.prototype,"slottedOptions",void 0);a([v],ht.prototype,"typeaheadBuffer",void 0);class we{}a([v],we.prototype,"ariaActiveDescendant",void 0);a([v],we.prototype,"ariaDisabled",void 0);a([v],we.prototype,"ariaExpanded",void 0);a([v],we.prototype,"ariaMultiSelectable",void 0);J(we,Y);J(ht,we);const Qe={above:"above",below:"below"};class xh extends ht{}class wh extends ne(xh){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Xi={inline:"inline",list:"list",both:"both",none:"none"};class ae extends wh{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=Ci("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}get isAutocompleteInline(){return this.autocomplete===Xi.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Xi.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Xi.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),R.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return D.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,D.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}get value(){return D.track(this,"value"),this._value}set value(t){var e,o,s;const n=`${this._value}`;if(this.$fastController.isConnected&&this.options){const r=this.options.findIndex(u=>u.text.toLowerCase()===t.toLowerCase()),l=(e=this.options[this.selectedIndex])===null||e===void 0?void 0:e.text,c=(o=this.options[r])===null||o===void 0?void 0:o.text;this.selectedIndex=l!==c?r:this.selectedIndex,t=((s=this.firstSelectedOption)===null||s===void 0?void 0:s.text)||t}n!==t&&(this._value=t,super.valueChanged(n,t),D.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(!e||e.disabled)return;this.selectedOptions=[e],this.control.value=e.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===Xi.none)&&(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(e=>{e.hidden=!this.filteredOptions.includes(e)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var t;(t=this.firstSelectedOption)===null||t===void 0||t.scrollIntoView({block:"nearest"})}))}focusoutHandler(t){if(this.updateValue(),!this.open)return!0;const e=t.relatedTarget;if(this.isSameNode(e)){this.focus();return}(!this.options||!this.options.includes(e))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),t.inputType==="deleteContentBackward"||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&this.filteredOptions.length&&(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection())}keydownHandler(t){const e=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(e){case"Enter":{this.updateValue(!0),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.updateValue(),!this.open)return!0;t.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&(this.updateValue(),this.setInlineSelection());break}default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(t,e){if(this.$fastController.isConnected){if(e=Xs(-1,this.options.length-1,e),e!==this.selectedIndex){this.selectedIndex=e;return}super.selectedIndexChanged(t,e)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(e=>e.getAttribute("selected")!==null||e.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInlineSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}setPositioning(){const t=this.getBoundingClientRect(),o=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>o?Qe.above:Qe.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Qe.above?~~t.top:~~o}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this._options.forEach(o=>{o.selected=e.includes(o)})}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.updateValue()}updateValue(t){var e;this.$fastController.isConnected&&(this.value=((e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)||this.control.value),t&&this.$emit("change")}clearSelectionRange(){const t=this.control.value.length;this.control.setSelectionRange(t,t)}}a([h({attribute:"autocomplete",mode:"fromView"})],ae.prototype,"autocomplete",void 0);a([v],ae.prototype,"maxHeight",void 0);a([h({attribute:"open",mode:"boolean"})],ae.prototype,"open",void 0);a([h],ae.prototype,"placeholder",void 0);a([h({attribute:"position"})],ae.prototype,"positionAttribute",void 0);a([v],ae.prototype,"position",void 0);class ko{}a([v],ko.prototype,"ariaAutoComplete",void 0);a([v],ko.prototype,"ariaControls",void 0);J(ko,we);J(ae,kt,ko);const $h=(i,t)=>y`
    <template
        aria-disabled="${e=>e.ariaDisabled}"
        autocomplete="${e=>e.autocomplete}"
        class="${e=>e.open?"open":""} ${e=>e.disabled?"disabled":""} ${e=>e.position}"
        ?open="${e=>e.open}"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        @focusout="${(e,o)=>e.focusoutHandler(o.event)}"
        @keydown="${(e,o)=>e.keydownHandler(o.event)}"
    >
        <div class="control" part="control">
            ${yt(i,t)}
            <slot name="control">
                <input
                    aria-activedescendant="${e=>e.open?e.ariaActiveDescendant:null}"
                    aria-autocomplete="${e=>e.ariaAutoComplete}"
                    aria-controls="${e=>e.ariaControls}"
                    aria-disabled="${e=>e.ariaDisabled}"
                    aria-expanded="${e=>e.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${e=>e.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${e=>e.disabled}"
                    :value="${e=>e.value}"
                    @input="${(e,o)=>e.inputHandler(o.event)}"
                    @keyup="${(e,o)=>e.keyupHandler(o.event)}"
                    ${z("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${t.indicator||""}
                    </slot>
                </div>
            </slot>
            ${vt(i,t)}
        </div>
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!e.open}"
            ${z("listbox")}
        >
            <slot
                ${Z({filter:ht.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function lo(i){const t=i.parentElement;if(t)return t;{const e=i.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function kh(i,t){let e=t;for(;e!==null;){if(e===i)return!0;e=lo(e)}return!1}const te=document.createElement("div");function Ch(i){return i instanceof xe}class Js{setProperty(t,e){R.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){R.queueUpdate(()=>this.target.removeProperty(t))}}class Fh extends Js{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(ct.create([e]))}}class Ih extends Js{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class Th extends Js{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class ta{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),D.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(this.target!==null)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),R.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,e)})}removeProperty(t){this.store.delete(t),R.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,e){const{sheet:o}=this.style;if(o){const s=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[s].style}else this.target=null}}a([v],ta.prototype,"target",void 0);class Sh{constructor(t){this.target=t.style}setProperty(t,e){R.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){R.queueUpdate(()=>this.target.removeProperty(t))}}class at{setProperty(t,e){at.properties[t]=e;for(const o of at.roots.values())We.getOrCreate(at.normalizeRoot(o)).setProperty(t,e)}removeProperty(t){delete at.properties[t];for(const e of at.roots.values())We.getOrCreate(at.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=at;if(!e.has(t)){e.add(t);const o=We.getOrCreate(this.normalizeRoot(t));for(const s in at.properties)o.setProperty(s,at.properties[s])}}static unregisterRoot(t){const{roots:e}=at;if(e.has(t)){e.delete(t);const o=We.getOrCreate(at.normalizeRoot(t));for(const s in at.properties)o.removeProperty(s)}}static normalizeRoot(t){return t===te?document:t}}at.roots=new Set;at.properties={};const us=new WeakMap,Dh=R.supportsAdoptedStyleSheets?Fh:ta,We=Object.freeze({getOrCreate(i){if(us.has(i))return us.get(i);let t;return i===te?t=new at:i instanceof Document?t=R.supportsAdoptedStyleSheets?new Ih:new Th:Ch(i)?t=new Dh(i):t=new Sh(i),us.set(i,t),t}});class gt extends Ws{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=gt.uniqueId(),gt.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new gt({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return gt.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=it.getOrCreate(t).get(this);if(e!==void 0)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof gt&&(e=this.alias(e)),it.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),it.existsFor(t)&&it.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(te,t),this}subscribe(t,e){const o=this.getOrCreateSubscriberSet(e);e&&!it.existsFor(e)&&it.getOrCreate(e),o.has(t)||o.add(t)}unsubscribe(t,e){const o=this.subscribers.get(e||this);o&&o.has(t)&&o.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(o=>o.handleChange(e)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(o=>o.handleChange(e))}alias(t){return e=>t.getValueFor(e)}}gt.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})();gt.tokensById=new Map;class Rh{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:o}=t;this.add(e,o)}add(t,e){We.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(it.getOrCreate(e).get(t)))}remove(t,e){We.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}}class Eh{constructor(t,e,o){this.source=t,this.token=e,this.node=o,this.dependencies=new Set,this.observer=D.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,Ye))}}class Ah{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),D.getNotifier(this).notify(t.id))}get(t){return D.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const pi=new WeakMap,fi=new WeakMap;class it{constructor(t){this.target=t,this.store=new Ah,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,o)=>{const s=gt.getTokenById(o);if(s&&(s.notify(this.target),gt.isCSSDesignToken(s))){const n=this.parent,r=this.isReflecting(s);if(n){const l=n.get(s),c=e.get(s);l!==c&&!r?this.reflectToCSS(s):l===c&&r&&this.stopReflectToCSS(s)}else r||this.reflectToCSS(s)}}},pi.set(t,this),D.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof xe?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return pi.get(t)||new it(t)}static existsFor(t){return pi.has(t)}static findParent(t){if(te!==t.target){let e=lo(t.target);for(;e!==null;){if(pi.has(e))return pi.get(e);e=lo(e)}return it.getOrCreate(te)}return null}static findClosestAssignedNode(t,e){let o=e;do{if(o.has(t))return o;o=o.parent?o.parent:o.target!==te?it.getOrCreate(te):null}while(o!==null);return null}get parent(){return fi.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(e!==void 0)return e;const o=this.getRaw(t);if(o!==void 0)return this.hydrate(t,o),this.get(t)}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):(e=it.findClosestAssignedNode(t,this))===null||e===void 0?void 0:e.getRaw(t)}set(t,e){gt.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),gt.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=it.findParent(this);t&&t.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&fi.get(this).removeChild(this)}appendChild(t){t.parent&&fi.get(t).removeChild(t);const e=this.children.filter(o=>t.contains(o));fi.set(t,this),this.children.push(t),e.forEach(o=>t.appendChild(o)),D.getNotifier(this.store).subscribe(t);for(const[o,s]of this.store.all())t.hydrate(o,this.bindingObservers.has(o)?this.getRaw(o):s)}removeChild(t){const e=this.children.indexOf(t);return e!==-1&&this.children.splice(e,1),D.getNotifier(this.store).unsubscribe(t),t.parent===this?fi.delete(t):!1}contains(t){return kh(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),it.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),it.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const o=gt.getTokenById(e);!o||this.hydrate(o,this.getRaw(o))}hydrate(t,e){if(!this.has(t)){const o=this.bindingObservers.get(t);gt.isDerivedDesignTokenValue(e)?o?o.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(o&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const o=new Eh(e,t,this);return this.bindingObservers.set(t,o),o}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}}it.cssCustomPropertyReflector=new Rh;a([v],it.prototype,"children",void 0);function Oh(i){return gt.from(i)}const q=Object.freeze({create:Oh,notifyConnection(i){return!i.isConnected||!it.existsFor(i)?!1:(it.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!it.existsFor(i)?!1:(it.getOrCreate(i).unbind(),!0)},registerRoot(i=te){at.registerRoot(i)},unregisterRoot(i=te){at.unregisterRoot(i)}}),ps=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),fs=new Map,so=new Map;let Ze=null;const gi=K.createInterface(i=>i.cachedCallback(t=>(Ze===null&&(Ze=new ia(null,t)),Ze))),ea=Object.freeze({tagFor(i){return so.get(i)},responsibleFor(i){const t=i.$$designSystem$$;return t||K.findResponsibleContainer(i).get(gi)},getOrCreate(i){if(!i)return Ze===null&&(Ze=K.getOrCreateDOMContainer().get(gi)),Ze;const t=i.$$designSystem$$;if(t)return t;const e=K.getOrCreateDOMContainer(i);if(e.has(gi,!1))return e.get(gi);{const o=new ia(i,e);return e.register(Ke.instance(gi,o)),o}}});function Vh(i,t,e){return typeof i=="string"?{name:i,type:t,callback:e}:i}class ia{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>ps.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,o=[],s=this.disambiguate,n=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(l,c,u){const f=Vh(l,c,u),{name:p,callback:g,baseClass:F}=f;let{type:S}=f,H=p,Q=fs.get(H),Jt=!0;for(;Q;){const Nt=s(H,S,Q);switch(Nt){case ps.ignoreDuplicate:return;case ps.definitionCallbackOnly:Jt=!1,Q=void 0;break;default:H=Nt,Q=fs.get(H);break}}Jt&&((so.has(S)||S===E)&&(S=class extends S{}),fs.set(H,S),so.set(S,H),F&&so.set(F,H)),o.push(new Lh(e,H,S,n,g,Jt))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&q.registerRoot(this.designTokenRoot)),e.registerWithContext(r,...t);for(const l of o)l.callback(l),l.willDefine&&l.definition!==null&&l.definition.define();return this}}class Lh{constructor(t,e,o,s,n,r){this.container=t,this.name=e,this.type=o,this.shadowRootMode=s,this.callback=n,this.willDefine=r,this.definition=null}definePresentation(t){Yr.define(this.name,t,this.container)}defineElement(t){this.definition=new Re(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return ea.tagFor(t)}}const Ph=(i,t)=>y`
    <div class="positioning-region" part="positioning-region">
        ${W(e=>e.modal,y`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${e=>e.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${e=>e.modal}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-label="${e=>e.ariaLabel}"
            ${z("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`;/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var oa=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Hh=oa.join(","),sa=typeof Element=="undefined",Ii=sa?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Fs=!sa&&Element.prototype.getRootNode?function(i){return i.getRootNode()}:function(i){return i.ownerDocument},zh=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},na=function(t){return t.tagName==="INPUT"},Mh=function(t){return na(t)&&t.type==="hidden"},Bh=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(o){return o.tagName==="SUMMARY"});return e},Nh=function(t,e){for(var o=0;o<t.length;o++)if(t[o].checked&&t[o].form===e)return t[o]},jh=function(t){if(!t.name)return!0;var e=t.form||Fs(t),o=function(l){return e.querySelectorAll('input[type="radio"][name="'+l+'"]')},s;if(typeof window!="undefined"&&typeof window.CSS!="undefined"&&typeof window.CSS.escape=="function")s=o(window.CSS.escape(t.name));else try{s=o(t.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var n=Nh(s,t.form);return!n||n===t},_h=function(t){return na(t)&&t.type==="radio"},qh=function(t){return _h(t)&&!jh(t)},sr=function(t){var e=t.getBoundingClientRect(),o=e.width,s=e.height;return o===0&&s===0},Uh=function(t,e){var o=e.displayCheck,s=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var n=Ii.call(t,"details>summary:first-of-type"),r=n?t.parentElement:t;if(Ii.call(r,"details:not([open]) *"))return!0;var l=Fs(t).host,c=(l==null?void 0:l.ownerDocument.contains(l))||t.ownerDocument.contains(t);if(!o||o==="full"){if(typeof s=="function"){for(var u=t;t;){var f=t.parentElement,p=Fs(t);if(f&&!f.shadowRoot&&s(f)===!0)return sr(t);t.assignedSlot?t=t.assignedSlot:!f&&p!==t.ownerDocument?t=p.host:t=f}t=u}if(c)return!t.getClientRects().length}else if(o==="non-zero-area")return sr(t);return!1},Gh=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var o=0;o<e.children.length;o++){var s=e.children.item(o);if(s.tagName==="LEGEND")return Ii.call(e,"fieldset[disabled] *")?!0:!s.contains(t)}return!0}e=e.parentElement}return!1},ra=function(t,e){return!(e.disabled||Mh(e)||Uh(e,t)||Bh(e)||Gh(e))},Wh=function(t,e){return!(qh(e)||zh(e)<0||!ra(t,e))},nr=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return Ii.call(t,Hh)===!1?!1:Wh(e,t)},Yh=oa.concat("iframe").join(","),rr=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return Ii.call(t,Yh)===!1?!1:ra(e,t)};class Pt extends E{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case ni:this.dismiss(),t.preventDefault();break;case yo:this.handleTabKeyDown(t);break}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;const e=this.getTabQueueBounds();if(e.length!==0){if(e.length===1){e[0].focus(),t.preventDefault();return}t.shiftKey&&t.target===e[0]?(e[e.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===e[e.length-1]&&(e[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>{const t=[];return Pt.reduceTabbableItems(t,this)},this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{const e=t===void 0?this.shouldTrapFocus():t;e&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),R.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!e&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=D.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,e){switch(e){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(t,e){return e.getAttribute("tabindex")==="-1"?t:nr(e)||Pt.isFocusableFastElement(e)&&Pt.hasTabbableShadow(e)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(Pt.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var e,o;return!!(!((o=(e=t.$fastController)===null||e===void 0?void 0:e.definition.shadowOptions)===null||o===void 0)&&o.delegatesFocus)}static hasTabbableShadow(t){var e,o;return Array.from((o=(e=t.shadowRoot)===null||e===void 0?void 0:e.querySelectorAll("*"))!==null&&o!==void 0?o:[]).some(s=>nr(s))}}a([h({mode:"boolean"})],Pt.prototype,"modal",void 0);a([h({mode:"boolean"})],Pt.prototype,"hidden",void 0);a([h({attribute:"trap-focus",mode:"boolean"})],Pt.prototype,"trapFocus",void 0);a([h({attribute:"aria-describedby"})],Pt.prototype,"ariaDescribedby",void 0);a([h({attribute:"aria-labelledby"})],Pt.prototype,"ariaLabelledby",void 0);a([h({attribute:"aria-label"})],Pt.prototype,"ariaLabel",void 0);const Xh=(i,t)=>y`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,Qh={separator:"separator",presentation:"presentation"};class Co extends E{constructor(){super(...arguments),this.role=Qh.separator,this.orientation=et.horizontal}}a([h],Co.prototype,"role",void 0);a([h],Co.prototype,"orientation",void 0);const Is={next:"next",previous:"previous"},Zh=(i,t)=>y`
    <template
        role="button"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        tabindex="${e=>e.hiddenFromAT?-1:0}"
        class="${e=>e.direction} ${e=>e.disabled?"disabled":""}"
        @keyup="${(e,o)=>e.keyupHandler(o.event)}"
    >
        ${W(e=>e.direction===Is.next,y`
                <span part="next" class="next">
                    <slot name="next">
                        ${t.next||""}
                    </slot>
                </span>
            `)}
        ${W(e=>e.direction===Is.previous,y`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${t.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class Fo extends E{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=Is.next}keyupHandler(t){if(!this.hiddenFromAT){const e=t.key;(e==="Enter"||e==="Space")&&this.$emit("click",t),e==="Escape"&&this.blur()}}}a([h({mode:"boolean"})],Fo.prototype,"disabled",void 0);a([h({attribute:"aria-hidden",converter:Ai})],Fo.prototype,"hiddenFromAT",void 0);a([h],Fo.prototype,"direction",void 0);const Jh=(i,t)=>y`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${yt(i,t)}
        <span class="content" part="content">
            <slot ${Z("content")}></slot>
        </span>
        ${vt(i,t)}
    </template>
`;class Vi extends ht{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return(t=this.options)===null||t===void 0?void 0:t.filter(e=>e.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,e){var o,s;this.ariaActiveDescendant=(s=(o=this.options[e])===null||o===void 0?void 0:o.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((e,o)=>{e.checked=Wi(o,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,o)=>{e.checked=Wi(o,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,o)=>{e.checked=Wi(o,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((e,o)=>{e.checked=Wi(o,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var e;if(!this.multiple)return super.clickHandler(t);const o=(e=t.target)===null||e===void 0?void 0:e.closest("[role=option]");if(!(!o||o.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(o),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:e,shiftKey:o}=t;switch(this.shouldSkipFocus=!1,e){case Xt:{this.checkFirstOption(o);return}case Ht:{this.checkNextOption(o);return}case zt:{this.checkPreviousOption(o);return}case Qt:{this.checkLastOption(o);return}case yo:return this.focusAndScrollOptionIntoView(),!0;case ni:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case ze:if(t.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,e){var o;this.ariaMultiSelectable=e?"true":null,(o=this.options)===null||o===void 0||o.forEach(s=>{s.checked=e?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView())}sizeChanged(t,e){var o;const s=Math.max(0,parseInt((o=e==null?void 0:e.toFixed())!==null&&o!==void 0?o:"",10));s!==e&&R.queueUpdate(()=>{this.size=s})}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter(o=>!o.disabled),e=!t.every(o=>o.selected);t.forEach(o=>o.selected=e),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,e){if(!this.multiple){super.typeaheadBufferChanged(t,e);return}if(this.$fastController.isConnected){const o=this.getTypeaheadMatches(),s=this.options.indexOf(o[0]);s>-1&&(this.activeIndex=s,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(t=!1){this.options.forEach(e=>e.checked=this.multiple?!1:void 0),t||(this.rangeStartIndex=-1)}}a([v],Vi.prototype,"activeIndex",void 0);a([h({mode:"boolean"})],Vi.prototype,"multiple",void 0);a([h({converter:$})],Vi.prototype,"size",void 0);const Kh=(i,t)=>y`
    <template
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        @focusin="${(e,o)=>e.focusinHandler(o.event)}"
        @keydown="${(e,o)=>e.keydownHandler(o.event)}"
        @mousedown="${(e,o)=>e.mousedownHandler(o.event)}"
    >
        <slot
            ${Z({filter:Vi.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,mt={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},td={[mt.menuitem]:"menuitem",[mt.menuitemcheckbox]:"menuitemcheckbox",[mt.menuitemradio]:"menuitemradio"};class Rt extends E{constructor(){super(...arguments),this.role=mt.menuitem,this.hasSubmenu=!1,this.currentDirection=G.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case se:case ze:return this.invoke(),!1;case be:return this.expandAndFocus(),!1;case me:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{!this.focusSubmenuOnLoad||(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{!this.hasSubmenu||(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case mt.menuitemcheckbox:this.checked=!this.checked;break;case mt.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case mt.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>t.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(t){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=Ae(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),R.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}}a([h({mode:"boolean"})],Rt.prototype,"disabled",void 0);a([h({mode:"boolean"})],Rt.prototype,"expanded",void 0);a([v],Rt.prototype,"startColumnCount",void 0);a([h],Rt.prototype,"role",void 0);a([h({mode:"boolean"})],Rt.prototype,"checked",void 0);a([v],Rt.prototype,"submenuRegion",void 0);a([v],Rt.prototype,"hasSubmenu",void 0);a([v],Rt.prototype,"currentDirection",void 0);a([v],Rt.prototype,"submenu",void 0);J(Rt,kt);const ed=(i,t)=>y`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==mt.menuitem?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,o)=>e.handleMenuItemKeyDown(o.event)}"
        @click="${(e,o)=>e.handleMenuItemClick(o.event)}"
        @mouseover="${(e,o)=>e.handleMouseOver(o.event)}"
        @mouseout="${(e,o)=>e.handleMouseOut(o.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${W(e=>e.role===mt.menuitemcheckbox,y`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${W(e=>e.role===mt.menuitemradio,y`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${yt(i,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${vt(i,t)}
        ${W(e=>e.hasSubmenu,y`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${t.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${W(e=>e.expanded,y`
                <${i.tagFor(M)}
                    :anchorElement="${e=>e}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${e=>e.currentDirection}"
                    @loaded="${e=>e.submenuLoaded()}"
                    ${z("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${i.tagFor(M)}>
            `)}
    </template>
`,id=(i,t)=>y`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,o)=>e.handleMenuKeyDown(o.event)}"
        @focusout="${(e,o)=>e.handleFocusOut(o.event)}"
    >
        <slot ${Z("items")}></slot>
    </template>
`;class ai extends E{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&ti(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=t=>{const e=t.target;this.menuItems!==void 0&&e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems===void 0||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;if(this.expandedItem!==null&&e===this.expandedItem&&e.expanded===!1){this.expandedItem=null;return}e.expanded&&(this.expandedItem!==null&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const e=this.menuItems.filter(this.isMenuItemElement);e.length&&(this.focusIndex=0);function o(n){const r=n.getAttribute("role"),l=n.querySelector("[slot=start]");return r!==mt.menuitem&&l===null||r===mt.menuitem&&l!==null?1:r!==mt.menuitem&&l!==null?2:0}const s=e.reduce((n,r)=>{const l=o(r);return n>l?n:l},0);e.forEach((n,r)=>{n.setAttribute("tabindex",r===0?"0":"-1"),n.addEventListener("expanded-change",this.handleExpandedChanged),n.addEventListener("focus",this.handleItemFocus),n instanceof Rt&&(n.startColumnCount=s)})},this.changeHandler=t=>{if(this.menuItems===void 0)return;const e=t.target,o=this.menuItems.indexOf(e);if(o!==-1&&e.role==="menuitemradio"&&e.checked===!0){for(let n=o-1;n>=0;--n){const r=this.menuItems[n],l=r.getAttribute("role");if(l===mt.menuitemradio&&(r.checked=!1),l==="separator")break}const s=this.menuItems.length-1;for(let n=o+1;n<=s;++n){const r=this.menuItems[n],l=r.getAttribute("role");if(l===mt.menuitemradio&&(r.checked=!1),l==="separator")break}}},this.isMenuItemElement=t=>ti(t)&&ai.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),R.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!(t.defaultPrevented||this.menuItems===void 0))switch(t.key){case Ht:this.setFocus(this.focusIndex+1,1);return;case zt:this.setFocus(this.focusIndex-1,-1);return;case Qt:this.setFocus(this.menuItems.length-1,-1);return;case Xt:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}setFocus(t,e){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){const o=this.menuItems[t];if(this.isFocusableElement(o)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,o.setAttribute("tabindex","0"),o.focus();break}t+=e}}}ai.focusableElementRoles=td;a([v],ai.prototype,"items",void 0);const od=(i,t)=>y`
    <template class="${e=>e.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Z("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${yt(i,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                @keydown="${(e,o)=>e.handleKeyDown(o.event)}"
                @blur="${(e,o)=>e.handleBlur()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                type="text"
                inputmode="numeric"
                min="${e=>e.min}"
                max="${e=>e.max}"
                step="${e=>e.step}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${z("control")}
            />
            ${W(e=>!e.hideStep&&!e.readOnly&&!e.disabled,y`
                    <div class="controls" part="controls">
                        <div class="step-up" part="step-up" @click="${e=>e.stepUp()}">
                            <slot name="step-up-glyph">
                                ${t.stepUpGlyph||""}
                            </slot>
                        </div>
                        <div
                            class="step-down"
                            part="step-down"
                            @click="${e=>e.stepDown()}"
                        >
                            <slot name="step-down-glyph">
                                ${t.stepDownGlyph||""}
                            </slot>
                        </div>
                    </div>
                `)}
            ${vt(i,t)}
        </div>
    </template>
`;class sd extends E{}class nd extends ne(sd){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const rd={email:"email",password:"password",tel:"tel",text:"text",url:"url"};class Ct extends nd{constructor(){super(...arguments),this.type=rd.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&R.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}a([h({attribute:"readonly",mode:"boolean"})],Ct.prototype,"readOnly",void 0);a([h({mode:"boolean"})],Ct.prototype,"autofocus",void 0);a([h],Ct.prototype,"placeholder",void 0);a([h],Ct.prototype,"type",void 0);a([h],Ct.prototype,"list",void 0);a([h({converter:$})],Ct.prototype,"maxlength",void 0);a([h({converter:$})],Ct.prototype,"minlength",void 0);a([h],Ct.prototype,"pattern",void 0);a([h({converter:$})],Ct.prototype,"size",void 0);a([h({mode:"boolean"})],Ct.prototype,"spellcheck",void 0);a([v],Ct.prototype,"defaultSlottedNodes",void 0);class Io{}J(Io,Y);J(Ct,kt,Io);class ad extends E{}class ld extends ne(ad){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class xt extends ld{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,e){var o;this.max=Math.max(e,(o=this.min)!==null&&o!==void 0?o:e);const s=Math.min(this.min,this.max);this.min!==void 0&&this.min!==s&&(this.min=s),this.value=this.getValidValue(this.value)}minChanged(t,e){var o;this.min=Math.min(e,(o=this.max)!==null&&o!==void 0?o:e);const s=Math.max(this.min,this.max);this.max!==void 0&&this.max!==s&&(this.max=s),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){this.value=this.getValidValue(e),e===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),t!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}getValidValue(t){var e,o;let s=parseFloat(parseFloat(t).toPrecision(12));return isNaN(s)?s="":(s=Math.min(s,(e=this.max)!==null&&e!==void 0?e:s),s=Math.max(s,(o=this.min)!==null&&o!==void 0?o:s).toString()),s}stepUp(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=e.toString()}stepDown(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=e.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&R.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case zt:return this.stepUp(),!1;case Ht:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}}a([h({attribute:"readonly",mode:"boolean"})],xt.prototype,"readOnly",void 0);a([h({mode:"boolean"})],xt.prototype,"autofocus",void 0);a([h({attribute:"hide-step",mode:"boolean"})],xt.prototype,"hideStep",void 0);a([h],xt.prototype,"placeholder",void 0);a([h],xt.prototype,"list",void 0);a([h({converter:$})],xt.prototype,"maxlength",void 0);a([h({converter:$})],xt.prototype,"minlength",void 0);a([h({converter:$})],xt.prototype,"size",void 0);a([h({converter:$})],xt.prototype,"step",void 0);a([h({converter:$})],xt.prototype,"max",void 0);a([h({converter:$})],xt.prototype,"min",void 0);a([v],xt.prototype,"defaultSlottedNodes",void 0);J(xt,kt,Io);const ar=44,cd=(i,t)=>y`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${W(e=>typeof e.value=="number",y`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>ar*e.percentComplete/100}px ${ar}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${W(e=>typeof e.value!="number",y`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class Me extends E{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t=typeof this.min=="number"?this.min:0,e=typeof this.max=="number"?this.max:100,o=typeof this.value=="number"?this.value:0,s=e-t;this.percentComplete=s===0?0:Math.fround((o-t)/s*100)}}a([h({converter:$})],Me.prototype,"value",void 0);a([h({converter:$})],Me.prototype,"min",void 0);a([h({converter:$})],Me.prototype,"max",void 0);a([h({mode:"boolean"})],Me.prototype,"paused",void 0);a([v],Me.prototype,"percentComplete",void 0);const hd=(i,t)=>y`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${W(e=>typeof e.value=="number",y`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${e=>e.percentComplete}%"
                    ></div>
                </div>
            `)}
        ${W(e=>typeof e.value!="number",y`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,dd=(i,t)=>y`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        @keydown="${(e,o)=>e.keydownHandler(o.event)}"
        @focusout="${(e,o)=>e.focusOutHandler(o.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===et.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Z({property:"slottedRadioButtons",filter:oe("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class $e extends E{constructor(){super(...arguments),this.orientation=et.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach(o=>{o!==e&&(o.checked=!1,this.isInsideFoundationToolbar||o.setAttribute("tabindex","-1"))}),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const o=t[e];this.isInsideToolbar||(o.setAttribute("tabindex","0"),o.readOnly?this.slottedRadioButtons.forEach(s=>{s!==o&&s.setAttribute("tabindex","-1")}):(o.checked=!0,this.selectedRadio=o)),this.focusedRadio=o,o.focus()},this.moveRightOffGroup=()=>{var t;(t=this.nextElementSibling)===null||t===void 0||t.focus()},this.moveLeftOffGroup=()=>{var t;(t=this.previousElementSibling)===null||t===void 0||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,o=t.target,s=o!==null?e.indexOf(o):0,n=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(n===0&&s===n||n===e.length-1&&n===s)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{const e=t.target;if(e){const o=this.slottedRadioButtons;e.checked||o.indexOf(e)===0?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,o)=>t===e.length&&this.isInsideToolbar&&o===be,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===me,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(o,e,t.key)){this.moveRightOffGroup();return}else o===e.length&&(o=0);for(;o<e.length&&e.length>1;)if(e[o].disabled){if(this.focusedRadio&&o===e.indexOf(this.focusedRadio))break;if(o+1>=e.length){if(this.isInsideToolbar)break;o=0}else o+=1}else{this.moveToRadioByIndex(e,o);break}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,o=o<0?e.length-1:o,this.shouldMoveOffGroupToTheLeft(e,t.key)){this.moveLeftOffGroup();return}for(;o>=0&&e.length>1;)if(e[o].disabled){if(this.focusedRadio&&o===e.indexOf(this.focusedRadio))break;o-1<0?o=e.length-1:o-=1}else{this.moveToRadioByIndex(e,o);break}},this.keydownHandler=t=>{const e=t.key;if(e in Ge&&this.isInsideFoundationToolbar)return!0;switch(e){case se:{this.checkFocusedRadio();break}case be:case Ht:{this.direction===G.ltr?this.moveRight(t):this.moveLeft(t);break}case me:case zt:{this.direction===G.ltr?this.moveLeft(t):this.moveRight(t);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.disabled?t.disabled=!0:t.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.getAttribute("value")===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return(t=this.parentToolbar)!==null&&t!==void 0?t:!1}get isInsideFoundationToolbar(){var t;return!!(!((t=this.parentToolbar)===null||t===void 0)&&t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Ae(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(s=>s.hasAttribute("checked")),e=t?t.length:0;if(e>1){const s=t[e-1];s.checked=!0}let o=!1;if(this.slottedRadioButtons.forEach(s=>{this.name!==void 0&&s.setAttribute("name",this.name),this.disabled&&(s.disabled=!0),this.readOnly&&(s.readOnly=!0),this.value&&this.value===s.value?(this.selectedRadio=s,this.focusedRadio=s,s.checked=!0,s.setAttribute("tabindex","0"),o=!0):(this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"),s.checked=!1),s.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const s=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),n=s!==null?s.length:0;if(n>0&&!o){const r=s[n-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}a([h({attribute:"readonly",mode:"boolean"})],$e.prototype,"readOnly",void 0);a([h({attribute:"disabled",mode:"boolean"})],$e.prototype,"disabled",void 0);a([h],$e.prototype,"name",void 0);a([h],$e.prototype,"value",void 0);a([h],$e.prototype,"orientation",void 0);a([v],$e.prototype,"childItems",void 0);a([v],$e.prototype,"slottedRadioButtons",void 0);const ud=(i,t)=>y`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,o)=>e.keypressHandler(o.event)}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Z("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class pd extends E{}class fd extends Zs(pd){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class To extends fd{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case ze:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),((t=this.parentElement)===null||t===void 0?void 0:t.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(t){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}a([h({attribute:"readonly",mode:"boolean"})],To.prototype,"readOnly",void 0);a([v],To.prototype,"name",void 0);a([v],To.prototype,"defaultSlottedNodes",void 0);class le extends E{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,e){if(this.scrollContainer){const o=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(o,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,e){e&&!this.updatingItems&&R.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((e,o)=>o instanceof HTMLSlotElement?e.concat(o.assignedElements()):(e.push(o),e),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops(),this.width=this.offsetWidth;let t=0,e=this.scrollItems.map(({offsetLeft:o,offsetWidth:s},n)=>{const r=o+s;return this.isRtl?-r:(t=r,n===0?0:o)}).concat(t);e=this.fixScrollMisalign(e),e.sort((o,s)=>Math.abs(o)-Math.abs(s)),this.scrollStops=e,this.setFlippers()}fixScrollMisalign(t){if(this.isRtl&&t.some(e=>e>0)){t.sort((o,s)=>s-o);const e=t[0];t=t.map(o=>o-e)}return t}setFlippers(){var t,e;const o=this.scrollContainer.scrollLeft;if((t=this.previousFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",o===0),this.scrollStops){const s=Math.abs(this.scrollStops[this.scrollStops.length-1]);(e=this.nextFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",Math.abs(o)+this.width>=s)}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex((n,r)=>n>=t&&(this.isRtl||r===this.scrollStops.length-1||this.scrollStops[r+1]>t)),o=Math.abs(this.scrollStops[e+1]);let s=this.scrollStops.findIndex(n=>Math.abs(n)+this.width>o);(s>=e||s===-1)&&(s=e>0?e-1:0),this.scrollToPosition(this.scrollStops[s],t)}scrollToNext(){const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex(n=>Math.abs(n)>=Math.abs(t)),o=this.scrollStops.findIndex(n=>Math.abs(t)+this.width<=Math.abs(n));let s=e;o>e+2?s=o-2:e<this.scrollStops.length-2&&(s=e+1),this.scrollToPosition(this.scrollStops[s],t)}scrollToPosition(t,e=this.scrollContainer.scrollLeft){var o;if(this.scrolling)return;this.scrolling=!0;const s=(o=this.duration)!==null&&o!==void 0?o:`${Math.abs(t-e)/this.speed}s`;this.content.style.setProperty("transition-duration",s);const n=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=u=>{u&&u.target!==u.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(n===0){r();return}this.content.addEventListener("transitionend",r);const l=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let c=this.scrollContainer.scrollLeft-Math.min(t,l);this.isRtl&&(c=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),l)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${c}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}}a([h({converter:$})],le.prototype,"speed",void 0);a([h],le.prototype,"duration",void 0);a([h],le.prototype,"easing",void 0);a([h({attribute:"flippers-hidden-from-at",converter:Ai})],le.prototype,"flippersHiddenFromAT",void 0);a([v],le.prototype,"scrolling",void 0);a([v],le.prototype,"scrollItems",void 0);a([h({attribute:"view"})],le.prototype,"view",void 0);const gd=(i,t)=>{var e,o;return y`
    <template
        class="horizontal-scroll"
        @keyup="${(s,n)=>s.keyupHandler(n.event)}"
    >
        ${yt(i,t)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${s=>s.scrolled()}"
                ${z("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${z("content")}>
                    <slot
                        ${Z({property:"scrollItems",filter:oe()})}
                    ></slot>
                </div>
            </div>
            ${W(s=>s.view!=="mobile",y`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${z("previousFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-previous">
                            <slot name="previous-flipper">
                                ${t.previousFlipper instanceof Function?t.previousFlipper(i,t):(e=t.previousFlipper)!==null&&e!==void 0?e:""}
                            </slot>
                        </div>
                    </div>
                    <div
                        class="scroll scroll-next"
                        part="scroll-next"
                        ${z("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${t.nextFlipper instanceof Function?t.nextFlipper(i,t):(o=t.nextFlipper)!==null&&o!==void 0?o:""}
                            </slot>
                        </div>
                    </div>
                `)}
        </div>
        ${vt(i,t)}
    </template>
`};function aa(i,t,e){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}class md extends E{}class bd extends ne(md){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Et extends bd{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&R.queueUpdate(()=>{this.focus()})}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus()}handleChange(){this.$emit("change")}}a([h({attribute:"readonly",mode:"boolean"})],Et.prototype,"readOnly",void 0);a([h({mode:"boolean"})],Et.prototype,"autofocus",void 0);a([h],Et.prototype,"placeholder",void 0);a([h],Et.prototype,"list",void 0);a([h({converter:$})],Et.prototype,"maxlength",void 0);a([h({converter:$})],Et.prototype,"minlength",void 0);a([h],Et.prototype,"pattern",void 0);a([h({converter:$})],Et.prototype,"size",void 0);a([h({mode:"boolean"})],Et.prototype,"spellcheck",void 0);a([v],Et.prototype,"defaultSlottedNodes",void 0);class la{}J(la,Y);J(Et,kt,la);class vd extends Vi{}class yd extends ne(vd){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class ce extends yd{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Ci("listbox-"),this.maxHeight=0}openChanged(t,e){if(!!this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,R.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return D.track(this,"value"),this._value}set value(t){var e,o,s,n,r,l,c;const u=`${this._value}`;if(!((e=this._options)===null||e===void 0)&&e.length){const f=this._options.findIndex(F=>F.value===t),p=(s=(o=this._options[this.selectedIndex])===null||o===void 0?void 0:o.value)!==null&&s!==void 0?s:null,g=(r=(n=this._options[f])===null||n===void 0?void 0:n.value)!==null&&r!==void 0?r:null;(f===-1||p!==g)&&(t="",this.selectedIndex=f),t=(c=(l=this.firstSelectedOption)===null||l===void 0?void 0:l.value)!==null&&c!==void 0?c:t}u!==t&&(this._value=t,super.valueChanged(u,t),D.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var e,o;this.$fastController.isConnected&&(this.value=(o=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.value)!==null&&o!==void 0?o:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}setPositioning(){const t=this.getBoundingClientRect(),o=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>o?Qe.above:Qe.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Qe.above?~~t.top:~~o}get displayValue(){var t,e;return D.track(this,"displayValue"),(e=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)!==null&&e!==void 0?e:""}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var e;if(super.focusoutHandler(t),!this.open)return!0;const o=t.relatedTarget;if(this.isSameNode(o)){this.focus();return}!((e=this.options)===null||e===void 0)&&e.includes(o)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,e){super.handleChange(t,e),e==="value"&&this.updateValue()}slottedOptionsChanged(t,e){this.options.forEach(o=>{D.getNotifier(o).unsubscribe(this,"value")}),super.slottedOptionsChanged(t,e),this.options.forEach(o=>{D.getNotifier(o).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var e;return t.offsetX>=0&&t.offsetX<=((e=this.listbox)===null||e===void 0?void 0:e.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,e){super.multipleChanged(t,e),this.proxy&&(this.proxy.multiple=e)}selectedOptionsChanged(t,e){var o;super.selectedOptionsChanged(t,e),(o=this.options)===null||o===void 0||o.forEach((s,n)=>{var r;const l=(r=this.proxy)===null||r===void 0?void 0:r.options.item(n);l&&(l.selected=s.selected)})}setDefaultSelectedOption(){var t;const e=(t=this.options)!==null&&t!==void 0?t:Array.from(this.children).filter(ht.slottedOptionFilter),o=e==null?void 0:e.findIndex(s=>s.hasAttribute("selected")||s.selected||s.value===this.value);if(o!==-1){this.selectedIndex=o;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.options.add(e)}))}keydownHandler(t){super.keydownHandler(t);const e=t.key||t.key.charCodeAt(0);switch(e){case ze:{t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case Xt:case Qt:{t.preventDefault();break}case se:{t.preventDefault(),this.open=!this.open;break}case ni:{this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break}case yo:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(e===Ht||e===zt)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(t,e){super.sizeChanged(t,e),this.proxy&&(this.proxy.size=e)}updateDisplayValue(){this.collapsible&&D.notify(this,"displayValue")}}a([h({attribute:"open",mode:"boolean"})],ce.prototype,"open",void 0);a([Vl],ce.prototype,"collapsible",null);a([v],ce.prototype,"control",void 0);a([h({attribute:"position"})],ce.prototype,"positionAttribute",void 0);a([v],ce.prototype,"position",void 0);a([v],ce.prototype,"maxHeight",void 0);class Ks{}a([v],Ks.prototype,"ariaControls",void 0);J(Ks,we);J(ce,kt,Ks);const xd=(i,t)=>y`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        @focusin="${(e,o)=>e.focusinHandler(o.event)}"
        @focusout="${(e,o)=>e.focusoutHandler(o.event)}"
        @keydown="${(e,o)=>e.keydownHandler(o.event)}"
        @mousedown="${(e,o)=>e.mousedownHandler(o.event)}"
    >
        ${W(e=>e.collapsible,y`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${z("control")}
                >
                    ${yt(i,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${vt(i,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>e.collapsible?!e.open:!1}"
            ${z("listbox")}
        >
            <slot
                ${Z({filter:ht.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,wd=(i,t)=>y`
    <template
        class="${e=>e.shape==="circle"?"circle":"rect"}"
        pattern="${e=>e.pattern}"
        ?shimmer="${e=>e.shimmer}"
    >
        ${W(e=>e.shimmer===!0,y`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${e=>e.pattern}" role="presentation">
            <img class="pattern" src="${e=>e.pattern}" />
        </object>
        <slot></slot>
    </template>
`;class Li extends E{constructor(){super(...arguments),this.shape="rect"}}a([h],Li.prototype,"fill",void 0);a([h],Li.prototype,"shape",void 0);a([h],Li.prototype,"pattern",void 0);a([h({mode:"boolean"})],Li.prototype,"shimmer",void 0);const $d=(i,t)=>y`
    <template
        aria-disabled="${e=>e.disabled}"
        class="${e=>e.sliderOrientation||et.horizontal}
            ${e=>e.disabled?"disabled":""}"
    >
        <div ${z("root")} part="root" class="root" style="${e=>e.positionStyle}">
            <div class="container">
                ${W(e=>!e.hideMark,y`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function Ts(i,t,e,o){let s=Xs(0,1,(i-t)/(e-t));return o===G.rtl&&(s=1-s),s}const Qi={min:0,max:0,direction:G.ltr,orientation:et.horizontal,disabled:!1};class he extends E{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=G.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=Qi.direction||G.ltr,this.sliderOrientation=Qi.orientation||et.horizontal,this.sliderMaxPosition=Qi.max,this.sliderMinPosition=Qi.min;else{const t=this.parentNode,{min:e,max:o,direction:s,orientation:n,disabled:r}=t;r!==void 0&&(this.disabled=r),this.sliderDirection=s||G.ltr,this.sliderOrientation=n||et.horizontal,this.sliderMaxPosition=o,this.sliderMinPosition=e}},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:G.ltr,e=Ts(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let o=Math.round((1-e)*100),s=Math.round(e*100);return Number.isNaN(s)&&Number.isNaN(o)&&(o=50,s=50),this.sliderOrientation===et.horizontal?t===G.rtl?`right: ${s}%; left: ${o}%;`:`left: ${s}%; right: ${o}%;`:`top: ${s}%; bottom: ${o}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=D.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,e){switch(e){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMinPosition=t.max;break;case"min":this.sliderMinPosition=t.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return t.max!==void 0&&t.min!==void 0}}a([v],he.prototype,"positionStyle",void 0);a([h],he.prototype,"position",void 0);a([h({attribute:"hide-mark",mode:"boolean"})],he.prototype,"hideMark",void 0);a([h({attribute:"disabled",mode:"boolean"})],he.prototype,"disabled",void 0);a([v],he.prototype,"sliderOrientation",void 0);a([v],he.prototype,"sliderMinPosition",void 0);a([v],he.prototype,"sliderMaxPosition",void 0);a([v],he.prototype,"sliderDirection",void 0);const kd=(i,t)=>y`
    <template
        role="slider"
        class="${e=>e.readOnly?"readonly":""}
        ${e=>e.orientation||et.horizontal}"
        tabindex="${e=>e.disabled?null:0}"
        aria-valuetext="${e=>e.valueTextFormatter(e.value)}"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        aria-readonly="${e=>e.readOnly?!0:void 0}"
        aria-orientation="${e=>e.orientation}"
        class="${e=>e.orientation}"
    >
        <div part="positioning-region" class="positioning-region">
            <div ${z("track")} part="track-container" class="track">
                <slot name="track"></slot>
                <div part="track-start" class="track-start" style="${e=>e.position}">
                    <slot name="track-start"></slot>
                </div>
            </div>
            <slot></slot>
            <div
                ${z("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${e=>e.position}"
            >
                <slot name="thumb">${t.thumb||""}</slot>
            </div>
        </div>
    </template>
`;class Cd extends E{}class Fd extends ne(Cd){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Id={singleValue:"single-value"};class pt extends Fd{constructor(){super(...arguments),this.direction=G.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=et.horizontal,this.mode=Id.singleValue,this.keypressHandler=t=>{if(!this.readOnly){if(t.key===Xt)t.preventDefault(),this.value=`${this.min}`;else if(t.key===Qt)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case be:case zt:t.preventDefault(),this.increment();break;case me:case Ht:t.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const e=`${t?"remove":"add"}EventListener`;this[e]("keydown",this.keypressHandler),this[e]("mousedown",this.handleMouseDown),this.thumb[e]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[e]("touchstart",this.handleThumbMouseDown,{passive:!0}),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.target.focus()}const e=`${t!==null?"add":"remove"}EventListener`;window[e]("mouseup",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove,{passive:!0}),window[e]("touchmove",this.handleMouseMove,{passive:!0}),window[e]("touchend",this.handleWindowMouseUp),this.isDragging=t!==null},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const e=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,o=this.orientation===et.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(o)}`},this.calculateNewValue=t=>{const e=Ts(t,this.orientation===et.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===et.horizontal?this.trackWidth:this.trackHeight,this.direction),o=(this.max-this.min)*e+this.min;return this.convertToConstrainedValue(o)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const e=`${t!==null?"add":"remove"}EventListener`;if((t===null||!this.disabled&&!this.readOnly)&&(window[e]("mouseup",this.handleWindowMouseUp),window.document[e]("mouseleave",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const o=this.orientation===et.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(o)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let e=t-this.min;const o=Math.round(e/this.step),s=e-o*(this.stepMultiplier*this.step)/this.stepMultiplier;return e=s>=Number(this.step)/2?e-s+Number(this.step):e-s,e+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){super.valueChanged(t,e),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=Ae(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==G.rtl&&this.orientation!==et.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),e=this.convertToConstrainedValue(t),o=e<Number(this.max)?`${e}`:`${this.max}`;this.value=o}decrement(){const t=this.direction!==G.rtl&&this.orientation!==et.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),e=this.convertToConstrainedValue(t),o=e>Number(this.min)?`${e}`:`${this.min}`;this.value=o}setThumbPositionForOrientation(t){const e=Ts(Number(this.value),Number(this.min),Number(this.max),t),o=(1-e)*100;this.orientation===et.horizontal?this.position=this.isDragging?`right: ${o}%; transition: none;`:`right: ${o}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${o}%; transition: none;`:`bottom: ${o}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",e=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,e)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}a([h({attribute:"readonly",mode:"boolean"})],pt.prototype,"readOnly",void 0);a([v],pt.prototype,"direction",void 0);a([v],pt.prototype,"isDragging",void 0);a([v],pt.prototype,"position",void 0);a([v],pt.prototype,"trackWidth",void 0);a([v],pt.prototype,"trackMinWidth",void 0);a([v],pt.prototype,"trackHeight",void 0);a([v],pt.prototype,"trackLeft",void 0);a([v],pt.prototype,"trackMinHeight",void 0);a([v],pt.prototype,"valueTextFormatter",void 0);a([h({converter:$})],pt.prototype,"min",void 0);a([h({converter:$})],pt.prototype,"max",void 0);a([h({converter:$})],pt.prototype,"step",void 0);a([h],pt.prototype,"orientation",void 0);a([h],pt.prototype,"mode",void 0);const Td=(i,t)=>y`
    <template
        role="switch"
        aria-checked="${e=>e.checked}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,o)=>e.keypressHandler(o.event)}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        class="${e=>e.checked?"checked":""}"
    >
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Z("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${t.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`;class Sd extends E{}class Dd extends Zs(Sd){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class tn extends Dd{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case se:case ze:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}a([h({attribute:"readonly",mode:"boolean"})],tn.prototype,"readOnly",void 0);a([v],tn.prototype,"defaultSlottedNodes",void 0);const Rd=(i,t)=>y`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class Ed extends E{}const Ad=(i,t)=>y`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`;class ca extends E{}a([h({mode:"boolean"})],ca.prototype,"disabled",void 0);const Od=(i,t)=>y`
    <template class="${e=>e.orientation}">
        ${yt(i,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Z("tabs")}></slot>

            ${W(e=>e.showActiveIndicator,y`
                    <div
                        ${z("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${vt(i,t)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${Z("tabpanels")}></slot>
        </div>
    </template>
`,lr={vertical:"vertical",horizontal:"horizontal"};class de extends E{constructor(){super(...arguments),this.orientation=lr.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>t.getAttribute("aria-disabled")==="true",this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t="gridColumn",e="gridRow",o=this.isHorizontal()?t:e;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((s,n)=>{if(s.slot==="tab"){const r=this.activeTabIndex===n&&this.isFocusableElement(s);this.activeindicator&&this.isFocusableElement(s)&&(this.showActiveIndicator=!0);const l=this.tabIds[n],c=this.tabpanelIds[n];s.setAttribute("id",l),s.setAttribute("aria-selected",r?"true":"false"),s.setAttribute("aria-controls",c),s.addEventListener("click",this.handleTabClick),s.addEventListener("keydown",this.handleTabKeyDown),s.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=s)}s.style[t]="",s.style[e]="",s.style[o]=`${n+1}`,this.isHorizontal()?s.classList.remove("vertical"):s.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((t,e)=>{const o=this.tabIds[e],s=this.tabpanelIds[e];t.setAttribute("id",s),t.setAttribute("aria-labelledby",o),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const e=t.currentTarget;e.nodeType===1&&this.isFocusableElement(e)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case me:t.preventDefault(),this.adjustBackward(t);break;case be:t.preventDefault(),this.adjustForward(t);break}else switch(t.key){case zt:t.preventDefault(),this.adjustBackward(t);break;case Ht:t.preventDefault(),this.adjustForward(t);break}switch(t.key){case Xt:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case Qt:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=t=>{const e=this.tabs;let o=0;for(o=this.activetab?e.indexOf(this.activetab)+1:1,o===e.length&&(o=0);o<e.length&&e.length>1;)if(this.isFocusableElement(e[o])){this.moveToTabByIndex(e,o);break}else{if(this.activetab&&o===e.indexOf(this.activetab))break;o+1>=e.length?o=0:o+=1}},this.adjustBackward=t=>{const e=this.tabs;let o=0;for(o=this.activetab?e.indexOf(this.activetab)-1:0,o=o<0?e.length-1:o;o>=0&&e.length>1;)if(this.isFocusableElement(e[o])){this.moveToTabByIndex(e,o);break}else o-1<0?o=e.length-1:o-=1},this.moveToTabByIndex=(t,e)=>{const o=t[e];this.activetab=o,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,o.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(o=>o.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`tab-${Ci()}`})}getTabPanelIds(){return this.tabpanels.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`panel-${Ci()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===lr.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",o=this.isHorizontal()?"offsetLeft":"offsetTop",s=this.activeIndicatorRef[o];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const n=this.activeIndicatorRef[o];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const r=n-s;this.activeIndicatorRef.style.transform=`${e}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=Xr(0,this.tabs.length-1,this.activeTabIndex+t),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}a([h],de.prototype,"orientation",void 0);a([h],de.prototype,"activeid",void 0);a([v],de.prototype,"tabs",void 0);a([v],de.prototype,"tabpanels",void 0);a([h({mode:"boolean"})],de.prototype,"activeindicator",void 0);a([v],de.prototype,"activeIndicatorRef",void 0);a([v],de.prototype,"showActiveIndicator",void 0);J(de,kt);class Vd extends E{}class Ld extends ne(Vd){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const ha={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};class ft extends Ld{constructor(){super(...arguments),this.resize=ha.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}}a([h({mode:"boolean"})],ft.prototype,"readOnly",void 0);a([h],ft.prototype,"resize",void 0);a([h({mode:"boolean"})],ft.prototype,"autofocus",void 0);a([h({attribute:"form"})],ft.prototype,"formId",void 0);a([h],ft.prototype,"list",void 0);a([h({converter:$})],ft.prototype,"maxlength",void 0);a([h({converter:$})],ft.prototype,"minlength",void 0);a([h],ft.prototype,"name",void 0);a([h],ft.prototype,"placeholder",void 0);a([h({converter:$,mode:"fromView"})],ft.prototype,"cols",void 0);a([h({converter:$,mode:"fromView"})],ft.prototype,"rows",void 0);a([h({mode:"boolean"})],ft.prototype,"spellcheck",void 0);a([v],ft.prototype,"defaultSlottedNodes",void 0);J(ft,Io);const Pd=(i,t)=>y`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==ha.none?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Z("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,o)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${z("control")}
        ></textarea>
    </template>
`,Hd=(i,t)=>y`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Z({property:"defaultSlottedNodes",filter:aa})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${yt(i,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${z("control")}
            />
            ${vt(i,t)}
        </div>
    </template>
`,zd=(i,t)=>y`
    <template
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-orientation="${e=>e.orientation}"
        orientation="${e=>e.orientation}"
        role="toolbar"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        @focusin="${(e,o)=>e.focusinHandler(o.event)}"
        @keydown="${(e,o)=>e.keydownHandler(o.event)}"
        ${vo({property:"childItems",attributeFilter:["disabled","hidden"],filter:oe(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${yt(i,t)}
            <slot
                ${Z({filter:oe(),property:"slottedItems"})}
            ></slot>
            ${vt(i,t)}
        </div>
    </template>
`,cr=Object.freeze({[Ge.ArrowUp]:{[et.vertical]:-1},[Ge.ArrowDown]:{[et.vertical]:1},[Ge.ArrowLeft]:{[et.horizontal]:{[G.ltr]:-1,[G.rtl]:1}},[Ge.ArrowRight]:{[et.horizontal]:{[G.ltr]:1,[G.rtl]:-1}}});class _t extends E{constructor(){super(...arguments),this._activeIndex=0,this.direction=G.ltr,this.orientation=et.horizontal}get activeIndex(){return D.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=Xs(0,this.focusableElements.length-1,t),D.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(t){var e;const o=(e=this.focusableElements)===null||e===void 0?void 0:e.indexOf(t.target);return o>-1&&this.activeIndex!==o&&this.setFocusedElement(o),!0}childItemsChanged(t,e){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=Ae(this)}focusinHandler(t){const e=t.relatedTarget;!e||this.contains(e)||this.setFocusedElement()}getDirectionalIncrementer(t){var e,o,s,n,r;return(r=(s=(o=(e=cr[t])===null||e===void 0?void 0:e[this.orientation])===null||o===void 0?void 0:o[this.direction])!==null&&s!==void 0?s:(n=cr[t])===null||n===void 0?void 0:n[this.orientation])!==null&&r!==void 0?r:0}keydownHandler(t){const e=t.key;if(!(e in Ge)||t.defaultPrevented||t.shiftKey)return!0;const o=this.getDirectionalIncrementer(e);if(!o)return!t.target.closest("[role=radiogroup]");const s=this.activeIndex+o;return this.focusableElements[s]&&t.preventDefault(),this.setFocusedElement(s),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var t;const e=(t=this.focusableElements)===null||t===void 0?void 0:t[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(_t.reduceFocusableItems,[]);const o=this.focusableElements.indexOf(e);this.activeIndex=Math.max(0,o),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var e;this.activeIndex=t,this.setFocusableElements(),(e=this.focusableElements[this.activeIndex])===null||e===void 0||e.focus()}static reduceFocusableItems(t,e){var o,s,n,r;const l=e.getAttribute("role")==="radio",c=(s=(o=e.$fastController)===null||o===void 0?void 0:o.definition.shadowOptions)===null||s===void 0?void 0:s.delegatesFocus,u=Array.from((r=(n=e.shadowRoot)===null||n===void 0?void 0:n.querySelectorAll("*"))!==null&&r!==void 0?r:[]).some(f=>rr(f));return!e.hasAttribute("disabled")&&!e.hasAttribute("hidden")&&(rr(e)||l||c||u)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(_t.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,e)=>{t.tabIndex=this.activeIndex===e?0:-1})}}a([v],_t.prototype,"direction",void 0);a([h],_t.prototype,"orientation",void 0);a([v],_t.prototype,"slottedItems",void 0);a([v],_t.prototype,"slottedLabel",void 0);a([v],_t.prototype,"childItems",void 0);class So{}a([h({attribute:"aria-labelledby"})],So.prototype,"ariaLabelledby",void 0);a([h({attribute:"aria-label"})],So.prototype,"ariaLabel",void 0);J(So,Y);J(_t,kt,So);const Md=(i,t)=>y`
        ${W(e=>e.tooltipVisible,y`
            <${i.tagFor(M)}
                fixed-placement="true"
                auto-update-mode="${e=>e.autoUpdateMode}"
                vertical-positioning-mode="${e=>e.verticalPositioningMode}"
                vertical-default-position="${e=>e.verticalDefaultPosition}"
                vertical-inset="${e=>e.verticalInset}"
                vertical-scaling="${e=>e.verticalScaling}"
                horizontal-positioning-mode="${e=>e.horizontalPositioningMode}"
                horizontal-default-position="${e=>e.horizontalDefaultPosition}"
                horizontal-scaling="${e=>e.horizontalScaling}"
                horizontal-inset="${e=>e.horizontalInset}"
                vertical-viewport-lock="${e=>e.horizontalViewportLock}"
                horizontal-viewport-lock="${e=>e.verticalViewportLock}"
                dir="${e=>e.currentDirection}"
                ${z("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${i.tagFor(M)}>
        `)}
    `,wt={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"};class st extends E{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=G.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=t=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=t=>{this.isRegionHovered=!0},this.handleRegionMouseOut=t=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=t=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=t=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&this.tooltipVisible)switch(t.key){case ni:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=Ae(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),R.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{!this.tooltipVisible||(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{!this.tooltipVisible||(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(t!=null&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const e=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(o=>{o.id===e&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case wt.top:case wt.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case wt.right:case wt.left:case wt.start:case wt.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case wt.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case wt.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case wt.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case wt.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case wt.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case wt.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case wt.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case wt.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}}a([h({mode:"boolean"})],st.prototype,"visible",void 0);a([h],st.prototype,"anchor",void 0);a([h],st.prototype,"delay",void 0);a([h],st.prototype,"position",void 0);a([h({attribute:"auto-update-mode"})],st.prototype,"autoUpdateMode",void 0);a([h({attribute:"horizontal-viewport-lock"})],st.prototype,"horizontalViewportLock",void 0);a([h({attribute:"vertical-viewport-lock"})],st.prototype,"verticalViewportLock",void 0);a([v],st.prototype,"anchorElement",void 0);a([v],st.prototype,"viewportElement",void 0);a([v],st.prototype,"verticalPositioningMode",void 0);a([v],st.prototype,"horizontalPositioningMode",void 0);a([v],st.prototype,"horizontalInset",void 0);a([v],st.prototype,"verticalInset",void 0);a([v],st.prototype,"horizontalScaling",void 0);a([v],st.prototype,"verticalScaling",void 0);a([v],st.prototype,"verticalDefaultPosition",void 0);a([v],st.prototype,"horizontalDefaultPosition",void 0);a([v],st.prototype,"tooltipVisible",void 0);a([v],st.prototype,"currentDirection",void 0);const Bd=(i,t)=>y`
    <template
        role="treeitem"
        slot="${e=>e.isNestedItem()?"item":void 0}"
        tabindex="-1"
        class="${e=>e.expanded?"expanded":""} ${e=>e.selected?"selected":""} ${e=>e.nested?"nested":""}
            ${e=>e.disabled?"disabled":""}"
        aria-expanded="${e=>e.childItems&&e.childItemLength()>0?e.expanded:void 0}"
        aria-selected="${e=>e.selected}"
        aria-disabled="${e=>e.disabled}"
        @focusin="${(e,o)=>e.handleFocus(o.event)}"
        @focusout="${(e,o)=>e.handleBlur(o.event)}"
        ${vo({property:"childItems",filter:oe()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${W(e=>e.childItems&&e.childItemLength()>0,y`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(e,o)=>e.handleExpandCollapseButtonClick(o.event)}"
                            ${z("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${t.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${yt(i,t)}
                <slot></slot>
                ${vt(i,t)}
            </div>
        </div>
        ${W(e=>e.childItems&&e.childItemLength()>0&&(e.expanded||e.renderCollapsedChildren),y`
                <div role="group" class="items" part="items">
                    <slot name="item" ${Z("items")}></slot>
                </div>
            `)}
    </template>
`;function fe(i){return ti(i)&&i.getAttribute("role")==="treeitem"}class nt extends E{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>fe(this.parentElement),this.handleExpandCollapseButtonClick=t=>{!this.disabled&&!t.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,e){this.$fastController.isConnected&&this.items.forEach(o=>{fe(o)&&(o.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter(e=>fe(e));return t?t.length:0}}a([h({mode:"boolean"})],nt.prototype,"expanded",void 0);a([h({mode:"boolean"})],nt.prototype,"selected",void 0);a([h({mode:"boolean"})],nt.prototype,"disabled",void 0);a([v],nt.prototype,"focusable",void 0);a([v],nt.prototype,"childItems",void 0);a([v],nt.prototype,"items",void 0);a([v],nt.prototype,"nested",void 0);a([v],nt.prototype,"renderCollapsedChildren",void 0);J(nt,kt);const Nd=(i,t)=>y`
    <template
        role="tree"
        ${z("treeView")}
        @keydown="${(e,o)=>e.handleKeyDown(o.event)}"
        @focusin="${(e,o)=>e.handleFocus(o.event)}"
        @focusout="${(e,o)=>e.handleBlur(o.event)}"
        @click="${(e,o)=>e.handleClick(o.event)}"
        @selected-change="${(e,o)=>e.handleSelectedChange(o.event)}"
    >
        <slot ${Z("slottedTreeItems")}></slot>
    </template>
`;class Do extends E{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1)){if(t.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&nt.focusItem(this.currentFocused);return}this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target)}},this.handleBlur=t=>{t.target instanceof HTMLElement&&(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const e=this.getVisibleNodes();switch(t.key){case Xt:e.length&&nt.focusItem(e[0]);return;case Qt:e.length&&nt.focusItem(e[e.length-1]);return;case me:if(t.target&&this.isFocusableElement(t.target)){const o=t.target;o instanceof nt&&o.childItemLength()>0&&o.expanded?o.expanded=!1:o instanceof nt&&o.parentElement instanceof nt&&nt.focusItem(o.parentElement)}return!1;case be:if(t.target&&this.isFocusableElement(t.target)){const o=t.target;o instanceof nt&&o.childItemLength()>0&&!o.expanded?o.expanded=!0:o instanceof nt&&o.childItemLength()>0&&this.focusNextNode(1,t.target)}return;case Ht:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);return;case zt:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);return;case se:this.handleClick(t);return}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!fe(t.target))return!0;const e=t.target;e.selected?(this.currentSelected&&this.currentSelected!==e&&(this.currentSelected.selected=!1),this.currentSelected=e):!e.selected&&this.currentSelected===e&&(this.currentSelected=null)},this.setItems=()=>{const t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(o=>{fe(o)&&(o.nested=this.nested)})},this.isFocusableElement=t=>fe(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),R.queueUpdate(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!fe(t.target))return!0;const e=t.target;e.disabled||(e.selected=!e.selected)}focusNextNode(t,e){const o=this.getVisibleNodes();if(!o)return;const s=o[o.indexOf(e)+t];ti(s)&&nt.focusItem(s)}getValidFocusableItem(){const t=this.getVisibleNodes();let e=t.findIndex(this.isSelectedElement);return e===-1&&(e=t.findIndex(this.isFocusableElement)),e!==-1?t[e]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>fe(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return Mc(this,"[role='treeitem']")||[]}}a([h({attribute:"render-collapsed-nodes"})],Do.prototype,"renderCollapsedNodes",void 0);a([v],Do.prototype,"currentSelected",void 0);a([v],Do.prototype,"slottedTreeItems",void 0);class jd{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,o=this.constructListener(t);o.bind(e)(),e.addListener(o),this.listenerCache.set(t,o)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}class Pi extends jd{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new Pi(t,e)}constructListener(t){let e=!1;const o=this.styles;return function(){const{matches:n}=this;n&&!e?(t.$fastController.addStyles(o),e=n):!n&&e&&(t.$fastController.removeStyles(o),e=n)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const A=Pi.with(window.matchMedia("(forced-colors)"));Pi.with(window.matchMedia("(prefers-color-scheme: dark)"));Pi.with(window.matchMedia("(prefers-color-scheme: light)"));class _d{constructor(t,e,o){this.propertyName=t,this.value=e,this.styles=o}bind(t){D.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){D.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}const It="not-allowed",qd=":host([hidden]){display:none}";function L(i){return`${qd}:host{display:${i}}`}const T=Nc()?"focus-visible":"focus";function Ud(i,t,e,o){var s=arguments.length,n=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,o);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n}function V(i,t,e,o){function s(n){return n instanceof e?n:new e(function(r){r(n)})}return new(e||(e=Promise))(function(n,r){function l(f){try{u(o.next(f))}catch(p){r(p)}}function c(f){try{u(o.throw(f))}catch(p){r(p)}}function u(f){f.done?n(f.value):s(f.value).then(l,c)}u((o=o.apply(i,t||[])).next())})}class co{constructor(t){this.path=t}}const Ss=new Set,hr=Object.freeze({register(i){Ss.add(i)},unregister(i){Ss.delete(i)}}),dr=/^([a-z][a-z0-9+\-.]*:)?\/\//i,Vt=Object.freeze({path:Object.freeze({get current(){return location.pathname+location.search},generateRoute(i,t,e={}){return V(this,void 0,void 0,function*(){let o="config"in i?i:Ti.find(i);for(;o!==null;){const s=yield o.config.generateRouteFromPath(t,e);if(s!==null)return s;o=o.parent}return null})},push(i,t=!0){if(i&&dr.test(i)){location.href=i;return}history.pushState({},document.title,i),t&&Vt.path.trigger(i)},replace(i,t=!0){if(i&&dr.test(i)){location.href=i;return}history.replaceState({},document.title,i),t&&Vt.path.trigger(i)},trigger(i){const t=new co(i);for(const e of Ss)e.enqueue(t)}}),name:Object.freeze({generateRoute(i,t,e={}){return V(this,void 0,void 0,function*(){let o="config"in i?i:Ti.find(i);for(;o!==null;){const s=yield o.config.generateRouteFromName(t,e);if(s!==null)return s;o=o.parent}return null})},push(i,t,e={},o=!0){return V(this,void 0,void 0,function*(){const s=yield Vt.name.generateRoute(i,t,e);s!==null&&Vt.path.push(s,o)})},replace(i,t,e={},o=!0){return V(this,void 0,void 0,function*(){const s=yield Vt.name.generateRoute(i,t,e);s!==null&&Vt.path.replace(s,o)})},trigger(i,t,e={}){return V(this,void 0,void 0,function*(){const o=yield Vt.name.generateRoute(i,t,e);o!==null&&Vt.path.trigger(o)})}})});class Gd{constructor(){this.queue=[],this.promise=null,this.resolve=null}connect(){this.enqueue(new co(Vt.path.current)),window.addEventListener("popstate",this),hr.register(this)}disconnect(){this.queue=[],this.promise=null,this.resolve=null,window.removeEventListener("popstate",this),hr.unregister(this)}receive(){return this.promise!==null?this.promise:(this.promise=new Promise(t=>this.resolve=t),Promise.resolve().then(()=>this.tryDequeue()),this.promise)}enqueue(t){this.queue.push(t),this.tryDequeue()}tryDequeue(){if(this.resolve===null||this.queue.length===0)return;const t=this.queue[this.queue.length-1],e=this.resolve;this.queue.length=0,this.promise=null,this.resolve=null,e(t)}handleEvent(t){this.enqueue(new co(Vt.path.current))}}const Ds=encodeURIComponent,ur=i=>Ds(i).replace("%24","$");function Rs(i,t,e){let o=[];if(t==null)return o;if(Array.isArray(t))for(let s=0,n=t.length;s<n;s++)if(e)o.push(`${ur(i)}=${Ds(t[s])}`);else{const r=i+"["+(typeof t[s]=="object"&&t[s]!==null?s:"")+"]";o=o.concat(Rs(r,t[s]))}else if(typeof t=="object"&&!e)for(const s in t)o=o.concat(Rs(i+"["+s+"]",t[s]));else o.push(`${ur(i)}=${Ds(t)}`);return o}function Wd(i,t){return Array.isArray(i)?(i.push(t),i):i!==void 0?[i,t]:t}function Yd(i,t,e){let o=i;const s=t.length-1;for(let n=0;n<=s;n++){const r=t[n]===""?o.length:t[n];if(n<s){const l=!o[r]||typeof o[r]=="object"?o[r]:[o[r]];o=o[r]=l||(isNaN(t[n+1])?{}:[])}else o=o[r]=e}}const wi=Object.freeze({get current(){return location.search},build(i,t){let e=[];const o=Object.keys(i||{}).sort();for(let s=0,n=o.length;s<n;s++){const r=o[s];e=e.concat(Rs(r,i[r],t))}return e.length===0?"":e.join("&")},separate(i){const t=i.indexOf("?");let e="";return t!==-1&&(e=i.substr(t+1,i.length),i=i.substr(0,t)),{path:i,queryString:e}},parse(i){const t={};if(!i||typeof i!="string")return t;let e=i;e.charAt(0)==="?"&&(e=e.substr(1));const o=e.replace(/\+/g," ").split("&");for(let s=0;s<o.length;s++){const n=o[s].split("="),r=decodeURIComponent(n[0]);if(!r)continue;let l=r.split("]["),c=l.length-1;if(/\[/.test(l[0])&&/\]$/.test(l[c])?(l[c]=l[c].replace(/\]$/,""),l=l.shift().split("[").concat(l),c=l.length-1):c=0,n.length>=2){const u=n[1]?decodeURIComponent(n[1]):"";c?Yd(t,l,u):t[r]=Wd(t[r],u)}else t[r]=!0}return t}}),Xd=i=>i;class da{constructor(t,e,o){this.path=t,this.name=e,this.caseSensitive=o}}class ua{constructor(t,e,o,s){this.route=t,this.paramNames=e,this.paramTypes=o,this.settings=s}get path(){return this.route.path}}class pa{constructor(t,e,o,s){this.endpoint=t,this.params=e,this.typedParams=o,this.queryParams=s,this.allParams=Object.assign(Object.assign({},e),s),this.allTypedParams=Object.assign(Object.assign({},o),s)}get settings(){return this.endpoint.settings}}class en{constructor(t,e,o,s){var n;this.chars=t,this.states=e,this.skippedStates=o,this.result=s,this.head=e[e.length-1],this.endpoint=(n=this.head)===null||n===void 0?void 0:n.endpoint}advance(t){const{chars:e,states:o,skippedStates:s,result:n}=this;let r=null,l=0;const c=o[o.length-1];function u(f,p){if(f.isMatch(t)&&(++l===1?r=f:n.add(new en(e.concat(t),o.concat(f),p===null?s:s.concat(p),n))),c.segment===null&&f.isOptional&&f.nextStates!==null){if(f.nextStates.length>1)throw new Error(`${f.nextStates.length} nextStates`);const g=f.nextStates[0];if(!g.isSeparator)throw new Error("Not a separator");if(g.nextStates!==null)for(const F of g.nextStates)u(F,f)}}if(c.isDynamic&&u(c,null),c.nextStates!==null)for(const f of c.nextStates)u(f,null);r!==null&&(o.push(this.head=r),e.push(t),r.endpoint!==null&&(this.endpoint=r.endpoint)),l===0&&n.remove(this)}finalize(){function t(e,o){const s=o.nextStates;if(s!==null){if(s.length===1&&s[0].segment===null)t(e,s[0]);else for(const n of s)if(n.isOptional&&n.endpoint!==null){if(e.push(n),n.nextStates!==null)for(const r of n.nextStates)t(e,r);break}}}t(this.skippedStates,this.head)}getParams(){const{states:t,chars:e,endpoint:o}=this,s={};for(const n of o.paramNames)s[n]=void 0;for(let n=0,r=t.length;n<r;++n){const l=t[n];if(l.isDynamic){const c=l.segment.name;s[c]===void 0?s[c]=e[n]:s[c]+=e[n]}}return s}compareTo(t){const e=this.states,o=t.states;for(let c=0,u=0,f=Math.max(e.length,o.length);c<f;++c){let p=e[c];if(p===void 0)return 1;let g=o[u];if(g===void 0)return-1;let F=p.segment,S=g.segment;if(F===null){if(S===null){++u;continue}if((p=e[++c])===void 0)return 1;F=p.segment}else if(S===null){if((g=o[++u])===void 0)return-1;S=g.segment}if(F.kind<S.kind)return 1;if(F.kind>S.kind)return-1;++u}const s=this.skippedStates,n=t.skippedStates,r=s.length,l=n.length;if(r<l)return 1;if(r>l)return-1;for(let c=0;c<r;++c){const u=s[c],f=n[c];if(u.length<f.length)return 1;if(u.length>f.length)return-1}return 0}}function Qd(i){return i.head.endpoint!==null}function Zd(i,t){return i.compareTo(t)}class Jd{constructor(t){this.candidates=[],this.candidates=[new en([""],[t],[],this)]}get isEmpty(){return this.candidates.length===0}getSolution(){const t=this.candidates.filter(Qd);if(t.length===0)return null;for(const e of t)e.finalize();return t.sort(Zd),t[0]}add(t){this.candidates.push(t)}remove(t){this.candidates.splice(this.candidates.indexOf(t),1)}advance(t){const e=this.candidates.slice();for(const o of e)o.advance(t)}}class Es{constructor(){this.names=new Map,this.paths=new Map,this.rootState=new on(null,null,"")}add(t,e){if(t instanceof Array)for(const o of t)this.$add(o,e);else this.$add(t,e)}$add(t,e){const o=t.path,s=new da(t.path,t.name||"",t.caseSensitive===!0),n=o===""?[""]:o.split("/").filter(Kd),r=[],l=[];let c=this.rootState;const u=[];for(const p of n)switch(c=c.append(null,"/"),p.charAt(0)){case"{":{const g=p.slice(1,-1).split(":").map(Q=>Q.trim());g.length===2?l.push(g[1]):l.push("string");const F=g[0].endsWith("?"),S=F?g[0].slice(0,-1):g[0];r.push(S);const H=new pr(S,F);u.push(H),c=H.appendTo(c);break}case"*":{const g=p.slice(1);r.push(g),l.push("string");const F=new eu(g);u.push(F),c=F.appendTo(c);break}default:{const g=new tu(p,s.caseSensitive);u.push(g),c=g.appendTo(c);break}}const f=new ua(s,r,l,e||null);c.setEndpoint(f),this.paths.set(o,u),t.name&&this.names.set(t.name,u)}recognize(t,e={}){return V(this,void 0,void 0,function*(){const o=wi.separate(t),s=wi.parse(o.queryString);t=decodeURI(o.path),t.startsWith("/")||(t=`/${t}`),t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1));const n=new Jd(this.rootState);for(let g=0,F=t.length;g<F;++g){const S=t.charAt(g);if(n.advance(S),n.isEmpty)return null}const r=n.getSolution();if(r===null)return null;const{endpoint:l}=r,c=l.paramNames,u=l.paramTypes,f=r.getParams(),p={};for(let g=0,F=c.length;g<F;++g){const S=c[g],H=e[u[g]]||Xd,Q=f[S],Jt=yield H(Q);p[S]=Jt}return new pa(l,f,p,s)})}generateFromName(t,e){return this.generate(this.names.get(t),e)}generateFromPath(t,e){return this.generate(this.paths.get(t),e)}generate(t,e){if(!t)return null;const o=Object.assign({},e),s={};let n="";for(let l=0,c=t.length;l<c;l++){const u=t[l],f=u.generate(o,s);if(f==null){if(u instanceof pr&&!u.optional)throw new Error(`A value is required for route parameter '${u.name}'.`)}else n+="/",n+=f}n.charAt(0)!=="/"&&(n="/"+n);for(const l in s)delete o[l];const r=wi.build(o);return n+=r?`?${r}`:"",n}}class on{constructor(t,e,o){switch(this.prevState=t,this.segment=e,this.value=o,this.nextStates=null,this.endpoint=null,e==null?void 0:e.kind){case 2:this.length=t.length+1,this.isSeparator=!1,this.isDynamic=!0,this.isOptional=e.optional;break;case 1:this.length=t.length+1,this.isSeparator=!1,this.isDynamic=!0,this.isOptional=!1;break;case 3:this.length=t.length+1,this.isSeparator=!1,this.isDynamic=!1,this.isOptional=!1;break;case void 0:this.length=t===null?0:t.length,this.isSeparator=!0,this.isDynamic=!1,this.isOptional=!1;break}}append(t,e){let o,s=this.nextStates;return s===null?(o=void 0,s=this.nextStates=[]):t===null?o=s.find(n=>n.value===e):o=s.find(n=>{var r;return(r=n.segment)===null||r===void 0?void 0:r.equals(t)}),o===void 0&&s.push(o=new on(this,t,e)),o}setEndpoint(t){if(this.endpoint!==null)throw new Error(`Cannot add ambiguous route. The pattern '${t.route.path}' clashes with '${this.endpoint.route.path}'`);this.endpoint=t,this.isOptional&&(this.prevState.setEndpoint(t),this.prevState.isSeparator&&this.prevState.prevState!==null&&this.prevState.prevState.setEndpoint(t))}isMatch(t){const e=this.segment;switch(e==null?void 0:e.kind){case 2:return!this.value.includes(t);case 1:return!0;case 3:case void 0:return this.value.includes(t)}}}function Kd(i){return i.length>0}class tu{constructor(t,e){this.value=t,this.caseSensitive=e}get kind(){return 3}appendTo(t){const{value:e,value:{length:o}}=this;if(this.caseSensitive)for(let s=0;s<o;++s)t=t.append(this,e.charAt(s));else for(let s=0;s<o;++s){const n=e.charAt(s);t=t.append(this,n.toUpperCase()+n.toLowerCase())}return t}generate(){return this.value}equals(t){return t.kind===3&&t.caseSensitive===this.caseSensitive&&t.value===this.value}}class pr{constructor(t,e){this.name=t,this.optional=e}get kind(){return 2}appendTo(t){return t=t.append(this,"/"),t}generate(t,e){return e[this.name]=!0,t[this.name]}equals(t){return t.kind===2&&t.optional===this.optional&&t.name===this.name}}class eu{constructor(t){this.name=t}get kind(){return 1}appendTo(t){return t=t.append(this,""),t}generate(t,e){return e[this.name]=!0,t[this.name]}equals(t){return t.kind===1&&t.name===this.name}}const fa="fast-child-route";function fr(i,t){return"command"in t?t.command:"redirect"in t?new va(t.redirect):Ro.fromDefinition(i,t)}const gr=i=>{if(i==null)return!1;switch(i.toLowerCase().trim()){case"true":case"yes":case"1":return!0;default:return!1}},iu={number:i=>i===void 0?NaN:parseFloat(i),float:i=>i===void 0?NaN:parseFloat(i),int:i=>i===void 0?NaN:parseInt(i),integer:i=>i===void 0?NaN:parseInt(i),Date:i=>i===void 0?new Date(Date.now()):new Date(i),boolean:gr,bool:gr};class ou{constructor(t){this.owner=t,this._recognizer=null,this.pathToCommand=new Map,this.fallbackCommand=null,this.fallbackSettings=null,this.converters={}}get recognizer(){return this._recognizer===null&&(this._recognizer=this.owner.createRouteRecognizer()),this._recognizer}ignore(t){typeof t=="string"&&(t={path:t}),this.pathToCommand.set(t.path,new pu),this.recognizer.add(t,t.settings)}map(...t){for(const e of t){if("children"in e){const s=this.owner.createTitleBuilder(),n=e.children.map(r=>{const l=Object.assign(Object.assign(Object.assign({},e),r),{path:`${e.path}/${r.path}`});if("title"in e||"title"in r){const c=e.title||"",u=r.title||"";l.title=s.joinTitles(c,u)}if("name"in r){const c=e.name?e.name+"/":"";l.name=c+r.name}return l.children===e.children&&delete l.children,l});this.map(...n);continue}let o;if("command"in e?o=e.command:"redirect"in e?o=new va(e.redirect):o=Ro.fromDefinition(this.owner,e),this.pathToCommand.set(e.path,o),this.recognizer.add(e,e.settings),"childRouters"in e&&e.childRouters){const s=Object.assign(Object.assign({},e),{path:e.path+`/*${fa}`});this.pathToCommand.set(s.path,o),this.recognizer.add(s,s.settings)}}}fallback(t){const e=this.owner;typeof t=="function"?this.fallbackCommand={createContributor(o,s){return V(this,void 0,void 0,function*(){const n=yield t();return fr(e,n).createContributor(o,s)})}}:this.fallbackCommand=fr(e,t)}converter(t,e){let o;"convert"in e?o=e.convert.bind(e):e.prototype&&"convert"in e.prototype?o=s=>this.owner.construct(e).convert(s):o=e,this.converters[t]=o}recognize(t){return V(this,void 0,void 0,function*(){const e=yield this.recognizer.recognize(t,this.aggregateConverters());if(e!==null)return{route:e,command:this.pathToCommand.get(e.endpoint.path)};if(this.fallbackCommand!==null){const o=wi.separate(t),s=wi.parse(o.queryString);return{route:new pa(new ua(new da("*","",!1),[],[],this.fallbackSettings),{},{},s),command:this.fallbackCommand}}return null})}generateFromName(t,e){return this.recognizer.generateFromName(t,e)}generateFromPath(t,e){return this.recognizer.generateFromPath(t,e)}aggregateConverters(){return this.owner.parent===null?Object.assign(Object.assign({},iu),this.converters):Object.assign(Object.assign({},this.owner.parent.routes.aggregateConverters()),this.converters)}}const Ot="$router";function su(i){const t=i.parentElement;if(t)return t;{const e=i.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function ga(i){let t=i;for(;t=su(t);)if(Ot in t)return t[Ot];return null}const Ti=Object.freeze({getOrCreateFor(i){const t=i[Ot];return t!==void 0?t:i[Ot]=new ru(i)},find(i){return i[Ot]||ga(i)},from(i){class t extends i{constructor(){super(),Ti.getOrCreateFor(this)}get config(){return this[Ot].config}set config(s){this[Ot].config=s}}const e=t.prototype;if("connectedCallback"in e){const o=e.connectedCallback;e.connectedCallback=function(){o.call(this),this[Ot].connect()}}else e.connectedCallback=function(){this[Ot].connect()};if("disconnectedCallback"in e){const o=e.disconnectedCallback;e.disconnectedCallback=function(){o.call(this),this[Ot].disconnect()}}else e.disconnectedCallback=function(){this[Ot].disconnect()};return t}});function nu(i){return i instanceof xe}class ru{constructor(t){this.host=t,this.parentRouter=void 0,this.contributors=new Set,this.navigationQueue=null,this.linkHandler=null,this.newView=null,this.newRoute=null,this.childCommandContributor=null,this.childRoute=null,this.isConnected=!1,this.routerConfig=null,this.view=null,this.route=null,this.onNavigationMessage=e=>V(this,void 0,void 0,function*(){yield this.config.createNavigationProcess().run(this,e),this.navigationQueue.receive().then(this.onNavigationMessage)}),t[Ot]=this}get config(){return this.routerConfig}set config(t){this.routerConfig=t,this.tryConnect()}get parent(){if(this.parentRouter===void 0){if(!this.isConnected)return null;this.parentRouter=ga(this.host)}return this.parentRouter||null}get level(){return this.parent===null?0:this.parent.level+1}shouldRender(t){var e;if(this.route&&this.route.endpoint.path===t.endpoint.path){const o=t==null?void 0:t.allParams,s=(e=this.route)===null||e===void 0?void 0:e.allParams;if(JSON.stringify(s)===JSON.stringify(o))return!1}return!0}beginRender(t,e){return V(this,void 0,void 0,function*(){return this.newRoute=t,this.newView=yield e.createView(),this.newView.bind(t.allTypedParams,au.create(this)),this.newView.appendTo(this.host),yield e.transition.begin(this.host,this.view,this.newView),{commit:this.renderOperationCommit.bind(this,e.layout,e.transition),rollback:this.renderOperationRollback.bind(this,e.transition)}})}connect(){this.isConnected=!0,this.tryConnect()}disconnect(){this.parent===null?(this.navigationQueue!==null&&(this.navigationQueue.disconnect(),this.navigationQueue=null),this.linkHandler!==null&&(this.linkHandler.disconnect(),this.linkHandler=null)):this.parent.removeContributor(this),this.isConnected=!1,this.parentRouter=void 0}addContributor(t){this.contributors.add(t)}removeContributor(t){this.contributors.delete(t)}tryConnect(){this.config===null||!this.isConnected||(this.parent===null?(this.navigationQueue!==null&&this.navigationQueue.disconnect(),this.navigationQueue=this.config.createNavigationQueue(),this.navigationQueue.connect(),this.navigationQueue.receive().then(this.onNavigationMessage),this.linkHandler!==null&&this.linkHandler.disconnect(),this.linkHandler=this.config.createLinkHandler(),this.linkHandler.connect()):(this.config.parent=this.parent.config,this.parent.addContributor(this)))}renderOperationCommit(t,e){return V(this,void 0,void 0,function*(){yield t.beforeCommit(this.host),yield e.commit(this.host,this.view,this.newView),yield t.afterCommit(this.host),this.view!==null&&this.view.dispose(),this.route=this.newRoute,this.view=this.newView,this.newRoute=null,this.newView=null})}renderOperationRollback(t){return V(this,void 0,void 0,function*(){this.newView!==null&&(yield t.rollback(this.host,this.view,this.newView),this.newView.dispose(),this.newRoute=null,this.newView=null)})}navigate(t){return V(this,void 0,void 0,function*(){yield this.tunnel(t)})}leave(t){return V(this,void 0,void 0,function*(){if(yield this.tunnel(t),!t.canceled){const e=this.contributors;this.contributors=new Set,t.onCancel(()=>this.contributors=e)}})}construct(t){return V(this,void 0,void 0,function*(){if(this.parent!==null){const e=t.route.allParams[fa]||"",o=yield this.config.recognizeRoute(e);if(o===null){this.config.createEventSink().onUnhandledNavigationMessage(this,new co(e)),t.cancel();return}this.childRoute=o.route,this.childCommandContributor=yield o.command.createContributor(this,o.route)}yield this.tunnel(t)})}enter(t){return V(this,void 0,void 0,function*(){yield this.tunnel(t)})}commit(t){return V(this,void 0,void 0,function*(){yield this.tunnel(t)})}tunnel(t){return V(this,void 0,void 0,function*(){const e=this.childRoute,o=this.childCommandContributor;if(e&&o&&(yield t.evaluateContributor(o,e,this)),t.canceled)return;const s=[...this.config.findContributors(t.name),...Array.from(this.contributors)];for(const n of s)if(yield t.evaluateContributor(n,void 0,this),t.canceled)return})}}const au=Object.freeze({create(i){return Object.create(Ye,{router:{value:i}})}}),lu=Object.freeze({default:Object.freeze({begin(i,t,e){return V(this,void 0,void 0,function*(){})},rollback(i,t,e){return V(this,void 0,void 0,function*(){})},commit(i,t,e){return V(this,void 0,void 0,function*(){})}})});class sn{constructor(t=null,e=null,o=!0){this.template=t,this.runBeforeCommit=o,this.styles=e==null?null:Array.isArray(e)?ct.create(e):e instanceof ct?e:ct.create([e])}beforeCommit(t){return V(this,void 0,void 0,function*(){this.runBeforeCommit&&this.apply(t)})}afterCommit(t){return V(this,void 0,void 0,function*(){this.runBeforeCommit||this.apply(t)})}apply(t){nu(t)&&(t.$fastController.template!==this.template&&(t.$fastController.template=this.template),t.$fastController.styles!==this.styles&&(t.$fastController.styles=this.styles))}}const cu=Object.freeze({default:new sn(y`
            <slot></slot>
        `)});function ma(i,t){return t in i}const hu={lifecycle:!0,parameters:!0};class du extends Ei{constructor(t){super(),this.options=t}createPlaceholder(t){return R.createCustomAttributePlaceholder("fast-navigation-contributor",t)}createBehavior(t){return new uu(t,this.options)}}class uu{constructor(t,e){this.contributor=t,this.options=e,this.router=null}bind(t,e){if(this.options.lifecycle&&(this.router=e.router||Ti.find(this.contributor),this.router.addContributor(this.contributor)),this.options.parameters){const o=this.contributor,s=t;for(const n in s)o[n]=s[n]}}unbind(t){this.router!==null&&this.router.removeContributor(this.contributor)}}function ba(i){return new du(Object.assign({},hu,i))}class pu{createContributor(){return V(this,void 0,void 0,function*(){return{navigate(t){return V(this,void 0,void 0,function*(){t.cancel()})}}})}}class va{constructor(t){this.redirect=t}createContributor(){return V(this,void 0,void 0,function*(){const t=this.redirect;return{navigate(e){return V(this,void 0,void 0,function*(){const o=e.router.config,s=(yield o.generateRouteFromName(t,e.route.allParams))||(yield o.generateRouteFromPath(t,e.route.allParams));if(s===null)throw new Error(`Invalid redirect. Name or path not found: ${t}`);e.cancel(()=>V(this,void 0,void 0,function*(){return Vt.path.replace(s)}))})}}})}}function Zi(i){return y`<${i} ${ba()}></${i}>`}function mr(i){const t=document.createDocumentFragment();t.appendChild(i);const e=new _s(t,[ba().createBehavior(i)]);return{create(){return e}}}class fu{constructor(t,e,o){this.router=t,this.route=e,this.command=o}construct(t){return V(this,void 0,void 0,function*(){if(!this.router.shouldRender(this.route)){t.cancel();return}this.operation=yield this.router.beginRender(this.route,this.command),t.onCancel(()=>this.operation.rollback())})}commit(t){return V(this,void 0,void 0,function*(){yield this.operation.commit(),this.command.title&&t.setTitle(this.command.title)})}}class Ro{constructor(t,e){this.owner=t,this.createView=e,this._layout=null,this._transition=null,this.title=""}get transition(){return this._transition||this.owner.defaultTransition}set transition(t){this._transition=t}get layout(){return this._layout||this.owner.defaultLayout}set layout(t){this._layout=t}createContributor(t,e){return V(this,void 0,void 0,function*(){return new fu(t,e,this)})}static fromDefinition(t,e){let o;"template"in e?o=()=>V(this,void 0,void 0,function*(){let n=e.template;return typeof n=="function"&&(n=yield n()),n.create()}):o=()=>V(this,void 0,void 0,function*(){let n=e.element,r=null;if(e.factory)r=e.factory;else if(typeof n=="function"){let l=Re.forType(n);if(l)r=Zi(l.name);else if(n=yield n(),typeof n=="string")r=Zi(n);else if(n instanceof HTMLElement)r=mr(n);else if(l=Re.forType(n),l)r=Zi(l.name);else throw new Error("Invalid value for element in route config.")}else n instanceof HTMLElement?e.factory=r=mr(n):e.factory=r=Zi(n);return r.create()});const s=new Ro(t,o);return e.layout&&(e.layout instanceof ws?s.layout=new sn(e.layout):s.layout=e.layout),e.transition&&(s.transition=e.transition),e.title&&(s.title=e.title),s}}class gu{constructor(){this.handler=t=>{const{shouldHandleEvent:e,href:o}=this.getEventInfo(t);e&&(t.preventDefault(),Vt.path.push(o))}}connect(){window.addEventListener("click",this.handler,!0)}disconnect(){window.removeEventListener("click",this.handler)}getEventInfo(t){const e={shouldHandleEvent:!1,href:null,anchor:null},o=this.findClosestAnchor(t);if(!o||!this.targetIsThisWindow(o)||o.hasAttribute("download")||o.hasAttribute("router-ignore")||o.hasAttribute("data-router-ignore")||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)return e;const s=o.getAttribute("href");e.anchor=o,e.href=s;const n=t.which===1,r=s&&!(s.charAt(0)==="#"||/^[a-z]+:/i.test(s));return e.shouldHandleEvent=n&&!!r,e}findClosestAnchor(t){const e=t.composedPath();for(let o=0,s=e.length;o<s;++o){const n=e[o];if(n.tagName==="A")return n}return t.target}targetIsThisWindow(t){const e=t.getAttribute("target");return!e||e===window.name||e==="_self"}}class mu{constructor(t,e,o,s,n){this.name=t,this.commitActions=s,this.cancelActions=n,this.routes=[],this.routers=[],this.canceled=!1,this.titles=[],this.routes.push(e),this.routers.push(o)}get route(){return this.routes[this.routes.length-1]}get router(){return this.routers[this.routers.length-1]}cancel(t){this.canceled=!0,t&&this.cancelActions.push(t)}onCommit(t){this.commitActions.push(t)}onCancel(t){this.cancelActions.push(t)}setTitle(t){const e=this.router.level;for(;this.titles.length<e+1;)this.titles.push([]);this.titles[e].push(t)}evaluateContributor(t,e=this.route,o=this.router){return V(this,void 0,void 0,function*(){ma(t,this.name)&&(this.routes.push(e),this.routers.push(o),yield t[this.name](this),this.routes.pop(),this.routers.pop())})}}class bu{constructor(){this.phases=["navigate","leave","construct","enter","commit"]}run(t,e){return V(this,void 0,void 0,function*(){const o=t.config.createEventSink(),s=yield t.config.recognizeRoute(e.path);if(s===null){o.onUnhandledNavigationMessage(t,e);return}const n=s.route,r=s.command;o.onNavigationBegin(t,n,r);const l=[],c=[];let u=l;const f=[yield r.createContributor(t,n),t,this];for(const p of this.phases){const g=new mu(p,n,t,l,c);if(o.onPhaseBegin(g),g.canceled)u=c;else for(const F of f)if(yield g.evaluateContributor(F),g.canceled){u=c;break}if(o.onPhaseEnd(g),g.canceled)break}yield Promise.all(u.map(p=>p())).then(()=>o.onNavigationEnd(t,n,r))})}commit(t){const e=t.router.config.createTitleBuilder();document.title=e.buildTitle(t.router.config.title,t.titles)}}class vu{constructor(t=" - ",e=":"){this.segmentSeparator=t,this.fragmentSeparator=e}joinTitles(t,e){return t===""?e:e===""?t:`${t}${this.segmentSeparator}${e}`}buildTitle(t,e){let o=t;for(const s of e){o&&(o=o+this.segmentSeparator);let n="";for(const r of s)n&&(n=n+this.fragmentSeparator),n=n+r;o=o+n}return o}}class yu{onUnhandledNavigationMessage(t,e){}onNavigationBegin(t,e,o){}onPhaseBegin(t){}onPhaseEnd(t){}onNavigationEnd(t,e,o){}}class xu{constructor(){this.isConfigured=!1,this.routes=new ou(this),this.contributors=[],this.defaultLayout=cu.default,this.defaultTransition=lu.default,this.title="",this.parent=null}createNavigationQueue(){return this.construct(Gd)}createLinkHandler(){return this.construct(gu)}createNavigationProcess(){return new bu}createEventSink(){return this.construct(yu)}createTitleBuilder(){return this.construct(vu)}createRouteRecognizer(){return this.construct(Es)}construct(t){return this.parent!==null?this.parent.construct(t):new t}recognizeRoute(t){return V(this,void 0,void 0,function*(){return yield this.ensureConfigured(),this.routes.recognize(t)})}generateRouteFromName(t,e){return V(this,void 0,void 0,function*(){return yield this.ensureConfigured(),this.routes.generateFromName(t,e)})}generateRouteFromPath(t,e){return V(this,void 0,void 0,function*(){return yield this.ensureConfigured(),this.routes.generateFromPath(t,e)})}findContributors(t){return this.contributors.filter(e=>ma(e,t))}cached(t){let e=null;return()=>V(this,void 0,void 0,function*(){return e===null&&(e=new t),e})}ensureConfigured(){return V(this,void 0,void 0,function*(){this.isConfigured||(yield this.configure(),this.isConfigured=!0)})}}let br=class extends Ti.from(xe){};br=Ud([Gs("fast-router")],br);function Se(i,t,e){return isNaN(i)||i<=t?t:i>=e?e:i}function gs(i,t,e){return isNaN(i)||i<=t?0:i>=e?1:i/(e-t)}function Te(i,t,e){return isNaN(i)?t:t+i*(e-t)}function wu(i){const t=Math.round(Se(i,0,255)).toString(16);return t.length===1?"0"+t:t}function Ji(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:t+i*(e-t)}function bt(i,t){const e=Math.pow(10,t);return Math.round(i*e)/e}class Si{constructor(t,e,o){this.h=t,this.s=e,this.l=o}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.l)?new Si(t.h,t.s,t.l):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new Si(bt(this.h,t),bt(this.s,t),bt(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class lt{constructor(t,e,o){this.l=t,this.a=e,this.b=o}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.a)&&!isNaN(t.b)?new lt(t.l,t.a,t.b):null}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new lt(bt(this.l,t),bt(this.a,t),bt(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}lt.epsilon=216/24389;lt.kappa=24389/27;class ot{constructor(t,e,o,s){this.r=t,this.g=e,this.b=o,this.a=typeof s=="number"&&!isNaN(s)?s:1}static fromObject(t){return t&&!isNaN(t.r)&&!isNaN(t.g)&&!isNaN(t.b)?new ot(t.r,t.g,t.b,t.a):null}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Te(this.r,0,255))},${Math.round(Te(this.g,0,255))},${Math.round(Te(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Te(this.r,0,255))},${Math.round(Te(this.g,0,255))},${Math.round(Te(this.b,0,255))},${Se(this.a,0,1)})`}roundToPrecision(t){return new ot(bt(this.r,t),bt(this.g,t),bt(this.b,t),bt(this.a,t))}clamp(){return new ot(Se(this.r,0,1),Se(this.g,0,1),Se(this.b,0,1),Se(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return wu(Te(t,0,255))}}class Ft{constructor(t,e,o){this.x=t,this.y=e,this.z=o}static fromObject(t){return t&&!isNaN(t.x)&&!isNaN(t.y)&&!isNaN(t.z)?new Ft(t.x,t.y,t.z):null}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new Ft(bt(this.x,t),bt(this.y,t),bt(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}Ft.whitePoint=new Ft(.95047,1,1.08883);function $u(i){return i.r*.2126+i.g*.7152+i.b*.0722}function ya(i){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return $u(new ot(t(i.r),t(i.g),t(i.b),1))}function ms(i,t,e){return e-t===0?0:(i-t)/(e-t)}function bs(i,t,e){const o=ms(i.r,t.r,e.r),s=ms(i.g,t.g,e.g),n=ms(i.b,t.b,e.b);return(o+s+n)/3}function ku(i,t,e=null){let o=0,s=e;return s!==null?o=bs(i,t,s):(s=new ot(0,0,0,1),o=bs(i,t,s),o<=0&&(s=new ot(1,1,1,1),o=bs(i,t,s))),o=Math.round(o*1e3)/1e3,new ot(s.r,s.g,s.b,o)}function vr(i){const t=Math.max(i.r,i.g,i.b),e=Math.min(i.r,i.g,i.b),o=t-e;let s=0;o!==0&&(t===i.r?s=60*((i.g-i.b)/o%6):t===i.g?s=60*((i.b-i.r)/o+2):s=60*((i.r-i.g)/o+4)),s<0&&(s+=360);const n=(t+e)/2;let r=0;return o!==0&&(r=o/(1-Math.abs(2*n-1))),new Si(s,r,n)}function Cu(i,t=1){const e=(1-Math.abs(2*i.l-1))*i.s,o=e*(1-Math.abs(i.h/60%2-1)),s=i.l-e/2;let n=0,r=0,l=0;return i.h<60?(n=e,r=o,l=0):i.h<120?(n=o,r=e,l=0):i.h<180?(n=0,r=e,l=o):i.h<240?(n=0,r=o,l=e):i.h<300?(n=o,r=0,l=e):i.h<360&&(n=e,r=0,l=o),new ot(n+s,r+s,l+s,t)}function Fu(i){const t=(i.l+16)/116,e=t+i.a/500,o=t-i.b/200,s=Math.pow(e,3),n=Math.pow(t,3),r=Math.pow(o,3);let l=0;s>lt.epsilon?l=s:l=(116*e-16)/lt.kappa;let c=0;i.l>lt.epsilon*lt.kappa?c=n:c=i.l/lt.kappa;let u=0;return r>lt.epsilon?u=r:u=(116*o-16)/lt.kappa,l=Ft.whitePoint.x*l,c=Ft.whitePoint.y*c,u=Ft.whitePoint.z*u,new Ft(l,c,u)}function Iu(i){function t(c){return c>lt.epsilon?Math.pow(c,1/3):(lt.kappa*c+16)/116}const e=t(i.x/Ft.whitePoint.x),o=t(i.y/Ft.whitePoint.y),s=t(i.z/Ft.whitePoint.z),n=116*o-16,r=500*(e-o),l=200*(o-s);return new lt(n,r,l)}function Tu(i){function t(c){return c<=.04045?c/12.92:Math.pow((c+.055)/1.055,2.4)}const e=t(i.r),o=t(i.g),s=t(i.b),n=e*.4124564+o*.3575761+s*.1804375,r=e*.2126729+o*.7151522+s*.072175,l=e*.0193339+o*.119192+s*.9503041;return new Ft(n,r,l)}function Su(i,t=1){function e(r){return r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055}const o=e(i.x*3.2404542-i.y*1.5371385-i.z*.4985314),s=e(i.x*-.969266+i.y*1.8760108+i.z*.041556),n=e(i.x*.0556434-i.y*.2040259+i.z*1.0572252);return new ot(o,s,n,t)}function Du(i){return Iu(Tu(i))}function vs(i,t=1){return Su(Fu(i),t)}var yr;(function(i){i[i.Burn=0]="Burn",i[i.Color=1]="Color",i[i.Darken=2]="Darken",i[i.Dodge=3]="Dodge",i[i.Lighten=4]="Lighten",i[i.Multiply=5]="Multiply",i[i.Overlay=6]="Overlay",i[i.Screen=7]="Screen"})(yr||(yr={}));function Ru(i,t){if(t.a>=1)return t;if(t.a<=0)return new ot(i.r,i.g,i.b,1);const e=t.a*t.r+(1-t.a)*i.r,o=t.a*t.g+(1-t.a)*i.g,s=t.a*t.b+(1-t.a)*i.b;return new ot(e,o,s,1)}function Ki(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new ot(Ji(i,t.r,e.r),Ji(i,t.g,e.g),Ji(i,t.b,e.b),Ji(i,t.a,e.a))}var xr;(function(i){i[i.RGB=0]="RGB",i[i.HSL=1]="HSL",i[i.HSV=2]="HSV",i[i.XYZ=3]="XYZ",i[i.LAB=4]="LAB",i[i.LCH=5]="LCH"})(xr||(xr={}));const Eu=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function ge(i){const t=Eu.exec(i);if(t===null)return null;let e=t[1];if(e.length===3){const s=e.charAt(0),n=e.charAt(1),r=e.charAt(2);e=s.concat(s,n,n,r,r)}const o=parseInt(e,16);return isNaN(o)?null:new ot(gs((o&16711680)>>>16,0,255),gs((o&65280)>>>8,0,255),gs(o&255,0,255),1)}function ho(i,t){const e=i.relativeLuminance>t.relativeLuminance?i:t,o=i.relativeLuminance>t.relativeLuminance?t:i;return(e.relativeLuminance+.05)/(o.relativeLuminance+.05)}const Tt=Object.freeze({create(i,t,e){return new uo(i,t,e)},from(i){return new uo(i.r,i.g,i.b)}});function Au(i){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const e in t)if(typeof t[e]!=typeof i[e])return!1;return!0}class uo extends ot{constructor(t,e,o){super(t,e,o,1),this.toColorString=this.toStringHexRGB,this.contrast=ho.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=ya(this)}static fromObject(t){return new uo(t.r,t.g,t.b)}}function As(i,t,e=0,o=i.length-1){if(o===e)return i[e];const s=Math.floor((o-e)/2)+e;return t(i[s])?As(i,t,e,s):As(i,t,s+1,o)}const Ou=(-.1+Math.sqrt(.21))/2;function Hi(i){return i.relativeLuminance<=Ou}function Be(i){return Hi(i)?-1:1}const wr={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function Vu(i,t,e){return typeof i=="number"?Di.from(Tt.create(i,t,e)):Di.from(i)}function Lu(i,t){return Au(i)?Yt.from(i,t):Yt.from(Tt.create(i.r,i.g,i.b),t)}const Di=Object.freeze({create:Vu,from:Lu});class Yt{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,o,s){o===void 0&&(o=this.closestIndexOf(t));let n=this.swatches;const r=this.lastIndex;let l=o;s===void 0&&(s=Be(t));const c=u=>ho(t,u)>=e;return s===-1&&(n=this.reversedSwatches,l=r-l),As(n,c,l,r)}get(t){return this.swatches[t]||this.swatches[Se(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(e!==-1)return this.closestIndexCache.set(t.relativeLuminance,e),e;const o=this.swatches.reduce((s,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(s.relativeLuminance-t.relativeLuminance)?n:s);return e=this.swatches.indexOf(o),this.closestIndexCache.set(t.relativeLuminance,e),e}static saturationBump(t,e){const s=vr(t).s,n=vr(e);if(n.s<s){const r=new Si(n.h,s,n.l);return Cu(r)}return e}static ramp(t){const e=t/100;return e>.5?(e-.5)/.5:2*e}static createHighResolutionPalette(t){const e=[],o=Du(ot.fromObject(t).roundToPrecision(4)),s=vs(new lt(0,o.a,o.b)).clamp().roundToPrecision(4),n=vs(new lt(50,o.a,o.b)).clamp().roundToPrecision(4),r=vs(new lt(100,o.a,o.b)).clamp().roundToPrecision(4),l=new ot(0,0,0),c=new ot(1,1,1),u=r.equalValue(c)?0:14,f=s.equalValue(l)?0:14;for(let p=100+u;p>=0-f;p-=.5){let g;if(p<0){const F=p/f+1;g=Ki(F,l,s)}else if(p<=50)g=Ki(Yt.ramp(p),s,n);else if(p<=100)g=Ki(Yt.ramp(p),n,r);else{const F=(p-100)/u;g=Ki(F,r,c)}g=Yt.saturationBump(n,g).roundToPrecision(4),e.push(Tt.from(g))}return new Yt(t,e)}static adjustEnd(t,e,o,s){const n=s===-1?e.swatches:e.reversedSwatches,r=u=>{const f=e.closestIndexOf(u);return s===1?e.lastIndex-f:f};s===1&&o.reverse();const l=t(o[o.length-2]);if(bt(ho(o[o.length-1],o[o.length-2]),2)<l){o.pop();const u=e.colorContrast(n[e.lastIndex],l,void 0,s),f=r(u),p=r(o[o.length-2]),g=f-p;let F=1;for(let S=o.length-g-1;S<o.length;S++){const H=r(o[S]),Q=S===o.length-1?e.lastIndex:H+F;o[S]=n[Q],F++}}s===1&&o.reverse()}static createColorPaletteByContrast(t,e){const o=Yt.createHighResolutionPalette(t),s=l=>{const c=e.stepContrast+e.stepContrast*(1-l.relativeLuminance)*e.stepContrastRamp;return bt(c,2)},n=[];let r=e.preserveSource?t:o.swatches[0];n.push(r);do{const l=s(r);r=o.colorContrast(r,l,void 0,1),n.push(r)}while(r.relativeLuminance>0);if(e.preserveSource){r=t;do{const l=s(r);r=o.colorContrast(r,l,void 0,-1),n.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(s,o,n,-1),e.preserveSource&&this.adjustEnd(s,o,n,1),n}static from(t,e){const o=e===void 0?wr:Object.assign(Object.assign({},wr),e);return new Yt(t,Object.freeze(Yt.createColorPaletteByContrast(t,o)))}}const po=Tt.create(1,1,1),nn=Tt.create(0,0,0),Pu=Tt.create(.5,.5,.5),ys=ge("#0078D4"),Hu=Tt.create(ys.r,ys.g,ys.b);function xa(i,t,e,o,s){const n=f=>f.contrast(po)>=s?po:nn,r=n(i),l=n(t),c=r.relativeLuminance===l.relativeLuminance?r:n(e),u=n(o);return{rest:r,hover:l,active:c,focus:u}}class Eo{constructor(t,e,o,s){this.toColorString=()=>this.cssGradient,this.contrast=ho.bind(null,this),this.createCSS=this.toColorString,this.color=new ot(t,e,o),this.cssGradient=s,this.relativeLuminance=ya(this.color),this.r=t,this.g=e,this.b=o}static fromObject(t,e){return new Eo(t.r,t.g,t.b,e)}}const zu=new ot(0,0,0),Mu=new ot(1,1,1);function wa(i,t,e,o,s,n,r,l,c=10,u=!1){const f=i.closestIndexOf(t);l===void 0&&(l=Be(t));function p(Kt){if(u){const ci=i.closestIndexOf(t),hi=i.get(ci),ji=Kt.relativeLuminance<t.relativeLuminance?zu:Mu,_i=ku(ge(Kt.toColorString()),ge(hi.toColorString()),ji).roundToPrecision(2),es=Ru(ge(t.toColorString()),_i);return Tt.from(es)}else return Kt}const g=f+l*e,F=g+l*(o-e),S=g+l*(s-e),H=g+l*(n-e),Q=l===-1?0:100-c,Jt=l===-1?c:100;function Nt(Kt,ci){const hi=i.get(Kt);if(ci){const ji=i.get(Kt+l*r),_i=l===-1?ji:hi,es=l===-1?hi:ji,Al=`linear-gradient(${p(_i).toColorString()} ${Q}%, ${p(es).toColorString()} ${Jt}%)`;return Eo.fromObject(_i,Al)}else return p(hi)}return{rest:Nt(g,!0),hover:Nt(F,!0),active:Nt(S,!1),focus:Nt(H,!0)}}function Bu(i,t,e,o,s,n,r,l){const c=i.closestIndexOf(t),u=Be(t),f=c+u*e,p=f+u*(o-e),g=f+u*(s-e),F=f+u*(n-e),S=`calc(100% - ${l})`;function H(Q,Jt){const Nt=i.get(Q);if(Jt){const Kt=i.get(Q+u*r),ci=`linear-gradient(${Nt.toColorString()} ${S}, ${Kt.toColorString()} ${S}, ${Kt.toColorString()})`;return Eo.fromObject(Nt,ci)}else return Nt}return{rest:H(f,!0),hover:H(p,!0),active:H(g,!1),focus:H(F,!0)}}function Nu(i,t,e){return i.colorContrast(t,e)}function oi(i,t,e,o,s,n,r,l){l==null&&(l=Be(t));const c=i.closestIndexOf(i.colorContrast(t,e));return{rest:i.get(c+l*o),hover:i.get(c+l*s),active:i.get(c+l*n),focus:i.get(c+l*r)}}function ju(i,t,e,o,s,n,r,l=void 0,c,u,f,p,g,F=void 0){return Hi(t)?oi(i,t,c,u,f,p,g,F):oi(i,t,e,o,s,n,r,l)}function _u(i,t,e){return i.get(i.closestIndexOf(t)+Be(t)*e)}function ve(i,t,e,o,s,n,r){const l=i.closestIndexOf(t);return r==null&&(r=Be(t)),{rest:i.get(l+r*e),hover:i.get(l+r*o),active:i.get(l+r*s),focus:i.get(l+r*n)}}function rn(i,t,e,o,s,n,r=void 0,l,c,u,f,p=void 0){return Hi(t)?ve(i,t,l,c,u,f,p):ve(i,t,e,o,s,n,r)}function qu(i,t){return Hi(t)?po:nn}function Uu(i,t,e){return Hi(t)?nn:po}function Gu(i){return Tt.create(i,i,i)}var Os;(function(i){i[i.LightMode=.98]="LightMode",i[i.DarkMode=.15]="DarkMode"})(Os||(Os={}));function zi(i,t){return i.closestIndexOf(Gu(t))}function Wu(i,t){return i.get(zi(i,t))}function Yu(i,t,e){return i.get(zi(i,t)+e)}function $a(i,t,e){return i.get(zi(i,t)+e*-1)}function Xu(i,t,e){return i.get(zi(i,t)+e*-1*2)}function Qu(i,t,e){return i.get(zi(i,t)+e*-1*3)}const Zu={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:m}=q;function x(i){return q.create({name:i,cssCustomPropertyName:null})}const no=m("direction").withDefault(G.ltr),At=m("disabled-opacity").withDefault(.3),Ao=m("base-height-multiplier").withDefault(8),Ju=m("base-horizontal-spacing-multiplier").withDefault(3),ke=m("density").withDefault(0),w=m("design-unit").withDefault(4),B=m("control-corner-radius").withDefault(4),ee=m("layer-corner-radius").withDefault(8),k=m("stroke-width").withDefault(1),j=m("focus-stroke-width").withDefault(2),Bt=m("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),Ku=m("font-weight").withDefault(Zu.Normal);function ue(i){return t=>{const e=i.getValueFor(t),o=Ku.getValueFor(t);if(e.endsWith("px")){const s=Number.parseFloat(e.replace("px",""));if(s<=12)return`"wght" ${o}, "opsz" 8`;if(s>24)return`"wght" ${o}, "opsz" 36`}return`"wght" ${o}, "opsz" 10.5`}}const an=m("type-ramp-base-font-size").withDefault("14px"),ka=m("type-ramp-base-line-height").withDefault("20px"),tp=m("type-ramp-base-font-variations").withDefault(ue(an)),ln=m("type-ramp-minus-1-font-size").withDefault("12px"),cn=m("type-ramp-minus-1-line-height").withDefault("16px"),ep=m("type-ramp-minus-1-font-variations").withDefault(ue(ln)),hn=m("type-ramp-minus-2-font-size").withDefault("10px"),Ca=m("type-ramp-minus-2-line-height").withDefault("14px"),ip=m("type-ramp-minus-2-font-variations").withDefault(ue(hn)),dn=m("type-ramp-plus-1-font-size").withDefault("16px"),Fa=m("type-ramp-plus-1-line-height").withDefault("22px"),op=m("type-ramp-plus-1-font-variations").withDefault(ue(dn)),un=m("type-ramp-plus-2-font-size").withDefault("20px"),Ia=m("type-ramp-plus-2-line-height").withDefault("26px"),sp=m("type-ramp-plus-2-font-variations").withDefault(ue(un)),pn=m("type-ramp-plus-3-font-size").withDefault("24px"),Ta=m("type-ramp-plus-3-line-height").withDefault("32px"),np=m("type-ramp-plus-3-font-variations").withDefault(ue(pn)),fn=m("type-ramp-plus-4-font-size").withDefault("28px"),Sa=m("type-ramp-plus-4-line-height").withDefault("36px"),rp=m("type-ramp-plus-4-font-variations").withDefault(ue(fn)),gn=m("type-ramp-plus-5-font-size").withDefault("32px"),Da=m("type-ramp-plus-5-line-height").withDefault("40px"),ap=m("type-ramp-plus-5-font-variations").withDefault(ue(gn)),mn=m("type-ramp-plus-6-font-size").withDefault("40px"),Ra=m("type-ramp-plus-6-line-height").withDefault("52px"),lp=m("type-ramp-plus-6-font-variations").withDefault(ue(mn)),Ce=m("base-layer-luminance").withDefault(Os.LightMode),Vs=x("accent-fill-rest-delta").withDefault(0),Ls=x("accent-fill-hover-delta").withDefault(-2),Ps=x("accent-fill-active-delta").withDefault(-5),Hs=x("accent-fill-focus-delta").withDefault(0),Ea=x("accent-foreground-rest-delta").withDefault(0),Aa=x("accent-foreground-hover-delta").withDefault(3),Oa=x("accent-foreground-active-delta").withDefault(-8),Va=x("accent-foreground-focus-delta").withDefault(0),La=x("neutral-fill-rest-delta").withDefault(-1),Pa=x("neutral-fill-hover-delta").withDefault(1),Ha=x("neutral-fill-active-delta").withDefault(0),za=x("neutral-fill-focus-delta").withDefault(0),Ma=x("neutral-fill-input-rest-delta").withDefault(-1),Ba=x("neutral-fill-input-hover-delta").withDefault(1),Na=x("neutral-fill-input-active-delta").withDefault(0),ja=x("neutral-fill-input-focus-delta").withDefault(-2),to=x("neutral-fill-input-alt-rest-delta").withDefault(2),$r=x("neutral-fill-input-alt-hover-delta").withDefault(4),kr=x("neutral-fill-input-alt-active-delta").withDefault(6),Cr=x("neutral-fill-input-alt-focus-delta").withDefault(2),ye=x("neutral-fill-layer-rest-delta").withDefault(-2),cp=x("neutral-fill-layer-hover-delta").withDefault(-3),hp=x("neutral-fill-layer-active-delta").withDefault(-3),eo=x("neutral-fill-layer-alt-rest-delta").withDefault(-1),dp=x("neutral-fill-secondary-rest-delta").withDefault(3),up=x("neutral-fill-secondary-hover-delta").withDefault(2),pp=x("neutral-fill-secondary-active-delta").withDefault(1),fp=x("neutral-fill-secondary-focus-delta").withDefault(3),_a=x("neutral-fill-stealth-rest-delta").withDefault(0),qa=x("neutral-fill-stealth-hover-delta").withDefault(3),Ua=x("neutral-fill-stealth-active-delta").withDefault(2),Ga=x("neutral-fill-stealth-focus-delta").withDefault(0),gp=x("neutral-fill-strong-rest-delta").withDefault(0),Wa=x("neutral-fill-strong-hover-delta").withDefault(8),Ya=x("neutral-fill-strong-active-delta").withDefault(-5),Xa=x("neutral-fill-strong-focus-delta").withDefault(0),Qa=x("neutral-stroke-rest-delta").withDefault(8),Za=x("neutral-stroke-hover-delta").withDefault(12),Ja=x("neutral-stroke-active-delta").withDefault(6),Ka=x("neutral-stroke-focus-delta").withDefault(8),tl=x("neutral-stroke-control-rest-delta").withDefault(3),el=x("neutral-stroke-control-hover-delta").withDefault(5),il=x("neutral-stroke-control-active-delta").withDefault(5),ol=x("neutral-stroke-control-focus-delta").withDefault(5),sl=x("neutral-stroke-divider-rest-delta").withDefault(4),Fr=x("neutral-stroke-layer-rest-delta").withDefault(3),mp=x("neutral-stroke-layer-hover-delta").withDefault(3),bp=x("neutral-stroke-layer-active-delta").withDefault(3),vp=x("neutral-stroke-strong-hover-delta").withDefault(0),yp=x("neutral-stroke-strong-active-delta").withDefault(0),xp=x("neutral-stroke-strong-focus-delta").withDefault(0),nl=m("neutral-base-color").withDefault(Pu),X=x("neutral-palette").withDefault(i=>Di.from(nl.getValueFor(i))),bn=m("accent-base-color").withDefault(Hu),vn=x("accent-palette").withDefault(i=>Di.from(bn.getValueFor(i))),wp=x("neutral-layer-card-container-recipe").withDefault({evaluate:i=>$a(X.getValueFor(i),Ce.getValueFor(i),ye.getValueFor(i))});m("neutral-layer-card-container").withDefault(i=>wp.getValueFor(i).evaluate(i));const $p=x("neutral-layer-floating-recipe").withDefault({evaluate:i=>Yu(X.getValueFor(i),Ce.getValueFor(i),ye.getValueFor(i))}),Mi=m("neutral-layer-floating").withDefault(i=>$p.getValueFor(i).evaluate(i)),kp=x("neutral-layer-1-recipe").withDefault({evaluate:i=>Wu(X.getValueFor(i),Ce.getValueFor(i))}),Cp=m("neutral-layer-1").withDefault(i=>kp.getValueFor(i).evaluate(i)),Fp=x("neutral-layer-2-recipe").withDefault({evaluate:i=>$a(X.getValueFor(i),Ce.getValueFor(i),ye.getValueFor(i))}),xs=m("neutral-layer-2").withDefault(i=>Fp.getValueFor(i).evaluate(i)),Ip=x("neutral-layer-3-recipe").withDefault({evaluate:i=>Xu(X.getValueFor(i),Ce.getValueFor(i),ye.getValueFor(i))});m("neutral-layer-3").withDefault(i=>Ip.getValueFor(i).evaluate(i));const Tp=x("neutral-layer-4-recipe").withDefault({evaluate:i=>Qu(X.getValueFor(i),Ce.getValueFor(i),ye.getValueFor(i))});m("neutral-layer-4").withDefault(i=>Tp.getValueFor(i).evaluate(i));const O=m("fill-color").withDefault(i=>Cp.getValueFor(i));var fo;(function(i){i[i.normal=4.5]="normal",i[i.large=3]="large"})(fo||(fo={}));const Oo=x("accent-fill-recipe").withDefault({evaluate:(i,t)=>ju(vn.getValueFor(i),t||O.getValueFor(i),5,Vs.getValueFor(i),Ls.getValueFor(i),Ps.getValueFor(i),Hs.getValueFor(i),void 0,8,Vs.getValueFor(i),Ls.getValueFor(i),Ps.getValueFor(i),Hs.getValueFor(i),void 0)}),U=m("accent-fill-rest").withDefault(i=>Oo.getValueFor(i).evaluate(i).rest),qt=m("accent-fill-hover").withDefault(i=>Oo.getValueFor(i).evaluate(i).hover),Ut=m("accent-fill-active").withDefault(i=>Oo.getValueFor(i).evaluate(i).active),Vo=m("accent-fill-focus").withDefault(i=>Oo.getValueFor(i).evaluate(i).focus),Lo=x("foreground-on-accent-recipe").withDefault({evaluate:i=>xa(U.getValueFor(i),qt.getValueFor(i),Ut.getValueFor(i),Vo.getValueFor(i),fo.normal)}),Oe=m("foreground-on-accent-rest").withDefault(i=>Lo.getValueFor(i).evaluate(i).rest),rl=m("foreground-on-accent-hover").withDefault(i=>Lo.getValueFor(i).evaluate(i).hover),al=m("foreground-on-accent-active").withDefault(i=>Lo.getValueFor(i).evaluate(i).active);m("foreground-on-accent-focus").withDefault(i=>Lo.getValueFor(i).evaluate(i).focus);const Po=x("accent-foreground-recipe").withDefault({evaluate:(i,t)=>oi(vn.getValueFor(i),t||O.getValueFor(i),9.5,Ea.getValueFor(i),Aa.getValueFor(i),Oa.getValueFor(i),Va.getValueFor(i))}),ll=m("accent-foreground-rest").withDefault(i=>Po.getValueFor(i).evaluate(i).rest),cl=m("accent-foreground-hover").withDefault(i=>Po.getValueFor(i).evaluate(i).hover),hl=m("accent-foreground-active").withDefault(i=>Po.getValueFor(i).evaluate(i).active);m("accent-foreground-focus").withDefault(i=>Po.getValueFor(i).evaluate(i).focus);const Ho=x("accent-stroke-control-recipe").withDefault({evaluate:(i,t)=>wa(X.getValueFor(i),t||O.getValueFor(i),-3,-3,-3,-3,10,1,void 0,!0)}),Sp=m("accent-stroke-control-rest").withDefault(i=>Ho.getValueFor(i).evaluate(i,U.getValueFor(i)).rest),Dp=m("accent-stroke-control-hover").withDefault(i=>Ho.getValueFor(i).evaluate(i,qt.getValueFor(i)).hover),Rp=m("accent-stroke-control-active").withDefault(i=>Ho.getValueFor(i).evaluate(i,Ut.getValueFor(i)).active);m("accent-stroke-control-focus").withDefault(i=>Ho.getValueFor(i).evaluate(i,Vo.getValueFor(i)).focus);const zo=x("neutral-fill-recipe").withDefault({evaluate:(i,t)=>rn(X.getValueFor(i),t||O.getValueFor(i),La.getValueFor(i),Pa.getValueFor(i),Ha.getValueFor(i),za.getValueFor(i),void 0,2,3,1,2,void 0)}),$t=m("neutral-fill-rest").withDefault(i=>zo.getValueFor(i).evaluate(i).rest),go=m("neutral-fill-hover").withDefault(i=>zo.getValueFor(i).evaluate(i).hover),mo=m("neutral-fill-active").withDefault(i=>zo.getValueFor(i).evaluate(i).active);m("neutral-fill-focus").withDefault(i=>zo.getValueFor(i).evaluate(i).focus);const Fe=x("neutral-fill-input-recipe").withDefault({evaluate:(i,t)=>rn(X.getValueFor(i),t||O.getValueFor(i),Ma.getValueFor(i),Ba.getValueFor(i),Na.getValueFor(i),ja.getValueFor(i),void 0,2,3,1,0,void 0)}),io=m("neutral-fill-input-rest").withDefault(i=>Fe.getValueFor(i).evaluate(i).rest),Ir=m("neutral-fill-input-hover").withDefault(i=>Fe.getValueFor(i).evaluate(i).hover);m("neutral-fill-input-active").withDefault(i=>Fe.getValueFor(i).evaluate(i).active);const Tr=m("neutral-fill-input-focus").withDefault(i=>Fe.getValueFor(i).evaluate(i).focus),Mo=x("neutral-fill-input-alt-recipe").withDefault({evaluate:(i,t)=>rn(X.getValueFor(i),t||O.getValueFor(i),to.getValueFor(i),$r.getValueFor(i),kr.getValueFor(i),Cr.getValueFor(i),1,to.getValueFor(i),to.getValueFor(i)-$r.getValueFor(i),to.getValueFor(i)-kr.getValueFor(i),Cr.getValueFor(i),1)}),yn=m("neutral-fill-input-alt-rest").withDefault(i=>Mo.getValueFor(i).evaluate(i).rest),xn=m("neutral-fill-input-alt-hover").withDefault(i=>Mo.getValueFor(i).evaluate(i).hover),wn=m("neutral-fill-input-alt-active").withDefault(i=>Mo.getValueFor(i).evaluate(i).active),$n=m("neutral-fill-input-alt-focus").withDefault(i=>Mo.getValueFor(i).evaluate(i).focus),Ne=x("neutral-fill-layer-recipe").withDefault({evaluate:(i,t)=>ve(X.getValueFor(i),t||O.getValueFor(i),ye.getValueFor(i),cp.getValueFor(i),hp.getValueFor(i),ye.getValueFor(i),1)}),Ep=m("neutral-fill-layer-rest").withDefault(i=>Ne.getValueFor(i).evaluate(i).rest);m("neutral-fill-layer-hover").withDefault(i=>Ne.getValueFor(i).evaluate(i).hover);m("neutral-fill-layer-active").withDefault(i=>Ne.getValueFor(i).evaluate(i).active);const Ap=x("neutral-fill-layer-alt-recipe").withDefault({evaluate:(i,t)=>ve(X.getValueFor(i),t||O.getValueFor(i),eo.getValueFor(i),eo.getValueFor(i),eo.getValueFor(i),eo.getValueFor(i))}),Op=m("neutral-fill-layer-alt-rest").withDefault(i=>Ap.getValueFor(i).evaluate(i).rest),je=x("neutral-fill-secondary-recipe").withDefault({evaluate:(i,t)=>ve(X.getValueFor(i),t||O.getValueFor(i),dp.getValueFor(i),up.getValueFor(i),pp.getValueFor(i),fp.getValueFor(i))}),Ve=m("neutral-fill-secondary-rest").withDefault(i=>je.getValueFor(i).evaluate(i).rest),Bo=m("neutral-fill-secondary-hover").withDefault(i=>je.getValueFor(i).evaluate(i).hover),dl=m("neutral-fill-secondary-active").withDefault(i=>je.getValueFor(i).evaluate(i).active);m("neutral-fill-secondary-focus").withDefault(i=>je.getValueFor(i).evaluate(i).focus);const Wt=x("neutral-fill-stealth-recipe").withDefault({evaluate:(i,t)=>ve(X.getValueFor(i),t||O.getValueFor(i),_a.getValueFor(i),qa.getValueFor(i),Ua.getValueFor(i),Ga.getValueFor(i))}),Le=m("neutral-fill-stealth-rest").withDefault(i=>Wt.getValueFor(i).evaluate(i).rest),Pe=m("neutral-fill-stealth-hover").withDefault(i=>Wt.getValueFor(i).evaluate(i).hover),He=m("neutral-fill-stealth-active").withDefault(i=>Wt.getValueFor(i).evaluate(i).active),Vp=m("neutral-fill-stealth-focus").withDefault(i=>Wt.getValueFor(i).evaluate(i).focus),No=x("neutral-fill-strong-recipe").withDefault({evaluate:(i,t)=>oi(X.getValueFor(i),t||O.getValueFor(i),4.5,gp.getValueFor(i),Wa.getValueFor(i),Ya.getValueFor(i),Xa.getValueFor(i))}),ul=m("neutral-fill-strong-rest").withDefault(i=>No.getValueFor(i).evaluate(i).rest),Lp=m("neutral-fill-strong-hover").withDefault(i=>No.getValueFor(i).evaluate(i).hover),Pp=m("neutral-fill-strong-active").withDefault(i=>No.getValueFor(i).evaluate(i).active);m("neutral-fill-strong-focus").withDefault(i=>No.getValueFor(i).evaluate(i).focus);const jo=x("neutral-foreground-recipe").withDefault({evaluate:(i,t)=>oi(X.getValueFor(i),t||O.getValueFor(i),16,0,-19,-30,0)}),N=m("neutral-foreground-rest").withDefault(i=>jo.getValueFor(i).evaluate(i).rest),Hp=m("neutral-foreground-hover").withDefault(i=>jo.getValueFor(i).evaluate(i).hover),zp=m("neutral-foreground-active").withDefault(i=>jo.getValueFor(i).evaluate(i).active);m("neutral-foreground-focus").withDefault(i=>jo.getValueFor(i).evaluate(i).focus);const Bi=x("neutral-foreground-hint-recipe").withDefault({evaluate:(i,t)=>Nu(X.getValueFor(i),t||O.getValueFor(i),4.5)}),si=m("neutral-foreground-hint").withDefault(i=>Bi.getValueFor(i).evaluate(i)),_o=x("neutral-stroke-recipe").withDefault({evaluate:(i,t)=>ve(X.getValueFor(i),t||O.getValueFor(i),Qa.getValueFor(i),Za.getValueFor(i),Ja.getValueFor(i),Ka.getValueFor(i))}),Ri=m("neutral-stroke-rest").withDefault(i=>_o.getValueFor(i).evaluate(i).rest),Mp=m("neutral-stroke-hover").withDefault(i=>_o.getValueFor(i).evaluate(i).hover),Bp=m("neutral-stroke-active").withDefault(i=>_o.getValueFor(i).evaluate(i).active),Np=m("neutral-stroke-focus").withDefault(i=>_o.getValueFor(i).evaluate(i).focus),qo=x("neutral-stroke-control-recipe").withDefault({evaluate:(i,t)=>wa(X.getValueFor(i),t||O.getValueFor(i),tl.getValueFor(i),el.getValueFor(i),il.getValueFor(i),ol.getValueFor(i),5)}),Uo=m("neutral-stroke-control-rest").withDefault(i=>qo.getValueFor(i).evaluate(i).rest),kn=m("neutral-stroke-control-hover").withDefault(i=>qo.getValueFor(i).evaluate(i).hover),Cn=m("neutral-stroke-control-active").withDefault(i=>qo.getValueFor(i).evaluate(i).active);m("neutral-stroke-control-focus").withDefault(i=>qo.getValueFor(i).evaluate(i).focus);const jp=x("neutral-stroke-divider-recipe").withDefault({evaluate:(i,t)=>_u(X.getValueFor(i),t||O.getValueFor(i),sl.getValueFor(i))}),Fn=m("neutral-stroke-divider-rest").withDefault(i=>jp.getValueFor(i).evaluate(i)),Go=x("neutral-stroke-input-recipe").withDefault({evaluate:(i,t)=>Bu(X.getValueFor(i),t||O.getValueFor(i),tl.getValueFor(i),el.getValueFor(i),il.getValueFor(i),ol.getValueFor(i),20,k.getValueFor(i)+"px")}),Sr=m("neutral-stroke-input-rest").withDefault(i=>Go.getValueFor(i).evaluate(i).rest),_p=m("neutral-stroke-input-hover").withDefault(i=>Go.getValueFor(i).evaluate(i).hover);m("neutral-stroke-input-active").withDefault(i=>Go.getValueFor(i).evaluate(i).active);m("neutral-stroke-input-focus").withDefault(i=>Go.getValueFor(i).evaluate(i).focus);const In=x("neutral-stroke-layer-recipe").withDefault({evaluate:(i,t)=>ve(X.getValueFor(i),t||O.getValueFor(i),Fr.getValueFor(i),mp.getValueFor(i),bp.getValueFor(i),Fr.getValueFor(i))}),Je=m("neutral-stroke-layer-rest").withDefault(i=>In.getValueFor(i).evaluate(i).rest);m("neutral-stroke-layer-hover").withDefault(i=>In.getValueFor(i).evaluate(i).hover);m("neutral-stroke-layer-active").withDefault(i=>In.getValueFor(i).evaluate(i).active);const Wo=x("neutral-stroke-strong-recipe").withDefault({evaluate:(i,t)=>oi(X.getValueFor(i),t||O.getValueFor(i),5.5,0,vp.getValueFor(i),yp.getValueFor(i),xp.getValueFor(i))}),li=m("neutral-stroke-strong-rest").withDefault(i=>Wo.getValueFor(i).evaluate(i).rest),Tn=m("neutral-stroke-strong-hover").withDefault(i=>Wo.getValueFor(i).evaluate(i).hover),Sn=m("neutral-stroke-strong-active").withDefault(i=>Wo.getValueFor(i).evaluate(i).active);m("neutral-stroke-strong-focus").withDefault(i=>Wo.getValueFor(i).evaluate(i).focus);const qp=x("focus-stroke-outer-recipe").withDefault({evaluate:i=>qu(X.getValueFor(i),O.getValueFor(i))}),_=m("focus-stroke-outer").withDefault(i=>qp.getValueFor(i).evaluate(i)),Up=x("focus-stroke-inner-recipe").withDefault({evaluate:i=>Uu(vn.getValueFor(i),O.getValueFor(i),_.getValueFor(i))}),Gp=m("focus-stroke-inner").withDefault(i=>Up.getValueFor(i).evaluate(i)),Yo=x("foreground-on-accent-large-recipe").withDefault({evaluate:i=>xa(U.getValueFor(i),qt.getValueFor(i),Ut.getValueFor(i),Vo.getValueFor(i),fo.large)});m("foreground-on-accent-rest-large").withDefault(i=>Yo.getValueFor(i).evaluate(i).rest);m("foreground-on-accent-hover-large").withDefault(i=>Yo.getValueFor(i).evaluate(i,qt.getValueFor(i)).hover);m("foreground-on-accent-active-large").withDefault(i=>Yo.getValueFor(i).evaluate(i,Ut.getValueFor(i)).active);m("foreground-on-accent-focus-large").withDefault(i=>Yo.getValueFor(i).evaluate(i,Vo.getValueFor(i)).focus);const Wp=m("neutral-fill-inverse-rest-delta").withDefault(0),Yp=m("neutral-fill-inverse-hover-delta").withDefault(-3),Xp=m("neutral-fill-inverse-active-delta").withDefault(7),Qp=m("neutral-fill-inverse-focus-delta").withDefault(0);function Zp(i,t,e,o,s,n){const r=Be(t),l=i.closestIndexOf(i.colorContrast(t,14)),c=l+r*Math.abs(e-o),u=r===1?e<o:r*e>r*o;let f,p;return u?(f=l,p=c):(f=c,p=l),{rest:i.get(f),hover:i.get(p),active:i.get(f+r*s),focus:i.get(f+r*n)}}const Xo=x("neutral-fill-inverse-recipe").withDefault({evaluate:(i,t)=>Zp(X.getValueFor(i),t||O.getValueFor(i),Wp.getValueFor(i),Yp.getValueFor(i),Xp.getValueFor(i),Qp.getValueFor(i))});m("neutral-fill-inverse-rest").withDefault(i=>Xo.getValueFor(i).evaluate(i).rest);m("neutral-fill-inverse-hover").withDefault(i=>Xo.getValueFor(i).evaluate(i).hover);m("neutral-fill-inverse-active").withDefault(i=>Xo.getValueFor(i).evaluate(i).active);m("neutral-fill-inverse-focus").withDefault(i=>Xo.getValueFor(i).evaluate(i).focus);const tt=Gt`
  font-family: ${Bt};
  font-size: ${an};
  line-height: ${ka};
  font-weight: initial;
  font-variation-settings: ${tp};
`,pl=Gt`
  font-family: ${Bt};
  font-size: ${ln};
  line-height: ${cn};
  font-weight: initial;
  font-variation-settings: ${ep};
`;Gt`
  font-family: ${Bt};
  font-size: ${hn};
  line-height: ${Ca};
  font-weight: initial;
  font-variation-settings: ${ip};
`;Gt`
  font-family: ${Bt};
  font-size: ${dn};
  line-height: ${Fa};
  font-weight: initial;
  font-variation-settings: ${op};
`;Gt`
  font-family: ${Bt};
  font-size: ${un};
  line-height: ${Ia};
  font-weight: initial;
  font-variation-settings: ${sp};
`;Gt`
  font-family: ${Bt};
  font-size: ${pn};
  line-height: ${Ta};
  font-weight: initial;
  font-variation-settings: ${np};
`;Gt`
  font-family: ${Bt};
  font-size: ${fn};
  line-height: ${Sa};
  font-weight: initial;
  font-variation-settings: ${rp};
`;Gt`
  font-family: ${Bt};
  font-size: ${gn};
  line-height: ${Da};
  font-weight: initial;
  font-variation-settings: ${ap};
`;Gt`
  font-family: ${Bt};
  font-size: ${mn};
  line-height: ${Ra};
  font-weight: initial;
  font-variation-settings: ${lp};
`;const Jp=(i,t)=>b`
    ${L("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${tt}
      color: ${N};
      gap: calc(${w} * 1px);
    }
  `,P=Gt`(${Ao} + ${ke}) * ${w}`,Kp=q.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(i=>{const t=Ne.getValueFor(i);return Wt.getValueFor(i).evaluate(i,t.evaluate(i).rest).rest}),tf=q.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(i=>{const t=Ne.getValueFor(i);return Wt.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),ef=q.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(i=>{const t=Ne.getValueFor(i);return Wt.getValueFor(i).evaluate(i,t.evaluate(i).rest).active}),of=(i,t)=>b`
    ${L("flex")} :host {
      box-sizing: border-box;
      ${tt};
      flex-direction: column;
      background: ${Ep};
      color: ${N};
      border: calc(${k} * 1px) solid ${Je};
      border-radius: calc(${ee} * 1px);
    }

    .region {
      display: none;
      padding: calc(${w} * 2 * 1px);
      background: ${Op};
    }

    .heading {
      display: grid;
      position: relative;
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      grid-column: 2;
      grid-row: 1;
      outline: none;
      margin: calc(${w} * 3 * 1px) 0;
      padding: 0 calc(${w} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: pointer;
    }

    .button:${T}::before {
      outline: none;
      border: calc(${k} * 1px) solid ${_};
      border-radius: calc(${ee} * 1px);
      box-shadow: 0 0 0 calc((${j} - ${k}) * 1px) ${_};
    }

    :host(.expanded) .button:${T}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${k} * 1px) solid ${Je};
      border-bottom-left-radius: calc((${ee} - ${k}) * 1px);
      border-bottom-right-radius: calc((${ee} - ${k}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${Kp};
      border-radius: calc(${B} * 1px);
      fill: currentcolor;
      width: calc(${P} * 1px);
      height: calc(${P} * 1px);
      margin: calc(${w} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${tf};
    }

    .heading:active .icon {
      background: ${ef};
    }

    slot[name='collapsed-icon'] {
      display: flex;
    }

    :host(.expanded) slot[name='collapsed-icon'] {
      display: none;
    }

    slot[name='expanded-icon'] {
      display: none;
    }

    :host(.expanded) slot[name='expanded-icon'] {
      display: flex;
    }

    .start {
      display: flex;
      align-items: center;
      padding-inline-start: calc(${w} * 2 * 1px);
      justify-content: center;
      grid-column: 1;
    }

    .end {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 3;
    }

    .icon,
    .start,
    .end {
      position: relative;
    }
  `.withBehaviors(A(b`
        .button:${T}::before {
          border-color: ${d.Highlight};
          box-shadow: 0 0 0 calc((${j} - ${k}) * 1px) ${d.Highlight};
        }
        .icon {
          fill: ${d.ButtonText};
        }
      `)),sf=Ee.compose({baseName:"accordion-item",template:$c,styles:of,collapsedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,expandedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
  `}),nf=Qs.compose({baseName:"accordion",template:Pc,styles:Jp});class Ni{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&no.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new rf(this.ltr,this.rtl,t),o=no.getValueFor(t);no.subscribe(e),e.attach(o),this.cache.set(t,e)}}class rf{constructor(t,e,o){this.ltr=t,this.rtl=e,this.source=o,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(this.source))}attach(t){this.attached!==this[t]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const _e=q.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(i,t,e)=>{let o=.12,s=.14;t>16&&(o=.2,s=.24);const n=`0 0 2px rgba(0, 0, 0, ${o})`,r=`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${s})`;return`${n}, ${r}`}}),af=q.create("elevation-shadow-card-rest-size").withDefault(4),lf=q.create("elevation-shadow-card-hover-size").withDefault(8),cf=q.create("elevation-shadow-card-active-size").withDefault(0),hf=q.create("elevation-shadow-card-focus-size").withDefault(8),df=q.create("elevation-shadow-card-rest").withDefault(i=>_e.getValueFor(i).evaluate(i,af.getValueFor(i)));q.create("elevation-shadow-card-hover").withDefault(i=>_e.getValueFor(i).evaluate(i,lf.getValueFor(i)));q.create("elevation-shadow-card-active").withDefault(i=>_e.getValueFor(i).evaluate(i,cf.getValueFor(i)));q.create("elevation-shadow-card-focus").withDefault(i=>_e.getValueFor(i).evaluate(i,hf.getValueFor(i)));const uf=q.create("elevation-shadow-tooltip-size").withDefault(16),pf=q.create("elevation-shadow-tooltip").withDefault(i=>_e.getValueFor(i).evaluate(i,uf.getValueFor(i))),ff=q.create("elevation-shadow-flyout-size").withDefault(32),fl=q.create("elevation-shadow-flyout").withDefault(i=>_e.getValueFor(i).evaluate(i,ff.getValueFor(i))),gf=q.create("elevation-shadow-dialog-size").withDefault(128),mf=q.create("elevation-shadow-dialog").withDefault(i=>_e.getValueFor(i).evaluate(i,gf.getValueFor(i))),gl=(i,t,e="",o="")=>b`
    ${L("inline-flex")} :host {
      position: relative;
      box-sizing: border-box;
      outline: none;
      ${tt}
      height: calc(${P} * 1px);
      min-width: calc(${P} * 1px);
      color: ${N};
      border-radius: calc(${B} * 1px);
      fill: currentcolor;
      cursor: pointer;
    }

    :host .control {
      background: padding-box linear-gradient(${$t}, ${$t}),
        border-box ${Uo};
      border: calc(${k} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${w} * 2 * ${ke})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      cursor: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    :host .control${e}:hover {
      background: padding-box linear-gradient(${go}, ${go}),
        border-box ${kn};
    }

    :host .control${e}:active {
      background: padding-box linear-gradient(${mo}, ${mo}),
        border-box ${Cn};
    }

    :host .control:${T} {
      border-color: ${_} !important;
      box-shadow: 0 0 0 calc((${j} - ${k}) * 1px) ${_} inset !important;
    }

    :host .control${o} {
      background: padding-box linear-gradient(${$t}, ${$t}), border-box ${Ri};
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `.withBehaviors(A(b`
        :host .control {
          background: ${d.ButtonFace};
          border-color: ${d.ButtonText};
          color: ${d.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled])) .control:hover,
        :host .control${e}:hover,
        .control${e}:hover {
          forced-color-adjust: none;
          background: ${d.Highlight};
          color: ${d.HighlightText};
        }
        .control:${T},
        :host .control:${T},
        :host(:${T}) .control {
          forced-color-adjust: none;
          background: ${d.ButtonFace};
          border-color: ${d.Highlight} !important;
          box-shadow: 0 0 0 calc((${j} - ${k}) * 1px) ${d.Highlight} !important;
        }
        :host([href]) .control {
          background: ${d.ButtonFace};
          border-color: ${d.LinkText};
          color: ${d.LinkText};
          fill: currentcolor;
        }
        :host([href]) .control:hover,
        :host(.neutral[href]) .control:hover {
          background: ${d.LinkText};
          border-color: ${d.LinkText} !important;
          color: ${d.HighlightText};
          fill: currentcolor;
        }
        :host([href]) .control:${T}{
          forced-color-adjust: none;
          border-color: ${d.LinkText} !important;
          box-shadow: 0 0 0 calc((${j} - ${k}) * 1px) ${d.LinkText} !important;
        }
    `)),ml=(i,t,e="",o="")=>b`
    :host .control {
      background: padding-box linear-gradient(${U}, ${U}),
        border-box ${Sp};
      color: ${Oe};
    }

    :host .control${e}:hover {
      background: padding-box linear-gradient(${qt}, ${qt}),
        border-box ${Dp};
      color: ${rl};
    }

    :host .control${e}:active {
      background: padding-box linear-gradient(${Ut}, ${Ut}),
        border-box ${Rp};
      color: ${al};
    }

    :host .control:${T} {
      box-shadow: 0 0 0 calc((${j} - ${k}) * 1px) ${_} inset,
        0 0 0 calc(((${j} + ${k}) - ${k}) * 1px) ${Gp} inset !important;
    }

    :host .control${o} {
      background: ${U};
    }
  `.withBehaviors(A(b`
        :host .control {
          forced-color-adjust: none;
          background: ${d.Highlight};
          color: ${d.HighlightText};
        }
        :host .control${e}:hover,
        :host .control${e}:active {
          background: ${d.HighlightText};
          border-color: ${d.Highlight};
          color: ${d.Highlight};
        }
        :host .control:${T} {
          background: ${d.Highlight};
          box-shadow: 0 0 0 calc((${j} - ${k}) * 1px) ${d.Highlight} inset,
            0 0 0 calc(((${j} + ${k}) - ${k}) * 1px) ${d.HighlightText} inset !important;
        }
        :host([href]) .control {
          background: ${d.LinkText};
          color: ${d.HighlightText};
        }
        :host([href]) .control:hover {
          background: ${d.ButtonFace};
          border-color: ${d.LinkText};
          box-shadow: none;
          color: ${d.LinkText};
          fill: currentcolor;
        }
        :host([href]) .control:${T} {
          background: ${d.LinkText};
          box-shadow: 0 0 0 calc((${j} - ${k}) * 1px) ${d.LinkText} inset,
            0 0 0 calc(((${j} + ${k}) - ${k}) * 1px) ${d.HighlightText} inset !important;
          color: ${d.HighlightText};
          fill: currentcolor;
        }
      `)),bf=(i,t,e="",o="")=>b`
    :host {
      height: auto;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      min-width: 0;
    }

    :host .control {
      display: inline;
      padding: 0;
      background: transparent;
      border: none;
      box-shadow: none;
      line-height: 1;
      text-decoration: underline 1px;
    }

    :host .control:not([href]) {
      background: transparent;
    }

    :host .control${e} {
      background: transparent;
      color: ${ll};
    }

    :host .control${e}:hover {
      background: transparent;
      color: ${cl};
      text-decoration: none;
    }

    :host .control${e}:active {
      background: transparent;
      color: ${hl};
      text-decoration: none;
    }

    :host .control:${T} {
      box-shadow: 0 0 0 calc(${j} * 1px) ${_} !important;
    }

    :host .control${o} {
      background: transparent;
    }
  `.withBehaviors(A(b`
      :host .control${e}:hover {
        color: ${d.Highlight};
        fill: currentcolor;
      }
      :host .control:${T} {
        color: ${d.LinkText};
      }
      `)),bl=(i,t,e="",o="")=>b`
    :host {
      color: ${ll};
    }

    :host .control {
      background: ${Le};
    }

    :host .control${e}:hover {
      background: ${Pe};
      color: ${cl};
    }

    :host .control${e}:active {
      background: ${He};
      color: ${hl};
    }

    :host .control${o} {
      background: ${Le};
    }
  `.withBehaviors(A(b`
        :host .control {
          border-color: ${d.ButtonFace};
          color: ${d.ButtonText};
        }
        :host .control${e}:hover,
        :host .control${e}:active,
        :host .control:${T} {
          border-color: ${d.Highlight};
          background: ${d.Highlight};
          box-shadow: none;
          color: ${d.HighlightText};
        }
        :host([href]) .control {
          border-color: ${d.ButtonFace};
          color: ${d.LinkText};
        }
        :host([href]) .control:hover,
        :host([href]) .control:${T} {
          background: ${d.ButtonFace};
          box-shadow: none;
          color: ${d.LinkText};
        }
      `)),vl=(i,t,e="",o="")=>b`
    :host .control {
      background: transparent !important;
      border-color: ${Ri};
    }

    :host .control${e}:hover {
      border-color: ${Mp};
    }

    :host .control${e}:active {
      border-color: ${Bp};
    }

    :host .control${o} {
      background: transparent !important;
      border-color: ${Ri};
    }
  `.withBehaviors(A(b`
        :host .control${o} {
          border-color: ${d.ButtonText};
        }
        :host .control${e}:hover {
          border-color: ${d.Highlight};
          color: ${d.ButtonText};
        }
        :host([href]) {
          border-color: ${d.LinkText};
        }
        :host([href]) .control:hover {
          box-shadow: 0 0 0 calc((${j} - ${k}) * 1px) ${d.LinkText};
          color: ${d.LinkText};
        }
      `)),yl=(i,t,e="",o="")=>b`
    :host .control {
      background: ${Le};
    }

    :host .control${e}:hover {
      background: ${Pe};
    }

    :host .control${e}:active {
      background: ${He};
    }

    :host .control${o} {
      background: ${Le};
    }
  `.withBehaviors(A(b`
        :host .control {
          background: ${d.ButtonFace};
          border-color: ${d.ButtonFace};
          color: ${d.ButtonText};
          fill: currentcolor;
        }
        :host .control${e}:hover,
        :host .control${e}:active,
        :host .control:${T} {
          background: ${d.Highlight};
          border-color: ${d.Highlight};
          box-shadow: none !important;
          color: ${d.HighlightText};
          fill: currentcolor;
        }
        :host([href]) .control {
          border-color: ${d.ButtonFace};
          color: ${d.LinkText};
        }
        :host([href]) .control:hover,
        :host([href]) .control:${T} {
          background: ${d.LinkText};
          border-color: ${d.LinkText};
          box-shadow: none !important;
          color: ${d.HighlightText};
          fill: currentcolor;
        }
      `)),vf=q.create("input-placeholder-rest").withDefault(i=>{const t=Fe.getValueFor(i);return Bi.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),yf=q.create("input-placeholder-hover").withDefault(i=>{const t=Fe.getValueFor(i);return Bi.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),xf=q.create("input-filled-placeholder-rest").withDefault(i=>{const t=je.getValueFor(i);return Bi.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),wf=q.create("input-filled-placeholder-hover").withDefault(i=>{const t=je.getValueFor(i);return Bi.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),Qo=(i,t,e)=>b`
  :host {
    ${tt}
    color: ${N};
    fill: currentcolor;
    outline: none;
    user-select: none;
    position: relative;
  }

  ${e} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    background: padding-box linear-gradient(${io}, ${io}),
      border-box ${Sr};
    border: calc(${k} * 1px) solid transparent;
    border-radius: calc(${B} * 1px);
    height: calc(${P} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
  }

  .control:hover,
  .control:${T},
  .control:disabled,
  .control:active {
    outline: none;
  }

  .label {
    display: block;
    color: ${N};
    cursor: pointer;
    ${tt}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host(:hover:not([disabled]):not(:focus-within)) ${e} {
    background: padding-box linear-gradient(${Ir}, ${Ir}),
      border-box ${_p};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: padding-box linear-gradient(${Tr}, ${Tr}),
      border-box ${Sr};
  }

  .control::placeholder {
    color: ${vf};
  }

  :host(:hover:not([disabled]):not(:focus-within)) .control::placeholder {
    color: ${yf};
  }

  :host([disabled]) ${e}, :host([readonly]) ${e}, :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${It};
  }

  :host([disabled]) {
    opacity: ${At};
  }

  :host([disabled]) ${e} {
    background: padding-box linear-gradient(${io}, ${io}),
      border-box ${Ri};
  }
`,Zo=(i,t,e)=>b`
  :host(:not([disabled]):active)::after {
    left: 50%;
    width: 40%;
    transform: translateX(-50%);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(:not([disabled]):focus-within)::after {
    left: 0;
    width: 100%;
    transform: none;
  }

  :host(:not([disabled]):active)::after,
  :host(:not([disabled]):focus-within:not(:active))::after {
    content: '';
    position: absolute;
    height: calc(${j} * 1px);
    bottom: 0;
    border-bottom: calc(${j} * 1px) solid ${U};
    border-bottom-left-radius: calc(${B} * 1px);
    border-bottom-right-radius: calc(${B} * 1px);
    z-index: 2;
    transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
  }
`,Jo=(i,t,e)=>b`
  :host ${e} {
    background: ${Ve};
    border-color: transparent;
  }

  :host(:hover:not([disabled]):not(:focus-within)) ${e} {
    background: ${Bo};
    border-color: transparent;
  }

  .control::placeholder {
    color: ${xf};
  }

  :host(:hover:not([disabled]):not(:focus-within)) .control::placeholder {
    color: ${wf};
  }

  :host(:focus-within:not([disabled])) ${e} {
    border-color: transparent;
    box-shadow: none;
  }
`,Ko=(i,t,e)=>b`
  :host ${e} {
    background: ${d.Field};
    border-color: ${d.FieldText};
  }
  :host(:hover:not([disabled]):not(:focus-within)) ${e} {
    border-color: ${d.Highlight};
  }
  :host(:not([disabled]):active)::after,
  :host(:not([disabled]):focus-within:not(:active))::after {
    border-bottom-color: ${d.Highlight};
  }
  :host([disabled]) {
    opacity: 1;
  }
  :host([disabled]) ${e} {
    border-color: ${d.GrayText};
  }
  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder,
  :host([disabled]) .label {
    color: ${d.GrayText};
    fill: currentcolor;
  }
`,ts=(i,t,e)=>b`
  :host ${e},
  :host(:hover:not([disabled])) ${e},
  :host(:active:not([disabled])) ${e},
  :host(:focus-within:not([disabled])) ${e} {
    background: ${d.Field};
    border-color: ${d.FieldText};
  }
  :host(:not([disabled]):active)::after,
  :host(:not([disabled]):focus-within:not(:active))::after {
    border-bottom-color: ${d.Highlight};
  }
  :host([disabled]) ${e} {
    border-color: ${d.GrayText};
  }
`;function ut(i,t){return new _d("appearance",i,t)}const qe="[href]",Ue=":not([href])",$f=(i,t)=>b`
    :host .control:not([href]) {
      cursor: default;
    }

    ${gl(i,t,qe,Ue)}
  `.withBehaviors(ut("accent",ml(i,t,qe,Ue)),ut("hypertext",bf(i,t,qe,Ue)),ut("lightweight",bl(i,t,qe,Ue)),ut("outline",vl(i,t,qe,Ue)),ut("stealth",yl(i,t,qe,Ue)));class xl extends St{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(e=>e.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}a([h],xl.prototype,"appearance",void 0);const kf=xl.compose({baseName:"anchor",baseClass:St,template:Qr,styles:$f,shadowOptions:{delegatesFocus:!0}}),Cf=(i,t)=>b`
  :host {
    contain: layout;
    display: block;
  }
`,Ff=M.compose({baseName:"anchored-region",template:Gc,styles:Cf}),If=(i,t)=>b`
    ${L("inline-block")} :host {
      box-sizing: border-box;
      ${pl};
    }

    .control {
      border-radius: calc(${B} * 1px);
      padding: calc(((${w} * 0.5) - ${k}) * 1px) calc((${w} - ${k}) * 1px);
      border: calc(${k} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${N};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${U};
      color: ${Oe};
    }

    :host(.neutral) .control {
      background: ${Ve};
      color: ${N};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${cn} - calc(${w} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class wl extends Oi{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(t,e){t!==e&&R.queueUpdate(()=>{this.classList.add(e),this.classList.remove(t)})}}a([h({mode:"fromView"})],wl.prototype,"appearance",void 0);const Tf=wl.compose({baseName:"badge",baseClass:Oi,template:Yc,styles:If}),Sf=(i,t)=>b`
  ${L("inline-block")} :host {
    box-sizing: border-box;
    ${tt};
  }

  .list {
    display: flex;
  }
`,Df=Zr.compose({baseName:"breadcrumb",template:Qc,styles:Sf}),Rf=(i,t)=>b`
    ${L("inline-flex")} :host {
      background: transparent;
      color: ${N};
      fill: currentcolor;
      box-sizing: border-box;
      ${tt};
      min-width: calc(${P} * 1px);
      border-radius: calc(${B} * 1px);
      outline: none;
    }

    .listitem {
      display: flex;
      align-items: center;
      border-radius: inherit;
    }

    .control {
      position: relative;
      align-items: center;
      box-sizing: border-box;
      color: inherit;
      fill: inherit;
      cursor: pointer;
      display: flex;
      outline: none;
      text-decoration: none;
      white-space: nowrap;
      border-radius: inherit;
    }

    .control:hover {
      color: ${Hp};
    }

    .control:active {
      color: ${zp};
    }

    .control:${T}::after {
      content: '';
      position: absolute;
      inset: calc(${k} * -1px);
      box-shadow: 0 0 0 calc(${j} * 1px) ${_} inset;
      border-radius: inherit;
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${N};
      fill: currentcolor;
      cursor: default;
    }

    .start {
      display: flex;
      margin-inline-end: 6px;
    }

    .end {
      display: flex;
      margin-inline-start: 6px;
    }

    .separator {
      display: flex;
    }
  `.withBehaviors(A(b`
        :host(:not([href])),
        .start,
        .end,
        .separator {
          background: ${d.ButtonFace};
          color: ${d.ButtonText};
          fill: currentcolor;
        }
        .separator {
          fill: ${d.ButtonText};
        }
        :host([href]) {
          forced-color-adjust: none;
          background: ${d.ButtonFace};
          color: ${d.LinkText};
        }
        :host([href]) .control:hover {
          background: ${d.LinkText};
          color: ${d.HighlightText};
          fill: currentcolor;
        }
        :host([href]) .control:${T}::after {
          box-shadow: 0 0 0 calc(${j} * 1px) ${d.LinkText} inset;
        }
      `)),Ef=Fi.compose({baseName:"breadcrumb-item",template:Xc,styles:Rf,shadowOptions:{delegatesFocus:!0},separator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),mi=":not([disabled])",bi="[disabled]",Af=(i,t)=>b`
    :host([disabled]) {
      opacity: ${At};
      cursor: ${It};
    }

    ${gl(i,t,mi,bi)}
  `.withBehaviors(A(b`
        :host([disabled]) {
          opacity: 1;
        }
        :host([disabled]) .control {
          border-color: ${d.GrayText};
          color: ${d.GrayText};
          fill: currentcolor;
        }
      `),ut("accent",b`
      ${ml(i,t,mi,bi)},
      `.withBehaviors(A(b`
            :host([disabled]) .control {
              background: ${d.ButtonFace};
            }
          `))),ut("lightweight",b`
      ${bl(i,t,mi,bi)},
      `.withBehaviors(A(b`
            :host([disabled]) .control {
              border-color: ${d.ButtonFace};
            }
          `))),ut("outline",b`
      ${vl(i,t,mi,bi)}
      `.withBehaviors(A(b`
            :host([disabled]) .control {
              border-color: ${d.GrayText};
            }
          `))),ut("stealth",b`
      ${yl(i,t,mi,bi)}
      `.withBehaviors(A(b`
            :host([disabled]) .control {
              border-color: ${d.ButtonFace};
            }
          `))));class $l extends Dt{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(e=>e.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}a([h],$l.prototype,"appearance",void 0);const Of=$l.compose({baseName:"button",baseClass:Dt,template:Zc,styles:Af,shadowOptions:{delegatesFocus:!0}}),Vf=b`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,Lf=b`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,Pf=(i,t)=>b`
${L("inline-block")} :host {
  --calendar-cell-size: calc((${Ao} + 2 + ${ke}) * ${w} * 1px);
  --calendar-gap: 2px;
  ${tt}
  color: ${N};
}

.title {
  padding: calc(${w} * 2px);
  font-weight: 600;
}

.days {
  text-align: center;
}

.week-days,
.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: var(--calendar-gap);
  border: 0;
  padding: 0;
}

.day,
.week-day {
  border: 0;
  width: var(--calendar-cell-size);
  height: var(--calendar-cell-size);
  line-height: var(--calendar-cell-size);
  padding: 0;
  box-sizing: initial;
}

.week-day {
  font-weight: 600;
}

.day {
  border: calc(${k} * 1px) solid transparent;
  border-radius: calc(${B} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${si};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${k} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${U};
  border: 1px solid ${U};
  background: ${O};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${k} + ${B}) * 1px);
  margin-inline-start: calc((${B} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${Oe};
}

.today .date {
  color: ${Oe};
  background: ${U};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors(A(b`
          .day.selected {
              color: ${d.Highlight};
          }

          .today .date {
              background: ${d.Highlight};
              color: ${d.HighlightText};
          }
      `),new Ni(Vf,Lf));class kl extends Mt{constructor(){super(...arguments),this.readonly=!0}}a([h({converter:Ai})],kl.prototype,"readonly",void 0);const Hf=kl.compose({baseName:"calendar",template:gh,styles:Pf,title:ch}),zf=(i,t)=>b`
    ${L("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${O};
      color: ${N};
      border: calc(${k} * 1px) solid ${Je};
      border-radius: calc(${ee} * 1px);
      box-shadow: ${df};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(A(b`
        :host {
          background: ${d.Canvas};
          color: ${d.CanvasText};
        }
      `));class Dn extends Jr{cardFillColorChanged(t,e){if(e){const o=ge(e);o!==null&&(this.neutralPaletteSource=e,O.setValueFor(this,Tt.create(o.r,o.g,o.b)))}}neutralPaletteSourceChanged(t,e){if(e){const o=ge(e),s=Tt.create(o.r,o.g,o.b);X.setValueFor(this,Di.create(s))}}handleChange(t,e){this.cardFillColor||O.setValueFor(this,o=>Ne.getValueFor(o).evaluate(o,O.getValueFor(t)).rest)}connectedCallback(){super.connectedCallback();const t=lo(this);if(t){const e=D.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}a([h({attribute:"card-fill-color",mode:"fromView"})],Dn.prototype,"cardFillColor",void 0);a([h({attribute:"neutral-palette-source",mode:"fromView"})],Dn.prototype,"neutralPaletteSource",void 0);const Mf=Dn.compose({baseName:"card",baseClass:Jr,template:mh,styles:zf}),Bf=(i,t)=>b`
    ${L("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${P} / 2 + ${w}) * 1px);
      height: calc((${P} / 2 + ${w}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${B} * 1px);
      border: calc(${k} * 1px) solid ${li};
      background: ${yn};
      outline: none;
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${tt}
      color: ${N};
      ${""} padding-inline-start: calc(${w} * 2px + 2px);
      margin-inline-end: calc(${w} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${N};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${Oe};
    }

    :host(:not(.disabled):hover) .control {
      background: ${xn};
      border-color: ${Tn};
    }

    :host(:not(.disabled):active) .control {
      background: ${wn};
      border-color: ${Sn};
    }

    :host(:${T}) .control {
      box-shadow: 0 0 0 1px ${O}, 0 0 0 3px ${_};
      background: ${$n};
      border-color: ${_};
    }

    :host(.checked) .control {
      background: ${U};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${qt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Ut};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${It};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${At};
    }
  `.withBehaviors(A(b`
        .control {
          border-color: ${d.FieldText};
          background: ${d.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${d.Highlight};
          background: ${d.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${d.FieldText};
        }
        :host(:${T}) .control {
          forced-color-adjust: none;
          box-shadow: 0 0 0 1px ${d.Field}, 0 0 0 3px ${d.FieldText};
          background: ${d.Field};
          border-color: ${d.Highlight};
        }
        :host(.checked) .control {
          background: ${d.Highlight};
          border-color: ${d.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${d.HighlightText};
          border-color: ${d.Highlight};
        }
        :host(.checked:${T}) .control {
          box-shadow: 0 0 0 1px ${d.Field}, 0 0 0 3px ${d.FieldText};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${d.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${d.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${d.GrayText};
          background: ${d.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${d.GrayText};
        }
      `)),Nf=$o.compose({baseName:"checkbox",template:bh,styles:Bf,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),Cl=(i,t)=>b`
  :host {
    background: ${Ve};
    border-color: transparent;
  }

  :host(:not([disabled]):not([open]):hover) {
    background: ${Bo};
    border-color: transparent;
  }

  :host(:not([disabled]):not([open]):active) {
    background: ${dl};
    border-color: transparent;
  }
`.withBehaviors(A(b`
      :host(:not([disabled]):not([open]):hover) {
        background: transparent;
      }
      :host(:not([disabled]):not([open]):hover),
      :host(:not([disabled]):not([open]):active) {
        border-color: ${d.Highlight};
      }
      :host(:${T}) {
        forced-color-adjust: none;
        background: transparent;
        border-color: ${d.Highlight};
        box-shadow: 0 0 0 1px inset ${d.Highlight};
      }
    `)),jf=(i,t)=>b`
  :host {
    background: ${Le};
    border-color: transparent;
  }

  :host(:not([disabled]):not([open]):hover) {
    background: ${Pe};
    border-color: transparent;
  }

  :host(:not([disabled]):not([open]):active) {
    background: ${He};
    border-color: transparent;
  }
`,Fl=(i,t)=>b`
    ${L("inline-flex")} :host {
      background: padding-box linear-gradient(${$t}, ${$t}),
        border-box ${Uo};
      border: calc(${k} * 1px) solid transparent;
      border-radius: calc(${B} * 1px);
      box-sizing: border-box;
      color: ${N};
      fill: currentcolor;
      font-family: ${Bt};
      height: calc(${P} * 1px);
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    :host .listbox {
      box-shadow: ${fl};
      background: ${O};
      border-radius: calc(${ee} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${P} * 1px));
      padding: calc((${w} - ${k} ) * 1px) 0;
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${k} * 1px) solid transparent;
    }

    :host .listbox[hidden] {
      display: none;
    }

    :host .control {
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${tt}
      min-height: 100%;
      padding: 0 calc(${w} * 2.25px);
      width: 100%;
    }

    :host(:not([disabled]):not([open]):hover) {
      background: padding-box linear-gradient(${go}, ${go}),
        border-box ${kn};
    }

    :host(:not([disabled]):not([open]):active) {
      background: padding-box linear-gradient(${mo}, ${mo}),
        border-box ${Cn};
    }

    :host(:${T}) {
      border-color: ${_};
      outline: none;
      box-shadow: 0 0 0 1px inset ${_};
    }

    :host([disabled]) {
      cursor: ${It};
      opacity: ${At};
    }

    :host([disabled]) .control {
      cursor: ${It};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${P} + ${w} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${P} + ${w} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `.withBehaviors(ut("filled",Cl()),ut("stealth",jf()),A(b`
      :host {
        background: ${d.ButtonFace};
        color: ${d.ButtonText};
      }
      :host(:not([disabled]):not([open]):hover) {
        background: transparent;
      }
      :host(:not([disabled]):hover) {
        border-color: ${d.Highlight};
      }
      :host(:${T}) {
        forced-color-adjust: none;
        border-color: ${d.Highlight};
        box-shadow: 0 0 0 1px inset ${d.Highlight};
      }
      :host([open]) .listbox {
        background: ${d.ButtonFace};
        border-color: ${d.CanvasText};
      }
      .start, .end, .indicator, ::slotted(svg) {
        fill: ${d.FieldText};
      }
      :host([disabled]) {
        border-color: ${d.GrayText};
        color: ${d.GrayText};
        opacity: 1;
      }
      :host([disabled]) .start,
      :host([disabled]) .end,
      :host([disabled]) .indicator,
      :host([disabled]) ::slotted(svg) {
        fill: ${d.GrayText};
      }
    `)),_f=(i,t)=>b`
    ${Fl()}

    :host(:empty) .listbox {
        display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
        cursor: ${It};
        user-select: none;
    }

    :host(:active) .selected-value {
        user-select: none;
    }

    .selected-value {
        -webkit-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        ${tt}
        height: calc(100% - ${k} * 1px));
        margin: auto 0;
        width: 100%;
    }

    .selected-value:hover,
    .selected-value:${T},
    .selected-value:disabled,
    .selected-value:active {
        outline: none;
    }
`.withBehaviors(ut("filled",Cl()));class Il extends ae{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&O.setValueFor(this.listbox,Mi)}}a([h({mode:"fromView"})],Il.prototype,"appearance",void 0);const qf=Il.compose({baseName:"combobox",baseClass:ae,shadowOptions:{delegatesFocus:!0},template:$h,styles:_f,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),Uf=(i,t)=>b`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,Gf=(i,t)=>b`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${k} * 1px) solid ${Fn};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${O};
      position: sticky;
      top: 0;
    }
  `.withBehaviors(A(b`
        :host {
        }
      `)),Wf=(i,t)=>b`
    :host {
      padding: calc(${w} * 1px) calc(${w} * 3px);
      color: ${N};
      box-sizing: border-box;
      ${tt}
      border: transparent calc(${j} * 1px) solid;
      overflow: hidden;
      outline: none;
      white-space: nowrap;
      border-radius: calc(${B} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${T}) {
      border-color: ${_};
    }
  `.withBehaviors(A(b`
        :host {
          forced-color-adjust: none;
          border-color: transparent;
          background: ${d.Field};
          color: ${d.FieldText};
        }

        :host(:${T}) {
          border-color: ${d.FieldText};
          box-shadow: 0 0 0 2px inset ${d.Field};
          color: ${d.FieldText};
        }
      `)),Yf=re.compose({baseName:"data-grid-cell",template:lh,styles:Wf}),Xf=dt.compose({baseName:"data-grid-row",template:ah,styles:Gf}),Qf=rt.compose({baseName:"data-grid",template:ih,styles:Uf}),Rn={toView(i){var t;return i==null?null:(t=i)===null||t===void 0?void 0:t.toColorString()},fromView(i){if(i==null)return null;const t=ge(i);return t?Tt.create(t.r,t.g,t.b):null}},Dr=b`
  :host {
    background-color: ${O};
    color: ${N};
  }
`.withBehaviors(A(b`
      :host {
        background-color: ${d.Canvas};
        box-shadow: 0 0 0 1px ${d.CanvasText};
        color: ${d.CanvasText};
      }
    `));function I(i){return(t,e)=>{t[e+"Changed"]=function(o,s){s!=null?i.setValueFor(this,s):i.deleteValueFor(this)}}}class C extends E{constructor(){super(),this.noPaint=!1;const t={handleChange:this.noPaintChanged.bind(this)};D.getNotifier(this).subscribe(t,"fillColor"),D.getNotifier(this).subscribe(t,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){!this.noPaint&&(this.fillColor!==void 0||this.baseLayerLuminance)?this.$fastController.addStyles(Dr):this.$fastController.removeStyles(Dr)}}a([h({attribute:"no-paint",mode:"boolean"})],C.prototype,"noPaint",void 0);a([h({attribute:"fill-color",converter:Rn,mode:"fromView"}),I(O)],C.prototype,"fillColor",void 0);a([h({attribute:"accent-base-color",converter:Rn,mode:"fromView"}),I(bn)],C.prototype,"accentBaseColor",void 0);a([h({attribute:"neutral-base-color",converter:Rn,mode:"fromView"}),I(nl)],C.prototype,"neutralBaseColor",void 0);a([h({converter:$}),I(ke)],C.prototype,"density",void 0);a([h({attribute:"design-unit",converter:$}),I(w)],C.prototype,"designUnit",void 0);a([h({attribute:"direction"}),I(no)],C.prototype,"direction",void 0);a([h({attribute:"base-height-multiplier",converter:$}),I(Ao)],C.prototype,"baseHeightMultiplier",void 0);a([h({attribute:"base-horizontal-spacing-multiplier",converter:$}),I(Ju)],C.prototype,"baseHorizontalSpacingMultiplier",void 0);a([h({attribute:"control-corner-radius",converter:$}),I(B)],C.prototype,"controlCornerRadius",void 0);a([h({attribute:"layer-corner-radius",converter:$}),I(ee)],C.prototype,"layerCornerRadius",void 0);a([h({attribute:"stroke-width",converter:$}),I(k)],C.prototype,"strokeWidth",void 0);a([h({attribute:"focus-stroke-width",converter:$}),I(j)],C.prototype,"focusStrokeWidth",void 0);a([h({attribute:"disabled-opacity",converter:$}),I(At)],C.prototype,"disabledOpacity",void 0);a([h({attribute:"type-ramp-minus-2-font-size"}),I(hn)],C.prototype,"typeRampMinus2FontSize",void 0);a([h({attribute:"type-ramp-minus-2-line-height"}),I(Ca)],C.prototype,"typeRampMinus2LineHeight",void 0);a([h({attribute:"type-ramp-minus-1-font-size"}),I(ln)],C.prototype,"typeRampMinus1FontSize",void 0);a([h({attribute:"type-ramp-minus-1-line-height"}),I(cn)],C.prototype,"typeRampMinus1LineHeight",void 0);a([h({attribute:"type-ramp-base-font-size"}),I(an)],C.prototype,"typeRampBaseFontSize",void 0);a([h({attribute:"type-ramp-base-line-height"}),I(ka)],C.prototype,"typeRampBaseLineHeight",void 0);a([h({attribute:"type-ramp-plus-1-font-size"}),I(dn)],C.prototype,"typeRampPlus1FontSize",void 0);a([h({attribute:"type-ramp-plus-1-line-height"}),I(Fa)],C.prototype,"typeRampPlus1LineHeight",void 0);a([h({attribute:"type-ramp-plus-2-font-size"}),I(un)],C.prototype,"typeRampPlus2FontSize",void 0);a([h({attribute:"type-ramp-plus-2-line-height"}),I(Ia)],C.prototype,"typeRampPlus2LineHeight",void 0);a([h({attribute:"type-ramp-plus-3-font-size"}),I(pn)],C.prototype,"typeRampPlus3FontSize",void 0);a([h({attribute:"type-ramp-plus-3-line-height"}),I(Ta)],C.prototype,"typeRampPlus3LineHeight",void 0);a([h({attribute:"type-ramp-plus-4-font-size"}),I(fn)],C.prototype,"typeRampPlus4FontSize",void 0);a([h({attribute:"type-ramp-plus-4-line-height"}),I(Sa)],C.prototype,"typeRampPlus4LineHeight",void 0);a([h({attribute:"type-ramp-plus-5-font-size"}),I(gn)],C.prototype,"typeRampPlus5FontSize",void 0);a([h({attribute:"type-ramp-plus-5-line-height"}),I(Da)],C.prototype,"typeRampPlus5LineHeight",void 0);a([h({attribute:"type-ramp-plus-6-font-size"}),I(mn)],C.prototype,"typeRampPlus6FontSize",void 0);a([h({attribute:"type-ramp-plus-6-line-height"}),I(Ra)],C.prototype,"typeRampPlus6LineHeight",void 0);a([h({attribute:"accent-fill-rest-delta",converter:$}),I(Vs)],C.prototype,"accentFillRestDelta",void 0);a([h({attribute:"accent-fill-hover-delta",converter:$}),I(Ls)],C.prototype,"accentFillHoverDelta",void 0);a([h({attribute:"accent-fill-active-delta",converter:$}),I(Ps)],C.prototype,"accentFillActiveDelta",void 0);a([h({attribute:"accent-fill-focus-delta",converter:$}),I(Hs)],C.prototype,"accentFillFocusDelta",void 0);a([h({attribute:"accent-foreground-rest-delta",converter:$}),I(Ea)],C.prototype,"accentForegroundRestDelta",void 0);a([h({attribute:"accent-foreground-hover-delta",converter:$}),I(Aa)],C.prototype,"accentForegroundHoverDelta",void 0);a([h({attribute:"accent-foreground-active-delta",converter:$}),I(Oa)],C.prototype,"accentForegroundActiveDelta",void 0);a([h({attribute:"accent-foreground-focus-delta",converter:$}),I(Va)],C.prototype,"accentForegroundFocusDelta",void 0);a([h({attribute:"neutral-fill-rest-delta",converter:$}),I(La)],C.prototype,"neutralFillRestDelta",void 0);a([h({attribute:"neutral-fill-hover-delta",converter:$}),I(Pa)],C.prototype,"neutralFillHoverDelta",void 0);a([h({attribute:"neutral-fill-active-delta",converter:$}),I(Ha)],C.prototype,"neutralFillActiveDelta",void 0);a([h({attribute:"neutral-fill-focus-delta",converter:$}),I(za)],C.prototype,"neutralFillFocusDelta",void 0);a([h({attribute:"neutral-fill-input-rest-delta",converter:$}),I(Ma)],C.prototype,"neutralFillInputRestDelta",void 0);a([h({attribute:"neutral-fill-input-hover-delta",converter:$}),I(Ba)],C.prototype,"neutralFillInputHoverDelta",void 0);a([h({attribute:"neutral-fill-input-active-delta",converter:$}),I(Na)],C.prototype,"neutralFillInputActiveDelta",void 0);a([h({attribute:"neutral-fill-input-focus-delta",converter:$}),I(ja)],C.prototype,"neutralFillInputFocusDelta",void 0);a([h({attribute:"neutral-fill-layer-rest-delta",converter:$}),I(ye)],C.prototype,"neutralFillLayerRestDelta",void 0);a([h({attribute:"neutral-fill-stealth-rest-delta",converter:$}),I(_a)],C.prototype,"neutralFillStealthRestDelta",void 0);a([h({attribute:"neutral-fill-stealth-hover-delta",converter:$}),I(qa)],C.prototype,"neutralFillStealthHoverDelta",void 0);a([h({attribute:"neutral-fill-stealth-active-delta",converter:$}),I(Ua)],C.prototype,"neutralFillStealthActiveDelta",void 0);a([h({attribute:"neutral-fill-stealth-focus-delta",converter:$}),I(Ga)],C.prototype,"neutralFillStealthFocusDelta",void 0);a([h({attribute:"neutral-fill-strong-hover-delta",converter:$}),I(Wa)],C.prototype,"neutralFillStrongHoverDelta",void 0);a([h({attribute:"neutral-fill-strong-active-delta",converter:$}),I(Ya)],C.prototype,"neutralFillStrongActiveDelta",void 0);a([h({attribute:"neutral-fill-strong-focus-delta",converter:$}),I(Xa)],C.prototype,"neutralFillStrongFocusDelta",void 0);a([h({attribute:"base-layer-luminance",converter:$}),I(Ce)],C.prototype,"baseLayerLuminance",void 0);a([h({attribute:"neutral-stroke-divider-rest-delta",converter:$}),I(sl)],C.prototype,"neutralStrokeDividerRestDelta",void 0);a([h({attribute:"neutral-stroke-rest-delta",converter:$}),I(Qa)],C.prototype,"neutralStrokeRestDelta",void 0);a([h({attribute:"neutral-stroke-hover-delta",converter:$}),I(Za)],C.prototype,"neutralStrokeHoverDelta",void 0);a([h({attribute:"neutral-stroke-active-delta",converter:$}),I(Ja)],C.prototype,"neutralStrokeActiveDelta",void 0);a([h({attribute:"neutral-stroke-focus-delta",converter:$}),I(Ka)],C.prototype,"neutralStrokeFocusDelta",void 0);const Zf=C.compose({baseName:"design-system-provider",template:y` <slot></slot> `,styles:b`
    ${L("block")}
  `}),Jf=(i,t)=>b`
  :host([hidden]) {
    display: none;
  }

  :host {
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    box-shadow: ${mf};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${ee} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${O};
    z-index: 1;
    border: calc(${k} * 1px) solid transparent;
  }
`,Kf=Pt.compose({baseName:"dialog",template:Ph,styles:Jf}),tg=(i,t)=>b`
    ${L("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${k} * 1px) solid ${Fn};
    }
  `,eg=Co.compose({baseName:"divider",template:Xh,styles:tg}),ig=(i,t)=>b`
    ${L("inline-flex")} :host {
      height: calc((${P} + ${w}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${ul};
      background: padding-box linear-gradient(${$t}, ${$t}),
        border-box ${Uo};
      box-sizing: border-box;
      border: calc(${j} * 1px) solid transparent;
      border-radius: calc(${B} * 1px);
      outline: none;
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${At};
      cursor: ${It};
      pointer-events: none;
    }

    .next,
    .previous {
      display: flex;
    }

    :host(:not(.disabled):hover) {
      cursor: pointer;
    }

    :host(:not(.disabled):hover) {
      color: ${Lp};
    }

    :host(:not(.disabled):active) {
      color: ${Pp};
    }

    :host(:${T}) {
      border-color: ${_};
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(A(b`
        :host {
          background: ${d.ButtonFace};
          border-color: ${d.ButtonText};
        }
        :host .next,
        :host .previous {
          color: ${d.ButtonText};
          fill: currentcolor;
        }
        :host(:not(.disabled):hover) {
          background: ${d.Highlight};
        }
        :host(:not(.disabled):hover) .next,
        :host(:not(.disabled):hover) .previous {
          color: ${d.HighlightText};
          fill: currentcolor;
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled),
        :host(.disabled) .next,
        :host(.disabled) .previous {
          border-color: ${d.GrayText};
          color: ${d.GrayText};
          fill: currentcolor;
        }
        :host(:${T}) {
          forced-color-adjust: none;
          border-color: ${d.Highlight};
          box-shadow: 0 0 0 2px ${d.ButtonFace}, 0 0 0 4px ${d.ButtonText};
        }
      `)),og=Fo.compose({baseName:"flipper",template:Zh,styles:ig,next:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>
    </svg>
  `,previous:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>
    </svg>
  `}),sg=b`
  .scroll-prev {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before,
  .scroll-next .scroll-action {
    left: auto;
    right: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-next));
  }

  .scroll-next .scroll-action {
    transform: translate(50%, -50%);
  }
`,ng=b`
  .scroll.scroll-next {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, var(--scroll-fade-next), transparent);
    left: auto;
    right: 0;
  }

  .scroll.scroll-prev::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-previous));
  }

  .scroll-prev .scroll-action {
    left: auto;
    right: 0;
    transform: translate(50%, -50%);
  }
`,rg=b`
  .scroll-area {
    position: relative;
  }

  div.scroll-view {
    overflow-x: hidden;
  }

  .scroll {
    bottom: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    user-select: none;
    width: 100px;
  }

  .scroll.disabled {
    display: none;
  }

  .scroll::before,
  .scroll-action {
    left: 0;
    position: absolute;
  }

  .scroll::before {
    background: linear-gradient(to right, var(--scroll-fade-previous), transparent);
    content: '';
    display: block;
    height: 100%;
    width: 100%;
  }

  .scroll-action {
    pointer-events: auto;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  ::slotted(fluent-flipper) {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .scroll-area:hover ::slotted(fluent-flipper) {
    opacity: 1;
  }
`.withBehaviors(new Ni(sg,ng)),ag=(i,t)=>b`
  ${L("block")} :host {
    --scroll-align: center;
    --scroll-item-spacing: 4px;
    contain: layout;
    position: relative;
  }

  .scroll-view {
    overflow-x: auto;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .content-container {
    align-items: var(--scroll-align);
    display: inline-flex;
    flex-wrap: nowrap;
    position: relative;
  }

  .content-container ::slotted(*) {
    margin-right: var(--scroll-item-spacing);
  }

  .content-container ::slotted(*:last-child) {
    margin-right: 0;
  }
`;class lg extends le{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(rg)}}const cg=lg.compose({baseName:"horizontal-scroll",baseClass:le,template:gd,styles:ag,nextFlipper:y`
    <fluent-flipper @click="${i=>i.scrollToNext()}" aria-hidden="${i=>i.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:y`
    <fluent-flipper
      @click="${i=>i.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${i=>i.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),hg=(i,t)=>b`
    ${L("inline-flex")} :host {
      border: calc(${k} * 1px) solid ${Ri};
      border-radius: calc(${B} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${w} * 1px) 0;
      outline: none;
    }

    ::slotted(${i.tagFor(Zt)}) {
      margin: 0 calc(${w} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      border-color: ${_};
      box-shadow: 0 0 0 1px ${_} inset;
    }
  `;class dg extends ht{}const ug=dg.compose({baseName:"listbox",template:Kh,styles:hg}),pg=(i,t)=>b`
    ${L("inline-flex")} :host {
      position: relative;
      ${tt}
      background: ${Le};
      border-radius: calc(${B} * 1px);
      border: calc(${j} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${N};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${P} * 1px);
      outline: none;
      overflow: hidden;
      align-items: center;
      padding: 0 calc(${w} * 2.25px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: calc((${P} / 4) - ${j} * 1px);
      width: 3px;
      height: calc((${P} / 2) * 1px);
      background: transparent;
      border-radius: calc(${B} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Pe};
    }

    :host(:not([disabled]):active) {
      background: ${He};
    }

    :host(:not([disabled]):active)::before {
      background: ${U};
      height: calc(((${P} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${U};
    }

    :host(:${T}) {
      border-color: ${_};
      background: ${Vp};
    }

    :host([aria-selected='true']) {
      background: ${Ve};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${Bo};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${dl};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Pe};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${He};
    }

    :host([disabled]) {
      cursor: ${It};
      opacity: ${At};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(A(b`
        :host {
          background: ${d.ButtonFace};
          border-color: ${d.ButtonFace};
          color: ${d.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${d.Highlight};
          color: ${d.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${d.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${d.Canvas};
          color: ${d.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
      `)),fg=Zt.compose({baseName:"option",template:Jh,styles:pg}),gg=(i,t)=>b`
    ${L("block")} :host {
      background: ${Mi};
      border: calc(${k} * 1px) solid transparent;
      border-radius: calc(${ee} * 1px);
      box-shadow: ${fl};
      padding: calc(${w} * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${w} * 2px);
    }

    ::slotted(${i.tagFor(Rt)}) {
      margin: 0 calc(${w} * 1px);
    }

    ::slotted(${i.tagFor(Co)}) {
      margin: calc(${w} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${w} * 1px) 0;
      border: none;
      border-top: calc(${k} * 1px) solid ${Fn};
    }
  `.withBehaviors(A(b`
        :host([slot='submenu']) {
          background: ${d.Canvas};
          border-color: ${d.CanvasText};
        }
      `));class mg extends ai{connectedCallback(){super.connectedCallback(),O.setValueFor(this,Mi)}}const bg=mg.compose({baseName:"menu",baseClass:ai,template:id,styles:gg}),vg=(i,t)=>b`
    ${L("grid")} :host {
      contain: layout;
      overflow: visible;
      ${tt}
      outline: none;
      box-sizing: border-box;
      height: calc(${P} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${N};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${B} * 1px);
      border: calc(${k} * 1px) solid transparent;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(32px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-0) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(32px, auto) minmax(32px, auto) 1fr minmax(32px, auto) minmax(32px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${T}) {
      border: calc(${k} * 1px) solid ${_};
      box-shadow: 0 0 0 calc((${j} - ${k}) * 1px) ${_};
    }

    :host(:not([disabled]):hover) {
      background: ${Pe};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${He};
      color: ${N};
    }

    :host([disabled]) {
      cursor: ${It};
      opacity: ${At};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    :host(.indent-0[aria-haspopup='menu']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu'].indent-0) .content {
      grid-column-start: 1;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
      outline: none;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    slot[name='checkbox-indicator'],
    slot[name='radio-indicator'] {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${si};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(A(b`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${d.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${d.Highlight};
          color: ${d.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${T}) ::slotted([slot='end']:not(svg)) {
          color: ${d.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${d.Highlight};
          border-color: ${d.Highlight};
          color: ${d.HighlightText};
        }
        :host(:${T}) {
          background: ${d.Highlight};
          border-color: ${d.ButtonText};
          box-shadow: 0 0 0 calc(${k} * 1px) inset ${d.HighlightText};
          color: ${d.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${T}) {
          background: ${d.ButtonFace};
          color: ${d.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${T}) {
          border-color: ${d.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${d.ButtonText};
          background: ${d.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${d.HighlightText};
          border-color: ${d.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${T}) .expanded-toggle,
            :host(:${T}) .checkbox,
            :host(:${T}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${T}) .checkbox,
            :host([checked]:${T}) .radio {
          border-color: ${d.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${d.Highlight};
          color: ${d.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${d.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${d.Highlight};
        }
      `),new Ni(b`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,b`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),yg=Rt.compose({baseName:"menu-item",template:ed,styles:vg,checkboxIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,expandCollapseGlyph:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>
    </svg>
  `,radioIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="2"/>
    </svg>
  `}),xg=(i,t)=>b`
    ${Jo(i,t,".root")}
  `.withBehaviors(A(b`
        ${ts(i,t,".root")}
      `)),wg=(i,t)=>b`
    ${L("inline-block")}

    ${Qo(i,t,".root")}

    ${Zo(i,t,".root")}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${w} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      margin: auto;
      fill: currentcolor;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }

    .controls {
      opacity: 0;
      position: relative;
      top: -1px;
      z-index: 3;
    }

    :host(:hover:not([disabled])) .controls,
    :host(:focus-within:not([disabled])) .controls {
      opacity: 1;
    }

    .step-up,
    .step-down {
      display: flex;
      padding: 0 8px;
      cursor: pointer;
    }

    .step-up {
      padding-top: 3px;
    }
  `.withBehaviors(ut("filled",xg(i,t)),A(b`
        ${Ko(i,t,".root")}
        .step-up,
        .step-down {
          fill: ${d.FieldText};
        }
      `));class Tl extends xt{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}a([h],Tl.prototype,"appearance",void 0);const $g=Tl.compose({baseName:"number-field",baseClass:xt,styles:wg,template:od,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,stepUpGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
`}),kg=(i,t)=>b`
    ${L("flex")} :host {
      align-items: center;
      outline: none;
      height: calc((${k} * 3) * 1px);
    }

    .progress {
      background-color: ${li};
      border-radius: calc(${w} * 1px);
      width: 100%;
      height: calc(${k} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${U};
      border-radius: calc(${w} * 1px);
      height: calc((${k} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${k} * 3) * 1px);
      border-radius: calc(${w} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${U};
      border-radius: calc(${w} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${U};
      border-radius: calc(${w} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${si};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${si};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors(A(b`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${d.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${d.GrayText};
        }
      `));class Cg extends Me{}const Fg=Cg.compose({baseName:"progress",template:hd,styles:kg,indeterminateIndicator1:`
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,indeterminateIndicator2:`
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `}),Ig=(i,t)=>b`
    ${L("flex")} :host {
      align-items: center;
      outline: none;
      height: calc(${P} * 1px);
      width: calc(${P} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${U};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${U};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${si};
    }

    :host(.paused) .determinate {
      stroke: ${si};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors(A(b`
        .background {
          stroke: ${d.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${d.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${d.GrayText};
        }
      `));class Tg extends Me{}const Sg=Tg.compose({baseName:"progress-ring",template:cd,styles:Ig,indeterminateIndicator:`
    <svg class="progress" part="progress" viewBox="0 0 16 16">
        <circle
            class="background"
            part="background"
            cx="8px"
            cy="8px"
            r="7px"
        ></circle>
        <circle
            class="indeterminate-indicator-1"
            part="indeterminate-indicator-1"
            cx="8px"
            cy="8px"
            r="7px"
        ></circle>
    </svg>
  `}),Dg=(i,t)=>b`
    ${L("inline-flex")} :host {
      --input-size: calc((${P} / 2) + ${w});
      align-items: center;
      outline: none;
      ${""} user-select: none;
      position: relative;
      flex-direction: row;
      transition: all 0.2s ease-in-out;
    }

    .control {
      position: relative;
      width: calc(var(--input-size) * 1px);
      height: calc(var(--input-size) * 1px);
      box-sizing: border-box;
      border-radius: 50%;
      border: calc(${k} * 1px) solid ${li};
      background: ${yn};
      outline: none;
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${tt}
      color: ${N};
      ${""} padding-inline-start: calc(${w} * 2px + 2px);
      margin-inline-end: calc(${w} * 2px + 2px);
      cursor: pointer;
    }

    .control,
    slot[name='checked-indicator'] {
      flex-shrink: 0;
    }

    slot[name='checked-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${Oe};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${xn};
      border-color: ${Tn};
    }

    :host(:not(.disabled):active) .control {
      background: ${wn};
      border-color: ${Sn};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${T}) .control {
      box-shadow: 0 0 0 1px ${O}, 0 0 0 3px ${_};
      background: ${$n};
      border-color: ${_};
    }

    :host(.checked) .control {
      background: ${U};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${qt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Ut};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${It};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${At};
    }
  `.withBehaviors(A(b`
        .control {
          background: ${d.Field};
          border-color: ${d.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${d.Highlight};
        }
        :host(:${T}) .control {
          forced-color-adjust: none;
          box-shadow: 0 0 0 1px ${d.Field}, 0 0 0 3px ${d.FieldText};
          background: ${d.Field};
          border-color: ${d.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${d.Highlight};
          background: ${d.Highlight};
        }
        :host(.checked:${T}) .control {
          box-shadow: 0 0 0 1px ${d.Field}, 0 0 0 3px ${d.FieldText};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${d.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${d.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${d.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${d.Field};
          border-color: ${d.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${d.GrayText};
        }
      `)),Rg=To.compose({baseName:"radio",template:ud,styles:Dg,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4"/>
    </svg>
  `}),Eg=(i,t)=>b`
  ${L("flex")} :host {
    align-items: flex-start;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`,Ag=$e.compose({baseName:"radio-group",template:dd,styles:Eg}),Og=(i,t)=>y`
  <template
    class="
            ${e=>e.readOnly?"readonly":""}
        "
  >
    <label
      part="label"
      for="control"
      class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
    >
      <slot ${Z({property:"defaultSlottedNodes",filter:aa})}></slot>
    </label>
    <div class="root" part="root" ${z("root")}>
      ${yt(i,t)}
      <div class="input-wrapper" part="input-wrapper">
        <input
          class="control"
          part="control"
          id="control"
          @input="${e=>e.handleTextInput()}"
          @change="${e=>e.handleChange()}"
          ?autofocus="${e=>e.autofocus}"
          ?disabled="${e=>e.disabled}"
          list="${e=>e.list}"
          maxlength="${e=>e.maxlength}"
          minlength="${e=>e.minlength}"
          pattern="${e=>e.pattern}"
          placeholder="${e=>e.placeholder}"
          ?readonly="${e=>e.readOnly}"
          ?required="${e=>e.required}"
          size="${e=>e.size}"
          ?spellcheck="${e=>e.spellcheck}"
          :value="${e=>e.value}"
          type="search"
          aria-atomic="${e=>e.ariaAtomic}"
          aria-busy="${e=>e.ariaBusy}"
          aria-controls="${e=>e.ariaControls}"
          aria-current="${e=>e.ariaCurrent}"
          aria-describedby="${e=>e.ariaDescribedby}"
          aria-details="${e=>e.ariaDetails}"
          aria-disabled="${e=>e.ariaDisabled}"
          aria-errormessage="${e=>e.ariaErrormessage}"
          aria-flowto="${e=>e.ariaFlowto}"
          aria-haspopup="${e=>e.ariaHaspopup}"
          aria-hidden="${e=>e.ariaHidden}"
          aria-invalid="${e=>e.ariaInvalid}"
          aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
          aria-label="${e=>e.ariaLabel}"
          aria-labelledby="${e=>e.ariaLabelledby}"
          aria-live="${e=>e.ariaLive}"
          aria-owns="${e=>e.ariaOwns}"
          aria-relevant="${e=>e.ariaRelevant}"
          aria-roledescription="${e=>e.ariaRoledescription}"
          ${z("control")}
        />
        <slot name="clear-button">
          <button
            class="clear-button ${e=>e.value?"":"clear-button__hidden"}"
            part="clear-button"
            tabindex="-1"
            @click=${e=>e.handleClearInput()}
          >
            <slot name="clear-glyph">
              <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2.09 2.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L6 5.29l3.15-3.14a.5.5 0 1 1 .7.7L6.71 6l3.14 3.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L6 6.71 2.85 9.85a.5.5 0 0 1-.7-.7L5.29 6 2.15 2.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"
                />
              </svg>
            </slot>
          </button>
        </slot>
      </div>
      ${vt(i,t)}
    </div>
  </template>
`,Vg=q.create("clear-button-hover").withDefault(i=>{const t=Wt.getValueFor(i),e=Fe.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).hover}),Lg=q.create("clear-button-active").withDefault(i=>{const t=Wt.getValueFor(i),e=Fe.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).active}),Pg=(i,t)=>b`
    ${Jo(i,t,".root")}
  `.withBehaviors(A(b`
        ${ts(i,t,".root")}
      `)),Hg=(i,t)=>b`
    ${L("inline-block")}
    ${Qo(i,t,".root")}
    ${Zo(i,t,".root")}
    .root {
      display: flex;
      flex-direction: row;
    }
    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${w} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    .clear-button {
      display: inline-flex;
      align-items: center;
      margin: 1px;
      height: calc(100% - 2px);
      opacity: 0;
      background: transparent;
      color: ${N};
      fill: currentcolor;
      border: none;
      border-radius: calc(${B} * 1px);
      min-width: calc(${P} * 1px);
      ${tt}
      outline: none;
      padding: 0 calc((10 + (${w} * 2 * ${ke})) * 1px);
    }
    .clear-button:hover {
      background: ${Vg};
    }
    .clear-button:active {
      background: ${Lg};
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button,
    :host(:active:not([disabled], [readOnly])) .clear-button,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button {
        opacity: 1;
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
        opacity: 0;
    }
    .control::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    .input-wrapper {
      display: flex;
      position: relative;
      width: 100%;
    }
    .start,
    .end {
      display: flex;
      margin: 1px;
      align-items: center;
    }
    .start {
      display: flex;
      margin-inline-start: 11px;
    }
    ::slotted([slot="end"]) {
      height: 100%
    }
    .clear-button__hidden {
      opacity: 0;
    }
    .end {
        margin-inline-end: 11px;
    }
    ::slotted(${i.tagFor(Dt)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(ut("filled",Pg(i,t)),A(b`
        ${Ko(i,t,".root")}
      `));class Sl extends Et{constructor(){super(...arguments),this.appearance="outline"}}a([h],Sl.prototype,"appearance",void 0);const zg=Sl.compose({baseName:"search",baseClass:Et,template:Og,styles:Hg,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});class Dl extends ce{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&O.setValueFor(this.listbox,Mi)}}a([h({mode:"fromView"})],Dl.prototype,"appearance",void 0);const Mg=Dl.compose({baseName:"select",baseClass:ce,template:xd,styles:Fl,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),Bg=(i,t)=>b`
    ${L("block")} :host {
      --skeleton-fill-default: ${Ve};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${Bo} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${B} * 1px);
    }

    :host(.circle) {
      border-radius: 100%;
      overflow: hidden;
    }

    object {
      position: absolute;
      width: 100%;
      height: auto;
      z-index: 2;
    }

    object img {
      width: 100%;
      height: auto;
    }

    ${L("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${Ve});
      animation: shimmer 2s infinite;
      animation-timing-function: var(--skeleton-animation-timing, var(--skeleton-timing-default));
      animation-direction: normal;
      z-index: 1;
    }

    ::slotted(svg) {
      z-index: 2;
    }

    ::slotted(.pattern) {
      width: 100%;
      height: 100%;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `.withBehaviors(A(b`
        :host{
          background-color: ${d.CanvasText};
        }
      `)),Ng=Li.compose({baseName:"skeleton",template:wd,styles:Bg}),jg=(i,t)=>b`
    ${L("inline-grid")} :host {
      --thumb-size: calc((${P} / 2) + ${w} + (${k} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${w} / 2) * -1);
      --track-width: ${w};
      align-items: center;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${B} * 1px);
      outline: none;
      cursor: pointer;
    }
    :host(.horizontal) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(.vertical) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      height: 100%;
      grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(:${T}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${O}, 0 0 0 4px ${_};
    }
    .thumb-container {
      position: absolute;
      height: calc(var(--thumb-size) * 1px);
      width: calc(var(--thumb-size) * 1px);
      transition: all 0.2s ease;
    }
    .thumb-cursor {
      display: flex;
      position: relative;
      border: none;
      width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
      background: padding-box linear-gradient(${$t}, ${$t}),
        border-box ${Uo};
      border: calc(${k} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${U};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${qt};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${Ut};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${$t}, ${$t}),
        border-box ${kn};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${$t}, ${$t}),
        border-box ${Cn};
    }
    .track-start {
      background: ${U};
      position: absolute;
      height: 100%;
      left: 0;
      border-radius: calc(${B} * 1px);
    }
    :host(.horizontal) .thumb-container {
      transform: translateX(calc(var(--thumb-size) * 0.5px)) translateY(calc(var(--thumb-translate) * 1px));
    }
    :host(.vertical) .thumb-container {
      transform: translateX(calc(var(--thumb-translate) * 1px)) translateY(calc(var(--thumb-size) * 0.5px));
    }
    :host(.horizontal) {
      min-width: calc(var(--thumb-size) * 1px);
    }
    :host(.horizontal) .track {
      right: calc(var(--track-overhang) * 1px);
      left: calc(var(--track-overhang) * 1px);
      align-self: start;
      height: calc(var(--track-width) * 1px);
    }
    :host(.vertical) .track {
      top: calc(var(--track-overhang) * 1px);
      bottom: calc(var(--track-overhang) * 1px);
      width: calc(var(--track-width) * 1px);
      height: 100%;
    }
    .track {
      background: ${ul};
      border: 1px solid ${li};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${w} * 60px);
      min-width: calc(${w} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${It};
    }
    :host(.disabled) {
      opacity: ${At};
    }
  `.withBehaviors(A(b`
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${d.FieldText};
          background: ${d.FieldText};
        }
        :host(:not(.disabled)) .thumb-cursor:hover,
        :host(:not(.disabled)) .thumb-cursor:active {
          background: ${d.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${d.FieldText};
        }
        .thumb-cursor::after,
        :host(:not(.disabled)) .thumb-cursor:hover::after,
        :host(:not(.disabled)) .thumb-cursor:active::after {
          background: ${d.Field};
        }
        :host(:${T}) .thumb-cursor {
          background: ${d.Highlight};
          border-color: ${d.Highlight};
          box-shadow: 0 0 0 1px ${d.Field}, 0 0 0 3px ${d.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .track,
        :host(.disabled) .thumb-cursor {
          forced-color-adjust: none;
          background: ${d.GrayText};
        }
      `)),_g=pt.compose({baseName:"slider",template:kd,styles:jg,thumb:`
    <div class="thumb-cursor"></div>
  `}),qg=(i,t)=>b`
    ${L("block")} :host {
      ${pl}
    }
    .root {
      position: absolute;
      display: grid;
    }
    :host(.horizontal) {
      align-self: start;
      grid-row: 2;
      margin-top: -4px;
    }
    :host(.vertical) {
      justify-self: start;
      grid-column: 2;
      margin-left: 2px;
    }
    .container {
      display: grid;
      justify-self: center;
    }
    :host(.horizontal) .container {
      grid-template-rows: auto auto;
      grid-template-columns: 0;
    }
    :host(.vertical) .container {
      grid-template-columns: auto auto;
      grid-template-rows: 0;
      min-width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
    }
    .label {
      justify-self: center;
      align-self: center;
      white-space: nowrap;
      max-width: 30px;
      margin: 2px 0;
    }
    .mark {
      width: calc(${k} * 1px);
      height: calc(${w} * 1px);
      background: ${li};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${w} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${At};
    }
  `.withBehaviors(A(b`
        .mark {
          forced-color-adjust: none;
          background: ${d.FieldText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${d.GrayText};
        }
        :host(.disabled) .mark {
          background: ${d.GrayText};
        }
      `)),Ug=he.compose({baseName:"slider-label",template:$d,styles:qg}),Gg=(i,t)=>b`
    :host([hidden]) {
      display: none;
    }

    ${L("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Bt};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${At};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${It};
    }

    .switch {
      position: relative;
      outline: none;
      box-sizing: border-box;
      width: calc(((${P} / 2) + ${w}) * 2px);
      height: calc(((${P} / 2) + ${w}) * 1px);
      background: ${yn};
      border-radius: calc(${P} * 1px);
      border: calc(${k} * 1px) solid ${li};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${xn};
      border-color: ${Tn};
    }

    :host(:not(.disabled):active) .switch {
      background: ${wn};
      border-color: ${Sn};
    }

    :host(:${T}) .switch {
      box-shadow: 0 0 0 1px ${O}, 0 0 0 3px ${_};
      background: ${$n};
      border-color: ${_};
    }

    :host(.checked) .switch {
      background: ${U};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${qt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Ut};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${N};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${N};
      cursor: pointer;
      ${tt}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${N};
      ${tt}
      margin-inline-end: calc(${w} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${w} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${U};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Oe};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${qt};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${rl};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Ut};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${al};
    }

    :host(.checked:${T}:not(.disabled)) .switch {
      box-shadow: 0 0 0 1px ${O}, 0 0 0 3px ${_};
      border-color: transparent;
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(new Ni(b`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,b`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),A(b`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${d.FieldText};
        }
        .switch {
          background: ${d.Field};
          border-color: ${d.FieldText};
        }
        :host(.checked) .switch {
          background: ${d.Highlight};
          border-color: ${d.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${d.HighlightText};
          border-color: ${d.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${d.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${d.Highlight};
        }
        :host(:${T}) .switch {
          forced-color-adjust: none;
          background: ${d.Field};
          border-color: ${d.Highlight};
          box-shadow: 0 0 0 1px ${d.Highlight}, 0 0 0 3px ${d.FieldText};
        }
        :host(.checked:${T}:not(.disabled)) .switch {
          forced-color-adjust: none;
          background: ${d.Highlight};
          box-shadow: 0 0 0 1px ${d.Field}, 0 0 0 3px ${d.FieldText};
          border-color: ${d.Field};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${d.GrayText};
        }
        :host(.disabled) .switch {
          background: ${d.Field};
          border-color: ${d.GrayText};
        }
        .status-message,
        .label {
          color: ${d.FieldText};
        }
      `)),Wg=tn.compose({baseName:"switch",template:Td,styles:Gg,switch:`
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="6"/>
    </svg>
  `}),Yg=(i,t)=>b`
      ${L("grid")} :host {
        box-sizing: border-box;
        ${tt}
        color: ${N};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${P} * 1px); auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${B} * 1px);
        justify-self: center;
        background: ${U};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        align-self: flex-start;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        margin-inline-start: calc(${j} * 1px);
        border-radius: calc(${B} * 1px);
        align-self: center;
        background: ${U};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(A(b`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${d.Highlight};
        }
      `)),Xg=(i,t)=>b`
      ${L("inline-flex")} :host {
        box-sizing: border-box;
        ${tt}
        height: calc((${P} + (${w} * 2)) * 1px);
        padding: 0 calc((6 + (${w} * 2 * ${ke})) * 1px);
        color: ${N};
        border-radius: calc(${B} * 1px);
        border: calc(${k} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
        outline: none;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${N};
      }

      :host(:${T}) {
        border-color: ${_};
        box-shadow: 0 0 0 calc((${j} - ${k}) * 1px) ${_} inset;
      }

      :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${N};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(A(b`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${d.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${d.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${d.Highlight};
            fill: currentcolor;
          }
          :host(:${T}) {
            background: transparent;
            border-color: ${d.ButtonText};
            box-shadow: none;
          }
        `)),Qg=ca.compose({baseName:"tab",template:Ad,styles:Xg}),Zg=(i,t)=>b`
  ${L("block")} :host {
    box-sizing: border-box;
    ${tt}
    padding: 0 calc((6 + (${w} * 2 * ${ke})) * 1px);
  }
`,Jg=Ed.compose({baseName:"tab-panel",template:Rd,styles:Zg}),Kg=de.compose({baseName:"tabs",template:Od,styles:Yg}),tm=(i,t)=>b`
    ${Jo(i,t,".control")}
  `.withBehaviors(A(b`
        ${ts(i,t,".control")}
      `)),em=(i,t)=>b`
    ${L("inline-flex")}

    ${Qo(i,t,".control")}

    ${Zo(i,t,".control")}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${P} * 2) * 1px);
      padding: calc(${w} * 1.5px) calc(${w} * 2px + 1px);
    }

    :host .control {
      resize: none;
    }

    :host(.resize-both) .control {
      resize: both;
    }

    :host(.resize-horizontal) .control {
      resize: horizontal;
    }

    :host(.resize-vertical) .control {
      resize: vertical;
    }
  `.withBehaviors(ut("filled",tm(i,t)),A(b`
        ${Ko(i,t,".control")}
      `));class Rl extends ft{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}a([h],Rl.prototype,"appearance",void 0);const im=Rl.compose({baseName:"text-area",baseClass:ft,template:Pd,styles:em,shadowOptions:{delegatesFocus:!0}}),om=(i,t)=>b`
    ${Jo(i,t,".root")}
  `.withBehaviors(A(b`
        ${ts(i,t,".root")}
      `)),sm=(i,t)=>b`
    ${L("inline-block")}

    ${Qo(i,t,".root")}

    ${Zo(i,t,".root")}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${w} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(ut("filled",om(i,t)),A(b`
        ${Ko(i,t,".root")}
      `));class El extends Ct{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}a([h],El.prototype,"appearance",void 0);const nm=El.compose({baseName:"text-field",baseClass:Ct,template:Hd,styles:sm,shadowOptions:{delegatesFocus:!0}}),rm=(i,t)=>b`
    ${L("inline-flex")} :host {
      --toolbar-item-gap: calc(${w} * 1px);
      background: ${O};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${T}) {
      outline: calc(${k} * 1px) solid ${Np};
    }

    .positioning-region {
      align-items: center;
      display: inline-flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      flex-grow: 1;
    }

    :host([orientation='vertical']) .positioning-region {
      flex-direction: column;
      align-items: start;
    }

    ::slotted(:not([slot])) {
      flex: 0 0 auto;
      margin: 0 var(--toolbar-item-gap);
    }

    :host([orientation='vertical']) ::slotted(:not([slot])) {
      margin: var(--toolbar-item-gap) 0;
    }

    :host([orientation='vertical']) {
      display: inline-flex;
      flex-direction: column;
    }

    .start,
    .end {
      display: flex;
      align-items: center;
    }

    .end {
      margin-inline-start: auto;
    }

    .start__hidden,
    .end__hidden {
      display: none;
    }

    ::slotted(svg) {
      ${""}
      width: 16px;
      height: 16px;
    }
  `.withBehaviors(A(b`
        :host(:${T}) {
          box-shadow: 0 0 0 calc(${j} * 1px) ${d.Highlight};
          color: ${d.ButtonText};
          forced-color-adjust: none;
        }
      `));class am extends _t{}const lm=am.compose({baseName:"toolbar",baseClass:_t,template:zd,styles:rm}),cm=(i,t)=>b`
    :host {
      position: relative;
      contain: layout;
      overflow: visible;
      height: 0;
      width: 0;
      z-index: 10000;
    }

    .tooltip {
      box-sizing: border-box;
      border-radius: calc(${B} * 1px);
      border: calc(${k} * 1px) solid ${Je};
      background: ${O};
      color: ${N};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${tt}
      white-space: nowrap;
      box-shadow: ${pf};
    }

    fluent-anchored-region {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    fluent-anchored-region.right,
    fluent-anchored-region.left {
      flex-direction: column;
    }

    fluent-anchored-region.top .tooltip::after,
    fluent-anchored-region.bottom .tooltip::after,
    fluent-anchored-region.left .tooltip::after,
    fluent-anchored-region.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${O};
      border-top: calc(${k} * 1px) solid ${Je};
      border-left: calc(${k} * 1px) solid ${Je};
      position: absolute;
    }

    fluent-anchored-region.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    fluent-anchored-region.top .tooltip {
      margin-bottom: 12px;
    }

    fluent-anchored-region.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    fluent-anchored-region.bottom .tooltip {
      margin-top: 12px;
    }

    fluent-anchored-region.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    fluent-anchored-region.left .tooltip {
      margin-right: 12px;
    }

    fluent-anchored-region.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    fluent-anchored-region.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(A(b`
        :host([disabled]) {
          opacity: 1;
        }
        fluent-anchored-region.top .tooltip::after,
        fluent-anchored-region.bottom .tooltip::after,
        fluent-anchored-region.left .tooltip::after,
        fluent-anchored-region.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `));class hm extends st{connectedCallback(){super.connectedCallback(),O.setValueFor(this,Mi)}}const dm=hm.compose({baseName:"tooltip",baseClass:st,template:Md,styles:cm}),um=(i,t)=>b`
  :host([hidden]) {
    display: none;
  }

  ${L("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }

  :host:focus-visible {
    outline: none;
  }
`,pm=Do.compose({baseName:"tree-view",template:Nd,styles:um}),fm=b`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${P} * -1px));
  }
  :host([selected])::after {
    left: calc(${j} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,gm=b`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${P} * -1px));
  }
  :host([selected])::after {
    right: calc(${j} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Rr=Gt`((${Ao} / 2) * ${w}) + ((${w} * ${ke}) / 2)`,mm=q.create("tree-item-expand-collapse-hover").withDefault(i=>{const t=Wt.getValueFor(i);return t.evaluate(i,t.evaluate(i).hover).hover}),bm=q.create("tree-item-expand-collapse-selected-hover").withDefault(i=>{const t=je.getValueFor(i);return Wt.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),vm=(i,t)=>b`
    ${L("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${N};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Bt};
      --expand-collapse-button-size: calc(${P} * 1px);
      --tree-item-nested-width: 0;
    }

    :host(:focus) > .positioning-region {
      outline: none;
    }

    :host(:focus) .content-region {
      outline: none;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Le};
      border: calc(${k} * 1px) solid transparent;
      border-radius: calc(${B} * 1px);
      height: calc((${P} + 1) * 1px);
    }

    :host(:${T}) .positioning-region {
      border-color: ${_};
      box-shadow: 0 0 0 calc((${j} - ${k}) * 1px) ${_} inset;
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Pe};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${He};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${P} * 1px);
      margin-inline-start: calc(${w} * 2px + 8px);
      ${tt}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${w} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${B} * 1px);
      outline: none;
      ${""} width: calc((${Rr} + (${w} * 2)) * 1px);
      height: calc((${Rr} + (${w} * 2)) * 1px);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 6px;
    }

    .expand-collapse-button svg {
      transition: transform 0.1s linear;
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
    }

    .start {
      ${""} margin-inline-end: calc(${w} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${w} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${At};
      cursor: ${It};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${mm};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${Ve};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${bm};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${P} / 4) * 1px);
      width: 3px;
      height: calc((${P} / 2) * 1px);
      ${""} background: ${U};
      border-radius: calc(${B} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${P} * -1px);
    }
  `.withBehaviors(new Ni(fm,gm),A(b`
        :host {
          color: ${d.ButtonText};
        }
        .positioning-region {
          border-color: ${d.ButtonFace};
          background: ${d.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${d.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${d.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${d.GrayText};
        }
        :host([selected])::after {
          background: ${d.HighlightText};
        }
        :host(:${T}) .positioning-region {
          forced-color-adjust: none;
          border-color: ${d.ButtonText};
          box-shadow: 0 0 0 2px inset ${d.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${d.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${d.ButtonFace};
          fill: ${d.ButtonText};
        }
      `)),ym=nt.compose({baseName:"tree-item",template:Bd,styles:vm,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),xm={fluentAccordion:nf,fluentAccordionItem:sf,fluentAnchor:kf,fluentAnchoredRegion:Ff,fluentBadge:Tf,fluentBreadcrumb:Df,fluentBreadcrumbItem:Ef,fluentButton:Of,fluentCalendar:Hf,fluentCard:Mf,fluentCheckbox:Nf,fluentCombobox:qf,fluentDataGrid:Qf,fluentDataGridCell:Yf,fluentDataGridRow:Xf,fluentDesignSystemProvider:Zf,fluentDialog:Kf,fluentDivider:eg,fluentFlipper:og,fluentHorizontalScroll:cg,fluentListbox:ug,fluentOption:fg,fluentMenu:bg,fluentMenuItem:yg,fluentNumberField:$g,fluentProgress:Fg,fluentProgressRing:Sg,fluentRadio:Rg,fluentRadioGroup:Ag,fluentSearch:zg,fluentSelect:Mg,fluentSkeleton:Ng,fluentSlider:_g,fluentSliderLabel:Ug,fluentSwitch:Wg,fluentTabs:Kg,fluentTab:Qg,fluentTabPanel:Jg,fluentTextArea:im,fluentTextField:nm,fluentToolbar:lm,fluentTooltip:dm,fluentTreeView:pm,fluentTreeItem:ym,register(i,...t){if(!!i)for(const e in this)e!=="register"&&this[e]().register(i,...t)}};function wm(i){return ea.getOrCreate(i).withPrefix("fluent")}const $m=i=>y`<svg ${i?`slot="${i}"`:""} width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.058 7.79137C12.5976 9.41888 11.2811 10.7733 9.47438 11.2415C8.43302 11.5114 7.38053 11.4476 6.43822 11.1179C6.03481 10.9766 6.10272 10.4671 6.51712 10.3597L9.49436 9.588C9.9303 9.47509 10.189 9.04168 10.0722 8.62002C9.95544 8.19837 9.50735 7.94813 9.07141 8.06114L2.13348 9.85927C1.70099 9.97448 1.44504 10.406 1.56133 10.8258C1.67814 11.2474 2.12622 11.4977 2.56214 11.3846L3.19563 11.2205C3.36358 11.177 3.54191 11.2233 3.67138 11.3355C5.30502 12.7519 7.62253 13.3671 9.8997 12.777C12.6614 12.0612 14.558 9.78124 14.8435 7.18654C15.7643 6.49561 16.2181 5.3143 15.8976 4.15721C15.5412 2.87067 14.3402 2.02111 13.0263 2.01698C11.3851 0.353511 8.88008 -0.414025 6.42198 0.223039C4.26926 0.780965 2.64222 2.28927 1.89409 4.1562C1.8348 4.30413 1.70903 4.4192 1.55058 4.46027L0.704681 4.67951C0.268758 4.79248 0.0100519 5.22589 0.126861 5.64753C0.243669 6.06918 0.691751 6.31941 1.12767 6.20642L1.13065 6.20568L3.457 5.60276L3.46116 5.60165L5.03994 5.19248C5.47586 5.0795 5.73456 4.6461 5.61776 4.22445C5.50095 3.8028 5.05287 3.55258 4.61695 3.66556C4.35781 3.73272 4.16269 3.46493 4.33905 3.26939C4.97893 2.55988 5.83639 2.02042 6.84731 1.75842C8.42261 1.35015 10.0234 1.70556 11.2298 2.59004C10.2797 3.27604 9.80656 4.47624 10.1321 5.65145C10.4935 6.95583 11.7229 7.811 13.058 7.79137ZM14.2181 4.59247C14.3962 5.23526 14.0018 5.89597 13.3372 6.0682C12.6727 6.24044 11.9896 5.85898 11.8116 5.21619C11.6334 4.5734 12.0278 3.91269 12.6924 3.74046C13.357 3.56822 14.0401 3.94969 14.2181 4.59247ZM0.0292677 8.48329C-0.0926206 8.0433 0.177326 7.59105 0.632208 7.47316L5.02492 6.33472C5.4798 6.21683 5.94736 6.47797 6.06925 6.91786C6.19113 7.35785 5.92118 7.8101 5.4663 7.928L1.07359 9.06649C0.61871 9.18439 0.151146 8.92328 0.0292677 8.48329ZM7.22126 5.76549C6.76637 5.88338 6.49643 6.33563 6.61832 6.77565C6.74019 7.21554 7.20776 7.47665 7.66264 7.35875L9.03535 7.00307C9.49024 6.88518 9.76019 6.43293 9.6383 5.99291C9.51641 5.55293 9.04885 5.29182 8.59396 5.40972L7.22126 5.76549Z" fill="#E1477E"/></svg>`,km=i=>y`<svg ${i?`slot="${i}"`:""} xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" viewBox="0 0 48 48" width="1em" height="1em"><path fill="currentcolor" d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"/></svg>`,Cm=i=>y`<svg ${i?`slot="${i}"`:""} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M8.687 1.262a1 1 0 0 0-1.374 0L2.469 5.84A1.5 1.5 0 0 0 2 6.931v5.57A1.5 1.5 0 0 0 3.5 14H5a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2.5A1.5 1.5 0 0 0 11 14h1.5a1.5 1.5 0 0 0 1.5-1.5V6.93a1.5 1.5 0 0 0-.47-1.09L8.687 1.26Z"/></svg>`,Fm=new sn(y`
		<header>
			<fluent-anchor class="page-title" href="/vite-fast-template/">
				<h1>FAST Starter</h1>
			</fluent-anchor>
			<fluent-anchor
				class="gh-link"
				title="go to this repository's page on github"
				href="https://github.com/kingoftac/vite-fast-template"
			>
				${km()}
			</fluent-anchor>
		</header>
		<nav>
			<fluent-anchor href="/vite-fast-template/">
				${Cm("start")}
				Home
			</fluent-anchor>
			<fluent-anchor href="https://fast.design">
				${$m("start")}
				FAST
			</fluent-anchor>
		</nav>
		<main>
			<fluent-card class="page-wrapper">
				<slot></slot>
			</fluent-card>
		</main>
	`,b`
		:host {
			display: grid;
			grid-template-areas:
				'header header'
				'sidebar main';
			grid-template-rows: 42px 1fr;
			grid-template-columns: 215px calc(100% - 215px);
			width: 100%;
			height: 100%;
			background: ${xs};
			z-index: 0;
		}

		header {
			grid-area: header;
			display: flex;
			height: 42px;
			align-items: center;
			justify-content: space-between;
			padding-inline: 1rem;
			background: ${xs};
		}

		nav {
			grid-area: sidebar;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
			background: ${xs};
			padding: 1rem;
		}

		nav > fluent-anchor {
			width: 100%;
		}

		main {
			grid-area: main;
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;
			overflow:  hidden;
		}

		.page-wrapper {
			border-top-right-radius: 0;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			padding: 1rem;
			overflow-y: auto;
		}

		.page-title::part(control) {
			background: transparent;
		}

		.gh-link {
			font-size: var(--type-ramp-plus-4-font-size);
		}
	`);var Im=Object.defineProperty,Tm=Object.getOwnPropertyDescriptor,Sm=(i,t,e,o)=>{for(var s=o>1?void 0:o?Tm(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(s=(o?r(t,e,s):r(s))||s);return o&&s&&Im(t,e,s),s};let zs=class extends xe{};zs=Sm([Gs({name:"home-page",template:y`
		<section class="scroller">
			<fluent-horizontal-scroll>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=1">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=2">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=3">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=4">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=5">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=6">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=7">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=8">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=9">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=10">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=11">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=12">
				</fluent-card>
			</fluent-horizontal-scroll>
		</section>
		<section class="cards">
			<fluent-card>
				<h2>Card</h2>
				<fluent-divider></fluent-divider>
				<p>We don’t serve their kind here! What? Your droids. They’ll have to wait outside. We don’t want them here. Listen, why don’t you wait out by the speeder. We don’t want any trouble. I heartily agree with you sir. Negola dewaghi wooldugger?!? He doesn’t like you. I’m sorry. I don’t like you either You just watch yourself. We’re wanted men. I have the death sentence in twelve systems. I’ll be careful than. You’ll be dead. This little one isn’t worth the effort. Come let me buy you something…</p>
				<fluent-button appearance="accent">button</fluent-button>
			</fluent-card>

			<fluent-card>
				<h2>Card</h2>
				<fluent-divider></fluent-divider>
				<p>The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. It’s a small thermal exhaust port, right below the main port. The shaft leads directly to the reactor system. A precise hit will start a chain reaction which should destroy the station. Only a precise hit will set up a chain reaction. The shaft is ray-shielded, so you’ll have to use proton torpedoes. That’s impossible, even for a computer. It’s not impossible. I used to bull’s-eye womp rats in my T-sixteen back home. They’re not much bigger than two meters. Man your ships! And may the Force be with you!</p>
				<fluent-button appearance="accent">button</fluent-button>
			</fluent-card>

			<fluent-card>
				<h2>Card</h2>
				<fluent-divider></fluent-divider>
				<p>Luke? Luke? Luke? Have you seen Luke this morning? He said he had some things to do before he started today, so he left early. Uh? Did he take those two new droids with him? I think so. Well, he’d better have those units in the south range repaired be midday or there’ll be hell to pay! Wait, there’s something dead ahead on the scanner. It looks like our droid…hit the accelerator.</p>
				<fluent-button appearance="accent">button</fluent-button>
			</fluent-card>

			<fluent-card>
				<h2>Card</h2>
				<fluent-divider></fluent-divider>
				<p>There. You see Lord Vader, she can be reasonable. Continue with the operation. You may fire when ready. What? You’re far too trusting. Dantooine is too remote to make an effective demonstration. But don’t worry. We will deal with your Rebel friends soon enough. No! Commence primary ignition.</p>
				<fluent-button appearance="accent">button</fluent-button>
			</fluent-card>
		</section>
	`,styles:b`
		${L("block")} :host {
			flex-direction: column;
		}

		.scroller {
			position: sticky;
			top: 0;
			z-index: 1;
			background: ${O};
			padding-inline: clamp(1rem, 6%, 3rem);
		}
		
		fluent-horizontal-scroll {
			--scroll-fade-next: var(--fill-color);
			--scroll-fade-previous: var(--fill-color);
		}

		.scroller fluent-card {
			width: 250px;
			height: 300px;
		}

		.scroller img {
			display: flex;
			box-sizing: border-box;
			margin: 0;
			padding: 0;
			width: 100%;
			height: 100%;
		}

		.cards {
			--layout-grid-min-col-size: 30ch;
			--layout-grid-gap: 2ex;
			display: grid;
			grid-template-columns: repeat(
				auto-fit,
				minmax(min(100%, var(--layout-grid-min-col-size)), 1fr)
			);
			gap: max(1rem, var(--layout-grid-gap));
			padding: clamp(1rem, 6%, 3rem);
		}

		.cards > fluent-card {
			display: flex;
			flex-direction: column;
			padding: 1rem;
		}

		.cards > fluent-card > P {
			height: 100%;
		}

		.cards > fluent-card > fluent-button {
			justify-self: flex-end;
			align-self: flex-start;
		}
	`})],zs);class Dm extends xu{configure(){this.title="FAST Starter",this.defaultLayout=Fm,this.routes.map({path:"vite-fast-template",redirect:"home"},{path:"vite-fast-template/home",name:"home",title:"Home",element:zs})}}var Rm=Object.defineProperty,Em=Object.getOwnPropertyDescriptor,En=(i,t,e,o)=>{for(var s=o>1?void 0:o?Em(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(s=(o?r(t,e,s):r(s))||s);return o&&s&&Rm(t,e,s),s};let bo=class extends xe{connectedCallback(){this.container.register(Ke.transient(Es,Es)),super.connectedCallback()}};En([Fc(Dm)],bo.prototype,"config",2);En([qr],bo.prototype,"container",2);bo=En([Gs({name:"starter-app",template:y`<fast-router :config="${i=>i.config}"></fast-router>`,styles:b`${L("contents")}`})],bo);Ce.withDefault(.23);bn.withDefault(Tt.from(ge("#dca8ee")));wm().register(xm);

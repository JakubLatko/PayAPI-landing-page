function ne(){console.log("reload"),document.querySelectorAll(".newsletterForm").forEach(t=>{t.addEventListener("submit",n=>{const o=t.querySelector("input");n.preventDefault(),o&&(o.value="")})})}document.addEventListener("astro:page-load",ne);const oe=document.querySelector(".burger"),re=document.querySelector(".close"),w=document.querySelector("nav");oe?.addEventListener("click",I);re?.addEventListener("click",I);let T=!1;function I(){T=!T,T?(w?.setAttribute("aria-visible","true"),w?.classList.remove("hidden")):T||(w?.setAttribute("aria-visible","false"),w?.classList.add("hidden"))}window.addEventListener("resize",O);window.addEventListener("load",O);function O(){window.innerWidth>767?(w?.setAttribute("aria-visible","true"),w?.classList.remove("hidden")):window.innerWidth<767&&(w?.setAttribute("aria-visible","false"),w?.classList.add("hidden"))}document.addEventListener("astro:page-load",I);document.addEventListener("astro:page-load",O);document.addEventListener("astro:page-load",()=>{T=!1,window.innerWidth>767?(w?.setAttribute("aria-visible","true"),w?.classList.remove("hidden")):window.innerWidth<767&&(w?.setAttribute("aria-visible","false"),w?.classList.add("hidden"))});const ie="astro:before-preparation",se="astro:after-preparation",ae="astro:before-swap",ce="astro:after-swap",le=e=>document.dispatchEvent(new Event(e));class U extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,n,o,r,a,l,d,i,m){super(t,n),this.from=o,this.to=r,this.direction=a,this.navigationType=l,this.sourceElement=d,this.info=i,this.newDocument=m,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class ue extends U{formData;loader;constructor(t,n,o,r,a,l,d,i,m){super(ie,{cancelable:!0},t,n,o,r,a,l,d),this.formData=i,this.loader=m.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class de extends U{direction;viewTransition;swap;constructor(t,n,o){super(ae,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=n,this.swap=o.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function fe(e,t,n,o,r,a,l,d){const i=new ue(e,t,n,o,r,a,window.document,l,d);return document.dispatchEvent(i)&&(await i.loader(),i.defaultPrevented||(le(se),i.navigationType!=="traverse"&&H({scrollX,scrollY}))),i}async function me(e,t,n){const o=new de(e,t,n);return document.dispatchEvent(o),o.swap(),o}const he=history.pushState.bind(history),L=history.replaceState.bind(history),H=e=>{history.state&&(history.scrollRestoration="manual",L({...history.state,...e},""))},M=!!document.startViewTransition,F=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),V=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let R,b,S=!1,X;const Y=e=>document.dispatchEvent(new Event(e)),j=()=>Y("astro:page-load"),we=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},p="data-astro-transition-persist",K="data-astro-transition",z="data-astro-transition-fallback";let q,E=0;history.state?(E=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):F()&&(L({index:E,scrollX,scrollY},""),history.scrollRestoration="manual");const pe=(e,t)=>{let n=!1,o=!1;return(...r)=>{if(n){o=!0;return}e(...r),n=!0,setTimeout(()=>{o&&(o=!1,e(...r)),n=!1},t)}};async function ye(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function G(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function be(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const a=new Promise(l=>{o.onload=o.onerror=l});e=e.then(()=>a)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const J=(e,t,n,o,r)=>{const a=V(t,e),l=document.title;document.title=o;let d=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const i=history.state;L({...n.state,index:i.index,scrollX:i.scrollX,scrollY:i.scrollY},"",e.href)}else he({...n.state,index:++E,scrollX:0,scrollY:0},"",e.href);if(R=e,a||(scrollTo({left:0,top:0,behavior:"instant"}),d=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const i=history.state;location.href=e.href,history.state||L(i,"")}else d||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}document.title=l};function ge(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${p}="${n.getAttribute(p)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(a=>o.addEventListener(a,r)),document.head.append(o)}))}return t}async function $(e,t,n,o){const r=(s,f)=>{const h=s.getAttribute(p),g=h&&f.head.querySelector(`[${p}="${h}"]`);if(g)return g;if(s.matches("link[rel=stylesheet]")){const v=s.getAttribute("href");return f.head.querySelector(`link[rel=stylesheet][href="${v}"]`)}return null},a=()=>{const s=document.activeElement;if(s?.closest(`[${p}]`)){if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){const f=s.selectionStart,h=s.selectionEnd;return{activeElement:s,start:f,end:h}}return{activeElement:s}}else return{activeElement:null}},l=({activeElement:s,start:f,end:h})=>{s&&(s.focus(),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.selectionStart=f,s.selectionEnd=h))},d=s=>{const f=document.documentElement,h=[...f.attributes].filter(({name:c})=>(f.removeAttribute(c),c.startsWith("data-astro-")));[...s.newDocument.documentElement.attributes,...h].forEach(({name:c,value:u})=>f.setAttribute(c,u));for(const c of document.scripts)for(const u of s.newDocument.scripts)if(!c.src&&c.textContent===u.textContent||c.src&&c.type===u.type&&c.src===u.src){u.dataset.astroExec="";break}for(const c of Array.from(document.head.children)){const u=r(c,s.newDocument);u?u.remove():c.remove()}document.head.append(...s.newDocument.head.children);const g=document.body,v=a();document.body.replaceWith(s.newDocument.body);for(const c of g.querySelectorAll(`[${p}]`)){const u=c.getAttribute(p),x=document.querySelector(`[${p}="${u}"]`);x&&x.replaceWith(c)}l(v)};async function i(s){function f(c){const u=c.effect;return!u||!(u instanceof KeyframeEffect)||!u.target?!1:window.getComputedStyle(u.target,u.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(z,s);const v=document.getAnimations().filter(c=>!h.includes(c)&&!f(c));return Promise.all(v.map(c=>c.finished))}if(!S)document.documentElement.setAttribute(K,e.direction),o==="animate"&&await i("old");else throw new DOMException("Transition was skipped");const m=document.title,y=await me(e,b,d);J(y.to,y.from,t,m,n),Y(ce),o==="animate"&&!S&&i("new").then(()=>X())}async function Q(e,t,n,o,r){if(!F()||location.origin!==n.origin){location.href=n.href;return}const a=r?"traverse":o.history==="replace"?"replace":"push";if(a!=="traverse"&&H({scrollX,scrollY}),V(t,n)&&n.hash){J(n,t,o,document.title,r);return}const l=await fe(t,n,e,a,o.sourceElement,o.info,o.formData,d);if(l.defaultPrevented){location.href=n.href;return}async function d(i){const m=i.to.href,y={};if(i.formData){y.method="POST";const h=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");y.body=h?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const s=await ye(m,y);if(s===null){i.preventDefault();return}if(s.redirected&&(i.to=new URL(s.redirected)),q??=new DOMParser,i.newDocument=q.parseFromString(s.html,s.mediaType),i.newDocument.querySelectorAll("noscript").forEach(h=>h.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const f=ge(i.newDocument);f.length&&await Promise.all(f)}if(S=!1,M)b=document.startViewTransition(async()=>await $(l,o,r));else{const i=(async()=>{await new Promise(m=>setTimeout(m)),await $(l,o,r,G())})();b={updateCallbackDone:i,ready:i,finished:new Promise(m=>X=m),skipTransition:()=>{S=!0}}}b.ready.then(async()=>{await be(),j(),we()}),b.finished.then(()=>{document.documentElement.removeAttribute(K),document.documentElement.removeAttribute(z)}),await b.ready}async function C(e,t){await Q("forward",R,new URL(e,location.href),t??{})}function ve(e){if(!F()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>E?"forward":"back";E=n,Q(o,R,new URL(location.href),{},t)}const W=()=>{H({scrollX,scrollY})};{(M||G()!=="none")&&(R=new URL(location.href),addEventListener("popstate",ve),addEventListener("load",j),"onscrollend"in window?addEventListener("scrollend",W):addEventListener("scroll",pe(W,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}const Z=new Set,D=new WeakSet;let P,ee,_=!1;function Te(e){_||(_=!0,P??=e?.prefetchAll??!1,ee??=e?.defaultStrategy??"hover",Ee(),Ae(),Le(),De())}function Ee(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{A(t.target,"tap")&&k(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function Ae(){let e;document.body.addEventListener("focusin",o=>{A(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),N(()=>{for(const o of document.getElementsByTagName("a"))D.has(o)||A(o,"hover")&&(D.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{k(r,{with:"fetch"})},80)}function n(){e&&(clearTimeout(e),e=0)}}function Le(){let e;N(()=>{for(const t of document.getElementsByTagName("a"))D.has(t)||A(t,"viewport")&&(D.add(t),e??=Se(),e.observe(t))})}function Se(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,a=e.get(r);o.isIntersecting?(a&&clearTimeout(a),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),k(r.href,{with:"link"})},300))):a&&(clearTimeout(a),e.delete(r))}})}function De(){N(()=>{for(const e of document.getElementsByTagName("a"))A(e,"load")&&k(e.href,{with:"link"})})}function k(e,t){const n=t?.ignoreSlowConnection??!1;if(!Re(e,n))return;if(Z.add(e),(t?.with??"link")==="link"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e).catch(r=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(r)})}function Re(e,t){if(!navigator.onLine||!t&&te())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!Z.has(e)}catch{}return!1}function A(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||P)&&te()?!0:n==null&&P||n===""?t===ee:n===t}function te(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function N(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function ke(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function B(e){return e.dataset.astroReload!==void 0}(M||ke()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;B(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),C(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||B(t))return;const n=t,o=e.submitter,r=new FormData(n,o);let a=o?.getAttribute("formaction")??n.action??location.pathname;const l=o?.getAttribute("formmethod")??n.method;if(l==="dialog"||location.origin!==new URL(a,location.href).origin)return;const d={sourceElement:o??n};if(l==="get"){const i=new URLSearchParams(r),m=new URL(a);m.search=i.toString(),a=m.toString()}else d.formData=r;e.preventDefault(),C(a,d)}),Te({prefetchAll:!0}));
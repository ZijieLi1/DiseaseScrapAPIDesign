import{S as ht,i as mt,s as _t,a as gt,e as K,c as wt,b as X,g as ge,t as M,d as we,f as G,h as z,j as yt,o as Ne,k as bt,l as vt,m as Et,n as Le,p as B,q as kt,r as Rt,u as St,v as Ie,w as Q,x,y as je,z as ee,A as te,B as me,C as Z,D as Lt}from"./chunks/paths-76b32af6.js";import{S as lt,a as ct,I as $,g as Qe,f as xe,b as Ae,c as _e,s as H,i as et,d as ie,P as tt,e as It,h as At}from"./chunks/singletons-5534ff05.js";import{R as nt,H as le}from"./chunks/control-e7f5239e.js";function Pt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function Ot(a){return a.split("%25").map(decodeURI).join("%25")}function Ut(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Tt=["href","pathname","search","searchParams","toString","toJSON"];function Nt(a,e){const n=new URL(a);for(const s of Tt){let i=n[s];Object.defineProperty(n,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return Dt(n),n}function Dt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const jt="/__data.json";function Vt(a){return a.replace(/\/$/,"")+jt}function ft(a){try{return JSON.parse(sessionStorage[a])}catch{}}function at(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function Ct(...a){let e=5381;for(const n of a)if(typeof n=="string"){let s=n.length;for(;s;)e=e*33^n.charCodeAt(--s)}else if(ArrayBuffer.isView(n)){const s=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=s.length;for(;i;)e=e*33^s[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ye=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ce.delete(Ve(a)),ye(a,e));const ce=new Map;function qt(a,e){const n=Ve(a,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:i,...u}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&ce.set(n,{body:i,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,u))}return ye(a,e)}function $t(a,e,n){if(ce.size>0){const s=Ve(a,n),i=ce.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);ce.delete(s)}}return ye(e,n)}function Ve(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const i=[];e.headers&&i.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&i.push(e.body),s+=`[data-hash="${Ct(...i)}"]`}return s}const Bt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ft(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Kt(a).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((g,h)=>{if(h%2){if(g.startsWith("x+"))return Pe(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return Pe(String.fromCharCode(...g.slice(2).split("-").map(P=>parseInt(P,16))));const m=Bt.exec(g);if(!m)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,O,I,V]=m;return e.push({name:I,matcher:V,optional:!!E,rest:!!O,chained:O?h===1&&t[0]==="":!1}),O?"(.*?)":E?"([^/]*)?":"([^/]+?)"}return Pe(g)}).join("")}).join("")}/?$`),params:e}}function Ht(a){return!/^\([^)]+\)$/.test(a)}function Kt(a){return a.slice(1).split("/").filter(Ht)}function Mt(a,e,n){const s={},i=a.slice(1);let u=0;for(let t=0;t<e.length;t+=1){const f=e[t],g=i[t-u];if(f.chained&&f.rest&&u){s[f.name]=i.slice(t-u,t+1).filter(h=>h).join("/"),u=0;continue}if(g===void 0){f.rest&&(s[f.name]="");continue}if(!f.matcher||n[f.matcher](g)){s[f.name]=g;continue}if(f.optional&&f.chained){u++;continue}return}if(!u)return s}function Pe(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Gt(a,e,n,s){const i=new Set(e);return Object.entries(n).map(([f,[g,h,m]])=>{const{pattern:E,params:O}=Ft(f),I={id:f,exec:V=>{const P=E.exec(V);if(P)return Mt(P,O,s)},errors:[1,...m||[]].map(V=>a[V]),layouts:[0,...h||[]].map(t),leaf:u(g)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function u(f){const g=f<0;return g&&(f=~f),[g,a[f]]}function t(f){return f===void 0?f:[i.has(f),a[f]]}}function zt(a){let e,n,s;var i=a[1][0];function u(t){return{props:{data:t[3],form:t[2]}}}return i&&(e=Q(i,u(a)),a[12](e)),{c(){e&&x(e.$$.fragment),n=K()},l(t){e&&je(e.$$.fragment,t),n=K()},m(t,f){e&&ee(e,t,f),X(t,n,f),s=!0},p(t,f){const g={};if(f&8&&(g.data=t[3]),f&4&&(g.form=t[2]),i!==(i=t[1][0])){if(e){ge();const h=e;M(h.$$.fragment,1,0,()=>{te(h,1)}),we()}i?(e=Q(i,u(t)),t[12](e),x(e.$$.fragment),G(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&M(e.$$.fragment,t),s=!1},d(t){a[12](null),t&&z(n),e&&te(e,t)}}}function Jt(a){let e,n,s;var i=a[1][0];function u(t){return{props:{data:t[3],$$slots:{default:[Wt]},$$scope:{ctx:t}}}}return i&&(e=Q(i,u(a)),a[11](e)),{c(){e&&x(e.$$.fragment),n=K()},l(t){e&&je(e.$$.fragment,t),n=K()},m(t,f){e&&ee(e,t,f),X(t,n,f),s=!0},p(t,f){const g={};if(f&8&&(g.data=t[3]),f&8215&&(g.$$scope={dirty:f,ctx:t}),i!==(i=t[1][0])){if(e){ge();const h=e;M(h.$$.fragment,1,0,()=>{te(h,1)}),we()}i?(e=Q(i,u(t)),t[11](e),x(e.$$.fragment),G(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&M(e.$$.fragment,t),s=!1},d(t){a[11](null),t&&z(n),e&&te(e,t)}}}function Wt(a){let e,n,s;var i=a[1][1];function u(t){return{props:{data:t[4],form:t[2]}}}return i&&(e=Q(i,u(a)),a[10](e)),{c(){e&&x(e.$$.fragment),n=K()},l(t){e&&je(e.$$.fragment,t),n=K()},m(t,f){e&&ee(e,t,f),X(t,n,f),s=!0},p(t,f){const g={};if(f&16&&(g.data=t[4]),f&4&&(g.form=t[2]),i!==(i=t[1][1])){if(e){ge();const h=e;M(h.$$.fragment,1,0,()=>{te(h,1)}),we()}i?(e=Q(i,u(t)),t[10](e),x(e.$$.fragment),G(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&M(e.$$.fragment,t),s=!1},d(t){a[10](null),t&&z(n),e&&te(e,t)}}}function rt(a){let e,n=a[6]&&ot(a);return{c(){e=bt("div"),n&&n.c(),this.h()},l(s){e=vt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=Et(e);n&&n.l(i),i.forEach(z),this.h()},h(){Le(e,"id","svelte-announcer"),Le(e,"aria-live","assertive"),Le(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(s,i){X(s,e,i),n&&n.m(e,null)},p(s,i){s[6]?n?n.p(s,i):(n=ot(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&z(e),n&&n.d()}}}function ot(a){let e;return{c(){e=kt(a[7])},l(n){e=Rt(n,a[7])},m(n,s){X(n,e,s)},p(n,s){s&128&&St(e,n[7])},d(n){n&&z(e)}}}function Yt(a){let e,n,s,i,u;const t=[Jt,zt],f=[];function g(m,E){return m[1][1]?0:1}e=g(a),n=f[e]=t[e](a);let h=a[5]&&rt(a);return{c(){n.c(),s=gt(),h&&h.c(),i=K()},l(m){n.l(m),s=wt(m),h&&h.l(m),i=K()},m(m,E){f[e].m(m,E),X(m,s,E),h&&h.m(m,E),X(m,i,E),u=!0},p(m,[E]){let O=e;e=g(m),e===O?f[e].p(m,E):(ge(),M(f[O],1,1,()=>{f[O]=null}),we(),n=f[e],n?n.p(m,E):(n=f[e]=t[e](m),n.c()),G(n,1),n.m(s.parentNode,s)),m[5]?h?h.p(m,E):(h=rt(m),h.c(),h.m(i.parentNode,i)):h&&(h.d(1),h=null)},i(m){u||(G(n),u=!0)},o(m){M(n),u=!1},d(m){f[e].d(m),m&&z(s),h&&h.d(m),m&&z(i)}}}function Xt(a,e,n){let{stores:s}=e,{page:i}=e,{constructors:u}=e,{components:t=[]}=e,{form:f}=e,{data_0:g=null}=e,{data_1:h=null}=e;yt(s.page.notify);let m=!1,E=!1,O=null;Ne(()=>{const R=s.page.subscribe(()=>{m&&(n(6,E=!0),n(7,O=document.title||"untitled page"))});return n(5,m=!0),R});function I(R){Ie[R?"unshift":"push"](()=>{t[1]=R,n(0,t)})}function V(R){Ie[R?"unshift":"push"](()=>{t[0]=R,n(0,t)})}function P(R){Ie[R?"unshift":"push"](()=>{t[0]=R,n(0,t)})}return a.$$set=R=>{"stores"in R&&n(8,s=R.stores),"page"in R&&n(9,i=R.page),"constructors"in R&&n(1,u=R.constructors),"components"in R&&n(0,t=R.components),"form"in R&&n(2,f=R.form),"data_0"in R&&n(3,g=R.data_0),"data_1"in R&&n(4,h=R.data_1)},a.$$.update=()=>{a.$$.dirty&768&&s.page.set(i)},[t,u,f,g,h,m,E,O,s,i,I,V,P]}class Zt extends ht{constructor(e){super(),mt(this,e,Xt,Yt,_t,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const Qt="modulepreload",xt=function(a,e){return new URL(a,e).href},st={},F=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=xt(u,s),u in st)return;st[u]=!0;const t=u.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!s)for(let m=i.length-1;m>=0;m--){const E=i[m];if(E.href===u&&(!t||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const h=document.createElement("link");if(h.rel=t?"stylesheet":Qt,t||(h.as="script",h.crossOrigin=""),h.href=u,document.head.appendChild(h),t)return new Promise((m,E)=>{h.addEventListener("load",m),h.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},en={},be=[()=>F(()=>import("./chunks/0-e4bd66e9.js"),["./chunks/0-e4bd66e9.js","./components/pages/_layout.svelte-bf90affe.js","./chunks/paths-76b32af6.js","./chunks/_commonjsHelpers-eb089990.js","./assets/_commonjsHelpers-43b693e1.css","./chunks/ChevronDown-e01a67e0.js","./assets/ChevronDown-4e074f2b.css","./chunks/prism-json-106361a3.js","./chunks/index-6f067d1b.js","./chunks/model-47004776.js","./chunks/pages-6981edcf.js","./chunks/Button-e23c0266.js","./chunks/stores-ea812e0b.js","./chunks/singletons-5534ff05.js","./assets/_layout-14be03cc.css"],import.meta.url),()=>F(()=>import("./chunks/1-8a0ecb86.js"),["./chunks/1-8a0ecb86.js","./components/pages/_error.svelte-090ec042.js","./chunks/paths-76b32af6.js","./chunks/stores-ea812e0b.js","./chunks/singletons-5534ff05.js","./chunks/index-6f067d1b.js","./assets/_error-02be4262.css"],import.meta.url),()=>F(()=>import("./chunks/2-3ec3af4a.js"),["./chunks/2-3ec3af4a.js","./chunks/_page-8c99580f.js","./chunks/index-b40a4f3c.js","./chunks/control-e7f5239e.js","./chunks/pages-6981edcf.js","./chunks/model-47004776.js","./chunks/_commonjsHelpers-eb089990.js","./chunks/paths-76b32af6.js","./assets/_commonjsHelpers-43b693e1.css"],import.meta.url),()=>F(()=>import("./chunks/3-7a158ae3.js"),["./chunks/3-7a158ae3.js","./chunks/_page-3b45e68e.js","./chunks/index-b40a4f3c.js","./chunks/control-e7f5239e.js","./chunks/pages-6981edcf.js","./chunks/model-47004776.js","./chunks/_commonjsHelpers-eb089990.js","./chunks/paths-76b32af6.js","./assets/_commonjsHelpers-43b693e1.css","./components/pages/_...page_/_page.svelte-485f998c.js","./chunks/PreviousNextPage-22971146.js","./chunks/ChevronDown-e01a67e0.js","./assets/ChevronDown-4e074f2b.css","./chunks/index-6f067d1b.js","./assets/PreviousNextPage-4a5fa1bb.css"],import.meta.url),()=>F(()=>import("./chunks/4-13463f22.js"),["./chunks/4-13463f22.js","./chunks/_page-0501acb7.js","./chunks/model-47004776.js","./chunks/_commonjsHelpers-eb089990.js","./chunks/paths-76b32af6.js","./assets/_commonjsHelpers-43b693e1.css","./chunks/pages-6981edcf.js","./chunks/index-b40a4f3c.js","./chunks/control-e7f5239e.js","./components/pages/directives/_directive_/_page.svelte-b10174de.js","./chunks/PreviousNextPage-22971146.js","./chunks/ChevronDown-e01a67e0.js","./assets/ChevronDown-4e074f2b.css","./chunks/index-6f067d1b.js","./assets/PreviousNextPage-4a5fa1bb.css","./chunks/ArgsList-69bc83d4.js","./assets/ArgsList-957ebbf5.css"],import.meta.url),()=>F(()=>import("./chunks/5-73fb33db.js"),["./chunks/5-73fb33db.js","./chunks/_page-ecfdf1af.js","./chunks/model-47004776.js","./chunks/_commonjsHelpers-eb089990.js","./chunks/paths-76b32af6.js","./assets/_commonjsHelpers-43b693e1.css","./chunks/pages-6981edcf.js","./chunks/index-b40a4f3c.js","./chunks/control-e7f5239e.js","./components/pages/mutations/_mutation_/_page.svelte-18bb59d3.js","./chunks/FieldDetails-a7a9bf68.js","./chunks/index-6f067d1b.js","./chunks/PreviousNextPage-22971146.js","./chunks/ChevronDown-e01a67e0.js","./assets/ChevronDown-4e074f2b.css","./assets/PreviousNextPage-4a5fa1bb.css","./chunks/prism-json-106361a3.js","./chunks/Button-e23c0266.js","./chunks/ArgsList-69bc83d4.js","./assets/ArgsList-957ebbf5.css","./chunks/DirectiveTag-860080de.js","./assets/DirectiveTag-771fbf22.css","./assets/FieldDetails-c7cbfd6e.css"],import.meta.url),()=>F(()=>import("./chunks/6-05a53334.js"),["./chunks/6-05a53334.js","./chunks/_page-66ce0172.js","./chunks/model-47004776.js","./chunks/_commonjsHelpers-eb089990.js","./chunks/paths-76b32af6.js","./assets/_commonjsHelpers-43b693e1.css","./chunks/pages-6981edcf.js","./chunks/index-b40a4f3c.js","./chunks/control-e7f5239e.js","./components/pages/queries/_query_/_page.svelte-190b032b.js","./chunks/FieldDetails-a7a9bf68.js","./chunks/index-6f067d1b.js","./chunks/PreviousNextPage-22971146.js","./chunks/ChevronDown-e01a67e0.js","./assets/ChevronDown-4e074f2b.css","./assets/PreviousNextPage-4a5fa1bb.css","./chunks/prism-json-106361a3.js","./chunks/Button-e23c0266.js","./chunks/ArgsList-69bc83d4.js","./assets/ArgsList-957ebbf5.css","./chunks/DirectiveTag-860080de.js","./assets/DirectiveTag-771fbf22.css","./assets/FieldDetails-c7cbfd6e.css"],import.meta.url),()=>F(()=>import("./chunks/7-d0886129.js"),["./chunks/7-d0886129.js","./chunks/_page-57dff934.js","./chunks/model-47004776.js","./chunks/_commonjsHelpers-eb089990.js","./chunks/paths-76b32af6.js","./assets/_commonjsHelpers-43b693e1.css","./chunks/pages-6981edcf.js","./chunks/index-b40a4f3c.js","./chunks/control-e7f5239e.js","./components/pages/subscriptions/_subscription_/_page.svelte-9f2c0828.js","./chunks/FieldDetails-a7a9bf68.js","./chunks/index-6f067d1b.js","./chunks/PreviousNextPage-22971146.js","./chunks/ChevronDown-e01a67e0.js","./assets/ChevronDown-4e074f2b.css","./assets/PreviousNextPage-4a5fa1bb.css","./chunks/prism-json-106361a3.js","./chunks/Button-e23c0266.js","./chunks/ArgsList-69bc83d4.js","./assets/ArgsList-957ebbf5.css","./chunks/DirectiveTag-860080de.js","./assets/DirectiveTag-771fbf22.css","./assets/FieldDetails-c7cbfd6e.css"],import.meta.url),()=>F(()=>import("./chunks/8-84455a8e.js"),["./chunks/8-84455a8e.js","./chunks/_page-f61f79b2.js","./chunks/model-47004776.js","./chunks/_commonjsHelpers-eb089990.js","./chunks/paths-76b32af6.js","./assets/_commonjsHelpers-43b693e1.css","./chunks/pages-6981edcf.js","./chunks/index-b40a4f3c.js","./chunks/control-e7f5239e.js","./components/pages/types/_type_/_page.svelte-e6b90722.js","./chunks/PreviousNextPage-22971146.js","./chunks/ChevronDown-e01a67e0.js","./assets/ChevronDown-4e074f2b.css","./chunks/index-6f067d1b.js","./assets/PreviousNextPage-4a5fa1bb.css","./chunks/ArgsList-69bc83d4.js","./assets/ArgsList-957ebbf5.css","./chunks/Button-e23c0266.js","./chunks/DirectiveTag-860080de.js","./assets/DirectiveTag-771fbf22.css","./assets/_page-e20843b5.css"],import.meta.url)],ut=[],tn={"/":[2],"/directives/[directive]":[4],"/mutations/[mutation]":[5],"/queries/[query]":[6],"/subscriptions/[subscription]":[7],"/types/[type]":[8],"/[...page]":[3]},nn={handleError:({error:a})=>{console.error(a)}};async function an(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,i])=>[s,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const rn=-1,on=-2,sn=-3,ln=-4,cn=-5,fn=-6;function un(a,e){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,s=Array(n.length);function i(u,t=!1){if(u===rn)return;if(u===sn)return NaN;if(u===ln)return 1/0;if(u===cn)return-1/0;if(u===fn)return-0;if(t)throw new Error("Invalid input");if(u in s)return s[u];const f=n[u];if(!f||typeof f!="object")s[u]=f;else if(Array.isArray(f))if(typeof f[0]=="string"){const g=f[0],h=e==null?void 0:e[g];if(h)return s[u]=h(i(f[1]));switch(g){case"Date":s[u]=new Date(f[1]);break;case"Set":const m=new Set;s[u]=m;for(let I=1;I<f.length;I+=1)m.add(i(f[I]));break;case"Map":const E=new Map;s[u]=E;for(let I=1;I<f.length;I+=2)E.set(i(f[I]),i(f[I+1]));break;case"RegExp":s[u]=new RegExp(f[1],f[2]);break;case"Object":s[u]=Object(f[1]);break;case"BigInt":s[u]=BigInt(f[1]);break;case"null":const O=Object.create(null);s[u]=O;for(let I=1;I<f.length;I+=2)O[f[I]]=i(f[I+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(f.length);s[u]=g;for(let h=0;h<f.length;h+=1){const m=f[h];m!==on&&(g[h]=i(m))}}else{const g={};s[u]=g;for(const h in f){const m=f[h];g[h]=i(m)}}return s[u]}return i(0)}function dn(a){return a.filter(e=>e!=null)}const Oe=Gt(be,ut,tn,en),dt=be[0],De=be[1];dt();De();const Y=ft(lt)??{},oe=ft(ct)??{};function Ue(a){Y[a]=ie()}function pn({target:a}){var Ye;const e=document.documentElement,n=[],s=[];let i=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,g=!1,h=!0,m=!1,E=!1,O=!1,I=!1,V,P=(Ye=history.state)==null?void 0:Ye[$];P||(P=Date.now(),history.replaceState({...history.state,[$]:P},"",location.href));const R=Y[P];R&&(history.scrollRestoration="manual",scrollTo(R.x,R.y));let J,Ce,fe;async function qe(){fe=fe||Promise.resolve(),await fe,fe=null;const o=new URL(location.href),r=ae(o,!0);i=null,await He(r,o,[])}function $e(o){s.some(r=>r==null?void 0:r.snapshot)&&(oe[o]=s.map(r=>{var c;return(c=r==null?void 0:r.snapshot)==null?void 0:c.capture()}))}function Be(o){var r;(r=oe[o])==null||r.forEach((c,l)=>{var p,d;(d=(p=s[l])==null?void 0:p.snapshot)==null||d.restore(c)})}async function ve(o,{noScroll:r=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:d=!1},w,_){return typeof o=="string"&&(o=new URL(o,Qe(document))),he({url:o,scroll:r?ie():null,keepfocus:l,redirect_chain:w,details:{state:p,replaceState:c},nav_token:_,accepted:()=>{d&&(I=!0)},blocked:()=>{},type:"goto"})}async function Fe(o){return i={id:o.id,promise:Ge(o).then(r=>(r.type==="loaded"&&r.state.error&&(i=null),r))},i.promise}async function ue(...o){const c=Oe.filter(l=>o.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function He(o,r,c,l,p,d={},w){var b,y,A;Ce=d;let _=o&&await Ge(o);if(_||(_=await We(r,{id:null},await se(new Error(`Not found: ${r.pathname}`),{url:r,params:{},route:{id:null}}),404)),r=(o==null?void 0:o.url)||r,Ce!==d)return!1;if(_.type==="redirect")if(c.length>10||c.includes(r.pathname))_=await de({status:500,error:await se(new Error("Redirect loop"),{url:r,params:{},route:{id:null}}),url:r,route:{id:null}});else return ve(new URL(_.location,r).href,{},[...c,r.pathname],d),!1;else((b=_.props.page)==null?void 0:b.status)>=400&&await H.updated.check()&&await re(r);if(n.length=0,I=!1,m=!0,l&&(Ue(l),$e(l)),(y=_.props.page)!=null&&y.url&&_.props.page.url.pathname!==r.pathname&&(r.pathname=(A=_.props.page)==null?void 0:A.url.pathname),p&&p.details){const{details:S}=p,j=S.replaceState?0:1;if(S.state[$]=P+=j,history[S.replaceState?"replaceState":"pushState"](S.state,"",r),!S.replaceState){let L=P+1;for(;oe[L]||Y[L];)delete oe[L],delete Y[L],L+=1}}if(i=null,g?(t=_.state,_.props.page&&(_.props.page.url=r),V.$set(_.props)):Ke(_),p){const{scroll:S,keepfocus:j}=p,{activeElement:L}=document;await me();const v=document.activeElement!==L&&document.activeElement!==document.body;if(!j&&!v&&await Te(),h){const U=r.hash&&document.getElementById(decodeURIComponent(r.hash.slice(1)));S?scrollTo(S.x,S.y):U?U.scrollIntoView():scrollTo(0,0)}}else await me();h=!0,_.props.page&&(J=_.props.page),w&&w(),m=!1}function Ke(o){var l;t=o.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),J=o.props.page,V=new Zt({target:a,props:{...o.props,stores:H,components:s},hydrate:!0}),Be(P);const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(p=>p(c)),g=!0}async function ne({url:o,params:r,branch:c,status:l,error:p,route:d,form:w}){let _="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(_=L.slash);o.pathname=Pt(o.pathname,_),o.search=o.search;const b={type:"loaded",state:{url:o,params:r,branch:c,error:p,route:d},props:{constructors:dn(c).map(L=>L.node.component)}};w!==void 0&&(b.props.form=w);let y={},A=!J,S=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const v=c[L],U=t.branch[L];(v==null?void 0:v.data)!==(U==null?void 0:U.data)&&(A=!0),v&&(y={...y,...v.data},A&&(b.props[`data_${S}`]=y),S+=1)}return(!t.url||o.href!==t.url.href||t.error!==p||w!==void 0&&w!==J.form||A)&&(b.props.page={error:p,params:r,route:{id:(d==null?void 0:d.id)??null},status:l,url:new URL(o),form:w??null,data:A?y:J.data}),b}async function Ee({loader:o,parent:r,url:c,params:l,route:p,server_data_node:d}){var y,A,S;let w=null;const _={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await o();if((y=b.universal)!=null&&y.load){let j=function(...v){for(const U of v){const{href:C}=new URL(U,c);_.dependencies.add(C)}};const L={route:{get id(){return _.route=!0,p.id}},params:new Proxy(l,{get:(v,U)=>(_.params.add(U),v[U])}),data:(d==null?void 0:d.data)??null,url:Nt(c,()=>{_.url=!0}),async fetch(v,U){let C;v instanceof Request?(C=v.url,U={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...U}):C=v;const q=new URL(C,c);return j(q.href),q.origin===c.origin&&(C=q.href.slice(c.origin.length)),g?$t(C,q.href,U):qt(C,U)},setHeaders:()=>{},depends:j,parent(){return _.parent=!0,r()}};w=await b.universal.load.call(null,L)??null,w=w?await an(w):null}return{node:b,loader:o,server:d,universal:(A=b.universal)!=null&&A.load?{type:"data",data:w,uses:_}:null,data:w??(d==null?void 0:d.data)??null,slash:((S=b.universal)==null?void 0:S.trailingSlash)??(d==null?void 0:d.slash)}}function Me(o,r,c,l,p){if(I)return!0;if(!l)return!1;if(l.parent&&o||l.route&&r||l.url&&c)return!0;for(const d of l.params)if(p[d]!==t.params[d])return!0;for(const d of l.dependencies)if(n.some(w=>w(new URL(d))))return!0;return!1}function ke(o,r){return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set(o.uses.dependencies??[]),params:new Set(o.uses.params??[]),parent:!!o.uses.parent,route:!!o.uses.route,url:!!o.uses.url},slash:o.slash}:(o==null?void 0:o.type)==="skip"?r??null:null}async function Ge({id:o,invalidating:r,url:c,params:l,route:p}){if((i==null?void 0:i.id)===o)return i.promise;const{errors:d,layouts:w,leaf:_}=p,b=[...w,_];d.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const A=t.url?o!==t.url.pathname+t.url.search:!1,S=t.route?p.id!==t.route.id:!1;let j=!1;const L=b.map((k,D)=>{var W;const T=t.branch[D],N=!!(k!=null&&k[0])&&((T==null?void 0:T.loader)!==k[1]||Me(j,S,A,(W=T.server)==null?void 0:W.uses,l));return N&&(j=!0),N});if(L.some(Boolean)){try{y=await it(c,L)}catch(k){return de({status:k instanceof le?k.status:500,error:await se(k,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(y.type==="redirect")return y}const v=y==null?void 0:y.nodes;let U=!1;const C=b.map(async(k,D)=>{var Re;if(!k)return;const T=t.branch[D],N=v==null?void 0:v[D];if((!N||N.type==="skip")&&k[1]===(T==null?void 0:T.loader)&&!Me(U,S,A,(Re=T.universal)==null?void 0:Re.uses,l))return T;if(U=!0,(N==null?void 0:N.type)==="error")throw N;return Ee({loader:k[1],url:c,params:l,route:p,parent:async()=>{var Ze;const Xe={};for(let Se=0;Se<D;Se+=1)Object.assign(Xe,(Ze=await C[Se])==null?void 0:Ze.data);return Xe},server_data_node:ke(N===void 0&&k[0]?{type:"skip"}:N??null,k[0]?T==null?void 0:T.server:void 0)})});for(const k of C)k.catch(()=>{});const q=[];for(let k=0;k<b.length;k+=1)if(b[k])try{q.push(await C[k])}catch(D){if(D instanceof nt)return{type:"redirect",location:D.location};let T=500,N;if(v!=null&&v.includes(D))T=D.status??T,N=D.error;else if(D instanceof le)T=D.status,N=D.body;else{if(await H.updated.check())return await re(c);N=await se(D,{params:l,url:c,route:{id:p.id}})}const W=await ze(k,q,d);return W?await ne({url:c,params:l,branch:q.slice(0,W.idx).concat(W.node),status:T,error:N,route:p}):await We(c,{id:p.id},N,T)}else q.push(void 0);return await ne({url:c,params:l,branch:q,status:200,error:null,route:p,form:r?void 0:null})}async function ze(o,r,c){for(;o--;)if(c[o]){let l=o;for(;!r[l];)l-=1;try{return{idx:l+1,node:{node:await c[o](),loader:c[o],data:{},server:null,universal:null}}}catch{continue}}}async function de({status:o,error:r,url:c,route:l}){const p={};let d=null;if(ut[0]===0)try{const y=await it(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;d=y.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await re(c)}const _=await Ee({loader:dt,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:ke(d)}),b={node:await De(),loader:De,universal:null,server:null,data:null};return await ne({url:c,params:p,branch:[_,b],status:o,error:r,route:null})}function ae(o,r){if(et(o,Z))return;const c=pe(o);for(const l of Oe){const p=l.exec(c);if(p)return{id:o.pathname+o.search,invalidating:r,route:l,params:Ut(p),url:o}}}function pe(o){return Ot(o.pathname.slice(Z.length)||"/")}function Je({url:o,type:r,intent:c,delta:l}){var _,b;let p=!1;const d={from:{params:t.params,route:{id:((_=t.route)==null?void 0:_.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:o},willUnload:!c,type:r};l!==void 0&&(d.delta=l);const w={...d,cancel:()=>{p=!0}};return E||u.before_navigate.forEach(y=>y(w)),p?null:d}async function he({url:o,scroll:r,keepfocus:c,redirect_chain:l,details:p,type:d,delta:w,nav_token:_,accepted:b,blocked:y}){const A=ae(o,!1),S=Je({url:o,type:d,delta:w,intent:A});if(!S){y();return}const j=P;b(),E=!0,g&&H.navigating.set(S),await He(A,o,l,j,{scroll:r,keepfocus:c,details:p},_,()=>{E=!1,u.after_navigate.forEach(L=>L(S)),H.navigating.set(null)})}async function We(o,r,c,l){return o.origin===location.origin&&o.pathname===location.pathname&&!f?await de({status:l,error:c,url:o,route:r}):await re(o)}function re(o){return location.href=o.href,new Promise(()=>{})}function pt(){let o;e.addEventListener("mousemove",d=>{const w=d.target;clearTimeout(o),o=setTimeout(()=>{l(w,2)},20)});function r(d){l(d.composedPath()[0],1)}e.addEventListener("mousedown",r),e.addEventListener("touchstart",r,{passive:!0});const c=new IntersectionObserver(d=>{for(const w of d)w.isIntersecting&&(ue(pe(new URL(w.target.href))),c.unobserve(w.target))},{threshold:0});function l(d,w){const _=xe(d,e);if(!_)return;const{url:b,external:y}=Ae(_,Z);if(y)return;const A=_e(_);if(!A.reload)if(w<=A.preload_data){const S=ae(b,!1);S&&Fe(S)}else w<=A.preload_code&&ue(pe(b))}function p(){c.disconnect();for(const d of e.querySelectorAll("a")){const{url:w,external:_}=Ae(d,Z);if(_)continue;const b=_e(d);b.reload||(b.preload_code===tt.viewport&&c.observe(d),b.preload_code===tt.eager&&ue(pe(w)))}}u.after_navigate.push(p),p()}return{after_navigate:o=>{Ne(()=>(u.after_navigate.push(o),()=>{const r=u.after_navigate.indexOf(o);u.after_navigate.splice(r,1)}))},before_navigate:o=>{Ne(()=>(u.before_navigate.push(o),()=>{const r=u.before_navigate.indexOf(o);u.before_navigate.splice(r,1)}))},disable_scroll_handling:()=>{(m||!g)&&(h=!1)},goto:(o,r={})=>ve(o,r,[]),invalidate:o=>{if(typeof o=="function")n.push(o);else{const{href:r}=new URL(o,location.href);n.push(c=>c.href===r)}return qe()},invalidateAll:()=>(I=!0,qe()),preload_data:async o=>{const r=new URL(o,Qe(document)),c=ae(r,!1);if(!c)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);await Fe(c)},preload_code:ue,apply_action:async o=>{if(o.type==="error"){const r=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await ze(t.branch.length,c,l.errors);if(p){const d=await ne({url:r,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:o.status??500,error:o.error,route:l});t=d.state,V.$set(d.props),me().then(Te)}}else if(o.type==="redirect")ve(o.location,{invalidateAll:!0},[]);else{const r={form:o.data,page:{...J,form:o.data,status:o.status}};V.$set(r),o.type==="success"&&me().then(Te)}},_start_router:()=>{var o;history.scrollRestoration="manual",addEventListener("beforeunload",r=>{var l;let c=!1;if(!E){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(d=>d(p))}c?(r.preventDefault(),r.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(Ue(P),at(lt,Y),$e(P),at(ct,oe))}),(o=navigator.connection)!=null&&o.saveData||pt(),e.addEventListener("click",r=>{if(r.button||r.which!==1||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.defaultPrevented)return;const c=xe(r.composedPath()[0],e);if(!c)return;const{url:l,external:p,target:d}=Ae(c,Z);if(!l)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const w=_e(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(p||w.reload){Je({url:l,type:"link"})||r.preventDefault(),E=!0;return}const[b,y]=l.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){O=!0,Ue(P),t.url=l,H.page.set({...J,url:l}),H.page.notify();return}he({url:l,scroll:w.noscroll?ie():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>r.preventDefault(),blocked:()=>r.preventDefault(),type:"link"})}),e.addEventListener("submit",r=>{if(r.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(r.target),l=r.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const d=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(et(d,Z))return;const w=r.target,{noscroll:_,reload:b}=_e(w);if(b)return;r.preventDefault(),r.stopPropagation();const y=new FormData(w),A=l==null?void 0:l.getAttribute("name");A&&y.append(A,(l==null?void 0:l.getAttribute("value"))??""),d.search=new URLSearchParams(y).toString(),he({url:d,scroll:_?ie():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async r=>{var c;if((c=r.state)!=null&&c[$]){if(r.state[$]===P)return;const l=Y[r.state[$]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){Y[P]=ie(),P=r.state[$],scrollTo(l.x,l.y);return}const p=r.state[$]-P;let d=!1;await he({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=r.state[$]},blocked:()=>{history.go(-p),d=!0},type:"popstate",delta:p}),d||Be(P)}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[$]:++P},"",location.href))});for(const r of document.querySelectorAll("link"))r.rel==="icon"&&(r.href=r.href);addEventListener("pageshow",r=>{r.persisted&&H.navigating.set(null)})},_hydrate:async({status:o=200,error:r,node_ids:c,params:l,route:p,data:d,form:w})=>{f=!0;const _=new URL(location.href);({params:l={},route:p={id:null}}=ae(_,!1)||{});let b;try{const y=c.map(async(A,S)=>{const j=d[S];return Ee({loader:be[A],url:_,params:l,route:p,parent:async()=>{const L={};for(let v=0;v<S;v+=1)Object.assign(L,(await y[v]).data);return L},server_data_node:ke(j)})});b=await ne({url:_,params:l,branch:await Promise.all(y),status:o,error:r,form:w,route:Oe.find(({id:A})=>A===p.id)??null})}catch(y){if(y instanceof nt){await re(new URL(y.location,location.href));return}b=await de({status:y instanceof le?y.status:500,error:await se(y,{url:_,params:l,route:p}),url:_,route:p})}Ke(b)}}}async function it(a,e){var u;const n=new URL(a);n.pathname=Vt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await ye(n.href),i=await s.json();if(!s.ok)throw new le(s.status,i);return(u=i.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=un(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function se(a,e){return a instanceof le?a.body:nn.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Te(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var i;s((i=getSelection())==null?void 0:i.removeAllRanges())})})}}async function gn({assets:a,env:e,hydrate:n,target:s,version:i}){Lt(a),At(i);const u=pn({target:s});It({client:u}),n?await u._hydrate(n):u.goto(location.href,{replaceState:!0}),u._start_router()}export{gn as start};

function w(){}const ht=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function Q(){return Object.create(null)}function v(t){t.forEach(Z)}function G(t){return typeof t=="function"}function Jt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Kt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function pt(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Qt(t){let e;return tt(t,n=>e=n)(),e}function Ut(t,e,n){t.$$.on_destroy.push(tt(e,n))}function Vt(t,e,n,i){if(t){const s=et(t,e,n,i);return t[0](s)}}function et(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Xt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Yt(t,e,n,i,s,l){if(s){const r=et(e,n,i,l);t.p(r,s)}}function Zt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function te(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ee(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ne(t){const e={};for(const n in t)e[n]=!0;return e}function ie(t,e,n){return t.set(n),e}const nt=typeof window<"u";let gt=nt?()=>window.performance.now():()=>Date.now(),W=nt?t=>requestAnimationFrame(t):w;const x=new Set;function it(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&W(it)}function yt(t){let e;return x.size===0&&W(it),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let P=!1;function $t(){P=!0}function bt(){P=!1}function xt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:xt(1,s,h=>e[n[h]].claim_order,a))-1;i[c]=n[_]+1;const u=_+1;n[u]=c,s=Math.max(u,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const _=a<l.length?l[a]:null;t.insertBefore(r[c],_)}}function vt(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=I("style");return Nt(st(t),e),e.sheet}function Nt(t,e){return vt(t.head||t,e),e.sheet}function Tt(t,e){if(P){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){P&&!n?Tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function se(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function re(){return J(" ")}function oe(){return J("")}function ce(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function le(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ae(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function K(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ue(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:K(t,i,e[i])}function fe(t,e){for(const n in e)K(t,n,e[n])}function _e(t,e){Object.keys(e).forEach(n=>{jt(t,n,e[n])})}function jt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:K(t,e,n)}function Ct(t){return Array.from(t.childNodes)}function ot(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,s=!1){ot(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function lt(t,e,n,i){return ct(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function de(t,e,n){return lt(t,e,n,I)}function he(t,e,n){return lt(t,e,n,rt)}function St(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function me(t){return St(t," ")}function U(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function pe(t,e){const n=U(t,"HTML_TAG_START",0),i=U(t,"HTML_TAG_END",n);if(n===i)return new V(void 0,e);ot(t);const s=t.splice(n,i-n+1);k(s[0]),k(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new V(l,e)}function ge(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ye(t,e){t.value=e??""}function $e(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function be(t,e,n){t.classList[n?"add":"remove"](e)}function at(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function xe(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Dt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=rt(n.nodeName):this.e=I(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)kt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(k)}}class V extends Dt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}function we(t,e){return new t(e)}const M=new Map;let H=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ht(t,e){const n={stylesheet:Et(e),rules:{}};return M.set(t,n),n}function X(t,e,n,i,s,l,r,o=0){const c=16.666/i;let a=`{
`;for(let g=0;g<=1;g+=c){const y=e+(n-e)*l(g);a+=g*100+`%{${r(y,1-y)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,u=`__svelte_${Mt(_)}_${o}`,h=st(t),{stylesheet:f,rules:d}=M.get(h)||Ht(h,t);d[u]||(d[u]=!0,f.insertRule(`@keyframes ${u} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${u} ${i}ms linear ${s}ms 1 both`,H+=1,u}function Ot(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),H-=s,H||Pt())}function Pt(){W(()=>{H||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&k(e)}),M.clear())})}let A;function T(t){A=t}function E(){if(!A)throw new Error("Function called outside component initialization");return A}function ve(t){E().$$.on_mount.push(t)}function Ee(t){E().$$.after_update.push(t)}function Ne(t){E().$$.on_destroy.push(t)}function Te(){const t=E();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=at(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function ke(t,e){return E().$$.context.set(t,e),e}function Ae(t){return E().$$.context.get(t)}function je(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],Y=[],S=[],z=[],ut=Promise.resolve();let F=!1;function ft(){F||(F=!0,ut.then(_t))}function Ce(){return ft(),ut}function O(t){S.push(t)}function Se(t){z.push(t)}const q=new Set;let $=0;function _t(){if($!==0)return;const t=A;do{try{for(;$<b.length;){const e=b[$];$++,T(e),Lt(e.$$)}}catch(e){throw b.length=0,$=0,e}for(T(null),b.length=0,$=0;Y.length;)Y.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];q.has(n)||(q.add(n),n())}S.length=0}while(b.length);for(;z.length;)z.pop()();F=!1,q.clear(),T(t)}function Lt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let N;function Rt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function B(t,e,n){t.dispatchEvent(at(`${e?"intro":"outro"}${n}`))}const D=new Set;let p;function De(){p={r:0,c:[],p}}function Me(){p.r||v(p.c),p=p.p}function qt(t,e){t&&t.i&&(D.delete(t),t.i(e))}function He(t,e,n,i){if(t&&t.o){if(D.has(t))return;D.add(t),p.c.push(()=>{D.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Bt={duration:0};function Oe(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,a=null;function _(){a&&Ot(t,a)}function u(f,d){const m=f.b-r;return d*=Math.abs(m),{a:r,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:g=ht,tick:y=w,css:L}=l||Bt,R={start:gt()+d,b:f};f||(R.group=p,p.r+=1),o||c?c=R:(L&&(_(),a=X(t,r,f,m,d,g,L)),f&&y(0,1),o=u(R,m),O(()=>B(t,f,"start")),yt(j=>{if(c&&j>c.start&&(o=u(c,m),c=null,B(t,o.b,"start"),L&&(_(),a=X(t,r,o.b,o.duration,0,g,l.css))),o){if(j>=o.end)y(r=o.b,1-r),B(t,o.b,"end"),c||(o.b?_():--o.group.r||v(o.group.c)),o=null;else if(j>=o.start){const dt=j-o.start;r=o.a+o.d*g(dt/o.duration),y(r,1-r)}}return!!(o||c)}))}return{run(f){G(l)?Rt().then(()=>{l=l(s),h(f)}):h(f)},end(){_(),o=c=null}}}const Pe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Le(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Re(t){return typeof t=="object"&&t!==null?t:{}}function qe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Be(t){t&&t.c()}function ze(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||O(()=>{const r=t.$$.on_mount.map(Z).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),l.forEach(O)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gt(t,e){t.$$.dirty[0]===-1&&(b.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Fe(t,e,n,i,s,l,r,o=[-1]){const c=A;T(t);const a=t.$$={fragment:null,ctx:[],props:l,update:w,not_equal:s,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Q(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(u,h,...f)=>{const d=f.length?f[0]:h;return a.ctx&&s(a.ctx[u],a.ctx[u]=d)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](d),_&&Gt(t,u)),h}):[],a.update(),_=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){$t();const u=Ct(e.target);a.fragment&&a.fragment.l(u),u.forEach(k)}else a.fragment&&a.fragment.c();e.intro&&qt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),bt(),_t()}T(c)}class Ge{$destroy(){Ft(this,1),this.$destroy=w}$on(e,n){if(!G(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Wt="";let It=Wt;function We(t){It=t}export{O as $,Ft as A,Ce as B,Wt as C,We as D,It as E,w as F,tt as G,v as H,G as I,Vt as J,mt as K,ue as L,be as M,Yt as N,Zt as O,Xt as P,Le as Q,ee as R,Ge as S,Ut as T,te as U,rt as V,he as W,fe as X,Tt as Y,ce as Z,je as _,re as a,qe as a0,Se as a1,Te as a2,ye as a3,Re as a4,ae as a5,Oe as a6,ne as a7,se as a8,Qt as a9,ie as aa,V as ab,pe as ac,Ne as ad,xe as ae,Pe as af,Ae as ag,ke as ah,le as ai,_e as aj,Kt as ak,At as b,me as c,Me as d,oe as e,qt as f,De as g,k as h,Fe as i,Ee as j,I as k,de as l,Ct as m,K as n,ve as o,$e as p,J as q,St as r,Jt as s,He as t,ge as u,Y as v,we as w,Be as x,ze as y,zt as z};

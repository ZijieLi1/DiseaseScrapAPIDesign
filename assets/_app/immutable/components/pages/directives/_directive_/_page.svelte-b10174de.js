import{S as D,i as C,s as P,k as q,x as u,a as v,l as N,m as z,y as d,c as w,h as $,b as p,z as g,Y as k,f as l,g as B,t as m,d as H,A as _,q as E,r as S,u as I,ae as L}from"../../../../chunks/paths-76b32af6.js";import{A as j,C as M,P as O}from"../../../../chunks/PreviousNextPage-22971146.js";import{j as T}from"../../../../chunks/model-47004776.js";import{A as Y}from"../../../../chunks/ArgsList-69bc83d4.js";function F(o){let t=o[0].name+"",r;return{c(){r=E(t)},l(a){r=S(a,t)},m(a,i){p(a,r,i)},p(a,i){i&1&&t!==(t=a[0].name+"")&&I(r,t)},d(a){a&&$(r)}}}function b(o){let t,r,a,i;return t=new j({props:{id:"arguments",depth:2,$$slots:{default:[G]},$$scope:{ctx:o}}}),a=new Y({props:{data:o[1]}}),{c(){u(t.$$.fragment),r=v(),u(a.$$.fragment)},l(n){d(t.$$.fragment,n),r=w(n),d(a.$$.fragment,n)},m(n,f){g(t,n,f),p(n,r,f),g(a,n,f),i=!0},p(n,f){const e={};f&4&&(e.$$scope={dirty:f,ctx:n}),t.$set(e);const s={};f&2&&(s.data=n[1]),a.$set(s)},i(n){i||(l(t.$$.fragment,n),l(a.$$.fragment,n),i=!0)},o(n){m(t.$$.fragment,n),m(a.$$.fragment,n),i=!1},d(n){_(t,n),n&&$(r),_(a,n)}}}function G(o){let t;return{c(){t=E("Arguments")},l(r){t=S(r,"Arguments")},m(r,a){p(r,t,a)},d(r){r&&$(t)}}}function J(o){let t,r,a,i,n,f;r=new j({props:{id:"title",depth:1,$$slots:{default:[F]},$$scope:{ctx:o}}}),i=new M({props:{source:o[0].description}});let e=o[1].length>0&&b(o);return{c(){t=q("section"),u(r.$$.fragment),a=v(),u(i.$$.fragment),n=v(),e&&e.c()},l(s){t=N(s,"SECTION",{});var c=z(t);d(r.$$.fragment,c),a=w(c),d(i.$$.fragment,c),n=w(c),e&&e.l(c),c.forEach($)},m(s,c){p(s,t,c),g(r,t,null),k(t,a),g(i,t,null),k(t,n),e&&e.m(t,null),f=!0},p(s,[c]){const h={};c&5&&(h.$$scope={dirty:c,ctx:s}),r.$set(h);const A={};c&1&&(A.source=s[0].description),i.$set(A),s[1].length>0?e?(e.p(s,c),c&2&&l(e,1)):(e=b(s),e.c(),l(e,1),e.m(t,null)):e&&(B(),m(e,1,1,()=>{e=null}),H())},i(s){f||(l(r.$$.fragment,s),l(i.$$.fragment,s),l(e),f=!0)},o(s){m(r.$$.fragment,s),m(i.$$.fragment,s),m(e),f=!1},d(s){s&&$(t),_(r),_(i),e&&e.d()}}}function K(o,t,r){let{directive:a}=t,i;return o.$$set=n=>{"directive"in n&&r(0,a=n.directive)},o.$$.update=()=>{o.$$.dirty&1&&r(1,i=T(a))},[a,i]}class Q extends D{constructor(t){super(),C(this,t,K,J,P,{directive:0})}}function R(o){let t,r,a,i,n,f;return document.title=t="Directive - "+o[0].directive.name,a=new Q({props:{directive:o[0].directive}}),n=new O({props:{page:o[0].page}}),{c(){r=v(),u(a.$$.fragment),i=v(),u(n.$$.fragment)},l(e){L("svelte-fycjkl",document.head).forEach($),r=w(e),d(a.$$.fragment,e),i=w(e),d(n.$$.fragment,e)},m(e,s){p(e,r,s),g(a,e,s),p(e,i,s),g(n,e,s),f=!0},p(e,[s]){(!f||s&1)&&t!==(t="Directive - "+e[0].directive.name)&&(document.title=t);const c={};s&1&&(c.directive=e[0].directive),a.$set(c);const h={};s&1&&(h.page=e[0].page),n.$set(h)},i(e){f||(l(a.$$.fragment,e),l(n.$$.fragment,e),f=!0)},o(e){m(a.$$.fragment,e),m(n.$$.fragment,e),f=!1},d(e){e&&$(r),_(a,e),e&&$(i),_(n,e)}}}function U(o,t,r){let{data:a}=t;return o.$$set=i=>{"data"in i&&r(0,a=i.data)},[a]}class y extends D{constructor(t){super(),C(this,t,U,R,P,{data:0})}}export{y as default};

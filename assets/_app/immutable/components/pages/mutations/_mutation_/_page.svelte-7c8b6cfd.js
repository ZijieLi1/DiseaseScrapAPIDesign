import{S as P,i as M,s as T,a as u,x as d,ae as w,h as l,c,y as $,b as _,z as g,f as h,t as v,A as y}from"../../../../chunks/paths-76b32af6.js";import{F as x,Q as A}from"../../../../chunks/FieldDetails-eff694d2.js";import{P as F}from"../../../../chunks/PreviousNextPage-22971146.js";function N(o){let n,r,t,i,s,f;return document.title=n="Mutation - "+o[0].field.name,t=new x({props:{field:o[0].field,type:A.MUTATION}}),s=new F({props:{page:o[0].page}}),{c(){r=u(),d(t.$$.fragment),i=u(),d(s.$$.fragment)},l(e){w("svelte-1ha51ns",document.head).forEach(l),r=c(e),$(t.$$.fragment,e),i=c(e),$(s.$$.fragment,e)},m(e,a){_(e,r,a),g(t,e,a),_(e,i,a),g(s,e,a),f=!0},p(e,[a]){(!f||a&1)&&n!==(n="Mutation - "+e[0].field.name)&&(document.title=n);const m={};a&1&&(m.field=e[0].field),t.$set(m);const p={};a&1&&(p.page=e[0].page),s.$set(p)},i(e){f||(h(t.$$.fragment,e),h(s.$$.fragment,e),f=!0)},o(e){v(t.$$.fragment,e),v(s.$$.fragment,e),f=!1},d(e){e&&l(r),y(t,e),e&&l(i),y(s,e)}}}function Q(o,n,r){let{data:t}=n;return o.$$set=i=>{"data"in i&&r(0,t=i.data)},[t]}class z extends P{constructor(n){super(),M(this,n,Q,N,T,{data:0})}}export{z as default};

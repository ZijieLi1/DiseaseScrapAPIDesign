import{f as a,B as p,C as n}from"./model-ce192aa6.js";import{f}from"./pages-09b801f4.js";import{e as y}from"./index-b40a4f3c.js";const g=!a(),m=({params:t,url:r})=>{const e=p(t.type),s=n(e),o=f(r.pathname);if(!e||!o)throw y(404,`Type ${t.type} not found.`);return{type:e,usages:s,page:o}},d=Object.freeze(Object.defineProperty({__proto__:null,load:m,prerender:g},Symbol.toStringTag,{value:"Module"}));export{d as _,m as l,g as p};

import{u as d}from"./fetch.3af7c13b.js";import{f,r as n,o as r,c as u,g as x,h,w as g,a as t,b as C,t as c,d as l,i as b,F as w}from"./entry.23ae00fc.js";const $={href:"#",class:"hover:opacity-75"},B={class:"bg-white flex flex-col justify-start p-6"},V={href:"#",class:"text-black text-sm font-bold uppercase pb-4"},F={href:"#",class:"text-3xl font-bold hover:text-gray-700 pb-4"},L={href:"#",class:"text-sm pb-3"},N={href:"#",class:"font-semibold hover:text-gray-800"},j={href:"#",class:"pb-6"},T=t("a",{href:"#",class:"uppercase text-gray-800 hover:text-black"},[l("Continue Reading "),t("i",{class:"fas fa-arrow-right"})],-1),z={__name:"Content",async setup(v){let e,o;const{data:_}=([e,o]=f(()=>d("https://fakestoreapi.com/products?limit=1","$vuGiwWLQmT")),e=await e,o(),e),a=_._rawValue;return console.log(a),(y,k)=>{const i=n("v-img"),p=n("v-card");return r(!0),u(w,null,x(b(a),(s,m)=>(r(),h(p,{key:m,class:"flex flex-col shadow my-4"},{default:g(()=>[t("a",$,[C(i,{class:"max-w-full w-full mx-auto h-96",src:s.image,alt:"alt title",cover:""},null,8,["src"])]),t("div",B,[t("a",V,c(s.category),1),t("a",F,c(s.title),1),t("p",L,[l(" By "),t("a",N,c(s.rating.count),1),l(", Published on "+c(s.id),1)]),t("a",j,c(s.description),1),T])]),_:2},1024))),128)}}},Q=z,A=t("p",{class:"text-xl font-semibold pb-5"},"Instagram",-1),D={class:"grid grid-cols-3 p-2 gap-2"},E=t("a",{href:"#",class:"w-full bg-black text-white font-bold text-sm uppercase rounded hover:bg-black flex items-center justify-center px-2 py-3 mt-6"},[t("i",{class:"fab fa-instagram mr-2"}),l(" Follow @dgrzyb ")],-1),G={__name:"instagramComponent",async setup(v){let e,o;const{data:_}=([e,o]=f(()=>d("https://fakestoreapi.com/products?limit=9","$f60b26hLlf")),e=await e,o(),e),a=_._rawValue;return console.log(a),(y,k)=>{const i=n("v-img"),p=n("v-card");return r(),h(p,{class:"w-full bg-white shadow flex flex-col my-4 p-6"},{default:g(()=>[A,t("div",D,[(r(!0),u(w,null,x(b(a),(s,m)=>(r(),h(i,{key:m,height:"100",width:"100",class:"hover:opacity-75",src:s.image},null,8,["src"]))),128))]),E]),_:1})}}},R=G;export{Q as _,R as a};

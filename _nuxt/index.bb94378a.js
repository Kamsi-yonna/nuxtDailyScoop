import{_ as p}from"./nuxt-link.43fbb79e.js";import{o,c,a as t,t as i,b as a,w as f,F as r,f as x,g as h,i as b,j as g}from"./entry.2ce0828f.js";import{_ as w,a as y}from"./instagramComponent.d804ba49.js";import{u as v}from"./fetch.045eed8f.js";const k={class:"text-center"},$=["src"],C={class:"font-bold text-gray-500 m-4 truncate"},j=t("p",{class:"btn my-4"},"View Details",-1),N={__name:"productCard",props:["product"],setup(s){return(e,n)=>{const l=p;return o(),c(r,null,[t("h2",null,"I am the product card for "+i(e.id),1),t("h2",null,"Its called "+i(s.product.title),1),t("div",k,[t("img",{src:s.product.image},null,8,$),t("p",C,i(s.product.title),1),a(l,{to:`/selected/${s.product.id}`},{default:f(()=>[j]),_:1},8,["to"])])],64)}}},V=N,B={class:"grid grid-cols-4 gap-3"},F={class:"container mx-auto flex flex-wrap py-6"},I={class:"w-full md:w-2/3 flex flex-col items-center px-3"},S=g('<div class="flex items-center py-8"><a href="#" class="h-10 w-10 bg-black hover:bg-black font-semibold text-white text-sm flex items-center justify-center">1</a><a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:bg-black hover:text-white text-sm flex items-center justify-center">2</a><a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i class="fas fa-arrow-right ml-2"></i></a></div>',1),A={class:"w-full md:w-1/3 flex flex-col items-center px-3"},D=t("div",{class:"w-full bg-white shadow flex flex-col my-4 p-6"},[t("p",{class:"text-xl font-semibold pb-5"},"About Us"),t("p",{class:"pb-2"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst. "),t("a",{href:"#",class:"w-full bg-black text-white font-bold text-sm uppercase rounded hover:bg-black flex items-center justify-center px-2 py-3 mt-4"}," Get to know us ")],-1),R={__name:"index",async setup(s){let e,n;const{data:l}=([e,n]=x(()=>v("https://fakestoreapi.com/products?limit=4 ","$GQSNXbCdR0")),e=await e,n(),e);return(G,L)=>{const d=V,u=w,m=y;return o(),c(r,null,[t("div",B,[(o(!0),c(r,null,h(b(l),_=>(o(),c("div",null,[a(d,{product:_},null,8,["product"])]))),256))]),t("div",F,[t("section",I,[a(u),S]),t("aside",A,[D,a(m)])])],64)}}};export{R as default};

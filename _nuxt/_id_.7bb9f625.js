import{r as D,l as R,m as $,n as A,q as H,s as L,j as v,v as T,x as E,y as V,z as W,A as j,g as O,o as S,i as z,w as I,a as m,c as F,F as K,h as q,d as J,b as G,k as X,B as Q}from"./entry.85f98078.js";const Y=()=>null;function Z(...n){const r=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(r);let[s,t,e={}]=n;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??Y,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const a=L(),c=()=>a.isHydrating?a.payload.data[s]:a.static.data[s],l=()=>c()!==void 0;a._asyncData[s]||(a._asyncData[s]={data:D(c()??e.default()),pending:D(!l()),error:R(a.payload._errors,s),status:D("idle")});const i={...a._asyncData[s]};i.refresh=i.execute=(o={})=>{if(a._asyncDataPromises[s]){if(o.dedupe===!1)return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if((o._initial||a.isHydrating&&o._initial!==!1)&&l())return c();i.pending.value=!0,i.status.value="pending";const y=new Promise((u,d)=>{try{u(t(a))}catch(b){d(b)}}).then(u=>{if(y.cancelled)return a._asyncDataPromises[s];let d=u;e.transform&&(d=e.transform(u)),e.pick&&(d=tt(d,e.pick)),i.data.value=d,i.error.value=null,i.status.value="success"}).catch(u=>{if(y.cancelled)return a._asyncDataPromises[s];i.error.value=u,i.data.value=v(e.default()),i.status.value="error"}).finally(()=>{y.cancelled||(i.pending.value=!1,a.payload.data[s]=i.data.value,i.error.value&&(a.payload._errors[s]=T(i.error.value)),delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=y,a._asyncDataPromises[s]};const f=()=>i.refresh({_initial:!0}),h=e.server!==!1&&a.payload.serverRendered;{const o=E();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const u=o._nuxtOnBeforeMountCbs;o&&($(()=>{u.forEach(d=>{d()}),u.splice(0,u.length)}),A(()=>u.splice(0,u.length)))}h&&a.isHydrating&&l()?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):o&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?o._nuxtOnBeforeMountCbs.push(f):e.immediate&&f(),e.watch&&H(e.watch,()=>i.refresh());const y=a.hook("app:data:refresh",u=>{if(!u||u.includes(s))return i.refresh()});o&&A(y)}const p=Promise.resolve(a._asyncDataPromises[s]).then(()=>i);return Object.assign(p,i),p}function tt(n,r){const s={};for(const t of r)s[t]=n[t];return s}const et={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function st(n,r={}){r={...et,...r};const s=N(r);return s.dispatch(n),s.toString()}function N(n){const r=[];let s=[];const t=e=>{r.push(e)};return{toString(){return r.join("")},getContext(){return s},dispatch(e){return n.replacer&&(e=n.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){if(e&&typeof e.toJSON=="function")return this._object(e.toJSON());const a=/\[object (.*)]/i,c=Object.prototype.toString.call(e),l=a.exec(c),i=l?l[1].toLowerCase():"unknown:["+c.toLowerCase()+"]";let f=null;if((f=s.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+f+"]");if(s.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this["_"+i]?this["_"+i](e):n.ignoreUnknown||this._unkown(e,i);else{let h=Object.keys(e);n.unorderedObjects&&(h=h.sort()),n.respectType!==!1&&!P(e)&&h.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(h=h.filter(function(p){return!n.excludeKeys(p)})),t("object:"+h.length+":");for(const p of h)this.dispatch(p),t(":"),n.excludeValues||this.dispatch(e[p]),t(",")}},_array(e,a){if(a=typeof a<"u"?a:n.unorderedArrays!==!1,t("array:"+e.length+":"),!a||e.length<=1){for(const i of e)this.dispatch(i);return}const c=[],l=e.map(i=>{const f=N(n);return f.dispatch(i),c.push(f.getContext()),f.toString()});return s=[...s,...c],l.sort(),this._array(l,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_unkown(e,a){if(t(a),!!e&&(t(":"),e&&typeof e.entries=="function"))return this._array(Array.from(e.entries()),!0)},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),P(e)?this.dispatch("[native]"):this.dispatch(e.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),n.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const a=[...e];return this._array(a,n.unorderedSets!==!1)},_set(e){t("set:");const a=[...e];return this._array(a,n.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(n.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function P(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class k{constructor(r,s){r=this.words=r||[],this.sigBytes=s!==void 0?s:r.length*4}toString(r){return(r||rt).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let s=0;s<r.sigBytes;s++){const t=r.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<r.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=r.words[s>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new k([...this.words])}}const rt={stringify(n){const r=[];for(let s=0;s<n.sigBytes;s++){const t=n.words[s>>>2]>>>24-s%4*8&255;r.push((t>>>4).toString(16),(t&15).toString(16))}return r.join("")}},nt={stringify(n){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<n.sigBytes;t+=3){const e=n.words[t>>>2]>>>24-t%4*8&255,a=n.words[t+1>>>2]>>>24-(t+1)%4*8&255,c=n.words[t+2>>>2]>>>24-(t+2)%4*8&255,l=e<<16|a<<8|c;for(let i=0;i<4&&t*8+i*6<n.sigBytes*8;i++)s.push(r.charAt(l>>>6*(3-i)&63))}return s.join("")}},at={parse(n){const r=n.length,s=[];for(let t=0;t<r;t++)s[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new k(s,r)}},it={parse(n){return at.parse(unescape(encodeURIComponent(n)))}};class ot{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new k,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=it.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,s){}_process(r){let s,t=this._data.sigBytes/(this.blockSize*4);r?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,a=Math.min(e*4,this._data.sigBytes);if(e){for(let c=0;c<e;c+=this.blockSize)this._doProcessBlock(this._data.words,c);s=this._data.words.splice(0,e),this._data.sigBytes-=a}return new k(s,a)}}class ct extends ot{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const lt=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ut=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],x=[];class ft extends ct{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new k([...lt])}_doProcessBlock(r,s){const t=this._hash.words;let e=t[0],a=t[1],c=t[2],l=t[3],i=t[4],f=t[5],h=t[6],p=t[7];for(let o=0;o<64;o++){if(o<16)x[o]=r[s+o]|0;else{const B=x[o-15],w=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,g=x[o-2],M=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;x[o]=w+x[o-7]+M+x[o-16]}const y=i&f^~i&h,u=e&a^e&c^a&c,d=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),b=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),C=p+b+y+ut[o]+x[o],_=d+u;p=h,h=f,f=i,i=l+C|0,l=c,c=a,a=e,e=C+_|0}t[0]=t[0]+e|0,t[1]=t[1]+a|0,t[2]=t[2]+c|0,t[3]=t[3]+l|0,t[4]=t[4]+i|0,t[5]=t[5]+f|0,t[6]=t[6]+h|0,t[7]=t[7]+p|0}finalize(r){super.finalize(r);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ht(n){return new ft().finalize(n).toString(nt)}function pt(n,r={}){const s=typeof n=="string"?n:st(n,r);return ht(s).slice(0,10)}function U(n,r,s){const[t={},e]=typeof r=="string"?[{},r]:[r,s],a=t.key||pt([e,v(t.baseURL),typeof n=="string"?n:"",v(t.params||t.query)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const c=a===e?"$f"+a:a,l=V(()=>{let w=n;return typeof w=="function"&&(w=w()),v(w)});if(!t.baseURL&&typeof l.value=="string"&&l.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:i,lazy:f,default:h,transform:p,pick:o,watch:y,immediate:u,...d}=t,b=W({...d,cache:typeof t.cache=="boolean"?void 0:t.cache}),C={server:i,lazy:f,default:h,transform:p,pick:o,immediate:u,watch:y===!1?[]:[b,l,...y||[]]};let _;return Z(c,()=>{var g;return(g=_==null?void 0:_.abort)==null||g.call(_),_=typeof AbortController<"u"?new AbortController:{},typeof l.value=="string"&&l.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(l.value,{signal:_.signal,...b})},C)}const dt=m("p",{class:"text-xl font-semibold pb-5"},"Instagram",-1),yt={class:"grid grid-cols-3 p-2 gap-2"},_t=m("a",{href:"#",class:"w-full bg-black text-white font-bold text-sm uppercase rounded hover:bg-black flex items-center justify-center px-2 py-3 mt-6"},[m("i",{class:"fab fa-instagram mr-2"}),J(" Follow @dgrzyb ")],-1),mt={__name:"instagramComponent",async setup(n){let r,s;const{data:t}=([r,s]=j(()=>U("https://fakestoreapi.com/products?limit=9","$f60b26hLlf")),r=await r,s(),r),e=t._rawValue;return(a,c)=>{const l=O("v-img"),i=O("v-card");return S(),z(i,{class:"w-full bg-white shadow flex flex-col my-4 p-6"},{default:I(()=>[dt,m("div",yt,[(S(!0),F(K,null,q(v(e),(f,h)=>(S(),z(l,{key:h,height:"100",width:"100",class:"hover:opacity-75",src:f.image},null,8,["src"]))),128))]),_t]),_:1})}}},gt=mt,wt={class:"container mx-auto flex flex-wrap py-6"},xt=X('<section class="w-full md:w-2/3 flex flex-col items-center px-3"><div class="flex items-center py-8"><a href="#" class="h-10 w-10 bg-black hover:bg-black font-semibold text-white text-sm flex items-center justify-center">1</a><a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:bg-black hover:text-white text-sm flex items-center justify-center">2</a><a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i class="fas fa-arrow-right ml-2"></i></a></div></section>',1),bt={class:"w-full md:w-1/3 flex flex-col items-center px-3"},Bt=m("div",{class:"w-full bg-white shadow flex flex-col my-4 p-6"},[m("p",{class:"text-xl font-semibold pb-5"},"About Us"),m("p",{class:"pb-2"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst. "),m("a",{href:"#",class:"w-full bg-black text-white font-bold text-sm uppercase rounded hover:bg-black flex items-center justify-center px-2 py-3 mt-4"}," Get to know us ")],-1),vt={__name:"selectedContent",props:["product"],setup(n){return(r,s)=>{const t=gt;return S(),F("div",wt,[xt,m("aside",bt,[Bt,G(t)])])}}},kt=vt,Ct={__name:"[id]",async setup(n){let r,s;const{id:t}=Q().params,e="https://fakestoreapi.com/products/"+t,{data:a}=([r,s]=j(()=>U(e,"$cCnXA1GM1h")),r=await r,s(),r);return(c,l)=>{const i=kt;return S(),z(i,{product:v(a)},null,8,["product"])}}};export{Ct as default};
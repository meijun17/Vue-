(function(n){function e(e){for(var r,u,a=e[0],i=e[1],d=e[2],b=0,p=[];b<a.length;b++)u=a[b],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var n,e=0;e<c.length;e++){for(var t=c[e],r=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},o={app:0},c=[];function u(n){return a.p+"js/"+({}[n]||n)+"."+{"chunk-041fe10c":"06b49199","chunk-2d210bbf":"5b638735","chunk-41d0e50d":"233c8b03","chunk-5515d5b5":"b4b628cd","chunk-5dd53b65":"ee7893c7","chunk-739c3178":"2286b89d","chunk-883abc04":"842e93f8","chunk-9964816e":"dabdf73f"}[n]+".js"}function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(n){var e=[],t=o[n];if(0!==t)if(t)e.push(t[2]);else{var r=new Promise((function(e,r){t=o[n]=[e,r]}));e.push(t[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=u(n);var d=new Error;c=function(e){i.onerror=i.onload=null,clearTimeout(b);var t=o[n];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;d.message="Loading chunk "+n+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}o[n]=void 0}};var b=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(e)},a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/Vue/",a.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var b=0;b<i.length;b++)e(i[b]);var l=d;c.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("d3b7"),t("159b"),t("b64b");var r=t("7a23"),o=(t("7b17"),t("bc3a")),c=t.n(o),u=t("130e"),a=t("8a14"),i=(t("fe26"),t("7bb1")),d=t("3aa8"),b=t("cbdf"),l=t("9457");function p(n,e){var t=Object(r["G"])("router-view");return Object(r["y"])(),Object(r["e"])(t)}t("c02b");var f=t("6b0d"),h=t.n(f);const s={},m=h()(s,[["render",p]]);var v=m,O=(t("3ca3"),t("ddb0"),t("6c02")),j={class:"home"},y=Object(r["h"])("h2",null,"首頁",-1),g=[y];function k(n,e,t,o,c,u){return Object(r["y"])(),Object(r["g"])("div",j,g)}var w={name:"Home"};const P=h()(w,[["render",k]]);var _=P,x=[{path:"/",component:function(){return t.e("chunk-41d0e50d").then(t.bind(null,"6c7d"))},children:[{path:"",name:"Home",component:_},{path:"products",component:function(){return t.e("chunk-5515d5b5").then(t.bind(null,"fd15"))}},{path:"product/:id",component:function(){return t.e("chunk-739c3178").then(t.bind(null,"7901"))}},{path:"cart",component:function(){return t.e("chunk-041fe10c").then(t.bind(null,"cc55"))}}]},{path:"/login",component:function(){return t.e("chunk-883abc04").then(t.bind(null,"a55b"))}},{path:"/admin",component:function(){return t.e("chunk-9964816e").then(t.bind(null,"6c12"))},children:[{path:"products",component:function(){return t.e("chunk-5dd53b65").then(t.bind(null,"aa93"))}},{path:"coupon",component:function(){return t.e("chunk-2d210bbf").then(t.bind(null,"b8c6"))}}]}],M=Object(O["a"])({history:Object(O["b"])(),routes:x,linkActiveClass:"active"}),T=M;Object.keys(d["a"]).forEach((function(n){Object(i["e"])(n,d["a"][n])})),Object(i["d"])({generateMessage:Object(b["a"])({zh_TW:l}),validateOnInput:!0}),Object(b["b"])("zh_TW");var E=Object(r["d"])(v);E.use(T),E.use(u["a"],c.a),E.component("Loading",a["a"]),E.component("Form",i["c"]),E.component("Field",i["b"]),E.component("ErrorMessage",i["a"]),E.mount("#app")},c02b:function(n,e,t){"use strict";t("f1c8")},f1c8:function(n,e,t){}});
//# sourceMappingURL=app.8309349f.js.map
if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const f=e=>s(e,r),n={module:{uri:r},exports:c,require:f};i[r]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(a(...e),c)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about/index.html",revision:"16db8111add42d9cb8d6c6c9fd5831f6"},{url:"archives/2023/07/index.html",revision:"3b645536260a666c3de86f6ef1df7b84"},{url:"archives/2023/index.html",revision:"1fe4f88125de1af075200255d1f340a7"},{url:"archives/index.html",revision:"a7a294006fa56971ca551b1f47486b3d"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_codeva-JvLPdhfRSn.html",revision:"d8aae47f02bc4978553b038e88800b12"},{url:"categories/index.html",revision:"c8cfc270353738d997b9840f1f94b0fc"},{url:"categories/随笔/index.html",revision:"c9cc417792ce0b588b754d1ade008c22"},{url:"css/custom.css",revision:"730b00487bb1614e545095c0d20b390b"},{url:"css/font.css",revision:"62acaad5e18c817abab6364c740445d5"},{url:"css/index.css",revision:"ccb4fb22cc32ca732b31c5172d3ed1d4"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"googlefae8d0dfe55de7be.html",revision:"9ded4d61ef3971865e40a26a27d8021c"},{url:"image/alipay.jpg",revision:"904a5e96646904b62c7698d10351cd4c"},{url:"image/logo.png",revision:"738ceef4d03912648d5876d20b411857"},{url:"image/wechat.png",revision:"254375c6fc0af719687f56b27d9aa9fc"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"decb08174d94dc6bbb544a869a1fc883"},{url:"js/calendar.js",revision:"8b89e8ba2aeaab057ba56000d821889f"},{url:"js/foot.js",revision:"1da615dd695041968ce99faa474824d2"},{url:"js/jquery.js",revision:"f9bdfd807c7561b5a4eb97516f348321"},{url:"js/jquery.ripples.js",revision:"37db2c91747a68b391adeb76e1786f76"},{url:"js/languages.js",revision:"25d8e541ec9d26d671026f1264574eba"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/nav.js",revision:"833d2d7c582cfdd783aa641442b382e7"},{url:"js/ripples.js",revision:"517af910a11b06129cf1e708c1495f27"},{url:"js/sakura.js",revision:"bcedfeb9a8c453a65eb070c0f9b2574b"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/universe.js",revision:"e8665118eff225815f6eb05f236a12c2"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"js/Valine.min.js",revision:"f97cfb7435616d73309b9a5717a08aa7"},{url:"link/index.html",revision:"bf949de44d05f98a4b977d05506f20e4"},{url:"posts/4a17b156/index.html",revision:"e1599a3a419043d6fbf7eb9e8b1935d8"},{url:"posts/8be4b112/index.html",revision:"c4aab6d46045a0973d1442bdbf31bfe0"},{url:"tags/blog/index.html",revision:"efb8a8867f001c91845716d6aaa38782"},{url:"tags/index.html",revision:"5f57fcd601a20d4bbcd635150a6d602a"},{url:"tags/博客搭建/index.html",revision:"108430dbfa23047e2209afbac9f5348c"}],{})}));
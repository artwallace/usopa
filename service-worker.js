if(!self.define){const n=n=>{"require"!==n&&(n+=".js");let e=Promise.resolve();return i[n]||(e=new Promise((async e=>{if("document"in self){const i=document.createElement("script");i.src=n,document.head.appendChild(i),i.onload=e}else importScripts(n),e()}))),e.then((()=>{if(!i[n])throw new Error(`Module ${n} didn’t register its module`);return i[n]}))},e=(e,i)=>{Promise.all(e.map(n)).then((n=>i(1===n.length?n[0]:n)))},i={require:Promise.resolve(e)};self.define=(e,s,c)=>{i[e]||(i[e]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+e.slice(1)};return Promise.all(s.map((e=>{switch(e){case"exports":return i;case"module":return r;default:return n(e)}}))).then((n=>{const e=c(...n);return i.default||(i.default=e),i}))})))}}define("./service-worker.js",["./workbox-5e7eaa45"],(function(n){"use strict";n.setCacheNameDetails({prefix:"usopa"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"css/906.0b546d88.css",revision:null},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.985acc40.css",revision:null},{url:"favicon.ico",revision:"0e060f8b55085cf4f24fcac040c8dcb3"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.7d512ef7.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.49dcbc98.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"e15a9a1e03a8c96c6b9458d01a17f197"},{url:"icons/apple-icon-152x152.png",revision:"115d744ecf81bbaa292c270885df0eb9"},{url:"icons/apple-icon-167x167.png",revision:"eac8ee1d3db03830df46c83a06b7f62f"},{url:"icons/apple-icon-180x180.png",revision:"d4d8afb7367b799cdd9446c3cdc4ba9c"},{url:"icons/apple-launch-1125x2436.png",revision:"87b7f73b05717ffbe5ad666a5abf16af"},{url:"icons/apple-launch-1170x2532.png",revision:"701fd5ad692b33516d3a6c572e0e5217"},{url:"icons/apple-launch-1242x2208.png",revision:"40a2b4a356cdd5f045822a74ad365012"},{url:"icons/apple-launch-1242x2688.png",revision:"f6a2dc05716b36e760b61b08c6c0a850"},{url:"icons/apple-launch-1284x2778.png",revision:"6d1f3d16ee323ee3c4d37a2d97c516d1"},{url:"icons/apple-launch-1536x2048.png",revision:"0e20cb3ac996cef5292ab312e147aa61"},{url:"icons/apple-launch-1620x2160.png",revision:"663209b065e874cd24fba7533819da64"},{url:"icons/apple-launch-1668x2224.png",revision:"7cdbf6b793d472453331e42c0a95c2a8"},{url:"icons/apple-launch-1668x2388.png",revision:"3ea990de167f576ef51531c418d09163"},{url:"icons/apple-launch-2048x2732.png",revision:"02cb75bb382562b402c8cbefd1a547ab"},{url:"icons/apple-launch-750x1334.png",revision:"9514bf43273a1cb84a81e9f9f68b6211"},{url:"icons/apple-launch-828x1792.png",revision:"c8d4372cfd4ab001616157db617f60b5"},{url:"icons/favicon-128x128.png",revision:"da36d2bcd70906a377f61ba4001307f7"},{url:"icons/favicon-16x16.png",revision:"70b5cc67d78d8cccee50f3d416e927f5"},{url:"icons/favicon-32x32.png",revision:"2fcdbb28063c9fb03a226a65ad5831c2"},{url:"icons/favicon-96x96.png",revision:"fc15ded7a8676332032e1281f51e6e94"},{url:"icons/icon-128x128.png",revision:"da36d2bcd70906a377f61ba4001307f7"},{url:"icons/icon-192x192.png",revision:"80d5b4ae01dbf00670bbc3a2d93b8b9c"},{url:"icons/icon-256x256.png",revision:"a4e1f9df7a50ae8f7df69c5e61bdd249"},{url:"icons/icon-384x384.png",revision:"b2cc9a1a048448a3d3d8721d62fff49e"},{url:"icons/icon-512x512.png",revision:"5ccf0b06cf8b304a4c342de730e8fa7e"},{url:"icons/ms-icon-144x144.png",revision:"6f0fb5fb22a44429985949de67e5e392"},{url:"icons/safari-pinned-tab.svg",revision:"cdd65a1d0e7394e79fd824ab903f84ce"},{url:"images/units/cartel-soldato-enforcer-alfa.jpg",revision:"8a547024313573aab42ee9fd0479db99"},{url:"images/units/militia-survialists-rifleman-a4.jpg",revision:"d3ef5743996db953cf7ab35fc92f04f0"},{url:"index.html",revision:"69e5af1a83631341b124a3f3c2d71307"},{url:"js/16.f449ec13.js",revision:null},{url:"js/193.b522e71d.js",revision:null},{url:"js/308.800b17b1.js",revision:null},{url:"js/45.1441c2bb.js",revision:null},{url:"js/705.733c7eb2.js",revision:null},{url:"js/906.6999738d.js",revision:null},{url:"js/app.00ed80a4.js",revision:null},{url:"js/vendor.b0d8d2b8.js",revision:null},{url:"manifest.json",revision:"7efb80762fa801f04c9d23817535bad5"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));

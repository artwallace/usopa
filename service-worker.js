if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return i[e]||(n=new Promise((async n=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},n=(n,i)=>{Promise.all(n.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(n)};self.define=(n,s,r)=>{i[n]||(i[n]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+n.slice(1)};return Promise.all(s.map((n=>{switch(n){case"exports":return i;case"module":return c;default:return e(n)}}))).then((e=>{const n=r(...e);return i.default||(i.default=n),i}))})))}}define("./service-worker.js",["./workbox-85fe00c4"],(function(e){"use strict";e.setCacheNameDetails({prefix:"usopa"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/483.aea75a5a.css",revision:null},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.985acc40.css",revision:null},{url:"favicon.ico",revision:"6e5c53c2f096fe9314c82e81084fefa4"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.7d512ef7.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.49dcbc98.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"b3d03fee295c5891f389997562a1439a"},{url:"icons/apple-icon-152x152.png",revision:"920c4eb4ebd250d7a2edab52e1955284"},{url:"icons/apple-icon-167x167.png",revision:"8d105c3ee42ccbbd9ca650a0a79cc9bc"},{url:"icons/apple-icon-180x180.png",revision:"3aac77453981cf135d3d283a72e53ea1"},{url:"icons/apple-launch-1125x2436.png",revision:"adcbf446993dbc037237a62f59e1f565"},{url:"icons/apple-launch-1170x2532.png",revision:"8567fde94962e5e3471b0067178f4ed5"},{url:"icons/apple-launch-1242x2208.png",revision:"6ecfb01a46650af7503a41f664544d34"},{url:"icons/apple-launch-1242x2688.png",revision:"7f6783139a037f817e20518d87ed8f31"},{url:"icons/apple-launch-1284x2778.png",revision:"6db460d9c7d9ed833599b96f870b720f"},{url:"icons/apple-launch-1536x2048.png",revision:"05e6b656616dadf5174d1d1a7d22a987"},{url:"icons/apple-launch-1620x2160.png",revision:"4027d21cefa08c54abff87907d48be50"},{url:"icons/apple-launch-1668x2224.png",revision:"a6dadffb093c510ab858ee5d1d0b2040"},{url:"icons/apple-launch-1668x2388.png",revision:"9c4d11f3ff633843e58290b03e90dc15"},{url:"icons/apple-launch-2048x2732.png",revision:"5e312394a35aa8a9877ccbdafe653e38"},{url:"icons/apple-launch-750x1334.png",revision:"de6552cb2dcb88bfae1639c1ac322d5a"},{url:"icons/apple-launch-828x1792.png",revision:"12ba9fae43d42dc90460250134857d14"},{url:"icons/favicon-128x128.png",revision:"1d4f03f96bdde98e0710622f2b14581f"},{url:"icons/favicon-16x16.png",revision:"a4471b0c218caa78ebe51b9f044187b7"},{url:"icons/favicon-32x32.png",revision:"3a9a97c1af15993cea6ed820e9f27ff2"},{url:"icons/favicon-96x96.png",revision:"a622278dea999b62109f8e5bf6d71996"},{url:"icons/icon-128x128.png",revision:"1d4f03f96bdde98e0710622f2b14581f"},{url:"icons/icon-192x192.png",revision:"d04f87f6cdab48779fa91950523d1fc2"},{url:"icons/icon-256x256.png",revision:"e24782100df8b11f184dbc07402c9a3f"},{url:"icons/icon-384x384.png",revision:"68882dea6236d9d79eeab0d1939d23e0"},{url:"icons/icon-512x512.png",revision:"53c56e95d09625b22205d0d0dfd3ad41"},{url:"icons/ms-icon-144x144.png",revision:"858f95d152774f182cf0be355ccde722"},{url:"icons/safari-pinned-tab.svg",revision:"12378c68151b89b1152bbef59b8a0126"},{url:"images/units/cartel-soldato-enforcer-alfa.jpg",revision:"8a547024313573aab42ee9fd0479db99"},{url:"images/units/militia-survialists-rifleman-a4.jpg",revision:"d3ef5743996db953cf7ab35fc92f04f0"},{url:"index.html",revision:"5d4f3c57f773b55e805c84d7bc131134"},{url:"js/16.f449ec13.js",revision:null},{url:"js/193.b522e71d.js",revision:null},{url:"js/308.800b17b1.js",revision:null},{url:"js/45.1441c2bb.js",revision:null},{url:"js/483.251998ae.js",revision:null},{url:"js/705.733c7eb2.js",revision:null},{url:"js/735.77028ea8.js",revision:null},{url:"js/app.1e6d19e8.js",revision:null},{url:"js/vendor.e6ed4c8a.js",revision:null},{url:"manifest.json",revision:"7efb80762fa801f04c9d23817535bad5"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));

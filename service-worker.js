if(!self.define){let n,e={};const i=(i,s)=>(i=new URL(i+".js",s).href,e[i]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=i,n.onload=e,document.head.appendChild(n)}else n=i,importScripts(i),e()})).then((()=>{let n=e[i];if(!n)throw new Error(`Module ${i} didn’t register its module`);return n})));self.define=(s,l)=>{const r=n||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let c={};const o=n=>i(n,r),f={module:{uri:r},exports:c,require:o};e[r]=Promise.all(s.map((n=>f[n]||o(n)))).then((n=>(l(...n),c)))}}define(["./workbox-890a6148"],(function(n){"use strict";n.setCacheNameDetails({prefix:"usopa"}),self.skipWaiting(),n.precacheAndRoute([{url:"css/211.5d749652.css",revision:null},{url:"css/530.aea75a5a.css",revision:null},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.3945d197.css",revision:null},{url:"favicon.ico",revision:"6e5c53c2f096fe9314c82e81084fefa4"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.fa21e2c7.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.4dc33a1e.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.7b05c22e.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.87f3a1cb.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.fe849ef5.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.676b7653.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"b3d03fee295c5891f389997562a1439a"},{url:"icons/apple-icon-152x152.png",revision:"920c4eb4ebd250d7a2edab52e1955284"},{url:"icons/apple-icon-167x167.png",revision:"8d105c3ee42ccbbd9ca650a0a79cc9bc"},{url:"icons/apple-icon-180x180.png",revision:"3aac77453981cf135d3d283a72e53ea1"},{url:"icons/apple-launch-1125x2436.png",revision:"adcbf446993dbc037237a62f59e1f565"},{url:"icons/apple-launch-1170x2532.png",revision:"8567fde94962e5e3471b0067178f4ed5"},{url:"icons/apple-launch-1242x2208.png",revision:"6ecfb01a46650af7503a41f664544d34"},{url:"icons/apple-launch-1242x2688.png",revision:"7f6783139a037f817e20518d87ed8f31"},{url:"icons/apple-launch-1284x2778.png",revision:"6db460d9c7d9ed833599b96f870b720f"},{url:"icons/apple-launch-1536x2048.png",revision:"05e6b656616dadf5174d1d1a7d22a987"},{url:"icons/apple-launch-1620x2160.png",revision:"4027d21cefa08c54abff87907d48be50"},{url:"icons/apple-launch-1668x2224.png",revision:"a6dadffb093c510ab858ee5d1d0b2040"},{url:"icons/apple-launch-1668x2388.png",revision:"9c4d11f3ff633843e58290b03e90dc15"},{url:"icons/apple-launch-2048x2732.png",revision:"5e312394a35aa8a9877ccbdafe653e38"},{url:"icons/apple-launch-750x1334.png",revision:"de6552cb2dcb88bfae1639c1ac322d5a"},{url:"icons/apple-launch-828x1792.png",revision:"12ba9fae43d42dc90460250134857d14"},{url:"icons/favicon-128x128.png",revision:"1d4f03f96bdde98e0710622f2b14581f"},{url:"icons/favicon-16x16.png",revision:"a4471b0c218caa78ebe51b9f044187b7"},{url:"icons/favicon-32x32.png",revision:"3a9a97c1af15993cea6ed820e9f27ff2"},{url:"icons/favicon-96x96.png",revision:"a622278dea999b62109f8e5bf6d71996"},{url:"icons/icon-128x128.png",revision:"1d4f03f96bdde98e0710622f2b14581f"},{url:"icons/icon-192x192.png",revision:"d04f87f6cdab48779fa91950523d1fc2"},{url:"icons/icon-256x256.png",revision:"e24782100df8b11f184dbc07402c9a3f"},{url:"icons/icon-384x384.png",revision:"68882dea6236d9d79eeab0d1939d23e0"},{url:"icons/icon-512x512.png",revision:"53c56e95d09625b22205d0d0dfd3ad41"},{url:"icons/ms-icon-144x144.png",revision:"858f95d152774f182cf0be355ccde722"},{url:"icons/safari-pinned-tab.svg",revision:"12378c68151b89b1152bbef59b8a0126"},{url:"images/units/cartel-soldato-enforcer-alfa.jpg",revision:"8a547024313573aab42ee9fd0479db99"},{url:"images/units/militia-survialists-rifleman-a4.jpg",revision:"d3ef5743996db953cf7ab35fc92f04f0"},{url:"index.html",revision:"62f9ef84c9db0e0b29ba62bc8a356ef2"},{url:"js/188.1dbae592.js",revision:null},{url:"js/198.c4610079.js",revision:null},{url:"js/211.5d6cf450.js",revision:null},{url:"js/388.026495f0.js",revision:null},{url:"js/42.135a78d0.js",revision:null},{url:"js/530.73c54d2a.js",revision:null},{url:"js/531.ecec58d4.js",revision:null},{url:"js/54.42f60733.js",revision:null},{url:"js/609.e35aa9cd.js",revision:null},{url:"js/815.5c89d7db.js",revision:null},{url:"js/921.82784179.js",revision:null},{url:"js/app.7f939667.js",revision:null},{url:"js/vendor.d6e5c7a9.js",revision:null},{url:"manifest.json",revision:"7efb80762fa801f04c9d23817535bad5"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));

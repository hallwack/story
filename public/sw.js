if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/124.3d8dc490bb7301e0.js",revision:"3d8dc490bb7301e0"},{url:"/_next/static/chunks/45.0de34770cbeb93d4.js",revision:"0de34770cbeb93d4"},{url:"/_next/static/chunks/643-2cc049040fb14eb3.js",revision:"2cc049040fb14eb3"},{url:"/_next/static/chunks/675-b9e4539e8c0434c4.js",revision:"b9e4539e8c0434c4"},{url:"/_next/static/chunks/framework-01395af778c6fb71.js",revision:"01395af778c6fb71"},{url:"/_next/static/chunks/main-7b129814c90d9708.js",revision:"7b129814c90d9708"},{url:"/_next/static/chunks/pages/404-122059460fadd3fc.js",revision:"122059460fadd3fc"},{url:"/_next/static/chunks/pages/_app-e5b76419b63ae5ff.js",revision:"e5b76419b63ae5ff"},{url:"/_next/static/chunks/pages/_error-d742f979193aeae4.js",revision:"d742f979193aeae4"},{url:"/_next/static/chunks/pages/index-dffaa3456fec6593.js",revision:"dffaa3456fec6593"},{url:"/_next/static/chunks/pages/story/%5Bslug%5D-12335f9bd7d4f644.js",revision:"12335f9bd7d4f644"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-04b842337f8dd08a.js",revision:"04b842337f8dd08a"},{url:"/_next/static/css/069ff64b07ed1af4.css",revision:"069ff64b07ed1af4"},{url:"/_next/static/css/ffa3425b91155460.css",revision:"ffa3425b91155460"},{url:"/_next/static/yx8TwIV3SeKx6_58F3dHB/_buildManifest.js",revision:"95a606377a9aa40a39407bfc7736b60f"},{url:"/_next/static/yx8TwIV3SeKx6_58F3dHB/_middlewareManifest.js",revision:"468e9a0ecca0c65bcb0ee673b762445d"},{url:"/_next/static/yx8TwIV3SeKx6_58F3dHB/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/favicon.ico",revision:"b8660155c16317423b13af21d4e0a22b"},{url:"/fonts/Basement/BasementGrotesque-Black.woff2",revision:"6ac00f2bb129fe31cf6270f413ea2d32"},{url:"/fonts/Space/SpaceMono-Regular.woff2",revision:"8d2441269770a194580f08dfdda9b433"},{url:"/icon-192x192.png",revision:"b85b069da711bfcab562b22c933adb94"},{url:"/icon-256x256.png",revision:"3d2d16309923a8461c937ad3fb48f771"},{url:"/icon-384x384.png",revision:"2dd48b9476086bbfaf794082b0c06bdf"},{url:"/icon-512x512.png",revision:"a7b8c556a745b297be84c5745215b996"},{url:"/krido.jpg",revision:"88b0d4a833a6c13f91af9c2ee695b39b"},{url:"/manifest.json",revision:"8989532b58beac234125d1db0e1c6c88"},{url:"/robots.txt",revision:"4464c50bb6362ea5b5290fb8ab731116"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

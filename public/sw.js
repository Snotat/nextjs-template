if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let a={};const r=e=>n(e,i),o={module:{uri:i},exports:a,require:r};s[i]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(c(...e),a)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"c56f235db749bcd4fc489136f4bf440d"},{url:"/_next/static/3heDFTOet3XmJ9CKqGS01/_buildManifest.js",revision:"39c04c408085e9912adc25c833c9fca1"},{url:"/_next/static/3heDFTOet3XmJ9CKqGS01/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/472-e2c85a20e5be4f4d.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/874-44e30aee0032ba88.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/9081a741-da2182ac72d3c334.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/92-98e295284223fa18.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/93854f56-dcd68c4d0b8e1e69.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/a342680c-8b56074604df80fc.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/app/_not-found-4df41f0ed43d1a94.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/app/layout-059a881bc8e08e24.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/app/mySubscription/page-e2fd17c44fa7bfc2.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/app/page-644de9cae8e7f9ee.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/bc9e92e6-261cdd00ef26dd66.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/fd9d1056-8e9ce6da1aff3726.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/main-8b8618633c6c4dc4.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/main-app-827b00a7a15cd782.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/pages/_app-ee276fea40a4b191.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/pages/_error-deeb844d2074b9d8.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-315d55e8b7d9ab23.js",revision:"3heDFTOet3XmJ9CKqGS01"},{url:"/_next/static/css/25c65e5327f7bb27.css",revision:"25c65e5327f7bb27"},{url:"/_next/static/css/89bdbd517fcbb1a0.css",revision:"89bdbd517fcbb1a0"},{url:"/_next/static/css/c7e3baf78ed95ec3.css",revision:"c7e3baf78ed95ec3"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android-chrome-192x192.png",revision:"7f04051078bf8fa9efa898ebf798413f"},{url:"/android-chrome-512x512.png",revision:"22ebc9da45abb2dfe5912bfbb53bece9"},{url:"/icon-192x192.png",revision:"f8d061fa194617a31b50bff9588af3b8"},{url:"/icon-256x256.png",revision:"cba3f327f30c6bedc5b81fe7cd408611"},{url:"/icon-384x384.png",revision:"dcb4be53c5d7171fc8efb6e0d3b88428"},{url:"/icon-512x512.png",revision:"2e881ae4f293a31f39585fb6cc84f7b2"},{url:"/manifest.json",revision:"486209615665332dd892ef4d70ae2560"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

﻿(window.webpackJsonp=window.webpackJsonp||[]).push([["7441004f6b6b66cce39929ceed1ae0cd"],{PU8N:function(e,t,n){"use strict";n.r(t),n.d(t,"isMvk",(function(){return o})),n.d(t,"getVideoDuration",(function(){return i})),n.d(t,"getMediaBlob",(function(){return a})),n.d(t,"getBlobType",(function(){return s})),n.d(t,"noop",(function(){return u})),n.d(t,"getAverageRGB",(function(){return c})),n.d(t,"loadImage",(function(){return f})),n.d(t,"loadImages",(function(){return d})),n.d(t,"loadFontFace",(function(){return l})),n.d(t,"loadFontFacePromise",(function(){return h})),n.d(t,"getCroppedImage",(function(){return m}));var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(){return!!window.isMVK}function i(e){return void 0===e&&(e=""),new Promise((function(t,n){var r=document.createElement("video");r.addEventListener("loadedmetadata",(function(){return t(r.duration)}),{once:!0}),r.addEventListener("error",n,{once:!0}),r.crossOrigin="anonymous",r.preload="metadata",r.src=e}))}function a(e){return new Promise((function(t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="blob",r.onload=function(){if(404===r.response.status)return n();t(r.response)},r.onerror=n,r.send()}))}function s(e){try{return e.type.split("/").splice(-1)[0]}catch(e){return null}}var u=function(){};function c(e){var t,n={r:0,g:0,b:0};try{t=e.getImageData(0,0,e.canvas.width,e.canvas.height)}catch(e){return n}for(var r=-4,o=0;(r+=20)<t.data.length;)++o,n.r+=t.data[r],n.g+=t.data[r+1],n.b+=t.data[r+2];return n.r=~~(n.r/o),n.g=~~(n.g/o),n.b=~~(n.b/o),n}function f(e){return new Promise((function(t,n){var r=new Image;r.crossOrigin=e.startsWith("data:")?null:"Anonymous",r.onerror=function(){return n(new Error("Failed to load image's URL: "+e))},r.onload=function(){return t(r)},r.src=e}))}var d=function(e){return new Promise((function(t){var n=e.map((function(e){return f(e)}));Promise.all(n).then((function(e){return t(e)})).catch((function(){}))}))};function l(e,t){var n,r,o,i,a,s,u,c,f={normal:"400",500:"500",600:"600",bold:"700"},d={tolerance:2,delay:100,glyphs:"",success:function(){},error:function(){},timeout:5e3,weight:"400",style:"normal"},l={display:"block","font-size":"48px","line-height":"normal","font-variant":"normal","white-space":"nowrap",position:"absolute",visibility:"hidden",top:"-9999px",left:"-9999px",width:"auto",height:"auto",margin:"0",padding:"0"};function h(e){var t=[];return each(e,(function(e,n){t.push(e+":"+n)})),t.join(";")}function m(e,t,n){return Math.abs(e.width-t.offsetWidth)>n||Math.abs(e.height-t.offsetHeight)>n}function g(){i||(utilsNode.appendChild(a),i=!0,o={sansSerif:{width:u.offsetWidth,height:u.offsetHeight},serif:{width:s.offsetWidth,height:s.offsetHeight}},browser.opera&&!browser.chrome?(u.style.fontFamily='"'+e+'", sans-serif',s.style.fontFamily='"'+e+'", serif'):(setStyle(u,"font-family",'"'+e+'", sans-serif'),setStyle(s,"font-family",'"'+e+'", serif'))),i&&o&&(m(o.sansSerif,u,t.tolerance)||m(o.serif,s,t.tolerance))?(re(a),t.success()):(new Date).getTime()-r.getTime()>t.timeout?(re(a),t.error()):!i&&"requestAnimationFrame"in window?window.requestAnimationFrame(g):window.setTimeout(g,t.delay)}for(var p in d)t.hasOwnProperty(p)||(t[p]=d[p]);l["font-weight"]=t.weight,l["font-style"]=t.style,!t.glyphs&&"fonts"in document?(t.timeout&&(n=setTimeout((function(){t.error()}),t.timeout)),function(n){each(null===document||void 0===document?void 0:document.fonts,(function(r){r.family.toLowerCase()===e.toLowerCase()&&(f[r.weight]||r.weight)===""+t.weight&&r.style===t.style&&r.load().then((function(){t.success(),clearTimeout(n)}))}))}(n)):(c="AxmTYklsjo190QW"+t.glyphs,r=new Date,a=ce("div"),u=ce("div",{innerHTML:c}),s=ce("div",{innerHTML:c}),u.setAttribute("style",h(extend({"font-family":"sans-serif"},l))),s.setAttribute("style",h(extend({"font-family":"serif"},l))),a.appendChild(u),a.appendChild(s),g())}function h(e,t){return new Promise((function(n,o){l(e,r(r({},t),{glyphs:"",success:function(){var e=function(){n(),(null==t?void 0:t.success)&&t.success()};browser.safari?setTimeout(e,150):e()},error:function(){o(),(null==t?void 0:t.error)&&t.error()}}))}))}function m(e,t,n,r,o){return new Promise((function(i,a){("string"==typeof e?f(e):Promise.resolve(e)).then((function(e){var s=document.createElement("canvas");s.width=e.width,s.height=e.height;var u=s.getContext("2d");if(u){u.drawImage(e,0,0);var c=u.getImageData(t,n,r,o),d=document.createElement("canvas");d.width=r,d.height=o;var l=d.getContext("2d");if(l)return l.putImageData(c,0,0),f(d.toDataURL("image/jpeg",1)).then(i).catch(a);i(e)}else i(e)})).catch(a)}))}}}]);try{stManager.done("cmodules/bundles/7441004f6b6b66cce39929ceed1ae0cd.7566230e86202c40e6c7.js")}catch(e){}
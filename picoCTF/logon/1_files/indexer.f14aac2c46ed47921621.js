﻿!function(r){function t(t){for(var n,s,a=t[0],u=t[1],f=t[2],c=0,l=[];c<a.length;c++)s=a[c],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&l.push(i[s][0]),i[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(r[n]=u[n]);for(h&&h(t);l.length;)l.shift()();return o.push.apply(o,f||[]),e()}function e(){for(var r,t=0;t<o.length;t++){for(var e=o[t],n=!0,a=1;a<e.length;a++){var u=e[a];0!==i[u]&&(n=!1)}n&&(o.splice(t--,1),r=s(s.s=e[0]))}return r}var n={},i={"web/indexer":0},o=[];function s(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.e=function(){return Promise.resolve()},s.m=r,s.c=n,s.d=function(r,t,e){s.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},s.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},s.t=function(r,t){if(1&t&&(r=s(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var n in r)s.d(e,n,function(t){return r[t]}.bind(null,n));return e},s.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return s.d(t,"a",t),t},s.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},s.p="/js/cmodules/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var f=0;f<a.length;f++)t(a[f]);var h=u;o.push([211,"common"]),e()}({211:function(r,t,e){r.exports=e("5FZw")},"5FZw":function(r,t,e){"use strict";e.r(t);var n=e("RdBX");window.vkIndexer=n.vkIndexer;try{stManager.done(jsc("web/indexer.js"))}catch(r){}},RdBX:function(r,t,e){"use strict";e.r(t),e.d(t,"vkIndexer",(function(){return n}));e("Vd3H"),e("OG14"),e("a1Th"),e("Btvt"),e("KKXr"),e("Oyvg");function n(r,t,e){this.list=r,this.iterCur=0,this.iterEnd=r?r.length:0,this.index={},this.callback=e||function(){},this.prepareFunc=t||function(r){return r},setTimeout(this.indexIteration.bind(this),10)}n.prototype.delimiter=n.delimiter=new RegExp("[\\s\\-\\.,\\\"\\'\\«\\(\\)\\[\\]\\{\\}\\#\\+\\?\\\\]+","g"),n.prototype.trimmer=new RegExp("^[\\s\\-\\.,\\\"\\'\\«\\(\\)\\[\\]\\{\\}\\+\\?\\\\]+|[\\s\\-,\\\"\\'\\«\\(\\)\\[\\]\\{\\}\\\\]+$","g"),n.prototype.toTranslit={1072:"a",1073:"b",1074:"v",1075:"g",1076:"d",1077:"e",1078:"zh",1079:"z",1080:"i",1081:"y",1082:"k",1083:"l",1084:"m",1085:"n",1086:"o",1087:"p",1088:"r",1089:"s",1090:"t",1091:"u",1092:"f",1093:"h",1094:"ts",1095:"ch",1096:"sh",1097:"sh",1099:"y",1101:"e",1102:"yu",1103:"ya",1105:"e",1098:"",1100:""},n.prototype.toLocalCase={f:"a",",":"b","<":"b",d:"v",u:"g",l:"d",t:"e",";":"zh",":":"zh",p:"z",b:"i",q:"y",r:"k",k:"l",v:"m",y:"n",j:"o",g:"p",h:"r",c:"s",n:"t",e:"u",a:"f","[":"h","{":"kh",w:"ts",x:"ch",i:"sh",o:"sh",s:"y","'":"e",'"':"e",".":"yu",">":"yu",z:"ya","`":"e","~":"e",m:"","]":"","}":""},n.prototype.toLocalTranslit={1072:"f",1074:"d",1075:"u",1076:"l",1077:"t",1079:"p",1080:"b",1081:"q",1082:"r",1083:"k",1084:"v",1085:"y",1086:"j",1087:"g",1088:"h",1089:"c",1090:"n",1091:"e",1092:"a",1094:"w",1095:"x",1096:"i",1097:"o",1099:"s",1103:"z",1098:"m"},n.prototype.indexIteration=function(){for(var r=Math.min(this.iterEnd,this.iterCur+200),t=this.iterCur;t<r;t++){var e=this.list[t];try{e._order=t}catch(r){}this.add(e)}this.iterCur=t,t>=this.iterEnd?this.callback(this):setTimeout(this.indexIteration.bind(this),10)},n.prototype.strToPrefixes=function(r){for(var t={},e=winToUtf(r).toLowerCase().split(this.delimiter),n=e.length;n--;){var i=e[n],o="";if(i){for(var s=0;s<6;s++){var a=i.charCodeAt(s);if(a){var u=this.toTranslit[a],f=i.substr(s,1);o+=null!=u?u:f}}t[o]=1}}return t},n.prototype.strToSearchPrefixes=function(r){for(var t=[],e=r.toLowerCase().split(this.delimiter),n=e.length;n--;){var i={},o=e[n],s="",a="",u="",f=o.length>1;if(o){for(var h=0;h<6;h++){var c=o.charCodeAt(h);if(c){var l=this.toTranslit[c],p=o.substr(h,1);if(s+=null!=l?l:p,f){var d=this.toLocalCase[p],v=this.toLocalTranslit[c];a+=null!=d?d:p,u+=null!=v?v:p}}}i[s]=1,f&&(i[a]=2,i[u]=3),t.push(i)}}return t},n.prototype.toIndexTree=function(r,t){for(var e=this.index,n=0;n<6;n++){var i=r.substr(n,1)||-1;e=e[i]?e[i]:e[i]=5==n?[]:{}}e.push(t)},n.prototype.remove=function(r){var t=this.prepareFunc(r),e=this.strToPrefixes(t);for(var n in e)if(e.hasOwnProperty(n)){for(var i=this.index,o=0;o<6;o++){var s=n.substr(o,1)||-1;if(!i[s])break;i=i[s]}if(i.length)for(var a in i)if(this.equals(i[a],r)){i.splice(a,1);break}}},n.prototype.equals=function(r,t){for(var e in r)if(r.hasOwnProperty(e))switch(typeof r[e]){case"object":if(!this.equals(r[e],t[e]))return!1;break;case"function":if(void 0===r[e]||r[e].toString()!=t[e].toString())return!1;break;default:if(r[e]!=t[e])return!1}for(var n in t)if(void 0===t[n])return!1;return!0},n.prototype.intersect=function(r,t){var e=[];if(isNumeric(r[0])||isNumeric(t[0]))return r.filter((function(r){return-1!==t.indexOf(r)}));for(;r.length>0&&t.length>0;)r[0]._order<t[0]._order?r.shift():(r[0]._order>t[0]._order||this.equals(r[0],t[0])&&e.push(r.shift()),t.shift());return e},n.prototype.add=function(r){var t=this.prepareFunc(r),e=this.strToPrefixes(t);for(var n in e)e.hasOwnProperty(n)&&this.toIndexTree(n,r)},n.prototype.search=function(r){var t=this.index,e=this.strToSearchPrefixes(r),n=[],i=!1;for(var o in e)if(e.hasOwnProperty(o)){if(i&&!n)break;var s=this.localSearch(e[o],0,t);s.sort((function(r,t){return r._order-t._order})),n=i?this.intersect(n,s):s,i=!0}for(var a=n[0],u=n.length+1,f=[],h=1;h<u;h++){var c=n[h];c!=a&&(f.push(a),a=c)}return f},n.prototype.localSearch=function(r,t,e){if(!e)return[];var n={};for(var i in r)if(r.hasOwnProperty(i)){var o=i.substr(t,1)||-1;n[o]||(n[o]={}),n[o][i]=1}if(6==t++||!e)return e;var s=[];for(var a in n)if(-1==a)for(var u in e)e.hasOwnProperty(u)&&s.push.apply(s,this.localSearch(n[a],t,e[u]));else{var f=this.localSearch(n[a],t,e[a]);s.push.apply(s,f)}return s}}});
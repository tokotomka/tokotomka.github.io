!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var i=n(1);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(2)(i,s);i.locals&&(t.exports=i.locals)},function(t,e,n){},function(t,e,n){var i,s,o={},r=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===s&&(s=i.apply(this,arguments)),s}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),u=null,d=0,c=[],l=n(3);function h(t,e){for(var n=0;n<t.length;n++){var i=t[n],s=o[i.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](i.parts[r]);for(;r<i.parts.length;r++)s.parts.push(b(i.parts[r],e))}else{var a=[];for(r=0;r<i.parts.length;r++)a.push(b(i.parts[r],e));o[i.id]={id:i.id,refs:1,parts:a}}}}function f(t,e){for(var n=[],i={},s=0;s<t.length;s++){var o=t[s],r=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[r]?i[r].parts.push(a):n.push(i[r]={id:r,parts:[a]})}return n}function p(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=c[c.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var s=a(t.insertAt.before,n);n.insertBefore(e,s)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return m(e,t.attrs),p(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,i,s,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var r=d++;n=u||(u=g(e)),i=x.bind(null,n,r,!1),s=x.bind(null,n,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),p(t,e),e}(e),i=function(t,e,n){var i=n.css,s=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&s;(e.convertToAbsoluteUrls||o)&&(i=l(i));s&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var r=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}.bind(null,n,e),s=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),s=function(){v(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else s()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return h(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var r=n[s];(a=o[r.id]).refs--,i.push(a)}t&&h(f(t,e),e);for(s=0;s<i.length;s++){var a;if(0===(a=i[s]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete o[a.id]}}}};var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,n,i){var s=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,s);else{var o=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var s,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(s=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")})}},function(t,e,n){"use strict";n.r(e);var i="AIzaSyBb6yHw5mux50EVABXbKVqteVWYdzYw5zI";var s="https://www.googleapis.com/youtube/v3/";class o{constructor(){this.total=0,this.elementWidth=380,this.nextPageToken="",this.prevPageToken=""}static getStaticInfo(t){return fetch(`${s}videos?key=${i}&part=snippet,statistics&id=`+t).then(t=>t.json())}getIds(t){this.total=t.pageInfo.totalResults,t.prevPageToken&&(this.prevPageToken=t.prevPageToken),t.nextPageToken&&(this.nextPageToken=t.nextPageToken);const e=[];return t.items.map(t=>e.push(t.id.videoId)),e.join(",")}combineInfo(t){const e=[];return t.items.map(t=>e.push({id:t.id,channelImg:t.snippet.channelId,title:t.snippet.title,description:t.snippet.description,author:t.snippet.channelTitle,upload:t.snippet.publishedAt.slice(0,10),viewCount:t.statistics.viewCount,img:t.snippet.thumbnails.medium})),{total:this.total,items:e}}getVideos(t){const e=`${s}search?key=${i}&type=video&part=snippet&maxResults=15&q=`,n=`&pageToken=${this.nextPageToken}`;return fetch(e+t+n).then(t=>t.json()).then(t=>this.getIds(t)).then(t=>o.getStaticInfo(t)).then(t=>this.combineInfo(t))}defineActualVideo(t,e){const n=e>-1?e:0,i=Math.floor(window.innerWidth/this.elementWidth),s=e>-3?e:n;return t.items.slice(n,s+i)}setStartIndex(t,e){return(e-1)*Math.floor(window.innerWidth/this.elementWidth)-15*(Math.ceil(e/15)-1)}checkChunk(t){return t+Math.floor(window.innerWidth/this.elementWidth)>=15}static defineTotalNumberOfPages(t){return t/Math.ceil(window.innerWidth/380)}}n(0);const r=new o,a=new class{constructor(t,e){this.view=t,this.model=e,this.query="",this.total=0,this.data="",this.nextData="",this.prevData="",this.currentPage=1,this.isNeededToLoad=!1,this.isReady=!1,this.startIndex=0,this.startMove=null}init(){this.view.headerLayout(),this.getData(this.query)}getData(t){return this.model.getVideos(t).then(t=>this.checkCurrentChunk(t))}checkCurrentChunk(t){this.isReady?(this.nextData=t,this.isNeededToLoad=!1,this.isReady=!1):(this.isNeededToLoad=this.model.checkChunk(this.startIndex),this.isNeededToLoad&&(this.isReady=!0,this.getData(this.query)),this.data=t),this.showActualVideos()}showActualVideos(){const t=Math.floor(window.innerWidth/380);let e=this.model.defineActualVideo(this.data,this.startIndex);const n=t-e.length;if(n){this.prevData=this.data,this.data=this.nextData,this.nextData="",this.startIndex=n;const t=this.model.defineActualVideo(this.data,this.startIndex);e=e.concat(t)}this.total=o.defineTotalNumberOfPages(this.data.total),this.view.mainLayout(e),this.view.buttonsLayout(this.currentPage),this.onChangePage(),this.changeClass()}changeNewPage(t){const e=this.currentPage+(t||0);this.startIndex=this.model.setStartIndex(this.startIndex,e),this.checkCurrentChunk(this.data)}setCurrentPage(t){this.currentPage=+t.target.value,this.changeNewPage()}changeClass(){this.currentPage>1&&(document.getElementById("btn--page1").classList.remove("btn--invisible"),document.getElementById("btn--page2").classList.remove("btn--invisible")),this.currentPage>this.total-1&&(document.getElementById("btn--page4").classList.add("btn--invisible"),document.getElementById("btn--page5").classList.add("btn--invisible"))}setMousePosition(t){this.startMove=t.pageX}detectMouseMove(t){const e=t.pageX-this.startMove,n=Math.abs(Math.floor(e/380)),i=n<3?n:3;this.changeNewPage(i)}onTogglePage(){document.addEventListener("mousedown",this.setMousePosition),document.addEventListener("mousemove",this.detectMouseMove),document.addEventListener("mouseup",function(t){})}onChangePage(){for(let t=1;t<6;t+=1)document.getElementById(`btn--page${t}`).addEventListener("click",t=>this.setCurrentPage(t))}onChangeQuery(t){this.query=t.target.value}onChangeValue(){document.getElementById("input").addEventListener("change",t=>this.onChangeQuery(t))}loadVideos(){this.currentPage=1,this.getData(this.query)}onLoadVideos(){document.getElementById("search").addEventListener("click",()=>this.loadVideos())}}(new class{constructor(){this.el=document.body}headerLayout(){this.el.innerHTML='<header><h1 class="title">Youtube Info</h1><div class="searchBox"><input type="text" class="input" placeholder="Type your query here..." id="input"><button id="search">&#x1F50D;</button></div></header><main id="main"></main>',this.el=document.getElementById("main")}mainLayout(t){const e=t.map(t=>{const e=`https://www.youtube.com/watch?v=${t.id}`;return`<div class="element" style="background: url(${t.img.url}) no-repeat">`+`<a href=${e} class="element--title" target="_blank">${t.title}</a>`+`<div class="element--info"><div>&#50883; ${t.author}</div>`+`<div>&#128467; ${t.upload}</div>`+`<div>&#128065; ${t.viewCount}</div>`+`<div class="element-desc">${t.description}</div>`+"</div></div>"});this.el.innerHTML=`<div class="list">${e.join("")}</div><div class="btn" id="btn"></div>`,this.el=document.getElementById("btn")}buttonsLayout(t){this.el.innerHTML=`<button class="btn--page btn--invisible" value=${t-1} id="btn--page1">&#10216;</button>`+`<button class="btn--page btn--invisible" value=${t-1} id="btn--page2">${t-1}</button>`+`<button class="btn--page btn--active" value=${t} id="btn--page3">${t}</button>`+`<button class="btn--page" value=${t+1} id="btn--page4">${t+1}</button>`+`<button class="btn--page" value=${t+1} id="btn--page5">&#10217;</button>`,this.el=document.getElementById("main")}},r);a.init(),a.onLoadVideos(),a.onChangeValue(),a.onTogglePage()}]);
//# sourceMappingURL=bundle.js.map
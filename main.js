!function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e,t){var r=t(1);"string"==typeof r&&(r=[[n.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,a);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(2)(!1)).push([n.i,".block {\n  display: block;\n}\nbutton {\n  cursor: pointer;\n  padding: 5px 20px;\n}\nbutton.bet {\n  padding: 3px 8px;\n}\n.bank,\n.player {\n  width: 300px;\n  margin: 0 0 20px;\n  padding: 20px;\n  border: 1px solid black;\n}\n.bank:after,\n.player:after {\n  display: table;\n  content: '';\n  clear: both;\n}\n.player.active {\n  border-color: blue;\n}\n.player.win {\n  border-color: green;\n}\n.player.busted {\n  color: #999;\n  border-color: #999;\n}\n.card.hidden,\n.card.hidden ~ strong {\n  color: #fff;\n  display: block;\n}\n.card.hidden:before,\n.card.hidden ~ strong:before {\n  content: '?';\n  color: #000;\n}\nstrong {\n  display: block;\n}\nh3 {\n  margin: 0 0 10px;\n}\nh3 em {\n  font-weight: normal;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 24px;\n}\nbutton.move {\n  display: block;\n  float: left;\n}\n.played-bet {\n  display: block;\n  clear: both;\n  margin: 20px 0;\n  text-align: right;\n  font-style: italic;\n}\n",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(o).concat([a]).join("\n")}var i;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(a=0;a<n.length;a++){var i=n[a];null!=i[0]&&r[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),e.push(i))}},e}},function(n,e,t){var r,a,o={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),d=null,l=0,c=[],u=t(4);function p(n,e){for(var t=0;t<n.length;t++){var r=n[t],a=o[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(m(r.parts[i],e))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(m(r.parts[i],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function f(n,e){for(var t=[],r={},a=0;a<n.length;a++){var o=n[a],i=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):t.push(r[i]={id:i,parts:[s]})}return t}function h(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),c.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=s(n.insertAt.before,t);t.insertBefore(e,a)}}function v(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=c.indexOf(n);e>=0&&c.splice(e,1)}function b(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return y(e,n.attrs),h(n,e),e}function y(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function m(n,e){var t,r,a,o;if(e.transform&&n.css){if(!(o="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=o}if(e.singleton){var i=l++;t=d||(d=b(e)),r=k.bind(null,t,i,!1),a=k.bind(null,t,i,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",y(e,n.attrs),h(n,e),e}(e),r=function(n,e,t){var r=t.css,a=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&a;(e.convertToAbsoluteUrls||o)&&(r=u(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,t,e),a=function(){v(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),a=function(){v(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else a()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=f(n,e);return p(t,e),function(n){for(var r=[],a=0;a<t.length;a++){var i=t[a];(s=o[i.id]).refs--,r.push(s)}n&&p(f(n,e),e);for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete o[s.id]}}}};var g,w=(g=[],function(n,e){return g[n]=e,g.filter(Boolean).join("\n")});function k(n,e,t,r){var a=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(e,a);else{var o=document.createTextNode(a),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(o,i[e]):n.appendChild(o)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var a,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(n,e,t){"use strict";t.r(e);t(0);var r={drawBoard:function(n,e){$("#start").remove();var t=$('<div class="players"></div>'),r=$('<div class="bank"><h3>Bank</h3></div>'),a=$('<div class="hand"></div>');$(".bank").remove(),r.append(a),e.append(r),$(".players").remove(),e.append(t)},drawEmpty:function(n,e){e.empty()},drawPlayers:function(n){for(e in $(".players").empty(),n.players){var e=n.players[e],t=e.active?"active":"",r=e.done&&e.win?"win":"",a=e.busted?"busted":"";e.relatedTo?$(".players").append($('<div class="player player'+e.id+" "+t+" "+r+" "+a+'" id="'+e.id+'"><h3><span>'+e.name+' </span></h3><div class="hand"></div></div>')):$(".players").append($('<div class="player player'+e.id+" "+t+" "+r+" "+a+'" id="'+e.id+'"><h3><span>'+e.name+" </span><em>("+e.stackSize+')</em></h3><div class="hand"></div><div class="buttons"></div></div>'))}},drawPlayer:function(n){$(".player"+n.id+" h3 span, .player"+n.id+" h3 em").empty(),$(".player"+n.id+" h3 span").text(n.name),$(".player"+n.id+" h3 em").text(" ("+n.stackSize+") ")},drawPlayerHand:function(n){for(e in n.players){var e=n.players[e];for(t in $(".player"+e.id+" .hand").empty(),e.hand){var t=e.hand[t];$(".player"+e.id+" .hand").append($('<div class="card">'+t.rank+t.suit+" ("+t.cardVal+")</div>"))}$(".player"+e.id+" .hand").append($("<strong>"+u(e.hand)+"</strong>"))}},drawBankHand:function(n){for(e in n.bank.hand){var e=n.bank.hand[e],t=e.hidden?"hidden":"";$(".bank .hand").append($('<div class="card '+t+'">'+e.rank+e.suit+" ("+e.cardVal+")</div>"))}$(".bank .hand").append($("<strong>"+u(n.bank.hand)+"</strong>"))},drawPlayerMoves:function(n){for(e in n.players){var e=n.players[e];if(e.active){var t=v(e);for(var r in t)$(".player"+e.id).append($('<button class="move" id="'+t[r]+'">'+t[r]+"</button>"))}}},drawBets:function(n){for(var e in n.players){var t=n.players[e].stackSize,r=$("#"+n.players[e].id+".player .buttons");r.append('<button class="bet" id="5">5</button>'),t>=10&&r.append('<button class="bet" id="10">10</button>'),t>=25&&r.append('<button class="bet" id="25">25</button>'),t>=50&&r.append('<button class="bet" id="50">50</button>'),t>=100&&r.append('<button class="bet" id="100">100</button>')}},removeBets:function(n){n.parents(".buttons").remove()},drawBet:function(n){for(e in n.players){var e=n.players[e];$(".player"+e.id+" .played-bet").remove(),$(".player"+e.id).append('<div class="played-bet">Uw inzet: '+e.bet+"</div>")}},init:function(n,e){r.drawBoard(n,e),r.drawPlayers(n),r.drawBankHand(n),r.drawPlayerHand(n),r.drawBet(n),r.drawPlayerMoves(n)}},a=console.log,o=$("#bj");function i(n,e){for(var t=0;t<n.length;t++)if(n[t]===e)return t;return-1}function s(n,e,t){var r=function(n){return n.deck.pop()}(n);t&&(r.hidden=!0),e.hand.push(r)}function d(n,e){var t=!!n.players[i(n.players,e)+1]&&n.players[i(n.players,e)+1];e.done=!0,e.active=!1,a(e),t?t.active=!0:(a("no other player found, move to finish game"),function(n){for(var e in n.hand)n.hand[e].hidden=!1}(n.bank),m(n)),r.init(n,o)}function l(n){n.stackSize-=n.bet}function c(n,e,t){var r=u(e.hand);21==r&&t?(alert("blackjack!"),e.done=!0):r>21&&(e.busted=!0,e.done=!0,d(n,e))}function u(n){var e=0;for(var t in n)e+=n[t].cardVal;return e}function p(n,e){return n.concat(e)}function f(n){return n<10?n:10}function h(n,e){return n.concat(e)}function v(n){var e=["hit","stand"];return u(n.hand)>8&&u(n.hand)<12?e=h(e,"double"):n.hand[0].cardVal==n.hand[1].cardVal&&(e=h(e,"split"),10==u(n.hand)&&(e=h(e,"double"))),e}function b(n,e,t,r,a){return{id:n,name:e,stackSize:t,relatedTo:r,hand:[],bet:a||0,pot:{hand:[],bet:[]},done:!1,active:!1,busted:!1}}var y=function(n,e,t){switch(t){case"hit":s(n,e),c(n,e,!1),r.init(n,o);break;case"stand":d(n,e);break;case"double":s(n,e),l(e),e.bet*=2,d(n,e),r.init(n,o);break;case"split":var a=b(e.id+1,e.name,e.stackSize,e.id,e.bet);n.players.push(a),l(e);var i=e.hand[1];a.hand.push(i),e.hand.splice(1,1),s(n,e),s(n,a),c(n,a,!1),r.drawPlayerMoves(n),r.init(n,o)}},m=function(n){var e=n.bank;if(21==u(e.hand))a("players lose");else if(u(e.hand)<17)do{s(n,e),r.init(n,o)}while(u(e.hand)<17);if(u(e.hand)>21)for(var t in a("bank is busted"),n.players){n.players.filter(function(n){return 0==n.busted}).forEach(function(n,e){n.stackSize+=2*n.bet}),r.init(n,o)}else n.players.forEach(function(n,t){u(e.hand)==u(n.hand)?(a("gelijkspel!"),n.stackSize+=n.bet):u(e.hand)<u(n.hand)?(a("player wins!"),n.stackSize+=2*n.bet):a("player loses!")})},g=function(n){r.drawBets(n),$("body").on("click","button.bet",function(e){e.preventDefault();var t=$(this).parents(".player").attr("id");for(a in n.players){var a=n.players[a];a.id==t&&(a.bet=parseInt($(this).attr("id")),l(a),r.removeBets($(this)),r.drawPlayer(a))}var i=!0;for(a in n.players)0==n.players[a].bet&&(i=!1);i&&function(n){var e=n.bank;n.players.forEach(function(e,t){s(n,e,!1)}),s(n,e,!0),n.players.forEach(function(e,t){s(n,e,!1)}),s(n,e,!1),n.players.forEach(function(e,t){c(n,e,!0),v(e)}),r.drawPlayerMoves(n),n.players[0].active=!0,r.init(n,o),$("body").on("click","button.move",function(e){e.preventDefault();var t=$(this).parents(".player").attr("id"),r=$(this).attr("id");for(var a in n.players){var o=n.players[a];o.id==t&&(console.log(o),y(n,o,r))}})}(n)})},w=function(){return{players:function(n,e){return n.concat(e)}([],b(1,"Milly",200,!1,!1)),bank:{hand:[]},deck:function(){for(var n=["c","d","h","s"],e=[1,2,3,4,5,6,7,8,9,10,11,12,13],t=[],r=0;r<6;r++)for(var a=0;a<n.length;a++)for(var o=0;o<e.length;o++){var i=n[a],s=e[o];t=p(t,{rank:s,suit:i,hidden:!1,colour:"h"==i||"d"==i?"red":"black",cardVal:f(s)})}return t.sort(function(){return.5-Math.random()}),t}()}},k=function(){var n=w();$("#start").on("click",function(e){e.preventDefault(),function(n){r.drawBoard(n,o),r.drawPlayers(n,o),g(n),a(n)}(n)})};$(function(){k()})}]);
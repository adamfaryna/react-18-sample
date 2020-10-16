(this["webpackJsonpreact-18-sample"]=this["webpackJsonpreact-18-sample"]||[]).push([[0],{17:function(e,n,t){e.exports=t(31)},22:function(e,n,t){},24:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),i=t(12),o=t.n(i),a=(t(22),t(5)),s=t(9),u=t.n(s),l=t(13),p=t(14),y=t(15),m=function(e,n){return e.toLocaleString("en-US",{style:"currency",currency:n})},d=function(){function e(n,t,c){var r=this;Object(p.a)(this,e),this.symbol=n,this.currentPrice=t,this.openingPrice=c,this.getCurrentPrice=function(e){return m(r.currentPrice,e)},this.getOpeningPrice=function(e){return m(r.openingPrice,e)},this.getPriceIncrease=function(e){return"".concat(r.priceInc.toFixed(3),"% (").concat(m(r.priceInc,e),")")}}return Object(y.a)(e,[{key:"priceInc",get:function(){return(this.currentPrice-this.openingPrice)/this.openingPrice*100}}]),e}(),g=function(){var e=Object(l.a)(u.a.mark((function e(n,t){var c,r,i,o,a,s,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.join(","),r="".concat("https://min-api.cryptocompare.com/data/","pricemultifull?fsyms=").concat(c,"&tsyms=").concat(n),e.prev=2,e.next=5,fetch(r,{method:"GET",headers:{"Content-Type":"application/json"}});case 5:return i=e.sent,e.next=8,i.json();case 8:for(s in o=(o=e.sent).RAW,a=[],o)l=new d(s,o[s][n].PRICE,o[s][n].OPENDAY),a.push(l);return e.abrupt("return",a);case 15:throw e.prev=15,e.t0=e.catch(2),console.error("Fetch coins data failed!"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(n,t){return e.apply(this,arguments)}}(),f=(t(24),t(6)),b=t(2),P=t(4),h=t(10),O=t(16);P.b.add(h.a,h.b);var v=function(e){var n=e.caption,t=e.isDescending,c=void 0!==t&&t,i=e.isActive,o=void 0!==i&&i,a=e.onClick;return r.a.createElement("th",{className:"table-header-sortable",onClick:a},n," ",o&&r.a.createElement(O.a,{icon:c?"arrow-down":"arrow-up"}))},B=(t(30),{sortBySymbolDescending:!1,sortByCurrentPriceDescending:!1,sortByOpeningPriceDescending:!1,sortByPriceIncDescending:!1,coins:[],activeSort:""}),E=function(e,n,t){return t?e.sort((function(e,t){return-1*(e[n]-t[n])})):e.sort((function(e,t){return e[n]-t[n]})),e};function D(e,n){switch(n.type){case"updateCoins":return Object(b.a)(Object(b.a)({},B),{},{coins:n.payload});case"sortBySymbol":return Object(b.a)(Object(b.a)({},B),{},{coins:(t=Object(f.a)(e.coins),c="symbol",r=!e.sortBySymbolDescending,r?t.sort((function(e,n){return-1*e[c].localeCompare(n[c])})):t.sort((function(e,n){return e[c].localeCompare(n[c])})),t),sortBySymbolDescending:!e.sortBySymbolDescending,activeSort:"symbol"});case"sortByCurrentPrice":return Object(b.a)(Object(b.a)({},B),{},{coins:E(Object(f.a)(e.coins),"currentPrice",!e.sortByCurrentPriceDescending),sortByCurrentPriceDescending:!e.sortByCurrentPriceDescending,activeSort:"currentPrice"});case"sortByOpeningPrice":return Object(b.a)(Object(b.a)({},B),{},{coins:E(Object(f.a)(e.coins),"openingPrice",!e.sortByOpeningPriceDescending),sortByOpeningPriceDescending:!e.sortByOpeningPriceDescending,activeSort:"openingPrice"});case"sortByPriceInc":return Object(b.a)(Object(b.a)({},B),{},{coins:E(Object(f.a)(e.coins),"priceInc",!e.sortByPriceIncDescending),sortByPriceIncDescending:!e.sortByPriceIncDescending,activeSort:"priceInc"});default:throw new Error}var t,c,r}var C=function(e){var n=e.currency,t=e.coins,i=Object(c.useReducer)(D,B),o=Object(a.a)(i,2),s=o[0],u=o[1],l=s.sortBySymbolDescending,p=s.sortByCurrentPriceDescending,y=s.sortByOpeningPriceDescending,m=s.sortByPriceIncDescending,d=s.activeSort;return Object(c.useEffect)((function(){u({type:"updateCoins",payload:t})}),[t]),r.a.createElement("table",{className:"coin-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(v,{caption:"Coin Name",isDescending:l,isActive:"symbol"===d,onClick:function(){return u({type:"sortBySymbol"})}}),r.a.createElement(v,{caption:"Current Price (".concat(n,")"),isDescending:p,isActive:"currentPrice"===d,onClick:function(){return u({type:"sortByCurrentPrice"})}}),r.a.createElement(v,{caption:"Opening Price (".concat(n,")"),isDescending:y,isActive:"openingPrice"===d,onClick:function(){return u({type:"sortByOpeningPrice"})}}),r.a.createElement(v,{caption:"Price Increase",isDescending:m,isActive:"priceInc"===d,onClick:function(){return u({type:"sortByPriceInc"})}}))),r.a.createElement("tbody",null,s.coins.map((function(e){return r.a.createElement("tr",{key:e.symbol},r.a.createElement("td",null,e.symbol),r.a.createElement("td",null,e.getCurrentPrice(n)),r.a.createElement("td",null,e.getOpeningPrice(n)),r.a.createElement("td",null,e.getPriceIncrease(n)))}))))},j=function(e){var n=e.currencies,t=e.current,c=e.onChange;return r.a.createElement("form",{className:"currency-selector"},r.a.createElement("label",null,"Select currency\xa0",r.a.createElement("select",{value:t,onChange:c},n.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))))},S=["BTC","XRP","ETH","USDT","BNB","BCH","LINK","DOT","LTC","ADA"],I=["USD","EUR","GBP"];var w=function(){var e=Object(c.useState)("USD"),n=Object(a.a)(e,2),t=n[0],i=n[1],o=Object(c.useState)([]),s=Object(a.a)(o,2),u=s[0],l=s[1];return Object(c.useEffect)((function(){g(t,S).then((function(e){l(e)}))}),[t]),r.a.createElement("div",{className:"App"},r.a.createElement(j,{currencies:I,current:t,onChange:function(e){return i(e.target.value)}}),r.a.createElement(C,{currency:t,coins:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.70906258.chunk.js.map
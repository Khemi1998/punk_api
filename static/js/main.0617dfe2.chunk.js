(this.webpackJsonppunk=this.webpackJsonppunk||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(4),s=c.n(r),i=(c(9),c(2)),l=(c(10),c(11),c(12),c(0)),b=function(e){var t=e.picture,c=e.name,a=e.tag,n=e.date,r=e.ph,s=e.abv;return Object(l.jsxs)("div",{className:"card__container",children:[Object(l.jsx)("img",{className:"card--picture",src:t,alt:c}),Object(l.jsx)("h2",{className:"card--name",children:c}),Object(l.jsx)("h3",{className:"card--tag",children:a}),Object(l.jsxs)("h4",{className:"card--abv",children:["ABV: ",s]}),Object(l.jsx)("h5",{className:"card--date",children:n}),Object(l.jsxs)("h6",{className:"card--ph",children:["pH: ",r]})]})},o=function(e){var t=e.BeerArr.map((function(e,t){return Object(l.jsx)(b,{picture:e.image_url,name:e.name,tag:e.tagline,date:e.first_brewed,ph:e.ph,abv:e.abv},t)}));return Object(l.jsx)("div",{className:"cardlist",children:t})},j=(c(14),c(15),function(e){var t=e.searchTerm,c=e.handleInput;return Object(l.jsx)("div",{className:"searchbox__container",children:Object(l.jsx)("input",{placeholder:"Search...",type:"text",name:"beer",value:t,onInput:c,className:"searchbox--input"})})}),u=(c(16),function(e,t){var c=e.filterLabel,a=e.filterBlock,n=e.name;return Object(l.jsxs)("div",{className:"filterblock__container",children:[Object(l.jsx)("h2",{className:"filterblock--label",children:c}),Object(l.jsx)("input",{className:"filterblock--checkbox",type:"checkbox",id:t,name:n,onChange:a})]})}),h=function(e){var t=e.searchTerm,c=e.handleInput,a=e.filterFunction,n=e.results;return Object(l.jsxs)("div",{className:"nav-bar__container",children:[Object(l.jsx)(j,{searchTerm:t,handleInput:c}),Object(l.jsxs)("p",{className:"nav-bar--results",children:["Results: ",n," beer(s)"]}),Object(l.jsxs)("section",{className:"nav-bar__checkboxes",children:[Object(l.jsx)(u,{filterBlock:a,filterLabel:"High ABV (>6.0%)",name:"abv"}),Object(l.jsx)(u,{filterBlock:a,filterLabel:"Classic Range",name:"classic"}),Object(l.jsx)(u,{filterBlock:a,filterLabel:"Acidic (pH<4)",name:"ph"})]})]})},d=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),b=s[0],j=s[1],u=Object(a.useState)(""),d=Object(i.a)(u,2),f=d[0],m=d[1],O=Object(a.useState)([]),p=Object(i.a)(O,2),g=p[0],v=p[1],x=Object(a.useState)([]),_=Object(i.a)(x,2),k=_[0],N=_[1],w=Object(a.useState)(!1),S=Object(i.a)(w,2),B=S[0],I=S[1],L=Object(a.useState)(""),A=Object(i.a)(L,2),C=A[0],F=A[1],T=Object(a.useState)(!1),P=Object(i.a)(T,2),y=P[0],H=P[1];return Object(a.useEffect)((function(){var e="https://api.punkapi.com/v2/beers?".concat(C).concat(f,"&per_page=80");fetch(e).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){n(e),v(e);var t=e.filter((function(e){return e.ph<4&&null!==e.ph}));!0===B&&n(t),N(t)})).catch((function(e){e&&!1===y&&n([])}))}),[f,B,C,y]),Object(l.jsxs)("div",{className:"punk__container",children:[Object(l.jsx)("h1",{className:"punk--title",children:"PUNK API"}),Object(l.jsxs)("div",{className:"punk__main",children:[Object(l.jsx)(h,{handleInput:function(e){var t=e.target.value;0===t.length?(H(!0),n(g)):H(!1),j(t),0!==b.length&&F("beer_name=".concat(b.replace(" ","_").toLowerCase(),"&"))},results:c.length,filterFunction:function(e){console.log(e.target.name),"abv"===e.target.name?e.target.checked?m(""===f?"abv_gt=6":"abv_gt=6&brewed_before=01-2010"):m("brewed_before=01-2010&abv_gt=6"===f?"brewed_before=01-2010":""):"classic"===e.target.name?e.target.checked?m(""===f?"brewed_before=01-2010":"brewed_before=01-2010&abv_gt=6"):m("brewed_before=01-2010&abv_gt=6"===f?"brewed_before=01-2010":""):"ph"===e.target.name&&(I(!B),console.log(B),console.log(f),e.target.checked?n(k):n(g))},searchTerm:b}),Object(l.jsx)(o,{BeerArr:c})]})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),f()}],[[17,1,2]]]);
//# sourceMappingURL=main.0617dfe2.chunk.js.map
(this["webpackJsonpfinantier-test-fe"]=this["webpackJsonpfinantier-test-fe"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(11),i=c.n(s),r=(c(29),c(30),c(23)),l=c(4),o=c(12),j=c.n(o),b=c(16),d=c(6),u=c(19),h=(c(32),c(22)),m=c.n(h),O=c(1),p=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),i=Object(d.a)(s,2),r=i[0],l=i[1],o=Object(a.useState)([]),h=Object(d.a)(o,2),p=h[0],x=h[1],v=Object(a.useState)(!1),f=Object(d.a)(v,2),g=f[0],N=f[1],k=Object(a.useState)(!0),y=Object(d.a)(k,2),w=y[0],S=y[1],C=Object(a.useState)(!1),F=Object(d.a)(C,2),_=F[0],T=F[1],R=Object(a.useState)(!1),z=Object(d.a)(R,2),E=z[0],H=z[1],M=Object(a.useState)([{}]),V=Object(d.a)(M,2),I=V[0],L=V[1],P=Object(a.useState)(0),q=Object(d.a)(P,2),B=q[0],D=q[1],J=Object(a.useState)(0),W=Object(d.a)(J,2),A=W[0],G=W[1],Z=Object(a.useState)({}),K=Object(d.a)(Z,2),Q=K[0],U=K[1],X=Object(a.useState)("3RFOOF2S72MF6TGZ"),Y=Object(d.a)(X,2),$=Y[0],ee=(Y[1],Object(a.useState)("d50e44b3951e474e96b7aaacf310b9ce")),te=Object(d.a)(ee,2),ce=te[0],ae=(te[1],Object(a.useRef)(null));Object(a.useEffect)((function(){ae.current&&(D(.95*ae.current.offsetWidth),G(.95*ae.current.offsetHeight))}),[ae.current]);var ne=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a,n,s,i,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.twelvedata.com/quote?symbol=".concat(c,"&apikey=").concat(ce),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:if(400!==(n=e.sent).code){e.next=11;break}return N(!0),setTimeout((function(){return N(!1)}),1e3),e.abrupt("return");case 11:return s="https://www.alphavantage.co/query?function=OVERVIEW&symbol=".concat(c,"&apikey=").concat($),e.next=14,fetch(s);case 14:return i=e.sent,e.next=17,i.json();case 17:if((r=e.sent)!=={}){e.next=22;break}return N(!0),setTimeout((function(){return N(!1)}),1e3),e.abrupt("return");case 22:n.percent_change<0&&S(!1),n.percent_change="(".concat(n.percent_change,"%)"),n.symbol="(".concat(n.symbol,")"),x(n),l(r),T(!0),se();case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a,n,s,i,r,l,o,b,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.twelvedata.com/time_series?symbol=".concat(c,"&interval=5min&outputsize=78&apikey=").concat(ce),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:if(400!==(n=e.sent).code){e.next=11;break}return N(!0),setTimeout((function(){return N(!1)}),1e3),e.abrupt("return");case 11:for(s=n.values.length,i=[],r=[],l=[],o=[],b=[],d=0;d<s;d++)i.push(n.values[d].datetime),r.push(parseFloat(n.values[d].open)),l.push(parseFloat(n.values[d].high)),o.push(parseFloat(n.values[d].low)),b.push(parseFloat(n.values[d].close));U({dragmode:"zoom",margin:{r:10,t:25,b:40,l:60},showlegend:!1,xaxis:{autorange:!0,domain:[0,1],title:"Date",type:"date"},yaxis:{autorange:!0,domain:[0,1],type:"linear"},width:B,height:A}),L([{x:i,close:b,decreasing:{line:{color:"#f54748"}},high:l,increasing:{line:{color:"#29bb89"}},line:{color:"rgba(31,119,180,1)"},low:o,open:r,type:"candlestick",xaxis:"x",yaxis:"y"}]),H(!0),setTimeout((function(){return ne()}),3e5);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"stockpage",children:[Object(O.jsx)(u.a,{show:g,className:"alertdne",variant:"danger",onClose:function(){return N(!1)},dismissible:!0,children:Object(O.jsx)(u.a.Heading,{className:"alertHeading",children:" Symbol does not exist! "})}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"input-group mb-3",children:[Object(O.jsx)("input",{type:"text",className:"searchbar form-control",value:c,placeholder:"Company's symbol","aria-label":"Company's symbol","aria-describedby":"button-addon2",onChange:function(e){return n(e.target.value)}}),Object(O.jsx)("div",{className:"input-group-append",children:Object(O.jsx)("button",{className:"btn btn-primary",type:"button",id:"button-addon2",onClick:function(){ne()},children:"Search"})})]}),Object(O.jsxs)("div",{className:"firstRow  ".concat(_?"":"firstRowh"),children:[Object(O.jsxs)("div",{className:"company",children:[p.name," ",p.symbol]}),Object(O.jsx)("div",{className:"exchange",children:p.exchange})]}),Object(O.jsxs)("div",{className:"price  ".concat(_?"":"priceh"),children:[Object(O.jsx)("div",{className:"cvalue",children:p.close}),Object(O.jsx)("div",{className:"change  ".concat(w?"pos":"neg"),children:p.change}),Object(O.jsx)("div",{className:"percent_change  ".concat(w?"pos":"neg"),children:p.percent_change})]}),Object(O.jsx)("div",{ref:ae,className:"graph  ".concat(E?"":"graphh"),children:E?Object(O.jsx)(m.a,{data:I,layout:Q}):""}),Object(O.jsxs)("div",{className:"row details",children:[Object(O.jsxs)("div",{className:"col Column",children:[Object(O.jsxs)("div",{className:"block  ".concat(_?"":"blockh"),children:[_?Object(O.jsx)("div",{className:"title",children:"Previous Close"}):"",Object(O.jsx)("div",{className:"content",children:p.previous_close})]}),Object(O.jsxs)("div",{className:"block  ".concat(_?"":"blockh"),children:[_?Object(O.jsx)("div",{className:"title",children:"Open"}):"",Object(O.jsx)("div",{className:"content",children:p.open})]})]}),Object(O.jsxs)("div",{className:"col Column",children:[Object(O.jsxs)("div",{className:"block  ".concat(_?"":"blockh"),children:[_?Object(O.jsx)("div",{className:"title",children:"High"}):"",Object(O.jsx)("div",{className:"content",children:p.high})]}),Object(O.jsxs)("div",{className:"block  ".concat(_?"":"blockh"),children:[_?Object(O.jsx)("div",{className:"title",children:"Low"}):"",Object(O.jsx)("div",{className:"content",children:p.low})]})]}),Object(O.jsxs)("div",{className:"col Column",children:[Object(O.jsxs)("div",{className:"block  ".concat(_?"":"blockh"),children:[_?Object(O.jsx)("div",{className:"title",children:"Market Capitalization"}):"",Object(O.jsx)("div",{className:"content",children:r.MarketCapitalization})]}),Object(O.jsxs)("div",{className:"block  ".concat(_?"":"blockh"),children:[_?Object(O.jsx)("div",{className:"title",children:"Sector"}):"",Object(O.jsx)("div",{className:"content",children:r.Sector})]})]}),Object(O.jsxs)("div",{className:"col Column",children:[Object(O.jsxs)("div",{className:"block  ".concat(_?"":"blockh"),children:[_?Object(O.jsx)("div",{className:"title",children:"Volume"}):"",Object(O.jsx)("div",{className:"content",children:p.volume})]}),Object(O.jsxs)("div",{className:"block  ".concat(_?"":"blockh"),children:[_?Object(O.jsx)("div",{className:"title",children:"Average Volume"}):"",Object(O.jsx)("div",{className:"content",children:p.average_volume})]})]})]})]})]})},x=function(){return Object(O.jsx)(r.a,{children:Object(O.jsx)(l.c,{children:Object(O.jsx)(l.a,{path:"/",exact:!0,component:p})})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root")),v()}},[[43,1,2]]]);
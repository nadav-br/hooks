(this.webpackJsonpexamp=this.webpackJsonpexamp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),r=n.n(o),l=(n(10),n(2)),u=n.n(l),i=n(1),s=(n(12),function(){var e=Object(a.useContext)(d);console.log(e);var t=Object(a.useState)(!1),n=Object(i.a)(t,2),o=n[0],r=n[1];return c.a.createElement("div",null,c.a.createElement("button",{disabled:o,onClick:function(){r(e)}},"click to Disable"))});var m=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){document.title="You clicked ".concat(n," times")})),c.a.createElement("div",null,c.a.createElement("p",null,"You clicked ",n," times"),c.a.createElement("button",{onClick:function(){return o(n+1)}},"Click me"))},d=c.a.createContext(),f=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(0),l=Object(i.a)(r,2),f=l[0],b=l[1],p=Object(a.useState)([]),v=Object(i.a)(p,2),h=v[0],E=v[1];Object(a.useEffect)((function(){j()}),[]);var j=function(){var e,t;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(fetch("https://jsonplaceholder.typicode.com/users"));case 2:return e=n.sent,n.next=5,u.a.awrap(e.json());case 5:t=n.sent,E(t),console.log(t),fetch("https://react-hooks-update-c8dad.firebaseio.com/");case 9:case"end":return n.stop()}}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"You clicked ",f," times"),c.a.createElement("button",{disabled:n,onClick:function(){b(f+1),o(!0)}},"count"),h.map((function(e){return c.a.createElement("div",null,e.name,e.id," ",e.email)})),c.a.createElement(d.Provider,{value:!0},c.a.createElement(s,null)),c.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.a95296e4.chunk.js.map
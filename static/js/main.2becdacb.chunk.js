(this["webpackJsonpreact-mobx-do-1"]=this["webpackJsonpreact-mobx-do-1"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var u=n(0),c=n.n(u),r=n(3),i=n.n(r),s=(n(10),n(5)),b=(n(11),n(16)),o=n(1),j=Object(u.createContext)({bugs:["Centipede"],addBug:function(t){},get bugsCount(){return 0}}),a=function(t){var e=t.children,n=Object(b.a)((function(){return{bugs:["Centipede"],addBug:function(t){n.bugs.push(t)},get bugsCount(){return n.bugs.length}}}));return Object(o.jsx)(j.Provider,{value:n,children:e})},d=function(){var t=Object(u.useContext)(j);return Object(b.b)((function(){return Object(o.jsxs)("h1",{children:[t.bugsCount," ",t.bugsCount>1?"Bugs!":"Bug!"]})}))},g=function(){var t=Object(u.useContext)(j);return Object(b.b)((function(){return Object(o.jsx)("ul",{children:t.bugs.map((function(t){return Object(o.jsx)("li",{children:t},t)}))})}))},O=function(){var t=Object(u.useContext)(j),e=Object(u.useState)(""),n=Object(s.a)(e,2),c=n[0],r=n[1];return Object(o.jsxs)("form",{onSubmit:function(e){t.addBug(c),r(""),e.preventDefault()},children:[Object(o.jsx)("input",{type:"text",value:c,onChange:function(t){r(t.target.value)}}),Object(o.jsx)("button",{type:"submit",children:"Add"})]})};var l=function(){return Object(o.jsx)(a,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("main",{children:[Object(o.jsx)(d,{}),Object(o.jsx)(g,{}),Object(o.jsx)(O,{})]})})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,u=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),u(t),c(t),r(t),i(t)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.2becdacb.chunk.js.map
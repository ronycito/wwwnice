(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),u=(n(14),n(2)),l=n(1);function i(e){var t=e.item,n=e.onUpdate,c=e.onDelete,r=Object(a.useState)(!1),u=Object(l.a)(r,2),i=u[0],m=u[1];function s(){var e=Object(a.useState)(t.title),c=Object(l.a)(e,2),r=c[0],u=c[1];return o.a.createElement("form",{className:"todoUpdateForm",onSubmit:function(e){e.preventDefault()}},o.a.createElement("input",{type:"text",className:"todoInput",onChange:function(e){var t=e.target.value;u(t)},value:r}),o.a.createElement("button",{className:"button",onClick:function(){n(t.id,r),m(!1)}},"Update"))}function d(){return o.a.createElement("div",{className:"todoInfo"},o.a.createElement("span",{className:"todoTitle"},t.title),t.title," ",o.a.createElement("button",{className:"button",onClick:function(){return m(!0)}},"Edit"),o.a.createElement("button",{className:"buttonDelete",onClick:function(e){return c(t.id)}},"Delete"))}return o.a.createElement("div",{className:"todo"},i?o.a.createElement(s,null):o.a.createElement(d,null))}n(16);function m(){var e=Object(a.useState)("jeje"),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),m=Object(l.a)(r,2),s=m[0],d=m[1];function f(e){e.preventDefault();var t={id:crypto.randomUUID(),title:n,completed:!1},a=Object(u.a)(s);a.unshift(t),d(a),c("")}function b(e,t){var n=Object(u.a)(s);n.find(function(t){return t.id===e}).title=t,d(n)}function p(e){var t=s.filter(function(t){return t.id!==e});d(t)}return o.a.createElement("div",{className:"todoContainer"},o.a.createElement("form",{className:"todoCreateForm",onSubmit:f},o.a.createElement("input",{onChange:function(e){var t=e.target.value;c(t)},className:"todoInput",value:n}),o.a.createElement("input",{onClick:f,type:"submit",value:"Create todo",className:"buttonCreate"})),o.a.createElement("div",{className:"todosContainer"},s.map(function(e){return o.a.createElement(i,{key:e.id,item:e,onUpdate:b,onDelete:p})})))}var s=function(){return o.a.createElement(m,null)},d=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,19)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null))),d()},5:function(e,t,n){e.exports=n(18)}},[[5,3,2]]]);
//# sourceMappingURL=main.a82f7ad6.chunk.js.map
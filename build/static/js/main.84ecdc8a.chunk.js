(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),c=t.n(r),u=(t(19),t(2)),l=t(3),i=t.n(l),m="api/persons",s=function(){return i.a.get(m)},d=function(e){return i.a.post(m,e)},f=function(e){return i.a.delete("".concat(m,"/").concat(e))},h=function(e,n){return i.a.put("".concat(m,"/").concat(e),n)},v=function(e){var n=e.persons,t=e.handleRemovePerson;return o.a.createElement("div",null,n.map((function(e){return o.a.createElement("p",{key:e.id},e.name," ",e.number," ",o.a.createElement(g,{id:e.id,name:e.name,handleRemovePerson:t}))})))},g=function(e){var n=e.id,t=e.handleRemovePerson,a=e.name;return o.a.createElement("button",{value:n,name:a,onClick:t},"delete")},b=function(e){var n=e.name,t=e.value,a=e.onChange;return o.a.createElement("div",null,n,": ",o.a.createElement("input",{value:t,onChange:a}))},p=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{className:"message"},n)},E=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{className:"error"},n)},w=function(e){var n=e.value,t=e.onChange;return o.a.createElement(b,{name:"filter",value:n,onChange:t})},C=function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement(b,{name:"name",value:e.newName,onChange:e.handleNameChange}),o.a.createElement(b,{name:"number",value:e.newNumber,onChange:e.handleNumberChange}),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},j=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),i=l[0],m=l[1],g=Object(a.useState)(""),b=Object(u.a)(g,2),j=b[0],O=b[1],N=Object(a.useState)(""),S=Object(u.a)(N,2),k=S[0],y=S[1],D=Object(a.useState)(null),P=Object(u.a)(D,2),R=P[0],A=P[1],B=Object(a.useState)(null),I=Object(u.a)(B,2),J=I[0],L=I[1];Object(a.useEffect)((function(){s().then((function(e){console.log(e.data),r(e.data)}))}),[]);var T=function(e){A(e),setTimeout((function(){A(null)}),5e3)},W=function(e){L(e),setTimeout((function(){L(null)}),5e3)},x=function(){var e=[];return t.forEach((function(n){n.name.toLowerCase().includes(k.toLowerCase())&&e.push(n)})),console.log(e),e}();return console.log(x),o.a.createElement("div",null,o.a.createElement(p,{message:R}),o.a.createElement(E,{message:J}),o.a.createElement("h2",null,"Phonebook"),o.a.createElement(w,{value:k,onChange:function(e){e.preventDefault(),y(e.target.value)}}),o.a.createElement("h2",null,"Add a new"),o.a.createElement(C,{handleSubmit:function(e){e.preventDefault();var n={name:i,number:j},a=t.find((function(e){return e.name===i}));void 0!==a?window.confirm("".concat(i," is already added to the phonebook, replace the old number with a new one?"))&&h(a.id,n).then((function(e){r(t.map((function(n){return n.id!==a.id?n:e.data}))),T("Changed number for person ".concat(n.name)),m(""),O("")})).catch((function(e){W("Information of ".concat(n.name," has already been removed from the server")),s().then((function(e){r(e.data)}))})):d(n).then((function(e){r(t.concat(e.data)),T("Added new person ".concat(n.name)),m(""),O("")}))},handleNumberChange:function(e){e.preventDefault(),O(e.target.value)},handleNameChange:function(e){e.preventDefault(),m(e.target.value)},newNumber:j,newName:i}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(v,{persons:x,handleRemovePerson:function(e){e.preventDefault();var n=e.target.value,a=e.target.name;console.log(e.target.value),window.confirm("Delete ".concat(e.target.name,"?"))&&(console.log(n),f(n).then((function(e){console.log("Persons: ".concat(t)),r(t.filter((function(e){return e.id!=n}))),T("Removed person ".concat(a))})))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.84ecdc8a.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{105:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(58),r=n.n(s),l=n(16),o=n(13),i=n(17),u=n(8),j=n(4),b=(n(67),n(21)),O=n(122),d=n(124),h=n(18),p=n.n(h),m=n(61),f=n(123),x=(n(105),n(3));function g(e){var t=e.setShowRegister,n=Object(c.useState)(!1),a=Object(j.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(!1),u=Object(j.a)(o,2),b=u[0],d=u[1],h=Object(c.useRef)(),m=Object(c.useRef)(),g=Object(c.useRef)(),v=function(){var e=Object(i.a)(Object(l.a)().mark((function e(t){var n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:h.current.value,email:m.current.value,password:g.current.value},e.prev=2,e.next=5,p.a.post("/users/register",n);case 5:d(!1),r(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),d(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"registerContainer",children:[Object(x.jsxs)("div",{className:"logo",children:[Object(x.jsx)(O.a,{className:"logoIcon"}),Object(x.jsx)("span",{children:"LamaPin"})]}),Object(x.jsxs)("form",{onSubmit:v,children:[Object(x.jsx)("input",{autoFocus:!0,placeholder:"username",ref:h}),Object(x.jsx)("input",{type:"email",placeholder:"email",ref:m}),Object(x.jsx)("input",{type:"password",min:"6",placeholder:"password",ref:g}),Object(x.jsx)("button",{className:"registerBtn",type:"submit",children:"Register"}),s&&Object(x.jsx)("span",{className:"success",children:"Successfull. You can login now!"}),b&&Object(x.jsx)("span",{className:"failure",children:"Something went wrong!"})]}),Object(x.jsx)(f.a,{className:"registerCancel",onClick:function(){return t(!1)}})]})}n(109);function v(e){var t=e.setShowLogin,n=e.setCurrentUsername,a=e.myStorage,s=Object(c.useState)(!1),r=Object(j.a)(s,2),o=r[0],u=r[1],b=Object(c.useRef)(),d=Object(c.useRef)(),h=function(){var e=Object(i.a)(Object(l.a)().mark((function e(c){var s,r;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s={username:b.current.value,password:d.current.value},e.prev=2,e.next=5,p.a.post("/users/login",s);case 5:r=e.sent,n(r.data.username),a.setItem("user",r.data.username),t(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),u(!0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"loginContainer",children:[Object(x.jsxs)("div",{className:"logo",children:[Object(x.jsx)(O.a,{className:"logoIcon"}),Object(x.jsx)("span",{children:"LamaPin"})]}),Object(x.jsxs)("form",{onSubmit:h,children:[Object(x.jsx)("input",{autoFocus:!0,placeholder:"username",ref:b}),Object(x.jsx)("input",{type:"password",min:"6",placeholder:"password",ref:d}),Object(x.jsx)("button",{className:"loginBtn",type:"submit",children:"Login"}),o&&Object(x.jsx)("span",{className:"failure",children:"Something went wrong!"})]}),Object(x.jsx)(f.a,{className:"loginCancel",onClick:function(){return t(!1)}})]})}var w=function(){var e=window.localStorage,t=Object(c.useState)(e.getItem("user")),n=Object(j.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),h=Object(j.a)(r,2),f=h[0],w=h[1],S=Object(c.useState)(null),N=Object(j.a)(S,2),C=N[0],k=N[1],y=Object(c.useState)(null),R=Object(j.a)(y,2),L=R[0],z=R[1],I=Object(c.useState)(null),J=Object(j.a)(I,2),B=J[0],D=J[1],F=Object(c.useState)(null),A=Object(j.a)(F,2),P=A[0],E=A[1],T=Object(c.useState)(0),_=Object(j.a)(T,2),H=_[0],M=_[1],U=Object(c.useState)({latitude:47.040182,longitude:17.071727,zoom:4}),W=Object(j.a)(U,2),X=W[0],Y=W[1],q=Object(c.useState)(!1),K=Object(j.a)(q,2),V=K[0],Z=K[1],G=Object(c.useState)(!1),Q=Object(j.a)(G,2),$=Q[0],ee=Q[1],te=function(){var e=Object(i.a)(Object(l.a)().mark((function e(t){var n,c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:a,title:B,desc:P,rating:H,lat:L.lat,long:L.long},e.prev=2,e.next=5,p.a.post("/pins",n);case 5:c=e.sent,w([].concat(Object(o.a)(f),[c.data])),z(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=function(){var e=Object(i.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/pins");case 3:t=e.sent,w(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(x.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(x.jsxs)(b.c,Object(u.a)(Object(u.a)({},X),{},{mapboxApiAccessToken:"pk.eyJ1Ijoic2hhc2hhbmsyNjkiLCJhIjoiY2xsa3BvdWl4MXJhNDNscWhmaHJmZzdhNCJ9.07uEeCaH7PftJXKwreFvfg",width:"100%",height:"100%",transitionDuration:"200",mapStyle:"mapbox://styles/safak/cknndpyfq268f17p53nmpwira",onViewportChange:function(e){return Y(e)},onDblClick:a&&function(e){var t=Object(j.a)(e.lngLat,2),n=t[0],c=t[1];z({lat:c,long:n})},children:[f.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.a,{latitude:e.lat,longitude:e.long,offsetLeft:-3.5*X.zoom,offsetTop:-7*X.zoom,children:Object(x.jsx)(O.a,{style:{fontSize:7*X.zoom,color:a===e.username?"tomato":"slateblue",cursor:"pointer"},onClick:function(){return t=e._id,n=e.lat,c=e.long,k(t),void Y(Object(u.a)(Object(u.a)({},X),{},{latitude:n,longitude:c}));var t,n,c}})}),e._id===C&&Object(x.jsx)(b.b,{latitude:e.lat,longitude:e.long,closeButton:!0,closeOnClick:!1,onClose:function(){return k(null)},anchor:"left",children:Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("label",{children:"Place"}),Object(x.jsx)("h4",{className:"place",children:e.title}),Object(x.jsx)("label",{children:"Review"}),Object(x.jsx)("p",{className:"desc",children:e.desc}),Object(x.jsx)("label",{children:"Rating"}),Object(x.jsx)("div",{className:"stars",children:Array(e.rating).fill(Object(x.jsx)(d.a,{className:"star"}))}),Object(x.jsx)("label",{children:"Information"}),Object(x.jsxs)("span",{className:"username",children:["Created by ",Object(x.jsx)("b",{children:e.username})]}),Object(x.jsx)("span",{className:"date",children:Object(m.a)(e.createdAt)})]})},e._id)]})})),L&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.a,{latitude:L.lat,longitude:L.long,offsetLeft:-3.5*X.zoom,offsetTop:-7*X.zoom,children:Object(x.jsx)(O.a,{style:{fontSize:7*X.zoom,color:"tomato",cursor:"pointer"}})}),Object(x.jsx)(b.b,{latitude:L.lat,longitude:L.long,closeButton:!0,closeOnClick:!1,onClose:function(){return z(null)},anchor:"left",children:Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:te,children:[Object(x.jsx)("label",{children:"Title"}),Object(x.jsx)("input",{placeholder:"Enter a title",autoFocus:!0,onChange:function(e){return D(e.target.value)}}),Object(x.jsx)("label",{children:"Description"}),Object(x.jsx)("textarea",{placeholder:"Say us something about this place.",onChange:function(e){return E(e.target.value)}}),Object(x.jsx)("label",{children:"Rating"}),Object(x.jsxs)("select",{onChange:function(e){return M(e.target.value)},children:[Object(x.jsx)("option",{value:"1",children:"1"}),Object(x.jsx)("option",{value:"2",children:"2"}),Object(x.jsx)("option",{value:"3",children:"3"}),Object(x.jsx)("option",{value:"4",children:"4"}),Object(x.jsx)("option",{value:"5",children:"5"})]}),Object(x.jsx)("button",{type:"submit",className:"submitButton",children:"Add Pin"})]})})})]}),a?Object(x.jsx)("button",{className:"button logout",onClick:function(){s(null),e.removeItem("user")},children:"Log out"}):Object(x.jsxs)("div",{className:"buttons",children:[Object(x.jsx)("button",{className:"button login",onClick:function(){return ee(!0)},children:"Log in"}),Object(x.jsx)("button",{className:"button register",onClick:function(){return Z(!0)},children:"Register"})]}),V&&Object(x.jsx)(g,{setShowRegister:Z}),$&&Object(x.jsx)(v,{setShowLogin:ee,setCurrentUsername:s,myStorage:e})]}))})};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root"))},67:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.98fb8d47.chunk.js.map
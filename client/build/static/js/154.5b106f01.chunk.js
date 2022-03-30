"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[154],{1776:function(e,n,t){var s=t(4569),r=t.n(s);n.ZP=r().create({baseURL:"http://localhost:4000/api/v1",headers:{"Content-type":"application/json"}})},8456:function(e,n,t){t.d(n,{Z:function(){return o}});var s=t(3144),r=t(5671),a=t(1776),o=(0,s.Z)((function e(){(0,r.Z)(this,e)}));o.register=function(e){return a.ZP.post("/auth/register",e)},o.login=function(e){return a.ZP.post("/auth/login",e)},o.getUser=function(e){return a.ZP.get("/auth",{params:{id:e}})}},5972:function(e,n,t){t.d(n,{Z:function(){return l}});var s=t(8683),r=t(5987),a=t(2791),o=t(184),i=["name","placeholder","errorMessage"],l=(0,a.forwardRef)((function(e,n){var t=e.name,a=e.placeholder,l=e.errorMessage,c=(0,r.Z)(e,i);return(0,o.jsx)("div",{className:"input__container",children:(0,o.jsxs)("label",{htmlFor:t,children:[(0,o.jsx)("p",{children:a}),(0,o.jsx)("input",(0,s.Z)({className:"input__field",type:"text",placeholder:a,ref:n},c)),l?(0,o.jsx)("span",{className:"input__error",children:l}):null]})})}))},154:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var s=t(885),r=t(2791),a=t(3504),o=t(6871),i=t(8456),l=t(1570),c=t(3491),u=t(5972),d=t(6372),g=t(2977),h=t(184),f=function(){var e=(0,r.useState)(""),n=(0,s.Z)(e,2),t=n[0],f=n[1],m=(0,r.useState)(""),p=(0,s.Z)(m,2),x=p[0],Z=p[1],_=(0,r.useState)(""),j=(0,s.Z)(_,2),v=j[0],S=j[1],N=(0,r.useState)(""),k=(0,s.Z)(N,2),w=k[0],b=k[1],C=l.Z.useContext(),I=C.data.isLoading,E=C.setData,L=g.Z.useContext().setData,M=(0,o.s0)();return(0,r.useEffect)((function(){localStorage.removeItem("userId"),localStorage.removeItem("AuthToken")}),[]),(0,h.jsx)("section",{className:"login__container container",children:(0,h.jsxs)("section",{className:"login__content",children:[(0,h.jsx)(d.Z,{}),(0,h.jsx)("h2",{className:"login__title",children:"Hello Again!"}),(0,h.jsxs)("section",{className:"login__register",children:[(0,h.jsx)("span",{children:"Not registered?\xa0"}),(0,h.jsx)(a.rU,{className:"login__register--link",to:"/register",children:"Register"})]}),(0,h.jsxs)("form",{onSubmit:function(e){return e&&e.preventDefault(),t?x?(E({isLoading:!0}),void i.Z.login({email:t,password:x}).then((function(e){var n=e.data,t=n.token,s=n.user;E({user:s,token:t}),localStorage.setItem("userId",s._id),localStorage.setItem("AuthToken",t)})).then((function(){return M("/main")})).catch((function(e){console.log(e.response.message),Z(""),f(""),L({isShow:!0,isSuccess:!1,title:"Something went wrong!",subtitle:e.response.data.message})})).finally((function(){return E({isLoading:!1})}))):b("Enter password"):S("Enter email or nickname")},className:"login__form",children:[(0,h.jsxs)("section",{className:"login__inputs",children:[(0,h.jsx)(u.Z,{name:"email",placeholder:"Enter login or email",value:t,onChange:function(e){f(e.target.value),S("")},errorMessage:v}),(0,h.jsx)(u.Z,{name:"password",placeholder:"Enter password",value:x,onChange:function(e){Z(e.target.value),b("")},errorMessage:w})]}),(0,h.jsx)("section",{children:(0,h.jsx)(c.Z,{disabled:I,children:"Login"})})]})]})})}}}]);
//# sourceMappingURL=154.5b106f01.chunk.js.map
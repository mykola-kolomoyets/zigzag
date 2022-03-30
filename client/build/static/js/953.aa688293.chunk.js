/*! For license information please see 953.aa688293.chunk.js.LICENSE.txt */
(self.webpackChunkclient=self.webpackChunkclient||[]).push([[953],{7757:function(t,e,r){t.exports=r(9727)},1776:function(t,e,r){"use strict";var n=r(4569),i=r.n(n);e.ZP=i().create({baseURL:"http://localhost:4000/api/v1",headers:{"Content-type":"application/json"}})},8456:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(3144),i=r(5671),a=r(1776),o=(0,n.Z)((function t(){(0,i.Z)(this,t)}));o.register=function(t){return a.ZP.post("/auth/register",t)},o.login=function(t){return a.ZP.post("/auth/login",t)},o.getUser=function(t){return a.ZP.get("/auth",{params:{id:t}})}},2704:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(3144),i=r(5671),a=r(1776),o=(0,n.Z)((function t(){(0,i.Z)(this,t)}));o.get=function(t){return a.ZP.get("/stats",{params:{id:t}})},o.update=function(t,e){return a.ZP.post("/stats/update",{params:{id:t},data:e})}},5972:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(8683),i=r(5987),a=r(2791),o=r(184),c=["name","placeholder","errorMessage"],u=(0,a.forwardRef)((function(t,e){var r=t.name,a=t.placeholder,u=t.errorMessage,s=(0,i.Z)(t,c);return(0,o.jsx)("div",{className:"input__container",children:(0,o.jsxs)("label",{htmlFor:r,children:[(0,o.jsx)("p",{children:a}),(0,o.jsx)("input",(0,n.Z)({className:"input__field",type:"text",placeholder:a,ref:e},s)),u?(0,o.jsx)("span",{className:"input__error",children:u}):null]})})}))},3129:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});r(2791);var n=r(3504);var i=r.p+"static/media/logo-mini.b8e1f42e846f5c873a01b34c72415860.svg",a=r(184),o=function(){return(0,a.jsxs)("section",{className:"navbar",children:[(0,a.jsx)("div",{className:"navbar__logo",children:(0,a.jsx)("img",{src:i,alt:"ZigZag"})}),(0,a.jsxs)("nav",{className:"navbar__links",children:[(0,a.jsx)(n.rU,{className:"navbar__link",to:"/main",children:"Main"}),(0,a.jsx)(n.rU,{className:"navbar__link",to:"/profile",children:"Profile"}),(0,a.jsx)(n.rU,{className:"navbar__link",to:"/login",children:"Logout"})]})]})}},8953:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return F}});var n=r(8683),i=r(885),a=r(2791),o=r(6871),c=r(8456),u=r(5780),s=r(3491),l=r(5972),f=r(3129),h=r(1694),d=r.n(h),m=r(184),v=function(t){var e=t.items,r=t.label,i=t.inputProps,a=t.className,o=t.value,c=d()("radio",a,{}),u=function(t){return d()("radio__container text",{radio__container_active:o===t,radio__container_disabled:null===i||void 0===i?void 0:i.disabled})};return(0,m.jsxs)("div",{className:c,children:[r&&(0,m.jsx)("label",{className:"radio__label label",children:r}),(0,m.jsx)("div",{className:"radio__inputs-wrapper",children:e.map((function(t,e){var r=t.label,a=t.value;return(0,m.jsxs)("label",{className:u(a),children:[r,(0,m.jsx)("input",(0,n.Z)((0,n.Z)({},i),{},{className:"radio__input",type:"radio",checked:o===a,value:a})),(0,m.jsx)("span",{className:d()("radio__checkmark",{radio__checkmark_disabled:null===i||void 0===i?void 0:i.disabled})})]},e)}))})]})},p=function(t){var e,r=t.isTicking,n=(0,a.useState)(0),o=(0,i.Z)(n,2),c=o[0],s=o[1];return(0,a.useEffect)((function(){return e=setInterval((function(){s((function(t){return t+1}))}),1e3),function(){clearInterval(e)}}),[r]),(0,m.jsx)("section",{className:"timer",children:(0,m.jsx)("p",{className:"timer__text",children:(0,u.ZC)(c)})})},y=r(1570),g=r(3592),x=r(8480);function b(t,e,r,n,i,a,o){try{var c=t[a](o),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,i)}var _=r(907);var w=r(181);function j(t){return function(t){if(Array.isArray(t))return(0,_.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,w.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Z=r(7757),N=r.n(Z),k=r(2704),L=function(t){var e=t.content,r=t.row,n=t.column,i=g.Z.useContext().data,a=i.onCellClick,o=i.field,c=i.lastTry,s=y.Z.useContext().data.difficulty,l=C(e,r,n,o,c);return(0,m.jsx)("div",{className:d()("cell__container",{cell__available:s===u.av.easy&&l,cell__filled:0!==Number(e)}),onClick:function(){return l?a(r,n,o,c):{}},children:e})},E=function(t){var e=t.content,r=t.number,n=e.map((function(t,e){return(0,m.jsx)(L,{row:r,column:e,content:t},t+e)}));return(0,m.jsx)("section",{className:"row__container",children:n})},S=r(2977),C=function(t,e,r,n,i){var a=!0;if(void 0!=i.row&&void 0!=i.column){var o=Math.abs(r-i.column),c=Math.abs(e-i.row);a=0===Number(t)&&(2===o&&1===c||1===o&&2===c)}return a},O=function(t,e,r){var n=0;return[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[-1,2],[1,-2],[-1,-2]].forEach((function(a){var o=(0,i.Z)(a,2),c=o[0],u=o[1],s=e+c,l=r+u;s>=0&&s<t.length&&l>=0&&l<t[0].length&&"0"===t[s][l]&&n++})),n},P=function(t){return t.reduce((function(t,e){return[].concat(j(t),[e.some((function(t){return"0"===t}))])}),[]).every((function(t){return!t}))},T=function(t){var e=t.onFinish,r=g.Z.useContext(),n=r.data,i=n.fieldSize,o=n.field,c=n.time,u=r.setData,s=y.Z.useContext(),l=s.data.user._id,f=s.setData,h=x.Z.useContext().setData,d=S.Z.useContext().setData,v=function(){var t,r=(t=N().mark((function t(r,n,i,a){var o,s;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=i.slice(),s=null!==a&&void 0!==a&&a.number?Number(o[a.row][a.column])+1:1,o[r][n]=s.toString(),u({field:o,lastTry:{row:r,column:n,number:s,moves:a.moves+1}}),0!==O(o,r,n)){t.next=13;break}return t.next=8,d({isShow:!0,isSuccess:!0,title:"Game Over",subtitle:P(i)?"YOU WIN!":"YOU LOSE!"});case 8:return e(),u({lastTry:{row:null,column:null,number:0,moves:0}}),f({isLoading:!0}),t.next=13,k.Z.update(l,{moves:a.moves+1,bestGame:{time:c,field:{width:i[0].length,height:i.length}}}).then((function(t){var e=t.data;console.log(e),h(e)})).finally((function(){return f({isLoading:!1})}));case 13:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function o(t){b(a,n,i,o,c,"next",t)}function c(t){b(a,n,i,o,c,"throw",t)}o(void 0)}))});return function(t,e,n,i){return r.apply(this,arguments)}}();(0,a.useEffect)((function(){var t=Array(i.width).fill("0").map((function(){return Array(i.height).fill("0")}));u({field:t,onCellClick:v,lastTry:{row:null,column:null,number:0,moves:0}}),u({onCellClick:v})}),[i]);var p=o.map((function(t,e){return(0,m.jsx)(E,{content:t,number:e},"row".concat(e))}));return(0,m.jsx)("section",{children:p})},F=function(){var t=y.Z.useContext(),e=t.data,r=e.user,h=r._id,d=r.name,b=e.token,_=e.difficulty,w=t.setData,j=x.Z.useContext().setData,Z=g.Z.useContext().setData,N=S.Z.useContext().setData,k=(0,a.useRef)(null),L=(0,a.useRef)(null),E=(0,a.useState)(!1),C=(0,i.Z)(E,2),O=C[0],P=C[1],F=(0,a.useState)(!1),G=(0,i.Z)(F,2),I=G[0],A=G[1],D=function(){A(!0),P(!1)},M=(0,o.s0)();return(0,a.useEffect)((function(){var t=h||localStorage.getItem("userId");c.Z.getUser(t).then((function(t){var e=t.data,r=e.user,i=e.stats;w({user:r}),j((0,n.Z)({},i))})).catch((function(t){M("/login")}))}),[h,b]),(0,m.jsxs)("main",{className:"main__container container",children:[(0,m.jsx)(f.Z,{}),(0,m.jsx)("section",{className:"main__content",children:O?(0,m.jsxs)("section",{className:"main__game",children:[(0,m.jsx)(p,{isTicking:!I}),(0,m.jsx)(T,{onFinish:D}),(0,m.jsx)(s.Z,{onClick:D,children:"Finish Game"})]}):(0,m.jsxs)("section",{className:"main__menu",children:[(0,m.jsxs)("h1",{className:"main__menu--title",children:[(0,m.jsx)("span",{children:"Welcome back,"}),(0,m.jsx)("br",{}),d]}),(0,m.jsx)("h4",{className:"main__menu--subtitle",children:"Start the new game"}),(0,m.jsxs)("section",{className:"main__menu--field-inputs",children:[(0,m.jsx)(l.Z,{placeholder:"Field width",type:"number",name:"width",ref:k,errorMessage:""}),(0,m.jsx)(l.Z,{placeholder:"Field height",type:"number",name:"width",ref:L,errorMessage:""}),(0,m.jsx)(v,{label:"Difficulty",value:_,items:[{value:u.av.easy,label:"Easy"},{value:u.av.middle,label:"Middle"}],inputProps:{onChange:function(t){w({difficulty:t.target.value})}}})]}),(0,m.jsx)(s.Z,{onClick:function(){var t=[k,L].map((function(t){var e;return(null===(e=t.current)||void 0===e?void 0:e.value)||0})),e=(0,i.Z)(t,2),r=e[0],n=e[1];if(!r||!n||Number(r)<4||Number(n)<4||Number(r)>10||Number(n)>10)return N({isShow:!0,isSuccess:!1,title:"Field is invalid!",subtitle:"Enter field width and height minimum 4 and maximum 10"});var a={width:Number(r),height:Number(n)};Z({fieldSize:a}),P(!0)},children:"Start Game"})]})})]})}},1694:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)){if(r.length){var o=i.apply(null,r);o&&t.push(o)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&t.push(c);else t.push(r.toString())}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(r=function(){return i}.apply(e,[]))||(t.exports=r)}()},9727:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),o=new E(n||[]);return a._invoke=function(t,e,r){var n=f;return function(i,a){if(n===d)throw new Error("Generator is already running");if(n===m){if("throw"===i)throw a;return C()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var c=N(o,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?m:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=m,r.method="throw",r.arg=u.arg)}}}(t,r,o),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",m="completed",v={};function p(){}function y(){}function g(){}var x={};u(x,a,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(S([])));_&&_!==r&&n.call(_,a)&&(x=_);var w=g.prototype=p.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function Z(t,e){function r(i,a,o,c){var u=l(t[i],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,o,c)}),(function(t){r("throw",t,o,c)})):e.resolve(f).then((function(t){s.value=t,o(s)}),(function(t){return r("throw",t,o,c)}))}c(u.arg)}var i;this._invoke=function(t,n){function a(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(a,a):a()}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:C}}function C(){return{value:e,done:!0}}return y.prototype=g,u(w,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},j(Z.prototype),u(Z.prototype,o,(function(){return this})),t.AsyncIterator=Z,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new Z(s(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},j(w),u(w,c,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=953.aa688293.chunk.js.map
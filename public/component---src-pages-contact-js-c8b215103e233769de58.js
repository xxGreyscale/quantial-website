(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Cuy+":function(e,t,c){"use strict";c.r(t);var s=c("nKUr"),l=c("q1tI"),n=c("Bl7J"),a=c("7vrA"),r=c("vrFN"),o=(c("WF3O"),c("boqk")),i=c.n(o),d=c("Tgqd"),m=void 0,u=function(e){e.preventDefault();var t=e.target,c=new FormData(t),s=new XMLHttpRequest;s.open(t.method,t.action),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status?(t.reset(),m.setState({status:"SUCCESS"})):m.setState({status:"ERROR"}))},s.send(c)};t.default=function(){var e=Object(l.useState)(!1),t=e[0],c=e[1],o=Object(l.useState)(!1),m=o[0],j=o[1];return"undefined"!=typeof window&&(window.addEventListener("scroll",(function(){window.scrollY>=60*window.innerHeight/100?c(!0):c(!1)})),window.addEventListener("scroll",(function(){window.scrollY>=120*window.innerHeight/100?j(!0):j(!1)}))),Object(l.useEffect)((function(){console.log("effect")}),[m,t]),Object(l.useEffect)((function(){return function(){console.log("clean up")}}),[]),Object(s.jsxs)(n.a,{children:[Object(s.jsx)(r.a,{title:"Contact Us"}),Object(s.jsx)("div",{className:"contacts carousel",children:Object(s.jsxs)(a.a,{className:"h-100 w-100",children:[Object(s.jsx)("div",{className:"d-flex h-100 align-items-center",children:Object(s.jsx)("div",{className:"d-block pb-3 carousel-content w-100",children:Object(s.jsxs)("div",{className:"row mt-5 mt-md-0 mt-lg-0",children:[Object(s.jsxs)("div",{className:"col-12 col-lg",children:[Object(s.jsx)("h1",{className:"my-0",children:"Get"}),Object(s.jsx)("h1",{className:"m-0",children:"In Touch"}),Object(s.jsx)("div",{className:"subtitle my-3",children:Object(s.jsx)("p",{className:"pt-3 description",children:"We are your solution."})})]}),Object(s.jsx)("div",{className:"col-12 col-lg",children:Object(s.jsx)("div",{className:"d-block d-lg-flex w-100 justify-content-end",children:Object(s.jsxs)("div",{className:"d-block quick-nav-container text-left text-lg-right mt-4 mt-md-3 mt-lg-0",children:[Object(s.jsx)("span",{className:m?"d-none":t?"contacts scrolled font-weight-bold":"secondary quick-nav title font-weight-bold",children:"CONTACTS"}),Object(s.jsxs)("ul",{className:m?"d-lg-none":t?"mt-2 contacts scrolled":"mt-2 font-weight-normal",children:[Object(s.jsxs)("li",{style:{gridGap:"0rem"},className:"my-1",children:["6th Floor, Tanzanite Park,",Object(s.jsx)("br",{})," Old Bagamoyo Road,",Object(s.jsx)("br",{}),"Dar es Salaam, TANZANIA"]}),Object(s.jsxs)("li",{style:{gridGap:"0rem"},className:"my-1",children:["PHONE:",Object(s.jsx)("br",{}),"+255 785 083 324"]}),Object(s.jsxs)("li",{style:{gridGap:"0rem"},className:"my-1",children:["EMAIL:",Object(s.jsx)("br",{}),"info@quantial.solutions"]})]})]})})})]})})}),Object(s.jsx)("div",{id:"scroll_button",className:"d-block w-100",children:Object(s.jsxs)("div",{className:"d-block",children:[Object(s.jsx)("span",{className:"d-block text-center text-md-center text-lg-center scroll-label","aria-hidden":"true",onClick:function(){return i()("#about_us")},children:"WRITE US"}),Object(s.jsx)("div",{className:"d-block",children:Object(s.jsx)("div",{className:"scroll-container mx-auto mx-md-auto mx-lg-auto","aria-hidden":"true",onClick:function(){return i()("#write_us")},children:Object(s.jsx)(d.b,{className:"d-flex d-justify-content-center scroll-down text-center"})})})]})})]})}),Object(s.jsx)("section",{className:"content",id:"write_us",children:Object(s.jsx)(a.a,{children:Object(s.jsxs)("div",{className:"w-100 w-lg-63 d-block",children:[Object(s.jsx)("h2",{className:"divider",children:"write us"}),Object(s.jsx)("p",{className:"para-1",children:"Write us and we will get back to as soon as possible. Or call by the contacts provided on the right."}),Object(s.jsxs)("form",{method:"post",onSubmit:u.bind,action:"https://formspree.io/p/1527181724469952462/f/contact",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(s.jsx)("input",{type:"text",className:"form-control rounded-sm",name:"name",id:"name","aria-describedby":"nameHelp",placeholder:"full name"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(s.jsx)("input",{type:"email",className:"form-control rounded-sm",name:"email",id:"email","aria-describedby":"emailHelp",placeholder:"email@email.com"}),Object(s.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"subject",children:"Subject:"}),Object(s.jsx)("input",{type:"text",className:"form-control rounded-sm",name:"subject",id:"subject",placeholder:"subject","aria-describedby":"subjectHelp"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(s.jsx)("textarea",{className:"form-control rounded-sm",id:"message",placeholder:"How may we help you?",rows:"8",name:"message"})]}),Object(s.jsx)("div",{className:"d-flex justify-content-end",children:Object(s.jsx)("button",{className:"btn btn-sm-lg",type:"submit",children:"Submit"})})]})]})})})]})}},Lnxd:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var s=c("q1tI"),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=s.createContext&&s.createContext(l),a=function(){return(a=Object.assign||function(e){for(var t,c=1,s=arguments.length;c<s;c++)for(var l in t=arguments[c])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},r=function(e,t){var c={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(c[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(s=Object.getOwnPropertySymbols(e);l<s.length;l++)t.indexOf(s[l])<0&&(c[s[l]]=e[s[l]])}return c};function o(e){return function(t){return s.createElement(i,a({attr:a({},e.attr)},t),function e(t){return t&&t.map((function(t,c){return s.createElement(t.tag,a({key:c},t.attr),e(t.child))}))}(e.child))}}function i(e){var t=function(t){var c,l=e.size||t.size||"1em";t.className&&(c=t.className),e.className&&(c=(c?c+" ":"")+e.className);var n=e.attr,o=e.title,i=r(e,["attr","title"]);return s.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,i,{className:c,style:a({color:e.color||t.color},t.style,e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&s.createElement("title",null,o),e.children)};return void 0!==n?s.createElement(n.Consumer,null,(function(e){return t(e)})):t(l)}},WF3O:function(e,t,c){},boqk:function(e,t,c){"use strict";t.__esModule=!0,t.default=void 0;var s=function(e,t){void 0===t&&(t="start");var c=document.querySelector(e);return!!c&&(c.scrollIntoView({behavior:"smooth",block:t}),!0)};t.default=s}}]);
//# sourceMappingURL=component---src-pages-contact-js-c8b215103e233769de58.js.map
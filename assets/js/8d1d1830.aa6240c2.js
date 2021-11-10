"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81878:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"api-console-event",title:"ConsoleEvent"},s=void 0,p={unversionedId:"api-console-event",id:"version-1.5/api-console-event",isDocsHomePage:!1,title:"ConsoleEvent",description:"rawEvent",source:"@site/versioned_docs/version-1.5/api-console-event.md",sourceDirName:".",slug:"/api-console-event",permalink:"/docs/api-console-event",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.5/api-console-event.md",tags:[],version:"1.5",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"api-console-event",title:"ConsoleEvent"},sidebar:"version-1.5/api",previous:{title:"ConsoleContext",permalink:"/docs/api-console-context"}},c=[{value:"<code>rawEvent</code>",id:"rawevent",children:[],level:4},{value:"<code>isMessage</code>",id:"ismessage",children:[],level:4},{value:"<code>message</code>",id:"message",children:[],level:4},{value:"<code>isText</code>",id:"istext",children:[],level:4},{value:"<code>text</code>",id:"text",children:[],level:4},{value:"<code>isPayload</code>",id:"ispayload",children:[],level:4},{value:"<code>payload</code>",id:"payload",children:[],level:4}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"rawevent"},(0,o.kt)("inlineCode",{parentName:"h4"},"rawEvent")),(0,o.kt)("p",null,"Underlying raw event from Console."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"event.rawEvent;\n// {\n//   message: {\n//     text: 'Awesome.',\n//   },\n// }\n")),(0,o.kt)("h4",{id:"ismessage"},(0,o.kt)("inlineCode",{parentName:"h4"},"isMessage")),(0,o.kt)("p",null,"Determine if the event is a message event."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"event.isMessage; // true\n")),(0,o.kt)("h4",{id:"message"},(0,o.kt)("inlineCode",{parentName:"h4"},"message")),(0,o.kt)("p",null,"The message object from Console raw event."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"event.message;\n// {\n//   text: 'Awesome.',\n// }\n")),(0,o.kt)("h4",{id:"istext"},(0,o.kt)("inlineCode",{parentName:"h4"},"isText")),(0,o.kt)("p",null,"Determine if the event is a message event which includes text."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"event.isText; // true\n")),(0,o.kt)("h4",{id:"text"},(0,o.kt)("inlineCode",{parentName:"h4"},"text")),(0,o.kt)("p",null,"The text string from Console raw event."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"event.text; // 'Awesome.'\n")),(0,o.kt)("h4",{id:"ispayload"},(0,o.kt)("inlineCode",{parentName:"h4"},"isPayload")),(0,o.kt)("p",null,"Determine if the event is a payload event."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"event.isPayload; // true\n")),(0,o.kt)("h4",{id:"payload"},(0,o.kt)("inlineCode",{parentName:"h4"},"payload")),(0,o.kt)("p",null,"The payload string from Console raw event."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"event.payload; // 'MY_PAYLOAD'\n")))}u.isMDXComponent=!0}}]);
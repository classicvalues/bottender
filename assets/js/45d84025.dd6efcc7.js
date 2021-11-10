"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6582:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"channel-telegram-handling-events",title:"Handling Telegram Events",original_id:"channel-telegram-handling-events"},s=void 0,c={unversionedId:"channel-telegram-handling-events",id:"version-1.3.1/channel-telegram-handling-events",isDocsHomePage:!1,title:"Handling Telegram Events",description:"Text Events",source:"@site/versioned_docs/version-1.3.1/channel-telegram-handling-events.md",sourceDirName:".",slug:"/channel-telegram-handling-events",permalink:"/docs/1.3.1/channel-telegram-handling-events",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.3.1/channel-telegram-handling-events.md",tags:[],version:"1.3.1",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-telegram-handling-events",title:"Handling Telegram Events",original_id:"channel-telegram-handling-events"},sidebar:"version-1.3.1/docs",previous:{title:"Telegram Setup",permalink:"/docs/1.3.1/channel-telegram-setup"},next:{title:"Sending Telegram Messages",permalink:"/docs/1.3.1/channel-telegram-sending-messages"}},p=[{value:"Text Events",id:"text-events",children:[],level:2},{value:"Payload Events",id:"payload-events",children:[],level:2},{value:"Handling Events with Router",id:"handling-events-with-router",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"text-events"},"Text Events"),(0,o.kt)("p",null,"The most common events are text message events. To determine whether the event is a text message event, you may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"context.event.isText")," boolean value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isText) {\n    // handling the text message event\n  }\n}\n")),(0,o.kt)("p",null,"You can get the text content using ",(0,o.kt)("inlineCode",{parentName:"p"},"context.event.text")," and use it in the reply:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isText) {\n    await context.sendText(`received the text message: ${context.event.text}`);\n  }\n}\n")),(0,o.kt)("h2",{id:"payload-events"},"Payload Events"),(0,o.kt)("p",null,"Payload events can be triggered by keyboards. To determine whether the event is a payload event, you may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"context.event.isPayload")," boolean value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isPayload) {\n    // handling the payload event\n  }\n}\n")),(0,o.kt)("p",null,"You can get the payload content using ",(0,o.kt)("inlineCode",{parentName:"p"},"context.event.payload")," to use it in the reply:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isPayload) {\n    await context.sendText(`received the payload: ${context.event.payload}`);\n  }\n}\n")),(0,o.kt)("h2",{id:"handling-events-with-router"},"Handling Events with Router"),(0,o.kt)("p",null,"Bottender offers a bunch of helpers to route within your Telegram or multi-platform app. To learn more about how to use those Telegram particular routes with router, check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.3.1/channel-telegram-routing"},"Telegram Routing"),"."))}u.isMDXComponent=!0}}]);
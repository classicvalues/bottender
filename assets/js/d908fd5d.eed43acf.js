"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),v=a,h=d["".concat(c,".").concat(v)]||d[v]||u[v]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24708:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>s,toc:()=>p,default:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"channel-slack-handling-events",title:"Handling Slack Events",original_id:"channel-slack-handling-events"},c=void 0,s={unversionedId:"channel-slack-handling-events",id:"version-1.3.1/channel-slack-handling-events",isDocsHomePage:!1,title:"Handling Slack Events",description:"Text Events",source:"@site/versioned_docs/version-1.3.1/channel-slack-handling-events.md",sourceDirName:".",slug:"/channel-slack-handling-events",permalink:"/docs/1.3.1/channel-slack-handling-events",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.3.1/channel-slack-handling-events.md",tags:[],version:"1.3.1",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-slack-handling-events",title:"Handling Slack Events",original_id:"channel-slack-handling-events"},sidebar:"version-1.3.1/docs",previous:{title:"Slack Setup",permalink:"/docs/1.3.1/channel-slack-setup"},next:{title:"Sending Slack Messages",permalink:"/docs/1.3.1/channel-slack-sending-messages"}},p=[{value:"Text Events",id:"text-events",children:[],level:2},{value:"Handling Events with Router",id:"handling-events-with-router",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"text-events"},"Text Events"),(0,o.kt)("p",null,"The most common events are text message events. To determine whether the event is a text message event, you may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"context.event.isText")," boolean value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isText) {\n    // handling the text message event\n  }\n}\n")),(0,o.kt)("p",null,"You can get the text content using ",(0,o.kt)("inlineCode",{parentName:"p"},"context.event.text")," to use it in the reply:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isText) {\n    await context.sendText(`received the text message: ${context.event.text}`);\n  }\n}\n")),(0,o.kt)("h2",{id:"handling-events-with-router"},"Handling Events with Router"),(0,o.kt)("p",null,"Bottender offers a bunch of helpers to route within your Slack or multi-platform app. To learn more about how to use those Slack particular routes with router, check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.3.1/channel-slack-routing"},"Slack Routing"),"."))}d.isMDXComponent=!0}}]);
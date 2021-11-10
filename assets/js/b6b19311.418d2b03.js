"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35174],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>v});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),v=a,h=u["".concat(c,".").concat(v)]||u[v]||p[v]||o;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},59655:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>s,toc:()=>d,default:()=>u});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={id:"channel-slack-handling-events",title:"Handling Slack Events",original_id:"channel-slack-handling-events"},c=void 0,s={unversionedId:"channel-slack-handling-events",id:"version-1.1.0/channel-slack-handling-events",isDocsHomePage:!1,title:"Handling Slack Events",description:"Handling Text Events",source:"@site/versioned_docs/version-1.1.0/channel-slack-handling-events.md",sourceDirName:".",slug:"/channel-slack-handling-events",permalink:"/docs/1.1.0/channel-slack-handling-events",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.1.0/channel-slack-handling-events.md",tags:[],version:"1.1.0",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-slack-handling-events",title:"Handling Slack Events",original_id:"channel-slack-handling-events"},sidebar:"version-1.1.0/docs",previous:{title:"Slack Setup",permalink:"/docs/1.1.0/channel-slack-setup"},next:{title:"Sending Slack Messages",permalink:"/docs/1.1.0/channel-slack-sending-messages"}},d=[{value:"Handling Text Events",id:"handling-text-events",children:[],level:2},{value:"Handling Events with Router",id:"handling-events-with-router",children:[],level:2}],p={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"handling-text-events"},"Handling Text Events"),(0,o.kt)("p",null,"The most common event that your bot would ever receive is text message. To determine whether the event is a text message event, you may use ",(0,o.kt)("inlineCode",{parentName:"p"},"context.event.isText")," boolean value to do that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isText) {\n    // handling the text message event\n  }\n}\n")),(0,o.kt)("p",null,"You can get the text content using ",(0,o.kt)("inlineCode",{parentName:"p"},"context.event.text")," and use it in the reply:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isText) {\n    await context.sendText(`received the text message: ${context.event.text}`);\n  }\n}\n")),(0,o.kt)("h2",{id:"handling-events-with-router"},"Handling Events with Router"),(0,o.kt)("p",null,"Bottender offers a bunch of helpers to routes within your Slack or multi-platform application. To learn more, please check out Bottender's doc, ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/channel-slack-routing"},"Slack Routing"),"."))}u.isMDXComponent=!0}}]);
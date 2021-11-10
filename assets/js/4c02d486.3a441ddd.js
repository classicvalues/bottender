"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45630],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(v,s(s({ref:n},d),{},{components:t})):a.createElement(v,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},43764:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),s=["components"],i={id:"channel-messenger-handling-events",title:"Handling Messenger Events"},l=void 0,c={unversionedId:"channel-messenger-handling-events",id:"channel-messenger-handling-events",isDocsHomePage:!1,title:"Handling Messenger Events",description:"For a Messenger bot, the two most frequent Messenger events are Text Event and Payload Event.",source:"@site/../docs/channel-messenger-handling-events.md",sourceDirName:".",slug:"/channel-messenger-handling-events",permalink:"/docs/next/channel-messenger-handling-events",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/../docs/channel-messenger-handling-events.md",tags:[],version:"current",lastUpdatedBy:"chentsulin",lastUpdatedAt:1586189427,formattedLastUpdatedAt:"4/7/2020",frontMatter:{id:"channel-messenger-handling-events",title:"Handling Messenger Events"},sidebar:"docs",previous:{title:"Messenger Setup",permalink:"/docs/next/channel-messenger-setup"},next:{title:"Sending Messenger Messages",permalink:"/docs/next/channel-messenger-sending-messages"}},d=[{value:"Enable Messenger Events",id:"enable-messenger-events",children:[],level:2},{value:"Text Events",id:"text-events",children:[],level:2},{value:"Payload Events",id:"payload-events",children:[],level:2},{value:"Media Related Events",id:"media-related-events",children:[],level:2},{value:"Delivery/Read Events",id:"deliveryread-events",children:[],level:2},{value:"Sticker Events",id:"sticker-events",children:[],level:2},{value:"Handling Events with Router",id:"handling-events-with-router",children:[],level:2}],p={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For a Messenger bot, the two most frequent Messenger events are ",(0,r.kt)("inlineCode",{parentName:"p"},"Text Event")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Payload Event.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Text Event")," is triggered when a user inputs text."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Payload Event")," can be triggered by postback buttons on all kinds of templates, buttons, persistent menu, or quick replies.")),(0,r.kt)("p",null,"Apart from the above events, Messenger also supports advanced events for better user experience. For example, ",(0,r.kt)("a",{parentName:"p",href:"#media-related-events"},(0,r.kt)("inlineCode",{parentName:"a"},"Media Related Events"))," offer a bunch of events when users send a piece of rich media to a bot, for instance, image, video, audio, and file. ",(0,r.kt)("a",{parentName:"p",href:"#deliveryread-events"},"Delivery/Read Event")," is handy while calculating how many users received a broadcast message. A humor response of ",(0,r.kt)("a",{parentName:"p",href:"#sticker-events"},"Sticker Event"),", makes your bot more human-like."),(0,r.kt)("h2",{id:"enable-messenger-events"},"Enable Messenger Events"),(0,r.kt)("p",null,"Due to Facebook's policy, you have to subscribe to the event types you need.\nHence, in the development of each bot, remember to enable Messenger events from ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps/"},"Facebook Developer Console"),". Or, you can enable Messenger events by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"bottender.config.js"),"."),(0,r.kt)("p",null,"For example, if your bot responds to ",(0,r.kt)("inlineCode",{parentName:"p"},"Text Event")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Payload Event"),", you may enable the above Messenger events by writing your ",(0,r.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  channels: {\n    messenger: {\n      fields: ['messages', 'messaging_postbacks'],\n    },\n  },\n};\n")),(0,r.kt)("p",null,"And, make the config works by the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"bottender messenger webhook set\n")),(0,r.kt)("h2",{id:"text-events"},"Text Events"),(0,r.kt)("p",null,"For a bot, the most common event is ",(0,r.kt)("inlineCode",{parentName:"p"},"Text Event"),". To determine whether the event type is ",(0,r.kt)("inlineCode",{parentName:"p"},"Text Event"),", you may check the boolean value of ",(0,r.kt)("inlineCode",{parentName:"p"},"context.event.isText"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isText) {\n    // handling the text message event\n  }\n}\n")),(0,r.kt)("p",null,"You can get the text content from ",(0,r.kt)("inlineCode",{parentName:"p"},"context.event.text")," and use it in the reply. A common usage of repeating user input is for confirmation, e.g., booking a hotel or a flight."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isText) {\n    await context.sendText(`received the text message: ${context.event.text}`);\n  }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," You must enable events - ",(0,r.kt)("inlineCode",{parentName:"p"},"messages"),".")),(0,r.kt)("h2",{id:"payload-events"},"Payload Events"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Payload Event")," is the second frequent event type, which is triggered by postback buttons on template messages, persistent menu, or quick replies. To determine whether the event type is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Payload Event"),", you may use ",(0,r.kt)("inlineCode",{parentName:"p"},"context.event.isPayload")," boolean value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isPayload) {\n    // handling the payload event\n  }\n}\n")),(0,r.kt)("p",null,"You can get the payload content from ",(0,r.kt)("inlineCode",{parentName:"p"},"context.event.payload")," and use it in the reply:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isPayload) {\n    await context.sendText(`received the payload: ${context.event.payload}`);\n  }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," You must enable events - ",(0,r.kt)("inlineCode",{parentName:"p"},"messaging_postbacks"),".")),(0,r.kt)("h2",{id:"media-related-events"},"Media Related Events"),(0,r.kt)("p",null,"In our current experience, image and location are comparatively accessible. For example, an ",(0,r.kt)("inlineCode",{parentName:"p"},"Image Event")," could be a starting point for an image-based search engine to find relevant products. And ",(0,r.kt)("inlineCode",{parentName:"p"},"Location Event")," is often used under the context that when your bot tries to recommendation your user nearby shops or branches."),(0,r.kt)("p",null,"In the following example, you can see a bunch of ",(0,r.kt)("inlineCode",{parentName:"p"},"Media Related Events")," from image, audio, video, file, and location."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function HandleImage(context) {\n  await context.sendText(`received the image: ${context.event.image.url}`);\n}\n\nasync function HandleAudio(context) {\n  await context.sendText(`received the audio: ${context.event.audio.url}`);\n}\n\nasync function HandleVideo(context) {\n  await context.sendText(`received the video: ${context.event.video.url}`);\n}\n\nasync function HandleFile(context) {\n  await context.sendText(`received the file: ${context.event.file.url}`);\n}\n\nasync function HandleLocation(context) {\n  const { coordinates } = context.event.location;\n  await context.sendText(\n    `received the location: lat: ${coordinates.lat}, long: ${coordinates.long}`\n  );\n}\n\nasync function App(context) {\n  if (context.event.isImage) {\n    return HandleImage;\n  }\n  if (context.event.isAudio) {\n    return HandleAudio;\n  }\n  if (context.event.isVideo) {\n    return HandleVideo;\n  }\n  if (context.event.isFile) {\n    return HandleFile;\n  }\n  if (context.event.isLocation) {\n    return HandleLocation;\n  }\n}\n")),(0,r.kt)("h2",{id:"deliveryread-events"},"Delivery/Read Events"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Delivery Event")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Read Event")," are necessary when you try to estimate how many users read your message \u2014 for example, the influence of a PR campaign."),(0,r.kt)("p",null,"In the following example, you can see an example of how to handle delivery and read events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function HandleDelivery(context) {\n  await context.sendText(`Watermark: ${context.event.delivery.watermark}`);\n}\n\nasync function HandleRead(context) {\n  await context.sendText(`Watermark: ${context.event.read.watermark}`);\n}\n\nasync function App(context) {\n  if (context.event.isDelivery) {\n    return HandleDelivery;\n  }\n  if (context.event.isRead) {\n    return HandleRead;\n  }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," You must enable events - ",(0,r.kt)("inlineCode",{parentName:"p"},"message_reads")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"message_deliveries"),".")),(0,r.kt)("h2",{id:"sticker-events"},"Sticker Events"),(0,r.kt)("p",null,"A proper response of ",(0,r.kt)("inlineCode",{parentName:"p"},"Sticker Event")," would make your bot more human-like. For example, you can define a set of stickers that your bots understand as a shortcut (or secret code). It offers an alternative way for your user to interact with your bot."),(0,r.kt)("p",null,"In the following example, you can see an example of the famous ",(0,r.kt)("inlineCode",{parentName:"p"},"Like Sticker")," (a growing big thumb up)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isLikeSticker) {\n    await context.sendText('Good to know you like us!');\n  }\n}\n")),(0,r.kt)("h2",{id:"handling-events-with-router"},"Handling Events with Router"),(0,r.kt)("p",null,"Bottender offers a bunch of helpers to route within your Messenger or multi-platform app. To learn more about how to use those Messenger particular routes with router, check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/channel-messenger-routing"},"Messenger Routing"),"."))}u.isMDXComponent=!0}}]);
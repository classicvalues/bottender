"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11191:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>i,toc:()=>p,default:()=>m});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],s={id:"advanced-guides-multi-channel",title:"Multi-Channel Support",original_id:"advanced-guides-multi-channel"},c=void 0,i={unversionedId:"advanced-guides-multi-channel",id:"version-1.5/advanced-guides-multi-channel",isDocsHomePage:!1,title:"Multi-Channel Support",description:"Bottender intends to meet enterprise project needs. So, Bottender supports multiple chat channels in the very early stage. For example, you can put the environment variables of each chat channel in one config file; you can use platform specific routes to organize user events from various platforms.",source:"@site/versioned_docs/version-1.5/advanced-guides-multi-channel.md",sourceDirName:".",slug:"/advanced-guides-multi-channel",permalink:"/docs/advanced-guides-multi-channel",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.5/advanced-guides-multi-channel.md",tags:[],version:"1.5",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"advanced-guides-multi-channel",title:"Multi-Channel Support",original_id:"advanced-guides-multi-channel"},sidebar:"version-1.5/docs",previous:{title:"Natural Language Understanding",permalink:"/docs/advanced-guides-nlu"},next:{title:"Messenger Setup",permalink:"/docs/channel-messenger-setup"}},p=[{value:"Set Up Each Chat Channel",id:"set-up-each-chat-channel",children:[],level:2},{value:"Enable Each Chat Channel",id:"enable-each-chat-channel",children:[],level:2},{value:"Develop Cross-Platform Bot Actions",id:"develop-cross-platform-bot-actions",children:[{value:"Using <code>context.platform</code> to Manage Cross-Platform Events",id:"using-contextplatform-to-manage-cross-platform-events",children:[],level:3},{value:"Using <code>router</code> and <code>platform</code> to Manage Cross-Platform Events",id:"using-router-and-platform-to-manage-cross-platform-events",children:[],level:3},{value:"Using Platform Specific Routes to Manage Cross-Platform Events",id:"using-platform-specific-routes-to-manage-cross-platform-events",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bottender intends to meet enterprise project needs. So, Bottender supports multiple chat channels in the very early stage. For example, you can put the environment variables of each chat channel in one config file; you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/the-basics-routing#platform-specific-routes"},"platform specific routes")," to organize user events from various platforms."),(0,r.kt)("p",null,"Plus, Bottender aims to support the full features of each chat channel, e.g., Block Kit of Slack, rich menu of LINE, Handover Protocol of Messenger. And you don't have to learn extra generic chat UIs and worry about if these still apply to the latest chat UI of each chat channel."),(0,r.kt)("p",null,"The primary three steps to build a basic cross-platform bot are as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set up each chat channel"),(0,r.kt)("li",{parentName:"ol"},"Enable each chat channel"),(0,r.kt)("li",{parentName:"ol"},"Develop cross-platform bot actions")),(0,r.kt)("h2",{id:"set-up-each-chat-channel"},"Set Up Each Chat Channel"),(0,r.kt)("p",null,"To build a cross-platform bot, you have to set up each platform first. In short, you have to fill in environment variables in your ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," for the chat channels supported by your bot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# .env\n\nMESSENGER_PAGE_ID=\nMESSENGER_ACCESS_TOKEN=\nMESSENGER_APP_ID=\nMESSENGER_APP_SECRET=\nMESSENGER_VERIFY_TOKEN=\n\nWHATSAPP_ACCOUNT_SID=\nWHATSAPP_AUTH_TOKEN=\nWHATSAPP_PHONE_NUMBER=\n\nLINE_ACCESS_TOKEN=\nLINE_CHANNEL_SECRET=\n\nTELEGRAM_ACCESS_TOKEN=\n\nSLACK_ACCESS_TOKEN=\nSLACK_VERIFICATION_TOKEN=\n\nVIBER_ACCESS_TOKEN=\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If you are not familiar with setting up chat channels, you may refer to the following Bottender docs:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/channel-messenger-setup"},"Messenger Setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/channel-whatsapp-setup"},"WhatsApp Setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/channel-line-setup"},"LINE Setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/channel-slack-setup"},"Slack Setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/channel-telegram-setup"},"Telegram Setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/channel-viber-setup"},"Viber Setup")))),(0,r.kt)("h2",{id:"enable-each-chat-channel"},"Enable Each Chat Channel"),(0,r.kt)("p",null,"Next, you have to make sure you have enable the channel you want to support in ",(0,r.kt)("inlineCode",{parentName:"p"},"bottender.config.js"),"."),(0,r.kt)("p",null,"For example, if you want to enable your bot to support Messenger, you have to set ",(0,r.kt)("inlineCode",{parentName:"p"},"channels.messenger.enabled")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// bottender.config.js\n\nmodule.exports = {\n  channels: {\n    messenger: {\n      enabled: true,\n      path: '/webhooks/messenger',\n      pageId: process.env.MESSENGER_PAGE_ID,\n      accessToken: process.env.MESSENGER_ACCESS_TOKEN,\n      appId: process.env.MESSENGER_APP_ID,\n      appSecret: process.env.MESSENGER_APP_SECRET,\n      verifyToken: process.env.MESSENGER_VERIFY_TOKEN,\n    },\n    whatsapp: {\n      enabled: true,\n      path: '/webhooks/whatsapp',\n      accountSid: process.env.WHATSAPP_ACCOUNT_SID,\n      authToken: process.env.WHATSAPP_AUTH_TOKEN,\n      phoneNumber: process.env.WHATSAPP_PHONE_NUMBER,\n    },\n    line: {\n      enabled: true,\n      path: '/webhooks/line',\n      accessToken: process.env.LINE_ACCESS_TOKEN,\n      channelSecret: process.env.LINE_CHANNEL_SECRET,\n    },\n    telegram: {\n      enabled: true,\n      path: '/webhooks/telegram',\n      accessToken: process.env.TELEGRAM_ACCESS_TOKEN,\n    },\n    slack: {\n      enabled: true,\n      path: '/webhooks/slack',\n      accessToken: process.env.SLACK_ACCESS_TOKEN,\n      signingSecret: process.env.SLACK_SIGNING_SECRET,\n    },\n    viber: {\n      enabled: true,\n      path: '/webhooks/viber',\n      accessToken: process.env.VIBER_ACCESS_TOKEN,\n      sender: {\n        name: 'xxxx',\n      },\n    },\n  },\n};\n")),(0,r.kt)("h2",{id:"develop-cross-platform-bot-actions"},"Develop Cross-Platform Bot Actions"),(0,r.kt)("p",null,"Now, you can develop actions to handle messages from different platforms."),(0,r.kt)("p",null,"A right bot action relates to the current user status with the incoming event. In the following section, you can see various approaches to cross-platform event handling."),(0,r.kt)("h3",{id:"using-contextplatform-to-manage-cross-platform-events"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"context.platform")," to Manage Cross-Platform Events"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-context#platform"},(0,r.kt)("inlineCode",{parentName:"a"},"context.platform"))," to check that each message belongs to which platform."),(0,r.kt)("p",null,"In the following code, you can see a simple action that replies to the users with the platform they are using."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = async function App(context) {\n  await context.sendText(`Hello World. Platform: ${context.platform}`);\n};\n")),(0,r.kt)("p",null,"You can check out the repository of the above example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/examples/multiple-channels"},"here"),"."),(0,r.kt)("h3",{id:"using-router-and-platform-to-manage-cross-platform-events"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"router")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"platform")," to Manage Cross-Platform Events"),(0,r.kt)("p",null,"Different platforms provide different advanced events for better user experience. For example, Messenger supports Button Template, while LINE supports Flex Message. Therefore, you might want to define some platform-specific actions to handle these advanced events."),(0,r.kt)("p",null,"To better organize bot actions, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"router")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," functions from ",(0,r.kt)("inlineCode",{parentName:"p"},"bottender/router")," to handle routing among different platforms."),(0,r.kt)("p",null,"In the example app, you can see two additional actions to leverage the platform-specific events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { platform, router } from 'bottender/router';\n\nasync function LineAction(context) {\n  await context.sendFlex('This is a line-specific message!', {\n    type: 'bubble',\n    body: {\n      type: 'box',\n      layout: 'horizontal',\n      contents: [\n        {\n          type: 'text',\n          text: 'Hello,',\n        },\n        {\n          type: 'text',\n          text: 'World',\n        },\n      ],\n    },\n  });\n}\n\nasync function MessengerAction(context) {\n  await context.sendButtonTemplate('This is a messenger-specific message!', [\n    {\n      type: 'postback',\n      title: 'Hello',\n      payload: 'Hello',\n    },\n    {\n      type: 'postback',\n      title: 'World',\n      payload: 'World',\n    },\n  ]);\n}\n\nmodule.exports = async function App(context) {\n  return router([\n    platform('line', LineAction),\n    platform('messenger', MessengerAction),\n  ]);\n};\n")),(0,r.kt)("h3",{id:"using-platform-specific-routes-to-manage-cross-platform-events"},"Using Platform Specific Routes to Manage Cross-Platform Events"),(0,r.kt)("p",null,"By Bottender 1.1+, you can use platform specific routes as an alternative to organize events from various chat channels. To learn more about the details of those specific routes, check out their documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/channel-messenger-routing"},"Messenger Routes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/channel-whatsapp-routing"},"WhatsApp Routes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/channel-line-routing"},"LINE Routes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/channel-slack-routing"},"Slack Routes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/channel-telegram-routing"},"Telegram Routes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/channel-viber-routing"},"Viber Routes"))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38722:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>p,default:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"channel-line-migrating-from-sdk",title:"Migrating from LINE SDK for Node.js",original_id:"channel-line-migrating-from-sdk"},c=void 0,s={unversionedId:"channel-line-migrating-from-sdk",id:"version-1.1.0/channel-line-migrating-from-sdk",isDocsHomePage:!1,title:"Migrating from LINE SDK for Node.js",description:"Bottender, the Ultimate Time Saver for LINE Bot Developers",source:"@site/versioned_docs/version-1.1.0/channel-line-migrating-from-sdk.md",sourceDirName:".",slug:"/channel-line-migrating-from-sdk",permalink:"/docs/1.1.0/channel-line-migrating-from-sdk",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.1.0/channel-line-migrating-from-sdk.md",tags:[],version:"1.1.0",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-line-migrating-from-sdk",title:"Migrating from LINE SDK for Node.js",original_id:"channel-line-migrating-from-sdk"},sidebar:"version-1.1.0/docs",previous:{title:"Error Handling in LINE",permalink:"/docs/1.1.0/channel-line-errors"},next:{title:"Slack Setup",permalink:"/docs/1.1.0/channel-slack-setup"}},p=[{value:"Bottender, the Ultimate Time Saver for LINE Bot Developers",id:"bottender-the-ultimate-time-saver-for-line-bot-developers",children:[],level:2},{value:"Create a Bot Project by LINE SDK vs. Bottender",id:"create-a-bot-project-by-line-sdk-vs-bottender",children:[{value:"Create a Bot Project by LINE SDK",id:"create-a-bot-project-by-line-sdk",children:[],level:3},{value:"Create a Bot Project by Bottender",id:"create-a-bot-project-by-bottender",children:[],level:3}],level:2},{value:"Migrate Your LINE SDK Bot Project to Bottender",id:"migrate-your-line-sdk-bot-project-to-bottender",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bottender-the-ultimate-time-saver-for-line-bot-developers"},"Bottender, the Ultimate Time Saver for LINE Bot Developers"),(0,a.kt)("p",null,"Bottender aims to help LINE developers focus on project-specific business logic. It is carefully crafted to save developers' time based on real project experience."),(0,a.kt)("p",null,"To feel the magic of Bottender, you can check the section of comparison, ",(0,a.kt)("a",{parentName:"p",href:"#create-a-bot-project-by-line-sdk-vs-bottender"},"Creating a Bot Project by LINE SDK vs. Bottender.")," If you are keen on migrating your existing project to Bottender, you can jump to the section, ",(0,a.kt)("a",{parentName:"p",href:"#migrate-your-line-sdk-bot-project-to-bottender-from-scratch"},"Migrate Your LINE SDK Bot Project to Bottender.")),(0,a.kt)("h2",{id:"create-a-bot-project-by-line-sdk-vs-bottender"},"Create a Bot Project by LINE SDK vs. Bottender"),(0,a.kt)("p",null,"In the following comparison, you can see a significant difference between creating an echo bot project by LINE SDK or Bottender. Comparing with the code lines of the LINE SDK project, you only need 5% code lines by Bottender."),(0,a.kt)("h3",{id:"create-a-bot-project-by-line-sdk"},"Create a Bot Project by LINE SDK"),(0,a.kt)("p",null,"The sample code below is from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/line/line-bot-sdk-nodejs/"},"LINE"),". It represents a basic bot that echoes the user's input."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst line = require('@line/bot-sdk');\n\nconst config = {\n  channelAccessToken: 'YOUR_CHANNEL_ACCESS_TOKEN',\n  channelSecret: 'YOUR_CHANNEL_SECRET',\n};\n\nconst app = express();\napp.post('/webhooks/line', line.middleware(config), (req, res) => {\n  Promise.all(req.body.events.map(handleEvent)).then((result) =>\n    res.json(result)\n  );\n});\n\nconst client = new line.Client(config);\nfunction handleEvent(event) {\n  if (event.type !== 'message' || event.message.type !== 'text') {\n    return Promise.resolve(null);\n  }\n\n  return client.replyMessage(event.replyToken, {\n    type: 'text',\n    text: event.message.text,\n  });\n}\n\napp.listen(3000);\n")),(0,a.kt)("p",null,"If you have experienced in bot projects, you can figure out that 80% of the above code is duplicated from project to project. That's why we need an excellent bot framework, i.e., Bottender, to save your development time from redundant works."),(0,a.kt)("h3",{id:"create-a-bot-project-by-bottender"},"Create a Bot Project by Bottender"),(0,a.kt)("p",null,"By Bottender, you can make a simple echo bot in the 3 steps:"),(0,a.kt)("p",null,"First, create a LINE Bot project by one-line command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-bottender-app my-app\n")),(0,a.kt)("p",null,"Finish the LINE project environment setup. Please refer to LINE environment ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.1.0/channel-line-setup"},"setup guide"),", if you are not familiar with it."),(0,a.kt)("p",null,"Finally, add Bot echo feature by editing ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.js")," file and add one line of code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function App(context) {\n  await context.sendText(context.event.text);\n};\n")),(0,a.kt)("h2",{id:"migrate-your-line-sdk-bot-project-to-bottender"},"Migrate Your LINE SDK Bot Project to Bottender"),(0,a.kt)("p",null,"In the case that you have an existing bot project, you can follow the below steps to migrate your bot from LINE SDK to Bottender."),(0,a.kt)("p",null,"To begin with, install Bottender and uninstall LINE Bot SDK."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"// Using npm\nnpm install bottender@next\nnpm uninstall @line/bot-sdk\n\n// Using yarn\nyarn add bottender@next\nyarn remove @line/bot-sdk\n")),(0,a.kt)("p",null,"Then, create your Bottender config file."),(0,a.kt)("p",null,"Edit your ",(0,a.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," file as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  enabled: true,\n  path: '/webhooks/line',\n  accessToken: process.env.LINE_ACCESS_TOKEN,\n  channelSecret: process.env.LINE_CHANNEL_SECRET,\n};\n")),(0,a.kt)("p",null,"Create the main logic of your bot project by editing your bot logic in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function App(context) {\n  await context.sendText(context.event.text);\n};\n")),(0,a.kt)("p",null,"Create an environment file ",(0,a.kt)("inlineCode",{parentName:"p"},".env"),", and fill in access token and channel secret:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"LINE_ACCESS_TOKEN=\nLINE_CHANNEL_SECRET=\n")),(0,a.kt)("p",null,"Finally, run your bot by the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx bottender start\n")))}u.isMDXComponent=!0}}]);
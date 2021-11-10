"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54393],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12908:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>m});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"migrating-v1",title:"Migrating from v0.x to v1.x",original_id:"migrating-v1"},l=void 0,c={unversionedId:"migrating-v1",id:"version-1.1.0/migrating-v1",isDocsHomePage:!1,title:"Migrating from v0.x to v1.x",description:"To make bot developers have a happier development experience, we made some changes in terms of a better-structured config file, unifying cases to camel case, and introduction of two design patterns: Router and Chain.",source:"@site/versioned_docs/version-1.1.0/migrating-v1.md",sourceDirName:".",slug:"/migrating-v1",permalink:"/docs/1.1.0/migrating-v1",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.1.0/migrating-v1.md",tags:[],version:"1.1.0",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"migrating-v1",title:"Migrating from v0.x to v1.x",original_id:"migrating-v1"},sidebar:"version-1.1.0/docs",previous:{title:"Getting Started",permalink:"/docs/1.1.0/"},next:{title:"Console Mode",permalink:"/docs/1.1.0/the-basics-console-mode"}},d=[{value:"Configure Session Driver and Channel Settings in <code>bottender.config.js</code>",id:"configure-session-driver-and-channel-settings-in-bottenderconfigjs",children:[{value:"v0.x",id:"v0x",children:[],level:3},{value:"v1.x",id:"v1x",children:[],level:3}],level:2},{value:"Unify Cases to Camel Case",id:"unify-cases-to-camel-case",children:[{value:"v0.x",id:"v0x-1",children:[],level:3},{value:"v1.x",id:"v1x-1",children:[],level:3},{value:"Migrate to v1.x by <code>bottender-codemod</code>",id:"migrate-to-v1x-by-bottender-codemod",children:[],level:3}],level:2},{value:"Replace Middleware and Handlers with Router and Chain",id:"replace-middleware-and-handlers-with-router-and-chain",children:[],level:2}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To make bot developers have a happier development experience, we made some changes in terms of a better-structured config file, unifying cases to camel case, and introduction of two design patterns: ",(0,o.kt)("inlineCode",{parentName:"p"},"Router")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Chain"),"."),(0,o.kt)("p",null,"You can follow the below guide to migrate your Bottender's code from v0.x to v1.x."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The following sample code is based on a Messenger bot, ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/bottenderjs"},"tweet us")," if you need a sample code of other chat channels.")),(0,o.kt)("h2",{id:"configure-session-driver-and-channel-settings-in-bottenderconfigjs"},"Configure Session Driver and Channel Settings in ",(0,o.kt)("inlineCode",{parentName:"h2"},"bottender.config.js")),(0,o.kt)("h3",{id:"v0x"},"v0.x"),(0,o.kt)("p",null,"In v0.x, only part of channel settings are put into ",(0,o.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// bottender.config.js\nmodule.exports = {\n  messenger: {\n    accessToken: '__FILL_YOUR_TOKEN_HERE__',\n    appSecret: '__FILL_YOUR_SECRET_HERE__',\n    verifyToken: '__FILL_YOUR_VERIFYTOKEN_HERE__',\n  },\n};\n")),(0,o.kt)("p",null,"And you need to construct a session store and bot yourself in ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nconst { MessengerBot } = require('bottender');\nconst { createServer } = require('bottender/express');\n\nconst config = require('./bottender.config').messenger;\n\nconst maxSize = 500; // The maxSizeimum size of the cache, default will be 500.\n\nconst bot = new MessengerBot({\n  accessToken: config.accessToken,\n  appSecret: config.appSecret,\n  verifyToken: config.verifyToken,\n  sessionStore: new MemorySessionStore(maxSize),\n});\n\nbot.onEvent(async (context) => {\n  await context.sendText('Hello World');\n});\n\nconst server = createServer(bot);\n\nserver.listen(5000, () => {\n  console.log('server is running on 5000 port...');\n});\n")),(0,o.kt)("h3",{id:"v1x"},"v1.x"),(0,o.kt)("p",null,"In v1.x, we move the session store settings and channel settings into ",(0,o.kt)("inlineCode",{parentName:"p"},"bottender.config.js"),"."),(0,o.kt)("p",null,"Also, the channel section of the config file is ready to support multiple chat channels. For each channel, you can see an extra ",(0,o.kt)("inlineCode",{parentName:"p"},"enable")," parameter. It is handy when you want to deploy the bot on specific chat channels first."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// bottender.config.js\nmodule.exports = {\n  session: {\n    driver: 'memory',\n    stores: {\n      memory: {\n        maxSize: 500, // The maximum size of the cache, default will be 500.\n      },\n    },\n  },\n\n  channels: {\n    messenger: {\n      enabled: true,\n      path: '/webhooks/messenger',\n      pageId: process.env.MESSENGER_PAGE_ID,\n      accessToken: process.env.MESSENGER_ACCESS_TOKEN,\n      appId: process.env.MESSENGER_APP_ID,\n      appSecret: process.env.MESSENGER_APP_SECRET,\n      verifyToken: process.env.MESSENGER_VERIFY_TOKEN,\n    },\n  },\n};\n")),(0,o.kt)("p",null,"And you can put your environment variables in ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# .env\nMESSENGER_PAGE_ID=\nMESSENGER_ACCESS_TOKEN=\nMESSENGER_APP_ID=\nMESSENGER_APP_SECRET=\nMESSENGER_VERIFY_TOKEN=\n")),(0,o.kt)("p",null,"After changes above, your ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file only focus on bot logic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nmodule.exports = async function App(context) {\n  await context.sendText('Hello World');\n};\n")),(0,o.kt)("h2",{id:"unify-cases-to-camel-case"},"Unify Cases to Camel Case"),(0,o.kt)("p",null,"The mixed-use of camel case and snake case is error-prone, which results in an unpredictable development progress. For example, the JavaScript community embraces camel case keys on objects, while Messenger, Slack, Telegram, and Viber usually using snake case string as object keys."),(0,o.kt)("p",null,"In Bottender v1.x, you can use the camel case consistently. Let Bottender handle the case transform automatically for you."),(0,o.kt)("h3",{id:"v0x-1"},"v0.x"),(0,o.kt)("p",null,"In v1.x, keys represent in the snake case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"context.sendGenericTemplate([\n  {\n    title: \"Welcome to Peter's Hats\",\n    image_url: 'https://petersfancybrownhats.com/company_image.png',\n    subtitle: \"We've got the right hat for everyone.\",\n    default_action: {\n      type: 'web_url',\n      url: 'https://peterssendreceiveapp.ngrok.io/view?item=103',\n      messenger_extensions: true,\n      webview_height_ratio: 'tall',\n      fallback_url: 'https://peterssendreceiveapp.ngrok.io/',\n    },\n    buttons: [\n      {\n        type: 'postback',\n        title: 'Start Chatting',\n        payload: 'DEVELOPER_DEFINED_PAYLOAD',\n      },\n    ],\n  },\n]);\n")),(0,o.kt)("h3",{id:"v1x-1"},"v1.x"),(0,o.kt)("p",null,"In v1.x, keys represent in the camel case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"context.sendGenericTemplate([\n  {\n    title: \"Welcome to Peter's Hats\",\n    imageUrl: 'https://petersfancybrownhats.com/company_image.png',\n    subtitle: \"We've got the right hat for everyone.\",\n    defaultAction: {\n      type: 'web_url',\n      url: 'https://peterssendreceiveapp.ngrok.io/view?item=103',\n      messengerExtensions: true,\n      webviewHeightRatio: 'tall',\n      fallbackUrl: 'https://peterssendreceiveapp.ngrok.io/',\n    },\n    buttons: [\n      {\n        type: 'postback',\n        title: 'Start Chatting',\n        payload: 'DEVELOPER_DEFINED_PAYLOAD',\n      },\n    ],\n  },\n]);\n")),(0,o.kt)("h3",{id:"migrate-to-v1x-by-bottender-codemod"},"Migrate to v1.x by ",(0,o.kt)("inlineCode",{parentName:"h3"},"bottender-codemod")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bottenderjs/bottender-codemod"},(0,o.kt)("inlineCode",{parentName:"a"},"bottender-codemod"))," is a command-line tool to help you change snake case in Bottender v0.x to camel case for Bottender v1.x. It helps you migrate the majority of your code to the camel case."),(0,o.kt)("p",null,"Please remember to commit your current code before running ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bottenderjs/bottender-codemod"},(0,o.kt)("inlineCode",{parentName:"a"},"bottender-codemod")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npx bottender-codemod camelcase <your_file_path>\n")),(0,o.kt)("p",null,"If you want to try it without file changed, you can dry run and print it with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npx bottender-codemod camelcase <your_file_path> --dry --print\n")),(0,o.kt)("h2",{id:"replace-middleware-and-handlers-with-router-and-chain"},"Replace Middleware and Handlers with Router and Chain"),(0,o.kt)("p",null,"In the world of functional declarative, ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Handlers")," are not suitable due to the difficulty of composing together. So, we are deprecating those APIs in favor of new introduced ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/the-basics-routing"},(0,o.kt)("inlineCode",{parentName:"a"},"Router"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/the-basics-chain"},(0,o.kt)("inlineCode",{parentName:"a"},"Chain"))," APIs. If you still prefer ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Handlers"),", you can still use them by installing ",(0,o.kt)("inlineCode",{parentName:"p"},"@bottender/handlers")," package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm install @bottender/handlers\n\n// or using yarn:\nyarn add @bottender/handlers\n")),(0,o.kt)("p",null,"And make those changes to your imports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"const {\n  middleware,\n  Handler,\n  MessengerHandler,\n  LineHandler,\n  SlackHandler,\n  TelegramHandler,\n  ViberHandler,\n- } = require('bottender');\n+ } = require('@bottender/handlers');\n")))}m.isMDXComponent=!0}}]);
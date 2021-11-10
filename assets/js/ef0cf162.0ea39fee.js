"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83493:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>m});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],i={id:"channel-telegram-setup",title:"Telegram Setup",original_id:"channel-telegram-setup"},p=void 0,s={unversionedId:"channel-telegram-setup",id:"version-1.3.1/channel-telegram-setup",isDocsHomePage:!1,title:"Telegram Setup",description:"\u261d\ufe0fBy Bottender, you can begin your first Telegram Bot in 3 mins!!",source:"@site/versioned_docs/version-1.3.1/channel-telegram-setup.md",sourceDirName:".",slug:"/channel-telegram-setup",permalink:"/docs/1.3.1/channel-telegram-setup",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.3.1/channel-telegram-setup.md",tags:[],version:"1.3.1",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-telegram-setup",title:"Telegram Setup",original_id:"channel-telegram-setup"},sidebar:"version-1.3.1/docs",previous:{title:"Slack Block Kit",permalink:"/docs/1.3.1/channel-slack-block-kit"},next:{title:"Handling Telegram Events",permalink:"/docs/1.3.1/channel-telegram-handling-events"}},u=[{value:"Enabling Telegram Channels",id:"enabling-telegram-channels",children:[{value:"New Bottender Apps",id:"new-bottender-apps",children:[],level:3},{value:"Existing Bottender Apps",id:"existing-bottender-apps",children:[],level:3}],level:2},{value:"Environment Configuration",id:"environment-configuration",children:[{value:"Telegram Access Token",id:"telegram-access-token",children:[],level:3}],level:2},{value:"Webhook",id:"webhook",children:[{value:"Set Up Webhook for Development",id:"set-up-webhook-for-development",children:[],level:3},{value:"Set Up Webhook for Production",id:"set-up-webhook-for-production",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/h5Mg8gNp8vk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u261d\ufe0fBy Bottender, you can begin your first Telegram Bot in 3 mins!!"),(0,a.kt)("h2",{id:"enabling-telegram-channels"},"Enabling Telegram Channels"),(0,a.kt)("p",null,"To enable Telegram channels, you can start either from new or existing Bottender apps."),(0,a.kt)("h3",{id:"new-bottender-apps"},"New Bottender Apps"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create Bottender App")," is the best way to start building a new app in Bottender."),(0,a.kt)("p",null,"To create a project, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-bottender-app my-app\n")),(0,a.kt)("p",null,"Make sure to select the ",(0,a.kt)("inlineCode",{parentName:"p"},"telegram")," option:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3382565/67851226-f2b7f200-fb44-11e9-951d-c0050db88ed3.png",alt:null})),(0,a.kt)("p",null,"After you go through the steps, ",(0,a.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," are generated automatically for further channel settings."),(0,a.kt)("h3",{id:"existing-bottender-apps"},"Existing Bottender Apps"),(0,a.kt)("p",null,"First, you must have a ",(0,a.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," file includes the following settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  channels: {\n    telegram: {\n      enabled: true,\n      path: '/webhooks/telegram',\n      accessToken: process.env.TELEGRAM_ACCESS_TOKEN,\n    },\n  },\n};\n")),(0,a.kt)("p",null,"Make sure to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"channels.telegram.enabled")," field to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"By default, the Bottender server listens to the Telegram requests on the ",(0,a.kt)("inlineCode",{parentName:"p"},"/webhooks/telegram")," path. However, you can overwrite the path by assigning the preferred webhook path in the ",(0,a.kt)("inlineCode",{parentName:"p"},"channels.telegram.path")," field."),(0,a.kt)("p",null,"We highly recommend setting your sensitive config using ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env"),", so you could avoid any credentials get exposed."),(0,a.kt)("h2",{id:"environment-configuration"},"Environment Configuration"),(0,a.kt)("p",null,"Bottender utilizes the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"dotenv")," package to load your environment variables when developing your app."),(0,a.kt)("p",null,"To make a Telegram bot work, you must prepare the following environment variable, which you may put into your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file later:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Telegram Access Token")),(0,a.kt)("h3",{id:"telegram-access-token"},"Telegram Access Token"),(0,a.kt)("p",null,"You can get a Telegram bot account and a bot token by sending the ",(0,a.kt)("inlineCode",{parentName:"p"},"/newbot")," command to ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/BotFather"},"@BotFather")," on Telegram."),(0,a.kt)("p",null,(0,a.kt)("img",{width:"800px",src:"https://user-images.githubusercontent.com/662387/71246889-9312e180-2352-11ea-97da-9a5adc014fda.png"})),(0,a.kt)("p",null,"After you get your ",(0,a.kt)("strong",{parentName:"p"},"Telegram Bot Token"),", paste the value into the ",(0,a.kt)("inlineCode",{parentName:"p"},"TELEGRAM_ACCESS_TOKEN")," field in your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# .env\n\nTELEGRAM_ACCESS_TOKEN=<Your Telegram Bot Token>\n")),(0,a.kt)("p",null,"For more information, please refer to Telegram's official doc, ",(0,a.kt)("a",{parentName:"p",href:"https://core.telegram.org/bots#6-botfather"},"BotFather"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Keep your token secure and store it safely; it can be used by anyone to control your bot. When you have to generate a new access token, you can send ",(0,a.kt)("inlineCode",{parentName:"p"},"/revoke")," to BotFather.")),(0,a.kt)("h2",{id:"webhook"},"Webhook"),(0,a.kt)("h3",{id:"set-up-webhook-for-development"},"Set Up Webhook for Development"),(0,a.kt)("p",null,"Before setting the webhook, please make sure you have set your access token correctly in ",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,a.kt)("p",null,"By the following command, Bottender runs a bot server by ngrok, which makes your local bot server accessible from the Internet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# in development\nnpm run dev\n")),(0,a.kt)("p",null,"When you run bottender in development mode, Bottender automatically run up a ngrok client, and then you can get the information of webhook URL from the console like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"App has started\ntelegram webhook URL: https://42bbf602.ngrok.io/webhooks/telegram\nserver is running on 5000 port...\n")),(0,a.kt)("p",null,"Then, you can open a new tab in the terminal and finish the webhook setting by the below command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx bottender telegram webhook set\n")),(0,a.kt)("p",null,"Finally, press ",(0,a.kt)("inlineCode",{parentName:"p"},"Y")," to allow Bottender set ",(0,a.kt)("inlineCode",{parentName:"p"},"ngrok")," temporary URL as the webhook. Now you are ready to interact with your bot on Telegram."),(0,a.kt)("h3",{id:"set-up-webhook-for-production"},"Set Up Webhook for Production"),(0,a.kt)("p",null,"Before setting the webhook, please make sure you have set your access token correctly as the environment variable."),(0,a.kt)("p",null,"Then, you can run Bottender on your hosting by the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# in production\nnpm start\n")),(0,a.kt)("p",null,"By the following command, you can finish the Telegram webhook setting. (If you deployed your bot with the default webhook setting, you webhook for Telegram bot supposed to be ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/webhooks/telegram")," )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx bottender telegram webhook set -w https://example.com/webhooks/telegram\n")),(0,a.kt)("p",null,"Now you are ready to interact with your bot on Telegram."))}m.isMDXComponent=!0}}]);
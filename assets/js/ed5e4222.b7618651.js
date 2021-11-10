"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96839],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69607:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>d});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],i={id:"channel-line-setup",title:"LINE Setup",original_id:"channel-line-setup"},p=void 0,s={unversionedId:"channel-line-setup",id:"version-1.3.1/channel-line-setup",isDocsHomePage:!1,title:"LINE Setup",description:"Enabling LINE Channels",source:"@site/versioned_docs/version-1.3.1/channel-line-setup.md",sourceDirName:".",slug:"/channel-line-setup",permalink:"/docs/1.3.1/channel-line-setup",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.3.1/channel-line-setup.md",tags:[],version:"1.3.1",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-line-setup",title:"LINE Setup",original_id:"channel-line-setup"},sidebar:"version-1.3.1/docs",previous:{title:"WhatsApp Routing",permalink:"/docs/1.3.1/channel-whatsapp-routing"},next:{title:"Handling LINE Events",permalink:"/docs/1.3.1/channel-line-handling-events"}},c=[{value:"Enabling LINE Channels",id:"enabling-line-channels",children:[{value:"New Bottender Apps",id:"new-bottender-apps",children:[],level:3},{value:"Existing Bottender Apps",id:"existing-bottender-apps",children:[],level:3}],level:2},{value:"Environment Configuration",id:"environment-configuration",children:[{value:"LINE Access Token and Channel Secret",id:"line-access-token-and-channel-secret",children:[],level:3}],level:2},{value:"Webhook",id:"webhook",children:[],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"enabling-line-channels"},"Enabling LINE Channels"),(0,a.kt)("p",null,"To enable LINE channels, you can start either from new or existing Bottender apps."),(0,a.kt)("h3",{id:"new-bottender-apps"},"New Bottender Apps"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create Bottender App")," is the best way to start building a new app in Bottender."),(0,a.kt)("p",null,"To create a new app, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-bottender-app my-app\n")),(0,a.kt)("p",null,"Make sure to select the ",(0,a.kt)("inlineCode",{parentName:"p"},"line")," option:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3382565/67851224-f2b7f200-fb44-11e9-9ccb-afd7eee74b00.png",alt:null})),(0,a.kt)("p",null,"After you go through the steps, ",(0,a.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," are generated automatically for further channel settings."),(0,a.kt)("h3",{id:"existing-bottender-apps"},"Existing Bottender Apps"),(0,a.kt)("p",null,"First, you must have a ",(0,a.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," file includes the following settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  channels: {\n    line: {\n      enabled: true,\n      path: '/webhooks/line',\n      accessToken: process.env.LINE_ACCESS_TOKEN,\n      channelSecret: process.env.LINE_CHANNEL_SECRET,\n    },\n  },\n};\n")),(0,a.kt)("p",null,"Make sure to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"channels.line.enabled")," field to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"By default, the Bottender server listens to the LINE requests on the ",(0,a.kt)("inlineCode",{parentName:"p"},"/webhooks/line")," path. However, you can overwrite the path by assigning the preferred webhook path in the ",(0,a.kt)("inlineCode",{parentName:"p"},"channels.line.path")," field."),(0,a.kt)("p",null,"We highly recommend setting your sensitive config using ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env"),", so you could avoid any credentials get exposed."),(0,a.kt)("h2",{id:"environment-configuration"},"Environment Configuration"),(0,a.kt)("p",null,"Bottender utilizes the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"dotenv")," package to load your environment variables when developing your app."),(0,a.kt)("p",null,"To make a LINE bot work, you must prepare the following environment variables, which you may put into your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file later:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LINE Access Token"),(0,a.kt)("li",{parentName:"ul"},"LINE Channel Secret")),(0,a.kt)("h3",{id:"line-access-token-and-channel-secret"},"LINE Access Token and Channel Secret"),(0,a.kt)("p",null,"You can find your ",(0,a.kt)("strong",{parentName:"p"},"LINE Access Token")," and ",(0,a.kt)("strong",{parentName:"p"},"LINE Channel Secret")," from LINE official account settings."),(0,a.kt)("p",null,"After you get your ",(0,a.kt)("strong",{parentName:"p"},"LINE Access Token")," and ",(0,a.kt)("strong",{parentName:"p"},"LINE Channel Secret"),", paste the values into the ",(0,a.kt)("inlineCode",{parentName:"p"},"LINE_ACCESS_TOKEN")," field and ",(0,a.kt)("inlineCode",{parentName:"p"},"LINE_CHANNEL_SECRET")," field accordingly in your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# .env\n\nLINE_ACCESS_TOKEN=<Your LINE Access Token>\nLINE_CHANNEL_SECRET=<Your LINE Channel Token>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"You can access your LINE official account from your ",(0,a.kt)("a",{parentName:"li",href:"https://developers.line.biz/console/"},"provider list"),"."),(0,a.kt)("li",{parentName:"ul"},"To get your LINE access token and LINE channel secret, you may refer to LINE's official article, ",(0,a.kt)("a",{parentName:"li",href:"https://developers.line.biz/en/docs/messaging-api/building-bot/"},"Building a Bot"),"."))),(0,a.kt)("h2",{id:"webhook"},"Webhook"),(0,a.kt)("p",null,"After finishing the above settings, you can start your server with LINE webhook event listening using the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# in production mode\nnpm start\n\n# or in development mode\nnpm run dev\n")),(0,a.kt)("p",null,"When you run bottender in development mode, Bottender automatically run up a ngrok client, and then you can get the information of webhook URL from the console like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"App has started\nline webhook URL: https://42bbf602.ngrok.io/webhooks/line\nserver is running on 5000 port...\n")),(0,a.kt)("p",null,"Then, you have to manually copy your webhook URL to LINE official account's settings page. Finally, you are ready to interact with your bot on LINE."),(0,a.kt)("p",null,"For further instructions on webhook settings, please check LINE's official article, ",(0,a.kt)("a",{parentName:"p",href:"https://developers.line.biz/en/docs/messaging-api/building-bot/"},"Building a Bot"),"."))}d.isMDXComponent=!0}}]);
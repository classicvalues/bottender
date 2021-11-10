"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7025],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32663:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>d});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),l=["components"],i={id:"channel-line-setup",title:"LINE Setup",original_id:"channel-line-setup"},p=void 0,s={unversionedId:"channel-line-setup",id:"version-1.2.0/channel-line-setup",isDocsHomePage:!1,title:"LINE Setup",description:"Enable LINE Channel",source:"@site/versioned_docs/version-1.2.0/channel-line-setup.md",sourceDirName:".",slug:"/channel-line-setup",permalink:"/docs/1.2.0/channel-line-setup",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.2.0/channel-line-setup.md",tags:[],version:"1.2.0",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-line-setup",title:"LINE Setup",original_id:"channel-line-setup"},sidebar:"version-1.2.0/docs",previous:{title:"Messenger Multi-Page Support",permalink:"/docs/1.2.0/channel-messenger-multi-page"},next:{title:"Handling LINE Events",permalink:"/docs/1.2.0/channel-line-handling-events"}},c=[{value:"Enable LINE Channel",id:"enable-line-channel",children:[{value:"Enable LINE Channel for New Bottender App",id:"enable-line-channel-for-new-bottender-app",children:[],level:3},{value:"Enable LINE Channel for Existing Apps",id:"enable-line-channel-for-existing-apps",children:[],level:3}],level:2},{value:"Complete LINE Channel Settings",id:"complete-line-channel-settings",children:[{value:"LINE Access Token &amp; Channel Secret",id:"line-access-token--channel-secret",children:[],level:3},{value:"Webhook",id:"webhook",children:[],level:3}],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"enable-line-channel"},"Enable LINE Channel"),(0,r.kt)("h3",{id:"enable-line-channel-for-new-bottender-app"},"Enable LINE Channel for New Bottender App"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Create Bottender App")," is the best way to start a new bot application in Bottender."),(0,r.kt)("p",null,"To create a new application, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-bottender-app my-app\n")),(0,r.kt)("p",null,"Please make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"line")," option is enabled:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3382565/67851224-f2b7f200-fb44-11e9-9ccb-afd7eee74b00.png",alt:null})),(0,r.kt)("p",null,"After finishing ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Bottender App")," process, ",(0,r.kt)("inlineCode",{parentName:"p"},"bottender.config.js"),", a config file, will be generated automatically for further LINE channel settings."),(0,r.kt)("h3",{id:"enable-line-channel-for-existing-apps"},"Enable LINE Channel for Existing Apps"),(0,r.kt)("p",null,"Firstly, you need to have a ",(0,r.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," under application root folder, then set ",(0,r.kt)("inlineCode",{parentName:"p"},"channels.line.enabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  channels: {\n    line: {\n      enabled: true,\n      path: '/webhooks/line',\n      accessToken: process.env.LINE_ACCESS_TOKEN,\n      channelSecret: process.env.LINE_CHANNEL_SECRET,\n    },\n  },\n};\n")),(0,r.kt)("p",null,"The default webhook path is ",(0,r.kt)("inlineCode",{parentName:"p"},"/webhooks/line"),", but you can set your own webhook path in the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," field."),(0,r.kt)("h2",{id:"complete-line-channel-settings"},"Complete LINE Channel Settings"),(0,r.kt)("p",null,"To make a LINE bot work, you have to set up three values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LINE Access Token"),(0,r.kt)("li",{parentName:"ul"},"LINE Channel Secret"),(0,r.kt)("li",{parentName:"ul"},"Webhook")),(0,r.kt)("h3",{id:"line-access-token--channel-secret"},"LINE Access Token & Channel Secret"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," looks up ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," for LINE access token and LINE channel secret. Those two values have to be copied from LINE@ account settings and pasted to the following fields in ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"LINE_ACCESS_TOKEN=\nLINE_CHANNEL_SECRET=\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"It is recommended to develop your LINE Bot with your developer LINE@ account, further information could be found in LINE's official article, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.line.biz/en/docs/messaging-api/getting-started/"},"Getting Started"),"."),(0,r.kt)("li",{parentName:"ul"},"Your LINE@ account can be accessed from your ",(0,r.kt)("a",{parentName:"li",href:"https://developers.line.biz/console/"},"provider list"),"."),(0,r.kt)("li",{parentName:"ul"},"To get your LINE access token and LINE channel secret, you may refer to LINE's official article, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.line.biz/en/docs/messaging-api/building-bot/"},"Building a Bot"),"."))),(0,r.kt)("h3",{id:"webhook"},"Webhook"),(0,r.kt)("p",null,"After finishing the above settings, you can start your server with LINE webhook event listening using the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# in production mode\nnpm start\n\n# or in development mode\nnpm run dev\n")),(0,r.kt)("p",null,"When you run bottender in development mode, Bottender automatically run up a Ngrok client, and then you can get the information of webhook URL from the console like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"App has started\nline webhook url: https://42bbf602.ngrok.io/webhooks/line\nserver is running on 5000 port...\n")),(0,r.kt)("p",null,"Then, you have to manually copy your webhook url to LINE@ account's settings page. Finally, you are ready to interact with your bot on LINE :)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"For further instructions on webhook settings, please check LINE's official article, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.line.biz/en/docs/messaging-api/building-bot/"},"Building a Bot"),"."))))}d.isMDXComponent=!0}}]);
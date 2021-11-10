"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19601],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(k,p(p({ref:n},c),{},{components:t})):o.createElement(k,p({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<r;l++)p[l]=t[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61371:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>l,toc:()=>c,default:()=>d});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),p=["components"],s={id:"channel-messenger-setup",title:"Messenger Setup",original_id:"channel-messenger-setup"},i=void 0,l={unversionedId:"channel-messenger-setup",id:"version-1.3.1/channel-messenger-setup",isDocsHomePage:!1,title:"Messenger Setup",description:"Requirements",source:"@site/versioned_docs/version-1.3.1/channel-messenger-setup.md",sourceDirName:".",slug:"/channel-messenger-setup",permalink:"/docs/1.3.1/channel-messenger-setup",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.3.1/channel-messenger-setup.md",tags:[],version:"1.3.1",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-messenger-setup",title:"Messenger Setup",original_id:"channel-messenger-setup"},sidebar:"version-1.3.1/docs",previous:{title:"Multi-Channel Support",permalink:"/docs/1.3.1/advanced-guides-multi-channel"},next:{title:"Handling Messenger Events",permalink:"/docs/1.3.1/channel-messenger-handling-events"}},c=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Enabling Messenger Channels",id:"enabling-messenger-channels",children:[{value:"New Bottender Apps",id:"new-bottender-apps",children:[],level:3},{value:"Existing Bottender Apps",id:"existing-bottender-apps",children:[],level:3}],level:2},{value:"Environment Configuration",id:"environment-configuration",children:[{value:"Prepare <code>MESSENGER_APP_ID</code> and <code>MESSENGER_APP_SECRET</code>",id:"prepare-messenger_app_id-and-messenger_app_secret",children:[],level:3},{value:"Prepare <code>MESSENGER_PAGE_ID</code> and <code>MESSENGER_ACCESS_TOKEN</code>",id:"prepare-messenger_page_id-and-messenger_access_token",children:[],level:3},{value:"Prepare <code>MESSENGER_VERIFY_TOKEN</code>",id:"prepare-messenger_verify_token",children:[],level:3}],level:2},{value:"Prepare <code>Webhook</code>, and <code>Subscriptions</code>",id:"prepare-webhook-and-subscriptions",children:[{value:"In Development",id:"in-development",children:[],level:3},{value:"In Production",id:"in-production",children:[],level:3},{value:"Set Up Webhook and Enable Subscriptions by Command",id:"set-up-webhook-and-enable-subscriptions-by-command",children:[],level:3},{value:"Set Up Webhook and Enable Subscriptions on Facebook App Page",id:"set-up-webhook-and-enable-subscriptions-on-facebook-app-page",children:[],level:3}],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Before going further, we assume that you have already prepared:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Facebook Developer account"),(0,r.kt)("li",{parentName:"ul"},"A Facebook App for your Messenger Bot"),(0,r.kt)("li",{parentName:"ul"},"A Facebook Page for your Messenger Bot")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If you are not familiar with Facebook App, you can refer to Facebook's official doc, ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup/"},"Setting Up Your Facebook App"),".")),(0,r.kt)("h2",{id:"enabling-messenger-channels"},"Enabling Messenger Channels"),(0,r.kt)("p",null,"To enable Messenger channels, you can start either from new or existing Bottender apps."),(0,r.kt)("h3",{id:"new-bottender-apps"},"New Bottender Apps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create Bottender App")," is the best way to start building a new app in Bottender."),(0,r.kt)("p",null,"To create a project, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-bottender-app my-app\n")),(0,r.kt)("p",null,"Make sure to select the ",(0,r.kt)("inlineCode",{parentName:"p"},"messenger")," option:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3382565/67851223-f2b7f200-fb44-11e9-960a-4f58d68ab37d.png",alt:null})),(0,r.kt)("p",null,"After you go through the steps, ",(0,r.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," are generated automatically for further channel settings."),(0,r.kt)("h3",{id:"existing-bottender-apps"},"Existing Bottender Apps"),(0,r.kt)("p",null,"First, you must have a ",(0,r.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," file includes the following settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  channels: {\n    messenger: {\n      enabled: true,\n      path: '/webhooks/messenger',\n      pageId: process.env.MESSENGER_PAGE_ID,\n      accessToken: process.env.MESSENGER_ACCESS_TOKEN,\n      appId: process.env.MESSENGER_APP_ID,\n      appSecret: process.env.MESSENGER_APP_SECRET,\n      verifyToken: process.env.MESSENGER_VERIFY_TOKEN,\n    },\n  },\n};\n")),(0,r.kt)("p",null,"Make sure to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"channels.messenger.enabled")," field to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"By default, the Bottender server listens to the Messenger requests on the ",(0,r.kt)("inlineCode",{parentName:"p"},"/webhooks/messenger")," path. However, you can overwrite the path by assigning the preferred webhook path in the ",(0,r.kt)("inlineCode",{parentName:"p"},"channels.messenger.path")," field."),(0,r.kt)("p",null,"We highly recommend setting your sensitive config using ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env"),", so you could avoid any credentials get exposed."),(0,r.kt)("h2",{id:"environment-configuration"},"Environment Configuration"),(0,r.kt)("p",null,"When you run a Bottender app, Bottender loads environment variables in the config file, ",(0,r.kt)("inlineCode",{parentName:"p"},"bottender.config.js"),". Then, ",(0,r.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," loads sensitive or environment-dependent variables in ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,r.kt)("p",null,"To make a Messenger Bot works, you have to fill in the below environment variables in ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# .env\n\nMESSENGER_PAGE_ID=\nMESSENGER_ACCESS_TOKEN=\nMESSENGER_APP_ID=\nMESSENGER_APP_SECRET=\nMESSENGER_VERIFY_TOKEN=\n")),(0,r.kt)("h3",{id:"prepare-messenger_app_id-and-messenger_app_secret"},"Prepare ",(0,r.kt)("inlineCode",{parentName:"h3"},"MESSENGER_APP_ID")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"MESSENGER_APP_SECRET")),(0,r.kt)("p",null,"Traverse to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps"},"Your Facebook Apps")," \u2192 \\${Your App Page} \u2192 Settings \u2192 Basic."),(0,r.kt)("p",null,"You can see your App ID and App Secret. Facebook will ask your Facebook password again before display your App Secret. Fill these two values to ",(0,r.kt)("inlineCode",{parentName:"p"},"MESSENGER_APP_ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MESSENGER_APP_SECRET")," in ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71390359-fe9ecc80-263a-11ea-9a3a-e7188992e471.png",alt:null})),(0,r.kt)("h3",{id:"prepare-messenger_page_id-and-messenger_access_token"},"Prepare ",(0,r.kt)("inlineCode",{parentName:"h3"},"MESSENGER_PAGE_ID")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"MESSENGER_ACCESS_TOKEN")),(0,r.kt)("p",null,"First, please make sure that you have added ",(0,r.kt)("inlineCode",{parentName:"p"},"Messenger")," as a product of your Facebook App."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71392717-19297380-2644-11ea-9bea-4362d0cc72c3.png",alt:null})),(0,r.kt)("p",null,"Traverse to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps"},"Your Facebook Apps")," \u2192 \\${Your App Page} \u2192 Messenger \u2192 Settings \u2192 Access Tokens. Add your Facebook Page to your Facebook App."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71392720-19c20a00-2644-11ea-9961-97b39fef24c2.png",alt:null})),(0,r.kt)("p",null,"Once you have added your Facebook Page for your App, you can find the ",(0,r.kt)("inlineCode",{parentName:"p"},"Facebook ID"),". Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Generate Token")," button to generate ",(0,r.kt)("inlineCode",{parentName:"p"},"Messenger Access Token.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71392721-19c20a00-2644-11ea-8b61-ea3f97296b5e.png",alt:null})),(0,r.kt)("p",null,"Facebook has a strict security policy. You can only have one chance to save your ",(0,r.kt)("inlineCode",{parentName:"p"},"Access Token.")," Remember to have your access token copied before closing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Token Generated")," pop up. If you forgot or lost your ",(0,r.kt)("inlineCode",{parentName:"p"},"Access Token,")," the only thing you can do is to revoke a new one."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71392723-1a5aa080-2644-11ea-874d-0d21b1e0da17.png",alt:null})),(0,r.kt)("h3",{id:"prepare-messenger_verify_token"},"Prepare ",(0,r.kt)("inlineCode",{parentName:"h3"},"MESSENGER_VERIFY_TOKEN")),(0,r.kt)("p",null,"You can define your ",(0,r.kt)("inlineCode",{parentName:"p"},"Verify Token")," in the filed of ",(0,r.kt)("inlineCode",{parentName:"p"},"MESSENGER_VERIFY_TOKEN")," in ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),". This token is for Facebook to confirm the origin of the response is from your bot server."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71392880-cb613b00-2644-11ea-928f-7941a6d955d0.png",alt:null})),(0,r.kt)("h2",{id:"prepare-webhook-and-subscriptions"},"Prepare ",(0,r.kt)("inlineCode",{parentName:"h2"},"Webhook"),", and ",(0,r.kt)("inlineCode",{parentName:"h2"},"Subscriptions")),(0,r.kt)("p",null,"Before going further, please make sure you have filled in the following fields: ",(0,r.kt)("inlineCode",{parentName:"p"},"MESSENGER_PAGE_ID,")," ",(0,r.kt)("inlineCode",{parentName:"p"},"MESSENGER_ACCESS_TOKEN,")," ",(0,r.kt)("inlineCode",{parentName:"p"},"MESSENGER_APP_ID,")," ",(0,r.kt)("inlineCode",{parentName:"p"},"MESSENGER_APP_SECRET,")," ",(0,r.kt)("inlineCode",{parentName:"p"},"MESSENGER_VERIFY_TOKEN.")),(0,r.kt)("h3",{id:"in-development"},"In Development"),(0,r.kt)("p",null,"You can run your Bottender project by the following commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run dev\n")),(0,r.kt)("p",null,"Then you can run the following commands to set webhook and enable bot related Messenger subscriptions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx bottender messenger webhook set\n")),(0,r.kt)("p",null,"Finally, you are ready to test your bot on Messenger."),(0,r.kt)("h3",{id:"in-production"},"In Production"),(0,r.kt)("p",null,"Run your Bottender project on your hosting by the following commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm start\n")),(0,r.kt)("p",null,"If you deployed your bot on ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com/"),", your Messenger Bot webhook is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com/webhooks/messenger")," with the default settings."),(0,r.kt)("h3",{id:"set-up-webhook-and-enable-subscriptions-by-command"},"Set Up Webhook and Enable Subscriptions by Command"),(0,r.kt)("p",null,"You can set your webhook by the command below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx bottender telegram webhook set -w https://example.com/webhooks/messenger\n")),(0,r.kt)("h3",{id:"set-up-webhook-and-enable-subscriptions-on-facebook-app-page"},"Set Up Webhook and Enable Subscriptions on Facebook App Page"),(0,r.kt)("p",null,"However, there are many more options and information on Facebook App page. You can also set up your webhook on Facebook App Page."),(0,r.kt)("p",null,"Traverse to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps"},"Your Facebook Apps")," \u2192 \\${Your App Page} \u2192 Messenger \u2192 Settings \u2192 Webhook. Click button ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Callback URL.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71392724-1a5aa080-2644-11ea-9293-37f9570e5ac7.png",alt:null})),(0,r.kt)("p",null,"Fill your webhook URL in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Callback URL")," and copy your ",(0,r.kt)("inlineCode",{parentName:"p"},"MESSENGER_VERIFY_TOKEN")," from ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," and paste to ",(0,r.kt)("inlineCode",{parentName:"p"},"Verify Token.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71392725-1a5aa080-2644-11ea-8e80-10ea96d19379.png",alt:null})),(0,r.kt)("p",null,"Please make sure that you have enabled ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriptions")," you need by clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit")," Button. We usually recommend developers to enable the following subscriptions: ",(0,r.kt)("inlineCode",{parentName:"p"},"messages, messaging_postbacks, messaging_optins, messaging_referrals, messaging_handovers, messaging_policy_enforcement.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71398058-3c5f1d80-265a-11ea-98ff-1bc8035ead60.png",alt:null})),(0,r.kt)("p",null,"Last but not least, let's echo again about Messenger's strict security policy. Before you release your bot to the public, you have to submit your App to Facebook to get relevant permissions, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"pages_message"),". For more information, see Facebook's official document, ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/messenger-platform/app-review/"},"Submitting Your Messenger App"),"."))}d.isMDXComponent=!0}}]);
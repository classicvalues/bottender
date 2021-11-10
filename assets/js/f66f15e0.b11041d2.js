"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34129],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=p(t),u=r,m=f["".concat(s,".").concat(u)]||f[u]||c[u]||o;return t?i.createElement(m,a(a({ref:n},d),{},{components:t})):i.createElement(m,a({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9738:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>f});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),a=["components"],l={id:"channel-line-liff",title:"LINE Front-end Framework (LIFF)"},s=void 0,p={unversionedId:"channel-line-liff",id:"version-1.0.5/channel-line-liff",isDocsHomePage:!1,title:"LINE Front-end Framework (LIFF)",description:"LINE Front-end Framework (LIFF) is the webview solution in LINE Apps. LIFF provides three different sizes of embedded webviews. You may use those sizes to enrich your users' experience:",source:"@site/versioned_docs/version-1.0.5/channel-line-liff.md",sourceDirName:".",slug:"/channel-line-liff",permalink:"/docs/1.0.5/channel-line-liff",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.0.5/channel-line-liff.md",tags:[],version:"1.0.5",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-line-liff",title:"LINE Front-end Framework (LIFF)"}},d=[{value:"Features in LIFF",id:"features-in-liff",children:[],level:3},{value:"LIFF V2",id:"liff-v2",children:[],level:2},{value:"Workflow",id:"workflow",children:[{value:"Creating LINE Login Channel",id:"creating-line-login-channel",children:[],level:3},{value:"Adding LIFF in the LINE Login Channel",id:"adding-liff-in-the-line-login-channel",children:[],level:3},{value:"Environment Variables Setting",id:"environment-variables-setting",children:[],level:3},{value:"Adding Custom Routes to HTTP Server for LIFF Pages",id:"adding-custom-routes-to-http-server-for-liff-pages",children:[],level:3},{value:"Initializing the LIFF Page",id:"initializing-the-liff-page",children:[],level:3},{value:"Sending Messages from LIFF page",id:"sending-messages-from-liff-page",children:[],level:3},{value:"Sending LIFF LINK to the User",id:"sending-liff-link-to-the-user",children:[],level:3}],level:2}],c={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LINE Front-end Framework (LIFF)")," is the webview solution in LINE Apps. LIFF provides three different sizes of embedded webviews. You may use those sizes to enrich your users' experience:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/563929/73712876-6a01b100-4746-11ea-8f85-22b8026882d5.png",alt:"different sizes of liff"})),(0,o.kt)("p",null,"Besides, LIFF gives you more chances to improve interactions between users and the chatbot. One of the common scenarios is submitting a form in LINE Bots."),(0,o.kt)("h3",{id:"features-in-liff"},"Features in LIFF"),(0,o.kt)("p",null,"LIFF lets you access a lot of different APIs on your web pages. Before getting started, you may want to grab some basic knowledge from LINE official docs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.line.biz/en/reference/liff/#get-profile"},"Getting user profile")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.line.biz/en/reference/liff/#send-messages"},"Sending messages to LINE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.line.biz/en/reference/liff/#open-window"},"Opening link in external browser")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.line.biz/en/reference/liff/#scan-code"},"Scanning QR Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.line.biz/en/reference/liff/#bluetooth-request-device"},"Connecting to Bluetooth devices")),(0,o.kt)("li",{parentName:"ul"},"Others features in ",(0,o.kt)("a",{parentName:"li",href:"https://playground-for-liff.linecorp.com/"},"LIFF playground"))),(0,o.kt)("h2",{id:"liff-v2"},"LIFF V2"),(0,o.kt)("p",null,"LIFF v2 introduces some new features to developers, e.g., scanning QR codes, allowing users to open LIFF pages on the Desktop version of the LINE app."),(0,o.kt)("p",null,"For catching up quickly, this is a minimal implementation - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/examples/line-liff-v2"},"Bottender example with LIFF v2"),"."),(0,o.kt)("p",null,"The following sections are step by step tutorials about how to send messages with LIFF in a Bottender project created by ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.0.5/#create-a-new-bottender-app"},"Create Bottender App"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," LIFF v1 is not recommended anymore. If you're using it, you should migrate to LIFF v2. However, you could still find an example for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/examples/line-liff-v1"},"LIFF v1 here"),".")),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,"For making your LIFF pages work, your typical workflow should look like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating a LINE Login channel in ",(0,o.kt)("a",{parentName:"li",href:"https://developers.line.biz/console/"},"LINE Developers console")),(0,o.kt)("li",{parentName:"ul"},"Adding a LIFF app in the LINE Login channel"),(0,o.kt)("li",{parentName:"ul"},"Developing the LIFF page")),(0,o.kt)("h3",{id:"creating-line-login-channel"},"Creating LINE Login Channel"),(0,o.kt)("p",null,"First of all, you need to open ",(0,o.kt)("a",{parentName:"p",href:"https://developers.line.biz/console/"},"LINE Developers Console")," to create a LINE Login channel."),(0,o.kt)("p",null,"For more details about creating a LINE Login channel, please checkout ",(0,o.kt)("a",{parentName:"p",href:"https://developers.line.biz/en/docs/liff/getting-started/#creating-a-provider-and-channel"},"Creating A Provider and Channel"),"."),(0,o.kt)("h3",{id:"adding-liff-in-the-line-login-channel"},"Adding LIFF in the LINE Login Channel"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Click the "LIFF" tab in the LINE Login Channel you just created.'),(0,o.kt)("li",{parentName:"ul"},'Click the "Add" button'),(0,o.kt)("li",{parentName:"ul"},'Fill in the "Endpoint URL" in this format: ',(0,o.kt)("inlineCode",{parentName:"li"},"https://{your domain}.ngrok.io/liff")),(0,o.kt)("li",{parentName:"ul"},"Fill in other values")),(0,o.kt)("p",null,"For more details about registering a LIFF app, please checkout ",(0,o.kt)("a",{parentName:"p",href:"https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app"},"Registering LIFF App"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok")," is a well-known service that provides public HTTPS URLs for your local server using the tunnel. When you develop your bot, you may want to use ngrok to get a temporary HTTPS URL.")),(0,o.kt)("h3",{id:"environment-variables-setting"},"Environment Variables Setting"),(0,o.kt)("p",null,"If you are familiar with any official Bottender example, you may already know about how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file to manage your environment variables in your local project."),(0,o.kt)("p",null,"In this case, you need to add another ",(0,o.kt)("inlineCode",{parentName:"p"},"LINE_LIFF_ID")," env to ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, so there are at least those three LINE related environment variables in your file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"LINE_ACCESS_TOKEN={your LINE access token from LINE Messaging API channel}\nLINE_CHANNEL_SECRET={your LINE channel secret from LINE Messaging API channel}\nLINE_LIFF_ID={your LIFF id from LINE Login channel}\n")),(0,o.kt)("p",null,"You could find your LIFF ID in the LIFF URL. The format of LIFF URL looks like ",(0,o.kt)("inlineCode",{parentName:"p"},"line://app/{your LIFF ID}"),"."),(0,o.kt)("p",null,"For more details about LIFF ID, please checkout ",(0,o.kt)("a",{parentName:"p",href:"https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app"},"Registering LIFF App (in step 4)"),"."),(0,o.kt)("h3",{id:"adding-custom-routes-to-http-server-for-liff-pages"},"Adding Custom Routes to HTTP Server for LIFF Pages"),(0,o.kt)("p",null,"To serve LIFF webpages, we need to add additional routes to the server. Fortunately, ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.0.5/advanced-guides-custom-server#the-concept"},"custom server")," come to the rescue!"),(0,o.kt)("p",null,"You could use express, koa, restify, or whatever you like, but we are going to use express in this guide. Before going down, make sure that you set up correctly according to ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.0.5/advanced-guides-custom-server#express"},"this guide"),"."),(0,o.kt)("p",null,"After having a custom server, you could add the following two routes into ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js")," to handle requests from LIFF."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"server.get('/send-id', (req, res) => {\n  res.json({ id: process.env.LINE_LIFF_ID });\n});\n\nserver.get('/liff', (req, res) => {\n  const filename = path.join(`${__dirname}/liff.html`);\n  res.sendFile(filename);\n});\n")),(0,o.kt)("h3",{id:"initializing-the-liff-page"},"Initializing the LIFF Page"),(0,o.kt)("p",null,"Before starting using any feature provided by LIFF, you need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"liff.html")," file in the root directory of the project and copy the following code into it for LIFF initialization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>BOTTENDER LINE LIFF V2 DEMO</title>\n  </head>\n\n  <body>\n    <script src="https://static.line-scdn.net/liff/edge/2.1/sdk.js"><\/script>\n    <script>\n      function initializeLiff(myLiffId) {\n        liff\n          .init({\n            liffId: myLiffId,\n          })\n          .then(() => {\n            alert(\'LIFF init success!\');\n          })\n          .catch((err) => {\n            alert(`error: ${JSON.stringify(err)}`);\n          });\n      }\n\n      document.addEventListener(\'DOMContentLoaded\', () => {\n        fetch(`/send-id`)\n          .then((reqResponse) => reqResponse.json())\n          .then((jsonResponse) => {\n            let myLiffId = jsonResponse.id;\n            initializeLiff(myLiffId);\n          })\n          .catch((err) => {\n            alert(`error: ${JSON.stringify(err)}`);\n          });\n      });\n    <\/script>\n  </body>\n</html>\n')),(0,o.kt)("p",null,"It is worth mentioning that ",(0,o.kt)("inlineCode",{parentName:"p"},"liff.init()")," and some other ",(0,o.kt)("inlineCode",{parentName:"p"},"liff")," methods return ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," as results, so you should handle those asynchronous code carefully."),(0,o.kt)("h3",{id:"sending-messages-from-liff-page"},"Sending Messages from LIFF page"),(0,o.kt)("p",null,"After initializing the LIFF page, we can call ",(0,o.kt)("inlineCode",{parentName:"p"},"liff.sendMessages")," to send messages in the thread imperatively. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"liff.sendMessages([\n  {\n    type: 'text',\n    text: 'Hello, LIFF!',\n  },\n]);\n")),(0,o.kt)("p",null,"Up to five texts, images, videos, audios, locations, templates (only a URI action can be set as an action), and flex messages are acceptable."),(0,o.kt)("p",null,"Let's add a click event listener to send messages on click. You could replace the body tag in ",(0,o.kt)("inlineCode",{parentName:"p"},"liff.html")," with the following implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <button id=\"button\">send test message</button>\n  <script src=\"https://static.line-scdn.net/liff/edge/2.1/sdk.js\"><\/script>\n  <script>\n    function initializeLiff(myLiffId) {\n      liff\n        .init({\n          liffId: myLiffId,\n        })\n        .then(() => {\n          setButtonHandler();\n        })\n        .catch((err) => {\n          alert(`error: ${JSON.stringify(err)}`);\n        });\n    }\n\n    function setButtonHandler() {\n      let button = document.getElementById('button');\n      button.addEventListener('click', () => {\n        window.alert('clicked: sendMessages');\n        liff\n          .sendMessages([\n            {\n              type: 'text',\n              text: 'Hello, LIFF!',\n            },\n          ])\n          .then(() => {\n            alert('message sent');\n            liff.closeWindow();\n          })\n          .catch((err) => {\n            window.alert('Error sending message: ' + err);\n          });\n      });\n    }\n\n    document.addEventListener('DOMContentLoaded', () => {\n      fetch(`/send-id`)\n        .then((reqResponse) => reqResponse.json())\n        .then((jsonResponse) => {\n          let myLiffId = jsonResponse.id;\n          initializeLiff(myLiffId);\n        })\n        .catch((err) => {\n          alert(`error: ${JSON.stringify(err)}`);\n        });\n    });\n  <\/script>\n</body>\n")),(0,o.kt)("h3",{id:"sending-liff-link-to-the-user"},"Sending LIFF LINK to the User"),(0,o.kt)("p",null,"To test the LIFF page, you could replace the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," to send the LIFF URL to the user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = async function App(context) {\n  const liffUrl = `https://liff.line.me/${process.env.LINE_LIFF_ID}`;\n  await context.sendText(liffUrl);\n};\n")),(0,o.kt)("p",null,"Now, you could execute ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn dev")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev")," to start the server, and you have a LINE Bot with a simple LIFF page."))}f.isMDXComponent=!0}}]);
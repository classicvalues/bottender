"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88243],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),v=a,m=d["".concat(i,".").concat(v)]||d[v]||p[v]||r;return t?o.createElement(m,l(l({ref:n},u),{},{components:t})):o.createElement(m,l({ref:n},u))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90822:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>c,toc:()=>u,default:()=>d});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),l=["components"],s={id:"channel-line-handling-events",title:"Handling LINE Events",original_id:"channel-line-handling-events"},i=void 0,c={unversionedId:"channel-line-handling-events",id:"version-1.4/channel-line-handling-events",isDocsHomePage:!1,title:"Handling LINE Events",description:"For a LINE bot, the two most frequent LINE events are Text Event and Payload Event.",source:"@site/versioned_docs/version-1.4/channel-line-handling-events.md",sourceDirName:".",slug:"/channel-line-handling-events",permalink:"/docs/1.4/channel-line-handling-events",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.4/channel-line-handling-events.md",tags:[],version:"1.4",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-line-handling-events",title:"Handling LINE Events",original_id:"channel-line-handling-events"},sidebar:"version-1.4/docs",previous:{title:"LINE Setup",permalink:"/docs/1.4/channel-line-setup"},next:{title:"Sending LINE Messages",permalink:"/docs/1.4/channel-line-sending-messages"}},u=[{value:"Text Events",id:"text-events",children:[],level:2},{value:"Payload Events",id:"payload-events",children:[],level:2},{value:"Retrieving Media Content from Message",id:"retrieving-media-content-from-message",children:[],level:2},{value:"Other Events",id:"other-events",children:[{value:"Follow / Unfollow Events",id:"follow--unfollow-events",children:[],level:3},{value:"Group/Room Events",id:"grouproom-events",children:[],level:3}],level:2},{value:"Handling Events with Router",id:"handling-events-with-router",children:[],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For a LINE bot, the two most frequent LINE events are ",(0,r.kt)("strong",{parentName:"p"},"Text Event")," and ",(0,r.kt)("strong",{parentName:"p"},"Payload Event"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#text-events"},"Text Event")," is triggered when a user inputs text."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#payload-events"},"Payload Event")," can be triggered by postback buttons on template, imagemap, flex messages and rich menus, or quick replies.")),(0,r.kt)("p",null,"Apart from the above events, LINE also supports advanced events for better user experience. For example, ",(0,r.kt)("a",{parentName:"p",href:"#follow--unfollow-events"},"Follow Event")," offers the best timing to say hello to new users. ",(0,r.kt)("a",{parentName:"p",href:"#follow--unfollow-events"},"Unfollow Event")," allows the bot to clean up previous user data. ",(0,r.kt)("a",{parentName:"p",href:"#grouproom-events"},"Group/Room Related Events")," are necessary for bots served in group chats."),(0,r.kt)("h2",{id:"text-events"},"Text Events"),(0,r.kt)("p",null,"The most common events are text message events. To determine whether the event is a text message event, you may use the ",(0,r.kt)("inlineCode",{parentName:"p"},"context.event.isText")," boolean value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isText) {\n    // handling the text message event\n  }\n}\n")),(0,r.kt)("p",null,"You can get the text content from ",(0,r.kt)("inlineCode",{parentName:"p"},"context.event.text")," to use it in the reply. A common usage of repeating user input is for confirmation, e.g., booking a hotel or a flight."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isText) {\n    await context.sendText(`received the text message: ${context.event.text}`);\n  }\n}\n")),(0,r.kt)("h2",{id:"payload-events"},"Payload Events"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload Event")," is the second frequent event type, which can be triggered by postback buttons on template, imagemap, flex messages and rich menus, or quick replies. To determine whether the event type is a Payload Event, you may use ",(0,r.kt)("inlineCode",{parentName:"p"},"context.event.isPayload")," boolean value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isPayload) {\n    // handling the payload event\n  }\n}\n")),(0,r.kt)("p",null,"You can get the payload content from ",(0,r.kt)("inlineCode",{parentName:"p"},"context.event.payload")," and use it in the reply:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  if (context.event.isPayload) {\n    await context.sendText(`received the payload: ${context.event.payload}`);\n  }\n}\n")),(0,r.kt)("h2",{id:"retrieving-media-content-from-message"},"Retrieving Media Content from Message"),(0,r.kt)("p",null,"When you receive a media message, e.g., image, video, or audio message, the message content is not covered in the request.\nYou can make further responses based on the user's message content, e.g., add a photo frame, convert the audio message into text. You can get message content by ",(0,r.kt)("inlineCode",{parentName:"p"},"context.getMessageContent()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fileType = require('file-type');\nconst fs = require('fs');\n\nasync function App(context) {\n  if (context.event.isImage || context.event.isVideo || context.event.isAudio) {\n    const buffer = await context.getMessageContent();\n    const { ext } = fileType(buffer);\n\n    const filename = `my-file.${ext}`;\n\n    // You can do whatever you want, for example, write buffer into file system\n    await fs.promises.writeFile(filename, buffer);\n  }\n}\n")),(0,r.kt)("h2",{id:"other-events"},"Other Events"),(0,r.kt)("h3",{id:"follow--unfollow-events"},"Follow / Unfollow Events"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Follow Event")," is the best entry point for bot introduction, e.g., the bot user manual and killer features. It is triggered When a user adds your bot as a friend, ."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Alternative entry point of bot introduction is ",(0,r.kt)("strong",{parentName:"p"},"rich menu"),". You can set your rich menu open as default, to help your users understand and access the major features of your bot.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unfollow Event")," is triggered when a user blocked your bot, which implies that you can't send more messages to your previous user. The only thing you can do is clean up your previous user data, or think about how to improve bot user experience to keep your users engaged."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function HandleFollow(context) {\n  console.log(context.event.follow);\n  // {\n  //   type: 'user',\n  //   userId: 'U206d25c2ea6bd87c17655609a1c37cb8',\n  // }\n}\n\nasync function HandleUnfollow(context) {\n  console.log(context.event.unfollow);\n  // {\n  //   type: 'user',\n  //   userId: 'U206d25c2ea6bd87c17655609a1c37cb8',\n  // }\n}\n\nasync function App(context) {\n  if (context.event.isFollow) {\n    return HandleFollow;\n  }\n  if (context.event.isUnfollow) {\n    return HandleUnfollow;\n  }\n}\n")),(0,r.kt)("h3",{id:"grouproom-events"},"Group/Room Events"),(0,r.kt)("p",null,"A bot inside group/room makes various kinds of group vote possible, e.g., the restaurant for lunch, the destination for the company trip, or gifts for a lucky draw. In the following example, you can see how to handle Join Event and Leave Event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function HandleJoin(context) {\n  console.log(context.event.join);\n  // {\n  //   type: 'group',\n  //   groupId: 'cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',\n  // }\n}\n\nasync function HandleLeave(context) {\n  console.log(context.event.leave);\n  // {\n  //   type: 'group',\n  //   groupId: 'cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',\n  // }\n}\n\nasync function App(context) {\n  if (context.event.isJoin) {\n    return HandleJoin;\n  }\n  if (context.event.isLeave) {\n    return HandleLeave;\n  }\n}\n")),(0,r.kt)("h2",{id:"handling-events-with-router"},"Handling Events with Router"),(0,r.kt)("p",null,"Bottender includes a bunch of helpers to route within your LINE or multi-platform app. To learn more about how to use those LINE particular routes with router, check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.4/channel-line-routing"},"LINE Routing"),"."))}d.isMDXComponent=!0}}]);
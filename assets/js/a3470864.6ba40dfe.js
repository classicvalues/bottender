"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,u=h["".concat(s,".").concat(m)]||h[m]||d[m]||r;return n?o.createElement(u,l(l({ref:t},c),{},{components:n})):o.createElement(u,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},31293:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>h});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],i={id:"channel-messenger-handover-protocol",title:"Messenger Handover Protocol",original_id:"channel-messenger-handover-protocol"},s=void 0,p={unversionedId:"channel-messenger-handover-protocol",id:"version-1.5/channel-messenger-handover-protocol",isDocsHomePage:!1,title:"Messenger Handover Protocol",description:"Since Messenger has become a critical customer support channel between brands and customers, the cooperation between Messenger Bots and human agents creates a complete customer journey on messaging business.",source:"@site/versioned_docs/version-1.5/channel-messenger-handover-protocol.md",sourceDirName:".",slug:"/channel-messenger-handover-protocol",permalink:"/docs/channel-messenger-handover-protocol",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.5/channel-messenger-handover-protocol.md",tags:[],version:"1.5",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-messenger-handover-protocol",title:"Messenger Handover Protocol",original_id:"channel-messenger-handover-protocol"},sidebar:"version-1.5/docs",previous:{title:"Messenger Profile",permalink:"/docs/channel-messenger-profile"},next:{title:"Using Messenger Persona",permalink:"/docs/channel-messenger-persona"}},c=[{value:"<code>Thread Control</code>: Who is Answering the Customer",id:"thread-control-who-is-answering-the-customer",children:[],level:3},{value:"<code>Primary Receiver</code>: The Privilege App Role",id:"primary-receiver-the-privilege-app-role",children:[],level:3},{value:"Passing Thread Control",id:"passing-thread-control",children:[],level:2},{value:"Taking Thread Control and Requesting Thread Control",id:"taking-thread-control-and-requesting-thread-control",children:[],level:2},{value:"Getting the Thread Owner",id:"getting-the-thread-owner",children:[],level:2},{value:"Retrieving the List of Secondary Receivers",id:"retrieving-the-list-of-secondary-receivers",children:[],level:2},{value:"Webhook Events",id:"webhook-events",children:[{value:"app_role",id:"app_role",children:[],level:3},{value:"messaging_handovers",id:"messaging_handovers",children:[],level:3},{value:"standby",id:"standby",children:[],level:3},{value:"echo",id:"echo",children:[],level:3}],level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{width:"360",src:"https://user-images.githubusercontent.com/662387/71710521-a5534c00-2e37-11ea-8bb4-c3c0ea6656d9.jpg"})),(0,r.kt)("p",null,"Since Messenger has become a critical customer support channel between brands and customers, the cooperation between Messenger Bots and human agents creates a complete customer journey on messaging business."),(0,r.kt)("p",null,"Here comes the Messenger handover protocol, which aims to make a smooth transition between Messenger Bots and human agents in the compact Messenger window. Technically speaking, this protocol allows a Facebook Page simultaneously owns multiple Facebook Apps, e.g., a Facebook app for auto-reply, and another Facebook app for human agents support."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If you are curious how to change the profile image between Messenger Bot and human agents, please check Bottender's doc, ",(0,r.kt)("a",{parentName:"li",href:"/docs/channel-messenger-persona"},"Using Persona"),"."),(0,r.kt)("li",{parentName:"ul"},"For more information about handover protocol, please check Facebook's official doc, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/messenger-platform/handover-protocol/"},"Handover Protocol")))),(0,r.kt)("h3",{id:"thread-control-who-is-answering-the-customer"},(0,r.kt)("inlineCode",{parentName:"h3"},"Thread Control"),": Who is Answering the Customer"),(0,r.kt)("p",null,"Before going further, you have to know the concept of ",(0,r.kt)("inlineCode",{parentName:"p"},"Thread Control"),". Assume that there are multiple Facebook Apps behind a single Facebook page. Only one Facebook owns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Thread Control")," of a specific customer at a time, which means only one Facebook App can reply to the customer."),(0,r.kt)("h3",{id:"primary-receiver-the-privilege-app-role"},(0,r.kt)("inlineCode",{parentName:"h3"},"Primary Receiver"),": The Privilege App Role"),(0,r.kt)("p",null,"Among all the apps behind the Facebook Page, only a single app could be ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver"),", the rest are ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary Receivers"),"."),(0,r.kt)("p",null,"You may treat ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," as the boss. S/he is the only one who owns the privilege to allow other apps to reply. S/he can also take back ",(0,r.kt)("inlineCode",{parentName:"p"},"Thread Control")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary Receivers")," at any moment. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," owns the thread control, i.e., all messages sent to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver.")),(0,r.kt)("p",null,"You, or the Facebook Page admin, can change the app role, i,e, which app is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," at the Page Settings."),(0,r.kt)("p",null,"The default setting of App roles is a bit mysterious. It is like no app is ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver"),". We would suggest you check your app role settings and assign Bottender's app as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," to manage the ",(0,r.kt)("inlineCode",{parentName:"p"},"Thread Control.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71799800-34a76c00-3091-11ea-9c15-c6ed8069eda2.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71704543-010cdd80-2e16-11ea-8300-3e2f21291ce3.png",alt:null})),(0,r.kt)("p",null,"In the following table, you can see the difference in capability between ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary Receiver"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71662894-0aeafe00-2d8e-11ea-9de8-df807e7cfdd9.png",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If you can't wait to begin with an example, you can jump to Bottender's example, ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Yoctol/bottender/tree/master/examples/messenger-handover"},"Messenger Handover"),"."),(0,r.kt)("li",{parentName:"ul"},"For more information, you can refer to Facebook's official doc, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/messenger-platform/handover-protocol/assign-app-roles"},"Assigning App Roles")))),(0,r.kt)("h2",{id:"passing-thread-control"},"Passing Thread Control"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Pass Thread Control")," API allows one app to pass the control of a conversation to another. The calling app can pass optional metadata to the receiving app in the API request. By the ",(0,r.kt)("inlineCode",{parentName:"p"},"pass_thread_control")," webhook, an app can know if it takes the thread control."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  await context.passThreadControl('target-app-id');\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Page Inbox")," is a unique official app of Facebook. It is the default Facebook app for every Facebook Page to reply to messages by human agents."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71801051-bc42aa00-3094-11ea-9137-e0cffc2a5bf6.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Page Inbox")," has three default folders: ",(0,r.kt)("inlineCode",{parentName:"p"},"Main"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Done"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Spam"),". When you set ",(0,r.kt)("inlineCode",{parentName:"p"},"Page Inbox")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary Receiver"),", all messages sent to your bot appears in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Done")," folder by default."),(0,r.kt)("p",null,"When the Page inbox has control of the conversation, all messages from the conversation move to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Inbox")," folder and wait for a human agent to respond. When you move a specific customer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Done")," folder, you indirectly pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"Thread Control")," of the customer to ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver"),", which is usually the Facebook App of your Bottender project."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71801472-ffe9e380-3095-11ea-97d3-1b8f449b0b61.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  await context.passThreadControlToPageInbox();\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"For more information, you can refer to Facebook's official doc, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/messenger-platform/handover-protocol/pass-thread-control"},"Passing Thread Control")))),(0,r.kt)("h2",{id:"taking-thread-control-and-requesting-thread-control"},"Taking Thread Control and Requesting Thread Control"),(0,r.kt)("p",null,"Take Thread Control API allows the ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," to take control of the conversation from ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary Receivers"),". It is useful when ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary Receiver")," is not responding. An optional metadata string may also be sent in the request."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary Receiver")," app receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"messaging_handovers")," webhook event when it loses control of the conversation. The event contains the metadata string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  await context.takeThreadControl();\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"For more information, you can refer to Facebook's official doc, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/messenger-platform/handover-protocol/take-thread-control"},"Take Thread Control")))),(0,r.kt)("p",null,"The Request Thread Control API allows a ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary Receiver")," to notify the ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," that it wants control of the chat. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," can then take control of the chat if necessary, then pass control to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary Receiver")," that sent the request. An optional metadata string may also be sent in the request."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," may also ignore the request and do nothing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  await context.requestThreadControl();\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"For more information, you can refer to Facebook's official doc, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/messenger-platform/handover-protocol/request-thread-control"},"Request Thread Control")))),(0,r.kt)("h2",{id:"getting-the-thread-owner"},"Getting the Thread Owner"),(0,r.kt)("p",null,"The following function helps you check which Facebook app owns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Thread Control"),". It is useful for bots that have complex implementations of the handover protocol, where an app's actions are dependent on whether it currently has thread control."),(0,r.kt)("p",null,"The Thread Owner API may be called by ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary Receivers"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function App(context) {\n  const threadOwner = await context.getThreadOwner();\n  console.log(threadOwner); // { appId: "thread-owner-app-id" }\n}\n')),(0,r.kt)("p",null,"Bottender offers a handy function, ",(0,r.kt)("inlineCode",{parentName:"p"},"isThreadOwner"),", to check whether the Facebook App of Bottender code owns the thread. This function uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"appId")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," to compare with the current App Id from ",(0,r.kt)("inlineCode",{parentName:"p"},"getThreadOwner"),". So please make sure you have your ",(0,r.kt)("inlineCode",{parentName:"p"},"appId")," appropriately set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  const isThreadOwner = await context.isThreadOwner();\n  console.log(isThreadOwner); // true or false\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"For more information, you can refer to Facebook's official doc, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/messenger-platform/handover-protocol/get-thread-owner"},"Get Thread Owner")))),(0,r.kt)("h2",{id:"retrieving-the-list-of-secondary-receivers"},"Retrieving the List of Secondary Receivers"),(0,r.kt)("p",null,"This API allows ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," to get the list of ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary Receiver")," apps for a page."),(0,r.kt)("p",null,"By default, no app has been set explicitly as a Primary Receiver. We recommend you to config your Bottender app as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," to avoid any unexpected situations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function App(context) {\n  const secondaryReceivers = await context.client.getSecondaryReceivers();\n  console.log(secondaryReceivers);\n  // [\n  //   {\n  //     id: "12345678910",\n  //     name: "David\'s Composer"\n  //   },\n  //   {\n  //     id: "23456789101",\n  //     name: "Messenger Rocks"\n  //   }\n  // ]\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"For more information, you can refer to Facebook's official doc, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/messenger-platform/reference/handover-protocol/secondary-receivers/"},"Secondary Receivers List API Reference")))),(0,r.kt)("h2",{id:"webhook-events"},"Webhook Events"),(0,r.kt)("p",null,"In the following section, we would like to highlight a few highly related webhook events. Please make sure you have enable corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"Page Subscription Fields")," in your Facebook App Settings."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/71803615-3a567f00-309c-11ea-959f-9c3ba16fae89.png",alt:null})),(0,r.kt)("h3",{id:"app_role"},"app_role"),(0,r.kt)("p",null,"Once a role is assigned, either ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary Receiver")," app gets an ",(0,r.kt)("inlineCode",{parentName:"p"},"app_role")," webhook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  recipient: {\n    id: '<PSID>'\n  },\n  timestamp: 1458692752478,\n  appRoles: {\n    123456789: ['primary_receiver'],\n  },\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"For more information, you can refer to Facebook's official doc, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/messenger-platform/handover-protocol/assign-app-roles"},"Assign App Roles.")))),(0,r.kt)("h3",{id:"messaging_handovers"},"messaging_handovers"),(0,r.kt)("p",null,"The messaging_handovers webhook event notifies an app's webhook when the following actions happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Thread control is passed to the app"),(0,r.kt)("li",{parentName:"ul"},"Thread control is taken from the app"),(0,r.kt)("li",{parentName:"ul"},"App role is changed")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"For more information, you can refer to Facebook's official doc, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/messaging_handovers"},"messaging_handovers")))),(0,r.kt)("h3",{id:"standby"},"standby"),(0,r.kt)("p",null,"For bots using the handover protocol, this callback occurs when a message has been sent to your page, but your app is not the current thread owner."),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"For more information, you can refer to Facebook's official doc, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/standby"},"standby")))),(0,r.kt)("h3",{id:"echo"},"echo"),(0,r.kt)("p",null,"This callback occurs when a message has been sent by your page."),(0,r.kt)("p",null,"It is helpful when your ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Receiver")," app, e.g., Bottender code, has passed ",(0,r.kt)("inlineCode",{parentName:"p"},"Thread Control")," to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary Receiver app"),", e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"Page Inbox"),". However, you want to make sure your bot takes ",(0,r.kt)("inlineCode",{parentName:"p"},"Thread Control")," back after a certain amount of time."),(0,r.kt)("p",null,"You can subscribe to this callback by selecting the message_echoes field when setting up your webhook."),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"For more information, you can refer to Facebook's official doc, ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/message-echoes"},"echo")))))}h.isMDXComponent=!0}}]);
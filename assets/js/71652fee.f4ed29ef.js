"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,d=h["".concat(u,".").concat(m)]||h[m]||p[m]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91604:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>u,metadata:()=>l,toc:()=>c,default:()=>h});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"the-basics-routing",title:"Routing",original_id:"the-basics-routing"},u=void 0,l={unversionedId:"the-basics-routing",id:"version-1.5/the-basics-routing",isDocsHomePage:!1,title:"Routing",description:'Routing is a pattern that helps you organize your Bottender actions in your Bottender app. For example, you can use the router function and the text function to create an action that handles "hi" and "hello" text message events with the different actions (SayHi and SayHello) as follows:',source:"@site/versioned_docs/version-1.5/the-basics-routing.md",sourceDirName:".",slug:"/the-basics-routing",permalink:"/docs/the-basics-routing",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.5/the-basics-routing.md",tags:[],version:"1.5",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"the-basics-routing",title:"Routing",original_id:"the-basics-routing"},sidebar:"version-1.5/docs",previous:{title:"Bottender Actions",permalink:"/docs/the-basics-actions"},next:{title:"Chain of Responsibility",permalink:"/docs/the-basics-chain"}},c=[{value:"Regular Expression Routes",id:"regular-expression-routes",children:[],level:2},{value:"Fallback Routes",id:"fallback-routes",children:[],level:2},{value:"Payload Routes",id:"payload-routes",children:[],level:2},{value:"Custom Routes",id:"custom-routes",children:[],level:2},{value:"Platform Specific Routes",id:"platform-specific-routes",children:[],level:2}],p={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Routing")," is a pattern that helps you organize your ",(0,a.kt)("a",{parentName:"p",href:"/docs/the-basics-actions"},"Bottender actions")," in your Bottender app. For example, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"router")," function and the ",(0,a.kt)("inlineCode",{parentName:"p"},"text"),' function to create an action that handles "hi" and "hello" text message events with the different actions (',(0,a.kt)("inlineCode",{parentName:"p"},"SayHi")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SayHello"),") as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { router, text } = require('bottender/router');\n\nasync function SayHi(context) {\n  await context.sendText('Hi!');\n}\n\nasync function SayHello(context) {\n  await context.sendText('Hello!');\n}\n\nasync function App() {\n  return router([\n    // return the `SayHi` action when receiving \"hi\" text messages\n    text('hi', SayHi),\n    // return the `SayHello` action when receiving \"hello\" text messages\n    text('hello', SayHello),\n  ]);\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," The ",(0,a.kt)("inlineCode",{parentName:"p"},"router")," function, the ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," function, and some other functions that we introduce below are coming from the ",(0,a.kt)("inlineCode",{parentName:"p"},"bottender/router")," module. If you want to use them, make sure to import them from the ",(0,a.kt)("inlineCode",{parentName:"p"},"bottender/router")," module correctly.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"router")," function takes an array of routes to create a router. The created router checks each route is matching the condition or not in the specified order and returns the provided action of the first matching route."),(0,a.kt)("p",null,"The first argument of the ",(0,a.kt)("inlineCode",{parentName:"p"},"text"),' function defines the matching rule, which could also be an array of strings. In the following example, when receiving "hi", "hello" or "hey" text messages, the router returns the ',(0,a.kt)("inlineCode",{parentName:"p"},"SayHi")," action:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  return router([\n    // return the `SayHi` action when receiving \"hi\", \"hello\" or \"hey\" text messages\n    text(['hi', 'hello', 'hey'], SayHi),\n  ]);\n}\n")),(0,a.kt)("h2",{id:"regular-expression-routes"},"Regular Expression Routes"),(0,a.kt)("p",null,"If you are familiar with ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"regular expressions"),", you can use JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp")," to extend your matching rules as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'async function App(context) {\n  return router([\n    // return the `SayHi` action when receiving case-insensitive "hi" or "hello" text messages\n    text(/^(hi|hello)$/i, SayHi),\n  ]);\n}\n')),(0,a.kt)("p",null,'By using the regular expression, your bot now handles "HI", "Hello" text messages as well.'),(0,a.kt)("p",null,"Sometimes you may want to add ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-regexp-named-groups"},"named capture groups to your JavaScript RegExps"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'async function App(context) {\n  return router([\n    // return the `Command` action when receiving "/join", "/invite", or "/whatever" text messages\n    text(/^\\/(?<command>\\S+)$/i, Command),\n  ]);\n}\n')),(0,a.kt)("p",null,"Then, you can access the result of the match groups in your ",(0,a.kt)("inlineCode",{parentName:"p"},"props"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function Command(\n  context,\n  {\n    match: {\n      groups: { command },\n    },\n  }\n) {\n  // | input | command |\n  // | --------- | ---------- |\n  // | /join | `join` |\n  // | /invite | `invite` |\n  // | /whatever | `whatever` |\n  await context.sendText(`Executing command: ${command}`);\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp Named Capturing Groups")," is supported by Node 10+.")),(0,a.kt)("h2",{id:"fallback-routes"},"Fallback Routes"),(0,a.kt)("p",null,"By using the ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," as the first argument of the ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," function, you may define a route for the unhandled text message events. The route triggers whenever no other route matches the incoming text event. Meanwhile, handling unhandled text message events is a chance to guide your users by sending a fallback message or a user's manual. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function Unknown(context) {\n  await context.sendText('Sorry. I do not understand what you say.');\n}\n\nasync function App(context) {\n  return router([\n    text(/^(hi|hello)$/i, SayHi),\n    // return the `Unknown` action when when no other route matches the incoming text message\n    text('*', Unknown),\n  ]);\n}\n")),(0,a.kt)("p",null,"Besides all unhandled text message events, you can fallback all kind of events by using ",(0,a.kt)("inlineCode",{parentName:"p"},"route('*', ...)")," instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { router, route, text } = require('bottender/router');\n\nasync function App(context) {\n  return router([\n    text(/^(hi|hello)$/i, SayHi),\n    // return the `Unknown` action when no other route matches the incoming event\n    route('*', Unknown),\n  ]);\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," The fallback route must be the last route in your router.")),(0,a.kt)("h2",{id:"payload-routes"},"Payload Routes"),(0,a.kt)("p",null,"Payload events typically happen when users send payload data by clicking buttons, selecting menus, or clicking keyboards. For example, you may catch ",(0,a.kt)("inlineCode",{parentName:"p"},"GET_STARTED")," payload that sends by clicking the button and respond with the ",(0,a.kt)("inlineCode",{parentName:"p"},"SayHi")," action:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { router, payload } = require('bottender/router');\n\nasync function App(context) {\n  return router([\n    payload('GET_STARTED', SayHi),\n    // return the `Unknown` action when no other route matches the incoming event\n    route('*', Unknown),\n  ]);\n}\n")),(0,a.kt)("h2",{id:"custom-routes"},"Custom Routes"),(0,a.kt)("p",null,"If you prefer to use your route predicate, you may use the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," function to create your route wrapper. The ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," function takes a function that returns a boolean as the first argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { router, route } = require('bottender/router');\n\nfunction sayHiTo(name, Action) {\n  return route((context) => context.event.text === `Hi ${name}`, Action);\n}\n\nasync function App(context) {\n  return router([\n    sayHiTo('Bottender', SayHi),\n    // return the `Unknown` action when no other route matches the incoming event\n    route('*', Unknown),\n  ]);\n}\n")),(0,a.kt)("p",null,'In the above example, the custom route matches the "Hi Bottender" text messages and returns the ',(0,a.kt)("inlineCode",{parentName:"p"},"SayHi")," action."),(0,a.kt)("h2",{id:"platform-specific-routes"},"Platform Specific Routes"),(0,a.kt)("p",null,"Bottender includes a bunch of helpers to route within your multi-platform app. To learn more about the details of those specific routes, check out their documentation accordingly:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channel-messenger-routing"},"Messenger Routes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channel-whatsapp-routing"},"WhatsApp Routes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channel-line-routing"},"LINE Routes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channel-slack-routing"},"Slack Routes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channel-telegram-routing"},"Telegram Routes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channel-viber-routing"},"Viber Routes"))))}h.isMDXComponent=!0}}]);
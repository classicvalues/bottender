"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96297:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>m});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"api-context",title:"Context",original_id:"api-context"},p=void 0,s={unversionedId:"api-context",id:"version-1.2.0/api-context",isDocsHomePage:!1,title:"Context",description:"Bottender context encapsulates many helpful methods and exports session, client, event, etc., which makes you easier to develop chatbots on different platforms.",source:"@site/versioned_docs/version-1.2.0/api-context.md",sourceDirName:".",slug:"/api-context",permalink:"/docs/1.2.0/api-context",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.2.0/api-context.md",tags:[],version:"1.2.0",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"api-context",title:"Context",original_id:"api-context"},sidebar:"version-1.2.0/api",next:{title:"Event",permalink:"/docs/1.2.0/api-event"}},c=[{value:"<code>platform</code>",id:"platform",children:[],level:4},{value:"<code>client</code>",id:"client",children:[],level:4},{value:"<code>event</code>",id:"event",children:[],level:4},{value:"<code>session</code>",id:"session",children:[],level:4},{value:"<code>state</code>",id:"state",children:[],level:4},{value:"<code>setState(state)</code>",id:"setstatestate",children:[],level:4},{value:"<code>resetState()</code>",id:"resetstate",children:[],level:4},{value:"<code>typing(milliseconds)</code>",id:"typingmilliseconds",children:[],level:4},{value:"<code>sendText(text, options)</code>",id:"sendtexttext-options",children:[],level:4}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Bottender context encapsulates many helpful methods and exports session, client, event, etc., which makes you easier to develop chatbots on different platforms."),(0,l.kt)("p",null,"For platform specific methods, please check out following links:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Platform"),(0,l.kt)("th",{parentName:"tr",align:null},"Doc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Console"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"api-console-context"},"APIReference-ConsoleContext"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.messenger.com/"},"Messenger")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"api-messenger-context"},"APIReference-MessengerContext"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://line.me/"},"LINE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"api-line-context"},"APIReference-LineContext"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://slack.com/"},"Slack")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"api-slack-context"},"APIReference-SlackContext"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://telegram.org/"},"Telegram")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"api-telegram-context"},"APIReference-TelegramContext"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.viber.com/"},"Viber")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"api-viber-context"},"APIReference-ViberContext"))))),(0,l.kt)("h4",{id:"platform"},(0,l.kt)("inlineCode",{parentName:"h4"},"platform")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"context.platform; // 'console', 'messenger', 'line', 'slack', 'telegram', 'viber'...\n")),(0,l.kt)("h4",{id:"client"},(0,l.kt)("inlineCode",{parentName:"h4"},"client")),(0,l.kt)("p",null,"The client instance. Client type depends on your platform."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/messaging-apis"},"Messaging APIs")," for more information."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"context.client; // client from [Messaging APIs](https://github.com/Yoctol/messaging-apis)\n")),(0,l.kt)("h4",{id:"event"},(0,l.kt)("inlineCode",{parentName:"h4"},"event")),(0,l.kt)("p",null,"The event instance. Event type depends on your platform."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"context.event;\n")),(0,l.kt)("h4",{id:"session"},(0,l.kt)("inlineCode",{parentName:"h4"},"session")),(0,l.kt)("p",null,"The session instance."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"context.session.id;\n")),(0,l.kt)("h4",{id:"state"},(0,l.kt)("inlineCode",{parentName:"h4"},"state")),(0,l.kt)("p",null,"The state object."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"context.state;\n")),(0,l.kt)("h4",{id:"setstatestate"},(0,l.kt)("inlineCode",{parentName:"h4"},"setState(state)")),(0,l.kt)("p",null,"Shallow merge changes to the state."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"context.setState({\n  oneOfMyStateKey: '...',\n});\n")),(0,l.kt)("h4",{id:"resetstate"},(0,l.kt)("inlineCode",{parentName:"h4"},"resetState()")),(0,l.kt)("p",null,"Reset the state to the initial state."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"context.resetState();\n")),(0,l.kt)("h4",{id:"typingmilliseconds"},(0,l.kt)("inlineCode",{parentName:"h4"},"typing(milliseconds)")),(0,l.kt)("p",null,"Delay and show indicators for milliseconds."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"milliseconds"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Number")),(0,l.kt)("td",{parentName:"tr",align:null},"Wait for milliseconds and show typing.")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"async function MyAction(context) {\n  await context.typing(100); // turn on typing mode and wait 0.1 secs.\n  await context.sendText('Hello World');\n}\n")),(0,l.kt)("h4",{id:"sendtexttext-options"},(0,l.kt)("inlineCode",{parentName:"h4"},"sendText(text, options)")),(0,l.kt)("p",null,"Send text to the owner of the session."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"context.sendText('Hello');\n")))}m.isMDXComponent=!0}}]);
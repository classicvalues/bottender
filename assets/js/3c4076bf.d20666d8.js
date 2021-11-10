"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18767:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>i,toc:()=>c,default:()=>d});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],s={id:"api-slack-context",title:"SlackContext",original_id:"api-slack-context"},p=void 0,i={unversionedId:"api-slack-context",id:"version-1.3.1/api-slack-context",isDocsHomePage:!1,title:"SlackContext",description:"Chat API",source:"@site/versioned_docs/version-1.3.1/api-slack-context.md",sourceDirName:".",slug:"/api-slack-context",permalink:"/docs/1.3.1/api-slack-context",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.3.1/api-slack-context.md",tags:[],version:"1.3.1",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"api-slack-context",title:"SlackContext",original_id:"api-slack-context"},sidebar:"version-1.3.1/api",previous:{title:"LineEvent",permalink:"/docs/1.3.1/api-line-event"},next:{title:"SlackEvent",permalink:"/docs/1.3.1/api-slack-event"}},c=[{value:"Chat API",id:"chat-api",children:[],level:4},{value:"<code>postMessage(message [, options])</code> - Official docs",id:"postmessagemessage--options---official-docs",children:[],level:4},{value:"<code>postEphemeral(message [, options])</code> - Official docs",id:"postephemeralmessage--options---official-docs",children:[],level:4}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"chat-api"},"Chat API"),(0,l.kt)("h4",{id:"postmessagemessage--options---official-docs"},(0,l.kt)("inlineCode",{parentName:"h4"},"postMessage(message [, options])")," - ",(0,l.kt)("a",{parentName:"h4",href:"https://api.slack.com/methods/chat.postMessage"},"Official docs")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"sendText"),"."),(0,l.kt)("p",null,"Sends a message to the channel."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String ","|"," Object")),(0,l.kt)("td",{parentName:"tr",align:null},"The message to be sent, can be text message or attachment message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Other optional parameters.")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"context.postMessage({ text: 'Hello!' });\ncontext.postMessage({ attachments: [someAttachments] });\ncontext.postMessage('Hello!');\ncontext.postMessage('Hello!', { asUser: true });\n")),(0,l.kt)("p",null,"If you send message with ",(0,l.kt)("inlineCode",{parentName:"p"},"attachments"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"messaging-api-slack")," will automatically stringify the ",(0,l.kt)("inlineCode",{parentName:"p"},"attachments")," field for you."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"context.postMessage(\n  {\n    text: 'Hello!',\n    attachments: [\n      {\n        text: 'Choose a game to play',\n        fallback: 'You are unable to choose a game',\n        callbackId: 'wopr_game',\n        color: '#3AA3E3',\n        attachmentType: 'default',\n        actions: [\n          {\n            name: 'game',\n            text: 'Chess',\n            type: 'button',\n            value: 'chess',\n          },\n        ],\n      },\n    ],\n  },\n  {\n    asUser: true,\n  }\n);\n")),(0,l.kt)("br",null),(0,l.kt)("h4",{id:"postephemeralmessage--options---official-docs"},(0,l.kt)("inlineCode",{parentName:"h4"},"postEphemeral(message [, options])")," - ",(0,l.kt)("a",{parentName:"h4",href:"https://api.slack.com/methods/chat.postEphemeral"},"Official docs")),(0,l.kt)("p",null,"Sends an ephemeral message to the user."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String ","|"," Object")),(0,l.kt)("td",{parentName:"tr",align:null},"The message to be sent, can be text message or attachment message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Other optional parameters.")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"context.postEphemeral({ text: 'Hello!' });\ncontext.postEphemeral({ attachments: [someAttachments] });\ncontext.postEphemeral('Hello!');\ncontext.postEphemeral('Hello!', { asUser: true });\n")))}d.isMDXComponent=!0}}]);
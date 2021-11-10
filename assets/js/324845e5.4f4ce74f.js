"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(y,i(i({ref:t},l),{},{components:n})):o.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54108:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>p,toc:()=>l,default:()=>d});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"the-basics-actions",title:"Resolving Actions",original_id:"the-basics-actions"},c=void 0,p={unversionedId:"the-basics-actions",id:"version-1.1.0/the-basics-actions",isDocsHomePage:!1,title:"Resolving Actions",description:"Actions are the smallest building blocks of Bottender apps. An action describes what you want to respond according to the conversation context.",source:"@site/versioned_docs/version-1.1.0/the-basics-actions.md",sourceDirName:".",slug:"/the-basics-actions",permalink:"/docs/1.1.0/the-basics-actions",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.1.0/the-basics-actions.md",tags:[],version:"1.1.0",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"the-basics-actions",title:"Resolving Actions",original_id:"the-basics-actions"},sidebar:"version-1.1.0/docs",previous:{title:"Console Mode",permalink:"/docs/1.1.0/the-basics-console-mode"},next:{title:"Routing",permalink:"/docs/1.1.0/the-basics-routing"}},l=[{value:"Composing Actions",id:"composing-actions",children:[],level:2},{value:"Passing Props to Actions",id:"passing-props-to-actions",children:[],level:2},{value:"How to Debug",id:"how-to-debug",children:[],level:2}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Actions are the smallest building blocks of Bottender apps. An action describes what you want to respond according to the conversation context."),(0,r.kt)("p",null,"To define an action, just write a JavaScript function or async function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function SayHi(context) {\n  await context.sendText('Hi!');\n}\n")),(0,r.kt)("p",null,"Actions typically accept ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," as first argument. There are a bunch of stuff in the conversation context, and you can use them to construct your actions. For instance, you may use ",(0,r.kt)("inlineCode",{parentName:"p"},"context.sendText()")," to send a text to the user from the bot."),(0,r.kt)("h2",{id:"composing-actions"},"Composing Actions"),(0,r.kt)("p",null,"Actions can refer to other actions as their return value. This lets us use the same action abstraction for any level of detail."),(0,r.kt)("p",null,"For example, you may create an ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," action that says ",(0,r.kt)("inlineCode",{parentName:"p"},"Hi!")," back when it receives ",(0,r.kt)("inlineCode",{parentName:"p"},"hi")," and says sorry for anything else:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function SayHi(context) {\n  await context.sendText('Hi!');\n}\n\nasync function Unknown(context) {\n  await context.sendText('Sorry. I do not understand what you say.');\n}\n\nasync function App(context) {\n  if (context.event.text == 'hi') {\n    return SayHi;\n  }\n  return Unknown;\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," New Bottender apps created by Create Bottender App have a single ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," action as entry point in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.js"),". However, if you are very familiar with Bottender, you can rename the action or even use different structure instead.")),(0,r.kt)("h2",{id:"passing-props-to-actions"},"Passing Props to Actions"),(0,r.kt)("p",null,"Previously, you only saw Bottender actions that accept one argument - ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function SayHi(context) {\n  await context.sendText('Hi!');\n}\n")),(0,r.kt)("p",null,"However, you can access the second argument - ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," to define actions with flexibility in mind:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function SayHi(context, props) {\n  await context.sendText(`Hi, ${props.name}.`);\n}\n")),(0,r.kt)("p",null,"Instead of returning the action directly without ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),", you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"withProps")," to pass a single object as ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," to the action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { withProps } = require('bottender');\n\nasync function App(context) {\n  return withProps(SayHi, { name: 'Bob' });\n}\n")),(0,r.kt)("p",null,"Bottender will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"SayHi")," action with ",(0,r.kt)("inlineCode",{parentName:"p"},"{ name: 'Bob' }")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," and send ",(0,r.kt)("inlineCode",{parentName:"p"},"Hi, Bob.")," text message as result to the user."),(0,r.kt)("h2",{id:"how-to-debug"},"How to Debug"),(0,r.kt)("p",null,"Bottender use famous ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/debug"},"debug")," package internally to collect some helpful information that can be showed up when you provide corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable. To debug your actions, you may run your command with ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG=bottender:action"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"DEBUG=bottender:action npm start\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If you are developing your bots on Windows, you may use ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cross-env"},"cross-env")," to assign ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cross-env DEBUG=bottender:action npm start\n")),(0,r.kt)("p",null,"Or you may put your ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment setting into your ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DEBUG=bottender:action\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3382565/70204869-0dd9db00-175d-11ea-814f-140b3807f39d.gif",alt:null})),(0,r.kt)("p",null,"We recommend that you should always name your actions, so it will print meaningful paths for you to debug instead of showing ",(0,r.kt)("inlineCode",{parentName:"p"},"Anonymous")," as action name."))}d.isMDXComponent=!0}}]);
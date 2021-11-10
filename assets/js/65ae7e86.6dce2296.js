"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95086],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return t?n.createElement(y,a(a({ref:r},p),{},{components:t})):n.createElement(y,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3970:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>d});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],i={id:"the-basics-errors",title:"Error Handling",original_id:"the-basics-errors"},l=void 0,c={unversionedId:"the-basics-errors",id:"version-1.4/the-basics-errors",isDocsHomePage:!1,title:"Error Handling",description:"Customizing the Error Message",source:"@site/versioned_docs/version-1.4/the-basics-errors.md",sourceDirName:".",slug:"/the-basics-errors",permalink:"/docs/1.4/the-basics-errors",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.4/the-basics-errors.md",tags:[],version:"1.4",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"the-basics-errors",title:"Error Handling",original_id:"the-basics-errors"},sidebar:"version-1.4/docs",previous:{title:"Session",permalink:"/docs/1.4/the-basics-session"},next:{title:"Running Bottender with Custom Servers",permalink:"/docs/1.4/advanced-guides-custom-server"}},p=[{value:"Customizing the Error Message",id:"customizing-the-error-message",children:[],level:2},{value:"Sending Errors to Sentry",id:"sending-errors-to-sentry",children:[],level:2}],u={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"customizing-the-error-message"},"Customizing the Error Message"),(0,s.kt)("p",null,"Bottender makes displaying custom error messages easy for various runtime errors. To customize the error messages sending to users, you can create an ",(0,s.kt)("inlineCode",{parentName:"p"},"_error.js")," file in your project root:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// _error.js\n\nmodule.exports = async function HandleError(context, props) {\n  console.error(props.error);\n  // or you can choose not to reply any error messages\n  await context.sendText(\n    'There are some unexpected errors happened. Please try again later, sorry for the inconvenience.'\n  );\n  if (process.env.NODE_ENV === 'production') {\n    // send your error to your error tracker, for example: Sentry\n  }\n  if (process.env.NODE_ENV === 'development') {\n    await context.sendText(props.error.stack);\n  }\n};\n")),(0,s.kt)("p",null,"The above example does the following things while an error triggered:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'Send a "There are some unexpected errors happened. Please try again later, sorry for the inconvenience." text message to the end user.'),(0,s.kt)("li",{parentName:"ol"},"Log the error to the console."),(0,s.kt)("li",{parentName:"ol"},"Log the error into your error tracker."),(0,s.kt)("li",{parentName:"ol"},"Send ",(0,s.kt)("inlineCode",{parentName:"li"},"error.stack")," as a text message to the user (only in development)")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," While building LINE bots, you must handle errors differently because the reply token can only be used once. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.4/channel-line-errors"},"Error Handling in LINE"),".")),(0,s.kt)("h2",{id:"sending-errors-to-sentry"},"Sending Errors to Sentry"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://sentry.io"},"Sentry")," is an error tracking and monitoring service that aggregates errors across your stack in real time."),(0,s.kt)("p",null,"To integrate with Sentry, first, you need to download the SDK from the registry to use the SDK:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# Using npm\n$ npm install @sentry/node\n\n# Using yarn\n$ yarn add @sentry/node\n")),(0,s.kt)("p",null,"Then, add the following few lines of code in your ",(0,s.kt)("inlineCode",{parentName:"p"},"_error.js")," file to send your runtime errors to Sentry:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// _error.js\nconst Sentry = require('@sentry/node');\n\nSentry.init({\n  dsn: 'YOUR_SENTRY_DSN',\n});\n\nmodule.exports = async function HandleError(context, props) {\n  if (process.env.NODE_ENV === 'production') {\n    Sentry.captureException(props.error);\n  }\n};\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," Make sure to fill in your ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://docs.sentry.io/error-reporting/quickstart/?platform=node"},"DSN (Data Source Name)"))," to configure the Sentry instance.")),(0,s.kt)("p",null,"When errors happen in production, those errors will be sent to Sentry automatically."))}d.isMDXComponent=!0}}]);
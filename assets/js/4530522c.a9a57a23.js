"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22572],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(y,s(s({ref:r},p),{},{components:t})):n.createElement(y,s({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},32450:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>u});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={id:"the-basics-errors",title:"Error Handling",original_id:"the-basics-errors"},l=void 0,c={unversionedId:"the-basics-errors",id:"version-1.1.0/the-basics-errors",isDocsHomePage:!1,title:"Error Handling",description:"Customizing the Error Message",source:"@site/versioned_docs/version-1.1.0/the-basics-errors.md",sourceDirName:".",slug:"/the-basics-errors",permalink:"/docs/1.1.0/the-basics-errors",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.1.0/the-basics-errors.md",tags:[],version:"1.1.0",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"the-basics-errors",title:"Error Handling",original_id:"the-basics-errors"},sidebar:"version-1.1.0/docs",previous:{title:"Session",permalink:"/docs/1.1.0/the-basics-session"},next:{title:"Deployment",permalink:"/docs/1.1.0/advanced-guides-deployment"}},p=[{value:"Customizing the Error Message",id:"customizing-the-error-message",children:[],level:2},{value:"Sending Errors to Sentry",id:"sending-errors-to-sentry",children:[],level:2}],d={toc:p};function u(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"customizing-the-error-message"},"Customizing the Error Message"),(0,a.kt)("p",null,"Bottender makes it easy to display custom error message for various runtime errors. To customize the error message sending to the user, you may create an ",(0,a.kt)("inlineCode",{parentName:"p"},"_error.js")," file in your project root:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// _error.js\n\nmodule.exports = async function HandleError(context, props) {\n  console.error(props.error);\n  // or you can choose not to reply any error messages\n  await context.sendText(\n    'There are some unexpected errors happened. Please try again later, sorry for the inconvenience.'\n  );\n  if (process.env.NODE_ENV === 'production') {\n    // send your error to the error tracker, for example: Sentry\n  }\n  if (process.env.NODE_ENV === 'development') {\n    await context.sendText(props.error.stack);\n  }\n};\n")),(0,a.kt)("p",null,"The example code above will do following things for you while an error occurred:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Send ",(0,a.kt)("inlineCode",{parentName:"li"},"There are some unexpected errors happened. Please try again later, sorry for the inconvenience.")," text message to the end user."),(0,a.kt)("li",{parentName:"ol"},"Log error to the console."),(0,a.kt)("li",{parentName:"ol"},"Log error into error tracker."),(0,a.kt)("li",{parentName:"ol"},"Send ",(0,a.kt)("inlineCode",{parentName:"li"},"error.stack")," as text message to the user (only in the development)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," In LINE channel, errors should be handled in a different way because reply API can only be called once. You can read more about it in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.1.0/channel-line-errors"},"Error Handling in LINE documentation"),".")),(0,a.kt)("h2",{id:"sending-errors-to-sentry"},"Sending Errors to Sentry"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://sentry.io"},"Sentry")," is an error tracking and monitoring tool that aggregates errors across your stack in real time."),(0,a.kt)("p",null,"To integrate with it, first, you need to download the sdk from registry to use it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Using npm\n$ npm install @sentry/node\n\n# Using yarn\n$ yarn add @sentry/node\n")),(0,a.kt)("p",null,"Then, add those few lines of code in your ",(0,a.kt)("inlineCode",{parentName:"p"},"_error.js")," to send your runtime errors to Sentry. Make sure that you fill in you ",(0,a.kt)("a",{parentName:"p",href:"https://docs.sentry.io/error-reporting/quickstart/?platform=node"},"DSN (Data Source Name)")," to configure the Sentry instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// _error.js\nconst Sentry = require('@sentry/node');\n\nSentry.init({\n  dsn: 'YOUR_SENTRY_DSN',\n});\n\nmodule.exports = async function HandleError(context, props) {\n  if (process.env.NODE_ENV === 'production') {\n    Sentry.captureException(props.error);\n  }\n};\n")),(0,a.kt)("p",null,"When errors happen in production, those errors will be sent to Sentry automatically."))}u.isMDXComponent=!0}}]);
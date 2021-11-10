"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35108],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?t.createElement(m,a(a({ref:r},p),{},{components:n})):t.createElement(m,a({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18134:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>p,default:()=>d});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"channel-line-errors",title:"Error Handling in LINE",original_id:"channel-line-errors"},c=void 0,s={unversionedId:"channel-line-errors",id:"version-1.5/channel-line-errors",isDocsHomePage:!1,title:"Error Handling in LINE",description:"Customizing the Error Message in LINE",source:"@site/versioned_docs/version-1.5/channel-line-errors.md",sourceDirName:".",slug:"/channel-line-errors",permalink:"/docs/channel-line-errors",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.5/channel-line-errors.md",tags:[],version:"1.5",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-line-errors",title:"Error Handling in LINE",original_id:"channel-line-errors"},sidebar:"version-1.5/docs",previous:{title:"LINE Notify",permalink:"/docs/channel-line-notify"},next:{title:"Migrating from LINE SDK for Node.js",permalink:"/docs/channel-line-migrating-from-sdk"}},p=[{value:"Customizing the Error Message in LINE",id:"customizing-the-error-message-in-line",children:[],level:2}],u={toc:p};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"customizing-the-error-message-in-line"},"Customizing the Error Message in LINE"),(0,i.kt)("p",null,"Your bot can only reply to the user once after a user interacts with your LINE official account. However, the error may happen when calling Reply API. So, you can check the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"context.isReplied")," before replying to the user in your error handler:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// _error.js\n\nmodule.exports = async function HandleError(context, props) {\n  console.error(props.error);\n  if (!context.isReplied) {\n    // or you can choose not to reply any error messages\n    await context.replyText(\n      'There are some unexpected errors happened. Please try again later, sorry for the inconvenience.'\n    );\n  }\n  if (process.env.NODE_ENV === 'production') {\n    // send your error to the error tracker, for example: Sentry\n  }\n};\n")),(0,i.kt)("p",null,"For more information, you may refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/the-basics-errors"},"Customizing the Error Message")," for the basic knowledge of error handling."))}d.isMDXComponent=!0}}]);
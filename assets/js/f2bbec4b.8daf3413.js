"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26582],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),g=c(t),u=r,m=g["".concat(p,".").concat(u)]||g[u]||d[u]||s;return t?a.createElement(m,i(i({ref:n},l),{},{components:t})):a.createElement(m,i({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1434:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,toc:()=>l,default:()=>g});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),i=["components"],o={id:"channel-whatsapp-sending-messages",title:"Sending WhatsApp Messages",original_id:"channel-whatsapp-sending-messages"},p=void 0,c={unversionedId:"channel-whatsapp-sending-messages",id:"version-1.3.0/channel-whatsapp-sending-messages",isDocsHomePage:!1,title:"Sending WhatsApp Messages",description:"Sending Text Messages",source:"@site/versioned_docs/version-1.3.0/channel-whatsapp-sending-messages.md",sourceDirName:".",slug:"/channel-whatsapp-sending-messages",permalink:"/docs/1.3.0/channel-whatsapp-sending-messages",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.3.0/channel-whatsapp-sending-messages.md",tags:[],version:"1.3.0",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-whatsapp-sending-messages",title:"Sending WhatsApp Messages",original_id:"channel-whatsapp-sending-messages"},sidebar:"version-1.3.0/docs",previous:{title:"Handling WhatsApp Events",permalink:"/docs/1.3.0/channel-whatsapp-handling-events"},next:{title:"WhatsApp Routing",permalink:"/docs/1.3.0/channel-whatsapp-routing"}},l=[{value:"Sending Text Messages",id:"sending-text-messages",children:[],level:2}],d={toc:l};function g(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"sending-text-messages"},"Sending Text Messages"),(0,s.kt)("p",null,"Use this method to send text messages."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function SendHi(context) {\n  await context.sendText('Hi!');\n}\n")),(0,s.kt)("p",null,"To send with media URLs, you may use ",(0,s.kt)("inlineCode",{parentName:"p"},"mediaUrl")," options:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await context.sendText('Hi', {\n  mediaUrl: ['https://example.com/image.jpg'],\n});\n")))}g.isMDXComponent=!0}}]);
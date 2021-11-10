"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69907],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=l.createContext({}),d=function(e){var n=l.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return l.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(t),k=a,m=u["".concat(c,".").concat(k)]||u[k]||s[k]||i;return t?l.createElement(m,o(o({ref:n},p),{},{components:t})):l.createElement(m,o({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var d=2;d<i;d++)o[d]=t[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39745:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>r,contentTitle:()=>c,metadata:()=>d,toc:()=>p,default:()=>u});var l=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],r={id:"api-line-event",title:"LineEvent",original_id:"api-line-event"},c=void 0,d={unversionedId:"api-line-event",id:"version-1.0.5/api-line-event",isDocsHomePage:!1,title:"LineEvent",description:"rawEvent",source:"@site/versioned_docs/version-1.0.5/api-line-event.md",sourceDirName:".",slug:"/api-line-event",permalink:"/docs/1.0.5/api-line-event",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.0.5/api-line-event.md",tags:[],version:"1.0.5",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"api-line-event",title:"LineEvent",original_id:"api-line-event"},sidebar:"version-1.0.5/api",previous:{title:"LineContext",permalink:"/docs/1.0.5/api-line-context"},next:{title:"SlackContext",permalink:"/docs/1.0.5/api-slack-context"}},p=[{value:"<code>rawEvent</code>",id:"rawevent",children:[],level:4},{value:"<code>replyToken</code>",id:"replytoken",children:[],level:4},{value:"<code>source</code>",id:"source",children:[],level:4},{value:"<code>isMessage</code>",id:"ismessage",children:[],level:4},{value:"<code>message</code>",id:"message",children:[],level:4},{value:"<code>isText</code>",id:"istext",children:[],level:4},{value:"<code>text</code>",id:"text",children:[],level:4},{value:"<code>isImage</code>",id:"isimage",children:[],level:4},{value:"<code>image</code>",id:"image",children:[],level:4},{value:"<code>isVideo</code>",id:"isvideo",children:[],level:4},{value:"<code>video</code>",id:"video",children:[],level:4},{value:"<code>isAudio</code>",id:"isaudio",children:[],level:4},{value:"<code>audio</code>",id:"audio",children:[],level:4},{value:"<code>isLocation</code>",id:"islocation",children:[],level:4},{value:"<code>location</code>",id:"location",children:[],level:4},{value:"<code>isSticker</code>",id:"issticker",children:[],level:4},{value:"<code>sticker</code>",id:"sticker",children:[],level:4},{value:"<code>isFollow</code>",id:"isfollow",children:[],level:4},{value:"<code>follow</code>",id:"follow",children:[],level:4},{value:"<code>isUnfollow</code>",id:"isunfollow",children:[],level:4},{value:"<code>unfollow</code>",id:"unfollow",children:[],level:4},{value:"<code>isJoin</code>",id:"isjoin",children:[],level:4},{value:"<code>join</code>",id:"join",children:[],level:4},{value:"<code>isLeave</code>",id:"isleave",children:[],level:4},{value:"<code>leave</code>",id:"leave",children:[],level:4},{value:"<code>isPostback</code>",id:"ispostback",children:[],level:4},{value:"<code>postback</code>",id:"postback",children:[],level:4},{value:"<code>isPayload</code>",id:"ispayload",children:[],level:4},{value:"<code>payload</code>",id:"payload",children:[],level:4},{value:"<code>date</code>",id:"date",children:[],level:4},{value:"<code>time</code>",id:"time",children:[],level:4},{value:"<code>datetime</code>",id:"datetime",children:[],level:4},{value:"<code>isBeacon</code>",id:"isbeacon",children:[],level:4},{value:"<code>beacon</code>",id:"beacon",children:[],level:4},{value:"<code>isAccountLink</code>",id:"isaccountlink",children:[],level:4},{value:"<code>accountLink</code>",id:"accountlink",children:[],level:4}],s={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"rawevent"},(0,i.kt)("inlineCode",{parentName:"h4"},"rawEvent")),(0,i.kt)("p",null,"Underlying raw event from LINE."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.rawEvent;\n// {\n//   replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',\n//   type: 'message',\n//   timestamp: 1462629479859,\n//   source: {\n//     type: 'user',\n//     userId: 'U206d25c2ea6bd87c17655609a1c37cb8',\n//   },\n//   message: {\n//     id: '325708',\n//     type: 'text',\n//     text: 'Hello, world',\n//   },\n// }\n")),(0,i.kt)("h4",{id:"replytoken"},(0,i.kt)("inlineCode",{parentName:"h4"},"replyToken")),(0,i.kt)("p",null,"The reply token from LINE raw event. Only present on message, follow, join, postback, beacon events."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.replyToken; // 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA'\n")),(0,i.kt)("h4",{id:"source"},(0,i.kt)("inlineCode",{parentName:"h4"},"source")),(0,i.kt)("p",null,"The source object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.source;\n// {\n//   type: 'user',\n//   userId: 'U206d25c2ea6bd87c17655609a1c37cb8',\n// }\n")),(0,i.kt)("h4",{id:"ismessage"},(0,i.kt)("inlineCode",{parentName:"h4"},"isMessage")),(0,i.kt)("p",null,"Determine if the event is a message event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isMessage; // true\n")),(0,i.kt)("h4",{id:"message"},(0,i.kt)("inlineCode",{parentName:"h4"},"message")),(0,i.kt)("p",null,"The message object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.message;\n// {\n//   id: '325708',\n//   type: 'text',\n//   text: 'Hello, world',\n// }\n")),(0,i.kt)("h4",{id:"istext"},(0,i.kt)("inlineCode",{parentName:"h4"},"isText")),(0,i.kt)("p",null,"Determine if the event is a message event which includes text."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isText; // true\n")),(0,i.kt)("h4",{id:"text"},(0,i.kt)("inlineCode",{parentName:"h4"},"text")),(0,i.kt)("p",null,"The text string from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.text; // 'Hello, world'\n")),(0,i.kt)("h4",{id:"isimage"},(0,i.kt)("inlineCode",{parentName:"h4"},"isImage")),(0,i.kt)("p",null,"Determine if the event is a message event which includes image."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isImage; // true\n")),(0,i.kt)("h4",{id:"image"},(0,i.kt)("inlineCode",{parentName:"h4"},"image")),(0,i.kt)("p",null,"The image object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.image;\n// {\n//   id: '325708',\n//   type: 'image',\n// }\n")),(0,i.kt)("h4",{id:"isvideo"},(0,i.kt)("inlineCode",{parentName:"h4"},"isVideo")),(0,i.kt)("p",null,"Determine if the event is a message event which includes video."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isVideo; // true\n")),(0,i.kt)("h4",{id:"video"},(0,i.kt)("inlineCode",{parentName:"h4"},"video")),(0,i.kt)("p",null,"The video object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.video;\n// {\n//   id: '325708',\n//   type: 'video',\n// }\n")),(0,i.kt)("h4",{id:"isaudio"},(0,i.kt)("inlineCode",{parentName:"h4"},"isAudio")),(0,i.kt)("p",null,"Determine if the event is a message event which includes audio."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isAudio; // true\n")),(0,i.kt)("h4",{id:"audio"},(0,i.kt)("inlineCode",{parentName:"h4"},"audio")),(0,i.kt)("p",null,"The audio object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.audio;\n// {\n//   id: '325708',\n//   type: 'audio',\n// }\n")),(0,i.kt)("h4",{id:"islocation"},(0,i.kt)("inlineCode",{parentName:"h4"},"isLocation")),(0,i.kt)("p",null,"Determine if the event is a message event which includes location."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isLocation; // true\n")),(0,i.kt)("h4",{id:"location"},(0,i.kt)("inlineCode",{parentName:"h4"},"location")),(0,i.kt)("p",null,"The location object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.location;\n// {\n//   address: 'Golden Gate Bridge, San Francisco, CA, United States',\n//   id: '325708',\n//   latitude: 37.819722,\n//   longitude: -122.478611,\n//   title: 'my location',\n//   type: 'location',\n// }\n")),(0,i.kt)("h4",{id:"issticker"},(0,i.kt)("inlineCode",{parentName:"h4"},"isSticker")),(0,i.kt)("p",null,"Determine if the event is a message event which includes sticker."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isSticker; // true\n")),(0,i.kt)("h4",{id:"sticker"},(0,i.kt)("inlineCode",{parentName:"h4"},"sticker")),(0,i.kt)("p",null,"The sticker object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.sticker;\n// {\n//   id: '325708',\n//   packageId: '1',\n//   stickerId: '1',\n//   type: 'sticker',\n// }\n")),(0,i.kt)("h4",{id:"isfollow"},(0,i.kt)("inlineCode",{parentName:"h4"},"isFollow")),(0,i.kt)("p",null,"Determine if the event is a follow event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isFollow; // true\n")),(0,i.kt)("h4",{id:"follow"},(0,i.kt)("inlineCode",{parentName:"h4"},"follow")),(0,i.kt)("p",null,"The source object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.follow;\n// {\n//   type: 'user',\n//   userId: 'U206d25c2ea6bd87c17655609a1c37cb8',\n// }\n")),(0,i.kt)("h4",{id:"isunfollow"},(0,i.kt)("inlineCode",{parentName:"h4"},"isUnfollow")),(0,i.kt)("p",null,"Determine if the event is an unfollow event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isUnfollow; // true\n")),(0,i.kt)("h4",{id:"unfollow"},(0,i.kt)("inlineCode",{parentName:"h4"},"unfollow")),(0,i.kt)("p",null,"The source object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.unfollow;\n// {\n//   type: 'user',\n//   userId: 'U206d25c2ea6bd87c17655609a1c37cb8',\n// }\n")),(0,i.kt)("h4",{id:"isjoin"},(0,i.kt)("inlineCode",{parentName:"h4"},"isJoin")),(0,i.kt)("p",null,"Determine if the event is a join event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isJoin; // true\n")),(0,i.kt)("h4",{id:"join"},(0,i.kt)("inlineCode",{parentName:"h4"},"join")),(0,i.kt)("p",null,"The source object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.join;\n// {\n//   type: 'group',\n//   groupId: 'cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',\n// }\n")),(0,i.kt)("h4",{id:"isleave"},(0,i.kt)("inlineCode",{parentName:"h4"},"isLeave")),(0,i.kt)("p",null,"Determine if the event is a leave event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isLeave; // true\n")),(0,i.kt)("h4",{id:"leave"},(0,i.kt)("inlineCode",{parentName:"h4"},"leave")),(0,i.kt)("p",null,"The source object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.leave;\n// {\n//   type: 'group',\n//   groupId: 'cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',\n// }\n")),(0,i.kt)("h4",{id:"ispostback"},(0,i.kt)("inlineCode",{parentName:"h4"},"isPostback")),(0,i.kt)("p",null,"Determine if the event is a postback event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isPostback; // true\n")),(0,i.kt)("h4",{id:"postback"},(0,i.kt)("inlineCode",{parentName:"h4"},"postback")),(0,i.kt)("p",null,"The postback object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.postback;\n// {\n//   data: 'action=buyItem&itemId=123123&color=red',\n// }\n")),(0,i.kt)("h4",{id:"ispayload"},(0,i.kt)("inlineCode",{parentName:"h4"},"isPayload")),(0,i.kt)("p",null,"Determine if the event is a postback event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isPayload; // true\n")),(0,i.kt)("h4",{id:"payload"},(0,i.kt)("inlineCode",{parentName:"h4"},"payload")),(0,i.kt)("p",null,"The payload string from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.payload; // 'action=buyItem&itemId=123123&color=red'\n")),(0,i.kt)("h4",{id:"date"},(0,i.kt)("inlineCode",{parentName:"h4"},"date")),(0,i.kt)("p",null,"The date string from LINE postback event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.date; // '2017-09-06'\n")),(0,i.kt)("h4",{id:"time"},(0,i.kt)("inlineCode",{parentName:"h4"},"time")),(0,i.kt)("p",null,"The time string from LINE postback event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.time; // '12:30'\n")),(0,i.kt)("h4",{id:"datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"datetime")),(0,i.kt)("p",null,"The datetime string from LINE postback event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.datetime; // '2017-09-06T12:30'\n")),(0,i.kt)("h4",{id:"isbeacon"},(0,i.kt)("inlineCode",{parentName:"h4"},"isBeacon")),(0,i.kt)("p",null,"Determine if the event is a beacon event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isBeacon; // true\n")),(0,i.kt)("h4",{id:"beacon"},(0,i.kt)("inlineCode",{parentName:"h4"},"beacon")),(0,i.kt)("p",null,"The beacon object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.beacon;\n// {\n//   hwid: 'd41d8cd98f',\n//   type: 'enter',\n// }\n")),(0,i.kt)("h4",{id:"isaccountlink"},(0,i.kt)("inlineCode",{parentName:"h4"},"isAccountLink")),(0,i.kt)("p",null,"Determine if the event is an accountLink event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.isAccountLink; // true\n")),(0,i.kt)("h4",{id:"accountlink"},(0,i.kt)("inlineCode",{parentName:"h4"},"accountLink")),(0,i.kt)("p",null,"The link object from LINE raw event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"event.accountLink;\n// {\n//   result: 'ok',\n//   nonce: 'xxxxxxxxxxxxxxx',\n// }\n")))}u.isMDXComponent=!0}}]);
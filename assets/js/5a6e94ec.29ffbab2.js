"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75304],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(t),u=l,k=m["".concat(o,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},24115:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>d,toc:()=>p,default:()=>m});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),i=["components"],s={id:"api-messenger-event",title:"MessengerEvent",original_id:"api-messenger-event"},o=void 0,d={unversionedId:"api-messenger-event",id:"version-1.4/api-messenger-event",isDocsHomePage:!1,title:"MessengerEvent",description:"rawEvent",source:"@site/versioned_docs/version-1.4/api-messenger-event.md",sourceDirName:".",slug:"/api-messenger-event",permalink:"/docs/1.4/api-messenger-event",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.4/api-messenger-event.md",tags:[],version:"1.4",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"api-messenger-event",title:"MessengerEvent",original_id:"api-messenger-event"},sidebar:"version-1.4/api",previous:{title:"MessengerContext",permalink:"/docs/1.4/api-messenger-context"},next:{title:"MessengerClient",permalink:"/docs/1.4/api-messenger-client"}},p=[{value:"<code>rawEvent</code>",id:"rawevent",children:[],level:4},{value:"<code>isMessage</code>",id:"ismessage",children:[],level:4},{value:"<code>message</code>",id:"message",children:[],level:4},{value:"<code>isText</code>",id:"istext",children:[],level:4},{value:"<code>text</code>",id:"text",children:[],level:4},{value:"<code>hasAttachment</code>",id:"hasattachment",children:[],level:4},{value:"<code>attachments</code>",id:"attachments",children:[],level:4},{value:"<code>isImage</code>",id:"isimage",children:[],level:4},{value:"<code>image</code>",id:"image",children:[],level:4},{value:"<code>isAudio</code>",id:"isaudio",children:[],level:4},{value:"<code>audio</code>",id:"audio",children:[],level:4},{value:"<code>isVideo</code>",id:"isvideo",children:[],level:4},{value:"<code>video</code>",id:"video",children:[],level:4},{value:"<code>isLocation</code>",id:"islocation",children:[],level:4},{value:"<code>location</code>",id:"location",children:[],level:4},{value:"<code>isFile</code>",id:"isfile",children:[],level:4},{value:"<code>file</code>",id:"file",children:[],level:4},{value:"<code>isFallback</code>",id:"isfallback",children:[],level:4},{value:"<code>fallback</code>",id:"fallback",children:[],level:4},{value:"<code>isSticker</code>",id:"issticker",children:[],level:4},{value:"<code>sticker</code>",id:"sticker",children:[],level:4},{value:"<code>isLikeSticker</code>",id:"islikesticker",children:[],level:4},{value:"<code>isQuickReply</code>",id:"isquickreply",children:[],level:4},{value:"<code>quickReply</code>",id:"quickreply",children:[],level:4},{value:"<code>isEcho</code>",id:"isecho",children:[],level:4},{value:"<code>isPostback</code>",id:"ispostback",children:[],level:4},{value:"<code>postback</code>",id:"postback",children:[],level:4},{value:"<code>isGamePlay</code>",id:"isgameplay",children:[],level:4},{value:"<code>gamePlay</code>",id:"gameplay",children:[],level:4},{value:"<code>isOptin</code>",id:"isoptin",children:[],level:4},{value:"<code>optin</code>",id:"optin",children:[],level:4},{value:"<code>isPayment</code>",id:"ispayment",children:[],level:4},{value:"<code>payment</code>",id:"payment",children:[],level:4},{value:"<code>isCheckoutUpdate</code>",id:"ischeckoutupdate",children:[],level:4},{value:"<code>checkoutUpdate</code>",id:"checkoutupdate",children:[],level:4},{value:"<code>isPreCheckout</code>",id:"isprecheckout",children:[],level:4},{value:"<code>preCheckout</code>",id:"precheckout",children:[],level:4},{value:"<code>isRead</code>",id:"isread",children:[],level:4},{value:"<code>read</code>",id:"read",children:[],level:4},{value:"<code>isDelivery</code>",id:"isdelivery",children:[],level:4},{value:"<code>delivery</code>",id:"delivery",children:[],level:4},{value:"<code>isPayload</code>",id:"ispayload",children:[],level:4},{value:"<code>payload</code>",id:"payload",children:[],level:4},{value:"<code>isPolicyEnforcement</code>",id:"ispolicyenforcement",children:[],level:4},{value:"<code>policyEnforcement</code>",id:"policyenforcement",children:[],level:4},{value:"<code>isAppRoles</code>",id:"isapproles",children:[],level:4},{value:"<code>appRoles</code>",id:"approles",children:[],level:4},{value:"<code>isStandby</code>",id:"isstandby",children:[],level:4},{value:"<code>isPassThreadControl</code>",id:"ispassthreadcontrol",children:[],level:4},{value:"<code>passThreadControl</code>",id:"passthreadcontrol",children:[],level:4},{value:"<code>isTakeThreadControl</code>",id:"istakethreadcontrol",children:[],level:4},{value:"<code>takeThreadControl</code>",id:"takethreadcontrol",children:[],level:4},{value:"<code>isRequestThreadControl</code>",id:"isrequestthreadcontrol",children:[],level:4},{value:"<code>requestThreadControl</code>",id:"requestthreadcontrol",children:[],level:4},{value:"<code>isReferral</code>",id:"isreferral",children:[],level:4},{value:"<code>referral</code>",id:"referral",children:[],level:4},{value:"<code>ref</code>",id:"ref",children:[],level:4},{value:"<code>isFromCustomerChatPlugin</code>",id:"isfromcustomerchatplugin",children:[],level:4},{value:"<code>isBrandedCamera</code>",id:"isbrandedcamera",children:[],level:4},{value:"<code>brandedCamera</code>",id:"brandedcamera",children:[],level:4}],c={toc:p};function m(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"rawevent"},(0,r.kt)("inlineCode",{parentName:"h4"},"rawEvent")),(0,r.kt)("p",null,"Underlying raw event from Messenger."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.rawEvent;\n// {\n//   sender: { id: '1423587017700273' },\n//   recipient: { id: '404217156637689' },\n//   timestamp: 1491796363181,\n//   message: {\n//     mid: 'mid.$cAAE1UUyiiwthh0NPrVbVf4HFNDGl',\n//     seq: 348847,\n//     text: 'Awesome.',\n//   },\n// }\n")),(0,r.kt)("h4",{id:"ismessage"},(0,r.kt)("inlineCode",{parentName:"h4"},"isMessage")),(0,r.kt)("p",null,"Determine if the event is a message event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isMessage; // true\n")),(0,r.kt)("h4",{id:"message"},(0,r.kt)("inlineCode",{parentName:"h4"},"message")),(0,r.kt)("p",null,"The message object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.message;\n// {\n//   mid: 'mid.$cAAE1UUyiiwthh0NPrVbVf4HFNDGl',\n//   seq: 348847,\n//   text: 'Awesome.',\n// }\n")),(0,r.kt)("h4",{id:"istext"},(0,r.kt)("inlineCode",{parentName:"h4"},"isText")),(0,r.kt)("p",null,"Determine if the event is a message event which includes text."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isText; // true\n")),(0,r.kt)("h4",{id:"text"},(0,r.kt)("inlineCode",{parentName:"h4"},"text")),(0,r.kt)("p",null,"The text string from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.text; // 'Awesome.'\n")),(0,r.kt)("h4",{id:"hasattachment"},(0,r.kt)("inlineCode",{parentName:"h4"},"hasAttachment")),(0,r.kt)("p",null,"Determine if the event has any attachments."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.hasAttachment; // true\n")),(0,r.kt)("h4",{id:"attachments"},(0,r.kt)("inlineCode",{parentName:"h4"},"attachments")),(0,r.kt)("p",null,"The attachments array from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.attachments;\n// [\n//   {\n//     type: 'audio',\n//     payload: {\n//       url: 'https://example.com/bot/audios/audio.mp3',\n//     },\n//   },\n// ]\n")),(0,r.kt)("h4",{id:"isimage"},(0,r.kt)("inlineCode",{parentName:"h4"},"isImage")),(0,r.kt)("p",null,"Determine if the event is a message event which includes image attachment."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isImage; // true\n")),(0,r.kt)("h4",{id:"image"},(0,r.kt)("inlineCode",{parentName:"h4"},"image")),(0,r.kt)("p",null,"The image attachment from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.image;\n// {\n//   url: 'https://example.com/image.jpg',\n// }\n")),(0,r.kt)("h4",{id:"isaudio"},(0,r.kt)("inlineCode",{parentName:"h4"},"isAudio")),(0,r.kt)("p",null,"Determine if the event is a message event which includes audio attachment."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isAudio; // true\n")),(0,r.kt)("h4",{id:"audio"},(0,r.kt)("inlineCode",{parentName:"h4"},"audio")),(0,r.kt)("p",null,"The audio attachment from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.audio;\n// {\n//   url: 'https://example.com/bot/audios/audio.mp3',\n// }\n")),(0,r.kt)("h4",{id:"isvideo"},(0,r.kt)("inlineCode",{parentName:"h4"},"isVideo")),(0,r.kt)("p",null,"Determine if the event is a message event which includes video attachment."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isVideo; // true\n")),(0,r.kt)("h4",{id:"video"},(0,r.kt)("inlineCode",{parentName:"h4"},"video")),(0,r.kt)("p",null,"The video attachment from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.video;\n// {\n//   url: 'https://example.com/bot/videos/video.mp4',\n// }\n")),(0,r.kt)("h4",{id:"islocation"},(0,r.kt)("inlineCode",{parentName:"h4"},"isLocation")),(0,r.kt)("p",null,"Determine if the event is a message event which includes location attachment."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isLocation; // true\n")),(0,r.kt)("h4",{id:"location"},(0,r.kt)("inlineCode",{parentName:"h4"},"location")),(0,r.kt)("p",null,"The location attachment from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.location;\n// {\n//   coordinates: { lat: 0, long: 0 },\n// }\n")),(0,r.kt)("h4",{id:"isfile"},(0,r.kt)("inlineCode",{parentName:"h4"},"isFile")),(0,r.kt)("p",null,"Determine if the event is a message event which includes file attachment."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isFile; // true\n")),(0,r.kt)("h4",{id:"file"},(0,r.kt)("inlineCode",{parentName:"h4"},"file")),(0,r.kt)("p",null,"The file attachment from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.file;\n// {\n//   url: 'https://example.com/bot/files/file.doc',\n// }\n")),(0,r.kt)("h4",{id:"isfallback"},(0,r.kt)("inlineCode",{parentName:"h4"},"isFallback")),(0,r.kt)("p",null,"Determine if the event is a message event which includes fallback attachment."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isFallback; // true\n")),(0,r.kt)("h4",{id:"fallback"},(0,r.kt)("inlineCode",{parentName:"h4"},"fallback")),(0,r.kt)("p",null,"The fallback attachment from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.fallback;\n// {\n//   URL: 'URL_OF_THE_ATTACHMENT',\n//   payload: null,\n//   title: 'TITLE_OF_THE_URL_ATTACHMENT',\n//   type: 'fallback',\n// }\n")),(0,r.kt)("h4",{id:"issticker"},(0,r.kt)("inlineCode",{parentName:"h4"},"isSticker")),(0,r.kt)("p",null,"Determine if the event is a message event which includes sticker."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isSticker; // true\n")),(0,r.kt)("h4",{id:"sticker"},(0,r.kt)("inlineCode",{parentName:"h4"},"sticker")),(0,r.kt)("p",null,"The stickerId from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.sticker; // 369239263222822\n")),(0,r.kt)("h4",{id:"islikesticker"},(0,r.kt)("inlineCode",{parentName:"h4"},"isLikeSticker")),(0,r.kt)("p",null,"Determine if the event is a message event which includes 'like' sticker."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isLikeSticker; // true\n")),(0,r.kt)("h4",{id:"isquickreply"},(0,r.kt)("inlineCode",{parentName:"h4"},"isQuickReply")),(0,r.kt)("p",null,"Determine if the event is a message event triggered from quick reply."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isQuickReply; // true\n")),(0,r.kt)("h4",{id:"quickreply"},(0,r.kt)("inlineCode",{parentName:"h4"},"quickReply")),(0,r.kt)("p",null,"The quick reply object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.quickReply;\n// {\n//   payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED',\n// }\n")),(0,r.kt)("h4",{id:"isecho"},(0,r.kt)("inlineCode",{parentName:"h4"},"isEcho")),(0,r.kt)("p",null,"Determine if the event is a message event sent from our side."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isEcho; // true\n")),(0,r.kt)("h4",{id:"ispostback"},(0,r.kt)("inlineCode",{parentName:"h4"},"isPostback")),(0,r.kt)("p",null,"Determine if the event is a postback event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isPostback; // true\n")),(0,r.kt)("h4",{id:"postback"},(0,r.kt)("inlineCode",{parentName:"h4"},"postback")),(0,r.kt)("p",null,"The postback object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.postback;\n// {\n//   payload: 'USER_DEFINED_PAYLOAD',\n// }\n")),(0,r.kt)("h4",{id:"isgameplay"},(0,r.kt)("inlineCode",{parentName:"h4"},"isGamePlay")),(0,r.kt)("p",null,"Determine if the event is an game_play event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isGamePlay; // true\n")),(0,r.kt)("h4",{id:"gameplay"},(0,r.kt)("inlineCode",{parentName:"h4"},"gamePlay")),(0,r.kt)("p",null,"The gamePlay object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.gamePlay;\n// {\n//   gameId: 'GAME_ID',\n//   playerId: 'PLAYER_ID',\n//   contextType: 'SOLO',\n//   contextId: 'CONTEXT_ID',\n//   score: 99,\n//   payload: {\n//     someKey: 'SOME_VALUE'\n//   },\n// }\n")),(0,r.kt)("h4",{id:"isoptin"},(0,r.kt)("inlineCode",{parentName:"h4"},"isOptin")),(0,r.kt)("p",null,"Determine if the event is an opt-in event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isOptin; // true\n")),(0,r.kt)("h4",{id:"optin"},(0,r.kt)("inlineCode",{parentName:"h4"},"optin")),(0,r.kt)("p",null,"The optin object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.optin;\n// {\n//   ref: 'PASS_THROUGH_PARAM',\n// }\n")),(0,r.kt)("h4",{id:"ispayment"},(0,r.kt)("inlineCode",{parentName:"h4"},"isPayment")),(0,r.kt)("p",null,"Determine if the event is a payment event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isPayment; // true\n")),(0,r.kt)("h4",{id:"payment"},(0,r.kt)("inlineCode",{parentName:"h4"},"payment")),(0,r.kt)("p",null,"The payment object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.payment;\n// {\n//   payload: 'DEVELOPER_DEFINED_PAYLOAD',\n//   requestedUserInfo: {\n//     shippingAddress: {},\n//     contactName: 'Peter Chang',\n//     contactEmail: 'peter@anemail.com',\n//     contactPhone: '+15105551234',\n//   },\n//   paymentCredential: {\n//     providerType: 'paypal',\n//     chargeId: 'ch_18tmdBEoNIH3FPJHa60ep123',\n//     fbPaymentId: '123456789',\n//   },\n//   amount: {\n//     currency: 'USD',\n//     amount: '29.62',\n//   },\n//   shippingOptionId: '123',\n// }\n")),(0,r.kt)("h4",{id:"ischeckoutupdate"},(0,r.kt)("inlineCode",{parentName:"h4"},"isCheckoutUpdate")),(0,r.kt)("p",null,"Determine if the event is a checkout update event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isCheckoutUpdate; // true\n")),(0,r.kt)("h4",{id:"checkoutupdate"},(0,r.kt)("inlineCode",{parentName:"h4"},"checkoutUpdate")),(0,r.kt)("p",null,"The checkoutUpdate object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.checkoutUpdate;\n// {\n//   payload: 'DEVELOPER_DEFINED_PAYLOAD',\n//   shippingAddress: {\n//     id: 10105655000959552,\n//     country: 'US',\n//     city: 'MENLO PARK',\n//     street1: '1 Hacker Way',\n//     street2: '',\n//     state: 'CA',\n//     postalCode: '94025',\n//   },\n// }\n")),(0,r.kt)("h4",{id:"isprecheckout"},(0,r.kt)("inlineCode",{parentName:"h4"},"isPreCheckout")),(0,r.kt)("p",null,"Determine if the event is a pre-checkout event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isPreCheckout; // true\n")),(0,r.kt)("h4",{id:"precheckout"},(0,r.kt)("inlineCode",{parentName:"h4"},"preCheckout")),(0,r.kt)("p",null,"The preCheckout object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.preCheckout;\n// {\n//   payload: 'xyz',\n//   requestedUserInfo: {\n//     shippingAddress: {\n//       name: 'Tao Jiang',\n//       street1: '600 Edgewater Blvd',\n//       street2: '',\n//       city: 'Foster City',\n//       state: 'CA',\n//       country: 'US',\n//       postalCode: '94404',\n//     },\n//     contactName: 'Tao Jiang',\n//   },\n//   amount: {\n//     currency: 'USD',\n//     amount: '2.70',\n//   },\n// }\n")),(0,r.kt)("h4",{id:"isread"},(0,r.kt)("inlineCode",{parentName:"h4"},"isRead")),(0,r.kt)("p",null,"Determine if the event is a message read event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isRead; // true\n")),(0,r.kt)("h4",{id:"read"},(0,r.kt)("inlineCode",{parentName:"h4"},"read")),(0,r.kt)("p",null,"The read object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.read;\n// {\n//   seq: 38,\n//   watermark: 1458668856253,\n// }\n")),(0,r.kt)("h4",{id:"isdelivery"},(0,r.kt)("inlineCode",{parentName:"h4"},"isDelivery")),(0,r.kt)("p",null,"Determine if the event is a message delivery event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isDelivery; // true\n")),(0,r.kt)("h4",{id:"delivery"},(0,r.kt)("inlineCode",{parentName:"h4"},"delivery")),(0,r.kt)("p",null,"The delivery object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.delivery;\n// {\n//   mids: ['mid.1458668856218:ed81099e15d3f4f233'],\n//   watermark: 1458668856253,\n//   seq: 37,\n// }\n")),(0,r.kt)("h4",{id:"ispayload"},(0,r.kt)("inlineCode",{parentName:"h4"},"isPayload")),(0,r.kt)("p",null,"Determine if the event is a postback or quick reply which includes payload."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isPayload; // true\n")),(0,r.kt)("h4",{id:"payload"},(0,r.kt)("inlineCode",{parentName:"h4"},"payload")),(0,r.kt)("p",null,"The payload received from postback or quick reply."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.payload; // 'USER_DEFINED_PAYLOAD'\n")),(0,r.kt)("h4",{id:"ispolicyenforcement"},(0,r.kt)("inlineCode",{parentName:"h4"},"isPolicyEnforcement")),(0,r.kt)("p",null,"Determine if the event is a policy enforcement event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isPolicyEnforcement; // true\n")),(0,r.kt)("h4",{id:"policyenforcement"},(0,r.kt)("inlineCode",{parentName:"h4"},"policyEnforcement")),(0,r.kt)("p",null,"The policy enforcement object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.policyEnforcement;\n// {\n//   action: 'block',\n//   reason:\n//     'The bot violated our Platform Policies (https://developers.facebook.com/policy/#messengerplatform). Common violations include sending out excessive spammy messages or being non-functional.',\n// }\n")),(0,r.kt)("h4",{id:"isapproles"},(0,r.kt)("inlineCode",{parentName:"h4"},"isAppRoles")),(0,r.kt)("p",null,"Determine if the event is an app roles event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isAppRoles; // true\n")),(0,r.kt)("h4",{id:"approles"},(0,r.kt)("inlineCode",{parentName:"h4"},"appRoles")),(0,r.kt)("p",null,"The app roles object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.appRoles;\n// {\n//   '123456789': ['automation'],\n// }\n")),(0,r.kt)("h4",{id:"isstandby"},(0,r.kt)("inlineCode",{parentName:"h4"},"isStandby")),(0,r.kt)("p",null,"Determine if the event is a standby event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isStandby; // true\n")),(0,r.kt)("h4",{id:"ispassthreadcontrol"},(0,r.kt)("inlineCode",{parentName:"h4"},"isPassThreadControl")),(0,r.kt)("p",null,"Determine if the event is a pass thread control event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isPassThreadControl; // true\n")),(0,r.kt)("h4",{id:"passthreadcontrol"},(0,r.kt)("inlineCode",{parentName:"h4"},"passThreadControl")),(0,r.kt)("p",null,"The pass thread control object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.passThreadControl;\n// {\n//   metadata: 'additional content that the caller wants to set',\n//   newOwnerAppId: '123456789',\n// }\n")),(0,r.kt)("h4",{id:"istakethreadcontrol"},(0,r.kt)("inlineCode",{parentName:"h4"},"isTakeThreadControl")),(0,r.kt)("p",null,"Determine if the event is a take thread control event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isTakeThreadControl; // true\n")),(0,r.kt)("h4",{id:"takethreadcontrol"},(0,r.kt)("inlineCode",{parentName:"h4"},"takeThreadControl")),(0,r.kt)("p",null,"The take thread control object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.takeThreadControl;\n// {\n//   metadata: 'additional content that the caller wants to set',\n//   previousOwnerAppId: '123456789',\n// }\n")),(0,r.kt)("h4",{id:"isrequestthreadcontrol"},(0,r.kt)("inlineCode",{parentName:"h4"},"isRequestThreadControl")),(0,r.kt)("p",null,"Determine if the event is a request thread control event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isRequestThreadControl; // true\n")),(0,r.kt)("h4",{id:"requestthreadcontrol"},(0,r.kt)("inlineCode",{parentName:"h4"},"requestThreadControl")),(0,r.kt)("p",null,"The take thread control object from Messenger raw event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.requestThreadControl;\n// {\n//   metadata: 'additional content that the caller wants to set',\n//   requestedOwnerAppId: '123456789',\n// }\n")),(0,r.kt)("h4",{id:"isreferral"},(0,r.kt)("inlineCode",{parentName:"h4"},"isReferral")),(0,r.kt)("p",null,"Determine if the event is a referral event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isReferral; // true\n")),(0,r.kt)("h4",{id:"referral"},(0,r.kt)("inlineCode",{parentName:"h4"},"referral")),(0,r.kt)("p",null,"The referral object from Messenger event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.referral;\n// {\n//   ref: 'PASS_THROUGH_PARAM',\n//   source: 'SHORTLINK',\n//   type: 'OPEN_THREAD',\n// }\n")),(0,r.kt)("h4",{id:"ref"},(0,r.kt)("inlineCode",{parentName:"h4"},"ref")),(0,r.kt)("p",null,"The ref string from Messenger event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.ref; // 'PASS_THROUGH_PARAM'\n")),(0,r.kt)("h4",{id:"isfromcustomerchatplugin"},(0,r.kt)("inlineCode",{parentName:"h4"},"isFromCustomerChatPlugin")),(0,r.kt)("p",null,"Determine if the event is from customer chat plugin."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isFromCustomerChatPlugin; // true\n")),(0,r.kt)("h4",{id:"isbrandedcamera"},(0,r.kt)("inlineCode",{parentName:"h4"},"isBrandedCamera")),(0,r.kt)("p",null,"Determine if the event is a branded_camera event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.isBrandedCamera; // true\n")),(0,r.kt)("h4",{id:"brandedcamera"},(0,r.kt)("inlineCode",{parentName:"h4"},"brandedCamera")),(0,r.kt)("p",null,"The brandedCamera object from Messenger event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.brandedCamera;\n// {\n//   contentIds: ['<CAMERA-EFFECT-ID>', '<CAMERA-EFFECT-ID>'],\n//   event: 'dismiss',\n// }\n")))}m.isMDXComponent=!0}}]);
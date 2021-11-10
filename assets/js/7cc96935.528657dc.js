"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91256],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(n),u=l,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},23756:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>c});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],o={id:"api-viber-context",title:"ViberContext",original_id:"api-viber-context"},p=void 0,s={unversionedId:"api-viber-context",id:"version-1.4/api-viber-context",isDocsHomePage:!1,title:"ViberContext",description:"- Send API",source:"@site/versioned_docs/version-1.4/api-viber-context.md",sourceDirName:".",slug:"/api-viber-context",permalink:"/docs/1.4/api-viber-context",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.4/api-viber-context.md",tags:[],version:"1.4",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"api-viber-context",title:"ViberContext",original_id:"api-viber-context"},sidebar:"version-1.4/api",previous:{title:"TelegramClient",permalink:"/docs/1.4/api-telegram-client"},next:{title:"ViberEvent",permalink:"/docs/1.4/api-viber-event"}},d=[{value:"Send API",id:"send-api",children:[{value:"<code>sendMessage(message)</code> - Official Docs",id:"sendmessagemessage---official-docs",children:[],level:4},{value:"<code>sendText(text [, options])</code> - Official Docs",id:"sendtexttext--options---official-docs",children:[],level:4},{value:"<code>sendPicture(picture [, options])</code> - Official Docs",id:"sendpicturepicture--options---official-docs",children:[],level:4},{value:"<code>sendVideo(video [, options])</code> - Official Docs",id:"sendvideovideo--options---official-docs",children:[],level:4},{value:"<code>sendFile(file [, options])</code> - Official Docs",id:"sendfilefile--options---official-docs",children:[],level:4},{value:"<code>sendContact(contact [, options])</code> - Official Docs",id:"sendcontactcontact--options---official-docs",children:[],level:4},{value:"<code>sendLocation(location [, options])</code> - Official Docs",id:"sendlocationlocation--options---official-docs",children:[],level:4},{value:"<code>sendURL(url [, options])</code> - Official Docs",id:"sendurlurl--options---official-docs",children:[],level:4},{value:"<code>sendSticker(stickerId [, options])</code> - Official Docs",id:"sendstickerstickerid--options---official-docs",children:[],level:4},{value:"<code>sendCarouselContent(richMedia [, options])</code> - Official Docs",id:"sendcarouselcontentrichmedia--options---official-docs",children:[],level:4}],level:3},{value:"Keyboards - Official Docs",id:"keyboards---official-docs",children:[],level:3},{value:"Get User Details",id:"get-user-details",children:[{value:"<code>getUserDetails()</code> - Official Docs",id:"getuserdetails---official-docs",children:[],level:4}],level:3},{value:"Get Online",id:"get-online",children:[{value:"<code>getOnlineStatus()</code> - Official Docs",id:"getonlinestatus---official-docs",children:[],level:4}],level:3}],m={toc:d};function c(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#send-api"},"Send API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#keyboards"},"Keyboards")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#get-user-details"},"Get User Details")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#get-online"},"Get Online"))),(0,r.kt)("h3",{id:"send-api"},"Send API"),(0,r.kt)("h4",{id:"sendmessagemessage---official-docs"},(0,r.kt)("inlineCode",{parentName:"h4"},"sendMessage(message)")," - ",(0,r.kt)("a",{parentName:"h4",href:"https://developers.viber.com/docs/api/rest-bot-api/#send-message"},"Official Docs")),(0,r.kt)("p",null,"Sending a message to the user."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Message and options to be sent.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"context.sendMessage({\n  type: 'text',\n  text: 'Hello',\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Maximum total JSON size of the request is 30kb.")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"sendtexttext--options---official-docs"},(0,r.kt)("inlineCode",{parentName:"h4"},"sendText(text [, options])")," - ",(0,r.kt)("a",{parentName:"h4",href:"https://developers.viber.com/docs/api/rest-bot-api/#text-message"},"Official Docs")),(0,r.kt)("p",null,"Sending a text message to the user."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/3382565/31481925-61e46008-aeeb-11e7-842f-79fee8066c6a.jpg",width:"300"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The text of the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Other optional parameters.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"context.sendText('Hello');\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"sendpicturepicture--options---official-docs"},(0,r.kt)("inlineCode",{parentName:"h4"},"sendPicture(picture [, options])")," - ",(0,r.kt)("a",{parentName:"h4",href:"https://developers.viber.com/docs/api/rest-bot-api/#picture-message"},"Official Docs")),(0,r.kt)("p",null,"Sending a picture message to the user."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/3382565/31481916-5ec6cdac-aeeb-11e7-878b-6c8c4211a760.jpg",width:"300"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"picture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"picture.text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the photo. Can be an empty string if irrelevant. Max 120 characters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"picture.media"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the image (JPEG). Max size 1 MB. Only JPEG format is supported. Other image formats as well as animated GIFs can be sent as URL messages or file messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"picture.thumbnail"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"URL of a reduced size image (JPEG). Max size 100 kb. Recommended: 400x400. Only JPEG format is supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Other optional parameters.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"context.sendPicture({\n  text: 'Photo description',\n  media: 'http://www.images.com/img.jpg',\n  thumbnail: 'http://www.images.com/thumb.jpg',\n});\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"sendvideovideo--options---official-docs"},(0,r.kt)("inlineCode",{parentName:"h4"},"sendVideo(video [, options])")," - ",(0,r.kt)("a",{parentName:"h4",href:"https://developers.viber.com/docs/api/rest-bot-api/#video-message"},"Official Docs")),(0,r.kt)("p",null,"Sending a video message to the user."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/3382565/31481918-5fa12074-aeeb-11e7-8287-830197d93b5b.jpg",width:"300"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"video"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"video.media"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the video (MP4, H264). Max size 50 MB. Only MP4 and H264 are supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"video.size"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the video in bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"video.duration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"Video duration in seconds; will be displayed to the receiver. Max 180 seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"video.thumbnail"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"URL of a reduced size image (JPEG). Max size 100 kb. Recommended: 400x400. Only JPEG format is supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Other optional parameters.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"context.sendVideo({\n  media: 'http://www.images.com/video.mp4',\n  size: 10000,\n  thumbnail: 'http://www.images.com/thumb.jpg',\n  duration: 10,\n});\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"sendfilefile--options---official-docs"},(0,r.kt)("inlineCode",{parentName:"h4"},"sendFile(file [, options])")," - ",(0,r.kt)("a",{parentName:"h4",href:"https://developers.viber.com/docs/api/rest-bot-api/#file-message"},"Official Docs")),(0,r.kt)("p",null,"Sending a file message to the user."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/3382565/31481919-600f437e-aeeb-11e7-9f13-7269a055cb86.jpg",width:"300"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file.media"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the file. Max size 50 MB. See ",(0,r.kt)("a",{parentName:"td",href:"https://developers.viber.com/docs/api/rest-bot-api/#forbiddenFileFormats"},"forbidden file formats")," for unsupported file types.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file.size"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the file in bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file.fileName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the file. File name should include extension. Max 256 characters (including file extension).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Other optional parameters.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"context.sendFile({\n  media: 'http://www.images.com/file.doc',\n  size: 10000,\n  fileName: 'name_of_file.doc',\n});\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"sendcontactcontact--options---official-docs"},(0,r.kt)("inlineCode",{parentName:"h4"},"sendContact(contact [, options])")," - ",(0,r.kt)("a",{parentName:"h4",href:"https://developers.viber.com/docs/api/rest-bot-api/#contact-message"},"Official Docs")),(0,r.kt)("p",null,"Sending a contact message to the user."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/3382565/31481924-615ce8b2-aeeb-11e7-8425-2d3bfa115fc1.jpg",width:"300"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contact"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contact.name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the contact. Max 28 characters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contact.phoneNumber"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Phone number of the contact. Max 18 characters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Other optional parameters.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"context.sendContact({\n  name: 'Itamar',\n  phoneNumber: '+972511123123',\n});\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"sendlocationlocation--options---official-docs"},(0,r.kt)("inlineCode",{parentName:"h4"},"sendLocation(location [, options])")," - ",(0,r.kt)("a",{parentName:"h4",href:"https://developers.viber.com/docs/api/rest-bot-api/#location-message"},"Official Docs")),(0,r.kt)("p",null,"Sending a location message to the user."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/3382565/31481923-61199a9e-aeeb-11e7-8a25-e3813eceb25b.jpg",width:"300"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"location"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"location.lat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Latitude (\xb190\xb0) within valid ranges.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"location.lon"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Longitude (\xb1180\xb0) within valid ranges.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Other optional parameters.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"context.sendLocation({\n  lat: '37.7898',\n  lon: '-122.3942',\n});\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"sendurlurl--options---official-docs"},(0,r.kt)("inlineCode",{parentName:"h4"},"sendURL(url [, options])")," - ",(0,r.kt)("a",{parentName:"h4",href:"https://developers.viber.com/docs/api/rest-bot-api/#url-message"},"Official Docs")),(0,r.kt)("p",null,"Sending an URL message to the user."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/3382565/31481921-6069f346-aeeb-11e7-97bf-83a17da0bc7a.jpg",width:"300"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"URL. Max 2,000 characters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Other optional parameters.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"context.sendURL('http://developers.viber.com');\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"sendstickerstickerid--options---official-docs"},(0,r.kt)("inlineCode",{parentName:"h4"},"sendSticker(stickerId [, options])")," - ",(0,r.kt)("a",{parentName:"h4",href:"https://developers.viber.com/docs/api/rest-bot-api/#sticker-message"},"Official Docs")),(0,r.kt)("p",null,"Sending a sticker message to the user."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/3382565/31481922-60c2c444-aeeb-11e7-8fc9-bce2e5d06c42.jpg",width:"300"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stickerId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique Viber sticker ID. For examples visit the ",(0,r.kt)("a",{parentName:"td",href:"https://viber.github.io/docs/tools/sticker-ids/"},"sticker IDs")," page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Other optional parameters.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"context.sendSticker(46105);\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"sendcarouselcontentrichmedia--options---official-docs"},(0,r.kt)("inlineCode",{parentName:"h4"},"sendCarouselContent(richMedia [, options])")," - ",(0,r.kt)("a",{parentName:"h4",href:"https://developers.viber.com/docs/api/rest-bot-api/#carousel-content-message"},"Official Docs")),(0,r.kt)("p",null,"Sending a carousel content message to the user."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/3382565/31481917-5f1b43b4-aeeb-11e7-8557-e25951d69b53.jpg",width:"300"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"richMedia.buttonsGroupColumns"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of columns per carousel content block. Default 6 columns. Possible values: 1 - 6.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"richMedia.buttonsGroupRows"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of rows per carousel content block. Default 7 rows. Possible values: 1 - 7.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"richMedia.buttons"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of buttons. Max of 6 ",(0,r.kt)("em",{parentName:"td"}," ButtonsGroupColumns ")," ButtonsGroupRows.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Other optional parameters.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"context.sendCarouselContent({\n  type: 'rich_media',\n  buttonsGroupColumns: 6,\n  buttonsGroupRows: 7,\n  bgColor: '#FFFFFF',\n  buttons: [\n    {\n      columns: 6,\n      rows: 3,\n      actionType: 'open-url',\n      actionBody: 'https://www.google.com',\n      image: 'http://html-test:8080/myweb/guy/assets/imageRMsmall2.png',\n    },\n    {\n      columns: 6,\n      rows: 2,\n      text: '<font color=#323232><b>Headphones with Microphone, On-ear Wired earphones</b></font><font color=#777777><br/>Sound Intone </font><font color=#6fc133>$17.99</font>',\n      actionType: 'open-url',\n      actionBody: 'https://www.google.com',\n      textSize: 'medium',\n      textVAlign: 'middle',\n      textHAlign: 'left',\n    },\n    {\n      columns: 6,\n      rows: 1,\n      actionType: 'reply',\n      actionBody: 'https://www.google.com',\n      text: '<font color=#ffffff>Buy</font>',\n      textSize: 'large',\n      textVAlign: 'middle',\n      textHAlign: 'middle',\n      image: 'https://s14.postimg.org/4mmt4rw1t/Button.png',\n    },\n    {\n      columns: 6,\n      rows: 1,\n      actionType: 'reply',\n      actionBody: 'https://www.google.com',\n      text: '<font color=#8367db>MORE DETAILS</font>',\n      textSize: 'small',\n      textVAlign: 'middle',\n      textHAlign: 'middle',\n    },\n    {\n      columns: 6,\n      rows: 3,\n      actionType: 'open-url',\n      actionBody: 'https://www.google.com',\n      image: 'https://s16.postimg.org/wi8jx20wl/image_RMsmall2.png',\n    },\n    {\n      columns: 6,\n      rows: 2,\n      text: \"<font color=#323232><b>Hanes Men's Humor Graphic T-Shirt</b></font><font color=#777777><br/>Hanes</font><font color=#6fc133>$10.99</font>\",\n      actionType: 'open-url',\n      actionBody: 'https://www.google.com',\n      textSize: 'medium',\n      textVAlign: 'middle',\n      textHAlign: 'left',\n    },\n    {\n      columns: 6,\n      rows: 1,\n      actionType: 'reply',\n      actionBody: 'https://www.google.com',\n      text: '<font color=#ffffff>Buy</font>',\n      textSize: 'large',\n      textVAlign: 'middle',\n      textHAlign: 'middle',\n      image: 'https://s14.postimg.org/4mmt4rw1t/Button.png',\n    },\n    {\n      columns: 6,\n      rows: 1,\n      actionType: 'reply',\n      actionBody: 'https://www.google.com',\n      text: '<font color=#8367db>MORE DETAILS</font>',\n      textSize: 'small',\n      textVAlign: 'middle',\n      textHAlign: 'middle',\n    },\n  ],\n});\n")),(0,r.kt)("br",null),(0,r.kt)("a",{id:"keyboards"}),(0,r.kt)("h3",{id:"keyboards---official-docs"},"Keyboards - ",(0,r.kt)("a",{parentName:"h3",href:"https://developers.viber.com/docs/api/rest-bot-api/#keyboards"},"Official Docs")),(0,r.kt)("p",null,"The Viber API allows sending a custom keyboard using the send_message API, to supply the user with a set of predefined replies or actions. Keyboards can be attached to any message type and be sent and displayed together. To attach a keyboard to a message simply add the keyboard\u2019s parameters to the options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"context.sendText('Hello', {\n  keyboard: {\n    defaultHeight: true,\n    bgColor: '#FFFFFF',\n    buttons: [\n      {\n        columns: 6,\n        rows: 1,\n        bgColor: '#2db9b9',\n        bgMediaType: 'gif',\n        bgMedia: 'http://www.url.by/test.gif',\n        bgLoop: true,\n        actionType: 'open-url',\n        actionBody: 'www.tut.by',\n        image: 'www.tut.by/img.jpg',\n        text: 'Key text',\n        textVAlign: 'middle',\n        textHAlign: 'center',\n        textOpacity: 60,\n        textSize: 'regular',\n      },\n    ],\n  },\n});\n")),(0,r.kt)("p",null,"Which in turn will look like this:"),(0,r.kt)("img",{src:"https://developers.viber.com/docs/img/example_keyboard.png",width:"300"}),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"get-user-details"},"Get User Details"),(0,r.kt)("h4",{id:"getuserdetails---official-docs"},(0,r.kt)("inlineCode",{parentName:"h4"},"getUserDetails()")," - ",(0,r.kt)("a",{parentName:"h4",href:"https://developers.viber.com/docs/api/rest-bot-api/#get-user-details"},"Official Docs")),(0,r.kt)("p",null,"It will fetch the details of the user."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"context.getUserDetails().then((user) => {\n  console.log(user);\n  // {\n  //   id: '01234567890A=',\n  //   name: 'John McClane',\n  //   avatar: 'http://avatar.example.com',\n  //   country: 'UK',\n  //   language: 'en',\n  //   primaryDeviceOs: 'android 7.1',\n  //   apiVersion: 1,\n  //   viberVersion: '6.5.0',\n  //   mcc: 1,\n  //   mnc: 1,\n  //   deviceType: 'iPhone9,4',\n  // };\n});\n")),(0,r.kt)("p",null,"--\x3e"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"get-online"},"Get Online"),(0,r.kt)("h4",{id:"getonlinestatus---official-docs"},(0,r.kt)("inlineCode",{parentName:"h4"},"getOnlineStatus()")," - ",(0,r.kt)("a",{parentName:"h4",href:"https://developers.viber.com/docs/api/rest-bot-api/#get-online"},"Official Docs")),(0,r.kt)("p",null,"It will fetch the online status of the user."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"context.getOnlineStatus().then((status) => {\n  console.log(status);\n  // {\n  //   id: '01234567891=',\n  //   onlineStatus: 1,\n  //   onlineStatusMessage: 'offline',\n  //   lastOnline: 1457764197627,\n  // }\n});\n")))}c.isMDXComponent=!0}}]);
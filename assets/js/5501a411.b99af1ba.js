"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93593],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(u,o(o({ref:n},g),{},{components:t})):r.createElement(u,o({ref:n},g))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},10620:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>g,default:()=>p});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={id:"channel-messenger-routing",title:"Messenger Routing",original_id:"channel-messenger-routing"},l=void 0,c={unversionedId:"channel-messenger-routing",id:"version-1.4/channel-messenger-routing",isDocsHomePage:!1,title:"Messenger Routing",description:"Bottender offers a bunch of helpers to route within your Messenger or multi-platform app. For example, you may use Messenger particular routes within your router:",source:"@site/versioned_docs/version-1.4/channel-messenger-routing.md",sourceDirName:".",slug:"/channel-messenger-routing",permalink:"/docs/1.4/channel-messenger-routing",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.4/channel-messenger-routing.md",tags:[],version:"1.4",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-messenger-routing",title:"Messenger Routing",original_id:"channel-messenger-routing"},sidebar:"version-1.4/docs",previous:{title:"Sending Messenger Messages",permalink:"/docs/1.4/channel-messenger-sending-messages"},next:{title:"Messenger Profile",permalink:"/docs/1.4/channel-messenger-profile"}},g=[],m={toc:g};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bottender offers a bunch of helpers to route within your Messenger or multi-platform app. For example, you may use Messenger particular routes within your ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4/the-basics-routing"},(0,a.kt)("inlineCode",{parentName:"a"},"router")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { router, messenger } = require('bottender/router');\n\nfunction App() {\n  return router([\n    messenger.message(HandleMessage),\n    messenger.accountLinking.linked(HandleAccountLinkingLinked),\n    messenger.accountLinking.unlinked(HandleAccountLinkingUnlinked),\n    messenger.accountLinking(HandleAccountLinking),\n    messenger.delivery(HandleDelivery),\n    messenger.echo(HandleEcho),\n    messenger.gamePlay(HandleGamePlay),\n    messenger.passThreadControl(HandlePassThreadControl),\n    messenger.takeThreadControl(HandleTakeThreadControl),\n    messenger.requestThreadControl(HandleRequestThreadControl),\n    messenger.appRoles(HandleAppRoles),\n    messenger.optin(HandleOptin),\n    messenger.policyEnforcement(HandlePolicyEnforcement),\n    messenger.postback(HandlePostback),\n    messenger.reaction.react(HandleReactionReact),\n    messenger.reaction.unreact(HandleReactionUnreact),\n    messenger.reaction(HandleReaction),\n    messenger.read(HandleRead),\n    messenger.referral(HandleReferral),\n    messenger.standby(HandleStandby),\n    messenger.any(HandleMessenger),\n  ]);\n}\n\n/* Note: You need to implement those functions */\nasync function HandleMessage(context) {}\nasync function HandleAccountLinkingLinked(context) {}\nasync function HandleAccountLinkingUnlinked(context) {}\nasync function HandleAccountLinking(context) {}\nasync function HandleDelivery(context) {}\nasync function HandleEcho(context) {}\nasync function HandleGamePlay(context) {}\nasync function HandlePassThreadControl(context) {}\nasync function HandleTakeThreadControl(context) {}\nasync function HandleRequestThreadControl(context) {}\nasync function HandleAppRoles(context) {}\nasync function HandleOptin(context) {}\nasync function HandlePolicyEnforcement(context) {}\nasync function HandlePostback(context) {}\nasync function HandleReactionReact(context) {}\nasync function HandleReactionUnreact(context) {}\nasync function HandleReaction(context) {}\nasync function HandleRead(context) {}\nasync function HandleReferral(context) {}\nasync function HandleStandby(context) {}\nasync function HandleMessenger(context) {}\n")),(0,a.kt)("p",null,"All available routes in ",(0,a.kt)("inlineCode",{parentName:"p"},"messenger")," that recognize different kind of events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.any")," - triggers the action when receiving any Messenger events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.message")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"message")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.accountLinking.linked")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"account_linking")," events with status ",(0,a.kt)("inlineCode",{parentName:"li"},"linked"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.accountLinking.unlinked")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"account_linking")," events with status ",(0,a.kt)("inlineCode",{parentName:"li"},"unlinked"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.accountLinking")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"account_linking")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.delivery")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"delivery")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.echo")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"echo")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.gamePlay")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"game_play")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.passThreadControl")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"pass_thread_control")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.takeThreadControl")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"take_thread_control")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.requestThreadControl")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"request_thread_control")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.appRoles")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"app_roles")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.optin")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"optin")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.policyEnforcement")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"policy_enforcement")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.postback")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"postback")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.preCheckout")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"pre_checkout")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.reaction.react")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"reaction")," events with action ",(0,a.kt)("inlineCode",{parentName:"li"},"react"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.reaction.unreact")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"reaction")," events with action ",(0,a.kt)("inlineCode",{parentName:"li"},"unreact"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.reaction")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"reaction")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.read")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"read")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.referral")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"referral")," events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messenger.standby")," - triggers the action when receiving Messenger ",(0,a.kt)("inlineCode",{parentName:"li"},"standby")," events.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," You must subscribe corresponding events for your page to receive the events.")))}p.isMDXComponent=!0}}]);
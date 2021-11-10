"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70663],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,r=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=s,u=d["".concat(r,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(u,l(l({ref:t},p),{},{components:a})):n.createElement(u,l({ref:t},p))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},16716:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>c,toc:()=>p,default:()=>d});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),l=["components"],i={id:"channel-slack-sending-messages",title:"Sending Slack Messages"},r=void 0,c={unversionedId:"channel-slack-sending-messages",id:"channel-slack-sending-messages",isDocsHomePage:!1,title:"Sending Slack Messages",description:"Since Slack is a messaging channel specialized for team communication, Slack bots are usually expected to work either inside a channel or 1 on 1 chat.",source:"@site/../docs/channel-slack-sending-messages.md",sourceDirName:".",slug:"/channel-slack-sending-messages",permalink:"/docs/next/channel-slack-sending-messages",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/../docs/channel-slack-sending-messages.md",tags:[],version:"current",lastUpdatedBy:"etrex",lastUpdatedAt:1588139478,formattedLastUpdatedAt:"4/29/2020",frontMatter:{id:"channel-slack-sending-messages",title:"Sending Slack Messages"},sidebar:"docs",previous:{title:"Handling Slack Events",permalink:"/docs/next/channel-slack-handling-events"},next:{title:"Slack Routing",permalink:"/docs/next/channel-slack-routing"}},p=[{value:"Sending Text Messages",id:"sending-text-messages",children:[],level:2},{value:"Posting Messages",id:"posting-messages",children:[],level:2},{value:"Updating Messages",id:"updating-messages",children:[],level:2},{value:"Deleting Messages",id:"deleting-messages",children:[],level:2},{value:"Posting Ephemeral Messages",id:"posting-ephemeral-messages",children:[],level:2},{value:"Sharing Me Messages",id:"sharing-me-messages",children:[],level:2},{value:"Retrieving A Permalink URL for Specific Extant Messages",id:"retrieving-a-permalink-url-for-specific-extant-messages",children:[],level:2},{value:"Scheduling Messages",id:"scheduling-messages",children:[{value:"Scheduling Messages",id:"scheduling-messages-1",children:[],level:3},{value:"Getting a List of Scheduled Messages",id:"getting-a-list-of-scheduled-messages",children:[],level:3},{value:"Deleting Pending Scheduled Messages",id:"deleting-pending-scheduled-messages",children:[],level:3}],level:2}],m={toc:p};function d(e){var t=e.components,a=(0,s.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Since Slack is a messaging channel specialized for team communication, Slack bots are usually expected to work either inside a channel or 1 on 1 chat."),(0,o.kt)("p",null,"Chatting in the channel makes collecting individual preferences efficiently. For example, we have a Slack bot to collect colleagues' afternoon tea orders."),(0,o.kt)("p",null,"Plus, Slack bot is especially good at notification scenarios, e.g., monitoring the health status of online service, or current stars of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender"},"Bottender GitHub repo"),"(Star it if you like it!). It is because Slack apps can post messages to channels, groups, or users without any extra fee."),(0,o.kt)("p",null,"While developing with Official Slack API, developers have to manage token, channel id, user id of each dialog. Bottender helps developers manage those parameters by ",(0,o.kt)("inlineCode",{parentName:"p"},"context.")," Bot developers can always make a bot respond to its current context, no matter the context is ",(0,o.kt)("inlineCode",{parentName:"p"},"Public Channels,")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Private Channels,")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Private Groups,")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Direct Messaging.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The idea of ",(0,o.kt)("inlineCode",{parentName:"li"},"Bot")," connects to Slack's ",(0,o.kt)("inlineCode",{parentName:"li"},"APP.")," It is important when you are cross-referencing Bottender doc with Slack's official doc."),(0,o.kt)("li",{parentName:"ul"},"Since Slack is one of the sophisticated chat channels, in this doc, we only cover the most frequent use of methods. To access the full list of Slack API support of Bottender, you may refer to ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/api-slack-context"},"Bottender's API"),".\nIf you are interested in Slack's complete methods, you may refer to Slack's official document, \"",(0,o.kt)("a",{parentName:"li",href:"https://api.slack.com/methods"},"API Methods."),"\". Don't miss the ",(0,o.kt)("inlineCode",{parentName:"li"},"Test")," tab next to each method; it offers a handy way to try native Slack API better."))),(0,o.kt)("h2",{id:"sending-text-messages"},"Sending Text Messages"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/69952866-0f27bf80-1533-11ea-8cbc-41b68e2f733e.png",alt:"Screen Shot 2019-12-02 at 6 38 26 PM"})),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Text message")," is the most frequent and common message types. It also offers a minimal medium carrying out dynamic data, e.g., stock price and weather info."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function SendHi(context) {\n  await context.sendText('Hi!');\n}\n")),(0,o.kt)("h2",{id:"posting-messages"},"Posting Messages"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/70302447-1b17c800-1838-11ea-8c9a-affe2820fb2f.png",alt:"Screen Shot 2019-12-06 at 2 52 03 PM"})),(0,o.kt)("p",null,"This method posts a message to a public channel, private channel, or direct message. To fully support Slack's chat UI features, Bottender passes message parameters to Slack's API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.chat.postMessage({\n  text: 'Hello world!',\n});\n")),(0,o.kt)("p",null,"For more information, please refer to Slack's official doc, ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/methods/chat.postMessage"},(0,o.kt)("inlineCode",{parentName:"a"},"chat.postMessage"))),(0,o.kt)("h2",{id:"updating-messages"},"Updating Messages"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/70304195-5e743580-183c-11ea-8859-fab3b2d1b55b.png",alt:"image"})),(0,o.kt)("p",null,"Updating existing messages is one of the unique features of Slack. It is useful when your bot displays a real-time date, and you don't want to have a frequently scrolling window."),(0,o.kt)("p",null,"In the above image, the second message is updated by Bottender. You may notice that while a user updated his message, a little annotation ",(0,o.kt)("inlineCode",{parentName:"p"},"(edited)")," is shown next to the message, a bot update its existing message without ",(0,o.kt)("inlineCode",{parentName:"p"},"(edited)")," annotation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.chat.update({\n  text: 'Hello world!',\n  ts: '1405894322.002768',\n});\n")),(0,o.kt)("p",null,"For more information, please refer to Slack's official doc, ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/methods/chat.update"},(0,o.kt)("inlineCode",{parentName:"a"},"chat.update"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"ts")," parameter in the code above, refers to the timestamp of the message, which is a (per-channel) unique id of each message,"),(0,o.kt)("li",{parentName:"ul"},"Ephemeral messages created by chat.postEphemeral or otherwise cannot be updated with this method."))),(0,o.kt)("h2",{id:"deleting-messages"},"Deleting Messages"),(0,o.kt)("p",null,"This method deletes a message posted by the bot from a channel."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.chat.delete({\n  ts: '1405894322.002768',\n});\n")),(0,o.kt)("p",null,"For more information, please refer to Slack's official doc, ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/methods/chat.delete"},(0,o.kt)("inlineCode",{parentName:"a"},"chat.delete"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"ts")," parameter in the code above, refers to the timestamp of the message, which is a (per-channel) unique id of each message,")),(0,o.kt)("h2",{id:"posting-ephemeral-messages"},"Posting Ephemeral Messages"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/70307764-da727b80-1844-11ea-9c33-488cf477e6a4.png",alt:"image"})),(0,o.kt)("p",null,"Bots can post ",(0,o.kt)("inlineCode",{parentName:"p"},"Ephemeral Messages")," only visible to the assigned user in a specific public channel, private channel, or private conversation. In short, ",(0,o.kt)("inlineCode",{parentName:"p"},"Ephemeral Messages")," allows bots to replies context-sensitive information to the user under current Bottender ",(0,o.kt)("inlineCode",{parentName:"p"},"context.")," For example, when a user inputs ",(0,o.kt)("inlineCode",{parentName:"p"},"check-in"),", the bot could post an ",(0,o.kt)("inlineCode",{parentName:"p"},"Ephemeral Message")," to the user check-in time."),(0,o.kt)("p",null,"For more information, please refer to Slack's official doc, ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/methods/chat.postEphemeral"},(0,o.kt)("inlineCode",{parentName:"a"},"chat.postEphemeral"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Ephemeral Message")," delivery is not guaranteed \u2014 the user must be currently active in Slack and a member of the specified channel.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.chat.postEphemeral({\n  text: 'Hello world!',\n});\n")),(0,o.kt)("p",null,"For more information, please refer to Slack's official doc, ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/methods/chat.postEphemeral"},(0,o.kt)("inlineCode",{parentName:"a"},"chat.postEphemeral"))),(0,o.kt)("h2",{id:"sharing-me-messages"},"Sharing Me Messages"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/70309070-9e8ce580-1847-11ea-97b3-c4d5bfaf6996.png",alt:"image"})),(0,o.kt)("p",null,"Share a me message into a channel."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.chat.meMessage({\n  text: 'Hello world!',\n});\n")),(0,o.kt)("p",null,"For more information, please refer to Slack's official doc, ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/methods/chat.meMessage"},(0,o.kt)("inlineCode",{parentName:"a"},"chat.meMessage"))),(0,o.kt)("h2",{id:"retrieving-a-permalink-url-for-specific-extant-messages"},"Retrieving A Permalink URL for Specific Extant Messages"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/70309356-4efae980-1848-11ea-815e-dfdf7ae49cc2.png",alt:"image"})),(0,o.kt)("p",null,"Retrieve a permalink URL for a specific extant message"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.chat.getPermalink({\n  messageTs: '1234567890.123456',\n});\n")),(0,o.kt)("p",null,"For more information, please refer to Slack's official doc, ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/methods/chat.getPermalink"},(0,o.kt)("inlineCode",{parentName:"a"},"chat.getPermalink"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"messageTs")," parameter in the code above, refers to the timestamp of the message, which is a (per-channel) unique id of each message,")),(0,o.kt)("h2",{id:"scheduling-messages"},"Scheduling Messages"),(0,o.kt)("p",null,"Slack owns a built-in message scheduling system. For other chat channels, you probably have to run a ",(0,o.kt)("inlineCode",{parentName:"p"},"cronjob")," to schedule messages."),(0,o.kt)("h3",{id:"scheduling-messages-1"},"Scheduling Messages"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/70310573-efeaa400-184a-11ea-8f24-2cae4b644d08.png",alt:"image"})),(0,o.kt)("p",null,"Schedules a message to be sent to a channel."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.chat.scheduleMessage({\n  text: 'Hello world!',\n  postAt: '299876400',\n});\n")),(0,o.kt)("p",null,"For more information, please refer to Slack's official doc, ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/methods/chat.scheduleMessage"},(0,o.kt)("inlineCode",{parentName:"a"},"chat.scheduleMessage"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"postAt")," parameter in the code above follows Unix EPOCH timestamp.")),(0,o.kt)("h3",{id:"getting-a-list-of-scheduled-messages"},"Getting a List of Scheduled Messages"),(0,o.kt)("p",null,"You can get a list of scheduled messages by the following code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.chat.scheduledMessages.list();\n")),(0,o.kt)("p",null,"For more information, please refer to Slack's official doc, ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/methods/chat.scheduledMessages.list"},(0,o.kt)("inlineCode",{parentName:"a"},"chat.scheduledMessages.list"))),(0,o.kt)("h3",{id:"deleting-pending-scheduled-messages"},"Deleting Pending Scheduled Messages"),(0,o.kt)("p",null,"First, you have to use ",(0,o.kt)("inlineCode",{parentName:"p"},"chat.scheduledMessages.list")," to figure out the ",(0,o.kt)("inlineCode",{parentName:"p"},"<SCHEDULED_MESSAGE_ID>")," you want to delete. Then you can use the below method to delete a scheduled message."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.chat.deleteScheduledMessage({\n  scheduledMessageId: '<SCHEDULED_MESSAGE_ID>',\n});\n")),(0,o.kt)("p",null,"For more information, please refer to Slack's official doc, ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/methods/chat.deleteScheduledMessage"},(0,o.kt)("inlineCode",{parentName:"a"},"chat.deleteScheduledMessage"))))}d.isMDXComponent=!0}}]);
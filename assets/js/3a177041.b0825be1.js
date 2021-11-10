"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?s.createElement(h,a(a({ref:t},d),{},{components:n})):s.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var c=2;c<i;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74113:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var s=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],r={id:"the-basics-session",title:"Session"},l=void 0,c={unversionedId:"the-basics-session",id:"the-basics-session",isDocsHomePage:!1,title:"Session",description:"Introduction",source:"@site/../docs/the-basics-session.md",sourceDirName:".",slug:"/the-basics-session",permalink:"/docs/next/the-basics-session",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/../docs/the-basics-session.md",tags:[],version:"current",lastUpdatedBy:"chentsulin",lastUpdatedAt:1585326612,formattedLastUpdatedAt:"3/28/2020",frontMatter:{id:"the-basics-session",title:"Session"},sidebar:"docs",previous:{title:"Chain of Responsibility",permalink:"/docs/next/the-basics-chain"},next:{title:"Error Handling",permalink:"/docs/next/the-basics-errors"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Session State",id:"session-state",children:[{value:"A Counting Bot Example",id:"a-counting-bot-example",children:[],level:3},{value:"Adding State to the Conversation",id:"adding-state-to-the-conversation",children:[],level:3},{value:"State Updates are Merged",id:"state-updates-are-merged",children:[],level:3},{value:"Debug State in Console Mode",id:"debug-state-in-console-mode",children:[],level:3}],level:2},{value:"Session ID",id:"session-id",children:[],level:2},{value:"Session Storage",id:"session-storage",children:[{value:"Configuring Session Driver",id:"configuring-session-driver",children:[],level:3},{value:"Using Different Session Driver Based on NODE_ENV",id:"using-different-session-driver-based-on-node_env",children:[],level:3},{value:"Setting the Session Expiration Time",id:"setting-the-session-expiration-time",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Conversations may happen in a 1 on 1 chat or even in a channel with thousands of people in there. So, Bottender provides a mechanism called ",(0,i.kt)("strong",{parentName:"p"},"session")," to distinguish different conversations and store temporary data on the corresponding conversation. The session mechanism in Bottender bots is similar to the session mechanism in typical web servers."),(0,i.kt)("p",null,"Before using the session, you may want to know the following terminologies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/the-basics-session#session-state"},"Session State"),": temporary data on the conversation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/the-basics-session#session-id"},"Session ID"),": an unique identifier of the conversation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/the-basics-session#session-storage"},"Session Storage"),": where to store the session.")),(0,i.kt)("h2",{id:"session-state"},"Session State"),(0,i.kt)("p",null,"Session state is the temporary data stored on the corresponding conversation. You can provide customized user experience with session state. For example, you can use session state to count the number of the received messages."),(0,i.kt)("h3",{id:"a-counting-bot-example"},"A Counting Bot Example"),(0,i.kt)("p",null,"Considering a counting bot which replies the number of message events it received, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You > Hi\nBot > Count: 1\nYou > Hi\nBot > Count: 2\n")),(0,i.kt)("p",null,"In this section, we will explain how to use the state correctly to build a counter. It begins with a count state variable, which is updated when the bot receives an event."),(0,i.kt)("p",null,"Let's start with a static ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/the-basics-actions"},"Bottender action")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async function EventCount(context) {\n  await context.sendText('Count: 1');\n}\n")),(0,i.kt)("h3",{id:"adding-state-to-the-conversation"},"Adding State to the Conversation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set initial state in the ",(0,i.kt)("inlineCode",{parentName:"li"},"bottender.config.js")," file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  initialState: {\n    count: 0,\n  },\n};\n")),(0,i.kt)("p",null,"After adding the above settings, Bottender sets the initial state to the specified object for the new conversation session."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Access state value using ",(0,i.kt)("inlineCode",{parentName:"li"},"context.state"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async function EventCount(context) {\n  const count = context.state.count + 1;\n  await context.sendText(`Count: ${count}`);\n}\n")),(0,i.kt)("p",null,"Even though we use the state variable to render the message content, it always gets ",(0,i.kt)("inlineCode",{parentName:"p"},"Count: 1")," as a result. That's why step 3 is necessary."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Set state value using ",(0,i.kt)("inlineCode",{parentName:"li"},"context.setState()"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async function EventCount(context) {\n  const count = context.state.count + 1;\n\n  context.setState({\n    count,\n  });\n\n  await context.sendText(`Count: ${count}`);\n}\n")),(0,i.kt)("p",null,"Then it works as expected."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," don't modify state directly using ",(0,i.kt)("inlineCode",{parentName:"p"},"this.state.stateKey = stateValue;"),", it may cause unexpected behavior in the future.")),(0,i.kt)("h3",{id:"state-updates-are-merged"},"State Updates are Merged"),(0,i.kt)("p",null,"When you call ",(0,i.kt)("inlineCode",{parentName:"p"},"setState()"),", Bottender shallow merges the object you provide into the current state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"context.state; // { count: 1 }\n\ncontext.setState({\n  myObject: {},\n});\n\ncontext.state; // { count: 1, myObject: {} }\n")),(0,i.kt)("p",null,"If you want to do a deeper merge, you need to do it explicitly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"context.setState({\n  myObject: {\n    ...context.myObject,\n    key: value,\n  },\n});\n")),(0,i.kt)("h3",{id:"debug-state-in-console-mode"},"Debug State in Console Mode"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/the-basics-console-mode"},"Console Mode"),", you can leverage the convenient built-in command - ",(0,i.kt)("inlineCode",{parentName:"p"},"/state")," to help you debug you state transition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You > /state\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"/state")," command formats the state with ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," and send the result as a bot message to you:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Bot > { "count": 1 }\n')),(0,i.kt)("h2",{id:"session-id"},"Session ID"),(0,i.kt)("p",null,"Every session has a unique identifier. You can get the unique identifier on the ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," by accessing ",(0,i.kt)("inlineCode",{parentName:"p"},"context.session.id"),". For example, you may let your bot replies with the platform and session ID information to the user:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = async function App(context) {\n  await context.sendText(`Platform: ${context.platform}`);\n  await context.sendText(`Session ID: ${context.session.id}`);\n};\n")),(0,i.kt)("p",null,"To avoid ID conflict among platforms, Bottender combines the name of the platform and the session key to create the unique session ID. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"telegram:16423...")," on Telegram"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"line:U4af4980629...")," on LINE")),(0,i.kt)("p",null,"To support all kinds of 1 on 1 chats and channel chats on all platforms, Bottender gets session keys from user IDs, channel IDs, group IDs, room IDs, or whatever that Bottender can use to distinguish the conversations."),(0,i.kt)("p",null,"For example, the LINE platform defines three types of sources (user, group, and room) in ",(0,i.kt)("a",{parentName:"p",href:"https://developers.line.biz/en/reference/messaging-api/#common-properties"},"the LINE official document"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If an event comes from a user, the session key is the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"source.userId"),", so the entire session ID looks like: ",(0,i.kt)("inlineCode",{parentName:"li"},"line:U4af4980629..."),"."),(0,i.kt)("li",{parentName:"ul"},"If an event comes from a group, the session key is the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"source.groupId"),", so the entire session ID looks like: ",(0,i.kt)("inlineCode",{parentName:"li"},"line:Ca56f94637c..."),"."),(0,i.kt)("li",{parentName:"ul"},"If an event comes from a room, the session key is the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"source.roomId"),", so the entire session ID looks like: ",(0,i.kt)("inlineCode",{parentName:"li"},"line:Ra8dbf4673c..."),".")),(0,i.kt)("h2",{id:"session-storage"},"Session Storage"),(0,i.kt)("p",null,"Since HTTP driven apps are stateless, the mission of sessions is to store the context of users during conversations."),(0,i.kt)("h3",{id:"configuring-session-driver"},"Configuring Session Driver"),(0,i.kt)("p",null,"The session driver configuration option defines where session data are stored for each conversation. To set the session driver, edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"session.driver")," field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// bottender.config.js\n\nmodule.exports = {\n  session: {\n    driver: 'memory',\n    stores: {\n      memory: {\n        maxSize: 500,\n      },\n      file: {\n        dirname: '.sessions',\n      },\n      redis: {\n        port: 6379,\n        host: '127.0.0.1',\n        password: 'auth',\n        db: 0,\n      },\n      mongo: {\n        url: 'mongodb://localhost:27017',\n        collectionName: 'sessions',\n      },\n    },\n  },\n};\n")),(0,i.kt)("p",null,"Bottender ships with several great drivers out of the box:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"memory")," - sessions are stored in memory with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/isaacs/node-lru-cache"},"LRU cache")," and not persistent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"file")," - sessions are stored in the files placed in the ",(0,i.kt)("inlineCode",{parentName:"li"},".sessions")," directory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"redis")," - sessions are stored in a ",(0,i.kt)("a",{parentName:"li",href:"https://redis.io/"},"Redis")," database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mongo")," - sessions are stored in a ",(0,i.kt)("a",{parentName:"li",href:"https://www.mongodb.com/"},"MongoDB")," database.")),(0,i.kt)("h3",{id:"using-different-session-driver-based-on-node_env"},"Using Different Session Driver Based on NODE_ENV"),(0,i.kt)("p",null,"We recommend using ",(0,i.kt)("inlineCode",{parentName:"p"},"memory")," as the session driver in development for shorter iteration. By restarting the process, you can reset the session store completely."),(0,i.kt)("p",null,"Also, you can determine which session driver to use in development or production separately by using an environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// bottender.config.js\n\nmodule.exports = {\n  session: {\n    driver: process.env.NODE_ENV === 'production' ? 'mongo' : 'memory',\n    // ...\n  },\n};\n")),(0,i.kt)("h3",{id:"setting-the-session-expiration-time"},"Setting the Session Expiration Time"),(0,i.kt)("p",null,"You can specify an explicit session expiration time to reset the state. It makes a bot more human-like by forgetting (re-initializing) the state after the conversation has been inactive for a while."),(0,i.kt)("p",null,"By default, Bottender never expires the stored sessions. To set explicit session expiration time, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"session.expiresIn")," setting in your ",(0,i.kt)("inlineCode",{parentName:"p"},"bottender.config.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// bottender.config.js\n\nmodule.exports = {\n  session: {\n    driver: 'memory',\n    expiresIn: 15, // 15 minutes\n    // ...\n  },\n};\n")),(0,i.kt)("p",null,"With the above settings, the users get a new session and ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/the-basics-session#session-state"},"state")," after 15 minutes of user inactive."))}u.isMDXComponent=!0}}]);
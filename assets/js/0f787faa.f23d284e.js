"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(l,".").concat(c)]||u[c]||d[c]||a;return n?s.createElement(k,o(o({ref:t},m),{},{components:n})):s.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27430:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>p,toc:()=>m,default:()=>u});var s=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],i={id:"session",title:"Conversation Session",original_id:"session"},l=void 0,p={unversionedId:"session",id:"version-0.15.17/session",isDocsHomePage:!1,title:"Conversation Session",description:"A session is a place to store data that you want to access to across requests. Each user that talks to your bot have a unique session. You can use sessions to store and access user data as they talk to your bot.",source:"@site/versioned_docs/version-0.15.17/Guides-Session.md",sourceDirName:".",slug:"/session",permalink:"/docs/0.15.17/session",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-0.15.17/Guides-Session.md",tags:[],version:"0.15.17",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"session",title:"Conversation Session",original_id:"session"},sidebar:"version-0.15.17/docs",previous:{title:"HTTP Server",permalink:"/docs/0.15.17/server"},next:{title:"State",permalink:"/docs/0.15.17/state"}},m=[{value:"Session Expiration",id:"session-expiration",children:[],level:2},{value:"Use Different Session Store",id:"use-different-session-store",children:[],level:2},{value:"Session Store Configuration",id:"session-store-configuration",children:[{value:"MemorySessionStore",id:"memorysessionstore",children:[],level:3},{value:"FileSessionStore",id:"filesessionstore",children:[],level:3},{value:"MongoSessionStore",id:"mongosessionstore",children:[],level:3},{value:"RedisSessionStore",id:"redissessionstore",children:[],level:3}],level:2},{value:"Adding Custom Session Drivers",id:"adding-custom-session-drivers",children:[],level:2},{value:"Manipulate Session State",id:"manipulate-session-state",children:[],level:2}],d={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A session is a place to store data that you want to access to across requests. Each user that talks to your bot have a unique session. You can use sessions to store and access user data as they talk to your bot."),(0,a.kt)("h2",{id:"session-expiration"},"Session Expiration"),(0,a.kt)("p",null,"You are able to set expired time for session optionally. The default value of expiration is ",(0,a.kt)("strong",{parentName:"p"},"one year")," after ",(0,a.kt)("inlineCode",{parentName:"p"},"SessionStore")," object is created.",(0,a.kt)("br",{parentName:"p"}),"\n","The expiration should be sent as a ",(0,a.kt)("strong",{parentName:"p"},"Number of minutes")," when you are initializing a ",(0,a.kt)("inlineCode",{parentName:"p"},"SessionStore")," object."),(0,a.kt)("p",null,"Here is an example of creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"MongoSessionStore")," object with expired time:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Session will expire after 10 minutes\nconst { ConsoleBot, MongoSessionStore } = require('bottender');\n\nconst bot = new ConsoleBot({\n  sessionStore: new MongoSessionStore(\n    'mongodb://localhost:27017/',\n    {\n      collectionName: 'session',\n    },\n    10\n  ),\n});\n")),(0,a.kt)("h2",{id:"use-different-session-store"},"Use Different Session Store"),(0,a.kt)("p",null,"Session store is a place where session data is being stored on the server."),(0,a.kt)("p",null,"We implement the following kinds of session store. All kinds of bots will use memory session store as default."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"memory")," - sessions are stored in memory with ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/isaacs/node-lru-cache"},"LRU cache")," and will not be persisted. See ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Yoctol/bottender/tree/v0.15.x/examples/session-memory"},"example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"file")," - sessions are stored in ",(0,a.kt)("inlineCode",{parentName:"li"},".sessions")," by default. See\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Yoctol/bottender/tree/v0.15.x/examples/session-file"},"example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mongo")," - sessions are stored in a mongo database. See\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Yoctol/bottender/tree/v0.15.x/examples/session-mongo"},"example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"redis")," - sessions are stored in redis based stores. See\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Yoctol/bottender/tree/v0.15.x/examples/session-redis"},"example"))),(0,a.kt)("h2",{id:"session-store-configuration"},"Session Store Configuration"),(0,a.kt)("h3",{id:"memorysessionstore"},"MemorySessionStore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { MemorySessionStore } from 'bottender';\n\nnew MemorySessionStore(max, expiresIn);\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Number")),(0,a.kt)("td",{parentName:"tr",align:null},"The max number of items in memory cache, defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},"Infinity"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiresIn"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Number")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Session expiration time in minutes, defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},"365 * 24 * 60"),", or 1 year.")))),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new MemorySessionStore();\nnew MemorySessionStore(1000);\n")),(0,a.kt)("h3",{id:"filesessionstore"},"FileSessionStore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { FileSessionStore } from 'bottender';\n\nnew FileSessionStore(dirname, expiresIn);\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dirname"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. The directory name to store session files, defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},".sessions"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiresIn"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Number")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Session expiration time in minutes, defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},"365 * 24 * 60"),", or 1 year.")))),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new FileSessionStore();\nnew FileSessionStore('my-sessions-folder');\n")),(0,a.kt)("h3",{id:"mongosessionstore"},"MongoSessionStore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { MongoSessionStore } from 'bottender';\n\nnew MongoSessionStore(url, options, expiresIn);\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("a",{parentName:"td",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"mongodb connection string")," to your database.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Object")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. The options object. See below for details.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options.collectionName"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. The collection name to store the sessions, defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},"sessions"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiresIn"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Number")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Session expiration time in minutes, defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},"365 * 24 * 60"),", or 1 year.")))),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new MongoSessionStore(); // Connect to 127.0.0.1:27017\nnew MongoSessionStore(\n  'mongodb://db1.example.net:27017,db2.example.net:2500/?replicaSet=test',\n  { collectionName: 'my-sessions' }\n);\n")),(0,a.kt)("h3",{id:"redissessionstore"},"RedisSessionStore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { RedisSessionStore } from 'bottender';\n\nnew RedisSessionStore(redisOption, expiresIn);\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"redisOption"),(0,a.kt)("td",{parentName:"tr",align:null},"`String"),(0,a.kt)("td",{parentName:"tr",align:null},"Number"),(0,a.kt)("td",{parentName:"tr",align:null},"Object`"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/luin/ioredis#connect-to-redis"},"ioredis connection option")," to your database. See below for examples.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiresIn"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Number")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Session expiration time in minutes, defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},"365 * 24 * 60"),", or 1 year."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new RedisSessionStore(); // Connect to 127.0.0.1:6379\nnew RedisSessionStore(6380); // 127.0.0.1:6380\nnew RedisSessionStore({\n  port: 6379, // Redis port\n  host: '127.0.0.1', // Redis host\n  family: 4, // 4 (IPv4) or 6 (IPv6)\n  password: 'auth',\n  db: 0,\n});\n// Connect to 127.0.0.1:6380, db 4, using password \"authpassword\"\nnew RedisSessionStore('redis://:authpassword@127.0.0.1:6380/4');\n")),(0,a.kt)("h2",{id:"adding-custom-session-drivers"},"Adding Custom Session Drivers"),(0,a.kt)("p",null,"Your custom session driver should implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"SessionStore")," interface. This interface contains just a few simple methods you need to implement. A stubbed store implementation looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// @flow\n\nclass Store implements SessionStore {\n  init(): Promise<SessionStore> {\n    /* Initializes the session store */\n  }\n  read(sessionId: string): Promise<Session | null> {\n    /* Reads single session from the session store  */\n  }\n  write(sessionId: string, data): Promise<void> {\n    /* Writes single session to the session store  */\n  }\n  destroy(sessionId: string): Promise<void> {\n    /* Deletes single session from the session store  */\n  }\n  all(): Promise<Array<Session>> {\n    /* Reads all sessions from the session store  */\n  }\n}\n")),(0,a.kt)("h2",{id:"manipulate-session-state"},"Manipulate Session State"),(0,a.kt)("p",null,"See more on ",(0,a.kt)("a",{parentName:"p",href:"state"},"state"),"."))}u.isMDXComponent=!0}}]);
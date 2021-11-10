"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},34954:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>p,toc:()=>l,default:()=>h});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"the-basics-chain",title:"Chain of Responsibility"},c=void 0,p={unversionedId:"the-basics-chain",id:"the-basics-chain",isDocsHomePage:!1,title:"Chain of Responsibility",description:"Using the Chain of Responsibility pattern is another way to organize your Bottender actions in your Bottender app. This pattern lets you explicitly prioritize your actions by specifying the order of the actions.",source:"@site/../docs/the-basics-chain.md",sourceDirName:".",slug:"/the-basics-chain",permalink:"/docs/next/the-basics-chain",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/../docs/the-basics-chain.md",tags:[],version:"current",lastUpdatedBy:"chentsulin",lastUpdatedAt:1585234507,formattedLastUpdatedAt:"3/26/2020",frontMatter:{id:"the-basics-chain",title:"Chain of Responsibility"},sidebar:"docs",previous:{title:"Routing",permalink:"/docs/next/the-basics-routing"},next:{title:"Session",permalink:"/docs/next/the-basics-session"}},l=[{value:"Using with Router",id:"using-with-router",children:[],level:2}],u={toc:l};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Using the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern"},"Chain of Responsibility")," pattern is another way to organize your ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/the-basics-actions"},"Bottender actions")," in your Bottender app. This pattern lets you explicitly prioritize your actions by specifying the order of the actions."),(0,a.kt)("p",null,"Considering a customer service bot app with three very different layers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RuleBased"),": Use JavaScript rules to handle incoming events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MachineLearning"),": Use machine learning models to handle incoming events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HumanAgent"),": Use human agents to handle incoming events.")),(0,a.kt)("p",null,"In general, you may want to put the cheapest layer at the top of the chain. For example, you may put the ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleBased")," action at the top:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { chain } = require('bottender');\n\nfunction RuleBased(context, props) {\n  if (context.event.text === 'hi') {\n    // discontinue and return the `SayHi` action\n    return SayHi;\n  }\n  // continue to the `next` action\n  return props.next;\n}\n\nfunction MachineLearningBased(context, props) {\n  /* ...skip */\n}\n\nfunction HumanAgent(context, props) {\n  /* ...skip */\n}\n\nfunction App() {\n  return chain([\n    // execute in the following order\n    RuleBased,\n    MachineLearningBased,\n    HumanAgent,\n  ]);\n}\n")),(0,a.kt)("p",null,'If your bot receives a "hi" text message, the ',(0,a.kt)("inlineCode",{parentName:"p"},"RuleBased")," action returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"SayHi")," action and exits the chain. Otherwise, the ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleBased")," action returns ",(0,a.kt)("inlineCode",{parentName:"p"},"props.next")," and goes down to the ",(0,a.kt)("inlineCode",{parentName:"p"},"MachineLearningBased")," action."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"chain")," function takes an array of actions and returns an action as the return value, so it can work with all patterns that compatible with the Bottender actions."),(0,a.kt)("h2",{id:"using-with-router"},"Using with Router"),(0,a.kt)("p",null,"You can use the Chain of Responsibility pattern with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/the-basics-routing"},"routing mechanism")," that Bottender provides. For example, you may use the ",(0,a.kt)("inlineCode",{parentName:"p"},"router")," function to create a router within the ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleBased")," layer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function RuleBased(context, { next }) {\n  return router([\n    // return the `SayHi` action when receiving a \"hi\" text message\n    text('hi', SayHi),\n    // return the `next` action\n    route('*', next),\n  ]);\n}\n\nfunction App() {\n  return chain([\n    // execute in the following order\n    RuleBased,\n    MachineLearningBased,\n    HumanAgent,\n  ]);\n}\n")))}h.isMDXComponent=!0}}]);
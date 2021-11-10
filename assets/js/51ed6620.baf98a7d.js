"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1195],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return t?a.createElement(g,s(s({ref:n},c),{},{components:t})):a.createElement(g,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75668:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>u});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),s=["components"],i={id:"channel-messenger-persona",title:"Using Messenger Persona"},l=void 0,p={unversionedId:"channel-messenger-persona",id:"channel-messenger-persona",isDocsHomePage:!1,title:"Using Messenger Persona",description:"Messenger Persona Practical Guide",source:"@site/../docs/channel-messenger-persona.md",sourceDirName:".",slug:"/channel-messenger-persona",permalink:"/docs/next/channel-messenger-persona",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/../docs/channel-messenger-persona.md",tags:[],version:"current",lastUpdatedBy:"chentsulin",lastUpdatedAt:1585810019,formattedLastUpdatedAt:"4/2/2020",frontMatter:{id:"channel-messenger-persona",title:"Using Messenger Persona"},sidebar:"docs",previous:{title:"Messenger Handover Protocol",permalink:"/docs/next/channel-messenger-handover-protocol"},next:{title:"Messenger Multi-Page Support",permalink:"/docs/next/channel-messenger-multi-page"}},c=[{value:"Messenger Persona Practical Guide",id:"messenger-persona-practical-guide",children:[{value:"Persona: Who is behind the Business Page?",id:"persona-who-is-behind-the-business-page",children:[],level:3}],level:2},{value:"Basic Usage of the Persona API",id:"basic-usage-of-the-persona-api",children:[{value:"Create a Persona and Get Persona ID",id:"create-a-persona-and-get-persona-id",children:[{value:"Request",id:"request",children:[],level:4},{value:"Response",id:"response",children:[],level:4}],level:3},{value:"Sending Messages as a Persona",id:"sending-messages-as-a-persona",children:[],level:3},{value:"Using Sender Actions",id:"using-sender-actions",children:[],level:3}],level:2},{value:"Different Life Span of Personas",id:"different-life-span-of-personas",children:[{value:"Sharing Persona in Whole Context",id:"sharing-persona-in-whole-context",children:[],level:3},{value:"Creating Persona on the Fly",id:"creating-persona-on-the-fly",children:[],level:3}],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"messenger-persona-practical-guide"},"Messenger Persona Practical Guide"),(0,o.kt)("h3",{id:"persona-who-is-behind-the-business-page"},"Persona: Who is behind the Business Page?"),(0,o.kt)("p",null,"The most suitable scenario for ",(0,o.kt)("inlineCode",{parentName:"p"},"Persona")," is customer care."),(0,o.kt)("p",null,"Before introducing Messenger Bot, Facebook created a thriving ecosystem of Business Pages with useful CRM (Customer Relationship Management). That is, customers got used to message business and get replies from a human agent."),(0,o.kt)("p",null,"Today, the response from the Business Page could be a bot. To give the customer a clear understanding of whether a human agent or a bot representing the Business Page, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Persona")," API allows a business to introduce a virtual persona into the thread. A virtual persona shows a unique icon and sends messages with annotation of the name of the sender's persona and its belonged Page."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/662387/69112041-4e2d2e00-0aba-11ea-8e44-02aaaf804b5d.png",alt:"39993793_311437072745802_2909561891720265728_n"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you are interested in Facebook's official document, you may refer to ",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/messenger-platform/send-messages/personas/"},"Using Personas"))),(0,o.kt)("h2",{id:"basic-usage-of-the-persona-api"},"Basic Usage of the Persona API"),(0,o.kt)("p",null,"In the following section, you can see the beginning usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"Persona.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),"\nIf you prefer to understand ",(0,o.kt)("inlineCode",{parentName:"p"},"Persona")," by an example, please refer to the Bottender example, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/examples/messenger-persona"},"Messenger Persona"))),(0,o.kt)("h3",{id:"create-a-persona-and-get-persona-id"},"Create a Persona and Get Persona ID"),(0,o.kt)("p",null,"The basic idea behind creating a persona is sending a request to Page's ",(0,o.kt)("inlineCode",{parentName:"p"},"/persona")," endpoint. Hence, please remember to finish relevant Facebook Page Token settings in your ",(0,o.kt)("inlineCode",{parentName:"p"},"bottender.config.js"),"."),(0,o.kt)("p",null,"You can create a persona with the following commands. The property should include ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"profile picture URL")," for the persona."),(0,o.kt)("h4",{id:"request"},"Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'npx bottender messenger persona create --name="John Mathew" --pic="https://facebook.com/john_image.jpg"\n')),(0,o.kt)("h4",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Successfully create persona <PERSONA_ID>\n")),(0,o.kt)("p",null,"The response contains a Persona ID that can be used to send future messages. Please note that this ID is private, and it is unique to a Page."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you are not familiar with settings of ",(0,o.kt)("inlineCode",{parentName:"p"},"bottender.config.js"),", please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/channel-messenger-setup"},"Messenger Setup"))),(0,o.kt)("h3",{id:"sending-messages-as-a-persona"},"Sending Messages as a Persona"),(0,o.kt)("p",null,"Once you have defined the persona, you can invoke it at any time. Once invoked, a virtual persona shows with its icon and sends messages with annotation of the name of the persona and its belonged Page."),(0,o.kt)("p",null,"In the following code, you can see how to send a message as a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"Persona"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  await context.sendText('hi', { personaId: '<PERSONA_ID>' });\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you haven't created a persona, please refer to the above section ",(0,o.kt)("a",{parentName:"p",href:"#create-a-persona-and-get-persona-id"},"Create a Persona and Get Persona ID"))),(0,o.kt)("h3",{id:"using-sender-actions"},"Using Sender Actions"),(0,o.kt)("p",null,"When a ",(0,o.kt)("inlineCode",{parentName:"p"},"Persona")," begins processing a message, you might set the typing indicator with ",(0,o.kt)("inlineCode",{parentName:"p"},"Persona Id")," to show them that a response is in-progress from a ",(0,o.kt)("inlineCode",{parentName:"p"},"Persona"),". The example code is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  await context.sendSenderAction('typing_on');\n  await context.typingOn({ personaId: '<PERSONA_ID>' });\n  await context.typingOff({ personaId: '<PERSONA_ID>' });\n}\n")),(0,o.kt)("h2",{id:"different-life-span-of-personas"},"Different Life Span of Personas"),(0,o.kt)("p",null,"In the above section, we have introduced a long term and global ",(0,o.kt)("inlineCode",{parentName:"p"},"Persona"),". If you need a different life span persona, please refer to the following examples."),(0,o.kt)("h3",{id:"sharing-persona-in-whole-context"},"Sharing Persona in Whole Context"),(0,o.kt)("p",null,"In the code below, you can indicate whether ",(0,o.kt)("inlineCode",{parentName:"p"},"Persona")," responds to which context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  context.usePersona('<PERSONA_ID>');\n  await context.sendText('hi');\n}\n")),(0,o.kt)("h3",{id:"creating-persona-on-the-fly"},"Creating Persona on the Fly"),(0,o.kt)("p",null,"You can create a persona on the fly. When you don't want to sync your entire database of agents to the Messenger Platform in advance, creating a persona on the fly is handy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function App(context) {\n  const { id: personaId } = await context.client.createPersona({\n    name: 'John Mathew',\n    profilePictureUrl: 'https://facebook.com/john_image.jpg',\n  });\n\n  await context.sendText('hi', { personaId });\n\n  await context.client.deletePersona(personaId);\n}\n")))}u.isMDXComponent=!0}}]);
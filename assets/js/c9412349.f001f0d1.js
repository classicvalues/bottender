"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,u=d["".concat(s,".").concat(m)]||d[m]||k[m]||r;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90024:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>d});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],i={id:"channel-slack-block-kit",title:"Slack Block Kit",original_id:"channel-slack-block-kit"},s=void 0,c={unversionedId:"channel-slack-block-kit",id:"version-1.3.1/channel-slack-block-kit",isDocsHomePage:!1,title:"Slack Block Kit",description:"Rich interactive UI is a crucial factor for friendly user experience, especially when the majority of bot users are familiar with webs and apps.",source:"@site/versioned_docs/version-1.3.1/channel-slack-block-kit.md",sourceDirName:".",slug:"/channel-slack-block-kit",permalink:"/docs/1.3.1/channel-slack-block-kit",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.3.1/channel-slack-block-kit.md",tags:[],version:"1.3.1",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-slack-block-kit",title:"Slack Block Kit",original_id:"channel-slack-block-kit"},sidebar:"version-1.3.1/docs",previous:{title:"Handling Slack Slash Commands",permalink:"/docs/1.3.1/channel-slack-slash-command"},next:{title:"Telegram Setup",permalink:"/docs/1.3.1/channel-telegram-setup"}},p=[{value:"Sending Hello World Block Kit Message",id:"sending-hello-world-block-kit-message",children:[],level:2},{value:"An Advanced Block Kit Message Example",id:"an-advanced-block-kit-message-example",children:[],level:2},{value:"Interactivity in Blocks",id:"interactivity-in-blocks",children:[],level:2}],k={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{width:"600",src:"https://user-images.githubusercontent.com/662387/71472482-31e58500-280e-11ea-91c0-f05096bcede5.png"})),(0,r.kt)("p",null,(0,r.kt)("img",{width:"600",src:"https://user-images.githubusercontent.com/662387/71472483-31e58500-280e-11ea-838d-9dace3857956.png"})),(0,r.kt)("p",null,"Rich interactive UI is a crucial factor for friendly user experience, especially when the majority of bot users are familiar with webs and apps."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/block-kit"},"Block Kit")," is a UI framework for Slack apps that offers a balance of rich interactive and flexibility. Block kits can apply to messages and other ",(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/surfaces"},"surfaces"),", e.g., modals and home tab."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If you also write LINE Bots, you may sense some similarity between Slack Block Kit and ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.3.1/channel-line-flex"},"LINE Flex Messages"),".")),(0,r.kt)("h2",{id:"sending-hello-world-block-kit-message"},"Sending Hello World Block Kit Message"),(0,r.kt)("p",null,"Blocks are visual components that can be stacked and arranged to create app layouts. You may check Slack's official doc, ",(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/block-kit/building#getting_started"},"Building blocks"),", to understand the philosophy of building blocks. Visit ",(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/reference/block-kit/blocks"},"Reference: Layout blocks")," if you want to see all possible blocks."),(0,r.kt)("p",null,"In the following, you can see a simple example."),(0,r.kt)("p",null,(0,r.kt)("img",{width:"800",src:"https://user-images.githubusercontent.com/662387/71472395-d74c2900-280d-11ea-91bb-ea9f345cd21f.png"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = async function App(context) {\n  context.postMessage({\n    blocks: [\n      {\n        type: 'section',\n        fields: [\n          {\n            type: 'mrkdwn',\n            text: '*Hello,*',\n          },\n          {\n            type: 'mrkdwn',\n            text: '*World.*',\n          },\n        ],\n      },\n    ],\n  });\n};\n")),(0,r.kt)("h2",{id:"an-advanced-block-kit-message-example"},"An Advanced Block Kit Message Example"),(0,r.kt)("p",null,"When it comes to complicated blocks, we strongly recommend you to build and play with your block kits message in the ",(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/tools/block-kit-builder"},"Block Kit Builder"),". Then, copy the template into your project like the code below."),(0,r.kt)("p",null,"It demonstrates how to use the template from Block Kit Builder. Plus, we suggest you write a function to render the template with the model."),(0,r.kt)("p",null,(0,r.kt)("img",{width:"800",src:"https://user-images.githubusercontent.com/662387/71472409-e8953580-280d-11ea-9c0c-16470b1358be.png"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function blockTemplate1(user) {\n  return {\n    blocks: [\n      {\n        type: 'section',\n        text: {\n          type: 'mrkdwn',\n          text: `Hello ${user.name}, Assistant to the Regional Manager Dwight! *Michael Scott* wants to know where you'd like to take the Paper Company investors to dinner tonight.\\n\\n *Please select a restaurant:*`,\n        },\n      },\n      {\n        type: 'divider',\n      },\n      {\n        type: 'section',\n        text: {\n          type: 'mrkdwn',\n          text: '*Farmhouse Thai Cuisine*\\n:star::star::star::star: 1528 reviews\\n They do have some vegan options, like the roti and curry, plus they have a ton of salad stuff and noodles can be ordered without meat!! They have something for everyone here',\n        },\n        accessory: {\n          type: 'image',\n          imageUrl:\n            'https://s3-media3.fl.yelpcdn.com/bphoto/c7ed05m9lC2EmA3Aruue7A/o.jpg',\n          altText: 'alt text for image',\n        },\n      },\n      {\n        type: 'section',\n        text: {\n          type: 'mrkdwn',\n          text: '*Kin Khao*\\n:star::star::star::star: 1638 reviews\\n The sticky rice also goes wonderfully with the caramelized pork belly, which is absolutely melt-in-your-mouth and so soft.',\n        },\n        accessory: {\n          type: 'image',\n          imageUrl:\n            'https://s3-media2.fl.yelpcdn.com/bphoto/korel-1YjNtFtJlMTaC26A/o.jpg',\n          altText: 'alt text for image',\n        },\n      },\n      {\n        type: 'section',\n        text: {\n          type: 'mrkdwn',\n          text: '*Ler Ros*\\n:star::star::star::star: 2082 reviews\\n I would really recommend the Yum Koh Moo Yang - Spicy lime dressing and roasted quick marinated pork shoulder, basil leaves, chili & rice powder.',\n        },\n        accessory: {\n          type: 'image',\n          imageUrl:\n            'https://s3-media2.fl.yelpcdn.com/bphoto/DawwNigKJ2ckPeDeDM7jAg/o.jpg',\n          altText: 'alt text for image',\n        },\n      },\n      {\n        type: 'divider',\n      },\n      {\n        type: 'actions',\n        elements: [\n          {\n            type: 'button',\n            text: {\n              type: 'plain_text',\n              text: 'Farmhouse',\n              emoji: true,\n            },\n            value: 'click_me_123',\n          },\n          {\n            type: 'button',\n            text: {\n              type: 'plain_text',\n              text: 'Kin Khao',\n              emoji: true,\n            },\n            value: 'click_me_123',\n          },\n          {\n            type: 'button',\n            text: {\n              type: 'plain_text',\n              text: 'Ler Ros',\n              emoji: true,\n            },\n            value: 'click_me_123',\n          },\n        ],\n      },\n    ],\n  };\n}\n\nmodule.exports = async function App(context) {\n  const viewModel = {\n    name: 'Bottender',\n  };\n  context.postMessage(blockTemplate1(viewModel));\n};\n")),(0,r.kt)("h2",{id:"interactivity-in-blocks"},"Interactivity in Blocks"),(0,r.kt)("p",null,"Interactive blocks (e.g., buttons, drop-down menus, date pickers) are part of block kits. So you have to set up a webhook URL to receive payloads. Traverse to ",(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/apps"},"Slack Developer Console")," \u2192 \\${YourApp} \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"Interactive Components")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"Interactivity")," . And fill in your webhook URL."),(0,r.kt)("p",null,(0,r.kt)("img",{width:"800",src:"https://user-images.githubusercontent.com/662387/71472551-753ff380-280e-11ea-98ea-63c15b0e15bc.png"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"There are two kinds of webhook that need to handle on your Slack app configuration page. The first one is in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Event Subscriptions")," tab, and the second one is in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Interactive Components")," tab."),(0,r.kt)("li",{parentName:"ul"},"By default, the webhook URL you need to fill in ",(0,r.kt)("inlineCode",{parentName:"li"},"Interactive Components")," is like ",(0,r.kt)("inlineCode",{parentName:"li"},"https://example.com/webhooks/slack"),". And you can fill in the same webhook URL for ",(0,r.kt)("inlineCode",{parentName:"li"},"Event Subscriptions")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Interactive Components"),"."),(0,r.kt)("li",{parentName:"ul"},"If you are not familiar with ",(0,r.kt)("inlineCode",{parentName:"li"},"Event Subscriptions"),", you may refer to another Bottender doc, ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.3.1/channel-slack-setup"},"Slack Setup"),". You must complete the settings of ",(0,r.kt)("inlineCode",{parentName:"li"},"Event Subscriptions")," to make your bot work."))))}d.isMDXComponent=!0}}]);
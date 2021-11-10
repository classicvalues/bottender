"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48958],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),o=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=o(e.components);return a.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=o(t),m=i,d=p["".concat(c,".").concat(m)]||p[m]||h[m]||r;return t?a.createElement(d,u(u({ref:n},s),{},{components:t})):a.createElement(d,u({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,u=new Array(r);u[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,u[1]=l;for(var o=2;o<r;o++)u[o]=t[o];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},24301:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>o,toc:()=>s,default:()=>p});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),u=["components"],l={id:"channel-line-rich-menu",title:"LINE Rich Menu",original_id:"channel-line-rich-menu"},c=void 0,o={unversionedId:"channel-line-rich-menu",id:"version-1.3.1/channel-line-rich-menu",isDocsHomePage:!1,title:"LINE Rich Menu",description:"What is Rich Menu",source:"@site/versioned_docs/version-1.3.1/channel-line-rich-menu.md",sourceDirName:".",slug:"/channel-line-rich-menu",permalink:"/docs/1.3.1/channel-line-rich-menu",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.3.1/channel-line-rich-menu.md",tags:[],version:"1.3.1",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"channel-line-rich-menu",title:"LINE Rich Menu",original_id:"channel-line-rich-menu"},sidebar:"version-1.3.1/docs",previous:{title:"Flex Messages",permalink:"/docs/1.3.1/channel-line-flex"},next:{title:"LINE Front-end Framework (LIFF)",permalink:"/docs/1.3.1/channel-line-liff"}},s=[{value:"What is Rich Menu",id:"what-is-rich-menu",children:[],level:2},{value:"Prepare a Rich Menu Image",id:"prepare-a-rich-menu-image",children:[],level:2},{value:"Create a Rich Menu",id:"create-a-rich-menu",children:[],level:2},{value:"Upload the Rich Menu Image",id:"upload-the-rich-menu-image",children:[],level:2},{value:"Link the Rich Menu to Users",id:"link-the-rich-menu-to-users",children:[{value:"Set the Default Rich Menu",id:"set-the-default-rich-menu",children:[],level:3},{value:"Link a Rich Menu to an Individual User",id:"link-a-rich-menu-to-an-individual-user",children:[],level:3}],level:2},{value:"Set Up Submenu",id:"set-up-submenu",children:[{value:"Prepare Rich Menu Images",id:"prepare-rich-menu-images",children:[],level:3},{value:"Create and Upload Rich Menu",id:"create-and-upload-rich-menu",children:[],level:3},{value:"Switch Between the Main Menu and Submenus",id:"switch-between-the-main-menu-and-submenus",children:[],level:3}],level:2}],h={toc:s};function p(e){var n=e.components,t=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-rich-menu"},"What is Rich Menu"),(0,r.kt)("p",null,"Rich menu is a customizable menu that is displayed on the chat screen to help users interact with your LINE official account. For further information, you can check out the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.line.biz/en/docs/messaging-api/using-rich-menus"},"Official Document"),"."),(0,r.kt)("p",null,"There are four steps to set up a rich menu for your users:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prepare a rich menu image"),(0,r.kt)("li",{parentName:"ol"},"Create a rich menu"),(0,r.kt)("li",{parentName:"ol"},"Upload the rich menu image"),(0,r.kt)("li",{parentName:"ol"},"Link the rich menu to users")),(0,r.kt)("h2",{id:"prepare-a-rich-menu-image"},"Prepare a Rich Menu Image"),(0,r.kt)("p",null,"A rich menu image is an image file. You can define up to 20 different tappable areas in the image. Here's an example rich menu image:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/SVQcKTE.jpg",alt:"Rich menu example"})),(0,r.kt)("p",null,"In this image, there're six simple buttons. We will define the tappable areas of these buttons in the next step."),(0,r.kt)("p",null,"Also, remember your rich menu image must follow these requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Image format: JPEG or PNG"),(0,r.kt)("li",{parentName:"ul"},"Image size (pixels): 2500x1686, 2500x843, 1200x810, 1200x405, 800x540, 800x270"),(0,r.kt)("li",{parentName:"ul"},"Maximum file size: 1 MB")),(0,r.kt)("h2",{id:"create-a-rich-menu"},"Create a Rich Menu"),(0,r.kt)("p",null,"Before you create a rich menu, you have to create a ",(0,r.kt)("a",{parentName:"p",href:"https://developers.line.biz/en/reference/messaging-api/#rich-menu-object"},"rich menu object")," which defines the menu's size, tappable areas, etc."),(0,r.kt)("p",null,"Next, you can create a rich menu by sending an HTTP POST request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.line.me/v2/bot/richmenu")," endpoint. You have to put your rich menu object in the body and your channel access token in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header."),(0,r.kt)("p",null,"Here's an example request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -v -X POST https://api.line.me/v2/bot/richmenu \\\n  -H \'Authorization: Bearer {channel access token}\' \\\n  -H \'Content-Type:application/json\' \\\n  -d \\\n  \'{\n    "size":{\n        "width":2500,\n        "height":1686\n    },\n    "selected":false,\n    "name":"Controller",\n    "chatBarText":"Controller",\n    "areas":[\n        {\n          "bounds":{\n              "x":551,\n              "y":325,\n              "width":321,\n              "height":321\n          },\n          "action":{\n              "type":"message",\n              "text":"up"\n          }\n        },\n        {\n          "bounds":{\n              "x":876,\n              "y":651,\n              "width":321,\n              "height":321\n          },\n          "action":{\n              "type":"message",\n              "text":"right"\n          }\n        },\n        {\n          "bounds":{\n              "x":551,\n              "y":972,\n              "width":321,\n              "height":321\n          },\n          "action":{\n              "type":"message",\n              "text":"down"\n          }\n        },\n        {\n          "bounds":{\n              "x":225,\n              "y":651,\n              "width":321,\n              "height":321\n          },\n          "action":{\n              "type":"message",\n              "text":"left"\n          }\n        },\n        {\n          "bounds":{\n              "x":1433,\n              "y":657,\n              "width":367,\n              "height":367\n          },\n          "action":{\n              "type":"message",\n              "text":"btn b"\n          }\n        },\n        {\n          "bounds":{\n              "x":1907,\n              "y":657,\n              "width":367,\n              "height":367\n          },\n          "action":{\n              "type":"message",\n              "text":"btn a"\n          }\n        }\n    ]\n  }\'\n')),(0,r.kt)("p",null,"If you successfully create a rich menu, you get a response with a rich menu ID."),(0,r.kt)("h2",{id:"upload-the-rich-menu-image"},"Upload the Rich Menu Image"),(0,r.kt)("p",null,"Next, you can upload the rich menu image you prepared in the first step. Again, you upload the image by sending an HTTP POST request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content")," endpoint. Specify the rich menu ID you just got in the ",(0,r.kt)("inlineCode",{parentName:"p"},"richMenuId")," path parameter."),(0,r.kt)("p",null,"Here's an example request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -v -X POST https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content \\\n-H "Authorization: Bearer {channel access token}" \\\n-H "Content-Type: image/jpeg" \\\n-T rich_menu.jpg\n')),(0,r.kt)("h2",{id:"link-the-rich-menu-to-users"},"Link the Rich Menu to Users"),(0,r.kt)("p",null,"In the above three steps, you have finished all the set up for a rich menu. Now, you can link the menu to the users. You can either set a rich menu as the default rich menu for all the users or link a rich menu to an individual user."),(0,r.kt)("h3",{id:"set-the-default-rich-menu"},"Set the Default Rich Menu"),(0,r.kt)("p",null,"To set the default rich menu, you can send an HTTP POST request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.line.me/v2/bot/user/all/richmenu/{richMenuId}")," endpoint."),(0,r.kt)("p",null,"Here's an example request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/{richMenuId} \\\n-H "Authorization: Bearer {channel access token}"\n')),(0,r.kt)("h3",{id:"link-a-rich-menu-to-an-individual-user"},"Link a Rich Menu to an Individual User"),(0,r.kt)("p",null,"To link a rich menu to an individual user, you can do it using Bottender when handling a user's event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await context.linkRichMenu('rich-menu-id');\n")),(0,r.kt)("p",null,"And to unlink a rich menu from a user, you can use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await context.unlinkRichMenu();\n")),(0,r.kt)("p",null,"Still, you can link and unlink a rich menu by sending an HTTP POST request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.line.me/v2/bot/user/{userId}/richmenu/{richMenuId}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.line.me/v2/bot/richmenu/bulk/unlink")," endpoints."),(0,r.kt)("p",null,"Here're example requests:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"link")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -v -X POST https://api.line.me/v2/bot/user/{userId}/richmenu/{richMenuId} \\\n-H "Authorization: Bearer {channel access token}"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"unlink")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -v -X POST https://api.line.me/v2/bot/richmenu/bulk/unlink \\\n-H "Authorization: Bearer {channel access token}" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "userIds":["{userId1}","{userId2}"]\n}\'\n')),(0,r.kt)("p",null,"After you linked a rich menu to a user, you can get the rich menu ID later using Bottender:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function App(context) {\n  const richMenu = await context.getLinkedRichMenu();\n  console.log(richMenu);\n  // {\n  //   richMenuId: "rich-menu-id"\n  // }\n}\n')),(0,r.kt)("p",null,"You can check out the full example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/examples/line-rich-menu"},"Here"),"."),(0,r.kt)("h2",{id:"set-up-submenu"},"Set Up Submenu"),(0,r.kt)("p",null,"In addition to using only one image as our rich menu, we can use multiple images to create a rich menu with several submenus. We can implement this by creating multiple rich menu objects and link them to the user dynamically with Bottender. Here, we have an example that defines two submenus under a main rich menu."),(0,r.kt)("h3",{id:"prepare-rich-menu-images"},"Prepare Rich Menu Images"),(0,r.kt)("p",null,"Here are the three rich menu images we use to create a rich menu with two submenus. The logic is pretty simple: when we click the option on the main menu, we will get to the corresponding submenu. And when we click the back option on the submenu, we will go back to the main menu."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Main Menu"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32091985/70420536-ebb8c380-1aa2-11ea-9ad5-48c2c9599f84.jpg",alt:"main menu"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Submenu A"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32091985/70420537-ec515a00-1aa2-11ea-9d40-ddb1bff0cd53.jpg",alt:"submenu A"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Submenu B"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32091985/70420538-ec515a00-1aa2-11ea-89e8-6570c25a464e.jpg",alt:"submenu B"})),(0,r.kt)("h3",{id:"create-and-upload-rich-menu"},"Create and Upload Rich Menu"),(0,r.kt)("p",null,"Next, we have to create three rich menu objects using the images we have above."),(0,r.kt)("p",null,"Here are the example requests for creating the main menu and its submenus:"),(0,r.kt)("p",null,"Main Menu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl --request POST \\\n  --url https://api.line.me/v2/bot/richmenu \\\n  --header \'authorization: Bearer {channel access token}\' \\\n  --header \'content-type: application/json\' \\\n  --data \'{\n    "size":{\n        "width":2500,\n        "height":1686\n    },\n    "selected":false,\n    "name":"Controller",\n    "chatBarText":"Controller",\n    "areas":[\n        {\n          "bounds":{\n              "x":0,\n              "y":0,\n              "width":1250,\n              "height":1686\n          },\n          "action":{\n              "type":"message",\n              "text":"A"\n          }\n        },\n                {\n          "bounds":{\n              "x":1250,\n              "y":0,\n              "width":1250,\n              "height":1686\n          },\n          "action":{\n              "type":"message",\n              "text":"B"\n          }\n        }\n\n    ]\n  }\'\n')),(0,r.kt)("p",null,"Submenu A:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl --request POST \\\n  --url https://api.line.me/v2/bot/richmenu \\\n  --header \'authorization: Bearer {channel access token}\' \\\n  --header \'content-type: application/json\' \\\n  --data \'{\n    "size":{\n        "width":2500,\n        "height":1686\n    },\n    "selected":false,\n    "name":"Controller",\n    "chatBarText":"Controller",\n    "areas":[\n        {\n          "bounds":{\n              "x":0,\n              "y":0,\n              "width":2500,\n              "height":843\n          },\n          "action":{\n              "type":"message",\n              "text":"Back"\n          }\n        },\n                {\n          "bounds":{\n              "x":0,\n              "y":843,\n              "width":1250,\n              "height":843\n          },\n          "action":{\n              "type":"message",\n              "text":"A1"\n          }\n        },\n                {\n          "bounds":{\n              "x":1250,\n              "y":843,\n              "width":1250,\n              "height":843\n          },\n          "action":{\n              "type":"message",\n              "text":"A2"\n          }\n        }\n\n    ]\n  }\'\n')),(0,r.kt)("p",null,"Submenu B:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl --request POST \\\n  --url https://api.line.me/v2/bot/richmenu \\\n  --header \'authorization: Bearer {channel access token}\' \\\n  --header \'content-type: application/json\' \\\n  --data \'{\n    "size":{\n        "width":2500,\n        "height":1686\n    },\n    "selected":false,\n    "name":"Controller",\n    "chatBarText":"Controller",\n    "areas":[\n        {\n          "bounds":{\n              "x":0,\n              "y":0,\n              "width":2500,\n              "height":843\n          },\n          "action":{\n              "type":"message",\n              "text":"Back"\n          }\n        },\n                {\n          "bounds":{\n              "x":0,\n              "y":843,\n              "width":1250,\n              "height":843\n          },\n          "action":{\n              "type":"message",\n              "text":"B1"\n          }\n        },\n                {\n          "bounds":{\n              "x":1250,\n              "y":843,\n              "width":1250,\n              "height":843\n          },\n          "action":{\n              "type":"message",\n              "text":"B2"\n          }\n        }\n\n    ]\n  }\'\n')),(0,r.kt)("p",null,"If you successfully create these rich menu objects, you will get three rich menu IDs in their responses. Then we can upload the rich menu images according to these IDs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -v -X POST https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content \\\n-H "Authorization: Bearer {channel access token}" \\\n-H "Content-Type: image/jpeg" \\\n-T rich_menu_image.jpg\n')),(0,r.kt)("h3",{id:"switch-between-the-main-menu-and-submenus"},"Switch Between the Main Menu and Submenus"),(0,r.kt)("p",null,"Now we set up three rich menus and get their rich menu ID. We first put each menu ID into the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file in our Bottender project."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".env")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"LINE_ACCESS_TOKEN=\nLINE_CHANNEL_SECRET=\nMAIN_RICH_MENU_ID=\nSUB_RICH_MENU_A_ID=\nSUB_RICH_MENU_B_ID=\n")),(0,r.kt)("p",null,"Next, we can check which button on our rich has been clicked by the user and switch between the main rich menu and its submenu using ",(0,r.kt)("inlineCode",{parentName:"p"},"context.linkRichMenu(RICH_MENU_ID)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = async function App(context) {\n  if (context.event.text === 'A') {\n    await context.linkRichMenu(process.env.SUB_RICH_MENU_A_ID);\n  } else if (context.event.text === 'B') {\n    await context.linkRichMenu(process.env.SUB_RICH_MENU_B_ID);\n  } else if (context.event.text === 'Back') {\n    await context.linkRichMenu(process.env.MAIN_RICH_MENU_ID);\n  } else {\n    await context.sendText(`User have clicked ${context.event.text}`);\n  }\n};\n")),(0,r.kt)("p",null,"By doing so, we successfully create a rich menu with multiple submenus. You can set up a more complicated submenu using the same method."),(0,r.kt)("p",null,"For the full submenu example, checked out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/examples/line-rich-menu-submenu"},"LINE Rich Menu Submenu Example"),"."))}p.isMDXComponent=!0}}]);
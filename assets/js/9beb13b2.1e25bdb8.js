"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13418],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},29095:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>d,toc:()=>p,default:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={id:"advanced-guides-custom-server",title:"Running Bottender with Custom Servers",original_id:"advanced-guides-custom-server"},l=void 0,d={unversionedId:"advanced-guides-custom-server",id:"version-1.4/advanced-guides-custom-server",isDocsHomePage:!1,title:"Running Bottender with Custom Servers",description:"The Concept",source:"@site/versioned_docs/version-1.4/advanced-guides-custom-server.md",sourceDirName:".",slug:"/advanced-guides-custom-server",permalink:"/docs/1.4/advanced-guides-custom-server",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.4/advanced-guides-custom-server.md",tags:[],version:"1.4",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"advanced-guides-custom-server",title:"Running Bottender with Custom Servers",original_id:"advanced-guides-custom-server"},sidebar:"version-1.4/docs",previous:{title:"Error Handling",permalink:"/docs/1.4/the-basics-errors"},next:{title:"Deployment",permalink:"/docs/1.4/advanced-guides-deployment"}},p=[{value:"The Concept",id:"the-concept",children:[],level:2},{value:"Express",id:"express",children:[{value:"Creating a New Project with Custom Express Server",id:"creating-a-new-project-with-custom-express-server",children:[],level:3},{value:"Migrating an Existing Project to Custom Express Server",id:"migrating-an-existing-project-to-custom-express-server",children:[],level:3}],level:2},{value:"Koa",id:"koa",children:[{value:"Creating a New Project with Custom Koa Server",id:"creating-a-new-project-with-custom-koa-server",children:[],level:3},{value:"Migrating an Existing Project to Custom Koa Server",id:"migrating-an-existing-project-to-custom-koa-server",children:[],level:3}],level:2},{value:"Restify",id:"restify",children:[{value:"Creating a New Project with Custom Restify Server",id:"creating-a-new-project-with-custom-restify-server",children:[],level:3},{value:"Migrating an Existing Project to Custom Restify Server",id:"migrating-an-existing-project-to-custom-restify-server",children:[],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-concept"},"The Concept"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bottender dev")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bottender start")," are the default npm scripts generated by ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4/#create-a-new-bottender-app"},"create-bottender-app"),"."),(0,a.kt)("p",null,"Thus, You can find those lines in your generated ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  "scripts": {\n    "dev": "bottender dev",\n    "start": "bottender start",\n')),(0,a.kt)("p",null,"When executing one of ",(0,a.kt)("inlineCode",{parentName:"p"},"bottender dev")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"bottender start")," command, under the hood, it sets up a default express server for Bottender and load ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," from the project root directory as the root action of the chatbot."),(0,a.kt)("p",null,"To run Bottender with the custom HTTP server, you need to prepare an HTTP server, delegate the webhook routes to Bottender, and modify the setting of ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("h2",{id:"express"},"Express"),(0,a.kt)("h3",{id:"creating-a-new-project-with-custom-express-server"},"Creating a New Project with Custom Express Server"),(0,a.kt)("p",null,"If you want to have a clean project with the custom express, you could start from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/examples/custom-server-express"},"this example")," to develop your project. There are four steps you could follow to create your project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the code from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Yoctol/bottender/tree/master/examples/custom-server-express"},"this example"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," command to install all dependencies."),(0,a.kt)("li",{parentName:"ol"},"Fill the ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file with correct value."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn dev")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run dev")," to start the dev server.")),(0,a.kt)("p",null,"If you want to have the folder structure we recommend, you could start with ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4/#create-a-new-bottender-app"},"create-bottender-app")," command and migrate it to the custom express server by following the migration instructions below."),(0,a.kt)("h3",{id:"migrating-an-existing-project-to-custom-express-server"},"Migrating an Existing Project to Custom Express Server"),(0,a.kt)("p",null,"Suppose that you already have a project built from ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4/#create-a-new-bottender-app"},"create-bottender-app"),", and you want to develop some additional APIs using express server. In this case, you need to write a custom express server and delegate all chatbot's webhook requests to the Bottender app."),(0,a.kt)("p",null,"To achieve that, you could follow the instructions, as shown below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn add express body-parser nodemon")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install express body-parser nodemon")," command to install dependencies we need."),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"server.js")," file in the root directory of the project and copy the following code into it.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const bodyParser = require('body-parser');\nconst express = require('express');\nconst { bottender } = require('bottender');\n\nconst app = bottender({\n  dev: process.env.NODE_ENV !== 'production',\n});\n\nconst port = Number(process.env.PORT) || 5000;\n\n// the request handler of the bottender app\nconst handle = app.getRequestHandler();\n\napp.prepare().then(() => {\n  const server = express();\n\n  const verify = (req, _, buf) => {\n    req.rawBody = buf.toString();\n  };\n  server.use(bodyParser.json({ verify }));\n  server.use(bodyParser.urlencoded({ extended: false, verify }));\n\n  // your custom route\n  server.get('/api', (req, res) => {\n    res.json({ ok: true });\n  });\n\n  // route for webhook request\n  server.all('*', (req, res) => {\n    return handle(req, res);\n  });\n\n  server.listen(port, (err) => {\n    if (err) throw err;\n    console.log(`> Ready on http://localhost:${port}`);\n  });\n});\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Modify ",(0,a.kt)("inlineCode",{parentName:"li"},"scripts")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"nodemon server.js")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"node server.js")," instead:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  "scripts": {\n    "dev": "nodemon server.js",\n    "start": "node server.js",\n')),(0,a.kt)("p",null,"That's all you need to do, and you can have you bot hosting on the custom express server!"),(0,a.kt)("h2",{id:"koa"},"Koa"),(0,a.kt)("h3",{id:"creating-a-new-project-with-custom-koa-server"},"Creating a New Project with Custom Koa Server"),(0,a.kt)("p",null,"If you want to have a clean project with the custom koa, you could start from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/examples/custom-server-koa"},"this example")," to develop your project. There are four steps you could follow to create your project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the code from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Yoctol/bottender/tree/master/examples/custom-server-koa"},"this example"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn install")," command to install dependencies."),(0,a.kt)("li",{parentName:"ol"},"Fill the ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file with correct value."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn dev")," to start server.")),(0,a.kt)("p",null,"If you want to have the folder structure we recommend, you could start with ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4/#create-a-new-bottender-app"},"create-bottender-app")," command and migrate it to the custom koa server by following the migration instructions below."),(0,a.kt)("h3",{id:"migrating-an-existing-project-to-custom-koa-server"},"Migrating an Existing Project to Custom Koa Server"),(0,a.kt)("p",null,"Suppose that you already have a project built from ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4/#create-a-new-bottender-app"},"create-bottender-app"),", and you want to develop some additional APIs using koa server. In this case, you need to write a custom koa server and delegate all chatbot's webhook requests to the Bottender app."),(0,a.kt)("p",null,"To achieve that, you could follow the instructions, as shown below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn add koa koa-router koa-bodyparser nodemon")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install koa koa-router koa-bodyparser nodemon")," command to install dependencies we need."),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"server.js")," file in the root directory of the project and copy the following code into it.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Koa = require('koa');\nconst Router = require('koa-router');\nconst bodyParser = require('koa-bodyparser');\nconst { bottender } = require('bottender');\n\nconst app = bottender({\n  dev: process.env.NODE_ENV !== 'production',\n});\n\nconst port = Number(process.env.PORT) || 5000;\n\nconst handle = app.getRequestHandler();\n\napp.prepare().then(() => {\n  const server = new Koa();\n\n  server.use(bodyParser());\n  server.use((ctx, next) => {\n    ctx.req.body = ctx.request.body;\n    ctx.req.rawBody = ctx.request.rawBody;\n    return next();\n  });\n\n  const router = new Router();\n\n  router.get('/api', (ctx) => {\n    ctx.response.body = { ok: true };\n  });\n\n  router.all('*', async (ctx) => {\n    await handle(ctx.req, ctx.res);\n    ctx.respond = false;\n  });\n\n  server.use(router.routes());\n\n  server.listen(port, (err) => {\n    if (err) throw err;\n    console.log(`> Ready on http://localhost:${port}`);\n  });\n});\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Modify ",(0,a.kt)("inlineCode",{parentName:"li"},"scripts")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"nodemon server.js")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"node server.js")," instead:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  "scripts": {\n    "dev": "nodemon server.js",\n    "start": "node server.js",\n')),(0,a.kt)("p",null,"That's all you need to do, and you can have you bot hosting on the custom koa server!"),(0,a.kt)("h2",{id:"restify"},"Restify"),(0,a.kt)("h3",{id:"creating-a-new-project-with-custom-restify-server"},"Creating a New Project with Custom Restify Server"),(0,a.kt)("p",null,"If you want to have a clean project with the custom restify, you could start from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/examples/custom-server-restify"},"this example")," to develop your project. There are four steps you could follow to create your project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the code from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Yoctol/bottender/tree/master/examples/custom-server-restify"},"this example"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn install")," command to install dependencies."),(0,a.kt)("li",{parentName:"ol"},"Fill the ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file with correct value."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn dev")," to start server.")),(0,a.kt)("p",null,"If you want to have the folder structure we recommend, you could start with ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4/#create-a-new-bottender-app"},"create-bottender-app")," command and migrate it to the custom restify server by following the migration instructions below."),(0,a.kt)("h3",{id:"migrating-an-existing-project-to-custom-restify-server"},"Migrating an Existing Project to Custom Restify Server"),(0,a.kt)("p",null,"Suppose that you already have a project built from ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4/#create-a-new-bottender-app"},"create-bottender-app"),", and you want to develop some additional APIs using restify server. In this case, you need to write a custom restify server and delegate all chatbot's webhook requests to the Bottender app."),(0,a.kt)("p",null,"To achieve that, you could follow the instructions, as shown below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn add restify nodemon")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install restify nodemon")," command to install dependencies we need."),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"server.js")," file in the root directory of the project and copy the following code into it.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const restify = require('restify');\nconst { bottender } = require('bottender');\n\nconst app = bottender({\n  dev: process.env.NODE_ENV !== 'production',\n});\n\nconst port = Number(process.env.PORT) || 5000;\n\nconst handle = app.getRequestHandler();\n\napp.prepare().then(() => {\n  const server = restify.createServer();\n\n  server.use(restify.plugins.queryParser());\n  server.use(restify.plugins.bodyParser());\n\n  server.get('/api', (req, res) => {\n    res.send({ ok: true });\n  });\n\n  server.get('*', (req, res) => {\n    return handle(req, res);\n  });\n  server.post('*', (req, res) => {\n    return handle(req, res);\n  });\n\n  server.listen(port, (err) => {\n    if (err) throw err;\n    console.log(`> Ready on http://localhost:${port}`);\n  });\n});\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Modify ",(0,a.kt)("inlineCode",{parentName:"li"},"scripts")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"nodemon server.js")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"node server.js")," instead:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  "scripts": {\n    "dev": "nodemon server.js",\n    "start": "node server.js",\n')),(0,a.kt)("p",null,"That's all you need to do, and you can have you bot hosting on the custom restify server!"))}u.isMDXComponent=!0}}]);
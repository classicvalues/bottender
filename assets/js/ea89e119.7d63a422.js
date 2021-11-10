"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90006:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={id:"getting-started",title:"Getting Started",original_id:"getting-started",slug:"/"},l=void 0,s={unversionedId:"getting-started",id:"version-1.2.0/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Create a New Bottender App",source:"@site/versioned_docs/version-1.2.0/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/1.2.0/",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.2.0/getting-started.md",tags:[],version:"1.2.0",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"getting-started",title:"Getting Started",original_id:"getting-started",slug:"/"},sidebar:"version-1.2.0/docs",next:{title:"Migrating from v0.x to v1.x",permalink:"/docs/1.2.0/migrating-v1"}},c=[{value:"Create a New Bottender App",id:"create-a-new-bottender-app",children:[],level:2},{value:"Teach Your Bot to Echo",id:"teach-your-bot-to-echo",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-a-new-bottender-app"},"Create a New Bottender App"),(0,a.kt)("p",null,"Create Bottender App is the best way to start building a new application in Bottender."),(0,a.kt)("p",null,"It initializes your development environment for the latest Bottender features, provides a great experience for multiple channels development, and optimizes your app for production deployment. To create a project, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-bottender-app my-app\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," comes with npm 5.2+ and higher, see ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"},"npx command introduction"),".")),(0,a.kt)("p",null,"After your go through the interactive creation, you will see a directory named my-app containing a fresh Bottender project with every Bottender\u2019s dependency installed:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3382565/67745483-5667ef80-fa5f-11e9-8bae-39489b8544e7.png",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3382565/67745485-57008600-fa5f-11e9-8fed-8d97d600a760.png",alt:null})),(0,a.kt)("p",null,"Running the bot in ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.2.0/the-basics-console-mode"},'"Console Mode"')," is the easiest way. To do this, pass ",(0,a.kt)("inlineCode",{parentName:"p"},"--console")," option to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd my-app\nnpm run dev -- --console\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3382565/67745487-57991c80-fa5f-11e9-8eb7-9e4144df9e73.png",alt:null})),(0,a.kt)("p",null,'As you can see, we just got a bot that always replies "Welcome to Bottender" in the console.'),(0,a.kt)("h2",{id:"teach-your-bot-to-echo"},"Teach Your Bot to Echo"),(0,a.kt)("p",null,'What we did in the previous section is just a "Hello World" example. Let\'s see how it works and try to make some changes to it.'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"src/index.js")," is the entry point of the app created by Create Bottender App. There are only few lines of code in this file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = async function App(context) {\n  await context.sendText('Welcome to Bottender');\n};\n")),(0,a.kt)("p",null,'It\'s very intuitive that it always replies "Welcome to Bottender" whenever it is called.'),(0,a.kt)("p",null,"The next step is teaching your bot to send back what it receives, so let's open the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.js")," file on the editor and apply following changes to the code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"module.exports = async function App(context) {\n- await context.sendText('Welcome to Bottender');\n+ if (context.event.isText) {\n+   await context.sendText(context.event.text);\n+ }\n});\n")),(0,a.kt)("p",null,"And the application will be restarted automatically."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3382565/67745488-57991c80-fa5f-11e9-91d2-659b65df2c58.png",alt:null})),(0,a.kt)("p",null,"That's it!"),(0,a.kt)("p",null,"You can learn more about Create Bottender App ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/packages/create-bottender-app/README.md"},"from its README"),"."))}u.isMDXComponent=!0}}]);
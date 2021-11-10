"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18653:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>c});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"advanced-guides-nlu",title:"Natural Language Understanding",original_id:"advanced-guides-nlu"},s=void 0,p={unversionedId:"advanced-guides-nlu",id:"version-1.3.0/advanced-guides-nlu",isDocsHomePage:!1,title:"Natural Language Understanding",description:"Leverage NLU Technologies",source:"@site/versioned_docs/version-1.3.0/advanced-guides-nlu.md",sourceDirName:".",slug:"/advanced-guides-nlu",permalink:"/docs/1.3.0/advanced-guides-nlu",editUrl:"https://github.com/Yoctol/bottender/edit/master/docs/versioned_docs/version-1.3.0/advanced-guides-nlu.md",tags:[],version:"1.3.0",lastUpdatedBy:"\u5433\u6771\u66c4 Wu, Dung-Ie",lastUpdatedAt:1636542901,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"advanced-guides-nlu",title:"Natural Language Understanding",original_id:"advanced-guides-nlu"},sidebar:"version-1.3.0/docs",previous:{title:"Deployment",permalink:"/docs/1.3.0/advanced-guides-deployment"},next:{title:"Multi-Channel Support",permalink:"/docs/1.3.0/advanced-guides-multi-channel"}},d=[{value:"Leverage NLU Technologies",id:"leverage-nlu-technologies",children:[],level:2},{value:"Building with QnA Maker",id:"building-with-qna-maker",children:[{value:"Step 1: QnA Maker Setup",id:"step-1-qna-maker-setup",children:[],level:3},{value:"Step 2: Connect Bottender with QnA Maker by <code>bottender/qna-maker</code>",id:"step-2-connect-bottender-with-qna-maker-by-bottenderqna-maker",children:[],level:3}],level:2},{value:"Building with Dialogflow",id:"building-with-dialogflow",children:[{value:"Step 1: Dialogflow Setup",id:"step-1-dialogflow-setup",children:[],level:3},{value:"Step 2: Create a Dialogflow Agent",id:"step-2-create-a-dialogflow-agent",children:[],level:3},{value:"Step 3: Connect Bottender with Dialogflow by <code>bottender/dialogflow</code>",id:"step-3-connect-bottender-with-dialogflow-by-bottenderdialogflow",children:[],level:3}],level:2},{value:"Building with LUIS",id:"building-with-luis",children:[{value:"Step 1: LUIS Setup",id:"step-1-luis-setup",children:[],level:3},{value:"Step 2: Train and Publish Your LUIS Project",id:"step-2-train-and-publish-your-luis-project",children:[],level:3},{value:"Step 3: Connect Bottender with LUIS by <code>bottender/luis</code>",id:"step-3-connect-bottender-with-luis-by-bottenderluis",children:[],level:3}],level:2},{value:"Building with Rasa NLU",id:"building-with-rasa-nlu",children:[{value:"Step 1: Rasa NLU Setup",id:"step-1-rasa-nlu-setup",children:[],level:3},{value:"Step 2: Connect Bottender with Rasa by <code>bottender/rasa</code>",id:"step-2-connect-bottender-with-rasa-by-bottenderrasa",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"leverage-nlu-technologies"},"Leverage NLU Technologies"),(0,i.kt)("p",null,"When it comes to building a bot for open questions, e.g., FAQ of customer support, or an in-bot search engine, you may think of making a bot with the NLU engine to analyze the user's input. The primary mission of NLU is to analyze the user's intent and entities to respond with the right answer."),(0,i.kt)("p",null,"A well-trained NLU engine usually has a 90%+ accurate rate in terms of telling the right intent or find the user input is beyond the current knowledge base. Sometimes, it takes time and a few iterations to find the best intent structure and train the NLU engine smart."),(0,i.kt)("p",null,"In the following sections, you can see how to integrate Bottender with various modern NLU services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.3.0/advanced-guides-nlu#building-with-qna-maker"},"QnA Maker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.3.0/advanced-guides-nlu#building-with-dialogflow"},"Dialogflow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.3.0/advanced-guides-nlu#building-with-luis"},"LUIS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.3.0/advanced-guides-nlu#building-with-rasa-nlu"},"Rasa"))),(0,i.kt)("h2",{id:"building-with-qna-maker"},"Building with QnA Maker"),(0,i.kt)("p",null,"The reason that we choose QnA Maker in the first place is because of the friendly building process. Unlike other NLU service requires a certain amount of time to build the intent and write the training phrases. In QnA Maker, you just need to copy & paster your FAQ, and the NLU engine is ready to use."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/bottenderjs"},"Tweet us")," if you would like to share your QnA Maker engine performance with us :)")),(0,i.kt)("h3",{id:"step-1-qna-maker-setup"},"Step 1: QnA Maker Setup"),(0,i.kt)("p",null,"To build a bot integrated with ",(0,i.kt)("a",{parentName:"p",href:"https://www.qnamaker.ai/"},"QnA Maker"),", you have to create the QnA Maker knowledge base and publish it following the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cognitive-services/qnamaker/quickstarts/create-publish-knowledge-base"},"Official Guide"),"."),(0,i.kt)("p",null,"After you publish your knowledge base, you will get ",(0,i.kt)("inlineCode",{parentName:"p"},"RESOURCE_NAME"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"KNOWLEDGE_BASE_ID"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ENDPOINT_KEY")," (See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cognitive-services/qnamaker/quickstarts/get-answer-from-knowledge-base-using-url-tool?pivots=url-test-tool-postman"},"Here")," for detailed guide). Make sure you copy them into the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# .env\n\nRESOURCE_NAME=\nKNOWLEDGE_BASE_ID=\nENDPOINT_KEY=\n")),(0,i.kt)("h3",{id:"step-2-connect-bottender-with-qna-maker-by-bottenderqna-maker"},"Step 2: Connect Bottender with QnA Maker by ",(0,i.kt)("inlineCode",{parentName:"h3"},"bottender/qna-maker")),(0,i.kt)("p",null,"To make the bot development enjoyable, we made a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/packages/bottender-qna-maker"},(0,i.kt)("inlineCode",{parentName:"a"},"bottender/qna-maker"))," package. You can install the package with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),"."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @bottender/qna-maker\n")),(0,i.kt)("p",null,"Or with ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @bottender/qna-maker\n")),(0,i.kt)("p",null,"In the following sample code, you can see how elegant it is to integrate Bottender with QnA Maker. All you need to do is to fill in your environment variables, and score thread, then Bottender uses answers from QnA Maker as the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const qnaMaker = require('@bottender/qna-maker');\n\nasync function Unknown(context) {\n  await context.sendText('Sorry, I don\u2019t know what you say.');\n}\n\nconst QnaMaker = qnaMaker({\n  resourceName: process.env.RESOURCE_NAME,\n  knowledgeBaseId: process.env.KNOWLEDGE_BASE_ID,\n  endpointKey: process.env.ENDPOINT_KEY,\n  scoreThreshold: 70,\n});\n\nmodule.exports = async function App() {\n  return chain([\n    QnaMaker, //\n    Unknown,\n  ]);\n};\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Fore the full example code, please refer to Bottender example, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Yoctol/bottender/tree/master/examples/with-qna-maker"},"With QnA Maker"),"."))),(0,i.kt)("h2",{id:"building-with-dialogflow"},"Building with Dialogflow"),(0,i.kt)("p",null,"Google creates Dialogflow. Since 2019 Google announced its NLU pre-training ",(0,i.kt)("a",{parentName:"p",href:"https://www.blog.google/products/search/search-language-understanding-bert"},"BERT"),", we are confident in Google's NLU solution; at least we can think it might be the state-of-the-art."),(0,i.kt)("h3",{id:"step-1-dialogflow-setup"},"Step 1: Dialogflow Setup"),(0,i.kt)("p",null,"To build a bot integrated with ",(0,i.kt)("a",{parentName:"p",href:"https://dialogflow.com/"},"Dialogflow"),", you have to set up Dialogflow following the Dialogflow doc, ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/dialogflow/docs/quick/setup"},"Quickstart: Setup")," and fill in the two values into the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GOOGLE_APPLICATION_CREDENTIALS"),", which is the file path of the JSON file that contains your service account key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GOOGLE_APPLICATION_PROJECT_ID"),", which stands for the GCP project ID")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# .env\n\nGOOGLE_APPLICATION_CREDENTIALS=\nGOOGLE_APPLICATION_PROJECT_ID=\n")),(0,i.kt)("h3",{id:"step-2-create-a-dialogflow-agent"},"Step 2: Create a Dialogflow Agent"),(0,i.kt)("p",null,"Next, you can build a Dialogflow agent following the Dialogflow doc, ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/dialogflow/docs/quick/build-agent"},"Quickstart: Build an Agent"),". In this example, we make an agent and create an intent with the display name ",(0,i.kt)("inlineCode",{parentName:"p"},"greeting.")," You can set your training phrases on the Dialogflow console for this intent."),(0,i.kt)("p",null,"After you finish the settings of the agent, you can call Dialogflow's API to analyze the intent of the message the bot receives."),(0,i.kt)("h3",{id:"step-3-connect-bottender-with-dialogflow-by-bottenderdialogflow"},"Step 3: Connect Bottender with Dialogflow by ",(0,i.kt)("inlineCode",{parentName:"h3"},"bottender/dialogflow")),(0,i.kt)("p",null,"To make the bot development enjoyable, we made a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/packages/bottender-dialogflow"},(0,i.kt)("inlineCode",{parentName:"a"},"bottender/dialogflow"))," package. You can install the package with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),"."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @bottender/dialogflow\n")),(0,i.kt)("p",null,"or with ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @bottender/dialogflow\n")),(0,i.kt)("p",null,"In the following sample code, you can see how elegant it is to integrate Bottender with Dialogflow. All you need to do is to fill in your environment variables, write a map between ",(0,i.kt)("inlineCode",{parentName:"p"},"intents")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"greeting"),") and corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"functions")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"SayHello"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const dialogflow = require('@bottender/dialogflow');\n\nasync function SayHello(context) {\n  await context.sendText('Hello!');\n}\n\nasync function Unknown(context) {\n  await context.sendText('Sorry, I don\u2019t know what you say.');\n}\n\nconst Dialogflow = dialogflow({\n  projectId: process.env.GOOGLE_APPLICATION_PROJECT_ID,\n  actions: {\n    greeting: SayHello,\n  },\n});\n\nmodule.exports = async function App() {\n  return chain([\n    Dialogflow, //\n    Unknown,\n  ]);\n};\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Dialogflow offers ",(0,i.kt)("inlineCode",{parentName:"li"},"intent name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"intent display name"),". The value of the former one is fixed once it is created; the value of the latter one can be change at any time. While writing the map between ",(0,i.kt)("inlineCode",{parentName:"li"},"intents")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"functions")," at ",(0,i.kt)("inlineCode",{parentName:"li"},"bottender/dialogflow"),", you can use any of the two to represent a single ",(0,i.kt)("inlineCode",{parentName:"li"},"intent.")),(0,i.kt)("li",{parentName:"ul"},"Fore the full example code, please refer to Bottender example, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Yoctol/bottender/tree/master/examples/with-dialogflow"},"With Dialogflow")))),(0,i.kt)("h2",{id:"building-with-luis"},"Building with LUIS"),(0,i.kt)("h3",{id:"step-1-luis-setup"},"Step 1: LUIS Setup"),(0,i.kt)("p",null,"To build a bot integrated with ",(0,i.kt)("a",{parentName:"p",href:"https://luis.ai/"},"LUIS (Language Understanding Intelligent Service)"),", you have to create a new app in the LUIS portal following the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cognitive-services/LUIS/get-started-portal-build-app"},"Official Setup Guide")," and fill the three values: ",(0,i.kt)("inlineCode",{parentName:"p"},"LUIS_APP_ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LUIS_APP_KEY"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"LUIS_APP_ENDPOINT")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# .env\n\nLUIS_APP_ID=\nLUIS_APP_KEY=\nLUIS_APP_ENDPOINT=\n")),(0,i.kt)("h3",{id:"step-2-train-and-publish-your-luis-project"},"Step 2: Train and Publish Your LUIS Project"),(0,i.kt)("p",null,"In this example, we create an intent with the intent name ",(0,i.kt)("inlineCode",{parentName:"p"},"greeting"),". You can set your training phrases on the LUIS console for this intent. And then you have to train the model and publish it."),(0,i.kt)("h3",{id:"step-3-connect-bottender-with-luis-by-bottenderluis"},"Step 3: Connect Bottender with LUIS by ",(0,i.kt)("inlineCode",{parentName:"h3"},"bottender/luis")),(0,i.kt)("p",null,"To make the bot development enjoyable, we made a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/packages/bottender-luis"},(0,i.kt)("inlineCode",{parentName:"a"},"bottender/luis"))," package. You can install the package with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),"."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @bottender/luis\n")),(0,i.kt)("p",null,"Or with ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @bottender/luis\n")),(0,i.kt)("p",null,"In the following sample code, you can see how elegant it is to integrate Bottender with LUIS. All you need to do is to fill in your environment variables, and score threshold, then write a map between ",(0,i.kt)("inlineCode",{parentName:"p"},"intents")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"greeting"),") and corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"functions")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"SayHello"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const luis = require('@bottender/luis');\n\nasync function SayHello(context) {\n  await context.sendText('Hello!');\n}\n\nasync function Unknown(context) {\n  await context.sendText('Sorry, I don\u2019t know what you say.');\n}\n\nconst Luis = luis({\n  appId: process.env.LUIS_APP_ID,\n  appKey: process.env.LUIS_APP_KEY,\n  endpoint: 'https://westus.api.cognitive.microsoft.com',\n  actions: {\n    greeting: SayHello,\n  },\n  scoreThreshold: 0.7,\n});\n\nmodule.exports = async function App() {\n  return chain([\n    Luis, //\n    Unknown,\n  ]);\n};\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Fore the full example code, please refer to Bottender example, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Yoctol/bottender/tree/master/examples/with-luis.ai"},"With LUIS.ai"),"."))),(0,i.kt)("h2",{id:"building-with-rasa-nlu"},"Building with Rasa NLU"),(0,i.kt)("p",null,"You may choose Rasa NLU if you're finding an on-premises NLU solution."),(0,i.kt)("h3",{id:"step-1-rasa-nlu-setup"},"Step 1: Rasa NLU Setup"),(0,i.kt)("p",null,"To build a bot integrated with ",(0,i.kt)("a",{parentName:"p",href:"https://rasa.com/docs/rasa/nlu/about/"},"Rasa NLU"),", you have to install Rasa first following the ",(0,i.kt)("a",{parentName:"p",href:"https://rasa.com/docs/rasa/user-guide/installation/"},"Official Installation Guide"),". Next, you can train your NLU model by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rasa train nlu\n")),(0,i.kt)("p",null,"This command will look for the training data files in the data/ directory and saves the model in the models/ directory. For information about how to generate training data, you can see Rasa's document, ",(0,i.kt)("a",{parentName:"p",href:"https://rasa.com/docs/rasa/nlu/training-data-format/"},"Training Data Format"),"."),(0,i.kt)("p",null,"After you get your NLU model ready, you can run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rasa run --enable-api -m models/nlu-your-model-id.tar.gz\n")),(0,i.kt)("p",null,"This command starts a server with your NLU model locally on port 5005. Next, you can request predictions from your model by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"/model/parse")," endpoint. You can see ",(0,i.kt)("a",{parentName:"p",href:"https://rasa.com/docs/rasa/api/http-api/#operation/parseModelMessage"},"here")," for the document of this API."),(0,i.kt)("h3",{id:"step-2-connect-bottender-with-rasa-by-bottenderrasa"},"Step 2: Connect Bottender with Rasa by ",(0,i.kt)("inlineCode",{parentName:"h3"},"bottender/rasa")),(0,i.kt)("p",null,"To make the bot development enjoyable, we made a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Yoctol/bottender/tree/master/packages/bottender-rasa"},(0,i.kt)("inlineCode",{parentName:"a"},"bottender/rasa"))," package. You can install the package with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),"."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @bottender/rasa\n")),(0,i.kt)("p",null,"Or with ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @bottender/rasa\n")),(0,i.kt)("p",null,"In the following sample code, you can see how elegant it is to integrate Bottender with Rasa. All you need to do is to set up the origin URL, and confidence threshold, then write a map between ",(0,i.kt)("inlineCode",{parentName:"p"},"intents")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"greeting"),") and corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"functions")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"SayHello"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const rasa = require('@bottender/rasa');\n\nasync function SayHello(context) {\n  await context.sendText('Hello!');\n}\n\nasync function Unknown(context) {\n  await context.sendText('Sorry, I don\u2019t know what you say.');\n}\n\nconst Rasa = rasa({\n  origin: 'http://localhost:5005',\n  actions: {\n    greeting: SayHello,\n  },\n  confidenceThreshold: 0.7,\n});\n\nmodule.exports = async function App() {\n  return chain([\n    Rasa, //\n    Unknown,\n  ]);\n};\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Fore the full example code, please refer to Bottender example, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Yoctol/bottender/tree/master/examples/with-rasa"},"With Rasa"),"."))))}c.isMDXComponent=!0}}]);
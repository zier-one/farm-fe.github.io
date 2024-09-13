"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[3042],{976:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var t=r(6070),i=r(5296);const c={},a="Create A Project",s={id:"tutorials/create",title:"Create A Project",description:"In this chapter, we will create a new Farm React project from scratch, and launch it in development mode.",source:"@site/versioned_docs/version-0.x/tutorials/1-create.md",sourceDirName:"tutorials",slug:"/tutorials/create",permalink:"/docs/0.x/tutorials/create",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/tutorials/1-create.md",tags:[],version:"0.x",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/0.x/tutorials/overview"},next:{title:"Develop With Farm",permalink:"/docs/0.x/tutorials/start"}},o={},d=[{value:"Create A Package",id:"create-a-package",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Create Farm Config File",id:"create-farm-config-file",level:2},{value:"Create A Entry Html and Js",id:"create-a-entry-html-and-js",level:2},{value:"Start Your Farm Project!",id:"start-your-farm-project",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-a-project",children:"Create A Project"}),"\n",(0,t.jsx)(n.p,{children:"In this chapter, we will create a new Farm React project from scratch, and launch it in development mode."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["In this tutorial, we use ",(0,t.jsx)(n.code,{children:"pnpm"})," as default package manager. This chapter is ",(0,t.jsx)(n.code,{children:"build a Farm react project from scratch"}),", If you are trying to init a new Farm Project rapidly, use our official template with command ",(0,t.jsx)(n.code,{children:"pnpm create farm"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"create-a-package",children:"Create A Package"}),"\n",(0,t.jsxs)(n.p,{children:["First we execute ",(0,t.jsx)(n.code,{children:"pnpm init"})," to create a new package."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir farm-react && cd farm-react && pnpm init\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"package.json"})," file will be autogenerated."]}),"\n",(0,t.jsx)(n.h2,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,t.jsx)(n.p,{children:"Install necessary dependencies:"}),"\n",(0,t.jsx)(n.p,{children:"react and react-dom:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add react react-dom && pnpm add react-refresh @types/react @types/react-dom -D\n"})}),"\n",(0,t.jsx)(n.p,{children:"farm related dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add -D @farmfe/cli @farmfe/core @farmfe/plugin-react\n"})}),"\n",(0,t.jsx)(n.p,{children:"There are 3 packages that are necessary for a react project:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"@farmfe/cli"})}),": This package provides commands like ",(0,t.jsx)(n.code,{children:"farm start"}),", ",(0,t.jsx)(n.code,{children:"farm build"}),", ",(0,t.jsx)(n.code,{children:"farm preview"}),", it must be used with ",(0,t.jsx)(n.code,{children:"@farmfe/core"})," and can not be used separately."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"@farmfe/core"})}),": This package provides ",(0,t.jsx)(n.code,{children:"Compilation"})," and ",(0,t.jsx)(n.code,{children:"Dev Server"})," abilities, provides all necessary component for local development and product build. It exports ",(0,t.jsx)(n.code,{children:"Compiler"}),", ",(0,t.jsx)(n.code,{children:"DevServer"})," and ",(0,t.jsx)(n.code,{children:"Watcher"}),", which is used for ",(0,t.jsx)(n.code,{children:"compile the project"}),", ",(0,t.jsx)(n.code,{children:"serve the project in development mode"})," and ",(0,t.jsx)(n.code,{children:"watch the project for Hot Module Replacement"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"@farmfe/plugin-react"})}),": This package provides abilities for React Jsx compilation, and react-refresh support."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-farm-config-file",children:"Create Farm Config File"}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"farm.config.ts"})," file under project root:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",metastring:"{2}",children:".\n\u251c\u2500\u2500 farm.config.ts\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 pnpm-lock.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"and add following configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\n\nfunction defineConfig(config: UserConfig): UserConfig {\n  return config;\n}\n\nexport default defineConfig({\n  compilation: {\n    input: {\n      index: './src/index.html'\n    },\n    output: {\n      path: 'build',\n      publicPath: '/',\n      targetEnv: 'browser'\n    }\n  },\n  plugins: [\n    '@farmfe/plugin-react',\n  ]\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For configuration file above, we use ",(0,t.jsx)(n.code,{children:"input"}),", ",(0,t.jsx)(n.code,{children:"output"})," and ",(0,t.jsx)(n.code,{children:"plugins"}),", which is the most basic configuration in Farm."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"input"})}),": Configure the entry point. Farm will compile and build a module graph from the entries."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"output"})}),": Confiture the output dir, file name and so on. For full options, see ",(0,t.jsx)(n.a,{href:"/docs/config/farm-config#output",children:"compilation.output"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"plugins"})}),": Configure farm plugins, all extended abilities like React, Vue SFC are supported by plugins. Here we use a Rust Plugin(",(0,t.jsx)(n.code,{children:"@farmfe/plugin-react"}),") to support compiling React jsx."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Check ",(0,t.jsx)(n.a,{href:"/docs/config/farm-config",children:"config reference"})," for more options."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["In above example, we config input as ",(0,t.jsx)(n.code,{children:"index: './src/index.html'"}),", if we do not configure ",(0,t.jsx)(n.code,{children:"input"}),", it's default to ",(0,t.jsx)(n.code,{children:"index: './index.html'"}),". And we can configure multiple entries in ",(0,t.jsx)(n.code,{children:"input"}),", see ",(0,t.jsx)(n.a,{href:"/docs/features/html#multi-page-app",children:"Multi Page App"})," for details"]})}),"\n",(0,t.jsx)(n.h2,{id:"create-a-entry-html-and-js",children:"Create A Entry Html and Js"}),"\n",(0,t.jsxs)(n.p,{children:["Create 2 files ",(0,t.jsx)(n.code,{children:"src/index.html"})," and ",(0,t.jsx)(n.code,{children:"src/index.tsx"})," under project root:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",metastring:"{5-7}",children:".\n\u251c\u2500\u2500 farm.config.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index.html\n    \u2514\u2500\u2500 index.tsx\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Content of ",(0,t.jsx)(n.code,{children:"src/index.html"})," is:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  <div id="root"></div>\n  \x3c!-- we must use script to make ./index.tsx as a dependency --\x3e\n  <script src="./index.tsx"><\/script>\n</body>\n</html>\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Note that we must add at least one ",(0,t.jsx)(n.code,{children:"<script>"})," to refer to a script module."]})}),"\n",(0,t.jsxs)(n.p,{children:["Content of ",(0,t.jsx)(n.code,{children:"src/index.tsx"})," is:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="src/index.tsx"',children:"import React from 'react';\nimport { createRoot } from 'react-dom/client';\n\nconst container = document.querySelector('#root');\nconst root = createRoot(container);\n\nroot.render(<div>A React Page compiled by Farm</div>);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"start-your-farm-project",children:"Start Your Farm Project!"}),"\n",(0,t.jsxs)(n.p,{children:["Now every thing is ready, add a start script to your ",(0,t.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="package.json" {6}',children:'{\n  "name": "1-create-a-project",\n  "version": "1.0.0",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "start": "farm start"\n  },\n  // ... ignore other fields \n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["then run ",(0,t.jsx)(n.code,{children:"npm start"}),", if farm output following messages, means your project are launched successfully:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"$ npm start\n\n> 1-create-a-project@1.0.0 start\n> farm start\n\n[ Farm ] Using config file at /home/tutorials/1-create-a-project/farm.config.ts\n\n \u03df  Farm  v0.16.0\n \u2713  Ready in 20ms \u26a1\ufe0f FULL EXTREME ! \n\n[ Farm ] > Local:   http://localhost:9000/\n[ Farm ] > Network: http://192.168.1.3:9000/\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"http://localhost:9000"})," in browser."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5296:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(758);const i={},c=t.createContext(i);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);
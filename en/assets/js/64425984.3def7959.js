"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8616],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(1163),a=(r(9496),r(9613));const o={},i="Static Assets",l={unversionedId:"features/static",id:"features/static",title:"Static Assets",description:"Since v0.4",source:"@site/docs/features/static.md",sourceDirName:"features",slug:"/features/static",permalink:"/en/docs/features/static",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/docs/features/static.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Script",permalink:"/en/docs/features/script"},next:{title:"Lazy Compilation",permalink:"/en/docs/features/lazy-compilation"}},s={},u=[{value:"url",id:"url",level:2},{value:"inline",id:"inline",level:2},{value:"raw",id:"raw",level:2},{value:"Configuring",id:"configuring",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"static-assets"},"Static Assets"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Since v0.4\nFarm supports three resource loading methods: ",(0,a.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"inline"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"raw")," \u3002")),(0,a.kt)("h2",{id:"url"},"url"),(0,a.kt)("p",null,"Import a image\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import rocketUrl from './assets/rocket.svg'; // return the url of this image\n\nexport function Main() {\n  return <img src={rocketUrl} /> // using the url\n}\n")),(0,a.kt)("p",null,"Default to use url method when import a image. When using url methods to import a image, the image will be emitted to the output dir directly, and the image module itself will be compiled to a js module like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default '/rocket.<content hash>.svg'\n")),(0,a.kt)("p",null,"using ",(0,a.kt)("inlineCode",{parentName:"p"},"compilation.output.assetFilename")," to config your asset name\u3002"),(0,a.kt)("h2",{id:"inline"},"inline"),(0,a.kt)("p",null,"Using query ",(0,a.kt)("inlineCode",{parentName:"p"},"?inline")," to tell Farm that you want to inline your assets\uff0cthen the assets will be transformed to base64\uff0cfor example\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// importer\nimport logo from './assets/logo.png?inline'; // logo is a base 64 str\n\n// the image module will be compiled to:\nexport default 'data:image/png,base64,xxxxx==';\n")),(0,a.kt)("h2",{id:"raw"},"raw"),(0,a.kt)("p",null,"Using query ",(0,a.kt)("inlineCode",{parentName:"p"},"?raw")," to tell Farm that you want to read the raw string of the assets, for example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// import \nimport logo from './assets/license.txt?raw'; // return the content string of the assets\n\n// the txt file will be compiled to:\nexport default 'MIT xxxx';\n")),(0,a.kt)("h2",{id:"configuring"},"Configuring"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  compilation: {\n    output: {\n      assetFilename: 'assets/[resourceName].[hash].[ext]', // [] is a placeholder, Farm currently only these three kind of placeholders\n    },\n    assets: {\n      include: ['txt'] // extra static asset extension\n    }\n  }\n}\n")))}m.isMDXComponent=!0}}]);
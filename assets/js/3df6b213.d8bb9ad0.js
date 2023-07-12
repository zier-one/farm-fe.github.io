"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[4058],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(1163),a=(r(9496),r(9613));const o={},l="\u9759\u6001\u8d44\u6e90",i={unversionedId:"features/static",id:"features/static",title:"\u9759\u6001\u8d44\u6e90",description:"v0.4 \u53ca\u4ee5\u4e0a\u652f\u6301",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/features/static.md",sourceDirName:"features",slug:"/features/static",permalink:"/docs/features/static",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/docs/features/static.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Script",permalink:"/docs/features/script"},next:{title:"\u61d2\u7f16\u8bd1",permalink:"/docs/features/lazy-compilation"}},s={},c=[{value:"\u4ee5 URL \u5f62\u5f0f\u4f7f\u7528",id:"\u4ee5-url-\u5f62\u5f0f\u4f7f\u7528",level:2},{value:"\u5185\u8054",id:"\u5185\u8054",level:2},{value:"\u539f\u59cb\u5b57\u7b26\u4e32",id:"\u539f\u59cb\u5b57\u7b26\u4e32",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9759\u6001\u8d44\u6e90"},"\u9759\u6001\u8d44\u6e90"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"v0.4 \u53ca\u4ee5\u4e0a\u652f\u6301\nFarm \u652f\u6301\u4e09\u79cd\u8d44\u6e90\u52a0\u8f7d\u65b9\u5f0f\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"inline")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"raw")," \u3002")),(0,a.kt)("h2",{id:"\u4ee5-url-\u5f62\u5f0f\u4f7f\u7528"},"\u4ee5 URL \u5f62\u5f0f\u4f7f\u7528"),(0,a.kt)("p",null,"\u5bfc\u5165\u56fe\u7247\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import rocketUrl from './assets/rocket.svg'; // return the url of this image\n\nexport function Main() {\n  return <img src={rocketUrl} /> // using the url\n}\n")),(0,a.kt)("p",null,"\u5bfc\u5165\u56fe\u7247\u65f6\u9ed8\u8ba4\u4ee5 URL \u7684\u5f62\u5f0f\u3002 \u5f53\u4f7f\u7528 URL \u5f62\u5f0f\u5bfc\u5165\u56fe\u50cf\u65f6\uff0c\u56fe\u50cf\u5c06\u76f4\u63a5\u590d\u5236\u5230\u8f93\u51fa\u76ee\u5f55\uff0c\u5e76\u4e14\u56fe\u50cf\u6a21\u5757\u672c\u8eab\u5c06\u88ab\u7f16\u8bd1\u4e3a js \u6a21\u5757\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default '/rocket.<content hash>.svg'\n")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"compilation.output.assetsFilename")," \u6765\u914d\u7f6e\u4f60\u7684\u8d44\u6e90\u540d\u79f0\u3002"),(0,a.kt)("h2",{id:"\u5185\u8054"},"\u5185\u8054"),(0,a.kt)("p",null,"\u4f7f\u7528\u67e5\u8be2 ",(0,a.kt)("inlineCode",{parentName:"p"},"?inline")," \u544a\u8bc9 Farm \u4f60\u60f3\u8981\u5185\u8054\u4f60\u7684\u8d44\u6e90\uff0c\u7136\u540e\u8d44\u6e90\u5c06\u88ab\u8f6c\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"base64"),"\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// importer\nimport logo from './assets/logo.png?inline'; // logo is a base 64 str\n\n// the image module will be compiled to:\nexport default 'data:image/png,base64,xxxxx==';\n")),(0,a.kt)("h2",{id:"\u539f\u59cb\u5b57\u7b26\u4e32"},"\u539f\u59cb\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u4f7f\u7528\u67e5\u8be2\u201c?raw\u201d\u544a\u8bc9 Farm \u60a8\u8981\u8bfb\u53d6\u8d44\u4ea7\u7684\u539f\u59cb\u5b57\u7b26\u4e32"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// import \nimport logo from './assets/license.txt?raw'; // return the content string of the assets\n\n// the txt file will be compiled to:\nexport default 'MIT xxxx';\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  compilation: {\n    output: {\n      assetsFilename: 'assets/[resourceName].[hash].[ext]', // [] \u91cc\u9762\u7684\u662f Farm \u652f\u6301\u7684\u5168\u90e8\u5360\u4f4d\u7b26\n    },\n    assets: {\n      include: ['txt'] // \u989d\u5916\u9759\u6001\u8d44\u6e90\u7c7b\u578b\n    }\n  }\n}\n")))}m.isMDXComponent=!0}}]);
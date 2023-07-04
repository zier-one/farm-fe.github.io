"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[6988],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,y=s["".concat(l,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(1163),a=(r(9496),r(9613));const o={},c="\u61d2\u7f16\u8bd1",i={unversionedId:"features/lazy-compilation",id:"features/lazy-compilation",title:"\u61d2\u7f16\u8bd1",description:"\u5f53\u6d89\u53ca\u5230\u4e00\u4e2a\u5927\u9879\u76ee\u65f6\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u5c06\u5b83\u4eec\u5206\u6210\u5c0f\u5757\u5e76\u6309\u9700\u52a0\u8f7d\u3002 \u8fd9\u53ef\u4ee5\u901a\u8fc7\u52a8\u6001\u5bfc\u5165\u6765\u5b9e\u73b0\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/features/lazy-compilation.md",sourceDirName:"features",slug:"/features/lazy-compilation",permalink:"/zh/docs/features/lazy-compilation",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/docs/features/lazy-compilation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9759\u6001\u8d44\u6e90",permalink:"/zh/docs/features/static"},next:{title:"\u5c40\u90e8\u6253\u5305",permalink:"/zh/docs/features/partial-bundling"}},l={},p=[],u={toc:p},s="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u61d2\u7f16\u8bd1"},"\u61d2\u7f16\u8bd1"),(0,a.kt)("p",null,"\u5f53\u6d89\u53ca\u5230\u4e00\u4e2a\u5927\u9879\u76ee\u65f6\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u5c06\u5b83\u4eec\u5206\u6210\u5c0f\u5757\u5e76\u6309\u9700\u52a0\u8f7d\u3002 \u8fd9\u53ef\u4ee5\u901a\u8fc7\u52a8\u6001\u5bfc\u5165\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const page = React.lazy(() => import('./page')); // \u5ef6\u8fdf\u52a0\u8f7d\u9875\u9762\n")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u4f1a\u5ef6\u8fdf\u7f16\u8bd1\u8fd9\u4e9b\u52a8\u6001\u5bfc\u5165\uff0c\u4ec5\u5728\u771f\u6b63\u9700\u8981\u6a21\u5757\u65f6\u624d\u7f16\u8bd1\u5b83\u4eec\u3002\u5982\u679c\u6b63\u786e\u4f7f\u7528\u201c\u52a8\u6001\u5bfc\u5165\u201d\uff0c\u61d2\u7f16\u8bd1\u53ef\u4ee5\u6781\u5927\u51cf\u5c11\u5927\u578b\u9879\u76ee\u7684\u9996\u6b21\u7f16\u8bd1\u65f6\u95f4\uff0c\u6781\u5927\u63d0\u5347\u9879\u76ee\u7684\u7814\u53d1\u4f53\u9a8c\u3002"))}f.isMDXComponent=!0}}]);
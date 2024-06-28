"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[7604],{1536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=t(1527),s=t(5696),o=t(2264),l=t(7123),a=t(9988);const i={},c="@farmfe/plugin-react-components",u={id:"plugins/official-plugins/react-components",title:"@farmfe/plugin-react-components",description:"On-demand components auto importing for React.",source:"@site/docs/plugins/official-plugins/react-components.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/react-components",permalink:"/docs/plugins/official-plugins/react-components",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/react-components.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/plugin-virtual",permalink:"/docs/plugins/official-plugins/virtual"},next:{title:"@farmfe/js-plugin-postcss",permalink:"/docs/plugins/official-plugins/js-postcss"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Features",id:"features",level:2},{value:"Usage",id:"usage-1",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Importing from UI Libraries",id:"importing-from-ui-libraries",level:2},{value:"Configuration",id:"configuration",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"farmfeplugin-react-components",children:"@farmfe/plugin-react-components"}),"\n",(0,r.jsx)(n.p,{children:"On-demand components auto importing for React."}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(a.Z,{value:"npm",label:"npm",children:(0,r.jsx)(o.Z,{children:"npm install @farmfe/plugin-react-components"})}),(0,r.jsx)(a.Z,{value:"yarn",label:"yarn",children:(0,r.jsx)(o.Z,{children:"yarn add @farmfe/plugin-react-components"})}),(0,r.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(o.Z,{children:"pnpm add @farmfe/plugin-react-components"})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@farmfe/plugin-react-components"})," is a Rust plugin, you only need to configure its package name in ",(0,r.jsx)(n.code,{children:"plugins"})," field in ",(0,r.jsx)(n.code,{children:"farm.config.ts"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"{4}",children:"import { UserConfig } from '@farmfe/core';\n\nconst config: UserConfig = {\n  plugins: ['@farmfe/plugin-react-components', { /** options here */}]\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud83d\udc9a Supports React out-of-the-box."}),"\n",(0,r.jsx)(n.li,{children:"\u2728 Supports both components and directives."}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfdd Tree-shakable, only registers the components you use."}),"\n",(0,r.jsx)(n.li,{children:"\ud83e\ude90 Folder names as namespaces."}),"\n",(0,r.jsx)(n.li,{children:"\ud83e\uddbe Full TypeScript support."}),"\n",(0,r.jsxs)(n.li,{children:["\ud83c\udf08 ",(0,r.jsx)(n.a,{href:"#importing-from-ui-libraries",children:"Built-in resolvers"})," for popular UI libraries."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage-1",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Use components in templates as you would usually do, it will import components on demand, and there is no ",(0,r.jsx)(n.code,{children:"import"})," and ",(0,r.jsx)(n.code,{children:"component registration"})," required anymore! If you register the parent component asynchronously (or lazy route), the auto-imported components will be code-split along with their parent."]}),"\n",(0,r.jsx)(n.p,{children:"It will automatically turn this"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'export function Main() {\n  return <HelloWorld msg="Hello React + Farm" />\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"into this"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import HelloWorld from './src/components/HelloWorld'\n\nexport function Main() {\n  return <HelloWorld msg=\"Hello React + Farm\" />\n}\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),"\nBy default this plugin will import components in the ",(0,r.jsx)(n.code,{children:"src/components"})," path. You can customize it using the ",(0,r.jsx)(n.code,{children:"dirs"})," option."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,r.jsx)(n.p,{children:"To get TypeScript support for auto-imported components."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"Components({\n  dts: true, // enabled by default if `typescript` is installed\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Once the setup is done, a ",(0,r.jsx)(n.code,{children:"components.d.ts"})," will be generated and updates automatically with the type definitions. Feel free to commit it into git or not as you want."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Make sure you also add ",(0,r.jsx)(n.code,{children:"components.d.ts"})," to your ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," under ",(0,r.jsx)(n.code,{children:"include"}),"."]})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"importing-from-ui-libraries",children:"Importing from UI Libraries"}),"\n",(0,r.jsxs)(n.p,{children:["We have several built-in resolvers for popular UI libraries like ",(0,r.jsx)(n.strong,{children:"Ant Design"}),", ",(0,r.jsx)(n.strong,{children:"Arco Design"}),", and ",(0,r.jsx)(n.strong,{children:"Material UI"}),", where you can enable them by:"]}),"\n",(0,r.jsx)(n.p,{children:"Supported Resolvers:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://ant.design/",children:"Ant Design"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://arco.design/react/docs/start",children:"Arco Design"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://mui.com/",children:"Material UI"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'// farm.config.js\n\nimport { UserConfig } from \'@farmfe/core\';\n\nconst config: UserConfig = {\n  plugins: [\'@farmfe/plugin-react-components\', {\n        local: true,\n        resolvers:[\n          {\n            module: "antd",\n            prefix: "Ant"\n          },\n          {\n            module:"@arco-design/web-react",\n            prefix: "Arco",\n            import_style: true // style/index.js\n          }\n        ]\n  }]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["The following show the default values of the configuration\n",(0,r.jsx)("strike",{children:"component"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'{\n  // relative paths to the directory to search for components.\n  dirs: [\'src/components\'],\n  \n  // resolvers for custom components.\n  resolvers: [],\n\n  /**\n   * Components are introduced with Absolute or Relative path.\n   *\n   * @default Absolute\n   */\n  import_mode: "Absolute"\n\n  /**\n   * Is it valid for local components\n   *\n   * @default true\n   */\n  local: true,\n\n  /**\n   * import style `style/index.js` , also accepts a path for custom path (<Component>/**) with components\n   *\n   * @default false\n   */\n  importStyle?: boolean | string \n\n  // generate `components.d.ts` global declarations,\n  // also accepts a path for custom filename\n  // default: `true` if package typescript is installed\n  dts: true,\n\n  // Filters for transforming targets (components to insert the auto import)\n  // Note these are NOT about including/excluding components registered - use `Regex` for that\n  include: ["src/components"],\n  exclude: ["node_modules"],\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9988:(e,n,t)=>{t.d(n,{Z:()=>l});t(959);var r=t(5341);const s={tabItem:"tabItem_MFY6"};var o=t(1527);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},7123:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(959),s=t(5341),o=t(5739),l=t(8903),a=t(6206),i=t(6404),c=t(2108),u=t(2685);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=h({queryString:t,groupId:s}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),x=(()=>{const e=c??f;return m({value:e,tabValues:o})?e:null})();(0,a.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=t(8302);const x={tabList:"tabList_d80c",tabItem:"tabItem_jy3j"};var b=t(1527);function j(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),s=a[t].value;s!==r&&(c(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.Z)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}}}]);
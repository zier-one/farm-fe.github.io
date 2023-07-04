"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\u5feb\u901f\u5f00\u59cb","href":"/zh/docs/quick-start","docId":"quick-start"},{"type":"link","label":"\u4e3a\u4ec0\u4e48\u9700\u8981 Farm\uff1f","href":"/zh/docs/why-farm","docId":"why-farm"},{"type":"category","label":"Features","collapsed":false,"items":[{"type":"link","label":"Html","href":"/zh/docs/features/html","docId":"features/html"},{"type":"link","label":"CSS","href":"/zh/docs/features/css","docId":"features/css"},{"type":"link","label":"Script","href":"/zh/docs/features/script","docId":"features/script"},{"type":"link","label":"\u9759\u6001\u8d44\u6e90","href":"/zh/docs/features/static","docId":"features/static"},{"type":"link","label":"\u61d2\u7f16\u8bd1","href":"/zh/docs/features/lazy-compilation","docId":"features/lazy-compilation"},{"type":"link","label":"\u5c40\u90e8\u6253\u5305","href":"/zh/docs/features/partial-bundling","docId":"features/partial-bundling"}],"collapsible":true},{"type":"link","label":"Benchmarks","href":"/zh/docs/benchmark","docId":"benchmark"}],"configSidebar":[{"type":"link","label":"\u914d\u7f6e\u53c2\u8003","href":"/zh/docs/config/farm-config","docId":"config/farm-config"},{"type":"link","label":"CLI Options","href":"/zh/docs/config/cli","docId":"config/cli"}],"pluginSidebar":[{"type":"link","label":"Overview","href":"/zh/docs/plugins/overview","docId":"plugins/overview"},{"type":"link","label":"Rust Plugins","href":"/zh/docs/plugins/rust-plugin","docId":"plugins/rust-plugin"},{"type":"link","label":"Js Plugins","href":"/zh/docs/plugins/js-plugin","docId":"plugins/js-plugin"}]},"docs":{"benchmark":{"id":"benchmark","title":"Benchmarks","description":"Using Turbopack\'s bench cases (1000 React components), see https://turbo.build/pack/docs/benchmarks.","sidebar":"tutorialSidebar"},"concepts":{"id":"concepts","title":"Concepts","description":"Farm is a build tool to transform and bundle your input to deployable resources. Farm will search modules start from the input, then construct a module graph and bundle these modules into several resources"},"config/cli":{"id":"config/cli","title":"CLI Options","description":"create","sidebar":"configSidebar"},"config/farm-config":{"id":"config/farm-config","title":"\u914d\u7f6e\u53c2\u8003","description":"Farm \u9ed8\u8ba4\u4ece\u9879\u76ee\u6839\u76ee\u5f55\u7684 farm.config.ts|js|mjs \u6587\u4ef6\u4e2d\u8bfb\u53d6\u914d\u7f6e\uff0c\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b:","sidebar":"configSidebar"},"features/css":{"id":"features/css","title":"CSS","description":"Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684 CSS \u7f16\u8bd1\uff0c\u4f8b\u5982\uff1a","sidebar":"tutorialSidebar"},"features/html":{"id":"features/html","title":"Html","description":"\u57fa\u672c\u7528\u6cd5","sidebar":"tutorialSidebar"},"features/lazy-compilation":{"id":"features/lazy-compilation","title":"\u61d2\u7f16\u8bd1","description":"\u5f53\u6d89\u53ca\u5230\u4e00\u4e2a\u5927\u9879\u76ee\u65f6\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u5c06\u5b83\u4eec\u5206\u6210\u5c0f\u5757\u5e76\u6309\u9700\u52a0\u8f7d\u3002 \u8fd9\u53ef\u4ee5\u901a\u8fc7\u52a8\u6001\u5bfc\u5165\u6765\u5b9e\u73b0\u3002","sidebar":"tutorialSidebar"},"features/optimization":{"id":"features/optimization","title":"Product Optimization","description":""},"features/partial-bundling":{"id":"features/partial-bundling","title":"\u5c40\u90e8\u6253\u5305","description":"\u8ffd\u6eaf\u5230 Webpack \u65f6\u4ee3\uff0c\u5f00\u53d1\u8005\u7ecf\u5e38\u4f7f\u7528 splitChunks \u6765\u5206\u5272\u5305\uff0c\u8bd5\u56fe\u4f18\u5316\u8d44\u6e90\u52a0\u8f7d\u65f6\u95f4\u5e76\u63d0\u9ad8\u7f13\u5b58\u547d\u4e2d\u7387\u3002 \u4f46\u914d\u7f6e splitChunks \u5f88\u590d\u6742\uff0c\u800c\u4e14\u6709\u65f6\u8fbe\u4e0d\u5230\u60f3\u8981\u7684\u6548\u679c\u3002","sidebar":"tutorialSidebar"},"features/script":{"id":"features/script","title":"Script","description":"Farm \u9ed8\u8ba4\u652f\u6301\u7f16\u8bd1 Js/Jsx/Ts/Tsx\uff0c\u5e76\u9ed8\u8ba4\u5c06 Jsx/Tsx \u7f16\u8bd1\u4e3aReact\u3002","sidebar":"tutorialSidebar"},"features/sourcemap":{"id":"features/sourcemap","title":"Source Map","description":""},"features/static":{"id":"features/static","title":"\u9759\u6001\u8d44\u6e90","description":"v0.4 \u53ca\u4ee5\u4e0a\u652f\u6301","sidebar":"tutorialSidebar"},"plugins/js-plugin":{"id":"plugins/js-plugin","title":"Js Plugins","description":"A Js plugin is a plain Javascript object.","sidebar":"pluginSidebar"},"plugins/overview":{"id":"plugins/overview","title":"Overview","description":"Farm \u91c7\u7528\u5b8c\u5168\u63d2\u4ef6\u5316\u7684\u5f62\u5f0f\uff0c\u63d0\u4f9b\u4e86\u591a\u79cd\u7c7b\u578b\u7684\u63d2\u4ef6\u6765\u5e72\u9884 Farm \u7684\u51e0\u4e4e\u6240\u6709\u884c\u4e3a\uff0cFarm \u652f\u6301\u7684\u4e3b\u8981\u63d2\u4ef6\u7c7b\u578b\u5206\u4e3a\u4e00\u4e0b\u51e0\u7c7b\uff1a","sidebar":"pluginSidebar"},"plugins/rust-plugin":{"id":"plugins/rust-plugin","title":"Rust Plugins","description":"Rust Plugins are not stable for now...","sidebar":"pluginSidebar"},"quick-start":{"id":"quick-start","title":"\u5feb\u901f\u5f00\u59cb","description":"Farm \u9700\u8981 Node 16 \u53ca\u4ee5\u4e0a\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Linux\uff0c\u8bf7\u786e\u4fdd\u60a8\u7684\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\u4e3a ubuntu 22 \u53ca\u66f4\u9ad8\u7248\u672c\uff08\u6216 GLIBC >= 2.32\uff09\u3002","sidebar":"tutorialSidebar"},"why-farm":{"id":"why-farm","title":"\u4e3a\u4ec0\u4e48\u9700\u8981 Farm\uff1f","description":"\u968f\u7740 web \u9879\u76ee\u89c4\u6a21\u7684\u6269\u5927\uff0c\u6784\u5efa\u6027\u80fd\u5df2\u7ecf\u6210\u4e3a\u4e3b\u8981\u74f6\u9888\uff0c\u5bf9\u4e8e\u4e00\u4e2a\u5e9e\u5927\u7684\u9879\u76ee\uff0c\u4f7f\u7528 webpack \u7f16\u8bd1\u53ef\u80fd\u9700\u8981 10min \u751a\u81f3\u66f4\u591a\uff0c\u4e00\u6b21 hmr \u66f4\u65b0\u53ef\u80fd\u9700\u8981 10s \u751a\u81f3\u66f4\u591a\uff0c\u4e25\u91cd\u964d\u4f4e\u4e86\u7814\u53d1\u6548\u7387\u3002","sidebar":"tutorialSidebar"}}}')}}]);
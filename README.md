<p align="center"><a href="https://nice.lovejade.cn" target="_blank"><img width="100"src="https://nice.lovejade.cn/love.svg"></a></p>

<h1 align="center">静晴轩别苑</h1>

<div align="center">
  <strong>
    采用 <a href="https://vuepress.vuejs.org/">VuePress</a> 构建的 Web 应用程序：https://nice.lovejade.cn
  </strong>
</div>

## 目标与哲学

[静晴轩别苑](https://nice.lovejade.cn)的诞生，其初衷完全是为了体验 `VuePress`: Vue 驱动的静态网站生成器。[VuePress](https://vuepress.vuejs.org/) 由两部分组成：一部分是支持用 `Vue` 开发主题的极简静态网站生成器，另一个部分是为书写技术文档而优化的默认主题。它的诞生初衷是为了支持 `Vue` 及其子项目的文档需求。

每一个由 `VuePress` 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（`SEO`）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（`SPA`），其他的页面则会只在用户浏览到的时候才按需加载。除此之外，它还内置了以下优秀特性：

- 为技术文档而优化的[内置 Markdown 拓展](https://vuepress.vuejs.org/zh/guide/markdown.html)
- [在 Markdown 文件中使用 Vue 组件的能力](https://vuepress.vuejs.org/zh/guide/using-vue.html)
- [Vue 驱动的自定义主题系统](https://vuepress.vuejs.org/zh/guide/custom-themes.html)
- [自动生成 Service Worker](https://vuepress.vuejs.org/zh/config/#serviceworker)
- [Google Analytics 集成](https://vuepress.vuejs.org/zh/config/#ga)
- [多语言支持](https://vuepress.vuejs.org/zh/guide/i18n.html)
- 默认主题包含：
  - 响应式布局
  - [可选的主页](https://vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5)
  - [简洁的开箱即用的标题搜索](https://vuepress.vuejs.org/zh/default-theme-config/#%E5%86%85%E7%BD%AE%E6%90%9C%E7%B4%A2)
  - [Algolia 搜索](https://vuepress.vuejs.org/zh/default-theme-config/#algolia-%E6%90%9C%E7%B4%A2)
  - 可自定义的[导航栏](https://vuepress.vuejs.org/zh/default-theme-config/#%E5%AF%BC%E8%88%AA%E6%A0%8F)和[侧边栏](https://vuepress.vuejs.org/zh/default-theme-config/#%E4%BE%A7%E8%BE%B9%E6%A0%8F)
  - [自动生成的 GitHub 链接和页面的编辑链接](https://vuepress.vuejs.org/zh/default-theme-config/#git-%E4%BB%93%E5%BA%93%E5%92%8C%E7%BC%96%E8%BE%91%E9%93%BE%E6%8E%A5)

相比与 `Nuxt`、 `Hexo`、`Jekyll`、`Docsify`、`GitBook` 等工具，`VuePress` 在不同方向，都拥有着巨大优势，并且仍在开发更新当中；如果你有搭建个人博客、技术文档的需求，那么 `VuePress` 将是超棒的选择。

## 附加功能

- 添加基于 `Github Issue` 的评论功能(相当于内置 `Gitalk`)；只需修改 **.vuepress/themeConfig.js** 文件中 `comment` 字段配置即可；具体字段含义，可参见[Gitalk Options](https://github.com/gitalk/gitalk#options)；
- 有添加 `element-ui` 依赖，以方便编写常用组件；此项目中，内置除了评论组件外，还有 `Advertisement`（广告）、`ArticleList`（文章列表）、`Contact`（联系方式）等；
- 引入 `prettier`, `lint-staged`, `husky` 等依赖，从而使得写出更合乎‘规范’的 markdown；同时注入至 Git hooks，以确保你的代码库具有一致的风格；即使你正与团队合作编写，也不必为统一风格的问题而感到忧虑！

## 如何使用

可将项目 `Fork` 至自己的代码仓库，运行以下命令即可：

```bash
# 🎉 clone the project
git clone https://github.com/${your-github-id}/vuepress-web-app
cd vuepress-web-app

# ➕ install dependencies & start dev
yarn && yarn start
```

修改 `deploy.sh` 文件中的“自定义域名”以及“仓库路径”，运行如下命令，即可实现部署（默认发布至 `github pages`；如果暂不使用自定义域名，注释该行即可。

```bash
# 🚀 deploy to github-page
yarn deploy
```

## 相关链接

- [**倾城之链**](https://nicelinks.site?from=github)
- [About Me](https://about.me/nicejade?from=github)
- [个人博客](https://jeffjade.com/nicelinks?from=github)
- [静晴轩别苑](https://nice.lovejade.cn/?from=github)
- [吾意静晴轩](https://docz.lovejade.cn/?from=github)
- [天意人间舫](https://blog.lovejade.cn/?from=github)
- [新浪微博](https://weibo.com/jeffjade?from=github)
- [知乎主页](https://www.zhihu.com/people/yang-qiong-pu/)
- [简书主页](https://www.jianshu.com/u/9aae3d8f4c3d)
- [SegmentFault](https://segmentfault.com/u/jeffjade)
- [Twitter](https://twitter.com/nicejadeyang)
- [Facebook](https://www.facebook.com/yang.gang.jade)

| 微信公众号 | 前端微信群 | 推荐 Web 应用 |
| --- | --- | --- |
| 😉 静晴轩 | ✨ 大前端联盟 | 🎉 倾城之链 |
| ![静晴轩](https://image.nicelinks.site/qrcode_jqx.jpg) | ![倾城之链](https://image.nicelinks.site/wqycx-weixin.png?ver=1) |<img src="https://image.nicelinks.site/nice-links.png" width="300px" alt="倾城之链"></img>|

## 许可执照

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, [nicejade](https://about.me/nicejade)

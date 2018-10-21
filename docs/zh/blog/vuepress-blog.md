---
title: 静晴轩别苑
lang: zh-CN
datetime: 2018-08-08
meta:
  - name: description
    content: 回顾这些年，所搭建的那些个人博客(基于 Hexo、Jekyll、VuePress、Docz 等)，以及体验过的写作分享平台(如：博客园、简书、微信公众号等)。
  - name: keywords
    content: 个人博客,Hexo,Jekyll,VuePress,Docz,简书,博客园
---

# 静晴轩别苑

[静晴轩别苑](https://nice.lovejade.cn)，由 `VuePress` 所驱动；部署于 `Github Page`；采用 `Google Analytics` 作为分析方案；支持 `Pwa`，如添加 Icon 到主屏幕，缓存页面支持离线访问等。

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

---

::: tip Updated@18-09-12  
早前在[晚晴幽草轩 | AboutMe](https://jeffjade.com/about-me/)中就有提到，关于博客评论系统的一路折腾历程；从`多说`，转战`网易云跟帖`，又尝试使用 `Gitment`，最终选择了 `Gitalk` 的过程。不支持评论的博客，是没有灵魂的，所以也为此基于 `Vuepress` 的最新博客，注入了评论；鉴于在发布是采用服务端渲染，所以直接使用 `Gitalk` 插件，会存在问题；因此有参考 [vuepress-theme-yubisaki](https://github.com/Bloss/vuepress-theme-yubisaki) 将其以组件形式内置进项目；后续考虑集成更多功能，使得此博客可以更加丰富而多彩。  
:::

<Advertisement />

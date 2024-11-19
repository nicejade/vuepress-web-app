---
title: 如何为项目编写良好 README
lang: zh-CN
datetime: 2020-01-09
meta:
  - name: description
    content: README，它是别人对项目了解、印象的第一来源；尤其是针对开源项目，相当之重要：好比颜值之于一个人，主页之于一个公司；但很多项目并未重视这一点；各种仓库，浩如烟海，没有简洁、明晰的介绍，教人如何耐心去看？本篇文章的存在，即是为了改善这种情况。它将指导您如何写出一篇友好、易读的 README ，同时提供一键生成专业 README（模版）的工具，从而为广大开发者，解决如何书写良好 README 之烦忧；同时为诸多阅读者，缓解没有清晰 README 一窥项目主旨的苦恼。
  - name: keywords
    content: README, Github, npx, 一键生成
---

README，它是别人对项目了解、印象的第一来源；尤其是针对开源项目，相当之重要：好比颜值之于一个人，主页之于一个公司；但很多项目并未重视这一点；各种仓库，浩如烟海，没有简洁、明晰的介绍，教人如何耐心去看？本篇文章的存在，即是为了改善这种情况。它将指导您如何写出一篇友好、易读的 README ，同时提供一键生成专业 README（模版）的工具，从而为广大开发者，解决如何书写良好 README 之烦忧；同时为诸多阅读者，缓解没有清晰 README 一窥项目主旨的苦恼。

## 一键生成 README.md

先前在了解 [npx](https://www.jeffjade.com/2019/12/11/160-how-to-use-npm-npx-tutorial/) 相关功能时候，有特地在 Github Gist 上做了一个工具：[Generate a good README](https://gist.github.com/nicejade/406f154e882a836de1b2e12d02b84aab)，如果您的电脑已经安装 Node(version >= 5.2.0)，那么即可通过一条命令，快速生成一个良好 README，只需对其中具体内容做下修改即可。

```
# 默认英文 README
npx https://gist.github.com/nicejade/406f154e882a836de1b2e12d02b84aab

# 生成中文 README
npx https://gist.github.com/nicejade/406f154e882a836de1b2e12d02b84aab zh
```

---

## 顶部信息

显而易见，**Logo**、**标题**、**简短描述**，对于项目是必要的；它应该位于 README 顶部，且居中显示；除此之外，还可以添加**徽章**（Badge），对项目进行标记和说明，这些好看的小图标，不仅简洁美观，而且清晰易读，您可以在这里链接更多信息，这有助于更好向他人展示自己的项目；正在维护的 [nicejade/markdown-online-editor](https://github.com/nicejade/markdown-online-editor) 项目，就添加有以下徽章：

<div align="center">  
 <a href="https://github.com/nicejade/markdown-online-editor">  
 <img src="https://img.shields.io/github/license/nicejade/markdown-online-editor.svg" alt="LICENSE">  
 </a>  
 <a href="https://site.lovejade.cn/post/5c16083e819ae45de1453caa">  
 <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="Prettier">  
 </a>  
 <a href="https://www.jeffjade.com/2019/05/31/155-arya-markdown-online-editor/">  
 <img src="https://img.shields.io/badge/chat-on%20blog-brightgreen.svg" alt="Arya - 在线 Markdown 编辑器">  
 </a>  
 <a href="https://v2ex.com/t/623128">  
 <img src="https://img.shields.io/badge/Chat-on%20v2ex-brightgreen.svg" alt="Chat On V2ex">  
 </a>  
 <a href="https://hacpai.com/article/1558270349379">  
 <img src="https://img.shields.io/badge/Chat-on%20hacpai-brightgreen.svg" alt="Chat On Hacpai">  
 </a>  
 <a href="https://weibo.com/aryamarkdown">  
 <img src="https://img.shields.io/badge/WeiBo-aryamarkdown-red.svg?style=flat" alt="Arya - 在线 Markdown 编辑器">  
 </a>  
 <a href="https://aboutme.lovejade.cn/?utm_source=github.com">  
 <img src="https://img.shields.io/badge/Author-nicejade-%23a696c8.svg" alt="Author nicejade">  
 </a>  
</div>  
  
如果您习惯使用中文，但项目又是国际化的，那不妨考虑以英文来书写 README，这似乎更有逼格（毕竟代码也是英文）；但为人性化考量，也应该提供其他语言版本 README，可以在**徽章**之下，添加网页跳转链接。

![如何为项目编写良好 README](https://user-images.githubusercontent.com/15773463/72075141-20cc6600-332e-11ea-8829-b42cdf61d12b.png)

## 目标与哲学

为您设计的项目，写下初衷、理念和目标。对创建和维护项目背后的动机，作简短的阐述，这应该可以解释为什么该项目存在。

## 先决条件

说明用户在安装和使用前，需要准备的一些先决条件，譬如：

您需要安装或升级 [Node.js](https://nodejs.org/en/)（> = `8。*`，Npm 版本 >= `5.2.0`，[Yarn](https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/) 作为首选）。

## 安装

```bash
npm i
```

在特定的生态系统中，可能存在一种通用的安装方式，例如使用 Yarn，NuGet 或 Homebrew。但是，请考虑是否有可能正在阅读 README 的人是新手，并且需要更多指导。

## 用法

```bash
npm start
```

列举如何使用示例，并尽可能显示预期的输出。内联您可以演示的最小用法示例很有帮助，同时提供指向更复杂示例的 Wiki 链接（如果它们太长而无法合理地包含在自述文件中）。

## 功能支持（可选）

您可以用列表的形式，展示项目现在已经支持的功能或特性，这有助于他人对项目存在的价值，做更深一步了解。

## 屏幕截图（可选）

包括 logo / demo 截图等。

## 支持（可选）

告诉人们他们可以去哪里寻求帮助。它可以是 issue 跟踪器，聊天室，电子邮件地址等的任意组合。

## 测试（可选）

```bash
npm test
```

用代码示例描述并展示如何运行测试。

## 路线图（可选）

如果您对将来的发行版有任何想法，最好在 README 文件中列出它们。

## 贡献（可选）

欢迎提出请求。对于重大更改，请先打开一个 issue，以讨论您要更改的内容。请确保适当更新测试。

## 作者和致谢（可选）

向那些为该项目做出贡献的人表示感谢。

## 执照

[MIT](http://opensource.org/licenses/MIT)

版权所有 (c) 2020-至今，[您的名字](you-website-url)。

## 项目状态（可选）

如果您没有足够的精力或时间来完成项目，请在 README 文件的顶部添加注释，指出开发速度已减慢或完全停止。可能有人会选择 fork 您的项目，或者，以维护者或所有者的身份自愿加入，从而使您的项目继续进行下去。您也可以明确要求维护者。

于深圳.福田 @2020.01.09

> 原文首发于个人最新博客：[如何为项目编写良好 README | 静轩之别苑 静轩之别苑](https://quickapp.lovejade.cn/how-to-write-a-good-readme-for-your-project/)。

<ArticleList />
<br>
<br>
<br>
<Advertisement />

### 您可能感兴趣的文章

- [如何快速删除 Git 仓库新增修改](https://www.lovejade.cn/zh/article/how-to-quickly-delete-git-repository-new-changes.html)
- [Npm vs Yarn 之备忘详单](https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/)
- [Git 常见问题及解决办法](https://quickapp.lovejade.cn/git-common-problems-and-solutions/)
- [为高效而生：Arya Jarvis](https://www.jeffjade.com/2019/08/25/156-arya-jarvis-born-for-efficiency/)
- [Arya - 在线 Markdown 编辑器](https://www.jeffjade.com/2019/05/31/155-arya-markdown-online-editor/)
- [Prettier 插件为更漂亮快应用代码](https://www.jeffjade.com/2019/02/02/150-prettier-quickapp-plugin/)
- [基于 Puppeteer 构建简易机器人](https://www.jeffjade.com/2019/06/14/156-puppeteer-robot/)

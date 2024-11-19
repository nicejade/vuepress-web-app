---
title: 为高效而生：Arya Jarvis
lang: zh-CN
datetime: 2019-09-07
meta:
  - name: description
    content: 荀子在《劝学》曰：君子生非异也，善假于物也。对于重复而精确性的事物，理想的目标是：有贴心工具加以协助，使得可以用更便捷的方式处理；Github 创建仓库：ARYA JARVIS，即是为此而做的尝试 ── 她旨在为开发人员节省更多时间、精力以及体力。而此篇文章的存在，介绍 ARYA JARVIS 的同时，也分享下关于对善假于物的理解。
  - name: keywords
    content: Arya Jarvis, 一键获取, 美化代码，获取 ip, 一键查看端口占用, 构建本地 Web 服务器
---

荀子在《劝学》曰：**君子生非异也，善假于物也**。对于重复而精确性的事物，理想的目标是：有贴心工具加以协助，使得可以用更便捷的方式处理；Github 创建仓库：[ARYA JARVIS](https://github.com/nicejade/arya-jarvis)，即是为此而做的尝试 ── 她**旨在为开发人员节省更多时间、精力以及体力**。而此篇文章的存在，介绍 [ARYA JARVIS](https://github.com/nicejade/arya-jarvis) 的同时，也分享下关于对**善假于物**的理解。

![为高效而生：Arya Jarvis](https://image.lovejade.cn/arya-jarvis.jpg)

原文首发于个人主博客：[为高效而生：Arya Jarvis](https://www.jeffjade.com/2019/08/25/156-arya-jarvis-born-for-efficiency/)。

**温馨说明**：鉴于会在后续业余时光中，为 [Arya Jarvis](https://github.com/nicejade/arya-jarvis) 集成更多功能，以提升使用体验，而现在利用博文这种形式的介绍，未免有些欠佳；因此有采用 [docsify](https://site.lovejade.cn/post/5d4fec8c4c0a2404cc79f97a) 塑造一文档 ── [ARYA JARVIS DOC](https://arya.lovejade.cn/#/zh-cn?utm_source=jeffjade.com)，用以承载 `arya jarvis` 的使用说明，从而能更好服务用户；如您有任何建议或意见，欢迎留言反馈（与此同时，还维护有[更多工具作品](https://www.lovejade.cn/zh/works/)，如感兴趣，请移步试用）。

## 故事起源

就目前工作而言，比较多涉及的是 Web 前端这块。为更快能启动一个前端项目，抑或是做其他处理如：测试、构建、发布等，通常做法是在 `package.json` 中配置 `scripts` 脚本命令；然而，在接触一个复杂或者新项目时，如过对 scripts 脚本命令不够了然，则会限制在终端操作的速度。通常的做法是用熟悉的编辑器，打开该文件看下，或者借助 `cat` 命令输出至终端加以查看。所以，很早之前就希望能有一种操作，可以一键以浏览之。久未遇到，也自然就产生了自己写一个的想法，这边是编写 `Arya Jarvis` 的初衷。

截止目前，Arya Jarvis 可以帮着做的事儿，已逐渐多了起来， 是时候可以将其先分享出来，希望有更多人可以一起使用 & 完善她。就如在 [Arya Jarvis README](https://github.com/nicejade/arya-jarvis) 中写到的，我个人是此工具的最忠实的用户；现在编写 Arya Jarvis 之时，也是用她本身来格式美化项目代码，感谢我自己在业余时间自己创造了她，我是如此的喜欢。

## 使用条件

[Node.js](https://nodejs.org/en/)（> = 8. \*），Npm 版本 5+（更推荐使用 [Yarn](https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/)。

## 下载安装

```bash
npm i arya-jarvis -g
# Or
yarn add global arya-jarvis
```

## 如何使用

如下两个代码美化相关功能，可以支持多种文件，譬如: `.js`, `.vue`, `.ux`, `.less`, `.scss`, `.css`, `.json`, `.md`, `.html`, `.qxml`, `.wxml`。

##### 💄 美化指定路径下的代码

```bash
arya prettier index.js
# 👏 Or Use Alias
arya p ./src/**/**/*.js
# 👍🙌 Or Use Alias & Wildcard
arya p .
```

##### 🔬 监听并美化指定路径下的代码

```bash
arya watcher index.js
# 👏 Or Use Alias
arya w ./src/**/**/*.js
# 👍🙌 Or Use Alias & Wildcard
arya w .
```

值得一提的是，本项目代码在开发时，格式美化就使用 `arya w .` 命令。感谢我自己业余时间自己开发此了 `arya jarvis` ，我超级喜欢。

**温馨说明**：[Prettier](https://site.lovejade.cn/post/5c16083e819ae45de1453caa) 是一个有见识的代码格式化工具；使用它来美化，实在是再好不过，具体可以参见 [使用 ESLint ＆ Prettier 美化 Vue 代码](https://www.lovejade.cn/zh/article/beautify-vue-by-eslint-and-prettier.html)；曾多次为很多前端开发者安利 `Prettier`，却因各种原因，不被接纳 😇； 考虑到其配置可能略对某些人显复杂，也就诞生了一个想法：做一个工具，是开发者开箱即用，领略其中舒爽，可还有拒绝的理由？而如上两个命令即可对此想法的实践。针对微型或临时项目，此工具还是非常实用（对于中大型项目，建议自行在项目中配置）。

##### 🌍 用于快速构建本地 Web 服务器

```bash
arya server
# 👏 Or Use Alias
arya s
```

**温馨说明**：`arya s`，用于快速构建本地 Web 服务器，这是非常有用的功能；比如说，你想快速下载您电脑上资源至手机，那么即可在该资源目录下，运行 `arya s` 命令，就会以当前目录作为静态网站托管，建立一个 Server，并依据本地 IP（/电脑名）生成地址，只要手机端跟电脑在同一个网段下，即可访问下载；这里更贴心的是，会将对应地址生成**二维码**，并在控制台打印，用手机扫码即可访问。

实际上，这个功能有借助 [lws](https://github.com/lwsjs/lws) 来实现；它的功能当然是不止于上面表达的那一点，这对于开发人员来讲，尤为实用，这将会在后面不断迭代中，继续完善；也有打算出一个文档，以给出充分说明，敬请期待。

##### ⚡️ 找到您本地 IP 地址并打印出来

```bash
arya ip
```

**温馨说明**：对于获取本地 IP 这一诉求，无论是使用 Mac、Linux 还是 Windows 用户，如果没有特殊配置，也是颇为麻烦的；即便在控制台使用 `ipconfig` or `ifconfig`，得到的结果也是需要一番筛选；而使用 `arya ip` 则可以轻松获取。

##### 👀 查看占用指定端口的程序

```bash
arya port 8080
# Or
arya port 8081
```

**温馨说明**：同样，在几个不同的平台上，想知晓某个端口（如：8080）被哪个程序所占用，也是需要一番周章的；在 Windows 系统，可以使用 `netstat` 命令，而在其他两个平台，大多数可能会选择 `lsof`；但记忆与操作起来毕竟麻烦，而使用 `arya` 相对就方面很多，可以通过以下命令做下对比：

```bash
# 适用于 Windows 系统
netstat -ano | findstr 8080

# 适用于 Mac Linux 系统
lsof -i tcp:8080

# 适用于 Mac Linux Windows 系统
arya port 8080
```

##### 📷 为指定文本生成二维码

```bash
arya qrcode "https://www.jeffjade.com/"
arya qrcode "晚晴幽草轩轩主"
```

**温馨说明**：此项目集成了[二维码生成器](https://github.com/soldair/node-qrcod)，可以很便捷在控制台，就根据命令，为指定文本生成二维码，并提供保存于本地的功能；这相比于要在网上搜索在线服务，要方便许多，从节省更多时间角度考量，用 `arya qrcode` 是更好的抉择。

##### 🚝 列出 package.json 中的脚本命令

```bash
arya ls
# 👏 Or Use Alias
arya l
```

**温馨说明**：正如前文在**故事起源**中所提及的那般，`arya ls` 这个命令是这个项目的初衷：只为方便知晓前端项目 package.json 中都存在哪些脚本，以方便更快运行。只是在迭代中，越发多的集成了更多普遍可以用到的功能，此功能的存在显得就不是那么闪耀；但，作为引发燎原之势的那一缕星光 🌟，将持久铭记，且常用之。

## 写于文章结尾

即便已入中年，仍然坚信，只要**主动折腾**，**勤于折腾**，**善于折腾**，相信总能将生活与人生，折腾成自己越发欢喜的模样，对于这近乎无休止的工作，亦是如此。[arya jarvis](https://github.com/nicejade/arya-jarvis) 仍在考虑植入更多有用的功能，如果您有任何需求，您可以告诉我，或在此基础上进行扩展。如果您在使用过程中遇到任何问题，您可以随时向我的反馈。祝：生活幸福，工作快乐。

## 相关链接

- [**倾城之链**](https://site.lovejade.cn?utm_source=lovejade.cn)
- [About Me](https://about.me/nicejade?utm_source=lovejade.cn)
- [个人博客](https://jeffjade.com/nicelinks?utm_source=lovejade.cn)
- [幽居空谷轩](http://www.lovejade.cn?utm_source=lovejade.cn)
- [静轩之别苑](https://quickapp.lovejade.cn/?utm_source=lovejade.cn)
- [静晴轩别苑](https://nice.lovejade.cn/?utm_source=lovejade.cn)
- [吾意静晴轩](https://docz.lovejade.cn/?utm_source=lovejade.cn)
- [天意人间舫](https://blog.lovejade.cn/?utm_source=lovejade.cn)
- [新浪微博](https://weibo.com/jeffjade?utm_source=lovejade.cn)
- [知乎主页](https://www.zhihu.com/people/yang-qiong-pu/)
- [简书主页](https://www.jianshu.com/u/9aae3d8f4c3d)
- [SegmentFault](https://segmentfault.com/u/jeffjade)
- [Twitter](https://twitter.com/nicejadeyang)
- [Facebook](https://www.facebook.com/nice.jade.yang)

@2019-08-25 于东莞.长安 Last Modify：2019-09-07

---

### 您可能会感兴趣的文章

- [Arya - 在线 Markdown 编辑器](https://www.jeffjade.com/2019/05/31/155-arya-markdown-online-editor/)
- [Prettier 插件为更漂亮快应用代码](https://www.jeffjade.com/2019/02/02/150-prettier-quickapp-plugin/)
- [基于 Puppeteer 构建简易机器人](https://www.jeffjade.com/2019/06/14/156-puppeteer-robot/)
- [基于 Vue-Cli3 构建的脚手架模版](https://www.jeffjade.com/2019/01/13/146-awesome-vue-cli3-example/)
- [开箱即用的 Vue Webpack 脚手架模版](https://www.jeffjade.com/2018/05/20/140-vue-webpack-boilerplate-template/)
- [快应用开发资源、教程汇聚](https://www.jeffjade.com/2018/12/21/146-awesome-quickapp-resource-tutorial/)
- [快应用脚手架，为优雅而生](https://www.jeffjade.com/2018/11/11/145-quickapp-boilerplate-template/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [与时俱进版前端资源教程](https://www.jeffjade.com/2017/09/28/127-nice-front-end-tutorial/)

---
title: 高效开发 Web 单页应用解决方案
lang: zh-CN
datetime: 2018-05-20
meta:
  - name: description
    content: 通过介绍一款开箱即用的 Vue Webpack 脚手架模版，以探讨“如何更高效开发单页面应用”；其中，对于构建中大型 Vue 项目，根据不断积淀的开发经验，提供创立项目基础、演示、大量的实践以及参考性建议；并且将保持持续性更新优化。
  - name: keywords
    content: Vue,Webpack,vue-cli3,Boilerplate,开箱即用,高效开发,SPA,脚手架
---

<!-- more -->

于 2017 年初，有在 `Github` 建立并维护一个项目：[Vue Boilerplate Template](https://github.com/nicejade/vue-boilerplate-template)，欲成就一款开箱即用 `Vue` + `Webpack` 的脚手架模版；其目标与宗旨是：根据以往经验提供一些参考，对于如何构建中大型 `Vue` 项目。这蛮久以来，有坚持维护更新，各项主要依赖库，基本都保持着同步升级；记载这篇文章，即是对关于它的设计做下更全面的阐述，以起到项目 `Wiki` 的作用；同时探讨“如何更高效开发单页面应用”。

![题图来自 picjumbo.com](http://upload-images.jianshu.io/upload_images/207604-a54643052962985d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

::: tip (Update@2018-08-19)  
经过多时的酝酿，Vue 终于(2018/08/12)发布了正式发布 [Vue CLI 3.0](https://cli.vuejs.org/)，它也将为很多开发者带来期待已久的新特性。相比于之前版本，它经历了很大程度上的重构，目的是：尽可能减少现代前端工具在配置上的烦恼，尤其是在开发者将多个工具混合使用时；尽可能在工具链中加入最佳实践，并让其成为 `Vue` 应用程序的默认实践。除了具有丰富的内置功能之外，还有无需 Eject 即可配置、可扩展的插件系统、完整的图形用户界面 (GUI）、Instant Prototyping、Modern Mode 等功能与特性。还未使用的朋友们，可以开始尝鲜了；如果你想更为便捷的体验，这里开源了 [Awesome Vue-Cli3 Example ](https://github.com/nicejade/awesome-vue-cli3-example)可供参考，她除了集成了此开箱即用模板的大部分功能，此外还将保持探索、持续更新。  
:::

::: tip (Update@2018-06-15)  
经过多时的发展，`vue-cli3` 已经发布 `RC` 版本；在这个版本，它集成了更多丰富的功能，以及更多默认配置，可通过附带的图形用户界面创建、开发和管理项目。可查看 [Vue CLI](https://cli.vuejs.org/) 文档，查看更多相关信息。[awesome-vue-cli3-example](https://github.com/nicejade/awesome-vue-cli3-example)，是基于 `Vue-Cli3` 所搭建的 `Vue` 项目使用示例，旨在方便开发人员更便捷地使用 `Vue-cli3`，并更高效合理地构建 `Web` 应用程序。如果您乐于追求更优质的开发体验，并敢于冒险，不妨一起来展望，`Vue` 项目新的打开方式。  
:::

---

### **关于此 [Vue、Webpack 脚手架模版](https://github.com/nicejade/vue-boilerplate-template)**

这是一个用以开发 Web 单页应用的脚手架项目；谨以 `Vue` 为开发框架、`Webpack` 为构建工具，`element-ui` 为 UI 组件库；同时注入了 `vue-router`、`vuex`、`vue-i18n`，用以支持单页应用，复杂的状态管理，以及多语言设定；另外依赖了 `lodash`、`dayjs`、`js-cookie` 等开发工具库，以提升页面开发效率。当然，在实际项目中，可根据实际需要自由移除或者修改。在此项目中提供了两个演示页，您可以[在线查看](https://blog.lovejade.cn/vue-boilerplate-template/)。

对于如何使用这款脚手架模版，例如`先决条件`，`用法`等在 [README](https://github.com/nicejade/vue-boilerplate-template/blob/master/README.md) 中已做说明，此处就不在赘述。此脚手架模版，是基于 [vue-cli](https://github.com/vuejs/vue-cli) 所构建，那时 `vue-cli` 版本还在 **2.\***；再有就是，主张项目是可以**开箱即用**，像 `vuex`、 `eslint`、`sass` 等都默认引入（其好处在于：可以清晰较为全套的项目设定；倘若无需多语言，可在此基础之上做减法，移除 `vue-i18n` 及相关代码即可；二来，也无需编写些额外代码，来支持用户选择性注入依赖，以节省精力，开发更多有价值的功能；三来，这也算是一种**道**的提倡，像 `eslint`、 `pre-commit` 等对于团队项目，都是极为必要的存在，默认引入，也算理所应当）；所以其整个目录结构是这样：

```bash
├── LICENSE --------------- 项目许可证（MIT License）文件
├── build ----------------- 存放项目构建相关文件
├── config ---------------- 存放项目构建相关配置文件
├── dist ------------------ 存放项目构建后的输出文件
├── index.ejs ------------- 项目起始文件 (/index.html)
├── package-lock.json ----- 记录用 npm 修改依赖操作的锁文件
├── package.json ---------- npm 的 package.json 处理细节
├── src ------------------- 项目程序主代码文件夹
│   ├── App.vue ----------- 应用程序的主组件
│   ├── assets ------------ 存放资源：样式、图片、字体
│   ├── components -------- 项目自定义的公共组件
│   ├── constants --------- 项目自定义的公共常量
│   ├── filters.js -------- 项目自定义的 vue 过滤指令
│   ├── global.js --------- 协助分担 main.js 工作
│   ├── helper ------------ 项目自定义辅助各类工具
│   ├── locales ----------- 存放(公用)多语言配置
│   ├── main.js ----------- 项目代码的人口文件
│   ├── mixins ------------ 存放 mixin 代码相关
│   ├── router ------------ 存放 & 处理路由相关
│   ├── store ------------- 存放 & 处理 Vuex 相关
│   └── views ------------- 存放项目页面代码
├── static ---------------- 静态的 assets(不被 webpack 处理)
├── test ------------------ 项目各类测试相关
└── yarn.lock ------------- 记录用 yarn 修改依赖操作的锁文件
```

### **项目背后的环境设定**

先从环境说起；众所周知，鉴于 `JavaScript` 的发展历史，随着其版本的不断更新，更多新语法和代码特性被引入进来，使得编写 JavaScript 体验持续迈向更好。虽然部分浏览器没有能提供很好的支持，但此脚手架已然引入 [babel](https://babeljs.cn/) 系依赖，您可以放心放心 `ES6` 甚至更超前版本，而不用担心造成兼容性问题。同样，对于 `CSS` 也是一样，这里已引入 `autoprefixer`，并作了相应设定，您可以放心使用新特性、预处理语言等，而不用关注浏览器供应商前缀。

### **代码及提交规则约束**

这是至关重要的，对于代码的设计和编写；因为：**代码首先是写给人，然后才是写给机器** —— 出自《代码大全》。在设计代码时候，为其赋予**可读性**而花费的时间和努力，绝对物有所值；然而，要求每位成员自觉保持代码统一质量/风格，这种事情的难度，不亚于靠一己之力去上青天。所以 `eslint` 系依赖，绝对是团队项目必装神器；并将其注入于 `Git` 的 `pre-commit` 钩子内，以强制约定尽可能统一代码风格；此时江山一统，方有可传万世之机。另外，对于代码的提交，也是同理，图一时之省心，而提交的无意义 `message`，这并不是好习惯；因为**当你回头再看，你会发觉所有错的事情，都发生在最对的时间里**。幸好的是，对于这些工作，此脚手架已经帮您做好；当然您可以根据团队整体喜好而作调整。

### **所提供的全局性方法**

对于代码的编写效率，也是尤为的重要；毕竟：“**天下武功，唯快不破**；即便说**轻功不表武功，但速度决定了你我の距离**”；更严肃的作证这个观点是：只有快速完成需求，才有时间去学习更多、或在关键点上作优化。故此，在此脚手架中，已将常用的工具、插件、方法，通过添加至 Vue 全局实例，以方便调用；譬如：通过添加至 `Vue.prototype`，或者全局 `mixin`(_minxns/globalMixin.js_) 以及过滤(_filters.js_)等；

```
import _ from '@helper/lodash.js'
import { $apis, $utils } from '@helper'

Vue.prototype.$_ = _
Vue.prototype.$apis = $apis
Vue.prototype.$utils = $utils
```

如上这般，您就不用在使用时候反复 `import`， 直接像这样 `this.$_.debounce` 使用即可，从而大幅度节省您的编写时间开支；对于其中 `$` 符号，是个人偏爱的标记，以方便知晓其是来自全局；当然，您可以修改为您所欢喜的记号。您可以看到在 `helper` 文件夹下，特意开辟出一个文件 `lodash.js`，用以优化对 `lodash` 的使用，同时也是为了方便使用；这在 [《Webpack 打包优化之体积篇》的 `尽量使用模块化引入`](https://jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/#%E5%B0%BD%E9%87%8F%E4%BD%BF%E7%94%A8%E6%A8%A1%E5%9D%97%E5%8C%96%E5%BC%95%E5%85%A5) 中有过详细叙述。同理，您可以对所引入的各类库，进行再次封装，以使得再项目中可便捷调用，同时可以统一修改、更替，而无需操作调用的地方。另外，值得一提的是对于 HTTP 请求相关的处理。

#### **更优雅的处理 Http 请求**

下面是一个上古时代关于处理 Http 请求的实例；以现在的视角来看，它显得有些极端，甚至有些不可思议，却是至今仍然屡见不鲜的玩法（即使用的是当下流行的 `MVVM` 框架，即便 Query.ajax 也是支持链式调用）；然而，不乏有勤劳的开发者，不厌其烦的写着类似的代码，这本身倒也没什么；但当交给别人去维护、或者去读的时候，容易造成身心上的创伤。

```js
$.ajax({
  type: 'GET',
  url: 'xxx/getYyyContent',
  data: { username: $('#username').val() },
  dataType: 'json',
  success: function(data) {
    const textContent = data.data.textContent
    $('#text-content').html(textContent)
  },
  error: function(error) {
    // Do something to handle Error
  },
  complete: function(error) {
    // 做额外的处理无论请求成功或失败
  }
})
```

**大道至简**，优秀的开发流程，一定是便于编写和维护！本脚手架引用类库 `axios` 和 `q`，并对其进行简单封装，以处理 Http 请求相关；使其能够支持链式调用，同时对返回数据统一处理，精简返回内容，使得在获取到最终结果处，可以尽可能简单，详见 `helper/ajax.js`；另外，推荐开发者将接口，按照功能模块规划，分门别类以存放至统一文件夹下，如 `helper/apis`；如此清晰明了，方便调用，且对于多人协作开发，又不相互响应，减少不必要的冲突。类似善用配置，以**表驱动法**的编程手法，应该活学活用，贯穿始终；具体更详细的陈述，可参见 [如何漂亮使用 Vue 之基础篇](https://jeffjade.com/2017/03/11/120-how-to-write-vue-better/#%E5%A6%82%E4%BD%95%E6%BC%82%E4%BA%AE%E4%BD%BF%E7%94%A8-Vue-%E4%B9%8B%E5%9F%BA%E7%A1%80%E7%AF%87)。倘若以此法来处理 Http 请求，那如上磨人的示例，即可修改为如下模样：

```js
const params = { username: this.form.username }
this.$apis.xxx
  .getYyyContent(params)
  .then(result => {
    this.textContent = result.textContent
  })
  .catch(error => {
    // Do something to handle Error
  })
  .fin(() => {
    // 做额外的处理无论请求成功或失败
  })
```

### **贴心的路由（Router）配置**

使用 `MVVM` 框架 + `*-router` 来创建单页应用，已成为一种主流。在此脚手架中，已将 `vue-router` 添加进来，并进行了处理；并附有示例：`router/routes/demo.js`；您可以自由的添加路由及页面映射，来丰盈您的应用程序；同时，您还能为其配置各种页面信息（如：标题、是否须权限验证等）。 对于路由配置，更为贴心的配置，在处理与**导航栏**(/侧边栏)相关部分。

在前后端分离的现代化 `Web` 应用中，`导航栏`配置一般由前后端共同作用：后端负责给予相关配置数据，前端则掌管数据与页面的映射；为了节省工作量，深度拷贝前端路由配置，递归遍历移除无需在`导航栏`展示项，再融合后端数据，即可组装出一套后台可配置的应用导航列表，而不用牵扯改动前端。当然，您可以根据业务需求，添加更多设定，使得程序拥有更佳的访问、维护体验。比如：为避免每次刷新界面，都发起请求导航栏数据，应将持久化存储（Eg：localStorage）等等。

### **完善的 Webpack 打包优化**

这是此脚手架一大亮点，即保持着对主流依赖库的更新及优化，如：`webpack`、`element-ui` 等。使用 `webpack` 来构建 Web 应用程序，如何使其呈现良好的构建速度、优化构建后包体积/文件数量、提升其运行效率等，是每位前端开发者都该去了解的。在这方面，也作了很多学习与尝试，并将些经验记载于：[Webpack 打包优化之体积篇](http://jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/) & [Webpack 打包优化之速度篇](http://jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed/)。关于其配置方案，参见 [Vue Webpack Config](https://github.com/nicejade/vue-boilerplate-template/blob/master/build/webpack.prod.conf.js)；当然，十分欢迎提出您宝贵的建议，协助进一步完善之。另外，值得一提的是，关于构建包的体积与文件数的平衡：避免造成体量很大或很小的包；对此，`Webpack` 方面也提供很多插件来辅助这件事，譬如：`LimitChunkCountPlugin`、`MinChunkSizePlugin`。鉴于 HTTP 工作机制，在不破坏按需加载的基础上，使得所构建出的 js 文件，数量尽可能少，文件又不过大(100kb ~ 500kb)是一个不错的选择，当然这里指的的是服务端开启 `gip` 压缩的情况下；如果是由前端负责开启 `gzip` 压缩，这个 Size 上限应该更低些为宜。除了外，考虑通过 `HTTP/2` 来对项目项目进行优化，是另一个纬度的解决方案，在此就不多做探讨。

### **支持渐进式 Web 应用程序**

渐进式 Web 应用程序（`PWA` ～ [Progressive Web App](https://developers.google.com/web/progressive-web-apps/)）：它的存在，使得在网络上提供惊人用户体验的新方式，它为构建高质量的渐进式 Web 应用程序，提供了令人难以置信的优势，可以轻松取悦用户，增加参与度并增加转化次数。所以这已经成为了现代化 Web 应用程序必做工作。本脚手架对 `PWA` 的支持，选择参考了 [vuejs-templates/pwa](https://github.com/vuejs-templates/pwa)，其中用到 [sw-precache-webpack-plugin](https://github.com/goldhand/sw-precache-webpack-plugin) 插件协助生成 `service-worker.js`。鉴于 `serviceWorker` 本身的些许限制，此模版默认不引入此功能，取消[此行被注释的代码](https://github.com/nicejade/vue-boilerplate-template/blob/master/index.ejs?#L42)，即可打开该功能。关于这部分更多，可参见[优化网页 Performance、Progressive、Accessibility、Best Practices](https://github.com/nicejade/nicelinks-vue-client/issues/24) 相关提交 & 陈述。推荐您使用 `Lighthouse` 谷歌浏览扩展，来对自己的 Web 应用跑分，以查纠项目中潜存的可优化点。

需要补充说明的是：您可以在项目全局搜索 `~@CHANGE@~` 关键字，这是对于可变化设定的标记；您可以根据项目实际所需，对该部分进行修改。

### **脚手架提供的默认命令**

您知道，`npm`（`yarn` 亦同）允许在 `package.json` 文件里面，使用 `scripts` 字段定义脚本命令。它支持通配符、变量、钩子、外部传参、支持并发 & 异步执行等等；所以，完全可以借助 `npm script`，打造属于自己的高效工作流。在此脚手架中，默认只是些提供了简单命令，您可以在自己的脚本中，结合您欢喜的工具，如 `gulp`、`bash` 等，来塑造属于您的高效工作流。下面对默认命令略作说明：

| npm (yarn) 命令    | 功能描述                                                                                |
| :----------------- | :-------------------------------------------------------------------------------------- |
| yarn start         | 运行项目以开发环境，是 `yarn run dev` 的快捷版方式                                      |
| yarn run build:dll | 构建出 `vendor.dll.js`，依据 `webpack.dll.conf.js`                                      |
| yarn run build     | 构建项目，以生产环境                                                                    |
| yarn run jarvis    | 运行 `webpack-jarvis`（非常智能的基于浏览器的 Webpack 仪表板）在 http://localhost:1337/ |
| yarn run analyz    | 对所构建的包进行可视化呈现，在 http://localhost:8888/                                   |
| yarn run preview   | 对项目进行在本地预览，以生产环境，在 http://localhost:3000/                             |
| yarn run pretest   | 对生产环境所构建的包进行简单的“预测”：在 http://localhost:3000/                         |

### **使用此脚手架的线上项目**

- [「倾城之链｜ NICE LINKS」](https://site.lovejade.cn?utm_source=vue-webpack)：一个开放平台，旨在云集全球优秀网站，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

### **项目待优化的那些方向**

- **完善[单元测试](https://cn.vuejs.org/v2/guide/unit-testing.html)相关**；在代码层面，做好单元测试，有助于提升代码质量，从而使得项目质量、后续维护都可以更好。考虑将在之后的版本中，参考 [Vue Test Utils](https://vue-test-utils.vuejs.org/zh-cn/) 对这块儿进行完善。
- **SEO 优化相关**；这是多方都应该考虑的问题；但在项目设计层面，可以考虑[服务端渲染](https://cn.vuejs.org/v2/guide/ssr.html)来极大提升 SEO （如：[Nuxt](https://github.com/nuxt/nuxt.js)）；但这对于已经处于开发阶段的项目，涉及需要更多的调整，相比于其他的可选方案。[「倾城之链｜ NICE LINKS」](https://site.lovejade.cn?utm_source=vue-webpack) 是基于 [prerender](https://github.com/prerender/prerender)，在 `nginx` 层面，针对浏览器作预渲染以优化 SEO，现在看起来效果可以。 另外可以选择的方案是运用 [Prerender SPA Plugin](https://github.com/chrisvfritz/prerender-spa-plugin)，在 `Webpack` 构建项目时预渲染静态 html 内容，；在未来版本中，会考虑针对这块儿给出一个相对折中的方案。

* **塑造更便捷的前端开发环境**；这里所言的`开箱即用`，仍需要在您已经安装高版本 `node` 的前提；这对于新晋开发着并不是友好；如果，您使用的是基于 `windows` 系统的环境，并不能保证这套脚手架可以很顺利运行(😌)；因此，有考虑借助 `Docker` 等工具，优化前端开发环境，使其可以更新便捷，而无需依赖更多。

### **写在最后的结语**

对于分享，您的海量包容和意见建议，是促进彼此都能**更上一层楼**的关键。输出文字，总是比写代码辛苦的多；在付出多时的敲敲打打之后，希望可以得到您宝贵的意见和建议，使得此脚手架可以更进一步，以惠及到更多的人。最后，推荐您体验个人最新作品 ～ [`「倾城之链｜NICE LINKS」`](https://site.lovejade.cn?utm_source=vue-webpack)： **倾心缔造，痴心为你**，希望您会喜欢。

@2018-05-13 于深圳.南山 Last Modify： 2018-05-20

---

### **你可能感兴趣(/有用)的文章：**

- [如何写一手漂亮的 Vue](https://jeffjade.com/2017/03/11/120-how-to-write-vue-better/)
- [Webpack 打包优化之速度篇](https://jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed/)
- [Webpack 打包优化之体积篇](https://jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/)
- [Npm vs Yarn 之备忘详单](https://jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/)
- [『引』最全前端资源汇集](https://jeffjade.com/2016/03/30/104-front-end-tutorial/)
- [与时俱进版前端资源教程](https://jeffjade.com/2017/09/28/127-nice-front-end-tutorial/)
- [晚晴幽草说之-前端札记](https://jeffjade.com/2017/10/09/130-front-end-notes/)
- [所历前端“姿势”更替记(其一)](https://jeffjade.com/2016/05/14/106-front-end-learning-record/)
- [墙裂推荐文章集锦](https://jeffjade.com/2015/02/01/2015-02-01-recommended-article/)

<Advertisement />

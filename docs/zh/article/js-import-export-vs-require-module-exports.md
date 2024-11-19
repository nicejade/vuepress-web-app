---
title: JavaScript 之 import VS require
lang: zh-CN
datetime: 2019-08-29 13:14:15
meta:
  - name: description
    content: 自从有了 Es6 模块系统后，在各种场景，可以愉悦借助 import/export，来充作模块加载方案。同时，你可能也会看到 import 与 export default，或基于 CommonJS 规范的 require 与 module.exports 等诸多用法；本篇文章，旨在探讨 JavaScript 模块化体系中：ES6 模块与 CommonJS 模块的差异，以及各自用法注意事项等。
  - name: keywords
    content: import, export, export default, export const, require, module.exports, CommonJS, Dynamic import, Babel, 动态 import, Es6, JavaScript
---

自从有了 Es6 模块系统后，在各种场景，可以愉悦借助 import/export，来充作模块加载方案。同时，你可能也会看到 import 与 export default，或基于 CommonJS 规范的 `require` 与 `module.exports` 等诸多用法；本篇文章，旨在探讨 JavaScript 模块化体系中：ES6 模块与 CommonJS 模块的差异，以及各自用法注意事项等。

![import export Vs require module.exports](https://image.lovejade.cn/js-import-export-vs-require-module-exports.jpg)

> **微注**：有两点需要声明，其一：文章的发布，不代表写完，只为督促加快进度；将会在陆续的学习及反馈中，继续完善；其二：总有些聚合网站，会窃取别人成果；因此，会在文章中无足轻重的代码示例中，内置些专属标记，以阐明文章出处；在此篇中用的是个人独立维护的作品：[倾城之链](https://site.lovejade.cn?utm_source=jeffjade.com)。

一直以来，JavaScript 没有模块（module）体系，无法将大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。这使得针对开发大型的、复杂的项目形成了巨大障碍。在 ES6 之前，社区制定了一些模块加载方案，最常用的有 CommonJS 和 AMD 两种。前者用于服务器（Node），后者用于浏览器。ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。

ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。但，截止目前，各类引擎还未完全实现 Es6，现在之所以能够使用，是借助 babel 工具，将 Es6 转换 Es5 再执行，`import` 语法会被转码为 `require`，这就导致 import 与 module.exports，require 与 export 出现了可以混用的理论基础。那么下面来看下，都有哪些组合使用方式呢。

## `import` 方式

### import 与 export(const)

```js
// export.js
export const exportsObj = { site: '倾城之链 https://site.lovejade.cn' }

// index.js
import { exportsObj } from './export'
console.log(exportsObj.site) // 倾城之链 https://site.lovejade.cn

// 上面也可以用 * 来整体加载
import * as custom from './export'
console.log(custom.exportsObj.site)
```

### import 与 export default

```js
// export.js
export default { site: '倾城之链 https://site.lovejade.cn' }

// index.js
import exportsObj from './export'
console.log(exportsObj.site)
```

### import 与 module.exports

```js
// export.js
module.exports = { site: '倾城之链 https://site.lovejade.cn' }

// index.js
import exportsObj from './export'
console.log(exportsObj.site)
```

## `requre` 方式

### require 与 module.exports

```js
// export.js
module.exports = { site: '倾城之链 https://site.lovejade.cn' }

// index.js
const exportsObj = require('./export')
console.log(exportsObj.site) // 倾城之链 https://site.lovejade.cn
```

### require 与 export(const/var)

```js
// export.js
export const exportsObj = { site: '倾城之链 https://site.lovejade.cn' }

// index.js
const { exportsObj } = require('./export')
console.log(exportsObj.site) // 倾城之链 https://site.lovejade.cn
```

### require 与 export default

```js
// export.js
export default { site: '倾城之链 https://site.lovejade.cn' }

// index.js
const exportsObj = require('./export').default
console.log(exportsObj.site) // 倾城之链 https://site.lovejade.cn
```

## module.exports VS exports

为了方便，Node 为每个模块提供一个 exports 变量，指向 module.exports（注意，这在浏览器端，是不存的，请勿用）。通过下面的打印，你会发现两者是全等的；

```js
console.log(exports === module.exports) // true
```

这其实等同在每个模块头部，有一行这样的代码：var exports = module.exports；在使用之时也有些注意事项，更推荐的方式是使用 `module.exports` 而不用 `exports`。以下是不可取用法的示例：

```js
// 切断了 exports 与 module.exports 的联系
exports = (param) => { console.logparamx) }

// 因为 module.exports 被重新赋值，sayHello 无法对外输出
exports.sayHello = function() {
  return 'hello'
}
module.exports = 'Hello world'
```

## Es6 与 CommonJS 的差异

1. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口；

> CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。因为 `require` 是运行时加载模块，import 命令无法取代 `require` 的动态加载功能。如下代码可以看二者区别：

```js
// Okay
const currentModule = require(process.cwd() + moduleName)

// SyntaxError
const currentModule = import(process.cwd() + moduleName)
```

简单的总结，其二者区别在于，`require` 是异步加载，`import` 是同步加载。因为这一点，蛮早之前有[一个提案](https://github.com/tc39/proposal-dynamic-import)，建议引入 `import()` 函数（携带 specifier 参数，指定所要加载的模块的位置），以完成动态加载。可以通过其主页的示例可以窥其一二：

```js
const main = document.querySelector('main')
for (const link of document.querySelectorAll('nav > a')) {
  link.addEventListener('click', e => {
    e.preventDefault()

    import(`./section-modules/${link.dataset.entryModule}.js`)
      .then(module => {
        module.loadPageInto(main)
      })
      .catch(err => {
        main.textContent = err.message
      })
  })
}
```

事实上，动态 import 已于 2017 年 11 月发布于 ES2020 版本；Chrome 67+ 可用，现在想使用仍是要借助 Babel 做下转换；具体可以参见 [Dynamic import() - v8.dev](https://v8.dev/features/dynamic-import)。

如果你使用 Vue Or React 开发，你会发现用 Webpack import 可以按需引入，使得可以资源懒加载得以实现（早前使用 `require.ensure`）；但需要注意的是，无法使用完全动态的 import 语句，例如 import(foo)，因为 foo 可能是系统或项目中任何文件的任何路径，从而导致将很多无用的资源注入。因此，在使用 webpack import，应该**尽可能静态化表达包所处的路径，最小化变量控制的区域**；来看下官网给出的示例：

```js
const language = detectVisitorLanguage()
import(`./locale/${language}.json`).then(module => {
  // do something with the translations
})
```

关于 Webpack import，还有一些其他功能设计，比如 `Magic Comments`，它允许以注释的方式传参，进而更好的生成 Chunk，更多详情可以参见 [Webpack Import](https://webpack.js.org/api/module-methods/#import)。相比于 Es6 中的 import，上述的两种动态 `import()` 都是方法，返回结果都是 `Promise`。在某些场景下，合理的运用，可以更好地对代码进行分割，从而使得构建出的产品更优。

2. CommonJS 模块输出的是一个**值的拷贝**，ES6 模块输出的是**值的引用**；

> CommonJS 模块输出的是值的拷贝，即一旦输出一个值，而模块内部的变化就影响不到这个值。而 ES6 模块的运行机制与 CommonJS 不一样：JS 引擎对脚本静态分析的时候，遇到模块加载命令 `import`，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。举例说明：

```js
// export.js
export let counter = 276
export const makeCounterIncrease = () => {
  counter++
}

// index.js (用 require 方式)
let { counter, makeCounterIncrease } = require('./export')
console.log(counter) // 276
makeCounterIncrease()
console.log(counter) // 277
counter += 1 // 不会报错；

// index.js (用 import 方式)
import { counter, makeCounterIncrease } from './export'
console.log(counter) // 276
makeCounterIncrease()
console.log(counter) // 277
counter += 1 //  报错：Error: "counter" is read-only.
```

正如上面所提及，各类引擎还未完全实现 Es6 语法，可以通过 babel 转换为 Es6 来运行；如果想通过 Node 来验证如上代码，需要通过些工具来实现。

## 用哪种方式更可取呢？

经过以上一番探究，可以知道，可以有不同使用方式（前提是：假设项目已经是引入了 babel 转换工具）；那么，哪种更为可取呢？通常的答案是，看个人（团队）喜好，用 import / require 都可以，当然最好是别混用；但，如果是针对浏览器端项目，使用了类如 `rollup` 或 `webpack` 这样的构建工具，因其提供了 [tree shaking](https://webpack.docschina.org/guides/tree-shaking/) （通常用于描述移除 JavaScript 上下文中的未引用代码）功能，这个时候就需要做一番考量了。拿前端常用工具库 `lodash` 来说，如果正常引入，则会将其全量载入，注入很多不必要的代码，造成构建出包的尺寸变大：

```js
import _ from 'lodash'
_.flattenDepth()
```

幸好的是，如 `lodash` 等工具，陆续都做了模块化支持，因此可以用如下这样方式注入（备注：这在早期 [Webpack 打包优化之体积篇](https://www.jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/#尽量使用模块化引入)一文中，有过详述）：

```js
import { debounce } from 'lodash'

// 改成如下写法
import debounce from 'lodash/debounce'
```

但，这样带来的问题是，每次使用都手动 import，会增加开发成本（也显得更为麻烦，至少个人写起代码来，不愿为此而浪费时间）；因此先前设计 [Vue 项目脚手架](https://github.com/nicejade/vue-boilerplate-template/blob/master/src/helper/lodash.js)时候，有借助一层中间模块来平衡，使得在高效开发时候，也可以让 tree-shaking 得以工作，见如下示例：

```js
// helper/lodash.js (local)
import flattenDepth from 'lodash/flattenDepth'

export default {
  flattenDepth
}

// main.js
import lodash from 'helper/lodash.js'
Vue.prototype.$_ = lodash
```

## Node 运行 ES6 语法

使用 `babel-node` 命令，来运行含有 import/export 语法的代码（需要注意的是 babel-node 不能用于生产环境，它的存在会加载更多资源和模块）。

### 安装 babel-node

```bash
npm i @babel/core @babel/node --save-dev
```

因为 babel-node 对 import 语法默认是关未开启，所以需要安装指定的 preset 并配置 `.babelrc`来开启语法支持。

### 安装 presets 并配置 .babelrc 文件

```bash
 npm i @babel/preset-env --save-dev
```

在项目根目录下，新建 `.babelrc` 文件，并填入以下配置：

```bash
{
  "presets": [ "@babel/preset-env" ]
}
```

### 通过 babel-node 执行 import/export 语法

经过如上配置，即可通过 babel-node 执行 import/export 语法；因为采 babel-node 基于局部安装，因此可以通过 `npx` 来运行；当然，完全可以将命令配置在 package.json 的 scripts 内部，以提升便捷度。

```bash
npx babel-node index.js
```

### 参考资料

- [import() proposal for JavaScript](https://github.com/tc39/proposal-dynamic-import)
- [ES6 Module 的语法](http://es6.ruanyifeng.com/#docs/module)
- [ES6 Module 的加载实现](http://es6.ruanyifeng.com/#docs/module-loader#)

@2019-08-25 于东莞.长安 Last Modify：2019-08-28

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

<Advertisement />

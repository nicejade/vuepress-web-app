---
title: 如何优雅处理「快应用」数据请求
lang: zh-CN
datetime: 2019-01-20
meta:
  - name: description
    content: 查阅快应用开发文档，可以知道官方提供了数据请求接口；对于如何使用，文档中也给出了示例，但很显然，这在实际项目中，不够优雅且更不高效，所以需要对其进行再封装，使得可以大幅提升开发效率，同时也令整个代码优雅、便于维护。所以在此篇文章的存在，旨在于讨论下如何优雅处理快应用数据请求。
  - name: keywords
    content: 快应用,开发快应用,quickapp,快应用开发者,数据请求,fetch接口
---

查阅[快应用](https://site.lovejade.cn/post/5b5fb5bc615bf842b609105f)开发文档，可以知道官方提供了[数据请求](https://doc.quickapp.cn/features/system/fetch.html)接口；对于如何使用，文档中也给出了简单的说明和代码示例，但很显然，这在实际项目中，不够优雅且更不高效，所以需要对其进行再封装，使得可以大幅提升开发效率，同时也令整个代码优雅，以便于维护。所以在此篇文章的存在，旨在于讨论下[如何优雅处理「快应用」数据请求](https://quickapp.lovejade.cn/how-to-elegantly-handle-quickapp-request)。

![如何优雅处理快应用数据请求](https://image.lovejade.cn/quickapp-elegantly-fetch.jpeg)

> 备注： 本文最先发布于，基于 [Ghost](https://site.lovejade.cn/post/5c3f3151a5957e07a40b30ff) 构建的最新博客: [静轩之别苑](https://quickapp.lovejade.cn/how-to-elegantly-handle-quickapp-request/)。

> 为保证文中的代码，是直接拷贝就可以运行的，特有引用网络开源接口；需要备注说明的是，在[快应用](https://site.lovejade.cn/post/5b5fb5bc615bf842b609105f)使用接口，需要在 `manifest.json` 中，对所使用的接口进行声明；使用数据请求，就需要注入下面的声明：

```json
{ "name": "system.fetch" }
```

## 默认的低效率写法

```js
import $fetch from '@system.fetch'
$fetch.fetch({
  url: 'https://api.apiopen.top/singlePoetry',
  responseType: 'text',
  success: function (response) {
    const result = response.data
    console.log(`success response, code: ${result.code}, data: ${result.data}`)
  },
  fail: function (data, code) {
    console.log(`fetch handling fail, code = ${code}`)
  },
  complete: funtion (data, code) {
    console.log(`fetch handling complete, code = ${code}`)
  }
})
```

以上就是官方文档提供的上古 `jQuery` 时代的写法，冗长的代码，古老的回调式操作，以及对请求没有做任何必要的处理，如果这在项目中使用，对代码复用度无疑是零，从长期维护角度看，这样的代码就是导致痛苦的根源。虽然，示例代码这样写道，也无可厚非；但先入为主的模范作用，将对于诸多经验不够充足的开发者，起到错误的误导性引领。

## **改进后的用法**

```js
import $fetch from '@system.fetch'
$fetch
  .fetch({
    url: 'https://api.apiopen.top/singlePoetry',
    method: 'GET'
  })
  .then(response => {
    const result = response.data
    console.log(`success response, code: ${result.code}, data: ${result.data}`)
  })
  .catch(error => {
    console.log(`Something Error: ${error}`)
  })
```

其实，[快应用](https://site.lovejade.cn/post/5b5fb5bc615bf842b609105f)对部分接口方法调用，返回了 Promise 优化，其中就包括数据请求接口；所以，使用如上这种方式，至少代码显得不那么冗长而古老。但，数据请求相关代码，却依然没有得到复用，这就需要对其进行封装处理。

## **优化处理数据请求**

如果每次调用接口，都需要 import，外加指定 url，method 等参数，这无异是变相的浪费生命；大道至简，优秀的开发流程，一定是便于编写和维护！所以有必要将其统一封装，如下面所封装的代码（可放置在 `helpera/ajax.js` 路径下）：

```js
function requestHandle(params) {
  return new Promise((resolve, reject) => {
    $fetch
      .fetch({
        url: params.url,
        method: params.method,
        data: params.data
      })
      .then(response => {
        const result = response.data
        const content = JSON.parse(result.data)
        /* @desc: 可跟具体不同业务接口数据，返回你所需要的部分，使得使用尽可能便捷 */
        content.code === 200 ? resolve(content.result) : resolve(content.message)
      })
      .catch((error, code) => {
        console.log(`🐛 request fail, code = ${code}`)
        reject(error)
      })
  })
}

/* 此处只是处于示例代码的可运行性，实际项目中，此方法最好予以封装 & 提取 */
function queryString(url, query) {
  let str = []
  for (let key in query) {
    if (typeof query[key] === 'object') {
      query[key] = JSON.stringify(query[key])
    }
    str.push(key + '=' + query[key])
  }
  let paramStr = str.join('&')
  return paramStr ? `${url}?${paramStr}` : url
}

export default {
  post: function(url, params) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params
    })
  },
  get: function(url, params) {
    return requestHandle({
      method: 'get',
      url: queryString(url, params)
    })
  }
}
```

这 \$fetch.fetch 返回本就是一个 `Promise`，这里为何额外要包裹的一层处理呢？这样做的好处不仅在于使其依旧可以链式调用，同时对返回数据统一处理，精简返回内容，使得在获取到最终结果处，可以尽可能简单，更加有利于后期做维护，调用方式就可以成为如下这样（涉及某类模块，可统一在相应模块文件下，如：`helper/apis/poetry.js` ）：

```js
import $ajax from './../ajax'
const baseUrl = 'https://api.apiopen.top/'

export default {
  getSinglePoetry(data) {
    return $ajax.get(`${baseUrl}singlePoetry`, data)
  },
  getOtherApi(data) {
    // other api ....
  }
}
```

另外，开发者将接口，按照功能模块规划，分门别类以存放至统一文件夹下，如 [helper/apis](https://github.com/nicejade/nicelinks-quick-app/tree/master/src/helper/apis)；如此清晰明了，方便调用，且对于多人协作开发，又不相互响应，减少不必要的冲突。类似善用配置，以表驱动法的编程手法，应该活学活用，贯穿始终。这些理念，早在[更优雅的处理-Http-请求 | 开箱即用的 Vue Webpack 脚手架模版](https://www.jeffjade.com/2018/05/20/140-vue-webpack-boilerplate-template/#更优雅的处理-Http-请求)中就有阐述。

至此，就对接口进行了完美封装处理；在业务层便捷调用，也是需要优化；在快应用，最为高效的办法，就是将上面封装暴露给 `global`，如此就可以：

```js
import { $apis } from './helper'
const hook2global = global.__proto__ || global
hook2global.$apis = $apis

// 在任何其他页面、组件、js 文件，接可以像如下调用
const params = {}
$apis.poetry
  .getSinglePoetry(params)
  .then(result => {
    // 处理正常逻辑
  })
  .catch(error => {
    // 处理请求异常逻辑
  })
```

## **更近一步体验优化**

在业务逻辑中，发起数据请求时候，都需要添加 Loading，提示用户请求正在进行中，以免响应缓慢给用户带来不必要的疑惑；而，在请求成功或失败情形下，都需要对 Loading 进行消除，如此一来就会有下面的逻辑：

```js
$apis.poetry
  .getSinglePoetry(params)
  .then(result => {
    this.isLoading = false
    // 处理正常逻辑
  })
  .catch(error => {
    // 处理请求异常逻辑
    this.isLoading = false
  })
```

很明显，像类似不管请求成功或失败，都需要执行的业务逻辑是存在的，如果分别在对应链式后做处理，谈何优雅呢？在 `ES2018` 有引入 `finally` 标准，跟[快应用](https://site.lovejade.cn/post/5b5fb5bc615bf842b609105f)中请求后 `complete` 回调是一样的作用：不管最后状态如何，都会执行的操作。所以上面的调用，就可以优化成如下代码：

```js
$apis.poetry
  .getSinglePoetry(params)
  .then(result => {
    // 处理正常逻辑
  })
  .catch(error => {
    // 处理请求异常逻辑
  })
  .finally(() => {
    this.isLoading = false
  })
```

当按照预期这样写的时候，你会发现 [finally](http://es6.ruanyifeng.com/#docs/promise#Promise-prototype-finally) 链式并未得到调用。查阅一番，兴许你也会得到一个答案，[快应用](https://site.lovejade.cn/post/5b5fb5bc615bf842b609105f)规范没有 finally，如此一来，就不得不打补丁 (polyfill) 来予以解决了，可以有的途径不少，下面介绍一种简单无依赖的法子，注入以下代码即可；那么上面关于 `ajax.js` 的封装则可以优化成如下代码：

```js
Promise.prototype.finally = function(callback) {
  const P = this.constructor
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason =>
      P.resolve(callback()).then(() => {
        throw reason
      })
  )
}

function requestHandle(params) {
  return new Promise((resolve, reject) => {
    $fetch
      .fetch({
        url: params.url,
        method: params.method,
        data: params.data
      })
      .then(response => {
        const result = response.data
        const content = JSON.parse(result.data)
        /* @desc: 可跟具体不同业务接口数据，返回你所需要的部分，使得使用尽可能便捷 */
        content.code === 200 ? resolve(content.result) : resolve(content.message)
      })
      .catch((error, code) => {
        console.log(`🐛 request fail, code = ${code}`)
        reject(error)
      })
      .finally(() => {
        console.log(`✔️ request @${params.url} has been completed.`)
        resolve()
      })
  })
}
```

> 需要补充说明的是，`finally` 方法指定的回调函数，用于指定不管 **Promise** 对象最后状态如何，都会执行的操作；它是与状态无关的，不依赖于 Promise 的执行结果，所以此处 polyfill 返回跟标准一致，回调函数不接受任何参数。

关于快应用数据请求的整体代码优化设计，具体可参见 Github 项目：[quickapp-boilerplate-template](https://github.com/nicejade/quickapp-boilerplate-template): 🔨 致力于构建更为优雅的「快应用」开发脚手架模板。

至此，对处理「快应用」数据请求，相比开发文档中所写到的示例，是不是优雅很多呢？如果你的项目中，涉及数据请求有超过 3 个的可能，那么你就应该做像着样。当然，这不仅仅限于此接口，其他如数据存储（storage），上传下载（request），你都应该予以封装。这也不仅仅限于[快应用](https://site.lovejade.cn/post/5b5fb5bc615bf842b609105f)，其他如开发 `Vue`、`React` 等项目，亦是同理。

@2019-01-17 于深圳.福田 Last Modify：2018-01-19

---

### 您可能会感兴趣的文章：

- [Prettier 插件为更漂亮快应用代码](https://quickapp.lovejade.cn/prettier-quickapp-plugin/?utm_source=nice.lovejade.cn)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2017/10/09/146-talk-about-nice-links/)
- [快应用之开发体验纪要](https://nice.lovejade.cn/zh/article/develop-quick-app-experience-notes.html)
- [快应用开发资源、教程汇聚 ](https://www.jeffjade.com/2018/12/21/146-awesome-vue-cli3-example/)
- [TOP 100 大前端超棒精选列表](https://www.jeffjade.com/2018/10/13/144-top-100-front-end-awesome-awesome-list/)

<Advertisement />

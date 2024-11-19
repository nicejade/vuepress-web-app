---
title: 前端利器之 npx 使用纪要
lang: zh-CN
datetime: 2019-12-11
meta:
  - name: description
    content: Node.js，如今已经是前端开发不可或缺的组成部分；npm 则是 Node.js 默认的、以 JavaScript 编写的软件包管理系统； 而 npx 是 npm 软件包运行器，使用它，能够无需显式安装即可帮助执行 npm 软件包。它有很多用处，本就从其主要使用场景角度，来介绍下该命令。
  - name: keywords
    content: npx, npm, Github, 前端利器
---

[Node.js](https://github.com/nicejade/nice-front-end-tutorial/blob/master/tutorial/nodejs-tutorial.md)，如今已经是[前端开发](https://github.com/nicejade/nice-front-end-tutorial)不可或缺的组成部分；`npm` 则是 Node.js 默认的、以 JavaScript 编写的软件包管理系统； 而 `npx` **是 npm 软件包运行器**，使用它，能够无需显式安装即可帮助执行 npm 软件包。它有很多用处，本就从其主要使用场景角度，来介绍下该命令。

<!-- more -->

![前端利器之 npx 使用纪要](https://image.lovejade.cn/node-npm-npx.jpg)

## 安装

更新 npm 至 _&gt;= @5.2.0_，就会自动安装 [npx](https://www.npmjs.com/package/npx)；可以通过 `which npx` 来查看其绝对路径 ；如果由于某种原因它不可用，请按照以下说明安装或更新它即可：

```bash
npm install -g npx
```

## 存在价值

多年来，npm 生态系统越来越倾向于将工具安装为项目本地 `devDependencies`，而不是要求用户在全局范围内安装它们。这意味着像 [mocha](https://npm.im/mocha)，[gulp](https://www.jeffjade.com/tags/Gulp/) 和 [bower](https://npm.im/bower) 这样曾经主要全局安装在系统上的工具现在可以在每个项目的基础上管理它们的版本。这也意味着，要使基于 npm 的项目启动并运行，你需要做的就是确保在系统上有 `node+npm`，克隆 `Git repo`，然后执行 `npm install` 和 `npm run xx` 来安装依赖以及运行命令。由于`npm run-script` 将本地二进制文件添加到路径，这样就可以了！

缺点是，这使你无法以交互方式快速、方便地调用本地二进制文件。有几种方法可以做到这一点，他们都对他们有一些烦恼：你可以将这些工具添加到你的 `scripts`，但是你需要记住通过使用 `--` 来传递参数，你可以做使用 shell 脚本技巧 `alias npmx=PATH=$(npm bin):$PATH`，或者你可以使用 `./node_modules/.bin/rollup` 手动路径到它们。这些都有效，但没有一个是理想的，参见如下使用命令：

```bash
npm i -D rollup
./node_modules/.bin/rollup -v

#or
npm i -D rollup
`npm bin`/rollup -v
```

npx 为你提供了更好的解决方案：`npx rollup` 是你使用本地安装所需的全部工作；如果你采取额外的步骤并配置 [shell 自动回退](https://www.npmjs.com/package/npx#shell-auto-fallback)。

> 好处是，如果调用已经安装的二进制文件，npx 基本上没有开销（Npx Official Description: Executes \<command\> either from a local node_modules/.bin, or from a central cache, installing any packages needed in order for \<command\> to run.） – 它足够聪明，可以将工具的代码，直接加载到当前运行的`node` 进程中！这与此类事情的速度差不多，并使其成为完全可以接受的脚本编写工具。

## 应用场景

### 运行项目安装的模块

npx 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了打包工具 `rollup`。调用 rollup ，可在项目脚本和 package.json 的 [scripts](https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/#%E5%BC%BA%E5%A4%A7%E5%A6%82%E6%96%AF%EF%BC%8Cnpm-%E8%84%9A%E6%9C%AC) 字段里面；如果想在命令行下调用，像下面 👇 这样使用，会更加方便。

```bash
npx rollup -v
```

npx 的原理很简单，就是运行的时候，会到`node_modules/.bin`路径和环境变量`$PATH`里面，检查命令是否存在。由于 npx 会检查环境变量`$PATH`，所以系统命令也可以调用。

```bash
npx ls # 等价于 npx ls
npx which npm # 等价于 which npm
```

### 一次性调用，无需本地安装

```bash
# 开启一个本地静态服务器
npx arya-jarvis s
# or
npx http-server
```

### 执行 GitHub 上面的模块源码

**注意**，远程代码必须是一个模块，即必须包含 `package.json` 和入口脚本。

```bash
# 从 gist 服务上调用命令
npx https://gist.github.com/nicejade/406f154e882a836de1b2e12d02b84aab

# 从 github 仓库中调用命令
npx github:piuccio/cowsay hello
```

值得一提的是，上述 [gist 代码片段](https://gist.github.com/nicejade/406f154e882a836de1b2e12d02b84aab)，是为写此篇文章，特意写来测试用（使用 npx 命令来快速生成一个标准的 `README.md`）；有了 `npx` 这个功能，即可为朋友们分享一些脚本，提供更加便捷 & 快捷的方式（相比之下，npm 仓库的脚本，发布和使用，都显得更加繁琐些；当然，你需要注意 ⚠️ 安全，请务必仔细阅读 gists 代码，如同运行`.sh` 脚本时一样！）。

### 指定不同版本的 node 运行 npm 脚本

```bash
npx node@12.9.1 npm -v
npx -p node@12.9.1 npm -v
npx -p node@12.9.1 npm run build
npx -p node@12.9.1 yarn build
```

上面命令会使用 `12.9.1` 版本的 Node 执行脚本；原理是从 npm 下载这个版本的 node，使用后再删掉；在一些特殊场景，用来此法来切换 Node 版本（如测试该版本是否支持某特性等），要比一些版本管理器（如 `nvm`）来的方便一些。

#### `-p` 参数

`-p`参数用于指定 npx 所要安装的模块，这对于需要安装多个模块的场景很有用，比如：

```bash
npx -p cowsay -p arya-jarvis  [command]
```

#### `-c` 参数

如果 npx 安装多个模块，默认情况下，所执行的命令之中，只有第一个可执行项会使用 npx 安装的模块，后面的可执行项还是会交给 Shell 解释。所以如下命令会报错：

```
# 将会报错
npx -p cowsay -p arya-jarvis  "arya ip | cowsay"
```

1. npx `-c`参数，可以将所有命令都用 npx 来解释。于是，下面代码就可以正常工作：

```
# npx -p cowsay -c "cowsay hey, bro"
npx -p cowsay -p arya-jarvis -c "arya ip | cowsay"
...
 ______________
< 172.13.14.21 >
 --------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

2. `-c` 参数的另一个作用是，可以把这些 npm 的环境变量带入 npx 命令，如下代码：

```bash
npx -c 'echo "$npm_package_name"'
npx -c 'echo "$npm_package_version"'
```

### 使用 `--inspect` 运行节点二进制文件

```bash
npx --node-arg=--inspect cowsay
Debugger listening on ws://127.0.0.1:9229/....
```

此外，npx 还有 shell 自动回退（shell auto-fallback）功能，可以使用与 `bash`、`zsh`、`fish` 等；倘若把 npx 配置在 `.zshrc` 文件中，当在本地找不见伴随 `@` 命令时，可以在不引用 npx 的情况下，用其作为后备命令执行，配置也很简单，如果你是用的是 `zsh`，执行如下命令即可（如果是 `bash` Or `fish`，可以参见 [npx - shell auto-fallback](https://www.npmjs.com/package/npx)）：

```bash
source <(npx --shell-auto-fallback zsh)
```

具体使用效果如下示例：

```bash
ember-cli@latest --version
找不到 ember-cli@latest，请尝试使用 npx...
ember-cli: 3.14.0
node: 12.13.0
os: darwin x64
```

> 原文首发出处: [静轩之别苑](https://quickapp.lovejade.cn/) 原文首发链接：[前端利器之 npx 使用纪要](https://quickapp.lovejade.cn/how-to-use-npm-npx-tutorial/)

于 2019.12.10 于深圳.福田 last modify: 2019.12.11.

### 参考文献链接

- [npx(1)-- execute npm package binaries](https://www.npmjs.com/package/npx)
- [Introducing npx: an npm package runner](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
- [npx: npm package runner](https://hackernoon.com/npx-npm-package-runner-7f6683e4304a)
- [npx 使用教程 | 阮一峰](https://www.ruanyifeng.com/blog/2019/02/npx.html)

### 您可能感兴趣的文章

- [如何为项目编写良好 README](https://www.lovejade.cn/zh/article/how-to-write-a-good-readme-for-your-project.html)
- [Npm vs Yarn 之备忘详单](https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/)
- [Git 常见问题及解决办法](https://quickapp.lovejade.cn/git-common-problems-and-solutions/)
- [为高效而生：Arya Jarvis](https://www.jeffjade.com/2019/08/25/156-arya-jarvis-born-for-efficiency/)
- [Arya - 在线 Markdown 编辑器](https://www.jeffjade.com/2019/05/31/155-arya-markdown-online-editor/)
- [Prettier 插件为更漂亮快应用代码](https://www.jeffjade.com/2019/02/02/150-prettier-quickapp-plugin/)
- [基于 Puppeteer 构建简易机器人](https://www.jeffjade.com/2019/06/14/156-puppeteer-robot/)

---
title: 使用ESLint ＆ Prettier美化Vue代码
lang: zh-CN
datetime: 2018-06-18
meta:
  - name: description
    content: Prettier 是一个有见识的代码格式化工具。它通过解析代码并使用自己的规则重新打印它，并考虑最大行长来强制执行一致的样式，并在必要时包装代码。如今，它已成为解决所有代码格式问题的优选方案；您可以结合 ESLint 和 Prettier，检测代码中潜在问题的同时，还能统一团队代码风格，从而促使写出高质量代码，来提升工作效率。
  - name: keywords
    content: Prettier,ESLint,Vue,格式化,美化代码
---

<!-- more -->

[Prettier](https://github.com/prettier/prettier) 是一个有见识的代码格式化工具。它通过解析代码并使用自己的规则重新打印它，并考虑最大行长来强制执行一致的样式，并在必要时包装代码。如今，它已成为解决所有代码格式问题的优选方案；支持 `JavaScript`、 `Flow`、 `TypeScript`、 `CSS`、 `SCSS`、 `Less`、 `JSX`、 `Vue`、 `GraphQL`、 `JSON`、 `Markdown` 等语言，您可以结合 ESLint 和 Prettier，检测代码中潜在问题的同时，还能统一团队代码风格，从而促使写出高质量代码，来提升工作效率。

![beautify-vue-by-eslint-and-prettier](https://image.lovejade.cn/prettier-girl.jpg)

## 初始化 Vue 项目推介

在格式化代码方面， Prettier 确实和 ESLint 有重叠，但两者侧重点不同：ESLint 主要工作就是检查代码质量并给出提示，它所能提供的格式化功能很有限；而 Prettier 在格式化代码方面具有更大优势。而 Prettier 被设计为易于与 ESLint 集成，所以你可以轻松在项目中使两者，而无需担心冲突。本文就如何使用 ESLint ＆ Prettier，来格式并美化 Vue 代码做下探讨；如果您使用其他类型框架，这份经验绝大部份依旧适用。

正如在 [开箱即用的 Vue Webpack 脚手架模版](https://jeffjade.com/2018/05/20/140-vue-webpack-boilerplate-template/) 所倡导的：`vue-cli3`在这个版本，它集成了更多丰富的功能，以及更多默认配置，可通过附带的图形用户界面创建、开发和管理项目... 而且已发布 `RC` 版本，核心功能已准备就绪，`API` 已趋于稳定，所以，建议采用 `vue-cli3` 来创建您的项目；您只需运行 `vue create my-project` 命令，接下来按照提示进行选择即可；为了您的项目可持续性愉快进行，`ESlint` 是您必要的选项。如果，您这样做了，您就可以在 _package.json_ 中 `eslintConfig` 属性下，找到 `ESLint` 配置；接下来，只需将 `Prettier` 与 `ESLint` 集成即可。

## 集成 ESLint & Prettier

对于二者集成，可以利用插件来完成；[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) 公开了一个 “recommended” 配置，将 `plugin:prettier/recommended` 添加到 `extends` 的子属性 `plugin:vue/essential` 之后，以默认设置在 `ESLint` 中启用对 `Prettier` 的支持：

```json
"eslintConfig": {
    "root": true,
    "extends": [
      "plugin:vue/essential",
      "plugin:prettier/recommended",
      "eslint:recommended"
    ]
  },
```

当然，还需安装依赖库： eslint-plugin-prettier 和 eslint-config-prettier (下文会讲到此依赖的作用)，更详细信息可以参见 Prettier 文档： [Integrating with ESLint ](https://prettier.io/docs/en/eslint.html)。

```bash
yarn add --dev eslint-plugin-prettier eslint-config-prettier prettier-eslint-cli
```

这里需要补充说明下的是 `eslint-plugin-prettier` 得工作原理，它会对比格式化前和用 Prettier 格式化后的代码，有不一致的地方就会报错提示；我们可以借助一些工具来修复，比如： `eslint --fix`，[prettier-eslint-cli](https://github.com/prettier/prettier-eslint-cli)；可将其配置在 package scripts 中，以方便使用：

```json
{
  "scripts": {
    "eslint-fix": "eslint src/**/**/*.vue --fix",
    "format-code": "prettier-eslint --write \"src/**/*.js\" \"src/**/*.vue\""
  }
}
```

![beautify-vue-by-eslint-and-prettier](https://image.lovejade.cn/vue-eslint-prettier.png)

## 修改规则配置

您需要知道的是，两者混合使用时候，需要修改规则，以防止重复或冲突；`eslint-config-prettier` 即为解决此问题的存在，可以使用它关闭所有可能引起冲突的规则。

```json
"rules": {
  "prettier/prettier": "error"
}
```

事实上，当在项目中如此配置，可能会出现些“诡异”的报错，即便采用如上修复，也无法解决；而且这也不是您预期的提示；

<span style="color: red">error</span>: Delete `⏎` (prettier/prettier) at src/pages/xxx

此时，可以对规则进行甄别、梳理，择选出适宜的规则；对于此，您可以参考 [Configuring Prettier Options](https://prettier.io/docs/en/options.html) & [eslint-plugin-prettier#options](https://github.com/prettier/eslint-plugin-prettier)；依据个人编码习惯，有采取如下配置 ( 可在 [awesome-vue-cli3-example](https://github.com/nicejade/awesome-vue-cli3-example/blob/master/package.json) 查看源码)：

```json
"rules": {
  "no-console": 0,
  "prettier/prettier": [
    "error",
    {
      "singleQuote": true,
      "trailingComma": "none",
      "bracketSpacing": true,
      "jsxBracketSameLine": true,
      "parser": "flow"
    }
  ]
}
```

## 添加编辑器配置

#### Atom 编辑器

可以安装 [prettier-atom](https://atom.io/packages/prettier-atom)；`Atom` 编辑器还会提示你安装更多辅助插件；

```bash
apm install prettier-atom
```

它有两种模式可以使用：

- 保存时自动格式化（Packages → Prettier → Toggle Format on Save）
- 使用键盘快捷方式手动调用（如果没有选择，整个文件被格式化）：`CTRL + ALT + F`

#### VS Code 编辑器

安装插件：[ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)，[Prettier](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)，VS Code 插件配置统一在 preference → setting → user setting 设置 (快捷键： `Command + ,`)，即可实现保存时自动格式化：

```json
{
  "prettier.eslintIntegration": true,
  "eslint.autoFixOnSave": true,
  "editor.formatOnSave": true
}
```

除此外，你还在根据自己的喜好/习惯，为 `Vscode` 编辑器设定 Prettier 美化风格，详细字段可以参见 [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)。

```json
"prettier.singleQuote": true,
"prettier.semi": false,
"prettier.tabWidth": 2,
"prettier.trailingComma": "none"
```

### Sublime Text 编辑器

安装插件：[JsPrettier](https://github.com/jonlabelle/SublimeJsPrettier)，它有依赖到 `Prettier` 等，所以需要全局安装：`yarn global add prettier`；在 “Preferences → Setting” 中添加如下设置，即可实现保存时自动格式化；

```json
{
  "auto_format_on_save": true
}
```

当然您也可以自定义快捷键，以按需格式化代码；在 “Preferences → Key Binding” 的 User Keymap 中，参考如下示例，注入命令即可 (Windows OS 则是：`ctrl + alt + f`)：

```json
{ "keys": ["command+alt+f"], "command": "js_prettier" }
```

同样，你也根据自己的喜好/习惯，为 `SublimeText` 编辑器设定 Prettier 美化风格；更多设置、使用细节，可参见 [SublimeJsPrettier#Usage](https://github.com/jonlabelle/SublimeJsPrettier#usage)；个人设定风格如下(操作文件位置：Preferences → Package Settings → JsPrettier → Settings - User)：

```json
{
  "debug": false,
  "prettier_cli_path": "",
  "node_path": "",
  "auto_format_on_save": false,
  "auto_format_on_save_excludes": [],
  "auto_format_on_save_requires_prettier_config": false,
  "allow_inline_formatting": false,
  "custom_file_extensions": [],
  "max_file_size_limit": -1,
  "additional_cli_args": {},
  "prettier_options": {
    "printWidth": 80,
    "singleQuote": true,
    "trailingComma": "none",
    "bracketSpacing": true,
    "jsxBracketSameLine": false,
    "parser": "babylon",
    "semi": false,
    "requirePragma": false,
    "proseWrap": "preserve",
    "arrowParens": "avoid"
  }
}
```

## Pre-commit Hook 约束代码提交

以上探讨了如何运用 ESLint ＆ Prettier 写出优质代码，这都是针对个人的推荐性行为；为保证团队统一代码风格，则必须采取些手段以强制约束；假如您的团队使用 `Git` 作为代码管理工具，在 `commit` 行为及之前进行甄别约束，是很棒的选择；于此，可借助 [husky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged) 来实现之。

```bash
# install husky & lint-staged
yarn add lint-staged husky --dev

# package.json config
"lint-staged": {
  "**/**.{js,json,pcss,md,vue}": [
    "prettier --write",
    "git add"
  ]
},
"husky": {
  "hooks": {
    "pre-commit": "yarn run precommit-msg && lint-staged",
    "pre-push": "yarn test"
  }
},
```

值得一提的是，在实际项目中， `husky` 很可能由于各种原因，导致不能很好的工作；这多半是由于 `.git/hooks/pre-commit` 与期待目标不匹配所致，您可以手动修改，也可以采取如下办法 (备注：如果您的 `husky` 版本在 0.14 及以上)：

```bash
rm -rf .git/hooks/*
node node_modules/husky/lib/installer/bin install
```

## 写在文章最后

“<AwesomePoetry text="上邪，我欲与君相知，长命无绝衰。山无陵，江水为竭。冬雷震震，夏雨雪。天地合，乃敢与君绝"/>”。这突如其来的一首古诗，乍看起来，与本文没有丝毫关系；但需要提醒的是：**您在编写高质量代码时付出的努力越多，您花在调试上的时间就越少**。如果您为项目开发工作流程，做了足够充分而适宜的建设，这不仅可以极大提升代码编写质量与速度，同时可节省调试、解决问题时间开销，而且还能避免无端而起的坏心情，从而更进一步促进工作效率，如此造就的这份优质循环，可以使得您拥有更多时间去学习、折腾、品味人生，这其中自然也可包括品读优美`古诗词`🐉☺️；所以？**工欲善其事，必先利其器**，您学到了么？

<Advertisement />

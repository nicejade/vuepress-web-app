const themeConfig = require('./themeConfig')
const buildConfig = require('./buildConfig')

module.exports = {
  base: "/",
  // 存放“生成静态的 HTML 文件”路径;
  dest: './docs/dist',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
  ],
  ga: 'UA-119945815-1',
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '静晴轩别苑',
      description: '繁华尽处，寻一无人山谷，建一木制小屋，铺一青石小路，与你晨钟暮鼓，安之若素。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'JADE LOVE HOME',
      description: 'Wherever you go， whatever you do， I will be right here waiting for you.'
    }
  },
  configureWebpack: buildConfig.configureWebpack,
  themeConfig,
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      // 使用更多的 markdown-it 插件!
    }
  }
}
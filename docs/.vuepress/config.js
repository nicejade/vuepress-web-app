const themeConfig = require('./themeConfig')
const buildConfig = require('./buildConfig')

module.exports = {
  base: "/",
  // 存放“生成静态的 HTML 文件”路径;
  dest: './docs/dist',
   head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  ga: 'UA-119945815-1',
  serviceWorker: {
    updatePopup: {
      message: "嗨，朋友，本站已更新.",
      buttonText: "刷新"
    }
  },
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

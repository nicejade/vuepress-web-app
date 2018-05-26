const themeConfig = require('./themeConfig')

module.exports = {
  base: "/",
  // 存放“生成静态的 HTML 文件”路径;
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
  ],
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '静晴轩别苑',
      description: '静晴轩别苑'
    },
    '/en/': {
      lang: 'en-US',
      title: '静晴轩别苑',
      description: '静晴轩别苑'
    }
  },
  themeConfig
}
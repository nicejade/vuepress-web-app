const themeConfig = require('./themeConfig')

module.exports = {
  base: "/",
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
  ],
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '静轩别苑',
      description: '静轩别苑'
    },
    '/en/': {
      lang: 'en-US',
      title: '静轩别苑',
      description: '静轩别苑'
    }
  },
  themeConfig
}
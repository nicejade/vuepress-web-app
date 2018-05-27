const helper = require('./../helper/')

module.exports = {
  repo: 'nicejade/vuepress-web-app',
  editLinks: false,
  docsDir: './dist',
  locales: {
    '/': {
      label: '简体中文',
      selectText: '选择语言',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdated: '上次更新',
      nav: [
        {
          text: '博客',
          link: '/zh/blog/',
        },
        {
          text: '文章',
          link: '/zh/article/'
        },
        {
          text: '应用',
          link: '/zh/application/'
        }
      ],
      sidebar: {
        '/zh/blog/': helper.utils.genSidebarConfig('轩帅の博客', './zh/blog/', false),
        '/zh/article/': helper.utils.genSidebarConfig('最新文章', './zh/article/', false),
        '/zh/application/': helper.utils.genSidebarConfig('轩帅の应用', './zh/application/')
      }
    },
    '/en/': {
      label: 'English',
      selectText: 'Languages',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
      nav: [
        {
          text: 'Application',
          link: '/en/application/'
        }
      ],
      sidebar: {
        '/en/application/': helper.utils.genSidebarConfig('Application', './en/application/')
      }
    }
  }
}
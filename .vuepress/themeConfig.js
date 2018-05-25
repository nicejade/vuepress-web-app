const helper = require('./../helper/')

module.exports = {
  repo: 'nicejade/vuepress-web-app',
  editLinks: true,
  docsDir: 'docs',
  locales: {
    '/': {
      label: '简体中文',
      selectText: '选择语言',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdated: '上次更新',
      nav: [
        {
          text: '个人博客',
          link: '/zh/blog/',
        },
        {
          text: '我的应用',
          link: '/zh/applications/'
        }
      ],
      sidebar: {
        '/zh/blog/': helper.utils.genSidebarConfig('个人博客', './zh/blog/')
      }
    },
    '/en/': {
      label: 'English',
      selectText: 'Languages',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
      nav: [
        {
          text: 'My Blog',
          link: '/en/blog/',
        },
        {
          text: 'My Applications',
          link: '/en/applications/'
        }
      ],
      sidebar: {
        '/en/blog/': helper.utils.genSidebarConfig('Blog', './en/blog/')
      }
    }
  }
}
const fs = require('fs')
const join = require('path').join
let gSiteData = null

const _RearrangeTheSidebars = (config) => {
  if (!config.sidebar) return

  Object.keys(config.sidebar).forEach(sidebarKey => {
    const sidebarItem = config.sidebar[sidebarKey]
    const pageMetaArr = _FindMetaBySidebarKey(sidebarKey)
    const newSidebarConf = _GenNewSidebarItemList(pageMetaArr)
    if (sidebarItem && Array.isArray(sidebarItem)) {
      sidebarItem.forEach(item => {
        const children = item.children
        const newChildren = []
        newSidebarConf.forEach(item => {
          const pureArticleName = item.path.replace(sidebarKey, '').replace('.html', '')
          const isInChildren = children.includes(pureArticleName)
          isInChildren ? newChildren.push(pureArticleName) : ''
        })
        item.children = newChildren
      })
    }
  })
}

const _FindMetaBySidebarKey = (sidebarKey) => {
  return gSiteData.pages.filter(item => {
    return item.path.startsWith(sidebarKey)
  })
}

const _GenNewSidebarItemList = (pageMeta = []) => {
  const tempItemArray = pageMeta.map(item => {
    return {
      path: item.path,
      datetime: item.frontmatter.datetime || item.lastUpdated
    }
  })
  tempItemArray.sort((a, b) => {
    const aDatetime = (new Date(a.datetime)).getTime()
    const bDatetime = (new Date(b.datetime)).getTime()
    return bDatetime - aDatetime
  })
  return tempItemArray
}

module.exports = {
  findSyncFolderName (startPath) {
    let result = []
    function finder(path) {
      const files = fs.readdirSync(path)
      files.forEach((fileName, index) => {
        console.log(fileName, index)
        const fPath = join(path, fileName)
        const stats = fs.statSync(fPath)
        if (stats.isDirectory()) finder(fPath)
        if (stats.isFile()) result.push(fileName)
      })
    }
    finder(startPath)
    return result
  },

  /**
    @desc: Generate Sidebar Config
    @param: {string} tille - page title
    @param: {string} relativePath - relative path
    @param: {boolean} isWithReadMe - is need index page
    @date: 2018-05-25
  */
  genSidebarConfig (title, relativePath = '', isWithReadMe = false) {
    const fileNameList = this.findSyncFolderName(relativePath)
    let sidebarConfig = fileNameList.filter(item => {
        return item !== 'README.md'
      }).map(item => {
        return item.replace('.md', '')
      })
    sidebarConfig = isWithReadMe ? [''].concat(sidebarConfig) : sidebarConfig

    return [
      {
        title,
        collapsable: false,
        children: sidebarConfig
      }
    ]
  },

  /**
    @desc: 根据文档中的 datetime 字段，为“侧边栏链接”重新排序；
    @param: {object} siteData - 站点元数据
    @date: 2018-10-04
  */
  rearrangeTheSidebars (siteData) {
    gSiteData = siteData
    const locales = siteData.themeConfig.locales
    Object.values(locales).forEach(item => {
      _RearrangeTheSidebars(item)
    })
  }
}
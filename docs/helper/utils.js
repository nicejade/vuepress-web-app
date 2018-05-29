const fs = require('fs')
const join = require('path').join

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

  /*
    @desc: Generate Sidebar Config
    @param: {tille, relativePath}
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
  }
}
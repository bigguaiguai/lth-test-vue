
let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('baseCss', resolve('src/base/css'))
     //配置快捷路径，baseCss为路径名字，resolve是原路径地址
  }
}
const Invoke = require('vue-router-invoke-next-webpack-plugin');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // omit other options...
  configureWebpack(config) {
    // you [must] set alias path the same as Invoke's Root Option
    config.resolve.alias.Invoke = path.resolve(process.cwd(), 'src/views')
    config.plugins.push(
      new Invoke({
        // should be the same as resolve.alias.Invoke
        root: path.resolve(process.cwd(), 'src/views')
      })
    )
  }
}

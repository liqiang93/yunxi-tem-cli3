module.exports = {
  root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  env: { // 预定义的全局变量，这里是浏览器环境
    amd: true,
    es6: true,
    commonjs: true,
    node: true,
    jquery: true,
    browser: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    '@vue/standard'
  ],
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint' // 解析器，默认使用 Espree
  },
  rules: {

  }
}

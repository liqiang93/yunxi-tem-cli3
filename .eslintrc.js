module.exports = {
  root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  env: { // 预定义的全局变量，这里是浏览器环境
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    '@vue/standard',
    "@vue/prettier"
  ],
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint' // 解析器，默认使用 Espree
  },
  rules: {
    'template-curly-spacing': 'off',
    indent: 'off',
    camelcase: 'off',
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    eqeqeq: 'warn',
    'generator-star-spacing': 'off',
    'handle-callback-err': 'warn',
    'import/no-duplicates': 'error',
    'no-debugger': 'error',
    'no-eval': 'warn',
    'no-mixed-operators': 'warn',
    'no-new': 'warn',
    'no-new-wrappers': 'warn',
    'no-unreachable': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'warn',
    'no-sequences': 'warn',
    'no-tabs': 'warn',
    'no-undef': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': 'error',
    'no-useless-call': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'warn',
    'node/no-deprecated-api': 'warn',
    'one-var': 'error',
    'prefer-promise-reject-errors': 'warn',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'vue/no-side-effects-in-computed-properties': 'warn',
    'vue/valid-v-bind': 'warn',
    'vue/valid-v-for': 'warn',
    'vue/valid-v-if': 'warn',
    'vue/valid-v-on': 'warn',
  },
}

module.exports = {
  root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  env: { // 预定义的全局变量，这里是浏览器环境
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/prettier",
  ],
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint', // 解析器，默认使用 Espree
  },
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'prefer-promise-reject-errors': ['off', { allowEmptyReject: true }],
    'no-new': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}

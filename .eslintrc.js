module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    Paho: 'readonly',
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
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

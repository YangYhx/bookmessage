module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-undef': 'off',
    'indent': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    // 方法左侧括号前面是否可以有空格
    'space-before-functon-paren': 0,
    // 文件末尾强制换行
    'eol-last': 0,
    'no-control-regex': 0
  }
}

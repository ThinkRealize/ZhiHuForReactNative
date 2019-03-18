// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    'react-native/react-native': true
  },
  extends: ['standard'],

  // required to lint *.vue files
  plugins: ['react', 'react-native'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'space-before-function-paren': 'off',
    /**
     * 修复 no-unused-vars 无法识别将导入的模块用作jsx组件
     * https://github.com/eslint/eslint/issues/8226#issuecomment-285683085
     */
    'react/jsx-uses-vars': 'error'
  }
}

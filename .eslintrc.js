module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "quotes": ["error", "single"],
    "indent": ["warn", 4],
    "no-console": "off",
    "allowTabIndentation": 0
  }
}

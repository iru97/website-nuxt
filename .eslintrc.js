module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  // add your custom rules here
  rules: {
    "quotes": ["error", "single"],
    "indent": ["warn", 2],
    "no-console": "off",
    "allowTabIndentation": 0,
    "space-before-function-paren": 0
  }
}

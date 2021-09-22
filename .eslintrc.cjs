/*!
 * config file for `eslint`
 *
 * update: wget -O .eslintrc.js https://git.io/fjVjK
 * document: https://eslint.org/docs/user-guide/configuring
 */

/* @fisker/eslint-config https://git.io/fjOeH */

module.exports = {
  root: true,
  env: {},
  parserOptions: {},
  extends: ['@fisker/vue'],
  settings: {},
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
  plugins: [],
  globals: {},
  overrides: [
    {
      files: ['config/*'],
      globals: {module: 'readonly', require: 'readonly'},
    },
  ],
}

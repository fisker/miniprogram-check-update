const {name} = require('../package.json')

module.exports = () => ({
  projectName: name,
  sourceRoot: 'taro',
  outputRoot: 'dist',
  framework: 'vue3',
})

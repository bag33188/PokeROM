const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src',
  modules: ['node_modules', path.resolve(__dirname, 'src', 'app')]
};

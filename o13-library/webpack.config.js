const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library',
    libraryTarget: 'this',
  },
  externals: ['lodash'],
};

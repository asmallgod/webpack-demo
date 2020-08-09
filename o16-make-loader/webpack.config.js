const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  // 增加解析loader的目录
  resolveLoader: {
    modules: ['node_modules', './loaders'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
            options: {
              name: 'asmallgod',
            },
          },
          {
            loader: 'replaceLoaderAsync.js',
            options: {
              name: 'asmallgod',
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};

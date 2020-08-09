const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge').merge;
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // 开启css modules
              // modules: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  optimization: {
    usedExports: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = merge(commonConfig, devConfig);

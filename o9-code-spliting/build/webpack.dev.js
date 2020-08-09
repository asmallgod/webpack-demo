const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge').merge;
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  optimization: {
    usedExports: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = merge(commonConfig, devConfig);

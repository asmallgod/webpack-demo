const merge = require('webpack-merge').merge;
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
};

module.exports = merge(commonConfig, prodConfig);

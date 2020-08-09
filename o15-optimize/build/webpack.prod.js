const merge = require('webpack-merge').merge;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  optimization: {
    // 描述打包出的js之间的一些runtime信息，单独打包
    runtimeChunk: {
      // name: (entrypoint) => `runtime~${entrypoint.name}`,
      name: 'runtime',
    },
    minimizer: [new OptimizeCssAssetsWebpackPlugin({})],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [new MiniCssExtractPlugin()],
};

module.exports = merge(commonConfig, prodConfig);

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebapckPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

const plugins = [];
const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
files.forEach((file) => {
  console.log(file);
  if (/.*\.dll.js$/.test(file)) {
    plugins.push(
      new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, '../dll', file),
      })
    );
  } else if (/.*\.manifest\.json/.test(file)) {
    plugins.push(
      new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, '../dll', file),
      })
    );
  }
});

module.exports = {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2080,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  performance: false,
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebapckPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash',
    }),
    ...plugins,
  ],
};

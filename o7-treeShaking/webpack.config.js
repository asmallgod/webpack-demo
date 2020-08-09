const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebapckPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
  // default: production
  // mode: 'development',
  // devtool: 'eval-cheap-module-source-map',
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  optimization: {
    usedExports: true,
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
        test: /\.(scss|sass)$/,
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebapckPlugin(),
  ],
};

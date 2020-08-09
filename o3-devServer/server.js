const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

const app = express();
app.use(
  webpackDevMiddleware(compiler, {
    // publicPath: webpackConfig.output.publicPath,
  })
);

app.listen(3000, () => {
  console.log('server is listening at 3000...');
});

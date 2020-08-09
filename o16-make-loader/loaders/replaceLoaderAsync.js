const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  // 如果要异步操作
  const callback = this.async();
  setTimeout(() => {
    const ret = source.replace('world', options.name);
    callback(null, ret);
  }, 2000);
};

/**
this.callback(
  err: Error | null,
  content: string | Buffer,
  sourceMap?: SourceMap,
  meta?: any
);
 */

/**
 * loader可以用于那些不希望在业务代码中出现，但希望在线上代码中出现的内容。
 * 比如
 * 异常监控：分析代码，形成抽象语法树，在特定的地方添加try...catch...
 * 国际化：写的时候用{{title}}占位符，打包的时候去全局获取配置，来自动替换。
 *
 */

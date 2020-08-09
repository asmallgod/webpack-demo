// 不能用箭头函数，因为webpack在里面可能会改变this指向
const loaderUtils = require('loader-utils');

module.exports = function (source) {
  // const options = this.query;
  const options = loaderUtils.getOptions(this);
  const ret = source.replace(options.name, 'ahahaha');
  this.callback(null, ret);
};

/**
this.callback(
  err: Error | null,
  content: string | Buffer,
  sourceMap?: SourceMap,
  meta?: any
);
 */

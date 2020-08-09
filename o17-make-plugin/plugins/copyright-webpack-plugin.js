const { compilation } = require('webpack');

class CopyrightWebpackPlugin {
  // constructor() {
  //   console.log('插件被使用了');
  // }

  /**
   * @param {*} compiler webpack的一个实例
   */
  apply(compiler) {
    debugger;
    const hooks = compiler.hooks;
    hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
      // console.log(compilation.assets);
      compilation.assets['copyright.txt'] = {
        source: function () {
          return 'copyright asmallgod';
        },
        size: function () {
          return 19;
        },
      };
      cb();
    });
    hooks.compile.tap('CopyrightWebpackPlugin', () => {
      console.log('compile.');
    });
  }
}

module.exports = CopyrightWebpackPlugin;

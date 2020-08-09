const path = require('path');
const fs = require('fs');
// 解析出ast的工具
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

/**
 * 解析某个文件的模块依赖
 * @param {*} filename 文件路径
 */
const moduleAnalyser = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8');
  const ast = parser.parse(content, {
    sourceType: 'module',
  });
  // console.log(ast.program.body);
  const dependencies = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(filename);
      const newFile = path.join(dirname, node.source.value);
      dependencies[node.source.value] = newFile;
    },
  });
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env'],
  });
  return {
    filename,
    dependencies,
    code,
  };
};

const makeDependenciesGraph = (entry) => {
  const entryModule = moduleAnalyser(entry);
  const graphArr = [entryModule];
  for (let i = 0; i < graphArr.length; i++) {
    const item = graphArr[i];
    const { dependencies } = item;
    if (dependencies) {
      for (let j in dependencies) {
        graphArr.push(moduleAnalyser(dependencies[j]));
      }
    }
  }

  const graph = {};
  graphArr.forEach((item) => {
    graph[item.filename] = {
      dependencies: item.dependencies,
      code: item.code,
    };
  });
  return graph;
};

const generateCode = (entry) => {
  const graph = JSON.stringify(makeDependenciesGraph(entry));
  return `
    (function(graph){
      function require(module){
        function localRequire(relativePath){
          return require(graph[module].dependencies[relativePath])
        }
        var exports = {};
        (function(require, exports, code){

          eval(code);

        })(localRequire, exports, graph[module].code)
        return exports;
      }
      require('${entry}')
    })(${graph})
  `;
};

const code = generateCode('./src/index.js');

console.log(code);

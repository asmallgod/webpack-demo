/**
 * main.js 2mb
 * 打包文件很大 加载时间会长
 * 因为lodash和业务逻辑打包在一起，所以每次改变业务逻辑，都会重新加载2mb的内容。而业务逻辑是易变的，工具库是不太变的。
 */

import _ from 'lodash';
// 这个走cacheChunk的default，但记住minSize要设为0，不然太小不给分割
import { add } from './math';

console.log(_.join(['licheng', 'world'], '***'));
// 省略十万行逻辑 业务逻辑 1mb
console.log(_.join(['licheng', 'world'], '***'));

// 这里不需要配置splitChunks:{chunks: 'all'}, 因为默认会针对异步加载的内容进行分割
// import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
//   console.log(_.join(['licheng', 'world'], '***'));
// });

// 更多参照 SplitChunksPlugin文档： https://webpack.js.org/plugins/split-chunks-plugin/
add(1, 3);

// async function getComponent() {
//   const { default: _ } = await import('lodash');
//   const element = document.createElement('div');
//   element.innerText = _.join(['licheng', 'hahah'], '***');
//   return element;
// }

// document.addEventListener('click', () => {
//   getComponent().then((element) => {
//     document.body.appendChild(element);
//   });
// });

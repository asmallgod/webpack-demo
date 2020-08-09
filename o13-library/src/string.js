import _ from 'lodash';
export function join(a, b) {
  return _.join([a, b], '');
}

/**
 *
 *
 * 可以能用户使用会出现以下情况
 * import _ from 'lodash'
 * import library from 'library'
 *
 * 这样用户最终打包的包中可能会有两份lodash
 * 这时候可以配置 externals: ['lodash']，
 * 相当于library打包的时候不报lodash打进去，
 *
 * 因为library中没有lodash, 这时候用户就要这样使用了:
 * import _ from 'lodash'
 * import library from 'library'
 */

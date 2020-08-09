其他人引库可能会有很多种方式

```js
import library from 'library'; //es module
const library = require('library'); // commonjs
require(['library'], function () {}); // amd
```

因此配置`outut`中`libraryTarget`为`umd`, 这样一种通用格式，以上三种都能正常引用了。

要支持`<script>`标签的引入方式，配置`output`的`library`为某个名字，这样就可以正常引用了，`src="library.js"`,会在全局挂在这个名字的变量

`ouput`中的`library`和`libraryTarget`可以配合使用，如果`libraryTarget`为`this`,即挂载到全局的 this 上，也可以写 window， `node.js`可以配`global`。

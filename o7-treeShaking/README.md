treeShaking 只支持 es module，因为 es module 是静态引入，而 commonjs 是动态引入。

1. webpack.config.js 里 optimization 选项，usedExports 设为 true
2. package.json 里设置 sideEffects，如果没有全局副作用导入的，则设为 false，否则，设一些匹配对一些副作用导入做特殊处理，比如`["*.scss"]`

3. `development`模式还是会全部打包进来，但是会有注释：

![image-20200808115433808](http://image.asmallgod.cn/2020-08-08-035434.png)

4. production模式会进行treeShaking。


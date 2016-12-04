##Webpack中Loader和Plugin
- 来自于官方文档的整理，如果你英文不错那么建议去看官方文档，老规矩【[飞机票](http://webpack.github.io/docs/using-loaders.html)】
- 项目代码存放[zhaojunlike](https://github.com/zhaojunlike/blogs)

##Loader
Loader是应用于应用程序资源文件转换的，他们和gulp里面得插件一样，将一类文件转换成另外一类文件，例如你可以是用babel-loader来加载编译es2015

**下面是官方loader的特征**

- loader可以链接,在管道中应用于资源。最终loader将返回JavaScript;每个loader可以任意格式返回源，这被传递到下一个加载器。（这个和gulp中得pipe类似）
- loader既可以同步，也可以异步
- loader运行在nodejs中，执行所有可以执行的操作
- loader接受查询参数配置
- loader可以绑定到配置中的扩展或者正则表达式
- loader可以从npm发布或者安装
- 

##附加
>英文单词：
>- chained 链接，v.束缚
>- features 特征
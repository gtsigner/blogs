##webbench最多可以模拟3万个并发连接去测试网站的负载能力




#download and make ![](http://i.imgur.com/e78fe74.png)

	我使用是centos6.8的操作系统,注：#都是命令

-	[root]#wget http://blog.s135.com/soft/linux/webbench/webbench-1.5.tar.gz

-	[root]#ls
-	[root]#mv ...
-	[root]#tar zxf ....  解压
-	[root]#make && make install

```
	#如果编译报错：

install: cannot create regular file `/usr/local/man/man1': No such file or directory
	我们需要自己去创建这样得文件夹

	#如果提示没有找到ctags请安装
```
-	[root]#webbench --help 
![](http://i.imgur.com/0uHX0Rz.png)

```
	说明：我们一般只需要用到几个参数
	-c 测试每次客户端数量
	-t 测试得时间

		


```


```
#使用nodejs搭建一个webserver
#注10.1.56.117是我的局域网IP


const http = require('http');

const hostname = '10.1.56.117';
const port = 1337;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
 	console.log(`a connect`);
    res.end('Hello World\n');
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


[root]#node web.js
```

-	访问地址
![](http://i.imgur.com/9UnapcF.png)



-	开始压力测试
-	[root]#webbench -c 500 -t 30 http://10.1.56.117:1337
-	end





##更多请看官方文档
http://www.lionbridge.com
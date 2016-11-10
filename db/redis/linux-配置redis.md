今天演示一下安装Redis
我用的是ubuntu14 的server的

1.redis.io 下载redis linux的稳定版
2.https://github.com/phpredis/phpredis  下载php-redis
3.上传到ftp
4.解压
5.cd 解压的目录  make就可以了，不需要任何的配置
	先安装Redis
	$ make
	个人爱好喜欢装软件到/usr/local/ 你可以自己定位
6.现在已经make成功了，我们进入src目录，看到了已经编译好的了软件我们
7.移动我们需要的程序到自己的软件路径  并且在解压目录下有一个redis.conf 这个也要移动到自己的目录
	现在我们就可以启动一下
	启动记得加当前路径 ./
	简单测试
	已经可以了。

	redis-server 是服务端  redis-cli是客户端
##把redis弄成服务运行，
	备份配置文件
##需要把这个改成yes
	用server 启动服务
刚中断了，现在继续
	$./redis-server ./redis.conf
	这样就可以启动后台进程了
	$ ps -A | grep redis 查看进程

ok，接下来是安装php的扩展
	我下载的是php-redis 2.2.8的
	解压进入目录并没有看到configure文件，所以肯定不是这么玩儿的
	需要用到phpize
	由于我的php是apt-get直接安装的

	查看phpinfo，哦哦需要安装php-dev 便会有phpize了，不懂就百度，我最喜欢了
	$whereis phpize 就可以看到phpize的信息了，这个我们会用到
	Github上

	$phpize ./configure [--enable-redis-igbinary]
	执行了这个以后就会出现configure

	这个参数需要配置
	--with-php-config=PATH  Path to php-config php-config

	然后重新使用
	$ ./configure --with-php-config=...

	make   make install,现在redisfor php已经ok了，
	重启apache，但是我们也看到了并没有找到redis，所以我们需要设计php.ini文件加上扩展，
	OK 现在php测试


	ok，由于是第一次录制视频，而且我本身也很菜，所以不敢讲话。
	我也会更加努力学习更多好东西，分享给大家



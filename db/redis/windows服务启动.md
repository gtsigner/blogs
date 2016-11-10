
##服务

```PHP

	-安装服务
	--service-install

	#redis-server --service-install redis.windows.conf --loglevel verbose


	-启动服务
	#redis-server --service-start
	
	-停止服务
	#redis-server --service-stop

	-卸载服务
	#redis-server --service-uninstall


##更多问题请参考	redis-service.docx
	
	
	

```




##失败解决方案

-	如果一切配置都正常，任然报错的话 start fail
-	$
-	$./redis-server redis.windows.conf
-	提示--max-heap配置

-	编辑redis.windows-service.conf 配置文件
1.	检查maxheap参数


##安装

-	下载直接安装
-	建议别百度，直接去看官方的dosc
-	我使用的是window10 64位
-	window教程
	-	[https://docs.mongodb.com/getting-started/shell/tutorial/install-mongodb-on-windows/](https://docs.mongodb.com/getting-started/shell/tutorial/install-mongodb-on-windows/)

##配置

-	创建文件夹
	
		md \MongoData\

-	配置数据库的文件路径

		C:\mongodb\bin\mongod.exe --dbpath d:\test\mongodb\data

-	如果你的路径包含空格需要使用

		C:\mongodb\bin\mongod.exe --dbpath "d:\test\mongo db data"


##exe文件说明

-	mongod	服务端
-	mongo	客户端

##运行

		C:\mongodb\bin\mongod.exe
		
		C:\mongodb\bin\mongo.exe
		
		通过mongo客户端链接




##配置服务端


-	创建文件夹

		mkdir c:\data\db
		mkdir c:\data\log

-	创建一个配置文件

	![](http://i.imgur.com/E8sXyQ6.png)

-	关联配置文件
	
		mongod --config .\conf\mongod.conf

	

-	配置安装服务

	![](http://i.imgur.com/JYSszfd.png)

-	mongodb

	-	启动 net start MongoDB
	-	停止 net stop MongoDB


-	如果没有服务，需要创建服务


	![](http://i.imgur.com/FyurntK.png)




-	卸载服务

		sc.exe delete MongoDB
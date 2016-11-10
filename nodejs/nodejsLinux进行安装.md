##下载
	[http://nodejs.cn/download/](http://nodejs.cn/download/)

##我选择的是Linux x64位的


	下载下来，上传到Ftp后解压。

	tar zxf ./ftproot/node....
	
	我们可以看到他的文件是直接给我们编译安装好的了


##强迫症，移动node到/usr/local/

	mv ./node6.2/ /usr/local/

##创建link
	ln -s ./node6.2/bin/node /usr/local/bin/node
	ln -s ./node6.2/bin/npm /usr/local/bin/npm


##测试

	vim app.js
	
	insert:
			console.log("1");


	node app.js

	Output：	1
	说明安装OK了。
##关于apache下的重新.ht文件报错
	错误：htaccess: Options not allowed here

-	我的虚拟主机配置是

	![](http://i.imgur.com/FciiHug.png)
这个是我之前的根目录配置

-	报错问题

	![](http://i.imgur.com/RNXiRBf.png)


于是我便在log日志下看到了错误信息

	/.htaccess: Options not allowed here
日志中有句话大概是这样说的，应该是这个文件重新不允许，最后找到解决方案


	<Directory "/xampp/htdocs/xampp">
    	<IfModule php5_module>
    	    <Files "status.php">
    	        php_admin_flag safe_mode off
    	    </Files>
    	</IfModule>
    	AllowOverride AuthConfig
	</Directory>
	
	#change
	
	-AllowOverride AuthConfig
	
	#with
	
	AllowOverride All


系统恢复正常

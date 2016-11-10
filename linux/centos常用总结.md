###1.ifconfig 无法使用
	(1) 安装
	(2) $ yum install ifconfig

###2.查看端口状态

	$ netstat -nap | grep 80 //查看80端口的使用情况
	$ /etc/init.d/iptables status //查看端口状态


###3.开放某个端口(比如80端口)

-	(1)


		$ /sbin/iptables -I INPUT -p tcp --dport 80 -j ACCEPT  写入修改
		$ /etc/init.d/iptables save   保存修改
		$ service iptables restart    重启防火墙，修改生效

-	(2)

		$ vi /etc/sysconfig/iptables  打开配置文件加入如下语句:
		$ -A INPUT -p tcp -m state --state NEW -m tcp --dport 80 -j ACCEPT   重启防火墙，修改完成

###4. 关闭端口
 
-	(1)

		$/sbin/iptables -I INPUT -p tcp --dport 80 -j DROP   写入修改
		$/etc/init.d/iptables save   保存修改
		$service iptables restart    重启防火墙，修改生效
 
-	(2)
		
		$vi /etc/sysconfig/iptables  打开配置文件加入如下语句:
		$-A INPUT -p tcp -m state --state NEW -m tcp --dport 80 -j DROP   重启防火墙，修改完成
##了解mysql



##了解mariadb
它是mysql的一个开源的免费的项目，兼容mysql的所有，mysql已经被收购，所以下面的开源免费项目以后最好使用mariadb。
老规矩官方【[飞机票](https://downloads.mariadb.org/)】
下面是一个安装的文档【[飞机票](https://mariadb.com/kb/zh-cn/)】


##使用yum
添加一份yum源，粘贴如下代码
```
# MariaDB 10.1 CentOS repository list - created 2016-11-26 08:44 UTC
# http://downloads.mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.1/centos7-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1

```

-	step1:#touch /etc/yum.repos.d/Mariadb.repo
-	step2:#vim /etc/yum.repos.d/Mariadb.repo
-	insert 上面的代码
-	step3:#yum update
-	step4:#sudo yum install MariaDB-server MariaDB-client

这样就完成了mariadb的服务端和客户端得安装了
我们可以使用systemctl对一系列的mariadb服务进行管理
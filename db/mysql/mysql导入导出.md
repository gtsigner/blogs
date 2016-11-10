####本文内容主要来自MySQL官方文档：“MySQL5.1 Reference，	2.10.3. 将MySQL数据库拷贝到另一台机器”
注意：部分参数名与值间可以不用空格，如 -uroot 或 -u root 均可；某些参数会有不同含义，如 -ppwd 和 -p pwd 有时分别表示密码或数据库。

#####1. 数据库导出：
	mysqldump -uroot -p 数据库名 -h主机地址(IP) > now.sql

#####2. 表结构导出：
	mysqldump -uroot -p123456 -d 数据库名 -h 主机地址(IP)  > now.sql

#####3. 在其他服务器创建数据库：
	mysqladmin -h  主机地址(IP)  create 要创建的数据库名 -p密码

#####4. 导出到文件：（仅在shell环境，需要gzip支持）
	mysqldump --quick 数据库名 -p | gzip now.gz

#####5. 导出到其他服务器：

	mysqldump --opt 数据库名 -p密码 | mysql -h 远程数据库地址(IP) 远程数据库名 -p远程数据库密码

	示例：mysqldump --opt db -pdbpwd | mysql -h 127.0.0.1 rdb -prdbpwd
	（默认是：-uroot，没有导出存储过程）


#####6. 同时导出存储过程：
	mysqldump --opt 数据库名 -p密码 -R -B | mysql -h 远程数据库地址(IP) 远程数据库名 -p远程数据库密码


#####7. 单独导出存储过程：
	mysqldump --opt 数据库名 -p密码 -n -d -t -R | mysql -h  远程数据库地址(IP) 远程数据库名 -p远程数据库密码
	或：
	mysqldump  数据库名 -p密码  -n -d -t -R | mysql -h  远程数据库地址(IP) 远程数据库名 -p远程数据库密码
	导出到其他服务器会报错：

	ERROR 1235 (42000) at line 26: This version of MySQL doesn't yet support 'multiple triggers with the same action time and event for one table'

	大意是说MySQL（5.0版）暂不支持在同一操作中导出一张表的多个触发器。

    解决办法： 默认不带任何参数的时候 tiggers 值为真，那么我们修改他的值为假，给mysqldump 加上开关： --triggers=false 即可。 


	参考：
	http://blog.csdn.net/stevenyanzhi/article/details/6010229

#####8. 导出存储过程到文件：
	mysqldump 数据库 -p密码 -ndtR > procedure.sql
同样会出现上面的错误，解决方法：

	mysqldump 数据库 -p密码 -ndtR --triggers=false | mysql -h 远程数据库地址(IP) 远程数据库名 -p远程数据库密码

	导出存储过程部分参考了这里：http://samyu.blog.51cto.com/344284/146428

##引用：

	参数说明：
	-n:   --no-create-db
	-d:   --no-data
	-t:   --no-create-info
	-R:   --routines      Dump stored routines (functions and procedures)
	Mysqldump是客户端工具用来备份数据库或在不同数据库之间进行数据迁移。备份内容包含创建活装载表的SQL语句:
	主要参数介绍：
	1.连接选项
	  -u,--user=name
	  -p,--password=name
	  -h,--host=name
	  -P,--port=#
	2.输出内容选项
	 --add-drop-database
	 --add-drop-table
	 -n;--no-create-db
	 -d;--no-data
	 -t;--no-create-info
	3.输出格式选项
	--compact
	-c --complete-insert
	-T（指定数据表中的数据备份为单纯的数据文件和建表SQL两个文件）
	注意：xx.sql建表文件是以linux的root用户创建，而xx.txt文件则是一linux的mysql用户创建，因此这两个文件的存放路径一定要保证mysql用户有读写创建文件的权限。
	--fields-terminated-by=name（域分隔符）
	--fields-enclosed-by=name（域引用符）
	--fields-optionally-enclosed-by=name（域引用可选字符）
	--fields-escaped-by=name(转义字符)
	4.字符集选项
	--default--character-set=xx
	5.其他选项
	-F --flush-logs（备份前刷新日志）
	-l --lock-tables(给所有的表加读锁)
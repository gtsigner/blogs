#vsftpd的使用
	1.ubuntu安装
		sudo apt-get install vsftpd



	2.vsftpd的主配置文件/etc/vsftpd/vsftpd.conf说明(修改前先备份)：
    
	 	#Example config file /etc/vsftpd/vsftpd.conf
		#The default compiled in settings are fairly paranoid. This sample file
		# loosens things up a bit, to make the ftp daemon more usable.
		# Please see vsftpd.conf.5 for all compiled in defaults.
		# READ THIS: This example file is NOT an exhaustive list of vsftpd options.
		# Please read the vsftpd.conf.5 manual page to get a full idea of vsftpd's
		# capabilities.
		# Allow anonymous FTP? (Beware - allowed by default if you comment this out).

		anonymous_enable=YES（是否允许匿名登录FTP服务器，默认设置为YES允许，即用户可使用用户名ftp或anonymous进行ftp登录，口令为用户的E-mail地址。如不允许匿名访问去掉前面#并设置为NO） 
	
		# Uncomment this to allow local users to log in.
		
		local_enable=YES （是否允许本地用户(即linux系统中的用户帐号)登录FTP服务器，默认设置为YES允许，本地用户登录后会进入用户主目录，而匿名用户登录后进入匿名用户的下载目录/var/ftp/pub；若只允许匿名用户访问，前面加上#，可阻止本地用户访问FTP服务器。）
		
		# Uncomment this to enable any form of FTP write command.
		
		write_enable=YES  （是否允许本地用户对FTP服务器文件具有写权限，默认设置为YES允许）
		
		# Default umask for local users is 077. You may wish to change this to 022,
		# if your users expect that (022 is used by most other ftpd's)
		
		#local_umask=022 （或其它值，设置本地用户的文件掩码为缺省022，也可根据个人喜好将其设置为其他值，默认值为077）

		# Uncomment this to allow the anonymous FTP user to upload files. This only
		# has an effect if the above global write enable is activated. Also, you will
		# obviously need to create a directory writable by the FTP user.

		#anon_upload_enable=YES （是否允许匿名用户上传文件，须将write_enable=YES，默认设置为YES允许）

		# Uncomment this if you want the anonymous FTP user to be able to create
		# new directories.

		#anon_mkdir_write_enable=YES  （是否允许匿名用户创建新文件夹，默认设置为YES允许）

		# Activate directory messages - messages given to remote users when they
		# go into a certain directory.

		#dirmessage_enable=YES （是否激活目录欢迎信息功能，当用户用CMD     模式首次访问服务器上某个目录时，FTP服务器将显示欢迎信息，默认情况下，欢迎信息是通过该目录下的.message文件获得的，此文件保存自定义的欢迎信息，由用户自己建立）

		# Activate logging of uploads/downloads.

		xferlog_enable=YES （默认值为NO如果启用此选项，系统将会维护记录服务器上传和下载情况的日志文件，默认情况该日志文件为/var/log/vsftpd.log,也可以通过下面的xferlog_file选项对其进行设定。）

		# Make sure PORT transfer connections originate from port 20 (ftp-data).
		connect_from_port_20=YES （设定FTP服务器将启用FTP数据端口的连接请求,ftp-data数据传输，21为连接控制端口）
		# If you want, you can arrange for uploaded anonymous files to be owned by
		# a different user. Note! Using "root" for uploaded files is not
		# recommended!-注意，不推荐使用root用户上传文件
		#chown_uploads=YES（设定是否允许改变上传文件的属主，与下面一个设定项配合使用）
		#chown_username=whoever （设置想要改变的上传文件的属主，如果需要，则输入一个系统用户名，例如可以把上传的文件都改成root属主。whoever：任何人）
		# You may override where the log file goes if you like. The default is shown
		# below.
		#xferlog_file=/var/log/vsftpd.log(设定系统维护记录FTP服务器上传和下载情况的日志文件，/var/log/vsftpd.log是默认的，也可以另设其它)
		# If you want, you can have your log file in standard ftpd xferlog format
		#xferlog_std_format=YES（如果启用此选项，传输日志文件将以标准xferlog的格式书写，该	格式的日志文件默认为/var/log/xferlog,也可以通过xferlog_file选项对其进行设定，默认值为NO）
		#dual_log_enable(如果添加并启用此选项，将生成两个相似的日志文件，默认在/var/log/xferlog和/var/log/vsftpd.log目录下。前者是wu_ftpd类型的传输日志，可以利用标准日志工具对其进行分析；后者是vsftpd类型的日志)
		#syslog_enable(如果添加并启用此选项，则原本应该输出到/var/log/vsftpd.log中的日志，将输	出到系统日志中)
		# You may change the default value for timing out an idle session.
		#idle_session_timeout=600 （设置数据传输中断间隔时间，此语句表示空闲的用户会话中断时间为600秒，即当数据传输结束后，用户连接FTP服务器的时间不应超过600秒，可以根据实际情况对该值进行修改）
		# You may change the default value for timing out a data connection.
		#data_connection_timeout=120 （设置数据连接超时时间，该语句表示数据连接超时时间为120秒，	可根据实际情况对其个修改）
		# It is recommended that you define on your system a unique user which the
		# ftp server can use as a totally isolated and unprivileged user.
		#nopriv_user=ftpsecure （运行vsftpd需要的非特权系统用户，缺省是nobody）
		# Enable this and the server will recognise asynchronous ABOR requests. Not
		# recommended for security (the code is non-trivial). Not enabling it,
		# however, may confuse older FTP clients.
		#async_abor_enable=YES（如果FTP client会下达“async ABOR”这个指令时，这个设定才需	要启用，而一般此设定并不安全，所以通常将其取消）
		# By default the server will pretend to allow ASCII mode but in fact ignore
		# the request. Turn on the below options to have the server actually do ASCII
		# mangling on files when in ASCII mode.
		# Beware that on some FTP servers, ASCII support allows a denial of service
		# attack (DoS) via the command "SIZE /big/file" in ASCII mode. vsftpd
		# predicted this attack and has always been safe, reporting the size of the
		# raw file.
		# ASCII mangling is a horrible feature of the protocol.
		#ascii_upload_enable=YES （大多数FTP服务器都选择用ASCII方式传输数据，将#去掉就能实	现用ASCII方式上传和下载文件）
		#ascii_download_enable=YES （将#去掉就能实现用ASCII方式下载文件）
		# You may fully customise the login banner string:
		#ftpd_banner=Welcome to blah FTP service. （将#去掉可设置登录FTP服务器时显示的欢迎信息，可以修改=后的欢迎信息内容。另外如在需要设置更改目录欢迎信息的目录下创建名	为.message的文件，并写入欢迎信息保存后，在进入到此目录会显示自定义欢迎信息）
		# You may specify a file of disallowed anonymous e-mail addresses. Apparently
		# useful for combatting certain DoS attacks.
		#deny_email_enable=YES（可将某些特殊的email address抵挡住。如果以anonymous登录服务器时，会要求输入密码，也就是您的email address,如果很讨厌某些email address，就可以使	用此设定来取消他的登录权限，但必须与下面的设置项配合）
		# (default follows)
		#banned_email_file=/etc/vsftpd/banned_emails（当上面的	deny_email_enable=YES		时，可以	利用这个设定项来规定那个email address不可登录vsftpd服务器，此文件需用户自己创建，一行	一个email address即可！）
		# You may specify an explicit list of local users to chroot() to their home
		# directory. If chroot_local_user is YES, then this list becomes a list of
		# users to NOT chroot().
		#chroot_list_enable=YES（设置为NO时，用户登录FTP服务器后具有访问自己目录以外的其他文	件的权限，设置为YES时，用户被锁定在自己的home目录中，vsftpd将在下面	chroot_list_file选项值的位置寻找chroot_list文件，此文件需用户建立,再将需锁定在自己home目录的用户列入其中，每行一个用户）
		# (default follows)
		#chroot_list_file=/etc/vsftpd/chroot_list（此文件需自己建立，被列入此文件的用户，	在登录后将不能切换到自己目录以外的其他目录，由FTP服务器自动地chrooted到用户自己的	home目录下，使得chroot_list文件中的用户不能随意转到其他用户的FTP home目录下，从	而有利于FTP服务器的安全管理和隐私保护）
		# You may activate the "-R" option to the builtin ls. This is disabled by
		# default to avoid remote users being able to cause excessive I/O on large
		# sites. However, some broken FTP clients such as "ncftp" and "mirror" assume
		# the presence of the "-R" option, so there is a strong case for enabling it.
		#ls_recurse_enable=YES（是否允许递归查询，大型站点的FTP服务器启用此项可以方便远程用	户查询） 
		# When "listen" directive is enabled, vsftpd runs in standalone mode and
		# listens on IPv4 sockets. This directive cannot be used in conjunction
		# with the listen_ipv6 directive.
		listen=YES（如果设置为YES，则vsftpd将以独立模式运行，由vsftpd自己监听和处理连接请求）
		# This directive enables listening on IPv6 sockets. To listen on IPv4 and IPv6
		# sockets, you must run two copies of vsftpd whith two configuration files.
		# Make sure, that one of the listen options is commented !!
		#listen_ipv6=YES(设定是否支持IPV6)
		#pam_service_name=vsftpd（设置PAM外挂模块提供的认证服务所使用的配置文件名，即/etc/pam.d/vsftpd文件，此文件中file=/etc/vsftpd/ftpusers字段，说明了PAM模块能抵挡的帐号内容来自文件/etc/vsftpd/ftpusers中）
		#userlist_enable=YES/NO（此选项默认值为NO ,此时ftpusers文件中的用户禁止登录FTP服务器；若此项设为YES，则user_list文件中的用户允许登录   FTP服务器，而如果同时设置了userlist_deny=YES，则user_list文件中的用户将不允许登录FTP服务器，甚至连输入密码提示信息都没有，直接被FTP服务器拒绝）
		#userlist_deny=YES/NO（此项默认为YES，设置是否阻扯user_list文件中的用户登录FTP服务器）
		tcp_wrappers=YES （表明服务器使用tcp_wrappers作为主机访问控制方式，tcp_wrappers可以实现linux系统中网络服务的基于主机地址的访问控制，在/etc目录中的hosts.allow和hosts.deny两个文件用于设置tcp_wrappers的访问控制，前者设置允许访问记录，后者设置拒绝访问记录。例如想限制某些主机对FTP服务器192.168.57.2的匿名访问，编缉/etc/hosts.allow文件，如在下面增加两行命令：vsftpd:192.168.57.1:DENY 和vsftpd:192.168.57.9:DENY表明限制IP为192.168.57.1/192.168.57.9主机访问IP为192.168.57.2的FTP服务器，此时FTP服务器虽可以PING通，但无法连接）
		在FTP服务器的管理中无论对本地用户还是匿名用户，对于FTP服务器资源的使用都需要进行控控制，避免由于负担过大造成FTP服务器运行异常，可以添加以下配置项对FTP客户机使用FTP服务器资源进行控制：
		max_client设置项用于设置FTP服务器所允许的最大客户端连接数，值为0时表示不限制。例如max_client=100表示FTP服务器的所有客户端最大连接数不超过100个。
		max_per_ip设置项用于设置对于同一IP地址允许的最大客户端连接数，值为0时表示不限制。例如max_per_ip=5表示同一IP地址的FTP客户机与FTP服务器建立的最大连接数不超过5个。
		local_max_rate设置项用于设置本地用户的最大传输速率，单位为B/s，值为0时表示不限制。例如local_max_rate=500000表示FTP服务器的本地用户最大传输速率设置为500KB/s.
		ano n_max_rate设置项用于设置匿名用户的最大传输速率，单位为B/s,值为0表示不限制。例如ano_max_rate=200000，表示FTP服务器的匿名用户最大传输速率设置为200KB/s.
		vsftpd.user_list文件需要与vsftpd.conf文件中的配置项结合来实现对于vsftpd.user_list文件中指定用户账号的访问控制：
		（1）设置禁止登录的用户账号
		当vsftpd.conf配置文件中包括以下设置时，vsftpd.user_list文件中的用户账号被禁止进行FTP登录：
		userlist_enable=YES
		userlist_deny=YES
		userlist_enable设置项设置使用vsftpd.user_list文件，userlist_deny设置为YES表示vsftpd.user_list文件用于设置禁止的用户账号。
		（2）设置只允许登录的用户账号
		当vsftpd.conf配置文件中包括以下设置时，只有vsftpd.user_list文件中的用户账号能够进行FTP登录：
		userlist_enable=YES
		userlist_deny=NO
		userlist_enable设置项设置使用vsftpd.user_list文件，userlist _deny设置为NO表示vsftpd.usre_list文件用于设置只允许登录的用户账号，文件中未包括的用户账号被禁止FTP登录。
		userlist_deny和userlist_enable选项限制用户登录FTP服务器（使用userlist_deny选项和user_list文件一起能有效阻止root,apache,www等系统用户登录FTP服务器，从而保证FTP服务器的分级安全性）：
		
		Userlist_enable=YES
			
		
		Ftpusers中用户允许访问
		
		User_list中用户允许访问
		
		Userlist_enable=NO
			
		
		Ftpusers中用户禁止访问
		
		User_list中用户允许访问
		
		Userlist_deny=YES
			
		
		Ftpusers中用户禁止访问（登录时可以看到密码输入提示，但仍无法访问）
		
		user_list 中用户禁止访问
		
		Userlist_deny=NO
			
		
		ftpusers中用户禁止访问
		
		user_list中用户允许访问
		
		Userlist_enable=YES 并且
		
		Userlist_deny=YES
			
		
		Ftpusers中用户禁止访问
		
		User_list中用户禁止访问（登录时不会出现密码提示，直接被服务器拒绝）
		
		Userlist_enable=YES 并且
		Userlist_deny=NO
			
		
		Ftpusers中用户禁止访问
		User_list中用户允许访问
		配置FTP服务器的虚拟用户
		在vsftpd服务器中支持匿名用户，本地用户，和虚拟用户3类用户账号，用途及区别如下：
		匿名用户是名为anonymous或ftp的FTP用户，匿名FTP用户登录后将FTP服务器中的/var/ftp作为FTP根目录。匿名用户通常用于提供公共文件的下载，如架设公共软件下载的FTP服务器，所有人都可以使用匿名用户进行软件下载。
		本地用户账号是FTP服务器中的系统用户账号，使用FTP本地用户账号登录FTP服务器后，登录目录为本地用户的宿主目录。本地FTP用户账号通常和Web服务器一起提供虚拟主机服务，作为网页虚拟主机更新网页的途径。
		虚拟用户账号是为了保证FTP服务器的安全性，由vsftpd服务器提供的非系统用户账号。虚拟用户FTP登录后将把指定的目录作为FTP根目录。虚拟用户与本地用户具有类似的功能，由于虚拟用户相对安全，因此正逐步替代本地用户账号。
		由于虚拟用户账号具有较高的安全性，可以替代本地用户账号使用，下面是vsftpd虚拟用户账号设置的几个步骤：
		以设置miket 和 john 两个虚拟用户帐号为例来配置vsftpd服务器
		(1)建立虚拟用户口令库文件
		建立虚拟用户的口令文件，文件中奇数行设置虚拟用户的用户名，偶数行设置用户的口令。例如，使用vi编辑器建立名为logins.txt的用户口令库文件，在文件中设置用户mike的口令为pwabcd,用户john 的口令是pw1234:
		#vi logins.txt
		mike      (奇数行设置虚拟用户名)
		pwabcd   （偶数行设置用户口令）
		john
		pw1234
		:wq(保存退出)
		(2)生成vsftpd 的认证文件
		使用db_load 命令生成认证文件。“-f”命令选项设置的值是虚拟用户的口令库文件，即上面创建的logins.txt。命令的参数设置为需要生成的认证文件名如 vsftpd_login.db，该文件放置在目录/etc/vsftpd/下：
		#db_load  -T  -t hash  –f  logins.txt  /etc/vsftpd_login.db   (生成认证文件)
		#file  /etc/vsftpd/vsftpd_login.db                            (查看文件类型)
		/etc/vsftpd/vsftpd_login.db:Berkeley DB (Hash,version  8 , native byte-order)
		生成的认证文件的权限应设置为只对root用户可读可写，即600:
		#chmod  600  /etc/vsftpd/vsftpd_login.db
		(3)建立虚拟用户所需的PAM配置文件
		在/etc/pam.d目录下建立vsftpd虚拟用户身份认证所需的PAM配置文件，名称是vsftpd.vu,内容为：
		#cat /etc/pam.d/vsftpd.vu
		auth  required  /lib/security/pam_userdb.so  db=/etc/vsftpd/vsftpd_login
		account  required  /lib/security/pam_userdb.so  db=/etc/vsftpd/vsftpd_login
		(4)建立虚拟用户及要访问的目录并设置相应的权限
		建立vsftpd虚拟用户所需的系统用户账号，账号名为virtual，指定用户的宿主目录是/home/ftpsite,设置宿主目录的权限为700：
		#useradd  -d  /home/ftpsite  virtual
		#chmod  700  /home/ftpsite/
		这样vsftpd服务器中的所有虚拟用户账号登录后都将在/home/ftpsite目录中
		(5)设置vsftpd.conf主配置文件
		在对vsftpd.conf配置文件进行修改之前，应先将原有的文件进行备份，以便出现配置错误时可进行恢复：
		#cd /etc/vsftpd
		#cp vsftpd.conf vsftpd.conf.bak
		在vsftpd.conf配置文件中添加虚拟用户的配置项，内容为：
		guest_enable=YES
		guest_username=virtual
		pam_service_name=vsftpd.vu
		(6)重新启动vsftpd服务程序
		在对vsftpd.conf配置文件进行了任何修改后都需要重新启动vsftpd服务，以便配置生效：
		#service vsftpd restart
		(7)测试vsftpd中的虚拟用户账号:mike 或 john
		在测试前可以先在/home/ftpsite目录中建立测试文件，用于测试时进行下载，并设置该文件的属主和属组为virtual
		#touch /home/ftpsite/afile
		#chown  virtual.virtual  /home/ftpsite/afile
		使用ftp命令登录vsftpd服务器，并使用已配置的虚拟用户帐号mike进行登录
		#ftp localhost
		name (localhost:root):mike
		password:
		ftp>get afile
		在完成虚拟用户的FTP登录后，可使用get命令下载测试文件，测试文件会保存到用户的当前目录中。
		(8)对不同的虚拟用户设置不同的权限
		vsftpd服务器中的虚拟用户可以灵活的针对不同的用户账号设置不同的用户权限，配置的步骤如下：
		1．设置主配置文件
		在vsftpd.conf配置文件中添加user_config_dir配置项，并设置用户配置文件的保存目录
		user_config_dir=/etc/vsftpd_user_conf
		在上面的配置实例中，设置在/etc/vsftpd_user_conf目录中保存虚拟用户的配置文件
		2．建立用户配置文件目录
		使用mkdir命令建立虚拟用户配置文件的保存目录
		#mkdir  /etc/vsftpd_user_conf
		3.为虚拟用户建立单独的配置文件
		在/etc/vsftpd_user_conf/目录中可以为每个虚拟用户建立独立的配置文件，配置文件名称和用户名相同。例如，为用户mike建立配置文件mike ,并将anon_world_readable_only设置为NO，表示用户具有浏览和下载的权限
		#cat  /etc/vsftpd_user_conf/mike
		anon_world_readable_only=NO
		为用户john建立配置文件john，并设置该用户具有浏览，下载，上传，改名，删除文件，建立和删除的权限。
		#cat  john
		anon_world_readable_only=NO   --表示用户可以浏览FTP目录和下载文件
		anon_upload_enable=YES        --表示用户可以上传文件
		anon_mkdir_write_enable=YES   --表示用户具有建立和删除目录的权利
		anon_other_write_enable=YES   --表示用户具有文件改名和删除文件的权限
		通过对以上配置项的组合设置，vsftpd可以为每个虚拟用户配置不同的FTP权限，用户配置文件中没有的配置项将按照vsftpd.conf配置文件中的内容设置。
		vsftpd服务器的其它主要设置：
		1．最大传输速率设置：
		设置匿名用户的最大传输率为20Kbps,修改/etc/vsftpd/vsftpd.conf添加语句：anon_max_rate=20000
		设置本地帐号最大传输率为1Mbps，修改/etc/vsftpd/vsftpd.conf添加语句：local_max_rate=1000000
		2．服务器最大并发数和用户最大线程数设置：
		例如设置服务器允许的最大并发数为99，而每个用户同一时段的最大并发线程数为5，修改/etc/vsftpd/vsftpd.conf添加两行语句：max_clients=99 和 max_per_ip=5
		3．修改默认端口：
		默认FTP服务器端口号是21，出于安全目的，有时需修改默认端口号，修改/etc/vsftpd/vsftpd.conf
		添加语句(例)：listen_port=4449 该语句指定了修改后FTP服务器的端口号，应尽量大于4000，修改后访问
		    #ftp 192.168.57.2 4449(需加上正确的端口号了，否则不能正常连接)
		4．设置用户组，增强FTP服务器安全性：
		举例：
		#mkdir –p /home/try  递归创建新目录
		#groupadd try        新建组
		#useradd –g try –d /home/try try1 新建用户try1并指定家目录和属组
		#useradd –g try –d /home/try try2 新建用户try2并指定家目录和属组
		#useradd –g try –d /home/try try3 新建用户try3并指定家目录和属组
		#passwd try1  为新用户设密码
		#passwd try2  为新用户设密码
		#passwd try3  为新用户设密码
		#chown try1 /home/try 设置目录属主为用户try1
		#chown .try /home/try 设置目录属组为组try
		#chmod 750 /home/try  设置目录访问权限try1为读，写，执行；try2，try3为读，执行
		由于本地用户登录FTP服务器后进入自己主目录，而try1,try2 try3对主目录/home/try分配的权限不同，所以通过FTP访问的权限也不同，try1访问权限为：上传，下载，建目录 ;try2ty3访问权限为下载，浏览，不能建目录和上传。实现了群组中用户不同访问级别，加强了对FTP服务器的分级安全管理。
		5．常见的vsftpd日志解决方案如下：
		xferlog_enable=YES (表明FTP服务器记录上传下载的情况)
		xferlog_std_format=YES （表明将记录的上传下载情况写在xferlog_file所指定的文件中，即xferlog_file选项指定的/var/log/xferlog文件中）
		xferlog_file=/var/log/xferlog
		dual_log_enable=YES （表明启用了双份日志，在用xferlog文件记录服务器上传下载情况的同时，vsftpd_log_file所指定的文件，即/var/log/vsftpd.log也将用来记录服务器的传输情况）
		vsftpd_log_file=/var/log/vsftpd.log
		vsftpdr的两个日志文件分析如下：
		/var/log/xferlog 记录内容举例
		Thu Sep 6 09:07:48 2007 7 192.168.57.1 4323279 /home/student/phpMyadmin-2.11.0-all-languages.tar.gz b – i r student ftp 0 * c
		/var/log/vsftpd.log 记录内容举例
		Tue Sep 11 14:59:03 2007 [pid 3460]    CONNECT: Client “127.0.0.1”
		Tue Sep 11 14:59:24 2007 [pid 3459] [ftp] OK LOGIN;Client “127.0.0.1” ,anon password ”?”
		                        /var/log/xferlog日志文件中数据的分析和参数说明
		记录数据
			参数名称
			参数说明
		Thu Sep 6 09:07:48 2007
			当前时间
			当前服务器本地时间，格式为：
		DDD MMM dd hh:mm:ss YYY
		7
			传输时间
			传送文件所用时间，单位为秒
		192.168.57.1
			远程主机名称/IP
			远程主机名称/IP
		4323279
			文件大小
			传送文件的大小，单位为byte
		/home/student/phpMyadmin-
		2.11.0-all-languages.tar.gz
			文件名
			传输文件名，包括路径
		b
			传输类型
			传输方式的类型，包括两种：
		a以ASCII传输 b以二进制文件传输
		–
			特殊处理标志
			特殊处理的标志位，可能的值包括：
		_ 不做任何特殊处理
		C 文件是压缩格式
		U 文件是非压缩格式
		T 文件是tar格式
		i
			传输方向
			文件传输方向，包括两种：
		o 从FTP服务器向客户端传输
		i 从客户端向FTP服务器传输
		r
			访问模式
			用户访问模式，包括：
		a 匿名用户
		g 来宾用户
		r 真实用户，即系统中的用户
		student
			用户名
			用户名称
		ftp
			服务名
			所使用的服务名称，一般为FTP
		0
			认证方式
			认证方式，包括：
		0 无
		1 RFC931认证
		*
			认证用户id
			认证用户的id，如果使用*，则表示无法获得该id
		c
			完成状态
			传输的状态：
		c 表示传输已完成
		i 表示传输示完成
		6．匿名FTP设置方法：
		通常在登录FTP服务器的用户不确定的情况下，应将FTP服务器设置为允许匿名账号登录的FTP服务器
		1．启用匿名帐号
		  anonymous_enable=YES
		  local_enable=YES
		  write_enable=YES
		  listen=YES
		设置完成后，重启vsftd.将允许匿名账号和本地账号登录FTP服务器，同时允许匿名用户具有对FTP服务器文件的写权限，并且只能下载文件而不能上传，不允许匿名账号创建文件夹，匿名用户的口令为一个E-mail地址。
		2．允许匿名账号上传文件
		anon_upload_enable=YES
		anon_mkdir_write_enable=YES
		将#去掉即可，重启vsftpd.将允许匿名账号上传文件，也就是具有在FTP服务器的本地目录中新建文件和文件夹的功能
		3．仅允许匿名用户访问
		#local_enable=YES
		#write_enable=YES
		在前面加上#，即限制本地账号访问，仅允许匿名用户访问
		4．禁止匿名访问，允许本地账号访问
		anonymous_enable=NO
		  local_enable=YES
		  write_enable=YES
		常见FTP命令及其功能
		FTP命令
			功能
			FTP命令
			功能
		
		ls
			显示服务器上的目录
			ls [remote-dir][local-file]
			显示远程目录remote-dir，并存入本地文件local-file
		
		get remote-file [local-file]
			从服务器下载指定文件到客户端
			mget remote-files
			下载多个远程文件(mget命令允许用通配符下载多个文件)
		
		put local-file [remote-file]
			从客户端上传指定文件到服务器
			mput local-file
			将多个文件上传至远程主机(mput命令允许用通配符上传多个文件)
		
		open
			连接FTP服务器
			mdelete [remote-file]
			删除远程主机文件
		
		close
			中断与远程服务器的ftp会话（与open对应）
			mkdir dir-name
			在远程主机中创建目录
		
		open host[port]
			建立指定的ftp服务器连接，可指定连接端口
			newer file-name
			如果远程主机中file-name的修改时间比本地硬盘同名文件的时间更近，则重传该文件
		
		cd directory
			改变服务器的工作目录
			rename [from][to]
			更改远程主机的文件名
		
		lcd directory
			在客户端上(本地)改变工作目录
			pwd
			显示远程主机的当前工作目录
		
		bye
			退出FTP命令状态
			quit
			同bye,退出ftp会话
		
		ascii
			设置文件传输方式为ASCII模式
			reget remote-file [local-file]
			类似于get,但若local-file存在，则从上次传输中断处续传
		
		binary
			设置文件传输方式为二进制模式
			rhelp [cmd-name]
			请求获得远程主机的帮助
		
		![cmd [args]]
			在本地主机中交互shell后退回到ftp环境，如:!ls *.zip
			rstatus [file-name]
			若未指定文件名，则显示远程主机的状态，否则显示文件状态
		
		accout [password]
			提供登录远程系统成功后访问系统资源所需的密码
			hash
			每传输1024字节，显示一个hash符号（#）
		
		append local-file [remote-file]
			将本地文件追加到远程系统主机，若未指定远程系统文件名，则使用本地文件名
			restart marker
			从指定的标志marker处，重新开始get或put，如restart 130
		
		bye
			退出ftp会话过程
			rmdir dir-name
			删除远程主机目录
		
		case
			在使用mget命令时，将远程主机文件名中的大写转为小写字母
			size file-name
			显示远程主机文件大小，如：
		size idle 7200
		
		cd remote-dir
			进入远程主机目录
			status
			显示当前ftp状态
		
		cdup
			进入远程主机目录的父目录
			system
			显示远程主机的操作系统
		
		delete remote-file
			删除远程主机文件
			user user-name [password][account]
			向远程主机表明自己的身份，需要密码时，必须输入密码，如:user anonymous my@email
		
		dir [remote-dir][local-file]
			显示远程主机目录，并将结果存入本地文件
			help [cmd]
			显示ftp内部命令cmd的帮助信息，如help get
		FTP数字代码的意义110 重新启动标记应答。
		120 服务在多久时间内ready。
		125 数据链路端口开启，准备传送。
		150 文件状态正常，开启数据连接端口。
		200 命令执行成功。
		202 命令执行失败。
		211 系统状态或是系统求助响应。
		212 目录的状态。
		213 文件的状态。
		214 求助的讯息。
		215 名称系统类型。
		220 新的联机服务ready。
		221 服务的控制连接端口关闭，可以注销。
		225 数据连结开启，但无传输动作。
		226 关闭数据连接端口，请求的文件操作成功。
		227 进入passive mode。
		230 使用者登入。
		250 请求的文件操作完成。
		257 显示目前的路径名称。
		331 用户名称正确，需要密码。
		332 登入时需要账号信息。
		350 请求的操作需要进一部的命令。
		421 无法提供服务，关闭控制连结。
		425 无法开启数据链路。
		426 关闭联机，终止传输。
		450 请求的操作未执行。
		451 命令终止:有本地的错误。
		452 未执行命令:磁盘空间不足。
		500 格式错误，无法识别命令。
		501 参数语法错误。
		502 命令执行失败。
		503 命令顺序错误。
		504 命令所接的参数不正确。
		530 未登入。  532 储存文件需要账户登入。 550 未执行请求的操作。 551 请求的命令终止，类型未知。
		552 请求的文件终止，储存位溢出。   553 未执行请求的的命令，名称不正确。
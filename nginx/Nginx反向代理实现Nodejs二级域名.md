##安装nodejs



##安装forever



##下载Nginx包
-	http://nginx.org/en/download.html
-	#tar -zxf ...
-	# ./configure --help
-	# ./configure --prefix=/usr/local/nginx1.8 --with-prce
-	# make
-	# make install


##配置nodejs web

-	第一个站点
-	www：port=3000
-	第二个占点
-	www：port=3001

##做反向代理

-	# cd /usr/local/nginx1.8/conf
-	# mkdir vhost  !/创建一个虚拟主机目录
-	# vim nginx.conf
-	在http域里面添加一行
	
    	include vhost/*.conf;
-	#touch ./vhost/demo.conf


-	下面是我配置的2个站点的例子


		server {
		        listen       80;
		        root /home/wwwroot;
		        server_name  www.seung.cn seung.cn
		        index index.html index.php index.htm;
		
		
		        location / {
		            proxy_pass http://127.0.0.1:3000;
		            proxy_set_header X-Real-IP ~Dremote_addr;
		            proxy_set_header X-Forwarded-For ~Dproxy_add_x_forwarded_for;
		            proxy_set_header Host ~Dhttp_host;
		            proxy_set_header X-NginX-Proxy true;
		
		
		        }
		}
		server {
		        listen       80;
		        root /home/wwwroot;
		        server_name  en.seung.cn
		        index index.html index.php index.htm;
		
		
		        location / {
		            proxy_pass http://127.0.0.1:3001;
		            proxy_set_header X-Real-IP ~Dremote_addr;
		            proxy_set_header X-Forwarded-For ~Dproxy_add_x_forwarded_for;
		            proxy_set_header Host ~Dhttp_host;
		            proxy_set_header X-NginX-Proxy true;
		
		
		        }
		}
		
		
		

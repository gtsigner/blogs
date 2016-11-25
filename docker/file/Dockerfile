#FROM 基于馁个镜像进行创建，这里我们基于我们已经安装好的centos
FROM centos
MAINTAINER zhaojunlike
#当然这里肯定不是这么写的，我只是测试一下
RUN cd /home/
RUN wget http://nginx.org/download/nginx-1.10.2.tar.gz
RUN yum install zlib-devel pcre-devel gcc -y
RUN tar zxf nginx-1.10.2.tar.gz 
RUN cd nginx-1.10.2
RUN ./configure --prefix=/usr/local/nginx1.10.2/
RUN make && make install
RUN /usr/local/nginx1.10.2/sbin/nginx



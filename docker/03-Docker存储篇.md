#Docker的数据存储
>Author:zhaojunlike@
>
>Email：zhaojunlike@gmail.com
>
>本篇文章来自于官方基于文档的指南学习整理
>
>如果英语好的同学其实可以看文档，更加详细。[数据管理传送门](https://docs.docker.com/engine/tutorials/dockervolumes/)


##Docker的存储原理
在docker的管理中,一个容器是很轻易的创建或者销毁的，如果我们直接创建一份容器，当在销毁他的时候，容器里面得数据配置，也变得不存在了，那么这个时候我们就需要一个共享的数据盘来存储已经管理我们的数据。
<code>#docker volume --help</code>


##给容器创建一个数据卷



##主机目录挂载数据卷

##多个容器之间管理挂载数据卷


##创建一个数据卷容器


##备份 恢复 迁移


##

##web多容器集群共享实战






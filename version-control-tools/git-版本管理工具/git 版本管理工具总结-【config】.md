##git config 篇
使用git config 命令了来获取或者设置仓库或者全局配置
##文档
[本地链接](file:///D:/ProgramIDE/Git/mingw32/share/doc/git-doc/git-push.html)

###使用方法


###描述
您可以通过这个命令进行 查询，设置，替换，重置。value_regex 可以是一个正则





#小技巧

##git长期存储密码
```
#git config --global credential.helper store
```
##git撤销上次的add
```
由于不小心直接 <code>#git add .</code>
如果想撤销可以使用<code>#git reset HEAD [file]</code>
```

##git撤销上次的commit
```
#git log
查看提交记录
```

```
#git reset commit_hash_id
撤销到场次的节点
```

##忽略文件
.gitignore
进行配置忽略文件
```
.log
.idea
#忽略所有得node_modules
node_modules
```



###Example

1.局部设置远程仓库的账号和密码
step1:
```
查看远程仓库
#git remote -v
查看仓库的配置文件
```
![](./)

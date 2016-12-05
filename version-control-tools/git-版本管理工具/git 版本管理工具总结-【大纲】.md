##安装


##初始化
```
#git init
```
配置用户名和邮箱
```
#git config --global user.name=zhaojun
#git config --global user.email=zhaojunlike@gmail.com
```

##操作git版本控制
先添加一个文件a.html
```
<h1>test a</h1>
```

查看git状态
```
#git status
```

添加文件改动到暂存区
```
#git add  a.html
```

提交文件
```
#git commit -m 'test 01'
```

查看提交日志
```
#git log
#git log --oneline 
#git log --oneline --decorate
#git log --oneline all
```

##分支控制
查看分支
```
#git branch
```
创建一个新的分支
```
#git branch $branch_name
```
切换分支
```
#git checkout $branch_name
```
1.在修改分支文件后，add commit后合并分支到master
```
切换到master分支
#git checkout master
#git merge $branch_name
```
2.在修改其他分支提交后，又修改了主分支，这个时候需要我们去合并的话可能会出现conflict，这个时候需要我们手动去解决
```
#git merge $branch_name

提示：
CONFLICT (content): Merge conflict in a
Automatic merge failed; fix conflicts and then commit the result.

```
我们有一个a文件内容为
```
aaaqwewe
<<<<<<< HEAD
t123est master
=======
23test master
>>>>>>> test-2
qweqwe
```
HEAD中的是主分支上得，下面的事test-2分支上的，手动去解决后，提交一次就ok了。



>修改分支，删除分支
>```
>修改
>#git branch -m $name_old $name_new
>删除
>#git branch -d test
>```



##远程remote

查看remote
```
#git remote -v
```

添加remote
```
#git remote add $name $url
```

修改remote
```

```


https方式push
```
-u -set-upstream
#git push -u $name $branch_name
然后输入账号和密码
```

ssh方式 [飞机票]()


##clone
克隆
```
#git clone $url $floder_name
#git clone $url 
```


##fork
step1：github fork按钮

step2：克隆项目
```
#git clone 
```

pull request




##添加贡献成员





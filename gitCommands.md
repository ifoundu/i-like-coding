# Note for Git Commands

### - Commit
#### - 合并多个 commit
之前自己在网上找的内容较琐碎，加上可能当时电脑问题，只做到合并成2个commits。
https://segmentfault.com/a/1190000007748862 老徐
- git log `按时间倒数`
- git rebase -i 
  - git rebase -i head~3 `从现在倒数3个版本`
  - git rebase -i [commit id] `该ID之前的版本会被合并`
- pick -> s 或 squash -> `保存并关闭vim, 覆盖不要的版本`
- git add . `如果有冲突，记得保留最新提交`
- git rebase --continue 
  - 放弃：git rebase --abort   
- 自动进入vim
- wq `保存并推出`
- git log `再次查看 commit 历史信息，你会发现这两个 commit 已经合并了`

### - 删除文件

- 删除命令    
  - git rm +文件名 `github上: 成功会显示在下一行：rm +'文件名'`  
  - rm +文件名 `本地`
- git commit -m""
- git push

### - 多个文件一起提交:同一级文件夹 才成功
- git add 文件夹 [可以是整个子文件夹]
- git add 文件1  [同个文件夹里的一个文件]
- git add 文件n
- git commit -m ""
- git push

### 路径有空格
cd ""
git add ""
### 子路径的文件
可直接在文件名前加上路径，进行 git add


### 文件名区分大小写

### 撤销 git add
git reset 文件/文件夹

### 本地建立仓库后，推送到 github
前提：已经在本地创建文件夹和文件  
- 在github上创建同名项目
- 进入本地文件夹
- git init // 在文件夹中生成 .git文件
- git add -A
- git commit -m "" //这两步与平常操作相同
- git remote add origin https://github.com/ifoundu/JS-headFirst.git // 项目地址
- git push -u origin master // 成功  

说明：github上的提示，在创建新项目后显示的。一次操作成功。

### 修改 commit 注释
- git commit --amend
> 进入 vi 编辑器修改
- ESC + shift ：进入 ex mode
- qw 保存退出 或 qw! 强制保存退出 
- git log 查看日志中的注释是否已改好
- git push 改好后推上github


 
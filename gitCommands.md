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

### - 多个文件一起提交
- git add 文件夹 [可以是整个子文件夹]
- git add 文件1  [同个文件夹里的一个文件]
- git add 文件n
- git commit -m ""
- git push


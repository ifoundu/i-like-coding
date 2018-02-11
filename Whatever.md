

## 2018-02-11

### 自问：为什么 fs.readdir 只有两个直接参数：path和callback函数，而把files参数间接地放在callback函数里？ 而fs.writeFile却直接是三个参数，data就是其一，这样callback里只有err一个参数了。  [代码实例](https://github.com/ifoundu/getting-started-with-javascript/tree/master/study/lesson6) 

### 自答：  
`目前认为原因如下：`  
  1. 因为files是目标文件，而扫描文件是可能要做筛选、限制或者说自定义需求的，所以要放在回调函数里，这样才可以自定义执行条件。换句话说，如果files不是做回调的参数，而是直接做fs.readdir的参数，就不能在回调函数里自定义files的执行条件了。 
     
  2. 而相对的，fs.writeFile里的data参数，也就是引用的老师的链接里的fileContent参数，是要写入文件里的数据，是已经筛选好的才是，比如就用fs.readdir函数先筛选好，可以被fs.writeFile用来直接写入其file参数位置，也就是说，在fs.writeFile不要不要不要再来筛选数据了，请给现成的。于是，不需要将数据放在可定义条件的callback函数里面，因此，callback才不需要也不必要异常情况（err)以外的参数了。  
  
  P.S.:err`大概`是为了显示给用户（前端）和程序员的吧。



--  
发现疑问，就动不了了。只能找出一个答案再说。
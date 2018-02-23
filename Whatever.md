

## 2018-02-11

### 自问：
#### 为什么 fs.readdir 只有两个直接参数：path和callback函数，而把files参数间接地放在callback函数里？ 而fs.writeFile却直接是三个参数，data就是其一，这样callback里只有err一个参数了。  [代码实例](https://github.com/ifoundu/getting-started-with-javascript/tree/master/study/lesson6) 

### 自答：  
`目前认为原因如下：`  
  1. 因为files是目标文件，而扫描文件是可能要做筛选、限制或者说自定义需求的，所以要放在回调函数里，这样才可以自定义执行条件。  
     换句话说，如果files不是做回调的参数，而是直接做fs.readdir的参数，就不能在回调函数里自定义files的执行条件了。 
     
  2. 而相对的，  
     fs.writeFile里的data参数，也就是引用的老师的链接里的fileContent参数，是要写入文件里的数据，是已经筛选好的才是，  
     比如就用fs.readdir函数先筛选好，可以被fs.writeFile用来直接写入其file参数位置，也就是说，在fs.writeFile不要不要不要再来筛选数据了，  
     请给现成的。于是，不需要将数据放在可定义条件的callback函数里面。因此，callback才不需要也不必要异常情况（err)以外的参数了。      
  
   P.S.: err `大概` 是为了显示给用户（前端）和程序员的吧。



--  
发现疑问，就动不了了。只能找出一个答案再说。

## 2018-02-16 ~ 约2018-02-18
## 2018-02-16

函数三个组成部分  
[图]  
这三点最重要。
顺序图，完全可以表现出一个嵌套。

执行顺序图（同步函数）
[图]  
（直接在图里看到函数的调用）

### 调试方式（着重）：   // 太可爱了！
```javascript
console.log('1');
function checkFlightSchedule() {
  console.log('2');
  return '8:00';   // 这是直接执行的结果，需要直接调用（才会输出）。
  console.log('3');
｝

console.log('4');
checkFlightSchedule();
console.log('5');
```
执行结果：


函数定义完了就完了，扔到内存里处于待用状态。  

PS: 服务器都具体调用了。第三方登录：微信第三方登录......，跟调函数一样。服务都函数化了。//老师V5。  


```javascript
//------ 秘书 --------
console.log(1);
function checkFlightSchedule(callback) {
  console.log(2);
  callback('8:00');
  console.log(3);
}

//------ 老板 --------  
console.log(4);
function callback(startTime) {
  console.log(5);
  console.log(startTime);
  console.log(6);
}

console.log(7);
checkFlightSchedule(callback);
console.log(8);

// 执行结果：1，4，7，2，5，8：00，6，3，8
```

### 间接返回（着重）
[图]  
顺序图跟代码的对照实际是一模一样的。

```javascript
//  间接返回 和 立即返回 的 区别

// ---（秘书）被调用的函数 ---
console.log(1);
function checkFlightSchedule(callback) {
  console.log(2);
  callback('8:00'); //回调
  return '查完了';  //立即返回结果，立即函数，同步
  console.log(3);
}

// ---（老板）属于调用者的代码 ---
console.log(4);
function callback(startTime) {
  console.log(5);
  console.log(startTime);
  console.log(6);
}

console.log(7);
var result = checkFlightSchedule(callback); //老板进行“立即调用（return结果）”：你查到后通过callback/回调函数，把结果给我。
console.log(result);
console.log(8);

// 如果把return去掉（同时把callback去掉），返回结果是undefined。  

```

同步函数里的间接返回是把事情做复杂了。 // 再看看。  
*同步调用的函数，不管通过什么方式给出结果，它一定有一个立即返回结果。即使不指定这样的返回结果，也会有一个undefined。  
一个函数没有参数，当调用者传一个参数，不会出错，因为没有用到。  
同步的间接返回是为了引入异步。  
### 异步函数
- 同步函数是两者一直在同一线路或频道上，它处理完，我拿到结果，我才能继续。  
- 异步是，指定任务后，老板该干嘛干嘛，秘书该干嘛干嘛。分头行事。这就是异步的妙用之处。
- 经典例子：招待客人。
 - 先烧水。烧水函数。
 - 同时，准备水果、陪客人聊天，等收到“水开壶响”的信息，再去关火。  
 异步就是干这个的。（同时不同步，同时异步，并联）  
- 之前的“文件搜索”：  
  你刚调用，异步函数在处理，你们已经不在同一个频道上。你的代码继续执行，当你想去打印这个值的时候，人家还没处理完，怎么能打印出来。因此必然得到undefined。  
[图]  
####          异步

- 中间电话挂断了，因为（此）他们不在一个频道上。
- 老板先调用了秘书这个函数：
 - 秘书做的第一件事情是告诉老板结果“收到”，这是“响应式结果”。调用这个函数这件事情就结束了。但是这个函数的事情并没有结束。秘书还在继续做事情。老板收到“收到”的结果，他继续做自己的事情。互不干涉。  
 - 老板给秘书一个callback函数，秘书这边的事情做完，通过callback函数给老板结果（最终结果，执行结果，处理结果）。
 - 函数定义完就扔到内存里面去了。（调用了才执行）
 - 异步函数再快，都是异步，都不可能有同步快，快不过顺序执行。
   同步是一行一行往前执行。  
~ try-catch:当我也不知道函数调用会有什么错时，用try-catch包住，当出错时，我希望能抓住这个错误，有机会去做弥补的措施。~


### 答疑
####  关于第5课，[kitchen_workflow_async.js](https://github.com/xugy0926/getting-started-with-javascript/blob/master/study/lesson5/kitchen_workflow_async.js)


 - （return)是立即调用，“准备工作prepare()”这个函数，立即给出结果。调用这个函数立即能得到结果。
 [图]  
 - 调用buyFoods(callback)也能得到一个响应结果，但不是真正处理结果。  
   响应结果相当于你告诉秘书给你查航班，她接到事情先响应“好的，收到了。”，然后自己去查。相当于console.log('我要开始采购食物啦...');然后才执行setTimeout。最终的结果是什么？如果你想给它一个响应的话，你就明确一定return'ok'或返回什么值都无所谓。但是如果你不明确给它一个响应的时候，它会你一个默认的响应“undefined”。这就是响应结果。调用这个函数它一定会先有一个响应结果，然后再有一个回调结果。
 - 做菜函数cooking()也是异步函数。跟bugFoods()是一样的。先调用开始做菜了，再调用setTimeout()，最终给了一个默认的响应结果回去了，最终它做完后就会回调到setTimeout()。//？？  
  - 函数写法：以下两段代码等价
```javascript 
setTimeout(function() {
  console.log('今天要做这些菜'+foodsList);
  console.log('大功告成，上菜');

  var feast = ['鸡蛋西红柿'+'红烧肉'+'红烧鱼'];
  callback(feast);
},5000);
```

```javascript
function callback() {
  console.log('今天要做这些菜'+foodsList);
  console.log('大功告成，上菜');

  var feast = ['鸡蛋西红柿'+'红烧肉'+'红烧鱼'];
  callback(feast);
}

setTimeout(callback,5000);
```

_ 打上日志，看执行顺序。一个个函数地去拆解和理解。_

#### Vue / item哪里跑出来的？
  例子:lesson7:easy_vue.html
（老师已经讲过，）数据绑定，最终DOM，html里的绑定的item是绑定到Vue的data里的一个变量。看起来毫无关系，但是它们之间建立了一一映射的关系。Vue的for循环极其简单。用Vue怎么做绑定？
- 先说item是什么？

```javascript
<h1> {{ item.title }}</h1>  //一定是在Vue里这个item
...... //看视频里的代码。看需不需要整段抄过来。
var obj = {
  el:'#abc',
  data: {
    item:'学习JavaScript'或item:{title:'abcd'} //把abcd输入到<h1></h1>
  }
}
// *Vue基础里的都要看，除了组件（暂时可不看）。  
  for循环是列表渲染里的。  
  现在把item:[1,2,3,4]  把item变成一个数组，渲染到节点上去。
  在<div>里复制上Vue文档里for循环代码
```javascript
<li v-for = "item in itemList">
  {{item}}    //老师把message去掉了。
</li>
```

（老师讲的游标指的是数组里的“索引”）  
JS里的也是类似写法。for(var i = 0...)。item在（in)items/itemList里面，它的处理逻辑是这样，将itemList里的第1个元素放在item里，这样你就可以用它;下次循环，又把第2个元素放到item里面。这种写法的好处是，我不关心游标国，可以很方便直接拿内容。（为什么说比以前方便了？）用老的for循环，还要定义游标，通过游标去访问。简单吧？ （emm,简单？）导致的结果是：  
(右击VSCode 里的文件名，在finder中显示)，打开html后，
```
1
2
3
4
```
出来了。  
要把Vue的例子一个个去试。例子写得特别好。 // 貌似得补补html  
Vue特别好玩，玩多了会上瘾。

## 2018-02-22

- 关于函数  
变量查找，自内而外；函数体调用却是自外而内。

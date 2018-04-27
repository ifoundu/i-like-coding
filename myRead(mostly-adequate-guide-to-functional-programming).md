[Chinese translation](https://github.com/llh911001/mostly-adequate-guide-chinese)  
[English original](https://github.com/MostlyAdequate/mostly-adequate-guide)  

First of all, just really want to thanks for both above.I could believe this is a wonderful journey of reading,even I don't completely understand what I have read.  

Also, thanks for our teacher, Xu Sir, who introduce it to us.  


Now, today, let me start to read it. Actually, I already glanced through the first few charpters just now.  
And I just feel I am happy reading it even I cannot understand some of the contents.

## 3
[链接](https://github.com/llh911001/mostly-adequate-guide-chinese/blob/master/ch3.md)
- 函数仅仅只是输入到输出的映射而已。  
  
- 让 minimum 成为一个不可变（immutable）对象，这样就能保留纯粹性，因为状态不会有变化。要实现这个效果，必须得创建一个对象，然后调用 Object.freeze 方法：
```javascript
var immutableState = Object.freeze({
  minimum: 21
});
```
- 纯函数就是数学上的函数，而且是函数式编程的全部。
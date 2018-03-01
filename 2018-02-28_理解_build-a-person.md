### lesson4/[build_a_human.js](https://github.com/xugy0926/getting-started-with-javascript/blob/master/study/lesson4/build_a_human.js)

```javascript
//声明并定义变量    <声明、定义>

var name = 'xiaoming';                           // 字符串型 加引号
var age = 18;                                    // 数字
var height = 170, weight = 130.1;                // 一次声明两个变量
var isMan = true;                                // 布尔值
var student = false;
var xinshengUserName = 'xiaoming';
var wechat_user_name = 'xiaoming';               // 变量名直接用下划线，不用驼峰法。
var locaitonBase = '北京';
var company = locaitonBase + '新生大学';
var myLikeColorsList = ['blue', 'green', 'black', 'write'];               // 数组，元素是字符串
var myLikeFoods = ['刀削面', '拉面', '牛肉面', '杂酱面', '麻辣面', '烩面', '莜面'];

// 定义一个函数变量buildPerson（表达式函数定义法）         <划重点：函数变量，表达式>
var buildPerson = function() {                         // 这里用函数定义，而非直接用变量定义（直接用变量定义的输出结果是一样的），
                                                       // 函数的作用是什么？老师在readem里讲的“将构建person信息封装在函数内”。
                                                       // 那么，封装的根本作用是什么？在这个情境下的具体作用是什么？
var xiaoming = {
    name: name,    // 属性格式。数组可理解为：简化的对象。看作：元素是属性名，但没有属性;
                   // (或者）元素是没有属性名的属性;(或者）属性名是游标是索引，属性是元素。最后一个理解最贴切。
                   // 属性name是变量名，引用了上面的全局变量name
    config: {
      age,         // 为什么单独用age就可以输出age:18
      height,      // 属性间用逗号隔开;最后一个属性的后面，记得就不要加逗号了。
      weight,
      isMan,
      student,
      bloodType: 'A',
      haveGirlFriend: true                               // 属性，是布尔值
    },
    like: {                                              // 对象的属性“like”，是一个(子)对象。
      myLikeColorsList,
      myLikeFoods
    },
    work: {
      locaitonBase,
      company
    }
  };

  return xiaoming;                                        // 直接返回结果
};                                                        // 这个分号好像不是必需的？

//调用(执行)buildPerson函数，根据基本信息构建
var personObj = buildPerson();                            // 立即调用;上面用表达式函数定义法。
console.log(personObj);
```

#### 直接用变量定义  (*是修改为注释或变动的地方)
```javascript

// 定义一个函数变量buildPerson（表达式函数定义法）
//*var buildPerson = function() {
  var xiaoming = {
    name: name,
    config: {
      age,
      height,
      weight,
      isMan,
      student,
      bloodType: 'A',
      haveGirlFriend: true
    },
    like: {
      myLikeColorsList,
      myLikeFoods
    },
    work: {
      locaitonBase,
      company
    }
  };

//*return xiaoming;
//*};

//调用(执行)buildPerson函数，根据基本信息构建                      <基本信息>
//*var personObj = buildPerson();
console.log(xiaoming);                                          //*

```

### 输出结果
```
 { name: 'xiaoming',
  config:
   { age: 18,
     height: 170,
     weight: 130.1,
     isMan: true,
     student: false,
     bloodType: 'A',
     haveGirlFriend: true },
  like:
   { myLikeColorsList: [ 'blue', 'green', 'black', 'write' ],
     myLikeFoods: [ '刀削面', '拉面', '牛肉面', '杂酱面', '麻辣面', '烩面', '莜面' ] },
  work: { locaitonBase: '北京', company: '北京新生大学' } }  
  
```

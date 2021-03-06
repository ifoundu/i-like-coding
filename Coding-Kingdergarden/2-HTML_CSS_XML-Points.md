# 2. HTML、CSS和XML ｜  要点

## [1/3]    什么是HTML
HTML是用来描述网页的一种语言。
- HTML指的是超文本标记语言（Hyper Text Markup Language），由标记/标签、属性和事件三者 组成。

  ```超文本: 图片，链接，音乐，程序和其他非文字元素```
  
  ```HTML不是一种编程语言，而是一种标记语言（markup language）```
  
- 标记：在电子计算机能理解的一些信息符号，如文章等数据。

  ```标记语言是一套标记标签（markup tag）```

  ``` 标签: 比如<head>和</head>, <title>和</title>```

  ```<meta charset="utf-8">是网页元信息```

  ```<p></P>非常语义化，只是表示这是一个段落，也是HTML最初想要表达的意思。```

- 属性：
  ```比如 draggable = "true"， 让元素可以被拖动，是一个属性。```
- 事件：
  ```比如 onclick```
  
*Q：属性和事件的具体定义和其他例子和运用*

### 基础HTML实例
```
<!DOCTYPE html><!--docType 声明文档类型-->
<html><!--文档（网页）开始标签-->
	<head><!--文档 头部-->
		<meta charset="utf-8"><!--声明编码-->
		<title>新生大学</title><!--定义标题-->
	</head>
	<body><!--文档主体部分-->
		<p draggable = "true"><!--其中draggable = "true"是html属性-->
			Lovely codes.
		</p>
		<div onclick="alert('hello,word!')"><!--其中onclick=""是html事件-->
			世界上最远的距离，是我在if里你在else里，虽然经常在一起出现，但却永不结伴执行。
		</div>

		<img src = "E:\JS Learning Records\2nd-C/stars.jpg" alt = "图片加载出错">
	</body>
</html>
```


## [2/3]    什么是CSS
- CSS指层叠样式表（Cascading Style Sheets)
- 样式定义如何显示HTML元素
- 多重样式重叠为一个

层叠次序：内联样式>内部样式表>外部样式表>浏览器缺省设置

### 增加CSS:  
#### (1) 内联样式：
  ```< p draggable = "true" style = "color:red;">```

#### (2) 内部样式表
  ```
  <title>新生大学</title>
  <style>
    body div{
      color:blue;
      font-size:20px;
    }
  </style>
  ```
#### (3) 外部样式表
  ```
    <title>新生大学</title>
    <link rel:"stylesheet" href = "./css-demo.css">
  </head>
  ```
 
    **独立的css-demo.css文件**
    ```
      body div{
        color:blue
        font-size:30px 
      }
    ```
  

#### *一些片段*
```
alt作用: 加载错误时的显示 

格式：alt = " "

例子：<img src = "./ting.png " alt = "图片加载错误">

问题：“显示站位”？ 站位吗？是什么意思？
```

大部分软件都支持XML数据格式。任何程序都能轻松解读XML文档。（基于课堂XML例子）

非常通用的数据传输协议

**产生的原因**: 没有行为规范;很多数据不能共通

实用：独立于硬件软件的一些_____ 方法

### [3/3]     XML和HTML的差异:
1. 为了不同目的而设计
2. XML被设计为传输和存储数据，其焦点是数据的内容
3. HTML被设计用来显示数据，其焦点是数据的外观
4. HTML旨在显示信息，而XML旨在传输信息

`XML一定要用结束句`

Q1: 除了课堂XML例子，还有什么其他例子？显示效果是什么样子？  

Q2: 可以把XML做为第四层吗？  

Q3：为什么没有讲XML怎么植入HTML？  




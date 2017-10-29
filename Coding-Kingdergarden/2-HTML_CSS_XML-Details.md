# 2-HTML_CSS_XML-Details.md

HTML是用来描述网页的一种语言。就是超文本标记语言。超文本标记语言就是
图片音乐链接程序等一些元素，统称为超文本。
HTML就一种标记语言，不是一种编程语言。
什么是标记语言呢？就是在计算机中，计算机所能理解的信息符号，就叫做标记。计算机可以通过这些标记处理各种各样的信息，比如文章和其他类型的数据。
标记语言就是一套标记标签。
HTML使用标记标签来描述整个网页。
（这里的）标记标签是指HTML尖括号里面的标签名。

具体例子：
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

由于各大浏览器厂商不断地往HTML里面加入

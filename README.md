### 基于jquery的国际化工具类
    用于前端文本国际化，支持同时引入多个语言资源文件，更友好的支持中文环境，在中文环境下无需引入资源文件

#### 使用方法

###### 文件引入

	该插件依赖于jquery 和 jquery.cookie，可修改源代码取消对后者的依赖
	<script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>
	<script src="https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
	<script src="../jquery.i18n.js"></script>

###### 使用方法

* 设置语言，参数为空时默认从浏览器里获取
```
$.i18n.setLocale('en');
```
* 加载资源文件，待国际化的代码都在回调函数中处理，参数success标识加载了资源文件，中文环境下无需加载资源文件

	```
	多个资源： $.i18n.load(['../lang/language.js', '../lang/language2.js'], function(success){...});
	单个资源： $.i18n.load('../lang/language.js', function(success){...});
	```

* 获取资源，详见demo

	* 通过 k-resid 标签属性获取
```
<label k-resid="username">用户名</label>
$('label[k-resid]').each(function(i, item){
	//下面两种方法都支持
	$(item).text($.i18n.prop(item));
	//$(item).text($.i18n.prop($(item).attr('k-resid')));
});
$('#j_username').attr('placeholder', $.i18n.prop('#j_username'));
```
    * 通过 id 获取
```
 alert($.i18n.prop('username_is_null', '请输入用户名'));
```
    * 占位符功能
```
 $('#whoami2').text($.i18n.prop('whoami', $.i18n.prop('monkey'), '16'));
```

#### 语言资源格式

```
$.i18n.lang = $.extend(true, $.i18n.lang || {}, {
	zh: {
		whoami: '我是{0}, 今年{1}岁',
		monkey: '猴子',
		'中文资源': '中文资源',
		test: '测试'
	},
	en: {
		whoami: 'I am {0}, I am {1} years old',
		monkey: 'Monkey',
		'中文资源': 'Chinese resources',
		test: 'Test'
	},
	'zh-tw': {
		whoami: '我是{0}，今年{1}歲',
		monkey: '鲁夫',
		'中文资源': '中文資源',
		test: '測試'
	}
});
```

#### Tips
	支持中文作为资源id配置，不建议这样使用，原因是不符合国际习惯以及资源文件相对较大

#### Demo

[demo/login.html](https://ekoz.github.io/jquery-i18n/demo/login.html)

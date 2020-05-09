# React项目每日进度：

## day01任务
		1.安装mongoDB、studiot-3t
		2.导入数据
		3.演示项目
		4.使用create-react-app创建脚手架,并精简。
		5.配置了antd

## day02任务
		1.引入react-router-dom，搭建一级路由(login路由、admin路由)
		2.Login组件---静态
		3.Login组件---引入antd的Form组件
		4.Login组件--用户名的声明式校验
		5.Login组件--密码的自定义校验
				注意：校验器的返回值是Promise，第一个参数我们不用。
		6.Login组件--收集表单数据
				注意：表单验证成功后，才会触发onFinish
		7.配置代理解决跨域
		8.axios请求拦截器统一处理参数json编码问题。
		9.axios响应拦截器统一处理：1.数据为data。2.错误。
		10.抽离:api/index.js统一管理项目的ajax请求。

## day03任务
		redux

## day04任务
		redux

## day05任务
		1.登录结果的提示+进度条
		2.若登录成功，跳转到：/admin
		3.搭建项目的redux环境（参考redux教学中最后一个版本）
		4.登录成功后，保存用户信息到redux
		5.Admin组件读取用户名展示
		6.处理刷新页面redux信息丢失的问题
		7.给Login组件和Admin组件增加权限的校验
		8.Header组件-静态
		9.Header组件-全屏，使用screenfull
		10.Header组件-退出登录

## day06任务
		1.Header组件展示用户名
		2.装饰器语法（讲解代码在App.js中）
				第一步：yarn add @babel/plugin-proposal-decorators 用于解析装饰器语法。
				第二步：在config-overrides.js，追加一个loader,addDecoratorsLegacy。
				第三步：在jsconfig.json中，追加一个配置："experimentalDecorators":true。
		3.将项目中的connect用装饰器语法去写。
		4.高阶函数 & 高阶组件
		5.自定义一个高阶组件，校验组件权限（难点，非必须掌握）
		6.LeftNav静态
		7.LeftNav--Menu组件
		8.LeftNav---Menu组件的分析
		9.自动生成菜单
		10.搭建Admin的二级路由

## day07任务
		1.点击左侧导航，实现跳转(注意文字变为主题颜色的处理，使用Link同时让图标作为菜单文字的一部分)
		2.刷新页面自动选择菜单、自动展开菜单
		3.登录后不自动选中首页的问题
				第一个解决办法：登录成功之后，不跳转/admin，直接跳转:/admin/home
				第二个解决办法：用selectedKeys 去代替 defaultSelectedKeys （推荐）
		4.LeftNav组件、Header组件与redux的交互---为了实现头部标题的展示
		5.处理刷新页面头部title丢失的问题---靠路径去计算title
		6.处理登录后头部“首页”丢失的问题---加上了判断，若路径是admin，直接改为home
		7.商品分类组件--静态，用到antd的Card组件、Table组件
		8.商品分类组件--初始化数据展示(非redux版，同步action版，异步action版)
		9.商品分类组件--新增弹窗

## day08任务
		1.完成新增分类
					(1).如何在不触发表单的提交且获得表单的数据（借助表单实例的API）
					(2).如何重置来一个antd里的表单
					(3).如果脱离了表单的提交回调去获取数据，获取数据之后要再次校验
		2.完成修改分类
					(1).如何在点击修改分类按钮时，获取当前分类的信息(_id,name),即：dataIndex和render的配合
					(2).表单的数据回显(繁琐)
								(2.1).不要直接给Form表单中的Input组件直接设置默认值。
								(2.2).借助Form组件的initialValues去设置Form中输入项的默认值。
								(2.3).initialValues两个时候生效：(1).表单初始化，即：第一弹窗 (2).表单重置的时候。
								(2.4).最终借助表单实例的setFieldsValue实现设置表单默认值。
					(3).并不一定所有的东西都要维护进状态，有时可以挂到this上。
		3.商品管理
					(1).初始化列表：对前端分页、后端分页的理解、各自的特点、后端分页的必备参数
					(2).搜索商品：注意搜索和初始化列表方法的复用，注意分页组件的使用
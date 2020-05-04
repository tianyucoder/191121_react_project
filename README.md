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
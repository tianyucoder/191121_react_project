# redux学习任务：
		1.求和案例纯react版
		2.求和案例-redux_mini版本
			 2.1 store是createStore创建的
			 2.2 store创建的时候就指定好了reducer
			 2.3 reducer是一个函数
			 2.4 精简的写法其实也可以不用actionCreator
			 2.5 注意：千万不要忘记暴露、千万不要忘记在index.js中store.subscribe
			 2.6 一些组件里用到api比如：getState()、dispatch()均是store上的。
			 2.7 reducer两个时候调用：1.初始化。2.修改redux中状态的时候。

		3.求和案例-redux-all-nonstandrad
			 3.1 action_types.js文件，用于定义type的常量。
			 3.2 count_action_creator.js，用于创建和count相关的action。

		4.求和案例-redux-all-standrad
			 4.1 文件结构、文件名都标准化了，文件的路径标识了文件的作用，文件的名标识了文件为谁服务。
			 4.2 方法名也标准了，例如：createIncrementAction 直接命名为 increment
		
		5.求和案例-react-redux
			 5.1 组件有了一个新的分类标准：容器组件、UI组件
			 5.2 index.js里的写法变了，不再写store.subscribe，要用Provider(顶级组件)
			 5.3 关键点就在容器组件的编写上，要注意：
			 			(1).容器组件不是我们靠函数或类去亲自定义的，靠的是connect方法。
						(2).connect这样使用：connect(mapStateToProps，mapDispatchToProps)(UI组件)
						(3).容器组件和UI组件是父子关系，所以容器给UI传递“东西”时，要用props
						(4).容器组件给UI组件传递：1.redux保存的状态 2.操作状态的方法。
						(5).扩展：一个“骚气”的简单写法


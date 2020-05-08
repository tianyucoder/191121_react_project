import React, { Component } from 'react'
import Admin from './containers/Admin/Admin'
import Login from './containers/Login/Login'
import {Switch,Route,Redirect} from 'react-router-dom'

export default class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/login" component={Login}/>
				<Route path="/admin" component={Admin}/>
				<Redirect to="login"/>
			</Switch>
		)
	}
}

//一、装饰器语法总结：
//情况一：装饰器函数没有return(必须是程序员写代码的return)
/* function demo(target) {
	target.a = 1
	target.b = 2
}

//使用装饰器语法，代码如下:
// @demo 
// class MyClass {}

//上方的装饰器语法，会被翻译为如下代码：
// class MyClass {}
// demo(MyClass) */

/****************************************************************/

//情况二：装饰器函数有返回值
/* function demo(target) {
	  let obj = {name:'lisi',age:19}
		target.a = 1
		target.b = 2
		return {...obj,...target}
}
//使用装饰器语法，代码如下
// @demo
// class MyClass {}

//上方的装饰器语法，会被翻译为如下代码:
// class MyClass {}
// MyClass = demo(MyClass) */

/****************************************************************/

//情况三：装饰器函数是另外一个函数调用的返回值
/* function test(){
	function demo(target) {
		target.a = 1
		target.b = 2
		return target
	}
	return demo
}

//使用装饰器语法，代码如下
@test()
class MyClass {}

//上方的装饰器语法，会被翻译为如下代码:
class MyClass {}
MyClass = test()(MyClass) */

/****************************************************************/

//二、高阶函数、高阶组件的总结：
/*
1. 高阶函数：
    1). 一类特别的函数，至少满足下列两个条件之一
        	1. 接受函数类型的参数
        	2. 返回值是函数
    2). 常见
        a. 定时器: setTimeout()/setInterval()
        b. Promise: Promise(() => {}) then(value => {}, reason => {})
        c. 数组遍历相关的方法: forEach()/filter()/map()/reduce()/find()/findIndex()
        d. 函数对象的bind()
    3). 作用：高阶函数可以更加的动态, 更加具有扩展性

2. 高阶组件:
			定义：如果一个函数,能够接收一个组件, 且返回一个新的组件。
			特点：
				1). 本质就是一个函数。
				2). 作用: 扩展组件的功能。
				3). 高阶组件属于一种特殊的高阶函数，特殊在这个函数接收到的是组件，返回的也是组件。

		 例如：connect调用所返回的那个函数是高阶组件 或者说： connect()是高阶组件
 */
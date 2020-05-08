//该组件是一个高阶组件，用于根据登录状态，检查传递过来的组件，是否可以被看到。
/* 
	规则：
		1.如果没有登录，但是要看是非login，不允许。
		2.如果已经登录，但是要看的是login，不允许。
*/
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

export default function (ReciveComponent){
	@connect(
		state =>({isLogin:state.userInfo.isLogin}),//映射状态
		{}//映射操作状态的方法
	)
	class TargetComponent extends Component{
		render(){
			//加判断
			const {isLogin} = this.props //获取登录标识
			const {pathname} = this.props.location //获取访问的地址
			if(!isLogin && pathname !== '/login') return <Redirect to="/login"/>
			if(isLogin && pathname === '/login') return <Redirect to="/admin"/>
			return <ReciveComponent {...this.props}/>
		}
	}
	return TargetComponent
}
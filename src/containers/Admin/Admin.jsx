import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {deleteUserInfo} from '@/redux/actions/login'

class Admin extends Component {

	logout = ()=>{
		//通知redux和local均删除之前保存的用户数据
		this.props.deleteUserInfo()
	}

	render() {
		if(!this.props.isLogin) return <Redirect to="/login"/>
		return (
			<div style={{fontSize:'20px'}}>
				欢迎，{this.props.username}
				<button onClick={this.logout}>退出登录</button>
			</div>
		)
	}
}

export default connect(
	state =>({ //映射状态
		username:state.userInfo.user.username,
		isLogin:state.userInfo.isLogin
	}),
	{deleteUserInfo} //映射操作状态的方法
)(Admin)

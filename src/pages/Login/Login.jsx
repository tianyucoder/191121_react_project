import React, { Component } from 'react'
import logo from './images/logo.png'
import './css/login.less'

export default class Login extends Component {
	render() {
		return (
			<div className="login">
				<header>
					<img src={logo} alt="logo"/>
					<h1>商品管理系统</h1>
				</header>
				<section>
					<span>用户登录</span>
					<div>
					此处放置antd的Form表单组件
					</div>
				</section>
			</div>
		)
	}
}

import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from './images/logo.png'
import './css/login.less'

const {Item} = Form

export default class Login extends Component {

	onFinish = values => {
    console.log('Received values of form: ', values);
	};
	
	render() {
		return (
			<div className="login">
				<header>
					<img src={logo} alt="logo"/>
					<h1>商品管理系统</h1>
				</header>
				<section>
					<span className="title">用户登录</span>
					{/*
						用户名/密码的的合法性要求
							1). 必须输入
							2). 必须大于等于4位
							3). 必须小于等于12位
							4). 必须是英文、数字、下划线组成
						*/
						}
					<Form
						className="login-form"
						onFinish={this.onFinish} //表单提交的回调
					>
						<Item
							name="username"
							rules={[
								{required:true,message:'用户名必须输入！'}, //必填项
								{min:4,message:'用户名必须大于等于4位！'},
								{max:12,message:'用户名必须小于等于12位！'},
								{pattern:/^\w+$/,message:'用户名必须是英文、数字、下划线组成！'},
							]}
						>
							<Input 
								prefix={<UserOutlined className="site-form-item-icon" />} 
								placeholder="用户名"
							/>
						</Item>
						<Item>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="密码"
							/>
						</Item>
						<Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								登录
							</Button>
						</Item>
					</Form>
				</section>
			</div>
		)
	}
}

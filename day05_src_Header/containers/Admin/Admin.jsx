import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import Header from './Header/Header'
import './css/admin.less'

const { Footer, Sider, Content } = Layout;

class Admin extends Component {

	render() {
		if(!this.props.isLogin) return <Redirect to="/login"/>
		return (
			<Layout className="admin-container">
				<Sider>Sider</Sider>
				<Layout>
					<Header/>
					<Content>Content</Content>
					<Footer>Footer</Footer>
				</Layout>
			</Layout>
		)
	}
}

export default connect(
	state =>({ //映射状态
		isLogin:state.userInfo.isLogin
	}),
	{} //映射操作状态的方法
)(Admin)

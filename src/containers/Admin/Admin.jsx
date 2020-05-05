import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Layout } from 'antd';
import Check from '@/containers/Hoc/Check'
import Header from './Header/Header'
import './css/admin.less'

const { Footer, Sider, Content } = Layout;

@connect(
	state =>({ //映射状态
		isLogin:state.userInfo.isLogin
	}),
	{} //映射操作状态的方法
)
@Check
class Admin extends Component {

	render() {
		//if(!this.props.isLogin) return <Redirect to="/login"/>
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
export default Admin


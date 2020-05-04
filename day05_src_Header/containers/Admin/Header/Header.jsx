import React, { Component } from 'react'
import {Button,Modal} from 'antd'
import {
	FullscreenOutlined,
	FullscreenExitOutlined,
	ExclamationCircleOutlined
} from '@ant-design/icons';
import screenfull from 'screenfull'
import {connect} from 'react-redux'
import {deleteUserInfo} from '@/redux/actions/login'
import demo from './demo.jpg'
import './css/header.less'

const { confirm } = Modal;

class Header extends Component {

	state = {
		isFull:false //标识是否全屏
	}

	//退出登录
	logout = ()=>{
		confirm({
			title: '确定退出登录吗？', //弹窗的提示文字
			icon: <ExclamationCircleOutlined />, //弹窗中的图标
			content: '退出后需要重新登录', //副标题
			cancelText:'取消',
			okText:'确认',
			onOk:()=> { //确定按钮的回调
				this.props.deleteUserInfo()
			}
		});
	}

	//全屏/非全屏切换
	fullScreen  = ()=>{
		screenfull.toggle(); //切换全屏
	}

	componentDidMount(){
		//检测屏幕的变化
		screenfull.onchange(()=>{
			const {isFull} = this.state
			this.setState({isFull:!isFull})
		})
	}

	render() {
		return (
			<div className="header">
				<div className="header-top">
					<Button size="small" onClick={this.fullScreen}>
						{this.state.isFull ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
					</Button>
					<span className="username">欢迎,佩奇</span>
					<Button type="link" size="small" onClick={this.logout}>退出登录</Button>
				</div>
				<div className="header-bottom">
					<div className="bottom-left">
						<span>首页</span>
					</div>
					<div className="bottom-right">
						<span>2020年5月4日 00:00:00</span>
						<img src={demo} alt=""/>
						<span>多云转晴</span>
						<span>温度：0~15℃</span>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(
	state => ({}),//映射状态
	{deleteUserInfo}//映射操作状态的方法
)(Header)

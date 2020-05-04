import React, { Component } from 'react'
import {connect} from 'react-redux'

class Admin extends Component {
	render() {
		return (
			<div style={{fontSize:'20px'}}>
				欢迎，{this.props.username}
			</div>
		)
	}
}

export default connect(
	state =>({username:state.userInfo.user.username}),//映射状态
	{} //映射操作状态的方法
)(Admin)

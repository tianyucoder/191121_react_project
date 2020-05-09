import React, { Component } from 'react'
import {Button} from 'antd'

export default class Detail extends Component {
	render() {
		return (
			<div>
				我是商品详情组件，用于展示详情
				<Button onClick={()=>{this.props.history.goBack()}}>返回</Button>
				{this.props.match.params.id}
			</div>
		)
	}
}

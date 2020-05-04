import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment} from '../redux/actions/count'

class Welcome extends Component {

	add = ()=>{
		this.props.increment(1)
	}

	render() {
		return (
			<div>
				<h1>欢迎来到德莱联盟！求和：{this.props.qiuheshu}，人数：{this.props.renshu}</h1>
				<button onClick={this.add}>加1</button>
			</div>
		)
	}
}

export default connect(
	state => ({ //映射状态
		qiuheshu:state.number,
		renshu:state.persons.length
	}), 
	{increment} //映射操作状态的方法
)(Welcome)

/* 
		思考：一个普通的组件要和redux“打交道”，流程是什么？
				1.思考是要读状态，还是更新状态，还是即读也更新？
				2.引入connect，生成容器组件
				3.如果第一步的分析是更新状态，那么就要引入对应的actionCreator
				4.传递给UI：(1).状态 (2).操作状态的方法
*/

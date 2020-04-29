import React, { Component } from 'react'

export default class Count extends Component {

	state = {
		count:0
	}

	//加
	increment = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
		//2.获取原来的和
		let {count} = this.state
		//3.加
		count += value*1
		//4.更新状态
		this.setState({count})
	}

	//减
	decrement = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
		//2.获取原来的和
		let {count} = this.state
		//3.减
		count -= value*1
		//4.更新状态
		this.setState({count})
	}

	//当前的和是奇数再加
	incrementIfOdd = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
		//2.获取原来的和
		let {count} = this.state
		//判断
		if(count % 2 === 1){
			//3.加
			count += value*1
			//4.更新状态
			this.setState({count})
		}
	}
	
	//等500毫秒再加
	incrementAsync = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
		//2.获取原来的和
		let {count} = this.state
		//3.加
		count += value*1
		//4.更新状态
		setTimeout(()=>{
			this.setState({count})
		},500)
	}

	render() {
		return (
			<div>
				<h1>当前求和为：{this.state.count}</h1>
				<select ref="user_selected">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
				<button onClick={this.incrementAsync}>increment async</button>
			</div>
		)
	}
}

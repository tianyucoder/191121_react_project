//引入react核心库
import React, { Component } from 'react'
//引入connect方法(重点)
import {connect} from 'react-redux'
//引入action
import {increment,decrement,incrementAsync} from '../redux/actions/count'

//Count的UI组件
class Count extends Component {

	//加
	increment = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
		this.props.increment(value*1)
	}

	//减
	decrement = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
		this.props.decrement(value*1)
	}

	//当前的和是奇数再加
	incrementIfOdd = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
		//获取当前的和
		const {count} = this.props
		if(count%2 === 1){
			this.props.increment(value*1)
		}
	}

	//等500毫秒再加
	incrementAsync = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
		//定时器交给action
		this.props.incrementAsync(value*1,500)
		//定时放在自家
		/* setTimeout(()=>{
			this.props.increment(value*1)
		},500) */
	}

	render() {
		const {count,personCount} = this.props
		//console.log('UI-Count接收到的props：',this.props);
		return (
			<div>
				<h1>当前求和为：{count}，下方组件的总人数为:{personCount}</h1>
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

//暴露了Count的容器组件
export default connect(
	state => ({ //映射状态,state是redux中保存的【总】状态。
		count:state.number,
		personCount:state.persons.length
	}), 

	//原始的写法：
	/* dispatch => (
		{
			increment:(value)=>{dispatch(increment(value))},
			decrement:(value)=>{dispatch(decrement(value))},
		}
	) */

	//精简的写法：
	{increment,decrement,incrementAsync} //映射操作状态的方法

)(Count)

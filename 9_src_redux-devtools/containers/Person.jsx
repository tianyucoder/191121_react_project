//引入react核心库
import React, { Component } from 'react'
//引入connect方法(重点)
import {connect} from 'react-redux'
//引入person的action
import {addPerson} from '../redux/actions/person'
//引入uuid
import { v4 as uuidv4 } from 'uuid';

//Person的UI组件
class Person extends Component {

	state = {
		cars:[]
	}

	add = ()=>{
		//1.获取用户输入
		const {nameNode,ageNode} = this.refs
		if(!nameNode.value || !ageNode.value){
			alert('名字和年龄均不能为空')
			return
		}
		//2.加人
		this.props.addPerson({
			id:uuidv4(),
			name:nameNode.value,
			age:ageNode.value
		})
		//3.清空输入
		nameNode.value = ''
		ageNode.value = ''
	}

	render() {
		const {persons,shu} = this.props
		return (
			<div>
				<h1>当前总人数为：{persons.length}，上方组件求和为：{shu}</h1>
				<input ref="nameNode" type="text" placeholder="输入名字"/>&nbsp;
				<input ref="ageNode" type="text" placeholder="输入年龄"/>&nbsp;
				<button onClick={this.add}>添加</button>
				<ul>
					{
						persons.map((personObj)=>{
							return <li key={personObj.id}>姓名：{personObj.name}，年龄：{personObj.age}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

//暴露Person的容器组件
export default  connect(
	state => ({ //映射状态,state是redux中保存的【总】状态。
		persons:state.persons,
		shu:state.number
	}), 
	{addPerson} //映射间接操作状态的方法
)(Person)

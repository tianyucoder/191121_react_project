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

/* 
1)	理解: 一类特别的函数
				a.	情况1: 参数是函数
				b.	情况2: 返回是函数
				c.	备注：情况1和情况2满足一个即可
2)		常见的高阶函数: 
				a.	定时器设置函数
				b.	数组的forEach()/map()/filter()/reduce()/find()
				c.	函数对象的bind()
				d.	Promise() / then()
				e.	antd中的Form.create()()
				f.	react-router-dom中的withRouter
				g.	react-redux中的connect()
3)		作用: 
				a.	能实现更加动态, 更加可扩展的功能


*/

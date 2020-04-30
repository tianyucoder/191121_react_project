//该函数是为count组件服务的reducer，是真正操作状态的“人”
//特别注意：reducer是纯函数！！！！！
//action是动作对象，形如：{type:'??',data:'???'}
import {INCREMENT,DECREMENT} from '../action_types'

let initState = 89 //定义初始状态
export default function (preState=initState,action){
	const {type,data} = action
	let newState
	switch (type) {
		case INCREMENT:
			//如果动作类型为加
			newState = preState + data
			return newState
		case DECREMENT:
			//如果动作类型为减
			newState = preState - data
			return newState
		default:
			//如果动作类型不是加也不是减，那么就是初始化的时。
			return preState
	}
}

/* 
纯函数：
	1)	一类特别的函数: 只要是同样的输入(实参)，必定得到同样的输出(返回)
	2)	必须遵守以下一些约束  
				a.	不得改写参数数据
				b.	不会产生任何副作用，例如网络请求，输入和输出设备
				c.	不能调用Date.now()或者Math.random()等不纯的方法  
	3)	redux的reducer函数必须是一个纯函数
*/

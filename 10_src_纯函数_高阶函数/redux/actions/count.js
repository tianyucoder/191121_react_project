/* 
	该文件是专门用于创建和Count组件相关的action,
	即有两种action：
				1.加的action {type:'increment',data:???}
				2.减的action {type:'decrement',data:???}
*/
import {INCREMENT,DECREMENT} from '../action_types'
import Axios from 'axios'

//创建加的action ---- 对象式action
export const increment = value => ({type:INCREMENT,data:value})

//创建减的action ---- 对象式action
export const decrement = value => ({type:DECREMENT,data:value})

//创建“等一等”再加的action
/* 
	1.有一种特殊的action，他是函数类型，所以我也称为：函数式action，
		我们往往会在这个函数里开启一个异步任务(定时器，Promise，ajax请求等等)
		所以函数式action，又称为：异步action。
	2.该函数会交给store
	3.store底层加了判断，如果action是函数就立刻调用，且传入store.dispatch
	4.总结：
			4.1 我们通常管incrementAsync叫【异步action】
			4.2 所谓的异步action就是一个函数，函数里面开启了一个异步任务而已。
			4.3 异步action中往往都会用到同步action。
*/
export const incrementAsync = (value,time) => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(increment(value))
		},time)
	}
}
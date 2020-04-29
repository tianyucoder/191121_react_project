/* 
	该文件是专门用于创建和Count组件相关的action,
	即有两种action：
				1.加的action {type:'increment',data:???}
				2.减的action {type:'decrement',data:???}
*/
import {INCREMENT,DECREMENT} from '../action_types'

//创建加的action
export const increment = value => ({type:INCREMENT,data:value})

//创建减的action
export const decrement = value => ({type:DECREMENT,data:value})
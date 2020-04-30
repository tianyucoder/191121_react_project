/* 
	该文件是专门用于创建和Person组件相关的action,
*/
import {ADD_PERSON} from '../action_types'

//创建加的action ---- 对象式action
export const addPerson = personObj => ({type:ADD_PERSON,data:personObj})


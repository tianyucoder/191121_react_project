/* 
	该文件是专门用于创建和Person组件相关的action,
*/
import {ADD_PERSON} from '../action_types'

//创建添加一个人的action ---- 对象式action ---- 同步action
export const addPerson = personObj => ({type:ADD_PERSON,data:personObj})


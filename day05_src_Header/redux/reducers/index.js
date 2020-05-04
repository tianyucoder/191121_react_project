//引入combineReducers，用于合并多个reducer
import {combineReducers} from 'redux'
//引入为login服务的reducer
import loginReducer from './login'

//combineReducers传入的那个对象，就是redux帮我们所保存的总状态
export default combineReducers({
	userInfo: loginReducer
})
import {SAVE_USERINFO,DELETE_USERINFO} from '@/redux/action_types'

//尝试着从localStorage中读取user和token
let _user
try {
	_user = JSON.parse(localStorage.getItem('user'))
} catch (error) {
	_user = null
}
let _token = localStorage.getItem('token')

//定义一个初始化状态
let initState = {
	user: _user || {}, //用户信息
	token: _token || '', //用户token
	isLogin: _user && _token ? true : false //用户是否已经登录的标识
} 
//initState的值，可能有两种情况：(1).空 (2).如果local里有，就以local中的为准

export default function(preState=initState,action){
	const {type,data} = action //获取type和data
	let newState //定义好新状态
	switch (type) {
		case SAVE_USERINFO: //如果是保存用户信息
			newState = {...data,isLogin:true}
			return newState
		case DELETE_USERINFO: //如果是删除用户信息
			newState = {user:{},token:'',isLogin:false}
			return newState
		default: //如果是初始化用户信息
			return preState
	}
}
import {SAVE_USERINFO} from '@/redux/action_types'

//创建一个用于保存用户的action---对象类型的action----同步的action
export const saveUserInfo = userObj => {
	//向localStorage中保存当前登录的用户信息
	const {user,token} = userObj
	//localStorage中所保存的数据，都是key-value的组合，且key与value必须都是字符串
	localStorage.setItem('user',JSON.stringify(user))
	localStorage.setItem('token',token)
	return {type:SAVE_USERINFO,data:userObj}
}
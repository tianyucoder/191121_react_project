import {SAVE_USERINFO} from '@/redux/action_types'

let initState = {user:{},token:''} //定义一个初始化状态
export default function(preState=initState,action){
	const {type,data} = action //获取type和data
	let newState //定义好新状态
	switch (type) {
		case SAVE_USERINFO: //如果是保存用户信息
			newState = {...data}
			return newState
		default: //如果是初始化用户信息
			return preState
	}
}
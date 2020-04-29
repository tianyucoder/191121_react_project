//该函数是为count组件服务的reducer，是真正操作状态的“人”
//action是动作对象，形如：{type:'??',data:'???'}

let initState = 0 //定义初始状态
export default function (preState=initState,action){
	const {type,data} = action
	let newState
	switch (type) {
		case 'increment':
			//如果动作类型为加
			console.log('加',preState,action);
			newState = preState + data
			return newState
		case 'decrement':
			//如果动作类型为减
			console.log('减',preState,action);
			newState = preState - data
			return newState
		default:
			//如果动作类型不是加也不是减，那么就是初始化的时。
			console.log('初始化',preState,action);
			return preState
	}
}
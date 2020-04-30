//该函数是为person组件服务的reducer，是真正操作状态的“人”
//action是动作对象，形如：{type:'??',data:'???'}

let initState = [ //定义初始状态
	{name:'老刘-硅谷黄家驹',age:18},
	{name:'帅气的海峰',age:19}
] 
export default function (preState=initState,action){
	console.log('person的reducer');
	const {type,data} = action
	let newState
	switch (type) {
		/* case INCREMENT:
			//如果动作类型为加
			newState = preState + data
			return newState */
		default:
			//如果动作类型不是加也不是减，那么就是初始化的时。
			return preState
	}
}
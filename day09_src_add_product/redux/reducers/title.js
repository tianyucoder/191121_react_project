import {SAVE_TITLE} from '@/redux/action_types'

let initState = ''
export default function (preState=initState,action){
	let newState
	const {type,data} = action
	switch (type) {
		case SAVE_TITLE:
			newState = data
			return newState
		default:
			return preState
	}
}
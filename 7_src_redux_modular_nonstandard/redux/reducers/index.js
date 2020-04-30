//该文件是汇总一个一个的reducer，最终生成一个总的reducer
//引入为count服务的reducer
import countReducer from './count'
//引入为person服务的reducer
import personReducer from './person'
//引入汇总的“人”
import {combineReducers} from 'redux'

//进行汇总
/* 
	1.combineReducers是函数
	2.combineReducers调用时要传入一个对象，这个对象就是redux中的总状态--state！！！
	3.combineReducers的返回值是一个总reducer
*/
export default combineReducers({
	number:countReducer, //数字--0 ，以后可能是：1,2,3.....
	persons:personReducer //数组，以后数组里可能会多出来一个一个的人
})
//1.引入UI组件
import Count from '../components/Count'
//2.引入connect方法(重点)
import {connect} from 'react-redux'
//3.引入action
import {increment,decrement} from '../redux/actions/count'


export default connect(
	state => ({count:state}), //映射状态

	//原始的写法：
	/* dispatch => (
		{
			increment:(value)=>{dispatch(createIncrementAction(value))},
			decrement:(value)=>{dispatch(createDecrementAction(value))},
		}
	) */

	//精简的写法：
	{increment,decrement}

)(Count)



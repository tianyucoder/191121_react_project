//1.引入UI组件
import Count from '../components/Count'
//2.引入connect方法(重点)
import {connect} from 'react-redux'
//3.引入action
import {increment,decrement,incrementAsync} from '../redux/actions/count'


export default connect(
	state => ({ //映射状态,state是redux中保存的【总】状态。
		count:state.number,
		personCount:state.persons.length
	}), 

	//原始的写法：
	/* dispatch => (
		{
			increment:(value)=>{dispatch(increment(value))},
			decrement:(value)=>{dispatch(decrement(value))},
		}
	) */

	//精简的写法：
	{increment,decrement,incrementAsync} //映射操作状态的方法

)(Count)



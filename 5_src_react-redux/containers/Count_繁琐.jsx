/* 
	该文件是Count的容器组件：
		1.容器组件是真正和redux打交道的，里面可以随意的使用redux的api。
		2.容器组件会传给UI组件：(1).redux中所保存的状态。 (2).用于操作状态的方法。
		3.备注：容器给UI传递：状态、操作状态的方法，均通过props传递。
		特别注意：容器组件，肯定是组件，但是容器组件不是你亲自去定义的，是靠方法生成的。
*/


//1.引入UI组件
import Count from '../components/Count'
//2.引入connect方法(重点)
import {connect} from 'react-redux'
//3.引入action
import {increment,decrement} from '../redux/actions/count'

/* 
		connect方法：
			1.connect()的返回值依然是一个函数。
			2.connect()()的返回值是一个容器组件。
			3.connect这样使用：connect(mapStateToProps，mapDispatchToProps)(UI组件)。
			4.mapStateToProps和mapDispatchToProps都是函数
			5.特别注意：mapDispatchToProps可以直接是一个对象。
			6.connect函数底层有判断，若第二个参数是对象，会加工成一个函数
*/

/* 
	mapStateToProps方法专门用于给UI组件传递redux中的状态，以props形式传递。
		1.因为：props是key-value的形式，所以mapStateToProps方法必须返回一个Object对象
		2.mapStateToProps方法所返回的那个对象的key就作为传给UI组件props的key
		3.mapStateToProps方法所返回的那个对象的value就作为传给UI组件props的value
*/
function mapStateToProps (state){
	return {count:state}
}

/* 
	mapDispatchToProps方法专门用于给UI组件传递redux中的状态，以props形式传递。
		1.因为：props是key-value的形式，所以mapStateToProps方法必须返回一个Object对象
		2.mapStateToProps方法所返回的那个对象的key就作为传给UI组件props的key
		3.mapStateToProps方法所返回的那个对象的value就作为传给UI组件props的value
*/
function mapDispatchToProps(dispatch){
	return {
		increment:(value)=>{dispatch(increment(value))},
		decrement:(value)=>{dispatch(decrement(value))},
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Count)



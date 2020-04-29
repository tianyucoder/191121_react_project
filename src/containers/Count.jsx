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

/* 
		connect方法：
			1.connect()的返回值依然是一个函数。
			2.connect()()的返回值是一个容器组件。
			3.connect这样使用：connect(状态，操作状态的方法)(UI组件)。
*/

export default connect()(Count)



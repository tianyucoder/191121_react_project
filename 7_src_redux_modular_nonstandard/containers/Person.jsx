//1.引入UI组件
import Person from '../components/Person'
//2.引入connect方法(重点)
import {connect} from 'react-redux'
//3.引入person的action
import {addPerson} from '../redux/actions/person'

export default connect(
	state => ({ //映射状态,state是redux中保存的【总】状态。
		persons:state.persons,
		shu:state.number
	}), 
	{addPerson} //映射间接操作状态的方法
)(Person)
//1.引入UI组件
import Person from '../components/Person'
//2.引入connect方法(重点)
import {connect} from 'react-redux'
import {addPerson} from '../redux/actions/person'

export default connect(
	state => ({persons:state.persons}), //映射状态,state是redux中保存的【总】状态。
	{addPerson} //映射间接操作状态的方法
)(Person)
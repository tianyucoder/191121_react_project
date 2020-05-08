import {SAVE_CATEGORY} from '@/redux/action_types'
import {message} from 'antd'
import {reqCategoryList} from '@/api'

//保存标题的action ---  同步action
export const saveCategory = (categoryArr)=> ({type:SAVE_CATEGORY,data:categoryArr})

//保存标题的action ---  异步action
export const saveCategoryAsync = ()=> {
	return async(dispatch)=>{
		//开启异步任务
		let result = await reqCategoryList()
		const {status,data,msg} = result
		if(status === 0){
			dispatch(saveCategory(data))
		}else{
			message.error(msg)
		}
	}
}
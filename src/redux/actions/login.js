import {SAVE_USERINFO} from '@/redux/action_types'

//创建一个用于保存用户的action---对象类型的action----同步的action
export const saveUserInfo = userObj => ({type:SAVE_USERINFO,data:userObj})
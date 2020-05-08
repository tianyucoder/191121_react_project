/* 
	该文件是对axios这个库的二次封装，完成：
		1.配置请求的基础路径
		2.配置超时时间
		3.统一处理post请求json编码问题（转为urlencoded）
		4.统一返回真正的数据data，而不是response对象
		5.统一处理错误
*/
import axios from 'axios' //axios核心库
import qs from 'querystring' //用于将对象转为urlencoded字符串
import nprogress from 'nprogress'//引入nprogress制作进度条
import 'nprogress/nprogress.css'
import {message as msg} from 'antd'
import store from '@/redux/store'
import {deleteUserInfo} from '@/redux/actions/login'
import {saveTitle} from '@/redux/actions/title'

//配置请求的基础路径
axios.defaults.baseURL = '/api'
//配置超时时间
axios.defaults.timeout = 2000

//请求拦截器
axios.interceptors.request.use((config)=>{
	nprogress.start()
	const {method,data} = config
	//统一处理post请求json编码问题（转为urlencoded）
	if(method.toLowerCase() === 'post' && data instanceof Object){
		config.data = qs.stringify(data)
	}
	//如果存在token，那就携带token
	const {token} = store.getState().userInfo
	if(token){
		config.headers.Authorization = 'atguigu_'+token
	}
	//必须返回配置对象
	return config
})

//响应拦截器
axios.interceptors.response.use(
	//成功的回调：返回的http状态码是2开头
	response => {
		nprogress.done()
		return response.data
	},
	//失败的回调：1.返回的http状态码不是2开头；2.达到了超时时间；3.网络不通
	err => {
		nprogress.done()
		let errmsg = '未知错误，请联系管理员'
		const {message} = err
		if(message.indexOf('401') !== -1) {
			//强制退出，回login
			//联系redux删除所有用户数据
			store.dispatch(deleteUserInfo())
			store.dispatch(saveTitle(''))
			errmsg = '未登录或身份过期，请重新登录！'
		}
		else if(message.indexOf('Network Error') !== -1) errmsg = '网络不通，请检查网络连接！'
		else if(message.indexOf('timeout') !== -1) errmsg = '网络不稳定，连接超时！'
		msg.error(errmsg,1)
		return new Promise(()=>{})
	}
)

export default axios
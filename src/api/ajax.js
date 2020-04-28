/* 
	该文件是对axios这个库的二次封装，完成：
		1.配置请求的基础路径
		2.配置超时时间
		3.统一处理post请求json编码问题（转为urlencoded）
		4.统一返回真正的数据data，而不是response对象
*/
import axios from 'axios' //axios核心库
import qs from 'querystring' //用于将对象转为urlencoded字符串

//配置请求的基础路径
axios.defaults.baseURL = 'http://localhost:3000'
//配置超时时间
axios.defaults.timeout = 2000

//请求拦截器
axios.interceptors.request.use((config)=>{
	const {method,data} = config
	//统一处理post请求json编码问题（转为urlencoded）
	if(method.toLowerCase() === 'post' && data instanceof Object){
		config.data = qs.stringify(data)
	}
	return config
})

//响应拦截器
axios.interceptors.response.use(
	//成功的回调：返回的http状态码是2开头
	response => {
		return response.data
	},
	//失败的回调：1.返回的http状态码不是2开头；2.达到了超时时间；3.网络不通
	error => {
		console.log(error.message);
		return Promise.reject('阿偶，失败了！')
	}
)

export default axios
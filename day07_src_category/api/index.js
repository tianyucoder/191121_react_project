//该文件用于管理项目的ajax请求，每个请求对应一个请求函数
import ajax from './ajax'
import jsonp from 'jsonp'
import {message} from 'antd'
import {CITY,WEATHER_AK} from '@/config'

//请求登录的函数,loginObj形如：{username:'xx',password:'xx'}
export const reqLogin = loginObj => ajax.post('/login',loginObj)
//请求天气信息
export const reqWeatherData = ()=>{
	//定义请求天气信息的url
	const URL = `http://api.map.baidu.com/telematics/v3/weather?location=${CITY}&output=json&ak=${WEATHER_AK}`
	return new Promise((resolve)=>{
		//使用jsonp库发送请求
		jsonp(URL,{
			timeout:2000,
		},(err,data)=>{
			if(!err){
				resolve(data.results[0].weather_data[0])
			}else{
				message.error('请求天气信息有误，请联系管理员')
			}
		})
	})
}
//请求分类列表
export const reqCategoryList = () => ajax.get('/manage/category/list')

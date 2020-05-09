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
//请求添加分类
export const reqAddCategory = categoryName => ajax.post('/manage/category/add',{categoryName})
//请求更改分类名
export const reqUpdateCategory = (categoryId,categoryName) => ajax.post('/manage/category/update',{categoryId,categoryName})
//请求商品列表(分页)
export const reqProductList = (pageNum,pageSize) => ajax.get('/manage/product/list',{params:{pageNum,pageSize}})
//请求搜索商品(分页)
export const reqSerachProduct = (searchType,keyWord,pageNum,pageSize) => ajax.get('/manage/product/search',{params:{[searchType]:keyWord,pageNum,pageSize}})
//请求商品上架、下架
export const reqUpdateProductStatus = (productId,status) => ajax.post('/manage/product/updateStatus',{productId,status})
//根据商品的id请求商品详细信息
export const reqProductInfoById = (productId)=> ajax.get('/manage/product/info',{params:{productId}})
//请求删除一个图片
export const reqDeletePicture = (name)=> ajax.post('/manage/img/delete',{name})







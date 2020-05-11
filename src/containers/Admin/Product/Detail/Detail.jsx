import React, { Component } from 'react'
import { Card,Button,List, message} from 'antd';
import {connect} from 'react-redux'
import {saveCategoryAsync} from '@/redux/actions/category'
import {ArrowLeftOutlined} from '@ant-design/icons';
import {reqProductInfoById} from '@/api'
import {IMAGE_BASE_URL} from '@/config'
import './css/detail.less'

const {Item} = List

@connect(
	(state)=>({categoryList:state.categoryList}),//映射状态
	{saveCategoryAsync}//映射操作状态的方法
)
class Detail extends Component {

	state = {
		currentProduct:{imgs:[]}, //当前商品信息
		isLoading:true //标识是否处于加载中
	}

	//根据id获取商品数据
	getCurrentProductInfo = async(id)=>{
		let result = await reqProductInfoById(id)
		const {status,data,msg} = result
		if(status === 0) this.setState({currentProduct:data,isLoading:false})
		else message.error(msg)
	}

	//根据分类id查找分类名称
	findCategoryName = (id)=>{
		let result =  this.props.categoryList.find((categoryObj)=>{
			return categoryObj._id === id
		})
		if(result) return result.name
	}

	componentDidMount(){
		const {match,categoryList,saveCategoryAsync} = this.props
		//获取传递过来的id
		const {id} = match.params
		//发送请求查询id所对应商品
		this.getCurrentProductInfo(id)
		//尝试从redux中获取categoryList，若有则用，若无则请求
		if(categoryList.length === 0){
			saveCategoryAsync()
		}

	}

	render() {
		const {name,desc,price,categoryId,imgs,detail} = this.state.currentProduct
		return (
			<Card
				loading={this.state.isLoading} 
				title={
					<div>
						<Button 
							onClick={()=>{this.props.history.goBack()}}
							type="link"
						>
							<ArrowLeftOutlined/>返回
						</Button>
						<span>商品详情</span>
					</div>
				}
			>
				<List>
					<Item className="item">
						<span className="title">商品名称：</span>
						<span>{name}</span>
					</Item>
					<Item className="item">
						<span className="title">商品描述：</span>
						<span>{desc}</span>
					</Item>
					<Item className="item">
						<span className="title">商品价格：</span>
						<span>{'￥'+price}</span>
					</Item>
					<Item className="item">
						<span className="title">商品分类：</span>
						<span>{this.findCategoryName(categoryId)}</span>
					</Item>
					<Item className="item">
						<span className="title">商品图片：</span>
						{
							imgs.map((imgName)=>{
								return <img key={imgName} src={IMAGE_BASE_URL+imgName} alt="product"/>
							})
						}
					</Item>
					<Item className="item">
						<span className="title">商品详情：</span>
						<span dangerouslySetInnerHTML={{__html:detail}}/>
					</Item>
				</List>
			</Card>
		)
	}
}
export default Detail

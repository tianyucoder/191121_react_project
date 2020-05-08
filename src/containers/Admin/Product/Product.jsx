import React, { Component } from 'react'
import { Card,Button,Select,Input,Table, message} from 'antd';
import {PlusCircleOutlined,SearchOutlined} from '@ant-design/icons';
import {reqProductList} from '@/api'
import {PAGE_SIZE} from '@/config'

const { Option } = Select;

export default class Product extends Component {

	state = {
		productList:[], //商品数据
		total:0 //数据总数
	}

	//请求商品数据(分页)
	getProductList = async(pageNumber=1)=>{
		let result = await	reqProductList(pageNumber,PAGE_SIZE)
		const {status,data,msg} = result
		if(status === 0){
			const {total,list} = data
			this.setState({productList:list,total})
		}else{
			message.error(msg)
		}
	}

	componentDidMount(){
	 this.getProductList()
	}

	render() {
		//存储表格的数据源的数组
		const dataSource = this.state.productList;
		//存储表格的列配置的数组
		const columns = [
			{
				title: '商品名称',
				dataIndex: 'name',
				key: 'name',
			},
			{
				title: '商品描述',
				dataIndex: 'desc',
				key: 'desc',
			},
			{
				title: '价格',
				dataIndex: 'price',
				key: 'price',
				render:(price)=>'￥'+price 
			},
			{
				title: '状态',
				dataIndex: 'status',
				key: 'status',
				align:'center',
				render:(status)=>{
					return (
						<div>
							<Button type={status === 1 ? 'danger' : 'primary'}>
									{status === 1 ? '下架' : '上架'}
							</Button><br/>
							<span>{status === 1 ? '在售' : '售罄'}</span>
						</div>
					)
				}
			},
			{
				title: '操作',
				//dataIndex: 'action',
				key: 'action',
				align:'center',
				render:()=> (
					<div>
						<Button type="link">详情</Button><br/>
						<Button type="link">修改</Button>
					</div>
				)
			},
		];
		return (
			<Card 
				title={
					<div>
						<Select defaultValue="name">
							<Option value="name">按名称搜索</Option>
							<Option value="desc">按描述搜索</Option>
						</Select>
						<Input allowClear style={{width:'20%',margin:'10px'}} placeholder="请输入关键字"/>
						<Button type="primary"><SearchOutlined />搜索</Button>
					</div>
				} 
				extra={
					<Button type="primary">
						<PlusCircleOutlined/>添加商品
					</Button>
				} 
			>
				<Table 
					dataSource={dataSource} //表格的数据源
					columns={columns} //表格列配置
					bordered //边框
					rowKey="_id" //指定唯一值对应项
					pagination={{
						total:this.state.total,//数据总数
						pageSize:PAGE_SIZE,//每页多大
						onChange:(pageNumber)=>{
							this.getProductList(pageNumber)
						}
					}}
				/>
			</Card>
		)
	}
}

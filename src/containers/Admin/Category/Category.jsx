import React, { Component } from 'react'
import {Card,Button,Table} from 'antd';
import {reqCategoryList} from '@/api'
import {PlusCircleOutlined} from '@ant-design/icons';

export default class Category extends Component {

	async componentDidMount(){
		let result = await reqCategoryList()
		console.log(result);
	}

	render() {
		//表格的数据源
		const dataSource = [
			{
				key: '1',
				name: '测试分类00001',
			},
			{
				key: '2',
				name: '测试分类00002',
			}
		];
		//表格的列配置(特别重要)
		const columns = [
			{
				title: '分类名', //列名
				dataIndex: 'name', //数据索引项，控制该列展示什么信息。
				key: '1', //不是一个必要的属性，和该列展示什么信息，没有任何关系，写上效率高
			},
			{
				title: '操作',
				//dataIndex: 'name',
				width:'20%',
				align:'center',
				render:() => <Button type="link">修改分类</Button>, //render用于高级渲染，返回值展示到页面
				key: '3',
			},
		];

		return (
			<Card extra={<Button type="primary"><PlusCircleOutlined />添加</Button>}>
				<Table 
					dataSource={dataSource} //配置数据源
					columns={columns} //配置列
					bordered //展示边框
					pagination={{ //分页器
						pageSize:4 //每页展示多少条
					}} 
				/>
			</Card>
		)
	}
}

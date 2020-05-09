import React, { Component } from 'react'
import {Card,Button,Table,Modal,Form,Input, message} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import {connect} from 'react-redux'
import {saveCategoryAsync} from '@/redux/actions/category'
import {PAGE_SIZE,MESSAGE_TIME} from '@/config'
import {reqAddCategory,reqUpdateCategory} from '@/api'

const {Item} = Form

@connect(
	state => ({categoryList:state.categoryList}),//映射状态
	{saveCategoryAsync} //映射操作状态的方法
)
class Category extends Component {

	state = {visible: false};//默认不展示弹窗

	//展示弹窗(新增和修改共用一个，要区分好到底是新增，还是修改)
	showModal = (categoryObj) => {
		//获取Form实例对象
		const {categotryForm} = this.refs
		this._id = '' //重置_id
		this.name = ''//重置name
		this.isUpdate = false //重置标识
		//获取当前分类的id和name
		const {_id,name} = categoryObj
		//判断是否为修改
		if(_id && name){
			//若是修改，则要存下：_id,name
			this._id = _id //存下_id，一会发请求用。
			this.name = name //存下name，一会做数据回显用。
			this.isUpdate = true //标识是否为修改
		}
		//弹窗非第一次展示，设置表单默认值（第一次靠initialValues）
		if(categotryForm) categotryForm.setFieldsValue({name:this.name})
		//展示弹窗
    this.setState({visible: true});
	};
	
	//确认的回调(新增的确认、修改的确认都走这个回调)
	handleOk = async() => {
		const {categotryForm} = this.refs
		//1.获取表单数据
		const {name} = categotryForm.getFieldsValue()
		//2.校验数据
		if(!name || !name.trim()){ //若输入不合法
			message.error('分类名不能为空',MESSAGE_TIME)
		}else{ //若输入合法
			//3.发送请求添加或修改一个分类
			let result
			//如果是修改，则发起修改请求，携带:id,name
			if(this.isUpdate) result = await reqUpdateCategory(this._id,name)
			//如果是新增，则发起新增请求，携带:name
			else result = await reqAddCategory(name)
			//从result中获取本次操作结果
			const {status,msg} = result
			if(status===0){
				//如果业务逻辑成功
				message.success(this.isUpdate ? '修改分类成功' : '新增分类成功',MESSAGE_TIME)
				//通知redux重新获取数据并保存
				this.props.saveCategoryAsync()
				//4.隐藏弹窗
				this.setState({visible: false});
				//5.重置表单
				categotryForm.resetFields()
			}else{
				//提示错误信息
				message.error(msg,MESSAGE_TIME)
			}
		}
	};
	
	//取消的回调
	handleCancel = () => {
		const {categotryForm} = this.refs
		this.setState({visible: false});
		categotryForm.resetFields()
  };

	componentDidMount(){
		//保存分类
		this.props.saveCategoryAsync()
	}

	render() {
		//表格的数据源
		const dataSource = this.props.categoryList
		//表格的列配置(特别重要)
		const columns = [
			{
				title: '分类名', //列名
				dataIndex: 'name', //数据索引项，控制该列展示什么信息。
				key: 'name', //不是一个必要的属性，和该列展示什么信息，没有任何关系，写上效率高
			},
			{
				title: '操作',
				//dataIndex: 'name',
				width:'20%',
				align:'center',
				render:(categoryObj) => 
								<Button 
										onClick={()=>{this.showModal(categoryObj)}} 
										type="link"
								>修改分类
								</Button>, //render用于高级渲染，返回值展示到页面
				key: 'opera',
			},
		];
		return (
			<div>
				{/* Card展示组件 */}
				<Card 
					extra={
						<Button onClick={this.showModal} type="primary" >
							<PlusCircleOutlined />添加
						</Button>
					}
				>
					<Table 
						dataSource={dataSource} //配置数据源
						columns={columns} //配置列
						bordered //展示边框
						rowKey="_id" //配置唯一标识
						pagination={{ //分页器
							pageSize:PAGE_SIZE //每页展示多少条
						}} 
					/>
				</Card>
				{/* Modal弹窗组件 */}
				<Modal
					title={this.isUpdate ? '修改分类' : '新增分类'} //弹窗标题
					visible={this.state.visible} //控制弹窗是否展示
					onOk={this.handleOk} //确认的回调
					onCancel={this.handleCancel} //取消的回调
					okText="确定"
					cancelText="取消"
				>
					<Form ref="categotryForm" initialValues={{name:this.name}}>
						<Item
							name="name"
							rules={[{required:true,message:'分类名必须输入'}]}
						>
							<Input placeholder="请输入分类名"/>
						</Item>
					</Form>
				</Modal>
			</div>
		)
	}
}
export default Category

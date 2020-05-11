import React, { Component } from 'react'
import { Card,Button,Table,Modal,Form,Input, message} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import {reqRoleList} from '@/api'
import dayjs from 'dayjs'

const {Item} = Form

export default class Role extends Component {

	state = { 
		visibleAdd: false,//用于控制是否展示新增角色弹窗
		visibleAuth: false,//用于控制是否展示授权角色弹窗
		roleList:[] //角色列表
	};

	//展示新增角色弹窗
	showAddModal = () => {
    this.setState({visibleAdd: true});
	};
	
	//展示授权弹窗
	showAuthModal = () => {
    this.setState({visibleAuth: true});
  };

	//新增角色弹窗--确认按钮的回调
  handleAddOk = () => {
		console.log(this.refs.roleForm.getFieldsValue());
		this.refs.roleForm.resetFields()
    this.setState({visibleAdd: false});
	};
	
	//授权弹窗--确认按钮的回调
	handleAuthOk = () => {
    this.setState({visibleAuth: false});
  };

	//新增角色弹窗--取消按钮的回调
  handleAddCancel = () => {
    this.refs.roleForm.resetFields()
    this.setState({visibleAdd: false});
  };

	//授权弹窗--取消按钮的回调
	handleAuthCancel = () => {
    this.setState({visibleAuth: false});
	};

	//请求角色列表
	getRoleLIst = async()=>{
		let result = await reqRoleList()
		const {status,data,msg} = result
		if(status === 0) this.setState({roleList:data})
		else message.error(msg)
	}
	
	componentDidMount(){
		this.getRoleLIst()
	}

	render() {
		//数据源
		const dataSource = this.state.roleList
		//列的配置
		const columns = [
			{
				title: '角色名',
				dataIndex: 'name',
				key: 'name',
			},
			{
				title: '创建时间',
				dataIndex: 'create_time',
				key: 'create_time',
				render:(create_time)=> dayjs(create_time).format('YYYY年MM月DD日 HH:mm:ss')
			},
			{
				title: '授权时间',
				dataIndex: 'auth_time',
				key: 'auth_time',
				render:(auth_time)=> auth_time ? dayjs(auth_time).format('YYYY年MM月DD日 HH:mm:ss') : ''
			},
			{
				title: '授权人',
				dataIndex: 'auth_name',
				key: 'auth_name',
			},
			{
				title: '操作',
				//dataIndex: 'auth_name',
				key: 'action',
				render:()=> <Button onClick={this.showAuthModal} type="link">设置权限</Button>
			},
		];
		return (
			<div>
				{/* Card组件 */}
				<Card 
					title={<Button onClick={this.showAddModal} type="primary"><PlusCircleOutlined />添加角色</Button>} 
				>
					<Table 
						rowKey="_id"
						dataSource={dataSource} 
						columns={columns} 
						bordered
					/>
				</Card>
				{/* 新增角色弹窗 */}
				<Modal
          title="新增角色"
          visible={this.state.visibleAdd}
          onOk={this.handleAddOk}
					onCancel={this.handleAddCancel}
					okText="确定"
					cancelText="取消"
        >
          <Form ref="roleForm">
						<Item
							name="roleName"
							rules={[{required:true,message:'角色名必须输入'}]}
						>
							<Input placeholder="请输入角色名"/>
						</Item>
					</Form>
        </Modal>
				{/* 授权弹窗 */}
				<Modal
          title="授权"
          visible={this.state.visibleAuth}
          onOk={this.handleAuthOk}
					onCancel={this.handleAuthCancel}
					okText="确定"
					cancelText="取消"
        >
          此处放置antd的树形组件
        </Modal>
			</div>
		)
	}
}

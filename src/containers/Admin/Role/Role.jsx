import React, { Component } from 'react'
import { Card,Button,Table,Modal,Form,Input, message,Tree} from 'antd';
import dayjs from 'dayjs'
import {PlusCircleOutlined} from '@ant-design/icons';
import {reqRoleList,reqAddRole,reqAuthRole} from '@/api'
import treeArr from '@/config/tree_config'

const {Item} = Form

export default class Role extends Component {

	state = { 
		visibleAdd: false,//用于控制是否展示新增角色弹窗
		visibleAuth: false,//用于控制是否展示授权角色弹窗
		roleList:[], //角色列表
		checkedKeys:[] //用于收集树形组件中所有勾选的key，值为数组
	};

	//展示新增角色弹窗
	showAddModal = () => {
    this.setState({visibleAdd: true});
	};
	
	//展示授权弹窗
	showAuthModal = (id) => {
		this._id = id
		let result = this.state.roleList.find((roleObj)=>{
			return roleObj._id === id
		})
		if(result) {
			const {menus} = result
			if(menus.indexOf('home') === -1) menus.push('home')
			this.setState({visibleAuth: true,checkedKeys:menus});
		}
  };

	//新增角色弹窗--确认按钮的回调
  handleAddOk = async() => {
		const {roleName} = this.refs.roleForm.getFieldsValue()
		let result = await reqAddRole(roleName)
		const {status,msg} = result
		if(status === 0){
			this.getRoleList()
			this.refs.roleForm.resetFields()
    	this.setState({visibleAdd: false});
		}else{
			message.error(msg)
		}
	};
	
	//授权弹窗--确认按钮的回调
	handleAuthOk = async() => {
		let result = await reqAuthRole(this._id,this.state.checkedKeys)
		const {status,msg} = result
		if(status===0){
			message.success('授权成功')
			this.setState({visibleAuth: false});
			this.getRoleList()
		}else{
			message.error(msg)
		}
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
	getRoleList = async()=>{
		let result = await reqRoleList()
		const {status,data,msg} = result
		if(status === 0) this.setState({roleList:data.reverse()})
		else message.error(msg)
	}

	handleCheck = (checkedKeys)=>{
		this.setState({checkedKeys})
	}
	
	componentDidMount(){
		this.getRoleList()
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
				dataIndex: '_id',
				key: 'action',
				render:(id)=> <Button onClick={()=>{this.showAuthModal(id)}} type="link">设置权限</Button>
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
					<Tree 
						treeData={treeArr} //树形结构的数据源
						checkable //菜单可勾选
						onCheck={this.handleCheck} //勾选某个菜单的回调
						checkedKeys={this.state.checkedKeys}
						defaultExpandAll={true}//默认展开所有树节点
					/>
        </Modal>
			</div>
		)
	}
}

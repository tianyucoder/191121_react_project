import React, { Component } from 'react'
import {Menu} from 'antd';
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {saveTitle} from '@/redux/actions/title'
import logo from '@/assets/images/logo.png'
import menus from '@/config/menu_config'
import './css/left_nav.less'

const {SubMenu,Item} = Menu;

@connect(
	()=>({}),//映射状态
	{saveTitle}//映射操作状态的方法
)
@withRouter
class LeftNav extends Component {

	saveTitle = (title)=>{
		console.log(title);
		this.props.saveTitle(title)
	}

	//创建菜单的函数
	createMenu = (menuArr)=>{
		return menuArr.map((menuObj)=>{
			if(!menuObj.children){
				return (
					<Item key={menuObj.key} onClick={()=>{this.saveTitle(menuObj.title)}}>
						<Link to={menuObj.path} style={{color:'white'}}>
							<menuObj.icon/>
							{menuObj.title}
						</Link>
					</Item>
				)
			}else{
				return(
					<SubMenu 
						style={{color:'white'}} 
						key={menuObj.key} 
						icon={<menuObj.icon/>} 
						title={menuObj.title}
					>
						{this.createMenu(menuObj.children)}
					</SubMenu>
				)
			}
		})
	}

	render() {
		const {pathname} = this.props.location
		const openedkey = pathname.split('/')
		const checkedKey = openedkey.slice(-1) //要选中的菜单
		return (
			<div className="left-nav">
				<div className="nav-top">
					<img src={logo} alt=""/>
					<span>商品管理系统</span>
				</div>
				{/* antd的Menu组件 */}
				<Menu
					selectedKeys={checkedKey} //默认选中哪个菜单
					defaultOpenKeys={openedkey} //默认展开哪个菜单
					mode="inline" //菜单的模式
					theme="dark" //主题颜色
				>
					{this.createMenu(menus)}
				</Menu>
			</div>
		)
	}
}
export default LeftNav

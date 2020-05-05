import React, { Component } from 'react'
import {Menu} from 'antd';
import logo from '@/assets/images/logo.png'
import menus from '@/config/menu_config'
import './css/left_nav.less'

const {SubMenu,Item} = Menu;

export default class LeftNav extends Component {

	//创建菜单的函数
	createMenu = (menuArr)=>{
		return menuArr.map((menuObj)=>{
			if(!menuObj.children){
				return (
					<Item key={menuObj.key} icon={<menuObj.icon/>}>
						{menuObj.title}
					</Item>
				)
			}else{
				return(
					<SubMenu key={menuObj.key} icon={<menuObj.icon/>} title={menuObj.title}>
						{this.createMenu(menuObj.children)}
					</SubMenu>
				)
			}
		})
	}

	render() {
		return (
			<div className="left-nav">
				<div className="nav-top">
					<img src={logo} alt=""/>
					<span>商品管理系统</span>
				</div>
				{/* antd的Menu组件 */}
				<Menu
					defaultSelectedKeys={['home']} //默认选中哪个菜单
					defaultOpenKeys={[]} //默认展开哪个菜单
					mode="inline" //菜单的模式
					theme="dark" //主题颜色
				>
					{this.createMenu(menus)}
				</Menu>
			</div>
		)
	}
}

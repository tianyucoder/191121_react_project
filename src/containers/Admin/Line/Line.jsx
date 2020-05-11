import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';

export default class line extends Component {

	getOption = ()=>{
		return {
			title: {
				text: '商品销售数据报表',
				link:'http://www.atguigu.com/',
				/* textStyle:{
					color:'red'
				} */
			},
			tooltip: {
				show:true,
				trigger:'axis',
				showDelay:500
			},
			legend: {
				data:['销量','库存']
			},
			xAxis: {
				data: ["运动鞋","皮鞋","雪纺衫","裤子","高跟鞋","袜子"]
			},
			yAxis: {},
			//series里的是数据
			series: [
				{
					name: '销量',
					type: 'line', //以哪一种图表展示 bar柱状图 line折线图 pie饼状图
					data: [5, 20, 36, 10, 10, 20]
				},
				{
					name: '库存',
					type: 'line', //以哪一种图表展示 bar柱状图 line折线图 pie饼状图
					data: [20, 25, 36, 40, 9, 50]
				}
			],
			toolbox:{
				 show:true,
				 feature:{
					 saveAsImage:{type:'gif'},
					 restore:{},
					 dataView:{}
				 },
				 
			}
		};
	}

	render() {
		return (
			<div>
				<ReactEcharts option={this.getOption()}/>
			</div>
		)
	}
}

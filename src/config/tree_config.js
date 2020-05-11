
export default [
  {
    title: '首页', // 菜单标题名称
		key: 'home', // 菜单的标识
		disabled:true
  },
  {
    title: '商品',
    key: 'prod_about',
    children: [ // 子菜单列表
      {
        title: '分类管理',
        key: 'category',
      },
      {
        title: '商品管理',
        key: 'product',
      },
    ]
  },

  {
    title: '用户管理',
    key: 'user',
  },
  {
    title: '角色管理',
    key: 'role',
  },

  {
    title: '图形图表',
    key: 'charts',
    children: [
      {
        title: '柱形图',
        key: 'bar',
      },
      {
        title: '折线图',
        key: 'line',
      },
      {
        title: '饼图',
        key:  'pie',
      },
    ]
  },
]

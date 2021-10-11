/**
 * 项目路由表
 * 新添加页面请在这里注册！
 */
export default [
  // {
  //   name: 'welcome',
  //   options: {
  //     title: 'Welcome',
  //     tabBarVisible: false,
  //   },
  //   component: require('./pages/welcome/index').default,
  // },
  {
    name: 'hot',
    options: {
      title: '最热',
    },
    component: require('./pages/hot/index').default,
  },
  {
    name: 'trend',
    options: {
      title: '趋势',
    },
    component: require('./pages/trend/index').default,
  },
  {
    name: 'star',
    options: {
      title: '收藏',
    },
    component: require('./pages/star/index').default,
  },
  {
    name: 'my',
    options: {
      title: '我的',
    },
    component: require('./pages/my/index').default,
  },
];

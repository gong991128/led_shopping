import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '底部tabar', keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        // redirect: '/login',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/class',
        name: 'Class',
        component: () => import('@/views/class/index'),
        meta: { title: '分类', keepAlive: false }
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/views/cart/index'),
        meta: { title: '购物车', keepAlive: false }
      },
      {
        path: '/user',
        name: 'User',
        // redirect: '/login',
        component: () => import('@/views/user/user'),
        meta: { title: '我的', keepAlive: false }
      }

    ]
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('@/views/home/Details'),
    meta: { title: '详情', keepAlive: false }
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/layouts/login'),
    meta: { title: '登录注册', keepAlive: false }
  },
  {
    path: '/orderform',
    name: 'Orderform',
    component: () => import('@/views/cart/orderform'),
    meta: { title: '订单付款页面', keepAlive: false }
  },
  {
    path: '/defrayal',
    name: 'Defrayal',
    component: () => import('@/views/cart/defrayal'),
    meta: { title: '支付页面', keepAlive: false }
  },
  {
    path: '/search',
    name: 'Search',
    // redirect: '/login',
    component: () => import('@/views/home/search'),
    meta: { title: '搜索', keepAlive: false }
  }

]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router

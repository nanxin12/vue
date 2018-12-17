import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/Home'
// import Ciyt from '@/pages/city/city'
const Home = () => import('@/pages/Home')
const Ciyt = () => import('@/pages/city/city')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // 重命名路由 redirect
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'Ciyt',
      component: Ciyt
    }
  ]
})

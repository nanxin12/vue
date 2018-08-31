import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Ciyt from '@/pages/city/city'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'Ciyt',
      component: Ciyt
    }
  ]
})

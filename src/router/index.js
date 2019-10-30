import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Cart from '@/components/Cart'


Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path:'/',
      redirect:'/List'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../assets/js/home/index.vue'
import Money from '../assets/js/money/index.vue'
import Borrow from '../assets/js/borrow/index.vue'
import Save from '../assets/js/save/index.vue'
import Vip from '../assets/js/vip/index.vue'
import Detail from '../assets/js/detail/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'

    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/money',
      name: 'money',
      component: Money
    },
    {
      path: '/borrow',
      name: 'borrow',
      component: Borrow
    }, {
      path: '/save',
      name: 'save',
      component: Save
    }, {
      path: '/vip',
      name: 'vip',
      component: Vip
    }, {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})

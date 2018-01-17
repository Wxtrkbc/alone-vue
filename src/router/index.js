import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'
import Home from '@/components/Home'
import store from '../store'
import Login from '../components/user/Login'
import Account from '../components/user/Account'
import Register from '../components/user/Register'
// import { Login, Account, Register } from '../components/user'
import Explore from '../components/Explore.vue'
import Profile from '../components/Profile.vue'
import Ins from '../components/Ins.vue'

Vue.use(Router)

function requireLogin(to, from, next){
	if(typeof(store.state.userInfo.uuid) != 'undefined') {
		next()
	} else {
		next('/account')
	}
}

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Home,
      beforeEnter: requireLogin,
      children:[
        {
          path: '',
          component: Ins
        },
        {
          path: 'ins',
          component: Ins
        }
      ]
  	},{
      path: '/account',
      component: Account,
      children:[
        {
          path: '',
          component: Login
        },
        {
          path: 'login',
          component: Login
        },
        {
          path: 'register',
          component: Register
        }
      ]
  	}
  ]
})

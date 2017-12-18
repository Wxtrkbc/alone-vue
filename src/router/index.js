import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'
import Home from '@/components/Home'
import store from '../store'
import Login from '../components/user/Login'

Vue.use(Router)

function requireLogin(to, from, next){
	if(typeof(store.state.userInfo.uuid) != 'undefined') {
		next()
	} else {
		next('/login')
	}
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter: requireLogin,
  	},{
      path: '/login',
      component: Login
  	}
  ]
})

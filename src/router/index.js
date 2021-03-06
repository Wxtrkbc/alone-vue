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
        },
        {
          name:'profile',
          path: '/users/:uuid/profile',
          component: Profile
        }

      ]
  	},{
      path: '/account',
      component: Account,
      beforeEnter: (to, from, next) => {
        if(typeof(store.state.userInfo.uuid) === 'undefined') {
          next()
        } else {
          next('/')
        }
      },
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
  	},
    // {
    //   path:'/users/:uuid', component:Profile,
    //   children: [
    //     {
    //       name:'profile',
    //       path: 'profile',
    //       component: Profile
    //     }
    //   ]
    // }
  ]
})

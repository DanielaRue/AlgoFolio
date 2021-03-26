import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Pass from '@/components/Pass'
import Start from '@/components/Start'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Pass',
      name: 'Pass',
      component: Pass
    },
    {
      path: '/Start',
      name: 'Start',
      component: Start
    }
  ]
})
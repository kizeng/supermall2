import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/home/Home.vue'
import Class from 'views/class/Class.vue'
import Shoping from 'views/shoping/Shoping.vue'
import User from 'views/user/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/class',
      name: 'class',
      component: Class
    },
    {
      path: '/shoping',
      name: 'shoping',
      component: Shoping
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})

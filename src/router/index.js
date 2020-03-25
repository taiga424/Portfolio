import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Top from '@/components/top'
import Home from '@/components/home'
import Profile from '@/components/profile'
import Portfolio from '@/components/portfolio'
import Skill from '@/components/skill'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/skill',
      component: Skill
    }
  ]
})

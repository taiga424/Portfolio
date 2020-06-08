import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Profile from '@/components/profile'
import Work from '@/components/work'
import Skill from '@/components/skill'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/work',
      component: Work
    },
    {
      path: '/skill',
      component: Skill
    }
  ]
})

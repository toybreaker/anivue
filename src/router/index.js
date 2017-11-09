import Vue from 'vue'
import Router from 'vue-router'
import Years from '@/components/Years'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: Years
    }
  ]
})

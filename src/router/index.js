import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login/index.vue'
import home from '../pages/home/index.vue'
import screen from '../pages/screen/index.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: __dirname,
  scrollBehavior: () => ({
      y: 0
  }),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: 'screen',
          component: screen
        }
      ]
    },
  ]
})
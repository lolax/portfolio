import Vue from 'vue'
import Router from 'vue-router'
import About from './components/about/About.vue'
import NotFound from './components/etc/NotFound.vue'
 
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: About
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
})

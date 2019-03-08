import Vue from 'vue'
import Router from 'vue-router'
import About from './components/about/About.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Writing from './components/writing/Writing.vue'
import Connect from './components/connect/Connect.vue'
import Resume from './components/etc/Resume.vue'
import NotFound from './components/etc/NotFound.vue'
 
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/writing',
      name: 'writing',
      component: Writing,
    },
    // {
    //   path: '/posts',
    //   name: 'post',
    //   component: Post,
    // },
    {
      path: '/connect',
      name: 'connect',
      component: Connect,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
})

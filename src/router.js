import Vue from 'vue'
import Router from 'vue-router'
import About from './components/about/About.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Writing from './components/writing/Writing.vue'
import Contact from './components/contact/Contact.vue'
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
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
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

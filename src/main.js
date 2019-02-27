import Vue from 'vue'
import VueProgressiveImage from 'vue-progressive-image'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueProgressiveImage)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routers.js'
import bootstrap from './common/css/bootstrap.min.css'
import gank from './common/css/gank.css'

Vue.use(VueRouter)

const router = new VueRouter({
  'mode': 'history',
  routes
});

new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

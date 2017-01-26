'use strict'

const routers = [{
  path: '/:day',
  name: 'home',
  component(resolve) {
    require.ensure(['./components/home.vue'], () => {
      resolve(require('./components/home.vue'));
    })
  }
}, {
  path: '/history',
  name: 'history',
  component(resolve) {
    require.ensure(['./components/history.vue'], () => {
      resolve(require('./components/history.vue'));
    })
  }
}, {
  path: '/category/:type',
  name: 'category',
  component(resolve) {
    require.ensure(['./components/category.vue'], () => {
      resolve(require('./components/category.vue'));
    })
  }
}, {
  path: '/',
  name: 'index',
  redirect: { name: 'home' }
}];

export default routers

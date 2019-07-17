import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index'),
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('@/views/index/store'),
  },
]

export default new Router({
  routes
});
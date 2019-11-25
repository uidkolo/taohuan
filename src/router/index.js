import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/containers/Index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index,
    children:[
      {
        path: '/',
        name: 'Index',
        component: () => import('@/pages/Index')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

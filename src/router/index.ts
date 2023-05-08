import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookDataView from '../views/CLIENT/BookDataView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/bookData',
    name:'bookData',
    component:BookDataView
  },
  {
    path:'/updateBook/:newId',
    name:'updateBook',
    component:()=>import('../views/CLIENT/UpdateView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component:()=>import('../views/RegisterView.vue')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/LoginView.vue')
  },
  {
    path:'/client/marketPlace',
    name:'client-marketPlace',
    component:()=>import('../views/CLIENT/MarketView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HomeView from '../views/staff/Staff.vue'
import Login from '../views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // name: 'home',
    // component: HomeView,
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  { path: '/take-number',
    name: 'TakeNumber', 
    component: () => import( '../views/student/TakeNumber.vue')
  },
  { path: '/personal/:id', name: 'PersonalQueue', component:()=>import('../views/student/PersonalQueue.vue') },
  { path: '/records', name: 'QueueRecords', component: ()=>import('../views/student/QueueRecords.vue') },
  
]

// 防止连续点击多次路由报错


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

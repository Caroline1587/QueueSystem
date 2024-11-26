import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HomeView from '../views/staff/Staff.vue'
import Student from '../views/student/Student.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/student',
    name: 'student',
    component: Student
  },
  { path: '/callee',
    name: 'TakeNumber', 
    component: () => import( '../views/student/TakeNumber.vue')
  },
  { path: '/personal/:id', name: 'PersonalQueue', component:()=>import('../views/student/PersonalQueue.vue') },
  { path: '/records', name: 'QueueRecords', component: ()=>import('../views/student/QueueRecords.vue') },
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Canvas from '../components/Canvas'
import Car from '../components/Car'

const routes = [
  {
    path: '/',
    name: 'Canvas',
    component: Canvas
  },
  {
    path: '/car',
    name: 'Car',
    component: Car,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

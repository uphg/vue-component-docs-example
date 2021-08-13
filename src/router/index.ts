import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../Layout/Layout.vue'
import HomeLayout from '../Layout/HomeLayout.vue'
import NotFound from '../Layout/404.vue'
import { docs } from './docs'
import { components } from './components'
import Home from '../views/Home.vue'

const history = createWebHistory()

export const routes = [
  {
    path: '/',
    // name: 'Home',
    component: HomeLayout ,
    redirect: '/home',
    meta: { title: '首页' },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: { title: '首页' },
        hidden: true
      }
    ]
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Layout,
    meta: { title: '文档' },
    children: docs
  },
  {
    path: '/components',
    name: 'Components',
    component: Layout,
    meta: { title: '组件' },
    children: components
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    hidden: true
  }
]

export const router = createRouter({
  history,
  routes
})
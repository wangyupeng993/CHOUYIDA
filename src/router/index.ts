import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/layout/Layout.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Layout,
    meta: {title: '首页', icon: '',onelevel: true},
    children: [{
      path: '',
      name: 'Home',
      component: () => import('@/views/pages/home/index.vue'),
      meta: {title: '首页', icon: ''}
    }]
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404/index.vue')
  },
  {
    path: "*",
    redirect: "/404"
  }
]

const router = new VueRouter({
  mode: process.env.NODE_ENV === "development" ? "history" : "hash",
  base: process.env.BASE_URL,
  linkActiveClass: 'text-green',
  routes
})

export default router

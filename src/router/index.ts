import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/layout/Layout.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    hidden: true
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
    path: '/operation',
    component: Layout,
    meta: {title: '运营项目', icon: '',onelevel: true},
    children: [{
      path: '',
      name: 'Home',
      component: () => import('@/views/pages/operation/index.vue'),
      meta: {title: '运营项目', icon: ''}
    }]
  },
  {
    path: '/designer',
    component: Layout,
    meta: {title: '合作设计师', icon: '',onelevel: true},
    children: [{
      path: '',
      name: 'Home',
      component: () => import('@/views/pages/designer/index.vue'),
      meta: {title: '合作设计师', icon: ''}
    }]
  },
  {
    path: '/team',
    component: Layout,
    meta: {title: '团队介绍', icon: '',onelevel: true},
    children: [{
      path: '',
      name: 'Home',
      component: () => import('@/views/pages/team/index.vue'),
      meta: {title: '团队介绍', icon: ''}
    }]
  },
  {
    path: '/partner',
    component: Layout,
    meta: {title: '合作伙伴', icon: '',onelevel: true},
    children: [{
      path: '',
      name: 'Home',
      component: () => import('@/views/pages/partner/index.vue'),
      meta: {title: '合作伙伴', icon: ''}
    }]
  },
  {
    path: '/recruitment',
    component: Layout,
    meta: {title: '人才招聘', icon: '',onelevel: true},
    children: [{
      path: '',
      name: 'Home',
      component: () => import('@/views/pages/recruitment/index.vue'),
      meta: {title: '人才招聘', icon: ''}
    }]
  },
  {
    path: '/information',
    component: Layout,
    meta: {title: '资讯动态', icon: '',onelevel: true},
    children: [{
      path: '',
      name: 'Home',
      component: () => import('@/views/pages/home/index.vue'),
      meta: {title: '资讯动态', icon: ''}
    }]
  },
  {
    path: '/404',
    name: 'NotFound',
    hidden: true,
    component: () => import('@/views/404/index.vue')
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
]

const router = new VueRouter({
  mode: process.env.NODE_ENV === "development" ? "history" : "hash",
  base: process.env.BASE_URL,
  linkActiveClass: 'text-green',
  routes
})

export default router

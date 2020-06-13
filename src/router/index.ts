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
      name: 'Operation',
      component: () => import('@/views/pages/operation/index.vue'),
      meta: {title: '运营项目', icon: ''}
    },{
      path: 'details',
      name: 'OperationDetails',
      component: () => import('@/views/pages/operation/details/index.vue'),
      meta: {title: '案例', icon: ''}
    },]
  },
  {
    path: '/designer',
    component: Layout,
    meta: {title: '合作设计师', icon: '',onelevel: true},
    children: [{
      path: '',
      name: 'Designer',
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
      name: 'Team',
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
      name: 'Partner',
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
      name: 'Recruitment',
      component: () => import('@/views/pages/recruitment/index.vue'),
      meta: {title: '人才招聘', icon: ''}
    },{
      path: 'details',
      name: 'RecruitmentDetails',
      component: () => import('@/views/pages/recruitment/details/index.vue'),
      meta: {title: '人才招聘', icon: ''}
    },]
  },
  {
    path: '/information',
    component: Layout,
    meta: {title: '资讯动态', icon: '',onelevel: true},
    children: [{
      path: '',
      name: 'Information',
      component: () => import('@/views/pages/information/index.vue'),
      meta: {title: '资讯动态', icon: ''}
    },{
      path: 'details',
      name: 'Details',
      component: () => import('@/views/pages/information/details/index.vue'),
      meta: {title: '资讯详情', icon: ''}
    }]
  },
  {
    path: '/help',
    component: Layout,
    meta: {title: '帮助', icon: '',onelevel: true},
    children: [{
      path: '',
      name: 'Help',
      component: () => import('@/views/pages/help/index.vue'),
      meta: {title: '帮助', icon: ''}
    }]
  },
  {
    path: '/about',
    component: Layout,
    meta: {title: '关于筹易达', icon: 'cuIcon-form',onelevel: true},
    hidden: true,
    children: [{
      path: '',
      name: 'About',
      component: () => import('@/views/pages/about/index.vue'),
      meta: {title: '关于筹易达', icon: 'cuIcon-form'}
    }]
  },
  {
    path: '/downloadApp',
    component: Layout,
    meta: {title: '下载app', icon: 'cuIcon-down',onelevel: true},
    hidden: true,
    children: [{
      path: '',
      name: 'DownloadApp',
      component: () => import('@/views/pages/downloadApp/index.vue'),
      meta: {title: '下载app', icon: 'cuIcon-down'}
    }]
  },
  {
    path: '/cooperation',
    component: Layout,
    meta: {title: '项目合作', icon: 'cuIcon-cooperation',onelevel: true},
    hidden: true,
    children: [{
      path: '',
      name: 'Cooperation',
      component: () => import('@/views/pages/cooperation/index.vue'),
      meta: {title: '项目合作', icon: 'cuIcon-cooperation'}
    }]
  },
  {
    path: '/attention',
    component: Layout,
    meta: {title: '关注我们', icon: 'cuIcon-attention',onelevel: true},
    hidden: true,
    children: [{
      path: '',
      name: 'Attention',
      component: () => import('@/views/pages/attention/index.vue'),
      meta: {title: '关注我们', icon: 'cuIcon-attention'}
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

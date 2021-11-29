import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/test1',
    name: 'Test1',
    component: () => import('../views/Test1'),
    redirect: '/test1/page1',
    children: [
      {
        path: 'page1',
        name: 'Test1Page1',
        component: () => import('../views/Test1/Test1Page1.vue')
      },
      {
        path: 'page2',
        name: 'Test1Page2',
        component: () => import('../views/Test1/Test1Page2.vue')
      },
      {
        path: 'page3',
        name: 'Test1Page3',
        component: () => import('../views/Test1/Test1Page3.vue')
      },
    ]
  },
  {
    path: '/test2',
    name: 'Test2',
    component: () => import('../views/Test2.vue')
  },
  {
    path: '/test3',
    name: 'Test3',
    component: () => import('../views/Test3.vue')
  },
  {
    path: '/test4',
    name: 'Test4',
    component: () => import('../views/Test4.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/NotFount.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout'),
    redirect: '/portal',
    children: [
      {
        path: '/portal',
        name: 'Portal',
        component: () => import('../views/Portal.vue'),
      },
      {
        path: '/test1',
        name: 'Test1',
        component: () => import('../views/Test1'),
        redirect: '/test1/nav1-page1',
        children: [
          // nav1
          {
            path: 'nav1-page1',
            name: 'Test1Page1',
            component: () => import('../views/Test1/route/Test1Page1.vue')
          },
          {
            path: 'nav1-page2',
            name: 'Test1Page2',
            component: () => import('../views/Test1/route/Test1Page2/index.vue')
          },
          {
            path: 'nav1-page3',
            name: 'Test1Page3',
            component: () => import('../views/Test1/route/Test1Page3.vue')
          },
          {
            path: 'typing-game',
            name: 'GameTyping',
            component: () => import('../views/Test1/route/GameTyping/index.vue')
          },
          // nav2
          {
            path: 'requirement',
            name: 'RequirementList',
            component: () => import('../views/Test1/route/RequirementList/index.vue')
          },
          {
            path: 'nav2-page1',
            name: 'Requirement',
            component: () => import('../views/Test1/route/Requirement/index.vue')
          },
          {
            path: 'nav2-page2',
            name: 'Test1Page4',
            component: () => import('../views/Test1/route/Test1Page4.vue')
          },
          {
            path: 'nav2-page3',
            name: 'Test1Page5',
            component: () => import('../views/Test1/route/Test1Page5/index.vue')
          }
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
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
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

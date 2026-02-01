import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginLayout',
      component: () => import('@/Layout/loginLayout.vue'),
      redirect: { name: 'login' },
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/pages/login.vue'),
        },
      ],
    },
    {
      path: '/',
      name: 'gold',
      component: () => import('@/Layout/mainLayout.vue'),
      children: [
        {
          path: 'global',
          name: 'global',
          component: () => import('@/pages/goldGlobal.vue'),
        },
      ],
    },
  ],
})

export default router

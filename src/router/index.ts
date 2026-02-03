import { createRouter, createWebHistory } from 'vue-router'
import { guard } from '@/router/guard.ts'

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
          meta: { login: false },
        },
      ],
    },
    {
      path: '/',
      name: 'global',
      component: () => import('@/Layout/mainLayout.vue'),
      children: [
        {
          path: 'gold',
          name: 'gold',
          component: () => import('@/pages/goldGlobal.vue'),
          meta: { login: true },
        },
        {
          path: 'silver',
          name: 'silver',
          component: () => import('@/pages/silverGlobal.vue'),
          meta: { login: true },
        },
      ],
    },
  ],
})
router.beforeEach(guard)
export default router

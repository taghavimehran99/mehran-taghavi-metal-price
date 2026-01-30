import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('/src/components/login.vue'),
    },
    {
      path: '/gold',
      name: 'gold',
      component: () => import('/src/components/goldGlobal.vue'),
    },
  ],
})

export default router

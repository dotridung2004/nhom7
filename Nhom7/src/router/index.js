import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/tin-tuc1',
      name: 'tin-tuc1',
      component: () => import('../views/News.vue')
    },
    {
      path: '/tin-tuc2',
      name: 'tin-tuc2',
      component: () => import('../views/News2.vue')
    }
  ]
})

export default router

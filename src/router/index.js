import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/pages/Home.vue')
    },
    {
      path: '/project-details',
      name: 'ProjectDetails',
      component: () => import('../components/pages/ProjectDetails.vue')
    },
  ]
})

export default router

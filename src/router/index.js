import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/description',
      name: 'DESCRIPTION',
      component: () => import('../views/DescriptionView.vue')
    },
    {
      path: '/features',
      name: 'FEATURES',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FeaturesView.vue')
    },
    {
      path: '/screens',
      name: 'SCREENS',
      component: () => import('../views/ScreensView.vue')
    },
    {
      path: '/extra',
      name: 'EXTRA',
      component: () => import('../views/ExtraView.vue')
    }
  ]
})

export default router

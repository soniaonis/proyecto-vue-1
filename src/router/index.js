import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/description',
      name: 'DESCRIPTION',
      component: () => import('../views/DescriptionView.vue')
    },
    {
      path: '/features',
      name: 'FEATURES',
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
    },
    {
      path: '/login',
      name: 'Login Button',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router

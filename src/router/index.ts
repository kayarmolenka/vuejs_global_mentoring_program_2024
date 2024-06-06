import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import MoviePage from '@/pages/MoviePage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'Home',
      path: '/home',
      component: HomePage
    },
    {
      name: 'Movie',
      path: '/movie/:id',
      component: MoviePage
    },
    {
      name: 'NotFoundPage',
      path: '/:pathMatch(.*)*',
      component: NotFoundPage
    }
  ]
})

export default router

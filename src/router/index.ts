import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MovieCardDetails from '@/components/MovieCardDetails.vue'
import SearchForm from '@/components/SearchForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        { name: 'search', path: 'search', component: SearchForm },
        {
          name: 'movie',
          path: 'movie/:id',
          component: MovieCardDetails,
          props: (route) => ({ id: route.params.id })
        }
      ]
    }
  ]
})

export default router

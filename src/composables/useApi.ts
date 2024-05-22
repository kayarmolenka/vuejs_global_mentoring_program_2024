import { ref } from 'vue'
import apiClient from '@/api'
import { AxiosError } from 'axios'
import { date as mockMovies } from '../../mockData/data'
import type { Movie } from '@/components/MovieCard.vue'

export function useApi() {
  const data = ref<Movie[] | null>(null)
  const error = ref<Error | null>(null)

  async function fetch(url: string) {
    try {
      const response = await apiClient.get(url)

      data.value = response.data
    } catch (e) {
      if (e instanceof AxiosError) {
        error.value = {
          name: e.name,
          message: e.message,
          stack: e.stack
        }

        data.value = mockMovies
      }
    }
    data.value = mockMovies
  }

  return { data, error, fetch }
}

import axios, { AxiosError } from 'axios'
import { ref } from 'vue'
import type { Movie } from '@/components/MovieCard.vue'

const URL = 'https://tame-erin-pike-toga.cyclic.app/movies'

export function useMovies() {
  const data = ref<Movie[] | null>(null)
  const error = ref<Error | null>(null)

  async function execute() {
    try {
      const response = await axios.get(URL)
      data.value = response.data
    } catch (e) {
      if (e instanceof AxiosError) {
        error.value = {
          name: e.name,
          message: e.message,
          stack: e.stack
        }
      }
    }
  }

  return { data, error, execute }
}

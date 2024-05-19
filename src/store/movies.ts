import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Movie } from '@/components/MovieCard.vue'
import { useMovies } from '@/composables/useMovies'

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<Movie[] | null>(null)
  const loading = ref<boolean>(false)
  const searchTerm = ref<string>('')
  const searchBy = ref('Genre')
  const countMoviesFound = computed(() => filteredMovies.value?.length)

  const getMovieById = (movieId: number) => {
    return movies.value?.find((movie) => movie.id === movieId)
  }

  const fetchMovies = async () => {
    const { execute, data } = useMovies()
    loading.value = true
    await execute()

    if (data) {
      movies.value = data.value
    }
    loading.value = false
  }

  const setSearchBy = (newValue: string) => {
    searchBy.value = newValue
  }
  const setSearchTerm = (newValue: string) => {
    searchTerm.value = newValue
  }

  const filteredMovies = computed(() => {
    if (searchBy.value === 'Title') {
      return movies.value?.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.value.toLowerCase())
      )
    } else if (searchBy.value === 'Genre') {
      return movies.value?.filter((movie) =>
        movie.genres.map((genre) => genre.toLowerCase()).includes(searchTerm.value.toLowerCase())
      )
    } else {
      return []
    }
  })

  return {
    movies,
    loading,
    countMoviesFound,
    fetchMovies,
    getMovieById,
    searchBy,
    searchTerm,
    setSearchBy,
    filteredMovies,
    setSearchTerm
  }
})

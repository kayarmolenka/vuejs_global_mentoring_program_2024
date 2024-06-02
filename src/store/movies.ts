import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Movie } from '@/components/MovieCard.vue'
import { useApi } from '@/composables/useApi'

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<Movie[] | null>(null)
  const loading = ref<boolean>(false)
  const searchTerm = ref<string>('')
  const searchBy = ref('Title')
  const sortBy = ref<'Release date' | 'Rating'>('Release date')
  const chosenMovieGenre = ref<string[]>([])

  const getMovieById = (movieId: number) => {
    return movies.value?.find((movie) => movie.id === movieId)
  }

  const fetchMovies = async () => {
    const { data, fetch } = useApi()
    loading.value = true
    await fetch('/movies.json')
    if (data) {
      movies.value = data.value
    }
    loading.value = false
  }

  const setSearchBy = (newValue: string) => {
    searchBy.value = newValue
  }
  const setSortBy = (newValue: 'Release date' | 'Rating') => {
    sortBy.value = newValue
  }
  const setSearchTerm = (newValue: string) => {
    searchTerm.value = newValue
  }
  const setChosenMovieGenre = (newValue: string[]) => {
    chosenMovieGenre.value.push(...newValue)
  }

  return {
    movies,
    loading,
    chosenMovieGenre,
    searchBy,
    searchTerm,
    sortBy,
    fetchMovies,
    getMovieById,
    setSearchBy,
    setSearchTerm,
    setChosenMovieGenre,
    setSortBy
  }
})

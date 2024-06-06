import { computed, onMounted } from 'vue'
import { useMoviesStore } from '@/store/movies'
import { sortByFunction } from '@/utils/helpers'

export function useMovies() {
  const store = useMoviesStore()
  const movies = computed(() => store.movies)
  const searchBy = computed(() => store.searchBy)
  const searchTerm = computed(() => store.searchTerm)
  const countMoviesFound = computed(() => filteredMovies.value?.length)
  const countByGenre = computed(() => moviesByGenre.value?.length)
  const chosenMovie = computed(() => store.chosenMovieGenre)

  const filteredMovies = computed(() => {
    if (searchBy.value === 'Title') {
      return movies.value
        ?.filter((movie) => movie.title.toLowerCase().includes(searchTerm.value.toLowerCase()))
        .sort((a, b) => sortByFunction(a, b, store.sortBy))
    } else if (searchBy.value === 'Genre') {
      return movies.value
        ?.filter((movie) =>
          movie.genres
            .map((genre) => genre.toLowerCase())
            .includes(searchTerm.value.toLowerCase() || 'action')
        )
        .sort((a, b) => sortByFunction(a, b, store.sortBy))
    } else {
      return []
    }
  })

  const moviesByGenre = computed(() => {
    return movies.value
      ?.filter((movie) =>
        movie.genres.some((genre) =>
          chosenMovie.value
            .flat()
            .map((chosen) => chosen.toLowerCase())
            .includes(genre.toLowerCase())
        )
      )
      .sort((a, b) => sortByFunction(a, b, store.sortBy))
  })

  onMounted(() => {
    store.fetchMovies()
  })

  return { filteredMovies, countMoviesFound, moviesByGenre, countByGenre }
}

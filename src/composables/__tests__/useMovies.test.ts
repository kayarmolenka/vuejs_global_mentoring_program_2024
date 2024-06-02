import { describe, it, expect, beforeEach } from 'vitest'
import { useMovies } from '@/composables/useMovies'
import { useMoviesStore } from '@/store/movies'
import { createPinia, setActivePinia } from 'pinia'

describe('useMovies', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('returns an empty array when searchBy is neither Title nor Genre', async () => {
    const store = useMoviesStore()
    store.searchBy = 'SomethingElse'

    const { filteredMovies } = useMovies()

    expect(filteredMovies.value).toStrictEqual([])
  })

  it('returns movies with the chosen genre sorted by the store sortBy property', async () => {
    const store = useMoviesStore()
    store.movies = [
      { title: 'Movie 1', genres: ['Action', 'Comedy'], releaseDate: '2000-01-01' },
      { title: 'Movie 2', genres: ['Drama'], releaseDate: '1999-01-01' },
      { title: 'Movie 3', genres: ['Action'], releaseDate: '2001-01-01' }
    ]
    store.chosenMovieGenre = ['Action']
    store.sortBy = 'Release date'

    const { moviesByGenre } = useMovies()

    expect(moviesByGenre.value).toStrictEqual([
      { title: 'Movie 3', genres: ['Action'], releaseDate: '2001-01-01' },
      { title: 'Movie 1', genres: ['Action', 'Comedy'], releaseDate: '2000-01-01' }
    ])
  })

  it('returns movies with the chosen genre sorted by rating', async () => {
    const store = useMoviesStore()
    store.movies = [
      { title: 'Movie 1', genres: ['Action'], imdbRating: 7.5 },
      { title: 'Movie 2', genres: ['Action'], imdbRating: 8.0 },
      { title: 'Movie 3', genres: ['Action'], imdbRating: 7.0 }
    ]
    store.chosenMovieGenre = ['Action']
    store.sortBy = 'Rating'

    const { moviesByGenre } = useMovies()

    expect(moviesByGenre.value).toStrictEqual([
      { title: 'Movie 2', genres: ['Action'], imdbRating: 8.0 },
      { title: 'Movie 1', genres: ['Action'], imdbRating: 7.5 },
      { title: 'Movie 3', genres: ['Action'], imdbRating: 7.0 }
    ])
  })
})

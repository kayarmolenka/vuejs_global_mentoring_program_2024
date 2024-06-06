import { describe, it, expect, beforeEach } from 'vitest'
import { useMovies } from '@/composables/useMovies'
import { useMoviesStore } from '@/store/movies'
import { createPinia, setActivePinia } from 'pinia'

const mockedMovie = {
  id: 1,
  title: 'Movie 1',
  posterurl: '',
  genres: ['Action', 'Comedy'],
  actors: [],
  releaseDate: '2000-01-01',
  storyline: '',
  ratings: [],
  movieUrl: '',
  year: '2000',
  poster: '',
  contentRating: '',
  duration: '',
  averageRating: 0,
  imdbRating: 0
}

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
      {
        ...mockedMovie,
        ...{ title: 'Movie 1', genres: ['Action', 'Comedy'], releaseDate: '2000-01-01' }
      },
      { ...mockedMovie, ...{ title: 'Movie 2', genres: ['Drama'], releaseDate: '1999-01-01' } },
      { ...mockedMovie, ...{ title: 'Movie 3', genres: ['Action'], releaseDate: '2001-01-01' } }
    ]
    store.chosenMovieGenre = ['Action']
    store.sortBy = 'Release date'

    const { moviesByGenre } = useMovies()

    expect(moviesByGenre.value).toStrictEqual([
      { ...mockedMovie, ...{ title: 'Movie 3', genres: ['Action'], releaseDate: '2001-01-01' } },
      {
        ...mockedMovie,
        ...{ title: 'Movie 1', genres: ['Action', 'Comedy'], releaseDate: '2000-01-01' }
      }
    ])
  })

  it('returns movies with the chosen genre sorted by rating', async () => {
    const store = useMoviesStore()
    store.movies = [
      { ...mockedMovie, ...{ title: 'Movie 1', genres: ['Action'], imdbRating: 7.5 } },
      { ...mockedMovie, ...{ title: 'Movie 2', genres: ['Action'], imdbRating: 8.0 } },
      { ...mockedMovie, ...{ title: 'Movie 3', genres: ['Action'], imdbRating: 7.0 } }
    ]
    store.chosenMovieGenre = ['Action']
    store.sortBy = 'Rating'

    const { moviesByGenre } = useMovies()

    expect(moviesByGenre.value).toStrictEqual([
      { ...mockedMovie, ...{ title: 'Movie 2', genres: ['Action'], imdbRating: 8.0 } },
      { ...mockedMovie, ...{ title: 'Movie 1', genres: ['Action'], imdbRating: 7.5 } },
      { ...mockedMovie, ...{ title: 'Movie 3', genres: ['Action'], imdbRating: 7.0 } }
    ])
  })
})

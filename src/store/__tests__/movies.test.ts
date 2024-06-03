import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useMoviesStore } from '../movies'
import { createPinia, setActivePinia } from 'pinia'
import { date as mockDate } from '../../../mockData/data'

vi.doMock('../../composables/useApi', () => ({
  data: mockDate,
  fetch: vi.fn()
}))

describe('Movies store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should return updated searchBy state', () => {
    const moviesStore = useMoviesStore()

    expect(moviesStore.searchBy).toBe('Title')

    moviesStore.setSearchBy('Genre')

    expect(moviesStore.searchBy).toBe('Genre')
  })

  it('should return updated sortBy state', () => {
    const moviesStore = useMoviesStore()

    expect(moviesStore.sortBy).toBe('Release date')

    moviesStore.setSortBy('Rating')

    expect(moviesStore.sortBy).toBe('Rating')
  })

  it('should return updated searchTerm state', () => {
    const moviesStore = useMoviesStore()

    expect(moviesStore.searchTerm).toBe('')

    moviesStore.setSearchTerm('God')

    expect(moviesStore.searchTerm).toBe('God')
  })

  it('should return updated chosenMovieGenre state', () => {
    const moviesStore = useMoviesStore()

    expect(moviesStore.chosenMovieGenre).toStrictEqual([])

    moviesStore.setChosenMovieGenre(['Action', 'Drama'])

    expect(moviesStore.chosenMovieGenre).toStrictEqual(['Action', 'Drama'])
  })

  it('should return movie by Id 2', () => {
    const moviesStore = useMoviesStore()
    moviesStore.movies = mockDate.slice(0, 5)

    const foundMovie = moviesStore.getMovieById(2)

    expect(foundMovie).toStrictEqual(mockDate[1])
  })

  it('should fetched movies', async () => {
    const moviesStore = useMoviesStore()

    expect(moviesStore.movies).toStrictEqual(null)

    await moviesStore.fetchMovies()

    expect(moviesStore.movies).toStrictEqual(mockDate)
  })
})

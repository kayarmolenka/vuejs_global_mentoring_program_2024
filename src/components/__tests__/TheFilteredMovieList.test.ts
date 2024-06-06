import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TheFilteredMovieList from '../TheFilteredMovieList.vue'
import { date as mockDate } from '../../../mockData/data'
import { createTestingPinia } from '@pinia/testing'
import { useMoviesStore } from '../../store/movies'
import { createRouter, createWebHistory } from 'vue-router'
import router from '../../router'

const routerMock = createRouter({
  history: createWebHistory(),
  routes: router.getRoutes()
})

describe('TheFilteredMovieList', () => {
  it('should render No films found', () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn
    })

    const store = useMoviesStore(pinia)
    store.loading = false
    store.movies = []
    store.fetchMovies = vi.fn()

    const wrapper = mount(TheFilteredMovieList, {
      global: {
        plugins: [pinia, routerMock]
      }
    })

    expect(wrapper.text()).toContain('No films found')

    expect(wrapper.text()).not.toContain('The Godfather')
    expect(wrapper.text()).not.toContain('12 Angry Men')
    expect(wrapper.text()).not.toContain('The Shawshank Redemption')
  })

  it('should render Loading state', () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn
    })

    const store = useMoviesStore(pinia)
    store.loading = true
    store.fetchMovies = vi.fn()
    store.movies = mockDate

    const wrapper = mount(TheFilteredMovieList, {
      global: {
        plugins: [pinia, routerMock]
      }
    })

    expect(wrapper.text()).toContain('Loading...')
  })

  it('should render first 4 movies', () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn
    })

    const store = useMoviesStore(pinia)
    store.loading = false
    store.movies = mockDate.slice(0, 4)
    store.fetchMovies = vi.fn()

    const wrapper = mount(TheFilteredMovieList, {
      global: {
        plugins: [pinia, routerMock]
      }
    })

    expect(wrapper.text()).toContain('The Godfather')
    expect(wrapper.text()).toContain('12 Angry Men')
    expect(wrapper.text()).toContain('The Shawshank Redemption')
    expect(wrapper.text()).toContain('The Dark Knight')

    expect(wrapper.text()).not.toContain("Schindler's List")
  })
})

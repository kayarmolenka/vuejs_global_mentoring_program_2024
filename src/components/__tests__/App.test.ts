import { describe, it, expect, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useMoviesStore } from '../../store/movies'
import App from '../../App.vue'
import HomePage from '@/pages/HomePage.vue'
import { date as mockDate } from '../../../mockData/data'

const mockRoute = {
  path: '/home'
}
const mockRouter = {
  push: vi.fn()
}

describe('App', () => {
  it('should render HomePage at /home and find text', async () => {
    const p = createTestingPinia({ createSpy: vi.fn })

    const store = useMoviesStore(p)
    store.loading = false
    store.movies = mockDate.slice(0, 3)
    store.fetchMovies = vi.fn()

    const wrapper = mount(App, {
      global: {
        mocks: { $route: mockRoute, $router: mockRouter },
        plugins: [p],
        stubs: {
          'router-view': HomePage
        }
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('netflixroulette')
    expect(wrapper.text()).toContain('The Godfather')
  })

  it('should changed sorting option', async () => {
    const pinia = createTestingPinia({ createSpy: vi.fn })

    const store = useMoviesStore(pinia)
    store.loading = false
    store.movies = mockDate.slice(0, 3)
    store.fetchMovies = vi.fn()

    const wrapper = mount(App, {
      global: {
        mocks: { $route: mockRoute, $router: mockRouter },
        plugins: [pinia],
        stubs: {
          'router-view': HomePage
        }
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Sort byRelease')
    const ratingInput: DOMWrapper<HTMLInputElement> = wrapper.find('input[value="Rating"]')

    expect(ratingInput.element.checked).toBe(false)

    await ratingInput.trigger('click')

    expect(ratingInput.element.checked).toBe(true)
  })

  it('should return movies searched by genre', async () => {
    const p = createTestingPinia({ createSpy: vi.fn })

    const store = useMoviesStore(p)
    store.loading = false
    store.movies = mockDate.slice(0, 3)
    store.fetchMovies = vi.fn()
    store.setSearchBy = vi.fn((newValue) => {
      store.searchBy = newValue
    })

    const wrapper = mount(App, {
      global: {
        mocks: { $route: mockRoute, $router: mockRouter },
        plugins: [p],
        stubs: {
          'router-view': HomePage
        }
      }
    })

    await wrapper.vm.$nextTick()

    expect(store.searchBy).toBe('Title')
    expect(wrapper.text()).toContain('Search byTitle')
    const genreInput: DOMWrapper<HTMLInputElement> = wrapper.find('input[value="Genre"]')

    expect(genreInput.element.checked).toBe(false)
    expect(wrapper.text()).toContain('The Godfather')

    await genreInput.trigger('click')
    store.setSearchBy('Genre')
    await wrapper.vm.$nextTick()

    expect(genreInput.element.checked).toBe(true)
    expect(store.searchBy).toBe('Genre')
    expect(wrapper.text()).not.toContain('The Godfather')
  })

  it('should return empty array when searched by unknown genre', async () => {
    const pin = createTestingPinia({ createSpy: vi.fn })

    const store = useMoviesStore(pin)
    store.loading = false
    store.movies = mockDate.slice(0, 3)
    store.fetchMovies = vi.fn()
    store.setSearchBy = vi.fn((newValue) => {
      store.searchBy = newValue
    })
    store.setSearchTerm = vi.fn((newValue) => {
      store.searchTerm = newValue
    })

    const wrapper = mount(App, {
      global: {
        mocks: { $route: mockRoute, $router: mockRouter },
        plugins: [pin],
        stubs: {
          'router-view': HomePage
        }
      }
    })

    await wrapper.vm.$nextTick()

    store.setSearchBy('Genre')

    const searchInput = wrapper.find('[data-testid="search-input"]')
    await searchInput.setValue('unknown genre')

    const searchButton = wrapper.find('[data-testid="search-button"]')
    await searchButton.trigger('click')

    expect(wrapper.text()).toContain('0 movie found')
  })

  it('should return searched result when click enter', async () => {
    const pin = createTestingPinia({ createSpy: vi.fn })

    const store = useMoviesStore(pin)
    store.loading = false
    store.movies = mockDate.slice(0, 3)
    store.fetchMovies = vi.fn()
    store.setSearchBy = vi.fn((newValue) => {
      store.searchBy = newValue
    })
    store.setSearchTerm = vi.fn((newValue) => {
      store.searchTerm = newValue
    })

    const wrapper = mount(App, {
      global: {
        mocks: { $route: mockRoute, $router: mockRouter },
        plugins: [pin],
        stubs: {
          'router-view': HomePage
        }
      }
    })

    await wrapper.vm.$nextTick()

    store.setSearchBy('Title')

    const searchInput = wrapper.find('[data-testid="search-input"]')
    await searchInput.setValue('God')

    await searchInput.trigger('keyup.enter')

    expect(wrapper.text()).toContain('1 movie found')
  })
})

import { createRouter, createMemoryHistory } from 'vue-router'
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import MovieCardDetails from '../MovieCardDetails.vue'
import { date as mockDate } from '../../../mockData/data'
import { createTestingPinia } from '@pinia/testing'
import { useMoviesStore } from '../../store/movies'
import MoviePage from '../../pages/MoviePage.vue'
import mainRouter from '../../router'

describe('MovieCardDetail', () => {
  it('should render loading state', async () => {
    const pin = createTestingPinia({ createSpy: vi.fn })

    const store = useMoviesStore(pin)
    store.loading = true
    store.movies = mockDate.slice(0, 7)

    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/movie/:id',
          component: MovieCardDetails,
          props: true
        },
        {
          path: '/',
          name: 'Home',
          component: { template: '<div></div>' }
        }
      ]
    })

    await router.push('/movie/1')
    await router.isReady()

    const wrapper = mount(MovieCardDetails, {
      global: {
        plugins: [router, pin],
        stubs: {
          'router-view': MoviePage
        }
      }
    })

    await flushPromises()

    expect(wrapper.text()).toContain('Loading...')
  })

  it('should render movie information', async () => {
    const pin = createTestingPinia({ createSpy: vi.fn })

    const store = useMoviesStore(pin)
    store.loading = false
    store.movies = mockDate.slice(0, 3)
    store.getMovieById = vi.fn(() => store.movies?.[0])

    const router = createRouter({
      history: createMemoryHistory(),
      routes: mainRouter.getRoutes()
    })

    await router.push('/movie/1')
    await router.isReady()

    const wrapper = mount(MovieCardDetails, {
      global: {
        plugins: [router, pin],
        stubs: {
          'router-view': MoviePage
        }
      }
    })

    await flushPromises()

    expect(wrapper.find('[data-testid="movie-header"]')).toBeDefined()

    expect(wrapper.text()).toContain('The Shawshank Redemption')
    expect(wrapper.text()).toContain('Drama')
  })

  it('should navigate to home on backClick', async () => {
    const pin = createTestingPinia({ createSpy: vi.fn })

    const store = useMoviesStore(pin)
    store.loading = false
    store.movies = mockDate.slice(0, 3)
    store.getMovieById = vi.fn(() => store.movies?.[0])

    const router = createRouter({
      history: createMemoryHistory(),
      routes: mainRouter.getRoutes()
    })

    await router.push('/movie/1')
    await router.isReady()

    const wrapper = mount(MovieCardDetails, {
      global: {
        plugins: [router, pin]
      }
    })
    await flushPromises()
    const backLink = wrapper.find('[data-testid="back-link"]')

    expect(wrapper.find('[data-testid="movie-header"]')).toBeDefined()
    expect(backLink).toBeDefined()

    const routerPushSpy = vi.fn(router.push)

    router.push = routerPushSpy

    await backLink.trigger('click')

    expect(routerPushSpy).toHaveBeenCalledWith({ name: 'Home' })
  })
})

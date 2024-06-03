import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import MovieCard from '../MovieCard.vue'
import router from '../../router'
import { date as mockData } from '../../../mockData/data'
import { global_lazyLoad_directive } from '../../directives/lazyLoad'

describe('MovieCard', () => {
  const routerMock = createRouter({
    history: createWebHistory(),
    routes: router.getRoutes()
  })
  const wrapper = mount(MovieCard, {
    global: {
      plugins: [routerMock]
    },
    props: {
      movie: mockData[0],
      lazy: false
    },
    directives: { lazyload: global_lazyLoad_directive }
  })

  it('should render movie information', () => {
    expect(wrapper.text()).toContain('The Shawshank Redemption')
    expect(wrapper.text()).toContain('Drama')
  })

  it('should navigate to movie page after click to movie card', async () => {
    await wrapper.find('a').trigger('click')

    await flushPromises()

    expect(routerMock.currentRoute.value.path).toEqual('/movie/1')
  })
})

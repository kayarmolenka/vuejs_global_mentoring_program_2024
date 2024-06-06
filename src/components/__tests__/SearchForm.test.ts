import { describe, it, expect, vi, beforeEach } from 'vitest'
import SearchForm from '../SearchForm.vue'
import { useMoviesStore } from '../../store/movies'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import type { Router } from 'vue-router'

describe('SearchForm', () => {
  let router: Router

  beforeEach(() => {
    setActivePinia(createPinia())
    router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/',
          name: 'Home',
          component: { template: '<div></div>' }
        }
      ]
    })
  })

  it('should update store search term and search by when search button is clicked', async () => {
    const store = useMoviesStore()
    store.setSearchTerm = vi.fn()
    store.setSearchBy = vi.fn()

    await router.push({ name: 'Home', query: { search: '' } })
    await router.isReady()

    const wrapper = mount(SearchForm, {
      global: {
        plugins: [router]
      }
    })

    wrapper.findComponent({ name: 'SearchInput' }).vm.$emit('enter')
    wrapper.findComponent({ name: 'SearchButton' }).vm.$emit('search')

    expect(store.setSearchTerm).toHaveBeenCalledWith('')
    expect(store.setSearchBy).toHaveBeenCalledWith('Title')
  })

  it('should update store search by when option switcher value is updated', async () => {
    const store = useMoviesStore()
    store.setSearchBy = vi.fn()

    await router.push({ name: 'Home', query: { search: '' } })
    await router.isReady()

    const wrapper = mount(SearchForm, {
      global: {
        plugins: [router]
      }
    })

    wrapper.findComponent({ name: 'OptionSwitcher' }).vm.$emit('update:modelValue', 'Genre')

    expect(store.setSearchBy).toHaveBeenCalledWith('Genre')
  })

  it('should set the search term from the URL in the input', async () => {
    const searchTerm = 'test'

    await router.push({ name: 'Home', query: { search: searchTerm } })
    await router.isReady()

    const wrapper = mount(SearchForm, {
      global: {
        plugins: [router]
      }
    })

    const searchInput = wrapper.findComponent({ name: 'SearchInput' })
    expect(searchInput.props('modelValue')).toBe(searchTerm)
  })
})

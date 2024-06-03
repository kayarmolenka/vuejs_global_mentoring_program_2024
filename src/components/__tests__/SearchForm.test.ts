import { describe, it, expect, vi, beforeEach } from 'vitest'
import SearchForm from '../SearchForm.vue'
import { useMoviesStore } from '../../store/movies'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'

describe('SearchForm', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should update store search term and search by when search button is clicked', async () => {
    const store = useMoviesStore()
    store.setSearchTerm = vi.fn()
    store.setSearchBy = vi.fn()

    const wrapper = mount(SearchForm)

    wrapper.findComponent({ name: 'SearchInput' }).vm.$emit('enter')
    wrapper.findComponent({ name: 'SearchButton' }).vm.$emit('search')

    expect(store.setSearchTerm).toHaveBeenCalledWith('')
    expect(store.setSearchBy).toHaveBeenCalledWith('Title')
  })

  it('should update store search by when option switcher value is updated', async () => {
    const store = useMoviesStore()
    store.setSearchBy = vi.fn()

    const wrapper = mount(SearchForm)

    wrapper.findComponent({ name: 'OptionSwitcher' }).vm.$emit('update:modelValue', 'Genre')

    expect(store.setSearchBy).toHaveBeenCalledWith('Genre')
  })
})

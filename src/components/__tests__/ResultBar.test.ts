import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ResultBar from '../ResultBar.vue'

vi.mock('@/store/movies', () => ({
  useMoviesStore: () => ({
    sortBy: 'Release date',
    setSortBy: vi.fn()
  })
}))

describe('ResultBar', () => {
  it('should render passed props', () => {
    const wrapper = mount(ResultBar, { props: { countMoviesFound: 23 } })

    expect(wrapper.text()).toContain('23 movie found')
  })
})

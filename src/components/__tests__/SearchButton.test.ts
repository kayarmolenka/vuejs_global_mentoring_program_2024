import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchButton from '../SearchButton.vue'

describe('SearchButton', () => {
  it('should render button with provided title', () => {
    const wrapper = mount(SearchButton, {
      props: {
        title: 'Test Title'
      }
    })

    expect(wrapper.find('[data-testid="search-button"]').text()).toBe('Test Title')
  })

  it('should emit search event on button click', async () => {
    const wrapper = mount(SearchButton, {
      props: {
        title: 'Test Title'
      }
    })

    await wrapper.find('[data-testid="search-button"]').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('search')
  })
})

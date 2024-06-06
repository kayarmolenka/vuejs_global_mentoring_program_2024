import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TheFooter from '../TheFooter.vue'

describe('TheFooter', () => {
  it('should scroll to top when link is clicked', async () => {
    const scrollToMock = vi.fn()
    window.scrollTo = scrollToMock

    const wrapper = mount(TheFooter, {
      global: { stubs: { 'router-link': { template: '<a><slot /></a>' } } }
    })

    const link = wrapper.find('a')
    await link.trigger('click')

    expect(scrollToMock).toHaveBeenCalledWith(0, 0)
  })
})

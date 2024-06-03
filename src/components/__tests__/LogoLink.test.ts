import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LogoLink from '../LogoLink.vue'
import router from '../../router'

describe('LogoLink', () => {
  it('should navigate to the root route and scroll to top when link is clicked', async () => {
    const scrollToMock = vi.fn()
    window.scrollTo = scrollToMock

    const routerMock = createRouter({
      history: createWebHistory(),
      routes: router.getRoutes()
    })

    const wrapper = mount(LogoLink, {
      global: {
        plugins: [routerMock]
      }
    })

    await wrapper.find('a').trigger('click')

    expect(routerMock.currentRoute.value.path).toBe('/')

    expect(scrollToMock).toHaveBeenCalledWith(0, 0)
  })
})

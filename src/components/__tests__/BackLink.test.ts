import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import BackLink from '../BackLInk.vue'

describe('BackLink', () => {
  it('should go back', async () => {
    const mockRoute = {
      params: {
        id: 1
      }
    }
    const mockRouter = {
      push: vi.fn()
    }

    const wrapper = mount(BackLink, {
      global: {
        mocks: { $route: mockRoute, $router: mockRouter },
        stubs: {
          'router-link': {
            template: '<a @click="navigate"><slot /></a>',
            methods: {
              navigate() {
                this.$router.push(this.to)
              }
            },
            props: ['to']
          }
        }
      },
      props: { icon: '', destination: '/home' }
    })

    await wrapper.find('a').trigger('click')

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/home')
  })
})

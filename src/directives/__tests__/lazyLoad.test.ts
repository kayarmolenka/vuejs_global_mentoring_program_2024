import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { global_lazyLoad_directive } from '../lazyLoad'

describe('lazyLoad', () => {
  it('should not set src attribute when data-src is not set', async () => {
    const img = document.createElement('img')

    global.IntersectionObserver = class {
      constructor(callback: any) {
        setTimeout(() => {
          callback([{ isIntersecting: true, target: img }])
        }, 0)
      }
      observe() {}
      disconnect() {}
    } as any

    const wrapper = mount({
      template: '<img v-lazy-load />',
      directives: {
        'lazy-load': global_lazyLoad_directive
      }
    })

    await flushPromises()

    expect(img.src).toBe('')
    expect(wrapper.find('img').element.src).toBe('')
  })
})

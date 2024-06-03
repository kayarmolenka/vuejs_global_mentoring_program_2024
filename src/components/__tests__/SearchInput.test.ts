import { describe, it, expect } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import SearchInput from '../SearchInput.vue'

describe('SearchInput', () => {
  it('should render input with provided modelValue and placeholder', () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: 'Test Value',
        placeholder: 'Test Placeholder'
      }
    })

    const input: DOMWrapper<HTMLInputElement> = wrapper.find('[data-testid="search-input"]')
    expect(input.element.value).toBe('Test Value')
    expect(input.attributes('placeholder')).toBe('Test Placeholder')
  })

  it('should emit update:modelValue event on input', async () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: 'Test Value',
        placeholder: 'Test Placeholder'
      }
    })

    await wrapper.find('[data-testid="search-input"]').setValue('New Value')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['New Value'])
  })

  it('should emit enter event on keyup.enter', async () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: 'Test Value',
        placeholder: 'Test Placeholder'
      }
    })

    await wrapper.find('[data-testid="search-input"]').trigger('keyup.enter')

    expect(wrapper.emitted()).toHaveProperty('enter')
  })
})

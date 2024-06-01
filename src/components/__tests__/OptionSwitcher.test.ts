import { describe, it, expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import OptionSwitcher from '../OptionSwitcher.vue'
import type { ComponentPublicInstance } from 'vue'

type OptionSwitcherProps = {
  items: { name: string }[]
  modelValue: string
  'onUpdate:modelValue'?: (e: any) => void
}

type OptionSwitcherInstance = ComponentPublicInstance<OptionSwitcherProps>

describe('OptionSwitcher', () => {
  it('should render passed props such as Comedy/Drama', () => {
    const wrapper = mount(OptionSwitcher, {
      props: { items: [{ name: 'Comedy' }, { name: 'Drama' }], modelValue: 'Comedy' }
    })

    expect(wrapper.text()).toContain('Comedy')
    expect(wrapper.text()).toContain('Drama')
    expect(wrapper.vm.modelValue).toBe('Comedy')
  })

  it('should update selected value when an item is clicked', async () => {
    const wrapper: VueWrapper<OptionSwitcherInstance> = mount(OptionSwitcher, {
      props: {
        items: [{ name: 'Criminal' }, { name: 'Cartoon' }],
        modelValue: 'Cartoon',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })

    expect(wrapper.props('modelValue')).toBe('Cartoon')

    await wrapper.find('input[value="Criminal"]').setValue('Criminal')

    expect(wrapper.vm.modelValue).toBe('Criminal')
  })
})

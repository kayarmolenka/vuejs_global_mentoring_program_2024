import type { Meta, StoryObj } from '@storybook/vue3'
import OptionSwitcher from '@/components/OptionSwitcher.vue'

const meta = {
  title: 'Components/OptionSwitcher',
  component: OptionSwitcher,
  tags: ['autodocs']
} satisfies Meta<typeof OptionSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const SearchBy: Story = {
  args: {
    items: [{ name: 'Title' }, { name: 'Genre' }],
    modelView: 'Title'
  }
}

export const SortBy: Story = {
  args: {
    items: [{ name: 'Release date' }, { name: 'Rating' }],
    modelView: 'Release date'
  }
}

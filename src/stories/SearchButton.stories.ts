import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import SearchButton from '@/components/SearchButton.vue'

const meta = {
  title: 'Components/SearchButton',
  component: SearchButton,
  tags: ['autodocs']
} satisfies Meta<typeof SearchButton>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    title: 'Search',
    onClick: fn()
  }
}

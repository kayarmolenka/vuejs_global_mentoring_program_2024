import type { Meta, StoryObj } from '@storybook/vue3'
import SearchInput from '@/components/SearchInput.vue'

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
  tags: ['autodocs']
} satisfies Meta<typeof SearchInput>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    placeholder: 'Search'
  }
}

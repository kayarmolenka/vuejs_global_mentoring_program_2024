import type { Meta, StoryObj } from '@storybook/vue3'
import BackLink from '@/components/BackLInk.vue'

const meta = {
  title: 'Components/BackLink',
  component: BackLink,
  tags: ['autodocs']
} satisfies Meta<typeof BackLink>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    icon: '../assets/images/back.png'
  }
}

export const SearchBackLink: Story = {
  args: {
    icon: '../assets/images/search.png'
  }
}

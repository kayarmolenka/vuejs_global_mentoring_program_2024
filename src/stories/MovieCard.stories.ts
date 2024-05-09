import type { Meta, StoryObj } from '@storybook/vue3'
import MovieCard from '@/components/MovieCard.vue'

const meta = {
  title: 'Components/MovieCard',
  component: MovieCard,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        {
          name: 'black',
          value: '#000000'
        },
        {
          name: 'white',
          value: '#FFFFFF'
        }
      ]
    }
  }
} satisfies Meta<typeof MovieCard>

export default meta

type Story = StoryObj<typeof meta>

export const Card: Story = {
  args: {
    movie: {
      title: 'Pulp Fiction',
      releaseDate: 2004,
      genre: 'Action & Adventure',
      poster: '../assets/images/poster_1.png'
    }
  }
}

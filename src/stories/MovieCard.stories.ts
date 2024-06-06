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
      year: '1998',
      genres: ['Drama', 'War'],
      ratings: [
        9, 7, 9, 3, 1, 7, 7, 9, 8, 3, 8, 3, 3, 10, 4, 5, 8, 8, 10, 7, 5, 3, 2, 5, 6, 5, 9, 6, 10, 6
      ],
      poster: '../assets/images/poster_1.png',
      contentRating: '15',
      duration: 'PT169M',
      releaseDate: '1998-10-09',
      averageRating: 0,
      storyline:
        'Opening with the Allied invasion of Normandy on 6 June 1944, members of the 2nd Ranger Battalion under Cpt. Miller fight ashore to secure a beachhead. Amidst the fighting, two brothers are killed in action. Earlier in New Guinea, a third brother is KIA. Their mother, Mrs. Ryan, is to receive all three of the grave telegrams on the same day. The United States Army Chief of Staff, George C. Marshall, is given an opportunity to alleviate some of her grief when he learns of a fourth brother, Private James Ryan, and decides to send out 8 men (Cpt. Miller and select members from 2nd Rangers) to find him and bring him back home to his mother...                Written by\nJ.Zelman',
      actors: ['Tom Hanks', 'Matt Damon', 'Tom Sizemore'],
      imdbRating: 8.6,
      posterurl:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY377_SX250_AL_.jpg',
      id: 29,
      title: 'Saving Private Ryan'
    },
    lazy: false
  }
}

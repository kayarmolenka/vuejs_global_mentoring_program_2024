import type { Movie } from '@/components/MovieCard.vue'

export const sortByFunction = (a: Movie, b: Movie, sortBy: 'Release date' | 'Rating') => {
  if (sortBy === 'Rating') {
    return b.imdbRating - a.imdbRating
  } else {
    return b.releaseDate.localeCompare(a.releaseDate)
  }
}

<script setup lang="ts">
import { useMoviesStore } from '@/store/movies'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import type { Movie } from '@/components/MovieCard.vue'
import BackLInk from '@/components/BackLInk.vue'

const props = defineProps<{ id: string }>()
const store = useMoviesStore()
const movie = ref<Movie | null | undefined>(null)
const src = ref()
const { push } = useRouter()

watch(
  () => props.id,
  async (newId) => {
    await store.fetchMovies()
    movie.value = store.getMovieById(Number(newId))
    src.value = new URL(movie.value?.posterurl!, import.meta.url).href
  },
  { immediate: true }
)

const backClick = () => {
  push('/search')
}

console.log('movie', movie)
</script>

<template>
  <div v-if="movie" class="movie-card-details">
    <BackLInk @backClick="backClick" icon="../assets/images/search.png" />
    <div><img :src="src" alt="" /></div>
    <div>
      <div class="title">{{ movie.title }}</div>
      <div class="genre">{{ movie.genres.join(', ') }}</div>
      <div class="release-runtime-block">
        <div>{{ movie.releaseDate.slice(0, 4) }}</div>
        <div>{{ parseInt(movie.duration.replace(/\D/g, '')) }} min</div>
      </div>
      <div class="overview">{{ movie.storyline }}</div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped>
.movie-card-details {
  display: flex;
  padding: 40px 60px;
  gap: 20px;
  position: relative;
}
img {
  width: 255px;
  height: 312px;
}
.title {
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
}
.genre {
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 300;
  color: #ffffff;
  font-size: 14px;
  line-height: 17px;
  opacity: 0.8;
}
.overview {
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;
  opacity: 0.8;
  color: #ffffff;
}
.release-runtime-block {
  display: flex;
  gap: 20px;
  color: #f65261;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 300;
  padding: 10px 0;
}
.back-link {
  position: absolute;
  right: 44px;
  top: -20px;
}
</style>

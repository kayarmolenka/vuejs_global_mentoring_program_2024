<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue'
import { useMovies } from '@/composables/useMovies'
import { useMoviesStore } from '@/store/movies'

const { filteredMovies } = useMovies()
const store = useMoviesStore()
</script>

<template>
  <main v-if="!store.loading">
    <div v-if="filteredMovies?.length">
      <MovieCard v-for="movie in filteredMovies" :movie="movie" :key="movie.title" />
    </div>
    <div class="not_found" v-else>No films found</div>
  </main>
  <div v-else>Loading...</div>
</template>

<style scoped>
main > div {
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  justify-content: center;
  margin-top: 40px;
}

.not_found {
  color: #ffffff;
  font-family: 'Montserrat';
  font-size: 40px;
}
</style>

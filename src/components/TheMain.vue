<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue'
import { date as movies } from '../../mockData/data'
</script>

<template>
  <main>
    <MovieCard v-for="movie in movies" :movie="movie" :key="movie.title" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  justify-content: center;
  margin-top: 40px;
}
</style>

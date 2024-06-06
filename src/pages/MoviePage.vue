<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import TheMovieHeader from '@/components/TheMovieHeader.vue'
import TheGenredMovieList from '@/components/TheGenredMovieList.vue'
import ResultBar from '@/components/ResultBar.vue'
import { useMovies } from '@/composables/useMovies'

const { countByGenre } = useMovies()
</script>

<template>
  <TheMovieHeader />
  <ResultBar :count-movies-found="countByGenre" />
  <TheGenredMovieList />
  <TheFooter />
</template>

<style scoped></style>

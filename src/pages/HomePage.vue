<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import TheFilteredMovieList from '@/components/TheFilteredMovieList.vue'
import TheHomeHeader from '@/components/TheHomeHeader.vue'
import ResultBar from '@/components/ResultBar.vue'
import { useMovies } from '@/composables/useMovies'

const { countMoviesFound } = useMovies()
</script>

<template>
  <TheHomeHeader />
  <ResultBar :count-movies-found="countMoviesFound" />
  <TheFilteredMovieList />
  <TheFooter />
</template>

<style>
body {
  background: #232323;
}
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  max-width: none;
}
</style>

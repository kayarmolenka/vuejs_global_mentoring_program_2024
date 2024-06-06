<script setup lang="ts">
import LogoLink from '@/components/LogoLink.vue'
import MovieCardDetails from '@/components/MovieCardDetails.vue'
</script>

<template>
  <header data-testid="movie-header">
    <LogoLink />
    <MovieCardDetails />
  </header>
</template>

<style scoped>
header {
  height: 450px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('@/assets/images/poster_netflix.png') no-repeat;
  background-size: cover;
}
.logo {
  padding: 20px 0 0 60px;
}
</style>

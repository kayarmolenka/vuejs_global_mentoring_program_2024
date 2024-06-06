<script setup lang="ts">
import LogoLink from '@/components/LogoLink.vue'
import SearchForm from '@/components/SearchForm.vue'
</script>

<template>
  <header data-testid="home-header">
    <LogoLink />
    <SearchForm />
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

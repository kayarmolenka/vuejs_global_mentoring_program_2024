<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="logo">
    <router-link to="/" @click="scrollToTop"><strong>netflix</strong>roulette</router-link>
  </div>
</template>

<style scoped>
.logo {
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
}
a {
  text-decoration: none;
  color: #f65261;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
}
</style>

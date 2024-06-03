<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  icon: string
  destination: RouteLocationRaw
}>()

const imageUrl = new URL(props.icon, import.meta.url).href
</script>

<template>
  <router-link data-testid="back-link" class="back-link" :to="destination"
    ><img :src="imageUrl" alt=""
  /></router-link>
</template>

<style scoped>
button {
  background: none;
  border: none;
}
img {
  cursor: pointer;
}
img:hover {
  opacity: 0.8;
}
</style>

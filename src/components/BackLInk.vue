<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()

const imageUrl = new URL(props.icon, import.meta.url).href
</script>

<template>
  <div @click="$emit('backClick')"><img :src="imageUrl" alt="" /></div>
</template>

<style scoped>
img {
  cursor: pointer;
}
img:hover {
  opacity: 0.8;
}
</style>

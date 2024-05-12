<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  placeholder: string
}>()

const value = ref('')
</script>

<template>
  <input class="search" v-model="value" :placeholder="placeholder" />
</template>

<style scoped>
.search {
  font-family: 'Montserrat', serif;
  font-style: normal;
  background: rgba(50, 50, 50, 0.8);
  mix-blend-mode: normal;
  opacity: 0.7;
  border-radius: 4px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  height: 53px;
  min-width: 300px;
  padding: 0 20px;
  width: 63%;
}
</style>

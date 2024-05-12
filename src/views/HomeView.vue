<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import TheMain from '@/components/TheMain.vue'
import TheHeader from '@/components/TheHeader.vue'
import ResultBar from '@/components/ResultBar.vue'
</script>

<template>
  <TheHeader />
  <ResultBar />
  <TheMain />
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

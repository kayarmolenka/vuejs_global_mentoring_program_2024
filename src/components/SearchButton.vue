<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <button class="button" @click="$emit('search')">{{ title }}</button>
  </div>
</template>

<style scoped>
.button {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  background: #f65261;
  color: #ffffff;
  font-family: 'Montserrat', serif;
  font-style: normal;
  border-radius: 4px;
  padding: 14px 73px 14px 74px;
  cursor: pointer;
  margin-left: 14px;
  display: flex;
  justify-content: center;
  border: none;
}
</style>

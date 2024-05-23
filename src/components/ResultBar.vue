<script setup lang="ts">
import OptionSwitcher from '@/components/OptionSwitcher.vue'
import { useMoviesStore } from '@/store/movies'

const props = defineProps<{ countMoviesFound?: number }>()

const sortByItems = [{ name: 'Release date' }, { name: 'Rating' }]
const store = useMoviesStore()
</script>

<template>
  <div class="result-bar">
    <div class="movie-count">{{ props.countMoviesFound }} movie found</div>
    <div class="sort-by-wrapper">
      <span class="sort-by">Sort by</span
      ><OptionSwitcher
        :items="sortByItems"
        :modelValue="store.sortBy"
        @update:modelValue="store.setSortBy"
      />
    </div>
  </div>
</template>

<style scoped>
.result-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #555555;
  padding: 0 100px;
  height: 50px;
}
.sort-by-wrapper {
  display: flex;
  align-items: center;
}
.movie-count {
  color: #ffffff;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
}

.sort-by {
  color: #ffffff;
  font-family: 'Montserrat', serif;
  font-style: normal;
  text-transform: uppercase;
}
</style>

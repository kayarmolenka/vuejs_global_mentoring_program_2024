<script setup lang="ts">
import SearchInput from '@/components/SearchInput.vue'
import SearchButton from '@/components/SearchButton.vue'
import OptionSwitcher from '@/components/OptionSwitcher.vue'
import { ref } from 'vue'

const handleClick = () => {
  console.log(1)
}
const searchByItems = ref([{ name: 'Title' }, { name: 'Genre' }])
const searchByDefaultValue = ref('Genre')
</script>

<template>
  <div>
    <h1>Find your movie</h1>
    <div class="search">
      <SearchInput placeholder="Search" />
      <SearchButton title="Click me" :handle-click="handleClick" />
    </div>
    <div class="search-by-wrapper">
      <span class="search-by">Search by</span
      ><OptionSwitcher :items="searchByItems" :model-view="searchByDefaultValue" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  font-family: 'Montserrat', serif;
  font-style: normal;
  margin: 57px 0 38px 120px;
}
.search {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-by-wrapper {
  display: flex;
  align-items: center;
  margin-left: 120px;
  padding-top: 15px;
}
.search-by {
  color: #ffffff;
  font-family: 'Montserrat', serif;
  font-style: normal;
  text-transform: uppercase;
}
</style>

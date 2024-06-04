<script setup lang="ts">
import SearchInput from '@/components/SearchInput.vue'
import SearchButton from '@/components/SearchButton.vue'
import OptionSwitcher from '@/components/OptionSwitcher.vue'
import { useMoviesStore } from '@/store/movies'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const searchByItems = [{ name: 'Title' }, { name: 'Genre' }]
const store = useMoviesStore()
const tempSearchTerm = ref('')
const tempSearchBy = ref('Title')
const router = useRouter()
const route = useRoute()

const handleClick = () => {
  store.setSearchTerm(tempSearchTerm.value)
  store.setSearchBy(tempSearchBy.value)

  if (tempSearchTerm.value) {
    router.push({ name: 'Home', query: { search: tempSearchTerm.value } })
  } else {
    router.push({ name: 'Home' })
  }
}

watch(
  () => route.query,
  (newQuery) => {
    if (typeof newQuery.search === 'string') {
      tempSearchTerm.value = newQuery.search
      store.setSearchTerm(newQuery.search)
    }
  },
  { immediate: true }
)
</script>

<template>
  <div>
    <h1>Find your movie</h1>
    <div class="search">
      <SearchInput
        @enter="handleClick"
        :value="tempSearchTerm"
        v-model="tempSearchTerm"
        placeholder="Search"
      />
      <SearchButton title="Click me" @search="handleClick" />
    </div>
    <div class="search-by-wrapper">
      <span class="search-by">Search by</span
      ><OptionSwitcher
        :items="searchByItems"
        v-model="tempSearchBy"
        @update:modelValue="store.setSearchBy"
      />
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

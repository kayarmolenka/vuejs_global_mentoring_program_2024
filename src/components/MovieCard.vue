<script setup lang="ts">
export interface Movie {
  title: string
  poster: string
  genre: string
  releaseDate: number
}

const props = defineProps<{
  movie: Movie
}>()

const { title, poster, genre, releaseDate } = props.movie
const imageUrl = new URL(poster, import.meta.url).href
</script>

<template>
  <div class="movie-card-wrapper">
    <div>
      <img class="movie-card-image" :src="imageUrl" alt="" />
    </div>
    <div class="movie-card-info">
      <div>
        <h2 class="movie-card-name">{{ title }}</h2>
        <h3 class="movie-card-genre">{{ genre }}</h3>
      </div>

      <div>
        <div class="movie-card-year">{{ releaseDate }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-card-wrapper {
  max-width: 323px;
}
.movie-card-image {
  width: 323px;
  height: 486px;
}
.movie-card-info {
  display: flex;
  align-items: start;
  justify-content: space-between;
}
.movie-card-name {
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  opacity: 0.7;
}
.movie-card-genre {
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  opacity: 0.7;
  margin-top: 8px;
}
.movie-card-year {
  font-family: 'Montserrat', serif;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  border: 1px solid #979797;
  border-radius: 4px;
  opacity: 0.7;
  padding: 4px 8px 5px 8px;
  margin-top: 10px;
}
</style>

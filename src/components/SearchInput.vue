<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  placeholder: String
})

const emit = defineEmits(['update:modelValue', 'enter'])

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleEnter = () => {
  emit('enter')
}
</script>

<template>
  <input
    data-testid="search-input"
    class="search"
    @keyup.enter="handleEnter"
    :value="props.modelValue"
    @input="updateValue"
    :placeholder="placeholder"
  />
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

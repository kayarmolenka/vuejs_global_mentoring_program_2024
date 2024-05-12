<script setup lang="ts">
import { ref, computed } from 'vue'

type TItem = {
  name: string
}

const props = defineProps<{
  items: TItem[]
  modelView: string
}>()

const internalValue = ref(props.modelView)

const selected = computed({
  get: () => internalValue.value,
  set: (newValue) => {
    internalValue.value = newValue
  }
})
</script>

<template>
  <ul class="switcher-list">
    <li
      v-for="(item, index) in items"
      :key="item.name"
      :class="[
        'switcher-name',
        { selected: selected === item.name },
        { 'left-rounded': index === 0 },
        { 'right-rounded': index === items.length - 1 }
      ]"
    >
      <label :for="item.name">{{ item.name }}</label>
      <input
        type="radio"
        :value="item.name"
        v-model="selected"
        class="hidden-radio"
        :id="item.name"
      />
    </li>
  </ul>
</template>

<style scoped>
.switcher-list {
  list-style: none;
  display: flex;
}
.switcher-name {
  color: #ffffff;
  font-family: 'Montserrat', serif;
  font-style: normal;
  background: #424242;
  cursor: pointer;
}
.selected {
  background: #f65261;
  color: #ffffff;
}
.hidden-radio {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

li {
  border: 1px solid #555555;
  padding: 4px 10px;
  cursor: pointer;
}
label {
  cursor: pointer;
  text-transform: uppercase;
}
.left-rounded {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.right-rounded {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>

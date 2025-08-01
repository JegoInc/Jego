<template>
  <div class="columns-container" :class="containerClass">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  gap: {
    type: String,
    default: '6'
  },
  align: {
    type: String,
    default: 'start'
  }
})

const containerClass = computed(() => {
  return `grid grid-cols-1 md:grid-cols-12 gap-${props.gap} items-${props.align}`
})
</script>

<style scoped>
.columns-container {
  margin: 2rem 0;
}
</style> 
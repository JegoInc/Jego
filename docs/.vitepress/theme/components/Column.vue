<template>
  <div class="column" :class="columnClass">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: '6'
  },
  offset: {
    type: String,
    default: '0'
  }
})

const columnClass = computed(() => {
  const widthClass = `md:col-span-${props.width}`
  const offsetClass = props.offset !== '0' ? `md:col-start-${props.offset}` : ''
  return `${widthClass} ${offsetClass}`.trim()
})
</script>

<style scoped>
.column {
  min-width: 0;
}
</style> 
<template>
  <div id="app">
    Application Vue
    <div>来自React Application A的数据共享</div>
    <div>{{ different }}</div>
  </div>
</template>
  
<script setup>
import { computed, defineProps } from '@vue/runtime-core'
const props = defineProps({
  shared: { type: Object, default: {} }
})
const { shared } = props;
const different = computed(() => {
  return shared.getShared('react-app-a')?.different
})

</script>

  
  
<template>
  <div id="app">
    Application Vue
    <div>来自React Application A的数据共享</div>
    <div></div>
  </div>
</template>
  
<script>
import { onMounted } from '@vue/runtime-core'
export default {
  name: 'App',
  components: {},
  props: {
    basePath: {
      type: String,
      default: '/',
    },
    shared: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {  
    const { shared } = props
    console.log('shared.getShared()', shared.getShared()?.['react-app-a'])
    const { different } = shared.getShared()?.['react-app-a']
    onMounted(() => {

    })

    return {}
  },
}
</script>

  
  
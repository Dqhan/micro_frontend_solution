<template>
    <div id="app">
      <div id="nav">
        <RouterLink to="/"></RouterLink>
      </div>
      <RouterView :sharedData="sharedData" />
    </div>
  </template>
  
  <script>
  import { onMounted, watch } from '@vue/runtime-core'
  import { useRouter, useRoute } from 'vue-router'
  export default {
    name: 'App',
    components: {},
    props: {
      onNavigate: {
        type: Function,
      },
      basePath: {
        type: String,
        default: '/',
      },
      currentPath: {
        type: String,
        default: '/',
      },
      isMemoryHistory: {
        type: Boolean,
        default: false,
      },
      sharedData: {
        type: Object,
        default: () => ({}),
      },
    },
    setup(props) {
      const { basePath, currentPath, isMemoryHistory, onNavigate } = props
      const router = useRouter()
      const route = useRoute()
  
      function onRouteChange(newPath) {
        onNavigate && onNavigate(basePath + newPath)
      }
  
      watch(() => route.path, onRouteChange)
  
      onMounted(() => {
        let nextPath = currentPath
        if (currentPath.startsWith(basePath)) {
          nextPath = currentPath.replace(basePath, '') ?? '/'
        }
        isMemoryHistory && router.push(nextPath)
      })
  
      return {}
    },
  }
  </script>
  
  
<template>
  <div>
    <!-- 显示 Splash 页面 -->
    <Splash v-if="showSplash" />

    <!-- 显示主页面 -->
    <Home v-else />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Splash from './pages/Splash.vue'
import Home from './pages/Home.vue' // 主页面组件

// 控制是否显示 Splash
const showSplash = ref(true)

onMounted(() => {
  // 3 秒后切换到 Home 页面
  setTimeout(() => {
    showSplash.value = false
  }, 10000)
})
</script>

<style scoped>
/* 这里可以写全局样式或容器样式 */
</style>
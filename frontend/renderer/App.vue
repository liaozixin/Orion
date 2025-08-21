<template>
    <TitleBar />
    <div class="app-container">
        <Splash v-if="showSplash" />
        <Home v-else />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Splash from './pages/Splash.vue'
import Home from './pages/Home.vue' // 主页面组件
import TitleBar from './components/TitleBar.vue'

// 控制是否显示 Splash
const showSplash = ref(true)

onMounted(() => {
  // 3 秒后切换到 Home 页面
  setTimeout(() => {
    showSplash.value = true
  }, 10000)
})
</script>

<style>
.app-container {
  padding-top: 30px; /* 给内容腾出空间，否则会被TitleBar遮挡 */
}
</style>
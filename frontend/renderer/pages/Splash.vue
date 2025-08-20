<template>
    <div class="splash-container">
        <img src="@/assets/logo.svg" alt="Logo" class="logo" />
    </div>
</template>

<script setup>
// 暂时不用 JS
</script>

<style scoped>
    .splash-container {
        width: 100vw;       /* 占满全屏宽 */
        height: 100vh;      /* 占满全屏高 */
        display: flex;      /* 启用 Flex 布局 */
        justify-content: center; /* 水平居中 */
        align-items: center;     /* 垂直居中 */
    }

    .logo {
        width: 200px;   /* 控制 logo 大小 */
        height: 200px;
    }
</style>


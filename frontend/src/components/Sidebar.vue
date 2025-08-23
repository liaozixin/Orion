<template>
    <div div :class="['sidebar', { collapsed: !isActive }]">
        <div class="navigation"></div>
        <div class="collapse-toggle">
            <button class="toggle" :class="{ active: isActive }" @click="toggle">
                <img src="@/assets/images/expand.svg" alt="Collapse" />
            </button>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px; /* 展开宽度 */
    background-color: rgb(182, 122, 238);
    transition: width 0.3s ease;
    overflow: hidden; /* 收缩时隐藏内容 */
    }

/* 收缩状态 */
.sidebar.collapsed {
    width: 50px; /* 收缩宽度，只显示 toggle 按钮 */
}

.navigation {
    display: flex;
    flex: 1;               /* 占满剩余空间 */
    overflow-y: auto;      /* 内容过多时滚动 */
    background: rgba(0, 0, 0, 0.1);
}

.collapse-toggle {
    display: flex;
    height: 40px;
    background: rgba(255, 0, 0, 0.2);
    align-items: center;
}

.toggle {
    height: 100%;
    width: 50px;
    display: flex;   
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
}
.toggle:hover {
    background-color: rgba(0, 0, 0, 0.05); /* 淡灰色 */
}

.toggle img {
    height: 70%;
    transition: transform 0.3s ease;
}

/* active 状态旋转 180° */
.toggle.active img {
  transform: rotate(180deg);
}
</style>

<script setup>
import { ref } from 'vue'

const isActive = ref(true)
function toggle() {
    isActive.value = !isActive.value
    console.log(isActive.value)
}
</script>
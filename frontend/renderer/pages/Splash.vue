<template>
    <div class="splash-container">
        <div class="welcome-text">欢迎使用Orion!🌕</div>
        <img src="@/assets/logo.svg" alt="Logo" class="logo" />
    </div>
</template>

<style scoped>
    .splash-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;

        /* 上下布局空间分配 */
        justify-content: flex-start; 
        padding-top: 70px; /* welcome-text 顶部偏下 */
    }

    .welcome-text {
        font-size: 37px;
        margin-bottom: 30px;
    }

    .logo {
        width: 200px;
        height: 200px;
        
        /* 将图片推到剩余空间的垂直居中 */
        margin-top: auto; 
        margin-bottom: auto;
    }
</style>

<template>
    <div id="titlebar">
            <div class="function-region"> 
                <button >
                    <img src="@/assets/message.svg" alt="Message" />
                </button>
                <button >
                    <img src="@/assets/home.svg" alt="Home" />
                </button>
                <button >
                    <img src="@/assets/settings.svg" alt="Settings" />
                </button>
                <button >
                    <img src="@/assets/help.svg" alt="Help" />
                </button>

                <div class="vertical-line"></div>
                <img class="fengche" src="@/assets/fengche.svg" alt="Fengche" />
                <span class="ip">127.0.0.1</span>
            </div>
            
            <div class="drag-region">
                <span class="title">Orion</span>
            </div>

            <div class="status-region">
                <button @click="minimize">
                    <img src="@/assets/minimize.svg" alt="Minimize" />
                </button>
                <button @click="toggleMaximize">
                    <img src="@/assets/maxmize.svg" alt="Maxmize" />
                </button>
                <button @click="close">
                    <img src="@/assets/close.svg" alt="Maxmize" />
                </button>
            </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isMaximized = ref(false);

const minimize = () => {
    window.electronAPI.minimize();
};

const toggleMaximize = () => {
    window.electronAPI.toggleMaximize();
};

const close = () => {
    window.electronAPI.close();
};

// 监听窗口状态变化
onMounted(() => {
    window.electronAPI.onMaximizeStatus((status) => {
        isMaximized.value = status;
    });
});

</script>

<style>

#titlebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;         /* 占满整个窗口宽度 */
    height: 40px;        /* 高度可调整 */
    background: #efefef;    /* 自定义背景 */
    display: flex;
    align-items: center;
    justify-content: space-between;
    -webkit-app-region: drag; /* 拖动区域 */
    z-index: 9999;       /* 保证在最上层 */
    padding-left: 0;
}

.drag-region {
    position: absolute;
    top: 0;
    left: 50%;                   /* 左边界到父容器 50% */
    transform: translateX(-50%); /* 向左移动自身宽度的一半，实现水平居中 */
    height: 100%;
    display: flex;
    align-items: center;          /* 垂直居中标题文字 */
    -webkit-app-region: drag;
    pointer-events: none;         /* 避免挡住按钮点击 */
}

.drag-region .title {
    pointer-events: auto;         /* 文字可选中（可选） */
}

.function-region {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.function-region button {
    -webkit-app-region: no-drag; /* 按钮不能拖动 */
    border: none;
    width: 45px;   /* 控制按钮大小 */
    height: 100%;
    cursor: pointer;
    transition: all 0.25s ease;
    display: flex; 
    align-items: center;        /* 垂直居中 */
    justify-content: center;    /* 水平居中 */
    background: transparent;
}

.function-region button:hover {
    background-color: rgb(209, 209, 209);
}

.function-region button img {
    width: 20px;   /* 你可以调成 14px/18px */
    height: 20px;
    object-fit: contain; /* 保持比例缩放 */
}

.vertical-line {
    width: 1px;               /* 线宽 */
    height: 60%;            /* 高度 */
    background-color: #858484;   /* 颜色 */
    display: inline-block;    /* 可与其他元素同排 */
    margin-left: 3px;
}

.fengche {
    margin-left: 10px;
    width: 20px;   /* 你可以调成 14px/18px */
    height: 20px;
    object-fit: contain; /* 保持比例缩放 */
    animation: rotate 2s linear infinite; /* 持续旋转 */
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.ip {
    margin-left: 10px;
    font-size: 15px;
}

.status-region {
    display: flex;
    margin-right: 10px;
    flex-direction: row;      /* 确保是水平排列 */
    align-items: center;      /* 按钮垂直居中 */
    gap: 4px; 
}

.status-region button {
    -webkit-app-region: no-drag; /* 按钮不能拖动 */
    border: none;
    width: 25px;   /* 控制按钮大小 */
    height: 25px;
    margin-left: 4px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.25s ease;
    display: flex; 
    align-items: center;        /* 垂直居中 */
    justify-content: center;    /* 水平居中 */
    background: transparent;
}

.status-region button:hover {
    background-color: rgb(209, 209, 209);
}

.status-region button img {
    width: 16px;   /* 你可以调成 14px/18px */
    height: 16px;
    object-fit: contain; /* 保持比例缩放 */
}

</style>
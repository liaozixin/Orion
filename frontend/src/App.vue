<template>
    <Header />
    <div class="main-layout">
        <Sidebar />
    </div>

</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

export default {
    components: { Header, Sidebar }
}
</script>

<style>
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}
#app {
    display: flex;
    flex-direction: column; /* 垂直排列 Header + main-layout */
    height: 100vh;
}

.main-layout {
    display: flex;   
    flex: 1;         
}

</style>
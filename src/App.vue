<template>
    <router-view></router-view>
</template>

<script>
    import Home from './pages/Home.vue';
    
    export default {
        components: {
            Home
        }
    }
</script>

<style lang="scss">
    @import "styles/vars";
    @import "styles/fonts";

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: $font-default;
    }
</style>
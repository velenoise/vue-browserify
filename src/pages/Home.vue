<template>
    <div class="wrapper">
        <site-header :about="false"></site-header>
        <section class="content">
            Home page
            <br>
            <img src="/dist/img/placeholder.jpg" alt="">
        </section>
    </div>   
</template>

<script>
    import SiteHeader from '../components/Header.vue';
    
    export default {
        data () {
            return {
                
            }
        },

        components: {
            SiteHeader
        }
    }
</script>

<style lang="scss">
    .wrapper {
        position: relative;
        width: 70vw;
        height: 100vh;
        min-width: 320px;
        max-width: 900px;
        margin: 0 auto;
        padding-top: 10px;
        box-sizing: border-box;
    }
</style>
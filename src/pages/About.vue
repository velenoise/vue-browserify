<template>
    <div class="wrapper">
        <site-header :about="true"></site-header>
        <section class="about">
            About page
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
    .about {
        background: url('/dist/img/placeholder.jpg') top left no-repeat;
    }
</style>
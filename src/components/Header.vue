<template>
    <header>
        <h1 class="title">Simple app</h1>
        <nav class="main-menu">
            <ul class="menu">
                <li class="menu-item"><a :class="[ about ? '' : 'active' ]" class="link" href="#/">Home</a></li>
                <li class="menu-item"><a :class="[ about ? 'active' : '' ]" class="link" href="#/about">About</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },

        props: [
            'about'
        ]
    }
</script>

<style lang="scss">
    header {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 0 0 30px;
        align-items: flex-end;
    }

    .title {
        position: relative;
        display: inline-block;
        flex: none;
        font-size: 24px;
    }

    .main-menu {
        position: relative;
        display: inline-block;
        flex: none;
    }

    .menu {
        position: relative;
        list-style: none;
        display: inline-block;
    }

    .menu-item {
        display: inline-block;
        padding: 0 10px;

        &:first-child {
            border-right: 1px solid #000;
        }
        
        .link {
            color: #000;
            text-decoration: none;

            &:hover,
            &.active {
                border-bottom: 1px solid #222;
            }
        }
    }
</style>
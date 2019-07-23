<template>
    <div class="index_wrap">
        <div class="home_content">
            <router-view></router-view>
        </div>
        <base-footer></base-footer>
        <!-- <base-content></base-content> -->

    </div>

</template>
<script>

    // import BaseHeader from './components/baseHeader'
    import BaseFooter from './components/baseFooter.vue'
    import BaseContent from './components/baseContent'

    export default {
        name: "indexWrap",
        components: {BaseFooter,BaseContent}
        // components: {BaseHeader, BaseFooter, BaseContent}
    }
</script>
<style scoped type="text/less" lang="less">
    .home_content {
        width: 100%;
        min-heigth: 500px;
        margin: 0 auto;
    }


</style>
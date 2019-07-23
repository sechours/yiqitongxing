<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {}
        },
        created() {
            // if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            //     //移动端
            //     window.location.href='http://demos.m.haoshebao.com/'
            // } else {
            //     //pc 端
            //     window.location.href='http://demos.haoshebao.com/'
            // }
        }
    }
</script>

<style type="text/less" lang="less">
    @import "./assets/init.css";
    @import "./assets/index.css";
    // @import "./assets/haoshebao_icons/iconfont.css"; 
   
</style>
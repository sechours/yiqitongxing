<template>
    <div id="not_find">

        <div class="not_page_wrap">
            <img src="../../assets/images/404@2x.png" alt="">
        </div>

        <p class="not_page_p">
            抱歉，您访问的页面地址有误或此页面不存在。<span>{{s}}</span>
            秒后自动为您跳转至首页
        </p>

    </div>


</template>

<script>
    export default {
        name: "NotFind-404",
        data() {
            return {
                s: 3
            }
        },
        mounted() {
            let _this = this;
            let setInId = setInterval(() => {
                _this.s--;
                if (_this.s < 1) {
                    clearInterval(setInId);
                    _this.$router.push({
                        path: '/index'
                    })
                }
            }, 1000)

        }
    }
</script>

<style scoped type="text/less" lang="less">
    #not_find {
        width: 100%;
        height: 100%;
        padding-top: 150px;
        box-sizing: border-box;
        .not_page_wrap {
            width: 134px;
            height: 134px;
            margin: 0 auto;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        .not_page_p {

            font-family: PingFangSC-Regular;
            width: 190px;
            font-size: 14px;
            color: #333333;
            letter-spacing: 0;
            text-align: center;
            line-height: 22px;
            padding: 0;
            margin: 30px auto 0;
            font-weight: 300;
            span {
                font-size: 16px;
                color: red;
                font-weight: 600;
            }

        }

    }

</style>



// WEBPACK FOOTER //
// src/views/components/base404.vue
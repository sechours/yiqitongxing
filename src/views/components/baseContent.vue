<template>
    <div class="baseContent">

        <div class="erweima_modal" v-if="modal" @click.prevent.stop="colseIt"></div>

        <div class="erweima_modal_content" v-if="modal">
            <div class="erweima_modal_del" @click.prevent.stop="colseIt"></div>
            <div class="erweima_wrap">
                <img src="../../assets/images/erweima.png" alt="">

            </div>
            <p>微信扫一扫 轻松缴社保</p>
            <p>联系电话：4006-351-451</p>


        </div>


        <!--fix在线联系-->
        <ul class="fix_conents">
            <li>
                <a href="javascript:;" @click="zixun">
                    <i class="icon iconfont icon-duihuazixun"></i>
                </a>
            </li>
            <li>
                <a href="javascript:;" @click="doIt">
                    <i class="icon iconfont icon-erweima"></i>
                </a>

            </li>


            <BackTop :bottom="151" :right="50">
                <li class="back_top">
                    <a href="javascript:;">
                        <i class="icon iconfont icon-fanhuidingbu4"></i>
                    </a>
                </li>
            </BackTop>

        </ul>


        <!--联系我们-->

        <div class="iframe_wrap" :class="{'iframe_active':iframe}">
        <span class="iframe_wrap_del" @click="iframeClose">
        <Icon type="ios-close-circle-outline"/>
        </span>

            <iframe
                :src="src"
                width="320"
                height="480"
                frameborder="0"></iframe>

        </div>
    </div>

</template>

<script>

    export default {
        name: "baseContent",
        data() {
            return {

            }
        },
        computed: {
            modal() {
                return this.$store.state.modal
            },
            iframe() {
                return this.$store.state.iframe
            },
            src () {
                return this.$store.state.src
            }
        },
        methods: {
            colseIt() {
                this.$store.commit("modalFun", "hide");
            },
            doIt() {
                this.$store.commit("modalFun", "show");
            },
            zixun() {
                this.$store.commit("iframeFun", "show");
            },
            iframeClose() {
                this.$store.commit("iframeFun", "hide");
            },
            showIframe(){
                const that = this
                window.setTimeout(
                    function(){
                        that.zixun()
                    }
                    , 5000);
            }

        },
        mounted:function () {
            const that = this
            that.showIframe()
        }
    }
</script>

<style scoped type="text/less" lang="less">
    .baseContent {
        .iframe_wrap {
            position: fixed;
            right: 60px;
            bottom: -1000px;
            width: 320px;
            height: 480px;
            transition: all .3s;
            background: #ffffff;
            box-shadow: 2px 3px 24px 0px rgba(96, 96, 96, 0.11);
            z-index: 666;
            .iframe_wrap_del {
                display: block;
                width: 50px;
                height: 50px;
                position: absolute;
                background: transparent;
                right: -22px;
                top: -28px;
                font-size: 30px;
                color: #fff;
                text-align: center;
                line-height: 50px;
                border-radius: 50%;
                cursor: pointer;
                i {
                    background: rgb(48, 122, 232);
                    border-radius: 50%;
                    color: #ffffff;
                    font-weight: 600;
                }

            }
        }

        .iframe_active {
            bottom: 10px;
        }

        .fix_conents {
            position: fixed;
            bottom: 200px;
            right: 50px;
            li {
                width: 46px;
                height: 46px;
                border-top: 1px solid transparent;
                a {
                    display: block;
                    width: 46px;
                    height: 46px;
                    background: #fa6f7b;
                    text-align: center;
                    line-height: 45px;
                    color: #fff;
                    border-radius: 3px;
                    i {
                        font-size: 30px;
                        font-weight: 500;
                    }

                }
                &:nth-child(1) {
                    border: none;
                }
                &:nth-child(1) a {
                    /*background: url("../../assets/images/speck@2x.png") no-repeat center;*/
                    /*-webkit-background-size: 100% 100%;*/
                    /*background-size: 100% 100%;*/
                    text-align: center;
                    line-height: 46px;
                    font-size: 30px;
                    color: #fff;
                }
                &:nth-child(2) a {
                    /*background: url("../../assets/images/erweima_speak@2x.png") no-repeat center;*/
                    /*-webkit-background-size: 100% 100%;*/
                    /*background-size: 100% 100%;*/

                }

            }

            .back_top a {
                /*background: url("../../assets/images/back@2x.png") no-repeat center !important;*/
                /*-webkit-background-size: 100% 100% !important;*/
                /*background-size: 100% 100% !important;*/
                display: block;
                width: 46px;
                height: 46px;
                background: #fa6f7b;
                text-align: center;
                line-height: 45px;
                color: #fff;
                border-radius: 3px;
                i {
                    font-size: 30px;
                    font-weight: 500;
                    position: relative;
                    left: -5px;
                }

            }
        }

        .erweima_modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .3);
            z-index: 1000;

        }

        .erweima_modal_content {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 400px;
            height: 260px;
            border-radius: 5px;
            z-index: 1001;
            // background: url("../../assets/images/modal_bg.png") no-repeat center top;
            .erweima_modal_del {
                position: absolute;
                cursor: pointer;
                right: 20px;
                top: 20px;
                width: 14px;
                height: 14px;
                // background: url("../../assets/images/modal_del.png") no-repeat center top;
                -webkit-background-size: 14px 14px;
                background-size: 14px 14px;
            }

            .erweima_wrap {
                width: 150px;
                height: 150px;
                margin: 40px auto 10px;
                transition: all 0.3s;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            p {
                width: 100%;
                height: 22px;
                line-height: 22px;
                text-align: center;
                font-size: 14px;
                color: #fff;
            }
        }

    }


</style>



// WEBPACK FOOTER //
// src/views/components/baseContent.vue
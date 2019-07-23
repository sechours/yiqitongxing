<template>
    <div>
        <div id="header2">
            <div class="header_content">
                <div class="header_content_logo" style="cursor:pointer;">
                    <img @click="backHeader" src="../../assets/images/logo.png" alt="好社保">
                </div>
                <div class="header_content_phone">
                    <div class="phone_img">
                        4006-351-451
                    </div>
                </div>
            </div>


        </div>
        <div class="header-top"></div>
    </div>

</template>

<script>

    export default {
        name: "baseHeader2",

        data() {
            return {}
        },
        methods: {
            backHeader (){
                this.$router.push({path:'/'})
            }
        }

    }
</script>

<style scoped type="text/less" lang="less">
    #header2 {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background: #ffffff;
        box-shadow: 2px 3px 24px 0px rgba(96, 96, 96, 0.11);
        z-index:100;
        .header_content {
            width: 1000px;
            margin: 0 auto;
            background: #ffffff;
            .header_content_logo {
                width: 200px;
                float: left;
                height: 70px;
                img {
                    display: block;
                    width: 111px;
                    height: 30px;
                    margin-top: 20px;
                }

            }
            .header_content_nav_lists {
                width: 500px;
                float: right;
                text-align: right;
                height: 70px;
                line-height: 70px;
                a {

                    position: relative;
                    min-width: 50px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 16px;
                    letter-spacing: 0px;
                    color: #333333;
                    margin: 0 15px 0 15px;
                    display: inline-block;
                    text-decoration: none;
                    text-align: center;
                    &:after {
                        content: "";
                        background: transparent;
                        height: 2px;
                        margin: 5px auto 0;
                        display: block;
                        width: 0;
                        transition: all .3s;
                        border-radius: 1px;

                    }

                    &:hover {
                        color: #f73143;
                    }

                    &:hover:after {
                        background: #f73143;
                        width: 40px;
                    }

                }

                a:link {
                    text-decoration: none;
                }
                /* 未访问的链接 */
                a:visited {
                    text-decoration: none;
                }
                /* 已访问的链接 */
                a:hover {
                    text-decoration: none;
                }
                /* 当有鼠标悬停在链接上 */
                a:active {
                    text-decoration: none;
                }
                /* 被选择的链接 */

                .router-link-active {
                    color: #f73143;
                    &:after {
                        content: "";
                        background: #f73143;
                        width: 40px;
                        height: 2px;
                        margin: 5px auto 0;
                        display: block;
                        transition: all 0.3s;
                        border-radius: 1px;

                    }
                }

            }
            .header_content_phone {

                float: right;
                width: 160px;
                height: 70px;
                margin-left: 20px;
                .phone_img {
                    position: relative;
                    width: 159px;
                    height: 25px;
                    background: url("../../assets/images/phone@2x.png") no-repeat center;
                    -webkit-background-size: 100% 100%;
                    background-size: 100% 100%;
                    margin-top: 20px;
                    font-family: ArialMT,"PingFangSC", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
                    font-size: 16px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 25px;
                    letter-spacing: 1px;
                    color: #f73143;
                    text-align: center;
                    text-indent: 24px;
                }
                &:hover {
                    transform: scale(1.05, 1.05);
                    transition: all 0.3s;
                }
            }

        }

    }

    .header-top {
        width: 100%;
        height: 70px;
    }

</style>



// WEBPACK FOOTER //
// src/views/components/baseHeader2.vue
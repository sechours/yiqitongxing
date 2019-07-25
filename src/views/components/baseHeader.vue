<template>
    <div>
        <div id="header">
            <div class="header_content">
                <div class="header_content_logo" style="cursor:pointer;" @click="goHeader">
                    <img  src="../../assets/images/logo.png" alt="苏易保">
                    <span class="suyibao">苏易保</span>
                </div>
                <div class="header_content_phone">
                    <div class="phone_img">
                        18550824801
                    </div>
                </div>
                <div class="header_content_nav_lists">
                    <router-link to="/index" tag="a">首页</router-link>
                    <router-link to="/counter" tag="a">五险一金计算器</router-link>
                    <router-link to="/about" tag="a">关于我们</router-link>
                    <router-link to="/question" tag="a">常见问题</router-link>
                </div>
            </div>
        </div>
        <div class="header-top"></div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie'
    export default {
        name: "baseHeader",
        data() {
            return {}
        },
        methods: {
            goHeader (){
                this.$router.push({path:'/index'})
            }
        }
    }
</script>

<style scoped type="text/less" lang="less">
    #header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
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
                height: 100px;
                display: flex;
                img {
                    display: block;
                    width: 100px;
                    // height: 30px;
                    // margin-top: 20px;
                }
                .suyibao{
                    display: block;
                    line-height: 100px;
                    text-align: center;
                    font-size: bold;
                    font-size: 25px;
                }


            }
            .header_content_nav_lists {
                width: 500px;
                float: right;
                text-align: right;
                height: 100px;
                line-height: 100px;
                a {

                    position: relative;
                    min-width: 50px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 18px;
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
                height: 100px;
                margin-left: 20px;
                .phone_img {
                    position: relative;
                    width: 159px;
                    height: 25px;
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAAAqCAYAAAAqCDcJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkEyREVERjI5QTg2MTFFODg0QjdCRkI4M0Y0Nzg4MjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkEyREVERjM5QTg2MTFFODg0QjdCRkI4M0Y0Nzg4MjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQTJERURGMDlBODYxMUU4ODRCN0JGQjgzRjQ3ODgyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQTJERURGMTlBODYxMUU4ODRCN0JGQjgzRjQ3ODgyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph3R2rcAAAc6SURBVHja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) no-repeat 50%;
                    -webkit-background-size: 100% 100%;
                    background-size: 100% 100%;
                    margin-top: 36px;
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
        height: 100px;
    }

</style>



// WEBPACK FOOTER //
// src/views/components/baseHeader.vue
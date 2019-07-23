<template>
    <div id="base_footer">
        <div class="base_footer_content container">
            <div class="base_footer_content_top">
                <div class="base_footer_content_top_left">
                    <div class="logo_255">
                        <img src="../../assets/images/logo_255@2x.png" alt="苏易保">
                    </div>
                    <div class="footer_phone">
                        <span class="footer_phone1">18550824801</span>
                        <span class="footer_phone2">010-57431047</span>
                    </div>
                    <p> hancr0407@163.com &nbsp;&nbsp; 周一至周五：9:00— 18:00</p>
                </div>
                <div class="base_footer_content_top_right">
                    <div class="footer_erweima footer_erweima1">
                        <img src="../../assets/images/erweima.jpg" alt="">
                        <span>关注苏易保 公众号</span>
                    </div>
                    <div class="footer_erweima footer_erweima2" >
                        <img style="border:5px solid #fff;box-sizing: border-box;" src="../../assets/images/xiaochengxu.jpg" alt="">
                        <span style="width: 80px;">扫描二维码</span>
                        <span style="width: 100px;position: relative;left: -10px;">又快又准缴社保</span>
                    </div>
                </div>
            </div>
            <div class="base_footer_content_bottom">
                <h4>友情链接：</h4>
                <div class="alists">
                    <!--<a href="http://www.baidu.com">51社保</a>-->
                    <!--<a href="http://www.baidu.com">北京社保局官网</a>-->
                    <!--<a href="http://www.baidu.com">上海社保局官网</a>-->
                    <!--<a href="http://www.baidu.com">广州社保局官网</a>-->
                    <!--<a href="http://www.baidu.com">深圳社保局官网</a>-->
                    <!--<a href="http://www.baidu.com">厦门社保局官网</a>-->
                    <!--<a href="http://www.baidu.com">杭州社保局官网</a>-->
                    <!--<a href="http://www.baidu.com">重庆社保局官网</a>-->
                    <!--<a href="http://www.baidu.com">成都社保局官网</a>-->
                    <!-- <a target="_blank" href="http://www.51shebao.com">51社保</a> -->
                    
                    <a target="_blank" href="https://www.sipspf.org.cn/publish/main/index.html">苏州工业园区社保局官网</a>
                    <a target="_blank" href="http://www.bjrbj.gov.cn/csibiz/home/">北京社保局官网</a>
                    <a target="_blank" href="http://www.12333sh.gov.cn/sbsjb/wzb/226.jsp">上海社保局官网</a>
                    <a target="_blank" href="http://www.hrssgz.gov.cn/srsjwbck/index.html">广州社保局官网</a>
                    <a target="_blank" href="http://www.szsi.gov.cn/">深圳社保局官网</a>
                    <a target="_blank" href="http://wsbs.zjhz.hrss.gov.cn/">杭州社保局官网</a>
                    <a target="_blank" href="http://www.xmhrss.gov.cn/wsbs/">厦门社保局官网</a>
                </div>
                <div class="footer_nav">
                    <router-link to="/index" tag="a">首页</router-link>
                    <router-link to="/counter" tag="a">五险一金计算器</router-link>
                    <router-link to="/about" tag="a">关于我们</router-link>
                    <router-link to="/question" tag="a">常见问题</router-link>
                </div>
                <div class="footer-last">
                    <p>Copyright © 2017 苏州艺起同行数据服务有限公司 版权所有</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "baseFooter"
    }
</script>

<style scoped type="text/less" lang="less">
    #base_footer {
        width: 100%;
        height: 535px;
        min-width:1200px;
        border: 1px solid transparent;
        box-sizing: border-box;
        background: url(data:image/png;base64,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gAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBMnOvOAAAAaaSURBVGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAAAAAAAaIQADAAAAAAAANEIABgAAAAAAAGiEAAwAAAAAAADQCAEYAAAAAAAAoBECMAAAAAAAAEAjBGAAAAAAAACARgjAAAAAAAAAAI0QgAEAAOD/tWcHMgAAAACD/K3v8ZVGAAAAMCGAAQAAAAAAACYEMAAAAAAAAMCEAAYAAAAAAACYEMAAAAAAAAAAEwIYAAAAAAAAYEIAAwAAAAAAAEwIYAAAAAAAAIAJAQwAAAAAAAAwIYABAAAAAAAAJgQwAAAAAAAAwIQABgAAAAAAAJgQwAAAAAAAAAATAhgAAAAAAABgQgADAAAAAAAATAhgAAAAAAAAgAkBDAAAAAAAADAhgAEAAAAAAAAmBDAAAAAAAADAhAAGAAAAAAAAmBDAAAAAAAAAABMCGAAAAAAAAGBCAAMAAAAAAABMCGAAAAAAAACACQEMAAAAAAAAMCGAAQAAAAAAACYEMAAAAAAAAMCEAAYAAAAAAACYEMAAAAAAAAAAEwIYAAAAAAAAYEIAAwAAAAAAAEwIYAAAAAAAAIAJAQwAAAAAAAAwIYABAAAAAAAAJgQwAAAAAAAAwIQABgAAAAAAAJgQwAAAAAAAAAATAhgAAAAAAABgQgADAAAAAAAATAhgAAAAAAAAgAkBDAAAAAAAADAhgAEAAAAAAAAmBDAAAAAAAADAhAAGAAAAAAAAmBDAAAAAAAAAABMCGAAAAAAAAGBCAAMAAAAAAABMCGAAAAAAAACACQEMAAAAAAAAMCGAAQAAAAAAACYEMAAAAAAAAMCEAAYAAAAAAACYEMAAAAAAAAAAEwIYAAAAAAAAYEIAAwAAAAAAAEwIYAAAAAAAAIAJAQwAAAAAAAAwIYABAAAAAAAAJgQwAAAAAAAAwIQABgAAAAAAAJgQwAAAAAAAAAATAhgAAAAAAABgQgADAAAAAAAATAhgAAAAAAAAgAkBDAAAAAAAADAhgAEAAAAAAAAmBDAAAAAAAADAhAAGAAAAAAAAmBDAAAAAAAAAABMCGAAAAAAAAGBCAAMAAAAAAABMCGAAAAAAAACACQEMAAAAAAAAMCGAAQAAAAAAACYEMAAAAAAAAMCEAAYAAAAAAACYEMAAAAAAAAAAEwIYAAAAAAAAYEIAAwAAAAAAAEwIYAAAAAAAAIAJAQwAAAAAAAAwIYABAAAAAAAAJgQwAAAAAAAAwIQABgAAAAAAAJgQwAAAAAAAAAATAhgAAAAAAABgQgADAAAAAAAATAhgAAAAAAAAgAkBDAAAAAAAADAhgAEAAAAAAAAmBDAAAAAAAADAhAAGAAAAAAAAmBDAAAAAAAAAABMCGAAAAAAAAGBCAAMAAAAAAABMCGAAAAAAAACACQEMAAAAAAAAMCGAAQAAAAAAACYEMAAAAAAAAMCEAAYAAAAAAACYEMAAAAAAAAAAEwIYAAAAAAAAYEIAAwAAAAAAAEwIYAAAAAAAAICJAFPPgE+zdsRWAAAAAElFTkSuQmCC) no-repeat top;
        .base_footer_content {
            height: 300px;
            margin-top: 220px;
            .base_footer_content_top {
                width: 711px;
                height: 146px;
                margin: 0 auto 43px;
                .base_footer_content_top_left {
                    float: left;
                    width: 449px;
                    height: 146px;
                    border-right: 1px solid #575757;
                    box-sizing: border-box;
                    .logo_255 {
                        width: 137px;
                        height: 45px;
                        margin: 12px 0 0 19px;
                        img {
                            display: block;
                            width: 100%;
                            height: 100%;
                        }
                    }

                    p {
                        display: block;
                        margin-top: 18px;
                        margin-left: 19px;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAYAAACTQC2+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzJFQjgzRkI5QzIwMTFFODg0QjdCRkI4M0Y0Nzg4MjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzJFQjgzRkM5QzIwMTFFODg0QjdCRkI4M0Y0Nzg4MjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMkVCODNGOTlDMjAxMUU4ODRCN0JGQjgzRjQ3ODgyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkVCODNGQTlDMjAxMUU4ODRCN0JGQjgzRjQ3ODgyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmeGP+wAAAHySURBVHjatNU/aBNRHMDxu8vRpiRCB7PUDnYUgtVgKR2kc9Cha8RCqTWoJGDNpEOXDnUyOATpFBDUFgehLSoKhaKQCv6b3KWKikiHVkr+eX5/5XfyKG28nPHBh5f3e/fe7y733j273vhlaenCJWSQRNwKV75hHSWsuRG7JkFbEx3BCk5YnS1VPCJZxtUn8ZN4uI8FfPmHBDlMoBtHdyM8UR6empInbIfneX/QjuCWMd8S4tInnRUNPtbBCRSRbCcRv2M6sZ9E5oj4/XJBVTuyOviOtn9iPEgi6j681nEN5DR+GBektow7OKuDU/hoxOcRbZHsODb02i2kjacsa7zsGC/Q0/otUniq7SxeYGCfl57GS/TjE06zwp4Y/Qm/dg5YNT9wBjNo4hTeaMwvV7CMQ3iHYZK8P2gZui2WqGywWd189/TuZOKbiGJar5PYOZJst1rvboA98Rwn8RAjuG703UaBJM2/TeIE3ICfMYqitmXiPK4GSRL0ifxSxzX9iuyg0s6nwkxkBxyzGuabJH9dTX/3WZ0vvVpvOrpvpIx1MkOj6cmND2nzgyR6YGy+yQ4l6aG6qyeDvNtFOY/kU/4Kg8YxIcm/hsjh6qFZwDGNzbEyb/zvg6+Mi7IF7D1H+WWc17uJhZz8uy79Egme+cHfAgwA4G2u4XMByAEAAAAASUVORK5CYII=) no-repeat 0;
                        -webkit-background-size: 18px 15px;
                        background-size: 18px 15px;
                        height: 15px;
                        font-family: ArialMT;
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 1px;
                        color: #ffffff;
                        text-indent: 22px;

                    }

                    .footer_phone {

                        margin-top: 43px;
                        height: 15px;
                        line-height: 15px;
                        margin-left: 19px;
                        span {
                            float: left;
                            display: block;
                            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAABRElEQVQokX3SL2iVcRTG8c97NYxdwxAMIkuytCYah3CtWs1q8Q/igkbhfU8ziksmsyAKWsQgCoIrYwta1CIIBpkYLG7KY7jvxhW598TD73vO8zzn1yQZ4Dau4RAeYrWqfppSA9zATdzCBZzG3WkANEk28KaqVqFt2xGeY1hVu9M2LePDRO9r329myfuOw/2Wk1jDk6ramQW9w9m2bYdYx29cmeVpYJzWKRzBC7ytqu1ZUJNkiI89fB+vsVJV+z57FXP7w7quk+RSkl9JlpNcTfIpyfEkB5KsJdnJuB4nWTjYD3uAc3iEFRzFBl710i9j2/ie93Rdt7dtIclmkq0ki0kuJvmcZDTx5liSb4M93VX1A2ewiy3MY6mqXk5kMI8/Tdd1/yTTtu0c7uB6L+kpNvEF73HiP2gCXuq9jLBo/JnPV9Wzv9PHodYz7zNOAAAAAElFTkSuQmCC) no-repeat 0;
                            width: 135px;
                            height: 15px;
                            font-family: ArialMT;
                            font-size: 14px;
                            font-weight: normal;
                            font-stretch: normal;
                            letter-spacing: 1px;
                            color: #ffffff;
                            text-indent: 20px;

                        }

                    }

                }
                .base_footer_content_top_right {
                    float: right;
                    width: 260px;
                    height: 146px;
                    .footer_erweima {
                        width: 75px;
                        float: left;
                        margin-top: 23px;
                        img {
                            display: block;
                            width: 75px;
                            height: 75px;
                            margin-bottom: 15px;
                        }
                        span {
                            display: block;
                            width: 73px;
                            line-height: 22px;
                            font-family: MicrosoftYaHei;
                            font-size: 12px;
                            font-weight: normal;
                            font-stretch: normal;
                            letter-spacing: 0px;
                            color: #ffffff;
                            text-align: center;
                        }
                    }

                    .footer_erweima1 {
                        margin-left: 60px;

                    }
                    .footer_erweima2 {
                        margin-left: 45px;
                    }

                }
            }
            .base_footer_content_bottom {
                width: 840px;
                margin: 0 auto;
                h4 {
                    width: 100%;
                    height: 14px;
                    font-family: MicrosoftYaHei;
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #999;
                    text-align: center;
                }
                .alists {
                    height: 40px;
                    line-height: 40px;
                    a {
                        width: 100%;
                        height: 14px;
                        font-family: MicrosoftYaHei;
                        font-size: 13px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                        color: #999;
                        text-align: center;
                        margin: 0 2px;
                    }
                    border-bottom: 1px solid #525252;
                }
                .footer-last {

                    width: 100%;
                    height: 14px;
                    font-family: MicrosoftYaHei;
                    font-size: 12px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #999999;
                    text-align: center;
                    margin-top: 3px;

                }

                .footer_nav{
                    width: 280px;
                    height: 14px;
                    font-family: MicrosoftYaHei;
                    font-size: 12px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #999999;
                    text-align: center;
                    margin: 0 auto;
                    margin-top:7px;
                    a{
                        display: block;
                        float: left;
                        height: 12px;
                        line-height: 12px;
                        font-family: MicrosoftYaHei;
                        font-size: 12px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                        color: #999999;
                        padding: 0 6px;
                        box-sizing: border-box;
                        border-right: 1px solid #999999;
                        text-align: center;
                        &:last-child{
                            border: none;
                        }
                    }

                }
            }

        }

    }

</style>

<style type="text/less" scoped lang="less">
    .insurance {
        .insurance_banner {
            width: 100%;
            min-width: 1200px;
            height: 454px;
            background: url("../../../assets/images/insurance/banner@2x.png") no-repeat center;
            -webkit-background-size:auto 100% ;
            background-size: auto 100% ;
            margin-bottom: 90px;
        }
        .insurance_list {
            width: 100%;
            margin-bottom: 60px;
            .insurance_list_item {
                width: 1000px;
                height: 287px;
                margin: 0 auto;
                margin-bottom: 40px;

                .insurance_list_item_left {
                    float: left;
                    width: 500px;
                    height: 287px;
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }

                }
                .insurance_list_item_right {
                    float: right;
                    width: 498px;
                    height: 287px;
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }

                .insurance_list_item_news {
                    padding: 48px 0 0 100px;
                    box-sizing: border-box;
                    h3 {
                        position: relative;
                        width: 100%;
                        font-family: MicrosoftYaHei-Bold;
                        font-size: 26px;
                        letter-spacing: 0px;
                        color: #333333;
                        text-align: left;
                        &::after {
                            position: absolute;
                            top: 15px;
                            left: -25px;
                            display: block;
                            content: "";
                            width: 8px;
                            height: 10px;
                            background: #ef6e1f;
                        }
                    }
                    span {
                        display: block;
                        width: 100%;
                        line-height: 50px;
                        text-align: left;
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        color: #999999;
                        padding-left: 2px;
                        box-sizing: border-box;
                    }
                    p {
                        font-family: MicrosoftYaHei;
                        width: 100%;
                        font-size: 18px;
                        line-height: 30px;
                        color: #333333;
                        text-align: left;
                    }

                }
            }

        }
        .insurance_service {
            width: 1000px;
            margin: 0 auto;
            height: 400px;

            h3 {
                position: relative;
                width: 656px;
                margin: 0 auto;
                line-height: 60px;
                font-family: MicrosoftYaHei-Bold;
                font-size: 32px;
                color: #333333;
                text-align: center;
                margin-bottom: 100px;
                &::after {
                    position: absolute;
                    top: 24px;
                    left: -25px;
                    display: block;
                    content: "";
                    width: 8px;
                    height: 10px;
                    background: #ef6e1f;
                }
            }
            .insurance_service_lists {
                .insurance_service_item {
                    width: 498px;
                    float: left;
                    height: 200px;
                    box-sizing: border-box;
                    h4{
                        width: 100%;
                        font-family: MicrosoftYaHei-Bold;
                        font-size: 18px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                        color: #333333;
                        text-align: left;

                    }
                    p{
                        font-family: MicrosoftYaHei;
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                        color: #999999;
                        line-height: 25px;
                        text-align: left;

                    }
                    &:nth-child(1) {
                        background: url("../../../assets/images/insurance/01@2x.png") no-repeat 100px top;
                        -webkit-background-size: 50px 49px;
                        background-size: 50px 49px;
                        padding-left: 170px;
                    }
                    &:nth-child(2) {
                        background: url("../../../assets/images/insurance/02@2x.png") no-repeat 80px top;
                        -webkit-background-size: 48px 50px;
                        background-size: 48px 50px;
                        padding-left: 150px;

                    }
                    &:nth-child(3) {
                        background: url("../../../assets/images/insurance/03@2x.png") no-repeat 100px top;
                        -webkit-background-size: 50px 50px;
                        background-size: 50px 50px;
                        padding-left: 170px;

                    }
                    &:nth-child(4) {
                        background: url("../../../assets/images/insurance/04@2x.png") no-repeat 80px top;
                        -webkit-background-size: 45px 49px;
                        background-size: 45px 49px;
                        padding-left: 150px;

                    }

                }
            }

        }
    }

</style>


<template>
    <div class="insurance">
        <base-header></base-header>
        <div class="insurance_banner"></div>
        <div class="insurance_list">
            <div class="insurance_list_item">
                <div class="insurance_list_item_left">
                    <img src="../../../assets/images/insurance/t1@2x.png" alt="">

                </div>
                <div class="insurance_list_item_right insurance_list_item_news">
                    <h3>做业务知识最"专业"HR</h3>
                    <span>PROFESSION HR</span>
                    <p>资深的HR不光要具备</p>
                    <p>优秀的业务知识和业务敏锐度</p>
                    <p>更需要对员工负责</p>

                </div>

            </div>
            <div class="insurance_list_item">
                <div class="insurance_list_item_left insurance_list_item_news">
                    <h3>做新时代不"背锅"HR</h3>
                    <span>LABOR DISPUTE</span>
                    <p>员工离职</p>
                    <p>社保出处理不当就会产生劳动纠纷</p>
                    <p>快推荐他用“好社保”</p>
                    <p>安全、可靠、不怕断缴</p>

                </div>
                <div class="insurance_list_item_right">
                    <img src="../../../assets/images/insurance/t2@2x.png" alt="">
                </div>

            </div>

        </div>
        <div class="insurance_service">
            <h3>“好社保”专注为个体自由职业者提供社保服务</h3>
            <div class="insurance_service_lists">
                <div class="insurance_service_item">
                    <h4>专业社保咨询顾问</h4>
                    <p>12小时在线，随时解答用户疑问,属于您私人的
                        社保咨询顾问</p>
                </div>
                <div class="insurance_service_item">
                    <h4>参保进度实时查询</h4>
                    <p>后台系统数据实时更新参保进度实时掌握</p>
                </div>
                <div class="insurance_service_item">
                    <h4>一键线上缴纳</h4>
                    <p>微信扫码，轻松一键线上缴，再也不用怕断缴</p>
                </div>
                <div class="insurance_service_item">
                    <h4>12项增值服务免费享</h4>
                    <p>一次性收费，坚决杜绝额外增收取服务费</p>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
    import baseHeader from '../../components/baseHeader2'

    export default {
        name: 'insurance',
        data() {
            return {

            }
        },
        components: {baseHeader},


    }

</script>




// WEBPACK FOOTER //
// src/views/pc/insurance/index.vue
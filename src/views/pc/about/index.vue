<template>
  <div class="about">
    <base-header></base-header>
    <div class="about_banner">
      <h3>About Us</h3>
      <div class="line_height"></div>
      <h4>关于我们</h4>

    </div>
    <div class="about_content container">
      <div class="about_content_item">
        <div class="about_content_item_left">
          <h4>关于苏易保</h4>
        </div>
        <div class="about_content_item_right">
          <p>
            苏易保，专注于为个体、自由职业者提供专业、快捷、高效、安全的社保服务，
            是业内领先的互联网在线自助式缴纳平台，隶属于苏州艺起同行数据服务有限公司。
          </p>

        </div>
      </div>

      <div class="about_content_item" style="border: none;">
        <div class="about_content_item_left">
          <h4 class="about_content_item_left_h4" style="line-height: 280px;">直营放心，团队专业</h4>
        </div>
        <div class="about_content_item_right">
          <p>
            苏易保拥有国内优质互联网技术团队，将传统社保缴纳方式与移动互联网无
            缝结合。只需要关注“苏易保”微信公众号，
            即可在线自助进行个体社保缴纳、查询服务。我们依托全国直营服务体系，支
            持北上广深、杭州、苏州工业园区、苏州市区、昆山、张家港等全国多地社保缴纳，让您缴得更安心，
            用得更放心。同时，苏易保配备专业在线客服团队，能为您提供个体社保缴纳
            的深度咨询服务，解决您的后顾之忧。
          </p>

        </div>
      </div>

    </div>


    <div class="about_bottom container">
      <Row>
        <Col span="6">
        <div class="about_bottom_item ">
          <h3>我们的使命</h3>
          <p>让每一份职业都有保障</p>

        </div>
        </Col>
        <Col span="6">
        <div class="about_bottom_item about_bottom_item_active ">
          <div class="about_bottom_item_active1">
            <span style="width: 168px;margin-top:85px;">
              社保是一份承载全民保障的事业，为己、为人都应尽力，实现健全保障的使命
            </span>
          </div>

        </div>
        </Col>

        <Col span="6">
        <div class="about_bottom_item">
          <h3 style="padding-left: 77px;">我们的价值观</h3>
          <p style="padding-left: 77px;">安全 专注 真诚</p>

        </div>
        </Col>
        <Col span="6">
        <div class="about_bottom_item about_bottom_item_active ">

          <div class="about_bottom_item_active2">
            <span style="width: 57px;margin-top:85px;">
              安全可靠
              专注创新
              真诚进取
            </span>
          </div>

        </div>
        </Col>


        <Col span="6">
        <div class="about_bottom_item about_bottom_item_active ">
          <div class="about_bottom_item_active3">
            <span style="width: 169px;margin-top:85px;">

              用“专业化”锻造竞争能力
              用“科技型”驱动领域变革
              用“云服务”赢得行业发展

            </span>
          </div>


        </div>
        </Col>


        <Col span="6">
        <div class="about_bottom_item ">
          <h3 style="padding-left: 48px;">我们的理念</h3>
          <p style="padding-left: 48px;">专业化、科技型、云服务</p>

        </div>
        </Col>


        <Col span="6">
        <div class="about_bottom_item about_bottom_item_active ">
          <div class="about_bottom_item_active4">
            <span style="width: 135px;margin-top:85px;">
              致力于让复杂的社保问题更加简单化
            </span>
          </div>

        </div>
        </Col>

        <Col span="6">
        <div class="about_bottom_item">
          <h3 style="padding-left: 33px;">我们的愿景</h3>
          <p style="padding-left: 33px;">让复杂的社会保障变得更简单</p>

        </div>
        </Col>


      </Row>

    </div>


  </div>
</template>

<script>
  export default {
    name: "about",
    metaInfo: {
      title: '苏易保|苏易保社保代缴|社保代缴|苏州市社保代缴|在线社保代缴平台', // set a title
      meta: [{ // set meta
          name: 'description',
          content: '苏易保社保是中国互联网社保开创者,致力于为企业提供社保,综合保障,薪酬,残保金等综合解决方案.依托更透明,更高效,更放心的苏易保全直营服务体系,帮助广大企业控制用工风险,降低人工成本,提升员工福利'
        },
        { // set meta
          name: 'keywords',
          content: '苏易保,代缴社保,社保代缴,昆山社保代缴,苏州工业园区社保代缴、苏州社保代缴、苏州市区社保代缴'
        }
      ],
    },
    data() {
      return {}
    },
    mounted() {

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
    }
  }

</script>

<style scoped type="text/less" lang="less">
  .about {
        .about_banner {
            width: 100%;
            height: 450px;
            min-width: 1200px;
            border: 1px solid transparent;
            box-sizing: border-box;
            background: url("./../../../assets/images/banner.png") no-repeat center top;
            h3 {
                width: 100%;
                height: 25px;
                font-size: 26px;
                letter-spacing: 0px;
                color: #ffffff;
                margin: 175px auto 0;
                text-align: center;
            }
            .line_height {
                width: 37px;
                height: 4px;
                background-color: #ffffff;
                margin: 23px auto 0;
            }
            h4 {
                width: 100%;
                height: 26px;
                font-size: 26px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #ffffff;
                margin: 23px auto 0;
                text-align: center;
            }

        }
        .about_content {
            margin-bottom: 100px;
            .about_content_item {
                width: 100%;
                height: 180px;
                border-bottom: 1px solid #e5e5e5;
                .about_content_item_left {
                    float: left;
                    width: 40%;
                    h4 {
                        width: 100%;
                        height: 180px;
                        line-height: 180px;
                        font-size: 24px;
                        letter-spacing: 0px;
                        color: #333333;
                        text-align: left;
                        padding-left: 100px;
                        box-sizing: border-box;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAd0lEQVQYlYXPsQnCABCF4S/X6Qw6RFrb6BKKawTrNOocIg5hny2sxBUSsLLwrIzxbw4eP493RV9WMMEOG8xxxxkH9EVfVlNcsfBNi1Vkw5Ag8zqw/iF82EZuGGMWOXKMR+DyRzoF9t5fDNHiGOiwRIMbnnmbzLsXzooXHZ6LDj0AAAAASUVORK5CYII=) no-repeat 70px;
                    }
                    .about_content_item_left_h4 {
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAd0lEQVQYlYXPsQnCABCF4S/X6Qw6RFrb6BKKawTrNOocIg5hny2sxBUSsLLwrIzxbw4eP493RV9WMMEOG8xxxxkH9EVfVlNcsfBNi1Vkw5Ag8zqw/iF82EZuGGMWOXKMR+DyRzoF9t5fDNHiGOiwRIMbnnmbzLsXzooXHZ6LDj0AAAAASUVORK5CYII=) no-repeat 70px 135px;
                    }

                }
                .about_content_item_right {
                    float: right;
                    width: 58%;
                    padding: 55px 0 55px 30px;
                    box-sizing: border-box;
                    p {
                        width: 485px;
                        line-height: 25px;
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                        color: #999999;
                        text-align: justify;
                    }

                }
            }

        }
        .about_bottom {
            position: relative;
            top: 50px;
            height: 502px;
            border: solid 1px #e5e5e5;
            box-sizing: border-box;
            .about_bottom_item {
                width: 100%;
                height: 250px;
                background: #ffffff;
                border: 1px solid transparent;
                box-sizing: border-box;
                h3 {
                    width: 100%;
                    height: 16px;
                    font-size: 16px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #f73143;
                    margin: 96px auto 11px;
                    text-align: left;
                    padding-left: 56px;
                    box-sizing: border-box;
                }
                p {

                    width: 100%;
                    font-size: 14px;
                    height: 15px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #333333;
                    text-align: left;
                    margin: 0 auto;
                    padding-left: 56px;
                    box-sizing: border-box;

                }
            }

            .about_bottom_item_active {
                position: relative;
                box-sizing: border-box;
                border: 1px solid transparent;

                span {
                    display: block;
                    margin: 0 auto;
                    font-size: 14px;
                    line-height: 25px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #ffffff !important;
                    text-align: center;
                    transition: all 0.3s;
                }

            }

            .about_bottom_item_active1 {
                position: absolute;
                top: 0;
                left: -17px;
                width: 271px;
                height: 250px;
                background: url("../../../assets/images/about_01.png") no-repeat 0 center;
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
                &:hover {
                    opacity: .9;
                }
            }
            .about_bottom_item_active2 {
                position: absolute;
                top: 0;
                left: -20px;
                width: 269px;
                height: 250px;
                background: url("../../../assets/images/about_02.png") no-repeat 0 center;
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
                &:hover {
                    opacity: .9;
                }

            }
            .about_bottom_item_active3 {
                position: absolute;
                top: 0;
                left: 0;
                width: 263px;
                height: 248px;
                z-index: 10;
                background: url("../../../assets/images/about_04.png") no-repeat 0 center;
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
                &:hover {
                    opacity: .9;
                }

            }
            .about_bottom_item_active4 {
                position: absolute;
                top: 0;
                left: 0;
                width: 261px;
                height: 248px;
                z-index: 10;
                background: url("../../../assets/images/about_03.png") no-repeat center;
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
                &:hover {
                    opacity: .9;
                }

            }

        }

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
                text-align: center;
                line-height: 46px;
                font-size: 30px;
                color: #fff;
            }
            &:nth-child(2) a {

            }

        }

        .back_top a {
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

    .iframe_wrap {
        position: fixed;
        right: 60px;
        bottom: -1000px;
        width: 320px;
        height: 480px;
        transition: all .3s;
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

    .erweima_modal {
        width: 165px;
        height: 165px;
        margin: 0 auto;
        img {
            display: block;
            width: 100%;
            height: 100%;
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
        // background: url("../../../assets/images/modal_bg.png") no-repeat center top;
        .erweima_modal_del {
            position: absolute;
            cursor: pointer;
            right: 20px;
            top: 20px;
            width: 14px;
            height: 14px;
            // background: url("../../../assets/images/modal_del.png") no-repeat center top;
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
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


</style>

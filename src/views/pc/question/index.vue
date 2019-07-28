<template>
  <div class="question">
    <base-header></base-header>
    <div class="question_banner">
      <h3>Q&A</h3>
      <div class="line_height"></div>
      <h4>常见问题</h4>

    </div>

    <div class="question_content container">
      <div class="question_content_r">
        <ul>
          <li :class="{active_question:index===num}" v-for="item,index in title" @click="changeTag(index)" :key="index">
            <a href="javascript:;">
              {{item.name}}
            </a>
          </li>
        </ul>
        <div style="width: 100%;height: 100px;"></div>

        <!--苏易保相关问题-->
        <div class="haoshebao_question" v-if="num===0">
          <Collapse v-model="haoshebao.value" simple accordion>
            <Panel :name="index+''" v-for="item,index in haoshebao.lists" :key="index">
              {{item.name}}
              <p slot="content">
                {{item.p}}
              </p>
            </Panel>
          </Collapse>

        </div>

        <!--社保相关问题-->
        <div class="shebao_question" v-if="num===1">
          <Collapse v-model="shebao.value" simple accordion>
            <Panel :name="index+''" v-for="item,index in shebao.lists" :key="index">
              {{item.name}}
              <p slot="content" v-html="item.p"></p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "question",
    data() {
      return {
        num: 0,
        value: 1,
        haoshebao: {
          value: '0',
          lists: [{
              name: 'Q：如何查看是否参保成功？',
              p: 'A：当月月底查询，如果参保人状态为“正常缴纳”，请登录当地社保局官网查询参保人社保状态。'
            },
            {
              name: 'Q：什么情况下可以退款？',
              p: 'A：以下三种情形可申请退款，一、参保人参保不成功；二、参保人主动提出退款且平台尚未进行操作；三、参保人提前减员。'
            },
            {
              name: 'Q：哪些费用可以退？',
              p: 'A：如您办理退款，平台可退还您的代缴费用、服务费不予退还，另，支付时收取的手续费为支付厂商收取，与平台无关，故不予退还。'
            },
            {
              name: 'Q：如何办理减员？',
              p: 'A：如需提前办理减员，请先关注微信公众号“苏易保”，在公众号底部「缴社保」中点击「我要减员」，根据提示进行操作（增减员一般需要两个工作日）。我们正在不断完善平台功能，更多功能请关注后期版本更新。'
            },
            {
              name: 'Q：能否开具在职证明、开具劳动合同，能否办理申领社保卡、手工报销、领取生育津贴、办理社保转移办理退休等业务？',
              p: 'A：因平台为代缴性质，仅提供社保代缴服务，无法办理相关业务，可联系在线客服或拨打客服电话进行咨询。\n'
            },
            {
              name: 'Q：为什么不能选择缴纳月份？',
              p: 'A：目前平台仅支持当地最近参保月的购买，暂不支持参保月份选择，请根据平台截止时间规则进行购买。\n'
            },
            {
              name: 'Q：怎样一次购买多个月的社保？',
              p: 'A：您可以选择同一订单多次下单的方式。缴费成功后剩余的金额系统会根据当前缴纳截止月份为您自动后延。'
            },
            {
              name: 'Q：苏易保可以缴纳公积金吗？',
              p: 'A：苏易保目前支持公积金购买'
            },
          ]

        },
        shebao: {
          value: '0',
          lists: [{
              name: 'Q：社保断缴有什么影响？',
              p: 'A：断缴期间，停止享受社保待遇。一般在买房、买车、小孩上学等方面会受到影响。具体还需要参考当地政策。'
            },
            {
              name: 'Q：社保转移是必须的吗？',
              p: 'A：不是。社保是否转移与新参保地能否参加社保没有关系，当不确定是否回原参保地或者不确定是否在新参保地退休时，可以暂不办理社保转移手续，待确定退休待遇领取地后，再统一办理社保转移。\n'
            },
            {
              name: 'Q：社保缴满15年可以停缴吗？',
              p: 'A：1.养老保险必须缴满规定的最低缴费年限15年，到退休年龄(男60周岁/女55周岁)，就可以享受养老金待遇(延迟退休除外)。\n' +
                '2.如果有单位，即使缴满15年，但职工还未退休，企业还得继续缴费，直至退休;个人缴纳社保的话，可停缴，也可继续缴纳。根据当地政策，肯定也继续缴纳好，养老保险是遵循“多缴多得”的原则，缴费基数越高、年限越长，退休时领取养老金也越多。因此在这里给出的结论是，最好不要停交。如果你交满15年以后不继续缴纳了，你缴费年限只有15年，也就是你只能领取最低的养老金标准，所以，如果在你交满养老保险15年以后不继续缴纳，并不是最“有利”的行为。'
            },
            {
              name: 'Q：交满15年社保能领多少钱?',
              p: 'A：   交满15年社保退休能领多少钱的计算公式：养老金=基础养老金+个人账户养老金;其中：基础养老金=(全省上年度在岗职工月平均工资+本人指数化月平均缴费工资)÷2×缴费年限×1%。月基本养老金=基础养老金+个人账户养老金+过渡性养老金;过渡性养老金=退休时上年度全省在岗职工月平均工资×本人平均缴费工资指数×1997年12月31日以前的缴费年限\\(含视同缴费年限\\)×1.4%。\n'
            },
            {
              name: 'Q：社保交满15年后停交还能享受医保吗?',
              p: 'A：医疗保险至少需要交纳25/30年，达到退休年龄才可以申请享受终身医疗保险(只要续费平时也是可以的)。在此期间内医保停缴，是无法享受医疗保险的社保的。如果你的医保不满25/30年，你退休后还可以继续缴满。有的地方政策还有特殊规定，如深圳社保政府就规定：养老保险可以补交，而医疗保险则视为中断，不能补交，先前连续交的全部医疗保险清零。所以说，医疗保险还是建议一定要坚持缴纳，因为补办也很麻烦。再说，退休后累计缴费年限，不足部分退休前要一起交齐。我们假设您二十五年后退休，那是您的工资和收入肯定比现在高很多，但是补交要按退休前一年为基数的所缴费更多，甚至有的地方还要补滞纳金，所以建议最好不要停交。'
            },
            {
              name: 'Q：个人缴纳社保可以只缴纳医保吗？或者是分开缴纳？',
              p: 'A：不可以。社保是五险一起缴纳的，无论是您自己缴纳还是由单位缴纳都是不允许单独缴纳其中的某个险种。\n'
            },
            {
              name: 'Q：参加城乡居民养老保险还是企业职工养老保险',
              p: 'A：企业职工应当依法参加企业职工养老保险，因此，参加了城乡居民养老保险的企业职工也要参加企业职工养老保险。同时参加企业职工养老保险和城乡居民养老保险的，其重复缴费时段（按月计算）只计算企业职工养老保险缴费年限，并将城乡居民养老保险重复缴费时段相应个人缴费和集体补助退还本人。'
            },
            {
              name: 'Q：什么是基本养老保险视同缴费年限？',
              p: 'A:基本养老保险视同缴费年限为当地实行养老保险个人缴费制度时仍在国有或者县以上集体所有制单位的固定职工，其在当地实行养老保险个人缴费制度前按国家规定计算的连续工龄。当地实行养老保险个人缴费制度后，未向当地社保机构缴纳养老保险费的固定职工，未缴费期间不计算为基本养老保险视同缴费年限。基本养老保险视同缴费年限，由市社保机构依据原固定职工本人档案记载、相关文件规定的应缴费起始时间以及转出地社保机构做出的记载等予以确认。'
            },
            {
              name: 'Q：参加医保后能享受哪些待遇？',
              p: 'A：办理了参保手续并及时足额缴费后，参保人员凭医疗保险证（卡）即可在定点医院、定点药店就医、购药。因住院、患有特殊门诊病而产生的治疗费用，可以按照规定的范围、比例和额度由统筹基金支付。'

            },
          ]

        },
        title: [{
            name: '服务相关问题'
          },
          {
            name: '社保相关问题'

          }
        ]
      }
    },
    metaInfo: {
      title: '苏易保|苏易保社保代缴|社保代缴|苏州市社保代缴|在线社保代缴平台', // set a title
      meta: [{                 // set meta
        name: 'description',
        content: '苏易保社保是中国互联网社保开创者,致力于为企业提供社保,综合保障,薪酬,残保金等综合解决方案.依托更透明,更高效,更放心的苏易保全直营服务体系,帮助广大企业控制用工风险,降低人工成本,提升员工福利'
      },
      {                 // set meta
        name: 'keywords',
        content: '苏易保,代缴社保,社保代缴,昆山社保代缴,苏州工业园区社保代缴、苏州社保代缴、苏州市区社保代缴'
      }],
    },
    methods: {
      changeTag(index) {
        this.num = index;
      },
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
  .question {
        .question_banner {
            width: 100%;
            height: 450px;
            border: 1px solid transparent;
            box-sizing: border-box;
            background: url("../../../assets/images/question_banner.png") no-repeat center top;
            h3 {
                width: 58px;
                height: 25px;
                font-size: 26px;
                letter-spacing: 0px;
                color: #ffffff;
                margin: 175px auto 0;
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
        .question_content {
            border: 1px solid transparent;
            box-sizing: border-box;
            width: 1000px;
            .question_content_r {
                width: 900px !important;
                margin: 0 auto;
            }
            ul {
                width: 360px;
                margin: 0 auto;
                margin-top: 60px;
                margin-bottom: 60px;
                li {
                    float: left;
                    &:first-child {
                        width: 180px;
                        text-align: center;
                        a {
                            display: block;
                            box-sizing: border-box;
                            height: 17px;
                            font-size: 18px;
                            font-weight: normal;
                            font-stretch: normal;
                            letter-spacing: 0px;
                            color: #999999;

                            &:hover {
                                color: #f73143;
                            }

                            &:after {
                                content: '';
                                display: block;
                                width: 0;
                                margin: 7px auto 0;
                                height: 2px;
                                background: transparent;
                                transition: all .3s;

                            }
                            &:hover:after {
                                color: #f73143;
                                width: 40px;
                                background: #f73143;
                            }
                        }

                    }
                    &:last-child {
                        width: 160px;
                        text-align: center;
                        a {
                            display: block;
                            box-sizing: border-box;
                            height: 17px;
                            font-size: 18px;
                            font-weight: normal;
                            font-stretch: normal;
                            letter-spacing: 0px;
                            color: #999999;

                            &:hover {
                                color: #f73143;
                            }

                            &:after {
                                content: '';
                                display: block;
                                width: 0;
                                margin: 7px auto 0;
                                height: 2px;
                                background: transparent;
                                transition: all .3s;

                            }
                            &:hover:after {
                                color: #f73143;
                                width: 40px;
                                background: #f73143;
                            }
                        }
                    }
                }

                .active_question {
                    a {
                        display: block;
                        box-sizing: border-box;
                        height: 17px;
                        font-size: 18px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                        color: #f73143 !important;
                        &:after {
                            content: '';
                            display: block;
                            width: 40px !important;
                            margin: 7px auto 0 !important;
                            height: 2px !important;
                            background: #f73143 !important;
                            transition: all .3s;

                        }
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
            background: url(data:image/png;base64,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) no-repeat top;
            .erweima_modal_del {
                position: absolute;
                cursor: pointer;
                right: 20px;
                top: 20px;
                width: 14px;
                height: 14px;

                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTA4MzgwRjU5QjEwMTFFODg0QjdCRkI4M0Y0Nzg4MjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTA4MzgwRjY5QjEwMTFFODg0QjdCRkI4M0Y0Nzg4MjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMDgzODBGMzlCMTAxMUU4ODRCN0JGQjgzRjQ3ODgyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMDgzODBGNDlCMTAxMUU4ODRCN0JGQjgzRjQ3ODgyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pkf/TxIAAAF6SURBVHjatNa7SsRAFAbg7GDjoo2NtW+i4qVRcbv1DaxcvKG+gXhZ0UZ8ArcQVNTC+6vYiIXYiEYr8f/hDAxhk8w50QN/MZkkXwJnhqn9dM4SqSWkhdSRExl/JbbiO/aQOeQT2ZJx0iM37CDLwQPzyBDSMKDELpBRGfcjbWQQWSe4ksF8TSL8/VkFmsXCWkNenIB5NSFob0XMV4tgX8mLYtAYjDVAsBPx9UVoLMY6JriAPBpRDXbLXiGYIlNKtG7A2Hypkwta9FSB3XiMAxdMaNFYrOGxLKhF1Vg3MEQf/hrLAz06bURzsSLQihZiZaCvmgIsvdeVbFeXyIgCHA/WqQrkA1dKLAp1BdhwhS7NRd0/YIWoM2LsxvtI9DxEnQG7lr1xJhIdC1FnwPw5J7WgBA8MWLg5aNA2waYRs6BNgh8VMC36RnC7IqZB9wnuykE4rxs1B2GP3nWZ22S/+GWxKofhJ+QVORTs27DgPXqEvCPPyCKywclfAQYAvSh6bFI3VNwAAAAASUVORK5CYII=) no-repeat top;
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

    }


</style>

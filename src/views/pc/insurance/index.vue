<style type="text/less" scoped lang="less">
  .insurance {
        .insurance_banner {
            width: 100%;
            min-width: 1200px;
            height: 454px;
            background: url("../../../assets/images/banner@2x.png") no-repeat center;
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
                font-size: 30px;
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
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABiCAYAAACmu3ZJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODQyNzJENjk5RDQzMTFFODg0QjdCRkI4M0Y0Nzg4MjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODQyNzJENkE5RDQzMTFFODg0QjdCRkI4M0Y0Nzg4MjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NDI3MkQ2NzlENDMxMUU4ODRCN0JGQjgzRjQ3ODgyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NDI3MkQ2ODlENDMxMUU4ODRCN0JGQjgzRjQ3ODgyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk6yrnwAAAsJSURBVHja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) no-repeat 100px top;
                        -webkit-background-size: 50px 49px;
                        background-size: 50px 49px;
                        padding-left: 170px;
                    }
                    &:nth-child(2) {
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABkCAYAAAB5CTUuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODJBODMyRTI5RDQzMTFFODg0QjdCRkI4M0Y0Nzg4MjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODJBODMyRTM5RDQzMTFFODg0QjdCRkI4M0Y0Nzg4MjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MkE4MzJFMDlENDMxMUU4ODRCN0JGQjgzRjQ3ODgyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MkE4MzJFMTlENDMxMUU4ODRCN0JGQjgzRjQ3ODgyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrHEq/kAAAuySURBVHja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) no-repeat 80px top;
                        -webkit-background-size: 48px 50px;
                        background-size: 48px 50px;
                        padding-left: 150px;

                    }
                    &:nth-child(3) {
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODJBODMyRTY5RDQzMTFFODg0QjdCRkI4M0Y0Nzg4MjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODQyNzJENjY5RDQzMTFFODg0QjdCRkI4M0Y0Nzg4MjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MkE4MzJFNDlENDMxMUU4ODRCN0JGQjgzRjQ3ODgyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MkE4MzJFNTlENDMxMUU4ODRCN0JGQjgzRjQ3ODgyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjC2G1wAAAlfSURBVHja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) no-repeat 100px top;
                        -webkit-background-size: 50px 50px;
                        background-size: 50px 50px;
                        padding-left: 170px;

                    }
                    &:nth-child(4) {
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABiCAYAAADQgcTCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODJBODMyREU5RDQzMTFFODg0QjdCRkI4M0Y0Nzg4MjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODJBODMyREY5RDQzMTFFODg0QjdCRkI4M0Y0Nzg4MjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MkE4MzJEQzlENDMxMUU4ODRCN0JGQjgzRjQ3ODgyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MkE4MzJERDlENDMxMUU4ODRCN0JGQjgzRjQ3ODgyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pni4T8gAAAepSURBVHja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) no-repeat 80px top;
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
          <img src="../../../assets/images/t1@2x.png" alt="">
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
            <p>快推荐他用“苏易保”</p>
            <p>安全、可靠、不怕断缴</p>
        </div>
           <div class="insurance_list_item_right">
        <img src="../../../assets/images/t2@2x.png" alt="">
      </div>
      </div>
    </div>
  <div class="insurance_service">
    <h3>“苏易保”专注为个体自由职业者提供社保服务</h3>
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

  export default {
    name: 'insurance',
    data() {
      return {

      }
    },
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
  }

</script>




// WEBPACK FOOTER //
// src/views/pc/insurance/index.vue

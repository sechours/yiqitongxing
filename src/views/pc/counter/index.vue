<template>
    <div class="counter">
        <base-header></base-header>
        <div class="counter_wrap ">
            <div class="counter_content container clearfix">
                <div class="counter_content_left">
                    <h3>五险一金计算器</h3>

                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                        <FormItem label="参保城市" prop="city">
                            <!--<Select v-model="formValidate.city"-->
                            <!--@on-change="changeSeleCity"-->
                            <!--size="large" placeholder="请选择参保城市">-->
                            <!--<Option :value="item.value"-->
                            <!--v-for="item in formValidate.cityLists"-->
                            <!--:label="item.label"-->

                            <!--&gt;</Option>-->
                            <!--</Select>-->

                            <Input size="large" v-model="formValidate.city"
                                   placeholder="请选择参保城市">
                            <!--<Icon type="ios-arrow-down" size="14" slot="suffix" />-->
                            </Input>

                            <div class="wrap_input_city"
                                 @mouseover="isShow=false"
                                 @mouseleave="isShow=true"
                            >
                                <div class="input_city_lists" :class="{none:isShow}">
                                    <div class="input_city_lists_header">
                                        <a href="javascript:void(0);"
                                           class="input_city_lists_header_item"
                                           v-for="item,index in cityListsNew"
                                           :class="{'active_c':num===index}"
                                           @click="changeCitysTag(index)"
                                        >
                                            {{item.title}}
                                        </a>


                                    </div>


                                    <div class="input_city_lists_content">
                                        <a
                                            href="javascript:void(0);"
                                            v-for="item2,index2 in cityListsNew[num].lists"
                                            v-html="item2.title||'-'"
                                            @click="chooseCity(item2)"
                                        >

                                        </a>

                                    </div>


                                </div>
                            </div>


                        </FormItem>


                        <FormItem label="户口性质" prop="hukou">
                            <Select v-model="formValidate.hukou"
                                    :disabled="formValidate.city===''"
                                    @on-change="changeSeleHukou"
                                    size="large"
                                    placeholder="请先选择参保城市">
                                <Option :value="item.value"
                                        v-for="item in formValidate.hukouLists"
                                        :label="item.label"
                                ></Option>
                            </Select>
                        </FormItem>

                        <FormItem label="税前工资" prop="base">
                            <InputNumber :max="1000000" :min="1"
                                         size="large"
                                         :editable="true"
                                         placeholder="请输入税前工资"
                                         v-model="formValidate.base">

                            </InputNumber>
                        </FormItem>

                        <div class="button_lists">
                            <Button type="error"
                                    :loading="buttonLoading"
                                    @click="handleSubmit('formValidate')"
                                    size="large">
                                计算社保费
                            </Button>

                            <Button style="color:#fff;
                            background:#c2c2c2;"
                                    @click="handleReset('formValidate')"
                                    size="large">
                                重置
                            </Button>
                        </div>


                    </Form>

                    <div class="show_shuo_m">
                        <h4>社保费计算规则：</h4>
                        <p>
                            1. 当税前工资<= 该参保城市的最低缴费基数 社保
                            费将会按照最低基数进行计算
                        </p>
                        <p>
                            2. 当该参保城市 最低缴费基数 < 税前工资 < 最高缴费基数 将会按照填写的税前工资进行计算
                        </p>

                        <p>
                            3. 当税前工资>该参保城市的最高缴费基数 社保费将会按照最高基数进行计算
                        </p>
                    </div>


                </div>
                <div class="counter_content_right">
                    <div v-if="empty" style="width: 100%;
                    text-align: center;font-size: 14px;color:#999;
                    line-height: 590px;">
                        <img style="width: 100px;height: 87px;" src="../../../assets/images/empty-js-search.png" alt="">
                        暂无数据
                    </div>


                    <div class="loading_ajax" v-if="loading_ajax" style="width: 100%;height: 300px;margin-top:200px;">
                        <img src="../../../assets/images/LR_loading.gif"
                             style="display: block;margin: 0 auto;"
                             alt="loading">
                        <p style="width: 100%;height: 30px;line-height: 30px;
                        font-size: 14px;color:#666;
                        text-align: center;">计算中...</p>
                    </div>


                    <div v-if="flag">
                        <h4 v-html="form.location_name||'-'"></h4>
                        <div class="counter_content_right_table">
                            <table cellpadding="0" cellspacing="0">
                                <thead>
                                <tr>
                                    <th rowspan="2" style="width: 80px;">险种</th>
                                    <th rowspan="2" style="width: 80px;">缴费基数</th>
                                    <th colspan="2" style="background:#fff8f9;">企业缴费</th>
                                    <th colspan="2" style="background:#fdeff1;">个人缴费</th>
                                    <th rowspan="2" style="width: 80px;">小计</th>

                                </tr>
                                <tr>
                                    <th style="background:#fff8f9;">缴费比例</th>
                                    <th style="background:#fff8f9;">缴费金额</th>
                                    <th style="background:#fdeff1;">缴费比例</th>
                                    <th style="background:#fdeff1;">缴费金额</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>养老</td>
                                    <td>{{items.personalCals.medical.cardinal}}</td>

                                    <td style="background:#fff8f9;">
                                        {{items.enterpriseCals.old.percent}}
                                    </td>
                                    <td style="background:#fff8f9;">{{items.enterpriseCals.old.money}}</td>

                                    <td style="background:#fdeff1;">{{items.personalCals.old.percent}}</td>
                                    <td style="background:#fdeff1;">{{items.personalCals.old.money}}</td>


                                    <td>
                                        {{total.old}}
                                    </td>
                                </tr>
                                <tr>
                                    <td>工伤</td>
                                    <td>{{items.enterpriseCals.injury.cardinal}}</td>

                                    <td style="background:#fff8f9;">{{items.enterpriseCals.injury.percent}}
                                    </td>
                                    <td style="background:#fff8f9;">{{items.enterpriseCals.injury.money}}</td>

                                    <td style="background:#fdeff1;">-</td>
                                    <td style="background:#fdeff1;">0.00</td>


                                    <td>{{items.enterpriseCals.injury.money}}</td>
                                </tr>
                                <tr>
                                    <td>失业</td>
                                    <td>{{items.personalCals.job.cardinal}}</td>


                                    <td style="background:#fff8f9;">{{items.enterpriseCals.job.percent}}</td>
                                    <td style="background:#fff8f9;">{{items.enterpriseCals.job.money||'0.00'}}</td>

                                    <td style="background:#fdeff1;">{{items.personalCals.job.percent}}</td>
                                    <td style="background:#fdeff1;">{{items.personalCals.job.money||'0.00'}}</td>


                                    <td>
                                        {{total.job}}
                                    </td>
                                </tr>
                                <tr>
                                    <td>生育</td>
                                    <td>{{items.enterpriseCals.bear.cardinal || '-'}}</td>


                                    <td style="background:#fff8f9;">{{items.enterpriseCals.bear.percent}}</td>
                                    <td style="background:#fff8f9;">{{items.enterpriseCals.bear.money||'0.00'}}</td>


                                    <td style="background:#fdeff1;">-</td>
                                    <td style="background:#fdeff1;">0.00</td>

                                    <td>{{total.bear}}</td>
                                </tr>
                                <tr>
                                    <td>医疗</td>
                                    <td>{{items.personalCals.medical.cardinal}}</td>


                                    <td style="background:#fff8f9;">{{items.enterpriseCals.medical.percent}}
                                    </td>
                                    <td style="background:#fff8f9;">{{items.enterpriseCals.medical.money}}</td>

                                    <td style="background:#fdeff1;">
                                        {{items.personalCals.medical.percent}}
                                    </td>
                                    <td style="background:#fdeff1;">
                                        {{items.personalCals.medical.money}}
                                    </td>


                                    <td>
                                        {{total.medical}}
                                    </td>
                                </tr>
                                <tr>
                                    <td>大额医疗</td>
                                    <td>{{items.enterpriseCals.big_medical.cardinal}}</td>
                                    <td style="background:#fff8f9;">{{items.enterpriseCals.big_medical.percent}}
                                    </td>
                                    <td style="background:#fff8f9;">{{items.enterpriseCals.big_medical.money}}
                                    </td>

                                    <td style="background:#fdeff1;">{{items.personalCals.big_medical.percent}}
                                    </td>
                                    <td style="background:#fdeff1;">{{items.personalCals.big_medical.money}}
                                    </td>
                                    <td>

                                        {{total.big_medical}}
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">社保（合计）</td>
                                    <td colspan="2" style="color:#333;background:#fff8f9;" v-html="total.t1"></td>
                                    <td colspan="2" style="color:#333;background:#fdeff1;" v-html="total.t2"></td>
                                    <td style="color:#333;" v-html="total.t3"></td>
                                </tr>
                                <tr>
                                    <td>公积金</td>
                                    <td>{{items.personalCals.fund.cardinal || '0.00'}}</td>

                                    <td style="background:#fff8f9;">{{items.enterpriseCals.fund.percent || '0.00'}}</td>
                                    <td style="background:#fff8f9;">{{items.enterpriseCals.fund.money || '0.00'}}</td>

                                    <td style="background:#fdeff1;">{{items.personalCals.fund.percent || '0.00'}}</td>
                                    <td style="background:#fdeff1;">{{items.personalCals.fund.money || '0.00'}}</td>


                                    <td>
                                        {{total.fund}}
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">五险一金（合计）</td>
                                    <td colspan="2"
                                        style="color:#f73143;background:#fff8f9;"

                                        v-html="items.enterpriseTotalMoney"
                                    ></td>
                                    <td colspan="2"
                                        style="color:#f73143;background:#fdeff1;"
                                        v-html="items.personalTotalMoney"
                                    >

                                    </td>
                                    <td style="color:#f73143;"
                                        v-html="items.allTotalMoney"
                                    >
                                    </td>
                                </tr>

                                </tbody>

                            </table>

                            <Button type="error"
                                    @click="doIt"
                                    class="buy_shebao" size="large" style="">
                                自助购买社保
                            </Button>
                        </div>
                    </div>


                </div>

            </div>
        </div>

        <div class="counter_bottom">
            <div class="counter_bottom_content">

                <div class="counter_bottom_content_child">
                    <Row>
                        <Col span="6" v-for="item,index in lists">
                            <div class="counter_bottom_content_c" :class="{active_c:index===3}">
                                <div
                                    class="counter_bottom_content_c_icon"
                                    :class="'icon' + index"
                                ></div>

                                <p :class="'p'+index" v-html="item.str"></p>
                            </div>
                        </Col>
                    </Row>

                </div>

            </div>


        </div>


    </div>
</template>

<script>
    import baseHeader from '../../components/baseHeader'

    export default {
        name: "counter",
        components: {baseHeader},
        data() {
            const empty = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('该项为必填项'));
                } else {
                    callback();
                }
            };

            return {
                isShow: true,
                empty: true,
                flag: false,
                loading_ajax: false,
                buttonLoading: false,
                //表格数据
                items: {//["old", "medical", "big_medical", "injury", "job", "bear", "fund"]
                    personalCals: {
                        old: {},
                        medical: {},
                        big_medical: {},
                        injury: {},
                        job: {},
                        bear: {},
                        fund: {},


                    },
                    enterpriseCals: {
                        old: {},
                        medical: {},
                        big_medical: {},
                        injury: {},
                        job: {},
                        bear: {},
                        fund: {},

                    }

                },
                formValidate: {
                    city: '',
                    cityLists: '',
                    hukou: '',
                    hukouLists: '',
                    base: ''

                },
                ruleValidate: {
                    city: [
                        {validator: empty, trigger: 'change'}
                    ],
                    hukou: [
                        {validator: empty, trigger: 'change'}
                    ],
                    base: [
                        {validator: empty, trigger: 'change'}
                    ]
                },
                lists: [
                    {
                        str: '互联网个人社保专业\n' +
                        '服务领跑者\n' +
                        '城市生活的幸福保障'
                    },
                    {
                        str: '  ' + '全国8城直营服务北京、\n' +
                        '深圳、上海、广州、杭州、\n' +
                        '厦门、重庆、成都'
                    },
                    {
                        str: '国家级资质认证\n' +
                        '正规 放心'
                    },
                    {
                        str: '支付便捷微信、支付宝\n' +
                        '均可付款\n' + '<br>' +
                        '简单安全'
                    }
                ],
                dataHuKouLists: {},
                form: {
                    appkey: window.getUrl().key_online,
                    location_code: '',
                    location_name: '',
                    base: '',
                    hukou_type: '',
                    hukou_title: '',
                    vendor_id: ''

                },
                total: {
                    old: 0,
                    fund: 0,
                    medical: 0,
                    big_medical: 0,
                    bear: 0,
                    injury: 0,
                    job: 0,
                    t1: 0,
                    t2: 0,
                    t3: 0

                },
                num: 0,
                cityListsNew: [
                    {
                        title: '热门',
                        lists: [
                            {
                                "code": "110000",
                                "title": "北京",
                                "initial": "B",
                                "vendor_id": "1013"
                            },
                            {
                                "code": "310000",
                                "title": "上海",
                                "initial": "S",
                                "vendor_id": "1097"
                            },
                            {
                                "code": "440100",
                                "title": "广州市",
                                "initial": "G",
                                "vendor_id": "1022"
                            },
                            {
                                "code": "440300",
                                "title": "深圳市",
                                "initial": "S",
                                "vendor_id": "1021"
                            },
                            {
                                "code": "330100",
                                "title": "杭州市",
                                "initial": "H",
                                "vendor_id": "1077"
                            },
                            {
                                "code": "350200",
                                "title": "厦门市",
                                "initial": "X",
                                "vendor_id": "1075"
                            },
                            {
                                "code": "510100",
                                "title": "成都市",
                                "initial": "C",
                                "vendor_id": "1023"
                            },
                            {
                                "code": "500000",
                                "title": "重庆市",
                                "initial": "C",
                                "vendor_id": "1026"
                            }
                        ],
                        reg: []
                    },
                    {
                        title: 'A-H',
                        lists: [],
                        reg: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
                    },
                    {
                        title: 'I-N',
                        lists: [],
                        reg: ['i', 'j', 'k', 'l', 'm', 'n']
                    },
                    {
                        title: 'O-T',
                        lists: [],
                        reg: ['o', 'p', 'q', 'r', 's', 't']
                    },
                    {
                        title: 'U-Z',
                        lists: [],
                        reg: ['u', 'v', 'w', 'x', 'y', 'z'],

                    }
                ]
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
            getCitys() {
                let _this = this;
                _this.formValidate.cityLists = [];
                _this.dataHuKouLists = {};
                this.$http.get(window.getUrl().queryOptions, {
                    params: {
                        appkey: window.getUrl().key_online
                    }
                }).then((d) => {

                    if (d.code === 22000) {
                        //地址解析
                        d.result.locations.forEach((item) => {

                            //2.1版本需求变更
                            //将户口根据字母分类
                            _this.cityListsNew.forEach((item2, index2) => {
                                if (item2.reg.includes(item.x.toLowerCase())) {
                                    item2.lists = item2.lists.concat(item.radioItems)
                                }
                            });

                            item.radioItems.forEach((itemChild) => {
                                _this.formValidate.cityLists.push({
                                    value: itemChild.code,
                                    label: itemChild.title,
                                    vendor_id: item.vendor_id
                                })
                            })
                        });
                        //户口性质解析
                        _this.dataHuKouLists = d.result.hukouTypes || {};


                    } else {
                        _this.$Notice.error({
                            title: '后台接口报错，请联系管理员修复！',
                        });
                    }
                }).catch((d) => {
                    _this.$Notice.error({
                        title: '后台接口报错，请联系管理员修复！',
                    });
                });

            },
            chooseCity(item) {
                let _this = this;
                this.isShow = true;
                this.formValidate.city = item.title;

                this.form.location_code = item.code;
                this.form.location_name = item.title;
                this.form.vendor_id = item.vendor_id;

                this.form.hukou_title = '';
                this.form.hukou_type = '';

                this.formValidate.hukouLists = [];
                this.formValidate.hukou = "";

                this.dataHuKouLists[item.code].hukou.forEach((item) => {
                    _this.formValidate.hukouLists.push({
                        value: item.code,
                        label: item.title
                    })

                });


            },
            changeCitysTag(index) {
                this.num = index;
            },

            changeSeleCity($event) {//废弃 2.0

                let _this = this;
                this.form.location_code = $event;
                this.form.location_name = this.dataHuKouLists[$event].title;
                this.form.vendor_id = this.dataHuKouLists[$event].vendor_id;

                this.form.hukou_title = '';
                this.form.hukou_type = '';

                this.formValidate.hukouLists = [];
                this.formValidate.hukou = "";

                this.dataHuKouLists[$event].hukou.forEach((item) => {
                    _this.formValidate.hukouLists.push({
                        value: item.code,
                        label: item.title
                    })

                });
            },
            changeSeleHukou($event) {
                let _this = this;
                this.form.hukou_type = $event;
                this.formValidate.hukouLists.forEach((item) => {
                    if (item.value === $event) {
                        _this.form.hukou_title = item.label || "";
                    }
                });
            },
            handleSubmit(name) {
                let _this = this;
                //console.log(_this.$refs[name])
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        _this.form.base = _this.formValidate.base;
                        _this.buttonLoading = true;
                        _this.flag = false;
                        _this.loading_ajax = true;
                        _this.empty = false;

                        _this.$http.get(window.getUrl().compute, {
                            params: _this.form
                        }).then((d) => {
                            _this.buttonLoading = false;
                            _this.loading_ajax = false;
                            _this.flag = true;
                            if (d.code === 22000) {
                                // _this.items = d.result.items || {};

                                /**
                                 * 这么多字段一个一个判断 真烦人
                                 *
                                 */


                                let arrLists = ["old", "medical", "big_medical", "injury", "job", "bear", "fund"];

                                //私人的数据处理
                                //arrLists
                                _this.total.t1 = 0;
                                _this.total.t2 = 0;
                                _this.total.t3 = 0;

                                _this.items.personalTotalMoney = _this.toFixed2Fun(d.result.items.personalTotalMoney);
                                _this.items.enterpriseTotalMoney = _this.toFixed2Fun(d.result.items.enterpriseTotalMoney);
                                _this.items.allTotalMoney = _this.toFixed2Fun(d.result.items.allTotalMoney);


                                arrLists.forEach((itemK) => {//d.result.items.personalCals[itemK]

                                    if (!d.result.items.personalCals[itemK]) {
                                        d.result.items.personalCals[itemK] = {
                                            money: '0',
                                            percent: '0',
                                        }
                                    }

                                    if (itemK !== 'fund') {
                                        _this.total.t2 += parseInt((d.result.items.personalCals[itemK].money || 0) * 100);
                                    }


                                    _this.items.personalCals[itemK].money = _this.toFixed2Fun(d.result.items.personalCals[itemK].money);
                                    _this.items.personalCals[itemK].cardinal = _this.toFixed2Fun(d.result.items.personalCals[itemK].cardinal);
                                    _this.items.personalCals[itemK].percent = _this.toFixed2Fun(d.result.items.personalCals[itemK].percent) + '%';


                                });
                                //企业数据处理


                                arrLists.forEach((itemK) => {//d.result.items.personalCals[itemK]

                                    if (!d.result.items.enterpriseCals[itemK]) {
                                        d.result.items.enterpriseCals[itemK] = {
                                            money: '0',
                                            percent: '0',
                                        }
                                    }
                                    if (itemK !== 'fund') {
                                        _this.total.t1 += parseInt((d.result.items.enterpriseCals[itemK].money || 0) * 100);
                                    }


                                    _this.items.enterpriseCals[itemK].money = _this.toFixed2Fun(d.result.items.enterpriseCals[itemK].money);
                                    _this.items.enterpriseCals[itemK].cardinal = _this.toFixed2Fun(d.result.items.enterpriseCals[itemK].cardinal);
                                    _this.items.enterpriseCals[itemK].percent = _this.toFixed2Fun(d.result.items.enterpriseCals[itemK].percent) + '%';

                                });


                                //社保合计
                                _this.total.t3 = _this.toFixed2Fun((_this.total.t1 + _this.total.t2 - 0) / 100);
                                _this.total.t1 = _this.toFixed2Fun(_this.total.t1 / 100);
                                _this.total.t2 = _this.toFixed2Fun(_this.total.t2 / 100);


                                // old: 0,
                                //     fund: 0,
                                //     medical: 0,
                                //     big_medical: 0,
                                //     bear: 0,
                                //     injury: 0,
                                //     job: 0,

                                _this.total.old = _this.toFixed2Fun((_this.items.enterpriseCals.old.money - 0) + (_this.items.personalCals.old.money - 0));
                                _this.total.fund = _this.toFixed2Fun((_this.items.enterpriseCals.fund.money - 0) + (_this.items.personalCals.fund.money - 0));
                                _this.total.medical = _this.toFixed2Fun((_this.items.enterpriseCals.medical.money - 0) + (_this.items.personalCals.medical.money - 0));
                                _this.total.big_medical = _this.toFixed2Fun((_this.items.enterpriseCals.big_medical.money - 0) + (_this.items.personalCals.big_medical.money - 0));
                                _this.total.bear = _this.toFixed2Fun((_this.items.enterpriseCals.bear.money - 0) + (_this.items.personalCals.bear.money - 0));
                                _this.total.injury = _this.toFixed2Fun((_this.items.enterpriseCals.injury.money - 0) + (_this.items.personalCals.injury.money - 0));
                                _this.total.job = _this.toFixed2Fun((_this.items.enterpriseCals.job.money - 0) + (_this.items.personalCals.job.money - 0));


                            } else {
                                _this.$Notice.error({
                                    title: '后台接口报错，请联系管理员修复1！',
                                });
                            }

                        }).catch((d) => {
                            _this.buttonLoading = false;
                            _this.loading_ajax = false;
                            _this.$Notice.error({
                                title: '后台接口报错，请联系管理员修复error！',
                            });

                        });


                    }
                })
            },
            handleReset(name) {
                this.$refs[name].resetFields();
                this.empty = true;
                this.flag = false;
                this.loading_ajax = false;

            },
            toFixed2Fun(x) {
                var f = parseFloat(x);
                if (isNaN(f)) {
                    return false;
                }
                var f = Math.round(x * 100) / 100;
                var s = f.toString();
                var rs = s.indexOf('.');
                if (rs < 0) {
                    rs = s.length;
                    s += '.';
                }
                while (s.length <= rs + 2) {
                    s += '0';
                }
                return s;

            }

        },
        mounted() {
            //获取城市列表
            this.getCitys();

        }
    }
</script>

<style scoped type="text/less" lang="less">

    .counter {
        min-height: 500px;

        .counter_wrap {
            width: 100%;
            background: rgba(245, 245, 245, .3);
            padding-bottom: 15px;

        }

        .counter_content {
            padding-top: 60px;
            box-sizing: border-box;
            .counter_content_left {
                float: left;
                width: 330px;
                height: 620px;
                background-color: #ffffff;
                box-shadow: 2px 3px 24px 0px rgba(96, 96, 96, 0.11);
                margin-right: 14px;
                padding: 38px 30px 0 30px;
                box-sizing: border-box;
                h3 {
                    width: 200px;
                    height: 24px;
                    line-height: 24px;
                    font-size: 18px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #f73143;
                    padding-left: 30px;
                    margin-bottom: 20px;
                    background: url("../../../assets/images/counter/jisuanqi@2x.png") no-repeat left center;
                    -webkit-background-size: 21px 22px;
                    background-size: 21px 22px;
                }

            }
            .counter_content_right {
                float: right;
                width: 656px;
                height: 620px;
                background-color: #ffffff;
                box-shadow: 2px 3px 24px 0px rgba(96, 96, 96, 0.11);
                padding: 21px 24px;
                box-sizing: border-box;
                h4 {
                    width: 200px;
                    height: 20px;
                    margin-bottom: 20px;
                    line-height: 20px;
                    font-size: 16px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #999999;
                    padding-left: 20px;
                    box-sizing: border-box;
                    background: url("../../../assets/images/counter/dingwei@2x.png") no-repeat left center;
                    -webkit-background-size: 13px 16px;
                    background-size: 13px 16px;
                }
                .counter_content_right_table {
                    width: 100%;
                    table {
                        width: 100%;
                        border-collapse: collapse; /*关键代码*/
                        border: 1px solid #e5e5e5;
                        thead {
                            border: none;
                            th {
                                font-size: 14px;
                                font-weight: normal;
                                font-stretch: normal;
                                letter-spacing: 0px;
                                color: #333333;
                                text-align: center;
                                height: 30px;
                                padding: 5px 0;
                                border-right: 1px solid #e5e5e5;
                                border-bottom: 1px solid #e5e5e5;
                            }
                        }
                        tbody {
                            td {
                                font-size: 14px;
                                font-weight: normal;
                                font-stretch: normal;
                                letter-spacing: 0px;
                                color: #666666;
                                text-align: center;
                                height: 30px;
                                padding: 8px 0;
                                border-right: 1px solid #e5e5e5;
                                border-bottom: 1px solid #e5e5e5;
                            }
                        }

                    }
                }
            }
        }
        .counter_bottom {
            position: relative;
            width: 100%;
            height: 130px;
            background-color: transparent;
            .counter_bottom_content {
                width: 100%;
                min-height: 200px;
                padding-top: 100px;
                box-sizing: border-box;
                .counter_bottom_content_child {
                    margin: 0 auto;
                    width: 1000px;
                    background: #ffffff;
                    height: 100px;
                    .counter_bottom_content_c {
                        position: relative;
                        width: 100%;
                        height: 100px;
                        border-left: 1px solid #f5f5f5;
                        /*padding-top:20px ;*/
                        box-sizing: border-box;
                        .counter_bottom_content_c_icon {
                            position: absolute;
                            top: -30px;
                            left: 100px;
                            width: 46px;
                            height: 46px;
                            border-radius: 50%;
                        }
                        .icon0 {
                            background: url("../../../assets/images/counter/1@2x.png") no-repeat center;
                            -webkit-background-size: 46px 42px;
                            background-size: 46px 42px;
                        }
                        .icon1 {
                            background: url("../../../assets/images/counter/2@2x.png") no-repeat center;
                            -webkit-background-size: 46px 42px;
                            background-size: 46px 42px;

                        }
                        .icon2 {
                            background: url("../../../assets/images/counter/3@2x.png") no-repeat center;
                            -webkit-background-size: 46px 42px;
                            background-size: 46px 42px;

                        }
                        .icon3 {
                            background: url("../../../assets/images/counter/4@2x.png") no-repeat center;
                            -webkit-background-size: 46px 42px;
                            background-size: 46px 42px;

                        }
                        p {
                            line-height: 25px;
                            font-size: 14px;
                            letter-spacing: 0px;
                            color: #999999;
                            text-align: center;
                            margin: 0 auto;
                            padding-top: 20px;
                            box-sizing: border-box;
                        }
                        .p0 {
                            width: 127px;
                        }
                        .p1 {
                            width: 158px;
                            text-align: center;

                        }
                        .p2 {
                            width: 110px;
                        }
                        .p3 {
                            width: 141px;
                        }
                    }
                    .active_c {
                        border-right: 1px solid #f5f5f5;
                    }
                }
            }

        }
    }

    .button_lists {
        width: 100%;
        box-sizing: border-box;
        button {
            display: block;
            width: 168px;
            border-radius: 21px;
            font-size: 18px;
            letter-spacing: 0px;
            color: #ffffff;
            text-align: center;
            margin: 20px auto 0;

        }
    }

    .show_shuo_m {
        width: 100%;
        padding-top: 40px;
        box-sizing: border-box;
        h4 {
            width: 120px;
            height: 15px;
            font-size: 14px;
            letter-spacing: 0px;
            color: #333333;
            text-align: left;
            margin-bottom: 17px;
            font-weight: 400;
        }
        p {
            width: 275px;
            line-height: 25px;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #999999;
            text-align: left;
            margin: 0;

        }
    }

    .buy_shebao {
        width: 214px;
        float: right;
        text-align: center;
        margin-top: 32px;
        border-radius: 21px;
        font-size: 18px;
        letter-spacing: 0px;
        color: #ffffff;

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
        background: url("../../../assets/images/modal_bg.png") no-repeat center top;
        .erweima_modal_del {
            position: absolute;
            cursor: pointer;
            right: 20px;
            top: 20px;
            width: 14px;
            height: 14px;
            background: url("../../../assets/images/modal_del.png") no-repeat center;
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
        background: url("../../../assets/images/modal_bg.png") no-repeat center top;
        .erweima_modal_del {
            position: absolute;
            cursor: pointer;
            right: 20px;
            top: 20px;
            width: 14px;
            height: 14px;
            background: url("../../../assets/images/modal_del.png") no-repeat center top;
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

    //2.1新需求
    .wrap_input_city {
        position: absolute;
        top: 0;
        left: 0;
        width: 190px;
        height: 36px !important;
        background: transparent;
        z-index: 20;
        cursor: pointer;
        .input_city_lists {
            position: absolute;
            top: 35px;
            left: 0;
            width: 430px;
            min-height: 160px;
            background-color: #ffffff;
            border: solid 1px #e5e5e5;
            overflow: hidden;
            z-index: 100;

            .input_city_lists_header {
                width: 100%;
                height: 42px;
                border-bottom: 1px solid #e5e5e5;
                .input_city_lists_header_item {
                    display: inline-block;
                    width: 33px;
                    height: 42px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 14px;
                    color: #666;
                    border-bottom: 2px solid transparent;
                    box-sizing: border-box;
                    margin: 0 20px;
                    font-weight: 500;
                }
                .active_c {
                    color: #f73143;
                    border-color: #f73143;
                }
            }
            .input_city_lists_content {
                width: 100%;
                min-height: 116px;
                background: #fff;
                padding-top: 15px;
                padding-bottom: 15px;
                box-sizing: border-box;
                a {
                    display: inline-block;
                    min-width: 66px;
                    line-height: 30px;
                    height: 30px;
                    text-align: left;
                    font-size: 13px;
                    color: #333;
                    box-sizing: border-box;
                    margin: 0 20px;
                    &:hover {
                        color: #f73143;
                    }
                }

            }
        }
        .none {
            display: none;
        }

    }


</style>



// WEBPACK FOOTER //
// src/views/pc/counter/index.vue
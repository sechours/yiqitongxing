
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// Vue.config.productionTip = false
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from './axios'
import store from './store/index'
import commonComponents from './index.js'
import apiport from './apiport/index'
import './assets/index.css'

import 'babel-polyfill'
import Es6Promise from 'es6-promise'

Es6Promise.polyfill()


window['getUrl'] = () => {
    return apiport;
}


Vue.use(commonComponents);
Vue.config.productionTip = false
Vue.prototype.$http = axios;


//过滤器 保留两位小数

Vue.filter('toFixed2Fun', function (x) {

    if (!x) {
        return '0.00'

    }

    var f = parseFloat(x);
    if (isNaN(f)) {
        return '0.00';
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

});


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    methods: {
        fetchDate() {
            window.scrollTo(0, 0);
        }
    },
    components: {App},
    template: '<App/>',
    watch: {
        "$route": "fetchDate"
    }


});
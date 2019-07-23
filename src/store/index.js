import Vue from 'vue'
import "babel-polyfill"
import Vuex from 'vuex'
import url from '../apiport/index'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        modalCom: false,
        modal: false,
        iframe: false,
        src: ''

    },
    mutations: {
        modalComFun(state, flag) {
            if (flag === 'show') {
                state.modalCom = true;
            } else {
                state.modalCom = false;
            }
        },
        modalFun(state, flag) {
            if (flag === 'show') {
                state.modal = true;
            } else {
                state.modal = false;
            }
        },
        iframeFun(state, flag) {
            if (flag === 'show') {
                state.iframe = true;
                state.src = url.content;
            } else {
                state.iframe = false;
                state.src = "";
            }
        }
    }

})



// WEBPACK FOOTER //
// ./src/store/index.js
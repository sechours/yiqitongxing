import Vue from 'vue'
import Router from 'vue-router'


import Main from '@/views/index'
import Home from '@/views/pc/index'
// import About from '@/views/pc/about'
// import Counter from '@/views/pc/counter'
// import Question from '@/views/pc/question'
// import Insurance from '@/views/pc/insurance'


// import NotFind from '@/views/components/base404.vue'


Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
            redirect: '/index',
            children: [
                {
                    path: 'index',
                    name: 'index',
                    component: Home
                },

                // {
                //     path: 'about',
                //     name: 'about',
                //     component: About
                // },
                // {
                //     path: 'counter',
                //     name: 'counter',
                //     component: Counter
                // },
                // {
                //     path: 'question',
                //     name: "question",
                //     component: Question
                // },
                // //保险大厅落地页
                // {
                //     path: 'insurance',
                //     name: 'insurance',
                //     component: Insurance
                // },
            ],
        },
        // {
        //     path: '*',
        //     component: NotFind,
        //     name: 404
        // }
    ]
})



// WEBPACK FOOTER //
// ./src/router/index.js

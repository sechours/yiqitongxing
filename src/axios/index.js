import axios from 'axios'
import qs from 'qs'
// import Cookies from 'js-cookie'
//创建axios实例

const service = axios.create({
    //baseURL: process.env.BASE_ENV,
    //timeout: 50000,
    // headers: {
    //     'token': Cookies.get("_token", {expires: 1, path: '/'}) || ''
    // }
});

//请求拦截 req 数据处理
service.interceptors.request.use(
    config => {
        //console.log(config)
        // config.headers.token = Cookies.get("_token", {expires: 1, path: '/'});
        if (config.method.toLowerCase() === 'post') {
            config.data = qs.stringify(config.data);
        }
        return config
    },
    error => {
        console.log('axios请求报错:', error)
    }
);


// res 数据处理

service.interceptors.response.use(
    response => {
        // if (response.data.retCode == 0) {
        //     setTimeout(() => {
        //         Cookies.remove('_token');
        //         Cookies.remove("_data");
        //     }, 500)
        // }
        return Promise.resolve(response.data)
    },
    error => {
        //接口报错 跳转到登录页面
        //router.push({path:'/login'})
        // setTimeout(() => {
        //     Cookies.remove('_token');
        //     Cookies.remove("_data");
        // }, 500)
        return Promise.reject(error.response)
    }
);

export default service



// WEBPACK FOOTER //
// ./src/axios/index.js
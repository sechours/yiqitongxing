/**
 * 接口管理处
 * @type {string}
 */

let baseUrl = '/api';
// let appkey = 'uDwn9JicCCsKOBVTuDemRfF8';
let appkey = 'Q5ayPGYzT065SbH8Geo8IMhf';
// const appkey = 'uDwn9JicCCsKOBVTuDemRfF8';

//let NODE_ENV = process.env.NODE_ENV || 'production';

//
// if(NODE_ENV === 'production'){//生产环境
//     appkey = 'Q5ayPGYzT065SbH8Geo8IMhf';
// }else{//开发环境
//     appkey = 'uDwn9JicCCsKOBVTuDemRfF8';
// }





//key_online:'Q5ayPGYzT065SbH8Geo8IMhf'
export default {
    queryOptions: baseUrl + '/shebao.calculate/queryOptions',
    compute: baseUrl + '/shebao.calculate/compute',
    key_online: appkey,
    content: 'https://shebaomeng.udesk.cn/im_client/?web_plugin_id=36110&group_id=56460&channel=%E5%BE%AE%E4%BF%A1'

}




// WEBPACK FOOTER //
// ./src/apiport/index.js
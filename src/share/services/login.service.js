import LibCommonService from './lib-common.service';
import CommonService from './common.service';
import { hasValue, findItem } from './ultility';
const GLOBAL = require('../global.js');
const API = require('../api.js');
const LoginService = {
    GetData: function (params) {
        let api = API.Login.connectToken
        return CommonService.Login(api, params)
    },
}
export default LoginService;
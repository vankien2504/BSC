import AsyncStorage from '@react-native-community/async-storage';
import UserService from "../services/user.service";
const GLOBAL = require('../global.js');
const LoginData = {
    UserData: function (params) {
        return new Promise(
            function (resolve, reject) {
                UserService.GetData(params).then((res) => {
                    let userObject = JSON.parse(res);
                    GLOBAL.userInfo = userObject;
                    try {
                        AsyncStorage.setItem('userInfo', res);
                        resolve(true);
                    } catch (e) {
                        // save error
                        reject(e);
                    }
                }, (error) => {
                    reject(error);
                })

            }
        );
    },

}
export default LoginData;
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import LoginService from "../services/login.service";
const GLOBAL = require('../global.js');
const LoginData = {
    LoginData: function (params) {
        return new Promise(
            function (resolve, reject) {
                LoginService.GetData(params).then((res) => {
                    let tokenObject = JSON.parse(res);
                    try {
                        AsyncStorage.setItem('tokenObject', res);
                        GLOBAL.Token = tokenObject;
                        resolve(true);
                      } catch(e) {
                        // save error
                        reject(e);
                      }
                },(error)=>{
                    reject(error);
                })

        }
        );
    },

}
export default LoginData;
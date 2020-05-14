import { base, loginUrl, loginStatusUrl, loginOutUrl } from '../url'//请求地址
import axios from 'axios'
import qs from 'qs'

/**
 * 登录请求
 */
export default {
    login (user) {
        axios.defaults.withCredentials = true;

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + loginUrl,qs.stringify(user))
            promise.then(function (response) {
                var model = JSON.stringify(response.data.model[0]);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', model)
                // resolve解析返回数据
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    },

    loginStatus () {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + loginStatusUrl,{})
            promise.then(function (response) {
                // resolve解析返回数据
                resolve(response.data.status);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    },

    loginOut () {
        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + loginOutUrl,{})
            promise.then(function (response) {
                // resolve解析返回数据
                resolve(response.data.status);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    }
}
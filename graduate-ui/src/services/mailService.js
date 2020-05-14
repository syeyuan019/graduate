import { base, getCheckCodeUrl } from '../url'//请求地址
import axios from 'axios'
import qs from 'qs'

/**
 * 邮箱验证码请求
 */
export default {
    getCheckCode (email) {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        var data = {
            email: email
        }
        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + getCheckCodeUrl,qs.stringify(data))
            promise.then(function (response) {
                // resolve解析返回数据
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    }
}
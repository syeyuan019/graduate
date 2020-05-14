import { base, registerUrl } from '../url'//请求地址
import axios from 'axios'
import qs from 'qs'

/**
 * 注册请求
 */
export default {
    register (user) {
        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + registerUrl,qs.stringify(user))
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
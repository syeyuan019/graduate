import { base, getPictureUrl } from '../url'//请求地址
import axios from 'axios'

/**
 * 
 */
export default {
    getAddress () {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + getPictureUrl,{})
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
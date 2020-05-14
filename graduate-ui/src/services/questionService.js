import { base, getQuestionUrl } from '../url'//请求地址
import axios from 'axios'
import qs from 'qs'

/**
 * 题库数据请求
 */
export default {
    getQuestion (list) {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        var form = {
            name: "",
            list: list
        }

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + getQuestionUrl,qs.stringify(form))
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
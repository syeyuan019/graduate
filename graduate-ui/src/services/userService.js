import { 
    base, 
    getEncryptedQuestionUrl,
    setEncryptedQuestionUrl,
    updateUserUrl,
    updatePwdUrl,
    validateUserEncryptedUrl
} from '../url'//请求地址
import axios from 'axios'
import qs from 'qs'

/**
 * 用户请求
 */
export default {
    /**
     * 获取密保问题列表
     */
    getEncryptedQuestion () {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + getEncryptedQuestionUrl,{})
            promise.then(function (response) {
                // resolve解析返回数据
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    },

    /**
     * 获取用户密保问题及答案
     */
    validateUserEncrypted (userName) {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');
        
        var vo = {
            name: userName,
            list: []
        }

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + validateUserEncryptedUrl, qs.stringify(vo))
            promise.then(function (response) {
                // resolve解析返回数据
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    },

    /**
     * 修改用户信息
     */
    updateUser (user) {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + updateUserUrl, qs.stringify(user))
            promise.then(function (response) {
                // resolve解析返回数据
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    },

    /**
     * 修改密码
     */
    updatePwd (user) {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + updatePwdUrl,qs.stringify(user))
            promise.then(function (response) {
                // resolve解析返回数据
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    },

    /**
     * 设置用户密保问题
     */
    setEncryptedQuestion (data) {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + setEncryptedQuestionUrl,qs.stringify(data))
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
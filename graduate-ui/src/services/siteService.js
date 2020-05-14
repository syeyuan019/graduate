import { 
    base, 
    siteOneTypeUrl, 
    siteTwoTypeUrl, 
    getSiteUrl, 
    deleteSiteUrl,
    addSiteUrl,
    updateSiteUrl,
    deleteAllSiteUrl 
} from '../url'//请求地址
import axios from 'axios'
import qs from 'qs'

/**
 * 网址操作请求
 */
export default {
    /**
     * 获取一级目录
     */
   getSiteOneType () {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        // Promise处理axios请求
        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base+siteOneTypeUrl,{})
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
     * 获取二级目录
     */
    getSiteTwoType () {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base+siteTwoTypeUrl,{})
            promise.then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    },

    /**
     * 获取默认目录网址
     */
    getSite (menu) {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base+getSiteUrl,qs.stringify(menu))
            promise.then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    },

    /**
     * 删除网址
     */
    deleteSite (list) {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        var vo = {
            name: '',
            list: list
        }

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + deleteSiteUrl, qs.stringify(vo))
            promise.then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    },

    /**
     * 删除目录下所有网址
     */
    deleteAllSite (list) {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + deleteAllSiteUrl,qs.stringify(list))
            promise.then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    },

    /**
     * 添加网址
     */
    addSite (site) {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + addSiteUrl,qs.stringify(site))
            promise.then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    },

    /**
     * 编辑网址
     */
    updateSite (site) {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + updateSiteUrl,qs.stringify(site))
            promise.then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    }
}
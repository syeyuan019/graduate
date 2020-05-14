import { base, downFileUrl, searchNoteListUrl, deleteNoteUrl } from '../url'//请求地址
import axios from 'axios'
import qs from 'qs'

/**
 * 
 */
export default {
    downFile (name, data) {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        var vo = {
            fileName: name,
            data: data
        }

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + downFileUrl,qs.stringify(vo))
            promise.then(function (response) {
                // resolve解析返回数据
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    },

    getNoteList () {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + searchNoteListUrl,{})
            promise.then(function (response) {
                // resolve解析返回数据
                resolve(response.data);
            })
            .catch(function (error) {
                resolve(error);
            });
        })
    },

    deleteNote (list) {
        axios.defaults.headers.common["token"] = localStorage.getItem('token');
        
        var vo = {
            name: '',
            list: list
        }

        return new Promise ((resolve, reject) => {
            let promise;
            promise = axios.post(base + deleteNoteUrl, qs.stringify(vo))
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
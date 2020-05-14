import React, { Component } from 'react'

import UserMsg from './userMsg'
import UpdatePwd from './updatePwd'
import SetEncryQue from './setEncryQue'
import LoginService from '../../services/loginService';

export default class knowledgeBase extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount () {
        this.getLoginStatus();
    }
    async getLoginStatus () {
        var status = await LoginService.loginStatus();
        if (status === "10") {
            alert("您还未登录，请前往登录！");
            window.location.href = "/login";
        }
        if (status === "11") {
            alert("请重新登录！");
            window.location.href = "/login";
        }
    }

    show = () => {
        if(window.location.pathname === "/personal"){
            return (
                <UserMsg />
            )
        }
        if(window.location.pathname === "/updatePwd"){
            return (
                <UpdatePwd />
            )
        }
        if(window.location.pathname === "/setEncryptedQuestion"){
            return (
                <SetEncryQue />
            )
        }
    }

    render() {
        return (
            <div>
                {this.show()}
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Modal } from 'antd'

import UserService from '../../services/userService'
import Encrypted from './encrypted'
import NewPwd from './newPwd'

export default class encryptedQuestion extends Component {
    constructor () {
        super()
        this.state = {
            flag0: false,
            flag1: true,
            flag2: true,
            time: 3,
            userName: ''
        }
    }

    getNameValue = (e) => {
        this.setState({
            userName: e.target.value
        });
    }

    validateUser = () => {
        this.submitRequest(this.state.userName);
    }
    async submitRequest (userName) {
        var result = await UserService.validateUserEncrypted(userName);
        if(result.status === '7'){
            return (
                Modal.warning({
                    title: '提示信息',
                    content: (
                    <div>
                        <p>此用户不存在！请重新输入用户名</p>
                    </div>
                    ),
                    onOk() {},
                })
            )
        }
        if(result.status === '4'){
            return (
                Modal.warning({
                    title: '提示信息',
                    content: (
                    <div>
                        <p>此用户没有设置密保问题，请使用邮箱方式！</p>
                    </div>
                    ),
                    onOk() {},
                })
            )
        }
        if(result.status === '2'){
            localStorage.setItem('userName', userName);
            this.refs._encrypted.getEncrypted(result.model);
            this.setState({
                flag0: true,
                flag1: false,
                flag2: true
            });
        }
    }

    showChangePwd () {
        this.setState({
            flag0: true,
            flag1: true,
            flag2: false
        });
    }

    hideChange = () => {
        this.setState({
            flag2: true
        });
    }

    render() {
        var self = this.state;

        return (
            <div>
                <div className="userShow" hidden={self.flag0}>
                    <label>用户名：&#12288;</label>
                    <input type="text" autoComplete="off" 
                        value={self.userName || ''} 
                        onChange={this.getNameValue}  /><br /><br />
                    <button onClick={this.validateUser} className="userButton">下一步</button>
                </div>

                <Encrypted flag1={self.flag1} ref="_encrypted" parent={this}/>
                <NewPwd flag2={self.flag2} hideChange={this.hideChange} />
                
            </div>
        )
    }
}

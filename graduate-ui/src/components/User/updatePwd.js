import React, { Component } from 'react'
import { Modal } from 'antd'
import userService from '../../services/userService';

/**
 * 用户更改密码组件
 */
export default class updatePwd extends Component {
    constructor(){
        super()
        this.state = {
            user: {},
            oldPassword: "",
            newPassword: "",
            newPasswordAgain: ""
        }
    }

    /**
     * 获取输入新旧密码
     * @param {*} e 
     */
    getOldValue = (e) => {
        this.setState({
            oldPassword: e.target.value
        });
    }
    getNewValue = (e) => {
        this.setState({
            newPassword: e.target.value
        });
    }
    getNewAgainValue = (e) => {
        this.setState({
            newPasswordAgain: e.target.value
        });
    }

    /**
     * 提交更新
     */
    submitUpdate = () => {
        var state = this.state;
        var userId = JSON.parse(localStorage.getItem('userId'));
        this.getUserById(userId);
        var password = state.user.password;
        var bool1 = state.oldPassword !== password;
        var bool2 = state.oldPassword === password;
        var bool3 = state.newPassword !== state.newPasswordAgain;
        var bool4 = state.newPassword === state.newPasswordAgain;
        if (bool1) {
            Modal.warning({
                title: '提示信息',
                content: (
                  <div>
                    <p>旧密码错误！请重新输入</p>
                  </div>
                ),
                onOk() {},
            });
        }
        if (bool3) {
            Modal.warning({
                title: '提示信息',
                content: (
                  <div>
                    <p>确认密码与新密码不一致！请重新输入</p>
                  </div>
                ),
                onOk() {},
            });
        }
        if (bool2 && bool4) {
            var userUpdate = {
                userName: state.user.userName,
                password: state.newPassword
            }
            this.updatePwd(userUpdate);
        }
    }
    async updatePwd (user) {
        var result = await userService.updatePwd(user);
        if (result.status === '2') {
            alert("修改成功！请重新登录")
            window.location.href="/login"
        }
    }

    async getUserById (userId) {
        var userMsg = await userService.getUserById(userId);
        var user = this.state.user;
        user = userMsg;
        this.setState({
            user
        });
    }

    render() {
        return (
            <div>
                <form className="userForm">
                    <br />
                    <label>旧密码：&#12288;&#12288;</label>
                    <input type="text" autoComplete="off" 
                        value={this.state.oldPassword} 
                        onChange={this.getOldValue} /><br />
                    <br /><br />
                    <label>新密码：&#12288;&#12288;</label>
                    <input type="text" autoComplete="off" 
                        value={this.state.newPassword} 
                        onChange={this.getNewValue} /><br />
                    <br /><br />
                    <label>确认密码：&#12288;</label>
                    <input type="text" autoComplete="off" 
                        value={this.state.newPasswordAgain}
                        onChange={this.getNewAgainValue} /><br />
                    <br /><br />
                </form>
                <button onClick={this.submitUpdate} className="ubutton">提&nbsp;交</button>
            </div>
        )
    }
}

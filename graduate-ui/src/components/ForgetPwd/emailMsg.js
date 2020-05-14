import React, { Component } from 'react'

import NewPwd from './newPwd'
import MailService from '../../services/mailService'

const oneSendMsg = "发送验证码";
const twoSendMsg = "重新发送(";
const bracketRight = ")";


export default class emailMsg extends Component {
    constructor () {
        super()
        this.state = {
            flag1: false,
            flag2: true,
            sendMsg: oneSendMsg,
            count: 0,
            userName: '',
            email: "",
            code: "",
            validateCode: ""
        }
    }

    submitCheckCode = () => {
        var code = this.state.code;
        var validateCode = "" + this.state.validateCode;
        if (code === null) {
            alert("请输入验证码！");
        }
        if (code !== null){
            if (code === validateCode) {
                this.setState({
                    flag1: true,
                    flag2: false
                });
            } else {
                alert("验证码错误！请重新输入");
            }
        }
    }

    /**
     * 密码修改提交后，隐藏密码输入区域
     */
    hideChange = () => {
        this.setState({
            flag2: true
        })
    }

    getNameValue = (e) => {
        this.setState({
            userName: e.target.value
        });
    }
    getEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    getCode = (e) => {
        this.setState({
            code: e.target.value
        });
    }

    changeSendName = () => {
        var timeIncrease = 60;
        var sendChange = "";
        this.getCheckCode(this.state.email);
        var interval = setInterval(() => {
            sendChange = twoSendMsg + timeIncrease + bracketRight;
            this.setState({
                sendMsg: sendChange
            });
            timeIncrease = timeIncrease -1;
            if(timeIncrease === 0){
                this.setState({
                    sendMsg: oneSendMsg
                });
                clearInterval(interval);
            };
        }, 1000);
    }

    async getCheckCode (email) {
        var result = await MailService.getCheckCode(email);
        this.setState({
            validateCode: result.msg
        });
    }

    render() {
        const self = this;
        return (
            <div>
                <div hidden={self.state.flag1} className="yzFormE" >
                    <label>用户名：&#12288;</label>
                    <input type="text" autoComplete="off" 
                        value={self.state.userName} 
                        onChange={self.getNameValue}  /><br />
                    <br /><br />
                    <label>邮&#12288;箱：&#12288;</label>
                    <input type="text" autoComplete="off" 
                        value={self.state.email} onChange={self.getEmail} /><br />
                    <br /><br />
                    <label>验证码：&#12288;</label>
                    <input type="text" autoComplete="off"  
                        value={self.state.code} onChange={self.getCode} />&#12288;&#12288;
                    <button className="button1" onClick={self.changeSendName}>{self.state.sendMsg}</button><br />
                    <br /><br />
                    <button onClick={self.submitCheckCode} className="sbutton1">提&nbsp;交</button>
                </div>
                
                <NewPwd flag2={self.state.flag2} hideChange={self.hideChange} userName={this.state.userName}/>

            </div>
        )
    }
}

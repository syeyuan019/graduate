import React, { Component } from 'react'
import { Modal } from 'antd'

import './index.css'
import image from './image/6.jpg'
import LoginService from '../../services/loginService';

const screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const style = {
  height: screenHeight,
  background: `url(${image})`
}

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            labelFlagU: false,
            labelFlagP: false,
            labelFlagY: false,
            expression: '',
            validate: '',
            validateInput: '',
            userName: '',
            password: ''
        }
    }

    componentDidMount () {
        this.renderCode()
    }

    inputFocusU = () => {
        this.setState({
            labelFlagU: true
        })
    }

    inputBlurU =(e) => {
        if(e.target.value === ""){
            this.setState({
                labelFlagU: false
            });
        }
    }

    inputFocusP = () => {
        this.setState({
            labelFlagP: true
        });
    }

    inputBlurP = (e) => {
        if(e.target.value === ""){
            this.setState({
                labelFlagP: false
            });
        }
    }

    inputFocusY = () => {
        this.setState({
            labelFlagY: true
        });
    }

    inputBlurY = (e) => {
        if(e.target.value === ""){
            this.setState({
                labelFlagY: false
            });
        }
    }

    renderCode () {
        // 定义expression和result，expression是字符串，result可能是字符串也可能是数字
        var expression = '', result = '', result1 = '', result2 = '', result3 = '', resultList = [], index = 0;
           
        // 字母库
        var codeNormal = '0123456789';
        var codeNormal1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        // 随机获取字母四个
        for (var i =0; i < 4; i ++) {
            result1 = result1 + codeNormal[Math.round(Math.random()*(codeNormal.length-1))];
            result2 = result2 + codeNormal1[Math.round(Math.random()*(codeNormal1.length-1))];
        }
        for (i =0; i < 4; i ++) {
            if(i % 2 === 0){
                result3 = result3 + codeNormal[Math.round(Math.random()*(codeNormal.length-1))];
            }else {
                result3 = result3 + codeNormal1[Math.round(Math.random()*(codeNormal1.length-1))];
            }
        }

        resultList.push(result1);
        resultList.push(result2);
        resultList.push(result3);
        index = Math.floor((Math.random()*resultList.length)); 
        result = resultList[index]

        // 忽略大小写
        expression = result.toLowerCase();

        this.setState({
            expression: expression,
            validate: result,
            validateInput: ''
        });
    }

    inputChange = (e) => {
        this.setState({
            validateInput: e.target.value
        });
    }

    pictureChange = () => {
        this.renderCode()
    }

    uvalueChange = (e) => {
        this.setState({
            userName: e.target.value
        });
    }
    pvalueChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    login = () => {
        var data = this.state;
        if(data.userName === ''){
            return (
                Modal.warning({
                title: '提示信息',
                content: (
                    <div>
                    <p>请输入用户名！</p>
                    </div>
                ),
                onOk() {},
                })
            )
        }
        if(data.password === ''){
            return (
                Modal.warning({
                title: '提示信息',
                content: (
                    <div>
                    <p>请输入密码！</p>
                    </div>
                ),
                onOk() {},
                })
            )
        }
        if(data.validateInput === ''){
            return (
                Modal.warning({
                title: '提示信息',
                content: (
                    <div>
                    <p>请输入验证码！</p>
                    </div>
                ),
                onOk() {},
                })
            )
        }
        if(data.validateInput !== data.expression){
            this.renderCode();
            return (
                Modal.warning({
                title: '提示信息',
                content: (
                    <div>
                    <p>验证码错误！请重新输入</p>
                    </div>
                ),
                onOk() {},
                })
            )
        }
        var flag = data.userName !== '' 
            && data.password !== '' 
            && data.validateInput !== '' 
            && data.validateInput === data.expression ? true : false;
        if (flag) {
            var user = {
                userName: data.userName,
                password: data.password
            }
            this.getLoginRes(user);
        }
    }
    async getLoginRes (user) {
        var result = await LoginService.login(user);
        var userId = result.model[0].userId;
        var userName = result.model[0].userName;
        localStorage.setItem('userId', userId);
        localStorage.setItem('userName', userName);
        this.judgeStatus(result.status);
    }
    judgeStatus (status) {
        if(status === '5'){
            window.location.href = "/home";
        }
        if(status === '6'){
            return (
                Modal.warning({
                    title: '提示信息',
                    content: (
                    <div>
                        <p>密码错误！请重新输入密码</p>
                    </div>
                    ),
                    onOk() {},
                })
            )
        }
        if(status === '7'){
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
    }

    render() {
        //输入框标签缩放
        const labelStyle1 = {
            fontSize:'12px', width:'100'
        };
        const labelStyle2 = {
            fontSize:'24px', width:'300'
        };
        const labelStyleU = this.state.labelFlagU ? labelStyle1 : labelStyle2;
        const labelStyleP = this.state.labelFlagP ? labelStyle1 : labelStyle2;
        const labelStyleY = this.state.labelFlagY ? labelStyle1 : labelStyle2;

        return (
            <div style={style}>
            <div className="login-box">
                <div className="box">
                    <form className="formLeft">
                        <label htmlFor="name" style={labelStyleU}>用户名/邮箱/电话</label><br />
                        <input type="text" name="name" id="name" autoComplete="off"
                        value={this.state.userName} onChange={this.uvalueChange}
                        onFocus={this.inputFocusU} onBlur={this.inputBlurU}
                        className="input"/><br />
                    </form><br />
                    <form className="formLeft">
                        <label htmlFor="pwd" style={labelStyleP}>密码</label><br />
                        <input type="password" name="pass" id="pwd"
                        value={this.state.password} onChange={this.pvalueChange}
                        onFocus={this.inputFocusP} onBlur={this.inputBlurP}
                        className="input"/><br />
                    </form><br />
                    <form className="formLeft">
                        <label htmlFor="yan" style={labelStyleY}>验证码</label><br />
                        <input type="text" name="valid" id="validationCode"
                        onFocus={this.inputFocusY} onBlur={this.inputBlurY}
                        value={this.state.validateInput} onChange={this.inputChange}
                        className="input yan"/>
                        &#12288;<input type="text" name="validCode" readOnly
                        value={this.state.expression} onChange={this.inputChange}
                        onClick={this.pictureChange}
                        className="yan-picture" autoComplete="off"/>
                    </form>
                    <br />
                    <button className="button" onClick={this.login}>登 录</button><br />
                    <br /><br />
                    <div>
                        <a 
                            href="/register" className="link"
                        >
                            注册账号-->
                        </a>&nbsp;<a 
                            href="forgetPwd" className="link"
                        >
                            忘记密码-->
                        </a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

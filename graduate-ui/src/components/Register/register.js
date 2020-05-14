import React, { Component } from 'react'
import { Modal } from 'antd';

import RegisterService from '../../services/registerService'
import './index.css'
import img1 from './image/invisible0.jpg'
import img2 from './image/visible0.jpg'

export default class index extends Component {
    constructor(){
        super()
        this.state = {
            flag1: true,
            flag2: true,
            flag3: true,
            flag4: true,
            flag5: true,
            flag6: true,
            flag7: false,
            flag8: false,
            user: {
                userName: '',
                password: '',
                email: '',
                mobile: '',
                herb: ''
            },
            time: 3,
            img: img1
        }
    }

    /**
     * 标签变换
     */
    onFocusFlag1 = () => {
        this.setState({
            flag1: false
        });
    }
    onBlurFlag1 = () => {
        this.setState({
            flag1: true
        });
        var userName = this.state.user.userName;
        var reg = /^[\u4e00-\u9fa50-9a-z\w]{6,}$/; // [\u4e00-\u9fa50-9] \w
        if (!reg.test(userName)) {
            Modal.warning({
                title: '提示信息',
                content: (
                  <div>
                    <p>请输入6位以上中文、英文、数字、下划线、特殊字符的任意组合！</p>
                  </div>
                ),
                onOk() {},
            });
        }
    }
    onFocusFlag2 = () => {
        this.setState({
            flag2: false
        });
    }
    onBlurFlag2 = () => {
        this.setState({
            flag2: true
        });
        var password = this.state.user.password;
        var reg = /^[a-z0-9\W_!@#$%^&*`~()-+=]{6,}$/; 
        if (!reg.test(password)) {
            Modal.warning({
                title: '提示信息',
                content: (
                  <div>
                    <p>请输入6位以上英文(小写)、数字、特殊字符混合密码！</p>
                  </div>
                ),
                onOk() {},
            });
        }
    }
    onFocusFlag3 = () => {
        this.setState({
            flag3: false
        })
    }
    onBlurFlag3 = () => {
        this.setState({
            flag3: true
        });
        var email = this.state.user.email;
        // var reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/; /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
        var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/; 
        if (!reg.test(email)) {
            Modal.warning({
                title: '提示信息',
                content: (
                  <div>
                    <p>请输入正确的邮箱格式！</p>
                  </div>
                ),
                onOk() {},
            });
        }
    }
    onFocusFlag4 = () => {
        this.setState({
            flag4: false
        });
    }
    onBlurFlag4 = () => {
        this.setState({
            flag4: true
        });
        var mobile = this.state.user.mobile;
        var reg = /^[0-9]{11}$/;   /*定义验证表达式*/
        if (!reg.test(mobile)) {
            Modal.warning({
                title: '提示信息',
                content: (
                  <div>
                    <p>请输入11位纯数字！</p>
                  </div>
                ),
                onOk() {},
            });
        }
    }
    onFocusFlag5 = () => {
        this.setState({
            flag5: false
        });
    }
    onBlurFlag5 = () => {
        this.setState({
            flag5: true
        });
        var herb = this.state.user.herb;
        var reg = /^[\u4e00-\u9fa5]{1,}$/; 
        if (!reg.test(herb)) {
            Modal.warning({
                title: '提示信息',
                content: (
                  <div>
                    <p>请输入中文！</p>
                  </div>
                ),
                onOk() {},
            });
        }
    }

    /**
     * 获取输入值
     */
    getNameValue = e => {
        let user = this.state.user;
        user.userName = e.target.value;
        this.updataState(user);
    }
    updataState = (user) => {
        this.setState({
            user
        });
    }
    getPwdValue = e => {
        let user = this.state.user;
        user.password = e.target.value;
        this.updataState(user);
    }
    getEmailValue = e => {
        let user = this.state.user;
        user.email = e.target.value;
        this.updataState(user);
    }
    getMobileValue = e => {
        let user = this.state.user;
        user.mobile = e.target.value;
        this.updataState(user);
    }
    getHerbValue = e => {
        let user = this.state.user;
        user.herb = e.target.value;
        this.updataState(user);
    }

    changePassword = () => {
        if (this.state.img === img1) {
            this.setState({
                img: img2
            });
            document.getElementById("pwd").type="text";
        }
        if (this.state.img === img2) {
            this.setState({
                img: img1
            });
            document.getElementById("pwd").type="password";
        }
    }

    showModel (msg) {
        Modal.warning({
            title: '提示信息',
            content: (
              <div>
                <p>{msg}</p>
              </div>
            ),
            onOk() {},
        });
    }

    submitRegister = () => {
        var user = this.state.user;
        if (user.userName === "" || user.userName === undefined) {
            return this.showModel("请输入用户名！");
        } else {
            this.setState({
                user: {
                    userName: user.userName
                }
            });
        }
        if (user.password === "" || user.password === undefined) {
            return this.showModel("请输入密码！");
        } else {
            this.setState({
                user: {
                    password: user.password
                }
            });
        }
        if (user.email === "" || user.email === undefined) {
            return this.showModel("请输入邮箱！");
        }
        if (user.mobile === "" || user.mobile === undefined) {
            return this.showModel("请输入手机号！");
        }
        if (user.herb === "" || user.herb === undefined) {
            return this.showModel("请输入中药！");
        } else {
            this.registerResult(user);
        } 
    }
    async registerResult (user) {
        var result = await RegisterService.register(user);
        if (result.status === '8') {
            this.showModel("用户名已存在！请重新设置");
        }
        if (result.status === '12') {
            this.setState ({
                flag6: false,
                flag7: true,
                flag8: true
            });
            var timeIncrease = 3
            setInterval(() => {
                this.setState({
                    time: timeIncrease--
                })
                if(this.state.time === 0){
                    window.location.href = "/login";
                }
            }, 1000);
        }
        if (result.status === '13') { 
            this.showModel("注册失败！请重试");
            this.setState({
                user: {
                    userName: '',
                    password: '',
                    email: '',
                    mobile: '',
                    herb: ''
                }
            });
        }
    }

    render() {   
        return (
            <div  >
                <a hidden={this.state.flag8} href="/login" className="rea1" >返回</a>
                <br /><br />
                <div  hidden={this.state.flag7} >
                <form className="reform" >
                    <label className="relabel" >用户名：&#12288;</label>

                    <input type="text" autoComplete="off" className="reinput1" 
                        value={this.state.user.userName  || '' }
                        onFocus={this.onFocusFlag1} onBlur={this.onBlurFlag1}
                        onChange={this.getNameValue} 
                        />&#12288;<br />

                    <span className="remark" hidden={this.state.flag1} >
                        请输入6位以上中文、英文、数字及下划线任意组合
                    </span><br /><br />


                    <label className="relabel" >密&#12288;码：&#12288;</label>
                    <input type="password" autoComplete="off" className="reinput1" 
                        value={this.state.user.password  || '' } id="pwd"
                        onFocus={this.onFocusFlag2} onBlur={this.onBlurFlag2} 
                        onChange={this.getPwdValue} />
                    <img alt="" src={this.state.img} 
                        className="pwdImg" onClick={this.changePassword}/>&#12288;<br />
                    <span className="remark" hidden={this.state.flag2}>
                        请输入6位以上英文、数字、特殊字符(._+!#@-)混合
                    </span><br /><br />


                    <label className="relabel" >邮&#12288;箱：&#12288;</label>

                    <input type="text" autoComplete="off" className="reinput1" 
                        value={this.state.user.email  || '' }
                        onFocus={this.onFocusFlag3} onBlur={this.onBlurFlag3} 
                        onChange={this.getEmailValue} />&#12288;<br />

                    <span className="remark" hidden={this.state.flag3}>
                        请输入格式标准的邮箱，可用于登录                  
                    </span><br /><br />
                    

                    <label className="relabel" >手机号：&#12288;</label>

                    <input type="text" autoComplete="off" className="reinput1" 
                        value={this.state.user.mobile  || '' } maxLength="11"
                        onFocus={this.onFocusFlag4} onBlur={this.onBlurFlag4} 
                        onChange={this.getMobileValue} />&#12288;<br />

                    <span className="remark" hidden={this.state.flag4}>
                        请输入11位手机号，可用于登录 
                    </span><br /><br />


                    <label className="relabel" >中&#12288;药：&#12288;</label>

                    <input type="text" autoComplete="off" className="reinput1" 
                        value={this.state.user.herb  || '' }
                        onFocus={this.onFocusFlag5} onBlur={this.onBlurFlag5} 
                        onChange={this.getHerbValue} />&#12288;<br />

                    <span className="remark" hidden={this.state.flag5}>
                        选一味自己喜欢的中草药吧
                    </span>
                </form>
                <button onClick={this.submitRegister} className="rebutton">提&nbsp;交</button>
                </div>
                <div hidden={this.state.flag6} className="hintMsg">
                        <span>
                            提示：
                        </span><br /><br />&#12288;
                        &#12288;<span>
                            注册成功！即将前往登录，倒计时({this.state.time})秒
                        </span><br /><br />
                        &#12288;&#12288;<a href="/login" alt="">点击此处，直接跳转</a>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Modal } from 'antd'

import userService from '../../services/userService';

export default class newPwd extends Component {
    constructor (props) {
        super(props)
        this.state=({
            flag3: true,
            time: 3,
            newPassword: '',
            newPasswordAgain: ''
        })
    }

    getNewPwdValue = (e) => {
        this.setState({
            newPassword: e.target.value
        });
    }
    getNewAgainValue = (e) => {
        this.setState({
            newPasswordAgain: e.target.value
        });
    }

    submitNewPwd = () => {
        var state = this.state;
        if (state.newPassword !== state.newPasswordAgain) {
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
        if (state.newPassword === state.newPasswordAgain) {
            var user = {
                userName: this.props.userName,
                password: state.newPassword
            };
            this.updatePwd(user);
        }
    }
    async updatePwd (user) {
        var result = await userService.updatePwd(user);
        if (result.status === '2') {
            this.tranShow();
        }
    }
    tranShow = () => {
        this.props.hideChange();
        this.setState({
            flag3: false
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

    render() {
        return (
            <div>
                <div hidden={this.props.flag2} className="newPwd">
                    <label>新密码：&#12288;&#12288;</label>
                    <input type="text" autoComplete="off" 
                        value={this.state.newPassword} 
                        onChange={this.getNewPwdValue}  /><br />
                    <br /><br />
                    <label>确认密码：&#12288;</label>
                    <input type="text" autoComplete="off" 
                        value={this.state.newPasswordAgain} 
                        onChange={this.getNewAgainValue} /><br />
                    <br /><br />
                    <button onClick={this.submitNewPwd} className="sbutton2">提&nbsp;交</button>
                </div>
                <div hidden={this.state.flag3} className="hintMsg">
                    <span>
                        提示：
                    </span><br /><br />&#12288;
                    &#12288;<span>
                        重置密码成功！即将前往登录，倒计时({this.state.time})秒
                    </span><br /><br />
                    &#12288;&#12288;<a href="/login" alt="">点击此处，直接跳转</a>
                </div>
            </div>
        )
    }
}

// hintMsg.propTypes = {
//     flag2: PropTypes.bool,
//     time: PropTypes.number
// }



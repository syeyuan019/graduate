import React, { Component } from 'react'
import { Modal } from 'antd'

import UserService from '../../services/userService'

export default class setEncryQue extends Component {
    constructor() {
        super()
        this.state = {
            encryptedList: [],
            questionId1: '1',
            questionId2: '1',
            questionId3: '1',
            answer1: '',
            answer2: '',
            answer3: '',
        }
    }

    componentDidMount () {
        this.getEncrypted();
    }
    async getEncrypted () {
        var list = await UserService.getEncryptedQuestion();
        if (list.status === '2') {
            this.changeState(list.model);
        }
    }
    changeState = (list) => {
        this.setState({
            encryptedList: list
        });
    }

    
    /**
     * 获取设置的密保问题
     */
    selectEncrypted1 = (e) => {
        var id = e.target.value;
        this.setState({
            questionId1: id
        });
    }
    selectAnswer1 = (e) => {
        this.setState({
            answer1: e.target.value
        });
    }
    selectEncrypted2 = (e) => {
        var id = e.target.value;
        this.setState({
            questionId2: id
        });
    }
    selectAnswer2 = (e) => {
        this.setState({
            answer2: e.target.value
        });
    }
    selectEncrypted3 = (e) => {
        var id = e.target.value;
        this.setState({
            questionId3: id
        });
    }
    selectAnswer3 = (e) => {
        this.setState({
            answer3: e.target.value
        });
    }

    /**
     * 提交设置
     */
    setEncrypted = () => {
        var encrypted1 = {};
        var encrypted2 = {};
        var encrypted3 = {};
        var state = this.state;
        var bool = state.questionId1 !== state.questionId2 
                || state.questionId2 !== state.questionId3 
                || state.questionId1 !== state.questionId3; 
        var bool1 = state.answer1 !== null 
                && state.answer2 !== null
                && state.answer3 !== null; 
        var userId = JSON.parse(localStorage.getItem('userId'));
        if (bool && bool1) {
            encrypted1 = {
                userId: userId,
                encryptedQuestionId: state.questionId1,
                answer: state.answer1
            }
            encrypted2 = {
                userId: userId,
                encryptedQuestionId: state.questionId2,
                answer: state.answer2
            }
            encrypted3 = {
                userId: userId,
                encryptedQuestionId: state.questionId3,
                answer: state.answer3
            }
            this.requestSet(encrypted1);
            this.requestSet(encrypted2);
            this.requestSet(encrypted3);
        } else {
            return (
                Modal.warning({
                    title: '提示信息',
                    content: (
                    <div>
                        <p>不可以选择同样的问题！/答案不可为空</p>
                    </div>
                    ),
                    onOk() {},
                })
            )
        }
    }
    async requestSet (list) {
        var result = UserService.setEncryptedQuestion(list);
        if (result.status === '2') {
            window.location.reload();
        }
        if (result.status === '3') {
            Modal.warning({
                title: '提示信息',
                content: (
                  <div>
                    <p>设置失败！请重试</p>
                  </div>
                ),
                onOk() {},
            });
        }
    }

    render() {
        var encrypted = this.state.encryptedList;
        var list = [];
        if (encrypted !== null) {
        encrypted.forEach(encrypted => {
            list.push(
                <option 
                    value={encrypted.encryptedQuestionId}
                    key={encrypted.encryptedQuestion} 
                >
                    {encrypted.encryptedQuestion}
                </option>
            )
        });
        }

        return (
            <div>
                <form className="userForm">
                    <label >问&#12288;&#12288;题：&#12288;&#12288;</label>
                    <select className="uinput" onClick={this.selectEncrypted1}>
                        {list}
                    </select><br /><br />
                    <label >答&#12288;&#12288;案：&#12288;&#12288;</label>&#12288;&#12288;
                    <input type="text" autoComplete="off" className="sinput"
                        value={this.state.answer1 || ''} onChange={this.selectAnswer1}/>&#12288;&#12288;
                    <br /><br />

                    <label>问&#12288;&#12288;题：&#12288;&#12288;</label>
                    <select className="uinput" onClick={this.selectEncrypted2}>
                        {list}
                    </select><br /><br />
                    <label>答&#12288;&#12288;案：&#12288;&#12288;</label>&#12288;&#12288;
                    <input type="text" autoComplete="off" className="sinput"
                        value={this.state.answer2 || ''} onChange={this.selectAnswer2} />&#12288;&#12288;
                    <br /><br />

                    <label >问&#12288;&#12288;题：&#12288;&#12288;</label>
                    <select className="uinput" onClick={this.selectEncrypted3}>
                        {list}
                    </select><br /><br />
                    <label>答&#12288;&#12288;案：&#12288;&#12288;</label>&#12288;&#12288;
                    <input type="text" autoComplete="off" className="sinput" 
                        value={this.state.answer3 || ''} onChange={this.selectAnswer3}/><br /><br />
                </form>
                <button onClick={this.setEncrypted} className="ubutton">提&nbsp;交</button>
            </div>
        )
    }
}

import React, { Component } from 'react'
// import { Radio } from 'antd';

import SelectForm from './selectForm'
import Question from './question'
import QuestionService from '../../services/questionService'
import LoginService from '../../services/loginService';

export default class review extends Component {
    constructor() {
        super()
        this.state = {
            question: [],
            answerList: [],
            oneShow: [],
            len: 0,
            flag1: false,
            flag2: true
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

    changeShow (list) {
        this.getQuestion(list);
        this.setState({
            flag1: true,
            flag2: false
        });
    }

    async getQuestion (list) {
        var result = await QuestionService.getQuestion(list);
        this.setState({
            question: result.model
        });
        this.refs._get.getNewprops(result.model);
    }

    render() {
        return (
            <div >
                <div hidden={this.state.flag1} className="select-form">
                    <label className="labform">
                        选择你想做的题型：
                    </label>
                    <SelectForm parent={this} />
                </div>
                <div hidden={this.state.flag2} className="question">
                    <Question arent={this} ref="_get"/>
                </div>
            </div>
        )
    }
}

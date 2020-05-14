import React, { Component } from 'react'
import { Modal } from 'antd'

export default class encrypted extends Component {
    constructor () {
        super()
        this.state = {
            encryptedList: [
                {encryptedQuestion: ''},
                {encryptedQuestion: ''},
                {encryptedQuestion: ''}
            ],
            answer1: '',
            answer2: '',
            answer3: ''
        }
    }

    getEncrypted (list) {
        this.setState({
            encryptedList: list
        });
    }

    selectAnswer1 = (e) => {
        this.setState({
            answer1: e.target.value
        });
    }
    selectAnswer2 = (e) => {
        this.setState({
            answer2: e.target.value
        });
    }
    selectAnswer3 = (e) => {
        this.setState({
            answer3: e.target.value
        });
    }

    submitAnswer = () => {
        var state = this.state;
        var encryptedList = state.encryptedList;
        var answerList = [];
        answerList.push(state.answer1);
        answerList.push(state.answer2);
        answerList.push(state.answer3);
        var flag = [];
        for (var i = 0; i < 3; i++) {
            if (encryptedList[i].answer === answerList[i]) {
                flag.push(1);
            }
            if (encryptedList[i].answer !== answerList[i]) {
                flag.push(0);
            }    
        }
        var bool = flag[0] === 1 && flag[1] === 1 && flag[2] === 1;
        var error = [];
        if (bool) {
            this.props.parent.showChangePwd();
        } else {
            for (i = 0; i < 3; i++) {
                if (flag[i] === 0) {
                    error.push(i + 1);
                }
            }
            this.showError(error);
        }
    }

    showError (error) {
        var showList = [];
        error.forEach(element => {
            showList.push(
                <h5 key={element}>第&nbsp;{element}&nbsp;题答案错误，请重新输入答案！</h5>
            )
        });
        Modal.error({
            width: '520px',
            title: '有答案错误',
            content: (
              <div>
                &#12288;
                {showList}
              </div>
            ),
            onOk() {},
        });
    }

    render() {
        var self = this;

        return (
            <div hidden={self.props.flag1} className="yzFormEn" >
                <label>问&#12288;&#12288;题：</label>&#12288;&#12288;
                <input type="text" autoComplete="off" className="eselect" readOnly
                    defaultValue={self.state.encryptedList[0].encryptedQuestion}/>
                <br /><br />  
                <label>答&#12288;&#12288;案：</label>&#12288;&#12288;
                <input type="text" className="eselect" 
                    value={self.state.answer1  || ''} onChange={this.selectAnswer1}/>&#12288;&#12288;
                <br /><br />

                <label>问&#12288;&#12288;题：</label>&#12288;&#12288;
                <input type="text" className="eselect" readOnly
                    defaultValue={self.state.encryptedList[1].encryptedQuestion}/>
                <br /><br />  
                <label>答&#12288;&#12288;案：</label>&#12288;&#12288;
                <input type="text" autoComplete="off" className="eselect" 
                    value={self.state.answer2  || ''} onChange={this.selectAnswer2}/>&#12288;&#12288;
                <br /><br />

                <label>问&#12288;&#12288;题：</label>&#12288;&#12288;
                <input type="text" className="eselect" readOnly
                    defaultValue={self.state.encryptedList[2].encryptedQuestion}/>
                <br /><br />  
                <label>答&#12288;&#12288;案：</label>&#12288;&#12288;
                <input type="text" autoComplete="off" className="eselect" 
                    value={self.state.answer3  || ''} onChange={self.selectAnswer3}/><br /><br />
                <button onClick={self.submitAnswer} className="sbutton3">提&nbsp;交</button>
            </div>
        )
    }
}

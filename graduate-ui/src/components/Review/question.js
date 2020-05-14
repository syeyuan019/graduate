import React, { Component } from 'react'
import { Radio, Modal } from 'antd';

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    marginLeft: '100px'
};
const flag = [
    {"char": "对", "num": 1}, 
    {"char": "错", "num": 0}
];

export default class question extends Component {
    constructor (props) {
        super(props)
        this.state = {
            index: 0,
            nextFlag: false,
            submitFlag: true,
            questionAll: [],
            questionList: [],
            answerList: [],
            userAnswer: [],
            fillAnswer: '',
            fillAnswerList: [],
            subjectiveAnswer: ''
        }
    }

    getNewprops (question) {
        var object = {};
        var chooseQuestionList = [];
        var chooseAnswerList = [[],[]];
        var judgeQuestionList = [];
        var judgeAnswerList = [];
        var fillQuestionList = [];
        var subjectiveQuestionList = [];
        var questionAll = [];
        for (var i = 0; i < question.length; i++) {
            if (question[i].length !== 0) {
                if (question[i][0].questionTypeId === 1) {
                    object = this.getChoose(question[i]);
                    chooseQuestionList = object.question;
                    chooseAnswerList = object.answer;
                    object.all.forEach(question => {
                        questionAll.push(question);
                    })               
                    continue;
                };
                if (question[i][0].questionTypeId === 2) {
                    object = this.getJudge(question[i]);
                    judgeQuestionList = object.question;
                    judgeAnswerList = object.answer;
                    object.all.forEach(question => {
                        questionAll.push(question);
                    })               
                    continue;
                };
                if (question[i][0].questionTypeId === 3) {
                    object = this.getFill(question[i]);
                    fillQuestionList = object.question;               
                    object.all.forEach(question => {
                        questionAll.push(question);
                    })               
                    continue;
                };
                if (question[i][0].questionTypeId === 4) {
                    object = this.getSubject(question[i]);
                    subjectiveQuestionList = object.question;
                    object.all.forEach(question => {
                        questionAll.push(question);
                    })               
                    continue;
                };
            }
        }
        var questionList = [];
        var answerList = [];
        if (chooseQuestionList.length !== 0 && chooseAnswerList.length !== 0) {
            chooseQuestionList.forEach(list => {
                questionList.push(list);
            });
            chooseAnswerList.forEach(list => {
                answerList.push(list);
            });
        }
        if (judgeQuestionList.length !== 0  && judgeAnswerList.length !== 0) {
            judgeQuestionList.forEach(list => {
                questionList.push(list);
            });
            judgeAnswerList.forEach(list => {
                answerList.push(list);
            });
        }
        if (fillQuestionList.length !== 0) {
            fillQuestionList.forEach(list => {
                questionList.push(list)
            });
        }
        if (subjectiveQuestionList.length !== 0) {
            subjectiveQuestionList.forEach(list => {
                questionList.push(list)
            });
        }
        this.setState({
            questionAll: questionAll,
            questionList: questionList,
            answerList: answerList
        });
    }
    getChoose (list) {
        var chooseQuestionList = [];
        var chooseSelect = [];
        var chooseAnswerList = [[],[]];
        var all = [];
        list.forEach(list0 => {
            all.push(list0);
            chooseQuestionList.push(
                <div key={list0.questionId}>
                    <br />
                    &#12288;&#12288;&#12288;{list0.question}<br />
                </div>
            );
            list0.answerSplit.forEach(list1 => {
                chooseSelect.push(
                    <Radio style={radioStyle} key={list1} value={list1}>{list1}</Radio>
                )
            });
        });
        var index = 0;
        for (var i = 0; i < chooseSelect.length; i++){
            chooseAnswerList[index].push(chooseSelect[i]);
            if (i !== 0 && (i + 1) % 5 === 0) {
                index = index + 1;
            }
        }
        return {
            "question": chooseQuestionList, 
            "answer": chooseAnswerList,
            "all": all
        };
    }
    getJudge (list) {
        var judgeQuestionList = [];
        var judgeSelect = [];
        var judgeAnswerList = [];
        var all = [];
        list.forEach(list0 => {
            all.push(list0);
            judgeQuestionList.push(
                <div key={list0.questionId} >
                    <br />
                    &#12288;&#12288;&#12288;{list0.question}<br />
                </div>
            )
        });
        flag.forEach(list1 => {
            judgeSelect.push(
                <Radio style={radioStyle} key={list1.num} value={list1.num}>{list1.char}</Radio>
            )
        });
        for (var i = 0; i < judgeQuestionList.length; i++){
            judgeAnswerList.push(judgeSelect);
        }
        return {
            "question": judgeQuestionList, 
            "answer": judgeAnswerList,
            "all": all
        };
    } 
    getFill = (list) => {
        var fillQuestionList = [];
        var all = [];
        list.forEach(list0 => {
            all.push(list0);
            fillQuestionList.push(
                <div key={list0.questionId} name={list0.answer} >
                    <br />
                    &#12288;&#12288;{list0.question}<br />
                </div>
            )
        });
        return {
            "question": fillQuestionList, 
            "answer": [],
            "all": all
        };
    }
    getSubject (list) {
        var subjectiveQuestionList = [];
        var all = [];
        list.forEach(list0 => {
            all.push(list0);
            subjectiveQuestionList.push(
                <div key={list0.questionId} >
                    &#12288;&#12288;&#12288;{list0.question}<br />
                    <label>&#12288;请输入答案：&#12288;</label>
                    <input value={this.state.subjectiveAnswer}
                        onChange={this.getSubjectiveAnswer}/>
                </div>
            )
        });
        return {
            "question": subjectiveQuestionList, 
            "answer": [],
            "all": all
        };
    }

    getFillAnswer = (event) => {
        console.log(event.target.value)
        var value = event.target.value;
        this.setState({
            fillAnswer: value
        });
    }
    getSubjectiveAnswer = (event) => {
        var value = event.target.value;
        var list = this.state.userAnswer;
        list.push(value);
        this.setState({
            subjectiveAnswer: value,
            userAnswer: list
        });
    }
    getChooseJudgeAnswer = (event) => {
        var value = event.target.value;
        var list = this.state.userAnswer;
        list.push(value);
        this.setState({
            userAnswer: list
        });
    }

    next = () => {
        this.changeFillAnswer();
        var indexTemp = this.state.index + 1;
        if (indexTemp < (this.state.questionList.length - 1)) {
            this.setState({
                index: indexTemp
            });
        }
        if (indexTemp === (this.state.questionList.length - 1)) {
            this.setState({
                index: indexTemp,
                nextFlag: true,
                submitFlag: false
            });
        }
        console.log(this.state.userAnswer)
    }
    changeFillAnswer = () => {
        if (this.state.fillAnswer !== '') {
            var list = this.state.fillAnswerList;
            list.push(this.state.fillAnswer);
            this.setState({
                fillAnswer: '',
                fillAnswerList: list
            });
        }
    }
    submit = () => {
        this.changeFillAnswer();
        var questionAll = this.state.questionAll;
        var fillAnswerList = this.state.fillAnswerList;
        var userAnswer = this.state.userAnswer;
        var lenFill = 0;
        var lenOther = 0;
        var flagAnswer = [];
        for (var i = 0; i < questionAll.length; i++) {
            if (questionAll[i].questionId !== 3) {
                if (questionAll[i].answer === userAnswer[lenOther]) {
                    flagAnswer.push(1);
                    lenOther = lenOther + 1;
                } else {
                    flagAnswer.push(0);
                    lenOther = lenOther + 1;
                }
            }
            if (questionAll[i].questionId === 3) {
                if (questionAll[i].answer === fillAnswerList[lenFill]) {
                    flagAnswer.push(1);
                    lenFill = lenFill + 1;
                } else {
                    flagAnswer.push(0);
                    lenFill = lenFill + 1;
                }
            }
        }
        this.showResult(flagAnswer);
    }
    showResult = (flagAnswer) => {
        var questionAll = this.state.questionAll;
        var show = [];
        var style = "showColorY";
        for (var i = 0; i < questionAll.length; i++) {
            if (flagAnswer[i] === 1) {
                style = "showColorY";
            }
            if (flagAnswer[i] === 0) {
                style = "showColorN";
            }
            show.push(
                <h4 className={style}>
                    {questionAll[i].question}<br />
                    &#12288;{questionAll[i].answer}
                </h4>
            );
        }
        Modal.info({
            width: '720px',
            title: '结果：展示正确答案，标红为答错题',
            content: (
              <div>
                &#12288;
                {show}
              </div>
            ),
            onOk() {
                window.location.reload() 
            },
        });
    }

    render() {
        var state = this.state;
        var fillFlag;
        var chjuFlag;
        if (state.questionAll.length !== 0) {
            if (state.questionAll[state.index].questionTypeId === 3) {
                fillFlag = false;
            }
            if (state.questionAll[state.index].questionTypeId !== 3) {
                fillFlag = true;
            }
            if (state.questionAll[state.index].questionTypeId === 1
                || state.questionAll[state.index].questionTypeId === 2) {
                chjuFlag = false;
            }
            if (state.questionAll[state.index].questionTypeId !== 1
                && state.questionAll[state.index].questionTypeId !== 2) {
                chjuFlag = true;
            }
        }
        
        return (
            <div>
                <div className="show-question">
                    {this.state.questionList[this.state.index]}
                    <div hidden={fillFlag}>
                        <label>&#12288;&#12288;请输入答案：&#12288;</label>
                        <input type="text"  className="fill-input"
                            value={this.state.fillAnswer} onChange={this.getFillAnswer} />
                    </div>
                    <div hidden={chjuFlag}>
                    <Radio.Group onChange={this.getChooseJudgeAnswer}>
                        {this.state.answerList[this.state.index]}
                    </Radio.Group>
                    </div>
                </div>
                <div hidden={this.state.nextFlag}>
                    <button className="next-button" onClick={this.next}>下一题</button>
                </div>
                <div hidden={this.state.submitFlag}>
                    <button className="next-button" onClick={this.submit}>提交</button>
                </div>
            </div>
        )
    }
}
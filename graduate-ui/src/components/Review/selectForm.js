import React, { Component } from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'
import { Modal } from 'antd'

import store from '../../redux/store'
import QuestionTypeAction from '../../redux/actions/question_action'

class selectForm extends Component {
    constructor () {
        super()
        this.state = {
            flag: 1
        }
    }

    onClick = () => {
        this.setChangeState();
    }

    setChangeState () {
        var list = [];
        $("input[name='checkbox']:checked").each(function(){
            list.push($(this).val());//遍历选中项的值
        });
        if (list.length === 0) {
            Modal.warning({
                title: '提示',
                content: '请选择一种题型！',
            });
        } 
        if (list.length !== 0) {
            store.dispatch(QuestionTypeAction(list));
            this.props.parent.changeShow(list);
        }
    }

    render() {
        const style = {
            display: 'none'
        }
        return (
            <div className="select-type">
                <form  onSubmit={this.onClick} target="stop">
                    <input type="checkbox" name="checkbox" value={1} />&#12288;&#12288;
                    <span>选择题</span><br /><br />

                    <input type="checkbox" name="checkbox" value={2} />&#12288;&#12288;
                    <span>判断题</span><br /><br />

                    <input type="checkbox" name="checkbox" value={3} />&#12288;&#12288;
                    <span>填空题</span><br /><br />

                    <input type="checkbox" name="checkbox" value={4} />&#12288;&#12288;
                    <span>主观题</span><br /><br />

                    <input type="submit" className="revibutton" value="提&#12288;交" />
                </form>
                <iframe title="one" name="stop" style={style}></iframe> 
            </div>
        )
    }
}
export default connect()(selectForm)
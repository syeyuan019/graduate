import React, { Component } from 'react'
import LEdit from 'wangeditor'
import { connect } from 'react-redux'

import store from '../../redux/store'
import EditAction from '../../redux/actions/edit_action'

import './index'

class edit extends Component {
    constructor() {
        super();
        this.state = {
            editorContent: ''
        };
        //  this.textAreaValue=this.textAreaValue.bind(this);
    }

    componentDidMount () {
        this.createEdit();
    }
    createEdit () {
        const elemMenu = this.refs.editorElemMenu;
        const elemBody = this.refs.editorElemBody;
        const editor = new LEdit(elemMenu, elemBody);
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            // alert(editor.txt.html())
            this.setState({
                // editorContent: editor.txt.text()
                editorContent: editor.txt.html()
            }, () => {
                store.dispatch(EditAction(editor.txt.html()));
            });
        };
        editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'video',  // 插入视频
            'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
        ]
        editor.customConfig.uploadImgShowBase64 = true;
        editor.create();
        if (this.props.text !== '') {
            var dataToS = JSON.stringify(this.props.data);
            var dataTo = JSON.parse(dataToS);
            editor.txt.html('<p>' + dataTo + '</p>')
        }
    }

    textAreaValue () {
        console.log(this.state.editorContent)
    }

    render() {
        return (
            <div className="edit-left">
            <div className="shop">
                <div className="text-area" >
                    <div style={{
                            backgroundColor:'#F5F5DC'
                        }}>
                        <div ref="editorElemMenu"
                            style={{
                                marginTop: '5px',
                                float:"left"
                            }}
                            className="editorElem-menu">
                        </div>
                    </div>
                    <div
                        style={{
                            padding:"0 0px",
                            height:600,
                            border:"0px solid #ccc",
                            borderTop:"none"
                        }}
                        ref="editorElemBody" className="editorElem-body">
                    </div>
                </div>
                {/* <div onClick={this.textAreaValue}>点击我获取值啊</div> */}
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.base
    }
}

export default connect(mapStateToProps)(edit)
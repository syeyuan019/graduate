import React, { Component } from 'react'
import { Modal } from 'antd';
import { connect } from 'react-redux'

import store from '../../redux/store'
import BaseAction from '../../redux/actions/base_action'

class upload extends Component {
    constructor () {
        super()
        this.state = {
            text: ''
        }
    }

    upload = (e) => {  
        var self = this;
        // 支持chrome IE10  
        if (window.FileReader) {
            console.log(e.target.files[0])  
            var file = e.target.files[0];  
            this.getUrl(file)
            var reader = new FileReader();  
            reader.readAsText(file, 'utf-8');
            reader.onload = function(e) { 
                self.setState({
                    text: e.target.result
                }) ;
            }  
        }  
    } 
    getUrl (file) {
        var url = null;
        if (window.webkitURL !== undefined) {
            // webkit or chrome
            url = window.webkitURL.createObjectURL(file);
        }
        console.log(url)
    }

    handleOk = () => {
        store.dispatch(BaseAction(this.state.text));
        this.props.parent.hiddenVisible();
        this.props.parent.usableEdit();
        this.props.parent.changeText(this.state.text);
    }
    
    handleCancel = () => {
        this.props.parent.hiddenVisible();
    }

    render() {
        return (
            <Modal
                title="上传笔记"
                visible={this.props.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <input type="file" className="file" onChange={this.upload} />  
            </Modal>
        )
    }
}

export default connect()(upload)
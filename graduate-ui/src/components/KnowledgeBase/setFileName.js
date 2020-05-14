import React, { Component } from 'react'
import { Modal } from 'antd';
import { connect } from 'react-redux'

import NoteService from '../../services/noteService'

class setFileName extends Component {
    constructor () {
        super()
        this.state = {
            name: ""
        }
    }

    handleOk = () => {
        this.props.parent.usableEdit();
        this.downFile(this.state.name, this.props.data);
        window.location.reload();
    }
    
    handleCancel = () => {
        this.props.parent.hiddenSetFileName()
    }

    getName = e => {
        this.setState({
            name: e.target.value
        })
    }

    async downFile (name, data) {
        var before = "<!DOCTYPE html>\n"
        var b1 = "<html>\n<head>\n<meta charset=\"utf-8\">\n<title>"
        var b2 = "</title>\n</head>\n<body>"
        var after = "</body>\n</html>"
        var result = await NoteService.downFile(name, before + b1 + name + b2 + data + after);
        console.log(result)
    }

    render() {

        return (
            <Modal
                title="设置笔记名称"
                visible={this.props.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                请输入笔记名称：&#12288;<input type="text" value={this.state.name} onChange={this.getName} />  
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.edit
    }
}

export default connect(mapStateToProps)(setFileName)
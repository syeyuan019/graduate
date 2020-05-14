import React, { Component } from 'react'
import { Modal } from 'antd';

import NoteService from '../../services/noteService'

export default class noteList extends Component {
    constructor () {
        super()
        this.state = {
            noteList: []
        }
    }

    componentDidMount () {
        this.getNoteList()
    }
    async getNoteList () {
        var result = await NoteService.getNoteList();
        this.setState({
            noteList: result.model
        });
    }

    handleOk = () => {
        window.location.reload();
    }
    
    handleCancel = () => {
        this.props.parent.hiddenNoteVisible()
    }

    removeNote = () => {
        var checkedList = this.getChecked();
        this.remove(checkedList)
    }
    async remove (checkedList) {
        var result = NoteService.deleteNote(checkedList);
        console.log(result);
    }

    getChecked = () => {
        var checkedList = [];
        var obj = document.getElementsByName('checkbox1')
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].checked) {
                checkedList.push(obj[i].value);
            }
        }
        return checkedList;
    }


    render() {
        var noteList = this.state.noteList;
        var showList = [];
        noteList.forEach(list => {
            showList.push(
                <div key={list.noteId} className="sitelist">
                    <input type="checkbox" name="checkbox1" value={list.noteId}/>&#12288;&#12288;
                    <span>{list.noteName}</span>
                    &#12288;&#12288;&#12288;&#12288;
                    <span style={{ color: "blue" }} onClick={this.removeNote} >删除</span>
                </div>
            )
        });

        return (
            <Modal
                title="笔记列表"
                visible={this.props.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                {showList}
            </Modal>
        )
    }
}



import React, { Component } from 'react'
import Edit from './edit'
import LeftMenu from './leftMenu'
import Upload from './upload'
import SetFileName from './setFileName'
import NoteList from './noteList'
import LoginService from '../../services/loginService';

import './index.css'
import image from './image/1.jpg'

const screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const style = {
  height: screenHeight,
  background: `url(${image})`
}

export default class index extends Component {
    constructor () {
        super()
        this.state = {
          menuKey: '',
          visible: false,
          setVisible: false,
          searchVisible: false,
          text: '',
          editClass: 'editArea',
          fileName: ''
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

    showVisible () {
        this.disableEdit();
        this.setState({
            visible: true
        });
    }

    downShowVisible () {
        this.disableEdit();
    }

    noteVisible () {
        this.disableEdit();
        this.setState({
            searchVisible: true
        });
    }

    hiddenNoteVisible () {
        this.usableEdit();
        this.setState({
            searchVisible: false
        });
    }

    showSetFileName () {
        this.setState({
            setVisible: true
        });
    }

    hiddenSetFileName () {
        this.setState({
            setVisible: false
        });
    }

    disableEdit () {
        var name = this.state.editClass + " disable"; 
        this.setState({
            editClass: name,
        });
    }

    usableEdit () {
        var name = this.state.editClass.split(" ");
        this.hiddenSetFileName();
        this.setState({
            editClass: name[0]
        });
    }

    hiddenVisible () {
        this.setState({
            visible: false
        })
    }

    changeText (text) {
        this.setState({
            text: text
        });
    }

    render() {
        var self = this;
        console.log(self.state.text)

        return (
            <div style={style} >
                <div className="leftMenu">
                    <LeftMenu key={Math.random(10)} text={self.state.text} parent={this} />
                </div>
                <div id="edit" className={self.state.editClass}>
                    <Edit key={Math.random(100)} text={self.state.text} parent={this}/>
                </div>
                <Upload visible={this.state.visible} parent={this}/>
                <SetFileName visible={this.state.setVisible} parent={this}/>
                <NoteList visible={this.state.searchVisible} parent={this} />
            </div>
        )
    }
}

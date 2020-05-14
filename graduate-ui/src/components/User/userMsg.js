import React, { Component } from 'react'

import UserService from '../../services/userService'

export default class userMsg extends Component {
    constructor(){
        super()
        this.state = {
            user: {},
            userExits: {}
        }
    }

    componentDidMount () {
        this.getUser()
    }
    getUser = () => {
        var userId = JSON.parse(localStorage.getItem('userId'));
        this.getUserById(userId);
    }
    async getUserById (userId) {
        var userExits = await UserService.getUserById(userId);
        var user = this.state.user;
        user.userName = userExits.userName;
        user.email = userExits.email;
        user.mobile = userExits.mobile;
        user.herb = userExits.herb;
        this.setState({
            user
        });
    }

    getEmailValue = (e) => {
        var user = this.state.user;
        user.email = e.target.value;
        this.setState({
            user
        });
    }
    getMobileValue = (e) => {
        var user = this.state.user;
        user.mobile = e.target.value;
        this.setState({
            user
        });
    }
    getHerbValue = (e) => {
        var user = this.state.user;
        user.herb = e.target.value;
        this.setState({
            user
        });
    }

    userMsgSave = () => {
        this.saveRequest(this.state.user);
    }
    async saveRequest (user) {
        var result = await UserService.updateUser(user);
        localStorage.removeItem('user');
        var data = JSON.stringify(user);
        localStorage.setItem('user',data);
        console.log(result.status);
    }    

    render() {
        console.log(this.state.user)
        return (
            <div>
                <form className="userForm">
                    <span className="uspan">个人信息</span><br /><br />
                    <label>用户名：&#12288;&#12288;</label>
                    <input type="text" autoComplete="off" className="uinput" 
                        defaultValue={this.state.user.userName} disabled /><br /><br />

                    <label>邮&#12288;箱：&#12288;&#12288;</label>
                    <input type="text" autoComplete="off" className="uinput"
                        value={this.state.user.email || ''} onChange={this.getEmailValue} /><br /><br />

                    <label>电&#12288;话：&#12288;&#12288;</label>
                    <input type="text" autoComplete="off" className="uinput"
                        value={this.state.user.mobile || ''} onChange={this.getMobileValue} /><br /><br />

                    <label>中&#12288;药：&#12288;&#12288;</label>
                    <input type="text" autoComplete="off" className="uinput"
                        value={this.state.user.herb || ''} onChange={this.getHerbValue}/><br /><br />
                </form>
                <button className="ubutton" onClick={this.userMsgSave}>保存修改</button>
            </div>
        )
    }
}

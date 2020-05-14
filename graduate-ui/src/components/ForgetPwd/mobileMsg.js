import React, { Component } from 'react'

export default class mobileMsg extends Component {
    constructor () {
        super()
        this.state = {
            flag1: false,
            flag2: true
        }
    }

    onClick1 = () => {
        this.setState({
            flag1: true,
            flag2: false
        })
    }

    onClick2 = () => {
        alert("密码重置成功！请前往登录")
        window.location.href="/login"
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    render() {
        return (
            <div>
                <div hidden={this.state.flag1} className="yzForm" >
                    <form >
                        <label>手机号：&#12288;</label>
                        <input type="text" autoComplete="off"  /><br />
                        <br /><br />
                        <label>验证码：&#12288;</label>
                        <input type="text" autoComplete="off"  />&#12288;&#12288;
                        <button className="button1"> 重新发送</button><br />
                        <br /><br />
                    </form>
                    <button onClick={this.onClick1} className="sbutton1">提&nbsp;交</button>
                </div>
                <div hidden={this.state.flag2} >
                    <dialog open className="dialog">
                        <label>用户名：&#12288;&#12288;</label>
                        <input type="text" autoComplete="off"  /><br />
                        <br /><br />
                        <label>新密码：&#12288;&#12288;</label>
                        <input type="text" autoComplete="off"  /><br />
                        <br /><br />
                        <label>确认密码：&#12288;</label>
                        <input type="text" autoComplete="off"  /><br />
                        <br /><br />
                        <button onClick={this.onClick2} className="sbutton2">提&nbsp;交</button>
                    </dialog>
                </div>
            </div>
        )
    }
}

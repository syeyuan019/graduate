import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import LoginService from '../services/loginService'

import ico from '../static/images/0.ico'

/**
 * 公共目录，网站信息
 */
export default class Menu extends Component {

    selectLoginOut = eventKey => {
        if (eventKey === "1") {
            var result = LoginService.loginOut();
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            console.log(result);
        }
    }


    render() {
        const flag = this.props.location.pathname !== "/login" 
            && this.props.location.pathname !== "/register" 
            && this.props.location.pathname !== "/site"
            && this.props.location.pathname !== "/forgetPwd"
            && this.props.location.pathname !== "/note" ? false : true;
        const flagOut = localStorage.getItem('token') === undefined 
            || localStorage.getItem('token') === ""
            || localStorage.getItem('token') === null ? true : false;
            
        return (
            <div className="top"> 
                <div className="navbar">
                    <Navbar expand="lg" >
                        <div hidden={flag}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="home" className="navfont">主页</Nav.Link>
                            <Nav.Link href="site" className="navfont">网站</Nav.Link>
                            <Nav.Link href="review" className="navfont">回顾</Nav.Link>
                            <Nav.Link href="note" className="navfont">知识库</Nav.Link>
                            <NavDropdown title="用户" id="basic-nav-dropdown" className="navfont">
                                <NavDropdown.Item href="personal" className="navfont">个人信息</NavDropdown.Item>
                                <NavDropdown.Item href="updatePwd" className="navfont">修改密码</NavDropdown.Item>
                                <NavDropdown.Item href="setEncryptedQuestion" className="navfont">设置密保问题</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            &nbsp;&nbsp;&nbsp;
                            <div hidden={flagOut}>
                            <Nav className="navfont" onSelect={this.selectLoginOut}>
                                <Nav.Link eventKey="1" href="/login">登出</Nav.Link>
                            </Nav>
                            </div>
                        </Navbar.Collapse>
                        </div>
                    </Navbar>
                </div>
                <div className="bottom">
                    ©&nbsp;All Rights Reserved &nbsp;
                    <span  className="ico"><img src={ico} alt="" /></span>
                    &#12288;&#12288;2020
                    &#12288;&#12288;吴慧荆
                    &#12288;&#12288;yiyouhn@foxmail.com
                </div>
            </div>
        )
    }
}

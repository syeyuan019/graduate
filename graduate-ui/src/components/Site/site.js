import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux';

import Item from './item'
import Address from './address'
import SiteService from '../../services/siteService'
import LoginService from '../../services/loginService'

import './index.css'

class site extends Component {
    constructor() {
        super()
        this.state = {
            site: [],
            twoMenu: "",
            oneMenuList: ["","","","","",""],
            addressList: []
        }
    }

    componentDidMount () {
        this.getLoginStatus();
    }

    async getLoginStatus () {
        var status = await LoginService.loginStatus();
        if (status === "9") {
            this.getOneMenu();
            this.getSite(this.props.menu);
        }
        if (status === "10") {
            alert("请重新登录！");
            window.location.href = "/login";
        }
        if (status === "11") {
            alert("请重新登录！");
            window.location.href = "/login";
        }
    }
    
    async getOneMenu () {
        var result = await SiteService.getSiteOneType();
        this.setState({
            oneMenuList: result.model
        });
    }
    async getSite (menu) {
        var address = await SiteService.getSite(menu);
        this.changeState(address.model);
    }

    changeState = (address) => {
        this.setState({
            addressList: address
        });
    }

    render() {
        var oneMenu = this.state.oneMenuList;

        return (
            <div>
                <div className="navbar">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Item title={oneMenu[0]} parent={this}/>
                        <Item title={oneMenu[1]} parent={this}/>
                        <Item title={oneMenu[2]} parent={this}/>
                        <Item title={oneMenu[3]} parent={this}/>
                        <Item title={oneMenu[4]} parent={this}/>
                        <Item title={oneMenu[5]} parent={this}/>
                        </Nav>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav className="navfont">
                            <Nav.Link href="/home">主页</Nav.Link>&nbsp;&nbsp;
                            <Nav.Link href="/login">登出</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </div>
                <div>
                    <Address addressList={this.state.addressList}
                        menuOT={this.props.menu} parent={this}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.site
    }
}

export default connect(mapStateToProps)(site)
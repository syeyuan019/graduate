import React, { Component } from 'react'
import { NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'

import SiteService from '../../services/siteService'

import store from '../../redux/store'
import UpdateMenuAction from '../../redux/actions/site_action'
// window.store = store// 网页调试，在控制台查看store

class item extends Component {
    constructor() {
        super()
        this.state = {
            twoMenuList: []
        }
    }

    componentDidMount() {
        this.getTwoMenu();
    }

    async getTwoMenu() {
        var result = await SiteService.getSiteTwoType();
        this.setState({
            twoMenuList: result.model
        });
    }
    
    dispatchMenu(key) {
        var payload = {
            siteTypeOne: this.props.title,
            siteTypeTwo: key
        }
        store.dispatch(UpdateMenuAction(payload));
        this.props.parent.getSite(payload);
    }

    handleSelect = eventKey => {
        this.dispatchMenu(eventKey);
    }

    render() {
        var twoMenu = this.state.twoMenuList;

        return (
            <NavDropdown title={this.props.title} id="basic-nav-dropdown" className="navfont" onSelect={this.handleSelect} >
                <NavDropdown.Item eventKey={twoMenu[1]} className="navfont">&#12288;&#12288;{twoMenu[1]}</NavDropdown.Item>
                <NavDropdown.Item eventKey={twoMenu[2]} className="navfont">&#12288;&#12288;{twoMenu[2]}</NavDropdown.Item>
                <NavDropdown.Item eventKey={twoMenu[3]} className="navfont">&#12288;&#12288;{twoMenu[3]}</NavDropdown.Item>
                <NavDropdown.Item eventKey={twoMenu[4]} className="navfont">&#12288;&#12288;{twoMenu[4]}</NavDropdown.Item>
                <NavDropdown.Item eventKey={twoMenu[0]} className="navfont">&#12288;&#12288;{twoMenu[0]}</NavDropdown.Item>
            </NavDropdown>
        )
    }
}

export default connect()(item)

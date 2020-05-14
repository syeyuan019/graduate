import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'

import EmMsg from './emailMsg'
import EQMsg from './encryptedQuestion'
 
import './index.css'

export default class forgetPwd extends Component {
    constructor () {
        super()
        this.state = {
            eflag: false,
            enflag: true
        }
    }

    handleSelect = eventKey => {
        if (eventKey === "email") {
            this.setState ({
                eflag: false,
                enflag: true
            })
        }
        if (eventKey === "encrypte") {
            this.setState ({
                eflag: true,
                enflag: false
            });
        }
    }

    render() {
        return (
            <div>
                <Nav fill variant="tabs" defaultActiveKey="email" onSelect={this.handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="email">邮箱验证</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="encrypte">密保问题</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/login">返回</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div hidden={this.state.eflag}>
                    <EmMsg  />
                </div>
                <div hidden={this.state.enflag}>
                    <EQMsg  />
                </div>
            </div>
        )
    }
}

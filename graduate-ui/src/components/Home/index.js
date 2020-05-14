import React, { Component } from 'react'

import Home from './home'

import './index.css'
import image from './image/2.jpg'

const screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const style = {
  height: screenHeight,
  background: `url(${image})`
}

export default class index extends Component {
    constructor () {
        super()
        this.state = {
            pictureList: []
        }
    }

    render() {
        return (
            <div style={style} >
                <br />&#12288;
                <Home />
            </div>
        )
    }
}

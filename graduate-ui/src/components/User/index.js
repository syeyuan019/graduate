import React, { Component } from 'react'
import User from './user'

import './index.css'
import image from './image/12.jpg'

const screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const style = {
  height: screenHeight,
  background: `url(${image})`
}

export default class index extends Component {
    render() {
        return (
            <div style={style} >
                <br /><br /><br /><br /><br />
                <User />
            </div>
        )
    }
}

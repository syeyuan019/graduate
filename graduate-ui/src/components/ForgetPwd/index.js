import React, { Component } from 'react'

import ForgetPwd from './forgetPwd'

import image from './image/2.jpg'

const screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const style = {
  height: screenHeight,
  background: `url(${image})`
}

export default class index extends Component {
    render() {
        return (
            <div style={style}>
                <ForgetPwd />
            </div>
        )
    }
}

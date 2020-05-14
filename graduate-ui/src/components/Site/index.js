import React, { Component } from 'react'

import Site from './site'

import image from './image/1.gif'

const screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const style = {
  height: screenHeight,
  background: `url(${image})`
}


export default class index extends Component {
    render() {
        return (
            <div style={style}>
                <Site />
            </div>
        )
    }
}

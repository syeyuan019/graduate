import React, { Component } from 'react'
import Review from './review'

import './index.css'
import image from './image/1.jpg'

const screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const style = {
  height: screenHeight,
  background: `url(${image})`
}

export default class index extends Component {
    render() {
        return (
            <div style={style} >
                <br /><br /><br/>
                <Review />
            </div>
        )
    }
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel, Modal, Checkbox, Row, Col } from 'antd';

import PictureService from '../../services/pictureService';

import './index.css'

const tempSelect = [];

class home extends Component {
    constructor () {
        super()
        this.state = {
            pictureList: [],
            pictureName: [],
            pictureAddress: [],
            visible: false,
            showIndex: [1, 2, 3, 4, 5, 6]
        }
    }

    componentDidMount () {
        this.getPictureAddress();
    }

    async getPictureAddress () {
        var list = await PictureService.getAddress();
        this.getNameAddress(list.model);
    }

    getNameAddress = (list) => {
        var msg = "";
        var data = [];
        var name = [];
        var address = [];
        for (var i = 0; i < list.length; i++) {
            msg = list[i];
            data = msg.split(",");
            name.push(data[0]);
            address.push(data[1]);
        }
        this.setState({
            pictureName: name,
            pictureAddress: address
        });
    }

    handleOk = () => {
        var tempSelectData = tempSelect[tempSelect.length - 1];
        var picture = this.state.pictureName;
        var num = [];
        for (var i = 0; i < picture.length; i++){
            for (var j = 0; j < tempSelectData.length; j++) {
                if (picture[i] === tempSelectData[j]) {
                    num.push(i);
                }
            }
        }
        console.log(num)
        this.setState({
          visible: false,
          showIndex: num
        });
    }

    handleCancel = () => {
        this.setState({
          visible: false,
        })
    }

    changeShow = e => {
        tempSelect.push(e)
    }   

    setPicture = () => {
        var user = localStorage.getItem('user');
        if (user !== undefined) {
            this.setState({
                visible: true
            });
        }
        if (user === undefined) {
            alert("您还未登录，请前往登录！");
            window.location.href = "/login";
        }    
    }

    render() {
        const self = this.state;
        const show = self.showIndex;
        var select = [];
        self.pictureName.forEach(name => {
            select.push(
                <Col span={6} key={name}>
                    <Checkbox value={name}>{name}</Checkbox>
                </Col>
            )
        });

        return (
            <div className="home-box">
                <div className="float1">
                    <Carousel autoplay>
                        <div>
                            <img src={self.pictureAddress[show[0]]} alt="" className="height"></img>
                        </div>
                        <div>
                            <img src={self.pictureAddress[show[1]]} alt="" className="height"></img>
                        </div>
                        <div>
                            <img src={self.pictureAddress[show[2]]} alt="" className="height"></img>
                        </div>
                    </Carousel>
                    <Carousel autoplay>
                        <div>
                            <img src={self.pictureAddress[show[3]]} alt="" className="height"></img>
                        </div>
                        <div>
                            <img src={self.pictureAddress[show[4]]} alt="" className="height"></img>
                        </div>
                        <div>
                            <img src={self.pictureAddress[show[5]]} alt="" className="height"></img>
                        </div>
                    </Carousel>
                </div>
                <div className="float2">
                    <button className="hbutton" onClick={this.setPicture}> 
                        设<br />
                        置<br />
                        展<br />
                        示<br />
                        图<br />
                        片
                    </button>
                </div>
                <Modal
                    title="请选择六张图片"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <Checkbox.Group
                        style={{ width: '100%' }}
                        onChange={this.changeShow} 
                    >    
                    <Row >
                        {select}
                    </Row>
                    </Checkbox.Group>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.picture
}

export default connect(mapStateToProps)(home)
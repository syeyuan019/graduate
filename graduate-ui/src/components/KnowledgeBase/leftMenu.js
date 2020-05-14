import React, { Component } from 'react'
import { Layout, Menu, Modal } from 'antd'
import { 
  MenuOutlined,
  FormOutlined,
} from '@ant-design/icons'
import { InfoCircleOutlined } from '@ant-design/icons'

const { confirm } = Modal;
const { SubMenu } = Menu;
const { Sider } = Layout;

const screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const style = {
  height: screenHeight,
  width: 60
}

export default class leftMenu extends Component {
  constructor () {
      super()
      this.state = {
        menuKey: '',
        visible1: false,
        visible2: false
    }
  }

  componentDidMount ()  {
    this.flush();
  }
  flush () {
    if (this.props.text !== '') {
      this.setState({});
    }
  }

  clickMenu = e => {
    if(e.key === "1"){
      window.location.href = "/home";
    }
    if(e.key === "2"){
      window.location.href = "/login";
    }
    if(e.key === "4"){
      this.setState({
        visible2: true
      },() => {
        this.msg()
      })
    }
    if(e.key === "5"){
      this.setState({
        visible1: true
      },() => {
        this.props.parent.showVisible()
      })
    }
    if(e.key === "6"){
      this.setState({
        visible1: true
      },() => {
        this.props.parent.noteVisible()
      })
    }
  }

  msg () { 
    var self = this;
    this.props.parent.downShowVisible();
    confirm({
        title: '是否保存当前笔记?',
        icon: <InfoCircleOutlined />,
        onOk() {
          self.setFileName();
        },
        onCancel() {
          console.log('Cancel');
        },
    });
  }

  setFileName () {
    this.props.parent.showSetFileName();
  }

  render() {
    return (
      <Layout style={style}>
        <Sider trigger={null} collapsible collapsed={true} className="site-layout-background" >
          <Menu
            mode="inline"
            onClick={this.clickMenu}
            subMenuCloseDelay = "0.3"
            style={{ height: '100%', borderRight: 0, zIndex: -100 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <MenuOutlined  />
                </span>
              }
            >
              <Menu.Item key="1" style={{ background: "Khaki" }}><strong>主页</strong></Menu.Item>
              <Menu.Item key="2" style={{ background: "Salmon" }}><strong>登出</strong></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <FormOutlined />
                </span>
              }
            >
              <Menu.Item key="3" disabled><strong>笔记菜单</strong></Menu.Item>
              <Menu.Item key="4" style={{ background: "PeachPuff" }}><strong>保存笔记</strong></Menu.Item>
              <Menu.Item key="5" style={{ background: "SandyBrown" }}><strong>上传笔记</strong></Menu.Item>
              <Menu.Item key="6" style={{ background: "Tomato" }}><strong>笔记列表</strong></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}

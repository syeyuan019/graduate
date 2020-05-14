import React, { Component } from 'react'
import { Modal } from 'antd';
import { connect } from 'react-redux'

import SiteService from '../../services/siteService'

class address extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            visibleAdd: false,
            visibleUpdate: false,
            site: {
                siteAddress: '',
                siteMsg: '',
                siteTypeOne: '',
                siteTypeTwo: ''
            }
        }
    }

    componentDidMount () {
        this.getList();
    }
    getList = () => {
        this.setState({
            list: this.props.addressList
        });
    }

    shouldComponentUpdate = (nextProps, state) => {
        if (nextProps.addressList !== state.addressList) {
            return true
        }
    }

    /**
     * 获取添加、编辑的信息
     */
    getAddressValue = (e) => {
        var site = this.state.site;
        site.siteAddress = e.target.value;
        this.setState({
            site
        });
    }
    getMsgValue = (e) => {
        var site = this.state.site;
        site.siteMsg = e.target.value;
        this.setState({
            site
        });
    }
    getTypeOneValue = (e) => {
        var site = this.state.site;
        site.siteTypeOne = e.target.value;
        this.setState({
            site
        });
    }
    getTypeTwoValue = (e) => {
        var site = this.state.site;
        site.siteTypeTwo = e.target.value;
        this.setState({
            site
        });
    }

    /**
     * 添加网址
     */
    add = () => {
        this.setState({
            visibleAdd: true
        });
    }
    handleOkAdd = () => {
        var siteInput = this.state.site;
        siteInput.siteTypeOne = this.props.menu.siteTypeOne;
        siteInput.siteTypeTwo = this.props.menu.siteTypeTwo;
        this.addSite(siteInput);
        this.setState({
            visibleAdd: false
        });
        this.props.parent.getSite(this.props.menu);
        // window.location.reload();
    }
    async addSite (siteInput) {
        var addFlag = await SiteService.addSite(siteInput);
        console.log(addFlag);
    }
    handleCancelAdd = () => {
        this.setState({
            visibleAdd: false,
            site: {
                siteAddress: '',
                siteMsg: '',
                siteTypeOne: '',
                siteTypeTwo: ''
            }
        });
    }

    /**
     * 编辑
     */
    edit = () => {
        var checked = this.getChecked();
        var tempSite = {};
        var site = this.state.site;
        if (checked.length === 0) {
            alert('请选择一条记录！')
        }
        if (checked.length !== 0) {
            var index = 0;
            this.props.addressList.forEach(list => {
                if (checked[index] === list.siteId + '') {
                    tempSite = list;
                };
                index = index + 1;
            });
            site.siteId = tempSite.siteId;
            this.setState({
                visibleUpdate: true,
                site
            });
        }
    }
    handleOkUpdate = () => {
        this.updateSite(this.state.site);
        this.setState({
            visibleUpdate: false
        });
        window.location.reload();
    }
    async updateSite (site) {
        var updateFlag = await SiteService.updateSite(site);
        console.log(updateFlag);
        window.location.reload();
    }
    handleCancelUpdate = () => {
        this.setState({
            visibleUpdate: false
        });
    }

    /**
     * 获取选中的网址
     */
    getChecked = () => {
        var checkedList = [];
        var obj = document.getElementsByName('checkbox1')
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].checked) {
                checkedList.push(obj[i].value);
            }
        }
        return checkedList;
    }

    /**
     * 删除
     */
    remove = () => {
        var checkedList1 = this.getChecked();
        this.delete(checkedList1);
    }
    async delete (checkedList1) {
        var deleteFlag = await SiteService.deleteSite(checkedList1);
        console.log(deleteFlag);
        window.location.reload();
    }

    /**
     * 清空目录
     */
    clean = () => {
        var menuList = [
            this.props.menu.siteTypeOne,
            this.props.menu.siteTypeTwo
        ];
        this.deleteAll(menuList);
    }
    async deleteAll (list) {
        var deleteAllFlag = await SiteService.deleteAllSite(list);
        console.log(deleteAllFlag);
        window.location.reload();
    }

    /**
     * 上移下移
     */
    up = () => {
        var up = this.getChecked();
        var index = 0;
        var address = this.props.addressList;
        for (var i = 0; i < address.length; i++) {
            if (up[index] === address[i].siteId + '') {
                var temp = address[i-1];
                address[i-1] = address[i];
                address[i] = temp;
                index = index + 1;
            }
        }
        this.setState({
            list: address
        });
    }
    down = () => {
        var up = this.getChecked();
        var address = this.props.addressList;
        var index = 0;
        for (var i = 0; i < address.length; i++) {
            if (up[index] === address[i].siteId + '') {
                var temp = address[i + 1];
                address[i + 1] = address[i];
                address[i] = temp;
                index = index + 1;
            }
        }
        this.setState({
            list: address
        });
    }

    render() {
        var site = this.props.addressList;
        var showList = [];
        if (site !== null) {
            site.forEach((list) => {
                showList.push(
                // react循环数组时需要加key
                <div key={list.siteId} className="sitelist">
                    <div key={list.siteAddress} className="sitelist1" >
                        <input type="checkbox" name="checkbox1" value={list.siteId}/>
                    </div>
                    <a key={list.siteMsg} href={list.siteAddress} alt="" className="a">
                        {list.siteMsg}<br /><br />
                    </a>
                </div>
                )
            });
        };

        return (
            <div className="side" >
                <div className="side1" >
                    <div className="srcoll1"> 
                    <br />
                    {showList}
                    </div>        
                </div>
                <div className="side2" >
                    <button className="sibutton" onClick={this.add}>新建</button>

                    &#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;

                    <button className="sibutton" onClick={this.remove}>删除</button><br /><br />

                    <button className="sibutton" onClick={this.edit}>编辑</button>

                    &#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;

                    <button className="sibutton" onClick={this.up}>上移</button><br /><br />

                    <button className="sibutton" onClick={this.down}>下移</button>

                    &#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;

                    <button className="sibutton" onClick={this.clean}>清空</button>
                </div>
                <Modal
                    title="添加网址"
                    visible={this.state.visibleAdd}
                    onOk={this.handleOkAdd}
                    onCancel={this.handleCancelAdd}
                    >
                    <form className="add-align">
                        <label >网站地址：&#12288;</label>
                        <input type="text" autoComplete="off" className="addinput" 
                            value={this.state.site.siteAddress || ''} onChange={this.getAddressValue} />
                        <br /><br />
                        <label >地址名称：&#12288;</label>
                        <input type="text" autoComplete="off" className="addinput"
                            value={this.state.site.siteMsg || ''} onChange={this.getMsgValue} />
                    </form>
                </Modal>
                <Modal
                    title="修改网址"
                    visible={this.state.visibleUpdate}
                    onOk={this.handleOkUpdate}
                    onCancel={this.handleCancelUpdate}
                    >
                    <form className="add-align">
                        <label >网站地址：&#12288;</label>
                        <input type="text" autoComplete="off" className="addinput" 
                            value={this.state.site.siteAddress || ''} onChange={this.getAddressValue} />
                        <br /><br />
                        <label >地址名称：&#12288;</label>
                        <input type="text" autoComplete="off" className="addinput"
                            value={this.state.site.siteMsg || ''} onChange={this.getMsgValue} />
                            <br /><br />
                        <label >一级目录：&#12288;</label>
                        <input type="text" autoComplete="off" className="addinput"
                            value={this.state.site.siteTypeOne || ''} onChange={this.getTypeOneValue} />
                            <br /><br />
                        <label >二级目录：&#12288;</label>
                        <input type="text" autoComplete="off" className="addinput"
                            value={this.state.site.siteTypeTwo || ''} onChange={this.getTypeTwoValue} />
                    </form>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.site
    }
}

export default connect(mapStateToProps)(address)
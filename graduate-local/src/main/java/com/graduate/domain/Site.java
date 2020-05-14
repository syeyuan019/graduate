package com.graduate.domain;

import java.beans.Transient;
import java.io.Serializable;
import java.util.Date;

/**
 * 网站信息实体类
 * @author wuhuijing
 */
public class Site implements Serializable {
    private Long siteId;
    // 网址
    private String siteAddress;
    // 网站说明
    private String siteMsg;
    // 网站一级分类目录
    private String siteTypeOne;
    private String siteTypeTwo;
    private Date createTime;
    private String remark;

    @Override
    public String toString() {
        return "Site{" +
                "siteId=" + siteId +
                ", siteAddress='" + siteAddress + '\'' +
                ", siteMsg='" + siteMsg + '\'' +
                ", siteTypeOne='" + siteTypeOne + '\'' +
                ", siteTypeTwo='" + siteTypeTwo + '\'' +
                ", createTime=" + createTime +
                ", remark='" + remark + '\'' +
                '}';
    }

    public Long getSiteId() {
        return siteId;
    }

    public void setSiteId(Long siteId) {
        this.siteId = siteId;
    }

    public String getSiteAddress() {
        return siteAddress;
    }

    public void setSiteAddress(String siteAddress) {
        this.siteAddress = siteAddress;
    }

    public String getSiteMsg() {
        return siteMsg;
    }

    public void setSiteMsg(String siteMsg) {
        this.siteMsg = siteMsg;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getSiteTypeOne() {
        return siteTypeOne;
    }

    public void setSiteTypeOne(String siteTypeOne) {
        this.siteTypeOne = siteTypeOne;
    }

    public String getSiteTypeTwo() {
        return siteTypeTwo;
    }

    public void setSiteTypeTwo(String siteTypeTwo) {
        this.siteTypeTwo = siteTypeTwo;
    }

}

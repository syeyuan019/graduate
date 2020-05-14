package com.graduate.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 网站分类实体类
 * @author wuhuijing
 */
public class SiteType implements Serializable {
    private Long siteTypeId;
    // 网站分类名称
    private String siteTypeName;
    // 网站分类级别
    private Long typeLevel;
    private Date createTime;
    private Date updateTime;
    private String remark;

    @Override
    public String toString() {
        return "SiteType{" +
                "siteTypeId=" + siteTypeId +
                ", siteTypeName='" + siteTypeName + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", remark='" + remark + '\'' +
                '}';
    }

    public Long getSiteTypeId() {
        return siteTypeId;
    }

    public void setSiteTypeId(Long siteTypeId) {
        this.siteTypeId = siteTypeId;
    }

    public String getSiteTypeName() {
        return siteTypeName;
    }

    public void setSiteTypeName(String siteTypeName) {
        this.siteTypeName = siteTypeName;
    }

    public Long getTypeLevel() {
        return typeLevel;
    }

    public void setTypeLevel(Long typeLevel) {
        this.typeLevel = typeLevel;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}

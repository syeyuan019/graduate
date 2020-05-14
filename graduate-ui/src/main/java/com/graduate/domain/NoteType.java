package com.graduate.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 笔记分类实体类
 * @author wuhuijing
 */
public class NoteType implements Serializable {
    private Long noteTypeId;
    // 笔记分类名称
    private String noteTypeName;
    private Date createTime;
    private Date updateTime;
    private String remark;

    @Override
    public String toString() {
        return "SiteType{" +
                "siteTypeId=" + noteTypeId +
                ", siteTypeName='" + noteTypeName + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", remark='" + remark + '\'' +
                '}';
    }

    public Long getSiteTypeId() {
        return noteTypeId;
    }

    public void setSiteTypeId(Long noteTypeId) {
        this.noteTypeId = noteTypeId;
    }

    public String getSiteTypeName() {
        return noteTypeName;
    }

    public void setSiteTypeName(String noteTypeName) {
        this.noteTypeName = noteTypeName;
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

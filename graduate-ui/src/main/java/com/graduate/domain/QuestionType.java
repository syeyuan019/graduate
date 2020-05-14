package com.graduate.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 题目分类实体类
 * @author wuhuijing
 */
public class QuestionType implements Serializable {
    private Long quesTypeId;
    // 题目分类名称
    private String quesTypeName;
    private Date createTime;
    private Date updateTime;
    private String remark;

    @Override
    public String toString() {
        return "QuestionType{" +
                "quesTypeId=" + quesTypeId +
                ", quesTypeName='" + quesTypeName + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", remark='" + remark + '\'' +
                '}';
    }

    public Long getQuesTypeId() {
        return quesTypeId;
    }

    public void setQuesTypeId(Long quesTypeId) {
        this.quesTypeId = quesTypeId;
    }

    public String getQuesTypeName() {
        return quesTypeName;
    }

    public void setQuesTypeName(String quesTypeName) {
        this.quesTypeName = quesTypeName;
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

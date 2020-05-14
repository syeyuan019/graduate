package com.graduate.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 权限实体类
 * @author wuhuijing
 */
public class Right implements Serializable {
    private Long rightId;
    // 权限名
    private String rightName;
    private Date createTime;
    private Date updateTime;
    private String remark;

    @Override
    public String toString() {
        return "Right{" +
                "rightId=" + rightId +
                ", rightName='" + rightName + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", remark='" + remark + '\'' +
                '}';
    }

    public Long getRightId() {
        return rightId;
    }

    public void setRightId(Long rightId) {
        this.rightId = rightId;
    }

    public String getRightName() {
        return rightName;
    }

    public void setRightName(String rightName) {
        this.rightName = rightName;
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

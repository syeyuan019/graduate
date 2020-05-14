package com.graduate.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 代码类型实体类
 * @author wuhuijing
 */
public class CodeType implements Serializable {
    private Long codeTypeId;
    private Long codeType;
    private String usedByTable;
    private Date createTime;
    private Date updateTime;
    private String remark;

    @Override
    public String toString() {
        return "CodeType{" +
                "codeTypeId=" + codeTypeId +
                ", codeType=" + codeType +
                ", usedByTable='" + usedByTable + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", remark='" + remark + '\'' +
                '}';
    }

    public Long getCodeTypeId() {
        return codeTypeId;
    }

    public void setCodeTypeId(Long codeTypeId) {
        this.codeTypeId = codeTypeId;
    }

    public Long getCodeType() {
        return codeType;
    }

    public void setCodeType(Long codeType) {
        this.codeType = codeType;
    }

    public String getUsedByTable() {
        return usedByTable;
    }

    public void setUsedByTable(String usedByTable) {
        this.usedByTable = usedByTable;
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

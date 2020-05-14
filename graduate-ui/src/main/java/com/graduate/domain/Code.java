package com.graduate.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 代码实体类
 * @author wuhuijing
 */
public class Code implements Serializable {
    private Long codeId;
    private Long code;
    private String meaning;
    private Long codeTypeId;
    private Date createTime;
    private Date updateTime;
    private String remark;

    @Override
    public String toString() {
        return "Code{" +
                "codeId=" + codeId +
                ", code=" + code +
                ", meaning='" + meaning + '\'' +
                ", codeTypeId=" + codeTypeId +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", remark='" + remark + '\'' +
                '}';
    }

    public Long getCodeId() {
        return codeId;
    }

    public void setCodeId(Long codeId) {
        this.codeId = codeId;
    }

    public Long getCode() {
        return code;
    }

    public void setCode(Long code) {
        this.code = code;
    }

    public String getMeaning() {
        return meaning;
    }

    public void setMeaning(String meaning) {
        this.meaning = meaning;
    }

    public Long getCodeTypeId() {
        return codeTypeId;
    }

    public void setCodeTypeId(Long codeTypeId) {
        this.codeTypeId = codeTypeId;
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

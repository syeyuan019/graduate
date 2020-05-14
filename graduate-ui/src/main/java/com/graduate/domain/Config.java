package com.graduate.domain;

import java.util.Date;

/**
 * 配置实体类
 * @author wuhuijing
 */
public class Config {
    private Long configId;
    private Long configName;
    private String configValue;
    private Date createTime;
    private Date updateTime;
    private String remark;

    @Override
    public String toString() {
        return "Config{" +
                "configId=" + configId +
                ", configName=" + configName +
                ", configValue='" + configValue + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", remark='" + remark + '\'' +
                '}';
    }

    public Long getConfigId() {
        return configId;
    }

    public void setConfigId(Long configId) {
        this.configId = configId;
    }

    public Long getConfigName() {
        return configName;
    }

    public void setConfigName(Long configName) {
        this.configName = configName;
    }

    public String getConfigValue() {
        return configValue;
    }

    public void setConfigValue(String configValue) {
        this.configValue = configValue;
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

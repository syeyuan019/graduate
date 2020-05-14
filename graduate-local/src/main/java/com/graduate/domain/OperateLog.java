package com.graduate.domain;

import java.io.Serializable;
import java.util.Date;

public class OperateLog implements Serializable {
    private Long opLogId;
    private String userName;//用户
    private Long operateCode;//操作代码
    private Long operateStatus;//操作状态
    private String requestMethod;//操作请求的方法
    private String requestParams;//操作请求的参数
    private Long executeTime;//执行时长（毫秒）
    private String ip;//IP地址
    private String operateReturn;//操作返回值
    private Date createTime;
    private Date updateTime;
    private String remark;

    @Override
    public String toString() {
        return "OperateLog{" +
                "opLogId=" + opLogId +
                ", userName='" + userName + '\'' +
                ", operateCode=" + operateCode +
                ", operateStatus=" + operateStatus +
                ", requestMethod='" + requestMethod + '\'' +
                ", requestParams='" + requestParams + '\'' +
                ", executeTime=" + executeTime +
                ", ip='" + ip + '\'' +
                ", operateReturn='" + operateReturn + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", remark='" + remark + '\'' +
                '}';
    }

    public Long getOpLogId() {
        return opLogId;
    }

    public void setOpLogId(Long opLogId) {
        this.opLogId = opLogId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Long getOperateCode() {
        return operateCode;
    }

    public void setOperateCode(Long operateCode) {
        this.operateCode = operateCode;
    }

    public Long getOperateStatus() {
        return operateStatus;
    }

    public void setOperateStatus(Long operateStatus) {
        this.operateStatus = operateStatus;
    }

    public String getRequestMethod() {
        return requestMethod;
    }

    public void setRequestMethod(String requestMethod) {
        this.requestMethod = requestMethod;
    }

    public String getRequestParams() {
        return requestParams;
    }

    public void setRequestParams(String requestParams) {
        this.requestParams = requestParams;
    }

    public Long getExecuteTime() {
        return executeTime;
    }

    public void setExecuteTime(Long executeTime) {
        this.executeTime = executeTime;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getOperateReturn() {
        return operateReturn;
    }

    public void setOperateReturn(String operateReturn) {
        this.operateReturn = operateReturn;
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

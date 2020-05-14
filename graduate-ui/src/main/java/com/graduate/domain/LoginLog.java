package com.graduate.domain;

import java.io.Serializable;
import java.util.Date;

public class LoginLog implements Serializable {
    private Long loginLogId;
    private String userName;
    private String password;
    private int loginStatus;
    private String loginIp;
    private Date createTime;
    private String remark;

    @Override
    public String toString() {
        return "LoginLog{" +
                "loginLogId=" + loginLogId +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", loginStatus=" + loginStatus +
                ", loginIp='" + loginIp + '\'' +
                ", createTime=" + createTime +
                ", remark='" + remark + '\'' +
                '}';
    }

    public Long getLoginLogId() {
        return loginLogId;
    }

    public void setLoginLogId(Long loginLogId) {
        this.loginLogId = loginLogId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getLoginStatus() {
        return loginStatus;
    }

    public void setLoginStatus(int loginStatus) {
        this.loginStatus = loginStatus;
    }

    public String getLoginIp() {
        return loginIp;
    }

    public void setLoginIp(String loginIp) {
        this.loginIp = loginIp;
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
}

package com.graduate.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 用户实体类
 * @author wuhuijing
 */
public class User implements Serializable {
    private Long userId;
    private String userName;
    private String password;
    // 权限ID
    private String rightId;
    // 用户登录令牌
    private String token;
    // 用户登录时间
    private Long tokenCreateTime;
    // 用户状态  锁定\未锁定
    private Long userStatus;
    // 用户选择的一位中草药
    private String herb;
    private String email;
    private Long mobile;
    // 密码错误次数
    private Long errorCount;
    private Date createTime;
    private Date updateTime;
    private String remark;

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", rightId='" + rightId + '\'' +
                ", token='" + token + '\'' +
                ", tokenCreateTime='" + tokenCreateTime + '\'' +
                ", userStatus=" + userStatus +
                ", herb='" + herb + '\'' +
                ", email='" + email + '\'' +
                ", mobile=" + mobile +
                ", errorCount=" + errorCount +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", remark='" + remark + '\'' +
                '}';
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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

    public String getRightId() {
        return rightId;
    }

    public void setRightId(String rightId) {
        this.rightId = rightId;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getTokenCreateTime() {
        return tokenCreateTime;
    }

    public void setTokenCreateTime(Long tokenCreateTime) {
        this.tokenCreateTime = tokenCreateTime;
    }

    public Long getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(Long userStatus) {
        this.userStatus = userStatus;
    }

    public String getHerb() {
        return herb;
    }

    public void setHerb(String herb) {
        this.herb = herb;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getMobile() {
        return mobile;
    }

    public void setMobile(Long mobile) {
        this.mobile = mobile;
    }

    public Long getErrorCount() {
        return errorCount;
    }

    public void setErrorCount(Long errorCount) {
        this.errorCount = errorCount;
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

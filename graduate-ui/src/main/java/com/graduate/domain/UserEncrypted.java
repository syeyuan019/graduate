package com.graduate.domain;

import java.util.Date;

/**
 * 用户密保问题实体类
 * @author wuhuijing
 */
public class UserEncrypted {
    private Long userId;
    private Long encryptedQuestionId;
    private String encryptedQuestion;
    private String answer;
    private Date createTime;
    private Date updateTime;
    private String remark;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getEncryptedQuestionId() {
        return encryptedQuestionId;
    }

    public void setEncryptedQuestionId(Long encryptedQuestionId) {
        this.encryptedQuestionId = encryptedQuestionId;
    }

    public String getEncryptedQuestion() {
        return encryptedQuestion;
    }

    public void setEncryptedQuestion(String encryptedQuestion) {
        this.encryptedQuestion = encryptedQuestion;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
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
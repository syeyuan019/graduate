package com.graduate.domain;

import java.beans.Transient;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 题目实体类
 * @author wuhuijing
 */
public class Question implements Serializable {
    private Long questionId;
    private String question;
    private String answer;
    private String answerList;
    private Long questionTypeId;
    // 题目来源
    private String source;
    private Date createTime;
    private Date updateTime;
    private String remark;

    private List<String> answerSplit;

    @Override
    public String toString() {
        return "Question{" +
                "questionId=" + questionId +
                ", question='" + question + '\'' +
                ", answer='" + answer + '\'' +
                ", answerList='" + answerList + '\'' +
                ", questionTypeId=" + questionTypeId +
                ", source='" + source + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", remark='" + remark + '\'' +
                ", answerSplit=" + answerSplit +
                '}';
    }

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getAnswerList() {
        return answerList;
    }

    public void setAnswerList(String answerList) {
        this.answerList = answerList;
    }

    public Long getQuestionTypeId() {
        return questionTypeId;
    }

    public void setQuestionTypeId(Long questionTypeId) {
        this.questionTypeId = questionTypeId;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
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

    public List<String> getAnswerSplit() {
        return answerSplit;
    }

    public void setAnswerSplit(List<String> answerSplit) {
        this.answerSplit = answerSplit;
    }
}

package com.graduate.domain;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Date;

/**
 * 笔记实体类
 * @author wuhuijing
 */
public class Note implements Serializable {
        private Long noteId;
        // 笔记存储地址
        private String noteName;
        private String address;
        private byte[] note;
        private Long noteTypeId;
        private Date createTime;
        private Date updateTime;
        private String remark;

    @Override
    public String toString() {
        return "Note{" +
                "noteId=" + noteId +
                ", noteName='" + noteName + '\'' +
                ", address='" + address + '\'' +
                ", note=" + Arrays.toString(note) +
                ", noteTypeId=" + noteTypeId +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", remark='" + remark + '\'' +
                '}';
    }

    public Long getNoteId() {
        return noteId;
    }

    public void setNoteId(Long noteId) {
        this.noteId = noteId;
    }

    public String getNoteName() {
        return noteName;
    }

    public void setNoteName(String noteName) {
        this.noteName = noteName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public byte[] getNote() {
        return note;
    }

    public void setNote(byte[] note) {
        this.note = note;
    }

    public Long getNoteTypeId() {
        return noteTypeId;
    }

    public void setNoteTypeId(Long noteTypeId) {
        this.noteTypeId = noteTypeId;
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

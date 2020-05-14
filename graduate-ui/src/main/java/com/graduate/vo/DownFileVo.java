package com.graduate.vo;

public class DownFileVo {
    public String fileName;
    public String data;

    @Override
    public String toString() {
        return "DownFileVo{" +
                "pathName='" + fileName + '\'' +
                ", data='" + data + '\'' +
                '}';
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}

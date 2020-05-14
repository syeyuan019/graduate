package com.graduate.vo;

import java.util.List;

public class ListVo {
    private String name;
    private List list;

    @Override
    public String toString() {
        return "ListVo{" +
                "name='" + name + '\'' +
                ", list=" + list +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List getList() {
        return list;
    }

    public void setList(List list) {
        this.list = list;
    }
}

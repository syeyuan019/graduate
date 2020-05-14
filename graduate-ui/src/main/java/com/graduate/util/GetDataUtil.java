package com.graduate.util;

import com.graduate.constant.Constant;
import com.graduate.result.UIResult;

import java.util.List;

public class GetDataUtil {

    public static UIResult getData(List list) {
        UIResult vo = new UIResult();
        String status;
        if(list.isEmpty()){
            status = Constant.SEARCH_RESULT_EMPTY;
            vo.setStatus(status);
            return vo;
        }
        status = Constant.OPERATE_SUCCESS_STATUS;
        vo.setStatus(status);
        vo.setModel(list);
        return vo;
    }
}

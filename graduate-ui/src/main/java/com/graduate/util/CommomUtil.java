package com.graduate.util;

import com.graduate.constant.Constant;
import org.jetbrains.annotations.Contract;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CommomUtil {

    @Contract(pure = true)
    public static String getStatus(int result) {
        String status = "";
        if(result == 1){
            status = Constant.OPERATE_SUCCESS_STATUS;
        }
        if(result == 0){
            status = Constant.OPERATE_ERROR_STATUS;
        }
        return status;
    }

    @Contract(pure = true)
    public static int judgeEmpty(List list) {
        int flag = 1;
        if (list.isEmpty()) {
            flag = 0;
        }
        return flag;
    }

}

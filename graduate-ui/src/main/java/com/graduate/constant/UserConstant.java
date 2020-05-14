package com.graduate.constant;

public class UserConstant {
    public static final int LOGIN_TIME_LIMIT = 3600;// 登陆期限

    public static final String LOGIN_SUCCESS_STATUS = "5";// 登陆成功
    public static final String LOGIN_ERROR_STATUS = "6";// 密码错误
    public static final String NO_EXIST_STATUS = "7";// 用户不存在
    public static final String EXIST_STATUS = "8";// 用户已存在
    public static final String LOGIN_STATUS = "9";// 用户登录中
    public static final String LOGIN_STATUS_MSG = "用户登录中";
    public static final String NO_LOGIN_STATUS = "10";// 用户未登录
    public static final String NO_LOGIN_STATUS_MSG = "用户未登录";
    public static final String LOGIN_HAS_EXPIRED = "11";// 用户登录过期
    public static final String LOGIN_HAS_EXPIRED_MSG = "用户登录过期";

    public static final String REGISTER_SUCCESS_STATUS = "12";// 注册成功
    public static final String REGISTER_ERROR_STATUS = "13";// 注册失败

}

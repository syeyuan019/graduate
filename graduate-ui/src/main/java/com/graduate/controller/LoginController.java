package com.graduate.controller;

import com.graduate.constant.Constant;
import com.graduate.constant.UserConstant;
import com.graduate.util.CommomUtil;
import com.graduate.util.JwtConfig;
import com.graduate.domain.User;
import com.graduate.result.UIResult;
import com.graduate.mapper.UserMapper;
import com.sun.org.apache.xpath.internal.operations.Bool;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * 登录注册接口
 * @author wuhuijing
 */
@RestController
@CrossOrigin(origins = {"http://localhost:3000"},allowCredentials = "true"
        ,methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.HEAD})
public class LoginController {

    @Autowired
    private UserMapper userMapper;

    @Resource
    private JwtConfig jwtConfig;

    /**
     * 登陆方法
     * @param request
     * @return UIResult
     */
    @RequestMapping("/login")
    public UIResult login(HttpServletRequest request) {

        // 返回前端的数据模板
        UIResult<User> loginVo = new UIResult();
        String status = "0";
        List<User> userModel = new ArrayList<>();
        String id = "";
        String token = "";
        // 获取登陆用户信息
        String userName = request.getParameter("userName");
        String password = request.getParameter("password");

        // 查找用户信息
        int count = userMapper.findUser(userName);
        User userMsg;

        // 用户存在，count=1
        if(count == 1){
            userMsg = userMapper.findUserByName(userName);
            id = userMsg.getUserId() + "";

            if(userMsg.getPassword().equals(password)){
                token = jwtConfig.getToken(id);
                Long nowTime = System.currentTimeMillis();
                userMapper.updateToken(token, userMsg.getUserId(), nowTime);
                status = UserConstant.LOGIN_SUCCESS_STATUS;

                userModel.add(userMsg);
                loginVo.setModel(userModel);
                loginVo.setToken(token);
            } else {
                // 返回错误信息
                status = UserConstant.LOGIN_ERROR_STATUS;
            }
        }else if (count == 0){
            // 返回错误信息
            status = UserConstant.NO_EXIST_STATUS;
        }else{//返回错误信息
            status = Constant.OTHER_ERROR_STATUS;
        }
        loginVo.setStatus(status);
        return  loginVo;
    }

    /**
     * 登陆校验方法
     * @return
     */
    @RequestMapping("/getLoginStatus")
    public UIResult getLoginStatus (HttpServletRequest request){
        UIResult<String> loginStatusResult = new UIResult();
        User user;
        Boolean loginOut = false;
        String token = request.getHeader("token");
        if (token == null || token == "") {
            loginStatusResult.setStatus(UserConstant.NO_LOGIN_STATUS);
            loginStatusResult.setMsg(UserConstant.NO_LOGIN_STATUS_MSG);
            return loginStatusResult;
        }
        if (token != null) {
            Claims tokenClaims = jwtConfig.parseToken(token);
            if (tokenClaims == null) {
                loginStatusResult.setStatus(UserConstant.NO_LOGIN_STATUS);
                loginStatusResult.setMsg(UserConstant.NO_LOGIN_STATUS_MSG);
                return loginStatusResult;
            }
            if (tokenClaims != null) {
                String sid = tokenClaims.get("sub").toString();
                Long id = Long.parseLong(sid);
                user = userMapper.findToken(id);
                if (user == null) {
                    loginStatusResult.setStatus(UserConstant.NO_LOGIN_STATUS);
                    loginStatusResult.setMsg(UserConstant.NO_LOGIN_STATUS_MSG);
                }
                if (user != null) {
                    loginOut = jwtConfig.isTokenExpired(user.getTokenCreateTime());
                    if (loginOut) {
                        loginStatusResult.setStatus(UserConstant.LOGIN_HAS_EXPIRED);
                        loginStatusResult.setMsg(UserConstant.LOGIN_HAS_EXPIRED_MSG);
                    } else {
                        loginStatusResult.setStatus(UserConstant.LOGIN_STATUS);
                        loginStatusResult.setMsg(UserConstant.LOGIN_STATUS_MSG);
                    }
                }
            }
        }
        return loginStatusResult;
    }

    /**
     * 登出方法
     * @return
     */
    @RequestMapping("/loginOut")
    public UIResult loginOut (HttpServletRequest request) {
        UIResult<String> loginOutResult = new UIResult();
        String token = request.getHeader("token");
        Claims tokenClaims = jwtConfig.parseToken(token);
        if (tokenClaims == null) {
            loginOutResult.setStatus(Constant.OTHER_ERROR_STATUS);
            return loginOutResult;
        }
        if (tokenClaims != null) {
            String sid = tokenClaims.get("sub").toString();
            Long id = Long.parseLong(sid);
            userMapper.deleteToken(id);
            loginOutResult.setStatus(Constant.OPERATE_SUCCESS_STATUS);
        }
        return loginOutResult;
    }

    /**
     * 注册方法
     * @param user
     * @return
     */
    @RequestMapping("/register")
    public UIResult register (User user){
        UIResult loginResult = new UIResult();
        List<User> userList = userMapper.findAllUser();
        int result = 0;
        //检测用户唯一性
        if (user != null) {
            for (User user1: userList) {
                if(user.getUserName().equals(user1.getUserName())){
                    loginResult.setStatus(UserConstant.EXIST_STATUS);
                    return loginResult;
                }
            }
            Long size = new Long((long)userList.size());
            user.setUserId(size);
            user.setRightId("2");
            user.setUserStatus(1L);
            result = userMapper.insertUser(user);//插入新用户记录
            String status = CommomUtil.getStatus(result);
            if (Constant.OPERATE_SUCCESS_STATUS.equals(status)) {
                loginResult.setStatus(UserConstant.REGISTER_SUCCESS_STATUS);
            }
            if (Constant.OPERATE_ERROR_STATUS.equals(status)) {
                loginResult.setStatus(UserConstant.REGISTER_ERROR_STATUS);
            }
        }
        return loginResult;
    }

}

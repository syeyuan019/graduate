package com.graduate.controller;

import com.graduate.constant.Constant;
import com.graduate.constant.MailConstant;
import com.graduate.result.UIResult;
import com.graduate.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"},allowCredentials = "true"
        ,methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.HEAD})
public class MailController {

    @Autowired
    private MailService mailService;

    /**
     * 获取邮箱验证码方法
     * @param request
     * @return
     */
    @RequestMapping("/getCheckCode")
    public UIResult getCheckCode(HttpServletRequest request){
        UIResult<String> uiResult = new UIResult<>();
        List<String> model = new ArrayList<>();
        String email = request.getParameter("email");
        String checkCode = String.valueOf(new Random().nextInt(899999) + 100000);
        String message = "您的忘记密码验证码为："+checkCode;
        try {
            mailService.sendSimpleMail(email, "忘记密码验证码", message);
        }catch (Exception e){
            uiResult.setStatus(MailConstant.Mail_ERROR_SEND);
            return uiResult;
        }
        uiResult.setStatus(MailConstant.Mail_SUCCESS_SEND);
        uiResult.setMsg(checkCode);
        uiResult.setModel(model);
        return uiResult;
    }
}

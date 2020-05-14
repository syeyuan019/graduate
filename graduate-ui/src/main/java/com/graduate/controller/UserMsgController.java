package com.graduate.controller;

import com.graduate.constant.Constant;
import com.graduate.constant.UserConstant;
import com.graduate.domain.EncryptedQuestion;
import com.graduate.domain.User;
import com.graduate.domain.UserEncrypted;
import com.graduate.result.UIResult;
import com.graduate.mapper.EncryptedQuestionMapper;
import com.graduate.mapper.UserMapper;
import com.graduate.util.CommomUtil;
import com.graduate.vo.ListVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"},allowCredentials = "true"
        ,methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.HEAD})
public class UserMsgController {

    @Autowired
    private EncryptedQuestionMapper encryptedQuestionMapper;

    @Autowired
    private UserMapper userMapper;

    /**
     * 修改用户信息
     * @param user
     * @return
     */
    @RequestMapping("/updateUser")
    public UIResult updateUser(User user){
        UIResult<User> userResult = new UIResult();
        int result = userMapper.updateUser(user);
        userResult.setStatus(CommomUtil.getStatus(result));
        return userResult;
    }

    /**
     * 修改密码
     * @param user
     * @return
     */
    @RequestMapping("/updatePwd")
    public UIResult updatePwd(User user){
        UIResult<User> userResult = new UIResult();
        int result = userMapper.updatePwd(user);
        userResult.setStatus(CommomUtil.getStatus(result));
        return userResult;
    }

    /**
     * 获取密保问题列表
     * @return
     */
    @RequestMapping("/getEncryptedQuestion")
    public UIResult getEncryptedQuestion(){
        UIResult<EncryptedQuestion> encryptedQuestion = new UIResult();
        List<EncryptedQuestion> list = encryptedQuestionMapper.findAllEncryptedQuestion();
        if (list.isEmpty()) {
            encryptedQuestion.setStatus(Constant.SEARCH_RESULT_EMPTY);
        }
        if (list != null) {
            encryptedQuestion.setStatus(Constant.OPERATE_SUCCESS_STATUS);
            encryptedQuestion.setModel(list);
        }
        return encryptedQuestion;
    }

    /**
     * 获取用户密保问题
     * @return
     */
    @RequestMapping("/validateUserEncrypted")
    public UIResult validateUserEncrypted(ListVo listVo){
        UIResult<UserEncrypted> userEncrypted = new UIResult();
        User user;
        List<UserEncrypted> listUserEncrupted;
        int flag = userMapper.findUser(listVo.getName());
        if (flag == 0) {
            userEncrypted.setStatus(UserConstant.NO_EXIST_STATUS);
            return userEncrypted;
        }
        if (flag != 0) {
            user = userMapper.findUserByName(listVo.getName());
            listUserEncrupted = userMapper.findUserEncrypted(user.getUserId());
            int isEmpty = CommomUtil.judgeEmpty(listUserEncrupted);
            if (isEmpty == 0) {
                userEncrypted.setStatus(Constant.SEARCH_RESULT_EMPTY);
                return userEncrypted;
            }
            if (isEmpty == 1) {
                userEncrypted.setStatus(Constant.OPERATE_SUCCESS_STATUS);
                userEncrypted.setModel(listUserEncrupted);
            }
        }
        return userEncrypted;
    }

    /**
     * 设置密保问题
     * @return
     */
    @RequestMapping("/setEncryptedQuestion")
    public UIResult setEncryQues(UserEncrypted vo) {
        UIResult<UserEncrypted> setEncryptedResult = new UIResult();
        List<Integer> resultList = new ArrayList<>();
        EncryptedQuestion encrypted = userMapper.findQuestionById(vo.getEncryptedQuestionId());
        vo.setEncryptedQuestion(encrypted.getEncryptedQuestion());
        Integer result = 0;

        result = userMapper.insertEncryQues(vo);
        resultList.add(result);

        setEncryptedResult.setStatus(Constant.OPERATE_SUCCESS_STATUS);
        return setEncryptedResult;
    }
}

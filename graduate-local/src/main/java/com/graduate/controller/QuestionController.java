package com.graduate.controller;

import com.graduate.constant.Constant;
import com.graduate.domain.Question;
import com.graduate.mapper.QuestionMapper;
import com.graduate.result.UIResult;
import com.graduate.util.CommomUtil;
import com.graduate.util.GetDataUtil;
import com.graduate.vo.ListVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"},allowCredentials = "true"
        ,methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.HEAD})
public class QuestionController {

    @Autowired
    private QuestionMapper questionMapper;

    /**
     * 查找选中类型题目（分类）
     * @param listVo
     * @return
     */
    @RequestMapping("/getQuestion")
    public UIResult getQuestion(ListVo listVo) {
        UIResult questionVo = new UIResult();
        List list = listVo.getList();
        List<Question> questionList = questionMapper.findByType(list);
        int judge = CommomUtil.judgeEmpty(questionList);
        if (judge == 1) {
            List<Question> chooseList = new ArrayList<>();
            List<Question> fillList = new ArrayList<>();
            List<Question> judgeList = new ArrayList<>();
            List<Question> subjectiveList = new ArrayList<>();
            int i;
            for (i = 0; i < questionList.size(); i++) {
                if (questionList.get(i).getQuestionTypeId() == 1) {
                    chooseList.add(questionList.get(i));
                    continue;
                }
                if (questionList.get(i).getQuestionTypeId() == 2) {
                    judgeList.add(questionList.get(i));
                    continue;
                }
                if (questionList.get(i).getQuestionTypeId() == 3) {
                    fillList.add(questionList.get(i));
                    continue;
                }
                if (questionList.get(i).getQuestionTypeId() == 4) {
                    subjectiveList.add(questionList.get(i));
                    continue;
                }
            }
            String answerMsg;
            for (i = 0; i < chooseList.size(); i++) {
                answerMsg = chooseList.get(i).getAnswerList();
                chooseList.get(i).setAnswerSplit(getAnswerList(answerMsg));
            }
            List resultList = new ArrayList();
            resultList.add(chooseList);
            resultList.add(judgeList);
            resultList.add(fillList);
            resultList.add(subjectiveList);
            questionVo.setModel(resultList);
            questionVo.setStatus(Constant.OPERATE_SUCCESS_STATUS);
        }
        if (judge == 0) {
            questionVo.setStatus(Constant.SEARCH_RESULT_EMPTY);
        }
        return  questionVo;
    }
    /**
     * 分隔选择判断答案列表
     * @param answerMsg
     * @return
     */
    public List<String> getAnswerList(String  answerMsg) {
        List<String> answerList = new ArrayList<>();
        String[] answer = answerMsg.split("，");
        for (int i = 0; i < answer.length; i++) {
            answerList.add(answer[i]);
        }
        return answerList;
    }

}

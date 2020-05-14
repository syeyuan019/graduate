package com.graduate.mapper;

import com.graduate.domain.EncryptedQuestion;
import com.graduate.vo.ListVo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface EncryptedQuestionMapper {

    /**
     * 获取密保问题列表
     * @return
     */
    @Select("select e.encrypted_question_id, e.encrypted_question from g_encrypted_question e")
    List<EncryptedQuestion> findAllEncryptedQuestion();
}

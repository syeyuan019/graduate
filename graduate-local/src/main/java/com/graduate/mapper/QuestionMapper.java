package com.graduate.mapper;

import com.graduate.domain.Question;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface QuestionMapper {

    /**
     * 根据题目类型，查询题目数据
     * @return
     */
    @Select({
            "<script>",
            "select",
            "q.question_id, q.question_type_id, q.question, q.answer_list, q.answer",
            "from g_question q",
            "where q.question_type_id in",
            "<foreach collection='list' item='id' open='(' separator=',' close=')'>",
            "#{id}",
            "</foreach>",
            "</script>"
    })
    List<Question> findByType(@Param("list") List<Long> list);


    /**
     * 根据Id删除记录
     * @return
     */
    @Delete("delete from g_question q where q.ques_id = #{quesId}")
    int deleteById(Long quesId);

    /**
     * 插入一条新记录
     * @return
     */
    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "ques_id")
    @Insert("insert into g_question q " +
            "(q.question, q.answer_list, q.answer, q.ques_type_id, q.source, q.remark) " +
            " values (#{question}, #{answerList}, #{answer}, #{quesTypeId}, #{source}, #{remark})")
    int insertQuestion(Question question);

    /**
     * 更新问题
     * @return
     */
    @Update("update g_question q set q.question = #{question}, " +
            " q.answer_list = #{answerList}, q.ques_type_id = #{quesTypeId}, " +
            " q.source = #{source}, q.remark = #{remark} where q.ques_id = #{quesId}")
    int updateQuestion(Question question);

}

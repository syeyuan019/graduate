package com.graduate.mapper;

import com.graduate.domain.EncryptedQuestion;
import com.graduate.domain.User;
import com.graduate.domain.UserEncrypted;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserMapper {

    /**
     * 根据用户名查找用户信息
     * @param userName
     * @return
     */
    @Select("select u.user_id, u.user_name, u.password, u.email, u.mobile, u.herb from g_user u where u.user_name=#{userName}")
    User findUserByName (String userName);

    /**
     * 获取token信息
     * @param id
     * @return
     */
    @Select("select u.token, u.token_create_time from g_user u where u.user_id=#{id}")
    User findToken (Long id);

    /**
     * 保存token信息
     * @param token, id
     * @return
     */
    @Update("update g_user u set u.token = #{token}, u.token_create_time = #{loginLimitTime} " +
            " where u.user_id = #{id}")
    int updateToken (String token, Long id, Long loginLimitTime);

    /**
     * 删除token信息
     * @param id
     * @return
     */
    @Update("update g_user u set u.token = null, u.token_create_time = null " +
            " where u.user_id = #{id}")
    int deleteToken (Long id);

    /**
     * 根据用户名查找用户是否存在，返回1/0
     * @param userName
     * @return
     */
    @Select("select count(*) from g_user u where u.user_name=#{userName}")
    int findUser (String userName);

    /**
     * 返回所有用户列表
     * @return
     */
    @Select("select * from g_user")
    List<User> findAllUser();

    /**
     * 新建用户
     * @return
     */
    @Insert("insert into g_user u (u.user_id, u.user_name, u.password, u.right_id, u.user_status, u.email, u.mobile, u.herb)" +
            " values (#{userId}, #{userName}, #{password}, #{rightId}, #{userStatus},  #{email}, #{mobile}, #{herb})")
    int insertUser(User user);

    /**
     * 设置密保问题
     * @param user
     * @return
     */
    @Insert("insert into g_user_encrypted u (u.user_id, u.encrypted_question_id, u.encrypted_question, u.answer)" +
            " values (#{userId}, #{encryptedQuestionId}, #{encryptedQuestion}, #{answer})")
    int insertEncryQues(UserEncrypted user);

    /**
     * 获取密保问题
     * @param encryptedQuestionId
     * @return
     */
    @Select("select e.encrypted_question from g_encrypted_question e " +
            " where e.encrypted_question_id=#{encryptedQuestionId}")
    EncryptedQuestion findQuestionById (Long encryptedQuestionId);

    /**
     * 获取用户密保问题
     * @param userId
     * @return
     */
    @Select("select e.user_id, e.encrypted_question_id, e.encrypted_question, " +
            " e.answer from g_user_encrypted e where e.user_id=#{userId}")
    List<UserEncrypted> findUserEncrypted (Long userId);

    /**
     * 更新用户信息
     * @param user
     * @return
     */
    @Update("update g_user u set u.email = #{email}, u.mobile = #{mobile}, u.herb = #{herb} " +
            " where u.user_name = #{userName}")
    int updateUser(User user);

    /**
     * 更新密码
     * @param user
     * @return
     */
    @Update("update g_user u set u.password = #{password} " +
            " where u.user_name = #{userName}")
    int updatePwd(User user);
}

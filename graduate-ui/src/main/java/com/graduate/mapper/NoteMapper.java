package com.graduate.mapper;

import com.graduate.domain.Note;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface NoteMapper {

    /**
     * 根据笔记名查找笔记信息
     * @param noteName
     * @return
     */
    @Select("select n.note_id, n.note_name, n.address, " +
            " n.note, n.note_type_id, n.remark from g_note n where n.note_name=#{noteName}")
    Note findNoteByName(String noteName);

    /**
     * 根据笔记名查找笔记是否存在，返回1/0
     * @param noteName
     * @return
     */
    @Select("select count(*) from g_note n where n.note_name=#{noteName}")
    int findNote(String noteName);

    /**
     * 返回所有笔记列表
     * @return
     */
    @Select("select n.note_id, n.note_name, n.address, " +
            " n.note, n.note_type_id, n.remark from g_note n")
    List<Note> findAllNote();

    /**
     * 新建笔记
     * @return
     */
    @Insert("insert into g_note n (n.note_id, n.note_name, n.address, n.note)" +
            " values (#{noteId}, #{noteName}, #{address}, #{note})")
    int insertNote(Note note);

    /**
     * 更新笔记信息
     * @param note
     * @return
     */
    @Update("update g_note n set n.note_name = #{noteName}, n.address = #{address}, " +
            " n.note = #{note} where n.note_id=#{noteId}")
    int updateNote(Note note);

    /**
     * 删除一条网址记录
     */
    @Delete({
            "<script>",
            "delete ",
            "from g_note n",
            "where n.note_id in",
            "<foreach collection='list' item='id' open='(' separator=',' close=')'>",
            "#{id}",
            "</foreach>",
            "</script>"
    })
    int removeNote(List list);
}

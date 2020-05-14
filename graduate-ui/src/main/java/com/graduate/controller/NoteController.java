package com.graduate.controller;

import com.graduate.constant.Constant;
import com.graduate.constant.NoteConstant;
import com.graduate.domain.Note;
import com.graduate.mapper.NoteMapper;
import com.graduate.result.UIResult;
import com.graduate.util.CommomUtil;
import com.graduate.vo.DownFileVo;
import com.graduate.vo.ListVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 保存笔记接口
 * @author wuhuijing
 */
@RestController
@CrossOrigin(origins = {"http://localhost:3000"},allowCredentials = "true"
        ,methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.HEAD})
public class NoteController {

    @Autowired
    private NoteMapper noteMapper;

    /**
     * 查询笔记列表方法
     * @param
     * @return
     */
    @RequestMapping("/searchNoteList")
    public UIResult searchNoteList () {
        UIResult searchNoteResult = new UIResult();
        List<Note> noteList = noteMapper.findAllNote();
        String status = CommomUtil.getStatus(CommomUtil.judgeEmpty(noteList));
        searchNoteResult.setStatus(status);
        searchNoteResult.setModel(noteList);
        return searchNoteResult;
    }

    /**
     * 查询笔记
     * @param noteName
     * @return
     */
    @RequestMapping("/findNoteByName")
    public UIResult findNoteByName (String noteName) {
        UIResult findResult = new UIResult();
        List<Note> noteList = new ArrayList<>();
        int exist = noteMapper.findNote(noteName);
        if (exist == 0) {
           findResult.setStatus(NoteConstant.NOTE_NOT_EXIST);
           return findResult;
        }
        if (exist == 1) {
            Note note = noteMapper.findNoteByName(noteName);
            noteList.add(note);
            findResult.setStatus(Constant.OPERATE_SUCCESS_STATUS);
            findResult.setModel(noteList);
        }
        return findResult;
    }

    /**
     * 保存到本地方法
     * @param
     * @return
     */
    @RequestMapping("/downFile")
    public UIResult downFile (DownFileVo downFileVo) {
        UIResult downFileResult = new UIResult();
        Note note = new Note();
        try {
            String path = "F:\\笔记\\" + downFileVo.getFileName() + ".html";
            File file = new File(path);
            if (!file.getParentFile().exists()) {
                file.getParentFile().mkdirs();
            }
            file.createNewFile();
            if(downFileVo.getData() != null && !"".equals(downFileVo.getData())){
                FileWriter fw = new FileWriter(file, true);
                fw.write(downFileVo.getData());// 写入本地文件中
                fw.flush();
                fw.close();
                System.out.println("执行完毕!");

                InputStream is = new FileInputStream(file);
                byte[] blobByte = new byte[is.available()];
                is.read(blobByte);
                is.close();

                note.setNoteName(downFileVo.getFileName());
                note.setAddress(path);
                note.setNote(blobByte);
                String status = saveNote(note);
                downFileResult.setStatus(status);
            }
        } catch (IOException e) {
            e.printStackTrace();
            downFileResult.setStatus(Constant.OPERATE_ERROR_STATUS);
        }
        return downFileResult;
    }

    /**
     * 保存到数据库方法
     * @param
     * @return
     */
    public String saveNote (Note note) {
        int result = 0;
        int exist = noteMapper.findNote(note.getNoteName());
        if (exist == 0) {
            note.setNoteId(1L);
            result = noteMapper.insertNote(note);
        }
        if (exist == 1) {
            result = noteMapper.updateNote(note);
        }
        String status = CommomUtil.getStatus(result);
        return status;
    }

    /**
     * 笔记删
     * @param listVo
     * @return
     */
    @RequestMapping("/deleteNote")
    public UIResult deleteNote(ListVo listVo) {
        UIResult<Note> deleteNote = new UIResult();
        int result = 0;
        result = noteMapper.removeNote(listVo.getList());
        deleteNote.setStatus(CommomUtil.getStatus(result));
        return deleteNote;
    }
}

package com.graduate.controller;

import com.graduate.domain.Picture;
import com.graduate.mapper.PictureMapper;
import com.graduate.result.UIResult;
import com.graduate.util.GetDataUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"},allowCredentials = "true"
        ,methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.HEAD})
public class PictureController {

    @Autowired
    private PictureMapper pictureMapper;

    /**
     * 查找图片地址、名称
     * @return
     */
    @RequestMapping("/getPicture")
    public UIResult getPicture() {
        UIResult<String> pictureVo;
        List<Picture> picture = pictureMapper.findAddress();
        List<String> pictureList = new ArrayList<>();
        String data = "";
        for (Picture p: picture) {
            data = data + p.getPictureName();
            data = data + ",";
            data = data + p.getAddress();
            pictureList.add(data);
            data = "";
        }
        pictureVo = GetDataUtil.getData(pictureList);
        return  pictureVo;
    }

}

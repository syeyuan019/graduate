package com.graduate.mapper;

import com.graduate.domain.Picture;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface PictureMapper {

    /**
     * 查询图片地址数据
     * @return
     */
    @Select("select p.address, p.picture_name pictureName from g_picture p")
    List<Picture>  findAddress();


}

package com.graduate.mapper;

import com.graduate.domain.Question;
import com.graduate.domain.SiteType;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface SiteTypeMapper {

    /**
     * 获取网站目录一级分类名称
     * @return
     */
    @Select("select s.site_type_name from g_site_type s where s.type_level = 1")
    List<String>  findSiteTypeOne();

    /**
     * 获取网站目录二级分类名称
     * @return
     */
    @Select("select s.site_type_name from g_site_type s where s.type_level = 2")
    List<String>  findSiteTypeTwo();

}

package com.graduate.mapper;

import com.graduate.domain.Site;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface SiteMapper {

    /**
     * 返回选中目录下的所有网址数据
     * @return
     */
    @Select("select s.site_id, s.site_address, s.site_msg from g_site s where s.site_type_one=#{siteTypeOne}" +
            " and s.site_type_two=#{siteTypeTwo}")
    List<Site> findSiteByType(Site site);

    /**
     * 网址数据总数
     * @return
     */
    @Select("select count(*) from g_site")
    Long count();

    /**
     * 新增一条网址记录
     * 返回1成功执行，0失败
     * 还可以返回boolean
     */
    @Insert("insert into g_site s " +
            "(s.site_id, s.site_address, s.site_msg, s.site_type_one, s.site_type_two) " +
            " values (#{siteId}, #{siteAddress}, #{siteMsg}, #{siteTypeOne}, #{siteTypeTwo})")
    int insertSite(Site site);

    /**
     * 删除一条网址记录
     */
    @Delete({
            "<script>",
            "delete ",
            "from g_site s",
            "where s.site_id in",
            "<foreach collection='list' item='id' open='(' separator=',' close=')'>",
            "#{id}",
            "</foreach>",
            "</script>"
    })
    int removeSite(List list);

    /**
     * 删除所在目录下所有网址记录
     */
    @Delete("delete from g_site s where s.site_type_one = #{siteTypeOne}" +
            " and s.site_type_two = #{siteTypeTwo})")
    int removeAllSite(String siteTypeOne, String siteTypeTwo);

    /**
     * 修改网址
     */
    @Update("update g_site s set s.site_address = #{siteAddress}, " +
            " s.site_msg = #{siteMsg}, s.site_type_one = #{siteTypeOne}, " +
            " s.site_type_two = #{siteTypeTwo} where s.site_id = #{siteId}")
    int updateSite(Site site);

}

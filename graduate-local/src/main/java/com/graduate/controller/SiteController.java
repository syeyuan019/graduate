package com.graduate.controller;

import com.graduate.constant.Constant;
import com.graduate.domain.Site;
import com.graduate.mapper.SiteTypeMapper;
import com.graduate.result.UIResult;
import com.graduate.util.CommomUtil;
import com.graduate.util.GetDataUtil;
import com.graduate.mapper.SiteMapper;
import com.graduate.vo.ListVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 网址操作
 * @author wuhuijing
 * @date 2020-4
 */
@RestController
@CrossOrigin(origins = {"http://localhost:3000"},allowCredentials = "true"
        ,methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.HEAD})
public class SiteController {

    @Autowired
    private SiteMapper siteMapper;

    @Autowired
    private SiteTypeMapper siteTypeMapper;

    /**
     * 网址增
     * @param site
     * @return
     */
    @RequestMapping("/addSite")
    public UIResult addSite(Site site) {
        UIResult<Site> addSite = new UIResult();
        int result = 0;
        Long count = siteMapper.count() + 1;
        site.setSiteId(count);
        result = siteMapper.insertSite(site);
        addSite.setStatus(CommomUtil.getStatus(result));
        return addSite;
    }

    /**
     * 网址删
     * @param listVo
     * @return
     */
    @RequestMapping("/deleteSite")
    public UIResult deleteSite(ListVo listVo) {
        UIResult<Site> deleteSite = new UIResult();
        int result = 0;
        result = siteMapper.removeSite(listVo.getList());
        deleteSite.setStatus(CommomUtil.getStatus(result));
        return deleteSite;
    }

    /**
     * 网址删除目录下所有
     * @param list
     * @return
     */
    @RequestMapping("/deleteAllSite")
    public UIResult deleteAllSite(List<String> list) {
        UIResult<Site> deleteAllSite = new UIResult();
        int result = siteMapper.removeAllSite(list.get(0), list.get(1));
        deleteAllSite.setStatus(CommomUtil.getStatus(result));
        return deleteAllSite;
    }

    /**
     * 网址改
     * @param site
     * @return
     */
    @RequestMapping("/updateSite")
    public UIResult updateSite(Site site) {
        UIResult<Site> updateSite = new UIResult<>();
        int result = siteMapper.updateSite(site);
        updateSite.setStatus(CommomUtil.getStatus(result));
        return updateSite;
    }

    /**
     * 查找选中目录下的所有网址数据
     * @param site
     * @return
     */
    @RequestMapping("/getSite")
    public UIResult getSite(Site site) {
        UIResult<Site> siteResult = new UIResult();
        List<Site> list = siteMapper.findSiteByType(site);
        if (list != null) {
            siteResult.setStatus(Constant.OPERATE_SUCCESS_STATUS);
            siteResult.setModel(list);
        }
        if (list == null) {
            siteResult.setStatus(Constant.SEARCH_RESULT_EMPTY);
        }
        return  siteResult;
    }

    /**
     * 获取网站目录一级分类名称
     * @return siteTypeVo
     */
    @RequestMapping("/getSiteOneType")
    public UIResult getSiteOneType() {
        UIResult<String> siteTypeVo = new UIResult();
        List<String> siteTypeOne = siteTypeMapper.findSiteTypeOne();

        siteTypeVo = GetDataUtil.getData(siteTypeOne);
        return  siteTypeVo;
    }

    /**
     * 获取网站目录二级分类名称
     * @return siteTypeVo
     */
    @RequestMapping("/getSiteTwoType")
    public UIResult getSiteTwoType() {
        UIResult<String> siteTypeVo = new UIResult();
        List<String> siteTypeTwo = siteTypeMapper.findSiteTypeTwo();

        siteTypeVo = GetDataUtil.getData(siteTypeTwo);
        return siteTypeVo;
    }
}

import request from '@/utils/request';

const service = {
    geHomeData: () => request({
        url: '/addons/cydweb/api.index/index',
        method: 'GET'
    }),
    getDesignerList: (params?: ServicePagination): Promise<ServiceResult<object[]>> => request({
        url: '/addons/cydweb/api.index/designerList',
        method: 'GET',
        params
    }),
    getTeamList: (params?: ServicePagination): Promise<ServiceResult<object[]>> => request({
        url: '/addons/cydweb/api.index/teamList',
        method: 'GET',
        params
    }),
    getPartnerList: (params?: ServicePagination): Promise<ServiceResult<object[]>> => request({
        url: '/addons/cydweb/api.index/partnerList',
        method: 'GET',
        params
    }),
    getRecruitmentList: (params?: ServicePagination): Promise<ServiceResult<object[]>> => request({
        url: '/addons/cydweb/api.index/recruitmentList',
        method: 'GET',
        params
    }),
    getNewsList: (params?: ServicePagination): Promise<ServiceResult<object[]>> => request({
        url: '/addons/cydweb/api.index/newsList',
        method: 'GET',
        params
    })
}

export default service;

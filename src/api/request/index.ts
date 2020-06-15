import request from '@/utils/request';

const service = {
    geHomeData: () => request({
        url: '/addons/cydweb/api.index/index',
        method: 'GET'
    }),
    getDesignerList: (data?: ServicePagination): Promise<ServiceResult<object[]>> => request({
        url: '/addons/cydweb/api.index/designerList',
        method: 'GET',
        data
    }),
    getTeamList: (data?: ServicePagination): Promise<ServiceResult<object[]>> => request({
        url: '/addons/cydweb/api.index/teamList',
        method: 'GET',
        data
    }),
    getPartnerList: (data?: ServicePagination): Promise<ServiceResult<object[]>> => request({
        url: '/addons/cydweb/api.index/partnerList',
        method: 'GET',
        data
    }),
    getRecruitmentList: (data?: ServicePagination): Promise<ServiceResult<object[]>> => request({
        url: '/addons/cydweb/api.index/recruitmentList',
        method: 'GET',
        data
    }),
    getNewsList: (data?: ServicePagination): Promise<ServiceResult<object[]>> => request({
        url: '/addons/cydweb/api.index/newsList',
        method: 'GET',
        data
    })
}

export default service;

import request from '@/utils/request';

const service = {
    geHomeData: () => request({
        url: '/addons/cydweb/api.index/index',
        method: 'GET'
    }),
    getProductList: (params: ServicePagination): Promise<ServiceResult<ServiceProductDetail[]>> => request({
        url: '/addons/cydweb/api.index/productList',
        method: 'GET',
        params
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
    getRecruitmentList: (params?: ServicePagination): Promise<ServiceResult<ServiceNewDetails[]>> => request({
        url: '/addons/cydweb/api.index/recruitmentList',
        method: 'GET',
        params
    }),
    getNewsList: (params?: ServicePagination): Promise<ServiceResult<object[]>> => request({
        url: '/addons/cydweb/api.index/newsList',
        method: 'GET',
        params
    }),
    getHelpNav: (): Promise<ServiceResultObject<object[]>> => request({
        url: '/addons/cydweb/api.index/helpNav',
        method: 'GET'
    }),
    getHelpDetails: (params: {id: number}): Promise<{data: ServiceHelpDetails}> => request({
        url: '/addons/cydweb/api.index/helpDetail',
        method: 'GET',
        params
    }),
    searchHelp: (params: {keyword: string}): Promise<ServiceResultObject<object[]>> => request({
        url: '/addons/cydweb/api.index/helpSearch',
        method: 'GET',
        params
    }),
    getRecruitmentDetails:(params: {id: number}): Promise<{data: ServiceRecDetails}> => request({
        url: '/addons/cydweb/api.index/recruitmentDetail',
        method: 'GET',
        params
    }),
    getNewsDetails: (params: {id: number}): Promise<{data: ServiceNewDetails}> => request({
        url: '/addons/cydweb/api.index/newsDetail',
        method: 'GET',
        params
    }),
    getPartnerDetails: (params: {id: number}): Promise<{data: ServicePartnerDetail}> => request({
        url: '/addons/cydweb/api.index/partnerDetail',
        method: 'GET',
        params
    })
}

export default service;

import request from '@/utils/request';

const service = {
    geHomeData: () => request({
        url: '/addons/cydweb/api.index/index',
        method: 'GET'
    })
}

export default service;

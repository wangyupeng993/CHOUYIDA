import axios from 'axios';
const queryString = require('querystring');
const URL = process.env.NODE_ENV === 'development' ? '/' : 'http://www.chouyida.eshchat.com';

const service = axios.create({
    baseURL: URL,
    timeout: 50000,
    responseType: 'json',
    // 向后端发送请求
    transformRequest: [request => {
        return request && request.append ? request : queryString.stringify(request);
    }],
    // 后端返回数据
    transformResponse: [response => response]
});

// 请求响应前拦截
service.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
);

 service.interceptors.response.use(response => {
     let JSONOBJ = null;
     try {
         JSONOBJ = JSON.parse(response.data);
     } catch (e) {
         JSONOBJ = response.data;
     }
     return JSONOBJ
 }, error => Promise.reject(error));

export default service;

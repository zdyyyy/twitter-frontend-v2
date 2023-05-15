import axios from 'axios';

// http://google.com/user
const domain = 'http://localhost:3333';
//对于接口请求前的参数转换，主要添加统一的domain
axios.interceptors.request.use((config) => ({
    ...config,
    url: domain + config.url,

}));

// 对返回的结果，做拦截，主要有两部分: 数据转换和错误处理
axios.interceptors.response.use((response) => {
    console.log(response.data);
    return response.data;
}, (error) => Promise.reject(error)
)

//get 获取服务器
export const get = (url) => axios.get(url);

// post 新增一个资源
export const post = (url,params) => axios.post(url,params);

// put 更新一个资源
export const put = (url,params) => axios.put(url,params);

// del 删除一个资源
export const del = (url,params) => axios.del(url,params);

// export const patch = () => axios.patch(url,params);
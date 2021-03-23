// 用于封装 axios 请求

import axios from 'axios';
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //此处是增加的代码，设置请求头的类型
const axiosInstance = axios.create({
});

const sendRequest = (config, cb) => {
  const { method, url, data } = config;
  return axiosInstance(Object.assign({
    method,
    url,
  }, method === 'get' ? { params: data } : { data })).then((res) => {
    cb(res.data);
  })
    .catch((err) => {
      throw err;
    });
};

export default sendRequest;

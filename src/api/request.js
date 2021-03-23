// 放置所有的请求函数

import axios from 'axios';

const axiosInstance = axios.create({});
const baseUrl = 'http://localhost:8003'

const sendRequest = (config, cb) => {
  const { method, url, params } = config;
  const fullUrl = `${baseUrl}${url}`
  return axiosInstance(Object.assign({
    method,
    url: fullUrl
  }, method === 'get' ? { params } : { data: params })).then((res) => cb ? cb(res.data) : res.data)
    .catch((err) => {
      throw err;
    });
};

const http = async (opts) => {
  try {
    return await sendRequest(opts)
  } catch (error) {
    console.log('error', error);
  }

};

export { http };

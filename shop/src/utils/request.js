//引入axios
import axios from "axios"

var instance=axios.create({
    timeout:10000
});//创建axios的实例

//全局拦截

//添加请求拦截器
instance.interceptors.request.use(function (config) {
    
   
    // 在发送请求之前做些什么
     return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
console.log(error);

    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default {
    post(url,data){
        return instance.post(url,data)
    },
    get(url,data){
        return instance.get(url,{params:data})
    }
  }
import axios from  "axios";
var instance=axios.create({
    baseURL:'http://localhost:3000',
    timeout:20000,
    headers:{'X':'foobar'}
})
//请求拦截器
instance.interceptors.request.use(function(config){
    //发送请求之前做什么
    return config
},function(error){
    return Promise.reject(error)
})

//相应拦截器
instance.interceptors.response.use(function(response){
    //发送请求之前做什么
    return response
},function(error){
    return Promise.reject(error)
})
export default instance
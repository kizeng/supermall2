import axios from 'axios'

export function request(config){
  const myAxios = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  //请求拦截器
  myAxios.interceptors.request.use(config=>{
    return config;
  },err=>{
    console.log(err);
  })

  //响应拦截器
  myAxios.interceptors.response.use(res=>{
    return res.data;
  }, err=>{
    console.log(err);
  })

  //返回请求之后的结果
  return myAxios(config)
}

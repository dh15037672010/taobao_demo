import axios from 'axios'
export function request(config) {
    //1.创建axios实例
    const instance = new axios.create({
      baseURL:'http://adi-v3.dev',
      timeout:5000
    })

  //2.对axios实例做拦截 拦截实例是局部拦截，拦截axios.interceptors是全局拦截，
  instance.interceptors.request.use(config =>{
    console.log(config);
    //①比如config中一些信息不符合服务器要求。
    //②比如每次发送前，在界面展示一个正在发送的转圈图标，
    //③某些网络请求（比如登录），携带一些信息（令牌）
    return config        //拦截成功并结束后要把信息返回出去，不然不能继续发送。
  },err =>{
    console.log(err);
  })

  //对axios实例做响应拦截，
  instance.interceptors.response.use(res => {
    //console.log(res);  一般不在这里处理而在main.js中处理
    return res.data
    //所以得返回出去结果，才能在main中接收到回调函数和参数。
  },error => {
    console.log(error);
  })

  return instance(config)
}

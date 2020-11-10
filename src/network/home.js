import {request} from './request'


//对应首页的其中一个请求。将url请求从home中剥离出来在这里集中管理。
export function getHomeMultidata() {
  return request({
    url:'/home/multidata',
  })
}


import request from '@/utils/request'

/****

获取热门城市列表
 */
 export function citys() {
     return request.get("/buyer/storelist")
 }
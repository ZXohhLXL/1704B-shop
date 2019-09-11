import request from "@/utils/request"

// 注册接口 @param {object} data {注册传递的参数}

export function registry(data) {
    return request.post("/buyer/user/register",data)
}
// 登录接口 @param {object} data {登录接口携带的参数}

export function login (data) {
    return request.post("/buyer/user/login",data)
}

//获取图形验证码接口 
  
// @param 无

export function captcha () {
    return request.get("/buyer/user/captcha")
}
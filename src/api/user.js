// /**
//  * Created by chen on 2018/10/12.
//  * 登录退出接口，创建一个数据库，专门来存放用户的信息，通过产生随机数的形式来产生唯一的id
//  */
// import axios from '@/libs/api.request'
//
// // 退出登录
// export const logout = (data) => {
//   return axios.request({
//     url: '/user/logout',
//     method: 'post',
//     data
//   })
// }
// // 用户信息 在App.vue里面需要调用一次这个接口来获取用户信息
// export const getUserInfo = (data) => {
//   return axios.request({
//     url: '/user/info',
//     method: 'get',
//     params: data
//   })
// }

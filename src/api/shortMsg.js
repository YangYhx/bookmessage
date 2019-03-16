// /**
//  * Created by chen on 2018/10/12.
//  * 存放各种接口的api
//  */
// import axios from '@/libs/api.request'
//
// export const smsList = (data) => {
//   return axios.request({
//     url: '/message/task/list',
//     method: 'post',
//     data
//   })
// }
// export const uploadFile = (data) => {
//   return axios.request({
//     url: '/message/file/upload',
//     method: 'post',
//     data
//   })
// }
// export const smsCreate = (data) => {
//   return axios.request({
//     url: '/message/task/new',
//     method: 'post',
//     data
//   })
// }
// export const smsUpdate = (data) => {
//   return axios.request({
//     url: '/message/task/edit',
//     method: 'post',
//     data
//   })
// }
// export const testSend = (data) => {
//   return axios.request({
//     url: '/message/send/single',
//     method: 'post',
//     data
//   })
// }
// export const smsDetail = (data) => {
//   return axios.request({
//     url: '/message/task/info',
//     method: 'post',
//     data
//   })
// }
// export const groupsList = (data) => {
//   return axios.request({
//     url: '/message/groups/list',
//     method: 'post',
//     data
//   })
// }
// //                *******************************创建邮箱的相关请求方法*********************************
//
// // 任务创建
// export const taskcreated = (data) => {
//   return axios.request({
//     url: '/message/emailtask/new',
//     method: 'post',
//     data
//   })
// }
// // 任务编辑 编辑保存的时候
// export const taskedit = (data) => {
//   return axios.request({
//     url: '/message/emailtask/edit',
//     method: 'post',
//     data
//   })
// }
// // 任务列表
// export const tasklist = (data) => {
//   return axios.request({
//     url: '/message/emailtask/list',
//     method: 'post',
//     data
//   })
// }
// // 删除任务 接收id
// export const deltask = (data) => {
//   return axios.request({
//     url: '/message/emailtask/del',
//     method: 'post',
//     data
//   })
// }
// // 任务详细信息 接收的是任务id
// export const taskdetail = (data) => {
//   return axios.request({
//     url: '/message/emailtask/info',
//     method: 'post',
//     data
//   })
// }
// // 邮箱添加
// export const emailcreated = (data) => {
//   return axios.request({
//     url: '/message/email/new',
//     method: 'post',
//     data
//   })
// }
// // 获取邮箱详细信息 接收id
// export const emaildetail = (data) => {
//   return axios.request({
//     url: '/message/email/info',
//     method: 'post',
//     data
//   })
// }
// // 编辑邮箱信息
// export const emailedit = (data) => {
//   return axios.request({
//     url: '/message/email/edit',
//     method: 'post',
//     data
//   })
// }
// // 邮箱状态修改 邮箱状态 0:初始化，1:默认邮箱，-1:删除邮箱
// export const emailstatus = (data) => {
//   return axios.request({
//     url: '/message/email/setstatus',
//     method: 'post',
//     data
//   })
// }
// // 获取邮箱列表，根据type去区分是发送邮箱还会回复邮箱
// export const emaillist = () => {
//   return axios.request({
//     url: '/message/email/list',
//     method: 'post'
//   })
// }
// // 获取商务大会邮箱列表
// export const athenaList = (data) => {
//   return axios.request({
//     url: '/athena/rules/list',
//     method: 'post',
//     data
//   })
// }
// // 通过参数获取邮箱地址
// export const emailsingle = (data) => {
//   return axios.request({
//     url: '/athena/email/get',
//     method: 'post',
//     data
//   })
// }
// // 邮箱任务测试发送
// export const testemailSend = (data) => {
//   return axios.request({
//     url: '/message/emailtask/testsend',
//     method: 'post',
//     data
//   })
// }

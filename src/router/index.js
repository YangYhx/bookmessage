import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import iView from 'iview'
import { canTurnTo } from '@/libs/util'
import axios from 'axios'
import Cookies from 'js-cookie'

Vue.use(Router)
const router = new Router({
  routes
})
// 这个地方是获取cookie中的user_id来判断是否有权限
const turnTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
  else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
}

// router.beforeEach((to, from, next) => {
//   iView.LoadingBar.start()
//   let userId = Cookies.get('userId')
//   if (userId) {
//     userId = userId.toString()
//     turnTo(to, [userId], next)
//   } else {
//     axios.post(`//admin.geekbang.org/user/scanurl`)
//       .then((resData) => {
//         if (resData.data.code === 0) {
//           window.location.href = resData.data.data.url
//         }
//       })
//       .catch((error) => {
//         if (error) {
//           iview.Message.error(`${error.error ? error.error.msg : '系统繁忙，稍后重试'}`)
//         }
//       })
//   }
// })

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router

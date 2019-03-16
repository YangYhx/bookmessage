<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {getUserInfo} from '@/api/user'
  import {mapMutations} from 'vuex'

  export default {
    name: 'App',
    methods: {
      getUser () {
        getUserInfo()
          .then(resData => {
            console.log(resData)
            this.setStorageInfo(resData)
          })
          .catch((error) => {
            this.$Message.destroy()
            if (error.response) {
              this.$Message.error(`请求服务错误，相关状态码 - ${error.response.status}, 相关信息 - ${error.response.data.error.msg}`)
            } else {
              if (error.error) {
                this.$Message.error(`${error.error ? error.error.msg : '系统繁忙，稍后重试'}`)
              } else {
                this.$Message.error(`数据解析错误，请联系管理员`)
              }
            }
          })
      },
      // 这里是将用户的一些信息存放在cookie中 ，以便在控制权限的时候来取出信息
      setStorageInfo (resData) {
        sessionStorage.setItem('access', [resData.id])
        sessionStorage.setItem('userId', resData.id)
        sessionStorage.setItem('userName', resData.remark)
        sessionStorage.setItem('branch', resData.branch)
        sessionStorage.setItem('avatar', resData.avatar)
        this.init()
      },
      init () {
        this.setAccess(sessionStorage.getItem('access') ? sessionStorage.getItem('access') : '')
        this.setUserId(sessionStorage.getItem('userId') ? sessionStorage.getItem('userId') : '')
        this.setUserName(sessionStorage.getItem('userName') ? sessionStorage.getItem('userName') : '')
        this.setUserBranch(sessionStorage.getItem('branch') ? sessionStorage.getItem('branch') : '')
        this.setAvator(sessionStorage.getItem('avatar') ? sessionStorage.getItem('avatar') : '')
      },
      ...mapMutations([
        'setAccess',
        'setUserId',
        'setUserName',
        'setUserBranch',
        'setAvator'
      ])
    },
    created () {
      // this.getUser()
    }
  }
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
</style>

<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      {{getUserBranch ? getUserBranch : '未知'}}-{{getUserName ? getUserName : '未知'}}
      <Avatar :src="userAvator"/>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
  import './user.less'
  import {mapGetters} from 'vuex'
  import {logout} from '@/api/user'

  export default {
    name: 'User',
    props: {
      userAvator: {
        type: String,
        default: ''
      }
    },
    methods: {
      handleClick (name) {
        switch (name) {
          case 'logout':
            this.$Modal.confirm({
              content: '确定退出登录吗？',
              onOk: () => {
                logout({
                  user_id: this.getUserId
                })
                  .then((data) => {
                    this.$store.commit('logout')
                    window.location = data.url
                  })
                  .catch((error) => {
                    if (error.response) {
                      this.$Message.error(`请求服务错误，相关状态码 - ${error.response.status}, 相关信息-${error.response.data.error.msg}`)
                    } else {
                      if (error.error) {
                        this.$Message.error(`${error.error ? error.error.msg : '系统繁忙，稍后重试'}`)
                      } else {
                        this.$Message.error(`数据解析错误，请联系管理员`)
                      }
                    }
                  })
              }
            })
            break
        }
      }
    },
    computed: {
      ...mapGetters([
        'getUserId',
        'getUserName',
        'getUserBranch'
      ])
    }
  }
</script>

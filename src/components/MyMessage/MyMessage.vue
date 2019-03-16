<template>
  <div class="my-message-box" v-show="isShowMessage">
    <div class="my-message-container">
      <div>
        <span class="my-message-icon">
          <i class="ivu-icon ivu-icon-ios-information-circle-outline"></i>
        </span>
        <div class="my-message-title">
          {{ title }}
        </div>
        <!--<div class="my-message-content">-->
          <!--内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容-->
          <!--内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容-->
          <!--内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容-->
          <!--内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容-->
          <!--内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容-->
        <!--</div>-->
      </div>
      <a class="ivu-notice-notice-close" @click="closeMessage"><i class="ivu-icon ivu-icon-ios-close"></i></a>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      title: {
        type: String,
        default: '系统异常，请暂停对该功能的使用，联系研发'
      },
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isShowMessage: false
      }
    },
    methods: {
      closeMessage () {
        this.$emit('closeMessage')
      }
    },
    watch: {
      isShow (val) {
        this.isShowMessage = val
      }
    }
  }
</script>

<style scoped lang="less">
  .my-message-box {
    position: fixed;
    top: 50px;
    left: 50%;
    margin-left: -170px;
    .my-message-container {
      max-width: 400px;
      padding: 16px;
      border-radius: 4px;
      box-shadow: 0 1px 6px rgba(0,0,0,.2);
      background-color: #fff;
      position: relative;
      overflow: hidden;
      .my-message-icon {
        top: 11px;
        font-size: 24px;
        color: #ed4014;
        position: absolute;
      }
      .my-message-title {
        margin-left: 25px;
        font-size: 14px;
        line-height: 17px;
        padding-right: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        height: 17px;
      }
      .my-message-content {
        font-size: 12px;
        margin-left: 51px;
        text-align: justify;
        line-height: 1.5;
        height: 36px;
        overflow: hidden;
      }
    }
  }
</style>

<!--个人-->
<template>
  <div>
    <HeaderTop/>
    <section class="loginTypes">
      <div class="logoWrap">
        <img src="./images/1.png" alt="">
      </div>
      <div class="btnWrap">
        <div class="loginWay phone" @click="$router.push('/login')">
          <i class="iconfont icon-mobilephone"></i>
          <span>手机号码登录</span>
        </div>
        <div class="loginWay email" @click="$router.push('/login')">
          <i class="iconfont icon-duanxin"></i>
          <span>邮箱账号登陆</span>
        </div>
        <div class="loginWay register">
          <span>手机号快捷注册</span>
          <i class="iconfont icon-right"></i>
        </div>
      </div>
      <div class="other">
        <span class="itemWrap">
          <i class="iconfont"></i>
          微信
        </span>
        <span class="itemWrap">
          <i class="iconfont"></i>
          QQ
        </span>
        <span class="itemWrap">
          <i class="iconfont"></i>
          微博
        </span>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .loginTypes
    width 100%
    height 623px
    .logoWrap
      text-align: center
      padding 80px 0
      img
        width 134px
        height: 45px
    .btnWrap
      padding 0 20px
      margin-bottom 103px
      .loginWay
        width 335px
        height 45px
        line-height 45px
        font-size 14px
        margin-bottom 16px
        text-align: center
        border 1px solid $red
      .phone
        background $red
        color #fff
      .email
        color $red
      .register
        border 0
        color #333
  .other
    width 100%
    height 20px
    position absolute
    bottom 40px
    text-align: center
    .itemWrap
      width 30%
      text-align: center
      padding 0 20px
      border-right 1px solid #979797
      color: #7F7F7F
</style>

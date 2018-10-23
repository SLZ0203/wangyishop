<template>
  <div class="wrap">
    <HeaderTop/>
    <section class="container">
      <div class="logo">
        <img src="./images/1.png" alt="">
      </div>
      <div class="text">
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div class="loginBtn" @click="$router.push('/person')">
        <div class="btn">其它登陆方式</div>
        <span>
          注册账号
          <i class="iconfont icon-right"></i>
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
  .container
    width 100%
    height 622px
    background #fff
    .logo
      text-align: center
      img
        width 96px
        height 31px
        margin-top 27px
    .text
      width 100%
      height 80px
      line-height 80px
      margin-top 100px

      input
        width 100%
        height 60px
        text-align: center
        background #f4f4f4
    .loginBtn
      width 100%
      height 82px
      box-sizing border-box
      padding 0 20px
      text-align: center
      .btn
        width 100%
        height 45px
        line-height 45px
        border 1px solid $red
        color $red
        margin-bottom 15px
      span
        font-size 14px
        color #666
</style>

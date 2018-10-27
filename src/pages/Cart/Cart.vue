<!--购物车-->
<template>
  <section class="wrap">
    <header class="cartHeader">
      <span>购物车</span>
      <a href="javascript:;" @click="$router.replace('/person')">领券</a>
    </header>
    <section class="shopPromise">
      <ul>
        <li>
          <i class="iconfont icon-shixinxiaoyuandian"></i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i class="iconfont icon-shixinxiaoyuandian"></i>
          <span>48小时快速退款</span>
        </li>
        <li>
          <i class="iconfont icon-shixinxiaoyuandian"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </section>
    <section class="cartList">
      <img src="./images/1.png" class="cartImg">
      <div class="noCart">
        <p>去添加点什么吧</p>
        <button class="login" @click="$router.push('/login')">登陆</button>
      </div>
    </section>
  </section>
</template>
<script>
  export default {
    data() {
      return {}
    },
    components: {
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .wrap
    height 100%
    width 100%
    .cartHeader
      height 44px
      background #fff
      line-height 44px
      padding 0 15px
      text-align: center
      span
        font-size 18px
        margin-left 36px
      a
        float right
        font-size 14px
        color $red
    .shopPromise
      width 100%
      font-size 12px
      ul
        padding 0 10px
        clearFix()
        li
          float left
          width 33%
          line-height 35px
          color #666
          text-align: center
          .iconfont
            margin-right -5px
    .cartList
      width 100%
      height 530px
      position relative
      .cartImg
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
        width 130px
        height 130px
      .noCart
        width 100%
        text-align: center
        position: absolute
        top 315px
        p
          color: #999
          font-size 14px
          margin-bottom 20px
        .login
          width 240px
          height 46px
          background $red
          border 0
          font-size 14px
          color #fff
</style>

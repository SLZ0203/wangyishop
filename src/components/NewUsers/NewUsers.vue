<template>
  <section>
    <transition name="fade">
      <div class="newUsers" v-if="isShow">
        <div class="mask"></div>
        <i class="iconfont icon-close" @click="isShow = false"></i>
        <div class="gift">
          <div class="giftWrap">
            <div class="titleWrap">
              <i class="title">- 新人专享礼 -</i>
            </div>
            <p class="thank">感谢使用网易严选, 已为你准备了一份专享礼</p>
            <div class="shop">
              <img
                src="http://yanxuan.nosdn.127.net/4c372b5314d26235324abb0cf7f0713a.jpg?imageView&amp;quality=85&amp;thumbnail=232y232"
                alt="">
              <div class="hot">
                <div class="hot_name">花样年华女士小白鞋</div>
                <div class="hot_tedian"><i>舒适透气，时尚经典</i></div>
                <div class="hot_price">
                  <span class="now">￥ 259.00</span>
                  <span class="old">￥ 899</span>
                </div>
              </div>
            </div>
            <div>
              <div class="get">
                <span>领券立减</span>
                <span>¥ 60.00</span>
              </div>
              <div class="more">查看更多特惠商品</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        isShow: true
      }
    },
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .newUsers
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 10000
    &.fade-enter-active, &.fade-leave-active {
      transition: opacity 1s;
    }
    &.fade-enter, &.fade-leave-to {
      opacity: 0;
    }
    .mask
      position absolute
      top 0
      left 0
      z-index 0
      width 100%
      height 100%
      background-color rgba(0, 0, 0, .5)
    .iconfont
      width 40px
      height 40px
      line-height 40px
      font-size 25px
      text-align: center
      color #fff
      position absolute
      top 50px
      right 20px
      border 1px solid #fff
      border-radius 50%
    .gift
      position: absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      z-index 1
      padding 20px
      .giftWrap
        padding 15px 12px
        box-sizing border-box
        width 335px
        height 350px
        background #fff
        border-radius 3%
        .titleWrap
          text-align: center
          .title
            font-size 20px
            font-weight 700
        .thank
          text-align: center
          margin 35px 0 15px 0
          font-size 12px
        .shop
          width 100%
          height 120px
          background #eee
          border-radius 5%
          img
            height 100%
            float left
          .hot
            padding 25px 0
            margin-left 123px
            font-size 14px
            color #333
            .hot_name
              margin-bottom 14px
            .hot_tedian
              margin-bottom 14px
              i
                border 1px solid #7e8c8d
            .hot_price
              .now
                color $red
              .old
                color #999
                text-decoration line-through
        .get
          width 100%
          height 48px
          line-height 48px
          text-align: center
          color: #fff
          background $red
          margin-top 10px
          font-size 14px
        .more
          width 100%
          height 48px
          line-height 48px
          text-align: center
          margin-top 10px
          border 1px solid #7e8c8d
          font-size 14px
</style>

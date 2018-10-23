<!--分类-->
<template>
  <div class="wrap">
    <header class="search">
      <div class="text" @click="$router.push('/search')">
        <span>
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品，共16808款好物</span>
        </span>
      </div>
    </header>
    <div class="navWrap">
      <ul class="list">
        <li class="on">推荐专区</li>
        <li>秋季专区</li>
        <li>新品专区</li>
        <li>爆品专区</li>
        <li>居家</li>
        <li>鞋包配饰</li>
        <li>推荐专区</li>
        <li>秋季专区</li>
        <li>新品专区</li>
        <li>爆品专区</li>
        <li>居家</li>
        <li>鞋包配饰</li>
        <li>鞋包配饰</li>
      </ul>
    </div>
    <div class="Container">
      <img src="./images/3.jpg" class="tejia">
      <ul class="list">
        <li>
          <img src="./images/1.png" alt="">
          <span>服装每满100减20</span>
        </li>
        <li>
          <img src="./images/2.png" alt="">
          <span>服饰特价低至7折</span>
        </li>
        <li>
          <img src="./images/1.png" alt="">
          <span>服装每满100减20</span>
        </li>
        <li>
          <img src="./images/2.png" alt="">
          <span>服饰特价低至7折</span>
        </li>
        <li>
          <img src="./images/1.png" alt="">
          <span>服装每满100减20</span>
        </li>
        <li>
          <img src="./images/2.png" alt="">
          <span>服饰特价低至7折</span>
        </li>
        <li>
          <img src="./images/1.png" alt="">
          <span>服装每满100减20</span>
        </li>
        <li>
          <img src="./images/2.png" alt="">
          <span>服饰特价低至7折</span>
        </li>
        <li>
          <img src="./images/1.png" alt="">
          <span>服装每满100减20</span>
        </li>
        <li>
          <img src="./images/2.png" alt="">
          <span>服饰特价低至7折</span>
        </li>
        <li>
          <img src="./images/1.png" alt="">
          <span>服装每满100减20</span>
        </li>
        <li>
          <img src="./images/2.png" alt="">
          <span>服饰特价低至7折</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },
    mounted(){
      new BScroll('.navWrap', {
        click: true,
        scrollX: true
      });
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .wrap
    width 100%
    height 578px
    .search
      position fixed
      left 0
      top 0
      z-index 5
      width 100%
      height 44px
      background #fff
      box-sizing border-box
      padding 0 15px
      .text
        width 100%
        height 28px
        line-height 28px
        background #eee
        border-radius 6px
        margin-top 8px
        text-align: center
        font-size 14px
        color #7e8c8d
    .navWrap
      width 80px
      height 580px
      margin-top 45px
      background #fff
      position fixed
      top 0
      left 0
      margin-right 1px
      .list
        width 100%
        padding-top 34px
        li
          width 100%;
          height 25px
          line-height 25px
          font-size 13px
          text-align center
          border none
          margin-bottom 30px
          &.on
            border-left 2px solid $red
            color $red
    .Container
      width 293px
      height 100%
      margin 45px 0 0 82px
      box-sizing border-box
      background #fff
      padding 15px 15px 10px 15px
      .tejia
        width 100%
        height 96px
        margin-bottom 16px
      .list
        li
          float left
          width 72px
          height 108px
          margin-right 15px
          font-size 12px
          text-align: center
          img
            width 100%
</style>

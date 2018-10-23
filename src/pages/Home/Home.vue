<!--首页-->
<template>
  <div>
    <!--新人礼页面-->
    <NewUsers/>
    <!--头部-->
    <header class="headerWrap">
      <div class="shopSearch">
        <h3>网易严选</h3>
        <input type="text" placeholder="搜索商品，共计9999款好物">
        <i class="iconfont iconfont-search"></i>
      </div>
      <div class="swiperWrap">
        <ul class="shopNav">
          <li class="active">推荐</li>
          <li>居家</li>
          <li>鞋包配饰</li>
          <li>服装</li>
          <li>电器</li>
          <li>洗护</li>
          <li>饮食</li>
          <li>餐厨</li>
          <li>婴童</li>
          <li>文体</li>
          <li>特色区</li>
        </ul>
      </div>

    </header>
    <!--内容区域-->
    <section class="scrollWrap">
      <div class="homeContainer">
        <!--轮播图区域-->
        <div class="swipeWrap">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./images/1.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/2.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/3.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/4.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/5.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/6.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/7.jpg" alt="">
              </div>
            </div>
            <ul class="swiper-pagination">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <ul class="shopPromise">
            <li>
              <i class="iconfont icon-duigou01"></i>
              <span>网易自营品牌</span>
            </li>
            <li>
              <i class="iconfont icon-duigou01"></i>
              <span>30天无忧退货</span>
            </li>
            <li>
              <i class="iconfont icon-duigou01"></i>
              <span>48小时快速退款</span>
            </li>
          </ul>
        </div>
        <!--商品列表-->
        <div class="shopList">
          <header class="title">
            <span>品牌制造商直供</span>
            <i class="iconfont icon-right"></i>
          </header>
          <ul class="brand">
            <li>
              <div class="info">
                <p>海外制造商</p>
                <p>9.9元起</p>
                <span>
                <i class="iconfont icon-shangxin"></i>
              </span>
              </div>
              <img src="./images/1.png" alt="">
            </li>
            <li>
              <div class="info">
                <p>海外制造商</p>
                <p>9.9元起</p>
                <span>
                <i class="iconfont icon-shangxin"></i>
              </span>
              </div>
              <img src="./images/2.png" alt="">
            </li>
            <li>
              <div class="info">
                <p>海外制造商</p>
                <p>9.9元起</p>
                <span>
                <i class="iconfont icon-shangxin"></i>
              </span>
              </div>
              <img src="./images/3.png" alt="">
            </li>
            <li>
              <div class="info">
                <p>海外制造商</p>
                <p>9.9元起</p>
                <span>
                <i class="iconfont icon-shangxin"></i>
              </span>
              </div>
              <img src="./images/4.png" alt="">
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import BScroll from 'better-scroll'
  import NewUsers from '../../components/NewUsers/NewUsers.vue'
  export default {
    methods: {},
    mounted() {
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay: true,
        speed: 800,
      });

      //导航栏滑动
      new BScroll('.swiperWrap', {
        click: true,
        scrollX: true
      });
      //页面竖向滑屏
      new BScroll('.scrollWrap', {
        click: true,
      })
    },
    components:{
      NewUsers,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .headerWrap
    width 100%
    position fixed
    top 0
    z-index 100
    background #fff
    .shopSearch
      width 100%
      height 40%
      padding 2px 0 0 13px
      display flex
      h3
        font-family "楷体"
        font-weight 500
        font-size 20px
        float left
        line-height 40px
      input
        background #eee
        height 30px
        width 65%
        margin 3px 0 0 20px
        font-size 14px
        border-radius 5px
        text-align: center
    .shopNav
      width 200%
      height 40%
      padding-left 18px
      display flex
      clearFix()
      li
        padding 0 18px
        font-size 14px
        color: #333
        line-height 36px
        &.active
          border-bottom 3px solid $red
          color: $red
  .scrollWrap
    height 600px
    .homeContainer
      width 100%
      height 2000px
      .swipeWrap
        width 100%
        height 210px
        margin-top 82px
        .swiper-container
          img
            height 175px
            width 100%
        .shopPromise
          height 35px
          padding 0 10px
          background #fff
          clearFix()
          li
            float left
            width 33%
            .iconfont
              color red
            span
              font-size 12px
              line-height 35px
      .shopList
        background #fff
        margin-top 10px
        padding 5px
        .title
          height 50px
          line-height 50px
          text-align: center
        .brand
          width 100%
          clearFix()
          li
            float left
            width 48.5%
            height 50%
            background #f4f4f4
            margin 2px
            position relative
            .info
              position absolute
              left 10px
              top 10px
              p
                font-size 13px
                padding-bottom 8px
              span
                .iconfont
                  font-size 28px
                  color: rosybrown
            img
              width 177px
              height 119px

</style>

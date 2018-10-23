<!--识物-->
<template>
  <div>
    <HeaderTop/>
    <section class="wrap">
      <div class="bannerWarp">
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
          </div>
        </div>
      </div>
      <div class="article">
        <ul class="list">
          <li>
            <img src="./images/9.png" alt="">
            <span>严选推荐</span>
            <span class="number">385篇文章</span>
          </li>
          <li>
            <img src="./images/9.png" alt="">
            <span>严选推荐</span>
            <span class="number">385篇文章</span>
          </li>
          <li>
            <img src="./images/9.png" alt="">
            <span>严选推荐</span>
            <span class="number">385篇文章</span>
          </li>
          <li>
            <img src="./images/9.png" alt="">
            <span>严选推荐</span>
            <span class="number">385篇文章</span>
          </li>
          <li>
            <img src="./images/9.png" alt="">
            <span>严选推荐</span>
            <span class="number">385篇文章</span>
          </li>
          <li>
            <img src="./images/9.png" alt="">
            <span>严选推荐</span>
            <span class="number">385篇文章</span>
          </li>
          <li>
            <img src="./images/9.png" alt="">
            <span>严选推荐</span>
            <span class="number">385篇文章</span>
          </li>
          <li>
            <img src="./images/9.png" alt="">
            <span>严选推荐</span>
            <span class="number">385篇文章</span>
          </li>
          <li>
            <img src="./images/9.png" alt="">
            <span>严选推荐</span>
            <span class="number">385篇文章</span>
          </li>


        </ul>
      </div>
    </section>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },
    mounted() {
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
      });
      new BScroll('.article', {
        click: true,
        scrollX: true
      });
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .bannerWarp
    width 100%
    height 216px
    box-sizing border-box
    padding 12px 0
    background #fff
    .swiper-container
      overflow visibility !important
      img
        width 100%

  .article
    background #fff
    width 100%
    height 143px
    padding 15px
    box-sizing border-box
    margin-bottom 10px
    .list
      width 255%
      clearFix()
      li
        float left
        width 82px
        height 110px
        margin-right 12px
        text-align: center
        font-size 12px
        position relative
        img
          width 100%
          margin-bottom 10px
        .number
          font-size 12px
          color: #fff
          background-color:rgba(0,0,0,0.2)
          position absolute
          right 0
          top 0
</style>

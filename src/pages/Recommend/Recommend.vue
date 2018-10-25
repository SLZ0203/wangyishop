<!--识物-->
<template>
  <div>
    <HeaderTop/>
    <section class="wrap">
      <div>
        <div class="bannerWarp">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in detail.banner">
                <img :src="item.picUrl" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="article">
          <ul class="list">
            <li v-for="(col,index) in detail.column">
              <img :src="col.picUrl" alt="">
              <span>{{col.title}}</span>
              <span class="number">{{col.articleCount}}</span>
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
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex';

  export default {
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('getDetail', () => {
        this.$nextTick(() => {
          this._initScroll()
        })
      })
    },
    computed: {
      ...mapState(['detail'])
    },
    methods: {
      _initScroll() {
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
      width 220%
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
          background-color: rgba(0, 0, 0, 0.2)
          position absolute
          right 0
          top 0
</style>

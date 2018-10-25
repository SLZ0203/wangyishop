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
          <li v-for="(head,index) in home.headCateList" :key="index"
              @click="upDataNum(index)" :class="{active:index===num}">{{head.name}}
          </li>
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
              <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                <img :src="item.picUrl" alt="">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="shopPromise">
            <li v-for="(poli,index) in home.policyDescList" :key="index">
              <i class="iconfont icon-duigou01"></i>
              <span>{{poli.desc}}</span>
            </li>
          </ul>
        </div>
        <!--品牌制造商列表-->
        <div class="shopList">
          <header class="title">
            <span>品牌制造商直供</span>
            <i class="iconfont icon-right"></i>
          </header>
          <ul class="brand" v-if="home">
            <li v-for="(item,index) in newHome" :key="index">
              <div class="info">
                <p>{{item.name}}</p>
                <p>{{item.floorPrice}}元起</p>
                <span>
                <i class="iconfont icon-shangxin"></i>
              </span>
              </div>
              <img :src="item.picUrl" alt="">
            </li>
          </ul>
        </div>
        <!--新品首发列表-->
        <NewStarter :newItem="home.newItemNewUserList"/>
        <!--人气推荐列表-->
        <HotThings :hotItem="home.popularItemList"/>
        <!--福利社-->
        <section class="boonWrap">

        </section>
        <!--专题精选列表-->
        <ProjectGoods :proItem="home.topicList"/>
        <!--好物列表-->
        <GoodThings :home="home"/>
      </div>
    </section>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import {mapState, mapGetters} from 'vuex';
  import 'swiper/dist/css/swiper.min.css';
  import BScroll from 'better-scroll'
  import NewUsers from '../../components/NewUsers/NewUsers.vue'
  import GoodThings from '../../components/GoodThings/GoodThings.vue'
  import NewStarter from '../../components/NewStarter/NewStarter.vue'
  import HotThings from '../../components/HotThings/HotThings.vue'
  import ProjectGoods from '../../components/ProjectGoods/ProjectGoods.vue'

  export default {
    data() {
      return {
        num: 0
      }
    },
    methods: {
      upDataNum(index) {
        this.num = index
      },

      //初始化滚动
      _initScroll() {
        //导航栏滑动
        new BScroll('.swiperWrap', {
          click: true,
          scrollX: true
        });
        //页面竖向滑屏
        new BScroll('.scrollWrap', {
          click: true,
        })
      }
    },
    mounted() {
      //异步获取home数据
      this.$store.dispatch('getHome', () => {
        this.$nextTick(() => {
          this._initScroll()
        })
      });
      //异步获取banner数据
      this.$store.dispatch('getBanner', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true,
            autoplay: true,
            speed: 800,
          });
        })
      });

    },

    computed: {
      ...mapState(['banner', 'home']),
      ...mapGetters(['newHome'])
    },
    components: {
      NewUsers,
      GoodThings,
      NewStarter,
      HotThings,
      ProjectGoods
    },
    watch: {
      home: function (val) {

      }
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
      width 175%
      height 40%
      padding-left 10px
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
      .swipeWrap
        width 100%
        height 210px
        margin-top 82px
        .swiper-container
          img
            height 175px
            width 100%
          .swiper-pagination-bullet
            width 19px
            height 3px
            border-radius 0
            background #fff
            opacity .4
          .swiper-pagination-bullet-active
            opacity 1
            background #fff
            border-radius 0
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
        margin 10px 0
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

      .boonWrap
        width 100%
        height 150px
        margin-bottom 10px
        background-image url(http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg)
        background-size 100%
</style>

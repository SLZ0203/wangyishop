<!--识物-->
<template>
  <section>
    <HeaderTop/>
    <section class="recoWrap">
      <section class="papaWrap">
        <!--轮播图-->
        <div class="bannerWarp">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in detail.banner">
                <img v-lazy="item.picUrl" alt="">
              </div>
            </div>
          </div>
        </div>
        <!--推荐文章列表-->
        <div class="article">
          <ul class="list">
            <li v-for="(col,index) in detail.column">
              <img v-lazy="col.picUrl" alt="">
              <span>{{col.title}}</span>
              <span class="number">{{col.articleCount}}</span>
            </li>
          </ul>
        </div>
        <!--严选推荐列表-->
        <BestChoose :detail="detail"/>
        <!--十点一刻TenFifteen-->
        <TenFifteen :tenItem="detail.tenfifteen"/>
        <!--严选甄品RecommZhenpin-->
        <RecommZhenpin :detail="detail"/>
        <!--严选Look-->
        <RecommLook :yxLook="detail.yxLook"/>
        <!--更多精彩-->
        <MoreThings :moreItem="detail.findMore"/>
        <!--底部声明-->
        <FtWrap/>
      </section>
    </section>
  </section>
</template>
<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex';
  import BestChoose from '../../components/BestChoose/BestChoose.vue'
  import TenFifteen from '../../components/TenFifteen/TenFifteen.vue'
  import RecommZhenpin from '../../components/RecommZhenpin/RecommZhenpin.vue'
  import RecommLook from '../../components/RecommLook/RecommLook.vue'
  import MoreThings from '../../components/MoreThings/MoreThings.vue'

  export default {
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
        //轮播图
        new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
        });
        //文章列表横向滑屏
        new BScroll('.article', {
          click: true,
          scrollX: true
        });
        //整体页面竖向滑屏
        new BScroll('.recoWrap', {
          click: true,
        });
      }
    },
    components: {
      BestChoose,
      TenFifteen,
      RecommZhenpin,
      RecommLook,
      MoreThings
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .recoWrap
    width 100%
    height 575px
    z-index -1
    margin-top 45px
    .papaWrap
      width 100%
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
        display flex
        .list
          display flex
          li
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

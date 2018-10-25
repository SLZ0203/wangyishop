<!--分类-->
<template>
  <div class="classWrap">
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
        <!-- class="on"-->
        <li v-for="(item,index) in nav.categoryL1List" :key="index" @click="getIndex(index)"
            :class="{on: index === num}">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="scrollWrap">
      <ClassItem :nav="nav" :num="num"/>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex';
  import ClassItem from '../../components/ClassItem/ClassItem.vue'

  export default {
    data() {
      return {
        num: 0
      }
    },
    mounted() {
      this.$store.dispatch('getNav', () => {
        this.$nextTick(() => {
          this._initScroll()
        });
      });

    },
    methods: {
      getIndex(index) {
        this.num = index;
      },

      //初始化滚动方法
      _initScroll() {
        new BScroll('.navWrap', {
          click: true,
          scrollX: true
        });
        new BScroll('.scrollWrap', {
          click: true,
        })
      }

    },
    computed: {
      ...mapState(['nav'])
    },
    components: {
      ClassItem
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .classWrap
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
        padding-top 17px
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
    .scrollWrap
      height 100%
      width 293px
      margin 45px 0 0 82px
      box-sizing border-box
      background #fff
      padding 15px 15px 10px 15px
</style>

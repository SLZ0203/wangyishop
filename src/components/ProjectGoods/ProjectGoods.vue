<!--专题精选列表-->
<template>
  <section class="projectGoods">
    <header class="pro_title">
      <span>专题精选</span>
      <i class="iconfont icon-right-circle"></i>
    </header>
    <section class="pro_wrap">
      <ul class="pro_list">
        <li class="pro_item" v-for="(item,index) in proItem" :key="index">
          <img :src="item.itemPicUrl" alt="">
          <div class="pro_name">
            <span>{{item.subtitle}}</span>
            <span class="price">{{item.priceInfo}}元起</span>
          </div>
          <div class="pro_msg">{{item.title}}</div>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
  import BScroll from 'better-scroll';

  export default {
    props: {
      proItem: Array
    },
    mounted() {
      new BScroll('.pro_wrap', {
        click: true,
        scrollX: true
      });
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .projectGoods
    width 100%
    background #fff
    margin-bottom 10px
    .pro_title
      height 55px
      display flex
      align-items center
      justify-content center
    .pro_wrap
      width 100%
      .pro_list
        padding 0 15px 15px 15px
        box-sizing border-box
        clearFix()
        width 248%
        .pro_item
          width 288px
          float left
          margin-right 12px
          img
            width 100%
          .pro_name
            margin 10px 0
            font-size 14px
            .price
              float right
              color: $red
          .pro_msg
            font-size 12px
            color #666
</style>

<!--新品首发列表-->
<template>
  <section class="hotThings">
    <header class="title">
      <span class="new">人气推荐·好物精选</span>
      <div class="more">
        <span>查看全部</span>
        <i class="iconfont icon-right"></i>
      </div>
    </header>
    <section class="hotWrap">
      <ul class="newList">
        <li class="item" v-for="(i,index) in hotItem">
          <img v-lazy="i.listPicUrl">
          <p class="name ellipsis">{{i.name}}</p>
          <p class="info ellipsis">{{i.simpleDesc}}</p>
          <p class="pirce">￥{{i.retailPrice}}</p>
        </li>
        <li class="item seeMore">查看全部</li>
      </ul>
    </section>
  </section>
</template>
<script>
  import BScroll from 'better-scroll';

  export default {
    props: {
      hotItem: Array,
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.hotWrap', {
          click: true,
          scrollX: true
        });
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .hotThings
    width 100%
    margin-bottom 10px
    background #fff
    .title
      text-align: center
      height 130px
      background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png")
      background-size 375px 130px
      color: #B4A078
      margin-bottom 15px
      position relative
      .new
        font-size 18px
        position absolute
        top 28%
        left 30%
      .more
        position absolute
        top 50%
        left 34%
        background #F4E9CB
        width 120px
        height 28px
        line-height 28px
        font-size 15px
    .hotWrap
      width 100%
      display flex
      .newList
        display flex
        .item
          width 130px
          margin-left 15px
          img
            width 100%
            background #f4f4f4
          .info
            font-size 12px
            margin 13px 0 8px
            color #666
          .name
            font-size 14px
          .pirce
            color $red
        .seeMore
          height 130px
          line-height 130px
          text-align: center
          border 2px solid #f4f4f4

</style>

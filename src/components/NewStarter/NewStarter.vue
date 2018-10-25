<!--新品首发列表-->
<template>
  <section class="newStarter">
    <header class="title">
      <span class="new">新品首发</span>
      <div class="more">
        <span>查看全部</span>
        <i class="iconfont icon-right"></i>
      </div>
    </header>
    <section class="newWrap">
      <ul class="newList">
        <li class="item" v-for="(item,index) in newItem">
          <img :src="item.listPicUrl">
          <p class="name ellipsis">{{item.name}}</p>
          <p class="info ellipsis">{{item.simpleDesc}}</p>
          <p class="pirce">￥{{item.retailPrice}}</p>
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
      newItem: Array,
    },
    mounted(){
      new BScroll('.newWrap', {
        click: true,
        scrollX: true
      });
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .newStarter
    width 100%
    margin-bottom 10px
    background #fff
    .title
      text-align: center
      height 130px
      background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png")
      background-size 375px 130px
      color: #8BA0B6
      margin-bottom 15px
      position relative
      .new
        font-size 18px
        position absolute
        top 28%
        left 40%
      .more
        position absolute
        top 50%
        left 34%
        background #D8E5F1
        width 120px
        height 28px
        line-height 28px
        font-size 15px
    .newWrap
      width 100%
      .newList
        width 361%
        clearFix()
        .item
          float left
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

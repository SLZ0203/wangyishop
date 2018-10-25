<!--好物列表-->
<template>
  <section>
    <ul class="classify" v-if="home.cateList">
      <li class="itemClass" v-for="(item,index) in home.cateList" :key="index">
        <header class="title">
          <p class="intro">{{item.name}}好物</p>
        </header>
        <ul class="every">
          <li class="everyItem" v-for="(i,index) in item.itemList" :key="index">
            <img :src="i.listPicUrl">
            <p class="info ellipsis">{{i.simpleDesc}}</p>
            <p class="name">{{i.name}}</p>
            <p class="pirce">￥{{i.retailPrice}}</p>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    props: {
      home: Object,
    },

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .classify
    background #fff
    .itemClass
      margin-bottom 15px
      .title
        text-align: center
        height 60px
        line-height 50px
        .intro
          font-size 16px
          color: #333
      .every
        width 100%
        clearFix()
        .everyItem
          width 50%
          box-sizing border-box
          padding 0 5px 7px 10px
          float left
          img
            width 100%
          .info
            height 30px
            line-height 25px
            font-size 12px
            text-align: center
            background #F1ECE2
            color #9F8A60
          .name
            margin 13px 0 8px
            font-size 14px
          .pirce
            color $red
</style>

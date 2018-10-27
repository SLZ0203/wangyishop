<template>
  <section class="moreThings">
    <header class="more_title">更多精彩</header>
    <ul class="more_list" v-if="moreItem">
      <li class="more_item" v-for="(item,index) in moreItem">
        <img v-lazy="item.itemPicUrl">
        <p class="more_text ellipsis">{{item.subtitle}}</p>
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    props: {
      moreItem: Array
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .moreThings
    width 100%
    padding 0 15px
    box-sizing border-box
    .more_title
      height 70px
      line-height 70px
      text-align: center
      font-size 14px
    .more_list
      width 100%
      .more_item
        background #fff
        padding 12px
        box-sizing border-box
        margin-bottom 15px
        img
          width 321px
          height 178px
        .more_text
          padding 14px 0
          font-size 14px
</style>

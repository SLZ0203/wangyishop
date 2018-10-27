<template>
  <section class="Container" v-if="nav.categoryL1List">
    <img v-lazy="nav.categoryL1List[num].bannerUrl" class="tejia">
    <ul class="list">
      <li v-for="(item,index) in nav.categoryL1List[num].subCateList" :key="index">
        <img v-lazy="item.wapBannerUrl" alt="">
        <span>{{item.name}}</span>
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    props: {
      nav: Object,
      num: Number
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Container

    .tejia
      width 100%
      height 96px
      margin-bottom 16px
    .list
      clearFix()
      li
        float left
        width 72px
        height 108px
        margin-right 15px
        font-size 12px
        text-align: center
        img
          width 100%
</style>

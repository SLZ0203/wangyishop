<!--购物车-->
<template>
  <div class="searchWrap">
    <div class="search">
      <input type="text" placeholder="爆品进口乳胶 AB面独立弹簧床垫 领券优惠">
      <i class="iconfont icon-sousuo"></i>
      <span class="cancle" @click="$router.back()">取消</span>
    </div>
    <div class="shopView">
      <header class="title">热门搜索</header>
      <ul class="list">
        <li class="item highlight">秋冬女鞋</li>
        <li class="item">锅</li>
        <li class="item">棉拖鞋</li>
        <li class="item highlight">抖音足贴</li>
        <li class="item highlight">网红款去污剂</li>
        <li class="item">保温杯</li>
        <li class="item">手机配件</li>
        <li class="item">世界男性健康日</li>
        <li class="item">云音乐</li>
        <li class="item highlight">行李箱</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../src/common/stylus/mixins.styl"
  .searchWrap
    width 100%
    background #fff
    overflow hidden
    .search
      width 100%
      padding 0 15px
      line-height 43px
      input
        width 73%
        height 33px
        background #f4f4f4
        font-size 12px
        padding-left 30px
        position relative
        top 0
      .iconfont
        position absolute
        top 4px
        left 22px
      .cancle
        font-size 13px
        margin-left 10px
    .shopView
      height 162px
      padding 0 14px 10px
      .title
        height 40px
        line-height 40px
      .list
        height 158px
        .item
          font-size 13px
          border 1px solid #999
          float left
          padding 3px 8px
          margin 0 15px 20px 0
          &.highlight
            color $red
            border-color $red
</style>

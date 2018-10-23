<!--头部区域-->
<template>
  <header class="topHeader">
    <div class="headerWrap">
      <span class="home" @click="$router.push('./home')">
      <i class="iconfont icon-icontabbarhomeup"></i>
    </span>
      <span class="title">网易严选</span>
      <span class="search">
      <i class="iconfont icon-sousuo" @click="$router.push('./search')"></i>
    </span>
      <span class="cart">
      <i class="iconfont icon-shoppingcart" @click="$router.push('./cart')"></i>
    </span>
    </div>
  </header>
</template>
<script>
  export default {
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .topHeader
    width 100%
    height 45px
    .headerWrap
      width 100%
      line-height 45px
      background #fff
      padding 0 8px
      position fixed
      top 0
      .iconfont
        font-size 26px
      .title
        font-size 20px
        font-family "楷体"
        font-weight 500
        position absolute
        top:0
        left:50%
        margin-left -32px
      .search
        position absolute
        right 70px
      .cart
        position absolute
        right 30px
</style>

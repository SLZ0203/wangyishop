<template>
  <footer class="footer_guide">
    <div class="guide_item" @click="goTo('/home')" :class="{on:isChecked('/home')}">
      <span>
        <i class="iconfont icon-icontabbarhomeup"></i>
      </span>
      <span class="guide_name">首页</span>
    </div>
    <div class="guide_item" @click="goTo('/recommend')" :class="{on:isChecked('/recommend')}">
      <span>
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span class="guide_name">识物</span>
    </div>
    <div class="guide_item" @click="goTo('/classify')" :class="{on:isChecked('/classify')}">
      <span>
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span class="guide_name">分类</span>
    </div>
    <div class="guide_item" @click="goTo('/cart')" :class="{on:isChecked('/cart')}">
      <span>
        <i class="iconfont icon-shoppingcart"></i>
      </span>
      <span class="guide_name">购物车</span>
    </div>
    <div class="guide_item" @click="goTo('/person')" :class="{on:isChecked('/person')}">
      <span>
        <i class="iconfont icon-gerenzhongxin"></i>
      </span>
      <span class="guide_name">个人</span>
    </div>
  </footer>
</template>
<script>
  export default {
    methods: {
      goTo(path) {
        this.$router.replace(path)
      },
      isChecked(path) {
        return this.$route.path === path;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide
    width 100%
    background #fafafa
    position fixed
    bottom 0
    display flex
    .guide_item
      text-align center
      width 20%
      display flex
      flex-direction column
      color #666666
      font-size 14px
      padding-top 5px
      .iconfont
        font-size 20px
      .guide_name
        margin-top 5px
      &.on
        color #b4282d
</style>

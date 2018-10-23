<template>
  <div class="backGround">
    <div class="row">
      <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg">
      <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg">
    </div>
    <div class="row">
      <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg">
      <div class="download-app"></div>
      <router-link to="/home" class="gotoBtn" replace></router-link>
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
  .backGround
    width 100%
    margin 0 auto;
    background #eee;
    line-height 1.5;
    color #333
    height 100%
    .row
      position relative
      width: 100%
      margin-right auto
      margin-left auto
      padding-top 93px
      &:nth-child(2){
        padding-top 0
      }
      img
        width 100%
        vertical-align top
      .download-app
        width 217px
        height 50px
        left 79px
        bottom 143px
        position absolute
      .gotoBtn
        position absolute
        left 125px
        bottom 85px
        display block
        width 127px
        height 15px
</style>

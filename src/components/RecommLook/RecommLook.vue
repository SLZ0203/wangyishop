<template>
  <section class="recommLook" v-if="yxLook">
    <header class="look_title">严选LOOK</header>
    <section class="look_img">
      <img v-lazy="yxLook.picUrl">
    </section>
    <section class="look_content">
      <div class="avator_user">
        <img v-lazy="yxLook.avatar">
        <span class="username">{{yxLook.nickname}}</span>
      </div>
      <div class="look_text">{{yxLook.content}}</div>
    </section>
  </section>
</template>
<script>
  export default {
    props: {
      yxLook: Object
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .recommLook
    width 100%
    background #fff
    .look_title
      text-align: center
      height 60px
      line-height 60px
    .look_img
      width 100%
      img
        width 100%
    .look_content
      padding 12px 15px 23px 15px
      .avator_user
        margin-bottom 15px
        img
          border-radius 50%
          width 23px
          height 23px
          vertical-align middle
        .username
          color #666
          font-size 14px
      .look_text
        font-size 14px
        line-height 1.6
        color #7f7f7f
</style>

<template>
  <section class="recommZhenpin">
    <header class="zhenpin_title">严选甄品</header>
    <section class="zhenpin_list">
      <div class="zhenpin_one zhenWrap" v-if="detail.zhenOne">
        <img v-lazy="detail.zhenOne.picUrl" alt="">
        <section class="one_text">
          <div class="one_title">{{detail.zhenOne.title}}</div>
          <div class="one_content">{{detail.zhenOne.subTitle}}</div>
        </section>
      </div>
      <div class="zhenWrap zhenpin_two_three" v-if="detail.zhenTwo">
        <section>
          <div class="title">{{detail.zhenTwo.title}}</div>
          <div class="content ellipsis">{{detail.zhenTwo.title}}</div>
        </section>
        <div class="zhen_name">严选甄品</div>
        <img :src="detail.zhenTwo.picUrl" alt="">
      </div>
      <div class="zhenWrap zhenpin_two_three" v-if="detail.zhenThree">
        <section>
          <div class="title">title{{detail.zhenThree.title}}</div>
          <div class="content ellipsis">{{detail.zhenThree.subTitle}}</div>
        </section>
        <div class="zhen_name">严选甄品</div>
        <img :src="detail.zhenThree.picUrl" alt="">
      </div>
    </section>
  </section>
</template>
<script>
  export default {
    props: {
      detail: Object
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .recommZhenpin
    width 100%
    background #fff
    margin-bottom 10px
    padding 0 15px 10px 15px
    box-sizing border-box
    .zhenpin_title
      text-align: center
      height 60px
      line-height 60px
    .zhenpin_list
      width 100%
      .zhenWrap
        margin-bottom 15px
        border 1px solid #d9d9d9
      .zhenpin_one
        .one_text
          padding 12px 10px 33px 10px
          .one_title
            font-size 18px
            margin 8px 0 15px 0
          .one_content
            font-size 14px
            color #666
        img
          width 100%
          height 100%
      .zhenpin_two_three
        display flex
        justify-content center
        align-items center
        position relative
        padding-left 10px
        box-sizing border-box
        .title
          width 95%
          font-size 18px
          color #333
          margin-bottom 10px
        .content
          font-size 12px
          color #666
          width 80%
        .zhen_name
          height 20px
          line-height 20px
          width 80px
          text-align: center
          border-radius 20%
          position absolute
          top 6px
          right 46px
          display inline-block
          background #fff
        img
          margin-left 30px
          width 40%

</style>

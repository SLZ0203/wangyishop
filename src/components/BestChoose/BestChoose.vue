<template>
  <section class="bestChoose" v-if="detail.recommendOne">
    <header class="be_title">严选推荐</header>
    <section class="be_img">
      <img v-lazy="detail.recommendOne.picUrl">
      <div class="be_name">严选推荐</div>
    </section>
    <section class="be_list">
      <header class="list_title">
        <span>{{detail.recommendOne.nickname}}</span>
        <span class="li_price">9.9元起</span>
        <p class="list_info">{{detail.recommendOne.subTitle}}</p>
      </header>
      <ul class="list_con">
        <li class="li_item">
          <div class="li_text">
            <img class="avatar" :src="detail.recommendTwo.avatar">
            <span class="li_name">{{detail.recommendTwo.nickname}}</span>
            <p class="year ellipsis">{{detail.recommendTwo.title}}</p>
            <p class="youhui">{{detail.recommendTwo.subTitle}}</p>
          </div>
          <img class="item_Img" v-lazy="detail.recommendTwo.picUrl">
        </li>
        <li class="li_item">
          <div class="li_text">
            <img class="avatar" v-lazy="detail.recommendThree.avatar">
            <span class="li_name">{{detail.recommendThree.nickname}}</span>
            <p class="year ellipsis">{{detail.recommendThree.title}}</p>
            <p class="youhui">{{detail.recommendTwo.subTitle}}</p>
          </div>
          <img class="item_Img" v-lazy="detail.recommendThree.picUrl">
        </li>
      </ul>
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
  .bestChoose
    padding 0 15px 20px 15px
    background #fff
    margin-bottom 10px
    .be_title
      height 60px
      line-height 60px
      text-align: center
    .be_img
      position relative
      width 100%
      height 188px
      margin-bottom 15px
      img
        width 100%
      .be_name
        height 22px
        line-height 22px
        width 80px
        text-align: center
        border-radius 20%
        position absolute
        top 18px
        left 15px
        display inline-block
        background #fff
    .be_list
      .list_title
        height 60px
        padding 12px 10px 0 10px
        span
          font-size 18px
        .li_price
          float right
        .list_info
          font-size 12px
          color #999
          margin-top 15px
      .list_con
        .li_item
          width 100%
          margin-bottom 15px
          padding 12px 15px 0 10px
          box-sizing border-box
          border 1px solid #d9d9d9
          display flex
        .li_text
          margin-right 30px
          padding 0 10px
          box-sizing border-box
          .avatar
            width 18%
            border-radius 50%
            vertical-align middle
          .li_name
            font-size 12px
            color #999
          .year
            width 141px
            font-size 18px
            color #333
            margin-bottom 15px
          .youhui
            font-size 12px
            color #666
        .item_Img
          width 40%
          height 50%
          margin-bottom 12px
</style>

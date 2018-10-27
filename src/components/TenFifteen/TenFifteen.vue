<!--十点一刻-->
<template>
  <section class="queryTen">
    <header class="qu_title">十点一刻</header>
    <section class="qu_Scroll">
      <ul class="qu_list">
        <li class="qu_item" v-for="(item,index) in tenItem" :key="index">
          <p class="item_title">
            —<span>今日话题</span>—
          </p>
          <div class="item_name">{{item.title}}</div>
          <div class="item_text">{{item.desc}}</div>
          <div class="item_talking">
            <span v-for="(avatar,index) in item.participantAvatar" :key="index">
              <img v-lazy="avatar">
            </span>
            <div class="item_avatar">
              <div class="doc"></div>
              <div class="doc"></div>
              <div class="doc"></div>
            </div>
            <span class="item_person">{{item.participantNum}}人参与话题</span>
          </div>
        </li>
        <li class="qu_more">
          <div class="seemore">
            <span>查看全部话题</span>
            <i class="iconfont icon-right-circle"></i>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
  import BScroll from 'better-scroll';

  export default {
    props: {
      tenItem: Array
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.qu_Scroll', {
          click: true,
          scrollX: true
        });
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .queryTen
    background #fff
    margin-bottom 10px
    padding 0 15px 15px 20px
    .qu_title
      text-align: center
      height 60px
      line-height 60px
    .qu_Scroll
      width 100%
      display flex
      .qu_list
        display flex
        .qu_item
          width 250px
          height 147px
          text-align: center
          padding 19px 20px 38px 20px
          margin-right 15px
          background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png)
          background-repeat no-repeat
          background-size 100% 100%
          .item_title
            font-size 12px
            color #666
            margin-bottom 22px
            span
              margin 0 5px
          .item_name
            margin-bottom 15px
            font-size 18px
            font-weight 600
          .item_text
            font-size 14px
            color #666
          .item_talking
            margin-top 35px
            display flex
            justify-content center
            align-items center
            img
              width 30px
              vertical-align middle
              border-radius 50%
            .item_avatar
              width 22px
              height 22px
              background-color #d9d9d9
              display flex
              justify-content center
              align-items center
              border-radius 50%
              .doc
                width 3px
                height 3px
                background #fff
                border-radius 50%
                margin-right 2px

            .item_person
              font-size 12px
              color #666
        .qu_more
          float left
          height 182px
          width 280px
          border 5px solid #e6e6e6
          position relative
          .seemore
            width 120px
            height 19px
            color #666
            position absolute
            top 0
            bottom 0
            left 0
            right 0
            margin auto
</style>

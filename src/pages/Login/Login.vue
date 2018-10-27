<template>
  <section class="loginWrap">
    <HeaderTop/>
    <section class="login_way">
      <div class="logo_Img">
        <img src="./images/1.png">
        <div class="item_way">
          <span v-show="loginWay">短信登录</span>
          <span v-show="!loginWay">邮箱登录</span>
        </div>
      </div>
      <div class="login_phone" v-if="loginWay">
        <input type="text" placeholder="请输入手机号码" class="phone" v-model="phone">
        <input type="text" placeholder="请输入验证码" v-model="code">
        <div class="getCode" @click="getCode">{{computeTime > 0 ? `已发送(${computeTime}s)` : '获取验证码'}}</div>
      </div>
      <div class="login_email" v-else>
        <input type="text" placeholder="请输入邮箱" class="phone" v-model="email">
        <input :type="isShowPwd ? 'text' : 'password'" placeholder="请输入邮箱密码" class="emailpwd" v-model="emailPwd">
        <div class="switch_button" @click="isShowPwd = !isShowPwd" :class="isShowPwd ? 'on' : 'off'">
          <div class="switch_circle" :class="{right: isShowPwd}"></div>
          <span class="switch_text">{{isShowPwd ? 'abc' : '...'}}</span>
        </div>
        <input type="text" placeholder="验证码" v-model="captcha">
        <img class="get_verification" src="./images/captcha.svg" alt="captcha" ref="captcha">
      </div>
      <div class="loginBtn">
        <span class="login_hint">
          温馨提示：未注册网易严选帐号的手机号，登录时将自动注册，且代表已同意
          <a href="javascript:;">《用户服务协议》</a>
        </span>
        <div class="loginTo" @click="login">登录</div>
        <div class="otherLogin" @click="$router.push('/person')">其它登陆方式</div>
        <span>
          <span>注册账号</span>
          <i class="iconfont icon-right"></i>
        </span>
      </div>
    </section>
  </section>
</template>
<script>
  import {Toast, MessageBox} from 'mint-ui';
  import {mapState} from 'vuex';

  export default {
    data() {
      return {
        phone: '',//电话号码
        code: '', //短信验证码
        email: '',//邮箱
        emailPwd: '',//邮箱密码
        captcha: '', //图形验证码
        /*loginWay: true, //true:短信  false：邮箱*/
        computeTime: 0, //倒计时时间
        isShowPwd: false //是否显示密码
      }
    },
    methods: {
      //发送短信验证码
      getCode() {
        Toast('已发送');
        this.computeTime = 60;
        const interId = setInterval(() => {
          if (this.computeTime <= 0) {
            clearInterval(interId);
            this.computeTime = 0;
            return
          }
          this.computeTime--;
        }, 1000)
      },

      //登陆验证
      login() {
        if (this.loginWay) { //短信
          const {phone, code} = this;
          if (!/^1\d{10}$/.test(phone)) {
            return MessageBox.alert('请输入正确手机号')
          } else if (!/^\d{6}$/.test(code)) {
            return MessageBox.alert('请输入正确的验证码')
          }
        } else { //邮箱
          const {email, emailPwd, captcha} = this;
          if (!email) {
            return MessageBox.alert('请输入邮箱')
          } else if (!emailPwd) {
            return MessageBox.alert('请输入邮箱密码')
          } else if (!/^.{4}$/.test(captcha)) {
            return MessageBox.alert('请输入正确验证码')
          }
        }
      }
    },
    computed: {
      ...mapState(['loginWay'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginWrap
    width 100%
    height 662px
    background #fff
    .login_way
      margin-top 45px
      padding 30px 37px 0 37px
      .logo_Img
        padding 20px 0 5px
        text-align: center
        img
          width 132px
        .item_way
          color: $red
          padding-top 40px
      .login_phone
        margin-top 10px
        position relative
        input
          width 100%
          height 50px
          border 1px solid #999
          box-sizing border-box
          outline 0
          border-radius 5px
          padding-left 4px
          margin-bottom 15px
        .getCode
          position absolute
          top 14%
          right 3%
          color #666
      .login_email
        margin-top 10px
        position relative
        input
          width 100%
          height 50px
          border 1px solid #999
          box-sizing border-box
          outline 0
          border-radius 5px
          padding-left 4px
          margin-bottom 15px
        .get_verification
          position absolute
          top 78%
          right 0
          transform translateY(-50%)
          border 0
          color #ccc
          font-size 14px
          background transparent
        .switch_button
          font-size 12px
          border 1px solid #ddd
          border-radius 8px
          transition background-color .3s, border-color .3s
          padding 0 6px
          width 30px
          height 16px
          line-height 16px
          color #fff
          position absolute
          top 45%
          right 10px
          transform translateY(-50%)
          &.off
            background #fff
            .switch_text
              float right
              color #ddd
          &.on
            background $red
          > .switch_circle
            position absolute
            top -1px
            left -1px
            width 16px
            height 16px
            border 1px solid #ddd
            border-radius 50%
            background #fff
            box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
            transition transform .3s
            &.right
              transform translateX(27px)
      .loginBtn
        width 100%
        text-align: center
        .login_hint
          font-size 12px
          color #999
          a
            color $red
        .loginTo
          width 100%
          height 45px
          line-height 45px
          margin 10px 0 15px
          background $red
          color #fff
        .otherLogin
          width 100%
          height 45px
          line-height 45px
          border 1px solid $red
          box-sizing border-box
          color $red
          margin-bottom 15px
        span
          font-size 14px
          color #666
</style>

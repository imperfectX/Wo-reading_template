<template>
  <div class="message">
    <!-- 头部 -->
    <van-nav-bar
      title="我的信息"
      left-text
      left-arrow
      @click-left="onClickLeft"
      style="font-weight=700;"
      :border="false"
    />
    <!-- 信息 -->
    <div class="login">
      <div class="font-login">
        <span>昵称</span>
        <span>18888888888</span>
        <img src="../../../static/images/2134349.png" alt>
      </div>
    </div>
    <div class="login">
      <div class="font-login">
        <span>绑定手机</span>
        <span>18888888888</span>
        <img src="../../../static/images/312134953.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    onClickLeft() {
      history.back();
    }
  }
};
</script>

<style lang="less">
.message {
  padding: 0 0.2rem;
  // 头部
  > .van-nav-bar {
    background-color: #fff;
    .van-nav-bar__left {
      .van-icon {
        color: black;
        font-weight: 700;
        position: relative;
        left: -0.2rem;
      }
    }
    > .van-nav-bar__title {
      font-weight: 700;
    }
  }
  > .login {
    margin-top: 0.2rem;
    box-shadow: 0 0.02rem 0.1rem 0 rgba(0, 0, 0, 0.1);
    height: 0.64rem;
    width: 100%;
    border-radius: 0.05rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    background-color: #fff;
    > .font-login {
      position: relative;
      > span {
        display: block;
      }
      > span:nth-child(1) {
        font-size: 0.13rem;
        color: rgba(0, 0, 0, 0.3);
        letter-spacing: 1.3px;
        padding: 0.1rem 0 0.05rem 0;
      }
      > span:nth-child(2) {
        font-size: 0.14rem;
        color: #000;
        letter-spacing: 0.58px;
      }
      > img {
        position: absolute;
        top: 0.2rem;
        right: 0;
      }
    }
  }
}
</style>
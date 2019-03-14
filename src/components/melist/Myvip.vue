<template>
  <div class="myvip">
    <!-- 头部 -->
    <van-nav-bar
      title="我的会员"
      left-text
      left-arrow
      @click-left="onClickLeft"
      style="font-weight=700;"
      :border="false"
    />
    <div class="center">铂金/黄金会员才能免费领取哦
      <br>
      <router-link to="/me/opening" class="a-opening">赶紧去开通吧</router-link>
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
.myvip {
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

  .center {
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    text-align: center;
    width: 88.9%;
    line-height: 0.2rem;
    > .a-opening {
      color: #7e8c8d;
      -webkit-backface-visibility: hidden;
      text-decoration: none;
    }
  }
}
</style>
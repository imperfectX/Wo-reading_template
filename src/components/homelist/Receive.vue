<template>
  <div class="receive">
    <!-- 头部 -->
    <van-nav-bar
      title="会员领取"
      left-text
      left-arrow
      @click-left="onClickLeft"
      style="font-weight=700;"
      :border="false"
    />
    <!-- 开通会员 -->
    <router-link to="/me/Opening" tag="div" class="receive-vip">
      <span>点击立即开通!</span>
      <p>您还未开通会员，每月热门VIP权益等着您，立即开通</p>
    </router-link>
    <!-- tab栏 -->
    <van-tabs v-model="active" :swipeable="true">
      <van-tab title="黄金会员">
        <!-- 会员列表 -->
        <router-link to="/me/Opening" tag="div" class="vip-list receive-vip">
          <div class="spus">
            <img
              src="http://club.10155.com/credit-res/productlogo/10000825/1fda5eda-d498-4c2f-bb1a-bb9d196f8199.jpeg"
              alt
            >
          </div>
          <div class="spu">
            <span>英语趣配音VIP会员（7天）</span>
            <span>市场价：6元</span>
            <span>会员：免费</span>
            <div>开通会员</div>
          </div>
        </router-link>
      </van-tab>
      <van-tab title="铂金会员">
        <!-- 会员列表 -->
        <router-link to="/me/Opening" tag="div" class="vip-list receive-vip">
          <div class="spus">
            <img
              src="http://club.10155.com/credit-res/productlogo/10000855/6d5b5686-4c88-44b3-a774-d0a992ff864b.jpeg"
              alt
            >
          </div>
          <div class="spu">
            <span>英语趣配音VIP会员（7天）</span>
            <span>市场价：6元</span>
            <span>会员：免费</span>
            <div>开通会员</div>
          </div>
        </router-link>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 0,
    flag: false,
  }),
  methods: {
    onClickLeft() {
      history.back();
    },
  }
};
</script>

<style lang="less">
.receive {
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
  // 开通会员
  .receive-vip {
    margin-top: 0.2rem;
    box-shadow: 0 0.02rem 0.1rem 0 rgba(0, 0, 0, 0.1);
    height: 0.75rem;
    width: 100%;
    border-radius: 0.05rem;
    padding: 0.1rem 0.2rem 0 0.2rem;
    box-sizing: border-box;
    font-size: 0.14rem;
    > span {
      background: linear-gradient(-135deg, #74bcf7, #ad6bff);
      color: #fff;
      border-radius: 0.05rem;
      padding: 0.01rem 0.04rem;
    }
    > p {
      margin: 0.02rem 0 0 0;
    }
  }
  // tab栏
  .van-hairline--top-bottom::after {
    border-width: 0 0;
  }
  > .van-tabs {
    > .van-tabs__wrap {
      > .van-tabs__nav {
        > .van-tabs__line {
          text-align: center;
          height: 0.04rem;
          background: linear-gradient(-135deg, #74bcf7, #ad6bff);
          margin: 0 auto !important;
          transition-duration: 0.3s;
          border-radius: 0.3rem;
        }
        > .van-tab {
          color: black;
        }
        .van-tab--active {
          font-size: 0.18rem;
          font-weight: 550;
          color: #ad6bff;
          background: linear-gradient(-135deg, #74bcf7, #ad6bff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
    .vip-list {
      height: 0.9rem;
      position: relative;
      > .spus {
        width: 0.6rem;
        height: 0.6rem;
        background: #eee;
        border-radius: 0.13rem;
        border: 0.01rem solid #dedede;
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 0.5rem;
        transform: translate(-50%, -50%);
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .spu {
        float: left;
        margin: 0.05rem 0 0 0.85rem;
        > span {
          display: block;
        }
        > span:nth-child(2) {
          font-size: 0.12rem;
          color: #a9b2c7;
          line-height: 0.17rem;
          margin: 0.02rem 0;
        }
        > span:nth-child(3) {
          font-size: 0.14rem;
          line-height: 0.2rem;
          color: #ad6bff;
        }
        > div {
          background-image: linear-gradient(-135deg, #74bcf7, #ad6bff);
          color: #fff;
          border-radius: 0.3rem;
          height: 0.25rem;
          line-height: 0.25rem;
          padding: 0 0.15rem;
          font-size: 0.12rem;
          overflow: hidden;
          text-align: center;
          display: inline-block;
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
          opacity: 1;
          position: absolute;
          top: 0.44rem;
          right: 0.2rem;
        }
      }
    }
  }
}
</style>
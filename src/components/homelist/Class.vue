<template>
  <div class="receive">
    <!-- 头部 -->
    <van-nav-bar
      title="分类推荐"
      left-text
      left-arrow
      @click-left="onClickLeft"
      style="font-weight=700;"
      :border="false"
    />
    <!-- tab栏 -->
    <van-tabs v-model="active" :swipeable="true">
      <van-tab title="今日推荐">
        <!-- 今日推荐列表 -->
        <router-link to="/me/class/Detail" tag="div" class="vip-list receive-vip">
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
          </div>
        </router-link>
        <router-link to tag="div" class="vip-list receive-vip">
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
          </div>
        </router-link>
      </van-tab>
      <van-tab title="视频">
        <!-- 视频列表 -->
        <router-link to tag="div" class="vip-list receive-vip">
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
          </div>
        </router-link>
      </van-tab>
      <van-tab title="音乐">
        <!-- 音乐列表 -->
        <router-link to tag="div" class="vip-list receive-vip">
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
          </div>
        </router-link>
      </van-tab>
      <van-tab title="知识">
        <!-- 知识列表 -->
        <router-link to tag="div" class="vip-list receive-vip">
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
          </div>
        </router-link>
      </van-tab>
      <van-tab title="生活">
        <!-- 生活列表 -->
        <router-link to tag="div" class="vip-list receive-vip">
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
    flag: false
  }),
  methods: {
    onClickLeft() {
      history.back();
    }
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
  // tab栏
  .van-hairline--top-bottom::after {
    border-width: 0 0;
  }
  .van-ellipsis {
  }
  > .van-tabs {
    > .van-tabs__wrap {
      > .van-tabs__nav {
        > .van-tabs__line {
          height: 0.04rem;
          background: linear-gradient(-135deg, #74bcf7, #ad6bff);
          margin: 0 auto !important;
          transition-duration: 0.3s;
          border-radius: 0.3rem;
        }
        > .van-tab {
          color: black;
          font-size: 12px;
        }
        .van-tab--active {
          font-size: 14px;
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
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
      margin-top: 0.1rem;
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
        margin: 0.13rem 0 0 1rem;
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
      }
    }
  }
}
</style>
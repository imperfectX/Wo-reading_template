<template>
  <div class="detail">
    <!-- 头部 -->
    <van-nav-bar
      title="分类推荐"
      left-text
      left-arrow
      @click-left="onClickLeft"
      style="font-weight=700;"
      :border="false"
    />
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" class="swipe-img">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" class="swipe-img">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: [
      "http://club.10155.com/credit-res/productdetail/10000207/c5772150-a0d3-4fa0-8c9b-954b760ba0a9.data:",
      "http://club.10155.com/credit-res/productdetail/10000207/c5772150-a0d3-4fa0-8c9b-954b760ba0a9.data:"
    ]
  }),
  methods: {
    onClickLeft() {
      history.go(-1);
    }
  }
};
</script>

<style lang="less">
.detail {
  // 头部
  > .van-nav-bar {
    background-color: #fff;
    .van-nav-bar__left {
      .van-icon {
        color: black;
        font-weight: 700;
        position: relative;
        // left: -0.2rem;
      }
    }
    > .van-nav-bar__title {
      font-weight: 700;
    }
  }
  // 轮播图
  > .swipe-img {
    height: 282px;
    width: 100%;
    border-radius: 0.05rem;
    box-shadow: 0 0.02rem 0.1rem 0 rgba(0, 0, 0, 0.1);
    margin: 0 10px;
    .van-swipe-item {
      overflow: visible;
      .swipe-img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>